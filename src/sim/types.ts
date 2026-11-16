// Core data shapes. The whole Game object is plain JSON so it can be saved and replayed.

export type Mods = Record<string, number>;
export type Fx = any[]; // ['ult', 20] | ['relic','rare'] | ... see events in content.ts

export interface Buff { k: string; v: number; until: number; from?: number }
export interface Task { kind: 'lv' | 'sh' | 'spec' | 'missile' | 'corridor'; id: string; left: number; total: number; cost: number }
export interface Hold { until: number; total: number; need: number; fx: Fx[]; name: string }

export interface GNode {
  id: number; name: string; kind: 'planet' | 'station';
  x: number; y: number; size: number; // planets: 0 small, 1 medium, 2 large
  owner: number; region: number; threat: number;
  drones: number; shields: number;
  lv: number; // planets: mine level; stations: barracks level (1..3)
  sh: number; // shield level (0..3)
  spec: string; // specialty: '' | refinery | lab | habitat | fortress | silo | flagship
  queue: Task[]; // build queue, paid when queued; the first job is the one in progress
  prod: number; // seconds of progress toward the next Drone (stations)
  missile: number; // missiles ready (silo)
  specs: number[]; // officers stationed here (no limit)
  prisoners: number[];
  buffs: Buff[];
  event: string | null; offer: boolean; hold: Hold | null;
  front: boolean; // a Bastion: never sends its Drones away when you rally (Supply nodes do)
  trainT: number; // progress toward the next Drone trained by a specialist here
  capT: number; // when this node last changed hands
  flagship?: boolean; dest?: { x: number; y: number } | null; // the Flagship: a station that sails
  anchorT?: number; sailT?: number; // anchored (cannot launch or sail) until; may sail again from
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
  fight?: number; // seconds of battle left once it has engaged a hostile node
  hunt?: number; cargo?: number[]; hunted?: boolean; // a Pirate's interception: the fleet it chases, prisoners aboard; chased already
  boost?: number; picked?: number[]; // Momentum carried into the next battle; pickets that have already hit it
}

export interface Corridor { a: number; b: number; owner: number }

export interface Spec {
  id: number; def: string; owner: number;
  node: number; fleet: number; // exactly one is >= 0 (both -1 when removed)
  held: number; // captor's owner id (or -1 for neutral captors), 0 when free
  cd: number; // time the specialist's charged effect is ready again
  lvl: number; xp: number; // form: 1 base, 2 upgraded (at CFG.upXp experience)
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
  broken: boolean; aiT: number; expT: number; desertT: number; refundT: number; counterT?: number; found?: boolean; missileT?: number;
}

export interface Intel {
  seen: number; t: number;
  snap: null | { owner: number; drones: number; shields: number; lv: number; sh: number; spec: string; missile: number; specs: number[]; prisoners: number[]; buffs: Buff[] };
}

export interface Pending {
  kind: 'draft' | 'spec' | 'relic' | 'event' | 'perk' | 'tech' | 'terms';
  node: number; opts: any[]; title: string; event?: string; t?: number; id?: number;
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
  terms: boolean; // the Archon has offered terms (once per run)
  lore: string[]; loreQueue: string[]; // archive fragments found this run, and the order the rest will turn up in
}

export const PLAYER = 1;
