/** Writing tools passed to the body of every page. */
import { route, ROUTES } from '../i18n/routes';
import type { Helpers } from './page-types';
import { KIT } from './kit';
import P from '../data/params-2026.json';
const esc = (s: string | number) => String(s).replace(/&(?!(?:[a-z]+|#\d+);)/g, '&amp;').replace(/</g, '&lt;');
export const SOURCES: Record<string, { url: string; label: string }> = Object.fromEntries(Object.entries(P.sources).map(([k, v]) => [k, { url: v.url, label: v.label.en }]));
export function table(headers: string[], rows: Array<Array<string | number>>, caption?: string, align: Array<'l' | 'r'> = []) {
  const al = (i: number) => (align[i] === 'r' ? 'text-right' : 'text-left');
  return `<div class="not-prose my-6 overflow-x-auto"><table class="journal w-full text-sm">${caption ? `<caption class="mb-2 text-left text-sm text-navy-700">${caption}</caption>` : ''}<thead><tr>${headers.map((c, i) => `<th scope="col" class="${al(i)}">${c}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => `<td class="${al(i)}">${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}
export const ext = (url: string, text: string) => `<a href="${url}" target="_blank" rel="nofollow noopener noreferrer">${text}</a>`;
export function link(id: string, text: string) { if (!ROUTES.some((r) => r.id === id)) throw new Error(`Unknown page id in link: ${id}`); return `<a href="${route(id, 'en')}">${text}</a>`; }
export function helpers(): Helpers {
  return { ...KIT, a: link, table, src: (key: string, text?: string) => { const s = SOURCES[key]; if (!s) throw new Error(`Unknown source ${key}`); return ext(s.url, text ?? s.label); } };
}
