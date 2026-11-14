// Core data shapes. The whole Game object is plain JSON so it can be saved and replayed.

export type Mods = Record<string, number>;
export type Fx = any[]; // ['ult', 20] | ['relic','rare'] | ... see events in content.ts

export interface Buff { k: string; v: number; until: number }
export interface Task { kind: 'lv' | 'sh' | 'spec' | 'missile' | 'corridor'; id: string; left: number; total: number; cost: number }
export interface Hold { until: number; total: number; need: number; fx: Fx[]; name: string }

export interface GNode {
  id: number; name: string; kind: 'planet' | 'station';
  x: number; y: number; size: number; // planets: 0 small, 1 medium, 2 large
  owner: number; region: number; threat: number;
  drones: number; shields: number;
  lv: number; // planets: mine level; stations: barracks level (1..3)
  sh: number; // shield level (0..3)
  spec: string; // specialty: '' | refinery | lab | foundry | silo | post | bay
  task: Task | null; // one upgrade at a time
  prod: number; // seconds of progress toward the next Drone (stations)
  missile: number; // missiles ready (silo)
  specs: number[]; // specialists here; the first few (the slot count) are active, the rest are in reserve
  prisoners: number[];
  buffs: Buff[];
  event: string | null; offer: boolean; hold: Hold | null;
  floor: number; // Drones the player wants kept here when rallying
  front: boolean; // front-line nodes never send their Drones away when you rally; supply nodes do
  capital: boolean; citadel: boolean; home: boolean;
}

/** Anything in flight: a fleet, a corridor convoy, a probe or a missile. */
export interface Fleet {
  id: number; owner: number;
  home: number; slot: boolean; // launch node, and whether it is holding one of that node's launch slots
  from: number; to: number; x: number; y: number;
  drones: number; specs: number[]; // specs[0] leads
  lane?: boolean; path?: number[]; // corridor convoy and its remaining hops
  back?: boolean; probe?: boolean; missile?: boolean;
  off?: boolean; noticed?: boolean; speedUp?: number;
}

export interface Corridor { a: number; b: number; owner: number }

export interface Spec {
  id: number; def: string; owner: number;
  node: number; fleet: number; // exactly one is >= 0 (both -1 when removed)
  held: number; // captor's owner id (or -1 for neutral captors), 0 when free
  cd: number; // time the specialist's charged effect is ready again
  up: boolean; // upgraded form
  cmd: null | { base: string; arch: string; lvl: number; xp: number; perks: string[] };
  name?: string;
}

export interface Side {
  owner: number; kind: 'player' | 'faction' | 'archon';
  fac: string;
  ult: number; techs: string[]; relics: string[];
  produce: boolean; // global Drone production switch
  rp: number; // research points toward the next choice
  free: number; // reserve Drones that cost no upkeep (Coalition mobilization)
  net: number; inc: number; upk: number; rpm: number; // last computed income, upkeep and net per minute
  broken: boolean; aiT: number; expT: number; desertT: number; refundT: number;
}

export interface Intel {
  seen: number; t: number;
  snap: null | { owner: number; drones: number; shields: number; lv: number; sh: number; spec: string; missile: number; specs: number[]; prisoners: number[]; buffs: Buff[] };
}

export interface Pending {
  kind: 'draft' | 'spec' | 'relic' | 'event' | 'perk' | 'tech';
  node: number; opts: any[]; title: string; event?: string;
}

export interface Offensive { owner: number; target: number; staging: number; launchT: number; warned: boolean }
export interface LogEntry { t: number; msg: string; kind: 'info' | 'good' | 'bad' | 'warn'; node: number }

export interface Game {
  v: number; seed: number; rng: number; t: number; tick: number; modV: number;
  threat: number; w: number; h: number;
  nodes: GNode[]; fleets: Fleet[]; specs: Spec[]; corridors: Corridor[];
  sides: Record<number, Side>;
  factions: number[]; archon: number;
  mob: { stage: number; prog: number; nextOff: number; turn: number; surge: number };
  offs: Offensive[];
  pending: Pending[]; log: LogEntry[];
  cmdSpec: number; cmdLostT: number;
  intel: Intel[]; vis: number[];
  result: null | 'win' | 'lose'; resultWhy: string;
  stats: Record<string, number>;
  nextId: number; home: number; citadel: number;
}

export const PLAYER = 1;
