// All balance values live here or in content.ts. Nothing in the sim or UI hard-codes numbers.

export const CFG = {
  dt: 0.1, // fixed step: 10 updates per simulated second
  shipSpeed: 1.2, // map units per second
  loadTime: 6,
  startUlt: 40, startDrones: 12, baseIncome: 6, // Ultanium per minute
  // Drone cap: a base plus a share for every node you hold
  capBase: 65, capPlanet: 7, capStation: 17,
  batch: 5, batchTime: 30,
  shipCost: 30, shipTime: 100,
  // Defence is Drones plus shields. Shields are capped; turrets only shoot down incoming Drones.
  shieldPerGen: 5, shieldCap: 20, shieldRegenSecs: 4, // seconds per shield point recharged
  neutralShieldGens: [1, 2, 4], // shield generators already standing on neutral planets, by size
  turretKill: 3, // incoming enemy Drones each turret destroys before a fleet lands
  // Late-game sinks
  musterCost: 3, musterSize: 10, // Ultanium per Drone, Drones per Muster at a station
  habitatCap: 15, // Drone cap per Habitat
  capBySize: [9, 13, 19], // Ultanium per minute ceiling
  mineBase: 4.4, sizeMult: [1, 1.5, 2.2], mineDim: [1, 0.75, 0.5, 0.3, 0.3],
  mineSlots: [2, 3, 4], minesPerGen: 2,
  fovInner: { planet: [42, 46, 52], station: 48 },
  fovOuter: { planet: [72, 78, 88], station: 82 },
  shipFov: [26, 46], // inner (full intelligence) and outer (detection) radius around your ships
  corridorCost: 40, corridorTime: 110, corridorRange: 150, corridorMax: 2, corridorSpeed: 2,
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
  shield: { id: 'shield', name: 'Shield Generator', on: 'planet', cost: 18, time: 45, max: 4, desc: '+5 shield (a node holds at most 20). Shields absorb attacks before Drones and recharge over time.' },
  habitat: { id: 'habitat', name: 'Habitat', on: 'planet', cost: 45, time: 60, max: 2, desc: '+15 to your Drone cap.' },
  relay: { id: 'relay', name: 'Relay', on: 'planet', cost: 15, time: 40, max: 1, desc: '+25% field of view.' },
  dock: { id: 'dock', name: 'Dock', on: 'station', cost: 12, time: 35, max: 3, desc: 'One more ship can load and unload here.' },
  turret: { id: 'turret', name: 'Turret', on: 'station', cost: 18, time: 45, max: 3, desc: 'Destroys 3 Drones of every enemy fleet before it lands. Unseen fleets and Siegebreakers slip past.' },
  sshield: { id: 'sshield', name: 'Shield Generator', on: 'station', cost: 18, time: 45, max: 4, desc: '+5 shield (a node holds at most 20). Shields absorb attacks before Drones and recharge over time.' },
  barracks: { id: 'barracks', name: 'Barracks', on: 'station', cost: 20, time: 60, max: 1, desc: 'Drone batches 25% faster.' },
  shipyard: { id: 'shipyard', name: 'Shipyard', on: 'station', cost: 20, time: 60, max: 1, desc: 'Ships build 25% faster.' },
  sensor: { id: 'sensor', name: 'Sensor Array', on: 'station', cost: 15, time: 45, max: 1, desc: '+30% detection radius; reveals strength of fleets heading here.' },
  slab: { id: 'slab', name: 'Research Lab', on: 'station', cost: 30, time: 75, max: 1, desc: 'Enables research at this node.' },
};

