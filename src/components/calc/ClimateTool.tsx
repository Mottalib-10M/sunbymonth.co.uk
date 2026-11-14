/**
 * The tool, three ways: "finder" (which destinations pass your wishes in a month), "place" (one destination, a month,
 * and optionally a second place side by side), "compare" (two places chosen freely). Everything runs in the browser
 * from climate.json; nothing typed is sent. First render = props and build-day month (RECETTE §17.5); the reader's
 * own month and a shared link arrive after mounting. The address changes only after an action (url-state.ts).
 */
import { useEffect, useMemo, useState } from 'react';
import NumberField from '../ui/NumberField';
import SelectField from '../ui/SelectField';
import { DESTS, MONTHS, SHORT_HAUL_KM, dest, finderView, beachVerdict, SWIM_SEA, DEFAULT_CRITERIA, high, low, sea, rain, wet, daylight, prev, next, type Criteria, type Row as FRow } from '../../lib/engine/climate';
import { deg, mm, days, km, hm, month as mName } from '../../lib/fmt';
import { readParams, num, str, updateURL } from '../../lib/url-state';
declare const __BUILD_DAY__: string;

const monthOpts = MONTHS.map((m, i) => ({ value: String(i + 1), label: m }));
const destOpts = [...DESTS].sort((a, b) => a.name.localeCompare(b.name)).map((d) => ({ value: d.id, label: `${d.name}, ${d.country}` }));
const SEA = [0, 18, 20, 22, 24, 26]; const WET = [0, 1, 3, 5, 8]; const KM = [0, 2000, 3500, 5000, 8000];
const buildMonth = () => Number(__BUILD_DAY__.slice(5, 7));
const box = 'rounded-xl border border-navy-200 bg-white p-4 sm:p-5';
/** One measure. Side by side, each value carries its place name (data-label): on a phone the row becomes a card,
 *  "Night low / Tenerife 18 °C / Majorca 12 °C" (testeurs naïfs du 2026-11-14 : the two values were stacked with no name). */
const Row = ({ l, v, w, na, nb }: { l: string; v: string; w?: string; na?: string; nb?: string }) => <tr><td data-label="" className="py-1.5 pr-3 align-top text-navy-600">{l}</td><td data-label={na ?? ''} className="tabular-nums py-1.5 text-right text-navy-900">{v}</td>{w !== undefined && <td data-label={nb ?? ''} className="tabular-nums py-1.5 pl-3 text-right text-navy-900">{w}</td>}</tr>;

export interface Props { mode: 'finder' | 'place' | 'compare'; fixedMonth?: number; place?: string; other?: string; idPrefix?: string; links?: Record<string, string>; methodHref: string }

export default function ClimateTool({ mode, fixedMonth, place, other, idPrefix = 't', links = {}, methodHref }: Props) {
  const [m, setM] = useState<number>(fixedMonth ?? buildMonth());
  const [minHigh, setMinHigh] = useState(24);
  const [minSea, setMinSea] = useState(0);
  const [maxWet, setMaxWet] = useState(0);
  const [maxKm, setMaxKm] = useState(0);
  const [all, setAll] = useState(false);
  const [a, setA] = useState(place ?? 'tenerife');
  const [b, setB] = useState(other ?? (mode === 'compare' ? 'majorca' : ''));
  useEffect(() => {
    const u = readParams(window.location.search);
    if (!fixedMonth) setM(Math.min(12, Math.max(1, Math.round(num(u, 'm', new Date().getMonth() + 1)))));
    if (mode === 'finder') { setMinHigh(num(u, 't', 24)); setMinSea(num(u, 's', 0)); setMaxWet(num(u, 'w', 0)); setMaxKm(num(u, 'k', 0)); }
    else { const pa = str(u, 'a', ''), pb = str(u, 'b', ''); if (mode === 'compare' && DESTS.some((d) => d.id === pa)) setA(pa); if (DESTS.some((d) => d.id === pb)) setB(pb); }
  }, []);
  useEffect(() => {
    if (mode === 'finder') updateURL({ m: fixedMonth ? undefined : m, t: minHigh, s: minSea || undefined, w: maxWet || undefined, k: maxKm || undefined });
    else updateURL({ m, a: mode === 'compare' ? a : undefined, b: b || undefined });
  }, [m, minHigh, minSea, maxWet, maxKm, a, b]);

  const monthField = !fixedMonth && <SelectField id={`${idPrefix}-month`} label="Month of travel" value={String(m)} onChange={(v) => setM(Number(v))} options={monthOpts} />;

  if (mode === 'finder') {
    const c: Criteria = { minHigh, minSea: minSea || null, maxWet: maxWet || null, maxKm: maxKm || null };
    const v = useMemo(() => finderView(m, c, all), [m, minHigh, minSea, maxWet, maxKm, all]);
    // Places without a page are plain text with a "no page yet" tag (testeurs naïfs, tour 2 : bold Goa looked like a link).
    const name = (r: FRow, tag = true) => (links[r.d.id] ? <a href={links[r.d.id]} className="font-semibold text-accent-700 underline">{r.d.name}</a> : <span className="text-navy-900">{r.d.name}{tag && <> <span className="text-xs text-navy-600">(no page yet)</span></>}</span>);
    const pick = (r: FRow | null) => r && <>{name(r, false)} ({deg(r.high)})</>;
    return (
      <div className="grid gap-4 md:grid-cols-2">
        <form className={`${box} grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2`} onSubmit={(e) => e.preventDefault()}>
          {monthField}
          <NumberField id={`${idPrefix}-high`} label="Daytime high at least" value={minHigh} onChange={setMinHigh} unit="°C" max={45} help="24 °C: beach weather. 20 °C: sightseeing." />
          <SelectField id={`${idPrefix}-sea`} label="Sea at least" value={String(minSea)} onChange={(x) => setMinSea(Number(x))} options={SEA.map((x) => ({ value: String(x), label: x ? `${x} °C` : 'Any sea, or no sea' }))} help="20 °C: most people swim." />
          <SelectField id={`${idPrefix}-wet`} label="Wet days at most" value={String(maxWet)} onChange={(x) => setMaxWet(Number(x))} options={WET.map((x) => ({ value: String(x), label: x ? `${x} in the month` : 'Any number' }))} help="Wet day: 1 mm of rain or more." />
          <SelectField id={`${idPrefix}-km`} label="Distance from London" value={String(maxKm)} onChange={(x) => setMaxKm(Number(x))} options={KM.map((x) => ({ value: String(x), label: x ? `Under ${km(x)}` : 'Any distance' }))} help="Straight line, not flight time." />
          {fixedMonth && <p className="self-end text-sm text-navy-600">Month set by this page: <strong className="text-navy-900">{mName(fixedMonth)}</strong>.</p>}
        </form>
        <div data-resultat aria-live="polite" className={box}>
          <p className="text-sm font-medium text-navy-600">{mName(m)}, averages 1991 to 2020</p>
          <p className="mt-1 text-3xl font-bold text-navy-900">{v.matched ? v.count : 0} of {DESTS.length} places match</p>
          {v.matched
            ? <p data-reponse className="mt-1 text-base text-navy-800">{v.near ? <>Warmest within {km(SHORT_HAUL_KM)} of London: {pick(v.near)}.</> : <>None within {km(SHORT_HAUL_KM)} of London.</>} {v.far ? <>Further away: {pick(v.far)}.</> : <>None further away.</>}</p>
            : <p data-reponse className="mt-1 text-sm font-semibold text-amber-800">None passes every wish. The warmest places of the month are listed instead.</p>}
          {v.groups.filter((g) => g.rows.length).map((g) => (
            <div key={g.key} className="mt-3">
              <p className="text-sm font-semibold text-navy-700">{g.key === 'near' ? `Short haul, within ${km(SHORT_HAUL_KM)}` : 'Long haul, further away'} ({g.rows.length})</p>
              <ul data-liste className="mt-1 divide-y divide-navy-100 text-sm">{g.visible.map((r) => (
                <li key={r.d.id} data-lieu={r.d.id} className="py-1.5">
                  <span className="block">{name(r)}</span>
                  <span className="tabular-nums block text-navy-700">Air high {deg(r.high)} · Sea {r.d.sea ? deg(r.sea) : 'none (inland)'} · Wet days {r.wet === null ? 'not recorded' : r.wet}</span>
                </li>))}</ul>
            </div>
          ))}
          {(v.hidden > 0 || all) && <button type="button" onClick={() => setAll(!all)} aria-expanded={all} className="mt-3 inline-flex h-12 items-center rounded-lg border border-navy-300 px-4 text-sm font-semibold text-navy-900 hover:bg-navy-50">{all ? 'Show fewer places' : `Show all ${v.count} places`}</button>}
          <p className="mt-2 text-xs text-navy-600">Typical month, not a forecast. "Wet days not recorded": the station has no reliable rain record for that month, so the place is left out when you set a wet-day limit. <a href={methodHref} className="underline">How the figures are made</a>.</p>
        </div>
      </div>
    );
  }

  const A = dest(a); const B = b ? dest(b) : null;
  const line = (f: (d: typeof A) => string) => [f(A), B ? f(B) : undefined] as const;
  const rowsP: Array<[string, readonly [string, string | undefined]]> = [
    ['Night low', line((d) => deg(low(d, m)))],
    ['Sea', line((d) => (d.sea ? deg(sea(d, m)) : 'none (inland)'))],
    ['Rain in the month', line((d) => mm(rain(d, m)))],
    ['Days with 1 mm or more', line((d) => days(wet(d, m)))],
    ['Daylight (sunrise to sunset)', line((d) => hm(daylight(d, m)))],
    [`${mName(prev(m))}, daytime high`, line((d) => deg(high(d, prev(m))))],
    [`${mName(next(m))}, daytime high`, line((d) => deg(high(d, next(m))))],
  ];
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <form className={`${box} grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2`} onSubmit={(e) => e.preventDefault()}>
        {mode === 'compare' && <SelectField id={`${idPrefix}-a`} label="First place" value={a} onChange={setA} options={destOpts} />}
        {monthField}
        <SelectField id={`${idPrefix}-b`} label={mode === 'compare' ? 'Second place' : 'Compare with'} value={b} onChange={setB} options={[...(mode === 'compare' ? [] : [{ value: '', label: 'No other place' }]), ...destOpts.filter((o) => o.value !== a)]} />
      </form>
      <div data-resultat aria-live="polite" className={box}>
        <p className="text-sm font-medium text-navy-600">{A.name} in {mName(m)}, daytime high</p>
        <p className="mt-1 text-3xl font-bold text-navy-900">{deg(high(A, m))}{B && <span className="ml-2 text-lg font-semibold text-navy-700">vs {deg(high(B, m))} in {B.name}</span>}</p>
        {mode === 'place' && (() => { const bv = beachVerdict(A, m), mn = mName(m), need = deg(DEFAULT_CRITERIA.minHigh);
          const title = A.sea ? (bv.beach ? `Warm enough for the beach in ${mn}` : bv.high >= 20 ? `Fine for sightseeing, too cool for the beach in ${mn}` : `Too cool for the beach in ${mn}`) : (bv.beach ? `Warm in ${mn}` : bv.high >= 20 ? `Fine for sightseeing in ${mn}, not warm` : `Cool in ${mn}`);
          return <p data-verdict className={`mt-2 rounded-lg p-3 text-base ${bv.beach ? 'bg-accent-50 text-navy-900' : 'bg-amber-50 text-amber-900'}`}>
            <strong className="font-semibold">{title}</strong> (beach weather: {need} or more by day).
            {bv.sea !== null && <> Sea {deg(bv.sea)}: {bv.swim ? 'warm enough for most people to swim.' : `too cool for most swimmers (${deg(SWIM_SEA)}).`}</>}
            {bv.instead && <> Warmer this month: {links[bv.instead.d.id] ? <a href={links[bv.instead.d.id]} className="font-semibold underline">{bv.instead.d.name}</a> : bv.instead.d.name} ({deg(bv.instead.high)}).</>}
          </p>; })()}
        <table className={`mt-3 w-full text-sm${B ? ' empile' : ''}`}>
          {B && <thead><tr className="text-left text-navy-600"><th className="py-1 font-medium"><span className="sr-only">Measure</span></th><th className="py-1 text-right font-medium">{A.name}</th><th className="py-1 pl-3 text-right font-medium">{B.name}</th></tr></thead>}
          <tbody className="divide-y divide-navy-100">{rowsP.map(([l, [v, w]]) => <Row key={l} l={l} v={v} w={w} na={B ? A.name : undefined} nb={B?.name} />)}</tbody>
        </table>
        <p className="mt-2 text-xs text-navy-600">Averages 1991 to 2020 at {A.station.label}{B ? ` and ${B.station.label}` : ''}. A typical month, not a forecast. <a href={methodHref} className="underline">Method</a>{B && links[B.id] ? <> · <a href={links[B.id]} className="underline">{B.name} month by month</a></> : null}.</p>
      </div>
    </div>
  );
}
