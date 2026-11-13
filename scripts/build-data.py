#!/usr/bin/env python3
"""Builds src/data/climate.json from raw NOAA files kept outside the repository.

Usage: python3 scripts/build-data.py <raw-dir>
  <raw-dir>/ghcn/<STATION>.csv.gz   GHCN-Daily by_station files (ncei.noaa.gov/pub/data/ghcn/daily/by_station/)
  <raw-dir>/sea.json                sea surface temperature per destination, extracted from NOAA OISST v2.1
                                    monthly long-term means 1991-2020 (sst.mon.ltm.1991-2020.nc) by scripts/sea-from-oisst.py

What is computed, per station and month, over 1991-2020:
  - a month of one year counts for temperature when at least 20 days have a value, and for rain when at least
    26 days have one (a missing day under-counts a total); rows with a quality flag are dropped;
  - the normal is the plain mean of the monthly values over the years available; the number of years is kept
    and published; a month with fewer than 10 years is not published at all;
  - wet days = days with at least 1.0 mm.
Daylight is sunrise-to-sunset length on the 15th of the month from latitude alone (standard formula, −0.833°).
No value is typed by hand: every figure on the site comes from this file.
"""
import csv, gzip, json, math, os, sys
from collections import defaultdict

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from destinations import DESTS  # noqa: E402

RAW = sys.argv[1]
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'src', 'data', 'climate.json')
Y0, Y1 = 1991, 2020
MIN_T_DAYS, MIN_P_DAYS, MIN_YEARS = 20, 26, 10


def station(sid):
    path = os.path.join(RAW, 'ghcn', f'{sid}.csv.gz')
    days = {'TMAX': defaultdict(dict), 'TMIN': defaultdict(dict), 'PRCP': defaultdict(dict)}
    with gzip.open(path, 'rt') as f:
        for row in csv.reader(f):
            el = row[2]
            if el not in days: continue
            y = int(row[1][:4])
            if y < Y0 or y > Y1: continue
            if row[5].strip(): continue  # quality flag set
            v = int(row[3])
            if v == -9999: continue
            ym = (y, int(row[1][4:6]))
            days[el][ym][int(row[1][6:8])] = v / 10.0
    # monthly values per year
    monthly = {k: defaultdict(list) for k in ('tmax', 'tmin', 'rain', 'wet')}
    for el, key in (('TMAX', 'tmax'), ('TMIN', 'tmin')):
        for (y, m), d in days[el].items():
            if len(d) >= MIN_T_DAYS: monthly[key][m].append(sum(d.values()) / len(d))
    for (y, m), d in days['PRCP'].items():
        if len(d) >= MIN_P_DAYS:
            monthly['rain'][m].append(sum(d.values()))
            monthly['wet'][m].append(sum(1 for x in d.values() if x >= 1.0))
    res = {}
    for key in ('tmax', 'tmin', 'rain', 'wet'):
        vals, years = [], []
        for m in range(1, 13):
            xs = monthly[key].get(m, [])
            years.append(len(xs))
            vals.append(round(sum(xs) / len(xs), 1) if len(xs) >= MIN_YEARS else None)
        res[key] = vals
        res[key + '_years'] = years
    return res


def daylight(lat, m):
    day_of_year = [15, 46, 74, 105, 135, 166, 196, 227, 258, 288, 319, 349][m - 1]
    decl = math.radians(23.44) * math.sin(2 * math.pi * (284 + day_of_year) / 365)
    phi = math.radians(lat)
    x = (math.sin(math.radians(-0.833)) - math.sin(phi) * math.sin(decl)) / (math.cos(phi) * math.cos(decl))
    if x <= -1: return 24.0
    if x >= 1: return 0.0
    return round(2 * math.degrees(math.acos(x)) / 15, 1)


def dist_km(a, b, c, d):
    p = math.pi / 180
    h = math.sin((c - a) * p / 2) ** 2 + math.cos(a * p) * math.cos(c * p) * math.sin((d - b) * p / 2) ** 2
    return 2 * 6371 * math.asin(math.sqrt(h))


sea = json.load(open(os.path.join(RAW, 'sea.json')))
LHR = (51.47, -0.46)
out = []
for d in DESTS:
    sid, name, country, region, lat, lon, st, st_label, has_sea = d[:9]
    s = station(st)
    if any(v is None for v in s['tmax']):
        print('DROP (daytime high incomplete):', name, s['tmax_years'], file=sys.stderr); continue
    # A month of night lows or rain with fewer than MIN_YEARS years stays null and is shown as "no usable record".
    rec = {
        'id': sid, 'name': name, 'country': country, 'region': region, 'lat': lat, 'lon': lon,
        'station': {'id': st, 'label': st_label},
        'tmax': s['tmax'], 'tmin': s['tmin'], 'rain': s['rain'], 'wet': s['wet'],
        'years': {'tmax': s['tmax_years'], 'tmin': s['tmin_years'], 'rain': s['rain_years']},
        'daylight': [daylight(lat, m) for m in range(1, 13)],
        'km_from_london': round(dist_km(LHR[0], LHR[1], lat, lon)),
        'sea': None,
    }
    sp = sea.get(sid)
    if has_sea and sp: rec['sea'] = {'sst': sp['sst'], 'km': sp['km'], 'lat': sp['lat'], 'lon': sp['lon']}
    out.append(rec)

json.dump({
    'period': '1991-2020', 'built': '2026-11-13',
    'sources': {
        'ghcn': 'NOAA NCEI, Global Historical Climatology Network daily (GHCN-Daily), version 3.35, files read on 13 November 2026',
        'oisst': 'NOAA NCEI/PSL, Optimum Interpolation SST v2.1, monthly long-term mean 1991-2020, file read on 13 November 2026',
    },
    'destinations': out,
}, open(OUT, 'w'), ensure_ascii=False, separators=(',', ':'))
print(len(out), 'destinations written to', os.path.relpath(OUT))
