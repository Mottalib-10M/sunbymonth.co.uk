import type { Kit } from './kit';
export interface FAQ { q: string; a: string }
export interface Helpers extends Kit {
  a: (id: string, text: string) => string;
  table: (headers: string[], rows: Array<Array<string | number>>, caption?: string, align?: Array<'l' | 'r'>) => string;
  src: (key: string, text?: string) => string;
  /** A place name linked to its page when it has one. */
  place: (d: import('./engine/climate').Dest) => string;
}
export type Group = 'months' | 'iberia' | 'med' | 'mideast' | 'long';
export interface PageDef {
  id: string; group: Group; order: number; slug: string; nav: string; card: string;
  title: string; description: string; h1: string; intro: (h: Helpers) => string;
  resume: (h: Helpers) => string; faqs: (h: Helpers) => FAQ[]; body: (h: Helpers) => string;
  /** Tool shown at the top: a destination (place mode) or a month (finder mode). */
  tool: { mode: 'place'; dest: string } | { mode: 'month'; month: number };
  related: string[]; sources: string[];
}
export const definePage = (p: PageDef): PageDef => p;
