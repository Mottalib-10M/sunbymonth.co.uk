/** Everything a page says in figures, from the engine. No climate figure is typed into a page. */
import * as C from './engine/climate';
import { toolLinks } from './tool-links';
import { deg, mm, days, km, hm, month, monthList, span, num, NONE } from './fmt';
const D = C.dest;
export type Namer = (d: C.Dest) => string;
const plain: Namer = (d) => d.name;
const NO_WETTEST = 'not known (months missing)';
const yearsOf = (d: C.Dest) => {
  const t = Math.min(...d.years.tmax), r = Math.max(...d.years.rain);
  return { t, r };
};
export const KIT = {
  C, D, MONTHS: C.MONTHS, NONE, num, deg, mm, days, km, hm, month, monthList, span,
  hi: (id: string, m: number) => deg(C.high(D(id), m)),
  lo: (id: string, m: number) => deg(C.low(D(id), m)),
  sea: (id: string, m: number) => deg(C.sea(D(id), m)),
  rain: (id: string, m: number) => mm(C.rain(D(id), m)),
  wet: (id: string, m: number) => days(C.wet(D(id), m)),
  day: (id: string, m: number) => hm(C.daylight(D(id), m)),
  dist: (id: string) => km(D(id).km_from_london),
  station: (id: string) => D(id).station.label,
  /** Where the sea figure is taken, in words: "just off the coast" under 10 km (km() rounds to 10, so a 4 km cell read "0 km offshore"). */
  seaKm: (id: string) => { const s = D(id).sea; return s ? (s.km < 10 ? 'just off the coast' : `about ${km(s.km)} off the coast`) : NONE; },
  warmest: (id: string) => month(C.warmest(D(id))),
  coolest: (id: string) => month(C.coolest(D(id))),
  wettest: (id: string) => { const m = C.wettest(D(id)); return m ? month(m) : NONE; },
  seaFrom: (id: string, t: number) => span(C.seaMonths(D(id), t)),
  minYears: (id: string) => yearsOf(D(id)).t,
  seaMin: (id: string) => { const s = D(id).sea; return s ? deg(Math.round(Math.min(...s.sst))) : NONE; },
  seaMax: (id: string) => { const s = D(id).sea; return s ? deg(Math.round(Math.max(...s.sst))) : NONE; },
  hiMax: (id: string) => deg(Math.round(Math.max(...D(id).tmax))),
  hiMin: (id: string) => deg(Math.round(Math.min(...D(id).tmax))),
  /** Months that pass a set of wishes, written as a span ("May to October"). */
  good: (id: string, minHigh: number, minSea: number | null = null, maxWet: number | null = null) => span(C.goodMonths(D(id), { minHigh, minSea, maxWet, maxKm: null })),
  /** Months with at most n wet days (unknown months excluded). */
  dryMonths: (id: string, n: number) => span(D(id).wet.map((v, i) => (v !== null && Math.round(v) <= n ? i + 1 : 0)).filter(Boolean)),
  /** Rain over the year, when every month has a record. */
  rainYear: (id: string) => { const r = D(id).rain; return r.some((v) => v === null) ? NONE : mm(Math.round((r as number[]).reduce((a, b) => a + b, 0))); },
  /** Difference of daytime high between two places in a month, in whole degrees. */
  gap: (a: string, b: string, m: number) => deg(Math.abs(C.high(D(a), m) - C.high(D(b), m))),
  /** Rank of a place among all destinations by daytime high in a month (1 = hottest). */
  rankOf: (id: string, m: number) => C.hottest(m).findIndex((d) => d.id === id) + 1,
  total: C.DESTS.length,
  /** For each month: the three hottest places within 3,500 km of London, and the three hottest beyond. */
  yearTable(name_: Namer = plain): string[][] {
    return C.MONTHS.map((name, i) => { const m = i + 1; const near = C.hottest(m).filter((d) => d.km_from_london <= C.SHORT_HAUL_KM).slice(0, 3); const far = C.hottest(m).filter((d) => d.km_from_london > C.SHORT_HAUL_KM).slice(0, 3);
      const w = (xs: C.Dest[]) => xs.map((d) => `${name_(d)} ${deg(C.high(d, m))}`).join(', ');
      return [name, w(near), w(far)]; });
  },
  /** One line per destination: when it is warm, when the sea is warm, its wettest month. */
  placeTable(name_: Namer = plain): string[][] {
    return [...C.DESTS].sort((a, b) => a.name.localeCompare(b.name)).map((d) => [name_(d), d.country, span(C.goodMonths(d, { ...C.DEFAULT_CRITERIA })), d.sea ? span(C.seaMonths(d, 22)) : 'inland', (() => { const w = C.wettest(d); return w ? month(w) : NO_WETTEST; })(), km(d.km_from_london)]);
  },
  /** Twelve-month table of one destination. */
  table12(id: string): string[][] {
    const d = D(id);
    return C.MONTHS.map((name, i) => { const m = i + 1; return [name, deg(C.high(d, m)), deg(C.low(d, m)), d.sea ? deg(C.sea(d, m)) : 'inland', mm(C.rain(d, m)), days(C.wet(d, m)), hm(C.daylight(d, m))]; });
  },
  /** All destinations for one month, hottest first. */
  monthTable(m: number, name_: Namer = plain): string[][] {
    return C.hottest(m).map((d) => [name_(d), d.country, deg(C.high(d, m)), deg(C.low(d, m)), d.sea ? deg(C.sea(d, m)) : 'inland', days(C.wet(d, m)), km(d.km_from_london)]);
  },
  /** Names of the n hottest destinations for a month within a distance, with their highs. */
  hotList(m: number, maxKm: number, n = 5): string {
    const xs = C.hottestWithin(m, maxKm, n);
    return xs.map((d) => `${d.name} (${deg(C.high(d, m))})`).join(', ').replace(/, ([^,]*)$/, ' and $1');
  },
  /** The home answer: the first place of each list of the finder, same month, same default wishes (C.finderView). */
  answer(m: number): string {
    const links = toolLinks();
    const v = C.finderView(m, C.DEFAULT_CRITERIA, false, (id) => id in links);
    const p = (r: C.Row | null) => (r ? `${r.d.name} (${deg(r.high)})` : 'none');
    return `in ${month(m)} the top short-haul pick is ${p(v.near)}; long haul, ${p(v.far)}`;
  },
  /** Names of the places with at least one month without a rain record. */
  rainGaps: () => C.RAIN_GAPS.map((d) => d.name).join(', ').replace(/, ([^,]*)$/, ' and $1'),
  rainGapCount: C.RAIN_GAPS.length,
  count: (m: number, c: C.Criteria) => C.rank(m, c).filter((r) => r.ok).length,
};
export type Kit = typeof KIT;
