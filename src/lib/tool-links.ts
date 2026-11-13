/** Destination id -> path of its page, for links inside the tool. */
import { DESTS } from './engine/climate';
import { placePage } from './pages';
import { route } from '../i18n/routes';
export const toolLinks = (): Record<string, string> => Object.fromEntries(DESTS.flatMap((d) => { const p = placePage(d.id); return p ? [[d.id, route(p.id, 'en')]] : []; }));
