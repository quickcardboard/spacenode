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

- **Officers** (formerly specialists) have **Power** (added to attack aboard a fleet, to defence where stationed), **Command** (the most Drones they can lead into an attack) and one effect that works only on their own node or fleet. A fleet carries three. Each upgrades once, after 10 experience earned in battle (more for winning while outnumbered or against officers, and for holding valuable nodes); captured officers lose their experience. Officers are unique. Recruit offers roll each card's rarity (Common 55%, Uncommon 30%, Rare 15%, with a pity bonus toward Rares); skipping pays Ultanium. Upkeep is by rarity.
- **Side-wide effects** come only from research, relics and the Commander's archetype. The Commander is one officer per synergy group plus an archetype.
- **Combat:** Drones + crew Power + bonuses must beat Drones + shield + defenders' Power and defence. Whole numbers only. A fleet engages from just outside the node and fights for about two seconds before the result lands.
- **Lasting effects:** Breached (no shield), Shaken (officers there do nothing), Cut off (no reinforcements), Grounded (cannot launch), Momentum (bonus for the next attack from there), Fortified (defence after holding). Sentinels picket passing fleets; a stationed Pirate intercepts passing enemy fleets on its own when it can win and brings their officers back as prisoners. Every chip under a node can be tapped.
- **Nodes:** Mine or Barracks level, Shield level, and one specialty: Refinery, Lab or Habitat for planets; Fortress, Missile Silo or Flagship for stations. Jobs queue (four deep) and are paid when queued. The **Flagship** (one per side, capturable) sails where you drag it; while sailing it cannot be targeted or launch but builds Drones; it anchors for 20 s on arrival, rests 4 minutes before it may sail again, and cannot leave while an enemy fleet is heading for it.
- **Supply and Bastion:** Rally on a node pulls the spare Drones of every Supply node, once; Bastions keep theirs (double-tap a node). Corridors double travel speed and need no launch slot.
- **Decisions never interrupt:** recruits, events, archive, relics, research and perks wait in the Log (top right) with a badge. Only the opening Commander choice is full screen.
- **Coalition:** three factions drawn from eight, plus an Archon; a faction's identity is revealed on first discovery. They counterattack fresh captures, strike several at once from stage 3, and aim at what is worth most. Take a faction's capital and it collapses: its relic is yours and its Warlord can be turned for a large sum. A faction below 30% of your strength collapses too; once the Coalition is beaten the Archon offers terms.
- **The archive:** events on neutral stations are fragments of the Reach's history, each with a decision; they stay found across runs (the Codex).
- The game runs 25% faster than its simulation clock at 1× speed.

## Layout

- `src/sim/` is the game: deterministic, seeded, 10 Hz, no DOM. `config.ts` holds every balance number; `content.ts` holds specialists, relics, research, factions and events.
- `src/ui/render.ts` draws the 3D map (Three.js) and battle effects; `src/ui/ui.ts` builds the panels; `src/ui/sound.ts` synthesizes the sound effects; `src/ui/console.ts` is the tuning console (press ` on desktop); `src/main.ts` is input and the loop.
- `scripts/bot.ts` plays full runs without a browser.

## Not built

A tutorial, offline install, skirmish and multiplayer.
