/** Climate engine: monthly normals 1991-2020 per destination, read from climate.json (built by scripts/build-data.py). Pure functions only. */
import DATA from '../../data/climate.json';

export type Month = number; // 1..12
export interface Dest {
  id: string; name: string; country: string; region: string; lat: number; lon: number;
  station: { id: string; label: string };
  tmax: number[]; tmin: (number | null)[]; rain: (number | null)[]; wet: (number | null)[];
  years: { tmax: number[]; tmin: number[]; rain: number[] };
  daylight: number[]; km_from_london: number;
  sea: { sst: number[]; km: number; lat: number; lon: number } | null;
}
export const DESTS: Dest[] = (DATA as { destinations: Dest[] }).destinations;
export const PERIOD = (DATA as { period: string }).period;
export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const MONTH_SLUGS = MONTHS.map((m) => m.toLowerCase());

export function dest(id: string): Dest {
  const d = DESTS.find((x) => x.id === id);
  if (!d) throw new Error(`Unknown destination ${id}`);
  return d;
}
const at = <T>(a: T[], m: Month): T => a[m - 1];
/** Shown and compared as whole numbers, so that a figure on screen never contradicts a verdict. */
const r = (v: number | null) => (v === null ? null : Math.round(v));
export const high = (d: Dest, m: Month) => Math.round(at(d.tmax, m));
export const low = (d: Dest, m: Month) => r(at(d.tmin, m));
export const rain = (d: Dest, m: Month) => r(at(d.rain, m));
export const wet = (d: Dest, m: Month) => r(at(d.wet, m));
export const sea = (d: Dest, m: Month) => (d.sea ? Math.round(at(d.sea.sst, m)) : null);
export const daylight = (d: Dest, m: Month) => at(d.daylight, m);
export const prev = (m: Month): Month => (m === 1 ? 12 : m - 1);
export const next = (m: Month): Month => (m === 12 ? 1 : m + 1);

export interface Criteria { minHigh: number; minSea: number | null; maxWet: number | null; maxKm: number | null }
export type Verdict = 'yes' | 'no' | 'unknown';
export interface Row { d: Dest; m: Month; high: number; sea: number | null; wet: number | null; ok: boolean; checks: { high: Verdict; sea: Verdict; wet: Verdict; km: Verdict } }

/** One destination against the reader's wishes. A missing record never counts as a pass: it is "unknown". */
export function check(d: Dest, m: Month, c: Criteria): Row {
  const s = sea(d, m), w = wet(d, m);
  const checks = {
    high: high(d, m) >= c.minHigh ? 'yes' : 'no',
    sea: c.minSea === null ? 'yes' : s === null ? 'unknown' : s >= c.minSea ? 'yes' : 'no',
    wet: c.maxWet === null ? 'yes' : w === null ? 'unknown' : w <= c.maxWet ? 'yes' : 'no',
    km: c.maxKm === null ? 'yes' : d.km_from_london <= c.maxKm ? 'yes' : 'no',
  } as Row['checks'];
  return { d, m, high: high(d, m), sea: s, wet: w, ok: Object.values(checks).every((v) => v === 'yes'), checks };
}
/** Every destination for a month, matches first, then by daytime high. */
export function rank(m: Month, c: Criteria): Row[] {
  return DESTS.map((d) => check(d, m, c)).sort((a, b) => Number(b.ok) - Number(a.ok) || b.high - a.high);
}
/** Months of a destination that pass, in calendar order. */
export function goodMonths(d: Dest, c: Criteria): Month[] {
  return MONTHS.map((_, i) => i + 1).filter((m) => check(d, m, c).ok);
}
/** The warmest and the coolest month by daytime high. */
export function warmest(d: Dest): Month { return d.tmax.indexOf(Math.max(...d.tmax)) + 1; }
export function coolest(d: Dest): Month { return d.tmax.indexOf(Math.min(...d.tmax)) + 1; }
export function wettest(d: Dest): Month | null { if (d.rain.some((v) => v === null)) return null; const a = d.rain as number[]; return a.indexOf(Math.max(...a)) + 1; }
/** Months whose sea surface is at least t °C. */
export function seaMonths(d: Dest, t: number): Month[] {
  return d.sea ? d.sea.sst.map((v, i) => (Math.round(v) >= t ? i + 1 : 0)).filter(Boolean) : [];
}
/** Destinations sorted by daytime high for a month. */
export function hottest(m: Month, n = DESTS.length): Dest[] { return [...DESTS].sort((a, b) => at(b.tmax, m) - at(a.tmax, m)).slice(0, n); }
/** Destinations within a distance of London, sorted by daytime high for a month. */
export function hottestWithin(m: Month, km: number, n = 5): Dest[] { return hottest(m).filter((d) => d.km_from_london <= km).slice(0, n); }

/** Short haul = within this straight-line distance of London; the home sentence and the finder share it. */
export const SHORT_HAUL_KM = 3500;
/** The finder's wishes before the reader changes anything: the home sentence is computed with the same ones. */
export const DEFAULT_CRITERIA: Criteria = { minHigh: 24, minSea: null, maxWet: null, maxKm: null };
/** How many places each list (short haul, long haul) shows before "Show all". */
export const FINDER_PREVIEW = 4;
export interface FinderGroup { key: 'near' | 'far'; rows: Row[]; visible: Row[] }
export interface FinderView { count: number; matched: boolean; near: Row | null; far: Row | null; groups: FinderGroup[]; hidden: number }
/**
 * What the finder shows, as data, so that the count, the list and the answer sentence cannot drift apart
 * (testeurs naïfs du 2026-11-14 : « 25 of 62 places match » with 8 shown, and Tenerife, named as the answer,
 * absent from the list because the list was the 8 warmest overall). The list is split in two, short haul and long
 * haul, each led by the place the answer names; `count` is the number of places the reader can reach with
 * "Show all", and `hidden` the number still folded. When nothing matches, the warmest places are listed instead.
 */
export function finderView(m: Month, c: Criteria, expanded = false): FinderView {
  const all = rank(m, c);
  const ok = all.filter((r) => r.ok);
  const matched = ok.length > 0;
  const pool = matched ? ok : all.slice(0, 2 * FINDER_PREVIEW);
  const group = (key: 'near' | 'far'): FinderGroup => {
    const rows = pool.filter((r) => (key === 'near' ? r.d.km_from_london <= SHORT_HAUL_KM : r.d.km_from_london > SHORT_HAUL_KM));
    return { key, rows, visible: expanded ? rows : rows.slice(0, FINDER_PREVIEW) };
  };
  const groups = [group('near'), group('far')];
  const shown = groups.reduce((s, g) => s + g.visible.length, 0);
  return { count: pool.length, matched, near: groups[0].rows[0] ?? null, far: groups[1].rows[0] ?? null, groups, hidden: pool.length - shown };
}
/** Places whose station misses the rain record for at least one month, by name. */
export const RAIN_GAPS: Dest[] = DESTS.filter((d) => d.rain.some((v) => v === null) || d.wet.some((v) => v === null)).sort((a, b) => a.name.localeCompare(b.name));
/** Thresholds shown under the finder fields ("24 °C: beach weather", "20 °C: most people swim"). */
export const SWIM_SEA = 20;
export interface BeachVerdict { beach: boolean; high: number; sea: number | null; swim: boolean | null; instead: Row | null }
/**
 * The month's verdict at the top of a place page (testeurs naïfs du 2026-11-14, tour 2 : "21 °C, is that good
 * or not?", the answer sat five screens down). Same threshold as the finder default; when the place falls short,
 * `instead` is the place the home answer names for that month (short haul first), never the place itself.
 */
export function beachVerdict(d: Dest, m: Month): BeachVerdict {
  const h = high(d, m), s = sea(d, m), beach = h >= DEFAULT_CRITERIA.minHigh;
  const v = finderView(m, DEFAULT_CRITERIA);
  const alt = v.matched ? (v.near ?? v.far) : null;
  return { beach, high: h, sea: s, swim: s === null ? null : s >= SWIM_SEA, instead: beach || !alt || alt.d.id === d.id ? null : alt };
}
