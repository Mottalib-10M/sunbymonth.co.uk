/** llms.txt (RECETTE §21), generated from the page registry. */
import { PAGES } from '../lib/pages';
import { SITE_URL, LAST_UPDATED, SITE_NAMES } from '../data/site-config';
import { route } from '../i18n/routes';
import { GROUPS } from '../i18n/nav';
export function GET() {
  const lines = [
    `# ${SITE_NAMES.en}`, '',
    `> Where is hot, month by month, for 62 holiday places British travellers go to: daytime high, night low, rain, wet days and sea temperature, each a 1991 to 2020 average computed from the daily records of a named NOAA GHCN-Daily station and from NOAA OISST v2.1 sea surface temperature. A month without enough data is shown as no usable record. No forecasts, no sunshine hours, no prices. Independent site published by Radif Partners, not a travel agent. Last updated ${LAST_UPDATED}.`, '',
    ...GROUPS.flatMap((g) => [`## ${g.label}`, ...PAGES.filter((p) => p.group === g.id).map((p) => `- [${p.nav}](${SITE_URL}${route(p.id, 'en')}): ${p.card}`), '']),
    '## Tools and method', `- [Compare two places](${SITE_URL}${route('compare', 'en')})`, `- [Data and method](${SITE_URL}${route('method', 'en')})`, `- [About](${SITE_URL}${route('about', 'en')})`,
  ];
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
