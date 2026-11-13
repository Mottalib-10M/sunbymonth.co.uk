/** Mini-simulators (RECETTE §9.3). This site has no guide pages: every content page carries the full
 *  ClimateTool, so no mini-simulator is defined. The trame components MiniSim / MiniSimAutonome import
 *  this module; asking for a spec here is a programming error. */
import type { MiniSpec } from './mini-types';
export function getSpec(kind: string, _lang?: string, _arg?: string): MiniSpec {
  throw new Error(`No mini-simulator defined on this site (asked: ${kind})`);
}
