(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const te={dt:.1,fleetSpeed:1.2,startUlt:30,startDrones:6,baseIncome:8,freeBase:8,mineOut:[0,3,5.5,8],sizeMult:[1,1.3,1.7],refineryMult:1.5,labRp:4,labWorkers:2,supplyFree:6,upkeepDrone:.6,upkeepPower:.5,depotMult:.5,armyShare:.75,desertSecs:4,lvCost:[0,0,30,80],lvTime:40,shCost:[0,15,35,70],shTime:25,specCost:40,specTime:40,missileCost:100,missileTime:60,missileRange:170,missileKill:6,missileSpeed:2.5,prodSecs:[0,10,7,5],shieldPerLv:2,shieldRegenSecs:6,slotsStation:2,slotsPlanet:1,specSlots:3,crew:3,baySpeed:.3,bayCrew:1,rallyBatch:4,fovInner:{planet:[42,46,52],station:48},fovOuter:{planet:[72,78,88],station:82},fleetFov:[26,46],corridorCost:30,corridorTime:45,corridorRange:150,corridorMax:2,corridorSpeed:2,rescueSecs:150,ransom:15,recruitCost:25,rpBase:6,rpStep:3,xpLevels:[0,6,16,30,48],nodes:36,neutralShield:[1,2,3],stageSecs:420,graceSecs:300,offInterval:[0,240,210,180,150,120],offCommit:[0,.5,.6,.7,.8,.9],gatherSecs:45,stageFree:6,surgeFree:12,captureSetback:.15,aegisPerLayer:5},Rn={refinery:{name:"Refinery",on:"planet",desc:"Mine output +50%."},lab:{name:"Lab",on:"planet",desc:"Adds research speed. Needs 2 Drones working."},supply:{name:"Supply world",on:"planet",desc:"Feeds 6 Drones: they cost no upkeep."},silo:{name:"Missile Silo",on:"station",desc:"Builds missiles. A missile wipes a node's shield and kills 6 Drones. No upkeep."},depot:{name:"Depot",on:"station",desc:"Drones garrisoned here cost half upkeep."},bay:{name:"Launch Bay",on:"station",desc:"Fleets from here fly 30% faster and carry one more specialist."}},ct={fleet:"#7fb2dc",eco:"#e3c565",def:"#8fc79a",intel:"#b39ad6",war:"#dd7a63",odd:"#e9a9c9"},tt={},qe=n=>tt[n.id]=n;qe({id:"admiral",name:"Admiral",tag:"Ad",color:ct.fleet,role:"Fleet speed",pow:2,starter:!0,text:"Their fleet flies 25% faster.",loc:{speed:.25},up:{text:"Their fleet flies 50% faster.",loc:{speed:.25}}});qe({id:"engineer",name:"Engineer",tag:"En",color:ct.eco,role:"Construction",pow:1,starter:!0,text:"Upgrades here build twice as fast and cost 10 less.",loc:{build:1,upgCost:10},up:{text:"Upgrades here cost 20 less.",loc:{upgCost:10}}});qe({id:"quartermaster",name:"Quartermaster",tag:"Qm",color:ct.eco,role:"Supply",pow:1,starter:!0,text:"Feeds 4 Drones at their node: they cost no upkeep.",loc:{free:4},up:{text:"Feeds 7 Drones.",loc:{free:3}}});qe({id:"scout",name:"Scout",tag:"Sc",color:ct.intel,role:"Vision",pow:1,starter:!0,text:"Their node or fleet sees 40% further.",loc:{fov:.4},up:{text:"Also reads the strength of every fleet you detect.",glob:{sigint:1}}});qe({id:"tactician",name:"Tactician",tag:"Ta",color:ct.war,role:"Massed attack",pow:3,starter:!0,text:"+1 attack per 4 Drones in their fleet (up to +3).",loc:{per4:3},up:{text:"Up to +5.",loc:{per4:2}}});qe({id:"vanguard",name:"Vanguard",tag:"Va",color:ct.war,role:"Shock troops",pow:4,text:"+1 attack.",loc:{atk:1},up:{text:"Power 5.",pow:1}});qe({id:"sentinel",name:"Sentinel",tag:"Se",color:ct.def,role:"Defence",pow:2,text:"+3 defence where stationed.",loc:{def:3},up:{text:"+5 defence.",loc:{def:2}}});qe({id:"siegebreaker",name:"Siegebreaker",tag:"Sg",color:ct.war,role:"Shield breaker",pow:2,text:"Their attacks ignore 4 shield.",loc:{pierce:4},up:{text:"Their attacks ignore all shields.",loc:{pierce:30}}});qe({id:"saboteur",name:"Saboteur",tag:"Sb",color:ct.intel,role:"First strike",pow:2,text:"Destroys 2 defending Drones before the battle.",loc:{strike:2},up:{text:"Destroys 4.",loc:{strike:2}}});qe({id:"diplomat",name:"Diplomat",tag:"Di",color:ct.eco,role:"Neutral expansion",pow:1,text:"+4 attack against neutral nodes.",loc:{vsNeutral:4},up:{text:"+7 against neutral nodes.",loc:{vsNeutral:3}}});qe({id:"scientist",name:"Scientist",tag:"Sn",color:ct.intel,role:"Research",pow:1,text:"+2 research per minute.",loc:{research:2},up:{text:"+4 research per minute.",loc:{research:2}}});qe({id:"medic",name:"Medic",tag:"Me",color:ct.def,role:"Rescue",pow:1,text:"When their node or fleet is defeated, everyone with them escapes home.",charge:{on:"fall",cd:180,mods:{medic:1},text:"Escape (recharges in 3:00)"},up:{text:"Recharges in 1:30.",cd:90}});qe({id:"ghost",name:"Ghost",tag:"Gh",color:ct.intel,role:"Stealth",pow:2,text:"Their fleet is unseen: the enemy sends no reinforcements against it.",loc:{stealth:1},up:{text:"Also ignores 3 shield.",loc:{pierce:3}}});qe({id:"reclaimer",name:"Reclaimer",tag:"Rc",color:ct.eco,role:"Salvage",pow:1,text:"Winning attacks pay 1 Ultanium per enemy Drone destroyed.",loc:{salvage:1},up:{text:"Pays 2 per Drone.",loc:{salvage:1}}});qe({id:"foreman",name:"Foreman",tag:"Fo",color:ct.war,role:"Production",pow:1,text:"The station they stand on builds each Drone 3 s faster.",loc:{prodSecs:3},up:{text:"5 s faster.",loc:{prodSecs:2}}});qe({id:"castellan",name:"Castellan",tag:"Cs",color:ct.def,role:"Shields",pow:2,text:"Shields here hold 3 more and recharge twice as fast.",loc:{shield:3,regen:1},up:{text:"Shields hold 5 more.",loc:{shield:2}}});qe({id:"martyr",name:"Martyr",tag:"Ma",color:ct.def,role:"Attrition",pow:1,text:"If their node falls, the attacker loses 5 more Drones.",loc:{martyr:5},up:{text:"The attacker loses 8 more.",loc:{martyr:3}}});qe({id:"echo",name:"Echo",tag:"Ec",color:ct.odd,role:"Amplifier",pow:1,text:"Doubles the passive of the specialist beside them.",up:{text:"Power 3.",pow:2}});qe({id:"broker",name:"Broker",tag:"Br",color:ct.eco,role:"Income",pow:1,text:"+4 Ultanium per minute.",glob:{income:4},up:{text:"+7 per minute.",glob:{income:3}}});qe({id:"navigator",name:"Navigator",tag:"Na",color:ct.fleet,role:"Launch control",pow:1,text:"Fleets launched from their node fly 30% faster.",loc:{launchSpeed:.3},up:{text:"60% faster.",loc:{launchSpeed:.3}}});qe({id:"prospector",name:"Prospector",tag:"Pr",color:ct.eco,role:"Extraction",pow:1,text:"The planet they stand on yields +3 Ultanium per minute.",loc:{inc:3},up:{text:"+5 per minute.",loc:{inc:2}}});qe({id:"recruiter",name:"Recruiter",tag:"Rt",color:ct.war,role:"Manpower",pow:1,text:"5 of your Drones cost no upkeep.",glob:{freeDrones:5},up:{text:"9 Drones cost no upkeep.",glob:{freeDrones:4}}});qe({id:"oracle",name:"Oracle",tag:"Or",color:ct.intel,role:"Foresight",pow:1,text:"Coalition offensives are announced with their target; mobilization is 10% slower.",glob:{warn:1,mobSlow:.1},up:{text:"Mobilization 20% slower.",glob:{mobSlow:.1}}});qe({id:"pirate",name:"Pirate",tag:"Pi",color:ct.war,role:"Ambush",pow:2,text:"Ambushes the first enemy fleet to reach their node, destroying 4 of its Drones.",charge:{on:"defend",cd:90,mods:{lance:4},text:"Ambush (recharges in 1:30)"},up:{text:"Recharges in 0:45.",cd:45}});qe({id:"inquisitor",name:"Inquisitor",tag:"In",color:ct.odd,role:"Prisoners",pow:1,text:"Prisoners can be recruited for free and ransoms pay double.",glob:{recruitFree:1,ransom:1},up:{text:"Each prisoner you hold pays 2 Ultanium per minute.",glob:{prisonInc:2}}});qe({id:"architect",name:"Architect",tag:"Ar",color:ct.eco,role:"Corridors",pow:1,text:"Corridors cost half and every node holds one more.",glob:{corridorCost:.5,corridorMax:1},up:{text:"Convoys travel 50% faster.",glob:{laneSpeed:.5}}});qe({id:"smuggler",name:"Smuggler",tag:"Sm",color:ct.fleet,role:"Logistics",pow:1,text:"Their fleet does not hold a launch slot while it is away.",loc:{slotFree:1},up:{text:"And flies 25% faster.",loc:{speed:.25}}});qe({id:"strategist",name:"Strategist",tag:"St",color:ct.war,role:"Decisive strike",pow:2,text:"Their next attack hits for +4.",charge:{on:"attack",cd:120,mods:{atk:4},text:"Decisive strike (recharges in 2:00)"},up:{text:"Recharges in 1:00.",cd:60}});qe({id:"warden",name:"Warden",tag:"Wd",color:ct.def,role:"Survivors",pow:2,text:"Their fleet loses 2 fewer Drones when it wins.",loc:{surv:2},up:{text:"4 fewer.",loc:{surv:2}}});qe({id:"ironmonger",name:"Ironmonger",tag:"Im",color:"#c98a3c",role:"Ferrum signature",pow:2,sig:"ferrum",text:"Shields here hold 4 more; +2 defence.",loc:{shield:4,def:2},up:{text:"Shields hold 6 more.",loc:{shield:2}}});qe({id:"berserker",name:"Berserker",tag:"Bs",color:"#d2604a",role:"Crimson signature",pow:4,sig:"crimson",text:"+3 attack, but their fleet loses 1 more Drone.",loc:{atk:3,surv:-1},up:{text:"+5 attack.",loc:{atk:2}}});qe({id:"lens",name:"Lens",tag:"Ln",color:"#e3c565",role:"Lumen signature",pow:2,sig:"lumen",text:"Lances destroy 3 Drones of every fleet attacking their node.",loc:{lance:3},up:{text:"Lances destroy 5.",loc:{lance:2}}});qe({id:"phantom",name:"Phantom",tag:"Ph",color:"#9a7cc4",role:"Veil signature",pow:2,sig:"veil",text:"All of your fleets fly unseen.",glob:{stealth:1},up:{text:"All of your attacks ignore 2 shield.",glob:{pierce:2}}});qe({id:"wayfinder",name:"Wayfinder",tag:"Wf",color:"#6ea6d6",role:"Drift signature",pow:1,sig:"drift",text:"All of your fleets fly 20% faster.",glob:{speed:.2},up:{text:"35% faster.",glob:{speed:.15}}});qe({id:"warlord",name:"Warlord",tag:"W",color:"#ffffff",role:"Faction leader",pow:4,hidden:!0,text:"+2 defence at the capital.",loc:{def:2},up:{text:""}});qe({id:"archon",name:"Archon",tag:"A",color:"#e07aa0",role:"Coalition Commander",pow:6,hidden:!0,text:"+3 defence at the Citadel.",loc:{def:3},up:{text:""}});qe({id:"captain",name:"Captain",tag:"Cp",color:"#aab2c0",role:"Coalition fleet leader",pow:1,hidden:!0,text:"Leads a Coalition fleet.",up:{text:""}});const uh=Object.values(tt).filter(n=>!n.sig&&!n.hidden).map(n=>n.id),fh=Object.values(tt).filter(n=>n.starter).map(n=>n.id),Vi={marshal:{id:"marshal",name:"Marshal",blurb:"Leads from the front.",text:"+2 attack.",loc:{atk:2}},pathfinder:{id:"pathfinder",name:"Pathfinder",blurb:"Controls tempo.",text:"Their fleet flies 30% faster; all your nodes see 20% further.",loc:{speed:.3},glob:{fov:.2}},warden:{id:"warden",name:"Warden",blurb:"Holds the line.",text:"+4 defence where stationed; shields there recharge twice as fast.",loc:{def:4,regen:1}},industrialist:{id:"industrialist",name:"Industrialist",blurb:"Builds an empire.",text:"+4 Ultanium per minute; every upgrade costs 8 less.",glob:{income:4,upgCost:8}},corsair:{id:"corsair",name:"Corsair",blurb:"Lives off the enemy.",text:"Winning attacks pay 1 Ultanium per Drone destroyed and lose 2 fewer Drones.",loc:{salvage:1,surv:2}},savant:{id:"savant",name:"Savant",blurb:"Wins with ideas.",text:"+3 research per minute; specialists cost half upkeep.",glob:{rp:3,specUpkeep:.5}}},hh=3,mu=[{id:"ironwill",name:"Iron Will",desc:"Rescue window +45 s.",glob:{rescue:45}},{id:"march",name:"Forced March",desc:"Commander's fleet flies 20% faster.",loc:{speed:.2}},{id:"tithe",name:"Tithe",desc:"+3 Ultanium per minute.",glob:{income:3}},{id:"hard",name:"Hardliner",desc:"+3 defence where the Commander stands.",loc:{def:3}},{id:"shock",name:"Shock Tactics",desc:"Commander's attacks +2.",loc:{atk:2}},{id:"survivor",name:"Survivor",desc:"Commander's fleet loses 2 fewer Drones when it wins.",loc:{surv:2}},{id:"farsight",name:"Far Sight",desc:"All your nodes see 15% further.",glob:{fov:.15}},{id:"requisition",name:"Requisition",desc:"Every upgrade costs 8 less.",glob:{upgCost:8}},{id:"entourage",name:"Entourage",desc:"Nodes and fleets hold one more specialist.",glob:{slots:1}},{id:"sapper",name:"Sapper",desc:"Commander's attacks ignore 3 shield.",loc:{pierce:3}},{id:"magnate",name:"Magnate",desc:"Every planet yields +1 Ultanium per minute.",glob:{inc:1}},{id:"commissary",name:"Commissary",desc:"6 of your Drones cost no upkeep.",glob:{freeDrones:6}},{id:"drill",name:"Drillmaster",desc:"The station the Commander stands on builds Drones 3 s faster.",loc:{prodSecs:3}},{id:"mentor",name:"Mentor",desc:"Specialists cost half upkeep.",glob:{specUpkeep:.5}}],Mn={},rt=(n,e,t,i,s)=>Mn[n]={id:n,name:e,rarity:t,desc:i,mods:s};rt("extractor","Deep-Core Extractor","common","Every planet yields +1 Ultanium per minute.",{inc:1});rt("foundry","Drone Foundry Matrix","common","Stations build each Drone 1 s faster.",{prodSecs:1});rt("surveyor","Quantum Surveyor","common","All nodes see 20% further.",{fov:.2});rt("propulsion","Emergency Propulsion Core","common","All fleets fly 12% faster.",{speed:.12});rt("salvage","Salvage Protocol","common","Winning attacks pay 1 Ultanium per enemy Drone destroyed.",{salvage:1});rt("scaffold","Modular Scaffolds","common","Upgrades build 50% faster.",{build:.5});rt("rations","Ration Stores","common","6 of your Drones cost no upkeep.",{freeDrones:6});rt("bulkhead","Hardened Bulkheads","common","Every node's shield holds 1 more.",{shield:1});rt("ledger","Ration Ledger","common","+4 Ultanium per minute.",{income:4});rt("mirror","Signal Mirror","common","Coalition offensives are announced with their target.",{warn:1});rt("adaptive","Adaptive Shield Network","uncommon","Nodes you capture start with 3 shield.",{capShield:3});rt("warchest","War Chest","uncommon","Gain 8 Ultanium whenever you capture a node.",{capUlt:8});rt("phalanx","Phalanx Doctrine","uncommon","All your attacks +1.",{atk:1});rt("cadre","Veteran Cadre","uncommon","Winning attacks lose 2 fewer Drones.",{surv:2});rt("lattice","Regrowth Lattice","uncommon","Shields hold 1 more and recharge twice as fast.",{regen:1,shield:1});rt("charter","Bulwark Charter","uncommon","+1 defence at every node.",{def:1});rt("stipend","Officers' Stipend","uncommon","Specialists cost half upkeep.",{specUpkeep:.5});rt("contracts","Builder Contracts","uncommon","Every upgrade costs 10 less.",{upgCost:10});rt("lanes","Express Lanes","uncommon","Convoys travel 50% faster and every node holds one more corridor.",{laneSpeed:.5,corridorMax:1});rt("sigil","Tiebreaker Sigil","rare","You win tied battles when attacking.",{ties:1});rt("phoenix","Phoenix Clause","rare","Once every 3 minutes, a node capture refunds the Drones it cost.",{refund:180});rt("chair","Fourth Chair","rare","Nodes and fleets hold one more specialist.",{slots:1});rt("crown","Hollow Crown","rare","Commander rescue window +90 s.",{rescue:90});rt("stillness","Stillness Engine","rare","Coalition mobilization is 25% slower.",{mobSlow:.25});rt("twin","Twin Minds","rare","The Commander's passive effects count twice.",{cmdDouble:1});rt("lance","Null Lance","rare","All your attacks ignore 3 shield.",{pierce:3});rt("levy","Conscription Edict","rare","12 of your Drones cost no upkeep.",{freeDrones:12});rt("night","Long Night","rare","All of your fleets fly unseen.",{stealth:1});rt("academy","War Academy","rare","New recruits arrive already upgraded.",{recruitUp:1});rt("college","Staff College","rare","Every specialist has +1 Power.",{powAll:1});const Pt={},ph=["Industry","Military","Logistics","Intelligence","Command"],mt=(n,e,t,i,s,r,a,o)=>Pt[n]={id:n,name:e,branch:t,tier:i,pre:s,desc:r,mods:a,excl:o};mt("mining","Deep Mining","Industry",1,void 0,"Every planet yields +1 Ultanium per minute.",{inc:1});mt("automation","Automation","Industry",2,"mining","Mines and labs run without Drones working them.",{noOps:1});mt("heavy","Heavy Industry","Industry",3,"automation","Every upgrade costs 15 less.",{upgCost:15},"rationing");mt("rationing","Rationing","Industry",3,"automation","10 of your Drones cost no upkeep.",{freeDrones:10},"heavy");mt("foundries","Orbital Foundries","Industry",4,"automation","Stations build each Drone 2 s faster.",{prodSecs:2});mt("drill","Combat Drill","Military",1,void 0,"All your attacks +1.",{atk:1});mt("harmonics","Shield Harmonics","Military",2,"drill","Shields recharge twice as fast.",{regen:1});mt("siege","Siege Doctrine","Military",3,"harmonics","All your attacks ignore 2 shield.",{pierce:2},"depth");mt("depth","Defence in Depth","Military",3,"harmonics","+2 defence at every node.",{def:2},"siege");mt("veterans","Veteran Crews","Military",4,"harmonics","Winning attacks lose 2 fewer Drones.",{surv:2});mt("engines","Improved Engines","Logistics",1,void 0,"All fleets fly 15% faster.",{speed:.15});mt("tunnelling","Corridor Engineering","Logistics",2,"engines","Corridors cost half and every node holds one more.",{corridorCost:.5,corridorMax:1});mt("fold","Fold Drive","Logistics",3,"tunnelling","All fleets fly 25% faster.",{speed:.25},"transit");mt("transit","Mass Transit","Logistics",3,"tunnelling","Convoys travel twice as fast.",{laneSpeed:1},"fold");mt("pads","Extra Launch Pads","Logistics",4,"tunnelling","Every node has one more launch slot.",{slotAdd:1});mt("sigint","Signal Analysis","Intelligence",1,void 0,"Read the strength of every fleet you detect.",{sigint:1});mt("sensors","Long-Range Sensors","Intelligence",2,"sigint","All nodes and fleets see 25% further.",{fov:.25});mt("deepcover","Deep Cover","Intelligence",3,"sensors","Offensives are announced with their target; mobilization 15% slower.",{warn:1,mobSlow:.15},"blacksky");mt("blacksky","Black Sky","Intelligence",3,"sensors","All of your fleets fly unseen.",{stealth:1},"deepcover");mt("posts","Listening Posts","Intelligence",4,"sensors","All nodes see 25% further still.",{fov:.25});mt("academy","Officer Academy","Command",1,void 0,"Specialists cost half upkeep.",{specUpkeep:.5});mt("protocols","Command Protocols","Command",2,"academy","Commander gains 50% more experience; rescue window +45 s.",{xp:.5,rescue:45});mt("integration","Command Integration","Command",3,"protocols","Nodes and fleets hold one more specialist.",{slots:1},"scouts");mt("scouts","Talent Scouts","Command",3,"protocols","Every recruitment offers one more specialist.",{offer:1},"integration");mt("college","War College","Command",4,"protocols","Every specialist has +1 Power.",{powAll:1});const Nn={ferrum:{id:"ferrum",name:"Ferrum Directorate",color:"#c98a3c",warlord:"Overseer Kharn",sig:"ironmonger",desc:"Fortress industry. Slow to attack, expensive to dislodge.",tell:"Shields hold 2 more everywhere; builds Missile Silos and fires before it attacks.",mods:{shield:2},ai:{aggr:.7,expand:150,react:.9,target:"weak",shield:3,planet:"refinery",station:"silo"},techs:["harmonics","mining","depth","automation"],specs:["sentinel","castellan","engineer"]},crimson:{id:"crimson",name:"Crimson Warhost",color:"#d2604a",warlord:"Warlord Ashka",sig:"berserker",desc:"Wave aggression. Thin defences, constant pressure.",tell:"Builds Drones 2 s faster; +1 attack; strikes the nearest target often.",mods:{prodSecs:2,atk:1},ai:{aggr:1.4,expand:110,react:.4,target:"near",shield:1,planet:"supply",station:"bay"},techs:["drill","engines","siege","veterans"],specs:["foreman","vanguard","tactician"]},lumen:{id:"lumen",name:"Lumen Technocracy",color:"#e3c565",warlord:"Prime Calculator Ione",sig:"lens",desc:"Lance batteries thin every attacking fleet before it lands.",tell:"Lances destroy 2 Drones of every attacking fleet; gains two technologies per stage.",mods:{lance:2},ai:{aggr:.8,expand:170,react:.7,target:"weak",shield:2,planet:"refinery",station:"depot"},techs:["sigint","harmonics","drill","engines","siege","mining","veterans","sensors"],specs:["scientist","sentinel","scout"]},veil:{id:"veil",name:"Veil Syndicate",color:"#9a7cc4",warlord:"The Whisper",sig:"phantom",desc:"Unseen fleets that hunt your specialists.",tell:"Fleets are invisible until inside full-intelligence range; targets nodes holding specialists.",mods:{stealth:1,speed:.1},ai:{aggr:1,expand:160,react:.6,target:"spec",shield:2,planet:"refinery",station:"bay"},techs:["engines","drill","sigint","veterans"],specs:["saboteur","ghost","pirate"]},drift:{id:"drift",name:"Drift Clans",color:"#6ea6d6",warlord:"Clanmother Sura",sig:"wayfinder",desc:"Fast nomads who swallow neutral space.",tell:"Fleets fly 40% faster; expands into neutral territory twice as often.",mods:{speed:.4},ai:{aggr:1.1,expand:70,react:.8,target:"near",shield:1,planet:"supply",station:"depot"},techs:["engines","sensors","drill","mining"],specs:["admiral","navigator","warden"]}},is={anvil:{id:"anvil",name:"Archon Vael",title:"the Anvil",desc:"Citadel Aegis layers are 50% stronger and its Drones are built 2 s faster.",mods:{aegisPct:.5,prodSecs:2},pmods:{}},tide:{id:"tide",name:"Archon Seraph",title:"the Tide",desc:"Every Coalition offensive commits more of its Drones.",mods:{offBig:.3},pmods:{}},silence:{id:"silence",name:"Archon Null",title:"the Silence",desc:"Your specialists' charged effects recharge 50% slower. Coalition fleets fly unseen.",mods:{stealth:1},pmods:{cdSlow:.5}}},Un={},yn=(n,e,t,i,s)=>Un[n]={id:n,name:e,on:t,text:i,choices:s};yn("lab","Abandoned Research Facility","station","Sealed laboratories, still powered. The archive doors are marked with a hazard glyph nobody recognises.",[{label:"Restore the facility",desc:"Choose a technology now.",ult:25,fx:[["tech"]]},{label:"Salvage it",desc:"Gain 35 Ultanium.",fx:[["ult",35]]},{label:"Open the restricted archive",desc:"Choose an uncommon relic. Automata attack this node with 6 Drones in 40 s.",fx:[["relic","uncommon"],["ambush",6]]},{label:"Let the Scientist decode it",desc:"Choose a technology and a common relic.",req:"scientist",fx:[["tech"],["relic","common"]]}]);yn("fortress","Ancient Fortress","any","The guns are silent but the targeting grid still tracks your fleet.",[{label:"Reactivate the defences",desc:"Hold this node for 90 s with 4 Drones to raise its shield a level and choose an uncommon relic.",fx:[["hold",90,4,[["shield"],["relic","uncommon"]]]]},{label:"Strip the armoury",desc:"Gain 4 Drones here.",fx:[["drones",4]]},{label:"Engineer bypass",desc:"Raise the shield a level and choose a common relic at once.",req:"engineer",fx:[["shield"],["relic","common"]]}]);yn("stranded","Stranded Specialists","any","A crippled lifeboat hails you. Its passengers are willing to work for passage.",[{label:"Take one aboard",desc:"Choose one of three specialists.",fx:[["spec"]]},{label:"Sell them the fuel",desc:"Gain 30 Ultanium.",fx:[["ult",30]]}]);yn("energy","Unstable Energy Source","planet","The crust hums. Readings climb while you watch.",[{label:"Stabilise it",desc:"Hold for 75 s with 3 Drones to choose a rare relic.",ult:20,fx:[["hold",75,3,[["relic","rare"]]]]},{label:"Tap it now",desc:"Gain 50 Ultanium; lose 2 Drones here.",drones:2,fx:[["ult",50]]},{label:"Walk away",desc:"Nothing happens.",fx:[]}]);yn("derelict","Derelict Fleet","station","Dozens of hulls drift in formation. Some of them are warm.",[{label:"Tow the hulls home",desc:"Gain 40 Ultanium.",fx:[["ult",40]]},{label:"Wake the crews",desc:"Gain 6 Drones here. Automata attack with 5 Drones in 40 s.",fx:[["drones",6],["ambush",5]]},{label:"Reclaimer strips everything",desc:"Gain 4 Drones and 40 Ultanium.",req:"reclaimer",fx:[["drones",4],["ult",40]]}]);yn("settlement","Independent Settlement","planet","Farmers, mostly. They have seen the Coalition's recruiters and they do not like them.",[{label:"Trade",desc:"Gain 25 Ultanium.",fx:[["ult",25]]},{label:"Arm them",desc:"Gain 4 Drones here.",ult:10,fx:[["drones",4]]},{label:"Sign a charter",desc:"Choose a common relic.",ult:20,fx:[["relic","common"]]},{label:"Diplomat brokers an alliance",desc:"Gain 4 Drones and choose a common relic.",req:"diplomat",fx:[["drones",4],["relic","common"]]}]);yn("expedition","Lost Research Expedition","any","Their last transmission repeats every forty seconds. It ends mid-word.",[{label:"Rescue the team",desc:"Choose one of three specialists.",drones:2,fx:[["spec"]]},{label:"Recover the data",desc:"Commander gains 8 experience.",fx:[["xp",8]]},{label:"Follow the signal",desc:"Choose a rare relic. Automata attack with 8 Drones in 40 s.",fx:[["relic","rare"],["ambush",8]]}]);yn("platform","Automated Weapons Platform","station","It has been guarding nothing for three hundred years, and it is very good at it.",[{label:"Capture it",desc:"Raise this node's shield a level.",fx:[["shield"]]},{label:"Reprogram it",desc:"+4 defence here for 5 minutes and a common relic.",ult:15,fx:[["buff","def",4,300],["relic","common"]]},{label:"Scrap it",desc:"Gain 28 Ultanium.",fx:[["ult",28]]}]);yn("beacon","Ancient Navigation Beacon","any","One pulse per minute, aimed at a point deep inside Coalition space.",[{label:"Decode it",desc:"Reveal every node within 220 units.",fx:[["reveal",220]]},{label:"Overload it",desc:"Set Coalition mobilization back by a third of a stage.",ult:20,fx:[["mobil",-.33]]},{label:"Scout triangulates",desc:"Reveal the whole map.",req:"scout",fx:[["reveal",2e3]]}]);yn("forge","The Ancient Forge","planet","A foundry the size of a continent, cold for an age. The ignition sequence is still on the console.",[{label:"Restore the Forge",desc:"Hold for 120 s with 5 Drones to choose a rare relic and gain 5 Drones.",ult:30,fx:[["hold",120,5,[["relic","rare"],["drones",5]]]]},{label:"Melt it down",desc:"Gain 45 Ultanium.",fx:[["ult",45]]}]);yn("vault","Sealed Vault","any","Three locks. Your crew can force one of them.",[{label:"The armoury",desc:"Choose an uncommon relic.",drones:2,fx:[["relic","uncommon"]]},{label:"The treasury",desc:"Gain 40 Ultanium.",fx:[["ult",40]]},{label:"The war room",desc:"Commander gains 10 experience.",fx:[["xp",10]]}]);yn("deserters","Coalition Deserters","any","A squadron in Coalition colours powers down its weapons and asks for terms.",[{label:"Enlist them",desc:"Gain 5 Drones here. Mobilization advances 15% of a stage.",fx:[["drones",5],["mobil",.15]]},{label:"Debrief them",desc:"Reveal every node within 200 units and set mobilization back 10%.",fx:[["reveal",200],["mobil",-.1]]},{label:"Inquisitor takes their officers",desc:"Choose one of three specialists.",req:"inquisitor",fx:[["spec"]]}]);const $=1;function kt(n,e,t=1){if(e)for(const i in e)n[i]=(n[i]||0)+e[i]*t}const qa={};for(const n of mu)qa[n.id]=n;const gu=n=>qa[n],qc=new WeakMap;function ft(n,e){let t=qc.get(n);if((!t||t.stamp!==n.modV)&&(t={stamp:n.modV,m:{}},qc.set(n,t)),t.m[e])return t.m[e];const i={},s=n.sides[e];if(s){for(const r of s.relics)kt(i,Mn[r]?.mods);for(const r of s.techs)kt(i,Pt[r]?.mods);s.kind==="faction"&&kt(i,Nn[s.fac].mods),s.kind==="archon"&&kt(i,is[s.fac].mods),s.kind==="player"&&kt(i,is[n.sides[n.archon].fac].pmods);for(const r of n.specs){if(r.owner!==e||r.held)continue;const a=tt[r.def];if(kt(i,a.glob),r.up&&kt(i,a.up.glob),r.cmd){kt(i,Vi[r.cmd.arch].glob);for(const o of r.cmd.perks)kt(i,qa[o]?.glob)}}}return t.m[e]=i,i}function hr(n,e){const t=tt[e.def];let i=e.cmd?hh+(e.cmd.lvl>=3?1:0)+(e.cmd.lvl>=5?1:0):t.pow+(e.up&&t.up.pow||0);return i+=ft(n,e.owner).powAll||0,i}const Yl=(n,e)=>e.cmd?0:hr(n,e)*te.upkeepPower*(1-Math.min(.75,ft(n,e.owner).specUpkeep||0));function $o(n,e){const t={},i=tt[e.def];if(kt(t,i.loc),e.up&&kt(t,i.up.loc),e.cmd){kt(t,Vi[e.cmd.arch].loc);for(const s of e.cmd.perks)kt(t,qa[s]?.loc);ft(n,e.owner).cmdDouble&&kt(t,t)}return t}function Kl(n,e){const t=tt[e.def];return t.charge?(e.up&&t.up.cd?t.up.cd:t.charge.cd)*(1+(ft(n,e.owner).cdSlow||0)):0}function Zl(n,e,t){return e.map(i=>n.specs[i]).filter(i=>i&&!i.held&&tt[i.def].charge?.on===t&&i.cd<=n.t)}function Xs(n,e,t,i,s){const r={};kt(r,ft(n,e));let a=!1,o=null;for(const c of t){const l=n.specs[c];!l||l.owner!==e||l.held||(l.def==="echo"?a=!0:!o&&!l.cmd&&(o=l),kt(r,$o(n,l)))}a&&o&&kt(r,$o(n,o));for(const c of i)c.until>n.t&&(r[c.k]=(r[c.k]||0)+c.v);if(s)for(const c of Zl(n,t,s))kt(r,tt[c.def].charge.mods);return r}function Zt(n){n.rng=n.rng+1831565813|0;let e=n.rng;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}const ua=(n,e,t)=>e+Math.floor(Zt(n)*(t-e+1)),cn=(n,e,t)=>e+Zt(n)*(t-e),Nr=(n,e)=>e[Math.floor(Zt(n)*e.length)];function fa(n,e){const t=e.slice();for(let i=t.length-1;i>0;i--){const s=Math.floor(Zt(n)*(i+1));[t[i],t[s]]=[t[s],t[i]]}return t}function Ii(n,e,t){return fa(n,e).slice(0,t)}const Ve=(n,e)=>Math.hypot(n.x-e.x,n.y-e.y),Ya=(n,e)=>n.fleets.find(t=>t.id===e);function je(n,e,t="info",i=-1){n.log.push({t:n.t,msg:e,kind:t,node:i}),n.log.length>150&&n.log.shift()}function Kn(n,e){const t=n.sides[e];return t?t.kind==="player"?"You":t.kind==="faction"?Nn[t.fac].name:is[t.fac].name:e===0?"Neutral":"Automata"}function Wn(n,e){const t=n.sides[e];return t?t.kind==="player"?"#6cc5a0":t.kind==="faction"?Nn[t.fac].color:"#e07aa0":"#9aa3ad"}function Ni(n,e,t,i){const s={id:n.specs.length,def:e,owner:t,node:i,fleet:-1,held:0,cd:0,up:!1,cmd:null};return n.specs.push(s),n.nodes[i].specs.push(s.id),n.modV++,s}function Jl(n,e){if(e.node>=0){const t=n.nodes[e.node];t.specs=t.specs.filter(i=>i!==e.id),t.prisoners=t.prisoners.filter(i=>i!==e.id)}if(e.fleet>=0){const t=Ya(n,e.fleet);t&&(t.specs=t.specs.filter(i=>i!==e.id))}e.node=-1,e.fleet=-1}function Ui(n,e,t,i=0){Jl(n,e),e.node=t.id,e.held=i,(i?t.prisoners:t.specs).push(e.id),n.modV++}function _u(n,e,t){Jl(n,e),e.fleet=t.id,t.specs.push(e.id),n.modV++}function br(n,e){Jl(n,e),e.owner=-1,e.held=0,n.modV++}const mh=(n,e)=>te.specSlots+(ft(n,e).slots||0),cs=(n,e)=>e.specs.slice(0,mh(n,e.owner)),jn=n=>n.name||tt[n.def].name,bn=(n,e,t)=>Xs(n,e.owner,cs(n,e),e.buffs,t);function gh(n,e){if(e.node<0||e.held)return"Not stationed at a node";const t=n.nodes[e.node];return t.specs=[e.id,...t.specs.filter(i=>i!==e.id)],n.modV++,null}function Ka(n,e){const t=n.nodes.filter(i=>i.owner===e);return t.length?t.find(i=>i.home||i.capital||i.citadel)||t.find(i=>i.kind==="station")||t[0]:null}function _h(n,e){let t=0;for(const i of n.nodes)i.owner===e&&(t+=i.drones);for(const i of n.fleets)i.owner===e&&(t+=i.drones);return t}function Xo(n,e){return e.kind!=="planet"||ft(n,e.owner).noOps?0:e.lv+(e.spec==="lab"?te.labWorkers:0)}function vu(n,e,t){if(e.kind!=="planet"||!n.sides[e.owner])return 0;const i=t||bn(n,e),s=i.noOps?e.lv:Math.min(e.lv,e.drones);return te.mineOut[s]*te.sizeMult[e.size]*(e.spec==="refinery"?te.refineryMult:1)+(i.inc||0)}const Bs=(n,e)=>e.spec==="lab"&&(!!ft(n,e.owner).noOps||e.drones>=e.lv+te.labWorkers);function xu(n,e){const t=n.sides[e],i=ft(n,e);let s=(t.kind==="player"?te.baseIncome:4)+(i.income||0),r=0,a=(i.freeDrones||0)+t.free+(t.kind==="player"?te.freeBase:0),o=0,c=i.rp||0;for(const d of n.nodes){if(d.owner!==e)continue;const f=bn(n,d);s+=vu(n,d,f),r+=d.drones,a+=f.free||0,d.spec==="supply"&&(a+=te.supplyFree),d.spec==="depot"&&(o+=d.drones),Bs(n,d)&&(c+=te.labRp),c+=f.research||0}for(const d of n.fleets)d.owner===e&&(r+=d.drones);let l=0;for(const d of n.specs)d.owner===e&&!d.held?l+=Yl(n,d):d.held===e&&i.prisonInc&&(s+=i.prisonInc);const u=Math.max(0,r-a),p=(u-Math.min(o,u)*(1-te.depotMult))*te.upkeepDrone+l;return{inc:s,upk:p,net:s-p,drones:r,free:a,rpm:c,specUp:l}}function Za(n,e){const t=1+(bn(n,e).fov||0),i=e.kind==="planet"?te.fovInner.planet[e.size]:te.fovInner.station,s=e.kind==="planet"?te.fovOuter.planet[e.size]:te.fovOuter.station;return[i*t,s*t]}const Er=(n,e,t)=>Xs(n,e.owner,e.specs,[],t);function Ql(n,e){const t=1+(Er(n,e).fov||0);return[te.fleetFov[0]*t,te.fleetFov[1]*t]}function ds(n){const e=n.nodes.filter(t=>t.owner===$).map(t=>({n:t,r:Za(n,t)}));for(const t of n.fleets)t.owner===$&&!t.lane&&!t.missile&&e.push({n:t,r:Ql(n,t)});for(const t of n.nodes){let i=0;if(t.owner===$)i=2;else{for(const r of e){const a=Ve(t,r.n);if(a<=r.r[0]){i=2;break}a<=r.r[1]&&(i=1)}i<2&&t.buffs.some(r=>r.k==="scan"&&r.until>n.t)&&(i=2)}n.vis[t.id]=i;const s=n.intel[t.id];i>s.seen&&(s.seen=i),i===2&&(s.t=n.t,s.snap={owner:t.owner,drones:t.drones,shields:t.shields,lv:t.lv,sh:t.sh,spec:t.spec,missile:t.missile,specs:t.specs.slice(),prisoners:t.prisoners.slice(),buffs:t.buffs.slice()})}}function Ja(n,e){if(e.owner===$)return 2;const t=!e.missile&&((Er(n,e).stealth||0)>0||e.owner>1&&(ft(n,n.archon).stealth||0)>0);let i=0;const s=(r,a)=>{const o=Ve(e,r);o<=a[0]?i=2:o<=a[1]&&!t&&(i=Math.max(i,1))};for(const r of n.nodes)r.owner===$&&s(r,Za(n,r));for(const r of n.fleets)r.owner===$&&!r.lane&&!r.missile&&s(r,Ql(n,r));return i===1&&(ft(n,$).sigint||0)>0?2:i}function jl(n,e){if(e.owner===$||n.vis[e.id]===2)return{live:!0,age:0,v:e};const t=n.intel[e.id];return t.snap?{live:!1,age:n.t-t.t,v:{...e,...t.snap}}:{live:!1,age:0,v:null}}const Qa=(n,e)=>e.owner===$||n.vis[e.id]>=1;function ec(n,e,t){const i=t||bn(n,e);return Math.max(0,e.sh*te.shieldPerLv+(i.shield||0))}function wa(n,e){if(!e.citadel)return 0;const t=n.factions.filter(i=>!n.sides[i].broken).length;return Math.round(t*te.aegisPerLayer*(1+(ft(n,n.archon).aegisPct||0)))}const pr=(n,e)=>(e.kind==="station"?te.slotsStation:te.slotsPlanet)+(ft(n,e.owner).slotAdd||0),Su=(n,e)=>n.fleets.filter(t=>t.slot&&t.home===e.id&&t.owner===e.owner).length,qn=(n,e)=>Math.max(0,pr(n,e)-Su(n,e)),mr=(n,e)=>te.crew+(ft(n,e.owner).slots||0)+(e.spec==="bay"?te.bayCrew:0);function ja(n,e,t){const i=t==="lv"?te.lvCost[e.lv+1]:t==="sh"?te.shCost[e.sh+1]:t==="spec"?te.specCost:te.missileCost;return t==="missile"?i:Math.max(5,i-(bn(n,e).upgCost||0))}const Mu=n=>n==="lv"?te.lvTime:n==="sh"?te.shTime:n==="spec"?te.specTime:te.missileTime;function Ri(n,e,t,i=""){const s=n.sides[e.owner];if(!s)return"Not yours";if(e.task)return"Already upgrading";if(t==="lv"&&e.lv>=3||t==="sh"&&e.sh>=3)return"Maximum level";if(t==="spec"){if(e.spec)return"Specialty already chosen";if(!Rn[i]||Rn[i].on!==e.kind)return"Not available here"}if(t==="missile"){if(e.spec!=="silo")return"Needs a Missile Silo";if(e.missile>=1)return"A missile is ready"}return s.ult<ja(n,e,t)?"Not enough Ultanium":null}function nr(n,e,t,i=""){const s=Ri(n,e,t,i);if(s)return s;const r=ja(n,e,t),a=Mu(t);return n.sides[e.owner].ult-=r,e.task={kind:t,id:i,left:a,total:a,cost:r},null}function vh(n,e){e.task&&(n.sides[e.owner].ult+=e.task.cost,e.task=null)}function xh(n,e,t){const i=e.owner===$;if(t.kind==="lv")e.lv++,i&&je(n,`${e.name}: ${e.kind==="planet"?"Mine":"Barracks"} level ${e.lv}`,"info",e.id);else if(t.kind==="sh")e.sh++,i&&je(n,`${e.name}: Shield level ${e.sh}`,"info",e.id);else if(t.kind==="spec")e.spec=t.id,i&&je(n,`${e.name} is now a ${Rn[t.id].name}`,"info",e.id);else if(t.kind==="missile")e.missile=1,i&&je(n,`Missile ready at ${e.name}`,"good",e.id);else{const s=n.nodes[+t.id];s.owner===e.owner&&!nc(n,e.id,s.id)?(n.corridors.push({a:e.id,b:s.id,owner:e.owner}),i&&je(n,`Corridor open: ${e.name} to ${s.name}`,"good",e.id)):n.sides[e.owner].ult+=t.cost}n.modV++}const tc=(n,e)=>n.corridors.filter(t=>t.a===e||t.b===e),nc=(n,e,t)=>n.corridors.find(i=>i.a===e&&i.b===t||i.a===t&&i.b===e),yu=n=>te.corridorMax+(ft(n,$).corridorMax||0),Ta=n=>Math.round(te.corridorCost*(1-Math.min(.75,ft(n,$).corridorCost||0)));function Fi(n,e,t){if(e===t)return null;const i=n.nodes[e].owner,s=new Map([[e,-1]]),r=[e];for(;r.length;){const o=r.shift();if(o===t)break;for(const c of tc(n,o)){const l=c.a===o?c.b:c.a;!s.has(l)&&n.nodes[l].owner===i&&(s.set(l,o),r.push(l))}}if(!s.has(t))return null;const a=[];for(let o=t;o!==e;o=s.get(o))a.unshift(o);return a}const bu=(n,e)=>n.nodes.filter(t=>t.id!==e&&t.owner===n.nodes[e].owner&&Fi(n,e,t.id)).map(t=>t.id),Sh=(n,e)=>n.nodes.filter(t=>t.task&&t.task.kind==="corridor"&&(t.id===e||+t.task.id===e)).length;function Eu(n,e,t){if(e.id===t.id)return"Pick a different node";if(e.owner!==$||t.owner!==$)return"Both ends must be your nodes";if(Ve(e,t)>te.corridorRange)return"Too far";if(nc(n,e.id,t.id)||e.task?.kind==="corridor"&&+e.task.id===t.id||t.task?.kind==="corridor"&&+t.task.id===e.id)return"Already linked or being built";const i=yu(n);for(const s of[e,t])if(tc(n,s.id).length+Sh(n,s.id)>=i)return`${s.name} already has ${i} corridors`;return e.task?`${e.name} is busy upgrading`:n.sides[$].ult<Ta(n)?"Not enough Ultanium":null}function Mh(n,e,t){const i=Eu(n,e,t);if(i)return i;const s=Ta(n);n.sides[$].ult-=s;const r=te.corridorTime/(1+(bn(n,e).build||0));return e.task={kind:"corridor",id:String(t.id),left:r,total:r,cost:s},null}function wr(n,e,t,i,s,r){const a=r||Xs(n,e,i,[],"attack"),o=n.sides[s.owner]?bn(n,s,"defend"):{},c=Math.min(t,o.lance||0),l=t-c,u=Math.min(s.drones,a.strike||0),p=s.drones-u,d=i.reduce((w,_)=>w+hr(n,n.specs[_]),0),f=(a.atk||0)+Math.min(a.per4||0,Math.floor(l/4))+(s.owner===0&&a.vsNeutral||0),v=l+d+f,g=Math.max(0,Math.floor(s.shields)-(a.pierce||0)),m=n.sides[s.owner]?cs(n,s).reduce((w,_)=>w+(n.specs[_].held?0:hr(n,n.specs[_])),0):0,h=o.def||0,x=wa(n,s),E=p+g+m+h+x,b=l>0&&(v>E||v===E&&(a.ties||0)>0),A=b?Math.max(0,Math.min(l,v-E+(a.surv||0))-(o.martyr||0)):0;return{sent:t,atk:v,def:E,win:b,surv:A,parts:{drones:l,pow:d,bonus:f,lance:c,strike:u,garr:p,shield:g,dpow:m,ddef:h,aegis:x}}}function Yc(n,e,t){for(const i of Zl(n,e,t))i.cd=n.t+Kl(n,i)}function wu(n,e,t,i){const s=Zl(n,e,"fall")[0];for(const r of e.slice()){const a=n.specs[r];if(a.def==="captain"){i===$?Ui(n,a,t,$):br(n,a);continue}if(s){const o=Ka(n,a.owner);if(o&&o.id!==t.id){Ui(n,a,o);continue}}Ui(n,a,t,i||-1),a.owner===$&&(n.stats.specsLost++,je(n,`${jn(a)} was captured at ${t.name}`,"bad",t.id))}s&&(s.cd=n.t+Kl(n,s),s.owner===$&&je(n,`The Medic got your specialists out of ${t.name}`,"good",t.id))}function Aa(n,e){n.fleets=n.fleets.filter(t=>t!==e)}function ic(n,e,t,i){if(e.specs.length)if(t)wu(n,e.specs,t,i);else for(const s of e.specs.slice()){const r=n.specs[s],a=Ka(n,r.owner);a&&r.def!=="captain"?Ui(n,r,a):br(n,r)}Aa(n,e)}function Tu(n,e,t,i){const s=e.owner;n.corridors.some(r=>r.a===e.id||r.b===e.id)&&(n.corridors=n.corridors.filter(r=>r.a!==e.id&&r.b!==e.id),s===$&&je(n,`Corridors to ${e.name} collapsed`,"bad",e.id));for(const r of n.nodes)r.task?.kind==="corridor"&&+r.task.id===e.id&&(n.sides[r.owner]&&(n.sides[r.owner].ult+=r.task.cost),r.task=null);s!==0&&wu(n,e.specs,e,t);for(const r of e.prisoners.slice()){const a=n.specs[r];a.owner===t?(Ui(n,a,e),t===$&&je(n,`${jn(a)} was rescued at ${e.name}`,"good",e.id)):a.held=t||-1}e.owner=t,e.drones=i,e.shields=0,e.task=null,e.prod=0,e.hold=null,e.buffs=[],e.rally=!1,e.rallyTo=-1,e.floor=0,e.missile=0;for(const r of n.nodes)r.rallyTo===e.id&&(r.rallyTo=-1);n.modV++}function Au(n,e){e.offer&&(e.offer=!1,cc(n,e.id)),e.event&&n.pending.push({kind:"event",node:e.id,opts:[],title:Un[e.event].name,event:e.event})}function yh(n,e,t){const i=n.sides[e],s=Nn[i.fac];i.broken=!0,n.mob.stage=Math.max(1,n.mob.stage-1),n.mob.prog=0,n.offs=n.offs.filter(o=>o.owner!==e);for(const o of n.fleets.filter(c=>c.owner===e))ic(n,o,null,0);let r=0;for(const o of n.nodes)o.owner===e&&(Tu(n,o,$,Math.ceil(o.drones/3)),Au(n,o),r++);je(n,`${s.warlord} is your prisoner. The ${s.name} surrenders ${r} node${r===1?"":"s"} and a Citadel Aegis layer falls.`,"good",t.id);const a=Ni(n,s.sig,$,t.id);je(n,`${jn(a)} joins you from the ${s.name}.`,"good",t.id),Lu(n,"rare",t.id),lc(n,10),n.stats.warlords++}function bh(n,e,t,i,s){const r=e.owner,a=t.owner,o=n.sides[a];s.salvage&&o&&(o.ult+=Math.round(s.salvage*e.drones));const c=e.capital&&n.sides[r]?.kind==="faction"&&!n.sides[r].broken;Tu(n,e,a,i.surv);const l=t.specs.slice(),u=l.length?n.specs[l[0]]:null;for(const p of l){const d=n.specs[p];d.def==="captain"?br(n,d):Ui(n,d,e)}if(Aa(n,t),o){const p=ft(n,a);p.refund&&n.t>=o.refundT&&(e.drones+=i.sent-i.surv,o.refundT=n.t+p.refund,a===$&&je(n,"Phoenix Clause refunds your losses","good",e.id)),p.capShield&&(e.shields=p.capShield),p.capUlt&&(o.ult+=p.capUlt)}a===$?(n.stats.captures++,n.stats.dronesLost+=i.sent-i.surv,je(n,`Captured ${e.name} with ${i.surv} Drones left`,"good",e.id),u&&!u.cmd&&!u.up&&u.owner===$&&(u.up=!0,n.modV++,je(n,`${jn(u)} led the attack and is upgraded: ${tt[u.def].up.text}`,"good",e.id)),lc(n,l.includes(n.cmdSpec)?4:2),n.sides[r]&&(n.mob.prog=Math.max(0,n.mob.prog-te.captureSetback)),c&&yh(n,r,e),Au(n,e),e.citadel&&(n.result="win",n.resultWhy=`${is[n.sides[n.archon].fac].name} is your prisoner. The Coalition is finished.`)):r===$&&(n.stats.nodesLost++,je(n,`${e.name} fell to ${Kn(n,a)}`,"bad",e.id)),ds(n)}function Eh(n,e,t,i,s){const r=i.parts;e.drones=r.garr;let a=i.atk;const o=Math.min(e.shields,Math.max(0,a-0));if(e.shields-=Math.min(o,a),a-=r.shield,a-=r.dpow+r.ddef+r.aegis,e.drones-=Math.max(0,Math.min(e.drones,a)),t.owner===$&&(je(n,`Attack on ${e.name} failed: ${i.atk} against ${i.def}`,"bad",e.id),n.stats.dronesLost+=t.drones),e.owner===$&&je(n,`${e.name} held against ${Kn(n,t.owner)} (${i.atk} against ${i.def})`,"good",e.id),t.drones=0,e.owner===0&&n.sides[t.owner]){const c=n.nodes[t.from],l=c&&c.owner===t.owner?c:Ka(n,t.owner);if(l){t.to=l.id,t.from=e.id,t.back=!0,t.x=e.x,t.y=e.y;return}}ic(n,t,n.sides[e.owner]?e:null,e.owner)}function wh(n,e){const t=n.nodes[e.to];if(e.x=t.x,e.y=t.y,e.missile){t.owner!==e.owner&&(t.shields=0,t.drones=Math.max(0,t.drones-te.missileKill),t.buffs.push({k:"noRegen",v:1,until:n.t+20}),(e.owner===$||t.owner===$)&&je(n,`Missile strike on ${t.name}: shields down, ${te.missileKill} Drones destroyed`,t.owner===$?"bad":"good",t.id)),Aa(n,e);return}if(e.lane&&t.owner===e.owner&&e.path&&e.path.length){const r=e.path[0];if(nc(n,t.id,r)&&n.nodes[r].owner===e.owner){e.path.shift(),e.from=t.id,e.to=r;return}}if(t.owner===e.owner){t.drones+=e.drones;for(const r of e.specs.slice()){const a=n.specs[r];a.def==="captain"?br(n,a):Ui(n,a,t)}Aa(n,e);return}if(e.probe||e.drones<=0){e.owner===$&&e.probe&&(t.buffs.push({k:"scan",v:1,until:n.t+30}),ds(n),je(n,`Probe identified ${t.name}`,"info",t.id)),ic(n,e,n.sides[t.owner]?t:null,t.owner);return}const i=Er(n,e,"attack"),s=wr(n,e.owner,e.drones,e.specs,t,i);Yc(n,e.specs,"attack"),Yc(n,cs(n,t),"defend"),e.owner===$&&n.stats.battles++,s.win?bh(n,t,e,s,i):Eh(n,t,e,s)}function Ru(n,e){if(e.missile)return te.fleetSpeed*te.missileSpeed;const t=Er(n,e);return te.fleetSpeed*(e.lane?te.corridorSpeed*(1+(t.laneSpeed||0)):1)*Math.max(.3,1+(t.speed||0)+(e.speedUp||0))}const sc=(n,e,t)=>Ve(e,t)/Ru(n,e);function rc(n,e,t,i){const s={id:n.nextId++,owner:e,home:t.id,slot:!1,from:t.id,to:i,x:t.x,y:t.y,drones:0,specs:[]};return n.fleets.push(s),s}function ac(n,e,t){const i=Xs(n,e.owner,t,[]),s=bn(n,e);return te.fleetSpeed*Math.max(.3,1+(i.speed||0)+(s.launchSpeed||0)+(e.spec==="bay"?te.baySpeed:0))}function Bi(n,e,t,i,s){const r=e.owner;if(!n.sides[r])return"Not your node";if(t.id===e.id)return"Already here";if(r===$&&!Qa(n,t))return"Target is not in detection range";if(s=s.filter(p=>e.specs.includes(p)),s.length>mr(n,e))return`A fleet carries at most ${mr(n,e)} specialists`;i=Math.max(0,Math.min(e.drones,Math.floor(i)));const a=t.owner!==r,o=a&&!s.length;if(o&&i>0)return"An attack needs a specialist to lead it. Without one, send 0 Drones as a probe.";if(a&&!o&&i<1)return"An attack needs at least 1 Drone";if(!a&&!i&&!s.length)return"Nothing to send";const l=!Xs(n,r,s,[]).slotFree;if(l&&qn(n,e)<1)return"No free launch slot here";const u=rc(n,r,e,t.id);u.slot=l,u.drones=i,u.probe=o,e.drones-=i,u.speedUp=(bn(n,e).launchSpeed||0)+(e.spec==="bay"?te.baySpeed:0);for(const p of s)_u(n,n.specs[p],u);return null}function Ra(n,e,t,i,s){if(e.owner!==t.owner)return"Both ends must be yours";const r=Fi(n,e.id,t.id);if(!r)return"No corridor route to that node";if(i=Math.max(0,Math.min(e.drones,Math.floor(i))),s=s.filter(o=>e.specs.includes(o)),!i&&!s.length)return"Nothing to send";const a=rc(n,e.owner,e,r[0]);a.lane=!0,a.path=r.slice(1),a.drones=i,e.drones-=i;for(const o of s)_u(n,n.specs[o],a);return null}function oc(n,e,t){if(e.held)return{secs:0,via:null,why:"They are a prisoner"};if(e.node<0)return{secs:0,via:null,why:"Already travelling"};const i=n.nodes[e.node];if(t.owner!==e.owner)return{secs:0,via:null,why:"Only your own nodes"};if(t.id===i.id)return{secs:0,via:null,why:"Already there"};const s=Fi(n,i.id,t.id);if(s){let a=0,o=i;for(const c of s)a+=Ve(o,n.nodes[c]),o=n.nodes[c];return{secs:a/(te.fleetSpeed*te.corridorSpeed*(1+(ft(n,e.owner).laneSpeed||0))),via:"corridor",why:""}}return!!Xs(n,e.owner,[e.id],[]).slotFree||qn(n,i)>0?{secs:Ve(i,t)/ac(n,i,[e.id]),via:"fleet",why:""}:{secs:0,via:null,why:`No free launch slot at ${i.name} and no corridor route`}}function Th(n,e,t){const i=oc(n,e,t);if(!i.via)return i.why;const s=n.nodes[e.node];return i.via==="corridor"?Ra(n,s,t,0,[e.id]):Bi(n,s,t,0,[e.id])}function eo(n,e,t){return e.spec!=="silo"||e.missile<1?"No missile ready":t.owner===e.owner?"Pick a node you do not own":Ve(e,t)>te.missileRange?"Out of range":e.owner===$&&n.vis[t.id]<1?"Target is not in detection range":null}function Cu(n,e,t){const i=eo(n,e,t);if(i)return i;e.missile=0;const s=rc(n,e.owner,e,t.id);return s.missile=!0,null}const Oi=(n,e)=>Math.max(e.floor,Xo(n,e));function Pu(n,e){if(e.rallyTo>=0){const s=n.nodes[e.rallyTo];if(s.owner===e.owner&&s.rally)return s}let t=null,i=1e9;for(const s of n.nodes){if(s.owner!==e.owner||!s.rally||s.id===e.id)continue;const r=Fi(n,e.id,s.id)?Ve(e,s)/te.corridorSpeed:Ve(e,s);r<i&&(i=r,t=s)}return t}function Ah(n){for(const e of n.nodes){if(e.owner!==$)continue;const t=Oi(n,e)-e.drones-n.fleets.filter(s=>s.owner===$&&(s.to===e.id||s.path?.includes(e.id))).reduce((s,r)=>s+r.drones,0);if(t<=0)continue;const i=n.nodes.filter(s=>s.owner===$&&s.id!==e.id&&s.drones-Oi(n,s)>=t&&(Fi(n,s.id,e.id)||qn(n,s)>0)).sort((s,r)=>Ve(s,e)-Ve(r,e))[0];i&&(Fi(n,i.id,e.id)?Ra(n,i,e,t,[]):Bi(n,i,e,t,[]))}for(const e of n.nodes){if(e.owner!==$||e.rally)continue;const t=e.drones-Oi(n,e);if(t<te.rallyBatch)continue;const i=Pu(n,e);i&&(Fi(n,e.id,i.id)?Ra(n,e,i,t,[]):qn(n,e)>0&&Bi(n,e,i,t,[]))}}function lc(n,e){const t=n.specs[n.cmdSpec];if(!(!t||!t.cmd))for(t.cmd.xp+=e*(1+(ft(n,$).xp||0));t.cmd.lvl<5&&t.cmd.xp>=te.xpLevels[t.cmd.lvl];){t.cmd.lvl++,n.modV++;const i=Ii(n,mu.filter(s=>!t.cmd.perks.includes(s.id)),3).map(s=>s.id);n.pending.push({kind:"perk",node:-1,opts:i,title:`Commander reached level ${t.cmd.lvl}`}),je(n,`Your Commander reached level ${t.cmd.lvl}`,"good")}}function cc(n,e){const t=new Set(n.specs.filter(s=>s.owner===$).map(s=>s.def)),i=Ii(n,uh.filter(s=>!t.has(s)),3+(ft(n,$).offer||0));if(!i.length){n.sides[$].ult+=20;return}n.pending.push({kind:"spec",node:e,opts:i,title:e===n.home&&n.t<1?"Your first recruit":`Recruits at ${n.nodes[e].name}`})}function Lu(n,e,t){const i=n.sides[$].relics,s=o=>Object.values(Mn).filter(c=>c.rarity===o&&!i.includes(c.id)).map(c=>c.id),r=e==="rare"?"uncommon":"common";let a=Ii(n,s(e),e==="common"?3:2);if(a.length<3&&(a=a.concat(Ii(n,s(r).filter(o=>!a.includes(o)),3-a.length))),!a.length){n.sides[$].ult+=30;return}n.pending.push({kind:"relic",node:t,opts:a,title:"Choose a relic"})}function Rh(n,e){const t=n.sides[e].techs;return Object.keys(Pt).filter(i=>!t.includes(i)&&(!Pt[i].pre||t.includes(Pt[i].pre))&&!(Pt[i].excl&&t.includes(Pt[i].excl)))}const Ca=(n,e)=>te.rpBase+te.rpStep*n.sides[e].techs.length;function Du(n){const e=Ii(n,Rh(n,$),3);return e.length?(n.pending.push({kind:"tech",node:-1,opts:e,title:"Research complete: choose one"}),!0):!1}function dc(n,e,t){const i=n.sides[e];i.techs.includes(t)||(i.techs.push(t),n.modV++,e===$?(n.stats.techs++,je(n,`Researched ${Pt[t].name}`,"good")):je(n,`${Kn(n,e)} fielded ${Pt[t].name}`,"warn"))}function Iu(n,e,t){const i=n.sides[$];for(const s of t)switch(s[0]){case"ult":i.ult+=s[1];break;case"drones":e.drones+=s[1];break;case"relic":Lu(n,s[1],e.id);break;case"tech":Du(n)||(i.ult+=30);break;case"spec":cc(n,e.id);break;case"xp":lc(n,s[1]);break;case"shield":e.sh<3?e.sh++:i.ult+=20;break;case"buff":e.buffs.push({k:s[1],v:s[2],until:n.t+s[3]}),n.modV++;break;case"mobil":n.mob.prog=Math.max(0,Math.min(.99,n.mob.prog+s[1]));break;case"hold":e.hold={until:n.t+s[1],total:s[1],need:s[2],fx:s[3],name:e.event?Un[e.event].name:"Operation"};break;case"reveal":for(const r of n.nodes)Ve(r,e)<=s[1]&&r.buffs.push({k:"scan",v:1,until:n.t+45});ds(n);break;case"ambush":{const r=Zt(n)*Math.PI*2;n.fleets.push({id:n.nextId++,owner:0,home:-1,slot:!1,from:e.id,to:e.id,x:e.x+Math.cos(r)*48,y:e.y+Math.sin(r)*48,drones:s[1],specs:[],off:!0}),je(n,`Automata are closing on ${e.name} with ${s[1]} Drones`,"warn",e.id);break}}}function Nu(n,e,t){return t.ult&&n.sides[$].ult<t.ult?"Not enough Ultanium":t.drones&&e.drones<t.drones?"Not enough Drones here":t.req&&!e.specs.some(i=>n.specs[i].def===t.req&&n.specs[i].owner===$)?`Needs your ${tt[t.req].name} at this node`:null}function Ch(n,e){const t=n.pending[0];if(!t)return"Nothing to choose";const i=n.sides[$];if(t.kind==="event"){const r=n.nodes[t.node],a=Un[t.event];if(e<0||r.owner!==$||r.event!==t.event)return n.pending.shift(),null;const o=a.choices[e],c=Nu(n,r,o);return c||(o.ult&&(i.ult-=o.ult),o.drones&&(r.drones-=o.drones),n.pending.shift(),Iu(n,r,o.fx),r.event=null,n.stats.events++,je(n,`${a.name}: ${o.label}`,"info",r.id),null)}if(t.kind==="spec"&&e<0)return n.pending.shift(),null;const s=t.opts[e];if(s===void 0)return"Pick one";if(n.pending.shift(),t.kind==="draft"){const r=Ni(n,s.base,$,n.home);r.cmd={base:s.base,arch:s.arch,lvl:1,xp:0,perks:[]},r.name="Commander",n.cmdSpec=r.id,cc(n,n.home)}else if(t.kind==="spec"){const r=n.nodes[t.node].owner===$?n.nodes[t.node]:Ka(n,$);if(r){const a=Ni(n,s,$,r.id);ft(n,$).recruitUp&&(a.up=!0),je(n,`${jn(a)} joined at ${r.name}`,"good",r.id),n.stats.specs++}}else t.kind==="relic"?(i.relics.push(s),n.stats.relics++,je(n,`Relic claimed: ${Mn[s].name}`,"good")):t.kind==="perk"?n.specs[n.cmdSpec].cmd.perks.push(s):t.kind==="tech"&&dc(n,$,s);return n.modV++,null}function Ph(n,e,t){if(e.held!==$||e.node<0)return"Not your prisoner";const i=n.sides[$],s=ft(n,$);if(e.def==="warlord"||e.def==="archon")return"Leaders cannot be ransomed or recruited";if(t){if(e.def==="captain")return"Captains cannot be recruited";if(n.specs.some(o=>o.owner===$&&o.def===e.def))return`You already have a ${tt[e.def].name}`;const a=s.recruitFree?0:te.recruitCost;return i.ult<a?"Not enough Ultanium":(i.ult-=a,e.owner=$,e.cd=0,Ui(n,e,n.nodes[e.node]),n.stats.specs++,je(n,`${jn(e)} now works for you`,"good",e.node),null)}return i.ult+=Math.round(te.ransom*(1+(s.ransom||0))),br(n,e),null}const Uu=n=>te.rescueSecs+(ft(n,$).rescue||0),uc=n=>n.upk+te.upkeepDrone<=n.inc*(n.kind==="player"?te.armyShare:1),Fu=(n,e,t)=>Math.max(2,te.prodSecs[e.lv]-((t||bn(n,e)).prodSecs||0));function Lh(n){const e=te.dt;if(n.t+=e,n.tick++,n.tick%10===1)for(const s in n.sides){const r=xu(n,+s),a=n.sides[s];a.inc=r.inc,a.upk=r.upk,a.net=r.net,a.rpm=r.rpm}for(const s of n.nodes){s.buffs.length&&s.buffs.some(c=>c.until<=n.t)&&(s.buffs=s.buffs.filter(c=>c.until>n.t),n.modV++);const r=n.sides[s.owner],a=r?bn(n,s):{},o=ec(n,s,a);if(s.shields<o&&!a.noRegen?s.shields=Math.min(o,s.shields+e*(1+(a.regen||0))/te.shieldRegenSecs):s.shields>o&&!a.capHold&&(s.shields=Math.max(o,s.shields-e/10)),!!r){if(s.task&&(s.task.left-=e*(1+(a.build||0)),s.task.left<=0)){const c=s.task;s.task=null,xh(n,s,c)}if(s.kind==="station"&&r.produce&&uc(r)&&(s.prod+=e,s.prod>=Fu(n,s,a)&&(s.prod=0,s.drones++,r.net-=te.upkeepDrone,r.upk+=te.upkeepDrone,s.owner===$&&n.stats.dronesMade++)),s.hold&&n.t>=s.hold.until){const c=s.hold;s.hold=null,s.drones>=c.need?(je(n,`${c.name} complete at ${s.name}`,"good",s.id),Iu(n,s,c.fx)):je(n,`${c.name} failed at ${s.name}: fewer than ${c.need} Drones on site`,"bad",s.id)}}}for(const s in n.sides){const r=n.sides[s];if(r.ult+=r.net*e/60,r.kind==="player"&&(n.stats.ultMade+=r.inc*e/60,r.rp+=r.rpm*e/60),r.ult<0&&(r.ult=0,r.desertT+=e,r.desertT>=te.desertSecs)){r.desertT=0;const a=n.nodes.filter(o=>o.owner===+s&&o.drones>0).sort((o,c)=>c.drones-o.drones)[0];a&&(a.drones--,r.net+=te.upkeepDrone,r.kind==="player"&&n.tick%300<40&&je(n,"You cannot pay your Drones: they are deserting","bad",a.id))}}const t=n.sides[$];if(t.rp>=Ca(n,$)&&!n.pending.some(s=>s.kind==="tech")){const s=Ca(n,$);Du(n)?t.rp-=s:t.rp=s}for(const s of n.fleets.slice()){const r=n.nodes[s.to],a=Ve(s,r),o=Ru(n,s)*e;a<=o?wh(n,s):(s.x+=(r.x-s.x)/a*o,s.y+=(r.y-s.y)/a*o)}n.tick%20===0&&Ah(n);const i=n.specs[n.cmdSpec];i&&(i.owner!==$?(n.result="lose",n.resultWhy="Your Commander was lost."):i.held?n.cmdLostT<0?(n.cmdLostT=n.t,je(n,`YOUR COMMANDER IS A PRISONER at ${n.nodes[i.node].name}. Retake it before the window closes.`,"bad",i.node)):n.t-n.cmdLostT>=Uu(n)&&(n.result="lose",n.resultWhy=`Your Commander was not recovered from ${n.nodes[i.node].name} in time.`):n.cmdLostT=-1,!n.result&&!n.nodes.some(s=>s.owner===$)&&(n.result="lose",n.resultWhy="You hold no territory.")),n.tick%3===0&&ds(n)}const fc="spacenodes.tune.v2",Dh=JSON.parse(JSON.stringify(te)),Ds=te,Kc={fleetSpeed:"Map units per second",startUlt:"Starting Ultanium",startDrones:"Starting Drones",baseIncome:"Free Ultanium per minute",freeBase:"Drones that cost no upkeep",mineOut:"Ultanium/min by mine level (0,1,2,3)",sizeMult:"Planet size multiplier (small, medium, large)",refineryMult:"Refinery output multiplier",labRp:"Research per minute per Lab",labWorkers:"Extra Drones a Lab needs",supplyFree:"Drones a Supply world feeds",upkeepDrone:"Ultanium/min per Drone",upkeepPower:"Ultanium/min per point of specialist Power",depotMult:"Upkeep multiplier for Drones in a Depot",armyShare:"Stations stop building when upkeep reaches this share of income",desertSecs:"Seconds per deserting Drone when broke",lvCost:"Cost to reach level (-, -, 2, 3)",lvTime:"Seconds per level upgrade",shCost:"Cost to reach shield level (-, 1, 2, 3)",shTime:"Seconds per shield upgrade",specCost:"Specialty cost",specTime:"Specialty build seconds",missileCost:"Missile cost",missileTime:"Missile build seconds",missileRange:"Missile reach",missileKill:"Drones a missile destroys",missileSpeed:"Missile speed multiplier",prodSecs:"Seconds per Drone by Barracks level (-, 1, 2, 3)",shieldPerLv:"Shield per shield level",shieldRegenSecs:"Seconds per shield point recharged",slotsStation:"Launch slots per station",slotsPlanet:"Launch slots per planet",specSlots:"Active specialists per node",crew:"Specialists per fleet",baySpeed:"Launch Bay speed bonus",bayCrew:"Launch Bay extra crew",rallyBatch:"Spare Drones before a rally convoy leaves",fleetFov:"Fleet vision: full intelligence, detection",fovInner:"Node full-intelligence radius",fovOuter:"Node detection radius",corridorCost:"Corridor cost",corridorTime:"Corridor build seconds",corridorRange:"Corridor reach",corridorMax:"Corridors per node",corridorSpeed:"Convoy speed multiplier",rescueSecs:"Commander rescue window",ransom:"Ultanium per ransom",recruitCost:"Cost to recruit a prisoner",rpBase:"Research needed for the first choice",rpStep:"Extra research per technology known",xpLevels:"Commander experience per level",nodes:"Nodes on the map (next run)",neutralShield:"Shield level on neutral planets by size (next run)",stageSecs:"Seconds per mobilization stage",graceSecs:"Seconds before the first offensive",offInterval:"Seconds between offensives, by stage",offCommit:"Share of Drones sent on offensives, by stage",gatherSecs:"Seconds an offensive gathers",stageFree:"Reserve Drones each faction gains per stage",surgeFree:"Reserve Drones per total-war surge",captureSetback:"Mobilization lost per enemy node captured",aegisPerLayer:"Citadel Aegis per unbroken faction"};function ha(){try{return JSON.parse(localStorage.getItem(fc)||"{}")}catch{return{}}}function Zc(n){try{localStorage.setItem(fc,JSON.stringify(n))}catch{}}function Ou(n,e){const t=Ds[n];Array.isArray(t)&&Array.isArray(e)?(t.length=0,t.push(...e)):t&&typeof t=="object"&&e&&typeof e=="object"?Object.assign(t,e):Ds[n]=e}function Ih(){const n=ha();for(const e in n)e in Ds&&Ou(e,n[e])}const co=n=>Array.isArray(n)?n.join(", "):n&&typeof n=="object"?JSON.stringify(n):String(n);function Nh(n,e){return Array.isArray(e)?n.split(/[,\s]+/).filter(Boolean).map(Number):e&&typeof e=="object"?JSON.parse(n):Number(n)}const Uh=n=>Array.isArray(n)?n.length>0&&n.every(e=>Number.isFinite(e)):typeof n=="number"?Number.isFinite(n):n!==null&&typeof n=="object";function Fh(n){const e=document.createElement("div");e.id="console",document.body.appendChild(e);let t="values",i="";const s=["Type help for commands."];function r(){const l=ha(),u=i.toLowerCase();let p="";if(t==="values")for(const f of Object.keys(te))f==="dt"||u&&!(f+(Kc[f]||"")).toLowerCase().includes(u)||(p+=`<label class="crow ${co(Ds[f])!==co(Dh[f])?"changed":""}"><span><b>${f}</b><small>${Kc[f]||""}</small></span><input data-k="${f}" value='${co(Ds[f])}'></label>`);else p=`<div class="cout">${s.slice(-60).map(f=>`<div>${f.replace(/</g,"&lt;")}</div>`).join("")}</div><input id="ccmd" placeholder="command, e.g. ult 500" autocomplete="off">`;const d=Object.keys(l).length;e.innerHTML=`<div class="chead"><b>Tuning console</b><small>${d} change${d===1?"":"s"} saved in this browser</small><button data-c="close">✕</button></div>
      <div class="ctabs">${["values","commands"].map(f=>`<button data-c="tab:${f}" class="${t===f?"on":""}">${f}</button>`).join("")}</div>
      ${t==="values"?`<input id="cfilter" placeholder="filter" value="${i}">`:""}
      <div class="cbody">${p}</div>
      <div class="cfoot"><button data-c="export">Copy changes</button><button data-c="import">Paste changes</button><button data-c="reset">Reset all</button></div>
      <p class="dim">Most values apply at once. Map values (node count, neutral shields) apply to the next new run.</p>`,t==="commands"&&e.querySelector("#ccmd")?.focus()}function a(l){const u=ha(),p=l.dataset.k;try{const d=Nh(l.value,Ds[p]);if(!Uh(d))throw 0;Ou(p,d),u[p]=d,Zc(u),n.refresh(),r()}catch{l.classList.add("bad")}}function o(l){const[u,...p]=l.trim().split(/\s+/),d=n.game(),f=p[0]!==void 0?Number(p[0]):NaN,v=n.selected();s.push(`> ${l}`);const g=h=>s.push(h);if(u==="help"||!u){g("ult N · drones N (selected node) · econ · reveal · stage N · mob 0-1 · rp N · tech ID · relic ID · spec ID · upgrade (all specialists) · win · speed N · list specs|relics|techs");return}if(u==="list"){g((p[0]==="relics"?Object.keys(Mn):p[0]==="techs"?Object.keys(Pt):Object.keys(tt)).join(" "));return}if(u==="speed"){n.setSpeed(Math.max(1,Math.min(32,f||1))),g(`speed ${f}x`);return}if(!d){g("Start a run first.");return}const m=d.sides[$];switch(u){case"ult":m.ult+=f||0,g(`Ultanium ${Math.floor(m.ult)}`);break;case"drones":v<0||d.nodes[v].owner!==$?g("Select one of your nodes first"):(d.nodes[v].drones+=f||0,g(`${d.nodes[v].name}: ${d.nodes[v].drones} Drones`));break;case"econ":{const h=xu(d,$);g(`income ${h.inc.toFixed(1)} · upkeep ${h.upk.toFixed(1)} (specialists ${h.specUp.toFixed(1)}) · Drones ${h.drones}, ${h.free} free · research ${h.rpm.toFixed(1)}/min`);break}case"reveal":for(const h of d.nodes)h.buffs.push({k:"scan",v:1,until:d.t+120});ds(d),g("Whole map identified for 2 minutes");break;case"stage":d.mob.stage=Math.max(1,Math.min(5,f||1)),d.mob.prog=0,g(`Mobilization stage ${d.mob.stage}`);break;case"mob":d.mob.prog=Math.max(0,Math.min(.99,f||0)),g(`Mobilization progress ${d.mob.prog}`);break;case"rp":m.rp+=f||0,g(`Research points ${m.rp.toFixed(0)}`);break;case"tech":Pt[p[0]]?(dc(d,$,p[0]),g(`Granted ${Pt[p[0]].name}`)):g("Unknown technology");break;case"relic":Mn[p[0]]?(m.relics.push(p[0]),d.modV++,g(`Relic ${Mn[p[0]].name}`)):g("Unknown relic");break;case"spec":{const h=v>=0&&d.nodes[v].owner===$?v:d.home;tt[p[0]]?(Ni(d,p[0],$,h),g(`${tt[p[0]].name} at ${d.nodes[h].name}`)):g("Unknown specialist");break}case"upgrade":for(const h of d.specs)h.owner===$&&!h.cmd&&(h.up=!0);d.modV++,g("Every specialist upgraded");break;case"win":d.result="win",d.resultWhy="Console.";break;default:g("Unknown command. Type help.")}n.refresh()}e.addEventListener("click",l=>{const u=l.target.closest("[data-c]");if(!u)return;const[p,d]=u.dataset.c.split(":");if(p==="close")c(!1);else if(p==="tab")t=d,r();else if(p==="export"){const f=JSON.stringify(ha(),null,1);navigator.clipboard?.writeText(f).catch(()=>{}),s.push("Changes copied to the clipboard:",f),t="commands",r()}else if(p==="import"){const f=prompt("Paste tuning JSON");if(f)try{Zc(JSON.parse(f)),location.reload()}catch{alert("That is not valid JSON")}}else p==="reset"&&confirm("Reset every tuned value to the default? The page reloads.")&&(localStorage.removeItem(fc),location.reload())}),e.addEventListener("change",l=>{const u=l.target;u.dataset.k&&a(u)}),e.addEventListener("input",l=>{const u=l.target;if(u.id==="cfilter"){i=u.value;const p=u.selectionStart;r();const d=e.querySelector("#cfilter");d.focus(),d.setSelectionRange(p,p)}}),e.addEventListener("keydown",l=>{l.stopPropagation();const u=l.target;l.key==="Enter"&&u.id==="ccmd"?(o(u.value),r()):l.key==="Enter"&&u.dataset.k?a(u):(l.key==="`"||l.key==="Escape")&&(l.preventDefault(),c(!1))});function c(l){const u=l??!e.classList.contains("open");e.classList.toggle("open",u),u&&r()}return document.addEventListener("keydown",l=>{(l.key==="`"||l.key==="F2")&&!l.target.closest("input,textarea")&&(l.preventDefault(),c())}),{toggle:c}}const Oh=["Kestrel","Bastille","Harrow","Vigil","Anchor","Lantern","Marrow","Cinder","Tether","Gantry","Rook","Ward","Halcyon","Talon","Spindle","Ember","Quarry","Beacon","Keel","Sable"],kh=["Ka","Ve","Or","Tal","Mi","Sen","Dra","Ul","Phe","Ny","Cor","Az","Lo","Ery","Bri","Zan","Hel","Qua","Io","Xe"],Bh=["ris","dan","thos","mir","vek","lun","tar","ion","sha","bor","nea","rax","phi","dor","lys","gan","tis","mon","rae","kai"];function uo(n,e,t,i){return{owner:n,kind:e,fac:t,ult:i,techs:[],relics:[],produce:!0,rp:0,free:0,net:0,inc:0,upk:0,rpm:0,broken:!1,aiT:6+n*2,expT:60+n*15,desertT:0,refundT:0}}function zh(n,e=0){const s={v:2,seed:n,rng:n|0,t:0,tick:0,modV:1,threat:e,w:430,h:290,nodes:[],fleets:[],specs:[],corridors:[],sides:{},factions:[2,3,4],archon:5,mob:{stage:1,prog:0,nextOff:te.graceSecs,turn:0,surge:0},offs:[],pending:[],log:[],cmdSpec:-1,cmdLostT:-1,intel:[],vis:[],result:null,resultWhy:"",stats:{captures:0,nodesLost:0,battles:0,dronesLost:0,dronesMade:0,specs:0,specsLost:0,relics:0,techs:0,events:0,warlords:0,ultMade:0},nextId:1,home:0,citadel:1};for(let S=0;S<5;S++)Zt(s);const r=[{x:cn(s,36,50),y:cn(s,290*.35,290*.65),region:$},{x:430-cn(s,36,50),y:cn(s,290*.35,290*.65),region:5}];for(let S=0;S<8e3&&r.length<te.nodes;S++){const D={x:cn(s,22,408),y:cn(s,22,268),region:0};r.every(C=>Ve(D,C)>=34)&&r.push(D)}const a=r[0],o=r[1],c=()=>r.filter(S=>S.region===0),l=(S,D)=>D.slice().sort((C,R)=>Ve(C,S)-Ve(R,S));for(const S of l(o,c()).slice(0,2))Ve(S,o)<90&&(S.region=5);const u=fa(s,[.18,.82]),p=[{x:.52,y:.5},{x:.6,y:u[0]},{x:.6,y:u[1]}],d=[];for(const S of[2,1,0]){const D={x:p[S].x*430+cn(s,-12,12),y:p[S].y*290+cn(s,-12,12)},C=l(D,c().filter(R=>Ve(R,a)>120))[0];C.region=2+S,d[S]=C;for(const R of l(C,c().filter(U=>Ve(U,a)>95)).slice(0,3))Ve(R,C)<90&&(R.region=2+S)}const f=Ii(s,Object.keys(Nn),3);s.sides[$]=uo($,"player","",te.startUlt),f.forEach((S,D)=>s.sides[2+D]=uo(2+D,"faction",S,20)),s.sides[5]=uo(5,"archon",Nr(s,Object.keys(is)),30);const v=Ve(a,o),g=l(a,c()),m=new Set,h=()=>{for(;;){const S=Nr(s,kh)+Nr(s,Bh);if(!m.has(S))return m.add(S),S}};let x=[];const E=S=>{x.length||(x=fa(s,Object.keys(Un)));const D=x.findIndex(C=>Un[C].on==="any"||Un[C].on===S);return D<0?null:x.splice(D,1)[0]},b=1+.1*e;r.forEach((S,D)=>{const C=Math.max(0,Math.min(1,Ve(S,a)/v+cn(s,-.12,.12))),R={id:D,name:h(),kind:"planet",x:S.x,y:S.y,size:0,owner:S.region,region:S.region,threat:C,drones:0,shields:0,lv:1,sh:0,spec:"",task:null,prod:0,missile:0,specs:[],prisoners:[],buffs:[],event:null,offer:!1,hold:null,floor:0,rally:!1,rallyTo:-1,capital:!1,citadel:!1,home:!1},U=Zt(s);R.size=U<.35?0:U<.8?1:2;const H=s.sides[S.region]?.kind==="faction"?Nn[s.sides[S.region].fac]:null;if(S===a)R.kind="station",R.home=!0,R.drones=te.startDrones,R.name="Haven",R.sh=1;else if(S===o)R.kind="station",R.citadel=!0,R.name="The Citadel",R.drones=Math.round(16*b),R.lv=3,R.sh=3,R.spec="depot";else if(S.region===0){const P=g.indexOf(S);R.owner=0,R.offer=!0,R.kind=P<2?"planet":P===2?"station":Zt(s)<.58?"planet":"station",P===0&&(R.size=0),P===1&&(R.size=1);const V=P<=2||Ve(S,a)<70;R.drones=V?ua(s,0,1):Math.round((C*8*cn(s,.6,1.3)+1)*b),R.sh=R.kind==="planet"?te.neutralShield[R.size]:1,P>1&&(R.kind==="station"?Zt(s)<.7:Zt(s)<.3)&&(R.event=E(R.kind))}else{const P=d.includes(S);R.capital=P,R.kind=P?"station":Zt(s)<.55?"planet":"station",R.drones=Math.round((P?9+C*5:3+C*5*cn(s,.7,1.2))*b),S.region===5?(R.drones=Math.round(ua(s,6,9)*b),R.sh=2,R.lv=2):(R.sh=Math.min(3,(H?H.ai.shield:1)-(P?0:1)+(Zt(s)<.4?1:0)),P&&(R.lv=2,R.sh=Math.max(2,R.sh))),R.sh=Math.max(0,R.sh),H&&Zt(s)<.6&&(R.spec=R.kind==="planet"?H.ai.planet:H.ai.station)}R.kind==="station"&&!R.home&&!R.citadel&&(R.name=`${Nr(s,Oh)}-${ua(s,2,99)}`),R.shields=R.sh*te.shieldPerLv,s.nodes.push(R),s.intel.push({seen:0,t:0,snap:null}),s.vis.push(0)});for(const S of s.factions){const D=Nn[s.sides[S].fac],C=s.nodes.filter(H=>H.owner===S),R=C.find(H=>H.capital);R.name=D.name.split(" ")[0]+" Prime",Ni(s,"warlord",S,R.id).name=D.warlord;const U=[R,R,fa(s,C.filter(H=>!H.capital))[0]||R];D.specs.forEach((H,P)=>Ni(s,H,S,U[P].id)),s.sides[S].free=C.reduce((H,P)=>H+P.drones,0)+4}const A=is[s.sides[5].fac];Ni(s,"archon",5,1).name=`${A.name} ${A.title}`,s.sides[5].free=s.nodes.filter(S=>S.owner===5).reduce((S,D)=>S+D.drones,0)+6;const w=Ii(s,fh,3),_=Ii(s,Object.keys(Vi),3);return s.pending.push({kind:"draft",node:0,opts:w.map((S,D)=>({base:S,arch:_[D]})),title:"Choose your Commander"}),ds(s),s}const Gh={aggr:1,expand:1e9,react:.9,target:"weak",shield:3,planet:"refinery",station:"depot"},ku=(n,e)=>n.sides[e].kind==="faction"?Nn[n.sides[e].fac].ai:Gh,Bu=(n,e)=>wr(n,0,0,[],e,{}).def;function zu(n,e,t,i){const s=Ni(n,"captain",e.owner,e.id);return Bi(n,e,t,i,[s.id])?(e.specs=e.specs.filter(a=>a!==s.id),s.owner=-1,s.node=-1,!1):!0}function Hh(n,e){const t=n.sides[e],i=ku(n,e),s=n.nodes.filter(a=>a.owner===e);if(!s.length||t.broken)return;for(const a of s)if(!a.task){if(a.spec==="silo"&&!a.missile&&!Ri(n,a,"missile")){nr(n,a,"missile");continue}Zt(n)>.35||(a.sh<Math.min(3,i.shield)&&!Ri(n,a,"sh")?nr(n,a,"sh"):!a.spec&&!Ri(n,a,"spec",a.kind==="planet"?i.planet:i.station)?nr(n,a,"spec",a.kind==="planet"?i.planet:i.station):a.lv<3&&!Ri(n,a,"lv")&&nr(n,a,"lv"))}for(const a of n.fleets){if(a.owner!==$||a.drones<=0||a.noticed||a.lane)continue;const o=n.nodes[a.to];if(o.owner!==e||(a.noticed=!0,Er(n,a).stealth||Zt(n)>i.react))continue;const c=sc(n,a,o),l=s.filter(u=>u.id!==o.id&&u.drones>4&&qn(n,u)>0&&Ve(u,o)/te.fleetSpeed+1<c).sort((u,p)=>p.drones-u.drones)[0];l&&Bi(n,l,o,Math.floor((l.drones-2)*.6),[])}const r=s.filter(a=>!a.capital&&a.drones<2+Math.round(a.threat*3)).sort((a,o)=>a.drones-o.drones)[0];if(r){const a=s.filter(o=>o.id!==r.id&&o.drones>8&&qn(n,o)>0).sort((o,c)=>Ve(o,r)-Ve(c,r))[0];a&&Bi(n,a,r,Math.min(4,Math.floor((a.drones-5)/2)+1),[])}if(n.t>=t.expT&&t.kind==="faction"){let a=null;for(const o of s)if(!(qn(n,o)<1))for(const c of n.nodes){if(c.owner!==0)continue;const l=Ve(o,c);if(l>115)continue;const u=Bu(n,c)+1;o.drones-2>=u&&(!a||l<a.d)&&(a={src:o,tgt:c,need:u,d:l})}a&&zu(n,a.src,a.tgt,a.need+ua(n,0,1))&&(t.expT=n.t+i.expand*cn(n,.8,1.2))}}function Vh(n,e){const t=ku(n,e),i=n.nodes.filter(f=>f.owner===e),s=n.nodes.filter(f=>f.owner===$);if(!i.length||!s.length)return;let r=null,a=1e9;for(const f of s){const v=Math.min(...i.map(h=>Ve(h,f))),g=Bu(n,f);let m=t.target==="weak"?g*10+v*.5:v+g*4;t.target==="spec"&&(m-=50*f.specs.length+(f.specs.includes(n.cmdSpec)?100:0)),m<a&&(a=m,r=f)}if(!r)return;const o=r,c=i.slice().sort((f,v)=>Ve(f,o)-Ve(v,o))[0],l=Math.min(.95,te.offCommit[n.mob.stage]*(1+(ft(n,n.archon).offBig||0))*(.7+.3*t.aggr)),u=i.filter(f=>f.id!==c.id&&f.drones>=4&&qn(n,f)>0&&Ve(f,c)<190).sort((f,v)=>Ve(f,c)-Ve(v,c)).slice(0,1+n.mob.stage+n.mob.surge);let p=te.gatherSecs;for(const f of u){const v=f.capital||f.citadel?Math.max(5,Math.floor(f.drones*.4)):2,g=Math.floor((f.drones-v)*l);g>0&&!Bi(n,f,c,g,[])&&(p=Math.max(p,Ve(f,c)/te.fleetSpeed+5))}const d=(ft(n,$).warn||0)>0;n.offs.push({owner:e,target:o.id,staging:c.id,launchT:n.t+p,warned:d}),je(n,d?`${Kn(n,e)} is massing at ${c.name} to strike ${o.name}`:`${Kn(n,e)} is mobilizing for an offensive`,"warn",d?o.id:-1)}function Wh(n,e){const t=n.nodes[e.staging];if(t.owner!==e.owner||n.sides[e.owner].broken)return;let i=n.nodes[e.target];if(i.owner!==$){const o=n.nodes.filter(c=>c.owner===$).sort((c,l)=>Ve(c,t)-Ve(l,t))[0];if(!o)return;i=o}const s=n.nodes.find(o=>o.owner===e.owner&&!eo(n,o,i));s&&Cu(n,s,i);const r=t.capital||t.citadel?Math.max(5,Math.floor(t.drones*.4)):2,a=t.drones-r;a<3||zu(n,t,i,a)}function $h(n){const e=n.mob,t=te.stageSecs*(1-.05*n.threat);if(e.prog+=te.dt/t*Math.max(.3,1-(ft(n,$).mobSlow||0)),e.prog>=1)if(e.prog=0,e.stage>=5){e.surge++;for(const i of[...n.factions,n.archon])n.sides[i].broken||(n.sides[i].free+=te.surgeFree);je(n,`Total war: Coalition reserves deepen (surge ${e.surge}). Every faction can field more Drones.`,"warn")}else{e.stage++,je(n,`Coalition mobilization reached stage ${e.stage}. Offensives grow larger and more frequent.`,"warn");for(const i of[...n.factions,n.archon]){const s=n.sides[i];if(s.broken||(s.free+=te.stageFree,s.kind!=="faction"))continue;const r=Nn[s.fac].techs.filter(a=>!s.techs.includes(a));for(const a of r.slice(0,s.fac==="lumen"?2:1))dc(n,i,a)}}if(n.t>=e.nextOff){const i=n.factions.filter(s=>!n.sides[s].broken&&n.nodes.some(r=>r.owner===s));(e.stage>=4||!i.length)&&i.push(n.archon),Vh(n,i[e.turn%i.length]),e.turn++,e.nextOff=n.t+te.offInterval[e.stage]*cn(n,.85,1.15)/(1+.04*n.threat)/(1+.15*e.surge)}if(n.offs.length){const i=n.offs.filter(s=>n.t>=s.launchT);if(i.length){n.offs=n.offs.filter(s=>n.t<s.launchT);for(const s of i)Wh(n,s)}}}function Xh(n){$h(n);for(const e of[...n.factions,n.archon]){const t=n.sides[e];n.t>=t.aiT&&(t.aiT=n.t+8+Zt(n)*4,Hh(n,e))}}function qh(n){return n.result||n.pending.length?!1:(Lh(n),n.result||Xh(n),!0)}function Yh(n,e){if(n.result)return"The run is over";const t=s=>{const r=n.nodes[s];return r&&r.owner===$?r:null},i=s=>{const r=n.specs[s];return r&&r.owner===$?r:null};switch(e.c){case"up":{const s=t(e.node);return s?nr(n,s,e.what,e.id):"Not your node"}case"cancel":{const s=t(e.node);return s?(vh(n,s),null):"Not your node"}case"corridor":return n.nodes[e.from]&&n.nodes[e.to]?Mh(n,n.nodes[e.from],n.nodes[e.to]):"Unknown node";case"launch":{const s=t(e.from);return s&&n.nodes[e.to]?Bi(n,s,n.nodes[e.to],e.drones,e.specs):"Not your node"}case"convoy":{const s=t(e.from);return s&&n.nodes[e.to]?Ra(n,s,n.nodes[e.to],e.drones,e.specs):"Not your node"}case"move":{const s=i(e.spec);return s&&n.nodes[e.to]?Th(n,s,n.nodes[e.to]):"Not your specialist"}case"missile":{const s=t(e.from);return s&&n.nodes[e.to]?Cu(n,s,n.nodes[e.to]):"Not your node"}case"rally":{const s=t(e.node);return s?(s.rally=!s.rally,s.rally&&(s.rallyTo=-1),null):"Not your node"}case"rallyTo":{const s=t(e.node);return s?e.to>=0&&!t(e.to)?.rally?"Pick one of your rally points":(s.rallyTo=e.to,null):"Not your node"}case"floor":{const s=t(e.node);return s?(s.floor=Math.max(0,Math.min(99,Math.round(e.v))),null):"Not your node"}case"produce":return n.sides[$].produce=!n.sides[$].produce,null;case"promote":{const s=i(e.spec);return s?gh(n,s):"Not your specialist"}case"choose":return Ch(n,e.idx);case"ransom":{const s=n.specs[e.spec];return s?Ph(n,s,e.recruit):"Unknown prisoner"}case"event":{const s=t(e.node);return!s||!s.event?"No event here":(n.pending.push({kind:"event",node:s.id,opts:[],title:Un[s.event].name,event:s.event}),null)}}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hc="187",Kh=0,Jc=1,Zh=2,pa=1,Jh=2,ir=3,ss=0,an=1,Vn=2,Is=0,cr=1,Qc=2,jc=3,ed=4,Qh=5,Ts=100,jh=101,ep=102,tp=103,np=104,ip=200,sp=201,rp=202,ap=203,Gu=204,Hu=205,op=206,lp=207,cp=208,dp=209,up=210,fp=211,hp=212,pp=213,mp=214,qo=0,Yo=1,Ko=2,gr=3,Zo=4,Jo=5,Qo=6,jo=7,pc=0,gp=1,_p=2,fi=0,Vu=1,Wu=2,$u=3,Xu=4,qu=5,Yu=6,Ku=7,Zu=300,zs=301,_r=302,fo=303,ho=304,el=1e3,li=1001,tl=1002,Ht=1003,vp=1004,Ur=1005,rn=1006,po=1007,Ci=1008,un=1009,Ju=1010,Qu=1011,vr=1012,mc=1013,Zn=1014,$n=1015,Jn=1016,gc=1017,_c=1018,Gs=1020,ju=35902,ef=35899,tf=1021,nf=1022,Xn=1023,zi=1026,Pi=1027,sf=1028,vc=1029,rs=1030,xc=1031,Sc=1033,ma=33776,ga=33777,_a=33778,va=33779,nl=35840,il=35841,sl=35842,rl=35843,al=36196,ol=37492,ll=37496,cl=37488,dl=37489,Pa=37490,ul=37491,fl=37808,hl=37809,pl=37810,ml=37811,gl=37812,_l=37813,vl=37814,xl=37815,Sl=37816,Ml=37817,yl=37818,bl=37819,El=37820,wl=37821,Tl=36492,Al=36494,Rl=36495,Cl=36283,Pl=36284,La=36285,Ll=36286,xp=3200,Dl=0,Sp=1,wi="",dn="srgb",Da="srgb-linear",Ia="linear",lt="srgb",mo=7680,Mp=519,yp=512,bp=513,Ep=514,rf=515,wp=516,Tp=517,af=518,of=519,Ap=35044,td="300 es",Dn=2e3,xr=2001;function Rp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Na(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Cp(){const n=Na("canvas");return n.style.display="block",n}const nd={};function id(...n){const e="THREE."+n.shift();console.log(e,...n)}function lf(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Le(...n){n=lf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function it(...n){n=lf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function xa(...n){const e=n.join(" ");e in nd||(nd[e]=!0,Le(...n))}function Pp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Lp={[qo]:qo,[Ko]:Qo,[Zo]:Zo,[gr]:Jo,[Yo]:Yo,[Qo]:Ko,[jo]:jo,[Jo]:gr};class us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],go=Math.PI/180,Il=180/Math.PI;function Tr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function Dp(n,e){return(n%e+e)%e}function _o(n,e,t){return(1-t)*n+t*e}function Ip(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Mc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Np(n,e){if(e.constructor===Float32Array)return n;const t=Mc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Up(n,e){if(e.constructor===Float32Array)return n;const t=Mc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const Dc=class Dc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Dc.prototype.isVector2=!0;let We=Dc;class qs{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],u=i[s+2],p=i[s+3],d=r[a+0],f=r[a+1],v=r[a+2],g=r[a+3];if(p!==g||c!==d||l!==f||u!==v){let m=c*d+l*f+u*v+p*g;m<0&&(d=-d,f=-f,v=-v,g=-g,m=-m);let h=1-o;if(m<.9995){const x=Math.acos(m),E=Math.sin(x);h=Math.sin(h*x)/E,o=Math.sin(o*x)/E,c=c*h+d*o,l=l*h+f*o,u=u*h+v*o,p=p*h+g*o}else{c=c*h+d*o,l=l*h+f*o,u=u*h+v*o,p=p*h+g*o;const x=1/Math.sqrt(c*c+l*l+u*u+p*p);c*=x,l*=x,u*=x,p*=x}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],p=r[a],d=r[a+1],f=r[a+2],v=r[a+3];return e[t]=o*v+u*p+c*f-l*d,e[t+1]=c*v+u*d+l*p-o*f,e[t+2]=l*v+u*f+o*d-c*p,e[t+3]=u*v-o*p-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),p=o(r/2),d=c(i/2),f=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=d*u*p+l*f*v,this._y=l*f*p-d*u*v,this._z=l*u*v+d*f*p,this._w=l*u*p-d*f*v;break;case"YXZ":this._x=d*u*p+l*f*v,this._y=l*f*p-d*u*v,this._z=l*u*v-d*f*p,this._w=l*u*p+d*f*v;break;case"ZXY":this._x=d*u*p-l*f*v,this._y=l*f*p+d*u*v,this._z=l*u*v+d*f*p,this._w=l*u*p-d*f*v;break;case"ZYX":this._x=d*u*p-l*f*v,this._y=l*f*p+d*u*v,this._z=l*u*v-d*f*p,this._w=l*u*p+d*f*v;break;case"YZX":this._x=d*u*p+l*f*v,this._y=l*f*p+d*u*v,this._z=l*u*v-d*f*p,this._w=l*u*p-d*f*v;break;case"XZY":this._x=d*u*p-l*f*v,this._y=l*f*p-d*u*v,this._z=l*u*v+d*f*p,this._w=l*u*p+d*f*v;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],p=t[10],d=i+o+p;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>p){const f=2*Math.sqrt(1+i-o-p);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>p){const f=2*Math.sqrt(1+o-i-p);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+p-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-s*o,this._w=a*u-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ic=class Ic{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),u=2*(o*t-r*s),p=2*(r*i-a*t);return this.x=t+c*l+a*p-o*u,this.y=i+c*u+o*l-r*p,this.z=s+c*p+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vo.copy(this).projectOnVector(e),this.sub(vo)}reflect(e){return this.sub(vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ic.prototype.isVector3=!0;let F=Ic;const vo=new F,sd=new qs,Nc=class Nc{constructor(e,t,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],p=i[7],d=i[2],f=i[5],v=i[8],g=s[0],m=s[3],h=s[6],x=s[1],E=s[4],b=s[7],A=s[2],w=s[5],_=s[8];return r[0]=a*g+o*x+c*A,r[3]=a*m+o*E+c*w,r[6]=a*h+o*b+c*_,r[1]=l*g+u*x+p*A,r[4]=l*m+u*E+p*w,r[7]=l*h+u*b+p*_,r[2]=d*g+f*x+v*A,r[5]=d*m+f*E+v*w,r[8]=d*h+f*b+v*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*r*u+i*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],p=u*a-o*l,d=o*c-u*r,f=l*r-a*c,v=t*p+i*d+s*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=p*g,e[1]=(s*l-u*i)*g,e[2]=(o*i-s*a)*g,e[3]=d*g,e[4]=(u*t-s*c)*g,e[5]=(s*r-o*t)*g,e[6]=f*g,e[7]=(i*c-l*t)*g,e[8]=(a*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return xa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xo.makeScale(e,t)),this}rotate(e){return xa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xo.makeRotation(-e)),this}translate(e,t){return xa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Nc.prototype.isMatrix3=!0;let Ne=Nc;const xo=new Ne,rd=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ad=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fp(){const n={enabled:!0,workingColorSpace:Da,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===lt&&(s.r=hi(s.r),s.g=hi(s.g),s.b=hi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(s.r=Ns(s.r),s.g=Ns(s.g),s.b=Ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wi?Ia:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Da]:{primaries:e,whitePoint:i,transfer:Ia,toXYZ:rd,fromXYZ:ad,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:rd,fromXYZ:ad,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),n}const Je=Fp();function hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ns(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let hs;class Op{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{hs===void 0&&(hs=Na("canvas")),hs.width=e.width,hs.height=e.height;const s=hs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=hs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Na("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=hi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hi(t[i]/255)*255):t[i]=hi(t[i]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kp=0;class yc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Tr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(So(s[a].image)):r.push(So(s[a]))}else r=So(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function So(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Op.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let Bp=0;const Mo=new F;class Qt extends us{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,i=li,s=li,r=rn,a=Ci,o=Xn,c=un,l=Qt.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Tr(),this.name="",this.source=new yc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Mo).x}get height(){return this.source.getSize(Mo).y}get depth(){return this.source.getSize(Mo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case el:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case el:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Zu;Qt.DEFAULT_ANISOTROPY=1;const Uc=class Uc{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],u=c[4],p=c[8],d=c[1],f=c[5],v=c[9],g=c[2],m=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(p-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+g)<.1&&Math.abs(v+m)<.1&&Math.abs(l+f+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,b=(f+1)/2,A=(h+1)/2,w=(u+d)/4,_=(p+g)/4,S=(v+m)/4;return E>b&&E>A?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=w/i,r=_/i):b>A?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=w/s,r=S/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=_/r,s=S/r),this.set(i,s,r,t),this}let x=Math.sqrt((m-v)*(m-v)+(p-g)*(p-g)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-v)/x,this.y=(p-g)/x,this.z=(d-u)/x,this.w=Math.acos((l+f+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Uc.prototype.isVector4=!0;let yt=Uc;class zp extends us{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];const s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Qt({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new yc(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends zp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class cf extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gp extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Xa=class Xa{constructor(e,t,i,s,r,a,o,c,l,u,p,d,f,v,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,u,p,d,f,v,g,m)}set(e,t,i,s,r,a,o,c,l,u,p,d,f,v,g,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=p,h[14]=d,h[3]=f,h[7]=v,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xa().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ps.setFromMatrixColumn(e,0).length(),r=1/ps.setFromMatrixColumn(e,1).length(),a=1/ps.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*p,v=o*u,g=o*p;t[0]=c*u,t[4]=-c*p,t[8]=l,t[1]=f+v*l,t[5]=d-g*l,t[9]=-o*c,t[2]=g-d*l,t[6]=v+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,f=c*p,v=l*u,g=l*p;t[0]=d+g*o,t[4]=v*o-f,t[8]=a*l,t[1]=a*p,t[5]=a*u,t[9]=-o,t[2]=f*o-v,t[6]=g+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,f=c*p,v=l*u,g=l*p;t[0]=d-g*o,t[4]=-a*p,t[8]=v+f*o,t[1]=f+v*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,f=a*p,v=o*u,g=o*p;t[0]=c*u,t[4]=v*l-f,t[8]=d*l+g,t[1]=c*p,t[5]=g*l+d,t[9]=f*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,v=o*c,g=o*l;t[0]=c*u,t[4]=g-d*p,t[8]=v*p+f,t[1]=p,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*p+v,t[10]=d-g*p}else if(e.order==="XZY"){const d=a*c,f=a*l,v=o*c,g=o*l;t[0]=c*u,t[4]=-p,t[8]=l*u,t[1]=d*p+g,t[5]=a*u,t[9]=f*p-v,t[2]=v*p-f,t[6]=o*u,t[10]=g*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hp,e,Vp)}lookAt(e,t,i){const s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),_i.crossVectors(i,on),_i.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),_i.crossVectors(i,on)),_i.normalize(),Fr.crossVectors(on,_i),s[0]=_i.x,s[4]=Fr.x,s[8]=on.x,s[1]=_i.y,s[5]=Fr.y,s[9]=on.y,s[2]=_i.z,s[6]=Fr.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],p=i[5],d=i[9],f=i[13],v=i[2],g=i[6],m=i[10],h=i[14],x=i[3],E=i[7],b=i[11],A=i[15],w=s[0],_=s[4],S=s[8],D=s[12],C=s[1],R=s[5],U=s[9],H=s[13],P=s[2],V=s[6],K=s[10],G=s[14],ie=s[3],X=s[7],ee=s[11],ne=s[15];return r[0]=a*w+o*C+c*P+l*ie,r[4]=a*_+o*R+c*V+l*X,r[8]=a*S+o*U+c*K+l*ee,r[12]=a*D+o*H+c*G+l*ne,r[1]=u*w+p*C+d*P+f*ie,r[5]=u*_+p*R+d*V+f*X,r[9]=u*S+p*U+d*K+f*ee,r[13]=u*D+p*H+d*G+f*ne,r[2]=v*w+g*C+m*P+h*ie,r[6]=v*_+g*R+m*V+h*X,r[10]=v*S+g*U+m*K+h*ee,r[14]=v*D+g*H+m*G+h*ne,r[3]=x*w+E*C+b*P+A*ie,r[7]=x*_+E*R+b*V+A*X,r[11]=x*S+E*U+b*K+A*ee,r[15]=x*D+E*H+b*G+A*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],p=e[6],d=e[10],f=e[14],v=e[3],g=e[7],m=e[11],h=e[15],x=c*f-l*d,E=o*f-l*p,b=o*d-c*p,A=a*f-l*u,w=a*d-c*u,_=a*p-o*u;return t*(g*x-m*E+h*b)-i*(v*x-m*A+h*w)+s*(v*E-g*A+h*_)-r*(v*b-g*w+m*_)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-i*(r*u-o*c)+s*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],p=e[9],d=e[10],f=e[11],v=e[12],g=e[13],m=e[14],h=e[15],x=t*o-i*a,E=t*c-s*a,b=t*l-r*a,A=i*c-s*o,w=i*l-r*o,_=s*l-r*c,S=u*g-p*v,D=u*m-d*v,C=u*h-f*v,R=p*m-d*g,U=p*h-f*g,H=d*h-f*m,P=x*H-E*U+b*R+A*C-w*D+_*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/P;return e[0]=(o*H-c*U+l*R)*V,e[1]=(s*U-i*H-r*R)*V,e[2]=(g*_-m*w+h*A)*V,e[3]=(d*w-p*_-f*A)*V,e[4]=(c*C-a*H-l*D)*V,e[5]=(t*H-s*C+r*D)*V,e[6]=(m*b-v*_-h*E)*V,e[7]=(u*_-d*b+f*E)*V,e[8]=(a*U-o*C+l*S)*V,e[9]=(i*C-t*U-r*S)*V,e[10]=(v*w-g*b+h*x)*V,e[11]=(p*b-u*w-f*x)*V,e[12]=(o*D-a*R-c*S)*V,e[13]=(t*R-i*D+s*S)*V,e[14]=(g*E-v*A-m*x)*V,e[15]=(u*A-p*E+d*x)*V,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,p=o+o,d=r*l,f=r*u,v=r*p,g=a*u,m=a*p,h=o*p,x=c*l,E=c*u,b=c*p,A=i.x,w=i.y,_=i.z;return s[0]=(1-(g+h))*A,s[1]=(f+b)*A,s[2]=(v-E)*A,s[3]=0,s[4]=(f-b)*w,s[5]=(1-(d+h))*w,s[6]=(m+x)*w,s[7]=0,s[8]=(v+E)*_,s[9]=(m-x)*_,s[10]=(1-(d+g))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=ps.set(s[0],s[1],s[2]).length();const o=ps.set(s[4],s[5],s[6]).length(),c=ps.set(s[8],s[9],s[10]).length();r<0&&(a=-a),wn.copy(this);const l=1/a,u=1/o,p=1/c;return wn.elements[0]*=l,wn.elements[1]*=l,wn.elements[2]*=l,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=p,wn.elements[9]*=p,wn.elements[10]*=p,t.setFromRotationMatrix(wn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=Dn,c=!1){const l=this.elements,u=2*r/(t-e),p=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let v,g;if(c)v=r/(a-r),g=a*r/(a-r);else if(o===Dn)v=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===xr)v=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=p,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Dn,c=!1){const l=this.elements,u=2/(t-e),p=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s);let v,g;if(c)v=1/(a-r),g=a/(a-r);else if(o===Dn)v=-2/(a-r),g=-(a+r)/(a-r);else if(o===xr)v=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=p,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=v,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Xa.prototype.isMatrix4=!0;let pt=Xa;const ps=new F,wn=new pt,Hp=new F(0,0,0),Vp=new F(1,1,1),_i=new F,Fr=new F,on=new F,od=new pt,ld=new qs;class Gi{constructor(e=0,t=0,i=0,s=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],p=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return od.makeRotationFromQuaternion(e),this.setFromRotationMatrix(od,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ld.setFromEuler(this),this.setFromQuaternion(ld,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class df{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wp=0;const cd=new F,ms=new qs,ti=new pt,Or=new F,Zs=new F,$p=new F,Xp=new qs,dd=new F(1,0,0),ud=new F(0,1,0),fd=new F(0,0,1),hd={type:"added"},qp={type:"removed"},gs={type:"childadded",child:null},yo={type:"childremoved",child:null};class Lt extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=Tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new F,t=new Gi,i=new qs,s=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ne}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new df,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(dd,e)}rotateY(e){return this.rotateOnAxis(ud,e)}rotateZ(e){return this.rotateOnAxis(fd,e)}translateOnAxis(e,t){return cd.copy(e).applyQuaternion(this.quaternion),this.position.add(cd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dd,e)}translateY(e){return this.translateOnAxis(ud,e)}translateZ(e){return this.translateOnAxis(fd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Or.copy(e):Or.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(Zs,Or,this.up):ti.lookAt(Or,Zs,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),ms.setFromRotationMatrix(ti),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hd),gs.child=e,this.dispatchEvent(gs),gs.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qp),yo.child=e,this.dispatchEvent(yo),yo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hd),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,$p),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,Xp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const p=c[l];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),p=a(e.shapes),d=a(e.skeletons),f=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),v.length>0&&(i.nodes=v)}return i.object=s,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Lt.DEFAULT_UP=new F(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class pn extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yp={type:"move"};class bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),h=this._getHandJoint(l,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],d=u.position.distanceTo(p.position),f=.02,v=.005;l.inputState.pinching&&d>f+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new pn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const uf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},kr={h:0,s:0,l:0};function Eo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Je.workingColorSpace){if(e=Dp(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Eo(a,r,e+1/3),this.g=Eo(a,r,e),this.b=Eo(a,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=dn){function i(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){const i=uf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return Je.workingToColorSpace(qt.copy(this),e),Math.round(Qe(qt.r*255,0,255))*65536+Math.round(Qe(qt.g*255,0,255))*256+Math.round(Qe(qt.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(qt.copy(this),t);const i=qt.r,s=qt.g,r=qt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const p=a-o;switch(l=u<=.5?p/(a+o):p/(2-a-o),a){case i:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-i)/p+2;break;case r:c=(i-s)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=dn){Je.workingToColorSpace(qt.copy(this),e);const t=qt.r,i=qt.g,s=qt.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(kr);const i=_o(vi.h,kr.h,t),s=_o(vi.s,kr.s,t),r=_o(vi.l,kr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new ze;ze.NAMES=uf;class Kp extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Tn=new F,ni=new F,wo=new F,ii=new F,_s=new F,vs=new F,pd=new F,To=new F,Ao=new F,Ro=new F,Co=new yt,Po=new yt,Lo=new yt;class Pn{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Tn.subVectors(e,t),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Tn.subVectors(s,t),ni.subVectors(i,t),wo.subVectors(e,t);const a=Tn.dot(Tn),o=Tn.dot(ni),c=Tn.dot(wo),l=ni.dot(ni),u=ni.dot(wo),p=a*l-o*o;if(p===0)return r.set(0,0,0),null;const d=1/p,f=(l*c-o*u)*d,v=(a*u-o*c)*d;return r.set(1-f-v,v,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ii.x),c.addScaledVector(a,ii.y),c.addScaledVector(o,ii.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return Co.setScalar(0),Po.setScalar(0),Lo.setScalar(0),Co.fromBufferAttribute(e,t),Po.fromBufferAttribute(e,i),Lo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Co,r.x),a.addScaledVector(Po,r.y),a.addScaledVector(Lo,r.z),a}static isFrontFacing(e,t,i,s){return Tn.subVectors(i,t),ni.subVectors(e,t),Tn.cross(ni).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Tn.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Pn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;_s.subVectors(s,i),vs.subVectors(r,i),To.subVectors(e,i);const c=_s.dot(To),l=vs.dot(To);if(c<=0&&l<=0)return t.copy(i);Ao.subVectors(e,s);const u=_s.dot(Ao),p=vs.dot(Ao);if(u>=0&&p<=u)return t.copy(s);const d=c*p-u*l;if(d<=0&&c>=0&&u<=0&&c-u>0)return a=c/(c-u),t.copy(i).addScaledVector(_s,a);Ro.subVectors(e,r);const f=_s.dot(Ro),v=vs.dot(Ro);if(v>=0&&f<=v)return t.copy(r);const g=f*l-c*v;if(g<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(i).addScaledVector(vs,o);const m=u*v-f*p;if(m<=0&&p-u>=0&&f-v>=0)return pd.subVectors(r,s),o=(p-u)/(p-u+(f-v)),t.copy(s).addScaledVector(pd,o);const h=1/(m+g+d);return a=g*h,o=d*h,t.copy(i).addScaledVector(_s,a).addScaledVector(vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ar{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Br.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Br.copy(i.boundingBox)),Br.applyMatrix4(e.matrixWorld),this.union(Br)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),zr.subVectors(this.max,Js),xs.subVectors(e.a,Js),Ss.subVectors(e.b,Js),Ms.subVectors(e.c,Js),xi.subVectors(Ss,xs),Si.subVectors(Ms,Ss),Yi.subVectors(xs,Ms);let t=[0,-xi.z,xi.y,0,-Si.z,Si.y,0,-Yi.z,Yi.y,xi.z,0,-xi.x,Si.z,0,-Si.x,Yi.z,0,-Yi.x,-xi.y,xi.x,0,-Si.y,Si.x,0,-Yi.y,Yi.x,0];return!Do(t,xs,Ss,Ms,zr)||(t=[1,0,0,0,1,0,0,0,1],!Do(t,xs,Ss,Ms,zr))?!1:(Gr.crossVectors(xi,Si),t=[Gr.x,Gr.y,Gr.z],Do(t,xs,Ss,Ms,zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const si=[new F,new F,new F,new F,new F,new F,new F,new F],An=new F,Br=new Ar,xs=new F,Ss=new F,Ms=new F,xi=new F,Si=new F,Yi=new F,Js=new F,zr=new F,Gr=new F,Ki=new F;function Do(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ki.fromArray(n,r);const o=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),c=e.dot(Ki),l=t.dot(Ki),u=i.dot(Ki);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Tt=new F,Hr=new We;let Zp=0;class ts extends us{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ap,this.updateRanges=[],this.gpuType=$n,this.version=0,this._normalizationScale=e!==void 0?Mc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix3(e),this.setXY(t,Hr.x,Hr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Np(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Up(e,this.array)}}class ff extends ts{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class hf extends ts{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class st extends ts{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Jp=new Ar,Qs=new F,Io=new F;class Rr{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Jp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const t=Qs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Qs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(Io)),this.expandByPoint(Qs.copy(e.center).sub(Io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Qp=0;const Sn=new pt,No=new Lt,ys=new F,ln=new Ar,js=new Ar,Ot=new F;class Vt extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rp(e)?hf:ff)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ne().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return No.lookAt(e),No.updateMatrix(),this.applyMatrix4(No.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new st(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];js.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(ln.min,js.min),ln.expandByPoint(Ot),Ot.addVectors(ln.max,js.max),ln.expandByPoint(Ot)):(ln.expandByPoint(js.min),ln.expandByPoint(js.max))}ln.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ot));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ot.fromBufferAttribute(o,l),c&&(ys.fromBufferAttribute(e,l),Ot.add(ys)),s=Math.max(s,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ts(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(i.count);for(let D=0;D<i.count;D++)o[D]=new F,c[D]=new F;const u=new F,p=new F,d=new F,f=new We,v=new We,g=new We,m=new F,h=new F;function x(D,C,R){l[D]=l[C]=l[R]=1,u.fromBufferAttribute(i,D),p.fromBufferAttribute(i,C),d.fromBufferAttribute(i,R),f.fromBufferAttribute(r,D),v.fromBufferAttribute(r,C),g.fromBufferAttribute(r,R),p.sub(u),d.sub(u),v.sub(f),g.sub(f);const U=1/(v.x*g.y-g.x*v.y);isFinite(U)&&(m.copy(p).multiplyScalar(g.y).addScaledVector(d,-v.y).multiplyScalar(U),h.copy(d).multiplyScalar(v.x).addScaledVector(p,-g.x).multiplyScalar(U),o[D].add(m),o[C].add(m),o[R].add(m),c[D].add(h),c[C].add(h),c[R].add(h))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let D=0,C=E.length;D<C;++D){const R=E[D],U=R.start,H=R.count;for(let P=U,V=U+H;P<V;P+=3)x(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const b=new F,A=new F,w=new F,_=new F;function S(D){w.fromBufferAttribute(s,D),_.copy(w);const C=o[D];b.copy(C),b.sub(w.multiplyScalar(w.dot(C))).normalize(),A.crossVectors(_,C);const U=A.dot(c[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,U)}for(let D=0,C=i.count;D<C;++D)l[D]&&S(D);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ts(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new F,r=new F,a=new F,o=new F,c=new F,l=new F,u=new F,p=new F;if(e)for(let d=0,f=e.count;d<f;d+=3){const v=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),o.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,p=o.normalized,d=new l.constructor(c.length*u);let f=0,v=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?f=c[g]*o.data.stride+o.offset:f=c[g]*u;for(let h=0;h<u;h++)d[v++]=l[f++]}return new ts(d,u,p)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,i);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,p=l.length;u<p;u++){const d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let p=0,d=l.length;p<d;p++){const f=l[p];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],p=r[l];for(let d=0,f=p.length;d<f;d++)u.push(p[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uo=new F,jp=new F,em=new Ne;class yi{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Uo.subVectors(i,t).cross(jp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Uo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||em.getNormalMatrix(e),s=this.coplanarPoint(Uo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let tm=0;class fs extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=Tr(),this.name="",this.type="Material",this.blending=cr,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gu,this.blendDst=Hu,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mo,this.stencilZFail=mo,this.stencilZPass=mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new yi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new We().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new We().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ri=new F,Fo=new F,Vr=new F,Wr=new F;class bc{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Fo.copy(e).add(t).multiplyScalar(.5),Vr.copy(t).sub(e).normalize(),Wr.copy(this.origin).sub(Fo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Vr),o=Wr.dot(this.direction),c=-Wr.dot(Vr),l=Wr.lengthSq(),u=Math.abs(1-a*a);let p,d,f,v;if(u>0)if(p=a*c-o,d=a*o-c,v=r*u,p>=0)if(d>=-v)if(d<=v){const g=1/u;p*=g,d*=g,f=p*(p+a*d+2*o)+d*(a*p+d+2*c)+l}else d=r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*c)+l;else d=-r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*c)+l;else d<=-v?(p=Math.max(0,-(-a*r+o)),d=p>0?-r:Math.min(Math.max(-r,-c),r),f=-p*p+d*(d+2*c)+l):d<=v?(p=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(p=Math.max(0,-(a*r+o)),d=p>0?r:Math.min(Math.max(-r,-c),r),f=-p*p+d*(d+2*c)+l);else d=a>0?-r:r,p=Math.max(0,-(a*d+o)),f=-p*p+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Fo).addScaledVector(Vr,d),f}intersectSphere(e,t){if(e.radius<0)return null;ri.subVectors(e.center,this.origin);const i=ri.dot(this.direction),s=ri.dot(ri)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-d.z)*p,c=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,c=(e.min.z-d.z)*p),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,p=e.x-a.x,d=e.y-a.y,f=e.z-a.z,v=t.x-a.x,g=t.y-a.y,m=t.z-a.z,h=i.x-a.x,x=i.y-a.y,E=i.z-a.z,b=Math.abs(c),A=Math.abs(l),w=Math.abs(u);let _,S,D,C,R,U,H,P,V,K,G,ie;if(b>=A&&b>=w?(D=c,U=p,V=v,ie=h,c>=0?(_=l,S=u,C=d,R=f,H=g,P=m,K=x,G=E):(_=u,S=l,C=f,R=d,H=m,P=g,K=E,G=x)):A>=w?(D=l,U=d,V=g,ie=x,l>=0?(_=u,S=c,C=f,R=p,H=m,P=v,K=E,G=h):(_=c,S=u,C=p,R=f,H=v,P=m,K=h,G=E)):(D=u,U=f,V=m,ie=E,u>=0?(_=c,S=l,C=p,R=d,H=v,P=g,K=h,G=x):(_=l,S=c,C=d,R=p,H=g,P=v,K=x,G=h)),D===0)return null;const X=_/D,ee=S/D,ne=1/D,Ee=C-X*U,Ue=R-ee*U,J=H-X*V,_e=P-ee*V,Me=K-X*ie,Re=G-ee*ie,ve=Me*_e-Re*J,Oe=Ee*Re-Ue*Me,Et=J*Ue-_e*Ee;if(s){if(ve<0||Oe<0||Et<0)return null}else if((ve<0||Oe<0||Et<0)&&(ve>0||Oe>0||Et>0))return null;const Pe=ve+Oe+Et;if(Pe===0)return null;const at=ne*(ve*U+Oe*V+Et*ie);return(Pe>0?at<0:at>0)?null:this.at(at/Pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ua extends fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const md=new pt,Zi=new bc,$r=new Rr,gd=new F,Xr=new F,qr=new F,Yr=new F,Oo=new F,Kr=new F,_d=new F,Zr=new F;class Bt extends Lt{constructor(e=new Vt,t=new Ua){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Kr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],p=r[c];u!==0&&(Oo.fromBufferAttribute(p,e),a?Kr.addScaledVector(Oo,u):Kr.addScaledVector(Oo.sub(t),u))}t.add(Kr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(r),Zi.copy(e.ray).recast(e.near),!($r.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere($r,gd)===null||Zi.origin.distanceToSquared(gd)>(e.far-e.near)**2))&&(md.copy(r).invert(),Zi.copy(e.ray).applyMatrix4(md),!(i.boundingBox!==null&&Zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const m=d[v],h=a[m.materialIndex],x=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=x,A=E;b<A;b+=3){const w=o.getX(b),_=o.getX(b+1),S=o.getX(b+2);s=Jr(this,h,e,i,l,u,p,w,_,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=v,h=g;m<h;m+=3){const x=o.getX(m),E=o.getX(m+1),b=o.getX(m+2);s=Jr(this,a,e,i,l,u,p,x,E,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const m=d[v],h=a[m.materialIndex],x=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let b=x,A=E;b<A;b+=3){const w=b,_=b+1,S=b+2;s=Jr(this,h,e,i,l,u,p,w,_,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=v,h=g;m<h;m+=3){const x=m,E=m+1,b=m+2;s=Jr(this,a,e,i,l,u,p,x,E,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function nm(n,e,t,i,s,r,a,o){let c;if(e.side===an?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===ss,o),c===null)return null;Zr.copy(o),Zr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Zr);return l<t.near||l>t.far?null:{distance:l,point:Zr.clone(),object:n}}function Jr(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,Xr),n.getVertexPosition(c,qr),n.getVertexPosition(l,Yr);const u=nm(n,e,t,i,Xr,qr,Yr,_d);if(u){const p=new F;Pn.getBarycoord(_d,Xr,qr,Yr,p),s&&(u.uv=Pn.getInterpolatedAttribute(s,o,c,l,p,new We)),r&&(u.uv1=Pn.getInterpolatedAttribute(r,o,c,l,p,new We)),a&&(u.normal=Pn.getInterpolatedAttribute(a,o,c,l,p,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new F,materialIndex:0};Pn.getNormal(Xr,qr,Yr,d.normal),u.face=d,u.barycoord=p}return u}class im extends Qt{constructor(e=null,t=1,i=1,s,r,a,o,c,l=Ht,u=Ht,p,d){super(null,a,o,c,l,u,s,r,p,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ji=new Rr,sm=new We(.5,.5),Qr=new F;class Sr{constructor(e=new yi,t=new yi,i=new yi,s=new yi,r=new yi,a=new yi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Dn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],p=r[5],d=r[6],f=r[7],v=r[8],g=r[9],m=r[10],h=r[11],x=r[12],E=r[13],b=r[14],A=r[15];if(s[0].setComponents(l-a,f-u,h-v,A-x).normalize(),s[1].setComponents(l+a,f+u,h+v,A+x).normalize(),s[2].setComponents(l+o,f+p,h+g,A+E).normalize(),s[3].setComponents(l-o,f-p,h-g,A-E).normalize(),i)s[4].setComponents(c,d,m,b).normalize(),s[5].setComponents(l-c,f-d,h-m,A-b).normalize();else if(s[4].setComponents(l-c,f-d,h-m,A-b).normalize(),t===Dn)s[5].setComponents(l+c,f+d,h+m,A+b).normalize();else if(t===xr)s[5].setComponents(c,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){Ji.center.set(0,0,0);const t=sm.distanceTo(e.center);return Ji.radius=.7071067811865476+t,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Qr.x=s.normal.x>0?e.max.x:e.min.x,Qr.y=s.normal.y>0?e.max.y:e.min.y,Qr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const vd=new pt;class Ec{constructor(){this.coordinateSystem=Dn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];vd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Sr),i[s].setFromProjectionMatrix(vd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Sr),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new Ec().copy(this)}}class Nl extends fs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fa=new F,Oa=new F,xd=new pt,er=new bc,jr=new Rr,ko=new F,Sd=new F;class rm extends Lt{constructor(e=new Vt,t=new Nl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Fa.fromBufferAttribute(t,s-1),Oa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Fa.distanceTo(Oa);e.setAttribute("lineDistance",new st(i,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere),jr.applyMatrix4(s),jr.radius+=r,e.ray.intersectsSphere(jr)===!1)return;xd.copy(s).invert(),er.copy(e.ray).applyMatrix4(xd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let g=f,m=v-1;g<m;g+=l){const h=u.getX(g),x=u.getX(g+1),E=ea(this,e,er,c,h,x,g);E&&t.push(E)}if(this.isLineLoop){const g=u.getX(v-1),m=u.getX(f),h=ea(this,e,er,c,g,m,v-1);h&&t.push(h)}}else{const f=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let g=f,m=v-1;g<m;g+=l){const h=ea(this,e,er,c,g,g+1,g);h&&t.push(h)}if(this.isLineLoop){const g=ea(this,e,er,c,v-1,f,v-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ea(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(Fa.fromBufferAttribute(o,s),Oa.fromBufferAttribute(o,r),t.distanceSqToSegment(Fa,Oa,ko,Sd)>i)return;ko.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ko);if(!(l<e.near||l>e.far))return{distance:l,point:Sd.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class Md extends rm{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class pf extends fs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const yd=new pt,Ul=new bc,ta=new Rr,na=new F;class am extends Lt{constructor(e=new Vt,t=new pf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(s),ta.radius+=r,e.ray.intersectsSphere(ta)===!1)return;yd.copy(s).invert(),Ul.copy(e.ray).applyMatrix4(yd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,p=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let v=d,g=f;v<g;v++){const m=l.getX(v);na.fromBufferAttribute(p,m),bd(na,m,c,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(p.count,a.start+a.count);for(let v=d,g=f;v<g;v++)na.fromBufferAttribute(p,v),bd(na,v,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function bd(n,e,t,i,s,r,a){const o=Ul.distanceSqToPoint(n);if(o<t){const c=new F;Ul.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class mf extends Qt{constructor(e=[],t=zs,i,s,r,a,o,c,l,u){super(e,t,i,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ed extends Qt{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hs extends Qt{constructor(e,t,i=Zn,s,r,a,o=Ht,c=Ht,l,u=zi,p=1){if(u!==zi&&u!==Pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:p};super(d,s,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class gf extends Hs{constructor(e,t=Zn,i=zs,s,r,a=Ht,o=Ht,c,l=zi){const u={width:e,height:e,depth:1},p=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class _f extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Jt extends Vt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],p=[];let d=0,f=0;v("z","y","x",-1,-1,i,t,e,a,r,0),v("z","y","x",1,-1,i,t,-e,a,r,1),v("x","z","y",1,1,e,i,t,s,a,2),v("x","z","y",1,-1,e,i,-t,s,a,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(p,2));function v(g,m,h,x,E,b,A,w,_,S,D){const C=b/_,R=A/S,U=b/2,H=A/2,P=w/2,V=_+1,K=S+1;let G=0,ie=0;const X=new F;for(let ee=0;ee<K;ee++){const ne=ee*R-H;for(let Ee=0;Ee<V;Ee++){const Ue=Ee*C-U;X[g]=Ue*x,X[m]=ne*E,X[h]=P,l.push(X.x,X.y,X.z),X[g]=0,X[m]=0,X[h]=w>0?1:-1,u.push(X.x,X.y,X.z),p.push(Ee/_),p.push(1-ee/S),G+=1}}for(let ee=0;ee<S;ee++)for(let ne=0;ne<_;ne++){const Ee=d+ne+V*ee,Ue=d+ne+V*(ee+1),J=d+(ne+1)+V*(ee+1),_e=d+(ne+1)+V*ee;c.push(Ee,Ue,_e),c.push(Ue,J,_e),ie+=6}o.addGroup(f,ie,D),f+=ie,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class to extends Vt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new F,u=new We;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let p=0,d=3;p<=t;p++,d+=3){const f=i+p/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,c.push(u.x,u.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(o,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class vt extends Vt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],p=[],d=[],f=[];let v=0;const g=[],m=i/2;let h=0;x(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new st(p,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(f,2));function x(){const b=new F,A=new F;let w=0;const _=(t-e)/i;for(let S=0;S<=r;S++){const D=[],C=S/r,R=C*(t-e)+e;for(let U=0;U<=s;U++){const H=U/s,P=H*c+o,V=Math.sin(P),K=Math.cos(P);A.x=R*V,A.y=-C*i+m,A.z=R*K,p.push(A.x,A.y,A.z),b.set(V,_,K).normalize(),d.push(b.x,b.y,b.z),f.push(H,1-C),D.push(v++)}g.push(D)}for(let S=0;S<s;S++)for(let D=0;D<r;D++){const C=g[D][S],R=g[D+1][S],U=g[D+1][S+1],H=g[D][S+1];(e>0||D!==0)&&(u.push(C,R,H),w+=3),(t>0||D!==r-1)&&(u.push(R,U,H),w+=3)}l.addGroup(h,w,0),h+=w}function E(b){const A=v,w=new We,_=new F;let S=0;const D=b===!0?e:t,C=b===!0?1:-1;for(let U=1;U<=s;U++)p.push(0,m*C,0),d.push(0,C,0),f.push(.5,.5),v++;const R=v;for(let U=0;U<=s;U++){const P=U/s*c+o,V=Math.cos(P),K=Math.sin(P);_.x=D*K,_.y=m*C,_.z=D*V,p.push(_.x,_.y,_.z),d.push(0,C,0),w.x=V*.5+.5,w.y=K*.5*C+.5,f.push(w.x,w.y),v++}for(let U=0;U<s;U++){const H=A+U,P=R+U;b===!0?u.push(P,P+1,H):u.push(P+1,P,H),S+=3}l.addGroup(h,S,b===!0?1:2),h+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pi extends vt{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new pi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class no extends Vt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];o(s),l(i),u(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const E=new F,b=new F,A=new F;for(let w=0;w<t.length;w+=3)f(t[w+0],E),f(t[w+1],b),f(t[w+2],A),c(E,b,A,x)}function c(x,E,b,A){const w=A+1,_=[];for(let S=0;S<=w;S++){_[S]=[];const D=x.clone().lerp(b,S/w),C=E.clone().lerp(b,S/w),R=w-S;for(let U=0;U<=R;U++)U===0&&S===w?_[S][U]=D:_[S][U]=D.clone().lerp(C,U/R)}for(let S=0;S<w;S++)for(let D=0;D<2*(w-S)-1;D++){const C=Math.floor(D/2);D%2===0?(d(_[S][C+1]),d(_[S+1][C]),d(_[S][C])):(d(_[S][C+1]),d(_[S+1][C+1]),d(_[S+1][C]))}}function l(x){const E=new F;for(let b=0;b<r.length;b+=3)E.x=r[b+0],E.y=r[b+1],E.z=r[b+2],E.normalize().multiplyScalar(x),r[b+0]=E.x,r[b+1]=E.y,r[b+2]=E.z}function u(){const x=new F;for(let E=0;E<r.length;E+=3){x.x=r[E+0],x.y=r[E+1],x.z=r[E+2];const b=m(x)/2/Math.PI+.5,A=h(x)/Math.PI+.5;a.push(b,1-A)}v(),p()}function p(){for(let x=0;x<a.length;x+=6){const E=a[x+0],b=a[x+2],A=a[x+4],w=Math.max(E,b,A),_=Math.min(E,b,A);w>.9&&_<.1&&(E<.2&&(a[x+0]+=1),b<.2&&(a[x+2]+=1),A<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,E){const b=x*3;E.x=e[b+0],E.y=e[b+1],E.z=e[b+2]}function v(){const x=new F,E=new F,b=new F,A=new F,w=new We,_=new We,S=new We;for(let D=0,C=0;D<r.length;D+=9,C+=6){x.set(r[D+0],r[D+1],r[D+2]),E.set(r[D+3],r[D+4],r[D+5]),b.set(r[D+6],r[D+7],r[D+8]),w.set(a[C+0],a[C+1]),_.set(a[C+2],a[C+3]),S.set(a[C+4],a[C+5]),A.copy(x).add(E).add(b).divideScalar(3);const R=m(A);g(w,C+0,x,R),g(_,C+2,E,R),g(S,C+4,b,R)}}function g(x,E,b,A){A<0&&x.x===1&&(a[E]=x.x-1),b.x===0&&b.z===0&&(a[E]=A/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function h(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.vertices,e.indices,e.radius,e.detail)}}class Cr extends no{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Cr(e.radius,e.detail)}}class Us extends no{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Us(e.radius,e.detail)}}class Vs extends Vt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,p=e/o,d=t/c,f=[],v=[],g=[],m=[];for(let h=0;h<u;h++){const x=h*d-a;for(let E=0;E<l;E++){const b=E*p-r;v.push(b,-x,0),g.push(0,0,1),m.push(E/o),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let x=0;x<o;x++){const E=x+l*h,b=x+l*(h+1),A=x+1+l*(h+1),w=x+1+l*h;f.push(E,b,w),f.push(b,A,w)}this.setIndex(f),this.setAttribute("position",new st(v,3)),this.setAttribute("normal",new st(g,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.widthSegments,e.heightSegments)}}class wc extends Vt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let p=e;const d=(t-e)/s,f=new F,v=new We;for(let g=0;g<=s;g++){for(let m=0;m<=i;m++){const h=r+m/i*a;f.x=p*Math.cos(h),f.y=p*Math.sin(h),c.push(f.x,f.y,f.z),l.push(0,0,1),v.x=(f.x/t+1)/2,v.y=(f.y/t+1)/2,u.push(v.x,v.y)}p+=d}for(let g=0;g<s;g++){const m=g*(i+1);for(let h=0;h<i;h++){const x=h+m,E=x,b=x+i+1,A=x+i+2,w=x+1;o.push(E,b,w),o.push(b,A,w)}}this.setIndex(o),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Mr extends Vt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],p=new F,d=new F,f=[],v=[],g=[],m=[];for(let h=0;h<=i;h++){const x=[],E=h/i,b=a+E*o,A=e*Math.cos(b),w=Math.sqrt(e*e-A*A);let _=0;h===0&&a===0?_=.5/t:h===i&&c===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){const D=S/t,C=s+D*r;p.x=-w*Math.cos(C),p.y=A,p.z=w*Math.sin(C),v.push(p.x,p.y,p.z),d.copy(p).normalize(),g.push(d.x,d.y,d.z),m.push(D+_,1-E),x.push(l++)}u.push(x)}for(let h=0;h<i;h++)for(let x=0;x<t;x++){const E=u[h][x+1],b=u[h][x],A=u[h+1][x],w=u[h+1][x+1];(h!==0||a>0)&&f.push(E,b,w),(h!==i-1||c<Math.PI)&&f.push(b,A,w)}this.setIndex(f),this.setAttribute("position",new st(v,3)),this.setAttribute("normal",new st(g,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ka extends Vt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],u=[],p=[],d=new F,f=new F,v=new F;for(let g=0;g<=i;g++){const m=a+g/i*o;for(let h=0;h<=s;h++){const x=h/s*r;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),v.subVectors(f,d).normalize(),u.push(v.x,v.y,v.z),p.push(h/s),p.push(g/i)}}for(let g=1;g<=i;g++)for(let m=1;m<=s;m++){const h=(s+1)*g+m-1,x=(s+1)*(g-1)+m-1,E=(s+1)*(g-1)+m,b=(s+1)*g+m;c.push(h,x,b),c.push(x,E,b)}this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ws(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(wd(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(wd(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function en(n){const e={};for(let t=0;t<n.length;t++){const i=Ws(n[t]);for(const s in i)e[s]=i[s]}return e}function wd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function om(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function vf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const lm={clone:Ws,merge:en};var cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class as extends fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cm,this.fragmentShader=dm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=om(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ze().setHex(s.value);break;case"v2":this.uniforms[i].value=new We().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new yt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ne().fromArray(s.value);break;case"m4":this.uniforms[i].value=new pt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class um extends as{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Tc extends fs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dl,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=pc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fm extends fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hm extends fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class xf extends Lt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class pm extends xf{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Bo=new pt,Td=new F,Ad=new F;class mm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sr,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Td.setFromMatrixPosition(e.matrixWorld),t.position.copy(Td),Ad.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ad),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Bo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Bo,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===xr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Bo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ia=new F,sa=new qs,On=new F;class Sf extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ia,sa,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ia,sa,On.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ia,sa,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ia,sa,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new F,Rd=new We,Cd=new We;class Cn extends Sf{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Il*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Il*2*Math.atan(Math.tan(go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,Rd,Cd),t.subVectors(Cd,Rd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(go*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Mf extends Sf{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class gm extends mm{constructor(){super(new Mf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _m extends xf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new gm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const bs=-90,Es=1;class Fl extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Cn(bs,Es,e,t);s.layers=this.layers,this.add(s);const r=new Cn(bs,Es,e,t);r.layers=this.layers,this.add(r);const a=new Cn(bs,Es,e,t);a.layers=this.layers,this.add(a);const o=new Cn(bs,Es,e,t);o.layers=this.layers,this.add(o);const c=new Cn(bs,Es,e,t);c.layers=this.layers,this.add(c);const l=new Cn(bs,Es,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Dn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===xr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=g,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(p,d,f),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class vm extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Pd(n,e,t,i){const s=xm(i);switch(t){case tf:return n*e;case sf:return n*e/s.components*s.byteLength;case vc:return n*e/s.components*s.byteLength;case rs:return n*e*2/s.components*s.byteLength;case xc:return n*e*2/s.components*s.byteLength;case nf:return n*e*3/s.components*s.byteLength;case Xn:return n*e*4/s.components*s.byteLength;case Sc:return n*e*4/s.components*s.byteLength;case ma:case ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _a:case va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case il:case rl:return Math.max(n,16)*Math.max(e,8)/4;case nl:case sl:return Math.max(n,8)*Math.max(e,8)/2;case al:case ol:case cl:case dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ll:case Pa:case ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case pl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ml:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case gl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case _l:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case vl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case xl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case yl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case El:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case wl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Tl:case Al:case Rl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Cl:case Pl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case La:case Ll:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xm(n){switch(n){case un:case Ju:return{byteLength:1,components:1};case vr:case Qu:case Jn:return{byteLength:2,components:1};case gc:case _c:return{byteLength:2,components:4};case Zn:case mc:case $n:return{byteLength:4,components:1};case ju:case ef:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hc}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yf(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Sm(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,p=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,c,l){const u=c.array,p=c.updateRanges;if(n.bindBuffer(l,o),p.length===0)n.bufferSubData(l,0,u);else{p.sort((f,v)=>f.start-v.start);let d=0;for(let f=1;f<p.length;f++){const v=p[d],g=p[f];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++d,p[d]=g)}p.length=d+1;for(let f=0,v=p.length;f<v;f++){const g=p[f];n.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Mm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ym=`#ifdef USE_ALPHAHASH
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
#endif`,bm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Em=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Am=`#ifdef USE_AOMAP
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
#endif`,Rm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cm=`#ifdef USE_BATCHING
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
#endif`,Pm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Im=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nm=`#ifdef USE_IRIDESCENCE
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
#endif`,Um=`#ifdef USE_BUMPMAP
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
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Wm=`#define PI 3.141592653589793
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
} // validated`,$m=`vec3 transformedNormal = objectNormal;
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
#endif`,Xm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ym=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Km=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qm=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,e0=`#ifdef USE_ENVMAP
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
#endif`,t0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,n0=`#ifdef USE_ENVMAP
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
#endif`,i0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o0=`#ifdef USE_GRADIENTMAP
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
}`,l0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,c0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,f0=`#ifdef USE_ENVMAP
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
#endif`,h0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_0=`PhysicalMaterial material;
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
#endif`,v0=`uniform sampler2D dfgLUT;
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
}`,x0=`
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
#endif`,S0=`#if defined( RE_IndirectDiffuse )
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
#endif`,M0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,b0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,P0=`#if defined( USE_POINTS_UV )
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
#endif`,L0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,D0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N0=`#if defined( USE_MORPHCOLORS )
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
#endif`,U0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F0=`#ifdef USE_MORPHTARGETS
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
#endif`,O0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,B0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,V0=`#ifdef USE_NORMALMAP
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
#endif`,W0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,K0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Z0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rg=`float getShadowMask() {
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
}`,ag=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,og=`#ifdef USE_SKINNING
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
#endif`,lg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cg=`#ifdef USE_SKINNING
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
#endif`,dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pg=`#ifdef USE_TRANSMISSION
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
#endif`,mg=`#ifdef USE_TRANSMISSION
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mg=`uniform sampler2D t2D;
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
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`uniform float backgroundBlurriness;
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
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tg=`#include <common>
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
}`,Ag=`#if DEPTH_PACKING == 3200
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
}`,Rg=`#define DISTANCE
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
}`,Cg=`#define DISTANCE
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`uniform float scale;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Ng=`#include <common>
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
}`,Ug=`uniform vec3 diffuse;
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
}`,Fg=`#define LAMBERT
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
}`,Og=`#define LAMBERT
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
}`,kg=`#define MATCAP
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
}`,Bg=`#define MATCAP
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
}`,zg=`#define NORMAL
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
}`,Gg=`#define NORMAL
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
}`,Hg=`#define PHONG
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
}`,Vg=`#define PHONG
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
}`,Wg=`#define STANDARD
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
}`,$g=`#define STANDARD
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
}`,Xg=`#define TOON
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
}`,qg=`#define TOON
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
}`,Yg=`uniform float size;
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
}`,Kg=`uniform vec3 diffuse;
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
}`,Zg=`#include <common>
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
}`,Jg=`uniform vec3 color;
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
}`,Qg=`uniform float rotation;
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
}`,jg=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:Mm,alphahash_pars_fragment:ym,alphamap_fragment:bm,alphamap_pars_fragment:Em,alphatest_fragment:wm,alphatest_pars_fragment:Tm,aomap_fragment:Am,aomap_pars_fragment:Rm,batching_pars_vertex:Cm,batching_vertex:Pm,begin_vertex:Lm,beginnormal_vertex:Dm,bsdfs:Im,iridescence_fragment:Nm,bumpmap_pars_fragment:Um,clipping_planes_fragment:Fm,clipping_planes_pars_fragment:Om,clipping_planes_pars_vertex:km,clipping_planes_vertex:Bm,color_fragment:zm,color_pars_fragment:Gm,color_pars_vertex:Hm,color_vertex:Vm,common:Wm,defaultnormal_vertex:$m,displacementmap_pars_vertex:Xm,displacementmap_vertex:qm,emissivemap_fragment:Ym,emissivemap_pars_fragment:Km,colorspace_fragment:Zm,colorspace_pars_fragment:Jm,envmap_fragment:Qm,envmap_common_pars_fragment:jm,envmap_pars_fragment:e0,envmap_pars_vertex:t0,envmap_physical_pars_fragment:f0,envmap_vertex:n0,fog_vertex:i0,fog_pars_vertex:s0,fog_fragment:r0,fog_pars_fragment:a0,gradientmap_pars_fragment:o0,lightmap_pars_fragment:l0,lights_lambert_fragment:c0,lights_lambert_pars_fragment:d0,lights_pars_begin:u0,lights_toon_fragment:h0,lights_toon_pars_fragment:p0,lights_phong_fragment:m0,lights_phong_pars_fragment:g0,lights_physical_fragment:_0,lights_physical_pars_fragment:v0,lights_fragment_begin:x0,lights_fragment_maps:S0,lights_fragment_end:M0,lightprobes_pars_fragment:y0,logdepthbuf_fragment:b0,logdepthbuf_pars_fragment:E0,logdepthbuf_pars_vertex:w0,logdepthbuf_vertex:T0,map_fragment:A0,map_pars_fragment:R0,map_particle_fragment:C0,map_particle_pars_fragment:P0,metalnessmap_fragment:L0,metalnessmap_pars_fragment:D0,morphinstance_vertex:I0,morphcolor_vertex:N0,morphnormal_vertex:U0,morphtarget_pars_vertex:F0,morphtarget_vertex:O0,normal_fragment_begin:k0,normal_fragment_maps:B0,normal_pars_fragment:z0,normal_pars_vertex:G0,normal_vertex:H0,normalmap_pars_fragment:V0,clearcoat_normal_fragment_begin:W0,clearcoat_normal_fragment_maps:$0,clearcoat_pars_fragment:X0,iridescence_pars_fragment:q0,opaque_fragment:Y0,packing:K0,premultiplied_alpha_fragment:Z0,project_vertex:J0,dithering_fragment:Q0,dithering_pars_fragment:j0,roughnessmap_fragment:eg,roughnessmap_pars_fragment:tg,shadowmap_pars_fragment:ng,shadowmap_pars_vertex:ig,shadowmap_vertex:sg,shadowmask_pars_fragment:rg,skinbase_vertex:ag,skinning_pars_vertex:og,skinning_vertex:lg,skinnormal_vertex:cg,specularmap_fragment:dg,specularmap_pars_fragment:ug,tonemapping_fragment:fg,tonemapping_pars_fragment:hg,transmission_fragment:pg,transmission_pars_fragment:mg,uv_pars_fragment:gg,uv_pars_vertex:_g,uv_vertex:vg,worldpos_vertex:xg,background_vert:Sg,background_frag:Mg,backgroundCube_vert:yg,backgroundCube_frag:bg,cube_vert:Eg,cube_frag:wg,depth_vert:Tg,depth_frag:Ag,distance_vert:Rg,distance_frag:Cg,equirect_vert:Pg,equirect_frag:Lg,linedashed_vert:Dg,linedashed_frag:Ig,meshbasic_vert:Ng,meshbasic_frag:Ug,meshlambert_vert:Fg,meshlambert_frag:Og,meshmatcap_vert:kg,meshmatcap_frag:Bg,meshnormal_vert:zg,meshnormal_frag:Gg,meshphong_vert:Hg,meshphong_frag:Vg,meshphysical_vert:Wg,meshphysical_frag:$g,meshtoon_vert:Xg,meshtoon_frag:qg,points_vert:Yg,points_frag:Kg,shadow_vert:Zg,shadow_frag:Jg,sprite_vert:Qg,sprite_frag:jg},ge={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Gn={basic:{uniforms:en([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:en([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:en([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:en([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:en([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new ze(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:en([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:en([ge.points,ge.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:en([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:en([ge.common,ge.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:en([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:en([ge.sprite,ge.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:en([ge.common,ge.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:en([ge.lights,ge.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Gn.physical={uniforms:en([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const ra={r:0,b:0,g:0},e_=new pt,bf=new Ne;bf.set(-1,0,0,0,1,0,0,0,1);function t_(n,e,t,i,s,r){const a=new ze(0);let o=s===!0?0:1,c,l,u=null,p=0,d=null;function f(x){let E=x.isScene===!0?x.background:null;if(E&&E.isTexture){const b=x.backgroundBlurriness>0;E=e.get(E,b)}return E}function v(x){let E=!1;const b=f(x);b===null?m(a,o):b&&b.isColor&&(m(b,1),E=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(x,E){const b=f(E);b&&b.isCubeTexture?(l===void 0&&(l=new Bt(new Jt(1,1,1),new as({name:"BackgroundCubeMaterial",uniforms:Ws(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(e_.makeRotationFromEuler(E.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(bf),l.material.toneMapped=Je.getTransfer(b.colorSpace)!==lt,(u!==b||p!==b.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,p=b.version,d=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Bt(new Vs(2,2),new as({name:"BackgroundMaterial",uniforms:Ws(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Je.getTransfer(b.colorSpace)!==lt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||p!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,p=b.version,d=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,E){x.getRGB(ra,vf(n)),t.buffers.color.setClear(ra.r,ra.g,ra.b,E,r)}function h(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,E=1){a.set(x),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:v,addToRenderList:g,dispose:h}}function n_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(R,U,H,P,V){let K=!1;const G=p(R,P,H,U);r!==G&&(r=G,l(r.object)),K=f(R,P,H,V),K&&v(R,P,H,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,b(R,U,H,P),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return n.createVertexArray()}function l(R){return n.bindVertexArray(R)}function u(R){return n.deleteVertexArray(R)}function p(R,U,H,P){const V=P.wireframe===!0;let K=i[U.id];K===void 0&&(K={},i[U.id]=K);const G=R.isInstancedMesh===!0?R.id:0;let ie=K[G];ie===void 0&&(ie={},K[G]=ie);let X=ie[H.id];X===void 0&&(X={},ie[H.id]=X);let ee=X[V];return ee===void 0&&(ee=d(c()),X[V]=ee),ee}function d(R){const U=[],H=[],P=[];for(let V=0;V<t;V++)U[V]=0,H[V]=0,P[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:P,object:R,attributes:{},index:null}}function f(R,U,H,P){const V=r.attributes,K=U.attributes;let G=0;const ie=H.getAttributes();for(const X in ie)if(ie[X].location>=0){const ne=V[X];let Ee=K[X];if(Ee===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(Ee=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(Ee=R.instanceColor)),ne===void 0||ne.attribute!==Ee||Ee&&ne.data!==Ee.data)return!0;G++}return r.attributesNum!==G||r.index!==P}function v(R,U,H,P){const V={},K=U.attributes;let G=0;const ie=H.getAttributes();for(const X in ie)if(ie[X].location>=0){let ne=K[X];ne===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor));const Ee={};Ee.attribute=ne,ne&&ne.data&&(Ee.data=ne.data),V[X]=Ee,G++}r.attributes=V,r.attributesNum=G,r.index=P}function g(){const R=r.newAttributes;for(let U=0,H=R.length;U<H;U++)R[U]=0}function m(R){h(R,0)}function h(R,U){const H=r.newAttributes,P=r.enabledAttributes,V=r.attributeDivisors;H[R]=1,P[R]===0&&(n.enableVertexAttribArray(R),P[R]=1),V[R]!==U&&(n.vertexAttribDivisor(R,U),V[R]=U)}function x(){const R=r.newAttributes,U=r.enabledAttributes;for(let H=0,P=U.length;H<P;H++)U[H]!==R[H]&&(n.disableVertexAttribArray(H),U[H]=0)}function E(R,U,H,P,V,K,G){G===!0?n.vertexAttribIPointer(R,U,H,V,K):n.vertexAttribPointer(R,U,H,P,V,K)}function b(R,U,H,P){g();const V=P.attributes,K=H.getAttributes(),G=U.defaultAttributeValues;for(const ie in K){const X=K[ie];if(X.location>=0){let ee=V[ie];if(ee===void 0&&(ie==="instanceMatrix"&&R.instanceMatrix&&(ee=R.instanceMatrix),ie==="instanceColor"&&R.instanceColor&&(ee=R.instanceColor)),ee!==void 0){const ne=ee.normalized,Ee=ee.itemSize,Ue=e.get(ee);if(Ue===void 0)continue;const J=Ue.buffer,_e=Ue.type,Me=Ue.bytesPerElement,Re=_e===n.INT||_e===n.UNSIGNED_INT||ee.gpuType===mc;if(ee.isInterleavedBufferAttribute){const ve=ee.data,Oe=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,Et=ee.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let Pe=0;Pe<X.locationSize;Pe++)h(X.location+Pe,ve.meshPerAttribute);R.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Pe=0;Pe<X.locationSize;Pe++)m(X.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,J);for(let Pe=0;Pe<X.locationSize;Pe++)E(X.location+Pe,Ee/X.locationSize,_e,ne,Oe*Me,(Et+Ee/X.locationSize*Pe)*Me,Re)}else{if(ee.isInstancedBufferAttribute){for(let ve=0;ve<X.locationSize;ve++)h(X.location+ve,ee.meshPerAttribute);R.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ve=0;ve<X.locationSize;ve++)m(X.location+ve);n.bindBuffer(n.ARRAY_BUFFER,J);for(let ve=0;ve<X.locationSize;ve++)E(X.location+ve,Ee/X.locationSize,_e,ne,Ee*Me,Ee/X.locationSize*ve*Me,Re)}}else if(G!==void 0){const ne=G[ie];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(X.location,ne);break;case 3:n.vertexAttrib3fv(X.location,ne);break;case 4:n.vertexAttrib4fv(X.location,ne);break;default:n.vertexAttrib1fv(X.location,ne)}}}}x()}function A(){D();for(const R in i){const U=i[R];for(const H in U){const P=U[H];for(const V in P){const K=P[V];for(const G in K)u(K[G].object),delete K[G];delete P[V]}}delete i[R]}}function w(R){if(i[R.id]===void 0)return;const U=i[R.id];for(const H in U){const P=U[H];for(const V in P){const K=P[V];for(const G in K)u(K[G].object),delete K[G];delete P[V]}}delete i[R.id]}function _(R){for(const U in i){const H=i[U];for(const P in H){const V=H[P];if(V[R.id]===void 0)continue;const K=V[R.id];for(const G in K)u(K[G].object),delete K[G];delete V[R.id]}}}function S(R){for(const U in i){const H=i[U],P=R.isInstancedMesh===!0?R.id:0,V=H[P];if(V!==void 0){for(const K in V){const G=V[K];for(const ie in G)u(G[ie].object),delete G[ie];delete V[K]}delete H[P],Object.keys(H).length===0&&delete i[U]}}}function D(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function i_(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let d=0;for(let f=0;f<u;f++)d+=l[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function s_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Xn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const S=_===Jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==un&&_!==$n&&!S&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Le("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&p===!1;t.reversedDepthBuffer===!0&&p===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&p===!0&&Le("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:b,maxSamples:A,samples:w}}function r_(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new yi,o=new Ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const f=p.length!==0||d||i!==0||s;return s=d,i=p.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){t=u(p,d,0)},this.setState=function(p,d,f){const v=p.clippingPlanes,g=p.clipIntersection,m=p.clipShadows,h=n.get(p);if(!s||v===null||v.length===0||r&&!m)r?u(null):l();else{const x=r?0:i,E=x*4;let b=h.clippingState||null;c.value=b,b=u(v,d,E,f);for(let A=0;A!==E;++A)b[A]=t[A];h.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(p,d,f,v){const g=p!==null?p.length:0;let m=null;if(g!==0){if(m=c.value,v!==!0||m===null){const h=f+g*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<h)&&(m=new Float32Array(h));for(let E=0,b=f;E!==g;++E,b+=4)a.copy(p[E]).applyMatrix4(x,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}class Ac extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new mf(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Jt(5,5,5),r=new as({name:"CubemapFromEquirect",uniforms:Ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Is});r.uniforms.tEquirect.value=t;const a=new Bt(s,r),o=t.minFilter;return t.minFilter===Ci&&(t.minFilter=rn),new Fl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const Ld=256,a_=3,o_=20,Ef=256,wf=16,l_=3,c_=new F,d_=new ze;class Ba{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Fl(1,10,null),this._boxMesh=new Bt(new Jt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=c_}=r,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const p=c.autoClear,d=c.autoClearColor,f=c.autoClearDepth,v=c.autoClearStencil,g=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,g===null&&(e.background=c.getClearColor(d_));const m=new Fl(i,s,u);return m.position.copy(o),m.update(c,e),c.autoClear=p,c.autoClearColor=d,c.autoClearDepth=f,c.autoClearStencil=v,e.background=g,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ld,Ip(e))}_fromTexture(e,t){e.mapping===zs||e.mapping===_r?this._setSize(e.image.length===0?Ld:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=Dd(e,!1,!1),i=Math.log2(e)-a_;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Dd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===zs||e.mapping===_r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Id()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=u_(),this._integrationMaterial=f_());const t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/wf);for(let a=0;a<=i;a++){const o=Ba.lodToRoughness(a,i);if(a>i-l_)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const c=o>0?Math.log2(t)+.5*Math.log2(6/(Ef*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=h_());const i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}}function Dd(n,e,t){return new Ac(n,{minFilter:Ci,generateMipmaps:e,type:Jn,colorSpace:Da,depthBuffer:t})}function Pr(n,e,t){return new as({name:n,uniforms:e,vertexShader:He.cube_vert,fragmentShader:t,side:an,blending:Is,depthTest:!1,depthWrite:!1})}function u_(){return Pr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ef}u

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
	`)}function f_(){return Pr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:wf}},`

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
	`)}function h_(){return Pr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${o_}
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
	`)}function Id(){return Pr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Nd(){return Pr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function p_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===fo||f===ho)if(e.has(d)){const v=e.get(d).texture;return o(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const g=new Ac(v.height);return g.fromEquirectangularTexture(n,d),e.set(d,g),d.addEventListener("dispose",l),o(g.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const f=d.mapping,v=f===fo||f===ho,g=f===zs||f===_r;if(v||g){let m=t.get(d);const h=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==h)return i===null&&(i=new Ba(n)),m=v?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const x=d.image;return v&&x&&x.height>0||g&&x&&c(x)?(i===null&&(i=new Ba(n)),m=v?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,f){return f===fo?d.mapping=zs:f===ho&&(d.mapping=_r),d}function c(d){let f=0;const v=6;for(let g=0;g<v;g++)d[g]!==void 0&&f++;return f===v}function l(d){const f=d.target;f.removeEventListener("dispose",l);const v=e.get(f);v!==void 0&&(e.delete(f),v.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const v=t.get(f);v!==void 0&&(t.delete(f),v.dispose())}function p(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function m_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&xa("WebGLRenderer: "+i+" extension not supported."),s}}}function g_(n,e,t,i){const s={},r=new WeakMap,a=new FinalizationRegistry(v=>delete s[v]);function o(v){c(v.target)}function c(v){v.index!==null&&e.remove(v.index);for(const m in v.attributes)e.remove(v.attributes[m]);v.removeEventListener("dispose",o),delete s[v.id],a.unregister(v);const g=r.get(v);g&&(e.remove(g),r.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function l(v,g){return s[g.id]!==void 0||(g.addEventListener("dispose",o),s[g.id]=new WeakRef(g),a.register(g,g.id,g),t.memory.geometries++),g}function u(v){const g=v.attributes;for(const m in g)e.update(g[m],n.ARRAY_BUFFER)}function p(v){const g=v.index,m=v.attributes.position;let h=0;if(m===void 0)return;const x=g!==null?g.array.length:m.array.length/3-1,E=m.count>=65535?hf:ff,b=new E(Math.ceil(x/3)*6,1),A=b.array;if(g!==null){const _=g.array;h=g.version;for(let S=0,D=0;S<x;S+=3){const C=_[S+0],R=_[S+1],U=_[S+2];A[D++]=C,A[D++]=R,A[D++]=R,A[D++]=U,A[D++]=U,A[D++]=C}}else{h=m.version;for(let _=0,S=0;_<x;_+=3){const D=_+0,C=_+1,R=_+2;A[S++]=D,A[S++]=C,A[S++]=C,A[S++]=R,A[S++]=R,A[S++]=D}}b.version=h;const w=r.get(v);w&&e.remove(w),r.set(v,b)}function d(v){const g=r.get(v);if(g){const m=v.index;m!==null&&g.version<m.version&&p(v)}else p(v);return r.get(v)}function f(){for(const v in s){const g=s[v].deref();g!==void 0&&c(g)}}return{get:l,update:u,getWireframeAttribute:d,dispose:f}}function __(n,e,t){let i;function s(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,d){n.drawElements(i,d,r,p*a),t.update(d,i,1)}function l(p,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,p*a,f),t.update(d,i,f))}function u(p,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,p,0,f);let g=0;for(let m=0;m<f;m++)g+=d[m];t.update(g,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function v_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:it("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function x_(n,e,t){const i=new WeakMap,s=new yt;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==p){let C=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",C)};var f=C;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let b=0;v===!0&&(b=1),g===!0&&(b=2),m===!0&&(b=3);let A=o.attributes.position.count*b,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const _=new Float32Array(A*w*4*p),S=new cf(_,A,w,p);S.type=$n,S.needsUpdate=!0;const D=b*4;for(let R=0;R<p;R++){const U=h[R],H=x[R],P=E[R],V=A*w*4*R;for(let K=0;K<U.count;K++){const G=K*D;v===!0&&(s.fromBufferAttribute(U,K),_[V+G+0]=s.x,_[V+G+1]=s.y,_[V+G+2]=s.z,_[V+G+3]=0),g===!0&&(s.fromBufferAttribute(H,K),_[V+G+4]=s.x,_[V+G+5]=s.y,_[V+G+6]=s.z,_[V+G+7]=0),m===!0&&(s.fromBufferAttribute(P,K),_[V+G+8]=s.x,_[V+G+9]=s.y,_[V+G+10]=s.z,_[V+G+11]=P.itemSize===4?s.w:1)}}d={count:p,texture:S,size:new We(A,w)},i.set(o,d),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let v=0;for(let m=0;m<l.length;m++)v+=l[m];const g=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function S_(n,e,t,i,s){let r=new WeakMap;function a(l){const u=s.render.frame,p=l.geometry,d=e.get(l,p);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const M_={[Vu]:"LINEAR_TONE_MAPPING",[Wu]:"REINHARD_TONE_MAPPING",[$u]:"CINEON_TONE_MAPPING",[Xu]:"ACES_FILMIC_TONE_MAPPING",[Yu]:"AGX_TONE_MAPPING",[Ku]:"NEUTRAL_TONE_MAPPING",[qu]:"CUSTOM_TONE_MAPPING"};function y_(n,e,t,i,s,r){const a=new Yn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const u=new Vt;u.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new st([0,2,0,0,2,0],2));const p=new um({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Bt(u,p),f=new Mf(-1,1,1,-1,0,1);let v=null,g=null,m=!1,h,x=null,E=[],b=!1;this.setSize=function(A,w){a.setSize(A,w),o!==null&&o.setSize(A,w),c!==null&&c.setSize(A,w);for(let _=0;_<E.length;_++){const S=E[_];S.setSize&&S.setSize(A,w)}},this.setEffects=function(A){E=A,b=E.length>0&&E[0].isRenderPass===!0;const w=a.width,_=a.height;E.length>0&&o===null&&(o=new Yn(w,_,{type:Jn,depthBuffer:!1,stencilBuffer:!1}),c=new Yn(w,_,{type:Jn,depthBuffer:!1,stencilBuffer:!1}));const S=s===!0&&E.some(D=>D.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&l===null&&(l=new Hs(w,_),r===!0&&(l.format=Pi,l.type=Gs)),a.dispose(),a.depthTexture=S?l:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let D=0;D<E.length;D++){const C=E[D];C.setSize&&C.setSize(w,_),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(A,w){if(m||A.toneMapping===fi&&E.length===0)return!1;if(x=w,w!==null){const _=w.width,S=w.height;(a.width!==_||a.height!==S)&&this.setSize(_,S)}return b===!1&&A.setRenderTarget(a),h=A.toneMapping,A.toneMapping=fi,!0},this.hasRenderPass=function(){return b},this.end=function(A,w){A.toneMapping=h,m=!0;let _=a,S=o;for(let D=0;D<E.length;D++){const C=E[D];C.enabled!==!1&&(C.render(A,S,_,w),C.needsSwap!==!1&&(_=S,S=S===o?c:o))}if(v!==A.outputColorSpace||g!==A.toneMapping){v=A.outputColorSpace,g=A.toneMapping,p.defines={},Je.getTransfer(v)===lt&&(p.defines.SRGB_TRANSFER="");const D=M_[g];D&&(p.defines[D]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(x),A.render(d,f),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),p.dispose()}}const Tf=new Qt,Af=new Hs(1,1),Rf=new gf(1),Cf=new cf,Pf=new Gp,Lf=new mf,Ud=[],Fd=[],Od=new Float32Array(16),kd=new Float32Array(9),Bd=new Float32Array(4);function Ys(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Ud[s];if(r===void 0&&(r=new Float32Array(s),Ud[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function io(n,e){let t=Fd[e];t===void 0&&(t=new Int32Array(e),Fd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function b_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function E_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function w_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function T_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function A_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;Bd.set(i),n.uniformMatrix2fv(this.addr,!1,Bd),It(t,i)}}function R_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;kd.set(i),n.uniformMatrix3fv(this.addr,!1,kd),It(t,i)}}function C_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;Od.set(i),n.uniformMatrix4fv(this.addr,!1,Od),It(t,i)}}function P_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function L_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function D_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function I_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function N_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function U_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function F_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function O_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function so(n){return n.version===0&&(n.compareFunction=of,n.needsUpdate=!0),n}function k_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=so(Af):r=Tf,t.setTexture2D(e||r,s)}function B_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Pf,s)}function z_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=so(Rf):r=Lf,t.setTextureCube(e||r,s)}function G_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Cf,s)}function H_(n){switch(n){case 5126:return b_;case 35664:return E_;case 35665:return w_;case 35666:return T_;case 35674:return A_;case 35675:return R_;case 35676:return C_;case 5124:case 35670:return P_;case 35667:case 35671:return L_;case 35668:case 35672:return D_;case 35669:case 35673:return I_;case 5125:return N_;case 36294:return U_;case 36295:return F_;case 36296:return O_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return B_;case 35680:case 36300:case 36308:case 36293:return z_;case 36289:case 36303:case 36311:case 36292:return G_}}function V_(n,e){n.uniform1fv(this.addr,e)}function W_(n,e){const t=Ys(e,this.size,2);n.uniform2fv(this.addr,t)}function $_(n,e){const t=Ys(e,this.size,3);n.uniform3fv(this.addr,t)}function X_(n,e){const t=Ys(e,this.size,4);n.uniform4fv(this.addr,t)}function q_(n,e){const t=Ys(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Y_(n,e){const t=Ys(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function K_(n,e){const t=Ys(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Z_(n,e){n.uniform1iv(this.addr,e)}function J_(n,e){n.uniform2iv(this.addr,e)}function Q_(n,e){n.uniform3iv(this.addr,e)}function j_(n,e){n.uniform4iv(this.addr,e)}function ev(n,e){n.uniform1uiv(this.addr,e)}function tv(n,e){n.uniform2uiv(this.addr,e)}function nv(n,e){n.uniform3uiv(this.addr,e)}function iv(n,e){n.uniform4uiv(this.addr,e)}function sv(n,e,t){const i=this.cache,s=e.length,r=io(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=so(Af):a=Tf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function rv(n,e,t){const i=this.cache,s=e.length,r=io(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Pf,r[a])}function av(n,e,t){const i=this.cache,s=e.length,r=io(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=so(Rf):a=Lf;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function ov(n,e,t){const i=this.cache,s=e.length,r=io(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Cf,r[a])}function lv(n){switch(n){case 5126:return V_;case 35664:return W_;case 35665:return $_;case 35666:return X_;case 35674:return q_;case 35675:return Y_;case 35676:return K_;case 5124:case 35670:return Z_;case 35667:case 35671:return J_;case 35668:case 35672:return Q_;case 35669:case 35673:return j_;case 5125:return ev;case 36294:return tv;case 36295:return nv;case 36296:return iv;case 35678:case 36198:case 36298:case 36306:case 35682:return sv;case 35679:case 36299:case 36307:return rv;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return ov}}class cv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=H_(t.type)}}class dv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lv(t.type)}}class uv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const zo=/(\w+)(\])?(\[|\.)?/g;function zd(n,e){n.seq.push(e),n.map[e.id]=e}function fv(n,e,t){const i=n.name,s=i.length;for(zo.lastIndex=0;;){const r=zo.exec(i),a=zo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){zd(t,l===void 0?new cv(o,n,e):new dv(o,n,e));break}else{let p=t.map[o];p===void 0&&(p=new uv(o),zd(t,p)),t=p}}}class Sa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);fv(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Gd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const hv=37297;let pv=0;function mv(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Hd=new Ne;function gv(n){Je._getMatrix(Hd,Je.workingColorSpace,n);const e=`mat3( ${Hd.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case Ia:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Vd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+mv(n.getShaderSource(e),o)}else return r}function _v(n,e){const t=gv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const vv={[Vu]:"Linear",[Wu]:"Reinhard",[$u]:"Cineon",[Xu]:"ACESFilmic",[Yu]:"AgX",[Ku]:"Neutral",[qu]:"Custom"};function xv(n,e){const t=vv[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const aa=new F;function Sv(){Je.getLuminanceCoefficients(aa);const n=aa.x.toFixed(4),e=aa.y.toFixed(4),t=aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function yv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function bv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function sr(n){return n!==""}function Wd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function $d(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ev=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(n){return n.replace(Ev,wv)}function wv(n,e){const t=He[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ol(t)}const Tv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xd(n){return n.replace(Tv,Av)}function Av(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const Rv={[pa]:"SHADOWMAP_TYPE_PCF",[ir]:"SHADOWMAP_TYPE_VSM"};function Cv(n){return Rv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Pv={[_r]:"ENVMAP_MODE_REFRACTION"};function Lv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Pv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Dv={[pc]:"ENVMAP_BLENDING_MULTIPLY",[gp]:"ENVMAP_BLENDING_MIX",[_p]:"ENVMAP_BLENDING_ADD"};function Iv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Dv[n.combine]||"ENVMAP_BLENDING_NONE"}function Nv(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Cv(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Lv(t),p=Iv(t),d=Mv(t),f=yv(r),v=s.createProgram();let g,m,h=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(sr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(sr).join(`
`),m.length>0&&(m+=`
`)):(g=[qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),m=[qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?He.tonemapping_pars_fragment:"",t.toneMapping!==fi?xv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,_v("linearToOutputTexel",t.outputColorSpace),Sv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sr).join(`
`)),a=Ol(a),a=Wd(a,t),a=$d(a,t),o=Ol(o),o=Wd(o,t),o=$d(o,t),a=Xd(a),o=Xd(o),t.isRawShaderMaterial!==!0&&(h=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===td?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===td?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=h+g+a,E=h+m+o,b=Gd(s,s.VERTEX_SHADER,x),A=Gd(s,s.FRAGMENT_SHADER,E);s.attachShader(v,b),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(C){if(n.debug.checkShaderErrors){const R=s.getProgramInfoLog(v)||"",U=s.getShaderInfoLog(b)||"",H=s.getShaderInfoLog(A)||"",P=R.trim(),V=U.trim(),K=H.trim();let G=!0,ie=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,b,A);else{const X=Vd(s,b,"vertex"),ee=Vd(s,A,"fragment");it("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+X+`
`+ee)}else P!==""?Le("WebGLProgram: Program Info Log:",P):(V===""||K==="")&&(ie=!1);ie&&(C.diagnostics={runnable:G,programLog:P,vertexShader:{log:V,prefix:g},fragmentShader:{log:K,prefix:m}})}s.deleteShader(b),s.deleteShader(A),_=new Sa(s,v),S=bv(s,v)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(v,hv)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=A,this}let Uv=0;class Fv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Ov(e),t.set(e,i)),i}}class Ov{constructor(e){this.id=Uv++,this.code=e,this.usedTimes=0}}function kv(n){return n===rs||n===Pa||n===La}function Bv(n,e,t,i,s,r){const a=new df,o=new Fv,c=new Set,l=[],u=new Map,p=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,S,D,C,R,U){const H=C.fog,P=R.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=e.get(_.envMap||V,K),ie=d[_.type];let X=i.precision;_.precision!==null&&(X=i.getMaxPrecision(_.precision),X!==_.precision&&Le("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));const ee=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ne=ee!==void 0?ee.length:0;let Ee=0;P.morphAttributes.position!==void 0&&(Ee=1),P.morphAttributes.normal!==void 0&&(Ee=2),P.morphAttributes.color!==void 0&&(Ee=3);let Ue,J,_e,Me;if(ie){const me=Gn[ie];Ue=me.vertexShader,J=me.fragmentShader}else{Ue=_.vertexShader,J=_.fragmentShader;const me=o.getVertexShaderStage(_),ot=o.getFragmentShaderStage(_);o.update(_,me,ot),_e=me.id,Me=ot.id}const Re=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),Oe=R.isInstancedMesh===!0,Et=R.isBatchedMesh===!0,Pe=!!_.map,at=!!_.matcap,dt=!!G,Ye=dt&&G.isPMREMTexture===!0,zt=!!_.aoMap,Rt=!!_.lightMap,nn=!!_.bumpMap&&_.wireframe===!1,xt=!!_.normalMap,Fn=!!_.displacementMap,Nt=!!_.emissiveMap,gn=!!_.metalnessMap,_n=!!_.roughnessMap,vn=_.anisotropy>0,N=_.clearcoat>0,xn=_.diffuseRoughness>0,gt=_.dispersion>0,_t=_.retroreflectivity>0,pe=_.iridescence>0,Ct=_.sheen>0,Ce=_.transmission>0,Ie=vn&&!!_.anisotropyMap,T=N&&!!_.clearcoatMap,M=N&&!!_.clearcoatNormalMap,k=N&&!!_.clearcoatRoughnessMap,se=xn&&!!_.diffuseRoughnessMap,j=pe&&!!_.iridescenceMap,oe=pe&&!!_.iridescenceThicknessMap,fe=Ct&&!!_.sheenColorMap,Y=Ct&&!!_.sheenRoughnessMap,Z=!!_.specularMap,ce=!!_.specularColorMap,L=!!_.specularIntensityMap,Q=Ce&&!!_.transmissionMap,q=Ce&&!!_.thicknessMap,de=!!_.gradientMap,ae=!!_.alphaMap,le=_.alphaTest>0,Te=!!_.alphaHash,Ge=!!_.extensions;let re=fi;_.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(re=n.toneMapping);const Ae=Ye?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,ke={shaderID:ie,shaderType:_.type,shaderName:_.name,vertexShader:Ue,fragmentShader:J,defines:_.defines,customVertexShaderID:_e,customFragmentShaderID:Me,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:Et,batchingColor:Et&&R._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&R.instanceColor!==null,instancingMorph:Oe&&R.morphTexture!==null,outputColorSpace:Re===null?n.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Pe,matcap:at,envMap:dt,envMapMode:dt&&G.mapping,envMapPMREM:Ye,envMapMaxLod:Ye?Ae.length-1:null,envMapSize:Ye?Ae[0].width:null,aoMap:zt,lightMap:Rt,bumpMap:nn,normalMap:xt,displacementMap:Fn,emissiveMap:Nt,normalMapObjectSpace:xt&&_.normalMapType===Sp,normalMapTangentSpace:xt&&_.normalMapType===Dl,packedNormalMap:xt&&_.normalMapType===Dl&&kv(_.normalMap.format),metalnessMap:gn,roughnessMap:_n,anisotropy:vn,anisotropyMap:Ie,clearcoat:N,clearcoatMap:T,clearcoatNormalMap:M,clearcoatRoughnessMap:k,diffuseRoughness:xn,diffuseRoughnessMap:se,dispersion:gt,retroreflection:_t,iridescence:pe,iridescenceMap:j,iridescenceThicknessMap:oe,sheen:Ct,sheenColorMap:fe,sheenRoughnessMap:Y,specularMap:Z,specularColorMap:ce,specularIntensityMap:L,transmission:Ce,transmissionMap:Q,thicknessMap:q,gradientMap:de,opaque:_.transparent===!1&&_.blending===cr&&_.alphaToCoverage===!1,alphaMap:ae,alphaTest:le,alphaHash:Te,combine:_.combine,mapUv:Pe&&f(_.map.channel),aoMapUv:zt&&f(_.aoMap.channel),lightMapUv:Rt&&f(_.lightMap.channel),bumpMapUv:nn&&f(_.bumpMap.channel),normalMapUv:xt&&f(_.normalMap.channel),displacementMapUv:Fn&&f(_.displacementMap.channel),emissiveMapUv:Nt&&f(_.emissiveMap.channel),metalnessMapUv:gn&&f(_.metalnessMap.channel),roughnessMapUv:_n&&f(_.roughnessMap.channel),anisotropyMapUv:Ie&&f(_.anisotropyMap.channel),clearcoatMapUv:T&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:j&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Y&&f(_.sheenRoughnessMap.channel),specularMapUv:Z&&f(_.specularMap.channel),specularColorMapUv:ce&&f(_.specularColorMap.channel),specularIntensityMapUv:L&&f(_.specularIntensityMap.channel),transmissionMapUv:Q&&f(_.transmissionMap.channel),thicknessMapUv:q&&f(_.thicknessMap.channel),alphaMapUv:ae&&f(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(xt||vn),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!P.attributes.uv&&(Pe||ae),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&xt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ve,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Ee,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:U.filter(me=>me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:re,decodeVideoTexture:Pe&&_.map.isVideoTexture===!0&&Je.getTransfer(_.map.colorSpace)===lt,decodeVideoTextureEmissive:Nt&&_.emissiveMap.isVideoTexture===!0&&Je.getTransfer(_.emissiveMap.colorSpace)===lt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Vn,flipSided:_.side===an,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ge&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&_.extensions.multiDraw===!0||Et)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function g(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)S.push(D),S.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(m(S,_),h(S,_),S.push(n.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function m(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function h(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){const S=d[_.type];let D;if(S){const C=Gn[S];D=lm.clone(C.uniforms)}else D=_.uniforms;return D}function E(_,S){let D=u.get(S);return D!==void 0?++D.usedTimes:(D=new Nv(n,S,_,s),l.push(D),u.set(S,D)),D}function b(_){if(--_.usedTimes===0){const S=l.indexOf(_);l[S]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function w(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:x,acquireProgram:E,releaseProgram:b,releaseShaderCache:A,programs:l,dispose:w}}function zv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Gv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Yd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Kd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,v,g,m,h){let x=n[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:v,materialVariant:a(d),groupOrder:g,renderOrder:d.renderOrder,z:m,group:h},n[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=v,x.materialVariant=a(d),x.groupOrder=g,x.renderOrder=d.renderOrder,x.z=m,x.group=h),e++,x}function c(d,f,v,g,m,h,x){x.reversedDepth===!0&&(m=-m);const E=o(d,f,v,g,m,h);v.transmission>0?i.push(E):v.transparent===!0?s.push(E):t.push(E)}function l(d,f,v,g,m,h){const x=o(d,f,v,g,m,h);v.transmission>0?i.unshift(x):v.transparent===!0?s.unshift(x):t.unshift(x)}function u(d,f){t.length>1&&t.sort(d||Gv),i.length>1&&i.sort(f||Yd),s.length>1&&s.sort(f||Yd)}function p(){for(let d=e,f=n.length;d<f;d++){const v=n[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:p,sort:u}}function Hv(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Kd,n.set(i,[a])):s>=r.length?(a=new Kd,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Vv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new ze};break;case"SpotLight":t={position:new F,direction:new F,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function Wv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let $v=0;function Xv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function qv(n){const e=new Vv,t=Wv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new F);const s=new F,r=new pt,a=new pt;function o(l){let u=0,p=0,d=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let f=0,v=0,g=0,m=0,h=0,x=0,E=0,b=0,A=0,w=0,_=0,S=0,D=0,C=0;l.sort(Xv);for(let U=0,H=l.length;U<H;U++){const P=l[U],V=P.color,K=P.intensity,G=P.distance;let ie=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===rs?ie=P.shadow.map.texture:ie=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=V.r*K,p+=V.g*K,d+=V.b*K;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],K);C++}else if(P.isSunLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ee=P.shadow,ne=t.get(P);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),i.sunShadow[v]=ne,i.sunShadowMap[v]=ie;const Ee=ee.getViewportCount();for(let Ue=0;Ue<Ee;Ue++)i.sunShadowMatrix[g+Ue]=ee.getMatrix(Ue),i.sunShadowCascade[g+Ue]=ee._cascadeData[Ue];g+=Ee,v++}i.sun[f]=X,f++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ee=P.shadow,ne=t.get(P);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,i.directionalShadow[m]=ne,i.directionalShadowMap[m]=ie,i.directionalShadowMatrix[m]=P.shadow.matrix,A++}i.directional[m]=X,m++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(V).multiplyScalar(K),X.distance=G,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[x]=X;const ee=P.shadow;if(P.map&&(i.spotLightMap[S]=P.map,S++,ee.updateMatrices(P),P.castShadow&&D++),i.spotLightMatrix[x]=ee.matrix,P.castShadow){const ne=t.get(P);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,i.spotShadow[x]=ne,i.spotShadowMap[x]=ie,_++}x++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(V).multiplyScalar(K),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[E]=X,E++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const ee=P.shadow,ne=t.get(P);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,ne.shadowCameraNear=ee.camera.near,ne.shadowCameraFar=ee.camera.far,i.pointShadow[h]=ne,i.pointShadowMap[h]=ie,i.pointShadowMatrix[h]=P.shadow.matrix,w++}i.point[h]=X,h++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(K),X.groundColor.copy(P.groundColor).multiplyScalar(K),i.hemi[b]=X,b++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=d;const R=i.hash;(R.sunLength!==f||R.directionalLength!==m||R.pointLength!==h||R.spotLength!==x||R.rectAreaLength!==E||R.hemiLength!==b||R.numSunShadows!==v||R.numDirectionalShadows!==A||R.numPointShadows!==w||R.numSpotShadows!==_||R.numSpotMaps!==S||R.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=m,i.spot.length=x,i.rectArea.length=E,i.point.length=h,i.hemi.length=b,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=g,i.sunShadowCascade.length=g,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+S-D,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=C,R.sunLength=f,R.directionalLength=m,R.pointLength=h,R.spotLength=x,R.rectAreaLength=E,R.hemiLength=b,R.numSunShadows=v,R.numDirectionalShadows=A,R.numPointShadows=w,R.numSpotShadows=_,R.numSpotMaps=S,R.numLightProbes=C,i.version=$v++)}function c(l,u){let p=0,d=0,f=0,v=0,g=0,m=0;const h=u.matrixWorldInverse;for(let x=0,E=l.length;x<E;x++){const b=l[x];if(b.isSunLight){const A=i.sun[p];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(h),p++}else if(b.isDirectionalLight){const A=i.directional[d];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(h),d++}else if(b.isSpotLight){const A=i.spot[v];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(h),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(h),v++}else if(b.isRectAreaLight){const A=i.rectArea[g];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(h),a.identity(),r.copy(b.matrixWorld),r.premultiply(h),a.extractRotation(r),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const A=i.point[f];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(h),f++}else if(b.isHemisphereLight){const A=i.hemi[m];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(h),m++}}}return{setup:o,setupView:c,state:i}}function Zd(n){const e=new qv(n),t=[],i=[],s=[];function r(p){u.camera=p,t.length=0,i.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):t.push(p)}function o(p){i.push(p)}function c(){e.setup(t),s.sort((p,d)=>p.priority-d.priority||p.id-d.id)}function l(p){e.setupView(t,p)}const u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Yv(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Zd(n),e.set(s,[o])):r>=a.length?(o=new Zd(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Kv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zv=`uniform sampler2D shadow_pass;
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
}`,Jv=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Qv=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Jd=new pt,tr=new F,Go=new F;function jv(n,e,t){let i=new Sr;const s=new We,r=new We,a=new yt,o=new fm,c=new hm,l={},u=t.maxTextureSize,p={[ss]:an,[an]:ss,[Vn]:Vn},d=new as({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Kv,fragmentShader:Zv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const v=new Vt;v.setAttribute("position",new ts(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Bt(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pa;let h=this.type;this.render=function(w,_,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Jh&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=pa);const D=n.getRenderTarget(),C=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Is),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const H=h!==this.type;H&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(V=>V.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,V=w.length;P<V;P++){const K=w[P],G=K.shadow;if(G===void 0){Le("WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ie=G.getFrameExtents();s.multiply(ie),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,G.mapSize.y=r.y));const X=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=X,G.map===null||H===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ir){if(K.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Yn(s.x,s.y,{format:rs,type:Jn,minFilter:rn,magFilter:rn,generateMipmaps:!1}),G.map.texture.name=K.name+".shadowMap",G.map.depthTexture=new Hs(s.x,s.y,$n),G.map.depthTexture.name=K.name+".shadowMapDepth",G.map.depthTexture.format=zi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ht,G.map.depthTexture.magFilter=Ht}else K.isPointLight?(G.map=new Ac(s.x),G.map.depthTexture=new gf(s.x,Zn)):(G.map=new Yn(s.x,s.y),G.map.depthTexture=new Hs(s.x,s.y,Zn)),G.map.depthTexture.name=K.name+".shadowMap",G.map.depthTexture.format=zi,this.type===pa?(G.map.depthTexture.compareFunction=X?af:rf,G.map.depthTexture.minFilter=rn,G.map.depthTexture.magFilter=rn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ht,G.map.depthTexture.magFilter=Ht);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);const ee=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();K.isPointLight!==!0&&G.updateMatrices(K,S);const ne=G.camera.layers.mask&4294967294?G.camera.layers:S.layers;for(let Ee=0;Ee<ee;Ee++){const Ue=G.getCamera(Ee);if(K.isPointLight){const J=G.camera,_e=G.matrix,Me=K.distance||J.far;Me!==J.far&&(J.far=Me,J.updateProjectionMatrix()),tr.setFromMatrixPosition(K.matrixWorld),J.position.copy(tr),Go.copy(J.position),Go.add(Jv[Ee]),J.up.copy(Qv[Ee]),J.lookAt(Go),J.updateMatrixWorld(),_e.makeTranslation(-tr.x,-tr.y,-tr.z),Jd.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Jd,J.coordinateSystem,J.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,Ee),n.clear();else{Ee===0&&(n.setRenderTarget(G.map),n.clear());const J=G.getViewport(Ee);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),U.viewport(a)}i=G.getFrustum(Ee),b(_,S,Ue,K,ne,this.type)}G.isPointLightShadow!==!0&&this.type===ir&&x(G,S),G.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(D,C,R)};function x(w,_){const S=e.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Yn(s.x,s.y,{format:rs,type:Jn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(_,null,S,d,g,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(_,null,S,f,g,null)}function E(w,_,S,D){let C=null;const R=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)C=R;else if(C=S.isPointLight===!0?c:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const U=C.uuid,H=_.uuid;let P=l[U];P===void 0&&(P={},l[U]=P);let V=P[H];V===void 0&&(V=C.clone(),P[H]=V,_.addEventListener("dispose",A)),C=V}if(C.visible=_.visible,C.wireframe=_.wireframe,D===ir?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:p[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const U=n.properties.get(C);U.light=S}return C}function b(w,_,S,D,C,R){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===ir)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);const P=e.update(w),V=w.material;if(Array.isArray(V)){const K=P.groups;for(let G=0,ie=K.length;G<ie;G++){const X=K[G],ee=V[X.materialIndex];if(ee&&ee.visible){const ne=E(w,ee,D,R);w.onBeforeShadow(n,w,_,S,P,ne,X),n.renderBufferDirect(S,null,P,ne,w,X),w.onAfterShadow(n,w,_,S,P,ne,X)}}}else if(V.visible){const K=E(w,V,D,R);w.onBeforeShadow(n,w,_,S,P,K,null),n.renderBufferDirect(S,null,P,K,w,null),w.onAfterShadow(n,w,_,S,P,K,null)}}const H=w.children;for(let P=0,V=H.length;P<V;P++)b(H[P],_,S,D,C,R)}function A(w){w.target.removeEventListener("dispose",A);for(const S in l){const D=l[S],C=w.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}function ex(n,e){function t(){let L=!1;const Q=new yt;let q=null;const de=new yt(0,0,0,0);return{setMask:function(ae){q!==ae&&!L&&(n.colorMask(ae,ae,ae,ae),q=ae)},setLocked:function(ae){L=ae},setClear:function(ae,le,Te,Ge,re){re===!0&&(ae*=Ge,le*=Ge,Te*=Ge),Q.set(ae,le,Te,Ge),de.equals(Q)===!1&&(n.clearColor(ae,le,Te,Ge),de.copy(Q))},reset:function(){L=!1,q=null,de.set(-1,0,0,0)}}}function i(){let L=!1,Q=!1,q=null,de=null,ae=null;return{setReversed:function(le){if(Q!==le){const Te=e.get("EXT_clip_control");le?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),Q=le;const Ge=ae;ae=null,this.setClear(Ge)}},getReversed:function(){return Q},setTest:function(le){le?ve(n.DEPTH_TEST):Oe(n.DEPTH_TEST)},setMask:function(le){q!==le&&!L&&(n.depthMask(le),q=le)},setFunc:function(le){if(Q&&(le=Lp[le]),de!==le){switch(le){case qo:n.depthFunc(n.NEVER);break;case Yo:n.depthFunc(n.ALWAYS);break;case Ko:n.depthFunc(n.LESS);break;case gr:n.depthFunc(n.LEQUAL);break;case Zo:n.depthFunc(n.EQUAL);break;case Jo:n.depthFunc(n.GEQUAL);break;case Qo:n.depthFunc(n.GREATER);break;case jo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=le}},setLocked:function(le){L=le},setClear:function(le){ae!==le&&(ae=le,Q&&(le=1-le),n.clearDepth(le))},reset:function(){L=!1,q=null,de=null,ae=null,Q=!1}}}function s(){let L=!1,Q=null,q=null,de=null,ae=null,le=null,Te=null,Ge=null,re=null;return{setTest:function(Ae){L||(Ae?ve(n.STENCIL_TEST):Oe(n.STENCIL_TEST))},setMask:function(Ae){Q!==Ae&&!L&&(n.stencilMask(Ae),Q=Ae)},setFunc:function(Ae,ke,me){(q!==Ae||de!==ke||ae!==me)&&(n.stencilFunc(Ae,ke,me),q=Ae,de=ke,ae=me)},setOp:function(Ae,ke,me){(le!==Ae||Te!==ke||Ge!==me)&&(n.stencilOp(Ae,ke,me),le=Ae,Te=ke,Ge=me)},setLocked:function(Ae){L=Ae},setClear:function(Ae){re!==Ae&&(n.clearStencil(Ae),re=Ae)},reset:function(){L=!1,Q=null,q=null,de=null,ae=null,le=null,Te=null,Ge=null,re=null}}}const r=new t,a=new i,o=new s;let c={};const l=new WeakMap;let u={},p={},d={},f=new WeakMap,v=[],g=null,m=!1,h=null,x=null,E=null,b=null,A=null,w=null,_=null,S=new ze(0,0,0),D=0,C=!1,R=null,U=null,H=null,P=null,V=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ie=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=ie>=1):X.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=ie>=2);let ee=null,ne={};const Ee=n.getParameter(n.SCISSOR_BOX),Ue=n.getParameter(n.VIEWPORT),J=new yt().fromArray(Ee),_e=new yt().fromArray(Ue);function Me(L,Q,q,de){const ae=new Uint8Array(4),le=n.createTexture();n.bindTexture(L,le),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Te=0;Te<q;Te++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(Q+Te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return le}const Re={};Re[n.TEXTURE_2D]=Me(n.TEXTURE_2D,n.TEXTURE_2D,1),Re[n.TEXTURE_CUBE_MAP]=Me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[n.TEXTURE_2D_ARRAY]=Me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Re[n.TEXTURE_3D]=Me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ve(n.DEPTH_TEST),a.setFunc(gr),nn(!1),xt(Jc),ve(n.CULL_FACE),zt(Is);function ve(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function Oe(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Et(L,Q){return d[L]!==Q?(n.bindFramebuffer(L,Q),d[L]=Q,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Q),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function Pe(L,Q){let q=v,de=!1;if(L){q=f.get(Q),q===void 0&&(q=[],f.set(Q,q));const ae=L.textures;if(q.length!==ae.length||q[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Te=ae.length;le<Te;le++)q[le]=n.COLOR_ATTACHMENT0+le;q.length=ae.length,de=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,de=!0);de&&n.drawBuffers(q)}function at(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const dt={[Ts]:n.FUNC_ADD,[jh]:n.FUNC_SUBTRACT,[ep]:n.FUNC_REVERSE_SUBTRACT};dt[tp]=n.MIN,dt[np]=n.MAX;const Ye={[ip]:n.ZERO,[sp]:n.ONE,[rp]:n.SRC_COLOR,[Gu]:n.SRC_ALPHA,[up]:n.SRC_ALPHA_SATURATE,[cp]:n.DST_COLOR,[op]:n.DST_ALPHA,[ap]:n.ONE_MINUS_SRC_COLOR,[Hu]:n.ONE_MINUS_SRC_ALPHA,[dp]:n.ONE_MINUS_DST_COLOR,[lp]:n.ONE_MINUS_DST_ALPHA,[fp]:n.CONSTANT_COLOR,[hp]:n.ONE_MINUS_CONSTANT_COLOR,[pp]:n.CONSTANT_ALPHA,[mp]:n.ONE_MINUS_CONSTANT_ALPHA};function zt(L,Q,q,de,ae,le,Te,Ge,re,Ae){if(L===Is){m===!0&&(Oe(n.BLEND),m=!1);return}if(m===!1&&(ve(n.BLEND),m=!0),L!==Qh){if(L!==h||Ae!==C){if((x!==Ts||A!==Ts)&&(n.blendEquation(n.FUNC_ADD),x=Ts,A=Ts),Ae)switch(L){case cr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qc:n.blendFunc(n.ONE,n.ONE);break;case jc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ed:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:it("WebGLState: Invalid blending: ",L);break}else switch(L){case cr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case jc:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ed:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",L);break}E=null,b=null,w=null,_=null,S.set(0,0,0),D=0,h=L,C=Ae}return}ae=ae||Q,le=le||q,Te=Te||de,(Q!==x||ae!==A)&&(n.blendEquationSeparate(dt[Q],dt[ae]),x=Q,A=ae),(q!==E||de!==b||le!==w||Te!==_)&&(n.blendFuncSeparate(Ye[q],Ye[de],Ye[le],Ye[Te]),E=q,b=de,w=le,_=Te),(Ge.equals(S)===!1||re!==D)&&(n.blendColor(Ge.r,Ge.g,Ge.b,re),S.copy(Ge),D=re),h=L,C=!1}function Rt(L,Q){L.side===Vn?Oe(n.CULL_FACE):ve(n.CULL_FACE);let q=L.side===an;Q&&(q=!q),nn(q),L.blending===cr&&L.transparent===!1?zt(Is):zt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const de=L.stencilWrite;o.setTest(de),de&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Nt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function nn(L){R!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),R=L)}function xt(L){L!==Kh?(ve(n.CULL_FACE),L!==U&&(L===Jc?n.cullFace(n.BACK):L===Zh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Oe(n.CULL_FACE),U=L}function Fn(L){L!==H&&(G&&n.lineWidth(L),H=L)}function Nt(L,Q,q){L?(ve(n.POLYGON_OFFSET_FILL),(P!==Q||V!==q)&&(P=Q,V=q,a.getReversed()&&(Q=-Q,q=-q),n.polygonOffset(Q,q))):Oe(n.POLYGON_OFFSET_FILL)}function gn(L){L?ve(n.SCISSOR_TEST):Oe(n.SCISSOR_TEST)}function _n(L){L===void 0&&(L=n.TEXTURE0+K-1),ee!==L&&(n.activeTexture(L),ee=L)}function vn(L,Q,q){q===void 0&&(ee===null?q=n.TEXTURE0+K-1:q=ee);let de=ne[q];de===void 0&&(de={type:void 0,texture:void 0},ne[q]=de),(de.type!==L||de.texture!==Q)&&(ee!==q&&(n.activeTexture(q),ee=q),n.bindTexture(L,Q||Re[L]),de.type=L,de.texture=Q)}function N(){const L=ne[ee];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function xn(){try{n.compressedTexImage2D(...arguments)}catch(L){it("WebGLState:",L)}}function gt(){try{n.compressedTexImage3D(...arguments)}catch(L){it("WebGLState:",L)}}function _t(){try{n.texSubImage2D(...arguments)}catch(L){it("WebGLState:",L)}}function pe(){try{n.texSubImage3D(...arguments)}catch(L){it("WebGLState:",L)}}function Ct(){try{n.compressedTexSubImage2D(...arguments)}catch(L){it("WebGLState:",L)}}function Ce(){try{n.compressedTexSubImage3D(...arguments)}catch(L){it("WebGLState:",L)}}function Ie(){try{n.texStorage2D(...arguments)}catch(L){it("WebGLState:",L)}}function T(){try{n.texStorage3D(...arguments)}catch(L){it("WebGLState:",L)}}function M(){try{n.texImage2D(...arguments)}catch(L){it("WebGLState:",L)}}function k(){try{n.texImage3D(...arguments)}catch(L){it("WebGLState:",L)}}function se(L){return p[L]!==void 0?p[L]:n.getParameter(L)}function j(L,Q){p[L]!==Q&&(n.pixelStorei(L,Q),p[L]=Q)}function oe(L){J.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),J.copy(L))}function fe(L){_e.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),_e.copy(L))}function Y(L,Q){let q=l.get(Q);q===void 0&&(q=new WeakMap,l.set(Q,q));let de=q.get(L);de===void 0&&(de=n.getUniformBlockIndex(Q,L.name),n.uniformBlockBinding(Q,de,de),q.set(L,de))}function Z(L,Q,q){const ae=l.get(Q).get(L);c[ae]!==q&&(n.bindBufferBase(n.UNIFORM_BUFFER,ae,q),c[ae]=q)}function ce(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},p={},ee=null,ne={},d={},c={},f=new WeakMap,v=[],g=null,m=!1,h=null,x=null,E=null,b=null,A=null,w=null,_=null,S=new ze(0,0,0),D=0,C=!1,R=null,U=null,H=null,P=null,V=null,J.set(0,0,n.canvas.width,n.canvas.height),_e.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ve,disable:Oe,bindFramebuffer:Et,drawBuffers:Pe,useProgram:at,setBlending:zt,setMaterial:Rt,setFlipSided:nn,setCullFace:xt,setLineWidth:Fn,setPolygonOffset:Nt,setScissorTest:gn,activeTexture:_n,bindTexture:vn,unbindTexture:N,compressedTexImage2D:xn,compressedTexImage3D:gt,texImage2D:M,texImage3D:k,pixelStorei:j,getParameter:se,updateUBOMapping:Y,uniformBlockBinding:Z,texStorage2D:Ie,texStorage3D:T,texSubImage2D:_t,texSubImage3D:pe,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Ce,scissor:oe,viewport:fe,reset:ce}}function tx(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new We,u=new WeakMap,p=new Set;let d;const f=new WeakMap,v=new Set,g=new FinalizationRegistry(T=>v.delete(T));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(T,M){return m?new OffscreenCanvas(T,M):Na("canvas")}function x(T,M,k){let se=1;const j=Ie(T);if((j.width>k||j.height>k)&&(se=k/Math.max(j.width,j.height)),se<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const oe=Math.floor(se*j.width),fe=Math.floor(se*j.height);d===void 0&&(d=h(oe,fe));const Y=M?h(oe,fe):d;return Y.width=oe,Y.height=fe,Y.getContext("2d").drawImage(T,0,0,oe,fe),Le("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+oe+"x"+fe+")."),Y}else return"data"in T&&Le("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function E(T){return T.generateMipmaps}function b(T){n.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(T,M,k,se,j,oe=!1){if(T!==null){if(n[T]!==void 0)return n[T];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let fe;se&&(fe=e.get("EXT_texture_norm16"),fe||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=M;if(M===n.RED&&(k===n.FLOAT&&(Y=n.R32F),k===n.HALF_FLOAT&&(Y=n.R16F),k===n.UNSIGNED_BYTE&&(Y=n.R8),k===n.UNSIGNED_SHORT&&fe&&(Y=fe.R16_EXT),k===n.SHORT&&fe&&(Y=fe.R16_SNORM_EXT)),M===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.R8UI),k===n.UNSIGNED_SHORT&&(Y=n.R16UI),k===n.UNSIGNED_INT&&(Y=n.R32UI),k===n.BYTE&&(Y=n.R8I),k===n.SHORT&&(Y=n.R16I),k===n.INT&&(Y=n.R32I)),M===n.RG&&(k===n.FLOAT&&(Y=n.RG32F),k===n.HALF_FLOAT&&(Y=n.RG16F),k===n.UNSIGNED_BYTE&&(Y=n.RG8),k===n.UNSIGNED_SHORT&&fe&&(Y=fe.RG16_EXT),k===n.SHORT&&fe&&(Y=fe.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.RG8UI),k===n.UNSIGNED_SHORT&&(Y=n.RG16UI),k===n.UNSIGNED_INT&&(Y=n.RG32UI),k===n.BYTE&&(Y=n.RG8I),k===n.SHORT&&(Y=n.RG16I),k===n.INT&&(Y=n.RG32I)),M===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),k===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),k===n.UNSIGNED_INT&&(Y=n.RGB32UI),k===n.BYTE&&(Y=n.RGB8I),k===n.SHORT&&(Y=n.RGB16I),k===n.INT&&(Y=n.RGB32I)),M===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),k===n.UNSIGNED_INT&&(Y=n.RGBA32UI),k===n.BYTE&&(Y=n.RGBA8I),k===n.SHORT&&(Y=n.RGBA16I),k===n.INT&&(Y=n.RGBA32I)),M===n.RGB&&(k===n.UNSIGNED_SHORT&&fe&&(Y=fe.RGB16_EXT),k===n.SHORT&&fe&&(Y=fe.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),M===n.RGBA){const Z=oe?Ia:Je.getTransfer(j);k===n.FLOAT&&(Y=n.RGBA32F),k===n.HALF_FLOAT&&(Y=n.RGBA16F),k===n.UNSIGNED_BYTE&&(Y=Z===lt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&fe&&(Y=fe.RGBA16_EXT),k===n.SHORT&&fe&&(Y=fe.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(T,M){let k;return T?M===null||M===Zn||M===Gs?k=n.DEPTH24_STENCIL8:M===$n?k=n.DEPTH32F_STENCIL8:M===vr&&(k=n.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Zn||M===Gs?k=n.DEPTH_COMPONENT24:M===$n?k=n.DEPTH_COMPONENT32F:M===vr&&(k=n.DEPTH_COMPONENT16),k}function S(T,M){return E(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ht&&T.minFilter!==rn?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function D(T){const M=new WeakRef(T);i.get(T).__ref=M,v.add(M),g.register(T,M,M)}function C(T){const M=i.get(T).__ref;M!==void 0&&(v.delete(M),g.unregister(M))}function R(T){H(T.target)}function U(T){P(T.target)}function H(T){T.removeEventListener("dispose",R),C(T),K(T),T.isVideoTexture&&u.delete(T),T.isHTMLTexture&&p.delete(T)}function P(T){T.removeEventListener("dispose",U),C(T),ie(T)}function V(){for(const T of v){const M=T.deref();M!==void 0&&(M.isRenderTarget===!0?P(M):H(M))}v.clear(),p.clear()}function K(T){const M=i.get(T);if(M.__webglInit===void 0)return;const k=T.source,se=f.get(k);if(se){const j=se[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&G(T),Object.keys(se).length===0&&f.delete(k)}i.remove(T)}function G(T){const M=i.get(T);n.deleteTexture(M.__webglTexture);const k=T.source,se=f.get(k);delete se[M.__cacheKey],a.memory.textures--}function ie(T){const M=i.get(T);M.__depthDisposeCallback&&M.__depthDisposeCallback();const k=T.depthTexture;if(k&&k.renderTarget===T&&H(k),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let oe=0;oe<M.__webglFramebuffer[j].length;oe++)n.deleteFramebuffer(M.__webglFramebuffer[j][oe]);else n.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)n.deleteFramebuffer(M.__webglFramebuffer[j]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const se=T.textures;for(let j=0,oe=se.length;j<oe;j++){const fe=i.get(se[j]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),a.memory.textures--),i.remove(se[j])}i.remove(T)}let X=0;function ee(){X=0}function ne(){return X}function Ee(T){X=T}function Ue(){const T=X;return T>=s.maxTextures&&Le("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,T}function J(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.mipmapsAutoUpdate),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function _e(T,M){const k=i.get(T);if(T.isVideoTexture&&Ct(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&k.__version!==T.version){const se=T.image;if(se===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(k,T,M);return}}else T.isExternalTexture&&(k.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+M)}function Me(T,M){const k=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){Rt(k,T,M);return}else T.isExternalTexture&&(k.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+M)}function Re(T,M){const k=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){Rt(k,T,M);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+M)}function ve(T,M){const k=i.get(T);if(T.version>0&&k.__version!==T.version){nn(k,T,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+M)}const Oe={[el]:n.REPEAT,[li]:n.CLAMP_TO_EDGE,[tl]:n.MIRRORED_REPEAT},Et={[Ht]:n.NEAREST,[vp]:n.NEAREST_MIPMAP_NEAREST,[Ur]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[po]:n.LINEAR_MIPMAP_NEAREST,[Ci]:n.LINEAR_MIPMAP_LINEAR},Pe={[yp]:n.NEVER,[of]:n.ALWAYS,[bp]:n.LESS,[rf]:n.LEQUAL,[Ep]:n.EQUAL,[af]:n.GEQUAL,[wp]:n.GREATER,[Tp]:n.NOTEQUAL};function at(T,M){if(M.type===$n&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===rn||M.magFilter===po||M.magFilter===Ur||M.magFilter===Ci||M.minFilter===rn||M.minFilter===po||M.minFilter===Ur||M.minFilter===Ci)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,Oe[M.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Oe[M.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Oe[M.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Et[M.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Et[M.minFilter]),M.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Pe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ht||M.minFilter!==Ur&&M.minFilter!==Ci||M.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function dt(T,M){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",R),D(M));const se=M.source;let j=f.get(se);j===void 0&&(j={},f.set(se,j));const oe=J(M);if(oe!==T.__cacheKey){j[oe]===void 0&&(j[oe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),j[oe].usedTimes++;const fe=j[T.__cacheKey];fe!==void 0&&(j[T.__cacheKey].usedTimes--,fe.usedTimes===0&&G(M)),T.__cacheKey=oe,T.__webglTexture=j[oe].texture}return k}function Ye(T,M,k){return Math.floor(Math.floor(T/k)/M)}function zt(T,M,k,se){const oe=T.updateRanges;if(oe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,k,se,M.data);else{oe.sort((L,Q)=>L.start-Q.start);let fe=0;for(let L=1;L<oe.length;L++){const Q=oe[fe],q=oe[L],de=Q.start+Q.count,ae=Ye(q.start,M.width,4),le=Ye(Q.start,M.width,4);q.start<=de+1&&ae===le&&Ye(q.start+q.count-1,M.width,4)===ae?Q.count=Math.max(Q.count,q.start+q.count-Q.start):(++fe,oe[fe]=q)}oe.length=fe+1;const Y=t.getParameter(n.UNPACK_ROW_LENGTH),Z=t.getParameter(n.UNPACK_SKIP_PIXELS),ce=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let L=0,Q=oe.length;L<Q;L++){const q=oe[L],de=Math.floor(q.start/4),ae=Math.ceil(q.count/4),le=de%M.width,Te=Math.floor(de/M.width),Ge=ae,re=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,le),t.pixelStorei(n.UNPACK_SKIP_ROWS,Te),t.texSubImage2D(n.TEXTURE_2D,0,le,Te,Ge,re,k,se,M.data)}T.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Y),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(n.UNPACK_SKIP_ROWS,ce)}}function Rt(T,M,k){let se=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=n.TEXTURE_3D);const j=dt(T,M),oe=M.source;t.bindTexture(se,T.__webglTexture,n.TEXTURE0+k);const fe=i.get(oe);if(oe.version!==fe.__version||j===!0){if(t.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const re=Je.getPrimaries(Je.workingColorSpace),Ae=M.colorSpace===wi?null:Je.getPrimaries(M.colorSpace),ke=M.colorSpace===wi||re===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let Z=x(M.image,!1,s.maxTextureSize);Z=Ce(M,Z);const ce=r.convert(M.format,M.colorSpace),L=r.convert(M.type);let Q=w(M.internalFormat,ce,L,M.normalized,M.colorSpace,M.isVideoTexture);at(se,M);let q;const de=M.mipmaps,ae=M.isVideoTexture!==!0,le=fe.__version===void 0||j===!0,Te=oe.dataReady,Ge=S(M,Z);if(M.isDepthTexture)Q=_(M.format===Pi,M.type),le&&(ae?t.texStorage2D(n.TEXTURE_2D,1,Q,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,Q,Z.width,Z.height,0,ce,L,null));else if(M.isDataTexture)if(de.length>0){ae&&le&&t.texStorage2D(n.TEXTURE_2D,Ge,Q,de[0].width,de[0].height);for(let re=0,Ae=de.length;re<Ae;re++)q=de[re],ae?Te&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,q.width,q.height,ce,L,q.data):t.texImage2D(n.TEXTURE_2D,re,Q,q.width,q.height,0,ce,L,q.data);M.generateMipmaps=!1}else ae?(le&&t.texStorage2D(n.TEXTURE_2D,Ge,Q,Z.width,Z.height),Te&&zt(M,Z,ce,L)):t.texImage2D(n.TEXTURE_2D,0,Q,Z.width,Z.height,0,ce,L,Z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ae&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,Q,de[0].width,de[0].height,Z.depth);for(let re=0,Ae=de.length;re<Ae;re++)if(q=de[re],M.format!==Xn)if(ce!==null)if(ae){if(Te)if(M.layerUpdates.size>0){const ke=Pd(q.width,q.height,M.format,M.type);for(const me of M.layerUpdates){const ot=q.data.subarray(me*ke/q.data.BYTES_PER_ELEMENT,(me+1)*ke/q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,me,q.width,q.height,1,ce,ot)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,q.width,q.height,Z.depth,ce,q.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Q,q.width,q.height,Z.depth,0,q.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?Te&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,q.width,q.height,Z.depth,ce,L,q.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Q,q.width,q.height,Z.depth,0,ce,L,q.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ae&&le&&t.texStorage2D(n.TEXTURE_2D,Ge,Q,de[0].width,de[0].height);for(let re=0,Ae=de.length;re<Ae;re++)q=de[re],M.format!==Xn?ce!==null?ae?Te&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,q.width,q.height,ce,q.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Q,q.width,q.height,0,q.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?Te&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,q.width,q.height,ce,L,q.data):t.texImage2D(n.TEXTURE_2D,re,Q,q.width,q.height,0,ce,L,q.data)}else if(M.isDataArrayTexture)if(ae){if(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,Q,Z.width,Z.height,Z.depth),Te)if(M.layerUpdates.size>0){const re=Pd(Z.width,Z.height,M.format,M.type);for(const Ae of M.layerUpdates){const ke=Z.data.subarray(Ae*re/Z.data.BYTES_PER_ELEMENT,(Ae+1)*re/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ae,Z.width,Z.height,1,ce,L,ke)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ce,L,Z.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Q,Z.width,Z.height,Z.depth,0,ce,L,Z.data);else if(M.isData3DTexture)ae?(le&&t.texStorage3D(n.TEXTURE_3D,Ge,Q,Z.width,Z.height,Z.depth),Te&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ce,L,Z.data)):t.texImage3D(n.TEXTURE_3D,0,Q,Z.width,Z.height,Z.depth,0,ce,L,Z.data);else if(M.isFramebufferTexture){if(le)if(ae)t.texStorage2D(n.TEXTURE_2D,Ge,Q,Z.width,Z.height);else{let re=Z.width,Ae=Z.height;for(let ke=0;ke<Ge;ke++)t.texImage2D(n.TEXTURE_2D,ke,Q,re,Ae,0,ce,L,null),re>>=1,Ae>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){const re=n.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),Z.parentNode!==re){re.appendChild(Z),p.add(M),re.onpaint=Ae=>{const ke=Ae.changedElements;for(const me of p)ke.includes(me.image)&&(me.needsUpdate=!0)},re.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Z);else{const ke=n.RGBA,me=n.RGBA,ot=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ke,me,ot,Z)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(de.length>0){if(ae&&le){const re=Ie(de[0]);t.texStorage2D(n.TEXTURE_2D,Ge,Q,re.width,re.height)}for(let re=0,Ae=de.length;re<Ae;re++)q=de[re],ae?Te&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ce,L,q):t.texImage2D(n.TEXTURE_2D,re,Q,ce,L,q);M.generateMipmaps=!1}else if(ae){if(le){const re=Ie(Z);t.texStorage2D(n.TEXTURE_2D,Ge,Q,re.width,re.height)}Te&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,L,Z)}else t.texImage2D(n.TEXTURE_2D,0,Q,ce,L,Z);E(M)&&M.mipmapsAutoUpdate===!0&&b(se),fe.__version=oe.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function nn(T,M,k){if(M.image.length!==6)return;const se=dt(T,M),j=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+k);const oe=i.get(j);if(j.version!==oe.__version||se===!0){t.activeTexture(n.TEXTURE0+k);const fe=Je.getPrimaries(Je.workingColorSpace),Y=M.colorSpace===wi?null:Je.getPrimaries(M.colorSpace),Z=M.colorSpace===wi||fe===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const ce=M.isCompressedTexture||M.image[0].isCompressedTexture,L=M.image[0]&&M.image[0].isDataTexture,Q=[];for(let me=0;me<6;me++)!ce&&!L?Q[me]=x(M.image[me],!0,s.maxCubemapSize):Q[me]=L?M.image[me].image:M.image[me],Q[me]=Ce(M,Q[me]);const q=Q[0],de=r.convert(M.format,M.colorSpace),ae=r.convert(M.type);let le=w(M.internalFormat,de,ae,M.normalized,M.colorSpace);const Te=M.isVideoTexture!==!0,Ge=oe.__version===void 0||se===!0,re=j.dataReady;let Ae=S(M,q);at(n.TEXTURE_CUBE_MAP,M);let ke;if(M.isDepthTexture){if(le=_(M.format===Pi,M.type),Ge)if(Te)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,le,q.width,q.height);else for(let me=0;me<6;me++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,le,q.width,q.height,0,de,ae,null)}else if(ce){Te&&Ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,le,q.width,q.height);for(let me=0;me<6;me++){ke=Q[me].mipmaps;for(let ot=0;ot<ke.length;ot++){const Ut=ke[ot];M.format!==Xn?de!==null?Te?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ot,0,0,Ut.width,Ut.height,de,Ut.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ot,le,Ut.width,Ut.height,0,Ut.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ot,0,0,Ut.width,Ut.height,de,ae,Ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ot,le,Ut.width,Ut.height,0,de,ae,Ut.data)}}}else{if(ke=M.mipmaps,Te&&Ge){ke.length>0&&Ae++;const me=Ie(Q[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,le,me.width,me.height)}for(let me=0;me<6;me++)if(L){Te?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Q[me].width,Q[me].height,de,ae,Q[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,le,Q[me].width,Q[me].height,0,de,ae,Q[me].data);for(let ot=0;ot<ke.length;ot++){const mi=ke[ot].image[me].image;Te?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ot+1,0,0,mi.width,mi.height,de,ae,mi.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ot+1,le,mi.width,mi.height,0,de,ae,mi.data)}}else{Te?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,de,ae,Q[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,le,de,ae,Q[me]);for(let ot=0;ot<ke.length;ot++){const Ut=ke[ot];Te?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ot+1,0,0,de,ae,Ut.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ot+1,le,de,ae,Ut.image[me])}}}E(M)&&M.mipmapsAutoUpdate===!0&&b(n.TEXTURE_CUBE_MAP),oe.__version=j.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function xt(T,M,k,se,j,oe){const fe=r.convert(k.format,k.colorSpace),Y=r.convert(k.type),Z=w(k.internalFormat,fe,Y,k.normalized,k.colorSpace),ce=i.get(M),L=i.get(k);if(L.__renderTarget=M,!ce.__hasExternalTextures){const Q=Math.max(1,M.width>>oe),q=Math.max(1,M.height>>oe);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,oe,Z,Q,q,M.depth,0,fe,Y,null):t.texImage2D(j,oe,Z,Q,q,0,fe,Y,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),pe(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,j,L.__webglTexture,0,_t(M)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,j,L.__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fn(T,M,k){if(n.bindRenderbuffer(n.RENDERBUFFER,T),M.depthBuffer){const se=M.depthTexture,j=se&&se.isDepthTexture?se.type:null,oe=_(M.stencilBuffer,j),fe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;pe(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t(M),oe,M.width,M.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t(M),oe,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,oe,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,T)}else{const se=M.textures;for(let j=0;j<se.length;j++){const oe=se[j],fe=r.convert(oe.format,oe.colorSpace),Y=r.convert(oe.type),Z=w(oe.internalFormat,fe,Y,oe.normalized,oe.colorSpace);pe(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t(M),Z,M.width,M.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t(M),Z,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Z,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Nt(T,M,k){const se=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=i.get(M.depthTexture);j.__renderTarget=M;const oe=se?M.depthTexture.image[0]:M.depthTexture.image;(!j.__webglTexture||oe.width!==M.width||oe.height!==M.height)&&(oe.width=M.width,oe.height=M.height,M.depthTexture.needsUpdate=!0),se?ve(M.depthTexture,0):_e(M.depthTexture,0);const fe=j.__webglTexture,Y=_t(M),Z=se?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,ce=M.depthTexture.format===Pi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===zi)pe(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,Z,fe,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,ce,Z,fe,0);else if(M.depthTexture.format===Pi)pe(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,Z,fe,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,ce,Z,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function gn(T){const M=i.get(T),k=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const se=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),se){const j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,se.removeEventListener("dispose",j)};se.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=se}if(T.depthTexture&&!M.__autoAllocateDepthBuffer)if(k)for(let se=0;se<6;se++)Nt(M.__webglFramebuffer[se],T,se);else T.texture.mipmaps.length>0?Nt(M.__webglFramebuffer[0],T,0):Nt(M.__webglFramebuffer,T,0);else if(k){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]===void 0)M.__webglDepthbuffer[se]=n.createRenderbuffer(),Fn(M.__webglDepthbuffer[se],T,!1);else{const j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,oe)}}else if(T.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Fn(M.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,oe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function _n(T,M,k){const se=i.get(T);M!==void 0&&xt(se.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&gn(T)}function vn(T){const M=T.texture,k=i.get(T),se=i.get(M);T.addEventListener("dispose",U),D(T);const j=T.textures,oe=T.isWebGLCubeRenderTarget===!0,fe=j.length>1;if(fe||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=M.version,a.memory.textures++),oe){k.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(M.mipmaps.length>0){k.__webglFramebuffer[Y]=[];for(let Z=0;Z<M.mipmaps.length;Z++)k.__webglFramebuffer[Y][Z]=n.createFramebuffer()}else k.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(M.mipmaps.length>0){k.__webglFramebuffer=[];for(let Y=0;Y<M.mipmaps.length;Y++)k.__webglFramebuffer[Y]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(fe)for(let Y=0,Z=j.length;Y<Z;Y++){const ce=i.get(j[Y]);ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&pe(T)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Y=0;Y<j.length;Y++){const Z=j[Y];k.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[Y]);const ce=r.convert(Z.format,Z.colorSpace),L=r.convert(Z.type),Q=w(Z.internalFormat,ce,L,Z.normalized,Z.colorSpace,T.isXRRenderTarget===!0),q=_t(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,q,Q,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,k.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Fn(k.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),at(n.TEXTURE_CUBE_MAP,M);for(let Y=0;Y<6;Y++)if(M.mipmaps.length>0)for(let Z=0;Z<M.mipmaps.length;Z++)xt(k.__webglFramebuffer[Y][Z],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Z);else xt(k.__webglFramebuffer[Y],T,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);E(M)?b(n.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(fe){for(let Y=0,Z=j.length;Y<Z;Y++){const ce=j[Y],L=i.get(ce);let Q=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Q=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,L.__webglTexture),at(Q,ce),xt(k.__webglFramebuffer,T,ce,n.COLOR_ATTACHMENT0+Y,Q,0),E(ce)&&b(Q)}t.unbindTexture()}else{let Y=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Y=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Y,se.__webglTexture),at(Y,M),M.mipmaps.length>0)for(let Z=0;Z<M.mipmaps.length;Z++)xt(k.__webglFramebuffer[Z],T,M,n.COLOR_ATTACHMENT0,Y,Z);else xt(k.__webglFramebuffer,T,M,n.COLOR_ATTACHMENT0,Y,0);E(M)?b(Y):M.mipmaps.length>0&&n.texParameteri(Y,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}T.depthBuffer&&gn(T)}function N(T){const M=T.textures;for(let k=0,se=M.length;k<se;k++){const j=M[k];if(E(j)&&j.mipmapsAutoUpdate===!0){const oe=A(T),fe=i.get(j).__webglTexture;t.bindTexture(oe,fe),b(oe),t.unbindTexture()}}}const xn=[];function gt(T){if(T.samples>0){if(pe(T)===!1){const M=T.textures,k=T.width,se=T.height;let j=n.COLOR_BUFFER_BIT;const oe=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(T),Y=M.length>1;if(Y)for(let ce=0;ce<M.length;ce++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ce=0;ce<M.length;ce++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[ce]);const L=i.get(M[ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,L,0)}n.blitFramebuffer(0,0,k,se,0,0,k,se,j,n.NEAREST),c===!0&&(xn.length=0,xn.push(n.COLOR_ATTACHMENT0+ce),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&xn.push(oe),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let ce=0;ce<M.length;ce++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,fe.__webglColorRenderbuffer[ce]);const L=i.get(M[ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,L,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){const M=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function _t(T){return Math.min(s.maxSamples,T.samples)}function pe(T){const M=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ct(T){const M=a.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function Ce(T,M){const k=T.colorSpace,se=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==Da&&k!==wi&&(Je.getTransfer(k)===lt?(se!==Xn||j!==un)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",k)),M}function Ie(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=Ue,this.resetTextureUnits=ee,this.getTextureUnits=ne,this.setTextureUnits=Ee,this.setTexture2D=_e,this.setTexture2DArray=Me,this.setTexture3D=Re,this.setTextureCube=ve,this.rebindTextures=_n,this.setupRenderTarget=vn,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=gn,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=pe,this.dispose=V}function nx(n,e){function t(i,s=wi){let r;const a=Je.getTransfer(s);if(i===un)return n.UNSIGNED_BYTE;if(i===gc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_c)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ju)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ef)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ju)return n.BYTE;if(i===Qu)return n.SHORT;if(i===vr)return n.UNSIGNED_SHORT;if(i===mc)return n.INT;if(i===Zn)return n.UNSIGNED_INT;if(i===$n)return n.FLOAT;if(i===Jn)return n.HALF_FLOAT;if(i===tf)return n.ALPHA;if(i===nf)return n.RGB;if(i===Xn)return n.RGBA;if(i===zi)return n.DEPTH_COMPONENT;if(i===Pi)return n.DEPTH_STENCIL;if(i===sf)return n.RED;if(i===vc)return n.RED_INTEGER;if(i===rs)return n.RG;if(i===xc)return n.RG_INTEGER;if(i===Sc)return n.RGBA_INTEGER;if(i===ma||i===ga||i===_a||i===va)if(a===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ma)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ma)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ga)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_a)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nl||i===il||i===sl||i===rl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===al||i===ol||i===ll||i===cl||i===dl||i===Pa||i===ul)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===al||i===ol)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ll)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===cl)return r.COMPRESSED_R11_EAC;if(i===dl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Pa)return r.COMPRESSED_RG11_EAC;if(i===ul)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===fl||i===hl||i===pl||i===ml||i===gl||i===_l||i===vl||i===xl||i===Sl||i===Ml||i===yl||i===bl||i===El||i===wl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===fl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ml)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_l)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ml)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===El)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tl||i===Al||i===Rl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Tl)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cl||i===Pl||i===La||i===Ll)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Cl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===La)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const ix=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sx=`
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

}`;class rx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new _f(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new as({vertexShader:ix,fragmentShader:sx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new Vs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ax extends us{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,p=null,d=null,f=null,v=null;const g=typeof XRWebGLBinding<"u",m=new rx,h={},x=t.getContextAttributes();let E=null,b=null;const A=[],w=[],_=new We;let S=null,D=null;const C=new Cn;C.viewport=new yt;const R=new Cn;R.viewport=new yt;const U=[C,R],H=new vm;let P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let _e=A[J];return _e===void 0&&(_e=new bo,A[J]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(J){let _e=A[J];return _e===void 0&&(_e=new bo,A[J]=_e),_e.getGripSpace()},this.getHand=function(J){let _e=A[J];return _e===void 0&&(_e=new bo,A[J]=_e),_e.getHandSpace()};function K(J){const _e=w.indexOf(J.inputSource);if(_e===-1)return;const Me=A[_e];Me!==void 0&&(Me.update(J.inputSource,J.frame,l||a),Me.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",ie);for(let J=0;J<A.length;J++){const _e=w[J];_e!==null&&(w[J]=null,A[J].disconnect(_e))}P=null,V=null,m.reset();for(const J in h)delete h[J];if(e.setRenderTarget(E),f=null,d=null,p=null,s=null,b=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),D!==null){const J=D.camera;J.fov=D.fov,J.zoom=D.zoom,J.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return p===null&&g&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",G),s.addEventListener("inputsourceschange",ie),x.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Re=null,ve=null;x.depth&&(ve=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=x.stencil?Pi:zi,Re=x.stencil?Gs:Zn);const Oe={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(Oe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Yn(d.textureWidth,d.textureHeight,{format:Xn,type:un,depthTexture:new Hs(d.textureWidth,d.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Me={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Yn(f.framebufferWidth,f.framebufferHeight,{format:Xn,type:un,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ue.setContext(s),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(J){for(let _e=0;_e<J.removed.length;_e++){const Me=J.removed[_e],Re=w.indexOf(Me);Re>=0&&(w[Re]=null,A[Re].disconnect(Me))}for(let _e=0;_e<J.added.length;_e++){const Me=J.added[_e];let Re=w.indexOf(Me);if(Re===-1){for(let Oe=0;Oe<A.length;Oe++)if(Oe>=w.length){w.push(Me),Re=Oe;break}else if(w[Oe]===null){w[Oe]=Me,Re=Oe;break}if(Re===-1)break}const ve=A[Re];ve&&ve.connect(Me)}}function X(J,_e){_e===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(_e.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let _e=J.near,Me=J.far;m.texture!==null&&(m.depthNear>0&&(_e=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),H.near=R.near=C.near=_e,H.far=R.far=C.far=Me,(P!==H.near||V!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),P=H.near,V=H.far),H.layers.mask=J.layers.mask|6,C.layers.mask=H.layers.mask&-5,R.layers.mask=H.layers.mask&-3;const Re=J.parent,ve=H.cameras;X(H,Re);for(let Oe=0;Oe<ve.length;Oe++)X(ve[Oe],Re);H.projectionMatrix.copy(C.projectionMatrix),H.projectionMatrixInverse.copy(C.projectionMatrixInverse),D===null&&J.isPerspectiveCamera&&(D={camera:J,fov:J.fov,zoom:J.zoom}),ee(J,H,Re)};function ee(J,_e,Me){Me===null?J.matrix.copy(_e.matrixWorld):(J.matrix.copy(Me.matrixWorld),J.matrix.invert(),J.matrix.multiply(_e.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(_e.projectionMatrix),J.projectionMatrixInverse.copy(_e.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Il*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(J){return h[J]};let ne=null;function Ee(J,_e){if(u=_e.getViewerPose(l||a),v=_e,u!==null){const Me=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Re=!1;Me.length!==H.cameras.length&&(H.cameras.length=0,Re=!0);for(let Pe=0;Pe<Me.length;Pe++){const at=Me[Pe];let dt=null;if(f!==null)dt=f.getViewport(at);else{const zt=p.getViewSubImage(d,at);dt=zt.viewport,Pe===0&&(e.setRenderTargetTextures(b,zt.colorTexture,zt.depthStencilTexture),e.setRenderTarget(b))}let Ye=U[Pe];Ye===void 0&&(Ye=new Cn,Ye.layers.enable(Pe),Ye.viewport=new yt,U[Pe]=Ye),Ye.matrix.fromArray(at.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(at.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(dt.x,dt.y,dt.width,dt.height),Pe===0&&(H.matrix.copy(Ye.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Re===!0&&H.cameras.push(Ye)}const ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){p=i.getBinding();const Pe=p.getDepthInformation(Me[0]);Pe&&Pe.isValid&&Pe.texture&&m.init(Pe,s.renderState)}if(ve&&ve.includes("camera-access")&&g){e.state.unbindTexture(),p=i.getBinding();for(let Pe=0;Pe<Me.length;Pe++){const at=Me[Pe].camera;if(at){let dt=h[at];dt||(dt=new _f,h[at]=dt);const Ye=p.getCameraImage(at);dt.sourceTexture=Ye}}}}for(let Me=0;Me<A.length;Me++){const Re=w[Me],ve=A[Me];Re!==null&&ve!==void 0&&ve.update(Re,_e,l||a)}ne&&ne(J,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),v=null}const Ue=new yf;Ue.setAnimationLoop(Ee),this.setAnimationLoop=function(J){ne=J},this.dispose=function(){}}}const ox=new pt,Df=new Ne;Df.set(-1,0,0,0,1,0,0,0,1);function lx(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,vf(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,x,E,b){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(m,h):h.isMeshLambertMaterial?(r(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(m,h),p(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(m,h),d(m,h),h.isMeshPhysicalMaterial&&f(m,h,b)):h.isMeshMatcapMaterial?(r(m,h),v(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),g(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?c(m,h,x,E):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===an&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===an&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const x=e.get(h),E=x.envMap,b=x.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(ox.makeRotationFromEuler(b)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Df),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,x,E){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*x,m.scale.value=E*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function p(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function f(m,h,x){m.ior.value=h.ior,h.diffuseRoughness>0&&(m.diffuseRoughness.value=h.diffuseRoughness,h.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=h.diffuseRoughnessMap,t(h.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===an&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.retroreflectivity>0&&(m.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=h.iridescenceThicknessMaximum,h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const x=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function cx(n,e,t,i){let s={},r={};function a(x,E){const b=E.program;i.uniformBlockBinding(x,b,s[x.id])}function o(x,E){let b=s[x.id];b===void 0&&(v(x),b=c(x),s[x.id]=b,x.addEventListener("dispose",m));const A=E.program;i.updateUBOMapping(x,A);const w=e.render.frame;r[x.id]!==w&&(l(x),r[x.id]=w)}function c(x){const E=n.createBuffer(),b=x.__size,A=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,b,A),n.bindBuffer(n.UNIFORM_BUFFER,null),E}function l(x){const E=s[x.id],b=x.uniforms,A=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let w=0,_=b.length;w<_;w++){const S=b[w];if(Array.isArray(S))for(let D=0,C=S.length;D<C;D++)u(S[D],w,D,A);else u(S,w,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(x,E,b,A){if(d(x,E,b,A)===!0){const w=x.__offset,_=x.value;if(Array.isArray(_)){let S=0;for(let D=0;D<_.length;D++){const C=_[D],R=g(C,!0);p(C,x.__data,S),S+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else p(_,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,x.__data)}}function p(x,E,b){typeof x=="number"||typeof x=="boolean"?E[b]=x:x.isMatrix3?(E[b]=x.elements[0],E[b+1]=x.elements[1],E[b+2]=x.elements[2],E[b+3]=0,E[b+4]=x.elements[3],E[b+5]=x.elements[4],E[b+6]=x.elements[5],E[b+7]=0,E[b+8]=x.elements[6],E[b+9]=x.elements[7],E[b+10]=x.elements[8],E[b+11]=0):ArrayBuffer.isView(x)?E.set(x.subarray(0,E.length-b),b):x.toArray(E,b)}function d(x,E,b,A){const w=x.value,_=E+"_"+b;if(Array.isArray(w)){A[_]===void 0&&(A[_]=[]);const S=A[_];let D=!1;for(let C=0;C<w.length;C++)f(w[C],S,C)===!0&&(D=!0);return D}return f(w,A,_)}function f(x,E,b){if(E[b]===void 0)return typeof x=="number"||typeof x=="boolean"?E[b]=x:ArrayBuffer.isView(x)?E[b]=x.slice():E[b]=x.clone(),!0;{const A=E[b];if(typeof x=="number"||typeof x=="boolean"){if(A!==x)return E[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(A.equals(x)===!1)return A.copy(x),!0}}return!1}function v(x){const E=x.uniforms;let b=0;const A=16;for(let _=0,S=E.length;_<S;_++){const D=Array.isArray(E[_])?E[_]:[E[_]];for(let C=0,R=D.length;C<R;C++){const U=D[C],H=Array.isArray(U.value)?U.value:[U.value],P=Array.isArray(E[_])||Array.isArray(U.value);let V=b;for(let G=0,ie=H.length;G<ie;G++){const X=H[G],ee=g(X,P),ne=b%A,Ee=ne%ee.boundary,Ue=ne+Ee;b+=Ee,Ue!==0&&A-Ue<ee.storage&&(b+=A-Ue),G===0&&(V=b),b+=ee.storage}const K=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new K((b-V)/Float32Array.BYTES_PER_ELEMENT),U.__offset=V}}const w=b%A;return w>0&&(b+=A-w),x.__size=b,x.__cache={},this}function g(x,E){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=16,b.storage=48):x.isMatrix4?(b.boundary=16,b.storage=64):x.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",x),E===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(x){const E=x.target;E.removeEventListener("dispose",m),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function h(){for(const x in s)n.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:o,dispose:h}}const dx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let kn=null;function ux(){return kn===null&&(kn=new im(dx,16,16,rs,Jn),kn.name="DFG_LUT",kn.minFilter=rn,kn.magFilter=rn,kn.wrapS=li,kn.wrapT=li,kn.generateMipmaps=!1,kn.needsUpdate=!0),kn}class fx{constructor(e={}){const{canvas:t=Cp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:f=un}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const g=f,m=new Set([Sc,xc,vc]),h=new Set([un,Zn,vr,Gs,gc,_c]),x=new Uint32Array(4),E=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]};let A=null,w=null;const _=[],S=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let R=!1,U=null,H=null,P=null,V=null;this._outputColorSpace=dn;let K=0,G=0,ie=null,X=-1,ee=null;const ne=new yt,Ee=new yt;let Ue=null;const J=new ze(0);let _e=0,Me=t.width,Re=t.height,ve=1,Oe=null,Et=null;const Pe=new yt(0,0,Me,Re),at=new yt(0,0,Me,Re);let dt=!1;const Ye=new Sr,zt=new Ec;let Rt=!1,nn=!1;const xt=new pt,Fn=new F,Nt=new yt,gn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _n=!1;function vn(){return ie===null?ve:1}let N=i;function xn(y,I){return t.getContext(y,I)}let gt,_t,pe,Ct,Ce,Ie,T,M,k,se,j,oe,fe,Y,Z,ce,L,Q,q,de,ae,le,Te;try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hc}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",me,!1),N===null){const I="webgl2";if(N=xn(I,y),N===null)throw xn(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(y){throw t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",me,!1),it("WebGLRenderer: "+y.message),y}function Ge(){gt=new m_(N),gt.init(),ae=new nx(N,gt),_t=new s_(N,gt,e,ae),pe=new ex(N,gt),_t.reversedDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),H=N.createFramebuffer(),P=N.createFramebuffer(),V=N.createFramebuffer(),Ct=new v_(N),Ce=new zv,Ie=new tx(N,gt,pe,Ce,_t,ae,Ct),T=new p_(C),M=new Sm(N),le=new n_(N,M),k=new g_(N,M,Ct,le),se=new S_(N,k,M,le,Ct),Q=new x_(N,_t,Ie),Z=new r_(Ce),j=new Bv(C,T,gt,_t,le,Z),oe=new lx(C,Ce),fe=new Hv,Y=new Yv(gt),L=new t_(C,T,pe,se,v,c),ce=new jv(C,se,_t),Te=new cx(N,Ct,_t,pe),q=new i_(N,gt,Ct),de=new __(N,gt,Ct),Ct.programs=j.programs,C.capabilities=_t,C.extensions=gt,C.properties=Ce,C.renderLists=fe,C.shadowMap=ce,C.state=pe,C.info=Ct}g!==un&&(D=new y_(g,t.width,t.height,o,s,r));const re=new ax(C,N);this.xr=re,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=gt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=gt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(y){y!==void 0&&(ve=y,this.setSize(Me,Re,!1))},this.getSize=function(y){return y.set(Me,Re)},this.setSize=function(y,I,W=!0){if(re.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=y,Re=I,t.width=Math.floor(y*ve),t.height=Math.floor(I*ve),W===!0&&(t.style.width=y+"px",t.style.height=I+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(Me*ve,Re*ve).floor()},this.setDrawingBufferSize=function(y,I,W){Me=y,Re=I,ve=W,t.width=Math.floor(y*W),t.height=Math.floor(I*W),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(g===un){it("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(ne)},this.getViewport=function(y){return y.copy(Pe)},this.setViewport=function(y,I,W,O){y.isVector4?Pe.set(y.x,y.y,y.z,y.w):Pe.set(y,I,W,O),pe.viewport(ne.copy(Pe).multiplyScalar(vn()).round())},this.getScissor=function(y){return y.copy(at)},this.setScissor=function(y,I,W,O){y.isVector4?at.set(y.x,y.y,y.z,y.w):at.set(y,I,W,O),pe.scissor(Ee.copy(at).multiplyScalar(vn()).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(y){pe.setScissorTest(dt=y)},this.setOpaqueSort=function(y){Oe=y},this.setTransparentSort=function(y){Et=y},this.getClearColor=function(y){return y.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,W=!0){let O=0;if(y){let z=!1;if(ie!==null){const he=ie.texture.format;z=m.has(he)}if(z){const he=ie.texture.type,Se=h.has(he),ue=L.getClearColor(),xe=L.getClearAlpha(),we=ue.r,Fe=ue.g,Ke=ue.b;Se?(x[0]=we,x[1]=Fe,x[2]=Ke,x[3]=xe,N.clearBufferuiv(N.COLOR,0,x)):(E[0]=we,E[1]=Fe,E[2]=Ke,E[3]=xe,N.clearBufferiv(N.COLOR,0,E))}else O|=N.COLOR_BUFFER_BIT}I&&(O|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(O|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&N.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),U=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",me,!1),L.dispose(),fe.dispose(),Y.dispose(),Ie.dispose(),Ce.dispose(),T.dispose(),se.dispose(),k.dispose(),le.dispose(),Te.dispose(),j.dispose(),re.dispose(),re.removeEventListener("sessionstart",Oc),re.removeEventListener("sessionend",kc),$i.stop()};function Ae(y){y.preventDefault(),id("WebGLRenderer: Context Lost."),R=!0}function ke(){id("WebGLRenderer: Context Restored."),R=!1;const y=Ct.autoReset,I=ce.enabled,W=ce.autoUpdate,O=ce.needsUpdate,z=ce.type;Ge(),Ct.autoReset=y,ce.enabled=I,ce.autoUpdate=W,ce.needsUpdate=O,ce.type=z}function me(y){it("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ot(y){const I=y.target;I.removeEventListener("dispose",ot),Ut(I)}function Ut(y){mi(y),Ce.remove(y)}function mi(y){const I=Ce.get(y).programs;I!==void 0&&(I.forEach(function(W){j.releaseProgram(W)}),y.isShaderMaterial&&j.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,W,O,z,he){I===null&&(I=gn);const Se=z.isMesh&&z.matrixWorld.determinantAffine()<0,ue=lh(y,I,W,O,z);pe.setMaterial(O,Se);let xe=W.index,we=1;if(O.wireframe===!0){if(xe=k.getWireframeAttribute(W),xe===void 0)return;we=2}const Fe=W.drawRange,Ke=W.attributes.position;let ye=Fe.start*we,Ze=(Fe.start+Fe.count)*we;he!==null&&(ye=Math.max(ye,he.start*we),Ze=Math.min(Ze,(he.start+he.count)*we)),xe!==null?(ye=Math.max(ye,0),Ze=Math.min(Ze,xe.count)):Ke!=null&&(ye=Math.max(ye,0),Ze=Math.min(Ze,Ke.count));const wt=Ze-ye;if(wt<0||wt===1/0)return;le.setup(z,O,ue,W,xe);let ht,ut=q;if(xe!==null&&(ht=M.get(xe),ut=de,ut.setIndex(ht)),z.isMesh)O.wireframe===!0?(pe.setLineWidth(O.wireframeLinewidth*vn()),ut.setMode(N.LINES)):ut.setMode(N.TRIANGLES);else if(z.isLine){let Wt=O.linewidth;Wt===void 0&&(Wt=1),pe.setLineWidth(Wt*vn()),z.isLineSegments?ut.setMode(N.LINES):z.isLineLoop?ut.setMode(N.LINE_LOOP):ut.setMode(N.LINE_STRIP)}else z.isPoints?ut.setMode(N.POINTS):z.isSprite&&ut.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))ut.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Wt=z._multiDrawStarts,be=z._multiDrawCounts,jt=z._multiDrawCount,nt=xe?M.get(xe).bytesPerElement:1,Xi=Ce.get(O).currentProgram.getUniforms();for(let $t=0;$t<jt;$t++)Xi.setValue(N,"_gl_DrawID",$t),ut.render(Wt[$t]/nt,be[$t])}else if(z.isInstancedMesh)ut.renderInstances(ye,wt,z.count);else if(W.isInstancedBufferGeometry){const Wt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,be=Math.min(W.instanceCount,Wt);ut.renderInstances(ye,wt,be)}else ut.render(ye,wt)};function Fc(y,I,W,O){U!==null&&y.isNodeMaterial&&U.setObject(O,y),Rt===!0&&Z.setState(y,W,!1),y.transparent===!0&&y.side===Vn&&y.forceSinglePass===!1?(y.side=an,y.needsUpdate=!0,Ks(y,I,O),y.side=ss,y.needsUpdate=!0,Ks(y,I,O),y.side=Vn):Ks(y,I,O)}this.compile=function(y,I,W=null){W===null&&(W=y),U!==null&&U.renderStart(y,I,W),w=Y.get(W),w.init(I),S.push(w),W.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),y!==W&&y.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),w.setupLights(),U!==null&&U.updateLights(w.state.lightsArray),nn=this.localClippingEnabled,Rt=Z.init(this.clippingPlanes,nn),Rt===!0&&Z.setGlobalState(this.clippingPlanes,I),U!==null&&ce.render(w.state.shadowsArray,W,I);const O=new Set;return y.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const he=z.material;if(he)if(Array.isArray(he))for(let Se=0;Se<he.length;Se++){const ue=he[Se];Fc(ue,W,I,z),O.add(ue)}else Fc(he,W,I,z),O.add(he)}),w=S.pop(),U!==null&&U.renderEnd(),O},this.compileAsync=function(y,I,W=null){const O=this.compile(y,I,W);return new Promise(z=>{function he(){if(O.forEach(function(Se){const xe=Ce.get(Se).currentProgram;(xe===void 0||xe.isReady())&&O.delete(Se)}),O.size===0){z(y);return}setTimeout(he,10)}gt.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let oo=null;function ah(y){oo&&oo(y)}function Oc(){$i.stop()}function kc(){$i.start()}const $i=new yf;$i.setAnimationLoop(ah),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(y){oo=y,re.setAnimationLoop(y),y===null?$i.stop():$i.start()},re.addEventListener("sessionstart",Oc),re.addEventListener("sessionend",kc),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;U!==null&&U.renderStart(y,I);const W=re.enabled===!0&&re.isPresenting===!0,O=D!==null&&(ie===null||W)&&D.begin(C,ie);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(I),I=re.getCamera()),y.isScene===!0&&y.onBeforeRender(C,y,I,ie),w=Y.get(y,S.length),w.init(I),w.state.textureUnits=Ie.getTextureUnits(),S.push(w),xt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?zt.setFromArrayCamera(I):Ye.setFromProjectionMatrix(xt,Dn,I.reversedDepth),nn=this.localClippingEnabled,Rt=Z.init(this.clippingPlanes,nn),A=fe.get(y,_.length),A.init(),_.push(A),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){const Se=C.xr.getDepthSensingMesh();Se!==null&&lo(Se,I,-1/0,C.sortObjects)}lo(y,I,0,C.sortObjects),A.finish(),U!==null&&U.updateLights(w.state.lightsArray),C.sortObjects===!0&&A.sort(Oe,Et),_n=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,_n&&L.addToRenderList(A,y),this.info.autoReset===!0&&this.info.reset(),Rt===!0&&Z.beginShadows();const z=w.state.shadowsArray;if(ce.render(z,y,I),Rt===!0&&Z.endShadows(),(O&&D.hasRenderPass())===!1){const Se=A.opaque,ue=A.transmissive;if(w.setupLights(),I.isArrayCamera){const xe=I.cameras;if(ue.length>0)for(let we=0,Fe=xe.length;we<Fe;we++){const Ke=xe[we];zc(Se,ue,y,Ke)}_n&&L.render(y);for(let we=0,Fe=xe.length;we<Fe;we++){const Ke=xe[we];Bc(A,y,Ke,Ke.viewport)}}else ue.length>0&&zc(Se,ue,y,I),_n&&L.render(y),Bc(A,y,I)}ie!==null&&G===0&&(Ie.updateMultisampleRenderTarget(ie),Ie.updateRenderTargetMipmap(ie)),O&&D.end(C),y.isScene===!0&&y.onAfterRender(C,y,I),le.resetDefaultState(),X=-1,ee=null,S.pop(),S.length>0?(w=S[S.length-1],Ie.setTextureUnits(w.state.textureUnits),Rt===!0&&Z.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,U!==null&&U.renderEnd()};function lo(y,I,W,O){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)w.pushLight(y),y.castShadow&&w.pushShadow(y);else if(y.isSprite){const Se=I.isArrayCamera?zt:Ye;if(!y.frustumCulled||y.intersectsFrustum(Se)){O&&Nt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(xt);const ue=se.update(y),xe=y.material;xe.visible&&A.push(y,ue,xe,W,Nt.z,null,I)}}else if(y.isMesh||y.isLine||y.isPoints){const Se=I.isArrayCamera?zt:Ye;if(!y.frustumCulled||y.intersectsFrustum(Se)){const ue=se.update(y),xe=y.material;if(O&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Nt.copy(y.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Nt.copy(ue.boundingSphere.center)),Nt.applyMatrix4(y.matrixWorld).applyMatrix4(xt)),Array.isArray(xe)){const we=ue.groups;for(let Fe=0,Ke=we.length;Fe<Ke;Fe++){const ye=we[Fe],Ze=xe[ye.materialIndex];Ze&&Ze.visible&&A.push(y,ue,Ze,W,Nt.z,ye,I)}}else xe.visible&&A.push(y,ue,xe,W,Nt.z,null,I)}}}const he=y.children;for(let Se=0,ue=he.length;Se<ue;Se++)lo(he[Se],I,W,O)}function Bc(y,I,W,O){const{opaque:z,transmissive:he,transparent:Se}=y;w.setupLightsView(W),Rt===!0&&Z.setGlobalState(C.clippingPlanes,W),O&&pe.viewport(ne.copy(O)),z.length>0&&Dr(z,I,W),he.length>0&&Dr(he,I,W),Se.length>0&&Dr(Se,I,W),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function zc(y,I,W,O){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[O.id]===void 0){const ye=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[O.id]=new Yn(1,1,{generateMipmaps:!0,type:ye?Jn:un,minFilter:Ci,samples:Math.max(4,_t.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const he=w.state.transmissionRenderTarget[O.id],Se=O.viewport||ne;he.setSize(Se.z*C.transmissionResolutionScale,Se.w*C.transmissionResolutionScale);const ue=C.getRenderTarget(),xe=C.getActiveCubeFace(),we=C.getActiveMipmapLevel();C.setRenderTarget(he),C.getClearColor(J),_e=C.getClearAlpha(),_e<1&&C.setClearColor(16777215,.5),C.clear(),_n&&L.render(W);const Fe=C.toneMapping;C.toneMapping=fi;const Ke=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),w.setupLightsView(O),Rt===!0&&Z.setGlobalState(C.clippingPlanes,O),Dr(y,W,O),Ie.updateMultisampleRenderTarget(he),Ie.updateRenderTargetMipmap(he),gt.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Ze=0,wt=I.length;Ze<wt;Ze++){const ht=I[Ze],{object:ut,geometry:Wt,material:be,group:jt}=ht;if(be.side===Vn&&ut.layers.test(O.layers)){const nt=be.side;be.side=an,be.needsUpdate=!0,Gc(ut,W,O,Wt,be,jt),be.side=nt,be.needsUpdate=!0,ye=!0}}ye===!0&&(Ie.updateMultisampleRenderTarget(he),Ie.updateRenderTargetMipmap(he))}C.setRenderTarget(ue,xe,we),C.setClearColor(J,_e),Ke!==void 0&&(O.viewport=Ke),C.toneMapping=Fe}function Dr(y,I,W){const O=I.isScene===!0?I.overrideMaterial:null;for(let z=0,he=y.length;z<he;z++){const Se=y[z],{object:ue,geometry:xe,group:we}=Se;let Fe=Se.material;Fe.allowOverride===!0&&O!==null&&(Fe=O),ue.layers.test(W.layers)&&Gc(ue,I,W,xe,Fe,we)}}function Gc(y,I,W,O,z,he){U!==null&&z.isNodeMaterial&&U.setObject(y,z),y.onBeforeRender(C,I,W,O,z,he),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(C,I,W,O,y,he),z.transparent===!0&&z.side===Vn&&z.forceSinglePass===!1?(z.side=an,z.needsUpdate=!0,C.renderBufferDirect(W,I,O,z,y,he),z.side=ss,z.needsUpdate=!0,C.renderBufferDirect(W,I,O,z,y,he),z.side=Vn):C.renderBufferDirect(W,I,O,z,y,he),y.onAfterRender(C,I,W,O,z,he)}function Hc(y){let I=0;for(const W of y)W.texture!==null&&I++;return I}function Ks(y,I,W){I.isScene!==!0&&(I=gn);const O=Ce.get(y),z=w.state.lights,he=w.state.shadowsArray,Se=z.state.version,ue=j.getParameters(y,z.state,he,I,W,w.state.lightProbeGridArray),xe=j.getProgramCacheKey(ue);let we=O.programs;O.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,O.fog=I.fog;const Fe=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;O.envMap=T.get(y.envMap||O.environment,Fe),O.envMapRotation=O.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,we===void 0&&(y.addEventListener("dispose",ot),we=new Map,O.programs=we,O.programVariants=new Map);let Ke=we.get(xe);if(Ke!==void 0){if(O.currentProgram===Ke&&O.lightsStateVersion===Se)return Wc(y,ue),Ke}else ue.uniforms=j.getUniforms(y),U!==null&&y.isNodeMaterial&&U.build(y,W,ue),y.onBeforeCompile(ue,C),Ke=j.acquireProgram(ue,xe),we.set(xe,Ke),O.uniforms=ue.uniforms;const ye=O.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ye.clippingPlanes=Z.uniform),Wc(y,ue),O.needsLights=dh(y),O.lightsStateVersion=Se,O.needsLights&&(ye.ambientLightColor.value=z.state.ambient,ye.lightProbe.value=z.state.probe,ye.sunLights.value=z.state.sun,ye.sunLightShadows.value=z.state.sunShadow,ye.directionalLights.value=z.state.directional,ye.directionalLightShadows.value=z.state.directionalShadow,ye.spotLights.value=z.state.spot,ye.spotLightShadows.value=z.state.spotShadow,ye.rectAreaLights.value=z.state.rectArea,ye.ltc_1.value=z.state.rectAreaLTC1,ye.ltc_2.value=z.state.rectAreaLTC2,ye.pointLights.value=z.state.point,ye.pointLightShadows.value=z.state.pointShadow,ye.hemisphereLights.value=z.state.hemi,ye.sunShadowMatrix.value=z.state.sunShadowMatrix,ye.sunShadowCascade.value=z.state.sunShadowCascade,ye.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ye.spotLightMatrix.value=z.state.spotLightMatrix,ye.spotLightMap.value=z.state.spotLightMap,ye.pointShadowMatrix.value=z.state.pointShadowMatrix),O.numLightProbeGrids=Hc(w.state.lightProbeGridArray),O.currentProgram=Ke,O.uniformsList=null,Ke}function oh(y,I,W,O,z){const he=Ce.get(y),Se=he.currentProgram.id+","+O+","+z;let ue=he.programVariants.get(Se);return ue===void 0?(ue=Ks(y,I,W),he.programVariants.set(Se,ue)):(he.currentProgram=ue,he.uniformsList=null,he.outputColorSpace=O,he.toneMapping=z),ue}function Vc(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=Sa.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Wc(y,I){const W=Ce.get(y);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.batchingColor=I.batchingColor,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function lh(y,I,W,O,z){I.isScene!==!0&&(I=gn),Ie.resetTextureUnits();const he=I.fog,Se=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?I.environment:null,ue=ie===null?C.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Je.workingColorSpace,xe=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,we=T.get(O.envMap||Se,xe),Fe=O.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ke=!!W.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),ye=!!W.morphAttributes.position,Ze=!!W.morphAttributes.normal,wt=!!W.morphAttributes.color;let ht=fi;O.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ht=C.toneMapping);const ut=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Wt=ut!==void 0?ut.length:0,be=Ce.get(O),jt=w.state.lights;if(Rt===!0&&(nn===!0||y!==ee)){const St=y===ee&&O.id===X;Z.setState(O,y,St)}let nt=!1,Xi=!1;O.version===be.__version?be.needsLights&&be.lightsStateVersion!==jt.state.version||z.isBatchedMesh&&be.batching===!1||!z.isBatchedMesh&&be.batching===!0||z.isBatchedMesh&&be.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&be.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&be.instancing===!1||!z.isInstancedMesh&&be.instancing===!0||z.isSkinnedMesh&&be.skinning===!1||!z.isSkinnedMesh&&be.skinning===!0||z.isInstancedMesh&&be.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&be.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&be.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&be.instancingMorph===!1&&z.morphTexture!==null||be.envMap!==we||O.fog===!0&&be.fog!==he||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Z.numPlanes||be.numIntersection!==Z.numIntersection)||be.vertexAlphas!==Fe||be.vertexTangents!==Ke||be.morphTargets!==ye||be.morphNormals!==Ze||be.morphColors!==wt||be.morphTargetsCount!==Wt||be.numLightProbeGrids!==Hc(w.state.lightProbeGridArray)?nt=!0:(be.outputColorSpace!==ue||be.toneMapping!==ht)&&(Xi=!0):(nt=!0,be.__version=O.version);let $t=be.currentProgram;(nt===!0||Xi===!0)&&($t=Xi===!0?oh(O,I,z,ue,ht):Ks(O,I,z),U&&O.isNodeMaterial&&U.onUpdateProgram(O,$t,be));let Ir=!1,gi=!1,qi=!1;const et=$t.getUniforms(),Gt=be.uniforms;if(pe.useProgram($t.program)&&(Ir=!0,gi=!0,qi=!0),O.id!==X&&(X=O.id,gi=!0),Ir||ee!==y){pe.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),et.setValue(N,"projectionMatrix",y.projectionMatrix),et.setValue(N,"viewMatrix",y.matrixWorldInverse);const Ft=et.map.cameraPosition;Ft!==void 0&&Ft.setValue(N,Fn.setFromMatrixPosition(y.matrixWorld)),_t.logarithmicDepthBuffer&&et.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&et.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),ee!==y&&(ee=y,gi=!0,qi=!0)}if(be.needsLights&&(jt.state.sunShadowMap.length>0&&et.setValue(N,"sunShadowMap",jt.state.sunShadowMap,Ie),jt.state.directionalShadowMap.length>0&&et.setValue(N,"directionalShadowMap",jt.state.directionalShadowMap,Ie),jt.state.spotShadowMap.length>0&&et.setValue(N,"spotShadowMap",jt.state.spotShadowMap,Ie),jt.state.pointShadowMap.length>0&&et.setValue(N,"pointShadowMap",jt.state.pointShadowMap,Ie)),z.isSkinnedMesh){et.setOptional(N,z,"bindMatrix"),et.setOptional(N,z,"bindMatrixInverse");const St=z.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),et.setValue(N,"boneTexture",St.boneTexture,Ie))}z.isBatchedMesh&&(et.setOptional(N,z,"batchingTexture"),et.setValue(N,"batchingTexture",z._matricesTexture,Ie),et.setOptional(N,z,"batchingIdTexture"),et.setValue(N,"batchingIdTexture",z._indirectTexture,Ie),et.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&et.setValue(N,"batchingColorTexture",z._colorsTexture,Ie));const En=W.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&Q.update(z,W,$t),(gi||be.receiveShadow!==z.receiveShadow)&&(be.receiveShadow=z.receiveShadow,et.setValue(N,"receiveShadow",z.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&I.environment!==null&&(Gt.envMapIntensity.value=I.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=ux()),gi){if(et.setValue(N,"toneMappingExposure",C.toneMappingExposure),be.needsLights&&ch(Gt,qi),he&&O.fog===!0&&oe.refreshFogUniforms(Gt,he),oe.refreshMaterialUniforms(Gt,O,ve,Re,w.state.transmissionRenderTarget[y.id]),be.needsLights&&be.numLightProbeGrids>0){const St=b;let Ft=0;for(const ei of w.state.lightProbeGridArray)ei.texture!==null&&(St.textures[Ft]=ei.texture,St.min[Ft]=ei.boundingBox.min,St.max[Ft]=ei.boundingBox.max,St.resolution[Ft]=ei.resolution,Ft++);for(const ei in St)St[ei].length=Ft;Gt.probesSH.value=St.textures,Gt.probesMin.value=St.min,Gt.probesMax.value=St.max,Gt.probesResolution.value=St.resolution}Sa.upload(N,Vc(be),Gt,Ie)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Sa.upload(N,Vc(be),Gt,Ie),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&et.setValue(N,"center",z.center),et.setValue(N,"modelViewMatrix",z.modelViewMatrix),et.setValue(N,"normalMatrix",z.normalMatrix),et.setValue(N,"modelMatrix",z.matrixWorld),O.uniformsGroups!==void 0){const St=O.uniformsGroups;for(let Ft=0,ei=St.length;Ft<ei;Ft++){const Xc=St[Ft];Te.update(Xc,$t),Te.bind(Xc,$t)}}return $t}function ch(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.sunLights.needsUpdate=I,y.sunLightShadows.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function dh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(y,I,W){const O=Ce.get(y);O.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Ce.get(y.texture).__webglTexture=I,Ce.get(y.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:W,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){const W=Ce.get(y);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,W=0){ie=y,K=I,G=W;let O=null,z=!1,he=!1;if(y){const ue=Ce.get(y);if(ue.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(N.FRAMEBUFFER,ue.__webglFramebuffer),ne.copy(y.viewport),Ee.copy(y.scissor),Ue=y.scissorTest,pe.viewport(ne),pe.scissor(Ee),pe.setScissorTest(Ue),X=-1;return}else if(ue.__webglFramebuffer===void 0)Ie.setupRenderTarget(y);else if(ue.__hasExternalTextures)Ie.rebindTextures(y,Ce.get(y.texture).__webglTexture,Ce.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Fe=y.depthTexture;if(ue.__boundDepthTexture!==Fe){if(Fe!==null&&Ce.has(Fe)&&(y.width!==Fe.image.width||y.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(y)}}const xe=y.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(he=!0);const we=Ce.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(we[I])?O=we[I][W]:O=we[I],z=!0):y.samples>0&&Ie.useMultisampledRTT(y)===!1?O=Ce.get(y).__webglMultisampledFramebuffer:Array.isArray(we)?O=we[W]:O=we,ne.copy(y.viewport),Ee.copy(y.scissor),Ue=y.scissorTest}else ne.copy(Pe).multiplyScalar(ve).floor(),Ee.copy(at).multiplyScalar(ve).floor(),Ue=dt;if(W!==0&&(O=H),pe.bindFramebuffer(N.FRAMEBUFFER,O)&&pe.drawBuffers(y,O),pe.viewport(ne),pe.scissor(Ee),pe.setScissorTest(Ue),z){const ue=Ce.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,ue.__webglTexture,W)}else if(he){const ue=I;for(let xe=0;xe<y.textures.length;xe++){const we=Ce.get(y.textures[xe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+xe,we.__webglTexture,W,ue)}}else if(y!==null&&W!==0){const ue=Ce.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ue.__webglTexture,W)}X=-1};function $c(y){const I=Ce.get(y);return(I.__readFormat!==y.format||I.__readType!==y.type)&&(I.__readFormat=y.format,I.__readType=y.type,I.__formatReadable=_t.textureFormatReadable(y.format),I.__typeReadable=_t.textureTypeReadable(y.type)),I}this.readRenderTargetPixels=function(y,I,W,O,z,he,Se,ue=0){if(!(y&&y.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ce.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(xe=xe[Se],Array.isArray(xe)&&(xe=xe[0])),xe){pe.bindFramebuffer(N.FRAMEBUFFER,xe);try{const we=y.textures[ue],Fe=we.format,Ke=we.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ue);const ye=$c(we);if(ye.__formatReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ye.__typeReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-O&&W>=0&&W<=y.height-z&&N.readPixels(I,W,O,z,ae.convert(Fe),ae.convert(Ke),he)}finally{const we=ie!==null?Ce.get(ie).__webglFramebuffer:null;pe.bindFramebuffer(N.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(y,I,W,O,z,he,Se,ue=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ce.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(xe=xe[Se],Array.isArray(xe)&&(xe=xe[0])),xe)if(I>=0&&I<=y.width-O&&W>=0&&W<=y.height-z){pe.bindFramebuffer(N.FRAMEBUFFER,xe);const we=y.textures[ue],Fe=we.format,Ke=we.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ue);const ye=$c(we);if(ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ze),N.bufferData(N.PIXEL_PACK_BUFFER,he.byteLength,N.STREAM_READ),N.readPixels(I,W,O,z,ae.convert(Fe),ae.convert(Ke),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const wt=ie!==null?Ce.get(ie).__webglFramebuffer:null;pe.bindFramebuffer(N.FRAMEBUFFER,wt);const ht=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Pp(N,ht,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ze),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,he),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Ze),N.deleteSync(ht),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,W=0){const O=Math.pow(2,-W),z=Math.floor(y.image.width*O),he=Math.floor(y.image.height*O),Se=I!==null?I.x:0,ue=I!==null?I.y:0;Ie.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,Se,ue,z,he),pe.unbindTexture()},this.copyTextureToTexture=function(y,I,W=null,O=null,z=0,he=0){let Se,ue,xe,we,Fe,Ke,ye,Ze,wt;const ht=y.isCompressedTexture?y.mipmaps[he]:y.image;if(W!==null)Se=W.max.x-W.min.x,ue=W.max.y-W.min.y,xe=W.isBox3?W.max.z-W.min.z:1,we=W.min.x,Fe=W.min.y,Ke=W.isBox3?W.min.z:0;else{const et=Math.pow(2,-z);Se=Math.floor(ht.width*et),ue=Math.floor(ht.height*et),y.isDataArrayTexture?xe=ht.depth:y.isData3DTexture?xe=Math.floor(ht.depth*et):xe=1,we=0,Fe=0,Ke=0}O!==null?(ye=O.x,Ze=O.y,wt=O.z):(ye=0,Ze=0,wt=0);const ut=ae.convert(I.format),Wt=ae.convert(I.type);let be;I.isData3DTexture?(Ie.setTexture3D(I,0),be=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Ie.setTexture2DArray(I,0),be=N.TEXTURE_2D_ARRAY):(Ie.setTexture2D(I,0),be=N.TEXTURE_2D),pe.activeTexture(N.TEXTURE0),pe.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),pe.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),pe.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const jt=pe.getParameter(N.UNPACK_ROW_LENGTH),nt=pe.getParameter(N.UNPACK_IMAGE_HEIGHT),Xi=pe.getParameter(N.UNPACK_SKIP_PIXELS),$t=pe.getParameter(N.UNPACK_SKIP_ROWS),Ir=pe.getParameter(N.UNPACK_SKIP_IMAGES);pe.pixelStorei(N.UNPACK_ROW_LENGTH,ht.width),pe.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ht.height),pe.pixelStorei(N.UNPACK_SKIP_PIXELS,we),pe.pixelStorei(N.UNPACK_SKIP_ROWS,Fe),pe.pixelStorei(N.UNPACK_SKIP_IMAGES,Ke);const gi=y.isDataArrayTexture||y.isData3DTexture,qi=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){const et=Ce.get(y),Gt=Ce.get(I),En=Ce.get(et.__renderTarget),St=Ce.get(Gt.__renderTarget);pe.bindFramebuffer(N.READ_FRAMEBUFFER,En.__webglFramebuffer),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Ft=0;Ft<xe;Ft++)gi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ce.get(y).__webglTexture,z,Ke+Ft),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ce.get(I).__webglTexture,he,wt+Ft)),N.blitFramebuffer(we,Fe,we+Se,Fe+ue,ye,Ze,ye+Se,Ze+ue,N.DEPTH_BUFFER_BIT,N.NEAREST);pe.bindFramebuffer(N.READ_FRAMEBUFFER,null),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||y.isRenderTargetTexture||Ce.has(y)){const et=Ce.get(y),Gt=Ce.get(I);pe.bindFramebuffer(N.READ_FRAMEBUFFER,P),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,V);for(let En=0;En<xe;En++)gi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,et.__webglTexture,z,Ke+En):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,et.__webglTexture,z),qi?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Gt.__webglTexture,he,wt+En):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Gt.__webglTexture,he),z!==0?N.blitFramebuffer(we,Fe,we+Se,Fe+ue,ye,Ze,ye+Se,Ze+ue,N.COLOR_BUFFER_BIT,N.NEAREST):qi?N.copyTexSubImage3D(be,he,ye,Ze,wt+En,we,Fe,Se,ue):N.copyTexSubImage2D(be,he,ye,Ze,we,Fe,Se,ue);pe.bindFramebuffer(N.READ_FRAMEBUFFER,null),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else qi?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(be,he,ye,Ze,wt,Se,ue,xe,ut,Wt,ht.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(be,he,ye,Ze,wt,Se,ue,xe,ut,ht.data):N.texSubImage3D(be,he,ye,Ze,wt,Se,ue,xe,ut,Wt,ht):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,he,ye,Ze,Se,ue,ut,Wt,ht.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,he,ye,Ze,ht.width,ht.height,ut,ht.data):N.texSubImage2D(N.TEXTURE_2D,he,ye,Ze,Se,ue,ut,Wt,ht);pe.pixelStorei(N.UNPACK_ROW_LENGTH,jt),pe.pixelStorei(N.UNPACK_IMAGE_HEIGHT,nt),pe.pixelStorei(N.UNPACK_SKIP_PIXELS,Xi),pe.pixelStorei(N.UNPACK_SKIP_ROWS,$t),pe.pixelStorei(N.UNPACK_SKIP_IMAGES,Ir),he===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&N.generateMipmap(be),pe.unbindTexture()},this.initRenderTarget=function(y){Ce.get(y).__webglFramebuffer===void 0&&Ie.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ie.setTextureCube(y,0):y.isData3DTexture?Ie.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ie.setTexture2DArray(y,0):Ie.setTexture2D(y,0),pe.unbindTexture()},this.resetState=function(){K=0,G=0,ie=null,pe.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const Ma=[],kl=52*Math.PI/180,If=30,ki=Math.sin(kl),Nf="#8f95a6",Fs="#56617c",tn="#f1ead9",ns="#1d2335",Uf="#e6dcc6",zn="#e8bd55",ci=n=>n.citadel?5:n.kind==="station"?3.3:[2.7,3.5,4.5][n.size],hx=n=>{const e=ci(n);return n.kind==="planet"?e*2.5:e*.5+e*(n.citadel?3.4:1.5)},za=n=>{const e=ci(n);return n.kind==="planet"?e*1.5:e*.5+e*.55},px=4.2,Bl=[["#d9c7a0","#b09a74","#efe2c2"],["#93a5b3","#6c7e8e","#b9c7d0"],["#93b08c","#6d8b69","#b7ceac"],["#cc9379","#a56e58","#e3b7a2"],["#cfdcdf","#a2b5ba","#eef5f5"]],Ff={mine:"#a8835a",barracks:"#dd7a63",shield:"#bfe3ff",refinery:"#e3c565",lab:"#7fb2dc",supply:"#9fd0a8",silo:"#d98a8a",depot:"#b8ad96",bay:"#e3c565"};function Li(n,e){if(e.owner===$||n.vis[e.id]===2)return{tier:"live",owner:e.owner,drones:e.drones};const t=n.intel[e.id];return t.snap?{tier:"stale",owner:t.snap.owner,drones:t.snap.drones}:t.seen>=1?{tier:"detected",owner:-1,drones:0}:{tier:"hidden",owner:-1,drones:0}}let rr=null,fn,bi,ji=null,ar,ya,zl=0,Qd=-1,Rs,dr,ur,Ti=null,Gl="";const Cs=new Map,Ps=new Map,sn=320,Ls=.5;let Hl=0,Vl=0;const Ho=new F,Be=(n,e=0)=>{const t=new ze(n);return e&&t.lerp(new ze(Fs),e),new Tc({color:t,flatShading:!0})},In=(n,e=1)=>new Ua({color:n,transparent:e<1,opacity:e,depthWrite:e>=1});function oi(n){n.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(s=>s.dispose()):i&&i.dispose()}),n.removeFromParent()}function Rc(n,e,t,i,s=0,r=Math.PI*2,a=1){const o=new Bt(new wc(n,e,48,1,s,r),In(t,a));return o.rotation.x=-Math.PI/2,o.position.y=i,o}const De=(n,e,t=0,i=0,s=0)=>{const r=new Bt(n,e);return r.position.set(t,i,s),r};function mx(){const n=document.getElementById("gl");rr=new fx({canvas:n,antialias:!0}),fn=new Kp,fn.background=new ze("#2a3350"),bi=new Cn(If,1,1,4e3),fn.add(new pm("#fff4e0","#3d4668",1.5));const e=new _m("#fff0d8",2.2);e.position.set(-.7,1,.45),fn.add(e);const t=[];for(let s=0;s<96;s++)t.push(new F(Math.cos(s/96*Math.PI*2),0,Math.sin(s/96*Math.PI*2)));const i=new Vt().setFromPoints(t);Rs=new Md(i,new Nl({color:tn,transparent:!0,opacity:.55})),dr=new Md(i,new Nl({color:tn,transparent:!0,opacity:.22})),ur=Rc(1,1.1,tn,.12),fn.add(Rs,dr,ur)}function gx(n){for(const p of Cs.values())oi(p.grp);for(const p of Ps.values())oi(p.grp);Cs.clear(),Ps.clear(),Ti&&(oi(Ti),Ti=null,Gl="");for(const p of fn.children.filter(d=>d.userData.world))oi(p);let e=n.seed|0;const t=()=>{e=e+1831565813|0;let p=e;return p=Math.imul(p^p>>>15,p|1),p^=p+Math.imul(p^p>>>7,p|61),((p^p>>>14)>>>0)/4294967296},i=[];for(let p=0;p<1400;p++)i.push(t()*(n.w+1600)-800,-150-t()*500,t()*(n.h+1600)-800);const s=new Vt;s.setAttribute("position",new st(i,3));const r=new am(s,new pf({color:tn,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:.8}));r.userData.world=!0,fn.add(r);const a=["#5f7fa8","#8a6fa0","#b9786a","#5f9c94","#a88f6a"],o=document.createElement("canvas");o.width=o.height=128;const c=o.getContext("2d"),l=c.createRadialGradient(64,64,0,64,64,64);l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(.5,"rgba(255,255,255,0.45)"),l.addColorStop(1,"rgba(255,255,255,0)"),c.fillStyle=l,c.fillRect(0,0,128,128);const u=new Ed(o);for(let p=0;p<18;p++){const d=140+t()*260,f=new Bt(new Vs(d*2,d*2),new Ua({map:u,color:a[Math.floor(t()*a.length)],transparent:!0,opacity:.3,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.set(t()*(n.w+600)-300,-220-t()*200,t()*(n.h+600)-300),f.userData.world=!0,fn.add(f)}ar=document.createElement("canvas"),ar.width=Math.round((n.w+sn*2)*Ls),ar.height=Math.round((n.h+sn*2)*Ls),ya=new Ed(ar),ya.colorSpace=dn,ji=new Bt(new Vs(n.w+sn*2,n.h+sn*2),new Ua({map:ya,transparent:!0,depthWrite:!1})),ji.rotation.x=-Math.PI/2,ji.position.set(n.w/2,-.2,n.h/2),ji.userData.world=!0,ji.renderOrder=-1,fn.add(ji),zl=0}function es(n,e){const t=parseInt(n.slice(1),16);return`rgba(${t>>16&255},${t>>8&255},${t&255},${e})`}function Of(n,e){const t=parseInt(n.slice(1),16),i=s=>Math.max(0,Math.min(255,Math.round(s*e)));return`rgb(${i(t>>16&255)},${i(t>>8&255)},${i(t&255)})`}const Vo=(n,e)=>{let t=n*374761393+e*668265263|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296};function _x(n,e){const t=ar.getContext("2d");t.setTransform(Ls,0,0,Ls,sn*Ls,sn*Ls),t.globalCompositeOperation="source-over",t.clearRect(-sn,-sn,n.w+sn*2,n.h+sn*2),t.fillStyle="rgba(86,97,128,0.8)",t.fillRect(-sn,-sn,n.w+sn*2,n.h+sn*2),t.globalCompositeOperation="destination-out";const i=n.nodes.filter(o=>o.owner===$).map(o=>({x:o.x,y:o.y,r:Za(n,o)}));for(const o of n.fleets)o.owner===$&&!o.lane&&!o.missile&&i.push({x:o.x,y:o.y,r:Ql(n,o)});for(const o of i){const[c,l]=o.r;let u=t.createRadialGradient(o.x,o.y,l*.8,o.x,o.y,l);u.addColorStop(0,"rgba(0,0,0,0.5)"),u.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=u,t.beginPath(),t.arc(o.x,o.y,l,0,7),t.fill(),u=t.createRadialGradient(o.x,o.y,c*.82,o.x,o.y,c),u.addColorStop(0,"rgba(0,0,0,1)"),u.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=u,t.beginPath(),t.arc(o.x,o.y,c,0,7),t.fill()}t.globalCompositeOperation="source-over";const s=n.nodes.map(o=>({n:o,k:Li(n,o)})).filter(o=>o.k.tier!=="hidden"&&o.k.tier!=="detected"&&o.k.owner!==0),r=(o,c,l,u,p)=>{const d=t.createRadialGradient(o,c,0,o,c,l);d.addColorStop(0,es(u,p)),d.addColorStop(.55,es(u,p*.55)),d.addColorStop(1,es(u,0)),t.fillStyle=d,t.beginPath(),t.arc(o,c,l,0,7),t.fill()},a=e/1e3;for(const{n:o,k:c}of s){const l=Wn(n,c.owner);for(let u=0;u<7;u++){const p=Vo(o.id,u)*Math.PI*2+a*.05*(u%2?1:-1),d=6+Vo(u,o.id)*20;r(o.x+Math.cos(p)*d,o.y+Math.sin(p)*d*.8,16+Vo(o.id+7,u)*16,l,.13)}}for(let o=0;o<s.length;o++)for(let c=o+1;c<s.length;c++){const l=s[o],u=s[c];if(l.k.owner!==u.k.owner)continue;const p=u.n.x-l.n.x,d=u.n.y-l.n.y,f=Math.hypot(p,d);if(f>115)continue;const v=Wn(n,l.k.owner),g=Math.floor(f/16);for(let m=1;m<g;m++){const h=m/g,x=Math.sin(a*.3+m+l.n.id)*4;r(l.n.x+p*h-d/f*x,l.n.y+d*h+p/f*x,15,v,.07)}}ya.needsUpdate=!0}function vx(n,e,t){const i=new Cr(e,1).toNonIndexed(),[s,r,a]=Bl[n.id%Bl.length].map(p=>{const d=new ze(p);return t&&d.lerp(new ze(Fs),t),d}),o=i.getAttribute("position"),c=[],l=.05+n.id%3*.12;for(let p=0;p<o.count;p+=3){const d=(o.getY(p)+o.getY(p+1)+o.getY(p+2))/3/e,f=d>.62?a:Math.abs(d-l)<.14||n.size>0&&Math.abs(d+.42)<.1?r:s;for(let v=0;v<3;v++)c.push(f.r,f.g,f.b)}i.setAttribute("color",new st(c,3));const u=new Bt(i,new Tc({vertexColors:!0,flatShading:!0}));return u.rotation.z=.25,u}function oa(n,e,t=!1){const i=new pn,s=Ff[n]||"#999",r="#4b5063";if(n==="mine")i.add(De(new Jt(1,.4,1),Be("#6f6355",e),0,.2),De(new pi(.55,2.1,4),Be(s,e),0,1.4),De(new Jt(.2,.2,1.4),Be(r,e),0,2.2));else if(n==="refinery")i.add(De(new vt(.8,.9,1.5,6),Be(s,e),0,.75),De(new vt(.28,.28,1.4,6),Be(r,e),.3,2.1),De(new vt(.2,.2,.9,6),Be(r,e),-.35,1.9));else if(n==="lab"){if(i.add(De(new vt(.6,.7,2.2,6),Be(s,e),0,1.1),De(new Mr(.7,8,4,0,Math.PI*2,0,Math.PI/2),Be(tn,e),0,2.2)),t){const a=De(new Us(.45),In("#9fe0ff"),0,3.3);a.name="orb",i.add(a)}}else if(n==="supply")i.add(De(new vt(1.1,1.1,.5,8),Be(s,e),0,.25),De(new Mr(.95,8,4,0,Math.PI*2,0,Math.PI/2),Be(tn,e),0,.5),De(new Jt(.5,.5,.5),Be(s,e),1.3,.25));else if(n==="barracks")i.add(De(new Jt(1.5,.9,1),Be(s,e),0,.45),De(new pi(.72,.6,4),Be("#b05a47",e),0,1.2)),i.children[1].rotation.y=Math.PI/4;else if(n==="silo")i.add(De(new vt(.75,.85,1.6,8),Be("#6d7385",e),0,.8)),t?i.add(De(new vt(.32,.32,1.6,6),Be(tn,e),0,2.2),De(new pi(.34,.8,6),Be("#d2604a",e),0,3.4)):i.add(De(new vt(.55,.55,.15,8),Be(r,e),0,1.65));else if(n==="depot")for(const[a,o,c]of[[-.55,.4,0],[.55,.4,0],[0,1.2,0],[0,.4,.9]])i.add(De(new Jt(.95,.8,.8),Be(s,e),a,o,c));else if(n==="bay"){for(const a of[-.9,.9])i.add(De(new Jt(.22,2.2,.22),Be(s,e),a,1.1));i.add(De(new Jt(2.1,.24,.32),Be(s,e),0,2.2),De(new Jt(1.4,.1,1.4),Be(r,e),0,.05))}return i}const kf=[150,30,210,-30].map(n=>n*Math.PI/180);function jd(n,e){const t=ci(n);if(n.kind==="planet"){const s=Math.PI*(.9+.16*e);return{x:Math.cos(s)*(t*2+2.4),y:.75,z:Math.sin(s)*(t*2+2.4),a:s}}const i=kf[e%4];return{x:Math.cos(i)*t*2.3,y:t*.5+t*.55+.6,z:Math.sin(i)*t*2.3,a:i}}function Bf(n,e,t=1,i=!1){const s=new pn;if(s.add(De(new vt(1,1.1,.35,6),Be(i?zn:"#e6dcc6"),0,.17)),s.add(De(new pi(.95,2.3,7),Be(n),0,.35+1.15)),s.add(De(new vt(.98,.98,.18,7),Be(Of(n,.7)),0,.55)),s.add(De(new Cr(.72,0),Be(n),0,.35+2.3+.35)),e){const r=De(new vt(.55,.42,.45,5,1,!0),Be(zn),0,3.7);r.material.side=Vn,s.add(r)}return s.scale.setScalar(t),s}function zf(n,e,t=1.9){const i=new pn,s=new Bt(new pi(.55,2.6,4),Be(Uf));return s.rotation.z=-Math.PI/2,s.scale.set(1,1,1.5),i.add(s,De(new Jt(.9,.12,2.6),Be(n),-.6),De(new Jt(.7,.7,.12),Be(n),-.9,.4)),e.forEach((r,a)=>{const o=Bf(r.c,r.cmd,.36);o.position.set(.1-a*.6,.1,a===0?0:a%2?-.6:.6),i.add(o)}),i.scale.setScalar(t),i}function xx(n,e,t,i,s){const r=new pn,a=ci(e),o=t==="detected",c=t==="stale"?.35:0,l=o?Fs:i===0?Nf:Wn(n,i);let u=null;const p=new Bt(new to(a*1.05,24),In("#0c101e",.4));if(p.rotation.x=-Math.PI/2,p.position.y=.02,r.add(p),o){const v=e.kind==="planet"?new Bt(new Cr(a,1),In(Fs,.9)):new Bt(new vt(a,a,a*1.1,6),In(Fs,.9));return v.position.y=za(e),r.add(v),{grp:r,spin:u,orb:null}}i!==0&&r.add(Rc(a*1.45,a*1.62,l,.06,0,Math.PI*2,c?.5:1));const d=n.sides[i]?pr(n,e):0;if(e.kind==="planet"){const v=vx(e,a,c);if(v.position.y=a*1.5,r.add(v),u=v,e.size===2){const g=new Bt(new ka(a*1.55,a*.09,4,28),Be(Bl[e.id%5][2],c));g.rotation.x=Math.PI/2-.3,g.rotation.y=.2,g.position.y=a*1.5,r.add(g)}for(let g=0;g<e.lv;g++){const m=-Math.PI/2+(g-(e.lv-1)/2)*.55,h=a*1.25+1.7,x=oa("mine",c);x.position.set(Math.cos(m)*h,0,Math.sin(m)*h*.9),r.add(x)}if(e.spec){const g=oa(e.spec,c,e.spec==="lab"&&i===$&&Bs(n,e));g.scale.setScalar(1.5),g.position.set(a*1.3+2.4,0,-a*.2),r.add(g)}for(let g=0;g<d;g++){const m=jd(e,g);r.add(De(new vt(1.5,1.5,.12,6),Be(l,c),m.x,.06,m.z))}}else{const v=a*.5,g=a*1.1,m=v+g,h=e.citadel?"#57526f":Uf;if(r.add(De(new vt(a,a*.92,g,6),Be(h,c),0,v+g/2)),r.add(De(new vt(a*.92,a*.35,a*.45,6),Be(e.citadel?"#413d57":"#b8ad96",c),0,v-a*.22)),r.add(De(new vt(a*.5,a*.68,a*.4,6),Be(l,c),0,m+a*.2)),e.citadel){r.add(De(new pi(a*.3,a*1.9,6),Be(l,c),0,m+a*1.35));const x=De(new ka(a*1.6,a*.07,4,32),Be(l,c),0,v+g*.6);x.rotation.x=Math.PI/2,r.add(x),u=x}else(e.home||e.capital)&&r.add(De(new vt(a*.07,a*.07,a*.9,4),Be(tn,c),0,m+a*.8));for(let x=0;x<Math.min(4,d);x++){const E=kf[x],b=a*1.3,A=De(new Jt(b,a*.14,a*.3),Be("#b8ad96",c),Math.cos(E)*(a*.9+b/2),v+g/2,Math.sin(E)*(a*.9+b/2));A.rotation.y=-E,r.add(A),r.add(De(new vt(a*.5,a*.5,a*.1,6),Be(l,c),Math.cos(E)*a*2.3,v+g/2+a*.05,Math.sin(E)*a*2.3))}for(let x=0;x<e.lv;x++){const E=oa("barracks",c);E.position.set((x-(e.lv-1)/2)*1.8,v+g*.3,-a*1.2),r.add(E)}if(e.spec){const x=oa(e.spec,c,e.spec==="silo"&&e.missile>0);x.scale.setScalar(1.15),x.position.set(-a*.2,m+a*.38,-a*.1),r.add(x)}}for(let v=d-s;v<d;v++){const g=jd(e,v),m=zf(l,[],1.6);m.position.set(g.x,g.y,g.z),m.rotation.y=-g.a,r.add(m)}const f=De(new Mr(a*(e.kind==="planet"?1.75:1.7),16,10),new Tc({color:"#bfe3ff",transparent:!0,opacity:0,depthWrite:!1,flatShading:!0}),0,e.kind==="planet"?a*1.5:a*1.05);return f.name="bubble",f.renderOrder=2,r.add(f),{grp:r,spin:u,orb:r.getObjectByName("orb")||null}}function Sx(n,e,t){const i=new pn,s=e.owner===0?"#d9d9d9":Wn(n,e.owner);let r;if(e.missile){r=new pn;const o=De(new vt(.3,.3,2.2,6),Be(tn));o.rotation.z=Math.PI/2;const c=De(new pi(.34,.9,6),Be("#d2604a"),1.5);c.rotation.z=-Math.PI/2,r.add(o,c,De(new Us(.5),In("#ffb07a",.8),-1.3)),r.scale.setScalar(1.4)}else e.lane?(r=new pn,r.add(De(new Us(.9),In(s)),De(new Us(1.4),In(s,.3)))):r=zf(s,t.map(o=>({c:o===n.cmdSpec?zn:tt[n.specs[o].def].color,cmd:o===n.cmdSpec})),e.probe?1.1:1.9);r.name="model";const a=new Bt(new to(1.6,12),In("#0c101e",.35));return a.rotation.x=-Math.PI/2,a.name="shadow",i.add(r,a),i}function Yt(n,e,t=0){return Ho.set(n,t,e).project(bi),{x:(Ho.x*.5+.5)*Hl,y:(-Ho.y*.5+.5)*Vl}}function Gf(n){return Yt(n.x,n.y,za(n))}function eu(n,e,t,i,s,r,a,o,c){n.font=`800 ${r?13:12}px system-ui`;const l=Math.max(r?30:24,n.measureText(s).width+12),u=r?18:16,p=u+8;n.strokeStyle=tn,n.lineWidth=2,n.lineCap="round",n.beginPath(),n.moveTo(e,t),n.lineTo(e,t-p),n.stroke();const d=Math.sin(o/420+c)*1.6,f=t-p;n.globalAlpha=a?.6:1,n.fillStyle=i,n.beginPath(),n.moveTo(e+1,f),n.lineTo(e+l,f+d),n.lineTo(e+l-5,f+u/2+d),n.lineTo(e+l,f+u+d),n.lineTo(e+1,f+u),n.closePath(),n.fill(),n.fillStyle=Of(i,.78),n.fillRect(e+1,f+u-3,l-4,3),n.fillStyle=ns,n.textAlign="center",n.textBaseline="middle",n.fillText(s,e+l/2-1,f+u/2-.5+d/2),n.globalAlpha=1}function Mx(n,e,t,i){switch(n.save(),n.translate(t,i),n.fillStyle=ns,n.strokeStyle=ns,n.lineWidth=1.6,n.lineJoin="round",n.lineCap="round",n.beginPath(),e){case"mine":n.moveTo(-6,5),n.lineTo(-1,-5),n.lineTo(2,0),n.lineTo(4,-2),n.lineTo(7,5),n.closePath(),n.fill();break;case"barracks":n.moveTo(-5,0),n.lineTo(0,-4),n.lineTo(5,0),n.moveTo(-5,5),n.lineTo(0,1),n.lineTo(5,5),n.stroke();break;case"shield":n.moveTo(0,-6),n.lineTo(5,-4),n.lineTo(4,2),n.lineTo(0,6),n.lineTo(-4,2),n.lineTo(-5,-4),n.closePath(),n.fill();break;case"refinery":n.moveTo(1,-6),n.lineTo(-4,1),n.lineTo(0,1),n.lineTo(-1,6),n.lineTo(4,-1),n.lineTo(0,-1),n.closePath(),n.fill();break;case"lab":n.moveTo(-2,-6),n.lineTo(2,-6),n.moveTo(-1.5,-6),n.lineTo(-1.5,-1),n.lineTo(-5,5),n.lineTo(5,5),n.lineTo(1.5,-1),n.lineTo(1.5,-6),n.stroke(),n.beginPath(),n.moveTo(-3.5,2.5),n.lineTo(3.5,2.5),n.lineTo(5,5),n.lineTo(-5,5),n.fill();break;case"supply":n.arc(0,2,5,Math.PI,0),n.lineTo(5,4),n.lineTo(-5,4),n.closePath(),n.fill();break;case"silo":n.moveTo(0,-7),n.lineTo(3,-2),n.lineTo(3,4),n.lineTo(5,6),n.lineTo(-5,6),n.lineTo(-3,4),n.lineTo(-3,-2),n.closePath(),n.fill();break;case"depot":n.rect(-6,-1,5.5,6),n.rect(.5,-1,5.5,6),n.rect(-3,-6.5,5.5,5),n.fill();break;case"bay":n.moveTo(6,0),n.lineTo(-4,-5),n.lineTo(-2,0),n.lineTo(-4,5),n.closePath(),n.fill();break}n.restore()}function la(n,e,t,i,s,r=!1){const a=t>0?40:22;n.fillStyle=Ff[e],n.beginPath(),n.roundRect(i,s-10,a,20,6),n.fill(),r&&(n.strokeStyle="#9fe0ff",n.lineWidth=2.5,n.beginPath(),n.roundRect(i-1.5,s-11.5,a+3,23,7),n.stroke()),Mx(n,e,i+11,s);for(let o=0;o<3&&t>0;o++)n.fillStyle=o<t?ns:"rgba(29,35,53,0.25)",n.beginPath(),n.arc(i+25+o*5,s,2,0,7),n.fill();return a+4}function yx(n,e,t,i){rr||mx();const{cam:s,w:r,h:a}=t,o=s.z;(Qd!==e.seed||!ji)&&(gx(e),Qd=e.seed),(Hl!==r||Vl!==a)&&(Hl=r,Vl=a,rr.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),rr.setSize(r,a,!1),bi.aspect=r/a,bi.updateProjectionMatrix());const c=a/(o*2*Math.tan(If*Math.PI/360));bi.position.set(s.x,c*Math.sin(kl),s.y+c*Math.cos(kl)),bi.lookAt(s.x,0,s.y),bi.updateMatrixWorld(),i-zl>350&&(zl=i,_x(e,i)),Ma.length=0;for(const g of e.nodes){const m=Li(e,g),h=Cs.get(g.id);if(m.tier==="hidden"){h&&(oi(h.grp),Cs.delete(g.id));continue}const x=m.tier==="live",E=e.intel[g.id].snap,b=x||!E?g:{...g,...E},A=x&&e.sides[g.owner]?Math.max(0,pr(e,g)-Su(e,g)):0,w=g.owner===$&&g.task?Math.round((1-g.task.left/g.task.total)*24):-1,_=m.tier==="detected"?[]:e.sides[b.owner]?cs(e,b):[],S=g.owner===$&&g.spec==="lab"&&Bs(e,g),D=[m.tier,m.owner,b.lv,b.sh,b.spec,b.missile,A,w,_.map(P=>`${P}${e.specs[P].up?"u":""}`).join("."),S,e.sides[b.owner]?pr(e,b):0].join("|");if(h&&h.sig===D)continue;h&&oi(h.grp);const C=xx(e,b,m.tier,m.owner,A),R=ci(g);w>=0&&C.grp.add(Rc(R*1.74,R*1.9,zn,.08,Math.PI/2,Math.max(.05,w/24*Math.PI*2)));const U=[],H=2.5;_.slice(0,5).forEach((P,V)=>{const K=e.specs[P],G=(V-(Math.min(_.length,5)-1)/2)*H,ie=R*1.55+1.6+V%2*.4,X=Bf(P===e.cmdSpec?zn:tt[K.def].color,P===e.cmdSpec,1,K.up);X.position.set(G,0,ie),C.grp.add(X),U.push({spec:P,x:G,z:ie})}),C.grp.position.set(g.x,0,g.y),fn.add(C.grp),Cs.set(g.id,{sig:D,...C,statues:U})}for(const[g,m]of Cs){m.spin&&(m.spin.rotation.y=i/6e3),m.orb&&(m.orb.rotation.y=i/400,m.orb.position.y=3.3+.2*Math.sin(i/300));const h=e.nodes[g],x=m.grp.getObjectByName("bubble");if(x){const E=Li(e,h).tier==="live"?h.shields+wa(e,h):0,b=Math.max(1,ec(e,h)+wa(e,h));x.material.opacity=E>.5?.06+.2*Math.min(1,E/b):0,x.visible=E>.5}for(const E of m.statues){const b=Yt(h.x+E.x,h.y+E.z,px*.65);Ma.push({x:b.x,y:b.y,r:Math.max(12,o*1.6),spec:E.spec})}}const l=e.corridors.map(g=>`${g.a}-${g.b}-${g.owner}`).join(",");if(l!==Gl){Ti&&oi(Ti),Ti=new pn,Gl=l;for(const g of e.corridors){const m=e.nodes[g.a],h=e.nodes[g.b],x=Wn(e,g.owner),E=Math.hypot(h.x-m.x,h.y-m.y),b=new pn;b.add(De(new vt(.35,.35,E,6,1,!0),In(x,.95)),De(new vt(.9,.9,E,8,1,!0),In(x,.18))),b.position.set((m.x+h.x)/2,.8,(m.y+h.y)/2),b.rotation.set(0,-Math.atan2(h.y-m.y,h.x-m.x),Math.PI/2,"YXZ"),Ti.add(b)}fn.add(Ti)}const u=new Set,p=[];for(const g of e.fleets){const m=Ja(e,g);if(!m)continue;p.push({f:g,seen:m}),u.add(g.id);const h=m===2?g.specs:[],x=`${g.owner}|${g.lane?1:0}|${g.missile?1:0}|${h.join(".")}`;let E=Ps.get(g.id);(!E||E.sig!==x)&&(E&&oi(E.grp),E={sig:x,grp:Sx(e,g,h),statues:h.slice()},fn.add(E.grp),Ps.set(g.id,E));const b=e.nodes[g.to],A=E.grp.getObjectByName("model"),w=E.grp.getObjectByName("shadow");E.grp.position.set(g.x,0,g.y),E.grp.rotation.y=-Math.atan2(b.y-g.y,b.x-g.x),A.position.y=g.lane?.8:g.missile?5:3.4+.25*Math.sin(i/400+g.id),g.lane&&(A.rotation.y=i/300),w.visible=!g.lane,w.position.y=.04}for(const[g,m]of Ps)u.has(g)||(oi(m.grp),Ps.delete(g));const d=t.sel?.type==="node"?e.nodes[t.sel.id]:null;if(Rs.visible=dr.visible=!!d&&d.owner===$,ur.visible=!!d,d&&(ur.position.set(d.x,.12,d.y),ur.scale.setScalar(ci(d)*2.05),Rs.visible)){const[g,m]=Za(e,d);Rs.position.set(d.x,.1,d.y),Rs.scale.setScalar(g),dr.position.set(d.x,.1,d.y),dr.scale.setScalar(m)}rr.render(fn,bi),n.clearRect(0,0,r,a),n.lineCap="round";for(const{f:g}of p){if(g.lane)continue;const m=e.nodes[g.to],h=Yt(g.x,g.y),x=Yt(m.x,m.y),E=g.missile?"#d2604a":g.owner===0?"#d9d9d9":Wn(e,g.owner);n.strokeStyle=es(E,.8),n.lineWidth=2.5,n.setLineDash([.1,9]),n.lineDashOffset=-i/50,n.beginPath(),n.moveTo(h.x,h.y),n.lineTo(x.x,x.y),n.stroke(),n.setLineDash([])}for(const g of e.nodes)if(g.owner===$&&g.task?.kind==="corridor"){const m=e.nodes[+g.task.id],h=Yt(g.x,g.y,.8),x=Yt(m.x,m.y,.8),E=1-g.task.left/g.task.total;n.strokeStyle=es(tn,.4),n.lineWidth=2,n.setLineDash([4,6]),n.beginPath(),n.moveTo(h.x,h.y),n.lineTo(x.x,x.y),n.stroke(),n.setLineDash([]),n.strokeStyle=zn,n.lineWidth=3,n.beginPath(),n.moveTo(h.x,h.y),n.lineTo(h.x+(x.x-h.x)*E,h.y+(x.y-h.y)*E),n.stroke()}if(t.targeting&&t.from>=0&&t.hover>=0&&t.hover!==t.from){const g=Yt(e.nodes[t.from].x,e.nodes[t.from].y),m=Yt(e.nodes[t.hover].x,e.nodes[t.hover].y);n.strokeStyle=tn,n.lineWidth=3,n.setLineDash([.1,9]),n.beginPath(),n.moveTo(g.x,g.y),n.lineTo(m.x,m.y),n.stroke(),n.setLineDash([])}const f=e.specs[e.cmdSpec],v=e.nodes.filter(g=>Li(e,g).tier!=="hidden").sort((g,m)=>g.y-m.y);for(const g of v){const m=Li(e,g),h=Yt(g.x,g.y,hx(g));if(h.x<-80||h.y<-40||h.x>r+80||h.y>a+160)continue;const x=Yt(g.x,g.y),E=m.tier==="detected",b=m.tier==="stale",A=E?Fs:m.owner===0?Nf:Wn(e,m.owner),w=ci(g)*o;if(t.targeting&&g.id!==t.from&&(t.glow?t.glow.has(g.id):Qa(e,g)||g.owner===$)){const S=t.hover===g.id;n.strokeStyle=es(zn,S?1:.45+.35*Math.sin(i/250)),n.lineWidth=S?5:3.5,n.shadowColor=zn,n.shadowBlur=S?22:12,n.beginPath(),n.ellipse(x.x,x.y,w*2.3,w*2.3*ki,0,0,7),n.stroke(),n.shadowBlur=0}let _=Yt(g.x,g.y+ci(g)*1.55+3.4).y+8;if(E){const S=Yt(g.x,g.y,za(g));n.fillStyle=tn,n.font="800 14px system-ui",n.textAlign="center",n.textBaseline="middle",n.globalAlpha=.8,n.fillText("?",S.x,S.y),n.globalAlpha=1,_=x.y+w*1.4*ki+10}else{const S=g.home?"⌂ ":g.citadel?"✦ ":g.capital?"♛ ":"";eu(n,h.x,h.y+2,A,S+(b?"~":"")+m.drones,g.home||g.capital||g.citadel,b,i,g.id);let D=x.x+w*1.7+8;const C=Yt(g.x,g.y,za(g)).y,R=(U,H)=>{n.fillStyle=H,n.beginPath(),n.roundRect(D-8,C-8,16,16,4),n.fill(),n.fillStyle=ns,n.font="800 11px system-ui",n.textAlign="center",n.textBaseline="middle",n.fillText(U,D,C+.5),D+=19};g.owner===$&&g.rally&&R("⚑","#6cc5a0"),g.event&&R("!",zn),g.offer&&g.owner!==$&&R("☺","#e9a9c9"),g.hold&&R("◷","#a9dcec"),g.owner===$&&g.prisoners.length&&R("⛓","#e6a183"),f&&f.held&&f.node===g.id&&R("★","#e2604e")}if(o>4.5&&(n.font="700 10px system-ui",n.textAlign="center",n.textBaseline="middle",n.lineJoin="round",n.strokeStyle="rgba(29,35,53,0.7)",n.lineWidth=3,n.strokeText(g.name.toUpperCase(),x.x,_),n.fillStyle=es(tn,E?.45:.85),n.fillText(g.name.toUpperCase(),x.x,_),_+=17),!E&&o>3.2&&m.owner!==0){const S=m.tier==="live"?g:{...g,...e.intel[g.id].snap},D=44+(S.sh?44:0)+(S.spec?26:0)-4;let C=x.x-D/2;n.globalAlpha=b?.65:1,C+=la(n,g.kind==="planet"?"mine":"barracks",S.lv,C,_),S.sh&&(C+=la(n,"shield",S.sh,C,_)),S.spec&&la(n,S.spec,0,C,_,S.spec==="lab"&&g.owner===$&&Bs(e,g)||S.spec==="silo"&&S.missile>0),n.globalAlpha=1}else!E&&o>3.2&&g.sh&&(n.globalAlpha=b?.65:1,la(n,"shield",(m.tier==="live"?g.sh:e.intel[g.id].snap?.sh)||0,x.x-20,_),n.globalAlpha=1)}for(const{f:g,seen:m}of p){if(g.missile)continue;const h=Yt(g.x,g.y,g.lane?2.2:5.2),x=g.owner===0?"#d9d9d9":Wn(e,g.owner);if(t.sel?.type==="fleet"&&t.sel.id===g.id){const E=Yt(g.x,g.y);n.strokeStyle=tn,n.lineWidth=2,n.beginPath(),n.ellipse(E.x,E.y,18,18*ki,0,0,7),n.stroke()}(g.drones>0||m<2)&&eu(n,h.x,h.y,x,m===2?String(g.drones):"?",!1,!1,i,g.id),m===2&&g.specs.forEach((E,b)=>{const A=h.x-10-b*16,w=h.y-12,_=E===e.cmdSpec?zn:tt[e.specs[E].def].color;n.fillStyle=_,n.beginPath(),n.arc(A,w,7.5,0,7),n.fill(),n.strokeStyle=ns,n.lineWidth=1.5,n.stroke(),n.fillStyle=ns,n.font="800 8px system-ui",n.textAlign="center",n.textBaseline="middle",n.fillText(E===e.cmdSpec?"★":tt[e.specs[E].def].tag,A,w+.5),Ma.push({x:A,y:w,r:10,spec:E})})}}const At=n=>(n=Math.max(0,Math.floor(n)),`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`),$e=n=>n.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),$s=(n,e="")=>`<div class="bar ${e}"><i style="width:${Math.max(0,Math.min(100,n*100)).toFixed(1)}%"></i></div>`,Mt=(n,e,t={})=>`<button data-a="${n}" class="btn ${t.cls||""}" ${t.off?"disabled":""}>${e}${t.sub?`<small>${t.sub}</small>`:""}${t.off?`<small class="why">${$e(t.off)}</small>`:""}</button>`,Ln=n=>Math.abs(n)>=10?n.toFixed(0):n.toFixed(1);function Qn(n,e,t=!1,i=!1){const s=tt[e.def],r=e.id===n.cmdSpec;return`<span class="tok ${t?"big":""} ${r?"cmd":""} ${e.up?"up":""}" data-tip="${e.id}" style="--c:${r?"#e8bd55":s.color}">${r?"★":s.tag}${i?`<i>${hr(n,e)}</i>`:""}</span>`}const Hf=n=>`<span class="tok big" style="--c:${tt[n].color}">${tt[n].tag}<i>${tt[n].pow}</i></span>`,Wl=n=>n.cmd?"Commander":tt[n.def].name;function Vf(n,e){const t=tt[e.def];let i=t.text;return e.cmd&&(i+=" "+Vi[e.cmd.arch].text),e.up&&t.up.text&&(i+=` <b class="upt">Upgraded: ${t.up.text}</b>`),i}function bx(n,e){const t=tt[e.def],i=e.cmd?`Commander · ${t.name} ${Vi[e.cmd.arch].name} · level ${e.cmd.lvl}`:jn(e)+(e.up?" +":""),s=e.held?`Prisoner at ${n.nodes[e.node]?.name}`:e.node>=0?`At ${n.nodes[e.node].name}`:e.fleet>=0?`In flight to ${n.nodes[Ya(n,e.fleet)?.to??0].name}`:"",r=e.owner===$?"":` · ${$e(Kn(n,e.owner))}`;let a="";t.charge&&(a+=`<p><b>${t.charge.text.split(" (")[0]}:</b> ${e.owner===$&&e.cd>n.t?`recharging, ${At(e.cd-n.t)}`:"ready"} <small>(recharges in ${At(Kl(n,e))})</small></p>`),!e.cmd&&!e.up&&t.up.text&&e.owner===$&&(a+=`<p class="dim">Upgrade (lead a winning attack): ${t.up.text}</p>`),e.cmd&&e.cmd.perks.length&&(a+=`<p class="dim">${e.cmd.perks.map(c=>gu(c).name).join(" · ")}</p>`);const o=e.owner===$&&!e.cmd?` · upkeep ◆ ${Ln(Yl(n,e))}/min`:"";return`<div class="tiphead">${Qn(n,e,!0)}<div><b>${$e(i)}</b><small>${t.role} · Power ${hr(n,e)}${o}${r}</small><small>${$e(s)}</small></div></div><p>${Vf(n,e)}</p>${a}`}function Ex(n){const e=n.g,t=e.sides[$],i=e.mob,s=e.specs[e.cmdSpec];let r="";if(s&&s.held&&e.cmdLostT>=0)r=`<div class="banner bad" data-a="focus:${s.node}">★ COMMANDER CAPTURED at ${$e(e.nodes[s.node].name)}. Retake it in <b>${At(Uu(e)-(e.t-e.cmdLostT))}</b></div>`;else if(n.mode)r=`<div class="banner">${{launch:"Tap a target for this fleet",corridor:"Tap a glowing node to link a corridor",convoy:"Tap a glowing node to send through corridors",missile:"Tap a glowing node to strike",rallyTo:"Tap the rally point this node should feed"}[n.mode.k]} <button class="btn sm" data-a="cancelmode">Cancel</button></div>`;else if(e.offs.length){const u=e.offs[0];r=`<div class="banner warn" ${u.warned?`data-a="focus:${u.target}"`:""}>⚠ ${$e(Kn(e,u.owner))} offensive ${u.warned?`on ${$e(e.nodes[u.target].name)} `:""}launches in ${At(u.launchT-e.t)}</div>`}const a=[1,2,3,4,5].map(u=>`<i class="${u<=i.stage?"on":""}"></i>`).join(""),o=t.produce&&uc(t),c=t.produce?o?"Building Drones":"Army at the limit your income supports":"Drone production paused",l=Ca(e,$);return`<div class="hudrow">
    <div class="stat" data-a="menu:run" title="Ultanium: income and upkeep per minute"><b class="ult">◆ ${Math.floor(t.ult)}</b><small class="${t.net<0?"bad":""}">${t.net>=0?"+":""}${Ln(t.net)}/min</small></div>
    <button class="stat prod ${t.produce?o?"on":"full":"off"}" data-a="produce" title="${c}. Tap to ${t.produce?"pause":"resume"}."><b>⬢ ${_h(e,$)}</b><small>${t.produce?o?"▶ building":"■ at limit":"⏸ paused"}</small></button>
    <div class="stat rsch" data-a="menu:research" title="Research: progress to the next choice">${t.rpm>0?`<b>⚗ ${At(Math.max(0,(l-t.rp)/t.rpm)*60)}</b>`:"<b>⚗ —</b>"}${$s(t.rp/l,"blue")}</div>
    <div class="stat mob" data-a="menu:intel" title="Coalition mobilization"><span class="pips">${a}</span>${$s(i.prog,"red")}<small>${i.surge?`TOTAL WAR +${i.surge}`:`MOBILIZATION ${i.stage}/5`}</small></div>
    <div class="grow"></div>
    <div class="stat time"><b>${At(e.t)}</b></div>
    <button class="btn ico ${n.paused?"hot":""}" data-a="pause" title="Pause (space)">${n.paused?"▶":"❚❚"}</button>
    <button class="btn ico" data-a="speed" title="Speed">${n.speed}×</button>
    <button class="btn ico desk" data-a="console" title="Tuning console">⚙</button>
    <button class="btn ico" data-a="menu:research" title="Menu (M)">☰</button>
  </div>${r}`}function wx(n){const e=n.g;return e.specs.filter(i=>i.owner===$).sort((i,s)=>(i.cmd?-1:0)-(s.cmd?-1:0)).map(i=>{const s=i.fleet>=0?Ya(e,i.fleet):null,r=i.held?"captured":s?`→ ${e.nodes[s.to].name}`:i.node>=0?e.nodes[i.node].name:"",a=i.node>=0&&!i.held&&!cs(e,e.nodes[i.node]).includes(i.id);return`<div class="rost ${i.held?"held":s?"fly":a?"res":""} ${n.drag?.spec===i.id?"dragging":""}" data-spec="${i.id}" data-tip="${i.id}">${Qn(e,i,!0,!0)}<small>${$e(r)}</small></div>`}).join("")}const Wo=n=>`${n>0?"+":""}${Math.round(n*100)}%`,tu={atk:n=>`Attack +${n}`,per4:n=>`+1 per 4 Drones (max ${n})`,pierce:n=>n>=20?"Ignores shields":`Ignores ${n} shield`,strike:n=>`First strike ${n}`,surv:n=>n>0?`Saves ${n} Drones`:`Loses ${-n} more`,vsNeutral:n=>`+${n} vs neutral`,salvage:()=>"Salvage",speed:n=>`Speed ${Wo(n)}`,stealth:()=>"Unseen",slotFree:()=>"Uses no slot",def:n=>`Defence +${n}`,shield:n=>`Shield +${n}`,regen:()=>"Fast recharge",inc:n=>`◆ +${n}/min`,research:n=>`Research +${n}`,prodSecs:n=>`Drones ${n}s faster`,free:n=>`Feeds ${n}`,lance:n=>`Lances ${n}`,martyr:n=>`Martyr ${n}`,build:()=>"Fast upgrades",upgCost:n=>`Upgrades −${n}`,launchSpeed:n=>`Launch ${Wo(n)}`,fov:n=>`Vision ${Wo(n)}`,income:n=>`◆ +${n}/min`,freeDrones:n=>`Feeds ${n}`,warn:()=>"Warns of attacks",sigint:()=>"Reads fleets",rp:n=>`Research +${n}`,recruitFree:()=>"Free recruits",corridorMax:()=>"More corridors"};function nu(n){return Object.keys(n).filter(e=>n[e]&&tu[e]).map(e=>tu[e](n[e]))}function Wf(n,e,t=""){const i=tt[e.def],s={...i.glob||{},...e.cmd?Vi[e.cmd.arch].glob||{}:{}},r=nu($o(n,e)).concat(nu(s),i.charge?[e.cd>n.t?`${i.charge.text.split(" (")[0]} ${At(e.cd-n.t)}`:`${i.charge.text.split(" (")[0]} ready`]:[]);return`<span class="pchip ${t}" data-tip="${e.id}">${Qn(n,e,!1,!0)}<span>${$e((r.length?r:[i.role]).slice(0,2).join(" · "))}</span></span>`}function $f(n,e,t){if(!e.specs.length)return"";const i=cs(n,e);return`<div class="prow">${e.specs.map(s=>{const r=n.specs[s];return r?i.includes(s)||!t?Wf(n,r):`<span class="pchip res" data-a="promote:${s}" data-tip="${s}">${Qn(n,r,!1,!0)}<span>reserve · tap to activate</span></span>`:""}).join("")}</div>`}function Xf(n,e){const t=wr(n,0,0,[],e,{});return{def:t.def,p:t.parts,max:ec(n,e)}}function qf(n,e,t,i){const s=Xf(n,e),r=s.p.dpow+s.p.ddef+s.p.aegis;return`<div class="kv"><div><small>GARRISON</small><b>⬢ ${e.drones}</b>${i&&Oi(n,e)?`<small>keeps ${Oi(n,e)}</small>`:""}</div><div><small>SHIELD</small><b>◈ ${Math.floor(e.shields)}<i class="of">/${s.max}</i></b>${r?`<small>+${r} ${s.p.aegis?"Aegis and ":""}Power</small>`:""}</div>${t}</div>`}const iu=(n,e=3)=>`<span class="lvp">${Array.from({length:e},(t,i)=>`<i class="${i<n?"on":""}"></i>`).join("")}</span>`;function su(n,e,t,i,s,r){return s>=3?`<div class="upb done"><b>${i}</b>${iu(s)}<small>${r}</small></div>`:`<button class="upb" data-a="up:${t}" ${Ri(n,e,t)?"disabled":""}><b>${i}</b>${iu(s)}<small>◆ ${ja(n,e,t)} · ${Mu(t)}s</small><small>${r}</small></button>`}function Tx(n,e){const t=n.g,i=t.sides[$],s=bn(t,e);let r="";const a=e.kind==="planet"?`<div><small>INCOME</small><b>◆ ${Ln(vu(t,e,s))}</b><small>${Xo(t,e)>e.drones?`needs ${Xo(t,e)} Drones working`:"per minute"}</small></div>`:`<div><small>DRONES</small><b>1 / ${Ln(Fu(t,e,s))}s</b><small>${i.produce?uc(i)?"building":"army at income limit":"production paused"}</small></div>`;if(r+=qf(t,e,a,!0),e.task){const f=e.task,v=f.kind==="lv"?(e.kind==="planet"?"Mine":"Barracks")+` level ${e.lv+1}`:f.kind==="sh"?`Shield level ${e.sh+1}`:f.kind==="spec"?Rn[f.id].name:f.kind==="missile"?"Missile":`Corridor to ${t.nodes[+f.id].name}`;r+=`<div class="task"><div><b>${$e(v)}</b><small>${At(f.left)} left</small>${$s(1-f.left/f.total,"gold")}</div><button class="btn sm" data-a="cancel">✕</button></div>`}e.hold&&(r+=`<div class="task"><div><b>${$e(e.hold.name)}</b><small>Hold with ${e.hold.need}+ Drones · ${At(e.hold.until-t.t)} left</small>${$s(1-(e.hold.until-t.t)/e.hold.total,"blue")}</div></div>`),e.event&&(r+=Mt("event",`! ${Un[e.event].name}`,{cls:"wide gold",sub:"Investigate"}));const o=pr(t,e),c=t.fleets.filter(f=>f.slot&&f.home===e.id&&f.owner===$);r+=`<h3>Fleets <small>${o-c.length} of ${o} ready</small></h3><div class="srow">`;for(let f=0;f<o;f++){const v=c[f];r+=v?`<div class="shipic away"><span class="hull">▲</span><small>→ ${$e(t.nodes[v.to].name)}</small><small>${At(sc(t,v,t.nodes[v.to]))}</small></div>`:'<button class="shipic" data-a="send"><span class="hull">▲</span><small>Launch</small></button>'}if(bu(t,e.id).length&&(r+='<button class="shipic lane" data-a="convoy"><span class="hull">⇄</span><small>Corridor</small></button>'),e.spec==="silo"&&(r+=e.missile?'<button class="shipic missile" data-a="missile"><span class="hull">➹</span><small>Fire missile</small></button>':`<button class="shipic" data-a="up:missile" ${Ri(t,e,"missile")?"disabled":""}><span class="hull">➹</span><small>Build ◆ ${te.missileCost}</small></button>`),r+="</div>",r+='<h3>Upgrades</h3><div class="ups">',r+=su(t,e,"lv",e.kind==="planet"?"Mine":"Barracks",e.lv,e.kind==="planet"?`${Ln(te.mineOut[Math.min(3,e.lv+1)]*te.sizeMult[e.size])}/min next`:`1 Drone / ${te.prodSecs[Math.min(3,e.lv+1)]}s next`),r+=su(t,e,"sh","Shield",e.sh,`holds ${Math.min(3,e.sh+1)*te.shieldPerLv}`),r+="</div>",e.spec)r+=`<div class="task"><div><b>${Rn[e.spec].name}</b><small>${Rn[e.spec].desc}${e.spec==="lab"&&!Bs(t,e)?' <span class="warnp">Not running: needs more Drones here.</span>':""}</small></div></div>`;else{r+=`<div class="specpick"><small>SPECIALTY · choose one, for good · ◆ ${ja(t,e,"spec")}</small><div>`;for(const f in Rn)Rn[f].on===e.kind&&(r+=`<button class="upb" data-a="up:spec:${f}" ${Ri(t,e,"spec",f)?"disabled":""}><b>${Rn[f].name}</b><small>${Rn[f].desc}</small></button>`);r+="</div></div>"}const l=e.rally?null:Pu(t,e),u=t.nodes.some(f=>f.owner===$&&f.rally);r+='<h3>Rally</h3><div class="row wrap">',r+=Mt("rally",e.rally?"⚑ Rally point":"⚐ Make rally point",{cls:e.rally?"hot":"",sub:e.rally?"Spare Drones gather here":"Spare Drones from other nodes will flow here"}),!e.rally&&u&&(r+=Mt("rallyto",l?`Feeds ${$e(l.name)}`:"Feeds nothing",{sub:"Tap to change"})),r+=`<div class="stepper"><small>KEEP HERE</small><div><button class="btn sm" data-a="floor:-1">−</button><b>${Oi(t,e)}</b><button class="btn sm" data-a="floor:1">+</button></div></div>`;const p=tc(t,e.id).length,d=yu(t);if(r+=Mt("corridorpick",`⇄ Corridor <i class="cnt">${p}/${d}</i>`,{sub:`◆ ${Ta(t)} · ${te.corridorTime}s`,off:p>=d?"Maximum built":e.task?"Busy upgrading":i.ult<Ta(t)?"Not enough Ultanium":null}),r+="</div>",e.prisoners.length){const f=ft(t,$);r+="<h3>Prisoners</h3>";for(const v of e.prisoners){const g=t.specs[v],m=g.def==="warlord"||g.def==="archon",h=t.specs.some(x=>x.owner===$&&x.def===g.def);r+=`<div class="task"><div class="rowc">${Qn(t,g,!1,!0)} <b>${$e(jn(g))}</b><small>${$e(Kn(t,g.owner))}</small></div>${m?"":Mt(`ransom:${v}`,`Ransom +${Math.round(te.ransom*(1+(f.ransom||0)))}`,{cls:"sm"})+(g.def==="captain"||h?"":Mt(`recruit:${v}`,`Recruit ◆ ${f.recruitFree?0:te.recruitCost}`,{cls:"sm hot"}))}</div>`}}return`${$f(t,e,!0)}<div class="pbody">${r}</div>`}function Ax(n,e){const t=n.g,i=Li(t,e),s=jl(t,e);let r="",a="";if(i.tier==="detected"||!s.v)r+='<p class="warnp">Detected only. Its forces are unknown. Fly a fleet close, or send a probe (0 Drones, no specialist) to identify it.</p>';else{const l=s.v,u=Xf(t,l);s.live||(r+=`<p class="warnp">Last seen ${At(s.age)} ago. This may be out of date.</p>`),r+=qf(t,l,`<div><small>DEFENCE</small><b>${u.def}</b><small>beat it to win</small></div>`,!1),a=$f(t,l,!1);const p=`${l.kind==="planet"?"Mine":"Barracks"} level ${l.lv}${l.spec?` · ${Rn[l.spec].name}`:""}${l.missile?" · missile ready":""}`;r+=`<p class="dim">${p}</p>`,l.prisoners.some(d=>t.specs[d].owner===$)&&(r+=`<p class="warnp">Holding your people: ${l.prisoners.filter(d=>t.specs[d].owner===$).map(d=>$e(jn(t.specs[d]))).join(", ")}</p>`),e.offer&&(r+='<p class="goodp">☺ Capture this to recruit 1 of 3 specialists.</p>'),e.event&&(r+=`<p class="goodp">! Signal: ${Un[e.event].name}.</p>`),e.capital&&t.sides[l.owner]?.kind==="faction"&&(r+=`<p class="goodp">♛ Capital of the ${Nn[t.sides[l.owner].fac].name}. Capture it and the whole faction surrenders.</p>`),e.citadel&&(r+='<p class="goodp">✦ The Citadel. Capture it to win.</p>')}const o=t.nodes.filter(l=>l.owner===$&&qn(t,l)>0&&(l.specs.length||l.drones)).sort((l,u)=>Ve(l,e)-Ve(u,e)).slice(0,5);r+="<h3>Send a fleet from</h3>",o.length||(r+='<p class="dim">No node has a free launch slot.</p>');for(const l of o)r+=`<button class="btn wide fromrow" data-a="from:${l.id}"><span><b>${$e(l.name)}</b><small>⬢ ${l.drones} · ${At(Ve(l,e)/ac(t,l,[]))} flight</small></span><span class="crewmini">${l.specs.slice(0,4).map(u=>Qn(t,t.specs[u],!1,!0)).join("")||"<small>no leader</small>"}</span></button>`;const c=t.nodes.find(l=>l.owner===$&&!eo(t,l,e));return c&&(r+=Mt(`missilefrom:${c.id}`,"➹ Missile strike",{cls:"wide gold",sub:`From ${$e(c.name)}: wipes the shield and kills ${te.missileKill} Drones`})),`${a}<div class="pbody">${r}</div>`}function Yf(n,e){const t=n.nodes[e.from],i=jl(n,n.nodes[e.to]).v;if(!i)return 0;for(let s=1;s<=t.drones;s++)if(wr(n,$,s,e.specs,i).win)return s;return 0}function Kf(n,e){const t=n.nodes[e.from],i=n.nodes[e.to],s=e.lane?0:Ve(t,i)/ac(n,t,e.specs);let r=`<div class="lstat"><span>⬢ <b>${e.drones}</b> go</span><span>⬢ <b>${t.drones-e.drones}</b> stay</span>${e.lane?"<span>via corridor</span>":`<span>arrives <b>${At(s)}</b></span>`}</div>`;if(e.specs.includes(n.cmdSpec)&&i.owner!==$&&(r+='<p class="warnp">★ Commander aboard. If this attack fails at an enemy node they are captured.</p>'),i.owner===$)return r;if(!e.specs.length)return r+(e.drones?'<p class="badp"><b>An attack needs a specialist to lead it.</b> Add one, or set Drones to 0 to send a probe.</p>':'<p class="warnp">Probe: identifies the target and is lost.</p>');const a=jl(n,i);if(!a.v)return r+'<p class="badp"><b>Unknown forces. Battle outcome unavailable.</b></p>';const o=wr(n,$,e.drones,e.specs,a.v),c=o.parts,l=[`${c.drones} Drones`,`${c.pow} Power`].concat(c.bonus?[`+${c.bonus} bonus`]:[]).join(" + "),u=[`${c.garr} Drones`].concat(c.shield?[`${c.shield} shield`]:[],c.dpow?[`${c.dpow} Power`]:[],c.ddef?[`${c.ddef} bonus`]:[],c.aegis?[`${c.aegis} Aegis`]:[]).join(" + ");r+=`<div class="versus"><div><small>ATTACK</small><b>${o.atk}</b><span>${l}</span></div><i>vs</i><div><small>DEFENCE</small><b>${o.def}</b><span>${u}</span></div></div>`,c.lance&&(r+=`<p class="warnp">${c.lance} of your Drones are destroyed before landing.</p>`),c.strike&&(r+=`<p class="goodp">Your first strike destroys ${c.strike} defenders.</p>`);const p=n.specs[e.specs[0]];return r+=o.win?`<p class="goodp"><b>Victory expected.</b> ${o.surv} Drones survive.${p&&!p.cmd&&!p.up?` ${Wl(p)} leads and will be upgraded.`:""}</p>`:`<p class="badp"><b>Defeat expected.</b> Short by ${o.def-o.atk+1}. ${i.owner===0?"Drones are lost; the crew returns.":"Drones are lost and the crew is captured."}</p>`,a.live||(r+=`<p class="warnp">Based on intelligence ${At(a.age)} old.</p>`),r}function Rx(n){const e=n.g,t=n.launch,i=e.nodes[t.from],s=e.nodes[t.to];if(i.owner!==$)return n.launch=null,"";const r=t.lane?99:mr(e,i),a=t.specs.map((l,u)=>`<button class="cslot full" data-a="lspec:${l}">${Qn(e,e.specs[l],!0,!0)}<small>${u===0&&!t.lane?"LEADER":Wl(e.specs[l])}</small></button>`),o=Array(Math.max(0,Math.min(r,3+(r>3?r-3:0))-t.specs.length)).fill(0).map((l,u)=>`<div class="cslot"><small>${t.specs.length+u===0?"leader":"empty"}</small></div>`),c=i.specs.filter(l=>!t.specs.includes(l));return`<div class="phead"><div><h2>${$e(i.name)} → ${$e(s.name)}</h2><small>${t.lane?"Through corridors: no launch slot needed":s.owner===$?"Reinforce":"Attack"}</small></div><button class="btn ico" data-a="lcancel">✕</button></div>
  <div class="pbody">
    <div class="crewslots" data-drop="crew">${a.join("")}${o.join("")}</div>
    ${c.length?`<div class="availrow"><small>AT ${$e(i.name.toUpperCase())} · tap or drag into a slot</small><div>${c.map(l=>`<button class="chip" data-a="lspec:${l}">${Qn(e,e.specs[l],!1,!0)} ${$e(Wl(e.specs[l]))}</button>`).join("")}</div></div>`:""}
    <input type="range" id="lslider" min="0" max="${i.drones}" value="${t.drones}">
    <div class="quick">${Mt("lq:none","0",{cls:"sm"})}${t.lane||s.owner===$?"":Mt("lq:min","Just enough",{cls:"sm"})}${Mt("lq:half","Half",{cls:"sm"})}${Mt("lq:all","All",{cls:"sm"})}</div>
    <div id="preview">${Kf(e,t)}</div>
    <div class="row">${Mt("lcancel","Cancel")}${Mt("lconfirm",t.lane?"Send":"Launch",{cls:"hot grow"})}</div>
  </div>`}function Cx(n,e){const t=n.g,i=Ja(t,e),s=t.nodes[e.to],r=e.missile?"missile":e.lane?"convoy":e.probe?"probe":"fleet";let a=`<div class="kv"><div><small>DRONES</small><b>⬢ ${i===2?e.drones:"?"}</b></div><div><small>ARRIVES IN</small><b>${At(sc(t,e,s))}</b></div><div><small>HEADING</small><b data-a="focus:${s.id}" class="link">${$e(s.name)}</b></div></div>`;return i===2&&e.specs.length?a+=`<div class="prow wrap">${e.specs.map(o=>Wf(t,t.specs[o])).join("")}</div>`:i<2&&(a+='<p class="warnp">Strength unknown until it is inside full-intelligence range.</p>'),`<div class="phead"><div><h2><span class="dot" style="background:${Wn(t,e.owner)}"></span>${$e(Kn(t,e.owner))} ${r}</h2><small>In flight</small></div><button class="btn ico" data-a="close">✕</button></div><div class="pbody">${a}</div>`}function Px(n){const e=n.g;if(n.launch)return Rx(n);if(!n.sel)return"";if(n.sel.type==="fleet"){const a=Ya(e,n.sel.id);return!a||!Ja(e,a)?(n.sel=null,""):Cx(n,a)}const t=e.nodes[n.sel.id],i=Li(e,t),s=`${t.citadel?"Citadel":t.kind==="planet"?["Small","Medium","Large"][t.size]+" planet":t.home?"Home station":"Station"} · ${i.tier==="detected"?"Unidentified":i.owner===0?"Neutral":$e(Kn(e,i.owner))}`;return`<div class="phead"><div><h2><span class="dot" style="background:${i.tier==="detected"?"#56617c":i.owner===0?"#8f95a6":Wn(e,i.owner)}"></span>${$e(t.name)}</h2><small>${s}</small></div><button class="btn ico" data-a="close">✕</button></div>${t.owner===$?Tx(n,t):Ax(n,t)}`}function Zf(n,e=[]){const t=n.sides[$].techs,i=s=>{const r=Pt[s],a=t.includes(s),o=!!r.excl&&t.includes(r.excl);return`<div class="tn ${a?"have":""} ${o?"locked":""} ${e.includes(s)?"offer":""}" title="${$e(r.desc)}">${a?"✓ ":""}${r.name}</div>`};return`<div class="tree">${ph.map(s=>{const r=Object.values(Pt).filter(o=>o.branch===s),a=o=>`<div class="tcol">${r.filter(c=>c.tier===o).map(c=>i(c.id)).join("")}</div>`;return`<div class="trow"><small>${s}</small>${[1,2,3,4].map(a).join("<i>›</i>")}</div>`}).join("")}</div>`}function Lx(n){const e=n.g,t=e.sides[$],i=[["research","Research"],["roster","Specialists"],["relics","Relics"],["intel","Coalition"],["log","Log"],["run","Run"]];let s="";if(n.menu==="research"){const r=Ca(e,$),a=e.nodes.filter(o=>o.owner===$&&o.spec==="lab");s=`<div class="task"><div><b>Next choice</b><small>${t.rpm>0?`${Ln(t.rpm)} research per minute · ${At(Math.max(0,(r-t.rp)/t.rpm)*60)} to go`:"No research yet: give a planet the Lab specialty"}</small>${$s(t.rp/r,"blue")}</div></div>
      <p class="dim">Each time the bar fills you choose 1 of 3 cards from the edge of the tree. More Labs fill it faster. In a doctrine pair (stacked boxes) choosing one locks the other. Labs: ${a.length?a.map(o=>`<span class="link" data-a="focus:${o.id}">${$e(o.name)}${Bs(e,o)?"":" (not staffed)"}</span>`).join(", "):"none"}.</p>${Zf(e)}`;for(const o of t.techs)s+=`<div class="tech done"><b>✓ ${Pt[o].name}</b><small>${Pt[o].desc}</small></div>`}else if(n.menu==="roster")s=e.specs.filter(a=>a.owner===$).map(a=>`<div class="spec" data-a="${a.node>=0?`focus:${a.node}`:"noop"}">${Qn(e,a,!0,!0)}<div><h4>${$e(a.cmd?`Commander · ${tt[a.def].name} ${Vi[a.cmd.arch].name} · L${a.cmd.lvl}`:jn(a)+(a.up?" +":""))} <small>${tt[a.def].role}</small></h4><small>${a.held?"Prisoner at ":a.node>=0?"At ":"In flight"}${a.node>=0?$e(e.nodes[a.node].name):""}${a.cmd?"":` · upkeep ◆ ${Ln(Yl(e,a))}/min`}</small><p>${Vf(e,a)}</p>${a.cmd&&a.cmd.lvl<5?$s((a.cmd.xp-te.xpLevels[a.cmd.lvl-1])/(te.xpLevels[a.cmd.lvl]-te.xpLevels[a.cmd.lvl-1]),"gold"):""}</div></div>`).join("");else if(n.menu==="relics")s=t.relics.map(r=>`<div class="relic ${Mn[r].rarity}"><b>${Mn[r].name}</b><small>${Mn[r].rarity}</small><p>${Mn[r].desc}</p></div>`).join("")||'<p class="dim">No relics yet. Events and Warlords yield them.</p>';else if(n.menu==="intel"){const r=is[e.sides[e.archon].fac],a=e.mob;s=`<div class="fac" style="--c:#e07aa0"><b>✦ ${r.name} ${r.title}</b><p>${r.desc}</p><p>Mobilization stage ${a.stage}/5${a.surge?` · total war +${a.surge}`:""} (${Math.round(a.prog*100)}% to the next). Each stage gives every faction more Drones, larger offensives and new technology. Capturing enemy nodes sets it back; a captured Warlord removes a whole stage.</p><p>Citadel Aegis: ${wa(e,e.nodes[e.citadel])} (${e.factions.filter(o=>!e.sides[o].broken).length} layers).</p></div>`;for(const o of e.factions){const c=e.sides[o],l=Nn[c.fac],u=e.nodes.filter(p=>e.intel[p.id].snap?.owner===o||e.vis[p.id]===2&&p.owner===o);s+=u.length||c.broken?`<div class="fac" style="--c:${l.color}"><b>${l.name}${c.broken?" · SURRENDERED":""}</b><p>${l.desc}</p><p>${l.tell}</p><p class="dim">Known nodes: ${u.length} · Technology: ${c.techs.map(p=>Pt[p].name).join(", ")||"none"}</p>${u.filter(p=>p.capital).map(p=>`<p class="link" data-a="focus:${p.id}">♛ Capital located: ${$e(p.name)}</p>`).join("")}</div>`:'<div class="fac" style="--c:#56617c"><b>Unidentified faction</b><p class="dim">Not yet encountered.</p></div>'}}else if(n.menu==="log")s=e.log.slice().reverse().map(r=>`<div class="logl ${r.kind}" ${r.node>=0?`data-a="focus:${r.node}"`:""}><small>${At(r.t)}</small>${$e(r.msg)}</div>`).join("");else{const r=e.stats;s=`<div class="kv"><div><small>INCOME</small><b>◆ ${Ln(t.inc)}</b><small>per minute</small></div><div><small>UPKEEP</small><b>◆ ${Ln(t.upk)}</b><small>Drones and specialists</small></div><div><small>NET</small><b class="${t.net<0?"bad":""}">◆ ${Ln(t.net)}</b><small>per minute</small></div></div>
      <p class="dim">Each Drone costs ◆ ${te.upkeepDrone}/min; your first ${te.freeBase} are free. Specialists cost ◆ ${te.upkeepPower}/min per point of Power. Stations stop building once upkeep reaches ${Math.round(te.armyShare*100)}% of income. If you run out of Ultanium with negative income, Drones desert.</p>
      <div class="kv"><div><small>SEED</small><b>${e.seed}</b></div><div><small>THREAT</small><b>${e.threat}</b></div><div><small>NODES</small><b>${e.nodes.filter(a=>a.owner===$).length}/${e.nodes.length}</b></div></div>
      <p class="dim">Captures ${r.captures} · Nodes lost ${r.nodesLost} · Drones lost ${r.dronesLost}. The run saves automatically to this device.</p>
      ${Mt("help","How to play",{cls:"wide"})}${Mt("abandon","Abandon run",{cls:"wide"})}`}return`<div class="sheet"><div class="phead"><div class="tabs">${i.map(([r,a])=>`<button data-a="menu:${r}" class="${n.menu===r?"on":""}">${a}</button>`).join("")}</div><button class="btn ico" data-a="menu:">✕</button></div><div class="pbody">${s}</div></div>`}function Dx(n,e){const t=tt[n];return`<button class="card" data-a="choose:${e}">${Hf(n)}<h3>${t.name}</h3><small>${t.role} · Power ${t.pow} · upkeep ◆ ${Ln(t.pow*te.upkeepPower)}/min</small><p>${t.text}</p>${t.charge?`<p class="dim">${t.charge.text}</p>`:""}<p class="dim">Upgrade: ${t.up.text}</p></button>`}function Ix(n){const e=n.g;if(e.result){const a=e.stats,o=e.result==="win";return`<div class="modal end ${o?"win":"lose"}"><h1>${o?"Victory":"Defeat"}</h1><p>${$e(e.resultWhy)}</p>
      <div class="kv"><div><small>TIME</small><b>${At(e.t)}</b></div><div><small>CAPTURES</small><b>${a.captures}</b></div><div><small>WARLORDS</small><b>${a.warlords}</b></div></div>
      <p class="dim">Nodes lost ${a.nodesLost} · Drones built ${a.dronesMade} · Drones lost ${a.dronesLost}<br>Specialists ${a.specs} · Relics ${a.relics} · Technologies ${a.techs} · Events ${a.events}</p>
      ${o&&e.threat<5?`<p class="goodp">Threat level ${e.threat+1} unlocked.</p>`:""}
      <div class="row">${Mt("title","Main menu")}${Mt("again","New run",{cls:"hot grow"})}</div></div>`}const t=e.pending[0];if(!t)return"";let i="";if(t.kind==="draft")return i=t.opts.map((a,o)=>{const c=tt[a.base],l=Vi[a.arch];return`<button class="card" data-a="choose:${o}">${Hf(a.base)}<h3>${c.name} ${l.name}</h3><small>${l.blurb} · Power 3</small><p>${c.text}</p><p>${l.text}</p></button>`}).join(""),`<div class="modal"><h2>Choose your Commander</h2><p class="dim">Your strongest specialist, free of upkeep, who gains levels as you capture nodes. If they are captured you have ${At(te.rescueSecs)} to retake the node holding them, or the run ends.</p><div class="cards">${i}</div></div>`;if(t.kind==="spec")return i=t.opts.map((a,o)=>Dx(a,o)).join(""),`<div class="modal"><h2>${$e(t.title)}</h2><p class="dim">Recruit one, or none: every specialist costs upkeep. A fleet needs a specialist to lead an attack, and the leader of a winning attack is upgraded once.</p><div class="cards">${i}</div>${Mt("choose:-1","Skip",{cls:"wide"})}</div>`;if(t.kind==="relic")return i=t.opts.map((a,o)=>{const c=Mn[a];return`<button class="card relic ${c.rarity}" data-a="choose:${o}"><h3>${c.name}</h3><small>${c.rarity}</small><p>${c.desc}</p></button>`}).join(""),`<div class="modal"><h2>Choose a relic</h2><p class="dim">Relics last for the whole run.</p><div class="cards">${i}</div></div>`;if(t.kind==="perk"){i=t.opts.map((o,c)=>{const l=gu(o);return`<button class="card" data-a="choose:${c}"><h3>${l.name}</h3><p>${l.desc}</p></button>`}).join("");const a=e.specs[e.cmdSpec].cmd.lvl;return`<div class="modal"><h2>${$e(t.title)}</h2>${a===3||a===5?'<p class="goodp">Commander Power +1.</p>':""}<div class="cards">${i}</div></div>`}if(t.kind==="tech")return i=t.opts.map((a,o)=>{const c=Pt[a];return`<button class="card tech${c.excl?" doc":""}" data-a="choose:${o}"><small>${c.branch} · tier ${c.tier}</small><h3>${c.name}</h3><p>${c.desc}</p>${c.excl?`<small class="why">Doctrine: locks out ${Pt[c.excl].name}</small>`:""}</button>`}).join(""),`<div class="modal"><h2>Research: choose one</h2><div class="cards">${i}</div>${Zf(e,t.opts)}</div>`;const s=Un[t.event],r=e.nodes[t.node];return i=s.choices.map((a,o)=>{const c=Nu(e,r,a);if(a.req&&c&&c.startsWith("Needs your"))return`<button class="card locked" disabled><h3>${a.label}</h3><small>${$e(c)}</small></button>`;const l=[a.ult?`◆ ${a.ult}`:"",a.drones?`⬢ ${a.drones}`:""].filter(Boolean).join(" · ");return`<button class="card" data-a="choose:${o}" ${c?"disabled":""}><h3>${a.label}</h3>${l?`<small>Cost ${l}</small>`:""}<p>${a.desc}</p>${c?`<small class="why">${$e(c)}</small>`:""}</button>`}).join(""),`<div class="modal"><h2>${s.name}</h2><small>${$e(r.name)} · ⬢ ${r.drones} here</small><p class="flavour">${s.text}</p><div class="cards">${i}</div>${Mt("choose:-1","Decide later",{cls:"wide"})}</div>`}function Nx(n){const e=n.meta,t=Array.from({length:e.unlocked+1},(i,s)=>`<button class="chip ${n.newThreat===s?"on":""}" data-a="threat:${s}">${s}</button>`).join("");return`<div class="title"><h1>SPACE<span>NODES</span></h1><p class="tag">Recruit your specialists. Send the right three. Take the Citadel before the Coalition takes you.</p>
    ${n.hasSave?Mt("continue","Continue run",{cls:"wide hot"}):""}
    ${Mt("newrun","New run",{cls:`wide ${n.hasSave?"":"hot"}`})}
    <div class="lv"><small>THREAT LEVEL</small><div class="chips">${t}</div><small class="dim">${n.newThreat===0?"Standard campaign.":"Tougher garrisons and faster mobilization."} Win to unlock the next.</small></div>
    ${Mt("help","How to play",{cls:"wide"})}
    <small class="dim">Runs ${e.runs} · Wins ${e.wins}</small></div>`}function ru(){return`<div class="modal help"><h2>How to play</h2>
  <p><b>Goal.</b> Capture <b>The Citadel</b> ✦. You lose if your <b>Commander</b> ★ is captured and not rescued in time.</p>
  <p><b>Specialists are the game.</b> Each has a <b>Power</b> number and one passive effect. Power adds to attack when they fly with a fleet and to defence where they stand. A fleet <b>needs a specialist to lead</b> an attack, and the leader of a winning attack is upgraded once. Three work together at a node or in a fleet; extras wait in reserve.</p>
  <p><b>Roster.</b> Your specialists are always shown down the side. Tap one to jump to them, hold (or hover) for details, <b>drag one onto a friendly node</b> to send them there.</p>
  <p><b>Attacking.</b> Tap one of your nodes, tap a ready fleet ▲, then tap the target. Put specialists in the crew slots, set the Drones, and read the exact outcome before you launch. Attack must beat Drones + shield + defending Power.</p>
  <p><b>Economy.</b> Planets mine Ultanium ◆; stations build Drones ⬢ on their own. Every Drone and specialist costs upkeep, so your income sets the size of your army. The ⬢ button in the top bar pauses production when you want to save.</p>
  <p><b>Nodes.</b> Each has two levels to raise (Mine or Barracks, and Shield) and one <b>specialty</b> chosen once: Refinery, Lab or Supply world for planets; Missile Silo, Depot or Launch Bay for stations.</p>
  <p><b>Rally points.</b> Mark a node ⚑ and spare Drones flow to it by themselves. Corridors ⇄ make that twice as fast and carry specialists without using a fleet.</p>
  <p><b>Research.</b> Labs fill a bar; when it is full you choose 1 of 3 cards.</p>
  <p><b>The Coalition.</b> Three factions and an Archon. Mobilization grows their armies over time. Capture a faction's capital ♛ and the whole faction surrenders.</p>
  <p><b>Controls.</b> Drag or WASD to scroll, pinch or wheel to zoom, Space pauses, 1/2/3 speed, M menu, H home, Esc cancels.</p>
  ${Mt("helpclose","Got it",{cls:"wide hot"})}</div>`}Ih();const Os="spacenodes.save.v3",Cc="spacenodes.meta.v1",Wi=n=>document.getElementById(n),mn=Wi("map"),ba=mn.getContext("2d"),au=Wi("hud"),os=Wi("roster"),ca=Wi("panel"),da=Wi("overlay"),ou=Wi("toasts"),As=Wi("tip"),or=Wi("ghost"),di={get:n=>{try{return localStorage.getItem(n)}catch{return null}},set:(n,e)=>{try{localStorage.setItem(n,e)}catch{}},del:n=>{try{localStorage.removeItem(n)}catch{}}},B={g:null,speed:1,paused:!1,sel:null,menu:null,mode:null,launch:null,drag:null,screen:"title",newThreat:0,meta:{runs:0,wins:0,unlocked:0,best:0,...JSON.parse(di.get(Cc)||"{}")},hasSave:!!di.get(Os)},Xe={x:100,y:150,z:7};let ai=null,Hi=0,ls=0,Jf=-1,bt=!0,lr=0,Ga=!1,lu="title",$l=!1;const Ei=[];window.__app=B;window.__nodeScreen=n=>Gf(B.g.nodes[n]);const Ux=Fh({game:()=>B.g,selected:()=>B.sel?.type==="node"?B.sel.id:-1,setSpeed:n=>{B.speed=n,bt=!0},refresh:()=>{bt=!0}});function cu(n){B.g=n,B.screen="game",B.sel=null,B.menu=null,B.mode=null,B.launch=null,B.drag=null,B.paused=!1,B.speed=1;const e=n.nodes[n.home];Xe.x=e.x+8,Xe.y=e.y,Xe.z=Math.max(6.5,Math.min(9,Hi/52)),lr=n.log.length,Ei.length=0,bt=!0,$l=!1}function Pc(){B.g&&!B.g.result&&B.screen==="game"&&(di.set(Os,JSON.stringify(B.g)),B.hasSave=!0)}function Fx(){const n=B.g;di.del(Os),B.hasSave=!1,B.meta.runs++,n.result==="win"&&(B.meta.wins++,B.meta.unlocked=Math.min(5,Math.max(B.meta.unlocked,n.threat+1))),di.set(Cc,JSON.stringify(B.meta))}function Ai(n){n&&(Ei.push({msg:n,kind:"warn",node:-1,until:performance.now()+3500}),bt=!0)}function Kt(n){const e=Yh(B.g,n);return Ai(e),bt=!0,!e}function Qf(n){const e=B.g.nodes[n],t=Hi<820,i=!!B.sel||!!B.launch;ai={x:e.x+(!t&&i?190/Xe.z:0),y:e.y+(t&&i?ls*.22/(Xe.z*ki):0)}}function ro(n,e){B.sel={type:n,id:e},B.launch=null,bt=!0,n==="node"&&Qf(e)}function Ea(n,e,t){const i=B.g,s=i.nodes[n],r=i.nodes[e];if(s.owner!==$)return Ai("Not your node");if(n===e)return Ai("Pick a different node");if(t){if(!Fi(i,n,e))return Ai("No corridor route to that node")}else{if(r.owner!==$&&!Qa(i,r))return Ai("Target is not in detection range");if(qn(i,s)<1)return Ai("No free launch slot there")}const a={from:n,to:e,drones:0,specs:[],lane:t},o=Math.max(0,s.drones-Oi(i,s));if(r.owner===$)a.drones=o;else{a.specs=cs(i,s).filter(l=>l!==i.cmdSpec).slice(0,mr(i,s));const c=Yf(i,a);a.drones=c?Math.min(s.drones,c+1):o}B.launch=a,B.mode=null,B.sel={type:"node",id:e},bt=!0,Qf(e)}function Ha(n){const[e,...t]=n.split(":"),i=B.g,s=B.sel?.type==="node"?B.sel.id:-1,r=a=>{B.mode={k:a,from:s},B.sel=null,B.launch=null};switch(e){case"newrun":case"again":cu(zh(Date.now()%2147483647|0,B.newThreat));break;case"continue":{const a=di.get(Os);if(a)try{const o=JSON.parse(a);ds(o),cu(o)}catch{di.del(Os),B.hasSave=!1}break}case"title":B.screen="title",B.g=null;break;case"threat":B.newThreat=+t[0];break;case"help":lu=B.screen,B.screen="help",B.menu=null;break;case"helpclose":B.screen=lu;break;case"abandon":confirm("Abandon this run?")&&(di.del(Os),B.hasSave=!1,B.meta.runs++,di.set(Cc,JSON.stringify(B.meta)),B.screen="title",B.g=null);break;case"pause":B.paused=!B.paused,B.paused&&Pc();break;case"speed":B.speed=B.speed===1?2:B.speed===2?4:1;break;case"console":Ux.toggle();break;case"menu":B.menu=t[0]||null;break;case"close":B.sel=null,B.launch=null;break;case"focus":B.menu=null,ro("node",+t[0]);break;case"cancelmode":B.mode=null;break;case"up":Kt({c:"up",node:s,what:t[0],id:t[1]});break;case"cancel":Kt({c:"cancel",node:s});break;case"event":Kt({c:"event",node:s});break;case"ransom":Kt({c:"ransom",spec:+t[0],recruit:!1});break;case"recruit":Kt({c:"ransom",spec:+t[0],recruit:!0});break;case"choose":Kt({c:"choose",idx:+t[0]});break;case"produce":Kt({c:"produce"});break;case"promote":Kt({c:"promote",spec:+t[0]});break;case"rally":Kt({c:"rally",node:s});break;case"floor":Kt({c:"floor",node:s,v:Oi(i,i.nodes[s])+ +t[0]});break;case"send":r("launch");break;case"convoy":r("convoy");break;case"corridorpick":r("corridor");break;case"missile":r("missile");break;case"rallyto":r("rallyTo");break;case"from":Ea(+t[0],s,!1);break;case"missilefrom":Kt({c:"missile",from:+t[0],to:s});break;case"lspec":{const a=B.launch,o=+t[0];a.specs.includes(o)?a.specs=a.specs.filter(c=>c!==o):a.lane||a.specs.length<mr(i,i.nodes[a.from])?a.specs=a.specs.concat(o):Ai("The crew is full");break}case"lq":{const a=B.launch,o=i.nodes[a.from].drones;a.drones=t[0]==="all"?o:t[0]==="half"?Math.ceil(o/2):t[0]==="none"?0:Yf(i,a)||o;break}case"lcancel":B.launch=null;break;case"lconfirm":{const a=B.launch;Kt(a.lane?{c:"convoy",from:a.from,to:a.to,drones:a.drones,specs:a.specs}:{c:"launch",from:a.from,to:a.to,drones:a.drones,specs:a.specs})&&(B.launch=null,B.sel=null);break}}bt=!0}document.addEventListener("click",n=>{const e=n.target;!e.closest("#tip")&&!yr&&Lr(),yr=!1;const t=e.closest("[data-a]");!t||t.disabled||t instanceof HTMLInputElement&&t.type!=="checkbox"||Ha(t.dataset.a)});document.addEventListener("input",n=>{const e=n.target;if(e.id==="lslider"&&B.launch&&B.g){B.launch.drones=+e.value;const t=document.getElementById("preview");t&&(t.innerHTML=Kf(B.g,B.launch))}});document.addEventListener("pointerdown",n=>{n.target.id==="lslider"&&(Ga=!0)});document.addEventListener("pointerup",()=>{Ga&&(Ga=!1,bt=!0)});const Bn=new Set;document.addEventListener("keyup",n=>Bn.delete(n.key.toLowerCase()));document.addEventListener("keydown",n=>{B.screen!=="game"||!B.g||(Bn.add(n.key.toLowerCase()),n.key===" "?(n.preventDefault(),Ha("pause")):n.key==="1"?(B.speed=1,bt=!0):n.key==="2"?(B.speed=2,bt=!0):n.key==="3"?(B.speed=4,bt=!0):n.key==="m"||n.key==="M"?Ha(B.menu?"menu:":"menu:research"):n.key==="h"||n.key==="H"?ro("node",(B.g.nodes.find(e=>e.owner===$&&e.home)||B.g.nodes.find(e=>e.owner===$)||B.g.nodes[0]).id):n.key==="Escape"&&(B.mode?B.mode=null:B.launch?B.launch=null:B.menu?B.menu=null:B.sel=null,bt=!0))});document.addEventListener("visibilitychange",()=>{document.hidden&&Pc()});let Va=-1,yr=!1,Wa=0;function ao(n,e,t){if(!B.g||!B.g.specs[n])return;Va!==n&&(As.innerHTML=bx(B.g,B.g.specs[n]),Va=n),As.className="open";const i=As.getBoundingClientRect();As.style.left=`${Math.max(8,Math.min(Hi-i.width-8,e-i.width/2))}px`,As.style.top=`${t-i.height-18<60?Math.min(ls-i.height-8,t+26):t-i.height-18}px`}function Lr(){Va>=0&&(As.className="",Va=-1)}const jf=n=>n instanceof HTMLElement?n.closest("[data-tip]"):null;document.addEventListener("pointerover",n=>{if(n.pointerType!=="mouse"||n.target===mn)return;const e=jf(n.target);if(e){const t=e.getBoundingClientRect();ao(+e.dataset.tip,t.left+t.width/2,t.top)}else Lr()});document.addEventListener("pointerdown",n=>{if(clearTimeout(Wa),n.pointerType==="mouse"||n.target===mn)return;const e=jf(n.target),t=n.clientX,i=n.clientY;e&&(Wa=window.setTimeout(()=>{if(!B.drag&&Math.hypot($a.x-t,$a.y-i)<10){const s=e.getBoundingClientRect();ao(+e.dataset.tip,s.left+s.width/2,s.top),yr=!0}},420))});const $a={x:0,y:0};document.addEventListener("pointermove",n=>{$a.x=n.clientX,$a.y=n.clientY});document.addEventListener("pointerup",()=>clearTimeout(Wa));function eh(n,e){let t=null,i=1e9;for(const s of Ma){const r=Math.hypot(s.x-n,s.y-e);r<s.r+6&&r<i&&(i=r,t=s)}return t}let ui=null;os.addEventListener("pointerdown",n=>{const e=n.target.closest(".rost");!e||!B.g||(ui={spec:+e.dataset.spec,x:n.clientX,y:n.clientY,id:n.pointerId},os.setPointerCapture(n.pointerId))});os.addEventListener("pointermove",n=>{if(!ui||!B.g)return;const e=B.g,t=e.specs[ui.spec];if(!B.drag&&Math.hypot(n.clientX-ui.x,n.clientY-ui.y)>10&&(B.drag={spec:t.id,x:n.clientX,y:n.clientY,over:-1,label:"",ok:!1},Lr(),clearTimeout(Wa),bt=!0),!B.drag)return;const i=B.drag;i.x=n.clientX,i.y=n.clientY;const s=document.elementFromPoint(n.clientX,n.clientY),r=s===mn?Lc(n.clientX,n.clientY):null;if(i.over=r&&r.type==="node"?r.id:-1,i.ok=!1,s?.closest('[data-drop="crew"]')&&B.launch)i.ok=e.nodes[B.launch.from].specs.includes(t.id),i.label=i.ok?"Add to the crew":`Not at ${e.nodes[B.launch.from].name}`;else if(i.over>=0){const a=e.nodes[i.over],o=oc(e,t,a);i.ok=!!o.via,i.label=o.via?`${a.name} · ${At(o.secs)} ${o.via==="corridor"?"via corridor":"by fleet"}`:o.why}else i.label=t.held?"They are a prisoner":t.node<0?"Already travelling":"Drop on one of your nodes";or.className=`open ${i.ok?"ok":""}`,or.style.left=`${i.x}px`,or.style.top=`${i.y}px`,or.innerHTML=`${Qn(e,t,!0,!0)}<span>${i.label.replace(/</g,"&lt;")}</span>`});const th=n=>{if(!ui||!B.g)return;const e=B.g,t=e.specs[ui.spec],i=B.drag;if(ui=null,B.drag=null,or.className="",i)document.elementFromPoint(n.clientX,n.clientY)?.closest('[data-drop="crew"]')&&B.launch?i.ok&&!B.launch.specs.includes(t.id)&&Ha(`lspec:${t.id}`):i.over>=0&&i.ok?Kt({c:"move",spec:t.id,to:i.over}):i.over>=0&&Ai(i.label);else if(!yr){const s=t.node>=0?t.node:e.fleets.find(r=>r.id===t.fleet)?.to??-1;s>=0&&ro("node",s)}bt=!0};os.addEventListener("pointerup",th);os.addEventListener("pointercancel",th);const hn=new Map;let Di=null,ks=!1,fr=0,Xl=!1,ql=0;const du=(n,e)=>({x:(n-Hi/2)/Xe.z+Xe.x,y:(e-ls/2)/(Xe.z*ki)+Xe.y}),Hn={x:0,y:0};function Lc(n,e){const t=B.g;for(const r of t.fleets){if(!Ja(t,r))continue;const a=Yt(r.x,r.y,3);if(Math.hypot(a.x-n,a.y-e)<24)return{type:"fleet",id:r.id}}let i=-1,s=1e9;for(const r of t.nodes){if(Li(t,r).tier==="hidden")continue;const a=Gf(r),o=Math.hypot(a.x-n,a.y-e);o<Math.max(30,ci(r)*Xe.z*2.3)&&o<s&&(s=o,i=r.id)}return i>=0?{type:"node",id:i}:null}function Ox(n,e){B.g;const t=Lc(n,e);if(B.mode){if(!t||t.type!=="node")return;const i=B.mode,s=()=>{B.mode=null,B.sel={type:"node",id:i.from}};i.k==="launch"?Ea(i.from,t.id,!1):i.k==="convoy"?Ea(i.from,t.id,!0):i.k==="corridor"?Kt({c:"corridor",from:i.from,to:t.id})&&s():i.k==="missile"?Kt({c:"missile",from:i.from,to:t.id})&&s():i.k==="rallyTo"&&Kt({c:"rallyTo",node:i.from,to:t.id})&&s(),bt=!0;return}if(!t){B.launch||(B.sel=null),bt=!0;return}if(B.launch&&t.type==="node"&&t.id!==B.launch.from)return Ea(B.launch.from,t.id,B.launch.lane);ro(t.type,t.id)}mn.addEventListener("pointerdown",n=>{if(mn.setPointerCapture(n.pointerId),Lr(),Xl=!1,clearTimeout(ql),hn.set(n.pointerId,{x:n.clientX,y:n.clientY}),hn.size===1&&(Di={x:n.clientX,y:n.clientY},ks=!1),hn.size===2){const[e,t]=[...hn.values()];fr=Math.hypot(e.x-t.x,e.y-t.y),ks=!0}ai=null,Hn.x=Hn.y=0,n.pointerType!=="mouse"&&(ql=window.setTimeout(()=>{if(hn.size!==1||ks||!Di)return;const e=eh(Di.x,Di.y);e&&(Xl=!0,yr=!0,ao(e.spec,e.x,e.y),navigator.vibrate&&navigator.vibrate(12))},420))});mn.addEventListener("pointermove",n=>{const e=hn.get(n.pointerId);if(!e){if(B.g&&B.screen==="game"){const s=n.pointerType==="mouse"?eh(n.clientX,n.clientY):null;s?ao(s.spec,s.x,s.y):Lr();const r=Lc(n.clientX,n.clientY);Jf=r&&r.type==="node"?r.id:-1,mn.style.cursor=r||s?"pointer":"grab"}return}const t=n.clientX-e.x,i=n.clientY-e.y;if(e.x=n.clientX,e.y=n.clientY,hn.size===1)Di&&Math.hypot(n.clientX-Di.x,n.clientY-Di.y)>8&&(ks=!0),ks&&(Xe.x-=t/Xe.z,Xe.y-=i/(Xe.z*ki),Hn.x=-t/Xe.z,Hn.y=-i/(Xe.z*ki));else if(hn.size===2){const[s,r]=[...hn.values()],a=Math.hypot(s.x-r.x,s.y-r.y);fr>0&&ih((s.x+r.x)/2,(s.y+r.y)/2,a/fr),fr=a}});const nh=n=>{const e=hn.delete(n.pointerId);clearTimeout(ql),e&&hn.size===0&&!ks&&!Xl&&Di&&B.g&&B.screen==="game"&&Ox(n.clientX,n.clientY),hn.size<2&&(fr=0)};mn.addEventListener("pointerup",nh);mn.addEventListener("pointercancel",nh);mn.addEventListener("wheel",n=>{n.preventDefault(),ih(n.clientX,n.clientY,Math.exp(-n.deltaY*.0015))},{passive:!1});function ih(n,e,t){const i=du(n,e);Xe.z=Math.max(2.4,Math.min(13,Xe.z*t));const s=du(n,e);Xe.x+=i.x-s.x,Xe.y+=i.y-s.y}function sh(){const n=Math.min(2,window.devicePixelRatio||1);Hi=window.innerWidth,ls=window.innerHeight,mn.width=Math.round(Hi*n),mn.height=Math.round(ls*n),ba.setTransform(n,0,0,n,0,0)}window.addEventListener("resize",sh);sh();const uu={};function Qi(n,e,t){if(uu[e]===t)return;uu[e]=t;const i=n.querySelector(".pbody"),s=i?i.scrollTop:0;n.innerHTML=t;const r=n.querySelector(".pbody");r&&s&&(r.scrollTop=s)}function kx(){const n=B.g,e=performance.now();if(B.screen==="title"||!n){for(const[i,s]of[[au,"hud"],[ca,"panel"],[os,"roster"],[ou,"toasts"]])Qi(i,s,"");ca.className="",da.className="open clear",Qi(da,"ov",B.screen==="help"?ru():Nx(B));return}for(;lr<n.log.length;lr++){const i=n.log[lr];i.kind!=="info"&&Ei.push({msg:i.msg,kind:i.kind,node:i.node,until:e+(i.kind==="bad"?9e3:6e3)})}for(n.log.length>=150&&(lr=n.log.length);Ei.length&&(Ei[0].until<e||Ei.length>4);)Ei.shift();if(Qi(ou,"toasts",Ei.map(i=>`<div class="toast ${i.kind}" ${i.node>=0?`data-a="focus:${i.node}"`:""}>${i.msg.replace(/</g,"&lt;")}</div>`).join("")),Qi(au,"hud",Ex(B)),ui||Qi(os,"roster",wx(B)),!Ga){const i=Px(B);ca.className=i?B.launch?"open launch":"open":"",Qi(ca,"panel",i)}const t=B.screen==="help"?ru():n.result||n.pending.length?Ix(B):B.menu?Lx(B):"";da.className=t?"open":"",Qi(da,"ov",t)}function Bx(n){const e=B.mode;if(B.drag){const s=n.specs[B.drag.spec];return new Set(n.nodes.filter(r=>r.owner===$&&oc(n,s,r).via).map(r=>r.id))}if(!e)return null;const t=n.nodes[e.from],i=s=>new Set(n.nodes.filter(s).map(r=>r.id));return e.k==="convoy"?new Set(bu(n,e.from)):e.k==="corridor"?i(s=>{const r=Eu(n,t,s);return!r||r==="Not enough Ultanium"}):e.k==="missile"?i(s=>!eo(n,t,s)):e.k==="rallyTo"?i(s=>s.owner===$&&s.rally&&s.id!==e.from):i(s=>s.id!==e.from&&(s.owner===$||Qa(n,s)))}let fu=performance.now(),ws=0,hu=0,pu=0;function rh(n){const e=Math.min(.25,(n-fu)/1e3);fu=n;const t=B.g;if(t&&B.screen==="game"){if(!B.paused&&!B.menu&&!t.result&&!t.pending.length){ws+=e*B.speed;let a=0;for(;ws>=te.dt&&a++<40;)if(ws-=te.dt,!qh(t)){ws=0,bt=!0;break}ws>1&&(ws=0)}t.result&&!$l&&($l=!0,Fx(),bt=!0),!hn.size&&Math.abs(Hn.x)+Math.abs(Hn.y)>.01&&(Xe.x+=Hn.x,Xe.y+=Hn.y,Hn.x*=.9,Hn.y*=.9);const i=(Bn.has("arrowright")||Bn.has("d")?1:0)-(Bn.has("arrowleft")||Bn.has("a")?1:0),s=(Bn.has("arrowdown")||Bn.has("s")?1:0)-(Bn.has("arrowup")||Bn.has("w")?1:0);(i||s)&&(ai=null,Xe.x+=i*420*e/Xe.z,Xe.y+=s*420*e/(Xe.z*ki)),ai&&(Xe.x+=(ai.x-Xe.x)*.16,Xe.y+=(ai.y-Xe.y)*.16,Math.hypot(ai.x-Xe.x,ai.y-Xe.y)<.4&&(ai=null)),Xe.x=Math.max(-40,Math.min(t.w+40,Xe.x)),Xe.y=Math.max(-40,Math.min(t.h+40,Xe.y));const r=!!B.mode||!!B.drag;yx(ba,t,{cam:Xe,w:Hi,h:ls,sel:B.launch?{type:"node",id:B.launch.to}:B.sel,targeting:r,from:B.mode?.from??B.launch?.from??-1,hover:B.drag?B.drag.over:Jf,glow:Bx(t)},n),n-pu>15e3&&(pu=n,Pc())}else ba.fillStyle="#262e49",ba.fillRect(0,0,Hi,ls);(bt||n-hu>250)&&(bt=!1,hu=n,kx()),requestAnimationFrame(rh)}requestAnimationFrame(rh);
