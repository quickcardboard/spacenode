// All balance values live here or in content.ts. Nothing in the sim or UI hard-codes numbers.

export const CFG = {
  dt: 0.1, // fixed step: 10 updates per simulated second
  shipSpeed: 1.2, // map units per second
  loadTime: 6,
  startUlt: 35, startDrones: 12, baseIncome: 4, // Ultanium per minute
  droneCap: 120,
  batch: 5, batchTime: 30,
  shipCost: 30, shipTime: 100,
  natRegenSecs: 20,
  natBySize: [4, 7, 11],
  capBySize: [6, 9, 13], // Ultanium per minute ceiling
  mineBase: 3.2, sizeMult: [1, 1.5, 2.2], mineDim: [1, 0.75, 0.5, 0.3, 0.3],
  mineSlots: [2, 3, 4], minesPerGen: 2,
  fovInner: { planet: [54, 60, 68], station: 62 },
  fovOuter: { planet: [95, 104, 115], station: 110 },
  specSlots: 3,
  rescueSecs: 150,
  ransom: 15, recruitCost: 40, convertSecs: 60,
  // Coalition
  stageSecs: 540, graceSecs: 360, offInterval: [0, 300, 260, 220, 185, 150],
  offCommit: [0, 0.45, 0.55, 0.65, 0.75, 0.85], gatherSecs: 55,
  captureSetback: 0.15, aegisPerLayer: 12,
  xpLevels: [0, 6, 16, 30, 48],
};

export interface BuildDef {
  id: string; name: string; on: 'planet' | 'station'; cost: number; time: number; max: number;
  desc: string; tech?: string;
}

export const BUILD: Record<string, BuildDef> = {
  gen: { id: 'gen', name: 'Generator', on: 'planet', cost: 10, time: 40, max: 2, desc: 'Powers up to 2 mines.' },
  mine: { id: 'mine', name: 'Mine', on: 'planet', cost: 8, time: 30, max: 4, desc: 'Produces Ultanium. Needs generator power and 1 Drone to operate.' },
  lab: { id: 'lab', name: 'Research Lab', on: 'planet', cost: 30, time: 75, max: 1, desc: 'Enables research at this node.' },
  shield: { id: 'shield', name: 'Shield Generator', on: 'planet', cost: 18, time: 45, max: 2, desc: '+4 natural defence and faster recharge.' },
  relay: { id: 'relay', name: 'Relay', on: 'planet', cost: 15, time: 40, max: 1, desc: '+25% field of view.' },
  bastion: { id: 'bastion', name: 'Bastion', on: 'planet', cost: 35, time: 90, max: 1, desc: '+8 defence.', tech: 'fort' },
  dock: { id: 'dock', name: 'Dock', on: 'station', cost: 12, time: 35, max: 3, desc: 'One more ship can load and unload here.' },
  turret: { id: 'turret', name: 'Turret', on: 'station', cost: 18, time: 45, max: 3, desc: '+4 defence.' },
  barracks: { id: 'barracks', name: 'Barracks', on: 'station', cost: 20, time: 60, max: 1, desc: 'Drone batches 25% faster.' },
  shipyard: { id: 'shipyard', name: 'Shipyard', on: 'station', cost: 20, time: 60, max: 1, desc: 'Ships build 25% faster.' },
  sensor: { id: 'sensor', name: 'Sensor Array', on: 'station', cost: 15, time: 45, max: 1, desc: '+30% detection radius; reveals strength of fleets heading here.' },
  slab: { id: 'slab', name: 'Research Lab', on: 'station', cost: 30, time: 75, max: 1, desc: 'Enables research at this node.' },
  screen: { id: 'screen', name: 'Screen', on: 'station', cost: 22, time: 60, max: 1, desc: '+5 defence.' },
};

export const STRUCT_DEF: Record<string, number> = { turret: 4, bastion: 8, screen: 5 };
