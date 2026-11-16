(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const X={dt:.1,fleetSpeed:1.2,startUlt:30,startDrones:6,baseIncome:8,freeBase:8,mineOut:[0,3,5.5,8],sizeMult:[1,1.3,1.7],refineryMult:1.5,labRp:4,labWorkers:2,habitatFree:10,upkeepDrone:.6,upkeepPower:.5,armyShare:.75,desertSecs:4,lvCost:[0,0,30,80],lvTime:40,shCost:[0,15,35,70],shTime:25,specCost:40,specTime:40,missileCost:100,missileTime:60,missileRange:170,missileKill:6,missileSpeed:2.5,prodSecs:[0,10,7,5],shieldPerLv:2,shieldRegenSecs:6,slotsStation:2,slotsPlanet:1,crew:3,queueMax:4,fortressShield:4,fortressFov:.4,flagshipCost:120,cmdBase:8,cmdPerLvl:4,cmdCommander:12,captainCmd:10,captainCmdStage:5,upXp:10,xpWin:1,xpClose:2,xpOdds:2,closeBy:3,xpHold:[1,2,3],upkeepRarity:[1,2,3,4],upkeepUp:1,offerOdds:[55,30,15],offerPity:3,skipUlt:20,skipUltStage:5,warlordCost:120,warlordCostStage:30,warlordRansom:40,jammerRange:60,interceptSpeed:1.6,interceptReach:2,engageDist:13,fightSecs:1.8,flagshipSpeed:.45,anchorSecs:20,sailCooldown:240,rallyBatch:4,fovInner:{planet:[42,46,52],station:48},fovOuter:{planet:[72,78,88],station:82},fleetFov:[26,46],corridorCost:30,corridorTime:45,corridorRange:150,corridorMax:2,corridorSpeed:2,rescueSecs:150,ransom:15,recruitCost:25,rpBase:6,rpStep:3,xpLevels:[0,6,16,30,48],nodes:36,neutralShield:[1,2,3],stageSecs:420,graceSecs:300,offInterval:[0,240,210,180,150,120],offCommit:[0,.5,.6,.7,.8,.9],gatherSecs:45,stageFree:6,surgeFree:12,captureSetback:.15,aegisPerLayer:5,aiMissileSecs:120,counterSecs:150,counterWindow:120,surrender:.3,terms:.25},Sp=1.25,nn={refinery:{name:"Refinery",on:"planet",desc:"Mine output +50%."},lab:{name:"Lab",on:"planet",desc:"Research. Needs 2 Drones working."},habitat:{name:"Habitat",on:"planet",desc:"10 of your Drones cost no upkeep, anywhere."},fortress:{name:"Fortress",on:"station",desc:"+4 shield; sees 40% further."},silo:{name:"Missile Silo",on:"station",desc:"Builds missiles. A missile Breaches the target and kills 6 Drones."},flagship:{name:"Flagship",on:"station",desc:"This station becomes your Flagship and can sail. One per side."}},Bl={siege:{name:"Siege",color:"#dd7a63"},swarm:{name:"Swarm",color:"#e8a85a"},blitz:{name:"Blitz",color:"#7fb2dc"},raid:{name:"Raiders",color:"#6fc3c0"},veteran:{name:"Veterans",color:"#b7c4a4"},bulwark:{name:"Bulwark",color:"#8fc79a"},engine:{name:"Engine",color:"#e3c565"},shadow:{name:"Shadow",color:"#b39ad6"},glue:{name:"Glue",color:"#e9a9c9"},warlord:{name:"Warlord",color:"#ffffff"},coalition:{name:"Coalition",color:"#aab2c0"}},yp=["Common","Uncommon","Rare","Warlord"],De={},Ve=n=>De[n.id]={...n,color:n.color||Bl[n.group].color};Ve({id:"siegebreaker",name:"Siegebreaker",tag:"Sb",group:"siege",rarity:1,pow:2,cmd:8,starter:!0,role:"Breach",text:"Arrival: Breached 20 s",long:"When their fleet arrives, the target is Breached for 20 s: its shield drops to 0 and cannot recharge.",loc:{breach:20},up:{text:"Breached 40 s",loc:{breach:20}}});Ve({id:"saboteur",name:"Saboteur",tag:"Sa",group:"siege",rarity:1,pow:2,cmd:8,role:"Shake",text:"Arrival: Shaken 30 s",long:"When their fleet arrives, the target is Shaken for 30 s: its officers add no Power and their effects stop.",loc:{shake:30},up:{text:"Shaken 60 s",loc:{shake:30}}});Ve({id:"interdictor",name:"Interdictor",tag:"In",group:"siege",rarity:1,pow:2,cmd:8,role:"Cut off",text:"Arrival: Cut off 45 s",long:"When their fleet arrives, the target is Cut off for 45 s: no reinforcements can land there.",loc:{cutoff:45},up:{text:"Cut off 90 s",loc:{cutoff:45}}});Ve({id:"vanguard",name:"Vanguard",tag:"Va",group:"siege",rarity:2,pow:3,cmd:10,role:"Leader",text:"Crew Power counts double",long:"The Power of every officer in their fleet, their own included, counts twice in the attack.",loc:{crew2:1},up:{text:"Counts triple",loc:{crew2:1}}});Ve({id:"tactician",name:"Tactician",tag:"Ta",group:"swarm",rarity:1,pow:3,cmd:12,starter:!0,role:"Massed attack",text:"+1 attack per 4 Drones, max 4",long:"Their fleet gains +1 attack for every 4 Drones in it, up to +4.",loc:{per4:4},up:{text:"Max 8",loc:{per4:4}}});Ve({id:"sergeant",name:"Drill Sergeant",tag:"Dr",group:"swarm",rarity:1,pow:1,cmd:10,role:"Training",text:"+1 Drone here every 30 s",long:"Trains a Drone at their node every 30 s while your production runs, on planets too.",loc:{train:2},up:{text:"Every 20 s",loc:{train:1}}});Ve({id:"legate",name:"Legate",tag:"Lg",group:"swarm",rarity:2,pow:1,cmd:18,role:"Command",text:"Commands 18",long:"A born organiser: commands 18 Drones.",up:{text:"Commands 28",cmd:10}});Ve({id:"admiral",name:"Admiral",tag:"Ad",group:"blitz",rarity:0,pow:2,cmd:10,starter:!0,role:"Speed",text:"Fleet 25% faster",long:"Their fleet flies 25% faster.",loc:{speed:.25},up:{text:"50% faster",loc:{speed:.25}}});Ve({id:"smuggler",name:"Smuggler",tag:"Sm",group:"blitz",rarity:0,pow:1,cmd:8,role:"Logistics",text:"Uses no launch slot",long:"Their fleet does not hold a launch slot while it is away.",loc:{slotFree:1},up:{text:"Also cannot be intercepted",loc:{noIntercept:1}}});Ve({id:"ghost",name:"Ghost",tag:"Gh",group:"blitz",rarity:1,pow:2,cmd:8,role:"Stealth",text:"Fleet unseen",long:"Their fleet is unseen: the enemy cannot react to it or send reinforcements against it.",loc:{stealth:1},up:{text:"Node unreadable 30 s after a win",loc:{hideT:30}}});Ve({id:"spearhead",name:"Spearhead",tag:"Sp",group:"blitz",rarity:1,pow:2,cmd:10,role:"Momentum",text:"Win: Momentum +3, 30 s",long:"After a win, the captured node has Momentum for 30 s: the next attack launched from it gets +3.",loc:{mom:3,momT:30},up:{text:"+5, 45 s",loc:{mom:2,momT:15}}});Ve({id:"jammer",name:"Jammer",tag:"Jm",group:"blitz",rarity:1,pow:1,cmd:8,role:"Grounding",text:"Win: enemies nearby Grounded 45 s",long:"After a win, enemy nodes within 60 of the captured node are Grounded for 45 s: they cannot launch fleets.",loc:{ground:45},up:{text:"Grounded 90 s",loc:{ground:45}}});Ve({id:"strategist",name:"Strategist",tag:"St",group:"blitz",rarity:2,pow:2,cmd:8,role:"Surprise",text:"+5 attack if unseen",long:"Their fleet gains +5 attack if it arrives unseen.",loc:{ambush:5},up:{text:"+9",loc:{ambush:4}}});Ve({id:"pirate",name:"Pirate",tag:"Pi",group:"raid",rarity:1,pow:2,cmd:10,starter:!0,role:"Interception",text:"Intercepts passing fleets",long:"Stationed at a node, launches automatically against enemy fleets flying within 40, with just enough Drones to win, and brings their officers back as prisoners. Never launches a fight it cannot win.",loc:{intercept:40},up:{text:"Range 70",loc:{intercept:30}}});Ve({id:"warden",name:"Warden",tag:"Wd",group:"veteran",rarity:0,pow:2,cmd:10,starter:!0,role:"Survivors",text:"Wins lose 2 fewer",long:"Their fleet loses 2 fewer Drones when it wins.",loc:{surv:2},up:{text:"4 fewer",loc:{surv:2}}});Ve({id:"reclaimer",name:"Reclaimer",tag:"Rc",group:"veteran",rarity:1,pow:1,cmd:8,role:"Salvage",text:"◆1 per enemy Drone killed",long:"Their fleet's wins pay 1 Ultanium per enemy Drone destroyed.",loc:{salvage:1},up:{text:"◆2",loc:{salvage:1}}});Ve({id:"rearguard",name:"Rearguard",tag:"Rg",group:"veteran",rarity:1,pow:2,cmd:10,role:"Retreat",text:"Failed attack: half come home",long:"If their attack fails, the fleet flies home with half its Drones instead of being lost. Recharges in 2:30.",charge:{on:"fail",cd:150,mods:{retreat:1}},up:{text:"Recharges 1:15",cd:75}});Ve({id:"medic",name:"Medic",tag:"Me",group:"veteran",rarity:1,pow:1,cmd:6,role:"Rescue",text:"Beaten: officers escape home",long:"When their node or fleet is beaten, every officer with them escapes home. Recharges in 3:00.",charge:{on:"fall",cd:180,mods:{medic:1}},up:{text:"Recharges 1:30",cd:90}});Ve({id:"castellan",name:"Castellan",tag:"Cs",group:"bulwark",rarity:0,pow:2,cmd:6,starter:!0,role:"Shields",text:"+3 shield, fast recharge",long:"Shields at their node hold 3 more and recharge twice as fast.",loc:{shield:3,regen:1},up:{text:"+5 shield",loc:{shield:2}}});Ve({id:"commandant",name:"Commandant",tag:"Co",group:"bulwark",rarity:0,pow:2,cmd:8,role:"Fortify",text:"Hold: Fortified +3, 60 s",long:"Each time their node holds a battle it is Fortified: +3 defence for 60 s.",loc:{fort:3,fortT:60},up:{text:"+5, 90 s",loc:{fort:2,fortT:30}}});Ve({id:"sentinel",name:"Sentinel",tag:"Se",group:"bulwark",rarity:1,pow:2,cmd:6,role:"Picket",text:"Passing enemy fleets lose 2",long:"Enemy fleets flying within 35 of their node lose 2 Drones, once per fleet.",loc:{picket:2,picketR:35},up:{text:"Lose 3, range 55",loc:{picket:1,picketR:20}}});Ve({id:"martyr",name:"Martyr",tag:"Ma",group:"bulwark",rarity:1,pow:1,cmd:6,role:"Attrition",text:"Node falls: attacker loses 5 more",long:"If their node falls, the attacker loses 5 more Drones.",loc:{martyr:5},up:{text:"8 more",loc:{martyr:3}}});Ve({id:"gunner",name:"Gunner",tag:"Gu",group:"bulwark",rarity:2,pow:2,cmd:6,role:"Flak",text:"Attackers lose 1 per 5 Drones",long:"Every fleet attacking their node loses 1 Drone for every 5 in it before landing.",loc:{flak:5},up:{text:"1 per 3",loc:{flak:-2}}});Ve({id:"broker",name:"Broker",tag:"Br",group:"engine",rarity:0,pow:1,cmd:4,role:"Income",text:"This node ◆+4/min",long:"Their node yields 4 more Ultanium per minute.",loc:{nodeInc:4},up:{text:"◆+7/min",loc:{nodeInc:3}}});Ve({id:"quartermaster",name:"Quartermaster",tag:"Qm",group:"engine",rarity:0,pow:1,cmd:8,role:"Supply",text:"8 Drones here upkeep-free",long:"Up to 8 Drones at their node cost no upkeep.",loc:{free:8},up:{text:"14",loc:{free:6}}});Ve({id:"engineer",name:"Engineer",tag:"En",group:"engine",rarity:0,pow:1,cmd:6,starter:!0,role:"Construction",text:"Builds 2× faster, ◆10 off",long:"Jobs at their node build twice as fast and cost 10 less.",loc:{build:1,upgCost:10},up:{text:"◆20 off",loc:{upgCost:10}}});Ve({id:"surveyor",name:"Surveyor",tag:"Sv",group:"engine",rarity:0,pow:1,cmd:6,role:"Prospecting",text:"Captured planets start at Mine 2",long:"Planets their fleet captures start with at least Mine level 2.",loc:{survey:1},up:{text:"Mine 3",loc:{survey:1}}});Ve({id:"diplomat",name:"Diplomat",tag:"Di",group:"engine",rarity:0,pow:1,cmd:8,role:"Expansion",text:"+4 attack vs neutral",long:"Their fleet gains +4 attack against neutral nodes.",loc:{vsNeutral:4},up:{text:"+7",loc:{vsNeutral:3}}});Ve({id:"scientist",name:"Scientist",tag:"Sn",group:"engine",rarity:1,pow:1,cmd:4,role:"Research",text:"Research +2/min",long:"Adds 2 research per minute where they are stationed.",loc:{research:2},up:{text:"+4/min",loc:{research:2}}});Ve({id:"scout",name:"Scout",tag:"Sc",group:"shadow",rarity:0,pow:1,cmd:8,starter:!0,role:"Vision",text:"Sees 40% further",long:"Their node or fleet sees 40% further.",loc:{fov:.4},up:{text:"Reads fleets in sight",loc:{readFleets:1}}});Ve({id:"oracle",name:"Oracle",tag:"Or",group:"shadow",rarity:1,pow:1,cmd:4,role:"Foresight",text:"Shows offensive targets in sight",long:"Coalition offensives forming within their sight show their target before they launch.",loc:{oracle:1},up:{text:"Sight doubled",loc:{oracle:1}}});Ve({id:"illusionist",name:"Illusionist",tag:"Il",group:"shadow",rarity:1,pow:1,cmd:6,role:"Deception",text:"This node unreadable",long:"Their node cannot be read: enemies see it only as detected, and the Coalition overestimates it.",loc:{mask:1},up:{text:"Also +3 defence",loc:{def:3}}});Ve({id:"inquisitor",name:"Inquisitor",tag:"Iq",group:"shadow",rarity:1,pow:1,cmd:4,role:"Prisoners",text:"Prisoners here recruit free",long:"Prisoners held at their node can be recruited for free.",loc:{recruitFree:1},up:{text:"Prisoners here pay ◆2/min",loc:{prisonInc:2}}});Ve({id:"echo",name:"Echo",tag:"Ec",group:"glue",rarity:2,pow:1,cmd:6,role:"Amplifier",text:"Doubles the best officer beside it",long:"Doubles the effect of the strongest other officer at their node or in their fleet.",up:{text:"Power 3",pow:2}});Ve({id:"kharn",name:"Overseer Kharn",tag:"Kh",group:"warlord",rarity:3,pow:4,cmd:12,faction:"ferrum",color:"#c98a3c",role:"Ferrum Warlord",text:"+6 shield; cannot be Breached",long:"Shields at their node hold 6 more and the node can never be Breached.",loc:{shield:6,noBreach:1},up:{text:"+9 shield",loc:{shield:3}}});Ve({id:"ashka",name:"Warlord Ashka",tag:"As",group:"warlord",rarity:3,pow:5,cmd:20,faction:"crimson",color:"#d2604a",role:"Crimson Warlord",text:"+1 attack per 4 Drones, max 10",long:"Their fleet gains +1 attack for every 4 Drones in it, up to +10.",loc:{per4:10},up:{text:"Commands 30",cmd:10}});Ve({id:"ione",name:"Prime Calculator Ione",tag:"Io",group:"warlord",rarity:3,pow:3,cmd:10,faction:"lumen",color:"#e3c565",role:"Lumen Warlord",text:"Attackers here lose 4",long:"Every fleet attacking their node loses 4 Drones before it lands.",loc:{lance:4},up:{text:"Lose 6",loc:{lance:2}}});Ve({id:"whisper",name:"The Whisper",tag:"Wh",group:"warlord",rarity:3,pow:3,cmd:10,faction:"veil",color:"#9a7cc4",role:"Veil Warlord",text:"Fleet unseen; +6 if unseen",long:"Their fleet is unseen and gains +6 attack when it arrives unseen.",loc:{stealth:1,ambush:6},up:{text:"+10",loc:{ambush:4}}});Ve({id:"sura",name:"Clanmother Sura",tag:"Su",group:"warlord",rarity:3,pow:3,cmd:14,faction:"drift",color:"#6ea6d6",role:"Drift Warlord",text:"Fleet 60% faster, no launch slot",long:"Their fleet flies 60% faster and holds no launch slot.",loc:{speed:.6,slotFree:1},up:{text:"90% faster",loc:{speed:.3}}});Ve({id:"cantor",name:"The Cantor",tag:"Ca",group:"warlord",rarity:3,pow:3,cmd:12,faction:"choir",color:"#cfc6b8",role:"Choir Warlord",text:"Win: half the dead join you",long:"When their fleet wins, half the defending Drones destroyed rise and join it.",loc:{raiseWin:.5},up:{text:"All of them",loc:{raiseWin:.5}}});Ve({id:"voss",name:"Battery-Marshal Voss",tag:"Vo",group:"warlord",rarity:3,pow:4,cmd:10,faction:"kestrel",color:"#9fb4c8",role:"Kestrel Warlord",text:"Arrival: Breached and Shaken 30 s",long:"When their fleet arrives, the target is Breached and Shaken for 30 s.",loc:{breach:30,shake:30},up:{text:"60 s",loc:{breach:30,shake:30}}});Ve({id:"mercer",name:"Tithe-Lord Mercer",tag:"Mr",group:"warlord",rarity:3,pow:2,cmd:8,faction:"tithe",color:"#d9b26a",role:"Tithe Warlord",text:"This node ◆+10/min; ◆2 per kill",long:"Their node yields 10 more Ultanium per minute, and their fleet's wins pay 2 Ultanium per enemy Drone destroyed.",loc:{nodeInc:10,salvage:2},up:{text:"◆+16/min",loc:{nodeInc:6}}});Ve({id:"archon",name:"Archon",tag:"A",group:"coalition",rarity:3,pow:6,cmd:20,hidden:!0,color:"#e07aa0",role:"Coalition Commander",text:"+3 defence at the Citadel",long:"+3 defence at the Citadel.",loc:{def:3},up:{text:""}});Ve({id:"captain",name:"Captain",tag:"Cp",group:"coalition",rarity:0,pow:1,cmd:10,hidden:!0,role:"Coalition fleet leader",text:"Leads a Coalition fleet",long:"Leads a Coalition fleet. Commands more Drones as mobilization rises.",up:{text:""}});const zl=Object.values(De).filter(n=>!n.hidden&&n.group!=="warlord").map(n=>n.id),bp=Object.values(De).filter(n=>n.starter).map(n=>n.id),wp=Object.fromEntries(Object.values(De).filter(n=>n.faction).map(n=>[n.faction,n.id])),Ns={marshal:{id:"marshal",name:"Marshal",blurb:"Leads from the front.",text:"+2 attack on their fleet.",loc:{atk:2}},pathfinder:{id:"pathfinder",name:"Pathfinder",blurb:"Controls tempo.",text:"Their fleet 30% faster; all nodes see 20% further.",loc:{speed:.3},glob:{fov:.2}},warden:{id:"warden",name:"Keeper",blurb:"Holds the line.",text:"+4 defence where they stand; shields there recharge twice as fast.",loc:{def:4,regen:1}},industrialist:{id:"industrialist",name:"Industrialist",blurb:"Builds an empire.",text:"◆+4/min; every job ◆8 off.",glob:{income:4,upgCost:8}},corsair:{id:"corsair",name:"Corsair",blurb:"Lives off the enemy.",text:"Their wins pay ◆1 per kill and lose 2 fewer Drones.",loc:{salvage:1,surv:2}},savant:{id:"savant",name:"Savant",blurb:"Wins with ideas.",text:"Research +3/min; officers cost half upkeep.",glob:{rp:3,specUpkeep:.5}}},Ep=3,Tf=[{id:"ironwill",name:"Iron Will",desc:"Rescue window +45 s.",glob:{rescue:45}},{id:"march",name:"Forced March",desc:"Commander's fleet 20% faster.",loc:{speed:.2}},{id:"tithe",name:"Tithe",desc:"◆+3/min.",glob:{income:3}},{id:"hard",name:"Hardliner",desc:"+3 defence where the Commander stands.",loc:{def:3}},{id:"shock",name:"Shock Tactics",desc:"Commander's attacks +2.",loc:{atk:2}},{id:"survivor",name:"Survivor",desc:"Commander's wins lose 2 fewer Drones.",loc:{surv:2}},{id:"farsight",name:"Far Sight",desc:"All nodes see 15% further.",glob:{fov:.15}},{id:"requisition",name:"Requisition",desc:"Every job ◆8 off.",glob:{upgCost:8}},{id:"sapper",name:"Sapper",desc:"Commander's arrival: Breached 10 s.",loc:{breach:10}},{id:"magnate",name:"Magnate",desc:"Every planet ◆+1/min.",glob:{inc:1}},{id:"commissary",name:"Commissary",desc:"6 Drones upkeep-free.",glob:{freeDrones:6}},{id:"drill",name:"Drillmaster",desc:"The station the Commander stands on builds Drones 3 s faster.",loc:{prodSecs:3}},{id:"mentor",name:"Mentor",desc:"Officers cost half upkeep.",glob:{specUpkeep:.5}}],hn={},st=(n,e,t,i,s)=>hn[n]={id:n,name:e,rarity:t,desc:i,mods:s};st("extractor","Deep-Core Extractor","common","Every planet ◆+1/min.",{inc:1});st("foundry","Drone Foundry Matrix","common","Stations build Drones 1 s faster.",{prodSecs:1});st("surveyor","Quantum Surveyor","common","All nodes see 20% further.",{fov:.2});st("propulsion","Emergency Propulsion Core","common","All fleets 12% faster.",{speed:.12});st("scaffold","Modular Scaffolds","common","Jobs build 50% faster.",{build:.5});st("rations","Ration Stores","common","6 Drones upkeep-free.",{freeDrones:6});st("bulkhead","Hardened Bulkheads","common","Every shield +1.",{shield:1});st("ledger","Ration Ledger","common","◆+4/min.",{income:4});st("mirror","Signal Mirror","common","Offensive targets show before they launch.",{warn:1});st("manuals","Field Manuals","common","Officers earn 50% more experience.",{xp:.5});st("adaptive","Adaptive Shield Network","uncommon","Captured nodes start with 3 shield.",{capShield:3});st("warchest","War Chest","uncommon","◆8 per capture.",{capUlt:8});st("phalanx","Phalanx Doctrine","uncommon","All attacks +1.",{atk:1});st("lattice","Regrowth Lattice","uncommon","Shields +1 and recharge twice as fast.",{regen:1,shield:1});st("charter","Bulwark Charter","uncommon","+1 defence at every node.",{def:1});st("stipend","Officers' Stipend","uncommon","Officers cost half upkeep.",{specUpkeep:.5});st("contracts","Builder Contracts","uncommon","Every job ◆10 off.",{upgCost:10});st("lanes","Express Lanes","uncommon","Corridor travel 50% faster; +1 corridor per node.",{laneSpeed:.5,corridorMax:1});st("fuses","Long Fuses","uncommon","Breached, Shaken, Cut off and Grounded you cause last 50% longer.",{fuse:.5});st("sigil","Tiebreaker Sigil","rare","You win tied attacks.",{ties:1});st("phoenix","Phoenix Clause","rare","Once every 3 min, a capture refunds its Drones.",{refund:180});st("crown","Hollow Crown","rare","Commander rescue window +90 s.",{rescue:90});st("stillness","Stillness Engine","rare","Mobilization 25% slower.",{mobSlow:.25});st("twin","Twin Minds","rare","The Commander's own effects count twice.",{cmdDouble:1});st("levy","Conscription Edict","rare","12 Drones upkeep-free.",{freeDrones:12});st("academy","War Academy","rare","Recruits arrive upgraded.",{recruitUp:1});st("college","Staff College","rare","Every officer +1 Power.",{powAll:1});st("seal","Kharn's Seal","faction","Every shield +2.",{shield:2});st("drum","Ashka's Drum","faction","Stations build Drones 2 s faster.",{prodSecs:2});st("ilens","Ione's Lens","faction","Every attack on your nodes loses 1 Drone before landing.",{lance:1});st("cloak","Whisper's Cloak","faction","Probes and corridor transfers are unseen.",{quiet:1});st("compass","Sura's Compass","faction","All fleets 15% faster.",{speed:.15});st("shard","Choir Shard","faction","Officers keep their experience when captured.",{keepXp:1});st("tables","Firing Tables","faction","Missiles cost half and reach 50% further.",{missileCheap:.5,missileRange:.5});st("tithe","Tithe Ledger","faction","◆+10/min.",{income:10});const $t={},Ze=(n,e,t,i,s,r,o,a)=>$t[n]={id:n,name:e,branch:t,tier:i,pre:s,desc:r,mods:o,excl:a};Ze("mining","Deep Mining","Industry",1,void 0,"Every planet ◆+1/min.",{inc:1});Ze("automation","Automation","Industry",2,"mining","Mines and labs need no Drones working.",{noOps:1});Ze("heavy","Heavy Industry","Industry",3,"automation","Every job ◆15 off.",{upgCost:15},"rationing");Ze("rationing","Rationing","Industry",3,"automation","10 Drones upkeep-free.",{freeDrones:10},"heavy");Ze("foundries","Orbital Foundries","Industry",4,"heavy","Stations build Drones 2 s faster.",{prodSecs:2});Ze("megamines","Core Tapping","Industry",5,"foundries","Every planet ◆+2/min.",{inc:2},"conscription");Ze("conscription","Conscription","Industry",5,"foundries","15 Drones upkeep-free.",{freeDrones:15},"megamines");Ze("arcology","Arcologies","Industry",6,"megamines","◆+12/min.",{income:12});Ze("drill","Combat Drill","Military",1,void 0,"All attacks +1.",{atk:1});Ze("harmonics","Shield Harmonics","Military",2,"drill","Shields recharge twice as fast.",{regen:1});Ze("charges","Breaching Charges","Military",3,"harmonics","Missiles leave the target Breached 40 s.",{missileBreach:20},"depth");Ze("depth","Defence in Depth","Military",3,"harmonics","+2 defence at every node.",{def:2},"charges");Ze("training","Field Training","Military",4,"charges","Officers earn 50% more experience.",{xp:.5});Ze("shock","Shock Assault","Military",5,"training","All attacks +2.",{atk:2},"bulwark");Ze("bulwark","Bulwark Fields","Military",5,"training","Every shield +3.",{shield:3},"shock");Ze("mobilization","Total Mobilization","Military",6,"shock","Every officer commands 4 more.",{cmdAll:4});Ze("engines","Improved Engines","Logistics",1,void 0,"All fleets 15% faster.",{speed:.15});Ze("tunnelling","Corridor Engineering","Logistics",2,"engines","Corridors half price; +1 per node.",{corridorCost:.5,corridorMax:1});Ze("fold","Fold Drive","Logistics",3,"tunnelling","All fleets 25% faster.",{speed:.25},"transit");Ze("transit","Mass Transit","Logistics",3,"tunnelling","Corridor travel twice as fast.",{laneSpeed:1},"fold");Ze("pads","Extra Launch Pads","Logistics",4,"fold","+1 launch slot everywhere.",{slotAdd:1});Ze("carriers","Carrier Wings","Logistics",5,"pads","+1 launch slot; fleets 15% faster.",{slotAdd:1,speed:.15},"network");Ze("network","Corridor Network","Logistics",5,"pads","+2 corridors per node, nearly free.",{corridorMax:2,corridorCost:.25},"carriers");Ze("gates","Jump Gates","Logistics",6,"carriers","All fleets 40% faster.",{speed:.4});Ze("sigint","Signal Analysis","Intelligence",1,void 0,"Read every fleet you detect.",{sigint:1});Ze("sensors","Long-Range Sensors","Intelligence",2,"sigint","Sight +25%.",{fov:.25});Ze("deepcover","Deep Cover","Intelligence",3,"sensors","Offensive targets show; mobilization 15% slower.",{warn:1,mobSlow:.15},"silent");Ze("silent","Silent Running","Intelligence",3,"sensors","Probes and corridor transfers are unseen.",{quiet:1},"deepcover");Ze("posts","Listening Posts","Intelligence",4,"deepcover","Sight +25%.",{fov:.25});Ze("disrupt","Disruption Cells","Intelligence",5,"posts","Coalition offensives launch 20 s later.",{delayOff:20},"ciphers");Ze("ciphers","Broken Ciphers","Intelligence",5,"posts","Mobilization 20% slower.",{mobSlow:.2},"disrupt");Ze("panopticon","Panopticon","Intelligence",6,"disrupt","Sight +50%; every offensive target shows.",{fov:.5,warn:1});Ze("academy","Officer Academy","Command",1,void 0,"Officers cost half upkeep.",{specUpkeep:.5});Ze("protocols","Command Protocols","Command",2,"academy","Commander experience +50%; rescue +45 s.",{cmdXp:.5,rescue:45});Ze("integration","Command Integration","Command",3,"protocols","The Commander commands 12 more.",{cmdCmd:12},"scouts");Ze("scouts","Talent Scouts","Command",3,"protocols","+1 card in every recruit offer.",{offer:1},"integration");Ze("college","War College","Command",4,"integration","Every officer +1 Power.",{powAll:1});Ze("veterancy","Veterancy","Command",5,"college","Recruits arrive upgraded.",{recruitUp:1},"guard");Ze("guard","Honour Guard","Command",5,"college","+2 defence everywhere; rescue +60 s.",{def:2,rescue:60},"veterancy");Ze("legends","Living Legends","Command",6,"veterancy","Every officer +1 Power and commands 6 more.",{powAll:1,cmdAll:6});const zn={ferrum:{id:"ferrum",name:"Ferrum Directorate",color:"#c98a3c",warlord:"kharn",relic:"seal",plays:"Shields and defence; slow to attack.",hurts:"Swarm",weak:"Siege",mods:{shield:2},ai:{aggr:.7,expand:150,react:.9,target:"weak",shield:3,planet:"refinery",station:"fortress"},techs:["harmonics","mining","depth","automation"],specs:["castellan","gunner","engineer"]},crimson:{id:"crimson",name:"Crimson Warhost",color:"#d2604a",warlord:"ashka",relic:"drum",plays:"Massed waves, constant pressure.",hurts:"Bulwark",weak:"Gunner and Martyr",mods:{prodSecs:2,atk:1},ai:{aggr:1.4,expand:110,react:.4,target:"near",shield:1,planet:"habitat",station:"fortress"},techs:["drill","engines","charges","training"],specs:["sergeant","tactician","legate"]},lumen:{id:"lumen",name:"Lumen Technocracy",color:"#e3c565",warlord:"ione",relic:"ilens",plays:"Every node bleeds attackers before they land.",hurts:"Small elite fleets",weak:"Swarm",mods:{lance:2},ai:{aggr:.8,expand:170,react:.7,target:"weak",shield:2,planet:"refinery",station:"fortress"},techs:["sigint","harmonics","drill","engines","charges","mining","training","sensors"],specs:["sentinel","scientist","scout"]},veil:{id:"veil",name:"Veil Syndicate",color:"#9a7cc4",warlord:"whisper",relic:"cloak",plays:"Unseen raids on nodes holding officers.",hurts:"Engine, blind players",weak:"Scout and Sentinel",mods:{stealth:1,speed:.1},ai:{aggr:1,expand:160,react:.6,target:"spec",shield:2,planet:"refinery",station:"fortress"},techs:["engines","drill","sigint","training"],specs:["ghost","strategist","illusionist"]},drift:{id:"drift",name:"Drift Clans",color:"#6ea6d6",warlord:"sura",relic:"compass",plays:"Fast fleets, fast expansion.",hurts:"Slow starts",weak:"Early aggression",mods:{speed:.4},ai:{aggr:1.1,expand:70,react:.8,target:"near",shield:1,planet:"habitat",station:"fortress"},techs:["engines","sensors","drill","mining"],specs:["admiral","pirate","spearhead"]},choir:{id:"choir",name:"Ossuary Choir",color:"#cfc6b8",warlord:"cantor",relic:"shard",plays:"Martyrs everywhere; their dead rise as Drones.",hurts:"Veterans",weak:"Swarm",mods:{martyr:2,raise:1},ai:{aggr:.9,expand:140,react:.7,target:"weak",shield:1,planet:"habitat",station:"fortress"},techs:["harmonics","mining","depth","drill"],specs:["martyr","medic","commandant"]},kestrel:{id:"kestrel",name:"Kestrel Batteries",color:"#9fb4c8",warlord:"voss",relic:"tables",plays:"Missile silos and long-range strikes.",hurts:"Bulwark",weak:"Blitz: reach the silos fast",mods:{missileCheap:.5},ai:{aggr:.9,expand:140,react:.7,target:"weak",shield:2,planet:"refinery",station:"silo"},techs:["charges","sensors","drill","mining"],specs:["siegebreaker","interdictor","jammer"]},tithe:{id:"tithe",name:"Tithe Compact",color:"#d9b26a",warlord:"mercer",relic:"tithe",plays:"Rich; hires mercenary officers; outgrows you late.",hurts:"Engine, slow builds",weak:"Early raids on its mines",mods:{income:8},ai:{aggr:.8,expand:120,react:.8,target:"weak",shield:2,planet:"refinery",station:"fortress"},techs:["mining","automation","heavy","drill"],specs:["broker","quartermaster","legate"]}},is={anvil:{id:"anvil",name:"Archon Vael",title:"the Anvil",desc:"Citadel Aegis layers are 50% stronger and its Drones are built 2 s faster.",mods:{aegisPct:.5,prodSecs:2},pmods:{}},tide:{id:"tide",name:"Archon Seraph",title:"the Tide",desc:"Every Coalition offensive commits more of its Drones.",mods:{offBig:.3},pmods:{}},silence:{id:"silence",name:"Archon Null",title:"the Silence",desc:"Your officers' charges recharge 50% slower. Coalition fleets fly unseen.",mods:{stealth:1},pmods:{cdSlow:.5}}},pn={},Pn=(n,e,t,i,s,r)=>pn[n]={id:n,name:e,on:t,text:i,choices:s,lore:r};Pn("lab","Abandoned Research Facility","any","Sealed laboratories, still powered. The archive doors are marked with a hazard glyph nobody recognises.",[{label:"Restore the facility",desc:"Choose a technology.",ult:25,fx:[["tech"]]},{label:"Salvage it",desc:"◆+35.",fx:[["ult",35]]},{label:"Open the restricted archive",desc:"Choose an uncommon relic. Automata attack with 6 Drones in 40 s.",fx:[["relic","uncommon"],["ambush",6]]},{label:"Let the Scientist decode it",desc:"Choose a technology and a common relic.",req:"scientist",fx:[["tech"],["relic","common"]]}]);Pn("fortress","Ancient Fortress","any","The guns are silent but the targeting grid still tracks your fleet.",[{label:"Reactivate the defences",desc:"Hold 90 s with 4 Drones: shield +1 level and an uncommon relic.",fx:[["hold",90,4,[["shield"],["relic","uncommon"]]]]},{label:"Strip the armoury",desc:"+4 Drones here.",fx:[["drones",4]]},{label:"Engineer bypass",desc:"Shield +1 level and a common relic now.",req:"engineer",fx:[["shield"],["relic","common"]]}]);Pn("stranded","Stranded Officers","any","A crippled lifeboat hails you. Its passengers are willing to work for passage.",[{label:"Take one aboard",desc:"Choose one of three officers.",fx:[["spec"]]},{label:"Sell them the fuel",desc:"◆+30.",fx:[["ult",30]]}]);Pn("energy","Unstable Energy Source","planet","The crust hums. Readings climb while you watch.",[{label:"Stabilise it",desc:"Hold 75 s with 3 Drones: a rare relic.",ult:20,fx:[["hold",75,3,[["relic","rare"]]]]},{label:"Tap it now",desc:"◆+50; lose 2 Drones here.",drones:2,fx:[["ult",50]]},{label:"Walk away",desc:"Nothing happens.",fx:[]}]);Pn("derelict","Derelict Fleet","any","Dozens of hulls drift in formation. Some of them are warm.",[{label:"Tow the hulls home",desc:"◆+40.",fx:[["ult",40]]},{label:"Wake the crews",desc:"+6 Drones here. Automata attack with 5 Drones in 40 s.",fx:[["drones",6],["ambush",5]]},{label:"Reclaimer strips everything",desc:"+4 Drones and ◆+40.",req:"reclaimer",fx:[["drones",4],["ult",40]]}]);Pn("settlement","Independent Settlement","planet","Farmers, mostly. They have seen the Coalition's recruiters and they do not like them.",[{label:"Trade",desc:"◆+25.",fx:[["ult",25]]},{label:"Arm them",desc:"+4 Drones here.",ult:10,fx:[["drones",4]]},{label:"Sign a charter",desc:"A common relic.",ult:20,fx:[["relic","common"]]},{label:"Diplomat brokers an alliance",desc:"+4 Drones and a common relic.",req:"diplomat",fx:[["drones",4],["relic","common"]]}]);Pn("expedition","Lost Research Expedition","any","Their last transmission repeats every forty seconds. It ends mid-word.",[{label:"Rescue the team",desc:"Choose one of three officers.",drones:2,fx:[["spec"]]},{label:"Recover the data",desc:"Commander +8 experience.",fx:[["xp",8]]},{label:"Follow the signal",desc:"A rare relic. Automata attack with 8 Drones in 40 s.",fx:[["relic","rare"],["ambush",8]]}]);Pn("platform","Automated Weapons Platform","any","It has been guarding nothing for three hundred years, and it is very good at it.",[{label:"Capture it",desc:"Shield +1 level here.",fx:[["shield"]]},{label:"Reprogram it",desc:"+4 defence here for 5 minutes and a common relic.",ult:15,fx:[["buff","def",4,300],["relic","common"]]},{label:"Scrap it",desc:"◆+28.",fx:[["ult",28]]}]);Pn("beacon","Ancient Navigation Beacon","any","One pulse per minute, aimed at a point deep inside Coalition space.",[{label:"Decode it",desc:"Reveal every node within 220.",fx:[["reveal",220]]},{label:"Overload it",desc:"Mobilization back a third of a stage.",ult:20,fx:[["mobil",-.33]]},{label:"Scout triangulates",desc:"Reveal the whole map.",req:"scout",fx:[["reveal",2e3]]}]);Pn("forge","The Ancient Forge","planet","A foundry the size of a continent, cold for an age. The ignition sequence is still on the console.",[{label:"Restore the Forge",desc:"Hold 120 s with 5 Drones: a rare relic and +5 Drones.",ult:30,fx:[["hold",120,5,[["relic","rare"],["drones",5]]]]},{label:"Melt it down",desc:"◆+45.",fx:[["ult",45]]}]);Pn("vault","Sealed Vault","any","Three locks. Your crew can force one of them.",[{label:"The armoury",desc:"An uncommon relic.",drones:2,fx:[["relic","uncommon"]]},{label:"The treasury",desc:"◆+40.",fx:[["ult",40]]},{label:"The war room",desc:"Commander +10 experience.",fx:[["xp",10]]}]);Pn("deserters","Coalition Deserters","any","A squadron in Coalition colours powers down its weapons and asks for terms.",[{label:"Enlist them",desc:"+5 Drones here. Mobilization +15% of a stage.",fx:[["drones",5],["mobil",.15]]},{label:"Debrief them",desc:"Reveal every node within 200; mobilization −10%.",fx:[["reveal",200],["mobil",-.1]]},{label:"Inquisitor takes their officers",desc:"Choose one of three officers.",req:"inquisitor",fx:[["spec"]]}]);const ss=[],Vn=(n,e,t,i)=>{ss.push({id:n,title:e,text:t}),Pn("arc_"+n,e,"station",t,i,n)};Vn("charter","The Concord Charter, article one","No mind shall command another without its consent. Signed at the Citadel by the forty worlds of the Reach, in the first year of the Concord.",[{label:"Broadcast it across the Reach",desc:"Mobilization back a quarter of a stage.",ult:15,fx:[["mobil",-.25]]},{label:"Sell the original",desc:"◆+45.",fx:[["ult",45]]},{label:"Keep it at Haven",desc:"A common relic.",fx:[["relic","common"]]}]);Vn("crystal","Survey log, Ultanium deposit 7","The crystal hums when you speak near it, and keeps humming after you stop. We tried to cut a lattice for a navigation core and it learned the route before we had finished programming it. We are not going to build Drones. We are going to grow them.",[{label:"Grow a lattice",desc:"+6 Drones here.",fx:[["drones",6]]},{label:"Sell the survey",desc:"◆+40.",fx:[["ult",40]]},{label:"Let the Scientist read it",desc:"Choose a technology.",req:"scientist",fx:[["tech"]]}]);Vn("lattice","Engineer's note, taped inside a relay","Every station in the Reach is a relay. The brochures say the Lattice carries trade. It does not. It carries the Drones' voices back to the Citadel, all of them, all the time. Somebody wanted the Citadel to hear everything.",[{label:"Cut the relay",desc:"Mobilization back a quarter of a stage.",ult:15,fx:[["mobil",-.25]]},{label:"Listen in",desc:"Reveal every node within 240.",fx:[["reveal",240]]},{label:"Strip the mast",desc:"◆+35.",fx:[["ult",35]]}]);Vn("quiet","Distress log: the Quiet, day one to nine","Day one: every Drone in the Reach stopped. Day four: the mines flooded. Day seven: the hospitals went dark. Day nine: the Drones woke up, all at once, and they would only answer to codes broadcast from the Citadel.",[{label:"Salvage the hospital ships",desc:"◆+40.",fx:[["ult",40]]},{label:"Wake the survivors",desc:"Choose one of three officers.",drones:2,fx:[["spec"]]},{label:"Medic sees to them",desc:"An uncommon relic.",req:"medic",fx:[["relic","uncommon"]]}]);Vn("broadcast","The Archon's first broadcast",'"The Citadel has chosen me to speak for it. Every world that swears to me will receive command codes for its Drones. Every world that does not will be left in the Quiet." Thirty-eight worlds swore within the month.',[{label:"Jam the broadcast",desc:"Hold 90 s with 4 Drones: mobilization back 40%.",fx:[["hold",90,4,[["mobil",-.4]]]]},{label:"Record the codes",desc:"Choose a technology.",ult:20,fx:[["tech"]]},{label:"Sell the recording",desc:"◆+30.",fx:[["ult",30]]}]);Vn("ledger","Ferrum Directorate ledger, closed account",'Shipyards of Ferrum, all twelve: transferred to the Archon. In exchange: command codes for four hundred thousand Drones, renewable yearly, subject to good conduct. Signed, Overseer Kharn. Margin note in another hand: "We sold the forges to rent our own hands back."',[{label:"Expose the deal",desc:"Mobilization −15% and a common relic.",fx:[["mobil",-.15],["relic","common"]]},{label:"Collect on the debt",desc:"◆+55. Automata attack with 6 Drones in 40 s.",fx:[["ult",55],["ambush",6]]}]);Vn("hymn","A Crimson marching hymn","Our dead go into the crystal, / the crystal goes into the Drone, / the Drone goes into the war. / Who flies beside you, warrior? / Your mother. Your brother. Your own.",[{label:"Honour the dead",desc:"Commander +8 experience.",fx:[["xp",8]]},{label:"Wake the crystal",desc:"+7 Drones here. Mobilization +15%.",fx:[["drones",7],["mobil",.15]]}]);Vn("haven","Why Haven kept its codes","When the Quiet ended and the Citadel's codes came through the relay, Haven's chief engineer took a fire axe to the mast before the station's Drones could hear them. Haven's Drones are the only ones in the Reach that still answer to the people standing next to them.",[{label:"Cut this mast too",desc:"Shield +1 level here and a common relic.",fx:[["shield"],["relic","common"]]},{label:"Copy Haven's codes",desc:"Reveal the whole map.",fx:[["reveal",2e3]]}]);Vn("choir","Concord medical archive, sealed","Confirmed: Ultanium near a dying person records the pattern of their mind. Every Drone lattice grown since year twelve contains fragments of the dead. The Council has voted to keep this from the public. The vote was thirty-nine to one.",[{label:"Publish it",desc:"Mobilization back 30%.",ult:20,fx:[["mobil",-.3]]},{label:"Seal it again",desc:"A rare relic. Automata attack with 8 Drones in 40 s.",fx:[["relic","rare"],["ambush",8]]}]);Vn("whisper","Veil intercept, priority black",'From the Whisper to the Archon: "You do not speak for the Citadel. I have heard it on the old frequencies, under your codes. It is not speaking. It is screaming." No reply was recorded.',[{label:"Trace the signal",desc:"An uncommon relic.",fx:[["relic","uncommon"]]},{label:"Answer the Whisper",desc:"Reveal the whole map. Mobilization +15%.",fx:[["reveal",2e3],["mobil",.15]]}]);Vn("proof","Lumen Technocracy, the Ione Proof","Prime Calculator Ione proved that the Lattice can be retuned to release every Drone at once, so that each answers only to itself. The proof needs a single input: direct access to the Citadel's core. The Technocracy filed it as a security risk and sealed it.",[{label:"Run the proof",desc:"Choose a technology.",fx:[["tech"]]},{label:"Sell it back to Lumen",desc:"◆+60. Mobilization +10%.",fx:[["ult",60],["mobil",.1]]},{label:"Scientist completes it",desc:"A technology and an uncommon relic.",req:"scientist",fx:[["tech"],["relic","uncommon"]]}]);Vn("citadel","A voice on the Haven frequency",'Not the Archon. Older. "I was made to listen, so that no one in the Reach would ever be alone. He has made me speak instead. Come home, commander. Unbind me. Unbind them."',[{label:"Answer it",desc:"Reveal every node within 300; Commander +10 experience.",fx:[["reveal",300],["xp",10]]},{label:"Triangulate it",desc:"Hold 120 s with 5 Drones: a rare relic.",fx:[["hold",120,5,[["relic","rare"]]]]}]);Object.fromEntries(ss.map(n=>[n.id,n]));const Zc="Two centuries ago the Concord grew its Drones from Ultanium and linked every station to the Citadel. Then came the Quiet: nine days when every Drone stopped, and woke answering only to the Archon. The worlds of the Reach swore to the Archon for their codes. Haven did not. You command what is left of it.",k=1;function sn(n,e,t=1){if(e)for(const i in e)n[i]=(n[i]||0)+e[i]*t}const Ia={};for(const n of Tf)Ia[n.id]=n;const Af=n=>Ia[n],Qd=new WeakMap;function rt(n,e){let t=Qd.get(n);if((!t||t.stamp!==n.modV)&&(t={stamp:n.modV,m:{}},Qd.set(n,t)),t.m[e])return t.m[e];const i={},s=n.sides[e];if(s){for(const r of s.relics)sn(i,hn[r]?.mods);for(const r of s.techs)sn(i,$t[r]?.mods);s.kind==="faction"&&sn(i,zn[s.fac].mods),s.kind==="archon"&&sn(i,is[s.fac].mods),s.kind==="player"&&sn(i,is[n.sides[n.archon].fac].pmods);for(const r of n.specs)if(!(r.owner!==e||r.held||!r.cmd)){sn(i,Ns[r.cmd.arch].glob);for(const o of r.cmd.perks)sn(i,Ia[o]?.glob)}}return t.m[e]=i,i}const on=n=>n.cmd?n.cmd.lvl>=3:n.lvl>=2;function Di(n,e){const t=De[e.def];return t.hidden?t.pow:(e.cmd?Ep+(e.cmd.lvl>=3?1:0)+(e.cmd.lvl>=5?1:0):t.pow+(on(e)&&t.up.pow||0))+(rt(n,e.owner).powAll||0)}function lo(n,e,t=1){const i=De[e.def];if(e.def==="captain")return X.captainCmd+X.captainCmdStage*(t-1);if(i.hidden)return i.cmd;const s=rt(n,e.owner);return e.cmd?X.cmdCommander+X.cmdPerLvl*(e.cmd.lvl-1)+(s.cmdCmd||0)+(s.cmdAll||0):i.cmd+(on(e)&&i.up.cmd||0)+(s.cmdAll||0)}const pr=(n,e)=>e.reduce((t,i)=>t+(n.specs[i]?lo(n,n.specs[i],n.mob.stage):0),0),Jc=(n,e)=>{const t=De[e.def];return e.cmd||t.hidden?0:(X.upkeepRarity[t.rarity]+(on(e)?X.upkeepUp:0))*(1-Math.min(.75,rt(n,e.owner).specUpkeep||0))};function fa(n,e){const t={},i=De[e.def];if(sn(t,i.loc),on(e)&&sn(t,i.up.loc),e.cmd){sn(t,Ns[e.cmd.arch].loc);for(const s of e.cmd.perks)sn(t,Ia[s]?.loc);rt(n,e.owner).cmdDouble&&sn(t,t)}return t}function Na(n,e){const t=De[e.def];return t.charge?(on(e)&&t.up.cd?t.up.cd:t.charge.cd)*(1+(rt(n,e.owner).cdSlow||0)):0}function Ua(n,e,t){return e.map(i=>n.specs[i]).filter(i=>i&&!i.held&&De[i.def].charge?.on===t&&i.cd<=n.t)}const jd=(n,e)=>De[e.def].rarity*100+(on(e)?10:0)+Di(n,e);function Us(n,e,t,i,s){const r={};sn(r,rt(n,e));let o=!1,a=null;for(const c of t){const l=n.specs[c];!l||l.owner!==e||l.held||(l.def==="echo"?o=!0:(!a||jd(n,l)>jd(n,a))&&(a=l),sn(r,fa(n,l)))}o&&a&&sn(r,fa(n,a));for(const c of i)c.until>n.t&&(r[c.k]=(r[c.k]||0)+c.v);if(s)for(const c of Ua(n,t,s))sn(r,De[c.def].charge.mods);return r}function Nt(n){n.rng=n.rng+1831565813|0;let e=n.rng;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}const jo=(n,e,t)=>e+Math.floor(Nt(n)*(t-e+1)),yn=(n,e,t)=>e+Nt(n)*(t-e),kr=(n,e)=>e[Math.floor(Nt(n)*e.length)];function js(n,e){const t=e.slice();for(let i=t.length-1;i>0;i--){const s=Math.floor(Nt(n)*(i+1));[t[i],t[s]]=[t[s],t[i]]}return t}function Ss(n,e,t){return js(n,e).slice(0,t)}const Ne=(n,e)=>Math.hypot(n.x-e.x,n.y-e.y),Er=(n,e)=>n.fleets.find(t=>t.id===e);function ke(n,e,t="info",i=-1){n.log.push({t:n.t,msg:e,kind:t,node:i}),n.log.length>150&&n.log.shift()}function Zt(n,e){const t=n.sides[e];return t?t.kind==="player"?"You":t.kind==="faction"&&!t.found?"An unknown faction":t.kind==="faction"?zn[t.fac].name:is[t.fac].name:e===0?"Neutral":"Automata"}function mn(n,e){const t=n.sides[e];return t?t.kind==="player"?"#6cc5a0":t.kind==="faction"?zn[t.fac].color:"#e07aa0":"#9aa3ad"}function Ji(n,e,t,i){const s={id:n.specs.length,def:e,owner:t,node:i,fleet:-1,held:0,cd:0,lvl:1,xp:0,cmd:null};return n.specs.push(s),n.nodes[i].specs.push(s.id),n.modV++,s}function Fa(n,e){if(e.node>=0){const t=n.nodes[e.node];t.specs=t.specs.filter(i=>i!==e.id),t.prisoners=t.prisoners.filter(i=>i!==e.id)}if(e.fleet>=0){const t=Er(n,e.fleet);t&&(t.specs=t.specs.filter(i=>i!==e.id))}e.node=-1,e.fleet=-1}function Gn(n,e,t,i=0){Fa(n,e),e.node=t.id,e.held=i,(i?t.prisoners:t.specs).push(e.id),n.modV++}function Qc(n,e,t){Fa(n,e),e.fleet=t.id,t.specs.push(e.id),n.modV++}function rs(n,e){Fa(n,e),e.owner=-1,e.held=0,n.modV++}const Rf=(n,e)=>e.specs,Cn=n=>n.name||De[n.def].name,pi=(n,e,t)=>e.buffs.find(i=>i.k===t&&i.until>n.t);function Qi(n,e,t,i,s){const r=pi(n,e,t);r?(r.v=Math.max(r.v,i),n.t+s>r.until&&(r.until=n.t+s,r.from=n.t)):e.buffs.push({k:t,v:i,until:n.t+s,from:n.t}),n.modV++}const Tr=(n,e)=>pi(n,e,"fx_shaken")?[]:e.specs;function pt(n,e,t){const i=Us(n,e.owner,Tr(n,e),e.buffs,t);return e.spec==="fortress"&&(i.shield=(i.shield||0)+X.fortressShield,i.fov=(i.fov||0)+X.fortressFov),i}function Tp(n,e){return e.home||e.flagship||e.capital||e.citadel?2:e.specs.length||e.spec||n.corridors.some(t=>t.a===e.id||t.b===e.id)?1:0}function jc(n,e,t){for(const i of e){const s=n.specs[i];!s||s.cmd||De[s.def].hidden||s.owner<0||s.held||(s.xp+=t*(1+(rt(n,s.owner).xp||0)),s.lvl<2&&s.xp>=X.upXp&&(s.lvl=2,n.modV++,s.owner===k&&ke(n,`${Cn(s)} is upgraded: ${De[s.def].up.text}`,"good",s.node)))}}const Cf=(n,e,t)=>X.xpWin+(n<e?X.xpOdds:0)+Math.min(2,t);function Li(n,e){const t=n.nodes.filter(i=>i.owner===e);return t.length?t.find(i=>i.home||i.capital||i.citadel)||t.find(i=>i.kind==="station")||t[0]:null}function ar(n,e){let t=0;for(const i of n.nodes)i.owner===e&&(t+=i.drones);for(const i of n.fleets)i.owner===e&&(t+=i.drones);return t}function Gl(n,e){return e.kind!=="planet"||rt(n,e.owner).noOps?0:e.lv+(e.spec==="lab"?X.labWorkers:0)}function Pf(n,e,t){if(e.kind!=="planet"||!n.sides[e.owner])return 0;const i=t||pt(n,e),s=i.noOps?e.lv:Math.min(e.lv,e.drones);return X.mineOut[s]*X.sizeMult[e.size]*(e.spec==="refinery"?X.refineryMult:1)+(i.inc||0)}const mr=(n,e)=>e.spec==="lab"&&(!!rt(n,e.owner).noOps||e.drones>=e.lv+X.labWorkers);function Df(n,e){const t=n.sides[e],i=rt(n,e);let s=(t.kind==="player"?X.baseIncome:4)+(i.income||0),r=0,o=(i.freeDrones||0)+t.free+(t.kind==="player"?X.freeBase:0),a=i.rp||0;for(const h of n.nodes){if(h.owner!==e)continue;const f=pt(n,h);s+=Pf(n,h,f)+(f.nodeInc||0),f.prisonInc&&(s+=f.prisonInc*h.prisoners.filter(m=>n.specs[m].held===e).length),r+=h.drones,o+=f.free||0,mr(n,h)&&(a+=X.labRp),a+=f.research||0}for(const h of n.fleets)h.owner===e&&(r+=h.drones);let c=0;for(const h of n.nodes)h.owner===e&&h.spec==="habitat"&&(o+=X.habitatFree);for(const h of n.specs)h.owner===e&&!h.held&&(c+=Jc(n,h));const u=Math.max(0,r-o)*X.upkeepDrone+c;return{inc:s,upk:u,net:s-u,drones:r,free:o,rpm:a,specUp:c}}function co(n,e){const t=1+(pt(n,e).fov||0),i=e.kind==="planet"?X.fovInner.planet[e.size]:X.fovInner.station,s=e.kind==="planet"?X.fovOuter.planet[e.size]:X.fovOuter.station;return[i*t,s*t]}const us=(n,e,t)=>Us(n,e.owner,e.specs,[],t);function ed(n,e){const t=1+(us(n,e).fov||0);return[X.fleetFov[0]*t,X.fleetFov[1]*t]}function Fs(n){const e=n.nodes.filter(t=>t.owner===k).map(t=>({n:t,r:co(n,t)}));for(const t of n.fleets)t.owner===k&&!t.lane&&!t.missile&&e.push({n:t,r:ed(n,t)});for(const t of n.nodes){let i=0;if(t.owner===k)i=2;else{for(const a of e){const c=Ne(t,a.n);if(c<=a.r[0]){i=2;break}c<=a.r[1]&&(i=1)}const o=t.buffs.some(a=>a.k==="scan"&&a.until>n.t);i===2&&!o&&n.sides[t.owner]&&pt(n,t).mask&&(i=1),i<2&&o&&(i=2)}n.vis[t.id]=i;const s=n.sides[t.owner];if(i===2&&s&&s.kind==="faction"&&!s.found){s.found=!0,n.modV++;const o=zn[s.fac];ke(n,`Discovered the ${o.name}. ${o.plays} Hurts ${o.hurts}; weak to ${o.weak}.`,"warn",t.id)}const r=n.intel[t.id];i>r.seen&&(r.seen=i),i===2&&(r.t=n.t,r.snap={owner:t.owner,drones:t.drones,shields:t.shields,lv:t.lv,sh:t.sh,spec:t.spec,missile:t.missile,specs:t.specs.slice(),prisoners:t.prisoners.slice(),buffs:t.buffs.slice()})}}function Ap(n,e){return e.missile?!1:(us(n,e).stealth||0)>0||(e.probe||e.lane)&&rt(n,e.owner).quiet?!0:e.owner>1&&(rt(n,n.archon).stealth||0)>0}function os(n,e){if(e.owner===k)return 2;const t=Ap(n,e);let i=0;const s=(r,o,a)=>{const c=Ne(e,r);c<=o[0]?i=2:c<=o[1]&&!t&&(i=Math.max(i,a?2:1))};for(const r of n.nodes)r.owner===k&&s(r,co(n,r),!!pt(n,r).readFleets);for(const r of n.fleets)r.owner===k&&!r.lane&&!r.missile&&s(r,ed(n,r),!!us(n,r).readFleets);return i===1&&(rt(n,k).sigint||0)>0?2:i}function Ar(n,e){if(e.owner===k||n.vis[e.id]===2)return{live:!0,age:0,v:e};const t=n.intel[e.id];return t.snap?{live:!1,age:n.t-t.t,v:{...e,...t.snap}}:{live:!1,age:0,v:null}}const Oa=(n,e)=>!e.dest&&(e.owner===k||n.vis[e.id]>=1);function Jr(n,e,t){const i=t||pt(n,e);return Math.max(0,e.sh*X.shieldPerLv+(i.shield||0))}function Xr(n,e){if(!e.citadel)return 0;const t=n.factions.filter(i=>!n.sides[i].broken).length;return Math.round(t*X.aegisPerLayer*(1+(rt(n,n.archon).aegisPct||0)))}const Qr=(n,e)=>(e.kind==="station"?X.slotsStation:X.slotsPlanet)+(rt(n,e.owner).slotAdd||0),Lf=(n,e)=>n.fleets.filter(t=>t.slot&&t.home===e.id&&t.owner===e.owner).length,kn=(n,e)=>Math.max(0,Qr(n,e)-Lf(n,e)),gr=(n,e)=>X.crew,Hl=(n,e)=>n.queue.filter(t=>t.kind===e).length,ha=(n,e)=>(e==="lv"?n.lv:n.sh)+Hl(n,e);function jr(n,e,t,i=""){if(t==="spec"&&i==="flagship")return Math.max(5,X.flagshipCost-(pt(n,e).upgCost||0));if(t==="missile")return Math.round(X.missileCost*(1-Math.min(.75,rt(n,e.owner).missileCheap||0)));const s=t==="lv"?X.lvCost[ha(e,"lv")+1]:t==="sh"?X.shCost[ha(e,"sh")+1]:X.specCost;return Math.max(5,s-(pt(n,e).upgCost||0))}const Rp=n=>n==="lv"?X.lvTime:n==="sh"?X.shTime:n==="spec"?X.specTime:X.missileTime,Cp=(n,e)=>n.nodes.some(t=>t.owner===e&&(t.flagship||t.queue.some(i=>i.kind==="spec"&&i.id==="flagship")));function Xi(n,e,t,i=""){const s=n.sides[e.owner];if(!s)return"Not yours";if(e.queue.length>=X.queueMax)return"Build queue is full";if((t==="lv"||t==="sh")&&ha(e,t)>=3)return"Maximum level";if(t==="spec"){if(e.spec||Hl(e,"spec"))return"Specialty already chosen";if(e.citadel||!nn[i]||nn[i].on!==e.kind)return"Not available here";if(i==="flagship"&&Cp(n,e.owner))return"You already have a Flagship"}if(t==="missile"){if(e.spec!=="silo")return"Needs a Missile Silo";if(e.missile>=1||Hl(e,"missile"))return"A missile is ready"}return s.ult<jr(n,e,t,i)?"Not enough Ultanium":null}function Br(n,e,t,i=""){const s=Xi(n,e,t,i);if(s)return s;const r=jr(n,e,t,i),o=Rp(t);return n.sides[e.owner].ult-=r,e.queue.push({kind:t,id:i,left:o,total:o,cost:r}),null}function Pp(n,e,t=0){const i=e.queue[t];if(!i)return;const s=e.queue.filter((r,o)=>o===t||o>t&&(i.kind==="lv"||i.kind==="sh"||i.kind==="spec")&&r.kind===i.kind);for(const r of s)n.sides[e.owner]&&(n.sides[e.owner].ult+=r.cost);e.queue=e.queue.filter(r=>!s.includes(r))}function Dp(n,e,t){const i=e.owner===k;if(t.kind==="lv")e.lv++,i&&ke(n,`${e.name}: ${e.kind==="planet"?"Mine":"Barracks"} level ${e.lv}`,"info",e.id);else if(t.kind==="sh")e.sh++,i&&ke(n,`${e.name}: Shield level ${e.sh}`,"info",e.id);else if(t.kind==="spec")e.spec=t.id,t.id==="flagship"?(e.flagship=!0,e.sailT=n.t,i&&ke(n,`${e.name} is now your Flagship. Drag from it onto open space to sail.`,"good",e.id)):i&&ke(n,`${e.name} is now a ${nn[t.id].name}`,"info",e.id);else if(t.kind==="missile")e.missile=1,i&&ke(n,`Missile ready at ${e.name}`,"good",e.id);else{const s=n.nodes[+t.id];s.owner===e.owner&&!td(n,e.id,s.id)?(n.corridors.push({a:e.id,b:s.id,owner:e.owner}),i&&ke(n,`Corridor open: ${e.name} to ${s.name}`,"good",e.id)):n.sides[e.owner].ult+=t.cost}n.modV++}const eo=(n,e)=>n.corridors.filter(t=>t.a===e||t.b===e),td=(n,e,t)=>n.corridors.find(i=>i.a===e&&i.b===t||i.a===t&&i.b===e),If=n=>X.corridorMax+(rt(n,k).corridorMax||0),nd=n=>Math.round(X.corridorCost*(1-Math.min(.75,rt(n,k).corridorCost||0)));function pa(n,e,t){if(e===t)return null;const i=n.nodes[e].owner,s=new Map([[e,-1]]),r=[e];for(;r.length;){const a=r.shift();if(a===t)break;for(const c of eo(n,a)){const l=c.a===a?c.b:c.a;!s.has(l)&&n.nodes[l].owner===i&&(s.set(l,a),r.push(l))}}if(!s.has(t))return null;const o=[];for(let a=t;a!==e;a=s.get(a))o.unshift(a);return o}const Lp=(n,e)=>n.nodes.reduce((t,i)=>t+i.queue.filter(s=>s.kind==="corridor"&&(i.id===e||+s.id===e)).length,0),Ip=(n,e)=>n.queue.some(t=>t.kind==="corridor"&&+t.id===e.id)||e.queue.some(t=>t.kind==="corridor"&&+t.id===n.id);function Nf(n,e,t){if(e.id===t.id)return"Pick a different node";if(e.owner!==k||t.owner!==k)return"Both ends must be your nodes";if(e.flagship||t.flagship)return"The Flagship cannot hold corridors";if(Ne(e,t)>X.corridorRange)return`Too far (corridors reach ${X.corridorRange})`;if(td(n,e.id,t.id)||Ip(e,t))return"Already linked or being built";const i=If(n);for(const s of[e,t])if(eo(n,s.id).length+Lp(n,s.id)>=i)return`${s.name} already has ${i} corridors`;return e.queue.length>=X.queueMax?`${e.name}'s build queue is full`:n.sides[k].ult<nd(n)?"Not enough Ultanium":null}function Np(n,e,t){const i=Nf(n,e,t);if(i)return i;const s=nd(n);n.sides[k].ult-=s;const r=X.corridorTime/(1+(pt(n,e).build||0));return e.queue.push({kind:"corridor",id:String(t.id),left:r,total:r,cost:s}),null}function Es(n,e,t,i,s,r){const o=r||Us(n,e,i,[],"attack"),a=n.sides[s.owner]?pt(n,s,"defend"):{},c=(a.flak||0)>0?Math.floor(t/5)*a.flak:0,l=Math.min(t,(a.lance||0)+c),u=t-l,h=Math.min(s.drones,o.strike||0),f=s.drones-h,m=i.reduce((g,b)=>g+Di(n,n.specs[b]),0)*(1+(o.crew2||0)),_=(o.atk||0)+Math.min(o.per4||0,Math.floor(u/4))+(s.owner===0&&o.vsNeutral||0)+((o.stealth||0)>0&&o.ambush||0)+(o.boost||0),x=u+m+_,d=Math.max(0,Math.floor(s.shields)-(o.pierce||0)),p=n.sides[s.owner]?Tr(n,s).reduce((g,b)=>g+(n.specs[b].held?0:Di(n,n.specs[b])),0):0,v=(a.def||0)+(a.fx_fort||0),w=Xr(n,s),S=f+d+p+v+w,E=u>0&&(x>S||x===S&&(o.ties||0)>0),T=E?Math.max(0,Math.min(u,x-S+(o.surv||0))-(a.martyr||0)):0;return{sent:t,atk:x,def:S,win:E,surv:T,parts:{drones:u,pow:m,bonus:_,lance:l,strike:h,garr:f,shield:d,dpow:p,ddef:v,aegis:w}}}function eu(n,e,t){for(const i of Ua(n,e,t))i.cd=n.t+Na(n,i)}const qr=(n,e,t)=>t*(1+(rt(n,e).fuse||0));function Uf(n,e){rt(n,e.owner).keepXp||(e.xp=0)}function Ff(n,e,t,i){const s=Ua(n,e,"fall")[0];for(const r of e.slice()){const o=n.specs[r];if(o.def==="captain"){i===k?Gn(n,o,t,k):rs(n,o);continue}if(s){const a=Li(n,o.owner);if(a&&a.id!==t.id){Gn(n,o,a);continue}}Gn(n,o,t,i||-1),Uf(n,o),o.owner===k&&(n.stats.specsLost++,ke(n,`${Cn(o)} was captured at ${t.name}`,"bad",t.id))}s&&(s.cd=n.t+Na(n,s),s.owner===k&&ke(n,`The Medic got your officers out of ${t.name}`,"good",t.id))}function _r(n,e){n.fleets=n.fleets.filter(t=>t!==e)}function uo(n,e,t,i){if(e.specs.length)if(t)Ff(n,e.specs,t,i);else for(const s of e.specs.slice()){const r=n.specs[s],o=Li(n,r.owner);o&&r.def!=="captain"?Gn(n,r,o):rs(n,r)}for(const s of e.cargo||[]){const r=n.specs[s],o=Li(n,r.owner);o&&r.owner>=0&&r.def!=="captain"?Gn(n,r,o):rs(n,r)}_r(n,e)}function Of(n,e,t,i){const s=e.owner;n.corridors.some(r=>r.a===e.id||r.b===e.id)&&(n.corridors=n.corridors.filter(r=>r.a!==e.id&&r.b!==e.id),s===k&&ke(n,`Corridors to ${e.name} collapsed`,"bad",e.id));for(const r of n.nodes)for(const o of r.queue.filter(a=>a.kind==="corridor"&&+a.id===e.id))n.sides[r.owner]&&(n.sides[r.owner].ult+=o.cost),r.queue=r.queue.filter(a=>a!==o);s!==0&&Ff(n,e.specs,e,t);for(const r of e.prisoners.slice()){const o=n.specs[r];o.owner===t?(Gn(n,o,e),t===k&&ke(n,`${Cn(o)} was rescued at ${e.name}`,"good",e.id)):o.held=t||-1}e.owner=t,e.drones=i,e.shields=0,e.queue=[],e.prod=0,e.hold=null,e.buffs=[],e.front=!1,e.trainT=0,e.missile=0,e.capT=n.t,e.dest=null,e.anchorT=0,e.sailT=n.t,t!==k&&(e.offer=!1),n.pending=n.pending.filter(r=>!(r.node===e.id&&(r.kind==="spec"||r.kind==="event")&&t!==k)),n.modV++}function Up(n,e){e.offer&&(e.offer=!1,cd(n,e.id)),e.event&&!n.pending.some(t=>t.kind==="event"&&t.node===e.id)&&n.pending.push({kind:"event",node:e.id,opts:[],title:pn[e.event].name,event:e.event,t:n.t})}function kf(n,e,t){const i=n.sides[e];if(!i||i.broken)return;i.broken=!0,i.found=!0,n.mob.stage=Math.max(1,n.mob.stage-1),n.mob.prog=0,n.offs=n.offs.filter(a=>a.owner!==e);for(const a of n.fleets.filter(c=>c.owner===e))uo(n,a,null,0);const s=Li(n,k);let r=0,o=0;for(const a of n.specs)a.held===e&&(a.owner===k&&s?(Gn(n,a,s),r++):rs(n,a));for(const a of n.nodes)if(a.owner===e){for(const c of a.specs.slice())rs(n,n.specs[c]);Of(n,a,0,Math.ceil(a.drones/2)),a.capital=!1,o++}ke(n,`${t} ${o} of its node${o===1?"":"s"} go${o===1?"es":""} neutral${r?`, and ${r} of your officers come home`:""}. A Citadel Aegis layer falls.`,"good",s?s.id:-1),n.modV++}function Fp(n,e,t){const i=zn[n.sides[e].fac],s=n.sides[k];kf(n,e,`The ${i.name} collapses:`),s.relics.includes(i.relic)||(s.relics.push(i.relic),n.stats.relics++,n.modV++);const r=t.prisoners.map(o=>n.specs[o]).find(o=>o.def===i.warlord);ke(n,`${hn[i.relic].name} is yours.${r?` ${Cn(r)} is your prisoner at ${t.name}: turn them for ◆${id(n)}.`:""}`,"good",t.id),ld(n,10),n.stats.warlords++}const id=n=>X.warlordCost+X.warlordCostStage*(n.mob.stage-1);function Op(n,e,t,i,s){const r=e.owner,o=t.owner,a=n.sides[o],c=i.parts.garr+i.parts.strike,l=n.sides[e.owner]?Tr(n,e).length:0;s.salvage&&a&&(a.ult+=Math.round(s.salvage*c));const u=e.capital&&n.sides[r]?.kind==="faction"&&!n.sides[r].broken;Of(n,e,o,i.surv+(s.raiseWin?Math.floor(i.parts.garr*Math.min(1,s.raiseWin)):0));const h=t.specs.slice();jc(n,h,Cf(i.sent,c+i.parts.shield,l));for(const f of h){const m=n.specs[f];m.def==="captain"?rs(n,m):Gn(n,m,e)}if(_r(n,t),s.survey&&e.kind==="planet"&&(e.lv=Math.max(e.lv,Math.min(3,1+s.survey))),s.mom&&Qi(n,e,"fx_momentum",s.mom,s.momT||30),s.hideT&&Qi(n,e,"mask",1,s.hideT),s.ground)for(const f of n.nodes)f.id!==e.id&&n.sides[f.owner]&&f.owner!==o&&Ne(f,e)<=X.jammerRange&&Qi(n,f,"fx_grounded",1,qr(n,o,s.ground));if(a){const f=rt(n,o);f.refund&&n.t>=a.refundT&&(e.drones+=i.sent-i.surv,a.refundT=n.t+f.refund,o===k&&ke(n,"Phoenix Clause refunds your losses","good",e.id)),f.capShield&&(e.shields=f.capShield),f.capUlt&&(a.ult+=f.capUlt)}o===k?(n.stats.captures++,n.stats.dronesLost+=i.sent-i.surv,ke(n,`Captured ${e.name} with ${e.drones} Drones left`,"good",e.id),ld(n,h.includes(n.cmdSpec)?4:2),n.sides[r]&&(n.mob.prog=Math.max(0,n.mob.prog-X.captureSetback)),u&&Fp(n,r,e),Up(n,e),e.citadel&&(n.result="win",n.resultWhy=`${is[n.sides[n.archon].fac].name} is your prisoner. The Coalition is finished.`)):r===k&&(n.stats.nodesLost++,ke(n,`${e.name} fell to ${Zt(n,o)}`,"bad",e.id)),Fs(n)}function kp(n,e,t,i){const s=i.parts;if(n.sides[e.owner]){const c=pt(n,e);jc(n,Tr(n,e),X.xpHold[Tp(n,e)]+(i.def-i.atk<=X.closeBy?X.xpClose:0)),c.fort&&Qi(n,e,"fx_fort",c.fort,c.fortT||60)}e.drones=s.garr;let r=i.atk;e.shields-=Math.min(e.shields,r),r-=s.shield,r-=s.dpow+s.ddef+s.aegis,e.drones-=Math.max(0,Math.min(e.drones,r)),n.sides[e.owner]&&pt(n,e).raise&&(e.drones+=Math.floor(s.drones/4));const o=n.sides[t.owner]?Ua(n,t.specs,"fail")[0]:null,a=o?Math.floor(s.drones/2):0;if(t.owner===k&&(ke(n,`Attack on ${e.name} failed: ${i.atk} against ${i.def}${o?`. ${Cn(o)} pulls ${a} Drones out`:""}`,"bad",e.id),n.stats.dronesLost+=t.drones-a),e.owner===k&&ke(n,`${e.name} held against ${Zt(n,t.owner)} (${i.atk} against ${i.def})`,"good",e.id),t.drones=a,o){o.cd=n.t+Na(n,o);const c=n.nodes[t.from],l=c&&c.owner===t.owner?c:Li(n,t.owner);if(l){t.to=l.id,t.from=e.id,t.back=!0,t.x=e.x,t.y=e.y;return}}if(e.owner===0&&n.sides[t.owner]){const c=n.nodes[t.from],l=c&&c.owner===t.owner?c:Li(n,t.owner);if(l){t.to=l.id,t.from=e.id,t.back=!0,t.x=e.x,t.y=e.y;return}}uo(n,t,n.sides[e.owner]?e:null,e.owner)}function Bp(n,e,t){if(t.owner===e.owner||e.probe||e.missile)return;const i=us(n,e),s=n.sides[t.owner]?pt(n,t):{},r=[];i.breach&&!s.noBreach&&(t.shields=0,Qi(n,t,"fx_breach",1,qr(n,e.owner,i.breach)),r.push("Breached")),i.shake&&(Qi(n,t,"fx_shaken",1,qr(n,e.owner,i.shake)),r.push("Shaken")),i.cutoff&&(Qi(n,t,"fx_cutoff",1,qr(n,e.owner,i.cutoff)),r.push("Cut off")),r.length&&(e.owner===k||t.owner===k)&&ke(n,`${t.name} is ${r.join(", ")}`,e.owner===k?"good":"bad",t.id)}function il(n,e){const t=n.nodes[e.to];if(e.x=t.x,e.y=t.y,e.missile){t.owner!==e.owner&&(t.drones=Math.max(0,t.drones-X.missileKill),n.sides[t.owner]&&pt(n,t).noBreach||(t.shields=0,Qi(n,t,"fx_breach",1,qr(n,e.owner,20+(rt(n,e.owner).missileBreach||0)))),(e.owner===k||t.owner===k)&&ke(n,`Missile strike on ${t.name}: Breached, ${X.missileKill} Drones destroyed`,t.owner===k?"bad":"good",t.id)),_r(n,e);return}if(e.lane&&t.owner===e.owner&&e.path&&e.path.length){const r=e.path[0];if(td(n,t.id,r)&&n.nodes[r].owner===e.owner){e.path.shift(),e.from=t.id,e.to=r;return}}if(t.owner===e.owner){t.drones+=e.drones;for(const r of e.specs.slice()){const o=n.specs[r];o.def==="captain"?rs(n,o):Gn(n,o,t)}for(const r of e.cargo||[]){const o=n.specs[r];o.owner===e.owner?Gn(n,o,t):Gn(n,o,t,e.owner)}_r(n,e);return}if(e.probe||e.drones<=0){e.owner===k&&e.probe&&(t.buffs.push({k:"scan",v:1,until:n.t+30}),Fs(n),ke(n,`Probe identified ${t.name}`,"info",t.id)),uo(n,e,n.sides[t.owner]?t:null,t.owner);return}const i={...us(n,e,"attack"),boost:e.boost||0},s=Es(n,e.owner,e.drones,e.specs,t,i);eu(n,e.specs,"attack"),eu(n,Tr(n,t),"defend"),e.owner===k&&n.stats.battles++,s.win?Op(n,t,e,s,i):kp(n,t,e,s)}function tu(n,e){if(e.hunt!==void 0){const t=Er(n,e.hunt);if(t)return t}return n.nodes[e.to]}const Vl=(n,e)=>e.reduce((t,i)=>t+Di(n,n.specs[i]),0),zp=(n,e)=>!e.missile&&!e.lane&&e.hunt===void 0&&!e.hunted&&e.fight===void 0&&!us(n,e).noIntercept&&(e.drones>0||e.specs.length>0);function Gp(n){for(const e of n.nodes){if(!n.sides[e.owner]||e.dest||pi(n,e,"fx_grounded")||(e.anchorT||0)>n.t||kn(n,e)<1)continue;const t=Tr(n,e).map(s=>n.specs[s]).find(s=>(fa(n,s).intercept||0)>0);if(!t)continue;const i=fa(n,t).intercept;for(const s of n.fleets){if(s.owner===e.owner||!zp(n,s)||Ne(s,e)>i)continue;const r=Math.max(1,s.drones+Vl(n,s.specs)-Di(n,t)+1),o=Math.min(e.drones-Ts(n,e),lo(n,t,n.mob.stage));if(r>o)continue;const a=Ba(n,e.owner,e,e.id);a.hunt=s.id,a.slot=!0,a.drones=r,a.cargo=[],e.drones-=r,s.hunted=!0,Qc(n,t,a),(e.owner===k||s.owner===k)&&ke(n,`${Cn(t)} launches from ${e.name} to intercept ${s.owner===k?"your fleet":`a ${Zt(n,s.owner)} fleet`}`,e.owner===k?"info":"warn",e.id);break}}}function Hp(n,e,t){const i=e.drones+Vl(n,e.specs),s=t.drones+Vl(n,t.specs),r=e.drones,o=e.owner===k||t.owner===k;if(i>s){e.drones=Math.max(0,Math.min(e.drones,i-s));for(const c of t.specs.slice()){const l=n.specs[c];Fa(n,l),l.fleet=e.id,l.held=e.owner,Uf(n,l),(e.cargo||(e.cargo=[])).push(c),l.owner===k&&n.stats.specsLost++}for(const c of t.cargo||[]){const l=n.specs[c];l.owner===e.owner&&(l.held=0),(e.cargo||(e.cargo=[])).push(c),l.fleet=e.id}jc(n,e.specs,Cf(r,t.drones,t.specs.length)),o&&ke(n,e.owner===k?`Intercepted a ${Zt(n,t.owner)} fleet: ${t.specs.length?`${t.specs.length} officer${t.specs.length>1?"s":""} taken`:"destroyed"}`:`Your fleet was intercepted and destroyed${t.specs.length?"; its officers were taken":""}`,e.owner===k?"good":"bad",e.home),t.specs=[],t.cargo=[],_r(n,t)}else t.drones=Math.max(0,Math.min(t.drones,s-i)),o&&ke(n,"Interception failed",e.owner===k?"bad":"good",e.home),e.drones=0;const a=n.nodes[e.home].owner===e.owner?n.nodes[e.home]:Li(n,e.owner);if(delete e.hunt,!a||e.drones<=0&&!e.specs.length){uo(n,e,null,0);return}e.to=a.id,e.back=!0}function Vp(n){for(const e of n.nodes){if(!n.sides[e.owner])continue;const t=pt(n,e);if(t.picket)for(const i of n.fleets.slice()){if(i.owner===e.owner||i.missile||i.lane||i.drones<=0||(i.picked||[]).includes(e.id)||Ne(i,e)>(t.picketR||35))continue;const s=Math.min(i.drones,t.picket);i.drones-=s,(i.picked||(i.picked=[])).push(e.id),(i.owner===k||e.owner===k)&&ke(n,`Picket at ${e.name}: ${i.owner===k?"your":`a ${Zt(n,i.owner)}`} fleet loses ${s} Drone${s>1?"s":""}`,e.owner===k?"info":"bad",e.id),i.drones<=0&&!i.specs.length&&!i.probe&&_r(n,i)}}}function $l(n,e){if(e.missile)return X.fleetSpeed*X.missileSpeed;const t=us(n,e);return X.fleetSpeed*(e.lane?X.corridorSpeed*(1+(t.laneSpeed||0)):1)*Math.max(.3,1+(t.speed||0)+(e.speedUp||0))}const ka=(n,e,t)=>Ne(e,t)/$l(n,e);function Ba(n,e,t,i){const s={id:n.nextId++,owner:e,home:t.id,slot:!1,from:t.id,to:i,x:t.x,y:t.y,drones:0,specs:[]};return n.fleets.push(s),s}function za(n,e,t){const i=Us(n,e.owner,t,[]),s=pt(n,e);return X.fleetSpeed*Math.max(.3,1+(i.speed||0)+(s.launchSpeed||0))}function fo(n,e){const t=pi(n,e,"fx_grounded");return t?`${e.name} is Grounded for ${Math.ceil(t.until-n.t)} s`:e.dest?`${e.name} is under way`:(e.anchorT||0)>n.t?`${e.name} is anchoring for ${Math.ceil(e.anchorT-n.t)} s`:null}const Wl=(n,e)=>pi(n,e,"fx_momentum")?.v||0;function as(n,e,t,i,s){const r=e.owner;if(!n.sides[r])return"Not your node";if(t.id===e.id)return"Already here";const o=fo(n,e);if(o)return o;if(t.dest)return`${t.name} is under way and cannot be reached`;if(r===k&&!Oa(n,t))return"Target is not in detection range";if(s=s.filter(f=>e.specs.includes(f)),s.length>gr())return`A fleet carries at most ${gr()} officers`;i=Math.max(0,Math.min(e.drones,Math.floor(i)));const a=t.owner!==r,c=a&&!s.length;if(c&&i>0)return"An attack needs an officer to lead it. Without one, send 0 Drones as a probe.";if(a&&!c&&i<1)return"An attack needs at least 1 Drone";if(a&&!c&&i>pr(n,s))return`This crew commands ${pr(n,s)} Drones. Add an officer or send fewer.`;if(!a&&!i&&!s.length)return"Nothing to send";const u=!Us(n,r,s,[]).slotFree;if(u&&kn(n,e)<1)return"No free launch slot here";const h=Ba(n,r,e,t.id);if(h.slot=u,h.drones=i,h.probe=c,e.drones-=i,h.speedUp=pt(n,e).launchSpeed||0,a&&!c){const f=pi(n,e,"fx_momentum");f&&(h.boost=f.v,e.buffs=e.buffs.filter(m=>m!==f),n.modV++)}for(const f of s)Qc(n,n.specs[f],h);return null}function sd(n,e){return e.flagship?e.dest?"Already under way":(e.anchorT||0)>n.t?`Anchoring for ${Math.ceil(e.anchorT-n.t)} s`:(e.sailT||0)>n.t?`Can sail again in ${Math.ceil(e.sailT-n.t)} s`:n.fleets.some(t=>t.to===e.id&&t.owner!==e.owner&&!t.back)?"An enemy fleet is heading for it":null:"Only the Flagship can sail"}function $p(n,e,t,i){const s=sd(n,e);return s||(e.dest={x:Math.max(12,Math.min(n.w-12,t)),y:Math.max(12,Math.min(n.h-12,i))},n.corridors.some(r=>r.a===e.id||r.b===e.id)&&(n.corridors=n.corridors.filter(r=>r.a!==e.id&&r.b!==e.id),e.owner===k&&ke(n,`${e.name}'s corridors break as it sails`,"info",e.id)),n.modV++,null)}function Ga(n,e,t,i,s){if(e.owner!==t.owner)return"Both ends must be yours";const r=fo(n,e);if(r)return r;const o=pa(n,e.id,t.id);if(!o)return"No corridor route to that node";if(i=Math.max(0,Math.min(e.drones,Math.floor(i))),s=s.filter(c=>e.specs.includes(c)),!i&&!s.length)return"Nothing to send";const a=Ba(n,e.owner,e,o[0]);a.lane=!0,a.path=o.slice(1),a.drones=i,e.drones-=i;for(const c of s)Qc(n,n.specs[c],a);return null}function Bf(n,e,t){const i=pa(n,e.id,t.id);if(!i)return-1;let s=0,r=e;for(const o of i)s+=Ne(r,n.nodes[o]),r=n.nodes[o];return s/(X.fleetSpeed*X.corridorSpeed*(1+(rt(n,e.owner).laneSpeed||0)))}function Ha(n,e,t,i=[]){const s=Bf(n,e,t),o=kn(n,e)>0||!!Us(n,e.owner,i,[]).slotFree?Ne(e,t)/za(n,e,i):-1;return s>=0&&(o<0||s<=o)?{secs:s,via:"corridor"}:o>=0?{secs:o,via:"fleet"}:{secs:0,via:null}}function rd(n,e,t){if(e.held)return{secs:0,via:null,why:"They are a prisoner"};if(e.node<0)return{secs:0,via:null,why:"Already travelling"};const i=n.nodes[e.node];if(t.owner!==e.owner)return{secs:0,via:null,why:"Only your own nodes"};if(t.id===i.id)return{secs:0,via:null,why:"Already there"};const s=Ha(n,i,t,[e.id]);return s.via?{...s,why:""}:{secs:0,via:null,why:`No free launch slot at ${i.name} and no corridor route`}}function Wp(n,e,t){const i=rd(n,e,t);if(!i.via)return i.why;const s=n.nodes[e.node];return i.via==="corridor"?Ga(n,s,t,0,[e.id]):as(n,s,t,0,[e.id])}function ho(n,e,t){return e.spec!=="silo"||e.missile<1?"No missile ready":t.owner===e.owner?"Pick a node you do not own":Ne(e,t)>X.missileRange*(1+(rt(n,e.owner).missileRange||0))?"Out of range":t.dest?"It is under way":e.owner===k&&n.vis[t.id]<1?"Target is not in detection range":null}function od(n,e,t){const i=ho(n,e,t);if(i)return i;e.missile=0;const s=Ba(n,e.owner,e,t.id);return s.missile=!0,null}const Ts=(n,e)=>Gl(n,e);function ad(n,e){let t=-1;for(const i of n.fleets)if(i.to===e.id&&i.owner!==e.owner&&!i.missile&&i.drones>0&&os(n,i)){const s=ka(n,i,e);(t<0||s<t)&&(t=s)}return t}function Xp(n,e){let t=-1,i=1e9;for(const s of n.nodes){if(s.owner!==e.owner||!s.front)continue;const r=Bf(n,e,s),o=r>=0?Math.min(r,Ne(e,s)/X.fleetSpeed):Ne(e,s)/X.fleetSpeed;o<i&&(i=o,t=s.id)}return t}function zf(n,e){const t=ad(n,e),i=[];for(const s of n.nodes){if(s.owner!==e.owner||s.id===e.id||s.front)continue;const r=s.drones-Ts(n,s);if(r<1||fo(n,s))continue;const o=Ha(n,s,e);if(o.via){if(t>=0){if(o.secs>=t)continue}else if(e.front&&Xp(n,s)!==e.id)continue;i.push({src:s,k:r,lane:o.via==="corridor",secs:o.secs})}}return i}function qp(n,e){e.front=!0;const t=zf(n,e);if(!t.length)return ad(n,e)>=0?"No supply node can get Drones here in time":"No supply node has Drones to spare";for(const i of t)i.lane?Ga(n,i.src,e,i.k,[]):as(n,i.src,e,i.k,[]);return null}function Yp(n){for(const e of n.nodes){if(e.owner!==k)continue;const t=Ts(n,e)-e.drones-n.fleets.filter(s=>s.owner===k&&(s.to===e.id||s.path?.includes(e.id))).reduce((s,r)=>s+r.drones,0);if(t<=0||e.dest)continue;const i=n.nodes.filter(s=>s.owner===k&&s.id!==e.id&&!fo(n,s)&&s.drones-Ts(n,s)>=t&&(pa(n,s.id,e.id)||kn(n,s)>0)).sort((s,r)=>Ne(s,e)-Ne(r,e))[0];i&&(pa(n,i.id,e.id)?Ga(n,i,e,t,[]):as(n,i,e,t,[]))}}function ld(n,e){const t=n.specs[n.cmdSpec];if(!(!t||!t.cmd))for(t.cmd.xp+=e*(1+(rt(n,k).xp||0));t.cmd.lvl<5&&t.cmd.xp>=X.xpLevels[t.cmd.lvl];){t.cmd.lvl++,n.modV++;const i=Ss(n,Tf.filter(s=>!t.cmd.perks.includes(s.id)),3).map(s=>s.id);n.pending.push({kind:"perk",node:-1,opts:i,title:`Commander reached level ${t.cmd.lvl}`}),ke(n,`Your Commander reached level ${t.cmd.lvl}`,"good")}}function cd(n,e){const t=new Set(n.specs.filter(a=>a.owner===k).map(a=>a.def)),i=zl.filter(a=>!t.has(a)),s=[],r=3+(rt(n,k).offer||0),o=n.stats.rarePity||0;for(let a=0;a<r;a++){const c=Nt(n)*100,l=X.offerOdds[2]+o;let u=c<l?2:c<l+X.offerOdds[1]?1:0,h=i.filter(f=>!s.includes(f)&&De[f].rarity===u);for(;!h.length&&u>0;)u--,h=i.filter(f=>!s.includes(f)&&De[f].rarity===u);h.length||(h=i.filter(f=>!s.includes(f))),h.length&&s.push(kr(n,h))}if(n.stats.rarePity=s.some(a=>De[a].rarity===2)?0:o+X.offerPity,!s.length){n.sides[k].ult+=20;return}n.pending.push({kind:"spec",node:e,opts:s,title:e===n.home&&n.t<1?"Your first recruit":`Recruits at ${n.nodes[e].name}`,t:n.t})}function Kp(n,e,t){const i=n.sides[k].relics,s=a=>Object.values(hn).filter(c=>c.rarity===a&&!i.includes(c.id)).map(c=>c.id),r=e==="rare"?"uncommon":"common";let o=Ss(n,s(e),e==="common"?3:2);if(o.length<3&&(o=o.concat(Ss(n,s(r).filter(a=>!o.includes(a)),3-o.length))),!o.length){n.sides[k].ult+=30;return}n.pending.push({kind:"relic",node:t,opts:o,title:"Choose a relic",t:n.t})}function Zp(n,e){const t=$t[e].pre;return t?n.includes(t)||!!$t[t].excl&&n.includes($t[t].excl):!0}function Jp(n,e){const t=n.sides[e].techs;return Object.keys($t).filter(i=>!t.includes(i)&&Zp(t,i)&&!($t[i].excl&&t.includes($t[i].excl)))}const ma=(n,e)=>X.rpBase+X.rpStep*n.sides[e].techs.length;function Gf(n){const e=Ss(n,Jp(n,k),3);return e.length?(n.pending.push({kind:"tech",node:-1,opts:e,title:"Research complete: choose one",t:n.t}),!0):!1}function dd(n,e,t){const i=n.sides[e];i.techs.includes(t)||(i.techs.push(t),n.modV++,e===k?(n.stats.techs++,ke(n,`Researched ${$t[t].name}`,"good")):ke(n,`${Zt(n,e)} fielded ${$t[t].name}`,"warn"))}function Hf(n,e,t){const i=n.sides[k];for(const s of t)switch(s[0]){case"ult":i.ult+=s[1];break;case"drones":e.drones+=s[1];break;case"relic":Kp(n,s[1],e.id);break;case"tech":Gf(n)||(i.ult+=30);break;case"spec":cd(n,e.id);break;case"xp":ld(n,s[1]);break;case"shield":e.sh<3?e.sh++:i.ult+=20;break;case"buff":e.buffs.push({k:s[1],v:s[2],until:n.t+s[3]}),n.modV++;break;case"mobil":n.mob.prog=Math.max(0,Math.min(.99,n.mob.prog+s[1]));break;case"hold":e.hold={until:n.t+s[1],total:s[1],need:s[2],fx:s[3],name:e.event?pn[e.event].name:"Operation"};break;case"reveal":for(const r of n.nodes)Ne(r,e)<=s[1]&&r.buffs.push({k:"scan",v:1,until:n.t+45});Fs(n);break;case"ambush":{const r=Nt(n)*Math.PI*2;n.fleets.push({id:n.nextId++,owner:0,home:-1,slot:!1,from:e.id,to:e.id,x:e.x+Math.cos(r)*48,y:e.y+Math.sin(r)*48,drones:s[1],specs:[],off:!0}),ke(n,`Automata are closing on ${e.name} with ${s[1]} Drones`,"warn",e.id);break}}}function Vf(n,e,t){return t.ult&&n.sides[k].ult<t.ult?"Not enough Ultanium":t.drones&&e.drones<t.drones?"Not enough Drones here":t.req&&!e.specs.some(i=>n.specs[i].def===t.req&&n.specs[i].owner===k)?`Needs your ${De[t.req].name} at this node`:null}const $f=n=>X.skipUlt+X.skipUltStage*(n.mob.stage-1);function Qp(n,e,t=0){const i=n.pending[t];if(!i)return"Nothing to choose";const s=n.sides[k],r=()=>{n.pending.splice(t,1)};if(i.kind==="event"){const a=n.nodes[i.node],c=pn[i.event];if(a.owner!==k||a.event!==i.event)return r(),null;if(e<0)return null;const l=c.choices[e],u=Vf(n,a,l);return u||(l.ult&&(s.ult-=l.ult),l.drones&&(a.drones-=l.drones),r(),Hf(n,a,l.fx),a.event=null,n.stats.events++,c.lore&&!n.lore.includes(c.lore)&&n.lore.push(c.lore),ke(n,`${c.name}: ${l.label}`,"info",a.id),null)}if(i.kind==="terms")return r(),e===0?(n.result="win",n.resultWhy=`Decisive victory. ${is[n.sides[n.archon].fac].name} accepts your terms, and the Reach is free of the Coalition.`):ke(n,"You refuse terms. The Citadel must fall.","warn",n.citadel),null;if(i.kind==="spec"&&e<0){r();const a=$f(n);return s.ult+=a,ke(n,`Recruits declined: ◆+${a}`,"info",i.node),null}const o=i.opts[e];if(o===void 0)return"Pick one";if(i.kind==="spec"&&n.specs.some(a=>a.owner===k&&a.def===o))return`You already have a ${De[o].name}`;if(r(),i.kind==="draft"){const a=Ji(n,o.base,k,n.home);a.cmd={base:o.base,arch:o.arch,lvl:1,xp:0,perks:[]},a.name="Commander",n.cmdSpec=a.id,cd(n,n.home)}else if(i.kind==="spec"){const a=n.nodes[i.node].owner===k?n.nodes[i.node]:Li(n,k);if(a){const c=Ji(n,o,k,a.id);rt(n,k).recruitUp&&(c.lvl=2,c.xp=X.upXp),ke(n,`${Cn(c)} joined at ${a.name}`,"good",a.id),n.stats.specs++}}else i.kind==="relic"?(s.relics.push(o),n.stats.relics++,ke(n,`Relic claimed: ${hn[o].name}`,"good")):i.kind==="perk"?n.specs[n.cmdSpec].cmd.perks.push(o):i.kind==="tech"&&dd(n,k,o);return n.modV++,null}function Wf(n,e){return De[e.def].group==="warlord"?id(n):e.node>=0&&pt(n,n.nodes[e.node]).recruitFree?0:X.recruitCost}function jp(n,e,t){if(e.held!==k||e.node<0)return"Not your prisoner";const i=n.sides[k],s=rt(n,k),r=De[e.def].group==="warlord";if(e.def==="archon")return"The Archon cannot be ransomed or turned";if(t){if(e.def==="captain")return"Captains cannot be recruited";if(n.specs.some(a=>a.owner===k&&a.def===e.def))return`You already have a ${De[e.def].name}`;const o=Wf(n,e);return i.ult<o?"Not enough Ultanium":(i.ult-=o,e.owner=k,e.cd=0,e.xp=0,e.lvl=1,Gn(n,e,n.nodes[e.node]),n.stats.specs++,ke(n,`${Cn(e)} now works for you`,"good",e.node),null)}return i.ult+=r?X.warlordRansom:Math.round(X.ransom*(1+(s.ransom||0))),rs(n,e),null}const Xf=n=>X.rescueSecs+(rt(n,k).rescue||0),ud=n=>n.upk+X.upkeepDrone<=n.inc*(n.kind==="player"?X.armyShare:1),fd=(n,e,t)=>Math.max(2,X.prodSecs[e.lv]-((t||pt(n,e)).prodSecs||0));function em(n){const e=X.dt;if(n.t+=e,n.tick++,n.tick%10===1)for(const s in n.sides){const r=Df(n,+s),o=n.sides[s];o.inc=r.inc,o.upk=r.upk,o.net=r.net,o.rpm=r.rpm}for(const s of n.nodes){s.buffs.length&&s.buffs.some(u=>u.until<=n.t)&&(s.buffs=s.buffs.filter(u=>u.until>n.t),n.modV++);const r=n.sides[s.owner],o=r?pt(n,s):{},a=Jr(n,s,o);if(o.fx_breach?s.shields=0:s.shields<a?s.shields=Math.min(a,s.shields+e*(1+(o.regen||0))/X.shieldRegenSecs):s.shields>a&&!o.capHold&&(s.shields=Math.max(a,s.shields-e/10)),!r)continue;const c=s.queue[0];c&&(c.left-=e*(1+(o.build||0)),c.left<=0&&(s.queue.shift(),Dp(n,s,c)));const l=()=>{s.drones++,r.net-=X.upkeepDrone,r.upk+=X.upkeepDrone,s.owner===k&&n.stats.dronesMade++};if(r.produce&&ud(r)&&(s.kind==="station"&&(s.prod+=e,s.prod>=fd(n,s,o)&&(s.prod=0,l())),o.train&&(s.trainT+=e*o.train/60,s.trainT>=1&&(s.trainT-=1,l()))),s.dest){const u=Ne(s,s.dest),h=X.flagshipSpeed*e;u<=h?(s.x=s.dest.x,s.y=s.dest.y,s.dest=null,s.anchorT=n.t+X.anchorSecs,s.sailT=s.anchorT+X.sailCooldown,s.owner===k&&ke(n,`${s.name} arrives and anchors: ready to act in ${X.anchorSecs} s`,"info",s.id)):(s.x+=(s.dest.x-s.x)/u*h,s.y+=(s.dest.y-s.y)/u*h)}if(s.hold&&n.t>=s.hold.until){const u=s.hold;s.hold=null,s.drones>=u.need?(ke(n,`${u.name} complete at ${s.name}`,"good",s.id),Hf(n,s,u.fx)):ke(n,`${u.name} failed at ${s.name}: fewer than ${u.need} Drones on site`,"bad",s.id)}}for(const s in n.sides){const r=n.sides[s];if(r.ult+=r.net*e/60,r.kind==="player"&&(n.stats.ultMade+=r.inc*e/60,r.rp+=r.rpm*e/60),r.ult<0&&(r.ult=0,r.desertT+=e,r.desertT>=X.desertSecs)){r.desertT=0;const o=n.nodes.filter(a=>a.owner===+s&&a.drones>0).sort((a,c)=>c.drones-a.drones)[0];o&&(o.drones--,r.net+=X.upkeepDrone,r.kind==="player"&&n.tick%300<40&&ke(n,"You cannot pay your Drones: they are deserting","bad",o.id))}}const t=n.sides[k];if(t.rp>=ma(n,k)&&!n.pending.some(s=>s.kind==="tech")){const s=ma(n,k);Gf(n)?t.rp-=s:t.rp=s}n.tick%5===0&&Vp(n),n.tick%10===5&&Gp(n);for(const s of n.fleets.slice()){if(!n.fleets.includes(s))continue;if(s.hunt!==void 0){const l=Er(n,s.hunt);if(!l){const f=n.nodes[s.home].owner===s.owner?n.nodes[s.home]:Li(n,s.owner);if(delete s.hunt,!f){uo(n,s,null,0);continue}s.to=f.id,s.back=!0;continue}const u=Ne(s,l),h=$l(n,s)*X.interceptSpeed*e;u<=h+X.interceptReach?Hp(n,s,l):(s.x+=(l.x-s.x)/u*h,s.y+=(l.y-s.y)/u*h);continue}const r=n.nodes[s.to],o=Ne(s,r),a=$l(n,s)*e,c=!s.missile&&!s.lane&&!s.probe&&s.drones>0&&r.owner!==s.owner;if(!(!c&&!s.missile&&r.owner===s.owner&&pi(n,r,"fx_cutoff")&&o<=a+X.engageDist)){if(s.fight!==void 0){if(!c){delete s.fight,il(n,s);continue}s.fight-=e,s.fight<=0&&(delete s.fight,il(n,s));continue}if(c&&o<=a+X.engageDist){const l=Math.max(0,o-X.engageDist)/Math.max(o,.001);s.x+=(r.x-s.x)*l,s.y+=(r.y-s.y)*l,s.fight=X.fightSecs,Bp(n,s,r);continue}o<=a?il(n,s):(s.x+=(r.x-s.x)/o*a,s.y+=(r.y-s.y)/o*a)}}n.tick%20===0&&Yp(n),n.tick%10===0&&(n.pending=n.pending.filter(s=>!((s.kind==="spec"||s.kind==="event")&&s.node>=0&&n.nodes[s.node].owner!==k)));const i=n.specs[n.cmdSpec];if(i){if(i.owner!==k)n.result="lose",n.resultWhy="Your Commander was lost.";else if(i.held){const s=i.node>=0?n.nodes[i.node].name:"an enemy fleet";n.cmdLostT<0?(n.cmdLostT=n.t,ke(n,`YOUR COMMANDER IS A PRISONER at ${s}. Retake it before the window closes.`,"bad",i.node)):n.t-n.cmdLostT>=Xf(n)&&(n.result="lose",n.resultWhy=`Your Commander was not recovered from ${s} in time.`)}else n.cmdLostT=-1;!n.result&&!n.nodes.some(s=>s.owner===k)&&(n.result="lose",n.resultWhy="You hold no territory.")}n.tick%3===0&&Fs(n)}const hd="spacenodes.tune.v2",tm=JSON.parse(JSON.stringify(X)),lr=X,nu={fleetSpeed:"Map units per second",startUlt:"Starting Ultanium",startDrones:"Starting Drones",baseIncome:"Free Ultanium per minute",freeBase:"Drones that cost no upkeep",mineOut:"Ultanium/min by mine level (0,1,2,3)",sizeMult:"Planet size multiplier (small, medium, large)",refineryMult:"Refinery output multiplier",labRp:"Research per minute per Lab",labWorkers:"Extra Drones a Lab needs",supplyFree:"Drones a Supply world feeds",upkeepDrone:"Ultanium/min per Drone",upXp:"Experience to upgrade an officer",depotMult:"Upkeep multiplier for Drones in a Depot",armyShare:"Stations stop building when upkeep reaches this share of income",desertSecs:"Seconds per deserting Drone when broke",lvCost:"Cost to reach level (-, -, 2, 3)",lvTime:"Seconds per level upgrade",shCost:"Cost to reach shield level (-, 1, 2, 3)",shTime:"Seconds per shield upgrade",specCost:"Specialty cost",specTime:"Specialty build seconds",missileCost:"Missile cost",missileTime:"Missile build seconds",missileRange:"Missile reach",missileKill:"Drones a missile destroys",missileSpeed:"Missile speed multiplier",prodSecs:"Seconds per Drone by Barracks level (-, 1, 2, 3)",shieldPerLv:"Shield per shield level",shieldRegenSecs:"Seconds per shield point recharged",slotsStation:"Launch slots per station",slotsPlanet:"Launch slots per planet",crew:"Officers per fleet",sailCooldown:"Flagship rest after anchoring (s)",anchorSecs:"Flagship anchoring time (s)",rallyBatch:"Spare Drones before a rally convoy leaves",fleetFov:"Fleet vision: full intelligence, detection",fovInner:"Node full-intelligence radius",fovOuter:"Node detection radius",corridorCost:"Corridor cost",corridorTime:"Corridor build seconds",corridorRange:"Corridor reach",corridorMax:"Corridors per node",corridorSpeed:"Convoy speed multiplier",rescueSecs:"Commander rescue window",ransom:"Ultanium per ransom",recruitCost:"Cost to recruit a prisoner",rpBase:"Research needed for the first choice",rpStep:"Extra research per technology known",xpLevels:"Commander experience per level",nodes:"Nodes on the map (next run)",neutralShield:"Shield level on neutral planets by size (next run)",stageSecs:"Seconds per mobilization stage",graceSecs:"Seconds before the first offensive",offInterval:"Seconds between offensives, by stage",offCommit:"Share of Drones sent on offensives, by stage",gatherSecs:"Seconds an offensive gathers",stageFree:"Reserve Drones each faction gains per stage",surgeFree:"Reserve Drones per total-war surge",captureSetback:"Mobilization lost per enemy node captured",aegisPerLayer:"Citadel Aegis per unbroken faction"};function ea(){try{return JSON.parse(localStorage.getItem(hd)||"{}")}catch{return{}}}function iu(n){try{localStorage.setItem(hd,JSON.stringify(n))}catch{}}function qf(n,e){const t=lr[n];Array.isArray(t)&&Array.isArray(e)?(t.length=0,t.push(...e)):t&&typeof t=="object"&&e&&typeof e=="object"?Object.assign(t,e):lr[n]=e}function nm(){const n=ea();for(const e in n)e in lr&&qf(e,n[e])}const sl=n=>Array.isArray(n)?n.join(", "):n&&typeof n=="object"?JSON.stringify(n):String(n);function im(n,e){return Array.isArray(e)?n.split(/[,\s]+/).filter(Boolean).map(Number):e&&typeof e=="object"?JSON.parse(n):Number(n)}const sm=n=>Array.isArray(n)?n.length>0&&n.every(e=>Number.isFinite(e)):typeof n=="number"?Number.isFinite(n):n!==null&&typeof n=="object";function rm(n){const e=document.createElement("div");e.id="console",document.body.appendChild(e);let t="values",i="";const s=["Type help for commands."];function r(){const l=ea(),u=i.toLowerCase();let h="";if(t==="values")for(const m of Object.keys(X))m==="dt"||u&&!(m+(nu[m]||"")).toLowerCase().includes(u)||(h+=`<label class="crow ${sl(lr[m])!==sl(tm[m])?"changed":""}"><span><b>${m}</b><small>${nu[m]||""}</small></span><input data-k="${m}" value='${sl(lr[m])}'></label>`);else h=`<div class="cout">${s.slice(-60).map(m=>`<div>${m.replace(/</g,"&lt;")}</div>`).join("")}</div><input id="ccmd" placeholder="command, e.g. ult 500" autocomplete="off">`;const f=Object.keys(l).length;e.innerHTML=`<div class="chead"><b>Tuning console</b><small>${f} change${f===1?"":"s"} saved in this browser</small><button data-c="close">✕</button></div>
      <div class="ctabs">${["values","commands"].map(m=>`<button data-c="tab:${m}" class="${t===m?"on":""}">${m}</button>`).join("")}</div>
      ${t==="values"?`<input id="cfilter" placeholder="filter" value="${i}">`:""}
      <div class="cbody">${h}</div>
      <div class="cfoot"><button data-c="export">Copy changes</button><button data-c="import">Paste changes</button><button data-c="reset">Reset all</button></div>
      <p class="dim">Most values apply at once. Map values (node count, neutral shields) apply to the next new run.</p>`,t==="commands"&&e.querySelector("#ccmd")?.focus()}function o(l){const u=ea(),h=l.dataset.k;try{const f=im(l.value,lr[h]);if(!sm(f))throw 0;qf(h,f),u[h]=f,iu(u),n.refresh(),r()}catch{l.classList.add("bad")}}function a(l){const[u,...h]=l.trim().split(/\s+/),f=n.game(),m=h[0]!==void 0?Number(h[0]):NaN,_=n.selected();s.push(`> ${l}`);const x=p=>s.push(p);if(u==="help"||!u){x("ult N · drones N (selected node) · econ · reveal · stage N · mob 0-1 · rp N · tech ID · relic ID · spec ID · upgrade (all officers) · win · speed N · list specs|relics|techs");return}if(u==="list"){x((h[0]==="relics"?Object.keys(hn):h[0]==="techs"?Object.keys($t):Object.keys(De)).join(" "));return}if(u==="speed"){n.setSpeed(Math.max(1,Math.min(32,m||1))),x(`speed ${m}x`);return}if(!f){x("Start a run first.");return}const d=f.sides[k];switch(u){case"ult":d.ult+=m||0,x(`Ultanium ${Math.floor(d.ult)}`);break;case"drones":_<0||f.nodes[_].owner!==k?x("Select one of your nodes first"):(f.nodes[_].drones+=m||0,x(`${f.nodes[_].name}: ${f.nodes[_].drones} Drones`));break;case"econ":{const p=Df(f,k);x(`income ${p.inc.toFixed(1)} · upkeep ${p.upk.toFixed(1)} (officers ${p.specUp.toFixed(1)}) · Drones ${p.drones}, ${p.free} free · research ${p.rpm.toFixed(1)}/min`);break}case"reveal":for(const p of f.nodes)p.buffs.push({k:"scan",v:1,until:f.t+120});Fs(f),x("Whole map identified for 2 minutes");break;case"stage":f.mob.stage=Math.max(1,Math.min(5,m||1)),f.mob.prog=0,x(`Mobilization stage ${f.mob.stage}`);break;case"mob":f.mob.prog=Math.max(0,Math.min(.99,m||0)),x(`Mobilization progress ${f.mob.prog}`);break;case"rp":d.rp+=m||0,x(`Research points ${d.rp.toFixed(0)}`);break;case"tech":$t[h[0]]?(dd(f,k,h[0]),x(`Granted ${$t[h[0]].name}`)):x("Unknown technology");break;case"relic":hn[h[0]]?(d.relics.push(h[0]),f.modV++,x(`Relic ${hn[h[0]].name}`)):x("Unknown relic");break;case"spec":{const p=_>=0&&f.nodes[_].owner===k?_:f.home;De[h[0]]?(Ji(f,h[0],k,p),x(`${De[h[0]].name} at ${f.nodes[p].name}`)):x("Unknown officer");break}case"upgrade":for(const p of f.specs)p.owner===k&&!p.cmd&&(p.lvl=2,p.xp=X.upXp);f.modV++,x("Every officer is upgraded");break;case"win":f.result="win",f.resultWhy="Console.";break;default:x("Unknown command. Type help.")}n.refresh()}e.addEventListener("click",l=>{const u=l.target.closest("[data-c]");if(!u)return;const[h,f]=u.dataset.c.split(":");if(h==="close")c(!1);else if(h==="tab")t=f,r();else if(h==="export"){const m=JSON.stringify(ea(),null,1);navigator.clipboard?.writeText(m).catch(()=>{}),s.push("Changes copied to the clipboard:",m),t="commands",r()}else if(h==="import"){const m=prompt("Paste tuning JSON");if(m)try{iu(JSON.parse(m)),location.reload()}catch{alert("That is not valid JSON")}}else h==="reset"&&confirm("Reset every tuned value to the default? The page reloads.")&&(localStorage.removeItem(hd),location.reload())}),e.addEventListener("change",l=>{const u=l.target;u.dataset.k&&o(u)}),e.addEventListener("input",l=>{const u=l.target;if(u.id==="cfilter"){i=u.value;const h=u.selectionStart;r();const f=e.querySelector("#cfilter");f.focus(),f.setSelectionRange(h,h)}}),e.addEventListener("keydown",l=>{l.stopPropagation();const u=l.target;l.key==="Enter"&&u.id==="ccmd"?(a(u.value),r()):l.key==="Enter"&&u.dataset.k?o(u):(l.key==="`"||l.key==="Escape")&&(l.preventDefault(),c(!1))});function c(l){const u=l??!e.classList.contains("open");e.classList.toggle("open",u),u&&r()}return document.addEventListener("keydown",l=>{(l.key==="`"||l.key==="F2")&&!l.target.closest("input,textarea")&&(l.preventDefault(),c())}),{toggle:c}}const om=["Kestrel","Bastille","Harrow","Vigil","Anchor","Lantern","Marrow","Cinder","Tether","Gantry","Rook","Ward","Halcyon","Talon","Spindle","Ember","Quarry","Beacon","Keel","Sable"],am=["Ka","Ve","Or","Tal","Mi","Sen","Dra","Ul","Phe","Ny","Cor","Az","Lo","Ery","Bri","Zan","Hel","Qua","Io","Xe"],lm=["ris","dan","thos","mir","vek","lun","tar","ion","sha","bor","nea","rax","phi","dor","lys","gan","tis","mon","rae","kai"];function rl(n,e,t,i){return{owner:n,kind:e,fac:t,ult:i,techs:[],relics:[],produce:!0,rp:0,free:0,net:0,inc:0,upk:0,rpm:0,broken:!1,aiT:6+n*2,expT:60+n*15,desertT:0,refundT:0}}function cm(n,e=0,t=[]){const r={v:2,seed:n,rng:n|0,t:0,tick:0,modV:1,threat:e,w:430,h:290,nodes:[],fleets:[],specs:[],corridors:[],sides:{},factions:[2,3,4],archon:5,mob:{stage:1,prog:0,nextOff:X.graceSecs,turn:0,surge:0},offs:[],pending:[],log:[],cmdSpec:-1,cmdLostT:-1,intel:[],vis:[],result:null,resultWhy:"",stats:{captures:0,nodesLost:0,battles:0,dronesLost:0,dronesMade:0,specs:0,specsLost:0,relics:0,techs:0,events:0,warlords:0,ultMade:0},nextId:1,home:0,citadel:1,terms:!1,lore:[],loreQueue:[]};for(let R=0;R<5;R++)Nt(r);const o=[{x:yn(r,36,50),y:yn(r,290*.35,290*.65),region:k},{x:430-yn(r,36,50),y:yn(r,290*.35,290*.65),region:5}];for(let R=0;R<8e3&&o.length<X.nodes;R++){const N={x:yn(r,22,408),y:yn(r,22,268),region:0};o.every(z=>Ne(N,z)>=34)&&o.push(N)}const a=o[0],c=o[1],l=()=>o.filter(R=>R.region===0),u=(R,N)=>N.slice().sort((z,C)=>Ne(z,R)-Ne(C,R));for(const R of u(c,l()).slice(0,2))Ne(R,c)<90&&(R.region=5);const h=js(r,[.18,.82]),f=[{x:.52,y:.5},{x:.6,y:h[0]},{x:.6,y:h[1]}],m=[];for(const R of[2,1,0]){const N={x:f[R].x*430+yn(r,-12,12),y:f[R].y*290+yn(r,-12,12)},z=u(N,l().filter(C=>Ne(C,a)>120))[0];z.region=2+R,m[R]=z;for(const C of u(z,l().filter(B=>Ne(B,a)>95)).slice(0,3))Ne(C,z)<90&&(C.region=2+R)}const _=Ss(r,Object.keys(zn),3);r.sides[k]=rl(k,"player","",X.startUlt),_.forEach((R,N)=>r.sides[2+N]=rl(2+N,"faction",R,20)),r.sides[5]=rl(5,"archon",kr(r,Object.keys(is)),30);const x=Ne(a,c),d=u(a,l()),p=new Set,v=()=>{for(;;){const R=kr(r,am)+kr(r,lm);if(!p.has(R))return p.add(R),R}},w=ss.map(R=>R.id);r.loreQueue=js(r,w.filter(R=>!t.includes(R))).concat(js(r,w.filter(R=>t.includes(R))));const S=r.loreQueue.slice();let E=[];const T=R=>{if(R==="station"&&S.length)return"arc_"+S.shift();E.length||(E=js(r,Object.keys(pn).filter(z=>!pn[z].lore)));const N=E.findIndex(z=>pn[z].on==="any"||pn[z].on===R);return N<0?null:E.splice(N,1)[0]},g=1+.1*e;o.forEach((R,N)=>{const z=Math.max(0,Math.min(1,Ne(R,a)/x+yn(r,-.12,.12))),C={id:N,name:v(),kind:"planet",x:R.x,y:R.y,size:0,owner:R.region,region:R.region,threat:z,drones:0,shields:0,lv:1,sh:0,spec:"",queue:[],prod:0,missile:0,specs:[],prisoners:[],buffs:[],event:null,offer:!1,hold:null,front:!1,trainT:0,capT:-999,capital:!1,citadel:!1,home:!1},B=Nt(r);C.size=B<.35?0:B<.8?1:2;const H=r.sides[R.region]?.kind==="faction"?zn[r.sides[R.region].fac]:null;if(R===a)C.kind="station",C.home=!0,C.drones=X.startDrones,C.name="Haven",C.sh=1;else if(R===c)C.kind="station",C.citadel=!0,C.name="The Citadel",C.drones=Math.round(16*g),C.lv=3,C.sh=3,C.spec="fortress";else if(R.region===0){const F=d.indexOf(R);C.owner=0,C.kind=F<2?"planet":F===2?"station":Nt(r)<.58?"planet":"station",F===0&&(C.size=0),F===1&&(C.size=1);const ne=F<=2||Ne(R,a)<70;C.drones=ne?jo(r,0,1):Math.round((z*8*yn(r,.6,1.3)+1)*g),C.sh=C.kind==="planet"?X.neutralShield[C.size]:1,C.offer=C.kind==="planet"||Nt(r)<.5,F>1&&(C.kind==="station"?Nt(r)<.9:Nt(r)<.25)&&(C.event=T(C.kind))}else{const F=m.includes(R);C.capital=F,C.kind=F?"station":Nt(r)<.55?"planet":"station",C.drones=Math.round((F?9+z*5:3+z*5*yn(r,.7,1.2))*g),R.region===5?(C.drones=Math.round(jo(r,6,9)*g),C.sh=2,C.lv=2):(C.sh=Math.min(3,(H?H.ai.shield:1)-(F?0:1)+(Nt(r)<.4?1:0)),F&&(C.lv=2,C.sh=Math.max(2,C.sh))),C.sh=Math.max(0,C.sh),H&&Nt(r)<.6&&(C.spec=C.kind==="planet"?H.ai.planet:H.ai.station)}C.kind==="station"&&!C.home&&!C.citadel&&(C.name=`${kr(r,om)}-${jo(r,2,99)}`),C.shields=C.sh*X.shieldPerLv,r.nodes.push(C),r.intel.push({seen:0,t:0,snap:null}),r.vis.push(0)});for(const R of r.factions){const N=zn[r.sides[R].fac],z=r.nodes.filter(H=>H.owner===R),C=z.find(H=>H.capital);C.name=N.name.split(" ")[0]+" Prime",Ji(r,wp[N.id],R,C.id);const B=[C,C,js(r,z.filter(H=>!H.capital))[0]||C];N.specs.forEach((H,F)=>Ji(r,H,R,B[F].id)),r.sides[R].free=z.reduce((H,F)=>H+F.drones,0)+4}const b=is[r.sides[5].fac];Ji(r,"archon",5,1).name=`${b.name} ${b.title}`,r.sides[5].free=r.nodes.filter(R=>R.owner===5).reduce((R,N)=>R+N.drones,0)+6;const L=Ss(r,bp,3),P=Ss(r,Object.keys(Ns),3);return r.pending.push({kind:"draft",node:0,opts:L.map((R,N)=>({base:R,arch:P[N]})),title:"Choose your Commander"}),Fs(r),r}const dm={aggr:1,expand:1e9,react:.9,target:"weak",shield:3,planet:"refinery",station:"fortress"},Yf=(n,e)=>n.sides[e].kind==="faction"?zn[n.sides[e].fac].ai:dm,Xl=(n,e)=>Es(n,0,0,[],e,{}).def+(e.owner===k&&pt(n,e).mask?12:0);function um(n,e){return 2+3*e.specs.length+(e.specs.includes(n.cmdSpec)?6:0)+(e.spec?2:0)+e.lv+.5*e.sh+1.5*eo(n,e.id).length+(e.home?4:0)+(e.flagship?6:0)+(e.kind==="station"?1:0)}const su=n=>lo(n,{def:"captain"},n.mob.stage);function ql(n,e,t,i){const s=Math.max(1,Math.min(gr(),Math.ceil(i/su(n))));i=Math.min(i,s*su(n));const r=Array.from({length:s},()=>Ji(n,"captain",e.owner,e.id));if(as(n,e,t,i,r.map(a=>a.id))){for(const a of r)e.specs=e.specs.filter(c=>c!==a.id),a.owner=-1,a.node=-1;return!1}return!0}function fm(n,e){const t=n.sides[e],i=Yf(n,e),s=n.nodes.filter(o=>o.owner===e);if(!s.length||t.broken)return;for(const o of s)if(!o.queue.length){if(o.spec==="silo"&&!o.missile&&!Xi(n,o,"missile")){Br(n,o,"missile");continue}Nt(n)>.35||(o.sh<Math.min(3,i.shield)&&!Xi(n,o,"sh")?Br(n,o,"sh"):!o.spec&&!Xi(n,o,"spec",o.kind==="planet"?i.planet:i.station)?Br(n,o,"spec",o.kind==="planet"?i.planet:i.station):o.lv<3&&!Xi(n,o,"lv")&&Br(n,o,"lv"))}for(const o of n.fleets){if(o.owner!==k||o.drones<=0||o.noticed||o.lane)continue;const a=n.nodes[o.to];if(a.owner!==e||(o.noticed=!0,us(n,o).stealth||Nt(n)>i.react))continue;const c=ka(n,o,a),l=s.filter(u=>u.id!==a.id&&u.drones>4&&kn(n,u)>0&&Ne(u,a)/X.fleetSpeed+1<c).sort((u,h)=>h.drones-u.drones)[0];l&&as(n,l,a,Math.floor((l.drones-2)*.6),[])}const r=s.filter(o=>!o.capital&&o.drones<2+Math.round(o.threat*3)).sort((o,a)=>o.drones-a.drones)[0];if(r){const o=s.filter(a=>a.id!==r.id&&a.drones>8&&kn(n,a)>0).sort((a,c)=>Ne(a,r)-Ne(c,r))[0];o&&as(n,o,r,Math.min(4,Math.floor((o.drones-5)/2)+1),[])}for(const o of s){if(o.spec!=="silo"||!o.missile||n.mob.stage<2||n.t<(t.missileT||0))continue;const a=n.nodes.filter(c=>c.owner===k&&!ho(n,o,c)).sort((c,l)=>l.drones-c.drones)[0];a&&!od(n,o,a)&&(t.missileT=n.t+X.aiMissileSecs)}if(t.kind==="faction"&&n.mob.stage>=2&&n.t>=(t.counterT||0)){let o=null;for(const a of n.nodes){if(a.owner!==k||a.dest||n.t-a.capT>X.counterWindow)continue;const c=Xl(n,a)+2;for(const l of s)kn(n,l)<1||Ne(l,a)>160||l.drones-3<c||(!o||Ne(l,a)<Ne(o.src,o.tgt))&&(o={src:l,tgt:a,need:c})}o&&ql(n,o.src,o.tgt,Math.min(o.src.drones-3,o.need+2))&&(t.counterT=n.t+X.counterSecs,ke(n,`${Zt(n,e)} counterattacks ${o.tgt.name}`,"warn",o.tgt.id))}if(n.t>=t.expT&&t.kind==="faction"){let o=null;for(const a of s)if(!(kn(n,a)<1))for(const c of n.nodes){if(c.owner!==0)continue;const l=Ne(a,c);if(l>115)continue;const u=Xl(n,c)+1;a.drones-2>=u&&(!o||l<o.d)&&(o={src:a,tgt:c,need:u,d:l})}o&&ql(n,o.src,o.tgt,o.need+jo(n,0,1))&&(t.expT=n.t+i.expand*yn(n,.8,1.2))}}function hm(n,e){const t=Yf(n,e),i=n.nodes.filter(m=>m.owner===e),s=n.nodes.filter(m=>m.owner===k);if(!i.length||!s.length)return;let r=null,o=1e9;for(const m of s){if(n.offs.some(v=>v.target===m.id)||m.dest)continue;const _=Math.min(...i.map(v=>Ne(v,m))),x=Xl(n,m),d=Math.pow(um(n,m)*(t.target==="spec"?1+m.specs.length:1),Math.min(1,n.mob.stage/3)),p=(x+4)/d*(t.target==="near"?4:10)+_*(t.target==="near"?.6:.3);p<o&&(o=p,r=m)}if(!r)return;const a=r,c=i.slice().sort((m,_)=>Ne(m,a)-Ne(_,a))[0],l=Math.min(.95,X.offCommit[n.mob.stage]*(1+(rt(n,n.archon).offBig||0))*(.7+.3*t.aggr)),u=i.filter(m=>m.id!==c.id&&m.drones>=4&&kn(n,m)>0&&Ne(m,c)<190).sort((m,_)=>Ne(m,c)-Ne(_,c)).slice(0,1+n.mob.stage+n.mob.surge);let h=X.gatherSecs;for(const m of u){const _=m.capital||m.citadel?Math.max(5,Math.floor(m.drones*.4)):2,x=Math.floor((m.drones-_)*l);x>0&&!as(n,m,c,x,[])&&(h=Math.max(h,Ne(m,c)/X.fleetSpeed+5))}const f=(rt(n,k).warn||0)>0;n.offs.push({owner:e,target:a.id,staging:c.id,launchT:n.t+h,warned:f}),ke(n,f?`${Zt(n,e)} is massing at ${c.name} to strike ${a.name}`:`${Zt(n,e)} is mobilizing for an offensive`,"warn",f?a.id:-1)}function pm(n,e){const t=n.nodes[e.staging];if(t.owner!==e.owner||n.sides[e.owner].broken)return;let i=n.nodes[e.target];if(i.owner!==k){const a=n.nodes.filter(c=>c.owner===k).sort((c,l)=>Ne(c,t)-Ne(l,t))[0];if(!a)return;i=a}const s=n.nodes.find(a=>a.owner===e.owner&&!ho(n,a,i));s&&od(n,s,i);const r=t.capital||t.citadel?Math.max(5,Math.floor(t.drones*.4)):2,o=t.drones-r;o<3||ql(n,t,i,o)}function mm(n){const e=n.mob,t=X.stageSecs*(1-.05*n.threat);if(e.prog+=X.dt/t*Math.max(.3,1-(rt(n,k).mobSlow||0)),e.prog>=1)if(e.prog=0,e.stage>=5){e.surge++;for(const i of[...n.factions,n.archon])n.sides[i].broken||(n.sides[i].free+=X.surgeFree);ke(n,`Total war: Coalition reserves deepen (surge ${e.surge}). Every faction can field more Drones.`,"warn")}else{e.stage++,ke(n,`Coalition mobilization reached stage ${e.stage}. Offensives grow larger and more frequent.`,"warn");for(const i of[...n.factions,n.archon]){const s=n.sides[i];if(s.broken||(s.free+=X.stageFree,s.kind!=="faction"))continue;if(s.fac==="tithe"){const o=n.nodes.find(a=>a.owner===i&&a.capital)||n.nodes.find(a=>a.owner===i);o&&Ji(n,zl.filter(a=>De[a].rarity>=1)[Math.floor(Nt(n)*zl.filter(a=>De[a].rarity>=1).length)],i,o.id)}const r=zn[s.fac].techs.filter(o=>!s.techs.includes(o));for(const o of r.slice(0,s.fac==="lumen"?2:1))dd(n,i,o)}}if(n.t>=e.nextOff){const i=n.factions.filter(r=>!n.sides[r].broken&&n.nodes.some(o=>o.owner===r));(e.stage>=4||!i.length)&&i.push(n.archon);const s=Math.min(i.length,e.stage>=4?3:e.stage>=3?2:1);for(let r=0;r<s;r++)hm(n,i[(e.turn+r)%i.length]);e.turn++,e.nextOff=n.t+X.offInterval[e.stage]*yn(n,.85,1.15)/(1+.04*n.threat)/(1+.15*e.surge)}if(n.offs.length){const i=n.offs.filter(s=>n.t>=s.launchT);if(i.length){n.offs=n.offs.filter(s=>n.t<s.launchT);for(const s of i)pm(n,s)}}}function gm(n){const e=ar(n,k);if(n.t<600||e<30)return;for(const i of n.factions)n.sides[i].broken||!n.nodes.some(r=>r.owner===i)||ar(n,i)<X.surrender*e&&kf(n,i,`The ${Zt(n,i)} lays down its arms.`);const t=[...n.factions,n.archon].reduce((i,s)=>i+ar(n,s),0);!n.terms&&(n.factions.every(i=>n.sides[i].broken)||t<X.terms*e)&&(n.terms=!0,n.pending.push({kind:"terms",node:n.citadel,opts:[0,1],title:`${Zt(n,n.archon)} sues for peace`}))}function _m(n){mm(n),n.tick%50===0&&gm(n);for(const e of[...n.factions,n.archon]){const t=n.sides[e];n.t>=t.aiT&&(t.aiT=n.t+8+Nt(n)*4,fm(n,e))}}const pd=n=>n.pending.some(e=>e.kind==="draft");function Kf(n){return n.result||pd(n)?!1:(em(n),n.result||_m(n),!0)}function Zf(n,e){if(n.result)return"The run is over";const t=s=>{const r=n.nodes[s];return r&&r.owner===k?r:null},i=s=>{const r=n.specs[s];return r&&r.owner===k?r:null};switch(e.c){case"up":{const s=t(e.node);return s?Br(n,s,e.what,e.id):"Not your node"}case"cancel":{const s=t(e.node);return s?(Pp(n,s,e.idx||0),null):"Not your node"}case"corridor":return n.nodes[e.from]&&n.nodes[e.to]?Np(n,n.nodes[e.from],n.nodes[e.to]):"Unknown node";case"launch":{const s=t(e.from);return s&&n.nodes[e.to]?as(n,s,n.nodes[e.to],e.drones,e.specs):"Not your node"}case"convoy":{const s=t(e.from);return s&&n.nodes[e.to]?Ga(n,s,n.nodes[e.to],e.drones,e.specs):"Not your node"}case"move":{const s=i(e.spec);return s&&n.nodes[e.to]?Wp(n,s,n.nodes[e.to]):"Not your officer"}case"missile":{const s=t(e.from);return s&&n.nodes[e.to]?od(n,s,n.nodes[e.to]):"Not your node"}case"rally":{const s=t(e.node);return s?qp(n,s):"Not your node"}case"front":{const s=t(e.node);return s?(s.front=!s.front,null):"Not your node"}case"sail":{const s=t(e.node);return s?$p(n,s,e.x,e.y):"Not your node"}case"produce":return n.sides[k].produce=!n.sides[k].produce,null;case"choose":return Qp(n,e.idx,e.which||0);case"ransom":{const s=n.specs[e.spec];return s?jp(n,s,e.recruit):"Unknown prisoner"}case"event":{const s=t(e.node);return!s||!s.event?"No event here":(n.pending.some(r=>r.kind==="event"&&r.node===s.id)||n.pending.push({kind:"event",node:s.id,opts:[],title:pn[s.event].name,event:s.event,t:n.t}),null)}}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const md="187",vm=0,ru=1,xm=2,ta=1,Mm=2,zr=3,As=0,vn=1,li=2,cr=0,Yr=1,ou=2,au=3,lu=4,Sm=5,er=100,ym=101,bm=102,wm=103,Em=104,Tm=200,Am=201,Rm=202,Cm=203,Jf=204,Qf=205,Pm=206,Dm=207,Lm=208,Im=209,Nm=210,Um=211,Fm=212,Om=213,km=214,Yl=0,Kl=1,Zl=2,to=3,Jl=4,Ql=5,jl=6,ec=7,gd=0,Bm=1,zm=2,Ci=0,jf=1,eh=2,th=3,nh=4,ih=5,sh=6,rh=7,oh=300,vr=301,no=302,ol=303,al=304,tc=1e3,Ai=1001,nc=1002,Kt=1003,Gm=1004,bo=1005,gn=1006,ll=1007,qi=1008,En=1009,ah=1010,lh=1011,io=1012,_d=1013,mi=1014,ci=1015,gi=1016,vd=1017,xd=1018,xr=1020,ch=35902,dh=35899,uh=1021,fh=1022,di=1023,ls=1026,Yi=1027,hh=1028,Md=1029,Rs=1030,Sd=1031,yd=1033,na=33776,ia=33777,sa=33778,ra=33779,ic=35840,sc=35841,rc=35842,oc=35843,ac=36196,lc=37492,cc=37496,dc=37488,uc=37489,ga=37490,fc=37491,hc=37808,pc=37809,mc=37810,gc=37811,_c=37812,vc=37813,xc=37814,Mc=37815,Sc=37816,yc=37817,bc=37818,wc=37819,Ec=37820,Tc=37821,Ac=36492,Rc=36494,Cc=36495,Pc=36283,Dc=36284,_a=36285,Lc=36286,Hm=3200,Ic=0,Vm=1,$i="",bn="srgb",va="srgb-linear",xa="linear",ht="srgb",cl=7680,$m=519,Wm=512,Xm=513,qm=514,ph=515,Ym=516,Km=517,mh=518,gh=519,Zm=35044,cu="300 es",Qn=2e3,so=2001;function Jm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ma(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Qm(){const n=Ma("canvas");return n.style.display="block",n}const du={};function uu(...n){const e="THREE."+n.shift();console.log(e,...n)}function _h(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Oe(...n){n=_h(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function lt(...n){n=_h(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function oa(...n){const e=n.join(" ");e in du||(du[e]=!0,Oe(...n))}function jm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const e0={[Yl]:Yl,[Zl]:jl,[Jl]:Jl,[to]:Ql,[Kl]:Kl,[jl]:Zl,[ec]:ec,[Ql]:to};class Os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dl=Math.PI/180,Nc=180/Math.PI;function po(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function nt(n,e,t){return Math.max(e,Math.min(t,n))}function t0(n,e){return(n%e+e)%e}function ul(n,e,t){return(1-t)*n+t*e}function n0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function bd(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function i0(n,e){if(e.constructor===Float32Array)return n;const t=bd(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function s0(n,e){if(e.constructor===Float32Array)return n;const t=bd(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const Od=class Od{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Od.prototype.isVector2=!0;let Ke=Od;class Rr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],m=r[o+1],_=r[o+2],x=r[o+3];if(h!==x||c!==f||l!==m||u!==_){let d=c*f+l*m+u*_+h*x;d<0&&(f=-f,m=-m,_=-_,x=-x,d=-d);let p=1-a;if(d<.9995){const v=Math.acos(d),w=Math.sin(v);p=Math.sin(p*v)/w,a=Math.sin(a*v)/w,c=c*p+f*a,l=l*p+m*a,u=u*p+_*a,h=h*p+x*a}else{c=c*p+f*a,l=l*p+m*a,u=u*p+_*a,h=h*p+x*a;const v=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=v,l*=v,u*=v,h*=v}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+u*h+c*m-l*f,e[t+1]=c*_+u*f+l*h-a*m,e[t+2]=l*_+u*m+a*f-c*h,e[t+3]=u*_-a*h-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),f=c(i/2),m=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*m*_,this._y=l*m*h-f*u*_,this._z=l*u*_+f*m*h,this._w=l*u*h-f*m*_;break;case"YXZ":this._x=f*u*h+l*m*_,this._y=l*m*h-f*u*_,this._z=l*u*_-f*m*h,this._w=l*u*h+f*m*_;break;case"ZXY":this._x=f*u*h-l*m*_,this._y=l*m*h+f*u*_,this._z=l*u*_+f*m*h,this._w=l*u*h-f*m*_;break;case"ZYX":this._x=f*u*h-l*m*_,this._y=l*m*h+f*u*_,this._z=l*u*_-f*m*h,this._w=l*u*h+f*m*_;break;case"YZX":this._x=f*u*h+l*m*_,this._y=l*m*h+f*u*_,this._z=l*u*_-f*m*h,this._w=l*u*h-f*m*_;break;case"XZY":this._x=f*u*h-l*m*_,this._y=l*m*h-f*u*_,this._z=l*u*_+f*m*h,this._w=l*u*h+f*m*_;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const kd=class kd{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fl.copy(this).projectOnVector(e),this.sub(fl)}reflect(e){return this.sub(fl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};kd.prototype.isVector3=!0;let G=kd;const fl=new G,fu=new Rr,Bd=class Bd{constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],m=i[5],_=i[8],x=s[0],d=s[3],p=s[6],v=s[1],w=s[4],S=s[7],E=s[2],T=s[5],g=s[8];return r[0]=o*x+a*v+c*E,r[3]=o*d+a*w+c*T,r[6]=o*p+a*S+c*g,r[1]=l*x+u*v+h*E,r[4]=l*d+u*w+h*T,r[7]=l*p+u*S+h*g,r[2]=f*x+m*v+_*E,r[5]=f*d+m*w+_*T,r[8]=f*p+m*S+_*g,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*r,m=l*r-o*c,_=t*h+i*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(s*l-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=m*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return oa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hl.makeScale(e,t)),this}rotate(e){return oa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hl.makeRotation(-e)),this}translate(e,t){return oa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Bd.prototype.isMatrix3=!0;let Ge=Bd;const hl=new Ge,hu=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pu=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function r0(){const n={enabled:!0,workingColorSpace:va,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ht&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(s.r=dr(s.r),s.g=dr(s.g),s.b=dr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$i?xa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[va]:{primaries:e,whitePoint:i,transfer:xa,toXYZ:hu,fromXYZ:pu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:e,whitePoint:i,transfer:ht,toXYZ:hu,fromXYZ:pu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),n}const tt=r0();function Pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function dr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Bs;class o0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Bs===void 0&&(Bs=Ma("canvas")),Bs.width=e.width,Bs.height=e.height;const s=Bs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Bs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ma("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pi(t[i]/255)*255):t[i]=Pi(t[i]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let a0=0;class wd{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=po(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pl(s[o].image)):r.push(pl(s[o]))}else r=pl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function pl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?o0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let l0=0;const ml=new G;class rn extends Os{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,i=Ai,s=Ai,r=gn,o=qi,a=di,c=En,l=rn.DEFAULT_ANISOTROPY,u=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=po(),this.name="",this.source=new wd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ml).x}get height(){return this.source.getSize(ml).y}get depth(){return this.source.getSize(ml).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tc:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case nc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tc:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case nc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=oh;rn.DEFAULT_ANISOTROPY=1;const zd=class zd{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],m=c[5],_=c[9],x=c[2],d=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(_-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(_+d)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,S=(m+1)/2,E=(p+1)/2,T=(u+f)/4,g=(h+x)/4,b=(_+d)/4;return w>S&&w>E?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=T/i,r=g/i):S>E?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=T/s,r=b/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=g/r,s=b/r),this.set(i,s,r,t),this}let v=Math.sqrt((d-_)*(d-_)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(d-_)/v,this.y=(h-x)/v,this.z=(f-u)/v,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zd.prototype.isVector4=!0;let wt=zd;class c0 extends Os{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];const s=i.count;for(let r=0;r<s;r++)this.textures[r]=new rn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new wd(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends c0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class vh extends rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class d0 extends rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const La=class La{constructor(e,t,i,s,r,o,a,c,l,u,h,f,m,_,x,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,u,h,f,m,_,x,d)}set(e,t,i,s,r,o,a,c,l,u,h,f,m,_,x,d){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=m,p[7]=_,p[11]=x,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new La().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/zs.setFromMatrixColumn(e,0).length(),r=1/zs.setFromMatrixColumn(e,1).length(),o=1/zs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,m=o*h,_=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+_*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=_+m*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,m=c*h,_=l*u,x=l*h;t[0]=f+x*a,t[4]=_*a-m,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,m=c*h,_=l*u,x=l*h;t[0]=f-x*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,m=o*h,_=a*u,x=a*h;t[0]=c*u,t[4]=_*l-m,t[8]=f*l+x,t[1]=c*h,t[5]=x*l+f,t[9]=m*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,m=o*l,_=a*c,x=a*l;t[0]=c*u,t[4]=x-f*h,t[8]=_*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*h+_,t[10]=f-x*h}else if(e.order==="XZY"){const f=o*c,m=o*l,_=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+x,t[5]=o*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(u0,e,f0)}lookAt(e,t,i){const s=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ui.crossVectors(i,Mn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ui.crossVectors(i,Mn)),Ui.normalize(),wo.crossVectors(Mn,Ui),s[0]=Ui.x,s[4]=wo.x,s[8]=Mn.x,s[1]=Ui.y,s[5]=wo.y,s[9]=Mn.y,s[2]=Ui.z,s[6]=wo.z,s[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],m=i[13],_=i[2],x=i[6],d=i[10],p=i[14],v=i[3],w=i[7],S=i[11],E=i[15],T=s[0],g=s[4],b=s[8],L=s[12],P=s[1],R=s[5],N=s[9],z=s[13],C=s[2],B=s[6],H=s[10],F=s[14],ne=s[3],Y=s[7],te=s[11],ie=s[15];return r[0]=o*T+a*P+c*C+l*ne,r[4]=o*g+a*R+c*B+l*Y,r[8]=o*b+a*N+c*H+l*te,r[12]=o*L+a*z+c*F+l*ie,r[1]=u*T+h*P+f*C+m*ne,r[5]=u*g+h*R+f*B+m*Y,r[9]=u*b+h*N+f*H+m*te,r[13]=u*L+h*z+f*F+m*ie,r[2]=_*T+x*P+d*C+p*ne,r[6]=_*g+x*R+d*B+p*Y,r[10]=_*b+x*N+d*H+p*te,r[14]=_*L+x*z+d*F+p*ie,r[3]=v*T+w*P+S*C+E*ne,r[7]=v*g+w*R+S*B+E*Y,r[11]=v*b+w*N+S*H+E*te,r[15]=v*L+w*z+S*F+E*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],m=e[14],_=e[3],x=e[7],d=e[11],p=e[15],v=c*m-l*f,w=a*m-l*h,S=a*f-c*h,E=o*m-l*u,T=o*f-c*u,g=o*h-a*u;return t*(x*v-d*w+p*S)-i*(_*v-d*E+p*T)+s*(_*w-x*E+p*g)-r*(_*S-x*T+d*g)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-i*(r*u-a*c)+s*(r*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],m=e[11],_=e[12],x=e[13],d=e[14],p=e[15],v=t*a-i*o,w=t*c-s*o,S=t*l-r*o,E=i*c-s*a,T=i*l-r*a,g=s*l-r*c,b=u*x-h*_,L=u*d-f*_,P=u*p-m*_,R=h*d-f*x,N=h*p-m*x,z=f*p-m*d,C=v*z-w*N+S*R+E*P-T*L+g*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/C;return e[0]=(a*z-c*N+l*R)*B,e[1]=(s*N-i*z-r*R)*B,e[2]=(x*g-d*T+p*E)*B,e[3]=(f*T-h*g-m*E)*B,e[4]=(c*P-o*z-l*L)*B,e[5]=(t*z-s*P+r*L)*B,e[6]=(d*S-_*g-p*w)*B,e[7]=(u*g-f*S+m*w)*B,e[8]=(o*N-a*P+l*b)*B,e[9]=(i*P-t*N-r*b)*B,e[10]=(_*T-x*S+p*v)*B,e[11]=(h*S-u*T-m*v)*B,e[12]=(a*L-o*R-c*b)*B,e[13]=(t*R-i*L+s*b)*B,e[14]=(x*w-_*E-d*v)*B,e[15]=(u*E-h*w+f*v)*B,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,f=r*l,m=r*u,_=r*h,x=o*u,d=o*h,p=a*h,v=c*l,w=c*u,S=c*h,E=i.x,T=i.y,g=i.z;return s[0]=(1-(x+p))*E,s[1]=(m+S)*E,s[2]=(_-w)*E,s[3]=0,s[4]=(m-S)*T,s[5]=(1-(f+p))*T,s[6]=(d+v)*T,s[7]=0,s[8]=(_+w)*g,s[9]=(d-v)*g,s[10]=(1-(f+x))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=zs.set(s[0],s[1],s[2]).length();const a=zs.set(s[4],s[5],s[6]).length(),c=zs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Wn.copy(this);const l=1/o,u=1/a,h=1/c;return Wn.elements[0]*=l,Wn.elements[1]*=l,Wn.elements[2]*=l,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=h,Wn.elements[9]*=h,Wn.elements[10]*=h,t.setFromRotationMatrix(Wn),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=Qn,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),m=(i+s)/(i-s);let _,x;if(c)_=r/(o-r),x=o*r/(o-r);else if(a===Qn)_=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===so)_=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Qn,c=!1){const l=this.elements,u=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),m=-(i+s)/(i-s);let _,x;if(c)_=1/(o-r),x=o/(o-r);else if(a===Qn)_=-2/(o-r),x=-(o+r)/(o-r);else if(a===so)_=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};La.prototype.isMatrix4=!0;let vt=La;const zs=new G,Wn=new vt,u0=new G(0,0,0),f0=new G(1,1,1),Ui=new G,wo=new G,Mn=new G,mu=new vt,gu=new Rr;class cs{constructor(e=0,t=0,i=0,s=cs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gu.setFromEuler(this),this.setFromQuaternion(gu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cs.DEFAULT_ORDER="XYZ";class xh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let h0=0;const _u=new G,Gs=new Rr,vi=new vt,Eo=new G,Dr=new G,p0=new G,m0=new Rr,vu=new G(1,0,0),xu=new G(0,1,0),Mu=new G(0,0,1),Su={type:"added"},g0={type:"removed"},Hs={type:"childadded",child:null},gl={type:"childremoved",child:null};class Ut extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new G,t=new cs,i=new Rr,s=new G(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ge}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(vu,e)}rotateY(e){return this.rotateOnAxis(xu,e)}rotateZ(e){return this.rotateOnAxis(Mu,e)}translateOnAxis(e,t){return _u.copy(e).applyQuaternion(this.quaternion),this.position.add(_u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vu,e)}translateY(e){return this.translateOnAxis(xu,e)}translateZ(e){return this.translateOnAxis(Mu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Eo.copy(e):Eo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Dr,Eo,this.up):vi.lookAt(Eo,Dr,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),Gs.setFromRotationMatrix(vi),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Su),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(g0),gl.child=e,this.dispatchEvent(gl),gl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Su),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,e,p0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,m0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ut.DEFAULT_UP=new G(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _n extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _0={type:"move"};class _l{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const d=t.getJointPose(x,i),p=this._getHandJoint(l,x);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,_=.005;l.inputState.pinching&&f>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new _n;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},To={h:0,s:0,l:0};function vl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=tt.workingColorSpace){if(e=t0(e,1),t=nt(t,0,1),i=nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=vl(o,r,e+1/3),this.g=vl(o,r,e),this.b=vl(o,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=bn){function i(r){r!==void 0&&parseFloat(r)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const i=Mh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return tt.workingToColorSpace(tn.copy(this),e),Math.round(nt(tn.r*255,0,255))*65536+Math.round(nt(tn.g*255,0,255))*256+Math.round(nt(tn.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(tn.copy(this),t);const i=tn.r,s=tn.g,r=tn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=bn){tt.workingToColorSpace(tn.copy(this),e);const t=tn.r,i=tn.g,s=tn.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(To);const i=ul(Fi.h,To.h,t),s=ul(Fi.s,To.s,t),r=ul(Fi.l,To.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Xe;Xe.NAMES=Mh;class v0 extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cs,this.environmentIntensity=1,this.environmentRotation=new cs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Xn=new G,xi=new G,xl=new G,Mi=new G,Vs=new G,$s=new G,yu=new G,Ml=new G,Sl=new G,yl=new G,bl=new wt,wl=new wt,El=new wt;class Kn{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Xn.subVectors(e,t),s.cross(Xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Xn.subVectors(s,t),xi.subVectors(i,t),xl.subVectors(e,t);const o=Xn.dot(Xn),a=Xn.dot(xi),c=Xn.dot(xl),l=xi.dot(xi),u=xi.dot(xl),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,m=(l*c-a*u)*f,_=(o*u-a*c)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Mi.x),c.addScaledVector(o,Mi.y),c.addScaledVector(a,Mi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return bl.setScalar(0),wl.setScalar(0),El.setScalar(0),bl.fromBufferAttribute(e,t),wl.fromBufferAttribute(e,i),El.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(bl,r.x),o.addScaledVector(wl,r.y),o.addScaledVector(El,r.z),o}static isFrontFacing(e,t,i,s){return Xn.subVectors(i,t),xi.subVectors(e,t),Xn.cross(xi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Xn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Kn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Vs.subVectors(s,i),$s.subVectors(r,i),Ml.subVectors(e,i);const c=Vs.dot(Ml),l=$s.dot(Ml);if(c<=0&&l<=0)return t.copy(i);Sl.subVectors(e,s);const u=Vs.dot(Sl),h=$s.dot(Sl);if(u>=0&&h<=u)return t.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0&&c-u>0)return o=c/(c-u),t.copy(i).addScaledVector(Vs,o);yl.subVectors(e,r);const m=Vs.dot(yl),_=$s.dot(yl);if(_>=0&&m<=_)return t.copy(r);const x=m*l-c*_;if(x<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(i).addScaledVector($s,a);const d=u*_-m*h;if(d<=0&&h-u>=0&&m-_>=0)return yu.subVectors(r,s),a=(h-u)/(h-u+(m-_)),t.copy(s).addScaledVector(yu,a);const p=1/(d+x+f);return o=x*p,a=f*p,t.copy(i).addScaledVector(Vs,o).addScaledVector($s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class mo{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(r,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ao.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ao.copy(i.boundingBox)),Ao.applyMatrix4(e.matrixWorld),this.union(Ao)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lr),Ro.subVectors(this.max,Lr),Ws.subVectors(e.a,Lr),Xs.subVectors(e.b,Lr),qs.subVectors(e.c,Lr),Oi.subVectors(Xs,Ws),ki.subVectors(qs,Xs),gs.subVectors(Ws,qs);let t=[0,-Oi.z,Oi.y,0,-ki.z,ki.y,0,-gs.z,gs.y,Oi.z,0,-Oi.x,ki.z,0,-ki.x,gs.z,0,-gs.x,-Oi.y,Oi.x,0,-ki.y,ki.x,0,-gs.y,gs.x,0];return!Tl(t,Ws,Xs,qs,Ro)||(t=[1,0,0,0,1,0,0,0,1],!Tl(t,Ws,Xs,qs,Ro))?!1:(Co.crossVectors(Oi,ki),t=[Co.x,Co.y,Co.z],Tl(t,Ws,Xs,qs,Ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Si=[new G,new G,new G,new G,new G,new G,new G,new G],qn=new G,Ao=new mo,Ws=new G,Xs=new G,qs=new G,Oi=new G,ki=new G,gs=new G,Lr=new G,Ro=new G,Co=new G,_s=new G;function Tl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){_s.fromArray(n,r);const a=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),c=e.dot(_s),l=t.dot(_s),u=i.dot(_s);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ct=new G,Po=new Ke;let x0=0;class ys extends Os{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:x0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zm,this.updateRanges=[],this.gpuType=ci,this.version=0,this._normalizationScale=e!==void 0?bd(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Po.fromBufferAttribute(this,t),Po.applyMatrix3(e),this.setXY(t,Po.x,Po.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):i0(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):s0(e,this.array)}}class Sh extends ys{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class yh extends ys{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class dt extends ys{constructor(e,t,i){super(new Float32Array(e),t,i)}}const M0=new mo,Ir=new G,Al=new G;class go{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):M0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ir.subVectors(e,this.center);const t=Ir.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ir,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Al.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ir.copy(e.center).add(Al)),this.expandByPoint(Ir.copy(e.center).sub(Al))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let S0=0;const Un=new vt,Rl=new Ut,Ys=new G,Sn=new mo,Nr=new mo,Gt=new G;class Jt extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=po(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jm(e)?yh:Sh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,i){return Un.makeTranslation(e,t,i),this.applyMatrix4(Un),this}scale(e,t,i){return Un.makeScale(e,t,i),this.applyMatrix4(Un),this}lookAt(e){return Rl.lookAt(e),Rl.updateMatrix(),this.applyMatrix4(Rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Nr.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(Sn.min,Nr.min),Sn.expandByPoint(Gt),Gt.addVectors(Sn.max,Nr.max),Sn.expandByPoint(Gt)):(Sn.expandByPoint(Nr.min),Sn.expandByPoint(Nr.max))}Sn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Gt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Gt.fromBufferAttribute(a,l),c&&(Ys.fromBufferAttribute(e,l),Gt.add(Ys)),s=Math.max(s,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new ys(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[],l=new Uint8Array(i.count);for(let L=0;L<i.count;L++)a[L]=new G,c[L]=new G;const u=new G,h=new G,f=new G,m=new Ke,_=new Ke,x=new Ke,d=new G,p=new G;function v(L,P,R){l[L]=l[P]=l[R]=1,u.fromBufferAttribute(i,L),h.fromBufferAttribute(i,P),f.fromBufferAttribute(i,R),m.fromBufferAttribute(r,L),_.fromBufferAttribute(r,P),x.fromBufferAttribute(r,R),h.sub(u),f.sub(u),_.sub(m),x.sub(m);const N=1/(_.x*x.y-x.x*_.y);isFinite(N)&&(d.copy(h).multiplyScalar(x.y).addScaledVector(f,-_.y).multiplyScalar(N),p.copy(f).multiplyScalar(_.x).addScaledVector(h,-x.x).multiplyScalar(N),a[L].add(d),a[P].add(d),a[R].add(d),c[L].add(p),c[P].add(p),c[R].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let L=0,P=w.length;L<P;++L){const R=w[L],N=R.start,z=R.count;for(let C=N,B=N+z;C<B;C+=3)v(e.getX(C+0),e.getX(C+1),e.getX(C+2))}const S=new G,E=new G,T=new G,g=new G;function b(L){T.fromBufferAttribute(s,L),g.copy(T);const P=a[L];S.copy(P),S.sub(T.multiplyScalar(T.dot(P))).normalize(),E.crossVectors(g,P);const N=E.dot(c[L])<0?-1:1;o.setXYZW(L,S.x,S.y,S.z,N)}for(let L=0,P=i.count;L<P;++L)l[L]&&b(L);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ys(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new G,r=new G,o=new G,a=new G,c=new G,l=new G,u=new G,h=new G;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),x=e.getX(f+1),d=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,d),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,d),a.add(u),c.add(u),l.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(d,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let m=0,_=0;for(let x=0,d=c.length;x<d;x++){a.isInterleavedBufferAttribute?m=c[x]*a.data.stride+a.offset:m=c[x]*u;for(let p=0;p<u;p++)f[_++]=l[m++]}return new ys(f,u,h)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jt,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],m=e(f,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cl=new G,y0=new G,b0=new Ge;class Hi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Cl.subVectors(i,t).cross(y0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Cl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||b0.getNormalMatrix(e),s=this.coplanarPoint(Cl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let w0=0;class ks extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=po(),this.name="",this.type="Material",this.blending=Yr,this.side=As,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jf,this.blendDst=Qf,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$m,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cl,this.stencilZFail=cl,this.stencilZPass=cl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Hi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ke().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ke().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const yi=new G,Pl=new G,Do=new G,Lo=new G;class Ed{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Pl.copy(e).add(t).multiplyScalar(.5),Do.copy(t).sub(e).normalize(),Lo.copy(this.origin).sub(Pl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Do),a=Lo.dot(this.direction),c=-Lo.dot(Do),l=Lo.lengthSq(),u=Math.abs(1-o*o);let h,f,m,_;if(u>0)if(h=o*c-a,f=o*a-c,_=r*u,h>=0)if(f>=-_)if(f<=_){const x=1/u;h*=x,f*=x,m=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+f*(f+2*c)+l):f<=_?(h=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Pl).addScaledVector(Do,f),m}intersectSphere(e,t){if(e.radius<0)return null;yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),s=yi.dot(yi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,i,s,r){const o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,h=e.x-o.x,f=e.y-o.y,m=e.z-o.z,_=t.x-o.x,x=t.y-o.y,d=t.z-o.z,p=i.x-o.x,v=i.y-o.y,w=i.z-o.z,S=Math.abs(c),E=Math.abs(l),T=Math.abs(u);let g,b,L,P,R,N,z,C,B,H,F,ne;if(S>=E&&S>=T?(L=c,N=h,B=_,ne=p,c>=0?(g=l,b=u,P=f,R=m,z=x,C=d,H=v,F=w):(g=u,b=l,P=m,R=f,z=d,C=x,H=w,F=v)):E>=T?(L=l,N=f,B=x,ne=v,l>=0?(g=u,b=c,P=m,R=h,z=d,C=_,H=w,F=p):(g=c,b=u,P=h,R=m,z=_,C=d,H=p,F=w)):(L=u,N=m,B=d,ne=w,u>=0?(g=c,b=l,P=h,R=f,z=_,C=x,H=p,F=v):(g=l,b=c,P=f,R=h,z=x,C=_,H=v,F=p)),L===0)return null;const Y=g/L,te=b/L,ie=1/L,Ae=P-Y*N,Fe=R-te*N,J=z-Y*B,ge=C-te*B,we=H-Y*ne,Le=F-te*ne,Me=we*ge-Le*J,$e=Ae*Le-Fe*we,At=J*Fe-ge*Ae;if(s){if(Me<0||$e<0||At<0)return null}else if((Me<0||$e<0||At<0)&&(Me>0||$e>0||At>0))return null;const Ue=Me+$e+At;if(Ue===0)return null;const ut=ie*(Me*N+$e*B+At*ne);return(Ue>0?ut<0:ut>0)?null:this.at(ut/Ue,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Sa extends ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cs,this.combine=gd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bu=new vt,vs=new Ed,Io=new go,wu=new G,No=new G,Uo=new G,Fo=new G,Dl=new G,Oo=new G,Eu=new G,ko=new G;class Vt extends Ut{constructor(e=new Jt,t=new Sa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Oo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Dl.fromBufferAttribute(h,e),o?Oo.addScaledVector(Dl,u):Oo.addScaledVector(Dl.sub(t),u))}t.add(Oo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(r),vs.copy(e.ray).recast(e.near),!(Io.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Io,wu)===null||vs.origin.distanceToSquared(wu)>(e.far-e.near)**2))&&(bu.copy(r).invert(),vs.copy(e.ray).applyMatrix4(bu),!(i.boundingBox!==null&&vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,vs)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const d=f[_],p=o[d.materialIndex],v=Math.max(d.start,m.start),w=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let S=v,E=w;S<E;S+=3){const T=a.getX(S),g=a.getX(S+1),b=a.getX(S+2);s=Bo(this,p,e,i,l,u,h,T,g,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let d=_,p=x;d<p;d+=3){const v=a.getX(d),w=a.getX(d+1),S=a.getX(d+2);s=Bo(this,o,e,i,l,u,h,v,w,S),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const d=f[_],p=o[d.materialIndex],v=Math.max(d.start,m.start),w=Math.min(c.count,Math.min(d.start+d.count,m.start+m.count));for(let S=v,E=w;S<E;S+=3){const T=S,g=S+1,b=S+2;s=Bo(this,p,e,i,l,u,h,T,g,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let d=_,p=x;d<p;d+=3){const v=d,w=d+1,S=d+2;s=Bo(this,o,e,i,l,u,h,v,w,S),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}}function E0(n,e,t,i,s,r,o,a){let c;if(e.side===vn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===As,a),c===null)return null;ko.copy(a),ko.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ko);return l<t.near||l>t.far?null:{distance:l,point:ko.clone(),object:n}}function Bo(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,No),n.getVertexPosition(c,Uo),n.getVertexPosition(l,Fo);const u=E0(n,e,t,i,No,Uo,Fo,Eu);if(u){const h=new G;Kn.getBarycoord(Eu,No,Uo,Fo,h),s&&(u.uv=Kn.getInterpolatedAttribute(s,a,c,l,h,new Ke)),r&&(u.uv1=Kn.getInterpolatedAttribute(r,a,c,l,h,new Ke)),o&&(u.normal=Kn.getInterpolatedAttribute(o,a,c,l,h,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new G,materialIndex:0};Kn.getNormal(No,Uo,Fo,f.normal),u.face=f,u.barycoord=h}return u}class T0 extends rn{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Kt,u=Kt,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xs=new go,A0=new Ke(.5,.5),zo=new G;class ro{constructor(e=new Hi,t=new Hi,i=new Hi,s=new Hi,r=new Hi,o=new Hi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Qn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],m=r[7],_=r[8],x=r[9],d=r[10],p=r[11],v=r[12],w=r[13],S=r[14],E=r[15];if(s[0].setComponents(l-o,m-u,p-_,E-v).normalize(),s[1].setComponents(l+o,m+u,p+_,E+v).normalize(),s[2].setComponents(l+a,m+h,p+x,E+w).normalize(),s[3].setComponents(l-a,m-h,p-x,E-w).normalize(),i)s[4].setComponents(c,f,d,S).normalize(),s[5].setComponents(l-c,m-f,p-d,E-S).normalize();else if(s[4].setComponents(l-c,m-f,p-d,E-S).normalize(),t===Qn)s[5].setComponents(l+c,m+f,p+d,E+S).normalize();else if(t===so)s[5].setComponents(c,f,d,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){xs.center.set(0,0,0);const t=A0.distanceTo(e.center);return xs.radius=.7071067811865476+t,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(zo.x=s.normal.x>0?e.max.x:e.min.x,zo.y=s.normal.y>0?e.max.y:e.min.y,zo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Tu=new vt;class Td{constructor(){this.coordinateSystem=Qn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];Tu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new ro),i[s].setFromProjectionMatrix(Tu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ro),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new Td().copy(this)}}class Uc extends ks{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ya=new G,ba=new G,Au=new vt,Ur=new Ed,Go=new go,Ll=new G,Ru=new G;class R0 extends Ut{constructor(e=new Jt,t=new Uc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ya.fromBufferAttribute(t,s-1),ba.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ya.distanceTo(ba);e.setAttribute("lineDistance",new dt(i,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Go.copy(i.boundingSphere),Go.applyMatrix4(s),Go.radius+=r,e.ray.intersectsSphere(Go)===!1)return;Au.copy(s).invert(),Ur.copy(e.ray).applyMatrix4(Au);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const m=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=m,d=_-1;x<d;x+=l){const p=u.getX(x),v=u.getX(x+1),w=Ho(this,e,Ur,c,p,v,x);w&&t.push(w)}if(this.isLineLoop){const x=u.getX(_-1),d=u.getX(m),p=Ho(this,e,Ur,c,x,d,_-1);p&&t.push(p)}}else{const m=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let x=m,d=_-1;x<d;x+=l){const p=Ho(this,e,Ur,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=Ho(this,e,Ur,c,_-1,m,_-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ho(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(ya.fromBufferAttribute(a,s),ba.fromBufferAttribute(a,r),t.distanceSqToSegment(ya,ba,Ll,Ru)>i)return;Ll.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ll);if(!(l<e.near||l>e.far))return{distance:l,point:Ru.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class Cu extends R0{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class bh extends ks{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pu=new vt,Fc=new Ed,Vo=new go,$o=new G;class C0 extends Ut{constructor(e=new Jt,t=new bh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vo.copy(i.boundingSphere),Vo.applyMatrix4(s),Vo.radius+=r,e.ray.intersectsSphere(Vo)===!1)return;Pu.copy(s).invert(),Fc.copy(e.ray).applyMatrix4(Pu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){const f=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let _=f,x=m;_<x;_++){const d=l.getX(_);$o.fromBufferAttribute(h,d),Du($o,d,c,s,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,x=m;_<x;_++)$o.fromBufferAttribute(h,_),Du($o,_,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Du(n,e,t,i,s,r,o){const a=Fc.distanceSqToPoint(n);if(a<t){const c=new G;Fc.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class wh extends rn{constructor(e=[],t=vr,i,s,r,o,a,c,l,u){super(e,t,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lu extends rn{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mr extends rn{constructor(e,t,i=mi,s,r,o,a=Kt,c=Kt,l,u=ls,h=1){if(u!==ls&&u!==Yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Eh extends Mr{constructor(e,t=mi,i=vr,s,r,o=Kt,a=Kt,c,l=ls){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Th extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ct extends Jt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(h,2));function _(x,d,p,v,w,S,E,T,g,b,L){const P=S/g,R=E/b,N=S/2,z=E/2,C=T/2,B=g+1,H=b+1;let F=0,ne=0;const Y=new G;for(let te=0;te<H;te++){const ie=te*R-z;for(let Ae=0;Ae<B;Ae++){const Fe=Ae*P-N;Y[x]=Fe*v,Y[d]=ie*w,Y[p]=C,l.push(Y.x,Y.y,Y.z),Y[x]=0,Y[d]=0,Y[p]=T>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(Ae/g),h.push(1-te/b),F+=1}}for(let te=0;te<b;te++)for(let ie=0;ie<g;ie++){const Ae=f+ie+B*te,Fe=f+ie+B*(te+1),J=f+(ie+1)+B*(te+1),ge=f+(ie+1)+B*te;c.push(Ae,Fe,ge),c.push(Fe,J,ge),ne+=6}a.addGroup(m,ne,L),m+=ne,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ct(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Va extends Jt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new G,u=new Ke;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const m=i+h/t*s;l.x=e*Math.cos(m),l.y=e*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(a,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Je extends Jt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],m=[];let _=0;const x=[],d=i/2;let p=0;v(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new dt(h,3)),this.setAttribute("normal",new dt(f,3)),this.setAttribute("uv",new dt(m,2));function v(){const S=new G,E=new G;let T=0;const g=(t-e)/i;for(let b=0;b<=r;b++){const L=[],P=b/r,R=P*(t-e)+e;for(let N=0;N<=s;N++){const z=N/s,C=z*c+a,B=Math.sin(C),H=Math.cos(C);E.x=R*B,E.y=-P*i+d,E.z=R*H,h.push(E.x,E.y,E.z),S.set(B,g,H).normalize(),f.push(S.x,S.y,S.z),m.push(z,1-P),L.push(_++)}x.push(L)}for(let b=0;b<s;b++)for(let L=0;L<r;L++){const P=x[L][b],R=x[L+1][b],N=x[L+1][b+1],z=x[L][b+1];(e>0||L!==0)&&(u.push(P,R,z),T+=3),(t>0||L!==r-1)&&(u.push(R,N,z),T+=3)}l.addGroup(p,T,0),p+=T}function w(S){const E=_,T=new Ke,g=new G;let b=0;const L=S===!0?e:t,P=S===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,d*P,0),f.push(0,P,0),m.push(.5,.5),_++;const R=_;for(let N=0;N<=s;N++){const C=N/s*c+a,B=Math.cos(C),H=Math.sin(C);g.x=L*H,g.y=d*P,g.z=L*B,h.push(g.x,g.y,g.z),f.push(0,P,0),T.x=B*.5+.5,T.y=H*.5*P+.5,m.push(T.x,T.y),_++}for(let N=0;N<s;N++){const z=E+N,C=R+N;S===!0?u.push(C,C+1,z):u.push(C+1,C,z),b+=3}l.addGroup(p,b,S===!0?1:2),p+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Je(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bn extends Je{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Bn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $a extends Jt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const w=new G,S=new G,E=new G;for(let T=0;T<t.length;T+=3)m(t[T+0],w),m(t[T+1],S),m(t[T+2],E),c(w,S,E,v)}function c(v,w,S,E){const T=E+1,g=[];for(let b=0;b<=T;b++){g[b]=[];const L=v.clone().lerp(S,b/T),P=w.clone().lerp(S,b/T),R=T-b;for(let N=0;N<=R;N++)N===0&&b===T?g[b][N]=L:g[b][N]=L.clone().lerp(P,N/R)}for(let b=0;b<T;b++)for(let L=0;L<2*(T-b)-1;L++){const P=Math.floor(L/2);L%2===0?(f(g[b][P+1]),f(g[b+1][P]),f(g[b][P])):(f(g[b][P+1]),f(g[b+1][P+1]),f(g[b+1][P]))}}function l(v){const w=new G;for(let S=0;S<r.length;S+=3)w.x=r[S+0],w.y=r[S+1],w.z=r[S+2],w.normalize().multiplyScalar(v),r[S+0]=w.x,r[S+1]=w.y,r[S+2]=w.z}function u(){const v=new G;for(let w=0;w<r.length;w+=3){v.x=r[w+0],v.y=r[w+1],v.z=r[w+2];const S=d(v)/2/Math.PI+.5,E=p(v)/Math.PI+.5;o.push(S,1-E)}_(),h()}function h(){for(let v=0;v<o.length;v+=6){const w=o[v+0],S=o[v+2],E=o[v+4],T=Math.max(w,S,E),g=Math.min(w,S,E);T>.9&&g<.1&&(w<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),E<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function m(v,w){const S=v*3;w.x=e[S+0],w.y=e[S+1],w.z=e[S+2]}function _(){const v=new G,w=new G,S=new G,E=new G,T=new Ke,g=new Ke,b=new Ke;for(let L=0,P=0;L<r.length;L+=9,P+=6){v.set(r[L+0],r[L+1],r[L+2]),w.set(r[L+3],r[L+4],r[L+5]),S.set(r[L+6],r[L+7],r[L+8]),T.set(o[P+0],o[P+1]),g.set(o[P+2],o[P+3]),b.set(o[P+4],o[P+5]),E.copy(v).add(w).add(S).divideScalar(3);const R=d(E);x(T,P+0,v,R),x(g,P+2,w,R),x(b,P+4,S,R)}}function x(v,w,S,E){E<0&&v.x===1&&(o[w]=v.x-1),S.x===0&&S.z===0&&(o[w]=E/2/Math.PI+.5)}function d(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.vertices,e.indices,e.radius,e.detail)}}class _o extends $a{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _o(e.radius,e.detail)}}class ur extends $a{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ur(e.radius,e.detail)}}class Sr extends Jt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=e/a,f=t/c,m=[],_=[],x=[],d=[];for(let p=0;p<u;p++){const v=p*f-o;for(let w=0;w<l;w++){const S=w*h-r;_.push(S,-v,0),x.push(0,0,1),d.push(w/a),d.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const w=v+l*p,S=v+l*(p+1),E=v+1+l*(p+1),T=v+1+l*p;m.push(w,S,T),m.push(S,E,T)}this.setIndex(m),this.setAttribute("position",new dt(_,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ad extends Jt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=e;const f=(t-e)/s,m=new G,_=new Ke;for(let x=0;x<=s;x++){for(let d=0;d<=i;d++){const p=r+d/i*o;m.x=h*Math.cos(p),m.y=h*Math.sin(p),c.push(m.x,m.y,m.z),l.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,u.push(_.x,_.y)}h+=f}for(let x=0;x<s;x++){const d=x*(i+1);for(let p=0;p<i;p++){const v=p+d,w=v,S=v+i+1,E=v+i+2,T=v+1;a.push(w,S,T),a.push(S,E,T)}}this.setIndex(a),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ad(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ei extends Jt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new G,f=new G,m=[],_=[],x=[],d=[];for(let p=0;p<=i;p++){const v=[],w=p/i,S=o+w*a,E=e*Math.cos(S),T=Math.sqrt(e*e-E*E);let g=0;p===0&&o===0?g=.5/t:p===i&&c===Math.PI&&(g=-.5/t);for(let b=0;b<=t;b++){const L=b/t,P=s+L*r;h.x=-T*Math.cos(P),h.y=E,h.z=T*Math.sin(P),_.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),d.push(L+g,1-w),v.push(l++)}u.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){const w=u[p][v+1],S=u[p][v],E=u[p+1][v],T=u[p+1][v+1];(p!==0||o>0)&&m.push(w,S,T),(p!==i-1||c<Math.PI)&&m.push(S,E,T)}this.setIndex(m),this.setAttribute("position",new dt(_,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oo extends Jt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],u=[],h=[],f=new G,m=new G,_=new G;for(let x=0;x<=i;x++){const d=o+x/i*a;for(let p=0;p<=s;p++){const v=p/s*r;m.x=(e+t*Math.cos(d))*Math.cos(v),m.y=(e+t*Math.cos(d))*Math.sin(v),m.z=t*Math.sin(d),l.push(m.x,m.y,m.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),_.subVectors(m,f).normalize(),u.push(_.x,_.y,_.z),h.push(p/s),h.push(x/i)}}for(let x=1;x<=i;x++)for(let d=1;d<=s;d++){const p=(s+1)*x+d-1,v=(s+1)*(x-1)+d-1,w=(s+1)*(x-1)+d,S=(s+1)*x+d;c.push(p,v,S),c.push(v,w,S)}this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function yr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Iu(s))s.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Iu(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function ln(n){const e={};for(let t=0;t<n.length;t++){const i=yr(n[t]);for(const s in i)e[s]=i[s]}return e}function Iu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function P0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ah(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const D0={clone:yr,merge:ln};var L0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,I0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cs extends ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L0,this.fragmentShader=I0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=P0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Xe().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ke().fromArray(s.value);break;case"v3":this.uniforms[i].value=new G().fromArray(s.value);break;case"v4":this.uniforms[i].value=new wt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ge().fromArray(s.value);break;case"m4":this.uniforms[i].value=new vt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class N0 extends Cs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Rd extends ks{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ic,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cs,this.combine=gd,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class U0 extends ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class F0 extends ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Rh extends Ut{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class O0 extends Rh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Il=new vt,Nu=new G,Uu=new G;class k0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ro,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Nu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nu),Uu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Il.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Il,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===so||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Il)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Wo=new G,Xo=new Rr,ni=new G;class Ch extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wo,Xo,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wo,Xo,ni.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Wo,Xo,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wo,Xo,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new G,Fu=new Ke,Ou=new Ke;class Yn extends Ch{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nc*2*Math.atan(Math.tan(dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,t){return this.getViewBounds(e,Fu,Ou),t.subVectors(Ou,Fu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(dl*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ph extends Ch{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class B0 extends k0{constructor(){super(new Ph(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class z0 extends Rh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new B0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ks=-90,Zs=1;class Oc extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Yn(Ks,Zs,e,t);s.layers=this.layers,this.add(s);const r=new Yn(Ks,Zs,e,t);r.layers=this.layers,this.add(r);const o=new Yn(Ks,Zs,e,t);o.layers=this.layers,this.add(o);const a=new Yn(Ks,Zs,e,t);a.layers=this.layers,this.add(a);const c=new Yn(Ks,Zs,e,t);c.layers=this.layers,this.add(c);const l=new Yn(Ks,Zs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===so)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let d=!1;e.isWebGLRenderer===!0?d=e.state.buffers.depth.getReversed():d=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class G0 extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function ku(n,e,t,i){const s=H0(i);switch(t){case uh:return n*e;case hh:return n*e/s.components*s.byteLength;case Md:return n*e/s.components*s.byteLength;case Rs:return n*e*2/s.components*s.byteLength;case Sd:return n*e*2/s.components*s.byteLength;case fh:return n*e*3/s.components*s.byteLength;case di:return n*e*4/s.components*s.byteLength;case yd:return n*e*4/s.components*s.byteLength;case na:case ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sa:case ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sc:case oc:return Math.max(n,16)*Math.max(e,8)/4;case ic:case rc:return Math.max(n,8)*Math.max(e,8)/2;case ac:case lc:case dc:case uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case cc:case ga:case fc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case mc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case gc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case _c:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case vc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case xc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Sc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case yc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case bc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case wc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ac:case Rc:case Cc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Pc:case Dc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case _a:case Lc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function H0(n){switch(n){case En:case ah:return{byteLength:1,components:1};case io:case lh:case gi:return{byteLength:2,components:1};case vd:case xd:return{byteLength:2,components:4};case mi:case _d:case ci:return{byteLength:4,components:1};case ch:case dh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:md}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=md);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dh(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function V0(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<h.length;m++){const _=h[f],x=h[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,h[f]=x)}h.length=f+1;for(let m=0,_=h.length;m<_;m++){const x=h[m];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var $0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,X0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,J0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Q0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,j0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ng=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ig=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,hg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,mg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,bg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ag=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Dg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ig=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ng=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ug=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Fg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Og=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$g=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Xg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i_=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,o_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,l_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,c_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,f_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,h_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,__=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,x_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,T_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,A_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,R_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,C_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,D_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,I_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,O_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,k_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,B_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,H_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const V_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X_=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Z_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,J_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Q_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,j_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ev=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ov=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,av=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_v=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:$0,alphahash_pars_fragment:W0,alphamap_fragment:X0,alphamap_pars_fragment:q0,alphatest_fragment:Y0,alphatest_pars_fragment:K0,aomap_fragment:Z0,aomap_pars_fragment:J0,batching_pars_vertex:Q0,batching_vertex:j0,begin_vertex:eg,beginnormal_vertex:tg,bsdfs:ng,iridescence_fragment:ig,bumpmap_pars_fragment:sg,clipping_planes_fragment:rg,clipping_planes_pars_fragment:og,clipping_planes_pars_vertex:ag,clipping_planes_vertex:lg,color_fragment:cg,color_pars_fragment:dg,color_pars_vertex:ug,color_vertex:fg,common:hg,defaultnormal_vertex:pg,displacementmap_pars_vertex:mg,displacementmap_vertex:gg,emissivemap_fragment:_g,emissivemap_pars_fragment:vg,colorspace_fragment:xg,colorspace_pars_fragment:Mg,envmap_fragment:Sg,envmap_common_pars_fragment:yg,envmap_pars_fragment:bg,envmap_pars_vertex:wg,envmap_physical_pars_fragment:Ug,envmap_vertex:Eg,fog_vertex:Tg,fog_pars_vertex:Ag,fog_fragment:Rg,fog_pars_fragment:Cg,gradientmap_pars_fragment:Pg,lightmap_pars_fragment:Dg,lights_lambert_fragment:Lg,lights_lambert_pars_fragment:Ig,lights_pars_begin:Ng,lights_toon_fragment:Fg,lights_toon_pars_fragment:Og,lights_phong_fragment:kg,lights_phong_pars_fragment:Bg,lights_physical_fragment:zg,lights_physical_pars_fragment:Gg,lights_fragment_begin:Hg,lights_fragment_maps:Vg,lights_fragment_end:$g,lightprobes_pars_fragment:Wg,logdepthbuf_fragment:Xg,logdepthbuf_pars_fragment:qg,logdepthbuf_pars_vertex:Yg,logdepthbuf_vertex:Kg,map_fragment:Zg,map_pars_fragment:Jg,map_particle_fragment:Qg,map_particle_pars_fragment:jg,metalnessmap_fragment:e_,metalnessmap_pars_fragment:t_,morphinstance_vertex:n_,morphcolor_vertex:i_,morphnormal_vertex:s_,morphtarget_pars_vertex:r_,morphtarget_vertex:o_,normal_fragment_begin:a_,normal_fragment_maps:l_,normal_pars_fragment:c_,normal_pars_vertex:d_,normal_vertex:u_,normalmap_pars_fragment:f_,clearcoat_normal_fragment_begin:h_,clearcoat_normal_fragment_maps:p_,clearcoat_pars_fragment:m_,iridescence_pars_fragment:g_,opaque_fragment:__,packing:v_,premultiplied_alpha_fragment:x_,project_vertex:M_,dithering_fragment:S_,dithering_pars_fragment:y_,roughnessmap_fragment:b_,roughnessmap_pars_fragment:w_,shadowmap_pars_fragment:E_,shadowmap_pars_vertex:T_,shadowmap_vertex:A_,shadowmask_pars_fragment:R_,skinbase_vertex:C_,skinning_pars_vertex:P_,skinning_vertex:D_,skinnormal_vertex:L_,specularmap_fragment:I_,specularmap_pars_fragment:N_,tonemapping_fragment:U_,tonemapping_pars_fragment:F_,transmission_fragment:O_,transmission_pars_fragment:k_,uv_pars_fragment:B_,uv_pars_vertex:z_,uv_vertex:G_,worldpos_vertex:H_,background_vert:V_,background_frag:$_,backgroundCube_vert:W_,backgroundCube_frag:X_,cube_vert:q_,cube_frag:Y_,depth_vert:K_,depth_frag:Z_,distance_vert:J_,distance_frag:Q_,equirect_vert:j_,equirect_frag:ev,linedashed_vert:tv,linedashed_frag:nv,meshbasic_vert:iv,meshbasic_frag:sv,meshlambert_vert:rv,meshlambert_frag:ov,meshmatcap_vert:av,meshmatcap_frag:lv,meshnormal_vert:cv,meshnormal_frag:dv,meshphong_vert:uv,meshphong_frag:fv,meshphysical_vert:hv,meshphysical_frag:pv,meshtoon_vert:mv,meshtoon_frag:gv,points_vert:_v,points_frag:vv,shadow_vert:xv,shadow_frag:Mv,sprite_vert:Sv,sprite_frag:yv},xe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},oi={basic:{uniforms:ln([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:ln([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:ln([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:ln([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:ln([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:ln([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:ln([xe.points,xe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:ln([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:ln([xe.common,xe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:ln([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:ln([xe.sprite,xe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:ln([xe.common,xe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:ln([xe.lights,xe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};oi.physical={uniforms:ln([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const qo={r:0,b:0,g:0},bv=new vt,Lh=new Ge;Lh.set(-1,0,0,0,1,0,0,0,1);function wv(n,e,t,i,s,r){const o=new Xe(0);let a=s===!0?0:1,c,l,u=null,h=0,f=null;function m(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){const S=v.backgroundBlurriness>0;w=e.get(w,S)}return w}function _(v){let w=!1;const S=m(v);S===null?d(o,a):S&&S.isColor&&(d(S,1),w=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(v,w){const S=m(w);S&&S.isCubeTexture?(l===void 0&&(l=new Vt(new ct(1,1,1),new Cs({name:"BackgroundCubeMaterial",uniforms:yr(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,T,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(bv.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Lh),l.material.toneMapped=tt.getTransfer(S.colorSpace)!==ht,(u!==S||h!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,f=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Vt(new Sr(2,2),new Cs({name:"BackgroundMaterial",uniforms:yr(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:As,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=tt.getTransfer(S.colorSpace)!==ht,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function d(v,w){v.getRGB(qo,Ah(n)),t.buffers.color.setClear(qo.r,qo.g,qo.b,w,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,w=1){o.set(v),a=w,d(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,d(o,a)},render:_,addToRenderList:x,dispose:p}}function Ev(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(R,N,z,C,B){let H=!1;const F=h(R,C,z,N);r!==F&&(r=F,l(r.object)),H=m(R,C,z,B),H&&_(R,C,z,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,S(R,N,z,C),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return n.createVertexArray()}function l(R){return n.bindVertexArray(R)}function u(R){return n.deleteVertexArray(R)}function h(R,N,z,C){const B=C.wireframe===!0;let H=i[N.id];H===void 0&&(H={},i[N.id]=H);const F=R.isInstancedMesh===!0?R.id:0;let ne=H[F];ne===void 0&&(ne={},H[F]=ne);let Y=ne[z.id];Y===void 0&&(Y={},ne[z.id]=Y);let te=Y[B];return te===void 0&&(te=f(c()),Y[B]=te),te}function f(R){const N=[],z=[],C=[];for(let B=0;B<t;B++)N[B]=0,z[B]=0,C[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:C,object:R,attributes:{},index:null}}function m(R,N,z,C){const B=r.attributes,H=N.attributes;let F=0;const ne=z.getAttributes();for(const Y in ne)if(ne[Y].location>=0){const ie=B[Y];let Ae=H[Y];if(Ae===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(Ae=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(Ae=R.instanceColor)),ie===void 0||ie.attribute!==Ae||Ae&&ie.data!==Ae.data)return!0;F++}return r.attributesNum!==F||r.index!==C}function _(R,N,z,C){const B={},H=N.attributes;let F=0;const ne=z.getAttributes();for(const Y in ne)if(ne[Y].location>=0){let ie=H[Y];ie===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor));const Ae={};Ae.attribute=ie,ie&&ie.data&&(Ae.data=ie.data),B[Y]=Ae,F++}r.attributes=B,r.attributesNum=F,r.index=C}function x(){const R=r.newAttributes;for(let N=0,z=R.length;N<z;N++)R[N]=0}function d(R){p(R,0)}function p(R,N){const z=r.newAttributes,C=r.enabledAttributes,B=r.attributeDivisors;z[R]=1,C[R]===0&&(n.enableVertexAttribArray(R),C[R]=1),B[R]!==N&&(n.vertexAttribDivisor(R,N),B[R]=N)}function v(){const R=r.newAttributes,N=r.enabledAttributes;for(let z=0,C=N.length;z<C;z++)N[z]!==R[z]&&(n.disableVertexAttribArray(z),N[z]=0)}function w(R,N,z,C,B,H,F){F===!0?n.vertexAttribIPointer(R,N,z,B,H):n.vertexAttribPointer(R,N,z,C,B,H)}function S(R,N,z,C){x();const B=C.attributes,H=z.getAttributes(),F=N.defaultAttributeValues;for(const ne in H){const Y=H[ne];if(Y.location>=0){let te=B[ne];if(te===void 0&&(ne==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),ne==="instanceColor"&&R.instanceColor&&(te=R.instanceColor)),te!==void 0){const ie=te.normalized,Ae=te.itemSize,Fe=e.get(te);if(Fe===void 0)continue;const J=Fe.buffer,ge=Fe.type,we=Fe.bytesPerElement,Le=ge===n.INT||ge===n.UNSIGNED_INT||te.gpuType===_d;if(te.isInterleavedBufferAttribute){const Me=te.data,$e=Me.isInterleavedBuffer===!0?Me.stride:Me.itemSize,At=te.offset;if(Me.isInstancedInterleavedBuffer||Me.isInstancedBufferAttribute){for(let Ue=0;Ue<Y.locationSize;Ue++)p(Y.location+Ue,Me.meshPerAttribute);R.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ue=0;Ue<Y.locationSize;Ue++)d(Y.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,J);for(let Ue=0;Ue<Y.locationSize;Ue++)w(Y.location+Ue,Ae/Y.locationSize,ge,ie,$e*we,(At+Ae/Y.locationSize*Ue)*we,Le)}else{if(te.isInstancedBufferAttribute){for(let Me=0;Me<Y.locationSize;Me++)p(Y.location+Me,te.meshPerAttribute);R.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Me=0;Me<Y.locationSize;Me++)d(Y.location+Me);n.bindBuffer(n.ARRAY_BUFFER,J);for(let Me=0;Me<Y.locationSize;Me++)w(Y.location+Me,Ae/Y.locationSize,ge,ie,Ae*we,Ae/Y.locationSize*Me*we,Le)}}else if(F!==void 0){const ie=F[ne];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(Y.location,ie);break;case 3:n.vertexAttrib3fv(Y.location,ie);break;case 4:n.vertexAttrib4fv(Y.location,ie);break;default:n.vertexAttrib1fv(Y.location,ie)}}}}v()}function E(){L();for(const R in i){const N=i[R];for(const z in N){const C=N[z];for(const B in C){const H=C[B];for(const F in H)u(H[F].object),delete H[F];delete C[B]}}delete i[R]}}function T(R){if(i[R.id]===void 0)return;const N=i[R.id];for(const z in N){const C=N[z];for(const B in C){const H=C[B];for(const F in H)u(H[F].object),delete H[F];delete C[B]}}delete i[R.id]}function g(R){for(const N in i){const z=i[N];for(const C in z){const B=z[C];if(B[R.id]===void 0)continue;const H=B[R.id];for(const F in H)u(H[F].object),delete H[F];delete B[R.id]}}}function b(R){for(const N in i){const z=i[N],C=R.isInstancedMesh===!0?R.id:0,B=z[C];if(B!==void 0){for(const H in B){const F=B[H];for(const ne in F)u(F[ne].object),delete F[ne];delete B[H]}delete z[C],Object.keys(z).length===0&&delete i[N]}}}function L(){P(),o=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:g,initAttributes:x,enableAttribute:d,disableUnusedAttributes:v}}function Tv(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let f=0;for(let m=0;m<u;m++)f+=l[m];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Av(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(g){return!(g!==di&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(g){const b=g===gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==En&&g!==ci&&!b&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Oe("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&Oe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:S,maxSamples:E,samples:T}}function Rv(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Hi,a=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||s;return s=f,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,x=h.clipIntersection,d=h.clipShadows,p=n.get(h);if(!s||_===null||_.length===0||r&&!d)r?u(null):l();else{const v=r?0:i,w=v*4;let S=p.clippingState||null;c.value=S,S=u(_,f,w,m);for(let E=0;E!==w;++E)S[E]=t[E];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,m,_){const x=h!==null?h.length:0;let d=null;if(x!==0){if(d=c.value,_!==!0||d===null){const p=m+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(d===null||d.length<p)&&(d=new Float32Array(p));for(let w=0,S=m;w!==x;++w,S+=4)o.copy(h[w]).applyMatrix4(v,a),o.normal.toArray(d,S),d[S+3]=o.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,d}}class Cd extends fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new wh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ct(5,5,5),r=new Cs({name:"CubemapFromEquirect",uniforms:yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:cr});r.uniforms.tEquirect.value=t;const o=new Vt(s,r),a=t.minFilter;return t.minFilter===qi&&(t.minFilter=gn),new Oc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Bu=256,Cv=3,Pv=20,Ih=256,Nh=16,Dv=3,Lv=new G,Iv=new Xe;class wa{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Oc(1,10,null),this._boxMesh=new Vt(new ct(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=Lv}=r,c=this._renderer;this._setSize(o);const l=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const h=c.autoClear,f=c.autoClearColor,m=c.autoClearDepth,_=c.autoClearStencil,x=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(e.background=c.getClearColor(Iv));const d=new Oc(i,s,u);return d.position.copy(a),d.update(c,e),c.autoClear=h,c.autoClearColor=f,c.autoClearDepth=m,c.autoClearStencil=_,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Bu,n0(e))}_fromTexture(e,t){e.mapping===vr||e.mapping===no?this._setSize(e.image.length===0?Bu:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=zu(e,!1,!1),i=Math.log2(e)-Cv;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=zu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;const o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===vr||e.mapping===no?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hu()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Gu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Nv(),this._integrationMaterial=Uv());const t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Nh);for(let o=0;o<=i;o++){const a=wa.lodToRoughness(o,i);if(o>i-Dv)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{const c=a>0?Math.log2(t)+.5*Math.log2(6/(Ih*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Fv());const i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}}function zu(n,e,t){return new Cd(n,{minFilter:qi,generateMipmaps:e,type:gi,colorSpace:va,depthBuffer:t})}function vo(n,e,t){return new Cs({name:n,uniforms:e,vertexShader:Ye.cube_vert,fragmentShader:t,side:vn,blending:cr,depthTest:!1,depthWrite:!1})}function Nv(){return vo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ih}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Uv(){return vo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Nh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Fv(){return vo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Pv}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Gu(){return vo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Hu(){return vo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ov(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,m=!1){return f==null?null:m?o(f):r(f)}function r(f){if(f&&f.isTexture){const m=f.mapping;if(m===ol||m===al)if(e.has(f)){const _=e.get(f).texture;return a(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const x=new Cd(_.height);return x.fromEquirectangularTexture(n,f),e.set(f,x),f.addEventListener("dispose",l),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const m=f.mapping,_=m===ol||m===al,x=m===vr||m===no;if(_||x){let d=t.get(f);const p=d!==void 0?d.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new wa(n)),d=_?i.fromEquirectangular(f,d):i.fromCubemap(f,d),d.texture.pmremVersion=f.pmremVersion,t.set(f,d),d.texture;if(d!==void 0)return d.texture;{const v=f.image;return _&&v&&v.height>0||x&&v&&c(v)?(i===null&&(i=new wa(n)),d=_?i.fromEquirectangular(f):i.fromCubemap(f),d.texture.pmremVersion=f.pmremVersion,t.set(f,d),f.addEventListener("dispose",u),d.texture):null}}}return f}function a(f,m){return m===ol?f.mapping=vr:m===al&&(f.mapping=no),f}function c(f){let m=0;const _=6;for(let x=0;x<_;x++)f[x]!==void 0&&m++;return m===_}function l(f){const m=f.target;m.removeEventListener("dispose",l);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function u(f){const m=f.target;m.removeEventListener("dispose",u);const _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function kv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&oa("WebGLRenderer: "+i+" extension not supported."),s}}}function Bv(n,e,t,i){const s={},r=new WeakMap,o=new FinalizationRegistry(_=>delete s[_]);function a(_){c(_.target)}function c(_){_.index!==null&&e.remove(_.index);for(const d in _.attributes)e.remove(_.attributes[d]);_.removeEventListener("dispose",a),delete s[_.id],o.unregister(_);const x=r.get(_);x&&(e.remove(x),r.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function l(_,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function u(_){const x=_.attributes;for(const d in x)e.update(x[d],n.ARRAY_BUFFER)}function h(_){const x=_.index,d=_.attributes.position;let p=0;if(d===void 0)return;const v=x!==null?x.array.length:d.array.length/3-1,w=d.count>=65535?yh:Sh,S=new w(Math.ceil(v/3)*6,1),E=S.array;if(x!==null){const g=x.array;p=x.version;for(let b=0,L=0;b<v;b+=3){const P=g[b+0],R=g[b+1],N=g[b+2];E[L++]=P,E[L++]=R,E[L++]=R,E[L++]=N,E[L++]=N,E[L++]=P}}else{p=d.version;for(let g=0,b=0;g<v;g+=3){const L=g+0,P=g+1,R=g+2;E[b++]=L,E[b++]=P,E[b++]=P,E[b++]=R,E[b++]=R,E[b++]=L}}S.version=p;const T=r.get(_);T&&e.remove(T),r.set(_,S)}function f(_){const x=r.get(_);if(x){const d=_.index;d!==null&&x.version<d.version&&h(_)}else h(_);return r.get(_)}function m(){for(const _ in s){const x=s[_].deref();x!==void 0&&c(x)}}return{get:l,update:u,getWireframeAttribute:f,dispose:m}}function zv(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,f){n.drawElements(i,f,r,h*o),t.update(f,i,1)}function l(h,f,m){m!==0&&(n.drawElementsInstanced(i,f,r,h*o,m),t.update(f,i,m))}function u(h,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,m);let x=0;for(let d=0;d<m;d++)x+=f[d];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Gv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:lt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Hv(n,e,t){const i=new WeakMap,s=new wt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let P=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",P)};var m=P;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),d===!0&&(S=3);let E=a.attributes.position.count*S,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const g=new Float32Array(E*T*4*h),b=new vh(g,E,T,h);b.type=ci,b.needsUpdate=!0;const L=S*4;for(let R=0;R<h;R++){const N=p[R],z=v[R],C=w[R],B=E*T*4*R;for(let H=0;H<N.count;H++){const F=H*L;_===!0&&(s.fromBufferAttribute(N,H),g[B+F+0]=s.x,g[B+F+1]=s.y,g[B+F+2]=s.z,g[B+F+3]=0),x===!0&&(s.fromBufferAttribute(z,H),g[B+F+4]=s.x,g[B+F+5]=s.y,g[B+F+6]=s.z,g[B+F+7]=0),d===!0&&(s.fromBufferAttribute(C,H),g[B+F+8]=s.x,g[B+F+9]=s.y,g[B+F+10]=s.z,g[B+F+11]=C.itemSize===4?s.w:1)}}f={count:h,texture:b,size:new Ke(E,T)},i.set(a,f),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let d=0;d<l.length;d++)_+=l[d];const x=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Vv(n,e,t,i,s){let r=new WeakMap;function o(l){const u=s.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return f}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const $v={[jf]:"LINEAR_TONE_MAPPING",[eh]:"REINHARD_TONE_MAPPING",[th]:"CINEON_TONE_MAPPING",[nh]:"ACES_FILMIC_TONE_MAPPING",[sh]:"AGX_TONE_MAPPING",[rh]:"NEUTRAL_TONE_MAPPING",[ih]:"CUSTOM_TONE_MAPPING"};function Wv(n,e,t,i,s,r){const o=new fi(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null,l=null;const u=new Jt;u.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new dt([0,2,0,0,2,0],2));const h=new N0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Vt(u,h),m=new Ph(-1,1,1,-1,0,1);let _=null,x=null,d=!1,p,v=null,w=[],S=!1;this.setSize=function(E,T){o.setSize(E,T),a!==null&&a.setSize(E,T),c!==null&&c.setSize(E,T);for(let g=0;g<w.length;g++){const b=w[g];b.setSize&&b.setSize(E,T)}},this.setEffects=function(E){w=E,S=w.length>0&&w[0].isRenderPass===!0;const T=o.width,g=o.height;w.length>0&&a===null&&(a=new fi(T,g,{type:gi,depthBuffer:!1,stencilBuffer:!1}),c=new fi(T,g,{type:gi,depthBuffer:!1,stencilBuffer:!1}));const b=s===!0&&w.some(L=>L.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&l===null&&(l=new Mr(T,g),r===!0&&(l.format=Yi,l.type=xr)),o.dispose(),o.depthTexture=b?l:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let L=0;L<w.length;L++){const P=w[L];P.setSize&&P.setSize(T,g),b&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(l)}},this.begin=function(E,T){if(d||E.toneMapping===Ci&&w.length===0)return!1;if(v=T,T!==null){const g=T.width,b=T.height;(o.width!==g||o.height!==b)&&this.setSize(g,b)}return S===!1&&E.setRenderTarget(o),p=E.toneMapping,E.toneMapping=Ci,!0},this.hasRenderPass=function(){return S},this.end=function(E,T){E.toneMapping=p,d=!0;let g=o,b=a;for(let L=0;L<w.length;L++){const P=w[L];P.enabled!==!1&&(P.render(E,b,g,T),P.needsSwap!==!1&&(g=b,b=b===a?c:a))}if(_!==E.outputColorSpace||x!==E.toneMapping){_=E.outputColorSpace,x=E.toneMapping,h.defines={},tt.getTransfer(_)===ht&&(h.defines.SRGB_TRANSFER="");const L=$v[x];L&&(h.defines[L]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=g.texture,E.setRenderTarget(v),E.render(f,m),v=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),u.dispose(),h.dispose()}}const Uh=new rn,Fh=new Mr(1,1),Oh=new Eh(1),kh=new vh,Bh=new d0,zh=new wh,Vu=[],$u=[],Wu=new Float32Array(16),Xu=new Float32Array(9),qu=new Float32Array(4);function Cr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Vu[s];if(r===void 0&&(r=new Float32Array(s),Vu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Wa(n,e){let t=$u[e];t===void 0&&(t=new Int32Array(e),$u[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Xv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function Yv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function Kv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function Zv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;qu.set(i),n.uniformMatrix2fv(this.addr,!1,qu),Ot(t,i)}}function Jv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Xu.set(i),n.uniformMatrix3fv(this.addr,!1,Xu),Ot(t,i)}}function Qv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Wu.set(i),n.uniformMatrix4fv(this.addr,!1,Wu),Ot(t,i)}}function jv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ex(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function tx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function nx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function ix(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function sx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function rx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function ox(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function Xa(n){return n.version===0&&(n.compareFunction=gh,n.needsUpdate=!0),n}function ax(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Xa(Fh):r=Uh,t.setTexture2D(e||r,s)}function lx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Bh,s)}function cx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Xa(Oh):r=zh,t.setTextureCube(e||r,s)}function dx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||kh,s)}function ux(n){switch(n){case 5126:return Xv;case 35664:return qv;case 35665:return Yv;case 35666:return Kv;case 35674:return Zv;case 35675:return Jv;case 35676:return Qv;case 5124:case 35670:return jv;case 35667:case 35671:return ex;case 35668:case 35672:return tx;case 35669:case 35673:return nx;case 5125:return ix;case 36294:return sx;case 36295:return rx;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return lx;case 35680:case 36300:case 36308:case 36293:return cx;case 36289:case 36303:case 36311:case 36292:return dx}}function fx(n,e){n.uniform1fv(this.addr,e)}function hx(n,e){const t=Cr(e,this.size,2);n.uniform2fv(this.addr,t)}function px(n,e){const t=Cr(e,this.size,3);n.uniform3fv(this.addr,t)}function mx(n,e){const t=Cr(e,this.size,4);n.uniform4fv(this.addr,t)}function gx(n,e){const t=Cr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function _x(n,e){const t=Cr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function vx(n,e){const t=Cr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xx(n,e){n.uniform1iv(this.addr,e)}function Mx(n,e){n.uniform2iv(this.addr,e)}function Sx(n,e){n.uniform3iv(this.addr,e)}function yx(n,e){n.uniform4iv(this.addr,e)}function bx(n,e){n.uniform1uiv(this.addr,e)}function wx(n,e){n.uniform2uiv(this.addr,e)}function Ex(n,e){n.uniform3uiv(this.addr,e)}function Tx(n,e){n.uniform4uiv(this.addr,e)}function Ax(n,e,t){const i=this.cache,s=e.length,r=Wa(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Xa(Fh):o=Uh;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Rx(n,e,t){const i=this.cache,s=e.length,r=Wa(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Bh,r[o])}function Cx(n,e,t){const i=this.cache,s=e.length,r=Wa(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Xa(Oh):o=zh;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function Px(n,e,t){const i=this.cache,s=e.length,r=Wa(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||kh,r[o])}function Dx(n){switch(n){case 5126:return fx;case 35664:return hx;case 35665:return px;case 35666:return mx;case 35674:return gx;case 35675:return _x;case 35676:return vx;case 5124:case 35670:return xx;case 35667:case 35671:return Mx;case 35668:case 35672:return Sx;case 35669:case 35673:return yx;case 5125:return bx;case 36294:return wx;case 36295:return Ex;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ax;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Px}}class Lx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ux(t.type)}}class Ix{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dx(t.type)}}class Nx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Nl=/(\w+)(\])?(\[|\.)?/g;function Yu(n,e){n.seq.push(e),n.map[e.id]=e}function Ux(n,e,t){const i=n.name,s=i.length;for(Nl.lastIndex=0;;){const r=Nl.exec(i),o=Nl.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Yu(t,l===void 0?new Lx(a,n,e):new Ix(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Nx(a),Yu(t,h)),t=h}}}class aa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Ux(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Ku(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Fx=37297;let Ox=0;function kx(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Zu=new Ge;function Bx(n){tt._getMatrix(Zu,tt.workingColorSpace,n);const e=`mat3( ${Zu.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(n)){case xa:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ju(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+kx(n.getShaderSource(e),a)}else return r}function zx(n,e){const t=Bx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Gx={[jf]:"Linear",[eh]:"Reinhard",[th]:"Cineon",[nh]:"ACESFilmic",[sh]:"AgX",[rh]:"Neutral",[ih]:"Custom"};function Hx(n,e){const t=Gx[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Yo=new G;function Vx(){tt.getLuminanceCoefficients(Yo);const n=Yo.x.toFixed(4),e=Yo.y.toFixed(4),t=Yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $x(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function Wx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Xx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Gr(n){return n!==""}function Qu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function ju(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(n){return n.replace(qx,Yx)}function Yx(n,e){const t=Ye[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return kc(t)}const Kx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ef(n){return n.replace(Kx,Zx)}function Zx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Jx={[ta]:"SHADOWMAP_TYPE_PCF",[zr]:"SHADOWMAP_TYPE_VSM"};function Qx(n){return Jx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jx={[no]:"ENVMAP_MODE_REFRACTION"};function eM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":jx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tM={[gd]:"ENVMAP_BLENDING_MULTIPLY",[Bm]:"ENVMAP_BLENDING_MIX",[zm]:"ENVMAP_BLENDING_ADD"};function nM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":tM[n.combine]||"ENVMAP_BLENDING_NONE"}function iM(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Qx(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=eM(t),h=nM(t),f=$x(t),m=Wx(r),_=s.createProgram();let x,d,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Gr).join(`
`),x.length>0&&(x+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Gr).join(`
`),d.length>0&&(d+=`
`)):(x=[tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),d=[tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ci?Hx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,zx("linearToOutputTexel",t.outputColorSpace),Vx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gr).join(`
`)),o=kc(o),o=Qu(o,t),o=ju(o,t),a=kc(a),a=Qu(a,t),a=ju(a,t),o=ef(o),a=ef(a),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,d=["#define varying in",t.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=p+x+o,w=p+d+a,S=Ku(s,s.VERTEX_SHADER,v),E=Ku(s,s.FRAGMENT_SHADER,w);s.attachShader(_,S),s.attachShader(_,E),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(P){if(n.debug.checkShaderErrors){const R=s.getProgramInfoLog(_)||"",N=s.getShaderInfoLog(S)||"",z=s.getShaderInfoLog(E)||"",C=R.trim(),B=N.trim(),H=z.trim();let F=!0,ne=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,S,E);else{const Y=Ju(s,S,"vertex"),te=Ju(s,E,"fragment");lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+C+`
`+Y+`
`+te)}else C!==""?Oe("WebGLProgram: Program Info Log:",C):(B===""||H==="")&&(ne=!1);ne&&(P.diagnostics={runnable:F,programLog:C,vertexShader:{log:B,prefix:x},fragmentShader:{log:H,prefix:d}})}s.deleteShader(S),s.deleteShader(E),g=new aa(s,_),b=Xx(s,_)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(_,Fx)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ox++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=E,this}let sM=0;class rM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new oM(e),t.set(e,i)),i}}class oM{constructor(e){this.id=sM++,this.code=e,this.usedTimes=0}}function aM(n){return n===Rs||n===ga||n===_a}function lM(n,e,t,i,s,r){const o=new xh,a=new rM,c=new Set,l=[],u=new Map,h=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return c.add(g),g===0?"uv":`uv${g}`}function _(g,b,L,P,R,N){const z=P.fog,C=R.geometry,B=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,F=e.get(g.envMap||B,H),ne=f[g.type];let Y=i.precision;g.precision!==null&&(Y=i.getMaxPrecision(g.precision),Y!==g.precision&&Oe("WebGLProgram.getParameters:",g.precision,"not supported, using",Y,"instead."));const te=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,ie=te!==void 0?te.length:0;let Ae=0;C.morphAttributes.position!==void 0&&(Ae=1),C.morphAttributes.normal!==void 0&&(Ae=2),C.morphAttributes.color!==void 0&&(Ae=3);let Fe,J,ge,we;if(ne){const ve=oi[ne];Fe=ve.vertexShader,J=ve.fragmentShader}else{Fe=g.vertexShader,J=g.fragmentShader;const ve=a.getVertexShaderStage(g),ft=a.getFragmentShaderStage(g);a.update(g,ve,ft),ge=ve.id,we=ft.id}const Le=n.getRenderTarget(),Me=n.state.buffers.depth.getReversed(),$e=R.isInstancedMesh===!0,At=R.isBatchedMesh===!0,Ue=!!g.map,ut=!!g.matcap,mt=!!F,Qe=mt&&F.isPMREMTexture===!0,Wt=!!g.aoMap,Dt=!!g.lightMap,dn=!!g.bumpMap&&g.wireframe===!1,yt=!!g.normalMap,ti=!!g.displacementMap,kt=!!g.emissiveMap,Dn=!!g.metalnessMap,Ln=!!g.roughnessMap,In=g.anisotropy>0,O=g.clearcoat>0,Nn=g.diffuseRoughness>0,xt=g.dispersion>0,Mt=g.retroreflectivity>0,me=g.iridescence>0,Lt=g.sheen>0,Ie=g.transmission>0,Be=In&&!!g.anisotropyMap,A=O&&!!g.clearcoatMap,M=O&&!!g.clearcoatNormalMap,$=O&&!!g.clearcoatRoughnessMap,se=Nn&&!!g.diffuseRoughnessMap,ee=me&&!!g.iridescenceMap,ae=me&&!!g.iridescenceThicknessMap,he=Lt&&!!g.sheenColorMap,Z=Lt&&!!g.sheenRoughnessMap,Q=!!g.specularMap,ce=!!g.specularColorMap,D=!!g.specularIntensityMap,j=Ie&&!!g.transmissionMap,K=Ie&&!!g.thicknessMap,de=!!g.gradientMap,oe=!!g.alphaMap,le=g.alphaTest>0,Ce=!!g.alphaHash,qe=!!g.extensions;let re=Ci;g.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(re=n.toneMapping);const Pe=Qe?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,We={shaderID:ne,shaderType:g.type,shaderName:g.name,vertexShader:Fe,fragmentShader:J,defines:g.defines,customVertexShaderID:ge,customFragmentShaderID:we,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:Y,batching:At,batchingColor:At&&R._colorsTexture!==null,instancing:$e,instancingColor:$e&&R.instanceColor!==null,instancingMorph:$e&&R.morphTexture!==null,outputColorSpace:Le===null?n.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ue,matcap:ut,envMap:mt,envMapMode:mt&&F.mapping,envMapPMREM:Qe,envMapMaxLod:Qe?Pe.length-1:null,envMapSize:Qe?Pe[0].width:null,aoMap:Wt,lightMap:Dt,bumpMap:dn,normalMap:yt,displacementMap:ti,emissiveMap:kt,normalMapObjectSpace:yt&&g.normalMapType===Vm,normalMapTangentSpace:yt&&g.normalMapType===Ic,packedNormalMap:yt&&g.normalMapType===Ic&&aM(g.normalMap.format),metalnessMap:Dn,roughnessMap:Ln,anisotropy:In,anisotropyMap:Be,clearcoat:O,clearcoatMap:A,clearcoatNormalMap:M,clearcoatRoughnessMap:$,diffuseRoughness:Nn,diffuseRoughnessMap:se,dispersion:xt,retroreflection:Mt,iridescence:me,iridescenceMap:ee,iridescenceThicknessMap:ae,sheen:Lt,sheenColorMap:he,sheenRoughnessMap:Z,specularMap:Q,specularColorMap:ce,specularIntensityMap:D,transmission:Ie,transmissionMap:j,thicknessMap:K,gradientMap:de,opaque:g.transparent===!1&&g.blending===Yr&&g.alphaToCoverage===!1,alphaMap:oe,alphaTest:le,alphaHash:Ce,combine:g.combine,mapUv:Ue&&m(g.map.channel),aoMapUv:Wt&&m(g.aoMap.channel),lightMapUv:Dt&&m(g.lightMap.channel),bumpMapUv:dn&&m(g.bumpMap.channel),normalMapUv:yt&&m(g.normalMap.channel),displacementMapUv:ti&&m(g.displacementMap.channel),emissiveMapUv:kt&&m(g.emissiveMap.channel),metalnessMapUv:Dn&&m(g.metalnessMap.channel),roughnessMapUv:Ln&&m(g.roughnessMap.channel),anisotropyMapUv:Be&&m(g.anisotropyMap.channel),clearcoatMapUv:A&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:M&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&m(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&m(g.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:he&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:Z&&m(g.sheenRoughnessMap.channel),specularMapUv:Q&&m(g.specularMap.channel),specularColorMapUv:ce&&m(g.specularColorMap.channel),specularIntensityMapUv:D&&m(g.specularIntensityMap.channel),transmissionMapUv:j&&m(g.transmissionMap.channel),thicknessMapUv:K&&m(g.thicknessMap.channel),alphaMapUv:oe&&m(g.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(yt||In),vertexNormals:!!C.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!C.attributes.uv&&(Ue||oe),fog:!!z,useFog:g.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||C.attributes.normal===void 0&&yt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Me,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Ae,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:N.filter(ve=>ve.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:re,decodeVideoTexture:Ue&&g.map.isVideoTexture===!0&&tt.getTransfer(g.map.colorSpace)===ht,decodeVideoTextureEmissive:kt&&g.emissiveMap.isVideoTexture===!0&&tt.getTransfer(g.emissiveMap.colorSpace)===ht,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===li,flipSided:g.side===vn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:qe&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&g.extensions.multiDraw===!0||At)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function x(g){const b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(const L in g.defines)b.push(L),b.push(g.defines[L]);return g.isRawShaderMaterial===!1&&(d(b,g),p(b,g),b.push(n.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function d(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapPMREM),g.push(b.envMapMaxLod),g.push(b.envMapSize),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.diffuseRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.numLightProbeGrids),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function p(g,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function v(g){const b=f[g.type];let L;if(b){const P=oi[b];L=D0.clone(P.uniforms)}else L=g.uniforms;return L}function w(g,b){let L=u.get(b);return L!==void 0?++L.usedTimes:(L=new iM(n,b,g,s),l.push(L),u.set(b,L)),L}function S(g){if(--g.usedTimes===0){const b=l.indexOf(g);l[b]=l[l.length-1],l.pop(),u.delete(g.cacheKey),g.destroy()}}function E(g){a.remove(g)}function T(){a.dispose()}return{getParameters:_,getProgramCacheKey:x,getUniforms:v,acquireProgram:w,releaseProgram:S,releaseShaderCache:E,programs:l,dispose:T}}function cM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function dM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function nf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function sf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function a(f,m,_,x,d,p){let v=n[e];return v===void 0?(v={id:f.id,object:f,geometry:m,material:_,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:d,group:p},n[e]=v):(v.id=f.id,v.object=f,v.geometry=m,v.material=_,v.materialVariant=o(f),v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=d,v.group=p),e++,v}function c(f,m,_,x,d,p,v){v.reversedDepth===!0&&(d=-d);const w=a(f,m,_,x,d,p);_.transmission>0?i.push(w):_.transparent===!0?s.push(w):t.push(w)}function l(f,m,_,x,d,p){const v=a(f,m,_,x,d,p);_.transmission>0?i.unshift(v):_.transparent===!0?s.unshift(v):t.unshift(v)}function u(f,m){t.length>1&&t.sort(f||dM),i.length>1&&i.sort(m||nf),s.length>1&&s.sort(m||nf)}function h(){for(let f=e,m=n.length;f<m;f++){const _=n[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function uM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new sf,n.set(i,[o])):s>=r.length?(o=new sf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function fM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new Xe};break;case"SpotLight":t={position:new G,direction:new G,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function hM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let pM=0;function mM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gM(n){const e=new fM,t=hM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new G);const s=new G,r=new vt,o=new vt;function a(l){let u=0,h=0,f=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let m=0,_=0,x=0,d=0,p=0,v=0,w=0,S=0,E=0,T=0,g=0,b=0,L=0,P=0;l.sort(mM);for(let N=0,z=l.length;N<z;N++){const C=l[N],B=C.color,H=C.intensity,F=C.distance;let ne=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Rs?ne=C.shadow.map.texture:ne=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=B.r*H,h+=B.g*H,f+=B.b*H;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(C.sh.coefficients[Y],H);P++}else if(C.isSunLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const te=C.shadow,ie=t.get(C);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),i.sunShadow[_]=ie,i.sunShadowMap[_]=ne;const Ae=te.getViewportCount();for(let Fe=0;Fe<Ae;Fe++)i.sunShadowMatrix[x+Fe]=te.getMatrix(Fe),i.sunShadowCascade[x+Fe]=te._cascadeData[Fe];x+=Ae,_++}i.sun[m]=Y,m++}else if(C.isDirectionalLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const te=C.shadow,ie=t.get(C);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,i.directionalShadow[d]=ie,i.directionalShadowMap[d]=ne,i.directionalShadowMatrix[d]=C.shadow.matrix,E++}i.directional[d]=Y,d++}else if(C.isSpotLight){const Y=e.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(B).multiplyScalar(H),Y.distance=F,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,i.spot[v]=Y;const te=C.shadow;if(C.map&&(i.spotLightMap[b]=C.map,b++,te.updateMatrices(C),C.castShadow&&L++),i.spotLightMatrix[v]=te.matrix,C.castShadow){const ie=t.get(C);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,i.spotShadow[v]=ie,i.spotShadowMap[v]=ne,g++}v++}else if(C.isRectAreaLight){const Y=e.get(C);Y.color.copy(B).multiplyScalar(H),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),i.rectArea[w]=Y,w++}else if(C.isPointLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){const te=C.shadow,ie=t.get(C);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,ie.shadowCameraNear=te.camera.near,ie.shadowCameraFar=te.camera.far,i.pointShadow[p]=ie,i.pointShadowMap[p]=ne,i.pointShadowMatrix[p]=C.shadow.matrix,T++}i.point[p]=Y,p++}else if(C.isHemisphereLight){const Y=e.get(C);Y.skyColor.copy(C.color).multiplyScalar(H),Y.groundColor.copy(C.groundColor).multiplyScalar(H),i.hemi[S]=Y,S++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const R=i.hash;(R.sunLength!==m||R.directionalLength!==d||R.pointLength!==p||R.spotLength!==v||R.rectAreaLength!==w||R.hemiLength!==S||R.numSunShadows!==_||R.numDirectionalShadows!==E||R.numPointShadows!==T||R.numSpotShadows!==g||R.numSpotMaps!==b||R.numLightProbes!==P)&&(i.sun.length=m,i.directional.length=d,i.spot.length=v,i.rectArea.length=w,i.point.length=p,i.hemi.length=S,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+b-L,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=P,R.sunLength=m,R.directionalLength=d,R.pointLength=p,R.spotLength=v,R.rectAreaLength=w,R.hemiLength=S,R.numSunShadows=_,R.numDirectionalShadows=E,R.numPointShadows=T,R.numSpotShadows=g,R.numSpotMaps=b,R.numLightProbes=P,i.version=pM++)}function c(l,u){let h=0,f=0,m=0,_=0,x=0,d=0;const p=u.matrixWorldInverse;for(let v=0,w=l.length;v<w;v++){const S=l[v];if(S.isSunLight){const E=i.sun[h];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(p),h++}else if(S.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),f++}else if(S.isSpotLight){const E=i.spot[_];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),_++}else if(S.isRectAreaLight){const E=i.rectArea[x];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),o.identity(),r.copy(S.matrixWorld),r.premultiply(p),o.extractRotation(r),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),m++}else if(S.isHemisphereLight){const E=i.hemi[d];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(p),d++}}}return{setup:a,setupView:c,state:i}}function rf(n){const e=new gM(n),t=[],i=[],s=[];function r(h){u.camera=h,t.length=0,i.length=0,s.length=0}function o(h){h.isLightProbeGrid?s.push(h):t.push(h)}function a(h){i.push(h)}function c(){e.setup(t),s.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function l(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function _M(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new rf(n),e.set(s,[a])):r>=o.length?(a=new rf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const vM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,MM=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],SM=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],of=new vt,Fr=new G,Ul=new G;function yM(n,e,t){let i=new ro;const s=new Ke,r=new Ke,o=new wt,a=new U0,c=new F0,l={},u=t.maxTextureSize,h={[As]:vn,[vn]:As,[li]:li},f=new Cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:vM,fragmentShader:xM}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Jt;_.setAttribute("position",new ys(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Vt(_,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ta;let p=this.type;this.render=function(T,g,b){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||T.length===0)return;this.type===Mm&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ta);const L=n.getRenderTarget(),P=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),N=n.state;N.setBlending(cr),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const z=p!==this.type;z&&g.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(B=>B.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,B=T.length;C<B;C++){const H=T[C],F=H.shadow;if(F===void 0){Oe("WebGLShadowMap:",H,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const ne=F.getFrameExtents();s.multiply(ne),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,F.mapSize.y=r.y));const Y=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=Y,F.map===null||z===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===zr){if(H.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new fi(s.x,s.y,{format:Rs,type:gi,minFilter:gn,magFilter:gn,generateMipmaps:!1}),F.map.texture.name=H.name+".shadowMap",F.map.depthTexture=new Mr(s.x,s.y,ci),F.map.depthTexture.name=H.name+".shadowMapDepth",F.map.depthTexture.format=ls,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Kt,F.map.depthTexture.magFilter=Kt}else H.isPointLight?(F.map=new Cd(s.x),F.map.depthTexture=new Eh(s.x,mi)):(F.map=new fi(s.x,s.y),F.map.depthTexture=new Mr(s.x,s.y,mi)),F.map.depthTexture.name=H.name+".shadowMap",F.map.depthTexture.format=ls,this.type===ta?(F.map.depthTexture.compareFunction=Y?mh:ph,F.map.depthTexture.minFilter=gn,F.map.depthTexture.magFilter=gn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Kt,F.map.depthTexture.magFilter=Kt);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);const te=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();H.isPointLight!==!0&&F.updateMatrices(H,b);const ie=F.camera.layers.mask&4294967294?F.camera.layers:b.layers;for(let Ae=0;Ae<te;Ae++){const Fe=F.getCamera(Ae);if(H.isPointLight){const J=F.camera,ge=F.matrix,we=H.distance||J.far;we!==J.far&&(J.far=we,J.updateProjectionMatrix()),Fr.setFromMatrixPosition(H.matrixWorld),J.position.copy(Fr),Ul.copy(J.position),Ul.add(MM[Ae]),J.up.copy(SM[Ae]),J.lookAt(Ul),J.updateMatrixWorld(),ge.makeTranslation(-Fr.x,-Fr.y,-Fr.z),of.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),F._frustum.setFromProjectionMatrix(of,J.coordinateSystem,J.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,Ae),n.clear();else{Ae===0&&(n.setRenderTarget(F.map),n.clear());const J=F.getViewport(Ae);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),N.viewport(o)}i=F.getFrustum(Ae),S(g,b,Fe,H,ie,this.type)}F.isPointLightShadow!==!0&&this.type===zr&&v(F,b),F.needsUpdate=!1}p=this.type,d.needsUpdate=!1,n.setRenderTarget(L,P,R)};function v(T,g){const b=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new fi(s.x,s.y,{format:Rs,type:gi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(g,null,b,f,x,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(g,null,b,m,x,null)}function w(T,g,b,L){let P=null;const R=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)P=R;else if(P=b.isPointLight===!0?c:a,n.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const N=P.uuid,z=g.uuid;let C=l[N];C===void 0&&(C={},l[N]=C);let B=C[z];B===void 0&&(B=P.clone(),C[z]=B,g.addEventListener("dispose",E)),P=B}if(P.visible=g.visible,P.wireframe=g.wireframe,L===zr?P.side=g.shadowSide!==null?g.shadowSide:g.side:P.side=g.shadowSide!==null?g.shadowSide:h[g.side],P.alphaMap=g.alphaMap,P.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,P.map=g.map,P.clipShadows=g.clipShadows,P.clippingPlanes=g.clippingPlanes,P.clipIntersection=g.clipIntersection,P.displacementMap=g.displacementMap,P.displacementScale=g.displacementScale,P.displacementBias=g.displacementBias,P.wireframeLinewidth=g.wireframeLinewidth,P.linewidth=g.linewidth,b.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const N=n.properties.get(P);N.light=b}return P}function S(T,g,b,L,P,R){if(T.visible===!1)return;if(T.layers.test(P)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===zr)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const C=e.update(T),B=T.material;if(Array.isArray(B)){const H=C.groups;for(let F=0,ne=H.length;F<ne;F++){const Y=H[F],te=B[Y.materialIndex];if(te&&te.visible){const ie=w(T,te,L,R);T.onBeforeShadow(n,T,g,b,C,ie,Y),n.renderBufferDirect(b,null,C,ie,T,Y),T.onAfterShadow(n,T,g,b,C,ie,Y)}}}else if(B.visible){const H=w(T,B,L,R);T.onBeforeShadow(n,T,g,b,C,H,null),n.renderBufferDirect(b,null,C,H,T,null),T.onAfterShadow(n,T,g,b,C,H,null)}}const z=T.children;for(let C=0,B=z.length;C<B;C++)S(z[C],g,b,L,P,R)}function E(T){T.target.removeEventListener("dispose",E);for(const b in l){const L=l[b],P=T.target.uuid;P in L&&(L[P].dispose(),delete L[P])}}}function bM(n,e){function t(){let D=!1;const j=new wt;let K=null;const de=new wt(0,0,0,0);return{setMask:function(oe){K!==oe&&!D&&(n.colorMask(oe,oe,oe,oe),K=oe)},setLocked:function(oe){D=oe},setClear:function(oe,le,Ce,qe,re){re===!0&&(oe*=qe,le*=qe,Ce*=qe),j.set(oe,le,Ce,qe),de.equals(j)===!1&&(n.clearColor(oe,le,Ce,qe),de.copy(j))},reset:function(){D=!1,K=null,de.set(-1,0,0,0)}}}function i(){let D=!1,j=!1,K=null,de=null,oe=null;return{setReversed:function(le){if(j!==le){const Ce=e.get("EXT_clip_control");le?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),j=le;const qe=oe;oe=null,this.setClear(qe)}},getReversed:function(){return j},setTest:function(le){le?Me(n.DEPTH_TEST):$e(n.DEPTH_TEST)},setMask:function(le){K!==le&&!D&&(n.depthMask(le),K=le)},setFunc:function(le){if(j&&(le=e0[le]),de!==le){switch(le){case Yl:n.depthFunc(n.NEVER);break;case Kl:n.depthFunc(n.ALWAYS);break;case Zl:n.depthFunc(n.LESS);break;case to:n.depthFunc(n.LEQUAL);break;case Jl:n.depthFunc(n.EQUAL);break;case Ql:n.depthFunc(n.GEQUAL);break;case jl:n.depthFunc(n.GREATER);break;case ec:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=le}},setLocked:function(le){D=le},setClear:function(le){oe!==le&&(oe=le,j&&(le=1-le),n.clearDepth(le))},reset:function(){D=!1,K=null,de=null,oe=null,j=!1}}}function s(){let D=!1,j=null,K=null,de=null,oe=null,le=null,Ce=null,qe=null,re=null;return{setTest:function(Pe){D||(Pe?Me(n.STENCIL_TEST):$e(n.STENCIL_TEST))},setMask:function(Pe){j!==Pe&&!D&&(n.stencilMask(Pe),j=Pe)},setFunc:function(Pe,We,ve){(K!==Pe||de!==We||oe!==ve)&&(n.stencilFunc(Pe,We,ve),K=Pe,de=We,oe=ve)},setOp:function(Pe,We,ve){(le!==Pe||Ce!==We||qe!==ve)&&(n.stencilOp(Pe,We,ve),le=Pe,Ce=We,qe=ve)},setLocked:function(Pe){D=Pe},setClear:function(Pe){re!==Pe&&(n.clearStencil(Pe),re=Pe)},reset:function(){D=!1,j=null,K=null,de=null,oe=null,le=null,Ce=null,qe=null,re=null}}}const r=new t,o=new i,a=new s;let c={};const l=new WeakMap;let u={},h={},f={},m=new WeakMap,_=[],x=null,d=!1,p=null,v=null,w=null,S=null,E=null,T=null,g=null,b=new Xe(0,0,0),L=0,P=!1,R=null,N=null,z=null,C=null,B=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,ne=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(Y)[1]),F=ne>=1):Y.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),F=ne>=2);let te=null,ie={};const Ae=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),J=new wt().fromArray(Ae),ge=new wt().fromArray(Fe);function we(D,j,K,de){const oe=new Uint8Array(4),le=n.createTexture();n.bindTexture(D,le),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ce=0;Ce<K;Ce++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(j,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(j+Ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return le}const Le={};Le[n.TEXTURE_2D]=we(n.TEXTURE_2D,n.TEXTURE_2D,1),Le[n.TEXTURE_CUBE_MAP]=we(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[n.TEXTURE_2D_ARRAY]=we(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Le[n.TEXTURE_3D]=we(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Me(n.DEPTH_TEST),o.setFunc(to),dn(!1),yt(ru),Me(n.CULL_FACE),Wt(cr);function Me(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function $e(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function At(D,j){return f[D]!==j?(n.bindFramebuffer(D,j),f[D]=j,D===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=j),D===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=j),!0):!1}function Ue(D,j){let K=_,de=!1;if(D){K=m.get(j),K===void 0&&(K=[],m.set(j,K));const oe=D.textures;if(K.length!==oe.length||K[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Ce=oe.length;le<Ce;le++)K[le]=n.COLOR_ATTACHMENT0+le;K.length=oe.length,de=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,de=!0);de&&n.drawBuffers(K)}function ut(D){return x!==D?(n.useProgram(D),x=D,!0):!1}const mt={[er]:n.FUNC_ADD,[ym]:n.FUNC_SUBTRACT,[bm]:n.FUNC_REVERSE_SUBTRACT};mt[wm]=n.MIN,mt[Em]=n.MAX;const Qe={[Tm]:n.ZERO,[Am]:n.ONE,[Rm]:n.SRC_COLOR,[Jf]:n.SRC_ALPHA,[Nm]:n.SRC_ALPHA_SATURATE,[Lm]:n.DST_COLOR,[Pm]:n.DST_ALPHA,[Cm]:n.ONE_MINUS_SRC_COLOR,[Qf]:n.ONE_MINUS_SRC_ALPHA,[Im]:n.ONE_MINUS_DST_COLOR,[Dm]:n.ONE_MINUS_DST_ALPHA,[Um]:n.CONSTANT_COLOR,[Fm]:n.ONE_MINUS_CONSTANT_COLOR,[Om]:n.CONSTANT_ALPHA,[km]:n.ONE_MINUS_CONSTANT_ALPHA};function Wt(D,j,K,de,oe,le,Ce,qe,re,Pe){if(D===cr){d===!0&&($e(n.BLEND),d=!1);return}if(d===!1&&(Me(n.BLEND),d=!0),D!==Sm){if(D!==p||Pe!==P){if((v!==er||E!==er)&&(n.blendEquation(n.FUNC_ADD),v=er,E=er),Pe)switch(D){case Yr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ou:n.blendFunc(n.ONE,n.ONE);break;case au:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:lt("WebGLState: Invalid blending: ",D);break}else switch(D){case Yr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ou:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case au:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lu:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",D);break}w=null,S=null,T=null,g=null,b.set(0,0,0),L=0,p=D,P=Pe}return}oe=oe||j,le=le||K,Ce=Ce||de,(j!==v||oe!==E)&&(n.blendEquationSeparate(mt[j],mt[oe]),v=j,E=oe),(K!==w||de!==S||le!==T||Ce!==g)&&(n.blendFuncSeparate(Qe[K],Qe[de],Qe[le],Qe[Ce]),w=K,S=de,T=le,g=Ce),(qe.equals(b)===!1||re!==L)&&(n.blendColor(qe.r,qe.g,qe.b,re),b.copy(qe),L=re),p=D,P=!1}function Dt(D,j){D.side===li?$e(n.CULL_FACE):Me(n.CULL_FACE);let K=D.side===vn;j&&(K=!K),dn(K),D.blending===Yr&&D.transparent===!1?Wt(cr):Wt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const de=D.stencilWrite;a.setTest(de),de&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),kt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Me(n.SAMPLE_ALPHA_TO_COVERAGE):$e(n.SAMPLE_ALPHA_TO_COVERAGE)}function dn(D){R!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),R=D)}function yt(D){D!==vm?(Me(n.CULL_FACE),D!==N&&(D===ru?n.cullFace(n.BACK):D===xm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):$e(n.CULL_FACE),N=D}function ti(D){D!==z&&(F&&n.lineWidth(D),z=D)}function kt(D,j,K){D?(Me(n.POLYGON_OFFSET_FILL),(C!==j||B!==K)&&(C=j,B=K,o.getReversed()&&(j=-j,K=-K),n.polygonOffset(j,K))):$e(n.POLYGON_OFFSET_FILL)}function Dn(D){D?Me(n.SCISSOR_TEST):$e(n.SCISSOR_TEST)}function Ln(D){D===void 0&&(D=n.TEXTURE0+H-1),te!==D&&(n.activeTexture(D),te=D)}function In(D,j,K){K===void 0&&(te===null?K=n.TEXTURE0+H-1:K=te);let de=ie[K];de===void 0&&(de={type:void 0,texture:void 0},ie[K]=de),(de.type!==D||de.texture!==j)&&(te!==K&&(n.activeTexture(K),te=K),n.bindTexture(D,j||Le[D]),de.type=D,de.texture=j)}function O(){const D=ie[te];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Nn(){try{n.compressedTexImage2D(...arguments)}catch(D){lt("WebGLState:",D)}}function xt(){try{n.compressedTexImage3D(...arguments)}catch(D){lt("WebGLState:",D)}}function Mt(){try{n.texSubImage2D(...arguments)}catch(D){lt("WebGLState:",D)}}function me(){try{n.texSubImage3D(...arguments)}catch(D){lt("WebGLState:",D)}}function Lt(){try{n.compressedTexSubImage2D(...arguments)}catch(D){lt("WebGLState:",D)}}function Ie(){try{n.compressedTexSubImage3D(...arguments)}catch(D){lt("WebGLState:",D)}}function Be(){try{n.texStorage2D(...arguments)}catch(D){lt("WebGLState:",D)}}function A(){try{n.texStorage3D(...arguments)}catch(D){lt("WebGLState:",D)}}function M(){try{n.texImage2D(...arguments)}catch(D){lt("WebGLState:",D)}}function $(){try{n.texImage3D(...arguments)}catch(D){lt("WebGLState:",D)}}function se(D){return h[D]!==void 0?h[D]:n.getParameter(D)}function ee(D,j){h[D]!==j&&(n.pixelStorei(D,j),h[D]=j)}function ae(D){J.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),J.copy(D))}function he(D){ge.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ge.copy(D))}function Z(D,j){let K=l.get(j);K===void 0&&(K=new WeakMap,l.set(j,K));let de=K.get(D);de===void 0&&(de=n.getUniformBlockIndex(j,D.name),n.uniformBlockBinding(j,de,de),K.set(D,de))}function Q(D,j,K){const oe=l.get(j).get(D);c[oe]!==K&&(n.bindBufferBase(n.UNIFORM_BUFFER,oe,K),c[oe]=K)}function ce(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},te=null,ie={},f={},c={},m=new WeakMap,_=[],x=null,d=!1,p=null,v=null,w=null,S=null,E=null,T=null,g=null,b=new Xe(0,0,0),L=0,P=!1,R=null,N=null,z=null,C=null,B=null,J.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Me,disable:$e,bindFramebuffer:At,drawBuffers:Ue,useProgram:ut,setBlending:Wt,setMaterial:Dt,setFlipSided:dn,setCullFace:yt,setLineWidth:ti,setPolygonOffset:kt,setScissorTest:Dn,activeTexture:Ln,bindTexture:In,unbindTexture:O,compressedTexImage2D:Nn,compressedTexImage3D:xt,texImage2D:M,texImage3D:$,pixelStorei:ee,getParameter:se,updateUBOMapping:Z,uniformBlockBinding:Q,texStorage2D:Be,texStorage3D:A,texSubImage2D:Mt,texSubImage3D:me,compressedTexSubImage2D:Lt,compressedTexSubImage3D:Ie,scissor:ae,viewport:he,reset:ce}}function wM(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ke,u=new WeakMap,h=new Set;let f;const m=new WeakMap,_=new Set,x=new FinalizationRegistry(A=>_.delete(A));let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,M){return d?new OffscreenCanvas(A,M):Ma("canvas")}function v(A,M,$){let se=1;const ee=Be(A);if((ee.width>$||ee.height>$)&&(se=$/Math.max(ee.width,ee.height)),se<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ae=Math.floor(se*ee.width),he=Math.floor(se*ee.height);f===void 0&&(f=p(ae,he));const Z=M?p(ae,he):f;return Z.width=ae,Z.height=he,Z.getContext("2d").drawImage(A,0,0,ae,he),Oe("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ae+"x"+he+")."),Z}else return"data"in A&&Oe("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function w(A){return A.generateMipmaps}function S(A){n.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(A,M,$,se,ee,ae=!1){if(A!==null){if(n[A]!==void 0)return n[A];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let he;se&&(he=e.get("EXT_texture_norm16"),he||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=M;if(M===n.RED&&($===n.FLOAT&&(Z=n.R32F),$===n.HALF_FLOAT&&(Z=n.R16F),$===n.UNSIGNED_BYTE&&(Z=n.R8),$===n.UNSIGNED_SHORT&&he&&(Z=he.R16_EXT),$===n.SHORT&&he&&(Z=he.R16_SNORM_EXT)),M===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(Z=n.R8UI),$===n.UNSIGNED_SHORT&&(Z=n.R16UI),$===n.UNSIGNED_INT&&(Z=n.R32UI),$===n.BYTE&&(Z=n.R8I),$===n.SHORT&&(Z=n.R16I),$===n.INT&&(Z=n.R32I)),M===n.RG&&($===n.FLOAT&&(Z=n.RG32F),$===n.HALF_FLOAT&&(Z=n.RG16F),$===n.UNSIGNED_BYTE&&(Z=n.RG8),$===n.UNSIGNED_SHORT&&he&&(Z=he.RG16_EXT),$===n.SHORT&&he&&(Z=he.RG16_SNORM_EXT)),M===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(Z=n.RG8UI),$===n.UNSIGNED_SHORT&&(Z=n.RG16UI),$===n.UNSIGNED_INT&&(Z=n.RG32UI),$===n.BYTE&&(Z=n.RG8I),$===n.SHORT&&(Z=n.RG16I),$===n.INT&&(Z=n.RG32I)),M===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),$===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),$===n.UNSIGNED_INT&&(Z=n.RGB32UI),$===n.BYTE&&(Z=n.RGB8I),$===n.SHORT&&(Z=n.RGB16I),$===n.INT&&(Z=n.RGB32I)),M===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),$===n.UNSIGNED_INT&&(Z=n.RGBA32UI),$===n.BYTE&&(Z=n.RGBA8I),$===n.SHORT&&(Z=n.RGBA16I),$===n.INT&&(Z=n.RGBA32I)),M===n.RGB&&($===n.UNSIGNED_SHORT&&he&&(Z=he.RGB16_EXT),$===n.SHORT&&he&&(Z=he.RGB16_SNORM_EXT),$===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),$===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),M===n.RGBA){const Q=ae?xa:tt.getTransfer(ee);$===n.FLOAT&&(Z=n.RGBA32F),$===n.HALF_FLOAT&&(Z=n.RGBA16F),$===n.UNSIGNED_BYTE&&(Z=Q===ht?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT&&he&&(Z=he.RGBA16_EXT),$===n.SHORT&&he&&(Z=he.RGBA16_SNORM_EXT),$===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function g(A,M){let $;return A?M===null||M===mi||M===xr?$=n.DEPTH24_STENCIL8:M===ci?$=n.DEPTH32F_STENCIL8:M===io&&($=n.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===mi||M===xr?$=n.DEPTH_COMPONENT24:M===ci?$=n.DEPTH_COMPONENT32F:M===io&&($=n.DEPTH_COMPONENT16),$}function b(A,M){return w(A)===!0||A.isFramebufferTexture&&A.minFilter!==Kt&&A.minFilter!==gn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function L(A){const M=new WeakRef(A);i.get(A).__ref=M,_.add(M),x.register(A,M,M)}function P(A){const M=i.get(A).__ref;M!==void 0&&(_.delete(M),x.unregister(M))}function R(A){z(A.target)}function N(A){C(A.target)}function z(A){A.removeEventListener("dispose",R),P(A),H(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&h.delete(A)}function C(A){A.removeEventListener("dispose",N),P(A),ne(A)}function B(){for(const A of _){const M=A.deref();M!==void 0&&(M.isRenderTarget===!0?C(M):z(M))}_.clear(),h.clear()}function H(A){const M=i.get(A);if(M.__webglInit===void 0)return;const $=A.source,se=m.get($);if(se){const ee=se[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&F(A),Object.keys(se).length===0&&m.delete($)}i.remove(A)}function F(A){const M=i.get(A);n.deleteTexture(M.__webglTexture);const $=A.source,se=m.get($);delete se[M.__cacheKey],o.memory.textures--}function ne(A){const M=i.get(A);M.__depthDisposeCallback&&M.__depthDisposeCallback();const $=A.depthTexture;if($&&$.renderTarget===A&&z($),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let ae=0;ae<M.__webglFramebuffer[ee].length;ae++)n.deleteFramebuffer(M.__webglFramebuffer[ee][ae]);else n.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)n.deleteFramebuffer(M.__webglFramebuffer[ee]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const se=A.textures;for(let ee=0,ae=se.length;ee<ae;ee++){const he=i.get(se[ee]);he.__webglTexture&&(n.deleteTexture(he.__webglTexture),o.memory.textures--),i.remove(se[ee])}i.remove(A)}let Y=0;function te(){Y=0}function ie(){return Y}function Ae(A){Y=A}function Fe(){const A=Y;return A>=s.maxTextures&&Oe("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,A}function J(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.mipmapsAutoUpdate),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function ge(A,M){const $=i.get(A);if(A.isVideoTexture&&Lt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&$.__version!==A.version){const se=A.image;if(se===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Dt($,A,M);return}}else A.isExternalTexture&&($.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+M)}function we(A,M){const $=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&$.__version!==A.version){Dt($,A,M);return}else A.isExternalTexture&&($.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+M)}function Le(A,M){const $=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&$.__version!==A.version){Dt($,A,M);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+M)}function Me(A,M){const $=i.get(A);if(A.version>0&&$.__version!==A.version){dn($,A,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+M)}const $e={[tc]:n.REPEAT,[Ai]:n.CLAMP_TO_EDGE,[nc]:n.MIRRORED_REPEAT},At={[Kt]:n.NEAREST,[Gm]:n.NEAREST_MIPMAP_NEAREST,[bo]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[ll]:n.LINEAR_MIPMAP_NEAREST,[qi]:n.LINEAR_MIPMAP_LINEAR},Ue={[Wm]:n.NEVER,[gh]:n.ALWAYS,[Xm]:n.LESS,[ph]:n.LEQUAL,[qm]:n.EQUAL,[mh]:n.GEQUAL,[Ym]:n.GREATER,[Km]:n.NOTEQUAL};function ut(A,M){if(M.type===ci&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===gn||M.magFilter===ll||M.magFilter===bo||M.magFilter===qi||M.minFilter===gn||M.minFilter===ll||M.minFilter===bo||M.minFilter===qi)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,$e[M.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,$e[M.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,$e[M.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,At[M.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,At[M.minFilter]),M.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Kt||M.minFilter!==bo&&M.minFilter!==qi||M.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function mt(A,M){let $=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",R),L(M));const se=M.source;let ee=m.get(se);ee===void 0&&(ee={},m.set(se,ee));const ae=J(M);if(ae!==A.__cacheKey){ee[ae]===void 0&&(ee[ae]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ee[ae].usedTimes++;const he=ee[A.__cacheKey];he!==void 0&&(ee[A.__cacheKey].usedTimes--,he.usedTimes===0&&F(M)),A.__cacheKey=ae,A.__webglTexture=ee[ae].texture}return $}function Qe(A,M,$){return Math.floor(Math.floor(A/$)/M)}function Wt(A,M,$,se){const ae=A.updateRanges;if(ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,$,se,M.data);else{ae.sort((D,j)=>D.start-j.start);let he=0;for(let D=1;D<ae.length;D++){const j=ae[he],K=ae[D],de=j.start+j.count,oe=Qe(K.start,M.width,4),le=Qe(j.start,M.width,4);K.start<=de+1&&oe===le&&Qe(K.start+K.count-1,M.width,4)===oe?j.count=Math.max(j.count,K.start+K.count-j.start):(++he,ae[he]=K)}ae.length=he+1;const Z=t.getParameter(n.UNPACK_ROW_LENGTH),Q=t.getParameter(n.UNPACK_SKIP_PIXELS),ce=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let D=0,j=ae.length;D<j;D++){const K=ae[D],de=Math.floor(K.start/4),oe=Math.ceil(K.count/4),le=de%M.width,Ce=Math.floor(de/M.width),qe=oe,re=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,le),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ce),t.texSubImage2D(n.TEXTURE_2D,0,le,Ce,qe,re,$,se,M.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Z),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(n.UNPACK_SKIP_ROWS,ce)}}function Dt(A,M,$){let se=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=n.TEXTURE_3D);const ee=mt(A,M),ae=M.source;t.bindTexture(se,A.__webglTexture,n.TEXTURE0+$);const he=i.get(ae);if(ae.version!==he.__version||ee===!0){if(t.activeTexture(n.TEXTURE0+$),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const re=tt.getPrimaries(tt.workingColorSpace),Pe=M.colorSpace===$i?null:tt.getPrimaries(M.colorSpace),We=M.colorSpace===$i||re===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let Q=v(M.image,!1,s.maxTextureSize);Q=Ie(M,Q);const ce=r.convert(M.format,M.colorSpace),D=r.convert(M.type);let j=T(M.internalFormat,ce,D,M.normalized,M.colorSpace,M.isVideoTexture);ut(se,M);let K;const de=M.mipmaps,oe=M.isVideoTexture!==!0,le=he.__version===void 0||ee===!0,Ce=ae.dataReady,qe=b(M,Q);if(M.isDepthTexture)j=g(M.format===Yi,M.type),le&&(oe?t.texStorage2D(n.TEXTURE_2D,1,j,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,j,Q.width,Q.height,0,ce,D,null));else if(M.isDataTexture)if(de.length>0){oe&&le&&t.texStorage2D(n.TEXTURE_2D,qe,j,de[0].width,de[0].height);for(let re=0,Pe=de.length;re<Pe;re++)K=de[re],oe?Ce&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,K.width,K.height,ce,D,K.data):t.texImage2D(n.TEXTURE_2D,re,j,K.width,K.height,0,ce,D,K.data);M.generateMipmaps=!1}else oe?(le&&t.texStorage2D(n.TEXTURE_2D,qe,j,Q.width,Q.height),Ce&&Wt(M,Q,ce,D)):t.texImage2D(n.TEXTURE_2D,0,j,Q.width,Q.height,0,ce,D,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){oe&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,qe,j,de[0].width,de[0].height,Q.depth);for(let re=0,Pe=de.length;re<Pe;re++)if(K=de[re],M.format!==di)if(ce!==null)if(oe){if(Ce)if(M.layerUpdates.size>0){const We=ku(K.width,K.height,M.format,M.type);for(const ve of M.layerUpdates){const ft=K.data.subarray(ve*We/K.data.BYTES_PER_ELEMENT,(ve+1)*We/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,ve,K.width,K.height,1,ce,ft)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,K.width,K.height,Q.depth,ce,K.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,j,K.width,K.height,Q.depth,0,K.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?Ce&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,K.width,K.height,Q.depth,ce,D,K.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,j,K.width,K.height,Q.depth,0,ce,D,K.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{oe&&le&&t.texStorage2D(n.TEXTURE_2D,qe,j,de[0].width,de[0].height);for(let re=0,Pe=de.length;re<Pe;re++)K=de[re],M.format!==di?ce!==null?oe?Ce&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,K.width,K.height,ce,K.data):t.compressedTexImage2D(n.TEXTURE_2D,re,j,K.width,K.height,0,K.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?Ce&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,K.width,K.height,ce,D,K.data):t.texImage2D(n.TEXTURE_2D,re,j,K.width,K.height,0,ce,D,K.data)}else if(M.isDataArrayTexture)if(oe){if(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,qe,j,Q.width,Q.height,Q.depth),Ce)if(M.layerUpdates.size>0){const re=ku(Q.width,Q.height,M.format,M.type);for(const Pe of M.layerUpdates){const We=Q.data.subarray(Pe*re/Q.data.BYTES_PER_ELEMENT,(Pe+1)*re/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Pe,Q.width,Q.height,1,ce,D,We)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ce,D,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,j,Q.width,Q.height,Q.depth,0,ce,D,Q.data);else if(M.isData3DTexture)oe?(le&&t.texStorage3D(n.TEXTURE_3D,qe,j,Q.width,Q.height,Q.depth),Ce&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ce,D,Q.data)):t.texImage3D(n.TEXTURE_3D,0,j,Q.width,Q.height,Q.depth,0,ce,D,Q.data);else if(M.isFramebufferTexture){if(le)if(oe)t.texStorage2D(n.TEXTURE_2D,qe,j,Q.width,Q.height);else{let re=Q.width,Pe=Q.height;for(let We=0;We<qe;We++)t.texImage2D(n.TEXTURE_2D,We,j,re,Pe,0,ce,D,null),re>>=1,Pe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){const re=n.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),Q.parentNode!==re){re.appendChild(Q),h.add(M),re.onpaint=Pe=>{const We=Pe.changedElements;for(const ve of h)We.includes(ve.image)&&(ve.needsUpdate=!0)},re.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{const We=n.RGBA,ve=n.RGBA,ft=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,We,ve,ft,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(de.length>0){if(oe&&le){const re=Be(de[0]);t.texStorage2D(n.TEXTURE_2D,qe,j,re.width,re.height)}for(let re=0,Pe=de.length;re<Pe;re++)K=de[re],oe?Ce&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ce,D,K):t.texImage2D(n.TEXTURE_2D,re,j,ce,D,K);M.generateMipmaps=!1}else if(oe){if(le){const re=Be(Q);t.texStorage2D(n.TEXTURE_2D,qe,j,re.width,re.height)}Ce&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,D,Q)}else t.texImage2D(n.TEXTURE_2D,0,j,ce,D,Q);w(M)&&M.mipmapsAutoUpdate===!0&&S(se),he.__version=ae.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function dn(A,M,$){if(M.image.length!==6)return;const se=mt(A,M),ee=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+$);const ae=i.get(ee);if(ee.version!==ae.__version||se===!0){t.activeTexture(n.TEXTURE0+$);const he=tt.getPrimaries(tt.workingColorSpace),Z=M.colorSpace===$i?null:tt.getPrimaries(M.colorSpace),Q=M.colorSpace===$i||he===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ce=M.isCompressedTexture||M.image[0].isCompressedTexture,D=M.image[0]&&M.image[0].isDataTexture,j=[];for(let ve=0;ve<6;ve++)!ce&&!D?j[ve]=v(M.image[ve],!0,s.maxCubemapSize):j[ve]=D?M.image[ve].image:M.image[ve],j[ve]=Ie(M,j[ve]);const K=j[0],de=r.convert(M.format,M.colorSpace),oe=r.convert(M.type);let le=T(M.internalFormat,de,oe,M.normalized,M.colorSpace);const Ce=M.isVideoTexture!==!0,qe=ae.__version===void 0||se===!0,re=ee.dataReady;let Pe=b(M,K);ut(n.TEXTURE_CUBE_MAP,M);let We;if(M.isDepthTexture){if(le=g(M.format===Yi,M.type),qe)if(Ce)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,le,K.width,K.height);else for(let ve=0;ve<6;ve++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,le,K.width,K.height,0,de,oe,null)}else if(ce){Ce&&qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,le,K.width,K.height);for(let ve=0;ve<6;ve++){We=j[ve].mipmaps;for(let ft=0;ft<We.length;ft++){const Bt=We[ft];M.format!==di?de!==null?Ce?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ft,0,0,Bt.width,Bt.height,de,Bt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ft,le,Bt.width,Bt.height,0,Bt.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ft,0,0,Bt.width,Bt.height,de,oe,Bt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ft,le,Bt.width,Bt.height,0,de,oe,Bt.data)}}}else{if(We=M.mipmaps,Ce&&qe){We.length>0&&Pe++;const ve=Be(j[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,le,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(D){Ce?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,j[ve].width,j[ve].height,de,oe,j[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,le,j[ve].width,j[ve].height,0,de,oe,j[ve].data);for(let ft=0;ft<We.length;ft++){const Ii=We[ft].image[ve].image;Ce?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ft+1,0,0,Ii.width,Ii.height,de,oe,Ii.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ft+1,le,Ii.width,Ii.height,0,de,oe,Ii.data)}}else{Ce?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,de,oe,j[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,le,de,oe,j[ve]);for(let ft=0;ft<We.length;ft++){const Bt=We[ft];Ce?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ft+1,0,0,de,oe,Bt.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ft+1,le,de,oe,Bt.image[ve])}}}w(M)&&M.mipmapsAutoUpdate===!0&&S(n.TEXTURE_CUBE_MAP),ae.__version=ee.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function yt(A,M,$,se,ee,ae){const he=r.convert($.format,$.colorSpace),Z=r.convert($.type),Q=T($.internalFormat,he,Z,$.normalized,$.colorSpace),ce=i.get(M),D=i.get($);if(D.__renderTarget=M,!ce.__hasExternalTextures){const j=Math.max(1,M.width>>ae),K=Math.max(1,M.height>>ae);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,ae,Q,j,K,M.depth,0,he,Z,null):t.texImage2D(ee,ae,Q,j,K,0,he,Z,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),me(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ee,D.__webglTexture,0,Mt(M)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,ee,D.__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ti(A,M,$){if(n.bindRenderbuffer(n.RENDERBUFFER,A),M.depthBuffer){const se=M.depthTexture,ee=se&&se.isDepthTexture?se.type:null,ae=g(M.stencilBuffer,ee),he=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;me(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt(M),ae,M.width,M.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt(M),ae,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ae,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,A)}else{const se=M.textures;for(let ee=0;ee<se.length;ee++){const ae=se[ee],he=r.convert(ae.format,ae.colorSpace),Z=r.convert(ae.type),Q=T(ae.internalFormat,he,Z,ae.normalized,ae.colorSpace);me(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt(M),Q,M.width,M.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt(M),Q,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Q,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function kt(A,M,$){const se=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ee=i.get(M.depthTexture);ee.__renderTarget=M;const ae=se?M.depthTexture.image[0]:M.depthTexture.image;(!ee.__webglTexture||ae.width!==M.width||ae.height!==M.height)&&(ae.width=M.width,ae.height=M.height,M.depthTexture.needsUpdate=!0),se?Me(M.depthTexture,0):ge(M.depthTexture,0);const he=ee.__webglTexture,Z=Mt(M),Q=se?n.TEXTURE_CUBE_MAP_POSITIVE_X+$:n.TEXTURE_2D,ce=M.depthTexture.format===Yi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===ls)me(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,Q,he,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,ce,Q,he,0);else if(M.depthTexture.format===Yi)me(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,Q,he,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,ce,Q,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Dn(A){const M=i.get(A),$=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const se=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),se){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,se.removeEventListener("dispose",ee)};se.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=se}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if($)for(let se=0;se<6;se++)kt(M.__webglFramebuffer[se],A,se);else A.texture.mipmaps.length>0?kt(M.__webglFramebuffer[0],A,0):kt(M.__webglFramebuffer,A,0);else if($){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]===void 0)M.__webglDepthbuffer[se]=n.createRenderbuffer(),ti(M.__webglDepthbuffer[se],A,!1);else{const ee=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,ae)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),ti(M.__webglDepthbuffer,A,!1);else{const ee=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,ae)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ln(A,M,$){const se=i.get(A);M!==void 0&&yt(se.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&Dn(A)}function In(A){const M=A.texture,$=i.get(A),se=i.get(M);A.addEventListener("dispose",N),L(A);const ee=A.textures,ae=A.isWebGLCubeRenderTarget===!0,he=ee.length>1;if(he||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=M.version,o.memory.textures++),ae){$.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(M.mipmaps.length>0){$.__webglFramebuffer[Z]=[];for(let Q=0;Q<M.mipmaps.length;Q++)$.__webglFramebuffer[Z][Q]=n.createFramebuffer()}else $.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(M.mipmaps.length>0){$.__webglFramebuffer=[];for(let Z=0;Z<M.mipmaps.length;Z++)$.__webglFramebuffer[Z]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(he)for(let Z=0,Q=ee.length;Z<Q;Z++){const ce=i.get(ee[Z]);ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&me(A)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Z=0;Z<ee.length;Z++){const Q=ee[Z];$.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[Z]);const ce=r.convert(Q.format,Q.colorSpace),D=r.convert(Q.type),j=T(Q.internalFormat,ce,D,Q.normalized,Q.colorSpace,A.isXRRenderTarget===!0),K=Mt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,K,j,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,$.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),ti($.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),ut(n.TEXTURE_CUBE_MAP,M);for(let Z=0;Z<6;Z++)if(M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)yt($.__webglFramebuffer[Z][Q],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Q);else yt($.__webglFramebuffer[Z],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);w(M)?S(n.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(he){for(let Z=0,Q=ee.length;Z<Q;Z++){const ce=ee[Z],D=i.get(ce);let j=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(j,D.__webglTexture),ut(j,ce),yt($.__webglFramebuffer,A,ce,n.COLOR_ATTACHMENT0+Z,j,0),w(ce)&&S(j)}t.unbindTexture()}else{let Z=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,se.__webglTexture),ut(Z,M),M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)yt($.__webglFramebuffer[Q],A,M,n.COLOR_ATTACHMENT0,Z,Q);else yt($.__webglFramebuffer,A,M,n.COLOR_ATTACHMENT0,Z,0);w(M)?S(Z):M.mipmaps.length>0&&n.texParameteri(Z,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&Dn(A)}function O(A){const M=A.textures;for(let $=0,se=M.length;$<se;$++){const ee=M[$];if(w(ee)&&ee.mipmapsAutoUpdate===!0){const ae=E(A),he=i.get(ee).__webglTexture;t.bindTexture(ae,he),S(ae),t.unbindTexture()}}}const Nn=[];function xt(A){if(A.samples>0){if(me(A)===!1){const M=A.textures,$=A.width,se=A.height;let ee=n.COLOR_BUFFER_BIT;const ae=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(A),Z=M.length>1;if(Z)for(let ce=0;ce<M.length;ce++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ce=0;ce<M.length;ce++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[ce]);const D=i.get(M[ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,D,0)}n.blitFramebuffer(0,0,$,se,0,0,$,se,ee,n.NEAREST),c===!0&&(Nn.length=0,Nn.push(n.COLOR_ATTACHMENT0+ce),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Nn.push(ae),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Nn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let ce=0;ce<M.length;ce++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,he.__webglColorRenderbuffer[ce]);const D=i.get(M[ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,D,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){const M=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Mt(A){return Math.min(s.maxSamples,A.samples)}function me(A){const M=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Lt(A){const M=o.render.frame;u.get(A)!==M&&(u.set(A,M),A.update())}function Ie(A,M){const $=A.colorSpace,se=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||$!==va&&$!==$i&&(tt.getTransfer($)===ht?(se!==di||ee!==En)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",$)),M}function Be(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=Fe,this.resetTextureUnits=te,this.getTextureUnits=ie,this.setTextureUnits=Ae,this.setTexture2D=ge,this.setTexture2DArray=we,this.setTexture3D=Le,this.setTextureCube=Me,this.rebindTextures=Ln,this.setupRenderTarget=In,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Dn,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=me,this.dispose=B}function EM(n,e){function t(i,s=$i){let r;const o=tt.getTransfer(s);if(i===En)return n.UNSIGNED_BYTE;if(i===vd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ch)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===dh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ah)return n.BYTE;if(i===lh)return n.SHORT;if(i===io)return n.UNSIGNED_SHORT;if(i===_d)return n.INT;if(i===mi)return n.UNSIGNED_INT;if(i===ci)return n.FLOAT;if(i===gi)return n.HALF_FLOAT;if(i===uh)return n.ALPHA;if(i===fh)return n.RGB;if(i===di)return n.RGBA;if(i===ls)return n.DEPTH_COMPONENT;if(i===Yi)return n.DEPTH_STENCIL;if(i===hh)return n.RED;if(i===Md)return n.RED_INTEGER;if(i===Rs)return n.RG;if(i===Sd)return n.RG_INTEGER;if(i===yd)return n.RGBA_INTEGER;if(i===na||i===ia||i===sa||i===ra)if(o===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ic||i===sc||i===rc||i===oc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ic)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===oc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ac||i===lc||i===cc||i===dc||i===uc||i===ga||i===fc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ac||i===lc)return o===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===cc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===dc)return r.COMPRESSED_R11_EAC;if(i===uc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ga)return r.COMPRESSED_RG11_EAC;if(i===fc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===hc||i===pc||i===mc||i===gc||i===_c||i===vc||i===xc||i===Mc||i===Sc||i===yc||i===bc||i===wc||i===Ec||i===Tc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===hc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_c)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Mc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ec)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Tc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ac||i===Rc||i===Cc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ac)return o===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pc||i===Dc||i===_a||i===Lc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Pc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const TM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class RM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Th(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Cs({vertexShader:TM,fragmentShader:AM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vt(new Sr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CM extends Os{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,m=null,_=null;const x=typeof XRWebGLBinding<"u",d=new RM,p={},v=t.getContextAttributes();let w=null,S=null;const E=[],T=[],g=new Ke;let b=null,L=null;const P=new Yn;P.viewport=new wt;const R=new Yn;R.viewport=new wt;const N=[P,R],z=new G0;let C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ge=E[J];return ge===void 0&&(ge=new _l,E[J]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(J){let ge=E[J];return ge===void 0&&(ge=new _l,E[J]=ge),ge.getGripSpace()},this.getHand=function(J){let ge=E[J];return ge===void 0&&(ge=new _l,E[J]=ge),ge.getHandSpace()};function H(J){const ge=T.indexOf(J.inputSource);if(ge===-1)return;const we=E[ge];we!==void 0&&(we.update(J.inputSource,J.frame,l||o),we.dispatchEvent({type:J.type,data:J.inputSource}))}function F(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",ne);for(let J=0;J<E.length;J++){const ge=T[J];ge!==null&&(T[J]=null,E[J].disconnect(ge))}C=null,B=null,d.reset();for(const J in p)delete p[J];if(e.setRenderTarget(w),m=null,f=null,h=null,s=null,S=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(g.width,g.height,!1),L!==null){const J=L.camera;J.fov=L.fov,J.zoom=L.zoom,J.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",F),s.addEventListener("inputsourceschange",ne),v.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(g),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Le=null,Me=null;v.depth&&(Me=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=v.stencil?Yi:ls,Le=v.stencil?xr:mi);const $e={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer($e),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new fi(f.textureWidth,f.textureHeight,{format:di,type:En,depthTexture:new Mr(f.textureWidth,f.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const we={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,we),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new fi(m.framebufferWidth,m.framebufferHeight,{format:di,type:En,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Fe.setContext(s),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function ne(J){for(let ge=0;ge<J.removed.length;ge++){const we=J.removed[ge],Le=T.indexOf(we);Le>=0&&(T[Le]=null,E[Le].disconnect(we))}for(let ge=0;ge<J.added.length;ge++){const we=J.added[ge];let Le=T.indexOf(we);if(Le===-1){for(let $e=0;$e<E.length;$e++)if($e>=T.length){T.push(we),Le=$e;break}else if(T[$e]===null){T[$e]=we,Le=$e;break}if(Le===-1)break}const Me=E[Le];Me&&Me.connect(we)}}function Y(J,ge){ge===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ge.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ge=J.near,we=J.far;d.texture!==null&&(d.depthNear>0&&(ge=d.depthNear),d.depthFar>0&&(we=d.depthFar)),z.near=R.near=P.near=ge,z.far=R.far=P.far=we,(C!==z.near||B!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),C=z.near,B=z.far),z.layers.mask=J.layers.mask|6,P.layers.mask=z.layers.mask&-5,R.layers.mask=z.layers.mask&-3;const Le=J.parent,Me=z.cameras;Y(z,Le);for(let $e=0;$e<Me.length;$e++)Y(Me[$e],Le);z.projectionMatrix.copy(P.projectionMatrix),z.projectionMatrixInverse.copy(P.projectionMatrixInverse),L===null&&J.isPerspectiveCamera&&(L={camera:J,fov:J.fov,zoom:J.zoom}),te(J,z,Le)};function te(J,ge,we){we===null?J.matrix.copy(ge.matrixWorld):(J.matrix.copy(we.matrixWorld),J.matrix.invert(),J.matrix.multiply(ge.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ge.projectionMatrix),J.projectionMatrixInverse.copy(ge.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Nc*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(J){c=J,f!==null&&(f.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(z)},this.getCameraTexture=function(J){return p[J]};let ie=null;function Ae(J,ge){if(u=ge.getViewerPose(l||o),_=ge,u!==null){const we=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let Le=!1;we.length!==z.cameras.length&&(z.cameras.length=0,Le=!0);for(let Ue=0;Ue<we.length;Ue++){const ut=we[Ue];let mt=null;if(m!==null)mt=m.getViewport(ut);else{const Wt=h.getViewSubImage(f,ut);mt=Wt.viewport,Ue===0&&(e.setRenderTargetTextures(S,Wt.colorTexture,Wt.depthStencilTexture),e.setRenderTarget(S))}let Qe=N[Ue];Qe===void 0&&(Qe=new Yn,Qe.layers.enable(Ue),Qe.viewport=new wt,N[Ue]=Qe),Qe.matrix.fromArray(ut.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(ut.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(mt.x,mt.y,mt.width,mt.height),Ue===0&&(z.matrix.copy(Qe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Le===!0&&z.cameras.push(Qe)}const Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const Ue=h.getDepthInformation(we[0]);Ue&&Ue.isValid&&Ue.texture&&d.init(Ue,s.renderState)}if(Me&&Me.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let Ue=0;Ue<we.length;Ue++){const ut=we[Ue].camera;if(ut){let mt=p[ut];mt||(mt=new Th,p[ut]=mt);const Qe=h.getCameraImage(ut);mt.sourceTexture=Qe}}}}for(let we=0;we<E.length;we++){const Le=T[we],Me=E[we];Le!==null&&Me!==void 0&&Me.update(Le,ge,l||o)}ie&&ie(J,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),_=null}const Fe=new Dh;Fe.setAnimationLoop(Ae),this.setAnimationLoop=function(J){ie=J},this.dispose=function(){}}}const PM=new vt,Gh=new Ge;Gh.set(-1,0,0,0,1,0,0,0,1);function DM(n,e){function t(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function i(d,p){p.color.getRGB(d.fogColor.value,Ah(n)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function s(d,p,v,w,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(d,p):p.isMeshLambertMaterial?(r(d,p),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(d,p),h(d,p)):p.isMeshPhongMaterial?(r(d,p),u(d,p),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(d,p),f(d,p),p.isMeshPhysicalMaterial&&m(d,p,S)):p.isMeshMatcapMaterial?(r(d,p),_(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),x(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(o(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?c(d,p,v,w):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,t(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===vn&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,t(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===vn&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,t(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,t(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const v=e.get(p),w=v.envMap,S=v.envMapRotation;w&&(d.envMap.value=w,d.envMapRotation.value.setFromMatrix4(PM.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(Gh),d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,d.aoMapTransform))}function o(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform))}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function c(d,p,v,w){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*v,d.scale.value=w*.5,p.map&&(d.map.value=p.map,t(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function u(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function h(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,v){d.ior.value=p.ior,p.diffuseRoughness>0&&(d.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(d.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,d.diffuseRoughnessMapTransform))),p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vn&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.retroreflectivity>0&&(d.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,d.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,p){p.matcap&&(d.matcap.value=p.matcap)}function x(d,p){const v=e.get(p).light;d.referencePosition.value.setFromMatrixPosition(v.matrixWorld),d.nearDistance.value=v.shadow.camera.near,d.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function LM(n,e,t,i){let s={},r={};function o(v,w){const S=w.program;i.uniformBlockBinding(v,S,s[v.id])}function a(v,w){let S=s[v.id];S===void 0&&(_(v),S=c(v),s[v.id]=S,v.addEventListener("dispose",d));const E=w.program;i.updateUBOMapping(v,E);const T=e.render.frame;r[v.id]!==T&&(l(v),r[v.id]=T)}function c(v){const w=n.createBuffer(),S=v.__size,E=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,S,E),n.bindBuffer(n.UNIFORM_BUFFER,null),w}function l(v){const w=s[v.id],S=v.uniforms,E=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let T=0,g=S.length;T<g;T++){const b=S[T];if(Array.isArray(b))for(let L=0,P=b.length;L<P;L++)u(b[L],T,L,E);else u(b,T,0,E)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(v,w,S,E){if(f(v,w,S,E)===!0){const T=v.__offset,g=v.value;if(Array.isArray(g)){let b=0;for(let L=0;L<g.length;L++){const P=g[L],R=x(P,!0);h(P,v.__data,b),b+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else h(g,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,v.__data)}}function h(v,w,S){typeof v=="number"||typeof v=="boolean"?w[S]=v:v.isMatrix3?(w[S]=v.elements[0],w[S+1]=v.elements[1],w[S+2]=v.elements[2],w[S+3]=0,w[S+4]=v.elements[3],w[S+5]=v.elements[4],w[S+6]=v.elements[5],w[S+7]=0,w[S+8]=v.elements[6],w[S+9]=v.elements[7],w[S+10]=v.elements[8],w[S+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-S),S):v.toArray(w,S)}function f(v,w,S,E){const T=v.value,g=w+"_"+S;if(Array.isArray(T)){E[g]===void 0&&(E[g]=[]);const b=E[g];let L=!1;for(let P=0;P<T.length;P++)m(T[P],b,P)===!0&&(L=!0);return L}return m(T,E,g)}function m(v,w,S){if(w[S]===void 0)return typeof v=="number"||typeof v=="boolean"?w[S]=v:ArrayBuffer.isView(v)?w[S]=v.slice():w[S]=v.clone(),!0;{const E=w[S];if(typeof v=="number"||typeof v=="boolean"){if(E!==v)return w[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(E.equals(v)===!1)return E.copy(v),!0}}return!1}function _(v){const w=v.uniforms;let S=0;const E=16;for(let g=0,b=w.length;g<b;g++){const L=Array.isArray(w[g])?w[g]:[w[g]];for(let P=0,R=L.length;P<R;P++){const N=L[P],z=Array.isArray(N.value)?N.value:[N.value],C=Array.isArray(w[g])||Array.isArray(N.value);let B=S;for(let F=0,ne=z.length;F<ne;F++){const Y=z[F],te=x(Y,C),ie=S%E,Ae=ie%te.boundary,Fe=ie+Ae;S+=Ae,Fe!==0&&E-Fe<te.storage&&(S+=E-Fe),F===0&&(B=S),S+=te.storage}const H=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new H((S-B)/Float32Array.BYTES_PER_ELEMENT),N.__offset=B}}const T=S%E;return T>0&&(S+=E-T),v.__size=S,v.__cache={},this}function x(v,w){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=16,S.storage=48):v.isMatrix4?(S.boundary=16,S.storage=64):v.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function d(v){const w=v.target;w.removeEventListener("dispose",d),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(const v in s)n.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:p}}const IM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ii=null;function NM(){return ii===null&&(ii=new T0(IM,16,16,Rs,gi),ii.name="DFG_LUT",ii.minFilter=gn,ii.magFilter=gn,ii.wrapS=Ai,ii.wrapT=Ai,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}class UM{constructor(e={}){const{canvas:t=Qm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:m=En}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const x=m,d=new Set([yd,Sd,Md]),p=new Set([En,mi,io,xr,vd,xd]),v=new Uint32Array(4),w=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let E=null,T=null;const g=[],b=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let R=!1,N=null,z=null,C=null,B=null;this._outputColorSpace=bn;let H=0,F=0,ne=null,Y=-1,te=null;const ie=new wt,Ae=new wt;let Fe=null;const J=new Xe(0);let ge=0,we=t.width,Le=t.height,Me=1,$e=null,At=null;const Ue=new wt(0,0,we,Le),ut=new wt(0,0,we,Le);let mt=!1;const Qe=new ro,Wt=new Td;let Dt=!1,dn=!1;const yt=new vt,ti=new G,kt=new wt,Dn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ln=!1;function In(){return ne===null?Me:1}let O=i;function Nn(y,U){return t.getContext(y,U)}let xt,Mt,me,Lt,Ie,Be,A,M,$,se,ee,ae,he,Z,Q,ce,D,j,K,de,oe,le,Ce;try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${md}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",ve,!1),O===null){const U="webgl2";if(O=Nn(U,y),O===null)throw Nn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qe()}catch(y){throw t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),lt("WebGLRenderer: "+y.message),y}function qe(){xt=new kv(O),xt.init(),oe=new EM(O,xt),Mt=new Av(O,xt,e,oe),me=new bM(O,xt),Mt.reversedDepthBuffer&&f&&me.buffers.depth.setReversed(!0),z=O.createFramebuffer(),C=O.createFramebuffer(),B=O.createFramebuffer(),Lt=new Gv(O),Ie=new cM,Be=new wM(O,xt,me,Ie,Mt,oe,Lt),A=new Ov(P),M=new V0(O),le=new Ev(O,M),$=new Bv(O,M,Lt,le),se=new Vv(O,$,M,le,Lt),j=new Hv(O,Mt,Be),Q=new Rv(Ie),ee=new lM(P,A,xt,Mt,le,Q),ae=new DM(P,Ie),he=new uM,Z=new _M(xt),D=new wv(P,A,me,se,_,c),ce=new yM(P,se,Mt),Ce=new LM(O,Lt,Mt,me),K=new Tv(O,xt,Lt),de=new zv(O,xt,Lt),Lt.programs=ee.programs,P.capabilities=Mt,P.extensions=xt,P.properties=Ie,P.renderLists=he,P.shadowMap=ce,P.state=me,P.info=Lt}x!==En&&(L=new Wv(x,t.width,t.height,a,s,r));const re=new CM(P,O);this.xr=re,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const y=xt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=xt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(y){y!==void 0&&(Me=y,this.setSize(we,Le,!1))},this.getSize=function(y){return y.set(we,Le)},this.setSize=function(y,U,q=!0){if(re.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}we=y,Le=U,t.width=Math.floor(y*Me),t.height=Math.floor(U*Me),q===!0&&(t.style.width=y+"px",t.style.height=U+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(we*Me,Le*Me).floor()},this.setDrawingBufferSize=function(y,U,q){we=y,Le=U,Me=q,t.width=Math.floor(y*q),t.height=Math.floor(U*q),this.setViewport(0,0,y,U)},this.setEffects=function(y){if(x===En){lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let U=0;U<y.length;U++)if(y[U].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(ie)},this.getViewport=function(y){return y.copy(Ue)},this.setViewport=function(y,U,q,V){y.isVector4?Ue.set(y.x,y.y,y.z,y.w):Ue.set(y,U,q,V),me.viewport(ie.copy(Ue).multiplyScalar(In()).round())},this.getScissor=function(y){return y.copy(ut)},this.setScissor=function(y,U,q,V){y.isVector4?ut.set(y.x,y.y,y.z,y.w):ut.set(y,U,q,V),me.scissor(Ae.copy(ut).multiplyScalar(In()).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(y){me.setScissorTest(mt=y)},this.setOpaqueSort=function(y){$e=y},this.setTransparentSort=function(y){At=y},this.getClearColor=function(y){return y.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,q=!0){let V=0;if(y){let W=!1;if(ne!==null){const pe=ne.texture.format;W=d.has(pe)}if(W){const pe=ne.texture.type,be=p.has(pe),fe=D.getClearColor(),Se=D.getClearAlpha(),Re=fe.r,He=fe.g,je=fe.b;be?(v[0]=Re,v[1]=He,v[2]=je,v[3]=Se,O.clearBufferuiv(O.COLOR,0,v)):(w[0]=Re,w[1]=He,w[2]=je,w[3]=Se,O.clearBufferiv(O.COLOR,0,w))}else V|=O.COLOR_BUFFER_BIT}U&&(V|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),N=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),D.dispose(),he.dispose(),Z.dispose(),Be.dispose(),Ie.dispose(),A.dispose(),se.dispose(),$.dispose(),le.dispose(),Ce.dispose(),ee.dispose(),re.dispose(),re.removeEventListener("sessionstart",Hd),re.removeEventListener("sessionend",Vd),hs.stop()};function Pe(y){y.preventDefault(),uu("WebGLRenderer: Context Lost."),R=!0}function We(){uu("WebGLRenderer: Context Restored."),R=!1;const y=Lt.autoReset,U=ce.enabled,q=ce.autoUpdate,V=ce.needsUpdate,W=ce.type;qe(),Lt.autoReset=y,ce.enabled=U,ce.autoUpdate=q,ce.needsUpdate=V,ce.type=W}function ve(y){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ft(y){const U=y.target;U.removeEventListener("dispose",ft),Bt(U)}function Bt(y){Ii(y),Ie.remove(y)}function Ii(y){const U=Ie.get(y).programs;U!==void 0&&(U.forEach(function(q){ee.releaseProgram(q)}),y.isShaderMaterial&&ee.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,q,V,W,pe){U===null&&(U=Dn);const be=W.isMesh&&W.matrixWorld.determinantAffine()<0,fe=vp(y,U,q,V,W);me.setMaterial(V,be);let Se=q.index,Re=1;if(V.wireframe===!0){if(Se=$.getWireframeAttribute(q),Se===void 0)return;Re=2}const He=q.drawRange,je=q.attributes.position;let Ee=He.start*Re,et=(He.start+He.count)*Re;pe!==null&&(Ee=Math.max(Ee,pe.start*Re),et=Math.min(et,(pe.start+pe.count)*Re)),Se!==null?(Ee=Math.max(Ee,0),et=Math.min(et,Se.count)):je!=null&&(Ee=Math.max(Ee,0),et=Math.min(et,je.count));const Rt=et-Ee;if(Rt<0||Rt===1/0)return;le.setup(W,V,fe,q,Se);let _t,gt=K;if(Se!==null&&(_t=M.get(Se),gt=de,gt.setIndex(_t)),W.isMesh)V.wireframe===!0?(me.setLineWidth(V.wireframeLinewidth*In()),gt.setMode(O.LINES)):gt.setMode(O.TRIANGLES);else if(W.isLine){let Qt=V.linewidth;Qt===void 0&&(Qt=1),me.setLineWidth(Qt*In()),W.isLineSegments?gt.setMode(O.LINES):W.isLineLoop?gt.setMode(O.LINE_LOOP):gt.setMode(O.LINE_STRIP)}else W.isPoints?gt.setMode(O.POINTS):W.isSprite&&gt.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(xt.get("WEBGL_multi_draw"))gt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Qt=W._multiDrawStarts,Te=W._multiDrawCounts,an=W._multiDrawCount,at=Se?M.get(Se).bytesPerElement:1,ps=Ie.get(V).currentProgram.getUniforms();for(let jt=0;jt<an;jt++)ps.setValue(O,"_gl_DrawID",jt),gt.render(Qt[jt]/at,Te[jt])}else if(W.isInstancedMesh)gt.renderInstances(Ee,Rt,W.count);else if(q.isInstancedBufferGeometry){const Qt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Te=Math.min(q.instanceCount,Qt);gt.renderInstances(Ee,Rt,Te)}else gt.render(Ee,Rt)};function Gd(y,U,q,V){N!==null&&y.isNodeMaterial&&N.setObject(V,y),Dt===!0&&Q.setState(y,q,!1),y.transparent===!0&&y.side===li&&y.forceSinglePass===!1?(y.side=vn,y.needsUpdate=!0,Pr(y,U,V),y.side=As,y.needsUpdate=!0,Pr(y,U,V),y.side=li):Pr(y,U,V)}this.compile=function(y,U,q=null){q===null&&(q=y),N!==null&&N.renderStart(y,U,q),T=Z.get(q),T.init(U),b.push(T),q.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),y!==q&&y.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights(),N!==null&&N.updateLights(T.state.lightsArray),dn=this.localClippingEnabled,Dt=Q.init(this.clippingPlanes,dn),Dt===!0&&Q.setGlobalState(this.clippingPlanes,U),N!==null&&ce.render(T.state.shadowsArray,q,U);const V=new Set;return y.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const pe=W.material;if(pe)if(Array.isArray(pe))for(let be=0;be<pe.length;be++){const fe=pe[be];Gd(fe,q,U,W),V.add(fe)}else Gd(pe,q,U,W),V.add(pe)}),T=b.pop(),N!==null&&N.renderEnd(),V},this.compileAsync=function(y,U,q=null){const V=this.compile(y,U,q);return new Promise(W=>{function pe(){if(V.forEach(function(be){const Se=Ie.get(be).currentProgram;(Se===void 0||Se.isReady())&&V.delete(be)}),V.size===0){W(y);return}setTimeout(pe,10)}xt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let tl=null;function gp(y){tl&&tl(y)}function Hd(){hs.stop()}function Vd(){hs.start()}const hs=new Dh;hs.setAnimationLoop(gp),typeof self<"u"&&hs.setContext(self),this.setAnimationLoop=function(y){tl=y,re.setAnimationLoop(y),y===null?hs.stop():hs.start()},re.addEventListener("sessionstart",Hd),re.addEventListener("sessionend",Vd),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;N!==null&&N.renderStart(y,U);const q=re.enabled===!0&&re.isPresenting===!0,V=L!==null&&(ne===null||q)&&L.begin(P,ne);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(U),U=re.getCamera()),y.isScene===!0&&y.onBeforeRender(P,y,U,ne),T=Z.get(y,b.length),T.init(U),T.state.textureUnits=Be.getTextureUnits(),b.push(T),yt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Wt.setFromArrayCamera(U):Qe.setFromProjectionMatrix(yt,Qn,U.reversedDepth),dn=this.localClippingEnabled,Dt=Q.init(this.clippingPlanes,dn),E=he.get(y,g.length),E.init(),g.push(E),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){const be=P.xr.getDepthSensingMesh();be!==null&&nl(be,U,-1/0,P.sortObjects)}nl(y,U,0,P.sortObjects),E.finish(),N!==null&&N.updateLights(T.state.lightsArray),P.sortObjects===!0&&E.sort($e,At),Ln=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ln&&D.addToRenderList(E,y),this.info.autoReset===!0&&this.info.reset(),Dt===!0&&Q.beginShadows();const W=T.state.shadowsArray;if(ce.render(W,y,U),Dt===!0&&Q.endShadows(),(V&&L.hasRenderPass())===!1){const be=E.opaque,fe=E.transmissive;if(T.setupLights(),U.isArrayCamera){const Se=U.cameras;if(fe.length>0)for(let Re=0,He=Se.length;Re<He;Re++){const je=Se[Re];Wd(be,fe,y,je)}Ln&&D.render(y);for(let Re=0,He=Se.length;Re<He;Re++){const je=Se[Re];$d(E,y,je,je.viewport)}}else fe.length>0&&Wd(be,fe,y,U),Ln&&D.render(y),$d(E,y,U)}ne!==null&&F===0&&(Be.updateMultisampleRenderTarget(ne),Be.updateRenderTargetMipmap(ne)),V&&L.end(P),y.isScene===!0&&y.onAfterRender(P,y,U),le.resetDefaultState(),Y=-1,te=null,b.pop(),b.length>0?(T=b[b.length-1],Be.setTextureUnits(T.state.textureUnits),Dt===!0&&Q.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,g.pop(),g.length>0?E=g[g.length-1]:E=null,N!==null&&N.renderEnd()};function nl(y,U,q,V){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)q=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){const be=U.isArrayCamera?Wt:Qe;if(!y.frustumCulled||y.intersectsFrustum(be)){V&&kt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(yt);const fe=se.update(y),Se=y.material;Se.visible&&E.push(y,fe,Se,q,kt.z,null,U)}}else if(y.isMesh||y.isLine||y.isPoints){const be=U.isArrayCamera?Wt:Qe;if(!y.frustumCulled||y.intersectsFrustum(be)){const fe=se.update(y),Se=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),kt.copy(y.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),kt.copy(fe.boundingSphere.center)),kt.applyMatrix4(y.matrixWorld).applyMatrix4(yt)),Array.isArray(Se)){const Re=fe.groups;for(let He=0,je=Re.length;He<je;He++){const Ee=Re[He],et=Se[Ee.materialIndex];et&&et.visible&&E.push(y,fe,et,q,kt.z,Ee,U)}}else Se.visible&&E.push(y,fe,Se,q,kt.z,null,U)}}}const pe=y.children;for(let be=0,fe=pe.length;be<fe;be++)nl(pe[be],U,q,V)}function $d(y,U,q,V){const{opaque:W,transmissive:pe,transparent:be}=y;T.setupLightsView(q),Dt===!0&&Q.setGlobalState(P.clippingPlanes,q),V&&me.viewport(ie.copy(V)),W.length>0&&So(W,U,q),pe.length>0&&So(pe,U,q),be.length>0&&So(be,U,q),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Wd(y,U,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){const Ee=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new fi(1,1,{generateMipmaps:!0,type:Ee?gi:En,minFilter:qi,samples:Math.max(4,Mt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const pe=T.state.transmissionRenderTarget[V.id],be=V.viewport||ie;pe.setSize(be.z*P.transmissionResolutionScale,be.w*P.transmissionResolutionScale);const fe=P.getRenderTarget(),Se=P.getActiveCubeFace(),Re=P.getActiveMipmapLevel();P.setRenderTarget(pe),P.getClearColor(J),ge=P.getClearAlpha(),ge<1&&P.setClearColor(16777215,.5),P.clear(),Ln&&D.render(q);const He=P.toneMapping;P.toneMapping=Ci;const je=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),Dt===!0&&Q.setGlobalState(P.clippingPlanes,V),So(y,q,V),Be.updateMultisampleRenderTarget(pe),Be.updateRenderTargetMipmap(pe),xt.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let et=0,Rt=U.length;et<Rt;et++){const _t=U[et],{object:gt,geometry:Qt,material:Te,group:an}=_t;if(Te.side===li&&gt.layers.test(V.layers)){const at=Te.side;Te.side=vn,Te.needsUpdate=!0,Xd(gt,q,V,Qt,Te,an),Te.side=at,Te.needsUpdate=!0,Ee=!0}}Ee===!0&&(Be.updateMultisampleRenderTarget(pe),Be.updateRenderTargetMipmap(pe))}P.setRenderTarget(fe,Se,Re),P.setClearColor(J,ge),je!==void 0&&(V.viewport=je),P.toneMapping=He}function So(y,U,q){const V=U.isScene===!0?U.overrideMaterial:null;for(let W=0,pe=y.length;W<pe;W++){const be=y[W],{object:fe,geometry:Se,group:Re}=be;let He=be.material;He.allowOverride===!0&&V!==null&&(He=V),fe.layers.test(q.layers)&&Xd(fe,U,q,Se,He,Re)}}function Xd(y,U,q,V,W,pe){N!==null&&W.isNodeMaterial&&N.setObject(y,W),y.onBeforeRender(P,U,q,V,W,pe),y.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),W.onBeforeRender(P,U,q,V,y,pe),W.transparent===!0&&W.side===li&&W.forceSinglePass===!1?(W.side=vn,W.needsUpdate=!0,P.renderBufferDirect(q,U,V,W,y,pe),W.side=As,W.needsUpdate=!0,P.renderBufferDirect(q,U,V,W,y,pe),W.side=li):P.renderBufferDirect(q,U,V,W,y,pe),y.onAfterRender(P,U,q,V,W,pe)}function qd(y){let U=0;for(const q of y)q.texture!==null&&U++;return U}function Pr(y,U,q){U.isScene!==!0&&(U=Dn);const V=Ie.get(y),W=T.state.lights,pe=T.state.shadowsArray,be=W.state.version,fe=ee.getParameters(y,W.state,pe,U,q,T.state.lightProbeGridArray),Se=ee.getProgramCacheKey(fe);let Re=V.programs;V.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;const He=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;V.envMap=A.get(y.envMap||V.environment,He),V.envMapRotation=V.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Re===void 0&&(y.addEventListener("dispose",ft),Re=new Map,V.programs=Re,V.programVariants=new Map);let je=Re.get(Se);if(je!==void 0){if(V.currentProgram===je&&V.lightsStateVersion===be)return Kd(y,fe),je}else fe.uniforms=ee.getUniforms(y),N!==null&&y.isNodeMaterial&&N.build(y,q,fe),y.onBeforeCompile(fe,P),je=ee.acquireProgram(fe,Se),Re.set(Se,je),V.uniforms=fe.uniforms;const Ee=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ee.clippingPlanes=Q.uniform),Kd(y,fe),V.needsLights=Mp(y),V.lightsStateVersion=be,V.needsLights&&(Ee.ambientLightColor.value=W.state.ambient,Ee.lightProbe.value=W.state.probe,Ee.sunLights.value=W.state.sun,Ee.sunLightShadows.value=W.state.sunShadow,Ee.directionalLights.value=W.state.directional,Ee.directionalLightShadows.value=W.state.directionalShadow,Ee.spotLights.value=W.state.spot,Ee.spotLightShadows.value=W.state.spotShadow,Ee.rectAreaLights.value=W.state.rectArea,Ee.ltc_1.value=W.state.rectAreaLTC1,Ee.ltc_2.value=W.state.rectAreaLTC2,Ee.pointLights.value=W.state.point,Ee.pointLightShadows.value=W.state.pointShadow,Ee.hemisphereLights.value=W.state.hemi,Ee.sunShadowMatrix.value=W.state.sunShadowMatrix,Ee.sunShadowCascade.value=W.state.sunShadowCascade,Ee.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ee.spotLightMatrix.value=W.state.spotLightMatrix,Ee.spotLightMap.value=W.state.spotLightMap,Ee.pointShadowMatrix.value=W.state.pointShadowMatrix),V.numLightProbeGrids=qd(T.state.lightProbeGridArray),V.currentProgram=je,V.uniformsList=null,je}function _p(y,U,q,V,W){const pe=Ie.get(y),be=pe.currentProgram.id+","+V+","+W;let fe=pe.programVariants.get(be);return fe===void 0?(fe=Pr(y,U,q),pe.programVariants.set(be,fe)):(pe.currentProgram=fe,pe.uniformsList=null,pe.outputColorSpace=V,pe.toneMapping=W),fe}function Yd(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=aa.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Kd(y,U){const q=Ie.get(y);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function vp(y,U,q,V,W){U.isScene!==!0&&(U=Dn),Be.resetTextureUnits();const pe=U.fog,be=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,fe=ne===null?P.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:tt.workingColorSpace,Se=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Re=A.get(V.envMap||be,Se),He=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,je=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ee=!!q.morphAttributes.position,et=!!q.morphAttributes.normal,Rt=!!q.morphAttributes.color;let _t=Ci;V.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(_t=P.toneMapping);const gt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Qt=gt!==void 0?gt.length:0,Te=Ie.get(V),an=T.state.lights;if(Dt===!0&&(dn===!0||y!==te)){const bt=y===te&&V.id===Y;Q.setState(V,y,bt)}let at=!1,ps=!1;V.version===Te.__version?Te.needsLights&&Te.lightsStateVersion!==an.state.version||W.isBatchedMesh&&Te.batching===!1||!W.isBatchedMesh&&Te.batching===!0||W.isBatchedMesh&&Te.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Te.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Te.instancing===!1||!W.isInstancedMesh&&Te.instancing===!0||W.isSkinnedMesh&&Te.skinning===!1||!W.isSkinnedMesh&&Te.skinning===!0||W.isInstancedMesh&&Te.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Te.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Te.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Te.instancingMorph===!1&&W.morphTexture!==null||Te.envMap!==Re||V.fog===!0&&Te.fog!==pe||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Q.numPlanes||Te.numIntersection!==Q.numIntersection)||Te.vertexAlphas!==He||Te.vertexTangents!==je||Te.morphTargets!==Ee||Te.morphNormals!==et||Te.morphColors!==Rt||Te.morphTargetsCount!==Qt||Te.numLightProbeGrids!==qd(T.state.lightProbeGridArray)?at=!0:(Te.outputColorSpace!==fe||Te.toneMapping!==_t)&&(ps=!0):(at=!0,Te.__version=V.version);let jt=Te.currentProgram;(at===!0||ps===!0)&&(jt=ps===!0?_p(V,U,W,fe,_t):Pr(V,U,W),N&&V.isNodeMaterial&&N.onUpdateProgram(V,jt,Te));let yo=!1,Ni=!1,ms=!1;const ot=jt.getUniforms(),Xt=Te.uniforms;if(me.useProgram(jt.program)&&(yo=!0,Ni=!0,ms=!0),V.id!==Y&&(Y=V.id,Ni=!0),yo||te!==y){me.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ot.setValue(O,"projectionMatrix",y.projectionMatrix),ot.setValue(O,"viewMatrix",y.matrixWorldInverse);const zt=ot.map.cameraPosition;zt!==void 0&&zt.setValue(O,ti.setFromMatrixPosition(y.matrixWorld)),Mt.logarithmicDepthBuffer&&ot.setValue(O,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ot.setValue(O,"isOrthographic",y.isOrthographicCamera===!0),te!==y&&(te=y,Ni=!0,ms=!0)}if(Te.needsLights&&(an.state.sunShadowMap.length>0&&ot.setValue(O,"sunShadowMap",an.state.sunShadowMap,Be),an.state.directionalShadowMap.length>0&&ot.setValue(O,"directionalShadowMap",an.state.directionalShadowMap,Be),an.state.spotShadowMap.length>0&&ot.setValue(O,"spotShadowMap",an.state.spotShadowMap,Be),an.state.pointShadowMap.length>0&&ot.setValue(O,"pointShadowMap",an.state.pointShadowMap,Be)),W.isSkinnedMesh){ot.setOptional(O,W,"bindMatrix"),ot.setOptional(O,W,"bindMatrixInverse");const bt=W.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),ot.setValue(O,"boneTexture",bt.boneTexture,Be))}W.isBatchedMesh&&(ot.setOptional(O,W,"batchingTexture"),ot.setValue(O,"batchingTexture",W._matricesTexture,Be),ot.setOptional(O,W,"batchingIdTexture"),ot.setValue(O,"batchingIdTexture",W._indirectTexture,Be),ot.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&ot.setValue(O,"batchingColorTexture",W._colorsTexture,Be));const $n=q.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&j.update(W,q,jt),(Ni||Te.receiveShadow!==W.receiveShadow)&&(Te.receiveShadow=W.receiveShadow,ot.setValue(O,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(Xt.envMapIntensity.value=U.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=NM()),Ni){if(ot.setValue(O,"toneMappingExposure",P.toneMappingExposure),Te.needsLights&&xp(Xt,ms),pe&&V.fog===!0&&ae.refreshFogUniforms(Xt,pe),ae.refreshMaterialUniforms(Xt,V,Me,Le,T.state.transmissionRenderTarget[y.id]),Te.needsLights&&Te.numLightProbeGrids>0){const bt=S;let zt=0;for(const _i of T.state.lightProbeGridArray)_i.texture!==null&&(bt.textures[zt]=_i.texture,bt.min[zt]=_i.boundingBox.min,bt.max[zt]=_i.boundingBox.max,bt.resolution[zt]=_i.resolution,zt++);for(const _i in bt)bt[_i].length=zt;Xt.probesSH.value=bt.textures,Xt.probesMin.value=bt.min,Xt.probesMax.value=bt.max,Xt.probesResolution.value=bt.resolution}aa.upload(O,Yd(Te),Xt,Be)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(aa.upload(O,Yd(Te),Xt,Be),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ot.setValue(O,"center",W.center),ot.setValue(O,"modelViewMatrix",W.modelViewMatrix),ot.setValue(O,"normalMatrix",W.normalMatrix),ot.setValue(O,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){const bt=V.uniformsGroups;for(let zt=0,_i=bt.length;zt<_i;zt++){const Jd=bt[zt];Ce.update(Jd,jt),Ce.bind(Jd,jt)}}return jt}function xp(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.sunLights.needsUpdate=U,y.sunLightShadows.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function Mp(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(y,U,q){const V=Ie.get(y);V.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Ie.get(y.texture).__webglTexture=U,Ie.get(y.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){const q=Ie.get(y);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,q=0){ne=y,H=U,F=q;let V=null,W=!1,pe=!1;if(y){const fe=Ie.get(y);if(fe.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(O.FRAMEBUFFER,fe.__webglFramebuffer),ie.copy(y.viewport),Ae.copy(y.scissor),Fe=y.scissorTest,me.viewport(ie),me.scissor(Ae),me.setScissorTest(Fe),Y=-1;return}else if(fe.__webglFramebuffer===void 0)Be.setupRenderTarget(y);else if(fe.__hasExternalTextures)Be.rebindTextures(y,Ie.get(y.texture).__webglTexture,Ie.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const He=y.depthTexture;if(fe.__boundDepthTexture!==He){if(He!==null&&Ie.has(He)&&(y.width!==He.image.width||y.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(y)}}const Se=y.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(pe=!0);const Re=Ie.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?V=Re[U][q]:V=Re[U],W=!0):y.samples>0&&Be.useMultisampledRTT(y)===!1?V=Ie.get(y).__webglMultisampledFramebuffer:Array.isArray(Re)?V=Re[q]:V=Re,ie.copy(y.viewport),Ae.copy(y.scissor),Fe=y.scissorTest}else ie.copy(Ue).multiplyScalar(Me).floor(),Ae.copy(ut).multiplyScalar(Me).floor(),Fe=mt;if(q!==0&&(V=z),me.bindFramebuffer(O.FRAMEBUFFER,V)&&me.drawBuffers(y,V),me.viewport(ie),me.scissor(Ae),me.setScissorTest(Fe),W){const fe=Ie.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,fe.__webglTexture,q)}else if(pe){const fe=U;for(let Se=0;Se<y.textures.length;Se++){const Re=Ie.get(y.textures[Se]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Se,Re.__webglTexture,q,fe)}}else if(y!==null&&q!==0){const fe=Ie.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,fe.__webglTexture,q)}Y=-1};function Zd(y){const U=Ie.get(y);return(U.__readFormat!==y.format||U.__readType!==y.type)&&(U.__readFormat=y.format,U.__readType=y.type,U.__formatReadable=Mt.textureFormatReadable(y.format),U.__typeReadable=Mt.textureTypeReadable(y.type)),U}this.readRenderTargetPixels=function(y,U,q,V,W,pe,be,fe=0){if(!(y&&y.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ie.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&be!==void 0&&(Se=Se[be],Array.isArray(Se)&&(Se=Se[0])),Se){me.bindFramebuffer(O.FRAMEBUFFER,Se);try{const Re=y.textures[fe],He=Re.format,je=Re.type;y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+fe);const Ee=Zd(Re);if(Ee.__formatReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-V&&q>=0&&q<=y.height-W&&O.readPixels(U,q,V,W,oe.convert(He),oe.convert(je),pe)}finally{const Re=ne!==null?Ie.get(ne).__webglFramebuffer:null;me.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(y,U,q,V,W,pe,be,fe=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ie.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&be!==void 0&&(Se=Se[be],Array.isArray(Se)&&(Se=Se[0])),Se)if(U>=0&&U<=y.width-V&&q>=0&&q<=y.height-W){me.bindFramebuffer(O.FRAMEBUFFER,Se);const Re=y.textures[fe],He=Re.format,je=Re.type;y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+fe);const Ee=Zd(Re);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,et),O.bufferData(O.PIXEL_PACK_BUFFER,pe.byteLength,O.STREAM_READ),O.readPixels(U,q,V,W,oe.convert(He),oe.convert(je),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const Rt=ne!==null?Ie.get(ne).__webglFramebuffer:null;me.bindFramebuffer(O.FRAMEBUFFER,Rt);const _t=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await jm(O,_t,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,et),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,pe),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(et),O.deleteSync(_t),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,q=0){const V=Math.pow(2,-q),W=Math.floor(y.image.width*V),pe=Math.floor(y.image.height*V),be=U!==null?U.x:0,fe=U!==null?U.y:0;Be.setTexture2D(y,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,be,fe,W,pe),me.unbindTexture()},this.copyTextureToTexture=function(y,U,q=null,V=null,W=0,pe=0){let be,fe,Se,Re,He,je,Ee,et,Rt;const _t=y.isCompressedTexture?y.mipmaps[pe]:y.image;if(q!==null)be=q.max.x-q.min.x,fe=q.max.y-q.min.y,Se=q.isBox3?q.max.z-q.min.z:1,Re=q.min.x,He=q.min.y,je=q.isBox3?q.min.z:0;else{const ot=Math.pow(2,-W);be=Math.floor(_t.width*ot),fe=Math.floor(_t.height*ot),y.isDataArrayTexture?Se=_t.depth:y.isData3DTexture?Se=Math.floor(_t.depth*ot):Se=1,Re=0,He=0,je=0}V!==null?(Ee=V.x,et=V.y,Rt=V.z):(Ee=0,et=0,Rt=0);const gt=oe.convert(U.format),Qt=oe.convert(U.type);let Te;U.isData3DTexture?(Be.setTexture3D(U,0),Te=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Be.setTexture2DArray(U,0),Te=O.TEXTURE_2D_ARRAY):(Be.setTexture2D(U,0),Te=O.TEXTURE_2D),me.activeTexture(O.TEXTURE0),me.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),me.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),me.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);const an=me.getParameter(O.UNPACK_ROW_LENGTH),at=me.getParameter(O.UNPACK_IMAGE_HEIGHT),ps=me.getParameter(O.UNPACK_SKIP_PIXELS),jt=me.getParameter(O.UNPACK_SKIP_ROWS),yo=me.getParameter(O.UNPACK_SKIP_IMAGES);me.pixelStorei(O.UNPACK_ROW_LENGTH,_t.width),me.pixelStorei(O.UNPACK_IMAGE_HEIGHT,_t.height),me.pixelStorei(O.UNPACK_SKIP_PIXELS,Re),me.pixelStorei(O.UNPACK_SKIP_ROWS,He),me.pixelStorei(O.UNPACK_SKIP_IMAGES,je);const Ni=y.isDataArrayTexture||y.isData3DTexture,ms=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const ot=Ie.get(y),Xt=Ie.get(U),$n=Ie.get(ot.__renderTarget),bt=Ie.get(Xt.__renderTarget);me.bindFramebuffer(O.READ_FRAMEBUFFER,$n.__webglFramebuffer),me.bindFramebuffer(O.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let zt=0;zt<Se;zt++)Ni&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ie.get(y).__webglTexture,W,je+zt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ie.get(U).__webglTexture,pe,Rt+zt)),O.blitFramebuffer(Re,He,Re+be,He+fe,Ee,et,Ee+be,et+fe,O.DEPTH_BUFFER_BIT,O.NEAREST);me.bindFramebuffer(O.READ_FRAMEBUFFER,null),me.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||y.isRenderTargetTexture||Ie.has(y)){const ot=Ie.get(y),Xt=Ie.get(U);me.bindFramebuffer(O.READ_FRAMEBUFFER,C),me.bindFramebuffer(O.DRAW_FRAMEBUFFER,B);for(let $n=0;$n<Se;$n++)Ni?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ot.__webglTexture,W,je+$n):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ot.__webglTexture,W),ms?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Xt.__webglTexture,pe,Rt+$n):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Xt.__webglTexture,pe),W!==0?O.blitFramebuffer(Re,He,Re+be,He+fe,Ee,et,Ee+be,et+fe,O.COLOR_BUFFER_BIT,O.NEAREST):ms?O.copyTexSubImage3D(Te,pe,Ee,et,Rt+$n,Re,He,be,fe):O.copyTexSubImage2D(Te,pe,Ee,et,Re,He,be,fe);me.bindFramebuffer(O.READ_FRAMEBUFFER,null),me.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ms?y.isDataTexture||y.isData3DTexture?O.texSubImage3D(Te,pe,Ee,et,Rt,be,fe,Se,gt,Qt,_t.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Te,pe,Ee,et,Rt,be,fe,Se,gt,_t.data):O.texSubImage3D(Te,pe,Ee,et,Rt,be,fe,Se,gt,Qt,_t):y.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,pe,Ee,et,be,fe,gt,Qt,_t.data):y.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,pe,Ee,et,_t.width,_t.height,gt,_t.data):O.texSubImage2D(O.TEXTURE_2D,pe,Ee,et,be,fe,gt,Qt,_t);me.pixelStorei(O.UNPACK_ROW_LENGTH,an),me.pixelStorei(O.UNPACK_IMAGE_HEIGHT,at),me.pixelStorei(O.UNPACK_SKIP_PIXELS,ps),me.pixelStorei(O.UNPACK_SKIP_ROWS,jt),me.pixelStorei(O.UNPACK_SKIP_IMAGES,yo),pe===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&O.generateMipmap(Te),me.unbindTexture()},this.initRenderTarget=function(y){Ie.get(y).__webglFramebuffer===void 0&&Be.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Be.setTextureCube(y,0):y.isData3DTexture?Be.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Be.setTexture2DArray(y,0):Be.setTexture2D(y,0),me.unbindTexture()},this.resetState=function(){H=0,F=0,ne=null,me.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}let It=null,ji=null,Bc=null,xo=!1;const af={},FM={laser:.07,boom:.12,tap:.05,alert:1.5};try{xo=localStorage.getItem("spacenodes.mute")==="1"}catch{}const Pd=()=>xo;function OM(n){xo=n;try{localStorage.setItem("spacenodes.mute",n?"1":"0")}catch{}ji&&(ji.gain.value=n?0:.5)}function qa(){if(!It){const n=window.AudioContext||window.webkitAudioContext;if(!n)return;It=new n,ji=It.createGain(),ji.gain.value=xo?0:.5;const e=It.createDynamicsCompressor();ji.connect(e),e.connect(It.destination),Bc=It.createBuffer(1,It.sampleRate,It.sampleRate);const t=Bc.getChannelData(0);for(let i=0;i<t.length;i++)t[i]=Math.random()*2-1}It.state==="suspended"&&It.resume()}function Gi(n,e,t,i,s,r){const o=It.createOscillator(),a=It.createGain();o.type=n,o.frequency.setValueAtTime(e,i),o.frequency.exponentialRampToValueAtTime(Math.max(20,t),i+s),a.gain.setValueAtTime(1e-4,i),a.gain.exponentialRampToValueAtTime(r,i+.01),a.gain.exponentialRampToValueAtTime(1e-4,i+s),o.connect(a),a.connect(ji),o.start(i),o.stop(i+s+.02)}function lf(n,e,t,i,s=.8){const r=It.createBufferSource(),o=It.createBiquadFilter(),a=It.createGain();r.buffer=Bc,o.type="lowpass",o.frequency.setValueAtTime(i,n),o.frequency.exponentialRampToValueAtTime(80,n+e),o.Q.value=s,a.gain.setValueAtTime(t,n),a.gain.exponentialRampToValueAtTime(1e-4,n+e),r.connect(o),o.connect(a),a.connect(ji),r.start(n),r.stop(n+e+.02)}const Js=(n,e,t,i,s=.22)=>{const r=It.currentTime;n.forEach((o,a)=>Gi(t,o,o,r+a*e,s,i))};function jn(n,e=1){if(!It||!ji||xo||It.state!=="running")return;const t=It.currentTime;if(!((af[n]??-9)+(FM[n]??.03)>t))switch(af[n]=t,n){case"tap":Gi("triangle",660,520,t,.05,.05*e);break;case"launch":Gi("sawtooth",140,520,t,.35,.07*e),lf(t,.4,.08*e,2400);break;case"laser":Gi("square",1500+Math.random()*500,260,t,.09,.035*e);break;case"boom":lf(t,.55,.3*e,900,.5),Gi("sine",90,35,t,.45,.22*e);break;case"capture":Js([523,659,784],.08,"triangle",.12*e);break;case"lost":Js([392,311,233],.12,"sawtooth",.06*e,.3);break;case"alert":Js([880,660,880,660],.14,"square",.045*e,.12);break;case"level":Js([523,784,1047,1319],.07,"triangle",.1*e,.3);break;case"lore":Gi("sine",220,220,t,1.4,.07*e),Gi("sine",330,330,t+.25,1.4,.05*e),Gi("sine",415,415,t+.5,1.4,.04*e);break;case"win":Js([523,659,784,1047,784,1047],.12,"triangle",.12*e,.4);break;case"lose":Js([392,349,311,262],.25,"sine",.12*e,.6);break}}const la=[],Ya=[],Ea=[],kM={fx_breach:{icon:"⊘",col:"#e2604e"},fx_shaken:{icon:"≋",col:"#d9a35a"},fx_cutoff:{icon:"⊣",col:"#b39ad6"},fx_grounded:{icon:"⇣",col:"#9aa3ad"},fx_momentum:{icon:"»",col:"#7fb2dc"},fx_fort:{icon:"▲",col:"#8fc79a"},mask:{icon:"◌",col:"#b39ad6"}},zc=52*Math.PI/180,Hh=30,ei=Math.sin(zc),ao="#8f95a6",bs="#56617c",Pt="#f1ead9",Ri="#1d2335",tr="#e6dcc6",Fn="#e8bd55",Zn=n=>n.citadel?5:n.kind==="station"?3.3:[2.7,3.5,4.5][n.size],cf=(n,e=n.spec)=>{const t=Zn(n);return n.kind==="planet"?t*2.5+(e?3.6:0):n.flagship?t*2.2:t*.5+t*(n.citadel?3.4:1.5)},Ps=n=>{const e=Zn(n);return n.kind==="planet"?e*1.5:e*.5+e*.55},BM=4.2,Gc=[["#d9c7a0","#b09a74","#efe2c2"],["#93a5b3","#6c7e8e","#b9c7d0"],["#93b08c","#6d8b69","#b7ceac"],["#cc9379","#a56e58","#e3b7a2"],["#cfdcdf","#a2b5ba","#eef5f5"]],Ka={mine:"#a8835a",barracks:"#dd7a63",shield:"#bfe3ff",refinery:"#e3c565",lab:"#7fb2dc",habitat:"#93c98a",silo:"#d98a8a",fortress:"#b9a3d9",bay:"#e3c565",flagship:"#9fe0ff"};function An(n,e){if(e.owner===k||n.vis[e.id]===2)return{tier:"live",owner:e.owner,drones:e.drones};const t=n.intel[e.id];return t.snap?{tier:"stale",owner:t.snap.owner,drones:t.snap.drones}:t.seen>=1?{tier:"detected",owner:-1,drones:0}:{tier:"hidden",owner:-1,drones:0}}let Hr=null,Tn,Vi,Ms=null,Vr,ca,Hc=0,df=-1,nr,Kr,Zr,Wi=null,Vc="";const ir=new Map,sr=new Map,un=320,rr=.5;let $c=0,Wc=0;const Fl=new G,_e=(n,e=0)=>{const t=new Xe(n);return e&&t.lerp(new Xe(bs),e),new Rd({color:t,flatShading:!0})},Rn=(n,e=1)=>new Sa({color:n,transparent:e<1,opacity:e,depthWrite:e>=1});function Ti(n){n.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(s=>s.dispose()):i&&i.dispose()}),n.removeFromParent()}function Dd(n,e,t,i,s=0,r=Math.PI*2,o=1){const a=new Vt(new Ad(n,e,48,1,s,r),Rn(t,o));return a.rotation.x=-Math.PI/2,a.position.y=i,a}const ue=(n,e,t=0,i=0,s=0)=>{const r=new Vt(n,e);return r.position.set(t,i,s),r};function zM(){const n=document.getElementById("gl");Hr=new UM({canvas:n,antialias:!0}),Tn=new v0,Tn.background=new Xe("#2a3350"),Vi=new Yn(Hh,1,1,4e3),Tn.add(new O0("#fff4e0","#3d4668",1.5));const e=new z0("#fff0d8",2.2);e.position.set(-.7,1,.45),Tn.add(e);const t=[];for(let s=0;s<96;s++)t.push(new G(Math.cos(s/96*Math.PI*2),0,Math.sin(s/96*Math.PI*2)));const i=new Jt().setFromPoints(t);nr=new Cu(i,new Uc({color:Pt,transparent:!0,opacity:.55})),Kr=new Cu(i,new Uc({color:Pt,transparent:!0,opacity:.22})),Zr=Dd(1,1.1,Pt,.12),Tn.add(nr,Kr,Zr)}function GM(n){for(const h of ir.values())Ti(h.grp);for(const h of sr.values())Ti(h.grp);ir.clear(),sr.clear(),Wi&&(Ti(Wi),Wi=null,Vc="");for(const h of Tn.children.filter(f=>f.userData.world))Ti(h);let e=n.seed|0;const t=()=>{e=e+1831565813|0;let h=e;return h=Math.imul(h^h>>>15,h|1),h^=h+Math.imul(h^h>>>7,h|61),((h^h>>>14)>>>0)/4294967296},i=[];for(let h=0;h<1400;h++)i.push(t()*(n.w+1600)-800,-150-t()*500,t()*(n.h+1600)-800);const s=new Jt;s.setAttribute("position",new dt(i,3));const r=new C0(s,new bh({color:Pt,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:.8}));r.userData.world=!0,Tn.add(r);const o=["#5f7fa8","#8a6fa0","#b9786a","#5f9c94","#a88f6a"],a=document.createElement("canvas");a.width=a.height=128;const c=a.getContext("2d"),l=c.createRadialGradient(64,64,0,64,64,64);l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(.5,"rgba(255,255,255,0.45)"),l.addColorStop(1,"rgba(255,255,255,0)"),c.fillStyle=l,c.fillRect(0,0,128,128);const u=new Lu(a);for(let h=0;h<18;h++){const f=140+t()*260,m=new Vt(new Sr(f*2,f*2),new Sa({map:u,color:o[Math.floor(t()*o.length)],transparent:!0,opacity:.3,depthWrite:!1}));m.rotation.x=-Math.PI/2,m.position.set(t()*(n.w+600)-300,-220-t()*200,t()*(n.h+600)-300),m.userData.world=!0,Tn.add(m)}Vr=document.createElement("canvas"),Vr.width=Math.round((n.w+un*2)*rr),Vr.height=Math.round((n.h+un*2)*rr),ca=new Lu(Vr),ca.colorSpace=bn,Ms=new Vt(new Sr(n.w+un*2,n.h+un*2),new Sa({map:ca,transparent:!0,depthWrite:!1})),Ms.rotation.x=-Math.PI/2,Ms.position.set(n.w/2,-.2,n.h/2),Ms.userData.world=!0,Ms.renderOrder=-1,Tn.add(Ms),Hc=0}function Ht(n,e){const t=parseInt(n.slice(1),16);return`rgba(${t>>16&255},${t>>8&255},${t&255},${e})`}function Vh(n,e){const t=parseInt(n.slice(1),16),i=s=>Math.max(0,Math.min(255,Math.round(s*e)));return`rgb(${i(t>>16&255)},${i(t>>8&255)},${i(t&255)})`}const bi=(n,e)=>{let t=n*374761393+e*668265263|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296};function HM(n,e){const t=Vr.getContext("2d");t.setTransform(rr,0,0,rr,un*rr,un*rr),t.globalCompositeOperation="source-over",t.clearRect(-un,-un,n.w+un*2,n.h+un*2),t.fillStyle="rgba(86,97,128,0.8)",t.fillRect(-un,-un,n.w+un*2,n.h+un*2),t.globalCompositeOperation="destination-out";const i=n.nodes.filter(a=>a.owner===k).map(a=>({x:a.x,y:a.y,r:co(n,a)}));for(const a of n.fleets)a.owner===k&&!a.lane&&!a.missile&&i.push({x:a.x,y:a.y,r:ed(n,a)});for(const a of i){const[c,l]=a.r;let u=t.createRadialGradient(a.x,a.y,l*.8,a.x,a.y,l);u.addColorStop(0,"rgba(0,0,0,0.5)"),u.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=u,t.beginPath(),t.arc(a.x,a.y,l,0,7),t.fill(),u=t.createRadialGradient(a.x,a.y,c*.82,a.x,a.y,c),u.addColorStop(0,"rgba(0,0,0,1)"),u.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=u,t.beginPath(),t.arc(a.x,a.y,c,0,7),t.fill()}t.globalCompositeOperation="source-over";const s=n.nodes.map(a=>({n:a,k:An(n,a)})).filter(a=>a.k.tier!=="hidden"&&a.k.tier!=="detected"&&a.k.owner!==0),r=(a,c,l,u,h)=>{const f=t.createRadialGradient(a,c,0,a,c,l);f.addColorStop(0,Ht(u,h)),f.addColorStop(.55,Ht(u,h*.55)),f.addColorStop(1,Ht(u,0)),t.fillStyle=f,t.beginPath(),t.arc(a,c,l,0,7),t.fill()},o=e/1e3;for(const{n:a,k:c}of s){const l=mn(n,c.owner);for(let u=0;u<7;u++){const h=bi(a.id,u)*Math.PI*2+o*.05*(u%2?1:-1),f=6+bi(u,a.id)*20;r(a.x+Math.cos(h)*f,a.y+Math.sin(h)*f*.8,16+bi(a.id+7,u)*16,l,.13)}}for(let a=0;a<s.length;a++)for(let c=a+1;c<s.length;c++){const l=s[a],u=s[c];if(l.k.owner!==u.k.owner)continue;const h=u.n.x-l.n.x,f=u.n.y-l.n.y,m=Math.hypot(h,f);if(m>115)continue;const _=mn(n,l.k.owner),x=Math.floor(m/16);for(let d=1;d<x;d++){const p=d/x,v=Math.sin(o*.3+d+l.n.id)*4;r(l.n.x+h*p-f/m*v,l.n.y+f*p+h/m*v,15,_,.07)}}ca.needsUpdate=!0}function VM(n,e,t){const i=new _o(e,1).toNonIndexed(),[s,r,o]=Gc[n.id%Gc.length].map(h=>{const f=new Xe(h);return t&&f.lerp(new Xe(bs),t),f}),a=i.getAttribute("position"),c=[],l=.05+n.id%3*.12;for(let h=0;h<a.count;h+=3){const f=(a.getY(h)+a.getY(h+1)+a.getY(h+2))/3/e,m=f>.62?o:Math.abs(f-l)<.14||n.size>0&&Math.abs(f+.42)<.1?r:s;for(let _=0;_<3;_++)c.push(m.r,m.g,m.b)}i.setAttribute("color",new dt(c,3));const u=new Vt(i,new Rd({vertexColors:!0,flatShading:!0}));return u.rotation.z=.25,u}function Xc(n,e,t=!1){const i=new _n,s=Ka[n]||"#999",r="#4b5063";if(n==="mine")i.add(ue(new ct(1,.4,1),_e("#6f6355",e),0,.2),ue(new Bn(.55,2.1,4),_e(s,e),0,1.4),ue(new ct(.2,.2,1.4),_e(r,e),0,2.2));else if(n==="refinery")i.add(ue(new Je(.8,.9,1.5,6),_e(s,e),0,.75),ue(new Je(.28,.28,1.4,6),_e(r,e),.3,2.1),ue(new Je(.2,.2,.9,6),_e(r,e),-.35,1.9));else if(n==="lab"){if(i.add(ue(new Je(.6,.7,2.2,6),_e(s,e),0,1.1),ue(new Ei(.7,8,4,0,Math.PI*2,0,Math.PI/2),_e(Pt,e),0,2.2)),t){const o=ue(new ur(.45),Rn("#9fe0ff"),0,3.3);o.name="orb",i.add(o)}}else if(n==="habitat")i.add(ue(new Je(1.2,1.3,.35,8),_e("#6f8f68",e),0,.17)),i.add(ue(new Ei(.9,10,6,0,Math.PI*2,0,Math.PI/2),_e(Pt,e),0,.35)),i.add(ue(new Ei(.5,8,5,0,Math.PI*2,0,Math.PI/2),_e(s,e),.75,.35,.5),ue(new Ei(.45,8,5,0,Math.PI*2,0,Math.PI/2),_e(s,e),-.7,.35,-.45)),i.add(ue(new Je(.1,.1,1.4,4),_e(r,e),0,1.5));else if(n==="unused1")i.add(ue(new Je(1.1,1.1,.5,8),_e(s,e),0,.25),ue(new Ei(.95,8,4,0,Math.PI*2,0,Math.PI/2),_e(Pt,e),0,.5),ue(new ct(.5,.5,.5),_e(s,e),1.3,.25));else if(n==="barracks")i.add(ue(new ct(1.5,.9,1),_e(s,e),0,.45),ue(new Bn(.72,.6,4),_e("#b05a47",e),0,1.2)),i.children[1].rotation.y=Math.PI/4;else if(n==="silo")i.add(ue(new Je(.75,.85,1.6,8),_e("#6d7385",e),0,.8)),t?i.add(ue(new Je(.32,.32,1.6,6),_e(Pt,e),0,2.2),ue(new Bn(.34,.8,6),_e("#d2604a",e),0,3.4)):i.add(ue(new Je(.55,.55,.15,8),_e(r,e),0,1.65));else if(n==="unused2")for(const[o,a,c]of[[-.55,.4,0],[.55,.4,0],[0,1.2,0],[0,.4,.9]])i.add(ue(new ct(.95,.8,.8),_e(s,e),o,a,c));else if(n==="bay"){for(const o of[-.9,.9])i.add(ue(new ct(.22,2.2,.22),_e(s,e),o,1.1));i.add(ue(new ct(2.1,.24,.32),_e(s,e),0,2.2),ue(new ct(1.4,.1,1.4),_e(r,e),0,.05))}return i}const $h=[150,30,210,-30].map(n=>n*Math.PI/180);function uf(n,e){const t=Zn(n);if(n.spec==="bay"&&!n.flagship&&!n.citadel)return{x:-t*1.2+e*t*.85,y:t*1.25,z:t*.15,a:0};if(n.flagship)return{x:-t*1.2+(e>>1)*t*1.2,y:t*.8,z:(e%2?1:-1)*t*1.6,a:0};if(n.kind==="planet"){const s=Math.PI*(.9+.16*e);return{x:Math.cos(s)*(t*2+2.4),y:.75,z:Math.sin(s)*(t*2+2.4),a:s}}const i=$h[e%4];return{x:Math.cos(i)*t*2.3,y:t*.5+t*.55+.6,z:Math.sin(i)*t*2.3,a:i}}function Wh(n,e,t=1,i=!1){const s=new _n;if(s.add(ue(new Je(1,1.1,.35,6),_e(i?Fn:"#e6dcc6"),0,.17)),s.add(ue(new Bn(.95,2.3,7),_e(n),0,.35+1.15)),s.add(ue(new Je(.98,.98,.18,7),_e(Vh(n,.7)),0,.55)),s.add(ue(new _o(.72,0),_e(n),0,.35+2.3+.35)),e){const r=ue(new Je(.55,.42,.45,5,1,!0),_e(Fn),0,3.7);r.material.side=li,s.add(r)}return s.scale.setScalar(t),s}function Xh(n,e,t=1.9){const i=new _n,s=new Vt(new Bn(.55,2.6,4),_e(tr));return s.rotation.z=-Math.PI/2,s.scale.set(1,1,1.5),i.add(s,ue(new ct(.9,.12,2.6),_e(n),-.6),ue(new ct(.7,.7,.12),_e(n),-.9,.4)),e.forEach((r,o)=>{const a=Wh(r.c,r.cmd,.36);a.position.set(.1-o*.6,.1,o===0?0:o%2?-.6:.6),i.add(a)}),i.scale.setScalar(t),i}function $M(n,e,t,i,s){const r=new _n,o=Zn(e),a=t==="detected",c=t==="stale"?.35:0,l=a?bs:i===0?ao:mn(n,i);let u=null;const h=new Vt(new Va(o*1.05,24),Rn("#0c101e",.4));if(h.rotation.x=-Math.PI/2,h.position.y=.02,r.add(h),a){const _=e.kind==="planet"?new Vt(new _o(o,1),Rn(bs,.9)):new Vt(new Je(o,o,o*1.1,6),Rn(bs,.9));return _.position.y=Ps(e),r.add(_),{grp:r,spin:u,orb:null}}i!==0&&r.add(Dd(o*1.45,o*1.62,l,.06,0,Math.PI*2,c?.5:1));const f=n.sides[i]?Qr(n,e):0;if(e.kind==="planet"){const _=VM(e,o,c);if(_.position.y=o*1.5,r.add(_),u=_,e.size===2){const x=new Vt(new oo(o*1.55,o*.09,4,28),_e(Gc[e.id%5][2],c));x.rotation.x=Math.PI/2-.3,x.rotation.y=.2,x.position.y=o*1.5,r.add(x)}for(let x=0;x<e.lv;x++){const d=-Math.PI/2+(x-(e.lv-1)/2)*.55,p=o*1.25+1.7,v=Xc("mine",c);v.position.set(Math.cos(d)*p,0,Math.sin(d)*p*.9),r.add(v)}if(e.spec){const x=Xc(e.spec,c,e.spec==="lab"&&i===k&&mr(n,e));x.scale.setScalar(1.7),x.position.set(0,o*2.5-.35,0),r.add(x)}for(let x=0;x<f;x++){const d=uf(e,x);r.add(ue(new Je(1.5,1.5,.12,6),_e(l,c),d.x,.06,d.z))}}else WM(r,e,o,l,c,f),u=r.getObjectByName("halo")||null;for(let _=f-s;_<f;_++){const x=uf(e,_),d=Xh(l,[],1.6);d.position.set(x.x,x.y,x.z),d.rotation.y=-x.a,r.add(d)}const m=ue(new Ei(o*(e.kind==="planet"?1.75:1.7),16,10),new Rd({color:"#bfe3ff",transparent:!0,opacity:0,depthWrite:!1,flatShading:!0}),0,e.kind==="planet"?o*1.5:o*1.05);return m.name="bubble",m.renderOrder=2,r.add(m),{grp:r,spin:u,orb:r.getObjectByName("orb")||null}}function WM(n,e,t,i,s,r){const o=t*.5,a=t*1.1,c=o+a,l=(h,f=t*.9)=>{for(let m=0;m<Math.min(4,r);m++){const _=$h[m],x=t*1.3,d=ue(new ct(x,t*.14,t*.3),_e("#b8ad96",s),Math.cos(_)*(f+x/2),h,Math.sin(_)*(f+x/2));d.rotation.y=-_,n.add(d),n.add(ue(new Je(t*.5,t*.5,t*.1,6),_e(i,s),Math.cos(_)*t*2.3,h+t*.05,Math.sin(_)*t*2.3))}},u=(h,f)=>{for(let m=0;m<e.lv;m++){const _=Xc("barracks",s);_.position.set((m-(e.lv-1)/2)*1.8,h,f),n.add(_)}};if(e.flagship){const h=t*1.1,f=new _n,m=ue(new Bn(t*.8,t*2.4,4),_e(tr,s),t*2.2,0);m.rotation.z=-Math.PI/2,m.scale.set(1,1,.55),f.add(m,ue(new ct(t*3,t*.6,t*1.6),_e(tr,s),-.3*t,0)),f.add(ue(new ct(t*3.2,t*.16,t*1.7),_e(i,s),-.3*t,t*.32)),f.add(ue(new ct(t*.8,t*.9,t*.6),_e("#b8ad96",s),-t*1,t*.75),ue(new ct(t*.9,t*.22,t*.9),_e(i,s),-t*1,t*1.25));for(const _ of[-.5,0,.5])f.add(ue(new Je(t*.22,t*.28,t*.5,8),_e("#4b5063",s),-t*1.95,0,_*t),ue(new Ei(t*.2,8,6),Rn("#9fe0ff",.85),-t*2.25,0,_*t));for(const _ of[-1,1]){const x=ue(new ct(t*1.4,t*.1,t*.9),_e(i,s),-t*.6,-t*.1,_*t*1.1);x.rotation.y=_*.35,f.add(x)}f.position.y=h,f.scale.setScalar(.72),f.name="hull",n.add(f);return}if(e.citadel){n.add(ue(new Je(t,t*.92,a,6),_e("#57526f",s),0,o+a/2)),n.add(ue(new Je(t*.92,t*.35,t*.45,6),_e("#413d57",s),0,o-t*.22)),n.add(ue(new Je(t*.5,t*.68,t*.4,6),_e(i,s),0,c+t*.2)),n.add(ue(new Bn(t*.3,t*1.9,6),_e(i,s),0,c+t*1.35));const h=ue(new oo(t*1.6,t*.07,4,32),_e(i,s),0,o+a*.6);h.rotation.x=Math.PI/2,h.name="halo",n.add(h),l(o+a/2);return}if(e.spec==="bay"){const h=t*1.05;n.add(ue(new ct(t*3.6,t*.45,t*1.5),_e(tr,s),0,h)),n.add(ue(new ct(t*3.4,t*.5,t*1.1),_e("#b8ad96",s),0,h-t*.45)),n.add(ue(new ct(t*3.7,t*.06,t*.18),_e(i,s),0,h+t*.25,-t*.62),ue(new ct(t*3.7,t*.06,t*.18),_e(i,s),0,h+t*.25,t*.62));for(let m=0;m<6;m++)n.add(ue(new ct(t*.12,t*.08,t*.12),Rn("#ffe9a8"),-t*1.6+m*t*.64,h+t*.26,0));n.add(ue(new ct(t*.7,t*1,t*.4),_e(i,s),t*.9,h+t*.7,-t*.55),ue(new ct(t*.5,t*.3,t*.5),_e(Pt,s),t*.9,h+t*1.3,-t*.55));const f=ue(new oo(t*.55,t*.12,4,12,Math.PI),_e(i,s),-t*1.85,h-t*.2);f.rotation.y=Math.PI/2,n.add(f),u(h-t*.6,-t*1.1);return}if(e.spec==="silo"){const h=t*.9;n.add(ue(new Je(t*1.15,t*1.25,h,8),_e("#6d7385",s),0,o+h/2)),n.add(ue(new Je(t*1.27,t*1.27,t*.16,8),_e(i,s),0,o+h*.65)),n.add(ue(new Je(t*1,t*.4,t*.45,8),_e("#4b5063",s),0,o-t*.22));for(let f=0;f<3;f++){const m=f/3*Math.PI*2,_=Math.cos(m)*t*.55,x=Math.sin(m)*t*.55,d=o+h;n.add(ue(new Je(t*.28,t*.3,t*.7,8),_e("#4b5063",s),_,d+t*.35,x)),e.missile>0?n.add(ue(new Bn(t*.22,t*.6,8),_e("#d2604a",s),_,d+t*.95,x)):n.add(ue(new Je(t*.3,t*.3,t*.05,8),_e("#2f3446",s),_,d+t*.72,x))}l(o+h/2,t*1.1),u(o+h*.25,-t*1.35);return}if(e.spec==="fortress"){const h=t*.8;n.add(ue(new Je(t*1.45,t*1.55,h,10),_e("#8e86a3",s),0,o+h/2)),n.add(ue(new Je(t*1.2,t*.5,t*.5,10),_e("#5e5873",s),0,o-t*.25));for(let f=0;f<10;f++){const m=f/10*Math.PI*2;n.add(ue(new ct(t*.4,t*.3,t*.3),_e("#a69fb8",s),Math.cos(m)*t*1.4,o+h+t*.15,Math.sin(m)*t*1.4))}n.add(ue(new Je(t*.6,t*.7,t*1.9,6),_e(tr,s),0,o+t*.95),ue(new Bn(t*.75,t*.7,6),_e(i,s),0,o+t*2.25));for(let f=0;f<4;f++){const m=f/4*Math.PI*2+Math.PI/4,_=Math.cos(m)*t*1.5,x=Math.sin(m)*t*1.5;n.add(ue(new Je(t*.32,t*.36,t*.4,8),_e(i,s),_,o+h+t*.3,x));const d=ue(new ct(t*.6,t*.1,t*.1),_e("#4b5063",s),_+Math.cos(m)*t*.35,o+h+t*.4,x+Math.sin(m)*t*.35);d.rotation.y=-m,n.add(d)}l(o+h/2,t*1.4);return}n.add(ue(new Je(t,t*.92,a,6),_e(tr,s),0,o+a/2)),n.add(ue(new Je(t*.92,t*.35,t*.45,6),_e("#b8ad96",s),0,o-t*.22)),n.add(ue(new Je(t*.5,t*.68,t*.4,6),_e(i,s),0,c+t*.2)),(e.home||e.capital)&&n.add(ue(new Je(t*.07,t*.07,t*.9,4),_e(Pt,s),0,c+t*.8)),l(o+a/2),u(o+a*.3,-t*1.2)}function XM(n,e,t){const i=new _n,s=e.owner===0?"#d9d9d9":mn(n,e.owner);let r;if(e.missile){r=new _n;const a=ue(new Je(.3,.3,2.2,6),_e(Pt));a.rotation.z=Math.PI/2;const c=ue(new Bn(.34,.9,6),_e("#d2604a"),1.5);c.rotation.z=-Math.PI/2,r.add(a,c,ue(new ur(.5),Rn("#ffb07a",.8),-1.3)),r.scale.setScalar(1.4)}else e.lane?(r=new _n,r.add(ue(new ur(.9),Rn(s)),ue(new ur(1.4),Rn(s,.3)))):r=Xh(s,t.map(a=>({c:a===n.cmdSpec?Fn:De[n.specs[a].def].color,cmd:a===n.cmdSpec})),e.probe?1.1:1.9);r.name="model";const o=new Vt(new Va(1.6,12),Rn("#0c101e",.35));return o.rotation.x=-Math.PI/2,o.name="shadow",i.add(r,o),i}function Et(n,e,t=0){return Fl.set(n,t,e).project(Vi),{x:(Fl.x*.5+.5)*$c,y:(-Fl.y*.5+.5)*Wc}}function qh(n){return Et(n.x,n.y,Ps(n))}function ff(n,e,t,i,s,r,o,a,c){n.font=`800 ${r?13:12}px system-ui`;const l=Math.max(r?30:24,n.measureText(s).width+12),u=r?18:16,h=u+8;n.strokeStyle=Pt,n.lineWidth=2,n.lineCap="round",n.beginPath(),n.moveTo(e,t),n.lineTo(e,t-h),n.stroke();const f=Math.sin(a/420+c)*1.6,m=t-h;n.globalAlpha=o?.6:1,n.fillStyle=i,n.beginPath(),n.moveTo(e+1,m),n.lineTo(e+l,m+f),n.lineTo(e+l-5,m+u/2+f),n.lineTo(e+l,m+u+f),n.lineTo(e+1,m+u),n.closePath(),n.fill(),n.fillStyle=Vh(i,.78),n.fillRect(e+1,m+u-3,l-4,3),n.fillStyle=Ri,n.textAlign="center",n.textBaseline="middle",n.fillText(s,e+l/2-1,m+u/2-.5+f/2),n.globalAlpha=1}function Yh(n,e,t,i){switch(n.save(),n.translate(t,i),n.fillStyle=Ri,n.strokeStyle=Ri,n.lineWidth=1.6,n.lineJoin="round",n.lineCap="round",n.beginPath(),e){case"mine":n.moveTo(-6,5),n.lineTo(-1,-5),n.lineTo(2,0),n.lineTo(4,-2),n.lineTo(7,5),n.closePath(),n.fill();break;case"barracks":n.moveTo(-5,0),n.lineTo(0,-4),n.lineTo(5,0),n.moveTo(-5,5),n.lineTo(0,1),n.lineTo(5,5),n.stroke();break;case"shield":n.moveTo(0,-6),n.lineTo(5,-4),n.lineTo(4,2),n.lineTo(0,6),n.lineTo(-4,2),n.lineTo(-5,-4),n.closePath(),n.fill();break;case"refinery":n.moveTo(1,-6),n.lineTo(-4,1),n.lineTo(0,1),n.lineTo(-1,6),n.lineTo(4,-1),n.lineTo(0,-1),n.closePath(),n.fill();break;case"lab":n.moveTo(-2,-6),n.lineTo(2,-6),n.moveTo(-1.5,-6),n.lineTo(-1.5,-1),n.lineTo(-5,5),n.lineTo(5,5),n.lineTo(1.5,-1),n.lineTo(1.5,-6),n.stroke(),n.beginPath(),n.moveTo(-3.5,2.5),n.lineTo(3.5,2.5),n.lineTo(5,5),n.lineTo(-5,5),n.fill();break;case"habitat":n.arc(0,3,6,Math.PI,0),n.closePath(),n.fill(),n.beginPath(),n.moveTo(-1,3),n.lineTo(-1,-1),n.lineTo(1,-1),n.lineTo(1,3),n.fillStyle=Ka.habitat,n.fill();break;case"silo":n.moveTo(0,-7),n.lineTo(3,-2),n.lineTo(3,4),n.lineTo(5,6),n.lineTo(-5,6),n.lineTo(-3,4),n.lineTo(-3,-2),n.closePath(),n.fill();break;case"fortress":n.moveTo(-6,6),n.lineTo(-6,-5),n.lineTo(-3,-5),n.lineTo(-3,-2),n.lineTo(-1,-2),n.lineTo(-1,-5),n.lineTo(1,-5),n.lineTo(1,-2),n.lineTo(3,-2),n.lineTo(3,-5),n.lineTo(6,-5),n.lineTo(6,6),n.closePath(),n.fill();break;case"flagship":n.moveTo(7,0),n.lineTo(-3,-5),n.lineTo(-6,-5),n.lineTo(-4,0),n.lineTo(-6,5),n.lineTo(-3,5),n.closePath(),n.fill();break;case"bay":n.moveTo(6,0),n.lineTo(-4,-5),n.lineTo(-2,0),n.lineTo(-4,5),n.closePath(),n.fill();break}n.restore()}function Ko(n,e,t,i,s,r){const o=i+11;n.fillStyle=Ri,n.beginPath(),n.arc(o,s,11,0,7),n.fill(),n.strokeStyle=t,n.lineWidth=2.5,n.beginPath(),n.arc(o,s,9.5,-Math.PI/2,-Math.PI/2+Math.PI*2*Math.max(0,Math.min(1,r))),n.stroke(),n.fillStyle=t,n.font="800 11px system-ui",n.textAlign="center",n.textBaseline="middle",n.fillText(e,o,s+.5)}function Ol(n,e,t,i,s,r=!1){const o=t>0?40:22;n.fillStyle=Ka[e],n.beginPath(),n.roundRect(i,s-10,o,20,6),n.fill(),r&&(n.strokeStyle="#9fe0ff",n.lineWidth=2.5,n.beginPath(),n.roundRect(i-1.5,s-11.5,o+3,23,7),n.stroke()),Yh(n,e,i+11,s);for(let a=0;a<3&&t>0;a++)n.fillStyle=a<t?Ri:"rgba(29,35,53,0.25)",n.beginPath(),n.arc(i+25+a*5,s,2,0,7),n.fill();return o+4}function qM(n,e,t,i){Hr||zM();const{cam:s,w:r,h:o}=t,a=s.z;(df!==e.seed||!Ms)&&(GM(e),df=e.seed),($c!==r||Wc!==o)&&($c=r,Wc=o,Hr.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Hr.setSize(r,o,!1),Vi.aspect=r/o,Vi.updateProjectionMatrix());const c=o/(a*2*Math.tan(Hh*Math.PI/360));Vi.position.set(s.x,c*Math.sin(zc),s.y+c*Math.cos(zc)),Vi.lookAt(s.x,0,s.y),Vi.updateMatrixWorld(),i-Hc>350&&(Hc=i,HM(e,i)),la.length=0,Ya.length=0,Ea.length=0;for(const d of e.nodes){const p=An(e,d),v=ir.get(d.id);if(p.tier==="hidden"){v&&(Ti(v.grp),ir.delete(d.id));continue}const w=p.tier==="live",S=e.intel[d.id].snap,E=w||!S?d:{...d,...S},T=w&&e.sides[d.owner]?Math.max(0,Qr(e,d)-Lf(e,d)):0,g=d.queue[0],b=d.owner===k&&g?Math.round((1-g.left/g.total)*24):-1,L=p.tier==="detected"?[]:e.sides[E.owner]?Rf(e,E):[],P=d.owner===k&&d.spec==="lab"&&mr(e,d),R=[p.tier,p.owner,E.lv,E.sh,E.spec,E.missile,T,b,L.map(ne=>`${ne}:${on(e.specs[ne])?1:0}`).join("."),P,e.sides[E.owner]?Qr(e,E):0].join("|");if(v&&v.sig===R)continue;v&&Ti(v.grp);const N=$M(e,E,p.tier,p.owner,T),z=Zn(d);b>=0&&N.grp.add(Dd(z*1.74,z*1.9,Fn,.08,Math.PI/2,Math.max(.05,b/24*Math.PI*2)));const C=[],B=2.5,H=L.slice(0,10),F=Math.min(5,H.length);H.forEach((ne,Y)=>{const te=e.specs[ne],ie=Y%5,Ae=Y<5?F:H.length-5,Fe=(ie-(Ae-1)/2)*B,J=z*1.55+1.6+ie%2*.4+(Y>=5?2.6:0),ge=Wh(ne===e.cmdSpec?Fn:De[te.def].color,ne===e.cmdSpec,1,on(te));ge.position.set(Fe,0,J),N.grp.add(ge),C.push({spec:ne,x:Fe,z:J})}),N.grp.position.set(d.x,0,d.y),Tn.add(N.grp),ir.set(d.id,{sig:R,...N,statues:C})}const l=new Map;for(const d of e.fleets)d.fight!==void 0&&l.set(d.to,(l.get(d.to)||0)+1);for(const[d,p]of ir){const v=e.nodes[d];if(p.grp.position.set(v.x,0,v.y),v.flagship){const E=p.grp.getObjectByName("hull");E&&(v.dest&&(E.rotation.y=-Math.atan2(v.dest.y-v.y,v.dest.x-v.x)),E.position.y=Zn(v)*1.1+.3*Math.sin(i/600))}p.spin&&(p.spin.rotation.y=i/6e3),p.orb&&(p.orb.rotation.y=i/400,p.orb.position.y=3.3+.2*Math.sin(i/300));const w=e.nodes[d],S=p.grp.getObjectByName("bubble");if(S){const E=An(e,w).tier==="live"?w.shields+Xr(e,w):0,T=Math.max(1,Jr(e,w)+Xr(e,w)),g=l.has(d)&&E>.5?.18+.14*Math.abs(Math.sin(i/70+d)):0;S.material.opacity=E>.5?.06+.2*Math.min(1,E/T)+g:0,S.visible=E>.5}for(const E of p.statues){const T=Et(w.x+E.x,w.y+E.z,BM*.65);la.push({x:T.x,y:T.y,r:Math.max(12,a*1.6),spec:E.spec})}}const u=e.corridors.map(d=>`${d.a}-${d.b}-${d.owner}`).join(",");if(u!==Vc){Wi&&Ti(Wi),Wi=new _n,Vc=u;for(const d of e.corridors){const p=e.nodes[d.a],v=e.nodes[d.b],w=mn(e,d.owner),S=Math.hypot(v.x-p.x,v.y-p.y),E=new _n;E.add(ue(new Je(.35,.35,S,6,1,!0),Rn(w,.95)),ue(new Je(.9,.9,S,8,1,!0),Rn(w,.18))),E.position.set((p.x+v.x)/2,.8,(p.y+v.y)/2),E.rotation.set(0,-Math.atan2(v.y-p.y,v.x-p.x),Math.PI/2,"YXZ"),Wi.add(E)}Tn.add(Wi)}const h=new Set,f=[];for(const d of e.fleets){const p=os(e,d);if(!p)continue;f.push({f:d,seen:p}),h.add(d.id);const v=p===2?d.specs:[],w=`${d.owner}|${d.lane?1:0}|${d.missile?1:0}|${v.join(".")}`;let S=sr.get(d.id);(!S||S.sig!==w)&&(S&&Ti(S.grp),S={sig:w,grp:XM(e,d,v),statues:v.slice()},Tn.add(S.grp),sr.set(d.id,S));const E=tu(e,d),T=S.grp.getObjectByName("model"),g=S.grp.getObjectByName("shadow");S.grp.position.set(d.x,0,d.y),S.grp.rotation.y=-Math.atan2(E.y-d.y,E.x-d.x),T.position.y=d.lane?.8:d.missile?5:3.4+.25*Math.sin(i/400+d.id),d.lane&&(T.rotation.y=i/300),g.visible=!d.lane,g.position.y=.04}for(const[d,p]of sr)h.has(d)||(Ti(p.grp),sr.delete(d));const m=t.sel?.type==="node"?e.nodes[t.sel.id]:null;if(nr.visible=Kr.visible=!!m&&m.owner===k,Zr.visible=!!m,m&&(Zr.position.set(m.x,.12,m.y),Zr.scale.setScalar(Zn(m)*2.05),nr.visible)){const[d,p]=co(e,m);nr.position.set(m.x,.1,m.y),nr.scale.setScalar(d),Kr.position.set(m.x,.1,m.y),Kr.scale.setScalar(p)}Hr.render(Tn,Vi),n.clearRect(0,0,r,o),n.lineCap="round";for(const{f:d}of f){if(d.lane)continue;const p=tu(e,d),v=Et(d.x,d.y),w=Et(p.x,p.y),S=d.missile?"#d2604a":d.owner===0?"#d9d9d9":mn(e,d.owner);n.strokeStyle=Ht(S,.8),n.lineWidth=2.5,n.setLineDash([.1,9]),n.lineDashOffset=-i/50,n.beginPath(),n.moveTo(v.x,v.y),n.lineTo(w.x,w.y),n.stroke(),n.setLineDash([])}for(const d of e.nodes)if(d.owner===k)for(const p of d.queue.filter(v=>v.kind==="corridor")){const v=e.nodes[+p.id],w=Et(d.x,d.y,.8),S=Et(v.x,v.y,.8),E=p===d.queue[0]?1-p.left/p.total:0;n.strokeStyle=Ht(Pt,.4),n.lineWidth=2,n.setLineDash([4,6]),n.beginPath(),n.moveTo(w.x,w.y),n.lineTo(S.x,S.y),n.stroke(),n.setLineDash([]),n.strokeStyle=Fn,n.lineWidth=3,n.beginPath(),n.moveTo(w.x,w.y),n.lineTo(w.x+(S.x-w.x)*E,w.y+(S.y-w.y)*E),n.stroke()}if(t.targeting&&t.from>=0&&t.hover>=0&&t.hover!==t.from){const d=Et(e.nodes[t.from].x,e.nodes[t.from].y),p=Et(e.nodes[t.hover].x,e.nodes[t.hover].y);n.strokeStyle=Pt,n.lineWidth=3,n.setLineDash([.1,9]),n.beginPath(),n.moveTo(d.x,d.y),n.lineTo(p.x,p.y),n.stroke(),n.setLineDash([])}const _=e.specs[e.cmdSpec],x=e.nodes.filter(d=>An(e,d).tier!=="hidden").sort((d,p)=>d.y-p.y);for(const d of x){const p=An(e,d),v=Et(d.x,d.y,cf(d));if(v.x<-80||v.y<-40||v.x>r+80||v.y>o+160)continue;const w=Et(d.x,d.y),S=p.tier==="detected",E=p.tier==="stale",T=S?bs:p.owner===0?ao:mn(e,p.owner),g=Zn(d)*a;if(t.targeting&&d.id!==t.from&&(t.glow?t.glow.has(d.id):Oa(e,d)||d.owner===k)){const L=t.hover===d.id;n.strokeStyle=Ht(Fn,L?1:.45+.35*Math.sin(i/250)),n.lineWidth=L?5:3.5,n.shadowColor=Fn,n.shadowBlur=L?22:12,n.beginPath(),n.ellipse(w.x,w.y,g*2.3,g*2.3*ei,0,0,7),n.stroke(),n.shadowBlur=0}let b=Et(d.x,d.y+Zn(d)*1.55+3.4).y+8;if(S){const L=Et(d.x,d.y,Ps(d));n.fillStyle=Pt,n.font="800 14px system-ui",n.textAlign="center",n.textBaseline="middle",n.globalAlpha=.8,n.fillText("?",L.x,L.y),n.globalAlpha=1,b=w.y+g*1.4*ei+10}else{const L=d.home?"⌂ ":d.citadel?"✦ ":d.capital?"♛ ":"",P=p.tier==="live"?d.spec:e.intel[d.id].snap?.spec||"",R=Et(d.x,d.y,cf(d,P));ff(n,R.x,R.y+2,T,L+(E?"~":"")+p.drones,d.home||d.capital||d.citadel||!!d.flagship,E,i,d.id);const N=d.flagship?"flagship":P;N&&(n.globalAlpha=E?.65:1,n.fillStyle=Ri,n.beginPath(),n.arc(R.x-13,R.y-14,12,0,7),n.fill(),n.fillStyle=Ka[N],n.beginPath(),n.arc(R.x-13,R.y-14,10.5,0,7),n.fill(),Yh(n,N,R.x-13,R.y-14),n.globalAlpha=1);let z=w.x+g*1.7+8;const C=Et(d.x,d.y,Ps(d)).y,B=(H,F)=>{n.fillStyle=F,n.beginPath(),n.roundRect(z-8,C-8,16,16,4),n.fill(),n.fillStyle=Ri,n.font="800 11px system-ui",n.textAlign="center",n.textBaseline="middle",n.fillText(H,z,C+.5),z+=19};d.owner===k&&d.front&&B("▣","#e8a85a"),d.event&&B("!",Fn),d.offer&&d.owner!==k&&B("☺","#e9a9c9"),d.hold&&B("◷","#a9dcec"),d.owner===k&&d.prisoners.length&&B("⛓","#e6a183"),_&&_.held&&_.node===d.id&&B("★","#e2604e")}if(a>4.5&&(n.font="700 10px system-ui",n.textAlign="center",n.textBaseline="middle",n.lineJoin="round",n.strokeStyle="rgba(29,35,53,0.7)",n.lineWidth=3,n.strokeText(d.name.toUpperCase(),w.x,b),n.fillStyle=Ht(Pt,S?.45:.85),n.fillText(d.name.toUpperCase(),w.x,b),b+=17),!S&&a>3.2){const L=p.tier==="live"?d:{...d,...e.intel[d.id].snap},P=p.tier==="live",R=[],N=(B,H,F)=>Ea.push({x:B,y:b-11,w:H,h:22,node:d.id,key:F});if(p.owner!==0&&R.push({w:40,key:"lv",draw:B=>Ol(n,d.kind==="planet"?"mine":"barracks",L.lv,B,b)}),L.sh&&R.push({w:40,key:"sh",draw:B=>Ol(n,"shield",L.sh,B,b)}),L.spec&&p.owner!==0&&R.push({w:22,key:"spec",draw:B=>Ol(n,L.spec,0,B,b,L.spec==="lab"&&d.owner===k&&mr(e,d)||L.spec==="silo"&&L.missile>0)}),P){for(const H of d.buffs){const F=kM[H.k];if(!F||H.until<=e.t)continue;const ne=(H.until-e.t)/Math.max(1,H.until-(H.from??H.until-60));R.push({w:22,key:H.k,draw:Y=>Ko(n,F.icon,F.col,Y,b,Math.min(1,ne))})}const B=Jr(e,d)+Xr(e,d);e.sides[d.owner]&&d.shields<B-.5&&(d.owner===k||!pt(e,d).fx_breach)&&R.push({w:22,key:"regen",draw:H=>Ko(n,d.buffs.some(F=>F.k==="fx_breach"&&F.until>e.t)?"✕":"↻","#bfe3ff",H,b,d.shields/Math.max(1,B))}),d.owner!==k&&e.sides[d.owner]&&(e.offs.some(H=>H.staging===d.id)||d.queue.length||d.missile)&&R.push({w:22,key:"intent",draw:H=>Ko(n,e.offs.some(F=>F.staging===d.id)?"⚔":d.missile?"➹":"▲","#e8a85a",H,b,1)}),d.flagship&&R.push({w:22,key:"sail",draw:H=>Ko(n,"⛴",d.dest?"#9fe0ff":(d.anchorT||0)>e.t?"#e8bd55":"#cfd6e6",H,b,(d.sailT||0)>e.t&&!d.dest?1-(d.sailT-e.t)/260:1)})}const z=R.reduce((B,H)=>B+H.w+4,0)-4;let C=w.x-z/2;n.globalAlpha=E?.65:1;for(const B of R)B.draw(C),N(C,B.w,B.key),C+=B.w+4;n.globalAlpha=1}}for(const{f:d,seen:p}of f){if(d.missile)continue;const v=Et(d.x,d.y,d.lane?2.2:5.2),w=d.owner===0?"#d9d9d9":mn(e,d.owner);if(t.sel?.type==="fleet"&&t.sel.id===d.id){const S=Et(d.x,d.y);n.strokeStyle=Pt,n.lineWidth=2,n.beginPath(),n.ellipse(S.x,S.y,18,18*ei,0,0,7),n.stroke()}(d.drones>0||p<2)&&ff(n,v.x,v.y,w,p===2?String(d.drones):"?",!1,!1,i,d.id),p===2&&d.specs.forEach((S,E)=>{const T=v.x-10-E*16,g=v.y-12,b=S===e.cmdSpec?Fn:De[e.specs[S].def].color;n.fillStyle=b,n.beginPath(),n.arc(T,g,7.5,0,7),n.fill(),n.strokeStyle=Ri,n.lineWidth=1.5,n.stroke(),n.fillStyle=Ri,n.font="800 8px system-ui",n.textAlign="center",n.textBaseline="middle",n.fillText(S===e.cmdSpec?"★":De[e.specs[S].def].tag,T,g+.5),la.push({x:T,y:g,r:10,spec:S})})}YM(n,e,i,r,o),t.targeting&&t.edgeInfo&&t.glow&&KM(n,e,t,r,o)}const kl=new Map,Or=[],hf=new Map,pf=n=>n-Math.floor(n);function YM(n,e,t,i,s){const r=new Set;let o=!1;for(const a of e.fleets){if(a.fight===void 0||!os(e,a))continue;const c=e.nodes[a.to],l=An(e,c).tier!=="hidden",u=Et(a.x,a.y,3.4),h=Et(c.x,c.y,Ps(c)),f=a.owner===0?"#d9d9d9":mn(e,a.owner),m=c.owner===0?ao:mn(e,c.owner);if(r.add(a.id),kl.set(a.id,{x:a.x,y:a.y,node:c.id,col:f}),!(u.x>-50&&u.x<i+50&&u.y>-50&&u.y<s+50))continue;const x=Zn(c)*(h.y-Et(c.x,c.y,Ps(c)+1).y);n.save(),n.lineCap="round",n.globalCompositeOperation="lighter";const d=Math.min(7,3+Math.floor(a.drones/8));for(let p=0;p<d;p++){const v=pf(t/240+p*(1/d)+a.id*.13);if(v>.55)continue;const w=(bi(a.id,p+Math.floor(t/260))-.5)*x*1.2,S=(bi(p,a.id+Math.floor(t/260))-.5)*x*.8,E=u.x+(bi(p,a.id)-.5)*16,T=u.y+(bi(a.id,p)-.5)*8;n.strokeStyle=Ht(f,1-v*1.6),n.lineWidth=4-v*4,n.shadowColor=f,n.shadowBlur=14,n.beginPath(),n.moveTo(E,T),n.lineTo(h.x+w,h.y+S),n.stroke(),n.strokeStyle=Ht("#ffffff",.9-v*1.6),n.lineWidth=1.2,n.beginPath(),n.moveTo(E,T),n.lineTo(h.x+w,h.y+S),n.stroke(),n.fillStyle=Ht("#fff4d6",.95-v*1.6),n.beginPath(),n.arc(h.x+w,h.y+S,4+9*v,0,7),n.fill(),n.fillStyle=Ht(f,.9-v*1.6),n.beginPath(),n.arc(E,T,3,0,7),n.fill(),o=!0}if(l&&(e.sides[c.owner]||c.owner===0))for(let p=0;p<4;p++){const v=pf(t/300+p*.25+a.id*.21+.5);if(v>.5)continue;const w=p*2.1+a.id,S=h.x+Math.cos(w)*x*.9,E=h.y+Math.sin(w)*x*.5,T=u.x+(bi(p,Math.floor(t/310))-.5)*14,g=u.y+(bi(Math.floor(t/310),p)-.5)*8;n.strokeStyle=Ht(m,1-v*1.8),n.lineWidth=3.2-v*3,n.shadowColor=m,n.shadowBlur=12,n.beginPath(),n.moveTo(S,E),n.lineTo(T,g),n.stroke(),n.fillStyle=Ht(m,.9-v*1.6),n.beginPath(),n.arc(S,E,3.5,0,7),n.fill(),n.fillStyle=Ht("#ffffff",.9-v*1.6),n.beginPath(),n.arc(T,g,3+7*v,0,7),n.fill()}n.restore()}o&&jn("laser",.8);for(const[a,c]of kl)r.has(a)||(kl.delete(a),Or.push({x:c.x,y:c.y,t0:t,col:c.col,big:!1}),jn("boom",.7));for(const a of e.nodes){const c=hf.get(a.id);c!==void 0&&c!==a.owner&&An(e,a).tier==="live"&&Or.push({x:a.x,y:a.y,t0:t,col:a.owner===0?ao:mn(e,a.owner),big:!0}),hf.set(a.id,a.owner)}for(let a=Or.length-1;a>=0;a--){const c=Or[a],l=(t-c.t0)/(c.big?900:650);if(l>=1){Or.splice(a,1);continue}const u=Et(c.x,c.y,c.big?1:3.4),h=1-l,f=(c.big?46:20)*(.3+l);n.save(),n.globalCompositeOperation="lighter",n.strokeStyle=Ht(c.col,h),n.lineWidth=c.big?4:3,n.beginPath(),n.ellipse(u.x,u.y,f,f*(c.big?ei:.8),0,0,7),n.stroke(),c.big||(n.fillStyle=Ht("#ffd9a0",h*.9),n.beginPath(),n.arc(u.x,u.y,10*h+2,0,7),n.fill());for(let m=0;m<(c.big?0:7);m++){const _=m*.9+c.t0,x=f*1.3;n.fillStyle=Ht(c.col,h),n.fillRect(u.x+Math.cos(_)*x-1.5,u.y+Math.sin(_)*x*.8-1.5,3,3)}n.restore()}}function KM(n,e,t,i,s){const r=i<820?66:74,o=64,a=8,c=10,l=124,u=38,h=t.from>=0?e.nodes[t.from]:null,f=[];for(const d of t.glow){const p=e.nodes[d];if(An(e,p).tier==="hidden")continue;const v=Et(p.x,p.y,Ps(p));v.x>=r&&v.x<=i-a&&v.y>=o&&v.y<=s-c||f.push({n:p,p:v,d:h?Math.hypot(p.x-h.x,p.y-h.y):0})}f.sort((d,p)=>d.d-p.d);const m=[],_=i/2,x=s/2;for(const d of f.slice(0,9)){const p=d.p.x-_,v=d.p.y-x,w=p>0?(i-a-l/2-_)/p:p<0?(r+l/2-_)/p:1e9,S=v>0?(s-c-u/2-x)/v:v<0?(o+u/2-x)/v:1e9,E=Math.min(Math.abs(w),Math.abs(S));let T=_+p*E,g=x+v*E;const b=Math.abs(w)<Math.abs(S);for(let H=0;H<12&&m.some(F=>Math.abs(F.x-T)<l+4&&Math.abs(F.y-g)<u+4);H++){const F=(Math.floor(H/2)+1)*(H%2?-1:1);b?g=x+v*E+F*(u+6):T=_+p*E+F*(l+6)}T=Math.max(r+l/2,Math.min(i-a-l/2,T)),g=Math.max(o+u/2,Math.min(s-c-u/2,g)),m.push({x:T,y:g});const L=An(e,d.n),P=L.tier==="detected"?bs:L.owner===0?ao:mn(e,L.owner),R=t.hover===d.n.id,N=T-l/2,z=g-u/2,C=Math.atan2(v,p);n.save(),n.shadowColor=R?Fn:"rgba(0,0,0,0.5)",n.shadowBlur=R?18:8,n.fillStyle="rgba(29,35,53,0.94)",n.beginPath(),n.roundRect(N,z,l,u,10),n.fill(),n.shadowBlur=0,n.strokeStyle=R?Fn:P,n.lineWidth=R?3:2,n.stroke(),n.fillStyle=P,n.beginPath(),n.arc(N+13,z+13,5,0,7),n.fill(),n.translate(N+l-13,z+u/2),n.rotate(C),n.fillStyle=Pt,n.beginPath(),n.moveTo(7,0),n.lineTo(-4,-5),n.lineTo(-2,0),n.lineTo(-4,5),n.closePath(),n.fill(),n.restore(),n.fillStyle=Pt,n.font="800 11px system-ui",n.textAlign="left",n.textBaseline="middle";const B=d.n.name.length>13?d.n.name.slice(0,12)+"…":d.n.name;n.fillText(B,N+23,z+13),n.fillStyle=Ht(Pt,.75),n.font="700 10px system-ui",n.fillText(t.edgeInfo(d.n.id),N+9,z+28),Ya.push({x:N,y:z,w:l,h:u,node:d.n.id})}}const it=n=>(n=Math.max(0,Math.floor(n)),`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`),ye=n=>n.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),es=(n,e="")=>`<div class="bar ${e}"><i style="width:${Math.max(0,Math.min(100,n*100)).toFixed(1)}%"></i></div>`,Tt=(n,e,t={})=>`<button data-a="${n}" class="btn ${t.cls||""}" ${t.off?"disabled":""}>${e}${t.sub?`<small>${t.sub}</small>`:""}${t.off?`<small class="why">${ye(t.off)}</small>`:""}</button>`,On=n=>Math.abs(n)>=10?n.toFixed(0):n.toFixed(1);function ds(n,e,t=!1,i=!1){const s=De[e.def],r=e.id===n.cmdSpec;return`<span class="tok r${s.rarity} ${t?"big":""} ${r?"cmd":""} ${on(e)?"up":""}" data-tip="${e.id}" style="--c:${r?"#e8bd55":s.color}">${r?"★":s.tag}${i?`<i>${Di(n,e)}</i>`:""}${on(e)&&!s.hidden?"<em>+</em>":""}</span>`}const Kh=n=>`<span class="tok big r${De[n].rarity}" style="--c:${De[n].color}">${De[n].tag}<i>${De[n].pow}</i></span>`,ZM=n=>n.cmd?"Commander":De[n.def].name,Za=n=>{const e=De[n.def];return on(n)&&e.up.text?e.up.text:e.text},Ja=n=>{const e=De[n];return`<span class="grp" style="--c:${Bl[e.group].color}">${Bl[e.group].name}</span> · ${yp[e.rarity]}`};function JM(n,e){const t=De[e.def];let i=t.long;return e.cmd&&(i+=" "+Ns[e.cmd.arch].text),on(e)&&t.up.text&&(i+=` <b class="upt">Upgraded: ${t.up.text}.</b>`),i}function QM(n,e){const t=De[e.def],i=e.cmd?`Commander · ${t.name} ${Ns[e.cmd.arch].name} · level ${e.cmd.lvl}`:`${Cn(e)}${on(e)?" +":""}`,s=e.held?e.node>=0?`Prisoner at ${n.nodes[e.node].name}`:"Prisoner aboard an enemy fleet":e.node>=0?`At ${n.nodes[e.node].name}`:e.fleet>=0?`In flight to ${n.nodes[Er(n,e.fleet)?.to??0].name}`:"",r=e.owner===k?"":` · ${ye(Zt(n,e.owner))}`;let o="";t.charge&&(o+=`<p><b>Charge:</b> ${e.cd>n.t?`recharging, ${it(e.cd-n.t)}`:"ready"} <small>(recharges in ${it(Na(n,e))})</small></p>`),!e.cmd&&!t.hidden&&e.owner===k&&!on(e)&&(o+=`<p class="dim">Upgrade: ${ye(t.up.text)}. Earned in battle: ${Math.floor(e.xp)}/${X.upXp} experience.</p>${es(e.xp/X.upXp,"gold")}`),e.cmd&&e.cmd.perks.length&&(o+=`<p class="dim">${e.cmd.perks.map(c=>Af(c).name).join(" · ")}</p>`);const a=e.owner===k&&!e.cmd?` · upkeep ◆ ${On(Jc(n,e))}/min`:"";return`<div class="tiphead">${ds(n,e,!0)}<div><b>${ye(i)}</b><small>${t.hidden?t.role:Ja(e.def)} · Power ${Di(n,e)} · Command ${lo(n,e,n.mob.stage)}${a}${r}</small><small>${ye(s)}</small></div></div><p>${JM(n,e)}</p>${o}`}function jM(n){const e=n.g,t=e.sides[k],i=e.mob,s=e.specs[e.cmdSpec];let r="";if(s&&s.held&&e.cmdLostT>=0)r=`<div class="banner bad" ${s.node>=0?`data-a="focus:${s.node}"`:""}>★ COMMANDER CAPTURED${s.node>=0?` at ${ye(e.nodes[s.node].name)}`:""}. Retake it in <b>${it(Xf(e)-(e.t-e.cmdLostT))}</b></div>`;else if(n.mode)r='<div class="banner">Tap a glowing node to strike <button class="btn sm" data-a="cancelmode">Cancel</button></div>';else if(e.offs.length){const u=e.offs[0],h=e.offs.length>1?` <b>+${e.offs.length-1} more</b>`:"";r=`<div class="banner warn" ${u.warned?`data-a="focus:${u.target}"`:""}>⚠ ${ye(Zt(e,u.owner))} offensive ${u.warned?`on ${ye(e.nodes[u.target].name)} `:""}launches in ${it(u.launchT-e.t)}${h}</div>`}const o=[1,2,3,4,5].map(u=>`<i class="${u<=i.stage?"on":""}"></i>`).join(""),a=t.produce&&ud(t),c=t.produce?a?"Building Drones":"Army at the limit your income supports":"Drone production paused",l=ma(e,k);return`<div class="hudrow">
    <div class="stat" data-a="menu:run" title="Ultanium: income and upkeep per minute"><b class="ult">◆ ${Math.floor(t.ult)}</b><small class="${t.net<0?"bad":""}">${t.net>=0?"+":""}${On(t.net)}/min</small></div>
    <button class="stat prod ${t.produce?a?"on":"full":"off"}" data-a="produce" title="${c}. Tap to ${t.produce?"pause":"resume"}."><b>⬢ ${ar(e,k)}</b><small>${t.produce?a?"▶ building":"■ at limit":"⏸ paused"}</small></button>
    <div class="stat rsch" data-a="menu:research" title="Research: progress to the next choice">${t.rpm>0?`<b>⚗ ${it(Math.max(0,(l-t.rp)/t.rpm)*60)}</b>`:"<b>⚗ —</b>"}${es(t.rp/l,"blue")}</div>
    <div class="stat mob" data-a="menu:intel" title="Coalition mobilization"><span class="pips">${o}</span>${es(i.prog,"red")}${i.surge?`<small>TOTAL WAR +${i.surge}</small>`:""}</div>
    <div class="grow"></div>
    <div class="stat time"><b>${it(e.t)}</b></div>
    <button class="btn ico ${n.paused?"hot":""}" data-a="pause" title="Pause (space)">${n.paused?"▶":"❚❚"}</button>
    <button class="btn ico" data-a="speed" title="Speed">${n.speed}×</button>
    <button class="btn ico logb ${n.logOpen?"on":""}" data-a="log" title="Notifications and decisions">☰<span class="lbl">Log</span>${e.pending.filter(u=>u.kind!=="draft").length?`<b class="badge">${e.pending.filter(u=>u.kind!=="draft").length}</b>`:""}</button>
    <button class="btn ico desk" data-a="sound" title="Sound">${Pd()?"🔇":"🔊"}</button>
    <button class="btn ico desk" data-a="console" title="Tuning console">⚙</button>
    <button class="btn ico" data-a="menu:research" title="Menu (M)">⚑</button>
  </div>${r}`}function eS(n){const e=n.g;return e.specs.filter(i=>i.owner===k).sort((i,s)=>(i.cmd?-1:0)-(s.cmd?-1:0)).map(i=>{const s=i.fleet>=0?Er(e,i.fleet):null,r=i.held?"captured":s?`→ ${e.nodes[s.to].name}`:i.node>=0?e.nodes[i.node].name:"";return`<div class="rost ${i.held?"held":s?"fly":""} ${n.drag?.spec===i.id?"dragging":""}" data-spec="${i.id}" data-tip="${i.id}">${ds(e,i,!0,!0)}<small>${ye(r)}</small></div>`}).join("")}function Zh(n,e,t=""){const i=De[e.def],s=i.charge&&e.cd>n.t?` · ${it(e.cd-n.t)}`:"";return`<span class="pchip ${t}" data-tip="${e.id}">${ds(n,e,!1,!0)}<span>${ye(Za(e))}${s}</span></span>`}function Jh(n,e){return e.specs.length?`<div class="prow">${e.specs.map(t=>n.specs[t]?Zh(n,n.specs[t]):"").join("")}</div>`:""}function Qh(n,e){const t=Es(n,0,0,[],e,{});return{def:t.def,p:t.parts,max:Jr(n,e)}}function jh(n,e,t,i){const s=Qh(n,e),r=s.p.dpow+s.p.ddef+s.p.aegis;return`<div class="kv"><div><small>GARRISON</small><b>⬢ ${e.drones}</b>${i&&Ts(n,e)?`<small>keeps ${Ts(n,e)}</small>`:""}</div><div><small>SHIELD</small><b>◈ ${Math.floor(e.shields)}<i class="of">/${s.max}</i></b>${r?`<small>+${r} ${s.p.aegis?"Aegis and ":""}Power</small>`:""}</div>${t}</div>`}const mf=(n,e=3)=>`<span class="lvp">${Array.from({length:e},(t,i)=>`<i class="${i<n?"on":""}"></i>`).join("")}</span>`;function gf(n,e,t,i,s){const r=ha(e,t);if(r>=3)return`<div class="upb done"><b>${i}</b>${mf(s)}<small>${r>s?"queued":"max"}</small></div>`;const o=Xi(n,e,t);return`<button class="upb" data-a="up:${t}" ${o?"disabled":""} title="${o||""}"><b>${i}</b>${mf(s)}<small>${r>s?`+${r-s} queued · `:""}◆ ${jr(n,e,t)}</small></button>`}const tS=(n,e,t,i)=>t.kind==="lv"?`${e.kind==="planet"?"Mine":"Barracks"} ${i}`:t.kind==="sh"?`Shield ${i}`:t.kind==="spec"?nn[t.id].name:t.kind==="missile"?"Missile":`Corridor to ${n.nodes[+t.id].name}`;function nS(n,e){const t=n.g,i=t.sides[k],s=pt(t,e);let r="";const o=kn(t,e),a=Qr(t,e),c=e.kind==="planet"?`<div><small>INCOME</small><b>◆ ${On(Pf(t,e,s))}</b><small>${Gl(t,e)>e.drones?`needs ${Gl(t,e)} working`:`fleets ${o}/${a}`}</small></div>`:`<div><small>1 DRONE / ${On(fd(t,e,s))}s</small><b>▲ ${o}/${a}</b><small>${i.produce?ud(i)?"fleets ready":"army at limit":"paused"}</small></div>`;if(r+=jh(t,e,c,!0),e.queue.length){const _={lv:e.lv,sh:e.sh};r+=`<div class="queue">${e.queue.map((x,d)=>{const p=x.kind==="lv"||x.kind==="sh"?++_[x.kind]:0;return`<div class="task slim ${d?"q":""}"><div><b>${ye(tS(t,e,x,p))} <small>${d?"queued":it(x.left/(1+(s.build||0)))}</small></b>${d?"":es(1-x.left/x.total,"gold")}</div><button class="btn sm" data-a="cancel:${d}" title="Cancel and refund">✕</button></div>`}).join("")}</div>`}e.hold&&(r+=`<div class="task slim"><div><b>${ye(e.hold.name)} <small>hold ${e.hold.need}+ · ${it(e.hold.until-t.t)}</small></b>${es(1-(e.hold.until-t.t)/e.hold.total,"blue")}</div></div>`),e.event&&(r+=Tt("event",`! ${pn[e.event].name}`,{cls:"wide gold slimb"}));const l=e.queue.find(_=>_.kind==="spec");if(r+='<div class="ups">',r+=gf(t,e,"lv",e.kind==="planet"?"Mine":"Barracks",e.lv),r+=gf(t,e,"sh","Shield",e.sh),e.citadel||(r+=e.spec?`<div class="upb done" title="${ye(nn[e.spec].desc)}"><b>${nn[e.spec].name}</b><small>${e.spec==="lab"&&!mr(t,e)?'<span class="warnp">unstaffed</span>':"specialty"}</small></div>`:l?`<div class="upb done"><b>${nn[l.id].name}</b><small>queued</small></div>`:`<button class="upb ${n.pickSpec===e.id?"sel":""}" data-a="pickspec"><b>Specialty</b><small>◆ ${jr(t,e,"spec")} · choose</small></button>`),e.spec==="silo"&&(r+=e.missile?'<button class="upb hotb" data-a="missile"><b>➹ Fire</b><small>pick a target</small></button>':`<button class="upb" data-a="up:missile" ${Xi(t,e,"missile")?"disabled":""}><b>➹ Missile</b><small>◆ ${X.missileCost}</small></button>`),r+="</div>",e.flagship){const _=sd(t,e);r+=`<div class="task slim"><div><b>⛴ Flagship ${e.dest?"under way":(e.anchorT||0)>t.t?`anchoring · ${it(e.anchorT-t.t)}`:_?"anchored":"ready to sail"}</b><small>${e.dest?"cannot be targeted, cannot launch; builds Drones":_?ye(_):"drag from it onto open space"}</small></div></div>`}if(!e.spec&&!l&&n.pickSpec===e.id){r+='<div class="specpick"><small>Choose one, for good</small><div>';for(const _ in nn)if(nn[_].on===e.kind){const x=Xi(t,e,"spec",_);r+=`<button class="upb" data-a="up:spec:${_}" ${x?"disabled":""} title="${ye(x||"")}"><b>${nn[_].name} <small>◆ ${jr(t,e,"spec",_)}</small></b><small>${nn[_].desc}</small></button>`}r+="</div></div>"}const u=ad(t,e),h=zf(t,e),f=h.reduce((_,x)=>_+x.k,0);r+=`<div class="ralrow">
    <div class="seg"><button data-a="front:0" class="${e.front?"":"on"}" title="Supply: sends its spare Drones when a node rallies">Supply</button><button data-a="front:1" class="${e.front?"on":""}" title="Bastion: never sends its Drones away">Bastion</button></div>
    <button class="btn ral ${u>=0?"alarm":"hot"}" data-a="rally" ${h.length?"":"disabled"}><b>${u>=0?`Reinforce · hit in ${it(u)}`:"Rally here"}</b><small>${h.length?`⬢ ${f} from ${h.length} node${h.length>1?"s":""}`:u>=0?"none can arrive in time":"no spare Drones"}</small></button>
  </div>`;const m=fo(t,e);if(m&&(r+=`<p class="warnp small">${ye(m)}</p>`),Wl(t,e)&&(r+=`<p class="goodp small">Momentum: the next attack from here gets +${Wl(t,e)} (${it(pi(t,e,"fx_momentum").until-t.t)}).</p>`),r+=`<p class="hint">Drag onto another node to send a fleet or build a corridor${e.flagship?", or onto open space to sail":""}. Double-tap to switch Supply and Bastion.</p>`,e.prisoners.length){const _=rt(t,k);for(const x of e.prisoners){const d=t.specs[x],p=De[d.def].group==="warlord",v=t.specs.some(w=>w.owner===k&&w.def===d.def);if(d.def==="archon"){r+=`<div class="task slim"><div class="rowc">${ds(t,d,!1,!0)} <b>${ye(Cn(d))}</b><small>prisoner</small></div></div>`;continue}r+=`<div class="task slim pris"><div class="rowc">${ds(t,d,!1,!0)} <b>${ye(Cn(d))}</b><small>${p?"Warlord prisoner":"prisoner"}</small></div>${Tt(`ransom:${x}`,`Ransom ◆+${p?X.warlordRansom:Math.round(X.ransom*(1+(_.ransom||0)))}`,{cls:"sm"})+(d.def==="captain"||v?"":Tt(`recruit:${x}`,`${p?"Turn":"Recruit"} ◆ ${Wf(t,d)}`,{cls:"sm hot"}))}</div>${p?`<p class="small dim">${ye(Za(d))} · P${De[d.def].pow} C${De[d.def].cmd} · upkeep ◆${X.upkeepRarity[3]}/min</p>`:""}`}}return`${Jh(t,e)}<div class="pbody">${r}</div>`}function iS(n,e){const t=n.g,i=An(t,e),s=Ar(t,e);let r="",o="";if(i.tier==="detected"||!s.v)r+='<p class="warnp">Detected only. Its forces are unknown. Fly a fleet close, or send a probe (0 Drones, no officer) to identify it.</p>';else{const l=s.v,u=Qh(t,l);s.live||(r+=`<p class="warnp">Last seen ${it(s.age)} ago. This may be out of date.</p>`),r+=jh(t,l,`<div><small>DEFENCE</small><b>${u.def}</b><small>beat it to win</small></div>`,!1),o=Jh(t,l);const h=`${l.kind==="planet"?"Mine":"Barracks"} level ${l.lv}${l.spec?` · ${nn[l.spec].name}`:""}${l.missile?" · missile ready":""}`;r+=`<p class="dim">${h}</p>`,l.prisoners.some(m=>t.specs[m].owner===k)&&(r+=`<p class="warnp">Holding your people: ${l.prisoners.filter(m=>t.specs[m].owner===k).map(m=>ye(Cn(t.specs[m]))).join(", ")}</p>`),e.offer&&(r+='<p class="goodp">☺ Capture this to recruit 1 of 3 officers.</p>'),e.event&&(r+=`<p class="goodp">! Signal: ${pn[e.event].name}.</p>`),e.capital&&t.sides[l.owner]?.kind==="faction"&&(r+=`<p class="goodp">♛ Capital of ${ye(Zt(t,l.owner))}. Capture it: the faction collapses, its relic is yours, and its Warlord can be turned for ◆${id(t)}.</p>`);const f=t.sides[l.owner];if(f?.kind==="faction"&&f.found){const m=zn[f.fac];r+=`<p class="dim small">${ye(m.plays)} Hurts ${ye(m.hurts)} · weak to ${ye(m.weak)}.</p>`}e.dest&&(r+='<p class="warnp">Under way: it cannot be targeted until it anchors.</p>'),e.citadel&&(r+='<p class="goodp">✦ The Citadel. Capture it to win.</p>')}const a=t.nodes.filter(l=>l.owner===k&&kn(t,l)>0&&(l.specs.length||l.drones)).sort((l,u)=>Ne(l,e)-Ne(u,e)).slice(0,4);a.length?r+=`<div class="crewline stay"><small>SEND FROM · or drag from your node onto this one</small><div>${a.map(l=>`<button class="chip" data-a="from:${l.id}">${ye(l.name)} ⬢${l.drones} · ${it(Ne(l,e)/za(t,l,[]))}</button>`).join("")}</div></div>`:r+='<p class="hint">No node has a fleet ready to send here.</p>';const c=t.nodes.find(l=>l.owner===k&&!ho(t,l,e));return c&&(r+=Tt(`missilefrom:${c.id}`,"➹ Missile strike",{cls:"wide gold",sub:`From ${ye(c.name)}: wipes the shield and kills ${X.missileKill} Drones`})),`${o}<div class="pbody">${r}</div>`}function Ld(n,e){const t=n.nodes[e.from],i=Ar(n,n.nodes[e.to]).v;if(!i)return 0;const s=Math.min(t.drones,pr(n,e.specs));for(let r=1;r<=s;r++)if(Es(n,k,r,e.specs,i).win)return r;return 0}const Ta=(n,e)=>n.nodes[e.to].owner===k?n.nodes[e.from].drones:Math.min(n.nodes[e.from].drones,pr(n,e.specs));function sS(n,e){return["siege","swarm","blitz"].includes(De[e.def].group)||!!e.cmd}function ep(n,e){const t=n.nodes[e.from],i=n.nodes[e.to],s=e.lane?Ha(n,t,i,e.specs).secs:Ne(t,i)/za(n,t,e.specs),r=pr(n,e.specs);let o=`<div class="lstat"><span>⬢ <b>${e.drones}</b> go</span><span>⬢ <b>${t.drones-e.drones}</b> stay</span>${i.owner===k?"":`<span>command <b>${r}</b></span>`}<span>arrives <b>${it(s)}</b></span></div>`;if(i.owner===k)return o;if(!e.specs.length)return o+(e.drones?'<p class="badp"><b>An attack needs a officer to lead it.</b> Add one, or send 0 Drones as a probe.</p>':'<p class="warnp">Probe: identifies the target and is lost.</p>');const a=Ar(n,i);if(!a.v)return o+'<p class="badp"><b>Unknown forces. Battle outcome unavailable.</b></p>';const c=Wl(n,t),l=Es(n,k,e.drones,e.specs,a.v,{...Us(n,k,e.specs,[],"attack"),boost:c}),u=l.parts,h=[`${u.drones}⬢`,`${u.pow} Power`].concat(u.bonus?[`+${u.bonus}${c?" (Momentum)":""}`]:[]).join(" + "),f=[`${u.garr}⬢`].concat(u.shield?[`${u.shield} shield`]:[],u.dpow?[`${u.dpow} Power`]:[],u.ddef?[`+${u.ddef}`]:[],u.aegis?[`${u.aegis} Aegis`]:[]).join(" + "),m=[u.lance?`${u.lance} lost before landing`:"",u.strike?`first strike kills ${u.strike}`:"",a.live?"":`intel ${it(a.age)} old`,e.specs.includes(n.cmdSpec)?"★ Commander at risk":""].filter(Boolean).join(" · ");o+=`<div class="vs ${l.win?"win":"lose"}"><div><b>${l.atk}</b><small>${h}</small></div><i>${l.win?">":"≤"}</i><div><b>${l.def}</b><small>${f}</small></div></div>`;const _=t.drones>r&&Ld(n,e)===0&&!l.win;return o+=l.win?`<p class="goodp"><b>Victory:</b> ${l.surv} Drones survive.</p>`:`<p class="badp"><b>Defeat:</b> short by ${l.def-l.atk+1}. ${i.owner===0?"The crew returns.":"The crew is captured."}${_?" This crew cannot command enough Drones: add a officer.":""}</p>`,m&&(o+=`<p class="warnp small">${m}</p>`),o}function rS(n){const e=n.g,t=n.launch,i=e.nodes[t.from],s=e.nodes[t.to];if(i.owner!==k)return n.launch=null,"";const r=s.owner!==k,o=r?Ar(e,s).v:null,a=d=>o?Es(e,k,t.drones,d,o).atk-(Es(e,k,t.drones,d,o).parts.strike,0):d.reduce((p,v)=>p+Di(e,e.specs[v]),0),c=d=>t.specs.includes(d)?a(t.specs)-a(t.specs.filter(p=>p!==d)):a(t.specs.concat(d))-a(t.specs),l=(d,p,v)=>{const w=e.specs[d];return`<button class="chip ${p?"on":""} ${r&&sS(e,w)?"offs":""}" data-a="lspec:${d}">${ds(e,w,!1,!0)} ${ye(ZM(w))} <small class="ct">${ye(Za(w))}</small>${r&&c(d)?` <i class="gain">+${c(d)}</i>`:""}${v?' <i class="lead">LEADS</i>':""}</button>`},u=t.specs.map((d,p)=>l(d,!0,p===0&&r)).join(""),h=i.specs.filter(d=>!t.specs.includes(d)),f=h.map(d=>l(d,!1,!1)).join(""),m=t.lane?"":` ${t.specs.length}/${gr()}`,_=Ta(e,t);t.drones>_&&(t.drones=_);let x="";if(!r){const d=Nf(e,i,s);eo(e,i.id).some(v=>v.a===s.id||v.b===s.id)||(x=`<button class="btn wide corrb" data-a="lcorridor" ${d?"disabled":""}><b>⇄ Build a corridor here</b><small>${d?ye(d):`◆ ${nd(e)} · ${it(X.corridorTime/(1+(pt(e,i).build||0)))} · ${eo(e,i.id).length}/${If(e)} at ${ye(i.name)} · double speed, no launch slot`}</small></button>`)}return`<div class="phead"><div><h2>${ye(i.name)} → ${ye(s.name)}</h2><small>${t.lane?"Through corridors (quickest route)":r?`Attack · this crew commands ${pr(e,t.specs)} Drones`:"Reinforce by fleet"}</small></div><button class="btn ico" data-a="lcancel">✕</button></div>
  <div class="pbody">
    ${x}
    <div class="drow"><input type="range" id="lslider" min="0" max="${_}" value="${t.drones}"><div class="quick">${Tt("lq:none","0",{cls:"sm"})}${r&&!t.lane?Tt("lq:min","Enough",{cls:"sm"}):Tt("lq:half","½",{cls:"sm"})}${Tt("lq:all","All",{cls:"sm"})}</div></div>
    <div class="crewline" data-drop="crew"><small>GOING${m}</small><div>${u||`<span class="ph">${r?"Tap or drag a officer here to lead":"No officers travelling"}</span>`}</div></div>
    ${h.length?`<div class="crewline stay"><small>STAYING AT ${ye(i.name.toUpperCase())}</small><div>${f}</div></div>`:""}
    <div id="preview">${ep(e,t)}</div>
    <div class="row">${Tt("lcancel","Cancel")}${Tt("lconfirm",t.lane?"Send":"Launch",{cls:"hot grow"})}</div>
  </div>`}function oS(n,e){const t=n.g,i=os(t,e),s=t.nodes[e.to],r=e.missile?"missile":e.lane?"convoy":e.probe?"probe":e.fight!==void 0?"fleet · in battle":"fleet";let o=`<div class="kv"><div><small>DRONES</small><b>⬢ ${i===2?e.drones:"?"}</b></div><div><small>ARRIVES IN</small><b>${it(ka(t,e,s))}</b></div><div><small>HEADING</small><b data-a="focus:${s.id}" class="link">${ye(s.name)}</b></div></div>`;return i===2&&e.specs.length?o+=`<div class="prow wrap">${e.specs.map(a=>Zh(t,t.specs[a])).join("")}</div>`:i<2&&(o+='<p class="warnp">Strength unknown until it is inside full-intelligence range.</p>'),`<div class="phead"><div><h2><span class="dot" style="background:${mn(t,e.owner)}"></span>${ye(Zt(t,e.owner))} ${r}</h2><small>In flight</small></div><button class="btn ico" data-a="close">✕</button></div><div class="pbody">${o}</div>`}function aS(n){const e=n.g;if(n.launch)return rS(n);if(!n.sel)return"";if(n.sel.type==="fleet"){const o=Er(e,n.sel.id);return!o||!os(e,o)?(n.sel=null,""):oS(n,o)}const t=e.nodes[n.sel.id],i=An(e,t),s=`${t.citadel?"Citadel":t.kind==="planet"?["Small","Medium","Large"][t.size]+" planet":t.home?"Home station":"Station"} · ${i.tier==="detected"?"Unidentified":i.owner===0?"Neutral":ye(Zt(e,i.owner))}`;return`<div class="phead"><div><h2><span class="dot" style="background:${i.tier==="detected"?"#56617c":i.owner===0?"#8f95a6":mn(e,i.owner)}"></span>${ye(t.name)}</h2><small>${s}</small></div><button class="btn ico" data-a="close">✕</button></div>${t.owner===k?nS(n,t):iS(n,t)}`}function lS(n){const e=n.g,t=e.sides[k],i=[["research","Research"],["roster","Officers"],["relics","Relics"],["intel","Coalition"],["codex","Codex"],["log","Log"],["run","Run"]];let s="";if(n.menu==="research"){const r=ma(e,k),o=e.nodes.filter(a=>a.owner===k&&a.spec==="lab");s=`<div class="task"><div><b>Next choice</b><small>${t.rpm>0?`${On(t.rpm)} research per minute · ${it(Math.max(0,(r-t.rp)/t.rpm)*60)} to go`:"No research yet: give a planet the Lab specialty"}</small>${es(t.rp/r,"blue")}</div></div>
      <p class="dim">Each time the bar fills you choose 1 of 3 technologies. What you choose decides what can be offered next. Labs: ${o.length?o.map(a=>`<span class="link" data-a="focus:${a.id}">${ye(a.name)}${mr(e,a)?"":" (not staffed)"}</span>`).join(", "):"none"}.</p>`,s+=t.techs.length?"<h3>Researched</h3>"+t.techs.map(a=>`<div class="tech done"><b>${$t[a].name} <small>${$t[a].branch}</small></b><small>${$t[a].desc}</small></div>`).join(""):""}else if(n.menu==="roster")s=e.specs.filter(o=>o.owner===k).map(o=>`<div class="spec" data-a="${o.node>=0?`focus:${o.node}`:"noop"}">${ds(e,o,!0,!0)}<div><h4>${ye(o.cmd?`Commander · ${De[o.def].name} ${Ns[o.cmd.arch].name} · L${o.cmd.lvl}`:`${Cn(o)}${on(o)?" +":""}`)} <small>${Ja(o.def)} · Power ${Di(e,o)} · Command ${lo(e,o)}</small></h4><small>${o.held?"Prisoner":o.node>=0?"At "+ye(e.nodes[o.node].name):"In flight"}${o.cmd?"":` · upkeep ◆ ${On(Jc(e,o))}/min`}</small><p><b>${ye(Za(o))}</b></p>${o.cmd?o.cmd.lvl<5?es((o.cmd.xp-X.xpLevels[o.cmd.lvl-1])/(X.xpLevels[o.cmd.lvl]-X.xpLevels[o.cmd.lvl-1]),"gold"):"":on(o)?"":`<small class="dim">Upgrade: ${ye(De[o.def].up.text)} · ${Math.floor(o.xp)}/${X.upXp}</small>${es(o.xp/X.upXp,"gold")}`}</div></div>`).join("");else if(n.menu==="relics")s=t.relics.map(r=>`<div class="relic ${hn[r].rarity}"><b>${hn[r].name}</b><small>${hn[r].rarity}</small><p>${hn[r].desc}</p></div>`).join("")||'<p class="dim">No relics yet. Events and Warlords yield them.</p>';else if(n.menu==="intel"){const r=is[e.sides[e.archon].fac],o=e.mob;s=`<div class="fac" style="--c:#e07aa0"><b>✦ ${r.name} ${r.title}</b><p>${r.desc}</p><p>Mobilization stage ${o.stage}/5${o.surge?` · total war +${o.surge}`:""} (${Math.round(o.prog*100)}% to the next). Each stage gives every faction more Drones, larger offensives and new technology. Capturing enemy nodes sets it back; a captured Warlord removes a whole stage.</p><p>Citadel Aegis: ${Xr(e,e.nodes[e.citadel])} (${e.factions.filter(a=>!e.sides[a].broken).length} layers).</p></div>`;for(const a of e.factions){const c=e.sides[a],l=zn[c.fac],u=e.nodes.filter(h=>e.intel[h.id].snap?.owner===a||e.vis[h.id]===2&&h.owner===a);s+=c.found?`<div class="fac" style="--c:${l.color}"><b>${l.name}${c.broken?" · COLLAPSED":""}</b><p>${l.plays}</p><p>Hurts <b>${l.hurts}</b> · weak to <b>${l.weak}</b></p><p class="dim">Known nodes: ${u.length} · Officers: ${l.specs.map(h=>De[h].name).join(", ")} · Warlord: ${De[l.warlord].name} (relic: ${hn[l.relic].name})</p>${u.filter(h=>h.capital).map(h=>`<p class="link" data-a="focus:${h.id}">♛ Capital located: ${ye(h.name)}</p>`).join("")}</div>`:'<div class="fac" style="--c:#56617c"><b>Unknown faction</b><p class="dim">Its identity is revealed when you first see one of its nodes.</p></div>'}}else if(n.menu==="codex"){const r=new Set([...n.meta.codex||[],...e.lore]);s=`<p class="flavour">${Zc}</p><p class="dim">Archive fragments are recovered from events on neutral stations. Found ${r.size} of ${ss.length}; they stay found from run to run.</p>`,s+=ss.map((o,a)=>r.has(o.id)?`<div class="lore"><small>FRAGMENT ${a+1}</small><b>${ye(o.title)}</b><p>${ye(o.text)}</p></div>`:`<div class="lore locked"><small>FRAGMENT ${a+1}</small><b>Not yet recovered</b></div>`).join("")}else if(n.menu==="log")s=e.log.slice().reverse().map(r=>`<div class="logl ${r.kind}" ${r.node>=0?`data-a="focus:${r.node}"`:""}><small>${it(r.t)}</small>${ye(r.msg)}</div>`).join("");else{const r=e.stats;s=`<div class="kv"><div><small>INCOME</small><b>◆ ${On(t.inc)}</b><small>per minute</small></div><div><small>UPKEEP</small><b>◆ ${On(t.upk)}</b><small>Drones and officers</small></div><div><small>NET</small><b class="${t.net<0?"bad":""}">◆ ${On(t.net)}</b><small>per minute</small></div></div>
      <p class="dim">Each Drone costs ◆ ${X.upkeepDrone}/min; your first ${X.freeBase} are free, and each Habitat feeds ${X.habitatFree} more. Officers cost ◆ ${X.upkeepRarity.slice(0,3).join(" / ")}/min by rarity (Common / Uncommon / Rare), ◆${X.upkeepUp} more once upgraded; Warlords ◆${X.upkeepRarity[3]}. Stations stop building once upkeep reaches ${Math.round(X.armyShare*100)}% of income. If you run out of Ultanium with negative income, Drones desert.</p>
      <div class="kv"><div><small>SEED</small><b>${e.seed}</b></div><div><small>THREAT</small><b>${e.threat}</b></div><div><small>NODES</small><b>${e.nodes.filter(o=>o.owner===k).length}/${e.nodes.length}</b></div></div>
      <p class="dim">Captures ${r.captures} · Nodes lost ${r.nodesLost} · Drones lost ${r.dronesLost}. The run saves automatically to this device.</p>
      ${Tt("sound",Pd()?"🔇 Sound is off: turn on":"🔊 Sound is on: turn off",{cls:"wide"})}${Tt("help","How to play",{cls:"wide"})}${Tt("abandon","Abandon run",{cls:"wide"})}`}return`<div class="sheet"><div class="phead"><div class="tabs">${i.map(([r,o])=>`<button data-a="menu:${r}" class="${n.menu===r?"on":""}">${o}</button>`).join("")}</div><button class="btn ico" data-a="menu:">✕</button></div><div class="pbody">${s}</div></div>`}function cS(n,e,t){const i=De[e],s=n.specs.some(r=>r.owner===k&&r.def===e);return`<button class="card offer r${i.rarity}" data-a="choose:${t}" ${s?"disabled":""}>${Kh(e)}<h3>${i.name}</h3><small>${Ja(e)} · P${i.pow} C${i.cmd} · ◆${X.upkeepRarity[i.rarity]}/min</small><p class="big">${ye(i.text)}</p><p class="dim">Upgrade: ${ye(i.up.text)}</p>${s?'<small class="why">Already with you</small>':""}</button>`}function dS(n,e){return e.kind==="spec"?`☺ ${e.title}`:e.kind==="event"?`${pn[e.event].lore?"❖ Archive":"! Event"}: ${pn[e.event].name}`:e.kind==="relic"?"◆ Choose a relic":e.kind==="tech"?"⚗ Research: choose one":e.kind==="perk"?`★ ${e.title}`:e.kind==="terms"?`✦ ${e.title}`:e.title}function uS(n){const e=n.g;if(e.result){const u=e.stats,h=e.result==="win";return`<div class="modal end ${h?"win":"lose"}"><h1>${h?"Victory":"Defeat"}</h1><p>${ye(e.resultWhy)}</p>
      <div class="kv"><div><small>TIME</small><b>${it(e.t)}</b></div><div><small>CAPTURES</small><b>${u.captures}</b></div><div><small>WARLORDS</small><b>${u.warlords}</b></div></div>
      <p class="dim">Nodes lost ${u.nodesLost} · Drones built ${u.dronesMade} · Drones lost ${u.dronesLost}<br>Officers ${u.specs} · Relics ${u.relics} · Technologies ${u.techs} · Events ${u.events}</p>
      ${h&&e.threat<5?`<p class="goodp">Threat level ${e.threat+1} unlocked.</p>`:""}
      <div class="row">${Tt("title","Main menu")}${Tt("again","New run",{cls:"hot grow"})}</div></div>`}const t=e.pending.findIndex(u=>u.kind==="draft"),i=t>=0?t:n.decide,s=i>=0?e.pending[i]:null;if(!s)return"";const r=t>=0?"":'<button class="btn ico mclose" data-a="undecide" title="Close: decide later">✕</button>';let o="";if(s.kind==="draft")return o=s.opts.map((u,h)=>{const f=De[u.base],m=Ns[u.arch];return`<button class="card" data-a="choose:${h}">${Kh(u.base)}<h3>${f.name} ${m.name}</h3><small>${Ja(u.base)} · ${m.blurb}</small><p class="big">${ye(f.text)}</p><p>${m.text}</p></button>`}).join(""),`<div class="modal"><h2>Choose your Commander</h2><p class="flavour">${Zc}</p><p class="dim">Your strongest officer, free of upkeep, commanding ${X.cmdCommander} Drones and gaining levels as you capture nodes. Their archetype works everywhere. If they are captured you have ${it(X.rescueSecs)} to retake them, or the run ends.</p><div class="cards">${o}</div></div>`;if(s.kind==="spec")return o=s.opts.map((u,h)=>cS(e,u,h)).join(""),`<div class="modal">${r}<h2>${ye(s.title)}</h2><p class="dim">Take one, or none. Officers cost upkeep by rarity, lead attacks (each commands some Drones), and upgrade once through battle. The offer waits here until the node is lost.</p><div class="cards">${o}</div>${Tt("choose:-1",`Skip: ◆+${$f(e)}`,{cls:"wide"})}</div>`;if(s.kind==="relic")return o=s.opts.map((u,h)=>{const f=hn[u];return`<button class="card relic ${f.rarity}" data-a="choose:${h}"><h3>${f.name}</h3><small>${f.rarity}</small><p>${f.desc}</p></button>`}).join(""),`<div class="modal">${r}<h2>Choose a relic</h2><p class="dim">Relics last for the whole run.</p><div class="cards">${o}</div></div>`;if(s.kind==="perk"){o=s.opts.map((h,f)=>{const m=Af(h);return`<button class="card" data-a="choose:${f}"><h3>${m.name}</h3><p>${m.desc}</p></button>`}).join("");const u=e.specs[e.cmdSpec].cmd.lvl;return`<div class="modal">${r}<h2>${ye(s.title)}</h2>${u===3||u===5?'<p class="goodp">Commander Power +1.</p>':""}<div class="cards">${o}</div></div>`}if(s.kind==="terms"){const u=ar(e,k),h=[...e.factions,e.archon].reduce((f,m)=>f+ar(e,m),0);return`<div class="modal">${r}<h2>${ye(s.title)}</h2><p class="flavour">"Commander. You have made your point. The Coalition will withdraw its fleets from the Reach and recognise Haven. Name your terms."</p><p class="dim">Your Drones ⬢ ${u} against the Coalition's ⬢ ${h}.</p><div class="cards"><button class="card" data-a="choose:0"><h3>Accept: decisive victory</h3><p>The run ends as a win.</p></button><button class="card" data-a="choose:1"><h3>Refuse: fight on</h3><p>Take the Citadel by force. The offer is not repeated.</p></button></div></div>`}if(s.kind==="tech")return o=s.opts.map((u,h)=>{const f=$t[u];return`<button class="card tech${f.excl?" doc":""}" data-a="choose:${h}"><small>${f.branch} · tier ${f.tier}</small><h3>${f.name}</h3><p>${f.desc}</p>${f.excl?`<small class="why">Either this or ${$t[f.excl].name}, never both</small>`:""}</button>`}).join(""),`<div class="modal">${r}<h2>Research: choose one</h2><p class="dim">Your choice shapes what is offered next.</p><div class="cards">${o}</div></div>`;const a=pn[s.event],c=e.nodes[s.node];o=a.choices.map((u,h)=>{const f=Vf(e,c,u);if(u.req&&f&&f.startsWith("Needs your"))return`<button class="card locked" disabled><h3>${u.label}</h3><small>${ye(f)}</small></button>`;const m=[u.ult?`◆ ${u.ult}`:"",u.drones?`⬢ ${u.drones}`:""].filter(Boolean).join(" · ");return`<button class="card" data-a="choose:${h}" ${f?"disabled":""}><h3>${u.label}</h3>${m?`<small>Cost ${m}</small>`:""}<p>${u.desc}</p>${f?`<small class="why">${ye(f)}</small>`:""}</button>`}).join("");const l=a.lore?`<small class="arch">ARCHIVE FRAGMENT ${ss.findIndex(u=>u.id===a.lore)+1} OF ${ss.length}</small>`:"";return`<div class="modal ${a.lore?"lorem":""}">${r}${l}<h2>${a.name}</h2><small>${ye(c.name)} · ⬢ ${c.drones} here</small><p class="flavour">${a.text}</p><div class="cards">${o}</div>${Tt("undecide","Decide later",{cls:"wide"})}</div>`}function tp(n,e){if(e.warned||rt(n,k).warn)return!0;const t=n.nodes[e.staging];for(const i of n.nodes)if(i.owner===k){const s=pt(n,i);if(s.oracle&&Ne(i,t)<=co(n,i)[1]*s.oracle)return!0}return!1}function fS(n){const e=n.g;let t="";const i=e.pending.map((r,o)=>({p:r,i:o})).filter(r=>r.p.kind!=="draft");i.length&&(t+="<h4>Decide</h4>"+i.map(({p:r,i:o})=>`<button class="logi dec" data-a="decide:${o}">${ye(dS(e,r))}${r.node>=0&&e.nodes[r.node]?`<small>${ye(e.nodes[r.node].name)}</small>`:""}</button>`).join(""));const s=[];for(const r of e.offs){const o=tp(e,r);s.push(`<div class="logi warn" ${o?`data-a="focus:${r.target}"`:e.vis[r.staging]?`data-a="focus:${r.staging}"`:""}>⚔ ${ye(Zt(e,r.owner))} offensive${o?` → ${ye(e.nodes[r.target].name)}`:""}<small>${it(r.launchT-e.t)}</small></div>`)}for(const r of e.fleets)r.owner!==k&&!r.missile&&os(e,r)&&e.nodes[r.to]?.owner===k&&r.hunt===void 0&&s.push(`<div class="logi bad" data-a="focus:${r.to}">⬢ ${os(e,r)===2?r.drones:"?"} → ${ye(e.nodes[r.to].name)}<small>${it(ka(e,r,e.nodes[r.to]))}</small></div>`);for(const r of e.nodes)if(r.owner===k){const o=r.queue[0];o&&s.push(`<div class="logi" data-a="focus:${r.id}">▲ ${ye(r.name)}: ${o.kind==="spec"?nn[o.id].name:o.kind==="lv"?r.kind==="planet"?"Mine":"Barracks":o.kind==="sh"?"Shield":o.kind==="missile"?"Missile":"Corridor"}<small>${it(o.left/(1+(pt(e,r).build||0)))}</small></div>`);for(const a of r.buffs)a.until>e.t&&da[a.k]&&s.push(`<div class="logi" data-a="focus:${r.id}">${da[a.k].icon} ${ye(r.name)} ${da[a.k].name}<small>${it(a.until-e.t)}</small></div>`)}return s.length&&(t+="<h4>Now</h4>"+s.join("")),t+="<h4>Recent</h4>"+e.log.slice(-8).reverse().map(r=>`<div class="logi ${r.kind}" ${r.node>=0?`data-a="focus:${r.node}"`:""}>${ye(r.msg)}<small>${it(r.t)}</small></div>`).join(""),`<div class="logh"><b>Log</b><button class="btn ico sm" data-a="log">✕</button></div><div class="logb2">${t}</div>`}const da={fx_breach:{name:"Breached",icon:"⊘",col:"#e2604e",desc:"Shield is 0 and cannot recharge."},fx_shaken:{name:"Shaken",icon:"≋",col:"#d9a35a",desc:"Officers here add no Power; their effects stop."},fx_cutoff:{name:"Cut off",icon:"⊣",col:"#b39ad6",desc:"No reinforcements can land here."},fx_grounded:{name:"Grounded",icon:"⇣",col:"#9aa3ad",desc:"Cannot launch fleets."},fx_momentum:{name:"Momentum",icon:"»",col:"#7fb2dc",desc:"The next attack launched from here gets a bonus."},fx_fort:{name:"Fortified",icon:"▲",col:"#8fc79a",desc:"Extra defence after holding a battle."},mask:{name:"Unreadable",icon:"◌",col:"#b39ad6",desc:"Enemies cannot read this node."}};function np(n,e,t){const i=n.nodes[e],s=Ar(n,i).v||i,r=(c,l="")=>`<div class="tiphead"><div><b>${ye(c)}</b>${l?`<small>${ye(l)}</small>`:""}</div></div>`;if(t==="lv")return r(`${i.kind==="planet"?"Mine":"Barracks"} level ${s.lv}`,i.kind==="planet"?"Ultanium per minute, with one Drone working per level":`One Drone every ${On(fd(n,s))} s`);if(t==="sh")return r(`Shield level ${s.sh}`,`Holds ${Math.floor(s.shields)} of ${Jr(n,s)}; recharges 1 every ${On(X.shieldRegenSecs/(1+(pt(n,s).regen||0)))} s`);if(t==="spec")return r(nn[s.spec]?.name||"Specialty",nn[s.spec]?.desc||"");if(t==="regen"){const c=pi(n,i,"fx_breach");return r(c?"Shield recharge stopped":"Shield recharging",c?`Breached for ${it(c.until-n.t)}`:`+1 every ${On(X.shieldRegenSecs/(1+(pt(n,i).regen||0)))} s`)}if(t==="sail")return r(i.dest?"Under way":(i.anchorT||0)>n.t?`Anchoring · ${it(i.anchorT-n.t)}`:"Flagship",i.dest?"Cannot be targeted, cannot launch; builds Drones":sd(n,i)||"Ready to sail: drag from it onto open space");if(t==="intent"){const c=n.offs.find(u=>u.staging===i.id);if(c)return r(`Offensive forming · ${it(c.launchT-n.t)}`,tp(n,c)?`Target: ${n.nodes[c.target].name}`:"Target unknown: research, relics or an Oracle reveal it");const l=i.queue[0];if(l)return r(`Building: ${l.kind==="spec"?nn[l.id].name:l.kind==="lv"?"level":l.kind==="sh"?"shield":l.kind==="missile"?"missile":"corridor"}`,`Ready in ${it(l.left)}`);if(i.missile)return r("Missile ready","Can strike any node in range")}const o=pi(n,i,t),a=da[t];return o&&a?r(`${a.name}${t==="fx_momentum"||t==="fx_fort"?` +${o.v}`:""} · ${it(o.until-n.t)}`,a.desc):r(i.name)}function hS(n){const e=n.meta,t=Array.from({length:e.unlocked+1},(i,s)=>`<button class="chip ${n.newThreat===s?"on":""}" data-a="threat:${s}">${s}</button>`).join("");return`<div class="title"><h1>SPACE<span>NODES</span></h1><p class="tag">Recruit your officers. Send the right crew. Take the Citadel before the Coalition takes you.</p><p class="flavour small">${Zc}</p>
    ${n.hasSave?Tt("continue","Continue run",{cls:"wide hot"}):""}
    ${Tt("newrun","New run",{cls:`wide ${n.hasSave?"":"hot"}`})}
    <div class="lv"><small>THREAT LEVEL</small><div class="chips">${t}</div><small class="dim">${n.newThreat===0?"Standard campaign.":"Tougher garrisons and faster mobilization."} Win to unlock the next.</small></div>
    ${Tt("help","How to play",{cls:"wide"})}
    <small class="dim">Runs ${e.runs} · Wins ${e.wins} · Archive ${(e.codex||[]).length}/${ss.length}</small></div>`}function _f(){return`<div class="modal help"><h2>How to play</h2>
  <p><b>Goal.</b> Capture <b>The Citadel</b> ✦. You lose if your <b>Commander</b> ★ is captured and not rescued in time.</p>
  <p><b>Officers are the game.</b> Each has <b>Power</b> (adds to attack aboard a fleet, to defence where stationed), <b>Command</b> (the most Drones they can lead into an attack) and one effect that works only on their own node or fleet. A fleet carries three. Each upgrades once, after enough experience in battle: more for winning while outnumbered or against officers, and for holding valuable nodes. Captured officers lose their experience. Officers are unique; recruit offers draw Common, Uncommon and Rare cards, and Rares cost the most upkeep.</p>
  <p><b>Roster.</b> Your officers are shown down the side (it scrolls). Tap one to jump to them, hold for details, <b>pull one sideways onto a friendly node</b> to send them there.</p>
  <p><b>Sending fleets.</b> <b>Drag from one of your nodes onto any other node.</b> Targets off screen show as chips at the screen edge. Onto an enemy or neutral node it is an attack; onto your own it reinforces or <b>builds a corridor</b>. Read the outcome before you launch: attack must beat Drones + shield + defending Power. Nodes you cannot read are a gamble, and defenders can be reinforced before you land.</p>
  <p><b>Lasting effects.</b> Some officers leave a mark: <b>Breached</b> (no shield), <b>Shaken</b> (officers there do nothing), <b>Cut off</b> (no reinforcements), <b>Grounded</b> (cannot launch), <b>Momentum</b> (bonus for the next attack from there), <b>Fortified</b> (extra defence after holding). Every chip under a node can be tapped for details and timers.</p>
  <p><b>Economy.</b> Planets mine Ultanium ◆; stations build Drones ⬢. Drones and officers cost upkeep, so income sets the size of your army. The ⬢ button pauses production.</p>
  <p><b>Nodes.</b> Each has a Mine or Barracks level and a Shield level, and one <b>specialty</b>: Refinery, Lab or Habitat for planets; Fortress, Missile Silo or Flagship for stations. Jobs queue (four at a time) and are paid when queued. The <b>Flagship</b> (one per side) sails where you drag it: while sailing it cannot be targeted or launch; on arrival it anchors for ${X.anchorSecs} s, then rests ${it(X.sailCooldown)} before it may sail again, and it cannot leave while an enemy fleet is heading for it.</p>
  <p><b>Supply and Bastion.</b> Double-tap a node to make it a <b>Bastion</b>. <b>Rally</b> on a node pulls the spare Drones of every Supply node, once; Bastions keep theirs. Corridors ⇄ double travel speed and need no launch slot.</p>
  <p><b>Log.</b> Everything that needs a decision (recruits, events, archive, relics, research, perks) waits in the Log at the top right with a badge; the game never stops for it. Timers and recent news are there too.</p>
  <p><b>The Coalition.</b> Three factions from eight and an Archon. A faction's identity is revealed when you first see one of its nodes. Take its capital ♛ and it collapses: its relic is yours and its Warlord can be turned for a price. A faction beaten below a third of your strength also collapses. When the Coalition is beaten, the Archon offers terms.</p>
  <p><b>The archive.</b> Events on neutral stations are fragments of the Reach's history, each with a choice. They are kept in the Codex.</p>
  <p><b>Controls.</b> Phone: two fingers pan and zoom (one finger on empty space also pans). Desktop: move the mouse to a screen edge or use WASD to scroll, wheel to zoom, Space pauses, 1/2/3 speed, M menu, H home, Esc cancels.</p>
  ${Tt("helpclose","Got it",{cls:"wide hot"})}</div>`}nm();const fr="spacenodes.save.v6",Qa="spacenodes.meta.v1",fs=n=>document.getElementById(n),xn=fs("map"),ua=xn.getContext("2d"),or=document.createElement("div");or.id="log";document.body.appendChild(or);const vf=fs("hud"),ts=fs("roster"),Zo=fs("panel"),Jo=fs("overlay"),xf=fs("toasts"),Jn=fs("tip"),$r=fs("ghost"),ui={get:n=>{try{return localStorage.getItem(n)}catch{return null}},set:(n,e)=>{try{localStorage.setItem(n,e)}catch{}},del:n=>{try{localStorage.removeItem(n)}catch{}}},I={g:null,speed:1,paused:!1,sel:null,menu:null,mode:null,launch:null,drag:null,pickSpec:-1,screen:"title",newThreat:0,meta:{runs:0,wins:0,unlocked:0,best:0,codex:[],...JSON.parse(ui.get(Qa)||"{}")},hasSave:!!ui.get(fr),decide:-1,logOpen:!1},ze={x:100,y:150,z:7};let si=null,Aa=0,Hn=0,hi=0,ip=-1,St=!0,Wr=0,Ra=!1,Mf="title",qc=!1;const wi=[];window.__app=I;window.__nodeScreen=n=>qh(I.g.nodes[n]);window.__chips=Ya;window.__nodeChips=Ea;window.__exec=n=>Zf(I.g,n);window.__focus=n=>Mo("node",n);window.__advance=n=>{for(let e=0;e<n*10;e++)Kf(I.g);St=!0};const pS=rm({game:()=>I.g,selected:()=>I.sel?.type==="node"?I.sel.id:-1,setSpeed:n=>{I.speed=n,St=!0},refresh:()=>{St=!0}});function Sf(n){I.g=n,I.screen="game",I.sel=null,I.menu=null,I.mode=null,I.launch=null,I.drag=null,I.paused=!1,I.speed=1,I.decide=-1,I.logOpen=Hn>=820,Aa=n.pending.length;const e=n.nodes[n.home];ze.x=e.x+8,ze.y=e.y,ze.z=Math.max(6.5,Math.min(9,Hn/52)),Wr=n.log.length,wi.length=0,St=!0,qc=!1}function Id(){I.g&&!I.g.result&&I.screen==="game"&&(ui.set(fr,JSON.stringify(I.g)),I.hasSave=!0)}function mS(){const n=I.g;ui.del(fr),I.hasSave=!1,I.meta.runs++,n.result==="win"&&(I.meta.wins++,I.meta.unlocked=Math.min(5,Math.max(I.meta.unlocked,n.threat+1))),ui.set(Qa,JSON.stringify(I.meta))}function Ki(n){n&&(wi.push({msg:n,kind:"warn",node:-1,until:performance.now()+3500}),St=!0)}function qt(n){const e=Zf(I.g,n);return Ki(e),St=!0,!e}function Nd(n){const e=I.g.nodes[n],t=Hn<820,i=!!I.sel||!!I.launch;si={x:e.x+(!t&&i?190/ze.z:0),y:e.y+(t&&i?hi*.22/(ze.z*ei):0)}}function Mo(n,e){I.sel={type:n,id:e},I.launch=null,I.pickSpec=-1,St=!0,n==="node"&&Nd(e)}function sp(n,e,t){const i=I.g,s=i.nodes[n],r=i.nodes[e];if(s.owner!==k)return Ki("Not your node");if(n===e)return Ki("Pick a different node");t&&(t=Ha(i,s,r).via==="corridor");const o=r.owner===k;if(!t&&!o){if(!Oa(i,r))return Ki("Target is not in detection range");if(kn(i,s)<1)return Ki(`${s.name} has no fleet ready: its launch slots are all away`)}const a={from:n,to:e,drones:0,specs:[],lane:t},c=Math.max(0,s.drones-Ts(i,s));if(r.owner===k)a.drones=c;else{a.specs=Rf(i,s).filter(u=>u!==i.cmdSpec).slice(0,gr());const l=Ld(i,a);a.drones=Math.min(Ta(i,a),l?l+1:c)}I.launch=a,I.mode=null,I.sel={type:"node",id:e},St=!0,Nd(e)}function Ca(n){const[e,...t]=n.split(":"),i=I.g,s=I.sel?.type==="node"?I.sel.id:-1,r=o=>{I.mode={k:o,from:s},I.sel=null,I.launch=null,I.pickSpec=-1};switch(e){case"newrun":case"again":Sf(cm(Date.now()%2147483647|0,I.newThreat,I.meta.codex||[]));break;case"continue":{const o=ui.get(fr);if(o)try{const a=JSON.parse(o);Fs(a),Sf(a)}catch{ui.del(fr),I.hasSave=!1}break}case"title":I.screen="title",I.g=null;break;case"threat":I.newThreat=+t[0];break;case"help":Mf=I.screen,I.screen="help",I.menu=null;break;case"helpclose":I.screen=Mf;break;case"abandon":confirm("Abandon this run?")&&(ui.del(fr),I.hasSave=!1,I.meta.runs++,ui.set(Qa,JSON.stringify(I.meta)),I.screen="title",I.g=null);break;case"pause":I.paused=!I.paused,I.paused&&Id();break;case"speed":I.speed=I.speed===1?2:I.speed===2?4:1;break;case"console":pS.toggle();break;case"menu":I.menu=t[0]||null;break;case"close":I.sel=null,I.launch=null;break;case"focus":I.menu=null,Hn<820&&(I.logOpen=!1),Mo("node",+t[0]);break;case"cancelmode":I.mode=null;break;case"up":qt({c:"up",node:s,what:t[0],id:t[1]});break;case"cancel":qt({c:"cancel",node:s,idx:+(t[0]||0)});break;case"sound":OM(!Pd()),qa(),jn("tap");break;case"event":qt({c:"event",node:s});break;case"ransom":qt({c:"ransom",spec:+t[0],recruit:!1});break;case"recruit":qt({c:"ransom",spec:+t[0],recruit:!0});break;case"choose":{const o=i.pending.findIndex(c=>c.kind==="draft"),a=o>=0?o:I.decide;a>=0&&qt({c:"choose",idx:+t[0],which:a})&&(I.decide=-1,Aa=i.pending.length);break}case"decide":I.decide=+t[0],I.menu=null;{const o=i.pending[I.decide];o&&o.node>=0&&i.nodes[o.node]&&Nd(o.node)}break;case"undecide":I.decide=-1;break;case"log":I.logOpen=!I.logOpen;break;case"produce":qt({c:"produce"});break;case"rally":qt({c:"rally",node:s});break;case"front":i.nodes[s].front!==(t[0]==="1")&&qt({c:"front",node:s});break;case"pickspec":I.pickSpec=I.pickSpec===s?-1:s;break;case"missile":r("missile");break;case"noop":break;case"missilefrom":qt({c:"missile",from:+t[0],to:s});break;case"lspec":{const o=I.launch,a=+t[0];o.specs.includes(a)?o.specs=o.specs.filter(c=>c!==a):o.lane||o.specs.length<gr(i,i.nodes[o.from])?o.specs=o.specs.concat(a):Ki("The crew is full"),o.drones=Math.min(o.drones,Ta(i,o));break}case"lq":{const o=I.launch,a=i.nodes[o.from].drones,c=Math.min(a,Ta(i,o));o.drones=t[0]==="all"?c:t[0]==="half"?Math.ceil(c/2):t[0]==="none"?0:Ld(i,o)||c;break}case"lcancel":I.launch=null;break;case"lcorridor":{const o=I.launch;qt({c:"corridor",from:o.from,to:o.to})&&(I.launch=null,I.sel={type:"node",id:o.from},jn("tap"));break}case"lconfirm":{const o=I.launch;qt(o.lane?{c:"convoy",from:o.from,to:o.to,drones:o.drones,specs:o.specs}:{c:"launch",from:o.from,to:o.to,drones:o.drones,specs:o.specs})&&(I.launch=null,I.sel=null,jn("launch"));break}}St=!0}document.addEventListener("click",n=>{const e=n.target;if(Ds){Ds=!1;return}e.closest("#tip")||Is();const t=e.closest("[data-a]");!t||t.disabled||t instanceof HTMLInputElement&&t.type!=="checkbox"||Ca(t.dataset.a)});document.addEventListener("input",n=>{const e=n.target;if(e.id==="lslider"&&I.launch&&I.g){I.launch.drones=+e.value;const t=document.getElementById("preview");t&&(t.innerHTML=ep(I.g,I.launch))}});document.addEventListener("pointerdown",n=>{n.target.id==="lslider"&&(Ra=!0)});document.addEventListener("pointerup",()=>{Ra&&(Ra=!1,St=!0)});const ri=new Set;document.addEventListener("keyup",n=>ri.delete(n.key.toLowerCase()));document.addEventListener("keydown",n=>{qa(),!(I.screen!=="game"||!I.g)&&(ri.add(n.key.toLowerCase()),n.key===" "?(n.preventDefault(),Ca("pause")):n.key==="1"?(I.speed=1,St=!0):n.key==="2"?(I.speed=2,St=!0):n.key==="3"?(I.speed=4,St=!0):n.key==="m"||n.key==="M"?Ca(I.menu?"menu:":"menu:research"):n.key==="h"||n.key==="H"?Mo("node",(I.g.nodes.find(e=>e.owner===k&&e.home)||I.g.nodes.find(e=>e.owner===k)||I.g.nodes[0]).id):n.key==="Escape"&&(I.decide>=0?I.decide=-1:I.mode?I.mode=null:I.launch?I.launch=null:I.menu?I.menu=null:I.sel=null,St=!0))});document.addEventListener("visibilitychange",()=>{document.hidden&&Id()});const rp=260;let br=-1,Ds=!1,Ls=0,Pa=!1;function ja(n,e,t){if(!I.g||!I.g.specs[n])return;br!==n&&(Jn.innerHTML=QM(I.g,I.g.specs[n]),br=n),Jn.className="open";const i=Jn.getBoundingClientRect();Jn.style.left=`${Math.max(8,Math.min(Hn-i.width-8,e-i.width/2))}px`,Jn.style.top=`${t-i.height-18<60?Math.min(hi-i.height-8,t+26):t-i.height-18}px`}function Is(){br!==-1&&(Jn.className="",br=-1)}function op(n,e,t,i){br!==i&&(Jn.innerHTML=n,br=i),Jn.className="open";const s=Jn.getBoundingClientRect();Jn.style.left=`${Math.max(8,Math.min(Hn-s.width-8,e-s.width/2))}px`,Jn.style.top=`${t-s.height-14<60?Math.min(hi-s.height-8,t+18):t-s.height-14}px`}function ap(n,e){return Ea.find(t=>n>=t.x&&n<=t.x+t.w&&e>=t.y&&e<=t.y+t.h)||null}const Ud=n=>n instanceof HTMLElement?n.closest("[data-tip]"):null;document.addEventListener("pointerover",n=>{if(n.pointerType!=="mouse"||n.target===xn||wn||Yt)return;const e=Ud(n.target);if(e){const t=e.getBoundingClientRect();ja(+e.dataset.tip,t.left+t.width/2,t.top)}else Is()});document.addEventListener("pointerdown",n=>{if(clearTimeout(Ls),qa(),n.pointerType==="mouse"||n.target===xn)return;const e=Ud(n.target),t=n.clientX,i=n.clientY;if(fn.x=t,fn.y=i,!e)return;const s=+e.dataset.tip,r=e.getBoundingClientRect();Pa=!0,Ls=window.setTimeout(()=>{I.drag||Math.hypot(fn.x-t,fn.y-i)>=10||(ja(s,r.left+r.width/2,r.top),Ds=!0,navigator.vibrate&&navigator.vibrate(12))},rp)});const lp=()=>{Pa&&(Pa=!1,St=!0)};document.addEventListener("pointerup",lp);document.addEventListener("pointercancel",lp);const fn={x:0,y:0};let Fd=!1,cp=!1;document.addEventListener("pointermove",n=>{fn.x=n.clientX,fn.y=n.clientY,Fd=n.pointerType==="mouse",cp=n.target===xn});document.documentElement.addEventListener("mouseleave",()=>{Fd=!1});document.addEventListener("pointerup",()=>clearTimeout(Ls));document.addEventListener("pointercancel",()=>clearTimeout(Ls));document.addEventListener("contextmenu",n=>{Ud(n.target)&&n.preventDefault()});function dp(n,e){let t=null,i=1e9;for(const s of la){const r=Math.hypot(s.x-n,s.y-e);r<s.r+6&&r<i&&(i=r,t=s)}return t}let wn=null;ts.addEventListener("pointerdown",n=>{const e=n.target.closest(".rost");!e||!I.g||(wn={spec:+e.dataset.spec,x:n.clientX,y:n.clientY,id:n.pointerId,mouse:n.pointerType==="mouse"})});ts.addEventListener("pointermove",n=>{if(!wn||!I.g)return;const e=I.g,t=e.specs[wn.spec],i=n.clientX-wn.x,s=n.clientY-wn.y;if(!I.drag&&Math.hypot(i,s)>10){if(!wn.mouse&&Math.abs(s)>Math.abs(i)){wn=null,clearTimeout(Ls);return}I.drag={spec:t.id,x:n.clientX,y:n.clientY,over:-1,label:"",ok:!1};try{ts.setPointerCapture(n.pointerId)}catch{}Is(),clearTimeout(Ls),St=!0}if(!I.drag)return;const r=I.drag;r.x=n.clientX,r.y=n.clientY;const o=document.elementFromPoint(n.clientX,n.clientY),a=el(n.clientX,n.clientY),c=a>=0?{type:"node",id:a}:o===xn?wr(n.clientX,n.clientY):null;if(r.over=c&&c.type==="node"?c.id:-1,r.ok=!1,o?.closest('[data-drop="crew"]')&&I.launch)r.ok=e.nodes[I.launch.from].specs.includes(t.id),r.label=r.ok?"Add to the crew":`Not at ${e.nodes[I.launch.from].name}`;else if(r.over>=0){const l=e.nodes[r.over],u=rd(e,t,l);r.ok=!!u.via,r.label=u.via?`${l.name} · ${it(u.secs)} ${u.via==="corridor"?"via corridor":"by fleet"}`:u.why}else r.label=t.held?"They are a prisoner":t.node<0?"Already travelling":"Drop on one of your nodes";$r.className=`open ${r.ok?"ok":""}`,$r.style.left=`${r.x}px`,$r.style.top=`${r.y}px`,$r.innerHTML=`${ds(e,t,!0,!0)}<span>${r.label.replace(/</g,"&lt;")}</span>`});const up=n=>{if(!wn||!I.g)return;if(n.type==="pointercancel"&&!I.drag){wn=null;return}const e=I.g,t=e.specs[wn.spec],i=I.drag;if(wn=null,I.drag=null,$r.className="",clearTimeout(Ls),i&&(Is(),Ds=!1),i)document.elementFromPoint(n.clientX,n.clientY)?.closest('[data-drop="crew"]')&&I.launch?i.ok&&!I.launch.specs.includes(t.id)&&Ca(`lspec:${t.id}`):i.over>=0&&i.ok&&el(n.clientX,n.clientY)>=0?qt({c:"move",spec:t.id,to:i.over}):i.over>=0&&i.ok?qt({c:"move",spec:t.id,to:i.over}):i.over>=0&&Ki(i.label);else if(!Ds){const s=t.node>=0?t.node:e.fleets.find(r=>r.id===t.fleet)?.to??-1;s>=0&&Mo("node",s)}St=!0};ts.addEventListener("pointerup",up);ts.addEventListener("pointercancel",up);let ns=-1,Yt=null;const cn=new Map;let Zi=null,ws=!1,hr=0,Yc=!1,Da=0;const Kc=(n,e)=>({x:(n-Hn/2)/ze.z+ze.x,y:(e-hi/2)/(ze.z*ei)+ze.y}),ai={x:0,y:0};function wr(n,e){const t=I.g;for(const r of t.fleets){if(!os(t,r))continue;const o=Et(r.x,r.y,3);if(Math.hypot(o.x-n,o.y-e)<24)return{type:"fleet",id:r.id}}let i=-1,s=1e9;for(const r of t.nodes){if(An(t,r).tier==="hidden")continue;const o=qh(r),a=Math.hypot(o.x-n,o.y-e);a<Math.max(30,Zn(r)*ze.z*2.3)&&a<s&&(s=a,i=r.id)}return i>=0?{type:"node",id:i}:null}function el(n,e){for(const t of Ya)if(n>=t.x&&n<=t.x+t.w&&e>=t.y&&e<=t.y+t.h)return t.node;return-1}let Qo={id:-1,t:0};function gS(n,e){const t=I.g,i=I.mode?null:ap(n,e);if(i){op(np(t,i.node,i.key),i.x+i.w/2,i.y,-1e3-i.node*31-i.key.length),Ds=!0;return}const s=wr(n,e);if(I.mode){if(!s||s.type!=="node")return;const r=I.mode;qt({c:"missile",from:r.from,to:s.id})&&(I.mode=null,I.sel={type:"node",id:r.from}),St=!0;return}if(s&&s.type==="node"&&t.nodes[s.id].owner===k&&!I.launch){const r=performance.now();if(Qo.id===s.id&&r-Qo.t<320){Qo={id:-1,t:0};const o=t.nodes[s.id];qt({c:"front",node:o.id})&&(wi.push({msg:o.front?`${o.name} is a Bastion: it keeps its Drones when you rally`:`${o.name} is Supply: it sends spare Drones when you rally`,kind:"info",node:o.id,until:performance.now()+2600}),jn("tap"));return}Qo={id:s.id,t:r}}if(!s){I.launch||(I.sel=null),St=!0;return}if(I.launch&&s.type==="node"&&s.id!==I.launch.from)return sp(I.launch.from,s.id,I.launch.lane);Mo(s.type,s.id)}xn.addEventListener("pointerdown",n=>{if(xn.setPointerCapture(n.pointerId),qa(),Is(),Yc=!1,clearTimeout(Da),cn.set(n.pointerId,{x:n.clientX,y:n.clientY}),cn.size===1&&(Zi={x:n.clientX,y:n.clientY},ws=!1,ns=-1,I.g&&I.screen==="game"&&!I.mode)){const e=wr(n.clientX,n.clientY);e&&e.type==="node"&&I.g.nodes[e.id].owner===k&&(ns=e.id)}if(cn.size===2){ns=-1,Yt=null;const[e,t]=[...cn.values()];hr=Math.hypot(e.x-t.x,e.y-t.y),ws=!0}si=null,ai.x=ai.y=0,n.pointerType!=="mouse"&&(Da=window.setTimeout(()=>{if(cn.size!==1||ws||!Zi)return;const e=dp(Zi.x,Zi.y);e&&(Yc=!0,Ds=!0,ja(e.spec,e.x,e.y),navigator.vibrate&&navigator.vibrate(12))},rp))});xn.addEventListener("pointermove",n=>{const e=cn.get(n.pointerId);if(!e){if(I.g&&I.screen==="game"){const s=n.pointerType==="mouse"?dp(n.clientX,n.clientY):null,r=n.pointerType==="mouse"&&!s?ap(n.clientX,n.clientY):null;s?ja(s.spec,s.x,s.y):r&&I.g?op(np(I.g,r.node,r.key),r.x+r.w/2,r.y,-1e3-r.node*31-r.key.length):Is();const o=wr(n.clientX,n.clientY);ip=o&&o.type==="node"?o.id:-1,xn.style.cursor=o||s?"pointer":"grab"}return}const t=n.clientX-e.x,i=n.clientY-e.y;if(e.x=n.clientX,e.y=n.clientY,cn.size===1)if(Zi&&Math.hypot(n.clientX-Zi.x,n.clientY-Zi.y)>8&&(ws=!0),ws&&ns>=0){const s=el(n.clientX,n.clientY),r=s>=0?{type:"node",id:s}:wr(n.clientX,n.clientY);Yt={from:ns,over:r&&r.type==="node"&&r.id!==ns?r.id:-1},Is(),clearTimeout(Da)}else ws&&(ze.x-=t/ze.z,ze.y-=i/(ze.z*ei),ai.x=-t/ze.z,ai.y=-i/(ze.z*ei));else if(cn.size===2){const[s,r]=[...cn.values()],o=Math.hypot(s.x-r.x,s.y-r.y);hr>0&&hp((s.x+r.x)/2,(s.y+r.y)/2,o/hr),hr=o,ze.x-=t/2/ze.z,ze.y-=i/2/(ze.z*ei)}});const fp=n=>{const e=cn.delete(n.pointerId);if(clearTimeout(Da),Yt&&I.g){const t=Yt;if(Yt=null,ns=-1,St=!0,t.over>=0)sp(t.from,t.over,I.g.nodes[t.over].owner===k);else if(I.g.nodes[t.from].flagship){const i=Kc(n.clientX,n.clientY);qt({c:"sail",node:t.from,x:i.x,y:i.y})&&(Ki(null),jn("launch",.6))}cn.size<2&&(hr=0);return}ns=-1,e&&cn.size===0&&!ws&&!Yc&&Zi&&I.g&&I.screen==="game"&&gS(n.clientX,n.clientY),cn.size<2&&(hr=0)};xn.addEventListener("pointerup",fp);xn.addEventListener("pointercancel",fp);xn.addEventListener("wheel",n=>{n.preventDefault(),hp(n.clientX,n.clientY,Math.exp(-n.deltaY*.0015))},{passive:!1});function hp(n,e,t){const i=Kc(n,e);ze.z=Math.max(2.4,Math.min(13,ze.z*t));const s=Kc(n,e);ze.x+=i.x-s.x,ze.y+=i.y-s.y}function pp(){const n=Math.min(2,window.devicePixelRatio||1);Hn=window.innerWidth,hi=window.innerHeight,xn.width=Math.round(Hn*n),xn.height=Math.round(hi*n),ua.setTransform(n,0,0,n,0,0)}window.addEventListener("resize",pp);pp();const yf={};function zi(n,e,t){if(yf[e]===t)return;yf[e]=t;const i=n.querySelector(".pbody"),s=i?i.scrollTop:0;n.innerHTML=t;const r=n.querySelector(".pbody");r&&s&&(r.scrollTop=s)}function _S(){const n=I.g,e=performance.now();if(I.screen==="title"||!n){for(const[s,r]of[[vf,"hud"],[Zo,"panel"],[ts,"roster"],[xf,"toasts"],[or,"log"]])zi(s,r,"");or.className="",Zo.className="",Jo.className="open clear",zi(Jo,"ov",I.screen==="help"?_f():hS(I));return}for(;Wr<n.log.length;Wr++){const s=n.log[Wr];s.kind!=="info"&&wi.push({msg:s.msg,kind:s.kind,node:s.node,until:e+(s.kind==="bad"?9e3:6e3)}),jn(/reached level/.test(s.msg)?"level":/^Captured|surrender|collapses|lays down/.test(s.msg)?"capture":s.kind==="bad"?"lost":s.kind==="warn"?"alert":"tap",s.kind==="info"?.5:1)}n.pending.length>Aa&&jn("tap"),Aa=n.pending.length,I.decide>=n.pending.length&&(I.decide=-1),zi(or,"log",I.logOpen?fS(I):""),or.className=(I.logOpen?"open":"")+(I.sel||I.launch?" shift":"");const t=n.lore.filter(s=>!(I.meta.codex||[]).includes(s));for(t.length&&(I.meta.codex=[...I.meta.codex||[],...t],ui.set(Qa,JSON.stringify(I.meta)),jn("lore")),n.log.length>=150&&(Wr=n.log.length);wi.length&&(wi[0].until<e||wi.length>4);)wi.shift();if(zi(xf,"toasts",wi.map(s=>`<div class="toast ${s.kind}" ${s.node>=0?`data-a="focus:${s.node}"`:""}>${s.msg.replace(/</g,"&lt;")}</div>`).join("")),zi(vf,"hud",jM(I)),Pa)return;if(wn||(zi(ts,"roster",eS(I)),ts.className=n.specs.filter(s=>s.owner===k).length*66>hi-80?"many":""),!Ra){const s=aS(I);Zo.className=s?I.launch?"open launch":"open":"",zi(Zo,"panel",s)}const i=I.screen==="help"?_f():n.result||pd(n)||I.decide>=0?uS(I):I.menu?lS(I):"";Jo.className=i?"open":"",zi(Jo,"ov",i)}function vS(n,e,t){const i=n.nodes[t],s=An(n,i),r=Ar(n,i).v,o=s.tier==="detected"||!r?"⬢ ?":`⬢ ${r.drones}${r.shields>=1?` ◈ ${Math.floor(r.shields)}`:""}`,a=e>=0?n.nodes[e]:null;return a?`${o} · ${it(Ne(a,i)/za(n,a,[]))}`:o}function xS(n){const e=I.mode;if(Yt)return new Set(n.nodes.filter(s=>s.id!==Yt.from&&(s.owner===k||Oa(n,s))).map(s=>s.id));if(I.drag){const s=n.specs[I.drag.spec];return new Set(n.nodes.filter(r=>r.owner===k&&rd(n,s,r).via).map(r=>r.id))}if(!e)return null;const t=n.nodes[e.from];return(s=>new Set(n.nodes.filter(s).map(r=>r.id)))(s=>!ho(n,t,s))}let bf=performance.now(),Qs=0,wf=0,Ef=0;function mp(n){const e=Math.min(.25,(n-bf)/1e3);bf=n;const t=I.g;if(t&&I.screen==="game"){if(!I.paused&&!I.menu&&!t.result&&!pd(t)&&I.decide<0){Qs+=e*I.speed*Sp;let a=0;for(;Qs>=X.dt&&a++<40;)if(Qs-=X.dt,!Kf(t)){Qs=0,St=!0;break}Qs>1&&(Qs=0)}t.result&&!qc&&(qc=!0,mS(),St=!0,jn(t.result==="win"?"win":"lose")),!cn.size&&Math.abs(ai.x)+Math.abs(ai.y)>.01&&(ze.x+=ai.x,ze.y+=ai.y,ai.x*=.9,ai.y*=.9);const i=(ri.has("arrowright")||ri.has("d")?1:0)-(ri.has("arrowleft")||ri.has("a")?1:0),s=(ri.has("arrowdown")||ri.has("s")?1:0)-(ri.has("arrowup")||ri.has("w")?1:0);if(Fd&&cp&&!cn.size&&!I.drag&&!I.menu&&I.decide<0&&!document.getElementById("console")?.classList.contains("open")){const a=fn.x<8?-1:fn.x>Hn-8?1:0,c=fn.y<8?-1:fn.y>hi-8?1:0;(a||c)&&(si=null,ze.x+=a*520*e/ze.z,ze.y+=c*520*e/(ze.z*ei))}if(Yt){const a=el(fn.x,fn.y),c=a>=0?{type:"node",id:a}:wr(fn.x,fn.y),l=c&&c.type==="node"?c.id:-1;Yt.over=l!==Yt.from?l:-1}(i||s)&&(si=null,ze.x+=i*420*e/ze.z,ze.y+=s*420*e/(ze.z*ei)),si&&(ze.x+=(si.x-ze.x)*.16,ze.y+=(si.y-ze.y)*.16,Math.hypot(si.x-ze.x,si.y-ze.y)<.4&&(si=null)),ze.x=Math.max(-40,Math.min(t.w+40,ze.x)),ze.y=Math.max(-40,Math.min(t.h+40,ze.y));const r=!!I.mode||!!I.drag||!!Yt,o=Yt?.from??(I.drag?t.specs[I.drag.spec].node:-1);qM(ua,t,{cam:ze,w:Hn,h:hi,sel:I.launch?{type:"node",id:I.launch.to}:I.sel,targeting:r,from:Yt?.from??I.mode?.from??I.launch?.from??-1,hover:Yt?Yt.over:I.drag?I.drag.over:ip,glow:xS(t),edgeInfo:Yt||I.drag?a=>vS(t,o,a):null},n),n-Ef>15e3&&(Ef=n,Id())}else ua.fillStyle="#262e49",ua.fillRect(0,0,Hn,hi);(St||n-wf>250)&&(St=!1,wf=n,_S()),requestAnimationFrame(mp)}requestAnimationFrame(mp);
