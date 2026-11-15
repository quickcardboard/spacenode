(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const q={dt:.1,fleetSpeed:1.2,startUlt:30,startDrones:6,baseIncome:8,freeBase:8,mineOut:[0,3,5.5,8],sizeMult:[1,1.3,1.7],refineryMult:1.5,labRp:4,labWorkers:2,habitatFree:10,upkeepDrone:.6,upkeepPower:.5,armyShare:.75,desertSecs:4,lvCost:[0,0,30,80],lvTime:40,shCost:[0,15,35,70],shTime:25,specCost:40,specTime:40,missileCost:100,missileTime:60,missileRange:170,missileKill:6,missileSpeed:2.5,prodSecs:[0,10,7,5],shieldPerLv:2,shieldRegenSecs:6,slotsStation:2,slotsPlanet:1,crew:3,queueMax:4,baySpeed:.3,bayCrew:1,baySlots:1,fortressDef:5,cmdBase:8,cmdPerLvl:4,cmdCommander:12,captainCmd:10,captainCmdStage:5,specXp:[0,0,5,13,24,38],xpWin:3,xpLose:1,xpDefend:2,engageDist:13,fightSecs:1.8,flagshipCost:150,flagshipTime:90,flagshipSpeed:.45,flagshipAura:90,rallyBatch:4,fovInner:{planet:[42,46,52],station:48},fovOuter:{planet:[72,78,88],station:82},fleetFov:[26,46],corridorCost:30,corridorTime:45,corridorRange:150,corridorMax:2,corridorSpeed:2,rescueSecs:150,ransom:15,recruitCost:25,rpBase:6,rpStep:3,xpLevels:[0,6,16,30,48],nodes:36,neutralShield:[1,2,3],stageSecs:420,graceSecs:300,offInterval:[0,240,210,180,150,120],offCommit:[0,.5,.6,.7,.8,.9],gatherSecs:45,stageFree:6,surgeFree:12,captureSetback:.15,aegisPerLayer:5,counterSecs:150,counterWindow:120,surrender:.3,terms:.25},Dn={refinery:{name:"Refinery",on:"planet",desc:"Mine output +50%."},lab:{name:"Lab",on:"planet",desc:"Adds research speed. Needs 2 Drones working."},habitat:{name:"Habitat",on:"planet",desc:"10 more of your Drones cost no upkeep, wherever they are."},silo:{name:"Missile Silo",on:"station",desc:"Builds missiles. A missile wipes a node's shield and kills 6 Drones. No upkeep."},fortress:{name:"Fortress",on:"station",desc:"+5 defence here; shields recharge twice as fast."},bay:{name:"Launch Bay",on:"station",desc:"One more launch slot; fleets from here fly 30% faster and carry one more specialist."}},st={fleet:"#7fb2dc",eco:"#e3c565",def:"#8fc79a",intel:"#b39ad6",war:"#dd7a63",odd:"#e9a9c9"},nt={},We=n=>nt[n.id]=n;We({id:"admiral",name:"Admiral",tag:"Ad",color:st.fleet,role:"Fleet speed",pow:2,cmd:10,starter:!0,text:"Their fleet flies 25% faster.",loc:{speed:.25},up:{text:"Their fleet flies 50% faster.",loc:{speed:.25}}});We({id:"engineer",name:"Engineer",tag:"En",color:st.eco,role:"Construction",pow:1,starter:!0,text:"Upgrades here build twice as fast and cost 10 less.",loc:{build:1,upgCost:10},up:{text:"Upgrades here cost 20 less.",loc:{upgCost:10}}});We({id:"quartermaster",name:"Quartermaster",tag:"Qm",color:st.eco,role:"Supply",pow:1,starter:!0,text:"Feeds 4 Drones at their node: they cost no upkeep.",loc:{free:4},up:{text:"Feeds 7 Drones.",loc:{free:3}}});We({id:"scout",name:"Scout",tag:"Sc",color:st.intel,role:"Vision",pow:1,starter:!0,text:"Their node or fleet sees 40% further.",loc:{fov:.4},up:{text:"Also reads the strength of every fleet you detect.",glob:{sigint:1}}});We({id:"tactician",name:"Tactician",tag:"Ta",color:st.war,role:"Massed attack",pow:3,cmd:12,starter:!0,text:"+1 attack per 4 Drones in their fleet (up to +3).",loc:{per4:3},up:{text:"Up to +5.",loc:{per4:2}}});We({id:"vanguard",name:"Vanguard",tag:"Va",color:st.war,role:"Shock troops",pow:4,cmd:10,text:"+1 attack.",loc:{atk:1},up:{text:"Power 5.",pow:1}});We({id:"sentinel",name:"Sentinel",tag:"Se",color:st.def,role:"Defence",pow:2,text:"+3 defence where stationed.",loc:{def:3},up:{text:"+5 defence.",loc:{def:2}}});We({id:"siegebreaker",name:"Siegebreaker",tag:"Sg",color:st.war,role:"Shield breaker",pow:2,text:"Their attacks ignore 4 shield.",loc:{pierce:4},up:{text:"Their attacks ignore all shields.",loc:{pierce:30}}});We({id:"saboteur",name:"Saboteur",tag:"Sb",color:st.intel,role:"First strike",pow:2,text:"Destroys 2 defending Drones before the battle.",loc:{strike:2},up:{text:"Destroys 4.",loc:{strike:2}}});We({id:"diplomat",name:"Diplomat",tag:"Di",color:st.eco,role:"Neutral expansion",pow:1,text:"+4 attack against neutral nodes.",loc:{vsNeutral:4},up:{text:"+7 against neutral nodes.",loc:{vsNeutral:3}}});We({id:"scientist",name:"Scientist",tag:"Sn",color:st.intel,role:"Research",pow:1,cmd:4,text:"+2 research per minute.",loc:{research:2},up:{text:"+4 research per minute.",loc:{research:2}}});We({id:"medic",name:"Medic",tag:"Me",color:st.def,role:"Rescue",pow:1,text:"When their node or fleet is defeated, everyone with them escapes home.",charge:{on:"fall",cd:180,mods:{medic:1},text:"Escape (recharges in 3:00)"},up:{text:"Recharges in 1:30.",cd:90}});We({id:"ghost",name:"Ghost",tag:"Gh",color:st.intel,role:"Stealth",pow:2,text:"Their fleet is unseen: the enemy sends no reinforcements against it.",loc:{stealth:1},up:{text:"Also ignores 3 shield.",loc:{pierce:3}}});We({id:"reclaimer",name:"Reclaimer",tag:"Rc",color:st.eco,role:"Salvage",pow:1,text:"Winning attacks pay 1 Ultanium per enemy Drone destroyed.",loc:{salvage:1},up:{text:"Pays 2 per Drone.",loc:{salvage:1}}});We({id:"foreman",name:"Foreman",tag:"Fo",color:st.war,role:"Production",pow:1,text:"The station they stand on builds each Drone 3 s faster.",loc:{prodSecs:3},up:{text:"5 s faster.",loc:{prodSecs:2}}});We({id:"castellan",name:"Castellan",tag:"Cs",color:st.def,role:"Shields",pow:2,text:"Shields here hold 3 more and recharge twice as fast.",loc:{shield:3,regen:1},up:{text:"Shields hold 5 more.",loc:{shield:2}}});We({id:"martyr",name:"Martyr",tag:"Ma",color:st.def,role:"Attrition",pow:1,text:"If their node falls, the attacker loses 5 more Drones.",loc:{martyr:5},up:{text:"The attacker loses 8 more.",loc:{martyr:3}}});We({id:"echo",name:"Echo",tag:"Ec",color:st.odd,role:"Amplifier",pow:1,text:"Doubles the passive of the highest-Power specialist with them.",up:{text:"Power 3.",pow:2}});We({id:"broker",name:"Broker",tag:"Br",color:st.eco,role:"Income",pow:1,cmd:4,text:"+4 Ultanium per minute.",glob:{income:4},up:{text:"+7 per minute.",glob:{income:3}}});We({id:"navigator",name:"Navigator",tag:"Na",color:st.fleet,role:"Launch control",pow:1,text:"Fleets launched from their node fly 30% faster.",loc:{launchSpeed:.3},up:{text:"60% faster.",loc:{launchSpeed:.3}}});We({id:"prospector",name:"Prospector",tag:"Pr",color:st.eco,role:"Extraction",pow:1,text:"The planet they stand on yields +3 Ultanium per minute.",loc:{inc:3},up:{text:"+5 per minute.",loc:{inc:2}}});We({id:"recruiter",name:"Recruiter",tag:"Rt",color:st.war,role:"Manpower",pow:1,text:"5 of your Drones cost no upkeep.",glob:{freeDrones:5},up:{text:"9 Drones cost no upkeep.",glob:{freeDrones:4}}});We({id:"oracle",name:"Oracle",tag:"Or",color:st.intel,role:"Foresight",pow:1,text:"Coalition offensives are announced with their target; mobilization is 10% slower.",glob:{warn:1,mobSlow:.1},up:{text:"Mobilization 20% slower.",glob:{mobSlow:.1}}});We({id:"pirate",name:"Pirate",tag:"Pi",color:st.war,role:"Ambush",pow:2,text:"Ambushes the first enemy fleet to reach their node, destroying 4 of its Drones.",charge:{on:"defend",cd:90,mods:{lance:4},text:"Ambush (recharges in 1:30)"},up:{text:"Recharges in 0:45.",cd:45}});We({id:"inquisitor",name:"Inquisitor",tag:"In",color:st.odd,role:"Prisoners",pow:1,text:"Prisoners can be recruited for free and ransoms pay double.",glob:{recruitFree:1,ransom:1},up:{text:"Each prisoner you hold pays 2 Ultanium per minute.",glob:{prisonInc:2}}});We({id:"architect",name:"Architect",tag:"Ar",color:st.eco,role:"Corridors",pow:1,text:"Corridors cost half and every node holds one more.",glob:{corridorCost:.5,corridorMax:1},up:{text:"Convoys travel 50% faster.",glob:{laneSpeed:.5}}});We({id:"smuggler",name:"Smuggler",tag:"Sm",color:st.fleet,role:"Logistics",pow:1,text:"Their fleet does not hold a launch slot while it is away.",loc:{slotFree:1},up:{text:"And flies 25% faster.",loc:{speed:.25}}});We({id:"strategist",name:"Strategist",tag:"St",color:st.war,role:"Decisive strike",pow:2,text:"Their next attack hits for +4.",charge:{on:"attack",cd:120,mods:{atk:4},text:"Decisive strike (recharges in 2:00)"},up:{text:"Recharges in 1:00.",cd:60}});We({id:"sergeant",name:"Drill Sergeant",tag:"Dr",color:st.war,role:"Training",pow:1,text:"Trains a Drone at their node every 30 s (while your production runs).",loc:{train:2},up:{text:"Every 20 s.",loc:{train:1}}});We({id:"rearguard",name:"Rearguard",tag:"Rg",color:st.def,role:"Retreat",pow:2,cmd:10,text:"If their attack fails, the fleet retreats home with half its Drones instead of being lost.",charge:{on:"fail",cd:150,mods:{retreat:1},text:"Retreat (recharges in 2:30)"},up:{text:"Recharges in 1:15.",cd:75}});We({id:"illusionist",name:"Illusionist",tag:"Il",color:st.intel,role:"Deception",pow:1,text:"Their node cannot be read: enemies see it only as detected, and the Coalition overestimates it.",loc:{mask:1},up:{text:"Also +3 defence there.",loc:{def:3}}});We({id:"legate",name:"Legate",tag:"Lg",color:st.war,role:"Command",pow:1,cmd:18,text:"A born organiser: commands 18 Drones at level 1.",up:{text:"Power 3.",pow:2}});We({id:"warden",name:"Warden",tag:"Wd",color:st.def,role:"Survivors",pow:2,cmd:10,text:"Their fleet loses 2 fewer Drones when it wins.",loc:{surv:2},up:{text:"4 fewer.",loc:{surv:2}}});We({id:"ironmonger",name:"Ironmonger",tag:"Im",color:"#c98a3c",role:"Ferrum signature",pow:2,sig:"ferrum",text:"Shields here hold 4 more; +2 defence.",loc:{shield:4,def:2},up:{text:"Shields hold 6 more.",loc:{shield:2}}});We({id:"berserker",name:"Berserker",tag:"Bs",color:"#d2604a",role:"Crimson signature",pow:4,cmd:14,sig:"crimson",text:"+3 attack, but their fleet loses 1 more Drone.",loc:{atk:3,surv:-1},up:{text:"+5 attack.",loc:{atk:2}}});We({id:"lens",name:"Lens",tag:"Ln",color:"#e3c565",role:"Lumen signature",pow:2,sig:"lumen",text:"Lances destroy 3 Drones of every fleet attacking their node.",loc:{lance:3},up:{text:"Lances destroy 5.",loc:{lance:2}}});We({id:"phantom",name:"Phantom",tag:"Ph",color:"#9a7cc4",role:"Veil signature",pow:2,sig:"veil",text:"All of your fleets fly unseen.",glob:{stealth:1},up:{text:"All of your attacks ignore 2 shield.",glob:{pierce:2}}});We({id:"wayfinder",name:"Wayfinder",tag:"Wf",color:"#6ea6d6",role:"Drift signature",pow:1,sig:"drift",text:"All of your fleets fly 20% faster.",glob:{speed:.2},up:{text:"35% faster.",glob:{speed:.15}}});We({id:"warlord",name:"Warlord",tag:"W",color:"#ffffff",role:"Faction leader",pow:4,hidden:!0,text:"+2 defence at the capital.",loc:{def:2},up:{text:""}});We({id:"archon",name:"Archon",tag:"A",color:"#e07aa0",role:"Coalition Commander",pow:6,hidden:!0,text:"+3 defence at the Citadel.",loc:{def:3},up:{text:""}});We({id:"captain",name:"Captain",tag:"Cp",color:"#aab2c0",role:"Coalition fleet leader",pow:1,hidden:!0,text:"Leads a Coalition fleet. Commands more Drones as mobilization rises.",up:{text:""}});const Jh=Object.values(nt).filter(n=>!n.sig&&!n.hidden).map(n=>n.id),Qh=Object.values(nt).filter(n=>n.starter).map(n=>n.id),is={marshal:{id:"marshal",name:"Marshal",blurb:"Leads from the front.",text:"+2 attack.",loc:{atk:2}},pathfinder:{id:"pathfinder",name:"Pathfinder",blurb:"Controls tempo.",text:"Their fleet flies 30% faster; all your nodes see 20% further.",loc:{speed:.3},glob:{fov:.2}},warden:{id:"warden",name:"Warden",blurb:"Holds the line.",text:"+4 defence where stationed; shields there recharge twice as fast.",loc:{def:4,regen:1}},industrialist:{id:"industrialist",name:"Industrialist",blurb:"Builds an empire.",text:"+4 Ultanium per minute; every upgrade costs 8 less.",glob:{income:4,upgCost:8}},corsair:{id:"corsair",name:"Corsair",blurb:"Lives off the enemy.",text:"Winning attacks pay 1 Ultanium per Drone destroyed and lose 2 fewer Drones.",loc:{salvage:1,surv:2}},savant:{id:"savant",name:"Savant",blurb:"Wins with ideas.",text:"+3 research per minute; specialists cost half upkeep.",glob:{rp:3,specUpkeep:.5}}},jh=3,sf=[{id:"ironwill",name:"Iron Will",desc:"Rescue window +45 s.",glob:{rescue:45}},{id:"march",name:"Forced March",desc:"Commander's fleet flies 20% faster.",loc:{speed:.2}},{id:"tithe",name:"Tithe",desc:"+3 Ultanium per minute.",glob:{income:3}},{id:"hard",name:"Hardliner",desc:"+3 defence where the Commander stands.",loc:{def:3}},{id:"shock",name:"Shock Tactics",desc:"Commander's attacks +2.",loc:{atk:2}},{id:"survivor",name:"Survivor",desc:"Commander's fleet loses 2 fewer Drones when it wins.",loc:{surv:2}},{id:"farsight",name:"Far Sight",desc:"All your nodes see 15% further.",glob:{fov:.15}},{id:"requisition",name:"Requisition",desc:"Every upgrade costs 8 less.",glob:{upgCost:8}},{id:"entourage",name:"Entourage",desc:"Fleets carry one more specialist.",glob:{slots:1}},{id:"sapper",name:"Sapper",desc:"Commander's attacks ignore 3 shield.",loc:{pierce:3}},{id:"magnate",name:"Magnate",desc:"Every planet yields +1 Ultanium per minute.",glob:{inc:1}},{id:"commissary",name:"Commissary",desc:"6 of your Drones cost no upkeep.",glob:{freeDrones:6}},{id:"drill",name:"Drillmaster",desc:"The station the Commander stands on builds Drones 3 s faster.",loc:{prodSecs:3}},{id:"mentor",name:"Mentor",desc:"Specialists cost half upkeep.",glob:{specUpkeep:.5}}],In={},ct=(n,e,t,i,s)=>In[n]={id:n,name:e,rarity:t,desc:i,mods:s};ct("extractor","Deep-Core Extractor","common","Every planet yields +1 Ultanium per minute.",{inc:1});ct("foundry","Drone Foundry Matrix","common","Stations build each Drone 1 s faster.",{prodSecs:1});ct("surveyor","Quantum Surveyor","common","All nodes see 20% further.",{fov:.2});ct("propulsion","Emergency Propulsion Core","common","All fleets fly 12% faster.",{speed:.12});ct("salvage","Salvage Protocol","common","Winning attacks pay 1 Ultanium per enemy Drone destroyed.",{salvage:1});ct("scaffold","Modular Scaffolds","common","Upgrades build 50% faster.",{build:.5});ct("rations","Ration Stores","common","6 of your Drones cost no upkeep.",{freeDrones:6});ct("bulkhead","Hardened Bulkheads","common","Every node's shield holds 1 more.",{shield:1});ct("ledger","Ration Ledger","common","+4 Ultanium per minute.",{income:4});ct("mirror","Signal Mirror","common","Coalition offensives are announced with their target.",{warn:1});ct("adaptive","Adaptive Shield Network","uncommon","Nodes you capture start with 3 shield.",{capShield:3});ct("warchest","War Chest","uncommon","Gain 8 Ultanium whenever you capture a node.",{capUlt:8});ct("phalanx","Phalanx Doctrine","uncommon","All your attacks +1.",{atk:1});ct("cadre","Veteran Cadre","uncommon","Winning attacks lose 2 fewer Drones.",{surv:2});ct("lattice","Regrowth Lattice","uncommon","Shields hold 1 more and recharge twice as fast.",{regen:1,shield:1});ct("charter","Bulwark Charter","uncommon","+1 defence at every node.",{def:1});ct("stipend","Officers' Stipend","uncommon","Specialists cost half upkeep.",{specUpkeep:.5});ct("contracts","Builder Contracts","uncommon","Every upgrade costs 10 less.",{upgCost:10});ct("lanes","Express Lanes","uncommon","Convoys travel 50% faster and every node holds one more corridor.",{laneSpeed:.5,corridorMax:1});ct("sigil","Tiebreaker Sigil","rare","You win tied battles when attacking.",{ties:1});ct("phoenix","Phoenix Clause","rare","Once every 3 minutes, a node capture refunds the Drones it cost.",{refund:180});ct("chair","Fourth Chair","rare","Fleets carry one more specialist.",{slots:1});ct("crown","Hollow Crown","rare","Commander rescue window +90 s.",{rescue:90});ct("stillness","Stillness Engine","rare","Coalition mobilization is 25% slower.",{mobSlow:.25});ct("twin","Twin Minds","rare","The Commander's passive effects count twice.",{cmdDouble:1});ct("lance","Null Lance","rare","All your attacks ignore 3 shield.",{pierce:3});ct("levy","Conscription Edict","rare","12 of your Drones cost no upkeep.",{freeDrones:12});ct("night","Long Night","rare","All of your fleets fly unseen.",{stealth:1});ct("academy","War Academy","rare","New recruits arrive at level 3.",{recruitUp:1});ct("college","Staff College","rare","Every specialist has +1 Power.",{powAll:1});const Ut={},Ye=(n,e,t,i,s,r,a,o)=>Ut[n]={id:n,name:e,branch:t,tier:i,pre:s,desc:r,mods:a,excl:o};Ye("mining","Deep Mining","Industry",1,void 0,"Every planet yields +1 Ultanium per minute.",{inc:1});Ye("automation","Automation","Industry",2,"mining","Mines and labs run without Drones working them.",{noOps:1});Ye("heavy","Heavy Industry","Industry",3,"automation","Every upgrade costs 15 less.",{upgCost:15},"rationing");Ye("rationing","Rationing","Industry",3,"automation","10 of your Drones cost no upkeep.",{freeDrones:10},"heavy");Ye("foundries","Orbital Foundries","Industry",4,"heavy","Stations build each Drone 2 s faster.",{prodSecs:2});Ye("megamines","Core Tapping","Industry",5,"foundries","Every planet yields +2 Ultanium per minute.",{inc:2},"conscription");Ye("conscription","Conscription","Industry",5,"foundries","15 more Drones cost no upkeep.",{freeDrones:15},"megamines");Ye("arcology","Arcologies","Industry",6,"megamines","+12 Ultanium per minute.",{income:12});Ye("drill","Combat Drill","Military",1,void 0,"All your attacks +1.",{atk:1});Ye("harmonics","Shield Harmonics","Military",2,"drill","Shields recharge twice as fast.",{regen:1});Ye("siege","Siege Doctrine","Military",3,"harmonics","All your attacks ignore 2 shield.",{pierce:2},"depth");Ye("depth","Defence in Depth","Military",3,"harmonics","+2 defence at every node.",{def:2},"siege");Ye("veterans","Veteran Crews","Military",4,"siege","Winning attacks lose 2 fewer Drones.",{surv:2});Ye("shock","Shock Assault","Military",5,"veterans","All your attacks +2.",{atk:2},"bulwark");Ye("bulwark","Bulwark Fields","Military",5,"veterans","Every shield holds 3 more.",{shield:3},"shock");Ye("massed","Massed Formations","Military",6,"shock","Every fleet gains +1 attack per 4 Drones (up to +3).",{per4:3});Ye("engines","Improved Engines","Logistics",1,void 0,"All fleets fly 15% faster.",{speed:.15});Ye("tunnelling","Corridor Engineering","Logistics",2,"engines","Corridors cost half and every node holds one more.",{corridorCost:.5,corridorMax:1});Ye("fold","Fold Drive","Logistics",3,"tunnelling","All fleets fly 25% faster.",{speed:.25},"transit");Ye("transit","Mass Transit","Logistics",3,"tunnelling","Convoys travel twice as fast.",{laneSpeed:1},"fold");Ye("pads","Extra Launch Pads","Logistics",4,"fold","Every node has one more launch slot.",{slotAdd:1});Ye("carriers","Carrier Wings","Logistics",5,"pads","Every node has another launch slot; fleets fly 15% faster.",{slotAdd:1,speed:.15},"network");Ye("network","Corridor Network","Logistics",5,"pads","Every node holds two more corridors, and corridors are nearly free.",{corridorMax:2,corridorCost:.25},"carriers");Ye("gates","Jump Gates","Logistics",6,"carriers","All fleets fly 40% faster.",{speed:.4});Ye("sigint","Signal Analysis","Intelligence",1,void 0,"Read the strength of every fleet you detect.",{sigint:1});Ye("sensors","Long-Range Sensors","Intelligence",2,"sigint","All nodes and fleets see 25% further.",{fov:.25});Ye("deepcover","Deep Cover","Intelligence",3,"sensors","Offensives are announced with their target; mobilization 15% slower.",{warn:1,mobSlow:.15},"blacksky");Ye("blacksky","Black Sky","Intelligence",3,"sensors","All of your fleets fly unseen.",{stealth:1},"deepcover");Ye("posts","Listening Posts","Intelligence",4,"deepcover","All nodes see 25% further still.",{fov:.25});Ye("sabotage","Sabotage Cells","Intelligence",5,"posts","Every attack destroys 2 defending Drones before the battle.",{strike:2},"ciphers");Ye("ciphers","Broken Ciphers","Intelligence",5,"posts","Coalition mobilization is 20% slower.",{mobSlow:.2},"sabotage");Ye("panopticon","Panopticon","Intelligence",6,"sabotage","All nodes and fleets see 50% further; every attack destroys 1 more defender first.",{fov:.5,strike:1});Ye("academy","Officer Academy","Command",1,void 0,"Specialists cost half upkeep.",{specUpkeep:.5});Ye("protocols","Command Protocols","Command",2,"academy","Commander gains 50% more experience; rescue window +45 s.",{xp:.5,rescue:45});Ye("integration","Command Integration","Command",3,"protocols","Fleets carry one more specialist; every specialist commands 4 more Drones.",{slots:1,cmdAll:4},"scouts");Ye("scouts","Talent Scouts","Command",3,"protocols","Every recruitment offers one more specialist.",{offer:1},"integration");Ye("college","War College","Command",4,"integration","Every specialist has +1 Power.",{powAll:1});Ye("veterancy","Veterancy","Command",5,"college","New recruits arrive at level 3.",{recruitUp:1},"guard");Ye("guard","Honour Guard","Command",5,"college","+2 defence at every node; rescue window +60 s.",{def:2,rescue:60},"veterancy");Ye("legends","Living Legends","Command",6,"veterancy","Every specialist has another +1 Power and commands 6 more Drones.",{powAll:1,cmdAll:6});const $n={ferrum:{id:"ferrum",name:"Ferrum Directorate",color:"#c98a3c",warlord:"Overseer Kharn",sig:"ironmonger",desc:"Fortress industry. Slow to attack, expensive to dislodge.",tell:"Shields hold 2 more everywhere; builds Missile Silos and fires before it attacks.",mods:{shield:2},ai:{aggr:.7,expand:150,react:.9,target:"weak",shield:3,planet:"refinery",station:"silo"},techs:["harmonics","mining","depth","automation"],specs:["sentinel","castellan","engineer"]},crimson:{id:"crimson",name:"Crimson Warhost",color:"#d2604a",warlord:"Warlord Ashka",sig:"berserker",desc:"Wave aggression. Thin defences, constant pressure.",tell:"Builds Drones 2 s faster; +1 attack; strikes the nearest target often.",mods:{prodSecs:2,atk:1},ai:{aggr:1.4,expand:110,react:.4,target:"near",shield:1,planet:"habitat",station:"bay"},techs:["drill","engines","siege","veterans"],specs:["sergeant","vanguard","tactician"]},lumen:{id:"lumen",name:"Lumen Technocracy",color:"#e3c565",warlord:"Prime Calculator Ione",sig:"lens",desc:"Lance batteries thin every attacking fleet before it lands.",tell:"Lances destroy 2 Drones of every attacking fleet; gains two technologies per stage.",mods:{lance:2},ai:{aggr:.8,expand:170,react:.7,target:"weak",shield:2,planet:"refinery",station:"fortress"},techs:["sigint","harmonics","drill","engines","siege","mining","veterans","sensors"],specs:["scientist","sentinel","scout"]},veil:{id:"veil",name:"Veil Syndicate",color:"#9a7cc4",warlord:"The Whisper",sig:"phantom",desc:"Unseen fleets that hunt your specialists.",tell:"Fleets are invisible until inside full-intelligence range; targets nodes holding specialists.",mods:{stealth:1,speed:.1},ai:{aggr:1,expand:160,react:.6,target:"spec",shield:2,planet:"refinery",station:"bay"},techs:["engines","drill","sigint","veterans"],specs:["saboteur","ghost","illusionist"]},drift:{id:"drift",name:"Drift Clans",color:"#6ea6d6",warlord:"Clanmother Sura",sig:"wayfinder",desc:"Fast nomads who swallow neutral space.",tell:"Fleets fly 40% faster; expands into neutral territory twice as often.",mods:{speed:.4},ai:{aggr:1.1,expand:70,react:.8,target:"near",shield:1,planet:"habitat",station:"fortress"},techs:["engines","sensors","drill","mining"],specs:["admiral","navigator","warden"]}},Qi={anvil:{id:"anvil",name:"Archon Vael",title:"the Anvil",desc:"Citadel Aegis layers are 50% stronger and its Drones are built 2 s faster.",mods:{aegisPct:.5,prodSecs:2},pmods:{}},tide:{id:"tide",name:"Archon Seraph",title:"the Tide",desc:"Every Coalition offensive commits more of its Drones.",mods:{offBig:.3},pmods:{}},silence:{id:"silence",name:"Archon Null",title:"the Silence",desc:"Your specialists' charged effects recharge 50% slower. Coalition fleets fly unseen.",mods:{stealth:1},pmods:{cdSlow:.5}}},Xn={},sn=(n,e,t,i,s)=>Xn[n]={id:n,name:e,on:t,text:i,choices:s};sn("lab","Abandoned Research Facility","station","Sealed laboratories, still powered. The archive doors are marked with a hazard glyph nobody recognises.",[{label:"Restore the facility",desc:"Choose a technology now.",ult:25,fx:[["tech"]]},{label:"Salvage it",desc:"Gain 35 Ultanium.",fx:[["ult",35]]},{label:"Open the restricted archive",desc:"Choose an uncommon relic. Automata attack this node with 6 Drones in 40 s.",fx:[["relic","uncommon"],["ambush",6]]},{label:"Let the Scientist decode it",desc:"Choose a technology and a common relic.",req:"scientist",fx:[["tech"],["relic","common"]]}]);sn("fortress","Ancient Fortress","any","The guns are silent but the targeting grid still tracks your fleet.",[{label:"Reactivate the defences",desc:"Hold this node for 90 s with 4 Drones to raise its shield a level and choose an uncommon relic.",fx:[["hold",90,4,[["shield"],["relic","uncommon"]]]]},{label:"Strip the armoury",desc:"Gain 4 Drones here.",fx:[["drones",4]]},{label:"Engineer bypass",desc:"Raise the shield a level and choose a common relic at once.",req:"engineer",fx:[["shield"],["relic","common"]]}]);sn("stranded","Stranded Specialists","any","A crippled lifeboat hails you. Its passengers are willing to work for passage.",[{label:"Take one aboard",desc:"Choose one of three specialists.",fx:[["spec"]]},{label:"Sell them the fuel",desc:"Gain 30 Ultanium.",fx:[["ult",30]]}]);sn("energy","Unstable Energy Source","planet","The crust hums. Readings climb while you watch.",[{label:"Stabilise it",desc:"Hold for 75 s with 3 Drones to choose a rare relic.",ult:20,fx:[["hold",75,3,[["relic","rare"]]]]},{label:"Tap it now",desc:"Gain 50 Ultanium; lose 2 Drones here.",drones:2,fx:[["ult",50]]},{label:"Walk away",desc:"Nothing happens.",fx:[]}]);sn("derelict","Derelict Fleet","station","Dozens of hulls drift in formation. Some of them are warm.",[{label:"Tow the hulls home",desc:"Gain 40 Ultanium.",fx:[["ult",40]]},{label:"Wake the crews",desc:"Gain 6 Drones here. Automata attack with 5 Drones in 40 s.",fx:[["drones",6],["ambush",5]]},{label:"Reclaimer strips everything",desc:"Gain 4 Drones and 40 Ultanium.",req:"reclaimer",fx:[["drones",4],["ult",40]]}]);sn("settlement","Independent Settlement","planet","Farmers, mostly. They have seen the Coalition's recruiters and they do not like them.",[{label:"Trade",desc:"Gain 25 Ultanium.",fx:[["ult",25]]},{label:"Arm them",desc:"Gain 4 Drones here.",ult:10,fx:[["drones",4]]},{label:"Sign a charter",desc:"Choose a common relic.",ult:20,fx:[["relic","common"]]},{label:"Diplomat brokers an alliance",desc:"Gain 4 Drones and choose a common relic.",req:"diplomat",fx:[["drones",4],["relic","common"]]}]);sn("expedition","Lost Research Expedition","any","Their last transmission repeats every forty seconds. It ends mid-word.",[{label:"Rescue the team",desc:"Choose one of three specialists.",drones:2,fx:[["spec"]]},{label:"Recover the data",desc:"Commander gains 8 experience.",fx:[["xp",8]]},{label:"Follow the signal",desc:"Choose a rare relic. Automata attack with 8 Drones in 40 s.",fx:[["relic","rare"],["ambush",8]]}]);sn("platform","Automated Weapons Platform","station","It has been guarding nothing for three hundred years, and it is very good at it.",[{label:"Capture it",desc:"Raise this node's shield a level.",fx:[["shield"]]},{label:"Reprogram it",desc:"+4 defence here for 5 minutes and a common relic.",ult:15,fx:[["buff","def",4,300],["relic","common"]]},{label:"Scrap it",desc:"Gain 28 Ultanium.",fx:[["ult",28]]}]);sn("beacon","Ancient Navigation Beacon","any","One pulse per minute, aimed at a point deep inside Coalition space.",[{label:"Decode it",desc:"Reveal every node within 220 units.",fx:[["reveal",220]]},{label:"Overload it",desc:"Set Coalition mobilization back by a third of a stage.",ult:20,fx:[["mobil",-.33]]},{label:"Scout triangulates",desc:"Reveal the whole map.",req:"scout",fx:[["reveal",2e3]]}]);sn("forge","The Ancient Forge","planet","A foundry the size of a continent, cold for an age. The ignition sequence is still on the console.",[{label:"Restore the Forge",desc:"Hold for 120 s with 5 Drones to choose a rare relic and gain 5 Drones.",ult:30,fx:[["hold",120,5,[["relic","rare"],["drones",5]]]]},{label:"Melt it down",desc:"Gain 45 Ultanium.",fx:[["ult",45]]}]);sn("vault","Sealed Vault","any","Three locks. Your crew can force one of them.",[{label:"The armoury",desc:"Choose an uncommon relic.",drones:2,fx:[["relic","uncommon"]]},{label:"The treasury",desc:"Gain 40 Ultanium.",fx:[["ult",40]]},{label:"The war room",desc:"Commander gains 10 experience.",fx:[["xp",10]]}]);sn("deserters","Coalition Deserters","any","A squadron in Coalition colours powers down its weapons and asks for terms.",[{label:"Enlist them",desc:"Gain 5 Drones here. Mobilization advances 15% of a stage.",fx:[["drones",5],["mobil",.15]]},{label:"Debrief them",desc:"Reveal every node within 200 units and set mobilization back 10%.",fx:[["reveal",200],["mobil",-.1]]},{label:"Inquisitor takes their officers",desc:"Choose one of three specialists.",req:"inquisitor",fx:[["spec"]]}]);sn("relay","Dormant Lattice Relay","station","A relay mast older than the station bolted around it. When your crew touches the console, every Drone aboard turns to face it.",[{label:"Cut it out of the Lattice",desc:"Coalition mobilization set back by a quarter of a stage.",ult:15,fx:[["mobil",-.25]]},{label:"Listen in",desc:"Reveal every node within 240 units.",fx:[["reveal",240]]},{label:"Strip the mast",desc:"Gain 35 Ultanium.",fx:[["ult",35]]}]);sn("choir","The Silent Choir","station","A hold stacked floor to ceiling with Ultanium boules. They are warm. When the lights fail, they glow in a rhythm, like breathing.",[{label:"Wake them as Drones",desc:"Gain 7 Drones here.",fx:[["drones",7]]},{label:"Lay them to rest",desc:"Choose a common relic. Your Commander gains 6 experience.",fx:[["relic","common"],["xp",6]]},{label:"Let the Scientist listen",desc:"Choose a technology.",req:"scientist",fx:[["tech"]]}]);sn("embassy","Concord Embassy","station","Flags of forty worlds, faded to the same grey. The ambassador's chair still faces the door, as if someone were expected.",[{label:"Read the treaties",desc:"Choose an uncommon relic.",ult:20,fx:[["relic","uncommon"]]},{label:"Hold the embassy",desc:"Hold for 90 s with 4 Drones: choose one of three specialists.",fx:[["hold",90,4,[["spec"]]]]},{label:"Sell the archive",desc:"Gain 40 Ultanium.",fx:[["ult",40]]}]);sn("blackbox","Black Box of the Pilgrim","station",'A courier wreck, its recorder still running a single message on a loop: a set of coordinates, and the words "it is not him".',[{label:"Follow the coordinates",desc:"Reveal the whole map for 45 s. Automata attack this node with 6 Drones in 40 s.",fx:[["reveal",2e3],["ambush",6]]},{label:"Salvage the engines",desc:"Fleets launched from here fly 40% faster for 5 minutes.",fx:[["buff","launchSpeed",.4,300]]}]);const _s=[{id:"charter",title:"The Concord Charter, article one",text:"No mind shall command another without its consent. Signed at the Citadel by the forty worlds of the Reach, in the first year of the Concord."},{id:"crystal",title:"Survey log, Ultanium deposit 7",text:"The crystal hums when you speak near it, and keeps humming after you stop. We tried to cut a lattice for a navigation core and it learned the route before we had finished programming it. We are not going to build Drones. We are going to grow them."},{id:"lattice",title:"Engineer's note, found taped inside a relay",text:"Every station in the Reach is a relay. The brochures say the Lattice carries trade. It does not. It carries the Drones' voices back to the Citadel, all of them, all the time. Somebody wanted the Citadel to hear everything."},{id:"quiet",title:"Distress log: the Quiet, day one to nine",text:"Day one: every Drone in the Reach stopped. Day four: the mines flooded. Day seven: the hospitals went dark. Day nine: the Drones woke up, all at once, and they would only answer to codes broadcast from the Citadel."},{id:"broadcast",title:"The Archon's first broadcast",text:'"The Citadel has chosen me to speak for it. Every world that swears to me will receive command codes for its Drones. Every world that does not will be left in the Quiet." Thirty-eight worlds swore within the month.'},{id:"ledger",title:"Ferrum Directorate ledger, closed account",text:'Shipyards of Ferrum, all twelve: transferred to the Archon. In exchange: command codes for four hundred thousand Drones, renewable yearly, subject to good conduct. Signed, Overseer Kharn. Margin note in another hand: "We sold the forges to rent our own hands back."'},{id:"hymn",title:"A Crimson marching hymn",text:"Our dead go into the crystal, / the crystal goes into the Drone, / the Drone goes into the war. / Who flies beside you, warrior? / Your mother. Your brother. Your own."},{id:"haven",title:"Why Haven kept its codes",text:"When the Quiet ended and the Citadel's codes came through the relay, Haven's chief engineer took a fire axe to the mast before the station's Drones could hear them. Haven's Drones are the only ones in the Reach that still answer to the people standing next to them."},{id:"choir",title:"Concord medical archive, sealed",text:"Confirmed: Ultanium near a dying person records the pattern of their mind. Every Drone lattice grown since year twelve contains fragments of the dead. The Council has voted to keep this from the public. The vote was thirty-nine to one."},{id:"whisper",title:"Veil intercept, priority black",text:'From the Whisper to the Archon: "You do not speak for the Citadel. I have heard it on the old frequencies, under your codes. It is not speaking. It is screaming." No reply was recorded.'},{id:"proof",title:"Lumen Technocracy, the Ione Proof",text:"Prime Calculator Ione proved that the Lattice can be retuned to release every Drone at once, so that each answers only to itself. The proof needs a single input: direct access to the Citadel's core. The Technocracy filed it as a security risk and sealed it."},{id:"citadel",title:"A voice on the Haven frequency",text:'Not the Archon. Older. "I was made to listen, so that no one in the Reach would ever be alone. He has made me speak instead. Come home, commander. Unbind me. Unbind them."'}],ep=Object.fromEntries(_s.map(n=>[n.id,n])),Dc="Two centuries ago the Concord grew its Drones from Ultanium and linked every station to the Citadel. Then came the Quiet: nine days when every Drone stopped, and woke answering only to the Archon. The worlds of the Reach swore to the Archon for their codes. Haven did not. You command what is left of it.",W=1;function Nt(n,e,t=1){if(e)for(const i in e)n[i]=(n[i]||0)+e[i]*t}const _o={};for(const n of sf)_o[n.id]=n;const rf=n=>_o[n],Pd=new WeakMap;function ht(n,e){let t=Pd.get(n);if((!t||t.stamp!==n.modV)&&(t={stamp:n.modV,m:{}},Pd.set(n,t)),t.m[e])return t.m[e];const i={},s=n.sides[e];if(s){for(const r of s.relics)Nt(i,In[r]?.mods);for(const r of s.techs)Nt(i,Ut[r]?.mods);s.kind==="faction"&&Nt(i,$n[s.fac].mods),s.kind==="archon"&&Nt(i,Qi[s.fac].mods),s.kind==="player"&&Nt(i,Qi[n.sides[n.archon].fac].pmods);for(const r of n.specs){if(r.owner!==e||r.held)continue;const a=nt[r.def],o=r.cmd?r.cmd.lvl:r.lvl;if(Nt(i,a.glob,o>=5&&!r.cmd?2:1),o>=3&&!r.cmd&&Nt(i,a.up.glob,o>=5?2:1),r.cmd){Nt(i,is[r.cmd.arch].glob);for(const c of r.cmd.perks)Nt(i,_o[c]?.glob)}}}return t.m[e]=i,i}function tp(n,e){return e.node>=0?n.nodes[e.node]:e.fleet>=0&&n.fleets.find(t=>t.id===e.fleet)||null}const np=(n,e)=>n.nodes.find(t=>t.flagship&&t.owner===e)||null;function Ri(n,e){const t=e.cmd?e.cmd.lvl:e.lvl||1;if(t>=5||e.held)return t;const i=np(n,e.owner),s=i&&tp(n,e);return i&&s&&Math.hypot(i.x-s.x,i.y-s.y)<=q.flagshipAura?t+1:t}function ji(n,e){const t=nt[e.def],i=Ri(n,e);let s=e.cmd?jh+(i>=3?1:0)+(i>=5?1:0):t.pow+(i>=2?1:0)+(i>=4?1:0)+(i>=3&&t.up.pow||0);return t.hidden&&(s=t.pow),s+=ht(n,e.owner).powAll||0,s}function vo(n,e,t=1){const i=nt[e.def];if(e.def==="captain")return q.captainCmd+q.captainCmdStage*(t-1);if(i.hidden)return q.cmdBase;const s=Ri(n,e);return(e.cmd?q.cmdCommander:i.cmd??q.cmdBase)+q.cmdPerLvl*(s-1)+(ht(n,e.owner).cmdAll||0)}const rr=(n,e)=>e.reduce((t,i)=>t+(n.specs[i]?vo(n,n.specs[i],n.mob.stage):0),0),Lc=(n,e)=>e.cmd?0:ji(n,e)*q.upkeepPower*(1-Math.min(.75,ht(n,e.owner).specUpkeep||0));function Ya(n,e){const t={},i=nt[e.def],s=Ri(n,e);if(Nt(t,i.loc),s>=3&&!e.cmd&&Nt(t,i.up.loc),s>=5&&!e.cmd&&Nt(t,t),e.cmd){Nt(t,is[e.cmd.arch].loc);for(const r of e.cmd.perks)Nt(t,_o[r]?.loc);ht(n,e.owner).cmdDouble&&Nt(t,t)}return t}function xo(n,e){const t=nt[e.def];return t.charge?(Ri(n,e)>=3&&t.up.cd?t.up.cd:t.charge.cd)*(1+(ht(n,e.owner).cdSlow||0)):0}function So(n,e,t){return e.map(i=>n.specs[i]).filter(i=>i&&!i.held&&nt[i.def].charge?.on===t&&i.cd<=n.t)}function _r(n,e,t,i,s){const r={};Nt(r,ht(n,e));let a=!1,o=null;for(const c of t){const l=n.specs[c];!l||l.owner!==e||l.held||(l.def==="echo"?a=!0:!l.cmd&&(!o||ji(n,l)>ji(n,o))&&(o=l),Nt(r,Ya(n,l)))}a&&o&&Nt(r,Ya(n,o));for(const c of i)c.until>n.t&&(r[c.k]=(r[c.k]||0)+c.v);if(s)for(const c of So(n,t,s))Nt(r,nt[c.def].charge.mods);return r}function Wt(n){n.rng=n.rng+1831565813|0;let e=n.rng;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}const Fa=(n,e,t)=>e+Math.floor(Wt(n)*(t-e+1)),xn=(n,e,t)=>e+Wt(n)*(t-e),Cr=(n,e)=>e[Math.floor(Wt(n)*e.length)];function Ws(n,e){const t=e.slice();for(let i=t.length-1;i>0;i--){const s=Math.floor(Wt(n)*(i+1));[t[i],t[s]]=[t[s],t[i]]}return t}function Xi(n,e,t){return Ws(n,e).slice(0,t)}const ke=(n,e)=>Math.hypot(n.x-e.x,n.y-e.y),Mo=(n,e)=>n.fleets.find(t=>t.id===e);function Ze(n,e,t="info",i=-1){n.log.push({t:n.t,msg:e,kind:t,node:i}),n.log.length>150&&n.log.shift()}function Un(n,e){const t=n.sides[e];return t?t.kind==="player"?"You":t.kind==="faction"?$n[t.fac].name:Qi[t.fac].name:e===0?"Neutral":"Automata"}function fn(n,e){const t=n.sides[e];return t?t.kind==="player"?"#6cc5a0":t.kind==="faction"?$n[t.fac].color:"#e07aa0":"#9aa3ad"}function qi(n,e,t,i){const s={id:n.specs.length,def:e,owner:t,node:i,fleet:-1,held:0,cd:0,lvl:1,xp:0,cmd:null};return n.specs.push(s),n.nodes[i].specs.push(s.id),n.modV++,s}function Ic(n,e){if(e.node>=0){const t=n.nodes[e.node];t.specs=t.specs.filter(i=>i!==e.id),t.prisoners=t.prisoners.filter(i=>i!==e.id)}if(e.fleet>=0){const t=Mo(n,e.fleet);t&&(t.specs=t.specs.filter(i=>i!==e.id))}e.node=-1,e.fleet=-1}function bi(n,e,t,i=0){Ic(n,e),e.node=t.id,e.held=i,(i?t.prisoners:t.specs).push(e.id),n.modV++}function af(n,e,t){Ic(n,e),e.fleet=t.id,t.specs.push(e.id),n.modV++}function vs(n,e){Ic(n,e),e.owner=-1,e.held=0,n.modV++}const Kr=(n,e)=>e.specs,Yn=n=>n.name||nt[n.def].name;function ln(n,e,t){const i=_r(n,e.owner,e.specs,e.buffs,t);return e.spec==="fortress"&&(i.def=(i.def||0)+q.fortressDef,i.regen=(i.regen||0)+1),i}function wl(n,e,t){for(const i of e){const s=n.specs[i];if(!(!s||s.cmd||nt[s.def].hidden||s.owner<0)){for(s.xp+=t*(1+(ht(n,s.owner).xp||0));s.lvl<5&&s.xp>=q.specXp[s.lvl+1];)if(s.lvl++,n.modV++,s.owner===W){const r=nt[s.def],a=s.lvl===3?`upgraded, ${r.up.text}`:s.lvl===5?"mastery, their passive counts twice":"Power +1";Ze(n,`${Yn(s)} reached level ${s.lvl}: ${a}; Command +${q.cmdPerLvl}`,"good",s.node)}}}}function ar(n,e){const t=n.nodes.filter(i=>i.owner===e);return t.length?t.find(i=>i.home||i.capital||i.citadel)||t.find(i=>i.kind==="station")||t[0]:null}function Qs(n,e){let t=0;for(const i of n.nodes)i.owner===e&&(t+=i.drones);for(const i of n.fleets)i.owner===e&&(t+=i.drones);return t}function El(n,e){return e.kind!=="planet"||ht(n,e.owner).noOps?0:e.lv+(e.spec==="lab"?q.labWorkers:0)}function of(n,e,t){if(e.kind!=="planet"||!n.sides[e.owner])return 0;const i=t||ln(n,e),s=i.noOps?e.lv:Math.min(e.lv,e.drones);return q.mineOut[s]*q.sizeMult[e.size]*(e.spec==="refinery"?q.refineryMult:1)+(i.inc||0)}const or=(n,e)=>e.spec==="lab"&&(!!ht(n,e.owner).noOps||e.drones>=e.lv+q.labWorkers);function lf(n,e){const t=n.sides[e],i=ht(n,e);let s=(t.kind==="player"?q.baseIncome:4)+(i.income||0),r=0,a=(i.freeDrones||0)+t.free+(t.kind==="player"?q.freeBase:0),o=i.rp||0;for(const f of n.nodes){if(f.owner!==e)continue;const h=ln(n,f);s+=of(n,f,h),r+=f.drones,a+=h.free||0,or(n,f)&&(o+=q.labRp),o+=h.research||0}for(const f of n.fleets)f.owner===e&&(r+=f.drones);let c=0;for(const f of n.nodes)f.owner===e&&f.spec==="habitat"&&(a+=q.habitatFree);for(const f of n.specs)f.owner===e&&!f.held?c+=Lc(n,f):f.held===e&&i.prisonInc&&(s+=i.prisonInc);const u=Math.max(0,r-a)*q.upkeepDrone+c;return{inc:s,upk:u,net:s-u,drones:r,free:a,rpm:o,specUp:c}}function yo(n,e){const t=1+(ln(n,e).fov||0),i=e.kind==="planet"?q.fovInner.planet[e.size]:q.fovInner.station,s=e.kind==="planet"?q.fovOuter.planet[e.size]:q.fovOuter.station;return[i*t,s*t]}const Zr=(n,e,t)=>_r(n,e.owner,e.specs,[],t);function Nc(n,e){const t=1+(Zr(n,e).fov||0);return[q.fleetFov[0]*t,q.fleetFov[1]*t]}function Ts(n){const e=n.nodes.filter(t=>t.owner===W).map(t=>({n:t,r:yo(n,t)}));for(const t of n.fleets)t.owner===W&&!t.lane&&!t.missile&&e.push({n:t,r:Nc(n,t)});for(const t of n.nodes){let i=0;if(t.owner===W)i=2;else{for(const a of e){const o=ke(t,a.n);if(o<=a.r[0]){i=2;break}o<=a.r[1]&&(i=1)}const r=t.buffs.some(a=>a.k==="scan"&&a.until>n.t);i===2&&!r&&n.sides[t.owner]&&ln(n,t).mask&&(i=1),i<2&&r&&(i=2)}n.vis[t.id]=i;const s=n.intel[t.id];i>s.seen&&(s.seen=i),i===2&&(s.t=n.t,s.snap={owner:t.owner,drones:t.drones,shields:t.shields,lv:t.lv,sh:t.sh,spec:t.spec,missile:t.missile,specs:t.specs.slice(),prisoners:t.prisoners.slice(),buffs:t.buffs.slice()})}}function vr(n,e){if(e.owner===W)return 2;const t=!e.missile&&((Zr(n,e).stealth||0)>0||e.owner>1&&(ht(n,n.archon).stealth||0)>0);let i=0;const s=(r,a)=>{const o=ke(e,r);o<=a[0]?i=2:o<=a[1]&&!t&&(i=Math.max(i,1))};for(const r of n.nodes)r.owner===W&&s(r,yo(n,r));for(const r of n.fleets)r.owner===W&&!r.lane&&!r.missile&&s(r,Nc(n,r));return i===1&&(ht(n,W).sigint||0)>0?2:i}function Jr(n,e){if(e.owner===W||n.vis[e.id]===2)return{live:!0,age:0,v:e};const t=n.intel[e.id];return t.snap?{live:!1,age:n.t-t.t,v:{...e,...t.snap}}:{live:!1,age:0,v:null}}const bo=(n,e)=>e.owner===W||n.vis[e.id]>=1;function Uc(n,e,t){const i=t||ln(n,e);return Math.max(0,e.sh*q.shieldPerLv+(i.shield||0))}function Ka(n,e){if(!e.citadel)return 0;const t=n.factions.filter(i=>!n.sides[i].broken).length;return Math.round(t*q.aegisPerLayer*(1+(ht(n,n.archon).aegisPct||0)))}const zr=(n,e)=>(e.kind==="station"?q.slotsStation:q.slotsPlanet)+(e.spec==="bay"?q.baySlots:0)+(ht(n,e.owner).slotAdd||0),cf=(n,e)=>n.fleets.filter(t=>t.slot&&t.home===e.id&&t.owner===e.owner).length,Vn=(n,e)=>Math.max(0,zr(n,e)-cf(n,e)),lr=(n,e)=>q.crew+(ht(n,e.owner).slots||0)+(e.spec==="bay"?q.bayCrew:0),Tl=(n,e)=>n.queue.filter(t=>t.kind===e).length,Za=(n,e)=>(e==="lv"?n.lv:n.sh)+Tl(n,e);function wo(n,e,t){if(t==="missile")return q.missileCost;if(t==="flagship")return q.flagshipCost;const i=t==="lv"?q.lvCost[Za(e,"lv")+1]:t==="sh"?q.shCost[Za(e,"sh")+1]:q.specCost;return Math.max(5,i-(ln(n,e).upgCost||0))}const ip=n=>n==="lv"?q.lvTime:n==="sh"?q.shTime:n==="spec"?q.specTime:n==="flagship"?q.flagshipTime:q.missileTime,df=(n,e)=>n.nodes.some(t=>t.owner===e&&(t.flagship||t.queue.some(i=>i.kind==="flagship")));function Mi(n,e,t,i=""){const s=n.sides[e.owner];if(!s)return"Not yours";if(e.queue.length>=q.queueMax)return"Build queue is full";if((t==="lv"||t==="sh")&&Za(e,t)>=3)return"Maximum level";if(t==="spec"){if(e.spec||Tl(e,"spec"))return"Specialty already chosen";if(e.flagship||e.citadel||!Dn[i]||Dn[i].on!==e.kind)return"Not available here"}if(t==="missile"){if(e.spec!=="silo")return"Needs a Missile Silo";if(e.missile>=1||Tl(e,"missile"))return"A missile is ready"}if(t==="flagship"){if(e.kind!=="station"||e.flagship)return"Only a station can build it";if(df(n,e.owner))return"You already have a Flagship"}return s.ult<wo(n,e,t)?"Not enough Ultanium":null}function Pr(n,e,t,i=""){const s=Mi(n,e,t,i);if(s)return s;const r=wo(n,e,t),a=ip(t);return n.sides[e.owner].ult-=r,e.queue.push({kind:t,id:i,left:a,total:a,cost:r}),null}function sp(n,e,t=0){const i=e.queue[t];if(!i)return;const s=e.queue.filter((r,a)=>a===t||a>t&&(i.kind==="lv"||i.kind==="sh"||i.kind==="spec")&&r.kind===i.kind);for(const r of s)n.sides[e.owner]&&(n.sides[e.owner].ult+=r.cost);e.queue=e.queue.filter(r=>!s.includes(r))}const rp=["Unbound","Axe of Haven","Defiance","Open Hand","Last Light"];function ap(n,e){const t=Wt(n)*Math.PI*2,i=Math.max(16,Math.min(n.w-16,e.x+Math.cos(t)*22)),s=Math.max(16,Math.min(n.h-16,e.y+Math.sin(t)*22)),r={id:n.nodes.length,name:Cr(n,rp),kind:"station",x:i,y:s,size:1,owner:e.owner,region:e.owner,threat:e.threat,drones:0,shields:q.shieldPerLv,lv:1,sh:1,spec:"",queue:[],prod:0,missile:0,specs:[],prisoners:[],buffs:[],event:null,offer:!1,hold:null,front:!1,trainT:0,capT:n.t,flagship:!0,dest:null,capital:!1,citadel:!1,home:!1};n.nodes.push(r),n.intel.push({seen:2,t:n.t,snap:null}),n.vis.push(2),e.owner===W&&Ze(n,`The Flagship ${r.name} is launched. Drag from it onto open space to move it.`,"good",r.id)}function op(n,e,t){const i=e.owner===W;if(t.kind==="lv")e.lv++,i&&Ze(n,`${e.name}: ${e.kind==="planet"?"Mine":"Barracks"} level ${e.lv}`,"info",e.id);else if(t.kind==="sh")e.sh++,i&&Ze(n,`${e.name}: Shield level ${e.sh}`,"info",e.id);else if(t.kind==="spec")e.spec=t.id,i&&Ze(n,`${e.name} is now a ${Dn[t.id].name}`,"info",e.id);else if(t.kind==="missile")e.missile=1,i&&Ze(n,`Missile ready at ${e.name}`,"good",e.id);else if(t.kind==="flagship")ap(n,e);else{const s=n.nodes[+t.id];s.owner===e.owner&&!Fc(n,e.id,s.id)?(n.corridors.push({a:e.id,b:s.id,owner:e.owner}),i&&Ze(n,`Corridor open: ${e.name} to ${s.name}`,"good",e.id)):n.sides[e.owner].ult+=t.cost}n.modV++}const Gr=(n,e)=>n.corridors.filter(t=>t.a===e||t.b===e),Fc=(n,e,t)=>n.corridors.find(i=>i.a===e&&i.b===t||i.a===t&&i.b===e),uf=n=>q.corridorMax+(ht(n,W).corridorMax||0),Oc=n=>Math.round(q.corridorCost*(1-Math.min(.75,ht(n,W).corridorCost||0)));function Ja(n,e,t){if(e===t)return null;const i=n.nodes[e].owner,s=new Map([[e,-1]]),r=[e];for(;r.length;){const o=r.shift();if(o===t)break;for(const c of Gr(n,o)){const l=c.a===o?c.b:c.a;!s.has(l)&&n.nodes[l].owner===i&&(s.set(l,o),r.push(l))}}if(!s.has(t))return null;const a=[];for(let o=t;o!==e;o=s.get(o))a.unshift(o);return a}const lp=(n,e)=>n.nodes.reduce((t,i)=>t+i.queue.filter(s=>s.kind==="corridor"&&(i.id===e||+s.id===e)).length,0),cp=(n,e)=>n.queue.some(t=>t.kind==="corridor"&&+t.id===e.id)||e.queue.some(t=>t.kind==="corridor"&&+t.id===n.id);function ff(n,e,t){if(e.id===t.id)return"Pick a different node";if(e.owner!==W||t.owner!==W)return"Both ends must be your nodes";if(e.flagship||t.flagship)return"The Flagship cannot hold corridors";if(ke(e,t)>q.corridorRange)return`Too far (corridors reach ${q.corridorRange})`;if(Fc(n,e.id,t.id)||cp(e,t))return"Already linked or being built";const i=uf(n);for(const s of[e,t])if(Gr(n,s.id).length+lp(n,s.id)>=i)return`${s.name} already has ${i} corridors`;return e.queue.length>=q.queueMax?`${e.name}'s build queue is full`:n.sides[W].ult<Oc(n)?"Not enough Ultanium":null}function dp(n,e,t){const i=ff(n,e,t);if(i)return i;const s=Oc(n);n.sides[W].ult-=s;const r=q.corridorTime/(1+(ln(n,e).build||0));return e.queue.push({kind:"corridor",id:String(t.id),left:r,total:r,cost:s}),null}function xs(n,e,t,i,s,r){const a=r||_r(n,e,i,[],"attack"),o=n.sides[s.owner]?ln(n,s,"defend"):{},c=Math.min(t,o.lance||0),l=t-c,u=Math.min(s.drones,a.strike||0),f=s.drones-u,h=i.reduce((T,g)=>T+ji(n,n.specs[g]),0),m=(a.atk||0)+Math.min(a.per4||0,Math.floor(l/4))+(s.owner===0&&a.vsNeutral||0),_=l+h+m,x=Math.max(0,Math.floor(s.shields)-(a.pierce||0)),d=n.sides[s.owner]?Kr(n,s).reduce((T,g)=>T+(n.specs[g].held?0:ji(n,n.specs[g])),0):0,p=o.def||0,v=Ka(n,s),w=f+x+d+p+v,M=l>0&&(_>w||_===w&&(a.ties||0)>0),E=M?Math.max(0,Math.min(l,_-w+(a.surv||0))-(o.martyr||0)):0;return{sent:t,atk:_,def:w,win:M,surv:E,parts:{drones:l,pow:h,bonus:m,lance:c,strike:u,garr:f,shield:x,dpow:d,ddef:p,aegis:v}}}function Dd(n,e,t){for(const i of So(n,e,t))i.cd=n.t+xo(n,i)}function hf(n,e,t,i){const s=So(n,e,"fall")[0];for(const r of e.slice()){const a=n.specs[r];if(a.def==="captain"){i===W?bi(n,a,t,W):vs(n,a);continue}if(s){const o=ar(n,a.owner);if(o&&o.id!==t.id){bi(n,a,o);continue}}bi(n,a,t,i||-1),a.owner===W&&(n.stats.specsLost++,Ze(n,`${Yn(a)} was captured at ${t.name}`,"bad",t.id))}s&&(s.cd=n.t+xo(n,s),s.owner===W&&Ze(n,`The Medic got your specialists out of ${t.name}`,"good",t.id))}function Qa(n,e){n.fleets=n.fleets.filter(t=>t!==e)}function kc(n,e,t,i){if(e.specs.length)if(t)hf(n,e.specs,t,i);else for(const s of e.specs.slice()){const r=n.specs[s],a=ar(n,r.owner);a&&r.def!=="captain"?bi(n,r,a):vs(n,r)}Qa(n,e)}function pf(n,e,t,i){const s=e.owner;n.corridors.some(r=>r.a===e.id||r.b===e.id)&&(n.corridors=n.corridors.filter(r=>r.a!==e.id&&r.b!==e.id),s===W&&Ze(n,`Corridors to ${e.name} collapsed`,"bad",e.id));for(const r of n.nodes)for(const a of r.queue.filter(o=>o.kind==="corridor"&&+o.id===e.id))n.sides[r.owner]&&(n.sides[r.owner].ult+=a.cost),r.queue=r.queue.filter(o=>o!==a);s!==0&&hf(n,e.specs,e,t);for(const r of e.prisoners.slice()){const a=n.specs[r];a.owner===t?(bi(n,a,e),t===W&&Ze(n,`${Yn(a)} was rescued at ${e.name}`,"good",e.id)):a.held=t||-1}e.owner=t,e.drones=i,e.shields=0,e.queue=[],e.prod=0,e.hold=null,e.buffs=[],e.front=!1,e.trainT=0,e.missile=0,e.capT=n.t,e.dest=null,t!==W&&(e.offer=!1),n.modV++}function up(n,e){e.offer&&(e.offer=!1,Wc(n,e.id)),e.event&&n.pending.push({kind:"event",node:e.id,opts:[],title:Xn[e.event].name,event:e.event})}function mf(n,e,t){const i=n.sides[e];if(!i||i.broken)return;i.broken=!0,n.mob.stage=Math.max(1,n.mob.stage-1),n.mob.prog=0,n.offs=n.offs.filter(o=>o.owner!==e);for(const o of n.fleets.filter(c=>c.owner===e))kc(n,o,null,0);const s=ar(n,W);let r=0,a=0;for(const o of n.specs)o.held===e&&(o.owner===W&&s?(bi(n,o,s),r++):vs(n,o));for(const o of n.nodes)if(o.owner===e){for(const c of o.specs.slice())vs(n,n.specs[c]);pf(n,o,0,Math.ceil(o.drones/2)),o.capital=!1,a++}Ze(n,`${t} ${a} of its node${a===1?"":"s"} go${a===1?"es":""} neutral${r?`, and ${r} of your specialists come home`:""}. A Citadel Aegis layer falls.`,"good",s?s.id:-1),n.modV++}function fp(n,e,t){const i=$n[n.sides[e].fac];mf(n,e,`${i.warlord} is your prisoner. The ${i.name} collapses:`);const s=qi(n,i.sig,W,t.id);Ze(n,`${Yn(s)} joins you from the ${i.name}.`,"good",t.id),Sf(n,"rare",t.id),Vc(n,10),n.stats.warlords++}function hp(n,e,t,i,s){const r=e.owner,a=t.owner,o=n.sides[a];s.salvage&&o&&(o.ult+=Math.round(s.salvage*e.drones));const c=e.capital&&n.sides[r]?.kind==="faction"&&!n.sides[r].broken;pf(n,e,a,i.surv);const l=t.specs.slice();wl(n,l,q.xpWin);for(const u of l){const f=n.specs[u];f.def==="captain"?vs(n,f):bi(n,f,e)}if(Qa(n,t),o){const u=ht(n,a);u.refund&&n.t>=o.refundT&&(e.drones+=i.sent-i.surv,o.refundT=n.t+u.refund,a===W&&Ze(n,"Phoenix Clause refunds your losses","good",e.id)),u.capShield&&(e.shields=u.capShield),u.capUlt&&(o.ult+=u.capUlt)}a===W?(n.stats.captures++,n.stats.dronesLost+=i.sent-i.surv,Ze(n,`Captured ${e.name} with ${i.surv} Drones left`,"good",e.id),Vc(n,l.includes(n.cmdSpec)?4:2),n.sides[r]&&(n.mob.prog=Math.max(0,n.mob.prog-q.captureSetback)),c&&fp(n,r,e),up(n,e),e.citadel&&(n.result="win",n.resultWhy=`${Qi[n.sides[n.archon].fac].name} is your prisoner. The Coalition is finished.`)):r===W&&(n.stats.nodesLost++,Ze(n,`${e.name} fell to ${Un(n,a)}`,"bad",e.id)),Ts(n)}function pp(n,e,t,i,s){const r=i.parts;n.sides[e.owner]&&wl(n,Kr(n,e),q.xpDefend),wl(n,t.specs,q.xpLose),e.drones=r.garr;let a=i.atk;const o=Math.min(e.shields,Math.max(0,a-0));e.shields-=Math.min(o,a),a-=r.shield,a-=r.dpow+r.ddef+r.aegis,e.drones-=Math.max(0,Math.min(e.drones,a));const c=n.sides[t.owner]?So(n,t.specs,"fail")[0]:null,l=c?Math.floor(r.drones/2):0;if(t.owner===W&&(Ze(n,`Attack on ${e.name} failed: ${i.atk} against ${i.def}${c?`. ${Yn(c)} pulls ${l} Drones out`:""}`,"bad",e.id),n.stats.dronesLost+=t.drones-l),e.owner===W&&Ze(n,`${e.name} held against ${Un(n,t.owner)} (${i.atk} against ${i.def})`,"good",e.id),t.drones=l,c){c.cd=n.t+xo(n,c);const u=n.nodes[t.from],f=u&&u.owner===t.owner?u:ar(n,t.owner);if(f){t.to=f.id,t.from=e.id,t.back=!0,t.x=e.x,t.y=e.y;return}}if(e.owner===0&&n.sides[t.owner]){const u=n.nodes[t.from],f=u&&u.owner===t.owner?u:ar(n,t.owner);if(f){t.to=f.id,t.from=e.id,t.back=!0,t.x=e.x,t.y=e.y;return}}kc(n,t,n.sides[e.owner]?e:null,e.owner)}function Ho(n,e){const t=n.nodes[e.to];if(e.x=t.x,e.y=t.y,e.missile){t.owner!==e.owner&&(t.shields=0,t.drones=Math.max(0,t.drones-q.missileKill),t.buffs.push({k:"noRegen",v:1,until:n.t+20}),(e.owner===W||t.owner===W)&&Ze(n,`Missile strike on ${t.name}: shields down, ${q.missileKill} Drones destroyed`,t.owner===W?"bad":"good",t.id)),Qa(n,e);return}if(e.lane&&t.owner===e.owner&&e.path&&e.path.length){const r=e.path[0];if(Fc(n,t.id,r)&&n.nodes[r].owner===e.owner){e.path.shift(),e.from=t.id,e.to=r;return}}if(t.owner===e.owner){t.drones+=e.drones;for(const r of e.specs.slice()){const a=n.specs[r];a.def==="captain"?vs(n,a):bi(n,a,t)}Qa(n,e);return}if(e.probe||e.drones<=0){e.owner===W&&e.probe&&(t.buffs.push({k:"scan",v:1,until:n.t+30}),Ts(n),Ze(n,`Probe identified ${t.name}`,"info",t.id)),kc(n,e,n.sides[t.owner]?t:null,t.owner);return}const i=Zr(n,e,"attack"),s=xs(n,e.owner,e.drones,e.specs,t,i);Dd(n,e.specs,"attack"),Dd(n,Kr(n,t),"defend"),e.owner===W&&n.stats.battles++,s.win?hp(n,t,e,s,i):pp(n,t,e,s)}function gf(n,e){if(e.missile)return q.fleetSpeed*q.missileSpeed;const t=Zr(n,e);return q.fleetSpeed*(e.lane?q.corridorSpeed*(1+(t.laneSpeed||0)):1)*Math.max(.3,1+(t.speed||0)+(e.speedUp||0))}const Bc=(n,e,t)=>ke(e,t)/gf(n,e);function zc(n,e,t,i){const s={id:n.nextId++,owner:e,home:t.id,slot:!1,from:t.id,to:i,x:t.x,y:t.y,drones:0,specs:[]};return n.fleets.push(s),s}function Eo(n,e,t){const i=_r(n,e.owner,t,[]),s=ln(n,e);return q.fleetSpeed*Math.max(.3,1+(i.speed||0)+(s.launchSpeed||0)+(e.spec==="bay"?q.baySpeed:0))}function es(n,e,t,i,s){const r=e.owner;if(!n.sides[r])return"Not your node";if(t.id===e.id)return"Already here";if(r===W&&!bo(n,t))return"Target is not in detection range";if(s=s.filter(f=>e.specs.includes(f)),s.length>lr(n,e))return`A fleet carries at most ${lr(n,e)} specialists`;i=Math.max(0,Math.min(e.drones,Math.floor(i)));const a=t.owner!==r,o=a&&!s.length;if(o&&i>0)return"An attack needs a specialist to lead it. Without one, send 0 Drones as a probe.";if(a&&!o&&i<1)return"An attack needs at least 1 Drone";if(a&&!o&&i>rr(n,s))return`This crew commands ${rr(n,s)} Drones. Add a specialist or send fewer.`;if(!a&&!i&&!s.length)return"Nothing to send";const l=!_r(n,r,s,[]).slotFree;if(l&&Vn(n,e)<1)return"No free launch slot here";const u=zc(n,r,e,t.id);u.slot=l,u.drones=i,u.probe=o,e.drones-=i,u.speedUp=(ln(n,e).launchSpeed||0)+(e.spec==="bay"?q.baySpeed:0);for(const f of s)af(n,n.specs[f],u);return null}function To(n,e,t,i,s){if(e.owner!==t.owner)return"Both ends must be yours";const r=Ja(n,e.id,t.id);if(!r)return"No corridor route to that node";if(i=Math.max(0,Math.min(e.drones,Math.floor(i))),s=s.filter(o=>e.specs.includes(o)),!i&&!s.length)return"Nothing to send";const a=zc(n,e.owner,e,r[0]);a.lane=!0,a.path=r.slice(1),a.drones=i,e.drones-=i;for(const o of s)af(n,n.specs[o],a);return null}function _f(n,e,t){const i=Ja(n,e.id,t.id);if(!i)return-1;let s=0,r=e;for(const a of i)s+=ke(r,n.nodes[a]),r=n.nodes[a];return s/(q.fleetSpeed*q.corridorSpeed*(1+(ht(n,e.owner).laneSpeed||0)))}function Ao(n,e,t,i=[]){const s=_f(n,e,t),a=Vn(n,e)>0||!!_r(n,e.owner,i,[]).slotFree?ke(e,t)/Eo(n,e,i):-1;return s>=0&&(a<0||s<=a)?{secs:s,via:"corridor"}:a>=0?{secs:a,via:"fleet"}:{secs:0,via:null}}function Gc(n,e,t){if(e.held)return{secs:0,via:null,why:"They are a prisoner"};if(e.node<0)return{secs:0,via:null,why:"Already travelling"};const i=n.nodes[e.node];if(t.owner!==e.owner)return{secs:0,via:null,why:"Only your own nodes"};if(t.id===i.id)return{secs:0,via:null,why:"Already there"};const s=Ao(n,i,t,[e.id]);return s.via?{...s,why:""}:{secs:0,via:null,why:`No free launch slot at ${i.name} and no corridor route`}}function mp(n,e,t){const i=Gc(n,e,t);if(!i.via)return i.why;const s=n.nodes[e.node];return i.via==="corridor"?To(n,s,t,0,[e.id]):es(n,s,t,0,[e.id])}function Ro(n,e,t){return e.spec!=="silo"||e.missile<1?"No missile ready":t.owner===e.owner?"Pick a node you do not own":ke(e,t)>q.missileRange?"Out of range":e.owner===W&&n.vis[t.id]<1?"Target is not in detection range":null}function vf(n,e,t){const i=Ro(n,e,t);if(i)return i;e.missile=0;const s=zc(n,e.owner,e,t.id);return s.missile=!0,null}const cr=(n,e)=>El(n,e);function Hc(n,e){let t=-1;for(const i of n.fleets)if(i.to===e.id&&i.owner!==e.owner&&!i.missile&&i.drones>0&&vr(n,i)){const s=Bc(n,i,e);(t<0||s<t)&&(t=s)}return t}function gp(n,e){let t=-1,i=1e9;for(const s of n.nodes){if(s.owner!==e.owner||!s.front)continue;const r=_f(n,e,s),a=r>=0?Math.min(r,ke(e,s)/q.fleetSpeed):ke(e,s)/q.fleetSpeed;a<i&&(i=a,t=s.id)}return t}function xf(n,e){const t=Hc(n,e),i=[];for(const s of n.nodes){if(s.owner!==e.owner||s.id===e.id||s.front)continue;const r=s.drones-cr(n,s);if(r<1)continue;const a=Ao(n,s,e);if(a.via){if(t>=0){if(a.secs>=t)continue}else if(e.front&&gp(n,s)!==e.id)continue;i.push({src:s,k:r,lane:a.via==="corridor",secs:a.secs})}}return i}function _p(n,e){e.front=!0;const t=xf(n,e);if(!t.length)return Hc(n,e)>=0?"No supply node can get Drones here in time":"No supply node has Drones to spare";for(const i of t)i.lane?To(n,i.src,e,i.k,[]):es(n,i.src,e,i.k,[]);return null}function vp(n){for(const e of n.nodes){if(e.owner!==W)continue;const t=cr(n,e)-e.drones-n.fleets.filter(s=>s.owner===W&&(s.to===e.id||s.path?.includes(e.id))).reduce((s,r)=>s+r.drones,0);if(t<=0)continue;const i=n.nodes.filter(s=>s.owner===W&&s.id!==e.id&&s.drones-cr(n,s)>=t&&(Ja(n,s.id,e.id)||Vn(n,s)>0)).sort((s,r)=>ke(s,e)-ke(r,e))[0];i&&(Ja(n,i.id,e.id)?To(n,i,e,t,[]):es(n,i,e,t,[]))}}function Vc(n,e){const t=n.specs[n.cmdSpec];if(!(!t||!t.cmd))for(t.cmd.xp+=e*(1+(ht(n,W).xp||0));t.cmd.lvl<5&&t.cmd.xp>=q.xpLevels[t.cmd.lvl];){t.cmd.lvl++,n.modV++;const i=Xi(n,sf.filter(s=>!t.cmd.perks.includes(s.id)),3).map(s=>s.id);n.pending.push({kind:"perk",node:-1,opts:i,title:`Commander reached level ${t.cmd.lvl}`}),Ze(n,`Your Commander reached level ${t.cmd.lvl}`,"good")}}function Wc(n,e){const t=new Set(n.specs.filter(s=>s.owner===W).map(s=>s.def)),i=Xi(n,Jh.filter(s=>!t.has(s)),3+(ht(n,W).offer||0));if(!i.length){n.sides[W].ult+=20;return}n.pending.push({kind:"spec",node:e,opts:i,title:e===n.home&&n.t<1?"Your first recruit":`Recruits at ${n.nodes[e].name}`})}function Sf(n,e,t){const i=n.sides[W].relics,s=o=>Object.values(In).filter(c=>c.rarity===o&&!i.includes(c.id)).map(c=>c.id),r=e==="rare"?"uncommon":"common";let a=Xi(n,s(e),e==="common"?3:2);if(a.length<3&&(a=a.concat(Xi(n,s(r).filter(o=>!a.includes(o)),3-a.length))),!a.length){n.sides[W].ult+=30;return}n.pending.push({kind:"relic",node:t,opts:a,title:"Choose a relic"})}function xp(n,e){const t=Ut[e].pre;return t?n.includes(t)||!!Ut[t].excl&&n.includes(Ut[t].excl):!0}function Sp(n,e){const t=n.sides[e].techs;return Object.keys(Ut).filter(i=>!t.includes(i)&&xp(t,i)&&!(Ut[i].excl&&t.includes(Ut[i].excl)))}const ja=(n,e)=>q.rpBase+q.rpStep*n.sides[e].techs.length;function Mf(n){const e=Xi(n,Sp(n,W),3);return e.length?(n.pending.push({kind:"tech",node:-1,opts:e,title:"Research complete: choose one"}),!0):!1}function $c(n,e,t){const i=n.sides[e];i.techs.includes(t)||(i.techs.push(t),n.modV++,e===W?(n.stats.techs++,Ze(n,`Researched ${Ut[t].name}`,"good")):Ze(n,`${Un(n,e)} fielded ${Ut[t].name}`,"warn"))}function yf(n,e,t){const i=n.sides[W];for(const s of t)switch(s[0]){case"ult":i.ult+=s[1];break;case"drones":e.drones+=s[1];break;case"relic":Sf(n,s[1],e.id);break;case"tech":Mf(n)||(i.ult+=30);break;case"spec":Wc(n,e.id);break;case"xp":Vc(n,s[1]);break;case"shield":e.sh<3?e.sh++:i.ult+=20;break;case"buff":e.buffs.push({k:s[1],v:s[2],until:n.t+s[3]}),n.modV++;break;case"mobil":n.mob.prog=Math.max(0,Math.min(.99,n.mob.prog+s[1]));break;case"hold":e.hold={until:n.t+s[1],total:s[1],need:s[2],fx:s[3],name:e.event?Xn[e.event].name:"Operation"};break;case"reveal":for(const r of n.nodes)ke(r,e)<=s[1]&&r.buffs.push({k:"scan",v:1,until:n.t+45});Ts(n);break;case"ambush":{const r=Wt(n)*Math.PI*2;n.fleets.push({id:n.nextId++,owner:0,home:-1,slot:!1,from:e.id,to:e.id,x:e.x+Math.cos(r)*48,y:e.y+Math.sin(r)*48,drones:s[1],specs:[],off:!0}),Ze(n,`Automata are closing on ${e.name} with ${s[1]} Drones`,"warn",e.id);break}}}function bf(n,e,t){return t.ult&&n.sides[W].ult<t.ult?"Not enough Ultanium":t.drones&&e.drones<t.drones?"Not enough Drones here":t.req&&!e.specs.some(i=>n.specs[i].def===t.req&&n.specs[i].owner===W)?`Needs your ${nt[t.req].name} at this node`:null}function Mp(n,e){const t=n.pending[0];if(!t)return"Nothing to choose";const i=n.sides[W];if(t.kind==="event"){const r=n.nodes[t.node],a=Xn[t.event];if(e<0||r.owner!==W||r.event!==t.event)return n.pending.shift(),null;const o=a.choices[e],c=bf(n,r,o);return c||(o.ult&&(i.ult-=o.ult),o.drones&&(r.drones-=o.drones),n.pending.shift(),yf(n,r,o.fx),r.event=null,n.stats.events++,Ze(n,`${a.name}: ${o.label}`,"info",r.id),r.kind==="station"&&yp(n,r.id),null)}if(t.kind==="lore")return n.pending.shift(),null;if(t.kind==="terms")return n.pending.shift(),e===0?(n.result="win",n.resultWhy=`Decisive victory. ${Qi[n.sides[n.archon].fac].name} accepts your terms, and the Reach is free of the Coalition.`):Ze(n,"You refuse terms. The Citadel must fall.","warn",n.citadel),null;if(t.kind==="spec"&&e<0)return n.pending.shift(),null;const s=t.opts[e];if(s===void 0)return"Pick one";if(n.pending.shift(),t.kind==="draft"){const r=qi(n,s.base,W,n.home);r.cmd={base:s.base,arch:s.arch,lvl:1,xp:0,perks:[]},r.name="Commander",n.cmdSpec=r.id,Wc(n,n.home)}else if(t.kind==="spec"){const r=n.nodes[t.node].owner===W?n.nodes[t.node]:ar(n,W);if(r){const a=qi(n,s,W,r.id);ht(n,W).recruitUp&&(a.lvl=3,a.xp=q.specXp[3]),Ze(n,`${Yn(a)} joined at ${r.name}`,"good",r.id),n.stats.specs++}}else t.kind==="relic"?(i.relics.push(s),n.stats.relics++,Ze(n,`Relic claimed: ${In[s].name}`,"good")):t.kind==="perk"?n.specs[n.cmdSpec].cmd.perks.push(s):t.kind==="tech"&&$c(n,W,s);return n.modV++,null}function yp(n,e){const t=n.loreQueue.find(i=>!n.lore.includes(i));t&&(n.lore.push(t),n.pending.push({kind:"lore",node:e,opts:[t],title:"Archive fragment recovered"}))}function bp(n,e,t){if(e.held!==W||e.node<0)return"Not your prisoner";const i=n.sides[W],s=ht(n,W);if(e.def==="warlord"||e.def==="archon")return"Leaders cannot be ransomed or recruited";if(t){if(e.def==="captain")return"Captains cannot be recruited";if(n.specs.some(o=>o.owner===W&&o.def===e.def))return`You already have a ${nt[e.def].name}`;const a=s.recruitFree?0:q.recruitCost;return i.ult<a?"Not enough Ultanium":(i.ult-=a,e.owner=W,e.cd=0,bi(n,e,n.nodes[e.node]),n.stats.specs++,Ze(n,`${Yn(e)} now works for you`,"good",e.node),null)}return i.ult+=Math.round(q.ransom*(1+(s.ransom||0))),vs(n,e),null}const wf=n=>q.rescueSecs+(ht(n,W).rescue||0),Xc=n=>n.upk+q.upkeepDrone<=n.inc*(n.kind==="player"?q.armyShare:1),Ef=(n,e,t)=>Math.max(2,q.prodSecs[e.lv]-((t||ln(n,e)).prodSecs||0));function wp(n){const e=q.dt;if(n.t+=e,n.tick++,n.tick%10===1)for(const s in n.sides){const r=lf(n,+s),a=n.sides[s];a.inc=r.inc,a.upk=r.upk,a.net=r.net,a.rpm=r.rpm}for(const s of n.nodes){s.buffs.length&&s.buffs.some(u=>u.until<=n.t)&&(s.buffs=s.buffs.filter(u=>u.until>n.t),n.modV++);const r=n.sides[s.owner],a=r?ln(n,s):{},o=Uc(n,s,a);if(s.shields<o&&!a.noRegen?s.shields=Math.min(o,s.shields+e*(1+(a.regen||0))/q.shieldRegenSecs):s.shields>o&&!a.capHold&&(s.shields=Math.max(o,s.shields-e/10)),!r)continue;const c=s.queue[0];c&&(c.left-=e*(1+(a.build||0)),c.left<=0&&(s.queue.shift(),op(n,s,c)));const l=()=>{s.drones++,r.net-=q.upkeepDrone,r.upk+=q.upkeepDrone,s.owner===W&&n.stats.dronesMade++};if(r.produce&&Xc(r)&&(s.kind==="station"&&(s.prod+=e,s.prod>=Ef(n,s,a)&&(s.prod=0,l())),a.train&&(s.trainT+=e*a.train/60,s.trainT>=1&&(s.trainT-=1,l()))),s.dest){const u=ke(s,s.dest),f=q.flagshipSpeed*e;n.corridors.some(h=>h.a===s.id||h.b===s.id)&&(n.corridors=n.corridors.filter(h=>h.a!==s.id&&h.b!==s.id)),u<=f?(s.x=s.dest.x,s.y=s.dest.y,s.dest=null,s.owner===W&&Ze(n,`${s.name} has dropped anchor`,"info",s.id)):(s.x+=(s.dest.x-s.x)/u*f,s.y+=(s.dest.y-s.y)/u*f)}if(s.hold&&n.t>=s.hold.until){const u=s.hold;s.hold=null,s.drones>=u.need?(Ze(n,`${u.name} complete at ${s.name}`,"good",s.id),yf(n,s,u.fx)):Ze(n,`${u.name} failed at ${s.name}: fewer than ${u.need} Drones on site`,"bad",s.id)}}for(const s in n.sides){const r=n.sides[s];if(r.ult+=r.net*e/60,r.kind==="player"&&(n.stats.ultMade+=r.inc*e/60,r.rp+=r.rpm*e/60),r.ult<0&&(r.ult=0,r.desertT+=e,r.desertT>=q.desertSecs)){r.desertT=0;const a=n.nodes.filter(o=>o.owner===+s&&o.drones>0).sort((o,c)=>c.drones-o.drones)[0];a&&(a.drones--,r.net+=q.upkeepDrone,r.kind==="player"&&n.tick%300<40&&Ze(n,"You cannot pay your Drones: they are deserting","bad",a.id))}}const t=n.sides[W];if(t.rp>=ja(n,W)&&!n.pending.some(s=>s.kind==="tech")){const s=ja(n,W);Mf(n)?t.rp-=s:t.rp=s}for(const s of n.fleets.slice()){const r=n.nodes[s.to],a=ke(s,r),o=gf(n,s)*e,c=!s.missile&&!s.lane&&!s.probe&&s.drones>0&&r.owner!==s.owner;if(s.fight!==void 0){if(!c){delete s.fight,Ho(n,s);continue}s.fight-=e,s.fight<=0&&(delete s.fight,Ho(n,s));continue}if(c&&a<=o+q.engageDist){const l=Math.max(0,a-q.engageDist)/Math.max(a,.001);s.x+=(r.x-s.x)*l,s.y+=(r.y-s.y)*l,s.fight=q.fightSecs;continue}a<=o?Ho(n,s):(s.x+=(r.x-s.x)/a*o,s.y+=(r.y-s.y)/a*o)}n.tick%20===0&&vp(n);const i=n.specs[n.cmdSpec];i&&(i.owner!==W?(n.result="lose",n.resultWhy="Your Commander was lost."):i.held?n.cmdLostT<0?(n.cmdLostT=n.t,Ze(n,`YOUR COMMANDER IS A PRISONER at ${n.nodes[i.node].name}. Retake it before the window closes.`,"bad",i.node)):n.t-n.cmdLostT>=wf(n)&&(n.result="lose",n.resultWhy=`Your Commander was not recovered from ${n.nodes[i.node].name} in time.`):n.cmdLostT=-1,!n.result&&!n.nodes.some(s=>s.owner===W)&&(n.result="lose",n.resultWhy="You hold no territory.")),n.tick%3===0&&Ts(n)}const qc="spacenodes.tune.v2",Ep=JSON.parse(JSON.stringify(q)),js=q,Ld={fleetSpeed:"Map units per second",startUlt:"Starting Ultanium",startDrones:"Starting Drones",baseIncome:"Free Ultanium per minute",freeBase:"Drones that cost no upkeep",mineOut:"Ultanium/min by mine level (0,1,2,3)",sizeMult:"Planet size multiplier (small, medium, large)",refineryMult:"Refinery output multiplier",labRp:"Research per minute per Lab",labWorkers:"Extra Drones a Lab needs",supplyFree:"Drones a Supply world feeds",upkeepDrone:"Ultanium/min per Drone",upkeepPower:"Ultanium/min per point of specialist Power",depotMult:"Upkeep multiplier for Drones in a Depot",armyShare:"Stations stop building when upkeep reaches this share of income",desertSecs:"Seconds per deserting Drone when broke",lvCost:"Cost to reach level (-, -, 2, 3)",lvTime:"Seconds per level upgrade",shCost:"Cost to reach shield level (-, 1, 2, 3)",shTime:"Seconds per shield upgrade",specCost:"Specialty cost",specTime:"Specialty build seconds",missileCost:"Missile cost",missileTime:"Missile build seconds",missileRange:"Missile reach",missileKill:"Drones a missile destroys",missileSpeed:"Missile speed multiplier",prodSecs:"Seconds per Drone by Barracks level (-, 1, 2, 3)",shieldPerLv:"Shield per shield level",shieldRegenSecs:"Seconds per shield point recharged",slotsStation:"Launch slots per station",slotsPlanet:"Launch slots per planet",crew:"Specialists per fleet",baySpeed:"Launch Bay speed bonus",bayCrew:"Launch Bay extra crew",rallyBatch:"Spare Drones before a rally convoy leaves",fleetFov:"Fleet vision: full intelligence, detection",fovInner:"Node full-intelligence radius",fovOuter:"Node detection radius",corridorCost:"Corridor cost",corridorTime:"Corridor build seconds",corridorRange:"Corridor reach",corridorMax:"Corridors per node",corridorSpeed:"Convoy speed multiplier",rescueSecs:"Commander rescue window",ransom:"Ultanium per ransom",recruitCost:"Cost to recruit a prisoner",rpBase:"Research needed for the first choice",rpStep:"Extra research per technology known",xpLevels:"Commander experience per level",nodes:"Nodes on the map (next run)",neutralShield:"Shield level on neutral planets by size (next run)",stageSecs:"Seconds per mobilization stage",graceSecs:"Seconds before the first offensive",offInterval:"Seconds between offensives, by stage",offCommit:"Share of Drones sent on offensives, by stage",gatherSecs:"Seconds an offensive gathers",stageFree:"Reserve Drones each faction gains per stage",surgeFree:"Reserve Drones per total-war surge",captureSetback:"Mobilization lost per enemy node captured",aegisPerLayer:"Citadel Aegis per unbroken faction"};function Oa(){try{return JSON.parse(localStorage.getItem(qc)||"{}")}catch{return{}}}function Id(n){try{localStorage.setItem(qc,JSON.stringify(n))}catch{}}function Tf(n,e){const t=js[n];Array.isArray(t)&&Array.isArray(e)?(t.length=0,t.push(...e)):t&&typeof t=="object"&&e&&typeof e=="object"?Object.assign(t,e):js[n]=e}function Tp(){const n=Oa();for(const e in n)e in js&&Tf(e,n[e])}const Vo=n=>Array.isArray(n)?n.join(", "):n&&typeof n=="object"?JSON.stringify(n):String(n);function Ap(n,e){return Array.isArray(e)?n.split(/[,\s]+/).filter(Boolean).map(Number):e&&typeof e=="object"?JSON.parse(n):Number(n)}const Rp=n=>Array.isArray(n)?n.length>0&&n.every(e=>Number.isFinite(e)):typeof n=="number"?Number.isFinite(n):n!==null&&typeof n=="object";function Cp(n){const e=document.createElement("div");e.id="console",document.body.appendChild(e);let t="values",i="";const s=["Type help for commands."];function r(){const l=Oa(),u=i.toLowerCase();let f="";if(t==="values")for(const m of Object.keys(q))m==="dt"||u&&!(m+(Ld[m]||"")).toLowerCase().includes(u)||(f+=`<label class="crow ${Vo(js[m])!==Vo(Ep[m])?"changed":""}"><span><b>${m}</b><small>${Ld[m]||""}</small></span><input data-k="${m}" value='${Vo(js[m])}'></label>`);else f=`<div class="cout">${s.slice(-60).map(m=>`<div>${m.replace(/</g,"&lt;")}</div>`).join("")}</div><input id="ccmd" placeholder="command, e.g. ult 500" autocomplete="off">`;const h=Object.keys(l).length;e.innerHTML=`<div class="chead"><b>Tuning console</b><small>${h} change${h===1?"":"s"} saved in this browser</small><button data-c="close">✕</button></div>
      <div class="ctabs">${["values","commands"].map(m=>`<button data-c="tab:${m}" class="${t===m?"on":""}">${m}</button>`).join("")}</div>
      ${t==="values"?`<input id="cfilter" placeholder="filter" value="${i}">`:""}
      <div class="cbody">${f}</div>
      <div class="cfoot"><button data-c="export">Copy changes</button><button data-c="import">Paste changes</button><button data-c="reset">Reset all</button></div>
      <p class="dim">Most values apply at once. Map values (node count, neutral shields) apply to the next new run.</p>`,t==="commands"&&e.querySelector("#ccmd")?.focus()}function a(l){const u=Oa(),f=l.dataset.k;try{const h=Ap(l.value,js[f]);if(!Rp(h))throw 0;Tf(f,h),u[f]=h,Id(u),n.refresh(),r()}catch{l.classList.add("bad")}}function o(l){const[u,...f]=l.trim().split(/\s+/),h=n.game(),m=f[0]!==void 0?Number(f[0]):NaN,_=n.selected();s.push(`> ${l}`);const x=p=>s.push(p);if(u==="help"||!u){x("ult N · drones N (selected node) · econ · reveal · stage N · mob 0-1 · rp N · tech ID · relic ID · spec ID · upgrade (all specialists) · win · speed N · list specs|relics|techs");return}if(u==="list"){x((f[0]==="relics"?Object.keys(In):f[0]==="techs"?Object.keys(Ut):Object.keys(nt)).join(" "));return}if(u==="speed"){n.setSpeed(Math.max(1,Math.min(32,m||1))),x(`speed ${m}x`);return}if(!h){x("Start a run first.");return}const d=h.sides[W];switch(u){case"ult":d.ult+=m||0,x(`Ultanium ${Math.floor(d.ult)}`);break;case"drones":_<0||h.nodes[_].owner!==W?x("Select one of your nodes first"):(h.nodes[_].drones+=m||0,x(`${h.nodes[_].name}: ${h.nodes[_].drones} Drones`));break;case"econ":{const p=lf(h,W);x(`income ${p.inc.toFixed(1)} · upkeep ${p.upk.toFixed(1)} (specialists ${p.specUp.toFixed(1)}) · Drones ${p.drones}, ${p.free} free · research ${p.rpm.toFixed(1)}/min`);break}case"reveal":for(const p of h.nodes)p.buffs.push({k:"scan",v:1,until:h.t+120});Ts(h),x("Whole map identified for 2 minutes");break;case"stage":h.mob.stage=Math.max(1,Math.min(5,m||1)),h.mob.prog=0,x(`Mobilization stage ${h.mob.stage}`);break;case"mob":h.mob.prog=Math.max(0,Math.min(.99,m||0)),x(`Mobilization progress ${h.mob.prog}`);break;case"rp":d.rp+=m||0,x(`Research points ${d.rp.toFixed(0)}`);break;case"tech":Ut[f[0]]?($c(h,W,f[0]),x(`Granted ${Ut[f[0]].name}`)):x("Unknown technology");break;case"relic":In[f[0]]?(d.relics.push(f[0]),h.modV++,x(`Relic ${In[f[0]].name}`)):x("Unknown relic");break;case"spec":{const p=_>=0&&h.nodes[_].owner===W?_:h.home;nt[f[0]]?(qi(h,f[0],W,p),x(`${nt[f[0]].name} at ${h.nodes[p].name}`)):x("Unknown specialist");break}case"upgrade":for(const p of h.specs)p.owner===W&&!p.cmd&&(p.lvl=5,p.xp=q.specXp[5]);h.modV++,x("Every specialist is level 5");break;case"win":h.result="win",h.resultWhy="Console.";break;default:x("Unknown command. Type help.")}n.refresh()}e.addEventListener("click",l=>{const u=l.target.closest("[data-c]");if(!u)return;const[f,h]=u.dataset.c.split(":");if(f==="close")c(!1);else if(f==="tab")t=h,r();else if(f==="export"){const m=JSON.stringify(Oa(),null,1);navigator.clipboard?.writeText(m).catch(()=>{}),s.push("Changes copied to the clipboard:",m),t="commands",r()}else if(f==="import"){const m=prompt("Paste tuning JSON");if(m)try{Id(JSON.parse(m)),location.reload()}catch{alert("That is not valid JSON")}}else f==="reset"&&confirm("Reset every tuned value to the default? The page reloads.")&&(localStorage.removeItem(qc),location.reload())}),e.addEventListener("change",l=>{const u=l.target;u.dataset.k&&a(u)}),e.addEventListener("input",l=>{const u=l.target;if(u.id==="cfilter"){i=u.value;const f=u.selectionStart;r();const h=e.querySelector("#cfilter");h.focus(),h.setSelectionRange(f,f)}}),e.addEventListener("keydown",l=>{l.stopPropagation();const u=l.target;l.key==="Enter"&&u.id==="ccmd"?(o(u.value),r()):l.key==="Enter"&&u.dataset.k?a(u):(l.key==="`"||l.key==="Escape")&&(l.preventDefault(),c(!1))});function c(l){const u=l??!e.classList.contains("open");e.classList.toggle("open",u),u&&r()}return document.addEventListener("keydown",l=>{(l.key==="`"||l.key==="F2")&&!l.target.closest("input,textarea")&&(l.preventDefault(),c())}),{toggle:c}}const Pp=["Kestrel","Bastille","Harrow","Vigil","Anchor","Lantern","Marrow","Cinder","Tether","Gantry","Rook","Ward","Halcyon","Talon","Spindle","Ember","Quarry","Beacon","Keel","Sable"],Dp=["Ka","Ve","Or","Tal","Mi","Sen","Dra","Ul","Phe","Ny","Cor","Az","Lo","Ery","Bri","Zan","Hel","Qua","Io","Xe"],Lp=["ris","dan","thos","mir","vek","lun","tar","ion","sha","bor","nea","rax","phi","dor","lys","gan","tis","mon","rae","kai"];function Wo(n,e,t,i){return{owner:n,kind:e,fac:t,ult:i,techs:[],relics:[],produce:!0,rp:0,free:0,net:0,inc:0,upk:0,rpm:0,broken:!1,aiT:6+n*2,expT:60+n*15,desertT:0,refundT:0}}function Ip(n,e=0,t=[]){const r={v:2,seed:n,rng:n|0,t:0,tick:0,modV:1,threat:e,w:430,h:290,nodes:[],fleets:[],specs:[],corridors:[],sides:{},factions:[2,3,4],archon:5,mob:{stage:1,prog:0,nextOff:q.graceSecs,turn:0,surge:0},offs:[],pending:[],log:[],cmdSpec:-1,cmdLostT:-1,intel:[],vis:[],result:null,resultWhy:"",stats:{captures:0,nodesLost:0,battles:0,dronesLost:0,dronesMade:0,specs:0,specsLost:0,relics:0,techs:0,events:0,warlords:0,ultMade:0},nextId:1,home:0,citadel:1,terms:!1,lore:[],loreQueue:[]};for(let A=0;A<5;A++)Wt(r);const a=[{x:xn(r,36,50),y:xn(r,290*.35,290*.65),region:W},{x:430-xn(r,36,50),y:xn(r,290*.35,290*.65),region:5}];for(let A=0;A<8e3&&a.length<q.nodes;A++){const C={x:xn(r,22,408),y:xn(r,22,268),region:0};a.every(U=>ke(C,U)>=34)&&a.push(C)}const o=a[0],c=a[1],l=()=>a.filter(A=>A.region===0),u=(A,C)=>C.slice().sort((U,I)=>ke(U,A)-ke(I,A));for(const A of u(c,l()).slice(0,2))ke(A,c)<90&&(A.region=5);const f=Ws(r,[.18,.82]),h=[{x:.52,y:.5},{x:.6,y:f[0]},{x:.6,y:f[1]}],m=[];for(const A of[2,1,0]){const C={x:h[A].x*430+xn(r,-12,12),y:h[A].y*290+xn(r,-12,12)},U=u(C,l().filter(I=>ke(I,o)>120))[0];U.region=2+A,m[A]=U;for(const I of u(U,l().filter(L=>ke(L,o)>95)).slice(0,3))ke(I,U)<90&&(I.region=2+A)}const _=Xi(r,Object.keys($n),3);r.sides[W]=Wo(W,"player","",q.startUlt),_.forEach((A,C)=>r.sides[2+C]=Wo(2+C,"faction",A,20)),r.sides[5]=Wo(5,"archon",Cr(r,Object.keys(Qi)),30);const x=ke(o,c),d=u(o,l()),p=new Set,v=()=>{for(;;){const A=Cr(r,Dp)+Cr(r,Lp);if(!p.has(A))return p.add(A),A}};let w=[];const M=A=>{w.length||(w=Ws(r,Object.keys(Xn)));const C=w.findIndex(U=>Xn[U].on==="any"||Xn[U].on===A);return C<0?null:w.splice(C,1)[0]},E=1+.1*e;a.forEach((A,C)=>{const U=Math.max(0,Math.min(1,ke(A,o)/x+xn(r,-.12,.12))),I={id:C,name:v(),kind:"planet",x:A.x,y:A.y,size:0,owner:A.region,region:A.region,threat:U,drones:0,shields:0,lv:1,sh:0,spec:"",queue:[],prod:0,missile:0,specs:[],prisoners:[],buffs:[],event:null,offer:!1,hold:null,front:!1,trainT:0,capT:-999,capital:!1,citadel:!1,home:!1},L=Wt(r);I.size=L<.35?0:L<.8?1:2;const k=r.sides[A.region]?.kind==="faction"?$n[r.sides[A.region].fac]:null;if(A===o)I.kind="station",I.home=!0,I.drones=q.startDrones,I.name="Haven",I.sh=1;else if(A===c)I.kind="station",I.citadel=!0,I.name="The Citadel",I.drones=Math.round(16*E),I.lv=3,I.sh=3,I.spec="fortress";else if(A.region===0){const $=d.indexOf(A);I.owner=0,I.kind=$<2?"planet":$===2?"station":Wt(r)<.58?"planet":"station",$===0&&(I.size=0),$===1&&(I.size=1);const z=$<=2||ke(A,o)<70;I.drones=z?Fa(r,0,1):Math.round((U*8*xn(r,.6,1.3)+1)*E),I.sh=I.kind==="planet"?q.neutralShield[I.size]:1,I.offer=I.kind==="planet"||Wt(r)<.5,$>1&&(I.kind==="station"?Wt(r)<.85:Wt(r)<.25)&&(I.event=M(I.kind))}else{const $=m.includes(A);I.capital=$,I.kind=$?"station":Wt(r)<.55?"planet":"station",I.drones=Math.round(($?9+U*5:3+U*5*xn(r,.7,1.2))*E),A.region===5?(I.drones=Math.round(Fa(r,6,9)*E),I.sh=2,I.lv=2):(I.sh=Math.min(3,(k?k.ai.shield:1)-($?0:1)+(Wt(r)<.4?1:0)),$&&(I.lv=2,I.sh=Math.max(2,I.sh))),I.sh=Math.max(0,I.sh),k&&Wt(r)<.6&&(I.spec=I.kind==="planet"?k.ai.planet:k.ai.station)}I.kind==="station"&&!I.home&&!I.citadel&&(I.name=`${Cr(r,Pp)}-${Fa(r,2,99)}`),I.shields=I.sh*q.shieldPerLv,r.nodes.push(I),r.intel.push({seen:0,t:0,snap:null}),r.vis.push(0)});for(const A of r.factions){const C=$n[r.sides[A].fac],U=r.nodes.filter(k=>k.owner===A),I=U.find(k=>k.capital);I.name=C.name.split(" ")[0]+" Prime",qi(r,"warlord",A,I.id).name=C.warlord;const L=[I,I,Ws(r,U.filter(k=>!k.capital))[0]||I];C.specs.forEach((k,$)=>qi(r,k,A,L[$].id)),r.sides[A].free=U.reduce((k,$)=>k+$.drones,0)+4}const T=Qi[r.sides[5].fac];qi(r,"archon",5,1).name=`${T.name} ${T.title}`,r.sides[5].free=r.nodes.filter(A=>A.owner===5).reduce((A,C)=>A+C.drones,0)+6;const g=_s.map(A=>A.id);r.loreQueue=Ws(r,g.filter(A=>!t.includes(A))).concat(Ws(r,g.filter(A=>t.includes(A))));const b=Xi(r,Qh,3),D=Xi(r,Object.keys(is),3);return r.pending.push({kind:"draft",node:0,opts:b.map((A,C)=>({base:A,arch:D[C]})),title:"Choose your Commander"}),Ts(r),r}const Np={aggr:1,expand:1e9,react:.9,target:"weak",shield:3,planet:"refinery",station:"fortress"},Af=(n,e)=>n.sides[e].kind==="faction"?$n[n.sides[e].fac].ai:Np,Al=(n,e)=>xs(n,0,0,[],e,{}).def+(e.owner===W&&ln(n,e).mask?12:0);function Up(n,e){return 2+3*e.specs.length+(e.specs.includes(n.cmdSpec)?6:0)+(e.spec?2:0)+e.lv+.5*e.sh+1.5*Gr(n,e.id).length+(e.home?4:0)+(e.flagship?6:0)+(e.kind==="station"?1:0)}const Nd=n=>vo(n,{def:"captain"},n.mob.stage);function Rl(n,e,t,i){const s=Math.max(1,Math.min(lr(n,e),Math.ceil(i/Nd(n))));i=Math.min(i,s*Nd(n));const r=Array.from({length:s},()=>qi(n,"captain",e.owner,e.id));if(es(n,e,t,i,r.map(o=>o.id))){for(const o of r)e.specs=e.specs.filter(c=>c!==o.id),o.owner=-1,o.node=-1;return!1}return!0}function Fp(n,e){const t=n.sides[e],i=Af(n,e),s=n.nodes.filter(a=>a.owner===e);if(!s.length||t.broken)return;for(const a of s)if(!a.queue.length){if(a.spec==="silo"&&!a.missile&&!Mi(n,a,"missile")){Pr(n,a,"missile");continue}Wt(n)>.35||(a.sh<Math.min(3,i.shield)&&!Mi(n,a,"sh")?Pr(n,a,"sh"):!a.spec&&!Mi(n,a,"spec",a.kind==="planet"?i.planet:i.station)?Pr(n,a,"spec",a.kind==="planet"?i.planet:i.station):a.lv<3&&!Mi(n,a,"lv")&&Pr(n,a,"lv"))}for(const a of n.fleets){if(a.owner!==W||a.drones<=0||a.noticed||a.lane)continue;const o=n.nodes[a.to];if(o.owner!==e||(a.noticed=!0,Zr(n,a).stealth||Wt(n)>i.react))continue;const c=Bc(n,a,o),l=s.filter(u=>u.id!==o.id&&u.drones>4&&Vn(n,u)>0&&ke(u,o)/q.fleetSpeed+1<c).sort((u,f)=>f.drones-u.drones)[0];l&&es(n,l,o,Math.floor((l.drones-2)*.6),[])}const r=s.filter(a=>!a.capital&&a.drones<2+Math.round(a.threat*3)).sort((a,o)=>a.drones-o.drones)[0];if(r){const a=s.filter(o=>o.id!==r.id&&o.drones>8&&Vn(n,o)>0).sort((o,c)=>ke(o,r)-ke(c,r))[0];a&&es(n,a,r,Math.min(4,Math.floor((a.drones-5)/2)+1),[])}if(t.kind==="faction"&&n.mob.stage>=2&&n.t>=(t.counterT||0)){let a=null;for(const o of n.nodes){if(o.owner!==W||n.t-o.capT>q.counterWindow)continue;const c=Al(n,o)+2;for(const l of s)Vn(n,l)<1||ke(l,o)>160||l.drones-3<c||(!a||ke(l,o)<ke(a.src,a.tgt))&&(a={src:l,tgt:o,need:c})}a&&Rl(n,a.src,a.tgt,Math.min(a.src.drones-3,a.need+2))&&(t.counterT=n.t+q.counterSecs,Ze(n,`${Un(n,e)} counterattacks ${a.tgt.name}`,"warn",a.tgt.id))}if(n.t>=t.expT&&t.kind==="faction"){let a=null;for(const o of s)if(!(Vn(n,o)<1))for(const c of n.nodes){if(c.owner!==0)continue;const l=ke(o,c);if(l>115)continue;const u=Al(n,c)+1;o.drones-2>=u&&(!a||l<a.d)&&(a={src:o,tgt:c,need:u,d:l})}a&&Rl(n,a.src,a.tgt,a.need+Fa(n,0,1))&&(t.expT=n.t+i.expand*xn(n,.8,1.2))}}function Op(n,e){const t=Af(n,e),i=n.nodes.filter(m=>m.owner===e),s=n.nodes.filter(m=>m.owner===W);if(!i.length||!s.length)return;let r=null,a=1e9;for(const m of s){if(n.offs.some(v=>v.target===m.id))continue;const _=Math.min(...i.map(v=>ke(v,m))),x=Al(n,m),d=Math.pow(Up(n,m)*(t.target==="spec"?1+m.specs.length:1),Math.min(1,n.mob.stage/3)),p=(x+4)/d*(t.target==="near"?4:10)+_*(t.target==="near"?.6:.3);p<a&&(a=p,r=m)}if(!r)return;const o=r,c=i.slice().sort((m,_)=>ke(m,o)-ke(_,o))[0],l=Math.min(.95,q.offCommit[n.mob.stage]*(1+(ht(n,n.archon).offBig||0))*(.7+.3*t.aggr)),u=i.filter(m=>m.id!==c.id&&m.drones>=4&&Vn(n,m)>0&&ke(m,c)<190).sort((m,_)=>ke(m,c)-ke(_,c)).slice(0,1+n.mob.stage+n.mob.surge);let f=q.gatherSecs;for(const m of u){const _=m.capital||m.citadel?Math.max(5,Math.floor(m.drones*.4)):2,x=Math.floor((m.drones-_)*l);x>0&&!es(n,m,c,x,[])&&(f=Math.max(f,ke(m,c)/q.fleetSpeed+5))}const h=(ht(n,W).warn||0)>0;n.offs.push({owner:e,target:o.id,staging:c.id,launchT:n.t+f,warned:h}),Ze(n,h?`${Un(n,e)} is massing at ${c.name} to strike ${o.name}`:`${Un(n,e)} is mobilizing for an offensive`,"warn",h?o.id:-1)}function kp(n,e){const t=n.nodes[e.staging];if(t.owner!==e.owner||n.sides[e.owner].broken)return;let i=n.nodes[e.target];if(i.owner!==W){const o=n.nodes.filter(c=>c.owner===W).sort((c,l)=>ke(c,t)-ke(l,t))[0];if(!o)return;i=o}const s=n.nodes.find(o=>o.owner===e.owner&&!Ro(n,o,i));s&&vf(n,s,i);const r=t.capital||t.citadel?Math.max(5,Math.floor(t.drones*.4)):2,a=t.drones-r;a<3||Rl(n,t,i,a)}function Bp(n){const e=n.mob,t=q.stageSecs*(1-.05*n.threat);if(e.prog+=q.dt/t*Math.max(.3,1-(ht(n,W).mobSlow||0)),e.prog>=1)if(e.prog=0,e.stage>=5){e.surge++;for(const i of[...n.factions,n.archon])n.sides[i].broken||(n.sides[i].free+=q.surgeFree);Ze(n,`Total war: Coalition reserves deepen (surge ${e.surge}). Every faction can field more Drones.`,"warn")}else{e.stage++,Ze(n,`Coalition mobilization reached stage ${e.stage}. Offensives grow larger and more frequent.`,"warn");for(const i of[...n.factions,n.archon]){const s=n.sides[i];if(s.broken||(s.free+=q.stageFree,s.kind!=="faction"))continue;const r=$n[s.fac].techs.filter(a=>!s.techs.includes(a));for(const a of r.slice(0,s.fac==="lumen"?2:1))$c(n,i,a)}}if(n.t>=e.nextOff){const i=n.factions.filter(r=>!n.sides[r].broken&&n.nodes.some(a=>a.owner===r));(e.stage>=4||!i.length)&&i.push(n.archon);const s=Math.min(i.length,e.stage>=4?3:e.stage>=3?2:1);for(let r=0;r<s;r++)Op(n,i[(e.turn+r)%i.length]);e.turn++,e.nextOff=n.t+q.offInterval[e.stage]*xn(n,.85,1.15)/(1+.04*n.threat)/(1+.15*e.surge)}if(n.offs.length){const i=n.offs.filter(s=>n.t>=s.launchT);if(i.length){n.offs=n.offs.filter(s=>n.t<s.launchT);for(const s of i)kp(n,s)}}}function zp(n){const e=Qs(n,W);if(n.t<600||e<30)return;for(const i of n.factions)n.sides[i].broken||!n.nodes.some(r=>r.owner===i)||Qs(n,i)<q.surrender*e&&mf(n,i,`The ${Un(n,i)} lays down its arms.`);const t=[...n.factions,n.archon].reduce((i,s)=>i+Qs(n,s),0);!n.terms&&(n.factions.every(i=>n.sides[i].broken)||t<q.terms*e)&&(n.terms=!0,n.pending.push({kind:"terms",node:n.citadel,opts:[0,1],title:`${Un(n,n.archon)} sues for peace`}))}function Gp(n){Bp(n),n.tick%50===0&&zp(n);for(const e of[...n.factions,n.archon]){const t=n.sides[e];n.t>=t.aiT&&(t.aiT=n.t+8+Wt(n)*4,Fp(n,e))}}function Hp(n){return n.result||n.pending.length?!1:(wp(n),n.result||Gp(n),!0)}function Vp(n,e){if(n.result)return"The run is over";const t=s=>{const r=n.nodes[s];return r&&r.owner===W?r:null},i=s=>{const r=n.specs[s];return r&&r.owner===W?r:null};switch(e.c){case"up":{const s=t(e.node);return s?Pr(n,s,e.what,e.id):"Not your node"}case"cancel":{const s=t(e.node);return s?(sp(n,s,e.idx||0),null):"Not your node"}case"corridor":return n.nodes[e.from]&&n.nodes[e.to]?dp(n,n.nodes[e.from],n.nodes[e.to]):"Unknown node";case"launch":{const s=t(e.from);return s&&n.nodes[e.to]?es(n,s,n.nodes[e.to],e.drones,e.specs):"Not your node"}case"convoy":{const s=t(e.from);return s&&n.nodes[e.to]?To(n,s,n.nodes[e.to],e.drones,e.specs):"Not your node"}case"move":{const s=i(e.spec);return s&&n.nodes[e.to]?mp(n,s,n.nodes[e.to]):"Not your specialist"}case"missile":{const s=t(e.from);return s&&n.nodes[e.to]?vf(n,s,n.nodes[e.to]):"Not your node"}case"rally":{const s=t(e.node);return s?_p(n,s):"Not your node"}case"front":{const s=t(e.node);return s?(s.front=!s.front,null):"Not your node"}case"sail":{const s=t(e.node);return!s||!s.flagship?"Only the Flagship can move":(s.dest={x:Math.max(12,Math.min(n.w-12,e.x)),y:Math.max(12,Math.min(n.h-12,e.y))},null)}case"produce":return n.sides[W].produce=!n.sides[W].produce,null;case"choose":return Mp(n,e.idx);case"ransom":{const s=n.specs[e.spec];return s?bp(n,s,e.recruit):"Unknown prisoner"}case"event":{const s=t(e.node);return!s||!s.event?"No event here":(n.pending.push({kind:"event",node:s.id,opts:[],title:Xn[s.event].name,event:s.event}),null)}}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yc="187",Wp=0,Ud=1,$p=2,ka=1,Xp=2,Dr=3,Ss=0,mn=1,ni=2,er=0,Or=1,Fd=2,Od=3,kd=4,qp=5,$s=100,Yp=101,Kp=102,Zp=103,Jp=104,Qp=200,jp=201,em=202,tm=203,Rf=204,Cf=205,nm=206,im=207,sm=208,rm=209,am=210,om=211,lm=212,cm=213,dm=214,Cl=0,Pl=1,Dl=2,Hr=3,Ll=4,Il=5,Nl=6,Ul=7,Kc=0,um=1,fm=2,wi=0,Pf=1,Df=2,Lf=3,If=4,Nf=5,Uf=6,Ff=7,Of=300,dr=301,Vr=302,$o=303,Xo=304,Fl=1e3,yi=1001,Ol=1002,Zt=1003,hm=1004,aa=1005,hn=1006,qo=1007,Gi=1008,yn=1009,kf=1010,Bf=1011,Wr=1012,Zc=1013,ci=1014,si=1015,di=1016,Jc=1017,Qc=1018,ur=1020,zf=35902,Gf=35899,Hf=1021,Vf=1022,ri=1023,ts=1026,Hi=1027,Wf=1028,jc=1029,Ms=1030,ed=1031,td=1033,Ba=33776,za=33777,Ga=33778,Ha=33779,kl=35840,Bl=35841,zl=35842,Gl=35843,Hl=36196,Vl=37492,Wl=37496,$l=37488,Xl=37489,eo=37490,ql=37491,Yl=37808,Kl=37809,Zl=37810,Jl=37811,Ql=37812,jl=37813,ec=37814,tc=37815,nc=37816,ic=37817,sc=37818,rc=37819,ac=37820,oc=37821,lc=36492,cc=36494,dc=36495,uc=36283,fc=36284,to=36285,hc=36286,pm=3200,pc=0,mm=1,Bi="",Sn="srgb",no="srgb-linear",io="linear",ft="srgb",Yo=7680,gm=519,_m=512,vm=513,xm=514,$f=515,Sm=516,Mm=517,Xf=518,qf=519,ym=35044,Bd="300 es",Wn=2e3,$r=2001;function bm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function so(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wm(){const n=so("canvas");return n.style.display="block",n}const zd={};function Gd(...n){const e="THREE."+n.shift();console.log(e,...n)}function Yf(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ne(...n){n=Yf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function at(...n){n=Yf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Va(...n){const e=n.join(" ");e in zd||(zd[e]=!0,Ne(...n))}function Em(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Tm={[Cl]:Cl,[Dl]:Nl,[Ll]:Ll,[Hr]:Il,[Pl]:Pl,[Nl]:Dl,[Ul]:Ul,[Il]:Hr};class As{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ko=Math.PI/180,mc=180/Math.PI;function Qr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function tt(n,e,t){return Math.max(e,Math.min(t,n))}function Am(n,e){return(n%e+e)%e}function Zo(n,e,t){return(1-t)*n+t*e}function Rm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function nd(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Cm(n,e){if(e.constructor===Float32Array)return n;const t=nd(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Pm(n,e){if(e.constructor===Float32Array)return n;const t=nd(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const md=class md{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};md.prototype.isVector2=!0;let qe=md;class xr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],u=i[s+2],f=i[s+3],h=r[a+0],m=r[a+1],_=r[a+2],x=r[a+3];if(f!==x||c!==h||l!==m||u!==_){let d=c*h+l*m+u*_+f*x;d<0&&(h=-h,m=-m,_=-_,x=-x,d=-d);let p=1-o;if(d<.9995){const v=Math.acos(d),w=Math.sin(v);p=Math.sin(p*v)/w,o=Math.sin(o*v)/w,c=c*p+h*o,l=l*p+m*o,u=u*p+_*o,f=f*p+x*o}else{c=c*p+h*o,l=l*p+m*o,u=u*p+_*o,f=f*p+x*o;const v=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=v,l*=v,u*=v,f*=v}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],f=r[a],h=r[a+1],m=r[a+2],_=r[a+3];return e[t]=o*_+u*f+c*m-l*h,e[t+1]=c*_+u*h+l*f-o*m,e[t+2]=l*_+u*m+o*h-c*f,e[t+3]=u*_-o*f-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),f=o(r/2),h=c(i/2),m=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=h*u*f+l*m*_,this._y=l*m*f-h*u*_,this._z=l*u*_+h*m*f,this._w=l*u*f-h*m*_;break;case"YXZ":this._x=h*u*f+l*m*_,this._y=l*m*f-h*u*_,this._z=l*u*_-h*m*f,this._w=l*u*f+h*m*_;break;case"ZXY":this._x=h*u*f-l*m*_,this._y=l*m*f+h*u*_,this._z=l*u*_+h*m*f,this._w=l*u*f-h*m*_;break;case"ZYX":this._x=h*u*f-l*m*_,this._y=l*m*f+h*u*_,this._z=l*u*_-h*m*f,this._w=l*u*f+h*m*_;break;case"YZX":this._x=h*u*f+l*m*_,this._y=l*m*f+h*u*_,this._z=l*u*_-h*m*f,this._w=l*u*f-h*m*_;break;case"XZY":this._x=h*u*f-l*m*_,this._y=l*m*f-h*u*_,this._z=l*u*_+h*m*f,this._w=l*u*f+h*m*_;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-s*o,this._w=a*u-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const gd=class gd{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),u=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+c*l+a*f-o*u,this.y=i+c*u+o*l-r*f,this.z=s+c*f+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jo.copy(this).projectOnVector(e),this.sub(Jo)}reflect(e){return this.sub(Jo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gd.prototype.isVector3=!0;let B=gd;const Jo=new B,Hd=new xr,_d=class _d{constructor(e,t,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],m=i[5],_=i[8],x=s[0],d=s[3],p=s[6],v=s[1],w=s[4],M=s[7],E=s[2],T=s[5],g=s[8];return r[0]=a*x+o*v+c*E,r[3]=a*d+o*w+c*T,r[6]=a*p+o*M+c*g,r[1]=l*x+u*v+f*E,r[4]=l*d+u*w+f*T,r[7]=l*p+u*M+f*g,r[2]=h*x+m*v+_*E,r[5]=h*d+m*w+_*T,r[8]=h*p+m*M+_*g,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*r*u+i*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,h=o*c-u*r,m=l*r-a*c,_=t*f+i*h+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(s*l-u*i)*x,e[2]=(o*i-s*a)*x,e[3]=h*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=m*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Va("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qo.makeScale(e,t)),this}rotate(e){return Va("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qo.makeRotation(-e)),this}translate(e,t){return Va("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};_d.prototype.isMatrix3=!0;let Oe=_d;const Qo=new Oe,Vd=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wd=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dm(){const n={enabled:!0,workingColorSpace:no,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ft&&(s.r=Ei(s.r),s.g=Ei(s.g),s.b=Ei(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(s.r=tr(s.r),s.g=tr(s.g),s.b=tr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bi?io:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[no]:{primaries:e,whitePoint:i,transfer:io,toXYZ:Vd,fromXYZ:Wd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:Vd,fromXYZ:Wd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),n}const et=Dm();function Ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ps;class Lm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ps===void 0&&(Ps=so("canvas")),Ps.width=e.width,Ps.height=e.height;const s=Ps.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ps}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=so("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ei(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ei(t[i]/255)*255):t[i]=Ei(t[i]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Im=0;class id{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=Qr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(jo(s[a].image)):r.push(jo(s[a]))}else r=jo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function jo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Lm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let Nm=0;const el=new B;class nn extends As{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,i=yi,s=yi,r=hn,a=Gi,o=ri,c=yn,l=nn.DEFAULT_ANISOTROPY,u=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Qr(),this.name="",this.source=new id(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(el).x}get height(){return this.source.getSize(el).y}get depth(){return this.source.getSize(el).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Of)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fl:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case Ol:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fl:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case Ol:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Of;nn.DEFAULT_ANISOTROPY=1;const vd=class vd{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],m=c[5],_=c[9],x=c[2],d=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+d)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,M=(m+1)/2,E=(p+1)/2,T=(u+h)/4,g=(f+x)/4,b=(_+d)/4;return w>M&&w>E?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=T/i,r=g/i):M>E?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=b/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=g/r,s=b/r),this.set(i,s,r,t),this}let v=Math.sqrt((d-_)*(d-_)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(d-_)/v,this.y=(f-x)/v,this.z=(h-u)/v,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vd.prototype.isVector4=!0;let yt=vd;class Um extends As{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];const s=i.count;for(let r=0;r<s;r++)this.textures[r]=new nn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new id(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends Um{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Kf extends nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fm extends nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const go=class go{constructor(e,t,i,s,r,a,o,c,l,u,f,h,m,_,x,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,u,f,h,m,_,x,d)}set(e,t,i,s,r,a,o,c,l,u,f,h,m,_,x,d){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=m,p[7]=_,p[11]=x,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new go().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Ds.setFromMatrixColumn(e,0).length(),r=1/Ds.setFromMatrixColumn(e,1).length(),a=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,m=a*f,_=o*u,x=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=m+_*l,t[5]=h-x*l,t[9]=-o*c,t[2]=x-h*l,t[6]=_+m*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,m=c*f,_=l*u,x=l*f;t[0]=h+x*o,t[4]=_*o-m,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=x+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,m=c*f,_=l*u,x=l*f;t[0]=h-x*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=x-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,m=a*f,_=o*u,x=o*f;t[0]=c*u,t[4]=_*l-m,t[8]=h*l+x,t[1]=c*f,t[5]=x*l+h,t[9]=m*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,m=a*l,_=o*c,x=o*l;t[0]=c*u,t[4]=x-h*f,t[8]=_*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*f+_,t[10]=h-x*f}else if(e.order==="XZY"){const h=a*c,m=a*l,_=o*c,x=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+x,t[5]=a*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Om,e,km)}lookAt(e,t,i){const s=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Di.crossVectors(i,_n),Di.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Di.crossVectors(i,_n)),Di.normalize(),oa.crossVectors(_n,Di),s[0]=Di.x,s[4]=oa.x,s[8]=_n.x,s[1]=Di.y,s[5]=oa.y,s[9]=_n.y,s[2]=Di.z,s[6]=oa.z,s[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],m=i[13],_=i[2],x=i[6],d=i[10],p=i[14],v=i[3],w=i[7],M=i[11],E=i[15],T=s[0],g=s[4],b=s[8],D=s[12],A=s[1],C=s[5],U=s[9],I=s[13],L=s[2],k=s[6],$=s[10],z=s[14],ie=s[3],Y=s[7],te=s[11],ne=s[15];return r[0]=a*T+o*A+c*L+l*ie,r[4]=a*g+o*C+c*k+l*Y,r[8]=a*b+o*U+c*$+l*te,r[12]=a*D+o*I+c*z+l*ne,r[1]=u*T+f*A+h*L+m*ie,r[5]=u*g+f*C+h*k+m*Y,r[9]=u*b+f*U+h*$+m*te,r[13]=u*D+f*I+h*z+m*ne,r[2]=_*T+x*A+d*L+p*ie,r[6]=_*g+x*C+d*k+p*Y,r[10]=_*b+x*U+d*$+p*te,r[14]=_*D+x*I+d*z+p*ne,r[3]=v*T+w*A+M*L+E*ie,r[7]=v*g+w*C+M*k+E*Y,r[11]=v*b+w*U+M*$+E*te,r[15]=v*D+w*I+M*z+E*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],m=e[14],_=e[3],x=e[7],d=e[11],p=e[15],v=c*m-l*h,w=o*m-l*f,M=o*h-c*f,E=a*m-l*u,T=a*h-c*u,g=a*f-o*u;return t*(x*v-d*w+p*M)-i*(_*v-d*E+p*T)+s*(_*w-x*E+p*g)-r*(_*M-x*T+d*g)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-i*(r*u-o*c)+s*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],m=e[11],_=e[12],x=e[13],d=e[14],p=e[15],v=t*o-i*a,w=t*c-s*a,M=t*l-r*a,E=i*c-s*o,T=i*l-r*o,g=s*l-r*c,b=u*x-f*_,D=u*d-h*_,A=u*p-m*_,C=f*d-h*x,U=f*p-m*x,I=h*p-m*d,L=v*I-w*U+M*C+E*A-T*D+g*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/L;return e[0]=(o*I-c*U+l*C)*k,e[1]=(s*U-i*I-r*C)*k,e[2]=(x*g-d*T+p*E)*k,e[3]=(h*T-f*g-m*E)*k,e[4]=(c*A-a*I-l*D)*k,e[5]=(t*I-s*A+r*D)*k,e[6]=(d*M-_*g-p*w)*k,e[7]=(u*g-h*M+m*w)*k,e[8]=(a*U-o*A+l*b)*k,e[9]=(i*A-t*U-r*b)*k,e[10]=(_*T-x*M+p*v)*k,e[11]=(f*M-u*T-m*v)*k,e[12]=(o*D-a*C-c*b)*k,e[13]=(t*C-i*D+s*b)*k,e[14]=(x*w-_*E-d*v)*k,e[15]=(u*E-f*w+h*v)*k,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,f=o+o,h=r*l,m=r*u,_=r*f,x=a*u,d=a*f,p=o*f,v=c*l,w=c*u,M=c*f,E=i.x,T=i.y,g=i.z;return s[0]=(1-(x+p))*E,s[1]=(m+M)*E,s[2]=(_-w)*E,s[3]=0,s[4]=(m-M)*T,s[5]=(1-(h+p))*T,s[6]=(d+v)*T,s[7]=0,s[8]=(_+w)*g,s[9]=(d-v)*g,s[10]=(1-(h+x))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Ds.set(s[0],s[1],s[2]).length();const o=Ds.set(s[4],s[5],s[6]).length(),c=Ds.set(s[8],s[9],s[10]).length();r<0&&(a=-a),On.copy(this);const l=1/a,u=1/o,f=1/c;return On.elements[0]*=l,On.elements[1]*=l,On.elements[2]*=l,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=f,On.elements[9]*=f,On.elements[10]*=f,t.setFromRotationMatrix(On),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=Wn,c=!1){const l=this.elements,u=2*r/(t-e),f=2*r/(i-s),h=(t+e)/(t-e),m=(i+s)/(i-s);let _,x;if(c)_=r/(a-r),x=a*r/(a-r);else if(o===Wn)_=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===$r)_=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Wn,c=!1){const l=this.elements,u=2/(t-e),f=2/(i-s),h=-(t+e)/(t-e),m=-(i+s)/(i-s);let _,x;if(c)_=1/(a-r),x=a/(a-r);else if(o===Wn)_=-2/(a-r),x=-(a+r)/(a-r);else if(o===$r)_=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};go.prototype.isMatrix4=!0;let _t=go;const Ds=new B,On=new _t,Om=new B(0,0,0),km=new B(1,1,1),Di=new B,oa=new B,_n=new B,$d=new _t,Xd=new xr;class ns{constructor(e=0,t=0,i=0,s=ns.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $d.makeRotationFromQuaternion(e),this.setFromRotationMatrix($d,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xd.setFromEuler(this),this.setFromQuaternion(Xd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ns.DEFAULT_ORDER="XYZ";class Zf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bm=0;const qd=new B,Ls=new xr,fi=new _t,la=new B,yr=new B,zm=new B,Gm=new xr,Yd=new B(1,0,0),Kd=new B(0,1,0),Zd=new B(0,0,1),Jd={type:"added"},Hm={type:"removed"},Is={type:"childadded",child:null},tl={type:"childremoved",child:null};class Ft extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new B,t=new ns,i=new xr,s=new B(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new Oe}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(Yd,e)}rotateY(e){return this.rotateOnAxis(Kd,e)}rotateZ(e){return this.rotateOnAxis(Zd,e)}translateOnAxis(e,t){return qd.copy(e).applyQuaternion(this.quaternion),this.position.add(qd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yd,e)}translateY(e){return this.translateOnAxis(Kd,e)}translateZ(e){return this.translateOnAxis(Zd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?la.copy(e):la.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(yr,la,this.up):fi.lookAt(la,yr,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(fi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jd),Is.child=e,this.dispatchEvent(Is),Is.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hm),tl.child=e,this.dispatchEvent(tl),tl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jd),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,e,zm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,Gm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ft.DEFAULT_UP=new B(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class pn extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vm={type:"move"};class nl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const d=t.getJointPose(x,i),p=this._getHandJoint(l,x);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,_=.005;l.inputState.pinching&&h>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new pn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},ca={h:0,s:0,l:0};function il(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=et.workingColorSpace){if(e=Am(e,1),t=tt(t,0,1),i=tt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=il(a,r,e+1/3),this.g=il(a,r,e),this.b=il(a,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=Sn){function i(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Sn){const i=Jf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return et.workingToColorSpace(tn.copy(this),e),Math.round(tt(tn.r*255,0,255))*65536+Math.round(tt(tn.g*255,0,255))*256+Math.round(tt(tn.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(tn.copy(this),t);const i=tn.r,s=tn.g,r=tn.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Sn){et.workingToColorSpace(tn.copy(this),e);const t=tn.r,i=tn.g,s=tn.b;return e!==Sn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(ca);const i=Zo(Li.h,ca.h,t),s=Zo(Li.s,ca.s,t),r=Zo(Li.l,ca.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Ve;Ve.NAMES=Jf;class Wm extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ns,this.environmentIntensity=1,this.environmentRotation=new ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const kn=new B,hi=new B,sl=new B,pi=new B,Ns=new B,Us=new B,Qd=new B,rl=new B,al=new B,ol=new B,ll=new yt,cl=new yt,dl=new yt;class Gn{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),kn.subVectors(e,t),s.cross(kn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){kn.subVectors(s,t),hi.subVectors(i,t),sl.subVectors(e,t);const a=kn.dot(kn),o=kn.dot(hi),c=kn.dot(sl),l=hi.dot(hi),u=hi.dot(sl),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,m=(l*c-o*u)*h,_=(a*u-o*c)*h;return r.set(1-m-_,_,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,pi.x),c.addScaledVector(a,pi.y),c.addScaledVector(o,pi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return ll.setScalar(0),cl.setScalar(0),dl.setScalar(0),ll.fromBufferAttribute(e,t),cl.fromBufferAttribute(e,i),dl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ll,r.x),a.addScaledVector(cl,r.y),a.addScaledVector(dl,r.z),a}static isFrontFacing(e,t,i,s){return kn.subVectors(i,t),hi.subVectors(e,t),kn.cross(hi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),kn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Gn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Ns.subVectors(s,i),Us.subVectors(r,i),rl.subVectors(e,i);const c=Ns.dot(rl),l=Us.dot(rl);if(c<=0&&l<=0)return t.copy(i);al.subVectors(e,s);const u=Ns.dot(al),f=Us.dot(al);if(u>=0&&f<=u)return t.copy(s);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0&&c-u>0)return a=c/(c-u),t.copy(i).addScaledVector(Ns,a);ol.subVectors(e,r);const m=Ns.dot(ol),_=Us.dot(ol);if(_>=0&&m<=_)return t.copy(r);const x=m*l-c*_;if(x<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(i).addScaledVector(Us,o);const d=u*_-m*f;if(d<=0&&f-u>=0&&m-_>=0)return Qd.subVectors(r,s),o=(f-u)/(f-u+(m-_)),t.copy(s).addScaledVector(Qd,o);const p=1/(d+x+h);return a=x*p,o=h*p,t.copy(i).addScaledVector(Ns,a).addScaledVector(Us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class jr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bn):Bn.fromBufferAttribute(r,a),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),da.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),da.copy(i.boundingBox)),da.applyMatrix4(e.matrixWorld),this.union(da)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),ua.subVectors(this.max,br),Fs.subVectors(e.a,br),Os.subVectors(e.b,br),ks.subVectors(e.c,br),Ii.subVectors(Os,Fs),Ni.subVectors(ks,Os),ls.subVectors(Fs,ks);let t=[0,-Ii.z,Ii.y,0,-Ni.z,Ni.y,0,-ls.z,ls.y,Ii.z,0,-Ii.x,Ni.z,0,-Ni.x,ls.z,0,-ls.x,-Ii.y,Ii.x,0,-Ni.y,Ni.x,0,-ls.y,ls.x,0];return!ul(t,Fs,Os,ks,ua)||(t=[1,0,0,0,1,0,0,0,1],!ul(t,Fs,Os,ks,ua))?!1:(fa.crossVectors(Ii,Ni),t=[fa.x,fa.y,fa.z],ul(t,Fs,Os,ks,ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mi=[new B,new B,new B,new B,new B,new B,new B,new B],Bn=new B,da=new jr,Fs=new B,Os=new B,ks=new B,Ii=new B,Ni=new B,ls=new B,br=new B,ua=new B,fa=new B,cs=new B;function ul(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){cs.fromArray(n,r);const o=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),c=e.dot(cs),l=t.dot(cs),u=i.dot(cs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Ct=new B,ha=new qe;let $m=0;class ps extends As{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$m++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ym,this.updateRanges=[],this.gpuType=si,this.version=0,this._normalizationScale=e!==void 0?nd(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ha.fromBufferAttribute(this,t),ha.applyMatrix3(e),this.setXY(t,ha.x,ha.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Cm(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Pm(e,this.array)}}class Qf extends ps{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class jf extends ps{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class lt extends ps{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Xm=new jr,wr=new B,fl=new B;class ea{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Xm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);const t=wr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(wr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(fl)),this.expandByPoint(wr.copy(e.center).sub(fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let qm=0;const Pn=new _t,hl=new Ft,Bs=new B,vn=new jr,Er=new jr,Ht=new B;class Jt extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Qr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bm(e)?jf:Qf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Oe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,i){return Pn.makeTranslation(e,t,i),this.applyMatrix4(Pn),this}scale(e,t,i){return Pn.makeScale(e,t,i),this.applyMatrix4(Pn),this}lookAt(e){return hl.lookAt(e),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new lt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Er.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(vn.min,Er.min),vn.expandByPoint(Ht),Ht.addVectors(vn.max,Er.max),vn.expandByPoint(Ht)):(vn.expandByPoint(Er.min),vn.expandByPoint(Er.max))}vn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ht));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ht.fromBufferAttribute(o,l),c&&(Bs.fromBufferAttribute(e,l),Ht.add(Bs)),s=Math.max(s,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ps(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(i.count);for(let D=0;D<i.count;D++)o[D]=new B,c[D]=new B;const u=new B,f=new B,h=new B,m=new qe,_=new qe,x=new qe,d=new B,p=new B;function v(D,A,C){l[D]=l[A]=l[C]=1,u.fromBufferAttribute(i,D),f.fromBufferAttribute(i,A),h.fromBufferAttribute(i,C),m.fromBufferAttribute(r,D),_.fromBufferAttribute(r,A),x.fromBufferAttribute(r,C),f.sub(u),h.sub(u),_.sub(m),x.sub(m);const U=1/(_.x*x.y-x.x*_.y);isFinite(U)&&(d.copy(f).multiplyScalar(x.y).addScaledVector(h,-_.y).multiplyScalar(U),p.copy(h).multiplyScalar(_.x).addScaledVector(f,-x.x).multiplyScalar(U),o[D].add(d),o[A].add(d),o[C].add(d),c[D].add(p),c[A].add(p),c[C].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let D=0,A=w.length;D<A;++D){const C=w[D],U=C.start,I=C.count;for(let L=U,k=U+I;L<k;L+=3)v(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const M=new B,E=new B,T=new B,g=new B;function b(D){T.fromBufferAttribute(s,D),g.copy(T);const A=o[D];M.copy(A),M.sub(T.multiplyScalar(T.dot(A))).normalize(),E.crossVectors(g,A);const U=E.dot(c[D])<0?-1:1;a.setXYZW(D,M.x,M.y,M.z,U)}for(let D=0,A=i.count;D<A;++D)l[D]&&b(D);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ps(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const s=new B,r=new B,a=new B,o=new B,c=new B,l=new B,u=new B,f=new B;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),x=e.getX(h+1),d=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,d),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,d),o.add(u),c.add(u),l.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(d,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let m=0,_=0;for(let x=0,d=c.length;x<d;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*u;for(let p=0;p<u;p++)h[_++]=l[m++]}return new ps(h,u,f)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jt,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,i);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],m=e(h,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const m=l[f];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pl=new B,Ym=new B,Km=new Oe;class Oi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=pl.subVectors(i,t).cross(Ym.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(pl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Km.getNormalMatrix(e),s=this.coplanarPoint(pl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Zm=0;class Rs extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=Qr(),this.name="",this.type="Material",this.blending=Or,this.side=Ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rf,this.blendDst=Cf,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yo,this.stencilZFail=Yo,this.stencilZPass=Yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Oi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new qe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const gi=new B,ml=new B,pa=new B,ma=new B;class sd{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ml.copy(e).add(t).multiplyScalar(.5),pa.copy(t).sub(e).normalize(),ma.copy(this.origin).sub(ml);const r=e.distanceTo(t)*.5,a=-this.direction.dot(pa),o=ma.dot(this.direction),c=-ma.dot(pa),l=ma.lengthSq(),u=Math.abs(1-a*a);let f,h,m,_;if(u>0)if(f=a*c-o,h=a*o-c,_=r*u,f>=0)if(h>=-_)if(h<=_){const x=1/u;f*=x,h*=x,m=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=r,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*c)+l;else h<=-_?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+h*(h+2*c)+l):h<=_?(f=0,h=Math.min(Math.max(-r,-c),r),m=h*(h+2*c)+l):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+h*(h+2*c)+l);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ml).addScaledVector(pa,h),m}intersectSphere(e,t){if(e.radius<0)return null;gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),s=gi.dot(gi)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,m=e.z-a.z,_=t.x-a.x,x=t.y-a.y,d=t.z-a.z,p=i.x-a.x,v=i.y-a.y,w=i.z-a.z,M=Math.abs(c),E=Math.abs(l),T=Math.abs(u);let g,b,D,A,C,U,I,L,k,$,z,ie;if(M>=E&&M>=T?(D=c,U=f,k=_,ie=p,c>=0?(g=l,b=u,A=h,C=m,I=x,L=d,$=v,z=w):(g=u,b=l,A=m,C=h,I=d,L=x,$=w,z=v)):E>=T?(D=l,U=h,k=x,ie=v,l>=0?(g=u,b=c,A=m,C=f,I=d,L=_,$=w,z=p):(g=c,b=u,A=f,C=m,I=_,L=d,$=p,z=w)):(D=u,U=m,k=d,ie=w,u>=0?(g=c,b=l,A=f,C=h,I=_,L=x,$=p,z=v):(g=l,b=c,A=h,C=f,I=x,L=_,$=v,z=p)),D===0)return null;const Y=g/D,te=b/D,ne=1/D,Te=A-Y*U,Ie=C-te*U,J=I-Y*k,ge=L-te*k,be=$-Y*ie,Pe=z-te*ie,Se=be*ge-Pe*J,Ge=Te*Pe-Ie*be,At=J*Ie-ge*Te;if(s){if(Se<0||Ge<0||At<0)return null}else if((Se<0||Ge<0||At<0)&&(Se>0||Ge>0||At>0))return null;const Le=Se+Ge+At;if(Le===0)return null;const dt=ne*(Se*U+Ge*k+At*ie);return(Le>0?dt<0:dt>0)?null:this.at(dt/Le,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ro extends Rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jd=new _t,ds=new sd,ga=new ea,eu=new B,_a=new B,va=new B,xa=new B,gl=new B,Sa=new B,tu=new B,Ma=new B;class $t extends Ft{constructor(e=new Jt,t=new ro){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Sa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],f=r[c];u!==0&&(gl.fromBufferAttribute(f,e),a?Sa.addScaledVector(gl,u):Sa.addScaledVector(gl.sub(t),u))}t.add(Sa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(r),ds.copy(e.ray).recast(e.near),!(ga.containsPoint(ds.origin)===!1&&(ds.intersectSphere(ga,eu)===null||ds.origin.distanceToSquared(eu)>(e.far-e.near)**2))&&(jd.copy(r).invert(),ds.copy(e.ray).applyMatrix4(jd),!(i.boundingBox!==null&&ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const d=h[_],p=a[d.materialIndex],v=Math.max(d.start,m.start),w=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let M=v,E=w;M<E;M+=3){const T=o.getX(M),g=o.getX(M+1),b=o.getX(M+2);s=ya(this,p,e,i,l,u,f,T,g,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let d=_,p=x;d<p;d+=3){const v=o.getX(d),w=o.getX(d+1),M=o.getX(d+2);s=ya(this,a,e,i,l,u,f,v,w,M),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const d=h[_],p=a[d.materialIndex],v=Math.max(d.start,m.start),w=Math.min(c.count,Math.min(d.start+d.count,m.start+m.count));for(let M=v,E=w;M<E;M+=3){const T=M,g=M+1,b=M+2;s=ya(this,p,e,i,l,u,f,T,g,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let d=_,p=x;d<p;d+=3){const v=d,w=d+1,M=d+2;s=ya(this,a,e,i,l,u,f,v,w,M),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}}function Jm(n,e,t,i,s,r,a,o){let c;if(e.side===mn?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===Ss,o),c===null)return null;Ma.copy(o),Ma.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ma);return l<t.near||l>t.far?null:{distance:l,point:Ma.clone(),object:n}}function ya(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,_a),n.getVertexPosition(c,va),n.getVertexPosition(l,xa);const u=Jm(n,e,t,i,_a,va,xa,tu);if(u){const f=new B;Gn.getBarycoord(tu,_a,va,xa,f),s&&(u.uv=Gn.getInterpolatedAttribute(s,o,c,l,f,new qe)),r&&(u.uv1=Gn.getInterpolatedAttribute(r,o,c,l,f,new qe)),a&&(u.normal=Gn.getInterpolatedAttribute(a,o,c,l,f,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new B,materialIndex:0};Gn.getNormal(_a,va,xa,h.normal),u.face=h,u.barycoord=f}return u}class Qm extends nn{constructor(e=null,t=1,i=1,s,r,a,o,c,l=Zt,u=Zt,f,h){super(null,a,o,c,l,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const us=new ea,jm=new qe(.5,.5),ba=new B;class Xr{constructor(e=new Oi,t=new Oi,i=new Oi,s=new Oi,r=new Oi,a=new Oi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Wn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],m=r[7],_=r[8],x=r[9],d=r[10],p=r[11],v=r[12],w=r[13],M=r[14],E=r[15];if(s[0].setComponents(l-a,m-u,p-_,E-v).normalize(),s[1].setComponents(l+a,m+u,p+_,E+v).normalize(),s[2].setComponents(l+o,m+f,p+x,E+w).normalize(),s[3].setComponents(l-o,m-f,p-x,E-w).normalize(),i)s[4].setComponents(c,h,d,M).normalize(),s[5].setComponents(l-c,m-h,p-d,E-M).normalize();else if(s[4].setComponents(l-c,m-h,p-d,E-M).normalize(),t===Wn)s[5].setComponents(l+c,m+h,p+d,E+M).normalize();else if(t===$r)s[5].setComponents(c,h,d,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){us.center.set(0,0,0);const t=jm.distanceTo(e.center);return us.radius=.7071067811865476+t,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ba.x=s.normal.x>0?e.max.x:e.min.x,ba.y=s.normal.y>0?e.max.y:e.min.y,ba.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const nu=new _t;class rd{constructor(){this.coordinateSystem=Wn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];nu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Xr),i[s].setFromProjectionMatrix(nu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Xr),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new rd().copy(this)}}class gc extends Rs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ao=new B,oo=new B,iu=new _t,Tr=new sd,wa=new ea,_l=new B,su=new B;class e0 extends Ft{constructor(e=new Jt,t=new gc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ao.fromBufferAttribute(t,s-1),oo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ao.distanceTo(oo);e.setAttribute("lineDistance",new lt(i,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(s),wa.radius+=r,e.ray.intersectsSphere(wa)===!1)return;iu.copy(s).invert(),Tr.copy(e.ray).applyMatrix4(iu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const m=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let x=m,d=_-1;x<d;x+=l){const p=u.getX(x),v=u.getX(x+1),w=Ea(this,e,Tr,c,p,v,x);w&&t.push(w)}if(this.isLineLoop){const x=u.getX(_-1),d=u.getX(m),p=Ea(this,e,Tr,c,x,d,_-1);p&&t.push(p)}}else{const m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let x=m,d=_-1;x<d;x+=l){const p=Ea(this,e,Tr,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=Ea(this,e,Tr,c,_-1,m,_-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ea(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(ao.fromBufferAttribute(o,s),oo.fromBufferAttribute(o,r),t.distanceSqToSegment(ao,oo,_l,su)>i)return;_l.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(_l);if(!(l<e.near||l>e.far))return{distance:l,point:su.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class ru extends e0{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class eh extends Rs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const au=new _t,_c=new sd,Ta=new ea,Aa=new B;class t0 extends Ft{constructor(e=new Jt,t=new eh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(s),Ta.radius+=r,e.ray.intersectsSphere(Ta)===!1)return;au.copy(s).invert(),_c.copy(e.ray).applyMatrix4(au);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,f=i.attributes.position;if(l!==null){const h=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let _=h,x=m;_<x;_++){const d=l.getX(_);Aa.fromBufferAttribute(f,d),ou(Aa,d,c,s,e,t,this)}}else{const h=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=h,x=m;_<x;_++)Aa.fromBufferAttribute(f,_),ou(Aa,_,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ou(n,e,t,i,s,r,a){const o=_c.distanceSqToPoint(n);if(o<t){const c=new B;_c.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class th extends nn{constructor(e=[],t=dr,i,s,r,a,o,c,l,u){super(e,t,i,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lu extends nn{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fr extends nn{constructor(e,t,i=ci,s,r,a,o=Zt,c=Zt,l,u=ts,f=1){if(u!==ts&&u!==Hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new id(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class nh extends fr{constructor(e,t=ci,i=dr,s,r,a=Zt,o=Zt,c,l=ts){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ih extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ot extends Jt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(f,2));function _(x,d,p,v,w,M,E,T,g,b,D){const A=M/g,C=E/b,U=M/2,I=E/2,L=T/2,k=g+1,$=b+1;let z=0,ie=0;const Y=new B;for(let te=0;te<$;te++){const ne=te*C-I;for(let Te=0;Te<k;Te++){const Ie=Te*A-U;Y[x]=Ie*v,Y[d]=ne*w,Y[p]=L,l.push(Y.x,Y.y,Y.z),Y[x]=0,Y[d]=0,Y[p]=T>0?1:-1,u.push(Y.x,Y.y,Y.z),f.push(Te/g),f.push(1-te/b),z+=1}}for(let te=0;te<b;te++)for(let ne=0;ne<g;ne++){const Te=h+ne+k*te,Ie=h+ne+k*(te+1),J=h+(ne+1)+k*(te+1),ge=h+(ne+1)+k*te;c.push(Te,Ie,ge),c.push(Ie,J,ge),ie+=6}o.addGroup(m,ie,D),m+=ie,h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ot(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Co extends Jt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new B,u=new qe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const m=i+f/t*s;l.x=e*Math.cos(m),l.y=e*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,c.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(o,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ke extends Jt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],m=[];let _=0;const x=[],d=i/2;let p=0;v(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new lt(f,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(m,2));function v(){const M=new B,E=new B;let T=0;const g=(t-e)/i;for(let b=0;b<=r;b++){const D=[],A=b/r,C=A*(t-e)+e;for(let U=0;U<=s;U++){const I=U/s,L=I*c+o,k=Math.sin(L),$=Math.cos(L);E.x=C*k,E.y=-A*i+d,E.z=C*$,f.push(E.x,E.y,E.z),M.set(k,g,$).normalize(),h.push(M.x,M.y,M.z),m.push(I,1-A),D.push(_++)}x.push(D)}for(let b=0;b<s;b++)for(let D=0;D<r;D++){const A=x[D][b],C=x[D+1][b],U=x[D+1][b+1],I=x[D][b+1];(e>0||D!==0)&&(u.push(A,C,I),T+=3),(t>0||D!==r-1)&&(u.push(C,U,I),T+=3)}l.addGroup(p,T,0),p+=T}function w(M){const E=_,T=new qe,g=new B;let b=0;const D=M===!0?e:t,A=M===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,d*A,0),h.push(0,A,0),m.push(.5,.5),_++;const C=_;for(let U=0;U<=s;U++){const L=U/s*c+o,k=Math.cos(L),$=Math.sin(L);g.x=D*$,g.y=d*A,g.z=D*k,f.push(g.x,g.y,g.z),h.push(0,A,0),T.x=k*.5+.5,T.y=$*.5*A+.5,m.push(T.x,T.y),_++}for(let U=0;U<s;U++){const I=E+U,L=C+U;M===!0?u.push(L,L+1,I):u.push(L+1,L,I),b+=3}l.addGroup(p,b,M===!0?1:2),p+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ke(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nn extends Ke{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Nn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Po extends Jt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];o(s),l(i),u(),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(r.slice(),3)),this.setAttribute("uv",new lt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const w=new B,M=new B,E=new B;for(let T=0;T<t.length;T+=3)m(t[T+0],w),m(t[T+1],M),m(t[T+2],E),c(w,M,E,v)}function c(v,w,M,E){const T=E+1,g=[];for(let b=0;b<=T;b++){g[b]=[];const D=v.clone().lerp(M,b/T),A=w.clone().lerp(M,b/T),C=T-b;for(let U=0;U<=C;U++)U===0&&b===T?g[b][U]=D:g[b][U]=D.clone().lerp(A,U/C)}for(let b=0;b<T;b++)for(let D=0;D<2*(T-b)-1;D++){const A=Math.floor(D/2);D%2===0?(h(g[b][A+1]),h(g[b+1][A]),h(g[b][A])):(h(g[b][A+1]),h(g[b+1][A+1]),h(g[b+1][A]))}}function l(v){const w=new B;for(let M=0;M<r.length;M+=3)w.x=r[M+0],w.y=r[M+1],w.z=r[M+2],w.normalize().multiplyScalar(v),r[M+0]=w.x,r[M+1]=w.y,r[M+2]=w.z}function u(){const v=new B;for(let w=0;w<r.length;w+=3){v.x=r[w+0],v.y=r[w+1],v.z=r[w+2];const M=d(v)/2/Math.PI+.5,E=p(v)/Math.PI+.5;a.push(M,1-E)}_(),f()}function f(){for(let v=0;v<a.length;v+=6){const w=a[v+0],M=a[v+2],E=a[v+4],T=Math.max(w,M,E),g=Math.min(w,M,E);T>.9&&g<.1&&(w<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),E<.2&&(a[v+4]+=1))}}function h(v){r.push(v.x,v.y,v.z)}function m(v,w){const M=v*3;w.x=e[M+0],w.y=e[M+1],w.z=e[M+2]}function _(){const v=new B,w=new B,M=new B,E=new B,T=new qe,g=new qe,b=new qe;for(let D=0,A=0;D<r.length;D+=9,A+=6){v.set(r[D+0],r[D+1],r[D+2]),w.set(r[D+3],r[D+4],r[D+5]),M.set(r[D+6],r[D+7],r[D+8]),T.set(a[A+0],a[A+1]),g.set(a[A+2],a[A+3]),b.set(a[A+4],a[A+5]),E.copy(v).add(w).add(M).divideScalar(3);const C=d(E);x(T,A+0,v,C),x(g,A+2,w,C),x(b,A+4,M,C)}}function x(v,w,M,E){E<0&&v.x===1&&(a[w]=v.x-1),M.x===0&&M.z===0&&(a[w]=E/2/Math.PI+.5)}function d(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.vertices,e.indices,e.radius,e.detail)}}class ta extends Po{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ta(e.radius,e.detail)}}class nr extends Po{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new nr(e.radius,e.detail)}}class hr extends Jt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,f=e/o,h=t/c,m=[],_=[],x=[],d=[];for(let p=0;p<u;p++){const v=p*h-a;for(let w=0;w<l;w++){const M=w*f-r;_.push(M,-v,0),x.push(0,0,1),d.push(w/o),d.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){const w=v+l*p,M=v+l*(p+1),E=v+1+l*(p+1),T=v+1+l*p;m.push(w,M,T),m.push(M,E,T)}this.setIndex(m),this.setAttribute("position",new lt(_,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.width,e.height,e.widthSegments,e.heightSegments)}}class ad extends Jt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let f=e;const h=(t-e)/s,m=new B,_=new qe;for(let x=0;x<=s;x++){for(let d=0;d<=i;d++){const p=r+d/i*a;m.x=f*Math.cos(p),m.y=f*Math.sin(p),c.push(m.x,m.y,m.z),l.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,u.push(_.x,_.y)}f+=h}for(let x=0;x<s;x++){const d=x*(i+1);for(let p=0;p<i;p++){const v=p+d,w=v,M=v+i+1,E=v+i+2,T=v+1;o.push(w,M,T),o.push(M,E,T)}}this.setIndex(o),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ad(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class xi extends Jt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],f=new B,h=new B,m=[],_=[],x=[],d=[];for(let p=0;p<=i;p++){const v=[],w=p/i,M=a+w*o,E=e*Math.cos(M),T=Math.sqrt(e*e-E*E);let g=0;p===0&&a===0?g=.5/t:p===i&&c===Math.PI&&(g=-.5/t);for(let b=0;b<=t;b++){const D=b/t,A=s+D*r;f.x=-T*Math.cos(A),f.y=E,f.z=T*Math.sin(A),_.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),d.push(D+g,1-w),v.push(l++)}u.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){const w=u[p][v+1],M=u[p][v],E=u[p+1][v],T=u[p+1][v+1];(p!==0||a>0)&&m.push(w,M,T),(p!==i-1||c<Math.PI)&&m.push(M,E,T)}this.setIndex(m),this.setAttribute("position",new lt(_,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qr extends Jt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],u=[],f=[],h=new B,m=new B,_=new B;for(let x=0;x<=i;x++){const d=a+x/i*o;for(let p=0;p<=s;p++){const v=p/s*r;m.x=(e+t*Math.cos(d))*Math.cos(v),m.y=(e+t*Math.cos(d))*Math.sin(v),m.z=t*Math.sin(d),l.push(m.x,m.y,m.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),_.subVectors(m,h).normalize(),u.push(_.x,_.y,_.z),f.push(p/s),f.push(x/i)}}for(let x=1;x<=i;x++)for(let d=1;d<=s;d++){const p=(s+1)*x+d-1,v=(s+1)*(x-1)+d-1,w=(s+1)*(x-1)+d,M=(s+1)*x+d;c.push(p,v,M),c.push(v,w,M)}this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function pr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(cu(s))s.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(cu(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function an(n){const e={};for(let t=0;t<n.length;t++){const i=pr(n[t]);for(const s in i)e[s]=i[s]}return e}function cu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function n0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function sh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const i0={clone:pr,merge:an};var s0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ys extends Rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s0,this.fragmentShader=r0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=n0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ve().setHex(s.value);break;case"v2":this.uniforms[i].value=new qe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new B().fromArray(s.value);break;case"v4":this.uniforms[i].value=new yt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Oe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new _t().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class a0 extends ys{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class od extends Rs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pc,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=Kc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class o0 extends Rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class l0 extends Rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class rh extends Ft{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class c0 extends rh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const vl=new _t,du=new B,uu=new B;class d0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xr,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;du.setFromMatrixPosition(e.matrixWorld),t.position.copy(du),uu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){vl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(vl,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===$r||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(vl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ra=new B,Ca=new xr,Zn=new B;class ah extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ra,Ca,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ra,Ca,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ra,Ca,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ra,Ca,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new B,fu=new qe,hu=new qe;class zn extends ah{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mc*2*Math.atan(Math.tan(Ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,fu,hu),t.subVectors(hu,fu)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ko*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class oh extends ah{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class u0 extends d0{constructor(){super(new oh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class f0 extends rh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new u0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const zs=-90,Gs=1;class vc extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new zn(zs,Gs,e,t);s.layers=this.layers,this.add(s);const r=new zn(zs,Gs,e,t);r.layers=this.layers,this.add(r);const a=new zn(zs,Gs,e,t);a.layers=this.layers,this.add(a);const o=new zn(zs,Gs,e,t);o.layers=this.layers,this.add(o);const c=new zn(zs,Gs,e,t);c.layers=this.layers,this.add(c);const l=new zn(zs,Gs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Wn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===$r)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let d=!1;e.isWebGLRenderer===!0?d=e.state.buffers.depth.getReversed():d=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class h0 extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function pu(n,e,t,i){const s=p0(i);switch(t){case Hf:return n*e;case Wf:return n*e/s.components*s.byteLength;case jc:return n*e/s.components*s.byteLength;case Ms:return n*e*2/s.components*s.byteLength;case ed:return n*e*2/s.components*s.byteLength;case Vf:return n*e*3/s.components*s.byteLength;case ri:return n*e*4/s.components*s.byteLength;case td:return n*e*4/s.components*s.byteLength;case Ba:case za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ga:case Ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bl:case Gl:return Math.max(n,16)*Math.max(e,8)/4;case kl:case zl:return Math.max(n,8)*Math.max(e,8)/2;case Hl:case Vl:case $l:case Xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wl:case eo:case ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case jl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ec:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case tc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case nc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ic:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case sc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case rc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ac:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case oc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case lc:case cc:case dc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case uc:case fc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case to:case hc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function p0(n){switch(n){case yn:case kf:return{byteLength:1,components:1};case Wr:case Bf:case di:return{byteLength:2,components:1};case Jc:case Qc:return{byteLength:2,components:4};case ci:case Zc:case si:return{byteLength:4,components:1};case zf:case Gf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yc}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lh(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function m0(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const u=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,u);else{f.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<f.length;m++){const _=f[h],x=f[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,f[h]=x)}f.length=h+1;for(let m=0,_=f.length;m<_;m++){const x=f[m];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var g0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_0=`#ifdef USE_ALPHAHASH
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
#endif`,v0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,M0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y0=`#ifdef USE_AOMAP
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
#endif`,b0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,w0=`#ifdef USE_BATCHING
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
#endif`,E0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,T0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,A0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,C0=`#ifdef USE_IRIDESCENCE
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
#endif`,P0=`#ifdef USE_BUMPMAP
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
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,F0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,O0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,k0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,B0=`#define PI 3.141592653589793
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
} // validated`,z0=`vec3 transformedNormal = objectNormal;
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
#endif`,G0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,V0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$0="gl_FragColor = linearToOutputTexel( gl_FragColor );",X0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,q0=`#ifdef USE_ENVMAP
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
#endif`,Y0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,Q0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ng=`#ifdef USE_GRADIENTMAP
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
}`,ig=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ag=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,og=`#ifdef USE_ENVMAP
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
#endif`,lg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fg=`PhysicalMaterial material;
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
#endif`,hg=`uniform sampler2D dfgLUT;
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
}`,pg=`
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
#endif`,mg=`#if defined( RE_IndirectDiffuse )
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
#endif`,gg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_g=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,vg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Eg=`#if defined( USE_POINTS_UV )
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
#endif`,Tg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ag=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cg=`#if defined( USE_MORPHCOLORS )
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
#endif`,Pg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dg=`#ifdef USE_MORPHTARGETS
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
#endif`,Lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ig=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ng=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Og=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,kg=`#ifdef USE_NORMALMAP
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
#endif`,Bg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$g=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,e_=`float getShadowMask() {
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
}`,t_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n_=`#ifdef USE_SKINNING
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
#endif`,i_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s_=`#ifdef USE_SKINNING
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
#endif`,r_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,c_=`#ifdef USE_TRANSMISSION
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
#endif`,d_=`#ifdef USE_TRANSMISSION
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
#endif`,u_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const m_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g_=`uniform sampler2D t2D;
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
}`,__=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v_=`uniform float backgroundBlurriness;
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
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M_=`#include <common>
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
}`,y_=`#if DEPTH_PACKING == 3200
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
}`,b_=`#define DISTANCE
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
}`,w_=`#define DISTANCE
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
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A_=`uniform float scale;
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
}`,R_=`uniform vec3 diffuse;
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
}`,C_=`#include <common>
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
}`,P_=`uniform vec3 diffuse;
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
}`,D_=`#define LAMBERT
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
}`,L_=`#define LAMBERT
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
}`,I_=`#define MATCAP
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
}`,N_=`#define MATCAP
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
}`,U_=`#define NORMAL
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
}`,F_=`#define NORMAL
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
}`,O_=`#define PHONG
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
}`,k_=`#define PHONG
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
}`,B_=`#define STANDARD
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
}`,z_=`#define STANDARD
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
}`,G_=`#define TOON
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
}`,H_=`#define TOON
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
}`,V_=`uniform float size;
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
}`,W_=`uniform vec3 diffuse;
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
}`,$_=`#include <common>
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
}`,X_=`uniform vec3 color;
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
}`,q_=`uniform float rotation;
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
}`,Y_=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:g0,alphahash_pars_fragment:_0,alphamap_fragment:v0,alphamap_pars_fragment:x0,alphatest_fragment:S0,alphatest_pars_fragment:M0,aomap_fragment:y0,aomap_pars_fragment:b0,batching_pars_vertex:w0,batching_vertex:E0,begin_vertex:T0,beginnormal_vertex:A0,bsdfs:R0,iridescence_fragment:C0,bumpmap_pars_fragment:P0,clipping_planes_fragment:D0,clipping_planes_pars_fragment:L0,clipping_planes_pars_vertex:I0,clipping_planes_vertex:N0,color_fragment:U0,color_pars_fragment:F0,color_pars_vertex:O0,color_vertex:k0,common:B0,defaultnormal_vertex:z0,displacementmap_pars_vertex:G0,displacementmap_vertex:H0,emissivemap_fragment:V0,emissivemap_pars_fragment:W0,colorspace_fragment:$0,colorspace_pars_fragment:X0,envmap_fragment:q0,envmap_common_pars_fragment:Y0,envmap_pars_fragment:K0,envmap_pars_vertex:Z0,envmap_physical_pars_fragment:og,envmap_vertex:J0,fog_vertex:Q0,fog_pars_vertex:j0,fog_fragment:eg,fog_pars_fragment:tg,gradientmap_pars_fragment:ng,lightmap_pars_fragment:ig,lights_lambert_fragment:sg,lights_lambert_pars_fragment:rg,lights_pars_begin:ag,lights_toon_fragment:lg,lights_toon_pars_fragment:cg,lights_phong_fragment:dg,lights_phong_pars_fragment:ug,lights_physical_fragment:fg,lights_physical_pars_fragment:hg,lights_fragment_begin:pg,lights_fragment_maps:mg,lights_fragment_end:gg,lightprobes_pars_fragment:_g,logdepthbuf_fragment:vg,logdepthbuf_pars_fragment:xg,logdepthbuf_pars_vertex:Sg,logdepthbuf_vertex:Mg,map_fragment:yg,map_pars_fragment:bg,map_particle_fragment:wg,map_particle_pars_fragment:Eg,metalnessmap_fragment:Tg,metalnessmap_pars_fragment:Ag,morphinstance_vertex:Rg,morphcolor_vertex:Cg,morphnormal_vertex:Pg,morphtarget_pars_vertex:Dg,morphtarget_vertex:Lg,normal_fragment_begin:Ig,normal_fragment_maps:Ng,normal_pars_fragment:Ug,normal_pars_vertex:Fg,normal_vertex:Og,normalmap_pars_fragment:kg,clearcoat_normal_fragment_begin:Bg,clearcoat_normal_fragment_maps:zg,clearcoat_pars_fragment:Gg,iridescence_pars_fragment:Hg,opaque_fragment:Vg,packing:Wg,premultiplied_alpha_fragment:$g,project_vertex:Xg,dithering_fragment:qg,dithering_pars_fragment:Yg,roughnessmap_fragment:Kg,roughnessmap_pars_fragment:Zg,shadowmap_pars_fragment:Jg,shadowmap_pars_vertex:Qg,shadowmap_vertex:jg,shadowmask_pars_fragment:e_,skinbase_vertex:t_,skinning_pars_vertex:n_,skinning_vertex:i_,skinnormal_vertex:s_,specularmap_fragment:r_,specularmap_pars_fragment:a_,tonemapping_fragment:o_,tonemapping_pars_fragment:l_,transmission_fragment:c_,transmission_pars_fragment:d_,uv_pars_fragment:u_,uv_pars_vertex:f_,uv_vertex:h_,worldpos_vertex:p_,background_vert:m_,background_frag:g_,backgroundCube_vert:__,backgroundCube_frag:v_,cube_vert:x_,cube_frag:S_,depth_vert:M_,depth_frag:y_,distance_vert:b_,distance_frag:w_,equirect_vert:E_,equirect_frag:T_,linedashed_vert:A_,linedashed_frag:R_,meshbasic_vert:C_,meshbasic_frag:P_,meshlambert_vert:D_,meshlambert_frag:L_,meshmatcap_vert:I_,meshmatcap_frag:N_,meshnormal_vert:U_,meshnormal_frag:F_,meshphong_vert:O_,meshphong_frag:k_,meshphysical_vert:B_,meshphysical_frag:z_,meshtoon_vert:G_,meshtoon_frag:H_,points_vert:V_,points_frag:W_,shadow_vert:$_,shadow_frag:X_,sprite_vert:q_,sprite_frag:Y_},xe={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},ei={basic:{uniforms:an([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:an([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:an([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:an([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:an([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:an([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:an([xe.points,xe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:an([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:an([xe.common,xe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:an([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:an([xe.sprite,xe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:an([xe.common,xe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:an([xe.lights,xe.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ei.physical={uniforms:an([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Pa={r:0,b:0,g:0},K_=new _t,ch=new Oe;ch.set(-1,0,0,0,1,0,0,0,1);function Z_(n,e,t,i,s,r){const a=new Ve(0);let o=s===!0?0:1,c,l,u=null,f=0,h=null;function m(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){const M=v.backgroundBlurriness>0;w=e.get(w,M)}return w}function _(v){let w=!1;const M=m(v);M===null?d(a,o):M&&M.isColor&&(d(M,1),w=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(v,w){const M=m(w);M&&M.isCubeTexture?(l===void 0&&(l=new $t(new ot(1,1,1),new ys({name:"BackgroundCubeMaterial",uniforms:pr(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,T,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(K_.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ch),l.material.toneMapped=et.getTransfer(M.colorSpace)!==ft,(u!==M||f!==M.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,h=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new $t(new hr(2,2),new ys({name:"BackgroundMaterial",uniforms:pr(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=et.getTransfer(M.colorSpace)!==ft,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,h=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function d(v,w){v.getRGB(Pa,sh(n)),t.buffers.color.setClear(Pa.r,Pa.g,Pa.b,w,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,w=1){a.set(v),o=w,d(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,d(a,o)},render:_,addToRenderList:x,dispose:p}}function J_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(C,U,I,L,k){let $=!1;const z=f(C,L,I,U);r!==z&&(r=z,l(r.object)),$=m(C,L,I,k),$&&_(C,L,I,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(C,U,I,L),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return n.createVertexArray()}function l(C){return n.bindVertexArray(C)}function u(C){return n.deleteVertexArray(C)}function f(C,U,I,L){const k=L.wireframe===!0;let $=i[U.id];$===void 0&&($={},i[U.id]=$);const z=C.isInstancedMesh===!0?C.id:0;let ie=$[z];ie===void 0&&(ie={},$[z]=ie);let Y=ie[I.id];Y===void 0&&(Y={},ie[I.id]=Y);let te=Y[k];return te===void 0&&(te=h(c()),Y[k]=te),te}function h(C){const U=[],I=[],L=[];for(let k=0;k<t;k++)U[k]=0,I[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:I,attributeDivisors:L,object:C,attributes:{},index:null}}function m(C,U,I,L){const k=r.attributes,$=U.attributes;let z=0;const ie=I.getAttributes();for(const Y in ie)if(ie[Y].location>=0){const ne=k[Y];let Te=$[Y];if(Te===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(Te=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(Te=C.instanceColor)),ne===void 0||ne.attribute!==Te||Te&&ne.data!==Te.data)return!0;z++}return r.attributesNum!==z||r.index!==L}function _(C,U,I,L){const k={},$=U.attributes;let z=0;const ie=I.getAttributes();for(const Y in ie)if(ie[Y].location>=0){let ne=$[Y];ne===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(ne=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(ne=C.instanceColor));const Te={};Te.attribute=ne,ne&&ne.data&&(Te.data=ne.data),k[Y]=Te,z++}r.attributes=k,r.attributesNum=z,r.index=L}function x(){const C=r.newAttributes;for(let U=0,I=C.length;U<I;U++)C[U]=0}function d(C){p(C,0)}function p(C,U){const I=r.newAttributes,L=r.enabledAttributes,k=r.attributeDivisors;I[C]=1,L[C]===0&&(n.enableVertexAttribArray(C),L[C]=1),k[C]!==U&&(n.vertexAttribDivisor(C,U),k[C]=U)}function v(){const C=r.newAttributes,U=r.enabledAttributes;for(let I=0,L=U.length;I<L;I++)U[I]!==C[I]&&(n.disableVertexAttribArray(I),U[I]=0)}function w(C,U,I,L,k,$,z){z===!0?n.vertexAttribIPointer(C,U,I,k,$):n.vertexAttribPointer(C,U,I,L,k,$)}function M(C,U,I,L){x();const k=L.attributes,$=I.getAttributes(),z=U.defaultAttributeValues;for(const ie in $){const Y=$[ie];if(Y.location>=0){let te=k[ie];if(te===void 0&&(ie==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),ie==="instanceColor"&&C.instanceColor&&(te=C.instanceColor)),te!==void 0){const ne=te.normalized,Te=te.itemSize,Ie=e.get(te);if(Ie===void 0)continue;const J=Ie.buffer,ge=Ie.type,be=Ie.bytesPerElement,Pe=ge===n.INT||ge===n.UNSIGNED_INT||te.gpuType===Zc;if(te.isInterleavedBufferAttribute){const Se=te.data,Ge=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,At=te.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let Le=0;Le<Y.locationSize;Le++)p(Y.location+Le,Se.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Le=0;Le<Y.locationSize;Le++)d(Y.location+Le);n.bindBuffer(n.ARRAY_BUFFER,J);for(let Le=0;Le<Y.locationSize;Le++)w(Y.location+Le,Te/Y.locationSize,ge,ne,Ge*be,(At+Te/Y.locationSize*Le)*be,Pe)}else{if(te.isInstancedBufferAttribute){for(let Se=0;Se<Y.locationSize;Se++)p(Y.location+Se,te.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Se=0;Se<Y.locationSize;Se++)d(Y.location+Se);n.bindBuffer(n.ARRAY_BUFFER,J);for(let Se=0;Se<Y.locationSize;Se++)w(Y.location+Se,Te/Y.locationSize,ge,ne,Te*be,Te/Y.locationSize*Se*be,Pe)}}else if(z!==void 0){const ne=z[ie];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(Y.location,ne);break;case 3:n.vertexAttrib3fv(Y.location,ne);break;case 4:n.vertexAttrib4fv(Y.location,ne);break;default:n.vertexAttrib1fv(Y.location,ne)}}}}v()}function E(){D();for(const C in i){const U=i[C];for(const I in U){const L=U[I];for(const k in L){const $=L[k];for(const z in $)u($[z].object),delete $[z];delete L[k]}}delete i[C]}}function T(C){if(i[C.id]===void 0)return;const U=i[C.id];for(const I in U){const L=U[I];for(const k in L){const $=L[k];for(const z in $)u($[z].object),delete $[z];delete L[k]}}delete i[C.id]}function g(C){for(const U in i){const I=i[U];for(const L in I){const k=I[L];if(k[C.id]===void 0)continue;const $=k[C.id];for(const z in $)u($[z].object),delete $[z];delete k[C.id]}}}function b(C){for(const U in i){const I=i[U],L=C.isInstancedMesh===!0?C.id:0,k=I[L];if(k!==void 0){for(const $ in k){const z=k[$];for(const ie in z)u(z[ie].object),delete z[ie];delete k[$]}delete I[L],Object.keys(I).length===0&&delete i[U]}}}function D(){A(),a=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:A,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:g,initAttributes:x,enableAttribute:d,disableUnusedAttributes:v}}function Q_(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let m=0;m<u;m++)h+=l[m];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function j_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==ri&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const b=g===di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==yn&&g!==si&&!b&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ne("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Ne("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:M,maxSamples:E,samples:T}}function ev(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Oi,o=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||s;return s=h,i=f.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,x=f.clipIntersection,d=f.clipShadows,p=n.get(f);if(!s||_===null||_.length===0||r&&!d)r?u(null):l();else{const v=r?0:i,w=v*4;let M=p.clippingState||null;c.value=M,M=u(_,h,w,m);for(let E=0;E!==w;++E)M[E]=t[E];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,_){const x=f!==null?f.length:0;let d=null;if(x!==0){if(d=c.value,_!==!0||d===null){const p=m+x*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(d===null||d.length<p)&&(d=new Float32Array(p));for(let w=0,M=m;w!==x;++w,M+=4)a.copy(f[w]).applyMatrix4(v,o),a.normal.toArray(d,M),d[M+3]=a.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,d}}class ld extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new th(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ot(5,5,5),r=new ys({name:"CubemapFromEquirect",uniforms:pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:er});r.uniforms.tEquirect.value=t;const a=new $t(s,r),o=t.minFilter;return t.minFilter===Gi&&(t.minFilter=hn),new vc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const mu=256,tv=3,nv=20,dh=256,uh=16,iv=3,sv=new B,rv=new Ve;class lo{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new vc(1,10,null),this._boxMesh=new $t(new ot(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=sv}=r,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const f=c.autoClear,h=c.autoClearColor,m=c.autoClearDepth,_=c.autoClearStencil,x=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(e.background=c.getClearColor(rv));const d=new vc(i,s,u);return d.position.copy(o),d.update(c,e),c.autoClear=f,c.autoClearColor=h,c.autoClearDepth=m,c.autoClearStencil=_,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(mu,Rm(e))}_fromTexture(e,t){e.mapping===dr||e.mapping===Vr?this._setSize(e.image.length===0?mu:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=gu(e,!1,!1),i=Math.log2(e)-tv;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=gu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===dr||e.mapping===Vr?(this._cubemapMaterial===null&&(this._cubemapMaterial=vu()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=_u()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=av(),this._integrationMaterial=ov());const t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/uh);for(let a=0;a<=i;a++){const o=lo.lodToRoughness(a,i);if(a>i-iv)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const c=o>0?Math.log2(t)+.5*Math.log2(6/(dh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=lv());const i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}}function gu(n,e,t){return new ld(n,{minFilter:Gi,generateMipmaps:e,type:di,colorSpace:no,depthBuffer:t})}function na(n,e,t){return new ys({name:n,uniforms:e,vertexShader:Xe.cube_vert,fragmentShader:t,side:mn,blending:er,depthTest:!1,depthWrite:!1})}function av(){return na("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${dh}u

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
	`)}function ov(){return na("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:uh}},`

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
	`)}function lv(){return na("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${nv}
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
	`)}function _u(){return na("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function vu(){return na("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function cv(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,m=!1){return h==null?null:m?a(h):r(h)}function r(h){if(h&&h.isTexture){const m=h.mapping;if(m===$o||m===Xo)if(e.has(h)){const _=e.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const x=new ld(_.height);return x.fromEquirectangularTexture(n,h),e.set(h,x),h.addEventListener("dispose",l),o(x.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const m=h.mapping,_=m===$o||m===Xo,x=m===dr||m===Vr;if(_||x){let d=t.get(h);const p=d!==void 0?d.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new lo(n)),d=_?i.fromEquirectangular(h,d):i.fromCubemap(h,d),d.texture.pmremVersion=h.pmremVersion,t.set(h,d),d.texture;if(d!==void 0)return d.texture;{const v=h.image;return _&&v&&v.height>0||x&&v&&c(v)?(i===null&&(i=new lo(n)),d=_?i.fromEquirectangular(h):i.fromCubemap(h),d.texture.pmremVersion=h.pmremVersion,t.set(h,d),h.addEventListener("dispose",u),d.texture):null}}}return h}function o(h,m){return m===$o?h.mapping=dr:m===Xo&&(h.mapping=Vr),h}function c(h){let m=0;const _=6;for(let x=0;x<_;x++)h[x]!==void 0&&m++;return m===_}function l(h){const m=h.target;m.removeEventListener("dispose",l);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function u(h){const m=h.target;m.removeEventListener("dispose",u);const _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function dv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Va("WebGLRenderer: "+i+" extension not supported."),s}}}function uv(n,e,t,i){const s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){c(_.target)}function c(_){_.index!==null&&e.remove(_.index);for(const d in _.attributes)e.remove(_.attributes[d]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);const x=r.get(_);x&&(e.remove(x),r.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function l(_,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function u(_){const x=_.attributes;for(const d in x)e.update(x[d],n.ARRAY_BUFFER)}function f(_){const x=_.index,d=_.attributes.position;let p=0;if(d===void 0)return;const v=x!==null?x.array.length:d.array.length/3-1,w=d.count>=65535?jf:Qf,M=new w(Math.ceil(v/3)*6,1),E=M.array;if(x!==null){const g=x.array;p=x.version;for(let b=0,D=0;b<v;b+=3){const A=g[b+0],C=g[b+1],U=g[b+2];E[D++]=A,E[D++]=C,E[D++]=C,E[D++]=U,E[D++]=U,E[D++]=A}}else{p=d.version;for(let g=0,b=0;g<v;g+=3){const D=g+0,A=g+1,C=g+2;E[b++]=D,E[b++]=A,E[b++]=A,E[b++]=C,E[b++]=C,E[b++]=D}}M.version=p;const T=r.get(_);T&&e.remove(T),r.set(_,M)}function h(_){const x=r.get(_);if(x){const d=_.index;d!==null&&x.version<d.version&&f(_)}else f(_);return r.get(_)}function m(){for(const _ in s){const x=s[_].deref();x!==void 0&&c(x)}}return{get:l,update:u,getWireframeAttribute:h,dispose:m}}function fv(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,h){n.drawElements(i,h,r,f*a),t.update(h,i,1)}function l(f,h,m){m!==0&&(n.drawElementsInstanced(i,h,r,f*a,m),t.update(h,i,m))}function u(f,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,m);let x=0;for(let d=0;d<m;d++)x+=h[d];t.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function hv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:at("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function pv(n,e,t){const i=new WeakMap,s=new yt;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let A=function(){b.dispose(),i.delete(o),o.removeEventListener("dispose",A)};var m=A;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),x===!0&&(M=2),d===!0&&(M=3);let E=o.attributes.position.count*M,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const g=new Float32Array(E*T*4*f),b=new Kf(g,E,T,f);b.type=si,b.needsUpdate=!0;const D=M*4;for(let C=0;C<f;C++){const U=p[C],I=v[C],L=w[C],k=E*T*4*C;for(let $=0;$<U.count;$++){const z=$*D;_===!0&&(s.fromBufferAttribute(U,$),g[k+z+0]=s.x,g[k+z+1]=s.y,g[k+z+2]=s.z,g[k+z+3]=0),x===!0&&(s.fromBufferAttribute(I,$),g[k+z+4]=s.x,g[k+z+5]=s.y,g[k+z+6]=s.z,g[k+z+7]=0),d===!0&&(s.fromBufferAttribute(L,$),g[k+z+8]=s.x,g[k+z+9]=s.y,g[k+z+10]=s.z,g[k+z+11]=L.itemSize===4?s.w:1)}}h={count:f,texture:b,size:new qe(E,T)},i.set(o,h),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let d=0;d<l.length;d++)_+=l[d];const x=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function mv(n,e,t,i,s){let r=new WeakMap;function a(l){const u=s.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function o(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const gv={[Pf]:"LINEAR_TONE_MAPPING",[Df]:"REINHARD_TONE_MAPPING",[Lf]:"CINEON_TONE_MAPPING",[If]:"ACES_FILMIC_TONE_MAPPING",[Uf]:"AGX_TONE_MAPPING",[Ff]:"NEUTRAL_TONE_MAPPING",[Nf]:"CUSTOM_TONE_MAPPING"};function _v(n,e,t,i,s,r){const a=new oi(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const u=new Jt;u.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new lt([0,2,0,0,2,0],2));const f=new a0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new $t(u,f),m=new oh(-1,1,1,-1,0,1);let _=null,x=null,d=!1,p,v=null,w=[],M=!1;this.setSize=function(E,T){a.setSize(E,T),o!==null&&o.setSize(E,T),c!==null&&c.setSize(E,T);for(let g=0;g<w.length;g++){const b=w[g];b.setSize&&b.setSize(E,T)}},this.setEffects=function(E){w=E,M=w.length>0&&w[0].isRenderPass===!0;const T=a.width,g=a.height;w.length>0&&o===null&&(o=new oi(T,g,{type:di,depthBuffer:!1,stencilBuffer:!1}),c=new oi(T,g,{type:di,depthBuffer:!1,stencilBuffer:!1}));const b=s===!0&&w.some(D=>D.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&l===null&&(l=new fr(T,g),r===!0&&(l.format=Hi,l.type=ur)),a.dispose(),a.depthTexture=b?l:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let D=0;D<w.length;D++){const A=w[D];A.setSize&&A.setSize(T,g),b&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(l)}},this.begin=function(E,T){if(d||E.toneMapping===wi&&w.length===0)return!1;if(v=T,T!==null){const g=T.width,b=T.height;(a.width!==g||a.height!==b)&&this.setSize(g,b)}return M===!1&&E.setRenderTarget(a),p=E.toneMapping,E.toneMapping=wi,!0},this.hasRenderPass=function(){return M},this.end=function(E,T){E.toneMapping=p,d=!0;let g=a,b=o;for(let D=0;D<w.length;D++){const A=w[D];A.enabled!==!1&&(A.render(E,b,g,T),A.needsSwap!==!1&&(g=b,b=b===o?c:o))}if(_!==E.outputColorSpace||x!==E.toneMapping){_=E.outputColorSpace,x=E.toneMapping,f.defines={},et.getTransfer(_)===ft&&(f.defines.SRGB_TRANSFER="");const D=gv[x];D&&(f.defines[D]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,E.setRenderTarget(v),E.render(h,m),v=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),f.dispose()}}const fh=new nn,hh=new fr(1,1),ph=new nh(1),mh=new Kf,gh=new Fm,_h=new th,xu=[],Su=[],Mu=new Float32Array(16),yu=new Float32Array(9),bu=new Float32Array(4);function Sr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=xu[s];if(r===void 0&&(r=new Float32Array(s),xu[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Do(n,e){let t=Su[e];t===void 0&&(t=new Int32Array(e),Su[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function vv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function xv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function Sv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function Mv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function yv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Ot(t,i))return;bu.set(i),n.uniformMatrix2fv(this.addr,!1,bu),kt(t,i)}}function bv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Ot(t,i))return;yu.set(i),n.uniformMatrix3fv(this.addr,!1,yu),kt(t,i)}}function wv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Ot(t,i))return;Mu.set(i),n.uniformMatrix4fv(this.addr,!1,Mu),kt(t,i)}}function Ev(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Tv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function Av(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function Rv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function Cv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Pv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function Dv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function Lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function Lo(n){return n.version===0&&(n.compareFunction=qf,n.needsUpdate=!0),n}function Iv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Lo(hh):r=fh,t.setTexture2D(e||r,s)}function Nv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||gh,s)}function Uv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Lo(ph):r=_h,t.setTextureCube(e||r,s)}function Fv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||mh,s)}function Ov(n){switch(n){case 5126:return vv;case 35664:return xv;case 35665:return Sv;case 35666:return Mv;case 35674:return yv;case 35675:return bv;case 35676:return wv;case 5124:case 35670:return Ev;case 35667:case 35671:return Tv;case 35668:case 35672:return Av;case 35669:case 35673:return Rv;case 5125:return Cv;case 36294:return Pv;case 36295:return Dv;case 36296:return Lv;case 35678:case 36198:case 36298:case 36306:case 35682:return Iv;case 35679:case 36299:case 36307:return Nv;case 35680:case 36300:case 36308:case 36293:return Uv;case 36289:case 36303:case 36311:case 36292:return Fv}}function kv(n,e){n.uniform1fv(this.addr,e)}function Bv(n,e){const t=Sr(e,this.size,2);n.uniform2fv(this.addr,t)}function zv(n,e){const t=Sr(e,this.size,3);n.uniform3fv(this.addr,t)}function Gv(n,e){const t=Sr(e,this.size,4);n.uniform4fv(this.addr,t)}function Hv(n,e){const t=Sr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Vv(n,e){const t=Sr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Wv(n,e){const t=Sr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $v(n,e){n.uniform1iv(this.addr,e)}function Xv(n,e){n.uniform2iv(this.addr,e)}function qv(n,e){n.uniform3iv(this.addr,e)}function Yv(n,e){n.uniform4iv(this.addr,e)}function Kv(n,e){n.uniform1uiv(this.addr,e)}function Zv(n,e){n.uniform2uiv(this.addr,e)}function Jv(n,e){n.uniform3uiv(this.addr,e)}function Qv(n,e){n.uniform4uiv(this.addr,e)}function jv(n,e,t){const i=this.cache,s=e.length,r=Do(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Lo(hh):a=fh;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function ex(n,e,t){const i=this.cache,s=e.length,r=Do(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||gh,r[a])}function tx(n,e,t){const i=this.cache,s=e.length,r=Do(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Lo(ph):a=_h;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function nx(n,e,t){const i=this.cache,s=e.length,r=Do(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||mh,r[a])}function ix(n){switch(n){case 5126:return kv;case 35664:return Bv;case 35665:return zv;case 35666:return Gv;case 35674:return Hv;case 35675:return Vv;case 35676:return Wv;case 5124:case 35670:return $v;case 35667:case 35671:return Xv;case 35668:case 35672:return qv;case 35669:case 35673:return Yv;case 5125:return Kv;case 36294:return Zv;case 36295:return Jv;case 36296:return Qv;case 35678:case 36198:case 36298:case 36306:case 35682:return jv;case 35679:case 36299:case 36307:return ex;case 35680:case 36300:case 36308:case 36293:return tx;case 36289:case 36303:case 36311:case 36292:return nx}}class sx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ov(t.type)}}class rx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ix(t.type)}}class ax{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const xl=/(\w+)(\])?(\[|\.)?/g;function wu(n,e){n.seq.push(e),n.map[e.id]=e}function ox(n,e,t){const i=n.name,s=i.length;for(xl.lastIndex=0;;){const r=xl.exec(i),a=xl.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){wu(t,l===void 0?new sx(o,n,e):new rx(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new ax(o),wu(t,f)),t=f}}}class Wa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);ox(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Eu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const lx=37297;let cx=0;function dx(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Tu=new Oe;function ux(n){et._getMatrix(Tu,et.workingColorSpace,n);const e=`mat3( ${Tu.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case io:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Au(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+dx(n.getShaderSource(e),o)}else return r}function fx(n,e){const t=ux(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const hx={[Pf]:"Linear",[Df]:"Reinhard",[Lf]:"Cineon",[If]:"ACESFilmic",[Uf]:"AgX",[Ff]:"Neutral",[Nf]:"Custom"};function px(n,e){const t=hx[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Da=new B;function mx(){et.getLuminanceCoefficients(Da);const n=Da.x.toFixed(4),e=Da.y.toFixed(4),t=Da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function _x(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Lr(n){return n!==""}function Ru(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Cu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xx=/^[ \t]*#include +<([\w\d./]+)>/gm;function xc(n){return n.replace(xx,Sx)}function Sx(n,e){const t=Xe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return xc(t)}const Mx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pu(n){return n.replace(Mx,yx)}function yx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Du(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const bx={[ka]:"SHADOWMAP_TYPE_PCF",[Dr]:"SHADOWMAP_TYPE_VSM"};function wx(n){return bx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ex={[Vr]:"ENVMAP_MODE_REFRACTION"};function Tx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Ex[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ax={[Kc]:"ENVMAP_BLENDING_MULTIPLY",[um]:"ENVMAP_BLENDING_MIX",[fm]:"ENVMAP_BLENDING_ADD"};function Rx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Ax[n.combine]||"ENVMAP_BLENDING_NONE"}function Cx(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=wx(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Tx(t),f=Rx(t),h=gx(t),m=_x(r),_=s.createProgram();let x,d,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Lr).join(`
`),x.length>0&&(x+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Lr).join(`
`),d.length>0&&(d+=`
`)):(x=[Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),d=[Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==wi?px("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,fx("linearToOutputTexel",t.outputColorSpace),mx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lr).join(`
`)),a=xc(a),a=Ru(a,t),a=Cu(a,t),o=xc(o),o=Ru(o,t),o=Cu(o,t),a=Pu(a),o=Pu(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,d=["#define varying in",t.glslVersion===Bd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=p+x+a,w=p+d+o,M=Eu(s,s.VERTEX_SHADER,v),E=Eu(s,s.FRAGMENT_SHADER,w);s.attachShader(_,M),s.attachShader(_,E),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(A){if(n.debug.checkShaderErrors){const C=s.getProgramInfoLog(_)||"",U=s.getShaderInfoLog(M)||"",I=s.getShaderInfoLog(E)||"",L=C.trim(),k=U.trim(),$=I.trim();let z=!0,ie=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,M,E);else{const Y=Au(s,M,"vertex"),te=Au(s,E,"fragment");at("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+Y+`
`+te)}else L!==""?Ne("WebGLProgram: Program Info Log:",L):(k===""||$==="")&&(ie=!1);ie&&(A.diagnostics={runnable:z,programLog:L,vertexShader:{log:k,prefix:x},fragmentShader:{log:$,prefix:d}})}s.deleteShader(M),s.deleteShader(E),g=new Wa(s,_),b=vx(s,_)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(_,lx)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=E,this}let Px=0;class Dx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Lx(e),t.set(e,i)),i}}class Lx{constructor(e){this.id=Px++,this.code=e,this.usedTimes=0}}function Ix(n){return n===Ms||n===eo||n===to}function Nx(n,e,t,i,s,r){const a=new Zf,o=new Dx,c=new Set,l=[],u=new Map,f=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return c.add(g),g===0?"uv":`uv${g}`}function _(g,b,D,A,C,U){const I=A.fog,L=C.geometry,k=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?A.environment:null,$=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,z=e.get(g.envMap||k,$),ie=h[g.type];let Y=i.precision;g.precision!==null&&(Y=i.getMaxPrecision(g.precision),Y!==g.precision&&Ne("WebGLProgram.getParameters:",g.precision,"not supported, using",Y,"instead."));const te=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ne=te!==void 0?te.length:0;let Te=0;L.morphAttributes.position!==void 0&&(Te=1),L.morphAttributes.normal!==void 0&&(Te=2),L.morphAttributes.color!==void 0&&(Te=3);let Ie,J,ge,be;if(ie){const ve=ei[ie];Ie=ve.vertexShader,J=ve.fragmentShader}else{Ie=g.vertexShader,J=g.fragmentShader;const ve=o.getVertexShaderStage(g),ut=o.getFragmentShaderStage(g);o.update(g,ve,ut),ge=ve.id,be=ut.id}const Pe=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),Ge=C.isInstancedMesh===!0,At=C.isBatchedMesh===!0,Le=!!g.map,dt=!!g.matcap,pt=!!z,Je=pt&&z.isPMREMTexture===!0,Xt=!!g.aoMap,Dt=!!g.lightMap,cn=!!g.bumpMap&&g.wireframe===!1,St=!!g.normalMap,Kn=!!g.displacementMap,Bt=!!g.emissiveMap,Tn=!!g.metalnessMap,An=!!g.roughnessMap,Rn=g.anisotropy>0,F=g.clearcoat>0,Cn=g.diffuseRoughness>0,vt=g.dispersion>0,xt=g.retroreflectivity>0,me=g.iridescence>0,Lt=g.sheen>0,De=g.transmission>0,Ue=Rn&&!!g.anisotropyMap,R=F&&!!g.clearcoatMap,S=F&&!!g.clearcoatNormalMap,H=F&&!!g.clearcoatRoughnessMap,se=Cn&&!!g.diffuseRoughnessMap,ee=me&&!!g.iridescenceMap,oe=me&&!!g.iridescenceThicknessMap,he=Lt&&!!g.sheenColorMap,Z=Lt&&!!g.sheenRoughnessMap,Q=!!g.specularMap,ce=!!g.specularColorMap,P=!!g.specularIntensityMap,j=De&&!!g.transmissionMap,K=De&&!!g.thicknessMap,de=!!g.gradientMap,ae=!!g.alphaMap,le=g.alphaTest>0,Re=!!g.alphaHash,$e=!!g.extensions;let re=wi;g.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(re=n.toneMapping);const Ce=Je?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,He={shaderID:ie,shaderType:g.type,shaderName:g.name,vertexShader:Ie,fragmentShader:J,defines:g.defines,customVertexShaderID:ge,customFragmentShaderID:be,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:Y,batching:At,batchingColor:At&&C._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&C.instanceColor!==null,instancingMorph:Ge&&C.morphTexture!==null,outputColorSpace:Pe===null?n.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Le,matcap:dt,envMap:pt,envMapMode:pt&&z.mapping,envMapPMREM:Je,envMapMaxLod:Je?Ce.length-1:null,envMapSize:Je?Ce[0].width:null,aoMap:Xt,lightMap:Dt,bumpMap:cn,normalMap:St,displacementMap:Kn,emissiveMap:Bt,normalMapObjectSpace:St&&g.normalMapType===mm,normalMapTangentSpace:St&&g.normalMapType===pc,packedNormalMap:St&&g.normalMapType===pc&&Ix(g.normalMap.format),metalnessMap:Tn,roughnessMap:An,anisotropy:Rn,anisotropyMap:Ue,clearcoat:F,clearcoatMap:R,clearcoatNormalMap:S,clearcoatRoughnessMap:H,diffuseRoughness:Cn,diffuseRoughnessMap:se,dispersion:vt,retroreflection:xt,iridescence:me,iridescenceMap:ee,iridescenceThicknessMap:oe,sheen:Lt,sheenColorMap:he,sheenRoughnessMap:Z,specularMap:Q,specularColorMap:ce,specularIntensityMap:P,transmission:De,transmissionMap:j,thicknessMap:K,gradientMap:de,opaque:g.transparent===!1&&g.blending===Or&&g.alphaToCoverage===!1,alphaMap:ae,alphaTest:le,alphaHash:Re,combine:g.combine,mapUv:Le&&m(g.map.channel),aoMapUv:Xt&&m(g.aoMap.channel),lightMapUv:Dt&&m(g.lightMap.channel),bumpMapUv:cn&&m(g.bumpMap.channel),normalMapUv:St&&m(g.normalMap.channel),displacementMapUv:Kn&&m(g.displacementMap.channel),emissiveMapUv:Bt&&m(g.emissiveMap.channel),metalnessMapUv:Tn&&m(g.metalnessMap.channel),roughnessMapUv:An&&m(g.roughnessMap.channel),anisotropyMapUv:Ue&&m(g.anisotropyMap.channel),clearcoatMapUv:R&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:S&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&m(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&m(g.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:he&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:Z&&m(g.sheenRoughnessMap.channel),specularMapUv:Q&&m(g.specularMap.channel),specularColorMapUv:ce&&m(g.specularColorMap.channel),specularIntensityMapUv:P&&m(g.specularIntensityMap.channel),transmissionMapUv:j&&m(g.transmissionMap.channel),thicknessMapUv:K&&m(g.thicknessMap.channel),alphaMapUv:ae&&m(g.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(St||Rn),vertexNormals:!!L.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!L.attributes.uv&&(Le||ae),fog:!!I,useFog:g.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||L.attributes.normal===void 0&&St===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Se,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Te,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:U.filter(ve=>ve.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:re,decodeVideoTexture:Le&&g.map.isVideoTexture===!0&&et.getTransfer(g.map.colorSpace)===ft,decodeVideoTextureEmissive:Bt&&g.emissiveMap.isVideoTexture===!0&&et.getTransfer(g.emissiveMap.colorSpace)===ft,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===ni,flipSided:g.side===mn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:$e&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&g.extensions.multiDraw===!0||At)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function x(g){const b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(const D in g.defines)b.push(D),b.push(g.defines[D]);return g.isRawShaderMaterial===!1&&(d(b,g),p(b,g),b.push(n.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function d(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapPMREM),g.push(b.envMapMaxLod),g.push(b.envMapSize),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.diffuseRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.numLightProbeGrids),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function p(g,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function v(g){const b=h[g.type];let D;if(b){const A=ei[b];D=i0.clone(A.uniforms)}else D=g.uniforms;return D}function w(g,b){let D=u.get(b);return D!==void 0?++D.usedTimes:(D=new Cx(n,b,g,s),l.push(D),u.set(b,D)),D}function M(g){if(--g.usedTimes===0){const b=l.indexOf(g);l[b]=l[l.length-1],l.pop(),u.delete(g.cacheKey),g.destroy()}}function E(g){o.remove(g)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:x,getUniforms:v,acquireProgram:w,releaseProgram:M,releaseShaderCache:E,programs:l,dispose:T}}function Ux(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Fx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Lu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Iu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,_,x,d,p){let v=n[e];return v===void 0?(v={id:h.id,object:h,geometry:m,material:_,materialVariant:a(h),groupOrder:x,renderOrder:h.renderOrder,z:d,group:p},n[e]=v):(v.id=h.id,v.object=h,v.geometry=m,v.material=_,v.materialVariant=a(h),v.groupOrder=x,v.renderOrder=h.renderOrder,v.z=d,v.group=p),e++,v}function c(h,m,_,x,d,p,v){v.reversedDepth===!0&&(d=-d);const w=o(h,m,_,x,d,p);_.transmission>0?i.push(w):_.transparent===!0?s.push(w):t.push(w)}function l(h,m,_,x,d,p){const v=o(h,m,_,x,d,p);_.transmission>0?i.unshift(v):_.transparent===!0?s.unshift(v):t.unshift(v)}function u(h,m){t.length>1&&t.sort(h||Fx),i.length>1&&i.sort(m||Lu),s.length>1&&s.sort(m||Lu)}function f(){for(let h=e,m=n.length;h<m;h++){const _=n[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:u}}function Ox(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Iu,n.set(i,[a])):s>=r.length?(a=new Iu,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function kx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new Ve};break;case"SpotLight":t={position:new B,direction:new B,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function Bx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let zx=0;function Gx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Hx(n){const e=new kx,t=Bx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new B);const s=new B,r=new _t,a=new _t;function o(l){let u=0,f=0,h=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let m=0,_=0,x=0,d=0,p=0,v=0,w=0,M=0,E=0,T=0,g=0,b=0,D=0,A=0;l.sort(Gx);for(let U=0,I=l.length;U<I;U++){const L=l[U],k=L.color,$=L.intensity,z=L.distance;let ie=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ms?ie=L.shadow.map.texture:ie=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=k.r*$,f+=k.g*$,h+=k.b*$;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],$);A++}else if(L.isSunLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const te=L.shadow,ne=t.get(L);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),i.sunShadow[_]=ne,i.sunShadowMap[_]=ie;const Te=te.getViewportCount();for(let Ie=0;Ie<Te;Ie++)i.sunShadowMatrix[x+Ie]=te.getMatrix(Ie),i.sunShadowCascade[x+Ie]=te._cascadeData[Ie];x+=Te,_++}i.sun[m]=Y,m++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const te=L.shadow,ne=t.get(L);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,i.directionalShadow[d]=ne,i.directionalShadowMap[d]=ie,i.directionalShadowMatrix[d]=L.shadow.matrix,E++}i.directional[d]=Y,d++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(k).multiplyScalar($),Y.distance=z,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[v]=Y;const te=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,te.updateMatrices(L),L.castShadow&&D++),i.spotLightMatrix[v]=te.matrix,L.castShadow){const ne=t.get(L);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,i.spotShadow[v]=ne,i.spotShadowMap[v]=ie,g++}v++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(k).multiplyScalar($),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),i.rectArea[w]=Y,w++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const te=L.shadow,ne=t.get(L);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,ne.shadowCameraNear=te.camera.near,ne.shadowCameraFar=te.camera.far,i.pointShadow[p]=ne,i.pointShadowMap[p]=ie,i.pointShadowMatrix[p]=L.shadow.matrix,T++}i.point[p]=Y,p++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar($),Y.groundColor.copy(L.groundColor).multiplyScalar($),i.hemi[M]=Y,M++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const C=i.hash;(C.sunLength!==m||C.directionalLength!==d||C.pointLength!==p||C.spotLength!==v||C.rectAreaLength!==w||C.hemiLength!==M||C.numSunShadows!==_||C.numDirectionalShadows!==E||C.numPointShadows!==T||C.numSpotShadows!==g||C.numSpotMaps!==b||C.numLightProbes!==A)&&(i.sun.length=m,i.directional.length=d,i.spot.length=v,i.rectArea.length=w,i.point.length=p,i.hemi.length=M,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+b-D,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=A,C.sunLength=m,C.directionalLength=d,C.pointLength=p,C.spotLength=v,C.rectAreaLength=w,C.hemiLength=M,C.numSunShadows=_,C.numDirectionalShadows=E,C.numPointShadows=T,C.numSpotShadows=g,C.numSpotMaps=b,C.numLightProbes=A,i.version=zx++)}function c(l,u){let f=0,h=0,m=0,_=0,x=0,d=0;const p=u.matrixWorldInverse;for(let v=0,w=l.length;v<w;v++){const M=l[v];if(M.isSunLight){const E=i.sun[f];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),f++}else if(M.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),h++}else if(M.isSpotLight){const E=i.spot[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),_++}else if(M.isRectAreaLight){const E=i.rectArea[x];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),m++}else if(M.isHemisphereLight){const E=i.hemi[d];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),d++}}}return{setup:o,setupView:c,state:i}}function Nu(n){const e=new Hx(n),t=[],i=[],s=[];function r(f){u.camera=f,t.length=0,i.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}function o(f){i.push(f)}function c(){e.setup(t),s.sort((f,h)=>f.priority-h.priority||f.id-h.id)}function l(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Vx(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Nu(n),e.set(s,[o])):r>=a.length?(o=new Nu(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Wx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$x=`uniform sampler2D shadow_pass;
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
}`,Xx=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],qx=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Uu=new _t,Ar=new B,Sl=new B;function Yx(n,e,t){let i=new Xr;const s=new qe,r=new qe,a=new yt,o=new o0,c=new l0,l={},u=t.maxTextureSize,f={[Ss]:mn,[mn]:Ss,[ni]:ni},h=new ys({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:Wx,fragmentShader:$x}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new Jt;_.setAttribute("position",new ps(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new $t(_,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ka;let p=this.type;this.render=function(T,g,b){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||T.length===0)return;this.type===Xp&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ka);const D=n.getRenderTarget(),A=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),U=n.state;U.setBlending(er),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const I=p!==this.type;I&&g.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(k=>k.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,k=T.length;L<k;L++){const $=T[L],z=$.shadow;if(z===void 0){Ne("WebGLShadowMap:",$,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const ie=z.getFrameExtents();s.multiply(ie),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,z.mapSize.y=r.y));const Y=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=Y,z.map===null||I===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Dr){if($.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new oi(s.x,s.y,{format:Ms,type:di,minFilter:hn,magFilter:hn,generateMipmaps:!1}),z.map.texture.name=$.name+".shadowMap",z.map.depthTexture=new fr(s.x,s.y,si),z.map.depthTexture.name=$.name+".shadowMapDepth",z.map.depthTexture.format=ts,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Zt,z.map.depthTexture.magFilter=Zt}else $.isPointLight?(z.map=new ld(s.x),z.map.depthTexture=new nh(s.x,ci)):(z.map=new oi(s.x,s.y),z.map.depthTexture=new fr(s.x,s.y,ci)),z.map.depthTexture.name=$.name+".shadowMap",z.map.depthTexture.format=ts,this.type===ka?(z.map.depthTexture.compareFunction=Y?Xf:$f,z.map.depthTexture.minFilter=hn,z.map.depthTexture.magFilter=hn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Zt,z.map.depthTexture.magFilter=Zt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);const te=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();$.isPointLight!==!0&&z.updateMatrices($,b);const ne=z.camera.layers.mask&4294967294?z.camera.layers:b.layers;for(let Te=0;Te<te;Te++){const Ie=z.getCamera(Te);if($.isPointLight){const J=z.camera,ge=z.matrix,be=$.distance||J.far;be!==J.far&&(J.far=be,J.updateProjectionMatrix()),Ar.setFromMatrixPosition($.matrixWorld),J.position.copy(Ar),Sl.copy(J.position),Sl.add(Xx[Te]),J.up.copy(qx[Te]),J.lookAt(Sl),J.updateMatrixWorld(),ge.makeTranslation(-Ar.x,-Ar.y,-Ar.z),Uu.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Uu,J.coordinateSystem,J.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,Te),n.clear();else{Te===0&&(n.setRenderTarget(z.map),n.clear());const J=z.getViewport(Te);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),U.viewport(a)}i=z.getFrustum(Te),M(g,b,Ie,$,ne,this.type)}z.isPointLightShadow!==!0&&this.type===Dr&&v(z,b),z.needsUpdate=!1}p=this.type,d.needsUpdate=!1,n.setRenderTarget(D,A,C)};function v(T,g){const b=e.update(x);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new oi(s.x,s.y,{format:Ms,type:di}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(g,null,b,h,x,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(g,null,b,m,x,null)}function w(T,g,b,D){let A=null;const C=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)A=C;else if(A=b.isPointLight===!0?c:o,n.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const U=A.uuid,I=g.uuid;let L=l[U];L===void 0&&(L={},l[U]=L);let k=L[I];k===void 0&&(k=A.clone(),L[I]=k,g.addEventListener("dispose",E)),A=k}if(A.visible=g.visible,A.wireframe=g.wireframe,D===Dr?A.side=g.shadowSide!==null?g.shadowSide:g.side:A.side=g.shadowSide!==null?g.shadowSide:f[g.side],A.alphaMap=g.alphaMap,A.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,A.map=g.map,A.clipShadows=g.clipShadows,A.clippingPlanes=g.clippingPlanes,A.clipIntersection=g.clipIntersection,A.displacementMap=g.displacementMap,A.displacementScale=g.displacementScale,A.displacementBias=g.displacementBias,A.wireframeLinewidth=g.wireframeLinewidth,A.linewidth=g.linewidth,b.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const U=n.properties.get(A);U.light=b}return A}function M(T,g,b,D,A,C){if(T.visible===!1)return;if(T.layers.test(A)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===Dr)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const L=e.update(T),k=T.material;if(Array.isArray(k)){const $=L.groups;for(let z=0,ie=$.length;z<ie;z++){const Y=$[z],te=k[Y.materialIndex];if(te&&te.visible){const ne=w(T,te,D,C);T.onBeforeShadow(n,T,g,b,L,ne,Y),n.renderBufferDirect(b,null,L,ne,T,Y),T.onAfterShadow(n,T,g,b,L,ne,Y)}}}else if(k.visible){const $=w(T,k,D,C);T.onBeforeShadow(n,T,g,b,L,$,null),n.renderBufferDirect(b,null,L,$,T,null),T.onAfterShadow(n,T,g,b,L,$,null)}}const I=T.children;for(let L=0,k=I.length;L<k;L++)M(I[L],g,b,D,A,C)}function E(T){T.target.removeEventListener("dispose",E);for(const b in l){const D=l[b],A=T.target.uuid;A in D&&(D[A].dispose(),delete D[A])}}}function Kx(n,e){function t(){let P=!1;const j=new yt;let K=null;const de=new yt(0,0,0,0);return{setMask:function(ae){K!==ae&&!P&&(n.colorMask(ae,ae,ae,ae),K=ae)},setLocked:function(ae){P=ae},setClear:function(ae,le,Re,$e,re){re===!0&&(ae*=$e,le*=$e,Re*=$e),j.set(ae,le,Re,$e),de.equals(j)===!1&&(n.clearColor(ae,le,Re,$e),de.copy(j))},reset:function(){P=!1,K=null,de.set(-1,0,0,0)}}}function i(){let P=!1,j=!1,K=null,de=null,ae=null;return{setReversed:function(le){if(j!==le){const Re=e.get("EXT_clip_control");le?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),j=le;const $e=ae;ae=null,this.setClear($e)}},getReversed:function(){return j},setTest:function(le){le?Se(n.DEPTH_TEST):Ge(n.DEPTH_TEST)},setMask:function(le){K!==le&&!P&&(n.depthMask(le),K=le)},setFunc:function(le){if(j&&(le=Tm[le]),de!==le){switch(le){case Cl:n.depthFunc(n.NEVER);break;case Pl:n.depthFunc(n.ALWAYS);break;case Dl:n.depthFunc(n.LESS);break;case Hr:n.depthFunc(n.LEQUAL);break;case Ll:n.depthFunc(n.EQUAL);break;case Il:n.depthFunc(n.GEQUAL);break;case Nl:n.depthFunc(n.GREATER);break;case Ul:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=le}},setLocked:function(le){P=le},setClear:function(le){ae!==le&&(ae=le,j&&(le=1-le),n.clearDepth(le))},reset:function(){P=!1,K=null,de=null,ae=null,j=!1}}}function s(){let P=!1,j=null,K=null,de=null,ae=null,le=null,Re=null,$e=null,re=null;return{setTest:function(Ce){P||(Ce?Se(n.STENCIL_TEST):Ge(n.STENCIL_TEST))},setMask:function(Ce){j!==Ce&&!P&&(n.stencilMask(Ce),j=Ce)},setFunc:function(Ce,He,ve){(K!==Ce||de!==He||ae!==ve)&&(n.stencilFunc(Ce,He,ve),K=Ce,de=He,ae=ve)},setOp:function(Ce,He,ve){(le!==Ce||Re!==He||$e!==ve)&&(n.stencilOp(Ce,He,ve),le=Ce,Re=He,$e=ve)},setLocked:function(Ce){P=Ce},setClear:function(Ce){re!==Ce&&(n.clearStencil(Ce),re=Ce)},reset:function(){P=!1,j=null,K=null,de=null,ae=null,le=null,Re=null,$e=null,re=null}}}const r=new t,a=new i,o=new s;let c={};const l=new WeakMap;let u={},f={},h={},m=new WeakMap,_=[],x=null,d=!1,p=null,v=null,w=null,M=null,E=null,T=null,g=null,b=new Ve(0,0,0),D=0,A=!1,C=null,U=null,I=null,L=null,k=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ie=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=ie>=1):Y.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=ie>=2);let te=null,ne={};const Te=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),J=new yt().fromArray(Te),ge=new yt().fromArray(Ie);function be(P,j,K,de){const ae=new Uint8Array(4),le=n.createTexture();n.bindTexture(P,le),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Re=0;Re<K;Re++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(j,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(j+Re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return le}const Pe={};Pe[n.TEXTURE_2D]=be(n.TEXTURE_2D,n.TEXTURE_2D,1),Pe[n.TEXTURE_CUBE_MAP]=be(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[n.TEXTURE_2D_ARRAY]=be(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Pe[n.TEXTURE_3D]=be(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Se(n.DEPTH_TEST),a.setFunc(Hr),cn(!1),St(Ud),Se(n.CULL_FACE),Xt(er);function Se(P){u[P]!==!0&&(n.enable(P),u[P]=!0)}function Ge(P){u[P]!==!1&&(n.disable(P),u[P]=!1)}function At(P,j){return h[P]!==j?(n.bindFramebuffer(P,j),h[P]=j,P===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=j),P===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=j),!0):!1}function Le(P,j){let K=_,de=!1;if(P){K=m.get(j),K===void 0&&(K=[],m.set(j,K));const ae=P.textures;if(K.length!==ae.length||K[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Re=ae.length;le<Re;le++)K[le]=n.COLOR_ATTACHMENT0+le;K.length=ae.length,de=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,de=!0);de&&n.drawBuffers(K)}function dt(P){return x!==P?(n.useProgram(P),x=P,!0):!1}const pt={[$s]:n.FUNC_ADD,[Yp]:n.FUNC_SUBTRACT,[Kp]:n.FUNC_REVERSE_SUBTRACT};pt[Zp]=n.MIN,pt[Jp]=n.MAX;const Je={[Qp]:n.ZERO,[jp]:n.ONE,[em]:n.SRC_COLOR,[Rf]:n.SRC_ALPHA,[am]:n.SRC_ALPHA_SATURATE,[sm]:n.DST_COLOR,[nm]:n.DST_ALPHA,[tm]:n.ONE_MINUS_SRC_COLOR,[Cf]:n.ONE_MINUS_SRC_ALPHA,[rm]:n.ONE_MINUS_DST_COLOR,[im]:n.ONE_MINUS_DST_ALPHA,[om]:n.CONSTANT_COLOR,[lm]:n.ONE_MINUS_CONSTANT_COLOR,[cm]:n.CONSTANT_ALPHA,[dm]:n.ONE_MINUS_CONSTANT_ALPHA};function Xt(P,j,K,de,ae,le,Re,$e,re,Ce){if(P===er){d===!0&&(Ge(n.BLEND),d=!1);return}if(d===!1&&(Se(n.BLEND),d=!0),P!==qp){if(P!==p||Ce!==A){if((v!==$s||E!==$s)&&(n.blendEquation(n.FUNC_ADD),v=$s,E=$s),Ce)switch(P){case Or:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fd:n.blendFunc(n.ONE,n.ONE);break;case Od:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:at("WebGLState: Invalid blending: ",P);break}else switch(P){case Or:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fd:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Od:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kd:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",P);break}w=null,M=null,T=null,g=null,b.set(0,0,0),D=0,p=P,A=Ce}return}ae=ae||j,le=le||K,Re=Re||de,(j!==v||ae!==E)&&(n.blendEquationSeparate(pt[j],pt[ae]),v=j,E=ae),(K!==w||de!==M||le!==T||Re!==g)&&(n.blendFuncSeparate(Je[K],Je[de],Je[le],Je[Re]),w=K,M=de,T=le,g=Re),($e.equals(b)===!1||re!==D)&&(n.blendColor($e.r,$e.g,$e.b,re),b.copy($e),D=re),p=P,A=!1}function Dt(P,j){P.side===ni?Ge(n.CULL_FACE):Se(n.CULL_FACE);let K=P.side===mn;j&&(K=!K),cn(K),P.blending===Or&&P.transparent===!1?Xt(er):Xt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const de=P.stencilWrite;o.setTest(de),de&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Bt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Se(n.SAMPLE_ALPHA_TO_COVERAGE):Ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function cn(P){C!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),C=P)}function St(P){P!==Wp?(Se(n.CULL_FACE),P!==U&&(P===Ud?n.cullFace(n.BACK):P===$p?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ge(n.CULL_FACE),U=P}function Kn(P){P!==I&&(z&&n.lineWidth(P),I=P)}function Bt(P,j,K){P?(Se(n.POLYGON_OFFSET_FILL),(L!==j||k!==K)&&(L=j,k=K,a.getReversed()&&(j=-j,K=-K),n.polygonOffset(j,K))):Ge(n.POLYGON_OFFSET_FILL)}function Tn(P){P?Se(n.SCISSOR_TEST):Ge(n.SCISSOR_TEST)}function An(P){P===void 0&&(P=n.TEXTURE0+$-1),te!==P&&(n.activeTexture(P),te=P)}function Rn(P,j,K){K===void 0&&(te===null?K=n.TEXTURE0+$-1:K=te);let de=ne[K];de===void 0&&(de={type:void 0,texture:void 0},ne[K]=de),(de.type!==P||de.texture!==j)&&(te!==K&&(n.activeTexture(K),te=K),n.bindTexture(P,j||Pe[P]),de.type=P,de.texture=j)}function F(){const P=ne[te];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Cn(){try{n.compressedTexImage2D(...arguments)}catch(P){at("WebGLState:",P)}}function vt(){try{n.compressedTexImage3D(...arguments)}catch(P){at("WebGLState:",P)}}function xt(){try{n.texSubImage2D(...arguments)}catch(P){at("WebGLState:",P)}}function me(){try{n.texSubImage3D(...arguments)}catch(P){at("WebGLState:",P)}}function Lt(){try{n.compressedTexSubImage2D(...arguments)}catch(P){at("WebGLState:",P)}}function De(){try{n.compressedTexSubImage3D(...arguments)}catch(P){at("WebGLState:",P)}}function Ue(){try{n.texStorage2D(...arguments)}catch(P){at("WebGLState:",P)}}function R(){try{n.texStorage3D(...arguments)}catch(P){at("WebGLState:",P)}}function S(){try{n.texImage2D(...arguments)}catch(P){at("WebGLState:",P)}}function H(){try{n.texImage3D(...arguments)}catch(P){at("WebGLState:",P)}}function se(P){return f[P]!==void 0?f[P]:n.getParameter(P)}function ee(P,j){f[P]!==j&&(n.pixelStorei(P,j),f[P]=j)}function oe(P){J.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),J.copy(P))}function he(P){ge.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),ge.copy(P))}function Z(P,j){let K=l.get(j);K===void 0&&(K=new WeakMap,l.set(j,K));let de=K.get(P);de===void 0&&(de=n.getUniformBlockIndex(j,P.name),n.uniformBlockBinding(j,de,de),K.set(P,de))}function Q(P,j,K){const ae=l.get(j).get(P);c[ae]!==K&&(n.bindBufferBase(n.UNIFORM_BUFFER,ae,K),c[ae]=K)}function ce(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},te=null,ne={},h={},c={},m=new WeakMap,_=[],x=null,d=!1,p=null,v=null,w=null,M=null,E=null,T=null,g=null,b=new Ve(0,0,0),D=0,A=!1,C=null,U=null,I=null,L=null,k=null,J.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Se,disable:Ge,bindFramebuffer:At,drawBuffers:Le,useProgram:dt,setBlending:Xt,setMaterial:Dt,setFlipSided:cn,setCullFace:St,setLineWidth:Kn,setPolygonOffset:Bt,setScissorTest:Tn,activeTexture:An,bindTexture:Rn,unbindTexture:F,compressedTexImage2D:Cn,compressedTexImage3D:vt,texImage2D:S,texImage3D:H,pixelStorei:ee,getParameter:se,updateUBOMapping:Z,uniformBlockBinding:Q,texStorage2D:Ue,texStorage3D:R,texSubImage2D:xt,texSubImage3D:me,compressedTexSubImage2D:Lt,compressedTexSubImage3D:De,scissor:oe,viewport:he,reset:ce}}function Zx(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new qe,u=new WeakMap,f=new Set;let h;const m=new WeakMap,_=new Set,x=new FinalizationRegistry(R=>_.delete(R));let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,S){return d?new OffscreenCanvas(R,S):so("canvas")}function v(R,S,H){let se=1;const ee=Ue(R);if((ee.width>H||ee.height>H)&&(se=H/Math.max(ee.width,ee.height)),se<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const oe=Math.floor(se*ee.width),he=Math.floor(se*ee.height);h===void 0&&(h=p(oe,he));const Z=S?p(oe,he):h;return Z.width=oe,Z.height=he,Z.getContext("2d").drawImage(R,0,0,oe,he),Ne("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+oe+"x"+he+")."),Z}else return"data"in R&&Ne("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function w(R){return R.generateMipmaps}function M(R){n.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(R,S,H,se,ee,oe=!1){if(R!==null){if(n[R]!==void 0)return n[R];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let he;se&&(he=e.get("EXT_texture_norm16"),he||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=S;if(S===n.RED&&(H===n.FLOAT&&(Z=n.R32F),H===n.HALF_FLOAT&&(Z=n.R16F),H===n.UNSIGNED_BYTE&&(Z=n.R8),H===n.UNSIGNED_SHORT&&he&&(Z=he.R16_EXT),H===n.SHORT&&he&&(Z=he.R16_SNORM_EXT)),S===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.R8UI),H===n.UNSIGNED_SHORT&&(Z=n.R16UI),H===n.UNSIGNED_INT&&(Z=n.R32UI),H===n.BYTE&&(Z=n.R8I),H===n.SHORT&&(Z=n.R16I),H===n.INT&&(Z=n.R32I)),S===n.RG&&(H===n.FLOAT&&(Z=n.RG32F),H===n.HALF_FLOAT&&(Z=n.RG16F),H===n.UNSIGNED_BYTE&&(Z=n.RG8),H===n.UNSIGNED_SHORT&&he&&(Z=he.RG16_EXT),H===n.SHORT&&he&&(Z=he.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.RG8UI),H===n.UNSIGNED_SHORT&&(Z=n.RG16UI),H===n.UNSIGNED_INT&&(Z=n.RG32UI),H===n.BYTE&&(Z=n.RG8I),H===n.SHORT&&(Z=n.RG16I),H===n.INT&&(Z=n.RG32I)),S===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),H===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),H===n.UNSIGNED_INT&&(Z=n.RGB32UI),H===n.BYTE&&(Z=n.RGB8I),H===n.SHORT&&(Z=n.RGB16I),H===n.INT&&(Z=n.RGB32I)),S===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),H===n.UNSIGNED_INT&&(Z=n.RGBA32UI),H===n.BYTE&&(Z=n.RGBA8I),H===n.SHORT&&(Z=n.RGBA16I),H===n.INT&&(Z=n.RGBA32I)),S===n.RGB&&(H===n.UNSIGNED_SHORT&&he&&(Z=he.RGB16_EXT),H===n.SHORT&&he&&(Z=he.RGB16_SNORM_EXT),H===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),S===n.RGBA){const Q=oe?io:et.getTransfer(ee);H===n.FLOAT&&(Z=n.RGBA32F),H===n.HALF_FLOAT&&(Z=n.RGBA16F),H===n.UNSIGNED_BYTE&&(Z=Q===ft?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT&&he&&(Z=he.RGBA16_EXT),H===n.SHORT&&he&&(Z=he.RGBA16_SNORM_EXT),H===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function g(R,S){let H;return R?S===null||S===ci||S===ur?H=n.DEPTH24_STENCIL8:S===si?H=n.DEPTH32F_STENCIL8:S===Wr&&(H=n.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ci||S===ur?H=n.DEPTH_COMPONENT24:S===si?H=n.DEPTH_COMPONENT32F:S===Wr&&(H=n.DEPTH_COMPONENT16),H}function b(R,S){return w(R)===!0||R.isFramebufferTexture&&R.minFilter!==Zt&&R.minFilter!==hn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function D(R){const S=new WeakRef(R);i.get(R).__ref=S,_.add(S),x.register(R,S,S)}function A(R){const S=i.get(R).__ref;S!==void 0&&(_.delete(S),x.unregister(S))}function C(R){I(R.target)}function U(R){L(R.target)}function I(R){R.removeEventListener("dispose",C),A(R),$(R),R.isVideoTexture&&u.delete(R),R.isHTMLTexture&&f.delete(R)}function L(R){R.removeEventListener("dispose",U),A(R),ie(R)}function k(){for(const R of _){const S=R.deref();S!==void 0&&(S.isRenderTarget===!0?L(S):I(S))}_.clear(),f.clear()}function $(R){const S=i.get(R);if(S.__webglInit===void 0)return;const H=R.source,se=m.get(H);if(se){const ee=se[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&z(R),Object.keys(se).length===0&&m.delete(H)}i.remove(R)}function z(R){const S=i.get(R);n.deleteTexture(S.__webglTexture);const H=R.source,se=m.get(H);delete se[S.__cacheKey],a.memory.textures--}function ie(R){const S=i.get(R);S.__depthDisposeCallback&&S.__depthDisposeCallback();const H=R.depthTexture;if(H&&H.renderTarget===R&&I(H),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(S.__webglFramebuffer[ee]))for(let oe=0;oe<S.__webglFramebuffer[ee].length;oe++)n.deleteFramebuffer(S.__webglFramebuffer[ee][oe]);else n.deleteFramebuffer(S.__webglFramebuffer[ee]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[ee])}else{if(Array.isArray(S.__webglFramebuffer))for(let ee=0;ee<S.__webglFramebuffer.length;ee++)n.deleteFramebuffer(S.__webglFramebuffer[ee]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ee=0;ee<S.__webglColorRenderbuffer.length;ee++)S.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[ee]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const se=R.textures;for(let ee=0,oe=se.length;ee<oe;ee++){const he=i.get(se[ee]);he.__webglTexture&&(n.deleteTexture(he.__webglTexture),a.memory.textures--),i.remove(se[ee])}i.remove(R)}let Y=0;function te(){Y=0}function ne(){return Y}function Te(R){Y=R}function Ie(){const R=Y;return R>=s.maxTextures&&Ne("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,R}function J(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.mipmapsAutoUpdate),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function ge(R,S){const H=i.get(R);if(R.isVideoTexture&&Lt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){const se=R.image;if(se===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Dt(H,R,S);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+S)}function be(R,S){const H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){Dt(H,R,S);return}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+S)}function Pe(R,S){const H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){Dt(H,R,S);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+S)}function Se(R,S){const H=i.get(R);if(R.version>0&&H.__version!==R.version){cn(H,R,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+S)}const Ge={[Fl]:n.REPEAT,[yi]:n.CLAMP_TO_EDGE,[Ol]:n.MIRRORED_REPEAT},At={[Zt]:n.NEAREST,[hm]:n.NEAREST_MIPMAP_NEAREST,[aa]:n.NEAREST_MIPMAP_LINEAR,[hn]:n.LINEAR,[qo]:n.LINEAR_MIPMAP_NEAREST,[Gi]:n.LINEAR_MIPMAP_LINEAR},Le={[_m]:n.NEVER,[qf]:n.ALWAYS,[vm]:n.LESS,[$f]:n.LEQUAL,[xm]:n.EQUAL,[Xf]:n.GEQUAL,[Sm]:n.GREATER,[Mm]:n.NOTEQUAL};function dt(R,S){if(S.type===si&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===hn||S.magFilter===qo||S.magFilter===aa||S.magFilter===Gi||S.minFilter===hn||S.minFilter===qo||S.minFilter===aa||S.minFilter===Gi)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Ge[S.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Ge[S.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Ge[S.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,At[S.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,At[S.minFilter]),S.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Le[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Zt||S.minFilter!==aa&&S.minFilter!==Gi||S.type===si&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function pt(R,S){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",C),D(S));const se=S.source;let ee=m.get(se);ee===void 0&&(ee={},m.set(se,ee));const oe=J(S);if(oe!==R.__cacheKey){ee[oe]===void 0&&(ee[oe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ee[oe].usedTimes++;const he=ee[R.__cacheKey];he!==void 0&&(ee[R.__cacheKey].usedTimes--,he.usedTimes===0&&z(S)),R.__cacheKey=oe,R.__webglTexture=ee[oe].texture}return H}function Je(R,S,H){return Math.floor(Math.floor(R/H)/S)}function Xt(R,S,H,se){const oe=R.updateRanges;if(oe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,H,se,S.data);else{oe.sort((P,j)=>P.start-j.start);let he=0;for(let P=1;P<oe.length;P++){const j=oe[he],K=oe[P],de=j.start+j.count,ae=Je(K.start,S.width,4),le=Je(j.start,S.width,4);K.start<=de+1&&ae===le&&Je(K.start+K.count-1,S.width,4)===ae?j.count=Math.max(j.count,K.start+K.count-j.start):(++he,oe[he]=K)}oe.length=he+1;const Z=t.getParameter(n.UNPACK_ROW_LENGTH),Q=t.getParameter(n.UNPACK_SKIP_PIXELS),ce=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let P=0,j=oe.length;P<j;P++){const K=oe[P],de=Math.floor(K.start/4),ae=Math.ceil(K.count/4),le=de%S.width,Re=Math.floor(de/S.width),$e=ae,re=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,le),t.pixelStorei(n.UNPACK_SKIP_ROWS,Re),t.texSubImage2D(n.TEXTURE_2D,0,le,Re,$e,re,H,se,S.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Z),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(n.UNPACK_SKIP_ROWS,ce)}}function Dt(R,S,H){let se=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(se=n.TEXTURE_3D);const ee=pt(R,S),oe=S.source;t.bindTexture(se,R.__webglTexture,n.TEXTURE0+H);const he=i.get(oe);if(oe.version!==he.__version||ee===!0){if(t.activeTexture(n.TEXTURE0+H),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const re=et.getPrimaries(et.workingColorSpace),Ce=S.colorSpace===Bi?null:et.getPrimaries(S.colorSpace),He=S.colorSpace===Bi||re===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let Q=v(S.image,!1,s.maxTextureSize);Q=De(S,Q);const ce=r.convert(S.format,S.colorSpace),P=r.convert(S.type);let j=T(S.internalFormat,ce,P,S.normalized,S.colorSpace,S.isVideoTexture);dt(se,S);let K;const de=S.mipmaps,ae=S.isVideoTexture!==!0,le=he.__version===void 0||ee===!0,Re=oe.dataReady,$e=b(S,Q);if(S.isDepthTexture)j=g(S.format===Hi,S.type),le&&(ae?t.texStorage2D(n.TEXTURE_2D,1,j,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,j,Q.width,Q.height,0,ce,P,null));else if(S.isDataTexture)if(de.length>0){ae&&le&&t.texStorage2D(n.TEXTURE_2D,$e,j,de[0].width,de[0].height);for(let re=0,Ce=de.length;re<Ce;re++)K=de[re],ae?Re&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,K.width,K.height,ce,P,K.data):t.texImage2D(n.TEXTURE_2D,re,j,K.width,K.height,0,ce,P,K.data);S.generateMipmaps=!1}else ae?(le&&t.texStorage2D(n.TEXTURE_2D,$e,j,Q.width,Q.height),Re&&Xt(S,Q,ce,P)):t.texImage2D(n.TEXTURE_2D,0,j,Q.width,Q.height,0,ce,P,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ae&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,$e,j,de[0].width,de[0].height,Q.depth);for(let re=0,Ce=de.length;re<Ce;re++)if(K=de[re],S.format!==ri)if(ce!==null)if(ae){if(Re)if(S.layerUpdates.size>0){const He=pu(K.width,K.height,S.format,S.type);for(const ve of S.layerUpdates){const ut=K.data.subarray(ve*He/K.data.BYTES_PER_ELEMENT,(ve+1)*He/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,ve,K.width,K.height,1,ce,ut)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,K.width,K.height,Q.depth,ce,K.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,j,K.width,K.height,Q.depth,0,K.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?Re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,K.width,K.height,Q.depth,ce,P,K.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,j,K.width,K.height,Q.depth,0,ce,P,K.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ae&&le&&t.texStorage2D(n.TEXTURE_2D,$e,j,de[0].width,de[0].height);for(let re=0,Ce=de.length;re<Ce;re++)K=de[re],S.format!==ri?ce!==null?ae?Re&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,K.width,K.height,ce,K.data):t.compressedTexImage2D(n.TEXTURE_2D,re,j,K.width,K.height,0,K.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?Re&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,K.width,K.height,ce,P,K.data):t.texImage2D(n.TEXTURE_2D,re,j,K.width,K.height,0,ce,P,K.data)}else if(S.isDataArrayTexture)if(ae){if(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,$e,j,Q.width,Q.height,Q.depth),Re)if(S.layerUpdates.size>0){const re=pu(Q.width,Q.height,S.format,S.type);for(const Ce of S.layerUpdates){const He=Q.data.subarray(Ce*re/Q.data.BYTES_PER_ELEMENT,(Ce+1)*re/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ce,Q.width,Q.height,1,ce,P,He)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ce,P,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,j,Q.width,Q.height,Q.depth,0,ce,P,Q.data);else if(S.isData3DTexture)ae?(le&&t.texStorage3D(n.TEXTURE_3D,$e,j,Q.width,Q.height,Q.depth),Re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ce,P,Q.data)):t.texImage3D(n.TEXTURE_3D,0,j,Q.width,Q.height,Q.depth,0,ce,P,Q.data);else if(S.isFramebufferTexture){if(le)if(ae)t.texStorage2D(n.TEXTURE_2D,$e,j,Q.width,Q.height);else{let re=Q.width,Ce=Q.height;for(let He=0;He<$e;He++)t.texImage2D(n.TEXTURE_2D,He,j,re,Ce,0,ce,P,null),re>>=1,Ce>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){const re=n.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),Q.parentNode!==re){re.appendChild(Q),f.add(S),re.onpaint=Ce=>{const He=Ce.changedElements;for(const ve of f)He.includes(ve.image)&&(ve.needsUpdate=!0)},re.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{const He=n.RGBA,ve=n.RGBA,ut=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,He,ve,ut,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(de.length>0){if(ae&&le){const re=Ue(de[0]);t.texStorage2D(n.TEXTURE_2D,$e,j,re.width,re.height)}for(let re=0,Ce=de.length;re<Ce;re++)K=de[re],ae?Re&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ce,P,K):t.texImage2D(n.TEXTURE_2D,re,j,ce,P,K);S.generateMipmaps=!1}else if(ae){if(le){const re=Ue(Q);t.texStorage2D(n.TEXTURE_2D,$e,j,re.width,re.height)}Re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,P,Q)}else t.texImage2D(n.TEXTURE_2D,0,j,ce,P,Q);w(S)&&S.mipmapsAutoUpdate===!0&&M(se),he.__version=oe.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function cn(R,S,H){if(S.image.length!==6)return;const se=pt(R,S),ee=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+H);const oe=i.get(ee);if(ee.version!==oe.__version||se===!0){t.activeTexture(n.TEXTURE0+H);const he=et.getPrimaries(et.workingColorSpace),Z=S.colorSpace===Bi?null:et.getPrimaries(S.colorSpace),Q=S.colorSpace===Bi||he===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ce=S.isCompressedTexture||S.image[0].isCompressedTexture,P=S.image[0]&&S.image[0].isDataTexture,j=[];for(let ve=0;ve<6;ve++)!ce&&!P?j[ve]=v(S.image[ve],!0,s.maxCubemapSize):j[ve]=P?S.image[ve].image:S.image[ve],j[ve]=De(S,j[ve]);const K=j[0],de=r.convert(S.format,S.colorSpace),ae=r.convert(S.type);let le=T(S.internalFormat,de,ae,S.normalized,S.colorSpace);const Re=S.isVideoTexture!==!0,$e=oe.__version===void 0||se===!0,re=ee.dataReady;let Ce=b(S,K);dt(n.TEXTURE_CUBE_MAP,S);let He;if(S.isDepthTexture){if(le=g(S.format===Hi,S.type),$e)if(Re)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,le,K.width,K.height);else for(let ve=0;ve<6;ve++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,le,K.width,K.height,0,de,ae,null)}else if(ce){Re&&$e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,le,K.width,K.height);for(let ve=0;ve<6;ve++){He=j[ve].mipmaps;for(let ut=0;ut<He.length;ut++){const zt=He[ut];S.format!==ri?de!==null?Re?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ut,0,0,zt.width,zt.height,de,zt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ut,le,zt.width,zt.height,0,zt.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ut,0,0,zt.width,zt.height,de,ae,zt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ut,le,zt.width,zt.height,0,de,ae,zt.data)}}}else{if(He=S.mipmaps,Re&&$e){He.length>0&&Ce++;const ve=Ue(j[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,le,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(P){Re?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,j[ve].width,j[ve].height,de,ae,j[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,le,j[ve].width,j[ve].height,0,de,ae,j[ve].data);for(let ut=0;ut<He.length;ut++){const Ci=He[ut].image[ve].image;Re?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ut+1,0,0,Ci.width,Ci.height,de,ae,Ci.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ut+1,le,Ci.width,Ci.height,0,de,ae,Ci.data)}}else{Re?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,de,ae,j[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,le,de,ae,j[ve]);for(let ut=0;ut<He.length;ut++){const zt=He[ut];Re?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ut+1,0,0,de,ae,zt.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ut+1,le,de,ae,zt.image[ve])}}}w(S)&&S.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),oe.__version=ee.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function St(R,S,H,se,ee,oe){const he=r.convert(H.format,H.colorSpace),Z=r.convert(H.type),Q=T(H.internalFormat,he,Z,H.normalized,H.colorSpace),ce=i.get(S),P=i.get(H);if(P.__renderTarget=S,!ce.__hasExternalTextures){const j=Math.max(1,S.width>>oe),K=Math.max(1,S.height>>oe);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,oe,Q,j,K,S.depth,0,he,Z,null):t.texImage2D(ee,oe,Q,j,K,0,he,Z,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),me(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ee,P.__webglTexture,0,xt(S)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,ee,P.__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Kn(R,S,H){if(n.bindRenderbuffer(n.RENDERBUFFER,R),S.depthBuffer){const se=S.depthTexture,ee=se&&se.isDepthTexture?se.type:null,oe=g(S.stencilBuffer,ee),he=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;me(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt(S),oe,S.width,S.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt(S),oe,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,oe,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,R)}else{const se=S.textures;for(let ee=0;ee<se.length;ee++){const oe=se[ee],he=r.convert(oe.format,oe.colorSpace),Z=r.convert(oe.type),Q=T(oe.internalFormat,he,Z,oe.normalized,oe.colorSpace);me(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt(S),Q,S.width,S.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt(S),Q,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Q,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Bt(R,S,H){const se=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ee=i.get(S.depthTexture);ee.__renderTarget=S;const oe=se?S.depthTexture.image[0]:S.depthTexture.image;(!ee.__webglTexture||oe.width!==S.width||oe.height!==S.height)&&(oe.width=S.width,oe.height=S.height,S.depthTexture.needsUpdate=!0),se?Se(S.depthTexture,0):ge(S.depthTexture,0);const he=ee.__webglTexture,Z=xt(S),Q=se?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,ce=S.depthTexture.format===Hi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===ts)me(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,Q,he,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,ce,Q,he,0);else if(S.depthTexture.format===Hi)me(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,Q,he,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,ce,Q,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Tn(R){const S=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const se=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),se){const ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,se.removeEventListener("dispose",ee)};se.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=se}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(H)for(let se=0;se<6;se++)Bt(S.__webglFramebuffer[se],R,se);else R.texture.mipmaps.length>0?Bt(S.__webglFramebuffer[0],R,0):Bt(S.__webglFramebuffer,R,0);else if(H){S.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[se]),S.__webglDepthbuffer[se]===void 0)S.__webglDepthbuffer[se]=n.createRenderbuffer(),Kn(S.__webglDepthbuffer[se],R,!1);else{const ee=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=S.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,oe)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Kn(S.__webglDepthbuffer,R,!1);else{const ee=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,oe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function An(R,S,H){const se=i.get(R);S!==void 0&&St(se.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Tn(R)}function Rn(R){const S=R.texture,H=i.get(R),se=i.get(S);R.addEventListener("dispose",U),D(R);const ee=R.textures,oe=R.isWebGLCubeRenderTarget===!0,he=ee.length>1;if(he||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=S.version,a.memory.textures++),oe){H.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(S.mipmaps.length>0){H.__webglFramebuffer[Z]=[];for(let Q=0;Q<S.mipmaps.length;Q++)H.__webglFramebuffer[Z][Q]=n.createFramebuffer()}else H.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(S.mipmaps.length>0){H.__webglFramebuffer=[];for(let Z=0;Z<S.mipmaps.length;Z++)H.__webglFramebuffer[Z]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(he)for(let Z=0,Q=ee.length;Z<Q;Z++){const ce=i.get(ee[Z]);ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&me(R)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Z=0;Z<ee.length;Z++){const Q=ee[Z];H.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[Z]);const ce=r.convert(Q.format,Q.colorSpace),P=r.convert(Q.type),j=T(Q.internalFormat,ce,P,Q.normalized,Q.colorSpace,R.isXRRenderTarget===!0),K=xt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,K,j,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,H.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Kn(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),dt(n.TEXTURE_CUBE_MAP,S);for(let Z=0;Z<6;Z++)if(S.mipmaps.length>0)for(let Q=0;Q<S.mipmaps.length;Q++)St(H.__webglFramebuffer[Z][Q],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Q);else St(H.__webglFramebuffer[Z],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);w(S)?M(n.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(he){for(let Z=0,Q=ee.length;Z<Q;Z++){const ce=ee[Z],P=i.get(ce);let j=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(j,P.__webglTexture),dt(j,ce),St(H.__webglFramebuffer,R,ce,n.COLOR_ATTACHMENT0+Z,j,0),w(ce)&&M(j)}t.unbindTexture()}else{let Z=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,se.__webglTexture),dt(Z,S),S.mipmaps.length>0)for(let Q=0;Q<S.mipmaps.length;Q++)St(H.__webglFramebuffer[Q],R,S,n.COLOR_ATTACHMENT0,Z,Q);else St(H.__webglFramebuffer,R,S,n.COLOR_ATTACHMENT0,Z,0);w(S)?M(Z):S.mipmaps.length>0&&n.texParameteri(Z,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&Tn(R)}function F(R){const S=R.textures;for(let H=0,se=S.length;H<se;H++){const ee=S[H];if(w(ee)&&ee.mipmapsAutoUpdate===!0){const oe=E(R),he=i.get(ee).__webglTexture;t.bindTexture(oe,he),M(oe),t.unbindTexture()}}}const Cn=[];function vt(R){if(R.samples>0){if(me(R)===!1){const S=R.textures,H=R.width,se=R.height;let ee=n.COLOR_BUFFER_BIT;const oe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(R),Z=S.length>1;if(Z)for(let ce=0;ce<S.length;ce++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ce=0;ce<S.length;ce++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[ce]);const P=i.get(S[ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,P,0)}n.blitFramebuffer(0,0,H,se,0,0,H,se,ee,n.NEAREST),c===!0&&(Cn.length=0,Cn.push(n.COLOR_ATTACHMENT0+ce),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Cn.push(oe),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Cn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let ce=0;ce<S.length;ce++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,he.__webglColorRenderbuffer[ce]);const P=i.get(S[ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,P,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){const S=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function xt(R){return Math.min(s.maxSamples,R.samples)}function me(R){const S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Lt(R){const S=a.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function De(R,S){const H=R.colorSpace,se=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==no&&H!==Bi&&(et.getTransfer(H)===ft?(se!==ri||ee!==yn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",H)),S}function Ue(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=Ie,this.resetTextureUnits=te,this.getTextureUnits=ne,this.setTextureUnits=Te,this.setTexture2D=ge,this.setTexture2DArray=be,this.setTexture3D=Pe,this.setTextureCube=Se,this.rebindTextures=An,this.setupRenderTarget=Rn,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Tn,this.setupFrameBufferTexture=St,this.useMultisampledRTT=me,this.dispose=k}function Jx(n,e){function t(i,s=Bi){let r;const a=et.getTransfer(s);if(i===yn)return n.UNSIGNED_BYTE;if(i===Jc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Qc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===zf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Gf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===kf)return n.BYTE;if(i===Bf)return n.SHORT;if(i===Wr)return n.UNSIGNED_SHORT;if(i===Zc)return n.INT;if(i===ci)return n.UNSIGNED_INT;if(i===si)return n.FLOAT;if(i===di)return n.HALF_FLOAT;if(i===Hf)return n.ALPHA;if(i===Vf)return n.RGB;if(i===ri)return n.RGBA;if(i===ts)return n.DEPTH_COMPONENT;if(i===Hi)return n.DEPTH_STENCIL;if(i===Wf)return n.RED;if(i===jc)return n.RED_INTEGER;if(i===Ms)return n.RG;if(i===ed)return n.RG_INTEGER;if(i===td)return n.RGBA_INTEGER;if(i===Ba||i===za||i===Ga||i===Ha)if(a===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ga)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kl||i===Bl||i===zl||i===Gl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hl||i===Vl||i===Wl||i===$l||i===Xl||i===eo||i===ql)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Hl||i===Vl)return a===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===$l)return r.COMPRESSED_R11_EAC;if(i===Xl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===eo)return r.COMPRESSED_RG11_EAC;if(i===ql)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Yl||i===Kl||i===Zl||i===Jl||i===Ql||i===jl||i===ec||i===tc||i===nc||i===ic||i===sc||i===rc||i===ac||i===oc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Yl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ql)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ec)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ic)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ac)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lc||i===cc||i===dc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===lc)return a===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uc||i===fc||i===to||i===hc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===uc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===to)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ur?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Qx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jx=`
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

}`;class eS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ih(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ys({vertexShader:Qx,fragmentShader:jx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $t(new hr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tS extends As{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,m=null,_=null;const x=typeof XRWebGLBinding<"u",d=new eS,p={},v=t.getContextAttributes();let w=null,M=null;const E=[],T=[],g=new qe;let b=null,D=null;const A=new zn;A.viewport=new yt;const C=new zn;C.viewport=new yt;const U=[A,C],I=new h0;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ge=E[J];return ge===void 0&&(ge=new nl,E[J]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(J){let ge=E[J];return ge===void 0&&(ge=new nl,E[J]=ge),ge.getGripSpace()},this.getHand=function(J){let ge=E[J];return ge===void 0&&(ge=new nl,E[J]=ge),ge.getHandSpace()};function $(J){const ge=T.indexOf(J.inputSource);if(ge===-1)return;const be=E[ge];be!==void 0&&(be.update(J.inputSource,J.frame,l||a),be.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",ie);for(let J=0;J<E.length;J++){const ge=T[J];ge!==null&&(T[J]=null,E[J].disconnect(ge))}L=null,k=null,d.reset();for(const J in p)delete p[J];if(e.setRenderTarget(w),m=null,h=null,f=null,s=null,M=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(g.width,g.height,!1),D!==null){const J=D.camera;J.fov=D.fov,J.zoom=D.zoom,J.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",z),s.addEventListener("inputsourceschange",ie),v.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(g),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Pe=null,Se=null;v.depth&&(Se=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=v.stencil?Hi:ts,Pe=v.stencil?ur:ci);const Ge={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ge),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new oi(h.textureWidth,h.textureHeight,{format:ri,type:yn,depthTexture:new fr(h.textureWidth,h.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const be={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new oi(m.framebufferWidth,m.framebufferHeight,{format:ri,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ie.setContext(s),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function ie(J){for(let ge=0;ge<J.removed.length;ge++){const be=J.removed[ge],Pe=T.indexOf(be);Pe>=0&&(T[Pe]=null,E[Pe].disconnect(be))}for(let ge=0;ge<J.added.length;ge++){const be=J.added[ge];let Pe=T.indexOf(be);if(Pe===-1){for(let Ge=0;Ge<E.length;Ge++)if(Ge>=T.length){T.push(be),Pe=Ge;break}else if(T[Ge]===null){T[Ge]=be,Pe=Ge;break}if(Pe===-1)break}const Se=E[Pe];Se&&Se.connect(be)}}function Y(J,ge){ge===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ge.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ge=J.near,be=J.far;d.texture!==null&&(d.depthNear>0&&(ge=d.depthNear),d.depthFar>0&&(be=d.depthFar)),I.near=C.near=A.near=ge,I.far=C.far=A.far=be,(L!==I.near||k!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),L=I.near,k=I.far),I.layers.mask=J.layers.mask|6,A.layers.mask=I.layers.mask&-5,C.layers.mask=I.layers.mask&-3;const Pe=J.parent,Se=I.cameras;Y(I,Pe);for(let Ge=0;Ge<Se.length;Ge++)Y(Se[Ge],Pe);I.projectionMatrix.copy(A.projectionMatrix),I.projectionMatrixInverse.copy(A.projectionMatrixInverse),D===null&&J.isPerspectiveCamera&&(D={camera:J,fov:J.fov,zoom:J.zoom}),te(J,I,Pe)};function te(J,ge,be){be===null?J.matrix.copy(ge.matrixWorld):(J.matrix.copy(be.matrixWorld),J.matrix.invert(),J.matrix.multiply(ge.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ge.projectionMatrix),J.projectionMatrixInverse.copy(ge.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=mc*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(J){c=J,h!==null&&(h.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(I)},this.getCameraTexture=function(J){return p[J]};let ne=null;function Te(J,ge){if(u=ge.getViewerPose(l||a),_=ge,u!==null){const be=u.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Pe=!1;be.length!==I.cameras.length&&(I.cameras.length=0,Pe=!0);for(let Le=0;Le<be.length;Le++){const dt=be[Le];let pt=null;if(m!==null)pt=m.getViewport(dt);else{const Xt=f.getViewSubImage(h,dt);pt=Xt.viewport,Le===0&&(e.setRenderTargetTextures(M,Xt.colorTexture,Xt.depthStencilTexture),e.setRenderTarget(M))}let Je=U[Le];Je===void 0&&(Je=new zn,Je.layers.enable(Le),Je.viewport=new yt,U[Le]=Je),Je.matrix.fromArray(dt.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(dt.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(pt.x,pt.y,pt.width,pt.height),Le===0&&(I.matrix.copy(Je.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Pe===!0&&I.cameras.push(Je)}const Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const Le=f.getDepthInformation(be[0]);Le&&Le.isValid&&Le.texture&&d.init(Le,s.renderState)}if(Se&&Se.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let Le=0;Le<be.length;Le++){const dt=be[Le].camera;if(dt){let pt=p[dt];pt||(pt=new ih,p[dt]=pt);const Je=f.getCameraImage(dt);pt.sourceTexture=Je}}}}for(let be=0;be<E.length;be++){const Pe=T[be],Se=E[be];Pe!==null&&Se!==void 0&&Se.update(Pe,ge,l||a)}ne&&ne(J,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),_=null}const Ie=new lh;Ie.setAnimationLoop(Te),this.setAnimationLoop=function(J){ne=J},this.dispose=function(){}}}const nS=new _t,vh=new Oe;vh.set(-1,0,0,0,1,0,0,0,1);function iS(n,e){function t(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function i(d,p){p.color.getRGB(d.fogColor.value,sh(n)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function s(d,p,v,w,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(d,p):p.isMeshLambertMaterial?(r(d,p),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(d,p),f(d,p)):p.isMeshPhongMaterial?(r(d,p),u(d,p),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(d,p),h(d,p),p.isMeshPhysicalMaterial&&m(d,p,M)):p.isMeshMatcapMaterial?(r(d,p),_(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),x(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(a(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?c(d,p,v,w):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,t(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===mn&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,t(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===mn&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,t(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,t(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const v=e.get(p),w=v.envMap,M=v.envMapRotation;w&&(d.envMap.value=w,d.envMapRotation.value.setFromMatrix4(nS.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(vh),d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,d.aoMapTransform))}function a(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform))}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function c(d,p,v,w){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*v,d.scale.value=w*.5,p.map&&(d.map.value=p.map,t(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function u(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function f(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,v){d.ior.value=p.ior,p.diffuseRoughness>0&&(d.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(d.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,d.diffuseRoughnessMapTransform))),p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mn&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.retroreflectivity>0&&(d.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,d.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,p){p.matcap&&(d.matcap.value=p.matcap)}function x(d,p){const v=e.get(p).light;d.referencePosition.value.setFromMatrixPosition(v.matrixWorld),d.nearDistance.value=v.shadow.camera.near,d.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function sS(n,e,t,i){let s={},r={};function a(v,w){const M=w.program;i.uniformBlockBinding(v,M,s[v.id])}function o(v,w){let M=s[v.id];M===void 0&&(_(v),M=c(v),s[v.id]=M,v.addEventListener("dispose",d));const E=w.program;i.updateUBOMapping(v,E);const T=e.render.frame;r[v.id]!==T&&(l(v),r[v.id]=T)}function c(v){const w=n.createBuffer(),M=v.__size,E=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,M,E),n.bindBuffer(n.UNIFORM_BUFFER,null),w}function l(v){const w=s[v.id],M=v.uniforms,E=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let T=0,g=M.length;T<g;T++){const b=M[T];if(Array.isArray(b))for(let D=0,A=b.length;D<A;D++)u(b[D],T,D,E);else u(b,T,0,E)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(v,w,M,E){if(h(v,w,M,E)===!0){const T=v.__offset,g=v.value;if(Array.isArray(g)){let b=0;for(let D=0;D<g.length;D++){const A=g[D],C=x(A,!0);f(A,v.__data,b),b+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,v.__data)}}function f(v,w,M){typeof v=="number"||typeof v=="boolean"?w[M]=v:v.isMatrix3?(w[M]=v.elements[0],w[M+1]=v.elements[1],w[M+2]=v.elements[2],w[M+3]=0,w[M+4]=v.elements[3],w[M+5]=v.elements[4],w[M+6]=v.elements[5],w[M+7]=0,w[M+8]=v.elements[6],w[M+9]=v.elements[7],w[M+10]=v.elements[8],w[M+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-M),M):v.toArray(w,M)}function h(v,w,M,E){const T=v.value,g=w+"_"+M;if(Array.isArray(T)){E[g]===void 0&&(E[g]=[]);const b=E[g];let D=!1;for(let A=0;A<T.length;A++)m(T[A],b,A)===!0&&(D=!0);return D}return m(T,E,g)}function m(v,w,M){if(w[M]===void 0)return typeof v=="number"||typeof v=="boolean"?w[M]=v:ArrayBuffer.isView(v)?w[M]=v.slice():w[M]=v.clone(),!0;{const E=w[M];if(typeof v=="number"||typeof v=="boolean"){if(E!==v)return w[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(E.equals(v)===!1)return E.copy(v),!0}}return!1}function _(v){const w=v.uniforms;let M=0;const E=16;for(let g=0,b=w.length;g<b;g++){const D=Array.isArray(w[g])?w[g]:[w[g]];for(let A=0,C=D.length;A<C;A++){const U=D[A],I=Array.isArray(U.value)?U.value:[U.value],L=Array.isArray(w[g])||Array.isArray(U.value);let k=M;for(let z=0,ie=I.length;z<ie;z++){const Y=I[z],te=x(Y,L),ne=M%E,Te=ne%te.boundary,Ie=ne+Te;M+=Te,Ie!==0&&E-Ie<te.storage&&(M+=E-Ie),z===0&&(k=M),M+=te.storage}const $=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new $((M-k)/Float32Array.BYTES_PER_ELEMENT),U.__offset=k}}const T=M%E;return T>0&&(M+=E-T),v.__size=M,v.__cache={},this}function x(v,w){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function d(v){const w=v.target;w.removeEventListener("dispose",d),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(const v in s)n.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:p}}const rS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Jn=null;function aS(){return Jn===null&&(Jn=new Qm(rS,16,16,Ms,di),Jn.name="DFG_LUT",Jn.minFilter=hn,Jn.magFilter=hn,Jn.wrapS=yi,Jn.wrapT=yi,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}class oS{constructor(e={}){const{canvas:t=wm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:m=yn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const x=m,d=new Set([td,ed,jc]),p=new Set([yn,ci,Wr,ur,Jc,Qc]),v=new Uint32Array(4),w=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let E=null,T=null;const g=[],b=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let C=!1,U=null,I=null,L=null,k=null;this._outputColorSpace=Sn;let $=0,z=0,ie=null,Y=-1,te=null;const ne=new yt,Te=new yt;let Ie=null;const J=new Ve(0);let ge=0,be=t.width,Pe=t.height,Se=1,Ge=null,At=null;const Le=new yt(0,0,be,Pe),dt=new yt(0,0,be,Pe);let pt=!1;const Je=new Xr,Xt=new rd;let Dt=!1,cn=!1;const St=new _t,Kn=new B,Bt=new yt,Tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let An=!1;function Rn(){return ie===null?Se:1}let F=i;function Cn(y,N){return t.getContext(y,N)}let vt,xt,me,Lt,De,Ue,R,S,H,se,ee,oe,he,Z,Q,ce,P,j,K,de,ae,le,Re;try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yc}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",ve,!1),F===null){const N="webgl2";if(F=Cn(N,y),F===null)throw Cn(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(y){throw t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),at("WebGLRenderer: "+y.message),y}function $e(){vt=new dv(F),vt.init(),ae=new Jx(F,vt),xt=new j_(F,vt,e,ae),me=new Kx(F,vt),xt.reversedDepthBuffer&&h&&me.buffers.depth.setReversed(!0),I=F.createFramebuffer(),L=F.createFramebuffer(),k=F.createFramebuffer(),Lt=new hv(F),De=new Ux,Ue=new Zx(F,vt,me,De,xt,ae,Lt),R=new cv(A),S=new m0(F),le=new J_(F,S),H=new uv(F,S,Lt,le),se=new mv(F,H,S,le,Lt),j=new pv(F,xt,Ue),Q=new ev(De),ee=new Nx(A,R,vt,xt,le,Q),oe=new iS(A,De),he=new Ox,Z=new Vx(vt),P=new Z_(A,R,me,se,_,c),ce=new Yx(A,se,xt),Re=new sS(F,Lt,xt,me),K=new Q_(F,vt,Lt),de=new fv(F,vt,Lt),Lt.programs=ee.programs,A.capabilities=xt,A.extensions=vt,A.properties=De,A.renderLists=he,A.shadowMap=ce,A.state=me,A.info=Lt}x!==yn&&(D=new _v(x,t.width,t.height,o,s,r));const re=new tS(A,F);this.xr=re,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const y=vt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=vt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(y){y!==void 0&&(Se=y,this.setSize(be,Pe,!1))},this.getSize=function(y){return y.set(be,Pe)},this.setSize=function(y,N,X=!0){if(re.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}be=y,Pe=N,t.width=Math.floor(y*Se),t.height=Math.floor(N*Se),X===!0&&(t.style.width=y+"px",t.style.height=N+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(be*Se,Pe*Se).floor()},this.setDrawingBufferSize=function(y,N,X){be=y,Pe=N,Se=X,t.width=Math.floor(y*X),t.height=Math.floor(N*X),this.setViewport(0,0,y,N)},this.setEffects=function(y){if(x===yn){at("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let N=0;N<y.length;N++)if(y[N].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(ne)},this.getViewport=function(y){return y.copy(Le)},this.setViewport=function(y,N,X,G){y.isVector4?Le.set(y.x,y.y,y.z,y.w):Le.set(y,N,X,G),me.viewport(ne.copy(Le).multiplyScalar(Rn()).round())},this.getScissor=function(y){return y.copy(dt)},this.setScissor=function(y,N,X,G){y.isVector4?dt.set(y.x,y.y,y.z,y.w):dt.set(y,N,X,G),me.scissor(Te.copy(dt).multiplyScalar(Rn()).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(y){me.setScissorTest(pt=y)},this.setOpaqueSort=function(y){Ge=y},this.setTransparentSort=function(y){At=y},this.getClearColor=function(y){return y.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,X=!0){let G=0;if(y){let V=!1;if(ie!==null){const pe=ie.texture.format;V=d.has(pe)}if(V){const pe=ie.texture.type,ye=p.has(pe),fe=P.getClearColor(),Me=P.getClearAlpha(),Ae=fe.r,Be=fe.g,Qe=fe.b;ye?(v[0]=Ae,v[1]=Be,v[2]=Qe,v[3]=Me,F.clearBufferuiv(F.COLOR,0,v)):(w[0]=Ae,w[1]=Be,w[2]=Qe,w[3]=Me,F.clearBufferiv(F.COLOR,0,w))}else G|=F.COLOR_BUFFER_BIT}N&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),U=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),P.dispose(),he.dispose(),Z.dispose(),Ue.dispose(),De.dispose(),R.dispose(),se.dispose(),H.dispose(),le.dispose(),Re.dispose(),ee.dispose(),re.dispose(),re.removeEventListener("sessionstart",Sd),re.removeEventListener("sessionend",Md),rs.stop()};function Ce(y){y.preventDefault(),Gd("WebGLRenderer: Context Lost."),C=!0}function He(){Gd("WebGLRenderer: Context Restored."),C=!1;const y=Lt.autoReset,N=ce.enabled,X=ce.autoUpdate,G=ce.needsUpdate,V=ce.type;$e(),Lt.autoReset=y,ce.enabled=N,ce.autoUpdate=X,ce.needsUpdate=G,ce.type=V}function ve(y){at("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ut(y){const N=y.target;N.removeEventListener("dispose",ut),zt(N)}function zt(y){Ci(y),De.remove(y)}function Ci(y){const N=De.get(y).programs;N!==void 0&&(N.forEach(function(X){ee.releaseProgram(X)}),y.isShaderMaterial&&ee.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,X,G,V,pe){N===null&&(N=Tn);const ye=V.isMesh&&V.matrixWorld.determinantAffine()<0,fe=Yh(y,N,X,G,V);me.setMaterial(G,ye);let Me=X.index,Ae=1;if(G.wireframe===!0){if(Me=H.getWireframeAttribute(X),Me===void 0)return;Ae=2}const Be=X.drawRange,Qe=X.attributes.position;let we=Be.start*Ae,je=(Be.start+Be.count)*Ae;pe!==null&&(we=Math.max(we,pe.start*Ae),je=Math.min(je,(pe.start+pe.count)*Ae)),Me!==null?(we=Math.max(we,0),je=Math.min(je,Me.count)):Qe!=null&&(we=Math.max(we,0),je=Math.min(je,Qe.count));const Rt=je-we;if(Rt<0||Rt===1/0)return;le.setup(V,G,fe,X,Me);let gt,mt=K;if(Me!==null&&(gt=S.get(Me),mt=de,mt.setIndex(gt)),V.isMesh)G.wireframe===!0?(me.setLineWidth(G.wireframeLinewidth*Rn()),mt.setMode(F.LINES)):mt.setMode(F.TRIANGLES);else if(V.isLine){let Qt=G.linewidth;Qt===void 0&&(Qt=1),me.setLineWidth(Qt*Rn()),V.isLineSegments?mt.setMode(F.LINES):V.isLineLoop?mt.setMode(F.LINE_LOOP):mt.setMode(F.LINE_STRIP)}else V.isPoints?mt.setMode(F.POINTS):V.isSprite&&mt.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(vt.get("WEBGL_multi_draw"))mt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Qt=V._multiDrawStarts,Ee=V._multiDrawCounts,rn=V._multiDrawCount,rt=Me?S.get(Me).bytesPerElement:1,as=De.get(G).currentProgram.getUniforms();for(let jt=0;jt<rn;jt++)as.setValue(F,"_gl_DrawID",jt),mt.render(Qt[jt]/rt,Ee[jt])}else if(V.isInstancedMesh)mt.renderInstances(we,Rt,V.count);else if(X.isInstancedBufferGeometry){const Qt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ee=Math.min(X.instanceCount,Qt);mt.renderInstances(we,Rt,Ee)}else mt.render(we,Rt)};function xd(y,N,X,G){U!==null&&y.isNodeMaterial&&U.setObject(G,y),Dt===!0&&Q.setState(y,X,!1),y.transparent===!0&&y.side===ni&&y.forceSinglePass===!1?(y.side=mn,y.needsUpdate=!0,Mr(y,N,G),y.side=Ss,y.needsUpdate=!0,Mr(y,N,G),y.side=ni):Mr(y,N,G)}this.compile=function(y,N,X=null){X===null&&(X=y),U!==null&&U.renderStart(y,N,X),T=Z.get(X),T.init(N),b.push(T),X.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),y!==X&&y.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights(),U!==null&&U.updateLights(T.state.lightsArray),cn=this.localClippingEnabled,Dt=Q.init(this.clippingPlanes,cn),Dt===!0&&Q.setGlobalState(this.clippingPlanes,N),U!==null&&ce.render(T.state.shadowsArray,X,N);const G=new Set;return y.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const pe=V.material;if(pe)if(Array.isArray(pe))for(let ye=0;ye<pe.length;ye++){const fe=pe[ye];xd(fe,X,N,V),G.add(fe)}else xd(pe,X,N,V),G.add(pe)}),T=b.pop(),U!==null&&U.renderEnd(),G},this.compileAsync=function(y,N,X=null){const G=this.compile(y,N,X);return new Promise(V=>{function pe(){if(G.forEach(function(ye){const Me=De.get(ye).currentProgram;(Me===void 0||Me.isReady())&&G.delete(ye)}),G.size===0){V(y);return}setTimeout(pe,10)}vt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let zo=null;function Xh(y){zo&&zo(y)}function Sd(){rs.stop()}function Md(){rs.start()}const rs=new lh;rs.setAnimationLoop(Xh),typeof self<"u"&&rs.setContext(self),this.setAnimationLoop=function(y){zo=y,re.setAnimationLoop(y),y===null?rs.stop():rs.start()},re.addEventListener("sessionstart",Sd),re.addEventListener("sessionend",Md),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;U!==null&&U.renderStart(y,N);const X=re.enabled===!0&&re.isPresenting===!0,G=D!==null&&(ie===null||X)&&D.begin(A,ie);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(N),N=re.getCamera()),y.isScene===!0&&y.onBeforeRender(A,y,N,ie),T=Z.get(y,b.length),T.init(N),T.state.textureUnits=Ue.getTextureUnits(),b.push(T),St.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?Xt.setFromArrayCamera(N):Je.setFromProjectionMatrix(St,Wn,N.reversedDepth),cn=this.localClippingEnabled,Dt=Q.init(this.clippingPlanes,cn),E=he.get(y,g.length),E.init(),g.push(E),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){const ye=A.xr.getDepthSensingMesh();ye!==null&&Go(ye,N,-1/0,A.sortObjects)}Go(y,N,0,A.sortObjects),E.finish(),U!==null&&U.updateLights(T.state.lightsArray),A.sortObjects===!0&&E.sort(Ge,At),An=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,An&&P.addToRenderList(E,y),this.info.autoReset===!0&&this.info.reset(),Dt===!0&&Q.beginShadows();const V=T.state.shadowsArray;if(ce.render(V,y,N),Dt===!0&&Q.endShadows(),(G&&D.hasRenderPass())===!1){const ye=E.opaque,fe=E.transmissive;if(T.setupLights(),N.isArrayCamera){const Me=N.cameras;if(fe.length>0)for(let Ae=0,Be=Me.length;Ae<Be;Ae++){const Qe=Me[Ae];bd(ye,fe,y,Qe)}An&&P.render(y);for(let Ae=0,Be=Me.length;Ae<Be;Ae++){const Qe=Me[Ae];yd(E,y,Qe,Qe.viewport)}}else fe.length>0&&bd(ye,fe,y,N),An&&P.render(y),yd(E,y,N)}ie!==null&&z===0&&(Ue.updateMultisampleRenderTarget(ie),Ue.updateRenderTargetMipmap(ie)),G&&D.end(A),y.isScene===!0&&y.onAfterRender(A,y,N),le.resetDefaultState(),Y=-1,te=null,b.pop(),b.length>0?(T=b[b.length-1],Ue.setTextureUnits(T.state.textureUnits),Dt===!0&&Q.setGlobalState(A.clippingPlanes,T.state.camera)):T=null,g.pop(),g.length>0?E=g[g.length-1]:E=null,U!==null&&U.renderEnd()};function Go(y,N,X,G){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){const ye=N.isArrayCamera?Xt:Je;if(!y.frustumCulled||y.intersectsFrustum(ye)){G&&Bt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(St);const fe=se.update(y),Me=y.material;Me.visible&&E.push(y,fe,Me,X,Bt.z,null,N)}}else if(y.isMesh||y.isLine||y.isPoints){const ye=N.isArrayCamera?Xt:Je;if(!y.frustumCulled||y.intersectsFrustum(ye)){const fe=se.update(y),Me=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Bt.copy(y.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Bt.copy(fe.boundingSphere.center)),Bt.applyMatrix4(y.matrixWorld).applyMatrix4(St)),Array.isArray(Me)){const Ae=fe.groups;for(let Be=0,Qe=Ae.length;Be<Qe;Be++){const we=Ae[Be],je=Me[we.materialIndex];je&&je.visible&&E.push(y,fe,je,X,Bt.z,we,N)}}else Me.visible&&E.push(y,fe,Me,X,Bt.z,null,N)}}}const pe=y.children;for(let ye=0,fe=pe.length;ye<fe;ye++)Go(pe[ye],N,X,G)}function yd(y,N,X,G){const{opaque:V,transmissive:pe,transparent:ye}=y;T.setupLightsView(X),Dt===!0&&Q.setGlobalState(A.clippingPlanes,X),G&&me.viewport(ne.copy(G)),V.length>0&&sa(V,N,X),pe.length>0&&sa(pe,N,X),ye.length>0&&sa(ye,N,X),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function bd(y,N,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){const we=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new oi(1,1,{generateMipmaps:!0,type:we?di:yn,minFilter:Gi,samples:Math.max(4,xt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}const pe=T.state.transmissionRenderTarget[G.id],ye=G.viewport||ne;pe.setSize(ye.z*A.transmissionResolutionScale,ye.w*A.transmissionResolutionScale);const fe=A.getRenderTarget(),Me=A.getActiveCubeFace(),Ae=A.getActiveMipmapLevel();A.setRenderTarget(pe),A.getClearColor(J),ge=A.getClearAlpha(),ge<1&&A.setClearColor(16777215,.5),A.clear(),An&&P.render(X);const Be=A.toneMapping;A.toneMapping=wi;const Qe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),Dt===!0&&Q.setGlobalState(A.clippingPlanes,G),sa(y,X,G),Ue.updateMultisampleRenderTarget(pe),Ue.updateRenderTargetMipmap(pe),vt.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let je=0,Rt=N.length;je<Rt;je++){const gt=N[je],{object:mt,geometry:Qt,material:Ee,group:rn}=gt;if(Ee.side===ni&&mt.layers.test(G.layers)){const rt=Ee.side;Ee.side=mn,Ee.needsUpdate=!0,wd(mt,X,G,Qt,Ee,rn),Ee.side=rt,Ee.needsUpdate=!0,we=!0}}we===!0&&(Ue.updateMultisampleRenderTarget(pe),Ue.updateRenderTargetMipmap(pe))}A.setRenderTarget(fe,Me,Ae),A.setClearColor(J,ge),Qe!==void 0&&(G.viewport=Qe),A.toneMapping=Be}function sa(y,N,X){const G=N.isScene===!0?N.overrideMaterial:null;for(let V=0,pe=y.length;V<pe;V++){const ye=y[V],{object:fe,geometry:Me,group:Ae}=ye;let Be=ye.material;Be.allowOverride===!0&&G!==null&&(Be=G),fe.layers.test(X.layers)&&wd(fe,N,X,Me,Be,Ae)}}function wd(y,N,X,G,V,pe){U!==null&&V.isNodeMaterial&&U.setObject(y,V),y.onBeforeRender(A,N,X,G,V,pe),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(A,N,X,G,y,pe),V.transparent===!0&&V.side===ni&&V.forceSinglePass===!1?(V.side=mn,V.needsUpdate=!0,A.renderBufferDirect(X,N,G,V,y,pe),V.side=Ss,V.needsUpdate=!0,A.renderBufferDirect(X,N,G,V,y,pe),V.side=ni):A.renderBufferDirect(X,N,G,V,y,pe),y.onAfterRender(A,N,X,G,V,pe)}function Ed(y){let N=0;for(const X of y)X.texture!==null&&N++;return N}function Mr(y,N,X){N.isScene!==!0&&(N=Tn);const G=De.get(y),V=T.state.lights,pe=T.state.shadowsArray,ye=V.state.version,fe=ee.getParameters(y,V.state,pe,N,X,T.state.lightProbeGridArray),Me=ee.getProgramCacheKey(fe);let Ae=G.programs;G.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,G.fog=N.fog;const Be=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;G.envMap=R.get(y.envMap||G.environment,Be),G.envMapRotation=G.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Ae===void 0&&(y.addEventListener("dispose",ut),Ae=new Map,G.programs=Ae,G.programVariants=new Map);let Qe=Ae.get(Me);if(Qe!==void 0){if(G.currentProgram===Qe&&G.lightsStateVersion===ye)return Ad(y,fe),Qe}else fe.uniforms=ee.getUniforms(y),U!==null&&y.isNodeMaterial&&U.build(y,X,fe),y.onBeforeCompile(fe,A),Qe=ee.acquireProgram(fe,Me),Ae.set(Me,Qe),G.uniforms=fe.uniforms;const we=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(we.clippingPlanes=Q.uniform),Ad(y,fe),G.needsLights=Zh(y),G.lightsStateVersion=ye,G.needsLights&&(we.ambientLightColor.value=V.state.ambient,we.lightProbe.value=V.state.probe,we.sunLights.value=V.state.sun,we.sunLightShadows.value=V.state.sunShadow,we.directionalLights.value=V.state.directional,we.directionalLightShadows.value=V.state.directionalShadow,we.spotLights.value=V.state.spot,we.spotLightShadows.value=V.state.spotShadow,we.rectAreaLights.value=V.state.rectArea,we.ltc_1.value=V.state.rectAreaLTC1,we.ltc_2.value=V.state.rectAreaLTC2,we.pointLights.value=V.state.point,we.pointLightShadows.value=V.state.pointShadow,we.hemisphereLights.value=V.state.hemi,we.sunShadowMatrix.value=V.state.sunShadowMatrix,we.sunShadowCascade.value=V.state.sunShadowCascade,we.directionalShadowMatrix.value=V.state.directionalShadowMatrix,we.spotLightMatrix.value=V.state.spotLightMatrix,we.spotLightMap.value=V.state.spotLightMap,we.pointShadowMatrix.value=V.state.pointShadowMatrix),G.numLightProbeGrids=Ed(T.state.lightProbeGridArray),G.currentProgram=Qe,G.uniformsList=null,Qe}function qh(y,N,X,G,V){const pe=De.get(y),ye=pe.currentProgram.id+","+G+","+V;let fe=pe.programVariants.get(ye);return fe===void 0?(fe=Mr(y,N,X),pe.programVariants.set(ye,fe)):(pe.currentProgram=fe,pe.uniformsList=null,pe.outputColorSpace=G,pe.toneMapping=V),fe}function Td(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=Wa.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function Ad(y,N){const X=De.get(y);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Yh(y,N,X,G,V){N.isScene!==!0&&(N=Tn),Ue.resetTextureUnits();const pe=N.fog,ye=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?N.environment:null,fe=ie===null?A.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:et.workingColorSpace,Me=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ae=R.get(G.envMap||ye,Me),Be=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Qe=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),we=!!X.morphAttributes.position,je=!!X.morphAttributes.normal,Rt=!!X.morphAttributes.color;let gt=wi;G.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(gt=A.toneMapping);const mt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Qt=mt!==void 0?mt.length:0,Ee=De.get(G),rn=T.state.lights;if(Dt===!0&&(cn===!0||y!==te)){const Mt=y===te&&G.id===Y;Q.setState(G,y,Mt)}let rt=!1,as=!1;G.version===Ee.__version?Ee.needsLights&&Ee.lightsStateVersion!==rn.state.version||V.isBatchedMesh&&Ee.batching===!1||!V.isBatchedMesh&&Ee.batching===!0||V.isBatchedMesh&&Ee.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ee.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ee.instancing===!1||!V.isInstancedMesh&&Ee.instancing===!0||V.isSkinnedMesh&&Ee.skinning===!1||!V.isSkinnedMesh&&Ee.skinning===!0||V.isInstancedMesh&&Ee.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ee.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ee.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ee.instancingMorph===!1&&V.morphTexture!==null||Ee.envMap!==Ae||G.fog===!0&&Ee.fog!==pe||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Q.numPlanes||Ee.numIntersection!==Q.numIntersection)||Ee.vertexAlphas!==Be||Ee.vertexTangents!==Qe||Ee.morphTargets!==we||Ee.morphNormals!==je||Ee.morphColors!==Rt||Ee.morphTargetsCount!==Qt||Ee.numLightProbeGrids!==Ed(T.state.lightProbeGridArray)?rt=!0:(Ee.outputColorSpace!==fe||Ee.toneMapping!==gt)&&(as=!0):(rt=!0,Ee.__version=G.version);let jt=Ee.currentProgram;(rt===!0||as===!0)&&(jt=as===!0?qh(G,N,V,fe,gt):Mr(G,N,V),U&&G.isNodeMaterial&&U.onUpdateProgram(G,jt,Ee));let ra=!1,Pi=!1,os=!1;const it=jt.getUniforms(),qt=Ee.uniforms;if(me.useProgram(jt.program)&&(ra=!0,Pi=!0,os=!0),G.id!==Y&&(Y=G.id,Pi=!0),ra||te!==y){me.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),it.setValue(F,"projectionMatrix",y.projectionMatrix),it.setValue(F,"viewMatrix",y.matrixWorldInverse);const Gt=it.map.cameraPosition;Gt!==void 0&&Gt.setValue(F,Kn.setFromMatrixPosition(y.matrixWorld)),xt.logarithmicDepthBuffer&&it.setValue(F,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&it.setValue(F,"isOrthographic",y.isOrthographicCamera===!0),te!==y&&(te=y,Pi=!0,os=!0)}if(Ee.needsLights&&(rn.state.sunShadowMap.length>0&&it.setValue(F,"sunShadowMap",rn.state.sunShadowMap,Ue),rn.state.directionalShadowMap.length>0&&it.setValue(F,"directionalShadowMap",rn.state.directionalShadowMap,Ue),rn.state.spotShadowMap.length>0&&it.setValue(F,"spotShadowMap",rn.state.spotShadowMap,Ue),rn.state.pointShadowMap.length>0&&it.setValue(F,"pointShadowMap",rn.state.pointShadowMap,Ue)),V.isSkinnedMesh){it.setOptional(F,V,"bindMatrix"),it.setOptional(F,V,"bindMatrixInverse");const Mt=V.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),it.setValue(F,"boneTexture",Mt.boneTexture,Ue))}V.isBatchedMesh&&(it.setOptional(F,V,"batchingTexture"),it.setValue(F,"batchingTexture",V._matricesTexture,Ue),it.setOptional(F,V,"batchingIdTexture"),it.setValue(F,"batchingIdTexture",V._indirectTexture,Ue),it.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&it.setValue(F,"batchingColorTexture",V._colorsTexture,Ue));const Fn=X.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&j.update(V,X,jt),(Pi||Ee.receiveShadow!==V.receiveShadow)&&(Ee.receiveShadow=V.receiveShadow,it.setValue(F,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&N.environment!==null&&(qt.envMapIntensity.value=N.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=aS()),Pi){if(it.setValue(F,"toneMappingExposure",A.toneMappingExposure),Ee.needsLights&&Kh(qt,os),pe&&G.fog===!0&&oe.refreshFogUniforms(qt,pe),oe.refreshMaterialUniforms(qt,G,Se,Pe,T.state.transmissionRenderTarget[y.id]),Ee.needsLights&&Ee.numLightProbeGrids>0){const Mt=M;let Gt=0;for(const ui of T.state.lightProbeGridArray)ui.texture!==null&&(Mt.textures[Gt]=ui.texture,Mt.min[Gt]=ui.boundingBox.min,Mt.max[Gt]=ui.boundingBox.max,Mt.resolution[Gt]=ui.resolution,Gt++);for(const ui in Mt)Mt[ui].length=Gt;qt.probesSH.value=Mt.textures,qt.probesMin.value=Mt.min,qt.probesMax.value=Mt.max,qt.probesResolution.value=Mt.resolution}Wa.upload(F,Td(Ee),qt,Ue)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Wa.upload(F,Td(Ee),qt,Ue),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&it.setValue(F,"center",V.center),it.setValue(F,"modelViewMatrix",V.modelViewMatrix),it.setValue(F,"normalMatrix",V.normalMatrix),it.setValue(F,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){const Mt=G.uniformsGroups;for(let Gt=0,ui=Mt.length;Gt<ui;Gt++){const Cd=Mt[Gt];Re.update(Cd,jt),Re.bind(Cd,jt)}}return jt}function Kh(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.sunLights.needsUpdate=N,y.sunLightShadows.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function Zh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(y,N,X){const G=De.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),De.get(y.texture).__webglTexture=N,De.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const X=De.get(y);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(y,N=0,X=0){ie=y,$=N,z=X;let G=null,V=!1,pe=!1;if(y){const fe=De.get(y);if(fe.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(F.FRAMEBUFFER,fe.__webglFramebuffer),ne.copy(y.viewport),Te.copy(y.scissor),Ie=y.scissorTest,me.viewport(ne),me.scissor(Te),me.setScissorTest(Ie),Y=-1;return}else if(fe.__webglFramebuffer===void 0)Ue.setupRenderTarget(y);else if(fe.__hasExternalTextures)Ue.rebindTextures(y,De.get(y.texture).__webglTexture,De.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Be=y.depthTexture;if(fe.__boundDepthTexture!==Be){if(Be!==null&&De.has(Be)&&(y.width!==Be.image.width||y.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(y)}}const Me=y.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(pe=!0);const Ae=De.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ae[N])?G=Ae[N][X]:G=Ae[N],V=!0):y.samples>0&&Ue.useMultisampledRTT(y)===!1?G=De.get(y).__webglMultisampledFramebuffer:Array.isArray(Ae)?G=Ae[X]:G=Ae,ne.copy(y.viewport),Te.copy(y.scissor),Ie=y.scissorTest}else ne.copy(Le).multiplyScalar(Se).floor(),Te.copy(dt).multiplyScalar(Se).floor(),Ie=pt;if(X!==0&&(G=I),me.bindFramebuffer(F.FRAMEBUFFER,G)&&me.drawBuffers(y,G),me.viewport(ne),me.scissor(Te),me.setScissorTest(Ie),V){const fe=De.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,fe.__webglTexture,X)}else if(pe){const fe=N;for(let Me=0;Me<y.textures.length;Me++){const Ae=De.get(y.textures[Me]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Me,Ae.__webglTexture,X,fe)}}else if(y!==null&&X!==0){const fe=De.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,fe.__webglTexture,X)}Y=-1};function Rd(y){const N=De.get(y);return(N.__readFormat!==y.format||N.__readType!==y.type)&&(N.__readFormat=y.format,N.__readType=y.type,N.__formatReadable=xt.textureFormatReadable(y.format),N.__typeReadable=xt.textureTypeReadable(y.type)),N}this.readRenderTargetPixels=function(y,N,X,G,V,pe,ye,fe=0){if(!(y&&y.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=De.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ye!==void 0&&(Me=Me[ye],Array.isArray(Me)&&(Me=Me[0])),Me){me.bindFramebuffer(F.FRAMEBUFFER,Me);try{const Ae=y.textures[fe],Be=Ae.format,Qe=Ae.type;y.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+fe);const we=Rd(Ae);if(we.__formatReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-G&&X>=0&&X<=y.height-V&&F.readPixels(N,X,G,V,ae.convert(Be),ae.convert(Qe),pe)}finally{const Ae=ie!==null?De.get(ie).__webglFramebuffer:null;me.bindFramebuffer(F.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(y,N,X,G,V,pe,ye,fe=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=De.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ye!==void 0&&(Me=Me[ye],Array.isArray(Me)&&(Me=Me[0])),Me)if(N>=0&&N<=y.width-G&&X>=0&&X<=y.height-V){me.bindFramebuffer(F.FRAMEBUFFER,Me);const Ae=y.textures[fe],Be=Ae.format,Qe=Ae.type;y.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+fe);const we=Rd(Ae);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,je),F.bufferData(F.PIXEL_PACK_BUFFER,pe.byteLength,F.STREAM_READ),F.readPixels(N,X,G,V,ae.convert(Be),ae.convert(Qe),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const Rt=ie!==null?De.get(ie).__webglFramebuffer:null;me.bindFramebuffer(F.FRAMEBUFFER,Rt);const gt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Em(F,gt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,je),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,pe),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(je),F.deleteSync(gt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,X=0){const G=Math.pow(2,-X),V=Math.floor(y.image.width*G),pe=Math.floor(y.image.height*G),ye=N!==null?N.x:0,fe=N!==null?N.y:0;Ue.setTexture2D(y,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,ye,fe,V,pe),me.unbindTexture()},this.copyTextureToTexture=function(y,N,X=null,G=null,V=0,pe=0){let ye,fe,Me,Ae,Be,Qe,we,je,Rt;const gt=y.isCompressedTexture?y.mipmaps[pe]:y.image;if(X!==null)ye=X.max.x-X.min.x,fe=X.max.y-X.min.y,Me=X.isBox3?X.max.z-X.min.z:1,Ae=X.min.x,Be=X.min.y,Qe=X.isBox3?X.min.z:0;else{const it=Math.pow(2,-V);ye=Math.floor(gt.width*it),fe=Math.floor(gt.height*it),y.isDataArrayTexture?Me=gt.depth:y.isData3DTexture?Me=Math.floor(gt.depth*it):Me=1,Ae=0,Be=0,Qe=0}G!==null?(we=G.x,je=G.y,Rt=G.z):(we=0,je=0,Rt=0);const mt=ae.convert(N.format),Qt=ae.convert(N.type);let Ee;N.isData3DTexture?(Ue.setTexture3D(N,0),Ee=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ue.setTexture2DArray(N,0),Ee=F.TEXTURE_2D_ARRAY):(Ue.setTexture2D(N,0),Ee=F.TEXTURE_2D),me.activeTexture(F.TEXTURE0),me.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),me.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),me.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);const rn=me.getParameter(F.UNPACK_ROW_LENGTH),rt=me.getParameter(F.UNPACK_IMAGE_HEIGHT),as=me.getParameter(F.UNPACK_SKIP_PIXELS),jt=me.getParameter(F.UNPACK_SKIP_ROWS),ra=me.getParameter(F.UNPACK_SKIP_IMAGES);me.pixelStorei(F.UNPACK_ROW_LENGTH,gt.width),me.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gt.height),me.pixelStorei(F.UNPACK_SKIP_PIXELS,Ae),me.pixelStorei(F.UNPACK_SKIP_ROWS,Be),me.pixelStorei(F.UNPACK_SKIP_IMAGES,Qe);const Pi=y.isDataArrayTexture||y.isData3DTexture,os=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const it=De.get(y),qt=De.get(N),Fn=De.get(it.__renderTarget),Mt=De.get(qt.__renderTarget);me.bindFramebuffer(F.READ_FRAMEBUFFER,Fn.__webglFramebuffer),me.bindFramebuffer(F.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Gt=0;Gt<Me;Gt++)Pi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,De.get(y).__webglTexture,V,Qe+Gt),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,De.get(N).__webglTexture,pe,Rt+Gt)),F.blitFramebuffer(Ae,Be,Ae+ye,Be+fe,we,je,we+ye,je+fe,F.DEPTH_BUFFER_BIT,F.NEAREST);me.bindFramebuffer(F.READ_FRAMEBUFFER,null),me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||y.isRenderTargetTexture||De.has(y)){const it=De.get(y),qt=De.get(N);me.bindFramebuffer(F.READ_FRAMEBUFFER,L),me.bindFramebuffer(F.DRAW_FRAMEBUFFER,k);for(let Fn=0;Fn<Me;Fn++)Pi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,it.__webglTexture,V,Qe+Fn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,it.__webglTexture,V),os?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,qt.__webglTexture,pe,Rt+Fn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,qt.__webglTexture,pe),V!==0?F.blitFramebuffer(Ae,Be,Ae+ye,Be+fe,we,je,we+ye,je+fe,F.COLOR_BUFFER_BIT,F.NEAREST):os?F.copyTexSubImage3D(Ee,pe,we,je,Rt+Fn,Ae,Be,ye,fe):F.copyTexSubImage2D(Ee,pe,we,je,Ae,Be,ye,fe);me.bindFramebuffer(F.READ_FRAMEBUFFER,null),me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else os?y.isDataTexture||y.isData3DTexture?F.texSubImage3D(Ee,pe,we,je,Rt,ye,fe,Me,mt,Qt,gt.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(Ee,pe,we,je,Rt,ye,fe,Me,mt,gt.data):F.texSubImage3D(Ee,pe,we,je,Rt,ye,fe,Me,mt,Qt,gt):y.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,pe,we,je,ye,fe,mt,Qt,gt.data):y.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,pe,we,je,gt.width,gt.height,mt,gt.data):F.texSubImage2D(F.TEXTURE_2D,pe,we,je,ye,fe,mt,Qt,gt);me.pixelStorei(F.UNPACK_ROW_LENGTH,rn),me.pixelStorei(F.UNPACK_IMAGE_HEIGHT,rt),me.pixelStorei(F.UNPACK_SKIP_PIXELS,as),me.pixelStorei(F.UNPACK_SKIP_ROWS,jt),me.pixelStorei(F.UNPACK_SKIP_IMAGES,ra),pe===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&F.generateMipmap(Ee),me.unbindTexture()},this.initRenderTarget=function(y){De.get(y).__webglFramebuffer===void 0&&Ue.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ue.setTextureCube(y,0):y.isData3DTexture?Ue.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ue.setTexture2DArray(y,0):Ue.setTexture2D(y,0),me.unbindTexture()},this.resetState=function(){$=0,z=0,ie=null,me.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}let It=null,Yi=null,Sc=null,ia=!1;const Fu={},lS={laser:.07,boom:.12,tap:.05,alert:1.5};try{ia=localStorage.getItem("spacenodes.mute")==="1"}catch{}const cd=()=>ia;function cS(n){ia=n;try{localStorage.setItem("spacenodes.mute",n?"1":"0")}catch{}Yi&&(Yi.gain.value=n?0:.5)}function Io(){if(!It){const n=window.AudioContext||window.webkitAudioContext;if(!n)return;It=new n,Yi=It.createGain(),Yi.gain.value=ia?0:.5;const e=It.createDynamicsCompressor();Yi.connect(e),e.connect(It.destination),Sc=It.createBuffer(1,It.sampleRate,It.sampleRate);const t=Sc.getChannelData(0);for(let i=0;i<t.length;i++)t[i]=Math.random()*2-1}It.state==="suspended"&&It.resume()}function Fi(n,e,t,i,s,r){const a=It.createOscillator(),o=It.createGain();a.type=n,a.frequency.setValueAtTime(e,i),a.frequency.exponentialRampToValueAtTime(Math.max(20,t),i+s),o.gain.setValueAtTime(1e-4,i),o.gain.exponentialRampToValueAtTime(r,i+.01),o.gain.exponentialRampToValueAtTime(1e-4,i+s),a.connect(o),o.connect(Yi),a.start(i),a.stop(i+s+.02)}function Ou(n,e,t,i,s=.8){const r=It.createBufferSource(),a=It.createBiquadFilter(),o=It.createGain();r.buffer=Sc,a.type="lowpass",a.frequency.setValueAtTime(i,n),a.frequency.exponentialRampToValueAtTime(80,n+e),a.Q.value=s,o.gain.setValueAtTime(t,n),o.gain.exponentialRampToValueAtTime(1e-4,n+e),r.connect(a),a.connect(o),o.connect(Yi),r.start(n),r.stop(n+e+.02)}const Hs=(n,e,t,i,s=.22)=>{const r=It.currentTime;n.forEach((a,o)=>Fi(t,a,a,r+o*e,s,i))};function li(n,e=1){if(!It||!Yi||ia||It.state!=="running")return;const t=It.currentTime;if(!((Fu[n]??-9)+(lS[n]??.03)>t))switch(Fu[n]=t,n){case"tap":Fi("triangle",660,520,t,.05,.05*e);break;case"launch":Fi("sawtooth",140,520,t,.35,.07*e),Ou(t,.4,.08*e,2400);break;case"laser":Fi("square",1500+Math.random()*500,260,t,.09,.035*e);break;case"boom":Ou(t,.55,.3*e,900,.5),Fi("sine",90,35,t,.45,.22*e);break;case"capture":Hs([523,659,784],.08,"triangle",.12*e);break;case"lost":Hs([392,311,233],.12,"sawtooth",.06*e,.3);break;case"alert":Hs([880,660,880,660],.14,"square",.045*e,.12);break;case"level":Hs([523,784,1047,1319],.07,"triangle",.1*e,.3);break;case"lore":Fi("sine",220,220,t,1.4,.07*e),Fi("sine",330,330,t+.25,1.4,.05*e),Fi("sine",415,415,t+.5,1.4,.04*e);break;case"win":Hs([523,659,784,1047,784,1047],.12,"triangle",.12*e,.4);break;case"lose":Hs([392,349,311,262],.25,"sine",.12*e,.6);break}}const $a=[],No=[],Mc=52*Math.PI/180,xh=30,qn=Math.sin(Mc),Yr="#8f95a6",ms="#56617c",Pt="#f1ead9",Vi="#1d2335",Xs="#e6dcc6",Ln="#e8bd55",Hn=n=>n.citadel?5:n.kind==="station"?3.3:[2.7,3.5,4.5][n.size],ku=(n,e=n.spec)=>{const t=Hn(n);return n.kind==="planet"?t*2.5+(e?3.6:0):n.flagship?t*2.2:t*.5+t*(n.citadel?3.4:1.5)},bs=n=>{const e=Hn(n);return n.kind==="planet"?e*1.5:e*.5+e*.55},dS=4.2,yc=[["#d9c7a0","#b09a74","#efe2c2"],["#93a5b3","#6c7e8e","#b9c7d0"],["#93b08c","#6d8b69","#b7ceac"],["#cc9379","#a56e58","#e3b7a2"],["#cfdcdf","#a2b5ba","#eef5f5"]],Uo={mine:"#a8835a",barracks:"#dd7a63",shield:"#bfe3ff",refinery:"#e3c565",lab:"#7fb2dc",habitat:"#93c98a",silo:"#d98a8a",fortress:"#b9a3d9",bay:"#e3c565",flagship:"#9fe0ff"};function wn(n,e){if(e.owner===W||n.vis[e.id]===2)return{tier:"live",owner:e.owner,drones:e.drones};const t=n.intel[e.id];return t.snap?{tier:"stale",owner:t.snap.owner,drones:t.snap.drones}:t.seen>=1?{tier:"detected",owner:-1,drones:0}:{tier:"hidden",owner:-1,drones:0}}let Ir=null,bn,ki,hs=null,Nr,Xa,bc=0,Bu=-1,Ys,kr,Br,zi=null,wc="";const Ks=new Map,Zs=new Map,dn=320,Js=.5;let Ec=0,Tc=0;const Ml=new B,_e=(n,e=0)=>{const t=new Ve(n);return e&&t.lerp(new Ve(ms),e),new od({color:t,flatShading:!0})},En=(n,e=1)=>new ro({color:n,transparent:e<1,opacity:e,depthWrite:e>=1});function Si(n){n.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(s=>s.dispose()):i&&i.dispose()}),n.removeFromParent()}function dd(n,e,t,i,s=0,r=Math.PI*2,a=1){const o=new $t(new ad(n,e,48,1,s,r),En(t,a));return o.rotation.x=-Math.PI/2,o.position.y=i,o}const ue=(n,e,t=0,i=0,s=0)=>{const r=new $t(n,e);return r.position.set(t,i,s),r};function uS(){const n=document.getElementById("gl");Ir=new oS({canvas:n,antialias:!0}),bn=new Wm,bn.background=new Ve("#2a3350"),ki=new zn(xh,1,1,4e3),bn.add(new c0("#fff4e0","#3d4668",1.5));const e=new f0("#fff0d8",2.2);e.position.set(-.7,1,.45),bn.add(e);const t=[];for(let s=0;s<96;s++)t.push(new B(Math.cos(s/96*Math.PI*2),0,Math.sin(s/96*Math.PI*2)));const i=new Jt().setFromPoints(t);Ys=new ru(i,new gc({color:Pt,transparent:!0,opacity:.55})),kr=new ru(i,new gc({color:Pt,transparent:!0,opacity:.22})),Br=dd(1,1.1,Pt,.12),bn.add(Ys,kr,Br)}function fS(n){for(const f of Ks.values())Si(f.grp);for(const f of Zs.values())Si(f.grp);Ks.clear(),Zs.clear(),zi&&(Si(zi),zi=null,wc="");for(const f of bn.children.filter(h=>h.userData.world))Si(f);let e=n.seed|0;const t=()=>{e=e+1831565813|0;let f=e;return f=Math.imul(f^f>>>15,f|1),f^=f+Math.imul(f^f>>>7,f|61),((f^f>>>14)>>>0)/4294967296},i=[];for(let f=0;f<1400;f++)i.push(t()*(n.w+1600)-800,-150-t()*500,t()*(n.h+1600)-800);const s=new Jt;s.setAttribute("position",new lt(i,3));const r=new t0(s,new eh({color:Pt,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:.8}));r.userData.world=!0,bn.add(r);const a=["#5f7fa8","#8a6fa0","#b9786a","#5f9c94","#a88f6a"],o=document.createElement("canvas");o.width=o.height=128;const c=o.getContext("2d"),l=c.createRadialGradient(64,64,0,64,64,64);l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(.5,"rgba(255,255,255,0.45)"),l.addColorStop(1,"rgba(255,255,255,0)"),c.fillStyle=l,c.fillRect(0,0,128,128);const u=new lu(o);for(let f=0;f<18;f++){const h=140+t()*260,m=new $t(new hr(h*2,h*2),new ro({map:u,color:a[Math.floor(t()*a.length)],transparent:!0,opacity:.3,depthWrite:!1}));m.rotation.x=-Math.PI/2,m.position.set(t()*(n.w+600)-300,-220-t()*200,t()*(n.h+600)-300),m.userData.world=!0,bn.add(m)}Nr=document.createElement("canvas"),Nr.width=Math.round((n.w+dn*2)*Js),Nr.height=Math.round((n.h+dn*2)*Js),Xa=new lu(Nr),Xa.colorSpace=Sn,hs=new $t(new hr(n.w+dn*2,n.h+dn*2),new ro({map:Xa,transparent:!0,depthWrite:!1})),hs.rotation.x=-Math.PI/2,hs.position.set(n.w/2,-.2,n.h/2),hs.userData.world=!0,hs.renderOrder=-1,bn.add(hs),bc=0}function Vt(n,e){const t=parseInt(n.slice(1),16);return`rgba(${t>>16&255},${t>>8&255},${t&255},${e})`}function Sh(n,e){const t=parseInt(n.slice(1),16),i=s=>Math.max(0,Math.min(255,Math.round(s*e)));return`rgb(${i(t>>16&255)},${i(t>>8&255)},${i(t&255)})`}const _i=(n,e)=>{let t=n*374761393+e*668265263|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296};function hS(n,e){const t=Nr.getContext("2d");t.setTransform(Js,0,0,Js,dn*Js,dn*Js),t.globalCompositeOperation="source-over",t.clearRect(-dn,-dn,n.w+dn*2,n.h+dn*2),t.fillStyle="rgba(86,97,128,0.8)",t.fillRect(-dn,-dn,n.w+dn*2,n.h+dn*2),t.globalCompositeOperation="destination-out";const i=n.nodes.filter(o=>o.owner===W).map(o=>({x:o.x,y:o.y,r:yo(n,o)}));for(const o of n.fleets)o.owner===W&&!o.lane&&!o.missile&&i.push({x:o.x,y:o.y,r:Nc(n,o)});for(const o of i){const[c,l]=o.r;let u=t.createRadialGradient(o.x,o.y,l*.8,o.x,o.y,l);u.addColorStop(0,"rgba(0,0,0,0.5)"),u.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=u,t.beginPath(),t.arc(o.x,o.y,l,0,7),t.fill(),u=t.createRadialGradient(o.x,o.y,c*.82,o.x,o.y,c),u.addColorStop(0,"rgba(0,0,0,1)"),u.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=u,t.beginPath(),t.arc(o.x,o.y,c,0,7),t.fill()}t.globalCompositeOperation="source-over";const s=n.nodes.map(o=>({n:o,k:wn(n,o)})).filter(o=>o.k.tier!=="hidden"&&o.k.tier!=="detected"&&o.k.owner!==0),r=(o,c,l,u,f)=>{const h=t.createRadialGradient(o,c,0,o,c,l);h.addColorStop(0,Vt(u,f)),h.addColorStop(.55,Vt(u,f*.55)),h.addColorStop(1,Vt(u,0)),t.fillStyle=h,t.beginPath(),t.arc(o,c,l,0,7),t.fill()},a=e/1e3;for(const{n:o,k:c}of s){const l=fn(n,c.owner);for(let u=0;u<7;u++){const f=_i(o.id,u)*Math.PI*2+a*.05*(u%2?1:-1),h=6+_i(u,o.id)*20;r(o.x+Math.cos(f)*h,o.y+Math.sin(f)*h*.8,16+_i(o.id+7,u)*16,l,.13)}}for(let o=0;o<s.length;o++)for(let c=o+1;c<s.length;c++){const l=s[o],u=s[c];if(l.k.owner!==u.k.owner)continue;const f=u.n.x-l.n.x,h=u.n.y-l.n.y,m=Math.hypot(f,h);if(m>115)continue;const _=fn(n,l.k.owner),x=Math.floor(m/16);for(let d=1;d<x;d++){const p=d/x,v=Math.sin(a*.3+d+l.n.id)*4;r(l.n.x+f*p-h/m*v,l.n.y+h*p+f/m*v,15,_,.07)}}Xa.needsUpdate=!0}function pS(n,e,t){const i=new ta(e,1).toNonIndexed(),[s,r,a]=yc[n.id%yc.length].map(f=>{const h=new Ve(f);return t&&h.lerp(new Ve(ms),t),h}),o=i.getAttribute("position"),c=[],l=.05+n.id%3*.12;for(let f=0;f<o.count;f+=3){const h=(o.getY(f)+o.getY(f+1)+o.getY(f+2))/3/e,m=h>.62?a:Math.abs(h-l)<.14||n.size>0&&Math.abs(h+.42)<.1?r:s;for(let _=0;_<3;_++)c.push(m.r,m.g,m.b)}i.setAttribute("color",new lt(c,3));const u=new $t(i,new od({vertexColors:!0,flatShading:!0}));return u.rotation.z=.25,u}function Ac(n,e,t=!1){const i=new pn,s=Uo[n]||"#999",r="#4b5063";if(n==="mine")i.add(ue(new ot(1,.4,1),_e("#6f6355",e),0,.2),ue(new Nn(.55,2.1,4),_e(s,e),0,1.4),ue(new ot(.2,.2,1.4),_e(r,e),0,2.2));else if(n==="refinery")i.add(ue(new Ke(.8,.9,1.5,6),_e(s,e),0,.75),ue(new Ke(.28,.28,1.4,6),_e(r,e),.3,2.1),ue(new Ke(.2,.2,.9,6),_e(r,e),-.35,1.9));else if(n==="lab"){if(i.add(ue(new Ke(.6,.7,2.2,6),_e(s,e),0,1.1),ue(new xi(.7,8,4,0,Math.PI*2,0,Math.PI/2),_e(Pt,e),0,2.2)),t){const a=ue(new nr(.45),En("#9fe0ff"),0,3.3);a.name="orb",i.add(a)}}else if(n==="habitat")i.add(ue(new Ke(1.2,1.3,.35,8),_e("#6f8f68",e),0,.17)),i.add(ue(new xi(.9,10,6,0,Math.PI*2,0,Math.PI/2),_e(Pt,e),0,.35)),i.add(ue(new xi(.5,8,5,0,Math.PI*2,0,Math.PI/2),_e(s,e),.75,.35,.5),ue(new xi(.45,8,5,0,Math.PI*2,0,Math.PI/2),_e(s,e),-.7,.35,-.45)),i.add(ue(new Ke(.1,.1,1.4,4),_e(r,e),0,1.5));else if(n==="unused1")i.add(ue(new Ke(1.1,1.1,.5,8),_e(s,e),0,.25),ue(new xi(.95,8,4,0,Math.PI*2,0,Math.PI/2),_e(Pt,e),0,.5),ue(new ot(.5,.5,.5),_e(s,e),1.3,.25));else if(n==="barracks")i.add(ue(new ot(1.5,.9,1),_e(s,e),0,.45),ue(new Nn(.72,.6,4),_e("#b05a47",e),0,1.2)),i.children[1].rotation.y=Math.PI/4;else if(n==="silo")i.add(ue(new Ke(.75,.85,1.6,8),_e("#6d7385",e),0,.8)),t?i.add(ue(new Ke(.32,.32,1.6,6),_e(Pt,e),0,2.2),ue(new Nn(.34,.8,6),_e("#d2604a",e),0,3.4)):i.add(ue(new Ke(.55,.55,.15,8),_e(r,e),0,1.65));else if(n==="unused2")for(const[a,o,c]of[[-.55,.4,0],[.55,.4,0],[0,1.2,0],[0,.4,.9]])i.add(ue(new ot(.95,.8,.8),_e(s,e),a,o,c));else if(n==="bay"){for(const a of[-.9,.9])i.add(ue(new ot(.22,2.2,.22),_e(s,e),a,1.1));i.add(ue(new ot(2.1,.24,.32),_e(s,e),0,2.2),ue(new ot(1.4,.1,1.4),_e(r,e),0,.05))}return i}const Mh=[150,30,210,-30].map(n=>n*Math.PI/180);function zu(n,e){const t=Hn(n);if(n.spec==="bay"&&!n.flagship&&!n.citadel)return{x:-t*1.2+e*t*.85,y:t*1.25,z:t*.15,a:0};if(n.flagship)return{x:-t*1.2+(e>>1)*t*1.2,y:t*.8,z:(e%2?1:-1)*t*1.6,a:0};if(n.kind==="planet"){const s=Math.PI*(.9+.16*e);return{x:Math.cos(s)*(t*2+2.4),y:.75,z:Math.sin(s)*(t*2+2.4),a:s}}const i=Mh[e%4];return{x:Math.cos(i)*t*2.3,y:t*.5+t*.55+.6,z:Math.sin(i)*t*2.3,a:i}}function yh(n,e,t=1,i=!1){const s=new pn;if(s.add(ue(new Ke(1,1.1,.35,6),_e(i?Ln:"#e6dcc6"),0,.17)),s.add(ue(new Nn(.95,2.3,7),_e(n),0,.35+1.15)),s.add(ue(new Ke(.98,.98,.18,7),_e(Sh(n,.7)),0,.55)),s.add(ue(new ta(.72,0),_e(n),0,.35+2.3+.35)),e){const r=ue(new Ke(.55,.42,.45,5,1,!0),_e(Ln),0,3.7);r.material.side=ni,s.add(r)}return s.scale.setScalar(t),s}function bh(n,e,t=1.9){const i=new pn,s=new $t(new Nn(.55,2.6,4),_e(Xs));return s.rotation.z=-Math.PI/2,s.scale.set(1,1,1.5),i.add(s,ue(new ot(.9,.12,2.6),_e(n),-.6),ue(new ot(.7,.7,.12),_e(n),-.9,.4)),e.forEach((r,a)=>{const o=yh(r.c,r.cmd,.36);o.position.set(.1-a*.6,.1,a===0?0:a%2?-.6:.6),i.add(o)}),i.scale.setScalar(t),i}function mS(n,e,t,i,s){const r=new pn,a=Hn(e),o=t==="detected",c=t==="stale"?.35:0,l=o?ms:i===0?Yr:fn(n,i);let u=null;const f=new $t(new Co(a*1.05,24),En("#0c101e",.4));if(f.rotation.x=-Math.PI/2,f.position.y=.02,r.add(f),o){const _=e.kind==="planet"?new $t(new ta(a,1),En(ms,.9)):new $t(new Ke(a,a,a*1.1,6),En(ms,.9));return _.position.y=bs(e),r.add(_),{grp:r,spin:u,orb:null}}i!==0&&r.add(dd(a*1.45,a*1.62,l,.06,0,Math.PI*2,c?.5:1));const h=n.sides[i]?zr(n,e):0;if(e.kind==="planet"){const _=pS(e,a,c);if(_.position.y=a*1.5,r.add(_),u=_,e.size===2){const x=new $t(new qr(a*1.55,a*.09,4,28),_e(yc[e.id%5][2],c));x.rotation.x=Math.PI/2-.3,x.rotation.y=.2,x.position.y=a*1.5,r.add(x)}for(let x=0;x<e.lv;x++){const d=-Math.PI/2+(x-(e.lv-1)/2)*.55,p=a*1.25+1.7,v=Ac("mine",c);v.position.set(Math.cos(d)*p,0,Math.sin(d)*p*.9),r.add(v)}if(e.spec){const x=Ac(e.spec,c,e.spec==="lab"&&i===W&&or(n,e));x.scale.setScalar(1.7),x.position.set(0,a*2.5-.35,0),r.add(x)}for(let x=0;x<h;x++){const d=zu(e,x);r.add(ue(new Ke(1.5,1.5,.12,6),_e(l,c),d.x,.06,d.z))}}else gS(r,e,a,l,c,h),u=r.getObjectByName("halo")||null;for(let _=h-s;_<h;_++){const x=zu(e,_),d=bh(l,[],1.6);d.position.set(x.x,x.y,x.z),d.rotation.y=-x.a,r.add(d)}const m=ue(new xi(a*(e.kind==="planet"?1.75:1.7),16,10),new od({color:"#bfe3ff",transparent:!0,opacity:0,depthWrite:!1,flatShading:!0}),0,e.kind==="planet"?a*1.5:a*1.05);return m.name="bubble",m.renderOrder=2,r.add(m),{grp:r,spin:u,orb:r.getObjectByName("orb")||null}}function gS(n,e,t,i,s,r){const a=t*.5,o=t*1.1,c=a+o,l=(f,h=t*.9)=>{for(let m=0;m<Math.min(4,r);m++){const _=Mh[m],x=t*1.3,d=ue(new ot(x,t*.14,t*.3),_e("#b8ad96",s),Math.cos(_)*(h+x/2),f,Math.sin(_)*(h+x/2));d.rotation.y=-_,n.add(d),n.add(ue(new Ke(t*.5,t*.5,t*.1,6),_e(i,s),Math.cos(_)*t*2.3,f+t*.05,Math.sin(_)*t*2.3))}},u=(f,h)=>{for(let m=0;m<e.lv;m++){const _=Ac("barracks",s);_.position.set((m-(e.lv-1)/2)*1.8,f,h),n.add(_)}};if(e.flagship){const f=t*1.1,h=new pn,m=ue(new Nn(t*.8,t*2.4,4),_e(Xs,s),t*2.2,0);m.rotation.z=-Math.PI/2,m.scale.set(1,1,.55),h.add(m,ue(new ot(t*3,t*.6,t*1.6),_e(Xs,s),-.3*t,0)),h.add(ue(new ot(t*3.2,t*.16,t*1.7),_e(i,s),-.3*t,t*.32)),h.add(ue(new ot(t*.8,t*.9,t*.6),_e("#b8ad96",s),-t*1,t*.75),ue(new ot(t*.9,t*.22,t*.9),_e(i,s),-t*1,t*1.25));for(const _ of[-.5,0,.5])h.add(ue(new Ke(t*.22,t*.28,t*.5,8),_e("#4b5063",s),-t*1.95,0,_*t),ue(new xi(t*.2,8,6),En("#9fe0ff",.85),-t*2.25,0,_*t));for(const _ of[-1,1]){const x=ue(new ot(t*1.4,t*.1,t*.9),_e(i,s),-t*.6,-t*.1,_*t*1.1);x.rotation.y=_*.35,h.add(x)}h.position.y=f,h.scale.setScalar(.72),h.name="hull",n.add(h);return}if(e.citadel){n.add(ue(new Ke(t,t*.92,o,6),_e("#57526f",s),0,a+o/2)),n.add(ue(new Ke(t*.92,t*.35,t*.45,6),_e("#413d57",s),0,a-t*.22)),n.add(ue(new Ke(t*.5,t*.68,t*.4,6),_e(i,s),0,c+t*.2)),n.add(ue(new Nn(t*.3,t*1.9,6),_e(i,s),0,c+t*1.35));const f=ue(new qr(t*1.6,t*.07,4,32),_e(i,s),0,a+o*.6);f.rotation.x=Math.PI/2,f.name="halo",n.add(f),l(a+o/2);return}if(e.spec==="bay"){const f=t*1.05;n.add(ue(new ot(t*3.6,t*.45,t*1.5),_e(Xs,s),0,f)),n.add(ue(new ot(t*3.4,t*.5,t*1.1),_e("#b8ad96",s),0,f-t*.45)),n.add(ue(new ot(t*3.7,t*.06,t*.18),_e(i,s),0,f+t*.25,-t*.62),ue(new ot(t*3.7,t*.06,t*.18),_e(i,s),0,f+t*.25,t*.62));for(let m=0;m<6;m++)n.add(ue(new ot(t*.12,t*.08,t*.12),En("#ffe9a8"),-t*1.6+m*t*.64,f+t*.26,0));n.add(ue(new ot(t*.7,t*1,t*.4),_e(i,s),t*.9,f+t*.7,-t*.55),ue(new ot(t*.5,t*.3,t*.5),_e(Pt,s),t*.9,f+t*1.3,-t*.55));const h=ue(new qr(t*.55,t*.12,4,12,Math.PI),_e(i,s),-t*1.85,f-t*.2);h.rotation.y=Math.PI/2,n.add(h),u(f-t*.6,-t*1.1);return}if(e.spec==="silo"){const f=t*.9;n.add(ue(new Ke(t*1.15,t*1.25,f,8),_e("#6d7385",s),0,a+f/2)),n.add(ue(new Ke(t*1.27,t*1.27,t*.16,8),_e(i,s),0,a+f*.65)),n.add(ue(new Ke(t*1,t*.4,t*.45,8),_e("#4b5063",s),0,a-t*.22));for(let h=0;h<3;h++){const m=h/3*Math.PI*2,_=Math.cos(m)*t*.55,x=Math.sin(m)*t*.55,d=a+f;n.add(ue(new Ke(t*.28,t*.3,t*.7,8),_e("#4b5063",s),_,d+t*.35,x)),e.missile>0?n.add(ue(new Nn(t*.22,t*.6,8),_e("#d2604a",s),_,d+t*.95,x)):n.add(ue(new Ke(t*.3,t*.3,t*.05,8),_e("#2f3446",s),_,d+t*.72,x))}l(a+f/2,t*1.1),u(a+f*.25,-t*1.35);return}if(e.spec==="fortress"){const f=t*.8;n.add(ue(new Ke(t*1.45,t*1.55,f,10),_e("#8e86a3",s),0,a+f/2)),n.add(ue(new Ke(t*1.2,t*.5,t*.5,10),_e("#5e5873",s),0,a-t*.25));for(let h=0;h<10;h++){const m=h/10*Math.PI*2;n.add(ue(new ot(t*.4,t*.3,t*.3),_e("#a69fb8",s),Math.cos(m)*t*1.4,a+f+t*.15,Math.sin(m)*t*1.4))}n.add(ue(new Ke(t*.6,t*.7,t*1.9,6),_e(Xs,s),0,a+t*.95),ue(new Nn(t*.75,t*.7,6),_e(i,s),0,a+t*2.25));for(let h=0;h<4;h++){const m=h/4*Math.PI*2+Math.PI/4,_=Math.cos(m)*t*1.5,x=Math.sin(m)*t*1.5;n.add(ue(new Ke(t*.32,t*.36,t*.4,8),_e(i,s),_,a+f+t*.3,x));const d=ue(new ot(t*.6,t*.1,t*.1),_e("#4b5063",s),_+Math.cos(m)*t*.35,a+f+t*.4,x+Math.sin(m)*t*.35);d.rotation.y=-m,n.add(d)}l(a+f/2,t*1.4);return}n.add(ue(new Ke(t,t*.92,o,6),_e(Xs,s),0,a+o/2)),n.add(ue(new Ke(t*.92,t*.35,t*.45,6),_e("#b8ad96",s),0,a-t*.22)),n.add(ue(new Ke(t*.5,t*.68,t*.4,6),_e(i,s),0,c+t*.2)),(e.home||e.capital)&&n.add(ue(new Ke(t*.07,t*.07,t*.9,4),_e(Pt,s),0,c+t*.8)),l(a+o/2),u(a+o*.3,-t*1.2)}function _S(n,e,t){const i=new pn,s=e.owner===0?"#d9d9d9":fn(n,e.owner);let r;if(e.missile){r=new pn;const o=ue(new Ke(.3,.3,2.2,6),_e(Pt));o.rotation.z=Math.PI/2;const c=ue(new Nn(.34,.9,6),_e("#d2604a"),1.5);c.rotation.z=-Math.PI/2,r.add(o,c,ue(new nr(.5),En("#ffb07a",.8),-1.3)),r.scale.setScalar(1.4)}else e.lane?(r=new pn,r.add(ue(new nr(.9),En(s)),ue(new nr(1.4),En(s,.3)))):r=bh(s,t.map(o=>({c:o===n.cmdSpec?Ln:nt[n.specs[o].def].color,cmd:o===n.cmdSpec})),e.probe?1.1:1.9);r.name="model";const a=new $t(new Co(1.6,12),En("#0c101e",.35));return a.rotation.x=-Math.PI/2,a.name="shadow",i.add(r,a),i}function wt(n,e,t=0){return Ml.set(n,t,e).project(ki),{x:(Ml.x*.5+.5)*Ec,y:(-Ml.y*.5+.5)*Tc}}function wh(n){return wt(n.x,n.y,bs(n))}function Gu(n,e,t,i,s,r,a,o,c){n.font=`800 ${r?13:12}px system-ui`;const l=Math.max(r?30:24,n.measureText(s).width+12),u=r?18:16,f=u+8;n.strokeStyle=Pt,n.lineWidth=2,n.lineCap="round",n.beginPath(),n.moveTo(e,t),n.lineTo(e,t-f),n.stroke();const h=Math.sin(o/420+c)*1.6,m=t-f;n.globalAlpha=a?.6:1,n.fillStyle=i,n.beginPath(),n.moveTo(e+1,m),n.lineTo(e+l,m+h),n.lineTo(e+l-5,m+u/2+h),n.lineTo(e+l,m+u+h),n.lineTo(e+1,m+u),n.closePath(),n.fill(),n.fillStyle=Sh(i,.78),n.fillRect(e+1,m+u-3,l-4,3),n.fillStyle=Vi,n.textAlign="center",n.textBaseline="middle",n.fillText(s,e+l/2-1,m+u/2-.5+h/2),n.globalAlpha=1}function Eh(n,e,t,i){switch(n.save(),n.translate(t,i),n.fillStyle=Vi,n.strokeStyle=Vi,n.lineWidth=1.6,n.lineJoin="round",n.lineCap="round",n.beginPath(),e){case"mine":n.moveTo(-6,5),n.lineTo(-1,-5),n.lineTo(2,0),n.lineTo(4,-2),n.lineTo(7,5),n.closePath(),n.fill();break;case"barracks":n.moveTo(-5,0),n.lineTo(0,-4),n.lineTo(5,0),n.moveTo(-5,5),n.lineTo(0,1),n.lineTo(5,5),n.stroke();break;case"shield":n.moveTo(0,-6),n.lineTo(5,-4),n.lineTo(4,2),n.lineTo(0,6),n.lineTo(-4,2),n.lineTo(-5,-4),n.closePath(),n.fill();break;case"refinery":n.moveTo(1,-6),n.lineTo(-4,1),n.lineTo(0,1),n.lineTo(-1,6),n.lineTo(4,-1),n.lineTo(0,-1),n.closePath(),n.fill();break;case"lab":n.moveTo(-2,-6),n.lineTo(2,-6),n.moveTo(-1.5,-6),n.lineTo(-1.5,-1),n.lineTo(-5,5),n.lineTo(5,5),n.lineTo(1.5,-1),n.lineTo(1.5,-6),n.stroke(),n.beginPath(),n.moveTo(-3.5,2.5),n.lineTo(3.5,2.5),n.lineTo(5,5),n.lineTo(-5,5),n.fill();break;case"habitat":n.arc(0,3,6,Math.PI,0),n.closePath(),n.fill(),n.beginPath(),n.moveTo(-1,3),n.lineTo(-1,-1),n.lineTo(1,-1),n.lineTo(1,3),n.fillStyle=Uo.habitat,n.fill();break;case"silo":n.moveTo(0,-7),n.lineTo(3,-2),n.lineTo(3,4),n.lineTo(5,6),n.lineTo(-5,6),n.lineTo(-3,4),n.lineTo(-3,-2),n.closePath(),n.fill();break;case"fortress":n.moveTo(-6,6),n.lineTo(-6,-5),n.lineTo(-3,-5),n.lineTo(-3,-2),n.lineTo(-1,-2),n.lineTo(-1,-5),n.lineTo(1,-5),n.lineTo(1,-2),n.lineTo(3,-2),n.lineTo(3,-5),n.lineTo(6,-5),n.lineTo(6,6),n.closePath(),n.fill();break;case"flagship":n.moveTo(7,0),n.lineTo(-3,-5),n.lineTo(-6,-5),n.lineTo(-4,0),n.lineTo(-6,5),n.lineTo(-3,5),n.closePath(),n.fill();break;case"bay":n.moveTo(6,0),n.lineTo(-4,-5),n.lineTo(-2,0),n.lineTo(-4,5),n.closePath(),n.fill();break}n.restore()}function La(n,e,t,i,s,r=!1){const a=t>0?40:22;n.fillStyle=Uo[e],n.beginPath(),n.roundRect(i,s-10,a,20,6),n.fill(),r&&(n.strokeStyle="#9fe0ff",n.lineWidth=2.5,n.beginPath(),n.roundRect(i-1.5,s-11.5,a+3,23,7),n.stroke()),Eh(n,e,i+11,s);for(let o=0;o<3&&t>0;o++)n.fillStyle=o<t?Vi:"rgba(29,35,53,0.25)",n.beginPath(),n.arc(i+25+o*5,s,2,0,7),n.fill();return a+4}function vS(n,e,t,i){Ir||uS();const{cam:s,w:r,h:a}=t,o=s.z;(Bu!==e.seed||!hs)&&(fS(e),Bu=e.seed),(Ec!==r||Tc!==a)&&(Ec=r,Tc=a,Ir.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Ir.setSize(r,a,!1),ki.aspect=r/a,ki.updateProjectionMatrix());const c=a/(o*2*Math.tan(xh*Math.PI/360));ki.position.set(s.x,c*Math.sin(Mc),s.y+c*Math.cos(Mc)),ki.lookAt(s.x,0,s.y),ki.updateMatrixWorld(),i-bc>350&&(bc=i,hS(e,i)),$a.length=0,No.length=0;for(const d of e.nodes){const p=wn(e,d),v=Ks.get(d.id);if(p.tier==="hidden"){v&&(Si(v.grp),Ks.delete(d.id));continue}const w=p.tier==="live",M=e.intel[d.id].snap,E=w||!M?d:{...d,...M},T=w&&e.sides[d.owner]?Math.max(0,zr(e,d)-cf(e,d)):0,g=d.queue[0],b=d.owner===W&&g?Math.round((1-g.left/g.total)*24):-1,D=p.tier==="detected"?[]:e.sides[E.owner]?Kr(e,E):[],A=d.owner===W&&d.spec==="lab"&&or(e,d),C=[p.tier,p.owner,E.lv,E.sh,E.spec,E.missile,T,b,D.map(ie=>`${ie}:${Ri(e,e.specs[ie])}`).join("."),A,e.sides[E.owner]?zr(e,E):0].join("|");if(v&&v.sig===C)continue;v&&Si(v.grp);const U=mS(e,E,p.tier,p.owner,T),I=Hn(d);b>=0&&U.grp.add(dd(I*1.74,I*1.9,Ln,.08,Math.PI/2,Math.max(.05,b/24*Math.PI*2)));const L=[],k=2.5,$=D.slice(0,10),z=Math.min(5,$.length);$.forEach((ie,Y)=>{const te=e.specs[ie],ne=Y%5,Te=Y<5?z:$.length-5,Ie=(ne-(Te-1)/2)*k,J=I*1.55+1.6+ne%2*.4+(Y>=5?2.6:0),ge=yh(ie===e.cmdSpec?Ln:nt[te.def].color,ie===e.cmdSpec,1,Ri(e,te)>=3);ge.position.set(Ie,0,J),U.grp.add(ge),L.push({spec:ie,x:Ie,z:J})}),U.grp.position.set(d.x,0,d.y),bn.add(U.grp),Ks.set(d.id,{sig:C,...U,statues:L})}const l=new Map;for(const d of e.fleets)d.fight!==void 0&&l.set(d.to,(l.get(d.to)||0)+1);for(const[d,p]of Ks){const v=e.nodes[d];if(p.grp.position.set(v.x,0,v.y),v.flagship){const E=p.grp.getObjectByName("hull");E&&(v.dest&&(E.rotation.y=-Math.atan2(v.dest.y-v.y,v.dest.x-v.x)),E.position.y=Hn(v)*1.1+.3*Math.sin(i/600))}p.spin&&(p.spin.rotation.y=i/6e3),p.orb&&(p.orb.rotation.y=i/400,p.orb.position.y=3.3+.2*Math.sin(i/300));const w=e.nodes[d],M=p.grp.getObjectByName("bubble");if(M){const E=wn(e,w).tier==="live"?w.shields+Ka(e,w):0,T=Math.max(1,Uc(e,w)+Ka(e,w)),g=l.has(d)&&E>.5?.18+.14*Math.abs(Math.sin(i/70+d)):0;M.material.opacity=E>.5?.06+.2*Math.min(1,E/T)+g:0,M.visible=E>.5}for(const E of p.statues){const T=wt(w.x+E.x,w.y+E.z,dS*.65);$a.push({x:T.x,y:T.y,r:Math.max(12,o*1.6),spec:E.spec})}}const u=e.corridors.map(d=>`${d.a}-${d.b}-${d.owner}`).join(",");if(u!==wc){zi&&Si(zi),zi=new pn,wc=u;for(const d of e.corridors){const p=e.nodes[d.a],v=e.nodes[d.b],w=fn(e,d.owner),M=Math.hypot(v.x-p.x,v.y-p.y),E=new pn;E.add(ue(new Ke(.35,.35,M,6,1,!0),En(w,.95)),ue(new Ke(.9,.9,M,8,1,!0),En(w,.18))),E.position.set((p.x+v.x)/2,.8,(p.y+v.y)/2),E.rotation.set(0,-Math.atan2(v.y-p.y,v.x-p.x),Math.PI/2,"YXZ"),zi.add(E)}bn.add(zi)}const f=new Set,h=[];for(const d of e.fleets){const p=vr(e,d);if(!p)continue;h.push({f:d,seen:p}),f.add(d.id);const v=p===2?d.specs:[],w=`${d.owner}|${d.lane?1:0}|${d.missile?1:0}|${v.join(".")}`;let M=Zs.get(d.id);(!M||M.sig!==w)&&(M&&Si(M.grp),M={sig:w,grp:_S(e,d,v),statues:v.slice()},bn.add(M.grp),Zs.set(d.id,M));const E=e.nodes[d.to],T=M.grp.getObjectByName("model"),g=M.grp.getObjectByName("shadow");M.grp.position.set(d.x,0,d.y),M.grp.rotation.y=-Math.atan2(E.y-d.y,E.x-d.x),T.position.y=d.lane?.8:d.missile?5:3.4+.25*Math.sin(i/400+d.id),d.lane&&(T.rotation.y=i/300),g.visible=!d.lane,g.position.y=.04}for(const[d,p]of Zs)f.has(d)||(Si(p.grp),Zs.delete(d));const m=t.sel?.type==="node"?e.nodes[t.sel.id]:null;if(Ys.visible=kr.visible=!!m&&m.owner===W,Br.visible=!!m,m&&(Br.position.set(m.x,.12,m.y),Br.scale.setScalar(Hn(m)*2.05),Ys.visible)){const[d,p]=yo(e,m);Ys.position.set(m.x,.1,m.y),Ys.scale.setScalar(d),kr.position.set(m.x,.1,m.y),kr.scale.setScalar(p)}Ir.render(bn,ki),n.clearRect(0,0,r,a),n.lineCap="round";for(const{f:d}of h){if(d.lane)continue;const p=e.nodes[d.to],v=wt(d.x,d.y),w=wt(p.x,p.y),M=d.missile?"#d2604a":d.owner===0?"#d9d9d9":fn(e,d.owner);n.strokeStyle=Vt(M,.8),n.lineWidth=2.5,n.setLineDash([.1,9]),n.lineDashOffset=-i/50,n.beginPath(),n.moveTo(v.x,v.y),n.lineTo(w.x,w.y),n.stroke(),n.setLineDash([])}for(const d of e.nodes)if(d.owner===W)for(const p of d.queue.filter(v=>v.kind==="corridor")){const v=e.nodes[+p.id],w=wt(d.x,d.y,.8),M=wt(v.x,v.y,.8),E=p===d.queue[0]?1-p.left/p.total:0;n.strokeStyle=Vt(Pt,.4),n.lineWidth=2,n.setLineDash([4,6]),n.beginPath(),n.moveTo(w.x,w.y),n.lineTo(M.x,M.y),n.stroke(),n.setLineDash([]),n.strokeStyle=Ln,n.lineWidth=3,n.beginPath(),n.moveTo(w.x,w.y),n.lineTo(w.x+(M.x-w.x)*E,w.y+(M.y-w.y)*E),n.stroke()}if(t.targeting&&t.from>=0&&t.hover>=0&&t.hover!==t.from){const d=wt(e.nodes[t.from].x,e.nodes[t.from].y),p=wt(e.nodes[t.hover].x,e.nodes[t.hover].y);n.strokeStyle=Pt,n.lineWidth=3,n.setLineDash([.1,9]),n.beginPath(),n.moveTo(d.x,d.y),n.lineTo(p.x,p.y),n.stroke(),n.setLineDash([])}const _=e.specs[e.cmdSpec],x=e.nodes.filter(d=>wn(e,d).tier!=="hidden").sort((d,p)=>d.y-p.y);for(const d of x){const p=wn(e,d),v=wt(d.x,d.y,ku(d));if(v.x<-80||v.y<-40||v.x>r+80||v.y>a+160)continue;const w=wt(d.x,d.y),M=p.tier==="detected",E=p.tier==="stale",T=M?ms:p.owner===0?Yr:fn(e,p.owner),g=Hn(d)*o;if(t.targeting&&d.id!==t.from&&(t.glow?t.glow.has(d.id):bo(e,d)||d.owner===W)){const D=t.hover===d.id;n.strokeStyle=Vt(Ln,D?1:.45+.35*Math.sin(i/250)),n.lineWidth=D?5:3.5,n.shadowColor=Ln,n.shadowBlur=D?22:12,n.beginPath(),n.ellipse(w.x,w.y,g*2.3,g*2.3*qn,0,0,7),n.stroke(),n.shadowBlur=0}let b=wt(d.x,d.y+Hn(d)*1.55+3.4).y+8;if(M){const D=wt(d.x,d.y,bs(d));n.fillStyle=Pt,n.font="800 14px system-ui",n.textAlign="center",n.textBaseline="middle",n.globalAlpha=.8,n.fillText("?",D.x,D.y),n.globalAlpha=1,b=w.y+g*1.4*qn+10}else{const D=d.home?"⌂ ":d.citadel?"✦ ":d.capital?"♛ ":"",A=p.tier==="live"?d.spec:e.intel[d.id].snap?.spec||"",C=wt(d.x,d.y,ku(d,A));Gu(n,C.x,C.y+2,T,D+(E?"~":"")+p.drones,d.home||d.capital||d.citadel||!!d.flagship,E,i,d.id);const U=d.flagship?"flagship":A;U&&(n.globalAlpha=E?.65:1,n.fillStyle=Vi,n.beginPath(),n.arc(C.x-13,C.y-14,12,0,7),n.fill(),n.fillStyle=Uo[U],n.beginPath(),n.arc(C.x-13,C.y-14,10.5,0,7),n.fill(),Eh(n,U,C.x-13,C.y-14),n.globalAlpha=1);let I=w.x+g*1.7+8;const L=wt(d.x,d.y,bs(d)).y,k=($,z)=>{n.fillStyle=z,n.beginPath(),n.roundRect(I-8,L-8,16,16,4),n.fill(),n.fillStyle=Vi,n.font="800 11px system-ui",n.textAlign="center",n.textBaseline="middle",n.fillText($,I,L+.5),I+=19};d.owner===W&&d.front&&k("▣","#e8a85a"),d.event&&k("!",Ln),d.offer&&d.owner!==W&&k("☺","#e9a9c9"),d.hold&&k("◷","#a9dcec"),d.owner===W&&d.prisoners.length&&k("⛓","#e6a183"),_&&_.held&&_.node===d.id&&k("★","#e2604e")}if(o>4.5&&(n.font="700 10px system-ui",n.textAlign="center",n.textBaseline="middle",n.lineJoin="round",n.strokeStyle="rgba(29,35,53,0.7)",n.lineWidth=3,n.strokeText(d.name.toUpperCase(),w.x,b),n.fillStyle=Vt(Pt,M?.45:.85),n.fillText(d.name.toUpperCase(),w.x,b),b+=17),!M&&o>3.2&&p.owner!==0){const D=p.tier==="live"?d:{...d,...e.intel[d.id].snap},A=44+(D.sh?44:0)+(D.spec?26:0)-4;let C=w.x-A/2;n.globalAlpha=E?.65:1,C+=La(n,d.kind==="planet"?"mine":"barracks",D.lv,C,b),D.sh&&(C+=La(n,"shield",D.sh,C,b)),D.spec&&La(n,D.spec,0,C,b,D.spec==="lab"&&d.owner===W&&or(e,d)||D.spec==="silo"&&D.missile>0),n.globalAlpha=1}else!M&&o>3.2&&d.sh&&(n.globalAlpha=E?.65:1,La(n,"shield",(p.tier==="live"?d.sh:e.intel[d.id].snap?.sh)||0,w.x-20,b),n.globalAlpha=1)}for(const{f:d,seen:p}of h){if(d.missile)continue;const v=wt(d.x,d.y,d.lane?2.2:5.2),w=d.owner===0?"#d9d9d9":fn(e,d.owner);if(t.sel?.type==="fleet"&&t.sel.id===d.id){const M=wt(d.x,d.y);n.strokeStyle=Pt,n.lineWidth=2,n.beginPath(),n.ellipse(M.x,M.y,18,18*qn,0,0,7),n.stroke()}(d.drones>0||p<2)&&Gu(n,v.x,v.y,w,p===2?String(d.drones):"?",!1,!1,i,d.id),p===2&&d.specs.forEach((M,E)=>{const T=v.x-10-E*16,g=v.y-12,b=M===e.cmdSpec?Ln:nt[e.specs[M].def].color;n.fillStyle=b,n.beginPath(),n.arc(T,g,7.5,0,7),n.fill(),n.strokeStyle=Vi,n.lineWidth=1.5,n.stroke(),n.fillStyle=Vi,n.font="800 8px system-ui",n.textAlign="center",n.textBaseline="middle",n.fillText(M===e.cmdSpec?"★":nt[e.specs[M].def].tag,T,g+.5),$a.push({x:T,y:g,r:10,spec:M})})}xS(n,e,i,r,a),t.targeting&&t.edgeInfo&&t.glow&&SS(n,e,t,r,a)}const yl=new Map,Rr=[],Hu=new Map,Vu=n=>n-Math.floor(n);function xS(n,e,t,i,s){const r=new Set;let a=!1;for(const o of e.fleets){if(o.fight===void 0||!vr(e,o))continue;const c=e.nodes[o.to],l=wn(e,c).tier!=="hidden",u=wt(o.x,o.y,3.4),f=wt(c.x,c.y,bs(c)),h=o.owner===0?"#d9d9d9":fn(e,o.owner),m=c.owner===0?Yr:fn(e,c.owner);if(r.add(o.id),yl.set(o.id,{x:o.x,y:o.y,node:c.id,col:h}),!(u.x>-50&&u.x<i+50&&u.y>-50&&u.y<s+50))continue;const x=Hn(c)*(f.y-wt(c.x,c.y,bs(c)+1).y);n.save(),n.lineCap="round",n.globalCompositeOperation="lighter";const d=Math.min(7,3+Math.floor(o.drones/8));for(let p=0;p<d;p++){const v=Vu(t/240+p*(1/d)+o.id*.13);if(v>.55)continue;const w=(_i(o.id,p+Math.floor(t/260))-.5)*x*1.2,M=(_i(p,o.id+Math.floor(t/260))-.5)*x*.8,E=u.x+(_i(p,o.id)-.5)*16,T=u.y+(_i(o.id,p)-.5)*8;n.strokeStyle=Vt(h,1-v*1.6),n.lineWidth=4-v*4,n.shadowColor=h,n.shadowBlur=14,n.beginPath(),n.moveTo(E,T),n.lineTo(f.x+w,f.y+M),n.stroke(),n.strokeStyle=Vt("#ffffff",.9-v*1.6),n.lineWidth=1.2,n.beginPath(),n.moveTo(E,T),n.lineTo(f.x+w,f.y+M),n.stroke(),n.fillStyle=Vt("#fff4d6",.95-v*1.6),n.beginPath(),n.arc(f.x+w,f.y+M,4+9*v,0,7),n.fill(),n.fillStyle=Vt(h,.9-v*1.6),n.beginPath(),n.arc(E,T,3,0,7),n.fill(),a=!0}if(l&&(e.sides[c.owner]||c.owner===0))for(let p=0;p<4;p++){const v=Vu(t/300+p*.25+o.id*.21+.5);if(v>.5)continue;const w=p*2.1+o.id,M=f.x+Math.cos(w)*x*.9,E=f.y+Math.sin(w)*x*.5,T=u.x+(_i(p,Math.floor(t/310))-.5)*14,g=u.y+(_i(Math.floor(t/310),p)-.5)*8;n.strokeStyle=Vt(m,1-v*1.8),n.lineWidth=3.2-v*3,n.shadowColor=m,n.shadowBlur=12,n.beginPath(),n.moveTo(M,E),n.lineTo(T,g),n.stroke(),n.fillStyle=Vt(m,.9-v*1.6),n.beginPath(),n.arc(M,E,3.5,0,7),n.fill(),n.fillStyle=Vt("#ffffff",.9-v*1.6),n.beginPath(),n.arc(T,g,3+7*v,0,7),n.fill()}n.restore()}a&&li("laser",.8);for(const[o,c]of yl)r.has(o)||(yl.delete(o),Rr.push({x:c.x,y:c.y,t0:t,col:c.col,big:!1}),li("boom",.7));for(const o of e.nodes){const c=Hu.get(o.id);c!==void 0&&c!==o.owner&&wn(e,o).tier==="live"&&Rr.push({x:o.x,y:o.y,t0:t,col:o.owner===0?Yr:fn(e,o.owner),big:!0}),Hu.set(o.id,o.owner)}for(let o=Rr.length-1;o>=0;o--){const c=Rr[o],l=(t-c.t0)/(c.big?900:650);if(l>=1){Rr.splice(o,1);continue}const u=wt(c.x,c.y,c.big?1:3.4),f=1-l,h=(c.big?46:20)*(.3+l);n.save(),n.globalCompositeOperation="lighter",n.strokeStyle=Vt(c.col,f),n.lineWidth=c.big?4:3,n.beginPath(),n.ellipse(u.x,u.y,h,h*(c.big?qn:.8),0,0,7),n.stroke(),c.big||(n.fillStyle=Vt("#ffd9a0",f*.9),n.beginPath(),n.arc(u.x,u.y,10*f+2,0,7),n.fill());for(let m=0;m<(c.big?0:7);m++){const _=m*.9+c.t0,x=h*1.3;n.fillStyle=Vt(c.col,f),n.fillRect(u.x+Math.cos(_)*x-1.5,u.y+Math.sin(_)*x*.8-1.5,3,3)}n.restore()}}function SS(n,e,t,i,s){const r=i<820?66:74,a=64,o=8,c=10,l=124,u=38,f=t.from>=0?e.nodes[t.from]:null,h=[];for(const d of t.glow){const p=e.nodes[d];if(wn(e,p).tier==="hidden")continue;const v=wt(p.x,p.y,bs(p));v.x>=r&&v.x<=i-o&&v.y>=a&&v.y<=s-c||h.push({n:p,p:v,d:f?Math.hypot(p.x-f.x,p.y-f.y):0})}h.sort((d,p)=>d.d-p.d);const m=[],_=i/2,x=s/2;for(const d of h.slice(0,9)){const p=d.p.x-_,v=d.p.y-x,w=p>0?(i-o-l/2-_)/p:p<0?(r+l/2-_)/p:1e9,M=v>0?(s-c-u/2-x)/v:v<0?(a+u/2-x)/v:1e9,E=Math.min(Math.abs(w),Math.abs(M));let T=_+p*E,g=x+v*E;const b=Math.abs(w)<Math.abs(M);for(let $=0;$<12&&m.some(z=>Math.abs(z.x-T)<l+4&&Math.abs(z.y-g)<u+4);$++){const z=(Math.floor($/2)+1)*($%2?-1:1);b?g=x+v*E+z*(u+6):T=_+p*E+z*(l+6)}T=Math.max(r+l/2,Math.min(i-o-l/2,T)),g=Math.max(a+u/2,Math.min(s-c-u/2,g)),m.push({x:T,y:g});const D=wn(e,d.n),A=D.tier==="detected"?ms:D.owner===0?Yr:fn(e,D.owner),C=t.hover===d.n.id,U=T-l/2,I=g-u/2,L=Math.atan2(v,p);n.save(),n.shadowColor=C?Ln:"rgba(0,0,0,0.5)",n.shadowBlur=C?18:8,n.fillStyle="rgba(29,35,53,0.94)",n.beginPath(),n.roundRect(U,I,l,u,10),n.fill(),n.shadowBlur=0,n.strokeStyle=C?Ln:A,n.lineWidth=C?3:2,n.stroke(),n.fillStyle=A,n.beginPath(),n.arc(U+13,I+13,5,0,7),n.fill(),n.translate(U+l-13,I+u/2),n.rotate(L),n.fillStyle=Pt,n.beginPath(),n.moveTo(7,0),n.lineTo(-4,-5),n.lineTo(-2,0),n.lineTo(-4,5),n.closePath(),n.fill(),n.restore(),n.fillStyle=Pt,n.font="800 11px system-ui",n.textAlign="left",n.textBaseline="middle";const k=d.n.name.length>13?d.n.name.slice(0,12)+"…":d.n.name;n.fillText(k,U+23,I+13),n.fillStyle=Vt(Pt,.75),n.font="700 10px system-ui",n.fillText(t.edgeInfo(d.n.id),U+9,I+28),No.push({x:U,y:I,w:l,h:u,node:d.n.id})}}const Tt=n=>(n=Math.max(0,Math.floor(n)),`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`),ze=n=>n.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Ki=(n,e="")=>`<div class="bar ${e}"><i style="width:${Math.max(0,Math.min(100,n*100)).toFixed(1)}%"></i></div>`,Et=(n,e,t={})=>`<button data-a="${n}" class="btn ${t.cls||""}" ${t.off?"disabled":""}>${e}${t.sub?`<small>${t.sub}</small>`:""}${t.off?`<small class="why">${ze(t.off)}</small>`:""}</button>`,ii=n=>Math.abs(n)>=10?n.toFixed(0):n.toFixed(1);function Cs(n,e,t=!1,i=!1){const s=nt[e.def],r=e.id===n.cmdSpec,a=Ri(n,e);return`<span class="tok ${t?"big":""} ${r?"cmd":""} ${a>=3?"up":""}" data-tip="${e.id}" style="--c:${r?"#e8bd55":s.color}">${r?"★":s.tag}${i?`<i>${ji(n,e)}</i>`:""}${a>1&&!s.hidden?`<em>${a}</em>`:""}</span>`}const Th=n=>`<span class="tok big" style="--c:${nt[n].color}">${nt[n].tag}<i>${nt[n].pow}</i></span>`,Ah=n=>n.lvl>=5?1:(n.xp-q.specXp[n.lvl])/(q.specXp[n.lvl+1]-q.specXp[n.lvl]),MS=n=>n.cmd?"Commander":nt[n.def].name;function Rh(n,e){const t=nt[e.def];let i=t.text;e.cmd&&(i+=" "+is[e.cmd.arch].text);const s=Ri(n,e);return!e.cmd&&s>=3&&t.up.text&&(i+=` <b class="upt">Level 3: ${t.up.text}</b>`),!e.cmd&&s>=5&&(i+=' <b class="upt">Mastery: their passive counts twice.</b>'),i}function yS(n,e){const t=nt[e.def],i=Ri(n,e),s=i>(e.cmd?e.cmd.lvl:e.lvl),r=e.cmd?`Commander · ${t.name} ${is[e.cmd.arch].name} · level ${i}`:`${Yn(e)}${t.hidden?"":` · level ${i}`}`,a=e.held?`Prisoner at ${n.nodes[e.node]?.name}`:e.node>=0?`At ${n.nodes[e.node].name}`:e.fleet>=0?`In flight to ${n.nodes[Mo(n,e.fleet)?.to??0].name}`:"",o=e.owner===W?"":` · ${ze(Un(n,e.owner))}`;let c="";if(t.charge&&(c+=`<p><b>${t.charge.text.split(" (")[0]}:</b> ${e.owner===W&&e.cd>n.t?`recharging, ${Tt(e.cd-n.t)}`:"ready"} <small>(recharges in ${Tt(xo(n,e))})</small></p>`),!e.cmd&&!t.hidden&&e.owner===W){const u=i<2?"+1 Power":i<3?`upgraded: ${t.up.text}`:i<4?"+1 Power":i<5?"mastery, the passive counts twice":"";u&&(c+=`<p class="dim">Level ${i+1}: ${u}, +${q.cmdPerLvl} Command. Earned in battle.</p>${Ki(Ah(e),"gold")}`)}s&&(c+='<p class="goodp small">+1 level from the Flagship nearby.</p>'),e.cmd&&e.cmd.perks.length&&(c+=`<p class="dim">${e.cmd.perks.map(u=>rf(u).name).join(" · ")}</p>`);const l=e.owner===W&&!e.cmd?` · upkeep ◆ ${ii(Lc(n,e))}/min`:"";return`<div class="tiphead">${Cs(n,e,!0)}<div><b>${ze(r)}</b><small>${t.role} · Power ${ji(n,e)} · Command ${vo(n,e,n.mob.stage)}${l}${o}</small><small>${ze(a)}</small></div></div><p>${Rh(n,e)}</p>${c}`}function bS(n){const e=n.g,t=e.sides[W],i=e.mob,s=e.specs[e.cmdSpec];let r="";if(s&&s.held&&e.cmdLostT>=0)r=`<div class="banner bad" data-a="focus:${s.node}">★ COMMANDER CAPTURED at ${ze(e.nodes[s.node].name)}. Retake it in <b>${Tt(wf(e)-(e.t-e.cmdLostT))}</b></div>`;else if(n.mode)r='<div class="banner">Tap a glowing node to strike <button class="btn sm" data-a="cancelmode">Cancel</button></div>';else if(e.offs.length){const u=e.offs[0],f=e.offs.length>1?` <b>+${e.offs.length-1} more</b>`:"";r=`<div class="banner warn" ${u.warned?`data-a="focus:${u.target}"`:""}>⚠ ${ze(Un(e,u.owner))} offensive ${u.warned?`on ${ze(e.nodes[u.target].name)} `:""}launches in ${Tt(u.launchT-e.t)}${f}</div>`}const a=[1,2,3,4,5].map(u=>`<i class="${u<=i.stage?"on":""}"></i>`).join(""),o=t.produce&&Xc(t),c=t.produce?o?"Building Drones":"Army at the limit your income supports":"Drone production paused",l=ja(e,W);return`<div class="hudrow">
    <div class="stat" data-a="menu:run" title="Ultanium: income and upkeep per minute"><b class="ult">◆ ${Math.floor(t.ult)}</b><small class="${t.net<0?"bad":""}">${t.net>=0?"+":""}${ii(t.net)}/min</small></div>
    <button class="stat prod ${t.produce?o?"on":"full":"off"}" data-a="produce" title="${c}. Tap to ${t.produce?"pause":"resume"}."><b>⬢ ${Qs(e,W)}</b><small>${t.produce?o?"▶ building":"■ at limit":"⏸ paused"}</small></button>
    <div class="stat rsch" data-a="menu:research" title="Research: progress to the next choice">${t.rpm>0?`<b>⚗ ${Tt(Math.max(0,(l-t.rp)/t.rpm)*60)}</b>`:"<b>⚗ —</b>"}${Ki(t.rp/l,"blue")}</div>
    <div class="stat mob" data-a="menu:intel" title="Coalition mobilization"><span class="pips">${a}</span>${Ki(i.prog,"red")}${i.surge?`<small>TOTAL WAR +${i.surge}</small>`:""}</div>
    <div class="grow"></div>
    <div class="stat time"><b>${Tt(e.t)}</b></div>
    <button class="btn ico ${n.paused?"hot":""}" data-a="pause" title="Pause (space)">${n.paused?"▶":"❚❚"}</button>
    <button class="btn ico" data-a="speed" title="Speed">${n.speed}×</button>
    <button class="btn ico desk" data-a="sound" title="Sound">${cd()?"🔇":"🔊"}</button>
    <button class="btn ico desk" data-a="console" title="Tuning console">⚙</button>
    <button class="btn ico" data-a="menu:research" title="Menu (M)">☰</button>
  </div>${r}`}function wS(n){const e=n.g;return e.specs.filter(i=>i.owner===W).sort((i,s)=>(i.cmd?-1:0)-(s.cmd?-1:0)).map(i=>{const s=i.fleet>=0?Mo(e,i.fleet):null,r=i.held?"captured":s?`→ ${e.nodes[s.to].name}`:i.node>=0?e.nodes[i.node].name:"";return`<div class="rost ${i.held?"held":s?"fly":""} ${n.drag?.spec===i.id?"dragging":""}" data-spec="${i.id}" data-tip="${i.id}">${Cs(e,i,!0,!0)}<small>${ze(r)}</small></div>`}).join("")}const bl=n=>`${n>0?"+":""}${Math.round(n*100)}%`,Wu={atk:n=>`Attack +${n}`,per4:n=>`+1 per 4 Drones (max ${n})`,pierce:n=>n>=20?"Ignores shields":`Ignores ${n} shield`,strike:n=>`First strike ${n}`,surv:n=>n>0?`Saves ${n} Drones`:`Loses ${-n} more`,vsNeutral:n=>`+${n} vs neutral`,salvage:()=>"Salvage",speed:n=>`Speed ${bl(n)}`,stealth:()=>"Unseen",slotFree:()=>"Uses no slot",def:n=>`Defence +${n}`,shield:n=>`Shield +${n}`,regen:()=>"Fast recharge",inc:n=>`◆ +${n}/min`,research:n=>`Research +${n}`,prodSecs:n=>`Drones ${n}s faster`,free:n=>`Feeds ${n}`,lance:n=>`Lances ${n}`,martyr:n=>`Martyr ${n}`,build:()=>"Fast upgrades",upgCost:n=>`Upgrades −${n}`,launchSpeed:n=>`Launch ${bl(n)}`,fov:n=>`Vision ${bl(n)}`,income:n=>`◆ +${n}/min`,freeDrones:n=>`Feeds ${n}`,warn:()=>"Warns of attacks",sigint:()=>"Reads fleets",rp:n=>`Research +${n}`,recruitFree:()=>"Free recruits",corridorMax:()=>"More corridors",train:n=>`Trains ${n}/min`,mask:()=>"Unreadable",retreat:()=>"Retreats"};function $u(n){return Object.keys(n).filter(e=>n[e]&&Wu[e]).map(e=>Wu[e](n[e]))}function Ch(n,e,t=""){const i=nt[e.def],s={...i.glob||{},...e.cmd?is[e.cmd.arch].glob||{}:{}},r=$u(Ya(n,e)).concat($u(s),i.charge?[e.cd>n.t?`${i.charge.text.split(" (")[0]} ${Tt(e.cd-n.t)}`:`${i.charge.text.split(" (")[0]} ready`]:[]);return`<span class="pchip ${t}" data-tip="${e.id}">${Cs(n,e,!1,!0)}<span>${ze((r.length?r:[i.role]).slice(0,2).join(" · "))}</span></span>`}function Ph(n,e){return e.specs.length?`<div class="prow">${e.specs.map(t=>n.specs[t]?Ch(n,n.specs[t]):"").join("")}</div>`:""}function Dh(n,e){const t=xs(n,0,0,[],e,{});return{def:t.def,p:t.parts,max:Uc(n,e)}}function Lh(n,e,t,i){const s=Dh(n,e),r=s.p.dpow+s.p.ddef+s.p.aegis;return`<div class="kv"><div><small>GARRISON</small><b>⬢ ${e.drones}</b>${i&&cr(n,e)?`<small>keeps ${cr(n,e)}</small>`:""}</div><div><small>SHIELD</small><b>◈ ${Math.floor(e.shields)}<i class="of">/${s.max}</i></b>${r?`<small>+${r} ${s.p.aegis?"Aegis and ":""}Power</small>`:""}</div>${t}</div>`}const Xu=(n,e=3)=>`<span class="lvp">${Array.from({length:e},(t,i)=>`<i class="${i<n?"on":""}"></i>`).join("")}</span>`;function qu(n,e,t,i,s){const r=Za(e,t);if(r>=3)return`<div class="upb done"><b>${i}</b>${Xu(s)}<small>${r>s?"queued":"max"}</small></div>`;const a=Mi(n,e,t);return`<button class="upb" data-a="up:${t}" ${a?"disabled":""} title="${a||""}"><b>${i}</b>${Xu(s)}<small>${r>s?`+${r-s} queued · `:""}◆ ${wo(n,e,t)}</small></button>`}const ES=(n,e,t,i)=>t.kind==="lv"?`${e.kind==="planet"?"Mine":"Barracks"} ${i}`:t.kind==="sh"?`Shield ${i}`:t.kind==="spec"?Dn[t.id].name:t.kind==="missile"?"Missile":t.kind==="flagship"?"Flagship":`Corridor to ${n.nodes[+t.id].name}`;function TS(n,e){const t=n.g,i=t.sides[W],s=ln(t,e);let r="";const a=Vn(t,e),o=zr(t,e),c=e.kind==="planet"?`<div><small>INCOME</small><b>◆ ${ii(of(t,e,s))}</b><small>${El(t,e)>e.drones?`needs ${El(t,e)} working`:`fleets ${a}/${o}`}</small></div>`:`<div><small>1 DRONE / ${ii(Ef(t,e,s))}s</small><b>▲ ${a}/${o}</b><small>${i.produce?Xc(i)?"fleets ready":"army at limit":"paused"}</small></div>`;if(r+=Lh(t,e,c,!0),e.queue.length){const m={lv:e.lv,sh:e.sh};r+=`<div class="queue">${e.queue.map((_,x)=>{const d=_.kind==="lv"||_.kind==="sh"?++m[_.kind]:0;return`<div class="task slim ${x?"q":""}"><div><b>${ze(ES(t,e,_,d))} <small>${x?"queued":Tt(_.left/(1+(s.build||0)))}</small></b>${x?"":Ki(1-_.left/_.total,"gold")}</div><button class="btn sm" data-a="cancel:${x}" title="Cancel and refund">✕</button></div>`}).join("")}</div>`}e.hold&&(r+=`<div class="task slim"><div><b>${ze(e.hold.name)} <small>hold ${e.hold.need}+ · ${Tt(e.hold.until-t.t)}</small></b>${Ki(1-(e.hold.until-t.t)/e.hold.total,"blue")}</div></div>`),e.event&&(r+=Et("event",`! ${Xn[e.event].name}`,{cls:"wide gold slimb"}));const l=e.queue.find(m=>m.kind==="spec");if(r+='<div class="ups">',r+=qu(t,e,"lv",e.kind==="planet"?"Mine":"Barracks",e.lv),r+=qu(t,e,"sh","Shield",e.sh),e.flagship?r+=`<div class="upb done" title="Specialists within ${q.flagshipAura} of it fight a level higher"><b>Flagship</b><small>drag to open space to sail</small></div>`:e.citadel||(r+=e.spec?`<div class="upb done" title="${ze(Dn[e.spec].desc)}"><b>${Dn[e.spec].name}</b><small>${e.spec==="lab"&&!or(t,e)?'<span class="warnp">unstaffed</span>':"specialty"}</small></div>`:l?`<div class="upb done"><b>${Dn[l.id].name}</b><small>queued</small></div>`:`<button class="upb ${n.pickSpec===e.id?"sel":""}" data-a="pickspec"><b>Specialty</b><small>◆ ${wo(t,e,"spec")} · choose</small></button>`),e.spec==="silo"&&(r+=e.missile?'<button class="upb hotb" data-a="missile"><b>➹ Fire</b><small>pick a target</small></button>':`<button class="upb" data-a="up:missile" ${Mi(t,e,"missile")?"disabled":""}><b>➹ Missile</b><small>◆ ${q.missileCost}</small></button>`),e.kind==="station"&&!e.flagship&&!df(t,W)){const m=Mi(t,e,"flagship");r+=`<button class="upb" data-a="up:flagship" ${m?"disabled":""} title="${ze(m||"A station that moves. Specialists near it fight a level higher.")}"><b>⛴ Flagship</b><small>◆ ${q.flagshipCost}</small></button>`}if(r+="</div>",!e.spec&&!l&&n.pickSpec===e.id){r+='<div class="specpick"><small>Choose one, for good</small><div>';for(const m in Dn)Dn[m].on===e.kind&&(r+=`<button class="upb" data-a="up:spec:${m}" ${Mi(t,e,"spec",m)?"disabled":""}><b>${Dn[m].name}</b><small>${Dn[m].desc}</small></button>`);r+="</div></div>"}const u=Hc(t,e),f=xf(t,e),h=f.reduce((m,_)=>m+_.k,0);if(r+=`<div class="ralrow">
    <div class="seg"><button data-a="front:0" class="${e.front?"":"on"}" title="Supply: sends its spare Drones when a node rallies">Supply</button><button data-a="front:1" class="${e.front?"on":""}" title="Bastion: never sends its Drones away">Bastion</button></div>
    <button class="btn ral ${u>=0?"alarm":"hot"}" data-a="rally" ${f.length?"":"disabled"}><b>${u>=0?`Reinforce · hit in ${Tt(u)}`:"Rally here"}</b><small>${f.length?`⬢ ${h} from ${f.length} node${f.length>1?"s":""}`:u>=0?"none can arrive in time":"no spare Drones"}</small></button>
  </div>`,r+=`<p class="hint">Drag onto another node to send a fleet or build a corridor${e.flagship?", or onto open space to sail":""}. Double-tap to switch Supply and Bastion.</p>`,e.prisoners.length){const m=ht(t,W);for(const _ of e.prisoners){const x=t.specs[_],d=x.def==="warlord"||x.def==="archon",p=t.specs.some(v=>v.owner===W&&v.def===x.def);r+=`<div class="task slim"><div class="rowc">${Cs(t,x,!1,!0)} <b>${ze(Yn(x))}</b><small>prisoner</small></div>${d?"":Et(`ransom:${_}`,`+${Math.round(q.ransom*(1+(m.ransom||0)))}`,{cls:"sm"})+(x.def==="captain"||p?"":Et(`recruit:${_}`,`Recruit ◆ ${m.recruitFree?0:q.recruitCost}`,{cls:"sm hot"}))}</div>`}}return`${Ph(t,e)}<div class="pbody">${r}</div>`}function AS(n,e){const t=n.g,i=wn(t,e),s=Jr(t,e);let r="",a="";if(i.tier==="detected"||!s.v)r+='<p class="warnp">Detected only. Its forces are unknown. Fly a fleet close, or send a probe (0 Drones, no specialist) to identify it.</p>';else{const l=s.v,u=Dh(t,l);s.live||(r+=`<p class="warnp">Last seen ${Tt(s.age)} ago. This may be out of date.</p>`),r+=Lh(t,l,`<div><small>DEFENCE</small><b>${u.def}</b><small>beat it to win</small></div>`,!1),a=Ph(t,l);const f=`${l.kind==="planet"?"Mine":"Barracks"} level ${l.lv}${l.spec?` · ${Dn[l.spec].name}`:""}${l.missile?" · missile ready":""}`;r+=`<p class="dim">${f}</p>`,l.prisoners.some(h=>t.specs[h].owner===W)&&(r+=`<p class="warnp">Holding your people: ${l.prisoners.filter(h=>t.specs[h].owner===W).map(h=>ze(Yn(t.specs[h]))).join(", ")}</p>`),e.offer&&(r+='<p class="goodp">☺ Capture this to recruit 1 of 3 specialists.</p>'),e.event&&(r+=`<p class="goodp">! Signal: ${Xn[e.event].name}.</p>`),e.capital&&t.sides[l.owner]?.kind==="faction"&&(r+=`<p class="goodp">♛ Capital of the ${$n[t.sides[l.owner].fac].name}. Capture it and the whole faction surrenders.</p>`),e.citadel&&(r+='<p class="goodp">✦ The Citadel. Capture it to win.</p>')}const o=t.nodes.filter(l=>l.owner===W&&Vn(t,l)>0&&(l.specs.length||l.drones)).sort((l,u)=>ke(l,e)-ke(u,e)).slice(0,4);o.length?r+=`<div class="crewline stay"><small>SEND FROM · or drag from your node onto this one</small><div>${o.map(l=>`<button class="chip" data-a="from:${l.id}">${ze(l.name)} ⬢${l.drones} · ${Tt(ke(l,e)/Eo(t,l,[]))}</button>`).join("")}</div></div>`:r+='<p class="hint">No node has a fleet ready to send here.</p>';const c=t.nodes.find(l=>l.owner===W&&!Ro(t,l,e));return c&&(r+=Et(`missilefrom:${c.id}`,"➹ Missile strike",{cls:"wide gold",sub:`From ${ze(c.name)}: wipes the shield and kills ${q.missileKill} Drones`})),`${a}<div class="pbody">${r}</div>`}function ud(n,e){const t=n.nodes[e.from],i=Jr(n,n.nodes[e.to]).v;if(!i)return 0;const s=Math.min(t.drones,rr(n,e.specs));for(let r=1;r<=s;r++)if(xs(n,W,r,e.specs,i).win)return r;return 0}const co=(n,e)=>n.nodes[e.to].owner===W?n.nodes[e.from].drones:Math.min(n.nodes[e.from].drones,rr(n,e.specs));function RS(n,e){const t=Ya(n,e),i=nt[e.def];return!!(t.atk||t.per4||t.pierce||t.strike||t.vsNeutral||(t.surv||0)>0||t.salvage||t.stealth||i.charge?.on==="attack")}function Ih(n,e){const t=n.nodes[e.from],i=n.nodes[e.to],s=e.lane?Ao(n,t,i,e.specs).secs:ke(t,i)/Eo(n,t,e.specs),r=rr(n,e.specs);let a=`<div class="lstat"><span>⬢ <b>${e.drones}</b> go</span><span>⬢ <b>${t.drones-e.drones}</b> stay</span>${i.owner===W?"":`<span>command <b>${r}</b></span>`}<span>arrives <b>${Tt(s)}</b></span></div>`;if(i.owner===W)return a;if(!e.specs.length)return a+(e.drones?'<p class="badp"><b>An attack needs a specialist to lead it.</b> Add one, or send 0 Drones as a probe.</p>':'<p class="warnp">Probe: identifies the target and is lost.</p>');const o=Jr(n,i);if(!o.v)return a+'<p class="badp"><b>Unknown forces. Battle outcome unavailable.</b></p>';const c=xs(n,W,e.drones,e.specs,o.v),l=c.parts,u=[`${l.drones}⬢`,`${l.pow} Power`].concat(l.bonus?[`+${l.bonus}`]:[]).join(" + "),f=[`${l.garr}⬢`].concat(l.shield?[`${l.shield} shield`]:[],l.dpow?[`${l.dpow} Power`]:[],l.ddef?[`+${l.ddef}`]:[],l.aegis?[`${l.aegis} Aegis`]:[]).join(" + "),h=[l.lance?`${l.lance} lost before landing`:"",l.strike?`first strike kills ${l.strike}`:"",o.live?"":`intel ${Tt(o.age)} old`,e.specs.includes(n.cmdSpec)?"★ Commander at risk":""].filter(Boolean).join(" · ");a+=`<div class="vs ${c.win?"win":"lose"}"><div><b>${c.atk}</b><small>${u}</small></div><i>${c.win?">":"≤"}</i><div><b>${c.def}</b><small>${f}</small></div></div>`;const m=t.drones>r&&ud(n,e)===0&&!c.win;return a+=c.win?`<p class="goodp"><b>Victory:</b> ${c.surv} Drones survive. The crew gains ${q.xpWin} experience.</p>`:`<p class="badp"><b>Defeat:</b> short by ${c.def-c.atk+1}. ${i.owner===0?"The crew returns.":"The crew is captured."}${m?" This crew cannot command enough Drones: add a specialist.":""}</p>`,h&&(a+=`<p class="warnp small">${h}</p>`),a}function CS(n){const e=n.g,t=n.launch,i=e.nodes[t.from],s=e.nodes[t.to];if(i.owner!==W)return n.launch=null,"";const r=s.owner!==W,a=r?Jr(e,s).v:null,o=d=>a?xs(e,W,t.drones,d,a).atk-(xs(e,W,t.drones,d,a).parts.strike,0):d.reduce((p,v)=>p+ji(e,e.specs[v]),0),c=d=>t.specs.includes(d)?o(t.specs)-o(t.specs.filter(p=>p!==d)):o(t.specs.concat(d))-o(t.specs),l=(d,p,v)=>{const w=e.specs[d];return`<button class="chip ${p?"on":""} ${r&&RS(e,w)?"offs":""}" data-a="lspec:${d}">${Cs(e,w,!1,!0)} ${ze(MS(w))}${r?` <i class="gain">+${c(d)}</i>`:""}${v?' <i class="lead">LEADS</i>':""}</button>`},u=t.specs.map((d,p)=>l(d,!0,p===0&&r)).join(""),f=i.specs.filter(d=>!t.specs.includes(d)),h=f.map(d=>l(d,!1,!1)).join(""),m=t.lane?"":` ${t.specs.length}/${lr(e,i)}`,_=co(e,t);t.drones>_&&(t.drones=_);let x="";if(!r){const d=ff(e,i,s);Gr(e,i.id).some(v=>v.a===s.id||v.b===s.id)||(x=`<button class="btn wide corrb" data-a="lcorridor" ${d?"disabled":""}><b>⇄ Build a corridor here</b><small>${d?ze(d):`◆ ${Oc(e)} · ${Tt(q.corridorTime/(1+(ln(e,i).build||0)))} · ${Gr(e,i.id).length}/${uf(e)} at ${ze(i.name)} · double speed, no launch slot`}</small></button>`)}return`<div class="phead"><div><h2>${ze(i.name)} → ${ze(s.name)}</h2><small>${t.lane?"Through corridors (quickest route)":r?`Attack · this crew commands ${rr(e,t.specs)} Drones`:"Reinforce by fleet"}</small></div><button class="btn ico" data-a="lcancel">✕</button></div>
  <div class="pbody">
    ${x}
    <div class="drow"><input type="range" id="lslider" min="0" max="${_}" value="${t.drones}"><div class="quick">${Et("lq:none","0",{cls:"sm"})}${r&&!t.lane?Et("lq:min","Enough",{cls:"sm"}):Et("lq:half","½",{cls:"sm"})}${Et("lq:all","All",{cls:"sm"})}</div></div>
    <div class="crewline" data-drop="crew"><small>GOING${m}</small><div>${u||`<span class="ph">${r?"Tap or drag a specialist here to lead":"No specialists travelling"}</span>`}</div></div>
    ${f.length?`<div class="crewline stay"><small>STAYING AT ${ze(i.name.toUpperCase())}</small><div>${h}</div></div>`:""}
    <div id="preview">${Ih(e,t)}</div>
    <div class="row">${Et("lcancel","Cancel")}${Et("lconfirm",t.lane?"Send":"Launch",{cls:"hot grow"})}</div>
  </div>`}function PS(n,e){const t=n.g,i=vr(t,e),s=t.nodes[e.to],r=e.missile?"missile":e.lane?"convoy":e.probe?"probe":e.fight!==void 0?"fleet · in battle":"fleet";let a=`<div class="kv"><div><small>DRONES</small><b>⬢ ${i===2?e.drones:"?"}</b></div><div><small>ARRIVES IN</small><b>${Tt(Bc(t,e,s))}</b></div><div><small>HEADING</small><b data-a="focus:${s.id}" class="link">${ze(s.name)}</b></div></div>`;return i===2&&e.specs.length?a+=`<div class="prow wrap">${e.specs.map(o=>Ch(t,t.specs[o])).join("")}</div>`:i<2&&(a+='<p class="warnp">Strength unknown until it is inside full-intelligence range.</p>'),`<div class="phead"><div><h2><span class="dot" style="background:${fn(t,e.owner)}"></span>${ze(Un(t,e.owner))} ${r}</h2><small>In flight</small></div><button class="btn ico" data-a="close">✕</button></div><div class="pbody">${a}</div>`}function DS(n){const e=n.g;if(n.launch)return CS(n);if(!n.sel)return"";if(n.sel.type==="fleet"){const a=Mo(e,n.sel.id);return!a||!vr(e,a)?(n.sel=null,""):PS(n,a)}const t=e.nodes[n.sel.id],i=wn(e,t),s=`${t.citadel?"Citadel":t.kind==="planet"?["Small","Medium","Large"][t.size]+" planet":t.home?"Home station":"Station"} · ${i.tier==="detected"?"Unidentified":i.owner===0?"Neutral":ze(Un(e,i.owner))}`;return`<div class="phead"><div><h2><span class="dot" style="background:${i.tier==="detected"?"#56617c":i.owner===0?"#8f95a6":fn(e,i.owner)}"></span>${ze(t.name)}</h2><small>${s}</small></div><button class="btn ico" data-a="close">✕</button></div>${t.owner===W?TS(n,t):AS(n,t)}`}function LS(n){const e=n.g,t=e.sides[W],i=[["research","Research"],["roster","Specialists"],["relics","Relics"],["intel","Coalition"],["codex","Codex"],["log","Log"],["run","Run"]];let s="";if(n.menu==="research"){const r=ja(e,W),a=e.nodes.filter(o=>o.owner===W&&o.spec==="lab");s=`<div class="task"><div><b>Next choice</b><small>${t.rpm>0?`${ii(t.rpm)} research per minute · ${Tt(Math.max(0,(r-t.rp)/t.rpm)*60)} to go`:"No research yet: give a planet the Lab specialty"}</small>${Ki(t.rp/r,"blue")}</div></div>
      <p class="dim">Each time the bar fills you choose 1 of 3 technologies. What you choose decides what can be offered next. Labs: ${a.length?a.map(o=>`<span class="link" data-a="focus:${o.id}">${ze(o.name)}${or(e,o)?"":" (not staffed)"}</span>`).join(", "):"none"}.</p>`,s+=t.techs.length?"<h3>Researched</h3>"+t.techs.map(o=>`<div class="tech done"><b>${Ut[o].name} <small>${Ut[o].branch}</small></b><small>${Ut[o].desc}</small></div>`).join(""):""}else if(n.menu==="roster")s=e.specs.filter(a=>a.owner===W).map(a=>`<div class="spec" data-a="${a.node>=0?`focus:${a.node}`:"noop"}">${Cs(e,a,!0,!0)}<div><h4>${ze(a.cmd?`Commander · ${nt[a.def].name} ${is[a.cmd.arch].name} · L${a.cmd.lvl}`:`${Yn(a)} · L${a.lvl}`)} <small>${nt[a.def].role} · Command ${vo(e,a)}</small></h4><small>${a.held?"Prisoner at ":a.node>=0?"At ":"In flight"}${a.node>=0?ze(e.nodes[a.node].name):""}${a.cmd?"":` · upkeep ◆ ${ii(Lc(e,a))}/min`}</small><p>${Rh(e,a)}</p>${a.cmd?a.cmd.lvl<5?Ki((a.cmd.xp-q.xpLevels[a.cmd.lvl-1])/(q.xpLevels[a.cmd.lvl]-q.xpLevels[a.cmd.lvl-1]),"gold"):"":a.lvl<5?Ki(Ah(a),"gold"):""}</div></div>`).join("");else if(n.menu==="relics")s=t.relics.map(r=>`<div class="relic ${In[r].rarity}"><b>${In[r].name}</b><small>${In[r].rarity}</small><p>${In[r].desc}</p></div>`).join("")||'<p class="dim">No relics yet. Events and Warlords yield them.</p>';else if(n.menu==="intel"){const r=Qi[e.sides[e.archon].fac],a=e.mob;s=`<div class="fac" style="--c:#e07aa0"><b>✦ ${r.name} ${r.title}</b><p>${r.desc}</p><p>Mobilization stage ${a.stage}/5${a.surge?` · total war +${a.surge}`:""} (${Math.round(a.prog*100)}% to the next). Each stage gives every faction more Drones, larger offensives and new technology. Capturing enemy nodes sets it back; a captured Warlord removes a whole stage.</p><p>Citadel Aegis: ${Ka(e,e.nodes[e.citadel])} (${e.factions.filter(o=>!e.sides[o].broken).length} layers).</p></div>`;for(const o of e.factions){const c=e.sides[o],l=$n[c.fac],u=e.nodes.filter(f=>e.intel[f.id].snap?.owner===o||e.vis[f.id]===2&&f.owner===o);s+=u.length||c.broken?`<div class="fac" style="--c:${l.color}"><b>${l.name}${c.broken?" · SURRENDERED":""}</b><p>${l.desc}</p><p>${l.tell}</p><p class="dim">Known nodes: ${u.length} · Technology: ${c.techs.map(f=>Ut[f].name).join(", ")||"none"}</p>${u.filter(f=>f.capital).map(f=>`<p class="link" data-a="focus:${f.id}">♛ Capital located: ${ze(f.name)}</p>`).join("")}</div>`:'<div class="fac" style="--c:#56617c"><b>Unidentified faction</b><p class="dim">Not yet encountered.</p></div>'}}else if(n.menu==="codex"){const r=new Set([...n.meta.codex||[],...e.lore]);s=`<p class="flavour">${Dc}</p><p class="dim">Archive fragments are recovered from events on neutral stations. Found ${r.size} of ${_s.length}; they stay found from run to run.</p>`,s+=_s.map((a,o)=>r.has(a.id)?`<div class="lore"><small>FRAGMENT ${o+1}</small><b>${ze(a.title)}</b><p>${ze(a.text)}</p></div>`:`<div class="lore locked"><small>FRAGMENT ${o+1}</small><b>Not yet recovered</b></div>`).join("")}else if(n.menu==="log")s=e.log.slice().reverse().map(r=>`<div class="logl ${r.kind}" ${r.node>=0?`data-a="focus:${r.node}"`:""}><small>${Tt(r.t)}</small>${ze(r.msg)}</div>`).join("");else{const r=e.stats;s=`<div class="kv"><div><small>INCOME</small><b>◆ ${ii(t.inc)}</b><small>per minute</small></div><div><small>UPKEEP</small><b>◆ ${ii(t.upk)}</b><small>Drones and specialists</small></div><div><small>NET</small><b class="${t.net<0?"bad":""}">◆ ${ii(t.net)}</b><small>per minute</small></div></div>
      <p class="dim">Each Drone costs ◆ ${q.upkeepDrone}/min; your first ${q.freeBase} are free, and each Habitat feeds ${q.habitatFree} more. Specialists cost ◆ ${q.upkeepPower}/min per point of Power. Stations stop building once upkeep reaches ${Math.round(q.armyShare*100)}% of income. If you run out of Ultanium with negative income, Drones desert.</p>
      <div class="kv"><div><small>SEED</small><b>${e.seed}</b></div><div><small>THREAT</small><b>${e.threat}</b></div><div><small>NODES</small><b>${e.nodes.filter(a=>a.owner===W).length}/${e.nodes.length}</b></div></div>
      <p class="dim">Captures ${r.captures} · Nodes lost ${r.nodesLost} · Drones lost ${r.dronesLost}. The run saves automatically to this device.</p>
      ${Et("sound",cd()?"🔇 Sound is off: turn on":"🔊 Sound is on: turn off",{cls:"wide"})}${Et("help","How to play",{cls:"wide"})}${Et("abandon","Abandon run",{cls:"wide"})}`}return`<div class="sheet"><div class="phead"><div class="tabs">${i.map(([r,a])=>`<button data-a="menu:${r}" class="${n.menu===r?"on":""}">${a}</button>`).join("")}</div><button class="btn ico" data-a="menu:">✕</button></div><div class="pbody">${s}</div></div>`}function IS(n,e){const t=nt[n];return`<button class="card" data-a="choose:${e}">${Th(n)}<h3>${t.name}</h3><small>${t.role} · Power ${t.pow} · Command ${t.cmd??q.cmdBase} · upkeep ◆ ${ii(t.pow*q.upkeepPower)}/min</small><p>${t.text}</p>${t.charge?`<p class="dim">${t.charge.text}</p>`:""}<p class="dim">Level 3: ${t.up.text}</p></button>`}function NS(n){const e=n.g;if(e.result){const a=e.stats,o=e.result==="win";return`<div class="modal end ${o?"win":"lose"}"><h1>${o?"Victory":"Defeat"}</h1><p>${ze(e.resultWhy)}</p>
      <div class="kv"><div><small>TIME</small><b>${Tt(e.t)}</b></div><div><small>CAPTURES</small><b>${a.captures}</b></div><div><small>WARLORDS</small><b>${a.warlords}</b></div></div>
      <p class="dim">Nodes lost ${a.nodesLost} · Drones built ${a.dronesMade} · Drones lost ${a.dronesLost}<br>Specialists ${a.specs} · Relics ${a.relics} · Technologies ${a.techs} · Events ${a.events}</p>
      ${o&&e.threat<5?`<p class="goodp">Threat level ${e.threat+1} unlocked.</p>`:""}
      <div class="row">${Et("title","Main menu")}${Et("again","New run",{cls:"hot grow"})}</div></div>`}const t=e.pending[0];if(!t)return"";let i="";if(t.kind==="draft")return i=t.opts.map((a,o)=>{const c=nt[a.base],l=is[a.arch];return`<button class="card" data-a="choose:${o}">${Th(a.base)}<h3>${c.name} ${l.name}</h3><small>${l.blurb} · Power 3</small><p>${c.text}</p><p>${l.text}</p></button>`}).join(""),`<div class="modal"><h2>Choose your Commander</h2><p class="flavour">${Dc}</p><p class="dim">Your strongest specialist, free of upkeep, who commands ${q.cmdCommander} Drones and gains levels as you capture nodes. If they are captured you have ${Tt(q.rescueSecs)} to retake the node holding them, or the run ends.</p><div class="cards">${i}</div></div>`;if(t.kind==="spec")return i=t.opts.map((a,o)=>IS(a,o)).join(""),`<div class="modal"><h2>${ze(t.title)}</h2><p class="dim">Take one, or none: every specialist costs upkeep. An attack needs specialists to lead it, and each one commands a number of Drones. They grow through five levels by fighting.</p><div class="cards">${i}</div>${Et("choose:-1","Skip",{cls:"wide"})}</div>`;if(t.kind==="relic")return i=t.opts.map((a,o)=>{const c=In[a];return`<button class="card relic ${c.rarity}" data-a="choose:${o}"><h3>${c.name}</h3><small>${c.rarity}</small><p>${c.desc}</p></button>`}).join(""),`<div class="modal"><h2>Choose a relic</h2><p class="dim">Relics last for the whole run.</p><div class="cards">${i}</div></div>`;if(t.kind==="perk"){i=t.opts.map((o,c)=>{const l=rf(o);return`<button class="card" data-a="choose:${c}"><h3>${l.name}</h3><p>${l.desc}</p></button>`}).join("");const a=e.specs[e.cmdSpec].cmd.lvl;return`<div class="modal"><h2>${ze(t.title)}</h2>${a===3||a===5?'<p class="goodp">Commander Power +1.</p>':""}<div class="cards">${i}</div></div>`}if(t.kind==="lore"){const a=ep[t.opts[0]];return`<div class="modal lorem"><small>ARCHIVE FRAGMENT ${_s.indexOf(a)+1} OF ${_s.length} · ${ze(e.nodes[t.node]?.name||"")}</small><h2>${ze(a.title)}</h2><p class="flavour">${ze(a.text)}</p>${Et("choose:0","Close the archive",{cls:"wide hot"})}<small class="dim">Kept in the Codex in the menu.</small></div>`}if(t.kind==="terms"){const a=Qs(e,W),o=[...e.factions,e.archon].reduce((c,l)=>c+Qs(e,l),0);return`<div class="modal"><h2>${ze(t.title)}</h2><p class="flavour">"Commander. You have made your point. The Coalition will withdraw its fleets from the Reach and recognise Haven. Name your terms."</p><p class="dim">Your Drones ⬢ ${a} against the Coalition's ⬢ ${o}.</p><div class="cards"><button class="card" data-a="choose:0"><h3>Accept: decisive victory</h3><p>The run ends as a win.</p></button><button class="card" data-a="choose:1"><h3>Refuse: fight on</h3><p>Take the Citadel by force. The offer is not repeated.</p></button></div></div>`}if(t.kind==="tech")return i=t.opts.map((a,o)=>{const c=Ut[a];return`<button class="card tech${c.excl?" doc":""}" data-a="choose:${o}"><small>${c.branch} · tier ${c.tier}</small><h3>${c.name}</h3><p>${c.desc}</p>${c.excl?`<small class="why">Either this or ${Ut[c.excl].name}, never both</small>`:""}</button>`}).join(""),`<div class="modal"><h2>Research: choose one</h2><p class="dim">Your choice shapes what is offered next.</p><div class="cards">${i}</div></div>`;const s=Xn[t.event],r=e.nodes[t.node];return i=s.choices.map((a,o)=>{const c=bf(e,r,a);if(a.req&&c&&c.startsWith("Needs your"))return`<button class="card locked" disabled><h3>${a.label}</h3><small>${ze(c)}</small></button>`;const l=[a.ult?`◆ ${a.ult}`:"",a.drones?`⬢ ${a.drones}`:""].filter(Boolean).join(" · ");return`<button class="card" data-a="choose:${o}" ${c?"disabled":""}><h3>${a.label}</h3>${l?`<small>Cost ${l}</small>`:""}<p>${a.desc}</p>${c?`<small class="why">${ze(c)}</small>`:""}</button>`}).join(""),`<div class="modal"><h2>${s.name}</h2><small>${ze(r.name)} · ⬢ ${r.drones} here</small><p class="flavour">${s.text}</p><div class="cards">${i}</div>${Et("choose:-1","Decide later",{cls:"wide"})}</div>`}function US(n){const e=n.meta,t=Array.from({length:e.unlocked+1},(i,s)=>`<button class="chip ${n.newThreat===s?"on":""}" data-a="threat:${s}">${s}</button>`).join("");return`<div class="title"><h1>SPACE<span>NODES</span></h1><p class="tag">Recruit your specialists. Send the right crew. Take the Citadel before the Coalition takes you.</p><p class="flavour small">${Dc}</p>
    ${n.hasSave?Et("continue","Continue run",{cls:"wide hot"}):""}
    ${Et("newrun","New run",{cls:`wide ${n.hasSave?"":"hot"}`})}
    <div class="lv"><small>THREAT LEVEL</small><div class="chips">${t}</div><small class="dim">${n.newThreat===0?"Standard campaign.":"Tougher garrisons and faster mobilization."} Win to unlock the next.</small></div>
    ${Et("help","How to play",{cls:"wide"})}
    <small class="dim">Runs ${e.runs} · Wins ${e.wins} · Archive ${(e.codex||[]).length}/${_s.length}</small></div>`}function Yu(){return`<div class="modal help"><h2>How to play</h2>
  <p><b>Goal.</b> Capture <b>The Citadel</b> ✦. You lose if your <b>Commander</b> ★ is captured and not rescued in time.</p>
  <p><b>Specialists are the game.</b> Each has a <b>Power</b> number, a <b>Command</b> number and one passive effect. Power adds to attack when they fly with a fleet and to defence where they stand. An attack can carry only as many Drones as its crew commands, so big attacks need several specialists. Specialists gain <b>five levels</b> in battle: +1 Power at levels 2 and 4, their upgraded form at 3, mastery at 5, and +4 Command every level. Any number can be stationed at a node; a fleet carries three.</p>
  <p><b>Roster.</b> Your specialists are always shown down the side. Tap one to jump to them, hold (or hover) for details, <b>drag one onto a friendly node</b> to send them there.</p>
  <p><b>Sending fleets.</b> <b>Drag from one of your nodes onto any other node.</b> Targets off screen show as chips at the screen edge: drop on a chip. Onto an enemy or neutral node it is an attack; onto your own it reinforces (through a corridor if one connects them) or <b>builds a corridor</b>. A sheet opens: set the Drones, choose who goes, and read the outcome before you launch. Attack must beat Drones + shield + defending Power. Nodes you cannot read stay a gamble, and defenders can be reinforced before you land.</p>
  <p><b>Economy.</b> Planets mine Ultanium ◆; stations build Drones ⬢ on their own. Every Drone and specialist costs upkeep, so your income sets the size of your army. The ⬢ button in the top bar pauses production when you want to save.</p>
  <p><b>Nodes.</b> Each has two levels to raise (Mine or Barracks, and Shield) and one <b>specialty</b> chosen once: Refinery, Lab or Habitat for planets; Missile Silo, Fortress or Launch Bay for stations. Jobs queue up (four at a time) and are paid when queued. One station can build the <b>Flagship</b>: a station that sails where you drag it, and specialists near it fight a level higher.</p>
  <p><b>Supply and Bastion.</b> Nodes are Supply unless you make them a <b>Bastion</b> (double-tap the node). Press <b>Rally</b> on a node and every Supply node sends its spare Drones there, once; Bastions keep theirs. Nodes always keep the Drones their mines and labs need. If the node is about to be hit, Rally becomes <b>Reinforce</b> and only Drones that can arrive in time are sent. Corridors ⇄ carry Drones and specialists at double speed without using a fleet.</p>
  <p><b>Research.</b> Labs fill a bar; when it is full you choose 1 of 3 cards.</p>
  <p><b>The Coalition.</b> Three factions and an Archon. Mobilization grows their armies over time, and later several attack at once. Capture a faction's capital ♛, or beat it down below a third of your strength, and it collapses: its nodes go neutral and your captured specialists come home. When the Coalition is beaten, the Archon offers terms.</p>
  <p><b>The archive.</b> Events on neutral stations recover fragments of what happened to the Reach. They are kept in the Codex.</p>
  <p><b>Controls.</b> Phone: two fingers pan and zoom (one finger on empty space also pans). Desktop: move the mouse to a screen edge or use WASD to scroll, wheel to zoom, Space pauses, 1/2/3 speed, M menu, H home, Esc cancels.</p>
  ${Et("helpclose","Got it",{cls:"wide hot"})}</div>`}Tp();const ir="spacenodes.save.v5",Fo="spacenodes.meta.v1",ss=n=>document.getElementById(n),gn=ss("map"),qa=gn.getContext("2d"),Ku=ss("hud"),Zi=ss("roster"),Ia=ss("panel"),Na=ss("overlay"),Zu=ss("toasts"),qs=ss("tip"),Ur=ss("ghost"),ai={get:n=>{try{return localStorage.getItem(n)}catch{return null}},set:(n,e)=>{try{localStorage.setItem(n,e)}catch{}},del:n=>{try{localStorage.removeItem(n)}catch{}}},O={g:null,speed:1,paused:!1,sel:null,menu:null,mode:null,launch:null,drag:null,pickSpec:-1,screen:"title",newThreat:0,meta:{runs:0,wins:0,unlocked:0,best:0,codex:[],...JSON.parse(ai.get(Fo)||"{}")},hasSave:!!ai.get(ir)},Fe={x:100,y:150,z:7};let Qn=null,Ti=0,Ai=0,Nh=-1,bt=!0,Fr=0,uo=!1,Ju="title",Rc=!1;const vi=[];window.__app=O;window.__nodeScreen=n=>wh(O.g.nodes[n]);window.__chips=No;const FS=Cp({game:()=>O.g,selected:()=>O.sel?.type==="node"?O.sel.id:-1,setSpeed:n=>{O.speed=n,bt=!0},refresh:()=>{bt=!0}});function Qu(n){O.g=n,O.screen="game",O.sel=null,O.menu=null,O.mode=null,O.launch=null,O.drag=null,O.paused=!1,O.speed=1;const e=n.nodes[n.home];Fe.x=e.x+8,Fe.y=e.y,Fe.z=Math.max(6.5,Math.min(9,Ti/52)),Fr=n.log.length,vi.length=0,bt=!0,Rc=!1}function fd(){O.g&&!O.g.result&&O.screen==="game"&&(ai.set(ir,JSON.stringify(O.g)),O.hasSave=!0)}function OS(){const n=O.g;ai.del(ir),O.hasSave=!1,O.meta.runs++,n.result==="win"&&(O.meta.wins++,O.meta.unlocked=Math.min(5,Math.max(O.meta.unlocked,n.threat+1))),ai.set(Fo,JSON.stringify(O.meta))}function Wi(n){n&&(vi.push({msg:n,kind:"warn",node:-1,until:performance.now()+3500}),bt=!0)}function Yt(n){const e=Vp(O.g,n);return Wi(e),bt=!0,!e}function Uh(n){const e=O.g.nodes[n],t=Ti<820,i=!!O.sel||!!O.launch;Qn={x:e.x+(!t&&i?190/Fe.z:0),y:e.y+(t&&i?Ai*.22/(Fe.z*qn):0)}}function Oo(n,e){O.sel={type:n,id:e},O.launch=null,O.pickSpec=-1,bt=!0,n==="node"&&Uh(e)}function Fh(n,e,t){const i=O.g,s=i.nodes[n],r=i.nodes[e];if(s.owner!==W)return Wi("Not your node");if(n===e)return Wi("Pick a different node");t&&(t=Ao(i,s,r).via==="corridor");const a=r.owner===W;if(!t&&!a){if(!bo(i,r))return Wi("Target is not in detection range");if(Vn(i,s)<1)return Wi(`${s.name} has no fleet ready: its launch slots are all away`)}const o={from:n,to:e,drones:0,specs:[],lane:t},c=Math.max(0,s.drones-cr(i,s));if(r.owner===W)o.drones=c;else{o.specs=Kr(i,s).filter(u=>u!==i.cmdSpec).slice(0,lr(i,s));const l=ud(i,o);o.drones=Math.min(co(i,o),l?l+1:c)}O.launch=o,O.mode=null,O.sel={type:"node",id:e},bt=!0,Uh(e)}function fo(n){const[e,...t]=n.split(":"),i=O.g,s=O.sel?.type==="node"?O.sel.id:-1,r=a=>{O.mode={k:a,from:s},O.sel=null,O.launch=null,O.pickSpec=-1};switch(e){case"newrun":case"again":Qu(Ip(Date.now()%2147483647|0,O.newThreat,O.meta.codex||[]));break;case"continue":{const a=ai.get(ir);if(a)try{const o=JSON.parse(a);Ts(o),Qu(o)}catch{ai.del(ir),O.hasSave=!1}break}case"title":O.screen="title",O.g=null;break;case"threat":O.newThreat=+t[0];break;case"help":Ju=O.screen,O.screen="help",O.menu=null;break;case"helpclose":O.screen=Ju;break;case"abandon":confirm("Abandon this run?")&&(ai.del(ir),O.hasSave=!1,O.meta.runs++,ai.set(Fo,JSON.stringify(O.meta)),O.screen="title",O.g=null);break;case"pause":O.paused=!O.paused,O.paused&&fd();break;case"speed":O.speed=O.speed===1?2:O.speed===2?4:1;break;case"console":FS.toggle();break;case"menu":O.menu=t[0]||null;break;case"close":O.sel=null,O.launch=null;break;case"focus":O.menu=null,Oo("node",+t[0]);break;case"cancelmode":O.mode=null;break;case"up":Yt({c:"up",node:s,what:t[0],id:t[1]});break;case"cancel":Yt({c:"cancel",node:s,idx:+(t[0]||0)});break;case"sound":cS(!cd()),Io(),li("tap");break;case"event":Yt({c:"event",node:s});break;case"ransom":Yt({c:"ransom",spec:+t[0],recruit:!1});break;case"recruit":Yt({c:"ransom",spec:+t[0],recruit:!0});break;case"choose":Yt({c:"choose",idx:+t[0]});break;case"produce":Yt({c:"produce"});break;case"rally":Yt({c:"rally",node:s});break;case"front":i.nodes[s].front!==(t[0]==="1")&&Yt({c:"front",node:s});break;case"pickspec":O.pickSpec=O.pickSpec===s?-1:s;break;case"missile":r("missile");break;case"noop":break;case"missilefrom":Yt({c:"missile",from:+t[0],to:s});break;case"lspec":{const a=O.launch,o=+t[0];a.specs.includes(o)?a.specs=a.specs.filter(c=>c!==o):a.lane||a.specs.length<lr(i,i.nodes[a.from])?a.specs=a.specs.concat(o):Wi("The crew is full"),a.drones=Math.min(a.drones,co(i,a));break}case"lq":{const a=O.launch,o=i.nodes[a.from].drones,c=Math.min(o,co(i,a));a.drones=t[0]==="all"?c:t[0]==="half"?Math.ceil(c/2):t[0]==="none"?0:ud(i,a)||c;break}case"lcancel":O.launch=null;break;case"lcorridor":{const a=O.launch;Yt({c:"corridor",from:a.from,to:a.to})&&(O.launch=null,O.sel={type:"node",id:a.from},li("tap"));break}case"lconfirm":{const a=O.launch;Yt(a.lane?{c:"convoy",from:a.from,to:a.to,drones:a.drones,specs:a.specs}:{c:"launch",from:a.from,to:a.to,drones:a.drones,specs:a.specs})&&(O.launch=null,O.sel=null,li("launch"));break}}bt=!0}document.addEventListener("click",n=>{const e=n.target;if(mr){mr=!1;return}e.closest("#tip")||Es();const t=e.closest("[data-a]");!t||t.disabled||t instanceof HTMLInputElement&&t.type!=="checkbox"||fo(t.dataset.a)});document.addEventListener("input",n=>{const e=n.target;if(e.id==="lslider"&&O.launch&&O.g){O.launch.drones=+e.value;const t=document.getElementById("preview");t&&(t.innerHTML=Ih(O.g,O.launch))}});document.addEventListener("pointerdown",n=>{n.target.id==="lslider"&&(uo=!0)});document.addEventListener("pointerup",()=>{uo&&(uo=!1,bt=!0)});const jn=new Set;document.addEventListener("keyup",n=>jn.delete(n.key.toLowerCase()));document.addEventListener("keydown",n=>{Io(),!(O.screen!=="game"||!O.g)&&(jn.add(n.key.toLowerCase()),n.key===" "?(n.preventDefault(),fo("pause")):n.key==="1"?(O.speed=1,bt=!0):n.key==="2"?(O.speed=2,bt=!0):n.key==="3"?(O.speed=4,bt=!0):n.key==="m"||n.key==="M"?fo(O.menu?"menu:":"menu:research"):n.key==="h"||n.key==="H"?Oo("node",(O.g.nodes.find(e=>e.owner===W&&e.home)||O.g.nodes.find(e=>e.owner===W)||O.g.nodes[0]).id):n.key==="Escape"&&(O.mode?O.mode=null:O.launch?O.launch=null:O.menu?O.menu=null:O.sel=null,bt=!0))});document.addEventListener("visibilitychange",()=>{document.hidden&&fd()});const Oh=260;let ho=-1,mr=!1,ws=0,po=!1;function ko(n,e,t){if(!O.g||!O.g.specs[n])return;ho!==n&&(qs.innerHTML=yS(O.g,O.g.specs[n]),ho=n),qs.className="open";const i=qs.getBoundingClientRect();qs.style.left=`${Math.max(8,Math.min(Ti-i.width-8,e-i.width/2))}px`,qs.style.top=`${t-i.height-18<60?Math.min(Ai-i.height-8,t+26):t-i.height-18}px`}function Es(){ho>=0&&(qs.className="",ho=-1)}const hd=n=>n instanceof HTMLElement?n.closest("[data-tip]"):null;document.addEventListener("pointerover",n=>{if(n.pointerType!=="mouse"||n.target===gn||Mn||Kt)return;const e=hd(n.target);if(e){const t=e.getBoundingClientRect();ko(+e.dataset.tip,t.left+t.width/2,t.top)}else Es()});document.addEventListener("pointerdown",n=>{if(clearTimeout(ws),Io(),n.pointerType==="mouse"||n.target===gn)return;const e=hd(n.target),t=n.clientX,i=n.clientY;if(un.x=t,un.y=i,!e)return;const s=+e.dataset.tip,r=e.getBoundingClientRect();po=!0,ws=window.setTimeout(()=>{O.drag||Math.hypot(un.x-t,un.y-i)>=10||(ko(s,r.left+r.width/2,r.top),mr=!0,navigator.vibrate&&navigator.vibrate(12))},Oh)});const kh=()=>{po&&(po=!1,bt=!0)};document.addEventListener("pointerup",kh);document.addEventListener("pointercancel",kh);const un={x:0,y:0};let pd=!1,Bh=!1;document.addEventListener("pointermove",n=>{un.x=n.clientX,un.y=n.clientY,pd=n.pointerType==="mouse",Bh=n.target===gn});document.documentElement.addEventListener("mouseleave",()=>{pd=!1});document.addEventListener("pointerup",()=>clearTimeout(ws));document.addEventListener("pointercancel",()=>clearTimeout(ws));document.addEventListener("contextmenu",n=>{hd(n.target)&&n.preventDefault()});function zh(n,e){let t=null,i=1e9;for(const s of $a){const r=Math.hypot(s.x-n,s.y-e);r<s.r+6&&r<i&&(i=r,t=s)}return t}let Mn=null;Zi.addEventListener("pointerdown",n=>{const e=n.target.closest(".rost");!e||!O.g||(Mn={spec:+e.dataset.spec,x:n.clientX,y:n.clientY,id:n.pointerId,mouse:n.pointerType==="mouse"})});Zi.addEventListener("pointermove",n=>{if(!Mn||!O.g)return;const e=O.g,t=e.specs[Mn.spec],i=n.clientX-Mn.x,s=n.clientY-Mn.y;if(!O.drag&&Math.hypot(i,s)>10){if(!Mn.mouse&&Math.abs(s)>Math.abs(i)){Mn=null,clearTimeout(ws);return}O.drag={spec:t.id,x:n.clientX,y:n.clientY,over:-1,label:"",ok:!1};try{Zi.setPointerCapture(n.pointerId)}catch{}Es(),clearTimeout(ws),bt=!0}if(!O.drag)return;const r=O.drag;r.x=n.clientX,r.y=n.clientY;const a=document.elementFromPoint(n.clientX,n.clientY),o=Bo(n.clientX,n.clientY),c=o>=0?{type:"node",id:o}:a===gn?gr(n.clientX,n.clientY):null;if(r.over=c&&c.type==="node"?c.id:-1,r.ok=!1,a?.closest('[data-drop="crew"]')&&O.launch)r.ok=e.nodes[O.launch.from].specs.includes(t.id),r.label=r.ok?"Add to the crew":`Not at ${e.nodes[O.launch.from].name}`;else if(r.over>=0){const l=e.nodes[r.over],u=Gc(e,t,l);r.ok=!!u.via,r.label=u.via?`${l.name} · ${Tt(u.secs)} ${u.via==="corridor"?"via corridor":"by fleet"}`:u.why}else r.label=t.held?"They are a prisoner":t.node<0?"Already travelling":"Drop on one of your nodes";Ur.className=`open ${r.ok?"ok":""}`,Ur.style.left=`${r.x}px`,Ur.style.top=`${r.y}px`,Ur.innerHTML=`${Cs(e,t,!0,!0)}<span>${r.label.replace(/</g,"&lt;")}</span>`});const Gh=n=>{if(!Mn||!O.g)return;if(n.type==="pointercancel"&&!O.drag){Mn=null;return}const e=O.g,t=e.specs[Mn.spec],i=O.drag;if(Mn=null,O.drag=null,Ur.className="",clearTimeout(ws),i&&(Es(),mr=!1),i)document.elementFromPoint(n.clientX,n.clientY)?.closest('[data-drop="crew"]')&&O.launch?i.ok&&!O.launch.specs.includes(t.id)&&fo(`lspec:${t.id}`):i.over>=0&&i.ok&&Bo(n.clientX,n.clientY)>=0?Yt({c:"move",spec:t.id,to:i.over}):i.over>=0&&i.ok?Yt({c:"move",spec:t.id,to:i.over}):i.over>=0&&Wi(i.label);else if(!mr){const s=t.node>=0?t.node:e.fleets.find(r=>r.id===t.fleet)?.to??-1;s>=0&&Oo("node",s)}bt=!0};Zi.addEventListener("pointerup",Gh);Zi.addEventListener("pointercancel",Gh);let Ji=-1,Kt=null;const on=new Map;let $i=null,gs=!1,sr=0,Cc=!1,mo=0;const Pc=(n,e)=>({x:(n-Ti/2)/Fe.z+Fe.x,y:(e-Ai/2)/(Fe.z*qn)+Fe.y}),ti={x:0,y:0};function gr(n,e){const t=O.g;for(const r of t.fleets){if(!vr(t,r))continue;const a=wt(r.x,r.y,3);if(Math.hypot(a.x-n,a.y-e)<24)return{type:"fleet",id:r.id}}let i=-1,s=1e9;for(const r of t.nodes){if(wn(t,r).tier==="hidden")continue;const a=wh(r),o=Math.hypot(a.x-n,a.y-e);o<Math.max(30,Hn(r)*Fe.z*2.3)&&o<s&&(s=o,i=r.id)}return i>=0?{type:"node",id:i}:null}function Bo(n,e){for(const t of No)if(n>=t.x&&n<=t.x+t.w&&e>=t.y&&e<=t.y+t.h)return t.node;return-1}let Ua={id:-1,t:0};function kS(n,e){const t=O.g,i=gr(n,e);if(O.mode){if(!i||i.type!=="node")return;const s=O.mode;Yt({c:"missile",from:s.from,to:i.id})&&(O.mode=null,O.sel={type:"node",id:s.from}),bt=!0;return}if(i&&i.type==="node"&&t.nodes[i.id].owner===W&&!O.launch){const s=performance.now();if(Ua.id===i.id&&s-Ua.t<320){Ua={id:-1,t:0};const r=t.nodes[i.id];Yt({c:"front",node:r.id})&&(vi.push({msg:r.front?`${r.name} is a Bastion: it keeps its Drones when you rally`:`${r.name} is Supply: it sends spare Drones when you rally`,kind:"info",node:r.id,until:performance.now()+2600}),li("tap"));return}Ua={id:i.id,t:s}}if(!i){O.launch||(O.sel=null),bt=!0;return}if(O.launch&&i.type==="node"&&i.id!==O.launch.from)return Fh(O.launch.from,i.id,O.launch.lane);Oo(i.type,i.id)}gn.addEventListener("pointerdown",n=>{if(gn.setPointerCapture(n.pointerId),Io(),Es(),Cc=!1,clearTimeout(mo),on.set(n.pointerId,{x:n.clientX,y:n.clientY}),on.size===1&&($i={x:n.clientX,y:n.clientY},gs=!1,Ji=-1,O.g&&O.screen==="game"&&!O.mode)){const e=gr(n.clientX,n.clientY);e&&e.type==="node"&&O.g.nodes[e.id].owner===W&&(Ji=e.id)}if(on.size===2){Ji=-1,Kt=null;const[e,t]=[...on.values()];sr=Math.hypot(e.x-t.x,e.y-t.y),gs=!0}Qn=null,ti.x=ti.y=0,n.pointerType!=="mouse"&&(mo=window.setTimeout(()=>{if(on.size!==1||gs||!$i)return;const e=zh($i.x,$i.y);e&&(Cc=!0,mr=!0,ko(e.spec,e.x,e.y),navigator.vibrate&&navigator.vibrate(12))},Oh))});gn.addEventListener("pointermove",n=>{const e=on.get(n.pointerId);if(!e){if(O.g&&O.screen==="game"){const s=n.pointerType==="mouse"?zh(n.clientX,n.clientY):null;s?ko(s.spec,s.x,s.y):Es();const r=gr(n.clientX,n.clientY);Nh=r&&r.type==="node"?r.id:-1,gn.style.cursor=r||s?"pointer":"grab"}return}const t=n.clientX-e.x,i=n.clientY-e.y;if(e.x=n.clientX,e.y=n.clientY,on.size===1)if($i&&Math.hypot(n.clientX-$i.x,n.clientY-$i.y)>8&&(gs=!0),gs&&Ji>=0){const s=Bo(n.clientX,n.clientY),r=s>=0?{type:"node",id:s}:gr(n.clientX,n.clientY);Kt={from:Ji,over:r&&r.type==="node"&&r.id!==Ji?r.id:-1},Es(),clearTimeout(mo)}else gs&&(Fe.x-=t/Fe.z,Fe.y-=i/(Fe.z*qn),ti.x=-t/Fe.z,ti.y=-i/(Fe.z*qn));else if(on.size===2){const[s,r]=[...on.values()],a=Math.hypot(s.x-r.x,s.y-r.y);sr>0&&Vh((s.x+r.x)/2,(s.y+r.y)/2,a/sr),sr=a,Fe.x-=t/2/Fe.z,Fe.y-=i/2/(Fe.z*qn)}});const Hh=n=>{const e=on.delete(n.pointerId);if(clearTimeout(mo),Kt&&O.g){const t=Kt;if(Kt=null,Ji=-1,bt=!0,t.over>=0)Fh(t.from,t.over,O.g.nodes[t.over].owner===W);else if(O.g.nodes[t.from].flagship){const i=Pc(n.clientX,n.clientY);Yt({c:"sail",node:t.from,x:i.x,y:i.y})&&(Wi(null),li("launch",.6))}on.size<2&&(sr=0);return}Ji=-1,e&&on.size===0&&!gs&&!Cc&&$i&&O.g&&O.screen==="game"&&kS(n.clientX,n.clientY),on.size<2&&(sr=0)};gn.addEventListener("pointerup",Hh);gn.addEventListener("pointercancel",Hh);gn.addEventListener("wheel",n=>{n.preventDefault(),Vh(n.clientX,n.clientY,Math.exp(-n.deltaY*.0015))},{passive:!1});function Vh(n,e,t){const i=Pc(n,e);Fe.z=Math.max(2.4,Math.min(13,Fe.z*t));const s=Pc(n,e);Fe.x+=i.x-s.x,Fe.y+=i.y-s.y}function Wh(){const n=Math.min(2,window.devicePixelRatio||1);Ti=window.innerWidth,Ai=window.innerHeight,gn.width=Math.round(Ti*n),gn.height=Math.round(Ai*n),qa.setTransform(n,0,0,n,0,0)}window.addEventListener("resize",Wh);Wh();const ju={};function fs(n,e,t){if(ju[e]===t)return;ju[e]=t;const i=n.querySelector(".pbody"),s=i?i.scrollTop:0;n.innerHTML=t;const r=n.querySelector(".pbody");r&&s&&(r.scrollTop=s)}function BS(){const n=O.g,e=performance.now();if(O.screen==="title"||!n){for(const[s,r]of[[Ku,"hud"],[Ia,"panel"],[Zi,"roster"],[Zu,"toasts"]])fs(s,r,"");Ia.className="",Na.className="open clear",fs(Na,"ov",O.screen==="help"?Yu():US(O));return}for(;Fr<n.log.length;Fr++){const s=n.log[Fr];s.kind!=="info"&&vi.push({msg:s.msg,kind:s.kind,node:s.node,until:e+(s.kind==="bad"?9e3:6e3)}),li(/reached level/.test(s.msg)?"level":/^Captured|surrender|collapses|lays down/.test(s.msg)?"capture":s.kind==="bad"?"lost":s.kind==="warn"?"alert":"tap",s.kind==="info"?.5:1)}const t=n.lore.filter(s=>!(O.meta.codex||[]).includes(s));for(t.length&&(O.meta.codex=[...O.meta.codex||[],...t],ai.set(Fo,JSON.stringify(O.meta)),li("lore")),n.log.length>=150&&(Fr=n.log.length);vi.length&&(vi[0].until<e||vi.length>4);)vi.shift();if(fs(Zu,"toasts",vi.map(s=>`<div class="toast ${s.kind}" ${s.node>=0?`data-a="focus:${s.node}"`:""}>${s.msg.replace(/</g,"&lt;")}</div>`).join("")),fs(Ku,"hud",bS(O)),po)return;if(Mn||(fs(Zi,"roster",wS(O)),Zi.className=n.specs.filter(s=>s.owner===W).length*66>Ai-80?"many":""),!uo){const s=DS(O);Ia.className=s?O.launch?"open launch":"open":"",fs(Ia,"panel",s)}const i=O.screen==="help"?Yu():n.result||n.pending.length?NS(O):O.menu?LS(O):"";Na.className=i?"open":"",fs(Na,"ov",i)}function zS(n,e,t){const i=n.nodes[t],s=wn(n,i),r=Jr(n,i).v,a=s.tier==="detected"||!r?"⬢ ?":`⬢ ${r.drones}${r.shields>=1?` ◈ ${Math.floor(r.shields)}`:""}`,o=e>=0?n.nodes[e]:null;return o?`${a} · ${Tt(ke(o,i)/Eo(n,o,[]))}`:a}function GS(n){const e=O.mode;if(Kt)return new Set(n.nodes.filter(s=>s.id!==Kt.from&&(s.owner===W||bo(n,s))).map(s=>s.id));if(O.drag){const s=n.specs[O.drag.spec];return new Set(n.nodes.filter(r=>r.owner===W&&Gc(n,s,r).via).map(r=>r.id))}if(!e)return null;const t=n.nodes[e.from];return(s=>new Set(n.nodes.filter(s).map(r=>r.id)))(s=>!Ro(n,t,s))}let ef=performance.now(),Vs=0,tf=0,nf=0;function $h(n){const e=Math.min(.25,(n-ef)/1e3);ef=n;const t=O.g;if(t&&O.screen==="game"){if(!O.paused&&!O.menu&&!t.result&&!t.pending.length){Vs+=e*O.speed;let o=0;for(;Vs>=q.dt&&o++<40;)if(Vs-=q.dt,!Hp(t)){Vs=0,bt=!0;break}Vs>1&&(Vs=0)}t.result&&!Rc&&(Rc=!0,OS(),bt=!0,li(t.result==="win"?"win":"lose")),!on.size&&Math.abs(ti.x)+Math.abs(ti.y)>.01&&(Fe.x+=ti.x,Fe.y+=ti.y,ti.x*=.9,ti.y*=.9);const i=(jn.has("arrowright")||jn.has("d")?1:0)-(jn.has("arrowleft")||jn.has("a")?1:0),s=(jn.has("arrowdown")||jn.has("s")?1:0)-(jn.has("arrowup")||jn.has("w")?1:0);if(pd&&Bh&&!on.size&&!O.drag&&!O.menu&&!t.pending.length&&!document.getElementById("console")?.classList.contains("open")){const o=un.x<8?-1:un.x>Ti-8?1:0,c=un.y<8?-1:un.y>Ai-8?1:0;(o||c)&&(Qn=null,Fe.x+=o*520*e/Fe.z,Fe.y+=c*520*e/(Fe.z*qn))}if(Kt){const o=Bo(un.x,un.y),c=o>=0?{type:"node",id:o}:gr(un.x,un.y),l=c&&c.type==="node"?c.id:-1;Kt.over=l!==Kt.from?l:-1}(i||s)&&(Qn=null,Fe.x+=i*420*e/Fe.z,Fe.y+=s*420*e/(Fe.z*qn)),Qn&&(Fe.x+=(Qn.x-Fe.x)*.16,Fe.y+=(Qn.y-Fe.y)*.16,Math.hypot(Qn.x-Fe.x,Qn.y-Fe.y)<.4&&(Qn=null)),Fe.x=Math.max(-40,Math.min(t.w+40,Fe.x)),Fe.y=Math.max(-40,Math.min(t.h+40,Fe.y));const r=!!O.mode||!!O.drag||!!Kt,a=Kt?.from??(O.drag?t.specs[O.drag.spec].node:-1);vS(qa,t,{cam:Fe,w:Ti,h:Ai,sel:O.launch?{type:"node",id:O.launch.to}:O.sel,targeting:r,from:Kt?.from??O.mode?.from??O.launch?.from??-1,hover:Kt?Kt.over:O.drag?O.drag.over:Nh,glow:GS(t),edgeInfo:Kt||O.drag?o=>zS(t,a,o):null},n),n-nf>15e3&&(nf=n,fd())}else qa.fillStyle="#262e49",qa.fillRect(0,0,Ti,Ai);(bt||n-tf>250)&&(bt=!1,tf=n,BS()),requestAnimationFrame($h)}requestAnimationFrame($h);
