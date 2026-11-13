/** How figures are written on the site (en-GB). Temperatures and rain are whole numbers. */
import { MONTHS } from './engine/climate';
const nf = new Intl.NumberFormat('en-GB', { maximumFractionDigits: 0 });
export const num = (v: number) => nf.format(v);
export const NONE = 'no usable record';
export const deg = (v: number | null) => (v === null ? NONE : `${nf.format(v)} °C`);
export const mm = (v: number | null) => (v === null ? NONE : `${nf.format(v)} mm`);
export const days = (v: number | null) => (v === null ? NONE : v === 1 ? '1 day' : `${nf.format(v)} days`);
export const km = (v: number) => `${nf.format(Math.round(v / 10) * 10)} km`;
export const hm = (h: number) => { const t = Math.round(h * 60); return `${Math.floor(t / 60)} h ${String(t % 60).padStart(2, '0')} min`; };
export const month = (m: number) => MONTHS[m - 1];
export const monthList = (ms: number[]) => {
  if (!ms.length) return 'no month';
  const names = ms.map(month);
  return names.length === 1 ? names[0] : `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`;
};
/** Consecutive months written as a span: [6,7,8,9] -> "June to September". A run may cross the new year. */
export function span(ms: number[]): string {
  if (!ms.length) return 'no month';
  if (ms.length === 12) return 'all year';
  const set = new Set(ms);
  const starts = [...set].filter((m) => !set.has(m === 1 ? 12 : m - 1)).sort((a, b) => a - b);
  const runs = starts.map((s) => { const r: number[] = []; let m = s; while (set.has(m) && r.length < 12) { r.push(m); m = m === 12 ? 1 : m + 1; } return r; });
  const parts = runs.map((r) => (r.length === 1 ? month(r[0]) : `${month(r[0])} to ${month(r[r.length - 1])}`));
  return parts.length === 1 ? parts[0] : `${parts.slice(0, -1).join(', ')} and ${parts[parts.length - 1]}`;
}
