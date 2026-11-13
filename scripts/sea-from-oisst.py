import sys, json, math
sys.path.insert(0, '/private/tmp/claude-501/-Users-mottalib/6ca46ef2-6451-47e9-854f-6be4fd62d8d0/scratchpad/src')
from destinations import DESTS
import netCDF4 as nc, numpy as np
d = nc.Dataset('/private/tmp/claude-501/-Users-mottalib/6ca46ef2-6451-47e9-854f-6be4fd62d8d0/scratchpad/src/oisst/sst.mon.ltm.1991-2020.nc')
lat = d.variables['lat'][:]; lon = d.variables['lon'][:]; sst = d.variables['sst'][:]  # (12,720,1440) masked
yrs = d.variables['valid_yr_count'][:] if 'valid_yr_count' in d.variables else None
out = {}
for row in DESTS:
    sid, name, *_ = row; la, lo, sea = row[4], row[5], row[8]
    if not sea: out[sid] = None; continue
    lo360 = lo % 360
    i0 = int(np.argmin(np.abs(lat - la))); j0 = int(np.argmin(np.abs(lon - lo360)))
    best = None
    for di in range(-6, 7):
        for dj in range(-6, 7):
            i = i0 + di; j = (j0 + dj) % 1440
            if i < 0 or i >= 720: continue
            v = sst[:, i, j]
            if np.ma.is_masked(v) and v.mask.any(): continue
            dist = math.hypot((lat[i] - la) * 111, (((lon[j] - lo360 + 180) % 360) - 180) * 111 * math.cos(math.radians(la)))
            if best is None or dist < best[0]: best = (dist, i, j, [round(float(x), 1) for x in v])
    if best is None: out[sid] = None; print('NO SEA', name); continue
    out[sid] = {'km': round(best[0]), 'lat': round(float(lat[best[1]]), 3), 'lon': round(float(((lon[best[2]] + 180) % 360) - 180), 3), 'sst': best[3]}
    print(f"{name:32} {best[0]:5.0f} km  {best[3]}")
json.dump(out, open('/private/tmp/claude-501/-Users-mottalib/6ca46ef2-6451-47e9-854f-6be4fd62d8d0/scratchpad/src/sea.json', 'w'))
print('climatology:', d.variables['climatology_bounds'][0, :] if 'climatology_bounds' in d.variables else '', getattr(d, 'history', '')[:300])
