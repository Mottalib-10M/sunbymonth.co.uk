/** Registry: every file of src/content/places/ and src/content/months/ is loaded here. */
import type { PageDef } from './page-types';
const mods = import.meta.glob<{ default: PageDef }>(['../content/places/*.ts', '../content/months/*.ts'], { eager: true });
export const PAGES: PageDef[] = Object.entries(mods).map(([f, m]) => { const b = f.split('/').pop()!.replace(/\.ts$/, ''); if (m.default.id !== b) throw new Error(`${b}: id "${m.default.id}" differs from the file name`); return m.default; }).sort((a, b) => a.order - b.order || a.id.localeCompare(b.id));
export const pageById = (id: string) => PAGES.find((p) => p.id === id);
/** The destination page of a destination id, when there is one. */
export const placePage = (destId: string) => PAGES.find((p) => p.tool.mode === 'place' && p.tool.dest === destId);
