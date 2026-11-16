import type { Game, GNode, Side } from './types';
import { PLAYER } from './types';
import { CFG } from './config';
import { FACTIONS, ARCHONS, ARCHS, STARTERS, EVENTS, LORE, WARLORD_OF } from './content';
import { rnd, ri, rr, pick, shuffle, sample } from './rng';
import { addSpec, updateVision, dist } from './core';

// Stations are named like hull registrations: Name-Number. Planets get two-syllable names.
const STATION_NAMES = ['Kestrel', 'Bastille', 'Harrow', 'Vigil', 'Anchor', 'Lantern', 'Marrow', 'Cinder', 'Tether', 'Gantry', 'Rook', 'Ward', 'Halcyon', 'Talon', 'Spindle', 'Ember', 'Quarry', 'Beacon', 'Keel', 'Sable'];
const SYL_A = ['Ka', 'Ve', 'Or', 'Tal', 'Mi', 'Sen', 'Dra', 'Ul', 'Phe', 'Ny', 'Cor', 'Az', 'Lo', 'Ery', 'Bri', 'Zan', 'Hel', 'Qua', 'Io', 'Xe'];
const SYL_B = ['ris', 'dan', 'thos', 'mir', 'vek', 'lun', 'tar', 'ion', 'sha', 'bor', 'nea', 'rax', 'phi', 'dor', 'lys', 'gan', 'tis', 'mon', 'rae', 'kai'];

function mkSide(owner: number, kind: Side['kind'], fac: string, ult: number): Side {
  return { owner, kind, fac, ult, techs: [], relics: [], produce: true, rp: 0, free: 0, net: 0, inc: 0, upk: 0, rpm: 0, broken: false, aiT: 6 + owner * 2, expT: 60 + owner * 15, desertT: 0, refundT: 0 };
}

/** `codex`: archive fragments already found in earlier runs; the missing ones turn up first. */
export function newGame(seed: number, threat = 0, codex: string[] = []): Game {
  const W = 430, H = 290;
  const g: Game = {
    v: 2, seed, rng: seed | 0, t: 0, tick: 0, modV: 1, threat, w: W, h: H,
    nodes: [], fleets: [], specs: [], corridors: [], sides: {}, factions: [2, 3, 4], archon: 5,
    mob: { stage: 1, prog: 0, nextOff: CFG.graceSecs, turn: 0, surge: 0 }, offs: [], pending: [], log: [],
    cmdSpec: -1, cmdLostT: -1, intel: [], vis: [], result: null, resultWhy: '',
    stats: { captures: 0, nodesLost: 0, battles: 0, dronesLost: 0, dronesMade: 0, specs: 0, specsLost: 0, relics: 0, techs: 0, events: 0, warlords: 0, ultMade: 0 },
    nextId: 1, home: 0, citadel: 1, terms: false, lore: [], loreQueue: [],
  };
  for (let i = 0; i < 5; i++) rnd(g);

  // --- points: home at one end, Citadel at the other
  const pts: { x: number; y: number; region: number }[] = [
    { x: rr(g, 36, 50), y: rr(g, H * 0.35, H * 0.65), region: PLAYER },
    { x: W - rr(g, 36, 50), y: rr(g, H * 0.35, H * 0.65), region: 5 },
  ];
  for (let tries = 0; tries < 8000 && pts.length < CFG.nodes; tries++) {
    const p = { x: rr(g, 22, W - 22), y: rr(g, 22, H - 22), region: 0 };
    if (pts.every(q => dist(p, q) >= 34)) pts.push(p);
  }
  const home = pts[0], cit = pts[1];
  const free = () => pts.filter(p => p.region === 0);
  const nearest = (to: { x: number; y: number }, list: typeof pts) => list.slice().sort((a, b) => dist(a, to) - dist(b, to));

  for (const p of nearest(cit, free()).slice(0, 2)) if (dist(p, cit) < 90) p.region = 5;
  // one faction sits between you and the Citadel, two hold the flanks
  const flank = shuffle(g, [0.18, 0.82]);
  const seeds = [{ x: 0.52, y: 0.5 }, { x: 0.6, y: flank[0] }, { x: 0.6, y: flank[1] }];
  const capitals: (typeof pts)[number][] = [];
  for (const i of [2, 1, 0]) {
    const s = { x: seeds[i].x * W + rr(g, -12, 12), y: seeds[i].y * H + rr(g, -12, 12) };
    const cap = nearest(s, free().filter(p => dist(p, home) > 120))[0];
    cap.region = 2 + i; capitals[i] = cap;
    for (const p of nearest(cap, free().filter(p => dist(p, home) > 95)).slice(0, 3)) if (dist(p, cap) < 90) p.region = 2 + i;
  }

  const facs = sample(g, Object.keys(FACTIONS), 3);
  g.sides[PLAYER] = mkSide(PLAYER, 'player', '', CFG.startUlt);
  facs.forEach((f, i) => (g.sides[2 + i] = mkSide(2 + i, 'faction', f, 20)));
  g.sides[5] = mkSide(5, 'archon', pick(g, Object.keys(ARCHONS)), 30);

  const span = dist(home, cit), byHome = nearest(home, free());
  const names = new Set<string>();
  const name = () => { for (;;) { const s = pick(g, SYL_A) + pick(g, SYL_B); if (!names.has(s)) { names.add(s); return s; } } };
  // archive events go to neutral stations, the fragments a player has not found yet first; other events go to planets
  const ids = LORE.map(l => l.id);
  g.loreQueue = shuffle(g, ids.filter(i => !codex.includes(i))).concat(shuffle(g, ids.filter(i => codex.includes(i))));
  const archive = g.loreQueue.slice();
  let evList: string[] = [];
  const nextEvent = (kind: 'planet' | 'station') => {
    if (kind === 'station' && archive.length) return 'arc_' + archive.shift();
    if (!evList.length) evList = shuffle(g, Object.keys(EVENTS).filter(e => !EVENTS[e].lore));
    const i = evList.findIndex(e => EVENTS[e].on === 'any' || EVENTS[e].on === kind);
    return i < 0 ? null : evList.splice(i, 1)[0];
  };
  const hard = 1 + 0.1 * threat;

  pts.forEach((p, id) => {
    const th = Math.max(0, Math.min(1, dist(p, home) / span + rr(g, -0.12, 0.12)));
    const n: GNode = {
      id, name: name(), kind: 'planet', x: p.x, y: p.y, size: 0, owner: p.region, region: p.region, threat: th,
      drones: 0, shields: 0, lv: 1, sh: 0, spec: '', queue: [], prod: 0, missile: 0,
      specs: [], prisoners: [], buffs: [], event: null, offer: false, hold: null, front: false, trainT: 0, capT: -999,
      capital: false, citadel: false, home: false,
    };
    const roll = rnd(g);
    n.size = roll < 0.35 ? 0 : roll < 0.8 ? 1 : 2;
    const fd = g.sides[p.region]?.kind === 'faction' ? FACTIONS[g.sides[p.region].fac] : null;
    if (p === home) { n.kind = 'station'; n.home = true; n.drones = CFG.startDrones; n.name = 'Haven'; n.sh = 1; }
    else if (p === cit) { n.kind = 'station'; n.citadel = true; n.name = 'The Citadel'; n.drones = Math.round(16 * hard); n.lv = 3; n.sh = 3; n.spec = 'fortress'; }
    else if (p.region === 0) {
      const rank = byHome.indexOf(p);
      n.owner = 0;
      n.kind = rank < 2 ? 'planet' : rank === 2 ? 'station' : rnd(g) < 0.58 ? 'planet' : 'station';
      if (rank === 0) n.size = 0; if (rank === 1) n.size = 1;
      const near = rank <= 2 || dist(p, home) < 70;
      n.drones = near ? ri(g, 0, 1) : Math.round((th * 8 * rr(g, 0.6, 1.3) + 1) * hard);
      n.sh = n.kind === 'planet' ? CFG.neutralShield[n.size] : 1;
      n.offer = n.kind === 'planet' || rnd(g) < 0.5; // every neutral planet and about half the neutral stations hold recruits
      if (rank > 1 && (n.kind === 'station' ? rnd(g) < 0.9 : rnd(g) < 0.25)) n.event = nextEvent(n.kind);
    } else {
      const capital = capitals.includes(p);
      n.capital = capital;
      n.kind = capital ? 'station' : rnd(g) < 0.55 ? 'planet' : 'station';
      n.drones = Math.round((capital ? 9 + th * 5 : 3 + th * 5 * rr(g, 0.7, 1.2)) * hard);
      if (p.region === 5) { n.drones = Math.round(ri(g, 6, 9) * hard); n.sh = 2; n.lv = 2; }
      else { n.sh = Math.min(3, (fd ? fd.ai.shield : 1) - (capital ? 0 : 1) + (rnd(g) < 0.4 ? 1 : 0)); if (capital) { n.lv = 2; n.sh = Math.max(2, n.sh); } }
      n.sh = Math.max(0, n.sh);
      if (fd && rnd(g) < 0.6) n.spec = n.kind === 'planet' ? fd.ai.planet : fd.ai.station;
    }
    if (n.kind === 'station' && !n.home && !n.citadel) n.name = `${pick(g, STATION_NAMES)}-${ri(g, 2, 99)}`;
    n.shields = n.sh * CFG.shieldPerLv;
    g.nodes.push(n);
    g.intel.push({ seen: 0, t: 0, snap: null });
    g.vis.push(0);
  });

  for (const o of g.factions) {
    const f = FACTIONS[g.sides[o].fac], own = g.nodes.filter(n => n.owner === o), cap = own.find(n => n.capital)!;
    cap.name = f.name.split(' ')[0] + ' Prime';
    addSpec(g, WARLORD_OF[f.id], o, cap.id); // the Warlord: captured with the capital, turned for a price
    // the faction's specialists defend its capital and one outpost: the puzzle you must answer
    const spots = [cap, cap, shuffle(g, own.filter(n => !n.capital))[0] || cap];
    f.specs.forEach((d, i) => addSpec(g, d, o, spots[i].id));
    g.sides[o].free = own.reduce((a, n) => a + n.drones, 0) + 4;
  }
  const a = ARCHONS[g.sides[5].fac];
  addSpec(g, 'archon', 5, 1).name = `${a.name} ${a.title}`;
  g.sides[5].free = g.nodes.filter(n => n.owner === 5).reduce((s, n) => s + n.drones, 0) + 6;

  const bases = sample(g, STARTERS, 3), archs = sample(g, Object.keys(ARCHS), 3);
  g.pending.push({ kind: 'draft', node: 0, opts: bases.map((b, i) => ({ base: b, arch: archs[i] })), title: 'Choose your Commander' });
  updateVision(g);
  return g;
}
