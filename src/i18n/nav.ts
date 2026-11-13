import { route, type Locale } from './routes';
import { PAGES, pageById } from '../lib/pages';
import type { Group } from '../lib/page-types';
export interface NavLink { href: string; label: string } export interface NavCategory { label: string; links: NavLink[] }
const CORE: Record<string, string> = { home: 'Where is hot', compare: 'Compare two places', method: 'Data and method', about: 'About', widget: 'Embed the finder', contact: 'Contact', editorial: 'Editorial policy', terms: 'Legal notice', privacy: 'Privacy', cookies: 'Cookies' };
export const GROUPS: Array<{ id: Group; label: string }> = [
  { id: 'months', label: 'Where is hot, by month' },
  { id: 'iberia', label: 'Canaries, Spain, Portugal' },
  { id: 'med', label: 'Greece, Cyprus, Turkey, Malta' },
  { id: 'long', label: 'North Africa and long haul' },
];
export const label = (id: string, _lang?: Locale) => CORE[id] ?? pageById(id)?.nav ?? id;
const link = (id: string, lang: Locale): NavLink => ({ href: route(id, lang), label: label(id) });
export const inGroup = (g: Group, lang: Locale): NavLink[] => PAGES.filter((p) => p.group === g).map((p) => link(p.id, lang));
export function navCategories(lang: Locale): NavCategory[] { return GROUPS.map((g) => ({ label: g.label, links: inGroup(g.id, lang) })).filter((c) => c.links.length); }
export const navDirect = (lang: Locale): NavLink[] => [link('compare', lang), link('method', lang)];
export const footerColumns = (lang: Locale): NavCategory[] => [
  ...GROUPS.map((g) => ({ label: g.label, links: inGroup(g.id, lang) })).filter((c) => c.links.length),
  { label: 'This site', links: ['home', 'compare', 'method', 'about', 'contact', 'editorial', 'widget', 'terms', 'privacy', 'cookies'].map((i) => link(i, lang)) },
];
export const popularLinks = (_lang: Locale): NavLink[] => [];
