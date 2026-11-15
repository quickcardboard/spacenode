# SpaceNodes (redesign v2)

Single-player roguelike RTS for phone and desktop browsers, rebuilt around specialists: recruit them, level them up, choose who leads which attack, and take the Citadel before the Coalition's mobilization overwhelms you. Target run length 40–60 minutes.

The earlier design lives on the `claude/hopeful-euler-cf2v3r` branch.

## Run it

```bash
npm install
npm run dev      # play at the printed URL
npm run pages    # rebuild the playable copy in docs/
npm run bot -- 10 greedy 0   # headless balance runs: [count] [greedy|idle] [threat level]
```

## Rules

- **Specialists** are passive. Each has a **Power** (added to attack when aboard a fleet, to defence where stationed), a **Command** number (how many Drones they can lead into an attack), and one effect. They earn **five levels** in battle: +1 Power at 2 and 4, the upgraded form at 3, mastery (the passive counts twice) at 5, +4 Command every level. Some effects fire on their own when they fit (a Drill Sergeant trains Drones, a Rearguard pulls a failed attack home, an Illusionist hides its node). Any number can stand at a node; a fleet carries three. Recruit 1 of 3 (or skip) at every neutral planet, plus one at the start.
- **Attacks need leaders.** An attack carries at most its crew's total Command in Drones. A fleet without a specialist can only reinforce, or go as a probe with no Drones.
- **Combat:** Drones + crew Power + bonuses must beat Drones + shield + defenders' Power. Whole numbers only. A fleet engages from a short distance and fights for about two seconds before the result lands, so defenders can still be reinforced.
- **Nodes:** planets have a Mine level, stations a Barracks level; both have a Shield level; each takes one specialty for good (Refinery, Lab, Habitat / Missile Silo, Fortress, Launch Bay). Jobs queue up to four deep and are paid when queued. One station can build the **Flagship**, a station that sails where you drag it; specialists near it fight a level higher.
- **Economy:** mines pay Ultanium; every Drone and specialist costs upkeep. Stations build Drones while upkeep stays under a share of income; Habitats feed 10 Drones each. One button pauses all production. Broke with negative income means Drones desert.
- **Launch slots** replace ships: two per station (three with a Launch Bay), one per planet.
- **Supply and Bastion:** Rally on a node pulls the spare Drones of every Supply node, once; Bastions keep theirs (double-tap a node to switch). Nodes always keep the Drones their mines and labs need. Corridors double travel speed and need no launch slot: drag between two of your nodes to build one.
- **Research:** Labs fill a bar; each time it fills you pick 1 of 3 cards from the edge of one global tree. Doctrine pairs lock each other out.
- **Coalition:** three factions and an Archon, playing by the same rules (their attacks are led by Captains). They counterattack nodes you have just taken, strike two or three at once from stage 3, and aim at what is worth most. A faction whose capital falls, or that drops below 30% of your strength, collapses: its nodes go neutral and the specialists it held come home. Once the Coalition is beaten the Archon offers terms (a decisive victory).
- **The archive:** events on neutral stations recover fragments of the Reach's history. They stay found across runs (the Codex).

## Layout

- `src/sim/` is the game: deterministic, seeded, 10 Hz, no DOM. `config.ts` holds every balance number; `content.ts` holds specialists, relics, research, factions and events.
- `src/ui/render.ts` draws the 3D map (Three.js) and battle effects; `src/ui/ui.ts` builds the panels; `src/ui/sound.ts` synthesizes the sound effects; `src/ui/console.ts` is the tuning console (press ` on desktop); `src/main.ts` is input and the loop.
- `scripts/bot.ts` plays full runs without a browser.

## Not built

A tutorial, offline install, skirmish and multiplayer.
