# SpaceNodes: the next update

> **Status: built** (branch `claude/wonderful-mccarthy-rcqrvs`). Changes decided after this plan was written, and now in the game:
> - Specialists are renamed **Officers**.
> - Station specialties are **Fortress** (+4 shield, sight +40%), **Missile Silo** and **Flagship**. Barracks stays a building level, not a specialty.
> - **Pirate:** stationed at a node, it launches by itself against enemy fleets passing within 40 (70 upgraded), with just enough Drones to win, and brings their officers home as prisoners. It never launches a fight it cannot win.
> - **Nothing adds crew places.** Command Integration now gives the Commander +12 Command; Entourage and Fourth Chair are cut.
> - **Commander identities:** one per synergy group (Siegebreaker, Tactician, Admiral, Pirate, Warden, Castellan, Engineer, Scout), drawn 3 at a time and paired with an archetype.
> - **Warlords** are captured with their capital and can be **turned** (◆120, +30 per mobilization stage) or ransomed (◆40). Capturing the capital also grants that faction's relic.
> - **Rarity affects offers:** Common 55%, Uncommon 30%, Rare 15%, plus 3% toward a Rare per offer without one. Duplicate officers are never allowed.
> - **Experience:** upgrade at 10. A win gives 1, +2 if outnumbered, +1 per defending officer (max 2). A previewed "close" win is no longer rewarded, because previews make it riskless. Holding gives 1/2/3 by node worth, +2 if close.
> - **Gunner:** 1 attacker lost per 5 Drones, 2 per 5 upgraded.
> - **Game speed:** 25% faster at 1×.

Everything we have agreed so far, for review before it is built. "Current build" means the branch `claude/wonderful-mccarthy-rcqrvs` as of the last push.

Tags: **new** (not in the game), **changed** (in the game, works differently), **cut** (removed).

---

## 1. What changes, at a glance

| Area | Current build | Planned |
|---|---|---|
| Specialist growth | 5 levels; +1 Power at 2 and 4, upgrade at 3, mastery at 5, +4 Command per level | **Two forms only: base and upgraded.** Upgrade costs 8 experience, earned only in battle, more for risky fights and for holding valuable nodes |
| Where specialists act | Some act everywhere (Broker, Recruiter, Oracle, signatures) | **Only on their own node or fleet.** Everything side-wide comes from research, relics or the Commander |
| Signature specialists | 5, gained from captured Warlords, with global effects | **Cut.** A captured Warlord gives that faction's relic instead |
| Specialist upkeep | ◆0.5/min per point of Power | **By rarity:** Common ◆1, Uncommon ◆2, Rare ◆3; +◆1 once upgraded. The Commander is free |
| Card text | Full sentences | **A few words on the card;** the full rule is in the long-press tooltip |
| Roster | 32 recruitable specialists | 34, rebuilt so each has its own job (section 3) |
| Recruit offers | A pop-up when you take the node; skipping gives nothing | **Waits in the notification log** until you choose, or until the node is captured. Skipping pays ◆20, +◆5 per mobilization stage |
| Station specialties | Missile Silo, Fortress, Launch Bay | **Barracks, Missile Silo, Flagship.** Fortress and Launch Bay are cut |
| Planet specialties | Refinery, Lab, Habitat | Unchanged |
| Flagship | Built as a separate new node; moves freely; specialists near it gain a level | **A station specialty that turns that station into the Flagship.** Rules in section 2.6. No aura |
| Lasting effects | Only the hidden missile effect (shield stops recharging 20 s) | **Seven named effects with visible timers** (section 2.3) |
| Information on the map | Chips under nodes are decoration | **Every chip is tappable:** buildings, effects, shield recharge, intent |
| Enemy intent | Offensive warning banner; the target only with Oracle or a relic | **Anything in full vision shows its intent.** The target of an offensive before it launches needs research or a relic |
| Decisions | Modal pop-ups pause the game (recruits, events, relics, research, archive, terms) | **Notification log, top right.** Timers, events, archive finds and decisions; decisions show as a badge and never interrupt. Only the opening Commander choice is full screen |
| Archive | 12 fragments, shown as a pop-up after a station event | **12 archive events, each a decision.** The fragment is the event's story; you choose what to do with it |
| Factions | 5 in the pool, 3 per run; identities shown from the start in the menu | **8 in the pool,** 3 per run, **identity revealed on first discovery** |
| Multi-fleet battles | One fleet resolves at a time, in arrival order | Unchanged: a node can change hands several times within seconds. The node's chips show it ("captured 0:08 ago, shield 0") |
| Drone economy | As built | Unchanged for now; playtest first |
| Coalition AI | Counterattacks, 2–3 offensives at once from stage 3, targets by worth, collapse below 30%, Archon offers terms | Unchanged |

---

## 2. Core rules

### 2.1 Battles
- Attack = Drones + crew Power + effects. Defence = Drones + shield + stationed specialists' Power + effects. The higher number wins; a tie goes to the defender. Survivors = the difference.
- An attack carries at most its crew's total **Command** in Drones. A fleet without a specialist can only reinforce, or go as a probe with no Drones.
- A fleet engages from just outside the node and fights for 1.8 s before the result lands. Drones that reach the node before then count for the defence.
- Several fleets at one node fight one after another. Each capture resets the shield to 0, so a second fleet arriving behind a first often finds the node easy.

### 2.2 Experience
- **Earned only in battle.** The attacking crew and the specialists at the defending node both earn it.
- **Attack:** win +1; won by 3 or less +2; had fewer Drones than the defenders +2.
- **Defence:** hold an ordinary node +1, a valuable one (specialists, buildings or corridors) +2, Haven or the Flagship +3; held by 3 or less +2.
- **Upgrade at 8.** A captured specialist loses all experience, even if rescued.
- The Commander keeps its own levels and perks (section 4).

### 2.3 Lasting effects
Each shows as a chip under the node, or beside the fleet, with a draining ring. Tap it for the name, one line and the time left.

| Effect | What it does | How long | Source |
|---|---|---|---|
| **Breached** | Shield drops to 0 and can't recharge | 20 s (40 s upgraded) | Siegebreaker on arrival; missiles |
| **Shaken** | The node's specialists add no Power and their effects stop | 30 s (60 s) | Saboteur on arrival |
| **Cut off** | No reinforcements or convoys can land there | 45 s (90 s) | Interdictor on arrival |
| **Grounded** | Can't launch fleets | 45 s (90 s) | Jammer: every enemy node within 60 after a win |
| **Momentum** | The next attack launched from this node gets +3 (+5) | 30 s (45 s) | Spearhead on a win |
| **Fortified** | +3 (+5) defence | 60 s (90 s) | Commandant after the node holds a battle |
| **Picket** | Enemy fleets passing within range lose Drones, once per fleet | Always on | Sentinel stationed there |

Shield recharge also gets a chip: "◈ +1 per 6 s", "◈ +1 per 3 s" with a Castellan, or "stopped 0:14".

### 2.4 Intent
- Enemy nodes within **full vision** show what they're doing: "Massing ⬢ 24", "Shield 2 in 0:30", "Missile arming 0:40", "Offensive forming".
- **Where** an offensive will strike before it launches needs research (Deep Cover, Panopticon), a relic (Signal Mirror) or an Oracle within sight of the staging node.
- A launched fleet that you can see already shows its course.

### 2.5 Notification log (top right)
- One list, newest first:
  - **Timers:** offensives, your builds, effects on your nodes.
  - **Events and archive finds.**
  - **Decisions:** recruits, relics, research, events, archive, Commander perks, Archon's terms.
- A badge counts the open decisions. The game keeps running while you decide.
- Tapping an entry opens it. Entries tied to a node also jump the camera there.
- A recruit offer waits until you choose or until the node is captured. Everything else waits until you choose.

### 2.6 Station specialties
| Specialty | Effect |
|---|---|
| **Barracks** | Builds Drones faster (exact number to tune) |
| **Missile Silo** | Builds missiles. A missile leaves the target Breached and kills 6 Drones |
| **Flagship** | This station becomes your Flagship (one per player) |

**Flagship rules**
- Drag it onto open space to sail. It moves slowly and **builds Drones while moving**.
- **While sailing:** it can't be targeted or attacked, can't launch fleets, and its corridors break.
- **When it arrives** it anchors for 20 s. During that time it can be attacked but can't launch or move. After that it is a normal node.
- **After anchoring,** it can't sail again for 4 minutes.
- **It can't leave while any enemy fleet is heading for it.**
- It can be captured like any node. The captor's AI can sail it under the same rules.

### 2.7 Planet specialties (unchanged)
| Specialty | Effect |
|---|---|
| Refinery | Mine output +50% |
| Lab | Research; needs 2 Drones working |
| Habitat | 10 of your Drones cost no upkeep, anywhere |

---

## 3. Specialists

Card text is what the card shows; long-press gives the full rule. **P/C** = Power / Command. **★** = can be a starting Commander identity. Upkeep: C ◆1, U ◆2, R ◆3, +◆1 when upgraded.

### Siege: break a defended node (set up, then finish)
| Specialist | Rarity | P/C | Card text | Upgraded | |
|---|---|---|---|---|---|
| Siegebreaker | U | 2/8 | Arrival: target Breached 20 s | 40 s | changed |
| Saboteur | U | 2/8 | Arrival: target Shaken 30 s | 60 s | changed |
| Interdictor | U | 2/8 | Arrival: target Cut off 45 s | 90 s | **new** |
| Vanguard | R | 3/10 | Crew Power counts double | Triple | changed |

### Swarm: big fleets
| Specialist | Rarity | P/C | Card text | Upgraded | |
|---|---|---|---|---|---|
| Tactician ★ | U | 3/12 | +1 attack per 4 Drones, max 4 | Max 8 | changed (max raised) |
| Drill Sergeant | U | 1/10 | +1 Drone here every 30 s | Every 20 s | |
| Legate | R | 1/18 | Commands 18 | Commands 28 | |

### Blitz: speed, surprise, chaining
| Specialist | Rarity | P/C | Card text | Upgraded | |
|---|---|---|---|---|---|
| Admiral ★ | C | 2/10 | Fleet 25% faster | 50% | |
| Smuggler | C | 1/8 | Uses no launch slot | Can't be intercepted | changed |
| Ghost | U | 2/8 | Fleet unseen | Also unseen 30 s after landing | changed |
| Spearhead | U | 2/10 | Win: Momentum +3 here, 30 s | +5, 45 s | **new** |
| Jammer | U | 1/8 | Win: nearby enemy nodes Grounded 45 s | 90 s | **new** |
| Strategist | R | 2/8 | +5 attack if arriving unseen | +9 | changed |

### Raiders: fleet against fleet
| Specialist | Rarity | P/C | Card text | Upgraded | |
|---|---|---|---|---|---|
| Pirate | U | 2/8 | Intercepts enemy fleets on its route | Takes their crew prisoner | changed |

**Interception:** a Pirate's fleet that passes within 20 of an enemy fleet in flight stops it and fights it. Each side counts Drones + crew Power; the loser is destroyed and the winner loses the loser's total. The loser's crew escapes home, or is captured if the Pirate is upgraded. Convoys in corridors can't be intercepted.

### Veterans: fights that cost little
| Specialist | Rarity | P/C | Card text | Upgraded | |
|---|---|---|---|---|---|
| Warden | C | 2/10 | Wins lose 2 fewer | 4 fewer | |
| Reclaimer | U | 1/8 | ◆1 per enemy Drone killed | ◆2 | |
| Rearguard | U | 2/10 | Failed attack: half come home (2:30) | Recharges 1:15 | |
| Medic | U | 1/6 | Beaten: specialists escape home (3:00) | Recharges 1:30 | |

### Bulwark: holding ground
| Specialist | Rarity | P/C | Card text | Upgraded | |
|---|---|---|---|---|---|
| Castellan ★ | C | 2/6 | +3 shield, recharges twice as fast | +5 | |
| Commandant | C | 2/8 | Hold: Fortified +3 for 60 s | +5, 90 s | **new** |
| Sentinel | U | 2/6 | Picket: passing enemy fleets lose 2 | Lose 3, wider range | changed |
| Martyr | U | 1/6 | Node falls: attacker loses 5 more | 8 more | |
| Gunner | R | 2/6 | Attackers lose 1 per 5 Drones | 1 per 3 | **new** |

### Engine: economy and growth
| Specialist | Rarity | P/C | Card text | Upgraded | |
|---|---|---|---|---|---|
| Broker | C | 1/4 | This node ◆+4/min | ◆+7 | changed (was global) |
| Quartermaster ★ | C | 1/8 | 8 Drones here upkeep-free | 14 | changed (was 4) |
| Engineer ★ | C | 1/6 | Upgrades here 2× faster, ◆10 off | ◆20 off | |
| Surveyor | C | 1/6 | Planets it captures start at Mine 2 | Mine 3 | **new** |
| Diplomat | C | 1/8 | +4 attack vs neutral | +7 | |
| Scientist | U | 1/4 | Research +2/min | +4/min | |

### Shadow: information
| Specialist | Rarity | P/C | Card text | Upgraded | |
|---|---|---|---|---|---|
| Scout ★ | C | 1/8 | Sees 40% further | Reads fleets in its sight | changed |
| Oracle | U | 1/4 | Shows offensive targets in sight | Sight doubled | changed (was global) |
| Illusionist | U | 1/6 | This node unreadable | Its fleets too | |
| Inquisitor | U | 1/4 | Prisoners here recruit free | Prisoners here pay ◆2/min | changed |

### Glue
| Specialist | Rarity | P/C | Card text | Upgraded | |
|---|---|---|---|---|---|
| Echo | R | 1/6 | Doubles the best specialist beside it | Power 3 | changed |

### Cut
| Specialist | Why |
|---|---|
| Demolisher | Same job as Siegebreaker |
| Foreman | The Barracks specialty does this |
| Prospector | Same as Broker with an extra condition |
| Architect | Duplicates Corridor Engineering research |
| Recruiter, Navigator | Merged into Quartermaster and Admiral |
| Ghost's shield-ignore upgrade | Borrowed Siegebreaker's job |
| Ironmonger, Berserker, Lens, Phantom, Wayfinder | Global effects; replaced by faction relics |

### Strong trios and their counters
| Trio | What it does | Counter |
|---|---|---|
| Siegebreaker + Saboteur + Interdictor | One small fleet strips shield, specialists and reinforcements; the main fleet lands on a bare node | Gunner and Sentinel bleed the small fleet before it lands; Pirate intercepts it |
| Tactician + Legate + Drill Sergeant | 40+ Command, +4 to +8 attack, refills itself | Gunner, Martyr, missiles |
| Ghost + Strategist + Spearhead | Unseen +5 strike, then +3 for the next one, then again | Scout or sensors (once seen, Ghost and Strategist stop working), Sentinel pickets |
| Spearhead + Jammer + Warden | Take a node, ground its neighbours, chain into the next one cheaply | Martyr, counterattacks from beyond Jammer's range |
| Castellan + Commandant + Martyr | Every hold makes the node stronger; winning costs the attacker dearly | Siege trio, missiles, repeated waves |
| Sentinel + Gunner + Illusionist | Fleets bleed on the approach, big fleets bleed more, and the attacker can't read the node | Interdictor stops reinforcements, Pirate clears pickets, probes read the node |
| Pirate + Admiral + Smuggler | A fast raider that kills convoys and reinforcements without tying up a launch slot | Fleets escorted by a Pirate of your own, corridors |
| Echo + any upgraded rare | Twice a rare's upgraded effect | Capture the Echo: it has Power 1 |

### Coalition only (unchanged)
| | P | Role |
|---|---|---|
| Warlord | 4 | Faction leader at the capital; capturing it collapses the faction |
| Archon | 6 | At the Citadel |
| Captain | 1 | Leads Coalition fleets; Command 10, +5 per mobilization stage |

---

## 4. Commander (the one source of global effects besides research and relics)
The Commander is one ★ specialist plus an **archetype**. It is free of upkeep, has Power 3 (4 at level 3, 5 at level 5), commands 12 Drones, and has 5 levels with a perk at each.

| Archetype | Effect |
|---|---|
| Marshal | +2 attack on the Commander's fleet |
| Pathfinder | Commander's fleet 30% faster; all nodes see 20% further |
| Warden | +4 defence where the Commander stands; shields there recharge twice as fast |
| Industrialist | ◆+4/min; every upgrade ◆8 off |
| Corsair | Commander's wins pay ◆1 per kill and lose 2 fewer Drones |
| Savant | Research +3/min; specialists cost half upkeep |

**Perks** (pick 1 of 3 at each level): Iron Will (rescue window +45 s), Forced March (fleet +20%), Tithe (◆+3/min), Hardliner (+3 defence where the Commander stands), Shock Tactics (Commander's attacks +2), Survivor (Commander's wins lose 2 fewer), Far Sight (sight +15%), Requisition (upgrades ◆8 off), Magnate (planets ◆+1/min), Commissary (6 Drones upkeep-free), Drillmaster (the station the Commander stands on builds 3 s faster), Mentor (specialists half upkeep). **Entourage (+1 specialist per fleet) is cut,** to protect the three-specialist limit. Sapper (Commander's attacks ignore 3 shield) **changes** to: Commander's arrival Breaches the target 10 s.

---

## 5. Relics
| Relic | Rarity | Effect | |
|---|---|---|---|
| Deep-Core Extractor | Common | Every planet ◆+1/min | |
| Drone Foundry Matrix | Common | Stations build Drones 1 s faster | |
| Quantum Surveyor | Common | All nodes see 20% further | |
| Emergency Propulsion Core | Common | All fleets 12% faster | |
| Modular Scaffolds | Common | Upgrades build 50% faster | |
| Ration Stores | Common | 6 Drones upkeep-free | |
| Hardened Bulkheads | Common | Every node's shield +1 | |
| Ration Ledger | Common | ◆+4/min | |
| Signal Mirror | Common | Shows offensive targets before they launch | changed |
| Field Manuals | Common | Specialists earn 50% more experience | **new** |
| Adaptive Shield Network | Uncommon | Captured nodes start with 3 shield | |
| War Chest | Uncommon | ◆8 per capture | |
| Phalanx Doctrine | Uncommon | All attacks +1 | |
| Regrowth Lattice | Uncommon | Shields +1 and recharge twice as fast | |
| Bulwark Charter | Uncommon | +1 defence at every node | |
| Officers' Stipend | Uncommon | Specialists cost half upkeep | |
| Builder Contracts | Uncommon | Upgrades ◆10 off | |
| Express Lanes | Uncommon | Convoys 50% faster; +1 corridor per node | |
| Long Fuses | Uncommon | Breached, Shaken, Cut off and Grounded last 50% longer | **new** |
| Tiebreaker Sigil | Rare | You win tied attacks | |
| Phoenix Clause | Rare | Once every 3 min, a capture refunds its Drones | |
| Hollow Crown | Rare | Commander rescue window +90 s | |
| Stillness Engine | Rare | Mobilization 25% slower | |
| Twin Minds | Rare | Commander's own effects count twice | |
| Conscription Edict | Rare | 12 Drones upkeep-free | |
| War Academy | Rare | Recruits arrive upgraded | |
| Staff College | Rare | Every specialist +1 Power | |
| Salvage Protocol | | (◆1 per kill everywhere) | **cut**: Reclaimer's job |
| Veteran Cadre | | (all wins lose 2 fewer) | **cut**: Warden's job |
| Null Lance | | (all attacks ignore 3 shield) | **cut**: Siegebreaker's job |
| Long Night | | (all fleets unseen) | **cut**: Ghost's job, and too strong globally |
| Fourth Chair | | (+1 specialist per fleet) | **cut**: protects the three-specialist limit |

**Faction relics** (rare; the reward for capturing that faction's Warlord):

| Faction | Relic | Effect |
|---|---|---|
| Ferrum | Kharn's Seal | Every node's shield +2 |
| Crimson | Ashka's Drum | Stations build Drones 2 s faster |
| Lumen | Ione's Lens | Every attack on your nodes loses 1 Drone before landing |
| Veil | Whisper's Cloak | Probes and convoys are unseen |
| Drift | Sura's Compass | All fleets 15% faster |
| Ossuary Choir | Choir Shard | Specialists keep their experience when captured |
| Kestrel | Firing Tables | Missiles cost half and reach 50% further |
| Tithe | Tithe Ledger | ◆+10/min |

---

## 6. Research
One tree with five branches and six tiers. Tiers 3 and 5 are doctrine pairs: choosing one locks out the other for the run. Each time the bar fills you choose 1 of 3 cards from the frontier.

| Tier | Industry | Military | Logistics | Intelligence | Command |
|---|---|---|---|---|---|
| 1 | Deep Mining: planets ◆+1/min | Combat Drill: all attacks +1 | Improved Engines: fleets +15% | Signal Analysis: read every fleet you detect | Officer Academy: specialists half upkeep |
| 2 | Automation: mines and labs need no Drones working | Shield Harmonics: shields recharge twice as fast | Corridor Engineering: corridors half price, +1 per node | Long-Range Sensors: sight +25% | Command Protocols: Commander experience +50%, rescue +45 s |
| 3 | Heavy Industry: upgrades ◆15 off **or** Rationing: 10 Drones upkeep-free | **Breaching Charges:** missiles Breach for 40 s *(changed from Siege Doctrine)* **or** Defence in Depth: +2 defence everywhere | Fold Drive: fleets +25% **or** Mass Transit: convoys twice as fast | Deep Cover: offensive targets shown, mobilization −15% **or** **Silent Running:** probes and convoys unseen *(changed from Black Sky)* | Command Integration: +1 specialist per fleet **or** Talent Scouts: +1 card per recruit offer |
| 4 | Orbital Foundries: stations build 2 s faster | **Field Training:** +50% specialist experience *(changed from Veteran Crews)* | Extra Launch Pads: +1 launch slot everywhere | Listening Posts: sight +25% | War College: every specialist +1 Power |
| 5 | Core Tapping: planets ◆+2/min **or** Conscription: 15 Drones upkeep-free | Shock Assault: all attacks +2 **or** Bulwark Fields: every shield +3 | Carrier Wings: +1 launch slot, fleets +15% **or** Corridor Network: +2 corridors per node, nearly free | **Disruption Cells:** offensives launch 20 s later *(changed from Sabotage Cells)* **or** Broken Ciphers: mobilization −20% | Veterancy: recruits arrive upgraded **or** Honour Guard: +2 defence everywhere, rescue +60 s |
| 6 | Arcologies: ◆+12/min | **Total Mobilization:** every specialist commands 4 more *(changed from Massed Formations)* | Jump Gates: fleets +40% | Panopticon: sight +50%, every intent in sight shows its target | Living Legends: every specialist +1 Power and 6 more Command |

What changed and why:
- **Siege Doctrine, Veteran Crews, Black Sky, Sabotage Cells, Massed Formations:** each copied a specialist's job everywhere, so each is replaced.
- **Command Integration** is the one effect left that adds a crew place. It's a tier-3 doctrine, so it costs Talent Scouts. Keep it or cut it?

---

## 7. Factions (8 in the pool, 3 per run, identity revealed on first discovery)
| Faction | Plays | Hurts | Weak to | Specialists it fields |
|---|---|---|---|---|
| **Ferrum Directorate** | Shields and defence | Swarm | Siege | Castellan, Gunner, Engineer |
| **Crimson Warhost** | Massed waves | Bulwark (waves outlast cooldowns) | Gunner, Martyr | Drill Sergeant, Tactician, Legate |
| **Lumen Technocracy** | Every node bleeds attackers | Small elite fleets, Blitz | Swarm | Sentinel, Scientist, Scout |
| **Veil Syndicate** | Unseen raids on specialists | Engine, blind players | Scout, Sentinel | Ghost, Strategist, Illusionist |
| **Drift Clans** | Fast expansion | Slow starts | Early aggression | Admiral, Pirate, Spearhead |
| **Ossuary Choir** *(new)* | Martyr everywhere; their dead rise as Drones | Veterans | Swarm | Martyr, Medic, Commandant |
| **Kestrel Batteries** *(new)* | Missile silos, long-range strikes | Bulwark | Blitz: reach the silos fast | Siegebreaker, Interdictor, Jammer |
| **Tithe Compact** *(new)* | Rich; buys mercenaries; outgrows you late | Engine, slow builds | Early raids on its mines | Broker, Quartermaster, a random rare |

---

## 8. Archive
Twelve station events, one per fragment. Each shows the fragment as its story and offers 2–3 choices, each with a real cost or reward (relic, research, recruit, Ultanium, mobilization, a hold, an ambush). Fragments found stay in the Codex across runs; each run deals the missing ones first.

---

## 9. Open questions
1. **Barracks:** how much faster? Suggestion: Drones 3 s faster (stacking with Barracks level).
2. **Pirate interception:** are the rules in section 3 right? Should convoys also be interceptable?
3. **Command Integration (+1 crew place):** keep it as a doctrine choice, or cut it?
4. **Commander:** keep 5 levels with perks, or move to the same two-form system?
5. **Starting Commander identities:** Tactician, Admiral, Castellan, Quartermaster, Engineer, Scout. Right set?
