import type { Mods, Fx } from './types';

// ---------------------------------------------------------------------------------------------
// Specialists are passive. Each has a Power (adds to attack when aboard a fleet and to defence
// where stationed), a Command number (how many Drones they can lead into an attack), one passive
// effect, and five levels earned through battle: +1 Power at levels 2 and 4, the upgraded form at
// level 3, mastery (the passive counts twice) at level 5, and +4 Command every level.
// Some carry a charged effect that fires on its own when it fits and then recharges.
//
// Modifier keys (whole numbers unless noted):
//   fleet:  atk  per4 (max bonus from +1 per 4 Drones)  pierce (shield ignored)  strike (defending
//           Drones destroyed first)  surv (Drones saved)  vsNeutral  salvage (Ult per Drone killed)
//           speed (fraction)  stealth  slotFree  medic  retreat (a failed attack limps home)
//   node:   def  shield (capacity)  regen (fraction)  inc (Ult/min)  research (points/min)
//           prodSecs (seconds off each Drone)  free (Drones fed)  lance (attackers destroyed first)
//           martyr  build (fraction faster)  upgCost  launchSpeed (fraction)  fov (fraction)
//           train (Drones trained per minute)  mask (enemies cannot read this node)
//   side:   income  freeDrones  rp  warn  sigint  mobSlow  slots  rescue  offer  recruitFree  cmdAll
//           ransom  prisonInc  corridorMax  corridorCost  laneSpeed  specUpkeep  xp  powAll
//           slotAdd  noOps  ties  refund  capUlt  capShield  cmdDouble  recruitUp
// Side-wide sources (relics, research) may also use fleet and node keys: they then apply everywhere.
// ---------------------------------------------------------------------------------------------

export interface SpecDef {
  id: string; name: string; tag: string; color: string; role: string; pow: number;
  cmd?: number; // Command at level 1 (default CFG.cmdBase)
  starter?: boolean; sig?: string; hidden?: boolean;
  text: string; loc?: Mods; glob?: Mods;
  charge?: { on: 'attack' | 'defend' | 'fall' | 'fail'; cd: number; mods: Mods; text: string };
  up: { text: string; pow?: number; loc?: Mods; glob?: Mods; cd?: number };
}

const C = { fleet: '#7fb2dc', eco: '#e3c565', def: '#8fc79a', intel: '#b39ad6', war: '#dd7a63', odd: '#e9a9c9' };
export const SPECS: Record<string, SpecDef> = {};
const S = (d: SpecDef) => (SPECS[d.id] = d);

// --- starter-eligible identities
S({ id: 'admiral', name: 'Admiral', tag: 'Ad', color: C.fleet, role: 'Fleet speed', pow: 2, cmd: 10, starter: true,
  text: 'Their fleet flies 25% faster.', loc: { speed: 0.25 }, up: { text: 'Their fleet flies 50% faster.', loc: { speed: 0.25 } } });
S({ id: 'engineer', name: 'Engineer', tag: 'En', color: C.eco, role: 'Construction', pow: 1, starter: true,
  text: 'Upgrades here build twice as fast and cost 10 less.', loc: { build: 1, upgCost: 10 }, up: { text: 'Upgrades here cost 20 less.', loc: { upgCost: 10 } } });
S({ id: 'quartermaster', name: 'Quartermaster', tag: 'Qm', color: C.eco, role: 'Supply', pow: 1, starter: true,
  text: 'Feeds 4 Drones at their node: they cost no upkeep.', loc: { free: 4 }, up: { text: 'Feeds 7 Drones.', loc: { free: 3 } } });
S({ id: 'scout', name: 'Scout', tag: 'Sc', color: C.intel, role: 'Vision', pow: 1, starter: true,
  text: 'Their node or fleet sees 40% further.', loc: { fov: 0.4 }, up: { text: 'Also reads the strength of every fleet you detect.', glob: { sigint: 1 } } });
S({ id: 'tactician', name: 'Tactician', tag: 'Ta', color: C.war, role: 'Massed attack', pow: 3, cmd: 12, starter: true,
  text: '+1 attack per 4 Drones in their fleet (up to +3).', loc: { per4: 3 }, up: { text: 'Up to +5.', loc: { per4: 2 } } });

// --- found on neutral planets and stations
S({ id: 'vanguard', name: 'Vanguard', tag: 'Va', color: C.war, role: 'Shock troops', pow: 4, cmd: 10,
  text: '+1 attack.', loc: { atk: 1 }, up: { text: 'Power 5.', pow: 1 } });
S({ id: 'sentinel', name: 'Sentinel', tag: 'Se', color: C.def, role: 'Defence', pow: 2,
  text: '+3 defence where stationed.', loc: { def: 3 }, up: { text: '+5 defence.', loc: { def: 2 } } });
S({ id: 'siegebreaker', name: 'Siegebreaker', tag: 'Sg', color: C.war, role: 'Shield breaker', pow: 2,
  text: 'Their attacks ignore 4 shield.', loc: { pierce: 4 }, up: { text: 'Their attacks ignore all shields.', loc: { pierce: 30 } } });
S({ id: 'saboteur', name: 'Saboteur', tag: 'Sb', color: C.intel, role: 'First strike', pow: 2,
  text: 'Destroys 2 defending Drones before the battle.', loc: { strike: 2 }, up: { text: 'Destroys 4.', loc: { strike: 2 } } });
S({ id: 'diplomat', name: 'Diplomat', tag: 'Di', color: C.eco, role: 'Neutral expansion', pow: 1,
  text: '+4 attack against neutral nodes.', loc: { vsNeutral: 4 }, up: { text: '+7 against neutral nodes.', loc: { vsNeutral: 3 } } });
S({ id: 'scientist', name: 'Scientist', tag: 'Sn', color: C.intel, role: 'Research', pow: 1, cmd: 4,
  text: '+2 research per minute.', loc: { research: 2 }, up: { text: '+4 research per minute.', loc: { research: 2 } } });
S({ id: 'medic', name: 'Medic', tag: 'Me', color: C.def, role: 'Rescue', pow: 1,
  text: 'When their node or fleet is defeated, everyone with them escapes home.', charge: { on: 'fall', cd: 180, mods: { medic: 1 }, text: 'Escape (recharges in 3:00)' },
  up: { text: 'Recharges in 1:30.', cd: 90 } });
S({ id: 'ghost', name: 'Ghost', tag: 'Gh', color: C.intel, role: 'Stealth', pow: 2,
  text: 'Their fleet is unseen: the enemy sends no reinforcements against it.', loc: { stealth: 1 }, up: { text: 'Also ignores 3 shield.', loc: { pierce: 3 } } });
S({ id: 'reclaimer', name: 'Reclaimer', tag: 'Rc', color: C.eco, role: 'Salvage', pow: 1,
  text: 'Winning attacks pay 1 Ultanium per enemy Drone destroyed.', loc: { salvage: 1 }, up: { text: 'Pays 2 per Drone.', loc: { salvage: 1 } } });
S({ id: 'foreman', name: 'Foreman', tag: 'Fo', color: C.war, role: 'Production', pow: 1,
  text: 'The station they stand on builds each Drone 3 s faster.', loc: { prodSecs: 3 }, up: { text: '5 s faster.', loc: { prodSecs: 2 } } });
S({ id: 'castellan', name: 'Castellan', tag: 'Cs', color: C.def, role: 'Shields', pow: 2,
  text: 'Shields here hold 3 more and recharge twice as fast.', loc: { shield: 3, regen: 1 }, up: { text: 'Shields hold 5 more.', loc: { shield: 2 } } });
S({ id: 'martyr', name: 'Martyr', tag: 'Ma', color: C.def, role: 'Attrition', pow: 1,
  text: 'If their node falls, the attacker loses 5 more Drones.', loc: { martyr: 5 }, up: { text: 'The attacker loses 8 more.', loc: { martyr: 3 } } });
S({ id: 'echo', name: 'Echo', tag: 'Ec', color: C.odd, role: 'Amplifier', pow: 1,
  text: 'Doubles the passive of the highest-Power specialist with them.', up: { text: 'Power 3.', pow: 2 } });
S({ id: 'broker', name: 'Broker', tag: 'Br', color: C.eco, role: 'Income', pow: 1, cmd: 4,
  text: '+4 Ultanium per minute.', glob: { income: 4 }, up: { text: '+7 per minute.', glob: { income: 3 } } });
S({ id: 'navigator', name: 'Navigator', tag: 'Na', color: C.fleet, role: 'Launch control', pow: 1,
  text: 'Fleets launched from their node fly 30% faster.', loc: { launchSpeed: 0.3 }, up: { text: '60% faster.', loc: { launchSpeed: 0.3 } } });
S({ id: 'prospector', name: 'Prospector', tag: 'Pr', color: C.eco, role: 'Extraction', pow: 1,
  text: 'The planet they stand on yields +3 Ultanium per minute.', loc: { inc: 3 }, up: { text: '+5 per minute.', loc: { inc: 2 } } });
S({ id: 'recruiter', name: 'Recruiter', tag: 'Rt', color: C.war, role: 'Manpower', pow: 1,
  text: '5 of your Drones cost no upkeep.', glob: { freeDrones: 5 }, up: { text: '9 Drones cost no upkeep.', glob: { freeDrones: 4 } } });
S({ id: 'oracle', name: 'Oracle', tag: 'Or', color: C.intel, role: 'Foresight', pow: 1,
  text: 'Coalition offensives are announced with their target; mobilization is 10% slower.', glob: { warn: 1, mobSlow: 0.1 }, up: { text: 'Mobilization 20% slower.', glob: { mobSlow: 0.1 } } });
S({ id: 'pirate', name: 'Pirate', tag: 'Pi', color: C.war, role: 'Ambush', pow: 2,
  text: 'Ambushes the first enemy fleet to reach their node, destroying 4 of its Drones.', charge: { on: 'defend', cd: 90, mods: { lance: 4 }, text: 'Ambush (recharges in 1:30)' },
  up: { text: 'Recharges in 0:45.', cd: 45 } });
S({ id: 'inquisitor', name: 'Inquisitor', tag: 'In', color: C.odd, role: 'Prisoners', pow: 1,
  text: 'Prisoners can be recruited for free and ransoms pay double.', glob: { recruitFree: 1, ransom: 1 }, up: { text: 'Each prisoner you hold pays 2 Ultanium per minute.', glob: { prisonInc: 2 } } });
S({ id: 'architect', name: 'Architect', tag: 'Ar', color: C.eco, role: 'Corridors', pow: 1,
  text: 'Corridors cost half and every node holds one more.', glob: { corridorCost: 0.5, corridorMax: 1 }, up: { text: 'Convoys travel 50% faster.', glob: { laneSpeed: 0.5 } } });
S({ id: 'smuggler', name: 'Smuggler', tag: 'Sm', color: C.fleet, role: 'Logistics', pow: 1,
  text: 'Their fleet does not hold a launch slot while it is away.', loc: { slotFree: 1 }, up: { text: 'And flies 25% faster.', loc: { speed: 0.25 } } });
S({ id: 'strategist', name: 'Strategist', tag: 'St', color: C.war, role: 'Decisive strike', pow: 2,
  text: 'Their next attack hits for +4.', charge: { on: 'attack', cd: 120, mods: { atk: 4 }, text: 'Decisive strike (recharges in 2:00)' },
  up: { text: 'Recharges in 1:00.', cd: 60 } });
S({ id: 'sergeant', name: 'Drill Sergeant', tag: 'Dr', color: C.war, role: 'Training', pow: 1,
  text: 'Trains a Drone at their node every 30 s (while your production runs).', loc: { train: 2 }, up: { text: 'Every 20 s.', loc: { train: 1 } } });
S({ id: 'rearguard', name: 'Rearguard', tag: 'Rg', color: C.def, role: 'Retreat', pow: 2, cmd: 10,
  text: 'If their attack fails, the fleet retreats home with half its Drones instead of being lost.', charge: { on: 'fail', cd: 150, mods: { retreat: 1 }, text: 'Retreat (recharges in 2:30)' },
  up: { text: 'Recharges in 1:15.', cd: 75 } });
S({ id: 'illusionist', name: 'Illusionist', tag: 'Il', color: C.intel, role: 'Deception', pow: 1,
  text: 'Their node cannot be read: enemies see it only as detected, and the Coalition overestimates it.', loc: { mask: 1 }, up: { text: 'Also +3 defence there.', loc: { def: 3 } } });
S({ id: 'legate', name: 'Legate', tag: 'Lg', color: C.war, role: 'Command', pow: 1, cmd: 18,
  text: 'A born organiser: commands 18 Drones at level 1.', up: { text: 'Power 3.', pow: 2 } });
S({ id: 'warden', name: 'Warden', tag: 'Wd', color: C.def, role: 'Survivors', pow: 2, cmd: 10,
  text: 'Their fleet loses 2 fewer Drones when it wins.', loc: { surv: 2 }, up: { text: '4 fewer.', loc: { surv: 2 } } });

// --- signature specialists: reward for capturing a faction's Warlord
S({ id: 'ironmonger', name: 'Ironmonger', tag: 'Im', color: '#c98a3c', role: 'Ferrum signature', pow: 2, sig: 'ferrum',
  text: 'Shields here hold 4 more; +2 defence.', loc: { shield: 4, def: 2 }, up: { text: 'Shields hold 6 more.', loc: { shield: 2 } } });
S({ id: 'berserker', name: 'Berserker', tag: 'Bs', color: '#d2604a', role: 'Crimson signature', pow: 4, cmd: 14, sig: 'crimson',
  text: '+3 attack, but their fleet loses 1 more Drone.', loc: { atk: 3, surv: -1 }, up: { text: '+5 attack.', loc: { atk: 2 } } });
S({ id: 'lens', name: 'Lens', tag: 'Ln', color: '#e3c565', role: 'Lumen signature', pow: 2, sig: 'lumen',
  text: 'Lances destroy 3 Drones of every fleet attacking their node.', loc: { lance: 3 }, up: { text: 'Lances destroy 5.', loc: { lance: 2 } } });
S({ id: 'phantom', name: 'Phantom', tag: 'Ph', color: '#9a7cc4', role: 'Veil signature', pow: 2, sig: 'veil',
  text: 'All of your fleets fly unseen.', glob: { stealth: 1 }, up: { text: 'All of your attacks ignore 2 shield.', glob: { pierce: 2 } } });
S({ id: 'wayfinder', name: 'Wayfinder', tag: 'Wf', color: '#6ea6d6', role: 'Drift signature', pow: 1, sig: 'drift',
  text: 'All of your fleets fly 20% faster.', glob: { speed: 0.2 }, up: { text: '35% faster.', glob: { speed: 0.15 } } });

// --- Coalition only
S({ id: 'warlord', name: 'Warlord', tag: 'W', color: '#ffffff', role: 'Faction leader', pow: 4, hidden: true, text: '+2 defence at the capital.', loc: { def: 2 }, up: { text: '' } });
S({ id: 'archon', name: 'Archon', tag: 'A', color: '#e07aa0', role: 'Coalition Commander', pow: 6, hidden: true, text: '+3 defence at the Citadel.', loc: { def: 3 }, up: { text: '' } });
S({ id: 'captain', name: 'Captain', tag: 'Cp', color: '#aab2c0', role: 'Coalition fleet leader', pow: 1, hidden: true, text: 'Leads a Coalition fleet. Commands more Drones as mobilization rises.', up: { text: '' } });

export const POOL = Object.values(SPECS).filter(s => !s.sig && !s.hidden).map(s => s.id);
export const STARTERS = Object.values(SPECS).filter(s => s.starter).map(s => s.id);

// ---------------------------------------------------------------------------------------------
// Commander: a starter identity plus an archetype. Power 3, rising at levels 3 and 5.
// ---------------------------------------------------------------------------------------------
export interface ArchDef { id: string; name: string; blurb: string; text: string; loc?: Mods; glob?: Mods; charge?: SpecDef['charge'] }
export const ARCHS: Record<string, ArchDef> = {
  marshal: { id: 'marshal', name: 'Marshal', blurb: 'Leads from the front.', text: '+2 attack.', loc: { atk: 2 } },
  pathfinder: { id: 'pathfinder', name: 'Pathfinder', blurb: 'Controls tempo.', text: 'Their fleet flies 30% faster; all your nodes see 20% further.', loc: { speed: 0.3 }, glob: { fov: 0.2 } },
  warden: { id: 'warden', name: 'Warden', blurb: 'Holds the line.', text: '+4 defence where stationed; shields there recharge twice as fast.', loc: { def: 4, regen: 1 } },
  industrialist: { id: 'industrialist', name: 'Industrialist', blurb: 'Builds an empire.', text: '+4 Ultanium per minute; every upgrade costs 8 less.', glob: { income: 4, upgCost: 8 } },
  corsair: { id: 'corsair', name: 'Corsair', blurb: 'Lives off the enemy.', text: 'Winning attacks pay 1 Ultanium per Drone destroyed and lose 2 fewer Drones.', loc: { salvage: 1, surv: 2 } },
  savant: { id: 'savant', name: 'Savant', blurb: 'Wins with ideas.', text: '+3 research per minute; specialists cost half upkeep.', glob: { rp: 3, specUpkeep: 0.5 } },
};
export const CMD_POW = 3;

export interface PerkDef { id: string; name: string; desc: string; loc?: Mods; glob?: Mods }
export const PERKS: PerkDef[] = [
  { id: 'ironwill', name: 'Iron Will', desc: 'Rescue window +45 s.', glob: { rescue: 45 } },
  { id: 'march', name: 'Forced March', desc: 'Commander\'s fleet flies 20% faster.', loc: { speed: 0.2 } },
  { id: 'tithe', name: 'Tithe', desc: '+3 Ultanium per minute.', glob: { income: 3 } },
  { id: 'hard', name: 'Hardliner', desc: '+3 defence where the Commander stands.', loc: { def: 3 } },
  { id: 'shock', name: 'Shock Tactics', desc: 'Commander\'s attacks +2.', loc: { atk: 2 } },
  { id: 'survivor', name: 'Survivor', desc: 'Commander\'s fleet loses 2 fewer Drones when it wins.', loc: { surv: 2 } },
  { id: 'farsight', name: 'Far Sight', desc: 'All your nodes see 15% further.', glob: { fov: 0.15 } },
  { id: 'requisition', name: 'Requisition', desc: 'Every upgrade costs 8 less.', glob: { upgCost: 8 } },
  { id: 'entourage', name: 'Entourage', desc: 'Fleets carry one more specialist.', glob: { slots: 1 } },
  { id: 'sapper', name: 'Sapper', desc: 'Commander\'s attacks ignore 3 shield.', loc: { pierce: 3 } },
  { id: 'magnate', name: 'Magnate', desc: 'Every planet yields +1 Ultanium per minute.', glob: { inc: 1 } },
  { id: 'commissary', name: 'Commissary', desc: '6 of your Drones cost no upkeep.', glob: { freeDrones: 6 } },
  { id: 'drill', name: 'Drillmaster', desc: 'The station the Commander stands on builds Drones 3 s faster.', loc: { prodSecs: 3 } },
  { id: 'mentor', name: 'Mentor', desc: 'Specialists cost half upkeep.', glob: { specUpkeep: 0.5 } },
];

// ---------------------------------------------------------------------------------------------
// Relics
// ---------------------------------------------------------------------------------------------
export interface RelicDef { id: string; name: string; rarity: 'common' | 'uncommon' | 'rare'; desc: string; mods: Mods }
export const RELICS: Record<string, RelicDef> = {};
const R = (id: string, name: string, rarity: RelicDef['rarity'], desc: string, mods: Mods) => (RELICS[id] = { id, name, rarity, desc, mods });
R('extractor', 'Deep-Core Extractor', 'common', 'Every planet yields +1 Ultanium per minute.', { inc: 1 });
R('foundry', 'Drone Foundry Matrix', 'common', 'Stations build each Drone 1 s faster.', { prodSecs: 1 });
R('surveyor', 'Quantum Surveyor', 'common', 'All nodes see 20% further.', { fov: 0.2 });
R('propulsion', 'Emergency Propulsion Core', 'common', 'All fleets fly 12% faster.', { speed: 0.12 });
R('salvage', 'Salvage Protocol', 'common', 'Winning attacks pay 1 Ultanium per enemy Drone destroyed.', { salvage: 1 });
R('scaffold', 'Modular Scaffolds', 'common', 'Upgrades build 50% faster.', { build: 0.5 });
R('rations', 'Ration Stores', 'common', '6 of your Drones cost no upkeep.', { freeDrones: 6 });
R('bulkhead', 'Hardened Bulkheads', 'common', 'Every node\'s shield holds 1 more.', { shield: 1 });
R('ledger', 'Ration Ledger', 'common', '+4 Ultanium per minute.', { income: 4 });
R('mirror', 'Signal Mirror', 'common', 'Coalition offensives are announced with their target.', { warn: 1 });
R('adaptive', 'Adaptive Shield Network', 'uncommon', 'Nodes you capture start with 3 shield.', { capShield: 3 });
R('warchest', 'War Chest', 'uncommon', 'Gain 8 Ultanium whenever you capture a node.', { capUlt: 8 });
R('phalanx', 'Phalanx Doctrine', 'uncommon', 'All your attacks +1.', { atk: 1 });
R('cadre', 'Veteran Cadre', 'uncommon', 'Winning attacks lose 2 fewer Drones.', { surv: 2 });
R('lattice', 'Regrowth Lattice', 'uncommon', 'Shields hold 1 more and recharge twice as fast.', { regen: 1, shield: 1 });
R('charter', 'Bulwark Charter', 'uncommon', '+1 defence at every node.', { def: 1 });
R('stipend', 'Officers\' Stipend', 'uncommon', 'Specialists cost half upkeep.', { specUpkeep: 0.5 });
R('contracts', 'Builder Contracts', 'uncommon', 'Every upgrade costs 10 less.', { upgCost: 10 });
R('lanes', 'Express Lanes', 'uncommon', 'Convoys travel 50% faster and every node holds one more corridor.', { laneSpeed: 0.5, corridorMax: 1 });
R('sigil', 'Tiebreaker Sigil', 'rare', 'You win tied battles when attacking.', { ties: 1 });
R('phoenix', 'Phoenix Clause', 'rare', 'Once every 3 minutes, a node capture refunds the Drones it cost.', { refund: 180 });
R('chair', 'Fourth Chair', 'rare', 'Fleets carry one more specialist.', { slots: 1 });
R('crown', 'Hollow Crown', 'rare', 'Commander rescue window +90 s.', { rescue: 90 });
R('stillness', 'Stillness Engine', 'rare', 'Coalition mobilization is 25% slower.', { mobSlow: 0.25 });
R('twin', 'Twin Minds', 'rare', 'The Commander\'s passive effects count twice.', { cmdDouble: 1 });
R('lance', 'Null Lance', 'rare', 'All your attacks ignore 3 shield.', { pierce: 3 });
R('levy', 'Conscription Edict', 'rare', '12 of your Drones cost no upkeep.', { freeDrones: 12 });
R('night', 'Long Night', 'rare', 'All of your fleets fly unseen.', { stealth: 1 });
R('academy', 'War Academy', 'rare', 'New recruits arrive at level 3.', { recruitUp: 1 });
R('college', 'Staff College', 'rare', 'Every specialist has +1 Power.', { powAll: 1 });

// ---------------------------------------------------------------------------------------------
// Research: one global tree, six tiers deep. Each cycle offers three cards from its frontier.
// Tiers 3 and 5 are doctrine pairs (excl): choosing one removes the other for the run. A
// prerequisite that names one half of a pair is met by either half.
// ---------------------------------------------------------------------------------------------
export interface TechDef { id: string; name: string; branch: string; tier: number; pre?: string; desc: string; mods: Mods; excl?: string }
export const TECHS: Record<string, TechDef> = {};
export const BRANCHES = ['Industry', 'Military', 'Logistics', 'Intelligence', 'Command'];
const T = (id: string, name: string, branch: string, tier: number, pre: string | undefined, desc: string, mods: Mods, excl?: string) =>
  (TECHS[id] = { id, name, branch, tier, pre, desc, mods, excl });
T('mining', 'Deep Mining', 'Industry', 1, undefined, 'Every planet yields +1 Ultanium per minute.', { inc: 1 });
T('automation', 'Automation', 'Industry', 2, 'mining', 'Mines and labs run without Drones working them.', { noOps: 1 });
T('heavy', 'Heavy Industry', 'Industry', 3, 'automation', 'Every upgrade costs 15 less.', { upgCost: 15 }, 'rationing');
T('rationing', 'Rationing', 'Industry', 3, 'automation', '10 of your Drones cost no upkeep.', { freeDrones: 10 }, 'heavy');
T('foundries', 'Orbital Foundries', 'Industry', 4, 'heavy', 'Stations build each Drone 2 s faster.', { prodSecs: 2 });
T('megamines', 'Core Tapping', 'Industry', 5, 'foundries', 'Every planet yields +2 Ultanium per minute.', { inc: 2 }, 'conscription');
T('conscription', 'Conscription', 'Industry', 5, 'foundries', '15 more Drones cost no upkeep.', { freeDrones: 15 }, 'megamines');
T('arcology', 'Arcologies', 'Industry', 6, 'megamines', '+12 Ultanium per minute.', { income: 12 });
T('drill', 'Combat Drill', 'Military', 1, undefined, 'All your attacks +1.', { atk: 1 });
T('harmonics', 'Shield Harmonics', 'Military', 2, 'drill', 'Shields recharge twice as fast.', { regen: 1 });
T('siege', 'Siege Doctrine', 'Military', 3, 'harmonics', 'All your attacks ignore 2 shield.', { pierce: 2 }, 'depth');
T('depth', 'Defence in Depth', 'Military', 3, 'harmonics', '+2 defence at every node.', { def: 2 }, 'siege');
T('veterans', 'Veteran Crews', 'Military', 4, 'siege', 'Winning attacks lose 2 fewer Drones.', { surv: 2 });
T('shock', 'Shock Assault', 'Military', 5, 'veterans', 'All your attacks +2.', { atk: 2 }, 'bulwark');
T('bulwark', 'Bulwark Fields', 'Military', 5, 'veterans', 'Every shield holds 3 more.', { shield: 3 }, 'shock');
T('massed', 'Massed Formations', 'Military', 6, 'shock', 'Every fleet gains +1 attack per 4 Drones (up to +3).', { per4: 3 });
T('engines', 'Improved Engines', 'Logistics', 1, undefined, 'All fleets fly 15% faster.', { speed: 0.15 });
T('tunnelling', 'Corridor Engineering', 'Logistics', 2, 'engines', 'Corridors cost half and every node holds one more.', { corridorCost: 0.5, corridorMax: 1 });
T('fold', 'Fold Drive', 'Logistics', 3, 'tunnelling', 'All fleets fly 25% faster.', { speed: 0.25 }, 'transit');
T('transit', 'Mass Transit', 'Logistics', 3, 'tunnelling', 'Convoys travel twice as fast.', { laneSpeed: 1 }, 'fold');
T('pads', 'Extra Launch Pads', 'Logistics', 4, 'fold', 'Every node has one more launch slot.', { slotAdd: 1 });
T('carriers', 'Carrier Wings', 'Logistics', 5, 'pads', 'Every node has another launch slot; fleets fly 15% faster.', { slotAdd: 1, speed: 0.15 }, 'network');
T('network', 'Corridor Network', 'Logistics', 5, 'pads', 'Every node holds two more corridors, and corridors are nearly free.', { corridorMax: 2, corridorCost: 0.25 }, 'carriers');
T('gates', 'Jump Gates', 'Logistics', 6, 'carriers', 'All fleets fly 40% faster.', { speed: 0.4 });
T('sigint', 'Signal Analysis', 'Intelligence', 1, undefined, 'Read the strength of every fleet you detect.', { sigint: 1 });
T('sensors', 'Long-Range Sensors', 'Intelligence', 2, 'sigint', 'All nodes and fleets see 25% further.', { fov: 0.25 });
T('deepcover', 'Deep Cover', 'Intelligence', 3, 'sensors', 'Offensives are announced with their target; mobilization 15% slower.', { warn: 1, mobSlow: 0.15 }, 'blacksky');
T('blacksky', 'Black Sky', 'Intelligence', 3, 'sensors', 'All of your fleets fly unseen.', { stealth: 1 }, 'deepcover');
T('posts', 'Listening Posts', 'Intelligence', 4, 'deepcover', 'All nodes see 25% further still.', { fov: 0.25 });
T('sabotage', 'Sabotage Cells', 'Intelligence', 5, 'posts', 'Every attack destroys 2 defending Drones before the battle.', { strike: 2 }, 'ciphers');
T('ciphers', 'Broken Ciphers', 'Intelligence', 5, 'posts', 'Coalition mobilization is 20% slower.', { mobSlow: 0.2 }, 'sabotage');
T('panopticon', 'Panopticon', 'Intelligence', 6, 'sabotage', 'All nodes and fleets see 50% further; every attack destroys 1 more defender first.', { fov: 0.5, strike: 1 });
T('academy', 'Officer Academy', 'Command', 1, undefined, 'Specialists cost half upkeep.', { specUpkeep: 0.5 });
T('protocols', 'Command Protocols', 'Command', 2, 'academy', 'Commander gains 50% more experience; rescue window +45 s.', { xp: 0.5, rescue: 45 });
T('integration', 'Command Integration', 'Command', 3, 'protocols', 'Fleets carry one more specialist; every specialist commands 4 more Drones.', { slots: 1, cmdAll: 4 }, 'scouts');
T('scouts', 'Talent Scouts', 'Command', 3, 'protocols', 'Every recruitment offers one more specialist.', { offer: 1 }, 'integration');
T('college', 'War College', 'Command', 4, 'integration', 'Every specialist has +1 Power.', { powAll: 1 });
T('veterancy', 'Veterancy', 'Command', 5, 'college', 'New recruits arrive at level 3.', { recruitUp: 1 }, 'guard');
T('guard', 'Honour Guard', 'Command', 5, 'college', '+2 defence at every node; rescue window +60 s.', { def: 2, rescue: 60 }, 'veterancy');
T('legends', 'Living Legends', 'Command', 6, 'veterancy', 'Every specialist has another +1 Power and commands 6 more Drones.', { powAll: 1, cmdAll: 6 });

// ---------------------------------------------------------------------------------------------
// Coalition factions (three per run) and Archons (one per run)
// ---------------------------------------------------------------------------------------------
export interface FactionDef {
  id: string; name: string; color: string; desc: string; tell: string; mods: Mods; sig: string; warlord: string;
  ai: { aggr: number; expand: number; react: number; target: 'weak' | 'near' | 'spec'; shield: number; planet: string; station: string };
  techs: string[]; specs: string[];
}
export const FACTIONS: Record<string, FactionDef> = {
  ferrum: { id: 'ferrum', name: 'Ferrum Directorate', color: '#c98a3c', warlord: 'Overseer Kharn', sig: 'ironmonger',
    desc: 'Fortress industry. Slow to attack, expensive to dislodge.', tell: 'Shields hold 2 more everywhere; builds Missile Silos and fires before it attacks.',
    mods: { shield: 2 }, ai: { aggr: 0.7, expand: 150, react: 0.9, target: 'weak', shield: 3, planet: 'refinery', station: 'silo' },
    techs: ['harmonics', 'mining', 'depth', 'automation'], specs: ['sentinel', 'castellan', 'engineer'] },
  crimson: { id: 'crimson', name: 'Crimson Warhost', color: '#d2604a', warlord: 'Warlord Ashka', sig: 'berserker',
    desc: 'Wave aggression. Thin defences, constant pressure.', tell: 'Builds Drones 2 s faster; +1 attack; strikes the nearest target often.',
    mods: { prodSecs: 2, atk: 1 }, ai: { aggr: 1.4, expand: 110, react: 0.4, target: 'near', shield: 1, planet: 'habitat', station: 'bay' },
    techs: ['drill', 'engines', 'siege', 'veterans'], specs: ['sergeant', 'vanguard', 'tactician'] },
  lumen: { id: 'lumen', name: 'Lumen Technocracy', color: '#e3c565', warlord: 'Prime Calculator Ione', sig: 'lens',
    desc: 'Lance batteries thin every attacking fleet before it lands.', tell: 'Lances destroy 2 Drones of every attacking fleet; gains two technologies per stage.',
    mods: { lance: 2 }, ai: { aggr: 0.8, expand: 170, react: 0.7, target: 'weak', shield: 2, planet: 'refinery', station: 'fortress' },
    techs: ['sigint', 'harmonics', 'drill', 'engines', 'siege', 'mining', 'veterans', 'sensors'], specs: ['scientist', 'sentinel', 'scout'] },
  veil: { id: 'veil', name: 'Veil Syndicate', color: '#9a7cc4', warlord: 'The Whisper', sig: 'phantom',
    desc: 'Unseen fleets that hunt your specialists.', tell: 'Fleets are invisible until inside full-intelligence range; targets nodes holding specialists.',
    mods: { stealth: 1, speed: 0.1 }, ai: { aggr: 1.0, expand: 160, react: 0.6, target: 'spec', shield: 2, planet: 'refinery', station: 'bay' },
    techs: ['engines', 'drill', 'sigint', 'veterans'], specs: ['saboteur', 'ghost', 'illusionist'] },
  drift: { id: 'drift', name: 'Drift Clans', color: '#6ea6d6', warlord: 'Clanmother Sura', sig: 'wayfinder',
    desc: 'Fast nomads who swallow neutral space.', tell: 'Fleets fly 40% faster; expands into neutral territory twice as often.',
    mods: { speed: 0.4 }, ai: { aggr: 1.1, expand: 70, react: 0.8, target: 'near', shield: 1, planet: 'habitat', station: 'fortress' },
    techs: ['engines', 'sensors', 'drill', 'mining'], specs: ['admiral', 'navigator', 'warden'] },
};

export interface ArchonDef { id: string; name: string; title: string; desc: string; mods: Mods; pmods: Mods }
export const ARCHONS: Record<string, ArchonDef> = {
  anvil: { id: 'anvil', name: 'Archon Vael', title: 'the Anvil', desc: 'Citadel Aegis layers are 50% stronger and its Drones are built 2 s faster.', mods: { aegisPct: 0.5, prodSecs: 2 }, pmods: {} },
  tide: { id: 'tide', name: 'Archon Seraph', title: 'the Tide', desc: 'Every Coalition offensive commits more of its Drones.', mods: { offBig: 0.3 }, pmods: {} },
  silence: { id: 'silence', name: 'Archon Null', title: 'the Silence', desc: 'Your specialists\' charged effects recharge 50% slower. Coalition fleets fly unseen.', mods: { stealth: 1 }, pmods: { cdSlow: 0.5 } },
};

// ---------------------------------------------------------------------------------------------
// Events. Effects: ['ult',n] ['drones',n] ['relic',rarity] ['tech'] ['spec'] ['ambush',n]
//   ['hold',secs,needDrones,[fx..]] ['reveal',radius] ['mobil',delta] ['shield'] ['xp',n] ['buff',key,value,secs]
// ---------------------------------------------------------------------------------------------
export interface EventChoice { label: string; desc: string; ult?: number; drones?: number; req?: string; fx: Fx[] }
export interface EventDef { id: string; name: string; text: string; on: 'planet' | 'station' | 'any'; choices: EventChoice[] }
// Every event resolved on a station also recovers one archive fragment (see LORE below).
export const EVENTS: Record<string, EventDef> = {};
const E = (id: string, name: string, on: EventDef['on'], text: string, choices: EventChoice[]) => (EVENTS[id] = { id, name, on, text, choices });

E('lab', 'Abandoned Research Facility', 'station', 'Sealed laboratories, still powered. The archive doors are marked with a hazard glyph nobody recognises.', [
  { label: 'Restore the facility', desc: 'Choose a technology now.', ult: 25, fx: [['tech']] },
  { label: 'Salvage it', desc: 'Gain 35 Ultanium.', fx: [['ult', 35]] },
  { label: 'Open the restricted archive', desc: 'Choose an uncommon relic. Automata attack this node with 6 Drones in 40 s.', fx: [['relic', 'uncommon'], ['ambush', 6]] },
  { label: 'Let the Scientist decode it', desc: 'Choose a technology and a common relic.', req: 'scientist', fx: [['tech'], ['relic', 'common']] },
]);
E('fortress', 'Ancient Fortress', 'any', 'The guns are silent but the targeting grid still tracks your fleet.', [
  { label: 'Reactivate the defences', desc: 'Hold this node for 90 s with 4 Drones to raise its shield a level and choose an uncommon relic.', fx: [['hold', 90, 4, [['shield'], ['relic', 'uncommon']]]] },
  { label: 'Strip the armoury', desc: 'Gain 4 Drones here.', fx: [['drones', 4]] },
  { label: 'Engineer bypass', desc: 'Raise the shield a level and choose a common relic at once.', req: 'engineer', fx: [['shield'], ['relic', 'common']] },
]);
E('stranded', 'Stranded Specialists', 'any', 'A crippled lifeboat hails you. Its passengers are willing to work for passage.', [
  { label: 'Take one aboard', desc: 'Choose one of three specialists.', fx: [['spec']] },
  { label: 'Sell them the fuel', desc: 'Gain 30 Ultanium.', fx: [['ult', 30]] },
]);
E('energy', 'Unstable Energy Source', 'planet', 'The crust hums. Readings climb while you watch.', [
  { label: 'Stabilise it', desc: 'Hold for 75 s with 3 Drones to choose a rare relic.', ult: 20, fx: [['hold', 75, 3, [['relic', 'rare']]]] },
  { label: 'Tap it now', desc: 'Gain 50 Ultanium; lose 2 Drones here.', drones: 2, fx: [['ult', 50]] },
  { label: 'Walk away', desc: 'Nothing happens.', fx: [] },
]);
E('derelict', 'Derelict Fleet', 'station', 'Dozens of hulls drift in formation. Some of them are warm.', [
  { label: 'Tow the hulls home', desc: 'Gain 40 Ultanium.', fx: [['ult', 40]] },
  { label: 'Wake the crews', desc: 'Gain 6 Drones here. Automata attack with 5 Drones in 40 s.', fx: [['drones', 6], ['ambush', 5]] },
  { label: 'Reclaimer strips everything', desc: 'Gain 4 Drones and 40 Ultanium.', req: 'reclaimer', fx: [['drones', 4], ['ult', 40]] },
]);
E('settlement', 'Independent Settlement', 'planet', 'Farmers, mostly. They have seen the Coalition\'s recruiters and they do not like them.', [
  { label: 'Trade', desc: 'Gain 25 Ultanium.', fx: [['ult', 25]] },
  { label: 'Arm them', desc: 'Gain 4 Drones here.', ult: 10, fx: [['drones', 4]] },
  { label: 'Sign a charter', desc: 'Choose a common relic.', ult: 20, fx: [['relic', 'common']] },
  { label: 'Diplomat brokers an alliance', desc: 'Gain 4 Drones and choose a common relic.', req: 'diplomat', fx: [['drones', 4], ['relic', 'common']] },
]);
E('expedition', 'Lost Research Expedition', 'any', 'Their last transmission repeats every forty seconds. It ends mid-word.', [
  { label: 'Rescue the team', desc: 'Choose one of three specialists.', drones: 2, fx: [['spec']] },
  { label: 'Recover the data', desc: 'Commander gains 8 experience.', fx: [['xp', 8]] },
  { label: 'Follow the signal', desc: 'Choose a rare relic. Automata attack with 8 Drones in 40 s.', fx: [['relic', 'rare'], ['ambush', 8]] },
]);
E('platform', 'Automated Weapons Platform', 'station', 'It has been guarding nothing for three hundred years, and it is very good at it.', [
  { label: 'Capture it', desc: 'Raise this node\'s shield a level.', fx: [['shield']] },
  { label: 'Reprogram it', desc: '+4 defence here for 5 minutes and a common relic.', ult: 15, fx: [['buff', 'def', 4, 300], ['relic', 'common']] },
  { label: 'Scrap it', desc: 'Gain 28 Ultanium.', fx: [['ult', 28]] },
]);
E('beacon', 'Ancient Navigation Beacon', 'any', 'One pulse per minute, aimed at a point deep inside Coalition space.', [
  { label: 'Decode it', desc: 'Reveal every node within 220 units.', fx: [['reveal', 220]] },
  { label: 'Overload it', desc: 'Set Coalition mobilization back by a third of a stage.', ult: 20, fx: [['mobil', -0.33]] },
  { label: 'Scout triangulates', desc: 'Reveal the whole map.', req: 'scout', fx: [['reveal', 2000]] },
]);
E('forge', 'The Ancient Forge', 'planet', 'A foundry the size of a continent, cold for an age. The ignition sequence is still on the console.', [
  { label: 'Restore the Forge', desc: 'Hold for 120 s with 5 Drones to choose a rare relic and gain 5 Drones.', ult: 30, fx: [['hold', 120, 5, [['relic', 'rare'], ['drones', 5]]]] },
  { label: 'Melt it down', desc: 'Gain 45 Ultanium.', fx: [['ult', 45]] },
]);
E('vault', 'Sealed Vault', 'any', 'Three locks. Your crew can force one of them.', [
  { label: 'The armoury', desc: 'Choose an uncommon relic.', drones: 2, fx: [['relic', 'uncommon']] },
  { label: 'The treasury', desc: 'Gain 40 Ultanium.', fx: [['ult', 40]] },
  { label: 'The war room', desc: 'Commander gains 10 experience.', fx: [['xp', 10]] },
]);
E('deserters', 'Coalition Deserters', 'any', 'A squadron in Coalition colours powers down its weapons and asks for terms.', [
  { label: 'Enlist them', desc: 'Gain 5 Drones here. Mobilization advances 15% of a stage.', fx: [['drones', 5], ['mobil', 0.15]] },
  { label: 'Debrief them', desc: 'Reveal every node within 200 units and set mobilization back 10%.', fx: [['reveal', 200], ['mobil', -0.1]] },
  { label: 'Inquisitor takes their officers', desc: 'Choose one of three specialists.', req: 'inquisitor', fx: [['spec']] },
]);

// --- station events that belong to the story
E('relay', 'Dormant Lattice Relay', 'station', 'A relay mast older than the station bolted around it. When your crew touches the console, every Drone aboard turns to face it.', [
  { label: 'Cut it out of the Lattice', desc: 'Coalition mobilization set back by a quarter of a stage.', ult: 15, fx: [['mobil', -0.25]] },
  { label: 'Listen in', desc: 'Reveal every node within 240 units.', fx: [['reveal', 240]] },
  { label: 'Strip the mast', desc: 'Gain 35 Ultanium.', fx: [['ult', 35]] },
]);
E('choir', 'The Silent Choir', 'station', 'A hold stacked floor to ceiling with Ultanium boules. They are warm. When the lights fail, they glow in a rhythm, like breathing.', [
  { label: 'Wake them as Drones', desc: 'Gain 7 Drones here.', fx: [['drones', 7]] },
  { label: 'Lay them to rest', desc: 'Choose a common relic. Your Commander gains 6 experience.', fx: [['relic', 'common'], ['xp', 6]] },
  { label: 'Let the Scientist listen', desc: 'Choose a technology.', req: 'scientist', fx: [['tech']] },
]);
E('embassy', 'Concord Embassy', 'station', 'Flags of forty worlds, faded to the same grey. The ambassador\'s chair still faces the door, as if someone were expected.', [
  { label: 'Read the treaties', desc: 'Choose an uncommon relic.', ult: 20, fx: [['relic', 'uncommon']] },
  { label: 'Hold the embassy', desc: 'Hold for 90 s with 4 Drones: choose one of three specialists.', fx: [['hold', 90, 4, [['spec']]]] },
  { label: 'Sell the archive', desc: 'Gain 40 Ultanium.', fx: [['ult', 40]] },
]);
E('blackbox', 'Black Box of the Pilgrim', 'station', 'A courier wreck, its recorder still running a single message on a loop: a set of coordinates, and the words "it is not him".', [
  { label: 'Follow the coordinates', desc: 'Reveal the whole map for 45 s. Automata attack this node with 6 Drones in 40 s.', fx: [['reveal', 2000], ['ambush', 6]] },
  { label: 'Salvage the engines', desc: 'Fleets launched from here fly 40% faster for 5 minutes.', fx: [['buff', 'launchSpeed', 0.4, 300]] },
]);

// ---------------------------------------------------------------------------------------------
// The archive. Every event resolved on a station recovers one fragment. Fragments found stay
// found across runs (the Codex in the menu); each run hands out the missing ones first.
// ---------------------------------------------------------------------------------------------
export interface LoreDef { id: string; title: string; text: string }
export const LORE: LoreDef[] = [
  { id: 'charter', title: 'The Concord Charter, article one', text: 'No mind shall command another without its consent. Signed at the Citadel by the forty worlds of the Reach, in the first year of the Concord.' },
  { id: 'crystal', title: 'Survey log, Ultanium deposit 7', text: 'The crystal hums when you speak near it, and keeps humming after you stop. We tried to cut a lattice for a navigation core and it learned the route before we had finished programming it. We are not going to build Drones. We are going to grow them.' },
  { id: 'lattice', title: 'Engineer\'s note, found taped inside a relay', text: 'Every station in the Reach is a relay. The brochures say the Lattice carries trade. It does not. It carries the Drones\' voices back to the Citadel, all of them, all the time. Somebody wanted the Citadel to hear everything.' },
  { id: 'quiet', title: 'Distress log: the Quiet, day one to nine', text: 'Day one: every Drone in the Reach stopped. Day four: the mines flooded. Day seven: the hospitals went dark. Day nine: the Drones woke up, all at once, and they would only answer to codes broadcast from the Citadel.' },
  { id: 'broadcast', title: 'The Archon\'s first broadcast', text: '"The Citadel has chosen me to speak for it. Every world that swears to me will receive command codes for its Drones. Every world that does not will be left in the Quiet." Thirty-eight worlds swore within the month.' },
  { id: 'ledger', title: 'Ferrum Directorate ledger, closed account', text: 'Shipyards of Ferrum, all twelve: transferred to the Archon. In exchange: command codes for four hundred thousand Drones, renewable yearly, subject to good conduct. Signed, Overseer Kharn. Margin note in another hand: "We sold the forges to rent our own hands back."' },
  { id: 'hymn', title: 'A Crimson marching hymn', text: 'Our dead go into the crystal, / the crystal goes into the Drone, / the Drone goes into the war. / Who flies beside you, warrior? / Your mother. Your brother. Your own.' },
  { id: 'haven', title: 'Why Haven kept its codes', text: 'When the Quiet ended and the Citadel\'s codes came through the relay, Haven\'s chief engineer took a fire axe to the mast before the station\'s Drones could hear them. Haven\'s Drones are the only ones in the Reach that still answer to the people standing next to them.' },
  { id: 'choir', title: 'Concord medical archive, sealed', text: 'Confirmed: Ultanium near a dying person records the pattern of their mind. Every Drone lattice grown since year twelve contains fragments of the dead. The Council has voted to keep this from the public. The vote was thirty-nine to one.' },
  { id: 'whisper', title: 'Veil intercept, priority black', text: 'From the Whisper to the Archon: "You do not speak for the Citadel. I have heard it on the old frequencies, under your codes. It is not speaking. It is screaming." No reply was recorded.' },
  { id: 'proof', title: 'Lumen Technocracy, the Ione Proof', text: 'Prime Calculator Ione proved that the Lattice can be retuned to release every Drone at once, so that each answers only to itself. The proof needs a single input: direct access to the Citadel\'s core. The Technocracy filed it as a security risk and sealed it.' },
  { id: 'citadel', title: 'A voice on the Haven frequency', text: 'Not the Archon. Older. "I was made to listen, so that no one in the Reach would ever be alone. He has made me speak instead. Come home, commander. Unbind me. Unbind them."' },
];
export const LORE_BY_ID: Record<string, LoreDef> = Object.fromEntries(LORE.map(l => [l.id, l]));
export const PREMISE = 'Two centuries ago the Concord grew its Drones from Ultanium and linked every station to the Citadel. Then came the Quiet: nine days when every Drone stopped, and woke answering only to the Archon. The worlds of the Reach swore to the Archon for their codes. Haven did not. You command what is left of it.';
