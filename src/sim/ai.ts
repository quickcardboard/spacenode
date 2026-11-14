import type { Game, GNode, Ship } from './types';
import { PLAYER } from './types';
import { CFG, BUILD } from './config';
import { FACTIONS, type FactionDef } from './content';
import { sideMods, nodeMods, shipMods } from './mods';
import { rnd, rr, ri } from './rng';
import { dist, log, sideName, canBuild, startBuild, startShip, launch, calcBattle, eta, grantTech, shipSpeed, shipCost, newShip } from './core';

const ARCHON_AI: FactionDef['ai'] = { aggr: 1, expand: 1e9, react: 0.9, target: 'weak', build: { turret: 3, sshield: 2, barracks: 3, mine: 2, gen: 2, shield: 2, dock: 1 } };
const aiOf = (g: Game, o: number) => (g.sides[o].kind === 'faction' ? FACTIONS[g.sides[o].fac].ai : ARCHON_AI);
const idleShip = (g: Game, n: GNode): Ship | undefined => g.ships.find(s => s.owner === n.owner && s.at === n.id && s.loadUntil === 0);
/** An idle ship at the node, or one requisitioned on the spot at full price from the side's treasury. */
function shipFor(g: Game, n: GNode): Ship | undefined {
  const s = idleShip(g, n);
  if (s) return s;
  const side = g.sides[n.owner], c = shipCost(g, n.owner);
  if (side.ult < c) return undefined;
  side.ult -= c;
  return newShip(g, n.owner, n);
}
const canShip = (g: Game, n: GNode) => !!idleShip(g, n) || g.sides[n.owner].ult >= shipCost(g, n.owner);
const strength = (g: Game, n: GNode) => calcBattle(g, 0, {}, n, nodeMods(g, n)).def;

function weighted(g: Game, w: Record<string, number>, ok: (k: string) => boolean): string | null {
  const keys = Object.keys(w).filter(ok);
  let tot = keys.reduce((a, k) => a + w[k], 0);
  if (!keys.length) return null;
  let r = rnd(g) * tot;
  for (const k of keys) { r -= w[k]; if (r <= 0) return k; }
  return keys[0];
}

function think(g: Game, o: number) {
  const side = g.sides[o], ai = aiOf(g, o);
  const own = g.nodes.filter(n => n.owner === o);
  if (!own.length || side.broken) return;

  // Build: planets grow their economy first; stations mostly keep producing Drones.
  for (const n of own) {
    if (n.lane) continue;
    if (n.kind === 'planet') {
      if (!canBuild(g, n, 'mine')) startBuild(g, n, 'mine');
      else if (!canBuild(g, n, 'gen') && (n.b.mine || 0) >= (n.b.gen || 0) * CFG.minesPerGen) startBuild(g, n, 'gen');
      else if (rnd(g) < 0.3) { const k = weighted(g, ai.build, k => BUILD[k].on === 'planet' && !canBuild(g, n, k)); if (k) startBuild(g, n, k); }
    } else if (rnd(g) < 0.15) {
      const k = weighted(g, ai.build, k => BUILD[k].on === 'station' && !canBuild(g, n, k));
      if (k) startBuild(g, n, k);
    }
  }

  // Ships
  const ships = g.ships.filter(s => s.owner === o);
  if (ships.length < 3 + Math.floor(g.mob.stage / 2) && !own.some(n => n.lane?.kind === 'ship')) {
    const st = own.filter(n => n.kind === 'station' && !n.lane).sort((a, b) => b.drones - a.drones)[0];
    if (st) startShip(g, st);
  }
  // Spread spare ships to garrisons that have none
  const spare = own.find(n => g.ships.filter(s => s.owner === o && s.at === n.id && s.loadUntil === 0).length >= 2);
  if (spare) {
    const needy = own.filter(n => n.drones >= 10 && !g.ships.some(s => s.owner === o && (s.at === n.id || s.to === n.id))).sort((a, b) => dist(a, spare) - dist(b, spare))[0];
    if (needy) launch(g, idleShip(g, spare)!, needy, 0, []);
  }

  // React to visible player fleets heading for this side's nodes
  for (const ps of g.ships) {
    if (ps.owner !== PLAYER || ps.at >= 0 || ps.drones <= 0 || ps.off) continue;
    const tgt = g.nodes[ps.to];
    if (tgt.owner !== o) continue;
    ps.off = true; // each fleet is noticed once
    if (shipMods(g, ps).stealth || rnd(g) > ai.react) continue;
    const t = eta(g, ps, tgt);
    const src = own.filter(n => n.id !== tgt.id && n.drones > 8 && canShip(g, n) && dist(n, tgt) / CFG.shipSpeed + CFG.loadTime + 1 < t)
      .sort((a, b) => b.drones - a.drones)[0];
    if (src) launch(g, shipFor(g, src)!, tgt, Math.floor((src.drones - 4) * 0.6), []);
  }

  // Garrison duty: top up thin outposts from the fattest station
  const thin = own.filter(n => !n.capital && n.drones < 6 + Math.round(n.threat * 8)).sort((a, b) => a.drones - b.drones)[0];
  if (thin) {
    const src = own.filter(n => n.id !== thin.id && n.drones > 20 && canShip(g, n)).sort((a, b) => dist(a, thin) - dist(b, thin))[0];
    if (src) launch(g, shipFor(g, src)!, thin, Math.min(10, Math.floor((src.drones - 12) / 2) + 4), []);
  }

  // Expand into neutral space
  if (g.t >= side.expT && side.kind === 'faction') {
    let best: { src: GNode; tgt: GNode; need: number; d: number } | null = null;
    for (const src of own) {
      if (!canShip(g, src)) continue;
      for (const tgt of g.nodes) {
        if (tgt.owner !== 0) continue;
        const d = dist(src, tgt);
        if (d > 120) continue;
        const need = strength(g, tgt) + 2;
        if (src.drones - 6 >= need && (!best || d < best.d)) best = { src, tgt, need, d };
      }
    }
    if (best) {
      launch(g, shipFor(g, best.src)!, best.tgt, best.need + ri(g, 0, 3), []);
      side.expT = g.t + ai.expand * rr(g, 0.8, 1.2);
    }
  }
}

function plan(g: Game, o: number) {
  const ai = aiOf(g, o);
  const own = g.nodes.filter(n => n.owner === o), mine = g.nodes.filter(n => n.owner === PLAYER);
  if (!own.length || !mine.length) return;
  let best: GNode | null = null, bs = 1e9;
  for (const p of mine) {
    const dmin = Math.min(...own.map(n => dist(n, p)));
    const st = strength(g, p);
    let sc = ai.target === 'weak' ? st * 4 + dmin * 0.5 : dmin + st * 1.5;
    if (ai.target === 'spec') sc -= 60 * p.specs.length + (p.specs.includes(g.cmdSpec) ? 120 : 0);
    if (sc < bs) { bs = sc; best = p; }
  }
  if (!best) return;
  const target = best;
  const staging = own.slice().sort((a, b) => dist(a, target) - dist(b, target))[0];
  const commit = Math.min(0.92, CFG.offCommit[g.mob.stage] * (1 + (sideMods(g, g.archon).offBig || 0)) * (0.7 + 0.3 * ai.aggr));
  const src = own.filter(n => n.id !== staging.id && n.drones >= 9 && dist(n, staging) < 200)
    .sort((a, b) => dist(a, staging) - dist(b, staging)).slice(0, 1 + g.mob.stage + g.mob.surge);
  let wait = CFG.gatherSecs;
  for (const n of src) {
    const s = shipFor(g, n);
    if (!s) continue;
    const keep = n.capital || n.citadel ? Math.max(12, Math.floor(n.drones * 0.4)) : 5;
    if (!launch(g, s, staging, Math.floor((n.drones - keep) * commit), [])) { s.off = true; wait = Math.max(wait, dist(n, staging) / shipSpeed(g, s) + CFG.loadTime + 6); }
  }
  const warn = (sideMods(g, PLAYER).warn || 0) > 0;
  g.offs.push({ owner: o, target: target.id, staging: staging.id, launchT: g.t + wait, warned: warn });
  log(g, warn ? `${sideName(g, o)} is massing at ${staging.name} to strike ${target.name}` : `${sideName(g, o)} is mobilizing for an offensive`, 'warn', warn ? target.id : -1);
}

function fire(g: Game, off: Game['offs'][number]) {
  const st = g.nodes[off.staging];
  if (st.owner !== off.owner || g.sides[off.owner].broken) return;
  let tgt = g.nodes[off.target];
  if (tgt.owner !== PLAYER) {
    const alt = g.nodes.filter(n => n.owner === PLAYER).sort((a, b) => dist(a, st) - dist(b, st))[0];
    if (!alt) return;
    tgt = alt;
  }
  const keep = st.capital || st.citadel ? Math.max(12, Math.floor(st.drones * 0.4)) : 5;
  const send = st.drones - keep;
  if (send < 6) return;
  const s = shipFor(g, st);
  if (!s) return;
  if (!launch(g, s, tgt, send, [])) s.off = true;
}

function mobilize(g: Game) {
  const m = g.mob;
  {
    const secs = CFG.stageSecs * (1 - 0.05 * g.threat);
    m.prog += (CFG.dt / secs) * Math.max(0.3, 1 - (sideMods(g, PLAYER).mobSlow || 0));
    if (m.prog >= 1 && m.stage >= 5) {
      // Total war: past stage 5 the Coalition keeps calling up reserves until the run ends.
      m.surge++; m.prog = 0;
      log(g, `Total war: Coalition reserves deepen (surge ${m.surge}). Every faction can field more Drones.`, 'warn');
    } else if (m.prog >= 1) {
      m.stage++; m.prog = 0;
      log(g, `Coalition mobilization reached stage ${m.stage}. Offensives grow larger and more frequent.`, 'warn');
      for (const o of g.factions) {
        const side = g.sides[o];
        if (side.broken) continue;
        const list = FACTIONS[side.fac].techs.filter(t => !side.techs.includes(t));
        for (const t of list.slice(0, side.fac === 'lumen' ? 2 : 1)) grantTech(g, o, t);
      }
    }
  }
  if (g.t >= m.nextOff) {
    const cands = g.factions.filter(o => !g.sides[o].broken && g.nodes.some(n => n.owner === o));
    if (m.stage >= 4 || !cands.length) cands.push(g.archon);
    plan(g, cands[m.turn % cands.length]);
    m.turn++;
    m.nextOff = g.t + (CFG.offInterval[m.stage] * rr(g, 0.85, 1.15)) / (1 + 0.04 * g.threat);
  }
  if (g.offs.length) {
    const due = g.offs.filter(o => g.t >= o.launchT);
    if (due.length) { g.offs = g.offs.filter(o => g.t < o.launchT); for (const o of due) fire(g, o); }
  }
}

export function aiTick(g: Game) {
  mobilize(g);
  for (const o of [...g.factions, g.archon]) {
    const side = g.sides[o];
    if (g.t >= side.aiT) { side.aiT = g.t + 8 + rnd(g) * 4; think(g, o); }
  }
}
