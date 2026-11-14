// Core data shapes. The whole Game object is plain JSON so it can be saved and replayed.

export type Mods = Record<string, number>;
export type Fx = any[]; // ['ult', 20] | ['relic','rare'] | ... see events in content.ts

export interface Buff { k: string; v: number; until: number }
export interface Task { kind: 'build' | 'ship' | 'corridor'; id: string; left: number; total: number; cost: number }
export interface Hold { until: number; total: number; need: number; fx: Fx[]; name: string }

export interface GNode {
  id: number; name: string; kind: 'planet' | 'station';
  x: number; y: number; size: number; // planets: 0 small, 1 medium, 2 large
  owner: number; region: number; threat: number;
  drones: number; shields: number;
  b: Record<string, number>; // building / attachment counts
  lane: Task | null; queue: Task[];
  prod: number; // drone batch progress (stations)
  research: string | null; resFirst: boolean;
  specs: number[]; prisoners: number[];
  buffs: Buff[];
  event: string | null; offer: boolean; hold: Hold | null;
  conv: { spec: number; until: number } | null;
  capital: boolean; citadel: boolean; home: boolean;
}

export interface Ship {
  id: number; owner: number; seq: number;
  at: number; // node id, or -1 while in transit
  from: number; to: number; x: number; y: number;
  drones: number; specs: number[]; buffs: Buff[];
  loadUntil: number; // >0 while loading before departure
  redirected: boolean; back: boolean; // back = returning empty-handed
  off: boolean; // part of a coalition offensive
  lane?: boolean; // a convoy travelling through a corridor rather than a ship
  path?: number[]; // remaining corridor hops after `to`
  unload?: boolean; // cargo still to be unloaded at the node it reached
}

export interface Corridor { a: number; b: number; owner: number; until: number } // until 0 = permanent

export interface Spec {
  id: number; def: string; owner: number;
  node: number; ship: number; // exactly one is >= 0
  held: number; // owner id of captor, or 0 when free
  cd: Record<string, number>; // ability id -> time it is ready
  cmd: null | { base: string; arch: string; lvl: number; xp: number; perks: string[] };
  name?: string;
  shield: number; // medic protection ready time
}

export interface Side {
  owner: number; kind: 'player' | 'faction' | 'archon';
  fac: string; // faction or archon id ('' for player)
  ult: number; techs: string[]; techProg: Record<string, number>; techLv: Record<string, number>;
  relics: string[];
  broken: boolean; aiT: number; expT: number; capBase: number;
  refundT: number; levyT: number;
}

export interface Intel {
  seen: number; // 0 never, 1 detected, 2 identified at some point
  t: number; // time of last full snapshot
  snap: null | { owner: number; drones: number; shields: number; b: Record<string, number>; specs: number[]; prisoners: number[]; buffs: Buff[] };
}

export interface Pending {
  kind: 'draft' | 'spec' | 'relic' | 'event' | 'perk' | 'crew';
  node: number; opts: any[]; title: string; event?: string;
}

export interface Offensive { owner: number; target: number; staging: number; launchT: number; warned: boolean }

export interface LogEntry { t: number; msg: string; kind: 'info' | 'good' | 'bad' | 'warn'; node: number }

export interface Game {
  v: number; seed: number; rng: number; t: number; tick: number; modV: number;
  threat: number; // difficulty level 0..5
  w: number; h: number;
  nodes: GNode[]; ships: Ship[]; specs: Spec[];
  sides: Record<number, Side>;
  factions: number[]; // owner ids of faction sides
  archon: number; // owner id
  mob: { stage: number; prog: number; nextOff: number; turn: number; surge: number };
  offs: Offensive[];
  corridors: Corridor[];
  pending: Pending[]; log: LogEntry[];
  cmdSpec: number; cmdLostT: number; // commander spec id, time captured (-1 if free)
  intel: Intel[]; vis: number[];
  result: null | 'win' | 'lose'; resultWhy: string;
  stats: Record<string, number>;
  nextId: number; home: number; citadel: number;
}

export const PLAYER = 1;
