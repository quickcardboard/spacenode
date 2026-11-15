// Every balance number lives here (and is editable in the in-game tuning console).

export const CFG = {
  dt: 0.1, // fixed step: 10 updates per simulated second
  fleetSpeed: 1.2, // map units per second
  startUlt: 30, startDrones: 6, baseIncome: 8, freeBase: 8, // freeBase: Drones your home feeds at no upkeep // Ultanium per minute
  // Economy
  mineOut: [0, 3, 5.5, 8], // Ultanium per minute by mine level (needs one Drone working per level)
  sizeMult: [1, 1.3, 1.7], // planet size multiplier
  refineryMult: 1.5, labRp: 4, labWorkers: 2, habitatFree: 10, // Drones each Habitat feeds, anywhere in your territory
  upkeepDrone: 0.6, upkeepPower: 0.5, // Ultanium per minute per Drone / per point of specialist Power
  armyShare: 0.75, // stations stop building once upkeep would pass this share of income, so some is always left to spend
  desertSecs: 4, // one Drone deserts this often while you are broke
  // Upgrades: cost to reach level 2 and 3 (level 1 is free), shields to reach 1, 2, 3
  lvCost: [0, 0, 30, 80], lvTime: 40,
  shCost: [0, 15, 35, 70], shTime: 25,
  specCost: 40, specTime: 40,
  missileCost: 100, missileTime: 60, missileRange: 170, missileKill: 6, missileSpeed: 2.5,
  // Drones and defence
  prodSecs: [0, 10, 7, 5], // seconds per Drone by Barracks level
  shieldPerLv: 2, shieldRegenSecs: 6,
  slotsStation: 2, slotsPlanet: 1, crew: 3, queueMax: 4,
  baySpeed: 0.3, bayCrew: 1, baySlots: 1, fortressDef: 5,
  // Command: an attacking fleet carries at most this many Drones per specialist aboard
  cmdBase: 8, cmdPerLvl: 4, cmdCommander: 12, captainCmd: 10, captainCmdStage: 5,
  // Specialist experience: total needed for levels 2..5, and what each battle is worth
  specXp: [0, 0, 5, 13, 24, 38], xpWin: 3, xpLose: 1, xpDefend: 2,
  // Battles: a fleet engages from this far out and fights this long before the outcome lands
  engageDist: 13, fightSecs: 1.8,
  // Flagship: a station you build that moves; specialists near it fight a level higher
  flagshipCost: 150, flagshipTime: 90, flagshipSpeed: 0.45, flagshipAura: 90,
  rallyBatch: 4,
  // Vision
  fovInner: { planet: [42, 46, 52], station: 48 },
  fovOuter: { planet: [72, 78, 88], station: 82 },
  fleetFov: [26, 46],
  // Corridors
  corridorCost: 30, corridorTime: 45, corridorRange: 150, corridorMax: 2, corridorSpeed: 2,
  // Specialists and research
  rescueSecs: 150, ransom: 15, recruitCost: 25,
  rpBase: 6, rpStep: 3, // research points for the first choice, and extra per technology known
  xpLevels: [0, 6, 16, 30, 48],
  // Map
  nodes: 36, neutralShield: [1, 2, 3], // shield level on neutral planets by size
  // Coalition
  stageSecs: 420, graceSecs: 300, offInterval: [0, 240, 210, 180, 150, 120],
  offCommit: [0, 0.5, 0.6, 0.7, 0.8, 0.9], gatherSecs: 45,
  stageFree: 6, surgeFree: 12, // upkeep-free reserve Drones each faction gains per stage / per surge
  captureSetback: 0.15, aegisPerLayer: 5,
  counterSecs: 150, counterWindow: 120, // a faction counterattacks a node you just took at most this often, within this long of the capture
  surrender: 0.3, terms: 0.25, // a faction gives up below this share of your strength; the Archon offers terms below this
};

export const SPECIALTY: Record<string, { name: string; on: 'planet' | 'station'; desc: string }> = {
  refinery: { name: 'Refinery', on: 'planet', desc: 'Mine output +50%.' },
  lab: { name: 'Lab', on: 'planet', desc: 'Adds research speed. Needs 2 Drones working.' },
  habitat: { name: 'Habitat', on: 'planet', desc: '10 more of your Drones cost no upkeep, wherever they are.' },
  silo: { name: 'Missile Silo', on: 'station', desc: 'Builds missiles. A missile wipes a node\'s shield and kills 6 Drones. No upkeep.' },
  fortress: { name: 'Fortress', on: 'station', desc: '+5 defence here; shields recharge twice as fast.' },
  bay: { name: 'Launch Bay', on: 'station', desc: 'One more launch slot; fleets from here fly 30% faster and carry one more specialist.' },
};
