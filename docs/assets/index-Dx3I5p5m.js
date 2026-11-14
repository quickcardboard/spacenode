(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const se={dt:.1,shipSpeed:1.2,loadTime:6,startUlt:40,startDrones:12,baseIncome:6,capBase:65,capPlanet:7,capStation:17,batch:5,batchTime:30,shipCost:30,shipTime:100,shieldPerGen:5,shieldCap:20,shieldRegenSecs:4,neutralShieldGens:[1,2,4],turretKill:3,musterCost:3,musterSize:10,habitatCap:15,capBySize:[9,13,19],mineBase:4.4,sizeMult:[1,1.5,2.2],mineDim:[1,.75,.5,.3,.3],mineSlots:[2,3,4],minesPerGen:2,fovInner:{planet:[42,46,52],station:48},fovOuter:{planet:[72,78,88],station:82},shipFov:[26,46],corridorCost:40,corridorTime:110,corridorRange:150,corridorMax:2,corridorSpeed:2,specSlots:3,rescueSecs:150,ransom:15,recruitCost:40,convertSecs:60,stageSecs:540,graceSecs:360,offInterval:[0,300,260,220,185,150],offCommit:[0,.45,.55,.65,.75,.85],gatherSecs:55,captureSetback:.15,aegisPerLayer:12,xpLevels:[0,6,16,30,48]},zt={gen:{id:"gen",name:"Generator",on:"planet",cost:10,time:40,max:2,desc:"Powers up to 2 mines."},mine:{id:"mine",name:"Mine",on:"planet",cost:8,time:30,max:4,desc:"Produces Ultanium. Needs generator power and 1 Drone to operate."},lab:{id:"lab",name:"Research Lab",on:"planet",cost:30,time:75,max:1,desc:"Enables research at this node."},shield:{id:"shield",name:"Shield Generator",on:"planet",cost:18,time:45,max:4,desc:"+5 shield (a node holds at most 20). Shields absorb attacks before Drones and recharge over time."},habitat:{id:"habitat",name:"Habitat",on:"planet",cost:45,time:60,max:2,desc:"+15 to your Drone cap."},relay:{id:"relay",name:"Relay",on:"planet",cost:15,time:40,max:1,desc:"+25% field of view."},dock:{id:"dock",name:"Dock",on:"station",cost:12,time:35,max:3,desc:"One more ship can load and unload here."},turret:{id:"turret",name:"Turret",on:"station",cost:18,time:45,max:3,desc:"Destroys 3 Drones of every enemy fleet before it lands. Unseen fleets and Siegebreakers slip past."},sshield:{id:"sshield",name:"Shield Generator",on:"station",cost:18,time:45,max:4,desc:"+5 shield (a node holds at most 20). Shields absorb attacks before Drones and recharge over time."},barracks:{id:"barracks",name:"Barracks",on:"station",cost:20,time:60,max:1,desc:"Drone batches 25% faster."},shipyard:{id:"shipyard",name:"Shipyard",on:"station",cost:20,time:60,max:1,desc:"Ships build 25% faster."},sensor:{id:"sensor",name:"Sensor Array",on:"station",cost:15,time:45,max:1,desc:"+30% detection radius; reveals strength of fleets heading here."},slab:{id:"slab",name:"Research Lab",on:"station",cost:30,time:75,max:1,desc:"Enables research at this node."}},Ne=(n,e,t,i,s,r)=>({id:n,name:e,cd:t,target:i,at:s,desc:r}),ht={fleet:"#7fb2dc",eco:"#e3c565",def:"#8fc79a",intel:"#b39ad6",war:"#dd7a63",odd:"#e9a9c9"},ft={},et=n=>ft[n.id]=n;et({id:"admiral",name:"Admiral",tag:"Ad",color:ht.fleet,role:"Fleet mobility",starter:!0,passive:"The ship carrying the Admiral flies 15% faster.",loc:{speed:.15},active:Ne("fullburn","Full Burn",120,"self","ship","This ship gains +50% speed for 30 s.")});et({id:"engineer",name:"Engineer",tag:"En",color:ht.eco,role:"Construction",starter:!0,passive:"Construction here is 25% faster.",loc:{build:.25},active:Ne("repair","Emergency Repair",120,"self","node","Cut 25 s off the current build and fully recharge shields.")});et({id:"quartermaster",name:"Quartermaster",tag:"Qm",color:ht.eco,role:"Economy",starter:!0,passive:"Mines here produce 20% more.",loc:{mine:.2},active:Ne("surge","Surge Mining",180,"self","planet","+50% mine output here for 60 s.")});et({id:"scout",name:"Scout",tag:"Sc",color:ht.intel,role:"Intelligence",starter:!0,passive:"This node sees 30% further.",loc:{fov:.3},active:Ne("deepscan","Deep Scan",90,"node","any","Fully identify one detected node for 60 s.")});et({id:"tactician",name:"Tactician",tag:"Ta",color:ht.war,role:"Combat",starter:!0,passive:"Attacks from this ship gain +1 strength per 8 Drones (max +4).",loc:{atkPer8:4},active:Ne("flank","Flank",180,"self","ship","This ship's next attack ignores shields.")});et({id:"sentinel",name:"Sentinel",tag:"Se",color:ht.def,role:"Defence",passive:"+3 shield at this node.",loc:{def:3},active:Ne("lockdown","Lockdown",150,"self","node","+6 shield here for 45 s, filled at once.")});et({id:"saboteur",name:"Saboteur",tag:"Sb",color:ht.intel,role:"Disruption",passive:"Enemy turrets shoot down 25% fewer of this ship's Drones.",loc:{structHalf:.25},active:Ne("sabotage","Sabotage",180,"enemy","any","Freeze all construction and Drone production at an identified enemy node for 45 s.")});et({id:"diplomat",name:"Diplomat",tag:"Di",color:ht.eco,role:"Neutral expansion",passive:"Attacks on neutral nodes from this ship face 3 less defence.",loc:{vsNeutral:3},active:Ne("parley","Parley",150,"neutral","any","An identified neutral node loses 5 defence for 60 s.")});et({id:"scientist",name:"Scientist",tag:"Sn",color:ht.intel,role:"Research",passive:"Research here is 25% faster.",loc:{research:.25},active:Ne("breakthrough","Breakthrough",180,"self","node","Add 30 s of progress to the research running here.")});et({id:"medic",name:"Medic",tag:"Me",color:ht.def,role:"Specialist protection",passive:"Once per 180 s, when this location falls its specialists escape home instead of being captured.",loc:{medic:1},active:Ne("extraction","Extraction",240,"self","any","Every specialist at this location returns to your home station instantly.")});et({id:"pirate",name:"Pirate",tag:"Pi",color:ht.war,role:"Interception",passive:"You always see the strength of enemy fleets in detection range.",glob:{sigint:1},active:Ne("ambush","Ambush",150,"self","node","The next enemy fleet to arrive here within 90 s loses 30% of its Drones first.")});et({id:"inquisitor",name:"Inquisitor",tag:"In",color:ht.odd,role:"Prisoners",passive:"Each prisoner held anywhere yields +1.5 Ultanium/min.",glob:{prisonInc:1.5},active:Ne("convert","Convert",240,"self","node","Turn one prisoner held here to your side over 60 s. Lost if the node falls.")});et({id:"foreman",name:"Foreman",tag:"Fo",color:ht.war,role:"Drone production",passive:"Drone batches here are 2 larger.",loc:{batch:2},active:Ne("conscript","Conscript",180,"self","node","Add 6 Drones here immediately.")});et({id:"cartographer",name:"Cartographer",tag:"Ca",color:ht.fleet,role:"Navigation",passive:"The ship carrying the Cartographer can be redirected once per flight.",loc:{redirect:1},active:Ne("chart","Chart",180,"self","any","Identify every node within 160 units for 40 s.")});et({id:"reclaimer",name:"Reclaimer",tag:"Rc",color:ht.eco,role:"Salvage",passive:"Battles won by this ship yield 1 Ultanium per enemy Drone destroyed.",loc:{salvage:1},active:Ne("strip","Strip Mine",180,"self","planet","Gain 20 Ultanium; mines here go offline for 60 s.")});et({id:"ghost",name:"Ghost",tag:"Gh",color:ht.intel,role:"Stealth",passive:"The ship carrying the Ghost is unseen: the enemy sends no reinforcements against it.",loc:{stealth:1},active:Ne("smoke","Smoke",300,"self","node","Every enemy fleet currently flying to this node turns back.")});et({id:"siegebreaker",name:"Siegebreaker",tag:"Sg",color:ht.war,role:"Siege",passive:"This ship slips past turrets: none of its Drones are shot down.",loc:{ignStruct:1},active:Ne("breach","Breach",180,"ident","any","An identified node loses all shields and cannot recharge for 60 s.")});et({id:"martyr",name:"Martyr",tag:"Ma",color:ht.def,role:"Attrition",passive:"If this node falls, half of the attacker's survivors die.",loc:{martyr:1},active:Ne("laststand","Last Stand",240,"self","node","Drones here count double on defence for 30 s, then a quarter of them are lost.")});et({id:"echo",name:"Echo",tag:"Ec",color:ht.odd,role:"Amplifier",passive:"Doubles the passive of the first other specialist at this location.",loc:{},active:Ne("reprise","Reprise",240,"self","any","Reset the ability cooldowns of every other specialist here.")});et({id:"broker",name:"Broker",tag:"Br",color:ht.eco,role:"Deals",passive:"Ships cost 25% less and ransoms pay double.",glob:{shipCost:.25,ransom:1},active:Ne("bribe","Bribe",200,"neutral","any","Buy an identified neutral node of strength 14 or less for 2 Ultanium per point. No battle.")});et({id:"smuggler",name:"Smuggler",tag:"Sm",color:ht.fleet,role:"Logistics",passive:"This ship launches with no loading delay, and you may fly to remembered nodes outside detection.",loc:{noLoad:1},glob:{remember:1},active:Ne("fence","Fence",240,"self","any","Gain 2 Ultanium for every node you own.")});et({id:"castellan",name:"Castellan",tag:"Cs",color:ht.def,role:"Fortification",passive:"Shields here +3 and recharge three times as fast.",loc:{shieldMax:3,natRegen:2},active:Ne("rampart","Rampart",120,"self","node","Fully recharge the shields here.")});et({id:"recruiter",name:"Recruiter",tag:"Rt",color:ht.war,role:"Manpower",passive:"Your global Drone cap is 15 higher.",glob:{droneCap:15},active:Ne("levy","Levy",240,"self","any","Every station you own gains 3 Drones.")});et({id:"oracle",name:"Oracle",tag:"Or",color:ht.intel,role:"Foresight",passive:"Coalition offensives are announced with their target.",glob:{warn:1},active:Ne("foresight","Foresight",300,"self","any","Set Coalition mobilization back by 10% of a stage.")});et({id:"vanguard",name:"Vanguard",tag:"Va",color:ht.war,role:"Assault",passive:"Attacks won by this ship keep 20% more survivors.",loc:{surv:.2},active:Ne("charge","Charge",150,"self","ship","This ship's next attack gains +5 strength.")});et({id:"navigator",name:"Navigator",tag:"Na",color:ht.fleet,role:"Launch control",passive:"Ships launched from this node fly 20% faster.",loc:{launchSpeed:.2},active:Ne("slingshot","Slingshot",240,"self","node","The next ship launched from here within 30 s flies at 2.5x speed for 40 s.")});et({id:"prospector",name:"Prospector",tag:"Pr",color:ht.eco,role:"Extraction",passive:"This planet has +1 mine slot and +3 Ultanium/min capacity.",loc:{mineSlots:1,cap:3},active:Ne("vein","Strike Vein",240,"self","planet","Gain 25 Ultanium.")});et({id:"architect",name:"Architect",tag:"Ar",color:ht.eco,role:"Corridors",passive:"Corridors started here build 40% faster.",loc:{corridor:.4},active:Ne("rapidlink","Rapid Link",240,"own","node","Open a temporary corridor from here to another of your nodes for 60 s.")});et({id:"ironmonger",name:"Ironmonger",tag:"Im",color:"#c98a3c",role:"Ferrum signature",sig:"ferrum",passive:"Turrets at this node destroy 50% more Drones.",loc:{structDef:.5},active:Ne("fortify","Fortify",240,"self","node","Build a free Shield Generator here instantly.")});et({id:"berserker",name:"Berserker",tag:"Bs",color:"#e0524d",role:"Crimson signature",sig:"crimson",passive:"Attacks from this ship are 20% stronger.",loc:{atkPct:.2},active:Ne("bloodrush","Bloodrush",200,"self","ship","This ship's next attack is +40% stronger but keeps 30% fewer survivors.")});et({id:"lens",name:"Lens",tag:"Ln",color:"#e8d36a",role:"Lumen signature",sig:"lumen",passive:"Lances here destroy 15% of any attacking fleet before battle.",loc:{preKill:.15},active:Ne("focus","Focus",200,"self","node","Lances here destroy a further 30% of attackers for 45 s.")});et({id:"phantom",name:"Phantom",tag:"Ph",color:"#9b6bd6",role:"Veil signature",sig:"veil",passive:"All of your fleets fly unseen.",glob:{stealth:1},active:Ne("raidA","Knife in the Dark",240,"ident","any","An identified node loses 25% of its Drones.")});et({id:"wayfinder",name:"Wayfinder",tag:"Wf",color:"#5aa9e6",role:"Drift signature",sig:"drift",passive:"All of your ships fly 15% faster.",glob:{speed:.15},active:Ne("warp","Fold",240,"self","ship","This ship instantly covers half of its remaining distance.")});et({id:"warlord",name:"Warlord",tag:"W",color:"#ffffff",role:"Faction leader",passive:"+5 shield at the capital.",loc:{def:5}});et({id:"archon",name:"Archon",tag:"A",color:"#ff5fa2",role:"Coalition Commander",passive:"+8 shield at the Citadel.",loc:{def:8}});const ch=Object.values(ft).filter(n=>!n.sig&&n.id!=="warlord"&&n.id!=="archon").map(n=>n.id),dh=Object.values(ft).filter(n=>n.starter).map(n=>n.id),Gi={marshal:{id:"marshal",name:"Marshal",blurb:"Leads from the front.",passive:"Attacks from the Commander's ship are 15% stronger.",loc:{atkPct:.15},a:Ne("decisive","Decisive Strike",180,"self","ship","This ship's next attack is +30% stronger."),b:Ne("rally","Rally",240,"self","any","Add 8 Drones at the Commander's location.")},pathfinder:{id:"pathfinder",name:"Pathfinder",blurb:"Controls tempo and information.",passive:"Commander's ship is 20% faster and can be redirected; their node sees 25% further.",loc:{speed:.2,redirect:1,fov:.25},a:Ne("slipstream","Slipstream",150,"self","ship","This ship flies at double speed for 40 s."),b:Ne("sweep","Survey Sweep",200,"self","any","Identify every node within 200 units for 45 s.")},warden:{id:"warden",name:"Warden",blurb:"Keeps forces alive.",passive:"+4 shield and double shield recharge at the Commander's node.",loc:{def:4,natRegen:1},a:Ne("aegis","Aegis",180,"self","node","+10 shield here for 45 s, filled at once."),b:Ne("recall","Recall",300,"self","any","The Commander and every specialist with them return home instantly.")},industrialist:{id:"industrialist",name:"Industrialist",blurb:"Builds a stronger empire.",passive:"Mines +20% and construction +30% at the Commander's node.",loc:{mine:.2,build:.3},a:Ne("crash","Crash Program",200,"self","node","Finish the current build here instantly."),b:Ne("windfall","Windfall",240,"self","any","Gain 3 Ultanium for every planet you own.")},corsair:{id:"corsair",name:"Corsair",blurb:"Lives off the enemy.",passive:"Commander's ship salvages 1 Ultanium per enemy Drone destroyed and keeps 15% more survivors.",loc:{salvage:1,surv:.15},a:Ne("raid","Raid",200,"ident","any","An identified node loses 30% of its Drones."),b:Ne("pressgang","Press-gang",240,"self","any","Gain 20% more Drones at the Commander's location (max 10).")},savant:{id:"savant",name:"Savant",blurb:"Wins with ideas.",passive:"Research +40% at the Commander's node; all ability cooldowns 15% shorter.",loc:{research:.4},a:Ne("insight","Insight",240,"self","any","Reset the cooldowns of every other specialist here."),b:Ne("eureka","Eureka",200,"self","node","Add 60 s of progress to the research running here.")}},uh={savant:{cd:.15}},Cu=[{id:"ironwill",name:"Iron Will",desc:"Rescue window +45 s.",glob:{rescue:45}},{id:"drill",name:"Drillmaster",desc:"Drone batches at the Commander's station are 2 larger.",loc:{batch:2}},{id:"march",name:"Forced March",desc:"Commander's ship +20% speed.",loc:{speed:.2}},{id:"logi",name:"Logistician",desc:"Global Drone cap +20.",glob:{droneCap:20}},{id:"tithe",name:"Tithe",desc:"+3 Ultanium/min.",glob:{incomeFlat:3}},{id:"hard",name:"Hardliner",desc:"+4 shield at the Commander's node.",loc:{def:4}},{id:"shock",name:"Shock Tactics",desc:"Commander's attacks +4 strength.",loc:{atk:4}},{id:"mentor",name:"Mentor",desc:"All ability cooldowns 15% shorter.",glob:{cd:.15}},{id:"scholar",name:"Scholar",desc:"All research 20% faster.",glob:{research:.2}},{id:"survivor",name:"Survivor",desc:"Commander's attacks keep 25% more survivors.",loc:{surv:.25}},{id:"farsight",name:"Far Sight",desc:"All your nodes see 15% further.",glob:{fov:.15}},{id:"requisition",name:"Requisition",desc:"Ships cost 30% less.",glob:{shipCost:.3}},{id:"entourage",name:"Entourage",desc:"Nodes and ships hold one more specialist.",glob:{slots:1}},{id:"sapper",name:"Sapper",desc:"Commander's attacks ignore shields.",loc:{ignNat:1}},{id:"magnate",name:"Magnate",desc:"All mines +10%.",glob:{mine:.1}}],Tn={},Je=(n,e,t,i,s)=>Tn[n]={id:n,name:e,rarity:t,desc:i,mods:s};Je("extractor","Deep-Core Extractor","common","All mines +12%.",{mine:.12});Je("foundry","Drone Foundry Matrix","common","Drone batches are 1 larger.",{batch:1});Je("surveyor","Quantum Surveyor","common","All nodes see 20% further.",{fov:.2});Je("propulsion","Emergency Propulsion Core","common","All ships +12% speed.",{speed:.12});Je("salvage","Salvage Protocol","common","Winning attacks yield 0.5 Ultanium per enemy Drone destroyed.",{salvage:.5});Je("scaffold","Modular Scaffolds","common","Construction 25% faster.",{build:.25});Je("reserve","Reserve Barracks","common","Global Drone cap +20.",{droneCap:20});Je("bulkhead","Hardened Bulkheads","common","+1 shield at every node.",{def:1});Je("archive","Field Archive","common","Research 25% faster.",{research:.25});Je("ledger","Ration Ledger","common","+3 Ultanium/min.",{incomeFlat:3});Je("clamps","Quick-Load Clamps","common","Ships launch with no loading delay.",{noLoad:1});Je("mirror","Signal Mirror","common","Coalition offensives are announced with their target.",{warn:1});Je("adaptive","Adaptive Shield Network","uncommon","Nodes you capture gain +6 shield for 60 s.",{capShield:6});Je("matrix","Specialist Command Matrix","uncommon","Ability cooldowns 20% shorter.",{cd:.2});Je("lantern","Ghost Lanterns","uncommon","Unmanned scouts survive and fly home.",{scoutReturn:1});Je("warchest","War Chest","uncommon","Gain 6 Ultanium whenever you capture a node.",{capUlt:6});Je("phalanx","Phalanx Doctrine","uncommon","All attacks 8% stronger.",{atkPct:.08});Je("titheengine","Tithe Engine","uncommon","Ransoms pay double; each prisoner yields +1 Ultanium/min.",{ransom:1,prisonInc:1});Je("yards","Overclocked Yards","uncommon","Ships cost 30% less and build 30% faster.",{shipCost:.3,shipSpeed:.3});Je("lattice","Regrowth Lattice","uncommon","Shields +2 everywhere and recharge twice as fast.",{natRegen:1,shieldMax:2});Je("charts","Cartel Charts","uncommon","You may fly to remembered nodes outside detection range.",{remember:1});Je("cadre","Veteran Cadre","uncommon","Winning attacks keep 15% more survivors.",{surv:.15});Je("budget","Black Budget","uncommon","Research costs 30% less.",{techCost:.3});Je("charter","Bulwark Charter","uncommon","Your turrets destroy 25% more Drones.",{structDef:.25});Je("sigil","Tiebreaker Sigil","rare","You win tied battles when attacking.",{ties:1});Je("phoenix","Phoenix Clause","rare","Once every 180 s, a node capture refunds the Drones it cost.",{refund:180});Je("chair","Fourth Chair","rare","Nodes and ships hold one more specialist.",{slots:1});Je("crown","Hollow Crown","rare","Commander rescue window +90 s.",{rescue:90});Je("stillness","Stillness Engine","rare","Coalition mobilization is 25% slower.",{mobSlow:.25});Je("twin","Twin Minds","rare","The Commander's passive effects count twice.",{cmdDouble:1});Je("lance","Null Lance","rare","Your attacks ignore shields.",{ignNat:1});Je("hold","Bottomless Hold","rare","Every planet has +1 mine slot and +3 capacity.",{mineSlots:1,cap:3});Je("edict","Conscription Edict","rare","Every node you own gains 1 Drone each minute.",{levy:60});Je("seal","Oathbreaker's Seal","rare","You may recruit prisoners for 40 Ultanium without an Inquisitor.",{recruit:1});Je("night","Long Night","rare","All of your fleets fly unseen.",{stealth:1});Je("choir","Siege Choir","rare","Enemy turrets shoot down half as many of your Drones.",{structHalf:.5});const ec=[0,40,80,140,240],Ya=[0,60,90,120,180],tc=[0,2,3,4,5],Xs={cost:60,growth:1.5,time:75,ops:3},ut={},fh=["Industry","Military","Navigation","Intelligence","Command"],ot=(n,e,t,i,s,r,a,o={})=>ut[n]={id:n,name:e,branch:t,tier:i,pre:s,desc:r,mods:a,...o};ot("extraction","Advanced Extraction","Industry",1,void 0,"Mines +15%.",{mine:.15});ot("automation","Industrial Automation","Industry",2,"extraction","Mines no longer need Drones to operate.",{noOps:1});ot("deepcore","Deep-Core Drilling","Industry",3,"automation","Planet capacity +25% and +1 mine slot.",{capPct:.25,mineSlots:1},{excl:"supply"});ot("supply","Supply Network","Industry",3,"automation","Drone cap +40. Mustering costs 1 less per Drone.",{droneCap:40,musterCost:1},{excl:"deepcore"});ot("foundries","Orbital Foundries","Industry",4,"automation","Ships cost 40% less and build 40% faster; Habitats give +10 more cap.",{shipCost:.4,shipSpeed:.4,habitat:10});ot("refinery","Refinery Tuning","Industry",5,"extraction","Mines +5% per level.",{mine:.05},{rep:10});ot("coord","Combat Coordination","Military",1,void 0,"Attacks 10% stronger.",{atkPct:.1});ot("fort","Shield Harmonics","Military",2,"coord","Shields recharge twice as fast.",{natRegen:1});ot("siege","Siege Doctrine","Military",3,"fort","Enemy turrets shoot down half as many of your Drones; your attacks ignore 5 shield.",{structHalf:.5,shieldPierce:5},{excl:"depth"});ot("depth","Defence in Depth","Military",3,"fort","Your turrets destroy 50% more; Drone batches +2.",{structDef:.5,batch:2},{excl:"siege"});ot("overwhelm","Overwhelming Force","Military",4,"fort","Attacks 10% stronger and winners keep 25% more survivors.",{atkPct:.1,surv:.25});ot("conditioning","Drone Conditioning","Military",5,"coord","Attacks +3% per level.",{atkPct:.03},{rep:10});ot("engines","Improved Engines","Navigation",1,void 0,"Ships +15% speed.",{speed:.15});ot("sensors","Long-Range Sensors","Navigation",2,"engines","All nodes and ships see 20% further.",{fov:.2});ot("reroute","Slipstream Rerouting","Navigation",3,"sensors","Any ship can be redirected once per flight.",{redirect:1},{excl:"widecorr"});ot("widecorr","Wide Corridors","Navigation",3,"sensors","Each node holds one more corridor; corridors build 50% faster and carry convoys 50% faster.",{corridorMax:1,corridor:.5,laneSpeed:.5},{excl:"reroute"});ot("fold","Fold Drive","Navigation",4,"sensors","Ships +25% speed and launch without loading.",{speed:.25,noLoad:1});ot("thrusters","Thruster Tuning","Navigation",5,"engines","Ships +4% speed per level.",{speed:.04},{rep:10});ot("sigint","Signal Analysis","Intelligence",1,void 0,"See the strength of every detected enemy fleet.",{sigint:1});ot("recon","Recon Optics","Intelligence",2,"sigint","Ships see 50% further; unmanned scouts fly home.",{scoutReturn:1,shipFov:.5});ot("deepcover","Deep Cover","Intelligence",3,"recon","Offensives are announced with their target; mobilization 15% slower.",{warn:1,mobSlow:.15},{excl:"battery"});ot("battery","Counter-Battery","Intelligence",3,"recon","Your turrets destroy 50% more and cannot be slipped past by unseen fleets.",{structDef:.5,seeStealth:1},{excl:"deepcover"});ot("blacksky","Black Sky","Intelligence",4,"recon","All your fleets fly unseen and slip past turrets.",{stealth:1});ot("dampening","Signal Dampening","Intelligence",5,"sigint","Mobilization 4% slower per level.",{mobSlow:.04},{rep:8});ot("training","Specialist Training","Command",1,void 0,"Ability cooldowns 20% shorter.",{cd:.2});ot("protocols","Command Protocols","Command",2,"training","Commander gains 50% more experience; rescue window +30 s.",{xp:.5,rescue:30});ot("integration","Command Integration","Command",3,"protocols","Nodes and ships hold one more specialist.",{slots:1},{excl:"cadre"});ot("cadre","Talent Scouts","Command",3,"protocols","Recruitment offers one more specialist to choose from, and Drone cap +20.",{offer:1,droneCap:20},{excl:"integration"});ot("highcommand","High Command","Command",4,"protocols","Ability cooldowns 25% shorter; rescue window +60 s.",{cd:.25,rescue:60});ot("officers","Officer School","Command",5,"training","Ability cooldowns 3% shorter per level.",{cd:.03},{rep:10});const Qn={ferrum:{id:"ferrum",name:"Ferrum Directorate",color:"#c98a3c",warlord:"Overseer Kharn",sig:"ironmonger",desc:"Fortress industry. Slow to attack, expensive to dislodge.",tell:"+2 shield everywhere; builds turrets and shields relentlessly.",mods:{def:2,build:.3},ai:{aggr:.6,expand:150,react:.9,target:"weak",build:{turret:4,shield:5,sshield:4,mine:3,gen:3,barracks:1}},techs:["fort","extraction","automation","siege"],specs:["sentinel","castellan","engineer"]},crimson:{id:"crimson",name:"Crimson Warhost",color:"#d2604a",warlord:"Warlord Ashka",sig:"berserker",desc:"Wave aggression. Thin defences, constant pressure.",tell:"Drones produced 35% faster; attacks the nearest target often.",mods:{prod:.35,atkPct:.1},ai:{aggr:1.4,expand:110,react:.4,target:"near",build:{barracks:6,shipyard:3,turret:1,mine:2,gen:2,dock:1}},techs:["coord","engines","siege","training"],specs:["foreman","vanguard","tactician"]},lumen:{id:"lumen",name:"Lumen Technocracy",color:"#e3c565",warlord:"Prime Calculator Ione",sig:"lens",desc:"Lance batteries thin every attacking fleet before it lands.",tell:"Destroys 15% of attackers before battle; gains two technologies per stage.",mods:{preKill:.15,shieldMax:3},ai:{aggr:.8,expand:170,react:.7,target:"weak",build:{shield:4,sensor:2,turret:2,mine:3,gen:3,sshield:2}},techs:["sigint","fort","coord","engines","siege","extraction","training","sensors"],specs:["scientist","sentinel","scout"]},veil:{id:"veil",name:"Veil Syndicate",color:"#9a7cc4",warlord:"The Whisper",sig:"phantom",desc:"Unseen fleets that hunt your specialists.",tell:"Fleets are invisible until inside full-intelligence range; targets nodes holding specialists.",mods:{stealth:1,speed:.1},ai:{aggr:1,expand:160,react:.6,target:"spec",build:{sensor:3,turret:2,barracks:3,mine:2,gen:2,shield:1}},techs:["engines","coord","sigint","training"],specs:["saboteur","ghost","pirate"]},drift:{id:"drift",name:"Drift Clans",color:"#6ea6d6",warlord:"Clanmother Sura",sig:"wayfinder",desc:"Fast nomads who swallow neutral space.",tell:"Ships 40% faster; expands into neutral territory twice as often.",mods:{speed:.4},ai:{aggr:1.1,expand:70,react:.8,target:"near",build:{dock:2,shipyard:4,barracks:3,mine:3,gen:3,turret:1}},techs:["engines","sensors","coord","extraction"],specs:["admiral","navigator","cartographer"]}},us={anvil:{id:"anvil",name:"Archon Vael",title:"the Anvil",desc:"Citadel Aegis layers are 50% stronger and its Drones are produced 40% faster.",mods:{aegisPct:.5,prod:.4},pmods:{}},tide:{id:"tide",name:"Archon Seraph",title:"the Tide",desc:"Every Coalition offensive commits 30% more Drones.",mods:{offBig:.3},pmods:{}},silence:{id:"silence",name:"Archon Null",title:"the Silence",desc:"Your specialist cooldowns are 30% longer. Coalition fleets fly unseen.",mods:{stealth:1},pmods:{cd:-.3}}},Un={},wn=(n,e,t,i,s)=>Un[n]={id:n,name:e,on:t,text:i,choices:s};wn("lab","Abandoned Research Facility","station","Sealed laboratories, still powered. The archive doors are marked with a hazard glyph nobody recognises.",[{label:"Restore the facility",desc:"Gain a free technology.",ult:25,fx:[["tech"]]},{label:"Salvage it",desc:"Gain 35 Ultanium.",fx:[["ult",35]]},{label:"Open the restricted archive",desc:"Choose an uncommon relic. Automata will attack this node with 14 Drones in 40 s.",fx:[["relic","uncommon"],["ambush",14]]},{label:"Let the Scientist decode it",desc:"Free technology and a common relic.",req:"scientist",fx:[["tech"],["relic","common"]]}]);wn("fortress","Ancient Fortress","any","The guns are silent but the targeting grid still tracks your ship.",[{label:"Reactivate the defences",desc:"Hold this node for 90 s with 10 Drones to gain a Shield Generator here and an uncommon relic.",fx:[["hold",90,10,[["build","def"],["relic","uncommon"]]]]},{label:"Strip the armoury",desc:"Gain 12 Drones here.",fx:[["drones",12]]},{label:"Engineer bypass",desc:"Gain the structure and a common relic at once.",req:"engineer",fx:[["build","def"],["relic","common"]]}]);wn("stranded","Stranded Specialists","any","A crippled lifeboat hails you. Its passengers are willing to work for passage.",[{label:"Take one aboard",desc:"Choose one of three specialists.",fx:[["spec"]]},{label:"Sell them the fuel",desc:"Gain 30 Ultanium.",fx:[["ult",30]]}]);wn("energy","Unstable Energy Source","planet","The crust hums. Readings climb while you watch.",[{label:"Stabilise it",desc:"Hold for 75 s with 8 Drones to choose a rare relic.",ult:20,fx:[["hold",75,8,[["relic","rare"]]]]},{label:"Tap it now",desc:"Gain 50 Ultanium; lose 6 Drones here.",drones:6,fx:[["ult",50]]},{label:"Walk away",desc:"Nothing happens.",fx:[]}]);wn("derelict","Derelict Fleet","station","Dozens of hulls drift in formation. Some of them are warm.",[{label:"Repair a hull",desc:"Gain a ship here.",ult:15,fx:[["ship"]]},{label:"Wake the crews",desc:"Gain 16 Drones here. Automata attack with 12 Drones in 40 s.",fx:[["drones",16],["ambush",12]]},{label:"Reclaimer strips everything",desc:"Gain a ship and 30 Ultanium.",req:"reclaimer",fx:[["ship"],["ult",30]]}]);wn("settlement","Independent Settlement","planet","Farmers, mostly. They have seen the Coalition's recruiters and they do not like them.",[{label:"Trade",desc:"Gain 25 Ultanium.",fx:[["ult",25]]},{label:"Arm them",desc:"Gain 10 Drones here.",ult:10,fx:[["drones",10]]},{label:"Sign a charter",desc:"Choose a common relic.",ult:20,fx:[["relic","common"]]},{label:"Diplomat brokers an alliance",desc:"Gain 10 Drones and a common relic.",req:"diplomat",fx:[["drones",10],["relic","common"]]}]);wn("expedition","Lost Research Expedition","any","Their last transmission repeats every forty seconds. It ends mid-word.",[{label:"Rescue the team",desc:"Choose one of three specialists.",drones:5,fx:[["spec"]]},{label:"Recover the data",desc:"Commander gains 8 experience.",fx:[["xp",8]]},{label:"Follow the signal",desc:"Choose a rare relic. Automata attack with 20 Drones in 40 s.",fx:[["relic","rare"],["ambush",20]]}]);wn("platform","Automated Weapons Platform","station","It has been guarding nothing for three hundred years, and it is very good at it.",[{label:"Capture it",desc:"Gain a Shield Generator here.",fx:[["build","def"]]},{label:"Reprogram it",desc:"+8 shield here for 5 minutes and a common relic.",ult:15,fx:[["buff","def",8,300],["relic","common"]]},{label:"Scrap it",desc:"Gain 28 Ultanium.",fx:[["ult",28]]}]);wn("beacon","Ancient Navigation Beacon","any","One pulse per minute, aimed at a point deep inside Coalition space.",[{label:"Decode it",desc:"Reveal every node within 260 units.",fx:[["reveal",260]]},{label:"Overload it",desc:"Set Coalition mobilization back by a third of a stage.",ult:20,fx:[["mobil",-.33]]},{label:"Cartographer triangulates",desc:"Reveal the whole map.",req:"cartographer",fx:[["reveal",2e3]]}]);wn("forge","The Ancient Forge","planet","A foundry the size of a continent, cold for an age. The ignition sequence is still on the console.",[{label:"Restore the Forge",desc:"Hold for 120 s with 14 Drones to choose a rare relic and gain 15 Drones.",ult:30,fx:[["hold",120,14,[["relic","rare"],["drones",15]]]]},{label:"Melt it down",desc:"Gain 45 Ultanium.",fx:[["ult",45]]}]);wn("vault","Sealed Vault","any","Three locks. Your crew can force one of them.",[{label:"The armoury",desc:"Choose an uncommon relic.",drones:6,fx:[["relic","uncommon"]]},{label:"The treasury",desc:"Gain 40 Ultanium.",fx:[["ult",40]]},{label:"The war room",desc:"Commander gains 10 experience.",fx:[["xp",10]]}]);wn("deserters","Coalition Deserters","any","A squadron in Coalition colours powers down its weapons and asks for terms.",[{label:"Enlist them",desc:"Gain 14 Drones here. Mobilization advances 15% of a stage.",fx:[["drones",14],["mobil",.15]]},{label:"Debrief them",desc:"Reveal every node within 200 units and set mobilization back 10%.",fx:[["reveal",200],["mobil",-.1]]},{label:"Inquisitor takes their officers",desc:"Choose one of three specialists.",req:"inquisitor",fx:[["spec"]]}]);const k=1;function jt(n,e,t=1){if(e)for(const i in e)n[i]=(n[i]||0)+e[i]*t}const Ka={};for(const n of Cu)Ka[n.id]=n;const Yo=n=>Ka[n],sd=new WeakMap;function _t(n,e){const t=n.modV;let i=sd.get(n);if((!i||i.stamp!==t)&&(i={stamp:t,m:{}},sd.set(n,i)),i.m[e])return i.m[e];const s={},r=n.sides[e];if(r){for(const a of r.relics)jt(s,Tn[a]?.mods);for(const a of r.techs)jt(s,ut[a]?.mods);for(const a in r.techLv||{})jt(s,ut[a]?.mods,r.techLv[a]);r.kind==="faction"&&(jt(s,Qn[r.fac].mods),r.broken&&(s.prod=(s.prod||0)-.6)),r.kind==="archon"&&jt(s,us[r.fac].mods),r.kind==="player"&&jt(s,us[n.sides[n.archon].fac].pmods);for(const a of n.specs)if(!(a.owner!==e||a.held)&&(jt(s,ft[a.def].glob),a.cmd)){jt(s,uh[a.cmd.arch]);for(const o of a.cmd.perks)jt(s,Ka[o]?.glob)}}return i.m[e]=s,s}function Ko(n,e){const t={};if(jt(t,ft[e.def].loc),e.cmd){jt(t,Gi[e.cmd.arch].loc);for(const i of e.cmd.perks)jt(t,Ka[i]?.loc);_t(n,e.owner).cmdDouble&&jt(t,t)}return t}function nc(n,e,t,i){const s={};jt(s,_t(n,e));let r=!1,a=null;for(const o of t){const l=n.specs[o];!l||l.owner!==e||l.held||(l.def==="echo"?r=!0:!a&&!l.cmd&&(a=l),jt(s,Ko(n,l)))}r&&a&&jt(s,Ko(n,a));for(const o of i)o.until>n.t&&(s[o.k]=(s[o.k]||0)+o.v);return s}const nn=(n,e)=>nc(n,e.owner,e.specs,e.buffs),xi=(n,e)=>nc(n,e.owner,e.specs,e.buffs);function $t(n){n.rng=n.rng+1831565813|0;let e=n.rng;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}const hr=(n,e,t)=>e+Math.floor($t(n)*(t-e+1)),hn=(n,e,t)=>e+$t(n)*(t-e),ns=(n,e)=>e[Math.floor($t(n)*e.length)];function Ma(n,e){const t=e.slice();for(let i=t.length-1;i>0;i--){const s=Math.floor($t(n)*(i+1));[t[i],t[s]]=[t[s],t[i]]}return t}function rs(n,e,t){return Ma(n,e).slice(0,t)}const Xe=(n,e)=>Math.hypot(n.x-e.x,n.y-e.y),qt=(n,e)=>n.ships.find(t=>t.id===e),as=1e9;function it(n,e,t="info",i=-1){n.log.push({t:n.t,msg:e,kind:t,node:i}),n.log.length>150&&n.log.shift()}function jn(n,e){const t=n.sides[e];return t?t.kind==="player"?"You":t.kind==="faction"?Qn[t.fac].name:us[t.fac].name:e===0?"Neutral":"Automata"}function Xn(n,e){const t=n.sides[e];return t?t.kind==="player"?"#6cc5a0":t.kind==="faction"?Qn[t.fac].color:"#e07aa0":"#9aa3ad"}function os(n,e,t,i){const s={id:n.specs.length,def:e,owner:t,node:i,ship:-1,held:0,cd:{},cmd:null,shield:0};return n.specs.push(s),n.nodes[i].specs.push(s.id),n.modV++,s}function Or(n,e){if(e.node>=0){const t=n.nodes[e.node];t.specs=t.specs.filter(i=>i!==e.id),t.prisoners=t.prisoners.filter(i=>i!==e.id)}if(e.ship>=0){const t=qt(n,e.ship);t&&(t.specs=t.specs.filter(i=>i!==e.id))}e.node=-1,e.ship=-1}function ei(n,e,t,i=0){Or(n,e),e.node=t.id,e.held=i,(i?t.prisoners:t.specs).push(e.id),n.modV++}function ic(n,e,t){Or(n,e),e.ship=t.id,t.specs.push(e.id)}const Hi=(n,e)=>se.specSlots+(_t(n,e).slots||0),ii=n=>n.name||ft[n.def].name;function js(n,e){const t=n.nodes.filter(i=>i.owner===e);return t.length?t.find(i=>i.home||i.capital||i.citadel)||t.find(i=>i.kind==="station")||t[0]:null}function Vi(n,e){let t=0;for(const i of n.nodes)i.owner===e&&(t+=i.drones);for(const i of n.ships)i.owner===e&&(t+=i.drones);return t}function _i(n,e){const t=n.sides[e];if(!t)return as;const i=_t(n,e),s=i.droneCap||0;if(t.kind!=="player")return t.capBase+22*(n.mob.stage+n.mob.surge)+s;let r=se.capBase+s;for(const a of n.nodes)a.owner===e&&(r+=(a.kind==="planet"?se.capPlanet:se.capStation)+(se.habitatCap+(i.habitat||0))*(a.b.habitat||0));return r}function Za(n,e){const i=1+(nn(n,e).fov||0)+.25*(e.b.relay||0),s=e.kind==="planet"?se.fovInner.planet[e.size]:se.fovInner.station,r=e.kind==="planet"?se.fovOuter.planet[e.size]:se.fovOuter.station;return[s*i,r*i*(1+.3*(e.b.sensor||0))]}function On(n){const e=n.nodes.filter(t=>t.owner===k).map(t=>({n:t,r:Za(n,t)}));for(const t of n.ships)t.owner===k&&!t.lane&&e.push({n:t,r:sc(n,t)});for(const t of n.nodes){let i=0;if(t.owner===k)i=2;else{for(const r of e){const a=Xe(t,r.n);if(a<=r.r[0]){i=2;break}a<=r.r[1]&&(i=1)}i<2&&t.buffs.some(r=>r.k==="scan"&&r.until>n.t)&&(i=2)}n.vis[t.id]=i;const s=n.intel[t.id];i>s.seen&&(s.seen=i),i===2&&(s.t=n.t,s.snap={owner:t.owner,drones:t.drones,shields:t.shields,b:{...t.b},specs:t.specs.slice(),prisoners:t.prisoners.slice(),buffs:t.buffs.slice()})}}function sc(n,e){const t=xi(n,e),i=1+(t.fov||0)+(t.shipFov||0);return[se.shipFov[0]*i,se.shipFov[1]*i]}function Ja(n,e){if(e.owner===k)return 2;const t=(xi(n,e).stealth||0)>0||e.owner>1&&(_t(n,n.archon).stealth||0)>0;let i=0;for(const s of n.nodes){if(s.owner!==k)continue;const[r,a]=Za(n,s),o=Xe(e,s);if(o<=r)return 2;o<=a&&!t&&(i=1)}for(const s of n.ships){if(s.owner!==k||s.lane)continue;const[r,a]=sc(n,s),o=Xe(e,s);if(o<=r)return 2;o<=a&&!t&&(i=1)}return i&&((_t(n,k).sigint||0)>0||e.to>=0&&n.nodes[e.to].owner===k&&n.nodes[e.to].b.sensor)?2:i}function rc(n,e){if(n.vis[e.id]===2)return{live:!0,age:0,v:e};const t=n.intel[e.id];return t.snap?{live:!1,age:n.t-t.t,v:{...e,...t.snap}}:{live:!1,age:0,v:null}}function Zo(n,e,t){return se.mineSlots[e.size]+((t||nn(n,e)).mineSlots||0)}function wr(n,e,t){const i=t||(n.sides[e.owner]?nn(n,e):{}),s=(e.b.shield||0)+(e.b.sshield||0);return Math.max(0,Math.min(se.shieldCap,s*se.shieldPerGen+(i.shieldMax||0)+(i.def||0)))}function Pu(n,e,t){return!n.b.turret||e.ignStruct||e.stealth&&!t.seeStealth?0:Math.round(se.turretKill*n.b.turret*(1+(t.structDef||0))*(1-Math.min(.75,e.structHalf||0)))}function ac(n,e,t){const i=t||nn(n,e),s=n.sides[e.owner],r={mines:0,powered:0,on:0,out:0,cap:0,resNeed:0,resOn:!1,short:0};let a=e.drones;const o=(e.b.lab||0)+(e.b.slab||0)>0;if(e.research&&o&&s&&(r.resNeed=Iu(e.research)),r.resNeed&&e.resFirst&&(r.resOn=a>=r.resNeed,r.resOn&&(a-=r.resNeed)),e.kind==="planet"){r.mines=Math.min(e.b.mine||0,Zo(n,e,i)),r.powered=Math.min(r.mines,(e.b.gen||0)*se.minesPerGen),r.on=i.noOps?r.powered:Math.min(r.powered,a),i.noOps||(a-=r.on),i.offline&&(r.on=0);let c=0;for(let d=0;d<r.on;d++)c+=se.mineBase*se.sizeMult[e.size]*se.mineDim[Math.min(d,4)];r.cap=(se.capBySize[e.size]+(i.cap||0))*(1+(i.capPct||0)),r.out=Math.min(c*(1+(i.mine||0)),r.cap)}r.resNeed&&!e.resFirst&&(r.resOn=a>=r.resNeed);const l=(i.noOps?0:r.powered)+r.resNeed;return r.short=Math.max(0,l-e.drones),r}function hh(n,e){const t=n.sides[e];if(!t)return 0;const i=_t(n,e);let s=(t.kind==="player"?se.baseIncome:3)+(i.incomeFlat||0);for(const r of n.nodes)r.owner===e&&r.kind==="planet"&&(s+=ac(n,r).out);return i.prisonInc&&(s+=i.prisonInc*n.specs.filter(r=>r.held===e).length),s}function ba(n,e){return(n.b[e]||0)+(n.lane&&n.lane.kind==="build"&&n.lane.id===e?1:0)+n.queue.filter(t=>t.kind==="build"&&t.id===e).length}function Lu(n,e,t){return t==="mine"?Zo(n,e):t==="gen"?Math.ceil(Zo(n,e)/se.minesPerGen):zt[t].max}function Is(n,e,t){const i=zt[t],s=n.sides[e.owner];return!i||!s?"Not available":i.on!==e.kind?"Wrong node type":i.tech&&!s.techs.includes(i.tech)?`Needs ${ut[i.tech].name}`:ba(e,t)>=Lu(n,e,t)?"Maximum built":t==="mine"&&ba(e,"mine")>=ba(e,"gen")*se.minesPerGen?"Needs another Generator":e.queue.length>=4?"Queue full":s.ult<i.cost?"Not enough Ultanium":null}function oc(n,e){n.lane?n.queue.push(e):n.lane=e}function pr(n,e,t){const i=Is(n,e,t);if(i)return i;const s=zt[t];return n.sides[e.owner].ult-=s.cost,oc(e,{kind:"build",id:t,left:s.time,total:s.time,cost:s.cost}),null}function Ar(n,e){return Math.round(se.shipCost*(1-Math.min(.6,_t(n,e).shipCost||0)))}function Du(n,e){const t=n.sides[e.owner];if(!t||e.kind!=="station")return"Ships are built at stations";if(e.queue.length>=4)return"Queue full";const i=Ar(n,e.owner);return t.ult<i?"Not enough Ultanium":(t.ult-=i,oc(e,{kind:"ship",id:"ship",left:se.shipTime,total:se.shipTime,cost:i}),null)}function ph(n,e,t){const i=t<0?e.lane:e.queue[t];i&&(n.sides[e.owner].ult+=i.cost,t<0?e.lane=e.queue.shift()||null:e.queue.splice(t,1))}function Vn(n,e,t){const i={id:n.nextId++,owner:e,seq:n.nextId++,at:t.id,from:t.id,to:-1,x:t.x,y:t.y,drones:0,specs:[],buffs:[],loadUntil:0,redirected:!1,back:!1,off:!1};return n.ships.push(i),i}function Rr(n){return n.kind==="planet"?99:1+(n.b.dock||0)}function vi(n,e){if(e.at<0)return!1;const t=n.nodes[e.at];return t.kind==="planet"||e.owner!==k?!0:n.ships.filter(s=>s.at===t.id&&s.owner===e.owner).sort((s,r)=>s.seq-r.seq).indexOf(e)<Rr(t)}function mh(n,e){if(e.kind!=="station")return"Muster at a station";const t=n.sides[e.owner],i=_i(n,e.owner)-Vi(n,e.owner),s=Math.min(se.musterSize,i);if(s<=0)return"Drone cap reached";const r=s*Math.max(1,se.musterCost-(_t(n,e.owner).musterCost||0));return t.ult<r?`Needs ${r} Ultanium`:(t.ult-=r,e.drones+=s,null)}const gh=n=>Math.max(1,se.musterCost-(_t(n,k).musterCost||0)),lc=(n,e,t)=>(n.sides[e].techLv||{})[t]||0;function Jo(n,e,t){const i=ut[t],s=i.rep?Xs.cost*Math.pow(Xs.growth,lc(n,e,t)):ec[i.tier];return Math.round(s*(1-(_t(n,e).techCost||0)))}const Bs=n=>ut[n].rep?Xs.time:Ya[ut[n].tier],Iu=n=>ut[n].rep?Xs.ops:tc[ut[n].tier];function cc(n,e,t){const i=n.sides[e],s=ut[t];if(s.rep){if(lc(n,e,t)>=s.rep)return"Maximum level"}else if(i.techs.includes(t))return"Researched";return s.pre&&!i.techs.includes(s.pre)?`Needs ${ut[s.pre].name}`:s.excl&&i.techs.includes(s.excl)?`Locked: you chose ${ut[s.excl].name}`:null}function _h(n,e){return Object.keys(ut).filter(t=>!cc(n,e,t))}function vh(n,e,t){const i=n.sides[e.owner];if(!((e.b.lab||0)+(e.b.slab||0)))return"Needs a Research Lab";const s=cc(n,e.owner,t);if(s)return s;if(n.nodes.some(a=>a.owner===e.owner&&a.id!==e.id&&a.research===t))return"Already being researched elsewhere";const r=ut[t].excl;if(r&&n.nodes.some(a=>a.owner===e.owner&&a.research===r))return`${ut[r].name} is being researched; the two exclude each other`;if(i.techProg[t]===void 0){const a=Jo(n,e.owner,t);if(i.ult<a)return"Not enough Ultanium";i.ult-=a,i.techProg[t]=0}return e.research=t,null}function Cr(n,e,t){const i=n.sides[e],s=ut[t];if(s.rep)i.techLv=i.techLv||{},i.techLv[t]=(i.techLv[t]||0)+1;else{if(i.techs.includes(t))return;i.techs.push(t)}delete i.techProg[t],n.modV++;for(const a of n.nodes)a.owner===e&&a.research===t&&(a.research=null);const r=s.rep?`${s.name} ${i.techLv[t]}`:s.name;e===k?(n.stats.techs++,it(n,`Research complete: ${r}`,"good")):it(n,`${jn(n,e)} fielded ${r}`,"warn")}function Pr(n,e){if(!e.citadel)return 0;const t=n.factions.filter(i=>!n.sides[i].broken).length;return Math.round(t*se.aegisPerLayer*(1+(_t(n,n.archon).aegisPct||0)))}function ms(n,e,t,i,s){const r=Math.min(e,Pu(i,t,s)),a=Math.floor((e-r)*Math.min(.6,(s.preKill||0)+(s.ambush||0))),o=r+a,l=e-o,c=Math.floor(l*(t.atkPct||0)),d=(t.atk||0)+Math.min(t.atkPer8||0,Math.floor(l/8)),u=l+c+d,h=i.drones*(s.dbl?2:1),f=t.ignNat?0:Math.max(0,Math.floor(i.shields)-(t.shieldPierce||0)),v=-Math.round(i.owner===0&&t.vsNeutral||0),x=Pr(n,i),g=Math.max(0,h+f+v+x),m=u>g||u===g&&(t.ties||0)>0&&l>0;let p=0;return m&&(p=Math.max(1,Math.min(l,u-g)),p=Math.max(1,Math.min(l,Math.round(p*(1+(t.surv||0))))),s.martyr&&(p=Math.ceil(p/2))),{sent:e,preKilled:o,atk:u,def:g,win:m,surv:p,parts:{drones:l,pct:c,flat:d,garr:h,shield:f,turret:r,lance:a,bonus:v,aegis:x}}}function Nu(n,e,t,i){const s=e.map(r=>n.specs[r]).find(r=>r.def==="medic"&&r.shield<=n.t&&!r.held);for(const r of e.slice()){const a=n.specs[r];if(s){const o=js(n,a.owner);if(o&&o.id!==t.id){ei(n,a,o);continue}}ei(n,a,t,i||-1),a.owner===k&&(n.stats.specsLost++,it(n,`${ii(a)} was captured at ${t.name}`,"bad",t.id))}s&&(s.shield=n.t+180,s.owner===k&&it(n,`The Medic got your specialists out of ${t.name}`,"good",t.id))}function Qa(n,e,t,i){if(e.specs.length)if(t)Nu(n,e.specs,t,i);else for(const s of e.specs.slice()){const r=n.specs[s],a=js(n,r.owner);a?ei(n,r,a):(Or(n,r),r.owner=-1)}n.ships=n.ships.filter(s=>s!==e),e.owner===k&&n.stats.shipsLost++}function xh(n,e,t){const i=n.sides[e],s=Qn[i.fac];i.broken=!0,n.modV++,n.mob.stage=Math.max(1,n.mob.stage-1),n.mob.prog=0,n.offs=n.offs.filter(a=>a.owner!==e),it(n,`${s.warlord} is your prisoner. The ${s.name} is broken and a Citadel Aegis layer falls.`,"good",t.id);const r=os(n,s.sig,k,t.id);it(n,`${ii(r)} joins you from the ${s.name}.`,"good",t.id),zu(n,"rare",t.id),mc(n,10),n.stats.warlords++}function dc(n,e,t,i,s){const r=e.owner,a=t.owner,o=e.drones;s.salvage&&n.sides[a]&&(n.sides[a].ult+=Math.round(s.salvage*o)),r!==0&&Nu(n,e.specs,e,a);for(const d of n.ships.filter(u=>u.at===e.id&&u.owner===r&&u!==t))Qa(n,d,e,a);for(const d of e.prisoners.slice()){const u=n.specs[d];u.owner===a?(ei(n,u,e),a===k&&it(n,`${ii(u)} was rescued at ${e.name}`,"good",e.id)):u.held=a}if(r!==0&&e.kind==="station"){const d=Object.keys(e.b).filter(u=>u!=="dock"&&e.b[u]>0);if(d.length){const u=ns(n,d);e.b[u]--}}const l=e.capital&&n.sides[r]?.kind==="faction"&&!n.sides[r].broken;n.corridors.some(d=>d.a===e.id||d.b===e.id)&&(n.corridors=n.corridors.filter(d=>d.a!==e.id&&d.b!==e.id),r===k&&it(n,`Corridors to ${e.name} collapsed`,"bad",e.id));for(const d of n.nodes)d.owner===r&&(d.queue=d.queue.filter(u=>!(u.kind==="corridor"&&+u.id===e.id)),d.lane&&d.lane.kind==="corridor"&&+d.lane.id===e.id&&(n.sides[r]&&(n.sides[r].ult+=d.lane.cost),d.lane=d.queue.shift()||null));e.owner=a,e.drones=i.surv,e.shields=0,e.lane=null,e.queue=[],e.research=null,e.prod=0,e.hold=null,e.conv=null,e.buffs=[],t.at=e.id,t.to=-1,t.drones=0,t.x=e.x,t.y=e.y,t.buffs=[],t.seq=n.nextId++,t.off=!1;const c=n.sides[a];if(c){const d=_t(n,a);d.refund&&n.t>=c.refundT&&(e.drones+=i.sent-i.surv,c.refundT=n.t+d.refund,a===k&&it(n,"Phoenix Clause refunds your losses","good",e.id)),d.capShield&&(e.buffs.push({k:"def",v:d.capShield,until:n.t+60}),e.shields+=d.capShield),d.capUlt&&(c.ult+=d.capUlt)}n.modV++,a===k?(n.stats.captures++,it(n,`Captured ${e.name} with ${i.surv} Drones left`,"good",e.id),mc(n,t.specs.includes(n.cmdSpec)?4:2),n.sides[r]&&(n.mob.prog=Math.max(0,n.mob.prog-se.captureSetback)),l&&xh(n,r,e),e.offer&&(e.offer=!1,Bu(n,e.id)),e.event&&n.pending.push({kind:"event",node:e.id,opts:[],title:Un[e.event].name,event:e.event}),e.citadel&&(n.result="win",n.resultWhy=`${us[n.sides[n.archon].fac].name} is your prisoner. The Coalition is finished.`)):r===k&&(n.stats.nodesLost++,it(n,`${e.name} fell to ${jn(n,a)}`,"bad",e.id)),On(n)}function Uu(n,e,t,i,s){let r=i.atk;if(!s.ignNat){const l=Math.min(e.shields,r);e.shields-=l,r-=l}r-=Math.max(0,i.parts.bonus+i.parts.aegis);const a=Math.max(0,Math.min(e.drones,Math.ceil(r/(i.parts.garr>e.drones?2:1))));e.drones-=a,t.owner===k&&(it(n,`Attack on ${e.name} failed: ${i.atk} against ${i.def}`,"bad",e.id),n.stats.dronesLost+=t.drones),e.owner===k&&it(n,`${e.name} held against ${jn(n,t.owner)} (${i.atk} against ${i.def})`,"good",e.id),t.drones=0,t.buffs=[];const o=n.nodes[t.from];if(e.owner===0&&n.sides[t.owner]){const l=o&&o.owner===t.owner?o:js(n,t.owner);if(l){t.to=l.id,t.from=e.id,t.back=!0,t.x=e.x,t.y=e.y;return}}Qa(n,t,n.sides[e.owner]?e:null,e.owner)}function Sh(n,e){const t=n.nodes[e.to];if(e.x=t.x,e.y=t.y,e.lane){Mh(n,e,t);return}if(t.owner===e.owner){e.at=t.id,e.to=-1,e.buffs=[],e.seq=n.nextId++,e.back=!1,e.off=!1,e.unload=!0;return}if(e.drones<=0){if(e.owner===k&&!e.specs.length&&!e.back){t.buffs.push({k:"scan",v:1,until:n.t+20}),On(n);const a=n.nodes[e.from];if(_t(n,k).scoutReturn&&a.owner===k){it(n,`Scout identified ${t.name} and is returning`,"info",t.id),e.to=a.id,e.from=t.id,e.back=!0;return}it(n,`Scout identified ${t.name} and was lost`,"info",t.id)}Qa(n,e,n.sides[t.owner]?t:null,t.owner);return}const i=xi(n,e),s=nn(n,t),r=ms(n,e.drones,i,t,s);t.buffs=t.buffs.filter(a=>a.k!=="ambush"),e.owner===k&&n.stats.battles++,r.win?(e.owner===k&&(n.stats.dronesLost+=r.sent-r.surv),dc(n,t,e,r,i)):Uu(n,t,e,r,i)}function Mh(n,e,t){if(t.owner===e.owner&&e.path&&e.path.length){const i=e.path[0];if(ja(n,t.id,i)&&n.nodes[i].owner===e.owner){e.path.shift(),e.from=t.id,e.to=i;return}}if(t.owner!==e.owner&&e.drones>0){const i=xi(n,e),s=ms(n,e.drones,i,t,nn(n,t));if(s.win)dc(n,t,e,s,i);else{Uu(n,t,e,s,i);return}}else if(t.owner!==e.owner){Qa(n,e,n.sides[t.owner]?t:null,t.owner);return}if(n.ships.includes(e)){t.drones+=e.drones,e.drones=0;for(const i of e.specs.slice())ei(n,n.specs[i],t);n.ships=n.ships.filter(i=>i!==e)}}const uc=(n,e)=>n.corridors.filter(t=>t.a===e||t.b===e),Fu=n=>se.corridorMax+(_t(n,k).corridorMax||0);function Ou(n,e,t){const i=new Map([[e,-1]]),s=[e];for(;s.length;){const a=s.shift();if(a===t)break;for(const o of uc(n,a)){const l=o.a===a?o.b:o.a;!i.has(l)&&n.nodes[l].owner===k&&(i.set(l,a),s.push(l))}}if(!i.has(t)||e===t)return null;const r=[];for(let a=t;a!==e;a=i.get(a))r.unshift(a);return r}const fc=(n,e)=>n.nodes.filter(t=>t.id!==e&&t.owner===k&&Ou(n,e,t.id)).map(t=>t.id),ja=(n,e,t)=>n.corridors.find(i=>i.a===e&&i.b===t||i.a===t&&i.b===e),bh=(n,e)=>n.nodes.reduce((t,i)=>t+[i.lane,...i.queue].filter(s=>s&&s.kind==="corridor"&&(i.id===e||+s.id===e)).length,0);function ku(n,e,t){if(e.id===t.id)return"Pick a different node";if(e.owner!==k||t.owner!==k)return"Both ends must be your nodes";if(Xe(e,t)>se.corridorRange)return`Too far (corridors reach ${se.corridorRange})`;if(ja(n,e.id,t.id)||[e.lane,...e.queue,t.lane,...t.queue].some(s=>s&&s.kind==="corridor"&&(+s.id===e.id||+s.id===t.id)))return"Already linked or being built";const i=Fu(n);for(const s of[e,t])if(uc(n,s.id).filter(r=>!r.until).length+bh(n,s.id)>=i)return`${s.name} already has ${i} corridors`;return e.queue.length>=4?"Queue full":n.sides[k].ult<se.corridorCost?"Not enough Ultanium":null}function yh(n,e,t){const i=ku(n,e,t);if(i)return i;n.sides[k].ult-=se.corridorCost;const s=se.corridorTime*(1-Math.min(.6,nn(n,e).corridor||0));return oc(e,{kind:"corridor",id:String(t.id),left:s,total:s,cost:se.corridorCost}),null}function Eh(n,e,t,i,s){if(e.owner!==k||t.owner!==k)return"Both ends must be your nodes";const r=Ou(n,e.id,t.id);if(!r)return"No corridor route to that node";if(i=Math.max(0,Math.min(e.drones,Math.floor(i))),s=s.filter(o=>e.specs.includes(o)),!i&&!s.length)return"Nothing to send";if(s.length>Hi(n,k))return`At most ${Hi(n,k)} specialists at once`;const a=Vn(n,k,e);a.lane=!0,a.at=-1,a.to=r[0],a.path=r.slice(1),a.from=e.id,a.drones=i,e.drones-=i;for(const o of s)ic(n,n.specs[o],a);return n.modV++,null}function Th(n,e,t){if(t.at<0||t.loadUntil>0)return"Ship is not parked here";const i=n.nodes[t.at];if(i.owner!==e.owner)return"Not your node";const s=Hi(n,e.owner);return e.node===i.id&&!e.held?t.specs.length>=s?`The ship holds ${s} specialists`:(ic(n,e,t),null):e.ship===t.id?i.specs.length>=s?`${i.name} holds ${s} specialists`:(ei(n,e,i),t.unload=!1,null):"Specialist is not here"}function eo(n,e){return e.owner===k||n.vis[e.id]>=1||(_t(n,k).remember||0)>0&&n.intel[e.id].seen>=1}function hc(n,e){const t=xi(n,e);return se.shipSpeed*(e.lane?se.corridorSpeed*(1+(t.laneSpeed||0)):1)*Math.max(.3,1+(t.speed||0))}function pc(n,e,t){return Xe(e,t)/hc(n,e)}function ss(n,e,t,i,s){if(e.at<0)return"Ship is in flight";if(e.loadUntil>0)return"Ship is loading";const r=n.nodes[e.at];if(t.id===r.id)return"Already here";if(r.owner!==e.owner)return"Not your node";if(e.owner===k&&!eo(n,t))return"Target is not in detection range";const a=vi(n,e);a||(i=e.drones,s=e.specs.slice());const o=r.drones+(a?e.drones:0);i=Math.max(0,Math.min(Math.floor(i),a?o:e.drones));const l=a?r.specs.concat(e.specs):e.specs.slice();s=s.filter(f=>l.includes(f));const c=Hi(n,e.owner);if(s.length>c)return`A ship carries at most ${c} specialists`;if(a){const f=l.filter(v=>!s.includes(v));if(f.length>c)return`Only ${c} specialists can stay at this node`;r.drones=o-i,e.drones=i;for(const v of f)n.specs[v].ship===e.id&&ei(n,n.specs[v],r);for(const v of s)n.specs[v].ship!==e.id&&ic(n,n.specs[v],e)}const d=i>0||s.length>0;e.to=t.id,e.from=r.id,e.redirected=!1,e.back=!1,e.buffs=[];const u=nn(n,r);u.launchSpeed&&e.buffs.push({k:"speed",v:u.launchSpeed,until:as}),u.sling&&(e.buffs.push({k:"speed",v:1.5,until:n.t+40}),r.buffs=r.buffs.filter(f=>f.k!=="sling"));const h=xi(n,e);return e.loadUntil=n.t+(d&&!h.noLoad?se.loadTime:.1),n.modV++,null}function wh(n,e,t){return e.at>=0?"Ship is not in flight":e.redirected?"Already redirected this flight":xi(n,e).redirect?e.owner===k&&!eo(n,t)?"Target is not in detection range":(e.to=t.id,e.redirected=!0,null):"This ship cannot be redirected"}function mc(n,e){const t=n.specs[n.cmdSpec];if(!(!t||!t.cmd))for(t.cmd.xp+=e*(1+(_t(n,k).xp||0));t.cmd.lvl<5&&t.cmd.xp>=se.xpLevels[t.cmd.lvl];){t.cmd.lvl++,n.modV++;const i=rs(n,Cu.filter(s=>!t.cmd.perks.includes(s.id)),3).map(s=>s.id);n.pending.push({kind:"perk",node:-1,opts:i,title:`Commander reached level ${t.cmd.lvl}`}),it(n,`Your Commander reached level ${t.cmd.lvl}`,"good")}}function Bu(n,e){const t=new Set(n.specs.filter(s=>s.owner===k).map(s=>s.def)),i=rs(n,ch.filter(s=>!t.has(s)),3+(_t(n,k).offer||0));if(!i.length){n.sides[k].ult+=20;return}n.pending.push({kind:"spec",node:e,opts:i,title:`Residents of ${n.nodes[e].name}`})}function zu(n,e,t){const i=n.sides[k].relics,s=o=>Object.values(Tn).filter(l=>l.rarity===o&&!i.includes(l.id)).map(l=>l.id),r=e==="rare"?"uncommon":"common";let a=rs(n,s(e),e==="common"?3:2);if(a.length<3&&(a=a.concat(rs(n,s(r).filter(o=>!a.includes(o)),3-a.length))),!a.length){n.sides[k].ult+=30;return}n.pending.push({kind:"relic",node:t,opts:a,title:"Choose a relic"})}function Gu(n,e,t){const i=n.sides[k];for(const s of t)switch(s[0]){case"ult":i.ult+=s[1];break;case"drones":e.drones+=s[1];break;case"relic":zu(n,s[1],e.id);break;case"tech":{const r=_h(n,k);r.length?Cr(n,k,ns(n,r)):i.ult+=30;break}case"ship":Vn(n,k,e);break;case"spec":Bu(n,e.id);break;case"xp":mc(n,s[1]);break;case"buff":e.buffs.push({k:s[1],v:s[2],until:n.t+s[3]}),s[1]==="def"&&(e.shields+=s[2]);break;case"mobil":n.mob.prog=Math.max(0,Math.min(.99,n.mob.prog+s[1]));break;case"hold":e.hold={until:n.t+s[1],total:s[1],need:s[2],fx:s[3],name:e.event?Un[e.event].name:"Operation"};break;case"reveal":for(const r of n.nodes)Xe(r,e)<=s[1]&&r.buffs.push({k:"scan",v:1,until:n.t+45});On(n);break;case"build":{const r=e.kind==="planet"?"shield":"sshield";if((e.b[r]||0)>=zt[r].max){n.sides[k].ult+=20;break}e.b[r]=(e.b[r]||0)+1;break}case"ambush":{const r=$t(n)*Math.PI*2,a=48,o={id:n.nextId++,owner:0,seq:n.nextId++,at:-1,from:e.id,to:e.id,x:e.x+Math.cos(r)*a,y:e.y+Math.sin(r)*a,drones:s[1],specs:[],buffs:[],loadUntil:0,redirected:!1,back:!1,off:!0};n.ships.push(o),it(n,`Automata are closing on ${e.name} with ${s[1]} Drones`,"warn",e.id);break}}}function Hu(n,e,t){return t.ult&&n.sides[k].ult<t.ult?"Not enough Ultanium":t.drones&&e.drones<t.drones?"Not enough Drones here":t.req&&!e.specs.some(i=>n.specs[i].def===t.req&&n.specs[i].owner===k)?`Needs your ${ft[t.req].name} at this node`:null}function Ah(n,e){const t=n.pending[0];if(!t)return"Nothing to choose";const i=n.sides[k];if(t.kind==="event"){const r=n.nodes[t.node],a=Un[t.event];if(e<0||r.owner!==k||r.event!==t.event)return n.pending.shift(),null;const o=a.choices[e],l=Hu(n,r,o);return l||(o.ult&&(i.ult-=o.ult),o.drones&&(r.drones-=o.drones),n.pending.shift(),Gu(n,r,o.fx),r.event=null,n.stats.events++,it(n,`${a.name}: ${o.label}`,"info",r.id),null)}if(t.kind==="crew")return n.pending.shift(),null;const s=t.opts[e];if(s===void 0)return"Pick one";if(n.pending.shift(),t.kind==="draft"){const r=n.nodes[n.home],a=os(n,s.base,k,r.id);a.cmd={base:s.base,arch:s.arch,lvl:1,xp:0,perks:[]},a.name="Commander",n.cmdSpec=a.id}else if(t.kind==="spec"){const r=n.nodes[t.node].owner===k?n.nodes[t.node]:js(n,k);if(r){const a=os(n,s,k,r.id);it(n,`${ii(a)} joined at ${r.name}`,"good",r.id),n.stats.specs++}}else t.kind==="relic"?(i.relics.push(s),n.stats.relics++,it(n,`Relic claimed: ${Tn[s].name}`,"good")):t.kind==="perk"&&n.specs[n.cmdSpec].cmd.perks.push(s);return n.modV++,null}function Rh(n,e,t){if(e.held!==k||e.node<0)return"Not your prisoner";if(e.def==="warlord"||e.def==="archon")return"Leaders cannot be ransomed or turned";const i=n.sides[k],s=_t(n,k);return t?s.recruit?i.ult<se.recruitCost?"Not enough Ultanium":(i.ult-=se.recruitCost,Vu(n,e),null):"Needs an Inquisitor":(i.ult+=Math.round(se.ransom*(1+(s.ransom||0))),Or(n,e),e.owner=-1,e.held=0,n.modV++,null)}function Vu(n,e){const t=n.nodes[e.node];if(n.specs.some(i=>i.owner===k&&i.def===e.def)){n.sides[k].ult+=25,Or(n,e),e.owner=-1,e.held=0,it(n,`A second ${ft[e.def].name} had nothing to teach; they paid 25 Ultanium for passage`,"info");return}e.owner=k,e.cd={},ei(n,e,t),n.stats.specs++,it(n,`${ii(e)} now works for you`,"good",t.id)}function Ch(n,e,t){if(t.kind==="build")e.b[t.id]=(e.b[t.id]||0)+1,e.owner===k&&it(n,`${zt[t.id].name} finished at ${e.name}`,"info",e.id);else if(t.kind==="corridor"){const i=n.nodes[+t.id];i.owner===e.owner&&!ja(n,e.id,i.id)?(n.corridors.push({a:e.id,b:i.id,owner:e.owner,until:0}),e.owner===k&&it(n,`Corridor open: ${e.name} to ${i.name}`,"good",e.id)):n.sides[e.owner].ult+=t.cost}else Vn(n,e.owner,e),e.owner===k&&it(n,`Ship launched from the yards at ${e.name}`,"info",e.id)}function Ph(n){const e=se.dt;n.t+=e,n.tick++;const t={},i={};for(const r in n.sides)t[r]=Vi(n,+r),i[r]=0;for(const r of n.nodes){if(r.buffs.length){const u=r.buffs.filter(h=>h.until<=n.t);u.length&&(u.some(h=>h.k==="dbl")&&(r.drones=Math.floor(r.drones*.75)),r.buffs=r.buffs.filter(h=>h.until>n.t))}const a=nn(n,r),o=wr(n,r,a);r.shields<o&&!a.noRegen?r.shields=Math.min(o,r.shields+e*(1+(a.natRegen||0))/se.shieldRegenSecs):r.shields>o&&(r.shields=o);const l=n.sides[r.owner];if(!l)continue;const c=(a.frozen||0)>0;if(r.lane&&!c){const u=r.lane;u.left-=e*(u.kind==="ship"?1+.25*(r.b.shipyard||0)+(a.shipSpeed||0):1+(a.build||0)),u.left<=0&&(r.lane=r.queue.shift()||null,Ch(n,r,u))}else if(r.kind==="station"&&!c&&(r.prod=Math.min(se.batchTime,r.prod+e*Math.max(.2,1+(a.prod||0)+.25*(r.b.barracks||0))),r.prod>=se.batchTime)){const u=Math.min(se.batch+(a.batch||0),_i(n,r.owner)-t[r.owner]);u>0&&(r.drones+=u,t[r.owner]+=u,r.prod=0,r.owner===k&&(n.stats.dronesMade+=u))}const d=ac(n,r,a);if(i[r.owner]+=d.out,r.research&&d.resOn){const u=r.research;l.techProg[u]=(l.techProg[u]||0)+e*(1+(a.research||0)),l.techProg[u]>=Bs(u)&&Cr(n,r.owner,u)}if(r.hold&&n.t>=r.hold.until){const u=r.hold;r.hold=null,r.drones>=u.need?(it(n,`${u.name} complete at ${r.name}`,"good",r.id),Gu(n,r,u.fx)):it(n,`${u.name} failed at ${r.name}: fewer than ${u.need} Drones on site`,"bad",r.id)}if(r.conv&&n.t>=r.conv.until){const u=n.specs[r.conv.spec];r.conv=null,u&&u.held===k&&u.node===r.id&&Vu(n,u)}}for(const r in n.sides){const a=n.sides[r],o=_t(n,+r);let l=i[r]+(a.kind==="player"?se.baseIncome:3)+(o.incomeFlat||0);if(o.prisonInc&&(l+=o.prisonInc*n.specs.filter(c=>c.held===+r).length),a.ult+=l*e/60,a.kind==="player"&&(n.stats.ultMade+=l*e/60),o.levy&&n.t>=a.levyT){a.levyT=n.t+o.levy;for(const c of n.nodes)c.owner===+r&&t[r]<_i(n,+r)&&(c.drones++,t[r]++)}}for(const r of n.ships.slice()){if(r.buffs.length&&(r.buffs=r.buffs.filter(c=>c.until>n.t)),r.at>=0){const c=n.nodes[r.at];if(r.loadUntil>0)n.t>=r.loadUntil&&(r.loadUntil=0,r.at=-1,r.x=c.x,r.y=c.y);else if(r.unload&&c.owner===r.owner&&vi(n,r)){c.drones+=r.drones,r.drones=0;const d=Hi(n,r.owner);for(const u of r.specs.slice())c.specs.length<d&&ei(n,n.specs[u],c);r.unload=!1,r.owner===k&&r.specs.length&&!n.pending.some(u=>u.kind==="crew"&&u.opts[0]===r.id)&&n.pending.push({kind:"crew",node:c.id,opts:[r.id],title:`${c.name} is full`})}continue}const a=n.nodes[r.to],o=Xe(r,a),l=hc(n,r)*e;o<=l?Sh(n,r):(r.x+=(a.x-r.x)/o*l,r.y+=(a.y-r.y)/o*l)}n.corridors.some(r=>r.until&&r.until<=n.t)&&(n.corridors=n.corridors.filter(r=>!r.until||r.until>n.t));const s=n.specs[n.cmdSpec];s&&(s.owner!==k?(n.result="lose",n.resultWhy="Your Commander was lost with their ship."):s.held?n.cmdLostT<0?(n.cmdLostT=n.t,it(n,`YOUR COMMANDER IS A PRISONER at ${n.nodes[s.node].name}. Retake it before the window closes.`,"bad",s.node)):n.t-n.cmdLostT>=gc(n)&&(n.result="lose",n.resultWhy=`Your Commander was not recovered from ${n.nodes[s.node].name} in time.`):n.cmdLostT=-1,!n.result&&!n.nodes.some(r=>r.owner===k)&&(n.result="lose",n.resultWhy="You hold no territory.")),n.tick%3===0&&On(n)}const gc=n=>se.rescueSecs+(_t(n,k).rescue||0),_c="spacenodes.tune.v1",co=JSON.parse(JSON.stringify({cfg:se,build:zt,research:{TECH_COST:ec,TECH_TIME:Ya,TECH_OPS:tc,REP:Xs}})),Sr={TECH_COST:ec,TECH_TIME:Ya,TECH_OPS:tc,REP:Xs},rd={shipSpeed:"Map units per second",loadTime:"Seconds to load a ship",startUlt:"Starting Ultanium",baseIncome:"Free Ultanium per minute",capBase:"Drone cap before territory",capPlanet:"Drone cap per planet held",capStation:"Drone cap per station held",habitatCap:"Drone cap per Habitat",batch:"Drones per batch",batchTime:"Seconds per Drone batch",shipCost:"Ultanium per ship",shipTime:"Seconds to build a ship",shieldPerGen:"Shield per generator",shieldCap:"Most shield a node can hold",shieldRegenSecs:"Seconds per shield point recharged",neutralShieldGens:"Shield generators on neutral planets (small, medium, large)",turretKill:"Drones each turret shoots down per arriving fleet",musterCost:"Ultanium per mustered Drone",musterSize:"Drones per Muster",capBySize:"Mining ceiling per planet size (/min)",mineBase:"Ultanium per mine per minute",stageSecs:"Seconds per mobilization stage",graceSecs:"Seconds before the first offensive",offInterval:"Seconds between offensives, by stage",offCommit:"Share of Drones committed to offensives, by stage",aegisPerLayer:"Citadel Aegis per unbroken faction",rescueSecs:"Commander rescue window",corridorCost:"Corridor cost",corridorTime:"Corridor build seconds",corridorRange:"Corridor reach",corridorMax:"Corridors per node",corridorSpeed:"Convoy speed multiplier",shipFov:"Ship vision: full intelligence, detection",fovInner:"Node full-intelligence radius",fovOuter:"Node detection radius"};function ya(){try{return{cfg:{},build:{},research:{},...JSON.parse(localStorage.getItem(_c)||"{}")}}catch{return{cfg:{},build:{},research:{}}}}function ad(n){try{localStorage.setItem(_c,JSON.stringify(n))}catch{}}function Qo(n,e,t){const i=n[e];Array.isArray(i)&&Array.isArray(t)?(i.length=0,i.push(...t)):i&&typeof i=="object"&&t&&typeof t=="object"?Object.assign(i,t):n[e]=t}function Lh(){const n=ya();for(const e in n.cfg)e in se&&Qo(se,e,n.cfg[e]);for(const e in n.build)zt[e]&&Object.assign(zt[e],n.build[e]);for(const e in n.research)e in Sr&&Qo(Sr,e,n.research[e])}const uo=n=>Array.isArray(n)?n.join(", "):n&&typeof n=="object"?JSON.stringify(n):String(n);function Dh(n,e){return Array.isArray(e)?n.split(/[,\s]+/).filter(Boolean).map(Number):e&&typeof e=="object"?JSON.parse(n):Number(n)}const Ih=n=>Array.isArray(n)?n.every(e=>Number.isFinite(e)):typeof n=="number"?Number.isFinite(n):n!==null&&typeof n=="object";function Nh(n){const e=document.createElement("div");e.id="console",document.body.appendChild(e);let t="values",i="",s=["Type help for commands."];const r=(d,u,h,f)=>`<label class="crow ${uo(h)!==uo(f)?"changed":""}"><span><b>${u}</b><small>${rd[u]||""}</small></span><input data-g="${d}" data-k="${u}" value="${uo(h)}"></label>`;function a(){const d=ya();let u="";const h=i.toLowerCase(),f=x=>!h||x.toLowerCase().includes(h);if(t==="values")for(const x of Object.keys(se))x!=="dt"&&f(x+(rd[x]||""))&&(u+=r("cfg",x,se[x],co.cfg[x]));else if(t==="buildings"){u+='<div class="bgrid"><b>Building</b><b>Cost</b><b>Seconds</b><b>Max</b>';for(const x in zt)if(f(x+zt[x].name)){const g=zt[x],m=co.build[x];u+=`<span>${g.name} <small>${g.on}</small></span>`+["cost","time","max"].map(p=>`<input class="${g[p]!==m[p]?"changed":""}" data-g="build" data-k="${x}" data-f="${p}" value="${g[p]}">`).join("")}u+="</div>"}else if(t==="research"){for(const x in Sr)u+=r("research",x,Sr[x],co.research[x]);u+='<p class="dim">TECH_* lists are by tier: [unused, 1, 2, 3, 4]. REP sets repeatable technologies: base cost, growth per level, seconds, Drones.</p>'}else u+=`<div class="cout">${s.slice(-60).map(x=>`<div>${x.replace(/</g,"&lt;")}</div>`).join("")}</div><input id="ccmd" placeholder="command, e.g. ult 500" autocomplete="off">`;const v=Object.keys(d.cfg).length+Object.keys(d.build).length+Object.keys(d.research).length;e.innerHTML=`<div class="chead"><b>Tuning console</b><small>${v} change${v===1?"":"s"} saved in this browser</small><button data-c="close">✕</button></div>
      <div class="ctabs">${["values","buildings","research","commands"].map(x=>`<button data-c="tab:${x}" class="${t===x?"on":""}">${x}</button>`).join("")}</div>
      ${t==="commands"?"":`<input id="cfilter" placeholder="filter" value="${i}">`}
      <div class="cbody">${u}</div>
      <div class="cfoot"><button data-c="export">Copy changes</button><button data-c="import">Paste changes</button><button data-c="reset">Reset all</button></div>
      <p class="dim">Most values apply at once. Map values (shields on neutral planets, garrisons) apply to the next new run.</p>`,t==="commands"&&e.querySelector("#ccmd")?.focus()}function o(d){const u=ya(),h=d.dataset.g,f=d.dataset.k;try{if(h==="build"){const v=d.dataset.f,x=Number(d.value);if(!Number.isFinite(x))throw 0;zt[f][v]=x,u.build[f]={...u.build[f]||{},[v]:x}}else{const v=h==="cfg"?se:Sr,x=Dh(d.value,v[f]);if(!Ih(x))throw 0;Qo(v,f,x),(h==="cfg"?u.cfg:u.research)[f]=x}ad(u),d.classList.remove("bad"),n.refresh(),a()}catch{d.classList.add("bad")}}function l(d){const[u,...h]=d.trim().split(/\s+/),f=n.game(),v=h[0]!==void 0?Number(h[0]):NaN;s.push(`> ${d}`);const x=m=>s.push(m),g=n.selected();if(u==="help"||!u){x("ult N · drones N (selected node) · cap · reveal · stage N · mob 0-1 · tech ID|all · relic ID · spec ID · win · speed N · list specs|relics|techs");return}if(u==="list"){const m=h[0]==="relics"?Object.keys(Tn):h[0]==="techs"?Object.keys(ut):Object.keys(ft);x(m.join(" "));return}if(u==="speed"){n.setSpeed(Math.max(1,Math.min(32,v||1))),x(`speed ${v}x`);return}if(!f){x("Start a run first.");return}switch(u){case"ult":f.sides[k].ult+=v||0,x(`Ultanium ${Math.floor(f.sides[k].ult)}`);break;case"drones":g<0||f.nodes[g].owner!==k?x("Select one of your nodes first"):(f.nodes[g].drones+=v||0,x(`${f.nodes[g].name}: ${f.nodes[g].drones} Drones`));break;case"cap":x(`Drones ${Vi(f,k)} / cap ${_i(f,k)}`);break;case"reveal":for(const m of f.nodes)m.buffs.push({k:"scan",v:1,until:f.t+120});On(f),x("Whole map identified for 2 minutes");break;case"stage":f.mob.stage=Math.max(1,Math.min(5,v||1)),f.mob.prog=0,x(`Mobilization stage ${f.mob.stage}`);break;case"mob":f.mob.prog=Math.max(0,Math.min(.99,v||0)),x(`Mobilization progress ${f.mob.prog}`);break;case"tech":if(h[0]==="all"){for(const m in ut)!ut[m].rep&&!ut[m].excl&&Cr(f,k,m);x("Granted every non-doctrine technology")}else ut[h[0]]?(Cr(f,k,h[0]),x(`Granted ${ut[h[0]].name}`)):x("Unknown technology");break;case"relic":Tn[h[0]]?(f.sides[k].relics.push(h[0]),f.modV++,x(`Relic ${Tn[h[0]].name}`)):x("Unknown relic");break;case"spec":{const m=g>=0&&f.nodes[g].owner===k?g:f.home;ft[h[0]]?(os(f,h[0],k,m),x(`${ft[h[0]].name} at ${f.nodes[m].name}`)):x("Unknown specialist");break}case"win":f.result="win",f.resultWhy="Console.";break;default:x("Unknown command. Type help.")}n.refresh()}e.addEventListener("click",d=>{const u=d.target.closest("[data-c]");if(!u)return;const[h,f]=u.dataset.c.split(":");if(h==="close")c(!1);else if(h==="tab")t=f,a();else if(h==="export"){const v=JSON.stringify(ya(),null,1);navigator.clipboard?.writeText(v).catch(()=>{}),s.push("Changes copied to the clipboard:",v),t="commands",a()}else if(h==="import"){const v=prompt("Paste tuning JSON");if(v)try{ad({cfg:{},build:{},research:{},...JSON.parse(v)}),location.reload()}catch{alert("That is not valid JSON")}}else h==="reset"&&confirm("Reset every tuned value to the default? The page reloads.")&&(localStorage.removeItem(_c),location.reload())}),e.addEventListener("change",d=>{const u=d.target;u.dataset.g&&o(u)}),e.addEventListener("input",d=>{const u=d.target;if(u.id==="cfilter"){i=u.value;const h=u.selectionStart;a();const f=e.querySelector("#cfilter");f.focus(),f.setSelectionRange(h,h)}}),e.addEventListener("keydown",d=>{d.stopPropagation();const u=d.target;d.key==="Enter"&&u.id==="ccmd"?(l(u.value),a()):d.key==="Enter"&&u.dataset.g?o(u):(d.key==="`"||d.key==="Escape")&&(d.preventDefault(),c(!1))});function c(d){const u=d??!e.classList.contains("open");e.classList.toggle("open",u),u&&a()}return document.addEventListener("keydown",d=>{(d.key==="`"||d.key==="F2")&&!d.target.closest("input,textarea")&&(d.preventDefault(),c())}),{toggle:c}}const Uh=["Kestrel","Bastille","Harrow","Vigil","Anchor","Lantern","Marrow","Cinder","Tether","Gantry","Rook","Ward","Halcyon","Talon","Spindle","Ember","Quarry","Beacon","Keel","Sable"],Fh=["Ka","Ve","Or","Tal","Mi","Sen","Dra","Ul","Phe","Ny","Cor","Az","Lo","Ery","Bri","Zan","Hel","Qua","Io","Xe"],Oh=["ris","dan","thos","mir","vek","lun","tar","ion","sha","bor","nea","rax","phi","dor","lys","gan","tis","mon","rae","kai"];function fo(n,e,t,i){return{owner:n,kind:e,fac:t,ult:i,techs:[],techProg:{},techLv:{},relics:[],broken:!1,aiT:6+n*2,expT:60+n*15,capBase:0,refundT:0,levyT:60}}function kh(n,e=0){const s={v:1,seed:n,rng:n|0,t:0,tick:0,modV:1,threat:e,w:560,h:360,nodes:[],ships:[],specs:[],sides:{},factions:[2,3,4],archon:5,mob:{stage:1,prog:0,nextOff:se.graceSecs,turn:0,surge:0},offs:[],corridors:[],pending:[],log:[],cmdSpec:-1,cmdLostT:-1,intel:[],vis:[],result:null,resultWhy:"",stats:{captures:0,nodesLost:0,battles:0,dronesLost:0,dronesMade:0,shipsLost:0,specs:0,specsLost:0,relics:0,techs:0,events:0,warlords:0,ultMade:0},nextId:1,home:0,citadel:1};for(let S=0;S<5;S++)$t(s);const r=[{x:hn(s,42,60),y:hn(s,360*.32,360*.68),region:k},{x:560-hn(s,42,60),y:hn(s,360*.32,360*.68),region:5}];for(let S=0;S<6e3&&r.length<58;S++){const P={x:hn(s,24,536),y:hn(s,24,336),region:0};r.every(C=>Xe(P,C)>=31)&&r.push(P)}const a=r[0],o=r[1],l=()=>r.filter(S=>S.region===0),c=(S,P)=>P.slice().sort((C,R)=>Xe(C,S)-Xe(R,S));for(const S of c(o,l()).slice(0,4))Xe(S,o)<95&&(S.region=5);const d=Ma(s,[.2,.5,.8]),u=[.42,.6,.74],h=[];for(const S of[2,1,0]){const P={x:u[S]*560+hn(s,-15,15),y:d[S]*360+hn(s,-20,20)},C=c(P,l().filter(R=>Xe(R,a)>125))[0];C.region=2+S,h[S]=C;for(const R of c(C,l().filter(N=>Xe(N,a)>96)).slice(0,6))Xe(R,C)<95&&(R.region=2+S)}const f=rs(s,Object.keys(Qn),3);s.sides[k]=fo(k,"player","",se.startUlt),f.forEach((S,P)=>s.sides[2+P]=fo(2+P,"faction",S,20)),s.sides[5]=fo(5,"archon",ns(s,Object.keys(us)),30);const v=Xe(a,o),x=c(a,l()),g=new Set,m=()=>{for(;;){const S=ns(s,Fh)+ns(s,Oh);if(!g.has(S))return g.add(S),S}},p={list:[]},E=S=>{p.list.length||(p.list=Ma(s,Object.keys(Un)));const P=p.list.findIndex(C=>Un[C].on==="any"||Un[C].on===S);return P<0?null:p.list.splice(P,1)[0]},M=1+.08*e;r.forEach((S,P)=>{const C=Math.max(0,Math.min(1,Xe(S,a)/v+hn(s,-.12,.12))),R={id:P,name:m(),kind:"planet",x:S.x,y:S.y,size:0,owner:S.region,region:S.region,threat:C,drones:0,shields:0,b:{},lane:null,queue:[],prod:0,research:null,resFirst:!1,specs:[],prisoners:[],buffs:[],event:null,offer:!1,hold:null,conv:null,capital:!1,citadel:!1,home:!1},N=$t(s);if(R.size=N<.35?0:N<.8?1:2,S===a)R.kind="station",R.home=!0,R.drones=se.startDrones,R.name="Haven",R.b={sshield:1};else if(S===o)R.kind="station",R.citadel=!0,R.name="The Citadel",R.drones=Math.round(46*M),R.b={turret:3,sshield:4,barracks:1,shipyard:1,dock:2};else if(S.region===0){const B=x.indexOf(S);R.owner=0,R.kind=B<2?"planet":B===2?"station":$t(s)<.62?"planet":"station",B===0&&(R.size=0),B===1&&(R.size=1);const L=Xe(S,a)<78||B<=2;R.drones=L?hr(s,0,2)+(R.kind==="station"?3:0):Math.round((C*22*hn(s,.6,1.3)+(R.kind==="station"?4:0))*M),R.kind==="planet"?(R.offer=!0,B>1&&$t(s)<.3&&(R.event=E("planet")),R.b.shield=se.neutralShieldGens[R.size]):(R.event=E("station"),$t(s)<.5&&(R.b[ns(s,["turret","barracks","shipyard","sensor","dock"])]=1))}else{const B=h.includes(S);R.capital=B,R.kind=B?"station":$t(s)<.55?"planet":"station",R.drones=Math.round((B?22+C*14:7+C*14*hn(s,.7,1.2))*M),S.region===5&&(R.drones=Math.round(hr(s,16,24)*M)),R.kind==="planet"?R.b={gen:1,mine:hr(s,1,2),shield:S.region===5?2:1}:B?R.b={turret:2,sshield:2,barracks:1,dock:1}:R.b=$t(s)<.5?{turret:1,sshield:1}:{sshield:1}}R.shields=Math.min(se.shieldCap,((R.b.shield||0)+(R.b.sshield||0))*se.shieldPerGen),R.kind==="station"&&!R.home&&!R.citadel&&(R.name=`${ns(s,Uh)}-${hr(s,2,99)}`),s.nodes.push(R),s.intel.push({seen:0,t:0,snap:null}),s.vis.push(0)}),s.home=0,s.citadel=1,Vn(s,k,s.nodes[0]);for(const S of s.factions){const P=Qn[s.sides[S].fac],C=s.nodes.filter(L=>L.owner===S),R=C.find(L=>L.capital);R.name=P.name.split(" ")[0]+" Prime",os(s,"warlord",S,R.id).name=P.warlord;const N=Ma(s,C.filter(L=>!L.capital));P.specs.forEach((L,G)=>{N[G]&&os(s,L,S,N[G].id)}),Vn(s,S,R),Vn(s,S,R);const B=C.find(L=>L.kind==="station"&&!L.capital);B&&Vn(s,S,B),s.sides[S].capBase=C.reduce((L,G)=>L+G.drones,0)+10}const w=us[s.sides[5].fac];os(s,"archon",5,1).name=`${w.name} ${w.title}`,Vn(s,5,s.nodes[1]),Vn(s,5,s.nodes[1]),s.sides[5].capBase=s.nodes.filter(S=>S.owner===5).reduce((S,P)=>S+P.drones,0)+10;const T=rs(s,dh,3),_=rs(s,Object.keys(Gi),3);return s.pending.push({kind:"draft",node:0,opts:T.map((S,P)=>({base:S,arch:_[P]})),title:"Choose your Commander"}),On(s),s}const Bh={aggr:1,expand:1e9,react:.9,target:"weak",build:{turret:3,sshield:2,barracks:3,mine:2,gen:2,shield:2,dock:1}},Wu=(n,e)=>n.sides[e].kind==="faction"?Qn[n.sides[e].fac].ai:Bh,vc=(n,e)=>n.ships.find(t=>t.owner===e.owner&&t.at===e.id&&t.loadUntil===0);function Mr(n,e){const t=vc(n,e);if(t)return t;const i=n.sides[e.owner],s=Ar(n,e.owner);if(!(i.ult<s))return i.ult-=s,Vn(n,e.owner,e)}const ho=(n,e)=>!!vc(n,e)||n.sides[e.owner].ult>=Ar(n,e.owner),$u=(n,e)=>ms(n,0,{},e,nn(n,e)).def;function od(n,e,t){const i=Object.keys(e).filter(t);let s=i.reduce((a,o)=>a+e[o],0);if(!i.length)return null;let r=$t(n)*s;for(const a of i)if(r-=e[a],r<=0)return a;return i[0]}function zh(n,e){const t=n.sides[e],i=Wu(n,e),s=n.nodes.filter(l=>l.owner===e);if(!s.length||t.broken)return;for(const l of s)if(!l.lane){if(l.kind==="planet"){if(!Is(n,l,"mine"))pr(n,l,"mine");else if(!Is(n,l,"gen")&&(l.b.mine||0)>=(l.b.gen||0)*se.minesPerGen)pr(n,l,"gen");else if($t(n)<.3){const c=od(n,i.build,d=>zt[d].on==="planet"&&!Is(n,l,d));c&&pr(n,l,c)}}else if($t(n)<.15){const c=od(n,i.build,d=>zt[d].on==="station"&&!Is(n,l,d));c&&pr(n,l,c)}}if(n.ships.filter(l=>l.owner===e).length<3+Math.floor(n.mob.stage/2)&&!s.some(l=>l.lane?.kind==="ship")){const l=s.filter(c=>c.kind==="station"&&!c.lane).sort((c,d)=>d.drones-c.drones)[0];l&&Du(n,l)}const a=s.find(l=>n.ships.filter(c=>c.owner===e&&c.at===l.id&&c.loadUntil===0).length>=2);if(a){const l=s.filter(c=>c.drones>=10&&!n.ships.some(d=>d.owner===e&&(d.at===c.id||d.to===c.id))).sort((c,d)=>Xe(c,a)-Xe(d,a))[0];l&&ss(n,vc(n,a),l,0,[])}for(const l of n.ships){if(l.owner!==k||l.at>=0||l.drones<=0||l.off)continue;const c=n.nodes[l.to];if(c.owner!==e||(l.off=!0,xi(n,l).stealth||$t(n)>i.react))continue;const d=pc(n,l,c),u=s.filter(h=>h.id!==c.id&&h.drones>8&&ho(n,h)&&Xe(h,c)/se.shipSpeed+se.loadTime+1<d).sort((h,f)=>f.drones-h.drones)[0];u&&ss(n,Mr(n,u),c,Math.floor((u.drones-4)*.6),[])}const o=s.filter(l=>!l.capital&&l.drones<6+Math.round(l.threat*8)).sort((l,c)=>l.drones-c.drones)[0];if(o){const l=s.filter(c=>c.id!==o.id&&c.drones>20&&ho(n,c)).sort((c,d)=>Xe(c,o)-Xe(d,o))[0];l&&ss(n,Mr(n,l),o,Math.min(10,Math.floor((l.drones-12)/2)+4),[])}if(n.t>=t.expT&&t.kind==="faction"){let l=null;for(const c of s)if(ho(n,c))for(const d of n.nodes){if(d.owner!==0)continue;const u=Xe(c,d);if(u>120)continue;const h=$u(n,d)+2;c.drones-6>=h&&(!l||u<l.d)&&(l={src:c,tgt:d,need:h,d:u})}l&&(ss(n,Mr(n,l.src),l.tgt,l.need+hr(n,0,3),[]),t.expT=n.t+i.expand*hn(n,.8,1.2))}}function Gh(n,e){const t=Wu(n,e),i=n.nodes.filter(f=>f.owner===e),s=n.nodes.filter(f=>f.owner===k);if(!i.length||!s.length)return;let r=null,a=1e9;for(const f of s){const v=Math.min(...i.map(m=>Xe(m,f))),x=$u(n,f);let g=t.target==="weak"?x*4+v*.5:v+x*1.5;t.target==="spec"&&(g-=60*f.specs.length+(f.specs.includes(n.cmdSpec)?120:0)),g<a&&(a=g,r=f)}if(!r)return;const o=r,l=i.slice().sort((f,v)=>Xe(f,o)-Xe(v,o))[0],c=Math.min(.92,se.offCommit[n.mob.stage]*(1+(_t(n,n.archon).offBig||0))*(.7+.3*t.aggr)),d=i.filter(f=>f.id!==l.id&&f.drones>=9&&Xe(f,l)<200).sort((f,v)=>Xe(f,l)-Xe(v,l)).slice(0,1+n.mob.stage+n.mob.surge);let u=se.gatherSecs;for(const f of d){const v=Mr(n,f);if(!v)continue;const x=f.capital||f.citadel?Math.max(12,Math.floor(f.drones*.4)):5;ss(n,v,l,Math.floor((f.drones-x)*c),[])||(v.off=!0,u=Math.max(u,Xe(f,l)/hc(n,v)+se.loadTime+6))}const h=(_t(n,k).warn||0)>0;n.offs.push({owner:e,target:o.id,staging:l.id,launchT:n.t+u,warned:h}),it(n,h?`${jn(n,e)} is massing at ${l.name} to strike ${o.name}`:`${jn(n,e)} is mobilizing for an offensive`,"warn",h?o.id:-1)}function Hh(n,e){const t=n.nodes[e.staging];if(t.owner!==e.owner||n.sides[e.owner].broken)return;let i=n.nodes[e.target];if(i.owner!==k){const o=n.nodes.filter(l=>l.owner===k).sort((l,c)=>Xe(l,t)-Xe(c,t))[0];if(!o)return;i=o}const s=t.capital||t.citadel?Math.max(12,Math.floor(t.drones*.4)):5,r=t.drones-s;if(r<6)return;const a=Mr(n,t);a&&(ss(n,a,i,r,[])||(a.off=!0))}function Vh(n){const e=n.mob;{const t=se.stageSecs*(1-.05*n.threat);if(e.prog+=se.dt/t*Math.max(.3,1-(_t(n,k).mobSlow||0)),e.prog>=1&&e.stage>=5)e.surge++,e.prog=0,it(n,`Total war: Coalition reserves deepen (surge ${e.surge}). Every faction can field more Drones.`,"warn");else if(e.prog>=1){e.stage++,e.prog=0,it(n,`Coalition mobilization reached stage ${e.stage}. Offensives grow larger and more frequent.`,"warn");for(const i of n.factions){const s=n.sides[i];if(s.broken)continue;const r=Qn[s.fac].techs.filter(a=>!s.techs.includes(a));for(const a of r.slice(0,s.fac==="lumen"?2:1))Cr(n,i,a)}}}if(n.t>=e.nextOff){const t=n.factions.filter(i=>!n.sides[i].broken&&n.nodes.some(s=>s.owner===i));(e.stage>=4||!t.length)&&t.push(n.archon),Gh(n,t[e.turn%t.length]),e.turn++,e.nextOff=n.t+se.offInterval[e.stage]*hn(n,.85,1.15)/(1+.04*n.threat)}if(n.offs.length){const t=n.offs.filter(i=>n.t>=i.launchT);if(t.length){n.offs=n.offs.filter(i=>n.t<i.launchT);for(const i of t)Hh(n,i)}}}function Wh(n){Vh(n);for(const e of[...n.factions,n.archon]){const t=n.sides[e];n.t>=t.aiT&&(t.aiT=n.t+8+$t(n)*4,zh(n,e))}}function kr(n){const e=[],t=ft[n.def].active;return t&&e.push(t),n.cmd&&(e.push(Gi[n.cmd.arch].a),n.cmd.lvl>=3&&e.push(Gi[n.cmd.arch].b)),e}const to=(n,e,t)=>Math.max(0,(e.cd[t]||0)-n.t),po=(n,e)=>{const t=_i(n.g,n.sp.owner)-Vi(n.g,n.sp.owner),i=Math.max(0,Math.min(e,t));return i<=0?"Drone cap reached":(n.here.drones+=i,null)},sr=(n,e,t=as)=>i=>(i.s.buffs.push({k:n,v:e,until:t>=as?as:i.g.t+t}),null),rr=(n,e,t)=>i=>(i.n.buffs.push({k:n,v:e,until:i.g.t+t}),null),mo=(n,e,t)=>i=>(i.t.buffs.push({k:n,v:e,until:i.g.t+t}),On(i.g),null),ld=(n,e)=>t=>{for(const i of t.g.nodes)Xe(i,t.here)<=n&&i.buffs.push({k:"scan",v:1,until:t.g.t+e});return On(t.g),null},$h=n=>(n.n?n.n.specs:n.s.specs).map(e=>n.g.specs[e]).filter(e=>e.id!==n.sp.id&&e.owner===n.sp.owner),cd=n=>{const e=$h(n);if(!e.length)return"No other specialist here";for(const t of e)t.cd={};return null},dd=n=>e=>{const t=e.n,i=e.g.sides[t.owner];return t.research?(i.techProg[t.research]=(i.techProg[t.research]||0)+n,null):"No research running here"},ud=n=>{const e=js(n.g,n.sp.owner);if(!e||n.n&&e.id===n.n.id)return"Already home";const t=(n.n?n.n.specs:n.s.specs).slice();for(const i of t)ei(n.g,n.g.specs[i],e);return null},fd=n=>e=>(e.t.drones-=Math.floor(e.t.drones*n),On(e.g),null),Xh={fullburn:sr("speed",.5,30),repair:n=>{const e=n.n;return e.lane&&(e.lane.left=Math.max(.1,e.lane.left-25)),e.shields=wr(n.g,e),null},surge:rr("mine",.5,60),deepscan:mo("scan",1,60),flank:sr("ignNat",1),lockdown:n=>(n.n.buffs.push({k:"def",v:6,until:n.g.t+45}),n.n.shields+=6,null),sabotage:mo("frozen",1,45),parley:mo("def",-5,60),breakthrough:dd(30),extraction:ud,ambush:rr("ambush",.3,90),convert:n=>{const e=n.n;if(e.conv)return"A conversion is already running here";const t=e.prisoners.map(i=>n.g.specs[i]).find(i=>i.held===k&&i.def!=="warlord"&&i.def!=="archon");return t?(e.conv={spec:t.id,until:n.g.t+60},null):"No convertible prisoner here"},conscript:n=>po(n,6),chart:ld(160,40),strip:n=>(n.g.sides[n.sp.owner].ult+=20,n.n.buffs.push({k:"offline",v:1,until:n.g.t+60}),null),smoke:n=>{const e=n.g.ships.filter(t=>t.at<0&&t.to===n.n.id&&t.owner!==n.sp.owner);if(!e.length)return"No enemy fleet is heading here";for(const t of e){const i=n.g.nodes[t.from],s=i.owner===t.owner?i:js(n.g,t.owner);s?(t.to=s.id,t.off=!1):t.drones=0}return n.g.offs=n.g.offs.filter(t=>t.target!==n.n.id),null},breach:n=>(n.t.shields=0,n.t.buffs.push({k:"noRegen",v:1,until:n.g.t+60}),On(n.g),null),laststand:rr("dbl",1,30),reprise:cd,bribe:n=>{const e=n.t,t=n.g,i=e.drones+Math.floor(e.shields);if(i>14)return"Too strong to buy (strength above 14)";const s=2*i;if(t.sides[k].ult<s)return`Needs ${s} Ultanium`;t.ships.find(o=>o.owner===k&&o.at>=0&&o.loadUntil===0),t.sides[k].ult-=s;const r={owner:k,seq:0,at:-1,from:e.id,to:e.id,x:e.x,y:e.y,drones:0,specs:[],buffs:[],off:!1},a=ms(t,0,{},e,{});return a.win=!0,a.surv=0,a.sent=0,dc(t,e,r,a,{}),null},fence:n=>(n.g.sides[n.sp.owner].ult+=2*n.g.nodes.filter(e=>e.owner===n.sp.owner).length,null),rampart:n=>(n.n.shields=wr(n.g,n.n),null),levy:n=>{let e=!1;for(const t of n.g.nodes)t.owner===n.sp.owner&&t.kind==="station"&&Vi(n.g,n.sp.owner)+3<=_i(n.g,n.sp.owner)&&(t.drones+=3,e=!0);return e?null:"Drone cap reached"},foresight:n=>(n.g.mob.prog=Math.max(0,n.g.mob.prog-.1),null),charge:sr("atk",5),slingshot:rr("sling",1,30),vein:n=>(n.g.sides[n.sp.owner].ult+=25,null),fortify:n=>{const e=n.n,t=e.kind==="planet"?"shield":"sshield";return(e.b[t]||0)>=zt[t].max?"No room for another structure":(e.b[t]=(e.b[t]||0)+1,null)},bloodrush:n=>(n.s.buffs.push({k:"atkPct",v:.4,until:as},{k:"surv",v:-.3,until:as}),null),focus:rr("preKill",.3,45),raidA:fd(.25),warp:n=>{const e=n.s,t=n.g.nodes[e.to];return e.x+=(t.x-e.x)/2,e.y+=(t.y-e.y)/2,null},decisive:sr("atkPct",.3),rally:n=>po(n,8),slipstream:sr("speed",1,40),sweep:ld(200,45),aegis:n=>(n.n.buffs.push({k:"def",v:10,until:n.g.t+45}),n.n.shields+=10,null),recall:ud,crash:n=>n.n.lane?(n.n.lane.left=.05,null):"Nothing is being built here",windfall:n=>(n.g.sides[n.sp.owner].ult+=3*n.g.nodes.filter(e=>e.owner===n.sp.owner&&e.kind==="planet").length,null),raid:fd(.3),pressgang:n=>po(n,Math.min(10,Math.max(1,Math.floor(n.here.drones*.2)))),insight:cd,eureka:dd(60),rapidlink:n=>{const e=n.n,t=n.t;return ja(n.g,e.id,t.id)?"Already linked":Xe(e,t)>se.corridorRange*1.5?"Too far for a temporary corridor":(n.g.corridors.push({a:e.id,b:t.id,owner:n.sp.owner,until:n.g.t+60}),null)}};function xc(n,e,t,i){if(e.held)return"Specialist is a prisoner";if(to(n,e,t.id)>0)return"On cooldown";const s=e.ship>=0&&qt(n,e.ship)||null,r=!!s&&s.at<0;if(t.at==="ship"&&!r)return"Use while the ship is in flight";if((t.at==="node"||t.at==="planet")&&e.node<0)return"Use while stationed at a node";if(t.at==="planet"&&n.nodes[e.node].kind!=="planet")return"Use on a planet";if(t.target!=="self"){if(!i)return"Pick a target";const a=n.vis[i.id];if(t.target==="own"){if(i.owner!==e.owner)return"Pick one of your nodes";if(i.id===e.node)return"Pick a different node"}else if(t.target==="node"){if(a<1)return"Target must be detected";if(i.owner===k)return"Pick a node you do not own"}else{if(a<2)return"Target must be fully identified";if(i.owner===k)return"Pick a node you do not own";if(t.target==="neutral"&&i.owner!==0)return"Pick a neutral node";if(t.target==="enemy"&&i.owner===0)return"Pick an enemy node"}}return null}function qh(n,e,t,i){const s=kr(e).find(d=>d.id===t);if(!s)return"Unknown ability";const r=xc(n,e,s,i);if(r)return r;const a=e.ship>=0?qt(n,e.ship):null,o=e.node>=0?n.nodes[e.node]:null,l=Xh[t]({g:n,sp:e,n:o,s:a,here:o||a,t:i});if(l)return l;const c=Math.max(.4,Math.min(1.6,1-(_t(n,e.owner).cd||0)));return e.cd[t]=n.t+s.cd*c,n.modV++,e.owner===k&&it(n,`${e.name||ft[e.def].name}: ${s.name}`,"info",o?o.id:-1),null}function Yh(n){return n.result||n.pending.length?!1:(Ph(n),n.result||Wh(n),!0)}function Kh(n,e){if(n.result)return"The run is over";const t=i=>{const s=n.nodes[i];return s&&s.owner===k?s:null};switch(e.c){case"build":{const i=t(e.node);return i?pr(n,i,e.id):"Not your node"}case"ship":{const i=t(e.node);return i?Du(n,i):"Not your node"}case"cancel":{const i=t(e.node);return i?(ph(n,i,e.idx),null):"Not your node"}case"research":{const i=t(e.node);return i?e.id===null?(i.research=null,null):vh(n,i,e.id):"Not your node"}case"resFirst":{const i=t(e.node);return i?(i.resFirst=!i.resFirst,null):"Not your node"}case"launch":{const i=qt(n,e.ship);return!i||i.owner!==k?"Not your ship":ss(n,i,n.nodes[e.to],e.drones,e.specs)}case"redirect":{const i=qt(n,e.ship);return!i||i.owner!==k?"Not your ship":wh(n,i,n.nodes[e.to])}case"ability":{const i=n.specs[e.spec];return!i||i.owner!==k?"Not your specialist":qh(n,i,e.id,e.target>=0?n.nodes[e.target]:null)}case"choose":return Ah(n,e.idx);case"ransom":{const i=n.specs[e.spec];return i?Rh(n,i,e.recruit):"Unknown prisoner"}case"muster":{const i=t(e.node);return i?mh(n,i):"Not your node"}case"corridor":return yh(n,n.nodes[e.from],n.nodes[e.to]);case"transfer":return Eh(n,n.nodes[e.from],n.nodes[e.to],e.drones,e.specs);case"swap":{const i=n.specs[e.spec],s=qt(n,e.ship);return!i||i.owner!==k||!s||s.owner!==k?"Not yours":Th(n,i,s)}case"event":{const i=t(e.node);return!i||!i.event?"No event here":(n.pending.push({kind:"event",node:i.id,opts:[],title:Un[i.event].name,event:i.event}),null)}}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sc="187",Zh=0,hd=1,Jh=2,Ea=1,Qh=2,mr=3,fs=0,dn=1,qn=2,zs=0,br=1,pd=2,md=3,gd=4,jh=5,Ls=100,ep=101,tp=102,np=103,ip=104,sp=200,rp=201,ap=202,op=203,Xu=204,qu=205,lp=206,cp=207,dp=208,up=209,fp=210,hp=211,pp=212,mp=213,gp=214,jo=0,el=1,tl=2,Lr=3,nl=4,il=5,sl=6,rl=7,Mc=0,_p=1,vp=2,mi=0,Yu=1,Ku=2,Zu=3,Ju=4,Qu=5,ju=6,ef=7,tf=300,qs=301,Dr=302,go=303,_o=304,al=1e3,hi=1001,ol=1002,Xt=1003,xp=1004,qr=1005,cn=1006,vo=1007,Fi=1008,mn=1009,nf=1010,sf=1011,Ir=1012,bc=1013,ti=1014,Yn=1015,ni=1016,yc=1017,Ec=1018,Ys=1020,rf=35902,af=35899,of=1021,lf=1022,Kn=1023,Wi=1026,Oi=1027,cf=1028,Tc=1029,hs=1030,wc=1031,Ac=1033,Ta=33776,wa=33777,Aa=33778,Ra=33779,ll=35840,cl=35841,dl=35842,ul=35843,fl=36196,hl=37492,pl=37496,ml=37488,gl=37489,Ia=37490,_l=37491,vl=37808,xl=37809,Sl=37810,Ml=37811,bl=37812,yl=37813,El=37814,Tl=37815,wl=37816,Al=37817,Rl=37818,Cl=37819,Pl=37820,Ll=37821,Dl=36492,Il=36494,Nl=36495,Ul=36283,Fl=36284,Na=36285,Ol=36286,Sp=3200,kl=0,Mp=1,Di="",pn="srgb",Ua="srgb-linear",Fa="linear",dt="srgb",xo=7680,bp=519,yp=512,Ep=513,Tp=514,df=515,wp=516,Ap=517,uf=518,ff=519,Rp=35044,_d="300 es",In=2e3,Nr=2001;function Cp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Oa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Pp(){const n=Oa("canvas");return n.style.display="block",n}const vd={};function xd(...n){const e="THREE."+n.shift();console.log(e,...n)}function hf(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Le(...n){n=hf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function rt(...n){n=hf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ca(...n){const e=n.join(" ");e in vd||(vd[e]=!0,Le(...n))}function Lp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Dp={[jo]:jo,[tl]:sl,[nl]:nl,[Lr]:il,[el]:el,[sl]:tl,[rl]:rl,[il]:Lr};class gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],So=Math.PI/180,Bl=180/Math.PI;function Br(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function Ip(n,e){return(n%e+e)%e}function Mo(n,e,t){return(1-t)*n+t*e}function Np(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Rc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Up(n,e){if(e.constructor===Float32Array)return n;const t=Rc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Fp(n,e){if(e.constructor===Float32Array)return n;const t=Rc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const Vc=class Vc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vc.prototype.isVector2=!0;let We=Vc;class er{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],d=i[s+2],u=i[s+3],h=r[a+0],f=r[a+1],v=r[a+2],x=r[a+3];if(u!==x||l!==h||c!==f||d!==v){let g=l*h+c*f+d*v+u*x;g<0&&(h=-h,f=-f,v=-v,x=-x,g=-g);let m=1-o;if(g<.9995){const p=Math.acos(g),E=Math.sin(p);m=Math.sin(m*p)/E,o=Math.sin(o*p)/E,l=l*m+h*o,c=c*m+f*o,d=d*m+v*o,u=u*m+x*o}else{l=l*m+h*o,c=c*m+f*o,d=d*m+v*o,u=u*m+x*o;const p=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=p,c*=p,d*=p,u*=p}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],d=i[s+3],u=r[a],h=r[a+1],f=r[a+2],v=r[a+3];return e[t]=o*v+d*u+l*f-c*h,e[t+1]=l*v+d*h+c*u-o*f,e[t+2]=c*v+d*f+o*h-l*u,e[t+3]=d*v-o*u-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(s/2),u=o(r/2),h=l(i/2),f=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=h*d*u+c*f*v,this._y=c*f*u-h*d*v,this._z=c*d*v+h*f*u,this._w=c*d*u-h*f*v;break;case"YXZ":this._x=h*d*u+c*f*v,this._y=c*f*u-h*d*v,this._z=c*d*v-h*f*u,this._w=c*d*u+h*f*v;break;case"ZXY":this._x=h*d*u-c*f*v,this._y=c*f*u+h*d*v,this._z=c*d*v+h*f*u,this._w=c*d*u-h*f*v;break;case"ZYX":this._x=h*d*u-c*f*v,this._y=c*f*u+h*d*v,this._z=c*d*v-h*f*u,this._w=c*d*u+h*f*v;break;case"YZX":this._x=h*d*u+c*f*v,this._y=c*f*u+h*d*v,this._z=c*d*v-h*f*u,this._w=c*d*u-h*f*v;break;case"XZY":this._x=h*d*u-c*f*v,this._y=c*f*u-h*d*v,this._z=c*d*v+h*f*u,this._w=c*d*u+h*f*v;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=i+o+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(d-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-i*c,this._z=r*d+a*c+i*l-s*o,this._w=a*d-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Wc=class Wc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),d=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*d,this.y=i+l*d+o*c-r*u,this.z=s+l*u+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bo.copy(this).projectOnVector(e),this.sub(bo)}reflect(e){return this.sub(bo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wc.prototype.isVector3=!0;let O=Wc;const bo=new O,Sd=new er,$c=class $c{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],u=i[7],h=i[2],f=i[5],v=i[8],x=s[0],g=s[3],m=s[6],p=s[1],E=s[4],M=s[7],w=s[2],T=s[5],_=s[8];return r[0]=a*x+o*p+l*w,r[3]=a*g+o*E+l*T,r[6]=a*m+o*M+l*_,r[1]=c*x+d*p+u*w,r[4]=c*g+d*E+u*T,r[7]=c*m+d*M+u*_,r[2]=h*x+f*p+v*w,r[5]=h*g+f*E+v*T,r[8]=h*m+f*M+v*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-i*r*d+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*a-o*c,h=o*l-d*r,f=c*r-a*l,v=t*u+i*h+s*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=u*x,e[1]=(s*c-d*i)*x,e[2]=(o*i-s*a)*x,e[3]=h*x,e[4]=(d*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ca("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yo.makeScale(e,t)),this}rotate(e){return Ca("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yo.makeRotation(-e)),this}translate(e,t){return Ca("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};$c.prototype.isMatrix3=!0;let Ie=$c;const yo=new Ie,Md=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bd=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Op(){const n={enabled:!0,workingColorSpace:Ua,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===dt&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(s.r=Gs(s.r),s.g=Gs(s.g),s.b=Gs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?Fa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ua]:{primaries:e,whitePoint:i,transfer:Fa,toXYZ:Md,fromXYZ:bd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:Md,fromXYZ:bd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),n}const Qe=Op();function gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Gs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let vs;class kp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{vs===void 0&&(vs=Oa("canvas")),vs.width=e.width,vs.height=e.height;const s=vs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=vs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Oa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=gi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(gi(t[i]/255)*255):t[i]=gi(t[i]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bp=0;class Cc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Br(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Eo(s[a].image)):r.push(Eo(s[a]))}else r=Eo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Eo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?kp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let zp=0;const To=new O;class tn extends gs{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,i=hi,s=hi,r=cn,a=Fi,o=Kn,l=mn,c=tn.DEFAULT_ANISOTROPY,d=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Br(),this.name="",this.source=new Cc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(To).x}get height(){return this.source.getSize(To).y}get depth(){return this.source.getSize(To).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case al:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case ol:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case al:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case ol:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=tf;tn.DEFAULT_ANISOTROPY=1;const Xc=class Xc{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],v=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-x)<.01&&Math.abs(v-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+x)<.1&&Math.abs(v+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,M=(f+1)/2,w=(m+1)/2,T=(d+h)/4,_=(u+x)/4,S=(v+g)/4;return E>M&&E>w?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=T/i,r=_/i):M>w?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=S/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=_/r,s=S/r),this.set(i,s,r,t),this}let p=Math.sqrt((g-v)*(g-v)+(u-x)*(u-x)+(h-d)*(h-d));return Math.abs(p)<.001&&(p=1),this.x=(g-v)/p,this.y=(u-x)/p,this.z=(h-d)/p,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xc.prototype.isVector4=!0;let yt=Xc;class Gp extends gs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];const s=i.count;for(let r=0;r<s;r++)this.textures[r]=new tn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Cc(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends Gp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class pf extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hp extends tn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const qa=class qa{constructor(e,t,i,s,r,a,o,l,c,d,u,h,f,v,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,d,u,h,f,v,x,g)}set(e,t,i,s,r,a,o,l,c,d,u,h,f,v,x,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=d,m[10]=u,m[14]=h,m[3]=f,m[7]=v,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qa().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/xs.setFromMatrixColumn(e,0).length(),r=1/xs.setFromMatrixColumn(e,1).length(),a=1/xs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const h=a*d,f=a*u,v=o*d,x=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=f+v*c,t[5]=h-x*c,t[9]=-o*l,t[2]=x-h*c,t[6]=v+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*d,f=l*u,v=c*d,x=c*u;t[0]=h+x*o,t[4]=v*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=f*o-v,t[6]=x+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*d,f=l*u,v=c*d,x=c*u;t[0]=h-x*o,t[4]=-a*u,t[8]=v+f*o,t[1]=f+v*o,t[5]=a*d,t[9]=x-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*d,f=a*u,v=o*d,x=o*u;t[0]=l*d,t[4]=v*c-f,t[8]=h*c+x,t[1]=l*u,t[5]=x*c+h,t[9]=f*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,v=o*l,x=o*c;t[0]=l*d,t[4]=x-h*u,t[8]=v*u+f,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*u+v,t[10]=h-x*u}else if(e.order==="XZY"){const h=a*l,f=a*c,v=o*l,x=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+x,t[5]=a*d,t[9]=f*u-v,t[2]=v*u-f,t[6]=o*d,t[10]=x*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vp,e,Wp)}lookAt(e,t,i){const s=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),yi.crossVectors(i,un),yi.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),yi.crossVectors(i,un)),yi.normalize(),Yr.crossVectors(un,yi),s[0]=yi.x,s[4]=Yr.x,s[8]=un.x,s[1]=yi.y,s[5]=Yr.y,s[9]=un.y,s[2]=yi.z,s[6]=Yr.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],u=i[5],h=i[9],f=i[13],v=i[2],x=i[6],g=i[10],m=i[14],p=i[3],E=i[7],M=i[11],w=i[15],T=s[0],_=s[4],S=s[8],P=s[12],C=s[1],R=s[5],N=s[9],B=s[13],L=s[2],G=s[6],X=s[10],F=s[14],ne=s[3],q=s[7],j=s[11],te=s[15];return r[0]=a*T+o*C+l*L+c*ne,r[4]=a*_+o*R+l*G+c*q,r[8]=a*S+o*N+l*X+c*j,r[12]=a*P+o*B+l*F+c*te,r[1]=d*T+u*C+h*L+f*ne,r[5]=d*_+u*R+h*G+f*q,r[9]=d*S+u*N+h*X+f*j,r[13]=d*P+u*B+h*F+f*te,r[2]=v*T+x*C+g*L+m*ne,r[6]=v*_+x*R+g*G+m*q,r[10]=v*S+x*N+g*X+m*j,r[14]=v*P+x*B+g*F+m*te,r[3]=p*T+E*C+M*L+w*ne,r[7]=p*_+E*R+M*G+w*q,r[11]=p*S+E*N+M*X+w*j,r[15]=p*P+E*B+M*F+w*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],f=e[14],v=e[3],x=e[7],g=e[11],m=e[15],p=l*f-c*h,E=o*f-c*u,M=o*h-l*u,w=a*f-c*d,T=a*h-l*d,_=a*u-o*d;return t*(x*p-g*E+m*M)-i*(v*p-g*w+m*T)+s*(v*E-x*w+m*_)-r*(v*M-x*T+g*_)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-i*(r*d-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],f=e[11],v=e[12],x=e[13],g=e[14],m=e[15],p=t*o-i*a,E=t*l-s*a,M=t*c-r*a,w=i*l-s*o,T=i*c-r*o,_=s*c-r*l,S=d*x-u*v,P=d*g-h*v,C=d*m-f*v,R=u*g-h*x,N=u*m-f*x,B=h*m-f*g,L=p*B-E*N+M*R+w*C-T*P+_*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/L;return e[0]=(o*B-l*N+c*R)*G,e[1]=(s*N-i*B-r*R)*G,e[2]=(x*_-g*T+m*w)*G,e[3]=(h*T-u*_-f*w)*G,e[4]=(l*C-a*B-c*P)*G,e[5]=(t*B-s*C+r*P)*G,e[6]=(g*M-v*_-m*E)*G,e[7]=(d*_-h*M+f*E)*G,e[8]=(a*N-o*C+c*S)*G,e[9]=(i*C-t*N-r*S)*G,e[10]=(v*T-x*M+m*p)*G,e[11]=(u*M-d*T-f*p)*G,e[12]=(o*P-a*R-l*S)*G,e[13]=(t*R-i*P+s*S)*G,e[14]=(x*E-v*w-g*p)*G,e[15]=(d*w-u*E+h*p)*G,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+i,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,u=o+o,h=r*c,f=r*d,v=r*u,x=a*d,g=a*u,m=o*u,p=l*c,E=l*d,M=l*u,w=i.x,T=i.y,_=i.z;return s[0]=(1-(x+m))*w,s[1]=(f+M)*w,s[2]=(v-E)*w,s[3]=0,s[4]=(f-M)*T,s[5]=(1-(h+m))*T,s[6]=(g+p)*T,s[7]=0,s[8]=(v+E)*_,s[9]=(g-p)*_,s[10]=(1-(h+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=xs.set(s[0],s[1],s[2]).length();const o=xs.set(s[4],s[5],s[6]).length(),l=xs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Rn.copy(this);const c=1/a,d=1/o,u=1/l;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=d,Rn.elements[5]*=d,Rn.elements[6]*=d,Rn.elements[8]*=u,Rn.elements[9]*=u,Rn.elements[10]*=u,t.setFromRotationMatrix(Rn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=In,l=!1){const c=this.elements,d=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let v,x;if(l)v=r/(a-r),x=a*r/(a-r);else if(o===In)v=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Nr)v=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=In,l=!1){const c=this.elements,d=2/(t-e),u=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s);let v,x;if(l)v=1/(a-r),x=a/(a-r);else if(o===In)v=-2/(a-r),x=-(a+r)/(a-r);else if(o===Nr)v=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};qa.prototype.isMatrix4=!0;let vt=qa;const xs=new O,Rn=new vt,Vp=new O(0,0,0),Wp=new O(1,1,1),yi=new O,Yr=new O,un=new O,yd=new vt,Ed=new er;class $i{constructor(e=0,t=0,i=0,s=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],u=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return yd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ed.setFromEuler(this),this.setFromQuaternion(Ed,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class mf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $p=0;const Td=new O,Ss=new er,ri=new vt,Kr=new O,ar=new O,Xp=new O,qp=new er,wd=new O(1,0,0),Ad=new O(0,1,0),Rd=new O(0,0,1),Cd={type:"added"},Yp={type:"removed"},Ms={type:"childadded",child:null},wo={type:"childremoved",child:null};class It extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new O,t=new $i,i=new er,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ie}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(wd,e)}rotateY(e){return this.rotateOnAxis(Ad,e)}rotateZ(e){return this.rotateOnAxis(Rd,e)}translateOnAxis(e,t){return Td.copy(e).applyQuaternion(this.quaternion),this.position.add(Td.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wd,e)}translateY(e){return this.translateOnAxis(Ad,e)}translateZ(e){return this.translateOnAxis(Rd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Kr.copy(e):Kr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(ar,Kr,this.up):ri.lookAt(Kr,ar,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),Ss.setFromRotationMatrix(ri),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cd),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yp),wo.child=e,this.dispatchEvent(wo),wo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cd),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,Xp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,qp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),u=a(e.shapes),h=a(e.skeletons),f=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),v.length>0&&(i.nodes=v)}return i.object=s,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}It.DEFAULT_UP=new O(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Nn extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kp={type:"move"};class Ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,v=.005;c.inputState.pinching&&h>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Nn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function Ro(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Qe.workingColorSpace){if(e=Ip(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ro(a,r,e+1/3),this.g=Ro(a,r,e),this.b=Ro(a,r,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=pn){function i(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){const i=gf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return Qe.workingToColorSpace(Qt.copy(this),e),Math.round(je(Qt.r*255,0,255))*65536+Math.round(je(Qt.g*255,0,255))*256+Math.round(je(Qt.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Qt.copy(this),t);const i=Qt.r,s=Qt.g,r=Qt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=pn){Qe.workingToColorSpace(Qt.copy(this),e);const t=Qt.r,i=Qt.g,s=Qt.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(Zr);const i=Mo(Ei.h,Zr.h,t),s=Mo(Ei.s,Zr.s,t),r=Mo(Ei.l,Zr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Ge;Ge.NAMES=gf;class Zp extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Cn=new O,ai=new O,Co=new O,oi=new O,bs=new O,ys=new O,Pd=new O,Po=new O,Lo=new O,Do=new O,Io=new yt,No=new yt,Uo=new yt;class Dn{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Cn.subVectors(e,t),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Cn.subVectors(s,t),ai.subVectors(i,t),Co.subVectors(e,t);const a=Cn.dot(Cn),o=Cn.dot(ai),l=Cn.dot(Co),c=ai.dot(ai),d=ai.dot(Co),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const h=1/u,f=(c*l-o*d)*h,v=(a*d-o*l)*h;return r.set(1-f-v,v,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(a,oi.y),l.addScaledVector(o,oi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Io.setScalar(0),No.setScalar(0),Uo.setScalar(0),Io.fromBufferAttribute(e,t),No.fromBufferAttribute(e,i),Uo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Io,r.x),a.addScaledVector(No,r.y),a.addScaledVector(Uo,r.z),a}static isFrontFacing(e,t,i,s){return Cn.subVectors(i,t),ai.subVectors(e,t),Cn.cross(ai).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Cn.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Dn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;bs.subVectors(s,i),ys.subVectors(r,i),Po.subVectors(e,i);const l=bs.dot(Po),c=ys.dot(Po);if(l<=0&&c<=0)return t.copy(i);Lo.subVectors(e,s);const d=bs.dot(Lo),u=ys.dot(Lo);if(d>=0&&u<=d)return t.copy(s);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0&&l-d>0)return a=l/(l-d),t.copy(i).addScaledVector(bs,a);Do.subVectors(e,r);const f=bs.dot(Do),v=ys.dot(Do);if(v>=0&&f<=v)return t.copy(r);const x=f*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(ys,o);const g=d*v-f*u;if(g<=0&&u-d>=0&&f-v>=0)return Pd.subVectors(r,s),o=(u-d)/(u-d+(f-v)),t.copy(s).addScaledVector(Pd,o);const m=1/(g+x+h);return a=x*m,o=h*m,t.copy(i).addScaledVector(bs,a).addScaledVector(ys,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class zr{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pn):Pn.fromBufferAttribute(r,a),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jr.copy(i.boundingBox)),Jr.applyMatrix4(e.matrixWorld),this.union(Jr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),Qr.subVectors(this.max,or),Es.subVectors(e.a,or),Ts.subVectors(e.b,or),ws.subVectors(e.c,or),Ti.subVectors(Ts,Es),wi.subVectors(ws,Ts),Zi.subVectors(Es,ws);let t=[0,-Ti.z,Ti.y,0,-wi.z,wi.y,0,-Zi.z,Zi.y,Ti.z,0,-Ti.x,wi.z,0,-wi.x,Zi.z,0,-Zi.x,-Ti.y,Ti.x,0,-wi.y,wi.x,0,-Zi.y,Zi.x,0];return!Fo(t,Es,Ts,ws,Qr)||(t=[1,0,0,0,1,0,0,0,1],!Fo(t,Es,Ts,ws,Qr))?!1:(jr.crossVectors(Ti,wi),t=[jr.x,jr.y,jr.z],Fo(t,Es,Ts,ws,Qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const li=[new O,new O,new O,new O,new O,new O,new O,new O],Pn=new O,Jr=new zr,Es=new O,Ts=new O,ws=new O,Ti=new O,wi=new O,Zi=new O,or=new O,Qr=new O,jr=new O,Ji=new O;function Fo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ji.fromArray(n,r);const o=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),l=e.dot(Ji),c=t.dot(Ji),d=i.dot(Ji);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const At=new O,ea=new We;let Jp=0;class ls extends gs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rp,this.updateRanges=[],this.gpuType=Yn,this.version=0,this._normalizationScale=e!==void 0?Rc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ea.fromBufferAttribute(this,t),ea.applyMatrix3(e),this.setXY(t,ea.x,ea.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Up(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Fp(e,this.array)}}class _f extends ls{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vf extends ls{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class at extends ls{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Qp=new zr,lr=new O,Oo=new O;class Gr{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Qp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lr.subVectors(e,this.center);const t=lr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(lr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lr.copy(e.center).add(Oo)),this.expandByPoint(lr.copy(e.center).sub(Oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let jp=0;const bn=new vt,ko=new It,As=new O,fn=new zr,cr=new zr,Bt=new O;class Yt extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cp(e)?vf:_f)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ie().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,i){return bn.makeTranslation(e,t,i),this.applyMatrix4(bn),this}scale(e,t,i){return bn.makeScale(e,t,i),this.applyMatrix4(bn),this}lookAt(e){return ko.lookAt(e),ko.updateMatrix(),this.applyMatrix4(ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new at(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];cr.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(fn.min,cr.min),fn.expandByPoint(Bt),Bt.addVectors(fn.max,cr.max),fn.expandByPoint(Bt)):(fn.expandByPoint(cr.min),fn.expandByPoint(cr.max))}fn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Bt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Bt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Bt.fromBufferAttribute(o,c),l&&(As.fromBufferAttribute(e,c),Bt.add(As)),s=Math.max(s,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ls(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let P=0;P<i.count;P++)o[P]=new O,l[P]=new O;const d=new O,u=new O,h=new O,f=new We,v=new We,x=new We,g=new O,m=new O;function p(P,C,R){c[P]=c[C]=c[R]=1,d.fromBufferAttribute(i,P),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,R),f.fromBufferAttribute(r,P),v.fromBufferAttribute(r,C),x.fromBufferAttribute(r,R),u.sub(d),h.sub(d),v.sub(f),x.sub(f);const N=1/(v.x*x.y-x.x*v.y);isFinite(N)&&(g.copy(u).multiplyScalar(x.y).addScaledVector(h,-v.y).multiplyScalar(N),m.copy(h).multiplyScalar(v.x).addScaledVector(u,-x.x).multiplyScalar(N),o[P].add(g),o[C].add(g),o[R].add(g),l[P].add(m),l[C].add(m),l[R].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,C=E.length;P<C;++P){const R=E[P],N=R.start,B=R.count;for(let L=N,G=N+B;L<G;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const M=new O,w=new O,T=new O,_=new O;function S(P){T.fromBufferAttribute(s,P),_.copy(T);const C=o[P];M.copy(C),M.sub(T.multiplyScalar(T.dot(C))).normalize(),w.crossVectors(_,C);const N=w.dot(l[P])<0?-1:1;a.setXYZW(P,M.x,M.y,M.z,N)}for(let P=0,C=i.count;P<C;++P)c[P]&&S(P);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ls(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,d=new O,u=new O;if(e)for(let h=0,f=e.count;h<f;h+=3){const v=e.getX(h+0),x=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(d),l.add(d),c.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,u=o.normalized,h=new c.constructor(l.length*d);let f=0,v=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*d;for(let m=0;m<d;m++)h[v++]=c[f++]}return new ls(h,d,u)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,u=c.length;d<u;d++){const h=c[d],f=e(h,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const f=c[u];d.push(f.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],u=r[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bo=new O,em=new O,tm=new Ie;class Ri{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Bo.subVectors(i,t).cross(em.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Bo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||tm.getNormalMatrix(e),s=this.coplanarPoint(Bo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let nm=0;class _s extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Br(),this.name="",this.type="Material",this.blending=br,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xu,this.blendDst=qu,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xo,this.stencilZFail=xo,this.stencilZPass=xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ri().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new We().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new We().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ci=new O,zo=new O,ta=new O,na=new O;class Pc{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){zo.copy(e).add(t).multiplyScalar(.5),ta.copy(t).sub(e).normalize(),na.copy(this.origin).sub(zo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ta),o=na.dot(this.direction),l=-na.dot(ta),c=na.lengthSq(),d=Math.abs(1-a*a);let u,h,f,v;if(d>0)if(u=a*l-o,h=a*o-l,v=r*d,u>=0)if(h>=-v)if(h<=v){const x=1/d;u*=x,h*=x,f=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;else h<=-v?(u=Math.max(0,-(-a*r+o)),h=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c):h<=v?(u=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(u=Math.max(0,-(a*r+o)),h=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c);else h=a>0?-r:r,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(zo).addScaledVector(ta,h),f}intersectSphere(e,t){if(e.radius<0)return null;ci.subVectors(e.center,this.origin);const i=ci.dot(this.direction),s=ci.dot(ci)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,u=e.x-a.x,h=e.y-a.y,f=e.z-a.z,v=t.x-a.x,x=t.y-a.y,g=t.z-a.z,m=i.x-a.x,p=i.y-a.y,E=i.z-a.z,M=Math.abs(l),w=Math.abs(c),T=Math.abs(d);let _,S,P,C,R,N,B,L,G,X,F,ne;if(M>=w&&M>=T?(P=l,N=u,G=v,ne=m,l>=0?(_=c,S=d,C=h,R=f,B=x,L=g,X=p,F=E):(_=d,S=c,C=f,R=h,B=g,L=x,X=E,F=p)):w>=T?(P=c,N=h,G=x,ne=p,c>=0?(_=d,S=l,C=f,R=u,B=g,L=v,X=E,F=m):(_=l,S=d,C=u,R=f,B=v,L=g,X=m,F=E)):(P=d,N=f,G=g,ne=E,d>=0?(_=l,S=c,C=u,R=h,B=v,L=x,X=m,F=p):(_=c,S=l,C=h,R=u,B=x,L=v,X=p,F=m)),P===0)return null;const q=_/P,j=S/P,te=1/P,Me=C-q*N,Fe=R-j*N,J=B-q*G,_e=L-j*G,be=X-q*ne,Re=F-j*ne,ve=be*_e-Re*J,Be=Me*Re-Fe*be,Tt=J*Fe-_e*Me;if(s){if(ve<0||Be<0||Tt<0)return null}else if((ve<0||Be<0||Tt<0)&&(ve>0||Be>0||Tt>0))return null;const Pe=ve+Be+Tt;if(Pe===0)return null;const lt=te*(ve*N+Be*G+Tt*ne);return(Pe>0?lt<0:lt>0)?null:this.at(lt/Pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ka extends _s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=Mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ld=new vt,Qi=new Pc,ia=new Gr,Dd=new O,sa=new O,ra=new O,aa=new O,Go=new O,oa=new O,Id=new O,la=new O;class Gt extends It{constructor(e=new Yt,t=new ka){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){oa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],u=r[l];d!==0&&(Go.fromBufferAttribute(u,e),a?oa.addScaledVector(Go,d):oa.addScaledVector(Go.sub(t),d))}t.add(oa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ia.copy(i.boundingSphere),ia.applyMatrix4(r),Qi.copy(e.ray).recast(e.near),!(ia.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(ia,Dd)===null||Qi.origin.distanceToSquared(Dd)>(e.far-e.near)**2))&&(Ld.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(Ld),!(i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=h.length;v<x;v++){const g=h[v],m=a[g.materialIndex],p=Math.max(g.start,f.start),E=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let M=p,w=E;M<w;M+=3){const T=o.getX(M),_=o.getX(M+1),S=o.getX(M+2);s=ca(this,m,e,i,c,d,u,T,_,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=v,m=x;g<m;g+=3){const p=o.getX(g),E=o.getX(g+1),M=o.getX(g+2);s=ca(this,a,e,i,c,d,u,p,E,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=h.length;v<x;v++){const g=h[v],m=a[g.materialIndex],p=Math.max(g.start,f.start),E=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=p,w=E;M<w;M+=3){const T=M,_=M+1,S=M+2;s=ca(this,m,e,i,c,d,u,T,_,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=v,m=x;g<m;g+=3){const p=g,E=g+1,M=g+2;s=ca(this,a,e,i,c,d,u,p,E,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function im(n,e,t,i,s,r,a,o){let l;if(e.side===dn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===fs,o),l===null)return null;la.copy(o),la.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(la);return c<t.near||c>t.far?null:{distance:c,point:la.clone(),object:n}}function ca(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,sa),n.getVertexPosition(l,ra),n.getVertexPosition(c,aa);const d=im(n,e,t,i,sa,ra,aa,Id);if(d){const u=new O;Dn.getBarycoord(Id,sa,ra,aa,u),s&&(d.uv=Dn.getInterpolatedAttribute(s,o,l,c,u,new We)),r&&(d.uv1=Dn.getInterpolatedAttribute(r,o,l,c,u,new We)),a&&(d.normal=Dn.getInterpolatedAttribute(a,o,l,c,u,new O),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new O,materialIndex:0};Dn.getNormal(sa,ra,aa,h.normal),d.face=h,d.barycoord=u}return d}class sm extends tn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Xt,d=Xt,u,h){super(null,a,o,l,c,d,s,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ji=new Gr,rm=new We(.5,.5),da=new O;class Ur{constructor(e=new Ri,t=new Ri,i=new Ri,s=new Ri,r=new Ri,a=new Ri){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=In,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],u=r[5],h=r[6],f=r[7],v=r[8],x=r[9],g=r[10],m=r[11],p=r[12],E=r[13],M=r[14],w=r[15];if(s[0].setComponents(c-a,f-d,m-v,w-p).normalize(),s[1].setComponents(c+a,f+d,m+v,w+p).normalize(),s[2].setComponents(c+o,f+u,m+x,w+E).normalize(),s[3].setComponents(c-o,f-u,m-x,w-E).normalize(),i)s[4].setComponents(l,h,g,M).normalize(),s[5].setComponents(c-l,f-h,m-g,w-M).normalize();else if(s[4].setComponents(c-l,f-h,m-g,w-M).normalize(),t===In)s[5].setComponents(c+l,f+h,m+g,w+M).normalize();else if(t===Nr)s[5].setComponents(l,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){ji.center.set(0,0,0);const t=rm.distanceTo(e.center);return ji.radius=.7071067811865476+t,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(da.x=s.normal.x>0?e.max.x:e.min.x,da.y=s.normal.y>0?e.max.y:e.min.y,da.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(da)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Nd=new vt;class Lc{constructor(){this.coordinateSystem=In,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];Nd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Ur),i[s].setFromProjectionMatrix(Nd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ur),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new Lc().copy(this)}}class zl extends _s{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ba=new O,za=new O,Ud=new vt,dr=new Pc,ua=new Gr,Ho=new O,Fd=new O;class am extends It{constructor(e=new Yt,t=new zl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ba.fromBufferAttribute(t,s-1),za.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ba.distanceTo(za);e.setAttribute("lineDistance",new at(i,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(s),ua.radius+=r,e.ray.intersectsSphere(ua)===!1)return;Ud.copy(s).invert(),dr.copy(e.ray).applyMatrix4(Ud);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const f=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let x=f,g=v-1;x<g;x+=c){const m=d.getX(x),p=d.getX(x+1),E=fa(this,e,dr,l,m,p,x);E&&t.push(E)}if(this.isLineLoop){const x=d.getX(v-1),g=d.getX(f),m=fa(this,e,dr,l,x,g,v-1);m&&t.push(m)}}else{const f=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let x=f,g=v-1;x<g;x+=c){const m=fa(this,e,dr,l,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){const x=fa(this,e,dr,l,v-1,f,v-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function fa(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(Ba.fromBufferAttribute(o,s),za.fromBufferAttribute(o,r),t.distanceSqToSegment(Ba,za,Ho,Fd)>i)return;Ho.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ho);if(!(c<e.near||c>e.far))return{distance:c,point:Fd.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class Od extends am{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class xf extends _s{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const kd=new vt,Gl=new Pc,ha=new Gr,pa=new O;class om extends It{constructor(e=new Yt,t=new xf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ha.copy(i.boundingSphere),ha.applyMatrix4(s),ha.radius+=r,e.ray.intersectsSphere(ha)===!1)return;kd.copy(s).invert(),Gl.copy(e.ray).applyMatrix4(kd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let v=h,x=f;v<x;v++){const g=c.getX(v);pa.fromBufferAttribute(u,g),Bd(pa,g,l,s,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let v=h,x=f;v<x;v++)pa.fromBufferAttribute(u,v),Bd(pa,v,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Bd(n,e,t,i,s,r,a){const o=Gl.distanceSqToPoint(n);if(o<t){const l=new O;Gl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Sf extends tn{constructor(e=[],t=qs,i,s,r,a,o,l,c,d){super(e,t,i,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zd extends tn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ks extends tn{constructor(e,t,i=ti,s,r,a,o=Xt,l=Xt,c,d=Wi,u=1){if(d!==Wi&&d!==Oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,s,r,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Mf extends Ks{constructor(e,t=ti,i=qs,s,r,a=Xt,o=Xt,l,c=Wi){const d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,i,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class bf extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class an extends Yt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],u=[];let h=0,f=0;v("z","y","x",-1,-1,i,t,e,a,r,0),v("z","y","x",1,-1,i,t,-e,a,r,1),v("x","z","y",1,1,e,i,t,s,a,2),v("x","z","y",1,-1,e,i,-t,s,a,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(u,2));function v(x,g,m,p,E,M,w,T,_,S,P){const C=M/_,R=w/S,N=M/2,B=w/2,L=T/2,G=_+1,X=S+1;let F=0,ne=0;const q=new O;for(let j=0;j<X;j++){const te=j*R-B;for(let Me=0;Me<G;Me++){const Fe=Me*C-N;q[x]=Fe*p,q[g]=te*E,q[m]=L,c.push(q.x,q.y,q.z),q[x]=0,q[g]=0,q[m]=T>0?1:-1,d.push(q.x,q.y,q.z),u.push(Me/_),u.push(1-j/S),F+=1}}for(let j=0;j<S;j++)for(let te=0;te<_;te++){const Me=h+te+G*j,Fe=h+te+G*(j+1),J=h+(te+1)+G*(j+1),_e=h+(te+1)+G*j;l.push(Me,Fe,_e),l.push(Fe,J,_e),ne+=6}o.addGroup(f,ne,P),f+=ne,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class no extends Yt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new O,d=new We;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,h=3;u<=t;u++,h+=3){const f=i+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[h]/e+1)/2,d.y=(a[h+1]/e+1)/2,l.push(d.x,d.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(o,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Rt extends Yt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],u=[],h=[],f=[];let v=0;const x=[],g=i/2;let m=0;p(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(d),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(f,2));function p(){const M=new O,w=new O;let T=0;const _=(t-e)/i;for(let S=0;S<=r;S++){const P=[],C=S/r,R=C*(t-e)+e;for(let N=0;N<=s;N++){const B=N/s,L=B*l+o,G=Math.sin(L),X=Math.cos(L);w.x=R*G,w.y=-C*i+g,w.z=R*X,u.push(w.x,w.y,w.z),M.set(G,_,X).normalize(),h.push(M.x,M.y,M.z),f.push(B,1-C),P.push(v++)}x.push(P)}for(let S=0;S<s;S++)for(let P=0;P<r;P++){const C=x[P][S],R=x[P+1][S],N=x[P+1][S+1],B=x[P][S+1];(e>0||P!==0)&&(d.push(C,R,B),T+=3),(t>0||P!==r-1)&&(d.push(R,N,B),T+=3)}c.addGroup(m,T,0),m+=T}function E(M){const w=v,T=new We,_=new O;let S=0;const P=M===!0?e:t,C=M===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,g*C,0),h.push(0,C,0),f.push(.5,.5),v++;const R=v;for(let N=0;N<=s;N++){const L=N/s*l+o,G=Math.cos(L),X=Math.sin(L);_.x=P*X,_.y=g*C,_.z=P*G,u.push(_.x,_.y,_.z),h.push(0,C,0),T.x=G*.5+.5,T.y=X*.5*C+.5,f.push(T.x,T.y),v++}for(let N=0;N<s;N++){const B=w+N,L=R+N;M===!0?d.push(L,L+1,B):d.push(L+1,L,B),S+=3}c.addGroup(m,S,M===!0?1:2),m+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bi extends Rt{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Bi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class io extends Yt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];o(s),c(i),d(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(p){const E=new O,M=new O,w=new O;for(let T=0;T<t.length;T+=3)f(t[T+0],E),f(t[T+1],M),f(t[T+2],w),l(E,M,w,p)}function l(p,E,M,w){const T=w+1,_=[];for(let S=0;S<=T;S++){_[S]=[];const P=p.clone().lerp(M,S/T),C=E.clone().lerp(M,S/T),R=T-S;for(let N=0;N<=R;N++)N===0&&S===T?_[S][N]=P:_[S][N]=P.clone().lerp(C,N/R)}for(let S=0;S<T;S++)for(let P=0;P<2*(T-S)-1;P++){const C=Math.floor(P/2);P%2===0?(h(_[S][C+1]),h(_[S+1][C]),h(_[S][C])):(h(_[S][C+1]),h(_[S+1][C+1]),h(_[S+1][C]))}}function c(p){const E=new O;for(let M=0;M<r.length;M+=3)E.x=r[M+0],E.y=r[M+1],E.z=r[M+2],E.normalize().multiplyScalar(p),r[M+0]=E.x,r[M+1]=E.y,r[M+2]=E.z}function d(){const p=new O;for(let E=0;E<r.length;E+=3){p.x=r[E+0],p.y=r[E+1],p.z=r[E+2];const M=g(p)/2/Math.PI+.5,w=m(p)/Math.PI+.5;a.push(M,1-w)}v(),u()}function u(){for(let p=0;p<a.length;p+=6){const E=a[p+0],M=a[p+2],w=a[p+4],T=Math.max(E,M,w),_=Math.min(E,M,w);T>.9&&_<.1&&(E<.2&&(a[p+0]+=1),M<.2&&(a[p+2]+=1),w<.2&&(a[p+4]+=1))}}function h(p){r.push(p.x,p.y,p.z)}function f(p,E){const M=p*3;E.x=e[M+0],E.y=e[M+1],E.z=e[M+2]}function v(){const p=new O,E=new O,M=new O,w=new O,T=new We,_=new We,S=new We;for(let P=0,C=0;P<r.length;P+=9,C+=6){p.set(r[P+0],r[P+1],r[P+2]),E.set(r[P+3],r[P+4],r[P+5]),M.set(r[P+6],r[P+7],r[P+8]),T.set(a[C+0],a[C+1]),_.set(a[C+2],a[C+3]),S.set(a[C+4],a[C+5]),w.copy(p).add(E).add(M).divideScalar(3);const R=g(w);x(T,C+0,p,R),x(_,C+2,E,R),x(S,C+4,M,R)}}function x(p,E,M,w){w<0&&p.x===1&&(a[E]=p.x-1),M.x===0&&M.z===0&&(a[E]=w/2/Math.PI+.5)}function g(p){return Math.atan2(p.z,-p.x)}function m(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.vertices,e.indices,e.radius,e.detail)}}class Hr extends io{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Hr(e.radius,e.detail)}}class Fr extends io{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fr(e.radius,e.detail)}}class Zs extends Yt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,d=l+1,u=e/o,h=t/l,f=[],v=[],x=[],g=[];for(let m=0;m<d;m++){const p=m*h-a;for(let E=0;E<c;E++){const M=E*u-r;v.push(M,-p,0),x.push(0,0,1),g.push(E/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let p=0;p<o;p++){const E=p+c*m,M=p+c*(m+1),w=p+1+c*(m+1),T=p+1+c*m;f.push(E,M,T),f.push(M,w,T)}this.setIndex(f),this.setAttribute("position",new at(v,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Dc extends Yt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],d=[];let u=e;const h=(t-e)/s,f=new O,v=new We;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){const m=r+g/i*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),v.x=(f.x/t+1)/2,v.y=(f.y/t+1)/2,d.push(v.x,v.y)}u+=h}for(let x=0;x<s;x++){const g=x*(i+1);for(let m=0;m<i;m++){const p=m+g,E=p,M=p+i+1,w=p+i+2,T=p+1;o.push(E,M,T),o.push(M,w,T)}}this.setIndex(o),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class cs extends Yt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],u=new O,h=new O,f=[],v=[],x=[],g=[];for(let m=0;m<=i;m++){const p=[],E=m/i,M=a+E*o,w=e*Math.cos(M),T=Math.sqrt(e*e-w*w);let _=0;m===0&&a===0?_=.5/t:m===i&&l===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){const P=S/t,C=s+P*r;u.x=-T*Math.cos(C),u.y=w,u.z=T*Math.sin(C),v.push(u.x,u.y,u.z),h.copy(u).normalize(),x.push(h.x,h.y,h.z),g.push(P+_,1-E),p.push(c++)}d.push(p)}for(let m=0;m<i;m++)for(let p=0;p<t;p++){const E=d[m][p+1],M=d[m][p],w=d[m+1][p],T=d[m+1][p+1];(m!==0||a>0)&&f.push(E,M,T),(m!==i-1||l<Math.PI)&&f.push(M,w,T)}this.setIndex(f),this.setAttribute("position",new at(v,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ds extends Yt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],d=[],u=[],h=new O,f=new O,v=new O;for(let x=0;x<=i;x++){const g=a+x/i*o;for(let m=0;m<=s;m++){const p=m/s*r;f.x=(e+t*Math.cos(g))*Math.cos(p),f.y=(e+t*Math.cos(g))*Math.sin(p),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),h.x=e*Math.cos(p),h.y=e*Math.sin(p),v.subVectors(f,h).normalize(),d.push(v.x,v.y,v.z),u.push(m/s),u.push(x/i)}}for(let x=1;x<=i;x++)for(let g=1;g<=s;g++){const m=(s+1)*x+g-1,p=(s+1)*(x-1)+g-1,E=(s+1)*(x-1)+g,M=(s+1)*x+g;l.push(m,p,M),l.push(p,E,M)}this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Js(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Gd(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Gd(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function rn(n){const e={};for(let t=0;t<n.length;t++){const i=Js(n[t]);for(const s in i)e[s]=i[s]}return e}function Gd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function lm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function yf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const cm={clone:Js,merge:rn};var dm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ps extends _s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dm,this.fragmentShader=um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=lm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ge().setHex(s.value);break;case"v2":this.uniforms[i].value=new We().fromArray(s.value);break;case"v3":this.uniforms[i].value=new O().fromArray(s.value);break;case"v4":this.uniforms[i].value=new yt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ie().fromArray(s.value);break;case"m4":this.uniforms[i].value=new vt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class fm extends ps{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class so extends _s{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=Mc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hm extends _s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pm extends _s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ef extends It{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class mm extends Ef{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Vo=new vt,Hd=new O,Vd=new O;class gm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ur,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Hd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hd),Vd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Vo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Vo,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Nr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Vo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ma=new O,ga=new er,Bn=new O;class Tf extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ma,ga,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ma,ga,Bn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ma,ga,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ma,ga,Bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new O,Wd=new We,$d=new We;class Ln extends Tf{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(So*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bl*2*Math.atan(Math.tan(So*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,Wd,$d),t.subVectors($d,Wd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(So*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class wf extends Tf{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class _m extends gm{constructor(){super(new wf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vm extends Ef{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new _m}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Rs=-90,Cs=1;class Hl extends It{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ln(Rs,Cs,e,t);s.layers=this.layers,this.add(s);const r=new Ln(Rs,Cs,e,t);r.layers=this.layers,this.add(r);const a=new Ln(Rs,Cs,e,t);a.layers=this.layers,this.add(a);const o=new Ln(Rs,Cs,e,t);o.layers=this.layers,this.add(o);const l=new Ln(Rs,Cs,e,t);l.layers=this.layers,this.add(l);const c=new Ln(Rs,Cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===In)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class xm extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Xd(n,e,t,i){const s=Sm(i);switch(t){case of:return n*e;case cf:return n*e/s.components*s.byteLength;case Tc:return n*e/s.components*s.byteLength;case hs:return n*e*2/s.components*s.byteLength;case wc:return n*e*2/s.components*s.byteLength;case lf:return n*e*3/s.components*s.byteLength;case Kn:return n*e*4/s.components*s.byteLength;case Ac:return n*e*4/s.components*s.byteLength;case Ta:case wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Aa:case Ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cl:case ul:return Math.max(n,16)*Math.max(e,8)/4;case ll:case dl:return Math.max(n,8)*Math.max(e,8)/2;case fl:case hl:case ml:case gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case pl:case Ia:case _l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case bl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case yl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case El:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case wl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Al:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Pl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ll:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Dl:case Il:case Nl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ul:case Fl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Na:case Ol:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sm(n){switch(n){case mn:case nf:return{byteLength:1,components:1};case Ir:case sf:case ni:return{byteLength:2,components:1};case yc:case Ec:return{byteLength:2,components:4};case ti:case bc:case Yn:return{byteLength:4,components:1};case rf:case af:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sc}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Af(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Mm(n){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,u=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const d=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,d);else{u.sort((f,v)=>f.start-v.start);let h=0;for(let f=1;f<u.length;f++){const v=u[h],x=u[f];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++h,u[h]=x)}u.length=h+1;for(let f=0,v=u.length;f<v;f++){const x=u[f];n.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var bm=`#ifdef USE_ALPHAHASH
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
#endif`,Em=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Am=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rm=`#ifdef USE_AOMAP
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
#endif`,Cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pm=`#ifdef USE_BATCHING
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
#endif`,Lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Um=`#ifdef USE_IRIDESCENCE
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
#endif`,Fm=`#ifdef USE_BUMPMAP
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
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$m=`#define PI 3.141592653589793
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
} // validated`,Xm=`vec3 transformedNormal = objectNormal;
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
#endif`,qm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ym=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Km=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jm=`#ifdef USE_ENVMAP
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
#endif`,e0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
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
#endif`,n0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
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
#endif`,s0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,r0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,a0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,o0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l0=`#ifdef USE_GRADIENTMAP
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
}`,c0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,d0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,h0=`#ifdef USE_ENVMAP
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
#endif`,p0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v0=`PhysicalMaterial material;
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
#endif`,x0=`uniform sampler2D dfgLUT;
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
}`,S0=`
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
#endif`,M0=`#if defined( RE_IndirectDiffuse )
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
#endif`,b0=`#if defined( RE_IndirectDiffuse )
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
#endif`,E0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,T0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,R0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,C0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,L0=`#if defined( USE_POINTS_UV )
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
#endif`,D0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,N0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,U0=`#if defined( USE_MORPHCOLORS )
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
#endif`,F0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O0=`#ifdef USE_MORPHTARGETS
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
#endif`,k0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,z0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,G0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,W0=`#ifdef USE_NORMALMAP
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
#endif`,$0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,K0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Z0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,J0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ng=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ag=`float getShadowMask() {
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
}`,og=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lg=`#ifdef USE_SKINNING
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
#endif`,cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dg=`#ifdef USE_SKINNING
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
#endif`,ug=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mg=`#ifdef USE_TRANSMISSION
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
#endif`,gg=`#ifdef USE_TRANSMISSION
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
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bg=`uniform sampler2D t2D;
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
}`,Eg=`uniform float backgroundBlurriness;
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
}`,Tg=`varying vec3 vWorldDirection;
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
}`,Ag=`#include <common>
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
}`,Rg=`#if DEPTH_PACKING == 3200
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
}`,Cg=`#define DISTANCE
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
}`,Pg=`#define DISTANCE
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
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`uniform float scale;
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Ug=`#include <common>
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
}`,Fg=`uniform vec3 diffuse;
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
}`,Og=`#define LAMBERT
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
}`,kg=`#define LAMBERT
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
}`,Bg=`#define MATCAP
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
}`,zg=`#define MATCAP
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
}`,Gg=`#define NORMAL
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
}`,Hg=`#define NORMAL
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
}`,Vg=`#define PHONG
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
}`,Wg=`#define PHONG
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
}`,$g=`#define STANDARD
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
}`,Xg=`#define STANDARD
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
}`,qg=`#define TOON
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
}`,Yg=`#define TOON
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
}`,Kg=`uniform float size;
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
}`,Zg=`uniform vec3 diffuse;
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
}`,Jg=`#include <common>
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
}`,Qg=`uniform vec3 color;
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
}`,jg=`uniform float rotation;
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
}`,e_=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:bm,alphahash_pars_fragment:ym,alphamap_fragment:Em,alphamap_pars_fragment:Tm,alphatest_fragment:wm,alphatest_pars_fragment:Am,aomap_fragment:Rm,aomap_pars_fragment:Cm,batching_pars_vertex:Pm,batching_vertex:Lm,begin_vertex:Dm,beginnormal_vertex:Im,bsdfs:Nm,iridescence_fragment:Um,bumpmap_pars_fragment:Fm,clipping_planes_fragment:Om,clipping_planes_pars_fragment:km,clipping_planes_pars_vertex:Bm,clipping_planes_vertex:zm,color_fragment:Gm,color_pars_fragment:Hm,color_pars_vertex:Vm,color_vertex:Wm,common:$m,defaultnormal_vertex:Xm,displacementmap_pars_vertex:qm,displacementmap_vertex:Ym,emissivemap_fragment:Km,emissivemap_pars_fragment:Zm,colorspace_fragment:Jm,colorspace_pars_fragment:Qm,envmap_fragment:jm,envmap_common_pars_fragment:e0,envmap_pars_fragment:t0,envmap_pars_vertex:n0,envmap_physical_pars_fragment:h0,envmap_vertex:i0,fog_vertex:s0,fog_pars_vertex:r0,fog_fragment:a0,fog_pars_fragment:o0,gradientmap_pars_fragment:l0,lightmap_pars_fragment:c0,lights_lambert_fragment:d0,lights_lambert_pars_fragment:u0,lights_pars_begin:f0,lights_toon_fragment:p0,lights_toon_pars_fragment:m0,lights_phong_fragment:g0,lights_phong_pars_fragment:_0,lights_physical_fragment:v0,lights_physical_pars_fragment:x0,lights_fragment_begin:S0,lights_fragment_maps:M0,lights_fragment_end:b0,lightprobes_pars_fragment:y0,logdepthbuf_fragment:E0,logdepthbuf_pars_fragment:T0,logdepthbuf_pars_vertex:w0,logdepthbuf_vertex:A0,map_fragment:R0,map_pars_fragment:C0,map_particle_fragment:P0,map_particle_pars_fragment:L0,metalnessmap_fragment:D0,metalnessmap_pars_fragment:I0,morphinstance_vertex:N0,morphcolor_vertex:U0,morphnormal_vertex:F0,morphtarget_pars_vertex:O0,morphtarget_vertex:k0,normal_fragment_begin:B0,normal_fragment_maps:z0,normal_pars_fragment:G0,normal_pars_vertex:H0,normal_vertex:V0,normalmap_pars_fragment:W0,clearcoat_normal_fragment_begin:$0,clearcoat_normal_fragment_maps:X0,clearcoat_pars_fragment:q0,iridescence_pars_fragment:Y0,opaque_fragment:K0,packing:Z0,premultiplied_alpha_fragment:J0,project_vertex:Q0,dithering_fragment:j0,dithering_pars_fragment:eg,roughnessmap_fragment:tg,roughnessmap_pars_fragment:ng,shadowmap_pars_fragment:ig,shadowmap_pars_vertex:sg,shadowmap_vertex:rg,shadowmask_pars_fragment:ag,skinbase_vertex:og,skinning_pars_vertex:lg,skinning_vertex:cg,skinnormal_vertex:dg,specularmap_fragment:ug,specularmap_pars_fragment:fg,tonemapping_fragment:hg,tonemapping_pars_fragment:pg,transmission_fragment:mg,transmission_pars_fragment:gg,uv_pars_fragment:_g,uv_pars_vertex:vg,uv_vertex:xg,worldpos_vertex:Sg,background_vert:Mg,background_frag:bg,backgroundCube_vert:yg,backgroundCube_frag:Eg,cube_vert:Tg,cube_frag:wg,depth_vert:Ag,depth_frag:Rg,distance_vert:Cg,distance_frag:Pg,equirect_vert:Lg,equirect_frag:Dg,linedashed_vert:Ig,linedashed_frag:Ng,meshbasic_vert:Ug,meshbasic_frag:Fg,meshlambert_vert:Og,meshlambert_frag:kg,meshmatcap_vert:Bg,meshmatcap_frag:zg,meshnormal_vert:Gg,meshnormal_frag:Hg,meshphong_vert:Vg,meshphong_frag:Wg,meshphysical_vert:$g,meshphysical_frag:Xg,meshtoon_vert:qg,meshtoon_frag:Yg,points_vert:Kg,points_frag:Zg,shadow_vert:Jg,shadow_frag:Qg,sprite_vert:jg,sprite_frag:e_},ge={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},Wn={basic:{uniforms:rn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:rn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:rn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:rn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:rn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:rn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:rn([ge.points,ge.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:rn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:rn([ge.common,ge.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:rn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:rn([ge.sprite,ge.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:rn([ge.common,ge.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:rn([ge.lights,ge.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Wn.physical={uniforms:rn([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const _a={r:0,b:0,g:0},t_=new vt,Rf=new Ie;Rf.set(-1,0,0,0,1,0,0,0,1);function n_(n,e,t,i,s,r){const a=new Ge(0);let o=s===!0?0:1,l,c,d=null,u=0,h=null;function f(p){let E=p.isScene===!0?p.background:null;if(E&&E.isTexture){const M=p.backgroundBlurriness>0;E=e.get(E,M)}return E}function v(p){let E=!1;const M=f(p);M===null?g(a,o):M&&M.isColor&&(g(M,1),E=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(p,E){const M=f(E);M&&M.isCubeTexture?(c===void 0&&(c=new Gt(new an(1,1,1),new ps({name:"BackgroundCubeMaterial",uniforms:Js(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(t_.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Rf),c.material.toneMapped=Qe.getTransfer(M.colorSpace)!==dt,(d!==M||u!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=M,u=M.version,h=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Gt(new Zs(2,2),new ps({name:"BackgroundMaterial",uniforms:Js(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(M.colorSpace)!==dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||u!==M.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=M,u=M.version,h=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,E){p.getRGB(_a,yf(n)),t.buffers.color.setClear(_a.r,_a.g,_a.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(p,E=1){a.set(p),o=E,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,g(a,o)},render:v,addToRenderList:x,dispose:m}}function i_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(R,N,B,L,G){let X=!1;const F=u(R,L,B,N);r!==F&&(r=F,c(r.object)),X=f(R,L,B,G),X&&v(R,L,B,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,M(R,N,B,L),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(R){return n.bindVertexArray(R)}function d(R){return n.deleteVertexArray(R)}function u(R,N,B,L){const G=L.wireframe===!0;let X=i[N.id];X===void 0&&(X={},i[N.id]=X);const F=R.isInstancedMesh===!0?R.id:0;let ne=X[F];ne===void 0&&(ne={},X[F]=ne);let q=ne[B.id];q===void 0&&(q={},ne[B.id]=q);let j=q[G];return j===void 0&&(j=h(l()),q[G]=j),j}function h(R){const N=[],B=[],L=[];for(let G=0;G<t;G++)N[G]=0,B[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:L,object:R,attributes:{},index:null}}function f(R,N,B,L){const G=r.attributes,X=N.attributes;let F=0;const ne=B.getAttributes();for(const q in ne)if(ne[q].location>=0){const te=G[q];let Me=X[q];if(Me===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(Me=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(Me=R.instanceColor)),te===void 0||te.attribute!==Me||Me&&te.data!==Me.data)return!0;F++}return r.attributesNum!==F||r.index!==L}function v(R,N,B,L){const G={},X=N.attributes;let F=0;const ne=B.getAttributes();for(const q in ne)if(ne[q].location>=0){let te=X[q];te===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(te=R.instanceColor));const Me={};Me.attribute=te,te&&te.data&&(Me.data=te.data),G[q]=Me,F++}r.attributes=G,r.attributesNum=F,r.index=L}function x(){const R=r.newAttributes;for(let N=0,B=R.length;N<B;N++)R[N]=0}function g(R){m(R,0)}function m(R,N){const B=r.newAttributes,L=r.enabledAttributes,G=r.attributeDivisors;B[R]=1,L[R]===0&&(n.enableVertexAttribArray(R),L[R]=1),G[R]!==N&&(n.vertexAttribDivisor(R,N),G[R]=N)}function p(){const R=r.newAttributes,N=r.enabledAttributes;for(let B=0,L=N.length;B<L;B++)N[B]!==R[B]&&(n.disableVertexAttribArray(B),N[B]=0)}function E(R,N,B,L,G,X,F){F===!0?n.vertexAttribIPointer(R,N,B,G,X):n.vertexAttribPointer(R,N,B,L,G,X)}function M(R,N,B,L){x();const G=L.attributes,X=B.getAttributes(),F=N.defaultAttributeValues;for(const ne in X){const q=X[ne];if(q.location>=0){let j=G[ne];if(j===void 0&&(ne==="instanceMatrix"&&R.instanceMatrix&&(j=R.instanceMatrix),ne==="instanceColor"&&R.instanceColor&&(j=R.instanceColor)),j!==void 0){const te=j.normalized,Me=j.itemSize,Fe=e.get(j);if(Fe===void 0)continue;const J=Fe.buffer,_e=Fe.type,be=Fe.bytesPerElement,Re=_e===n.INT||_e===n.UNSIGNED_INT||j.gpuType===bc;if(j.isInterleavedBufferAttribute){const ve=j.data,Be=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,Tt=j.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let Pe=0;Pe<q.locationSize;Pe++)m(q.location+Pe,ve.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Pe=0;Pe<q.locationSize;Pe++)g(q.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,J);for(let Pe=0;Pe<q.locationSize;Pe++)E(q.location+Pe,Me/q.locationSize,_e,te,Be*be,(Tt+Me/q.locationSize*Pe)*be,Re)}else{if(j.isInstancedBufferAttribute){for(let ve=0;ve<q.locationSize;ve++)m(q.location+ve,j.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ve=0;ve<q.locationSize;ve++)g(q.location+ve);n.bindBuffer(n.ARRAY_BUFFER,J);for(let ve=0;ve<q.locationSize;ve++)E(q.location+ve,Me/q.locationSize,_e,te,Me*be,Me/q.locationSize*ve*be,Re)}}else if(F!==void 0){const te=F[ne];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(q.location,te);break;case 3:n.vertexAttrib3fv(q.location,te);break;case 4:n.vertexAttrib4fv(q.location,te);break;default:n.vertexAttrib1fv(q.location,te)}}}}p()}function w(){P();for(const R in i){const N=i[R];for(const B in N){const L=N[B];for(const G in L){const X=L[G];for(const F in X)d(X[F].object),delete X[F];delete L[G]}}delete i[R]}}function T(R){if(i[R.id]===void 0)return;const N=i[R.id];for(const B in N){const L=N[B];for(const G in L){const X=L[G];for(const F in X)d(X[F].object),delete X[F];delete L[G]}}delete i[R.id]}function _(R){for(const N in i){const B=i[N];for(const L in B){const G=B[L];if(G[R.id]===void 0)continue;const X=G[R.id];for(const F in X)d(X[F].object),delete X[F];delete G[R.id]}}}function S(R){for(const N in i){const B=i[N],L=R.isInstancedMesh===!0?R.id:0,G=B[L];if(G!==void 0){for(const X in G){const F=G[X];for(const ne in F)d(F[ne].object),delete F[ne];delete G[X]}delete B[L],Object.keys(B).length===0&&delete i[N]}}}function P(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:g,disableUnusedAttributes:p}}function s_(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),t.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let h=0;for(let f=0;f<d;f++)h+=c[f];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function r_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Kn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const S=_===ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==mn&&_!==Yn&&!S&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Le("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Le("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:E,maxFragmentUniforms:M,maxSamples:w,samples:T}}function a_(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Ri,o=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||i!==0||s;return s=h,i=u.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){const v=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||v===null||v.length===0||r&&!g)r?d(null):c();else{const p=r?0:i,E=p*4;let M=m.clippingState||null;l.value=M,M=d(v,h,E,f);for(let w=0;w!==E;++w)M[w]=t[w];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,h,f,v){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=l.value,v!==!0||g===null){const m=f+x*4,p=h.matrixWorldInverse;o.getNormalMatrix(p),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,M=f;E!==x;++E,M+=4)a.copy(u[E]).applyMatrix4(p,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}class Ic extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Sf(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new an(5,5,5),r=new ps({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:zs});r.uniforms.tEquirect.value=t;const a=new Gt(s,r),o=t.minFilter;return t.minFilter===Fi&&(t.minFilter=cn),new Hl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const qd=256,o_=3,l_=20,Cf=256,Pf=16,c_=3,d_=new O,u_=new Ge;class Ga{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Hl(1,10,null),this._boxMesh=new Gt(new an(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=d_}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),d=this._getSourceTarget(!0);t>0&&(d.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,h=l.autoClearColor,f=l.autoClearDepth,v=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(u_));const g=new Hl(i,s,d);return g.position.copy(o),g.update(l,e),l.autoClear=u,l.autoClearColor=h,l.autoClearDepth=f,l.autoClearStencil=v,e.background=x,t>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(qd,Np(e))}_fromTexture(e,t){e.mapping===qs||e.mapping===Dr?this._setSize(e.image.length===0?qd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=Yd(e,!1,!1),i=Math.log2(e)-o_;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Yd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===qs||e.mapping===Dr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Kd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=f_(),this._integrationMaterial=h_());const t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Pf);for(let a=0;a<=i;a++){const o=Ga.lodToRoughness(a,i);if(a>i-c_)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(Cf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=p_());const i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}}function Yd(n,e,t){return new Ic(n,{minFilter:Fi,generateMipmaps:e,type:ni,colorSpace:Ua,depthBuffer:t})}function Vr(n,e,t){return new ps({name:n,uniforms:e,vertexShader:Ve.cube_vert,fragmentShader:t,side:dn,blending:zs,depthTest:!1,depthWrite:!1})}function f_(){return Vr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function h_(){return Vr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Pf}},`

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
	`)}function p_(){return Vr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${l_}
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
	`)}function Kd(){return Vr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Zd(){return Vr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function m_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===go||f===_o)if(e.has(h)){const v=e.get(h).texture;return o(v,h.mapping)}else{const v=h.image;if(v&&v.height>0){const x=new Ic(v.height);return x.fromEquirectangularTexture(n,h),e.set(h,x),h.addEventListener("dispose",c),o(x.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const f=h.mapping,v=f===go||f===_o,x=f===qs||f===Dr;if(v||x){let g=t.get(h);const m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return i===null&&(i=new Ga(n)),g=v?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const p=h.image;return v&&p&&p.height>0||x&&p&&l(p)?(i===null&&(i=new Ga(n)),g=v?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",d),g.texture):null}}}return h}function o(h,f){return f===go?h.mapping=qs:f===_o&&(h.mapping=Dr),h}function l(h){let f=0;const v=6;for(let x=0;x<v;x++)h[x]!==void 0&&f++;return f===v}function c(h){const f=h.target;f.removeEventListener("dispose",c);const v=e.get(f);v!==void 0&&(e.delete(f),v.dispose())}function d(h){const f=h.target;f.removeEventListener("dispose",d);const v=t.get(f);v!==void 0&&(t.delete(f),v.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function g_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Ca("WebGLRenderer: "+i+" extension not supported."),s}}}function __(n,e,t,i){const s={},r=new WeakMap,a=new FinalizationRegistry(v=>delete s[v]);function o(v){l(v.target)}function l(v){v.index!==null&&e.remove(v.index);for(const g in v.attributes)e.remove(v.attributes[g]);v.removeEventListener("dispose",o),delete s[v.id],a.unregister(v);const x=r.get(v);x&&(e.remove(x),r.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(v,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function d(v){const x=v.attributes;for(const g in x)e.update(x[g],n.ARRAY_BUFFER)}function u(v){const x=v.index,g=v.attributes.position;let m=0;if(g===void 0)return;const p=x!==null?x.array.length:g.array.length/3-1,E=g.count>=65535?vf:_f,M=new E(Math.ceil(p/3)*6,1),w=M.array;if(x!==null){const _=x.array;m=x.version;for(let S=0,P=0;S<p;S+=3){const C=_[S+0],R=_[S+1],N=_[S+2];w[P++]=C,w[P++]=R,w[P++]=R,w[P++]=N,w[P++]=N,w[P++]=C}}else{m=g.version;for(let _=0,S=0;_<p;_+=3){const P=_+0,C=_+1,R=_+2;w[S++]=P,w[S++]=C,w[S++]=C,w[S++]=R,w[S++]=R,w[S++]=P}}M.version=m;const T=r.get(v);T&&e.remove(T),r.set(v,M)}function h(v){const x=r.get(v);if(x){const g=v.index;g!==null&&x.version<g.version&&u(v)}else u(v);return r.get(v)}function f(){for(const v in s){const x=s[v].deref();x!==void 0&&l(x)}}return{get:c,update:d,getWireframeAttribute:h,dispose:f}}function v_(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,h){n.drawElements(i,h,r,u*a),t.update(h,i,1)}function c(u,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,u*a,f),t.update(h,i,f))}function d(u,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,u,0,f);let x=0;for(let g=0;g<f;g++)x+=h[g];t.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function x_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:rt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function S_(n,e,t){const i=new WeakMap,s=new yt;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let h=i.get(o);if(h===void 0||h.count!==u){let C=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",C)};var f=C;h!==void 0&&h.texture.dispose();const v=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let M=0;v===!0&&(M=1),x===!0&&(M=2),g===!0&&(M=3);let w=o.attributes.position.count*M,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const _=new Float32Array(w*T*4*u),S=new pf(_,w,T,u);S.type=Yn,S.needsUpdate=!0;const P=M*4;for(let R=0;R<u;R++){const N=m[R],B=p[R],L=E[R],G=w*T*4*R;for(let X=0;X<N.count;X++){const F=X*P;v===!0&&(s.fromBufferAttribute(N,X),_[G+F+0]=s.x,_[G+F+1]=s.y,_[G+F+2]=s.z,_[G+F+3]=0),x===!0&&(s.fromBufferAttribute(B,X),_[G+F+4]=s.x,_[G+F+5]=s.y,_[G+F+6]=s.z,_[G+F+7]=0),g===!0&&(s.fromBufferAttribute(L,X),_[G+F+8]=s.x,_[G+F+9]=s.y,_[G+F+10]=s.z,_[G+F+11]=L.itemSize===4?s.w:1)}}h={count:u,texture:S,size:new We(w,T)},i.set(o,h),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const x=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function M_(n,e,t,i,s){let r=new WeakMap;function a(c){const d=s.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return h}function o(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const b_={[Yu]:"LINEAR_TONE_MAPPING",[Ku]:"REINHARD_TONE_MAPPING",[Zu]:"CINEON_TONE_MAPPING",[Ju]:"ACES_FILMIC_TONE_MAPPING",[ju]:"AGX_TONE_MAPPING",[ef]:"NEUTRAL_TONE_MAPPING",[Qu]:"CUSTOM_TONE_MAPPING"};function y_(n,e,t,i,s,r){const a=new Zn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const d=new Yt;d.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new at([0,2,0,0,2,0],2));const u=new fm({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Gt(d,u),f=new wf(-1,1,1,-1,0,1);let v=null,x=null,g=!1,m,p=null,E=[],M=!1;this.setSize=function(w,T){a.setSize(w,T),o!==null&&o.setSize(w,T),l!==null&&l.setSize(w,T);for(let _=0;_<E.length;_++){const S=E[_];S.setSize&&S.setSize(w,T)}},this.setEffects=function(w){E=w,M=E.length>0&&E[0].isRenderPass===!0;const T=a.width,_=a.height;E.length>0&&o===null&&(o=new Zn(T,_,{type:ni,depthBuffer:!1,stencilBuffer:!1}),l=new Zn(T,_,{type:ni,depthBuffer:!1,stencilBuffer:!1}));const S=s===!0&&E.some(P=>P.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new Ks(T,_),r===!0&&(c.format=Oi,c.type=Ys)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let P=0;P<E.length;P++){const C=E[P];C.setSize&&C.setSize(T,_),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(w,T){if(g||w.toneMapping===mi&&E.length===0)return!1;if(p=T,T!==null){const _=T.width,S=T.height;(a.width!==_||a.height!==S)&&this.setSize(_,S)}return M===!1&&w.setRenderTarget(a),m=w.toneMapping,w.toneMapping=mi,!0},this.hasRenderPass=function(){return M},this.end=function(w,T){w.toneMapping=m,g=!0;let _=a,S=o;for(let P=0;P<E.length;P++){const C=E[P];C.enabled!==!1&&(C.render(w,S,_,T),C.needsSwap!==!1&&(_=S,S=S===o?l:o))}if(v!==w.outputColorSpace||x!==w.toneMapping){v=w.outputColorSpace,x=w.toneMapping,u.defines={},Qe.getTransfer(v)===dt&&(u.defines.SRGB_TRANSFER="");const P=b_[x];P&&(u.defines[P]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(p),w.render(h,f),p=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),d.dispose(),u.dispose()}}const Lf=new tn,Df=new Ks(1,1),If=new Mf(1),Nf=new pf,Uf=new Hp,Ff=new Sf,Jd=[],Qd=[],jd=new Float32Array(16),eu=new Float32Array(9),tu=new Float32Array(4);function tr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Jd[s];if(r===void 0&&(r=new Float32Array(s),Jd[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ro(n,e){let t=Qd[e];t===void 0&&(t=new Int32Array(e),Qd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function E_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function T_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function w_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function A_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function R_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;tu.set(i),n.uniformMatrix2fv(this.addr,!1,tu),Ut(t,i)}}function C_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;eu.set(i),n.uniformMatrix3fv(this.addr,!1,eu),Ut(t,i)}}function P_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;jd.set(i),n.uniformMatrix4fv(this.addr,!1,jd),Ut(t,i)}}function L_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function D_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function I_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function N_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function U_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function F_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function O_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function k_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function ao(n){return n.version===0&&(n.compareFunction=ff,n.needsUpdate=!0),n}function B_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=ao(Df):r=Lf,t.setTexture2D(e||r,s)}function z_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Uf,s)}function G_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=ao(If):r=Ff,t.setTextureCube(e||r,s)}function H_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Nf,s)}function V_(n){switch(n){case 5126:return E_;case 35664:return T_;case 35665:return w_;case 35666:return A_;case 35674:return R_;case 35675:return C_;case 35676:return P_;case 5124:case 35670:return L_;case 35667:case 35671:return D_;case 35668:case 35672:return I_;case 35669:case 35673:return N_;case 5125:return U_;case 36294:return F_;case 36295:return O_;case 36296:return k_;case 35678:case 36198:case 36298:case 36306:case 35682:return B_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return G_;case 36289:case 36303:case 36311:case 36292:return H_}}function W_(n,e){n.uniform1fv(this.addr,e)}function $_(n,e){const t=tr(e,this.size,2);n.uniform2fv(this.addr,t)}function X_(n,e){const t=tr(e,this.size,3);n.uniform3fv(this.addr,t)}function q_(n,e){const t=tr(e,this.size,4);n.uniform4fv(this.addr,t)}function Y_(n,e){const t=tr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function K_(n,e){const t=tr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Z_(n,e){const t=tr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function J_(n,e){n.uniform1iv(this.addr,e)}function Q_(n,e){n.uniform2iv(this.addr,e)}function j_(n,e){n.uniform3iv(this.addr,e)}function ev(n,e){n.uniform4iv(this.addr,e)}function tv(n,e){n.uniform1uiv(this.addr,e)}function nv(n,e){n.uniform2uiv(this.addr,e)}function iv(n,e){n.uniform3uiv(this.addr,e)}function sv(n,e){n.uniform4uiv(this.addr,e)}function rv(n,e,t){const i=this.cache,s=e.length,r=ro(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=ao(Df):a=Lf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function av(n,e,t){const i=this.cache,s=e.length,r=ro(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Uf,r[a])}function ov(n,e,t){const i=this.cache,s=e.length,r=ro(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=ao(If):a=Ff;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function lv(n,e,t){const i=this.cache,s=e.length,r=ro(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Nf,r[a])}function cv(n){switch(n){case 5126:return W_;case 35664:return $_;case 35665:return X_;case 35666:return q_;case 35674:return Y_;case 35675:return K_;case 35676:return Z_;case 5124:case 35670:return J_;case 35667:case 35671:return Q_;case 35668:case 35672:return j_;case 35669:case 35673:return ev;case 5125:return tv;case 36294:return nv;case 36295:return iv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return av;case 35680:case 36300:case 36308:case 36293:return ov;case 36289:case 36303:case 36311:case 36292:return lv}}class dv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=V_(t.type)}}class uv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cv(t.type)}}class fv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Wo=/(\w+)(\])?(\[|\.)?/g;function nu(n,e){n.seq.push(e),n.map[e.id]=e}function hv(n,e,t){const i=n.name,s=i.length;for(Wo.lastIndex=0;;){const r=Wo.exec(i),a=Wo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){nu(t,c===void 0?new dv(o,n,e):new uv(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new fv(o),nu(t,u)),t=u}}}class Pa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);hv(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function iu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const pv=37297;let mv=0;function gv(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const su=new Ie;function _v(n){Qe._getMatrix(su,Qe.workingColorSpace,n);const e=`mat3( ${su.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case Fa:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ru(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+gv(n.getShaderSource(e),o)}else return r}function vv(n,e){const t=_v(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const xv={[Yu]:"Linear",[Ku]:"Reinhard",[Zu]:"Cineon",[Ju]:"ACESFilmic",[ju]:"AgX",[ef]:"Neutral",[Qu]:"Custom"};function Sv(n,e){const t=xv[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const va=new O;function Mv(){Qe.getLuminanceCoefficients(va);const n=va.x.toFixed(4),e=va.y.toFixed(4),t=va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function yv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ev(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function gr(n){return n!==""}function au(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function ou(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Tv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vl(n){return n.replace(Tv,wv)}function wv(n,e){const t=Ve[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Vl(t)}const Av=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lu(n){return n.replace(Av,Rv)}function Rv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const Cv={[Ea]:"SHADOWMAP_TYPE_PCF",[mr]:"SHADOWMAP_TYPE_VSM"};function Pv(n){return Cv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Lv={[Dr]:"ENVMAP_MODE_REFRACTION"};function Dv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Lv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Iv={[Mc]:"ENVMAP_BLENDING_MULTIPLY",[_p]:"ENVMAP_BLENDING_MIX",[vp]:"ENVMAP_BLENDING_ADD"};function Nv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Iv[n.combine]||"ENVMAP_BLENDING_NONE"}function Uv(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Pv(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=Dv(t),u=Nv(t),h=bv(t),f=yv(r),v=s.createProgram();let x,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(gr).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(gr).join(`
`),g.length>0&&(g+=`
`)):(x=[cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),g=[cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==mi?Sv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,vv("linearToOutputTexel",t.outputColorSpace),Mv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gr).join(`
`)),a=Vl(a),a=au(a,t),a=ou(a,t),o=Vl(o),o=au(o,t),o=ou(o,t),a=lu(a),o=lu(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===_d?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_d?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const p=m+x+a,E=m+g+o,M=iu(s,s.VERTEX_SHADER,p),w=iu(s,s.FRAGMENT_SHADER,E);s.attachShader(v,M),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(C){if(n.debug.checkShaderErrors){const R=s.getProgramInfoLog(v)||"",N=s.getShaderInfoLog(M)||"",B=s.getShaderInfoLog(w)||"",L=R.trim(),G=N.trim(),X=B.trim();let F=!0,ne=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,M,w);else{const q=ru(s,M,"vertex"),j=ru(s,w,"fragment");rt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+q+`
`+j)}else L!==""?Le("WebGLProgram: Program Info Log:",L):(G===""||X==="")&&(ne=!1);ne&&(C.diagnostics={runnable:F,programLog:L,vertexShader:{log:G,prefix:x},fragmentShader:{log:X,prefix:g}})}s.deleteShader(M),s.deleteShader(w),_=new Pa(s,v),S=Ev(s,v)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(v,pv)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=w,this}let Fv=0;class Ov{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new kv(e),t.set(e,i)),i}}class kv{constructor(e){this.id=Fv++,this.code=e,this.usedTimes=0}}function Bv(n){return n===hs||n===Ia||n===Na}function zv(n,e,t,i,s,r){const a=new mf,o=new Ov,l=new Set,c=[],d=new Map,u=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,S,P,C,R,N){const B=C.fog,L=R.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,F=e.get(_.envMap||G,X),ne=h[_.type];let q=i.precision;_.precision!==null&&(q=i.getMaxPrecision(_.precision),q!==_.precision&&Le("WebGLProgram.getParameters:",_.precision,"not supported, using",q,"instead."));const j=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,te=j!==void 0?j.length:0;let Me=0;L.morphAttributes.position!==void 0&&(Me=1),L.morphAttributes.normal!==void 0&&(Me=2),L.morphAttributes.color!==void 0&&(Me=3);let Fe,J,_e,be;if(ne){const me=Wn[ne];Fe=me.vertexShader,J=me.fragmentShader}else{Fe=_.vertexShader,J=_.fragmentShader;const me=o.getVertexShaderStage(_),ct=o.getFragmentShaderStage(_);o.update(_,me,ct),_e=me.id,be=ct.id}const Re=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),Be=R.isInstancedMesh===!0,Tt=R.isBatchedMesh===!0,Pe=!!_.map,lt=!!_.matcap,pt=!!F,Ye=pt&&F.isPMREMTexture===!0,Ht=!!_.aoMap,Ct=!!_.lightMap,on=!!_.bumpMap&&_.wireframe===!1,Mt=!!_.normalMap,kn=!!_.displacementMap,Ft=!!_.emissiveMap,vn=!!_.metalnessMap,xn=!!_.roughnessMap,Sn=_.anisotropy>0,U=_.clearcoat>0,Mn=_.diffuseRoughness>0,xt=_.dispersion>0,St=_.retroreflectivity>0,pe=_.iridescence>0,Pt=_.sheen>0,Ce=_.transmission>0,De=Sn&&!!_.anisotropyMap,A=U&&!!_.clearcoatMap,b=U&&!!_.clearcoatNormalMap,H=U&&!!_.clearcoatRoughnessMap,ie=Mn&&!!_.diffuseRoughnessMap,ee=pe&&!!_.iridescenceMap,oe=pe&&!!_.iridescenceThicknessMap,fe=Pt&&!!_.sheenColorMap,K=Pt&&!!_.sheenRoughnessMap,Z=!!_.specularMap,ce=!!_.specularColorMap,D=!!_.specularIntensityMap,Q=Ce&&!!_.transmissionMap,Y=Ce&&!!_.thicknessMap,de=!!_.gradientMap,ae=!!_.alphaMap,le=_.alphaTest>0,we=!!_.alphaHash,He=!!_.extensions;let re=mi;_.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(re=n.toneMapping);const Ae=Ye?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,ze={shaderID:ne,shaderType:_.type,shaderName:_.name,vertexShader:Fe,fragmentShader:J,defines:_.defines,customVertexShaderID:_e,customFragmentShaderID:be,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:q,batching:Tt,batchingColor:Tt&&R._colorsTexture!==null,instancing:Be,instancingColor:Be&&R.instanceColor!==null,instancingMorph:Be&&R.morphTexture!==null,outputColorSpace:Re===null?n.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Pe,matcap:lt,envMap:pt,envMapMode:pt&&F.mapping,envMapPMREM:Ye,envMapMaxLod:Ye?Ae.length-1:null,envMapSize:Ye?Ae[0].width:null,aoMap:Ht,lightMap:Ct,bumpMap:on,normalMap:Mt,displacementMap:kn,emissiveMap:Ft,normalMapObjectSpace:Mt&&_.normalMapType===Mp,normalMapTangentSpace:Mt&&_.normalMapType===kl,packedNormalMap:Mt&&_.normalMapType===kl&&Bv(_.normalMap.format),metalnessMap:vn,roughnessMap:xn,anisotropy:Sn,anisotropyMap:De,clearcoat:U,clearcoatMap:A,clearcoatNormalMap:b,clearcoatRoughnessMap:H,diffuseRoughness:Mn,diffuseRoughnessMap:ie,dispersion:xt,retroreflection:St,iridescence:pe,iridescenceMap:ee,iridescenceThicknessMap:oe,sheen:Pt,sheenColorMap:fe,sheenRoughnessMap:K,specularMap:Z,specularColorMap:ce,specularIntensityMap:D,transmission:Ce,transmissionMap:Q,thicknessMap:Y,gradientMap:de,opaque:_.transparent===!1&&_.blending===br&&_.alphaToCoverage===!1,alphaMap:ae,alphaTest:le,alphaHash:we,combine:_.combine,mapUv:Pe&&f(_.map.channel),aoMapUv:Ht&&f(_.aoMap.channel),lightMapUv:Ct&&f(_.lightMap.channel),bumpMapUv:on&&f(_.bumpMap.channel),normalMapUv:Mt&&f(_.normalMap.channel),displacementMapUv:kn&&f(_.displacementMap.channel),emissiveMapUv:Ft&&f(_.emissiveMap.channel),metalnessMapUv:vn&&f(_.metalnessMap.channel),roughnessMapUv:xn&&f(_.roughnessMap.channel),anisotropyMapUv:De&&f(_.anisotropyMap.channel),clearcoatMapUv:A&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:b&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:K&&f(_.sheenRoughnessMap.channel),specularMapUv:Z&&f(_.specularMap.channel),specularColorMapUv:ce&&f(_.specularColorMap.channel),specularIntensityMapUv:D&&f(_.specularIntensityMap.channel),transmissionMapUv:Q&&f(_.transmissionMap.channel),thicknessMapUv:Y&&f(_.thicknessMap.channel),alphaMapUv:ae&&f(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Mt||Sn),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!L.attributes.uv&&(Pe||ae),fog:!!B,useFog:_.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&Mt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ve,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Me,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:N.filter(me=>me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:re,decodeVideoTexture:Pe&&_.map.isVideoTexture===!0&&Qe.getTransfer(_.map.colorSpace)===dt,decodeVideoTextureEmissive:Ft&&_.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(_.emissiveMap.colorSpace)===dt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===qn,flipSided:_.side===dn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:He&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&_.extensions.multiDraw===!0||Tt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function x(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)S.push(P),S.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(g(S,_),m(S,_),S.push(n.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function g(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function m(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function p(_){const S=h[_.type];let P;if(S){const C=Wn[S];P=cm.clone(C.uniforms)}else P=_.uniforms;return P}function E(_,S){let P=d.get(S);return P!==void 0?++P.usedTimes:(P=new Uv(n,S,_,s),c.push(P),d.set(S,P)),P}function M(_){if(--_.usedTimes===0){const S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function T(){o.dispose()}return{getParameters:v,getProgramCacheKey:x,getUniforms:p,acquireProgram:E,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:T}}function Gv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Hv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function du(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function uu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,v,x,g,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:v,materialVariant:a(h),groupOrder:x,renderOrder:h.renderOrder,z:g,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=v,p.materialVariant=a(h),p.groupOrder=x,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function l(h,f,v,x,g,m,p){p.reversedDepth===!0&&(g=-g);const E=o(h,f,v,x,g,m);v.transmission>0?i.push(E):v.transparent===!0?s.push(E):t.push(E)}function c(h,f,v,x,g,m){const p=o(h,f,v,x,g,m);v.transmission>0?i.unshift(p):v.transparent===!0?s.unshift(p):t.unshift(p)}function d(h,f){t.length>1&&t.sort(h||Hv),i.length>1&&i.sort(f||du),s.length>1&&s.sort(f||du)}function u(){for(let h=e,f=n.length;h<f;h++){const v=n[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:d}}function Vv(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new uu,n.set(i,[a])):s>=r.length?(a=new uu,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Wv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new Ge};break;case"SpotLight":t={position:new O,direction:new O,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function $v(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Xv=0;function qv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Yv(n){const e=new Wv,t=$v(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const s=new O,r=new vt,a=new vt;function o(c){let d=0,u=0,h=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let f=0,v=0,x=0,g=0,m=0,p=0,E=0,M=0,w=0,T=0,_=0,S=0,P=0,C=0;c.sort(qv);for(let N=0,B=c.length;N<B;N++){const L=c[N],G=L.color,X=L.intensity,F=L.distance;let ne=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===hs?ne=L.shadow.map.texture:ne=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=G.r*X,u+=G.g*X,h+=G.b*X;else if(L.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(L.sh.coefficients[q],X);C++}else if(L.isSunLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,te=t.get(L);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[v]=te,i.sunShadowMap[v]=ne;const Me=j.getViewportCount();for(let Fe=0;Fe<Me;Fe++)i.sunShadowMatrix[x+Fe]=j.getMatrix(Fe),i.sunShadowCascade[x+Fe]=j._cascadeData[Fe];x+=Me,v++}i.sun[f]=q,f++}else if(L.isDirectionalLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,te=t.get(L);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,i.directionalShadow[g]=te,i.directionalShadowMap[g]=ne,i.directionalShadowMatrix[g]=L.shadow.matrix,w++}i.directional[g]=q,g++}else if(L.isSpotLight){const q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(G).multiplyScalar(X),q.distance=F,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,i.spot[p]=q;const j=L.shadow;if(L.map&&(i.spotLightMap[S]=L.map,S++,j.updateMatrices(L),L.castShadow&&P++),i.spotLightMatrix[p]=j.matrix,L.castShadow){const te=t.get(L);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,i.spotShadow[p]=te,i.spotShadowMap[p]=ne,_++}p++}else if(L.isRectAreaLight){const q=e.get(L);q.color.copy(G).multiplyScalar(X),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),i.rectArea[E]=q,E++}else if(L.isPointLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const j=L.shadow,te=t.get(L);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,te.shadowCameraNear=j.camera.near,te.shadowCameraFar=j.camera.far,i.pointShadow[m]=te,i.pointShadowMap[m]=ne,i.pointShadowMatrix[m]=L.shadow.matrix,T++}i.point[m]=q,m++}else if(L.isHemisphereLight){const q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(X),q.groundColor.copy(L.groundColor).multiplyScalar(X),i.hemi[M]=q,M++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=h;const R=i.hash;(R.sunLength!==f||R.directionalLength!==g||R.pointLength!==m||R.spotLength!==p||R.rectAreaLength!==E||R.hemiLength!==M||R.numSunShadows!==v||R.numDirectionalShadows!==w||R.numPointShadows!==T||R.numSpotShadows!==_||R.numSpotMaps!==S||R.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=g,i.spot.length=p,i.rectArea.length=E,i.point.length=m,i.hemi.length=M,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+S-P,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=C,R.sunLength=f,R.directionalLength=g,R.pointLength=m,R.spotLength=p,R.rectAreaLength=E,R.hemiLength=M,R.numSunShadows=v,R.numDirectionalShadows=w,R.numPointShadows=T,R.numSpotShadows=_,R.numSpotMaps=S,R.numLightProbes=C,i.version=Xv++)}function l(c,d){let u=0,h=0,f=0,v=0,x=0,g=0;const m=d.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const M=c[p];if(M.isSunLight){const w=i.sun[u];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),u++}else if(M.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),h++}else if(M.isSpotLight){const w=i.spot[v];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),v++}else if(M.isRectAreaLight){const w=i.rectArea[x];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const w=i.hemi[g];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function fu(n){const e=new Yv(n),t=[],i=[],s=[];function r(u){d.camera=u,t.length=0,i.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){i.push(u)}function l(){e.setup(t),s.sort((u,h)=>u.priority-h.priority||u.id-h.id)}function c(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Kv(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new fu(n),e.set(s,[o])):r>=a.length?(o=new fu(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Zv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jv=`uniform sampler2D shadow_pass;
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
}`,Qv=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],jv=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],hu=new vt,ur=new O,$o=new O;function ex(n,e,t){let i=new Ur;const s=new We,r=new We,a=new yt,o=new hm,l=new pm,c={},d=t.maxTextureSize,u={[fs]:dn,[dn]:fs,[qn]:qn},h=new ps({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Zv,fragmentShader:Jv}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const v=new Yt;v.setAttribute("position",new ls(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Gt(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ea;let m=this.type;this.render=function(T,_,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Qh&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ea);const P=n.getRenderTarget(),C=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),N=n.state;N.setBlending(zs),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=m!==this.type;B&&_.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(G=>G.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,G=T.length;L<G;L++){const X=T[L],F=X.shadow;if(F===void 0){Le("WebGLShadowMap:",X,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const ne=F.getFrameExtents();s.multiply(ne),r.copy(F.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ne.x),s.x=r.x*ne.x,F.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ne.y),s.y=r.y*ne.y,F.mapSize.y=r.y));const q=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=q,F.map===null||B===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===mr){if(X.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Zn(s.x,s.y,{format:hs,type:ni,minFilter:cn,magFilter:cn,generateMipmaps:!1}),F.map.texture.name=X.name+".shadowMap",F.map.depthTexture=new Ks(s.x,s.y,Yn),F.map.depthTexture.name=X.name+".shadowMapDepth",F.map.depthTexture.format=Wi,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Xt,F.map.depthTexture.magFilter=Xt}else X.isPointLight?(F.map=new Ic(s.x),F.map.depthTexture=new Mf(s.x,ti)):(F.map=new Zn(s.x,s.y),F.map.depthTexture=new Ks(s.x,s.y,ti)),F.map.depthTexture.name=X.name+".shadowMap",F.map.depthTexture.format=Wi,this.type===Ea?(F.map.depthTexture.compareFunction=q?uf:df,F.map.depthTexture.minFilter=cn,F.map.depthTexture.magFilter=cn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Xt,F.map.depthTexture.magFilter=Xt);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);const j=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();X.isPointLight!==!0&&F.updateMatrices(X,S);const te=F.camera.layers.mask&4294967294?F.camera.layers:S.layers;for(let Me=0;Me<j;Me++){const Fe=F.getCamera(Me);if(X.isPointLight){const J=F.camera,_e=F.matrix,be=X.distance||J.far;be!==J.far&&(J.far=be,J.updateProjectionMatrix()),ur.setFromMatrixPosition(X.matrixWorld),J.position.copy(ur),$o.copy(J.position),$o.add(Qv[Me]),J.up.copy(jv[Me]),J.lookAt($o),J.updateMatrixWorld(),_e.makeTranslation(-ur.x,-ur.y,-ur.z),hu.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),F._frustum.setFromProjectionMatrix(hu,J.coordinateSystem,J.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,Me),n.clear();else{Me===0&&(n.setRenderTarget(F.map),n.clear());const J=F.getViewport(Me);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),N.viewport(a)}i=F.getFrustum(Me),M(_,S,Fe,X,te,this.type)}F.isPointLightShadow!==!0&&this.type===mr&&p(F,S),F.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(P,C,R)};function p(T,_){const S=e.update(x);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Zn(s.x,s.y,{format:hs,type:ni}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(_,null,S,h,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(_,null,S,f,x,null)}function E(T,_,S,P){let C=null;const R=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)C=R;else if(C=S.isPointLight===!0?l:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const N=C.uuid,B=_.uuid;let L=c[N];L===void 0&&(L={},c[N]=L);let G=L[B];G===void 0&&(G=C.clone(),L[B]=G,_.addEventListener("dispose",w)),C=G}if(C.visible=_.visible,C.wireframe=_.wireframe,P===mr?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:u[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const N=n.properties.get(C);N.light=S}return C}function M(T,_,S,P,C,R){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===mr)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);const L=e.update(T),G=T.material;if(Array.isArray(G)){const X=L.groups;for(let F=0,ne=X.length;F<ne;F++){const q=X[F],j=G[q.materialIndex];if(j&&j.visible){const te=E(T,j,P,R);T.onBeforeShadow(n,T,_,S,L,te,q),n.renderBufferDirect(S,null,L,te,T,q),T.onAfterShadow(n,T,_,S,L,te,q)}}}else if(G.visible){const X=E(T,G,P,R);T.onBeforeShadow(n,T,_,S,L,X,null),n.renderBufferDirect(S,null,L,X,T,null),T.onAfterShadow(n,T,_,S,L,X,null)}}const B=T.children;for(let L=0,G=B.length;L<G;L++)M(B[L],_,S,P,C,R)}function w(T){T.target.removeEventListener("dispose",w);for(const S in c){const P=c[S],C=T.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}function tx(n,e){function t(){let D=!1;const Q=new yt;let Y=null;const de=new yt(0,0,0,0);return{setMask:function(ae){Y!==ae&&!D&&(n.colorMask(ae,ae,ae,ae),Y=ae)},setLocked:function(ae){D=ae},setClear:function(ae,le,we,He,re){re===!0&&(ae*=He,le*=He,we*=He),Q.set(ae,le,we,He),de.equals(Q)===!1&&(n.clearColor(ae,le,we,He),de.copy(Q))},reset:function(){D=!1,Y=null,de.set(-1,0,0,0)}}}function i(){let D=!1,Q=!1,Y=null,de=null,ae=null;return{setReversed:function(le){if(Q!==le){const we=e.get("EXT_clip_control");le?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),Q=le;const He=ae;ae=null,this.setClear(He)}},getReversed:function(){return Q},setTest:function(le){le?ve(n.DEPTH_TEST):Be(n.DEPTH_TEST)},setMask:function(le){Y!==le&&!D&&(n.depthMask(le),Y=le)},setFunc:function(le){if(Q&&(le=Dp[le]),de!==le){switch(le){case jo:n.depthFunc(n.NEVER);break;case el:n.depthFunc(n.ALWAYS);break;case tl:n.depthFunc(n.LESS);break;case Lr:n.depthFunc(n.LEQUAL);break;case nl:n.depthFunc(n.EQUAL);break;case il:n.depthFunc(n.GEQUAL);break;case sl:n.depthFunc(n.GREATER);break;case rl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=le}},setLocked:function(le){D=le},setClear:function(le){ae!==le&&(ae=le,Q&&(le=1-le),n.clearDepth(le))},reset:function(){D=!1,Y=null,de=null,ae=null,Q=!1}}}function s(){let D=!1,Q=null,Y=null,de=null,ae=null,le=null,we=null,He=null,re=null;return{setTest:function(Ae){D||(Ae?ve(n.STENCIL_TEST):Be(n.STENCIL_TEST))},setMask:function(Ae){Q!==Ae&&!D&&(n.stencilMask(Ae),Q=Ae)},setFunc:function(Ae,ze,me){(Y!==Ae||de!==ze||ae!==me)&&(n.stencilFunc(Ae,ze,me),Y=Ae,de=ze,ae=me)},setOp:function(Ae,ze,me){(le!==Ae||we!==ze||He!==me)&&(n.stencilOp(Ae,ze,me),le=Ae,we=ze,He=me)},setLocked:function(Ae){D=Ae},setClear:function(Ae){re!==Ae&&(n.clearStencil(Ae),re=Ae)},reset:function(){D=!1,Q=null,Y=null,de=null,ae=null,le=null,we=null,He=null,re=null}}}const r=new t,a=new i,o=new s;let l={};const c=new WeakMap;let d={},u={},h={},f=new WeakMap,v=[],x=null,g=!1,m=null,p=null,E=null,M=null,w=null,T=null,_=null,S=new Ge(0,0,0),P=0,C=!1,R=null,N=null,B=null,L=null,G=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,ne=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(q)[1]),F=ne>=1):q.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),F=ne>=2);let j=null,te={};const Me=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),J=new yt().fromArray(Me),_e=new yt().fromArray(Fe);function be(D,Q,Y,de){const ae=new Uint8Array(4),le=n.createTexture();n.bindTexture(D,le),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<Y;we++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(Q+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return le}const Re={};Re[n.TEXTURE_2D]=be(n.TEXTURE_2D,n.TEXTURE_2D,1),Re[n.TEXTURE_CUBE_MAP]=be(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[n.TEXTURE_2D_ARRAY]=be(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Re[n.TEXTURE_3D]=be(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ve(n.DEPTH_TEST),a.setFunc(Lr),on(!1),Mt(hd),ve(n.CULL_FACE),Ht(zs);function ve(D){d[D]!==!0&&(n.enable(D),d[D]=!0)}function Be(D){d[D]!==!1&&(n.disable(D),d[D]=!1)}function Tt(D,Q){return h[D]!==Q?(n.bindFramebuffer(D,Q),h[D]=Q,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Q),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function Pe(D,Q){let Y=v,de=!1;if(D){Y=f.get(Q),Y===void 0&&(Y=[],f.set(Q,Y));const ae=D.textures;if(Y.length!==ae.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let le=0,we=ae.length;le<we;le++)Y[le]=n.COLOR_ATTACHMENT0+le;Y.length=ae.length,de=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,de=!0);de&&n.drawBuffers(Y)}function lt(D){return x!==D?(n.useProgram(D),x=D,!0):!1}const pt={[Ls]:n.FUNC_ADD,[ep]:n.FUNC_SUBTRACT,[tp]:n.FUNC_REVERSE_SUBTRACT};pt[np]=n.MIN,pt[ip]=n.MAX;const Ye={[sp]:n.ZERO,[rp]:n.ONE,[ap]:n.SRC_COLOR,[Xu]:n.SRC_ALPHA,[fp]:n.SRC_ALPHA_SATURATE,[dp]:n.DST_COLOR,[lp]:n.DST_ALPHA,[op]:n.ONE_MINUS_SRC_COLOR,[qu]:n.ONE_MINUS_SRC_ALPHA,[up]:n.ONE_MINUS_DST_COLOR,[cp]:n.ONE_MINUS_DST_ALPHA,[hp]:n.CONSTANT_COLOR,[pp]:n.ONE_MINUS_CONSTANT_COLOR,[mp]:n.CONSTANT_ALPHA,[gp]:n.ONE_MINUS_CONSTANT_ALPHA};function Ht(D,Q,Y,de,ae,le,we,He,re,Ae){if(D===zs){g===!0&&(Be(n.BLEND),g=!1);return}if(g===!1&&(ve(n.BLEND),g=!0),D!==jh){if(D!==m||Ae!==C){if((p!==Ls||w!==Ls)&&(n.blendEquation(n.FUNC_ADD),p=Ls,w=Ls),Ae)switch(D){case br:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pd:n.blendFunc(n.ONE,n.ONE);break;case md:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:rt("WebGLState: Invalid blending: ",D);break}else switch(D){case br:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pd:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case md:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gd:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",D);break}E=null,M=null,T=null,_=null,S.set(0,0,0),P=0,m=D,C=Ae}return}ae=ae||Q,le=le||Y,we=we||de,(Q!==p||ae!==w)&&(n.blendEquationSeparate(pt[Q],pt[ae]),p=Q,w=ae),(Y!==E||de!==M||le!==T||we!==_)&&(n.blendFuncSeparate(Ye[Y],Ye[de],Ye[le],Ye[we]),E=Y,M=de,T=le,_=we),(He.equals(S)===!1||re!==P)&&(n.blendColor(He.r,He.g,He.b,re),S.copy(He),P=re),m=D,C=!1}function Ct(D,Q){D.side===qn?Be(n.CULL_FACE):ve(n.CULL_FACE);let Y=D.side===dn;Q&&(Y=!Y),on(Y),D.blending===br&&D.transparent===!1?Ht(zs):Ht(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const de=D.stencilWrite;o.setTest(de),de&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ft(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Be(n.SAMPLE_ALPHA_TO_COVERAGE)}function on(D){R!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),R=D)}function Mt(D){D!==Zh?(ve(n.CULL_FACE),D!==N&&(D===hd?n.cullFace(n.BACK):D===Jh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Be(n.CULL_FACE),N=D}function kn(D){D!==B&&(F&&n.lineWidth(D),B=D)}function Ft(D,Q,Y){D?(ve(n.POLYGON_OFFSET_FILL),(L!==Q||G!==Y)&&(L=Q,G=Y,a.getReversed()&&(Q=-Q,Y=-Y),n.polygonOffset(Q,Y))):Be(n.POLYGON_OFFSET_FILL)}function vn(D){D?ve(n.SCISSOR_TEST):Be(n.SCISSOR_TEST)}function xn(D){D===void 0&&(D=n.TEXTURE0+X-1),j!==D&&(n.activeTexture(D),j=D)}function Sn(D,Q,Y){Y===void 0&&(j===null?Y=n.TEXTURE0+X-1:Y=j);let de=te[Y];de===void 0&&(de={type:void 0,texture:void 0},te[Y]=de),(de.type!==D||de.texture!==Q)&&(j!==Y&&(n.activeTexture(Y),j=Y),n.bindTexture(D,Q||Re[D]),de.type=D,de.texture=Q)}function U(){const D=te[j];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Mn(){try{n.compressedTexImage2D(...arguments)}catch(D){rt("WebGLState:",D)}}function xt(){try{n.compressedTexImage3D(...arguments)}catch(D){rt("WebGLState:",D)}}function St(){try{n.texSubImage2D(...arguments)}catch(D){rt("WebGLState:",D)}}function pe(){try{n.texSubImage3D(...arguments)}catch(D){rt("WebGLState:",D)}}function Pt(){try{n.compressedTexSubImage2D(...arguments)}catch(D){rt("WebGLState:",D)}}function Ce(){try{n.compressedTexSubImage3D(...arguments)}catch(D){rt("WebGLState:",D)}}function De(){try{n.texStorage2D(...arguments)}catch(D){rt("WebGLState:",D)}}function A(){try{n.texStorage3D(...arguments)}catch(D){rt("WebGLState:",D)}}function b(){try{n.texImage2D(...arguments)}catch(D){rt("WebGLState:",D)}}function H(){try{n.texImage3D(...arguments)}catch(D){rt("WebGLState:",D)}}function ie(D){return u[D]!==void 0?u[D]:n.getParameter(D)}function ee(D,Q){u[D]!==Q&&(n.pixelStorei(D,Q),u[D]=Q)}function oe(D){J.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),J.copy(D))}function fe(D){_e.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),_e.copy(D))}function K(D,Q){let Y=c.get(Q);Y===void 0&&(Y=new WeakMap,c.set(Q,Y));let de=Y.get(D);de===void 0&&(de=n.getUniformBlockIndex(Q,D.name),n.uniformBlockBinding(Q,de,de),Y.set(D,de))}function Z(D,Q,Y){const ae=c.get(Q).get(D);l[ae]!==Y&&(n.bindBufferBase(n.UNIFORM_BUFFER,ae,Y),l[ae]=Y)}function ce(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},u={},j=null,te={},h={},l={},f=new WeakMap,v=[],x=null,g=!1,m=null,p=null,E=null,M=null,w=null,T=null,_=null,S=new Ge(0,0,0),P=0,C=!1,R=null,N=null,B=null,L=null,G=null,J.set(0,0,n.canvas.width,n.canvas.height),_e.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ve,disable:Be,bindFramebuffer:Tt,drawBuffers:Pe,useProgram:lt,setBlending:Ht,setMaterial:Ct,setFlipSided:on,setCullFace:Mt,setLineWidth:kn,setPolygonOffset:Ft,setScissorTest:vn,activeTexture:xn,bindTexture:Sn,unbindTexture:U,compressedTexImage2D:Mn,compressedTexImage3D:xt,texImage2D:b,texImage3D:H,pixelStorei:ee,getParameter:ie,updateUBOMapping:K,uniformBlockBinding:Z,texStorage2D:De,texStorage3D:A,texSubImage2D:St,texSubImage3D:pe,compressedTexSubImage2D:Pt,compressedTexSubImage3D:Ce,scissor:oe,viewport:fe,reset:ce}}function nx(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,d=new WeakMap,u=new Set;let h;const f=new WeakMap,v=new Set,x=new FinalizationRegistry(A=>v.delete(A));let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,b){return g?new OffscreenCanvas(A,b):Oa("canvas")}function p(A,b,H){let ie=1;const ee=De(A);if((ee.width>H||ee.height>H)&&(ie=H/Math.max(ee.width,ee.height)),ie<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const oe=Math.floor(ie*ee.width),fe=Math.floor(ie*ee.height);h===void 0&&(h=m(oe,fe));const K=b?m(oe,fe):h;return K.width=oe,K.height=fe,K.getContext("2d").drawImage(A,0,0,oe,fe),Le("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+oe+"x"+fe+")."),K}else return"data"in A&&Le("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function E(A){return A.generateMipmaps}function M(A){n.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(A,b,H,ie,ee,oe=!1){if(A!==null){if(n[A]!==void 0)return n[A];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let fe;ie&&(fe=e.get("EXT_texture_norm16"),fe||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=b;if(b===n.RED&&(H===n.FLOAT&&(K=n.R32F),H===n.HALF_FLOAT&&(K=n.R16F),H===n.UNSIGNED_BYTE&&(K=n.R8),H===n.UNSIGNED_SHORT&&fe&&(K=fe.R16_EXT),H===n.SHORT&&fe&&(K=fe.R16_SNORM_EXT)),b===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.R8UI),H===n.UNSIGNED_SHORT&&(K=n.R16UI),H===n.UNSIGNED_INT&&(K=n.R32UI),H===n.BYTE&&(K=n.R8I),H===n.SHORT&&(K=n.R16I),H===n.INT&&(K=n.R32I)),b===n.RG&&(H===n.FLOAT&&(K=n.RG32F),H===n.HALF_FLOAT&&(K=n.RG16F),H===n.UNSIGNED_BYTE&&(K=n.RG8),H===n.UNSIGNED_SHORT&&fe&&(K=fe.RG16_EXT),H===n.SHORT&&fe&&(K=fe.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RG8UI),H===n.UNSIGNED_SHORT&&(K=n.RG16UI),H===n.UNSIGNED_INT&&(K=n.RG32UI),H===n.BYTE&&(K=n.RG8I),H===n.SHORT&&(K=n.RG16I),H===n.INT&&(K=n.RG32I)),b===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RGB8UI),H===n.UNSIGNED_SHORT&&(K=n.RGB16UI),H===n.UNSIGNED_INT&&(K=n.RGB32UI),H===n.BYTE&&(K=n.RGB8I),H===n.SHORT&&(K=n.RGB16I),H===n.INT&&(K=n.RGB32I)),b===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),H===n.UNSIGNED_INT&&(K=n.RGBA32UI),H===n.BYTE&&(K=n.RGBA8I),H===n.SHORT&&(K=n.RGBA16I),H===n.INT&&(K=n.RGBA32I)),b===n.RGB&&(H===n.UNSIGNED_SHORT&&fe&&(K=fe.RGB16_EXT),H===n.SHORT&&fe&&(K=fe.RGB16_SNORM_EXT),H===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),b===n.RGBA){const Z=oe?Fa:Qe.getTransfer(ee);H===n.FLOAT&&(K=n.RGBA32F),H===n.HALF_FLOAT&&(K=n.RGBA16F),H===n.UNSIGNED_BYTE&&(K=Z===dt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT&&fe&&(K=fe.RGBA16_EXT),H===n.SHORT&&fe&&(K=fe.RGBA16_SNORM_EXT),H===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function _(A,b){let H;return A?b===null||b===ti||b===Ys?H=n.DEPTH24_STENCIL8:b===Yn?H=n.DEPTH32F_STENCIL8:b===Ir&&(H=n.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ti||b===Ys?H=n.DEPTH_COMPONENT24:b===Yn?H=n.DEPTH_COMPONENT32F:b===Ir&&(H=n.DEPTH_COMPONENT16),H}function S(A,b){return E(A)===!0||A.isFramebufferTexture&&A.minFilter!==Xt&&A.minFilter!==cn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function P(A){const b=new WeakRef(A);i.get(A).__ref=b,v.add(b),x.register(A,b,b)}function C(A){const b=i.get(A).__ref;b!==void 0&&(v.delete(b),x.unregister(b))}function R(A){B(A.target)}function N(A){L(A.target)}function B(A){A.removeEventListener("dispose",R),C(A),X(A),A.isVideoTexture&&d.delete(A),A.isHTMLTexture&&u.delete(A)}function L(A){A.removeEventListener("dispose",N),C(A),ne(A)}function G(){for(const A of v){const b=A.deref();b!==void 0&&(b.isRenderTarget===!0?L(b):B(b))}v.clear(),u.clear()}function X(A){const b=i.get(A);if(b.__webglInit===void 0)return;const H=A.source,ie=f.get(H);if(ie){const ee=ie[b.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&F(A),Object.keys(ie).length===0&&f.delete(H)}i.remove(A)}function F(A){const b=i.get(A);n.deleteTexture(b.__webglTexture);const H=A.source,ie=f.get(H);delete ie[b.__cacheKey],a.memory.textures--}function ne(A){const b=i.get(A);b.__depthDisposeCallback&&b.__depthDisposeCallback();const H=A.depthTexture;if(H&&H.renderTarget===A&&B(H),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(b.__webglFramebuffer[ee]))for(let oe=0;oe<b.__webglFramebuffer[ee].length;oe++)n.deleteFramebuffer(b.__webglFramebuffer[ee][oe]);else n.deleteFramebuffer(b.__webglFramebuffer[ee]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[ee])}else{if(Array.isArray(b.__webglFramebuffer))for(let ee=0;ee<b.__webglFramebuffer.length;ee++)n.deleteFramebuffer(b.__webglFramebuffer[ee]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ee=0;ee<b.__webglColorRenderbuffer.length;ee++)b.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[ee]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ie=A.textures;for(let ee=0,oe=ie.length;ee<oe;ee++){const fe=i.get(ie[ee]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),a.memory.textures--),i.remove(ie[ee])}i.remove(A)}let q=0;function j(){q=0}function te(){return q}function Me(A){q=A}function Fe(){const A=q;return A>=s.maxTextures&&Le("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,A}function J(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.mipmapsAutoUpdate),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function _e(A,b){const H=i.get(A);if(A.isVideoTexture&&Pt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&H.__version!==A.version){const ie=A.image;if(ie===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(H,A,b);return}}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+b)}function be(A,b){const H=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){Ct(H,A,b);return}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+b)}function Re(A,b){const H=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){Ct(H,A,b);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+b)}function ve(A,b){const H=i.get(A);if(A.version>0&&H.__version!==A.version){on(H,A,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+b)}const Be={[al]:n.REPEAT,[hi]:n.CLAMP_TO_EDGE,[ol]:n.MIRRORED_REPEAT},Tt={[Xt]:n.NEAREST,[xp]:n.NEAREST_MIPMAP_NEAREST,[qr]:n.NEAREST_MIPMAP_LINEAR,[cn]:n.LINEAR,[vo]:n.LINEAR_MIPMAP_NEAREST,[Fi]:n.LINEAR_MIPMAP_LINEAR},Pe={[yp]:n.NEVER,[ff]:n.ALWAYS,[Ep]:n.LESS,[df]:n.LEQUAL,[Tp]:n.EQUAL,[uf]:n.GEQUAL,[wp]:n.GREATER,[Ap]:n.NOTEQUAL};function lt(A,b){if(b.type===Yn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===cn||b.magFilter===vo||b.magFilter===qr||b.magFilter===Fi||b.minFilter===cn||b.minFilter===vo||b.minFilter===qr||b.minFilter===Fi)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Be[b.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Be[b.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Be[b.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Tt[b.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Tt[b.minFilter]),b.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Pe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Xt||b.minFilter!==qr&&b.minFilter!==Fi||b.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function pt(A,b){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",R),P(b));const ie=b.source;let ee=f.get(ie);ee===void 0&&(ee={},f.set(ie,ee));const oe=J(b);if(oe!==A.__cacheKey){ee[oe]===void 0&&(ee[oe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ee[oe].usedTimes++;const fe=ee[A.__cacheKey];fe!==void 0&&(ee[A.__cacheKey].usedTimes--,fe.usedTimes===0&&F(b)),A.__cacheKey=oe,A.__webglTexture=ee[oe].texture}return H}function Ye(A,b,H){return Math.floor(Math.floor(A/H)/b)}function Ht(A,b,H,ie){const oe=A.updateRanges;if(oe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,H,ie,b.data);else{oe.sort((D,Q)=>D.start-Q.start);let fe=0;for(let D=1;D<oe.length;D++){const Q=oe[fe],Y=oe[D],de=Q.start+Q.count,ae=Ye(Y.start,b.width,4),le=Ye(Q.start,b.width,4);Y.start<=de+1&&ae===le&&Ye(Y.start+Y.count-1,b.width,4)===ae?Q.count=Math.max(Q.count,Y.start+Y.count-Q.start):(++fe,oe[fe]=Y)}oe.length=fe+1;const K=t.getParameter(n.UNPACK_ROW_LENGTH),Z=t.getParameter(n.UNPACK_SKIP_PIXELS),ce=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let D=0,Q=oe.length;D<Q;D++){const Y=oe[D],de=Math.floor(Y.start/4),ae=Math.ceil(Y.count/4),le=de%b.width,we=Math.floor(de/b.width),He=ae,re=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,le),t.pixelStorei(n.UNPACK_SKIP_ROWS,we),t.texSubImage2D(n.TEXTURE_2D,0,le,we,He,re,H,ie,b.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,K),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(n.UNPACK_SKIP_ROWS,ce)}}function Ct(A,b,H){let ie=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ie=n.TEXTURE_3D);const ee=pt(A,b),oe=b.source;t.bindTexture(ie,A.__webglTexture,n.TEXTURE0+H);const fe=i.get(oe);if(oe.version!==fe.__version||ee===!0){if(t.activeTexture(n.TEXTURE0+H),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const re=Qe.getPrimaries(Qe.workingColorSpace),Ae=b.colorSpace===Di?null:Qe.getPrimaries(b.colorSpace),ze=b.colorSpace===Di||re===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let Z=p(b.image,!1,s.maxTextureSize);Z=Ce(b,Z);const ce=r.convert(b.format,b.colorSpace),D=r.convert(b.type);let Q=T(b.internalFormat,ce,D,b.normalized,b.colorSpace,b.isVideoTexture);lt(ie,b);let Y;const de=b.mipmaps,ae=b.isVideoTexture!==!0,le=fe.__version===void 0||ee===!0,we=oe.dataReady,He=S(b,Z);if(b.isDepthTexture)Q=_(b.format===Oi,b.type),le&&(ae?t.texStorage2D(n.TEXTURE_2D,1,Q,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,Q,Z.width,Z.height,0,ce,D,null));else if(b.isDataTexture)if(de.length>0){ae&&le&&t.texStorage2D(n.TEXTURE_2D,He,Q,de[0].width,de[0].height);for(let re=0,Ae=de.length;re<Ae;re++)Y=de[re],ae?we&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,Y.width,Y.height,ce,D,Y.data):t.texImage2D(n.TEXTURE_2D,re,Q,Y.width,Y.height,0,ce,D,Y.data);b.generateMipmaps=!1}else ae?(le&&t.texStorage2D(n.TEXTURE_2D,He,Q,Z.width,Z.height),we&&Ht(b,Z,ce,D)):t.texImage2D(n.TEXTURE_2D,0,Q,Z.width,Z.height,0,ce,D,Z.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ae&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,He,Q,de[0].width,de[0].height,Z.depth);for(let re=0,Ae=de.length;re<Ae;re++)if(Y=de[re],b.format!==Kn)if(ce!==null)if(ae){if(we)if(b.layerUpdates.size>0){const ze=Xd(Y.width,Y.height,b.format,b.type);for(const me of b.layerUpdates){const ct=Y.data.subarray(me*ze/Y.data.BYTES_PER_ELEMENT,(me+1)*ze/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,me,Y.width,Y.height,1,ce,ct)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,Y.width,Y.height,Z.depth,ce,Y.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Q,Y.width,Y.height,Z.depth,0,Y.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?we&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,Y.width,Y.height,Z.depth,ce,D,Y.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Q,Y.width,Y.height,Z.depth,0,ce,D,Y.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ae&&le&&t.texStorage2D(n.TEXTURE_2D,He,Q,de[0].width,de[0].height);for(let re=0,Ae=de.length;re<Ae;re++)Y=de[re],b.format!==Kn?ce!==null?ae?we&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,Y.width,Y.height,ce,Y.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Q,Y.width,Y.height,0,Y.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?we&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,Y.width,Y.height,ce,D,Y.data):t.texImage2D(n.TEXTURE_2D,re,Q,Y.width,Y.height,0,ce,D,Y.data)}else if(b.isDataArrayTexture)if(ae){if(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,He,Q,Z.width,Z.height,Z.depth),we)if(b.layerUpdates.size>0){const re=Xd(Z.width,Z.height,b.format,b.type);for(const Ae of b.layerUpdates){const ze=Z.data.subarray(Ae*re/Z.data.BYTES_PER_ELEMENT,(Ae+1)*re/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ae,Z.width,Z.height,1,ce,D,ze)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ce,D,Z.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Q,Z.width,Z.height,Z.depth,0,ce,D,Z.data);else if(b.isData3DTexture)ae?(le&&t.texStorage3D(n.TEXTURE_3D,He,Q,Z.width,Z.height,Z.depth),we&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ce,D,Z.data)):t.texImage3D(n.TEXTURE_3D,0,Q,Z.width,Z.height,Z.depth,0,ce,D,Z.data);else if(b.isFramebufferTexture){if(le)if(ae)t.texStorage2D(n.TEXTURE_2D,He,Q,Z.width,Z.height);else{let re=Z.width,Ae=Z.height;for(let ze=0;ze<He;ze++)t.texImage2D(n.TEXTURE_2D,ze,Q,re,Ae,0,ce,D,null),re>>=1,Ae>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){const re=n.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),Z.parentNode!==re){re.appendChild(Z),u.add(b),re.onpaint=Ae=>{const ze=Ae.changedElements;for(const me of u)ze.includes(me.image)&&(me.needsUpdate=!0)},re.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Z);else{const ze=n.RGBA,me=n.RGBA,ct=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ze,me,ct,Z)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(de.length>0){if(ae&&le){const re=De(de[0]);t.texStorage2D(n.TEXTURE_2D,He,Q,re.width,re.height)}for(let re=0,Ae=de.length;re<Ae;re++)Y=de[re],ae?we&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ce,D,Y):t.texImage2D(n.TEXTURE_2D,re,Q,ce,D,Y);b.generateMipmaps=!1}else if(ae){if(le){const re=De(Z);t.texStorage2D(n.TEXTURE_2D,He,Q,re.width,re.height)}we&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,D,Z)}else t.texImage2D(n.TEXTURE_2D,0,Q,ce,D,Z);E(b)&&b.mipmapsAutoUpdate===!0&&M(ie),fe.__version=oe.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function on(A,b,H){if(b.image.length!==6)return;const ie=pt(A,b),ee=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+H);const oe=i.get(ee);if(ee.version!==oe.__version||ie===!0){t.activeTexture(n.TEXTURE0+H);const fe=Qe.getPrimaries(Qe.workingColorSpace),K=b.colorSpace===Di?null:Qe.getPrimaries(b.colorSpace),Z=b.colorSpace===Di||fe===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const ce=b.isCompressedTexture||b.image[0].isCompressedTexture,D=b.image[0]&&b.image[0].isDataTexture,Q=[];for(let me=0;me<6;me++)!ce&&!D?Q[me]=p(b.image[me],!0,s.maxCubemapSize):Q[me]=D?b.image[me].image:b.image[me],Q[me]=Ce(b,Q[me]);const Y=Q[0],de=r.convert(b.format,b.colorSpace),ae=r.convert(b.type);let le=T(b.internalFormat,de,ae,b.normalized,b.colorSpace);const we=b.isVideoTexture!==!0,He=oe.__version===void 0||ie===!0,re=ee.dataReady;let Ae=S(b,Y);lt(n.TEXTURE_CUBE_MAP,b);let ze;if(b.isDepthTexture){if(le=_(b.format===Oi,b.type),He)if(we)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,le,Y.width,Y.height);else for(let me=0;me<6;me++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,le,Y.width,Y.height,0,de,ae,null)}else if(ce){we&&He&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,le,Y.width,Y.height);for(let me=0;me<6;me++){ze=Q[me].mipmaps;for(let ct=0;ct<ze.length;ct++){const Ot=ze[ct];b.format!==Kn?de!==null?we?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ct,0,0,Ot.width,Ot.height,de,Ot.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ct,le,Ot.width,Ot.height,0,Ot.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ct,0,0,Ot.width,Ot.height,de,ae,Ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ct,le,Ot.width,Ot.height,0,de,ae,Ot.data)}}}else{if(ze=b.mipmaps,we&&He){ze.length>0&&Ae++;const me=De(Q[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,le,me.width,me.height)}for(let me=0;me<6;me++)if(D){we?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Q[me].width,Q[me].height,de,ae,Q[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,le,Q[me].width,Q[me].height,0,de,ae,Q[me].data);for(let ct=0;ct<ze.length;ct++){const Mi=ze[ct].image[me].image;we?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ct+1,0,0,Mi.width,Mi.height,de,ae,Mi.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ct+1,le,Mi.width,Mi.height,0,de,ae,Mi.data)}}else{we?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,de,ae,Q[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,le,de,ae,Q[me]);for(let ct=0;ct<ze.length;ct++){const Ot=ze[ct];we?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ct+1,0,0,de,ae,Ot.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,ct+1,le,de,ae,Ot.image[me])}}}E(b)&&b.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),oe.__version=ee.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Mt(A,b,H,ie,ee,oe){const fe=r.convert(H.format,H.colorSpace),K=r.convert(H.type),Z=T(H.internalFormat,fe,K,H.normalized,H.colorSpace),ce=i.get(b),D=i.get(H);if(D.__renderTarget=b,!ce.__hasExternalTextures){const Q=Math.max(1,b.width>>oe),Y=Math.max(1,b.height>>oe);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,oe,Z,Q,Y,b.depth,0,fe,K,null):t.texImage2D(ee,oe,Z,Q,Y,0,fe,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),pe(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,ee,D.__webglTexture,0,St(b)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,ee,D.__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function kn(A,b,H){if(n.bindRenderbuffer(n.RENDERBUFFER,A),b.depthBuffer){const ie=b.depthTexture,ee=ie&&ie.isDepthTexture?ie.type:null,oe=_(b.stencilBuffer,ee),fe=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;pe(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St(b),oe,b.width,b.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,St(b),oe,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,oe,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,A)}else{const ie=b.textures;for(let ee=0;ee<ie.length;ee++){const oe=ie[ee],fe=r.convert(oe.format,oe.colorSpace),K=r.convert(oe.type),Z=T(oe.internalFormat,fe,K,oe.normalized,oe.colorSpace);pe(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St(b),Z,b.width,b.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,St(b),Z,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Z,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ft(A,b,H){const ie=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ee=i.get(b.depthTexture);ee.__renderTarget=b;const oe=ie?b.depthTexture.image[0]:b.depthTexture.image;(!ee.__webglTexture||oe.width!==b.width||oe.height!==b.height)&&(oe.width=b.width,oe.height=b.height,b.depthTexture.needsUpdate=!0),ie?ve(b.depthTexture,0):_e(b.depthTexture,0);const fe=ee.__webglTexture,K=St(b),Z=ie?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,ce=b.depthTexture.format===Oi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===Wi)pe(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,Z,fe,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,ce,Z,fe,0);else if(b.depthTexture.format===Oi)pe(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,Z,fe,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,ce,Z,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function vn(A){const b=i.get(A),H=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const ie=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ie){const ee=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ie.removeEventListener("dispose",ee)};ie.addEventListener("dispose",ee),b.__depthDisposeCallback=ee}b.__boundDepthTexture=ie}if(A.depthTexture&&!b.__autoAllocateDepthBuffer)if(H)for(let ie=0;ie<6;ie++)Ft(b.__webglFramebuffer[ie],A,ie);else A.texture.mipmaps.length>0?Ft(b.__webglFramebuffer[0],A,0):Ft(b.__webglFramebuffer,A,0);else if(H){b.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[ie]),b.__webglDepthbuffer[ie]===void 0)b.__webglDepthbuffer[ie]=n.createRenderbuffer(),kn(b.__webglDepthbuffer[ie],A,!1);else{const ee=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer[ie];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,oe)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),kn(b.__webglDepthbuffer,A,!1);else{const ee=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,oe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function xn(A,b,H){const ie=i.get(A);b!==void 0&&Mt(ie.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&vn(A)}function Sn(A){const b=A.texture,H=i.get(A),ie=i.get(b);A.addEventListener("dispose",N),P(A);const ee=A.textures,oe=A.isWebGLCubeRenderTarget===!0,fe=ee.length>1;if(fe||(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=b.version,a.memory.textures++),oe){H.__webglFramebuffer=[];for(let K=0;K<6;K++)if(b.mipmaps.length>0){H.__webglFramebuffer[K]=[];for(let Z=0;Z<b.mipmaps.length;Z++)H.__webglFramebuffer[K][Z]=n.createFramebuffer()}else H.__webglFramebuffer[K]=n.createFramebuffer()}else{if(b.mipmaps.length>0){H.__webglFramebuffer=[];for(let K=0;K<b.mipmaps.length;K++)H.__webglFramebuffer[K]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(fe)for(let K=0,Z=ee.length;K<Z;K++){const ce=i.get(ee[K]);ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&pe(A)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let K=0;K<ee.length;K++){const Z=ee[K];H.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[K]);const ce=r.convert(Z.format,Z.colorSpace),D=r.convert(Z.type),Q=T(Z.internalFormat,ce,D,Z.normalized,Z.colorSpace,A.isXRRenderTarget===!0),Y=St(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,Q,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,H.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),kn(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),lt(n.TEXTURE_CUBE_MAP,b);for(let K=0;K<6;K++)if(b.mipmaps.length>0)for(let Z=0;Z<b.mipmaps.length;Z++)Mt(H.__webglFramebuffer[K][Z],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Z);else Mt(H.__webglFramebuffer[K],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);E(b)?M(n.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(fe){for(let K=0,Z=ee.length;K<Z;K++){const ce=ee[K],D=i.get(ce);let Q=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,D.__webglTexture),lt(Q,ce),Mt(H.__webglFramebuffer,A,ce,n.COLOR_ATTACHMENT0+K,Q,0),E(ce)&&M(Q)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,ie.__webglTexture),lt(K,b),b.mipmaps.length>0)for(let Z=0;Z<b.mipmaps.length;Z++)Mt(H.__webglFramebuffer[Z],A,b,n.COLOR_ATTACHMENT0,K,Z);else Mt(H.__webglFramebuffer,A,b,n.COLOR_ATTACHMENT0,K,0);E(b)?M(K):b.mipmaps.length>0&&n.texParameteri(K,n.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&vn(A)}function U(A){const b=A.textures;for(let H=0,ie=b.length;H<ie;H++){const ee=b[H];if(E(ee)&&ee.mipmapsAutoUpdate===!0){const oe=w(A),fe=i.get(ee).__webglTexture;t.bindTexture(oe,fe),M(oe),t.unbindTexture()}}}const Mn=[];function xt(A){if(A.samples>0){if(pe(A)===!1){const b=A.textures,H=A.width,ie=A.height;let ee=n.COLOR_BUFFER_BIT;const oe=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(A),K=b.length>1;if(K)for(let ce=0;ce<b.length;ce++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ce=0;ce<b.length;ce++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[ce]);const D=i.get(b[ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,D,0)}n.blitFramebuffer(0,0,H,ie,0,0,H,ie,ee,n.NEAREST),l===!0&&(Mn.length=0,Mn.push(n.COLOR_ATTACHMENT0+ce),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Mn.push(oe),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Mn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let ce=0;ce<b.length;ce++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,fe.__webglColorRenderbuffer[ce]);const D=i.get(b[ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,D,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const b=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function St(A){return Math.min(s.maxSamples,A.samples)}function pe(A){const b=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Pt(A){const b=a.render.frame;d.get(A)!==b&&(d.set(A,b),A.update())}function Ce(A,b){const H=A.colorSpace,ie=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==Ua&&H!==Di&&(Qe.getTransfer(H)===dt?(ie!==Kn||ee!==mn)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",H)),b}function De(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Fe,this.resetTextureUnits=j,this.getTextureUnits=te,this.setTextureUnits=Me,this.setTexture2D=_e,this.setTexture2DArray=be,this.setTexture3D=Re,this.setTextureCube=ve,this.rebindTextures=xn,this.setupRenderTarget=Sn,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=vn,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=pe,this.dispose=G}function ix(n,e){function t(i,s=Di){let r;const a=Qe.getTransfer(s);if(i===mn)return n.UNSIGNED_BYTE;if(i===yc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ec)return n.UNSIGNED_SHORT_5_5_5_1;if(i===rf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===af)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===nf)return n.BYTE;if(i===sf)return n.SHORT;if(i===Ir)return n.UNSIGNED_SHORT;if(i===bc)return n.INT;if(i===ti)return n.UNSIGNED_INT;if(i===Yn)return n.FLOAT;if(i===ni)return n.HALF_FLOAT;if(i===of)return n.ALPHA;if(i===lf)return n.RGB;if(i===Kn)return n.RGBA;if(i===Wi)return n.DEPTH_COMPONENT;if(i===Oi)return n.DEPTH_STENCIL;if(i===cf)return n.RED;if(i===Tc)return n.RED_INTEGER;if(i===hs)return n.RG;if(i===wc)return n.RG_INTEGER;if(i===Ac)return n.RGBA_INTEGER;if(i===Ta||i===wa||i===Aa||i===Ra)if(a===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ll||i===cl||i===dl||i===ul)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fl||i===hl||i===pl||i===ml||i===gl||i===Ia||i===_l)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===fl||i===hl)return a===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===pl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ml)return r.COMPRESSED_R11_EAC;if(i===gl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ia)return r.COMPRESSED_RG11_EAC;if(i===_l)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===vl||i===xl||i===Sl||i===Ml||i===bl||i===yl||i===El||i===Tl||i===wl||i===Al||i===Rl||i===Cl||i===Pl||i===Ll)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===vl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ml)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===El)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Tl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Al)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ll)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Dl||i===Il||i===Nl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Dl)return a===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ul||i===Fl||i===Na||i===Ol)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ul)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ys?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const sx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rx=`
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

}`;class ax{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new bf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ps({vertexShader:sx,fragmentShader:rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gt(new Zs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ox extends gs{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,v=null;const x=typeof XRWebGLBinding<"u",g=new ax,m={},p=t.getContextAttributes();let E=null,M=null;const w=[],T=[],_=new We;let S=null,P=null;const C=new Ln;C.viewport=new yt;const R=new Ln;R.viewport=new yt;const N=[C,R],B=new xm;let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let _e=w[J];return _e===void 0&&(_e=new Ao,w[J]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(J){let _e=w[J];return _e===void 0&&(_e=new Ao,w[J]=_e),_e.getGripSpace()},this.getHand=function(J){let _e=w[J];return _e===void 0&&(_e=new Ao,w[J]=_e),_e.getHandSpace()};function X(J){const _e=T.indexOf(J.inputSource);if(_e===-1)return;const be=w[_e];be!==void 0&&(be.update(J.inputSource,J.frame,c||a),be.dispatchEvent({type:J.type,data:J.inputSource}))}function F(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",ne);for(let J=0;J<w.length;J++){const _e=T[J];_e!==null&&(T[J]=null,w[J].disconnect(_e))}L=null,G=null,g.reset();for(const J in m)delete m[J];if(e.setRenderTarget(E),f=null,h=null,u=null,s=null,M=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),P!==null){const J=P.camera;J.fov=P.fov,J.zoom=P.zoom,J.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",F),s.addEventListener("inputsourceschange",ne),p.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Re=null,ve=null;p.depth&&(ve=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=p.stencil?Oi:Wi,Re=p.stencil?Ys:ti);const Be={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(Be),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Zn(h.textureWidth,h.textureHeight,{format:Kn,type:mn,depthTexture:new Ks(h.textureWidth,h.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const be={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Zn(f.framebufferWidth,f.framebufferHeight,{format:Kn,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Fe.setContext(s),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ne(J){for(let _e=0;_e<J.removed.length;_e++){const be=J.removed[_e],Re=T.indexOf(be);Re>=0&&(T[Re]=null,w[Re].disconnect(be))}for(let _e=0;_e<J.added.length;_e++){const be=J.added[_e];let Re=T.indexOf(be);if(Re===-1){for(let Be=0;Be<w.length;Be++)if(Be>=T.length){T.push(be),Re=Be;break}else if(T[Be]===null){T[Be]=be,Re=Be;break}if(Re===-1)break}const ve=w[Re];ve&&ve.connect(be)}}function q(J,_e){_e===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(_e.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let _e=J.near,be=J.far;g.texture!==null&&(g.depthNear>0&&(_e=g.depthNear),g.depthFar>0&&(be=g.depthFar)),B.near=R.near=C.near=_e,B.far=R.far=C.far=be,(L!==B.near||G!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),L=B.near,G=B.far),B.layers.mask=J.layers.mask|6,C.layers.mask=B.layers.mask&-5,R.layers.mask=B.layers.mask&-3;const Re=J.parent,ve=B.cameras;q(B,Re);for(let Be=0;Be<ve.length;Be++)q(ve[Be],Re);B.projectionMatrix.copy(C.projectionMatrix),B.projectionMatrixInverse.copy(C.projectionMatrixInverse),P===null&&J.isPerspectiveCamera&&(P={camera:J,fov:J.fov,zoom:J.zoom}),j(J,B,Re)};function j(J,_e,be){be===null?J.matrix.copy(_e.matrixWorld):(J.matrix.copy(be.matrixWorld),J.matrix.invert(),J.matrix.multiply(_e.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(_e.projectionMatrix),J.projectionMatrixInverse.copy(_e.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Bl*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(J){return m[J]};let te=null;function Me(J,_e){if(d=_e.getViewerPose(c||a),v=_e,d!==null){const be=d.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Re=!1;be.length!==B.cameras.length&&(B.cameras.length=0,Re=!0);for(let Pe=0;Pe<be.length;Pe++){const lt=be[Pe];let pt=null;if(f!==null)pt=f.getViewport(lt);else{const Ht=u.getViewSubImage(h,lt);pt=Ht.viewport,Pe===0&&(e.setRenderTargetTextures(M,Ht.colorTexture,Ht.depthStencilTexture),e.setRenderTarget(M))}let Ye=N[Pe];Ye===void 0&&(Ye=new Ln,Ye.layers.enable(Pe),Ye.viewport=new yt,N[Pe]=Ye),Ye.matrix.fromArray(lt.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(lt.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(pt.x,pt.y,pt.width,pt.height),Pe===0&&(B.matrix.copy(Ye.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Re===!0&&B.cameras.push(Ye)}const ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=i.getBinding();const Pe=u.getDepthInformation(be[0]);Pe&&Pe.isValid&&Pe.texture&&g.init(Pe,s.renderState)}if(ve&&ve.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let Pe=0;Pe<be.length;Pe++){const lt=be[Pe].camera;if(lt){let pt=m[lt];pt||(pt=new bf,m[lt]=pt);const Ye=u.getCameraImage(lt);pt.sourceTexture=Ye}}}}for(let be=0;be<w.length;be++){const Re=T[be],ve=w[be];Re!==null&&ve!==void 0&&ve.update(Re,_e,c||a)}te&&te(J,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),v=null}const Fe=new Af;Fe.setAnimationLoop(Me),this.setAnimationLoop=function(J){te=J},this.dispose=function(){}}}const lx=new vt,Of=new Ie;Of.set(-1,0,0,0,1,0,0,0,1);function cx(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,yf(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,p,E,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),d(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&f(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),v(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,p,E):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===dn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===dn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const p=e.get(m),E=p.envMap,M=p.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(lx.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Of),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,p,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*p,g.scale.value=E*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,p){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===dn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=p.texture,g.transmissionSamplerSize.value.set(p.width,p.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const p=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(p.matrixWorld),g.nearDistance.value=p.shadow.camera.near,g.farDistance.value=p.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function dx(n,e,t,i){let s={},r={};function a(p,E){const M=E.program;i.uniformBlockBinding(p,M,s[p.id])}function o(p,E){let M=s[p.id];M===void 0&&(v(p),M=l(p),s[p.id]=M,p.addEventListener("dispose",g));const w=E.program;i.updateUBOMapping(p,w);const T=e.render.frame;r[p.id]!==T&&(c(p),r[p.id]=T)}function l(p){const E=n.createBuffer(),M=p.__size,w=p.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,M,w),n.bindBuffer(n.UNIFORM_BUFFER,null),E}function c(p){const E=s[p.id],M=p.uniforms,w=p.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let T=0,_=M.length;T<_;T++){const S=M[T];if(Array.isArray(S))for(let P=0,C=S.length;P<C;P++)d(S[P],T,P,w);else d(S,T,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(p,E,M,w){if(h(p,E,M,w)===!0){const T=p.__offset,_=p.value;if(Array.isArray(_)){let S=0;for(let P=0;P<_.length;P++){const C=_[P],R=x(C,!0);u(C,p.__data,S),S+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,p.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,p.__data)}}function u(p,E,M){typeof p=="number"||typeof p=="boolean"?E[M]=p:p.isMatrix3?(E[M]=p.elements[0],E[M+1]=p.elements[1],E[M+2]=p.elements[2],E[M+3]=0,E[M+4]=p.elements[3],E[M+5]=p.elements[4],E[M+6]=p.elements[5],E[M+7]=0,E[M+8]=p.elements[6],E[M+9]=p.elements[7],E[M+10]=p.elements[8],E[M+11]=0):ArrayBuffer.isView(p)?E.set(p.subarray(0,E.length-M),M):p.toArray(E,M)}function h(p,E,M,w){const T=p.value,_=E+"_"+M;if(Array.isArray(T)){w[_]===void 0&&(w[_]=[]);const S=w[_];let P=!1;for(let C=0;C<T.length;C++)f(T[C],S,C)===!0&&(P=!0);return P}return f(T,w,_)}function f(p,E,M){if(E[M]===void 0)return typeof p=="number"||typeof p=="boolean"?E[M]=p:ArrayBuffer.isView(p)?E[M]=p.slice():E[M]=p.clone(),!0;{const w=E[M];if(typeof p=="number"||typeof p=="boolean"){if(w!==p)return E[M]=p,!0}else{if(ArrayBuffer.isView(p))return!0;if(w.equals(p)===!1)return w.copy(p),!0}}return!1}function v(p){const E=p.uniforms;let M=0;const w=16;for(let _=0,S=E.length;_<S;_++){const P=Array.isArray(E[_])?E[_]:[E[_]];for(let C=0,R=P.length;C<R;C++){const N=P[C],B=Array.isArray(N.value)?N.value:[N.value],L=Array.isArray(E[_])||Array.isArray(N.value);let G=M;for(let F=0,ne=B.length;F<ne;F++){const q=B[F],j=x(q,L),te=M%w,Me=te%j.boundary,Fe=te+Me;M+=Me,Fe!==0&&w-Fe<j.storage&&(M+=w-Fe),F===0&&(G=M),M+=j.storage}const X=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new X((M-G)/Float32Array.BYTES_PER_ELEMENT),N.__offset=G}}const T=M%w;return T>0&&(M+=w-T),p.__size=M,p.__cache={},this}function x(p,E){const M={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(M.boundary=4,M.storage=4):p.isVector2?(M.boundary=8,M.storage=8):p.isVector3||p.isColor?(M.boundary=16,M.storage=12):p.isVector4?(M.boundary=16,M.storage=16):p.isMatrix3?(M.boundary=16,M.storage=48):p.isMatrix4?(M.boundary=16,M.storage=64):p.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(p)?(M.boundary=16,M.storage=p.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",p),E===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function g(p){const E=p.target;E.removeEventListener("dispose",g),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(const p in s)n.deleteBuffer(s[p]);s={},r={}}return{bind:a,update:o,dispose:m}}const ux=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zn=null;function fx(){return zn===null&&(zn=new sm(ux,16,16,hs,ni),zn.name="DFG_LUT",zn.minFilter=cn,zn.magFilter=cn,zn.wrapS=hi,zn.wrapT=hi,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}class hx{constructor(e={}){const{canvas:t=Pp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:f=mn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const x=f,g=new Set([Ac,wc,Tc]),m=new Set([mn,ti,Ir,Ys,yc,Ec]),p=new Uint32Array(4),E=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let w=null,T=null;const _=[],S=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let R=!1,N=null,B=null,L=null,G=null;this._outputColorSpace=pn;let X=0,F=0,ne=null,q=-1,j=null;const te=new yt,Me=new yt;let Fe=null;const J=new Ge(0);let _e=0,be=t.width,Re=t.height,ve=1,Be=null,Tt=null;const Pe=new yt(0,0,be,Re),lt=new yt(0,0,be,Re);let pt=!1;const Ye=new Ur,Ht=new Lc;let Ct=!1,on=!1;const Mt=new vt,kn=new O,Ft=new yt,vn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xn=!1;function Sn(){return ne===null?ve:1}let U=i;function Mn(y,I){return t.getContext(y,I)}let xt,St,pe,Pt,Ce,De,A,b,H,ie,ee,oe,fe,K,Z,ce,D,Q,Y,de,ae,le,we;try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sc}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",me,!1),U===null){const I="webgl2";if(U=Mn(I,y),U===null)throw Mn(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(y){throw t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",me,!1),rt("WebGLRenderer: "+y.message),y}function He(){xt=new g_(U),xt.init(),ae=new ix(U,xt),St=new r_(U,xt,e,ae),pe=new tx(U,xt),St.reversedDepthBuffer&&h&&pe.buffers.depth.setReversed(!0),B=U.createFramebuffer(),L=U.createFramebuffer(),G=U.createFramebuffer(),Pt=new x_(U),Ce=new Gv,De=new nx(U,xt,pe,Ce,St,ae,Pt),A=new m_(C),b=new Mm(U),le=new i_(U,b),H=new __(U,b,Pt,le),ie=new M_(U,H,b,le,Pt),Q=new S_(U,St,De),Z=new a_(Ce),ee=new zv(C,A,xt,St,le,Z),oe=new cx(C,Ce),fe=new Vv,K=new Kv(xt),D=new n_(C,A,pe,ie,v,l),ce=new ex(C,ie,St),we=new dx(U,Pt,St,pe),Y=new s_(U,xt,Pt),de=new v_(U,xt,Pt),Pt.programs=ee.programs,C.capabilities=St,C.extensions=xt,C.properties=Ce,C.renderLists=fe,C.shadowMap=ce,C.state=pe,C.info=Pt}x!==mn&&(P=new y_(x,t.width,t.height,o,s,r));const re=new ox(C,U);this.xr=re,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const y=xt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=xt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(y){y!==void 0&&(ve=y,this.setSize(be,Re,!1))},this.getSize=function(y){return y.set(be,Re)},this.setSize=function(y,I,$=!0){if(re.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}be=y,Re=I,t.width=Math.floor(y*ve),t.height=Math.floor(I*ve),$===!0&&(t.style.width=y+"px",t.style.height=I+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(be*ve,Re*ve).floor()},this.setDrawingBufferSize=function(y,I,$){be=y,Re=I,ve=$,t.width=Math.floor(y*$),t.height=Math.floor(I*$),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(x===mn){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(te)},this.getViewport=function(y){return y.copy(Pe)},this.setViewport=function(y,I,$,z){y.isVector4?Pe.set(y.x,y.y,y.z,y.w):Pe.set(y,I,$,z),pe.viewport(te.copy(Pe).multiplyScalar(Sn()).round())},this.getScissor=function(y){return y.copy(lt)},this.setScissor=function(y,I,$,z){y.isVector4?lt.set(y.x,y.y,y.z,y.w):lt.set(y,I,$,z),pe.scissor(Me.copy(lt).multiplyScalar(Sn()).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(y){pe.setScissorTest(pt=y)},this.setOpaqueSort=function(y){Be=y},this.setTransparentSort=function(y){Tt=y},this.getClearColor=function(y){return y.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,$=!0){let z=0;if(y){let V=!1;if(ne!==null){const he=ne.texture.format;V=g.has(he)}if(V){const he=ne.texture.type,Se=m.has(he),ue=D.getClearColor(),xe=D.getClearAlpha(),Te=ue.r,Oe=ue.g,Ke=ue.b;Se?(p[0]=Te,p[1]=Oe,p[2]=Ke,p[3]=xe,U.clearBufferuiv(U.COLOR,0,p)):(E[0]=Te,E[1]=Oe,E[2]=Ke,E[3]=xe,U.clearBufferiv(U.COLOR,0,E))}else z|=U.COLOR_BUFFER_BIT}I&&(z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),N=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",me,!1),D.dispose(),fe.dispose(),K.dispose(),De.dispose(),Ce.dispose(),A.dispose(),ie.dispose(),H.dispose(),le.dispose(),we.dispose(),ee.dispose(),re.dispose(),re.removeEventListener("sessionstart",Yc),re.removeEventListener("sessionend",Kc),qi.stop()};function Ae(y){y.preventDefault(),xd("WebGLRenderer: Context Lost."),R=!0}function ze(){xd("WebGLRenderer: Context Restored."),R=!1;const y=Pt.autoReset,I=ce.enabled,$=ce.autoUpdate,z=ce.needsUpdate,V=ce.type;He(),Pt.autoReset=y,ce.enabled=I,ce.autoUpdate=$,ce.needsUpdate=z,ce.type=V}function me(y){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ct(y){const I=y.target;I.removeEventListener("dispose",ct),Ot(I)}function Ot(y){Mi(y),Ce.remove(y)}function Mi(y){const I=Ce.get(y).programs;I!==void 0&&(I.forEach(function($){ee.releaseProgram($)}),y.isShaderMaterial&&ee.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,$,z,V,he){I===null&&(I=vn);const Se=V.isMesh&&V.matrixWorld.determinantAffine()<0,ue=ah(y,I,$,z,V);pe.setMaterial(z,Se);let xe=$.index,Te=1;if(z.wireframe===!0){if(xe=H.getWireframeAttribute($),xe===void 0)return;Te=2}const Oe=$.drawRange,Ke=$.attributes.position;let ye=Oe.start*Te,Ze=(Oe.start+Oe.count)*Te;he!==null&&(ye=Math.max(ye,he.start*Te),Ze=Math.min(Ze,(he.start+he.count)*Te)),xe!==null?(ye=Math.max(ye,0),Ze=Math.min(Ze,xe.count)):Ke!=null&&(ye=Math.max(ye,0),Ze=Math.min(Ze,Ke.count));const wt=Ze-ye;if(wt<0||wt===1/0)return;le.setup(V,z,ue,$,xe);let gt,mt=Y;if(xe!==null&&(gt=b.get(xe),mt=de,mt.setIndex(gt)),V.isMesh)z.wireframe===!0?(pe.setLineWidth(z.wireframeLinewidth*Sn()),mt.setMode(U.LINES)):mt.setMode(U.TRIANGLES);else if(V.isLine){let Kt=z.linewidth;Kt===void 0&&(Kt=1),pe.setLineWidth(Kt*Sn()),V.isLineSegments?mt.setMode(U.LINES):V.isLineLoop?mt.setMode(U.LINE_LOOP):mt.setMode(U.LINE_STRIP)}else V.isPoints?mt.setMode(U.POINTS):V.isSprite&&mt.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(xt.get("WEBGL_multi_draw"))mt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Kt=V._multiDrawStarts,Ee=V._multiDrawCounts,sn=V._multiDrawCount,st=xe?b.get(xe).bytesPerElement:1,Yi=Ce.get(z).currentProgram.getUniforms();for(let Zt=0;Zt<sn;Zt++)Yi.setValue(U,"_gl_DrawID",Zt),mt.render(Kt[Zt]/st,Ee[Zt])}else if(V.isInstancedMesh)mt.renderInstances(ye,wt,V.count);else if($.isInstancedBufferGeometry){const Kt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ee=Math.min($.instanceCount,Kt);mt.renderInstances(ye,wt,Ee)}else mt.render(ye,wt)};function qc(y,I,$,z){N!==null&&y.isNodeMaterial&&N.setObject(z,y),Ct===!0&&Z.setState(y,$,!1),y.transparent===!0&&y.side===qn&&y.forceSinglePass===!1?(y.side=dn,y.needsUpdate=!0,ir(y,I,z),y.side=fs,y.needsUpdate=!0,ir(y,I,z),y.side=qn):ir(y,I,z)}this.compile=function(y,I,$=null){$===null&&($=y),N!==null&&N.renderStart(y,I,$),T=K.get($),T.init(I),S.push(T),$.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),y!==$&&y.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights(),N!==null&&N.updateLights(T.state.lightsArray),on=this.localClippingEnabled,Ct=Z.init(this.clippingPlanes,on),Ct===!0&&Z.setGlobalState(this.clippingPlanes,I),N!==null&&ce.render(T.state.shadowsArray,$,I);const z=new Set;return y.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const he=V.material;if(he)if(Array.isArray(he))for(let Se=0;Se<he.length;Se++){const ue=he[Se];qc(ue,$,I,V),z.add(ue)}else qc(he,$,I,V),z.add(he)}),T=S.pop(),N!==null&&N.renderEnd(),z},this.compileAsync=function(y,I,$=null){const z=this.compile(y,I,$);return new Promise(V=>{function he(){if(z.forEach(function(Se){const xe=Ce.get(Se).currentProgram;(xe===void 0||xe.isReady())&&z.delete(Se)}),z.size===0){V(y);return}setTimeout(he,10)}xt.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let oo=null;function sh(y){oo&&oo(y)}function Yc(){qi.stop()}function Kc(){qi.start()}const qi=new Af;qi.setAnimationLoop(sh),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(y){oo=y,re.setAnimationLoop(y),y===null?qi.stop():qi.start()},re.addEventListener("sessionstart",Yc),re.addEventListener("sessionend",Kc),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;N!==null&&N.renderStart(y,I);const $=re.enabled===!0&&re.isPresenting===!0,z=P!==null&&(ne===null||$)&&P.begin(C,ne);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(I),I=re.getCamera()),y.isScene===!0&&y.onBeforeRender(C,y,I,ne),T=K.get(y,S.length),T.init(I),T.state.textureUnits=De.getTextureUnits(),S.push(T),Mt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?Ht.setFromArrayCamera(I):Ye.setFromProjectionMatrix(Mt,In,I.reversedDepth),on=this.localClippingEnabled,Ct=Z.init(this.clippingPlanes,on),w=fe.get(y,_.length),w.init(),_.push(w),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){const Se=C.xr.getDepthSensingMesh();Se!==null&&lo(Se,I,-1/0,C.sortObjects)}lo(y,I,0,C.sortObjects),w.finish(),N!==null&&N.updateLights(T.state.lightsArray),C.sortObjects===!0&&w.sort(Be,Tt),xn=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,xn&&D.addToRenderList(w,y),this.info.autoReset===!0&&this.info.reset(),Ct===!0&&Z.beginShadows();const V=T.state.shadowsArray;if(ce.render(V,y,I),Ct===!0&&Z.endShadows(),(z&&P.hasRenderPass())===!1){const Se=w.opaque,ue=w.transmissive;if(T.setupLights(),I.isArrayCamera){const xe=I.cameras;if(ue.length>0)for(let Te=0,Oe=xe.length;Te<Oe;Te++){const Ke=xe[Te];Jc(Se,ue,y,Ke)}xn&&D.render(y);for(let Te=0,Oe=xe.length;Te<Oe;Te++){const Ke=xe[Te];Zc(w,y,Ke,Ke.viewport)}}else ue.length>0&&Jc(Se,ue,y,I),xn&&D.render(y),Zc(w,y,I)}ne!==null&&F===0&&(De.updateMultisampleRenderTarget(ne),De.updateRenderTargetMipmap(ne)),z&&P.end(C),y.isScene===!0&&y.onAfterRender(C,y,I),le.resetDefaultState(),q=-1,j=null,S.pop(),S.length>0?(T=S[S.length-1],De.setTextureUnits(T.state.textureUnits),Ct===!0&&Z.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,N!==null&&N.renderEnd()};function lo(y,I,$,z){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)$=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){const Se=I.isArrayCamera?Ht:Ye;if(!y.frustumCulled||y.intersectsFrustum(Se)){z&&Ft.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Mt);const ue=ie.update(y),xe=y.material;xe.visible&&w.push(y,ue,xe,$,Ft.z,null,I)}}else if(y.isMesh||y.isLine||y.isPoints){const Se=I.isArrayCamera?Ht:Ye;if(!y.frustumCulled||y.intersectsFrustum(Se)){const ue=ie.update(y),xe=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ft.copy(y.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ft.copy(ue.boundingSphere.center)),Ft.applyMatrix4(y.matrixWorld).applyMatrix4(Mt)),Array.isArray(xe)){const Te=ue.groups;for(let Oe=0,Ke=Te.length;Oe<Ke;Oe++){const ye=Te[Oe],Ze=xe[ye.materialIndex];Ze&&Ze.visible&&w.push(y,ue,Ze,$,Ft.z,ye,I)}}else xe.visible&&w.push(y,ue,xe,$,Ft.z,null,I)}}}const he=y.children;for(let Se=0,ue=he.length;Se<ue;Se++)lo(he[Se],I,$,z)}function Zc(y,I,$,z){const{opaque:V,transmissive:he,transparent:Se}=y;T.setupLightsView($),Ct===!0&&Z.setGlobalState(C.clippingPlanes,$),z&&pe.viewport(te.copy(z)),V.length>0&&$r(V,I,$),he.length>0&&$r(he,I,$),Se.length>0&&$r(Se,I,$),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Jc(y,I,$,z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){const ye=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new Zn(1,1,{generateMipmaps:!0,type:ye?ni:mn,minFilter:Fi,samples:Math.max(4,St.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const he=T.state.transmissionRenderTarget[z.id],Se=z.viewport||te;he.setSize(Se.z*C.transmissionResolutionScale,Se.w*C.transmissionResolutionScale);const ue=C.getRenderTarget(),xe=C.getActiveCubeFace(),Te=C.getActiveMipmapLevel();C.setRenderTarget(he),C.getClearColor(J),_e=C.getClearAlpha(),_e<1&&C.setClearColor(16777215,.5),C.clear(),xn&&D.render($);const Oe=C.toneMapping;C.toneMapping=mi;const Ke=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),Ct===!0&&Z.setGlobalState(C.clippingPlanes,z),$r(y,$,z),De.updateMultisampleRenderTarget(he),De.updateRenderTargetMipmap(he),xt.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Ze=0,wt=I.length;Ze<wt;Ze++){const gt=I[Ze],{object:mt,geometry:Kt,material:Ee,group:sn}=gt;if(Ee.side===qn&&mt.layers.test(z.layers)){const st=Ee.side;Ee.side=dn,Ee.needsUpdate=!0,Qc(mt,$,z,Kt,Ee,sn),Ee.side=st,Ee.needsUpdate=!0,ye=!0}}ye===!0&&(De.updateMultisampleRenderTarget(he),De.updateRenderTargetMipmap(he))}C.setRenderTarget(ue,xe,Te),C.setClearColor(J,_e),Ke!==void 0&&(z.viewport=Ke),C.toneMapping=Oe}function $r(y,I,$){const z=I.isScene===!0?I.overrideMaterial:null;for(let V=0,he=y.length;V<he;V++){const Se=y[V],{object:ue,geometry:xe,group:Te}=Se;let Oe=Se.material;Oe.allowOverride===!0&&z!==null&&(Oe=z),ue.layers.test($.layers)&&Qc(ue,I,$,xe,Oe,Te)}}function Qc(y,I,$,z,V,he){N!==null&&V.isNodeMaterial&&N.setObject(y,V),y.onBeforeRender(C,I,$,z,V,he),y.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(C,I,$,z,y,he),V.transparent===!0&&V.side===qn&&V.forceSinglePass===!1?(V.side=dn,V.needsUpdate=!0,C.renderBufferDirect($,I,z,V,y,he),V.side=fs,V.needsUpdate=!0,C.renderBufferDirect($,I,z,V,y,he),V.side=qn):C.renderBufferDirect($,I,z,V,y,he),y.onAfterRender(C,I,$,z,V,he)}function jc(y){let I=0;for(const $ of y)$.texture!==null&&I++;return I}function ir(y,I,$){I.isScene!==!0&&(I=vn);const z=Ce.get(y),V=T.state.lights,he=T.state.shadowsArray,Se=V.state.version,ue=ee.getParameters(y,V.state,he,I,$,T.state.lightProbeGridArray),xe=ee.getProgramCacheKey(ue);let Te=z.programs;z.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,z.fog=I.fog;const Oe=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;z.envMap=A.get(y.envMap||z.environment,Oe),z.envMapRotation=z.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Te===void 0&&(y.addEventListener("dispose",ct),Te=new Map,z.programs=Te,z.programVariants=new Map);let Ke=Te.get(xe);if(Ke!==void 0){if(z.currentProgram===Ke&&z.lightsStateVersion===Se)return td(y,ue),Ke}else ue.uniforms=ee.getUniforms(y),N!==null&&y.isNodeMaterial&&N.build(y,$,ue),y.onBeforeCompile(ue,C),Ke=ee.acquireProgram(ue,xe),Te.set(xe,Ke),z.uniforms=ue.uniforms;const ye=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ye.clippingPlanes=Z.uniform),td(y,ue),z.needsLights=lh(y),z.lightsStateVersion=Se,z.needsLights&&(ye.ambientLightColor.value=V.state.ambient,ye.lightProbe.value=V.state.probe,ye.sunLights.value=V.state.sun,ye.sunLightShadows.value=V.state.sunShadow,ye.directionalLights.value=V.state.directional,ye.directionalLightShadows.value=V.state.directionalShadow,ye.spotLights.value=V.state.spot,ye.spotLightShadows.value=V.state.spotShadow,ye.rectAreaLights.value=V.state.rectArea,ye.ltc_1.value=V.state.rectAreaLTC1,ye.ltc_2.value=V.state.rectAreaLTC2,ye.pointLights.value=V.state.point,ye.pointLightShadows.value=V.state.pointShadow,ye.hemisphereLights.value=V.state.hemi,ye.sunShadowMatrix.value=V.state.sunShadowMatrix,ye.sunShadowCascade.value=V.state.sunShadowCascade,ye.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ye.spotLightMatrix.value=V.state.spotLightMatrix,ye.spotLightMap.value=V.state.spotLightMap,ye.pointShadowMatrix.value=V.state.pointShadowMatrix),z.numLightProbeGrids=jc(T.state.lightProbeGridArray),z.currentProgram=Ke,z.uniformsList=null,Ke}function rh(y,I,$,z,V){const he=Ce.get(y),Se=he.currentProgram.id+","+z+","+V;let ue=he.programVariants.get(Se);return ue===void 0?(ue=ir(y,I,$),he.programVariants.set(Se,ue)):(he.currentProgram=ue,he.uniformsList=null,he.outputColorSpace=z,he.toneMapping=V),ue}function ed(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=Pa.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function td(y,I){const $=Ce.get(y);$.outputColorSpace=I.outputColorSpace,$.batching=I.batching,$.batchingColor=I.batchingColor,$.instancing=I.instancing,$.instancingColor=I.instancingColor,$.instancingMorph=I.instancingMorph,$.skinning=I.skinning,$.morphTargets=I.morphTargets,$.morphNormals=I.morphNormals,$.morphColors=I.morphColors,$.morphTargetsCount=I.morphTargetsCount,$.numClippingPlanes=I.numClippingPlanes,$.numIntersection=I.numClipIntersection,$.vertexAlphas=I.vertexAlphas,$.vertexTangents=I.vertexTangents,$.toneMapping=I.toneMapping}function ah(y,I,$,z,V){I.isScene!==!0&&(I=vn),De.resetTextureUnits();const he=I.fog,Se=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?I.environment:null,ue=ne===null?C.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Qe.workingColorSpace,xe=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Te=A.get(z.envMap||Se,xe),Oe=z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ke=!!$.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),ye=!!$.morphAttributes.position,Ze=!!$.morphAttributes.normal,wt=!!$.morphAttributes.color;let gt=mi;z.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(gt=C.toneMapping);const mt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Kt=mt!==void 0?mt.length:0,Ee=Ce.get(z),sn=T.state.lights;if(Ct===!0&&(on===!0||y!==j)){const bt=y===j&&z.id===q;Z.setState(z,y,bt)}let st=!1,Yi=!1;z.version===Ee.__version?Ee.needsLights&&Ee.lightsStateVersion!==sn.state.version||V.isBatchedMesh&&Ee.batching===!1||!V.isBatchedMesh&&Ee.batching===!0||V.isBatchedMesh&&Ee.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ee.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ee.instancing===!1||!V.isInstancedMesh&&Ee.instancing===!0||V.isSkinnedMesh&&Ee.skinning===!1||!V.isSkinnedMesh&&Ee.skinning===!0||V.isInstancedMesh&&Ee.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ee.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ee.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ee.instancingMorph===!1&&V.morphTexture!==null||Ee.envMap!==Te||z.fog===!0&&Ee.fog!==he||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Z.numPlanes||Ee.numIntersection!==Z.numIntersection)||Ee.vertexAlphas!==Oe||Ee.vertexTangents!==Ke||Ee.morphTargets!==ye||Ee.morphNormals!==Ze||Ee.morphColors!==wt||Ee.morphTargetsCount!==Kt||Ee.numLightProbeGrids!==jc(T.state.lightProbeGridArray)?st=!0:(Ee.outputColorSpace!==ue||Ee.toneMapping!==gt)&&(Yi=!0):(st=!0,Ee.__version=z.version);let Zt=Ee.currentProgram;(st===!0||Yi===!0)&&(Zt=Yi===!0?rh(z,I,V,ue,gt):ir(z,I,V),N&&z.isNodeMaterial&&N.onUpdateProgram(z,Zt,Ee));let Xr=!1,bi=!1,Ki=!1;const nt=Zt.getUniforms(),Vt=Ee.uniforms;if(pe.useProgram(Zt.program)&&(Xr=!0,bi=!0,Ki=!0),z.id!==q&&(q=z.id,bi=!0),Xr||j!==y){pe.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),nt.setValue(U,"projectionMatrix",y.projectionMatrix),nt.setValue(U,"viewMatrix",y.matrixWorldInverse);const kt=nt.map.cameraPosition;kt!==void 0&&kt.setValue(U,kn.setFromMatrixPosition(y.matrixWorld)),St.logarithmicDepthBuffer&&nt.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&nt.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),j!==y&&(j=y,bi=!0,Ki=!0)}if(Ee.needsLights&&(sn.state.sunShadowMap.length>0&&nt.setValue(U,"sunShadowMap",sn.state.sunShadowMap,De),sn.state.directionalShadowMap.length>0&&nt.setValue(U,"directionalShadowMap",sn.state.directionalShadowMap,De),sn.state.spotShadowMap.length>0&&nt.setValue(U,"spotShadowMap",sn.state.spotShadowMap,De),sn.state.pointShadowMap.length>0&&nt.setValue(U,"pointShadowMap",sn.state.pointShadowMap,De)),V.isSkinnedMesh){nt.setOptional(U,V,"bindMatrix"),nt.setOptional(U,V,"bindMatrixInverse");const bt=V.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),nt.setValue(U,"boneTexture",bt.boneTexture,De))}V.isBatchedMesh&&(nt.setOptional(U,V,"batchingTexture"),nt.setValue(U,"batchingTexture",V._matricesTexture,De),nt.setOptional(U,V,"batchingIdTexture"),nt.setValue(U,"batchingIdTexture",V._indirectTexture,De),nt.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&nt.setValue(U,"batchingColorTexture",V._colorsTexture,De));const An=$.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&Q.update(V,$,Zt),(bi||Ee.receiveShadow!==V.receiveShadow)&&(Ee.receiveShadow=V.receiveShadow,nt.setValue(U,"receiveShadow",V.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&I.environment!==null&&(Vt.envMapIntensity.value=I.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=fx()),bi){if(nt.setValue(U,"toneMappingExposure",C.toneMappingExposure),Ee.needsLights&&oh(Vt,Ki),he&&z.fog===!0&&oe.refreshFogUniforms(Vt,he),oe.refreshMaterialUniforms(Vt,z,ve,Re,T.state.transmissionRenderTarget[y.id]),Ee.needsLights&&Ee.numLightProbeGrids>0){const bt=M;let kt=0;for(const si of T.state.lightProbeGridArray)si.texture!==null&&(bt.textures[kt]=si.texture,bt.min[kt]=si.boundingBox.min,bt.max[kt]=si.boundingBox.max,bt.resolution[kt]=si.resolution,kt++);for(const si in bt)bt[si].length=kt;Vt.probesSH.value=bt.textures,Vt.probesMin.value=bt.min,Vt.probesMax.value=bt.max,Vt.probesResolution.value=bt.resolution}Pa.upload(U,ed(Ee),Vt,De)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Pa.upload(U,ed(Ee),Vt,De),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&nt.setValue(U,"center",V.center),nt.setValue(U,"modelViewMatrix",V.modelViewMatrix),nt.setValue(U,"normalMatrix",V.normalMatrix),nt.setValue(U,"modelMatrix",V.matrixWorld),z.uniformsGroups!==void 0){const bt=z.uniformsGroups;for(let kt=0,si=bt.length;kt<si;kt++){const id=bt[kt];we.update(id,Zt),we.bind(id,Zt)}}return Zt}function oh(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.sunLights.needsUpdate=I,y.sunLightShadows.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function lh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(y,I,$){const z=Ce.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Ce.get(y.texture).__webglTexture=I,Ce.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:$,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){const $=Ce.get(y);$.__webglFramebuffer=I,$.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,$=0){ne=y,X=I,F=$;let z=null,V=!1,he=!1;if(y){const ue=Ce.get(y);if(ue.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(U.FRAMEBUFFER,ue.__webglFramebuffer),te.copy(y.viewport),Me.copy(y.scissor),Fe=y.scissorTest,pe.viewport(te),pe.scissor(Me),pe.setScissorTest(Fe),q=-1;return}else if(ue.__webglFramebuffer===void 0)De.setupRenderTarget(y);else if(ue.__hasExternalTextures)De.rebindTextures(y,Ce.get(y.texture).__webglTexture,Ce.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Oe=y.depthTexture;if(ue.__boundDepthTexture!==Oe){if(Oe!==null&&Ce.has(Oe)&&(y.width!==Oe.image.width||y.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(y)}}const xe=y.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(he=!0);const Te=Ce.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Te[I])?z=Te[I][$]:z=Te[I],V=!0):y.samples>0&&De.useMultisampledRTT(y)===!1?z=Ce.get(y).__webglMultisampledFramebuffer:Array.isArray(Te)?z=Te[$]:z=Te,te.copy(y.viewport),Me.copy(y.scissor),Fe=y.scissorTest}else te.copy(Pe).multiplyScalar(ve).floor(),Me.copy(lt).multiplyScalar(ve).floor(),Fe=pt;if($!==0&&(z=B),pe.bindFramebuffer(U.FRAMEBUFFER,z)&&pe.drawBuffers(y,z),pe.viewport(te),pe.scissor(Me),pe.setScissorTest(Fe),V){const ue=Ce.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,ue.__webglTexture,$)}else if(he){const ue=I;for(let xe=0;xe<y.textures.length;xe++){const Te=Ce.get(y.textures[xe]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+xe,Te.__webglTexture,$,ue)}}else if(y!==null&&$!==0){const ue=Ce.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ue.__webglTexture,$)}q=-1};function nd(y){const I=Ce.get(y);return(I.__readFormat!==y.format||I.__readType!==y.type)&&(I.__readFormat=y.format,I.__readType=y.type,I.__formatReadable=St.textureFormatReadable(y.format),I.__typeReadable=St.textureTypeReadable(y.type)),I}this.readRenderTargetPixels=function(y,I,$,z,V,he,Se,ue=0){if(!(y&&y.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ce.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(xe=xe[Se],Array.isArray(xe)&&(xe=xe[0])),xe){pe.bindFramebuffer(U.FRAMEBUFFER,xe);try{const Te=y.textures[ue],Oe=Te.format,Ke=Te.type;y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ue);const ye=nd(Te);if(ye.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ye.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-z&&$>=0&&$<=y.height-V&&U.readPixels(I,$,z,V,ae.convert(Oe),ae.convert(Ke),he)}finally{const Te=ne!==null?Ce.get(ne).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(y,I,$,z,V,he,Se,ue=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ce.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(xe=xe[Se],Array.isArray(xe)&&(xe=xe[0])),xe)if(I>=0&&I<=y.width-z&&$>=0&&$<=y.height-V){pe.bindFramebuffer(U.FRAMEBUFFER,xe);const Te=y.textures[ue],Oe=Te.format,Ke=Te.type;y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ue);const ye=nd(Te);if(ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ze),U.bufferData(U.PIXEL_PACK_BUFFER,he.byteLength,U.STREAM_READ),U.readPixels(I,$,z,V,ae.convert(Oe),ae.convert(Ke),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const wt=ne!==null?Ce.get(ne).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,wt);const gt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Lp(U,gt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ze),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,he),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Ze),U.deleteSync(gt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,$=0){const z=Math.pow(2,-$),V=Math.floor(y.image.width*z),he=Math.floor(y.image.height*z),Se=I!==null?I.x:0,ue=I!==null?I.y:0;De.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,$,0,0,Se,ue,V,he),pe.unbindTexture()},this.copyTextureToTexture=function(y,I,$=null,z=null,V=0,he=0){let Se,ue,xe,Te,Oe,Ke,ye,Ze,wt;const gt=y.isCompressedTexture?y.mipmaps[he]:y.image;if($!==null)Se=$.max.x-$.min.x,ue=$.max.y-$.min.y,xe=$.isBox3?$.max.z-$.min.z:1,Te=$.min.x,Oe=$.min.y,Ke=$.isBox3?$.min.z:0;else{const nt=Math.pow(2,-V);Se=Math.floor(gt.width*nt),ue=Math.floor(gt.height*nt),y.isDataArrayTexture?xe=gt.depth:y.isData3DTexture?xe=Math.floor(gt.depth*nt):xe=1,Te=0,Oe=0,Ke=0}z!==null?(ye=z.x,Ze=z.y,wt=z.z):(ye=0,Ze=0,wt=0);const mt=ae.convert(I.format),Kt=ae.convert(I.type);let Ee;I.isData3DTexture?(De.setTexture3D(I,0),Ee=U.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(De.setTexture2DArray(I,0),Ee=U.TEXTURE_2D_ARRAY):(De.setTexture2D(I,0),Ee=U.TEXTURE_2D),pe.activeTexture(U.TEXTURE0),pe.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,I.flipY),pe.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),pe.pixelStorei(U.UNPACK_ALIGNMENT,I.unpackAlignment);const sn=pe.getParameter(U.UNPACK_ROW_LENGTH),st=pe.getParameter(U.UNPACK_IMAGE_HEIGHT),Yi=pe.getParameter(U.UNPACK_SKIP_PIXELS),Zt=pe.getParameter(U.UNPACK_SKIP_ROWS),Xr=pe.getParameter(U.UNPACK_SKIP_IMAGES);pe.pixelStorei(U.UNPACK_ROW_LENGTH,gt.width),pe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gt.height),pe.pixelStorei(U.UNPACK_SKIP_PIXELS,Te),pe.pixelStorei(U.UNPACK_SKIP_ROWS,Oe),pe.pixelStorei(U.UNPACK_SKIP_IMAGES,Ke);const bi=y.isDataArrayTexture||y.isData3DTexture,Ki=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){const nt=Ce.get(y),Vt=Ce.get(I),An=Ce.get(nt.__renderTarget),bt=Ce.get(Vt.__renderTarget);pe.bindFramebuffer(U.READ_FRAMEBUFFER,An.__webglFramebuffer),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let kt=0;kt<xe;kt++)bi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ce.get(y).__webglTexture,V,Ke+kt),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ce.get(I).__webglTexture,he,wt+kt)),U.blitFramebuffer(Te,Oe,Te+Se,Oe+ue,ye,Ze,ye+Se,Ze+ue,U.DEPTH_BUFFER_BIT,U.NEAREST);pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||y.isRenderTargetTexture||Ce.has(y)){const nt=Ce.get(y),Vt=Ce.get(I);pe.bindFramebuffer(U.READ_FRAMEBUFFER,L),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,G);for(let An=0;An<xe;An++)bi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,nt.__webglTexture,V,Ke+An):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,nt.__webglTexture,V),Ki?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Vt.__webglTexture,he,wt+An):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Vt.__webglTexture,he),V!==0?U.blitFramebuffer(Te,Oe,Te+Se,Oe+ue,ye,Ze,ye+Se,Ze+ue,U.COLOR_BUFFER_BIT,U.NEAREST):Ki?U.copyTexSubImage3D(Ee,he,ye,Ze,wt+An,Te,Oe,Se,ue):U.copyTexSubImage2D(Ee,he,ye,Ze,Te,Oe,Se,ue);pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ki?y.isDataTexture||y.isData3DTexture?U.texSubImage3D(Ee,he,ye,Ze,wt,Se,ue,xe,mt,Kt,gt.data):I.isCompressedArrayTexture?U.compressedTexSubImage3D(Ee,he,ye,Ze,wt,Se,ue,xe,mt,gt.data):U.texSubImage3D(Ee,he,ye,Ze,wt,Se,ue,xe,mt,Kt,gt):y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,he,ye,Ze,Se,ue,mt,Kt,gt.data):y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,he,ye,Ze,gt.width,gt.height,mt,gt.data):U.texSubImage2D(U.TEXTURE_2D,he,ye,Ze,Se,ue,mt,Kt,gt);pe.pixelStorei(U.UNPACK_ROW_LENGTH,sn),pe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,st),pe.pixelStorei(U.UNPACK_SKIP_PIXELS,Yi),pe.pixelStorei(U.UNPACK_SKIP_ROWS,Zt),pe.pixelStorei(U.UNPACK_SKIP_IMAGES,Xr),he===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&U.generateMipmap(Ee),pe.unbindTexture()},this.initRenderTarget=function(y){Ce.get(y).__webglFramebuffer===void 0&&De.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?De.setTextureCube(y,0):y.isData3DTexture?De.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?De.setTexture2DArray(y,0):De.setTexture2D(y,0),pe.unbindTexture()},this.resetState=function(){X=0,F=0,ne=null,pe.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}const Ds=[],Wl=52*Math.PI/180,kf=30,zi=Math.sin(Wl),Bf="#8f95a6",Hs="#56617c",en="#f1ead9",Ii="#1d2335",zf="#e6dcc6",Gn="#e8bd55",En=n=>n.citadel?5:n.kind==="station"?3.3:[2.7,3.5,4.5][n.size],px=n=>{const e=En(n);return n.kind==="planet"?e*2.5:e*.5+e*(n.citadel?3.4:1.5)},Ns=n=>{const e=En(n);return n.kind==="planet"?e*1.5:e*.5+e*.55},mx=4.2,$l=[["#d9c7a0","#b09a74","#efe2c2"],["#93a5b3","#6c7e8e","#b9c7d0"],["#93b08c","#6d8b69","#b7ceac"],["#cc9379","#a56e58","#e3b7a2"],["#cfdcdf","#a2b5ba","#eef5f5"]],Ha={gen:"#e3c565",mine:"#a8835a",lab:"#7fb2dc",slab:"#7fb2dc",shield:"#bfe3ff",sshield:"#bfe3ff",relay:"#cbb2e6",habitat:"#9fd0a8",turret:"#6d7385",sensor:"#f1ead9",barracks:"#dd7a63",shipyard:"#e3c565",dock:"#b8ad96"};function ui(n,e){if(e.owner===k||n.vis[e.id]===2)return{tier:"live",owner:e.owner,drones:e.drones};const t=n.intel[e.id];return t.snap?{tier:"stale",owner:t.snap.owner,drones:t.snap.drones}:t.seen>=1?{tier:"detected",owner:-1,drones:0}:{tier:"hidden",owner:-1,drones:0}}let _r=null,gn,Ci,ts=null,vr,La,Xl=0,pu=-1,Us,yr,Er,Ni=null,ql="";const Fs=new Map,Pi=new Map,ln=320,Os=.5;let Yl=0,Kl=0;const Xo=new O,$e=(n,e=0)=>{const t=new Ge(n);return e&&t.lerp(new Ge(Hs),e),new so({color:t,flatShading:!0})},Jn=(n,e=1)=>new ka({color:n,transparent:e<1,opacity:e,depthWrite:e>=1});function fi(n){n.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(s=>s.dispose()):i&&i.dispose()}),n.removeFromParent()}function Nc(n,e,t,i,s=0,r=Math.PI*2,a=1){const o=new Gt(new Dc(n,e,48,1,s,r),Jn(t,a));return o.rotation.x=-Math.PI/2,o.position.y=i,o}const ke=(n,e,t=0,i=0,s=0)=>{const r=new Gt(n,e);return r.position.set(t,i,s),r};function gx(){const n=document.getElementById("gl");_r=new hx({canvas:n,antialias:!0}),gn=new Zp,gn.background=new Ge("#2a3350"),Ci=new Ln(kf,1,1,4e3),gn.add(new mm("#fff4e0","#3d4668",1.5));const e=new vm("#fff0d8",2.2);e.position.set(-.7,1,.45),gn.add(e);const t=[];for(let s=0;s<96;s++)t.push(new O(Math.cos(s/96*Math.PI*2),0,Math.sin(s/96*Math.PI*2)));const i=new Yt().setFromPoints(t);Us=new Od(i,new zl({color:en,transparent:!0,opacity:.55})),yr=new Od(i,new zl({color:en,transparent:!0,opacity:.22})),Er=Nc(1,1.1,en,.12),gn.add(Us,yr,Er)}function _x(n){for(const u of Fs.values())fi(u.grp);for(const u of Pi.values())fi(u.grp);Fs.clear(),Pi.clear(),Ni&&(fi(Ni),Ni=null,ql="");for(const u of gn.children.filter(h=>h.userData.world))fi(u);let e=n.seed|0;const t=()=>{e=e+1831565813|0;let u=e;return u=Math.imul(u^u>>>15,u|1),u^=u+Math.imul(u^u>>>7,u|61),((u^u>>>14)>>>0)/4294967296},i=[];for(let u=0;u<1400;u++)i.push(t()*(n.w+1600)-800,-150-t()*500,t()*(n.h+1600)-800);const s=new Yt;s.setAttribute("position",new at(i,3));const r=new om(s,new xf({color:en,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:.8}));r.userData.world=!0,gn.add(r);const a=["#5f7fa8","#8a6fa0","#b9786a","#5f9c94","#a88f6a"],o=document.createElement("canvas");o.width=o.height=128;const l=o.getContext("2d"),c=l.createRadialGradient(64,64,0,64,64,64);c.addColorStop(0,"rgba(255,255,255,1)"),c.addColorStop(.5,"rgba(255,255,255,0.45)"),c.addColorStop(1,"rgba(255,255,255,0)"),l.fillStyle=c,l.fillRect(0,0,128,128);const d=new zd(o);for(let u=0;u<18;u++){const h=140+t()*260,f=new Gt(new Zs(h*2,h*2),new ka({map:d,color:a[Math.floor(t()*a.length)],transparent:!0,opacity:.3,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.set(t()*(n.w+600)-300,-220-t()*200,t()*(n.h+600)-300),f.userData.world=!0,gn.add(f)}vr=document.createElement("canvas"),vr.width=Math.round((n.w+ln*2)*Os),vr.height=Math.round((n.h+ln*2)*Os),La=new zd(vr),La.colorSpace=pn,ts=new Gt(new Zs(n.w+ln*2,n.h+ln*2),new ka({map:La,transparent:!0,depthWrite:!1})),ts.rotation.x=-Math.PI/2,ts.position.set(n.w/2,-.2,n.h/2),ts.userData.world=!0,ts.renderOrder=-1,gn.add(ts),Xl=0}function Ui(n,e){const t=parseInt(n.slice(1),16);return`rgba(${t>>16&255},${t>>8&255},${t&255},${e})`}function Uc(n,e){const t=parseInt(n.slice(1),16),i=s=>Math.max(0,Math.min(255,Math.round(s*e)));return`rgb(${i(t>>16&255)},${i(t>>8&255)},${i(t&255)})`}const qo=(n,e)=>{let t=n*374761393+e*668265263|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296};function vx(n,e){const t=vr.getContext("2d");t.setTransform(Os,0,0,Os,ln*Os,ln*Os),t.globalCompositeOperation="source-over",t.clearRect(-ln,-ln,n.w+ln*2,n.h+ln*2),t.fillStyle="rgba(86,97,128,0.8)",t.fillRect(-ln,-ln,n.w+ln*2,n.h+ln*2),t.globalCompositeOperation="destination-out";const i=n.nodes.filter(o=>o.owner===k).map(o=>({x:o.x,y:o.y,r:Za(n,o)}));for(const o of n.ships)o.owner===k&&!o.lane&&i.push({x:o.x,y:o.y,r:sc(n,o)});for(const o of i){const[l,c]=o.r;let d=t.createRadialGradient(o.x,o.y,c*.8,o.x,o.y,c);d.addColorStop(0,"rgba(0,0,0,0.5)"),d.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=d,t.beginPath(),t.arc(o.x,o.y,c,0,7),t.fill(),d=t.createRadialGradient(o.x,o.y,l*.82,o.x,o.y,l),d.addColorStop(0,"rgba(0,0,0,1)"),d.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=d,t.beginPath(),t.arc(o.x,o.y,l,0,7),t.fill()}t.globalCompositeOperation="source-over";const s=n.nodes.map(o=>({n:o,k:ui(n,o)})).filter(o=>o.k.tier!=="hidden"&&o.k.tier!=="detected"&&o.k.owner!==0),r=(o,l,c,d,u)=>{const h=t.createRadialGradient(o,l,0,o,l,c);h.addColorStop(0,Ui(d,u)),h.addColorStop(.55,Ui(d,u*.55)),h.addColorStop(1,Ui(d,0)),t.fillStyle=h,t.beginPath(),t.arc(o,l,c,0,7),t.fill()},a=e/1e3;for(const{n:o,k:l}of s){const c=Xn(n,l.owner);for(let d=0;d<7;d++){const u=qo(o.id,d)*Math.PI*2+a*.05*(d%2?1:-1),h=6+qo(d,o.id)*20;r(o.x+Math.cos(u)*h,o.y+Math.sin(u)*h*.8,16+qo(o.id+7,d)*16,c,.13)}}for(let o=0;o<s.length;o++)for(let l=o+1;l<s.length;l++){const c=s[o],d=s[l];if(c.k.owner!==d.k.owner)continue;const u=d.n.x-c.n.x,h=d.n.y-c.n.y,f=Math.hypot(u,h);if(f>115)continue;const v=Xn(n,c.k.owner),x=Math.floor(f/16);for(let g=1;g<x;g++){const m=g/x,p=Math.sin(a*.3+g+c.n.id)*4;r(c.n.x+u*m-h/f*p,c.n.y+h*m+u/f*p,15,v,.07)}}La.needsUpdate=!0}function xx(n,e,t){const i=new Hr(e,1).toNonIndexed(),[s,r,a]=$l[n.id%$l.length].map(u=>{const h=new Ge(u);return t&&h.lerp(new Ge(Hs),t),h}),o=i.getAttribute("position"),l=[],c=.05+n.id%3*.12;for(let u=0;u<o.count;u+=3){const h=(o.getY(u)+o.getY(u+1)+o.getY(u+2))/3/e,f=h>.62?a:Math.abs(h-c)<.14||n.size>0&&Math.abs(h+.42)<.1?r:s;for(let v=0;v<3;v++)l.push(f.r,f.g,f.b)}i.setAttribute("color",new at(l,3));const d=new Gt(i,new so({vertexColors:!0,flatShading:!0}));return d.rotation.z=.25,d}function fr(n,e,t){const i=new Nn,s=Ha[n]||"#999";if(n==="gen")i.add(ke(new Rt(.6,.7,1.2,6),$e(s,e),0,.6),ke(new Rt(.25,.25,.6,6),$e("#4b5063",e),0,1.5),ke(new ds(.62,.1,4,12),$e("#4b5063",e),0,.9)),i.children[2].rotation.x=Math.PI/2;else if(n==="mine")i.add(ke(new an(1,.4,1),$e("#6f6355",e),0,.2),ke(new Bi(.55,2.1,4),$e(s,e),0,1.4),ke(new an(.2,.2,1.4),$e("#4b5063",e),0,2.2));else if(n==="lab"||n==="slab"){if(i.add(ke(new Rt(.5,.6,2,6),$e(s,e),0,1),ke(new cs(.58,8,4,0,Math.PI*2,0,Math.PI/2),$e(en,e),0,2)),t){const r=ke(new Fr(.42),Jn("#9fe0ff"),0,3);r.name="orb",i.add(r)}}else if(n==="shield")i.add(ke(new cs(1,10,5,0,Math.PI*2,0,Math.PI/2),new so({color:s,transparent:!0,opacity:.75,flatShading:!0})));else if(n==="relay")i.add(ke(new Rt(.1,.16,2.8,4),$e(en,e),0,1.4),ke(new ds(.5,.08,4,12),$e(s,e),0,2.4),ke(new ds(.32,.08,4,12),$e(s,e),0,1.8));else if(n==="habitat")i.add(ke(new Rt(.9,.9,.7,8),$e(s,e),0,.35),ke(new cs(.75,8,4,0,Math.PI*2,0,Math.PI/2),$e(en,e),0,.7));else if(n==="barracks")i.add(ke(new an(1.6,.9,1),$e(s,e),0,.45),ke(new Bi(.75,.6,4),$e(Uc(s,.75),e),0,1.2)),i.children[1].rotation.y=Math.PI/4;else if(n==="shipyard"){for(const r of[-.8,.8])i.add(ke(new an(.2,2,.2),$e(s,e),r,1));i.add(ke(new an(1.9,.22,.3),$e(s,e),0,2))}else if(n==="sensor"){const r=ke(new Bi(.7,.45,10,1,!0),$e(s,e),0,1.4);r.rotation.x=Math.PI*.8,i.add(ke(new Rt(.08,.08,1.2,4),$e("#4b5063",e),0,.6),r)}return i}const Sx=["lab","gen","mine","shield","habitat","relay"],Gf=[150,30,210,-30].map(n=>n*Math.PI/180);function Mx(n,e){const t=En(n);if(n.kind==="planet"){const s=Math.PI*(.92+.13*Math.ceil(e/2)*(e%2?1:-1));return{x:Math.cos(s)*(t*2.1+2.2),y:.7,z:Math.sin(s)*(t*2.1+2.2),a:s}}const i=Gf[e%4];return{x:Math.cos(i)*t*2.25,y:t*.5+t*.55+.55,z:Math.sin(i)*t*2.25,a:i}}function Hf(n,e,t=1){const i=new Nn;if(i.add(ke(new Rt(1,1.1,.35,6),$e("#e6dcc6"),0,.17)),i.add(ke(new Bi(.95,2.3,7),$e(n),0,.35+1.15)),i.add(ke(new Rt(.98,.98,.18,7),$e(Uc(n,.7)),0,.55)),i.add(ke(new Hr(.72,0),$e(n),0,.35+2.3+.35)),e){const s=ke(new Rt(.55,.42,.45,5,1,!0),$e(Gn),0,3.7);s.material.side=qn,i.add(s)}return i.scale.setScalar(t),i}function bx(n,e,t,i,s){const r=new Nn,a=En(e),o=t==="detected",l=t==="stale"?.35:0,c=o?Hs:i===0?Bf:Xn(n,i);let d=null;const u=new Gt(new no(a*1.05,24),Jn("#0c101e",.4));if(u.rotation.x=-Math.PI/2,u.position.y=.02,r.add(u),o){const v=e.kind==="planet"?new Gt(new Hr(a,1),Jn(Hs,.9)):new Gt(new Rt(a,a,a*1.1,6),Jn(Hs,.9));return v.position.y=Ns(e),r.add(v),{grp:r,spin:d,orb:null}}if(i!==0&&r.add(Nc(a*1.45,a*1.62,c,.06,0,Math.PI*2,l?.5:1)),e.kind==="planet"){const v=xx(e,a,l);if(v.position.y=a*1.5,r.add(v),d=v,e.size===2){const p=new Gt(new ds(a*1.55,a*.09,4,28),$e($l[e.id%5][2],l));p.rotation.x=Math.PI/2-.3,p.rotation.y=.2,p.position.y=a*1.5,r.add(p)}const x=[];for(const p of Sx)for(let E=0;E<Math.min(4,e.b[p]||0);E++)x.push(p);const g=Math.min(Math.PI*1.3,x.length*.5),m=a*1.25+1.6;x.forEach((p,E)=>{const M=-Math.PI/2+(x.length>1?-g/2+g*E/(x.length-1):0),w=fr(p,l,s&&p==="lab");w.position.set(Math.cos(M)*m,0,Math.sin(M)*m*.9),r.add(w)})}else{const v=a*.5,x=a*1.1,g=e.citadel?"#57526f":zf;r.add(ke(new Rt(a,a*.92,x,6),$e(g,l),0,v+x/2)),r.add(ke(new Rt(a*.92,a*.35,a*.45,6),$e(e.citadel?"#413d57":"#b8ad96",l),0,v-a*.22)),r.add(ke(new Rt(a*.5,a*.68,a*.4,6),$e(c,l),0,v+x+a*.2));const m=v+x;if(e.citadel){r.add(ke(new Bi(a*.3,a*1.9,6),$e(c,l),0,m+a*1.35));const E=ke(new ds(a*1.6,a*.07,4,32),$e(c,l),0,v+x*.6);E.rotation.x=Math.PI/2,r.add(E),d=E}else(e.home||e.capital)&&r.add(ke(new Rt(a*.07,a*.07,a*.9,4),$e(en,l),0,m+a*.8));const p=Math.min(4,Rr(e));for(let E=0;E<p;E++){const M=Gf[E],w=a*1.25,T=ke(new an(w,a*.14,a*.3),$e("#b8ad96",l),Math.cos(M)*(a*.9+w/2),v+x/2,Math.sin(M)*(a*.9+w/2));T.rotation.y=-M,r.add(T),r.add(ke(new Rt(a*.42,a*.42,a*.1,6),$e(c,l),Math.cos(M)*a*2.25,v+x/2+a*.05,Math.sin(M)*a*2.25))}for(let E=0;E<Math.min(3,e.b.turret||0);E++){const M=Math.PI/2+(E-1)*1.05,w=Math.cos(M)*a*.8,T=Math.sin(M)*a*.8;r.add(ke(new an(.8,.8,.8),$e(Ha.turret,l),w,m+.4,T)),r.add(ke(new an(.22,.22,1.3),$e("#4b5063",l),w,m+.55,T+.7))}if(e.b.slab){const E=fr("slab",l,s);E.position.set(-a*.35,m+a*.3,-a*.35),E.scale.setScalar(.9),r.add(E)}if(e.b.sensor){const E=fr("sensor",l,!1);E.position.set(a*.4,m,-a*.4),r.add(E)}if(e.b.barracks){const E=fr("barracks",l,!1);E.position.set(-a*.75,v+x*.35,-a*1.25),r.add(E)}if(e.b.shipyard){const E=fr("shipyard",l,!1);E.position.set(a*.8,v+x*.2,-a*1.3),r.add(E)}for(let E=0;E<Math.min(4,e.b.sshield||0);E++){const M=-Math.PI/2+(E-1.5)*.55;r.add(ke(new cs(.55,8,4,0,Math.PI*2,0,Math.PI/2),$e(Ha.sshield,l),Math.cos(M)*a*.6,m,Math.sin(M)*a*.6))}}const h=ke(new cs(a*(e.kind==="planet"?1.75:1.7),16,10),new so({color:"#bfe3ff",transparent:!0,opacity:0,depthWrite:!1,flatShading:!0}),0,e.kind==="planet"?a*1.5:a*1.05);h.name="bubble",h.renderOrder=2,r.add(h);const f=r.getObjectByName("orb")||null;return{grp:r,spin:d,orb:f}}function yx(n,e,t){const i=new Nn,s=new Nn;if(t)s.add(ke(new Fr(.9),Jn(n)),ke(new Fr(1.4),Jn(n,.3)));else{const a=new Gt(new Bi(.55,2.6,4),$e(zf));a.rotation.z=-Math.PI/2,a.scale.set(1,1,1.5),s.add(a,ke(new an(.9,.12,2.6),$e(n),-.6),ke(new an(.7,.7,.12),$e(n),-.9,.4)),e.forEach((o,l)=>{const c=Hf(o,o===Gn,.34);c.position.set(-.2-l*.55,.1,(l%2?-1:1)*.55*(l?1:0)),s.add(c)}),s.scale.setScalar(1.35)}s.name="model";const r=new Gt(new no(1.2,12),Jn("#0c101e",.35));return r.rotation.x=-Math.PI/2,r.name="shadow",i.add(s,r),i}function Lt(n,e,t=0){return Xo.set(n,t,e).project(Ci),{x:(Xo.x*.5+.5)*Yl,y:(-Xo.y*.5+.5)*Kl}}function Ex(n){return Lt(n.x,n.y,Ns(n))}function mu(n,e,t,i,s,r,a,o,l){n.font=`800 ${r?13:12}px system-ui`;const c=Math.max(r?30:24,n.measureText(s).width+12),d=r?18:16,u=d+8;n.strokeStyle=en,n.lineWidth=2,n.lineCap="round",n.beginPath(),n.moveTo(e,t),n.lineTo(e,t-u),n.stroke();const h=Math.sin(o/420+l)*1.6,f=t-u;n.globalAlpha=a?.6:1,n.fillStyle=i,n.beginPath(),n.moveTo(e+1,f),n.lineTo(e+c,f+h),n.lineTo(e+c-5,f+d/2+h),n.lineTo(e+c,f+d+h),n.lineTo(e+1,f+d),n.closePath(),n.fill(),n.fillStyle=Uc(i,.78),n.fillRect(e+1,f+d-3,c-4,3),n.fillStyle=Ii,n.textAlign="center",n.textBaseline="middle",n.fillText(s,e+c/2-1,f+d/2-.5+h/2),n.globalAlpha=1}function Tx(n,e,t,i){switch(n.save(),n.translate(t,i),n.fillStyle=Ii,n.strokeStyle=Ii,n.lineWidth=1.6,n.lineJoin="round",n.lineCap="round",n.beginPath(),e){case"mine":n.moveTo(-6,5),n.lineTo(-1,-5),n.lineTo(2,0),n.lineTo(4,-2),n.lineTo(7,5),n.closePath(),n.fill();break;case"gen":n.moveTo(1,-6),n.lineTo(-4,1),n.lineTo(0,1),n.lineTo(-1,6),n.lineTo(4,-1),n.lineTo(0,-1),n.closePath(),n.fill();break;case"lab":case"slab":n.moveTo(-2,-6),n.lineTo(2,-6),n.moveTo(-1.5,-6),n.lineTo(-1.5,-1),n.lineTo(-5,5),n.lineTo(5,5),n.lineTo(1.5,-1),n.lineTo(1.5,-6),n.stroke(),n.beginPath(),n.moveTo(-3.5,2.5),n.lineTo(3.5,2.5),n.lineTo(5,5),n.lineTo(-5,5),n.fill();break;case"shield":case"sshield":n.moveTo(0,-6),n.lineTo(5,-4),n.lineTo(4,2),n.lineTo(0,6),n.lineTo(-4,2),n.lineTo(-5,-4),n.closePath(),e==="shield"?n.fill():n.stroke();break;case"turret":n.arc(-1,1,3.5,0,7),n.fill(),n.beginPath(),n.moveTo(1,-1),n.lineTo(6,-5),n.stroke();break;case"habitat":n.arc(0,2,5,Math.PI,0),n.lineTo(5,4),n.lineTo(-5,4),n.closePath(),n.fill();break;case"unused":n.moveTo(-6,5),n.lineTo(-6,-4),n.lineTo(-3,-4),n.lineTo(-3,-1),n.lineTo(-1,-1),n.lineTo(-1,-4),n.lineTo(1,-4),n.lineTo(1,-1),n.lineTo(3,-1),n.lineTo(3,-4),n.lineTo(6,-4),n.lineTo(6,5),n.closePath(),n.fill();break;case"sensor":n.arc(0,-1,5,Math.PI*.15,Math.PI*.85),n.stroke(),n.beginPath(),n.moveTo(0,-1),n.lineTo(0,6),n.stroke();break;case"relay":n.moveTo(0,6),n.lineTo(0,-3),n.stroke(),n.beginPath(),n.arc(0,-3,3,Math.PI*1.15,Math.PI*1.85),n.stroke(),n.beginPath(),n.arc(0,-3,6,Math.PI*1.2,Math.PI*1.8),n.stroke();break;case"barracks":n.moveTo(-5,0),n.lineTo(0,-4),n.lineTo(5,0),n.moveTo(-5,5),n.lineTo(0,1),n.lineTo(5,5),n.stroke();break;case"shipyard":n.moveTo(6,0),n.lineTo(-4,-5),n.lineTo(-2,0),n.lineTo(-4,5),n.closePath(),n.fill();break;case"dock":n.moveTo(-5,-4),n.lineTo(-5,4),n.lineTo(5,4),n.lineTo(5,-4),n.stroke();break}n.restore()}const wx=["lab","slab","gen","mine","shield","sshield","habitat","relay","turret","sensor","barracks","shipyard","dock"];function Ax(n,e,t,i){_r||gx();const{cam:s,w:r,h:a}=t,o=s.z;(pu!==e.seed||!ts)&&(_x(e),pu=e.seed),(Yl!==r||Kl!==a)&&(Yl=r,Kl=a,_r.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),_r.setSize(r,a,!1),Ci.aspect=r/a,Ci.updateProjectionMatrix());const l=a/(o*2*Math.tan(kf*Math.PI/360));Ci.position.set(s.x,l*Math.sin(Wl),s.y+l*Math.cos(Wl)),Ci.lookAt(s.x,0,s.y),Ci.updateMatrixWorld(),i-Xl>350&&(Xl=i,vx(e,i)),Ds.length=0;for(const p of e.nodes){const E=ui(e,p),M=Fs.get(p.id);if(E.tier==="hidden"){M&&(fi(M.grp),Fs.delete(p.id));continue}const w=E.tier==="live",T=w?p.b:e.intel[p.id].snap?.b||{},_=0,S=p.owner===k&&p.lane?Math.round((1-p.lane.left/p.lane.total)*24):-1,P=E.tier==="detected"?[]:w?p.specs:e.intel[p.id].snap?.specs||[],C=p.owner===k&&!!p.research,R=[E.tier,E.owner,JSON.stringify(T),_,S,P.join("."),C].join("|");if(M&&M.sig===R)continue;M&&fi(M.grp);const N=bx(e,w?p:{...p,b:T},E.tier,E.owner,C),B=En(p);S>=0&&N.grp.add(Nc(B*1.74,B*1.9,Gn,.08,Math.PI/2,Math.max(.05,S/24*Math.PI*2)));const L=[],G=P.slice(0,4),X=2.5;G.forEach((F,ne)=>{const q=e.specs[F],j=(ne-(G.length-1)/2)*X,te=B*1.55+1.6+ne%2*.4,Me=Hf(F===e.cmdSpec?Gn:ft[q.def].color,F===e.cmdSpec);Me.position.set(j,0,te),N.grp.add(Me),L.push({spec:F,x:j,z:te})}),N.grp.position.set(p.x,0,p.y),gn.add(N.grp),Fs.set(p.id,{sig:R,...N,statues:L})}for(const[p,E]of Fs){E.spin&&(E.spin.rotation.y=i/6e3),E.orb&&(E.orb.rotation.y=i/400,E.orb.position.y=3+.2*Math.sin(i/300));const M=e.nodes[p],w=E.grp.getObjectByName("bubble");if(w){const T=ui(e,M),_=T.tier==="live"?M.shields+Pr(e,M):0,S=Math.max(1,wr(e,M)+Pr(e,M));w.material.opacity=_>.5?.06+.2*Math.min(1,_/S):0,w.visible=_>.5}for(const T of E.statues){const _=Lt(M.x+T.x,M.y+T.z,mx*.65);Ds.push({x:_.x,y:_.y,r:Math.max(12,o*1.6),spec:T.spec})}}const c=e.corridors.map(p=>`${p.a}-${p.b}-${p.owner}-${p.until?1:0}`).join(",");if(c!==ql){Ni&&fi(Ni),Ni=new Nn,ql=c;for(const p of e.corridors){const E=e.nodes[p.a],M=e.nodes[p.b],w=Xn(e,p.owner),T=Math.hypot(M.x-E.x,M.y-E.y),_=new Nn;_.add(ke(new Rt(.35,.35,T,6,1,!0),Jn(w,p.until?.55:.95))),_.add(ke(new Rt(.9,.9,T,8,1,!0),Jn(w,.18))),_.position.set((E.x+M.x)/2,.8,(E.y+M.y)/2),_.rotation.set(0,-Math.atan2(M.y-E.y,M.x-E.x),Math.PI/2,"YXZ"),Ni.add(_)}gn.add(Ni)}const d=new Set,u=[],h=new Map;for(const p of e.ships)if(p.at>=0)ui(e,e.nodes[p.at]).tier==="live"&&(h.has(p.at)||h.set(p.at,[]),h.get(p.at).push(p));else{const E=Ja(e,p);E&&u.push({s:p,seen:E})}const f=(p,E)=>{d.add(p.id);const M=E===2?p.specs:[],w=M.map(S=>S===e.cmdSpec?Gn:ft[e.specs[S].def].color),T=`${p.owner}|${p.lane?1:0}|${M.join(".")}`;let _=Pi.get(p.id);return(!_||_.sig!==T)&&(_&&fi(_.grp),_={sig:T,grp:yx(p.owner===0?"#d9d9d9":Xn(e,p.owner),w,!!p.lane),statues:M.slice()},gn.add(_.grp),Pi.set(p.id,_)),_.grp},v=(p,E)=>{const M=Pi.get(p.id);M&&M.statues.forEach((w,T)=>{const _=Lt(p.x,p.y,E+1.2);Ds.push({x:_.x-T*10,y:_.y,r:12,spec:w})})};for(const[p,E]of h){const M=e.nodes[p],w=Math.min(M.kind==="planet"?6:4,Rr(M)),T=En(M);E.sort((_,S)=>_.seq-S.seq).slice(0,8).forEach((_,S)=>{const P=f(_,2),C=P.getObjectByName("model"),R=P.getObjectByName("shadow");if(S<w){const N=Mx(M,S),B=_.loadUntil>0?.5+.3*Math.sin(i/150):0;P.position.set(M.x+N.x,0,M.y+N.z),P.rotation.y=-N.a,C.position.y=N.y+B,C.rotation.x=0,R.visible=M.kind==="planet",R.position.y=.04;const L=Lt(M.x+N.x,M.y+N.z,N.y+1.4);(Pi.get(_.id)?.statues||[]).forEach((G,X)=>Ds.push({x:L.x-X*10,y:L.y,r:12,spec:G}))}else{const N=i/1500+(S-w)*1.6,B=T*3.1;P.position.set(M.x+Math.cos(N)*B,0,M.y+Math.sin(N)*B),P.rotation.y=-(N+Math.PI/2),C.position.y=Ns(M)+T*.9,C.rotation.x=-.45,R.visible=!1}})}for(const{s:p,seen:E}of u){const M=f(p,E),w=e.nodes[p.to],T=M.getObjectByName("model");M.position.set(p.x,0,p.y),M.rotation.y=-Math.atan2(w.y-p.y,w.x-p.x);const _=p.lane?.8:3+.25*Math.sin(i/400+p.id);T.position.y=_,T.rotation.x=0,p.lane&&(T.rotation.y=i/300);const S=M.getObjectByName("shadow");S.visible=!p.lane,S.position.y=.04,v(p,_)}for(const[p,E]of Pi)d.has(p)||(fi(E.grp),Pi.delete(p));const x=t.sel?.type==="node"?e.nodes[t.sel.id]:null;if(Us.visible=yr.visible=!!x&&x.owner===k,Er.visible=!!x,x&&(Er.position.set(x.x,.12,x.y),Er.scale.setScalar(En(x)*2.05),Us.visible)){const[p,E]=Za(e,x);Us.position.set(x.x,.1,x.y),Us.scale.setScalar(p),yr.position.set(x.x,.1,x.y),yr.scale.setScalar(E)}_r.render(gn,Ci),n.clearRect(0,0,r,a),n.lineCap="round";for(const{s:p}of u){if(p.lane)continue;const E=e.nodes[p.to],M=Lt(p.x,p.y),w=Lt(E.x,E.y),T=p.owner===0?"#d9d9d9":Xn(e,p.owner);n.strokeStyle=Ui(T,.8),n.lineWidth=2.5,n.setLineDash([.1,9]),n.lineDashOffset=-i/50,n.beginPath(),n.moveTo(M.x,M.y),n.lineTo(w.x,w.y),n.stroke(),n.setLineDash([])}for(const p of e.nodes)if(p.owner===k)for(const E of[p.lane,...p.queue]){if(!E||E.kind!=="corridor")continue;const M=e.nodes[+E.id],w=Lt(p.x,p.y,.8),T=Lt(M.x,M.y,.8),_=E===p.lane?1-E.left/E.total:0;n.strokeStyle=Ui(en,.4),n.lineWidth=2,n.setLineDash([4,6]),n.beginPath(),n.moveTo(w.x,w.y),n.lineTo(T.x,T.y),n.stroke(),n.setLineDash([]),_>0&&(n.strokeStyle=Gn,n.lineWidth=3,n.beginPath(),n.moveTo(w.x,w.y),n.lineTo(w.x+(T.x-w.x)*_,w.y+(T.y-w.y)*_),n.stroke())}if(t.targeting&&t.from>=0&&t.hover>=0&&t.hover!==t.from){const p=Lt(e.nodes[t.from].x,e.nodes[t.from].y),E=Lt(e.nodes[t.hover].x,e.nodes[t.hover].y);n.strokeStyle=en,n.lineWidth=3,n.setLineDash([.1,9]),n.beginPath(),n.moveTo(p.x,p.y),n.lineTo(E.x,E.y),n.stroke(),n.setLineDash([])}const g=e.specs[e.cmdSpec],m=e.nodes.filter(p=>ui(e,p).tier!=="hidden").sort((p,E)=>p.y-E.y);for(const p of m){const E=ui(e,p),M=Lt(p.x,p.y,px(p));if(M.x<-80||M.y<-40||M.x>r+80||M.y>a+160)continue;const w=Lt(p.x,p.y),T=E.tier==="detected",_=E.tier==="stale",S=T?Hs:E.owner===0?Bf:Xn(e,E.owner),P=En(p)*o;if(t.targeting&&p.id!==t.from&&(t.glow?t.glow.has(p.id):eo(e,p)||p.owner===k)){const R=t.glow?Gn:en;n.strokeStyle=Ui(R,.45+.35*Math.sin(i/250)),n.lineWidth=t.glow?4:2.5,t.glow&&(n.shadowColor=Gn,n.shadowBlur=14),n.beginPath(),n.ellipse(w.x,w.y,P*2.3,P*2.3*zi,0,0,7),n.stroke(),n.shadowBlur=0}let C=Lt(p.x,p.y+En(p)*1.55+3.4).y+8;if(T){const R=Lt(p.x,p.y,Ns(p));n.fillStyle=en,n.font="800 14px system-ui",n.textAlign="center",n.textBaseline="middle",n.globalAlpha=.8,n.fillText("?",R.x,R.y),n.globalAlpha=1,C=w.y+P*1.4*zi+10}else{const R=p.home?"⌂ ":p.citadel?"✦ ":p.capital?"♛ ":"";mu(n,M.x,M.y+2,S,R+(_?"~":"")+E.drones,p.home||p.capital||p.citadel,_,i,p.id);let N=w.x+P*1.7+8;const B=Lt(p.x,p.y,Ns(p)).y,L=(F,ne)=>{n.fillStyle=ne,n.beginPath(),n.roundRect(N-8,B-8,16,16,4),n.fill(),n.fillStyle=Ii,n.font="800 11px system-ui",n.textAlign="center",n.textBaseline="middle",n.fillText(F,N,B+.5),N+=19};p.event&&L("!",Gn),p.offer&&p.owner!==k&&L("☺","#e9a9c9"),p.hold&&L("◷","#a9dcec"),p.owner===k&&p.prisoners.length&&L("⛓","#e6a183"),g&&g.held&&g.node===p.id&&L("★","#e2604e");const G=h.get(p.id)||[],X=Math.min(p.kind==="planet"?6:4,Rr(p));if(G.length>X){const F=En(p)*3.1,ne=Ns(p)+En(p)*.9;n.strokeStyle=Ui(en,.45),n.lineWidth=1.5,n.setLineDash([4,6]),n.beginPath();for(let q=0;q<=40;q++){const j=q/40*Math.PI*2,te=Lt(p.x+Math.cos(j)*F,p.y+Math.sin(j)*F,ne);n[q?"lineTo":"moveTo"](te.x,te.y)}n.stroke(),n.setLineDash([])}}if(o>4.5&&(n.font="700 10px system-ui",n.textAlign="center",n.textBaseline="middle",n.lineJoin="round",n.strokeStyle="rgba(29,35,53,0.7)",n.lineWidth=3,n.strokeText(p.name.toUpperCase(),w.x,C),n.fillStyle=Ui(en,T?.45:.85),n.fillText(p.name.toUpperCase(),w.x,C),C+=15),!T&&o>3.2){const R=E.tier==="live"?p.b:e.intel[p.id].snap?.b||{},N=wx.filter(X=>(R[X]||0)>0),B=X=>(R[X]||0)>1?30:20,L=N.reduce((X,F)=>X+B(F)+3,-3);let G=w.x-L/2;n.globalAlpha=_?.65:1;for(const X of N){const F=B(X),ne=(X==="lab"||X==="slab")&&p.owner===k&&p.research;if(n.fillStyle=Ha[X],n.beginPath(),n.roundRect(G,C-9,F,18,5),n.fill(),ne){const q=e.sides[k],j=(q.techProg[p.research]||0)/Ya[ut[p.research].tier];n.strokeStyle="#9fe0ff",n.lineWidth=2.5,n.beginPath(),n.roundRect(G-1.5,C-10.5,F+3,21,6),n.stroke(),n.fillStyle=Ii,n.fillRect(G+2,C+6,(F-4)*Math.min(1,j),2)}Tx(n,X,G+10,C),(R[X]||0)>1&&(n.fillStyle=Ii,n.font="800 10px system-ui",n.textAlign="center",n.textBaseline="middle",n.fillText(String(R[X]),G+23,C+.5)),G+=F+3}n.globalAlpha=1}}for(const{s:p,seen:E}of u){const M=Lt(p.x,p.y,p.lane?2.2:4.4),w=p.owner===0?"#d9d9d9":Xn(e,p.owner);if(t.sel?.type==="ship"&&t.sel.id===p.id){const T=Lt(p.x,p.y);n.strokeStyle=en,n.lineWidth=2,n.beginPath(),n.ellipse(T.x,T.y,16,16*zi,0,0,7),n.stroke()}mu(n,M.x,M.y,w,E===2?String(p.drones):"?",!1,!1,i,p.id),E===2&&p.specs.forEach((T,_)=>{const S=M.x-9-_*15,P=M.y-12,C=T===e.cmdSpec?Gn:ft[e.specs[T].def].color;n.fillStyle=C,n.beginPath(),n.arc(S,P,7,0,7),n.fill(),n.strokeStyle=Ii,n.lineWidth=1.5,n.stroke(),n.fillStyle=Ii,n.font="800 8px system-ui",n.textAlign="center",n.textBaseline="middle",n.fillText(T===e.cmdSpec?"★":ft[e.specs[T].def].tag,S,P+.5),Ds.push({x:S,y:P,r:9,spec:T})})}}const Et=n=>(n=Math.max(0,Math.floor(n)),`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`),Ue=n=>n.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),ks=(n,e="")=>`<div class="bar ${e}"><i style="width:${Math.max(0,Math.min(100,n*100)).toFixed(1)}%"></i></div>`,tt=(n,e,t={})=>`<button data-a="${n}" class="btn ${t.cls||""}" ${t.off?"disabled":""}>${e}${t.sub?`<small>${t.sub}</small>`:""}${t.off?`<small class="why">${Ue(t.off)}</small>`:""}</button>`;function Si(n,e,t=!1){const i=ft[e.def],s=e.id===n.cmdSpec;return`<span class="tok ${t?"big":""} ${s?"cmd":""}" style="--c:${s?"#e8bd55":i.color}">${s?"★":i.tag}</span>`}const gu=n=>`<span class="tok big" style="--c:${ft[n].color}">${ft[n].tag}</span>`;function Rx(n){const e=n.g,t=e.sides[k],i=hh(e,k),s=e.mob,r=e.specs[e.cmdSpec];let a="";if(r&&r.held&&e.cmdLostT>=0){const l=gc(e)-(e.t-e.cmdLostT);a=`<div class="banner bad" data-a="focus:${r.node}">★ COMMANDER CAPTURED at ${Ue(e.nodes[r.node].name)}. Retake it in <b>${Et(l)}</b></div>`}else if(n.mode)a=`<div class="banner">${{launch:"Tap a destination",redirect:"Tap a new destination",ability:"Tap a target",corridor:"Tap a glowing node to link a corridor",route:"Tap a glowing node to send through corridors"}[n.mode.k]} <button class="btn sm" data-a="cancelmode">Cancel</button></div>`;else if(e.offs.length){const l=e.offs[0];a=`<div class="banner warn" ${l.warned?`data-a="focus:${l.target}"`:""}>⚠ ${Ue(jn(e,l.owner))} offensive ${l.warned?`on ${Ue(e.nodes[l.target].name)} `:""}launches in ${Et(l.launchT-e.t)}</div>`}const o=[1,2,3,4,5].map(l=>`<i class="${l<=s.stage?"on":""}"></i>`).join("");return`<div class="hudrow">
    <div class="stat" title="Ultanium"><b class="ult">◆ ${Math.floor(t.ult)}</b><small>+${i.toFixed(1)}/min</small></div>
    <div class="stat" title="Drones / global cap"><b>⬢ ${Vi(e,k)}</b><small>/ ${_i(e,k)}</small></div>
    <div class="stat mob" data-a="menu:intel" title="Coalition mobilization"><span class="pips">${o}</span>${ks(s.prog,"red")}<small>${s.surge?`TOTAL WAR +${s.surge}`:`MOBILIZATION ${s.stage}/5`}</small></div>
    <div class="grow"></div>
    <div class="stat time"><b>${Et(e.t)}</b></div>
    <button class="btn ico ${n.paused?"hot":""}" data-a="pause" title="Pause (space)">${n.paused?"▶":"❚❚"}</button>
    <button class="btn ico" data-a="speed" title="Speed">${n.speed}×</button>
    <button class="btn ico desk" data-a="console" title="Tuning console (\`)">⚙</button>
    <button class="btn ico" data-a="menu:specs" title="Menu (M)">☰</button>
  </div>${a}`}function Cx(n,e,t){const i=to(n,e,t.id),s=t.at==="ship"?"in flight":t.at==="planet"?"on a planet":t.at==="node"?"at a node":"";return`<button class="abil" data-a="ability:${e.id}:${t.id}" ${i>0?"disabled":""}><b>${t.name}</b>${i>0?`<em>${Et(i)}</em>`:"<em>ready</em>"}<span>${t.desc}${s?` <i>Use ${s}.</i>`:""}</span></button>`}function Px(n,e){const t=ft[e.def];let i=ii(e),s=t.passive;if(e.cmd){const o=Gi[e.cmd.arch];i=`Commander · ${t.name} ${o.name} · L${e.cmd.lvl}`,s=`${t.passive} ${o.passive}`}const r=e.owner===k?"":`<small class="bad">${Ue(jn(n,e.owner))}</small>`,a=kr(e).map(o=>{const l=e.owner===k?to(n,e,o.id):0;return`<p><b>${o.name}</b> <small>${l>0?Et(l):`${o.cd}s cooldown`}</small><br>${o.desc}</p>`}).join("");return`<div class="tiphead">${Si(n,e,!0)}<div><b>${Ue(i)}</b><small>${t.role}</small>${r}</div></div><p>${s}</p>${a}`}function Fc(n,e,t=!1,i=!0){const s=ft[e.def];let r=ii(e),a=s.passive;if(e.cmd){const u=Gi[e.cmd.arch];r=`Commander · ${s.name} ${u.name} · L${e.cmd.lvl}`,a=`${s.passive} ${u.passive}`}let o="";if(t)if(e.held)o=`<small class="bad">Prisoner at ${Ue(n.nodes[e.node].name)}</small>`;else if(e.node>=0)o=`<small data-a="focus:${e.node}" class="link">at ${Ue(n.nodes[e.node].name)}</small>`;else{const u=qt(n,e.ship);o=`<small>aboard a ship${u&&u.to>=0?` to ${Ue(n.nodes[u.to].name)}`:""}</small>`}const l=e.cmd?.perks.length?`<p class="perks">${e.cmd.perks.map(u=>`<span title="${Ue(Yo(u).desc)}">${Yo(u).name}</span>`).join("")}</p>`:"",c=e.cmd&&e.cmd.lvl<5?ks((e.cmd.xp-se.xpLevels[e.cmd.lvl-1])/(se.xpLevels[e.cmd.lvl]-se.xpLevels[e.cmd.lvl-1]),"gold"):"",d=i&&e.owner===k&&!e.held?kr(e).map(u=>Cx(n,e,u)).join(""):"";return`<div class="spec">${Si(n,e,!0)}<div><h4>${Ue(r)} <small>${s.role}</small></h4>${o}<p>${a}</p>${l}${c}<div class="abils">${d}</div></div></div>`}const yn=n=>`${n>0?"+":""}${Math.round(n*100)}%`,_u={build:n=>`Build ${yn(n)}`,mine:n=>`Mines ${yn(n)}`,research:n=>`Research ${yn(n)}`,prod:n=>`Drones ${yn(n)}`,batch:n=>`Batch +${n}`,fov:n=>`Vision ${yn(n)}`,def:n=>`Shield +${n}`,shieldMax:n=>`Shield +${n}`,natRegen:n=>`Recharge ${yn(n)}`,speed:n=>`Speed ${yn(n)}`,atk:n=>`Attack +${n}`,atkPct:n=>`Attack ${yn(n)}`,atkPer8:()=>"Attack +1 per 8",vsNeutral:n=>`Neutrals −${n}`,ignStruct:()=>"Slips past turrets",ignNat:()=>"Ignores shields",structHalf:n=>`Turret losses −${Math.round(n*100)}%`,structDef:n=>`Turrets ${yn(n)}`,stealth:()=>"Unseen",surv:n=>`Survivors ${yn(n)}`,redirect:()=>"Can redirect",salvage:()=>"Salvage",noLoad:()=>"No loading",launchSpeed:n=>`Launch speed ${yn(n)}`,preKill:n=>`Lances ${Math.round(n*100)}%`,martyr:()=>"Martyr",mineSlots:n=>`Mine slots +${n}`,cap:n=>`Capacity +${n}`,corridor:n=>`Corridors ${yn(n)}`,medic:()=>"Escape once",sigint:()=>"Reads fleets",droneCap:n=>`Cap +${n}`,shipCost:n=>`Ships −${Math.round(n*100)}%`,ransom:()=>"Ransom ×2",prisonInc:n=>`Prisoners +${n}/min`,warn:()=>"Warns of attacks",remember:()=>"Long memory"};function vu(n){return Object.keys(n).filter(e=>n[e]&&_u[e]).map(e=>_u[e](n[e]))}function Vf(n,e){return e.length?`<div class="prow">${e.map(i=>{const s=n.specs[i],r=vu(Ko(n,s)),a=vu(ft[s.def].glob||{}),o=(r.length?r:a.length?a:[s.def==="echo"?"Echoes a neighbour":ft[s.def].role]).slice(0,2).join(" · ");return`<span class="pchip" data-tip="${i}">${Si(n,s)}<span>${Ue(o)}</span></span>`}).join("")}</div>`:""}function Wf(n,e){let t=0;return{html:e.flatMap(s=>{const r=n.specs[s];return!r||r.owner!==k||r.held?[]:kr(r).map(a=>{const o=to(n,r,a.id),l=o>0?null:xc(n,r,{...a,target:"self"},null),c=o<=0&&!l;c&&t++;const d=o>0?Et(o):l||(a.target==="self"?"Ready":"Ready · then tap a target");return`<div class="arow ${c?"on":""}" data-tip="${r.id}">${Si(n,r)}<span><b>${a.name}</b><small>${Ue(d)} · ${a.desc}</small></span>${c?`<button class="btn sm hot" data-a="ability:${r.id}:${a.id}">Use</button>`:""}</div>`})}).join(""),ready:t}}function $f(n,e){const t=ms(n,0,{},e,n.sides[e.owner]?nn(n,e):{});return{def:t.def,shield:t.parts.shield+t.parts.aegis,max:wr(n,e)+t.parts.aegis,turrets:Pu(e,{},n.sides[e.owner]?nn(n,e):{})}}function Xf(n,e,t){const i=$f(n,e);return`<div class="kv"><div><small>GARRISON</small><b>⬢ ${e.drones}</b></div><div><small>SHIELD</small><b>◈ ${Math.floor(i.shield)}<i class="of">/${i.max}</i></b>${i.turrets?`<small>turrets kill ${i.turrets}</small>`:""}</div>${t}</div>`}function Lx(n,e){return e.length?`<div class="srow">${e.map(t=>{const i=t.loadUntil>0?"loading":vi(n,t)?"":"orbit",s=t.specs.map(r=>Si(n,n.specs[r])).join("");return`<button class="shipic ${i}" data-a="${t.loadUntil>0?"noop":`send:${t.id}`}"><span class="hull">▲${t.drones?`<i>${t.drones}</i>`:""}</span><span class="crew">${s}</span>${i?`<small>${i}</small>`:""}</button>`}).join("")}</div>`:'<p class="dim">No ship here.</p>'}function Dx(n,e){const t=n.g,i=nn(t,e),s=ac(t,e,i),r=t.sides[k],a=(e.b.lab||0)+(e.b.slab||0)>0,o=t.ships.filter(f=>f.at===e.id&&f.owner===k),l=e.specs.concat(o.flatMap(f=>f.specs)),c=Wf(t,l),d=["info"].concat(l.length||e.prisoners.length?["specs"]:[],["build"],a?["research"]:[]);d.includes(n.tab)||(n.tab="info");let u="";if(n.tab==="info"){if(u+=Xf(t,e,e.kind==="planet"?`<div><small>OUTPUT</small><b>◆ ${s.out.toFixed(1)}</b><small>of ${s.cap.toFixed(0)}/min</small></div>`:`<div><small>DOCKS</small><b>${Rr(e)}</b></div>`),e.kind==="planet"&&e.b.mine&&(u+=`<p class="dim">Mines ${s.on}/${e.b.mine||0} running</p>`),s.short>0&&(u+=`<p class="warnp">${s.short} Drone${s.short>1?"s":""} short: ${s.resNeed&&!s.resOn?"research paused":"some mines idle"}.</p>`),e.lane){const v=g=>g.kind==="ship"?"Ship":g.kind==="corridor"?`Corridor to ${t.nodes[+g.id].name}`:zt[g.id].name,x=e.lane;u+=`<div class="task"><div><b>${Ue(v(x))}</b><small>${Et(x.left)} left${e.kind==="station"?" · Drone production paused":""}</small>${ks(1-x.left/x.total,"gold")}</div><button class="btn sm" data-a="cancel:-1">✕</button></div>`,e.queue.forEach((g,m)=>u+=`<div class="task q"><div><b>${Ue(v(g))}</b><small>queued</small></div><button class="btn sm" data-a="cancel:${m}">✕</button></div>`)}else if(e.kind==="station"){const v=Vi(t,k)>=_i(t,k);u+=`<div class="task"><div><b>Producing Drones</b><small>${v?"Drone cap reached":`+${se.batch+(i.batch||0)} per batch`}</small>${ks(e.prod/se.batchTime)}</div></div>`}e.research&&(u+=`<div class="task"><div><b>Research: ${ut[e.research].name}</b><small>${s.resOn?`${Et(Bs(e.research)-(r.techProg[e.research]||0))} left`:"paused: not enough Drones"}</small>${ks((r.techProg[e.research]||0)/Bs(e.research),"blue")}</div></div>`),e.hold&&(u+=`<div class="task"><div><b>${Ue(e.hold.name)}</b><small>Hold with ${e.hold.need}+ Drones · ${Et(e.hold.until-t.t)} left</small>${ks(1-(e.hold.until-t.t)/e.hold.total,"blue")}</div></div>`),e.event&&(u+=tt("event",`! ${Un[e.event].name}`,{cls:"wide gold",sub:"Investigate"})),u+=`<h3>Ships</h3>${Lx(t,o)}`;const f=[];if(fc(t,e.id).length&&f.push(tt("route","⇄ Send via corridors",{cls:"hot"})),e.kind==="station"){const v=Math.min(se.musterSize,_i(t,k)-Vi(t,k)),x=v*gh(t);f.push(tt("muster",`⬢ Muster +${Math.max(0,v)}`,{sub:`◆ ${x}`,off:v<=0?"Drone cap reached":r.ult<x?"Not enough Ultanium":null}))}f.length&&(u+=`<div class="row">${f.join("")}</div>`)}else if(n.tab==="specs"){if(c.html&&(u+=`<h3>Abilities</h3>${c.html}`),l.length&&(u+=`<h3>Specialists <small>${e.specs.length}/${Hi(t,k)} here${o.some(f=>f.specs.length)?" · others aboard ships":""}</small></h3>`+l.map(f=>Fc(t,t.specs[f],!1,!1)).join("")),e.prisoners.length){const f=_t(t,k);u+="<h3>Prisoners</h3>";for(const v of e.prisoners){const x=t.specs[v],g=x.def==="warlord"||x.def==="archon",m=e.conv&&e.conv.spec===v?`<small>Converting: ${Et(e.conv.until-t.t)}</small>`:"";u+=`<div class="task"><div>${Si(t,x)} <b>${Ue(ii(x))}</b><small>${Ue(jn(t,x.owner))}</small>${m}</div>${g?"":tt(`ransom:${v}`,`Ransom +${Math.round(se.ransom*(1+(f.ransom||0)))}`,{cls:"sm"})+(f.recruit?tt(`recruit:${v}`,`Recruit ${se.recruitCost}`,{cls:"sm"}):"")}</div>`}}}else if(n.tab==="build"){const f=uc(t,e.id).filter(x=>!x.until).length,v=Fu(t);u+=tt("corridorpick",`⇄ Corridor <i class="cnt">${f}/${v}</i>`,{cls:"wide",sub:`◆ ${se.corridorCost} · ${se.corridorTime}s · then tap a glowing node to link it`,off:f>=v?"Maximum built":r.ult<se.corridorCost?"Not enough Ultanium":null}),e.kind==="station"&&(u+=tt("ship","▲ Ship",{cls:"wide",sub:`◆ ${Ar(t,k)} · ${se.shipTime}s · pauses Drone production`,off:r.ult<Ar(t,k)?"Not enough Ultanium":e.queue.length>=4?"Queue full":null}));for(const x in zt){const g=zt[x];g.on===e.kind&&(u+=tt(`build:${x}`,`${g.name} <i class="cnt">${ba(e,x)}/${Lu(t,e,x)}</i>`,{cls:"wide",sub:`◆ ${g.cost} · ${g.time}s · ${g.desc}`,off:Is(t,e,x)}))}u+='<p class="dim">Building and production share one lane per node. Research runs separately.</p>'}else u+=`<label class="chk"><input type="checkbox" data-a="resfirst" ${e.resFirst?"checked":""}> If Drones run short, keep research running before mines</label>`,e.research&&(u+=tt("research:",`Stop ${ut[e.research].name}`,{cls:"wide",sub:"Progress is kept"})),u+=qf(t,e);const h=f=>f==="info"?"Overview":f==="specs"?`Specialists${c.ready?` <i class="badge">${c.ready}</i>`:""}`:f==="build"?"Build":"Research";return`${Vf(t,e.specs)}<div class="tabs">${d.map(f=>`<button data-a="tab:${f}" class="${n.tab===f?"on":""}">${h(f)}</button>`).join("")}</div><div class="pbody">${u}</div>`}function qf(n,e){const t=n.sides[k];let i="";for(const s of fh){i+=`<h3>${s}</h3>`;const r=Object.values(ut).filter(o=>o.branch===s).sort((o,l)=>o.tier-l.tier),a=new Set;for(const o of r){if(a.has(o.id))continue;const l=o.excl?[o,ut[o.excl]]:[o];l.forEach(d=>a.add(d.id));const c=l.map(d=>{const u=!d.rep&&t.techs.includes(d.id),h=lc(n,k,d.id),f=t.techProg[d.id],v=cc(n,k,d.id),x=n.nodes.some(p=>p.owner===k&&p.id!==e?.id&&p.research===d.id),g=`${d.name}${d.rep?` <i class="cnt">L${h}/${d.rep}</i>`:""}`;if(u)return`<div class="tech done"><b>✓ ${d.name}</b><small>${d.desc}</small></div>`;if(!e)return`<div class="tech ${v&&v.startsWith("Locked")?"locked":""}"><b>${g}</b><small>${d.desc}${f!==void 0?` · ${Math.round(f/Bs(d.id)*100)}%`:""}${v?` · ${Ue(v)}`:""}</small></div>`;const m=v||(x?"In progress elsewhere":e.research===d.id?"Running here":f===void 0&&t.ult<Jo(n,k,d.id)?"Not enough Ultanium":null);return tt(`research:${d.id}`,g,{cls:`wide ${v&&v.startsWith("Locked")?"locked":""}`,sub:`${f===void 0?`◆ ${Jo(n,k,d.id)}`:`${Math.round(f/Bs(d.id)*100)}% done`} · ${Bs(d.id)}s · ${Iu(d.id)} Drones · ${d.desc}`,off:m})});i+=l.length>1?`<div class="doctrine"><small>DOCTRINE · choose one</small><div>${c.join("")}</div></div>`:c[0]}}return i}function Ix(n,e){const t=n.g,i=ui(t,e),s=rc(t,e);let r="";if(i.tier==="detected"||!s.v)r+='<p class="warnp">Detected only. Forces, structures and residents are unknown. Scout it with an unmanned ship (the ship is lost) or bring it inside full-intelligence range.</p>';else{const l=s.v,c=$f(t,l);s.live||(r+=`<p class="warnp">Last seen ${Et(s.age)} ago. This may be out of date.</p>`),r+=Xf(t,l,`<div><small>TO WIN</small><b>${c.def+1}+</b>${c.turrets?`<small>plus ${c.turrets} lost to turrets</small>`:""}</div>`),l.specs.length&&(r+=Vf(t,l.specs)),l.prisoners.some(d=>t.specs[d].owner===k)&&(r+=`<p class="warnp">Holding your people: ${l.prisoners.filter(d=>t.specs[d].owner===k).map(d=>Ue(ii(t.specs[d]))).join(", ")}</p>`),e.offer&&(r+='<p class="goodp">☺ Residents: capture this planet to recruit 1 of 3 specialists.</p>'),e.event&&(r+=`<p class="goodp">! Signal: ${Un[e.event].name}. Capture the node to investigate.</p>`),e.capital&&t.sides[l.owner]?.kind==="faction"&&(r+=`<p class="goodp">♛ Capital of the ${Qn[t.sides[l.owner].fac].name}. Capture it to take their Warlord and strip a Citadel Aegis layer.</p>`),e.citadel&&(r+=`<p class="goodp">✦ The Citadel. Capture it to win. Aegis ${Pr(t,e)} (falls as Warlords are captured).</p>`)}const a=t.ships.filter(l=>l.owner===k&&l.at>=0&&l.loadUntil===0).map(l=>({s:l,n:t.nodes[l.at]})).sort((l,c)=>Xe(l.n,e)-Xe(c.n,e));r+="<h3>Send a fleet here</h3>",a.length||(r+='<p class="dim">No idle ship available.</p>');const o=new Set;for(const{s:l,n:c}of a){if(o.has(c.id)&&vi(t,l))continue;o.add(c.id);const d=vi(t,l);r+=tt(`from:${l.id}`,`${Ue(c.name)}`,{cls:"wide",sub:`⬢ ${d?c.drones:l.drones} available · ${Et(pc(t,l,e))} flight${d?"":" · orbiting"}`})}return`<div class="pbody">${r}</div>`}function Wr(n,e){const t=n.nodes[e.at];return vi(n,e)?t.drones+e.drones:e.drones}function Yf(n,e){const t=qt(n,e.ship),i=n.nodes[t.at],s=nc(n,k,e.specs,[]),r=nn(n,i);return r.launchSpeed&&(s.speed=(s.speed||0)+r.launchSpeed),s}function Kf(n,e){const t=qt(n,e.ship),i=n.nodes[e.to],s=rc(n,i).v;if(!s)return 0;const r=Yf(n,e),a=nn(n,s),o=Wr(n,t);for(let l=1;l<=o;l++)if(ms(n,l,r,s,a).win)return l;return 0}function Zf(n,e){if(e.lane){const f=n.nodes[e.from],v=n.nodes[e.to];return`<div class="kv"><div><small>SENDING</small><b>⬢ ${e.drones}</b></div><div><small>ARRIVES IN</small><b>${Et(Xe(f,v)/(se.shipSpeed*se.corridorSpeed))}</b></div><div><small>STAYS</small><b>⬢ ${f.drones-e.drones}</b></div></div>`}const t=qt(n,e.ship);if(!t||t.at<0)return"";const i=n.nodes[t.at],s=n.nodes[e.to],r=Yf(n,e),a=Xe(i,s)/(se.shipSpeed*Math.max(.3,1+(r.speed||0)))+(r.noLoad||!e.drones&&!e.specs.length?0:se.loadTime);let o=`<div class="kv"><div><small>SENDING</small><b>⬢ ${e.drones}</b></div><div><small>ARRIVES IN</small><b>${Et(a)}</b></div><div><small>STAYS</small><b>⬢ ${Wr(n,t)-e.drones}</b></div></div>`;if(e.specs.includes(n.cmdSpec)&&(o+=`<p class="warnp">★ Commander aboard. If this fleet is destroyed at an enemy node they are captured, and you have ${Et(gc(n))} to retake that node.</p>`),s.owner===k)return o+`<p class="goodp">Reinforcement. Cargo unloads on arrival${s.kind==="station"?" if a dock is free":""}.</p>`;if(!e.drones&&!e.specs.length)return o+`<p class="warnp">Unmanned scout. It fully identifies the target on arrival${r.scoutReturn?" and flies home":" and is lost"}.</p>`;const l=rc(n,s);if(!l.v)return o+'<p class="badp"><b>Unknown forces. Battle outcome unavailable.</b></p>';const c=ms(n,e.drones,r,l.v,nn(n,l.v)),d=c.parts,u=[`${d.drones} Drones`].concat(d.pct?[`+${d.pct} training`]:[],d.flat?[`+${d.flat} specialists`]:[]).join(" "),h=[`${d.garr} Drones`].concat(d.shield?[`${d.shield} shield`]:[],d.aegis?[`${d.aegis} Aegis`]:[],d.bonus?[`${d.bonus} Diplomat`]:[]).join(" + ");return o+=`<div class="versus"><div><small>ATTACK</small><b>${c.atk}</b><span>${u}</span></div><i>vs</i><div><small>DEFENCE</small><b>${c.def}</b><span>${h}</span></div></div>`,d.turret&&(o+=`<p class="warnp">Turrets shoot down ${d.turret} Drones before landing.</p>`),d.lance&&(o+=`<p class="warnp">Lances destroy ${d.lance} more before landing.</p>`),o+=c.win?`<p class="goodp"><b>Victory expected.</b> ${c.surv} Drones survive to hold the node.</p>`:`<p class="badp"><b>Defeat expected.</b> Short by ${c.def-c.atk+1}. ${s.owner===0?"All Drones are lost; the ship and specialists return.":"The ship is destroyed and specialists aboard are captured."}</p>`,l.live?o+='<p class="dim">Based on what is there now. Reinforcements may arrive before you do.</p>':o+=`<p class="warnp">Based on intelligence ${Et(l.age)} old. The enemy may have changed.</p>`,o}function Nx(n){const e=n.g,t=n.launch,i=e.nodes[t.from],s=e.nodes[t.to];if(i.owner!==k||s.owner!==k)return n.launch=null,"";const r=i.specs.map(o=>{const l=e.specs[o];return`<button class="chip ${t.specs.includes(o)?"on":""}" data-a="lspec:${o}">${Si(e,l)} ${Ue(l.cmd?"Commander":ft[l.def].name)}</button>`}).join(""),a=Xe(i,s)/(se.shipSpeed*se.corridorSpeed);return`<div class="phead"><div><h2>${Ue(i.name)} ⇄ ${Ue(s.name)}</h2><small>Through the corridor · no ship, no loading</small></div><button class="btn ico" data-a="lcancel">✕</button></div>
  <div class="pbody">
    <input type="range" id="lslider" min="0" max="${i.drones}" value="${t.drones}">
    <div class="quick">${tt("lq:none","0",{cls:"sm"})}${tt("lq:half","Half",{cls:"sm"})}${tt("lq:all","All",{cls:"sm"})}</div>
    ${i.specs.length?`<div class="chips">${r}</div>`:""}
    <div id="preview"><div class="kv"><div><small>SENDING</small><b>⬢ ${t.drones}</b></div><div><small>ARRIVES IN</small><b>${Et(a)}</b></div><div><small>STAYS</small><b>⬢ ${i.drones-t.drones}</b></div></div></div>
    <div class="row">${tt("lcancel","Cancel")}${tt("lconfirm","Send",{cls:"hot grow"})}</div>
  </div>`}function Ux(n){if(n.launch.lane)return Nx(n);const e=n.g,t=n.launch,i=qt(e,t.ship);if(!i||i.at<0)return n.launch=null,"";const s=e.nodes[i.at],r=e.nodes[t.to],a=Wr(e,i),o=vi(e,i),l=o?s.specs.concat(i.specs):i.specs,c=l.map(d=>{const u=e.specs[d];return`<button class="chip ${t.specs.includes(d)?"on":""}" data-a="lspec:${d}" ${o?"":"disabled"}>${Si(e,u)} ${Ue(u.cmd?"Commander":ft[u.def].name)}</button>`}).join("");return`<div class="phead"><div><h2>${Ue(s.name)} → ${Ue(r.name)}</h2><small>${o?"Docked ship":"Orbiting ship: it leaves with what is aboard"}</small></div><button class="btn ico" data-a="lcancel">✕</button></div>
  <div class="pbody">
    <input type="range" id="lslider" min="0" max="${a}" value="${t.drones}" ${o?"":"disabled"}>
    <div class="quick">${tt("lq:none","0",{cls:"sm"})}${tt("lq:min","Just enough",{cls:"sm"})}${tt("lq:half","Half",{cls:"sm"})}${tt("lq:all","All",{cls:"sm"})}</div>
    ${l.length?`<div class="chips">${c}</div><p class="dim">Up to ${Hi(e,k)} specialists per ship.</p>`:""}
    <div id="preview">${Zf(e,t)}</div>
    <div class="row">${tt("lcancel","Cancel")}${tt("lconfirm","Launch",{cls:"hot grow"})}</div>
  </div>`}function Fx(n,e){const t=n.g,i=Ja(t,e),s=t.nodes[e.to];let r=`<div class="kv"><div><small>DRONES</small><b>⬢ ${i===2?e.drones:"?"}</b></div><div><small>ARRIVES IN</small><b>${Et(pc(t,e,s))}</b></div><div><small>HEADING</small><b data-a="focus:${s.id}" class="link">${Ue(s.name)}</b></div></div>`;return e.owner===k&&(r=Wf(t,e.specs).html+r),e.owner===k?(xi(t,e).redirect&&!e.redirected&&(r+=tt(`redirect:${e.id}`,"Redirect",{cls:"wide",sub:"Once per flight"})),e.specs.length?r+="<h3>Aboard</h3>"+e.specs.map(a=>Fc(t,t.specs[a],!1,!1)).join(""):r+=`<p class="dim">No specialists aboard.${e.drones===0?" Unmanned.":""}</p>`):i<2&&(r+='<p class="warnp">Strength unknown. It becomes readable inside full-intelligence range, at a Sensor Array, or with Signal Analysis.</p>'),`<div class="phead"><div><h2><span class="dot" style="background:${Xn(t,e.owner)}"></span>${Ue(jn(t,e.owner))} ${e.lane?"convoy":"fleet"}</h2><small>${e.lane?"In a corridor":"In flight"}</small></div><button class="btn ico" data-a="close">✕</button></div><div class="pbody">${r}</div>`}function Ox(n){const e=n.g;if(n.launch)return Ux(n);if(!n.sel)return"";if(n.sel.type==="ship"){const a=qt(e,n.sel.id);return!a||a.at>=0||!Ja(e,a)?(n.sel=null,""):Fx(n,a)}const t=e.nodes[n.sel.id],i=ui(e,t),s=`${t.citadel?"Citadel":t.kind==="planet"?["Small","Medium","Large"][t.size]+" planet":t.home?"Home station":"Station"} · ${i.tier==="detected"?"Unidentified":i.owner===0?"Neutral":Ue(jn(e,i.owner))}`;return`<div class="phead"><div><h2><span class="dot" style="background:${i.tier==="detected"?"#56617c":i.owner===0?"#8f95a6":Xn(e,i.owner)}"></span>${Ue(t.name)}</h2><small>${s}</small></div><button class="btn ico" data-a="close">✕</button></div>${t.owner===k?Dx(n,t):Ix(n,t)}`}function kx(n){const e=n.g,t=e.sides[k],i=[["specs","Specialists"],["relics","Relics"],["research","Research"],["intel","Coalition"],["log","Log"],["sys","Run"]];let s="";if(n.menu==="specs")s=e.specs.filter(a=>a.owner===k).sort((a,o)=>(a.cmd?-1:0)-(o.cmd?-1:0)).map(a=>Fc(e,a,!0)).join("")||'<p class="dim">No specialists yet.</p>';else if(n.menu==="relics")s=t.relics.map(r=>`<div class="relic ${Tn[r].rarity}"><b>${Tn[r].name}</b><small>${Tn[r].rarity}</small><p>${Tn[r].desc}</p></div>`).join("")||'<p class="dim">No relics yet. Events, Warlords and ancient sites yield them.</p>';else if(n.menu==="research"){const r=e.nodes.filter(a=>a.owner===k&&(a.b.lab||a.b.slab));s=`<p class="dim">${r.length?"Labs: "+r.map(a=>`<span class="link" data-a="focus:${a.id}">${Ue(a.name)}${a.research?` (${ut[a.research].name})`:" (idle)"}</span>`).join(", "):"Build a Research Lab on a planet or station to begin."}</p>`,s+=qf(e,null)}else if(n.menu==="intel"){const r=us[e.sides[e.archon].fac],a=e.mob;s=`<div class="fac" style="--c:#e07aa0"><b>✦ ${r.name} ${r.title}</b><p>${r.desc}</p><p>Mobilization stage ${a.stage}/5${a.surge?` · total war +${a.surge}`:""} (${Math.round(a.prog*100)}% to the next). Each stage enlarges Coalition reserves and offensives and gives every faction new technology. Capturing enemy nodes sets it back; a captured Warlord removes a whole stage.</p><p>Citadel Aegis: ${Pr(e,e.nodes[e.citadel])} (${e.factions.filter(o=>!e.sides[o].broken).length} layers).</p></div>`;for(const o of e.factions){const l=e.sides[o],c=Qn[l.fac],d=e.nodes.filter(h=>e.intel[h.id].snap?.owner===o||e.vis[h.id]===2&&h.owner===o),u=d.length>0||l.broken;s+=u?`<div class="fac" style="--c:${c.color}"><b>${c.name}${l.broken?" · BROKEN":""}</b><p>${c.desc}</p><p>${c.tell}</p><p class="dim">Known nodes: ${d.length} · Technology fielded: ${l.techs.map(h=>ut[h].name).join(", ")||"none"}</p>${d.filter(h=>h.capital).map(h=>`<p class="link" data-a="focus:${h.id}">♛ Capital located: ${Ue(h.name)}</p>`).join("")}</div>`:'<div class="fac" style="--c:#5d6875"><b>Unidentified faction</b><p class="dim">Not yet encountered.</p></div>'}}else if(n.menu==="log")s=e.log.slice().reverse().map(r=>`<div class="logl ${r.kind}" ${r.node>=0?`data-a="focus:${r.node}"`:""}><small>${Et(r.t)}</small>${Ue(r.msg)}</div>`).join("");else{const r=e.stats;s=`<div class="kv"><div><small>SEED</small><b>${e.seed}</b></div><div><small>THREAT</small><b>${e.threat}</b></div><div><small>NODES</small><b>${e.nodes.filter(a=>a.owner===k).length}</b></div></div>
      <p class="dim">Captures ${r.captures} · Nodes lost ${r.nodesLost} · Drones lost ${r.dronesLost} · Ships lost ${r.shipsLost}</p>
      <p class="dim">The run saves automatically to this device.</p>
      ${tt("help","How to play",{cls:"wide"})}${tt("abandon","Abandon run",{cls:"wide"})}`}return`<div class="sheet"><div class="phead"><div class="tabs">${i.map(([r,a])=>`<button data-a="menu:${r}" class="${n.menu===r?"on":""}">${a}</button>`).join("")}</div><button class="btn ico" data-a="menu:">✕</button></div><div class="pbody">${s}</div></div>`}function Bx(n){const e=n.g;if(e.result){const a=e.stats,o=e.result==="win";return`<div class="modal end ${o?"win":"lose"}"><h1>${o?"Victory":"Defeat"}</h1><p>${Ue(e.resultWhy)}</p>
      <div class="kv"><div><small>TIME</small><b>${Et(e.t)}</b></div><div><small>CAPTURES</small><b>${a.captures}</b></div><div><small>WARLORDS</small><b>${a.warlords}</b></div></div>
      <p class="dim">Nodes lost ${a.nodesLost} · Drones built ${a.dronesMade} · Drones lost ${a.dronesLost} · Ships lost ${a.shipsLost}<br>Specialists ${a.specs} · Relics ${a.relics} · Technologies ${a.techs} · Events ${a.events} · Ultanium mined ${Math.round(a.ultMade)}</p>
      ${o&&e.threat<5?`<p class="goodp">Threat level ${e.threat+1} unlocked.</p>`:""}
      <div class="row">${tt("title","Main menu")}${tt("again","New run",{cls:"hot grow"})}</div></div>`}const t=e.pending[0];if(!t)return"";let i="";if(t.kind==="draft")return i=t.opts.map((a,o)=>{const l=ft[a.base],c=Gi[a.arch];return`<button class="card" data-a="choose:${o}">${gu(a.base)}<h3>${l.name} ${c.name}</h3><small>${c.blurb}</small><p>${l.passive}</p><p>${c.passive}</p><p><b>${l.active.name}:</b> ${l.active.desc}</p><p><b>${c.a.name}:</b> ${c.a.desc}</p><p class="dim"><b>Level 3, ${c.b.name}:</b> ${c.b.desc}</p></button>`}).join(""),`<div class="modal"><h2>Choose your Commander</h2><p class="dim">Your Commander is your strongest specialist. If they are captured you have ${Et(se.rescueSecs)} to retake the node holding them, or the run ends.</p><div class="cards">${i}</div></div>`;if(t.kind==="spec")return i=t.opts.map((a,o)=>{const l=ft[a];return`<button class="card" data-a="choose:${o}">${gu(a)}<h3>${l.name}</h3><small>${l.role}</small><p>${l.passive}</p>${l.active?`<p><b>${l.active.name}</b> (${l.active.cd}s): ${l.active.desc}</p>`:""}</button>`}).join(""),`<div class="modal"><h2>${Ue(t.title)}</h2><p class="dim">One of them will join you. The others stay behind.</p><div class="cards">${i}</div></div>`;if(t.kind==="relic")return i=t.opts.map((a,o)=>{const l=Tn[a];return`<button class="card relic ${l.rarity}" data-a="choose:${o}"><h3>${l.name}</h3><small>${l.rarity}</small><p>${l.desc}</p></button>`}).join(""),`<div class="modal"><h2>Choose a relic</h2><p class="dim">Relics last for the whole run.</p><div class="cards">${i}</div></div>`;if(t.kind==="crew"){const a=qt(e,t.opts[0]),o=e.nodes[t.node];if(!a||a.at!==o.id)return`<div class="modal"><h2>${Ue(t.title)}</h2>${tt("choose:0","Done",{cls:"wide hot"})}</div>`;const l=Hi(e,k),c=u=>`<button class="slot full" data-a="swap:${u}:${a.id}">${Si(e,e.specs[u],!0)}<small>${Ue(ii(e.specs[u]))}</small></button>`,d=u=>Array(Math.max(0,l-u)).fill('<div class="slot"><small>empty</small></div>').join("");return`<div class="modal"><h2>${Ue(o.name)} is full</h2><p class="dim">A node holds ${l} specialists. Tap one to move it between ${Ue(o.name)} and the ship. Whoever stays aboard can fly on with the ship later.</p>
      <h3>At ${Ue(o.name)}</h3><div class="slots">${o.specs.map(c).join("")}${d(o.specs.length)}</div>
      <h3>Aboard the ship</h3><div class="slots">${a.specs.map(c).join("")}${d(a.specs.length)}</div>
      ${tt("choose:0","Done",{cls:"wide hot"})}</div>`}if(t.kind==="perk")return i=t.opts.map((a,o)=>{const l=Yo(a);return`<button class="card" data-a="choose:${o}"><h3>${l.name}</h3><p>${l.desc}</p></button>`}).join(""),`<div class="modal"><h2>${Ue(t.title)}</h2>${e.specs[e.cmdSpec].cmd.lvl===3?`<p class="goodp">New ability unlocked: ${Gi[e.specs[e.cmdSpec].cmd.arch].b.name}</p>`:""}<div class="cards">${i}</div></div>`;const s=Un[t.event],r=e.nodes[t.node];return i=s.choices.map((a,o)=>{const l=Hu(e,r,a);if(a.req&&l&&l.startsWith("Needs your"))return`<button class="card locked" disabled><h3>${a.label}</h3><small>${Ue(l)}</small></button>`;const c=[a.ult?`◆ ${a.ult}`:"",a.drones?`⬢ ${a.drones}`:""].filter(Boolean).join(" · ");return`<button class="card" data-a="choose:${o}" ${l?"disabled":""}><h3>${a.label}</h3>${c?`<small>Cost ${c}</small>`:""}<p>${a.desc}</p>${l?`<small class="why">${Ue(l)}</small>`:""}</button>`}).join(""),`<div class="modal"><h2>${s.name}</h2><small>${Ue(r.name)} · ⬢ ${r.drones} here</small><p class="flavour">${s.text}</p><div class="cards">${i}</div>${tt("choose:-1","Decide later",{cls:"wide"})}</div>`}function zx(n){const e=n.meta,t=Array.from({length:e.unlocked+1},(i,s)=>`<button class="chip ${n.newThreat===s?"on":""}" data-a="threat:${s}">${s}</button>`).join("");return`<div class="title"><h1>SPACE<span>NODES</span></h1><p class="tag">Build an empire. Assemble your specialists. Take the Citadel before the Coalition takes you.</p>
    ${n.hasSave?tt("continue","Continue run",{cls:"wide hot"}):""}
    ${tt("newrun","New run",{cls:`wide ${n.hasSave?"":"hot"}`})}
    <div class="lv"><small>THREAT LEVEL</small><div class="chips">${t}</div><small class="dim">${n.newThreat===0?"Standard campaign.":`Tougher garrisons and faster mobilization (+${n.newThreat*8}% / +${n.newThreat*5}%).`} Win to unlock the next.</small></div>
    ${tt("help","How to play",{cls:"wide"})}
    <small class="dim">Runs ${e.runs} · Wins ${e.wins}</small></div>`}function xu(){return`<div class="modal help"><h2>How to play</h2>
  <p><b>Goal.</b> Capture <b>The Citadel</b> ✦ at the far end of the map. You lose if your <b>Commander</b> ★ is captured and not rescued within 150 seconds.</p>
  <p><b>Nodes.</b> Planets ● mine Ultanium ◆. Stations ⬡ build Drones ⬢ and ships ▲. Everything moves by ship: tap one of your nodes, press <b>Send</b> on a ship, then tap a destination. Or tap a target and pick where to send from.</p>
  <p><b>Combat is arithmetic.</b> Attack minus defence. The launch sheet shows the exact outcome for what you can currently see. Ties go to the defender.</p>
  <p><b>Vision.</b> The clear circle around your nodes is full intelligence; the dimmer ring only detects that something is there. A node marked <b>?</b> has unknown forces. An unmanned ship sent to it reveals everything and is lost.</p>
  <p><b>Economy.</b> Generators power mines (2 each). Mines need a Drone each to run. A node builds one thing at a time, and a station that is building is not making Drones. Research has its own lane.</p>
  <p><b>Specialists.</b> Every neutral planet you capture lets you recruit 1 of 3. They stand as statues where they are posted and only work there, three to a node or ship. Their active abilities are the first thing shown when you tap a node or ship. Move them between a node and a ship parked there with ▲ ▼. Hold (or hover) a statue for details.</p>
  <p><b>Corridors.</b> Link two of your nodes from the Build tab. Drones and specialists then cross at double speed without a ship. A corridor collapses if either end is captured.</p>
  <p><b>Drone cap.</b> Grows with every planet and station you hold.</p>
  <p><b>The Coalition.</b> Three factions and an Archon. The mobilization meter fills with time; each stage brings larger offensives. Capturing enemy nodes sets it back. Capture a faction's capital ♛ to take its Warlord, gain a signature specialist and a rare relic, and strip a layer of the Citadel's Aegis.</p>
  <p><b>Controls.</b> Drag, or use the arrow keys or WASD, to scroll the map. Pinch or scroll to zoom. Space pauses, 1/2/3 set speed, M opens the menu, H returns home, Esc cancels.</p>
  ${tt("helpclose","Got it",{cls:"wide hot"})}</div>`}Lh();const Vs="spacenodes.save.v2",Oc="spacenodes.meta.v1",nr=n=>document.getElementById(n),Fn=nr("map"),Da=Fn.getContext("2d"),Su=nr("hud"),xa=nr("panel"),Sa=nr("overlay"),Mu=nr("toasts"),is=nr("tip"),pi={get:n=>{try{return localStorage.getItem(n)}catch{return null}},set:(n,e)=>{try{localStorage.setItem(n,e)}catch{}},del:n=>{try{localStorage.removeItem(n)}catch{}}},W={g:null,speed:1,paused:!1,sel:null,tab:"info",menu:null,mode:null,launch:null,screen:"title",newThreat:0,meta:{runs:0,wins:0,unlocked:0,best:0,...JSON.parse(pi.get(Oc)||"{}")},hasSave:!!pi.get(Vs),note:"",noteT:0},qe={x:100,y:180,z:3};let di=null,Xi=0,Qs=0,Jf=-1,Dt=!0,xr=0,Va=!1,bu="title";const Li=[];window.__app=W;const Gx=Nh({game:()=>W.g,selected:()=>W.sel?.type==="node"?W.sel.id:-1,setSpeed:n=>{W.speed=n,Dt=!0},refresh:()=>{Dt=!0}});function yu(n){W.g=n,W.screen="game",W.sel=null,W.menu=null,W.mode=null,W.launch=null,W.paused=!1,W.speed=1;const e=n.nodes[n.home];qe.x=e.x+8,qe.y=e.y,qe.z=Math.max(6.5,Math.min(9,Xi/52)),xr=n.log.length,Li.length=0,Dt=!0}function kc(){W.g&&!W.g.result&&W.screen==="game"&&(pi.set(Vs,JSON.stringify(W.g)),W.hasSave=!0)}function Hx(){const n=W.g;pi.del(Vs),W.hasSave=!1,W.meta.runs++,n.result==="win"&&(W.meta.wins++,W.meta.unlocked=Math.min(5,Math.max(W.meta.unlocked,n.threat+1))),pi.set(Oc,JSON.stringify(W.meta))}let Wa=!1;function Ws(n){n&&(Li.push({msg:n,kind:"warn",node:-1,until:performance.now()+3500}),Dt=!0)}function Wt(n){const e=Kh(W.g,n);return Ws(e),Dt=!0,!e}function Bc(n){const e=W.g.nodes[n],t=Xi<820,i=!!W.sel||!!W.launch;di={x:e.x+(!t&&i?190/qe.z:0),y:e.y+(t&&i?Qs*.22/(qe.z*zi):0)}}function Eu(){W.sel=null,W.launch=null}function zc(n,e){W.sel={type:n,id:e},W.tab="info",W.launch=null,Dt=!0,n==="node"&&Bc(e)}function Zl(n,e){const t=W.g,i=qt(t,n);if(!i||i.at<0)return Ws("That ship has left");if(i.at===e)return Ws("The ship is already there");const s=t.nodes[e];if(s.owner!==k&&!eo(t,s))return Ws("Target is not in detection range");const r={ship:n,to:e,drones:0,specs:vi(t,i)?[]:i.specs.slice()},a=Wr(t,i);if(!vi(t,i))r.drones=i.drones;else if(s.owner===k)r.drones=Math.max(0,a-(t.nodes[i.at].specs.includes(t.cmdSpec)?6:0));else{const o=Kf(t,r);r.drones=o?Math.min(a,o+2):a}W.launch=r,W.mode=null,W.sel={type:"node",id:e},Dt=!0,Bc(e)}function Jl(n,e){const[t,...i]=n.split(":"),s=W.g,r=W.sel?.type==="node"?W.sel.id:-1;switch(t){case"newrun":case"again":yu(kh(Date.now()%2147483647|0,W.newThreat)),Wa=!1;break;case"continue":{const a=pi.get(Vs);if(a)try{const o=JSON.parse(a);o.corridors=o.corridors||[],On(o),yu(o),Wa=!1}catch{pi.del(Vs),W.hasSave=!1}break}case"title":W.screen="title",W.g=null;break;case"threat":W.newThreat=+i[0];break;case"help":bu=W.screen,W.screen="help",W.menu=null;break;case"helpclose":W.screen=bu;break;case"abandon":confirm("Abandon this run?")&&(pi.del(Vs),W.hasSave=!1,W.meta.runs++,pi.set(Oc,JSON.stringify(W.meta)),W.screen="title",W.g=null);break;case"pause":W.paused=!W.paused,W.paused&&kc();break;case"speed":W.speed=W.speed===1?2:W.speed===2?4:1;break;case"console":Gx.toggle();break;case"menu":W.menu=i[0]||null;break;case"close":W.sel=null,W.launch=null;break;case"tab":W.tab=i[0];break;case"focus":W.menu=null,zc("node",+i[0]);break;case"cancelmode":W.mode=null;break;case"build":Wt({c:"build",node:r,id:i[0]});break;case"ship":Wt({c:"ship",node:r});break;case"cancel":Wt({c:"cancel",node:r,idx:+i[0]});break;case"research":Wt({c:"research",node:r,id:i[0]||null});break;case"resfirst":Wt({c:"resFirst",node:r});break;case"event":Wt({c:"event",node:r});break;case"ransom":Wt({c:"ransom",spec:+i[0],recruit:!1});break;case"recruit":Wt({c:"ransom",spec:+i[0],recruit:!0});break;case"choose":Wt({c:"choose",idx:+i[0]});break;case"send":W.mode={k:"launch",ship:+i[0]},W.launch=null;break;case"from":Zl(+i[0],r);break;case"redirect":W.mode={k:"redirect",ship:+i[0]};break;case"corridorpick":W.mode={k:"corridor",from:r},Eu();break;case"route":W.mode={k:"route",from:r},Eu();break;case"muster":Wt({c:"muster",node:r});break;case"noop":break;case"swap":Wt({c:"swap",spec:+i[0],ship:+i[1]});break;case"lane":{const a=s.nodes[r];W.launch={ship:-1,from:r,to:+i[0],drones:Math.floor(a.drones/2),specs:[],lane:!0};break}case"ability":{const a=s.specs[+i[0]],o=kr(a).find(l=>l.id===i[1]);if(o.target==="self")Wt({c:"ability",spec:a.id,id:o.id,target:-1});else{const l=xc(s,a,{...o,target:"self"},null);l?Ws(l):(W.mode={k:"ability",spec:a.id,id:o.id},W.menu=null)}break}case"lspec":{const a=W.launch,o=+i[0];a.specs=a.specs.includes(o)?a.specs.filter(l=>l!==o):a.specs.concat(o);break}case"lq":{const a=W.launch,o=a.lane?s.nodes[a.from].drones:Wr(s,qt(s,a.ship));a.drones=i[0]==="all"?o:i[0]==="half"?Math.ceil(o/2):i[0]==="none"?0:Kf(s,a)||o;break}case"lcancel":W.launch=null;break;case"lconfirm":{const a=W.launch;if(a.lane){Wt({c:"transfer",from:a.from,to:a.to,drones:a.drones,specs:a.specs})&&(W.launch=null);break}Wt({c:"launch",ship:a.ship,to:a.to,drones:a.drones,specs:a.specs})&&(W.launch=null,W.sel=null);break}}Dt=!0}document.addEventListener("click",n=>{const e=n.target.closest("[data-tip]");if(e&&!n.target.closest("button")){const i=e.getBoundingClientRect();Gc(+e.dataset.tip,i.left+i.width/2,i.top);return}!n.target.closest("#tip")&&!(Xa&&n.target===Fn)&&Hc();const t=n.target.closest("[data-a]");!t||t.disabled||t instanceof HTMLInputElement&&t.type!=="checkbox"||Jl(t.dataset.a)});document.addEventListener("input",n=>{const e=n.target;if(e.id==="lslider"&&W.launch&&W.g){W.launch.drones=+e.value;const t=document.getElementById("preview");t&&(t.innerHTML=Zf(W.g,W.launch))}});document.addEventListener("pointerdown",n=>{n.target.id==="lslider"&&(Va=!0)});document.addEventListener("pointerup",()=>{Va&&(Va=!1,Dt=!0)});document.addEventListener("keyup",n=>Hn.delete(n.key.toLowerCase()));document.addEventListener("keydown",n=>{W.screen!=="game"||!W.g||(Hn.add(n.key.toLowerCase()),n.key===" "?(n.preventDefault(),Jl("pause")):n.key==="1"?(W.speed=1,Dt=!0):n.key==="2"?(W.speed=2,Dt=!0):n.key==="3"?(W.speed=4,Dt=!0):n.key==="m"||n.key==="M"?Jl(W.menu?"menu:":"menu:specs"):n.key==="h"||n.key==="H"?zc("node",(W.g.nodes.find(e=>e.owner===k&&e.home)||W.g.nodes.find(e=>e.owner===k)||W.g.nodes[0]).id):n.key==="Escape"&&(W.mode?W.mode=null:W.launch?W.launch=null:W.menu?W.menu=null:W.sel=null,Dt=!0))});document.addEventListener("visibilitychange",()=>{document.hidden&&kc()});const _n=new Map;let ki=null,$s=!1,Tr=0;const Tu=(n,e)=>({x:(n-Xi/2)/qe.z+qe.x,y:(e-Qs/2)/(qe.z*zi)+qe.y}),$n={x:0,y:0},Hn=new Set;function Qf(n,e){const t=W.g;for(const r of t.ships){if(r.at>=0||!Ja(t,r))continue;const a=Lt(r.x,r.y,3);if(Math.hypot(a.x-n,a.y-e)<24)return{type:"ship",id:r.id}}let i=-1,s=1e9;for(const r of t.nodes){if(ui(t,r).tier==="hidden")continue;const a=Ex(r),o=Math.hypot(a.x-n,a.y-e);o<Math.max(30,En(r)*qe.z*2.3)&&o<s&&(s=o,i=r.id)}return i>=0?{type:"node",id:i}:null}function Vx(n,e){const t=W.g,i=Qf(n,e);if(W.mode){if(!i||i.type!=="node")return;const s=W.mode;if(s.k==="launch")Zl(s.ship,i.id);else if(s.k==="redirect")Wt({c:"redirect",ship:s.ship,to:i.id})&&(W.mode=null);else if(s.k==="corridor")Wt({c:"corridor",from:s.from,to:i.id})&&(W.mode=null,W.tab="info",W.sel={type:"node",id:s.from});else if(s.k==="route"){const r=t.nodes[s.from];if(!fc(t,s.from).includes(i.id)){Ws("No corridor route to that node");return}W.mode=null,W.sel={type:"node",id:i.id},W.launch={ship:-1,from:s.from,to:i.id,drones:Math.floor(r.drones/2),specs:[],lane:!0},Bc(i.id)}else Wt({c:"ability",spec:s.spec,id:s.id,target:i.id})&&(W.mode=null);Dt=!0;return}if(!i){W.launch||(W.sel=null),Dt=!0;return}if(W.launch&&!W.launch.lane&&i.type==="node"){const s=qt(t,W.launch.ship);if(s&&s.at!==i.id)return Zl(W.launch.ship,i.id)}zc(i.type,i.id)}let $a=-1,Ql=0,Xa=!1;function jf(n,e){let t=null,i=1e9;for(const s of Ds){const r=Math.hypot(s.x-n,s.y-e);r<s.r+6&&r<i&&(i=r,t=s)}return t}function Gc(n,e,t){if(!W.g)return;$a!==n&&(is.innerHTML=Px(W.g,W.g.specs[n]),$a=n),is.className="open";const i=is.getBoundingClientRect();is.style.left=`${Math.max(8,Math.min(Xi-i.width-8,e-i.width/2))}px`,is.style.top=`${t-i.height-18<60?t+22:t-i.height-18}px`}function Hc(){($a>=0||is.className)&&(is.className="",$a=-1)}Fn.addEventListener("pointerdown",n=>{if(Fn.setPointerCapture(n.pointerId),Hc(),Xa=!1,clearTimeout(Ql),n.pointerType!=="mouse"&&(Ql=window.setTimeout(()=>{if(_n.size!==1||$s||!ki)return;const e=jf(ki.x,ki.y);e&&(Xa=!0,Gc(e.spec,e.x,e.y),navigator.vibrate&&navigator.vibrate(12))},420)),_n.set(n.pointerId,{x:n.clientX,y:n.clientY}),_n.size===1&&(ki={x:n.clientX,y:n.clientY,t:performance.now()},$s=!1),_n.size===2){const[e,t]=[..._n.values()];Tr=Math.hypot(e.x-t.x,e.y-t.y),$s=!0}di=null,$n.x=$n.y=0});Fn.addEventListener("pointermove",n=>{const e=_n.get(n.pointerId);if(!e){if(W.g&&W.screen==="game"){const s=n.pointerType==="mouse"?jf(n.clientX,n.clientY):null;s?Gc(s.spec,s.x,s.y):Hc();const r=Qf(n.clientX,n.clientY);Jf=r&&r.type==="node"?r.id:-1,Fn.style.cursor=r||s?"pointer":"grab"}return}const t=n.clientX-e.x,i=n.clientY-e.y;if(e.x=n.clientX,e.y=n.clientY,_n.size===1)ki&&Math.hypot(n.clientX-ki.x,n.clientY-ki.y)>8&&($s=!0),$s&&(qe.x-=t/qe.z,qe.y-=i/(qe.z*zi),$n.x=-t/qe.z,$n.y=-i/(qe.z*zi));else if(_n.size===2){const[s,r]=[..._n.values()],a=Math.hypot(s.x-r.x,s.y-r.y);Tr>0&&th((s.x+r.x)/2,(s.y+r.y)/2,a/Tr),Tr=a}});const eh=n=>{const e=_n.delete(n.pointerId);clearTimeout(Ql),e&&_n.size===0&&!$s&&!Xa&&ki&&W.g&&W.screen==="game"&&Vx(n.clientX,n.clientY),_n.size<2&&(Tr=0)};Fn.addEventListener("pointerup",eh);Fn.addEventListener("pointercancel",eh);Fn.addEventListener("wheel",n=>{n.preventDefault(),th(n.clientX,n.clientY,Math.exp(-n.deltaY*.0015))},{passive:!1});function th(n,e,t){const i=Tu(n,e);qe.z=Math.max(2.4,Math.min(13,qe.z*t));const s=Tu(n,e);qe.x+=i.x-s.x,qe.y+=i.y-s.y}function nh(){const n=Math.min(2,window.devicePixelRatio||1);Xi=window.innerWidth,Qs=window.innerHeight,Fn.width=Math.round(Xi*n),Fn.height=Math.round(Qs*n),Da.setTransform(n,0,0,n,0,0)}window.addEventListener("resize",nh);nh();const jl={};function es(n,e,t){if(jl[e]===t)return;jl[e]=t;const i=n.querySelector(".pbody"),s=i?i.scrollTop:0;n.innerHTML=t;const r=n.querySelector(".pbody");r&&s&&(r.scrollTop=s)}function Wx(){const n=W.g,e=performance.now();if(W.screen==="title"||!n){es(Su,"hud",""),es(xa,"panel",""),xa.className="",Mu.innerHTML="",jl.toasts="",Sa.className="open clear",es(Sa,"ov",W.screen==="help"?xu():zx(W));return}for(;xr<n.log.length;xr++){const i=n.log[xr];i.kind!=="info"&&Li.push({msg:i.msg,kind:i.kind,node:i.node,until:e+(i.kind==="bad"?9e3:6e3)})}for(n.log.length>=150&&(xr=n.log.length);Li.length&&(Li[0].until<e||Li.length>4);)Li.shift();if(es(Mu,"toasts",Li.map(i=>`<div class="toast ${i.kind}" ${i.node>=0?`data-a="focus:${i.node}"`:""}>${i.msg.replace(/</g,"&lt;")}</div>`).join("")),es(Su,"hud",Rx(W)),!Va){const i=Ox(W);xa.className=i?"open":"",es(xa,"panel",i)}const t=W.screen==="help"?xu():n.result||n.pending.length?Bx(W):W.menu?kx(W):"";Sa.className=t?"open":"",es(Sa,"ov",t)}let wu=performance.now(),Ps=0,Au=0,Ru=0;function ih(n){const e=Math.min(.25,(n-wu)/1e3);wu=n;const t=W.g;if(t&&W.screen==="game"){if(!W.paused&&!W.menu&&!t.result&&!t.pending.length){Ps+=e*W.speed;let o=0;for(;Ps>=se.dt&&o++<16;)if(Ps-=se.dt,!Yh(t)){Ps=0,Dt=!0;break}Ps>1&&(Ps=0)}t.result&&!Wa&&(Wa=!0,Hx(),Dt=!0),!_n.size&&Math.abs($n.x)+Math.abs($n.y)>.01&&(qe.x+=$n.x,qe.y+=$n.y,$n.x*=.9,$n.y*=.9);const i=(Hn.has("arrowright")||Hn.has("d")?1:0)-(Hn.has("arrowleft")||Hn.has("a")?1:0),s=(Hn.has("arrowdown")||Hn.has("s")?1:0)-(Hn.has("arrowup")||Hn.has("w")?1:0);(i||s)&&(di=null,qe.x+=i*420*e/qe.z,qe.y+=s*420*e/(qe.z*zi)),di&&(qe.x+=(di.x-qe.x)*.16,qe.y+=(di.y-qe.y)*.16,Math.hypot(di.x-qe.x,di.y-qe.y)<.4&&(di=null)),qe.x=Math.max(-40,Math.min(t.w+40,qe.x)),qe.y=Math.max(-40,Math.min(t.h+40,qe.y));const r=W.mode?.k==="launch"?qt(t,W.mode.ship)?.at??-1:-1,a=W.mode?.k==="route"?new Set(fc(t,W.mode.from)):W.mode?.k==="corridor"?new Set(t.nodes.filter(o=>{const l=ku(t,t.nodes[W.mode.from],o);return!l||l==="Not enough Ultanium"}).map(o=>o.id)):null;Ax(Da,t,{cam:qe,w:Xi,h:Qs,sel:W.launch?{type:"node",id:W.launch.to}:W.sel,targeting:!!W.mode,from:r,hover:Jf,glow:a},n),n-Ru>15e3&&(Ru=n,kc())}else Da.fillStyle="#262e49",Da.fillRect(0,0,Xi,Qs);(Dt||n-Au>250)&&(Dt=!1,Au=n,Wx()),requestAnimationFrame(ih)}requestAnimationFrame(ih);
