import type { Game, GNode, Side } from './types';
import { PLAYER } from './types';
import { CFG } from './config';
import { FACTIONS, ARCHONS, ARCHS, STARTERS, EVENTS } from './content';
import { rnd, ri, rr, pick, shuffle, sample } from './rng';
import { addSpec, newShip, updateVision, dist } from './core';

const SYL_A = ['Ka', 'Ve', 'Or', 'Tal', 'Mi', 'Sen', 'Dra', 'Ul', 'Phe', 'Ny', 'Cor', 'Az', 'Lo', 'Ery', 'Bri', 'Zan', 'Hel', 'Qua', 'Io', 'Xe'];
const SYL_B = ['ris', 'dan', 'thos', 'mir', 'vek', 'lun', 'tar', 'ion', 'sha', 'bor', 'nea', 'rax', 'phi', 'dor', 'lys', 'gan', 'tis', 'mon', 'rae', 'kai'];

function mkSide(owner: number, kind: Side['kind'], fac: string, ult: number): Side {
  return { owner, kind, fac, ult, techs: [], techProg: {}, relics: [], broken: false, aiT: 6 + owner * 2, expT: 60 + owner * 15, capBase: 0, refundT: 0, levyT: 60 };
}

export function newGame(seed: number, threat = 0): Game {
  const W = 560, H = 360;
  const g: Game = {
    v: 1, seed, rng: seed | 0, t: 0, tick: 0, modV: 1, threat, w: W, h: H,
    nodes: [], ships: [], specs: [], sides: {}, factions: [2, 3, 4], archon: 5,
    mob: { stage: 1, prog: 0, nextOff: CFG.graceSecs, turn: 0, surge: 0 }, offs: [], pending: [], log: [],
    cmdSpec: -1, cmdLostT: -1, intel: [], vis: [], result: null, resultWhy: '',
    stats: { captures: 0, nodesLost: 0, battles: 0, dronesLost: 0, dronesMade: 0, shipsLost: 0, specs: 0, specsLost: 0, relics: 0, techs: 0, events: 0, warlords: 0, ultMade: 0 },
    nextId: 1, home: 0, citadel: 1,
  };
  for (let i = 0; i < 5; i++) rnd(g);

  // --- points: home at one end, Citadel at the other, the rest scattered with a minimum spacing
  const pts: { x: number; y: number; region: number }[] = [
    { x: rr(g, 42, 60), y: rr(g, H * 0.32, H * 0.68), region: PLAYER },
    { x: W - rr(g, 42, 60), y: rr(g, H * 0.32, H * 0.68), region: 5 },
  ];
  for (let tries = 0; tries < 6000 && pts.length < 58; tries++) {
    const p = { x: rr(g, 24, W - 24), y: rr(g, 24, H - 24), region: 0 };
    if (pts.every(q => dist(p, q) >= 31)) pts.push(p);
  }
  const home = pts[0], cit = pts[1];
  const free = () => pts.filter(p => p.region === 0);
  const nearest = (to: { x: number; y: number }, list: typeof pts) => list.slice().sort((a, b) => dist(a, to) - dist(b, to));

  for (const p of nearest(cit, free()).slice(0, 4)) if (dist(p, cit) < 95) p.region = 5;
  const lanes = shuffle(g, [0.2, 0.5, 0.8]);
  const xs = [0.42, 0.6, 0.74];
  const capitals: (typeof pts)[number][] = [];
  for (const i of [2, 1, 0]) {
    const seedPt = { x: xs[i] * W + rr(g, -15, 15), y: lanes[i] * H + rr(g, -20, 20) };
    const cap = nearest(seedPt, free().filter(p => dist(p, home) > 125))[0];
    cap.region = 2 + i; capitals[i] = cap;
    for (const p of nearest(cap, free().filter(p => dist(p, home) > 96)).slice(0, 6)) if (dist(p, cap) < 95) p.region = 2 + i;
  }

  // --- sides
  const facs = sample(g, Object.keys(FACTIONS), 3);
  g.sides[PLAYER] = mkSide(PLAYER, 'player', '', CFG.startUlt);
  facs.forEach((f, i) => (g.sides[2 + i] = mkSide(2 + i, 'faction', f, 20)));
  g.sides[5] = mkSide(5, 'archon', pick(g, Object.keys(ARCHONS)), 30);

  // --- nodes
  const span = dist(home, cit);
  const byHome = nearest(home, free());
  const names = new Set<string>();
  const name = () => { for (;;) { const s = pick(g, SYL_A) + pick(g, SYL_B); if (!names.has(s)) { names.add(s); return s; } } };
  const evPool = { list: [] as string[] };
  const nextEvent = (kind: 'planet' | 'station') => {
    if (!evPool.list.length) evPool.list = shuffle(g, Object.keys(EVENTS));
    const i = evPool.list.findIndex(e => EVENTS[e].on === 'any' || EVENTS[e].on === kind);
    return i < 0 ? null : evPool.list.splice(i, 1)[0];
  };
  const hard = 1 + 0.08 * threat;

  pts.forEach((p, id) => {
    const th = Math.max(0, Math.min(1, dist(p, home) / span + rr(g, -0.12, 0.12)));
    const n: GNode = {
      id, name: name(), kind: 'planet', x: p.x, y: p.y, size: 0, owner: p.region, region: p.region, threat: th,
      drones: 0, nat: 0, b: {}, lane: null, queue: [], prod: 0, research: null, resFirst: false,
      specs: [], prisoners: [], buffs: [], event: null, offer: false, hold: null, conv: null,
      capital: false, citadel: false, home: false,
    };
    const roll = rnd(g);
    n.size = roll < 0.35 ? 0 : roll < 0.8 ? 1 : 2;
    if (p === home) { n.kind = 'station'; n.home = true; n.drones = CFG.startDrones; n.name = 'Haven'; }
    else if (p === cit) { n.kind = 'station'; n.citadel = true; n.name = 'The Citadel'; n.drones = Math.round(46 * hard); n.b = { turret: 3, screen: 1, barracks: 1, shipyard: 1, dock: 2 }; }
    else if (p.region === 0) {
      const rank = byHome.indexOf(p);
      n.owner = 0;
      n.kind = rank < 2 ? 'planet' : rank === 2 ? 'station' : rnd(g) < 0.62 ? 'planet' : 'station';
      if (rank === 0) n.size = 0; if (rank === 1) n.size = 1;
      const near = dist(p, home) < 78 || rank <= 2;
      n.drones = near ? ri(g, 0, 2) + (n.kind === 'station' ? 3 : 0) : Math.round((th * 22 * rr(g, 0.6, 1.3) + (n.kind === 'station' ? 4 : 0)) * hard);
      if (n.kind === 'planet') { n.offer = true; if (rank > 1 && rnd(g) < 0.3) n.event = nextEvent('planet'); }
      else { n.event = nextEvent('station'); if (rnd(g) < 0.5) n.b[pick(g, ['turret', 'barracks', 'shipyard', 'sensor', 'dock'])] = 1; }
    } else {
      const capital = capitals.includes(p);
      n.capital = capital;
      n.kind = capital ? 'station' : rnd(g) < 0.55 ? 'planet' : 'station';
      n.drones = Math.round((capital ? 22 + th * 14 : 7 + th * 14 * rr(g, 0.7, 1.2)) * hard);
      if (p.region === 5) n.drones = Math.round(ri(g, 16, 24) * hard);
      if (n.kind === 'planet') { n.b = { gen: 1, mine: ri(g, 1, 2) }; if (p.region === 5) n.b.shield = 1; }
      else if (capital) n.b = { turret: 2, barracks: 1, dock: 1 };
      else if (rnd(g) < 0.5) n.b = { turret: 1 };
    }
    if (n.kind === 'planet') n.nat = CFG.natBySize[n.size];
    g.nodes.push(n);
    g.intel.push({ seen: 0, t: 0, snap: null });
    g.vis.push(0);
  });
  g.home = 0; g.citadel = 1;

  // --- forces, leaders and specialists
  newShip(g, PLAYER, g.nodes[0]);
  for (const o of g.factions) {
    const f = FACTIONS[g.sides[o].fac];
    const own = g.nodes.filter(n => n.owner === o), cap = own.find(n => n.capital)!;
    cap.name = f.name.split(' ')[0] + ' Prime';
    addSpec(g, 'warlord', o, cap.id).name = f.warlord;
    const spots = shuffle(g, own.filter(n => !n.capital));
    f.specs.forEach((d, i) => { if (spots[i]) addSpec(g, d, o, spots[i].id); });
    newShip(g, o, cap); newShip(g, o, cap);
    const st = own.find(n => n.kind === 'station' && !n.capital);
    if (st) newShip(g, o, st);
    g.sides[o].capBase = own.reduce((a, n) => a + n.drones, 0) + 10;
  }
  const a = ARCHONS[g.sides[5].fac];
  addSpec(g, 'archon', 5, 1).name = `${a.name} ${a.title}`;
  newShip(g, 5, g.nodes[1]); newShip(g, 5, g.nodes[1]);
  g.sides[5].capBase = g.nodes.filter(n => n.owner === 5).reduce((s, n) => s + n.drones, 0) + 10;

  // --- commander draft: three premixed base + archetype packages
  const bases = sample(g, STARTERS, 3), archs = sample(g, Object.keys(ARCHS), 3);
  g.pending.push({ kind: 'draft', node: 0, opts: bases.map((b, i) => ({ base: b, arch: archs[i] })), title: 'Choose your Commander' });
  updateVision(g);
  return g;
}
