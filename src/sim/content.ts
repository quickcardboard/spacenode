import type { Mods, Fx } from './types';

// ---------------------------------------------------------------------------------------------
// Modifier keys (all numeric; flags are > 0). Sources: specialists at a location, buffs, relics,
// technologies, commander perks and faction traits.
//   node:  def mine build research prod batch fov natRegen shieldMax cap capPct mineSlots preKill
//          martyr launchSpeed structDef (turret kills) natRegen (shield recharge) shieldMax def (shield capacity)
//   ship:  speed atk atkPct atkPer8 vsNeutral ignStruct ignNat structHalf stealth surv redirect
//          noLoad salvage
//   side:  droneCap cd shipCost shipSpeed warn ties ransom prisonInc xp slots scoutReturn sigint
//          incomeFlat mobSlow rescue capShield capUlt refund remember techCost levy recruit
//          cmdDouble noOps unlockBastion offBig cdPenalty aegisPct
// ---------------------------------------------------------------------------------------------

export interface AbilityDef {
  id: string; name: string; cd: number; desc: string;
  target: 'self' | 'node' | 'ident' | 'neutral' | 'enemy' | 'own';
  at: 'any' | 'node' | 'ship' | 'planet';
}
export interface SpecDef {
  id: string; name: string; tag: string; color: string; role: string;
  starter?: boolean; sig?: string; // sig = faction whose Warlord yields this specialist
  passive: string; loc?: Mods; glob?: Mods; active?: AbilityDef;
}

const A = (id: string, name: string, cd: number, target: AbilityDef['target'], at: AbilityDef['at'], desc: string): AbilityDef =>
  ({ id, name, cd, target, at, desc });

const C = { fleet: '#7fb2dc', eco: '#e3c565', def: '#8fc79a', intel: '#b39ad6', war: '#dd7a63', odd: '#e9a9c9' };

export const SPECS: Record<string, SpecDef> = {};
const S = (d: SpecDef) => (SPECS[d.id] = d);

// --- Starter-eligible identities (also appear on planets) ---
S({ id: 'admiral', name: 'Admiral', tag: 'Ad', color: C.fleet, role: 'Fleet mobility', starter: true,
  passive: 'The ship carrying the Admiral flies 15% faster.', loc: { speed: 0.15 },
  active: A('fullburn', 'Full Burn', 120, 'self', 'ship', 'This ship gains +50% speed for 30 s.') });
S({ id: 'engineer', name: 'Engineer', tag: 'En', color: C.eco, role: 'Construction', starter: true,
  passive: 'Construction here is 25% faster.', loc: { build: 0.25 },
  active: A('repair', 'Emergency Repair', 120, 'self', 'node', 'Cut 25 s off the current build and fully recharge shields.') });
S({ id: 'quartermaster', name: 'Quartermaster', tag: 'Qm', color: C.eco, role: 'Economy', starter: true,
  passive: 'Mines here produce 20% more.', loc: { mine: 0.2 },
  active: A('surge', 'Surge Mining', 180, 'self', 'planet', '+50% mine output here for 60 s.') });
S({ id: 'scout', name: 'Scout', tag: 'Sc', color: C.intel, role: 'Intelligence', starter: true,
  passive: 'This node sees 30% further.', loc: { fov: 0.3 },
  active: A('deepscan', 'Deep Scan', 90, 'node', 'any', 'Fully identify one detected node for 60 s.') });
S({ id: 'tactician', name: 'Tactician', tag: 'Ta', color: C.war, role: 'Combat', starter: true,
  passive: 'Attacks from this ship gain +1 strength per 8 Drones (max +4).', loc: { atkPer8: 4 },
  active: A('flank', 'Flank', 180, 'self', 'ship', 'This ship\'s next attack ignores shields.') });

// --- Found on neutral planets ---
S({ id: 'sentinel', name: 'Sentinel', tag: 'Se', color: C.def, role: 'Defence',
  passive: '+3 shield at this node.', loc: { def: 3 },
  active: A('lockdown', 'Lockdown', 150, 'self', 'node', '+6 shield here for 45 s, filled at once.') });
S({ id: 'saboteur', name: 'Saboteur', tag: 'Sb', color: C.intel, role: 'Disruption',
  passive: 'Enemy turrets shoot down 25% fewer of this ship\'s Drones.', loc: { structHalf: 0.25 },
  active: A('sabotage', 'Sabotage', 180, 'enemy', 'any', 'Freeze all construction and Drone production at an identified enemy node for 45 s.') });
S({ id: 'diplomat', name: 'Diplomat', tag: 'Di', color: C.eco, role: 'Neutral expansion',
  passive: 'Attacks on neutral nodes from this ship face 3 less defence.', loc: { vsNeutral: 3 },
  active: A('parley', 'Parley', 150, 'neutral', 'any', 'An identified neutral node loses 5 defence for 60 s.') });
S({ id: 'scientist', name: 'Scientist', tag: 'Sn', color: C.intel, role: 'Research',
  passive: 'Research here is 25% faster.', loc: { research: 0.25 },
  active: A('breakthrough', 'Breakthrough', 180, 'self', 'node', 'Add 30 s of progress to the research running here.') });
S({ id: 'medic', name: 'Medic', tag: 'Me', color: C.def, role: 'Specialist protection',
  passive: 'Once per 180 s, when this location falls its specialists escape home instead of being captured.', loc: { medic: 1 },
  active: A('extraction', 'Extraction', 240, 'self', 'any', 'Every specialist at this location returns to your home station instantly.') });
S({ id: 'pirate', name: 'Pirate', tag: 'Pi', color: C.war, role: 'Interception',
  passive: 'You always see the strength of enemy fleets in detection range.', glob: { sigint: 1 },
  active: A('ambush', 'Ambush', 150, 'self', 'node', 'The next enemy fleet to arrive here within 90 s loses 30% of its Drones first.') });
S({ id: 'inquisitor', name: 'Inquisitor', tag: 'In', color: C.odd, role: 'Prisoners',
  passive: 'Each prisoner held anywhere yields +1.5 Ultanium/min.', glob: { prisonInc: 1.5 },
  active: A('convert', 'Convert', 240, 'self', 'node', 'Turn one prisoner held here to your side over 60 s. Lost if the node falls.') });
S({ id: 'foreman', name: 'Foreman', tag: 'Fo', color: C.war, role: 'Drone production',
  passive: 'Drone batches here are 2 larger.', loc: { batch: 2 },
  active: A('conscript', 'Conscript', 180, 'self', 'node', 'Add 6 Drones here immediately.') });
S({ id: 'cartographer', name: 'Cartographer', tag: 'Ca', color: C.fleet, role: 'Navigation',
  passive: 'The ship carrying the Cartographer can be redirected once per flight.', loc: { redirect: 1 },
  active: A('chart', 'Chart', 180, 'self', 'any', 'Identify every node within 160 units for 40 s.') });
S({ id: 'reclaimer', name: 'Reclaimer', tag: 'Rc', color: C.eco, role: 'Salvage',
  passive: 'Battles won by this ship yield 1 Ultanium per enemy Drone destroyed.', loc: { salvage: 1 },
  active: A('strip', 'Strip Mine', 180, 'self', 'planet', 'Gain 20 Ultanium; mines here go offline for 60 s.') });
S({ id: 'ghost', name: 'Ghost', tag: 'Gh', color: C.intel, role: 'Stealth',
  passive: 'The ship carrying the Ghost is unseen: the enemy sends no reinforcements against it.', loc: { stealth: 1 },
  active: A('smoke', 'Smoke', 300, 'self', 'node', 'Every enemy fleet currently flying to this node turns back.') });
S({ id: 'siegebreaker', name: 'Siegebreaker', tag: 'Sg', color: C.war, role: 'Siege',
  passive: 'This ship slips past turrets: none of its Drones are shot down.', loc: { ignStruct: 1 },
  active: A('breach', 'Breach', 180, 'ident', 'any', 'An identified node loses all shields and cannot recharge for 60 s.') });
S({ id: 'martyr', name: 'Martyr', tag: 'Ma', color: C.def, role: 'Attrition',
  passive: 'If this node falls, half of the attacker\'s survivors die.', loc: { martyr: 1 },
  active: A('laststand', 'Last Stand', 240, 'self', 'node', 'Drones here count double on defence for 30 s, then a quarter of them are lost.') });
S({ id: 'echo', name: 'Echo', tag: 'Ec', color: C.odd, role: 'Amplifier',
  passive: 'Doubles the passive of the first other specialist at this location.', loc: {},
  active: A('reprise', 'Reprise', 240, 'self', 'any', 'Reset the ability cooldowns of every other specialist here.') });
S({ id: 'broker', name: 'Broker', tag: 'Br', color: C.eco, role: 'Deals',
  passive: 'Ships cost 25% less and ransoms pay double.', glob: { shipCost: 0.25, ransom: 1 },
  active: A('bribe', 'Bribe', 200, 'neutral', 'any', 'Buy an identified neutral node of strength 14 or less for 2 Ultanium per point. No battle.') });
S({ id: 'smuggler', name: 'Smuggler', tag: 'Sm', color: C.fleet, role: 'Logistics',
  passive: 'This ship launches with no loading delay, and you may fly to remembered nodes outside detection.', loc: { noLoad: 1 }, glob: { remember: 1 },
  active: A('fence', 'Fence', 240, 'self', 'any', 'Gain 2 Ultanium for every node you own.') });
S({ id: 'castellan', name: 'Castellan', tag: 'Cs', color: C.def, role: 'Fortification',
  passive: 'Shields here +3 and recharge three times as fast.', loc: { shieldMax: 3, natRegen: 2 },
  active: A('rampart', 'Rampart', 120, 'self', 'node', 'Fully recharge the shields here.') });
S({ id: 'recruiter', name: 'Recruiter', tag: 'Rt', color: C.war, role: 'Manpower',
  passive: 'Your global Drone cap is 15 higher.', glob: { droneCap: 15 },
  active: A('levy', 'Levy', 240, 'self', 'any', 'Every station you own gains 3 Drones.') });
S({ id: 'oracle', name: 'Oracle', tag: 'Or', color: C.intel, role: 'Foresight',
  passive: 'Coalition offensives are announced with their target.', glob: { warn: 1 },
  active: A('foresight', 'Foresight', 300, 'self', 'any', 'Set Coalition mobilization back by 10% of a stage.') });
S({ id: 'vanguard', name: 'Vanguard', tag: 'Va', color: C.war, role: 'Assault',
  passive: 'Attacks won by this ship keep 20% more survivors.', loc: { surv: 0.2 },
  active: A('charge', 'Charge', 150, 'self', 'ship', 'This ship\'s next attack gains +5 strength.') });
S({ id: 'navigator', name: 'Navigator', tag: 'Na', color: C.fleet, role: 'Launch control',
  passive: 'Ships launched from this node fly 20% faster.', loc: { launchSpeed: 0.2 },
  active: A('slingshot', 'Slingshot', 240, 'self', 'node', 'The next ship launched from here within 30 s flies at 2.5x speed for 40 s.') });
S({ id: 'prospector', name: 'Prospector', tag: 'Pr', color: C.eco, role: 'Extraction',
  passive: 'This planet has +1 mine slot and +3 Ultanium/min capacity.', loc: { mineSlots: 1, cap: 3 },
  active: A('vein', 'Strike Vein', 240, 'self', 'planet', 'Gain 25 Ultanium.') });

S({ id: 'architect', name: 'Architect', tag: 'Ar', color: C.eco, role: 'Corridors',
  passive: 'Corridors started here build 40% faster.', loc: { corridor: 0.4 },
  active: A('rapidlink', 'Rapid Link', 240, 'own', 'node', 'Open a temporary corridor from here to another of your nodes for 60 s.') });

// --- Signature specialists: reward for capturing a faction's Warlord ---
S({ id: 'ironmonger', name: 'Ironmonger', tag: 'Im', color: '#c98a3c', role: 'Ferrum signature', sig: 'ferrum',
  passive: 'Turrets at this node destroy 50% more Drones.', loc: { structDef: 0.5 },
  active: A('fortify', 'Fortify', 240, 'self', 'node', 'Build a free Shield Generator here instantly.') });
S({ id: 'berserker', name: 'Berserker', tag: 'Bs', color: '#e0524d', role: 'Crimson signature', sig: 'crimson',
  passive: 'Attacks from this ship are 20% stronger.', loc: { atkPct: 0.2 },
  active: A('bloodrush', 'Bloodrush', 200, 'self', 'ship', 'This ship\'s next attack is +40% stronger but keeps 30% fewer survivors.') });
S({ id: 'lens', name: 'Lens', tag: 'Ln', color: '#e8d36a', role: 'Lumen signature', sig: 'lumen',
  passive: 'Lances here destroy 15% of any attacking fleet before battle.', loc: { preKill: 0.15 },
  active: A('focus', 'Focus', 200, 'self', 'node', 'Lances here destroy a further 30% of attackers for 45 s.') });
S({ id: 'phantom', name: 'Phantom', tag: 'Ph', color: '#9b6bd6', role: 'Veil signature', sig: 'veil',
  passive: 'All of your fleets fly unseen.', glob: { stealth: 1 },
  active: A('raidA', 'Knife in the Dark', 240, 'ident', 'any', 'An identified node loses 25% of its Drones.') });
S({ id: 'wayfinder', name: 'Wayfinder', tag: 'Wf', color: '#5aa9e6', role: 'Drift signature', sig: 'drift',
  passive: 'All of your ships fly 15% faster.', glob: { speed: 0.15 },
  active: A('warp', 'Fold', 240, 'self', 'ship', 'This ship instantly covers half of its remaining distance.') });

// Enemy leaders (never recruitable)
S({ id: 'warlord', name: 'Warlord', tag: 'W', color: '#ffffff', role: 'Faction leader', passive: '+5 shield at the capital.', loc: { def: 5 } });
S({ id: 'archon', name: 'Archon', tag: 'A', color: '#ff5fa2', role: 'Coalition Commander', passive: '+8 shield at the Citadel.', loc: { def: 8 } });

export const PLANET_POOL = Object.values(SPECS).filter(s => !s.sig && s.id !== 'warlord' && s.id !== 'archon').map(s => s.id);
export const STARTERS = Object.values(SPECS).filter(s => s.starter).map(s => s.id);

// ---------------------------------------------------------------------------------------------
// Commander archetypes and level-up perks
// ---------------------------------------------------------------------------------------------
export interface ArchDef { id: string; name: string; blurb: string; passive: string; loc: Mods; a: AbilityDef; b: AbilityDef }
export const ARCHS: Record<string, ArchDef> = {
  marshal: { id: 'marshal', name: 'Marshal', blurb: 'Leads from the front.', passive: 'Attacks from the Commander\'s ship are 15% stronger.', loc: { atkPct: 0.15 },
    a: A('decisive', 'Decisive Strike', 180, 'self', 'ship', 'This ship\'s next attack is +30% stronger.'),
    b: A('rally', 'Rally', 240, 'self', 'any', 'Add 8 Drones at the Commander\'s location.') },
  pathfinder: { id: 'pathfinder', name: 'Pathfinder', blurb: 'Controls tempo and information.', passive: 'Commander\'s ship is 20% faster and can be redirected; their node sees 25% further.', loc: { speed: 0.2, redirect: 1, fov: 0.25 },
    a: A('slipstream', 'Slipstream', 150, 'self', 'ship', 'This ship flies at double speed for 40 s.'),
    b: A('sweep', 'Survey Sweep', 200, 'self', 'any', 'Identify every node within 200 units for 45 s.') },
  warden: { id: 'warden', name: 'Warden', blurb: 'Keeps forces alive.', passive: '+4 shield and double shield recharge at the Commander\'s node.', loc: { def: 4, natRegen: 1 },
    a: A('aegis', 'Aegis', 180, 'self', 'node', '+10 shield here for 45 s, filled at once.'),
    b: A('recall', 'Recall', 300, 'self', 'any', 'The Commander and every specialist with them return home instantly.') },
  industrialist: { id: 'industrialist', name: 'Industrialist', blurb: 'Builds a stronger empire.', passive: 'Mines +20% and construction +30% at the Commander\'s node.', loc: { mine: 0.2, build: 0.3 },
    a: A('crash', 'Crash Program', 200, 'self', 'node', 'Finish the current build here instantly.'),
    b: A('windfall', 'Windfall', 240, 'self', 'any', 'Gain 3 Ultanium for every planet you own.') },
  corsair: { id: 'corsair', name: 'Corsair', blurb: 'Lives off the enemy.', passive: 'Commander\'s ship salvages 1 Ultanium per enemy Drone destroyed and keeps 15% more survivors.', loc: { salvage: 1, surv: 0.15 },
    a: A('raid', 'Raid', 200, 'ident', 'any', 'An identified node loses 30% of its Drones.'),
    b: A('pressgang', 'Press-gang', 240, 'self', 'any', 'Gain 20% more Drones at the Commander\'s location (max 10).') },
  savant: { id: 'savant', name: 'Savant', blurb: 'Wins with ideas.', passive: 'Research +40% at the Commander\'s node; all ability cooldowns 15% shorter.', loc: { research: 0.4 },
    a: A('insight', 'Insight', 240, 'self', 'any', 'Reset the cooldowns of every other specialist here.'),
    b: A('eureka', 'Eureka', 200, 'self', 'node', 'Add 60 s of progress to the research running here.') },
};
export const ARCH_GLOB: Record<string, Mods> = { savant: { cd: 0.15 } };

export interface PerkDef { id: string; name: string; desc: string; loc?: Mods; glob?: Mods }
export const PERKS: PerkDef[] = [
  { id: 'ironwill', name: 'Iron Will', desc: 'Rescue window +45 s.', glob: { rescue: 45 } },
  { id: 'drill', name: 'Drillmaster', desc: 'Drone batches at the Commander\'s station are 2 larger.', loc: { batch: 2 } },
  { id: 'march', name: 'Forced March', desc: 'Commander\'s ship +20% speed.', loc: { speed: 0.2 } },
  { id: 'logi', name: 'Logistician', desc: 'Global Drone cap +20.', glob: { droneCap: 20 } },
  { id: 'tithe', name: 'Tithe', desc: '+3 Ultanium/min.', glob: { incomeFlat: 3 } },
  { id: 'hard', name: 'Hardliner', desc: '+4 shield at the Commander\'s node.', loc: { def: 4 } },
  { id: 'shock', name: 'Shock Tactics', desc: 'Commander\'s attacks +4 strength.', loc: { atk: 4 } },
  { id: 'mentor', name: 'Mentor', desc: 'All ability cooldowns 15% shorter.', glob: { cd: 0.15 } },
  { id: 'scholar', name: 'Scholar', desc: 'All research 20% faster.', glob: { research: 0.2 } },
  { id: 'survivor', name: 'Survivor', desc: 'Commander\'s attacks keep 25% more survivors.', loc: { surv: 0.25 } },
  { id: 'farsight', name: 'Far Sight', desc: 'All your nodes see 15% further.', glob: { fov: 0.15 } },
  { id: 'requisition', name: 'Requisition', desc: 'Ships cost 30% less.', glob: { shipCost: 0.3 } },
  { id: 'entourage', name: 'Entourage', desc: 'Nodes and ships hold one more specialist.', glob: { slots: 1 } },
  { id: 'sapper', name: 'Sapper', desc: 'Commander\'s attacks ignore shields.', loc: { ignNat: 1 } },
  { id: 'magnate', name: 'Magnate', desc: 'All mines +10%.', glob: { mine: 0.1 } },
];

// ---------------------------------------------------------------------------------------------
// Relics
// ---------------------------------------------------------------------------------------------
export interface RelicDef { id: string; name: string; rarity: 'common' | 'uncommon' | 'rare'; desc: string; mods: Mods }
export const RELICS: Record<string, RelicDef> = {};
const R = (id: string, name: string, rarity: RelicDef['rarity'], desc: string, mods: Mods) => (RELICS[id] = { id, name, rarity, desc, mods });
R('extractor', 'Deep-Core Extractor', 'common', 'All mines +12%.', { mine: 0.12 });
R('foundry', 'Drone Foundry Matrix', 'common', 'Drone batches are 1 larger.', { batch: 1 });
R('surveyor', 'Quantum Surveyor', 'common', 'All nodes see 20% further.', { fov: 0.2 });
R('propulsion', 'Emergency Propulsion Core', 'common', 'All ships +12% speed.', { speed: 0.12 });
R('salvage', 'Salvage Protocol', 'common', 'Winning attacks yield 0.5 Ultanium per enemy Drone destroyed.', { salvage: 0.5 });
R('scaffold', 'Modular Scaffolds', 'common', 'Construction 25% faster.', { build: 0.25 });
R('reserve', 'Reserve Barracks', 'common', 'Global Drone cap +20.', { droneCap: 20 });
R('bulkhead', 'Hardened Bulkheads', 'common', '+1 shield at every node.', { def: 1 });
R('archive', 'Field Archive', 'common', 'Research 25% faster.', { research: 0.25 });
R('ledger', 'Ration Ledger', 'common', '+3 Ultanium/min.', { incomeFlat: 3 });
R('clamps', 'Quick-Load Clamps', 'common', 'Ships launch with no loading delay.', { noLoad: 1 });
R('mirror', 'Signal Mirror', 'common', 'Coalition offensives are announced with their target.', { warn: 1 });
R('adaptive', 'Adaptive Shield Network', 'uncommon', 'Nodes you capture gain +6 shield for 60 s.', { capShield: 6 });
R('matrix', 'Specialist Command Matrix', 'uncommon', 'Ability cooldowns 20% shorter.', { cd: 0.2 });
R('lantern', 'Ghost Lanterns', 'uncommon', 'Unmanned scouts survive and fly home.', { scoutReturn: 1 });
R('warchest', 'War Chest', 'uncommon', 'Gain 6 Ultanium whenever you capture a node.', { capUlt: 6 });
R('phalanx', 'Phalanx Doctrine', 'uncommon', 'All attacks 8% stronger.', { atkPct: 0.08 });
R('titheengine', 'Tithe Engine', 'uncommon', 'Ransoms pay double; each prisoner yields +1 Ultanium/min.', { ransom: 1, prisonInc: 1 });
R('yards', 'Overclocked Yards', 'uncommon', 'Ships cost 30% less and build 30% faster.', { shipCost: 0.3, shipSpeed: 0.3 });
R('lattice', 'Regrowth Lattice', 'uncommon', 'Shields +2 everywhere and recharge twice as fast.', { natRegen: 1, shieldMax: 2 });
R('charts', 'Cartel Charts', 'uncommon', 'You may fly to remembered nodes outside detection range.', { remember: 1 });
R('cadre', 'Veteran Cadre', 'uncommon', 'Winning attacks keep 15% more survivors.', { surv: 0.15 });
R('budget', 'Black Budget', 'uncommon', 'Research costs 30% less.', { techCost: 0.3 });
R('charter', 'Bulwark Charter', 'uncommon', 'Your turrets destroy 25% more Drones.', { structDef: 0.25 });
R('sigil', 'Tiebreaker Sigil', 'rare', 'You win tied battles when attacking.', { ties: 1 });
R('phoenix', 'Phoenix Clause', 'rare', 'Once every 180 s, a node capture refunds the Drones it cost.', { refund: 180 });
R('chair', 'Fourth Chair', 'rare', 'Nodes and ships hold one more specialist.', { slots: 1 });
R('crown', 'Hollow Crown', 'rare', 'Commander rescue window +90 s.', { rescue: 90 });
R('stillness', 'Stillness Engine', 'rare', 'Coalition mobilization is 25% slower.', { mobSlow: 0.25 });
R('twin', 'Twin Minds', 'rare', 'The Commander\'s passive effects count twice.', { cmdDouble: 1 });
R('lance', 'Null Lance', 'rare', 'Your attacks ignore shields.', { ignNat: 1 });
R('hold', 'Bottomless Hold', 'rare', 'Every planet has +1 mine slot and +3 capacity.', { mineSlots: 1, cap: 3 });
R('edict', 'Conscription Edict', 'rare', 'Every node you own gains 1 Drone each minute.', { levy: 60 });
R('seal', 'Oathbreaker\'s Seal', 'rare', 'You may recruit prisoners for 40 Ultanium without an Inquisitor.', { recruit: 1 });
R('night', 'Long Night', 'rare', 'All of your fleets fly unseen.', { stealth: 1 });
R('choir', 'Siege Choir', 'rare', 'Enemy turrets shoot down half as many of your Drones.', { structHalf: 0.5 });

// ---------------------------------------------------------------------------------------------
// Research: five branches, three tiers each. Any technology with its prerequisite met is available.
// ---------------------------------------------------------------------------------------------
// Five branches. Tier 3 in every branch is a doctrine pair: researching one locks the other for the run.
// Each branch ends in a repeatable technology whose cost rises with every level, as a late-game sink.
export interface TechDef { id: string; name: string; branch: string; tier: number; pre?: string; desc: string; mods: Mods; excl?: string; rep?: number }
export const TECH_COST = [0, 40, 80, 140, 240], TECH_TIME = [0, 60, 90, 120, 180], TECH_OPS = [0, 2, 3, 4, 5];
export const REP = { cost: 60, growth: 1.5, time: 75, ops: 3 };
export const TECHS: Record<string, TechDef> = {};
export const BRANCHES = ['Industry', 'Military', 'Navigation', 'Intelligence', 'Command'];
const T = (id: string, name: string, branch: string, tier: number, pre: string | undefined, desc: string, mods: Mods, extra: Partial<TechDef> = {}) =>
  (TECHS[id] = { id, name, branch, tier, pre, desc, mods, ...extra });
T('extraction', 'Advanced Extraction', 'Industry', 1, undefined, 'Mines +15%.', { mine: 0.15 });
T('automation', 'Industrial Automation', 'Industry', 2, 'extraction', 'Mines no longer need Drones to operate.', { noOps: 1 });
T('deepcore', 'Deep-Core Drilling', 'Industry', 3, 'automation', 'Planet capacity +25% and +1 mine slot.', { capPct: 0.25, mineSlots: 1 }, { excl: 'supply' });
T('supply', 'Supply Network', 'Industry', 3, 'automation', 'Drone cap +40. Mustering costs 1 less per Drone.', { droneCap: 40, musterCost: 1 }, { excl: 'deepcore' });
T('foundries', 'Orbital Foundries', 'Industry', 4, 'automation', 'Ships cost 40% less and build 40% faster; Habitats give +10 more cap.', { shipCost: 0.4, shipSpeed: 0.4, habitat: 10 });
T('refinery', 'Refinery Tuning', 'Industry', 5, 'extraction', 'Mines +5% per level.', { mine: 0.05 }, { rep: 10 });
T('coord', 'Combat Coordination', 'Military', 1, undefined, 'Attacks 10% stronger.', { atkPct: 0.1 });
T('fort', 'Shield Harmonics', 'Military', 2, 'coord', 'Shields recharge twice as fast.', { natRegen: 1 });
T('siege', 'Siege Doctrine', 'Military', 3, 'fort', 'Enemy turrets shoot down half as many of your Drones; your attacks ignore 5 shield.', { structHalf: 0.5, shieldPierce: 5 }, { excl: 'depth' });
T('depth', 'Defence in Depth', 'Military', 3, 'fort', 'Your turrets destroy 50% more; Drone batches +2.', { structDef: 0.5, batch: 2 }, { excl: 'siege' });
T('overwhelm', 'Overwhelming Force', 'Military', 4, 'fort', 'Attacks 10% stronger and winners keep 25% more survivors.', { atkPct: 0.1, surv: 0.25 });
T('conditioning', 'Drone Conditioning', 'Military', 5, 'coord', 'Attacks +3% per level.', { atkPct: 0.03 }, { rep: 10 });
T('engines', 'Improved Engines', 'Navigation', 1, undefined, 'Ships +15% speed.', { speed: 0.15 });
T('sensors', 'Long-Range Sensors', 'Navigation', 2, 'engines', 'All nodes and ships see 20% further.', { fov: 0.2 });
T('reroute', 'Slipstream Rerouting', 'Navigation', 3, 'sensors', 'Any ship can be redirected once per flight.', { redirect: 1 }, { excl: 'widecorr' });
T('widecorr', 'Wide Corridors', 'Navigation', 3, 'sensors', 'Each node holds one more corridor; corridors build 50% faster and carry convoys 50% faster.', { corridorMax: 1, corridor: 0.5, laneSpeed: 0.5 }, { excl: 'reroute' });
T('fold', 'Fold Drive', 'Navigation', 4, 'sensors', 'Ships +25% speed and launch without loading.', { speed: 0.25, noLoad: 1 });
T('thrusters', 'Thruster Tuning', 'Navigation', 5, 'engines', 'Ships +4% speed per level.', { speed: 0.04 }, { rep: 10 });
T('sigint', 'Signal Analysis', 'Intelligence', 1, undefined, 'See the strength of every detected enemy fleet.', { sigint: 1 });
T('recon', 'Recon Optics', 'Intelligence', 2, 'sigint', 'Ships see 50% further; unmanned scouts fly home.', { scoutReturn: 1, shipFov: 0.5 });
T('deepcover', 'Deep Cover', 'Intelligence', 3, 'recon', 'Offensives are announced with their target; mobilization 15% slower.', { warn: 1, mobSlow: 0.15 }, { excl: 'battery' });
T('battery', 'Counter-Battery', 'Intelligence', 3, 'recon', 'Your turrets destroy 50% more and cannot be slipped past by unseen fleets.', { structDef: 0.5, seeStealth: 1 }, { excl: 'deepcover' });
T('blacksky', 'Black Sky', 'Intelligence', 4, 'recon', 'All your fleets fly unseen and slip past turrets.', { stealth: 1 });
T('dampening', 'Signal Dampening', 'Intelligence', 5, 'sigint', 'Mobilization 4% slower per level.', { mobSlow: 0.04 }, { rep: 8 });
T('training', 'Specialist Training', 'Command', 1, undefined, 'Ability cooldowns 20% shorter.', { cd: 0.2 });
T('protocols', 'Command Protocols', 'Command', 2, 'training', 'Commander gains 50% more experience; rescue window +30 s.', { xp: 0.5, rescue: 30 });
T('integration', 'Command Integration', 'Command', 3, 'protocols', 'Nodes and ships hold one more specialist.', { slots: 1 }, { excl: 'cadre' });
T('cadre', 'Talent Scouts', 'Command', 3, 'protocols', 'Recruitment offers one more specialist to choose from, and Drone cap +20.', { offer: 1, droneCap: 20 }, { excl: 'integration' });
T('highcommand', 'High Command', 'Command', 4, 'protocols', 'Ability cooldowns 25% shorter; rescue window +60 s.', { cd: 0.25, rescue: 60 });
T('officers', 'Officer School', 'Command', 5, 'training', 'Ability cooldowns 3% shorter per level.', { cd: 0.03 }, { rep: 10 });

// ---------------------------------------------------------------------------------------------
// Enemy factions (three per run) and Archons (one per run)
// ---------------------------------------------------------------------------------------------
export interface FactionDef {
  id: string; name: string; color: string; desc: string; tell: string; mods: Mods; sig: string; warlord: string;
  ai: { aggr: number; expand: number; react: number; target: 'weak' | 'near' | 'spec'; build: Record<string, number> };
  techs: string[]; specs: string[];
}
export const FACTIONS: Record<string, FactionDef> = {
  ferrum: { id: 'ferrum', name: 'Ferrum Directorate', color: '#c98a3c', warlord: 'Overseer Kharn', sig: 'ironmonger',
    desc: 'Fortress industry. Slow to attack, expensive to dislodge.', tell: '+2 shield everywhere; builds turrets and shields relentlessly.',
    mods: { def: 2, build: 0.3 }, ai: { aggr: 0.6, expand: 150, react: 0.9, target: 'weak', build: { turret: 4, shield: 5, sshield: 4, mine: 3, gen: 3, barracks: 1 } },
    techs: ['fort', 'extraction', 'automation', 'siege'], specs: ['sentinel', 'castellan', 'engineer'] },
  crimson: { id: 'crimson', name: 'Crimson Warhost', color: '#d2604a', warlord: 'Warlord Ashka', sig: 'berserker',
    desc: 'Wave aggression. Thin defences, constant pressure.', tell: 'Drones produced 35% faster; attacks the nearest target often.',
    mods: { prod: 0.35, atkPct: 0.1 }, ai: { aggr: 1.4, expand: 110, react: 0.4, target: 'near', build: { barracks: 6, shipyard: 3, turret: 1, mine: 2, gen: 2, dock: 1 } },
    techs: ['coord', 'engines', 'siege', 'training'], specs: ['foreman', 'vanguard', 'tactician'] },
  lumen: { id: 'lumen', name: 'Lumen Technocracy', color: '#e3c565', warlord: 'Prime Calculator Ione', sig: 'lens',
    desc: 'Lance batteries thin every attacking fleet before it lands.', tell: 'Destroys 15% of attackers before battle; gains two technologies per stage.',
    mods: { preKill: 0.15, shieldMax: 3 }, ai: { aggr: 0.8, expand: 170, react: 0.7, target: 'weak', build: { shield: 4, sensor: 2, turret: 2, mine: 3, gen: 3, sshield: 2 } },
    techs: ['sigint', 'fort', 'coord', 'engines', 'siege', 'extraction', 'training', 'sensors'], specs: ['scientist', 'sentinel', 'scout'] },
  veil: { id: 'veil', name: 'Veil Syndicate', color: '#9a7cc4', warlord: 'The Whisper', sig: 'phantom',
    desc: 'Unseen fleets that hunt your specialists.', tell: 'Fleets are invisible until inside full-intelligence range; targets nodes holding specialists.',
    mods: { stealth: 1, speed: 0.1 }, ai: { aggr: 1.0, expand: 160, react: 0.6, target: 'spec', build: { sensor: 3, turret: 2, barracks: 3, mine: 2, gen: 2, shield: 1 } },
    techs: ['engines', 'coord', 'sigint', 'training'], specs: ['saboteur', 'ghost', 'pirate'] },
  drift: { id: 'drift', name: 'Drift Clans', color: '#6ea6d6', warlord: 'Clanmother Sura', sig: 'wayfinder',
    desc: 'Fast nomads who swallow neutral space.', tell: 'Ships 40% faster; expands into neutral territory twice as often.',
    mods: { speed: 0.4 }, ai: { aggr: 1.1, expand: 70, react: 0.8, target: 'near', build: { dock: 2, shipyard: 4, barracks: 3, mine: 3, gen: 3, turret: 1 } },
    techs: ['engines', 'sensors', 'coord', 'extraction'], specs: ['admiral', 'navigator', 'cartographer'] },
};

export interface ArchonDef { id: string; name: string; title: string; desc: string; mods: Mods; pmods: Mods }
// mods apply to the Archon's side; pmods are imposed on the player for the whole run.
export const ARCHONS: Record<string, ArchonDef> = {
  anvil: { id: 'anvil', name: 'Archon Vael', title: 'the Anvil', desc: 'Citadel Aegis layers are 50% stronger and its Drones are produced 40% faster.', mods: { aegisPct: 0.5, prod: 0.4 }, pmods: {} },
  tide: { id: 'tide', name: 'Archon Seraph', title: 'the Tide', desc: 'Every Coalition offensive commits 30% more Drones.', mods: { offBig: 0.3 }, pmods: {} },
  silence: { id: 'silence', name: 'Archon Null', title: 'the Silence', desc: 'Your specialist cooldowns are 30% longer. Coalition fleets fly unseen.', mods: { stealth: 1 }, pmods: { cd: -0.3 } },
};

// ---------------------------------------------------------------------------------------------
// Events. Choices may have a cost and may need a specialist present at the node.
// Effects: ['ult',n] ['drones',n] ['relic',rarity] ['tech'] ['ship'] ['spec'] ['ambush',n]
//          ['hold',secs,needDrones,[fx..]] ['reveal',radius] ['mobil',delta] ['build',id]
//          ['xp',n] ['buff',key,value,secs]
// ---------------------------------------------------------------------------------------------
export interface EventChoice { label: string; desc: string; ult?: number; drones?: number; req?: string; fx: Fx[] }
export interface EventDef { id: string; name: string; text: string; on: 'planet' | 'station' | 'any'; choices: EventChoice[] }
export const EVENTS: Record<string, EventDef> = {};
const E = (id: string, name: string, on: EventDef['on'], text: string, choices: EventChoice[]) => (EVENTS[id] = { id, name, on, text, choices });

E('lab', 'Abandoned Research Facility', 'station', 'Sealed laboratories, still powered. The archive doors are marked with a hazard glyph nobody recognises.', [
  { label: 'Restore the facility', desc: 'Gain a free technology.', ult: 25, fx: [['tech']] },
  { label: 'Salvage it', desc: 'Gain 35 Ultanium.', fx: [['ult', 35]] },
  { label: 'Open the restricted archive', desc: 'Choose an uncommon relic. Automata will attack this node with 14 Drones in 40 s.', fx: [['relic', 'uncommon'], ['ambush', 14]] },
  { label: 'Let the Scientist decode it', desc: 'Free technology and a common relic.', req: 'scientist', fx: [['tech'], ['relic', 'common']] },
]);
E('fortress', 'Ancient Fortress', 'any', 'The guns are silent but the targeting grid still tracks your ship.', [
  { label: 'Reactivate the defences', desc: 'Hold this node for 90 s with 10 Drones to gain a Shield Generator here and an uncommon relic.', fx: [['hold', 90, 10, [['build', 'def'], ['relic', 'uncommon']]]] },
  { label: 'Strip the armoury', desc: 'Gain 12 Drones here.', fx: [['drones', 12]] },
  { label: 'Engineer bypass', desc: 'Gain the structure and a common relic at once.', req: 'engineer', fx: [['build', 'def'], ['relic', 'common']] },
]);
E('stranded', 'Stranded Specialists', 'any', 'A crippled lifeboat hails you. Its passengers are willing to work for passage.', [
  { label: 'Take one aboard', desc: 'Choose one of three specialists.', fx: [['spec']] },
  { label: 'Sell them the fuel', desc: 'Gain 30 Ultanium.', fx: [['ult', 30]] },
]);
E('energy', 'Unstable Energy Source', 'planet', 'The crust hums. Readings climb while you watch.', [
  { label: 'Stabilise it', desc: 'Hold for 75 s with 8 Drones to choose a rare relic.', ult: 20, fx: [['hold', 75, 8, [['relic', 'rare']]]] },
  { label: 'Tap it now', desc: 'Gain 50 Ultanium; lose 6 Drones here.', drones: 6, fx: [['ult', 50]] },
  { label: 'Walk away', desc: 'Nothing happens.', fx: [] },
]);
E('derelict', 'Derelict Fleet', 'station', 'Dozens of hulls drift in formation. Some of them are warm.', [
  { label: 'Repair a hull', desc: 'Gain a ship here.', ult: 15, fx: [['ship']] },
  { label: 'Wake the crews', desc: 'Gain 16 Drones here. Automata attack with 12 Drones in 40 s.', fx: [['drones', 16], ['ambush', 12]] },
  { label: 'Reclaimer strips everything', desc: 'Gain a ship and 30 Ultanium.', req: 'reclaimer', fx: [['ship'], ['ult', 30]] },
]);
E('settlement', 'Independent Settlement', 'planet', 'Farmers, mostly. They have seen the Coalition\'s recruiters and they do not like them.', [
  { label: 'Trade', desc: 'Gain 25 Ultanium.', fx: [['ult', 25]] },
  { label: 'Arm them', desc: 'Gain 10 Drones here.', ult: 10, fx: [['drones', 10]] },
  { label: 'Sign a charter', desc: 'Choose a common relic.', ult: 20, fx: [['relic', 'common']] },
  { label: 'Diplomat brokers an alliance', desc: 'Gain 10 Drones and a common relic.', req: 'diplomat', fx: [['drones', 10], ['relic', 'common']] },
]);
E('expedition', 'Lost Research Expedition', 'any', 'Their last transmission repeats every forty seconds. It ends mid-word.', [
  { label: 'Rescue the team', desc: 'Choose one of three specialists.', drones: 5, fx: [['spec']] },
  { label: 'Recover the data', desc: 'Commander gains 8 experience.', fx: [['xp', 8]] },
  { label: 'Follow the signal', desc: 'Choose a rare relic. Automata attack with 20 Drones in 40 s.', fx: [['relic', 'rare'], ['ambush', 20]] },
]);
E('platform', 'Automated Weapons Platform', 'station', 'It has been guarding nothing for three hundred years, and it is very good at it.', [
  { label: 'Capture it', desc: 'Gain a Shield Generator here.', fx: [['build', 'def']] },
  { label: 'Reprogram it', desc: '+8 shield here for 5 minutes and a common relic.', ult: 15, fx: [['buff', 'def', 8, 300], ['relic', 'common']] },
  { label: 'Scrap it', desc: 'Gain 28 Ultanium.', fx: [['ult', 28]] },
]);
E('beacon', 'Ancient Navigation Beacon', 'any', 'One pulse per minute, aimed at a point deep inside Coalition space.', [
  { label: 'Decode it', desc: 'Reveal every node within 260 units.', fx: [['reveal', 260]] },
  { label: 'Overload it', desc: 'Set Coalition mobilization back by a third of a stage.', ult: 20, fx: [['mobil', -0.33]] },
  { label: 'Cartographer triangulates', desc: 'Reveal the whole map.', req: 'cartographer', fx: [['reveal', 2000]] },
]);
E('forge', 'The Ancient Forge', 'planet', 'A foundry the size of a continent, cold for an age. The ignition sequence is still on the console.', [
  { label: 'Restore the Forge', desc: 'Hold for 120 s with 14 Drones to choose a rare relic and gain 15 Drones.', ult: 30, fx: [['hold', 120, 14, [['relic', 'rare'], ['drones', 15]]]] },
  { label: 'Melt it down', desc: 'Gain 45 Ultanium.', fx: [['ult', 45]] },
]);
E('vault', 'Sealed Vault', 'any', 'Three locks. Your crew can force one of them.', [
  { label: 'The armoury', desc: 'Choose an uncommon relic.', drones: 6, fx: [['relic', 'uncommon']] },
  { label: 'The treasury', desc: 'Gain 40 Ultanium.', fx: [['ult', 40]] },
  { label: 'The war room', desc: 'Commander gains 10 experience.', fx: [['xp', 10]] },
]);
E('deserters', 'Coalition Deserters', 'any', 'A squadron in Coalition colours powers down its weapons and asks for terms.', [
  { label: 'Enlist them', desc: 'Gain 14 Drones here. Mobilization advances 15% of a stage.', fx: [['drones', 14], ['mobil', 0.15]] },
  { label: 'Debrief them', desc: 'Reveal every node within 200 units and set mobilization back 10%.', fx: [['reveal', 200], ['mobil', -0.1]] },
  { label: 'Inquisitor takes their officers', desc: 'Choose one of three specialists.', req: 'inquisitor', fx: [['spec']] },
]);
