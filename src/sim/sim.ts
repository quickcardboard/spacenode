import type { Game } from './types';
import { PLAYER } from './types';
import { coreStep, startBuild, startShip, cancelTask, startResearch, launch, redirect, choose, ransom, shipById, startCorridor, transfer, swapSpec, muster } from './core';
import { aiTick } from './ai';
import { useAbility } from './abilities';
import { EVENTS } from './content';

/** Advance one fixed step. Returns false while the game is waiting on a choice or is over. */
export function step(g: Game): boolean {
  if (g.result || g.pending.length) return false;
  coreStep(g);
  if (!g.result) aiTick(g);
  return true;
}

export type Cmd =
  | { c: 'build'; node: number; id: string }
  | { c: 'ship'; node: number }
  | { c: 'cancel'; node: number; idx: number }
  | { c: 'research'; node: number; id: string | null }
  | { c: 'resFirst'; node: number }
  | { c: 'launch'; ship: number; to: number; drones: number; specs: number[] }
  | { c: 'redirect'; ship: number; to: number }
  | { c: 'ability'; spec: number; id: string; target: number }
  | { c: 'choose'; idx: number }
  | { c: 'ransom'; spec: number; recruit: boolean }
  | { c: 'event'; node: number }
  | { c: 'corridor'; from: number; to: number }
  | { c: 'transfer'; from: number; to: number; drones: number; specs: number[] }
  | { c: 'swap'; spec: number; ship: number }
  | { c: 'muster'; node: number };

/** Every player action goes through here. Returns an error message, or null on success. */
export function exec(g: Game, c: Cmd): string | null {
  if (g.result) return 'The run is over';
  const own = (id: number) => { const n = g.nodes[id]; return n && n.owner === PLAYER ? n : null; };
  switch (c.c) {
    case 'build': { const n = own(c.node); return n ? startBuild(g, n, c.id) : 'Not your node'; }
    case 'ship': { const n = own(c.node); return n ? startShip(g, n) : 'Not your node'; }
    case 'cancel': { const n = own(c.node); if (!n) return 'Not your node'; cancelTask(g, n, c.idx); return null; }
    case 'research': { const n = own(c.node); if (!n) return 'Not your node'; if (c.id === null) { n.research = null; return null; } return startResearch(g, n, c.id); }
    case 'resFirst': { const n = own(c.node); if (!n) return 'Not your node'; n.resFirst = !n.resFirst; return null; }
    case 'launch': { const s = shipById(g, c.ship); if (!s || s.owner !== PLAYER) return 'Not your ship'; return launch(g, s, g.nodes[c.to], c.drones, c.specs); }
    case 'redirect': { const s = shipById(g, c.ship); if (!s || s.owner !== PLAYER) return 'Not your ship'; return redirect(g, s, g.nodes[c.to]); }
    case 'ability': { const sp = g.specs[c.spec]; if (!sp || sp.owner !== PLAYER) return 'Not your specialist'; return useAbility(g, sp, c.id, c.target >= 0 ? g.nodes[c.target] : null); }
    case 'choose': return choose(g, c.idx);
    case 'ransom': { const sp = g.specs[c.spec]; return sp ? ransom(g, sp, c.recruit) : 'Unknown prisoner'; }
    case 'muster': { const n = own(c.node); return n ? muster(g, n) : 'Not your node'; }
    case 'corridor': return startCorridor(g, g.nodes[c.from], g.nodes[c.to]);
    case 'transfer': return transfer(g, g.nodes[c.from], g.nodes[c.to], c.drones, c.specs);
    case 'swap': { const sp = g.specs[c.spec], s = shipById(g, c.ship); if (!sp || sp.owner !== PLAYER || !s || s.owner !== PLAYER) return 'Not yours'; return swapSpec(g, sp, s); }
    case 'event': { const n = own(c.node); if (!n || !n.event) return 'No event here'; g.pending.push({ kind: 'event', node: n.id, opts: [], title: EVENTS[n.event].name, event: n.event }); return null; }
  }
}
