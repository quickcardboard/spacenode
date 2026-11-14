(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const ne={dt:.1,fleetSpeed:1.2,startUlt:30,startDrones:6,baseIncome:8,freeBase:8,mineOut:[0,3,5.5,8],sizeMult:[1,1.3,1.7],refineryMult:1.5,labRp:4,labWorkers:2,foundrySecs:20,upkeepDrone:.6,upkeepPower:.5,armyShare:.75,desertSecs:4,lvCost:[0,0,30,80],lvTime:40,shCost:[0,15,35,70],shTime:25,specCost:40,specTime:40,missileCost:100,missileTime:60,missileRange:170,missileKill:6,missileSpeed:2.5,prodSecs:[0,10,7,5],shieldPerLv:2,shieldRegenSecs:6,slotsStation:2,slotsPlanet:1,specSlots:3,crew:3,baySpeed:.3,bayCrew:1,rallyBatch:4,fovInner:{planet:[42,46,52],station:48},fovOuter:{planet:[72,78,88],station:82},fleetFov:[26,46],corridorCost:30,corridorTime:45,corridorRange:150,corridorMax:2,corridorSpeed:2,rescueSecs:150,ransom:15,recruitCost:25,rpBase:6,rpStep:3,xpLevels:[0,6,16,30,48],nodes:36,neutralShield:[1,2,3],stageSecs:420,graceSecs:300,offInterval:[0,240,210,180,150,120],offCommit:[0,.5,.6,.7,.8,.9],gatherSecs:45,stageFree:6,surgeFree:12,captureSetback:.15,aegisPerLayer:5},Pn={refinery:{name:"Refinery",on:"planet",desc:"Mine output +50%."},lab:{name:"Lab",on:"planet",desc:"Adds research speed. Needs 2 Drones working."},foundry:{name:"Foundry",on:"planet",desc:"This planet builds its own Drones, one every 20 s."},silo:{name:"Missile Silo",on:"station",desc:"Builds missiles. A missile wipes a node's shield and kills 6 Drones. No upkeep."},post:{name:"Command Post",on:"station",desc:"One more active specialist here; specialists stationed here cost no upkeep."},bay:{name:"Launch Bay",on:"station",desc:"Fleets from here fly 30% faster and carry one more specialist."}},dt={fleet:"#7fb2dc",eco:"#e3c565",def:"#8fc79a",intel:"#b39ad6",war:"#dd7a63",odd:"#e9a9c9"},nt={},qe=n=>nt[n.id]=n;qe({id:"admiral",name:"Admiral",tag:"Ad",color:dt.fleet,role:"Fleet speed",pow:2,starter:!0,text:"Their fleet flies 25% faster.",loc:{speed:.25},up:{text:"Their fleet flies 50% faster.",loc:{speed:.25}}});qe({id:"engineer",name:"Engineer",tag:"En",color:dt.eco,role:"Construction",pow:1,starter:!0,text:"Upgrades here build twice as fast and cost 10 less.",loc:{build:1,upgCost:10},up:{text:"Upgrades here cost 20 less.",loc:{upgCost:10}}});qe({id:"quartermaster",name:"Quartermaster",tag:"Qm",color:dt.eco,role:"Supply",pow:1,starter:!0,text:"Feeds 4 Drones at their node: they cost no upkeep.",loc:{free:4},up:{text:"Feeds 7 Drones.",loc:{free:3}}});qe({id:"scout",name:"Scout",tag:"Sc",color:dt.intel,role:"Vision",pow:1,starter:!0,text:"Their node or fleet sees 40% further.",loc:{fov:.4},up:{text:"Also reads the strength of every fleet you detect.",glob:{sigint:1}}});qe({id:"tactician",name:"Tactician",tag:"Ta",color:dt.war,role:"Massed attack",pow:3,starter:!0,text:"+1 attack per 4 Drones in their fleet (up to +3).",loc:{per4:3},up:{text:"Up to +5.",loc:{per4:2}}});qe({id:"vanguard",name:"Vanguard",tag:"Va",color:dt.war,role:"Shock troops",pow:4,text:"+1 attack.",loc:{atk:1},up:{text:"Power 5.",pow:1}});qe({id:"sentinel",name:"Sentinel",tag:"Se",color:dt.def,role:"Defence",pow:2,text:"+3 defence where stationed.",loc:{def:3},up:{text:"+5 defence.",loc:{def:2}}});qe({id:"siegebreaker",name:"Siegebreaker",tag:"Sg",color:dt.war,role:"Shield breaker",pow:2,text:"Their attacks ignore 4 shield.",loc:{pierce:4},up:{text:"Their attacks ignore all shields.",loc:{pierce:30}}});qe({id:"saboteur",name:"Saboteur",tag:"Sb",color:dt.intel,role:"First strike",pow:2,text:"Destroys 2 defending Drones before the battle.",loc:{strike:2},up:{text:"Destroys 4.",loc:{strike:2}}});qe({id:"diplomat",name:"Diplomat",tag:"Di",color:dt.eco,role:"Neutral expansion",pow:1,text:"+4 attack against neutral nodes.",loc:{vsNeutral:4},up:{text:"+7 against neutral nodes.",loc:{vsNeutral:3}}});qe({id:"scientist",name:"Scientist",tag:"Sn",color:dt.intel,role:"Research",pow:1,text:"+2 research per minute.",loc:{research:2},up:{text:"+4 research per minute.",loc:{research:2}}});qe({id:"medic",name:"Medic",tag:"Me",color:dt.def,role:"Rescue",pow:1,text:"When their node or fleet is defeated, everyone with them escapes home.",charge:{on:"fall",cd:180,mods:{medic:1},text:"Escape (recharges in 3:00)"},up:{text:"Recharges in 1:30.",cd:90}});qe({id:"ghost",name:"Ghost",tag:"Gh",color:dt.intel,role:"Stealth",pow:2,text:"Their fleet is unseen: the enemy sends no reinforcements against it.",loc:{stealth:1},up:{text:"Also ignores 3 shield.",loc:{pierce:3}}});qe({id:"reclaimer",name:"Reclaimer",tag:"Rc",color:dt.eco,role:"Salvage",pow:1,text:"Winning attacks pay 1 Ultanium per enemy Drone destroyed.",loc:{salvage:1},up:{text:"Pays 2 per Drone.",loc:{salvage:1}}});qe({id:"foreman",name:"Foreman",tag:"Fo",color:dt.war,role:"Production",pow:1,text:"The station they stand on builds each Drone 3 s faster.",loc:{prodSecs:3},up:{text:"5 s faster.",loc:{prodSecs:2}}});qe({id:"castellan",name:"Castellan",tag:"Cs",color:dt.def,role:"Shields",pow:2,text:"Shields here hold 3 more and recharge twice as fast.",loc:{shield:3,regen:1},up:{text:"Shields hold 5 more.",loc:{shield:2}}});qe({id:"martyr",name:"Martyr",tag:"Ma",color:dt.def,role:"Attrition",pow:1,text:"If their node falls, the attacker loses 5 more Drones.",loc:{martyr:5},up:{text:"The attacker loses 8 more.",loc:{martyr:3}}});qe({id:"echo",name:"Echo",tag:"Ec",color:dt.odd,role:"Amplifier",pow:1,text:"Doubles the passive of the specialist beside them.",up:{text:"Power 3.",pow:2}});qe({id:"broker",name:"Broker",tag:"Br",color:dt.eco,role:"Income",pow:1,text:"+4 Ultanium per minute.",glob:{income:4},up:{text:"+7 per minute.",glob:{income:3}}});qe({id:"navigator",name:"Navigator",tag:"Na",color:dt.fleet,role:"Launch control",pow:1,text:"Fleets launched from their node fly 30% faster.",loc:{launchSpeed:.3},up:{text:"60% faster.",loc:{launchSpeed:.3}}});qe({id:"prospector",name:"Prospector",tag:"Pr",color:dt.eco,role:"Extraction",pow:1,text:"The planet they stand on yields +3 Ultanium per minute.",loc:{inc:3},up:{text:"+5 per minute.",loc:{inc:2}}});qe({id:"recruiter",name:"Recruiter",tag:"Rt",color:dt.war,role:"Manpower",pow:1,text:"5 of your Drones cost no upkeep.",glob:{freeDrones:5},up:{text:"9 Drones cost no upkeep.",glob:{freeDrones:4}}});qe({id:"oracle",name:"Oracle",tag:"Or",color:dt.intel,role:"Foresight",pow:1,text:"Coalition offensives are announced with their target; mobilization is 10% slower.",glob:{warn:1,mobSlow:.1},up:{text:"Mobilization 20% slower.",glob:{mobSlow:.1}}});qe({id:"pirate",name:"Pirate",tag:"Pi",color:dt.war,role:"Ambush",pow:2,text:"Ambushes the first enemy fleet to reach their node, destroying 4 of its Drones.",charge:{on:"defend",cd:90,mods:{lance:4},text:"Ambush (recharges in 1:30)"},up:{text:"Recharges in 0:45.",cd:45}});qe({id:"inquisitor",name:"Inquisitor",tag:"In",color:dt.odd,role:"Prisoners",pow:1,text:"Prisoners can be recruited for free and ransoms pay double.",glob:{recruitFree:1,ransom:1},up:{text:"Each prisoner you hold pays 2 Ultanium per minute.",glob:{prisonInc:2}}});qe({id:"architect",name:"Architect",tag:"Ar",color:dt.eco,role:"Corridors",pow:1,text:"Corridors cost half and every node holds one more.",glob:{corridorCost:.5,corridorMax:1},up:{text:"Convoys travel 50% faster.",glob:{laneSpeed:.5}}});qe({id:"smuggler",name:"Smuggler",tag:"Sm",color:dt.fleet,role:"Logistics",pow:1,text:"Their fleet does not hold a launch slot while it is away.",loc:{slotFree:1},up:{text:"And flies 25% faster.",loc:{speed:.25}}});qe({id:"strategist",name:"Strategist",tag:"St",color:dt.war,role:"Decisive strike",pow:2,text:"Their next attack hits for +4.",charge:{on:"attack",cd:120,mods:{atk:4},text:"Decisive strike (recharges in 2:00)"},up:{text:"Recharges in 1:00.",cd:60}});qe({id:"warden",name:"Warden",tag:"Wd",color:dt.def,role:"Survivors",pow:2,text:"Their fleet loses 2 fewer Drones when it wins.",loc:{surv:2},up:{text:"4 fewer.",loc:{surv:2}}});qe({id:"ironmonger",name:"Ironmonger",tag:"Im",color:"#c98a3c",role:"Ferrum signature",pow:2,sig:"ferrum",text:"Shields here hold 4 more; +2 defence.",loc:{shield:4,def:2},up:{text:"Shields hold 6 more.",loc:{shield:2}}});qe({id:"berserker",name:"Berserker",tag:"Bs",color:"#d2604a",role:"Crimson signature",pow:4,sig:"crimson",text:"+3 attack, but their fleet loses 1 more Drone.",loc:{atk:3,surv:-1},up:{text:"+5 attack.",loc:{atk:2}}});qe({id:"lens",name:"Lens",tag:"Ln",color:"#e3c565",role:"Lumen signature",pow:2,sig:"lumen",text:"Lances destroy 3 Drones of every fleet attacking their node.",loc:{lance:3},up:{text:"Lances destroy 5.",loc:{lance:2}}});qe({id:"phantom",name:"Phantom",tag:"Ph",color:"#9a7cc4",role:"Veil signature",pow:2,sig:"veil",text:"All of your fleets fly unseen.",glob:{stealth:1},up:{text:"All of your attacks ignore 2 shield.",glob:{pierce:2}}});qe({id:"wayfinder",name:"Wayfinder",tag:"Wf",color:"#6ea6d6",role:"Drift signature",pow:1,sig:"drift",text:"All of your fleets fly 20% faster.",glob:{speed:.2},up:{text:"35% faster.",glob:{speed:.15}}});qe({id:"warlord",name:"Warlord",tag:"W",color:"#ffffff",role:"Faction leader",pow:4,hidden:!0,text:"+2 defence at the capital.",loc:{def:2},up:{text:""}});qe({id:"archon",name:"Archon",tag:"A",color:"#e07aa0",role:"Coalition Commander",pow:6,hidden:!0,text:"+3 defence at the Citadel.",loc:{def:3},up:{text:""}});qe({id:"captain",name:"Captain",tag:"Cp",color:"#aab2c0",role:"Coalition fleet leader",pow:1,hidden:!0,text:"Leads a Coalition fleet.",up:{text:""}});const vh=Object.values(nt).filter(n=>!n.sig&&!n.hidden).map(n=>n.id),xh=Object.values(nt).filter(n=>n.starter).map(n=>n.id),qi={marshal:{id:"marshal",name:"Marshal",blurb:"Leads from the front.",text:"+2 attack.",loc:{atk:2}},pathfinder:{id:"pathfinder",name:"Pathfinder",blurb:"Controls tempo.",text:"Their fleet flies 30% faster; all your nodes see 20% further.",loc:{speed:.3},glob:{fov:.2}},warden:{id:"warden",name:"Warden",blurb:"Holds the line.",text:"+4 defence where stationed; shields there recharge twice as fast.",loc:{def:4,regen:1}},industrialist:{id:"industrialist",name:"Industrialist",blurb:"Builds an empire.",text:"+4 Ultanium per minute; every upgrade costs 8 less.",glob:{income:4,upgCost:8}},corsair:{id:"corsair",name:"Corsair",blurb:"Lives off the enemy.",text:"Winning attacks pay 1 Ultanium per Drone destroyed and lose 2 fewer Drones.",loc:{salvage:1,surv:2}},savant:{id:"savant",name:"Savant",blurb:"Wins with ideas.",text:"+3 research per minute; specialists cost half upkeep.",glob:{rp:3,specUpkeep:.5}}},Sh=3,Mu=[{id:"ironwill",name:"Iron Will",desc:"Rescue window +45 s.",glob:{rescue:45}},{id:"march",name:"Forced March",desc:"Commander's fleet flies 20% faster.",loc:{speed:.2}},{id:"tithe",name:"Tithe",desc:"+3 Ultanium per minute.",glob:{income:3}},{id:"hard",name:"Hardliner",desc:"+3 defence where the Commander stands.",loc:{def:3}},{id:"shock",name:"Shock Tactics",desc:"Commander's attacks +2.",loc:{atk:2}},{id:"survivor",name:"Survivor",desc:"Commander's fleet loses 2 fewer Drones when it wins.",loc:{surv:2}},{id:"farsight",name:"Far Sight",desc:"All your nodes see 15% further.",glob:{fov:.15}},{id:"requisition",name:"Requisition",desc:"Every upgrade costs 8 less.",glob:{upgCost:8}},{id:"entourage",name:"Entourage",desc:"Nodes and fleets hold one more specialist.",glob:{slots:1}},{id:"sapper",name:"Sapper",desc:"Commander's attacks ignore 3 shield.",loc:{pierce:3}},{id:"magnate",name:"Magnate",desc:"Every planet yields +1 Ultanium per minute.",glob:{inc:1}},{id:"commissary",name:"Commissary",desc:"6 of your Drones cost no upkeep.",glob:{freeDrones:6}},{id:"drill",name:"Drillmaster",desc:"The station the Commander stands on builds Drones 3 s faster.",loc:{prodSecs:3}},{id:"mentor",name:"Mentor",desc:"Specialists cost half upkeep.",glob:{specUpkeep:.5}}],yn={},at=(n,e,t,i,s)=>yn[n]={id:n,name:e,rarity:t,desc:i,mods:s};at("extractor","Deep-Core Extractor","common","Every planet yields +1 Ultanium per minute.",{inc:1});at("foundry","Drone Foundry Matrix","common","Stations build each Drone 1 s faster.",{prodSecs:1});at("surveyor","Quantum Surveyor","common","All nodes see 20% further.",{fov:.2});at("propulsion","Emergency Propulsion Core","common","All fleets fly 12% faster.",{speed:.12});at("salvage","Salvage Protocol","common","Winning attacks pay 1 Ultanium per enemy Drone destroyed.",{salvage:1});at("scaffold","Modular Scaffolds","common","Upgrades build 50% faster.",{build:.5});at("rations","Ration Stores","common","6 of your Drones cost no upkeep.",{freeDrones:6});at("bulkhead","Hardened Bulkheads","common","Every node's shield holds 1 more.",{shield:1});at("ledger","Ration Ledger","common","+4 Ultanium per minute.",{income:4});at("mirror","Signal Mirror","common","Coalition offensives are announced with their target.",{warn:1});at("adaptive","Adaptive Shield Network","uncommon","Nodes you capture start with 3 shield.",{capShield:3});at("warchest","War Chest","uncommon","Gain 8 Ultanium whenever you capture a node.",{capUlt:8});at("phalanx","Phalanx Doctrine","uncommon","All your attacks +1.",{atk:1});at("cadre","Veteran Cadre","uncommon","Winning attacks lose 2 fewer Drones.",{surv:2});at("lattice","Regrowth Lattice","uncommon","Shields hold 1 more and recharge twice as fast.",{regen:1,shield:1});at("charter","Bulwark Charter","uncommon","+1 defence at every node.",{def:1});at("stipend","Officers' Stipend","uncommon","Specialists cost half upkeep.",{specUpkeep:.5});at("contracts","Builder Contracts","uncommon","Every upgrade costs 10 less.",{upgCost:10});at("lanes","Express Lanes","uncommon","Convoys travel 50% faster and every node holds one more corridor.",{laneSpeed:.5,corridorMax:1});at("sigil","Tiebreaker Sigil","rare","You win tied battles when attacking.",{ties:1});at("phoenix","Phoenix Clause","rare","Once every 3 minutes, a node capture refunds the Drones it cost.",{refund:180});at("chair","Fourth Chair","rare","Nodes and fleets hold one more specialist.",{slots:1});at("crown","Hollow Crown","rare","Commander rescue window +90 s.",{rescue:90});at("stillness","Stillness Engine","rare","Coalition mobilization is 25% slower.",{mobSlow:.25});at("twin","Twin Minds","rare","The Commander's passive effects count twice.",{cmdDouble:1});at("lance","Null Lance","rare","All your attacks ignore 3 shield.",{pierce:3});at("levy","Conscription Edict","rare","12 of your Drones cost no upkeep.",{freeDrones:12});at("night","Long Night","rare","All of your fleets fly unseen.",{stealth:1});at("academy","War Academy","rare","New recruits arrive already upgraded.",{recruitUp:1});at("college","Staff College","rare","Every specialist has +1 Power.",{powAll:1});const Pt={},Xe=(n,e,t,i,s,r,a,o)=>Pt[n]={id:n,name:e,branch:t,tier:i,pre:s,desc:r,mods:a,excl:o};Xe("mining","Deep Mining","Industry",1,void 0,"Every planet yields +1 Ultanium per minute.",{inc:1});Xe("automation","Automation","Industry",2,"mining","Mines and labs run without Drones working them.",{noOps:1});Xe("heavy","Heavy Industry","Industry",3,"automation","Every upgrade costs 15 less.",{upgCost:15},"rationing");Xe("rationing","Rationing","Industry",3,"automation","10 of your Drones cost no upkeep.",{freeDrones:10},"heavy");Xe("foundries","Orbital Foundries","Industry",4,"heavy","Stations build each Drone 2 s faster.",{prodSecs:2});Xe("megamines","Core Tapping","Industry",5,"foundries","Every planet yields +2 Ultanium per minute.",{inc:2},"conscription");Xe("conscription","Conscription","Industry",5,"foundries","15 more Drones cost no upkeep.",{freeDrones:15},"megamines");Xe("arcology","Arcologies","Industry",6,"megamines","+12 Ultanium per minute.",{income:12});Xe("drill","Combat Drill","Military",1,void 0,"All your attacks +1.",{atk:1});Xe("harmonics","Shield Harmonics","Military",2,"drill","Shields recharge twice as fast.",{regen:1});Xe("siege","Siege Doctrine","Military",3,"harmonics","All your attacks ignore 2 shield.",{pierce:2},"depth");Xe("depth","Defence in Depth","Military",3,"harmonics","+2 defence at every node.",{def:2},"siege");Xe("veterans","Veteran Crews","Military",4,"siege","Winning attacks lose 2 fewer Drones.",{surv:2});Xe("shock","Shock Assault","Military",5,"veterans","All your attacks +2.",{atk:2},"bulwark");Xe("bulwark","Bulwark Fields","Military",5,"veterans","Every shield holds 3 more.",{shield:3},"shock");Xe("massed","Massed Formations","Military",6,"shock","Every fleet gains +1 attack per 4 Drones (up to +3).",{per4:3});Xe("engines","Improved Engines","Logistics",1,void 0,"All fleets fly 15% faster.",{speed:.15});Xe("tunnelling","Corridor Engineering","Logistics",2,"engines","Corridors cost half and every node holds one more.",{corridorCost:.5,corridorMax:1});Xe("fold","Fold Drive","Logistics",3,"tunnelling","All fleets fly 25% faster.",{speed:.25},"transit");Xe("transit","Mass Transit","Logistics",3,"tunnelling","Convoys travel twice as fast.",{laneSpeed:1},"fold");Xe("pads","Extra Launch Pads","Logistics",4,"fold","Every node has one more launch slot.",{slotAdd:1});Xe("carriers","Carrier Wings","Logistics",5,"pads","Every node has another launch slot; fleets fly 15% faster.",{slotAdd:1,speed:.15},"network");Xe("network","Corridor Network","Logistics",5,"pads","Every node holds two more corridors, and corridors are nearly free.",{corridorMax:2,corridorCost:.25},"carriers");Xe("gates","Jump Gates","Logistics",6,"carriers","All fleets fly 40% faster.",{speed:.4});Xe("sigint","Signal Analysis","Intelligence",1,void 0,"Read the strength of every fleet you detect.",{sigint:1});Xe("sensors","Long-Range Sensors","Intelligence",2,"sigint","All nodes and fleets see 25% further.",{fov:.25});Xe("deepcover","Deep Cover","Intelligence",3,"sensors","Offensives are announced with their target; mobilization 15% slower.",{warn:1,mobSlow:.15},"blacksky");Xe("blacksky","Black Sky","Intelligence",3,"sensors","All of your fleets fly unseen.",{stealth:1},"deepcover");Xe("posts","Listening Posts","Intelligence",4,"deepcover","All nodes see 25% further still.",{fov:.25});Xe("sabotage","Sabotage Cells","Intelligence",5,"posts","Every attack destroys 2 defending Drones before the battle.",{strike:2},"ciphers");Xe("ciphers","Broken Ciphers","Intelligence",5,"posts","Coalition mobilization is 20% slower.",{mobSlow:.2},"sabotage");Xe("panopticon","Panopticon","Intelligence",6,"sabotage","All nodes and fleets see 50% further; every attack destroys 1 more defender first.",{fov:.5,strike:1});Xe("academy","Officer Academy","Command",1,void 0,"Specialists cost half upkeep.",{specUpkeep:.5});Xe("protocols","Command Protocols","Command",2,"academy","Commander gains 50% more experience; rescue window +45 s.",{xp:.5,rescue:45});Xe("integration","Command Integration","Command",3,"protocols","Nodes and fleets hold one more specialist.",{slots:1},"scouts");Xe("scouts","Talent Scouts","Command",3,"protocols","Every recruitment offers one more specialist.",{offer:1},"integration");Xe("college","War College","Command",4,"integration","Every specialist has +1 Power.",{powAll:1});Xe("veterancy","Veterancy","Command",5,"college","New recruits arrive already upgraded.",{recruitUp:1},"guard");Xe("guard","Honour Guard","Command",5,"college","+2 defence at every node; rescue window +60 s.",{def:2,rescue:60},"veterancy");Xe("legends","Living Legends","Command",6,"veterancy","Every specialist has another +1 Power.",{powAll:1});const Un={ferrum:{id:"ferrum",name:"Ferrum Directorate",color:"#c98a3c",warlord:"Overseer Kharn",sig:"ironmonger",desc:"Fortress industry. Slow to attack, expensive to dislodge.",tell:"Shields hold 2 more everywhere; builds Missile Silos and fires before it attacks.",mods:{shield:2},ai:{aggr:.7,expand:150,react:.9,target:"weak",shield:3,planet:"refinery",station:"silo"},techs:["harmonics","mining","depth","automation"],specs:["sentinel","castellan","engineer"]},crimson:{id:"crimson",name:"Crimson Warhost",color:"#d2604a",warlord:"Warlord Ashka",sig:"berserker",desc:"Wave aggression. Thin defences, constant pressure.",tell:"Builds Drones 2 s faster; +1 attack; strikes the nearest target often.",mods:{prodSecs:2,atk:1},ai:{aggr:1.4,expand:110,react:.4,target:"near",shield:1,planet:"foundry",station:"bay"},techs:["drill","engines","siege","veterans"],specs:["foreman","vanguard","tactician"]},lumen:{id:"lumen",name:"Lumen Technocracy",color:"#e3c565",warlord:"Prime Calculator Ione",sig:"lens",desc:"Lance batteries thin every attacking fleet before it lands.",tell:"Lances destroy 2 Drones of every attacking fleet; gains two technologies per stage.",mods:{lance:2},ai:{aggr:.8,expand:170,react:.7,target:"weak",shield:2,planet:"refinery",station:"post"},techs:["sigint","harmonics","drill","engines","siege","mining","veterans","sensors"],specs:["scientist","sentinel","scout"]},veil:{id:"veil",name:"Veil Syndicate",color:"#9a7cc4",warlord:"The Whisper",sig:"phantom",desc:"Unseen fleets that hunt your specialists.",tell:"Fleets are invisible until inside full-intelligence range; targets nodes holding specialists.",mods:{stealth:1,speed:.1},ai:{aggr:1,expand:160,react:.6,target:"spec",shield:2,planet:"refinery",station:"bay"},techs:["engines","drill","sigint","veterans"],specs:["saboteur","ghost","pirate"]},drift:{id:"drift",name:"Drift Clans",color:"#6ea6d6",warlord:"Clanmother Sura",sig:"wayfinder",desc:"Fast nomads who swallow neutral space.",tell:"Fleets fly 40% faster; expands into neutral territory twice as often.",mods:{speed:.4},ai:{aggr:1.1,expand:70,react:.8,target:"near",shield:1,planet:"foundry",station:"post"},techs:["engines","sensors","drill","mining"],specs:["admiral","navigator","warden"]}},ls={anvil:{id:"anvil",name:"Archon Vael",title:"the Anvil",desc:"Citadel Aegis layers are 50% stronger and its Drones are built 2 s faster.",mods:{aegisPct:.5,prodSecs:2},pmods:{}},tide:{id:"tide",name:"Archon Seraph",title:"the Tide",desc:"Every Coalition offensive commits more of its Drones.",mods:{offBig:.3},pmods:{}},silence:{id:"silence",name:"Archon Null",title:"the Silence",desc:"Your specialists' charged effects recharge 50% slower. Coalition fleets fly unseen.",mods:{stealth:1},pmods:{cdSlow:.5}}},Fn={},bn=(n,e,t,i,s)=>Fn[n]={id:n,name:e,on:t,text:i,choices:s};bn("lab","Abandoned Research Facility","station","Sealed laboratories, still powered. The archive doors are marked with a hazard glyph nobody recognises.",[{label:"Restore the facility",desc:"Choose a technology now.",ult:25,fx:[["tech"]]},{label:"Salvage it",desc:"Gain 35 Ultanium.",fx:[["ult",35]]},{label:"Open the restricted archive",desc:"Choose an uncommon relic. Automata attack this node with 6 Drones in 40 s.",fx:[["relic","uncommon"],["ambush",6]]},{label:"Let the Scientist decode it",desc:"Choose a technology and a common relic.",req:"scientist",fx:[["tech"],["relic","common"]]}]);bn("fortress","Ancient Fortress","any","The guns are silent but the targeting grid still tracks your fleet.",[{label:"Reactivate the defences",desc:"Hold this node for 90 s with 4 Drones to raise its shield a level and choose an uncommon relic.",fx:[["hold",90,4,[["shield"],["relic","uncommon"]]]]},{label:"Strip the armoury",desc:"Gain 4 Drones here.",fx:[["drones",4]]},{label:"Engineer bypass",desc:"Raise the shield a level and choose a common relic at once.",req:"engineer",fx:[["shield"],["relic","common"]]}]);bn("stranded","Stranded Specialists","any","A crippled lifeboat hails you. Its passengers are willing to work for passage.",[{label:"Take one aboard",desc:"Choose one of three specialists.",fx:[["spec"]]},{label:"Sell them the fuel",desc:"Gain 30 Ultanium.",fx:[["ult",30]]}]);bn("energy","Unstable Energy Source","planet","The crust hums. Readings climb while you watch.",[{label:"Stabilise it",desc:"Hold for 75 s with 3 Drones to choose a rare relic.",ult:20,fx:[["hold",75,3,[["relic","rare"]]]]},{label:"Tap it now",desc:"Gain 50 Ultanium; lose 2 Drones here.",drones:2,fx:[["ult",50]]},{label:"Walk away",desc:"Nothing happens.",fx:[]}]);bn("derelict","Derelict Fleet","station","Dozens of hulls drift in formation. Some of them are warm.",[{label:"Tow the hulls home",desc:"Gain 40 Ultanium.",fx:[["ult",40]]},{label:"Wake the crews",desc:"Gain 6 Drones here. Automata attack with 5 Drones in 40 s.",fx:[["drones",6],["ambush",5]]},{label:"Reclaimer strips everything",desc:"Gain 4 Drones and 40 Ultanium.",req:"reclaimer",fx:[["drones",4],["ult",40]]}]);bn("settlement","Independent Settlement","planet","Farmers, mostly. They have seen the Coalition's recruiters and they do not like them.",[{label:"Trade",desc:"Gain 25 Ultanium.",fx:[["ult",25]]},{label:"Arm them",desc:"Gain 4 Drones here.",ult:10,fx:[["drones",4]]},{label:"Sign a charter",desc:"Choose a common relic.",ult:20,fx:[["relic","common"]]},{label:"Diplomat brokers an alliance",desc:"Gain 4 Drones and choose a common relic.",req:"diplomat",fx:[["drones",4],["relic","common"]]}]);bn("expedition","Lost Research Expedition","any","Their last transmission repeats every forty seconds. It ends mid-word.",[{label:"Rescue the team",desc:"Choose one of three specialists.",drones:2,fx:[["spec"]]},{label:"Recover the data",desc:"Commander gains 8 experience.",fx:[["xp",8]]},{label:"Follow the signal",desc:"Choose a rare relic. Automata attack with 8 Drones in 40 s.",fx:[["relic","rare"],["ambush",8]]}]);bn("platform","Automated Weapons Platform","station","It has been guarding nothing for three hundred years, and it is very good at it.",[{label:"Capture it",desc:"Raise this node's shield a level.",fx:[["shield"]]},{label:"Reprogram it",desc:"+4 defence here for 5 minutes and a common relic.",ult:15,fx:[["buff","def",4,300],["relic","common"]]},{label:"Scrap it",desc:"Gain 28 Ultanium.",fx:[["ult",28]]}]);bn("beacon","Ancient Navigation Beacon","any","One pulse per minute, aimed at a point deep inside Coalition space.",[{label:"Decode it",desc:"Reveal every node within 220 units.",fx:[["reveal",220]]},{label:"Overload it",desc:"Set Coalition mobilization back by a third of a stage.",ult:20,fx:[["mobil",-.33]]},{label:"Scout triangulates",desc:"Reveal the whole map.",req:"scout",fx:[["reveal",2e3]]}]);bn("forge","The Ancient Forge","planet","A foundry the size of a continent, cold for an age. The ignition sequence is still on the console.",[{label:"Restore the Forge",desc:"Hold for 120 s with 5 Drones to choose a rare relic and gain 5 Drones.",ult:30,fx:[["hold",120,5,[["relic","rare"],["drones",5]]]]},{label:"Melt it down",desc:"Gain 45 Ultanium.",fx:[["ult",45]]}]);bn("vault","Sealed Vault","any","Three locks. Your crew can force one of them.",[{label:"The armoury",desc:"Choose an uncommon relic.",drones:2,fx:[["relic","uncommon"]]},{label:"The treasury",desc:"Gain 40 Ultanium.",fx:[["ult",40]]},{label:"The war room",desc:"Commander gains 10 experience.",fx:[["xp",10]]}]);bn("deserters","Coalition Deserters","any","A squadron in Coalition colours powers down its weapons and asks for terms.",[{label:"Enlist them",desc:"Gain 5 Drones here. Mobilization advances 15% of a stage.",fx:[["drones",5],["mobil",.15]]},{label:"Debrief them",desc:"Reveal every node within 200 units and set mobilization back 10%.",fx:[["reveal",200],["mobil",-.1]]},{label:"Inquisitor takes their officers",desc:"Choose one of three specialists.",req:"inquisitor",fx:[["spec"]]}]);const $=1;function Bt(n,e,t=1){if(e)for(const i in e)n[i]=(n[i]||0)+e[i]*t}const eo={};for(const n of Mu)eo[n.id]=n;const yu=n=>eo[n],jc=new WeakMap;function pt(n,e){let t=jc.get(n);if((!t||t.stamp!==n.modV)&&(t={stamp:n.modV,m:{}},jc.set(n,t)),t.m[e])return t.m[e];const i={},s=n.sides[e];if(s){for(const r of s.relics)Bt(i,yn[r]?.mods);for(const r of s.techs)Bt(i,Pt[r]?.mods);s.kind==="faction"&&Bt(i,Un[s.fac].mods),s.kind==="archon"&&Bt(i,ls[s.fac].mods),s.kind==="player"&&Bt(i,ls[n.sides[n.archon].fac].pmods);for(const r of n.specs){if(r.owner!==e||r.held)continue;const a=nt[r.def];if(Bt(i,a.glob),r.up&&Bt(i,a.up.glob),r.cmd){Bt(i,qi[r.cmd.arch].glob);for(const o of r.cmd.perks)Bt(i,eo[o]?.glob)}}}return t.m[e]=i,i}function Ws(n,e){const t=nt[e.def];let i=e.cmd?Sh+(e.cmd.lvl>=3?1:0)+(e.cmd.lvl>=5?1:0):t.pow+(e.up&&t.up.pow||0);return i+=pt(n,e.owner).powAll||0,i}const tc=(n,e)=>e.cmd?0:Ws(n,e)*ne.upkeepPower*(1-Math.min(.75,pt(n,e.owner).specUpkeep||0));function Pa(n,e){const t={},i=nt[e.def];if(Bt(t,i.loc),e.up&&Bt(t,i.up.loc),e.cmd){Bt(t,qi[e.cmd.arch].loc);for(const s of e.cmd.perks)Bt(t,eo[s]?.loc);pt(n,e.owner).cmdDouble&&Bt(t,t)}return t}function nc(n,e){const t=nt[e.def];return t.charge?(e.up&&t.up.cd?t.up.cd:t.charge.cd)*(1+(pt(n,e.owner).cdSlow||0)):0}function ic(n,e,t){return e.map(i=>n.specs[i]).filter(i=>i&&!i.held&&nt[i.def].charge?.on===t&&i.cd<=n.t)}function er(n,e,t,i,s){const r={};Bt(r,pt(n,e));let a=!1,o=null;for(const l of t){const c=n.specs[l];!c||c.owner!==e||c.held||(c.def==="echo"?a=!0:!o&&!c.cmd&&(o=c),Bt(r,Pa(n,c)))}a&&o&&Bt(r,Pa(n,o));for(const l of i)l.until>n.t&&(r[l.k]=(r[l.k]||0)+l.v);if(s)for(const l of ic(n,t,s))Bt(r,nt[l.def].charge.mods);return r}function $t(n){n.rng=n.rng+1831565813|0;let e=n.rng;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}const _a=(n,e,t)=>e+Math.floor($t(n)*(t-e+1)),fn=(n,e,t)=>e+$t(n)*(t-e),zr=(n,e)=>e[Math.floor($t(n)*e.length)];function va(n,e){const t=e.slice();for(let i=t.length-1;i>0;i--){const s=Math.floor($t(n)*(i+1));[t[i],t[s]]=[t[s],t[i]]}return t}function ki(n,e,t){return va(n,e).slice(0,t)}const We=(n,e)=>Math.hypot(n.x-e.x,n.y-e.y),to=(n,e)=>n.fleets.find(t=>t.id===e);function et(n,e,t="info",i=-1){n.log.push({t:n.t,msg:e,kind:t,node:i}),n.log.length>150&&n.log.shift()}function vi(n,e){const t=n.sides[e];return t?t.kind==="player"?"You":t.kind==="faction"?Un[t.fac].name:ls[t.fac].name:e===0?"Neutral":"Automata"}function Yn(n,e){const t=n.sides[e];return t?t.kind==="player"?"#6cc5a0":t.kind==="faction"?Un[t.fac].color:"#e07aa0":"#9aa3ad"}function Bi(n,e,t,i){const s={id:n.specs.length,def:e,owner:t,node:i,fleet:-1,held:0,cd:0,up:!1,cmd:null};return n.specs.push(s),n.nodes[i].specs.push(s.id),n.modV++,s}function sc(n,e){if(e.node>=0){const t=n.nodes[e.node];t.specs=t.specs.filter(i=>i!==e.id),t.prisoners=t.prisoners.filter(i=>i!==e.id)}if(e.fleet>=0){const t=to(n,e.fleet);t&&(t.specs=t.specs.filter(i=>i!==e.id))}e.node=-1,e.fleet=-1}function zi(n,e,t,i=0){sc(n,e),e.node=t.id,e.held=i,(i?t.prisoners:t.specs).push(e.id),n.modV++}function bu(n,e,t){sc(n,e),e.fleet=t.id,t.specs.push(e.id),n.modV++}function Pr(n,e){sc(n,e),e.owner=-1,e.held=0,n.modV++}const Mh=(n,e)=>ne.specSlots+(pt(n,e).slots||0),yh=(n,e)=>Mh(n,e.owner)+(e.spec==="post"?1:0),ps=(n,e)=>e.specs.slice(0,yh(n,e)),ri=n=>n.name||nt[n.def].name,En=(n,e,t)=>er(n,e.owner,ps(n,e),e.buffs,t);function bh(n,e){if(e.node<0||e.held)return"Not stationed at a node";const t=n.nodes[e.node];return t.specs=[e.id,...t.specs.filter(i=>i!==e.id)],n.modV++,null}function no(n,e){const t=n.nodes.filter(i=>i.owner===e);return t.length?t.find(i=>i.home||i.capital||i.citadel)||t.find(i=>i.kind==="station")||t[0]:null}function Eh(n,e){let t=0;for(const i of n.nodes)i.owner===e&&(t+=i.drones);for(const i of n.fleets)i.owner===e&&(t+=i.drones);return t}function el(n,e){return e.kind!=="planet"||pt(n,e.owner).noOps?0:e.lv+(e.spec==="lab"?ne.labWorkers:0)}function Eu(n,e,t){if(e.kind!=="planet"||!n.sides[e.owner])return 0;const i=t||En(n,e),s=i.noOps?e.lv:Math.min(e.lv,e.drones);return ne.mineOut[s]*ne.sizeMult[e.size]*(e.spec==="refinery"?ne.refineryMult:1)+(i.inc||0)}const $s=(n,e)=>e.spec==="lab"&&(!!pt(n,e.owner).noOps||e.drones>=e.lv+ne.labWorkers);function wu(n,e){const t=n.sides[e],i=pt(n,e);let s=(t.kind==="player"?ne.baseIncome:4)+(i.income||0),r=0,a=(i.freeDrones||0)+t.free+(t.kind==="player"?ne.freeBase:0),o=i.rp||0;for(const f of n.nodes){if(f.owner!==e)continue;const u=En(n,f);s+=Eu(n,f,u),r+=f.drones,a+=u.free||0,$s(n,f)&&(o+=ne.labRp),o+=u.research||0}for(const f of n.fleets)f.owner===e&&(r+=f.drones);let l=0;for(const f of n.specs)f.owner===e&&!f.held?f.node>=0&&n.nodes[f.node].spec==="post"&&n.nodes[f.node].owner===e||(l+=tc(n,f)):f.held===e&&i.prisonInc&&(s+=i.prisonInc);const d=Math.max(0,r-a)*ne.upkeepDrone+l;return{inc:s,upk:d,net:s-d,drones:r,free:a,rpm:o,specUp:l}}function io(n,e){const t=1+(En(n,e).fov||0),i=e.kind==="planet"?ne.fovInner.planet[e.size]:ne.fovInner.station,s=e.kind==="planet"?ne.fovOuter.planet[e.size]:ne.fovOuter.station;return[i*t,s*t]}const Lr=(n,e,t)=>er(n,e.owner,e.specs,[],t);function rc(n,e){const t=1+(Lr(n,e).fov||0);return[ne.fleetFov[0]*t,ne.fleetFov[1]*t]}function ms(n){const e=n.nodes.filter(t=>t.owner===$).map(t=>({n:t,r:io(n,t)}));for(const t of n.fleets)t.owner===$&&!t.lane&&!t.missile&&e.push({n:t,r:rc(n,t)});for(const t of n.nodes){let i=0;if(t.owner===$)i=2;else{for(const r of e){const a=We(t,r.n);if(a<=r.r[0]){i=2;break}a<=r.r[1]&&(i=1)}i<2&&t.buffs.some(r=>r.k==="scan"&&r.until>n.t)&&(i=2)}n.vis[t.id]=i;const s=n.intel[t.id];i>s.seen&&(s.seen=i),i===2&&(s.t=n.t,s.snap={owner:t.owner,drones:t.drones,shields:t.shields,lv:t.lv,sh:t.sh,spec:t.spec,missile:t.missile,specs:t.specs.slice(),prisoners:t.prisoners.slice(),buffs:t.buffs.slice()})}}function Dr(n,e){if(e.owner===$)return 2;const t=!e.missile&&((Lr(n,e).stealth||0)>0||e.owner>1&&(pt(n,n.archon).stealth||0)>0);let i=0;const s=(r,a)=>{const o=We(e,r);o<=a[0]?i=2:o<=a[1]&&!t&&(i=Math.max(i,1))};for(const r of n.nodes)r.owner===$&&s(r,io(n,r));for(const r of n.fleets)r.owner===$&&!r.lane&&!r.missile&&s(r,rc(n,r));return i===1&&(pt(n,$).sigint||0)>0?2:i}function so(n,e){if(e.owner===$||n.vis[e.id]===2)return{live:!0,age:0,v:e};const t=n.intel[e.id];return t.snap?{live:!1,age:n.t-t.t,v:{...e,...t.snap}}:{live:!1,age:0,v:null}}const ro=(n,e)=>e.owner===$||n.vis[e.id]>=1;function ac(n,e,t){const i=t||En(n,e);return Math.max(0,e.sh*ne.shieldPerLv+(i.shield||0))}function La(n,e){if(!e.citadel)return 0;const t=n.factions.filter(i=>!n.sides[i].broken).length;return Math.round(t*ne.aegisPerLayer*(1+(pt(n,n.archon).aegisPct||0)))}const Mr=(n,e)=>(e.kind==="station"?ne.slotsStation:ne.slotsPlanet)+(pt(n,e.owner).slotAdd||0),Tu=(n,e)=>n.fleets.filter(t=>t.slot&&t.home===e.id&&t.owner===e.owner).length,ti=(n,e)=>Math.max(0,Mr(n,e)-Tu(n,e)),yr=(n,e)=>ne.crew+(pt(n,e.owner).slots||0)+(e.spec==="bay"?ne.bayCrew:0);function ao(n,e,t){const i=t==="lv"?ne.lvCost[e.lv+1]:t==="sh"?ne.shCost[e.sh+1]:t==="spec"?ne.specCost:ne.missileCost;return t==="missile"?i:Math.max(5,i-(En(n,e).upgCost||0))}const wh=n=>n==="lv"?ne.lvTime:n==="sh"?ne.shTime:n==="spec"?ne.specTime:ne.missileTime;function Di(n,e,t,i=""){const s=n.sides[e.owner];if(!s)return"Not yours";if(e.task)return"Already upgrading";if(t==="lv"&&e.lv>=3||t==="sh"&&e.sh>=3)return"Maximum level";if(t==="spec"){if(e.spec)return"Specialty already chosen";if(!Pn[i]||Pn[i].on!==e.kind)return"Not available here"}if(t==="missile"){if(e.spec!=="silo")return"Needs a Missile Silo";if(e.missile>=1)return"A missile is ready"}return s.ult<ao(n,e,t)?"Not enough Ultanium":null}function ur(n,e,t,i=""){const s=Di(n,e,t,i);if(s)return s;const r=ao(n,e,t),a=wh(t);return n.sides[e.owner].ult-=r,e.task={kind:t,id:i,left:a,total:a,cost:r},null}function Th(n,e){e.task&&(n.sides[e.owner].ult+=e.task.cost,e.task=null)}function Ah(n,e,t){const i=e.owner===$;if(t.kind==="lv")e.lv++,i&&et(n,`${e.name}: ${e.kind==="planet"?"Mine":"Barracks"} level ${e.lv}`,"info",e.id);else if(t.kind==="sh")e.sh++,i&&et(n,`${e.name}: Shield level ${e.sh}`,"info",e.id);else if(t.kind==="spec")e.spec=t.id,i&&et(n,`${e.name} is now a ${Pn[t.id].name}`,"info",e.id);else if(t.kind==="missile")e.missile=1,i&&et(n,`Missile ready at ${e.name}`,"good",e.id);else{const s=n.nodes[+t.id];s.owner===e.owner&&!oc(n,e.id,s.id)?(n.corridors.push({a:e.id,b:s.id,owner:e.owner}),i&&et(n,`Corridor open: ${e.name} to ${s.name}`,"good",e.id)):n.sides[e.owner].ult+=t.cost}n.modV++}const Da=(n,e)=>n.corridors.filter(t=>t.a===e||t.b===e),oc=(n,e,t)=>n.corridors.find(i=>i.a===e&&i.b===t||i.a===t&&i.b===e),Au=n=>ne.corridorMax+(pt(n,$).corridorMax||0),Ia=n=>Math.round(ne.corridorCost*(1-Math.min(.75,pt(n,$).corridorCost||0)));function Na(n,e,t){if(e===t)return null;const i=n.nodes[e].owner,s=new Map([[e,-1]]),r=[e];for(;r.length;){const o=r.shift();if(o===t)break;for(const l of Da(n,o)){const c=l.a===o?l.b:l.a;!s.has(c)&&n.nodes[c].owner===i&&(s.set(c,o),r.push(c))}}if(!s.has(t))return null;const a=[];for(let o=t;o!==e;o=s.get(o))a.unshift(o);return a}const Rh=(n,e)=>n.nodes.filter(t=>t.task&&t.task.kind==="corridor"&&(t.id===e||+t.task.id===e)).length;function Ru(n,e,t){if(e.id===t.id)return"Pick a different node";if(e.owner!==$||t.owner!==$)return"Both ends must be your nodes";if(We(e,t)>ne.corridorRange)return"Too far";if(oc(n,e.id,t.id)||e.task?.kind==="corridor"&&+e.task.id===t.id||t.task?.kind==="corridor"&&+t.task.id===e.id)return"Already linked or being built";const i=Au(n);for(const s of[e,t])if(Da(n,s.id).length+Rh(n,s.id)>=i)return`${s.name} already has ${i} corridors`;return e.task?`${e.name} is busy upgrading`:n.sides[$].ult<Ia(n)?"Not enough Ultanium":null}function Ch(n,e,t){const i=Ru(n,e,t);if(i)return i;const s=Ia(n);n.sides[$].ult-=s;const r=ne.corridorTime/(1+(En(n,e).build||0));return e.task={kind:"corridor",id:String(t.id),left:r,total:r,cost:s},null}function cs(n,e,t,i,s,r){const a=r||er(n,e,i,[],"attack"),o=n.sides[s.owner]?En(n,s,"defend"):{},l=Math.min(t,o.lance||0),c=t-l,d=Math.min(s.drones,a.strike||0),f=s.drones-d,u=i.reduce((w,_)=>w+Ws(n,n.specs[_]),0),g=(a.atk||0)+Math.min(a.per4||0,Math.floor(c/4))+(s.owner===0&&a.vsNeutral||0),v=c+u+g,p=Math.max(0,Math.floor(s.shields)-(a.pierce||0)),m=n.sides[s.owner]?ps(n,s).reduce((w,_)=>w+(n.specs[_].held?0:Ws(n,n.specs[_])),0):0,h=o.def||0,x=La(n,s),E=f+p+m+h+x,b=c>0&&(v>E||v===E&&(a.ties||0)>0),A=b?Math.max(0,Math.min(c,v-E+(a.surv||0))-(o.martyr||0)):0;return{sent:t,atk:v,def:E,win:b,surv:A,parts:{drones:c,pow:u,bonus:g,lance:l,strike:d,garr:f,shield:p,dpow:m,ddef:h,aegis:x}}}function ed(n,e,t){for(const i of ic(n,e,t))i.cd=n.t+nc(n,i)}function Cu(n,e,t,i){const s=ic(n,e,"fall")[0];for(const r of e.slice()){const a=n.specs[r];if(a.def==="captain"){i===$?zi(n,a,t,$):Pr(n,a);continue}if(s){const o=no(n,a.owner);if(o&&o.id!==t.id){zi(n,a,o);continue}}zi(n,a,t,i||-1),a.owner===$&&(n.stats.specsLost++,et(n,`${ri(a)} was captured at ${t.name}`,"bad",t.id))}s&&(s.cd=n.t+nc(n,s),s.owner===$&&et(n,`The Medic got your specialists out of ${t.name}`,"good",t.id))}function Ua(n,e){n.fleets=n.fleets.filter(t=>t!==e)}function lc(n,e,t,i){if(e.specs.length)if(t)Cu(n,e.specs,t,i);else for(const s of e.specs.slice()){const r=n.specs[s],a=no(n,r.owner);a&&r.def!=="captain"?zi(n,r,a):Pr(n,r)}Ua(n,e)}function Pu(n,e,t,i){const s=e.owner;n.corridors.some(r=>r.a===e.id||r.b===e.id)&&(n.corridors=n.corridors.filter(r=>r.a!==e.id&&r.b!==e.id),s===$&&et(n,`Corridors to ${e.name} collapsed`,"bad",e.id));for(const r of n.nodes)r.task?.kind==="corridor"&&+r.task.id===e.id&&(n.sides[r.owner]&&(n.sides[r.owner].ult+=r.task.cost),r.task=null);s!==0&&Cu(n,e.specs,e,t);for(const r of e.prisoners.slice()){const a=n.specs[r];a.owner===t?(zi(n,a,e),t===$&&et(n,`${ri(a)} was rescued at ${e.name}`,"good",e.id)):a.held=t||-1}e.owner=t,e.drones=i,e.shields=0,e.task=null,e.prod=0,e.hold=null,e.buffs=[],e.front=!1,e.floor=0,e.missile=0,t!==$&&(e.offer=!1),n.modV++}function Lu(n,e){e.offer&&(e.offer=!1,mc(n,e.id)),e.event&&n.pending.push({kind:"event",node:e.id,opts:[],title:Fn[e.event].name,event:e.event})}function Ph(n,e,t){const i=n.sides[e],s=Un[i.fac];i.broken=!0,n.mob.stage=Math.max(1,n.mob.stage-1),n.mob.prog=0,n.offs=n.offs.filter(o=>o.owner!==e);for(const o of n.fleets.filter(l=>l.owner===e))lc(n,o,null,0);let r=0;for(const o of n.nodes)o.owner===e&&(Pu(n,o,$,Math.ceil(o.drones/3)),Lu(n,o),r++);et(n,`${s.warlord} is your prisoner. The ${s.name} surrenders ${r} node${r===1?"":"s"} and a Citadel Aegis layer falls.`,"good",t.id);const a=Bi(n,s.sig,$,t.id);et(n,`${ri(a)} joins you from the ${s.name}.`,"good",t.id),Fu(n,"rare",t.id),pc(n,10),n.stats.warlords++}function Lh(n,e,t,i,s){const r=e.owner,a=t.owner,o=n.sides[a];s.salvage&&o&&(o.ult+=Math.round(s.salvage*e.drones));const l=e.capital&&n.sides[r]?.kind==="faction"&&!n.sides[r].broken;Pu(n,e,a,i.surv);const c=t.specs.slice(),d=c.length?n.specs[c[0]]:null;for(const f of c){const u=n.specs[f];u.def==="captain"?Pr(n,u):zi(n,u,e)}if(Ua(n,t),o){const f=pt(n,a);f.refund&&n.t>=o.refundT&&(e.drones+=i.sent-i.surv,o.refundT=n.t+f.refund,a===$&&et(n,"Phoenix Clause refunds your losses","good",e.id)),f.capShield&&(e.shields=f.capShield),f.capUlt&&(o.ult+=f.capUlt)}a===$?(n.stats.captures++,n.stats.dronesLost+=i.sent-i.surv,et(n,`Captured ${e.name} with ${i.surv} Drones left`,"good",e.id),d&&!d.cmd&&!d.up&&d.owner===$&&(d.up=!0,n.modV++,et(n,`${ri(d)} led the attack and is upgraded: ${nt[d.def].up.text}`,"good",e.id)),pc(n,c.includes(n.cmdSpec)?4:2),n.sides[r]&&(n.mob.prog=Math.max(0,n.mob.prog-ne.captureSetback)),l&&Ph(n,r,e),Lu(n,e),e.citadel&&(n.result="win",n.resultWhy=`${ls[n.sides[n.archon].fac].name} is your prisoner. The Coalition is finished.`)):r===$&&(n.stats.nodesLost++,et(n,`${e.name} fell to ${vi(n,a)}`,"bad",e.id)),ms(n)}function Dh(n,e,t,i,s){const r=i.parts;e.drones=r.garr;let a=i.atk;const o=Math.min(e.shields,Math.max(0,a-0));if(e.shields-=Math.min(o,a),a-=r.shield,a-=r.dpow+r.ddef+r.aegis,e.drones-=Math.max(0,Math.min(e.drones,a)),t.owner===$&&(et(n,`Attack on ${e.name} failed: ${i.atk} against ${i.def}`,"bad",e.id),n.stats.dronesLost+=t.drones),e.owner===$&&et(n,`${e.name} held against ${vi(n,t.owner)} (${i.atk} against ${i.def})`,"good",e.id),t.drones=0,e.owner===0&&n.sides[t.owner]){const l=n.nodes[t.from],c=l&&l.owner===t.owner?l:no(n,t.owner);if(c){t.to=c.id,t.from=e.id,t.back=!0,t.x=e.x,t.y=e.y;return}}lc(n,t,n.sides[e.owner]?e:null,e.owner)}function Ih(n,e){const t=n.nodes[e.to];if(e.x=t.x,e.y=t.y,e.missile){t.owner!==e.owner&&(t.shields=0,t.drones=Math.max(0,t.drones-ne.missileKill),t.buffs.push({k:"noRegen",v:1,until:n.t+20}),(e.owner===$||t.owner===$)&&et(n,`Missile strike on ${t.name}: shields down, ${ne.missileKill} Drones destroyed`,t.owner===$?"bad":"good",t.id)),Ua(n,e);return}if(e.lane&&t.owner===e.owner&&e.path&&e.path.length){const r=e.path[0];if(oc(n,t.id,r)&&n.nodes[r].owner===e.owner){e.path.shift(),e.from=t.id,e.to=r;return}}if(t.owner===e.owner){t.drones+=e.drones;for(const r of e.specs.slice()){const a=n.specs[r];a.def==="captain"?Pr(n,a):zi(n,a,t)}Ua(n,e);return}if(e.probe||e.drones<=0){e.owner===$&&e.probe&&(t.buffs.push({k:"scan",v:1,until:n.t+30}),ms(n),et(n,`Probe identified ${t.name}`,"info",t.id)),lc(n,e,n.sides[t.owner]?t:null,t.owner);return}const i=Lr(n,e,"attack"),s=cs(n,e.owner,e.drones,e.specs,t,i);ed(n,e.specs,"attack"),ed(n,ps(n,t),"defend"),e.owner===$&&n.stats.battles++,s.win?Lh(n,t,e,s,i):Dh(n,t,e,s)}function Du(n,e){if(e.missile)return ne.fleetSpeed*ne.missileSpeed;const t=Lr(n,e);return ne.fleetSpeed*(e.lane?ne.corridorSpeed*(1+(t.laneSpeed||0)):1)*Math.max(.3,1+(t.speed||0)+(e.speedUp||0))}const cc=(n,e,t)=>We(e,t)/Du(n,e);function dc(n,e,t,i){const s={id:n.nextId++,owner:e,home:t.id,slot:!1,from:t.id,to:i,x:t.x,y:t.y,drones:0,specs:[]};return n.fleets.push(s),s}function uc(n,e,t){const i=er(n,e.owner,t,[]),s=En(n,e);return ne.fleetSpeed*Math.max(.3,1+(i.speed||0)+(s.launchSpeed||0)+(e.spec==="bay"?ne.baySpeed:0))}function Vi(n,e,t,i,s){const r=e.owner;if(!n.sides[r])return"Not your node";if(t.id===e.id)return"Already here";if(r===$&&!ro(n,t))return"Target is not in detection range";if(s=s.filter(f=>e.specs.includes(f)),s.length>yr(n,e))return`A fleet carries at most ${yr(n,e)} specialists`;i=Math.max(0,Math.min(e.drones,Math.floor(i)));const a=t.owner!==r,o=a&&!s.length;if(o&&i>0)return"An attack needs a specialist to lead it. Without one, send 0 Drones as a probe.";if(a&&!o&&i<1)return"An attack needs at least 1 Drone";if(!a&&!i&&!s.length)return"Nothing to send";const c=!er(n,r,s,[]).slotFree;if(c&&ti(n,e)<1)return"No free launch slot here";const d=dc(n,r,e,t.id);d.slot=c,d.drones=i,d.probe=o,e.drones-=i,d.speedUp=(En(n,e).launchSpeed||0)+(e.spec==="bay"?ne.baySpeed:0);for(const f of s)bu(n,n.specs[f],d);return null}function oo(n,e,t,i,s){if(e.owner!==t.owner)return"Both ends must be yours";const r=Na(n,e.id,t.id);if(!r)return"No corridor route to that node";if(i=Math.max(0,Math.min(e.drones,Math.floor(i))),s=s.filter(o=>e.specs.includes(o)),!i&&!s.length)return"Nothing to send";const a=dc(n,e.owner,e,r[0]);a.lane=!0,a.path=r.slice(1),a.drones=i,e.drones-=i;for(const o of s)bu(n,n.specs[o],a);return null}function Iu(n,e,t){const i=Na(n,e.id,t.id);if(!i)return-1;let s=0,r=e;for(const a of i)s+=We(r,n.nodes[a]),r=n.nodes[a];return s/(ne.fleetSpeed*ne.corridorSpeed*(1+(pt(n,e.owner).laneSpeed||0)))}function lo(n,e,t,i=[]){const s=Iu(n,e,t),a=ti(n,e)>0||!!er(n,e.owner,i,[]).slotFree?We(e,t)/uc(n,e,i):-1;return s>=0&&(a<0||s<=a)?{secs:s,via:"corridor"}:a>=0?{secs:a,via:"fleet"}:{secs:0,via:null}}function fc(n,e,t){if(e.held)return{secs:0,via:null,why:"They are a prisoner"};if(e.node<0)return{secs:0,via:null,why:"Already travelling"};const i=n.nodes[e.node];if(t.owner!==e.owner)return{secs:0,via:null,why:"Only your own nodes"};if(t.id===i.id)return{secs:0,via:null,why:"Already there"};const s=lo(n,i,t,[e.id]);return s.via?{...s,why:""}:{secs:0,via:null,why:`No free launch slot at ${i.name} and no corridor route`}}function Nh(n,e,t){const i=fc(n,e,t);if(!i.via)return i.why;const s=n.nodes[e.node];return i.via==="corridor"?oo(n,s,t,0,[e.id]):Vi(n,s,t,0,[e.id])}function co(n,e,t){return e.spec!=="silo"||e.missile<1?"No missile ready":t.owner===e.owner?"Pick a node you do not own":We(e,t)>ne.missileRange?"Out of range":e.owner===$&&n.vis[t.id]<1?"Target is not in detection range":null}function Nu(n,e,t){const i=co(n,e,t);if(i)return i;e.missile=0;const s=dc(n,e.owner,e,t.id);return s.missile=!0,null}const Wi=(n,e)=>Math.max(e.floor,el(n,e));function hc(n,e){let t=-1;for(const i of n.fleets)if(i.to===e.id&&i.owner!==e.owner&&!i.missile&&i.drones>0&&Dr(n,i)){const s=cc(n,i,e);(t<0||s<t)&&(t=s)}return t}function Uh(n,e){let t=-1,i=1e9;for(const s of n.nodes){if(s.owner!==e.owner||!s.front)continue;const r=Iu(n,e,s),a=r>=0?Math.min(r,We(e,s)/ne.fleetSpeed):We(e,s)/ne.fleetSpeed;a<i&&(i=a,t=s.id)}return t}function Uu(n,e){const t=hc(n,e),i=[];for(const s of n.nodes){if(s.owner!==e.owner||s.id===e.id||s.front)continue;const r=s.drones-Wi(n,s);if(r<1)continue;const a=lo(n,s,e);if(a.via){if(t>=0){if(a.secs>=t)continue}else if(e.front&&Uh(n,s)!==e.id)continue;i.push({src:s,k:r,lane:a.via==="corridor",secs:a.secs})}}return i}function Fh(n,e){e.front=!0;const t=Uu(n,e);if(!t.length)return hc(n,e)>=0?"No supply node can get Drones here in time":"No supply node has Drones to spare";for(const i of t)i.lane?oo(n,i.src,e,i.k,[]):Vi(n,i.src,e,i.k,[]);return null}function Oh(n){for(const e of n.nodes){if(e.owner!==$)continue;const t=Wi(n,e)-e.drones-n.fleets.filter(s=>s.owner===$&&(s.to===e.id||s.path?.includes(e.id))).reduce((s,r)=>s+r.drones,0);if(t<=0)continue;const i=n.nodes.filter(s=>s.owner===$&&s.id!==e.id&&s.drones-Wi(n,s)>=t&&(Na(n,s.id,e.id)||ti(n,s)>0)).sort((s,r)=>We(s,e)-We(r,e))[0];i&&(Na(n,i.id,e.id)?oo(n,i,e,t,[]):Vi(n,i,e,t,[]))}}function pc(n,e){const t=n.specs[n.cmdSpec];if(!(!t||!t.cmd))for(t.cmd.xp+=e*(1+(pt(n,$).xp||0));t.cmd.lvl<5&&t.cmd.xp>=ne.xpLevels[t.cmd.lvl];){t.cmd.lvl++,n.modV++;const i=ki(n,Mu.filter(s=>!t.cmd.perks.includes(s.id)),3).map(s=>s.id);n.pending.push({kind:"perk",node:-1,opts:i,title:`Commander reached level ${t.cmd.lvl}`}),et(n,`Your Commander reached level ${t.cmd.lvl}`,"good")}}function mc(n,e){const t=new Set(n.specs.filter(s=>s.owner===$).map(s=>s.def)),i=ki(n,vh.filter(s=>!t.has(s)),3+(pt(n,$).offer||0));if(!i.length){n.sides[$].ult+=20;return}n.pending.push({kind:"spec",node:e,opts:i,title:e===n.home&&n.t<1?"Your first recruit":`Recruits at ${n.nodes[e].name}`})}function Fu(n,e,t){const i=n.sides[$].relics,s=o=>Object.values(yn).filter(l=>l.rarity===o&&!i.includes(l.id)).map(l=>l.id),r=e==="rare"?"uncommon":"common";let a=ki(n,s(e),e==="common"?3:2);if(a.length<3&&(a=a.concat(ki(n,s(r).filter(o=>!a.includes(o)),3-a.length))),!a.length){n.sides[$].ult+=30;return}n.pending.push({kind:"relic",node:t,opts:a,title:"Choose a relic"})}function kh(n,e){const t=Pt[e].pre;return t?n.includes(t)||!!Pt[t].excl&&n.includes(Pt[t].excl):!0}function Bh(n,e){const t=n.sides[e].techs;return Object.keys(Pt).filter(i=>!t.includes(i)&&kh(t,i)&&!(Pt[i].excl&&t.includes(Pt[i].excl)))}const Fa=(n,e)=>ne.rpBase+ne.rpStep*n.sides[e].techs.length;function Ou(n){const e=ki(n,Bh(n,$),3);return e.length?(n.pending.push({kind:"tech",node:-1,opts:e,title:"Research complete: choose one"}),!0):!1}function gc(n,e,t){const i=n.sides[e];i.techs.includes(t)||(i.techs.push(t),n.modV++,e===$?(n.stats.techs++,et(n,`Researched ${Pt[t].name}`,"good")):et(n,`${vi(n,e)} fielded ${Pt[t].name}`,"warn"))}function ku(n,e,t){const i=n.sides[$];for(const s of t)switch(s[0]){case"ult":i.ult+=s[1];break;case"drones":e.drones+=s[1];break;case"relic":Fu(n,s[1],e.id);break;case"tech":Ou(n)||(i.ult+=30);break;case"spec":mc(n,e.id);break;case"xp":pc(n,s[1]);break;case"shield":e.sh<3?e.sh++:i.ult+=20;break;case"buff":e.buffs.push({k:s[1],v:s[2],until:n.t+s[3]}),n.modV++;break;case"mobil":n.mob.prog=Math.max(0,Math.min(.99,n.mob.prog+s[1]));break;case"hold":e.hold={until:n.t+s[1],total:s[1],need:s[2],fx:s[3],name:e.event?Fn[e.event].name:"Operation"};break;case"reveal":for(const r of n.nodes)We(r,e)<=s[1]&&r.buffs.push({k:"scan",v:1,until:n.t+45});ms(n);break;case"ambush":{const r=$t(n)*Math.PI*2;n.fleets.push({id:n.nextId++,owner:0,home:-1,slot:!1,from:e.id,to:e.id,x:e.x+Math.cos(r)*48,y:e.y+Math.sin(r)*48,drones:s[1],specs:[],off:!0}),et(n,`Automata are closing on ${e.name} with ${s[1]} Drones`,"warn",e.id);break}}}function Bu(n,e,t){return t.ult&&n.sides[$].ult<t.ult?"Not enough Ultanium":t.drones&&e.drones<t.drones?"Not enough Drones here":t.req&&!e.specs.some(i=>n.specs[i].def===t.req&&n.specs[i].owner===$)?`Needs your ${nt[t.req].name} at this node`:null}function zh(n,e){const t=n.pending[0];if(!t)return"Nothing to choose";const i=n.sides[$];if(t.kind==="event"){const r=n.nodes[t.node],a=Fn[t.event];if(e<0||r.owner!==$||r.event!==t.event)return n.pending.shift(),null;const o=a.choices[e],l=Bu(n,r,o);return l||(o.ult&&(i.ult-=o.ult),o.drones&&(r.drones-=o.drones),n.pending.shift(),ku(n,r,o.fx),r.event=null,n.stats.events++,et(n,`${a.name}: ${o.label}`,"info",r.id),null)}if(t.kind==="spec"&&e<0)return n.pending.shift(),null;const s=t.opts[e];if(s===void 0)return"Pick one";if(n.pending.shift(),t.kind==="draft"){const r=Bi(n,s.base,$,n.home);r.cmd={base:s.base,arch:s.arch,lvl:1,xp:0,perks:[]},r.name="Commander",n.cmdSpec=r.id,mc(n,n.home)}else if(t.kind==="spec"){const r=n.nodes[t.node].owner===$?n.nodes[t.node]:no(n,$);if(r){const a=Bi(n,s,$,r.id);pt(n,$).recruitUp&&(a.up=!0),et(n,`${ri(a)} joined at ${r.name}`,"good",r.id),n.stats.specs++}}else t.kind==="relic"?(i.relics.push(s),n.stats.relics++,et(n,`Relic claimed: ${yn[s].name}`,"good")):t.kind==="perk"?n.specs[n.cmdSpec].cmd.perks.push(s):t.kind==="tech"&&gc(n,$,s);return n.modV++,null}function Gh(n,e,t){if(e.held!==$||e.node<0)return"Not your prisoner";const i=n.sides[$],s=pt(n,$);if(e.def==="warlord"||e.def==="archon")return"Leaders cannot be ransomed or recruited";if(t){if(e.def==="captain")return"Captains cannot be recruited";if(n.specs.some(o=>o.owner===$&&o.def===e.def))return`You already have a ${nt[e.def].name}`;const a=s.recruitFree?0:ne.recruitCost;return i.ult<a?"Not enough Ultanium":(i.ult-=a,e.owner=$,e.cd=0,zi(n,e,n.nodes[e.node]),n.stats.specs++,et(n,`${ri(e)} now works for you`,"good",e.node),null)}return i.ult+=Math.round(ne.ransom*(1+(s.ransom||0))),Pr(n,e),null}const zu=n=>ne.rescueSecs+(pt(n,$).rescue||0),_c=n=>n.upk+ne.upkeepDrone<=n.inc*(n.kind==="player"?ne.armyShare:1),Gu=(n,e,t)=>Math.max(2,ne.prodSecs[e.lv]-((t||En(n,e)).prodSecs||0));function Hh(n){const e=ne.dt;if(n.t+=e,n.tick++,n.tick%10===1)for(const s in n.sides){const r=wu(n,+s),a=n.sides[s];a.inc=r.inc,a.upk=r.upk,a.net=r.net,a.rpm=r.rpm}for(const s of n.nodes){s.buffs.length&&s.buffs.some(l=>l.until<=n.t)&&(s.buffs=s.buffs.filter(l=>l.until>n.t),n.modV++);const r=n.sides[s.owner],a=r?En(n,s):{},o=ac(n,s,a);if(s.shields<o&&!a.noRegen?s.shields=Math.min(o,s.shields+e*(1+(a.regen||0))/ne.shieldRegenSecs):s.shields>o&&!a.capHold&&(s.shields=Math.max(o,s.shields-e/10)),!!r){if(s.task&&(s.task.left-=e*(1+(a.build||0)),s.task.left<=0)){const l=s.task;s.task=null,Ah(n,s,l)}if((s.kind==="station"||s.spec==="foundry")&&r.produce&&_c(r)&&(s.prod+=e,s.prod>=(s.kind==="station"?Gu(n,s,a):ne.foundrySecs)&&(s.prod=0,s.drones++,r.net-=ne.upkeepDrone,r.upk+=ne.upkeepDrone,s.owner===$&&n.stats.dronesMade++)),s.hold&&n.t>=s.hold.until){const l=s.hold;s.hold=null,s.drones>=l.need?(et(n,`${l.name} complete at ${s.name}`,"good",s.id),ku(n,s,l.fx)):et(n,`${l.name} failed at ${s.name}: fewer than ${l.need} Drones on site`,"bad",s.id)}}}for(const s in n.sides){const r=n.sides[s];if(r.ult+=r.net*e/60,r.kind==="player"&&(n.stats.ultMade+=r.inc*e/60,r.rp+=r.rpm*e/60),r.ult<0&&(r.ult=0,r.desertT+=e,r.desertT>=ne.desertSecs)){r.desertT=0;const a=n.nodes.filter(o=>o.owner===+s&&o.drones>0).sort((o,l)=>l.drones-o.drones)[0];a&&(a.drones--,r.net+=ne.upkeepDrone,r.kind==="player"&&n.tick%300<40&&et(n,"You cannot pay your Drones: they are deserting","bad",a.id))}}const t=n.sides[$];if(t.rp>=Fa(n,$)&&!n.pending.some(s=>s.kind==="tech")){const s=Fa(n,$);Ou(n)?t.rp-=s:t.rp=s}for(const s of n.fleets.slice()){const r=n.nodes[s.to],a=We(s,r),o=Du(n,s)*e;a<=o?Ih(n,s):(s.x+=(r.x-s.x)/a*o,s.y+=(r.y-s.y)/a*o)}n.tick%20===0&&Oh(n);const i=n.specs[n.cmdSpec];i&&(i.owner!==$?(n.result="lose",n.resultWhy="Your Commander was lost."):i.held?n.cmdLostT<0?(n.cmdLostT=n.t,et(n,`YOUR COMMANDER IS A PRISONER at ${n.nodes[i.node].name}. Retake it before the window closes.`,"bad",i.node)):n.t-n.cmdLostT>=zu(n)&&(n.result="lose",n.resultWhy=`Your Commander was not recovered from ${n.nodes[i.node].name} in time.`):n.cmdLostT=-1,!n.result&&!n.nodes.some(s=>s.owner===$)&&(n.result="lose",n.resultWhy="You hold no territory.")),n.tick%3===0&&ms(n)}const vc="spacenodes.tune.v2",Vh=JSON.parse(JSON.stringify(ne)),Os=ne,td={fleetSpeed:"Map units per second",startUlt:"Starting Ultanium",startDrones:"Starting Drones",baseIncome:"Free Ultanium per minute",freeBase:"Drones that cost no upkeep",mineOut:"Ultanium/min by mine level (0,1,2,3)",sizeMult:"Planet size multiplier (small, medium, large)",refineryMult:"Refinery output multiplier",labRp:"Research per minute per Lab",labWorkers:"Extra Drones a Lab needs",supplyFree:"Drones a Supply world feeds",upkeepDrone:"Ultanium/min per Drone",upkeepPower:"Ultanium/min per point of specialist Power",depotMult:"Upkeep multiplier for Drones in a Depot",armyShare:"Stations stop building when upkeep reaches this share of income",desertSecs:"Seconds per deserting Drone when broke",lvCost:"Cost to reach level (-, -, 2, 3)",lvTime:"Seconds per level upgrade",shCost:"Cost to reach shield level (-, 1, 2, 3)",shTime:"Seconds per shield upgrade",specCost:"Specialty cost",specTime:"Specialty build seconds",missileCost:"Missile cost",missileTime:"Missile build seconds",missileRange:"Missile reach",missileKill:"Drones a missile destroys",missileSpeed:"Missile speed multiplier",prodSecs:"Seconds per Drone by Barracks level (-, 1, 2, 3)",shieldPerLv:"Shield per shield level",shieldRegenSecs:"Seconds per shield point recharged",slotsStation:"Launch slots per station",slotsPlanet:"Launch slots per planet",specSlots:"Active specialists per node",crew:"Specialists per fleet",baySpeed:"Launch Bay speed bonus",bayCrew:"Launch Bay extra crew",rallyBatch:"Spare Drones before a rally convoy leaves",fleetFov:"Fleet vision: full intelligence, detection",fovInner:"Node full-intelligence radius",fovOuter:"Node detection radius",corridorCost:"Corridor cost",corridorTime:"Corridor build seconds",corridorRange:"Corridor reach",corridorMax:"Corridors per node",corridorSpeed:"Convoy speed multiplier",rescueSecs:"Commander rescue window",ransom:"Ultanium per ransom",recruitCost:"Cost to recruit a prisoner",rpBase:"Research needed for the first choice",rpStep:"Extra research per technology known",xpLevels:"Commander experience per level",nodes:"Nodes on the map (next run)",neutralShield:"Shield level on neutral planets by size (next run)",stageSecs:"Seconds per mobilization stage",graceSecs:"Seconds before the first offensive",offInterval:"Seconds between offensives, by stage",offCommit:"Share of Drones sent on offensives, by stage",gatherSecs:"Seconds an offensive gathers",stageFree:"Reserve Drones each faction gains per stage",surgeFree:"Reserve Drones per total-war surge",captureSetback:"Mobilization lost per enemy node captured",aegisPerLayer:"Citadel Aegis per unbroken faction"};function xa(){try{return JSON.parse(localStorage.getItem(vc)||"{}")}catch{return{}}}function nd(n){try{localStorage.setItem(vc,JSON.stringify(n))}catch{}}function Hu(n,e){const t=Os[n];Array.isArray(t)&&Array.isArray(e)?(t.length=0,t.push(...e)):t&&typeof t=="object"&&e&&typeof e=="object"?Object.assign(t,e):Os[n]=e}function Wh(){const n=xa();for(const e in n)e in Os&&Hu(e,n[e])}const xo=n=>Array.isArray(n)?n.join(", "):n&&typeof n=="object"?JSON.stringify(n):String(n);function $h(n,e){return Array.isArray(e)?n.split(/[,\s]+/).filter(Boolean).map(Number):e&&typeof e=="object"?JSON.parse(n):Number(n)}const Xh=n=>Array.isArray(n)?n.length>0&&n.every(e=>Number.isFinite(e)):typeof n=="number"?Number.isFinite(n):n!==null&&typeof n=="object";function qh(n){const e=document.createElement("div");e.id="console",document.body.appendChild(e);let t="values",i="";const s=["Type help for commands."];function r(){const c=xa(),d=i.toLowerCase();let f="";if(t==="values")for(const g of Object.keys(ne))g==="dt"||d&&!(g+(td[g]||"")).toLowerCase().includes(d)||(f+=`<label class="crow ${xo(Os[g])!==xo(Vh[g])?"changed":""}"><span><b>${g}</b><small>${td[g]||""}</small></span><input data-k="${g}" value='${xo(Os[g])}'></label>`);else f=`<div class="cout">${s.slice(-60).map(g=>`<div>${g.replace(/</g,"&lt;")}</div>`).join("")}</div><input id="ccmd" placeholder="command, e.g. ult 500" autocomplete="off">`;const u=Object.keys(c).length;e.innerHTML=`<div class="chead"><b>Tuning console</b><small>${u} change${u===1?"":"s"} saved in this browser</small><button data-c="close">✕</button></div>
      <div class="ctabs">${["values","commands"].map(g=>`<button data-c="tab:${g}" class="${t===g?"on":""}">${g}</button>`).join("")}</div>
      ${t==="values"?`<input id="cfilter" placeholder="filter" value="${i}">`:""}
      <div class="cbody">${f}</div>
      <div class="cfoot"><button data-c="export">Copy changes</button><button data-c="import">Paste changes</button><button data-c="reset">Reset all</button></div>
      <p class="dim">Most values apply at once. Map values (node count, neutral shields) apply to the next new run.</p>`,t==="commands"&&e.querySelector("#ccmd")?.focus()}function a(c){const d=xa(),f=c.dataset.k;try{const u=$h(c.value,Os[f]);if(!Xh(u))throw 0;Hu(f,u),d[f]=u,nd(d),n.refresh(),r()}catch{c.classList.add("bad")}}function o(c){const[d,...f]=c.trim().split(/\s+/),u=n.game(),g=f[0]!==void 0?Number(f[0]):NaN,v=n.selected();s.push(`> ${c}`);const p=h=>s.push(h);if(d==="help"||!d){p("ult N · drones N (selected node) · econ · reveal · stage N · mob 0-1 · rp N · tech ID · relic ID · spec ID · upgrade (all specialists) · win · speed N · list specs|relics|techs");return}if(d==="list"){p((f[0]==="relics"?Object.keys(yn):f[0]==="techs"?Object.keys(Pt):Object.keys(nt)).join(" "));return}if(d==="speed"){n.setSpeed(Math.max(1,Math.min(32,g||1))),p(`speed ${g}x`);return}if(!u){p("Start a run first.");return}const m=u.sides[$];switch(d){case"ult":m.ult+=g||0,p(`Ultanium ${Math.floor(m.ult)}`);break;case"drones":v<0||u.nodes[v].owner!==$?p("Select one of your nodes first"):(u.nodes[v].drones+=g||0,p(`${u.nodes[v].name}: ${u.nodes[v].drones} Drones`));break;case"econ":{const h=wu(u,$);p(`income ${h.inc.toFixed(1)} · upkeep ${h.upk.toFixed(1)} (specialists ${h.specUp.toFixed(1)}) · Drones ${h.drones}, ${h.free} free · research ${h.rpm.toFixed(1)}/min`);break}case"reveal":for(const h of u.nodes)h.buffs.push({k:"scan",v:1,until:u.t+120});ms(u),p("Whole map identified for 2 minutes");break;case"stage":u.mob.stage=Math.max(1,Math.min(5,g||1)),u.mob.prog=0,p(`Mobilization stage ${u.mob.stage}`);break;case"mob":u.mob.prog=Math.max(0,Math.min(.99,g||0)),p(`Mobilization progress ${u.mob.prog}`);break;case"rp":m.rp+=g||0,p(`Research points ${m.rp.toFixed(0)}`);break;case"tech":Pt[f[0]]?(gc(u,$,f[0]),p(`Granted ${Pt[f[0]].name}`)):p("Unknown technology");break;case"relic":yn[f[0]]?(m.relics.push(f[0]),u.modV++,p(`Relic ${yn[f[0]].name}`)):p("Unknown relic");break;case"spec":{const h=v>=0&&u.nodes[v].owner===$?v:u.home;nt[f[0]]?(Bi(u,f[0],$,h),p(`${nt[f[0]].name} at ${u.nodes[h].name}`)):p("Unknown specialist");break}case"upgrade":for(const h of u.specs)h.owner===$&&!h.cmd&&(h.up=!0);u.modV++,p("Every specialist upgraded");break;case"win":u.result="win",u.resultWhy="Console.";break;default:p("Unknown command. Type help.")}n.refresh()}e.addEventListener("click",c=>{const d=c.target.closest("[data-c]");if(!d)return;const[f,u]=d.dataset.c.split(":");if(f==="close")l(!1);else if(f==="tab")t=u,r();else if(f==="export"){const g=JSON.stringify(xa(),null,1);navigator.clipboard?.writeText(g).catch(()=>{}),s.push("Changes copied to the clipboard:",g),t="commands",r()}else if(f==="import"){const g=prompt("Paste tuning JSON");if(g)try{nd(JSON.parse(g)),location.reload()}catch{alert("That is not valid JSON")}}else f==="reset"&&confirm("Reset every tuned value to the default? The page reloads.")&&(localStorage.removeItem(vc),location.reload())}),e.addEventListener("change",c=>{const d=c.target;d.dataset.k&&a(d)}),e.addEventListener("input",c=>{const d=c.target;if(d.id==="cfilter"){i=d.value;const f=d.selectionStart;r();const u=e.querySelector("#cfilter");u.focus(),u.setSelectionRange(f,f)}}),e.addEventListener("keydown",c=>{c.stopPropagation();const d=c.target;c.key==="Enter"&&d.id==="ccmd"?(o(d.value),r()):c.key==="Enter"&&d.dataset.k?a(d):(c.key==="`"||c.key==="Escape")&&(c.preventDefault(),l(!1))});function l(c){const d=c??!e.classList.contains("open");e.classList.toggle("open",d),d&&r()}return document.addEventListener("keydown",c=>{(c.key==="`"||c.key==="F2")&&!c.target.closest("input,textarea")&&(c.preventDefault(),l())}),{toggle:l}}const Yh=["Kestrel","Bastille","Harrow","Vigil","Anchor","Lantern","Marrow","Cinder","Tether","Gantry","Rook","Ward","Halcyon","Talon","Spindle","Ember","Quarry","Beacon","Keel","Sable"],Kh=["Ka","Ve","Or","Tal","Mi","Sen","Dra","Ul","Phe","Ny","Cor","Az","Lo","Ery","Bri","Zan","Hel","Qua","Io","Xe"],Zh=["ris","dan","thos","mir","vek","lun","tar","ion","sha","bor","nea","rax","phi","dor","lys","gan","tis","mon","rae","kai"];function So(n,e,t,i){return{owner:n,kind:e,fac:t,ult:i,techs:[],relics:[],produce:!0,rp:0,free:0,net:0,inc:0,upk:0,rpm:0,broken:!1,aiT:6+n*2,expT:60+n*15,desertT:0,refundT:0}}function Jh(n,e=0){const s={v:2,seed:n,rng:n|0,t:0,tick:0,modV:1,threat:e,w:430,h:290,nodes:[],fleets:[],specs:[],corridors:[],sides:{},factions:[2,3,4],archon:5,mob:{stage:1,prog:0,nextOff:ne.graceSecs,turn:0,surge:0},offs:[],pending:[],log:[],cmdSpec:-1,cmdLostT:-1,intel:[],vis:[],result:null,resultWhy:"",stats:{captures:0,nodesLost:0,battles:0,dronesLost:0,dronesMade:0,specs:0,specsLost:0,relics:0,techs:0,events:0,warlords:0,ultMade:0},nextId:1,home:0,citadel:1};for(let S=0;S<5;S++)$t(s);const r=[{x:fn(s,36,50),y:fn(s,290*.35,290*.65),region:$},{x:430-fn(s,36,50),y:fn(s,290*.35,290*.65),region:5}];for(let S=0;S<8e3&&r.length<ne.nodes;S++){const D={x:fn(s,22,408),y:fn(s,22,268),region:0};r.every(C=>We(D,C)>=34)&&r.push(D)}const a=r[0],o=r[1],l=()=>r.filter(S=>S.region===0),c=(S,D)=>D.slice().sort((C,R)=>We(C,S)-We(R,S));for(const S of c(o,l()).slice(0,2))We(S,o)<90&&(S.region=5);const d=va(s,[.18,.82]),f=[{x:.52,y:.5},{x:.6,y:d[0]},{x:.6,y:d[1]}],u=[];for(const S of[2,1,0]){const D={x:f[S].x*430+fn(s,-12,12),y:f[S].y*290+fn(s,-12,12)},C=c(D,l().filter(R=>We(R,a)>120))[0];C.region=2+S,u[S]=C;for(const R of c(C,l().filter(U=>We(U,a)>95)).slice(0,3))We(R,C)<90&&(R.region=2+S)}const g=ki(s,Object.keys(Un),3);s.sides[$]=So($,"player","",ne.startUlt),g.forEach((S,D)=>s.sides[2+D]=So(2+D,"faction",S,20)),s.sides[5]=So(5,"archon",zr(s,Object.keys(ls)),30);const v=We(a,o),p=c(a,l()),m=new Set,h=()=>{for(;;){const S=zr(s,Kh)+zr(s,Zh);if(!m.has(S))return m.add(S),S}};let x=[];const E=S=>{x.length||(x=va(s,Object.keys(Fn)));const D=x.findIndex(C=>Fn[C].on==="any"||Fn[C].on===S);return D<0?null:x.splice(D,1)[0]},b=1+.1*e;r.forEach((S,D)=>{const C=Math.max(0,Math.min(1,We(S,a)/v+fn(s,-.12,.12))),R={id:D,name:h(),kind:"planet",x:S.x,y:S.y,size:0,owner:S.region,region:S.region,threat:C,drones:0,shields:0,lv:1,sh:0,spec:"",task:null,prod:0,missile:0,specs:[],prisoners:[],buffs:[],event:null,offer:!1,hold:null,floor:0,front:!1,capital:!1,citadel:!1,home:!1},U=$t(s);R.size=U<.35?0:U<.8?1:2;const z=s.sides[S.region]?.kind==="faction"?Un[s.sides[S.region].fac]:null;if(S===a)R.kind="station",R.home=!0,R.drones=ne.startDrones,R.name="Haven",R.sh=1;else if(S===o)R.kind="station",R.citadel=!0,R.name="The Citadel",R.drones=Math.round(16*b),R.lv=3,R.sh=3,R.spec="post";else if(S.region===0){const P=p.indexOf(S);R.owner=0,R.kind=P<2?"planet":P===2?"station":$t(s)<.58?"planet":"station",P===0&&(R.size=0),P===1&&(R.size=1);const V=P<=2||We(S,a)<70;R.drones=V?_a(s,0,1):Math.round((C*8*fn(s,.6,1.3)+1)*b),R.sh=R.kind==="planet"?ne.neutralShield[R.size]:1,R.offer=R.kind==="planet"||$t(s)<.5,P>1&&(R.kind==="station"?$t(s)<.85:$t(s)<.25)&&(R.event=E(R.kind))}else{const P=u.includes(S);R.capital=P,R.kind=P?"station":$t(s)<.55?"planet":"station",R.drones=Math.round((P?9+C*5:3+C*5*fn(s,.7,1.2))*b),S.region===5?(R.drones=Math.round(_a(s,6,9)*b),R.sh=2,R.lv=2):(R.sh=Math.min(3,(z?z.ai.shield:1)-(P?0:1)+($t(s)<.4?1:0)),P&&(R.lv=2,R.sh=Math.max(2,R.sh))),R.sh=Math.max(0,R.sh),z&&$t(s)<.6&&(R.spec=R.kind==="planet"?z.ai.planet:z.ai.station)}R.kind==="station"&&!R.home&&!R.citadel&&(R.name=`${zr(s,Yh)}-${_a(s,2,99)}`),R.shields=R.sh*ne.shieldPerLv,s.nodes.push(R),s.intel.push({seen:0,t:0,snap:null}),s.vis.push(0)});for(const S of s.factions){const D=Un[s.sides[S].fac],C=s.nodes.filter(z=>z.owner===S),R=C.find(z=>z.capital);R.name=D.name.split(" ")[0]+" Prime",Bi(s,"warlord",S,R.id).name=D.warlord;const U=[R,R,va(s,C.filter(z=>!z.capital))[0]||R];D.specs.forEach((z,P)=>Bi(s,z,S,U[P].id)),s.sides[S].free=C.reduce((z,P)=>z+P.drones,0)+4}const A=ls[s.sides[5].fac];Bi(s,"archon",5,1).name=`${A.name} ${A.title}`,s.sides[5].free=s.nodes.filter(S=>S.owner===5).reduce((S,D)=>S+D.drones,0)+6;const w=ki(s,xh,3),_=ki(s,Object.keys(qi),3);return s.pending.push({kind:"draft",node:0,opts:w.map((S,D)=>({base:S,arch:_[D]})),title:"Choose your Commander"}),ms(s),s}const Qh={aggr:1,expand:1e9,react:.9,target:"weak",shield:3,planet:"refinery",station:"post"},Vu=(n,e)=>n.sides[e].kind==="faction"?Un[n.sides[e].fac].ai:Qh,Wu=(n,e)=>cs(n,0,0,[],e,{}).def;function $u(n,e,t,i){const s=Bi(n,"captain",e.owner,e.id);return Vi(n,e,t,i,[s.id])?(e.specs=e.specs.filter(a=>a!==s.id),s.owner=-1,s.node=-1,!1):!0}function jh(n,e){const t=n.sides[e],i=Vu(n,e),s=n.nodes.filter(a=>a.owner===e);if(!s.length||t.broken)return;for(const a of s)if(!a.task){if(a.spec==="silo"&&!a.missile&&!Di(n,a,"missile")){ur(n,a,"missile");continue}$t(n)>.35||(a.sh<Math.min(3,i.shield)&&!Di(n,a,"sh")?ur(n,a,"sh"):!a.spec&&!Di(n,a,"spec",a.kind==="planet"?i.planet:i.station)?ur(n,a,"spec",a.kind==="planet"?i.planet:i.station):a.lv<3&&!Di(n,a,"lv")&&ur(n,a,"lv"))}for(const a of n.fleets){if(a.owner!==$||a.drones<=0||a.noticed||a.lane)continue;const o=n.nodes[a.to];if(o.owner!==e||(a.noticed=!0,Lr(n,a).stealth||$t(n)>i.react))continue;const l=cc(n,a,o),c=s.filter(d=>d.id!==o.id&&d.drones>4&&ti(n,d)>0&&We(d,o)/ne.fleetSpeed+1<l).sort((d,f)=>f.drones-d.drones)[0];c&&Vi(n,c,o,Math.floor((c.drones-2)*.6),[])}const r=s.filter(a=>!a.capital&&a.drones<2+Math.round(a.threat*3)).sort((a,o)=>a.drones-o.drones)[0];if(r){const a=s.filter(o=>o.id!==r.id&&o.drones>8&&ti(n,o)>0).sort((o,l)=>We(o,r)-We(l,r))[0];a&&Vi(n,a,r,Math.min(4,Math.floor((a.drones-5)/2)+1),[])}if(n.t>=t.expT&&t.kind==="faction"){let a=null;for(const o of s)if(!(ti(n,o)<1))for(const l of n.nodes){if(l.owner!==0)continue;const c=We(o,l);if(c>115)continue;const d=Wu(n,l)+1;o.drones-2>=d&&(!a||c<a.d)&&(a={src:o,tgt:l,need:d,d:c})}a&&$u(n,a.src,a.tgt,a.need+_a(n,0,1))&&(t.expT=n.t+i.expand*fn(n,.8,1.2))}}function ep(n,e){const t=Vu(n,e),i=n.nodes.filter(g=>g.owner===e),s=n.nodes.filter(g=>g.owner===$);if(!i.length||!s.length)return;let r=null,a=1e9;for(const g of s){const v=Math.min(...i.map(h=>We(h,g))),p=Wu(n,g);let m=t.target==="weak"?p*10+v*.5:v+p*4;t.target==="spec"&&(m-=50*g.specs.length+(g.specs.includes(n.cmdSpec)?100:0)),m<a&&(a=m,r=g)}if(!r)return;const o=r,l=i.slice().sort((g,v)=>We(g,o)-We(v,o))[0],c=Math.min(.95,ne.offCommit[n.mob.stage]*(1+(pt(n,n.archon).offBig||0))*(.7+.3*t.aggr)),d=i.filter(g=>g.id!==l.id&&g.drones>=4&&ti(n,g)>0&&We(g,l)<190).sort((g,v)=>We(g,l)-We(v,l)).slice(0,1+n.mob.stage+n.mob.surge);let f=ne.gatherSecs;for(const g of d){const v=g.capital||g.citadel?Math.max(5,Math.floor(g.drones*.4)):2,p=Math.floor((g.drones-v)*c);p>0&&!Vi(n,g,l,p,[])&&(f=Math.max(f,We(g,l)/ne.fleetSpeed+5))}const u=(pt(n,$).warn||0)>0;n.offs.push({owner:e,target:o.id,staging:l.id,launchT:n.t+f,warned:u}),et(n,u?`${vi(n,e)} is massing at ${l.name} to strike ${o.name}`:`${vi(n,e)} is mobilizing for an offensive`,"warn",u?o.id:-1)}function tp(n,e){const t=n.nodes[e.staging];if(t.owner!==e.owner||n.sides[e.owner].broken)return;let i=n.nodes[e.target];if(i.owner!==$){const o=n.nodes.filter(l=>l.owner===$).sort((l,c)=>We(l,t)-We(c,t))[0];if(!o)return;i=o}const s=n.nodes.find(o=>o.owner===e.owner&&!co(n,o,i));s&&Nu(n,s,i);const r=t.capital||t.citadel?Math.max(5,Math.floor(t.drones*.4)):2,a=t.drones-r;a<3||$u(n,t,i,a)}function np(n){const e=n.mob,t=ne.stageSecs*(1-.05*n.threat);if(e.prog+=ne.dt/t*Math.max(.3,1-(pt(n,$).mobSlow||0)),e.prog>=1)if(e.prog=0,e.stage>=5){e.surge++;for(const i of[...n.factions,n.archon])n.sides[i].broken||(n.sides[i].free+=ne.surgeFree);et(n,`Total war: Coalition reserves deepen (surge ${e.surge}). Every faction can field more Drones.`,"warn")}else{e.stage++,et(n,`Coalition mobilization reached stage ${e.stage}. Offensives grow larger and more frequent.`,"warn");for(const i of[...n.factions,n.archon]){const s=n.sides[i];if(s.broken||(s.free+=ne.stageFree,s.kind!=="faction"))continue;const r=Un[s.fac].techs.filter(a=>!s.techs.includes(a));for(const a of r.slice(0,s.fac==="lumen"?2:1))gc(n,i,a)}}if(n.t>=e.nextOff){const i=n.factions.filter(s=>!n.sides[s].broken&&n.nodes.some(r=>r.owner===s));(e.stage>=4||!i.length)&&i.push(n.archon),ep(n,i[e.turn%i.length]),e.turn++,e.nextOff=n.t+ne.offInterval[e.stage]*fn(n,.85,1.15)/(1+.04*n.threat)/(1+.15*e.surge)}if(n.offs.length){const i=n.offs.filter(s=>n.t>=s.launchT);if(i.length){n.offs=n.offs.filter(s=>n.t<s.launchT);for(const s of i)tp(n,s)}}}function ip(n){np(n);for(const e of[...n.factions,n.archon]){const t=n.sides[e];n.t>=t.aiT&&(t.aiT=n.t+8+$t(n)*4,jh(n,e))}}function sp(n){return n.result||n.pending.length?!1:(Hh(n),n.result||ip(n),!0)}function rp(n,e){if(n.result)return"The run is over";const t=s=>{const r=n.nodes[s];return r&&r.owner===$?r:null},i=s=>{const r=n.specs[s];return r&&r.owner===$?r:null};switch(e.c){case"up":{const s=t(e.node);return s?ur(n,s,e.what,e.id):"Not your node"}case"cancel":{const s=t(e.node);return s?(Th(n,s),null):"Not your node"}case"corridor":return n.nodes[e.from]&&n.nodes[e.to]?Ch(n,n.nodes[e.from],n.nodes[e.to]):"Unknown node";case"launch":{const s=t(e.from);return s&&n.nodes[e.to]?Vi(n,s,n.nodes[e.to],e.drones,e.specs):"Not your node"}case"convoy":{const s=t(e.from);return s&&n.nodes[e.to]?oo(n,s,n.nodes[e.to],e.drones,e.specs):"Not your node"}case"move":{const s=i(e.spec);return s&&n.nodes[e.to]?Nh(n,s,n.nodes[e.to]):"Not your specialist"}case"missile":{const s=t(e.from);return s&&n.nodes[e.to]?Nu(n,s,n.nodes[e.to]):"Not your node"}case"rally":{const s=t(e.node);return s?Fh(n,s):"Not your node"}case"front":{const s=t(e.node);return s?(s.front=!s.front,null):"Not your node"}case"floor":{const s=t(e.node);return s?(s.floor=Math.max(0,Math.min(99,Math.round(e.v))),null):"Not your node"}case"produce":return n.sides[$].produce=!n.sides[$].produce,null;case"promote":{const s=i(e.spec);return s?bh(n,s):"Not your specialist"}case"choose":return zh(n,e.idx);case"ransom":{const s=n.specs[e.spec];return s?Gh(n,s,e.recruit):"Unknown prisoner"}case"event":{const s=t(e.node);return!s||!s.event?"No event here":(n.pending.push({kind:"event",node:s.id,opts:[],title:Fn[s.event].name,event:s.event}),null)}}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xc="187",ap=0,id=1,op=2,Sa=1,lp=2,fr=3,ds=0,ln=1,Xn=2,ks=0,vr=1,sd=2,rd=3,ad=4,cp=5,Ls=100,dp=101,up=102,fp=103,hp=104,pp=200,mp=201,gp=202,_p=203,Xu=204,qu=205,vp=206,xp=207,Sp=208,Mp=209,yp=210,bp=211,Ep=212,wp=213,Tp=214,tl=0,nl=1,il=2,br=3,sl=4,rl=5,al=6,ol=7,Sc=0,Ap=1,Rp=2,gi=0,Yu=1,Ku=2,Zu=3,Ju=4,Qu=5,ju=6,ef=7,tf=300,Xs=301,Er=302,Mo=303,yo=304,ll=1e3,hi=1001,cl=1002,Xt=1003,Cp=1004,Gr=1005,on=1006,bo=1007,Ii=1008,pn=1009,nf=1010,sf=1011,wr=1012,Mc=1013,ii=1014,Kn=1015,si=1016,yc=1017,bc=1018,qs=1020,rf=35902,af=35899,of=1021,lf=1022,Zn=1023,$i=1026,Ni=1027,cf=1028,Ec=1029,us=1030,wc=1031,Tc=1033,Ma=33776,ya=33777,ba=33778,Ea=33779,dl=35840,ul=35841,fl=35842,hl=35843,pl=36196,ml=37492,gl=37496,_l=37488,vl=37489,Oa=37490,xl=37491,Sl=37808,Ml=37809,yl=37810,bl=37811,El=37812,wl=37813,Tl=37814,Al=37815,Rl=37816,Cl=37817,Pl=37818,Ll=37819,Dl=37820,Il=37821,Nl=36492,Ul=36494,Fl=36495,Ol=36283,kl=36284,ka=36285,Bl=36286,Pp=3200,zl=0,Lp=1,Ci="",hn="srgb",Ba="srgb-linear",za="linear",ct="srgb",Eo=7680,Dp=519,Ip=512,Np=513,Up=514,df=515,Fp=516,Op=517,uf=518,ff=519,kp=35044,od="300 es",In=2e3,Tr=2001;function Bp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ga(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function zp(){const n=Ga("canvas");return n.style.display="block",n}const ld={};function cd(...n){const e="THREE."+n.shift();console.log(e,...n)}function hf(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ne(...n){n=hf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function st(...n){n=hf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function wa(...n){const e=n.join(" ");e in ld||(ld[e]=!0,Ne(...n))}function Gp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Hp={[tl]:tl,[il]:al,[sl]:sl,[br]:rl,[nl]:nl,[al]:il,[ol]:ol,[rl]:br};class gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wo=Math.PI/180,Gl=180/Math.PI;function Ir(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function Vp(n,e){return(n%e+e)%e}function To(n,e,t){return(1-t)*n+t*e}function Wp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ac(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function $p(n,e){if(e.constructor===Float32Array)return n;const t=Ac(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Xp(n,e){if(e.constructor===Float32Array)return n;const t=Ac(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const kc=class kc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};kc.prototype.isVector2=!0;let $e=kc;class tr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],d=i[s+2],f=i[s+3],u=r[a+0],g=r[a+1],v=r[a+2],p=r[a+3];if(f!==p||l!==u||c!==g||d!==v){let m=l*u+c*g+d*v+f*p;m<0&&(u=-u,g=-g,v=-v,p=-p,m=-m);let h=1-o;if(m<.9995){const x=Math.acos(m),E=Math.sin(x);h=Math.sin(h*x)/E,o=Math.sin(o*x)/E,l=l*h+u*o,c=c*h+g*o,d=d*h+v*o,f=f*h+p*o}else{l=l*h+u*o,c=c*h+g*o,d=d*h+v*o,f=f*h+p*o;const x=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=x,c*=x,d*=x,f*=x}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],d=i[s+3],f=r[a],u=r[a+1],g=r[a+2],v=r[a+3];return e[t]=o*v+d*f+l*g-c*u,e[t+1]=l*v+d*u+c*f-o*g,e[t+2]=c*v+d*g+o*u-l*f,e[t+3]=d*v-o*f-l*u-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(s/2),f=o(r/2),u=l(i/2),g=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=u*d*f+c*g*v,this._y=c*g*f-u*d*v,this._z=c*d*v+u*g*f,this._w=c*d*f-u*g*v;break;case"YXZ":this._x=u*d*f+c*g*v,this._y=c*g*f-u*d*v,this._z=c*d*v-u*g*f,this._w=c*d*f+u*g*v;break;case"ZXY":this._x=u*d*f-c*g*v,this._y=c*g*f+u*d*v,this._z=c*d*v+u*g*f,this._w=c*d*f-u*g*v;break;case"ZYX":this._x=u*d*f-c*g*v,this._y=c*g*f+u*d*v,this._z=c*d*v-u*g*f,this._w=c*d*f+u*g*v;break;case"YZX":this._x=u*d*f+c*g*v,this._y=c*g*f+u*d*v,this._z=c*d*v-u*g*f,this._w=c*d*f-u*g*v;break;case"XZY":this._x=u*d*f-c*g*v,this._y=c*g*f-u*d*v,this._z=c*d*v+u*g*f,this._w=c*d*f+u*g*v;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],f=t[10],u=i+o+f;if(u>0){const g=.5/Math.sqrt(u+1);this._w=.25/g,this._x=(d-l)*g,this._y=(r-c)*g,this._z=(a-s)*g}else if(i>o&&i>f){const g=2*Math.sqrt(1+i-o-f);this._w=(d-l)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+c)/g}else if(o>f){const g=2*Math.sqrt(1+o-i-f);this._w=(r-c)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+f-i-o);this._w=(a-s)/g,this._x=(r+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-i*c,this._z=r*d+a*c+i*l-s*o,this._w=a*d-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Bc=class Bc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),d=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*d,this.y=i+l*d+o*c-r*f,this.z=s+l*f+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ao.copy(this).projectOnVector(e),this.sub(Ao)}reflect(e){return this.sub(Ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bc.prototype.isVector3=!0;let O=Bc;const Ao=new O,dd=new tr,zc=class zc{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],u=i[2],g=i[5],v=i[8],p=s[0],m=s[3],h=s[6],x=s[1],E=s[4],b=s[7],A=s[2],w=s[5],_=s[8];return r[0]=a*p+o*x+l*A,r[3]=a*m+o*E+l*w,r[6]=a*h+o*b+l*_,r[1]=c*p+d*x+f*A,r[4]=c*m+d*E+f*w,r[7]=c*h+d*b+f*_,r[2]=u*p+g*x+v*A,r[5]=u*m+g*E+v*w,r[8]=u*h+g*b+v*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-i*r*d+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,u=o*l-d*r,g=c*r-a*l,v=t*f+i*u+s*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/v;return e[0]=f*p,e[1]=(s*c-d*i)*p,e[2]=(o*i-s*a)*p,e[3]=u*p,e[4]=(d*t-s*l)*p,e[5]=(s*r-o*t)*p,e[6]=g*p,e[7]=(i*l-c*t)*p,e[8]=(a*t-i*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return wa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ro.makeScale(e,t)),this}rotate(e){return wa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ro.makeRotation(-e)),this}translate(e,t){return wa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ro.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};zc.prototype.isMatrix3=!0;let Fe=zc;const Ro=new Fe,ud=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fd=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qp(){const n={enabled:!0,workingColorSpace:Ba,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=Bs(s.r),s.g=Bs(s.g),s.b=Bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ci?za:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ba]:{primaries:e,whitePoint:i,transfer:za,toXYZ:ud,fromXYZ:fd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:ud,fromXYZ:fd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),n}const Je=qp();function _i(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let vs;class Yp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{vs===void 0&&(vs=Ga("canvas")),vs.width=e.width,vs.height=e.height;const s=vs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=vs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ga("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=_i(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_i(t[i]/255)*255):t[i]=_i(t[i]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kp=0;class Rc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Ir(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Co(s[a].image)):r.push(Co(s[a]))}else r=Co(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Co(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Yp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let Zp=0;const Po=new O;class en extends gs{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,i=hi,s=hi,r=on,a=Ii,o=Zn,l=pn,c=en.DEFAULT_ANISOTROPY,d=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=Ir(),this.name="",this.source=new Rc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Po).x}get height(){return this.source.getSize(Po).y}get depth(){return this.source.getSize(Po).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ll:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case cl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ll:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case cl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=tf;en.DEFAULT_ANISOTROPY=1;const Gc=class Gc{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],d=l[4],f=l[8],u=l[1],g=l[5],v=l[9],p=l[2],m=l[6],h=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-p)<.01&&Math.abs(v-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+p)<.1&&Math.abs(v+m)<.1&&Math.abs(c+g+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,b=(g+1)/2,A=(h+1)/2,w=(d+u)/4,_=(f+p)/4,S=(v+m)/4;return E>b&&E>A?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=w/i,r=_/i):b>A?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=w/s,r=S/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=_/r,s=S/r),this.set(i,s,r,t),this}let x=Math.sqrt((m-v)*(m-v)+(f-p)*(f-p)+(u-d)*(u-d));return Math.abs(x)<.001&&(x=1),this.x=(m-v)/x,this.y=(f-p)/x,this.z=(u-d)/x,this.w=Math.acos((c+g+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gc.prototype.isVector4=!0;let Mt=Gc;class Jp extends gs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];const s=i.count;for(let r=0;r<s;r++)this.textures[r]=new en({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Rc(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends Jp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class pf extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qp extends en{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ja=class ja{constructor(e,t,i,s,r,a,o,l,c,d,f,u,g,v,p,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,d,f,u,g,v,p,m)}set(e,t,i,s,r,a,o,l,c,d,f,u,g,v,p,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=f,h[14]=u,h[3]=g,h[7]=v,h[11]=p,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ja().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/xs.setFromMatrixColumn(e,0).length(),r=1/xs.setFromMatrixColumn(e,1).length(),a=1/xs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=a*d,g=a*f,v=o*d,p=o*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=g+v*c,t[5]=u-p*c,t[9]=-o*l,t[2]=p-u*c,t[6]=v+g*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*d,g=l*f,v=c*d,p=c*f;t[0]=u+p*o,t[4]=v*o-g,t[8]=a*c,t[1]=a*f,t[5]=a*d,t[9]=-o,t[2]=g*o-v,t[6]=p+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*d,g=l*f,v=c*d,p=c*f;t[0]=u-p*o,t[4]=-a*f,t[8]=v+g*o,t[1]=g+v*o,t[5]=a*d,t[9]=p-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*d,g=a*f,v=o*d,p=o*f;t[0]=l*d,t[4]=v*c-g,t[8]=u*c+p,t[1]=l*f,t[5]=p*c+u,t[9]=g*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,g=a*c,v=o*l,p=o*c;t[0]=l*d,t[4]=p-u*f,t[8]=v*f+g,t[1]=f,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=g*f+v,t[10]=u-p*f}else if(e.order==="XZY"){const u=a*l,g=a*c,v=o*l,p=o*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=u*f+p,t[5]=a*d,t[9]=g*f-v,t[2]=v*f-g,t[6]=o*d,t[10]=p*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jp,e,em)}lookAt(e,t,i){const s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Mi.crossVectors(i,dn),Mi.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Mi.crossVectors(i,dn)),Mi.normalize(),Hr.crossVectors(dn,Mi),s[0]=Mi.x,s[4]=Hr.x,s[8]=dn.x,s[1]=Mi.y,s[5]=Hr.y,s[9]=dn.y,s[2]=Mi.z,s[6]=Hr.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],u=i[9],g=i[13],v=i[2],p=i[6],m=i[10],h=i[14],x=i[3],E=i[7],b=i[11],A=i[15],w=s[0],_=s[4],S=s[8],D=s[12],C=s[1],R=s[5],U=s[9],z=s[13],P=s[2],V=s[6],K=s[10],H=s[14],ie=s[3],X=s[7],ee=s[11],te=s[15];return r[0]=a*w+o*C+l*P+c*ie,r[4]=a*_+o*R+l*V+c*X,r[8]=a*S+o*U+l*K+c*ee,r[12]=a*D+o*z+l*H+c*te,r[1]=d*w+f*C+u*P+g*ie,r[5]=d*_+f*R+u*V+g*X,r[9]=d*S+f*U+u*K+g*ee,r[13]=d*D+f*z+u*H+g*te,r[2]=v*w+p*C+m*P+h*ie,r[6]=v*_+p*R+m*V+h*X,r[10]=v*S+p*U+m*K+h*ee,r[14]=v*D+p*z+m*H+h*te,r[3]=x*w+E*C+b*P+A*ie,r[7]=x*_+E*R+b*V+A*X,r[11]=x*S+E*U+b*K+A*ee,r[15]=x*D+E*z+b*H+A*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],u=e[10],g=e[14],v=e[3],p=e[7],m=e[11],h=e[15],x=l*g-c*u,E=o*g-c*f,b=o*u-l*f,A=a*g-c*d,w=a*u-l*d,_=a*f-o*d;return t*(p*x-m*E+h*b)-i*(v*x-m*A+h*w)+s*(v*E-p*A+h*_)-r*(v*b-p*w+m*_)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-i*(r*d-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],u=e[10],g=e[11],v=e[12],p=e[13],m=e[14],h=e[15],x=t*o-i*a,E=t*l-s*a,b=t*c-r*a,A=i*l-s*o,w=i*c-r*o,_=s*c-r*l,S=d*p-f*v,D=d*m-u*v,C=d*h-g*v,R=f*m-u*p,U=f*h-g*p,z=u*h-g*m,P=x*z-E*U+b*R+A*C-w*D+_*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/P;return e[0]=(o*z-l*U+c*R)*V,e[1]=(s*U-i*z-r*R)*V,e[2]=(p*_-m*w+h*A)*V,e[3]=(u*w-f*_-g*A)*V,e[4]=(l*C-a*z-c*D)*V,e[5]=(t*z-s*C+r*D)*V,e[6]=(m*b-v*_-h*E)*V,e[7]=(d*_-u*b+g*E)*V,e[8]=(a*U-o*C+c*S)*V,e[9]=(i*C-t*U-r*S)*V,e[10]=(v*w-p*b+h*x)*V,e[11]=(f*b-d*w-g*x)*V,e[12]=(o*D-a*R-l*S)*V,e[13]=(t*R-i*D+s*S)*V,e[14]=(p*E-v*A-m*x)*V,e[15]=(d*A-f*E+u*x)*V,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+i,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,f=o+o,u=r*c,g=r*d,v=r*f,p=a*d,m=a*f,h=o*f,x=l*c,E=l*d,b=l*f,A=i.x,w=i.y,_=i.z;return s[0]=(1-(p+h))*A,s[1]=(g+b)*A,s[2]=(v-E)*A,s[3]=0,s[4]=(g-b)*w,s[5]=(1-(u+h))*w,s[6]=(m+x)*w,s[7]=0,s[8]=(v+E)*_,s[9]=(m-x)*_,s[10]=(1-(u+p))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=xs.set(s[0],s[1],s[2]).length();const o=xs.set(s[4],s[5],s[6]).length(),l=xs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Tn.copy(this);const c=1/a,d=1/o,f=1/l;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=d,Tn.elements[5]*=d,Tn.elements[6]*=d,Tn.elements[8]*=f,Tn.elements[9]*=f,Tn.elements[10]*=f,t.setFromRotationMatrix(Tn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=In,l=!1){const c=this.elements,d=2*r/(t-e),f=2*r/(i-s),u=(t+e)/(t-e),g=(i+s)/(i-s);let v,p;if(l)v=r/(a-r),p=a*r/(a-r);else if(o===In)v=-(a+r)/(a-r),p=-2*a*r/(a-r);else if(o===Tr)v=-a/(a-r),p=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=In,l=!1){const c=this.elements,d=2/(t-e),f=2/(i-s),u=-(t+e)/(t-e),g=-(i+s)/(i-s);let v,p;if(l)v=1/(a-r),p=a/(a-r);else if(o===In)v=-2/(a-r),p=-(a+r)/(a-r);else if(o===Tr)v=-1/(a-r),p=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=v,c[14]=p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ja.prototype.isMatrix4=!0;let gt=ja;const xs=new O,Tn=new gt,jp=new O(0,0,0),em=new O(1,1,1),Mi=new O,Hr=new O,dn=new O,hd=new gt,pd=new tr;class Xi{constructor(e=0,t=0,i=0,s=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],f=s[2],u=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,g),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return hd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pd.setFromEuler(this),this.setFromQuaternion(pd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class mf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tm=0;const md=new O,Ss=new tr,oi=new gt,Vr=new O,sr=new O,nm=new O,im=new tr,gd=new O(1,0,0),_d=new O(0,1,0),vd=new O(0,0,1),xd={type:"added"},sm={type:"removed"},Ms={type:"childadded",child:null},Lo={type:"childremoved",child:null};class Lt extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=Ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new O,t=new Xi,i=new tr,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new Fe}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(gd,e)}rotateY(e){return this.rotateOnAxis(_d,e)}rotateZ(e){return this.rotateOnAxis(vd,e)}translateOnAxis(e,t){return md.copy(e).applyQuaternion(this.quaternion),this.position.add(md.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gd,e)}translateY(e){return this.translateOnAxis(_d,e)}translateZ(e){return this.translateOnAxis(vd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Vr.copy(e):Vr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(sr,Vr,this.up):oi.lookAt(Vr,sr,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),Ss.setFromRotationMatrix(oi),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xd),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sm),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xd),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,e,nm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,im,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),u=a(e.skeletons),g=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),g.length>0&&(i.animations=g),v.length>0&&(i.nodes=v)}return i.object=s,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Lt.DEFAULT_UP=new O(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class gn extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rm={type:"move"};class Do{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,i),h=this._getHandJoint(c,p);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=d.position.distanceTo(f.position),g=.02,v=.005;c.inputState.pinching&&u>g+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=g-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new gn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function Io(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Je.workingColorSpace){if(e=Vp(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Io(a,r,e+1/3),this.g=Io(a,r,e),this.b=Io(a,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=hn){function i(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const i=gf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return Je.workingToColorSpace(Jt.copy(this),e),Math.round(Qe(Jt.r*255,0,255))*65536+Math.round(Qe(Jt.g*255,0,255))*256+Math.round(Qe(Jt.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Jt.copy(this),t);const i=Jt.r,s=Jt.g,r=Jt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=hn){Je.workingToColorSpace(Jt.copy(this),e);const t=Jt.r,i=Jt.g,s=Jt.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(Wr);const i=To(yi.h,Wr.h,t),s=To(yi.s,Wr.s,t),r=To(yi.l,Wr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new Ge;Ge.NAMES=gf;class am extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const An=new O,li=new O,No=new O,ci=new O,ys=new O,bs=new O,Sd=new O,Uo=new O,Fo=new O,Oo=new O,ko=new Mt,Bo=new Mt,zo=new Mt;class Dn{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),An.subVectors(e,t),s.cross(An);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){An.subVectors(s,t),li.subVectors(i,t),No.subVectors(e,t);const a=An.dot(An),o=An.dot(li),l=An.dot(No),c=li.dot(li),d=li.dot(No),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,g=(c*l-o*d)*u,v=(a*d-o*l)*u;return r.set(1-g-v,v,g)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return ko.setScalar(0),Bo.setScalar(0),zo.setScalar(0),ko.fromBufferAttribute(e,t),Bo.fromBufferAttribute(e,i),zo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ko,r.x),a.addScaledVector(Bo,r.y),a.addScaledVector(zo,r.z),a}static isFrontFacing(e,t,i,s){return An.subVectors(i,t),li.subVectors(e,t),An.cross(li).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),li.subVectors(this.a,this.b),An.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Dn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;ys.subVectors(s,i),bs.subVectors(r,i),Uo.subVectors(e,i);const l=ys.dot(Uo),c=bs.dot(Uo);if(l<=0&&c<=0)return t.copy(i);Fo.subVectors(e,s);const d=ys.dot(Fo),f=bs.dot(Fo);if(d>=0&&f<=d)return t.copy(s);const u=l*f-d*c;if(u<=0&&l>=0&&d<=0&&l-d>0)return a=l/(l-d),t.copy(i).addScaledVector(ys,a);Oo.subVectors(e,r);const g=ys.dot(Oo),v=bs.dot(Oo);if(v>=0&&g<=v)return t.copy(r);const p=g*c-l*v;if(p<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(bs,o);const m=d*v-g*f;if(m<=0&&f-d>=0&&g-v>=0)return Sd.subVectors(r,s),o=(f-d)/(f-d+(g-v)),t.copy(s).addScaledVector(Sd,o);const h=1/(m+p+u);return a=p*h,o=u*h,t.copy(i).addScaledVector(ys,a).addScaledVector(bs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Nr{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$r.copy(i.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),Xr.subVectors(this.max,rr),Es.subVectors(e.a,rr),ws.subVectors(e.b,rr),Ts.subVectors(e.c,rr),bi.subVectors(ws,Es),Ei.subVectors(Ts,ws),ji.subVectors(Es,Ts);let t=[0,-bi.z,bi.y,0,-Ei.z,Ei.y,0,-ji.z,ji.y,bi.z,0,-bi.x,Ei.z,0,-Ei.x,ji.z,0,-ji.x,-bi.y,bi.x,0,-Ei.y,Ei.x,0,-ji.y,ji.x,0];return!Go(t,Es,ws,Ts,Xr)||(t=[1,0,0,0,1,0,0,0,1],!Go(t,Es,ws,Ts,Xr))?!1:(qr.crossVectors(bi,Ei),t=[qr.x,qr.y,qr.z],Go(t,Es,ws,Ts,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const di=[new O,new O,new O,new O,new O,new O,new O,new O],Rn=new O,$r=new Nr,Es=new O,ws=new O,Ts=new O,bi=new O,Ei=new O,ji=new O,rr=new O,Xr=new O,qr=new O,es=new O;function Go(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){es.fromArray(n,r);const o=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),l=e.dot(es),c=t.dot(es),d=i.dot(es);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const wt=new O,Yr=new $e;let om=0;class as extends gs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:om++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=kp,this.updateRanges=[],this.gpuType=Kn,this.version=0,this._normalizationScale=e!==void 0?Ac(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Yr.fromBufferAttribute(this,t),Yr.applyMatrix3(e),this.setXY(t,Yr.x,Yr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):$p(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Xp(e,this.array)}}class _f extends as{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vf extends as{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class rt extends as{constructor(e,t,i){super(new Float32Array(e),t,i)}}const lm=new Nr,ar=new O,Ho=new O;class Ur{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):lm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);const t=ar.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ar,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ho.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(Ho)),this.expandByPoint(ar.copy(e.center).sub(Ho))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let cm=0;const Mn=new gt,Vo=new Lt,As=new O,un=new Nr,or=new Nr,Ot=new O;class qt extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=Ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bp(e)?vf:_f)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Fe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,i){return Mn.makeTranslation(e,t,i),this.applyMatrix4(Mn),this}scale(e,t,i){return Mn.makeScale(e,t,i),this.applyMatrix4(Mn),this}lookAt(e){return Vo.lookAt(e),Vo.updateMatrix(),this.applyMatrix4(Vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new rt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];or.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(un.min,or.min),un.expandByPoint(Ot),Ot.addVectors(un.max,or.max),un.expandByPoint(Ot)):(un.expandByPoint(or.min),un.expandByPoint(or.max))}un.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ot));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ot.fromBufferAttribute(o,c),l&&(As.fromBufferAttribute(e,c),Ot.add(As)),s=Math.max(s,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new as(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let D=0;D<i.count;D++)o[D]=new O,l[D]=new O;const d=new O,f=new O,u=new O,g=new $e,v=new $e,p=new $e,m=new O,h=new O;function x(D,C,R){c[D]=c[C]=c[R]=1,d.fromBufferAttribute(i,D),f.fromBufferAttribute(i,C),u.fromBufferAttribute(i,R),g.fromBufferAttribute(r,D),v.fromBufferAttribute(r,C),p.fromBufferAttribute(r,R),f.sub(d),u.sub(d),v.sub(g),p.sub(g);const U=1/(v.x*p.y-p.x*v.y);isFinite(U)&&(m.copy(f).multiplyScalar(p.y).addScaledVector(u,-v.y).multiplyScalar(U),h.copy(u).multiplyScalar(v.x).addScaledVector(f,-p.x).multiplyScalar(U),o[D].add(m),o[C].add(m),o[R].add(m),l[D].add(h),l[C].add(h),l[R].add(h))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let D=0,C=E.length;D<C;++D){const R=E[D],U=R.start,z=R.count;for(let P=U,V=U+z;P<V;P+=3)x(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const b=new O,A=new O,w=new O,_=new O;function S(D){w.fromBufferAttribute(s,D),_.copy(w);const C=o[D];b.copy(C),b.sub(w.multiplyScalar(w.dot(C))).normalize(),A.crossVectors(_,C);const U=A.dot(l[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,U)}for(let D=0,C=i.count;D<C;++D)c[D]&&S(D);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new as(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,g=i.count;u<g;u++)i.setXYZ(u,0,0,0);const s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,d=new O,f=new O;if(e)for(let u=0,g=e.count;u<g;u+=3){const v=e.getX(u+0),p=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,g=t.count;u<g;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,u=new c.constructor(l.length*d);let g=0,v=0;for(let p=0,m=l.length;p<m;p++){o.isInterleavedBufferAttribute?g=l[p]*o.data.stride+o.offset:g=l[p]*d;for(let h=0;h<d;h++)u[v++]=c[g++]}return new as(u,d,f)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qt,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,f=c.length;d<f;d++){const u=c[d],g=e(u,i);l.push(g)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,u=c.length;f<u;f++){const g=c[f];d.push(g.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],f=r[c];for(let u=0,g=f.length;u<g;u++)d.push(f[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wo=new O,dm=new O,um=new Fe;class Ti{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Wo.subVectors(i,t).cross(dm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Wo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||um.getNormalMatrix(e),s=this.coplanarPoint(Wo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let fm=0;class _s extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Ir(),this.name="",this.type="Material",this.blending=vr,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xu,this.blendDst=qu,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eo,this.stencilZFail=Eo,this.stencilZPass=Eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ti().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new $e().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $e().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ui=new O,$o=new O,Kr=new O,Zr=new O;class Cc{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){$o.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),Zr.copy(this.origin).sub($o);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Kr),o=Zr.dot(this.direction),l=-Zr.dot(Kr),c=Zr.lengthSq(),d=Math.abs(1-a*a);let f,u,g,v;if(d>0)if(f=a*l-o,u=a*o-l,v=r*d,f>=0)if(u>=-v)if(u<=v){const p=1/d;f*=p,u*=p,g=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),g=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),g=-f*f+u*(u+2*l)+c;else u<=-v?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),g=-f*f+u*(u+2*l)+c):u<=v?(f=0,u=Math.min(Math.max(-r,-l),r),g=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),g=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),g=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy($o).addScaledVector(Kr,u),g}intersectSphere(e,t){if(e.radius<0)return null;ui.subVectors(e.center,this.origin);const i=ui.dot(this.direction),s=ui.dot(ui)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,f=e.x-a.x,u=e.y-a.y,g=e.z-a.z,v=t.x-a.x,p=t.y-a.y,m=t.z-a.z,h=i.x-a.x,x=i.y-a.y,E=i.z-a.z,b=Math.abs(l),A=Math.abs(c),w=Math.abs(d);let _,S,D,C,R,U,z,P,V,K,H,ie;if(b>=A&&b>=w?(D=l,U=f,V=v,ie=h,l>=0?(_=c,S=d,C=u,R=g,z=p,P=m,K=x,H=E):(_=d,S=c,C=g,R=u,z=m,P=p,K=E,H=x)):A>=w?(D=c,U=u,V=p,ie=x,c>=0?(_=d,S=l,C=g,R=f,z=m,P=v,K=E,H=h):(_=l,S=d,C=f,R=g,z=v,P=m,K=h,H=E)):(D=d,U=g,V=m,ie=E,d>=0?(_=l,S=c,C=f,R=u,z=v,P=p,K=h,H=x):(_=c,S=l,C=u,R=f,z=p,P=v,K=x,H=h)),D===0)return null;const X=_/D,ee=S/D,te=1/D,Ee=C-X*U,Oe=R-ee*U,J=z-X*V,_e=P-ee*V,Me=K-X*ie,Ce=H-ee*ie,ve=Me*_e-Ce*J,Be=Ee*Ce-Oe*Me,bt=J*Oe-_e*Ee;if(s){if(ve<0||Be<0||bt<0)return null}else if((ve<0||Be<0||bt<0)&&(ve>0||Be>0||bt>0))return null;const Le=ve+Be+bt;if(Le===0)return null;const ot=te*(ve*U+Be*V+bt*ie);return(Le>0?ot<0:ot>0)?null:this.at(ot/Le,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ha extends _s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Md=new gt,ts=new Cc,Jr=new Ur,yd=new O,Qr=new O,jr=new O,ea=new O,Xo=new O,ta=new O,bd=new O,na=new O;class Gt extends Lt{constructor(e=new qt,t=new Ha){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],f=r[l];d!==0&&(Xo.fromBufferAttribute(f,e),a?ta.addScaledVector(Xo,d):ta.addScaledVector(Xo.sub(t),d))}t.add(ta)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jr.copy(i.boundingSphere),Jr.applyMatrix4(r),ts.copy(e.ray).recast(e.near),!(Jr.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Jr,yd)===null||ts.origin.distanceToSquared(yd)>(e.far-e.near)**2))&&(Md.copy(r).invert(),ts.copy(e.ray).applyMatrix4(Md),!(i.boundingBox!==null&&ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,u=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,p=u.length;v<p;v++){const m=u[v],h=a[m.materialIndex],x=Math.max(m.start,g.start),E=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let b=x,A=E;b<A;b+=3){const w=o.getX(b),_=o.getX(b+1),S=o.getX(b+2);s=ia(this,h,e,i,c,d,f,w,_,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,g.start),p=Math.min(o.count,g.start+g.count);for(let m=v,h=p;m<h;m+=3){const x=o.getX(m),E=o.getX(m+1),b=o.getX(m+2);s=ia(this,a,e,i,c,d,f,x,E,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,p=u.length;v<p;v++){const m=u[v],h=a[m.materialIndex],x=Math.max(m.start,g.start),E=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let b=x,A=E;b<A;b+=3){const w=b,_=b+1,S=b+2;s=ia(this,h,e,i,c,d,f,w,_,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let m=v,h=p;m<h;m+=3){const x=m,E=m+1,b=m+2;s=ia(this,a,e,i,c,d,f,x,E,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function hm(n,e,t,i,s,r,a,o){let l;if(e.side===ln?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ds,o),l===null)return null;na.copy(o),na.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(na);return c<t.near||c>t.far?null:{distance:c,point:na.clone(),object:n}}function ia(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Qr),n.getVertexPosition(l,jr),n.getVertexPosition(c,ea);const d=hm(n,e,t,i,Qr,jr,ea,bd);if(d){const f=new O;Dn.getBarycoord(bd,Qr,jr,ea,f),s&&(d.uv=Dn.getInterpolatedAttribute(s,o,l,c,f,new $e)),r&&(d.uv1=Dn.getInterpolatedAttribute(r,o,l,c,f,new $e)),a&&(d.normal=Dn.getInterpolatedAttribute(a,o,l,c,f,new O),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new O,materialIndex:0};Dn.getNormal(Qr,jr,ea,u.normal),d.face=u,d.barycoord=f}return d}class pm extends en{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Xt,d=Xt,f,u){super(null,a,o,l,c,d,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ns=new Ur,mm=new $e(.5,.5),sa=new O;class Ar{constructor(e=new Ti,t=new Ti,i=new Ti,s=new Ti,r=new Ti,a=new Ti){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=In,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],f=r[5],u=r[6],g=r[7],v=r[8],p=r[9],m=r[10],h=r[11],x=r[12],E=r[13],b=r[14],A=r[15];if(s[0].setComponents(c-a,g-d,h-v,A-x).normalize(),s[1].setComponents(c+a,g+d,h+v,A+x).normalize(),s[2].setComponents(c+o,g+f,h+p,A+E).normalize(),s[3].setComponents(c-o,g-f,h-p,A-E).normalize(),i)s[4].setComponents(l,u,m,b).normalize(),s[5].setComponents(c-l,g-u,h-m,A-b).normalize();else if(s[4].setComponents(c-l,g-u,h-m,A-b).normalize(),t===In)s[5].setComponents(c+l,g+u,h+m,A+b).normalize();else if(t===Tr)s[5].setComponents(l,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){ns.center.set(0,0,0);const t=mm.distanceTo(e.center);return ns.radius=.7071067811865476+t,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(sa.x=s.normal.x>0?e.max.x:e.min.x,sa.y=s.normal.y>0?e.max.y:e.min.y,sa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(sa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Ed=new gt;class Pc{constructor(){this.coordinateSystem=In,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];Ed.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Ar),i[s].setFromProjectionMatrix(Ed,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ar),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new Pc().copy(this)}}class Hl extends _s{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Va=new O,Wa=new O,wd=new gt,lr=new Cc,ra=new Ur,qo=new O,Td=new O;class gm extends Lt{constructor(e=new qt,t=new Hl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Va.fromBufferAttribute(t,s-1),Wa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Va.distanceTo(Wa);e.setAttribute("lineDistance",new rt(i,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(s),ra.radius+=r,e.ray.intersectsSphere(ra)===!1)return;wd.copy(s).invert(),lr.copy(e.ray).applyMatrix4(wd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const g=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let p=g,m=v-1;p<m;p+=c){const h=d.getX(p),x=d.getX(p+1),E=aa(this,e,lr,l,h,x,p);E&&t.push(E)}if(this.isLineLoop){const p=d.getX(v-1),m=d.getX(g),h=aa(this,e,lr,l,p,m,v-1);h&&t.push(h)}}else{const g=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let p=g,m=v-1;p<m;p+=c){const h=aa(this,e,lr,l,p,p+1,p);h&&t.push(h)}if(this.isLineLoop){const p=aa(this,e,lr,l,v-1,g,v-1);p&&t.push(p)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function aa(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(Va.fromBufferAttribute(o,s),Wa.fromBufferAttribute(o,r),t.distanceSqToSegment(Va,Wa,qo,Td)>i)return;qo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(qo);if(!(c<e.near||c>e.far))return{distance:c,point:Td.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class Ad extends gm{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class xf extends _s{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Rd=new gt,Vl=new Cc,oa=new Ur,la=new O;class _m extends Lt{constructor(e=new qt,t=new xf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(s),oa.radius+=r,e.ray.intersectsSphere(oa)===!1)return;Rd.copy(s).invert(),Vl.copy(e.ray).applyMatrix4(Rd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let v=u,p=g;v<p;v++){const m=c.getX(v);la.fromBufferAttribute(f,m),Cd(la,m,l,s,e,t,this)}}else{const u=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=u,p=g;v<p;v++)la.fromBufferAttribute(f,v),Cd(la,v,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Cd(n,e,t,i,s,r,a){const o=Vl.distanceSqToPoint(n);if(o<t){const l=new O;Vl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Sf extends en{constructor(e=[],t=Xs,i,s,r,a,o,l,c,d){super(e,t,i,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pd extends en{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ys extends en{constructor(e,t,i=ii,s,r,a,o=Xt,l=Xt,c,d=$i,f=1){if(d!==$i&&d!==Ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,s,r,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Mf extends Ys{constructor(e,t=ii,i=Xs,s,r,a=Xt,o=Xt,l,c=$i){const d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class yf extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class kt extends qt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],f=[];let u=0,g=0;v("z","y","x",-1,-1,i,t,e,a,r,0),v("z","y","x",1,-1,i,t,-e,a,r,1),v("x","z","y",1,1,e,i,t,s,a,2),v("x","z","y",1,-1,e,i,-t,s,a,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(d,3)),this.setAttribute("uv",new rt(f,2));function v(p,m,h,x,E,b,A,w,_,S,D){const C=b/_,R=A/S,U=b/2,z=A/2,P=w/2,V=_+1,K=S+1;let H=0,ie=0;const X=new O;for(let ee=0;ee<K;ee++){const te=ee*R-z;for(let Ee=0;Ee<V;Ee++){const Oe=Ee*C-U;X[p]=Oe*x,X[m]=te*E,X[h]=P,c.push(X.x,X.y,X.z),X[p]=0,X[m]=0,X[h]=w>0?1:-1,d.push(X.x,X.y,X.z),f.push(Ee/_),f.push(1-ee/S),H+=1}}for(let ee=0;ee<S;ee++)for(let te=0;te<_;te++){const Ee=u+te+V*ee,Oe=u+te+V*(ee+1),J=u+(te+1)+V*(ee+1),_e=u+(te+1)+V*ee;l.push(Ee,Oe,_e),l.push(Oe,J,_e),ie+=6}o.addGroup(g,ie,D),g+=ie,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class uo extends qt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new O,d=new $e;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const g=i+f/t*s;c.x=e*Math.cos(g),c.y=e*Math.sin(g),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[u]/e+1)/2,d.y=(a[u+1]/e+1)/2,l.push(d.x,d.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(o,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ht extends qt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],f=[],u=[],g=[];let v=0;const p=[],m=i/2;let h=0;x(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(d),this.setAttribute("position",new rt(f,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(g,2));function x(){const b=new O,A=new O;let w=0;const _=(t-e)/i;for(let S=0;S<=r;S++){const D=[],C=S/r,R=C*(t-e)+e;for(let U=0;U<=s;U++){const z=U/s,P=z*l+o,V=Math.sin(P),K=Math.cos(P);A.x=R*V,A.y=-C*i+m,A.z=R*K,f.push(A.x,A.y,A.z),b.set(V,_,K).normalize(),u.push(b.x,b.y,b.z),g.push(z,1-C),D.push(v++)}p.push(D)}for(let S=0;S<s;S++)for(let D=0;D<r;D++){const C=p[D][S],R=p[D+1][S],U=p[D+1][S+1],z=p[D][S+1];(e>0||D!==0)&&(d.push(C,R,z),w+=3),(t>0||D!==r-1)&&(d.push(R,U,z),w+=3)}c.addGroup(h,w,0),h+=w}function E(b){const A=v,w=new $e,_=new O;let S=0;const D=b===!0?e:t,C=b===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,m*C,0),u.push(0,C,0),g.push(.5,.5),v++;const R=v;for(let U=0;U<=s;U++){const P=U/s*l+o,V=Math.cos(P),K=Math.sin(P);_.x=D*K,_.y=m*C,_.z=D*V,f.push(_.x,_.y,_.z),u.push(0,C,0),w.x=V*.5+.5,w.y=K*.5*C+.5,g.push(w.x,w.y),v++}for(let U=0;U<s;U++){const z=A+U,P=R+U;b===!0?d.push(P,P+1,z):d.push(P+1,P,z),S+=3}c.addGroup(h,S,b===!0?1:2),h+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ht(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jn extends ht{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Jn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fo extends qt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];o(s),c(i),d(),this.setAttribute("position",new rt(r,3)),this.setAttribute("normal",new rt(r.slice(),3)),this.setAttribute("uv",new rt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const E=new O,b=new O,A=new O;for(let w=0;w<t.length;w+=3)g(t[w+0],E),g(t[w+1],b),g(t[w+2],A),l(E,b,A,x)}function l(x,E,b,A){const w=A+1,_=[];for(let S=0;S<=w;S++){_[S]=[];const D=x.clone().lerp(b,S/w),C=E.clone().lerp(b,S/w),R=w-S;for(let U=0;U<=R;U++)U===0&&S===w?_[S][U]=D:_[S][U]=D.clone().lerp(C,U/R)}for(let S=0;S<w;S++)for(let D=0;D<2*(w-S)-1;D++){const C=Math.floor(D/2);D%2===0?(u(_[S][C+1]),u(_[S+1][C]),u(_[S][C])):(u(_[S][C+1]),u(_[S+1][C+1]),u(_[S+1][C]))}}function c(x){const E=new O;for(let b=0;b<r.length;b+=3)E.x=r[b+0],E.y=r[b+1],E.z=r[b+2],E.normalize().multiplyScalar(x),r[b+0]=E.x,r[b+1]=E.y,r[b+2]=E.z}function d(){const x=new O;for(let E=0;E<r.length;E+=3){x.x=r[E+0],x.y=r[E+1],x.z=r[E+2];const b=m(x)/2/Math.PI+.5,A=h(x)/Math.PI+.5;a.push(b,1-A)}v(),f()}function f(){for(let x=0;x<a.length;x+=6){const E=a[x+0],b=a[x+2],A=a[x+4],w=Math.max(E,b,A),_=Math.min(E,b,A);w>.9&&_<.1&&(E<.2&&(a[x+0]+=1),b<.2&&(a[x+2]+=1),A<.2&&(a[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function g(x,E){const b=x*3;E.x=e[b+0],E.y=e[b+1],E.z=e[b+2]}function v(){const x=new O,E=new O,b=new O,A=new O,w=new $e,_=new $e,S=new $e;for(let D=0,C=0;D<r.length;D+=9,C+=6){x.set(r[D+0],r[D+1],r[D+2]),E.set(r[D+3],r[D+4],r[D+5]),b.set(r[D+6],r[D+7],r[D+8]),w.set(a[C+0],a[C+1]),_.set(a[C+2],a[C+3]),S.set(a[C+4],a[C+5]),A.copy(x).add(E).add(b).divideScalar(3);const R=m(A);p(w,C+0,x,R),p(_,C+2,E,R),p(S,C+4,b,R)}}function p(x,E,b,A){A<0&&x.x===1&&(a[E]=x.x-1),b.x===0&&b.z===0&&(a[E]=A/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function h(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.vertices,e.indices,e.radius,e.detail)}}class Fr extends fo{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fr(e.radius,e.detail)}}class zs extends fo{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zs(e.radius,e.detail)}}class Ks extends qt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,d=l+1,f=e/o,u=t/l,g=[],v=[],p=[],m=[];for(let h=0;h<d;h++){const x=h*u-a;for(let E=0;E<c;E++){const b=E*f-r;v.push(b,-x,0),p.push(0,0,1),m.push(E/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<o;x++){const E=x+c*h,b=x+c*(h+1),A=x+1+c*(h+1),w=x+1+c*h;g.push(E,b,w),g.push(b,A,w)}this.setIndex(g),this.setAttribute("position",new rt(v,3)),this.setAttribute("normal",new rt(p,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.width,e.height,e.widthSegments,e.heightSegments)}}class Lc extends qt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],d=[];let f=e;const u=(t-e)/s,g=new O,v=new $e;for(let p=0;p<=s;p++){for(let m=0;m<=i;m++){const h=r+m/i*a;g.x=f*Math.cos(h),g.y=f*Math.sin(h),l.push(g.x,g.y,g.z),c.push(0,0,1),v.x=(g.x/t+1)/2,v.y=(g.y/t+1)/2,d.push(v.x,v.y)}f+=u}for(let p=0;p<s;p++){const m=p*(i+1);for(let h=0;h<i;h++){const x=h+m,E=x,b=x+i+1,A=x+i+2,w=x+1;o.push(E,b,w),o.push(b,A,w)}}this.setIndex(o),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Rr extends qt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],f=new O,u=new O,g=[],v=[],p=[],m=[];for(let h=0;h<=i;h++){const x=[],E=h/i,b=a+E*o,A=e*Math.cos(b),w=Math.sqrt(e*e-A*A);let _=0;h===0&&a===0?_=.5/t:h===i&&l===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){const D=S/t,C=s+D*r;f.x=-w*Math.cos(C),f.y=A,f.z=w*Math.sin(C),v.push(f.x,f.y,f.z),u.copy(f).normalize(),p.push(u.x,u.y,u.z),m.push(D+_,1-E),x.push(c++)}d.push(x)}for(let h=0;h<i;h++)for(let x=0;x<t;x++){const E=d[h][x+1],b=d[h][x],A=d[h+1][x],w=d[h+1][x+1];(h!==0||a>0)&&g.push(E,b,w),(h!==i-1||l<Math.PI)&&g.push(b,A,w)}this.setIndex(g),this.setAttribute("position",new rt(v,3)),this.setAttribute("normal",new rt(p,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $a extends qt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],d=[],f=[],u=new O,g=new O,v=new O;for(let p=0;p<=i;p++){const m=a+p/i*o;for(let h=0;h<=s;h++){const x=h/s*r;g.x=(e+t*Math.cos(m))*Math.cos(x),g.y=(e+t*Math.cos(m))*Math.sin(x),g.z=t*Math.sin(m),c.push(g.x,g.y,g.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),v.subVectors(g,u).normalize(),d.push(v.x,v.y,v.z),f.push(h/s),f.push(p/i)}}for(let p=1;p<=i;p++)for(let m=1;m<=s;m++){const h=(s+1)*p+m-1,x=(s+1)*(p-1)+m-1,E=(s+1)*(p-1)+m,b=(s+1)*p+m;l.push(h,x,b),l.push(x,E,b)}this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(d,3)),this.setAttribute("uv",new rt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Zs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Ld(s))s.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Ld(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function nn(n){const e={};for(let t=0;t<n.length;t++){const i=Zs(n[t]);for(const s in i)e[s]=i[s]}return e}function Ld(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function vm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const xm={clone:Zs,merge:nn};var Sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fs extends _s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sm,this.fragmentShader=Mm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=vm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ge().setHex(s.value);break;case"v2":this.uniforms[i].value=new $e().fromArray(s.value);break;case"v3":this.uniforms[i].value=new O().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Mt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Fe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new gt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ym extends fs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Dc extends _s{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zl,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=Sc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bm extends _s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Em extends _s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ef extends Lt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class wm extends Ef{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Yo=new gt,Dd=new O,Id=new O;class Tm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ar,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Dd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dd),Id.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Id),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Yo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Yo,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Tr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Yo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ca=new O,da=new tr,Bn=new O;class wf extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ca,da,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,da,Bn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ca,da,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,da,Bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wi=new O,Nd=new $e,Ud=new $e;class Ln extends wf{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gl*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,Nd,Ud),t.subVectors(Ud,Nd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Tf extends wf{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Am extends Tm{constructor(){super(new Tf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rm extends Ef{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Am}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Rs=-90,Cs=1;class Wl extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ln(Rs,Cs,e,t);s.layers=this.layers,this.add(s);const r=new Ln(Rs,Cs,e,t);r.layers=this.layers,this.add(r);const a=new Ln(Rs,Cs,e,t);a.layers=this.layers,this.add(a);const o=new Ln(Rs,Cs,e,t);o.layers=this.layers,this.add(o);const l=new Ln(Rs,Cs,e,t);l.layers=this.layers,this.add(l);const c=new Ln(Rs,Cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===In)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Tr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const p=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=p,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,u,g),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Cm extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Fd(n,e,t,i){const s=Pm(i);switch(t){case of:return n*e;case cf:return n*e/s.components*s.byteLength;case Ec:return n*e/s.components*s.byteLength;case us:return n*e*2/s.components*s.byteLength;case wc:return n*e*2/s.components*s.byteLength;case lf:return n*e*3/s.components*s.byteLength;case Zn:return n*e*4/s.components*s.byteLength;case Tc:return n*e*4/s.components*s.byteLength;case Ma:case ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ba:case Ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ul:case hl:return Math.max(n,16)*Math.max(e,8)/4;case dl:case fl:return Math.max(n,8)*Math.max(e,8)/2;case pl:case ml:case _l:case vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gl:case Oa:case xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case yl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case bl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case El:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case wl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Al:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Dl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Il:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Nl:case Ul:case Fl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ol:case kl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ka:case Bl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Pm(n){switch(n){case pn:case nf:return{byteLength:1,components:1};case wr:case sf:case si:return{byteLength:2,components:1};case yc:case bc:return{byteLength:2,components:4};case ii:case Mc:case Kn:return{byteLength:4,components:1};case rf:case af:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xc}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Af(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Lm(n){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,d),o.onUploadCallback();let g;if(c instanceof Float32Array)g=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=n.SHORT;else if(c instanceof Uint32Array)g=n.UNSIGNED_INT;else if(c instanceof Int32Array)g=n.INT;else if(c instanceof Int8Array)g=n.BYTE;else if(c instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const d=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,d);else{f.sort((g,v)=>g.start-v.start);let u=0;for(let g=1;g<f.length;g++){const v=f[u],p=f[g];p.start<=v.start+v.count+1?v.count=Math.max(v.count,p.start+p.count-v.start):(++u,f[u]=p)}f.length=u+1;for(let g=0,v=f.length;g<v;g++){const p=f[g];n.bufferSubData(c,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Dm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Im=`#ifdef USE_ALPHAHASH
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
#endif`,Nm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Um=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,km=`#ifdef USE_AOMAP
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
#endif`,Bm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zm=`#ifdef USE_BATCHING
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
#endif`,Gm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$m=`#ifdef USE_IRIDESCENCE
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
#endif`,Xm=`#ifdef USE_BUMPMAP
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
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,e0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,t0=`#define PI 3.141592653589793
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
} // validated`,n0=`vec3 transformedNormal = objectNormal;
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
#endif`,i0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,a0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o0="gl_FragColor = linearToOutputTexel( gl_FragColor );",l0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
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
#endif`,f0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h0=`#ifdef USE_ENVMAP
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
#endif`,p0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v0=`#ifdef USE_GRADIENTMAP
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
}`,x0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,S0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,b0=`#ifdef USE_ENVMAP
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
#endif`,E0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R0=`PhysicalMaterial material;
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
#endif`,C0=`uniform sampler2D dfgLUT;
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
}`,P0=`
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
#endif`,L0=`#if defined( RE_IndirectDiffuse )
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
#endif`,D0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,N0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,k0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,G0=`#if defined( USE_POINTS_UV )
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
#endif`,H0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$0=`#if defined( USE_MORPHCOLORS )
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
#endif`,X0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q0=`#ifdef USE_MORPHTARGETS
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
#endif`,Y0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Z0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,J0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,eg=`#ifdef USE_NORMALMAP
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
#endif`,tg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ng=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ig=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ag=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ug=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gg=`float getShadowMask() {
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
}`,_g=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vg=`#ifdef USE_SKINNING
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
#endif`,xg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sg=`#ifdef USE_SKINNING
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
#endif`,Mg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wg=`#ifdef USE_TRANSMISSION
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
#endif`,Tg=`#ifdef USE_TRANSMISSION
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
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dg=`uniform sampler2D t2D;
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
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`uniform float backgroundBlurriness;
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
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`#include <common>
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
}`,kg=`#if DEPTH_PACKING == 3200
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
}`,Bg=`#define DISTANCE
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
}`,zg=`#define DISTANCE
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
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`uniform float scale;
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
}`,Wg=`uniform vec3 diffuse;
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
}`,$g=`#include <common>
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
}`,Xg=`uniform vec3 diffuse;
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
}`,qg=`#define LAMBERT
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
}`,Yg=`#define LAMBERT
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
}`,Kg=`#define MATCAP
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
}`,Zg=`#define MATCAP
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
}`,Jg=`#define NORMAL
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
}`,Qg=`#define NORMAL
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
}`,jg=`#define PHONG
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
}`,e_=`#define PHONG
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
}`,t_=`#define STANDARD
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
}`,n_=`#define STANDARD
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
}`,i_=`#define TOON
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
}`,s_=`#define TOON
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
}`,r_=`uniform float size;
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
}`,a_=`uniform vec3 diffuse;
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
}`,o_=`#include <common>
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
}`,l_=`uniform vec3 color;
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
}`,c_=`uniform float rotation;
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
}`,d_=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:Dm,alphahash_pars_fragment:Im,alphamap_fragment:Nm,alphamap_pars_fragment:Um,alphatest_fragment:Fm,alphatest_pars_fragment:Om,aomap_fragment:km,aomap_pars_fragment:Bm,batching_pars_vertex:zm,batching_vertex:Gm,begin_vertex:Hm,beginnormal_vertex:Vm,bsdfs:Wm,iridescence_fragment:$m,bumpmap_pars_fragment:Xm,clipping_planes_fragment:qm,clipping_planes_pars_fragment:Ym,clipping_planes_pars_vertex:Km,clipping_planes_vertex:Zm,color_fragment:Jm,color_pars_fragment:Qm,color_pars_vertex:jm,color_vertex:e0,common:t0,defaultnormal_vertex:n0,displacementmap_pars_vertex:i0,displacementmap_vertex:s0,emissivemap_fragment:r0,emissivemap_pars_fragment:a0,colorspace_fragment:o0,colorspace_pars_fragment:l0,envmap_fragment:c0,envmap_common_pars_fragment:d0,envmap_pars_fragment:u0,envmap_pars_vertex:f0,envmap_physical_pars_fragment:b0,envmap_vertex:h0,fog_vertex:p0,fog_pars_vertex:m0,fog_fragment:g0,fog_pars_fragment:_0,gradientmap_pars_fragment:v0,lightmap_pars_fragment:x0,lights_lambert_fragment:S0,lights_lambert_pars_fragment:M0,lights_pars_begin:y0,lights_toon_fragment:E0,lights_toon_pars_fragment:w0,lights_phong_fragment:T0,lights_phong_pars_fragment:A0,lights_physical_fragment:R0,lights_physical_pars_fragment:C0,lights_fragment_begin:P0,lights_fragment_maps:L0,lights_fragment_end:D0,lightprobes_pars_fragment:I0,logdepthbuf_fragment:N0,logdepthbuf_pars_fragment:U0,logdepthbuf_pars_vertex:F0,logdepthbuf_vertex:O0,map_fragment:k0,map_pars_fragment:B0,map_particle_fragment:z0,map_particle_pars_fragment:G0,metalnessmap_fragment:H0,metalnessmap_pars_fragment:V0,morphinstance_vertex:W0,morphcolor_vertex:$0,morphnormal_vertex:X0,morphtarget_pars_vertex:q0,morphtarget_vertex:Y0,normal_fragment_begin:K0,normal_fragment_maps:Z0,normal_pars_fragment:J0,normal_pars_vertex:Q0,normal_vertex:j0,normalmap_pars_fragment:eg,clearcoat_normal_fragment_begin:tg,clearcoat_normal_fragment_maps:ng,clearcoat_pars_fragment:ig,iridescence_pars_fragment:sg,opaque_fragment:rg,packing:ag,premultiplied_alpha_fragment:og,project_vertex:lg,dithering_fragment:cg,dithering_pars_fragment:dg,roughnessmap_fragment:ug,roughnessmap_pars_fragment:fg,shadowmap_pars_fragment:hg,shadowmap_pars_vertex:pg,shadowmap_vertex:mg,shadowmask_pars_fragment:gg,skinbase_vertex:_g,skinning_pars_vertex:vg,skinning_vertex:xg,skinnormal_vertex:Sg,specularmap_fragment:Mg,specularmap_pars_fragment:yg,tonemapping_fragment:bg,tonemapping_pars_fragment:Eg,transmission_fragment:wg,transmission_pars_fragment:Tg,uv_pars_fragment:Ag,uv_pars_vertex:Rg,uv_vertex:Cg,worldpos_vertex:Pg,background_vert:Lg,background_frag:Dg,backgroundCube_vert:Ig,backgroundCube_frag:Ng,cube_vert:Ug,cube_frag:Fg,depth_vert:Og,depth_frag:kg,distance_vert:Bg,distance_frag:zg,equirect_vert:Gg,equirect_frag:Hg,linedashed_vert:Vg,linedashed_frag:Wg,meshbasic_vert:$g,meshbasic_frag:Xg,meshlambert_vert:qg,meshlambert_frag:Yg,meshmatcap_vert:Kg,meshmatcap_frag:Zg,meshnormal_vert:Jg,meshnormal_frag:Qg,meshphong_vert:jg,meshphong_frag:e_,meshphysical_vert:t_,meshphysical_frag:n_,meshtoon_vert:i_,meshtoon_frag:s_,points_vert:r_,points_frag:a_,shadow_vert:o_,shadow_frag:l_,sprite_vert:c_,sprite_frag:d_},ge={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Vn={basic:{uniforms:nn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:nn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:nn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:nn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:nn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:nn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:nn([ge.points,ge.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:nn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:nn([ge.common,ge.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:nn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:nn([ge.sprite,ge.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:nn([ge.common,ge.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:nn([ge.lights,ge.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Vn.physical={uniforms:nn([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const ua={r:0,b:0,g:0},u_=new gt,Rf=new Fe;Rf.set(-1,0,0,0,1,0,0,0,1);function f_(n,e,t,i,s,r){const a=new Ge(0);let o=s===!0?0:1,l,c,d=null,f=0,u=null;function g(x){let E=x.isScene===!0?x.background:null;if(E&&E.isTexture){const b=x.backgroundBlurriness>0;E=e.get(E,b)}return E}function v(x){let E=!1;const b=g(x);b===null?m(a,o):b&&b.isColor&&(m(b,1),E=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(x,E){const b=g(E);b&&b.isCubeTexture?(c===void 0&&(c=new Gt(new kt(1,1,1),new fs({name:"BackgroundCubeMaterial",uniforms:Zs(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(u_.makeRotationFromEuler(E.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Rf),c.material.toneMapped=Je.getTransfer(b.colorSpace)!==ct,(d!==b||f!==b.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,d=b,f=b.version,u=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Gt(new Ks(2,2),new fs({name:"BackgroundMaterial",uniforms:Zs(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Je.getTransfer(b.colorSpace)!==ct,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||f!==b.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,d=b,f=b.version,u=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,E){x.getRGB(ua,bf(n)),t.buffers.color.setClear(ua.r,ua.g,ua.b,E,r)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,E=1){a.set(x),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:v,addToRenderList:p,dispose:h}}function h_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,a=!1;function o(R,U,z,P,V){let K=!1;const H=f(R,P,z,U);r!==H&&(r=H,c(r.object)),K=g(R,P,z,V),K&&v(R,P,z,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,b(R,U,z,P),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(R){return n.bindVertexArray(R)}function d(R){return n.deleteVertexArray(R)}function f(R,U,z,P){const V=P.wireframe===!0;let K=i[U.id];K===void 0&&(K={},i[U.id]=K);const H=R.isInstancedMesh===!0?R.id:0;let ie=K[H];ie===void 0&&(ie={},K[H]=ie);let X=ie[z.id];X===void 0&&(X={},ie[z.id]=X);let ee=X[V];return ee===void 0&&(ee=u(l()),X[V]=ee),ee}function u(R){const U=[],z=[],P=[];for(let V=0;V<t;V++)U[V]=0,z[V]=0,P[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:P,object:R,attributes:{},index:null}}function g(R,U,z,P){const V=r.attributes,K=U.attributes;let H=0;const ie=z.getAttributes();for(const X in ie)if(ie[X].location>=0){const te=V[X];let Ee=K[X];if(Ee===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(Ee=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(Ee=R.instanceColor)),te===void 0||te.attribute!==Ee||Ee&&te.data!==Ee.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function v(R,U,z,P){const V={},K=U.attributes;let H=0;const ie=z.getAttributes();for(const X in ie)if(ie[X].location>=0){let te=K[X];te===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(te=R.instanceColor));const Ee={};Ee.attribute=te,te&&te.data&&(Ee.data=te.data),V[X]=Ee,H++}r.attributes=V,r.attributesNum=H,r.index=P}function p(){const R=r.newAttributes;for(let U=0,z=R.length;U<z;U++)R[U]=0}function m(R){h(R,0)}function h(R,U){const z=r.newAttributes,P=r.enabledAttributes,V=r.attributeDivisors;z[R]=1,P[R]===0&&(n.enableVertexAttribArray(R),P[R]=1),V[R]!==U&&(n.vertexAttribDivisor(R,U),V[R]=U)}function x(){const R=r.newAttributes,U=r.enabledAttributes;for(let z=0,P=U.length;z<P;z++)U[z]!==R[z]&&(n.disableVertexAttribArray(z),U[z]=0)}function E(R,U,z,P,V,K,H){H===!0?n.vertexAttribIPointer(R,U,z,V,K):n.vertexAttribPointer(R,U,z,P,V,K)}function b(R,U,z,P){p();const V=P.attributes,K=z.getAttributes(),H=U.defaultAttributeValues;for(const ie in K){const X=K[ie];if(X.location>=0){let ee=V[ie];if(ee===void 0&&(ie==="instanceMatrix"&&R.instanceMatrix&&(ee=R.instanceMatrix),ie==="instanceColor"&&R.instanceColor&&(ee=R.instanceColor)),ee!==void 0){const te=ee.normalized,Ee=ee.itemSize,Oe=e.get(ee);if(Oe===void 0)continue;const J=Oe.buffer,_e=Oe.type,Me=Oe.bytesPerElement,Ce=_e===n.INT||_e===n.UNSIGNED_INT||ee.gpuType===Mc;if(ee.isInterleavedBufferAttribute){const ve=ee.data,Be=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,bt=ee.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let Le=0;Le<X.locationSize;Le++)h(X.location+Le,ve.meshPerAttribute);R.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Le=0;Le<X.locationSize;Le++)m(X.location+Le);n.bindBuffer(n.ARRAY_BUFFER,J);for(let Le=0;Le<X.locationSize;Le++)E(X.location+Le,Ee/X.locationSize,_e,te,Be*Me,(bt+Ee/X.locationSize*Le)*Me,Ce)}else{if(ee.isInstancedBufferAttribute){for(let ve=0;ve<X.locationSize;ve++)h(X.location+ve,ee.meshPerAttribute);R.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ve=0;ve<X.locationSize;ve++)m(X.location+ve);n.bindBuffer(n.ARRAY_BUFFER,J);for(let ve=0;ve<X.locationSize;ve++)E(X.location+ve,Ee/X.locationSize,_e,te,Ee*Me,Ee/X.locationSize*ve*Me,Ce)}}else if(H!==void 0){const te=H[ie];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(X.location,te);break;case 3:n.vertexAttrib3fv(X.location,te);break;case 4:n.vertexAttrib4fv(X.location,te);break;default:n.vertexAttrib1fv(X.location,te)}}}}x()}function A(){D();for(const R in i){const U=i[R];for(const z in U){const P=U[z];for(const V in P){const K=P[V];for(const H in K)d(K[H].object),delete K[H];delete P[V]}}delete i[R]}}function w(R){if(i[R.id]===void 0)return;const U=i[R.id];for(const z in U){const P=U[z];for(const V in P){const K=P[V];for(const H in K)d(K[H].object),delete K[H];delete P[V]}}delete i[R.id]}function _(R){for(const U in i){const z=i[U];for(const P in z){const V=z[P];if(V[R.id]===void 0)continue;const K=V[R.id];for(const H in K)d(K[H].object),delete K[H];delete V[R.id]}}}function S(R){for(const U in i){const z=i[U],P=R.isInstancedMesh===!0?R.id:0,V=z[P];if(V!==void 0){for(const K in V){const H=V[K];for(const ie in H)d(H[ie].object),delete H[ie];delete V[K]}delete z[P],Object.keys(z).length===0&&delete i[U]}}}function D(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:p,enableAttribute:m,disableUnusedAttributes:x}}function p_(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),t.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let g=0;g<d;g++)u+=c[g];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function m_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Zn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const S=_===si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==pn&&_!==Kn&&!S&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Ne("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Ne("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:g,maxVertexTextures:v,maxTextureSize:p,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:b,maxSamples:A,samples:w}}function g_(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Ti,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const g=f.length!==0||u||i!==0||s;return s=u,i=f.length,g},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=d(f,u,0)},this.setState=function(f,u,g){const v=f.clippingPlanes,p=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!s||v===null||v.length===0||r&&!m)r?d(null):c();else{const x=r?0:i,E=x*4;let b=h.clippingState||null;l.value=b,b=d(v,u,E,g);for(let A=0;A!==E;++A)b[A]=t[A];h.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,u,g,v){const p=f!==null?f.length:0;let m=null;if(p!==0){if(m=l.value,v!==!0||m===null){const h=g+p*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<h)&&(m=new Float32Array(h));for(let E=0,b=g;E!==p;++E,b+=4)a.copy(f[E]).applyMatrix4(x,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}class Ic extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Sf(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kt(5,5,5),r=new fs({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:ks});r.uniforms.tEquirect.value=t;const a=new Gt(s,r),o=t.minFilter;return t.minFilter===Ii&&(t.minFilter=on),new Wl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const Od=256,__=3,v_=20,Cf=256,Pf=16,x_=3,S_=new O,M_=new Ge;class Xa{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Wl(1,10,null),this._boxMesh=new Gt(new kt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=S_}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),d=this._getSourceTarget(!0);t>0&&(d.texture.mipmapsAutoUpdate=!1);const f=l.autoClear,u=l.autoClearColor,g=l.autoClearDepth,v=l.autoClearStencil,p=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,p===null&&(e.background=l.getClearColor(M_));const m=new Wl(i,s,d);return m.position.copy(o),m.update(l,e),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=g,l.autoClearStencil=v,e.background=p,t>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Od,Wp(e))}_fromTexture(e,t){e.mapping===Xs||e.mapping===Er?this._setSize(e.image.length===0?Od:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=kd(e,!1,!1),i=Math.log2(e)-__;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=kd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Xs||e.mapping===Er?(this._cubemapMaterial===null&&(this._cubemapMaterial=zd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Bd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=y_(),this._integrationMaterial=b_());const t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Pf);for(let a=0;a<=i;a++){const o=Xa.lodToRoughness(a,i);if(a>i-x_)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(Cf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=E_());const i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}}function kd(n,e,t){return new Ic(n,{minFilter:Ii,generateMipmaps:e,type:si,colorSpace:Ba,depthBuffer:t})}function Or(n,e,t){return new fs({name:n,uniforms:e,vertexShader:Ve.cube_vert,fragmentShader:t,side:ln,blending:ks,depthTest:!1,depthWrite:!1})}function y_(){return Or("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Cf}u

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
	`)}function b_(){return Or("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Pf}},`

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
	`)}function E_(){return Or("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${v_}
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
	`)}function Bd(){return Or("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function zd(){return Or("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function w_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,g=!1){return u==null?null:g?a(u):r(u)}function r(u){if(u&&u.isTexture){const g=u.mapping;if(g===Mo||g===yo)if(e.has(u)){const v=e.get(u).texture;return o(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const p=new Ic(v.height);return p.fromEquirectangularTexture(n,u),e.set(u,p),u.addEventListener("dispose",c),o(p.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const g=u.mapping,v=g===Mo||g===yo,p=g===Xs||g===Er;if(v||p){let m=t.get(u);const h=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new Xa(n)),m=v?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const x=u.image;return v&&x&&x.height>0||p&&x&&l(x)?(i===null&&(i=new Xa(n)),m=v?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function o(u,g){return g===Mo?u.mapping=Xs:g===yo&&(u.mapping=Er),u}function l(u){let g=0;const v=6;for(let p=0;p<v;p++)u[p]!==void 0&&g++;return g===v}function c(u){const g=u.target;g.removeEventListener("dispose",c);const v=e.get(g);v!==void 0&&(e.delete(g),v.dispose())}function d(u){const g=u.target;g.removeEventListener("dispose",d);const v=t.get(g);v!==void 0&&(t.delete(g),v.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function T_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&wa("WebGLRenderer: "+i+" extension not supported."),s}}}function A_(n,e,t,i){const s={},r=new WeakMap,a=new FinalizationRegistry(v=>delete s[v]);function o(v){l(v.target)}function l(v){v.index!==null&&e.remove(v.index);for(const m in v.attributes)e.remove(v.attributes[m]);v.removeEventListener("dispose",o),delete s[v.id],a.unregister(v);const p=r.get(v);p&&(e.remove(p),r.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(v,p){return s[p.id]!==void 0||(p.addEventListener("dispose",o),s[p.id]=new WeakRef(p),a.register(p,p.id,p),t.memory.geometries++),p}function d(v){const p=v.attributes;for(const m in p)e.update(p[m],n.ARRAY_BUFFER)}function f(v){const p=v.index,m=v.attributes.position;let h=0;if(m===void 0)return;const x=p!==null?p.array.length:m.array.length/3-1,E=m.count>=65535?vf:_f,b=new E(Math.ceil(x/3)*6,1),A=b.array;if(p!==null){const _=p.array;h=p.version;for(let S=0,D=0;S<x;S+=3){const C=_[S+0],R=_[S+1],U=_[S+2];A[D++]=C,A[D++]=R,A[D++]=R,A[D++]=U,A[D++]=U,A[D++]=C}}else{h=m.version;for(let _=0,S=0;_<x;_+=3){const D=_+0,C=_+1,R=_+2;A[S++]=D,A[S++]=C,A[S++]=C,A[S++]=R,A[S++]=R,A[S++]=D}}b.version=h;const w=r.get(v);w&&e.remove(w),r.set(v,b)}function u(v){const p=r.get(v);if(p){const m=v.index;m!==null&&p.version<m.version&&f(v)}else f(v);return r.get(v)}function g(){for(const v in s){const p=s[v].deref();p!==void 0&&l(p)}}return{get:c,update:d,getWireframeAttribute:u,dispose:g}}function R_(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){n.drawElements(i,u,r,f*a),t.update(u,i,1)}function c(f,u,g){g!==0&&(n.drawElementsInstanced(i,u,r,f*a,g),t.update(u,i,g))}function d(f,u,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=u[m];t.update(p,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function C_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:st("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function P_(n,e,t){const i=new WeakMap,s=new Mt;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let C=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",C)};var g=C;u!==void 0&&u.texture.dispose();const v=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let b=0;v===!0&&(b=1),p===!0&&(b=2),m===!0&&(b=3);let A=o.attributes.position.count*b,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const _=new Float32Array(A*w*4*f),S=new pf(_,A,w,f);S.type=Kn,S.needsUpdate=!0;const D=b*4;for(let R=0;R<f;R++){const U=h[R],z=x[R],P=E[R],V=A*w*4*R;for(let K=0;K<U.count;K++){const H=K*D;v===!0&&(s.fromBufferAttribute(U,K),_[V+H+0]=s.x,_[V+H+1]=s.y,_[V+H+2]=s.z,_[V+H+3]=0),p===!0&&(s.fromBufferAttribute(z,K),_[V+H+4]=s.x,_[V+H+5]=s.y,_[V+H+6]=s.z,_[V+H+7]=0),m===!0&&(s.fromBufferAttribute(P,K),_[V+H+8]=s.x,_[V+H+9]=s.y,_[V+H+10]=s.z,_[V+H+11]=P.itemSize===4?s.w:1)}}u={count:f,texture:S,size:new $e(A,w)},i.set(o,u),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const p=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function L_(n,e,t,i,s){let r=new WeakMap;function a(c){const d=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const g=c.skeleton;r.get(g)!==d&&(g.update(),r.set(g,d))}return u}function o(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const D_={[Yu]:"LINEAR_TONE_MAPPING",[Ku]:"REINHARD_TONE_MAPPING",[Zu]:"CINEON_TONE_MAPPING",[Ju]:"ACES_FILMIC_TONE_MAPPING",[ju]:"AGX_TONE_MAPPING",[ef]:"NEUTRAL_TONE_MAPPING",[Qu]:"CUSTOM_TONE_MAPPING"};function I_(n,e,t,i,s,r){const a=new ni(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const d=new qt;d.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new rt([0,2,0,0,2,0],2));const f=new ym({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Gt(d,f),g=new Tf(-1,1,1,-1,0,1);let v=null,p=null,m=!1,h,x=null,E=[],b=!1;this.setSize=function(A,w){a.setSize(A,w),o!==null&&o.setSize(A,w),l!==null&&l.setSize(A,w);for(let _=0;_<E.length;_++){const S=E[_];S.setSize&&S.setSize(A,w)}},this.setEffects=function(A){E=A,b=E.length>0&&E[0].isRenderPass===!0;const w=a.width,_=a.height;E.length>0&&o===null&&(o=new ni(w,_,{type:si,depthBuffer:!1,stencilBuffer:!1}),l=new ni(w,_,{type:si,depthBuffer:!1,stencilBuffer:!1}));const S=s===!0&&E.some(D=>D.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new Ys(w,_),r===!0&&(c.format=Ni,c.type=qs)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let D=0;D<E.length;D++){const C=E[D];C.setSize&&C.setSize(w,_),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(A,w){if(m||A.toneMapping===gi&&E.length===0)return!1;if(x=w,w!==null){const _=w.width,S=w.height;(a.width!==_||a.height!==S)&&this.setSize(_,S)}return b===!1&&A.setRenderTarget(a),h=A.toneMapping,A.toneMapping=gi,!0},this.hasRenderPass=function(){return b},this.end=function(A,w){A.toneMapping=h,m=!0;let _=a,S=o;for(let D=0;D<E.length;D++){const C=E[D];C.enabled!==!1&&(C.render(A,S,_,w),C.needsSwap!==!1&&(_=S,S=S===o?l:o))}if(v!==A.outputColorSpace||p!==A.toneMapping){v=A.outputColorSpace,p=A.toneMapping,f.defines={},Je.getTransfer(v)===ct&&(f.defines.SRGB_TRANSFER="");const D=D_[p];D&&(f.defines[D]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(x),A.render(u,g),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),d.dispose(),f.dispose()}}const Lf=new en,Df=new Ys(1,1),If=new Mf(1),Nf=new pf,Uf=new Qp,Ff=new Sf,Gd=[],Hd=[],Vd=new Float32Array(16),Wd=new Float32Array(9),$d=new Float32Array(4);function nr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Gd[s];if(r===void 0&&(r=new Float32Array(s),Gd[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ho(n,e){let t=Hd[e];t===void 0&&(t=new Int32Array(e),Hd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function N_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function U_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function F_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function O_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function k_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;$d.set(i),n.uniformMatrix2fv(this.addr,!1,$d),It(t,i)}}function B_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;Wd.set(i),n.uniformMatrix3fv(this.addr,!1,Wd),It(t,i)}}function z_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;Vd.set(i),n.uniformMatrix4fv(this.addr,!1,Vd),It(t,i)}}function G_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function H_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function V_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function W_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function $_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function X_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function q_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function Y_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function po(n){return n.version===0&&(n.compareFunction=ff,n.needsUpdate=!0),n}function K_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=po(Df):r=Lf,t.setTexture2D(e||r,s)}function Z_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Uf,s)}function J_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=po(If):r=Ff,t.setTextureCube(e||r,s)}function Q_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Nf,s)}function j_(n){switch(n){case 5126:return N_;case 35664:return U_;case 35665:return F_;case 35666:return O_;case 35674:return k_;case 35675:return B_;case 35676:return z_;case 5124:case 35670:return G_;case 35667:case 35671:return H_;case 35668:case 35672:return V_;case 35669:case 35673:return W_;case 5125:return $_;case 36294:return X_;case 36295:return q_;case 36296:return Y_;case 35678:case 36198:case 36298:case 36306:case 35682:return K_;case 35679:case 36299:case 36307:return Z_;case 35680:case 36300:case 36308:case 36293:return J_;case 36289:case 36303:case 36311:case 36292:return Q_}}function ev(n,e){n.uniform1fv(this.addr,e)}function tv(n,e){const t=nr(e,this.size,2);n.uniform2fv(this.addr,t)}function nv(n,e){const t=nr(e,this.size,3);n.uniform3fv(this.addr,t)}function iv(n,e){const t=nr(e,this.size,4);n.uniform4fv(this.addr,t)}function sv(n,e){const t=nr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function rv(n,e){const t=nr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function av(n,e){const t=nr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ov(n,e){n.uniform1iv(this.addr,e)}function lv(n,e){n.uniform2iv(this.addr,e)}function cv(n,e){n.uniform3iv(this.addr,e)}function dv(n,e){n.uniform4iv(this.addr,e)}function uv(n,e){n.uniform1uiv(this.addr,e)}function fv(n,e){n.uniform2uiv(this.addr,e)}function hv(n,e){n.uniform3uiv(this.addr,e)}function pv(n,e){n.uniform4uiv(this.addr,e)}function mv(n,e,t){const i=this.cache,s=e.length,r=ho(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=po(Df):a=Lf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function gv(n,e,t){const i=this.cache,s=e.length,r=ho(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Uf,r[a])}function _v(n,e,t){const i=this.cache,s=e.length,r=ho(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=po(If):a=Ff;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function vv(n,e,t){const i=this.cache,s=e.length,r=ho(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Nf,r[a])}function xv(n){switch(n){case 5126:return ev;case 35664:return tv;case 35665:return nv;case 35666:return iv;case 35674:return sv;case 35675:return rv;case 35676:return av;case 5124:case 35670:return ov;case 35667:case 35671:return lv;case 35668:case 35672:return cv;case 35669:case 35673:return dv;case 5125:return uv;case 36294:return fv;case 36295:return hv;case 36296:return pv;case 35678:case 36198:case 36298:case 36306:case 35682:return mv;case 35679:case 36299:case 36307:return gv;case 35680:case 36300:case 36308:case 36293:return _v;case 36289:case 36303:case 36311:case 36292:return vv}}class Sv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=j_(t.type)}}class Mv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xv(t.type)}}class yv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Ko=/(\w+)(\])?(\[|\.)?/g;function Xd(n,e){n.seq.push(e),n.map[e.id]=e}function bv(n,e,t){const i=n.name,s=i.length;for(Ko.lastIndex=0;;){const r=Ko.exec(i),a=Ko.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Xd(t,c===void 0?new Sv(o,n,e):new Mv(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new yv(o),Xd(t,f)),t=f}}}class Ta{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);bv(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function qd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Ev=37297;let wv=0;function Tv(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Yd=new Fe;function Av(n){Je._getMatrix(Yd,Je.workingColorSpace,n);const e=`mat3( ${Yd.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case za:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Kd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Tv(n.getShaderSource(e),o)}else return r}function Rv(n,e){const t=Av(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Cv={[Yu]:"Linear",[Ku]:"Reinhard",[Zu]:"Cineon",[Ju]:"ACESFilmic",[ju]:"AgX",[ef]:"Neutral",[Qu]:"Custom"};function Pv(n,e){const t=Cv[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fa=new O;function Lv(){Je.getLuminanceCoefficients(fa);const n=fa.x.toFixed(4),e=fa.y.toFixed(4),t=fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function Iv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Nv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function hr(n){return n!==""}function Zd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Jd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function $l(n){return n.replace(Uv,Fv)}function Fv(n,e){const t=Ve[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return $l(t)}const Ov=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qd(n){return n.replace(Ov,kv)}function kv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const Bv={[Sa]:"SHADOWMAP_TYPE_PCF",[fr]:"SHADOWMAP_TYPE_VSM"};function zv(n){return Bv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Gv={[Er]:"ENVMAP_MODE_REFRACTION"};function Hv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Gv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Vv={[Sc]:"ENVMAP_BLENDING_MULTIPLY",[Ap]:"ENVMAP_BLENDING_MIX",[Rp]:"ENVMAP_BLENDING_ADD"};function Wv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Vv[n.combine]||"ENVMAP_BLENDING_NONE"}function $v(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=zv(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=Hv(t),f=Wv(t),u=Dv(t),g=Iv(r),v=s.createProgram();let p,m,h=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hr).join(`
`),m.length>0&&(m+=`
`)):(p=[jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),m=[jd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==gi?Pv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Rv("linearToOutputTexel",t.outputColorSpace),Lv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hr).join(`
`)),a=$l(a),a=Zd(a,t),a=Jd(a,t),o=$l(o),o=Zd(o,t),o=Jd(o,t),a=Qd(a),o=Qd(o),t.isRawShaderMaterial!==!0&&(h=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===od?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===od?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=h+p+a,E=h+m+o,b=qd(s,s.VERTEX_SHADER,x),A=qd(s,s.FRAGMENT_SHADER,E);s.attachShader(v,b),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(C){if(n.debug.checkShaderErrors){const R=s.getProgramInfoLog(v)||"",U=s.getShaderInfoLog(b)||"",z=s.getShaderInfoLog(A)||"",P=R.trim(),V=U.trim(),K=z.trim();let H=!0,ie=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,b,A);else{const X=Kd(s,b,"vertex"),ee=Kd(s,A,"fragment");st("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+X+`
`+ee)}else P!==""?Ne("WebGLProgram: Program Info Log:",P):(V===""||K==="")&&(ie=!1);ie&&(C.diagnostics={runnable:H,programLog:P,vertexShader:{log:V,prefix:p},fragmentShader:{log:K,prefix:m}})}s.deleteShader(b),s.deleteShader(A),_=new Ta(s,v),S=Nv(s,v)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(v,Ev)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=A,this}let Xv=0;class qv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Yv(e),t.set(e,i)),i}}class Yv{constructor(e){this.id=Xv++,this.code=e,this.usedTimes=0}}function Kv(n){return n===us||n===Oa||n===ka}function Zv(n,e,t,i,s,r){const a=new mf,o=new qv,l=new Set,c=[],d=new Map,f=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,S,D,C,R,U){const z=C.fog,P=R.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=e.get(_.envMap||V,K),ie=u[_.type];let X=i.precision;_.precision!==null&&(X=i.getMaxPrecision(_.precision),X!==_.precision&&Ne("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));const ee=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,te=ee!==void 0?ee.length:0;let Ee=0;P.morphAttributes.position!==void 0&&(Ee=1),P.morphAttributes.normal!==void 0&&(Ee=2),P.morphAttributes.color!==void 0&&(Ee=3);let Oe,J,_e,Me;if(ie){const me=Vn[ie];Oe=me.vertexShader,J=me.fragmentShader}else{Oe=_.vertexShader,J=_.fragmentShader;const me=o.getVertexShaderStage(_),lt=o.getFragmentShaderStage(_);o.update(_,me,lt),_e=me.id,Me=lt.id}const Ce=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),Be=R.isInstancedMesh===!0,bt=R.isBatchedMesh===!0,Le=!!_.map,ot=!!_.matcap,ut=!!H,Ye=ut&&H.isPMREMTexture===!0,Ht=!!_.aoMap,Rt=!!_.lightMap,rn=!!_.bumpMap&&_.wireframe===!1,xt=!!_.normalMap,kn=!!_.displacementMap,Nt=!!_.emissiveMap,_n=!!_.metalnessMap,vn=!!_.roughnessMap,xn=_.anisotropy>0,N=_.clearcoat>0,Sn=_.diffuseRoughness>0,_t=_.dispersion>0,vt=_.retroreflectivity>0,pe=_.iridescence>0,Ct=_.sheen>0,Pe=_.transmission>0,Ue=xn&&!!_.anisotropyMap,T=N&&!!_.clearcoatMap,M=N&&!!_.clearcoatNormalMap,B=N&&!!_.clearcoatRoughnessMap,se=Sn&&!!_.diffuseRoughnessMap,j=pe&&!!_.iridescenceMap,oe=pe&&!!_.iridescenceThicknessMap,fe=Ct&&!!_.sheenColorMap,Y=Ct&&!!_.sheenRoughnessMap,Z=!!_.specularMap,ce=!!_.specularColorMap,L=!!_.specularIntensityMap,Q=Pe&&!!_.transmissionMap,q=Pe&&!!_.thicknessMap,de=!!_.gradientMap,ae=!!_.alphaMap,le=_.alphaTest>0,Te=!!_.alphaHash,He=!!_.extensions;let re=gi;_.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(re=n.toneMapping);const Ae=Ye?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,ze={shaderID:ie,shaderType:_.type,shaderName:_.name,vertexShader:Oe,fragmentShader:J,defines:_.defines,customVertexShaderID:_e,customFragmentShaderID:Me,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:bt,batchingColor:bt&&R._colorsTexture!==null,instancing:Be,instancingColor:Be&&R.instanceColor!==null,instancingMorph:Be&&R.morphTexture!==null,outputColorSpace:Ce===null?n.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Le,matcap:ot,envMap:ut,envMapMode:ut&&H.mapping,envMapPMREM:Ye,envMapMaxLod:Ye?Ae.length-1:null,envMapSize:Ye?Ae[0].width:null,aoMap:Ht,lightMap:Rt,bumpMap:rn,normalMap:xt,displacementMap:kn,emissiveMap:Nt,normalMapObjectSpace:xt&&_.normalMapType===Lp,normalMapTangentSpace:xt&&_.normalMapType===zl,packedNormalMap:xt&&_.normalMapType===zl&&Kv(_.normalMap.format),metalnessMap:_n,roughnessMap:vn,anisotropy:xn,anisotropyMap:Ue,clearcoat:N,clearcoatMap:T,clearcoatNormalMap:M,clearcoatRoughnessMap:B,diffuseRoughness:Sn,diffuseRoughnessMap:se,dispersion:_t,retroreflection:vt,iridescence:pe,iridescenceMap:j,iridescenceThicknessMap:oe,sheen:Ct,sheenColorMap:fe,sheenRoughnessMap:Y,specularMap:Z,specularColorMap:ce,specularIntensityMap:L,transmission:Pe,transmissionMap:Q,thicknessMap:q,gradientMap:de,opaque:_.transparent===!1&&_.blending===vr&&_.alphaToCoverage===!1,alphaMap:ae,alphaTest:le,alphaHash:Te,combine:_.combine,mapUv:Le&&g(_.map.channel),aoMapUv:Ht&&g(_.aoMap.channel),lightMapUv:Rt&&g(_.lightMap.channel),bumpMapUv:rn&&g(_.bumpMap.channel),normalMapUv:xt&&g(_.normalMap.channel),displacementMapUv:kn&&g(_.displacementMap.channel),emissiveMapUv:Nt&&g(_.emissiveMap.channel),metalnessMapUv:_n&&g(_.metalnessMap.channel),roughnessMapUv:vn&&g(_.roughnessMap.channel),anisotropyMapUv:Ue&&g(_.anisotropyMap.channel),clearcoatMapUv:T&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&g(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&g(_.diffuseRoughnessMap.channel),iridescenceMapUv:j&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Y&&g(_.sheenRoughnessMap.channel),specularMapUv:Z&&g(_.specularMap.channel),specularColorMapUv:ce&&g(_.specularColorMap.channel),specularIntensityMapUv:L&&g(_.specularIntensityMap.channel),transmissionMapUv:Q&&g(_.transmissionMap.channel),thicknessMapUv:q&&g(_.thicknessMap.channel),alphaMapUv:ae&&g(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(xt||xn),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!P.attributes.uv&&(Le||ae),fog:!!z,useFog:_.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&xt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ve,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Ee,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:U.filter(me=>me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:re,decodeVideoTexture:Le&&_.map.isVideoTexture===!0&&Je.getTransfer(_.map.colorSpace)===ct,decodeVideoTextureEmissive:Nt&&_.emissiveMap.isVideoTexture===!0&&Je.getTransfer(_.emissiveMap.colorSpace)===ct,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Xn,flipSided:_.side===ln,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:He&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&_.extensions.multiDraw===!0||bt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function p(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)S.push(D),S.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(m(S,_),h(S,_),S.push(n.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function m(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function h(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){const S=u[_.type];let D;if(S){const C=Vn[S];D=xm.clone(C.uniforms)}else D=_.uniforms;return D}function E(_,S){let D=d.get(S);return D!==void 0?++D.usedTimes:(D=new $v(n,S,_,s),c.push(D),d.set(S,D)),D}function b(_){if(--_.usedTimes===0){const S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function w(){o.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:x,acquireProgram:E,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:w}}function Jv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Qv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function eu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function tu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let g=0;return u.isInstancedMesh&&(g+=2),u.isSkinnedMesh&&(g+=1),g}function o(u,g,v,p,m,h){let x=n[e];return x===void 0?(x={id:u.id,object:u,geometry:g,material:v,materialVariant:a(u),groupOrder:p,renderOrder:u.renderOrder,z:m,group:h},n[e]=x):(x.id=u.id,x.object=u,x.geometry=g,x.material=v,x.materialVariant=a(u),x.groupOrder=p,x.renderOrder=u.renderOrder,x.z=m,x.group=h),e++,x}function l(u,g,v,p,m,h,x){x.reversedDepth===!0&&(m=-m);const E=o(u,g,v,p,m,h);v.transmission>0?i.push(E):v.transparent===!0?s.push(E):t.push(E)}function c(u,g,v,p,m,h){const x=o(u,g,v,p,m,h);v.transmission>0?i.unshift(x):v.transparent===!0?s.unshift(x):t.unshift(x)}function d(u,g){t.length>1&&t.sort(u||Qv),i.length>1&&i.sort(g||eu),s.length>1&&s.sort(g||eu)}function f(){for(let u=e,g=n.length;u<g;u++){const v=n[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:d}}function jv(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new tu,n.set(i,[a])):s>=r.length?(a=new tu,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function ex(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new Ge};break;case"SpotLight":t={position:new O,direction:new O,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function tx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let nx=0;function ix(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function sx(n){const e=new ex,t=tx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const s=new O,r=new gt,a=new gt;function o(c){let d=0,f=0,u=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let g=0,v=0,p=0,m=0,h=0,x=0,E=0,b=0,A=0,w=0,_=0,S=0,D=0,C=0;c.sort(ix);for(let U=0,z=c.length;U<z;U++){const P=c[U],V=P.color,K=P.intensity,H=P.distance;let ie=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===us?ie=P.shadow.map.texture:ie=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=V.r*K,f+=V.g*K,u+=V.b*K;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],K);C++}else if(P.isSunLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ee=P.shadow,te=t.get(P);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),i.sunShadow[v]=te,i.sunShadowMap[v]=ie;const Ee=ee.getViewportCount();for(let Oe=0;Oe<Ee;Oe++)i.sunShadowMatrix[p+Oe]=ee.getMatrix(Oe),i.sunShadowCascade[p+Oe]=ee._cascadeData[Oe];p+=Ee,v++}i.sun[g]=X,g++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ee=P.shadow,te=t.get(P);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,i.directionalShadow[m]=te,i.directionalShadowMap[m]=ie,i.directionalShadowMatrix[m]=P.shadow.matrix,A++}i.directional[m]=X,m++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(V).multiplyScalar(K),X.distance=H,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[x]=X;const ee=P.shadow;if(P.map&&(i.spotLightMap[S]=P.map,S++,ee.updateMatrices(P),P.castShadow&&D++),i.spotLightMatrix[x]=ee.matrix,P.castShadow){const te=t.get(P);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,i.spotShadow[x]=te,i.spotShadowMap[x]=ie,_++}x++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(V).multiplyScalar(K),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[E]=X,E++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const ee=P.shadow,te=t.get(P);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,te.shadowCameraNear=ee.camera.near,te.shadowCameraFar=ee.camera.far,i.pointShadow[h]=te,i.pointShadowMap[h]=ie,i.pointShadowMatrix[h]=P.shadow.matrix,w++}i.point[h]=X,h++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(K),X.groundColor.copy(P.groundColor).multiplyScalar(K),i.hemi[b]=X,b++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=u;const R=i.hash;(R.sunLength!==g||R.directionalLength!==m||R.pointLength!==h||R.spotLength!==x||R.rectAreaLength!==E||R.hemiLength!==b||R.numSunShadows!==v||R.numDirectionalShadows!==A||R.numPointShadows!==w||R.numSpotShadows!==_||R.numSpotMaps!==S||R.numLightProbes!==C)&&(i.sun.length=g,i.directional.length=m,i.spot.length=x,i.rectArea.length=E,i.point.length=h,i.hemi.length=b,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=p,i.sunShadowCascade.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+S-D,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=C,R.sunLength=g,R.directionalLength=m,R.pointLength=h,R.spotLength=x,R.rectAreaLength=E,R.hemiLength=b,R.numSunShadows=v,R.numDirectionalShadows=A,R.numPointShadows=w,R.numSpotShadows=_,R.numSpotMaps=S,R.numLightProbes=C,i.version=nx++)}function l(c,d){let f=0,u=0,g=0,v=0,p=0,m=0;const h=d.matrixWorldInverse;for(let x=0,E=c.length;x<E;x++){const b=c[x];if(b.isSunLight){const A=i.sun[f];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(h),f++}else if(b.isDirectionalLight){const A=i.directional[u];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(h),u++}else if(b.isSpotLight){const A=i.spot[v];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(h),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(h),v++}else if(b.isRectAreaLight){const A=i.rectArea[p];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(h),a.identity(),r.copy(b.matrixWorld),r.premultiply(h),a.extractRotation(r),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),p++}else if(b.isPointLight){const A=i.point[g];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(h),g++}else if(b.isHemisphereLight){const A=i.hemi[m];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(h),m++}}}return{setup:o,setupView:l,state:i}}function nu(n){const e=new sx(n),t=[],i=[],s=[];function r(f){d.camera=f,t.length=0,i.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}function o(f){i.push(f)}function l(){e.setup(t),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function rx(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new nu(n),e.set(s,[o])):r>=a.length?(o=new nu(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ox=`uniform sampler2D shadow_pass;
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
}`,lx=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],cx=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],iu=new gt,cr=new O,Zo=new O;function dx(n,e,t){let i=new Ar;const s=new $e,r=new $e,a=new Mt,o=new bm,l=new Em,c={},d=t.maxTextureSize,f={[ds]:ln,[ln]:ds,[Xn]:Xn},u=new fs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:ax,fragmentShader:ox}),g=u.clone();g.defines.HORIZONTAL_PASS=1;const v=new qt;v.setAttribute("position",new as(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Gt(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sa;let h=this.type;this.render=function(w,_,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===lp&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Sa);const D=n.getRenderTarget(),C=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),U=n.state;U.setBlending(ks),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=h!==this.type;z&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(V=>V.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,V=w.length;P<V;P++){const K=w[P],H=K.shadow;if(H===void 0){Ne("WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ie=H.getFrameExtents();s.multiply(ie),r.copy(H.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ie.x),s.x=r.x*ie.x,H.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ie.y),s.y=r.y*ie.y,H.mapSize.y=r.y));const X=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=X,H.map===null||z===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===fr){if(K.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ni(s.x,s.y,{format:us,type:si,minFilter:on,magFilter:on,generateMipmaps:!1}),H.map.texture.name=K.name+".shadowMap",H.map.depthTexture=new Ys(s.x,s.y,Kn),H.map.depthTexture.name=K.name+".shadowMapDepth",H.map.depthTexture.format=$i,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Xt,H.map.depthTexture.magFilter=Xt}else K.isPointLight?(H.map=new Ic(s.x),H.map.depthTexture=new Mf(s.x,ii)):(H.map=new ni(s.x,s.y),H.map.depthTexture=new Ys(s.x,s.y,ii)),H.map.depthTexture.name=K.name+".shadowMap",H.map.depthTexture.format=$i,this.type===Sa?(H.map.depthTexture.compareFunction=X?uf:df,H.map.depthTexture.minFilter=on,H.map.depthTexture.magFilter=on):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Xt,H.map.depthTexture.magFilter=Xt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);const ee=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();K.isPointLight!==!0&&H.updateMatrices(K,S);const te=H.camera.layers.mask&4294967294?H.camera.layers:S.layers;for(let Ee=0;Ee<ee;Ee++){const Oe=H.getCamera(Ee);if(K.isPointLight){const J=H.camera,_e=H.matrix,Me=K.distance||J.far;Me!==J.far&&(J.far=Me,J.updateProjectionMatrix()),cr.setFromMatrixPosition(K.matrixWorld),J.position.copy(cr),Zo.copy(J.position),Zo.add(lx[Ee]),J.up.copy(cx[Ee]),J.lookAt(Zo),J.updateMatrixWorld(),_e.makeTranslation(-cr.x,-cr.y,-cr.z),iu.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),H._frustum.setFromProjectionMatrix(iu,J.coordinateSystem,J.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,Ee),n.clear();else{Ee===0&&(n.setRenderTarget(H.map),n.clear());const J=H.getViewport(Ee);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),U.viewport(a)}i=H.getFrustum(Ee),b(_,S,Oe,K,te,this.type)}H.isPointLightShadow!==!0&&this.type===fr&&x(H,S),H.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(D,C,R)};function x(w,_){const S=e.update(p);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,g.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,g.needsUpdate=!0),w.mapPass===null?w.mapPass=new ni(s.x,s.y,{format:us,type:si}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(_,null,S,u,p,null),g.uniforms.shadow_pass.value=w.mapPass.texture,g.uniforms.resolution.value.set(w.map.width,w.map.height),g.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(_,null,S,g,p,null)}function E(w,_,S,D){let C=null;const R=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)C=R;else if(C=S.isPointLight===!0?l:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const U=C.uuid,z=_.uuid;let P=c[U];P===void 0&&(P={},c[U]=P);let V=P[z];V===void 0&&(V=C.clone(),P[z]=V,_.addEventListener("dispose",A)),C=V}if(C.visible=_.visible,C.wireframe=_.wireframe,D===fr?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:f[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const U=n.properties.get(C);U.light=S}return C}function b(w,_,S,D,C,R){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===fr)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);const P=e.update(w),V=w.material;if(Array.isArray(V)){const K=P.groups;for(let H=0,ie=K.length;H<ie;H++){const X=K[H],ee=V[X.materialIndex];if(ee&&ee.visible){const te=E(w,ee,D,R);w.onBeforeShadow(n,w,_,S,P,te,X),n.renderBufferDirect(S,null,P,te,w,X),w.onAfterShadow(n,w,_,S,P,te,X)}}}else if(V.visible){const K=E(w,V,D,R);w.onBeforeShadow(n,w,_,S,P,K,null),n.renderBufferDirect(S,null,P,K,w,null),w.onAfterShadow(n,w,_,S,P,K,null)}}const z=w.children;for(let P=0,V=z.length;P<V;P++)b(z[P],_,S,D,C,R)}function A(w){w.target.removeEventListener("dispose",A);for(const S in c){const D=c[S],C=w.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}function ux(n,e){function t(){let L=!1;const Q=new Mt;let q=null;const de=new Mt(0,0,0,0);return{setMask:function(ae){q!==ae&&!L&&(n.colorMask(ae,ae,ae,ae),q=ae)},setLocked:function(ae){L=ae},setClear:function(ae,le,Te,He,re){re===!0&&(ae*=He,le*=He,Te*=He),Q.set(ae,le,Te,He),de.equals(Q)===!1&&(n.clearColor(ae,le,Te,He),de.copy(Q))},reset:function(){L=!1,q=null,de.set(-1,0,0,0)}}}function i(){let L=!1,Q=!1,q=null,de=null,ae=null;return{setReversed:function(le){if(Q!==le){const Te=e.get("EXT_clip_control");le?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),Q=le;const He=ae;ae=null,this.setClear(He)}},getReversed:function(){return Q},setTest:function(le){le?ve(n.DEPTH_TEST):Be(n.DEPTH_TEST)},setMask:function(le){q!==le&&!L&&(n.depthMask(le),q=le)},setFunc:function(le){if(Q&&(le=Hp[le]),de!==le){switch(le){case tl:n.depthFunc(n.NEVER);break;case nl:n.depthFunc(n.ALWAYS);break;case il:n.depthFunc(n.LESS);break;case br:n.depthFunc(n.LEQUAL);break;case sl:n.depthFunc(n.EQUAL);break;case rl:n.depthFunc(n.GEQUAL);break;case al:n.depthFunc(n.GREATER);break;case ol:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=le}},setLocked:function(le){L=le},setClear:function(le){ae!==le&&(ae=le,Q&&(le=1-le),n.clearDepth(le))},reset:function(){L=!1,q=null,de=null,ae=null,Q=!1}}}function s(){let L=!1,Q=null,q=null,de=null,ae=null,le=null,Te=null,He=null,re=null;return{setTest:function(Ae){L||(Ae?ve(n.STENCIL_TEST):Be(n.STENCIL_TEST))},setMask:function(Ae){Q!==Ae&&!L&&(n.stencilMask(Ae),Q=Ae)},setFunc:function(Ae,ze,me){(q!==Ae||de!==ze||ae!==me)&&(n.stencilFunc(Ae,ze,me),q=Ae,de=ze,ae=me)},setOp:function(Ae,ze,me){(le!==Ae||Te!==ze||He!==me)&&(n.stencilOp(Ae,ze,me),le=Ae,Te=ze,He=me)},setLocked:function(Ae){L=Ae},setClear:function(Ae){re!==Ae&&(n.clearStencil(Ae),re=Ae)},reset:function(){L=!1,Q=null,q=null,de=null,ae=null,le=null,Te=null,He=null,re=null}}}const r=new t,a=new i,o=new s;let l={};const c=new WeakMap;let d={},f={},u={},g=new WeakMap,v=[],p=null,m=!1,h=null,x=null,E=null,b=null,A=null,w=null,_=null,S=new Ge(0,0,0),D=0,C=!1,R=null,U=null,z=null,P=null,V=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,ie=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=ie>=1):X.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=ie>=2);let ee=null,te={};const Ee=n.getParameter(n.SCISSOR_BOX),Oe=n.getParameter(n.VIEWPORT),J=new Mt().fromArray(Ee),_e=new Mt().fromArray(Oe);function Me(L,Q,q,de){const ae=new Uint8Array(4),le=n.createTexture();n.bindTexture(L,le),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Te=0;Te<q;Te++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(Q+Te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return le}const Ce={};Ce[n.TEXTURE_2D]=Me(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=Me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[n.TEXTURE_2D_ARRAY]=Me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=Me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ve(n.DEPTH_TEST),a.setFunc(br),rn(!1),xt(id),ve(n.CULL_FACE),Ht(ks);function ve(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function Be(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function bt(L,Q){return u[L]!==Q?(n.bindFramebuffer(L,Q),u[L]=Q,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Q),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function Le(L,Q){let q=v,de=!1;if(L){q=g.get(Q),q===void 0&&(q=[],g.set(Q,q));const ae=L.textures;if(q.length!==ae.length||q[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Te=ae.length;le<Te;le++)q[le]=n.COLOR_ATTACHMENT0+le;q.length=ae.length,de=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,de=!0);de&&n.drawBuffers(q)}function ot(L){return p!==L?(n.useProgram(L),p=L,!0):!1}const ut={[Ls]:n.FUNC_ADD,[dp]:n.FUNC_SUBTRACT,[up]:n.FUNC_REVERSE_SUBTRACT};ut[fp]=n.MIN,ut[hp]=n.MAX;const Ye={[pp]:n.ZERO,[mp]:n.ONE,[gp]:n.SRC_COLOR,[Xu]:n.SRC_ALPHA,[yp]:n.SRC_ALPHA_SATURATE,[Sp]:n.DST_COLOR,[vp]:n.DST_ALPHA,[_p]:n.ONE_MINUS_SRC_COLOR,[qu]:n.ONE_MINUS_SRC_ALPHA,[Mp]:n.ONE_MINUS_DST_COLOR,[xp]:n.ONE_MINUS_DST_ALPHA,[bp]:n.CONSTANT_COLOR,[Ep]:n.ONE_MINUS_CONSTANT_COLOR,[wp]:n.CONSTANT_ALPHA,[Tp]:n.ONE_MINUS_CONSTANT_ALPHA};function Ht(L,Q,q,de,ae,le,Te,He,re,Ae){if(L===ks){m===!0&&(Be(n.BLEND),m=!1);return}if(m===!1&&(ve(n.BLEND),m=!0),L!==cp){if(L!==h||Ae!==C){if((x!==Ls||A!==Ls)&&(n.blendEquation(n.FUNC_ADD),x=Ls,A=Ls),Ae)switch(L){case vr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sd:n.blendFunc(n.ONE,n.ONE);break;case rd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ad:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:st("WebGLState: Invalid blending: ",L);break}else switch(L){case vr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sd:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case rd:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ad:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",L);break}E=null,b=null,w=null,_=null,S.set(0,0,0),D=0,h=L,C=Ae}return}ae=ae||Q,le=le||q,Te=Te||de,(Q!==x||ae!==A)&&(n.blendEquationSeparate(ut[Q],ut[ae]),x=Q,A=ae),(q!==E||de!==b||le!==w||Te!==_)&&(n.blendFuncSeparate(Ye[q],Ye[de],Ye[le],Ye[Te]),E=q,b=de,w=le,_=Te),(He.equals(S)===!1||re!==D)&&(n.blendColor(He.r,He.g,He.b,re),S.copy(He),D=re),h=L,C=!1}function Rt(L,Q){L.side===Xn?Be(n.CULL_FACE):ve(n.CULL_FACE);let q=L.side===ln;Q&&(q=!q),rn(q),L.blending===vr&&L.transparent===!1?Ht(ks):Ht(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const de=L.stencilWrite;o.setTest(de),de&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Nt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Be(n.SAMPLE_ALPHA_TO_COVERAGE)}function rn(L){R!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),R=L)}function xt(L){L!==ap?(ve(n.CULL_FACE),L!==U&&(L===id?n.cullFace(n.BACK):L===op?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Be(n.CULL_FACE),U=L}function kn(L){L!==z&&(H&&n.lineWidth(L),z=L)}function Nt(L,Q,q){L?(ve(n.POLYGON_OFFSET_FILL),(P!==Q||V!==q)&&(P=Q,V=q,a.getReversed()&&(Q=-Q,q=-q),n.polygonOffset(Q,q))):Be(n.POLYGON_OFFSET_FILL)}function _n(L){L?ve(n.SCISSOR_TEST):Be(n.SCISSOR_TEST)}function vn(L){L===void 0&&(L=n.TEXTURE0+K-1),ee!==L&&(n.activeTexture(L),ee=L)}function xn(L,Q,q){q===void 0&&(ee===null?q=n.TEXTURE0+K-1:q=ee);let de=te[q];de===void 0&&(de={type:void 0,texture:void 0},te[q]=de),(de.type!==L||de.texture!==Q)&&(ee!==q&&(n.activeTexture(q),ee=q),n.bindTexture(L,Q||Ce[L]),de.type=L,de.texture=Q)}function N(){const L=te[ee];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Sn(){try{n.compressedTexImage2D(...arguments)}catch(L){st("WebGLState:",L)}}function _t(){try{n.compressedTexImage3D(...arguments)}catch(L){st("WebGLState:",L)}}function vt(){try{n.texSubImage2D(...arguments)}catch(L){st("WebGLState:",L)}}function pe(){try{n.texSubImage3D(...arguments)}catch(L){st("WebGLState:",L)}}function Ct(){try{n.compressedTexSubImage2D(...arguments)}catch(L){st("WebGLState:",L)}}function Pe(){try{n.compressedTexSubImage3D(...arguments)}catch(L){st("WebGLState:",L)}}function Ue(){try{n.texStorage2D(...arguments)}catch(L){st("WebGLState:",L)}}function T(){try{n.texStorage3D(...arguments)}catch(L){st("WebGLState:",L)}}function M(){try{n.texImage2D(...arguments)}catch(L){st("WebGLState:",L)}}function B(){try{n.texImage3D(...arguments)}catch(L){st("WebGLState:",L)}}function se(L){return f[L]!==void 0?f[L]:n.getParameter(L)}function j(L,Q){f[L]!==Q&&(n.pixelStorei(L,Q),f[L]=Q)}function oe(L){J.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),J.copy(L))}function fe(L){_e.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),_e.copy(L))}function Y(L,Q){let q=c.get(Q);q===void 0&&(q=new WeakMap,c.set(Q,q));let de=q.get(L);de===void 0&&(de=n.getUniformBlockIndex(Q,L.name),n.uniformBlockBinding(Q,de,de),q.set(L,de))}function Z(L,Q,q){const ae=c.get(Q).get(L);l[ae]!==q&&(n.bindBufferBase(n.UNIFORM_BUFFER,ae,q),l[ae]=q)}function ce(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},f={},ee=null,te={},u={},l={},g=new WeakMap,v=[],p=null,m=!1,h=null,x=null,E=null,b=null,A=null,w=null,_=null,S=new Ge(0,0,0),D=0,C=!1,R=null,U=null,z=null,P=null,V=null,J.set(0,0,n.canvas.width,n.canvas.height),_e.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ve,disable:Be,bindFramebuffer:bt,drawBuffers:Le,useProgram:ot,setBlending:Ht,setMaterial:Rt,setFlipSided:rn,setCullFace:xt,setLineWidth:kn,setPolygonOffset:Nt,setScissorTest:_n,activeTexture:vn,bindTexture:xn,unbindTexture:N,compressedTexImage2D:Sn,compressedTexImage3D:_t,texImage2D:M,texImage3D:B,pixelStorei:j,getParameter:se,updateUBOMapping:Y,uniformBlockBinding:Z,texStorage2D:Ue,texStorage3D:T,texSubImage2D:vt,texSubImage3D:pe,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Pe,scissor:oe,viewport:fe,reset:ce}}function fx(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,d=new WeakMap,f=new Set;let u;const g=new WeakMap,v=new Set,p=new FinalizationRegistry(T=>v.delete(T));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(T,M){return m?new OffscreenCanvas(T,M):Ga("canvas")}function x(T,M,B){let se=1;const j=Ue(T);if((j.width>B||j.height>B)&&(se=B/Math.max(j.width,j.height)),se<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const oe=Math.floor(se*j.width),fe=Math.floor(se*j.height);u===void 0&&(u=h(oe,fe));const Y=M?h(oe,fe):u;return Y.width=oe,Y.height=fe,Y.getContext("2d").drawImage(T,0,0,oe,fe),Ne("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+oe+"x"+fe+")."),Y}else return"data"in T&&Ne("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function E(T){return T.generateMipmaps}function b(T){n.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(T,M,B,se,j,oe=!1){if(T!==null){if(n[T]!==void 0)return n[T];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let fe;se&&(fe=e.get("EXT_texture_norm16"),fe||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=M;if(M===n.RED&&(B===n.FLOAT&&(Y=n.R32F),B===n.HALF_FLOAT&&(Y=n.R16F),B===n.UNSIGNED_BYTE&&(Y=n.R8),B===n.UNSIGNED_SHORT&&fe&&(Y=fe.R16_EXT),B===n.SHORT&&fe&&(Y=fe.R16_SNORM_EXT)),M===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.R8UI),B===n.UNSIGNED_SHORT&&(Y=n.R16UI),B===n.UNSIGNED_INT&&(Y=n.R32UI),B===n.BYTE&&(Y=n.R8I),B===n.SHORT&&(Y=n.R16I),B===n.INT&&(Y=n.R32I)),M===n.RG&&(B===n.FLOAT&&(Y=n.RG32F),B===n.HALF_FLOAT&&(Y=n.RG16F),B===n.UNSIGNED_BYTE&&(Y=n.RG8),B===n.UNSIGNED_SHORT&&fe&&(Y=fe.RG16_EXT),B===n.SHORT&&fe&&(Y=fe.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RG8UI),B===n.UNSIGNED_SHORT&&(Y=n.RG16UI),B===n.UNSIGNED_INT&&(Y=n.RG32UI),B===n.BYTE&&(Y=n.RG8I),B===n.SHORT&&(Y=n.RG16I),B===n.INT&&(Y=n.RG32I)),M===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),B===n.UNSIGNED_INT&&(Y=n.RGB32UI),B===n.BYTE&&(Y=n.RGB8I),B===n.SHORT&&(Y=n.RGB16I),B===n.INT&&(Y=n.RGB32I)),M===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),B===n.UNSIGNED_INT&&(Y=n.RGBA32UI),B===n.BYTE&&(Y=n.RGBA8I),B===n.SHORT&&(Y=n.RGBA16I),B===n.INT&&(Y=n.RGBA32I)),M===n.RGB&&(B===n.UNSIGNED_SHORT&&fe&&(Y=fe.RGB16_EXT),B===n.SHORT&&fe&&(Y=fe.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),M===n.RGBA){const Z=oe?za:Je.getTransfer(j);B===n.FLOAT&&(Y=n.RGBA32F),B===n.HALF_FLOAT&&(Y=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Y=Z===ct?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&fe&&(Y=fe.RGBA16_EXT),B===n.SHORT&&fe&&(Y=fe.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(T,M){let B;return T?M===null||M===ii||M===qs?B=n.DEPTH24_STENCIL8:M===Kn?B=n.DEPTH32F_STENCIL8:M===wr&&(B=n.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ii||M===qs?B=n.DEPTH_COMPONENT24:M===Kn?B=n.DEPTH_COMPONENT32F:M===wr&&(B=n.DEPTH_COMPONENT16),B}function S(T,M){return E(T)===!0||T.isFramebufferTexture&&T.minFilter!==Xt&&T.minFilter!==on?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function D(T){const M=new WeakRef(T);i.get(T).__ref=M,v.add(M),p.register(T,M,M)}function C(T){const M=i.get(T).__ref;M!==void 0&&(v.delete(M),p.unregister(M))}function R(T){z(T.target)}function U(T){P(T.target)}function z(T){T.removeEventListener("dispose",R),C(T),K(T),T.isVideoTexture&&d.delete(T),T.isHTMLTexture&&f.delete(T)}function P(T){T.removeEventListener("dispose",U),C(T),ie(T)}function V(){for(const T of v){const M=T.deref();M!==void 0&&(M.isRenderTarget===!0?P(M):z(M))}v.clear(),f.clear()}function K(T){const M=i.get(T);if(M.__webglInit===void 0)return;const B=T.source,se=g.get(B);if(se){const j=se[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&H(T),Object.keys(se).length===0&&g.delete(B)}i.remove(T)}function H(T){const M=i.get(T);n.deleteTexture(M.__webglTexture);const B=T.source,se=g.get(B);delete se[M.__cacheKey],a.memory.textures--}function ie(T){const M=i.get(T);M.__depthDisposeCallback&&M.__depthDisposeCallback();const B=T.depthTexture;if(B&&B.renderTarget===T&&z(B),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let oe=0;oe<M.__webglFramebuffer[j].length;oe++)n.deleteFramebuffer(M.__webglFramebuffer[j][oe]);else n.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)n.deleteFramebuffer(M.__webglFramebuffer[j]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const se=T.textures;for(let j=0,oe=se.length;j<oe;j++){const fe=i.get(se[j]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),a.memory.textures--),i.remove(se[j])}i.remove(T)}let X=0;function ee(){X=0}function te(){return X}function Ee(T){X=T}function Oe(){const T=X;return T>=s.maxTextures&&Ne("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,T}function J(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.mipmapsAutoUpdate),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function _e(T,M){const B=i.get(T);if(T.isVideoTexture&&Ct(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){const se=T.image;if(se===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(B,T,M);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+M)}function Me(T,M){const B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){Rt(B,T,M);return}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+M)}function Ce(T,M){const B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){Rt(B,T,M);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+M)}function ve(T,M){const B=i.get(T);if(T.version>0&&B.__version!==T.version){rn(B,T,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+M)}const Be={[ll]:n.REPEAT,[hi]:n.CLAMP_TO_EDGE,[cl]:n.MIRRORED_REPEAT},bt={[Xt]:n.NEAREST,[Cp]:n.NEAREST_MIPMAP_NEAREST,[Gr]:n.NEAREST_MIPMAP_LINEAR,[on]:n.LINEAR,[bo]:n.LINEAR_MIPMAP_NEAREST,[Ii]:n.LINEAR_MIPMAP_LINEAR},Le={[Ip]:n.NEVER,[ff]:n.ALWAYS,[Np]:n.LESS,[df]:n.LEQUAL,[Up]:n.EQUAL,[uf]:n.GEQUAL,[Fp]:n.GREATER,[Op]:n.NOTEQUAL};function ot(T,M){if(M.type===Kn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===on||M.magFilter===bo||M.magFilter===Gr||M.magFilter===Ii||M.minFilter===on||M.minFilter===bo||M.minFilter===Gr||M.minFilter===Ii)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,Be[M.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Be[M.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Be[M.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,bt[M.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,bt[M.minFilter]),M.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Le[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Xt||M.minFilter!==Gr&&M.minFilter!==Ii||M.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ut(T,M){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",R),D(M));const se=M.source;let j=g.get(se);j===void 0&&(j={},g.set(se,j));const oe=J(M);if(oe!==T.__cacheKey){j[oe]===void 0&&(j[oe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),j[oe].usedTimes++;const fe=j[T.__cacheKey];fe!==void 0&&(j[T.__cacheKey].usedTimes--,fe.usedTimes===0&&H(M)),T.__cacheKey=oe,T.__webglTexture=j[oe].texture}return B}function Ye(T,M,B){return Math.floor(Math.floor(T/B)/M)}function Ht(T,M,B,se){const oe=T.updateRanges;if(oe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,B,se,M.data);else{oe.sort((L,Q)=>L.start-Q.start);let fe=0;for(let L=1;L<oe.length;L++){const Q=oe[fe],q=oe[L],de=Q.start+Q.count,ae=Ye(q.start,M.width,4),le=Ye(Q.start,M.width,4);q.start<=de+1&&ae===le&&Ye(q.start+q.count-1,M.width,4)===ae?Q.count=Math.max(Q.count,q.start+q.count-Q.start):(++fe,oe[fe]=q)}oe.length=fe+1;const Y=t.getParameter(n.UNPACK_ROW_LENGTH),Z=t.getParameter(n.UNPACK_SKIP_PIXELS),ce=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let L=0,Q=oe.length;L<Q;L++){const q=oe[L],de=Math.floor(q.start/4),ae=Math.ceil(q.count/4),le=de%M.width,Te=Math.floor(de/M.width),He=ae,re=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,le),t.pixelStorei(n.UNPACK_SKIP_ROWS,Te),t.texSubImage2D(n.TEXTURE_2D,0,le,Te,He,re,B,se,M.data)}T.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Y),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(n.UNPACK_SKIP_ROWS,ce)}}function Rt(T,M,B){let se=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=n.TEXTURE_3D);const j=ut(T,M),oe=M.source;t.bindTexture(se,T.__webglTexture,n.TEXTURE0+B);const fe=i.get(oe);if(oe.version!==fe.__version||j===!0){if(t.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const re=Je.getPrimaries(Je.workingColorSpace),Ae=M.colorSpace===Ci?null:Je.getPrimaries(M.colorSpace),ze=M.colorSpace===Ci||re===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let Z=x(M.image,!1,s.maxTextureSize);Z=Pe(M,Z);const ce=r.convert(M.format,M.colorSpace),L=r.convert(M.type);let Q=w(M.internalFormat,ce,L,M.normalized,M.colorSpace,M.isVideoTexture);ot(se,M);let q;const de=M.mipmaps,ae=M.isVideoTexture!==!0,le=fe.__version===void 0||j===!0,Te=oe.dataReady,He=S(M,Z);if(M.isDepthTexture)Q=_(M.format===Ni,M.type),le&&(ae?t.texStorage2D(n.TEXTURE_2D,1,Q,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,Q,Z.width,Z.height,0,ce,L,null));else if(M.isDataTexture)if(de.length>0){ae&&le&&t.texStorage2D(n.TEXTURE_2D,He,Q,de[0].width,de[0].height);for(let re=0,Ae=de.length;re<Ae;re++)q=de[re],ae?Te&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,q.width,q.height,ce,L,q.data):t.texImage2D(n.TEXTURE_2D,re,Q,q.width,q.height,0,ce,L,q.data);M.generateMipmaps=!1}else ae?(le&&t.texStorage2D(n.TEXTURE_2D,He,Q,Z.width,Z.height),Te&&Ht(M,Z,ce,L)):t.texImage2D(n.TEXTURE_2D,0,Q,Z.width,Z.height,0,ce,L,Z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ae&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,He,Q,de[0].width,de[0].height,Z.depth);for(let re=0,Ae=de.length;re<Ae;re++)if(q=de[re],M.format!==Zn)if(ce!==null)if(ae){if(Te)if(M.layerUpdates.size>0){const ze=Fd(q.width,q.height,M.format,M.type);for(const me of M.layerUpdates){const lt=q.data.subarray(me*ze/q.data.BYTES_PER_ELEMENT,(me+1)*ze/q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,me,q.width,q.height,1,ce,lt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,q.width,q.height,Z.depth,ce,q.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Q,q.width,q.height,Z.depth,0,q.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?Te&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,q.width,q.height,Z.depth,ce,L,q.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Q,q.width,q.height,Z.depth,0,ce,L,q.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ae&&le&&t.texStorage2D(n.TEXTURE_2D,He,Q,de[0].width,de[0].height);for(let re=0,Ae=de.length;re<Ae;re++)q=de[re],M.format!==Zn?ce!==null?ae?Te&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,q.width,q.height,ce,q.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Q,q.width,q.height,0,q.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?Te&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,q.width,q.height,ce,L,q.data):t.texImage2D(n.TEXTURE_2D,re,Q,q.width,q.height,0,ce,L,q.data)}else if(M.isDataArrayTexture)if(ae){if(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,He,Q,Z.width,Z.height,Z.depth),Te)if(M.layerUpdates.size>0){const re=Fd(Z.width,Z.height,M.format,M.type);for(const Ae of M.layerUpdates){const ze=Z.data.subarray(Ae*re/Z.data.BYTES_PER_ELEMENT,(Ae+1)*re/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ae,Z.width,Z.height,1,ce,L,ze)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ce,L,Z.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Q,Z.width,Z.height,Z.depth,0,ce,L,Z.data);else if(M.isData3DTexture)ae?(le&&t.texStorage3D(n.TEXTURE_3D,He,Q,Z.width,Z.height,Z.depth),Te&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ce,L,Z.data)):t.texImage3D(n.TEXTURE_3D,0,Q,Z.width,Z.height,Z.depth,0,ce,L,Z.data);else if(M.isFramebufferTexture){if(le)if(ae)t.texStorage2D(n.TEXTURE_2D,He,Q,Z.width,Z.height);else{let re=Z.width,Ae=Z.height;for(let ze=0;ze<He;ze++)t.texImage2D(n.TEXTURE_2D,ze,Q,re,Ae,0,ce,L,null),re>>=1,Ae>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){const re=n.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),Z.parentNode!==re){re.appendChild(Z),f.add(M),re.onpaint=Ae=>{const ze=Ae.changedElements;for(const me of f)ze.includes(me.image)&&(me.needsUpdate=!0)},re.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Z);else{const ze=n.RGBA,me=n.RGBA,lt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ze,me,lt,Z)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(de.length>0){if(ae&&le){const re=Ue(de[0]);t.texStorage2D(n.TEXTURE_2D,He,Q,re.width,re.height)}for(let re=0,Ae=de.length;re<Ae;re++)q=de[re],ae?Te&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ce,L,q):t.texImage2D(n.TEXTURE_2D,re,Q,ce,L,q);M.generateMipmaps=!1}else if(ae){if(le){const re=Ue(Z);t.texStorage2D(n.TEXTURE_2D,He,Q,re.width,re.height)}Te&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,L,Z)}else t.texImage2D(n.TEXTURE_2D,0,Q,ce,L,Z);E(M)&&M.mipmapsAutoUpdate===!0&&b(se),fe.__version=oe.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function rn(T,M,B){if(M.image.length!==6)return;const se=ut(T,M),j=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+B);const oe=i.get(j);if(j.version!==oe.__version||se===!0){t.activeTexture(n.TEXTURE0+B);const fe=Je.getPrimaries(Je.workingColorSpace),Y=M.colorSpace===Ci?null:Je.getPrimaries(M.colorSpace),Z=M.colorSpace===Ci||fe===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const ce=M.isCompressedTexture||M.image[0].isCompressedTexture,L=M.image[0]&&M.image[0].isDataTexture,Q=[];for(let me=0;me<6;me++)!ce&&!L?Q[me]=x(M.image[me],!0,s.maxCubemapSize):Q[me]=L?M.image[me].image:M.image[me],Q[me]=Pe(M,Q[me]);const q=Q[0],de=r.convert(M.format,M.colorSpace),ae=r.convert(M.type);let le=w(M.internalFormat,de,ae,M.normalized,M.colorSpace);const Te=M.isVideoTexture!==!0,He=oe.__version===void 0||se===!0,re=j.dataReady;let Ae=S(M,q);ot(n.TEXTURE_CUBE_MAP,M);let ze;if(M.isDepthTexture){if(le=_(M.format===Ni,M.type),He)if(Te)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,le,q.width,q.height);else for(let me=0;me<6;me++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,le,q.width,q.height,0,de,ae,null)}else if(ce){Te&&He&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,le,q.width,q.height);for(let me=0;me<6;me++){ze=Q[me].mipmaps;for(let lt=0;lt<ze.length;lt++){const Ut=ze[lt];M.format!==Zn?de!==null?Te?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt,0,0,Ut.width,Ut.height,de,Ut.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt,le,Ut.width,Ut.height,0,Ut.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt,0,0,Ut.width,Ut.height,de,ae,Ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt,le,Ut.width,Ut.height,0,de,ae,Ut.data)}}}else{if(ze=M.mipmaps,Te&&He){ze.length>0&&Ae++;const me=Ue(Q[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,le,me.width,me.height)}for(let me=0;me<6;me++)if(L){Te?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Q[me].width,Q[me].height,de,ae,Q[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,le,Q[me].width,Q[me].height,0,de,ae,Q[me].data);for(let lt=0;lt<ze.length;lt++){const xi=ze[lt].image[me].image;Te?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt+1,0,0,xi.width,xi.height,de,ae,xi.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt+1,le,xi.width,xi.height,0,de,ae,xi.data)}}else{Te?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,de,ae,Q[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,le,de,ae,Q[me]);for(let lt=0;lt<ze.length;lt++){const Ut=ze[lt];Te?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt+1,0,0,de,ae,Ut.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt+1,le,de,ae,Ut.image[me])}}}E(M)&&M.mipmapsAutoUpdate===!0&&b(n.TEXTURE_CUBE_MAP),oe.__version=j.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function xt(T,M,B,se,j,oe){const fe=r.convert(B.format,B.colorSpace),Y=r.convert(B.type),Z=w(B.internalFormat,fe,Y,B.normalized,B.colorSpace),ce=i.get(M),L=i.get(B);if(L.__renderTarget=M,!ce.__hasExternalTextures){const Q=Math.max(1,M.width>>oe),q=Math.max(1,M.height>>oe);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,oe,Z,Q,q,M.depth,0,fe,Y,null):t.texImage2D(j,oe,Z,Q,q,0,fe,Y,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),pe(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,j,L.__webglTexture,0,vt(M)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,j,L.__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function kn(T,M,B){if(n.bindRenderbuffer(n.RENDERBUFFER,T),M.depthBuffer){const se=M.depthTexture,j=se&&se.isDepthTexture?se.type:null,oe=_(M.stencilBuffer,j),fe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;pe(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt(M),oe,M.width,M.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt(M),oe,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,oe,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,T)}else{const se=M.textures;for(let j=0;j<se.length;j++){const oe=se[j],fe=r.convert(oe.format,oe.colorSpace),Y=r.convert(oe.type),Z=w(oe.internalFormat,fe,Y,oe.normalized,oe.colorSpace);pe(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt(M),Z,M.width,M.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt(M),Z,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Z,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Nt(T,M,B){const se=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=i.get(M.depthTexture);j.__renderTarget=M;const oe=se?M.depthTexture.image[0]:M.depthTexture.image;(!j.__webglTexture||oe.width!==M.width||oe.height!==M.height)&&(oe.width=M.width,oe.height=M.height,M.depthTexture.needsUpdate=!0),se?ve(M.depthTexture,0):_e(M.depthTexture,0);const fe=j.__webglTexture,Y=vt(M),Z=se?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,ce=M.depthTexture.format===Ni?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===$i)pe(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,Z,fe,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,ce,Z,fe,0);else if(M.depthTexture.format===Ni)pe(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,Z,fe,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,ce,Z,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _n(T){const M=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const se=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),se){const j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,se.removeEventListener("dispose",j)};se.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=se}if(T.depthTexture&&!M.__autoAllocateDepthBuffer)if(B)for(let se=0;se<6;se++)Nt(M.__webglFramebuffer[se],T,se);else T.texture.mipmaps.length>0?Nt(M.__webglFramebuffer[0],T,0):Nt(M.__webglFramebuffer,T,0);else if(B){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]===void 0)M.__webglDepthbuffer[se]=n.createRenderbuffer(),kn(M.__webglDepthbuffer[se],T,!1);else{const j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,oe)}}else if(T.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),kn(M.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,oe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function vn(T,M,B){const se=i.get(T);M!==void 0&&xt(se.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&_n(T)}function xn(T){const M=T.texture,B=i.get(T),se=i.get(M);T.addEventListener("dispose",U),D(T);const j=T.textures,oe=T.isWebGLCubeRenderTarget===!0,fe=j.length>1;if(fe||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=M.version,a.memory.textures++),oe){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(M.mipmaps.length>0){B.__webglFramebuffer[Y]=[];for(let Z=0;Z<M.mipmaps.length;Z++)B.__webglFramebuffer[Y][Z]=n.createFramebuffer()}else B.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(M.mipmaps.length>0){B.__webglFramebuffer=[];for(let Y=0;Y<M.mipmaps.length;Y++)B.__webglFramebuffer[Y]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(fe)for(let Y=0,Z=j.length;Y<Z;Y++){const ce=i.get(j[Y]);ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&pe(T)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<j.length;Y++){const Z=j[Y];B.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);const ce=r.convert(Z.format,Z.colorSpace),L=r.convert(Z.type),Q=w(Z.internalFormat,ce,L,Z.normalized,Z.colorSpace,T.isXRRenderTarget===!0),q=vt(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,q,Q,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),kn(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),ot(n.TEXTURE_CUBE_MAP,M);for(let Y=0;Y<6;Y++)if(M.mipmaps.length>0)for(let Z=0;Z<M.mipmaps.length;Z++)xt(B.__webglFramebuffer[Y][Z],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Z);else xt(B.__webglFramebuffer[Y],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);E(M)?b(n.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(fe){for(let Y=0,Z=j.length;Y<Z;Y++){const ce=j[Y],L=i.get(ce);let Q=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Q=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,L.__webglTexture),ot(Q,ce),xt(B.__webglFramebuffer,T,ce,n.COLOR_ATTACHMENT0+Y,Q,0),E(ce)&&b(Q)}t.unbindTexture()}else{let Y=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Y=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Y,se.__webglTexture),ot(Y,M),M.mipmaps.length>0)for(let Z=0;Z<M.mipmaps.length;Z++)xt(B.__webglFramebuffer[Z],T,M,n.COLOR_ATTACHMENT0,Y,Z);else xt(B.__webglFramebuffer,T,M,n.COLOR_ATTACHMENT0,Y,0);E(M)?b(Y):M.mipmaps.length>0&&n.texParameteri(Y,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}T.depthBuffer&&_n(T)}function N(T){const M=T.textures;for(let B=0,se=M.length;B<se;B++){const j=M[B];if(E(j)&&j.mipmapsAutoUpdate===!0){const oe=A(T),fe=i.get(j).__webglTexture;t.bindTexture(oe,fe),b(oe),t.unbindTexture()}}}const Sn=[];function _t(T){if(T.samples>0){if(pe(T)===!1){const M=T.textures,B=T.width,se=T.height;let j=n.COLOR_BUFFER_BIT;const oe=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(T),Y=M.length>1;if(Y)for(let ce=0;ce<M.length;ce++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ce=0;ce<M.length;ce++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[ce]);const L=i.get(M[ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,L,0)}n.blitFramebuffer(0,0,B,se,0,0,B,se,j,n.NEAREST),l===!0&&(Sn.length=0,Sn.push(n.COLOR_ATTACHMENT0+ce),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&Sn.push(oe),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Sn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let ce=0;ce<M.length;ce++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,fe.__webglColorRenderbuffer[ce]);const L=i.get(M[ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,L,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){const M=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function vt(T){return Math.min(s.maxSamples,T.samples)}function pe(T){const M=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ct(T){const M=a.render.frame;d.get(T)!==M&&(d.set(T,M),T.update())}function Pe(T,M){const B=T.colorSpace,se=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Ba&&B!==Ci&&(Je.getTransfer(B)===ct?(se!==Zn||j!==pn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",B)),M}function Ue(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Oe,this.resetTextureUnits=ee,this.getTextureUnits=te,this.setTextureUnits=Ee,this.setTexture2D=_e,this.setTexture2DArray=Me,this.setTexture3D=Ce,this.setTextureCube=ve,this.rebindTextures=vn,this.setupRenderTarget=xn,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=_n,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=pe,this.dispose=V}function hx(n,e){function t(i,s=Ci){let r;const a=Je.getTransfer(s);if(i===pn)return n.UNSIGNED_BYTE;if(i===yc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===bc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===rf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===af)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===nf)return n.BYTE;if(i===sf)return n.SHORT;if(i===wr)return n.UNSIGNED_SHORT;if(i===Mc)return n.INT;if(i===ii)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===si)return n.HALF_FLOAT;if(i===of)return n.ALPHA;if(i===lf)return n.RGB;if(i===Zn)return n.RGBA;if(i===$i)return n.DEPTH_COMPONENT;if(i===Ni)return n.DEPTH_STENCIL;if(i===cf)return n.RED;if(i===Ec)return n.RED_INTEGER;if(i===us)return n.RG;if(i===wc)return n.RG_INTEGER;if(i===Tc)return n.RGBA_INTEGER;if(i===Ma||i===ya||i===ba||i===Ea)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ma)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ma)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dl||i===ul||i===fl||i===hl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ul)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pl||i===ml||i===gl||i===_l||i===vl||i===Oa||i===xl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===pl||i===ml)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===gl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===_l)return r.COMPRESSED_R11_EAC;if(i===vl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Oa)return r.COMPRESSED_RG11_EAC;if(i===xl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Sl||i===Ml||i===yl||i===bl||i===El||i===wl||i===Tl||i===Al||i===Rl||i===Cl||i===Pl||i===Ll||i===Dl||i===Il)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Sl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ml)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===El)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Al)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ll)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Il)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nl||i===Ul||i===Fl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Nl)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ol||i===kl||i===ka||i===Bl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ol)return r.COMPRESSED_RED_RGTC1_EXT;if(i===kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const px=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mx=`
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

}`;class gx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new yf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new fs({vertexShader:px,fragmentShader:mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gt(new Ks(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _x extends gs{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,u=null,g=null,v=null;const p=typeof XRWebGLBinding<"u",m=new gx,h={},x=t.getContextAttributes();let E=null,b=null;const A=[],w=[],_=new $e;let S=null,D=null;const C=new Ln;C.viewport=new Mt;const R=new Ln;R.viewport=new Mt;const U=[C,R],z=new Cm;let P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let _e=A[J];return _e===void 0&&(_e=new Do,A[J]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(J){let _e=A[J];return _e===void 0&&(_e=new Do,A[J]=_e),_e.getGripSpace()},this.getHand=function(J){let _e=A[J];return _e===void 0&&(_e=new Do,A[J]=_e),_e.getHandSpace()};function K(J){const _e=w.indexOf(J.inputSource);if(_e===-1)return;const Me=A[_e];Me!==void 0&&(Me.update(J.inputSource,J.frame,c||a),Me.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",ie);for(let J=0;J<A.length;J++){const _e=w[J];_e!==null&&(w[J]=null,A[J].disconnect(_e))}P=null,V=null,m.reset();for(const J in h)delete h[J];if(e.setRenderTarget(E),g=null,u=null,f=null,s=null,b=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),D!==null){const J=D.camera;J.fov=D.fov,J.zoom=D.zoom,J.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:g},this.getBinding=function(){return f===null&&p&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",H),s.addEventListener("inputsourceschange",ie),x.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),p&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ce=null,ve=null;x.depth&&(ve=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=x.stencil?Ni:$i,Ce=x.stencil?qs:ii);const Be={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Be),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new ni(u.textureWidth,u.textureHeight,{format:Zn,type:pn,depthTexture:new Ys(u.textureWidth,u.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Me={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),b=new ni(g.framebufferWidth,g.framebufferHeight,{format:Zn,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Oe.setContext(s),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(J){for(let _e=0;_e<J.removed.length;_e++){const Me=J.removed[_e],Ce=w.indexOf(Me);Ce>=0&&(w[Ce]=null,A[Ce].disconnect(Me))}for(let _e=0;_e<J.added.length;_e++){const Me=J.added[_e];let Ce=w.indexOf(Me);if(Ce===-1){for(let Be=0;Be<A.length;Be++)if(Be>=w.length){w.push(Me),Ce=Be;break}else if(w[Be]===null){w[Be]=Me,Ce=Be;break}if(Ce===-1)break}const ve=A[Ce];ve&&ve.connect(Me)}}function X(J,_e){_e===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(_e.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let _e=J.near,Me=J.far;m.texture!==null&&(m.depthNear>0&&(_e=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),z.near=R.near=C.near=_e,z.far=R.far=C.far=Me,(P!==z.near||V!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),P=z.near,V=z.far),z.layers.mask=J.layers.mask|6,C.layers.mask=z.layers.mask&-5,R.layers.mask=z.layers.mask&-3;const Ce=J.parent,ve=z.cameras;X(z,Ce);for(let Be=0;Be<ve.length;Be++)X(ve[Be],Ce);z.projectionMatrix.copy(C.projectionMatrix),z.projectionMatrixInverse.copy(C.projectionMatrixInverse),D===null&&J.isPerspectiveCamera&&(D={camera:J,fov:J.fov,zoom:J.zoom}),ee(J,z,Ce)};function ee(J,_e,Me){Me===null?J.matrix.copy(_e.matrixWorld):(J.matrix.copy(Me.matrixWorld),J.matrix.invert(),J.matrix.multiply(_e.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(_e.projectionMatrix),J.projectionMatrixInverse.copy(_e.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Gl*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&g===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(J){return h[J]};let te=null;function Ee(J,_e){if(d=_e.getViewerPose(c||a),v=_e,d!==null){const Me=d.views;g!==null&&(e.setRenderTargetFramebuffer(b,g.framebuffer),e.setRenderTarget(b));let Ce=!1;Me.length!==z.cameras.length&&(z.cameras.length=0,Ce=!0);for(let Le=0;Le<Me.length;Le++){const ot=Me[Le];let ut=null;if(g!==null)ut=g.getViewport(ot);else{const Ht=f.getViewSubImage(u,ot);ut=Ht.viewport,Le===0&&(e.setRenderTargetTextures(b,Ht.colorTexture,Ht.depthStencilTexture),e.setRenderTarget(b))}let Ye=U[Le];Ye===void 0&&(Ye=new Ln,Ye.layers.enable(Le),Ye.viewport=new Mt,U[Le]=Ye),Ye.matrix.fromArray(ot.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(ot.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(ut.x,ut.y,ut.width,ut.height),Le===0&&(z.matrix.copy(Ye.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ce===!0&&z.cameras.push(Ye)}const ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&p){f=i.getBinding();const Le=f.getDepthInformation(Me[0]);Le&&Le.isValid&&Le.texture&&m.init(Le,s.renderState)}if(ve&&ve.includes("camera-access")&&p){e.state.unbindTexture(),f=i.getBinding();for(let Le=0;Le<Me.length;Le++){const ot=Me[Le].camera;if(ot){let ut=h[ot];ut||(ut=new yf,h[ot]=ut);const Ye=f.getCameraImage(ot);ut.sourceTexture=Ye}}}}for(let Me=0;Me<A.length;Me++){const Ce=w[Me],ve=A[Me];Ce!==null&&ve!==void 0&&ve.update(Ce,_e,c||a)}te&&te(J,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),v=null}const Oe=new Af;Oe.setAnimationLoop(Ee),this.setAnimationLoop=function(J){te=J},this.dispose=function(){}}}const vx=new gt,Of=new Fe;Of.set(-1,0,0,0,1,0,0,0,1);function xx(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,bf(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,x,E,b){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(m,h):h.isMeshLambertMaterial?(r(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(m,h),f(m,h)):h.isMeshPhongMaterial?(r(m,h),d(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(m,h),u(m,h),h.isMeshPhysicalMaterial&&g(m,h,b)):h.isMeshMatcapMaterial?(r(m,h),v(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),p(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,x,E):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===ln&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===ln&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const x=e.get(h),E=x.envMap,b=x.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(vx.makeRotationFromEuler(b)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Of),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,x,E){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*x,m.scale.value=E*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function u(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function g(m,h,x){m.ior.value=h.ior,h.diffuseRoughness>0&&(m.diffuseRoughness.value=h.diffuseRoughness,h.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=h.diffuseRoughnessMap,t(h.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ln&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.retroreflectivity>0&&(m.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=h.iridescenceThicknessMaximum,h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function p(m,h){const x=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Sx(n,e,t,i){let s={},r={};function a(x,E){const b=E.program;i.uniformBlockBinding(x,b,s[x.id])}function o(x,E){let b=s[x.id];b===void 0&&(v(x),b=l(x),s[x.id]=b,x.addEventListener("dispose",m));const A=E.program;i.updateUBOMapping(x,A);const w=e.render.frame;r[x.id]!==w&&(c(x),r[x.id]=w)}function l(x){const E=n.createBuffer(),b=x.__size,A=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,b,A),n.bindBuffer(n.UNIFORM_BUFFER,null),E}function c(x){const E=s[x.id],b=x.uniforms,A=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let w=0,_=b.length;w<_;w++){const S=b[w];if(Array.isArray(S))for(let D=0,C=S.length;D<C;D++)d(S[D],w,D,A);else d(S,w,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,E,b,A){if(u(x,E,b,A)===!0){const w=x.__offset,_=x.value;if(Array.isArray(_)){let S=0;for(let D=0;D<_.length;D++){const C=_[D],R=p(C,!0);f(C,x.__data,S),S+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,x.__data)}}function f(x,E,b){typeof x=="number"||typeof x=="boolean"?E[b]=x:x.isMatrix3?(E[b]=x.elements[0],E[b+1]=x.elements[1],E[b+2]=x.elements[2],E[b+3]=0,E[b+4]=x.elements[3],E[b+5]=x.elements[4],E[b+6]=x.elements[5],E[b+7]=0,E[b+8]=x.elements[6],E[b+9]=x.elements[7],E[b+10]=x.elements[8],E[b+11]=0):ArrayBuffer.isView(x)?E.set(x.subarray(0,E.length-b),b):x.toArray(E,b)}function u(x,E,b,A){const w=x.value,_=E+"_"+b;if(Array.isArray(w)){A[_]===void 0&&(A[_]=[]);const S=A[_];let D=!1;for(let C=0;C<w.length;C++)g(w[C],S,C)===!0&&(D=!0);return D}return g(w,A,_)}function g(x,E,b){if(E[b]===void 0)return typeof x=="number"||typeof x=="boolean"?E[b]=x:ArrayBuffer.isView(x)?E[b]=x.slice():E[b]=x.clone(),!0;{const A=E[b];if(typeof x=="number"||typeof x=="boolean"){if(A!==x)return E[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(A.equals(x)===!1)return A.copy(x),!0}}return!1}function v(x){const E=x.uniforms;let b=0;const A=16;for(let _=0,S=E.length;_<S;_++){const D=Array.isArray(E[_])?E[_]:[E[_]];for(let C=0,R=D.length;C<R;C++){const U=D[C],z=Array.isArray(U.value)?U.value:[U.value],P=Array.isArray(E[_])||Array.isArray(U.value);let V=b;for(let H=0,ie=z.length;H<ie;H++){const X=z[H],ee=p(X,P),te=b%A,Ee=te%ee.boundary,Oe=te+Ee;b+=Ee,Oe!==0&&A-Oe<ee.storage&&(b+=A-Oe),H===0&&(V=b),b+=ee.storage}const K=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new K((b-V)/Float32Array.BYTES_PER_ELEMENT),U.__offset=V}}const w=b%A;return w>0&&(b+=A-w),x.__size=b,x.__cache={},this}function p(x,E){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=16,b.storage=48):x.isMatrix4?(b.boundary=16,b.storage=64):x.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",x),E===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(x){const E=x.target;E.removeEventListener("dispose",m),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function h(){for(const x in s)n.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:o,dispose:h}}const Mx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zn=null;function yx(){return zn===null&&(zn=new pm(Mx,16,16,us,si),zn.name="DFG_LUT",zn.minFilter=on,zn.magFilter=on,zn.wrapS=hi,zn.wrapT=hi,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}class bx{constructor(e={}){const{canvas:t=zp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:g=pn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const p=g,m=new Set([Tc,wc,Ec]),h=new Set([pn,ii,wr,qs,yc,bc]),x=new Uint32Array(4),E=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]};let A=null,w=null;const _=[],S=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let R=!1,U=null,z=null,P=null,V=null;this._outputColorSpace=hn;let K=0,H=0,ie=null,X=-1,ee=null;const te=new Mt,Ee=new Mt;let Oe=null;const J=new Ge(0);let _e=0,Me=t.width,Ce=t.height,ve=1,Be=null,bt=null;const Le=new Mt(0,0,Me,Ce),ot=new Mt(0,0,Me,Ce);let ut=!1;const Ye=new Ar,Ht=new Pc;let Rt=!1,rn=!1;const xt=new gt,kn=new O,Nt=new Mt,_n={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vn=!1;function xn(){return ie===null?ve:1}let N=i;function Sn(y,I){return t.getContext(y,I)}let _t,vt,pe,Ct,Pe,Ue,T,M,B,se,j,oe,fe,Y,Z,ce,L,Q,q,de,ae,le,Te;try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xc}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",me,!1),N===null){const I="webgl2";if(N=Sn(I,y),N===null)throw Sn(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(y){throw t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",me,!1),st("WebGLRenderer: "+y.message),y}function He(){_t=new T_(N),_t.init(),ae=new hx(N,_t),vt=new m_(N,_t,e,ae),pe=new ux(N,_t),vt.reversedDepthBuffer&&u&&pe.buffers.depth.setReversed(!0),z=N.createFramebuffer(),P=N.createFramebuffer(),V=N.createFramebuffer(),Ct=new C_(N),Pe=new Jv,Ue=new fx(N,_t,pe,Pe,vt,ae,Ct),T=new w_(C),M=new Lm(N),le=new h_(N,M),B=new A_(N,M,Ct,le),se=new L_(N,B,M,le,Ct),Q=new P_(N,vt,Ue),Z=new g_(Pe),j=new Zv(C,T,_t,vt,le,Z),oe=new xx(C,Pe),fe=new jv,Y=new rx(_t),L=new f_(C,T,pe,se,v,l),ce=new dx(C,se,vt),Te=new Sx(N,Ct,vt,pe),q=new p_(N,_t,Ct),de=new R_(N,_t,Ct),Ct.programs=j.programs,C.capabilities=vt,C.extensions=_t,C.properties=Pe,C.renderLists=fe,C.shadowMap=ce,C.state=pe,C.info=Ct}p!==pn&&(D=new I_(p,t.width,t.height,o,s,r));const re=new _x(C,N);this.xr=re,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=_t.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=_t.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(y){y!==void 0&&(ve=y,this.setSize(Me,Ce,!1))},this.getSize=function(y){return y.set(Me,Ce)},this.setSize=function(y,I,W=!0){if(re.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=y,Ce=I,t.width=Math.floor(y*ve),t.height=Math.floor(I*ve),W===!0&&(t.style.width=y+"px",t.style.height=I+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(Me*ve,Ce*ve).floor()},this.setDrawingBufferSize=function(y,I,W){Me=y,Ce=I,ve=W,t.width=Math.floor(y*W),t.height=Math.floor(I*W),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(p===pn){st("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(te)},this.getViewport=function(y){return y.copy(Le)},this.setViewport=function(y,I,W,k){y.isVector4?Le.set(y.x,y.y,y.z,y.w):Le.set(y,I,W,k),pe.viewport(te.copy(Le).multiplyScalar(xn()).round())},this.getScissor=function(y){return y.copy(ot)},this.setScissor=function(y,I,W,k){y.isVector4?ot.set(y.x,y.y,y.z,y.w):ot.set(y,I,W,k),pe.scissor(Ee.copy(ot).multiplyScalar(xn()).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(y){pe.setScissorTest(ut=y)},this.setOpaqueSort=function(y){Be=y},this.setTransparentSort=function(y){bt=y},this.getClearColor=function(y){return y.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,W=!0){let k=0;if(y){let G=!1;if(ie!==null){const he=ie.texture.format;G=m.has(he)}if(G){const he=ie.texture.type,Se=h.has(he),ue=L.getClearColor(),xe=L.getClearAlpha(),we=ue.r,ke=ue.g,Ke=ue.b;Se?(x[0]=we,x[1]=ke,x[2]=Ke,x[3]=xe,N.clearBufferuiv(N.COLOR,0,x)):(E[0]=we,E[1]=ke,E[2]=Ke,E[3]=xe,N.clearBufferiv(N.COLOR,0,E))}else k|=N.COLOR_BUFFER_BIT}I&&(k|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),U=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",me,!1),L.dispose(),fe.dispose(),Y.dispose(),Ue.dispose(),Pe.dispose(),T.dispose(),se.dispose(),B.dispose(),le.dispose(),Te.dispose(),j.dispose(),re.dispose(),re.removeEventListener("sessionstart",Vc),re.removeEventListener("sessionend",Wc),Zi.stop()};function Ae(y){y.preventDefault(),cd("WebGLRenderer: Context Lost."),R=!0}function ze(){cd("WebGLRenderer: Context Restored."),R=!1;const y=Ct.autoReset,I=ce.enabled,W=ce.autoUpdate,k=ce.needsUpdate,G=ce.type;He(),Ct.autoReset=y,ce.enabled=I,ce.autoUpdate=W,ce.needsUpdate=k,ce.type=G}function me(y){st("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function lt(y){const I=y.target;I.removeEventListener("dispose",lt),Ut(I)}function Ut(y){xi(y),Pe.remove(y)}function xi(y){const I=Pe.get(y).programs;I!==void 0&&(I.forEach(function(W){j.releaseProgram(W)}),y.isShaderMaterial&&j.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,W,k,G,he){I===null&&(I=_n);const Se=G.isMesh&&G.matrixWorld.determinantAffine()<0,ue=mh(y,I,W,k,G);pe.setMaterial(k,Se);let xe=W.index,we=1;if(k.wireframe===!0){if(xe=B.getWireframeAttribute(W),xe===void 0)return;we=2}const ke=W.drawRange,Ke=W.attributes.position;let ye=ke.start*we,Ze=(ke.start+ke.count)*we;he!==null&&(ye=Math.max(ye,he.start*we),Ze=Math.min(Ze,(he.start+he.count)*we)),xe!==null?(ye=Math.max(ye,0),Ze=Math.min(Ze,xe.count)):Ke!=null&&(ye=Math.max(ye,0),Ze=Math.min(Ze,Ke.count));const Et=Ze-ye;if(Et<0||Et===1/0)return;le.setup(G,k,ue,W,xe);let mt,ft=q;if(xe!==null&&(mt=M.get(xe),ft=de,ft.setIndex(mt)),G.isMesh)k.wireframe===!0?(pe.setLineWidth(k.wireframeLinewidth*xn()),ft.setMode(N.LINES)):ft.setMode(N.TRIANGLES);else if(G.isLine){let Yt=k.linewidth;Yt===void 0&&(Yt=1),pe.setLineWidth(Yt*xn()),G.isLineSegments?ft.setMode(N.LINES):G.isLineLoop?ft.setMode(N.LINE_LOOP):ft.setMode(N.LINE_STRIP)}else G.isPoints?ft.setMode(N.POINTS):G.isSprite&&ft.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(_t.get("WEBGL_multi_draw"))ft.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Yt=G._multiDrawStarts,be=G._multiDrawCounts,tn=G._multiDrawCount,it=xe?M.get(xe).bytesPerElement:1,Ji=Pe.get(k).currentProgram.getUniforms();for(let Kt=0;Kt<tn;Kt++)Ji.setValue(N,"_gl_DrawID",Kt),ft.render(Yt[Kt]/it,be[Kt])}else if(G.isInstancedMesh)ft.renderInstances(ye,Et,G.count);else if(W.isInstancedBufferGeometry){const Yt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,be=Math.min(W.instanceCount,Yt);ft.renderInstances(ye,Et,be)}else ft.render(ye,Et)};function Hc(y,I,W,k){U!==null&&y.isNodeMaterial&&U.setObject(k,y),Rt===!0&&Z.setState(y,W,!1),y.transparent===!0&&y.side===Xn&&y.forceSinglePass===!1?(y.side=ln,y.needsUpdate=!0,ir(y,I,k),y.side=ds,y.needsUpdate=!0,ir(y,I,k),y.side=Xn):ir(y,I,k)}this.compile=function(y,I,W=null){W===null&&(W=y),U!==null&&U.renderStart(y,I,W),w=Y.get(W),w.init(I),S.push(w),W.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),y!==W&&y.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights(),U!==null&&U.updateLights(w.state.lightsArray),rn=this.localClippingEnabled,Rt=Z.init(this.clippingPlanes,rn),Rt===!0&&Z.setGlobalState(this.clippingPlanes,I),U!==null&&ce.render(w.state.shadowsArray,W,I);const k=new Set;return y.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const he=G.material;if(he)if(Array.isArray(he))for(let Se=0;Se<he.length;Se++){const ue=he[Se];Hc(ue,W,I,G),k.add(ue)}else Hc(he,W,I,G),k.add(he)}),w=S.pop(),U!==null&&U.renderEnd(),k},this.compileAsync=function(y,I,W=null){const k=this.compile(y,I,W);return new Promise(G=>{function he(){if(k.forEach(function(Se){const xe=Pe.get(Se).currentProgram;(xe===void 0||xe.isReady())&&k.delete(Se)}),k.size===0){G(y);return}setTimeout(he,10)}_t.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let _o=null;function hh(y){_o&&_o(y)}function Vc(){Zi.stop()}function Wc(){Zi.start()}const Zi=new Af;Zi.setAnimationLoop(hh),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(y){_o=y,re.setAnimationLoop(y),y===null?Zi.stop():Zi.start()},re.addEventListener("sessionstart",Vc),re.addEventListener("sessionend",Wc),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;U!==null&&U.renderStart(y,I);const W=re.enabled===!0&&re.isPresenting===!0,k=D!==null&&(ie===null||W)&&D.begin(C,ie);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(I),I=re.getCamera()),y.isScene===!0&&y.onBeforeRender(C,y,I,ie),w=Y.get(y,S.length),w.init(I),w.state.textureUnits=Ue.getTextureUnits(),S.push(w),xt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?Ht.setFromArrayCamera(I):Ye.setFromProjectionMatrix(xt,In,I.reversedDepth),rn=this.localClippingEnabled,Rt=Z.init(this.clippingPlanes,rn),A=fe.get(y,_.length),A.init(),_.push(A),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){const Se=C.xr.getDepthSensingMesh();Se!==null&&vo(Se,I,-1/0,C.sortObjects)}vo(y,I,0,C.sortObjects),A.finish(),U!==null&&U.updateLights(w.state.lightsArray),C.sortObjects===!0&&A.sort(Be,bt),vn=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,vn&&L.addToRenderList(A,y),this.info.autoReset===!0&&this.info.reset(),Rt===!0&&Z.beginShadows();const G=w.state.shadowsArray;if(ce.render(G,y,I),Rt===!0&&Z.endShadows(),(k&&D.hasRenderPass())===!1){const Se=A.opaque,ue=A.transmissive;if(w.setupLights(),I.isArrayCamera){const xe=I.cameras;if(ue.length>0)for(let we=0,ke=xe.length;we<ke;we++){const Ke=xe[we];Xc(Se,ue,y,Ke)}vn&&L.render(y);for(let we=0,ke=xe.length;we<ke;we++){const Ke=xe[we];$c(A,y,Ke,Ke.viewport)}}else ue.length>0&&Xc(Se,ue,y,I),vn&&L.render(y),$c(A,y,I)}ie!==null&&H===0&&(Ue.updateMultisampleRenderTarget(ie),Ue.updateRenderTargetMipmap(ie)),k&&D.end(C),y.isScene===!0&&y.onAfterRender(C,y,I),le.resetDefaultState(),X=-1,ee=null,S.pop(),S.length>0?(w=S[S.length-1],Ue.setTextureUnits(w.state.textureUnits),Rt===!0&&Z.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,U!==null&&U.renderEnd()};function vo(y,I,W,k){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)w.pushLight(y),y.castShadow&&w.pushShadow(y);else if(y.isSprite){const Se=I.isArrayCamera?Ht:Ye;if(!y.frustumCulled||y.intersectsFrustum(Se)){k&&Nt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(xt);const ue=se.update(y),xe=y.material;xe.visible&&A.push(y,ue,xe,W,Nt.z,null,I)}}else if(y.isMesh||y.isLine||y.isPoints){const Se=I.isArrayCamera?Ht:Ye;if(!y.frustumCulled||y.intersectsFrustum(Se)){const ue=se.update(y),xe=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Nt.copy(y.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Nt.copy(ue.boundingSphere.center)),Nt.applyMatrix4(y.matrixWorld).applyMatrix4(xt)),Array.isArray(xe)){const we=ue.groups;for(let ke=0,Ke=we.length;ke<Ke;ke++){const ye=we[ke],Ze=xe[ye.materialIndex];Ze&&Ze.visible&&A.push(y,ue,Ze,W,Nt.z,ye,I)}}else xe.visible&&A.push(y,ue,xe,W,Nt.z,null,I)}}}const he=y.children;for(let Se=0,ue=he.length;Se<ue;Se++)vo(he[Se],I,W,k)}function $c(y,I,W,k){const{opaque:G,transmissive:he,transparent:Se}=y;w.setupLightsView(W),Rt===!0&&Z.setGlobalState(C.clippingPlanes,W),k&&pe.viewport(te.copy(k)),G.length>0&&kr(G,I,W),he.length>0&&kr(he,I,W),Se.length>0&&kr(Se,I,W),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Xc(y,I,W,k){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){const ye=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new ni(1,1,{generateMipmaps:!0,type:ye?si:pn,minFilter:Ii,samples:Math.max(4,vt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const he=w.state.transmissionRenderTarget[k.id],Se=k.viewport||te;he.setSize(Se.z*C.transmissionResolutionScale,Se.w*C.transmissionResolutionScale);const ue=C.getRenderTarget(),xe=C.getActiveCubeFace(),we=C.getActiveMipmapLevel();C.setRenderTarget(he),C.getClearColor(J),_e=C.getClearAlpha(),_e<1&&C.setClearColor(16777215,.5),C.clear(),vn&&L.render(W);const ke=C.toneMapping;C.toneMapping=gi;const Ke=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),Rt===!0&&Z.setGlobalState(C.clippingPlanes,k),kr(y,W,k),Ue.updateMultisampleRenderTarget(he),Ue.updateRenderTargetMipmap(he),_t.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Ze=0,Et=I.length;Ze<Et;Ze++){const mt=I[Ze],{object:ft,geometry:Yt,material:be,group:tn}=mt;if(be.side===Xn&&ft.layers.test(k.layers)){const it=be.side;be.side=ln,be.needsUpdate=!0,qc(ft,W,k,Yt,be,tn),be.side=it,be.needsUpdate=!0,ye=!0}}ye===!0&&(Ue.updateMultisampleRenderTarget(he),Ue.updateRenderTargetMipmap(he))}C.setRenderTarget(ue,xe,we),C.setClearColor(J,_e),Ke!==void 0&&(k.viewport=Ke),C.toneMapping=ke}function kr(y,I,W){const k=I.isScene===!0?I.overrideMaterial:null;for(let G=0,he=y.length;G<he;G++){const Se=y[G],{object:ue,geometry:xe,group:we}=Se;let ke=Se.material;ke.allowOverride===!0&&k!==null&&(ke=k),ue.layers.test(W.layers)&&qc(ue,I,W,xe,ke,we)}}function qc(y,I,W,k,G,he){U!==null&&G.isNodeMaterial&&U.setObject(y,G),y.onBeforeRender(C,I,W,k,G,he),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),G.onBeforeRender(C,I,W,k,y,he),G.transparent===!0&&G.side===Xn&&G.forceSinglePass===!1?(G.side=ln,G.needsUpdate=!0,C.renderBufferDirect(W,I,k,G,y,he),G.side=ds,G.needsUpdate=!0,C.renderBufferDirect(W,I,k,G,y,he),G.side=Xn):C.renderBufferDirect(W,I,k,G,y,he),y.onAfterRender(C,I,W,k,G,he)}function Yc(y){let I=0;for(const W of y)W.texture!==null&&I++;return I}function ir(y,I,W){I.isScene!==!0&&(I=_n);const k=Pe.get(y),G=w.state.lights,he=w.state.shadowsArray,Se=G.state.version,ue=j.getParameters(y,G.state,he,I,W,w.state.lightProbeGridArray),xe=j.getProgramCacheKey(ue);let we=k.programs;k.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,k.fog=I.fog;const ke=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;k.envMap=T.get(y.envMap||k.environment,ke),k.envMapRotation=k.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,we===void 0&&(y.addEventListener("dispose",lt),we=new Map,k.programs=we,k.programVariants=new Map);let Ke=we.get(xe);if(Ke!==void 0){if(k.currentProgram===Ke&&k.lightsStateVersion===Se)return Zc(y,ue),Ke}else ue.uniforms=j.getUniforms(y),U!==null&&y.isNodeMaterial&&U.build(y,W,ue),y.onBeforeCompile(ue,C),Ke=j.acquireProgram(ue,xe),we.set(xe,Ke),k.uniforms=ue.uniforms;const ye=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ye.clippingPlanes=Z.uniform),Zc(y,ue),k.needsLights=_h(y),k.lightsStateVersion=Se,k.needsLights&&(ye.ambientLightColor.value=G.state.ambient,ye.lightProbe.value=G.state.probe,ye.sunLights.value=G.state.sun,ye.sunLightShadows.value=G.state.sunShadow,ye.directionalLights.value=G.state.directional,ye.directionalLightShadows.value=G.state.directionalShadow,ye.spotLights.value=G.state.spot,ye.spotLightShadows.value=G.state.spotShadow,ye.rectAreaLights.value=G.state.rectArea,ye.ltc_1.value=G.state.rectAreaLTC1,ye.ltc_2.value=G.state.rectAreaLTC2,ye.pointLights.value=G.state.point,ye.pointLightShadows.value=G.state.pointShadow,ye.hemisphereLights.value=G.state.hemi,ye.sunShadowMatrix.value=G.state.sunShadowMatrix,ye.sunShadowCascade.value=G.state.sunShadowCascade,ye.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ye.spotLightMatrix.value=G.state.spotLightMatrix,ye.spotLightMap.value=G.state.spotLightMap,ye.pointShadowMatrix.value=G.state.pointShadowMatrix),k.numLightProbeGrids=Yc(w.state.lightProbeGridArray),k.currentProgram=Ke,k.uniformsList=null,Ke}function ph(y,I,W,k,G){const he=Pe.get(y),Se=he.currentProgram.id+","+k+","+G;let ue=he.programVariants.get(Se);return ue===void 0?(ue=ir(y,I,W),he.programVariants.set(Se,ue)):(he.currentProgram=ue,he.uniformsList=null,he.outputColorSpace=k,he.toneMapping=G),ue}function Kc(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=Ta.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Zc(y,I){const W=Pe.get(y);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.batchingColor=I.batchingColor,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function mh(y,I,W,k,G){I.isScene!==!0&&(I=_n),Ue.resetTextureUnits();const he=I.fog,Se=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?I.environment:null,ue=ie===null?C.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Je.workingColorSpace,xe=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,we=T.get(k.envMap||Se,xe),ke=k.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ke=!!W.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),ye=!!W.morphAttributes.position,Ze=!!W.morphAttributes.normal,Et=!!W.morphAttributes.color;let mt=gi;k.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(mt=C.toneMapping);const ft=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Yt=ft!==void 0?ft.length:0,be=Pe.get(k),tn=w.state.lights;if(Rt===!0&&(rn===!0||y!==ee)){const St=y===ee&&k.id===X;Z.setState(k,y,St)}let it=!1,Ji=!1;k.version===be.__version?be.needsLights&&be.lightsStateVersion!==tn.state.version||G.isBatchedMesh&&be.batching===!1||!G.isBatchedMesh&&be.batching===!0||G.isBatchedMesh&&be.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&be.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&be.instancing===!1||!G.isInstancedMesh&&be.instancing===!0||G.isSkinnedMesh&&be.skinning===!1||!G.isSkinnedMesh&&be.skinning===!0||G.isInstancedMesh&&be.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&be.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&be.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&be.instancingMorph===!1&&G.morphTexture!==null||be.envMap!==we||k.fog===!0&&be.fog!==he||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Z.numPlanes||be.numIntersection!==Z.numIntersection)||be.vertexAlphas!==ke||be.vertexTangents!==Ke||be.morphTargets!==ye||be.morphNormals!==Ze||be.morphColors!==Et||be.morphTargetsCount!==Yt||be.numLightProbeGrids!==Yc(w.state.lightProbeGridArray)?it=!0:(be.outputColorSpace!==ue||be.toneMapping!==mt)&&(Ji=!0):(it=!0,be.__version=k.version);let Kt=be.currentProgram;(it===!0||Ji===!0)&&(Kt=Ji===!0?ph(k,I,G,ue,mt):ir(k,I,G),U&&k.isNodeMaterial&&U.onUpdateProgram(k,Kt,be));let Br=!1,Si=!1,Qi=!1;const tt=Kt.getUniforms(),Vt=be.uniforms;if(pe.useProgram(Kt.program)&&(Br=!0,Si=!0,Qi=!0),k.id!==X&&(X=k.id,Si=!0),Br||ee!==y){pe.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),tt.setValue(N,"projectionMatrix",y.projectionMatrix),tt.setValue(N,"viewMatrix",y.matrixWorldInverse);const Ft=tt.map.cameraPosition;Ft!==void 0&&Ft.setValue(N,kn.setFromMatrixPosition(y.matrixWorld)),vt.logarithmicDepthBuffer&&tt.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&tt.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),ee!==y&&(ee=y,Si=!0,Qi=!0)}if(be.needsLights&&(tn.state.sunShadowMap.length>0&&tt.setValue(N,"sunShadowMap",tn.state.sunShadowMap,Ue),tn.state.directionalShadowMap.length>0&&tt.setValue(N,"directionalShadowMap",tn.state.directionalShadowMap,Ue),tn.state.spotShadowMap.length>0&&tt.setValue(N,"spotShadowMap",tn.state.spotShadowMap,Ue),tn.state.pointShadowMap.length>0&&tt.setValue(N,"pointShadowMap",tn.state.pointShadowMap,Ue)),G.isSkinnedMesh){tt.setOptional(N,G,"bindMatrix"),tt.setOptional(N,G,"bindMatrixInverse");const St=G.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),tt.setValue(N,"boneTexture",St.boneTexture,Ue))}G.isBatchedMesh&&(tt.setOptional(N,G,"batchingTexture"),tt.setValue(N,"batchingTexture",G._matricesTexture,Ue),tt.setOptional(N,G,"batchingIdTexture"),tt.setValue(N,"batchingIdTexture",G._indirectTexture,Ue),tt.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&tt.setValue(N,"batchingColorTexture",G._colorsTexture,Ue));const wn=W.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&Q.update(G,W,Kt),(Si||be.receiveShadow!==G.receiveShadow)&&(be.receiveShadow=G.receiveShadow,tt.setValue(N,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&I.environment!==null&&(Vt.envMapIntensity.value=I.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=yx()),Si){if(tt.setValue(N,"toneMappingExposure",C.toneMappingExposure),be.needsLights&&gh(Vt,Qi),he&&k.fog===!0&&oe.refreshFogUniforms(Vt,he),oe.refreshMaterialUniforms(Vt,k,ve,Ce,w.state.transmissionRenderTarget[y.id]),be.needsLights&&be.numLightProbeGrids>0){const St=b;let Ft=0;for(const ai of w.state.lightProbeGridArray)ai.texture!==null&&(St.textures[Ft]=ai.texture,St.min[Ft]=ai.boundingBox.min,St.max[Ft]=ai.boundingBox.max,St.resolution[Ft]=ai.resolution,Ft++);for(const ai in St)St[ai].length=Ft;Vt.probesSH.value=St.textures,Vt.probesMin.value=St.min,Vt.probesMax.value=St.max,Vt.probesResolution.value=St.resolution}Ta.upload(N,Kc(be),Vt,Ue)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ta.upload(N,Kc(be),Vt,Ue),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&tt.setValue(N,"center",G.center),tt.setValue(N,"modelViewMatrix",G.modelViewMatrix),tt.setValue(N,"normalMatrix",G.normalMatrix),tt.setValue(N,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){const St=k.uniformsGroups;for(let Ft=0,ai=St.length;Ft<ai;Ft++){const Qc=St[Ft];Te.update(Qc,Kt),Te.bind(Qc,Kt)}}return Kt}function gh(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.sunLights.needsUpdate=I,y.sunLightShadows.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function _h(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(y,I,W){const k=Pe.get(y);k.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Pe.get(y.texture).__webglTexture=I,Pe.get(y.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:W,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){const W=Pe.get(y);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,W=0){ie=y,K=I,H=W;let k=null,G=!1,he=!1;if(y){const ue=Pe.get(y);if(ue.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(N.FRAMEBUFFER,ue.__webglFramebuffer),te.copy(y.viewport),Ee.copy(y.scissor),Oe=y.scissorTest,pe.viewport(te),pe.scissor(Ee),pe.setScissorTest(Oe),X=-1;return}else if(ue.__webglFramebuffer===void 0)Ue.setupRenderTarget(y);else if(ue.__hasExternalTextures)Ue.rebindTextures(y,Pe.get(y.texture).__webglTexture,Pe.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const ke=y.depthTexture;if(ue.__boundDepthTexture!==ke){if(ke!==null&&Pe.has(ke)&&(y.width!==ke.image.width||y.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(y)}}const xe=y.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(he=!0);const we=Pe.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(we[I])?k=we[I][W]:k=we[I],G=!0):y.samples>0&&Ue.useMultisampledRTT(y)===!1?k=Pe.get(y).__webglMultisampledFramebuffer:Array.isArray(we)?k=we[W]:k=we,te.copy(y.viewport),Ee.copy(y.scissor),Oe=y.scissorTest}else te.copy(Le).multiplyScalar(ve).floor(),Ee.copy(ot).multiplyScalar(ve).floor(),Oe=ut;if(W!==0&&(k=z),pe.bindFramebuffer(N.FRAMEBUFFER,k)&&pe.drawBuffers(y,k),pe.viewport(te),pe.scissor(Ee),pe.setScissorTest(Oe),G){const ue=Pe.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,ue.__webglTexture,W)}else if(he){const ue=I;for(let xe=0;xe<y.textures.length;xe++){const we=Pe.get(y.textures[xe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+xe,we.__webglTexture,W,ue)}}else if(y!==null&&W!==0){const ue=Pe.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ue.__webglTexture,W)}X=-1};function Jc(y){const I=Pe.get(y);return(I.__readFormat!==y.format||I.__readType!==y.type)&&(I.__readFormat=y.format,I.__readType=y.type,I.__formatReadable=vt.textureFormatReadable(y.format),I.__typeReadable=vt.textureTypeReadable(y.type)),I}this.readRenderTargetPixels=function(y,I,W,k,G,he,Se,ue=0){if(!(y&&y.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Pe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(xe=xe[Se],Array.isArray(xe)&&(xe=xe[0])),xe){pe.bindFramebuffer(N.FRAMEBUFFER,xe);try{const we=y.textures[ue],ke=we.format,Ke=we.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ue);const ye=Jc(we);if(ye.__formatReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ye.__typeReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-k&&W>=0&&W<=y.height-G&&N.readPixels(I,W,k,G,ae.convert(ke),ae.convert(Ke),he)}finally{const we=ie!==null?Pe.get(ie).__webglFramebuffer:null;pe.bindFramebuffer(N.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(y,I,W,k,G,he,Se,ue=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Pe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(xe=xe[Se],Array.isArray(xe)&&(xe=xe[0])),xe)if(I>=0&&I<=y.width-k&&W>=0&&W<=y.height-G){pe.bindFramebuffer(N.FRAMEBUFFER,xe);const we=y.textures[ue],ke=we.format,Ke=we.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ue);const ye=Jc(we);if(ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ze),N.bufferData(N.PIXEL_PACK_BUFFER,he.byteLength,N.STREAM_READ),N.readPixels(I,W,k,G,ae.convert(ke),ae.convert(Ke),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const Et=ie!==null?Pe.get(ie).__webglFramebuffer:null;pe.bindFramebuffer(N.FRAMEBUFFER,Et);const mt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Gp(N,mt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ze),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,he),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Ze),N.deleteSync(mt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,W=0){const k=Math.pow(2,-W),G=Math.floor(y.image.width*k),he=Math.floor(y.image.height*k),Se=I!==null?I.x:0,ue=I!==null?I.y:0;Ue.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,Se,ue,G,he),pe.unbindTexture()},this.copyTextureToTexture=function(y,I,W=null,k=null,G=0,he=0){let Se,ue,xe,we,ke,Ke,ye,Ze,Et;const mt=y.isCompressedTexture?y.mipmaps[he]:y.image;if(W!==null)Se=W.max.x-W.min.x,ue=W.max.y-W.min.y,xe=W.isBox3?W.max.z-W.min.z:1,we=W.min.x,ke=W.min.y,Ke=W.isBox3?W.min.z:0;else{const tt=Math.pow(2,-G);Se=Math.floor(mt.width*tt),ue=Math.floor(mt.height*tt),y.isDataArrayTexture?xe=mt.depth:y.isData3DTexture?xe=Math.floor(mt.depth*tt):xe=1,we=0,ke=0,Ke=0}k!==null?(ye=k.x,Ze=k.y,Et=k.z):(ye=0,Ze=0,Et=0);const ft=ae.convert(I.format),Yt=ae.convert(I.type);let be;I.isData3DTexture?(Ue.setTexture3D(I,0),be=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Ue.setTexture2DArray(I,0),be=N.TEXTURE_2D_ARRAY):(Ue.setTexture2D(I,0),be=N.TEXTURE_2D),pe.activeTexture(N.TEXTURE0),pe.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),pe.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),pe.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const tn=pe.getParameter(N.UNPACK_ROW_LENGTH),it=pe.getParameter(N.UNPACK_IMAGE_HEIGHT),Ji=pe.getParameter(N.UNPACK_SKIP_PIXELS),Kt=pe.getParameter(N.UNPACK_SKIP_ROWS),Br=pe.getParameter(N.UNPACK_SKIP_IMAGES);pe.pixelStorei(N.UNPACK_ROW_LENGTH,mt.width),pe.pixelStorei(N.UNPACK_IMAGE_HEIGHT,mt.height),pe.pixelStorei(N.UNPACK_SKIP_PIXELS,we),pe.pixelStorei(N.UNPACK_SKIP_ROWS,ke),pe.pixelStorei(N.UNPACK_SKIP_IMAGES,Ke);const Si=y.isDataArrayTexture||y.isData3DTexture,Qi=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){const tt=Pe.get(y),Vt=Pe.get(I),wn=Pe.get(tt.__renderTarget),St=Pe.get(Vt.__renderTarget);pe.bindFramebuffer(N.READ_FRAMEBUFFER,wn.__webglFramebuffer),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Ft=0;Ft<xe;Ft++)Si&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pe.get(y).__webglTexture,G,Ke+Ft),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pe.get(I).__webglTexture,he,Et+Ft)),N.blitFramebuffer(we,ke,we+Se,ke+ue,ye,Ze,ye+Se,Ze+ue,N.DEPTH_BUFFER_BIT,N.NEAREST);pe.bindFramebuffer(N.READ_FRAMEBUFFER,null),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||y.isRenderTargetTexture||Pe.has(y)){const tt=Pe.get(y),Vt=Pe.get(I);pe.bindFramebuffer(N.READ_FRAMEBUFFER,P),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,V);for(let wn=0;wn<xe;wn++)Si?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,tt.__webglTexture,G,Ke+wn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,tt.__webglTexture,G),Qi?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Vt.__webglTexture,he,Et+wn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Vt.__webglTexture,he),G!==0?N.blitFramebuffer(we,ke,we+Se,ke+ue,ye,Ze,ye+Se,Ze+ue,N.COLOR_BUFFER_BIT,N.NEAREST):Qi?N.copyTexSubImage3D(be,he,ye,Ze,Et+wn,we,ke,Se,ue):N.copyTexSubImage2D(be,he,ye,Ze,we,ke,Se,ue);pe.bindFramebuffer(N.READ_FRAMEBUFFER,null),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Qi?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(be,he,ye,Ze,Et,Se,ue,xe,ft,Yt,mt.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(be,he,ye,Ze,Et,Se,ue,xe,ft,mt.data):N.texSubImage3D(be,he,ye,Ze,Et,Se,ue,xe,ft,Yt,mt):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,he,ye,Ze,Se,ue,ft,Yt,mt.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,he,ye,Ze,mt.width,mt.height,ft,mt.data):N.texSubImage2D(N.TEXTURE_2D,he,ye,Ze,Se,ue,ft,Yt,mt);pe.pixelStorei(N.UNPACK_ROW_LENGTH,tn),pe.pixelStorei(N.UNPACK_IMAGE_HEIGHT,it),pe.pixelStorei(N.UNPACK_SKIP_PIXELS,Ji),pe.pixelStorei(N.UNPACK_SKIP_ROWS,Kt),pe.pixelStorei(N.UNPACK_SKIP_IMAGES,Br),he===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&N.generateMipmap(be),pe.unbindTexture()},this.initRenderTarget=function(y){Pe.get(y).__webglFramebuffer===void 0&&Ue.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ue.setTextureCube(y,0):y.isData3DTexture?Ue.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ue.setTexture2DArray(y,0):Ue.setTexture2D(y,0),pe.unbindTexture()},this.resetState=function(){K=0,H=0,ie=null,pe.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const Aa=[],Xl=[],ql=52*Math.PI/180,kf=30,On=Math.sin(ql),Bf="#8f95a6",Gs="#56617c",jt="#f1ead9",Ui="#1d2335",zf="#e6dcc6",Hn="#e8bd55",pi=n=>n.citadel?5:n.kind==="station"?3.3:[2.7,3.5,4.5][n.size],Ex=n=>{const e=pi(n);return n.kind==="planet"?e*2.5:e*.5+e*(n.citadel?3.4:1.5)},qa=n=>{const e=pi(n);return n.kind==="planet"?e*1.5:e*.5+e*.55},wx=4.2,Yl=[["#d9c7a0","#b09a74","#efe2c2"],["#93a5b3","#6c7e8e","#b9c7d0"],["#93b08c","#6d8b69","#b7ceac"],["#cc9379","#a56e58","#e3b7a2"],["#cfdcdf","#a2b5ba","#eef5f5"]],Gf={mine:"#a8835a",barracks:"#dd7a63",shield:"#bfe3ff",refinery:"#e3c565",lab:"#7fb2dc",foundry:"#dd9a7a",silo:"#d98a8a",post:"#c9b3e6",bay:"#e3c565"};function Fi(n,e){if(e.owner===$||n.vis[e.id]===2)return{tier:"live",owner:e.owner,drones:e.drones};const t=n.intel[e.id];return t.snap?{tier:"stale",owner:t.snap.owner,drones:t.snap.drones}:t.seen>=1?{tier:"detected",owner:-1,drones:0}:{tier:"hidden",owner:-1,drones:0}}let pr=null,mn,Ai,ss=null,mr,Ra,Kl=0,su=-1,Is,xr,Sr,Pi=null,Zl="";const Ns=new Map,Us=new Map,an=320,Fs=.5;let Jl=0,Ql=0;const Jo=new O,Ie=(n,e=0)=>{const t=new Ge(n);return e&&t.lerp(new Ge(Gs),e),new Dc({color:t,flatShading:!0})},Nn=(n,e=1)=>new Ha({color:n,transparent:e<1,opacity:e,depthWrite:e>=1});function fi(n){n.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(s=>s.dispose()):i&&i.dispose()}),n.removeFromParent()}function Nc(n,e,t,i,s=0,r=Math.PI*2,a=1){const o=new Gt(new Lc(n,e,48,1,s,r),Nn(t,a));return o.rotation.x=-Math.PI/2,o.position.y=i,o}const Re=(n,e,t=0,i=0,s=0)=>{const r=new Gt(n,e);return r.position.set(t,i,s),r};function Tx(){const n=document.getElementById("gl");pr=new bx({canvas:n,antialias:!0}),mn=new am,mn.background=new Ge("#2a3350"),Ai=new Ln(kf,1,1,4e3),mn.add(new wm("#fff4e0","#3d4668",1.5));const e=new Rm("#fff0d8",2.2);e.position.set(-.7,1,.45),mn.add(e);const t=[];for(let s=0;s<96;s++)t.push(new O(Math.cos(s/96*Math.PI*2),0,Math.sin(s/96*Math.PI*2)));const i=new qt().setFromPoints(t);Is=new Ad(i,new Hl({color:jt,transparent:!0,opacity:.55})),xr=new Ad(i,new Hl({color:jt,transparent:!0,opacity:.22})),Sr=Nc(1,1.1,jt,.12),mn.add(Is,xr,Sr)}function Ax(n){for(const f of Ns.values())fi(f.grp);for(const f of Us.values())fi(f.grp);Ns.clear(),Us.clear(),Pi&&(fi(Pi),Pi=null,Zl="");for(const f of mn.children.filter(u=>u.userData.world))fi(f);let e=n.seed|0;const t=()=>{e=e+1831565813|0;let f=e;return f=Math.imul(f^f>>>15,f|1),f^=f+Math.imul(f^f>>>7,f|61),((f^f>>>14)>>>0)/4294967296},i=[];for(let f=0;f<1400;f++)i.push(t()*(n.w+1600)-800,-150-t()*500,t()*(n.h+1600)-800);const s=new qt;s.setAttribute("position",new rt(i,3));const r=new _m(s,new xf({color:jt,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:.8}));r.userData.world=!0,mn.add(r);const a=["#5f7fa8","#8a6fa0","#b9786a","#5f9c94","#a88f6a"],o=document.createElement("canvas");o.width=o.height=128;const l=o.getContext("2d"),c=l.createRadialGradient(64,64,0,64,64,64);c.addColorStop(0,"rgba(255,255,255,1)"),c.addColorStop(.5,"rgba(255,255,255,0.45)"),c.addColorStop(1,"rgba(255,255,255,0)"),l.fillStyle=c,l.fillRect(0,0,128,128);const d=new Pd(o);for(let f=0;f<18;f++){const u=140+t()*260,g=new Gt(new Ks(u*2,u*2),new Ha({map:d,color:a[Math.floor(t()*a.length)],transparent:!0,opacity:.3,depthWrite:!1}));g.rotation.x=-Math.PI/2,g.position.set(t()*(n.w+600)-300,-220-t()*200,t()*(n.h+600)-300),g.userData.world=!0,mn.add(g)}mr=document.createElement("canvas"),mr.width=Math.round((n.w+an*2)*Fs),mr.height=Math.round((n.h+an*2)*Fs),Ra=new Pd(mr),Ra.colorSpace=hn,ss=new Gt(new Ks(n.w+an*2,n.h+an*2),new Ha({map:Ra,transparent:!0,depthWrite:!1})),ss.rotation.x=-Math.PI/2,ss.position.set(n.w/2,-.2,n.h/2),ss.userData.world=!0,ss.renderOrder=-1,mn.add(ss),Kl=0}function rs(n,e){const t=parseInt(n.slice(1),16);return`rgba(${t>>16&255},${t>>8&255},${t&255},${e})`}function Hf(n,e){const t=parseInt(n.slice(1),16),i=s=>Math.max(0,Math.min(255,Math.round(s*e)));return`rgb(${i(t>>16&255)},${i(t>>8&255)},${i(t&255)})`}const Qo=(n,e)=>{let t=n*374761393+e*668265263|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296};function Rx(n,e){const t=mr.getContext("2d");t.setTransform(Fs,0,0,Fs,an*Fs,an*Fs),t.globalCompositeOperation="source-over",t.clearRect(-an,-an,n.w+an*2,n.h+an*2),t.fillStyle="rgba(86,97,128,0.8)",t.fillRect(-an,-an,n.w+an*2,n.h+an*2),t.globalCompositeOperation="destination-out";const i=n.nodes.filter(o=>o.owner===$).map(o=>({x:o.x,y:o.y,r:io(n,o)}));for(const o of n.fleets)o.owner===$&&!o.lane&&!o.missile&&i.push({x:o.x,y:o.y,r:rc(n,o)});for(const o of i){const[l,c]=o.r;let d=t.createRadialGradient(o.x,o.y,c*.8,o.x,o.y,c);d.addColorStop(0,"rgba(0,0,0,0.5)"),d.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=d,t.beginPath(),t.arc(o.x,o.y,c,0,7),t.fill(),d=t.createRadialGradient(o.x,o.y,l*.82,o.x,o.y,l),d.addColorStop(0,"rgba(0,0,0,1)"),d.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=d,t.beginPath(),t.arc(o.x,o.y,l,0,7),t.fill()}t.globalCompositeOperation="source-over";const s=n.nodes.map(o=>({n:o,k:Fi(n,o)})).filter(o=>o.k.tier!=="hidden"&&o.k.tier!=="detected"&&o.k.owner!==0),r=(o,l,c,d,f)=>{const u=t.createRadialGradient(o,l,0,o,l,c);u.addColorStop(0,rs(d,f)),u.addColorStop(.55,rs(d,f*.55)),u.addColorStop(1,rs(d,0)),t.fillStyle=u,t.beginPath(),t.arc(o,l,c,0,7),t.fill()},a=e/1e3;for(const{n:o,k:l}of s){const c=Yn(n,l.owner);for(let d=0;d<7;d++){const f=Qo(o.id,d)*Math.PI*2+a*.05*(d%2?1:-1),u=6+Qo(d,o.id)*20;r(o.x+Math.cos(f)*u,o.y+Math.sin(f)*u*.8,16+Qo(o.id+7,d)*16,c,.13)}}for(let o=0;o<s.length;o++)for(let l=o+1;l<s.length;l++){const c=s[o],d=s[l];if(c.k.owner!==d.k.owner)continue;const f=d.n.x-c.n.x,u=d.n.y-c.n.y,g=Math.hypot(f,u);if(g>115)continue;const v=Yn(n,c.k.owner),p=Math.floor(g/16);for(let m=1;m<p;m++){const h=m/p,x=Math.sin(a*.3+m+c.n.id)*4;r(c.n.x+f*h-u/g*x,c.n.y+u*h+f/g*x,15,v,.07)}}Ra.needsUpdate=!0}function Cx(n,e,t){const i=new Fr(e,1).toNonIndexed(),[s,r,a]=Yl[n.id%Yl.length].map(f=>{const u=new Ge(f);return t&&u.lerp(new Ge(Gs),t),u}),o=i.getAttribute("position"),l=[],c=.05+n.id%3*.12;for(let f=0;f<o.count;f+=3){const u=(o.getY(f)+o.getY(f+1)+o.getY(f+2))/3/e,g=u>.62?a:Math.abs(u-c)<.14||n.size>0&&Math.abs(u+.42)<.1?r:s;for(let v=0;v<3;v++)l.push(g.r,g.g,g.b)}i.setAttribute("color",new rt(l,3));const d=new Gt(i,new Dc({vertexColors:!0,flatShading:!0}));return d.rotation.z=.25,d}function ha(n,e,t=!1){const i=new gn,s=Gf[n]||"#999",r="#4b5063";if(n==="mine")i.add(Re(new kt(1,.4,1),Ie("#6f6355",e),0,.2),Re(new Jn(.55,2.1,4),Ie(s,e),0,1.4),Re(new kt(.2,.2,1.4),Ie(r,e),0,2.2));else if(n==="refinery")i.add(Re(new ht(.8,.9,1.5,6),Ie(s,e),0,.75),Re(new ht(.28,.28,1.4,6),Ie(r,e),.3,2.1),Re(new ht(.2,.2,.9,6),Ie(r,e),-.35,1.9));else if(n==="lab"){if(i.add(Re(new ht(.6,.7,2.2,6),Ie(s,e),0,1.1),Re(new Rr(.7,8,4,0,Math.PI*2,0,Math.PI/2),Ie(jt,e),0,2.2)),t){const a=Re(new zs(.45),Nn("#9fe0ff"),0,3.3);a.name="orb",i.add(a)}}else if(n==="foundry")i.add(Re(new kt(1.7,1,1.2),Ie(s,e),0,.5),Re(new Jn(.8,.6,4),Ie("#b05a47",e),0,1.3),Re(new ht(.22,.22,1.3,6),Ie(r,e),.6,1.5)),i.children[1].rotation.y=Math.PI/4;else if(n==="unused1")i.add(Re(new ht(1.1,1.1,.5,8),Ie(s,e),0,.25),Re(new Rr(.95,8,4,0,Math.PI*2,0,Math.PI/2),Ie(jt,e),0,.5),Re(new kt(.5,.5,.5),Ie(s,e),1.3,.25));else if(n==="barracks")i.add(Re(new kt(1.5,.9,1),Ie(s,e),0,.45),Re(new Jn(.72,.6,4),Ie("#b05a47",e),0,1.2)),i.children[1].rotation.y=Math.PI/4;else if(n==="silo")i.add(Re(new ht(.75,.85,1.6,8),Ie("#6d7385",e),0,.8)),t?i.add(Re(new ht(.32,.32,1.6,6),Ie(jt,e),0,2.2),Re(new Jn(.34,.8,6),Ie("#d2604a",e),0,3.4)):i.add(Re(new ht(.55,.55,.15,8),Ie(r,e),0,1.65));else if(n==="post")i.add(Re(new ht(.9,1,.9,6),Ie(s,e),0,.45),Re(new ht(.12,.12,2,4),Ie(jt,e),0,1.9),Re(new kt(.9,.5,.06),Ie(s,e),.5,2.6));else if(n==="unused2")for(const[a,o,l]of[[-.55,.4,0],[.55,.4,0],[0,1.2,0],[0,.4,.9]])i.add(Re(new kt(.95,.8,.8),Ie(s,e),a,o,l));else if(n==="bay"){for(const a of[-.9,.9])i.add(Re(new kt(.22,2.2,.22),Ie(s,e),a,1.1));i.add(Re(new kt(2.1,.24,.32),Ie(s,e),0,2.2),Re(new kt(1.4,.1,1.4),Ie(r,e),0,.05))}return i}const Vf=[150,30,210,-30].map(n=>n*Math.PI/180);function ru(n,e){const t=pi(n);if(n.kind==="planet"){const s=Math.PI*(.9+.16*e);return{x:Math.cos(s)*(t*2+2.4),y:.75,z:Math.sin(s)*(t*2+2.4),a:s}}const i=Vf[e%4];return{x:Math.cos(i)*t*2.3,y:t*.5+t*.55+.6,z:Math.sin(i)*t*2.3,a:i}}function Wf(n,e,t=1,i=!1){const s=new gn;if(s.add(Re(new ht(1,1.1,.35,6),Ie(i?Hn:"#e6dcc6"),0,.17)),s.add(Re(new Jn(.95,2.3,7),Ie(n),0,.35+1.15)),s.add(Re(new ht(.98,.98,.18,7),Ie(Hf(n,.7)),0,.55)),s.add(Re(new Fr(.72,0),Ie(n),0,.35+2.3+.35)),e){const r=Re(new ht(.55,.42,.45,5,1,!0),Ie(Hn),0,3.7);r.material.side=Xn,s.add(r)}return s.scale.setScalar(t),s}function $f(n,e,t=1.9){const i=new gn,s=new Gt(new Jn(.55,2.6,4),Ie(zf));return s.rotation.z=-Math.PI/2,s.scale.set(1,1,1.5),i.add(s,Re(new kt(.9,.12,2.6),Ie(n),-.6),Re(new kt(.7,.7,.12),Ie(n),-.9,.4)),e.forEach((r,a)=>{const o=Wf(r.c,r.cmd,.36);o.position.set(.1-a*.6,.1,a===0?0:a%2?-.6:.6),i.add(o)}),i.scale.setScalar(t),i}function Px(n,e,t,i,s){const r=new gn,a=pi(e),o=t==="detected",l=t==="stale"?.35:0,c=o?Gs:i===0?Bf:Yn(n,i);let d=null;const f=new Gt(new uo(a*1.05,24),Nn("#0c101e",.4));if(f.rotation.x=-Math.PI/2,f.position.y=.02,r.add(f),o){const v=e.kind==="planet"?new Gt(new Fr(a,1),Nn(Gs,.9)):new Gt(new ht(a,a,a*1.1,6),Nn(Gs,.9));return v.position.y=qa(e),r.add(v),{grp:r,spin:d,orb:null}}i!==0&&r.add(Nc(a*1.45,a*1.62,c,.06,0,Math.PI*2,l?.5:1));const u=n.sides[i]?Mr(n,e):0;if(e.kind==="planet"){const v=Cx(e,a,l);if(v.position.y=a*1.5,r.add(v),d=v,e.size===2){const p=new Gt(new $a(a*1.55,a*.09,4,28),Ie(Yl[e.id%5][2],l));p.rotation.x=Math.PI/2-.3,p.rotation.y=.2,p.position.y=a*1.5,r.add(p)}for(let p=0;p<e.lv;p++){const m=-Math.PI/2+(p-(e.lv-1)/2)*.55,h=a*1.25+1.7,x=ha("mine",l);x.position.set(Math.cos(m)*h,0,Math.sin(m)*h*.9),r.add(x)}if(e.spec){const p=ha(e.spec,l,e.spec==="lab"&&i===$&&$s(n,e));p.scale.setScalar(1.5),p.position.set(a*1.3+2.4,0,-a*.2),r.add(p)}for(let p=0;p<u;p++){const m=ru(e,p);r.add(Re(new ht(1.5,1.5,.12,6),Ie(c,l),m.x,.06,m.z))}}else{const v=a*.5,p=a*1.1,m=v+p,h=e.citadel?"#57526f":zf;if(r.add(Re(new ht(a,a*.92,p,6),Ie(h,l),0,v+p/2)),r.add(Re(new ht(a*.92,a*.35,a*.45,6),Ie(e.citadel?"#413d57":"#b8ad96",l),0,v-a*.22)),r.add(Re(new ht(a*.5,a*.68,a*.4,6),Ie(c,l),0,m+a*.2)),e.citadel){r.add(Re(new Jn(a*.3,a*1.9,6),Ie(c,l),0,m+a*1.35));const x=Re(new $a(a*1.6,a*.07,4,32),Ie(c,l),0,v+p*.6);x.rotation.x=Math.PI/2,r.add(x),d=x}else(e.home||e.capital)&&r.add(Re(new ht(a*.07,a*.07,a*.9,4),Ie(jt,l),0,m+a*.8));for(let x=0;x<Math.min(4,u);x++){const E=Vf[x],b=a*1.3,A=Re(new kt(b,a*.14,a*.3),Ie("#b8ad96",l),Math.cos(E)*(a*.9+b/2),v+p/2,Math.sin(E)*(a*.9+b/2));A.rotation.y=-E,r.add(A),r.add(Re(new ht(a*.5,a*.5,a*.1,6),Ie(c,l),Math.cos(E)*a*2.3,v+p/2+a*.05,Math.sin(E)*a*2.3))}for(let x=0;x<e.lv;x++){const E=ha("barracks",l);E.position.set((x-(e.lv-1)/2)*1.8,v+p*.3,-a*1.2),r.add(E)}if(e.spec){const x=ha(e.spec,l,e.spec==="silo"&&e.missile>0);x.scale.setScalar(1.15),x.position.set(-a*.2,m+a*.38,-a*.1),r.add(x)}}for(let v=u-s;v<u;v++){const p=ru(e,v),m=$f(c,[],1.6);m.position.set(p.x,p.y,p.z),m.rotation.y=-p.a,r.add(m)}const g=Re(new Rr(a*(e.kind==="planet"?1.75:1.7),16,10),new Dc({color:"#bfe3ff",transparent:!0,opacity:0,depthWrite:!1,flatShading:!0}),0,e.kind==="planet"?a*1.5:a*1.05);return g.name="bubble",g.renderOrder=2,r.add(g),{grp:r,spin:d,orb:r.getObjectByName("orb")||null}}function Lx(n,e,t){const i=new gn,s=e.owner===0?"#d9d9d9":Yn(n,e.owner);let r;if(e.missile){r=new gn;const o=Re(new ht(.3,.3,2.2,6),Ie(jt));o.rotation.z=Math.PI/2;const l=Re(new Jn(.34,.9,6),Ie("#d2604a"),1.5);l.rotation.z=-Math.PI/2,r.add(o,l,Re(new zs(.5),Nn("#ffb07a",.8),-1.3)),r.scale.setScalar(1.4)}else e.lane?(r=new gn,r.add(Re(new zs(.9),Nn(s)),Re(new zs(1.4),Nn(s,.3)))):r=$f(s,t.map(o=>({c:o===n.cmdSpec?Hn:nt[n.specs[o].def].color,cmd:o===n.cmdSpec})),e.probe?1.1:1.9);r.name="model";const a=new Gt(new uo(1.6,12),Nn("#0c101e",.35));return a.rotation.x=-Math.PI/2,a.name="shadow",i.add(r,a),i}function Qt(n,e,t=0){return Jo.set(n,t,e).project(Ai),{x:(Jo.x*.5+.5)*Jl,y:(-Jo.y*.5+.5)*Ql}}function Xf(n){return Qt(n.x,n.y,qa(n))}function au(n,e,t,i,s,r,a,o,l){n.font=`800 ${r?13:12}px system-ui`;const c=Math.max(r?30:24,n.measureText(s).width+12),d=r?18:16,f=d+8;n.strokeStyle=jt,n.lineWidth=2,n.lineCap="round",n.beginPath(),n.moveTo(e,t),n.lineTo(e,t-f),n.stroke();const u=Math.sin(o/420+l)*1.6,g=t-f;n.globalAlpha=a?.6:1,n.fillStyle=i,n.beginPath(),n.moveTo(e+1,g),n.lineTo(e+c,g+u),n.lineTo(e+c-5,g+d/2+u),n.lineTo(e+c,g+d+u),n.lineTo(e+1,g+d),n.closePath(),n.fill(),n.fillStyle=Hf(i,.78),n.fillRect(e+1,g+d-3,c-4,3),n.fillStyle=Ui,n.textAlign="center",n.textBaseline="middle",n.fillText(s,e+c/2-1,g+d/2-.5+u/2),n.globalAlpha=1}function Dx(n,e,t,i){switch(n.save(),n.translate(t,i),n.fillStyle=Ui,n.strokeStyle=Ui,n.lineWidth=1.6,n.lineJoin="round",n.lineCap="round",n.beginPath(),e){case"mine":n.moveTo(-6,5),n.lineTo(-1,-5),n.lineTo(2,0),n.lineTo(4,-2),n.lineTo(7,5),n.closePath(),n.fill();break;case"barracks":n.moveTo(-5,0),n.lineTo(0,-4),n.lineTo(5,0),n.moveTo(-5,5),n.lineTo(0,1),n.lineTo(5,5),n.stroke();break;case"shield":n.moveTo(0,-6),n.lineTo(5,-4),n.lineTo(4,2),n.lineTo(0,6),n.lineTo(-4,2),n.lineTo(-5,-4),n.closePath(),n.fill();break;case"refinery":n.moveTo(1,-6),n.lineTo(-4,1),n.lineTo(0,1),n.lineTo(-1,6),n.lineTo(4,-1),n.lineTo(0,-1),n.closePath(),n.fill();break;case"lab":n.moveTo(-2,-6),n.lineTo(2,-6),n.moveTo(-1.5,-6),n.lineTo(-1.5,-1),n.lineTo(-5,5),n.lineTo(5,5),n.lineTo(1.5,-1),n.lineTo(1.5,-6),n.stroke(),n.beginPath(),n.moveTo(-3.5,2.5),n.lineTo(3.5,2.5),n.lineTo(5,5),n.lineTo(-5,5),n.fill();break;case"foundry":n.moveTo(-6,5),n.lineTo(-6,-1),n.lineTo(-2,2),n.lineTo(-2,-1),n.lineTo(2,2),n.lineTo(2,-5),n.lineTo(5,-5),n.lineTo(5,5),n.closePath(),n.fill();break;case"silo":n.moveTo(0,-7),n.lineTo(3,-2),n.lineTo(3,4),n.lineTo(5,6),n.lineTo(-5,6),n.lineTo(-3,4),n.lineTo(-3,-2),n.closePath(),n.fill();break;case"post":n.moveTo(-4,6),n.lineTo(-4,-6),n.stroke(),n.beginPath(),n.moveTo(-3,-6),n.lineTo(6,-3),n.lineTo(-3,0),n.closePath(),n.fill();break;case"bay":n.moveTo(6,0),n.lineTo(-4,-5),n.lineTo(-2,0),n.lineTo(-4,5),n.closePath(),n.fill();break}n.restore()}function pa(n,e,t,i,s,r=!1){const a=t>0?40:22;n.fillStyle=Gf[e],n.beginPath(),n.roundRect(i,s-10,a,20,6),n.fill(),r&&(n.strokeStyle="#9fe0ff",n.lineWidth=2.5,n.beginPath(),n.roundRect(i-1.5,s-11.5,a+3,23,7),n.stroke()),Dx(n,e,i+11,s);for(let o=0;o<3&&t>0;o++)n.fillStyle=o<t?Ui:"rgba(29,35,53,0.25)",n.beginPath(),n.arc(i+25+o*5,s,2,0,7),n.fill();return a+4}function Ix(n,e,t,i){pr||Tx();const{cam:s,w:r,h:a}=t,o=s.z;(su!==e.seed||!ss)&&(Ax(e),su=e.seed),(Jl!==r||Ql!==a)&&(Jl=r,Ql=a,pr.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),pr.setSize(r,a,!1),Ai.aspect=r/a,Ai.updateProjectionMatrix());const l=a/(o*2*Math.tan(kf*Math.PI/360));Ai.position.set(s.x,l*Math.sin(ql),s.y+l*Math.cos(ql)),Ai.lookAt(s.x,0,s.y),Ai.updateMatrixWorld(),i-Kl>350&&(Kl=i,Rx(e,i)),Aa.length=0,Xl.length=0;for(const p of e.nodes){const m=Fi(e,p),h=Ns.get(p.id);if(m.tier==="hidden"){h&&(fi(h.grp),Ns.delete(p.id));continue}const x=m.tier==="live",E=e.intel[p.id].snap,b=x||!E?p:{...p,...E},A=x&&e.sides[p.owner]?Math.max(0,Mr(e,p)-Tu(e,p)):0,w=p.owner===$&&p.task?Math.round((1-p.task.left/p.task.total)*24):-1,_=m.tier==="detected"?[]:e.sides[b.owner]?ps(e,b):[],S=p.owner===$&&p.spec==="lab"&&$s(e,p),D=[m.tier,m.owner,b.lv,b.sh,b.spec,b.missile,A,w,_.map(P=>`${P}${e.specs[P].up?"u":""}`).join("."),S,e.sides[b.owner]?Mr(e,b):0].join("|");if(h&&h.sig===D)continue;h&&fi(h.grp);const C=Px(e,b,m.tier,m.owner,A),R=pi(p);w>=0&&C.grp.add(Nc(R*1.74,R*1.9,Hn,.08,Math.PI/2,Math.max(.05,w/24*Math.PI*2)));const U=[],z=2.5;_.slice(0,5).forEach((P,V)=>{const K=e.specs[P],H=(V-(Math.min(_.length,5)-1)/2)*z,ie=R*1.55+1.6+V%2*.4,X=Wf(P===e.cmdSpec?Hn:nt[K.def].color,P===e.cmdSpec,1,K.up);X.position.set(H,0,ie),C.grp.add(X),U.push({spec:P,x:H,z:ie})}),C.grp.position.set(p.x,0,p.y),mn.add(C.grp),Ns.set(p.id,{sig:D,...C,statues:U})}for(const[p,m]of Ns){m.spin&&(m.spin.rotation.y=i/6e3),m.orb&&(m.orb.rotation.y=i/400,m.orb.position.y=3.3+.2*Math.sin(i/300));const h=e.nodes[p],x=m.grp.getObjectByName("bubble");if(x){const E=Fi(e,h).tier==="live"?h.shields+La(e,h):0,b=Math.max(1,ac(e,h)+La(e,h));x.material.opacity=E>.5?.06+.2*Math.min(1,E/b):0,x.visible=E>.5}for(const E of m.statues){const b=Qt(h.x+E.x,h.y+E.z,wx*.65);Aa.push({x:b.x,y:b.y,r:Math.max(12,o*1.6),spec:E.spec})}}const c=e.corridors.map(p=>`${p.a}-${p.b}-${p.owner}`).join(",");if(c!==Zl){Pi&&fi(Pi),Pi=new gn,Zl=c;for(const p of e.corridors){const m=e.nodes[p.a],h=e.nodes[p.b],x=Yn(e,p.owner),E=Math.hypot(h.x-m.x,h.y-m.y),b=new gn;b.add(Re(new ht(.35,.35,E,6,1,!0),Nn(x,.95)),Re(new ht(.9,.9,E,8,1,!0),Nn(x,.18))),b.position.set((m.x+h.x)/2,.8,(m.y+h.y)/2),b.rotation.set(0,-Math.atan2(h.y-m.y,h.x-m.x),Math.PI/2,"YXZ"),Pi.add(b)}mn.add(Pi)}const d=new Set,f=[];for(const p of e.fleets){const m=Dr(e,p);if(!m)continue;f.push({f:p,seen:m}),d.add(p.id);const h=m===2?p.specs:[],x=`${p.owner}|${p.lane?1:0}|${p.missile?1:0}|${h.join(".")}`;let E=Us.get(p.id);(!E||E.sig!==x)&&(E&&fi(E.grp),E={sig:x,grp:Lx(e,p,h),statues:h.slice()},mn.add(E.grp),Us.set(p.id,E));const b=e.nodes[p.to],A=E.grp.getObjectByName("model"),w=E.grp.getObjectByName("shadow");E.grp.position.set(p.x,0,p.y),E.grp.rotation.y=-Math.atan2(b.y-p.y,b.x-p.x),A.position.y=p.lane?.8:p.missile?5:3.4+.25*Math.sin(i/400+p.id),p.lane&&(A.rotation.y=i/300),w.visible=!p.lane,w.position.y=.04}for(const[p,m]of Us)d.has(p)||(fi(m.grp),Us.delete(p));const u=t.sel?.type==="node"?e.nodes[t.sel.id]:null;if(Is.visible=xr.visible=!!u&&u.owner===$,Sr.visible=!!u,u&&(Sr.position.set(u.x,.12,u.y),Sr.scale.setScalar(pi(u)*2.05),Is.visible)){const[p,m]=io(e,u);Is.position.set(u.x,.1,u.y),Is.scale.setScalar(p),xr.position.set(u.x,.1,u.y),xr.scale.setScalar(m)}pr.render(mn,Ai),n.clearRect(0,0,r,a),n.lineCap="round";for(const{f:p}of f){if(p.lane)continue;const m=e.nodes[p.to],h=Qt(p.x,p.y),x=Qt(m.x,m.y),E=p.missile?"#d2604a":p.owner===0?"#d9d9d9":Yn(e,p.owner);n.strokeStyle=rs(E,.8),n.lineWidth=2.5,n.setLineDash([.1,9]),n.lineDashOffset=-i/50,n.beginPath(),n.moveTo(h.x,h.y),n.lineTo(x.x,x.y),n.stroke(),n.setLineDash([])}for(const p of e.nodes)if(p.owner===$&&p.task?.kind==="corridor"){const m=e.nodes[+p.task.id],h=Qt(p.x,p.y,.8),x=Qt(m.x,m.y,.8),E=1-p.task.left/p.task.total;n.strokeStyle=rs(jt,.4),n.lineWidth=2,n.setLineDash([4,6]),n.beginPath(),n.moveTo(h.x,h.y),n.lineTo(x.x,x.y),n.stroke(),n.setLineDash([]),n.strokeStyle=Hn,n.lineWidth=3,n.beginPath(),n.moveTo(h.x,h.y),n.lineTo(h.x+(x.x-h.x)*E,h.y+(x.y-h.y)*E),n.stroke()}if(t.targeting&&t.from>=0&&t.hover>=0&&t.hover!==t.from){const p=Qt(e.nodes[t.from].x,e.nodes[t.from].y),m=Qt(e.nodes[t.hover].x,e.nodes[t.hover].y);n.strokeStyle=jt,n.lineWidth=3,n.setLineDash([.1,9]),n.beginPath(),n.moveTo(p.x,p.y),n.lineTo(m.x,m.y),n.stroke(),n.setLineDash([])}const g=e.specs[e.cmdSpec],v=e.nodes.filter(p=>Fi(e,p).tier!=="hidden").sort((p,m)=>p.y-m.y);for(const p of v){const m=Fi(e,p),h=Qt(p.x,p.y,Ex(p));if(h.x<-80||h.y<-40||h.x>r+80||h.y>a+160)continue;const x=Qt(p.x,p.y),E=m.tier==="detected",b=m.tier==="stale",A=E?Gs:m.owner===0?Bf:Yn(e,m.owner),w=pi(p)*o;if(t.targeting&&p.id!==t.from&&(t.glow?t.glow.has(p.id):ro(e,p)||p.owner===$)){const S=t.hover===p.id;n.strokeStyle=rs(Hn,S?1:.45+.35*Math.sin(i/250)),n.lineWidth=S?5:3.5,n.shadowColor=Hn,n.shadowBlur=S?22:12,n.beginPath(),n.ellipse(x.x,x.y,w*2.3,w*2.3*On,0,0,7),n.stroke(),n.shadowBlur=0}let _=Qt(p.x,p.y+pi(p)*1.55+3.4).y+8;if(E){const S=Qt(p.x,p.y,qa(p));n.fillStyle=jt,n.font="800 14px system-ui",n.textAlign="center",n.textBaseline="middle",n.globalAlpha=.8,n.fillText("?",S.x,S.y),n.globalAlpha=1,_=x.y+w*1.4*On+10}else{const S=p.home?"⌂ ":p.citadel?"✦ ":p.capital?"♛ ":"";au(n,h.x,h.y+2,A,S+(b?"~":"")+m.drones,p.home||p.capital||p.citadel,b,i,p.id);let D=x.x+w*1.7+8;const C=Qt(p.x,p.y,qa(p)).y,R=(U,z)=>{n.fillStyle=z,n.beginPath(),n.roundRect(D-8,C-8,16,16,4),n.fill(),n.fillStyle=Ui,n.font="800 11px system-ui",n.textAlign="center",n.textBaseline="middle",n.fillText(U,D,C+.5),D+=19};if(p.owner===$&&p.front){const U=D-8,z=58;n.fillStyle="#e8a85a",n.beginPath(),n.roundRect(U,C-11,z,22,7),n.fill(),n.fillStyle=Ui,n.font="800 11px system-ui",n.textAlign="center",n.textBaseline="middle",n.fillText("⚑ RALLY",U+z/2,C+.5),Xl.push({x:U+z/2,y:C,r:30,node:p.id}),D+=z+6}p.event&&R("!",Hn),p.offer&&p.owner!==$&&R("☺","#e9a9c9"),p.hold&&R("◷","#a9dcec"),p.owner===$&&p.prisoners.length&&R("⛓","#e6a183"),g&&g.held&&g.node===p.id&&R("★","#e2604e")}if(o>4.5&&(n.font="700 10px system-ui",n.textAlign="center",n.textBaseline="middle",n.lineJoin="round",n.strokeStyle="rgba(29,35,53,0.7)",n.lineWidth=3,n.strokeText(p.name.toUpperCase(),x.x,_),n.fillStyle=rs(jt,E?.45:.85),n.fillText(p.name.toUpperCase(),x.x,_),_+=17),!E&&o>3.2&&m.owner!==0){const S=m.tier==="live"?p:{...p,...e.intel[p.id].snap},D=44+(S.sh?44:0)+(S.spec?26:0)-4;let C=x.x-D/2;n.globalAlpha=b?.65:1,C+=pa(n,p.kind==="planet"?"mine":"barracks",S.lv,C,_),S.sh&&(C+=pa(n,"shield",S.sh,C,_)),S.spec&&pa(n,S.spec,0,C,_,S.spec==="lab"&&p.owner===$&&$s(e,p)||S.spec==="silo"&&S.missile>0),n.globalAlpha=1}else!E&&o>3.2&&p.sh&&(n.globalAlpha=b?.65:1,pa(n,"shield",(m.tier==="live"?p.sh:e.intel[p.id].snap?.sh)||0,x.x-20,_),n.globalAlpha=1)}for(const{f:p,seen:m}of f){if(p.missile)continue;const h=Qt(p.x,p.y,p.lane?2.2:5.2),x=p.owner===0?"#d9d9d9":Yn(e,p.owner);if(t.sel?.type==="fleet"&&t.sel.id===p.id){const E=Qt(p.x,p.y);n.strokeStyle=jt,n.lineWidth=2,n.beginPath(),n.ellipse(E.x,E.y,18,18*On,0,0,7),n.stroke()}(p.drones>0||m<2)&&au(n,h.x,h.y,x,m===2?String(p.drones):"?",!1,!1,i,p.id),m===2&&p.specs.forEach((E,b)=>{const A=h.x-10-b*16,w=h.y-12,_=E===e.cmdSpec?Hn:nt[e.specs[E].def].color;n.fillStyle=_,n.beginPath(),n.arc(A,w,7.5,0,7),n.fill(),n.strokeStyle=Ui,n.lineWidth=1.5,n.stroke(),n.fillStyle=Ui,n.font="800 8px system-ui",n.textAlign="center",n.textBaseline="middle",n.fillText(E===e.cmdSpec?"★":nt[e.specs[E].def].tag,A,w+.5),Aa.push({x:A,y:w,r:10,spec:E})})}}const At=n=>(n=Math.max(0,Math.floor(n)),`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`),je=n=>n.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Js=(n,e="")=>`<div class="bar ${e}"><i style="width:${Math.max(0,Math.min(100,n*100)).toFixed(1)}%"></i></div>`,Tt=(n,e,t={})=>`<button data-a="${n}" class="btn ${t.cls||""}" ${t.off?"disabled":""}>${e}${t.sub?`<small>${t.sub}</small>`:""}${t.off?`<small class="why">${je(t.off)}</small>`:""}</button>`,qn=n=>Math.abs(n)>=10?n.toFixed(0):n.toFixed(1);function Yi(n,e,t=!1,i=!1){const s=nt[e.def],r=e.id===n.cmdSpec;return`<span class="tok ${t?"big":""} ${r?"cmd":""} ${e.up?"up":""}" data-tip="${e.id}" style="--c:${r?"#e8bd55":s.color}">${r?"★":s.tag}${i?`<i>${Ws(n,e)}</i>`:""}</span>`}const qf=n=>`<span class="tok big" style="--c:${nt[n].color}">${nt[n].tag}<i>${nt[n].pow}</i></span>`,Yf=n=>n.cmd?"Commander":nt[n.def].name;function Kf(n,e){const t=nt[e.def];let i=t.text;return e.cmd&&(i+=" "+qi[e.cmd.arch].text),e.up&&t.up.text&&(i+=` <b class="upt">Upgraded: ${t.up.text}</b>`),i}function Nx(n,e){const t=nt[e.def],i=e.cmd?`Commander · ${t.name} ${qi[e.cmd.arch].name} · level ${e.cmd.lvl}`:ri(e)+(e.up?" +":""),s=e.held?`Prisoner at ${n.nodes[e.node]?.name}`:e.node>=0?`At ${n.nodes[e.node].name}`:e.fleet>=0?`In flight to ${n.nodes[to(n,e.fleet)?.to??0].name}`:"",r=e.owner===$?"":` · ${je(vi(n,e.owner))}`;let a="";t.charge&&(a+=`<p><b>${t.charge.text.split(" (")[0]}:</b> ${e.owner===$&&e.cd>n.t?`recharging, ${At(e.cd-n.t)}`:"ready"} <small>(recharges in ${At(nc(n,e))})</small></p>`),!e.cmd&&!e.up&&t.up.text&&e.owner===$&&(a+=`<p class="dim">Upgrade (lead a winning attack): ${t.up.text}</p>`),e.cmd&&e.cmd.perks.length&&(a+=`<p class="dim">${e.cmd.perks.map(l=>yu(l).name).join(" · ")}</p>`);const o=e.owner===$&&!e.cmd?` · upkeep ◆ ${qn(tc(n,e))}/min`:"";return`<div class="tiphead">${Yi(n,e,!0)}<div><b>${je(i)}</b><small>${t.role} · Power ${Ws(n,e)}${o}${r}</small><small>${je(s)}</small></div></div><p>${Kf(n,e)}</p>${a}`}function Ux(n){const e=n.g,t=e.sides[$],i=e.mob,s=e.specs[e.cmdSpec];let r="";if(s&&s.held&&e.cmdLostT>=0)r=`<div class="banner bad" data-a="focus:${s.node}">★ COMMANDER CAPTURED at ${je(e.nodes[s.node].name)}. Retake it in <b>${At(zu(e)-(e.t-e.cmdLostT))}</b></div>`;else if(n.mode)r=`<div class="banner">${{corridor:"Tap a glowing node to link a corridor",missile:"Tap a glowing node to strike"}[n.mode.k]} <button class="btn sm" data-a="cancelmode">Cancel</button></div>`;else if(e.offs.length){const d=e.offs[0];r=`<div class="banner warn" ${d.warned?`data-a="focus:${d.target}"`:""}>⚠ ${je(vi(e,d.owner))} offensive ${d.warned?`on ${je(e.nodes[d.target].name)} `:""}launches in ${At(d.launchT-e.t)}</div>`}const a=[1,2,3,4,5].map(d=>`<i class="${d<=i.stage?"on":""}"></i>`).join(""),o=t.produce&&_c(t),l=t.produce?o?"Building Drones":"Army at the limit your income supports":"Drone production paused",c=Fa(e,$);return`<div class="hudrow">
    <div class="stat" data-a="menu:run" title="Ultanium: income and upkeep per minute"><b class="ult">◆ ${Math.floor(t.ult)}</b><small class="${t.net<0?"bad":""}">${t.net>=0?"+":""}${qn(t.net)}/min</small></div>
    <button class="stat prod ${t.produce?o?"on":"full":"off"}" data-a="produce" title="${l}. Tap to ${t.produce?"pause":"resume"}."><b>⬢ ${Eh(e,$)}</b><small>${t.produce?o?"▶ building":"■ at limit":"⏸ paused"}</small></button>
    <div class="stat rsch" data-a="menu:research" title="Research: progress to the next choice">${t.rpm>0?`<b>⚗ ${At(Math.max(0,(c-t.rp)/t.rpm)*60)}</b>`:"<b>⚗ —</b>"}${Js(t.rp/c,"blue")}</div>
    <div class="stat mob" data-a="menu:intel" title="Coalition mobilization"><span class="pips">${a}</span>${Js(i.prog,"red")}<small>${i.surge?`TOTAL WAR +${i.surge}`:`MOBILIZATION ${i.stage}/5`}</small></div>
    <div class="grow"></div>
    <div class="stat time"><b>${At(e.t)}</b></div>
    <button class="btn ico ${n.paused?"hot":""}" data-a="pause" title="Pause (space)">${n.paused?"▶":"❚❚"}</button>
    <button class="btn ico" data-a="speed" title="Speed">${n.speed}×</button>
    <button class="btn ico desk" data-a="console" title="Tuning console">⚙</button>
    <button class="btn ico" data-a="menu:research" title="Menu (M)">☰</button>
  </div>${r}`}function Fx(n){const e=n.g;return e.specs.filter(i=>i.owner===$).sort((i,s)=>(i.cmd?-1:0)-(s.cmd?-1:0)).map(i=>{const s=i.fleet>=0?to(e,i.fleet):null,r=i.held?"captured":s?`→ ${e.nodes[s.to].name}`:i.node>=0?e.nodes[i.node].name:"",a=i.node>=0&&!i.held&&!ps(e,e.nodes[i.node]).includes(i.id);return`<div class="rost ${i.held?"held":s?"fly":a?"res":""} ${n.drag?.spec===i.id?"dragging":""}" data-spec="${i.id}" data-tip="${i.id}">${Yi(e,i,!0,!0)}<small>${je(r)}</small></div>`}).join("")}const jo=n=>`${n>0?"+":""}${Math.round(n*100)}%`,ou={atk:n=>`Attack +${n}`,per4:n=>`+1 per 4 Drones (max ${n})`,pierce:n=>n>=20?"Ignores shields":`Ignores ${n} shield`,strike:n=>`First strike ${n}`,surv:n=>n>0?`Saves ${n} Drones`:`Loses ${-n} more`,vsNeutral:n=>`+${n} vs neutral`,salvage:()=>"Salvage",speed:n=>`Speed ${jo(n)}`,stealth:()=>"Unseen",slotFree:()=>"Uses no slot",def:n=>`Defence +${n}`,shield:n=>`Shield +${n}`,regen:()=>"Fast recharge",inc:n=>`◆ +${n}/min`,research:n=>`Research +${n}`,prodSecs:n=>`Drones ${n}s faster`,free:n=>`Feeds ${n}`,lance:n=>`Lances ${n}`,martyr:n=>`Martyr ${n}`,build:()=>"Fast upgrades",upgCost:n=>`Upgrades −${n}`,launchSpeed:n=>`Launch ${jo(n)}`,fov:n=>`Vision ${jo(n)}`,income:n=>`◆ +${n}/min`,freeDrones:n=>`Feeds ${n}`,warn:()=>"Warns of attacks",sigint:()=>"Reads fleets",rp:n=>`Research +${n}`,recruitFree:()=>"Free recruits",corridorMax:()=>"More corridors"};function lu(n){return Object.keys(n).filter(e=>n[e]&&ou[e]).map(e=>ou[e](n[e]))}function Zf(n,e,t=""){const i=nt[e.def],s={...i.glob||{},...e.cmd?qi[e.cmd.arch].glob||{}:{}},r=lu(Pa(n,e)).concat(lu(s),i.charge?[e.cd>n.t?`${i.charge.text.split(" (")[0]} ${At(e.cd-n.t)}`:`${i.charge.text.split(" (")[0]} ready`]:[]);return`<span class="pchip ${t}" data-tip="${e.id}">${Yi(n,e,!1,!0)}<span>${je((r.length?r:[i.role]).slice(0,2).join(" · "))}</span></span>`}function Jf(n,e,t){if(!e.specs.length)return"";const i=ps(n,e);return`<div class="prow">${e.specs.map(s=>{const r=n.specs[s];return r?i.includes(s)||!t?Zf(n,r):`<span class="pchip res" data-a="promote:${s}" data-tip="${s}">${Yi(n,r,!1,!0)}<span>reserve · tap to activate</span></span>`:""}).join("")}</div>`}function Qf(n,e){const t=cs(n,0,0,[],e,{});return{def:t.def,p:t.parts,max:ac(n,e)}}function jf(n,e,t,i){const s=Qf(n,e),r=s.p.dpow+s.p.ddef+s.p.aegis;return`<div class="kv"><div><small>GARRISON</small><b>⬢ ${e.drones}</b>${i&&Wi(n,e)?`<small>keeps ${Wi(n,e)}</small>`:""}</div><div><small>SHIELD</small><b>◈ ${Math.floor(e.shields)}<i class="of">/${s.max}</i></b>${r?`<small>+${r} ${s.p.aegis?"Aegis and ":""}Power</small>`:""}</div>${t}</div>`}const cu=(n,e=3)=>`<span class="lvp">${Array.from({length:e},(t,i)=>`<i class="${i<n?"on":""}"></i>`).join("")}</span>`;function du(n,e,t,i,s){if(s>=3)return`<div class="upb done"><b>${i}</b>${cu(s)}<small>max</small></div>`;const r=Di(n,e,t);return`<button class="upb" data-a="up:${t}" ${r?"disabled":""} title="${r||""}"><b>${i}</b>${cu(s)}<small>◆ ${ao(n,e,t)}</small></button>`}function Ox(n,e){const t=n.g,i=t.sides[$],s=En(t,e);let r="";const a=ti(t,e),o=Mr(t,e),l=e.kind==="planet"?`<div><small>INCOME</small><b>◆ ${qn(Eu(t,e,s))}</b><small>${el(t,e)>e.drones?`needs ${el(t,e)} working`:`fleets ${a}/${o}`}</small></div>`:`<div><small>1 DRONE / ${qn(Gu(t,e,s))}s</small><b>▲ ${a}/${o}</b><small>${i.produce?_c(i)?"fleets ready":"army at limit":"paused"}</small></div>`;if(r+=jf(t,e,l,!0),e.task){const p=e.task,m=p.kind==="lv"?(e.kind==="planet"?"Mine":"Barracks")+` ${e.lv+1}`:p.kind==="sh"?`Shield ${e.sh+1}`:p.kind==="spec"?Pn[p.id].name:p.kind==="missile"?"Missile":`Corridor to ${t.nodes[+p.id].name}`;r+=`<div class="task slim"><div><b>${je(m)} <small>${At(p.left)}</small></b>${Js(1-p.left/p.total,"gold")}</div><button class="btn sm" data-a="cancel">✕</button></div>`}e.hold&&(r+=`<div class="task slim"><div><b>${je(e.hold.name)} <small>hold ${e.hold.need}+ · ${At(e.hold.until-t.t)}</small></b>${Js(1-(e.hold.until-t.t)/e.hold.total,"blue")}</div></div>`),e.event&&(r+=Tt("event",`! ${Fn[e.event].name}`,{cls:"wide gold slimb"}));const c=Da(t,e.id).length,d=Au(t),f=c>=d?"Maximum built":e.task?"Busy upgrading":i.ult<Ia(t)?"Not enough Ultanium":"";if(r+='<div class="ups">',r+=du(t,e,"lv",e.kind==="planet"?"Mine":"Barracks",e.lv),r+=du(t,e,"sh","Shield",e.sh),r+=e.spec?`<div class="upb done" title="${je(Pn[e.spec].desc)}"><b>${Pn[e.spec].name}</b><small>${e.spec==="lab"&&!$s(t,e)?'<span class="warnp">unstaffed</span>':"specialty"}</small></div>`:`<button class="upb ${n.pickSpec===e.id?"sel":""}" data-a="pickspec" ${e.task?"disabled":""}><b>Specialty</b><small>◆ ${ao(t,e,"spec")} · choose</small></button>`,r+=`<button class="upb" data-a="corridorpick" ${f?"disabled":""} title="${f}"><b>⇄ Corridor</b><small>${c}/${d} · ◆ ${Ia(t)}</small></button>`,e.spec==="silo"&&(r+=e.missile?'<button class="upb hotb" data-a="missile"><b>➹ Fire</b><small>pick a target</small></button>':`<button class="upb" data-a="up:missile" ${Di(t,e,"missile")?"disabled":""}><b>➹ Missile</b><small>◆ ${ne.missileCost}</small></button>`),r+="</div>",!e.spec&&n.pickSpec===e.id){r+='<div class="specpick"><small>Choose one, for good</small><div>';for(const p in Pn)Pn[p].on===e.kind&&(r+=`<button class="upb" data-a="up:spec:${p}" ${Di(t,e,"spec",p)?"disabled":""}><b>${Pn[p].name}</b><small>${Pn[p].desc}</small></button>`);r+="</div></div>"}const u=hc(t,e),g=Uu(t,e),v=g.reduce((p,m)=>p+m.k,0);if(r+=`<div class="ralrow">
    <div class="seg"><button data-a="front:0" class="${e.front?"":"on"}" title="Supply: sends its spare Drones when its nearest Front rallies">Supply</button><button data-a="front:1" class="${e.front?"on":""}" title="Front: never sends its Drones away">Front</button></div>
    <button class="btn ral ${u>=0?"alarm":"hot"}" data-a="rally" ${g.length?"":"disabled"}><b>${u>=0?`Reinforce · hit in ${At(u)}`:"Rally here"}</b><small>${g.length?`⬢ ${v} from ${g.length} node${g.length>1?"s":""}`:u>=0?"none can arrive in time":"no spare Drones"}</small></button>
    <div class="stepper" title="Drones this node never sends away"><small>KEEP</small><div><button class="btn sm" data-a="floor:-1">−</button><b>${Wi(t,e)}</b><button class="btn sm" data-a="floor:1">+</button></div></div>
  </div>`,r+=`<p class="hint">Drag from this node onto another to send a fleet${Da(t,e.id).length?" or use a corridor":""}.</p>`,e.prisoners.length){const p=pt(t,$);for(const m of e.prisoners){const h=t.specs[m],x=h.def==="warlord"||h.def==="archon",E=t.specs.some(b=>b.owner===$&&b.def===h.def);r+=`<div class="task slim"><div class="rowc">${Yi(t,h,!1,!0)} <b>${je(ri(h))}</b><small>prisoner</small></div>${x?"":Tt(`ransom:${m}`,`+${Math.round(ne.ransom*(1+(p.ransom||0)))}`,{cls:"sm"})+(h.def==="captain"||E?"":Tt(`recruit:${m}`,`Recruit ◆ ${p.recruitFree?0:ne.recruitCost}`,{cls:"sm hot"}))}</div>`}}return`${Jf(t,e,!0)}<div class="pbody">${r}</div>`}function kx(n,e){const t=n.g,i=Fi(t,e),s=so(t,e);let r="",a="";if(i.tier==="detected"||!s.v)r+='<p class="warnp">Detected only. Its forces are unknown. Fly a fleet close, or send a probe (0 Drones, no specialist) to identify it.</p>';else{const c=s.v,d=Qf(t,c);s.live||(r+=`<p class="warnp">Last seen ${At(s.age)} ago. This may be out of date.</p>`),r+=jf(t,c,`<div><small>DEFENCE</small><b>${d.def}</b><small>beat it to win</small></div>`,!1),a=Jf(t,c,!1);const f=`${c.kind==="planet"?"Mine":"Barracks"} level ${c.lv}${c.spec?` · ${Pn[c.spec].name}`:""}${c.missile?" · missile ready":""}`;r+=`<p class="dim">${f}</p>`,c.prisoners.some(u=>t.specs[u].owner===$)&&(r+=`<p class="warnp">Holding your people: ${c.prisoners.filter(u=>t.specs[u].owner===$).map(u=>je(ri(t.specs[u]))).join(", ")}</p>`),e.offer&&(r+='<p class="goodp">☺ Capture this to recruit 1 of 3 specialists.</p>'),e.event&&(r+=`<p class="goodp">! Signal: ${Fn[e.event].name}.</p>`),e.capital&&t.sides[c.owner]?.kind==="faction"&&(r+=`<p class="goodp">♛ Capital of the ${Un[t.sides[c.owner].fac].name}. Capture it and the whole faction surrenders.</p>`),e.citadel&&(r+='<p class="goodp">✦ The Citadel. Capture it to win.</p>')}const o=t.nodes.filter(c=>c.owner===$&&ti(t,c)>0&&(c.specs.length||c.drones)).sort((c,d)=>We(c,e)-We(d,e)).slice(0,4);o.length?r+=`<div class="crewline stay"><small>SEND FROM · or drag from your node onto this one</small><div>${o.map(c=>`<button class="chip" data-a="from:${c.id}">${je(c.name)} ⬢${c.drones} · ${At(We(c,e)/uc(t,c,[]))}</button>`).join("")}</div></div>`:r+='<p class="hint">No node has a fleet ready to send here.</p>';const l=t.nodes.find(c=>c.owner===$&&!co(t,c,e));return l&&(r+=Tt(`missilefrom:${l.id}`,"➹ Missile strike",{cls:"wide gold",sub:`From ${je(l.name)}: wipes the shield and kills ${ne.missileKill} Drones`})),`${a}<div class="pbody">${r}</div>`}function eh(n,e){const t=n.nodes[e.from],i=so(n,n.nodes[e.to]).v;if(!i)return 0;for(let s=1;s<=t.drones;s++)if(cs(n,$,s,e.specs,i).win)return s;return 0}function Bx(n,e){const t=Pa(n,e),i=nt[e.def];return!!(t.atk||t.per4||t.pierce||t.strike||t.vsNeutral||(t.surv||0)>0||t.salvage||t.stealth||i.charge?.on==="attack")}function th(n,e){const t=n.nodes[e.from],i=n.nodes[e.to],s=e.lane?lo(n,t,i,e.specs).secs:We(t,i)/uc(n,t,e.specs);let r=`<div class="lstat"><span>⬢ <b>${e.drones}</b> go</span><span>⬢ <b>${t.drones-e.drones}</b> stay</span><span>arrives <b>${At(s)}</b></span></div>`;if(i.owner===$)return r;if(!e.specs.length)return r+(e.drones?'<p class="badp"><b>An attack needs a specialist to lead it.</b> Add one, or send 0 Drones as a probe.</p>':'<p class="warnp">Probe: identifies the target and is lost.</p>');const a=so(n,i);if(!a.v)return r+'<p class="badp"><b>Unknown forces. Battle outcome unavailable.</b></p>';const o=cs(n,$,e.drones,e.specs,a.v),l=o.parts,c=[`${l.drones}⬢`,`${l.pow} Power`].concat(l.bonus?[`+${l.bonus}`]:[]).join(" + "),d=[`${l.garr}⬢`].concat(l.shield?[`${l.shield} shield`]:[],l.dpow?[`${l.dpow} Power`]:[],l.ddef?[`+${l.ddef}`]:[],l.aegis?[`${l.aegis} Aegis`]:[]).join(" + "),f=n.specs[e.specs[0]],u=[l.lance?`${l.lance} lost before landing`:"",l.strike?`first strike kills ${l.strike}`:"",a.live?"":`intel ${At(a.age)} old`,e.specs.includes(n.cmdSpec)?"★ Commander at risk":""].filter(Boolean).join(" · ");return r+=`<div class="vs ${o.win?"win":"lose"}"><div><b>${o.atk}</b><small>${c}</small></div><i>${o.win?">":"≤"}</i><div><b>${o.def}</b><small>${d}</small></div></div>`,r+=o.win?`<p class="goodp"><b>Victory:</b> ${o.surv} Drones survive.${f&&!f.cmd&&!f.up?` ${Yf(f)} is upgraded.`:""}</p>`:`<p class="badp"><b>Defeat:</b> short by ${o.def-o.atk+1}. ${i.owner===0?"The crew returns.":"The crew is captured."}</p>`,u&&(r+=`<p class="warnp small">${u}</p>`),r}function zx(n){const e=n.g,t=n.launch,i=e.nodes[t.from],s=e.nodes[t.to];if(i.owner!==$)return n.launch=null,"";const r=s.owner!==$,a=r?so(e,s).v:null,o=v=>a?cs(e,$,t.drones,v,a).atk-(cs(e,$,t.drones,v,a).parts.strike,0):v.reduce((p,m)=>p+Ws(e,e.specs[m]),0),l=v=>t.specs.includes(v)?o(t.specs)-o(t.specs.filter(p=>p!==v)):o(t.specs.concat(v))-o(t.specs),c=(v,p,m)=>{const h=e.specs[v];return`<button class="chip ${p?"on":""} ${r&&Bx(e,h)?"offs":""}" data-a="lspec:${v}">${Yi(e,h,!1,!0)} ${je(Yf(h))}${r?` <i class="gain">+${l(v)}</i>`:""}${m?' <i class="lead">LEADS</i>':""}</button>`},d=t.specs.map((v,p)=>c(v,!0,p===0&&r)).join(""),f=i.specs.filter(v=>!t.specs.includes(v)),u=f.map(v=>c(v,!1,!1)).join(""),g=t.lane?"":` ${t.specs.length}/${yr(e,i)}`;return`<div class="phead"><div><h2>${je(i.name)} → ${je(s.name)}</h2><small>${t.lane?"Through corridors (quickest route)":r?"Attack":"Reinforce by fleet"}</small></div><button class="btn ico" data-a="lcancel">✕</button></div>
  <div class="pbody">
    <div class="drow"><input type="range" id="lslider" min="0" max="${i.drones}" value="${t.drones}"><div class="quick">${Tt("lq:none","0",{cls:"sm"})}${r&&!t.lane?Tt("lq:min","Enough",{cls:"sm"}):Tt("lq:half","½",{cls:"sm"})}${Tt("lq:all","All",{cls:"sm"})}</div></div>
    <div class="crewline" data-drop="crew"><small>GOING${g}</small><div>${d||`<span class="ph">${r?"Tap or drag a specialist here to lead":"No specialists travelling"}</span>`}</div></div>
    ${f.length?`<div class="crewline stay"><small>STAYING AT ${je(i.name.toUpperCase())}</small><div>${u}</div></div>`:""}
    <div id="preview">${th(e,t)}</div>
    <div class="row">${Tt("lcancel","Cancel")}${Tt("lconfirm",t.lane?"Send":"Launch",{cls:"hot grow"})}</div>
  </div>`}function Gx(n,e){const t=n.g,i=Dr(t,e),s=t.nodes[e.to],r=e.missile?"missile":e.lane?"convoy":e.probe?"probe":"fleet";let a=`<div class="kv"><div><small>DRONES</small><b>⬢ ${i===2?e.drones:"?"}</b></div><div><small>ARRIVES IN</small><b>${At(cc(t,e,s))}</b></div><div><small>HEADING</small><b data-a="focus:${s.id}" class="link">${je(s.name)}</b></div></div>`;return i===2&&e.specs.length?a+=`<div class="prow wrap">${e.specs.map(o=>Zf(t,t.specs[o])).join("")}</div>`:i<2&&(a+='<p class="warnp">Strength unknown until it is inside full-intelligence range.</p>'),`<div class="phead"><div><h2><span class="dot" style="background:${Yn(t,e.owner)}"></span>${je(vi(t,e.owner))} ${r}</h2><small>In flight</small></div><button class="btn ico" data-a="close">✕</button></div><div class="pbody">${a}</div>`}function Hx(n){const e=n.g;if(n.launch)return zx(n);if(!n.sel)return"";if(n.sel.type==="fleet"){const a=to(e,n.sel.id);return!a||!Dr(e,a)?(n.sel=null,""):Gx(n,a)}const t=e.nodes[n.sel.id],i=Fi(e,t),s=`${t.citadel?"Citadel":t.kind==="planet"?["Small","Medium","Large"][t.size]+" planet":t.home?"Home station":"Station"} · ${i.tier==="detected"?"Unidentified":i.owner===0?"Neutral":je(vi(e,i.owner))}`;return`<div class="phead"><div><h2><span class="dot" style="background:${i.tier==="detected"?"#56617c":i.owner===0?"#8f95a6":Yn(e,i.owner)}"></span>${je(t.name)}</h2><small>${s}</small></div><button class="btn ico" data-a="close">✕</button></div>${t.owner===$?Ox(n,t):kx(n,t)}`}function Vx(n){const e=n.g,t=e.sides[$],i=[["research","Research"],["roster","Specialists"],["relics","Relics"],["intel","Coalition"],["log","Log"],["run","Run"]];let s="";if(n.menu==="research"){const r=Fa(e,$),a=e.nodes.filter(o=>o.owner===$&&o.spec==="lab");s=`<div class="task"><div><b>Next choice</b><small>${t.rpm>0?`${qn(t.rpm)} research per minute · ${At(Math.max(0,(r-t.rp)/t.rpm)*60)} to go`:"No research yet: give a planet the Lab specialty"}</small>${Js(t.rp/r,"blue")}</div></div>
      <p class="dim">Each time the bar fills you choose 1 of 3 technologies. What you choose decides what can be offered next. Labs: ${a.length?a.map(o=>`<span class="link" data-a="focus:${o.id}">${je(o.name)}${$s(e,o)?"":" (not staffed)"}</span>`).join(", "):"none"}.</p>`,s+=t.techs.length?"<h3>Researched</h3>"+t.techs.map(o=>`<div class="tech done"><b>${Pt[o].name} <small>${Pt[o].branch}</small></b><small>${Pt[o].desc}</small></div>`).join(""):""}else if(n.menu==="roster")s=e.specs.filter(a=>a.owner===$).map(a=>`<div class="spec" data-a="${a.node>=0?`focus:${a.node}`:"noop"}">${Yi(e,a,!0,!0)}<div><h4>${je(a.cmd?`Commander · ${nt[a.def].name} ${qi[a.cmd.arch].name} · L${a.cmd.lvl}`:ri(a)+(a.up?" +":""))} <small>${nt[a.def].role}</small></h4><small>${a.held?"Prisoner at ":a.node>=0?"At ":"In flight"}${a.node>=0?je(e.nodes[a.node].name):""}${a.cmd?"":` · upkeep ◆ ${qn(tc(e,a))}/min`}</small><p>${Kf(e,a)}</p>${a.cmd&&a.cmd.lvl<5?Js((a.cmd.xp-ne.xpLevels[a.cmd.lvl-1])/(ne.xpLevels[a.cmd.lvl]-ne.xpLevels[a.cmd.lvl-1]),"gold"):""}</div></div>`).join("");else if(n.menu==="relics")s=t.relics.map(r=>`<div class="relic ${yn[r].rarity}"><b>${yn[r].name}</b><small>${yn[r].rarity}</small><p>${yn[r].desc}</p></div>`).join("")||'<p class="dim">No relics yet. Events and Warlords yield them.</p>';else if(n.menu==="intel"){const r=ls[e.sides[e.archon].fac],a=e.mob;s=`<div class="fac" style="--c:#e07aa0"><b>✦ ${r.name} ${r.title}</b><p>${r.desc}</p><p>Mobilization stage ${a.stage}/5${a.surge?` · total war +${a.surge}`:""} (${Math.round(a.prog*100)}% to the next). Each stage gives every faction more Drones, larger offensives and new technology. Capturing enemy nodes sets it back; a captured Warlord removes a whole stage.</p><p>Citadel Aegis: ${La(e,e.nodes[e.citadel])} (${e.factions.filter(o=>!e.sides[o].broken).length} layers).</p></div>`;for(const o of e.factions){const l=e.sides[o],c=Un[l.fac],d=e.nodes.filter(f=>e.intel[f.id].snap?.owner===o||e.vis[f.id]===2&&f.owner===o);s+=d.length||l.broken?`<div class="fac" style="--c:${c.color}"><b>${c.name}${l.broken?" · SURRENDERED":""}</b><p>${c.desc}</p><p>${c.tell}</p><p class="dim">Known nodes: ${d.length} · Technology: ${l.techs.map(f=>Pt[f].name).join(", ")||"none"}</p>${d.filter(f=>f.capital).map(f=>`<p class="link" data-a="focus:${f.id}">♛ Capital located: ${je(f.name)}</p>`).join("")}</div>`:'<div class="fac" style="--c:#56617c"><b>Unidentified faction</b><p class="dim">Not yet encountered.</p></div>'}}else if(n.menu==="log")s=e.log.slice().reverse().map(r=>`<div class="logl ${r.kind}" ${r.node>=0?`data-a="focus:${r.node}"`:""}><small>${At(r.t)}</small>${je(r.msg)}</div>`).join("");else{const r=e.stats;s=`<div class="kv"><div><small>INCOME</small><b>◆ ${qn(t.inc)}</b><small>per minute</small></div><div><small>UPKEEP</small><b>◆ ${qn(t.upk)}</b><small>Drones and specialists</small></div><div><small>NET</small><b class="${t.net<0?"bad":""}">◆ ${qn(t.net)}</b><small>per minute</small></div></div>
      <p class="dim">Each Drone costs ◆ ${ne.upkeepDrone}/min; your first ${ne.freeBase} are free. Specialists cost ◆ ${ne.upkeepPower}/min per point of Power. Stations stop building once upkeep reaches ${Math.round(ne.armyShare*100)}% of income. If you run out of Ultanium with negative income, Drones desert.</p>
      <div class="kv"><div><small>SEED</small><b>${e.seed}</b></div><div><small>THREAT</small><b>${e.threat}</b></div><div><small>NODES</small><b>${e.nodes.filter(a=>a.owner===$).length}/${e.nodes.length}</b></div></div>
      <p class="dim">Captures ${r.captures} · Nodes lost ${r.nodesLost} · Drones lost ${r.dronesLost}. The run saves automatically to this device.</p>
      ${Tt("help","How to play",{cls:"wide"})}${Tt("abandon","Abandon run",{cls:"wide"})}`}return`<div class="sheet"><div class="phead"><div class="tabs">${i.map(([r,a])=>`<button data-a="menu:${r}" class="${n.menu===r?"on":""}">${a}</button>`).join("")}</div><button class="btn ico" data-a="menu:">✕</button></div><div class="pbody">${s}</div></div>`}function Wx(n,e){const t=nt[n];return`<button class="card" data-a="choose:${e}">${qf(n)}<h3>${t.name}</h3><small>${t.role} · Power ${t.pow} · upkeep ◆ ${qn(t.pow*ne.upkeepPower)}/min</small><p>${t.text}</p>${t.charge?`<p class="dim">${t.charge.text}</p>`:""}<p class="dim">Upgrade: ${t.up.text}</p></button>`}function $x(n){const e=n.g;if(e.result){const a=e.stats,o=e.result==="win";return`<div class="modal end ${o?"win":"lose"}"><h1>${o?"Victory":"Defeat"}</h1><p>${je(e.resultWhy)}</p>
      <div class="kv"><div><small>TIME</small><b>${At(e.t)}</b></div><div><small>CAPTURES</small><b>${a.captures}</b></div><div><small>WARLORDS</small><b>${a.warlords}</b></div></div>
      <p class="dim">Nodes lost ${a.nodesLost} · Drones built ${a.dronesMade} · Drones lost ${a.dronesLost}<br>Specialists ${a.specs} · Relics ${a.relics} · Technologies ${a.techs} · Events ${a.events}</p>
      ${o&&e.threat<5?`<p class="goodp">Threat level ${e.threat+1} unlocked.</p>`:""}
      <div class="row">${Tt("title","Main menu")}${Tt("again","New run",{cls:"hot grow"})}</div></div>`}const t=e.pending[0];if(!t)return"";let i="";if(t.kind==="draft")return i=t.opts.map((a,o)=>{const l=nt[a.base],c=qi[a.arch];return`<button class="card" data-a="choose:${o}">${qf(a.base)}<h3>${l.name} ${c.name}</h3><small>${c.blurb} · Power 3</small><p>${l.text}</p><p>${c.text}</p></button>`}).join(""),`<div class="modal"><h2>Choose your Commander</h2><p class="dim">Your strongest specialist, free of upkeep, who gains levels as you capture nodes. If they are captured you have ${At(ne.rescueSecs)} to retake the node holding them, or the run ends.</p><div class="cards">${i}</div></div>`;if(t.kind==="spec")return i=t.opts.map((a,o)=>Wx(a,o)).join(""),`<div class="modal"><h2>${je(t.title)}</h2><p class="dim">Recruits are only found on neutral planets. Take one, or none: every specialist costs upkeep. A fleet needs a specialist to lead an attack, and the leader of a winning attack is upgraded once.</p><div class="cards">${i}</div>${Tt("choose:-1","Skip",{cls:"wide"})}</div>`;if(t.kind==="relic")return i=t.opts.map((a,o)=>{const l=yn[a];return`<button class="card relic ${l.rarity}" data-a="choose:${o}"><h3>${l.name}</h3><small>${l.rarity}</small><p>${l.desc}</p></button>`}).join(""),`<div class="modal"><h2>Choose a relic</h2><p class="dim">Relics last for the whole run.</p><div class="cards">${i}</div></div>`;if(t.kind==="perk"){i=t.opts.map((o,l)=>{const c=yu(o);return`<button class="card" data-a="choose:${l}"><h3>${c.name}</h3><p>${c.desc}</p></button>`}).join("");const a=e.specs[e.cmdSpec].cmd.lvl;return`<div class="modal"><h2>${je(t.title)}</h2>${a===3||a===5?'<p class="goodp">Commander Power +1.</p>':""}<div class="cards">${i}</div></div>`}if(t.kind==="tech")return i=t.opts.map((a,o)=>{const l=Pt[a];return`<button class="card tech${l.excl?" doc":""}" data-a="choose:${o}"><small>${l.branch} · tier ${l.tier}</small><h3>${l.name}</h3><p>${l.desc}</p>${l.excl?`<small class="why">Either this or ${Pt[l.excl].name}, never both</small>`:""}</button>`}).join(""),`<div class="modal"><h2>Research: choose one</h2><p class="dim">Your choice shapes what is offered next.</p><div class="cards">${i}</div></div>`;const s=Fn[t.event],r=e.nodes[t.node];return i=s.choices.map((a,o)=>{const l=Bu(e,r,a);if(a.req&&l&&l.startsWith("Needs your"))return`<button class="card locked" disabled><h3>${a.label}</h3><small>${je(l)}</small></button>`;const c=[a.ult?`◆ ${a.ult}`:"",a.drones?`⬢ ${a.drones}`:""].filter(Boolean).join(" · ");return`<button class="card" data-a="choose:${o}" ${l?"disabled":""}><h3>${a.label}</h3>${c?`<small>Cost ${c}</small>`:""}<p>${a.desc}</p>${l?`<small class="why">${je(l)}</small>`:""}</button>`}).join(""),`<div class="modal"><h2>${s.name}</h2><small>${je(r.name)} · ⬢ ${r.drones} here</small><p class="flavour">${s.text}</p><div class="cards">${i}</div>${Tt("choose:-1","Decide later",{cls:"wide"})}</div>`}function Xx(n){const e=n.meta,t=Array.from({length:e.unlocked+1},(i,s)=>`<button class="chip ${n.newThreat===s?"on":""}" data-a="threat:${s}">${s}</button>`).join("");return`<div class="title"><h1>SPACE<span>NODES</span></h1><p class="tag">Recruit your specialists. Send the right three. Take the Citadel before the Coalition takes you.</p>
    ${n.hasSave?Tt("continue","Continue run",{cls:"wide hot"}):""}
    ${Tt("newrun","New run",{cls:`wide ${n.hasSave?"":"hot"}`})}
    <div class="lv"><small>THREAT LEVEL</small><div class="chips">${t}</div><small class="dim">${n.newThreat===0?"Standard campaign.":"Tougher garrisons and faster mobilization."} Win to unlock the next.</small></div>
    ${Tt("help","How to play",{cls:"wide"})}
    <small class="dim">Runs ${e.runs} · Wins ${e.wins}</small></div>`}function uu(){return`<div class="modal help"><h2>How to play</h2>
  <p><b>Goal.</b> Capture <b>The Citadel</b> ✦. You lose if your <b>Commander</b> ★ is captured and not rescued in time.</p>
  <p><b>Specialists are the game.</b> Each has a <b>Power</b> number and one passive effect. Power adds to attack when they fly with a fleet and to defence where they stand. A fleet <b>needs a specialist to lead</b> an attack, and the leader of a winning attack is upgraded once. Three work together at a node or in a fleet; extras wait in reserve.</p>
  <p><b>Roster.</b> Your specialists are always shown down the side. Tap one to jump to them, hold (or hover) for details, <b>drag one onto a friendly node</b> to send them there.</p>
  <p><b>Sending fleets.</b> <b>Drag from one of your nodes onto any other node.</b> Onto an enemy or neutral node it is an attack; onto your own it reinforces, through a corridor if one connects them. A sheet opens: set the Drones, choose who goes (specialists that help an attack glow), and read the exact outcome before you launch. Attack must beat Drones + shield + defending Power.</p>
  <p><b>Economy.</b> Planets mine Ultanium ◆; stations build Drones ⬢ on their own. Every Drone and specialist costs upkeep, so your income sets the size of your army. The ⬢ button in the top bar pauses production when you want to save.</p>
  <p><b>Nodes.</b> Each has two levels to raise (Mine or Barracks, and Shield) and one <b>specialty</b> chosen once: Refinery, Lab or Supply world for planets; Missile Silo, Depot or Launch Bay for stations.</p>
  <p><b>Supply and Front.</b> Every node is Supply or Front. Press <b>Rally</b> on a node and every Supply node sends its spare Drones there, once. Front nodes never give theirs up. If the node is about to be hit, Rally becomes <b>Reinforce</b> and only Drones that can arrive in time are sent. Corridors ⇄ carry Drones and specialists at double speed without using a fleet.</p>
  <p><b>Research.</b> Labs fill a bar; when it is full you choose 1 of 3 cards.</p>
  <p><b>The Coalition.</b> Three factions and an Archon. Mobilization grows their armies over time. Capture a faction's capital ♛ and the whole faction surrenders.</p>
  <p><b>Controls.</b> Phone: two fingers pan and zoom (one finger on empty space also pans). Desktop: move the mouse to a screen edge or use WASD to scroll, wheel to zoom, Space pauses, 1/2/3 speed, M menu, H home, Esc cancels.</p>
  ${Tt("helpclose","Got it",{cls:"wide hot"})}</div>`}Wh();const Hs="spacenodes.save.v4",Uc="spacenodes.meta.v1",Ki=n=>document.getElementById(n),cn=Ki("map"),Ca=cn.getContext("2d"),fu=Ki("hud"),Gi=Ki("roster"),ma=Ki("panel"),ga=Ki("overlay"),hu=Ki("toasts"),Ds=Ki("tip"),gr=Ki("ghost"),mi={get:n=>{try{return localStorage.getItem(n)}catch{return null}},set:(n,e)=>{try{localStorage.setItem(n,e)}catch{}},del:n=>{try{localStorage.removeItem(n)}catch{}}},F={g:null,speed:1,paused:!1,sel:null,menu:null,mode:null,launch:null,drag:null,pickSpec:-1,screen:"title",newThreat:0,meta:{runs:0,wins:0,unlocked:0,best:0,...JSON.parse(mi.get(Uc)||"{}")},hasSave:!!mi.get(Hs)},De={x:100,y:150,z:7};let Cn=null,Qn=0,jn=0,nh=-1,yt=!0,_r=0,Ya=!1,pu="title",jl=!1;const Ri=[];window.__app=F;window.__nodeScreen=n=>Xf(F.g.nodes[n]);const qx=qh({game:()=>F.g,selected:()=>F.sel?.type==="node"?F.sel.id:-1,setSpeed:n=>{F.speed=n,yt=!0},refresh:()=>{yt=!0}});function mu(n){F.g=n,F.screen="game",F.sel=null,F.menu=null,F.mode=null,F.launch=null,F.drag=null,F.paused=!1,F.speed=1;const e=n.nodes[n.home];De.x=e.x+8,De.y=e.y,De.z=Math.max(6.5,Math.min(9,Qn/52)),_r=n.log.length,Ri.length=0,yt=!0,jl=!1}function Fc(){F.g&&!F.g.result&&F.screen==="game"&&(mi.set(Hs,JSON.stringify(F.g)),F.hasSave=!0)}function Yx(){const n=F.g;mi.del(Hs),F.hasSave=!1,F.meta.runs++,n.result==="win"&&(F.meta.wins++,F.meta.unlocked=Math.min(5,Math.max(F.meta.unlocked,n.threat+1))),mi.set(Uc,JSON.stringify(F.meta))}function Li(n){n&&(Ri.push({msg:n,kind:"warn",node:-1,until:performance.now()+3500}),yt=!0)}function Wt(n){const e=rp(F.g,n);return Li(e),yt=!0,!e}function ih(n){const e=F.g.nodes[n],t=Qn<820,i=!!F.sel||!!F.launch;Cn={x:e.x+(!t&&i?190/De.z:0),y:e.y+(t&&i?jn*.22/(De.z*On):0)}}function mo(n,e){F.sel={type:n,id:e},F.launch=null,F.pickSpec=-1,yt=!0,n==="node"&&ih(e)}function sh(n,e,t){const i=F.g,s=i.nodes[n],r=i.nodes[e];if(s.owner!==$)return Li("Not your node");if(n===e)return Li("Pick a different node");if(t){const l=lo(i,s,r);if(!l.via)return Li(`${s.name} has no fleet ready and no corridor to ${r.name}`);t=l.via==="corridor"}if(!t){if(r.owner!==$&&!ro(i,r))return Li("Target is not in detection range");if(ti(i,s)<1)return Li(`${s.name} has no fleet ready: its launch slots are all away`)}const a={from:n,to:e,drones:0,specs:[],lane:t},o=Math.max(0,s.drones-Wi(i,s));if(r.owner===$)a.drones=o;else{a.specs=ps(i,s).filter(c=>c!==i.cmdSpec).slice(0,yr(i,s));const l=eh(i,a);a.drones=l?Math.min(s.drones,l+1):o}F.launch=a,F.mode=null,F.sel={type:"node",id:e},yt=!0,ih(e)}function Ka(n){const[e,...t]=n.split(":"),i=F.g,s=F.sel?.type==="node"?F.sel.id:-1,r=a=>{F.mode={k:a,from:s},F.sel=null,F.launch=null,F.pickSpec=-1};switch(e){case"newrun":case"again":mu(Jh(Date.now()%2147483647|0,F.newThreat));break;case"continue":{const a=mi.get(Hs);if(a)try{const o=JSON.parse(a);ms(o),mu(o)}catch{mi.del(Hs),F.hasSave=!1}break}case"title":F.screen="title",F.g=null;break;case"threat":F.newThreat=+t[0];break;case"help":pu=F.screen,F.screen="help",F.menu=null;break;case"helpclose":F.screen=pu;break;case"abandon":confirm("Abandon this run?")&&(mi.del(Hs),F.hasSave=!1,F.meta.runs++,mi.set(Uc,JSON.stringify(F.meta)),F.screen="title",F.g=null);break;case"pause":F.paused=!F.paused,F.paused&&Fc();break;case"speed":F.speed=F.speed===1?2:F.speed===2?4:1;break;case"console":qx.toggle();break;case"menu":F.menu=t[0]||null;break;case"close":F.sel=null,F.launch=null;break;case"focus":F.menu=null,mo("node",+t[0]);break;case"cancelmode":F.mode=null;break;case"up":Wt({c:"up",node:s,what:t[0],id:t[1]});break;case"cancel":Wt({c:"cancel",node:s});break;case"event":Wt({c:"event",node:s});break;case"ransom":Wt({c:"ransom",spec:+t[0],recruit:!1});break;case"recruit":Wt({c:"ransom",spec:+t[0],recruit:!0});break;case"choose":Wt({c:"choose",idx:+t[0]});break;case"produce":Wt({c:"produce"});break;case"promote":Wt({c:"promote",spec:+t[0]});break;case"rally":Wt({c:"rally",node:s});break;case"front":i.nodes[s].front!==(t[0]==="1")&&Wt({c:"front",node:s});break;case"pickspec":F.pickSpec=F.pickSpec===s?-1:s;break;case"floor":Wt({c:"floor",node:s,v:Wi(i,i.nodes[s])+ +t[0]});break;case"corridorpick":r("corridor");break;case"missile":r("missile");break;case"noop":break;case"missilefrom":Wt({c:"missile",from:+t[0],to:s});break;case"lspec":{const a=F.launch,o=+t[0];a.specs.includes(o)?a.specs=a.specs.filter(l=>l!==o):a.lane||a.specs.length<yr(i,i.nodes[a.from])?a.specs=a.specs.concat(o):Li("The crew is full");break}case"lq":{const a=F.launch,o=i.nodes[a.from].drones;a.drones=t[0]==="all"?o:t[0]==="half"?Math.ceil(o/2):t[0]==="none"?0:eh(i,a)||o;break}case"lcancel":F.launch=null;break;case"lconfirm":{const a=F.launch;Wt(a.lane?{c:"convoy",from:a.from,to:a.to,drones:a.drones,specs:a.specs}:{c:"launch",from:a.from,to:a.to,drones:a.drones,specs:a.specs})&&(F.launch=null,F.sel=null);break}}yt=!0}document.addEventListener("click",n=>{const e=n.target;!e.closest("#tip")&&!Qs&&hs(),Qs=!1;const t=e.closest("[data-a]");!t||t.disabled||t instanceof HTMLInputElement&&t.type!=="checkbox"||Ka(t.dataset.a)});document.addEventListener("input",n=>{const e=n.target;if(e.id==="lslider"&&F.launch&&F.g){F.launch.drones=+e.value;const t=document.getElementById("preview");t&&(t.innerHTML=th(F.g,F.launch))}});document.addEventListener("pointerdown",n=>{n.target.id==="lslider"&&(Ya=!0)});document.addEventListener("pointerup",()=>{Ya&&(Ya=!1,yt=!0)});const Gn=new Set;document.addEventListener("keyup",n=>Gn.delete(n.key.toLowerCase()));document.addEventListener("keydown",n=>{F.screen!=="game"||!F.g||(Gn.add(n.key.toLowerCase()),n.key===" "?(n.preventDefault(),Ka("pause")):n.key==="1"?(F.speed=1,yt=!0):n.key==="2"?(F.speed=2,yt=!0):n.key==="3"?(F.speed=4,yt=!0):n.key==="m"||n.key==="M"?Ka(F.menu?"menu:":"menu:research"):n.key==="h"||n.key==="H"?mo("node",(F.g.nodes.find(e=>e.owner===$&&e.home)||F.g.nodes.find(e=>e.owner===$)||F.g.nodes[0]).id):n.key==="Escape"&&(F.mode?F.mode=null:F.launch?F.launch=null:F.menu?F.menu=null:F.sel=null,yt=!0))});document.addEventListener("visibilitychange",()=>{document.hidden&&Fc()});let Za=-1,Qs=!1,Cr=0;function go(n,e,t){if(!F.g||!F.g.specs[n])return;Za!==n&&(Ds.innerHTML=Nx(F.g,F.g.specs[n]),Za=n),Ds.className="open";const i=Ds.getBoundingClientRect();Ds.style.left=`${Math.max(8,Math.min(Qn-i.width-8,e-i.width/2))}px`,Ds.style.top=`${t-i.height-18<60?Math.min(jn-i.height-8,t+26):t-i.height-18}px`}function hs(){Za>=0&&(Ds.className="",Za=-1)}const rh=n=>n instanceof HTMLElement?n.closest("[data-tip]"):null;document.addEventListener("pointerover",n=>{if(n.pointerType!=="mouse"||n.target===cn||ei||zt)return;const e=rh(n.target);if(e){const t=e.getBoundingClientRect();go(+e.dataset.tip,t.left+t.width/2,t.top)}else hs()});document.addEventListener("pointerdown",n=>{if(clearTimeout(Cr),n.pointerType==="mouse"||n.target===cn)return;const e=rh(n.target),t=n.clientX,i=n.clientY;e&&(Cr=window.setTimeout(()=>{if(!F.drag&&Math.hypot(Wn.x-t,Wn.y-i)<10){const s=e.getBoundingClientRect();go(+e.dataset.tip,s.left+s.width/2,s.top),Qs=!0}},420))});const Wn={x:0,y:0};let Oc=!1,ah=!1;document.addEventListener("pointermove",n=>{Wn.x=n.clientX,Wn.y=n.clientY,Oc=n.pointerType==="mouse",ah=n.target===cn});document.documentElement.addEventListener("mouseleave",()=>{Oc=!1});document.addEventListener("pointerup",()=>clearTimeout(Cr));function oh(n,e){let t=null,i=1e9;for(const s of Aa){const r=Math.hypot(s.x-n,s.y-e);r<s.r+6&&r<i&&(i=r,t=s)}return t}let ei=null;Gi.addEventListener("pointerdown",n=>{const e=n.target.closest(".rost");!e||!F.g||(ei={spec:+e.dataset.spec,x:n.clientX,y:n.clientY,id:n.pointerId},Gi.setPointerCapture(n.pointerId))});Gi.addEventListener("pointermove",n=>{if(!ei||!F.g)return;const e=F.g,t=e.specs[ei.spec];if(!F.drag&&Math.hypot(n.clientX-ei.x,n.clientY-ei.y)>10&&(F.drag={spec:t.id,x:n.clientX,y:n.clientY,over:-1,label:"",ok:!1},Ja=!1,hs(),clearTimeout(Cr),yt=!0),!F.drag)return;const i=F.drag;i.x=n.clientX,i.y=n.clientY;const s=document.elementFromPoint(n.clientX,n.clientY),r=s===cn?js(n.clientX,n.clientY):null;if(i.over=r&&r.type==="node"?r.id:-1,i.ok=!1,s?.closest('[data-drop="crew"]')&&F.launch)i.ok=e.nodes[F.launch.from].specs.includes(t.id),i.label=i.ok?"Add to the crew":`Not at ${e.nodes[F.launch.from].name}`;else if(i.over>=0){const a=e.nodes[i.over],o=fc(e,t,a);i.ok=!!o.via,i.label=o.via?`${a.name} · ${At(o.secs)} ${o.via==="corridor"?"via corridor":"by fleet"}`:o.why}else i.label=t.held?"They are a prisoner":t.node<0?"Already travelling":"Drop on one of your nodes";gr.className=`open ${i.ok?"ok":""}`,gr.style.left=`${i.x}px`,gr.style.top=`${i.y}px`,gr.innerHTML=`${Yi(e,t,!0,!0)}<span>${i.label.replace(/</g,"&lt;")}</span>`});const lh=n=>{if(!ei||!F.g)return;const e=F.g,t=e.specs[ei.spec],i=F.drag;if(ei=null,F.drag=null,gr.className="",clearTimeout(Cr),i&&(hs(),Qs=!1),i)document.elementFromPoint(n.clientX,n.clientY)?.closest('[data-drop="crew"]')&&F.launch?i.ok&&!F.launch.specs.includes(t.id)&&Ka(`lspec:${t.id}`):i.over>=0&&i.ok?Wt({c:"move",spec:t.id,to:i.over}):i.over>=0&&Li(i.label);else if(!Qs){const s=t.node>=0?t.node:e.fleets.find(r=>r.id===t.fleet)?.to??-1;s>=0&&mo("node",s)}yt=!0};Gi.addEventListener("pointerup",lh);Gi.addEventListener("pointercancel",lh);let Hi=-1,zt=null,Ja=!1,dr=0;const sn=new Map;let Oi=null,os=!1,Vs=0,ec=!1,Qa=0;const gu=(n,e)=>({x:(n-Qn/2)/De.z+De.x,y:(e-jn/2)/(De.z*On)+De.y}),$n={x:0,y:0};function js(n,e){const t=F.g;for(const r of t.fleets){if(!Dr(t,r))continue;const a=Qt(r.x,r.y,3);if(Math.hypot(a.x-n,a.y-e)<24)return{type:"fleet",id:r.id}}let i=-1,s=1e9;for(const r of t.nodes){if(Fi(t,r).tier==="hidden")continue;const a=Xf(r),o=Math.hypot(a.x-n,a.y-e);o<Math.max(30,pi(r)*De.z*2.3)&&o<s&&(s=o,i=r.id)}return i>=0?{type:"node",id:i}:null}function Kx(n,e){if(F.g,!F.mode){for(const i of Xl)if(Math.abs(i.x-n)<i.r&&Math.abs(i.y-e)<13){Wt({c:"rally",node:i.node});return}}const t=js(n,e);if(F.mode){if(!t||t.type!=="node")return;const i=F.mode,s=()=>{F.mode=null,F.sel={type:"node",id:i.from}};i.k==="corridor"?Wt({c:"corridor",from:i.from,to:t.id})&&s():Wt({c:"missile",from:i.from,to:t.id})&&s(),yt=!0;return}if(!t){F.launch||(F.sel=null),yt=!0;return}if(F.launch&&t.type==="node"&&t.id!==F.launch.from)return sh(F.launch.from,t.id,F.launch.lane);mo(t.type,t.id)}cn.addEventListener("pointerdown",n=>{if(cn.setPointerCapture(n.pointerId),hs(),ec=!1,clearTimeout(Qa),sn.set(n.pointerId,{x:n.clientX,y:n.clientY}),sn.size===1&&(Oi={x:n.clientX,y:n.clientY},os=!1,Hi=-1,F.g&&F.screen==="game"&&!F.mode)){const e=js(n.clientX,n.clientY);e&&e.type==="node"&&F.g.nodes[e.id].owner===$&&(Hi=e.id)}if(sn.size===2){Hi=-1,zt=null;const[e,t]=[...sn.values()];Vs=Math.hypot(e.x-t.x,e.y-t.y),os=!0}Cn=null,$n.x=$n.y=0,n.pointerType!=="mouse"&&(Qa=window.setTimeout(()=>{if(sn.size!==1||os||!Oi)return;const e=oh(Oi.x,Oi.y);e&&(ec=!0,Qs=!0,go(e.spec,e.x,e.y),navigator.vibrate&&navigator.vibrate(12))},420))});cn.addEventListener("pointermove",n=>{const e=sn.get(n.pointerId);if(!e){if(F.g&&F.screen==="game"){const s=n.pointerType==="mouse"?oh(n.clientX,n.clientY):null;s?go(s.spec,s.x,s.y):hs();const r=js(n.clientX,n.clientY);nh=r&&r.type==="node"?r.id:-1,cn.style.cursor=r||s?"pointer":"grab"}return}const t=n.clientX-e.x,i=n.clientY-e.y;if(e.x=n.clientX,e.y=n.clientY,sn.size===1)if(Oi&&Math.hypot(n.clientX-Oi.x,n.clientY-Oi.y)>8&&(os=!0),os&&Hi>=0){const s=js(n.clientX,n.clientY);zt||(Ja=!1),zt={from:Hi,over:s&&s.type==="node"&&s.id!==Hi?s.id:-1},hs(),clearTimeout(Qa)}else os&&(De.x-=t/De.z,De.y-=i/(De.z*On),$n.x=-t/De.z,$n.y=-i/(De.z*On));else if(sn.size===2){const[s,r]=[...sn.values()],a=Math.hypot(s.x-r.x,s.y-r.y);Vs>0&&dh((s.x+r.x)/2,(s.y+r.y)/2,a/Vs),Vs=a,De.x-=t/2/De.z,De.y-=i/2/(De.z*On)}});const ch=n=>{const e=sn.delete(n.pointerId);if(clearTimeout(Qa),zt&&F.g){const t=zt;zt=null,Hi=-1,yt=!0,t.over>=0&&sh(t.from,t.over,F.g.nodes[t.over].owner===$),sn.size<2&&(Vs=0);return}Hi=-1,e&&sn.size===0&&!os&&!ec&&Oi&&F.g&&F.screen==="game"&&Kx(n.clientX,n.clientY),sn.size<2&&(Vs=0)};cn.addEventListener("pointerup",ch);cn.addEventListener("pointercancel",ch);cn.addEventListener("wheel",n=>{n.preventDefault(),dh(n.clientX,n.clientY,Math.exp(-n.deltaY*.0015))},{passive:!1});function dh(n,e,t){const i=gu(n,e);De.z=Math.max(2.4,Math.min(13,De.z*t));const s=gu(n,e);De.x+=i.x-s.x,De.y+=i.y-s.y}function uh(){const n=Math.min(2,window.devicePixelRatio||1);Qn=window.innerWidth,jn=window.innerHeight,cn.width=Math.round(Qn*n),cn.height=Math.round(jn*n),Ca.setTransform(n,0,0,n,0,0)}window.addEventListener("resize",uh);uh();const _u={};function is(n,e,t){if(_u[e]===t)return;_u[e]=t;const i=n.querySelector(".pbody"),s=i?i.scrollTop:0;n.innerHTML=t;const r=n.querySelector(".pbody");r&&s&&(r.scrollTop=s)}function Zx(){const n=F.g,e=performance.now();if(F.screen==="title"||!n){for(const[i,s]of[[fu,"hud"],[ma,"panel"],[Gi,"roster"],[hu,"toasts"]])is(i,s,"");ma.className="",ga.className="open clear",is(ga,"ov",F.screen==="help"?uu():Xx(F));return}for(;_r<n.log.length;_r++){const i=n.log[_r];i.kind!=="info"&&Ri.push({msg:i.msg,kind:i.kind,node:i.node,until:e+(i.kind==="bad"?9e3:6e3)})}for(n.log.length>=150&&(_r=n.log.length);Ri.length&&(Ri[0].until<e||Ri.length>4);)Ri.shift();if(is(hu,"toasts",Ri.map(i=>`<div class="toast ${i.kind}" ${i.node>=0?`data-a="focus:${i.node}"`:""}>${i.msg.replace(/</g,"&lt;")}</div>`).join("")),is(fu,"hud",Ux(F)),ei||(is(Gi,"roster",Fx(F)),Gi.className=n.specs.filter(i=>i.owner===$).length*66>jn-80?"many":""),!Ya){const i=Hx(F);ma.className=i?F.launch?"open launch":"open":"",is(ma,"panel",i)}const t=F.screen==="help"?uu():n.result||n.pending.length?$x(F):F.menu?Vx(F):"";ga.className=t?"open":"",is(ga,"ov",t)}function Jx(n){const e=F.mode;if(zt)return new Set(n.nodes.filter(s=>s.id!==zt.from&&(s.owner===$||ro(n,s))).map(s=>s.id));if(F.drag){const s=n.specs[F.drag.spec];return new Set(n.nodes.filter(r=>r.owner===$&&fc(n,s,r).via).map(r=>r.id))}if(!e)return null;const t=n.nodes[e.from],i=s=>new Set(n.nodes.filter(s).map(r=>r.id));return e.k==="corridor"?i(s=>{const r=Ru(n,t,s);return!r||r==="Not enough Ultanium"}):i(s=>!co(n,t,s))}let vu=performance.now(),Ps=0,xu=0,Su=0;function fh(n){const e=Math.min(.25,(n-vu)/1e3);vu=n;const t=F.g;if(t&&F.screen==="game"){if(!F.paused&&!F.menu&&!t.result&&!t.pending.length){Ps+=e*F.speed;let a=0;for(;Ps>=ne.dt&&a++<40;)if(Ps-=ne.dt,!sp(t)){Ps=0,yt=!0;break}Ps>1&&(Ps=0)}t.result&&!jl&&(jl=!0,Yx(),yt=!0),!sn.size&&Math.abs($n.x)+Math.abs($n.y)>.01&&(De.x+=$n.x,De.y+=$n.y,$n.x*=.9,$n.y*=.9);const i=(Gn.has("arrowright")||Gn.has("d")?1:0)-(Gn.has("arrowleft")||Gn.has("a")?1:0),s=(Gn.has("arrowdown")||Gn.has("s")?1:0)-(Gn.has("arrowup")||Gn.has("w")?1:0);if(Oc&&ah&&!sn.size&&!F.drag&&!F.menu&&!t.pending.length&&!document.getElementById("console")?.classList.contains("open")){const a=Wn.x<8?-1:Wn.x>Qn-8?1:0,o=Wn.y<8?-1:Wn.y>jn-8?1:0;(a||o)&&(Cn=null,De.x+=a*520*e/De.z,De.y+=o*520*e/(De.z*On))}if(zt||F.drag){const o=Wn.x,l=Wn.y,c=56,d=o<34?-1:o>Qn-34?1:0,f=l<c+34?-1:l>jn-34?1:0,u=js(o,l),g=u&&u.type==="node"?u.id:-1,v=g>=0&&g!==zt?.from;!d&&!f?(Ja=!0,dr=0):v?dr=0:Ja&&(dr=dr||n)&&n-dr>350&&(Cn=null,De.x+=d*330*e/De.z,De.y+=f*330*e/(De.z*On)),zt&&(zt.over=g!==zt.from?g:-1)}(i||s)&&(Cn=null,De.x+=i*420*e/De.z,De.y+=s*420*e/(De.z*On)),Cn&&(De.x+=(Cn.x-De.x)*.16,De.y+=(Cn.y-De.y)*.16,Math.hypot(Cn.x-De.x,Cn.y-De.y)<.4&&(Cn=null)),De.x=Math.max(-40,Math.min(t.w+40,De.x)),De.y=Math.max(-40,Math.min(t.h+40,De.y));const r=!!F.mode||!!F.drag||!!zt;Ix(Ca,t,{cam:De,w:Qn,h:jn,sel:F.launch?{type:"node",id:F.launch.to}:F.sel,targeting:r,from:zt?.from??F.mode?.from??F.launch?.from??-1,hover:zt?zt.over:F.drag?F.drag.over:nh,glow:Jx(t)},n),n-Su>15e3&&(Su=n,Fc())}else Ca.fillStyle="#262e49",Ca.fillRect(0,0,Qn,jn);(yt||n-xu>250)&&(yt=!1,xu=n,Zx()),requestAnimationFrame(fh)}requestAnimationFrame(fh);
