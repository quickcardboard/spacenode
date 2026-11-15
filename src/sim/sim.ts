import type { Game } from './types';
import { PLAYER } from './types';
import { coreStep, startUp, cancelTask, startCorridor, launch, convoy, moveSpec, fireMissile, choose, ransom, rally, type UpKind } from './core';
import { aiTick } from './ai';
import { EVENTS } from './content';

/** Advance one fixed step. Returns false while the game is waiting on a choice or is over. */
export function step(g: Game): boolean {
  if (g.result || g.pending.length) return false;
  coreStep(g);
  if (!g.result) aiTick(g);
  return true;
}

export type Cmd =
  | { c: 'up'; node: number; what: UpKind; id?: string }
  | { c: 'cancel'; node: number; idx?: number }
  | { c: 'corridor'; from: number; to: number }
  | { c: 'launch'; from: number; to: number; drones: number; specs: number[] }
  | { c: 'convoy'; from: number; to: number; drones: number; specs: number[] }
  | { c: 'move'; spec: number; to: number }
  | { c: 'missile'; from: number; to: number }
  | { c: 'rally'; node: number }
  | { c: 'front'; node: number }
  | { c: 'sail'; node: number; x: number; y: number }
  | { c: 'produce' }
  | { c: 'choose'; idx: number }
  | { c: 'ransom'; spec: number; recruit: boolean }
  | { c: 'event'; node: number };

/** Every player action goes through here. Returns an error message, or null on success. */
export function exec(g: Game, c: Cmd): string | null {
  if (g.result) return 'The run is over';
  const own = (id: number) => { const n = g.nodes[id]; return n && n.owner === PLAYER ? n : null; };
  const mine = (id: number) => { const sp = g.specs[id]; return sp && sp.owner === PLAYER ? sp : null; };
  switch (c.c) {
    case 'up': { const n = own(c.node); return n ? startUp(g, n, c.what, c.id) : 'Not your node'; }
    case 'cancel': { const n = own(c.node); if (!n) return 'Not your node'; cancelTask(g, n, c.idx || 0); return null; }
    case 'corridor': return g.nodes[c.from] && g.nodes[c.to] ? startCorridor(g, g.nodes[c.from], g.nodes[c.to]) : 'Unknown node';
    case 'launch': { const n = own(c.from); return n && g.nodes[c.to] ? launch(g, n, g.nodes[c.to], c.drones, c.specs) : 'Not your node'; }
    case 'convoy': { const n = own(c.from); return n && g.nodes[c.to] ? convoy(g, n, g.nodes[c.to], c.drones, c.specs) : 'Not your node'; }
    case 'move': { const sp = mine(c.spec); return sp && g.nodes[c.to] ? moveSpec(g, sp, g.nodes[c.to]) : 'Not your specialist'; }
    case 'missile': { const n = own(c.from); return n && g.nodes[c.to] ? fireMissile(g, n, g.nodes[c.to]) : 'Not your node'; }
    case 'rally': { const n = own(c.node); return n ? rally(g, n) : 'Not your node'; }
    case 'front': { const n = own(c.node); if (!n) return 'Not your node'; n.front = !n.front; return null; }
    case 'sail': {
      const n = own(c.node);
      if (!n || !n.flagship) return 'Only the Flagship can move';
      n.dest = { x: Math.max(12, Math.min(g.w - 12, c.x)), y: Math.max(12, Math.min(g.h - 12, c.y)) };
      return null;
    }
    case 'produce': g.sides[PLAYER].produce = !g.sides[PLAYER].produce; return null;
    case 'choose': return choose(g, c.idx);
    case 'ransom': { const sp = g.specs[c.spec]; return sp ? ransom(g, sp, c.recruit) : 'Unknown prisoner'; }
    case 'event': { const n = own(c.node); if (!n || !n.event) return 'No event here'; g.pending.push({ kind: 'event', node: n.id, opts: [], title: EVENTS[n.event].name, event: n.event }); return null; }
  }
}
