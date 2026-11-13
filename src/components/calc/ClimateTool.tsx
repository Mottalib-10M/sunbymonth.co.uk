/**
 * The tool, three ways: "finder" (which destinations pass your wishes in a month), "place" (one destination, a month,
 * and optionally a second place side by side), "compare" (two places chosen freely). Everything runs in the browser
 * from climate.json; nothing typed is sent. First render = props and build-day month (RECETTE §17.5); the reader's
 * own month and a shared link arrive after mounting. The address changes only after an action (url-state.ts).
 */
import { useEffect, useMemo, useState } from 'react';
import NumberField from '../ui/NumberField';
import SelectField from '../ui/SelectField';
import { DESTS, MONTHS, dest, rank, high, low, sea, rain, wet, daylight, prev, next, type Criteria } from '../../lib/engine/climate';
import { deg, mm, days, km, hm, month as mName } from '../../lib/fmt';
import { readParams, num, str, updateURL } from '../../lib/url-state';
declare const __BUILD_DAY__: string;

const monthOpts = MONTHS.map((m, i) => ({ value: String(i + 1), label: m }));
const destOpts = [...DESTS].sort((a, b) => a.name.localeCompare(b.name)).map((d) => ({ value: d.id, label: `${d.name}, ${d.country}` }));
const SEA = [0, 18, 20, 22, 24, 26]; const WET = [0, 1, 3, 5, 8]; const KM = [0, 2000, 3500, 5000, 8000];
const buildMonth = () => Number(__BUILD_DAY__.slice(5, 7));
const box = 'rounded-xl border border-navy-200 bg-white p-4 sm:p-5';
const Row = ({ l, v, w }: { l: string; v: string; w?: string }) => <tr><td className="py-1.5 pr-3 align-top text-navy-600">{l}</td><td className="tabular-nums py-1.5 text-right text-navy-900">{v}</td>{w !== undefined && <td className="tabular-nums py-1.5 pl-3 text-right text-navy-900">{w}</td>}</tr>;

export interface Props { mode: 'finder' | 'place' | 'compare'; fixedMonth?: number; place?: string; other?: string; idPrefix?: string; links?: Record<string, string>; methodHref: string }

export default function ClimateTool({ mode, fixedMonth, place, other, idPrefix = 't', links = {}, methodHref }: Props) {
  const [m, setM] = useState<number>(fixedMonth ?? buildMonth());
  const [minHigh, setMinHigh] = useState(24);
  const [minSea, setMinSea] = useState(0);
  const [maxWet, setMaxWet] = useState(0);
  const [maxKm, setMaxKm] = useState(0);
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
    const rows = useMemo(() => rank(m, c), [m, minHigh, minSea, maxWet, maxKm]);
    const ok = rows.filter((r) => r.ok);
    const shown = (ok.length ? ok : rows).slice(0, 8);
    return (
      <div className="grid gap-4 md:grid-cols-2">
        <form className={`${box} grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2`} onSubmit={(e) => e.preventDefault()}>
          {monthField}
          <NumberField id={`${idPrefix}-high`} label="Daytime high at least" value={minHigh} onChange={setMinHigh} unit="°C" max={45} />
          <SelectField id={`${idPrefix}-sea`} label="Sea at least" value={String(minSea)} onChange={(v) => setMinSea(Number(v))} options={SEA.map((v) => ({ value: String(v), label: v ? `${v} °C` : 'Any sea, or none' }))} />
          <SelectField id={`${idPrefix}-wet`} label="Wet days at most" value={String(maxWet)} onChange={(v) => setMaxWet(Number(v))} options={WET.map((v) => ({ value: String(v), label: v ? `${v} in the month` : 'Any number' }))} />
          <SelectField id={`${idPrefix}-km`} label="Distance from London" value={String(maxKm)} onChange={(v) => setMaxKm(Number(v))} options={KM.map((v) => ({ value: String(v), label: v ? `Under ${km(v)}` : 'Any distance' }))} />
          {fixedMonth && <p className="self-end text-sm text-navy-600">Month set by this page: <strong className="text-navy-900">{mName(fixedMonth)}</strong>.</p>}
        </form>
        <div data-resultat aria-live="polite" className={box}>
          <p className="text-sm font-medium text-navy-600">{mName(m)}, averages 1991 to 2020</p>
          <p className="mt-1 text-3xl font-bold text-navy-900">{ok.length} of {DESTS.length} places match</p>
          {!ok.length && <p className="mt-1 text-sm font-semibold text-amber-800">None passes every wish. The warmest places of the month are listed instead.</p>}
          <table className="mt-3 w-full text-sm"><thead><tr className="text-left text-navy-600"><th className="py-1 font-medium">Place</th><th className="py-1 text-right font-medium">High</th><th className="py-1 text-right font-medium">Sea</th><th className="py-1 text-right font-medium">Wet days</th></tr></thead>
            <tbody className="divide-y divide-navy-100">{shown.map((r) => <tr key={r.d.id}><td className="py-1.5 pr-2">{links[r.d.id] ? <a href={links[r.d.id]} className="text-accent-700 underline">{r.d.name}</a> : r.d.name}</td><td className="tabular-nums py-1.5 text-right">{deg(r.high)}</td><td className="tabular-nums py-1.5 text-right">{r.d.sea ? deg(r.sea) : 'inland'}</td><td className="tabular-nums py-1.5 text-right">{r.wet === null ? 'n/a' : r.wet}</td></tr>)}</tbody></table>
          <p className="mt-2 text-xs text-navy-600">Typical month, not a forecast. "n/a": the station has no usable rain record for that month, so it never counts as a pass. <a href={methodHref} className="underline">How the figures are made</a>.</p>
        </div>
      </div>
    );
  }

  const A = dest(a); const B = b ? dest(b) : null;
  const line = (f: (d: typeof A) => string) => [f(A), B ? f(B) : undefined] as const;
  const rowsP: Array<[string, readonly [string, string | undefined]]> = [
    ['Night low', line((d) => deg(low(d, m)))],
    ['Sea surface', line((d) => (d.sea ? deg(sea(d, m)) : 'inland'))],
    ['Rain in the month', line((d) => mm(rain(d, m)))],
    ['Days with 1 mm or more', line((d) => days(wet(d, m)))],
    ['Daylight', line((d) => hm(daylight(d, m)))],
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
        <table className="mt-3 w-full text-sm">
          {B && <thead><tr className="text-left text-navy-600"><th className="py-1 font-medium"><span className="sr-only">Measure</span></th><th className="py-1 text-right font-medium">{A.name}</th><th className="py-1 pl-3 text-right font-medium">{B.name}</th></tr></thead>}
          <tbody className="divide-y divide-navy-100">{rowsP.map(([l, [v, w]]) => <Row key={l} l={l} v={v} w={w} />)}</tbody>
        </table>
        <p className="mt-2 text-xs text-navy-600">Averages 1991 to 2020 at {A.station.label}{B ? ` and ${B.station.label}` : ''}. A typical month, not a forecast. <a href={methodHref} className="underline">Method</a>{B && links[B.id] ? <> · <a href={links[B.id]} className="underline">{B.name} month by month</a></> : null}.</p>
      </div>
    </div>
  );
}
