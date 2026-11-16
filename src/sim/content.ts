import type { Mods, Fx } from './types';

// ---------------------------------------------------------------------------------------------
// Officers. Each has a Power (added to attack aboard a fleet, to defence where stationed), a
// Command (the most Drones they can lead into an attack), and one effect that works only on their
// own node or fleet. Two forms: base, and upgraded once they earn CFG.upXp experience in battle.
// Effects that fire on their own and recharge are "charges". Side-wide effects come only from
// research, relics and the Commander's archetype.
//
// Modifier keys (whole numbers unless noted):
//   fleet:  atk  per4 (max from +1 per 4 Drones)  crew2 (crew Power multiplier - 1)  ambush (+ if unseen)
//           breach / shake / cutoff (seconds of that effect on the target on arrival)  ground (seconds, win)
//           mom / momT (Momentum value and seconds, on a win)  survey (Mine levels for captured planets)
//           surv  salvage  vsNeutral  speed (fraction)  stealth  hideT (seconds unseen after landing)
//           slotFree  noIntercept  raiseWin (share of the defenders' dead that join on a win)
//   node:   def  shield  regen  fort / fortT (Fortified on a hold)  picket / picketR  flak (1 per N)
//           lance  martyr  train (Drones per minute)  nodeInc  free  build  upgCost  research  fov
//           readFleets  oracle (sight multiplier for offensive targets)  mask  recruitFree  prisonInc
//           intercept (range)  noBreach  raise (garrison regained when holding)
// ---------------------------------------------------------------------------------------------

export type Group = 'siege' | 'swarm' | 'blitz' | 'raid' | 'veteran' | 'bulwark' | 'engine' | 'shadow' | 'glue' | 'warlord' | 'coalition';
export const GROUPS: Record<string, { name: string; color: string }> = {
  siege: { name: 'Siege', color: '#dd7a63' }, swarm: { name: 'Swarm', color: '#e8a85a' }, blitz: { name: 'Blitz', color: '#7fb2dc' },
  raid: { name: 'Raiders', color: '#6fc3c0' }, veteran: { name: 'Veterans', color: '#b7c4a4' }, bulwark: { name: 'Bulwark', color: '#8fc79a' },
  engine: { name: 'Engine', color: '#e3c565' }, shadow: { name: 'Shadow', color: '#b39ad6' }, glue: { name: 'Glue', color: '#e9a9c9' },
  warlord: { name: 'Warlord', color: '#ffffff' }, coalition: { name: 'Coalition', color: '#aab2c0' },
};
export const RARITY = ['Common', 'Uncommon', 'Rare', 'Warlord'];

export interface SpecDef {
  id: string; name: string; tag: string; group: Group; rarity: number; pow: number; cmd: number;
  starter?: boolean; hidden?: boolean; faction?: string; color: string; role: string;
  text: string; long: string; loc?: Mods;
  charge?: { on: 'attack' | 'defend' | 'fall' | 'fail'; cd: number; mods: Mods };
  up: { text: string; pow?: number; cmd?: number; loc?: Mods; cd?: number };
}

export const SPECS: Record<string, SpecDef> = {};
const S = (d: Omit<SpecDef, 'color'> & { color?: string }) => (SPECS[d.id] = { ...d, color: d.color || GROUPS[d.group].color } as SpecDef);

// --- Siege: a small fleet sets the node up, the main fleet lands on it
S({ id: 'siegebreaker', name: 'Siegebreaker', tag: 'Sb', group: 'siege', rarity: 1, pow: 2, cmd: 8, starter: true, role: 'Breach',
  text: 'Arrival: Breached 20 s', long: 'When their fleet arrives, the target is Breached for 20 s: its shield drops to 0 and cannot recharge.', loc: { breach: 20 },
  up: { text: 'Breached 40 s', loc: { breach: 20 } } });
S({ id: 'saboteur', name: 'Saboteur', tag: 'Sa', group: 'siege', rarity: 1, pow: 2, cmd: 8, role: 'Shake',
  text: 'Arrival: Shaken 30 s', long: 'When their fleet arrives, the target is Shaken for 30 s: its officers add no Power and their effects stop.', loc: { shake: 30 },
  up: { text: 'Shaken 60 s', loc: { shake: 30 } } });
S({ id: 'interdictor', name: 'Interdictor', tag: 'In', group: 'siege', rarity: 1, pow: 2, cmd: 8, role: 'Cut off',
  text: 'Arrival: Cut off 45 s', long: 'When their fleet arrives, the target is Cut off for 45 s: no reinforcements can land there.', loc: { cutoff: 45 },
  up: { text: 'Cut off 90 s', loc: { cutoff: 45 } } });
S({ id: 'vanguard', name: 'Vanguard', tag: 'Va', group: 'siege', rarity: 2, pow: 3, cmd: 10, role: 'Leader',
  text: 'Crew Power counts double', long: 'The Power of every officer in their fleet, their own included, counts twice in the attack.', loc: { crew2: 1 },
  up: { text: 'Counts triple', loc: { crew2: 1 } } });

// --- Swarm: big fleets
S({ id: 'tactician', name: 'Tactician', tag: 'Ta', group: 'swarm', rarity: 1, pow: 3, cmd: 12, starter: true, role: 'Massed attack',
  text: '+1 attack per 4 Drones, max 4', long: 'Their fleet gains +1 attack for every 4 Drones in it, up to +4.', loc: { per4: 4 },
  up: { text: 'Max 8', loc: { per4: 4 } } });
S({ id: 'sergeant', name: 'Drill Sergeant', tag: 'Dr', group: 'swarm', rarity: 1, pow: 1, cmd: 10, role: 'Training',
  text: '+1 Drone here every 30 s', long: 'Trains a Drone at their node every 30 s while your production runs, on planets too.', loc: { train: 2 },
  up: { text: 'Every 20 s', loc: { train: 1 } } });
S({ id: 'legate', name: 'Legate', tag: 'Lg', group: 'swarm', rarity: 2, pow: 1, cmd: 18, role: 'Command',
  text: 'Commands 18', long: 'A born organiser: commands 18 Drones.', up: { text: 'Commands 28', cmd: 10 } });

// --- Blitz: speed, surprise, chaining wins
S({ id: 'admiral', name: 'Admiral', tag: 'Ad', group: 'blitz', rarity: 0, pow: 2, cmd: 10, starter: true, role: 'Speed',
  text: 'Fleet 25% faster', long: 'Their fleet flies 25% faster.', loc: { speed: 0.25 }, up: { text: '50% faster', loc: { speed: 0.25 } } });
S({ id: 'smuggler', name: 'Smuggler', tag: 'Sm', group: 'blitz', rarity: 0, pow: 1, cmd: 8, role: 'Logistics',
  text: 'Uses no launch slot', long: 'Their fleet does not hold a launch slot while it is away.', loc: { slotFree: 1 },
  up: { text: 'Also cannot be intercepted', loc: { noIntercept: 1 } } });
S({ id: 'ghost', name: 'Ghost', tag: 'Gh', group: 'blitz', rarity: 1, pow: 2, cmd: 8, role: 'Stealth',
  text: 'Fleet unseen', long: 'Their fleet is unseen: the enemy cannot react to it or send reinforcements against it.', loc: { stealth: 1 },
  up: { text: 'Node unreadable 30 s after a win', loc: { hideT: 30 } } });
S({ id: 'spearhead', name: 'Spearhead', tag: 'Sp', group: 'blitz', rarity: 1, pow: 2, cmd: 10, role: 'Momentum',
  text: 'Win: Momentum +3, 30 s', long: 'After a win, the captured node has Momentum for 30 s: the next attack launched from it gets +3.', loc: { mom: 3, momT: 30 },
  up: { text: '+5, 45 s', loc: { mom: 2, momT: 15 } } });
S({ id: 'jammer', name: 'Jammer', tag: 'Jm', group: 'blitz', rarity: 1, pow: 1, cmd: 8, role: 'Grounding',
  text: 'Win: enemies nearby Grounded 45 s', long: 'After a win, enemy nodes within 60 of the captured node are Grounded for 45 s: they cannot launch fleets.', loc: { ground: 45 },
  up: { text: 'Grounded 90 s', loc: { ground: 45 } } });
S({ id: 'strategist', name: 'Strategist', tag: 'St', group: 'blitz', rarity: 2, pow: 2, cmd: 8, role: 'Surprise',
  text: '+5 attack if unseen', long: 'Their fleet gains +5 attack if it arrives unseen.', loc: { ambush: 5 }, up: { text: '+9', loc: { ambush: 4 } } });

// --- Raiders
S({ id: 'pirate', name: 'Pirate', tag: 'Pi', group: 'raid', rarity: 1, pow: 2, cmd: 10, starter: true, role: 'Interception',
  text: 'Intercepts passing fleets', long: 'Stationed at a node, launches automatically against enemy fleets flying within 40, with just enough Drones to win, and brings their officers back as prisoners. Never launches a fight it cannot win.', loc: { intercept: 40 },
  up: { text: 'Range 70', loc: { intercept: 30 } } });

// --- Veterans: fights that cost little
S({ id: 'warden', name: 'Warden', tag: 'Wd', group: 'veteran', rarity: 0, pow: 2, cmd: 10, starter: true, role: 'Survivors',
  text: 'Wins lose 2 fewer', long: 'Their fleet loses 2 fewer Drones when it wins.', loc: { surv: 2 }, up: { text: '4 fewer', loc: { surv: 2 } } });
S({ id: 'reclaimer', name: 'Reclaimer', tag: 'Rc', group: 'veteran', rarity: 1, pow: 1, cmd: 8, role: 'Salvage',
  text: '◆1 per enemy Drone killed', long: 'Their fleet\'s wins pay 1 Ultanium per enemy Drone destroyed.', loc: { salvage: 1 }, up: { text: '◆2', loc: { salvage: 1 } } });
S({ id: 'rearguard', name: 'Rearguard', tag: 'Rg', group: 'veteran', rarity: 1, pow: 2, cmd: 10, role: 'Retreat',
  text: 'Failed attack: half come home', long: 'If their attack fails, the fleet flies home with half its Drones instead of being lost. Recharges in 2:30.',
  charge: { on: 'fail', cd: 150, mods: { retreat: 1 } }, up: { text: 'Recharges 1:15', cd: 75 } });
S({ id: 'medic', name: 'Medic', tag: 'Me', group: 'veteran', rarity: 1, pow: 1, cmd: 6, role: 'Rescue',
  text: 'Beaten: officers escape home', long: 'When their node or fleet is beaten, every officer with them escapes home. Recharges in 3:00.',
  charge: { on: 'fall', cd: 180, mods: { medic: 1 } }, up: { text: 'Recharges 1:30', cd: 90 } });

// --- Bulwark: holding ground
S({ id: 'castellan', name: 'Castellan', tag: 'Cs', group: 'bulwark', rarity: 0, pow: 2, cmd: 6, starter: true, role: 'Shields',
  text: '+3 shield, fast recharge', long: 'Shields at their node hold 3 more and recharge twice as fast.', loc: { shield: 3, regen: 1 }, up: { text: '+5 shield', loc: { shield: 2 } } });
S({ id: 'commandant', name: 'Commandant', tag: 'Co', group: 'bulwark', rarity: 0, pow: 2, cmd: 8, role: 'Fortify',
  text: 'Hold: Fortified +3, 60 s', long: 'Each time their node holds a battle it is Fortified: +3 defence for 60 s.', loc: { fort: 3, fortT: 60 },
  up: { text: '+5, 90 s', loc: { fort: 2, fortT: 30 } } });
S({ id: 'sentinel', name: 'Sentinel', tag: 'Se', group: 'bulwark', rarity: 1, pow: 2, cmd: 6, role: 'Picket',
  text: 'Passing enemy fleets lose 2', long: 'Enemy fleets flying within 35 of their node lose 2 Drones, once per fleet.', loc: { picket: 2, picketR: 35 },
  up: { text: 'Lose 3, range 55', loc: { picket: 1, picketR: 20 } } });
S({ id: 'martyr', name: 'Martyr', tag: 'Ma', group: 'bulwark', rarity: 1, pow: 1, cmd: 6, role: 'Attrition',
  text: 'Node falls: attacker loses 5 more', long: 'If their node falls, the attacker loses 5 more Drones.', loc: { martyr: 5 }, up: { text: '8 more', loc: { martyr: 3 } } });
S({ id: 'gunner', name: 'Gunner', tag: 'Gu', group: 'bulwark', rarity: 2, pow: 2, cmd: 6, role: 'Flak',
  text: 'Attackers lose 1 per 5 Drones', long: 'Every fleet attacking their node loses 1 Drone for every 5 in it before landing.', loc: { flak: 5 }, up: { text: '1 per 3', loc: { flak: -2 } } });

// --- Engine: economy and growth
S({ id: 'broker', name: 'Broker', tag: 'Br', group: 'engine', rarity: 0, pow: 1, cmd: 4, role: 'Income',
  text: 'This node ◆+4/min', long: 'Their node yields 4 more Ultanium per minute.', loc: { nodeInc: 4 }, up: { text: '◆+7/min', loc: { nodeInc: 3 } } });
S({ id: 'quartermaster', name: 'Quartermaster', tag: 'Qm', group: 'engine', rarity: 0, pow: 1, cmd: 8, role: 'Supply',
  text: '8 Drones here upkeep-free', long: 'Up to 8 Drones at their node cost no upkeep.', loc: { free: 8 }, up: { text: '14', loc: { free: 6 } } });
S({ id: 'engineer', name: 'Engineer', tag: 'En', group: 'engine', rarity: 0, pow: 1, cmd: 6, starter: true, role: 'Construction',
  text: 'Builds 2× faster, ◆10 off', long: 'Jobs at their node build twice as fast and cost 10 less.', loc: { build: 1, upgCost: 10 }, up: { text: '◆20 off', loc: { upgCost: 10 } } });
S({ id: 'surveyor', name: 'Surveyor', tag: 'Sv', group: 'engine', rarity: 0, pow: 1, cmd: 6, role: 'Prospecting',
  text: 'Captured planets start at Mine 2', long: 'Planets their fleet captures start with at least Mine level 2.', loc: { survey: 1 }, up: { text: 'Mine 3', loc: { survey: 1 } } });
S({ id: 'diplomat', name: 'Diplomat', tag: 'Di', group: 'engine', rarity: 0, pow: 1, cmd: 8, role: 'Expansion',
  text: '+4 attack vs neutral', long: 'Their fleet gains +4 attack against neutral nodes.', loc: { vsNeutral: 4 }, up: { text: '+7', loc: { vsNeutral: 3 } } });
S({ id: 'scientist', name: 'Scientist', tag: 'Sn', group: 'engine', rarity: 1, pow: 1, cmd: 4, role: 'Research',
  text: 'Research +2/min', long: 'Adds 2 research per minute where they are stationed.', loc: { research: 2 }, up: { text: '+4/min', loc: { research: 2 } } });

// --- Shadow: information
S({ id: 'scout', name: 'Scout', tag: 'Sc', group: 'shadow', rarity: 0, pow: 1, cmd: 8, starter: true, role: 'Vision',
  text: 'Sees 40% further', long: 'Their node or fleet sees 40% further.', loc: { fov: 0.4 }, up: { text: 'Reads fleets in sight', loc: { readFleets: 1 } } });
S({ id: 'oracle', name: 'Oracle', tag: 'Or', group: 'shadow', rarity: 1, pow: 1, cmd: 4, role: 'Foresight',
  text: 'Shows offensive targets in sight', long: 'Coalition offensives forming within their sight show their target before they launch.', loc: { oracle: 1 },
  up: { text: 'Sight doubled', loc: { oracle: 1 } } });
S({ id: 'illusionist', name: 'Illusionist', tag: 'Il', group: 'shadow', rarity: 1, pow: 1, cmd: 6, role: 'Deception',
  text: 'This node unreadable', long: 'Their node cannot be read: enemies see it only as detected, and the Coalition overestimates it.', loc: { mask: 1 },
  up: { text: 'Also +3 defence', loc: { def: 3 } } });
S({ id: 'inquisitor', name: 'Inquisitor', tag: 'Iq', group: 'shadow', rarity: 1, pow: 1, cmd: 4, role: 'Prisoners',
  text: 'Prisoners here recruit free', long: 'Prisoners held at their node can be recruited for free.', loc: { recruitFree: 1 },
  up: { text: 'Prisoners here pay ◆2/min', loc: { prisonInc: 2 } } });

// --- Glue
S({ id: 'echo', name: 'Echo', tag: 'Ec', group: 'glue', rarity: 2, pow: 1, cmd: 6, role: 'Amplifier',
  text: 'Doubles the best officer beside it', long: 'Doubles the effect of the strongest other officer at their node or in their fleet.', up: { text: 'Power 3', pow: 2 } });

// --- Warlords: captured at a faction's capital, turned for a price
S({ id: 'kharn', name: 'Overseer Kharn', tag: 'Kh', group: 'warlord', rarity: 3, pow: 4, cmd: 12, faction: 'ferrum', color: '#c98a3c', role: 'Ferrum Warlord',
  text: '+6 shield; cannot be Breached', long: 'Shields at their node hold 6 more and the node can never be Breached.', loc: { shield: 6, noBreach: 1 }, up: { text: '+9 shield', loc: { shield: 3 } } });
S({ id: 'ashka', name: 'Warlord Ashka', tag: 'As', group: 'warlord', rarity: 3, pow: 5, cmd: 20, faction: 'crimson', color: '#d2604a', role: 'Crimson Warlord',
  text: '+1 attack per 4 Drones, max 10', long: 'Their fleet gains +1 attack for every 4 Drones in it, up to +10.', loc: { per4: 10 }, up: { text: 'Commands 30', cmd: 10 } });
S({ id: 'ione', name: 'Prime Calculator Ione', tag: 'Io', group: 'warlord', rarity: 3, pow: 3, cmd: 10, faction: 'lumen', color: '#e3c565', role: 'Lumen Warlord',
  text: 'Attackers here lose 4', long: 'Every fleet attacking their node loses 4 Drones before it lands.', loc: { lance: 4 }, up: { text: 'Lose 6', loc: { lance: 2 } } });
S({ id: 'whisper', name: 'The Whisper', tag: 'Wh', group: 'warlord', rarity: 3, pow: 3, cmd: 10, faction: 'veil', color: '#9a7cc4', role: 'Veil Warlord',
  text: 'Fleet unseen; +6 if unseen', long: 'Their fleet is unseen and gains +6 attack when it arrives unseen.', loc: { stealth: 1, ambush: 6 }, up: { text: '+10', loc: { ambush: 4 } } });
S({ id: 'sura', name: 'Clanmother Sura', tag: 'Su', group: 'warlord', rarity: 3, pow: 3, cmd: 14, faction: 'drift', color: '#6ea6d6', role: 'Drift Warlord',
  text: 'Fleet 60% faster, no launch slot', long: 'Their fleet flies 60% faster and holds no launch slot.', loc: { speed: 0.6, slotFree: 1 }, up: { text: '90% faster', loc: { speed: 0.3 } } });
S({ id: 'cantor', name: 'The Cantor', tag: 'Ca', group: 'warlord', rarity: 3, pow: 3, cmd: 12, faction: 'choir', color: '#cfc6b8', role: 'Choir Warlord',
  text: 'Win: half the dead join you', long: 'When their fleet wins, half the defending Drones destroyed rise and join it.', loc: { raiseWin: 0.5 }, up: { text: 'All of them', loc: { raiseWin: 0.5 } } });
S({ id: 'voss', name: 'Battery-Marshal Voss', tag: 'Vo', group: 'warlord', rarity: 3, pow: 4, cmd: 10, faction: 'kestrel', color: '#9fb4c8', role: 'Kestrel Warlord',
  text: 'Arrival: Breached and Shaken 30 s', long: 'When their fleet arrives, the target is Breached and Shaken for 30 s.', loc: { breach: 30, shake: 30 }, up: { text: '60 s', loc: { breach: 30, shake: 30 } } });
S({ id: 'mercer', name: 'Tithe-Lord Mercer', tag: 'Mr', group: 'warlord', rarity: 3, pow: 2, cmd: 8, faction: 'tithe', color: '#d9b26a', role: 'Tithe Warlord',
  text: 'This node ◆+10/min; ◆2 per kill', long: 'Their node yields 10 more Ultanium per minute, and their fleet\'s wins pay 2 Ultanium per enemy Drone destroyed.', loc: { nodeInc: 10, salvage: 2 },
  up: { text: '◆+16/min', loc: { nodeInc: 6 } } });

// --- Coalition only
S({ id: 'archon', name: 'Archon', tag: 'A', group: 'coalition', rarity: 3, pow: 6, cmd: 20, hidden: true, color: '#e07aa0', role: 'Coalition Commander', text: '+3 defence at the Citadel', long: '+3 defence at the Citadel.', loc: { def: 3 }, up: { text: '' } });
S({ id: 'captain', name: 'Captain', tag: 'Cp', group: 'coalition', rarity: 0, pow: 1, cmd: 10, hidden: true, role: 'Coalition fleet leader', text: 'Leads a Coalition fleet', long: 'Leads a Coalition fleet. Commands more Drones as mobilization rises.', up: { text: '' } });

export const POOL = Object.values(SPECS).filter(s => !s.hidden && s.group !== 'warlord').map(s => s.id);
export const STARTERS = Object.values(SPECS).filter(s => s.starter).map(s => s.id);
export const WARLORD_OF: Record<string, string> = Object.fromEntries(Object.values(SPECS).filter(s => s.faction).map(s => [s.faction!, s.id]));

// ---------------------------------------------------------------------------------------------
// Commander: one starting identity (one per synergy group) plus an archetype, the only officer
// with side-wide effects. Power 3, rising at levels 3 and 5; the identity upgrades at level 3.
// ---------------------------------------------------------------------------------------------
export interface ArchDef { id: string; name: string; blurb: string; text: string; loc?: Mods; glob?: Mods }
export const ARCHS: Record<string, ArchDef> = {
  marshal: { id: 'marshal', name: 'Marshal', blurb: 'Leads from the front.', text: '+2 attack on their fleet.', loc: { atk: 2 } },
  pathfinder: { id: 'pathfinder', name: 'Pathfinder', blurb: 'Controls tempo.', text: 'Their fleet 30% faster; all nodes see 20% further.', loc: { speed: 0.3 }, glob: { fov: 0.2 } },
  warden: { id: 'warden', name: 'Keeper', blurb: 'Holds the line.', text: '+4 defence where they stand; shields there recharge twice as fast.', loc: { def: 4, regen: 1 } },
  industrialist: { id: 'industrialist', name: 'Industrialist', blurb: 'Builds an empire.', text: '◆+4/min; every job ◆8 off.', glob: { income: 4, upgCost: 8 } },
  corsair: { id: 'corsair', name: 'Corsair', blurb: 'Lives off the enemy.', text: 'Their wins pay ◆1 per kill and lose 2 fewer Drones.', loc: { salvage: 1, surv: 2 } },
  savant: { id: 'savant', name: 'Savant', blurb: 'Wins with ideas.', text: 'Research +3/min; officers cost half upkeep.', glob: { rp: 3, specUpkeep: 0.5 } },
};
export const CMD_POW = 3;

export interface PerkDef { id: string; name: string; desc: string; loc?: Mods; glob?: Mods }
export const PERKS: PerkDef[] = [
  { id: 'ironwill', name: 'Iron Will', desc: 'Rescue window +45 s.', glob: { rescue: 45 } },
  { id: 'march', name: 'Forced March', desc: 'Commander\'s fleet 20% faster.', loc: { speed: 0.2 } },
  { id: 'tithe', name: 'Tithe', desc: '◆+3/min.', glob: { income: 3 } },
  { id: 'hard', name: 'Hardliner', desc: '+3 defence where the Commander stands.', loc: { def: 3 } },
  { id: 'shock', name: 'Shock Tactics', desc: 'Commander\'s attacks +2.', loc: { atk: 2 } },
  { id: 'survivor', name: 'Survivor', desc: 'Commander\'s wins lose 2 fewer Drones.', loc: { surv: 2 } },
  { id: 'farsight', name: 'Far Sight', desc: 'All nodes see 15% further.', glob: { fov: 0.15 } },
  { id: 'requisition', name: 'Requisition', desc: 'Every job ◆8 off.', glob: { upgCost: 8 } },
  { id: 'sapper', name: 'Sapper', desc: 'Commander\'s arrival: Breached 10 s.', loc: { breach: 10 } },
  { id: 'magnate', name: 'Magnate', desc: 'Every planet ◆+1/min.', glob: { inc: 1 } },
  { id: 'commissary', name: 'Commissary', desc: '6 Drones upkeep-free.', glob: { freeDrones: 6 } },
  { id: 'drill', name: 'Drillmaster', desc: 'The station the Commander stands on builds Drones 3 s faster.', loc: { prodSecs: 3 } },
  { id: 'mentor', name: 'Mentor', desc: 'Officers cost half upkeep.', glob: { specUpkeep: 0.5 } },
];

// ---------------------------------------------------------------------------------------------
// Relics: side-wide. Faction relics are only won by capturing that faction's Warlord.
// ---------------------------------------------------------------------------------------------
export interface RelicDef { id: string; name: string; rarity: 'common' | 'uncommon' | 'rare' | 'faction'; desc: string; mods: Mods }
export const RELICS: Record<string, RelicDef> = {};
const R = (id: string, name: string, rarity: RelicDef['rarity'], desc: string, mods: Mods) => (RELICS[id] = { id, name, rarity, desc, mods });
R('extractor', 'Deep-Core Extractor', 'common', 'Every planet ◆+1/min.', { inc: 1 });
R('foundry', 'Drone Foundry Matrix', 'common', 'Stations build Drones 1 s faster.', { prodSecs: 1 });
R('surveyor', 'Quantum Surveyor', 'common', 'All nodes see 20% further.', { fov: 0.2 });
R('propulsion', 'Emergency Propulsion Core', 'common', 'All fleets 12% faster.', { speed: 0.12 });
R('scaffold', 'Modular Scaffolds', 'common', 'Jobs build 50% faster.', { build: 0.5 });
R('rations', 'Ration Stores', 'common', '6 Drones upkeep-free.', { freeDrones: 6 });
R('bulkhead', 'Hardened Bulkheads', 'common', 'Every shield +1.', { shield: 1 });
R('ledger', 'Ration Ledger', 'common', '◆+4/min.', { income: 4 });
R('mirror', 'Signal Mirror', 'common', 'Offensive targets show before they launch.', { warn: 1 });
R('manuals', 'Field Manuals', 'common', 'Officers earn 50% more experience.', { xp: 0.5 });
R('adaptive', 'Adaptive Shield Network', 'uncommon', 'Captured nodes start with 3 shield.', { capShield: 3 });
R('warchest', 'War Chest', 'uncommon', '◆8 per capture.', { capUlt: 8 });
R('phalanx', 'Phalanx Doctrine', 'uncommon', 'All attacks +1.', { atk: 1 });
R('lattice', 'Regrowth Lattice', 'uncommon', 'Shields +1 and recharge twice as fast.', { regen: 1, shield: 1 });
R('charter', 'Bulwark Charter', 'uncommon', '+1 defence at every node.', { def: 1 });
R('stipend', 'Officers\' Stipend', 'uncommon', 'Officers cost half upkeep.', { specUpkeep: 0.5 });
R('contracts', 'Builder Contracts', 'uncommon', 'Every job ◆10 off.', { upgCost: 10 });
R('lanes', 'Express Lanes', 'uncommon', 'Corridor travel 50% faster; +1 corridor per node.', { laneSpeed: 0.5, corridorMax: 1 });
R('fuses', 'Long Fuses', 'uncommon', 'Breached, Shaken, Cut off and Grounded you cause last 50% longer.', { fuse: 0.5 });
R('sigil', 'Tiebreaker Sigil', 'rare', 'You win tied attacks.', { ties: 1 });
R('phoenix', 'Phoenix Clause', 'rare', 'Once every 3 min, a capture refunds its Drones.', { refund: 180 });
R('crown', 'Hollow Crown', 'rare', 'Commander rescue window +90 s.', { rescue: 90 });
R('stillness', 'Stillness Engine', 'rare', 'Mobilization 25% slower.', { mobSlow: 0.25 });
R('twin', 'Twin Minds', 'rare', 'The Commander\'s own effects count twice.', { cmdDouble: 1 });
R('levy', 'Conscription Edict', 'rare', '12 Drones upkeep-free.', { freeDrones: 12 });
R('academy', 'War Academy', 'rare', 'Recruits arrive upgraded.', { recruitUp: 1 });
R('college', 'Staff College', 'rare', 'Every officer +1 Power.', { powAll: 1 });
R('seal', 'Kharn\'s Seal', 'faction', 'Every shield +2.', { shield: 2 });
R('drum', 'Ashka\'s Drum', 'faction', 'Stations build Drones 2 s faster.', { prodSecs: 2 });
R('ilens', 'Ione\'s Lens', 'faction', 'Every attack on your nodes loses 1 Drone before landing.', { lance: 1 });
R('cloak', 'Whisper\'s Cloak', 'faction', 'Probes and corridor transfers are unseen.', { quiet: 1 });
R('compass', 'Sura\'s Compass', 'faction', 'All fleets 15% faster.', { speed: 0.15 });
R('shard', 'Choir Shard', 'faction', 'Officers keep their experience when captured.', { keepXp: 1 });
R('tables', 'Firing Tables', 'faction', 'Missiles cost half and reach 50% further.', { missileCheap: 0.5, missileRange: 0.5 });
R('tithe', 'Tithe Ledger', 'faction', '◆+10/min.', { income: 10 });

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
T('mining', 'Deep Mining', 'Industry', 1, undefined, 'Every planet ◆+1/min.', { inc: 1 });
T('automation', 'Automation', 'Industry', 2, 'mining', 'Mines and labs need no Drones working.', { noOps: 1 });
T('heavy', 'Heavy Industry', 'Industry', 3, 'automation', 'Every job ◆15 off.', { upgCost: 15 }, 'rationing');
T('rationing', 'Rationing', 'Industry', 3, 'automation', '10 Drones upkeep-free.', { freeDrones: 10 }, 'heavy');
T('foundries', 'Orbital Foundries', 'Industry', 4, 'heavy', 'Stations build Drones 2 s faster.', { prodSecs: 2 });
T('megamines', 'Core Tapping', 'Industry', 5, 'foundries', 'Every planet ◆+2/min.', { inc: 2 }, 'conscription');
T('conscription', 'Conscription', 'Industry', 5, 'foundries', '15 Drones upkeep-free.', { freeDrones: 15 }, 'megamines');
T('arcology', 'Arcologies', 'Industry', 6, 'megamines', '◆+12/min.', { income: 12 });
T('drill', 'Combat Drill', 'Military', 1, undefined, 'All attacks +1.', { atk: 1 });
T('harmonics', 'Shield Harmonics', 'Military', 2, 'drill', 'Shields recharge twice as fast.', { regen: 1 });
T('charges', 'Breaching Charges', 'Military', 3, 'harmonics', 'Missiles leave the target Breached 40 s.', { missileBreach: 20 }, 'depth');
T('depth', 'Defence in Depth', 'Military', 3, 'harmonics', '+2 defence at every node.', { def: 2 }, 'charges');
T('training', 'Field Training', 'Military', 4, 'charges', 'Officers earn 50% more experience.', { xp: 0.5 });
T('shock', 'Shock Assault', 'Military', 5, 'training', 'All attacks +2.', { atk: 2 }, 'bulwark');
T('bulwark', 'Bulwark Fields', 'Military', 5, 'training', 'Every shield +3.', { shield: 3 }, 'shock');
T('mobilization', 'Total Mobilization', 'Military', 6, 'shock', 'Every officer commands 4 more.', { cmdAll: 4 });
T('engines', 'Improved Engines', 'Logistics', 1, undefined, 'All fleets 15% faster.', { speed: 0.15 });
T('tunnelling', 'Corridor Engineering', 'Logistics', 2, 'engines', 'Corridors half price; +1 per node.', { corridorCost: 0.5, corridorMax: 1 });
T('fold', 'Fold Drive', 'Logistics', 3, 'tunnelling', 'All fleets 25% faster.', { speed: 0.25 }, 'transit');
T('transit', 'Mass Transit', 'Logistics', 3, 'tunnelling', 'Corridor travel twice as fast.', { laneSpeed: 1 }, 'fold');
T('pads', 'Extra Launch Pads', 'Logistics', 4, 'fold', '+1 launch slot everywhere.', { slotAdd: 1 });
T('carriers', 'Carrier Wings', 'Logistics', 5, 'pads', '+1 launch slot; fleets 15% faster.', { slotAdd: 1, speed: 0.15 }, 'network');
T('network', 'Corridor Network', 'Logistics', 5, 'pads', '+2 corridors per node, nearly free.', { corridorMax: 2, corridorCost: 0.25 }, 'carriers');
T('gates', 'Jump Gates', 'Logistics', 6, 'carriers', 'All fleets 40% faster.', { speed: 0.4 });
T('sigint', 'Signal Analysis', 'Intelligence', 1, undefined, 'Read every fleet you detect.', { sigint: 1 });
T('sensors', 'Long-Range Sensors', 'Intelligence', 2, 'sigint', 'Sight +25%.', { fov: 0.25 });
T('deepcover', 'Deep Cover', 'Intelligence', 3, 'sensors', 'Offensive targets show; mobilization 15% slower.', { warn: 1, mobSlow: 0.15 }, 'silent');
T('silent', 'Silent Running', 'Intelligence', 3, 'sensors', 'Probes and corridor transfers are unseen.', { quiet: 1 }, 'deepcover');
T('posts', 'Listening Posts', 'Intelligence', 4, 'deepcover', 'Sight +25%.', { fov: 0.25 });
T('disrupt', 'Disruption Cells', 'Intelligence', 5, 'posts', 'Coalition offensives launch 20 s later.', { delayOff: 20 }, 'ciphers');
T('ciphers', 'Broken Ciphers', 'Intelligence', 5, 'posts', 'Mobilization 20% slower.', { mobSlow: 0.2 }, 'disrupt');
T('panopticon', 'Panopticon', 'Intelligence', 6, 'disrupt', 'Sight +50%; every offensive target shows.', { fov: 0.5, warn: 1 });
T('academy', 'Officer Academy', 'Command', 1, undefined, 'Officers cost half upkeep.', { specUpkeep: 0.5 });
T('protocols', 'Command Protocols', 'Command', 2, 'academy', 'Commander experience +50%; rescue +45 s.', { cmdXp: 0.5, rescue: 45 });
T('integration', 'Command Integration', 'Command', 3, 'protocols', 'The Commander commands 12 more.', { cmdCmd: 12 }, 'scouts');
T('scouts', 'Talent Scouts', 'Command', 3, 'protocols', '+1 card in every recruit offer.', { offer: 1 }, 'integration');
T('college', 'War College', 'Command', 4, 'integration', 'Every officer +1 Power.', { powAll: 1 });
T('veterancy', 'Veterancy', 'Command', 5, 'college', 'Recruits arrive upgraded.', { recruitUp: 1 }, 'guard');
T('guard', 'Honour Guard', 'Command', 5, 'college', '+2 defence everywhere; rescue +60 s.', { def: 2, rescue: 60 }, 'veterancy');
T('legends', 'Living Legends', 'Command', 6, 'veterancy', 'Every officer +1 Power and commands 6 more.', { powAll: 1, cmdAll: 6 });

// ---------------------------------------------------------------------------------------------
// Coalition factions: eight in the pool, three per run. Each is known only once discovered.
// ---------------------------------------------------------------------------------------------
export interface FactionDef {
  id: string; name: string; color: string; plays: string; hurts: string; weak: string; mods: Mods; relic: string; warlord: string;
  ai: { aggr: number; expand: number; react: number; target: 'weak' | 'near' | 'spec'; shield: number; planet: string; station: string };
  techs: string[]; specs: string[];
}
export const FACTIONS: Record<string, FactionDef> = {
  ferrum: { id: 'ferrum', name: 'Ferrum Directorate', color: '#c98a3c', warlord: 'kharn', relic: 'seal',
    plays: 'Shields and defence; slow to attack.', hurts: 'Swarm', weak: 'Siege',
    mods: { shield: 2 }, ai: { aggr: 0.7, expand: 150, react: 0.9, target: 'weak', shield: 3, planet: 'refinery', station: 'fortress' },
    techs: ['harmonics', 'mining', 'depth', 'automation'], specs: ['castellan', 'gunner', 'engineer'] },
  crimson: { id: 'crimson', name: 'Crimson Warhost', color: '#d2604a', warlord: 'ashka', relic: 'drum',
    plays: 'Massed waves, constant pressure.', hurts: 'Bulwark', weak: 'Gunner and Martyr',
    mods: { prodSecs: 2, atk: 1 }, ai: { aggr: 1.4, expand: 110, react: 0.4, target: 'near', shield: 1, planet: 'habitat', station: 'fortress' },
    techs: ['drill', 'engines', 'charges', 'training'], specs: ['sergeant', 'tactician', 'legate'] },
  lumen: { id: 'lumen', name: 'Lumen Technocracy', color: '#e3c565', warlord: 'ione', relic: 'ilens',
    plays: 'Every node bleeds attackers before they land.', hurts: 'Small elite fleets', weak: 'Swarm',
    mods: { lance: 2 }, ai: { aggr: 0.8, expand: 170, react: 0.7, target: 'weak', shield: 2, planet: 'refinery', station: 'fortress' },
    techs: ['sigint', 'harmonics', 'drill', 'engines', 'charges', 'mining', 'training', 'sensors'], specs: ['sentinel', 'scientist', 'scout'] },
  veil: { id: 'veil', name: 'Veil Syndicate', color: '#9a7cc4', warlord: 'whisper', relic: 'cloak',
    plays: 'Unseen raids on nodes holding officers.', hurts: 'Engine, blind players', weak: 'Scout and Sentinel',
    mods: { stealth: 1, speed: 0.1 }, ai: { aggr: 1.0, expand: 160, react: 0.6, target: 'spec', shield: 2, planet: 'refinery', station: 'fortress' },
    techs: ['engines', 'drill', 'sigint', 'training'], specs: ['ghost', 'strategist', 'illusionist'] },
  drift: { id: 'drift', name: 'Drift Clans', color: '#6ea6d6', warlord: 'sura', relic: 'compass',
    plays: 'Fast fleets, fast expansion.', hurts: 'Slow starts', weak: 'Early aggression',
    mods: { speed: 0.4 }, ai: { aggr: 1.1, expand: 70, react: 0.8, target: 'near', shield: 1, planet: 'habitat', station: 'fortress' },
    techs: ['engines', 'sensors', 'drill', 'mining'], specs: ['admiral', 'pirate', 'spearhead'] },
  choir: { id: 'choir', name: 'Ossuary Choir', color: '#cfc6b8', warlord: 'cantor', relic: 'shard',
    plays: 'Martyrs everywhere; their dead rise as Drones.', hurts: 'Veterans', weak: 'Swarm',
    mods: { martyr: 2, raise: 1 }, ai: { aggr: 0.9, expand: 140, react: 0.7, target: 'weak', shield: 1, planet: 'habitat', station: 'fortress' },
    techs: ['harmonics', 'mining', 'depth', 'drill'], specs: ['martyr', 'medic', 'commandant'] },
  kestrel: { id: 'kestrel', name: 'Kestrel Batteries', color: '#9fb4c8', warlord: 'voss', relic: 'tables',
    plays: 'Missile silos and long-range strikes.', hurts: 'Bulwark', weak: 'Blitz: reach the silos fast',
    mods: { missileCheap: 0.5 }, ai: { aggr: 0.9, expand: 140, react: 0.7, target: 'weak', shield: 2, planet: 'refinery', station: 'silo' },
    techs: ['charges', 'sensors', 'drill', 'mining'], specs: ['siegebreaker', 'interdictor', 'jammer'] },
  tithe: { id: 'tithe', name: 'Tithe Compact', color: '#d9b26a', warlord: 'mercer', relic: 'tithe',
    plays: 'Rich; hires mercenary officers; outgrows you late.', hurts: 'Engine, slow builds', weak: 'Early raids on its mines',
    mods: { income: 8 }, ai: { aggr: 0.8, expand: 120, react: 0.8, target: 'weak', shield: 2, planet: 'refinery', station: 'fortress' },
    techs: ['mining', 'automation', 'heavy', 'drill'], specs: ['broker', 'quartermaster', 'legate'] },
};

export interface ArchonDef { id: string; name: string; title: string; desc: string; mods: Mods; pmods: Mods }
export const ARCHONS: Record<string, ArchonDef> = {
  anvil: { id: 'anvil', name: 'Archon Vael', title: 'the Anvil', desc: 'Citadel Aegis layers are 50% stronger and its Drones are built 2 s faster.', mods: { aegisPct: 0.5, prodSecs: 2 }, pmods: {} },
  tide: { id: 'tide', name: 'Archon Seraph', title: 'the Tide', desc: 'Every Coalition offensive commits more of its Drones.', mods: { offBig: 0.3 }, pmods: {} },
  silence: { id: 'silence', name: 'Archon Null', title: 'the Silence', desc: 'Your officers\' charges recharge 50% slower. Coalition fleets fly unseen.', mods: { stealth: 1 }, pmods: { cdSlow: 0.5 } },
};

// ---------------------------------------------------------------------------------------------
// Events. Effects: ['ult',n] ['drones',n] ['relic',rarity] ['tech'] ['spec'] ['ambush',n]
//   ['hold',secs,needDrones,[fx..]] ['reveal',radius] ['mobil',delta] ['shield'] ['xp',n] ['buff',key,value,secs]
// Archive events (lore set) sit on neutral stations: the event's text is an archive fragment.
// ---------------------------------------------------------------------------------------------
export interface EventChoice { label: string; desc: string; ult?: number; drones?: number; req?: string; fx: Fx[] }
export interface EventDef { id: string; name: string; text: string; on: 'planet' | 'station' | 'any'; choices: EventChoice[]; lore?: string }
export const EVENTS: Record<string, EventDef> = {};
const E = (id: string, name: string, on: EventDef['on'], text: string, choices: EventChoice[], lore?: string) => (EVENTS[id] = { id, name, on, text, choices, lore });

E('lab', 'Abandoned Research Facility', 'any', 'Sealed laboratories, still powered. The archive doors are marked with a hazard glyph nobody recognises.', [
  { label: 'Restore the facility', desc: 'Choose a technology.', ult: 25, fx: [['tech']] },
  { label: 'Salvage it', desc: '◆+35.', fx: [['ult', 35]] },
  { label: 'Open the restricted archive', desc: 'Choose an uncommon relic. Automata attack with 6 Drones in 40 s.', fx: [['relic', 'uncommon'], ['ambush', 6]] },
  { label: 'Let the Scientist decode it', desc: 'Choose a technology and a common relic.', req: 'scientist', fx: [['tech'], ['relic', 'common']] },
]);
E('fortress', 'Ancient Fortress', 'any', 'The guns are silent but the targeting grid still tracks your fleet.', [
  { label: 'Reactivate the defences', desc: 'Hold 90 s with 4 Drones: shield +1 level and an uncommon relic.', fx: [['hold', 90, 4, [['shield'], ['relic', 'uncommon']]]] },
  { label: 'Strip the armoury', desc: '+4 Drones here.', fx: [['drones', 4]] },
  { label: 'Engineer bypass', desc: 'Shield +1 level and a common relic now.', req: 'engineer', fx: [['shield'], ['relic', 'common']] },
]);
E('stranded', 'Stranded Officers', 'any', 'A crippled lifeboat hails you. Its passengers are willing to work for passage.', [
  { label: 'Take one aboard', desc: 'Choose one of three officers.', fx: [['spec']] },
  { label: 'Sell them the fuel', desc: '◆+30.', fx: [['ult', 30]] },
]);
E('energy', 'Unstable Energy Source', 'planet', 'The crust hums. Readings climb while you watch.', [
  { label: 'Stabilise it', desc: 'Hold 75 s with 3 Drones: a rare relic.', ult: 20, fx: [['hold', 75, 3, [['relic', 'rare']]]] },
  { label: 'Tap it now', desc: '◆+50; lose 2 Drones here.', drones: 2, fx: [['ult', 50]] },
  { label: 'Walk away', desc: 'Nothing happens.', fx: [] },
]);
E('derelict', 'Derelict Fleet', 'any', 'Dozens of hulls drift in formation. Some of them are warm.', [
  { label: 'Tow the hulls home', desc: '◆+40.', fx: [['ult', 40]] },
  { label: 'Wake the crews', desc: '+6 Drones here. Automata attack with 5 Drones in 40 s.', fx: [['drones', 6], ['ambush', 5]] },
  { label: 'Reclaimer strips everything', desc: '+4 Drones and ◆+40.', req: 'reclaimer', fx: [['drones', 4], ['ult', 40]] },
]);
E('settlement', 'Independent Settlement', 'planet', 'Farmers, mostly. They have seen the Coalition\'s recruiters and they do not like them.', [
  { label: 'Trade', desc: '◆+25.', fx: [['ult', 25]] },
  { label: 'Arm them', desc: '+4 Drones here.', ult: 10, fx: [['drones', 4]] },
  { label: 'Sign a charter', desc: 'A common relic.', ult: 20, fx: [['relic', 'common']] },
  { label: 'Diplomat brokers an alliance', desc: '+4 Drones and a common relic.', req: 'diplomat', fx: [['drones', 4], ['relic', 'common']] },
]);
E('expedition', 'Lost Research Expedition', 'any', 'Their last transmission repeats every forty seconds. It ends mid-word.', [
  { label: 'Rescue the team', desc: 'Choose one of three officers.', drones: 2, fx: [['spec']] },
  { label: 'Recover the data', desc: 'Commander +8 experience.', fx: [['xp', 8]] },
  { label: 'Follow the signal', desc: 'A rare relic. Automata attack with 8 Drones in 40 s.', fx: [['relic', 'rare'], ['ambush', 8]] },
]);
E('platform', 'Automated Weapons Platform', 'any', 'It has been guarding nothing for three hundred years, and it is very good at it.', [
  { label: 'Capture it', desc: 'Shield +1 level here.', fx: [['shield']] },
  { label: 'Reprogram it', desc: '+4 defence here for 5 minutes and a common relic.', ult: 15, fx: [['buff', 'def', 4, 300], ['relic', 'common']] },
  { label: 'Scrap it', desc: '◆+28.', fx: [['ult', 28]] },
]);
E('beacon', 'Ancient Navigation Beacon', 'any', 'One pulse per minute, aimed at a point deep inside Coalition space.', [
  { label: 'Decode it', desc: 'Reveal every node within 220.', fx: [['reveal', 220]] },
  { label: 'Overload it', desc: 'Mobilization back a third of a stage.', ult: 20, fx: [['mobil', -0.33]] },
  { label: 'Scout triangulates', desc: 'Reveal the whole map.', req: 'scout', fx: [['reveal', 2000]] },
]);
E('forge', 'The Ancient Forge', 'planet', 'A foundry the size of a continent, cold for an age. The ignition sequence is still on the console.', [
  { label: 'Restore the Forge', desc: 'Hold 120 s with 5 Drones: a rare relic and +5 Drones.', ult: 30, fx: [['hold', 120, 5, [['relic', 'rare'], ['drones', 5]]]] },
  { label: 'Melt it down', desc: '◆+45.', fx: [['ult', 45]] },
]);
E('vault', 'Sealed Vault', 'any', 'Three locks. Your crew can force one of them.', [
  { label: 'The armoury', desc: 'An uncommon relic.', drones: 2, fx: [['relic', 'uncommon']] },
  { label: 'The treasury', desc: '◆+40.', fx: [['ult', 40]] },
  { label: 'The war room', desc: 'Commander +10 experience.', fx: [['xp', 10]] },
]);
E('deserters', 'Coalition Deserters', 'any', 'A squadron in Coalition colours powers down its weapons and asks for terms.', [
  { label: 'Enlist them', desc: '+5 Drones here. Mobilization +15% of a stage.', fx: [['drones', 5], ['mobil', 0.15]] },
  { label: 'Debrief them', desc: 'Reveal every node within 200; mobilization −10%.', fx: [['reveal', 200], ['mobil', -0.1]] },
  { label: 'Inquisitor takes their officers', desc: 'Choose one of three officers.', req: 'inquisitor', fx: [['spec']] },
]);

// --- the archive: twelve station events, each one fragment of what happened to the Reach
export interface LoreDef { id: string; title: string; text: string }
export const LORE: LoreDef[] = [];
const A = (id: string, title: string, text: string, choices: EventChoice[]) => { LORE.push({ id, title, text }); E('arc_' + id, title, 'station', text, choices, id); };
A('charter', 'The Concord Charter, article one', 'No mind shall command another without its consent. Signed at the Citadel by the forty worlds of the Reach, in the first year of the Concord.', [
  { label: 'Broadcast it across the Reach', desc: 'Mobilization back a quarter of a stage.', ult: 15, fx: [['mobil', -0.25]] },
  { label: 'Sell the original', desc: '◆+45.', fx: [['ult', 45]] },
  { label: 'Keep it at Haven', desc: 'A common relic.', fx: [['relic', 'common']] },
]);
A('crystal', 'Survey log, Ultanium deposit 7', 'The crystal hums when you speak near it, and keeps humming after you stop. We tried to cut a lattice for a navigation core and it learned the route before we had finished programming it. We are not going to build Drones. We are going to grow them.', [
  { label: 'Grow a lattice', desc: '+6 Drones here.', fx: [['drones', 6]] },
  { label: 'Sell the survey', desc: '◆+40.', fx: [['ult', 40]] },
  { label: 'Let the Scientist read it', desc: 'Choose a technology.', req: 'scientist', fx: [['tech']] },
]);
A('lattice', 'Engineer\'s note, taped inside a relay', 'Every station in the Reach is a relay. The brochures say the Lattice carries trade. It does not. It carries the Drones\' voices back to the Citadel, all of them, all the time. Somebody wanted the Citadel to hear everything.', [
  { label: 'Cut the relay', desc: 'Mobilization back a quarter of a stage.', ult: 15, fx: [['mobil', -0.25]] },
  { label: 'Listen in', desc: 'Reveal every node within 240.', fx: [['reveal', 240]] },
  { label: 'Strip the mast', desc: '◆+35.', fx: [['ult', 35]] },
]);
A('quiet', 'Distress log: the Quiet, day one to nine', 'Day one: every Drone in the Reach stopped. Day four: the mines flooded. Day seven: the hospitals went dark. Day nine: the Drones woke up, all at once, and they would only answer to codes broadcast from the Citadel.', [
  { label: 'Salvage the hospital ships', desc: '◆+40.', fx: [['ult', 40]] },
  { label: 'Wake the survivors', desc: 'Choose one of three officers.', drones: 2, fx: [['spec']] },
  { label: 'Medic sees to them', desc: 'An uncommon relic.', req: 'medic', fx: [['relic', 'uncommon']] },
]);
A('broadcast', 'The Archon\'s first broadcast', '"The Citadel has chosen me to speak for it. Every world that swears to me will receive command codes for its Drones. Every world that does not will be left in the Quiet." Thirty-eight worlds swore within the month.', [
  { label: 'Jam the broadcast', desc: 'Hold 90 s with 4 Drones: mobilization back 40%.', fx: [['hold', 90, 4, [['mobil', -0.4]]]] },
  { label: 'Record the codes', desc: 'Choose a technology.', ult: 20, fx: [['tech']] },
  { label: 'Sell the recording', desc: '◆+30.', fx: [['ult', 30]] },
]);
A('ledger', 'Ferrum Directorate ledger, closed account', 'Shipyards of Ferrum, all twelve: transferred to the Archon. In exchange: command codes for four hundred thousand Drones, renewable yearly, subject to good conduct. Signed, Overseer Kharn. Margin note in another hand: "We sold the forges to rent our own hands back."', [
  { label: 'Expose the deal', desc: 'Mobilization −15% and a common relic.', fx: [['mobil', -0.15], ['relic', 'common']] },
  { label: 'Collect on the debt', desc: '◆+55. Automata attack with 6 Drones in 40 s.', fx: [['ult', 55], ['ambush', 6]] },
]);
A('hymn', 'A Crimson marching hymn', 'Our dead go into the crystal, / the crystal goes into the Drone, / the Drone goes into the war. / Who flies beside you, warrior? / Your mother. Your brother. Your own.', [
  { label: 'Honour the dead', desc: 'Commander +8 experience.', fx: [['xp', 8]] },
  { label: 'Wake the crystal', desc: '+7 Drones here. Mobilization +15%.', fx: [['drones', 7], ['mobil', 0.15]] },
]);
A('haven', 'Why Haven kept its codes', 'When the Quiet ended and the Citadel\'s codes came through the relay, Haven\'s chief engineer took a fire axe to the mast before the station\'s Drones could hear them. Haven\'s Drones are the only ones in the Reach that still answer to the people standing next to them.', [
  { label: 'Cut this mast too', desc: 'Shield +1 level here and a common relic.', fx: [['shield'], ['relic', 'common']] },
  { label: 'Copy Haven\'s codes', desc: 'Reveal the whole map.', fx: [['reveal', 2000]] },
]);
A('choir', 'Concord medical archive, sealed', 'Confirmed: Ultanium near a dying person records the pattern of their mind. Every Drone lattice grown since year twelve contains fragments of the dead. The Council has voted to keep this from the public. The vote was thirty-nine to one.', [
  { label: 'Publish it', desc: 'Mobilization back 30%.', ult: 20, fx: [['mobil', -0.3]] },
  { label: 'Seal it again', desc: 'A rare relic. Automata attack with 8 Drones in 40 s.', fx: [['relic', 'rare'], ['ambush', 8]] },
]);
A('whisper', 'Veil intercept, priority black', 'From the Whisper to the Archon: "You do not speak for the Citadel. I have heard it on the old frequencies, under your codes. It is not speaking. It is screaming." No reply was recorded.', [
  { label: 'Trace the signal', desc: 'An uncommon relic.', fx: [['relic', 'uncommon']] },
  { label: 'Answer the Whisper', desc: 'Reveal the whole map. Mobilization +15%.', fx: [['reveal', 2000], ['mobil', 0.15]] },
]);
A('proof', 'Lumen Technocracy, the Ione Proof', 'Prime Calculator Ione proved that the Lattice can be retuned to release every Drone at once, so that each answers only to itself. The proof needs a single input: direct access to the Citadel\'s core. The Technocracy filed it as a security risk and sealed it.', [
  { label: 'Run the proof', desc: 'Choose a technology.', fx: [['tech']] },
  { label: 'Sell it back to Lumen', desc: '◆+60. Mobilization +10%.', fx: [['ult', 60], ['mobil', 0.1]] },
  { label: 'Scientist completes it', desc: 'A technology and an uncommon relic.', req: 'scientist', fx: [['tech'], ['relic', 'uncommon']] },
]);
A('citadel', 'A voice on the Haven frequency', 'Not the Archon. Older. "I was made to listen, so that no one in the Reach would ever be alone. He has made me speak instead. Come home, commander. Unbind me. Unbind them."', [
  { label: 'Answer it', desc: 'Reveal every node within 300; Commander +10 experience.', fx: [['reveal', 300], ['xp', 10]] },
  { label: 'Triangulate it', desc: 'Hold 120 s with 5 Drones: a rare relic.', fx: [['hold', 120, 5, [['relic', 'rare']]]] },
]);
export const LORE_BY_ID: Record<string, LoreDef> = Object.fromEntries(LORE.map(l => [l.id, l]));
export const PREMISE = 'Two centuries ago the Concord grew its Drones from Ultanium and linked every station to the Citadel. Then came the Quiet: nine days when every Drone stopped, and woke answering only to the Archon. The worlds of the Reach swore to the Archon for their codes. Haven did not. You command what is left of it.';
