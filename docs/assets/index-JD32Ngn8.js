(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const V=1,ae={dt:.1,shipSpeed:1.2,loadTime:6,startUlt:40,startDrones:12,baseIncome:6,capBase:65,capPlanet:7,capStation:17,batch:5,batchTime:30,shipCost:30,shipTime:100,natRegenSecs:20,natBySize:[4,7,11],capBySize:[9,13,19],mineBase:4.4,sizeMult:[1,1.5,2.2],mineDim:[1,.75,.5,.3,.3],mineSlots:[2,3,4],minesPerGen:2,fovInner:{planet:[42,46,52],station:48},fovOuter:{planet:[72,78,88],station:82},shipFov:[26,46],corridorCost:40,corridorTime:110,corridorRange:150,corridorMax:2,corridorSpeed:2,specSlots:3,rescueSecs:150,ransom:15,recruitCost:40,stageSecs:540,graceSecs:360,offInterval:[0,300,260,220,185,150],offCommit:[0,.45,.55,.65,.75,.85],gatherSecs:55,captureSetback:.15,aegisPerLayer:12,xpLevels:[0,6,16,30,48]},_n={gen:{id:"gen",name:"Generator",on:"planet",cost:10,time:40,max:2,desc:"Powers up to 2 mines."},mine:{id:"mine",name:"Mine",on:"planet",cost:8,time:30,max:4,desc:"Produces Ultanium. Needs generator power and 1 Drone to operate."},lab:{id:"lab",name:"Research Lab",on:"planet",cost:30,time:75,max:1,desc:"Enables research at this node."},shield:{id:"shield",name:"Shield Generator",on:"planet",cost:18,time:45,max:2,desc:"+4 natural defence and faster recharge."},relay:{id:"relay",name:"Relay",on:"planet",cost:15,time:40,max:1,desc:"+25% field of view."},bastion:{id:"bastion",name:"Bastion",on:"planet",cost:35,time:90,max:1,desc:"+8 defence.",tech:"fort"},dock:{id:"dock",name:"Dock",on:"station",cost:12,time:35,max:3,desc:"One more ship can load and unload here."},turret:{id:"turret",name:"Turret",on:"station",cost:18,time:45,max:3,desc:"+4 defence."},barracks:{id:"barracks",name:"Barracks",on:"station",cost:20,time:60,max:1,desc:"Drone batches 25% faster."},shipyard:{id:"shipyard",name:"Shipyard",on:"station",cost:20,time:60,max:1,desc:"Ships build 25% faster."},sensor:{id:"sensor",name:"Sensor Array",on:"station",cost:15,time:45,max:1,desc:"+30% detection radius; reveals strength of fleets heading here."},slab:{id:"slab",name:"Research Lab",on:"station",cost:30,time:75,max:1,desc:"Enables research at this node."},screen:{id:"screen",name:"Screen",on:"station",cost:22,time:60,max:1,desc:"+5 defence."}},Vc={turret:4,bastion:8,screen:5},Ne=(n,e,t,i,s,r)=>({id:n,name:e,cd:t,target:i,at:s,desc:r}),dt={fleet:"#7fb2dc",eco:"#e3c565",def:"#8fc79a",intel:"#b39ad6",war:"#dd7a63",odd:"#e9a9c9"},pt={},et=n=>pt[n.id]=n;et({id:"admiral",name:"Admiral",tag:"Ad",color:dt.fleet,role:"Fleet mobility",starter:!0,passive:"The ship carrying the Admiral flies 15% faster.",loc:{speed:.15},active:Ne("fullburn","Full Burn",120,"self","ship","This ship gains +50% speed for 30 s.")});et({id:"engineer",name:"Engineer",tag:"En",color:dt.eco,role:"Construction",starter:!0,passive:"Construction here is 25% faster.",loc:{build:.25},active:Ne("repair","Emergency Repair",120,"self","node","Cut 25 s off the current build and fully restore natural defence.")});et({id:"quartermaster",name:"Quartermaster",tag:"Qm",color:dt.eco,role:"Economy",starter:!0,passive:"Mines here produce 20% more.",loc:{mine:.2},active:Ne("surge","Surge Mining",180,"self","planet","+50% mine output here for 60 s.")});et({id:"scout",name:"Scout",tag:"Sc",color:dt.intel,role:"Intelligence",starter:!0,passive:"This node sees 30% further.",loc:{fov:.3},active:Ne("deepscan","Deep Scan",90,"node","any","Fully identify one detected node for 60 s.")});et({id:"tactician",name:"Tactician",tag:"Ta",color:dt.war,role:"Combat",starter:!0,passive:"Attacks from this ship gain +1 strength per 8 Drones (max +4).",loc:{atkPer8:4},active:Ne("flank","Flank",180,"self","ship","This ship's next attack ignores natural defence.")});et({id:"sentinel",name:"Sentinel",tag:"Se",color:dt.def,role:"Defence",passive:"+3 defence at this node.",loc:{def:3},active:Ne("lockdown","Lockdown",150,"self","node","+6 defence here for 45 s.")});et({id:"saboteur",name:"Saboteur",tag:"Sb",color:dt.intel,role:"Disruption",passive:"Attacks from this ship face 25% weaker structures.",loc:{structHalf:.25},active:Ne("sabotage","Sabotage",180,"enemy","any","Freeze all construction and Drone production at an identified enemy node for 45 s.")});et({id:"diplomat",name:"Diplomat",tag:"Di",color:dt.eco,role:"Neutral expansion",passive:"Attacks on neutral nodes from this ship face 3 less defence.",loc:{vsNeutral:3},active:Ne("parley","Parley",150,"neutral","any","An identified neutral node loses 5 defence for 60 s.")});et({id:"scientist",name:"Scientist",tag:"Sn",color:dt.intel,role:"Research",passive:"Research here is 25% faster.",loc:{research:.25},active:Ne("breakthrough","Breakthrough",180,"self","node","Add 30 s of progress to the research running here.")});et({id:"medic",name:"Medic",tag:"Me",color:dt.def,role:"Specialist protection",passive:"Once per 180 s, when this location falls its specialists escape home instead of being captured.",loc:{medic:1},active:Ne("extraction","Extraction",240,"self","any","Every specialist at this location returns to your home station instantly.")});et({id:"pirate",name:"Pirate",tag:"Pi",color:dt.war,role:"Interception",passive:"You always see the strength of enemy fleets in detection range.",glob:{sigint:1},active:Ne("ambush","Ambush",150,"self","node","The next enemy fleet to arrive here within 90 s loses 30% of its Drones first.")});et({id:"inquisitor",name:"Inquisitor",tag:"In",color:dt.odd,role:"Prisoners",passive:"Each prisoner held anywhere yields +1.5 Ultanium/min.",glob:{prisonInc:1.5},active:Ne("convert","Convert",240,"self","node","Turn one prisoner held here to your side over 60 s. Lost if the node falls.")});et({id:"foreman",name:"Foreman",tag:"Fo",color:dt.war,role:"Drone production",passive:"Drone batches here are 2 larger.",loc:{batch:2},active:Ne("conscript","Conscript",180,"self","node","Add 6 Drones here immediately.")});et({id:"cartographer",name:"Cartographer",tag:"Ca",color:dt.fleet,role:"Navigation",passive:"The ship carrying the Cartographer can be redirected once per flight.",loc:{redirect:1},active:Ne("chart","Chart",180,"self","any","Identify every node within 160 units for 40 s.")});et({id:"reclaimer",name:"Reclaimer",tag:"Rc",color:dt.eco,role:"Salvage",passive:"Battles won by this ship yield 1 Ultanium per enemy Drone destroyed.",loc:{salvage:1},active:Ne("strip","Strip Mine",180,"self","planet","Gain 20 Ultanium; mines here go offline for 60 s.")});et({id:"ghost",name:"Ghost",tag:"Gh",color:dt.intel,role:"Stealth",passive:"The ship carrying the Ghost is unseen: the enemy sends no reinforcements against it.",loc:{stealth:1},active:Ne("smoke","Smoke",300,"self","node","Every enemy fleet currently flying to this node turns back.")});et({id:"siegebreaker",name:"Siegebreaker",tag:"Sg",color:dt.war,role:"Siege",passive:"Attacks from this ship ignore turrets, screens and bastions.",loc:{ignStruct:1},active:Ne("breach","Breach",180,"ident","any","An identified node loses all natural defence and cannot recharge for 60 s.")});et({id:"martyr",name:"Martyr",tag:"Ma",color:dt.def,role:"Attrition",passive:"If this node falls, half of the attacker's survivors die.",loc:{martyr:1},active:Ne("laststand","Last Stand",240,"self","node","Drones here count double on defence for 30 s, then a quarter of them are lost.")});et({id:"echo",name:"Echo",tag:"Ec",color:dt.odd,role:"Amplifier",passive:"Doubles the passive of the first other specialist at this location.",loc:{},active:Ne("reprise","Reprise",240,"self","any","Reset the ability cooldowns of every other specialist here.")});et({id:"broker",name:"Broker",tag:"Br",color:dt.eco,role:"Deals",passive:"Ships cost 25% less and ransoms pay double.",glob:{shipCost:.25,ransom:1},active:Ne("bribe","Bribe",200,"neutral","any","Buy an identified neutral node of strength 14 or less for 2 Ultanium per point. No battle.")});et({id:"smuggler",name:"Smuggler",tag:"Sm",color:dt.fleet,role:"Logistics",passive:"This ship launches with no loading delay, and you may fly to remembered nodes outside detection.",loc:{noLoad:1},glob:{remember:1},active:Ne("fence","Fence",240,"self","any","Gain 2 Ultanium for every node you own.")});et({id:"castellan",name:"Castellan",tag:"Cs",color:dt.def,role:"Fortification",passive:"Natural defence here is +3 and recharges three times as fast.",loc:{natMax:3,natRegen:2},active:Ne("rampart","Rampart",120,"self","node","Restore natural defence here to full.")});et({id:"recruiter",name:"Recruiter",tag:"Rt",color:dt.war,role:"Manpower",passive:"Your global Drone cap is 15 higher.",glob:{droneCap:15},active:Ne("levy","Levy",240,"self","any","Every station you own gains 3 Drones.")});et({id:"oracle",name:"Oracle",tag:"Or",color:dt.intel,role:"Foresight",passive:"Coalition offensives are announced with their target.",glob:{warn:1},active:Ne("foresight","Foresight",300,"self","any","Set Coalition mobilization back by 10% of a stage.")});et({id:"vanguard",name:"Vanguard",tag:"Va",color:dt.war,role:"Assault",passive:"Attacks won by this ship keep 20% more survivors.",loc:{surv:.2},active:Ne("charge","Charge",150,"self","ship","This ship's next attack gains +5 strength.")});et({id:"navigator",name:"Navigator",tag:"Na",color:dt.fleet,role:"Launch control",passive:"Ships launched from this node fly 20% faster.",loc:{launchSpeed:.2},active:Ne("slingshot","Slingshot",240,"self","node","The next ship launched from here within 30 s flies at 2.5x speed for 40 s.")});et({id:"prospector",name:"Prospector",tag:"Pr",color:dt.eco,role:"Extraction",passive:"This planet has +1 mine slot and +3 Ultanium/min capacity.",loc:{mineSlots:1,cap:3},active:Ne("vein","Strike Vein",240,"self","planet","Gain 25 Ultanium.")});et({id:"architect",name:"Architect",tag:"Ar",color:dt.eco,role:"Corridors",passive:"Corridors started here build 40% faster.",loc:{corridor:.4},active:Ne("rapidlink","Rapid Link",240,"own","node","Open a temporary corridor from here to another of your nodes for 60 s.")});et({id:"ironmonger",name:"Ironmonger",tag:"Im",color:"#c98a3c",role:"Ferrum signature",sig:"ferrum",passive:"Structures at this node give 50% more defence.",loc:{structDef:.5},active:Ne("fortify","Fortify",240,"self","node","Build a free Turret (station) or Shield Generator (planet) here instantly.")});et({id:"berserker",name:"Berserker",tag:"Bs",color:"#e0524d",role:"Crimson signature",sig:"crimson",passive:"Attacks from this ship are 20% stronger.",loc:{atkPct:.2},active:Ne("bloodrush","Bloodrush",200,"self","ship","This ship's next attack is +40% stronger but keeps 30% fewer survivors.")});et({id:"lens",name:"Lens",tag:"Ln",color:"#e8d36a",role:"Lumen signature",sig:"lumen",passive:"Lances here destroy 15% of any attacking fleet before battle.",loc:{preKill:.15},active:Ne("focus","Focus",200,"self","node","Lances here destroy a further 30% of attackers for 45 s.")});et({id:"phantom",name:"Phantom",tag:"Ph",color:"#9b6bd6",role:"Veil signature",sig:"veil",passive:"All of your fleets fly unseen.",glob:{stealth:1},active:Ne("raidA","Knife in the Dark",240,"ident","any","An identified node loses 25% of its Drones.")});et({id:"wayfinder",name:"Wayfinder",tag:"Wf",color:"#5aa9e6",role:"Drift signature",sig:"drift",passive:"All of your ships fly 15% faster.",glob:{speed:.15},active:Ne("warp","Fold",240,"self","ship","This ship instantly covers half of its remaining distance.")});et({id:"warlord",name:"Warlord",tag:"W",color:"#ffffff",role:"Faction leader",passive:"+5 defence at the capital.",loc:{def:5}});et({id:"archon",name:"Archon",tag:"A",color:"#ff5fa2",role:"Coalition Commander",passive:"+8 defence at the Citadel.",loc:{def:8}});const kf=Object.values(pt).filter(n=>!n.sig&&n.id!=="warlord"&&n.id!=="archon").map(n=>n.id),zf=Object.values(pt).filter(n=>n.starter).map(n=>n.id),ki={marshal:{id:"marshal",name:"Marshal",blurb:"Leads from the front.",passive:"Attacks from the Commander's ship are 15% stronger.",loc:{atkPct:.15},a:Ne("decisive","Decisive Strike",180,"self","ship","This ship's next attack is +30% stronger."),b:Ne("rally","Rally",240,"self","any","Add 8 Drones at the Commander's location.")},pathfinder:{id:"pathfinder",name:"Pathfinder",blurb:"Controls tempo and information.",passive:"Commander's ship is 20% faster and can be redirected; their node sees 25% further.",loc:{speed:.2,redirect:1,fov:.25},a:Ne("slipstream","Slipstream",150,"self","ship","This ship flies at double speed for 40 s."),b:Ne("sweep","Survey Sweep",200,"self","any","Identify every node within 200 units for 45 s.")},warden:{id:"warden",name:"Warden",blurb:"Keeps forces alive.",passive:"+4 defence and double natural-defence recharge at the Commander's node.",loc:{def:4,natRegen:1},a:Ne("aegis","Aegis",180,"self","node","+10 defence here for 45 s."),b:Ne("recall","Recall",300,"self","any","The Commander and every specialist with them return home instantly.")},industrialist:{id:"industrialist",name:"Industrialist",blurb:"Builds a stronger empire.",passive:"Mines +20% and construction +30% at the Commander's node.",loc:{mine:.2,build:.3},a:Ne("crash","Crash Program",200,"self","node","Finish the current build here instantly."),b:Ne("windfall","Windfall",240,"self","any","Gain 3 Ultanium for every planet you own.")},corsair:{id:"corsair",name:"Corsair",blurb:"Lives off the enemy.",passive:"Commander's ship salvages 1 Ultanium per enemy Drone destroyed and keeps 15% more survivors.",loc:{salvage:1,surv:.15},a:Ne("raid","Raid",200,"ident","any","An identified node loses 30% of its Drones."),b:Ne("pressgang","Press-gang",240,"self","any","Gain 20% more Drones at the Commander's location (max 10).")},savant:{id:"savant",name:"Savant",blurb:"Wins with ideas.",passive:"Research +40% at the Commander's node; all ability cooldowns 15% shorter.",loc:{research:.4},a:Ne("insight","Insight",240,"self","any","Reset the cooldowns of every other specialist here."),b:Ne("eureka","Eureka",200,"self","node","Add 60 s of progress to the research running here.")}},Gf={savant:{cd:.15}},uu=[{id:"ironwill",name:"Iron Will",desc:"Rescue window +45 s.",glob:{rescue:45}},{id:"drill",name:"Drillmaster",desc:"Drone batches at the Commander's station are 2 larger.",loc:{batch:2}},{id:"march",name:"Forced March",desc:"Commander's ship +20% speed.",loc:{speed:.2}},{id:"logi",name:"Logistician",desc:"Global Drone cap +20.",glob:{droneCap:20}},{id:"tithe",name:"Tithe",desc:"+3 Ultanium/min.",glob:{incomeFlat:3}},{id:"hard",name:"Hardliner",desc:"+4 defence at the Commander's node.",loc:{def:4}},{id:"shock",name:"Shock Tactics",desc:"Commander's attacks +4 strength.",loc:{atk:4}},{id:"mentor",name:"Mentor",desc:"All ability cooldowns 15% shorter.",glob:{cd:.15}},{id:"scholar",name:"Scholar",desc:"All research 20% faster.",glob:{research:.2}},{id:"survivor",name:"Survivor",desc:"Commander's attacks keep 25% more survivors.",loc:{surv:.25}},{id:"farsight",name:"Far Sight",desc:"All your nodes see 15% further.",glob:{fov:.15}},{id:"requisition",name:"Requisition",desc:"Ships cost 30% less.",glob:{shipCost:.3}},{id:"entourage",name:"Entourage",desc:"Nodes and ships hold one more specialist.",glob:{slots:1}},{id:"sapper",name:"Sapper",desc:"Commander's attacks ignore natural defence.",loc:{ignNat:1}},{id:"magnate",name:"Magnate",desc:"All mines +10%.",glob:{mine:.1}}],ci={},Je=(n,e,t,i,s)=>ci[n]={id:n,name:e,rarity:t,desc:i,mods:s};Je("extractor","Deep-Core Extractor","common","All mines +12%.",{mine:.12});Je("foundry","Drone Foundry Matrix","common","Drone batches are 1 larger.",{batch:1});Je("surveyor","Quantum Surveyor","common","All nodes see 20% further.",{fov:.2});Je("propulsion","Emergency Propulsion Core","common","All ships +12% speed.",{speed:.12});Je("salvage","Salvage Protocol","common","Winning attacks yield 0.5 Ultanium per enemy Drone destroyed.",{salvage:.5});Je("scaffold","Modular Scaffolds","common","Construction 25% faster.",{build:.25});Je("reserve","Reserve Barracks","common","Global Drone cap +20.",{droneCap:20});Je("bulkhead","Hardened Bulkheads","common","+1 defence at every node.",{def:1});Je("archive","Field Archive","common","Research 25% faster.",{research:.25});Je("ledger","Ration Ledger","common","+3 Ultanium/min.",{incomeFlat:3});Je("clamps","Quick-Load Clamps","common","Ships launch with no loading delay.",{noLoad:1});Je("mirror","Signal Mirror","common","Coalition offensives are announced with their target.",{warn:1});Je("adaptive","Adaptive Shield Network","uncommon","Nodes you capture gain +6 defence for 60 s.",{capShield:6});Je("matrix","Specialist Command Matrix","uncommon","Ability cooldowns 20% shorter.",{cd:.2});Je("lantern","Ghost Lanterns","uncommon","Unmanned scouts survive and fly home.",{scoutReturn:1});Je("warchest","War Chest","uncommon","Gain 6 Ultanium whenever you capture a node.",{capUlt:6});Je("phalanx","Phalanx Doctrine","uncommon","All attacks 8% stronger.",{atkPct:.08});Je("titheengine","Tithe Engine","uncommon","Ransoms pay double; each prisoner yields +1 Ultanium/min.",{ransom:1,prisonInc:1});Je("yards","Overclocked Yards","uncommon","Ships cost 30% less and build 30% faster.",{shipCost:.3,shipSpeed:.3});Je("lattice","Regrowth Lattice","uncommon","Natural defence +2 and recharges twice as fast.",{natRegen:1,natMax:2});Je("charts","Cartel Charts","uncommon","You may fly to remembered nodes outside detection range.",{remember:1});Je("cadre","Veteran Cadre","uncommon","Winning attacks keep 15% more survivors.",{surv:.15});Je("budget","Black Budget","uncommon","Research costs 30% less.",{techCost:.3});Je("charter","Bulwark Charter","uncommon","Structures give 25% more defence.",{structDef:.25});Je("sigil","Tiebreaker Sigil","rare","You win tied battles when attacking.",{ties:1});Je("phoenix","Phoenix Clause","rare","Once every 180 s, a node capture refunds the Drones it cost.",{refund:180});Je("chair","Fourth Chair","rare","Nodes and ships hold one more specialist.",{slots:1});Je("crown","Hollow Crown","rare","Commander rescue window +90 s.",{rescue:90});Je("stillness","Stillness Engine","rare","Coalition mobilization is 25% slower.",{mobSlow:.25});Je("twin","Twin Minds","rare","The Commander's passive effects count twice.",{cmdDouble:1});Je("lance","Null Lance","rare","Your attacks ignore natural defence.",{ignNat:1});Je("hold","Bottomless Hold","rare","Every planet has +1 mine slot and +3 capacity.",{mineSlots:1,cap:3});Je("edict","Conscription Edict","rare","Every node you own gains 1 Drone each minute.",{levy:60});Je("seal","Oathbreaker's Seal","rare","You may recruit prisoners for 40 Ultanium without an Inquisitor.",{recruit:1});Je("night","Long Night","rare","All of your fleets fly unseen.",{stealth:1});Je("choir","Siege Choir","rare","Your attacks face structures at half strength.",{structHalf:.5});const Hf=[0,30,48,70],ts=[0,90,150,210],fu=[0,2,3,4],Mt={},sn=(n,e,t,i,s,r,a)=>Mt[n]={id:n,name:e,branch:t,tier:i,pre:s,desc:r,mods:a};sn("extraction","Advanced Extraction","Industry",1,void 0,"Mines +15%.",{mine:.15});sn("automation","Industrial Automation","Industry",2,"extraction","Mines no longer need Drones to operate.",{noOps:1});sn("deepcore","Deep-Core Drilling","Industry",3,"automation","Planet capacity +25% and +1 mine slot.",{capPct:.25,mineSlots:1});sn("coord","Combat Coordination","Military",1,void 0,"Attacks 10% stronger.",{atkPct:.1});sn("fort","Fortification Systems","Military",2,"coord","Unlocks the Bastion; structures give 25% more defence.",{unlockBastion:1,structDef:.25});sn("siege","Siege Doctrine","Military",3,"fort","Attacks face structures at half strength.",{structHalf:.5});sn("engines","Improved Engines","Navigation",1,void 0,"Ships +15% speed.",{speed:.15});sn("sensors","Long-Range Sensors","Navigation",2,"engines","All nodes see 20% further.",{fov:.2});sn("reroute","Slipstream Rerouting","Navigation",3,"sensors","Any ship can be redirected once per flight.",{redirect:1});sn("sigint","Signal Analysis","Intelligence",1,void 0,"See the strength of every detected enemy fleet.",{sigint:1});sn("recon","Recon Drones","Intelligence",2,"sigint","Unmanned scouts survive and fly home.",{scoutReturn:1});sn("deepcover","Deep Cover","Intelligence",3,"recon","Offensives are announced with their target; mobilization 15% slower.",{warn:1,mobSlow:.15});sn("training","Specialist Training","Command",1,void 0,"Ability cooldowns 20% shorter.",{cd:.2});sn("protocols","Command Protocols","Command",2,"training","Commander gains 50% more experience; rescue window +30 s.",{xp:.5,rescue:30});sn("integration","Command Integration","Command",3,"protocols","Nodes and ships hold one more specialist.",{slots:1});const qn={ferrum:{id:"ferrum",name:"Ferrum Directorate",color:"#c98a3c",warlord:"Overseer Kharn",sig:"ironmonger",desc:"Fortress industry. Slow to attack, expensive to dislodge.",tell:"+2 defence everywhere; builds turrets and shields relentlessly.",mods:{def:2,build:.3},ai:{aggr:.6,expand:150,react:.9,target:"weak",build:{turret:5,shield:5,screen:3,mine:3,gen:3,barracks:1}},techs:["fort","extraction","automation","siege"],specs:["sentinel","castellan","engineer"]},crimson:{id:"crimson",name:"Crimson Warhost",color:"#d2604a",warlord:"Warlord Ashka",sig:"berserker",desc:"Wave aggression. Thin defences, constant pressure.",tell:"Drones produced 35% faster; attacks the nearest target often.",mods:{prod:.35,atkPct:.1},ai:{aggr:1.4,expand:110,react:.4,target:"near",build:{barracks:6,shipyard:3,turret:1,mine:2,gen:2,dock:1}},techs:["coord","engines","siege","training"],specs:["foreman","vanguard","tactician"]},lumen:{id:"lumen",name:"Lumen Technocracy",color:"#e3c565",warlord:"Prime Calculator Ione",sig:"lens",desc:"Lance batteries thin every attacking fleet before it lands.",tell:"Destroys 15% of attackers before battle; gains two technologies per stage.",mods:{preKill:.15,natMax:3},ai:{aggr:.8,expand:170,react:.7,target:"weak",build:{shield:4,sensor:2,turret:2,mine:3,gen:3,screen:2}},techs:["sigint","fort","coord","engines","siege","extraction","training","sensors"],specs:["scientist","sentinel","scout"]},veil:{id:"veil",name:"Veil Syndicate",color:"#9a7cc4",warlord:"The Whisper",sig:"phantom",desc:"Unseen fleets that hunt your specialists.",tell:"Fleets are invisible until inside full-intelligence range; targets nodes holding specialists.",mods:{stealth:1,speed:.1},ai:{aggr:1,expand:160,react:.6,target:"spec",build:{sensor:3,turret:2,barracks:3,mine:2,gen:2,shield:1}},techs:["engines","coord","sigint","training"],specs:["saboteur","ghost","pirate"]},drift:{id:"drift",name:"Drift Clans",color:"#6ea6d6",warlord:"Clanmother Sura",sig:"wayfinder",desc:"Fast nomads who swallow neutral space.",tell:"Ships 40% faster; expands into neutral territory twice as often.",mods:{speed:.4},ai:{aggr:1.1,expand:70,react:.8,target:"near",build:{dock:2,shipyard:4,barracks:3,mine:3,gen:3,turret:1}},techs:["engines","sensors","coord","extraction"],specs:["admiral","navigator","cartographer"]}},as={anvil:{id:"anvil",name:"Archon Vael",title:"the Anvil",desc:"Citadel Aegis layers are 50% stronger and its Drones are produced 40% faster.",mods:{aegisPct:.5,prod:.4},pmods:{}},tide:{id:"tide",name:"Archon Seraph",title:"the Tide",desc:"Every Coalition offensive commits 30% more Drones.",mods:{offBig:.3},pmods:{}},silence:{id:"silence",name:"Archon Null",title:"the Silence",desc:"Your specialist cooldowns are 30% longer. Coalition fleets fly unseen.",mods:{stealth:1},pmods:{cd:-.3}}},In={},En=(n,e,t,i,s)=>In[n]={id:n,name:e,on:t,text:i,choices:s};En("lab","Abandoned Research Facility","station","Sealed laboratories, still powered. The archive doors are marked with a hazard glyph nobody recognises.",[{label:"Restore the facility",desc:"Gain a free technology.",ult:25,fx:[["tech"]]},{label:"Salvage it",desc:"Gain 35 Ultanium.",fx:[["ult",35]]},{label:"Open the restricted archive",desc:"Choose an uncommon relic. Automata will attack this node with 14 Drones in 40 s.",fx:[["relic","uncommon"],["ambush",14]]},{label:"Let the Scientist decode it",desc:"Free technology and a common relic.",req:"scientist",fx:[["tech"],["relic","common"]]}]);En("fortress","Ancient Fortress","any","The guns are silent but the targeting grid still tracks your ship.",[{label:"Reactivate the defences",desc:"Hold this node for 90 s with 10 Drones to gain a Turret or Shield here and an uncommon relic.",fx:[["hold",90,10,[["build","def"],["relic","uncommon"]]]]},{label:"Strip the armoury",desc:"Gain 12 Drones here.",fx:[["drones",12]]},{label:"Engineer bypass",desc:"Gain the structure and a common relic at once.",req:"engineer",fx:[["build","def"],["relic","common"]]}]);En("stranded","Stranded Specialists","any","A crippled lifeboat hails you. Its passengers are willing to work for passage.",[{label:"Take one aboard",desc:"Choose one of three specialists.",fx:[["spec"]]},{label:"Sell them the fuel",desc:"Gain 30 Ultanium.",fx:[["ult",30]]}]);En("energy","Unstable Energy Source","planet","The crust hums. Readings climb while you watch.",[{label:"Stabilise it",desc:"Hold for 75 s with 8 Drones to choose a rare relic.",ult:20,fx:[["hold",75,8,[["relic","rare"]]]]},{label:"Tap it now",desc:"Gain 50 Ultanium; lose 6 Drones here.",drones:6,fx:[["ult",50]]},{label:"Walk away",desc:"Nothing happens.",fx:[]}]);En("derelict","Derelict Fleet","station","Dozens of hulls drift in formation. Some of them are warm.",[{label:"Repair a hull",desc:"Gain a ship here.",ult:15,fx:[["ship"]]},{label:"Wake the crews",desc:"Gain 16 Drones here. Automata attack with 12 Drones in 40 s.",fx:[["drones",16],["ambush",12]]},{label:"Reclaimer strips everything",desc:"Gain a ship and 30 Ultanium.",req:"reclaimer",fx:[["ship"],["ult",30]]}]);En("settlement","Independent Settlement","planet","Farmers, mostly. They have seen the Coalition's recruiters and they do not like them.",[{label:"Trade",desc:"Gain 25 Ultanium.",fx:[["ult",25]]},{label:"Arm them",desc:"Gain 10 Drones here.",ult:10,fx:[["drones",10]]},{label:"Sign a charter",desc:"Choose a common relic.",ult:20,fx:[["relic","common"]]},{label:"Diplomat brokers an alliance",desc:"Gain 10 Drones and a common relic.",req:"diplomat",fx:[["drones",10],["relic","common"]]}]);En("expedition","Lost Research Expedition","any","Their last transmission repeats every forty seconds. It ends mid-word.",[{label:"Rescue the team",desc:"Choose one of three specialists.",drones:5,fx:[["spec"]]},{label:"Recover the data",desc:"Commander gains 8 experience.",fx:[["xp",8]]},{label:"Follow the signal",desc:"Choose a rare relic. Automata attack with 20 Drones in 40 s.",fx:[["relic","rare"],["ambush",20]]}]);En("platform","Automated Weapons Platform","station","It has been guarding nothing for three hundred years, and it is very good at it.",[{label:"Capture it",desc:"Gain a Turret here.",fx:[["build","def"]]},{label:"Reprogram it",desc:"+8 defence here for 5 minutes and a common relic.",ult:15,fx:[["buff","def",8,300],["relic","common"]]},{label:"Scrap it",desc:"Gain 28 Ultanium.",fx:[["ult",28]]}]);En("beacon","Ancient Navigation Beacon","any","One pulse per minute, aimed at a point deep inside Coalition space.",[{label:"Decode it",desc:"Reveal every node within 260 units.",fx:[["reveal",260]]},{label:"Overload it",desc:"Set Coalition mobilization back by a third of a stage.",ult:20,fx:[["mobil",-.33]]},{label:"Cartographer triangulates",desc:"Reveal the whole map.",req:"cartographer",fx:[["reveal",2e3]]}]);En("forge","The Ancient Forge","planet","A foundry the size of a continent, cold for an age. The ignition sequence is still on the console.",[{label:"Restore the Forge",desc:"Hold for 120 s with 14 Drones to choose a rare relic and gain 15 Drones.",ult:30,fx:[["hold",120,14,[["relic","rare"],["drones",15]]]]},{label:"Melt it down",desc:"Gain 45 Ultanium.",fx:[["ult",45]]}]);En("vault","Sealed Vault","any","Three locks. Your crew can force one of them.",[{label:"The armoury",desc:"Choose an uncommon relic.",drones:6,fx:[["relic","uncommon"]]},{label:"The treasury",desc:"Gain 40 Ultanium.",fx:[["ult",40]]},{label:"The war room",desc:"Commander gains 10 experience.",fx:[["xp",10]]}]);En("deserters","Coalition Deserters","any","A squadron in Coalition colours powers down its weapons and asks for terms.",[{label:"Enlist them",desc:"Gain 14 Drones here. Mobilization advances 15% of a stage.",fx:[["drones",14],["mobil",.15]]},{label:"Debrief them",desc:"Reveal every node within 200 units and set mobilization back 10%.",fx:[["reveal",200],["mobil",-.1]]},{label:"Inquisitor takes their officers",desc:"Choose one of three specialists.",req:"inquisitor",fx:[["spec"]]}]);function Gt(n){n.rng=n.rng+1831565813|0;let e=n.rng;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}const pa=(n,e,t)=>e+Math.floor(Gt(n)*(t-e+1)),fn=(n,e,t)=>e+Gt(n)*(t-e),Cs=(n,e)=>e[Math.floor(Gt(n)*e.length)];function ma(n,e){const t=e.slice();for(let i=t.length-1;i>0;i--){const s=Math.floor(Gt(n)*(i+1));[t[i],t[s]]=[t[s],t[i]]}return t}function is(n,e,t){return ma(n,e).slice(0,t)}function tn(n,e,t=1){if(e)for(const i in e)n[i]=(n[i]||0)+e[i]*t}const Ha={};for(const n of uu)Ha[n.id]=n;const ko=n=>Ha[n],Wc=new WeakMap;function yt(n,e){const t=n.modV;let i=Wc.get(n);if((!i||i.stamp!==t)&&(i={stamp:t,m:{}},Wc.set(n,i)),i.m[e])return i.m[e];const s={},r=n.sides[e];if(r){for(const a of r.relics)tn(s,ci[a]?.mods);for(const a of r.techs)tn(s,Mt[a]?.mods);r.kind==="faction"&&(tn(s,qn[r.fac].mods),r.broken&&(s.prod=(s.prod||0)-.6)),r.kind==="archon"&&tn(s,as[r.fac].mods),r.kind==="player"&&tn(s,as[n.sides[n.archon].fac].pmods);for(const a of n.specs)if(!(a.owner!==e||a.held)&&(tn(s,pt[a.def].glob),a.cmd)){tn(s,Gf[a.cmd.arch]);for(const o of a.cmd.perks)tn(s,Ha[o]?.glob)}}return i.m[e]=s,s}function $c(n,e){const t={};if(tn(t,pt[e.def].loc),e.cmd){tn(t,ki[e.cmd.arch].loc);for(const i of e.cmd.perks)tn(t,Ha[i]?.loc);yt(n,e.owner).cmdDouble&&tn(t,t)}return t}function $l(n,e,t,i){const s={};tn(s,yt(n,e));let r=!1,a=null;for(const o of t){const l=n.specs[o];!l||l.owner!==e||l.held||(l.def==="echo"?r=!0:!a&&!l.cmd&&(a=l),tn(s,$c(n,l)))}r&&a&&tn(s,$c(n,a));for(const o of i)o.until>n.t&&(s[o.k]=(s[o.k]||0)+o.v);return s}const rn=(n,e)=>$l(n,e.owner,e.specs,e.buffs),pi=(n,e)=>$l(n,e.owner,e.specs,e.buffs),Xe=(n,e)=>Math.hypot(n.x-e.x,n.y-e.y),Jt=(n,e)=>n.ships.find(t=>t.id===e),ss=1e9;function it(n,e,t="info",i=-1){n.log.push({t:n.t,msg:e,kind:t,node:i}),n.log.length>150&&n.log.shift()}function Yn(n,e){const t=n.sides[e];return t?t.kind==="player"?"You":t.kind==="faction"?qn[t.fac].name:as[t.fac].name:e===0?"Neutral":"Automata"}function Gn(n,e){const t=n.sides[e];return t?t.kind==="player"?"#6cc5a0":t.kind==="faction"?qn[t.fac].color:"#e07aa0":"#9aa3ad"}function Fs(n,e,t,i){const s={id:n.specs.length,def:e,owner:t,node:i,ship:-1,held:0,cd:{},cmd:null,shield:0};return n.specs.push(s),n.nodes[i].specs.push(s.id),n.modV++,s}function Cr(n,e){if(e.node>=0){const t=n.nodes[e.node];t.specs=t.specs.filter(i=>i!==e.id),t.prisoners=t.prisoners.filter(i=>i!==e.id)}if(e.ship>=0){const t=Jt(n,e.ship);t&&(t.specs=t.specs.filter(i=>i!==e.id))}e.node=-1,e.ship=-1}function Kn(n,e,t,i=0){Cr(n,e),e.node=t.id,e.held=i,(i?t.prisoners:t.specs).push(e.id),n.modV++}function Xl(n,e,t){Cr(n,e),e.ship=t.id,t.specs.push(e.id)}const os=(n,e)=>ae.specSlots+(yt(n,e).slots||0),mi=n=>n.name||pt[n.def].name;function Ks(n,e){const t=n.nodes.filter(i=>i.owner===e);return t.length?t.find(i=>i.home||i.capital||i.citadel)||t.find(i=>i.kind==="station")||t[0]:null}function Pr(n,e){let t=0;for(const i of n.nodes)i.owner===e&&(t+=i.drones);for(const i of n.ships)i.owner===e&&(t+=i.drones);return t}function Hs(n,e){const t=n.sides[e];if(!t)return ss;const i=yt(n,e).droneCap||0;if(t.kind!=="player")return t.capBase+22*(n.mob.stage+n.mob.surge)+i;let s=ae.capBase+i;for(const r of n.nodes)r.owner===e&&(s+=r.kind==="planet"?ae.capPlanet:ae.capStation);return s}function Va(n,e){const i=1+(rn(n,e).fov||0)+.25*(e.b.relay||0),s=e.kind==="planet"?ae.fovInner.planet[e.size]:ae.fovInner.station,r=e.kind==="planet"?ae.fovOuter.planet[e.size]:ae.fovOuter.station;return[s*i,r*i*(1+.3*(e.b.sensor||0))]}function ei(n){const e=n.nodes.filter(t=>t.owner===V).map(t=>({n:t,r:Va(n,t)}));for(const t of n.ships)t.owner===V&&!t.lane&&e.push({n:t,r:ql(n,t)});for(const t of n.nodes){let i=0;if(t.owner===V)i=2;else{for(const r of e){const a=Xe(t,r.n);if(a<=r.r[0]){i=2;break}a<=r.r[1]&&(i=1)}i<2&&t.buffs.some(r=>r.k==="scan"&&r.until>n.t)&&(i=2)}n.vis[t.id]=i;const s=n.intel[t.id];i>s.seen&&(s.seen=i),i===2&&(s.t=n.t,s.snap={owner:t.owner,drones:t.drones,nat:t.nat,b:{...t.b},specs:t.specs.slice(),prisoners:t.prisoners.slice(),buffs:t.buffs.slice()})}}function ql(n,e){const t=1+(pi(n,e).fov||0);return[ae.shipFov[0]*t,ae.shipFov[1]*t]}function Wa(n,e){if(e.owner===V)return 2;const t=(pi(n,e).stealth||0)>0||e.owner>1&&(yt(n,n.archon).stealth||0)>0;let i=0;for(const s of n.nodes){if(s.owner!==V)continue;const[r,a]=Va(n,s),o=Xe(e,s);if(o<=r)return 2;o<=a&&!t&&(i=1)}for(const s of n.ships){if(s.owner!==V||s.lane)continue;const[r,a]=ql(n,s),o=Xe(e,s);if(o<=r)return 2;o<=a&&!t&&(i=1)}return i&&((yt(n,V).sigint||0)>0||e.to>=0&&n.nodes[e.to].owner===V&&n.nodes[e.to].b.sensor)?2:i}function Yl(n,e){if(n.vis[e.id]===2)return{live:!0,age:0,v:e};const t=n.intel[e.id];return t.snap?{live:!1,age:n.t-t.t,v:{...e,...t.snap}}:{live:!1,age:0,v:null}}function zo(n,e,t){return ae.mineSlots[e.size]+((t||rn(n,e)).mineSlots||0)}function Mr(n,e,t){const i=t||rn(n,e);return(e.kind==="planet"?ae.natBySize[e.size]+4*(e.b.shield||0):0)+(e.kind==="planet"&&i.natMax||0)}function Kl(n,e,t){const i=t||rn(n,e),s=n.sides[e.owner],r={mines:0,powered:0,on:0,out:0,cap:0,resNeed:0,resOn:!1,short:0};let a=e.drones;const o=(e.b.lab||0)+(e.b.slab||0)>0;if(e.research&&o&&s&&(r.resNeed=fu[Mt[e.research].tier]),r.resNeed&&e.resFirst&&(r.resOn=a>=r.resNeed,r.resOn&&(a-=r.resNeed)),e.kind==="planet"){r.mines=Math.min(e.b.mine||0,zo(n,e,i)),r.powered=Math.min(r.mines,(e.b.gen||0)*ae.minesPerGen),r.on=i.noOps?r.powered:Math.min(r.powered,a),i.noOps||(a-=r.on),i.offline&&(r.on=0);let c=0;for(let d=0;d<r.on;d++)c+=ae.mineBase*ae.sizeMult[e.size]*ae.mineDim[Math.min(d,4)];r.cap=(ae.capBySize[e.size]+(i.cap||0))*(1+(i.capPct||0)),r.out=Math.min(c*(1+(i.mine||0)),r.cap)}r.resNeed&&!e.resFirst&&(r.resOn=a>=r.resNeed);const l=(i.noOps?0:r.powered)+r.resNeed;return r.short=Math.max(0,l-e.drones),r}function Vf(n,e){const t=n.sides[e];if(!t)return 0;const i=yt(n,e);let s=(t.kind==="player"?ae.baseIncome:3)+(i.incomeFlat||0);for(const r of n.nodes)r.owner===e&&r.kind==="planet"&&(s+=Kl(n,r).out);return i.prisonInc&&(s+=i.prisonInc*n.specs.filter(r=>r.held===e).length),s}function ga(n,e){return(n.b[e]||0)+(n.lane&&n.lane.kind==="build"&&n.lane.id===e?1:0)+n.queue.filter(t=>t.kind==="build"&&t.id===e).length}function hu(n,e,t){return t==="mine"?zo(n,e):t==="gen"?Math.ceil(zo(n,e)/ae.minesPerGen):_n[t].max}function Ps(n,e,t){const i=_n[t],s=n.sides[e.owner];return!i||!s?"Not available":i.on!==e.kind?"Wrong node type":i.tech&&!s.techs.includes(i.tech)?`Needs ${Mt[i.tech].name}`:ga(e,t)>=hu(n,e,t)?"Maximum built":t==="mine"&&ga(e,"mine")>=ga(e,"gen")*ae.minesPerGen?"Needs another Generator":e.queue.length>=4?"Queue full":s.ult<i.cost?"Not enough Ultanium":null}function Zl(n,e){n.lane?n.queue.push(e):n.lane=e}function lr(n,e,t){const i=Ps(n,e,t);if(i)return i;const s=_n[t];return n.sides[e.owner].ult-=s.cost,Zl(e,{kind:"build",id:t,left:s.time,total:s.time,cost:s.cost}),null}function Sr(n,e){return Math.round(ae.shipCost*(1-Math.min(.6,yt(n,e).shipCost||0)))}function pu(n,e){const t=n.sides[e.owner];if(!t||e.kind!=="station")return"Ships are built at stations";if(e.queue.length>=4)return"Queue full";const i=Sr(n,e.owner);return t.ult<i?"Not enough Ultanium":(t.ult-=i,Zl(e,{kind:"ship",id:"ship",left:ae.shipTime,total:ae.shipTime,cost:i}),null)}function Wf(n,e,t){const i=t<0?e.lane:e.queue[t];i&&(n.sides[e.owner].ult+=i.cost,t<0?e.lane=e.queue.shift()||null:e.queue.splice(t,1))}function Bn(n,e,t){const i={id:n.nextId++,owner:e,seq:n.nextId++,at:t.id,from:t.id,to:-1,x:t.x,y:t.y,drones:0,specs:[],buffs:[],loadUntil:0,redirected:!1,back:!1,off:!1};return n.ships.push(i),i}function br(n){return n.kind==="planet"?99:1+(n.b.dock||0)}function Zn(n,e){if(e.at<0)return!1;const t=n.nodes[e.at];return t.kind==="planet"||e.owner!==V?!0:n.ships.filter(s=>s.at===t.id&&s.owner===e.owner).sort((s,r)=>s.seq-r.seq).indexOf(e)<br(t)}function Go(n,e,t){return Math.round(Hf[Mt[t].tier]*(1-(yt(n,e).techCost||0)))}function Jl(n,e){const t=n.sides[e];return Object.keys(Mt).filter(i=>!t.techs.includes(i)&&(!Mt[i].pre||t.techs.includes(Mt[i].pre)))}function $f(n,e,t){const i=n.sides[e.owner];if(!((e.b.lab||0)+(e.b.slab||0)))return"Needs a Research Lab";if(!Jl(n,e.owner).includes(t))return"Not available";if(n.nodes.some(s=>s.owner===e.owner&&s.id!==e.id&&s.research===t))return"Already being researched elsewhere";if(i.techProg[t]===void 0){const s=Go(n,e.owner,t);if(i.ult<s)return"Not enough Ultanium";i.ult-=s,i.techProg[t]=0}return e.research=t,null}function Ql(n,e,t){const i=n.sides[e];if(!i.techs.includes(t)){i.techs.push(t),delete i.techProg[t],n.modV++;for(const s of n.nodes)s.owner===e&&s.research===t&&(s.research=null);e===V?(n.stats.techs++,it(n,`Research complete: ${Mt[t].name}`,"good")):it(n,`${Yn(n,e)} fielded ${Mt[t].name}`,"warn")}}function jl(n,e){if(!e.citadel)return 0;const t=n.factions.filter(i=>!n.sides[i].broken).length;return Math.round(t*ae.aegisPerLayer*(1+(yt(n,n.archon).aegisPct||0)))}function us(n,e,t,i,s){const r=Math.min(.6,(s.preKill||0)+(s.ambush||0)),a=Math.floor(e*r),o=e-a,l=Math.floor(o*(t.atkPct||0)),c=(t.atk||0)+Math.min(t.atkPer8||0,Math.floor(o/8)),d=o+l+c,u=i.drones*(s.dbl?2:1),f=t.ignNat?0:Math.floor(i.nat);let p=0;for(const M in Vc)p+=Vc[M]*(i.b[M]||0);const v=t.ignStruct?0:Math.round(p*(1+(s.structDef||0))*(1-Math.min(.75,t.structHalf||0))),y=Math.round((s.def||0)-(i.owner===0&&t.vsNeutral||0)),g=jl(n,i),m=Math.max(0,u+f+v+y+g),h=d>m||d===m&&(t.ties||0)>0&&o>0;let E=0;return h&&(E=Math.max(1,Math.min(o,d-m)),E=Math.max(1,Math.min(o,Math.round(E*(1+(t.surv||0))))),s.martyr&&(E=Math.ceil(E/2))),{sent:e,preKilled:a,atk:d,def:m,win:h,surv:E,parts:{drones:o,pct:l,flat:c,garr:u,nat:f,struct:v,bonus:y,aegis:g}}}function mu(n,e,t,i){const s=e.map(r=>n.specs[r]).find(r=>r.def==="medic"&&r.shield<=n.t&&!r.held);for(const r of e.slice()){const a=n.specs[r];if(s){const o=Ks(n,a.owner);if(o&&o.id!==t.id){Kn(n,a,o);continue}}Kn(n,a,t,i||-1),a.owner===V&&(n.stats.specsLost++,it(n,`${mi(a)} was captured at ${t.name}`,"bad",t.id))}s&&(s.shield=n.t+180,s.owner===V&&it(n,`The Medic got your specialists out of ${t.name}`,"good",t.id))}function $a(n,e,t,i){if(e.specs.length)if(t)mu(n,e.specs,t,i);else for(const s of e.specs.slice()){const r=n.specs[s],a=Ks(n,r.owner);a?Kn(n,r,a):(Cr(n,r),r.owner=-1)}n.ships=n.ships.filter(s=>s!==e),e.owner===V&&n.stats.shipsLost++}function Xf(n,e,t){const i=n.sides[e],s=qn[i.fac];i.broken=!0,n.modV++,n.mob.stage=Math.max(1,n.mob.stage-1),n.mob.prog=0,n.offs=n.offs.filter(a=>a.owner!==e),it(n,`${s.warlord} is your prisoner. The ${s.name} is broken and a Citadel Aegis layer falls.`,"good",t.id);const r=Fs(n,s.sig,V,t.id);it(n,`${mi(r)} joins you from the ${s.name}.`,"good",t.id),vu(n,"rare",t.id),ic(n,10),n.stats.warlords++}function ec(n,e,t,i,s){const r=e.owner,a=t.owner,o=e.drones;s.salvage&&n.sides[a]&&(n.sides[a].ult+=Math.round(s.salvage*o)),r!==0&&mu(n,e.specs,e,a);for(const d of n.ships.filter(u=>u.at===e.id&&u.owner===r&&u!==t))$a(n,d,e,a);for(const d of e.prisoners.slice()){const u=n.specs[d];u.owner===a?(Kn(n,u,e),a===V&&it(n,`${mi(u)} was rescued at ${e.name}`,"good",e.id)):u.held=a}if(r!==0&&e.kind==="station"){const d=Object.keys(e.b).filter(u=>u!=="dock"&&e.b[u]>0);if(d.length){const u=Cs(n,d);e.b[u]--}}const l=e.capital&&n.sides[r]?.kind==="faction"&&!n.sides[r].broken;n.corridors.some(d=>d.a===e.id||d.b===e.id)&&(n.corridors=n.corridors.filter(d=>d.a!==e.id&&d.b!==e.id),r===V&&it(n,`Corridors to ${e.name} collapsed`,"bad",e.id));for(const d of n.nodes)d.owner===r&&(d.queue=d.queue.filter(u=>!(u.kind==="corridor"&&+u.id===e.id)),d.lane&&d.lane.kind==="corridor"&&+d.lane.id===e.id&&(n.sides[r]&&(n.sides[r].ult+=d.lane.cost),d.lane=d.queue.shift()||null));e.owner=a,e.drones=i.surv,e.nat=0,e.lane=null,e.queue=[],e.research=null,e.prod=0,e.hold=null,e.conv=null,e.buffs=[],t.at=e.id,t.to=-1,t.drones=0,t.x=e.x,t.y=e.y,t.buffs=[],t.seq=n.nextId++,t.off=!1;const c=n.sides[a];if(c){const d=yt(n,a);d.refund&&n.t>=c.refundT&&(e.drones+=i.sent-i.surv,c.refundT=n.t+d.refund,a===V&&it(n,"Phoenix Clause refunds your losses","good",e.id)),d.capShield&&e.buffs.push({k:"def",v:d.capShield,until:n.t+60}),d.capUlt&&(c.ult+=d.capUlt)}n.modV++,a===V?(n.stats.captures++,it(n,`Captured ${e.name} with ${i.surv} Drones left`,"good",e.id),ic(n,t.specs.includes(n.cmdSpec)?4:2),n.sides[r]&&(n.mob.prog=Math.max(0,n.mob.prog-ae.captureSetback)),l&&Xf(n,r,e),e.offer&&(e.offer=!1,_u(n,e.id)),e.event&&n.pending.push({kind:"event",node:e.id,opts:[],title:In[e.event].name,event:e.event}),e.citadel&&(n.result="win",n.resultWhy=`${as[n.sides[n.archon].fac].name} is your prisoner. The Coalition is finished.`)):r===V&&(n.stats.nodesLost++,it(n,`${e.name} fell to ${Yn(n,a)}`,"bad",e.id)),ei(n)}function gu(n,e,t,i,s){let r=i.atk;if(!s.ignNat){const l=Math.min(e.nat,r);e.nat-=l,r-=l}r-=i.parts.struct+Math.max(0,i.parts.bonus+i.parts.aegis);const a=Math.max(0,Math.min(e.drones,Math.ceil(r/(i.parts.garr>e.drones?2:1))));e.drones-=a,t.owner===V&&(it(n,`Attack on ${e.name} failed: ${i.atk} against ${i.def}`,"bad",e.id),n.stats.dronesLost+=t.drones),e.owner===V&&it(n,`${e.name} held against ${Yn(n,t.owner)} (${i.atk} against ${i.def})`,"good",e.id),t.drones=0,t.buffs=[];const o=n.nodes[t.from];if(e.owner===0&&n.sides[t.owner]){const l=o&&o.owner===t.owner?o:Ks(n,t.owner);if(l){t.to=l.id,t.from=e.id,t.back=!0,t.x=e.x,t.y=e.y;return}}$a(n,t,n.sides[e.owner]?e:null,e.owner)}function qf(n,e){const t=n.nodes[e.to];if(e.x=t.x,e.y=t.y,e.lane){Yf(n,e,t);return}if(t.owner===e.owner){e.at=t.id,e.to=-1,e.buffs=[],e.seq=n.nextId++,e.back=!1,e.off=!1,e.unload=!0;return}if(e.drones<=0){if(e.owner===V&&!e.specs.length&&!e.back){t.buffs.push({k:"scan",v:1,until:n.t+20}),ei(n);const a=n.nodes[e.from];if(yt(n,V).scoutReturn&&a.owner===V){it(n,`Scout identified ${t.name} and is returning`,"info",t.id),e.to=a.id,e.from=t.id,e.back=!0;return}it(n,`Scout identified ${t.name} and was lost`,"info",t.id)}$a(n,e,n.sides[t.owner]?t:null,t.owner);return}const i=pi(n,e),s=rn(n,t),r=us(n,e.drones,i,t,s);t.buffs=t.buffs.filter(a=>a.k!=="ambush"),e.owner===V&&n.stats.battles++,r.win?(e.owner===V&&(n.stats.dronesLost+=r.sent-r.surv),ec(n,t,e,r,i)):gu(n,t,e,r,i)}function Yf(n,e,t){if(t.owner!==e.owner&&e.drones>0){const i=pi(n,e),s=us(n,e.drones,i,t,rn(n,t));if(s.win)ec(n,t,e,s,i);else{gu(n,t,e,s,i);return}}else if(t.owner!==e.owner){$a(n,e,n.sides[t.owner]?t:null,t.owner);return}if(n.ships.includes(e)){t.drones+=e.drones,e.drones=0;for(const i of e.specs.slice())Kn(n,n.specs[i],t);n.ships=n.ships.filter(i=>i!==e)}}const Ho=(n,e)=>n.corridors.filter(t=>t.a===e||t.b===e),Xa=(n,e,t)=>n.corridors.find(i=>i.a===e&&i.b===t||i.a===t&&i.b===e),Kf=(n,e)=>n.nodes.reduce((t,i)=>t+[i.lane,...i.queue].filter(s=>s&&s.kind==="corridor"&&(i.id===e||+s.id===e)).length,0);function Zf(n,e,t){if(e.id===t.id)return"Pick a different node";if(e.owner!==V||t.owner!==V)return"Both ends must be your nodes";if(Xe(e,t)>ae.corridorRange)return`Too far (corridors reach ${ae.corridorRange})`;if(Xa(n,e.id,t.id)||[e.lane,...e.queue,t.lane,...t.queue].some(i=>i&&i.kind==="corridor"&&(+i.id===e.id||+i.id===t.id)))return"Already linked or being built";for(const i of[e,t])if(Ho(n,i.id).filter(s=>!s.until).length+Kf(n,i.id)>=ae.corridorMax)return`${i.name} already has ${ae.corridorMax} corridors`;return e.queue.length>=4?"Queue full":n.sides[V].ult<ae.corridorCost?"Not enough Ultanium":null}function Jf(n,e,t){const i=Zf(n,e,t);if(i)return i;n.sides[V].ult-=ae.corridorCost;const s=ae.corridorTime*(1-Math.min(.6,rn(n,e).corridor||0));return Zl(e,{kind:"corridor",id:String(t.id),left:s,total:s,cost:ae.corridorCost}),null}function Qf(n,e,t,i,s){if(e.owner!==V||t.owner!==V)return"Both ends must be your nodes";if(!Xa(n,e.id,t.id))return"No corridor between these nodes";if(i=Math.max(0,Math.min(e.drones,Math.floor(i))),s=s.filter(a=>e.specs.includes(a)),!i&&!s.length)return"Nothing to send";if(s.length>os(n,V))return`At most ${os(n,V)} specialists at once`;const r=Bn(n,V,e);r.lane=!0,r.at=-1,r.to=t.id,r.from=e.id,r.drones=i,e.drones-=i;for(const a of s)Xl(n,n.specs[a],r);return n.modV++,null}function jf(n,e,t){if(t.at<0||t.loadUntil>0)return"Ship is not parked here";const i=n.nodes[t.at];if(i.owner!==e.owner)return"Not your node";const s=os(n,e.owner);return e.node===i.id&&!e.held?t.specs.length>=s?`The ship holds ${s} specialists`:(Xl(n,e,t),null):e.ship===t.id?i.specs.length>=s?`${i.name} holds ${s} specialists`:(Kn(n,e,i),t.unload=!1,null):"Specialist is not here"}function qa(n,e){return e.owner===V||n.vis[e.id]>=1||(yt(n,V).remember||0)>0&&n.intel[e.id].seen>=1}function tc(n,e){return ae.shipSpeed*(e.lane?ae.corridorSpeed:1)*Math.max(.3,1+(pi(n,e).speed||0))}function nc(n,e,t){return Xe(e,t)/tc(n,e)}function ns(n,e,t,i,s){if(e.at<0)return"Ship is in flight";if(e.loadUntil>0)return"Ship is loading";const r=n.nodes[e.at];if(t.id===r.id)return"Already here";if(r.owner!==e.owner)return"Not your node";if(e.owner===V&&!qa(n,t))return"Target is not in detection range";const a=Zn(n,e);a||(i=e.drones,s=e.specs.slice());const o=r.drones+(a?e.drones:0);i=Math.max(0,Math.min(Math.floor(i),a?o:e.drones));const l=a?r.specs.concat(e.specs):e.specs.slice();s=s.filter(p=>l.includes(p));const c=os(n,e.owner);if(s.length>c)return`A ship carries at most ${c} specialists`;if(a){const p=l.filter(v=>!s.includes(v));if(p.length>c)return`Only ${c} specialists can stay at this node`;r.drones=o-i,e.drones=i;for(const v of p)n.specs[v].ship===e.id&&Kn(n,n.specs[v],r);for(const v of s)n.specs[v].ship!==e.id&&Xl(n,n.specs[v],e)}const d=i>0||s.length>0;e.to=t.id,e.from=r.id,e.redirected=!1,e.back=!1,e.buffs=[];const u=rn(n,r);u.launchSpeed&&e.buffs.push({k:"speed",v:u.launchSpeed,until:ss}),u.sling&&(e.buffs.push({k:"speed",v:1.5,until:n.t+40}),r.buffs=r.buffs.filter(p=>p.k!=="sling"));const f=pi(n,e);return e.loadUntil=n.t+(d&&!f.noLoad?ae.loadTime:.1),n.modV++,null}function eh(n,e,t){return e.at>=0?"Ship is not in flight":e.redirected?"Already redirected this flight":pi(n,e).redirect?e.owner===V&&!qa(n,t)?"Target is not in detection range":(e.to=t.id,e.redirected=!0,null):"This ship cannot be redirected"}function ic(n,e){const t=n.specs[n.cmdSpec];if(!(!t||!t.cmd))for(t.cmd.xp+=e*(1+(yt(n,V).xp||0));t.cmd.lvl<5&&t.cmd.xp>=ae.xpLevels[t.cmd.lvl];){t.cmd.lvl++,n.modV++;const i=is(n,uu.filter(s=>!t.cmd.perks.includes(s.id)),3).map(s=>s.id);n.pending.push({kind:"perk",node:-1,opts:i,title:`Commander reached level ${t.cmd.lvl}`}),it(n,`Your Commander reached level ${t.cmd.lvl}`,"good")}}function _u(n,e){const t=new Set(n.specs.filter(s=>s.owner===V).map(s=>s.def)),i=is(n,kf.filter(s=>!t.has(s)),3);if(!i.length){n.sides[V].ult+=20;return}n.pending.push({kind:"spec",node:e,opts:i,title:`Residents of ${n.nodes[e].name}`})}function vu(n,e,t){const i=n.sides[V].relics,s=o=>Object.values(ci).filter(l=>l.rarity===o&&!i.includes(l.id)).map(l=>l.id),r=e==="rare"?"uncommon":"common";let a=is(n,s(e),e==="common"?3:2);if(a.length<3&&(a=a.concat(is(n,s(r).filter(o=>!a.includes(o)),3-a.length))),!a.length){n.sides[V].ult+=30;return}n.pending.push({kind:"relic",node:t,opts:a,title:"Choose a relic"})}function xu(n,e,t){const i=n.sides[V];for(const s of t)switch(s[0]){case"ult":i.ult+=s[1];break;case"drones":e.drones+=s[1];break;case"relic":vu(n,s[1],e.id);break;case"tech":{const r=Jl(n,V);r.length?Ql(n,V,Cs(n,r)):i.ult+=30;break}case"ship":Bn(n,V,e);break;case"spec":_u(n,e.id);break;case"xp":ic(n,s[1]);break;case"buff":e.buffs.push({k:s[1],v:s[2],until:n.t+s[3]});break;case"mobil":n.mob.prog=Math.max(0,Math.min(.99,n.mob.prog+s[1]));break;case"hold":e.hold={until:n.t+s[1],total:s[1],need:s[2],fx:s[3],name:e.event?In[e.event].name:"Operation"};break;case"reveal":for(const r of n.nodes)Xe(r,e)<=s[1]&&r.buffs.push({k:"scan",v:1,until:n.t+45});ei(n);break;case"build":{const r=e.kind==="planet"?"shield":(e.b.turret||0)<_n.turret.max?"turret":"screen";e.b[r]=(e.b[r]||0)+1;break}case"ambush":{const r=Gt(n)*Math.PI*2,a=48,o={id:n.nextId++,owner:0,seq:n.nextId++,at:-1,from:e.id,to:e.id,x:e.x+Math.cos(r)*a,y:e.y+Math.sin(r)*a,drones:s[1],specs:[],buffs:[],loadUntil:0,redirected:!1,back:!1,off:!0};n.ships.push(o),it(n,`Automata are closing on ${e.name} with ${s[1]} Drones`,"warn",e.id);break}}}function Mu(n,e,t){return t.ult&&n.sides[V].ult<t.ult?"Not enough Ultanium":t.drones&&e.drones<t.drones?"Not enough Drones here":t.req&&!e.specs.some(i=>n.specs[i].def===t.req&&n.specs[i].owner===V)?`Needs your ${pt[t.req].name} at this node`:null}function th(n,e){const t=n.pending[0];if(!t)return"Nothing to choose";const i=n.sides[V];if(t.kind==="event"){const r=n.nodes[t.node],a=In[t.event];if(e<0||r.owner!==V||r.event!==t.event)return n.pending.shift(),null;const o=a.choices[e],l=Mu(n,r,o);return l||(o.ult&&(i.ult-=o.ult),o.drones&&(r.drones-=o.drones),n.pending.shift(),xu(n,r,o.fx),r.event=null,n.stats.events++,it(n,`${a.name}: ${o.label}`,"info",r.id),null)}const s=t.opts[e];if(s===void 0)return"Pick one";if(n.pending.shift(),t.kind==="draft"){const r=n.nodes[n.home],a=Fs(n,s.base,V,r.id);a.cmd={base:s.base,arch:s.arch,lvl:1,xp:0,perks:[]},a.name="Commander",n.cmdSpec=a.id}else if(t.kind==="spec"){const r=n.nodes[t.node].owner===V?n.nodes[t.node]:Ks(n,V);if(r){const a=Fs(n,s,V,r.id);it(n,`${mi(a)} joined at ${r.name}`,"good",r.id),n.stats.specs++}}else t.kind==="relic"?(i.relics.push(s),n.stats.relics++,it(n,`Relic claimed: ${ci[s].name}`,"good")):t.kind==="perk"&&n.specs[n.cmdSpec].cmd.perks.push(s);return n.modV++,null}function nh(n,e,t){if(e.held!==V||e.node<0)return"Not your prisoner";if(e.def==="warlord"||e.def==="archon")return"Leaders cannot be ransomed or turned";const i=n.sides[V],s=yt(n,V);return t?s.recruit?i.ult<ae.recruitCost?"Not enough Ultanium":(i.ult-=ae.recruitCost,Su(n,e),null):"Needs an Inquisitor":(i.ult+=Math.round(ae.ransom*(1+(s.ransom||0))),Cr(n,e),e.owner=-1,e.held=0,n.modV++,null)}function Su(n,e){const t=n.nodes[e.node];if(n.specs.some(i=>i.owner===V&&i.def===e.def)){n.sides[V].ult+=25,Cr(n,e),e.owner=-1,e.held=0,it(n,`A second ${pt[e.def].name} had nothing to teach; they paid 25 Ultanium for passage`,"info");return}e.owner=V,e.cd={},Kn(n,e,t),n.stats.specs++,it(n,`${mi(e)} now works for you`,"good",t.id)}function ih(n,e,t){if(t.kind==="build")e.b[t.id]=(e.b[t.id]||0)+1,e.owner===V&&it(n,`${_n[t.id].name} finished at ${e.name}`,"info",e.id);else if(t.kind==="corridor"){const i=n.nodes[+t.id];i.owner===e.owner&&!Xa(n,e.id,i.id)?(n.corridors.push({a:e.id,b:i.id,owner:e.owner,until:0}),e.owner===V&&it(n,`Corridor open: ${e.name} to ${i.name}`,"good",e.id)):n.sides[e.owner].ult+=t.cost}else Bn(n,e.owner,e),e.owner===V&&it(n,`Ship launched from the yards at ${e.name}`,"info",e.id)}function sh(n){const e=ae.dt;n.t+=e,n.tick++;const t={},i={};for(const r in n.sides)t[r]=Pr(n,+r),i[r]=0;for(const r of n.nodes){if(r.buffs.length){const u=r.buffs.filter(f=>f.until<=n.t);u.length&&(u.some(f=>f.k==="dbl")&&(r.drones=Math.floor(r.drones*.75)),r.buffs=r.buffs.filter(f=>f.until>n.t))}const a=rn(n,r),o=r.owner===0?r.kind==="planet"?ae.natBySize[r.size]:0:Mr(n,r,a);r.nat<o&&!a.noRegen?r.nat=Math.min(o,r.nat+e*(1+(a.natRegen||0)+.5*(r.b.shield||0))/ae.natRegenSecs):r.nat>o&&(r.nat=o);const l=n.sides[r.owner];if(!l)continue;const c=(a.frozen||0)>0;if(r.lane&&!c){const u=r.lane;u.left-=e*(u.kind==="ship"?1+.25*(r.b.shipyard||0)+(a.shipSpeed||0):1+(a.build||0)),u.left<=0&&(r.lane=r.queue.shift()||null,ih(n,r,u))}else if(r.kind==="station"&&!c&&(r.prod=Math.min(ae.batchTime,r.prod+e*Math.max(.2,1+(a.prod||0)+.25*(r.b.barracks||0))),r.prod>=ae.batchTime)){const u=Math.min(ae.batch+(a.batch||0),Hs(n,r.owner)-t[r.owner]);u>0&&(r.drones+=u,t[r.owner]+=u,r.prod=0,r.owner===V&&(n.stats.dronesMade+=u))}const d=Kl(n,r,a);if(i[r.owner]+=d.out,r.research&&d.resOn){const u=r.research;l.techProg[u]=(l.techProg[u]||0)+e*(1+(a.research||0)),l.techProg[u]>=ts[Mt[u].tier]&&Ql(n,r.owner,u)}if(r.hold&&n.t>=r.hold.until){const u=r.hold;r.hold=null,r.drones>=u.need?(it(n,`${u.name} complete at ${r.name}`,"good",r.id),xu(n,r,u.fx)):it(n,`${u.name} failed at ${r.name}: fewer than ${u.need} Drones on site`,"bad",r.id)}if(r.conv&&n.t>=r.conv.until){const u=n.specs[r.conv.spec];r.conv=null,u&&u.held===V&&u.node===r.id&&Su(n,u)}}for(const r in n.sides){const a=n.sides[r],o=yt(n,+r);let l=i[r]+(a.kind==="player"?ae.baseIncome:3)+(o.incomeFlat||0);if(o.prisonInc&&(l+=o.prisonInc*n.specs.filter(c=>c.held===+r).length),a.ult+=l*e/60,a.kind==="player"&&(n.stats.ultMade+=l*e/60),o.levy&&n.t>=a.levyT){a.levyT=n.t+o.levy;for(const c of n.nodes)c.owner===+r&&t[r]<Hs(n,+r)&&(c.drones++,t[r]++)}}for(const r of n.ships.slice()){if(r.buffs.length&&(r.buffs=r.buffs.filter(c=>c.until>n.t)),r.at>=0){const c=n.nodes[r.at];if(r.loadUntil>0)n.t>=r.loadUntil&&(r.loadUntil=0,r.at=-1,r.x=c.x,r.y=c.y);else if(r.unload&&c.owner===r.owner&&Zn(n,r)){c.drones+=r.drones,r.drones=0;const d=os(n,r.owner);for(const u of r.specs.slice())c.specs.length<d&&Kn(n,n.specs[u],c);r.unload=!1}continue}const a=n.nodes[r.to],o=Xe(r,a),l=tc(n,r)*e;o<=l?qf(n,r):(r.x+=(a.x-r.x)/o*l,r.y+=(a.y-r.y)/o*l)}n.corridors.some(r=>r.until&&r.until<=n.t)&&(n.corridors=n.corridors.filter(r=>!r.until||r.until>n.t));const s=n.specs[n.cmdSpec];s&&(s.owner!==V?(n.result="lose",n.resultWhy="Your Commander was lost with their ship."):s.held?n.cmdLostT<0?(n.cmdLostT=n.t,it(n,`YOUR COMMANDER IS A PRISONER at ${n.nodes[s.node].name}. Retake it before the window closes.`,"bad",s.node)):n.t-n.cmdLostT>=sc(n)&&(n.result="lose",n.resultWhy=`Your Commander was not recovered from ${n.nodes[s.node].name} in time.`):n.cmdLostT=-1,!n.result&&!n.nodes.some(r=>r.owner===V)&&(n.result="lose",n.resultWhy="You hold no territory.")),n.tick%3===0&&ei(n)}const sc=n=>ae.rescueSecs+(yt(n,V).rescue||0),rh=["Ka","Ve","Or","Tal","Mi","Sen","Dra","Ul","Phe","Ny","Cor","Az","Lo","Ery","Bri","Zan","Hel","Qua","Io","Xe"],ah=["ris","dan","thos","mir","vek","lun","tar","ion","sha","bor","nea","rax","phi","dor","lys","gan","tis","mon","rae","kai"];function no(n,e,t,i){return{owner:n,kind:e,fac:t,ult:i,techs:[],techProg:{},relics:[],broken:!1,aiT:6+n*2,expT:60+n*15,capBase:0,refundT:0,levyT:60}}function oh(n,e=0){const s={v:1,seed:n,rng:n|0,t:0,tick:0,modV:1,threat:e,w:560,h:360,nodes:[],ships:[],specs:[],sides:{},factions:[2,3,4],archon:5,mob:{stage:1,prog:0,nextOff:ae.graceSecs,turn:0,surge:0},offs:[],corridors:[],pending:[],log:[],cmdSpec:-1,cmdLostT:-1,intel:[],vis:[],result:null,resultWhy:"",stats:{captures:0,nodesLost:0,battles:0,dronesLost:0,dronesMade:0,shipsLost:0,specs:0,specsLost:0,relics:0,techs:0,events:0,warlords:0,ultMade:0},nextId:1,home:0,citadel:1};for(let x=0;x<5;x++)Gt(s);const r=[{x:fn(s,42,60),y:fn(s,360*.32,360*.68),region:V},{x:560-fn(s,42,60),y:fn(s,360*.32,360*.68),region:5}];for(let x=0;x<6e3&&r.length<58;x++){const P={x:fn(s,24,536),y:fn(s,24,336),region:0};r.every(R=>Xe(P,R)>=31)&&r.push(P)}const a=r[0],o=r[1],l=()=>r.filter(x=>x.region===0),c=(x,P)=>P.slice().sort((R,C)=>Xe(R,x)-Xe(C,x));for(const x of c(o,l()).slice(0,4))Xe(x,o)<95&&(x.region=5);const d=ma(s,[.2,.5,.8]),u=[.42,.6,.74],f=[];for(const x of[2,1,0]){const P={x:u[x]*560+fn(s,-15,15),y:d[x]*360+fn(s,-20,20)},R=c(P,l().filter(C=>Xe(C,a)>125))[0];R.region=2+x,f[x]=R;for(const C of c(R,l().filter(N=>Xe(N,a)>96)).slice(0,6))Xe(C,R)<95&&(C.region=2+x)}const p=is(s,Object.keys(qn),3);s.sides[V]=no(V,"player","",ae.startUlt),p.forEach((x,P)=>s.sides[2+P]=no(2+P,"faction",x,20)),s.sides[5]=no(5,"archon",Cs(s,Object.keys(as)),30);const v=Xe(a,o),y=c(a,l()),g=new Set,m=()=>{for(;;){const x=Cs(s,rh)+Cs(s,ah);if(!g.has(x))return g.add(x),x}},h={list:[]},E=x=>{h.list.length||(h.list=ma(s,Object.keys(In)));const P=h.list.findIndex(R=>In[R].on==="any"||In[R].on===x);return P<0?null:h.list.splice(P,1)[0]},M=1+.08*e;r.forEach((x,P)=>{const R=Math.max(0,Math.min(1,Xe(x,a)/v+fn(s,-.12,.12))),C={id:P,name:m(),kind:"planet",x:x.x,y:x.y,size:0,owner:x.region,region:x.region,threat:R,drones:0,nat:0,b:{},lane:null,queue:[],prod:0,research:null,resFirst:!1,specs:[],prisoners:[],buffs:[],event:null,offer:!1,hold:null,conv:null,capital:!1,citadel:!1,home:!1},N=Gt(s);if(C.size=N<.35?0:N<.8?1:2,x===a)C.kind="station",C.home=!0,C.drones=ae.startDrones,C.name="Haven";else if(x===o)C.kind="station",C.citadel=!0,C.name="The Citadel",C.drones=Math.round(46*M),C.b={turret:3,screen:1,barracks:1,shipyard:1,dock:2};else if(x.region===0){const B=y.indexOf(x);C.owner=0,C.kind=B<2?"planet":B===2?"station":Gt(s)<.62?"planet":"station",B===0&&(C.size=0),B===1&&(C.size=1);const L=Xe(x,a)<78||B<=2;C.drones=L?pa(s,0,2)+(C.kind==="station"?3:0):Math.round((R*22*fn(s,.6,1.3)+(C.kind==="station"?4:0))*M),C.kind==="planet"?(C.offer=!0,B>1&&Gt(s)<.3&&(C.event=E("planet"))):(C.event=E("station"),Gt(s)<.5&&(C.b[Cs(s,["turret","barracks","shipyard","sensor","dock"])]=1))}else{const B=f.includes(x);C.capital=B,C.kind=B?"station":Gt(s)<.55?"planet":"station",C.drones=Math.round((B?22+R*14:7+R*14*fn(s,.7,1.2))*M),x.region===5&&(C.drones=Math.round(pa(s,16,24)*M)),C.kind==="planet"?(C.b={gen:1,mine:pa(s,1,2)},x.region===5&&(C.b.shield=1)):B?C.b={turret:2,barracks:1,dock:1}:Gt(s)<.5&&(C.b={turret:1})}C.kind==="planet"&&(C.nat=ae.natBySize[C.size]),s.nodes.push(C),s.intel.push({seen:0,t:0,snap:null}),s.vis.push(0)}),s.home=0,s.citadel=1,Bn(s,V,s.nodes[0]);for(const x of s.factions){const P=qn[s.sides[x].fac],R=s.nodes.filter(L=>L.owner===x),C=R.find(L=>L.capital);C.name=P.name.split(" ")[0]+" Prime",Fs(s,"warlord",x,C.id).name=P.warlord;const N=ma(s,R.filter(L=>!L.capital));P.specs.forEach((L,z)=>{N[z]&&Fs(s,L,x,N[z].id)}),Bn(s,x,C),Bn(s,x,C);const B=R.find(L=>L.kind==="station"&&!L.capital);B&&Bn(s,x,B),s.sides[x].capBase=R.reduce((L,z)=>L+z.drones,0)+10}const w=as[s.sides[5].fac];Fs(s,"archon",5,1).name=`${w.name} ${w.title}`,Bn(s,5,s.nodes[1]),Bn(s,5,s.nodes[1]),s.sides[5].capBase=s.nodes.filter(x=>x.owner===5).reduce((x,P)=>x+P.drones,0)+10;const T=is(s,zf,3),_=is(s,Object.keys(ki),3);return s.pending.push({kind:"draft",node:0,opts:T.map((x,P)=>({base:x,arch:_[P]})),title:"Choose your Commander"}),ei(s),s}const lh={aggr:1,expand:1e9,react:.9,target:"weak",build:{turret:3,screen:2,barracks:3,mine:2,gen:2,shield:2,dock:1}},bu=(n,e)=>n.sides[e].kind==="faction"?qn[n.sides[e].fac].ai:lh,rc=(n,e)=>n.ships.find(t=>t.owner===e.owner&&t.at===e.id&&t.loadUntil===0);function pr(n,e){const t=rc(n,e);if(t)return t;const i=n.sides[e.owner],s=Sr(n,e.owner);if(!(i.ult<s))return i.ult-=s,Bn(n,e.owner,e)}const io=(n,e)=>!!rc(n,e)||n.sides[e.owner].ult>=Sr(n,e.owner),yu=(n,e)=>us(n,0,{},e,rn(n,e)).def;function Xc(n,e,t){const i=Object.keys(e).filter(t);let s=i.reduce((a,o)=>a+e[o],0);if(!i.length)return null;let r=Gt(n)*s;for(const a of i)if(r-=e[a],r<=0)return a;return i[0]}function ch(n,e){const t=n.sides[e],i=bu(n,e),s=n.nodes.filter(l=>l.owner===e);if(!s.length||t.broken)return;for(const l of s)if(!l.lane){if(l.kind==="planet"){if(!Ps(n,l,"mine"))lr(n,l,"mine");else if(!Ps(n,l,"gen")&&(l.b.mine||0)>=(l.b.gen||0)*ae.minesPerGen)lr(n,l,"gen");else if(Gt(n)<.3){const c=Xc(n,i.build,d=>_n[d].on==="planet"&&!Ps(n,l,d));c&&lr(n,l,c)}}else if(Gt(n)<.15){const c=Xc(n,i.build,d=>_n[d].on==="station"&&!Ps(n,l,d));c&&lr(n,l,c)}}if(n.ships.filter(l=>l.owner===e).length<3+Math.floor(n.mob.stage/2)&&!s.some(l=>l.lane?.kind==="ship")){const l=s.filter(c=>c.kind==="station"&&!c.lane).sort((c,d)=>d.drones-c.drones)[0];l&&pu(n,l)}const a=s.find(l=>n.ships.filter(c=>c.owner===e&&c.at===l.id&&c.loadUntil===0).length>=2);if(a){const l=s.filter(c=>c.drones>=10&&!n.ships.some(d=>d.owner===e&&(d.at===c.id||d.to===c.id))).sort((c,d)=>Xe(c,a)-Xe(d,a))[0];l&&ns(n,rc(n,a),l,0,[])}for(const l of n.ships){if(l.owner!==V||l.at>=0||l.drones<=0||l.off)continue;const c=n.nodes[l.to];if(c.owner!==e||(l.off=!0,pi(n,l).stealth||Gt(n)>i.react))continue;const d=nc(n,l,c),u=s.filter(f=>f.id!==c.id&&f.drones>8&&io(n,f)&&Xe(f,c)/ae.shipSpeed+ae.loadTime+1<d).sort((f,p)=>p.drones-f.drones)[0];u&&ns(n,pr(n,u),c,Math.floor((u.drones-4)*.6),[])}const o=s.filter(l=>!l.capital&&l.drones<6+Math.round(l.threat*8)).sort((l,c)=>l.drones-c.drones)[0];if(o){const l=s.filter(c=>c.id!==o.id&&c.drones>20&&io(n,c)).sort((c,d)=>Xe(c,o)-Xe(d,o))[0];l&&ns(n,pr(n,l),o,Math.min(10,Math.floor((l.drones-12)/2)+4),[])}if(n.t>=t.expT&&t.kind==="faction"){let l=null;for(const c of s)if(io(n,c))for(const d of n.nodes){if(d.owner!==0)continue;const u=Xe(c,d);if(u>120)continue;const f=yu(n,d)+2;c.drones-6>=f&&(!l||u<l.d)&&(l={src:c,tgt:d,need:f,d:u})}l&&(ns(n,pr(n,l.src),l.tgt,l.need+pa(n,0,3),[]),t.expT=n.t+i.expand*fn(n,.8,1.2))}}function dh(n,e){const t=bu(n,e),i=n.nodes.filter(p=>p.owner===e),s=n.nodes.filter(p=>p.owner===V);if(!i.length||!s.length)return;let r=null,a=1e9;for(const p of s){const v=Math.min(...i.map(m=>Xe(m,p))),y=yu(n,p);let g=t.target==="weak"?y*4+v*.5:v+y*1.5;t.target==="spec"&&(g-=60*p.specs.length+(p.specs.includes(n.cmdSpec)?120:0)),g<a&&(a=g,r=p)}if(!r)return;const o=r,l=i.slice().sort((p,v)=>Xe(p,o)-Xe(v,o))[0],c=Math.min(.92,ae.offCommit[n.mob.stage]*(1+(yt(n,n.archon).offBig||0))*(.7+.3*t.aggr)),d=i.filter(p=>p.id!==l.id&&p.drones>=9&&Xe(p,l)<200).sort((p,v)=>Xe(p,l)-Xe(v,l)).slice(0,1+n.mob.stage+n.mob.surge);let u=ae.gatherSecs;for(const p of d){const v=pr(n,p);if(!v)continue;const y=p.capital||p.citadel?Math.max(12,Math.floor(p.drones*.4)):5;ns(n,v,l,Math.floor((p.drones-y)*c),[])||(v.off=!0,u=Math.max(u,Xe(p,l)/tc(n,v)+ae.loadTime+6))}const f=(yt(n,V).warn||0)>0;n.offs.push({owner:e,target:o.id,staging:l.id,launchT:n.t+u,warned:f}),it(n,f?`${Yn(n,e)} is massing at ${l.name} to strike ${o.name}`:`${Yn(n,e)} is mobilizing for an offensive`,"warn",f?o.id:-1)}function uh(n,e){const t=n.nodes[e.staging];if(t.owner!==e.owner||n.sides[e.owner].broken)return;let i=n.nodes[e.target];if(i.owner!==V){const o=n.nodes.filter(l=>l.owner===V).sort((l,c)=>Xe(l,t)-Xe(c,t))[0];if(!o)return;i=o}const s=t.capital||t.citadel?Math.max(12,Math.floor(t.drones*.4)):5,r=t.drones-s;if(r<6)return;const a=pr(n,t);a&&(ns(n,a,i,r,[])||(a.off=!0))}function fh(n){const e=n.mob;{const t=ae.stageSecs*(1-.05*n.threat);if(e.prog+=ae.dt/t*Math.max(.3,1-(yt(n,V).mobSlow||0)),e.prog>=1&&e.stage>=5)e.surge++,e.prog=0,it(n,`Total war: Coalition reserves deepen (surge ${e.surge}). Every faction can field more Drones.`,"warn");else if(e.prog>=1){e.stage++,e.prog=0,it(n,`Coalition mobilization reached stage ${e.stage}. Offensives grow larger and more frequent.`,"warn");for(const i of n.factions){const s=n.sides[i];if(s.broken)continue;const r=qn[s.fac].techs.filter(a=>!s.techs.includes(a));for(const a of r.slice(0,s.fac==="lumen"?2:1))Ql(n,i,a)}}}if(n.t>=e.nextOff){const t=n.factions.filter(i=>!n.sides[i].broken&&n.nodes.some(s=>s.owner===i));(e.stage>=4||!t.length)&&t.push(n.archon),dh(n,t[e.turn%t.length]),e.turn++,e.nextOff=n.t+ae.offInterval[e.stage]*fn(n,.85,1.15)/(1+.04*n.threat)}if(n.offs.length){const t=n.offs.filter(i=>n.t>=i.launchT);if(t.length){n.offs=n.offs.filter(i=>n.t<i.launchT);for(const i of t)uh(n,i)}}}function hh(n){fh(n);for(const e of[...n.factions,n.archon]){const t=n.sides[e];n.t>=t.aiT&&(t.aiT=n.t+8+Gt(n)*4,ch(n,e))}}function Lr(n){const e=[],t=pt[n.def].active;return t&&e.push(t),n.cmd&&(e.push(ki[n.cmd.arch].a),n.cmd.lvl>=3&&e.push(ki[n.cmd.arch].b)),e}const Ya=(n,e,t)=>Math.max(0,(e.cd[t]||0)-n.t),so=(n,e)=>{const t=Hs(n.g,n.sp.owner)-Pr(n.g,n.sp.owner),i=Math.max(0,Math.min(e,t));return i<=0?"Drone cap reached":(n.here.drones+=i,null)},er=(n,e,t=ss)=>i=>(i.s.buffs.push({k:n,v:e,until:t>=ss?ss:i.g.t+t}),null),qi=(n,e,t)=>i=>(i.n.buffs.push({k:n,v:e,until:i.g.t+t}),null),ro=(n,e,t)=>i=>(i.t.buffs.push({k:n,v:e,until:i.g.t+t}),ei(i.g),null),qc=(n,e)=>t=>{for(const i of t.g.nodes)Xe(i,t.here)<=n&&i.buffs.push({k:"scan",v:1,until:t.g.t+e});return ei(t.g),null},ph=n=>(n.n?n.n.specs:n.s.specs).map(e=>n.g.specs[e]).filter(e=>e.id!==n.sp.id&&e.owner===n.sp.owner),Yc=n=>{const e=ph(n);if(!e.length)return"No other specialist here";for(const t of e)t.cd={};return null},Kc=n=>e=>{const t=e.n,i=e.g.sides[t.owner];return t.research?(i.techProg[t.research]=(i.techProg[t.research]||0)+n,null):"No research running here"},Zc=n=>{const e=Ks(n.g,n.sp.owner);if(!e||n.n&&e.id===n.n.id)return"Already home";const t=(n.n?n.n.specs:n.s.specs).slice();for(const i of t)Kn(n.g,n.g.specs[i],e);return null},Jc=n=>e=>(e.t.drones-=Math.floor(e.t.drones*n),ei(e.g),null),mh={fullburn:er("speed",.5,30),repair:n=>{const e=n.n;return e.lane&&(e.lane.left=Math.max(.1,e.lane.left-25)),e.nat=Mr(n.g,e),null},surge:qi("mine",.5,60),deepscan:ro("scan",1,60),flank:er("ignNat",1),lockdown:qi("def",6,45),sabotage:ro("frozen",1,45),parley:ro("def",-5,60),breakthrough:Kc(30),extraction:Zc,ambush:qi("ambush",.3,90),convert:n=>{const e=n.n;if(e.conv)return"A conversion is already running here";const t=e.prisoners.map(i=>n.g.specs[i]).find(i=>i.held===V&&i.def!=="warlord"&&i.def!=="archon");return t?(e.conv={spec:t.id,until:n.g.t+60},null):"No convertible prisoner here"},conscript:n=>so(n,6),chart:qc(160,40),strip:n=>(n.g.sides[n.sp.owner].ult+=20,n.n.buffs.push({k:"offline",v:1,until:n.g.t+60}),null),smoke:n=>{const e=n.g.ships.filter(t=>t.at<0&&t.to===n.n.id&&t.owner!==n.sp.owner);if(!e.length)return"No enemy fleet is heading here";for(const t of e){const i=n.g.nodes[t.from],s=i.owner===t.owner?i:Ks(n.g,t.owner);s?(t.to=s.id,t.off=!1):t.drones=0}return n.g.offs=n.g.offs.filter(t=>t.target!==n.n.id),null},breach:n=>(n.t.nat=0,n.t.buffs.push({k:"noRegen",v:1,until:n.g.t+60}),ei(n.g),null),laststand:qi("dbl",1,30),reprise:Yc,bribe:n=>{const e=n.t,t=n.g,i=e.drones+Math.floor(e.nat);if(i>14)return"Too strong to buy (strength above 14)";const s=2*i;if(t.sides[V].ult<s)return`Needs ${s} Ultanium`;t.ships.find(o=>o.owner===V&&o.at>=0&&o.loadUntil===0),t.sides[V].ult-=s;const r={owner:V,seq:0,at:-1,from:e.id,to:e.id,x:e.x,y:e.y,drones:0,specs:[],buffs:[],off:!1},a=us(t,0,{},e,{});return a.win=!0,a.surv=0,a.sent=0,ec(t,e,r,a,{}),null},fence:n=>(n.g.sides[n.sp.owner].ult+=2*n.g.nodes.filter(e=>e.owner===n.sp.owner).length,null),rampart:n=>(n.n.nat=Mr(n.g,n.n),null),levy:n=>{let e=!1;for(const t of n.g.nodes)t.owner===n.sp.owner&&t.kind==="station"&&Pr(n.g,n.sp.owner)+3<=Hs(n.g,n.sp.owner)&&(t.drones+=3,e=!0);return e?null:"Drone cap reached"},foresight:n=>(n.g.mob.prog=Math.max(0,n.g.mob.prog-.1),null),charge:er("atk",5),slingshot:qi("sling",1,30),vein:n=>(n.g.sides[n.sp.owner].ult+=25,null),fortify:n=>{const e=n.n,t=e.kind==="planet"?"shield":(e.b.turret||0)<_n.turret.max?"turret":"screen";return(e.b[t]||0)>=_n[t].max?"No room for another structure":(e.b[t]=(e.b[t]||0)+1,null)},bloodrush:n=>(n.s.buffs.push({k:"atkPct",v:.4,until:ss},{k:"surv",v:-.3,until:ss}),null),focus:qi("preKill",.3,45),raidA:Jc(.25),warp:n=>{const e=n.s,t=n.g.nodes[e.to];return e.x+=(t.x-e.x)/2,e.y+=(t.y-e.y)/2,null},decisive:er("atkPct",.3),rally:n=>so(n,8),slipstream:er("speed",1,40),sweep:qc(200,45),aegis:qi("def",10,45),recall:Zc,crash:n=>n.n.lane?(n.n.lane.left=.05,null):"Nothing is being built here",windfall:n=>(n.g.sides[n.sp.owner].ult+=3*n.g.nodes.filter(e=>e.owner===n.sp.owner&&e.kind==="planet").length,null),raid:Jc(.3),pressgang:n=>so(n,Math.min(10,Math.max(1,Math.floor(n.here.drones*.2)))),insight:Yc,eureka:Kc(60),rapidlink:n=>{const e=n.n,t=n.t;return Xa(n.g,e.id,t.id)?"Already linked":Xe(e,t)>ae.corridorRange*1.5?"Too far for a temporary corridor":(n.g.corridors.push({a:e.id,b:t.id,owner:n.sp.owner,until:n.g.t+60}),null)}};function ac(n,e,t,i){if(e.held)return"Specialist is a prisoner";if(Ya(n,e,t.id)>0)return"On cooldown";const s=e.ship>=0&&Jt(n,e.ship)||null,r=!!s&&s.at<0;if(t.at==="ship"&&!r)return"Use while the ship is in flight";if((t.at==="node"||t.at==="planet")&&e.node<0)return"Use while stationed at a node";if(t.at==="planet"&&n.nodes[e.node].kind!=="planet")return"Use on a planet";if(t.target!=="self"){if(!i)return"Pick a target";const a=n.vis[i.id];if(t.target==="own"){if(i.owner!==e.owner)return"Pick one of your nodes";if(i.id===e.node)return"Pick a different node"}else if(t.target==="node"){if(a<1)return"Target must be detected";if(i.owner===V)return"Pick a node you do not own"}else{if(a<2)return"Target must be fully identified";if(i.owner===V)return"Pick a node you do not own";if(t.target==="neutral"&&i.owner!==0)return"Pick a neutral node";if(t.target==="enemy"&&i.owner===0)return"Pick an enemy node"}}return null}function gh(n,e,t,i){const s=Lr(e).find(d=>d.id===t);if(!s)return"Unknown ability";const r=ac(n,e,s,i);if(r)return r;const a=e.ship>=0?Jt(n,e.ship):null,o=e.node>=0?n.nodes[e.node]:null,l=mh[t]({g:n,sp:e,n:o,s:a,here:o||a,t:i});if(l)return l;const c=Math.max(.4,Math.min(1.6,1-(yt(n,e.owner).cd||0)));return e.cd[t]=n.t+s.cd*c,n.modV++,e.owner===V&&it(n,`${e.name||pt[e.def].name}: ${s.name}`,"info",o?o.id:-1),null}function _h(n){return n.result||n.pending.length?!1:(sh(n),n.result||hh(n),!0)}function vh(n,e){if(n.result)return"The run is over";const t=i=>{const s=n.nodes[i];return s&&s.owner===V?s:null};switch(e.c){case"build":{const i=t(e.node);return i?lr(n,i,e.id):"Not your node"}case"ship":{const i=t(e.node);return i?pu(n,i):"Not your node"}case"cancel":{const i=t(e.node);return i?(Wf(n,i,e.idx),null):"Not your node"}case"research":{const i=t(e.node);return i?e.id===null?(i.research=null,null):$f(n,i,e.id):"Not your node"}case"resFirst":{const i=t(e.node);return i?(i.resFirst=!i.resFirst,null):"Not your node"}case"launch":{const i=Jt(n,e.ship);return!i||i.owner!==V?"Not your ship":ns(n,i,n.nodes[e.to],e.drones,e.specs)}case"redirect":{const i=Jt(n,e.ship);return!i||i.owner!==V?"Not your ship":eh(n,i,n.nodes[e.to])}case"ability":{const i=n.specs[e.spec];return!i||i.owner!==V?"Not your specialist":gh(n,i,e.id,e.target>=0?n.nodes[e.target]:null)}case"choose":return th(n,e.idx);case"ransom":{const i=n.specs[e.spec];return i?nh(n,i,e.recruit):"Unknown prisoner"}case"corridor":return Jf(n,n.nodes[e.from],n.nodes[e.to]);case"transfer":return Qf(n,n.nodes[e.from],n.nodes[e.to],e.drones,e.specs);case"swap":{const i=n.specs[e.spec],s=Jt(n,e.ship);return!i||i.owner!==V||!s||s.owner!==V?"Not yours":jf(n,i,s)}case"event":{const i=t(e.node);return!i||!i.event?"No event here":(n.pending.push({kind:"event",node:i.id,opts:[],title:In[i.event].name,event:i.event}),null)}}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oc="187",xh=0,Qc=1,Mh=2,_a=1,Sh=2,cr=3,ls=0,cn=1,Hn=2,Os=0,mr=1,jc=2,ed=3,td=4,bh=5,As=100,yh=101,Eh=102,Th=103,wh=104,Ah=200,Rh=201,Ch=202,Ph=203,Eu=204,Tu=205,Lh=206,Dh=207,Ih=208,Nh=209,Uh=210,Fh=211,Oh=212,Bh=213,kh=214,Vo=0,Wo=1,$o=2,yr=3,Xo=4,qo=5,Yo=6,Ko=7,lc=0,zh=1,Gh=2,fi=0,wu=1,Au=2,Ru=3,Cu=4,Pu=5,Lu=6,Du=7,Iu=300,Vs=301,Er=302,ao=303,oo=304,Zo=1e3,di=1001,Jo=1002,Vt=1003,Hh=1004,zr=1005,ln=1006,lo=1007,Di=1008,pn=1009,Nu=1010,Uu=1011,Tr=1012,cc=1013,Jn=1014,Vn=1015,Qn=1016,dc=1017,uc=1018,Ws=1020,Fu=35902,Ou=35899,Bu=1021,ku=1022,Wn=1023,zi=1026,Ii=1027,zu=1028,fc=1029,cs=1030,hc=1031,pc=1033,va=33776,xa=33777,Ma=33778,Sa=33779,Qo=35840,jo=35841,el=35842,tl=35843,nl=36196,il=37492,sl=37496,rl=37488,al=37489,wa=37490,ol=37491,ll=37808,cl=37809,dl=37810,ul=37811,fl=37812,hl=37813,pl=37814,ml=37815,gl=37816,_l=37817,vl=37818,xl=37819,Ml=37820,Sl=37821,bl=36492,yl=36494,El=36495,Tl=36283,wl=36284,Aa=36285,Al=36286,Vh=3200,Rl=0,Wh=1,Ri="",hn="srgb",Ra="srgb-linear",Ca="linear",ct="srgb",co=7680,$h=519,Xh=512,qh=513,Yh=514,Gu=515,Kh=516,Zh=517,Hu=518,Vu=519,Jh=35044,nd="300 es",Ln=2e3,wr=2001;function Qh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Pa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jh(){const n=Pa("canvas");return n.style.display="block",n}const id={};function sd(...n){const e="THREE."+n.shift();console.log(e,...n)}function Wu(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Le(...n){n=Wu(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function rt(...n){n=Wu(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ba(...n){const e=n.join(" ");e in id||(id[e]=!0,Le(...n))}function ep(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const tp={[Vo]:Vo,[$o]:Yo,[Xo]:Xo,[yr]:qo,[Wo]:Wo,[Yo]:$o,[Ko]:Ko,[qo]:yr};class fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uo=Math.PI/180,Cl=180/Math.PI;function Dr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function np(n,e){return(n%e+e)%e}function fo(n,e,t){return(1-t)*n+t*e}function ip(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function mc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function sp(n,e){if(e.constructor===Float32Array)return n;const t=mc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function rp(n,e){if(e.constructor===Float32Array)return n;const t=mc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const Rc=class Rc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rc.prototype.isVector2=!0;let We=Rc;class Zs{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],d=i[s+2],u=i[s+3],f=r[a+0],p=r[a+1],v=r[a+2],y=r[a+3];if(u!==y||l!==f||c!==p||d!==v){let g=l*f+c*p+d*v+u*y;g<0&&(f=-f,p=-p,v=-v,y=-y,g=-g);let m=1-o;if(g<.9995){const h=Math.acos(g),E=Math.sin(h);m=Math.sin(m*h)/E,o=Math.sin(o*h)/E,l=l*m+f*o,c=c*m+p*o,d=d*m+v*o,u=u*m+y*o}else{l=l*m+f*o,c=c*m+p*o,d=d*m+v*o,u=u*m+y*o;const h=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=h,c*=h,d*=h,u*=h}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],d=i[s+3],u=r[a],f=r[a+1],p=r[a+2],v=r[a+3];return e[t]=o*v+d*u+l*p-c*f,e[t+1]=l*v+d*f+c*u-o*p,e[t+2]=c*v+d*p+o*f-l*u,e[t+3]=d*v-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(s/2),u=o(r/2),f=l(i/2),p=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=f*d*u+c*p*v,this._y=c*p*u-f*d*v,this._z=c*d*v+f*p*u,this._w=c*d*u-f*p*v;break;case"YXZ":this._x=f*d*u+c*p*v,this._y=c*p*u-f*d*v,this._z=c*d*v-f*p*u,this._w=c*d*u+f*p*v;break;case"ZXY":this._x=f*d*u-c*p*v,this._y=c*p*u+f*d*v,this._z=c*d*v+f*p*u,this._w=c*d*u-f*p*v;break;case"ZYX":this._x=f*d*u-c*p*v,this._y=c*p*u+f*d*v,this._z=c*d*v-f*p*u,this._w=c*d*u+f*p*v;break;case"YZX":this._x=f*d*u+c*p*v,this._y=c*p*u+f*d*v,this._z=c*d*v-f*p*u,this._w=c*d*u-f*p*v;break;case"XZY":this._x=f*d*u-c*p*v,this._y=c*p*u-f*d*v,this._z=c*d*v+f*p*u,this._w=c*d*u+f*p*v;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],f=i+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(d-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-i*c,this._z=r*d+a*c+i*l-s*o,this._w=a*d-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Cc=class Cc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),d=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*d,this.y=i+l*d+o*c-r*u,this.z=s+l*u+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ho.copy(this).projectOnVector(e),this.sub(ho)}reflect(e){return this.sub(ho.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Cc.prototype.isVector3=!0;let O=Cc;const ho=new O,rd=new Zs,Pc=class Pc{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],u=i[7],f=i[2],p=i[5],v=i[8],y=s[0],g=s[3],m=s[6],h=s[1],E=s[4],M=s[7],w=s[2],T=s[5],_=s[8];return r[0]=a*y+o*h+l*w,r[3]=a*g+o*E+l*T,r[6]=a*m+o*M+l*_,r[1]=c*y+d*h+u*w,r[4]=c*g+d*E+u*T,r[7]=c*m+d*M+u*_,r[2]=f*y+p*h+v*w,r[5]=f*g+p*E+v*T,r[8]=f*m+p*M+v*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-i*r*d+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*a-o*c,f=o*l-d*r,p=c*r-a*l,v=t*u+i*f+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=u*y,e[1]=(s*c-d*i)*y,e[2]=(o*i-s*a)*y,e[3]=f*y,e[4]=(d*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ba("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(po.makeScale(e,t)),this}rotate(e){return ba("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(po.makeRotation(-e)),this}translate(e,t){return ba("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(po.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Pc.prototype.isMatrix3=!0;let Ie=Pc;const po=new Ie,ad=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),od=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ap(){const n={enabled:!0,workingColorSpace:Ra,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(s.r=hi(s.r),s.g=hi(s.g),s.b=hi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=Bs(s.r),s.g=Bs(s.g),s.b=Bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ri?Ca:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ra]:{primaries:e,whitePoint:i,transfer:Ca,toXYZ:ad,fromXYZ:od,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:ad,fromXYZ:od,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),n}const Qe=ap();function hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ps;class op{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ps===void 0&&(ps=Pa("canvas")),ps.width=e.width,ps.height=e.height;const s=ps.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ps}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=hi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hi(t[i]/255)*255):t[i]=hi(t[i]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lp=0;class gc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Dr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(mo(s[a].image)):r.push(mo(s[a]))}else r=mo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function mo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?op.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let cp=0;const go=new O;class Qt extends fs{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,i=di,s=di,r=ln,a=Di,o=Wn,l=pn,c=Qt.DEFAULT_ANISOTROPY,d=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Dr(),this.name="",this.source=new gc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(go).x}get height(){return this.source.getSize(go).y}get depth(){return this.source.getSize(go).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Iu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zo:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case Jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zo:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case Jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Iu;Qt.DEFAULT_ANISOTROPY=1;const Lc=class Lc{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],d=l[4],u=l[8],f=l[1],p=l[5],v=l[9],y=l[2],g=l[6],m=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-y)<.01&&Math.abs(v-g)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+y)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,M=(p+1)/2,w=(m+1)/2,T=(d+f)/4,_=(u+y)/4,x=(v+g)/4;return E>M&&E>w?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=T/i,r=_/i):M>w?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=x/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=_/r,s=x/r),this.set(i,s,r,t),this}let h=Math.sqrt((g-v)*(g-v)+(u-y)*(u-y)+(f-d)*(f-d));return Math.abs(h)<.001&&(h=1),this.x=(g-v)/h,this.y=(u-y)/h,this.z=(f-d)/h,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Lc.prototype.isVector4=!0;let St=Lc;class dp extends fs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];const s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Qt({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new gc(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends dp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class $u extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class up extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ga=class Ga{constructor(e,t,i,s,r,a,o,l,c,d,u,f,p,v,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,d,u,f,p,v,y,g)}set(e,t,i,s,r,a,o,l,c,d,u,f,p,v,y,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=d,m[10]=u,m[14]=f,m[3]=p,m[7]=v,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ga().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ms.setFromMatrixColumn(e,0).length(),r=1/ms.setFromMatrixColumn(e,1).length(),a=1/ms.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*d,p=a*u,v=o*d,y=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=p+v*c,t[5]=f-y*c,t[9]=-o*l,t[2]=y-f*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*d,p=l*u,v=c*d,y=c*u;t[0]=f+y*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=p*o-v,t[6]=y+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*d,p=l*u,v=c*d,y=c*u;t[0]=f-y*o,t[4]=-a*u,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*d,t[9]=y-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*d,p=a*u,v=o*d,y=o*u;t[0]=l*d,t[4]=v*c-p,t[8]=f*c+y,t[1]=l*u,t[5]=y*c+f,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,v=o*l,y=o*c;t[0]=l*d,t[4]=y-f*u,t[8]=v*u+p,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*u+v,t[10]=f-y*u}else if(e.order==="XZY"){const f=a*l,p=a*c,v=o*l,y=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=f*u+y,t[5]=a*d,t[9]=p*u-v,t[2]=v*u-p,t[6]=o*d,t[10]=y*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fp,e,hp)}lookAt(e,t,i){const s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),vi.crossVectors(i,dn),vi.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),vi.crossVectors(i,dn)),vi.normalize(),Gr.crossVectors(dn,vi),s[0]=vi.x,s[4]=Gr.x,s[8]=dn.x,s[1]=vi.y,s[5]=Gr.y,s[9]=dn.y,s[2]=vi.z,s[6]=Gr.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],u=i[5],f=i[9],p=i[13],v=i[2],y=i[6],g=i[10],m=i[14],h=i[3],E=i[7],M=i[11],w=i[15],T=s[0],_=s[4],x=s[8],P=s[12],R=s[1],C=s[5],N=s[9],B=s[13],L=s[2],z=s[6],$=s[10],F=s[14],ne=s[3],X=s[7],j=s[11],te=s[15];return r[0]=a*T+o*R+l*L+c*ne,r[4]=a*_+o*C+l*z+c*X,r[8]=a*x+o*N+l*$+c*j,r[12]=a*P+o*B+l*F+c*te,r[1]=d*T+u*R+f*L+p*ne,r[5]=d*_+u*C+f*z+p*X,r[9]=d*x+u*N+f*$+p*j,r[13]=d*P+u*B+f*F+p*te,r[2]=v*T+y*R+g*L+m*ne,r[6]=v*_+y*C+g*z+m*X,r[10]=v*x+y*N+g*$+m*j,r[14]=v*P+y*B+g*F+m*te,r[3]=h*T+E*R+M*L+w*ne,r[7]=h*_+E*C+M*z+w*X,r[11]=h*x+E*N+M*$+w*j,r[15]=h*P+E*B+M*F+w*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],f=e[10],p=e[14],v=e[3],y=e[7],g=e[11],m=e[15],h=l*p-c*f,E=o*p-c*u,M=o*f-l*u,w=a*p-c*d,T=a*f-l*d,_=a*u-o*d;return t*(y*h-g*E+m*M)-i*(v*h-g*w+m*T)+s*(v*E-y*w+m*_)-r*(v*M-y*T+g*_)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-i*(r*d-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],f=e[10],p=e[11],v=e[12],y=e[13],g=e[14],m=e[15],h=t*o-i*a,E=t*l-s*a,M=t*c-r*a,w=i*l-s*o,T=i*c-r*o,_=s*c-r*l,x=d*y-u*v,P=d*g-f*v,R=d*m-p*v,C=u*g-f*y,N=u*m-p*y,B=f*m-p*g,L=h*B-E*N+M*C+w*R-T*P+_*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/L;return e[0]=(o*B-l*N+c*C)*z,e[1]=(s*N-i*B-r*C)*z,e[2]=(y*_-g*T+m*w)*z,e[3]=(f*T-u*_-p*w)*z,e[4]=(l*R-a*B-c*P)*z,e[5]=(t*B-s*R+r*P)*z,e[6]=(g*M-v*_-m*E)*z,e[7]=(d*_-f*M+p*E)*z,e[8]=(a*N-o*R+c*x)*z,e[9]=(i*R-t*N-r*x)*z,e[10]=(v*T-y*M+m*h)*z,e[11]=(u*M-d*T-p*h)*z,e[12]=(o*P-a*C-l*x)*z,e[13]=(t*C-i*P+s*x)*z,e[14]=(y*E-v*w-g*h)*z,e[15]=(d*w-u*E+f*h)*z,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+i,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,u=o+o,f=r*c,p=r*d,v=r*u,y=a*d,g=a*u,m=o*u,h=l*c,E=l*d,M=l*u,w=i.x,T=i.y,_=i.z;return s[0]=(1-(y+m))*w,s[1]=(p+M)*w,s[2]=(v-E)*w,s[3]=0,s[4]=(p-M)*T,s[5]=(1-(f+m))*T,s[6]=(g+h)*T,s[7]=0,s[8]=(v+E)*_,s[9]=(g-h)*_,s[10]=(1-(f+y))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=ms.set(s[0],s[1],s[2]).length();const o=ms.set(s[4],s[5],s[6]).length(),l=ms.set(s[8],s[9],s[10]).length();r<0&&(a=-a),wn.copy(this);const c=1/a,d=1/o,u=1/l;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=d,wn.elements[5]*=d,wn.elements[6]*=d,wn.elements[8]*=u,wn.elements[9]*=u,wn.elements[10]*=u,t.setFromRotationMatrix(wn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Ln,l=!1){const c=this.elements,d=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),p=(i+s)/(i-s);let v,y;if(l)v=r/(a-r),y=a*r/(a-r);else if(o===Ln)v=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===wr)v=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Ln,l=!1){const c=this.elements,d=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),p=-(i+s)/(i-s);let v,y;if(l)v=1/(a-r),y=a/(a-r);else if(o===Ln)v=-2/(a-r),y=-(a+r)/(a-r);else if(o===wr)v=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ga.prototype.isMatrix4=!0;let mt=Ga;const ms=new O,wn=new mt,fp=new O(0,0,0),hp=new O(1,1,1),vi=new O,Gr=new O,dn=new O,ld=new mt,cd=new Zs;class Gi{constructor(e=0,t=0,i=0,s=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ld.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ld,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cd.setFromEuler(this),this.setFromQuaternion(cd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class Xu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pp=0;const dd=new O,gs=new Zs,ni=new mt,Hr=new O,tr=new O,mp=new O,gp=new Zs,ud=new O(1,0,0),fd=new O(0,1,0),hd=new O(0,0,1),pd={type:"added"},_p={type:"removed"},_s={type:"childadded",child:null},_o={type:"childremoved",child:null};class Lt extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new O,t=new Gi,i=new Zs,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ie}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(ud,e)}rotateY(e){return this.rotateOnAxis(fd,e)}rotateZ(e){return this.rotateOnAxis(hd,e)}translateOnAxis(e,t){return dd.copy(e).applyQuaternion(this.quaternion),this.position.add(dd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ud,e)}translateY(e){return this.translateOnAxis(fd,e)}translateZ(e){return this.translateOnAxis(hd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hr.copy(e):Hr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(tr,Hr,this.up):ni.lookAt(Hr,tr,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(ni),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pd),_s.child=e,this.dispatchEvent(_s),_s.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_p),_o.child=e,this.dispatchEvent(_o),_o.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pd),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,e,mp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,gp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=s,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Lt.DEFAULT_UP=new O(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Dn extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vp={type:"move"};class vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const g=t.getJointPose(y,i),m=this._getHandJoint(c,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Dn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function xo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Qe.workingColorSpace){if(e=np(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=xo(a,r,e+1/3),this.g=xo(a,r,e),this.b=xo(a,r,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=hn){function i(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const i=qu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return Qe.workingToColorSpace(Kt.copy(this),e),Math.round(je(Kt.r*255,0,255))*65536+Math.round(je(Kt.g*255,0,255))*256+Math.round(je(Kt.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Kt.copy(this),t);const i=Kt.r,s=Kt.g,r=Kt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=hn){Qe.workingToColorSpace(Kt.copy(this),e);const t=Kt.r,i=Kt.g,s=Kt.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(Vr);const i=fo(xi.h,Vr.h,t),s=fo(xi.s,Vr.s,t),r=fo(xi.l,Vr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Ge;Ge.NAMES=qu;class xp extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const An=new O,ii=new O,Mo=new O,si=new O,vs=new O,xs=new O,md=new O,So=new O,bo=new O,yo=new O,Eo=new St,To=new St,wo=new St;class Pn{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),An.subVectors(e,t),s.cross(An);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){An.subVectors(s,t),ii.subVectors(i,t),Mo.subVectors(e,t);const a=An.dot(An),o=An.dot(ii),l=An.dot(Mo),c=ii.dot(ii),d=ii.dot(Mo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-o*d)*f,v=(a*d-o*l)*f;return r.set(1-p-v,v,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(a,si.y),l.addScaledVector(o,si.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Eo.setScalar(0),To.setScalar(0),wo.setScalar(0),Eo.fromBufferAttribute(e,t),To.fromBufferAttribute(e,i),wo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Eo,r.x),a.addScaledVector(To,r.y),a.addScaledVector(wo,r.z),a}static isFrontFacing(e,t,i,s){return An.subVectors(i,t),ii.subVectors(e,t),An.cross(ii).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),An.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Pn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;vs.subVectors(s,i),xs.subVectors(r,i),So.subVectors(e,i);const l=vs.dot(So),c=xs.dot(So);if(l<=0&&c<=0)return t.copy(i);bo.subVectors(e,s);const d=vs.dot(bo),u=xs.dot(bo);if(d>=0&&u<=d)return t.copy(s);const f=l*u-d*c;if(f<=0&&l>=0&&d<=0&&l-d>0)return a=l/(l-d),t.copy(i).addScaledVector(vs,a);yo.subVectors(e,r);const p=vs.dot(yo),v=xs.dot(yo);if(v>=0&&p<=v)return t.copy(r);const y=p*c-l*v;if(y<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(xs,o);const g=d*v-p*u;if(g<=0&&u-d>=0&&p-v>=0)return md.subVectors(r,s),o=(u-d)/(u-d+(p-v)),t.copy(s).addScaledVector(md,o);const m=1/(g+y+f);return a=y*m,o=f*m,t.copy(i).addScaledVector(vs,a).addScaledVector(xs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ir{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wr.copy(i.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),$r.subVectors(this.max,nr),Ms.subVectors(e.a,nr),Ss.subVectors(e.b,nr),bs.subVectors(e.c,nr),Mi.subVectors(Ss,Ms),Si.subVectors(bs,Ss),Yi.subVectors(Ms,bs);let t=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-Yi.z,Yi.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,Yi.z,0,-Yi.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-Yi.y,Yi.x,0];return!Ao(t,Ms,Ss,bs,$r)||(t=[1,0,0,0,1,0,0,0,1],!Ao(t,Ms,Ss,bs,$r))?!1:(Xr.crossVectors(Mi,Si),t=[Xr.x,Xr.y,Xr.z],Ao(t,Ms,Ss,bs,$r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ri=[new O,new O,new O,new O,new O,new O,new O,new O],Rn=new O,Wr=new Ir,Ms=new O,Ss=new O,bs=new O,Mi=new O,Si=new O,Yi=new O,nr=new O,$r=new O,Xr=new O,Ki=new O;function Ao(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ki.fromArray(n,r);const o=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),d=i.dot(Ki);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const wt=new O,qr=new We;let Mp=0;class rs extends fs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Jh,this.updateRanges=[],this.gpuType=Vn,this.version=0,this._normalizationScale=e!==void 0?mc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)qr.fromBufferAttribute(this,t),qr.applyMatrix3(e),this.setXY(t,qr.x,qr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):sp(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):rp(e,this.array)}}class Yu extends rs{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ku extends rs{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class at extends rs{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Sp=new Ir,ir=new O,Ro=new O;class Nr{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Sp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);const t=ir.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ir,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(Ro)),this.expandByPoint(ir.copy(e.center).sub(Ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let bp=0;const bn=new mt,Co=new Lt,ys=new O,un=new Ir,sr=new Ir,Ot=new O;class $t extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qh(e)?Ku:Yu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ie().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,i){return bn.makeTranslation(e,t,i),this.applyMatrix4(bn),this}scale(e,t,i){return bn.makeScale(e,t,i),this.applyMatrix4(bn),this}lookAt(e){return Co.lookAt(e),Co.updateMatrix(),this.applyMatrix4(Co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new at(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];sr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(un.min,sr.min),un.expandByPoint(Ot),Ot.addVectors(un.max,sr.max),un.expandByPoint(Ot)):(un.expandByPoint(sr.min),un.expandByPoint(sr.max))}un.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ot));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ot.fromBufferAttribute(o,c),l&&(ys.fromBufferAttribute(e,c),Ot.add(ys)),s=Math.max(s,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new rs(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let P=0;P<i.count;P++)o[P]=new O,l[P]=new O;const d=new O,u=new O,f=new O,p=new We,v=new We,y=new We,g=new O,m=new O;function h(P,R,C){c[P]=c[R]=c[C]=1,d.fromBufferAttribute(i,P),u.fromBufferAttribute(i,R),f.fromBufferAttribute(i,C),p.fromBufferAttribute(r,P),v.fromBufferAttribute(r,R),y.fromBufferAttribute(r,C),u.sub(d),f.sub(d),v.sub(p),y.sub(p);const N=1/(v.x*y.y-y.x*v.y);isFinite(N)&&(g.copy(u).multiplyScalar(y.y).addScaledVector(f,-v.y).multiplyScalar(N),m.copy(f).multiplyScalar(v.x).addScaledVector(u,-y.x).multiplyScalar(N),o[P].add(g),o[R].add(g),o[C].add(g),l[P].add(m),l[R].add(m),l[C].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,R=E.length;P<R;++P){const C=E[P],N=C.start,B=C.count;for(let L=N,z=N+B;L<z;L+=3)h(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const M=new O,w=new O,T=new O,_=new O;function x(P){T.fromBufferAttribute(s,P),_.copy(T);const R=o[P];M.copy(R),M.sub(T.multiplyScalar(T.dot(R))).normalize(),w.crossVectors(_,R);const N=w.dot(l[P])<0?-1:1;a.setXYZW(P,M.x,M.y,M.z,N)}for(let P=0,R=i.count;P<R;++P)c[P]&&x(P);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new rs(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,d=new O,u=new O;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),y=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,g),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),o.add(d),l.add(d),c.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,u=o.normalized,f=new c.constructor(l.length*d);let p=0,v=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*d;for(let m=0;m<d;m++)f[v++]=c[p++]}return new rs(f,d,u)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $t,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,u=c.length;d<u;d++){const f=c[d],p=e(f,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];d.push(p.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],u=r[c];for(let f=0,p=u.length;f<p;f++)d.push(u[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Po=new O,yp=new O,Ep=new Ie;class yi{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Po.subVectors(i,t).cross(yp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Po),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ep.getNormalMatrix(e),s=this.coplanarPoint(Po).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Tp=0;class hs extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Dr(),this.name="",this.type="Material",this.blending=mr,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eu,this.blendDst=Tu,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=co,this.stencilZFail=co,this.stencilZPass=co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new yi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new We().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new We().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ai=new O,Lo=new O,Yr=new O,Kr=new O;class _c{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Lo.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),Kr.copy(this.origin).sub(Lo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Yr),o=Kr.dot(this.direction),l=-Kr.dot(Yr),c=Kr.lengthSq(),d=Math.abs(1-a*a);let u,f,p,v;if(d>0)if(u=a*l-o,f=a*o-l,v=r*d,u>=0)if(f>=-v)if(f<=v){const y=1/d;u*=y,f*=y,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-v?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=v?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Lo).addScaledVector(Yr,f),p}intersectSphere(e,t){if(e.radius<0)return null;ai.subVectors(e.center,this.origin);const i=ai.dot(this.direction),s=ai.dot(ai)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),d>=0?(r=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,u=e.x-a.x,f=e.y-a.y,p=e.z-a.z,v=t.x-a.x,y=t.y-a.y,g=t.z-a.z,m=i.x-a.x,h=i.y-a.y,E=i.z-a.z,M=Math.abs(l),w=Math.abs(c),T=Math.abs(d);let _,x,P,R,C,N,B,L,z,$,F,ne;if(M>=w&&M>=T?(P=l,N=u,z=v,ne=m,l>=0?(_=c,x=d,R=f,C=p,B=y,L=g,$=h,F=E):(_=d,x=c,R=p,C=f,B=g,L=y,$=E,F=h)):w>=T?(P=c,N=f,z=y,ne=h,c>=0?(_=d,x=l,R=p,C=u,B=g,L=v,$=E,F=m):(_=l,x=d,R=u,C=p,B=v,L=g,$=m,F=E)):(P=d,N=p,z=g,ne=E,d>=0?(_=l,x=c,R=u,C=f,B=v,L=y,$=m,F=h):(_=c,x=l,R=f,C=u,B=y,L=v,$=h,F=m)),P===0)return null;const X=_/P,j=x/P,te=1/P,Se=R-X*N,Ue=C-j*N,J=B-X*z,_e=L-j*z,be=$-X*ne,Re=F-j*ne,ve=be*_e-Re*J,Oe=Se*Re-Ue*be,Et=J*Ue-_e*Se;if(s){if(ve<0||Oe<0||Et<0)return null}else if((ve<0||Oe<0||Et<0)&&(ve>0||Oe>0||Et>0))return null;const Pe=ve+Oe+Et;if(Pe===0)return null;const ot=te*(ve*N+Oe*z+Et*ne);return(Pe>0?ot<0:ot>0)?null:this.at(ot/Pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class La extends hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gd=new mt,Zi=new _c,Zr=new Nr,_d=new O,Jr=new O,Qr=new O,jr=new O,Do=new O,ea=new O,vd=new O,ta=new O;class Bt extends Lt{constructor(e=new $t,t=new La){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],u=r[l];d!==0&&(Do.fromBufferAttribute(u,e),a?ea.addScaledVector(Do,d):ea.addScaledVector(Do.sub(t),d))}t.add(ea)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere),Zr.applyMatrix4(r),Zi.copy(e.ray).recast(e.near),!(Zr.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Zr,_d)===null||Zi.origin.distanceToSquared(_d)>(e.far-e.near)**2))&&(gd.copy(r).invert(),Zi.copy(e.ray).applyMatrix4(gd),!(i.boundingBox!==null&&Zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=f.length;v<y;v++){const g=f[v],m=a[g.materialIndex],h=Math.max(g.start,p.start),E=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let M=h,w=E;M<w;M+=3){const T=o.getX(M),_=o.getX(M+1),x=o.getX(M+2);s=na(this,m,e,i,c,d,u,T,_,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let g=v,m=y;g<m;g+=3){const h=o.getX(g),E=o.getX(g+1),M=o.getX(g+2);s=na(this,a,e,i,c,d,u,h,E,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,y=f.length;v<y;v++){const g=f[v],m=a[g.materialIndex],h=Math.max(g.start,p.start),E=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let M=h,w=E;M<w;M+=3){const T=M,_=M+1,x=M+2;s=na(this,m,e,i,c,d,u,T,_,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=v,m=y;g<m;g+=3){const h=g,E=g+1,M=g+2;s=na(this,a,e,i,c,d,u,h,E,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function wp(n,e,t,i,s,r,a,o){let l;if(e.side===cn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ls,o),l===null)return null;ta.copy(o),ta.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ta);return c<t.near||c>t.far?null:{distance:c,point:ta.clone(),object:n}}function na(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Jr),n.getVertexPosition(l,Qr),n.getVertexPosition(c,jr);const d=wp(n,e,t,i,Jr,Qr,jr,vd);if(d){const u=new O;Pn.getBarycoord(vd,Jr,Qr,jr,u),s&&(d.uv=Pn.getInterpolatedAttribute(s,o,l,c,u,new We)),r&&(d.uv1=Pn.getInterpolatedAttribute(r,o,l,c,u,new We)),a&&(d.normal=Pn.getInterpolatedAttribute(a,o,l,c,u,new O),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new O,materialIndex:0};Pn.getNormal(Jr,Qr,jr,f.normal),d.face=f,d.barycoord=u}return d}class Ap extends Qt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Vt,d=Vt,u,f){super(null,a,o,l,c,d,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ji=new Nr,Rp=new We(.5,.5),ia=new O;class Ar{constructor(e=new yi,t=new yi,i=new yi,s=new yi,r=new yi,a=new yi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ln,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],u=r[5],f=r[6],p=r[7],v=r[8],y=r[9],g=r[10],m=r[11],h=r[12],E=r[13],M=r[14],w=r[15];if(s[0].setComponents(c-a,p-d,m-v,w-h).normalize(),s[1].setComponents(c+a,p+d,m+v,w+h).normalize(),s[2].setComponents(c+o,p+u,m+y,w+E).normalize(),s[3].setComponents(c-o,p-u,m-y,w-E).normalize(),i)s[4].setComponents(l,f,g,M).normalize(),s[5].setComponents(c-l,p-f,m-g,w-M).normalize();else if(s[4].setComponents(c-l,p-f,m-g,w-M).normalize(),t===Ln)s[5].setComponents(c+l,p+f,m+g,w+M).normalize();else if(t===wr)s[5].setComponents(l,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){Ji.center.set(0,0,0);const t=Rp.distanceTo(e.center);return Ji.radius=.7071067811865476+t,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ia.x=s.normal.x>0?e.max.x:e.min.x,ia.y=s.normal.y>0?e.max.y:e.min.y,ia.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ia)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const xd=new mt;class vc{constructor(){this.coordinateSystem=Ln,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];xd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Ar),i[s].setFromProjectionMatrix(xd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ar),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new vc().copy(this)}}class Pl extends hs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Da=new O,Ia=new O,Md=new mt,rr=new _c,sa=new Nr,Io=new O,Sd=new O;class Cp extends Lt{constructor(e=new $t,t=new Pl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Da.fromBufferAttribute(t,s-1),Ia.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Da.distanceTo(Ia);e.setAttribute("lineDistance",new at(i,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(s),sa.radius+=r,e.ray.intersectsSphere(sa)===!1)return;Md.copy(s).invert(),rr.copy(e.ray).applyMatrix4(Md);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const p=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let y=p,g=v-1;y<g;y+=c){const m=d.getX(y),h=d.getX(y+1),E=ra(this,e,rr,l,m,h,y);E&&t.push(E)}if(this.isLineLoop){const y=d.getX(v-1),g=d.getX(p),m=ra(this,e,rr,l,y,g,v-1);m&&t.push(m)}}else{const p=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let y=p,g=v-1;y<g;y+=c){const m=ra(this,e,rr,l,y,y+1,y);m&&t.push(m)}if(this.isLineLoop){const y=ra(this,e,rr,l,v-1,p,v-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ra(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(Da.fromBufferAttribute(o,s),Ia.fromBufferAttribute(o,r),t.distanceSqToSegment(Da,Ia,Io,Sd)>i)return;Io.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Io);if(!(c<e.near||c>e.far))return{distance:c,point:Sd.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class bd extends Cp{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Zu extends hs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const yd=new mt,Ll=new _c,aa=new Nr,oa=new O;class Pp extends Lt{constructor(e=new $t,t=new Zu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),aa.copy(i.boundingSphere),aa.applyMatrix4(s),aa.radius+=r,e.ray.intersectsSphere(aa)===!1)return;yd.copy(s).invert(),Ll.copy(e.ray).applyMatrix4(yd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=f,y=p;v<y;v++){const g=c.getX(v);oa.fromBufferAttribute(u,g),Ed(oa,g,l,s,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let v=f,y=p;v<y;v++)oa.fromBufferAttribute(u,v),Ed(oa,v,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ed(n,e,t,i,s,r,a){const o=Ll.distanceSqToPoint(n);if(o<t){const l=new O;Ll.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ju extends Qt{constructor(e=[],t=Vs,i,s,r,a,o,l,c,d){super(e,t,i,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Td extends Qt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $s extends Qt{constructor(e,t,i=Jn,s,r,a,o=Vt,l=Vt,c,d=zi,u=1){if(d!==zi&&d!==Ii)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Qu extends $s{constructor(e,t=Jn,i=Vs,s,r,a=Vt,o=Vt,l,c=zi){const d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,i,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ju extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ht extends $t{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],u=[];let f=0,p=0;v("z","y","x",-1,-1,i,t,e,a,r,0),v("z","y","x",1,-1,i,t,-e,a,r,1),v("x","z","y",1,1,e,i,t,s,a,2),v("x","z","y",1,-1,e,i,-t,s,a,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(u,2));function v(y,g,m,h,E,M,w,T,_,x,P){const R=M/_,C=w/x,N=M/2,B=w/2,L=T/2,z=_+1,$=x+1;let F=0,ne=0;const X=new O;for(let j=0;j<$;j++){const te=j*C-B;for(let Se=0;Se<z;Se++){const Ue=Se*R-N;X[y]=Ue*h,X[g]=te*E,X[m]=L,c.push(X.x,X.y,X.z),X[y]=0,X[g]=0,X[m]=T>0?1:-1,d.push(X.x,X.y,X.z),u.push(Se/_),u.push(1-j/x),F+=1}}for(let j=0;j<x;j++)for(let te=0;te<_;te++){const Se=f+te+z*j,Ue=f+te+z*(j+1),J=f+(te+1)+z*(j+1),_e=f+(te+1)+z*j;l.push(Se,Ue,_e),l.push(Ue,J,_e),ne+=6}o.addGroup(p,ne,P),p+=ne,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ka extends $t{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new O,d=new We;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const p=i+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[f]/e+1)/2,d.y=(a[f+1]/e+1)/2,l.push(d.x,d.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(o,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Pt extends $t{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],u=[],f=[],p=[];let v=0;const y=[],g=i/2;let m=0;h(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(d),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(f,3)),this.setAttribute("uv",new at(p,2));function h(){const M=new O,w=new O;let T=0;const _=(t-e)/i;for(let x=0;x<=r;x++){const P=[],R=x/r,C=R*(t-e)+e;for(let N=0;N<=s;N++){const B=N/s,L=B*l+o,z=Math.sin(L),$=Math.cos(L);w.x=C*z,w.y=-R*i+g,w.z=C*$,u.push(w.x,w.y,w.z),M.set(z,_,$).normalize(),f.push(M.x,M.y,M.z),p.push(B,1-R),P.push(v++)}y.push(P)}for(let x=0;x<s;x++)for(let P=0;P<r;P++){const R=y[P][x],C=y[P+1][x],N=y[P+1][x+1],B=y[P][x+1];(e>0||P!==0)&&(d.push(R,C,B),T+=3),(t>0||P!==r-1)&&(d.push(C,N,B),T+=3)}c.addGroup(m,T,0),m+=T}function E(M){const w=v,T=new We,_=new O;let x=0;const P=M===!0?e:t,R=M===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,g*R,0),f.push(0,R,0),p.push(.5,.5),v++;const C=v;for(let N=0;N<=s;N++){const L=N/s*l+o,z=Math.cos(L),$=Math.sin(L);_.x=P*$,_.y=g*R,_.z=P*z,u.push(_.x,_.y,_.z),f.push(0,R,0),T.x=z*.5+.5,T.y=$*.5*R+.5,p.push(T.x,T.y),v++}for(let N=0;N<s;N++){const B=w+N,L=C+N;M===!0?d.push(L,L+1,B):d.push(L+1,L,B),x+=3}c.addGroup(m,x,M===!0?1:2),m+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fi extends Pt{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Fi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Za extends $t{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];o(s),c(i),d(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(h){const E=new O,M=new O,w=new O;for(let T=0;T<t.length;T+=3)p(t[T+0],E),p(t[T+1],M),p(t[T+2],w),l(E,M,w,h)}function l(h,E,M,w){const T=w+1,_=[];for(let x=0;x<=T;x++){_[x]=[];const P=h.clone().lerp(M,x/T),R=E.clone().lerp(M,x/T),C=T-x;for(let N=0;N<=C;N++)N===0&&x===T?_[x][N]=P:_[x][N]=P.clone().lerp(R,N/C)}for(let x=0;x<T;x++)for(let P=0;P<2*(T-x)-1;P++){const R=Math.floor(P/2);P%2===0?(f(_[x][R+1]),f(_[x+1][R]),f(_[x][R])):(f(_[x][R+1]),f(_[x+1][R+1]),f(_[x+1][R]))}}function c(h){const E=new O;for(let M=0;M<r.length;M+=3)E.x=r[M+0],E.y=r[M+1],E.z=r[M+2],E.normalize().multiplyScalar(h),r[M+0]=E.x,r[M+1]=E.y,r[M+2]=E.z}function d(){const h=new O;for(let E=0;E<r.length;E+=3){h.x=r[E+0],h.y=r[E+1],h.z=r[E+2];const M=g(h)/2/Math.PI+.5,w=m(h)/Math.PI+.5;a.push(M,1-w)}v(),u()}function u(){for(let h=0;h<a.length;h+=6){const E=a[h+0],M=a[h+2],w=a[h+4],T=Math.max(E,M,w),_=Math.min(E,M,w);T>.9&&_<.1&&(E<.2&&(a[h+0]+=1),M<.2&&(a[h+2]+=1),w<.2&&(a[h+4]+=1))}}function f(h){r.push(h.x,h.y,h.z)}function p(h,E){const M=h*3;E.x=e[M+0],E.y=e[M+1],E.z=e[M+2]}function v(){const h=new O,E=new O,M=new O,w=new O,T=new We,_=new We,x=new We;for(let P=0,R=0;P<r.length;P+=9,R+=6){h.set(r[P+0],r[P+1],r[P+2]),E.set(r[P+3],r[P+4],r[P+5]),M.set(r[P+6],r[P+7],r[P+8]),T.set(a[R+0],a[R+1]),_.set(a[R+2],a[R+3]),x.set(a[R+4],a[R+5]),w.copy(h).add(E).add(M).divideScalar(3);const C=g(w);y(T,R+0,h,C),y(_,R+2,E,C),y(x,R+4,M,C)}}function y(h,E,M,w){w<0&&h.x===1&&(a[E]=h.x-1),M.x===0&&M.z===0&&(a[E]=w/2/Math.PI+.5)}function g(h){return Math.atan2(h.z,-h.x)}function m(h){return Math.atan2(-h.y,Math.sqrt(h.x*h.x+h.z*h.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.vertices,e.indices,e.radius,e.detail)}}class Ur extends Za{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ur(e.radius,e.detail)}}class Rr extends Za{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Rr(e.radius,e.detail)}}class Xs extends $t{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,d=l+1,u=e/o,f=t/l,p=[],v=[],y=[],g=[];for(let m=0;m<d;m++){const h=m*f-a;for(let E=0;E<c;E++){const M=E*u-r;v.push(M,-h,0),y.push(0,0,1),g.push(E/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let h=0;h<o;h++){const E=h+c*m,M=h+c*(m+1),w=h+1+c*(m+1),T=h+1+c*m;p.push(E,M,T),p.push(M,w,T)}this.setIndex(p),this.setAttribute("position",new at(v,3)),this.setAttribute("normal",new at(y,3)),this.setAttribute("uv",new at(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.width,e.height,e.widthSegments,e.heightSegments)}}class xc extends $t{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],d=[];let u=e;const f=(t-e)/s,p=new O,v=new We;for(let y=0;y<=s;y++){for(let g=0;g<=i;g++){const m=r+g/i*a;p.x=u*Math.cos(m),p.y=u*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/t+1)/2,v.y=(p.y/t+1)/2,d.push(v.x,v.y)}u+=f}for(let y=0;y<s;y++){const g=y*(i+1);for(let m=0;m<i;m++){const h=m+g,E=h,M=h+i+1,w=h+i+2,T=h+1;o.push(E,M,T),o.push(M,w,T)}}this.setIndex(o),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Na extends $t{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],u=new O,f=new O,p=[],v=[],y=[],g=[];for(let m=0;m<=i;m++){const h=[],E=m/i,M=a+E*o,w=e*Math.cos(M),T=Math.sqrt(e*e-w*w);let _=0;m===0&&a===0?_=.5/t:m===i&&l===Math.PI&&(_=-.5/t);for(let x=0;x<=t;x++){const P=x/t,R=s+P*r;u.x=-T*Math.cos(R),u.y=w,u.z=T*Math.sin(R),v.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),g.push(P+_,1-E),h.push(c++)}d.push(h)}for(let m=0;m<i;m++)for(let h=0;h<t;h++){const E=d[m][h+1],M=d[m][h],w=d[m+1][h],T=d[m+1][h+1];(m!==0||a>0)&&p.push(E,M,T),(m!==i-1||l<Math.PI)&&p.push(M,w,T)}this.setIndex(p),this.setAttribute("position",new at(v,3)),this.setAttribute("normal",new at(y,3)),this.setAttribute("uv",new at(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Oi extends $t{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],d=[],u=[],f=new O,p=new O,v=new O;for(let y=0;y<=i;y++){const g=a+y/i*o;for(let m=0;m<=s;m++){const h=m/s*r;p.x=(e+t*Math.cos(g))*Math.cos(h),p.y=(e+t*Math.cos(g))*Math.sin(h),p.z=t*Math.sin(g),c.push(p.x,p.y,p.z),f.x=e*Math.cos(h),f.y=e*Math.sin(h),v.subVectors(p,f).normalize(),d.push(v.x,v.y,v.z),u.push(m/s),u.push(y/i)}}for(let y=1;y<=i;y++)for(let g=1;g<=s;g++){const m=(s+1)*y+g-1,h=(s+1)*(y-1)+g-1,E=(s+1)*(y-1)+g,M=(s+1)*y+g;l.push(m,h,M),l.push(h,E,M)}this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function qs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(wd(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(wd(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function en(n){const e={};for(let t=0;t<n.length;t++){const i=qs(n[t]);for(const s in i)e[s]=i[s]}return e}function wd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Lp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ef(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Dp={clone:qs,merge:en};var Ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Np=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ds extends hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ip,this.fragmentShader=Np,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=Lp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ge().setHex(s.value);break;case"v2":this.uniforms[i].value=new We().fromArray(s.value);break;case"v3":this.uniforms[i].value=new O().fromArray(s.value);break;case"v4":this.uniforms[i].value=new St().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ie().fromArray(s.value);break;case"m4":this.uniforms[i].value=new mt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Up extends ds{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Mc extends hs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=lc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fp extends hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Op extends hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class tf extends Lt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Bp extends tf{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const No=new mt,Ad=new O,Rd=new O;class kp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ar,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Ad.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ad),Rd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){No.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(No,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===wr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(No)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const la=new O,ca=new Zs,Un=new O;class nf extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(la,ca,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(la,ca,Un.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(la,ca,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(la,ca,Un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const bi=new O,Cd=new We,Pd=new We;class Cn extends nf{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cl*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,Cd,Pd),t.subVectors(Pd,Cd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(uo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class sf extends nf{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class zp extends kp{constructor(){super(new sf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gp extends tf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new zp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Es=-90,Ts=1;class Dl extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Cn(Es,Ts,e,t);s.layers=this.layers,this.add(s);const r=new Cn(Es,Ts,e,t);r.layers=this.layers,this.add(r);const a=new Cn(Es,Ts,e,t);a.layers=this.layers,this.add(a);const o=new Cn(Es,Ts,e,t);o.layers=this.layers,this.add(o);const l=new Cn(Es,Ts,e,t);l.layers=this.layers,this.add(l);const c=new Cn(Es,Ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=y,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Hp extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Ld(n,e,t,i){const s=Vp(i);switch(t){case Bu:return n*e;case zu:return n*e/s.components*s.byteLength;case fc:return n*e/s.components*s.byteLength;case cs:return n*e*2/s.components*s.byteLength;case hc:return n*e*2/s.components*s.byteLength;case ku:return n*e*3/s.components*s.byteLength;case Wn:return n*e*4/s.components*s.byteLength;case pc:return n*e*4/s.components*s.byteLength;case va:case xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ma:case Sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jo:case tl:return Math.max(n,16)*Math.max(e,8)/4;case Qo:case el:return Math.max(n,8)*Math.max(e,8)/2;case nl:case il:case rl:case al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sl:case wa:case ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case dl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ul:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case fl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case hl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case pl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ml:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case gl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case _l:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case vl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case xl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ml:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Sl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case bl:case yl:case El:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Tl:case wl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Aa:case Al:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vp(n){switch(n){case pn:case Nu:return{byteLength:1,components:1};case Tr:case Uu:case Qn:return{byteLength:2,components:1};case dc:case uc:return{byteLength:2,components:4};case Jn:case cc:case Vn:return{byteLength:4,components:1};case Fu:case Ou:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oc}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rf(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Wp(n){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const d=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,d);else{u.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<u.length;p++){const v=u[f],y=u[p];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++f,u[f]=y)}u.length=f+1;for(let p=0,v=u.length;p<v;p++){const y=u[p];n.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var $p=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xp=`#ifdef USE_ALPHAHASH
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
#endif`,qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jp=`#ifdef USE_AOMAP
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
#endif`,Qp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jp=`#ifdef USE_BATCHING
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
#endif`,em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,im=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sm=`#ifdef USE_IRIDESCENCE
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
#endif`,rm=`#ifdef USE_BUMPMAP
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
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,pm=`#define PI 3.141592653589793
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
} // validated`,mm=`vec3 transformedNormal = objectNormal;
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
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_m=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bm=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
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
#endif`,Tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lm=`#ifdef USE_GRADIENTMAP
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
}`,Dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Um=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gm=`PhysicalMaterial material;
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
#endif`,Hm=`uniform sampler2D dfgLUT;
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
}`,Vm=`
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
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
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
#endif`,$m=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Km=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e0=`#if defined( USE_POINTS_UV )
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
#endif`,t0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s0=`#if defined( USE_MORPHCOLORS )
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
#endif`,r0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a0=`#ifdef USE_MORPHTARGETS
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
#endif`,o0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,c0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,d0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,h0=`#ifdef USE_NORMALMAP
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
#endif`,p0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,M0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,C0=`float getShadowMask() {
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
}`,P0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L0=`#ifdef USE_SKINNING
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
#endif`,D0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I0=`#ifdef USE_SKINNING
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
#endif`,N0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B0=`#ifdef USE_TRANSMISSION
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
#endif`,k0=`#ifdef USE_TRANSMISSION
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$0=`uniform sampler2D t2D;
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
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`uniform float backgroundBlurriness;
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`#include <common>
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
}`,J0=`#if DEPTH_PACKING == 3200
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
}`,Q0=`#define DISTANCE
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
}`,j0=`#define DISTANCE
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`uniform float scale;
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
}`,ig=`uniform vec3 diffuse;
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
}`,sg=`#include <common>
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
}`,rg=`uniform vec3 diffuse;
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
}`,ag=`#define LAMBERT
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
}`,og=`#define LAMBERT
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
}`,lg=`#define MATCAP
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
}`,cg=`#define MATCAP
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
}`,dg=`#define NORMAL
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
}`,ug=`#define NORMAL
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
}`,fg=`#define PHONG
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
}`,hg=`#define PHONG
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
}`,pg=`#define STANDARD
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
}`,mg=`#define STANDARD
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
}`,gg=`#define TOON
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
}`,_g=`#define TOON
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
}`,vg=`uniform float size;
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
}`,xg=`uniform vec3 diffuse;
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
}`,Mg=`#include <common>
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
}`,Sg=`uniform vec3 color;
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
}`,bg=`uniform float rotation;
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
}`,yg=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:$p,alphahash_pars_fragment:Xp,alphamap_fragment:qp,alphamap_pars_fragment:Yp,alphatest_fragment:Kp,alphatest_pars_fragment:Zp,aomap_fragment:Jp,aomap_pars_fragment:Qp,batching_pars_vertex:jp,batching_vertex:em,begin_vertex:tm,beginnormal_vertex:nm,bsdfs:im,iridescence_fragment:sm,bumpmap_pars_fragment:rm,clipping_planes_fragment:am,clipping_planes_pars_fragment:om,clipping_planes_pars_vertex:lm,clipping_planes_vertex:cm,color_fragment:dm,color_pars_fragment:um,color_pars_vertex:fm,color_vertex:hm,common:pm,defaultnormal_vertex:mm,displacementmap_pars_vertex:gm,displacementmap_vertex:_m,emissivemap_fragment:vm,emissivemap_pars_fragment:xm,colorspace_fragment:Mm,colorspace_pars_fragment:Sm,envmap_fragment:bm,envmap_common_pars_fragment:ym,envmap_pars_fragment:Em,envmap_pars_vertex:Tm,envmap_physical_pars_fragment:Fm,envmap_vertex:wm,fog_vertex:Am,fog_pars_vertex:Rm,fog_fragment:Cm,fog_pars_fragment:Pm,gradientmap_pars_fragment:Lm,lightmap_pars_fragment:Dm,lights_lambert_fragment:Im,lights_lambert_pars_fragment:Nm,lights_pars_begin:Um,lights_toon_fragment:Om,lights_toon_pars_fragment:Bm,lights_phong_fragment:km,lights_phong_pars_fragment:zm,lights_physical_fragment:Gm,lights_physical_pars_fragment:Hm,lights_fragment_begin:Vm,lights_fragment_maps:Wm,lights_fragment_end:$m,lightprobes_pars_fragment:Xm,logdepthbuf_fragment:qm,logdepthbuf_pars_fragment:Ym,logdepthbuf_pars_vertex:Km,logdepthbuf_vertex:Zm,map_fragment:Jm,map_pars_fragment:Qm,map_particle_fragment:jm,map_particle_pars_fragment:e0,metalnessmap_fragment:t0,metalnessmap_pars_fragment:n0,morphinstance_vertex:i0,morphcolor_vertex:s0,morphnormal_vertex:r0,morphtarget_pars_vertex:a0,morphtarget_vertex:o0,normal_fragment_begin:l0,normal_fragment_maps:c0,normal_pars_fragment:d0,normal_pars_vertex:u0,normal_vertex:f0,normalmap_pars_fragment:h0,clearcoat_normal_fragment_begin:p0,clearcoat_normal_fragment_maps:m0,clearcoat_pars_fragment:g0,iridescence_pars_fragment:_0,opaque_fragment:v0,packing:x0,premultiplied_alpha_fragment:M0,project_vertex:S0,dithering_fragment:b0,dithering_pars_fragment:y0,roughnessmap_fragment:E0,roughnessmap_pars_fragment:T0,shadowmap_pars_fragment:w0,shadowmap_pars_vertex:A0,shadowmap_vertex:R0,shadowmask_pars_fragment:C0,skinbase_vertex:P0,skinning_pars_vertex:L0,skinning_vertex:D0,skinnormal_vertex:I0,specularmap_fragment:N0,specularmap_pars_fragment:U0,tonemapping_fragment:F0,tonemapping_pars_fragment:O0,transmission_fragment:B0,transmission_pars_fragment:k0,uv_pars_fragment:z0,uv_pars_vertex:G0,uv_vertex:H0,worldpos_vertex:V0,background_vert:W0,background_frag:$0,backgroundCube_vert:X0,backgroundCube_frag:q0,cube_vert:Y0,cube_frag:K0,depth_vert:Z0,depth_frag:J0,distance_vert:Q0,distance_frag:j0,equirect_vert:eg,equirect_frag:tg,linedashed_vert:ng,linedashed_frag:ig,meshbasic_vert:sg,meshbasic_frag:rg,meshlambert_vert:ag,meshlambert_frag:og,meshmatcap_vert:lg,meshmatcap_frag:cg,meshnormal_vert:dg,meshnormal_frag:ug,meshphong_vert:fg,meshphong_frag:hg,meshphysical_vert:pg,meshphysical_frag:mg,meshtoon_vert:gg,meshtoon_frag:_g,points_vert:vg,points_frag:xg,shadow_vert:Mg,shadow_frag:Sg,sprite_vert:bg,sprite_frag:yg},ge={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},kn={basic:{uniforms:en([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:en([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:en([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:en([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:en([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:en([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:en([ge.points,ge.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:en([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:en([ge.common,ge.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:en([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:en([ge.sprite,ge.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:en([ge.common,ge.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:en([ge.lights,ge.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};kn.physical={uniforms:en([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const da={r:0,b:0,g:0},Eg=new mt,af=new Ie;af.set(-1,0,0,0,1,0,0,0,1);function Tg(n,e,t,i,s,r){const a=new Ge(0);let o=s===!0?0:1,l,c,d=null,u=0,f=null;function p(h){let E=h.isScene===!0?h.background:null;if(E&&E.isTexture){const M=h.backgroundBlurriness>0;E=e.get(E,M)}return E}function v(h){let E=!1;const M=p(h);M===null?g(a,o):M&&M.isColor&&(g(M,1),E=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(h,E){const M=p(E);M&&M.isCubeTexture?(c===void 0&&(c=new Bt(new Ht(1,1,1),new ds({name:"BackgroundCubeMaterial",uniforms:qs(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(af),c.material.toneMapped=Qe.getTransfer(M.colorSpace)!==ct,(d!==M||u!==M.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=M,u=M.version,f=n.toneMapping),c.layers.enableAll(),h.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Bt(new Xs(2,2),new ds({name:"BackgroundMaterial",uniforms:qs(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(M.colorSpace)!==ct,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||u!==M.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=M,u=M.version,f=n.toneMapping),l.layers.enableAll(),h.unshift(l,l.geometry,l.material,0,0,null))}function g(h,E){h.getRGB(da,ef(n)),t.buffers.color.setClear(da.r,da.g,da.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(h,E=1){a.set(h),o=E,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(h){o=h,g(a,o)},render:v,addToRenderList:y,dispose:m}}function wg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(C,N,B,L,z){let $=!1;const F=u(C,L,B,N);r!==F&&(r=F,c(r.object)),$=p(C,L,B,z),$&&v(C,L,B,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(C,N,B,L),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(C){return n.bindVertexArray(C)}function d(C){return n.deleteVertexArray(C)}function u(C,N,B,L){const z=L.wireframe===!0;let $=i[N.id];$===void 0&&($={},i[N.id]=$);const F=C.isInstancedMesh===!0?C.id:0;let ne=$[F];ne===void 0&&(ne={},$[F]=ne);let X=ne[B.id];X===void 0&&(X={},ne[B.id]=X);let j=X[z];return j===void 0&&(j=f(l()),X[z]=j),j}function f(C){const N=[],B=[],L=[];for(let z=0;z<t;z++)N[z]=0,B[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:L,object:C,attributes:{},index:null}}function p(C,N,B,L){const z=r.attributes,$=N.attributes;let F=0;const ne=B.getAttributes();for(const X in ne)if(ne[X].location>=0){const te=z[X];let Se=$[X];if(Se===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(Se=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(Se=C.instanceColor)),te===void 0||te.attribute!==Se||Se&&te.data!==Se.data)return!0;F++}return r.attributesNum!==F||r.index!==L}function v(C,N,B,L){const z={},$=N.attributes;let F=0;const ne=B.getAttributes();for(const X in ne)if(ne[X].location>=0){let te=$[X];te===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(te=C.instanceColor));const Se={};Se.attribute=te,te&&te.data&&(Se.data=te.data),z[X]=Se,F++}r.attributes=z,r.attributesNum=F,r.index=L}function y(){const C=r.newAttributes;for(let N=0,B=C.length;N<B;N++)C[N]=0}function g(C){m(C,0)}function m(C,N){const B=r.newAttributes,L=r.enabledAttributes,z=r.attributeDivisors;B[C]=1,L[C]===0&&(n.enableVertexAttribArray(C),L[C]=1),z[C]!==N&&(n.vertexAttribDivisor(C,N),z[C]=N)}function h(){const C=r.newAttributes,N=r.enabledAttributes;for(let B=0,L=N.length;B<L;B++)N[B]!==C[B]&&(n.disableVertexAttribArray(B),N[B]=0)}function E(C,N,B,L,z,$,F){F===!0?n.vertexAttribIPointer(C,N,B,z,$):n.vertexAttribPointer(C,N,B,L,z,$)}function M(C,N,B,L){y();const z=L.attributes,$=B.getAttributes(),F=N.defaultAttributeValues;for(const ne in $){const X=$[ne];if(X.location>=0){let j=z[ne];if(j===void 0&&(ne==="instanceMatrix"&&C.instanceMatrix&&(j=C.instanceMatrix),ne==="instanceColor"&&C.instanceColor&&(j=C.instanceColor)),j!==void 0){const te=j.normalized,Se=j.itemSize,Ue=e.get(j);if(Ue===void 0)continue;const J=Ue.buffer,_e=Ue.type,be=Ue.bytesPerElement,Re=_e===n.INT||_e===n.UNSIGNED_INT||j.gpuType===cc;if(j.isInterleavedBufferAttribute){const ve=j.data,Oe=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,Et=j.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let Pe=0;Pe<X.locationSize;Pe++)m(X.location+Pe,ve.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Pe=0;Pe<X.locationSize;Pe++)g(X.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,J);for(let Pe=0;Pe<X.locationSize;Pe++)E(X.location+Pe,Se/X.locationSize,_e,te,Oe*be,(Et+Se/X.locationSize*Pe)*be,Re)}else{if(j.isInstancedBufferAttribute){for(let ve=0;ve<X.locationSize;ve++)m(X.location+ve,j.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ve=0;ve<X.locationSize;ve++)g(X.location+ve);n.bindBuffer(n.ARRAY_BUFFER,J);for(let ve=0;ve<X.locationSize;ve++)E(X.location+ve,Se/X.locationSize,_e,te,Se*be,Se/X.locationSize*ve*be,Re)}}else if(F!==void 0){const te=F[ne];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(X.location,te);break;case 3:n.vertexAttrib3fv(X.location,te);break;case 4:n.vertexAttrib4fv(X.location,te);break;default:n.vertexAttrib1fv(X.location,te)}}}}h()}function w(){P();for(const C in i){const N=i[C];for(const B in N){const L=N[B];for(const z in L){const $=L[z];for(const F in $)d($[F].object),delete $[F];delete L[z]}}delete i[C]}}function T(C){if(i[C.id]===void 0)return;const N=i[C.id];for(const B in N){const L=N[B];for(const z in L){const $=L[z];for(const F in $)d($[F].object),delete $[F];delete L[z]}}delete i[C.id]}function _(C){for(const N in i){const B=i[N];for(const L in B){const z=B[L];if(z[C.id]===void 0)continue;const $=z[C.id];for(const F in $)d($[F].object),delete $[F];delete z[C.id]}}}function x(C){for(const N in i){const B=i[N],L=C.isInstancedMesh===!0?C.id:0,z=B[L];if(z!==void 0){for(const $ in z){const F=z[$];for(const ne in F)d(F[ne].object),delete F[ne];delete z[$]}delete B[L],Object.keys(B).length===0&&delete i[N]}}}function P(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:g,disableUnusedAttributes:h}}function Ag(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),t.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let f=0;for(let p=0;p<d;p++)f+=c[p];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Rg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Wn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const x=_===Qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==pn&&_!==Vn&&!x&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Le("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Le("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:h,maxVaryings:E,maxFragmentUniforms:M,maxSamples:w,samples:T}}function Cg(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new yi,o=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||i!==0||s;return s=f,i=u.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,p){const v=u.clippingPlanes,y=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||v===null||v.length===0||r&&!g)r?d(null):c();else{const h=r?0:i,E=h*4;let M=m.clippingState||null;l.value=M,M=d(v,f,E,p);for(let w=0;w!==E;++w)M[w]=t[w];m.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=h}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,f,p,v){const y=u!==null?u.length:0;let g=null;if(y!==0){if(g=l.value,v!==!0||g===null){const m=p+y*4,h=f.matrixWorldInverse;o.getNormalMatrix(h),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,M=p;E!==y;++E,M+=4)a.copy(u[E]).applyMatrix4(h,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}class Sc extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ju(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ht(5,5,5),r=new ds({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Os});r.uniforms.tEquirect.value=t;const a=new Bt(s,r),o=t.minFilter;return t.minFilter===Di&&(t.minFilter=ln),new Dl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const Dd=256,Pg=3,Lg=20,of=256,lf=16,Dg=3,Ig=new O,Ng=new Ge;class Ua{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Dl(1,10,null),this._boxMesh=new Bt(new Ht(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=Ig}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),d=this._getSourceTarget(!0);t>0&&(d.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,f=l.autoClearColor,p=l.autoClearDepth,v=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(Ng));const g=new Dl(i,s,d);return g.position.copy(o),g.update(l,e),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=p,l.autoClearStencil=v,e.background=y,t>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Dd,ip(e))}_fromTexture(e,t){e.mapping===Vs||e.mapping===Er?this._setSize(e.image.length===0?Dd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=Id(e,!1,!1),i=Math.log2(e)-Pg;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Id(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Vs||e.mapping===Er?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ud()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Nd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Ug(),this._integrationMaterial=Fg());const t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/lf);for(let a=0;a<=i;a++){const o=Ua.lodToRoughness(a,i);if(a>i-Dg)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(of*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Og());const i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}}function Id(n,e,t){return new Sc(n,{minFilter:Di,generateMipmaps:e,type:Qn,colorSpace:Ra,depthBuffer:t})}function Fr(n,e,t){return new ds({name:n,uniforms:e,vertexShader:Ve.cube_vert,fragmentShader:t,side:cn,blending:Os,depthTest:!1,depthWrite:!1})}function Ug(){return Fr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${of}u

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
	`)}function Fg(){return Fr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:lf}},`

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
	`)}function Og(){return Fr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Lg}
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
	`)}function Nd(){return Fr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ud(){return Fr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Bg(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,p=!1){return f==null?null:p?a(f):r(f)}function r(f){if(f&&f.isTexture){const p=f.mapping;if(p===ao||p===oo)if(e.has(f)){const v=e.get(f).texture;return o(v,f.mapping)}else{const v=f.image;if(v&&v.height>0){const y=new Sc(v.height);return y.fromEquirectangularTexture(n,f),e.set(f,y),f.addEventListener("dispose",c),o(y.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const p=f.mapping,v=p===ao||p===oo,y=p===Vs||p===Er;if(v||y){let g=t.get(f);const m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new Ua(n)),g=v?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const h=f.image;return v&&h&&h.height>0||y&&h&&l(h)?(i===null&&(i=new Ua(n)),g=v?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",d),g.texture):null}}}return f}function o(f,p){return p===ao?f.mapping=Vs:p===oo&&(f.mapping=Er),f}function l(f){let p=0;const v=6;for(let y=0;y<v;y++)f[y]!==void 0&&p++;return p===v}function c(f){const p=f.target;p.removeEventListener("dispose",c);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function d(f){const p=f.target;p.removeEventListener("dispose",d);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function kg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ba("WebGLRenderer: "+i+" extension not supported."),s}}}function zg(n,e,t,i){const s={},r=new WeakMap,a=new FinalizationRegistry(v=>delete s[v]);function o(v){l(v.target)}function l(v){v.index!==null&&e.remove(v.index);for(const g in v.attributes)e.remove(v.attributes[g]);v.removeEventListener("dispose",o),delete s[v.id],a.unregister(v);const y=r.get(v);y&&(e.remove(y),r.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(v,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function d(v){const y=v.attributes;for(const g in y)e.update(y[g],n.ARRAY_BUFFER)}function u(v){const y=v.index,g=v.attributes.position;let m=0;if(g===void 0)return;const h=y!==null?y.array.length:g.array.length/3-1,E=g.count>=65535?Ku:Yu,M=new E(Math.ceil(h/3)*6,1),w=M.array;if(y!==null){const _=y.array;m=y.version;for(let x=0,P=0;x<h;x+=3){const R=_[x+0],C=_[x+1],N=_[x+2];w[P++]=R,w[P++]=C,w[P++]=C,w[P++]=N,w[P++]=N,w[P++]=R}}else{m=g.version;for(let _=0,x=0;_<h;_+=3){const P=_+0,R=_+1,C=_+2;w[x++]=P,w[x++]=R,w[x++]=R,w[x++]=C,w[x++]=C,w[x++]=P}}M.version=m;const T=r.get(v);T&&e.remove(T),r.set(v,M)}function f(v){const y=r.get(v);if(y){const g=v.index;g!==null&&y.version<g.version&&u(v)}else u(v);return r.get(v)}function p(){for(const v in s){const y=s[v].deref();y!==void 0&&l(y)}}return{get:c,update:d,getWireframeAttribute:f,dispose:p}}function Gg(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*a),t.update(f,i,1)}function c(u,f,p){p!==0&&(n.drawElementsInstanced(i,f,r,u*a,p),t.update(f,i,p))}function d(u,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,p);let y=0;for(let g=0;g<p;g++)y+=f[g];t.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function Hg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:rt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Vg(n,e,t){const i=new WeakMap,s=new St;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let R=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",R)};var p=R;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let M=0;v===!0&&(M=1),y===!0&&(M=2),g===!0&&(M=3);let w=o.attributes.position.count*M,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const _=new Float32Array(w*T*4*u),x=new $u(_,w,T,u);x.type=Vn,x.needsUpdate=!0;const P=M*4;for(let C=0;C<u;C++){const N=m[C],B=h[C],L=E[C],z=w*T*4*C;for(let $=0;$<N.count;$++){const F=$*P;v===!0&&(s.fromBufferAttribute(N,$),_[z+F+0]=s.x,_[z+F+1]=s.y,_[z+F+2]=s.z,_[z+F+3]=0),y===!0&&(s.fromBufferAttribute(B,$),_[z+F+4]=s.x,_[z+F+5]=s.y,_[z+F+6]=s.z,_[z+F+7]=0),g===!0&&(s.fromBufferAttribute(L,$),_[z+F+8]=s.x,_[z+F+9]=s.y,_[z+F+10]=s.z,_[z+F+11]=L.itemSize===4?s.w:1)}}f={count:u,texture:x,size:new We(w,T)},i.set(o,f),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const y=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Wg(n,e,t,i,s){let r=new WeakMap;function a(c){const d=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==d&&(e.update(f),r.set(f,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return f}function o(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const $g={[wu]:"LINEAR_TONE_MAPPING",[Au]:"REINHARD_TONE_MAPPING",[Ru]:"CINEON_TONE_MAPPING",[Cu]:"ACES_FILMIC_TONE_MAPPING",[Lu]:"AGX_TONE_MAPPING",[Du]:"NEUTRAL_TONE_MAPPING",[Pu]:"CUSTOM_TONE_MAPPING"};function Xg(n,e,t,i,s,r){const a=new $n(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const d=new $t;d.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new at([0,2,0,0,2,0],2));const u=new Up({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Bt(d,u),p=new sf(-1,1,1,-1,0,1);let v=null,y=null,g=!1,m,h=null,E=[],M=!1;this.setSize=function(w,T){a.setSize(w,T),o!==null&&o.setSize(w,T),l!==null&&l.setSize(w,T);for(let _=0;_<E.length;_++){const x=E[_];x.setSize&&x.setSize(w,T)}},this.setEffects=function(w){E=w,M=E.length>0&&E[0].isRenderPass===!0;const T=a.width,_=a.height;E.length>0&&o===null&&(o=new $n(T,_,{type:Qn,depthBuffer:!1,stencilBuffer:!1}),l=new $n(T,_,{type:Qn,depthBuffer:!1,stencilBuffer:!1}));const x=s===!0&&E.some(P=>P.needsDepthTexture===!0);x!==(a.depthTexture!==null)&&(x===!0&&c===null&&(c=new $s(T,_),r===!0&&(c.format=Ii,c.type=Ws)),a.dispose(),a.depthTexture=x?c:null,a.resolveDepthBuffer=x,a.storeMultisampledDepthBuffer=x);for(let P=0;P<E.length;P++){const R=E[P];R.setSize&&R.setSize(T,_),x&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(w,T){if(g||w.toneMapping===fi&&E.length===0)return!1;if(h=T,T!==null){const _=T.width,x=T.height;(a.width!==_||a.height!==x)&&this.setSize(_,x)}return M===!1&&w.setRenderTarget(a),m=w.toneMapping,w.toneMapping=fi,!0},this.hasRenderPass=function(){return M},this.end=function(w,T){w.toneMapping=m,g=!0;let _=a,x=o;for(let P=0;P<E.length;P++){const R=E[P];R.enabled!==!1&&(R.render(w,x,_,T),R.needsSwap!==!1&&(_=x,x=x===o?l:o))}if(v!==w.outputColorSpace||y!==w.toneMapping){v=w.outputColorSpace,y=w.toneMapping,u.defines={},Qe.getTransfer(v)===ct&&(u.defines.SRGB_TRANSFER="");const P=$g[y];P&&(u.defines[P]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(h),w.render(f,p),h=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),d.dispose(),u.dispose()}}const cf=new Qt,df=new $s(1,1),uf=new Qu(1),ff=new $u,hf=new up,pf=new Ju,Fd=[],Od=[],Bd=new Float32Array(16),kd=new Float32Array(9),zd=new Float32Array(4);function Js(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Fd[s];if(r===void 0&&(r=new Float32Array(s),Fd[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ja(n,e){let t=Od[e];t===void 0&&(t=new Int32Array(e),Od[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function qg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function Kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function Zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function Jg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;zd.set(i),n.uniformMatrix2fv(this.addr,!1,zd),It(t,i)}}function Qg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;kd.set(i),n.uniformMatrix3fv(this.addr,!1,kd),It(t,i)}}function jg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;Bd.set(i),n.uniformMatrix4fv(this.addr,!1,Bd),It(t,i)}}function e_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function t_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function n_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function i_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function s_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function r_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function a_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function o_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function Qa(n){return n.version===0&&(n.compareFunction=Vu,n.needsUpdate=!0),n}function l_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Qa(df):r=cf,t.setTexture2D(e||r,s)}function c_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||hf,s)}function d_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Qa(uf):r=pf,t.setTextureCube(e||r,s)}function u_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ff,s)}function f_(n){switch(n){case 5126:return qg;case 35664:return Yg;case 35665:return Kg;case 35666:return Zg;case 35674:return Jg;case 35675:return Qg;case 35676:return jg;case 5124:case 35670:return e_;case 35667:case 35671:return t_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return s_;case 36294:return r_;case 36295:return a_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return l_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return u_}}function h_(n,e){n.uniform1fv(this.addr,e)}function p_(n,e){const t=Js(e,this.size,2);n.uniform2fv(this.addr,t)}function m_(n,e){const t=Js(e,this.size,3);n.uniform3fv(this.addr,t)}function g_(n,e){const t=Js(e,this.size,4);n.uniform4fv(this.addr,t)}function __(n,e){const t=Js(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function v_(n,e){const t=Js(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function x_(n,e){const t=Js(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function M_(n,e){n.uniform1iv(this.addr,e)}function S_(n,e){n.uniform2iv(this.addr,e)}function b_(n,e){n.uniform3iv(this.addr,e)}function y_(n,e){n.uniform4iv(this.addr,e)}function E_(n,e){n.uniform1uiv(this.addr,e)}function T_(n,e){n.uniform2uiv(this.addr,e)}function w_(n,e){n.uniform3uiv(this.addr,e)}function A_(n,e){n.uniform4uiv(this.addr,e)}function R_(n,e,t){const i=this.cache,s=e.length,r=Ja(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Qa(df):a=cf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function C_(n,e,t){const i=this.cache,s=e.length,r=Ja(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||hf,r[a])}function P_(n,e,t){const i=this.cache,s=e.length,r=Ja(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Qa(uf):a=pf;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function L_(n,e,t){const i=this.cache,s=e.length,r=Ja(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ff,r[a])}function D_(n){switch(n){case 5126:return h_;case 35664:return p_;case 35665:return m_;case 35666:return g_;case 35674:return __;case 35675:return v_;case 35676:return x_;case 5124:case 35670:return M_;case 35667:case 35671:return S_;case 35668:case 35672:return b_;case 35669:case 35673:return y_;case 5125:return E_;case 36294:return T_;case 36295:return w_;case 36296:return A_;case 35678:case 36198:case 36298:case 36306:case 35682:return R_;case 35679:case 36299:case 36307:return C_;case 35680:case 36300:case 36308:case 36293:return P_;case 36289:case 36303:case 36311:case 36292:return L_}}class I_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=f_(t.type)}}class N_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=D_(t.type)}}class U_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Uo=/(\w+)(\])?(\[|\.)?/g;function Gd(n,e){n.seq.push(e),n.map[e.id]=e}function F_(n,e,t){const i=n.name,s=i.length;for(Uo.lastIndex=0;;){const r=Uo.exec(i),a=Uo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Gd(t,c===void 0?new I_(o,n,e):new N_(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new U_(o),Gd(t,u)),t=u}}}class ya{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);F_(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Hd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const O_=37297;let B_=0;function k_(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Vd=new Ie;function z_(n){Qe._getMatrix(Vd,Qe.workingColorSpace,n);const e=`mat3( ${Vd.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case Ca:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Wd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+k_(n.getShaderSource(e),o)}else return r}function G_(n,e){const t=z_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const H_={[wu]:"Linear",[Au]:"Reinhard",[Ru]:"Cineon",[Cu]:"ACESFilmic",[Lu]:"AgX",[Du]:"Neutral",[Pu]:"Custom"};function V_(n,e){const t=H_[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ua=new O;function W_(){Qe.getLuminanceCoefficients(ua);const n=ua.x.toFixed(4),e=ua.y.toFixed(4),t=ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function X_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function q_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function dr(n){return n!==""}function $d(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Xd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Y_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Il(n){return n.replace(Y_,K_)}function K_(n,e){const t=Ve[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Il(t)}const Z_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qd(n){return n.replace(Z_,J_)}function J_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const Q_={[_a]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"};function j_(n){return Q_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ev={[Er]:"ENVMAP_MODE_REFRACTION"};function tv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ev[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const nv={[lc]:"ENVMAP_BLENDING_MULTIPLY",[zh]:"ENVMAP_BLENDING_MIX",[Gh]:"ENVMAP_BLENDING_ADD"};function iv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":nv[n.combine]||"ENVMAP_BLENDING_NONE"}function sv(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=j_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=tv(t),u=iv(t),f=$_(t),p=X_(r),v=s.createProgram();let y,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(dr).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(dr).join(`
`),g.length>0&&(g+=`
`)):(y=[Yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),g=[Yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==fi?V_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,G_("linearToOutputTexel",t.outputColorSpace),W_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),a=Il(a),a=$d(a,t),a=Xd(a,t),o=Il(o),o=$d(o,t),o=Xd(o,t),a=qd(a),o=qd(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===nd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const h=m+y+a,E=m+g+o,M=Hd(s,s.VERTEX_SHADER,h),w=Hd(s,s.FRAGMENT_SHADER,E);s.attachShader(v,M),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(R){if(n.debug.checkShaderErrors){const C=s.getProgramInfoLog(v)||"",N=s.getShaderInfoLog(M)||"",B=s.getShaderInfoLog(w)||"",L=C.trim(),z=N.trim(),$=B.trim();let F=!0,ne=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,M,w);else{const X=Wd(s,M,"vertex"),j=Wd(s,w,"fragment");rt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+X+`
`+j)}else L!==""?Le("WebGLProgram: Program Info Log:",L):(z===""||$==="")&&(ne=!1);ne&&(R.diagnostics={runnable:F,programLog:L,vertexShader:{log:z,prefix:y},fragmentShader:{log:$,prefix:g}})}s.deleteShader(M),s.deleteShader(w),_=new ya(s,v),x=q_(s,v)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let x;this.getAttributes=function(){return x===void 0&&T(this),x};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(v,O_)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=B_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=w,this}let rv=0;class av{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ov(e),t.set(e,i)),i}}class ov{constructor(e){this.id=rv++,this.code=e,this.usedTimes=0}}function lv(n){return n===cs||n===wa||n===Aa}function cv(n,e,t,i,s,r){const a=new Xu,o=new av,l=new Set,c=[],d=new Map,u=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,x,P,R,C,N){const B=R.fog,L=C.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,F=e.get(_.envMap||z,$),ne=f[_.type];let X=i.precision;_.precision!==null&&(X=i.getMaxPrecision(_.precision),X!==_.precision&&Le("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));const j=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,te=j!==void 0?j.length:0;let Se=0;L.morphAttributes.position!==void 0&&(Se=1),L.morphAttributes.normal!==void 0&&(Se=2),L.morphAttributes.color!==void 0&&(Se=3);let Ue,J,_e,be;if(ne){const me=kn[ne];Ue=me.vertexShader,J=me.fragmentShader}else{Ue=_.vertexShader,J=_.fragmentShader;const me=o.getVertexShaderStage(_),lt=o.getFragmentShaderStage(_);o.update(_,me,lt),_e=me.id,be=lt.id}const Re=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),Oe=C.isInstancedMesh===!0,Et=C.isBatchedMesh===!0,Pe=!!_.map,ot=!!_.matcap,ut=!!F,Ye=ut&&F.isPMREMTexture===!0,kt=!!_.aoMap,At=!!_.lightMap,an=!!_.bumpMap&&_.wireframe===!1,vt=!!_.normalMap,Nn=!!_.displacementMap,Nt=!!_.emissiveMap,vn=!!_.metalnessMap,xn=!!_.roughnessMap,Mn=_.anisotropy>0,U=_.clearcoat>0,Sn=_.diffuseRoughness>0,gt=_.dispersion>0,_t=_.retroreflectivity>0,pe=_.iridescence>0,Rt=_.sheen>0,Ce=_.transmission>0,De=Mn&&!!_.anisotropyMap,A=U&&!!_.clearcoatMap,S=U&&!!_.clearcoatNormalMap,G=U&&!!_.clearcoatRoughnessMap,ie=Sn&&!!_.diffuseRoughnessMap,ee=pe&&!!_.iridescenceMap,oe=pe&&!!_.iridescenceThicknessMap,fe=Rt&&!!_.sheenColorMap,K=Rt&&!!_.sheenRoughnessMap,Z=!!_.specularMap,ce=!!_.specularColorMap,D=!!_.specularIntensityMap,Q=Ce&&!!_.transmissionMap,Y=Ce&&!!_.thicknessMap,de=!!_.gradientMap,re=!!_.alphaMap,le=_.alphaTest>0,we=!!_.alphaHash,He=!!_.extensions;let se=fi;_.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(se=n.toneMapping);const Ae=Ye?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,ze={shaderID:ne,shaderType:_.type,shaderName:_.name,vertexShader:Ue,fragmentShader:J,defines:_.defines,customVertexShaderID:_e,customFragmentShaderID:be,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:Et,batchingColor:Et&&C._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&C.instanceColor!==null,instancingMorph:Oe&&C.morphTexture!==null,outputColorSpace:Re===null?n.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Pe,matcap:ot,envMap:ut,envMapMode:ut&&F.mapping,envMapPMREM:Ye,envMapMaxLod:Ye?Ae.length-1:null,envMapSize:Ye?Ae[0].width:null,aoMap:kt,lightMap:At,bumpMap:an,normalMap:vt,displacementMap:Nn,emissiveMap:Nt,normalMapObjectSpace:vt&&_.normalMapType===Wh,normalMapTangentSpace:vt&&_.normalMapType===Rl,packedNormalMap:vt&&_.normalMapType===Rl&&lv(_.normalMap.format),metalnessMap:vn,roughnessMap:xn,anisotropy:Mn,anisotropyMap:De,clearcoat:U,clearcoatMap:A,clearcoatNormalMap:S,clearcoatRoughnessMap:G,diffuseRoughness:Sn,diffuseRoughnessMap:ie,dispersion:gt,retroreflection:_t,iridescence:pe,iridescenceMap:ee,iridescenceThicknessMap:oe,sheen:Rt,sheenColorMap:fe,sheenRoughnessMap:K,specularMap:Z,specularColorMap:ce,specularIntensityMap:D,transmission:Ce,transmissionMap:Q,thicknessMap:Y,gradientMap:de,opaque:_.transparent===!1&&_.blending===mr&&_.alphaToCoverage===!1,alphaMap:re,alphaTest:le,alphaHash:we,combine:_.combine,mapUv:Pe&&p(_.map.channel),aoMapUv:kt&&p(_.aoMap.channel),lightMapUv:At&&p(_.lightMap.channel),bumpMapUv:an&&p(_.bumpMap.channel),normalMapUv:vt&&p(_.normalMap.channel),displacementMapUv:Nn&&p(_.displacementMap.channel),emissiveMapUv:Nt&&p(_.emissiveMap.channel),metalnessMapUv:vn&&p(_.metalnessMap.channel),roughnessMapUv:xn&&p(_.roughnessMap.channel),anisotropyMapUv:De&&p(_.anisotropyMap.channel),clearcoatMapUv:A&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&p(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&p(_.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:K&&p(_.sheenRoughnessMap.channel),specularMapUv:Z&&p(_.specularMap.channel),specularColorMapUv:ce&&p(_.specularColorMap.channel),specularIntensityMapUv:D&&p(_.specularIntensityMap.channel),transmissionMapUv:Q&&p(_.transmissionMap.channel),thicknessMapUv:Y&&p(_.thicknessMap.channel),alphaMapUv:re&&p(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(vt||Mn),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!L.attributes.uv&&(Pe||re),fog:!!B,useFog:_.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&vt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ve,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Se,numSunLights:x.sun.length,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numSunLightShadows:x.sunShadowMap.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numLightProbeGrids:N.filter(me=>me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:se,decodeVideoTexture:Pe&&_.map.isVideoTexture===!0&&Qe.getTransfer(_.map.colorSpace)===ct,decodeVideoTextureEmissive:Nt&&_.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(_.emissiveMap.colorSpace)===ct,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Hn,flipSided:_.side===cn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:He&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&_.extensions.multiDraw===!0||Et)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function y(_){const x=[];if(_.shaderID?x.push(_.shaderID):(x.push(_.customVertexShaderID),x.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)x.push(P),x.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(g(x,_),m(x,_),x.push(n.outputColorSpace)),x.push(_.customProgramCacheKey),x.join()}function g(_,x){_.push(x.precision),_.push(x.outputColorSpace),_.push(x.envMapMode),_.push(x.envMapPMREM),_.push(x.envMapMaxLod),_.push(x.envMapSize),_.push(x.mapUv),_.push(x.alphaMapUv),_.push(x.lightMapUv),_.push(x.aoMapUv),_.push(x.bumpMapUv),_.push(x.normalMapUv),_.push(x.displacementMapUv),_.push(x.emissiveMapUv),_.push(x.metalnessMapUv),_.push(x.roughnessMapUv),_.push(x.anisotropyMapUv),_.push(x.clearcoatMapUv),_.push(x.clearcoatNormalMapUv),_.push(x.clearcoatRoughnessMapUv),_.push(x.diffuseRoughnessMapUv),_.push(x.iridescenceMapUv),_.push(x.iridescenceThicknessMapUv),_.push(x.sheenColorMapUv),_.push(x.sheenRoughnessMapUv),_.push(x.specularMapUv),_.push(x.specularColorMapUv),_.push(x.specularIntensityMapUv),_.push(x.transmissionMapUv),_.push(x.thicknessMapUv),_.push(x.combine),_.push(x.fogExp2),_.push(x.sizeAttenuation),_.push(x.morphTargetsCount),_.push(x.numSunLights),_.push(x.numDirLights),_.push(x.numPointLights),_.push(x.numSpotLights),_.push(x.numSpotLightMaps),_.push(x.numHemiLights),_.push(x.numRectAreaLights),_.push(x.numSunLightShadows),_.push(x.numDirLightShadows),_.push(x.numPointLightShadows),_.push(x.numSpotLightShadows),_.push(x.numSpotLightShadowsWithMaps),_.push(x.numLightProbes),_.push(x.numLightProbeGrids),_.push(x.shadowMapType),_.push(x.toneMapping),_.push(x.numClippingPlanes),_.push(x.numClipIntersection),_.push(x.depthPacking)}function m(_,x){a.disableAll(),x.instancing&&a.enable(0),x.instancingColor&&a.enable(1),x.instancingMorph&&a.enable(2),x.matcap&&a.enable(3),x.envMap&&a.enable(4),x.normalMapObjectSpace&&a.enable(5),x.normalMapTangentSpace&&a.enable(6),x.clearcoat&&a.enable(7),x.iridescence&&a.enable(8),x.alphaTest&&a.enable(9),x.vertexColors&&a.enable(10),x.vertexAlphas&&a.enable(11),x.vertexUv1s&&a.enable(12),x.vertexUv2s&&a.enable(13),x.vertexUv3s&&a.enable(14),x.vertexTangents&&a.enable(15),x.anisotropy&&a.enable(16),x.alphaHash&&a.enable(17),x.batching&&a.enable(18),x.dispersion&&a.enable(19),x.retroreflection&&a.enable(24),x.diffuseRoughness&&a.enable(25),x.batchingColor&&a.enable(20),x.gradientMap&&a.enable(21),x.packedNormalMap&&a.enable(22),x.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),x.numLightProbeGrids>0&&a.enable(22),x.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function h(_){const x=f[_.type];let P;if(x){const R=kn[x];P=Dp.clone(R.uniforms)}else P=_.uniforms;return P}function E(_,x){let P=d.get(x);return P!==void 0?++P.usedTimes:(P=new sv(n,x,_,s),c.push(P),d.set(x,P)),P}function M(_){if(--_.usedTimes===0){const x=c.indexOf(_);c[x]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function T(){o.dispose()}return{getParameters:v,getProgramCacheKey:y,getUniforms:h,acquireProgram:E,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:T}}function dv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function uv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Kd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Zd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,v,y,g,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:p,material:v,materialVariant:a(f),groupOrder:y,renderOrder:f.renderOrder,z:g,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=p,h.material=v,h.materialVariant=a(f),h.groupOrder=y,h.renderOrder=f.renderOrder,h.z=g,h.group=m),e++,h}function l(f,p,v,y,g,m,h){h.reversedDepth===!0&&(g=-g);const E=o(f,p,v,y,g,m);v.transmission>0?i.push(E):v.transparent===!0?s.push(E):t.push(E)}function c(f,p,v,y,g,m){const h=o(f,p,v,y,g,m);v.transmission>0?i.unshift(h):v.transparent===!0?s.unshift(h):t.unshift(h)}function d(f,p){t.length>1&&t.sort(f||uv),i.length>1&&i.sort(p||Kd),s.length>1&&s.sort(p||Kd)}function u(){for(let f=e,p=n.length;f<p;f++){const v=n[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:d}}function fv(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Zd,n.set(i,[a])):s>=r.length?(a=new Zd,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function hv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new Ge};break;case"SpotLight":t={position:new O,direction:new O,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function pv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let mv=0;function gv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _v(n){const e=new hv,t=pv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const s=new O,r=new mt,a=new mt;function o(c){let d=0,u=0,f=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let p=0,v=0,y=0,g=0,m=0,h=0,E=0,M=0,w=0,T=0,_=0,x=0,P=0,R=0;c.sort(gv);for(let N=0,B=c.length;N<B;N++){const L=c[N],z=L.color,$=L.intensity,F=L.distance;let ne=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===cs?ne=L.shadow.map.texture:ne=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=z.r*$,u+=z.g*$,f+=z.b*$;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],$);R++}else if(L.isSunLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,te=t.get(L);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[v]=te,i.sunShadowMap[v]=ne;const Se=j.getViewportCount();for(let Ue=0;Ue<Se;Ue++)i.sunShadowMatrix[y+Ue]=j.getMatrix(Ue),i.sunShadowCascade[y+Ue]=j._cascadeData[Ue];y+=Se,v++}i.sun[p]=X,p++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,te=t.get(L);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,i.directionalShadow[g]=te,i.directionalShadowMap[g]=ne,i.directionalShadowMatrix[g]=L.shadow.matrix,w++}i.directional[g]=X,g++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(z).multiplyScalar($),X.distance=F,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[h]=X;const j=L.shadow;if(L.map&&(i.spotLightMap[x]=L.map,x++,j.updateMatrices(L),L.castShadow&&P++),i.spotLightMatrix[h]=j.matrix,L.castShadow){const te=t.get(L);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,i.spotShadow[h]=te,i.spotShadowMap[h]=ne,_++}h++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(z).multiplyScalar($),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[E]=X,E++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const j=L.shadow,te=t.get(L);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,te.shadowCameraNear=j.camera.near,te.shadowCameraFar=j.camera.far,i.pointShadow[m]=te,i.pointShadowMap[m]=ne,i.pointShadowMatrix[m]=L.shadow.matrix,T++}i.point[m]=X,m++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar($),X.groundColor.copy(L.groundColor).multiplyScalar($),i.hemi[M]=X,M++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=f;const C=i.hash;(C.sunLength!==p||C.directionalLength!==g||C.pointLength!==m||C.spotLength!==h||C.rectAreaLength!==E||C.hemiLength!==M||C.numSunShadows!==v||C.numDirectionalShadows!==w||C.numPointShadows!==T||C.numSpotShadows!==_||C.numSpotMaps!==x||C.numLightProbes!==R)&&(i.sun.length=p,i.directional.length=g,i.spot.length=h,i.rectArea.length=E,i.point.length=m,i.hemi.length=M,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+x-P,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,C.sunLength=p,C.directionalLength=g,C.pointLength=m,C.spotLength=h,C.rectAreaLength=E,C.hemiLength=M,C.numSunShadows=v,C.numDirectionalShadows=w,C.numPointShadows=T,C.numSpotShadows=_,C.numSpotMaps=x,C.numLightProbes=R,i.version=mv++)}function l(c,d){let u=0,f=0,p=0,v=0,y=0,g=0;const m=d.matrixWorldInverse;for(let h=0,E=c.length;h<E;h++){const M=c[h];if(M.isSunLight){const w=i.sun[u];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),u++}else if(M.isDirectionalLight){const w=i.directional[f];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),f++}else if(M.isSpotLight){const w=i.spot[v];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),v++}else if(M.isRectAreaLight){const w=i.rectArea[y];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){const w=i.point[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),p++}else if(M.isHemisphereLight){const w=i.hemi[g];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Jd(n){const e=new _v(n),t=[],i=[],s=[];function r(u){d.camera=u,t.length=0,i.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){i.push(u)}function l(){e.setup(t),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function vv(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Jd(n),e.set(s,[o])):r>=a.length?(o=new Jd(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mv=`uniform sampler2D shadow_pass;
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
}`,Sv=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],bv=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Qd=new mt,ar=new O,Fo=new O;function yv(n,e,t){let i=new Ar;const s=new We,r=new We,a=new St,o=new Fp,l=new Op,c={},d=t.maxTextureSize,u={[ls]:cn,[cn]:ls,[Hn]:Hn},f=new ds({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:xv,fragmentShader:Mv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new $t;v.setAttribute("position",new rs(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Bt(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_a;let m=this.type;this.render=function(T,_,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Sh&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_a);const P=n.getRenderTarget(),R=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Os),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=m!==this.type;B&&_.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(z=>z.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,z=T.length;L<z;L++){const $=T[L],F=$.shadow;if(F===void 0){Le("WebGLShadowMap:",$,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const ne=F.getFrameExtents();s.multiply(ne),r.copy(F.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ne.x),s.x=r.x*ne.x,F.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ne.y),s.y=r.y*ne.y,F.mapSize.y=r.y));const X=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=X,F.map===null||B===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===cr){if($.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new $n(s.x,s.y,{format:cs,type:Qn,minFilter:ln,magFilter:ln,generateMipmaps:!1}),F.map.texture.name=$.name+".shadowMap",F.map.depthTexture=new $s(s.x,s.y,Vn),F.map.depthTexture.name=$.name+".shadowMapDepth",F.map.depthTexture.format=zi,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Vt,F.map.depthTexture.magFilter=Vt}else $.isPointLight?(F.map=new Sc(s.x),F.map.depthTexture=new Qu(s.x,Jn)):(F.map=new $n(s.x,s.y),F.map.depthTexture=new $s(s.x,s.y,Jn)),F.map.depthTexture.name=$.name+".shadowMap",F.map.depthTexture.format=zi,this.type===_a?(F.map.depthTexture.compareFunction=X?Hu:Gu,F.map.depthTexture.minFilter=ln,F.map.depthTexture.magFilter=ln):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Vt,F.map.depthTexture.magFilter=Vt);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);const j=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();$.isPointLight!==!0&&F.updateMatrices($,x);const te=F.camera.layers.mask&4294967294?F.camera.layers:x.layers;for(let Se=0;Se<j;Se++){const Ue=F.getCamera(Se);if($.isPointLight){const J=F.camera,_e=F.matrix,be=$.distance||J.far;be!==J.far&&(J.far=be,J.updateProjectionMatrix()),ar.setFromMatrixPosition($.matrixWorld),J.position.copy(ar),Fo.copy(J.position),Fo.add(Sv[Se]),J.up.copy(bv[Se]),J.lookAt(Fo),J.updateMatrixWorld(),_e.makeTranslation(-ar.x,-ar.y,-ar.z),Qd.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Qd,J.coordinateSystem,J.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,Se),n.clear();else{Se===0&&(n.setRenderTarget(F.map),n.clear());const J=F.getViewport(Se);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),N.viewport(a)}i=F.getFrustum(Se),M(_,x,Ue,$,te,this.type)}F.isPointLightShadow!==!0&&this.type===cr&&h(F,x),F.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(P,R,C)};function h(T,_){const x=e.update(y);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new $n(s.x,s.y,{format:cs,type:Qn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(_,null,x,f,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(_,null,x,p,y,null)}function E(T,_,x,P){let R=null;const C=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)R=C;else if(R=x.isPointLight===!0?l:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const N=R.uuid,B=_.uuid;let L=c[N];L===void 0&&(L={},c[N]=L);let z=L[B];z===void 0&&(z=R.clone(),L[B]=z,_.addEventListener("dispose",w)),R=z}if(R.visible=_.visible,R.wireframe=_.wireframe,P===cr?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:u[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const N=n.properties.get(R);N.light=x}return R}function M(T,_,x,P,R,C){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===cr)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const L=e.update(T),z=T.material;if(Array.isArray(z)){const $=L.groups;for(let F=0,ne=$.length;F<ne;F++){const X=$[F],j=z[X.materialIndex];if(j&&j.visible){const te=E(T,j,P,C);T.onBeforeShadow(n,T,_,x,L,te,X),n.renderBufferDirect(x,null,L,te,T,X),T.onAfterShadow(n,T,_,x,L,te,X)}}}else if(z.visible){const $=E(T,z,P,C);T.onBeforeShadow(n,T,_,x,L,$,null),n.renderBufferDirect(x,null,L,$,T,null),T.onAfterShadow(n,T,_,x,L,$,null)}}const B=T.children;for(let L=0,z=B.length;L<z;L++)M(B[L],_,x,P,R,C)}function w(T){T.target.removeEventListener("dispose",w);for(const x in c){const P=c[x],R=T.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}function Ev(n,e){function t(){let D=!1;const Q=new St;let Y=null;const de=new St(0,0,0,0);return{setMask:function(re){Y!==re&&!D&&(n.colorMask(re,re,re,re),Y=re)},setLocked:function(re){D=re},setClear:function(re,le,we,He,se){se===!0&&(re*=He,le*=He,we*=He),Q.set(re,le,we,He),de.equals(Q)===!1&&(n.clearColor(re,le,we,He),de.copy(Q))},reset:function(){D=!1,Y=null,de.set(-1,0,0,0)}}}function i(){let D=!1,Q=!1,Y=null,de=null,re=null;return{setReversed:function(le){if(Q!==le){const we=e.get("EXT_clip_control");le?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),Q=le;const He=re;re=null,this.setClear(He)}},getReversed:function(){return Q},setTest:function(le){le?ve(n.DEPTH_TEST):Oe(n.DEPTH_TEST)},setMask:function(le){Y!==le&&!D&&(n.depthMask(le),Y=le)},setFunc:function(le){if(Q&&(le=tp[le]),de!==le){switch(le){case Vo:n.depthFunc(n.NEVER);break;case Wo:n.depthFunc(n.ALWAYS);break;case $o:n.depthFunc(n.LESS);break;case yr:n.depthFunc(n.LEQUAL);break;case Xo:n.depthFunc(n.EQUAL);break;case qo:n.depthFunc(n.GEQUAL);break;case Yo:n.depthFunc(n.GREATER);break;case Ko:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=le}},setLocked:function(le){D=le},setClear:function(le){re!==le&&(re=le,Q&&(le=1-le),n.clearDepth(le))},reset:function(){D=!1,Y=null,de=null,re=null,Q=!1}}}function s(){let D=!1,Q=null,Y=null,de=null,re=null,le=null,we=null,He=null,se=null;return{setTest:function(Ae){D||(Ae?ve(n.STENCIL_TEST):Oe(n.STENCIL_TEST))},setMask:function(Ae){Q!==Ae&&!D&&(n.stencilMask(Ae),Q=Ae)},setFunc:function(Ae,ze,me){(Y!==Ae||de!==ze||re!==me)&&(n.stencilFunc(Ae,ze,me),Y=Ae,de=ze,re=me)},setOp:function(Ae,ze,me){(le!==Ae||we!==ze||He!==me)&&(n.stencilOp(Ae,ze,me),le=Ae,we=ze,He=me)},setLocked:function(Ae){D=Ae},setClear:function(Ae){se!==Ae&&(n.clearStencil(Ae),se=Ae)},reset:function(){D=!1,Q=null,Y=null,de=null,re=null,le=null,we=null,He=null,se=null}}}const r=new t,a=new i,o=new s;let l={};const c=new WeakMap;let d={},u={},f={},p=new WeakMap,v=[],y=null,g=!1,m=null,h=null,E=null,M=null,w=null,T=null,_=null,x=new Ge(0,0,0),P=0,R=!1,C=null,N=null,B=null,L=null,z=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,ne=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(X)[1]),F=ne>=1):X.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),F=ne>=2);let j=null,te={};const Se=n.getParameter(n.SCISSOR_BOX),Ue=n.getParameter(n.VIEWPORT),J=new St().fromArray(Se),_e=new St().fromArray(Ue);function be(D,Q,Y,de){const re=new Uint8Array(4),le=n.createTexture();n.bindTexture(D,le),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<Y;we++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(Q+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return le}const Re={};Re[n.TEXTURE_2D]=be(n.TEXTURE_2D,n.TEXTURE_2D,1),Re[n.TEXTURE_CUBE_MAP]=be(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[n.TEXTURE_2D_ARRAY]=be(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Re[n.TEXTURE_3D]=be(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ve(n.DEPTH_TEST),a.setFunc(yr),an(!1),vt(Qc),ve(n.CULL_FACE),kt(Os);function ve(D){d[D]!==!0&&(n.enable(D),d[D]=!0)}function Oe(D){d[D]!==!1&&(n.disable(D),d[D]=!1)}function Et(D,Q){return f[D]!==Q?(n.bindFramebuffer(D,Q),f[D]=Q,D===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Q),D===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function Pe(D,Q){let Y=v,de=!1;if(D){Y=p.get(Q),Y===void 0&&(Y=[],p.set(Q,Y));const re=D.textures;if(Y.length!==re.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let le=0,we=re.length;le<we;le++)Y[le]=n.COLOR_ATTACHMENT0+le;Y.length=re.length,de=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,de=!0);de&&n.drawBuffers(Y)}function ot(D){return y!==D?(n.useProgram(D),y=D,!0):!1}const ut={[As]:n.FUNC_ADD,[yh]:n.FUNC_SUBTRACT,[Eh]:n.FUNC_REVERSE_SUBTRACT};ut[Th]=n.MIN,ut[wh]=n.MAX;const Ye={[Ah]:n.ZERO,[Rh]:n.ONE,[Ch]:n.SRC_COLOR,[Eu]:n.SRC_ALPHA,[Uh]:n.SRC_ALPHA_SATURATE,[Ih]:n.DST_COLOR,[Lh]:n.DST_ALPHA,[Ph]:n.ONE_MINUS_SRC_COLOR,[Tu]:n.ONE_MINUS_SRC_ALPHA,[Nh]:n.ONE_MINUS_DST_COLOR,[Dh]:n.ONE_MINUS_DST_ALPHA,[Fh]:n.CONSTANT_COLOR,[Oh]:n.ONE_MINUS_CONSTANT_COLOR,[Bh]:n.CONSTANT_ALPHA,[kh]:n.ONE_MINUS_CONSTANT_ALPHA};function kt(D,Q,Y,de,re,le,we,He,se,Ae){if(D===Os){g===!0&&(Oe(n.BLEND),g=!1);return}if(g===!1&&(ve(n.BLEND),g=!0),D!==bh){if(D!==m||Ae!==R){if((h!==As||w!==As)&&(n.blendEquation(n.FUNC_ADD),h=As,w=As),Ae)switch(D){case mr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jc:n.blendFunc(n.ONE,n.ONE);break;case ed:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case td:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:rt("WebGLState: Invalid blending: ",D);break}else switch(D){case mr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ed:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case td:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",D);break}E=null,M=null,T=null,_=null,x.set(0,0,0),P=0,m=D,R=Ae}return}re=re||Q,le=le||Y,we=we||de,(Q!==h||re!==w)&&(n.blendEquationSeparate(ut[Q],ut[re]),h=Q,w=re),(Y!==E||de!==M||le!==T||we!==_)&&(n.blendFuncSeparate(Ye[Y],Ye[de],Ye[le],Ye[we]),E=Y,M=de,T=le,_=we),(He.equals(x)===!1||se!==P)&&(n.blendColor(He.r,He.g,He.b,se),x.copy(He),P=se),m=D,R=!1}function At(D,Q){D.side===Hn?Oe(n.CULL_FACE):ve(n.CULL_FACE);let Y=D.side===cn;Q&&(Y=!Y),an(Y),D.blending===mr&&D.transparent===!1?kt(Os):kt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const de=D.stencilWrite;o.setTest(de),de&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Nt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function an(D){C!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),C=D)}function vt(D){D!==xh?(ve(n.CULL_FACE),D!==N&&(D===Qc?n.cullFace(n.BACK):D===Mh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Oe(n.CULL_FACE),N=D}function Nn(D){D!==B&&(F&&n.lineWidth(D),B=D)}function Nt(D,Q,Y){D?(ve(n.POLYGON_OFFSET_FILL),(L!==Q||z!==Y)&&(L=Q,z=Y,a.getReversed()&&(Q=-Q,Y=-Y),n.polygonOffset(Q,Y))):Oe(n.POLYGON_OFFSET_FILL)}function vn(D){D?ve(n.SCISSOR_TEST):Oe(n.SCISSOR_TEST)}function xn(D){D===void 0&&(D=n.TEXTURE0+$-1),j!==D&&(n.activeTexture(D),j=D)}function Mn(D,Q,Y){Y===void 0&&(j===null?Y=n.TEXTURE0+$-1:Y=j);let de=te[Y];de===void 0&&(de={type:void 0,texture:void 0},te[Y]=de),(de.type!==D||de.texture!==Q)&&(j!==Y&&(n.activeTexture(Y),j=Y),n.bindTexture(D,Q||Re[D]),de.type=D,de.texture=Q)}function U(){const D=te[j];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Sn(){try{n.compressedTexImage2D(...arguments)}catch(D){rt("WebGLState:",D)}}function gt(){try{n.compressedTexImage3D(...arguments)}catch(D){rt("WebGLState:",D)}}function _t(){try{n.texSubImage2D(...arguments)}catch(D){rt("WebGLState:",D)}}function pe(){try{n.texSubImage3D(...arguments)}catch(D){rt("WebGLState:",D)}}function Rt(){try{n.compressedTexSubImage2D(...arguments)}catch(D){rt("WebGLState:",D)}}function Ce(){try{n.compressedTexSubImage3D(...arguments)}catch(D){rt("WebGLState:",D)}}function De(){try{n.texStorage2D(...arguments)}catch(D){rt("WebGLState:",D)}}function A(){try{n.texStorage3D(...arguments)}catch(D){rt("WebGLState:",D)}}function S(){try{n.texImage2D(...arguments)}catch(D){rt("WebGLState:",D)}}function G(){try{n.texImage3D(...arguments)}catch(D){rt("WebGLState:",D)}}function ie(D){return u[D]!==void 0?u[D]:n.getParameter(D)}function ee(D,Q){u[D]!==Q&&(n.pixelStorei(D,Q),u[D]=Q)}function oe(D){J.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),J.copy(D))}function fe(D){_e.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),_e.copy(D))}function K(D,Q){let Y=c.get(Q);Y===void 0&&(Y=new WeakMap,c.set(Q,Y));let de=Y.get(D);de===void 0&&(de=n.getUniformBlockIndex(Q,D.name),n.uniformBlockBinding(Q,de,de),Y.set(D,de))}function Z(D,Q,Y){const re=c.get(Q).get(D);l[re]!==Y&&(n.bindBufferBase(n.UNIFORM_BUFFER,re,Y),l[re]=Y)}function ce(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},u={},j=null,te={},f={},l={},p=new WeakMap,v=[],y=null,g=!1,m=null,h=null,E=null,M=null,w=null,T=null,_=null,x=new Ge(0,0,0),P=0,R=!1,C=null,N=null,B=null,L=null,z=null,J.set(0,0,n.canvas.width,n.canvas.height),_e.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ve,disable:Oe,bindFramebuffer:Et,drawBuffers:Pe,useProgram:ot,setBlending:kt,setMaterial:At,setFlipSided:an,setCullFace:vt,setLineWidth:Nn,setPolygonOffset:Nt,setScissorTest:vn,activeTexture:xn,bindTexture:Mn,unbindTexture:U,compressedTexImage2D:Sn,compressedTexImage3D:gt,texImage2D:S,texImage3D:G,pixelStorei:ee,getParameter:ie,updateUBOMapping:K,uniformBlockBinding:Z,texStorage2D:De,texStorage3D:A,texSubImage2D:_t,texSubImage3D:pe,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Ce,scissor:oe,viewport:fe,reset:ce}}function Tv(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,d=new WeakMap,u=new Set;let f;const p=new WeakMap,v=new Set,y=new FinalizationRegistry(A=>v.delete(A));let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,S){return g?new OffscreenCanvas(A,S):Pa("canvas")}function h(A,S,G){let ie=1;const ee=De(A);if((ee.width>G||ee.height>G)&&(ie=G/Math.max(ee.width,ee.height)),ie<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const oe=Math.floor(ie*ee.width),fe=Math.floor(ie*ee.height);f===void 0&&(f=m(oe,fe));const K=S?m(oe,fe):f;return K.width=oe,K.height=fe,K.getContext("2d").drawImage(A,0,0,oe,fe),Le("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+oe+"x"+fe+")."),K}else return"data"in A&&Le("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function E(A){return A.generateMipmaps}function M(A){n.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(A,S,G,ie,ee,oe=!1){if(A!==null){if(n[A]!==void 0)return n[A];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let fe;ie&&(fe=e.get("EXT_texture_norm16"),fe||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=S;if(S===n.RED&&(G===n.FLOAT&&(K=n.R32F),G===n.HALF_FLOAT&&(K=n.R16F),G===n.UNSIGNED_BYTE&&(K=n.R8),G===n.UNSIGNED_SHORT&&fe&&(K=fe.R16_EXT),G===n.SHORT&&fe&&(K=fe.R16_SNORM_EXT)),S===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.R8UI),G===n.UNSIGNED_SHORT&&(K=n.R16UI),G===n.UNSIGNED_INT&&(K=n.R32UI),G===n.BYTE&&(K=n.R8I),G===n.SHORT&&(K=n.R16I),G===n.INT&&(K=n.R32I)),S===n.RG&&(G===n.FLOAT&&(K=n.RG32F),G===n.HALF_FLOAT&&(K=n.RG16F),G===n.UNSIGNED_BYTE&&(K=n.RG8),G===n.UNSIGNED_SHORT&&fe&&(K=fe.RG16_EXT),G===n.SHORT&&fe&&(K=fe.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RG8UI),G===n.UNSIGNED_SHORT&&(K=n.RG16UI),G===n.UNSIGNED_INT&&(K=n.RG32UI),G===n.BYTE&&(K=n.RG8I),G===n.SHORT&&(K=n.RG16I),G===n.INT&&(K=n.RG32I)),S===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RGB8UI),G===n.UNSIGNED_SHORT&&(K=n.RGB16UI),G===n.UNSIGNED_INT&&(K=n.RGB32UI),G===n.BYTE&&(K=n.RGB8I),G===n.SHORT&&(K=n.RGB16I),G===n.INT&&(K=n.RGB32I)),S===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),G===n.UNSIGNED_INT&&(K=n.RGBA32UI),G===n.BYTE&&(K=n.RGBA8I),G===n.SHORT&&(K=n.RGBA16I),G===n.INT&&(K=n.RGBA32I)),S===n.RGB&&(G===n.UNSIGNED_SHORT&&fe&&(K=fe.RGB16_EXT),G===n.SHORT&&fe&&(K=fe.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),S===n.RGBA){const Z=oe?Ca:Qe.getTransfer(ee);G===n.FLOAT&&(K=n.RGBA32F),G===n.HALF_FLOAT&&(K=n.RGBA16F),G===n.UNSIGNED_BYTE&&(K=Z===ct?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&fe&&(K=fe.RGBA16_EXT),G===n.SHORT&&fe&&(K=fe.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function _(A,S){let G;return A?S===null||S===Jn||S===Ws?G=n.DEPTH24_STENCIL8:S===Vn?G=n.DEPTH32F_STENCIL8:S===Tr&&(G=n.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Jn||S===Ws?G=n.DEPTH_COMPONENT24:S===Vn?G=n.DEPTH_COMPONENT32F:S===Tr&&(G=n.DEPTH_COMPONENT16),G}function x(A,S){return E(A)===!0||A.isFramebufferTexture&&A.minFilter!==Vt&&A.minFilter!==ln?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function P(A){const S=new WeakRef(A);i.get(A).__ref=S,v.add(S),y.register(A,S,S)}function R(A){const S=i.get(A).__ref;S!==void 0&&(v.delete(S),y.unregister(S))}function C(A){B(A.target)}function N(A){L(A.target)}function B(A){A.removeEventListener("dispose",C),R(A),$(A),A.isVideoTexture&&d.delete(A),A.isHTMLTexture&&u.delete(A)}function L(A){A.removeEventListener("dispose",N),R(A),ne(A)}function z(){for(const A of v){const S=A.deref();S!==void 0&&(S.isRenderTarget===!0?L(S):B(S))}v.clear(),u.clear()}function $(A){const S=i.get(A);if(S.__webglInit===void 0)return;const G=A.source,ie=p.get(G);if(ie){const ee=ie[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&F(A),Object.keys(ie).length===0&&p.delete(G)}i.remove(A)}function F(A){const S=i.get(A);n.deleteTexture(S.__webglTexture);const G=A.source,ie=p.get(G);delete ie[S.__cacheKey],a.memory.textures--}function ne(A){const S=i.get(A);S.__depthDisposeCallback&&S.__depthDisposeCallback();const G=A.depthTexture;if(G&&G.renderTarget===A&&B(G),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(S.__webglFramebuffer[ee]))for(let oe=0;oe<S.__webglFramebuffer[ee].length;oe++)n.deleteFramebuffer(S.__webglFramebuffer[ee][oe]);else n.deleteFramebuffer(S.__webglFramebuffer[ee]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[ee])}else{if(Array.isArray(S.__webglFramebuffer))for(let ee=0;ee<S.__webglFramebuffer.length;ee++)n.deleteFramebuffer(S.__webglFramebuffer[ee]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ee=0;ee<S.__webglColorRenderbuffer.length;ee++)S.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[ee]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const ie=A.textures;for(let ee=0,oe=ie.length;ee<oe;ee++){const fe=i.get(ie[ee]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),a.memory.textures--),i.remove(ie[ee])}i.remove(A)}let X=0;function j(){X=0}function te(){return X}function Se(A){X=A}function Ue(){const A=X;return A>=s.maxTextures&&Le("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,A}function J(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.mipmapsAutoUpdate),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function _e(A,S){const G=i.get(A);if(A.isVideoTexture&&Rt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){const ie=A.image;if(ie===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{At(G,A,S);return}}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+S)}function be(A,S){const G=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){At(G,A,S);return}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+S)}function Re(A,S){const G=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){At(G,A,S);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+S)}function ve(A,S){const G=i.get(A);if(A.version>0&&G.__version!==A.version){an(G,A,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+S)}const Oe={[Zo]:n.REPEAT,[di]:n.CLAMP_TO_EDGE,[Jo]:n.MIRRORED_REPEAT},Et={[Vt]:n.NEAREST,[Hh]:n.NEAREST_MIPMAP_NEAREST,[zr]:n.NEAREST_MIPMAP_LINEAR,[ln]:n.LINEAR,[lo]:n.LINEAR_MIPMAP_NEAREST,[Di]:n.LINEAR_MIPMAP_LINEAR},Pe={[Xh]:n.NEVER,[Vu]:n.ALWAYS,[qh]:n.LESS,[Gu]:n.LEQUAL,[Yh]:n.EQUAL,[Hu]:n.GEQUAL,[Kh]:n.GREATER,[Zh]:n.NOTEQUAL};function ot(A,S){if(S.type===Vn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===ln||S.magFilter===lo||S.magFilter===zr||S.magFilter===Di||S.minFilter===ln||S.minFilter===lo||S.minFilter===zr||S.minFilter===Di)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Oe[S.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Oe[S.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Oe[S.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Et[S.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Et[S.minFilter]),S.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Pe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Vt||S.minFilter!==zr&&S.minFilter!==Di||S.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ut(A,S){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",C),P(S));const ie=S.source;let ee=p.get(ie);ee===void 0&&(ee={},p.set(ie,ee));const oe=J(S);if(oe!==A.__cacheKey){ee[oe]===void 0&&(ee[oe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ee[oe].usedTimes++;const fe=ee[A.__cacheKey];fe!==void 0&&(ee[A.__cacheKey].usedTimes--,fe.usedTimes===0&&F(S)),A.__cacheKey=oe,A.__webglTexture=ee[oe].texture}return G}function Ye(A,S,G){return Math.floor(Math.floor(A/G)/S)}function kt(A,S,G,ie){const oe=A.updateRanges;if(oe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,G,ie,S.data);else{oe.sort((D,Q)=>D.start-Q.start);let fe=0;for(let D=1;D<oe.length;D++){const Q=oe[fe],Y=oe[D],de=Q.start+Q.count,re=Ye(Y.start,S.width,4),le=Ye(Q.start,S.width,4);Y.start<=de+1&&re===le&&Ye(Y.start+Y.count-1,S.width,4)===re?Q.count=Math.max(Q.count,Y.start+Y.count-Q.start):(++fe,oe[fe]=Y)}oe.length=fe+1;const K=t.getParameter(n.UNPACK_ROW_LENGTH),Z=t.getParameter(n.UNPACK_SKIP_PIXELS),ce=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let D=0,Q=oe.length;D<Q;D++){const Y=oe[D],de=Math.floor(Y.start/4),re=Math.ceil(Y.count/4),le=de%S.width,we=Math.floor(de/S.width),He=re,se=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,le),t.pixelStorei(n.UNPACK_SKIP_ROWS,we),t.texSubImage2D(n.TEXTURE_2D,0,le,we,He,se,G,ie,S.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,K),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(n.UNPACK_SKIP_ROWS,ce)}}function At(A,S,G){let ie=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ie=n.TEXTURE_3D);const ee=ut(A,S),oe=S.source;t.bindTexture(ie,A.__webglTexture,n.TEXTURE0+G);const fe=i.get(oe);if(oe.version!==fe.__version||ee===!0){if(t.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const se=Qe.getPrimaries(Qe.workingColorSpace),Ae=S.colorSpace===Ri?null:Qe.getPrimaries(S.colorSpace),ze=S.colorSpace===Ri||se===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let Z=h(S.image,!1,s.maxTextureSize);Z=Ce(S,Z);const ce=r.convert(S.format,S.colorSpace),D=r.convert(S.type);let Q=T(S.internalFormat,ce,D,S.normalized,S.colorSpace,S.isVideoTexture);ot(ie,S);let Y;const de=S.mipmaps,re=S.isVideoTexture!==!0,le=fe.__version===void 0||ee===!0,we=oe.dataReady,He=x(S,Z);if(S.isDepthTexture)Q=_(S.format===Ii,S.type),le&&(re?t.texStorage2D(n.TEXTURE_2D,1,Q,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,Q,Z.width,Z.height,0,ce,D,null));else if(S.isDataTexture)if(de.length>0){re&&le&&t.texStorage2D(n.TEXTURE_2D,He,Q,de[0].width,de[0].height);for(let se=0,Ae=de.length;se<Ae;se++)Y=de[se],re?we&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Y.width,Y.height,ce,D,Y.data):t.texImage2D(n.TEXTURE_2D,se,Q,Y.width,Y.height,0,ce,D,Y.data);S.generateMipmaps=!1}else re?(le&&t.texStorage2D(n.TEXTURE_2D,He,Q,Z.width,Z.height),we&&kt(S,Z,ce,D)):t.texImage2D(n.TEXTURE_2D,0,Q,Z.width,Z.height,0,ce,D,Z.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){re&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,He,Q,de[0].width,de[0].height,Z.depth);for(let se=0,Ae=de.length;se<Ae;se++)if(Y=de[se],S.format!==Wn)if(ce!==null)if(re){if(we)if(S.layerUpdates.size>0){const ze=Ld(Y.width,Y.height,S.format,S.type);for(const me of S.layerUpdates){const lt=Y.data.subarray(me*ze/Y.data.BYTES_PER_ELEMENT,(me+1)*ze/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,me,Y.width,Y.height,1,ce,lt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Y.width,Y.height,Z.depth,ce,Y.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Q,Y.width,Y.height,Z.depth,0,Y.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?we&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Y.width,Y.height,Z.depth,ce,D,Y.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Q,Y.width,Y.height,Z.depth,0,ce,D,Y.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{re&&le&&t.texStorage2D(n.TEXTURE_2D,He,Q,de[0].width,de[0].height);for(let se=0,Ae=de.length;se<Ae;se++)Y=de[se],S.format!==Wn?ce!==null?re?we&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,Y.width,Y.height,ce,Y.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Q,Y.width,Y.height,0,Y.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?we&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Y.width,Y.height,ce,D,Y.data):t.texImage2D(n.TEXTURE_2D,se,Q,Y.width,Y.height,0,ce,D,Y.data)}else if(S.isDataArrayTexture)if(re){if(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,He,Q,Z.width,Z.height,Z.depth),we)if(S.layerUpdates.size>0){const se=Ld(Z.width,Z.height,S.format,S.type);for(const Ae of S.layerUpdates){const ze=Z.data.subarray(Ae*se/Z.data.BYTES_PER_ELEMENT,(Ae+1)*se/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ae,Z.width,Z.height,1,ce,D,ze)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ce,D,Z.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Q,Z.width,Z.height,Z.depth,0,ce,D,Z.data);else if(S.isData3DTexture)re?(le&&t.texStorage3D(n.TEXTURE_3D,He,Q,Z.width,Z.height,Z.depth),we&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ce,D,Z.data)):t.texImage3D(n.TEXTURE_3D,0,Q,Z.width,Z.height,Z.depth,0,ce,D,Z.data);else if(S.isFramebufferTexture){if(le)if(re)t.texStorage2D(n.TEXTURE_2D,He,Q,Z.width,Z.height);else{let se=Z.width,Ae=Z.height;for(let ze=0;ze<He;ze++)t.texImage2D(n.TEXTURE_2D,ze,Q,se,Ae,0,ce,D,null),se>>=1,Ae>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){const se=n.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),Z.parentNode!==se){se.appendChild(Z),u.add(S),se.onpaint=Ae=>{const ze=Ae.changedElements;for(const me of u)ze.includes(me.image)&&(me.needsUpdate=!0)},se.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Z);else{const ze=n.RGBA,me=n.RGBA,lt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ze,me,lt,Z)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(de.length>0){if(re&&le){const se=De(de[0]);t.texStorage2D(n.TEXTURE_2D,He,Q,se.width,se.height)}for(let se=0,Ae=de.length;se<Ae;se++)Y=de[se],re?we&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,ce,D,Y):t.texImage2D(n.TEXTURE_2D,se,Q,ce,D,Y);S.generateMipmaps=!1}else if(re){if(le){const se=De(Z);t.texStorage2D(n.TEXTURE_2D,He,Q,se.width,se.height)}we&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,D,Z)}else t.texImage2D(n.TEXTURE_2D,0,Q,ce,D,Z);E(S)&&S.mipmapsAutoUpdate===!0&&M(ie),fe.__version=oe.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function an(A,S,G){if(S.image.length!==6)return;const ie=ut(A,S),ee=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+G);const oe=i.get(ee);if(ee.version!==oe.__version||ie===!0){t.activeTexture(n.TEXTURE0+G);const fe=Qe.getPrimaries(Qe.workingColorSpace),K=S.colorSpace===Ri?null:Qe.getPrimaries(S.colorSpace),Z=S.colorSpace===Ri||fe===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const ce=S.isCompressedTexture||S.image[0].isCompressedTexture,D=S.image[0]&&S.image[0].isDataTexture,Q=[];for(let me=0;me<6;me++)!ce&&!D?Q[me]=h(S.image[me],!0,s.maxCubemapSize):Q[me]=D?S.image[me].image:S.image[me],Q[me]=Ce(S,Q[me]);const Y=Q[0],de=r.convert(S.format,S.colorSpace),re=r.convert(S.type);let le=T(S.internalFormat,de,re,S.normalized,S.colorSpace);const we=S.isVideoTexture!==!0,He=oe.__version===void 0||ie===!0,se=ee.dataReady;let Ae=x(S,Y);ot(n.TEXTURE_CUBE_MAP,S);let ze;if(S.isDepthTexture){if(le=_(S.format===Ii,S.type),He)if(we)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,le,Y.width,Y.height);else for(let me=0;me<6;me++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,le,Y.width,Y.height,0,de,re,null)}else if(ce){we&&He&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,le,Y.width,Y.height);for(let me=0;me<6;me++){ze=Q[me].mipmaps;for(let lt=0;lt<ze.length;lt++){const Ut=ze[lt];S.format!==Wn?de!==null?we?se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt,0,0,Ut.width,Ut.height,de,Ut.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt,le,Ut.width,Ut.height,0,Ut.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt,0,0,Ut.width,Ut.height,de,re,Ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt,le,Ut.width,Ut.height,0,de,re,Ut.data)}}}else{if(ze=S.mipmaps,we&&He){ze.length>0&&Ae++;const me=De(Q[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,le,me.width,me.height)}for(let me=0;me<6;me++)if(D){we?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Q[me].width,Q[me].height,de,re,Q[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,le,Q[me].width,Q[me].height,0,de,re,Q[me].data);for(let lt=0;lt<ze.length;lt++){const gi=ze[lt].image[me].image;we?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt+1,0,0,gi.width,gi.height,de,re,gi.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt+1,le,gi.width,gi.height,0,de,re,gi.data)}}else{we?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,de,re,Q[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,le,de,re,Q[me]);for(let lt=0;lt<ze.length;lt++){const Ut=ze[lt];we?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt+1,0,0,de,re,Ut.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,lt+1,le,de,re,Ut.image[me])}}}E(S)&&S.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),oe.__version=ee.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function vt(A,S,G,ie,ee,oe){const fe=r.convert(G.format,G.colorSpace),K=r.convert(G.type),Z=T(G.internalFormat,fe,K,G.normalized,G.colorSpace),ce=i.get(S),D=i.get(G);if(D.__renderTarget=S,!ce.__hasExternalTextures){const Q=Math.max(1,S.width>>oe),Y=Math.max(1,S.height>>oe);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,oe,Z,Q,Y,S.depth,0,fe,K,null):t.texImage2D(ee,oe,Z,Q,Y,0,fe,K,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),pe(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,ee,D.__webglTexture,0,_t(S)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,ee,D.__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Nn(A,S,G){if(n.bindRenderbuffer(n.RENDERBUFFER,A),S.depthBuffer){const ie=S.depthTexture,ee=ie&&ie.isDepthTexture?ie.type:null,oe=_(S.stencilBuffer,ee),fe=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;pe(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t(S),oe,S.width,S.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t(S),oe,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,oe,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,A)}else{const ie=S.textures;for(let ee=0;ee<ie.length;ee++){const oe=ie[ee],fe=r.convert(oe.format,oe.colorSpace),K=r.convert(oe.type),Z=T(oe.internalFormat,fe,K,oe.normalized,oe.colorSpace);pe(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t(S),Z,S.width,S.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t(S),Z,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Z,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Nt(A,S,G){const ie=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ee=i.get(S.depthTexture);ee.__renderTarget=S;const oe=ie?S.depthTexture.image[0]:S.depthTexture.image;(!ee.__webglTexture||oe.width!==S.width||oe.height!==S.height)&&(oe.width=S.width,oe.height=S.height,S.depthTexture.needsUpdate=!0),ie?ve(S.depthTexture,0):_e(S.depthTexture,0);const fe=ee.__webglTexture,K=_t(S),Z=ie?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,ce=S.depthTexture.format===Ii?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===zi)pe(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,Z,fe,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,ce,Z,fe,0);else if(S.depthTexture.format===Ii)pe(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,Z,fe,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,ce,Z,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function vn(A){const S=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const ie=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ie){const ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ie.removeEventListener("dispose",ee)};ie.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=ie}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let ie=0;ie<6;ie++)Nt(S.__webglFramebuffer[ie],A,ie);else A.texture.mipmaps.length>0?Nt(S.__webglFramebuffer[0],A,0):Nt(S.__webglFramebuffer,A,0);else if(G){S.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[ie]),S.__webglDepthbuffer[ie]===void 0)S.__webglDepthbuffer[ie]=n.createRenderbuffer(),Nn(S.__webglDepthbuffer[ie],A,!1);else{const ee=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=S.__webglDepthbuffer[ie];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,oe)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Nn(S.__webglDepthbuffer,A,!1);else{const ee=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,oe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function xn(A,S,G){const ie=i.get(A);S!==void 0&&vt(ie.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&vn(A)}function Mn(A){const S=A.texture,G=i.get(A),ie=i.get(S);A.addEventListener("dispose",N),P(A);const ee=A.textures,oe=A.isWebGLCubeRenderTarget===!0,fe=ee.length>1;if(fe||(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=S.version,a.memory.textures++),oe){G.__webglFramebuffer=[];for(let K=0;K<6;K++)if(S.mipmaps.length>0){G.__webglFramebuffer[K]=[];for(let Z=0;Z<S.mipmaps.length;Z++)G.__webglFramebuffer[K][Z]=n.createFramebuffer()}else G.__webglFramebuffer[K]=n.createFramebuffer()}else{if(S.mipmaps.length>0){G.__webglFramebuffer=[];for(let K=0;K<S.mipmaps.length;K++)G.__webglFramebuffer[K]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(fe)for(let K=0,Z=ee.length;K<Z;K++){const ce=i.get(ee[K]);ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&pe(A)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let K=0;K<ee.length;K++){const Z=ee[K];G.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[K]);const ce=r.convert(Z.format,Z.colorSpace),D=r.convert(Z.type),Q=T(Z.internalFormat,ce,D,Z.normalized,Z.colorSpace,A.isXRRenderTarget===!0),Y=_t(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,Q,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,G.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Nn(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),ot(n.TEXTURE_CUBE_MAP,S);for(let K=0;K<6;K++)if(S.mipmaps.length>0)for(let Z=0;Z<S.mipmaps.length;Z++)vt(G.__webglFramebuffer[K][Z],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Z);else vt(G.__webglFramebuffer[K],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);E(S)?M(n.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(fe){for(let K=0,Z=ee.length;K<Z;K++){const ce=ee[K],D=i.get(ce);let Q=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,D.__webglTexture),ot(Q,ce),vt(G.__webglFramebuffer,A,ce,n.COLOR_ATTACHMENT0+K,Q,0),E(ce)&&M(Q)}t.unbindTexture()}else{let K=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(K,ie.__webglTexture),ot(K,S),S.mipmaps.length>0)for(let Z=0;Z<S.mipmaps.length;Z++)vt(G.__webglFramebuffer[Z],A,S,n.COLOR_ATTACHMENT0,K,Z);else vt(G.__webglFramebuffer,A,S,n.COLOR_ATTACHMENT0,K,0);E(S)?M(K):S.mipmaps.length>0&&n.texParameteri(K,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&vn(A)}function U(A){const S=A.textures;for(let G=0,ie=S.length;G<ie;G++){const ee=S[G];if(E(ee)&&ee.mipmapsAutoUpdate===!0){const oe=w(A),fe=i.get(ee).__webglTexture;t.bindTexture(oe,fe),M(oe),t.unbindTexture()}}}const Sn=[];function gt(A){if(A.samples>0){if(pe(A)===!1){const S=A.textures,G=A.width,ie=A.height;let ee=n.COLOR_BUFFER_BIT;const oe=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(A),K=S.length>1;if(K)for(let ce=0;ce<S.length;ce++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ce=0;ce<S.length;ce++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[ce]);const D=i.get(S[ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,D,0)}n.blitFramebuffer(0,0,G,ie,0,0,G,ie,ee,n.NEAREST),l===!0&&(Sn.length=0,Sn.push(n.COLOR_ATTACHMENT0+ce),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Sn.push(oe),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Sn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let ce=0;ce<S.length;ce++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,fe.__webglColorRenderbuffer[ce]);const D=i.get(S[ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,D,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const S=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function _t(A){return Math.min(s.maxSamples,A.samples)}function pe(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Rt(A){const S=a.render.frame;d.get(A)!==S&&(d.set(A,S),A.update())}function Ce(A,S){const G=A.colorSpace,ie=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==Ra&&G!==Ri&&(Qe.getTransfer(G)===ct?(ie!==Wn||ee!==pn)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",G)),S}function De(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Ue,this.resetTextureUnits=j,this.getTextureUnits=te,this.setTextureUnits=Se,this.setTexture2D=_e,this.setTexture2DArray=be,this.setTexture3D=Re,this.setTextureCube=ve,this.rebindTextures=xn,this.setupRenderTarget=Mn,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=vn,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=pe,this.dispose=z}function wv(n,e){function t(i,s=Ri){let r;const a=Qe.getTransfer(s);if(i===pn)return n.UNSIGNED_BYTE;if(i===dc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===uc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Fu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ou)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Nu)return n.BYTE;if(i===Uu)return n.SHORT;if(i===Tr)return n.UNSIGNED_SHORT;if(i===cc)return n.INT;if(i===Jn)return n.UNSIGNED_INT;if(i===Vn)return n.FLOAT;if(i===Qn)return n.HALF_FLOAT;if(i===Bu)return n.ALPHA;if(i===ku)return n.RGB;if(i===Wn)return n.RGBA;if(i===zi)return n.DEPTH_COMPONENT;if(i===Ii)return n.DEPTH_STENCIL;if(i===zu)return n.RED;if(i===fc)return n.RED_INTEGER;if(i===cs)return n.RG;if(i===hc)return n.RG_INTEGER;if(i===pc)return n.RGBA_INTEGER;if(i===va||i===xa||i===Ma||i===Sa)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qo||i===jo||i===el||i===tl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Qo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===el)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nl||i===il||i===sl||i===rl||i===al||i===wa||i===ol)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===nl||i===il)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===sl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===rl)return r.COMPRESSED_R11_EAC;if(i===al)return r.COMPRESSED_SIGNED_R11_EAC;if(i===wa)return r.COMPRESSED_RG11_EAC;if(i===ol)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ll||i===cl||i===dl||i===ul||i===fl||i===hl||i===pl||i===ml||i===gl||i===_l||i===vl||i===xl||i===Ml||i===Sl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ll)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ul)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ml)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_l)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ml)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bl||i===yl||i===El)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===bl)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===El)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Tl||i===wl||i===Aa||i===Al)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Tl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ws?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Av=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rv=`
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

}`;class Cv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ju(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ds({vertexShader:Av,fragmentShader:Rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new Xs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pv extends fs{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,f=null,p=null,v=null;const y=typeof XRWebGLBinding<"u",g=new Cv,m={},h=t.getContextAttributes();let E=null,M=null;const w=[],T=[],_=new We;let x=null,P=null;const R=new Cn;R.viewport=new St;const C=new Cn;C.viewport=new St;const N=[R,C],B=new Hp;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let _e=w[J];return _e===void 0&&(_e=new vo,w[J]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(J){let _e=w[J];return _e===void 0&&(_e=new vo,w[J]=_e),_e.getGripSpace()},this.getHand=function(J){let _e=w[J];return _e===void 0&&(_e=new vo,w[J]=_e),_e.getHandSpace()};function $(J){const _e=T.indexOf(J.inputSource);if(_e===-1)return;const be=w[_e];be!==void 0&&(be.update(J.inputSource,J.frame,c||a),be.dispatchEvent({type:J.type,data:J.inputSource}))}function F(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",ne);for(let J=0;J<w.length;J++){const _e=T[J];_e!==null&&(T[J]=null,w[J].disconnect(_e))}L=null,z=null,g.reset();for(const J in m)delete m[J];if(e.setRenderTarget(E),p=null,f=null,u=null,s=null,M=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(_.width,_.height,!1),P!==null){const J=P.camera;J.fov=P.fov,J.zoom=P.zoom,J.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",F),s.addEventListener("inputsourceschange",ne),h.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Re=null,ve=null;h.depth&&(ve=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=h.stencil?Ii:zi,Re=h.stencil?Ws:Jn);const Oe={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Oe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new $n(f.textureWidth,f.textureHeight,{format:Wn,type:pn,depthTexture:new $s(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const be={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new $n(p.framebufferWidth,p.framebufferHeight,{format:Wn,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ue.setContext(s),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ne(J){for(let _e=0;_e<J.removed.length;_e++){const be=J.removed[_e],Re=T.indexOf(be);Re>=0&&(T[Re]=null,w[Re].disconnect(be))}for(let _e=0;_e<J.added.length;_e++){const be=J.added[_e];let Re=T.indexOf(be);if(Re===-1){for(let Oe=0;Oe<w.length;Oe++)if(Oe>=T.length){T.push(be),Re=Oe;break}else if(T[Oe]===null){T[Oe]=be,Re=Oe;break}if(Re===-1)break}const ve=w[Re];ve&&ve.connect(be)}}function X(J,_e){_e===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(_e.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let _e=J.near,be=J.far;g.texture!==null&&(g.depthNear>0&&(_e=g.depthNear),g.depthFar>0&&(be=g.depthFar)),B.near=C.near=R.near=_e,B.far=C.far=R.far=be,(L!==B.near||z!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),L=B.near,z=B.far),B.layers.mask=J.layers.mask|6,R.layers.mask=B.layers.mask&-5,C.layers.mask=B.layers.mask&-3;const Re=J.parent,ve=B.cameras;X(B,Re);for(let Oe=0;Oe<ve.length;Oe++)X(ve[Oe],Re);B.projectionMatrix.copy(R.projectionMatrix),B.projectionMatrixInverse.copy(R.projectionMatrixInverse),P===null&&J.isPerspectiveCamera&&(P={camera:J,fov:J.fov,zoom:J.zoom}),j(J,B,Re)};function j(J,_e,be){be===null?J.matrix.copy(_e.matrixWorld):(J.matrix.copy(be.matrixWorld),J.matrix.invert(),J.matrix.multiply(_e.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(_e.projectionMatrix),J.projectionMatrixInverse.copy(_e.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Cl*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(J){return m[J]};let te=null;function Se(J,_e){if(d=_e.getViewerPose(c||a),v=_e,d!==null){const be=d.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Re=!1;be.length!==B.cameras.length&&(B.cameras.length=0,Re=!0);for(let Pe=0;Pe<be.length;Pe++){const ot=be[Pe];let ut=null;if(p!==null)ut=p.getViewport(ot);else{const kt=u.getViewSubImage(f,ot);ut=kt.viewport,Pe===0&&(e.setRenderTargetTextures(M,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(M))}let Ye=N[Pe];Ye===void 0&&(Ye=new Cn,Ye.layers.enable(Pe),Ye.viewport=new St,N[Pe]=Ye),Ye.matrix.fromArray(ot.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(ot.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(ut.x,ut.y,ut.width,ut.height),Pe===0&&(B.matrix.copy(Ye.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Re===!0&&B.cameras.push(Ye)}const ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=i.getBinding();const Pe=u.getDepthInformation(be[0]);Pe&&Pe.isValid&&Pe.texture&&g.init(Pe,s.renderState)}if(ve&&ve.includes("camera-access")&&y){e.state.unbindTexture(),u=i.getBinding();for(let Pe=0;Pe<be.length;Pe++){const ot=be[Pe].camera;if(ot){let ut=m[ot];ut||(ut=new ju,m[ot]=ut);const Ye=u.getCameraImage(ot);ut.sourceTexture=Ye}}}}for(let be=0;be<w.length;be++){const Re=T[be],ve=w[be];Re!==null&&ve!==void 0&&ve.update(Re,_e,c||a)}te&&te(J,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),v=null}const Ue=new rf;Ue.setAnimationLoop(Se),this.setAnimationLoop=function(J){te=J},this.dispose=function(){}}}const Lv=new mt,mf=new Ie;mf.set(-1,0,0,0,1,0,0,0,1);function Dv(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,ef(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,h,E,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),d(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&p(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),v(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),y(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,h,E):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===cn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===cn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const h=e.get(m),E=h.envMap,M=h.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(Lv.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(mf),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,h,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*h,g.scale.value=E*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,h){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===cn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=h.texture,g.transmissionSamplerSize.value.set(h.width,h.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){const h=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(h.matrixWorld),g.nearDistance.value=h.shadow.camera.near,g.farDistance.value=h.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Iv(n,e,t,i){let s={},r={};function a(h,E){const M=E.program;i.uniformBlockBinding(h,M,s[h.id])}function o(h,E){let M=s[h.id];M===void 0&&(v(h),M=l(h),s[h.id]=M,h.addEventListener("dispose",g));const w=E.program;i.updateUBOMapping(h,w);const T=e.render.frame;r[h.id]!==T&&(c(h),r[h.id]=T)}function l(h){const E=n.createBuffer(),M=h.__size,w=h.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,M,w),n.bindBuffer(n.UNIFORM_BUFFER,null),E}function c(h){const E=s[h.id],M=h.uniforms,w=h.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let T=0,_=M.length;T<_;T++){const x=M[T];if(Array.isArray(x))for(let P=0,R=x.length;P<R;P++)d(x[P],T,P,w);else d(x,T,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(h,E,M,w){if(f(h,E,M,w)===!0){const T=h.__offset,_=h.value;if(Array.isArray(_)){let x=0;for(let P=0;P<_.length;P++){const R=_[P],C=y(R,!0);u(R,h.__data,x),x+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,h.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,h.__data)}}function u(h,E,M){typeof h=="number"||typeof h=="boolean"?E[M]=h:h.isMatrix3?(E[M]=h.elements[0],E[M+1]=h.elements[1],E[M+2]=h.elements[2],E[M+3]=0,E[M+4]=h.elements[3],E[M+5]=h.elements[4],E[M+6]=h.elements[5],E[M+7]=0,E[M+8]=h.elements[6],E[M+9]=h.elements[7],E[M+10]=h.elements[8],E[M+11]=0):ArrayBuffer.isView(h)?E.set(h.subarray(0,E.length-M),M):h.toArray(E,M)}function f(h,E,M,w){const T=h.value,_=E+"_"+M;if(Array.isArray(T)){w[_]===void 0&&(w[_]=[]);const x=w[_];let P=!1;for(let R=0;R<T.length;R++)p(T[R],x,R)===!0&&(P=!0);return P}return p(T,w,_)}function p(h,E,M){if(E[M]===void 0)return typeof h=="number"||typeof h=="boolean"?E[M]=h:ArrayBuffer.isView(h)?E[M]=h.slice():E[M]=h.clone(),!0;{const w=E[M];if(typeof h=="number"||typeof h=="boolean"){if(w!==h)return E[M]=h,!0}else{if(ArrayBuffer.isView(h))return!0;if(w.equals(h)===!1)return w.copy(h),!0}}return!1}function v(h){const E=h.uniforms;let M=0;const w=16;for(let _=0,x=E.length;_<x;_++){const P=Array.isArray(E[_])?E[_]:[E[_]];for(let R=0,C=P.length;R<C;R++){const N=P[R],B=Array.isArray(N.value)?N.value:[N.value],L=Array.isArray(E[_])||Array.isArray(N.value);let z=M;for(let F=0,ne=B.length;F<ne;F++){const X=B[F],j=y(X,L),te=M%w,Se=te%j.boundary,Ue=te+Se;M+=Se,Ue!==0&&w-Ue<j.storage&&(M+=w-Ue),F===0&&(z=M),M+=j.storage}const $=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new $((M-z)/Float32Array.BYTES_PER_ELEMENT),N.__offset=z}}const T=M%w;return T>0&&(M+=w-T),h.__size=M,h.__cache={},this}function y(h,E){const M={boundary:0,storage:0};return typeof h=="number"||typeof h=="boolean"?(M.boundary=4,M.storage=4):h.isVector2?(M.boundary=8,M.storage=8):h.isVector3||h.isColor?(M.boundary=16,M.storage=12):h.isVector4?(M.boundary=16,M.storage=16):h.isMatrix3?(M.boundary=16,M.storage=48):h.isMatrix4?(M.boundary=16,M.storage=64):h.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(h)?(M.boundary=16,M.storage=h.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",h),E===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function g(h){const E=h.target;E.removeEventListener("dispose",g),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(const h in s)n.deleteBuffer(s[h]);s={},r={}}return{bind:a,update:o,dispose:m}}const Nv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fn=null;function Uv(){return Fn===null&&(Fn=new Ap(Nv,16,16,cs,Qn),Fn.name="DFG_LUT",Fn.minFilter=ln,Fn.magFilter=ln,Fn.wrapS=di,Fn.wrapT=di,Fn.generateMipmaps=!1,Fn.needsUpdate=!0),Fn}class Fv{constructor(e={}){const{canvas:t=jh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:p=pn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const y=p,g=new Set([pc,hc,fc]),m=new Set([pn,Jn,Tr,Ws,dc,uc]),h=new Uint32Array(4),E=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let w=null,T=null;const _=[],x=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let C=!1,N=null,B=null,L=null,z=null;this._outputColorSpace=hn;let $=0,F=0,ne=null,X=-1,j=null;const te=new St,Se=new St;let Ue=null;const J=new Ge(0);let _e=0,be=t.width,Re=t.height,ve=1,Oe=null,Et=null;const Pe=new St(0,0,be,Re),ot=new St(0,0,be,Re);let ut=!1;const Ye=new Ar,kt=new vc;let At=!1,an=!1;const vt=new mt,Nn=new O,Nt=new St,vn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xn=!1;function Mn(){return ne===null?ve:1}let U=i;function Sn(b,I){return t.getContext(b,I)}let gt,_t,pe,Rt,Ce,De,A,S,G,ie,ee,oe,fe,K,Z,ce,D,Q,Y,de,re,le,we;try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oc}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",me,!1),U===null){const I="webgl2";if(U=Sn(I,b),U===null)throw Sn(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(b){throw t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",me,!1),rt("WebGLRenderer: "+b.message),b}function He(){gt=new kg(U),gt.init(),re=new wv(U,gt),_t=new Rg(U,gt,e,re),pe=new Ev(U,gt),_t.reversedDepthBuffer&&f&&pe.buffers.depth.setReversed(!0),B=U.createFramebuffer(),L=U.createFramebuffer(),z=U.createFramebuffer(),Rt=new Hg(U),Ce=new dv,De=new Tv(U,gt,pe,Ce,_t,re,Rt),A=new Bg(R),S=new Wp(U),le=new wg(U,S),G=new zg(U,S,Rt,le),ie=new Wg(U,G,S,le,Rt),Q=new Vg(U,_t,De),Z=new Cg(Ce),ee=new cv(R,A,gt,_t,le,Z),oe=new Dv(R,Ce),fe=new fv,K=new vv(gt),D=new Tg(R,A,pe,ie,v,l),ce=new yv(R,ie,_t),we=new Iv(U,Rt,_t,pe),Y=new Ag(U,gt,Rt),de=new Gg(U,gt,Rt),Rt.programs=ee.programs,R.capabilities=_t,R.extensions=gt,R.properties=Ce,R.renderLists=fe,R.shadowMap=ce,R.state=pe,R.info=Rt}y!==pn&&(P=new Xg(y,t.width,t.height,o,s,r));const se=new Pv(R,U);this.xr=se,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=gt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=gt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(b){b!==void 0&&(ve=b,this.setSize(be,Re,!1))},this.getSize=function(b){return b.set(be,Re)},this.setSize=function(b,I,W=!0){if(se.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}be=b,Re=I,t.width=Math.floor(b*ve),t.height=Math.floor(I*ve),W===!0&&(t.style.width=b+"px",t.style.height=I+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(be*ve,Re*ve).floor()},this.setDrawingBufferSize=function(b,I,W){be=b,Re=I,ve=W,t.width=Math.floor(b*W),t.height=Math.floor(I*W),this.setViewport(0,0,b,I)},this.setEffects=function(b){if(y===pn){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let I=0;I<b.length;I++)if(b[I].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(te)},this.getViewport=function(b){return b.copy(Pe)},this.setViewport=function(b,I,W,k){b.isVector4?Pe.set(b.x,b.y,b.z,b.w):Pe.set(b,I,W,k),pe.viewport(te.copy(Pe).multiplyScalar(Mn()).round())},this.getScissor=function(b){return b.copy(ot)},this.setScissor=function(b,I,W,k){b.isVector4?ot.set(b.x,b.y,b.z,b.w):ot.set(b,I,W,k),pe.scissor(Se.copy(ot).multiplyScalar(Mn()).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(b){pe.setScissorTest(ut=b)},this.setOpaqueSort=function(b){Oe=b},this.setTransparentSort=function(b){Et=b},this.getClearColor=function(b){return b.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(b=!0,I=!0,W=!0){let k=0;if(b){let H=!1;if(ne!==null){const he=ne.texture.format;H=g.has(he)}if(H){const he=ne.texture.type,Me=m.has(he),ue=D.getClearColor(),xe=D.getClearAlpha(),Te=ue.r,Fe=ue.g,Ke=ue.b;Me?(h[0]=Te,h[1]=Fe,h[2]=Ke,h[3]=xe,U.clearBufferuiv(U.COLOR,0,h)):(E[0]=Te,E[1]=Fe,E[2]=Ke,E[3]=xe,U.clearBufferiv(U.COLOR,0,E))}else k|=U.COLOR_BUFFER_BIT}I&&(k|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),N=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",me,!1),D.dispose(),fe.dispose(),K.dispose(),De.dispose(),Ce.dispose(),A.dispose(),ie.dispose(),G.dispose(),le.dispose(),we.dispose(),ee.dispose(),se.dispose(),se.removeEventListener("sessionstart",Ic),se.removeEventListener("sessionend",Nc),Wi.stop()};function Ae(b){b.preventDefault(),sd("WebGLRenderer: Context Lost."),C=!0}function ze(){sd("WebGLRenderer: Context Restored."),C=!1;const b=Rt.autoReset,I=ce.enabled,W=ce.autoUpdate,k=ce.needsUpdate,H=ce.type;He(),Rt.autoReset=b,ce.enabled=I,ce.autoUpdate=W,ce.needsUpdate=k,ce.type=H}function me(b){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function lt(b){const I=b.target;I.removeEventListener("dispose",lt),Ut(I)}function Ut(b){gi(b),Ce.remove(b)}function gi(b){const I=Ce.get(b).programs;I!==void 0&&(I.forEach(function(W){ee.releaseProgram(W)}),b.isShaderMaterial&&ee.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,W,k,H,he){I===null&&(I=vn);const Me=H.isMesh&&H.matrixWorld.determinantAffine()<0,ue=Ff(b,I,W,k,H);pe.setMaterial(k,Me);let xe=W.index,Te=1;if(k.wireframe===!0){if(xe=G.getWireframeAttribute(W),xe===void 0)return;Te=2}const Fe=W.drawRange,Ke=W.attributes.position;let ye=Fe.start*Te,Ze=(Fe.start+Fe.count)*Te;he!==null&&(ye=Math.max(ye,he.start*Te),Ze=Math.min(Ze,(he.start+he.count)*Te)),xe!==null?(ye=Math.max(ye,0),Ze=Math.min(Ze,xe.count)):Ke!=null&&(ye=Math.max(ye,0),Ze=Math.min(Ze,Ke.count));const Tt=Ze-ye;if(Tt<0||Tt===1/0)return;le.setup(H,k,ue,W,xe);let ht,ft=Y;if(xe!==null&&(ht=S.get(xe),ft=de,ft.setIndex(ht)),H.isMesh)k.wireframe===!0?(pe.setLineWidth(k.wireframeLinewidth*Mn()),ft.setMode(U.LINES)):ft.setMode(U.TRIANGLES);else if(H.isLine){let Xt=k.linewidth;Xt===void 0&&(Xt=1),pe.setLineWidth(Xt*Mn()),H.isLineSegments?ft.setMode(U.LINES):H.isLineLoop?ft.setMode(U.LINE_LOOP):ft.setMode(U.LINE_STRIP)}else H.isPoints?ft.setMode(U.POINTS):H.isSprite&&ft.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))ft.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Xt=H._multiDrawStarts,Ee=H._multiDrawCounts,jt=H._multiDrawCount,st=xe?S.get(xe).bytesPerElement:1,$i=Ce.get(k).currentProgram.getUniforms();for(let qt=0;qt<jt;qt++)$i.setValue(U,"_gl_DrawID",qt),ft.render(Xt[qt]/st,Ee[qt])}else if(H.isInstancedMesh)ft.renderInstances(ye,Tt,H.count);else if(W.isInstancedBufferGeometry){const Xt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ee=Math.min(W.instanceCount,Xt);ft.renderInstances(ye,Tt,Ee)}else ft.render(ye,Tt)};function Dc(b,I,W,k){N!==null&&b.isNodeMaterial&&N.setObject(k,b),At===!0&&Z.setState(b,W,!1),b.transparent===!0&&b.side===Hn&&b.forceSinglePass===!1?(b.side=cn,b.needsUpdate=!0,js(b,I,k),b.side=ls,b.needsUpdate=!0,js(b,I,k),b.side=Hn):js(b,I,k)}this.compile=function(b,I,W=null){W===null&&(W=b),N!==null&&N.renderStart(b,I,W),T=K.get(W),T.init(I),x.push(T),W.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),b!==W&&b.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights(),N!==null&&N.updateLights(T.state.lightsArray),an=this.localClippingEnabled,At=Z.init(this.clippingPlanes,an),At===!0&&Z.setGlobalState(this.clippingPlanes,I),N!==null&&ce.render(T.state.shadowsArray,W,I);const k=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const he=H.material;if(he)if(Array.isArray(he))for(let Me=0;Me<he.length;Me++){const ue=he[Me];Dc(ue,W,I,H),k.add(ue)}else Dc(he,W,I,H),k.add(he)}),T=x.pop(),N!==null&&N.renderEnd(),k},this.compileAsync=function(b,I,W=null){const k=this.compile(b,I,W);return new Promise(H=>{function he(){if(k.forEach(function(Me){const xe=Ce.get(Me).currentProgram;(xe===void 0||xe.isReady())&&k.delete(Me)}),k.size===0){H(b);return}setTimeout(he,10)}gt.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let eo=null;function Nf(b){eo&&eo(b)}function Ic(){Wi.stop()}function Nc(){Wi.start()}const Wi=new rf;Wi.setAnimationLoop(Nf),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(b){eo=b,se.setAnimationLoop(b),b===null?Wi.stop():Wi.start()},se.addEventListener("sessionstart",Ic),se.addEventListener("sessionend",Nc),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;N!==null&&N.renderStart(b,I);const W=se.enabled===!0&&se.isPresenting===!0,k=P!==null&&(ne===null||W)&&P.begin(R,ne);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(I),I=se.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,I,ne),T=K.get(b,x.length),T.init(I),T.state.textureUnits=De.getTextureUnits(),x.push(T),vt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?kt.setFromArrayCamera(I):Ye.setFromProjectionMatrix(vt,Ln,I.reversedDepth),an=this.localClippingEnabled,At=Z.init(this.clippingPlanes,an),w=fe.get(b,_.length),w.init(),_.push(w),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){const Me=R.xr.getDepthSensingMesh();Me!==null&&to(Me,I,-1/0,R.sortObjects)}to(b,I,0,R.sortObjects),w.finish(),N!==null&&N.updateLights(T.state.lightsArray),R.sortObjects===!0&&w.sort(Oe,Et),xn=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,xn&&D.addToRenderList(w,b),this.info.autoReset===!0&&this.info.reset(),At===!0&&Z.beginShadows();const H=T.state.shadowsArray;if(ce.render(H,b,I),At===!0&&Z.endShadows(),(k&&P.hasRenderPass())===!1){const Me=w.opaque,ue=w.transmissive;if(T.setupLights(),I.isArrayCamera){const xe=I.cameras;if(ue.length>0)for(let Te=0,Fe=xe.length;Te<Fe;Te++){const Ke=xe[Te];Fc(Me,ue,b,Ke)}xn&&D.render(b);for(let Te=0,Fe=xe.length;Te<Fe;Te++){const Ke=xe[Te];Uc(w,b,Ke,Ke.viewport)}}else ue.length>0&&Fc(Me,ue,b,I),xn&&D.render(b),Uc(w,b,I)}ne!==null&&F===0&&(De.updateMultisampleRenderTarget(ne),De.updateRenderTargetMipmap(ne)),k&&P.end(R),b.isScene===!0&&b.onAfterRender(R,b,I),le.resetDefaultState(),X=-1,j=null,x.pop(),x.length>0?(T=x[x.length-1],De.setTextureUnits(T.state.textureUnits),At===!0&&Z.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,N!==null&&N.renderEnd()};function to(b,I,W,k){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){const Me=I.isArrayCamera?kt:Ye;if(!b.frustumCulled||b.intersectsFrustum(Me)){k&&Nt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(vt);const ue=ie.update(b),xe=b.material;xe.visible&&w.push(b,ue,xe,W,Nt.z,null,I)}}else if(b.isMesh||b.isLine||b.isPoints){const Me=I.isArrayCamera?kt:Ye;if(!b.frustumCulled||b.intersectsFrustum(Me)){const ue=ie.update(b),xe=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Nt.copy(b.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Nt.copy(ue.boundingSphere.center)),Nt.applyMatrix4(b.matrixWorld).applyMatrix4(vt)),Array.isArray(xe)){const Te=ue.groups;for(let Fe=0,Ke=Te.length;Fe<Ke;Fe++){const ye=Te[Fe],Ze=xe[ye.materialIndex];Ze&&Ze.visible&&w.push(b,ue,Ze,W,Nt.z,ye,I)}}else xe.visible&&w.push(b,ue,xe,W,Nt.z,null,I)}}}const he=b.children;for(let Me=0,ue=he.length;Me<ue;Me++)to(he[Me],I,W,k)}function Uc(b,I,W,k){const{opaque:H,transmissive:he,transparent:Me}=b;T.setupLightsView(W),At===!0&&Z.setGlobalState(R.clippingPlanes,W),k&&pe.viewport(te.copy(k)),H.length>0&&Br(H,I,W),he.length>0&&Br(he,I,W),Me.length>0&&Br(Me,I,W),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Fc(b,I,W,k){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){const ye=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new $n(1,1,{generateMipmaps:!0,type:ye?Qn:pn,minFilter:Di,samples:Math.max(4,_t.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const he=T.state.transmissionRenderTarget[k.id],Me=k.viewport||te;he.setSize(Me.z*R.transmissionResolutionScale,Me.w*R.transmissionResolutionScale);const ue=R.getRenderTarget(),xe=R.getActiveCubeFace(),Te=R.getActiveMipmapLevel();R.setRenderTarget(he),R.getClearColor(J),_e=R.getClearAlpha(),_e<1&&R.setClearColor(16777215,.5),R.clear(),xn&&D.render(W);const Fe=R.toneMapping;R.toneMapping=fi;const Ke=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),At===!0&&Z.setGlobalState(R.clippingPlanes,k),Br(b,W,k),De.updateMultisampleRenderTarget(he),De.updateRenderTargetMipmap(he),gt.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Ze=0,Tt=I.length;Ze<Tt;Ze++){const ht=I[Ze],{object:ft,geometry:Xt,material:Ee,group:jt}=ht;if(Ee.side===Hn&&ft.layers.test(k.layers)){const st=Ee.side;Ee.side=cn,Ee.needsUpdate=!0,Oc(ft,W,k,Xt,Ee,jt),Ee.side=st,Ee.needsUpdate=!0,ye=!0}}ye===!0&&(De.updateMultisampleRenderTarget(he),De.updateRenderTargetMipmap(he))}R.setRenderTarget(ue,xe,Te),R.setClearColor(J,_e),Ke!==void 0&&(k.viewport=Ke),R.toneMapping=Fe}function Br(b,I,W){const k=I.isScene===!0?I.overrideMaterial:null;for(let H=0,he=b.length;H<he;H++){const Me=b[H],{object:ue,geometry:xe,group:Te}=Me;let Fe=Me.material;Fe.allowOverride===!0&&k!==null&&(Fe=k),ue.layers.test(W.layers)&&Oc(ue,I,W,xe,Fe,Te)}}function Oc(b,I,W,k,H,he){N!==null&&H.isNodeMaterial&&N.setObject(b,H),b.onBeforeRender(R,I,W,k,H,he),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(R,I,W,k,b,he),H.transparent===!0&&H.side===Hn&&H.forceSinglePass===!1?(H.side=cn,H.needsUpdate=!0,R.renderBufferDirect(W,I,k,H,b,he),H.side=ls,H.needsUpdate=!0,R.renderBufferDirect(W,I,k,H,b,he),H.side=Hn):R.renderBufferDirect(W,I,k,H,b,he),b.onAfterRender(R,I,W,k,H,he)}function Bc(b){let I=0;for(const W of b)W.texture!==null&&I++;return I}function js(b,I,W){I.isScene!==!0&&(I=vn);const k=Ce.get(b),H=T.state.lights,he=T.state.shadowsArray,Me=H.state.version,ue=ee.getParameters(b,H.state,he,I,W,T.state.lightProbeGridArray),xe=ee.getProgramCacheKey(ue);let Te=k.programs;k.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?I.environment:null,k.fog=I.fog;const Fe=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;k.envMap=A.get(b.envMap||k.environment,Fe),k.envMapRotation=k.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,Te===void 0&&(b.addEventListener("dispose",lt),Te=new Map,k.programs=Te,k.programVariants=new Map);let Ke=Te.get(xe);if(Ke!==void 0){if(k.currentProgram===Ke&&k.lightsStateVersion===Me)return zc(b,ue),Ke}else ue.uniforms=ee.getUniforms(b),N!==null&&b.isNodeMaterial&&N.build(b,W,ue),b.onBeforeCompile(ue,R),Ke=ee.acquireProgram(ue,xe),Te.set(xe,Ke),k.uniforms=ue.uniforms;const ye=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ye.clippingPlanes=Z.uniform),zc(b,ue),k.needsLights=Bf(b),k.lightsStateVersion=Me,k.needsLights&&(ye.ambientLightColor.value=H.state.ambient,ye.lightProbe.value=H.state.probe,ye.sunLights.value=H.state.sun,ye.sunLightShadows.value=H.state.sunShadow,ye.directionalLights.value=H.state.directional,ye.directionalLightShadows.value=H.state.directionalShadow,ye.spotLights.value=H.state.spot,ye.spotLightShadows.value=H.state.spotShadow,ye.rectAreaLights.value=H.state.rectArea,ye.ltc_1.value=H.state.rectAreaLTC1,ye.ltc_2.value=H.state.rectAreaLTC2,ye.pointLights.value=H.state.point,ye.pointLightShadows.value=H.state.pointShadow,ye.hemisphereLights.value=H.state.hemi,ye.sunShadowMatrix.value=H.state.sunShadowMatrix,ye.sunShadowCascade.value=H.state.sunShadowCascade,ye.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ye.spotLightMatrix.value=H.state.spotLightMatrix,ye.spotLightMap.value=H.state.spotLightMap,ye.pointShadowMatrix.value=H.state.pointShadowMatrix),k.numLightProbeGrids=Bc(T.state.lightProbeGridArray),k.currentProgram=Ke,k.uniformsList=null,Ke}function Uf(b,I,W,k,H){const he=Ce.get(b),Me=he.currentProgram.id+","+k+","+H;let ue=he.programVariants.get(Me);return ue===void 0?(ue=js(b,I,W),he.programVariants.set(Me,ue)):(he.currentProgram=ue,he.uniformsList=null,he.outputColorSpace=k,he.toneMapping=H),ue}function kc(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=ya.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function zc(b,I){const W=Ce.get(b);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.batchingColor=I.batchingColor,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function Ff(b,I,W,k,H){I.isScene!==!0&&(I=vn),De.resetTextureUnits();const he=I.fog,Me=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?I.environment:null,ue=ne===null?R.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Qe.workingColorSpace,xe=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Te=A.get(k.envMap||Me,xe),Fe=k.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ke=!!W.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),ye=!!W.morphAttributes.position,Ze=!!W.morphAttributes.normal,Tt=!!W.morphAttributes.color;let ht=fi;k.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ht=R.toneMapping);const ft=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Xt=ft!==void 0?ft.length:0,Ee=Ce.get(k),jt=T.state.lights;if(At===!0&&(an===!0||b!==j)){const xt=b===j&&k.id===X;Z.setState(k,b,xt)}let st=!1,$i=!1;k.version===Ee.__version?Ee.needsLights&&Ee.lightsStateVersion!==jt.state.version||H.isBatchedMesh&&Ee.batching===!1||!H.isBatchedMesh&&Ee.batching===!0||H.isBatchedMesh&&Ee.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Ee.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Ee.instancing===!1||!H.isInstancedMesh&&Ee.instancing===!0||H.isSkinnedMesh&&Ee.skinning===!1||!H.isSkinnedMesh&&Ee.skinning===!0||H.isInstancedMesh&&Ee.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ee.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ee.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ee.instancingMorph===!1&&H.morphTexture!==null||Ee.envMap!==Te||k.fog===!0&&Ee.fog!==he||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Z.numPlanes||Ee.numIntersection!==Z.numIntersection)||Ee.vertexAlphas!==Fe||Ee.vertexTangents!==Ke||Ee.morphTargets!==ye||Ee.morphNormals!==Ze||Ee.morphColors!==Tt||Ee.morphTargetsCount!==Xt||Ee.numLightProbeGrids!==Bc(T.state.lightProbeGridArray)?st=!0:(Ee.outputColorSpace!==ue||Ee.toneMapping!==ht)&&($i=!0):(st=!0,Ee.__version=k.version);let qt=Ee.currentProgram;(st===!0||$i===!0)&&(qt=$i===!0?Uf(k,I,H,ue,ht):js(k,I,H),N&&k.isNodeMaterial&&N.onUpdateProgram(k,qt,Ee));let kr=!1,_i=!1,Xi=!1;const tt=qt.getUniforms(),zt=Ee.uniforms;if(pe.useProgram(qt.program)&&(kr=!0,_i=!0,Xi=!0),k.id!==X&&(X=k.id,_i=!0),kr||j!==b){pe.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),tt.setValue(U,"projectionMatrix",b.projectionMatrix),tt.setValue(U,"viewMatrix",b.matrixWorldInverse);const Ft=tt.map.cameraPosition;Ft!==void 0&&Ft.setValue(U,Nn.setFromMatrixPosition(b.matrixWorld)),_t.logarithmicDepthBuffer&&tt.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&tt.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),j!==b&&(j=b,_i=!0,Xi=!0)}if(Ee.needsLights&&(jt.state.sunShadowMap.length>0&&tt.setValue(U,"sunShadowMap",jt.state.sunShadowMap,De),jt.state.directionalShadowMap.length>0&&tt.setValue(U,"directionalShadowMap",jt.state.directionalShadowMap,De),jt.state.spotShadowMap.length>0&&tt.setValue(U,"spotShadowMap",jt.state.spotShadowMap,De),jt.state.pointShadowMap.length>0&&tt.setValue(U,"pointShadowMap",jt.state.pointShadowMap,De)),H.isSkinnedMesh){tt.setOptional(U,H,"bindMatrix"),tt.setOptional(U,H,"bindMatrixInverse");const xt=H.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),tt.setValue(U,"boneTexture",xt.boneTexture,De))}H.isBatchedMesh&&(tt.setOptional(U,H,"batchingTexture"),tt.setValue(U,"batchingTexture",H._matricesTexture,De),tt.setOptional(U,H,"batchingIdTexture"),tt.setValue(U,"batchingIdTexture",H._indirectTexture,De),tt.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&tt.setValue(U,"batchingColorTexture",H._colorsTexture,De));const Tn=W.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&Q.update(H,W,qt),(_i||Ee.receiveShadow!==H.receiveShadow)&&(Ee.receiveShadow=H.receiveShadow,tt.setValue(U,"receiveShadow",H.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&I.environment!==null&&(zt.envMapIntensity.value=I.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=Uv()),_i){if(tt.setValue(U,"toneMappingExposure",R.toneMappingExposure),Ee.needsLights&&Of(zt,Xi),he&&k.fog===!0&&oe.refreshFogUniforms(zt,he),oe.refreshMaterialUniforms(zt,k,ve,Re,T.state.transmissionRenderTarget[b.id]),Ee.needsLights&&Ee.numLightProbeGrids>0){const xt=M;let Ft=0;for(const ti of T.state.lightProbeGridArray)ti.texture!==null&&(xt.textures[Ft]=ti.texture,xt.min[Ft]=ti.boundingBox.min,xt.max[Ft]=ti.boundingBox.max,xt.resolution[Ft]=ti.resolution,Ft++);for(const ti in xt)xt[ti].length=Ft;zt.probesSH.value=xt.textures,zt.probesMin.value=xt.min,zt.probesMax.value=xt.max,zt.probesResolution.value=xt.resolution}ya.upload(U,kc(Ee),zt,De)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ya.upload(U,kc(Ee),zt,De),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&tt.setValue(U,"center",H.center),tt.setValue(U,"modelViewMatrix",H.modelViewMatrix),tt.setValue(U,"normalMatrix",H.normalMatrix),tt.setValue(U,"modelMatrix",H.matrixWorld),k.uniformsGroups!==void 0){const xt=k.uniformsGroups;for(let Ft=0,ti=xt.length;Ft<ti;Ft++){const Hc=xt[Ft];we.update(Hc,qt),we.bind(Hc,qt)}}return qt}function Of(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.sunLights.needsUpdate=I,b.sunLightShadows.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function Bf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(b,I,W){const k=Ce.get(b);k.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Ce.get(b.texture).__webglTexture=I,Ce.get(b.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:W,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,I){const W=Ce.get(b);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,W=0){ne=b,$=I,F=W;let k=null,H=!1,he=!1;if(b){const ue=Ce.get(b);if(ue.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(U.FRAMEBUFFER,ue.__webglFramebuffer),te.copy(b.viewport),Se.copy(b.scissor),Ue=b.scissorTest,pe.viewport(te),pe.scissor(Se),pe.setScissorTest(Ue),X=-1;return}else if(ue.__webglFramebuffer===void 0)De.setupRenderTarget(b);else if(ue.__hasExternalTextures)De.rebindTextures(b,Ce.get(b.texture).__webglTexture,Ce.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Fe=b.depthTexture;if(ue.__boundDepthTexture!==Fe){if(Fe!==null&&Ce.has(Fe)&&(b.width!==Fe.image.width||b.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(b)}}const xe=b.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(he=!0);const Te=Ce.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Te[I])?k=Te[I][W]:k=Te[I],H=!0):b.samples>0&&De.useMultisampledRTT(b)===!1?k=Ce.get(b).__webglMultisampledFramebuffer:Array.isArray(Te)?k=Te[W]:k=Te,te.copy(b.viewport),Se.copy(b.scissor),Ue=b.scissorTest}else te.copy(Pe).multiplyScalar(ve).floor(),Se.copy(ot).multiplyScalar(ve).floor(),Ue=ut;if(W!==0&&(k=B),pe.bindFramebuffer(U.FRAMEBUFFER,k)&&pe.drawBuffers(b,k),pe.viewport(te),pe.scissor(Se),pe.setScissorTest(Ue),H){const ue=Ce.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,ue.__webglTexture,W)}else if(he){const ue=I;for(let xe=0;xe<b.textures.length;xe++){const Te=Ce.get(b.textures[xe]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+xe,Te.__webglTexture,W,ue)}}else if(b!==null&&W!==0){const ue=Ce.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ue.__webglTexture,W)}X=-1};function Gc(b){const I=Ce.get(b);return(I.__readFormat!==b.format||I.__readType!==b.type)&&(I.__readFormat=b.format,I.__readType=b.type,I.__formatReadable=_t.textureFormatReadable(b.format),I.__typeReadable=_t.textureTypeReadable(b.type)),I}this.readRenderTargetPixels=function(b,I,W,k,H,he,Me,ue=0){if(!(b&&b.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(xe=xe[Me],Array.isArray(xe)&&(xe=xe[0])),xe){pe.bindFramebuffer(U.FRAMEBUFFER,xe);try{const Te=b.textures[ue],Fe=Te.format,Ke=Te.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ue);const ye=Gc(Te);if(ye.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ye.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-k&&W>=0&&W<=b.height-H&&U.readPixels(I,W,k,H,re.convert(Fe),re.convert(Ke),he)}finally{const Te=ne!==null?Ce.get(ne).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(b,I,W,k,H,he,Me,ue=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(xe=xe[Me],Array.isArray(xe)&&(xe=xe[0])),xe)if(I>=0&&I<=b.width-k&&W>=0&&W<=b.height-H){pe.bindFramebuffer(U.FRAMEBUFFER,xe);const Te=b.textures[ue],Fe=Te.format,Ke=Te.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ue);const ye=Gc(Te);if(ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ze),U.bufferData(U.PIXEL_PACK_BUFFER,he.byteLength,U.STREAM_READ),U.readPixels(I,W,k,H,re.convert(Fe),re.convert(Ke),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const Tt=ne!==null?Ce.get(ne).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,Tt);const ht=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await ep(U,ht,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ze),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,he),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Ze),U.deleteSync(ht),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,I=null,W=0){const k=Math.pow(2,-W),H=Math.floor(b.image.width*k),he=Math.floor(b.image.height*k),Me=I!==null?I.x:0,ue=I!==null?I.y:0;De.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,Me,ue,H,he),pe.unbindTexture()},this.copyTextureToTexture=function(b,I,W=null,k=null,H=0,he=0){let Me,ue,xe,Te,Fe,Ke,ye,Ze,Tt;const ht=b.isCompressedTexture?b.mipmaps[he]:b.image;if(W!==null)Me=W.max.x-W.min.x,ue=W.max.y-W.min.y,xe=W.isBox3?W.max.z-W.min.z:1,Te=W.min.x,Fe=W.min.y,Ke=W.isBox3?W.min.z:0;else{const tt=Math.pow(2,-H);Me=Math.floor(ht.width*tt),ue=Math.floor(ht.height*tt),b.isDataArrayTexture?xe=ht.depth:b.isData3DTexture?xe=Math.floor(ht.depth*tt):xe=1,Te=0,Fe=0,Ke=0}k!==null?(ye=k.x,Ze=k.y,Tt=k.z):(ye=0,Ze=0,Tt=0);const ft=re.convert(I.format),Xt=re.convert(I.type);let Ee;I.isData3DTexture?(De.setTexture3D(I,0),Ee=U.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(De.setTexture2DArray(I,0),Ee=U.TEXTURE_2D_ARRAY):(De.setTexture2D(I,0),Ee=U.TEXTURE_2D),pe.activeTexture(U.TEXTURE0),pe.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,I.flipY),pe.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),pe.pixelStorei(U.UNPACK_ALIGNMENT,I.unpackAlignment);const jt=pe.getParameter(U.UNPACK_ROW_LENGTH),st=pe.getParameter(U.UNPACK_IMAGE_HEIGHT),$i=pe.getParameter(U.UNPACK_SKIP_PIXELS),qt=pe.getParameter(U.UNPACK_SKIP_ROWS),kr=pe.getParameter(U.UNPACK_SKIP_IMAGES);pe.pixelStorei(U.UNPACK_ROW_LENGTH,ht.width),pe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ht.height),pe.pixelStorei(U.UNPACK_SKIP_PIXELS,Te),pe.pixelStorei(U.UNPACK_SKIP_ROWS,Fe),pe.pixelStorei(U.UNPACK_SKIP_IMAGES,Ke);const _i=b.isDataArrayTexture||b.isData3DTexture,Xi=I.isDataArrayTexture||I.isData3DTexture;if(b.isDepthTexture){const tt=Ce.get(b),zt=Ce.get(I),Tn=Ce.get(tt.__renderTarget),xt=Ce.get(zt.__renderTarget);pe.bindFramebuffer(U.READ_FRAMEBUFFER,Tn.__webglFramebuffer),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Ft=0;Ft<xe;Ft++)_i&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ce.get(b).__webglTexture,H,Ke+Ft),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ce.get(I).__webglTexture,he,Tt+Ft)),U.blitFramebuffer(Te,Fe,Te+Me,Fe+ue,ye,Ze,ye+Me,Ze+ue,U.DEPTH_BUFFER_BIT,U.NEAREST);pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||Ce.has(b)){const tt=Ce.get(b),zt=Ce.get(I);pe.bindFramebuffer(U.READ_FRAMEBUFFER,L),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,z);for(let Tn=0;Tn<xe;Tn++)_i?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,tt.__webglTexture,H,Ke+Tn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,tt.__webglTexture,H),Xi?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,zt.__webglTexture,he,Tt+Tn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,zt.__webglTexture,he),H!==0?U.blitFramebuffer(Te,Fe,Te+Me,Fe+ue,ye,Ze,ye+Me,Ze+ue,U.COLOR_BUFFER_BIT,U.NEAREST):Xi?U.copyTexSubImage3D(Ee,he,ye,Ze,Tt+Tn,Te,Fe,Me,ue):U.copyTexSubImage2D(Ee,he,ye,Ze,Te,Fe,Me,ue);pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Xi?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Ee,he,ye,Ze,Tt,Me,ue,xe,ft,Xt,ht.data):I.isCompressedArrayTexture?U.compressedTexSubImage3D(Ee,he,ye,Ze,Tt,Me,ue,xe,ft,ht.data):U.texSubImage3D(Ee,he,ye,Ze,Tt,Me,ue,xe,ft,Xt,ht):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,he,ye,Ze,Me,ue,ft,Xt,ht.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,he,ye,Ze,ht.width,ht.height,ft,ht.data):U.texSubImage2D(U.TEXTURE_2D,he,ye,Ze,Me,ue,ft,Xt,ht);pe.pixelStorei(U.UNPACK_ROW_LENGTH,jt),pe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,st),pe.pixelStorei(U.UNPACK_SKIP_PIXELS,$i),pe.pixelStorei(U.UNPACK_SKIP_ROWS,qt),pe.pixelStorei(U.UNPACK_SKIP_IMAGES,kr),he===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&U.generateMipmap(Ee),pe.unbindTexture()},this.initRenderTarget=function(b){Ce.get(b).__webglFramebuffer===void 0&&De.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?De.setTextureCube(b,0):b.isData3DTexture?De.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?De.setTexture2DArray(b,0):De.setTexture2D(b,0),pe.unbindTexture()},this.resetState=function(){$=0,F=0,ne=null,pe.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}const Rs=[],Nl=52*Math.PI/180,gf=30,Bi=Math.sin(Nl),_f="#8f95a6",ks="#56617c",nn="#f1ead9",Ci="#1d2335",vf="#e6dcc6",Ei="#e8bd55",yn=n=>n.citadel?5:n.kind==="station"?3.3:[2.7,3.5,4.5][n.size],Ov=n=>{const e=yn(n);return n.kind==="planet"?e*2.5:e*.5+e*(n.citadel?3.4:1.5)},Ls=n=>{const e=yn(n);return n.kind==="planet"?e*1.5:e*.5+e*.55},Bv=4.2,Ul=[["#d9c7a0","#b09a74","#efe2c2"],["#93a5b3","#6c7e8e","#b9c7d0"],["#93b08c","#6d8b69","#b7ceac"],["#cc9379","#a56e58","#e3b7a2"],["#cfdcdf","#a2b5ba","#eef5f5"]],Fa={gen:"#e3c565",mine:"#a8835a",lab:"#7fb2dc",slab:"#7fb2dc",shield:"#bfe3ff",relay:"#cbb2e6",bastion:"#8d93a6",turret:"#6d7385",screen:"#bfe3ff",sensor:"#f1ead9",barracks:"#dd7a63",shipyard:"#e3c565",dock:"#b8ad96"};function Ni(n,e){if(e.owner===V||n.vis[e.id]===2)return{tier:"live",owner:e.owner,drones:e.drones};const t=n.intel[e.id];return t.snap?{tier:"stale",owner:t.snap.owner,drones:t.snap.drones}:t.seen>=1?{tier:"detected",owner:-1,drones:0}:{tier:"hidden",owner:-1,drones:0}}let ur=null,mn,Ti,ji=null,fr,Ea,Fl=0,jd=-1,Ds,gr,_r,Pi=null,Ol="";const Is=new Map,wi=new Map,on=320,Ns=.5;let Bl=0,kl=0;const Oo=new O,$e=(n,e=0)=>{const t=new Ge(n);return e&&t.lerp(new Ge(ks),e),new Mc({color:t,flatShading:!0})},Xn=(n,e=1)=>new La({color:n,transparent:e<1,opacity:e,depthWrite:e>=1});function li(n){n.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(s=>s.dispose()):i&&i.dispose()}),n.removeFromParent()}function Oa(n,e,t,i,s=0,r=Math.PI*2,a=1){const o=new Bt(new xc(n,e,48,1,s,r),Xn(t,a));return o.rotation.x=-Math.PI/2,o.position.y=i,o}const Be=(n,e,t=0,i=0,s=0)=>{const r=new Bt(n,e);return r.position.set(t,i,s),r};function kv(){const n=document.getElementById("gl");ur=new Fv({canvas:n,antialias:!0}),mn=new xp,mn.background=new Ge("#2a3350"),Ti=new Cn(gf,1,1,4e3),mn.add(new Bp("#fff4e0","#3d4668",1.5));const e=new Gp("#fff0d8",2.2);e.position.set(-.7,1,.45),mn.add(e);const t=[];for(let s=0;s<96;s++)t.push(new O(Math.cos(s/96*Math.PI*2),0,Math.sin(s/96*Math.PI*2)));const i=new $t().setFromPoints(t);Ds=new bd(i,new Pl({color:nn,transparent:!0,opacity:.55})),gr=new bd(i,new Pl({color:nn,transparent:!0,opacity:.22})),_r=Oa(1,1.1,nn,.12),mn.add(Ds,gr,_r)}function zv(n){for(const u of Is.values())li(u.grp);for(const u of wi.values())li(u.grp);Is.clear(),wi.clear(),Pi&&(li(Pi),Pi=null,Ol="");for(const u of mn.children.filter(f=>f.userData.world))li(u);let e=n.seed|0;const t=()=>{e=e+1831565813|0;let u=e;return u=Math.imul(u^u>>>15,u|1),u^=u+Math.imul(u^u>>>7,u|61),((u^u>>>14)>>>0)/4294967296},i=[];for(let u=0;u<1400;u++)i.push(t()*(n.w+1600)-800,-150-t()*500,t()*(n.h+1600)-800);const s=new $t;s.setAttribute("position",new at(i,3));const r=new Pp(s,new Zu({color:nn,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:.8}));r.userData.world=!0,mn.add(r);const a=["#5f7fa8","#8a6fa0","#b9786a","#5f9c94","#a88f6a"],o=document.createElement("canvas");o.width=o.height=128;const l=o.getContext("2d"),c=l.createRadialGradient(64,64,0,64,64,64);c.addColorStop(0,"rgba(255,255,255,1)"),c.addColorStop(.5,"rgba(255,255,255,0.45)"),c.addColorStop(1,"rgba(255,255,255,0)"),l.fillStyle=c,l.fillRect(0,0,128,128);const d=new Td(o);for(let u=0;u<18;u++){const f=140+t()*260,p=new Bt(new Xs(f*2,f*2),new La({map:d,color:a[Math.floor(t()*a.length)],transparent:!0,opacity:.3,depthWrite:!1}));p.rotation.x=-Math.PI/2,p.position.set(t()*(n.w+600)-300,-220-t()*200,t()*(n.h+600)-300),p.userData.world=!0,mn.add(p)}fr=document.createElement("canvas"),fr.width=Math.round((n.w+on*2)*Ns),fr.height=Math.round((n.h+on*2)*Ns),Ea=new Td(fr),Ea.colorSpace=hn,ji=new Bt(new Xs(n.w+on*2,n.h+on*2),new La({map:Ea,transparent:!0,depthWrite:!1})),ji.rotation.x=-Math.PI/2,ji.position.set(n.w/2,-.2,n.h/2),ji.userData.world=!0,ji.renderOrder=-1,mn.add(ji),Fl=0}function Li(n,e){const t=parseInt(n.slice(1),16);return`rgba(${t>>16&255},${t>>8&255},${t&255},${e})`}function bc(n,e){const t=parseInt(n.slice(1),16),i=s=>Math.max(0,Math.min(255,Math.round(s*e)));return`rgb(${i(t>>16&255)},${i(t>>8&255)},${i(t&255)})`}const Bo=(n,e)=>{let t=n*374761393+e*668265263|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296};function Gv(n,e){const t=fr.getContext("2d");t.setTransform(Ns,0,0,Ns,on*Ns,on*Ns),t.globalCompositeOperation="source-over",t.clearRect(-on,-on,n.w+on*2,n.h+on*2),t.fillStyle="rgba(86,97,128,0.8)",t.fillRect(-on,-on,n.w+on*2,n.h+on*2),t.globalCompositeOperation="destination-out";const i=n.nodes.filter(o=>o.owner===V).map(o=>({x:o.x,y:o.y,r:Va(n,o)}));for(const o of n.ships)o.owner===V&&!o.lane&&i.push({x:o.x,y:o.y,r:ql(n,o)});for(const o of i){const[l,c]=o.r;let d=t.createRadialGradient(o.x,o.y,c*.8,o.x,o.y,c);d.addColorStop(0,"rgba(0,0,0,0.5)"),d.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=d,t.beginPath(),t.arc(o.x,o.y,c,0,7),t.fill(),d=t.createRadialGradient(o.x,o.y,l*.82,o.x,o.y,l),d.addColorStop(0,"rgba(0,0,0,1)"),d.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=d,t.beginPath(),t.arc(o.x,o.y,l,0,7),t.fill()}t.globalCompositeOperation="source-over";const s=n.nodes.map(o=>({n:o,k:Ni(n,o)})).filter(o=>o.k.tier!=="hidden"&&o.k.tier!=="detected"&&o.k.owner!==0),r=(o,l,c,d,u)=>{const f=t.createRadialGradient(o,l,0,o,l,c);f.addColorStop(0,Li(d,u)),f.addColorStop(.55,Li(d,u*.55)),f.addColorStop(1,Li(d,0)),t.fillStyle=f,t.beginPath(),t.arc(o,l,c,0,7),t.fill()},a=e/1e3;for(const{n:o,k:l}of s){const c=Gn(n,l.owner);for(let d=0;d<7;d++){const u=Bo(o.id,d)*Math.PI*2+a*.05*(d%2?1:-1),f=6+Bo(d,o.id)*20;r(o.x+Math.cos(u)*f,o.y+Math.sin(u)*f*.8,16+Bo(o.id+7,d)*16,c,.13)}}for(let o=0;o<s.length;o++)for(let l=o+1;l<s.length;l++){const c=s[o],d=s[l];if(c.k.owner!==d.k.owner)continue;const u=d.n.x-c.n.x,f=d.n.y-c.n.y,p=Math.hypot(u,f);if(p>115)continue;const v=Gn(n,c.k.owner),y=Math.floor(p/16);for(let g=1;g<y;g++){const m=g/y,h=Math.sin(a*.3+g+c.n.id)*4;r(c.n.x+u*m-f/p*h,c.n.y+f*m+u/p*h,15,v,.07)}}Ea.needsUpdate=!0}function Hv(n,e,t){const i=new Ur(e,1).toNonIndexed(),[s,r,a]=Ul[n.id%Ul.length].map(u=>{const f=new Ge(u);return t&&f.lerp(new Ge(ks),t),f}),o=i.getAttribute("position"),l=[],c=.05+n.id%3*.12;for(let u=0;u<o.count;u+=3){const f=(o.getY(u)+o.getY(u+1)+o.getY(u+2))/3/e,p=f>.62?a:Math.abs(f-c)<.14||n.size>0&&Math.abs(f+.42)<.1?r:s;for(let v=0;v<3;v++)l.push(p.r,p.g,p.b)}i.setAttribute("color",new at(l,3));const d=new Bt(i,new Mc({vertexColors:!0,flatShading:!0}));return d.rotation.z=.25,d}function or(n,e,t){const i=new Dn,s=Fa[n]||"#999";if(n==="gen")i.add(Be(new Pt(.6,.7,1.2,6),$e(s,e),0,.6),Be(new Pt(.25,.25,.6,6),$e("#4b5063",e),0,1.5),Be(new Oi(.62,.1,4,12),$e("#4b5063",e),0,.9)),i.children[2].rotation.x=Math.PI/2;else if(n==="mine")i.add(Be(new Ht(1,.4,1),$e("#6f6355",e),0,.2),Be(new Fi(.55,2.1,4),$e(s,e),0,1.4),Be(new Ht(.2,.2,1.4),$e("#4b5063",e),0,2.2));else if(n==="lab"||n==="slab"){if(i.add(Be(new Pt(.5,.6,2,6),$e(s,e),0,1),Be(new Na(.58,8,4,0,Math.PI*2,0,Math.PI/2),$e(nn,e),0,2)),t){const r=Be(new Rr(.42),Xn("#9fe0ff"),0,3);r.name="orb",i.add(r)}}else if(n==="shield")i.add(Be(new Na(1,10,5,0,Math.PI*2,0,Math.PI/2),new Mc({color:s,transparent:!0,opacity:.75,flatShading:!0})));else if(n==="relay")i.add(Be(new Pt(.1,.16,2.8,4),$e(nn,e),0,1.4),Be(new Oi(.5,.08,4,12),$e(s,e),0,2.4),Be(new Oi(.32,.08,4,12),$e(s,e),0,1.8));else if(n==="bastion"){i.add(Be(new Ht(1.8,1.2,.9),$e(s,e),0,.6));for(let r=-1;r<=1;r++)i.add(Be(new Ht(.4,.4,.9),$e(s,e),r*.7,1.4))}else if(n==="barracks")i.add(Be(new Ht(1.6,.9,1),$e(s,e),0,.45),Be(new Fi(.75,.6,4),$e(bc(s,.75),e),0,1.2)),i.children[1].rotation.y=Math.PI/4;else if(n==="shipyard"){for(const r of[-.8,.8])i.add(Be(new Ht(.2,2,.2),$e(s,e),r,1));i.add(Be(new Ht(1.9,.22,.3),$e(s,e),0,2))}else if(n==="sensor"){const r=Be(new Fi(.7,.45,10,1,!0),$e(s,e),0,1.4);r.rotation.x=Math.PI*.8,i.add(Be(new Pt(.08,.08,1.2,4),$e("#4b5063",e),0,.6),r)}return i}const Vv=["lab","gen","mine","shield","relay","bastion"],xf=[150,30,210,-30].map(n=>n*Math.PI/180);function Wv(n,e){const t=yn(n);if(n.kind==="planet"){const s=Math.PI*(.92+.13*Math.ceil(e/2)*(e%2?1:-1));return{x:Math.cos(s)*(t*2.1+2.2),y:.7,z:Math.sin(s)*(t*2.1+2.2),a:s}}const i=xf[e%4];return{x:Math.cos(i)*t*2.25,y:t*.5+t*.55+.55,z:Math.sin(i)*t*2.25,a:i}}function Mf(n,e,t=1){const i=new Dn;if(i.add(Be(new Pt(1,1.1,.35,6),$e("#e6dcc6"),0,.17)),i.add(Be(new Fi(.95,2.3,7),$e(n),0,.35+1.15)),i.add(Be(new Pt(.98,.98,.18,7),$e(bc(n,.7)),0,.55)),i.add(Be(new Ur(.72,0),$e(n),0,.35+2.3+.35)),e){const s=Be(new Pt(.55,.42,.45,5,1,!0),$e(Ei),0,3.7);s.material.side=Hn,i.add(s)}return i.scale.setScalar(t),i}function $v(n,e,t,i,s){const r=new Dn,a=yn(e),o=t==="detected",l=t==="stale"?.35:0,c=o?ks:i===0?_f:Gn(n,i);let d=null;const u=new Bt(new Ka(a*1.05,24),Xn("#0c101e",.4));if(u.rotation.x=-Math.PI/2,u.position.y=.02,r.add(u),o){const p=e.kind==="planet"?new Bt(new Ur(a,1),Xn(ks,.9)):new Bt(new Pt(a,a,a*1.1,6),Xn(ks,.9));return p.position.y=Ls(e),r.add(p),{grp:r,spin:d,orb:null}}if(i!==0&&r.add(Oa(a*1.45,a*1.62,c,.06,0,Math.PI*2,l?.5:1)),e.kind==="planet"){const p=Hv(e,a,l);if(p.position.y=a*1.5,r.add(p),d=p,e.size===2){const m=new Bt(new Oi(a*1.55,a*.09,4,28),$e(Ul[e.id%5][2],l));m.rotation.x=Math.PI/2-.3,m.rotation.y=.2,m.position.y=a*1.5,r.add(m)}const v=[];for(const m of Vv)for(let h=0;h<Math.min(4,e.b[m]||0);h++)v.push(m);const y=Math.min(Math.PI*1.3,v.length*.5),g=a*1.25+1.6;v.forEach((m,h)=>{const E=-Math.PI/2+(v.length>1?-y/2+y*h/(v.length-1):0),M=or(m,l,s&&m==="lab");M.position.set(Math.cos(E)*g,0,Math.sin(E)*g*.9),r.add(M)})}else{const p=a*.5,v=a*1.1,y=e.citadel?"#57526f":vf;r.add(Be(new Pt(a,a*.92,v,6),$e(y,l),0,p+v/2)),r.add(Be(new Pt(a*.92,a*.35,a*.45,6),$e(e.citadel?"#413d57":"#b8ad96",l),0,p-a*.22)),r.add(Be(new Pt(a*.5,a*.68,a*.4,6),$e(c,l),0,p+v+a*.2));const g=p+v;if(e.citadel){r.add(Be(new Fi(a*.3,a*1.9,6),$e(c,l),0,g+a*1.35));const h=Be(new Oi(a*1.6,a*.07,4,32),$e(c,l),0,p+v*.6);h.rotation.x=Math.PI/2,r.add(h),d=h}else(e.home||e.capital)&&r.add(Be(new Pt(a*.07,a*.07,a*.9,4),$e(nn,l),0,g+a*.8));const m=Math.min(4,br(e));for(let h=0;h<m;h++){const E=xf[h],M=a*1.25,w=Be(new Ht(M,a*.14,a*.3),$e("#b8ad96",l),Math.cos(E)*(a*.9+M/2),p+v/2,Math.sin(E)*(a*.9+M/2));w.rotation.y=-E,r.add(w),r.add(Be(new Pt(a*.42,a*.42,a*.1,6),$e(c,l),Math.cos(E)*a*2.25,p+v/2+a*.05,Math.sin(E)*a*2.25))}for(let h=0;h<Math.min(3,e.b.turret||0);h++){const E=Math.PI/2+(h-1)*1.05,M=Math.cos(E)*a*.8,w=Math.sin(E)*a*.8;r.add(Be(new Ht(.8,.8,.8),$e(Fa.turret,l),M,g+.4,w)),r.add(Be(new Ht(.22,.22,1.3),$e("#4b5063",l),M,g+.55,w+.7))}if(e.b.slab){const h=or("slab",l,s);h.position.set(-a*.35,g+a*.3,-a*.35),h.scale.setScalar(.9),r.add(h)}if(e.b.sensor){const h=or("sensor",l,!1);h.position.set(a*.4,g,-a*.4),r.add(h)}if(e.b.barracks){const h=or("barracks",l,!1);h.position.set(-a*.75,p+v*.35,-a*1.25),r.add(h)}if(e.b.shipyard){const h=or("shipyard",l,!1);h.position.set(a*.8,p+v*.2,-a*1.3),r.add(h)}if(e.b.screen){const h=Be(new Oi(a*1.2,a*.07,4,24),$e(Fa.screen,l),0,p+v*.2);h.rotation.x=Math.PI/2,r.add(h)}}const f=r.getObjectByName("orb")||null;return{grp:r,spin:d,orb:f}}function Xv(n,e,t){const i=new Dn,s=new Dn;if(t)s.add(Be(new Rr(.9),Xn(n)),Be(new Rr(1.4),Xn(n,.3)));else{const a=new Bt(new Fi(.55,2.6,4),$e(vf));a.rotation.z=-Math.PI/2,a.scale.set(1,1,1.5),s.add(a,Be(new Ht(.9,.12,2.6),$e(n),-.6),Be(new Ht(.7,.7,.12),$e(n),-.9,.4)),e.forEach((o,l)=>{const c=Mf(o,o===Ei,.34);c.position.set(-.2-l*.55,.1,(l%2?-1:1)*.55*(l?1:0)),s.add(c)}),s.scale.setScalar(1.35)}s.name="model";const r=new Bt(new Ka(1.2,12),Xn("#0c101e",.35));return r.rotation.x=-Math.PI/2,r.name="shadow",i.add(s,r),i}function Ct(n,e,t=0){return Oo.set(n,t,e).project(Ti),{x:(Oo.x*.5+.5)*Bl,y:(-Oo.y*.5+.5)*kl}}function qv(n){return Ct(n.x,n.y,Ls(n))}function eu(n,e,t,i,s,r,a,o,l){n.font=`800 ${r?13:12}px system-ui`;const c=Math.max(r?30:24,n.measureText(s).width+12),d=r?18:16,u=d+8;n.strokeStyle=nn,n.lineWidth=2,n.lineCap="round",n.beginPath(),n.moveTo(e,t),n.lineTo(e,t-u),n.stroke();const f=Math.sin(o/420+l)*1.6,p=t-u;n.globalAlpha=a?.6:1,n.fillStyle=i,n.beginPath(),n.moveTo(e+1,p),n.lineTo(e+c,p+f),n.lineTo(e+c-5,p+d/2+f),n.lineTo(e+c,p+d+f),n.lineTo(e+1,p+d),n.closePath(),n.fill(),n.fillStyle=bc(i,.78),n.fillRect(e+1,p+d-3,c-4,3),n.fillStyle=Ci,n.textAlign="center",n.textBaseline="middle",n.fillText(s,e+c/2-1,p+d/2-.5+f/2),n.globalAlpha=1}function Yv(n,e,t,i){switch(n.save(),n.translate(t,i),n.fillStyle=Ci,n.strokeStyle=Ci,n.lineWidth=1.6,n.lineJoin="round",n.lineCap="round",n.beginPath(),e){case"mine":n.moveTo(-6,5),n.lineTo(-1,-5),n.lineTo(2,0),n.lineTo(4,-2),n.lineTo(7,5),n.closePath(),n.fill();break;case"gen":n.moveTo(1,-6),n.lineTo(-4,1),n.lineTo(0,1),n.lineTo(-1,6),n.lineTo(4,-1),n.lineTo(0,-1),n.closePath(),n.fill();break;case"lab":case"slab":n.moveTo(-2,-6),n.lineTo(2,-6),n.moveTo(-1.5,-6),n.lineTo(-1.5,-1),n.lineTo(-5,5),n.lineTo(5,5),n.lineTo(1.5,-1),n.lineTo(1.5,-6),n.stroke(),n.beginPath(),n.moveTo(-3.5,2.5),n.lineTo(3.5,2.5),n.lineTo(5,5),n.lineTo(-5,5),n.fill();break;case"shield":case"screen":n.moveTo(0,-6),n.lineTo(5,-4),n.lineTo(4,2),n.lineTo(0,6),n.lineTo(-4,2),n.lineTo(-5,-4),n.closePath(),e==="shield"?n.fill():n.stroke();break;case"turret":n.arc(-1,1,3.5,0,7),n.fill(),n.beginPath(),n.moveTo(1,-1),n.lineTo(6,-5),n.stroke();break;case"bastion":n.moveTo(-6,5),n.lineTo(-6,-4),n.lineTo(-3,-4),n.lineTo(-3,-1),n.lineTo(-1,-1),n.lineTo(-1,-4),n.lineTo(1,-4),n.lineTo(1,-1),n.lineTo(3,-1),n.lineTo(3,-4),n.lineTo(6,-4),n.lineTo(6,5),n.closePath(),n.fill();break;case"sensor":n.arc(0,-1,5,Math.PI*.15,Math.PI*.85),n.stroke(),n.beginPath(),n.moveTo(0,-1),n.lineTo(0,6),n.stroke();break;case"relay":n.moveTo(0,6),n.lineTo(0,-3),n.stroke(),n.beginPath(),n.arc(0,-3,3,Math.PI*1.15,Math.PI*1.85),n.stroke(),n.beginPath(),n.arc(0,-3,6,Math.PI*1.2,Math.PI*1.8),n.stroke();break;case"barracks":n.moveTo(-5,0),n.lineTo(0,-4),n.lineTo(5,0),n.moveTo(-5,5),n.lineTo(0,1),n.lineTo(5,5),n.stroke();break;case"shipyard":n.moveTo(6,0),n.lineTo(-4,-5),n.lineTo(-2,0),n.lineTo(-4,5),n.closePath(),n.fill();break;case"dock":n.moveTo(-5,-4),n.lineTo(-5,4),n.lineTo(5,4),n.lineTo(5,-4),n.stroke();break}n.restore()}const Kv=["lab","slab","gen","mine","shield","relay","bastion","turret","screen","sensor","barracks","shipyard","dock"];function Zv(n,e,t,i){ur||kv();const{cam:s,w:r,h:a}=t,o=s.z;(jd!==e.seed||!ji)&&(zv(e),jd=e.seed),(Bl!==r||kl!==a)&&(Bl=r,kl=a,ur.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),ur.setSize(r,a,!1),Ti.aspect=r/a,Ti.updateProjectionMatrix());const l=a/(o*2*Math.tan(gf*Math.PI/360));Ti.position.set(s.x,l*Math.sin(Nl),s.y+l*Math.cos(Nl)),Ti.lookAt(s.x,0,s.y),Ti.updateMatrixWorld(),i-Fl>350&&(Fl=i,Gv(e,i)),Rs.length=0;for(const h of e.nodes){const E=Ni(e,h),M=Is.get(h.id);if(E.tier==="hidden"){M&&(li(M.grp),Is.delete(h.id));continue}const w=E.tier==="live",T=w?h.b:e.intel[h.id].snap?.b||{},_=w&&h.kind==="planet"?Math.round(Math.min(1,h.nat/Math.max(1,h.owner===0?[4,7,11][h.size]:Mr(e,h)))*16):0,x=h.owner===V&&h.lane?Math.round((1-h.lane.left/h.lane.total)*24):-1,P=E.tier==="detected"?[]:w?h.specs:e.intel[h.id].snap?.specs||[],R=h.owner===V&&!!h.research,C=[E.tier,E.owner,JSON.stringify(T),_,x,P.join("."),R].join("|");if(M&&M.sig===C)continue;M&&li(M.grp);const N=$v(e,w?h:{...h,b:T},E.tier,E.owner,R),B=yn(h);_>0&&N.grp.add(Oa(B*1.2,B*1.34,"#bfe3ff",.08,Math.PI/2,_/16*Math.PI*2)),x>=0&&N.grp.add(Oa(B*1.74,B*1.9,Ei,.08,Math.PI/2,Math.max(.05,x/24*Math.PI*2)));const L=[],z=P.slice(0,4),$=2.5;z.forEach((F,ne)=>{const X=e.specs[F],j=(ne-(z.length-1)/2)*$,te=B*1.55+1.6+ne%2*.4,Se=Mf(F===e.cmdSpec?Ei:pt[X.def].color,F===e.cmdSpec);Se.position.set(j,0,te),N.grp.add(Se),L.push({spec:F,x:j,z:te})}),N.grp.position.set(h.x,0,h.y),mn.add(N.grp),Is.set(h.id,{sig:C,...N,statues:L})}for(const[h,E]of Is){E.spin&&(E.spin.rotation.y=i/6e3),E.orb&&(E.orb.rotation.y=i/400,E.orb.position.y=3+.2*Math.sin(i/300));const M=e.nodes[h];for(const w of E.statues){const T=Ct(M.x+w.x,M.y+w.z,Bv*.65);Rs.push({x:T.x,y:T.y,r:Math.max(12,o*1.6),spec:w.spec})}}const c=e.corridors.map(h=>`${h.a}-${h.b}-${h.owner}-${h.until?1:0}`).join(",");if(c!==Ol){Pi&&li(Pi),Pi=new Dn,Ol=c;for(const h of e.corridors){const E=e.nodes[h.a],M=e.nodes[h.b],w=Gn(e,h.owner),T=Math.hypot(M.x-E.x,M.y-E.y),_=new Dn;_.add(Be(new Pt(.35,.35,T,6,1,!0),Xn(w,h.until?.55:.95))),_.add(Be(new Pt(.9,.9,T,8,1,!0),Xn(w,.18))),_.position.set((E.x+M.x)/2,.8,(E.y+M.y)/2),_.rotation.set(0,-Math.atan2(M.y-E.y,M.x-E.x),Math.PI/2,"YXZ"),Pi.add(_)}mn.add(Pi)}const d=new Set,u=[],f=new Map;for(const h of e.ships)if(h.at>=0)Ni(e,e.nodes[h.at]).tier==="live"&&(f.has(h.at)||f.set(h.at,[]),f.get(h.at).push(h));else{const E=Wa(e,h);E&&u.push({s:h,seen:E})}const p=(h,E)=>{d.add(h.id);const M=E===2?h.specs:[],w=M.map(x=>x===e.cmdSpec?Ei:pt[e.specs[x].def].color),T=`${h.owner}|${h.lane?1:0}|${M.join(".")}`;let _=wi.get(h.id);return(!_||_.sig!==T)&&(_&&li(_.grp),_={sig:T,grp:Xv(h.owner===0?"#d9d9d9":Gn(e,h.owner),w,!!h.lane),statues:M.slice()},mn.add(_.grp),wi.set(h.id,_)),_.grp},v=(h,E)=>{const M=wi.get(h.id);M&&M.statues.forEach((w,T)=>{const _=Ct(h.x,h.y,E+1.2);Rs.push({x:_.x-T*10,y:_.y,r:12,spec:w})})};for(const[h,E]of f){const M=e.nodes[h],w=Math.min(M.kind==="planet"?6:4,br(M)),T=yn(M);E.sort((_,x)=>_.seq-x.seq).slice(0,8).forEach((_,x)=>{const P=p(_,2),R=P.getObjectByName("model"),C=P.getObjectByName("shadow");if(x<w){const N=Wv(M,x),B=_.loadUntil>0?.5+.3*Math.sin(i/150):0;P.position.set(M.x+N.x,0,M.y+N.z),P.rotation.y=-N.a,R.position.y=N.y+B,R.rotation.x=0,C.visible=M.kind==="planet",C.position.y=.04;const L=Ct(M.x+N.x,M.y+N.z,N.y+1.4);(wi.get(_.id)?.statues||[]).forEach((z,$)=>Rs.push({x:L.x-$*10,y:L.y,r:12,spec:z}))}else{const N=i/1500+(x-w)*1.6,B=T*3.1;P.position.set(M.x+Math.cos(N)*B,0,M.y+Math.sin(N)*B),P.rotation.y=-(N+Math.PI/2),R.position.y=Ls(M)+T*.9,R.rotation.x=-.45,C.visible=!1}})}for(const{s:h,seen:E}of u){const M=p(h,E),w=e.nodes[h.to],T=M.getObjectByName("model");M.position.set(h.x,0,h.y),M.rotation.y=-Math.atan2(w.y-h.y,w.x-h.x);const _=h.lane?.8:3+.25*Math.sin(i/400+h.id);T.position.y=_,T.rotation.x=0,h.lane&&(T.rotation.y=i/300);const x=M.getObjectByName("shadow");x.visible=!h.lane,x.position.y=.04,v(h,_)}for(const[h,E]of wi)d.has(h)||(li(E.grp),wi.delete(h));const y=t.sel?.type==="node"?e.nodes[t.sel.id]:null;if(Ds.visible=gr.visible=!!y&&y.owner===V,_r.visible=!!y,y&&(_r.position.set(y.x,.12,y.y),_r.scale.setScalar(yn(y)*2.05),Ds.visible)){const[h,E]=Va(e,y);Ds.position.set(y.x,.1,y.y),Ds.scale.setScalar(h),gr.position.set(y.x,.1,y.y),gr.scale.setScalar(E)}ur.render(mn,Ti),n.clearRect(0,0,r,a),n.lineCap="round";for(const{s:h}of u){if(h.lane)continue;const E=e.nodes[h.to],M=Ct(h.x,h.y),w=Ct(E.x,E.y),T=h.owner===0?"#d9d9d9":Gn(e,h.owner);n.strokeStyle=Li(T,.8),n.lineWidth=2.5,n.setLineDash([.1,9]),n.lineDashOffset=-i/50,n.beginPath(),n.moveTo(M.x,M.y),n.lineTo(w.x,w.y),n.stroke(),n.setLineDash([])}for(const h of e.nodes)if(h.owner===V)for(const E of[h.lane,...h.queue]){if(!E||E.kind!=="corridor")continue;const M=e.nodes[+E.id],w=Ct(h.x,h.y,.8),T=Ct(M.x,M.y,.8),_=E===h.lane?1-E.left/E.total:0;n.strokeStyle=Li(nn,.4),n.lineWidth=2,n.setLineDash([4,6]),n.beginPath(),n.moveTo(w.x,w.y),n.lineTo(T.x,T.y),n.stroke(),n.setLineDash([]),_>0&&(n.strokeStyle=Ei,n.lineWidth=3,n.beginPath(),n.moveTo(w.x,w.y),n.lineTo(w.x+(T.x-w.x)*_,w.y+(T.y-w.y)*_),n.stroke())}if(t.targeting&&t.from>=0&&t.hover>=0&&t.hover!==t.from){const h=Ct(e.nodes[t.from].x,e.nodes[t.from].y),E=Ct(e.nodes[t.hover].x,e.nodes[t.hover].y);n.strokeStyle=nn,n.lineWidth=3,n.setLineDash([.1,9]),n.beginPath(),n.moveTo(h.x,h.y),n.lineTo(E.x,E.y),n.stroke(),n.setLineDash([])}const g=e.specs[e.cmdSpec],m=e.nodes.filter(h=>Ni(e,h).tier!=="hidden").sort((h,E)=>h.y-E.y);for(const h of m){const E=Ni(e,h),M=Ct(h.x,h.y,Ov(h));if(M.x<-80||M.y<-40||M.x>r+80||M.y>a+160)continue;const w=Ct(h.x,h.y),T=E.tier==="detected",_=E.tier==="stale",x=T?ks:E.owner===0?_f:Gn(e,E.owner),P=yn(h)*o;t.targeting&&h.id!==t.from&&(qa(e,h)||h.owner===V)&&(n.strokeStyle=Li(nn,.35+.3*Math.sin(i/250)),n.lineWidth=2.5,n.beginPath(),n.ellipse(w.x,w.y,P*2.3,P*2.3*Bi,0,0,7),n.stroke());let R=Ct(h.x,h.y+yn(h)*1.55+3.4).y+8;if(T){const C=Ct(h.x,h.y,Ls(h));n.fillStyle=nn,n.font="800 14px system-ui",n.textAlign="center",n.textBaseline="middle",n.globalAlpha=.8,n.fillText("?",C.x,C.y),n.globalAlpha=1,R=w.y+P*1.4*Bi+10}else{const C=h.home?"⌂ ":h.citadel?"✦ ":h.capital?"♛ ":"";eu(n,M.x,M.y+2,x,C+(_?"~":"")+E.drones,h.home||h.capital||h.citadel,_,i,h.id);let N=w.x+P*1.7+8;const B=Ct(h.x,h.y,Ls(h)).y,L=(F,ne)=>{n.fillStyle=ne,n.beginPath(),n.roundRect(N-8,B-8,16,16,4),n.fill(),n.fillStyle=Ci,n.font="800 11px system-ui",n.textAlign="center",n.textBaseline="middle",n.fillText(F,N,B+.5),N+=19};h.event&&L("!",Ei),h.offer&&h.owner!==V&&L("☺","#e9a9c9"),h.hold&&L("◷","#a9dcec"),h.owner===V&&h.prisoners.length&&L("⛓","#e6a183"),g&&g.held&&g.node===h.id&&L("★","#e2604e");const z=f.get(h.id)||[],$=Math.min(h.kind==="planet"?6:4,br(h));if(z.length>$){const F=yn(h)*3.1,ne=Ls(h)+yn(h)*.9;n.strokeStyle=Li(nn,.45),n.lineWidth=1.5,n.setLineDash([4,6]),n.beginPath();for(let X=0;X<=40;X++){const j=X/40*Math.PI*2,te=Ct(h.x+Math.cos(j)*F,h.y+Math.sin(j)*F,ne);n[X?"lineTo":"moveTo"](te.x,te.y)}n.stroke(),n.setLineDash([])}}if(o>4.5&&(n.font="700 10px system-ui",n.textAlign="center",n.textBaseline="middle",n.lineJoin="round",n.strokeStyle="rgba(29,35,53,0.7)",n.lineWidth=3,n.strokeText(h.name.toUpperCase(),w.x,R),n.fillStyle=Li(nn,T?.45:.85),n.fillText(h.name.toUpperCase(),w.x,R),R+=15),!T&&o>3.2){const C=E.tier==="live"?h.b:e.intel[h.id].snap?.b||{},N=Kv.filter($=>(C[$]||0)>0),B=$=>(C[$]||0)>1?30:20,L=N.reduce(($,F)=>$+B(F)+3,-3);let z=w.x-L/2;n.globalAlpha=_?.65:1;for(const $ of N){const F=B($),ne=($==="lab"||$==="slab")&&h.owner===V&&h.research;if(n.fillStyle=Fa[$],n.beginPath(),n.roundRect(z,R-9,F,18,5),n.fill(),ne){const X=e.sides[V],j=(X.techProg[h.research]||0)/ts[Mt[h.research].tier];n.strokeStyle="#9fe0ff",n.lineWidth=2.5,n.beginPath(),n.roundRect(z-1.5,R-10.5,F+3,21,6),n.stroke(),n.fillStyle=Ci,n.fillRect(z+2,R+6,(F-4)*Math.min(1,j),2)}Yv(n,$,z+10,R),(C[$]||0)>1&&(n.fillStyle=Ci,n.font="800 10px system-ui",n.textAlign="center",n.textBaseline="middle",n.fillText(String(C[$]),z+23,R+.5)),z+=F+3}n.globalAlpha=1}}for(const{s:h,seen:E}of u){const M=Ct(h.x,h.y,h.lane?2.2:4.4),w=h.owner===0?"#d9d9d9":Gn(e,h.owner);if(t.sel?.type==="ship"&&t.sel.id===h.id){const T=Ct(h.x,h.y);n.strokeStyle=nn,n.lineWidth=2,n.beginPath(),n.ellipse(T.x,T.y,16,16*Bi,0,0,7),n.stroke()}eu(n,M.x,M.y,w,E===2?String(h.drones):"?",!1,!1,i,h.id),E===2&&h.specs.forEach((T,_)=>{const x=M.x-9-_*15,P=M.y-12,R=T===e.cmdSpec?Ei:pt[e.specs[T].def].color;n.fillStyle=R,n.beginPath(),n.arc(x,P,7,0,7),n.fill(),n.strokeStyle=Ci,n.lineWidth=1.5,n.stroke(),n.fillStyle=Ci,n.font="800 8px system-ui",n.textAlign="center",n.textBaseline="middle",n.fillText(T===e.cmdSpec?"★":pt[e.specs[T].def].tag,x,P+.5),Rs.push({x,y:P,r:9,spec:T})})}}const bt=n=>(n=Math.max(0,Math.floor(n)),`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`),ke=n=>n.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Us=(n,e="")=>`<div class="bar ${e}"><i style="width:${Math.max(0,Math.min(100,n*100)).toFixed(1)}%"></i></div>`,nt=(n,e,t={})=>`<button data-a="${n}" class="btn ${t.cls||""}" ${t.off?"disabled":""}>${e}${t.sub?`<small>${t.sub}</small>`:""}${t.off?`<small class="why">${ke(t.off)}</small>`:""}</button>`;function Hi(n,e,t=!1){const i=pt[e.def],s=e.id===n.cmdSpec;return`<span class="tok ${t?"big":""} ${s?"cmd":""}" style="--c:${s?"#e8bd55":i.color}">${s?"★":i.tag}</span>`}const tu=n=>`<span class="tok big" style="--c:${pt[n].color}">${pt[n].tag}</span>`;function Jv(n){const e=n.g,t=e.sides[V],i=Vf(e,V),s=e.mob,r=e.specs[e.cmdSpec];let a="";if(r&&r.held&&e.cmdLostT>=0){const l=sc(e)-(e.t-e.cmdLostT);a=`<div class="banner bad" data-a="focus:${r.node}">★ COMMANDER CAPTURED at ${ke(e.nodes[r.node].name)}. Retake it in <b>${bt(l)}</b></div>`}else if(n.mode)a=`<div class="banner">${n.mode.k==="launch"?"Tap a destination":n.mode.k==="redirect"?"Tap a new destination":"Tap a target"} <button class="btn sm" data-a="cancelmode">Cancel</button></div>`;else if(e.offs.length){const l=e.offs[0];a=`<div class="banner warn" ${l.warned?`data-a="focus:${l.target}"`:""}>⚠ ${ke(Yn(e,l.owner))} offensive ${l.warned?`on ${ke(e.nodes[l.target].name)} `:""}launches in ${bt(l.launchT-e.t)}</div>`}const o=[1,2,3,4,5].map(l=>`<i class="${l<=s.stage?"on":""}"></i>`).join("");return`<div class="hudrow">
    <div class="stat" title="Ultanium"><b class="ult">◆ ${Math.floor(t.ult)}</b><small>+${i.toFixed(1)}/min</small></div>
    <div class="stat" title="Drones / global cap"><b>⬢ ${Pr(e,V)}</b><small>/ ${Hs(e,V)}</small></div>
    <div class="stat mob" data-a="menu:intel" title="Coalition mobilization"><span class="pips">${o}</span>${Us(s.prog,"red")}<small>${s.surge?`TOTAL WAR +${s.surge}`:`MOBILIZATION ${s.stage}/5`}</small></div>
    <div class="grow"></div>
    <div class="stat time"><b>${bt(e.t)}</b></div>
    <button class="btn ico ${n.paused?"hot":""}" data-a="pause" title="Pause (space)">${n.paused?"▶":"❚❚"}</button>
    <button class="btn ico" data-a="speed" title="Speed">${n.speed}×</button>
    <button class="btn ico" data-a="menu:specs" title="Menu (M)">☰</button>
  </div>${a}`}function Qv(n,e,t){const i=Ya(n,e,t.id),s=t.at==="ship"?"in flight":t.at==="planet"?"on a planet":t.at==="node"?"at a node":"";return`<button class="abil" data-a="ability:${e.id}:${t.id}" ${i>0?"disabled":""}><b>${t.name}</b>${i>0?`<em>${bt(i)}</em>`:"<em>ready</em>"}<span>${t.desc}${s?` <i>Use ${s}.</i>`:""}</span></button>`}function Sf(n,e){const t=[],i=[];for(const s of e){const r=n.specs[s];if(!(!r||r.owner!==V||r.held))for(const a of Lr(r)){const o=Ya(n,r,a.id),l=o>0?null:ac(n,r,{...a,target:"self"},null),c=a.cd||1,d=o>0?1-o/c:1,u=o>0?bt(o):a.target==="self"?"Ready":"Ready · tap, then pick a target";if(l&&o<=0){i.push(`<span class="later" data-tip="${r.id}">${Hi(n,r)} ${a.name} <small>${ke(l)}</small></span>`);continue}t.push(`<button class="deck ${o>0||l?"off":"on"}" data-a="ability:${r.id}:${a.id}" ${o>0||l?"disabled":""} style="--p:${(d*100).toFixed(0)}%">
        ${Hi(n,r)}<span><b>${a.name}</b><small>${ke(r.cmd?"Commander":pt[r.def].name)} · ${ke(u)}</small><i>${a.desc}</i></span></button>`)}}return(t.length?`<div class="deckrow">${t.join("")}</div>`:"")+(i.length?`<div class="laterrow">${i.join("")}</div>`:"")}function jv(n,e,t){const i=os(n,V),s=(c,d)=>{const u=n.specs[c];return`<div class="slot full" data-tip="${c}">${Hi(n,u,!0)}<small>${ke(u.cmd?"Commander":pt[u.def].name)}</small>${d}</div>`},r='<div class="slot"><small>empty</small></div>',a=t.filter(c=>c.loadUntil===0),o=e.specs.map(c=>s(c,a.length?`<button class="mv" data-a="swap:${c}:${a.find(d=>d.specs.length<i)?.id??a[0].id}" title="Move aboard">▲</button>`:"")).concat(Array(Math.max(0,i-e.specs.length)).fill(r));let l=`<div class="team"><h3>At ${ke(e.name)} <small>${e.specs.length}/${i}</small></h3><div class="slots">${o.join("")}</div>`;return a.forEach((c,d)=>{const u=c.specs.map(f=>s(f,`<button class="mv" data-a="swap:${f}:${c.id}" title="Move to the node">▼</button>`)).concat(Array(Math.max(0,i-c.specs.length)).fill(r));l+=`<h3>Ship ${a.length>1?d+1:""} <small>${Zn(n,c)?"docked":"orbiting"} · ${c.specs.length}/${i}</small></h3><div class="slots">${u.join("")}</div>`}),l+(a.length?'<p class="dim">Tap ▲ or ▼ to move a specialist between this node and a ship here. Hold a statue on the map for details.</p>':"")+"</div>"}function ex(n,e){const t=pt[e.def];let i=mi(e),s=t.passive;if(e.cmd){const o=ki[e.cmd.arch];i=`Commander · ${t.name} ${o.name} · L${e.cmd.lvl}`,s=`${t.passive} ${o.passive}`}const r=e.owner===V?"":`<small class="bad">${ke(Yn(n,e.owner))}</small>`,a=Lr(e).map(o=>{const l=e.owner===V?Ya(n,e,o.id):0;return`<p><b>${o.name}</b> <small>${l>0?bt(l):`${o.cd}s cooldown`}</small><br>${o.desc}</p>`}).join("");return`<div class="tiphead">${Hi(n,e,!0)}<div><b>${ke(i)}</b><small>${t.role}</small>${r}</div></div><p>${s}</p>${a}`}function ja(n,e,t=!1,i=!0){const s=pt[e.def];let r=mi(e),a=s.passive;if(e.cmd){const u=ki[e.cmd.arch];r=`Commander · ${s.name} ${u.name} · L${e.cmd.lvl}`,a=`${s.passive} ${u.passive}`}let o="";if(t)if(e.held)o=`<small class="bad">Prisoner at ${ke(n.nodes[e.node].name)}</small>`;else if(e.node>=0)o=`<small data-a="focus:${e.node}" class="link">at ${ke(n.nodes[e.node].name)}</small>`;else{const u=Jt(n,e.ship);o=`<small>aboard a ship${u&&u.to>=0?` to ${ke(n.nodes[u.to].name)}`:""}</small>`}const l=e.cmd?.perks.length?`<p class="perks">${e.cmd.perks.map(u=>`<span title="${ke(ko(u).desc)}">${ko(u).name}</span>`).join("")}</p>`:"",c=e.cmd&&e.cmd.lvl<5?Us((e.cmd.xp-ae.xpLevels[e.cmd.lvl-1])/(ae.xpLevels[e.cmd.lvl]-ae.xpLevels[e.cmd.lvl-1]),"gold"):"",d=i&&e.owner===V&&!e.held?Lr(e).map(u=>Qv(n,e,u)).join(""):"";return`<div class="spec">${Hi(n,e,!0)}<div><h4>${ke(r)} <small>${s.role}</small></h4>${o}<p>${a}</p>${l}${c}<div class="abils">${d}</div></div></div>`}function bf(n,e,t){const i=us(n,0,{},t,rn(n,t)),s=i.parts,r=[`${s.garr} Drones`];return t.kind==="planet"&&r.push(`${s.nat} natural`),s.struct&&r.push(`${s.struct} structures`),s.bonus&&r.push(`${s.bonus>0?"+":""}${s.bonus} bonuses`),s.aegis&&r.push(`${s.aegis} Aegis`),{total:i.def,text:r.join(" + ")}}function tx(n){const e=Object.keys(n.b).filter(t=>n.b[t]>0).map(t=>`${_n[t].name}${n.b[t]>1?` ×${n.b[t]}`:""}`);return e.length?e.join(", "):"None"}function nx(n,e){const t=n.g,i=rn(t,e),s=Kl(t,e,i),r=t.sides[V],a=(e.b.lab||0)+(e.b.slab||0)>0,o=["info","build"].concat(a?["research"]:[]);o.includes(n.tab)||(n.tab="info");let l="";if(n.tab==="info"){const c=t.ships.filter(v=>v.at===e.id&&v.owner===V);l+=Sf(t,e.specs.concat(c.flatMap(v=>v.specs)));const d=bf(t,e,e);if(l+=`<div class="kv"><div><small>GARRISON</small><b>⬢ ${e.drones}</b></div><div><small>DEFENCE</small><b>${d.total}</b></div>${e.kind==="planet"?`<div><small>OUTPUT</small><b>◆ ${s.out.toFixed(1)}</b><small>of ${s.cap.toFixed(0)}/min</small></div>`:`<div><small>DOCKS</small><b>${br(e)}</b></div>`}</div>`,l+=`<p class="dim">${d.text}${e.kind==="planet"?` · natural defence ${Math.floor(e.nat)}/${Mr(t,e,i)}`:""}</p>`,e.kind==="planet"&&(l+=`<p class="dim">Mines ${s.on}/${e.b.mine||0} running · ${e.b.gen||0} generator${(e.b.gen||0)===1?"":"s"} power ${(e.b.gen||0)*ae.minesPerGen}</p>`),s.short>0&&(l+=`<p class="warnp">${s.short} Drone${s.short>1?"s":""} short: ${s.resNeed&&!s.resOn?"research paused":"some mines idle"}.</p>`),e.lane){const v=m=>m.kind==="ship"?"Ship":m.kind==="corridor"?`Corridor to ${t.nodes[+m.id].name}`:_n[m.id].name,y=e.lane,g=v(y);l+=`<div class="task"><div><b>${g}</b><small>${bt(y.left)} left${e.kind==="station"?" · Drone production paused":""}</small>${Us(1-y.left/y.total,"gold")}</div><button class="btn sm" data-a="cancel:-1">✕</button></div>`,e.queue.forEach((m,h)=>l+=`<div class="task q"><div><b>${ke(v(m))}</b><small>queued</small></div><button class="btn sm" data-a="cancel:${h}">✕</button></div>`)}else if(e.kind==="station"){const v=Pr(t,V)>=Hs(t,V);l+=`<div class="task"><div><b>Producing Drones</b><small>${v?"Global Drone cap reached":`+${ae.batch+(i.batch||0)} per batch`}</small>${Us(e.prod/ae.batchTime)}</div></div>`}e.research&&(l+=`<div class="task"><div><b>Research: ${Mt[e.research].name}</b><small>${s.resOn?`${bt(ts[Mt[e.research].tier]-(r.techProg[e.research]||0))} of lab time left`:"paused: not enough Drones"}</small>${Us((r.techProg[e.research]||0)/ts[Mt[e.research].tier],"blue")}</div></div>`),e.hold&&(l+=`<div class="task"><div><b>${ke(e.hold.name)}</b><small>Hold with ${e.hold.need}+ Drones · ${bt(e.hold.until-t.t)} left</small>${Us(1-(e.hold.until-t.t)/e.hold.total,"blue")}</div></div>`),e.event&&(l+=nt("event",`! ${In[e.event].name}`,{cls:"wide gold",sub:"Investigate"}));const u=t.ships.filter(v=>v.at===e.id&&v.owner===V);l+="<h3>Ships</h3>",u.length||(l+='<p class="dim">No ship here. Drones and specialists only move by ship.</p>');for(const v of u){const y=v.loadUntil>0?`Loading for ${ke(t.nodes[v.to].name)}`:Zn(t,v)?"Docked":`Orbiting, no free dock${v.drones?` · ${v.drones} Drones aboard`:""}`;l+=`<div class="task"><div><b>▲ Ship</b><small>${y}</small></div>${v.loadUntil>0?"":nt(`send:${v.id}`,"Send",{cls:"sm hot"})}</div>`}l+=jv(t,e,u);const f=Ho(t,e.id);if(f.length){l+="<h3>Corridors</h3>";for(const v of f){const y=t.nodes[v.a===e.id?v.b:v.a];l+=`<div class="task"><div><b>⇄ ${ke(y.name)}</b><small>${v.until?`temporary · ${bt(v.until-t.t)} left`:"Drones and specialists cross at double speed, no ship needed"}</small></div>${nt(`lane:${y.id}`,"Send",{cls:"sm hot"})}</div>`}}const p=e.specs.concat(u.flatMap(v=>v.specs));if(p.length&&(l+="<h3>Specialist details</h3>"+p.map(v=>ja(t,t.specs[v],!1,!1)).join("")),e.prisoners.length){const v=yt(t,V);l+="<h3>Prisoners</h3>";for(const y of e.prisoners){const g=t.specs[y],m=g.def==="warlord"||g.def==="archon",h=e.conv&&e.conv.spec===y?`<small>Converting: ${bt(e.conv.until-t.t)}</small>`:"";l+=`<div class="task"><div>${Hi(t,g)} <b>${ke(mi(g))}</b><small>${ke(Yn(t,g.owner))}</small>${h}</div>${m?"":nt(`ransom:${y}`,`Ransom +${Math.round(ae.ransom*(1+(v.ransom||0)))}`,{cls:"sm"})+(v.recruit?nt(`recruit:${y}`,`Recruit ${ae.recruitCost}`,{cls:"sm"}):"")}</div>`}}}else if(n.tab==="build"){const c=Ho(t,e.id).filter(d=>!d.until).length;l+=nt("corridorpick",`⇄ Corridor <i class="cnt">${c}/${ae.corridorMax}</i>`,{cls:"wide",sub:`◆ ${ae.corridorCost} · ${ae.corridorTime}s · link to one of your nodes within ${ae.corridorRange}; Drones and specialists cross at double speed without a ship`,off:c>=ae.corridorMax?"Maximum built":r.ult<ae.corridorCost?"Not enough Ultanium":null}),e.kind==="station"&&(l+=nt("ship","▲ Ship",{cls:"wide",sub:`◆ ${Sr(t,V)} · ${ae.shipTime}s · pauses Drone production`,off:r.ult<Sr(t,V)?"Not enough Ultanium":e.queue.length>=4?"Queue full":null}));for(const d in _n){const u=_n[d];u.on===e.kind&&(l+=nt(`build:${d}`,`${u.name} <i class="cnt">${ga(e,d)}/${hu(t,e,d)}</i>`,{cls:"wide",sub:`◆ ${u.cost} · ${u.time}s · ${u.desc}`,off:Ps(t,e,d)}))}l+='<p class="dim">Building and production share one lane per node. Research runs separately.</p>'}else{l+=`<label class="chk"><input type="checkbox" data-a="resfirst" ${e.resFirst?"checked":""}> If Drones run short, keep research running before mines</label>`,e.research&&(l+=nt("research:",`Stop ${Mt[e.research].name}`,{cls:"wide",sub:"Progress is kept"}));const c=Jl(t,V);let d="";for(const u in Mt){const f=Mt[u];f.branch!==d&&(l+=`<h3>${f.branch}</h3>`,d=f.branch);const p=r.techs.includes(u),v=r.techProg[u];if(p){l+=`<div class="tech done"><b>✓ ${f.name}</b><small>${f.desc}</small></div>`;continue}const y=t.nodes.some(m=>m.owner===V&&m.id!==e.id&&m.research===u),g=c.includes(u)?y?"In progress elsewhere":e.research===u?"Running here":v===void 0&&r.ult<Go(t,V,u)?"Not enough Ultanium":null:`Needs ${Mt[f.pre].name}`;l+=nt(`research:${u}`,f.name,{cls:"wide",sub:`${v===void 0?`◆ ${Go(t,V,u)}`:`${Math.round(v/ts[f.tier]*100)}% done`} · ${ts[f.tier]}s · ${fu[f.tier]} Drones · ${f.desc}`,off:g})}}return`<div class="tabs">${o.map(c=>`<button data-a="tab:${c}" class="${n.tab===c?"on":""}">${c==="info"?"Overview":c==="build"?"Build":"Research"}</button>`).join("")}</div><div class="pbody">${l}</div>`}function ix(n,e){const t=n.g,i=Ni(t,e),s=Yl(t,e);let r="";if(i.tier==="detected"||!s.v)r+='<p class="warnp">Detected only. Forces, structures and residents are unknown. Scout it with an unmanned ship (the ship is lost) or bring it inside full-intelligence range.</p>';else{const l=s.v,c=bf(t,e,l);r+=`<p class="${s.live?"goodp":"warnp"}">${s.live?"Full intelligence":`Last seen ${bt(s.age)} ago. This may be out of date.`}</p>`,r+=`<div class="kv"><div><small>GARRISON</small><b>⬢ ${l.drones}</b></div><div><small>DEFENCE</small><b>${c.total}</b></div><div><small>TO WIN</small><b>${c.total+1}+</b></div></div><p class="dim">${c.text}</p><p class="dim">Structures: ${tx(l)}</p>`,l.specs.length&&(r+="<h3>Specialists</h3>"+l.specs.map(d=>ja(t,t.specs[d])).join("")),l.prisoners.some(d=>t.specs[d].owner===V)&&(r+=`<p class="warnp">Holding your people: ${l.prisoners.filter(d=>t.specs[d].owner===V).map(d=>ke(mi(t.specs[d]))).join(", ")}</p>`),e.offer&&(r+='<p class="goodp">☺ Residents: capture this planet to recruit 1 of 3 specialists.</p>'),e.event&&(r+=`<p class="goodp">! Signal: ${In[e.event].name}. Capture the node to investigate.</p>`),e.capital&&t.sides[l.owner]?.kind==="faction"&&(r+=`<p class="goodp">♛ Capital of the ${qn[t.sides[l.owner].fac].name}. Capture it to take their Warlord and strip a Citadel Aegis layer.</p>`),e.citadel&&(r+=`<p class="goodp">✦ The Citadel. Capture it to win. Aegis ${jl(t,e)} (falls as Warlords are captured).</p>`)}const a=t.ships.filter(l=>l.owner===V&&l.at>=0&&l.loadUntil===0).map(l=>({s:l,n:t.nodes[l.at]})).sort((l,c)=>Xe(l.n,e)-Xe(c.n,e));r+="<h3>Send a fleet here</h3>",a.length||(r+='<p class="dim">No idle ship available.</p>');const o=new Set;for(const{s:l,n:c}of a){if(o.has(c.id)&&Zn(t,l))continue;o.add(c.id);const d=Zn(t,l);r+=nt(`from:${l.id}`,`${ke(c.name)}`,{cls:"wide",sub:`⬢ ${d?c.drones:l.drones} available · ${bt(nc(t,l,e))} flight${d?"":" · orbiting"}`})}return`<div class="pbody">${r}</div>`}function Or(n,e){const t=n.nodes[e.at];return Zn(n,e)?t.drones+e.drones:e.drones}function yf(n,e){const t=Jt(n,e.ship),i=n.nodes[t.at],s=$l(n,V,e.specs,[]),r=rn(n,i);return r.launchSpeed&&(s.speed=(s.speed||0)+r.launchSpeed),s}function Ef(n,e){const t=Jt(n,e.ship),i=n.nodes[e.to],s=Yl(n,i).v;if(!s)return 0;const r=yf(n,e),a=rn(n,s),o=Or(n,t);for(let l=1;l<=o;l++)if(us(n,l,r,s,a).win)return l;return 0}function Tf(n,e){if(e.lane){const p=n.nodes[e.from],v=n.nodes[e.to];return`<div class="kv"><div><small>SENDING</small><b>⬢ ${e.drones}</b></div><div><small>ARRIVES IN</small><b>${bt(Xe(p,v)/(ae.shipSpeed*ae.corridorSpeed))}</b></div><div><small>STAYS</small><b>⬢ ${p.drones-e.drones}</b></div></div>`}const t=Jt(n,e.ship);if(!t||t.at<0)return"";const i=n.nodes[t.at],s=n.nodes[e.to],r=yf(n,e),a=Xe(i,s)/(ae.shipSpeed*Math.max(.3,1+(r.speed||0)))+(r.noLoad||!e.drones&&!e.specs.length?0:ae.loadTime);let o=`<div class="kv"><div><small>SENDING</small><b>⬢ ${e.drones}</b></div><div><small>ARRIVES IN</small><b>${bt(a)}</b></div><div><small>STAYS</small><b>⬢ ${Or(n,t)-e.drones}</b></div></div>`;if(e.specs.includes(n.cmdSpec)&&(o+=`<p class="warnp">★ Commander aboard. If this fleet is destroyed at an enemy node they are captured, and you have ${bt(sc(n))} to retake that node.</p>`),s.owner===V)return o+`<p class="goodp">Reinforcement. Cargo unloads on arrival${s.kind==="station"?" if a dock is free":""}.</p>`;if(!e.drones&&!e.specs.length)return o+`<p class="warnp">Unmanned scout. It fully identifies the target on arrival${r.scoutReturn?" and flies home":" and is lost"}.</p>`;const l=Yl(n,s);if(!l.v)return o+'<p class="badp"><b>Unknown forces. Battle outcome unavailable.</b></p>';const c=us(n,e.drones,r,l.v,rn(n,l.v)),d=c.parts,u=[`${d.drones} Drones`].concat(d.pct?[`+${d.pct} training`]:[],d.flat?[`+${d.flat} specialists`]:[]).join(" "),f=[`${d.garr} Drones`].concat(d.nat?[`${d.nat} natural`]:[],d.struct?[`${d.struct} structures`]:[],d.bonus?[`${d.bonus>0?"+":""}${d.bonus} bonuses`]:[],d.aegis?[`${d.aegis} Aegis`]:[]).join(" + ");return o+=`<div class="versus"><div><small>ATTACK</small><b>${c.atk}</b><span>${u}</span></div><i>vs</i><div><small>DEFENCE</small><b>${c.def}</b><span>${f}</span></div></div>`,c.preKilled&&(o+=`<p class="warnp">${c.preKilled} Drones are destroyed before landing.</p>`),o+=c.win?`<p class="goodp"><b>Victory expected.</b> ${c.surv} Drones survive to hold the node.</p>`:`<p class="badp"><b>Defeat expected.</b> Short by ${c.def-c.atk+1}. ${s.owner===0?"All Drones are lost; the ship and specialists return.":"The ship is destroyed and specialists aboard are captured."}</p>`,l.live?o+='<p class="dim">Based on what is there now. Reinforcements may arrive before you do.</p>':o+=`<p class="warnp">Based on intelligence ${bt(l.age)} old. The enemy may have changed.</p>`,o}function sx(n){const e=n.g,t=n.launch,i=e.nodes[t.from],s=e.nodes[t.to];if(i.owner!==V||s.owner!==V)return n.launch=null,"";const r=i.specs.map(o=>{const l=e.specs[o];return`<button class="chip ${t.specs.includes(o)?"on":""}" data-a="lspec:${o}">${Hi(e,l)} ${ke(l.cmd?"Commander":pt[l.def].name)}</button>`}).join(""),a=Xe(i,s)/(ae.shipSpeed*ae.corridorSpeed);return`<div class="phead"><div><h2>${ke(i.name)} ⇄ ${ke(s.name)}</h2><small>Through the corridor · no ship, no loading</small></div><button class="btn ico" data-a="lcancel">✕</button></div>
  <div class="pbody">
    <input type="range" id="lslider" min="0" max="${i.drones}" value="${t.drones}">
    <div class="quick">${nt("lq:none","0",{cls:"sm"})}${nt("lq:half","Half",{cls:"sm"})}${nt("lq:all","All",{cls:"sm"})}</div>
    ${i.specs.length?`<div class="chips">${r}</div>`:""}
    <div id="preview"><div class="kv"><div><small>SENDING</small><b>⬢ ${t.drones}</b></div><div><small>ARRIVES IN</small><b>${bt(a)}</b></div><div><small>STAYS</small><b>⬢ ${i.drones-t.drones}</b></div></div></div>
    <div class="row">${nt("lcancel","Cancel")}${nt("lconfirm","Send",{cls:"hot grow"})}</div>
  </div>`}function rx(n){if(n.launch.lane)return sx(n);const e=n.g,t=n.launch,i=Jt(e,t.ship);if(!i||i.at<0)return n.launch=null,"";const s=e.nodes[i.at],r=e.nodes[t.to],a=Or(e,i),o=Zn(e,i),l=o?s.specs.concat(i.specs):i.specs,c=l.map(d=>{const u=e.specs[d];return`<button class="chip ${t.specs.includes(d)?"on":""}" data-a="lspec:${d}" ${o?"":"disabled"}>${Hi(e,u)} ${ke(u.cmd?"Commander":pt[u.def].name)}</button>`}).join("");return`<div class="phead"><div><h2>${ke(s.name)} → ${ke(r.name)}</h2><small>${o?"Docked ship":"Orbiting ship: it leaves with what is aboard"}</small></div><button class="btn ico" data-a="lcancel">✕</button></div>
  <div class="pbody">
    <input type="range" id="lslider" min="0" max="${a}" value="${t.drones}" ${o?"":"disabled"}>
    <div class="quick">${nt("lq:none","0",{cls:"sm"})}${nt("lq:min","Just enough",{cls:"sm"})}${nt("lq:half","Half",{cls:"sm"})}${nt("lq:all","All",{cls:"sm"})}</div>
    ${l.length?`<div class="chips">${c}</div><p class="dim">Up to ${os(e,V)} specialists per ship.</p>`:""}
    <div id="preview">${Tf(e,t)}</div>
    <div class="row">${nt("lcancel","Cancel")}${nt("lconfirm","Launch",{cls:"hot grow"})}</div>
  </div>`}function ax(n,e){const t=n.g,i=Wa(t,e),s=t.nodes[e.to];let r=`<div class="kv"><div><small>DRONES</small><b>⬢ ${i===2?e.drones:"?"}</b></div><div><small>ARRIVES IN</small><b>${bt(nc(t,e,s))}</b></div><div><small>HEADING</small><b data-a="focus:${s.id}" class="link">${ke(s.name)}</b></div></div>`;return e.owner===V&&(r=Sf(t,e.specs)+r),e.owner===V?(pi(t,e).redirect&&!e.redirected&&(r+=nt(`redirect:${e.id}`,"Redirect",{cls:"wide",sub:"Once per flight"})),e.specs.length?r+="<h3>Aboard</h3>"+e.specs.map(a=>ja(t,t.specs[a],!1,!1)).join(""):r+=`<p class="dim">No specialists aboard.${e.drones===0?" Unmanned.":""}</p>`):i<2&&(r+='<p class="warnp">Strength unknown. It becomes readable inside full-intelligence range, at a Sensor Array, or with Signal Analysis.</p>'),`<div class="phead"><div><h2><span class="dot" style="background:${Gn(t,e.owner)}"></span>${ke(Yn(t,e.owner))} ${e.lane?"convoy":"fleet"}</h2><small>${e.lane?"In a corridor":"In flight"}</small></div><button class="btn ico" data-a="close">✕</button></div><div class="pbody">${r}</div>`}function ox(n){const e=n.g;if(n.launch)return rx(n);if(!n.sel)return"";if(n.sel.type==="ship"){const a=Jt(e,n.sel.id);return!a||a.at>=0||!Wa(e,a)?(n.sel=null,""):ax(n,a)}const t=e.nodes[n.sel.id],i=Ni(e,t),s=`${t.citadel?"Citadel":t.kind==="planet"?["Small","Medium","Large"][t.size]+" planet":t.home?"Home station":"Station"} · ${i.tier==="detected"?"Unidentified":i.owner===0?"Neutral":ke(Yn(e,i.owner))}`;return`<div class="phead"><div><h2><span class="dot" style="background:${i.tier==="detected"?"#56617c":i.owner===0?"#8f95a6":Gn(e,i.owner)}"></span>${ke(t.name)}</h2><small>${s}</small></div><button class="btn ico" data-a="close">✕</button></div>${t.owner===V?nx(n,t):ix(n,t)}`}function lx(n){const e=n.g,t=e.sides[V],i=[["specs","Specialists"],["relics","Relics"],["research","Research"],["intel","Coalition"],["log","Log"],["sys","Run"]];let s="";if(n.menu==="specs")s=e.specs.filter(a=>a.owner===V).sort((a,o)=>(a.cmd?-1:0)-(o.cmd?-1:0)).map(a=>ja(e,a,!0)).join("")||'<p class="dim">No specialists yet.</p>';else if(n.menu==="relics")s=t.relics.map(r=>`<div class="relic ${ci[r].rarity}"><b>${ci[r].name}</b><small>${ci[r].rarity}</small><p>${ci[r].desc}</p></div>`).join("")||'<p class="dim">No relics yet. Events, Warlords and ancient sites yield them.</p>';else if(n.menu==="research"){const r=e.nodes.filter(o=>o.owner===V&&(o.b.lab||o.b.slab));s=`<p class="dim">${r.length?"Labs: "+r.map(o=>`<span class="link" data-a="focus:${o.id}">${ke(o.name)}${o.research?` (${Mt[o.research].name})`:" (idle)"}</span>`).join(", "):"Build a Research Lab on a planet or station to begin."}</p>`;let a="";for(const o in Mt){const l=Mt[o];l.branch!==a&&(s+=`<h3>${l.branch}</h3>`,a=l.branch);const c=t.techs.includes(o),d=t.techProg[o];s+=`<div class="tech ${c?"done":""}"><b>${c?"✓ ":""}${l.name}</b><small>${l.desc}${d!==void 0?` · ${Math.round(d/ts[l.tier]*100)}%`:""}</small></div>`}}else if(n.menu==="intel"){const r=as[e.sides[e.archon].fac],a=e.mob;s=`<div class="fac" style="--c:#e07aa0"><b>✦ ${r.name} ${r.title}</b><p>${r.desc}</p><p>Mobilization stage ${a.stage}/5${a.surge?` · total war +${a.surge}`:""} (${Math.round(a.prog*100)}% to the next). Each stage enlarges Coalition reserves and offensives and gives every faction new technology. Capturing enemy nodes sets it back; a captured Warlord removes a whole stage.</p><p>Citadel Aegis: ${jl(e,e.nodes[e.citadel])} (${e.factions.filter(o=>!e.sides[o].broken).length} layers).</p></div>`;for(const o of e.factions){const l=e.sides[o],c=qn[l.fac],d=e.nodes.filter(f=>e.intel[f.id].snap?.owner===o||e.vis[f.id]===2&&f.owner===o),u=d.length>0||l.broken;s+=u?`<div class="fac" style="--c:${c.color}"><b>${c.name}${l.broken?" · BROKEN":""}</b><p>${c.desc}</p><p>${c.tell}</p><p class="dim">Known nodes: ${d.length} · Technology fielded: ${l.techs.map(f=>Mt[f].name).join(", ")||"none"}</p>${d.filter(f=>f.capital).map(f=>`<p class="link" data-a="focus:${f.id}">♛ Capital located: ${ke(f.name)}</p>`).join("")}</div>`:'<div class="fac" style="--c:#5d6875"><b>Unidentified faction</b><p class="dim">Not yet encountered.</p></div>'}}else if(n.menu==="log")s=e.log.slice().reverse().map(r=>`<div class="logl ${r.kind}" ${r.node>=0?`data-a="focus:${r.node}"`:""}><small>${bt(r.t)}</small>${ke(r.msg)}</div>`).join("");else{const r=e.stats;s=`<div class="kv"><div><small>SEED</small><b>${e.seed}</b></div><div><small>THREAT</small><b>${e.threat}</b></div><div><small>NODES</small><b>${e.nodes.filter(a=>a.owner===V).length}</b></div></div>
      <p class="dim">Captures ${r.captures} · Nodes lost ${r.nodesLost} · Drones lost ${r.dronesLost} · Ships lost ${r.shipsLost}</p>
      <p class="dim">The run saves automatically to this device.</p>
      ${nt("help","How to play",{cls:"wide"})}${nt("abandon","Abandon run",{cls:"wide"})}`}return`<div class="sheet"><div class="phead"><div class="tabs">${i.map(([r,a])=>`<button data-a="menu:${r}" class="${n.menu===r?"on":""}">${a}</button>`).join("")}</div><button class="btn ico" data-a="menu:">✕</button></div><div class="pbody">${s}</div></div>`}function cx(n){const e=n.g;if(e.result){const a=e.stats,o=e.result==="win";return`<div class="modal end ${o?"win":"lose"}"><h1>${o?"Victory":"Defeat"}</h1><p>${ke(e.resultWhy)}</p>
      <div class="kv"><div><small>TIME</small><b>${bt(e.t)}</b></div><div><small>CAPTURES</small><b>${a.captures}</b></div><div><small>WARLORDS</small><b>${a.warlords}</b></div></div>
      <p class="dim">Nodes lost ${a.nodesLost} · Drones built ${a.dronesMade} · Drones lost ${a.dronesLost} · Ships lost ${a.shipsLost}<br>Specialists ${a.specs} · Relics ${a.relics} · Technologies ${a.techs} · Events ${a.events} · Ultanium mined ${Math.round(a.ultMade)}</p>
      ${o&&e.threat<5?`<p class="goodp">Threat level ${e.threat+1} unlocked.</p>`:""}
      <div class="row">${nt("title","Main menu")}${nt("again","New run",{cls:"hot grow"})}</div></div>`}const t=e.pending[0];if(!t)return"";let i="";if(t.kind==="draft")return i=t.opts.map((a,o)=>{const l=pt[a.base],c=ki[a.arch];return`<button class="card" data-a="choose:${o}">${tu(a.base)}<h3>${l.name} ${c.name}</h3><small>${c.blurb}</small><p>${l.passive}</p><p>${c.passive}</p><p><b>${l.active.name}:</b> ${l.active.desc}</p><p><b>${c.a.name}:</b> ${c.a.desc}</p><p class="dim"><b>Level 3, ${c.b.name}:</b> ${c.b.desc}</p></button>`}).join(""),`<div class="modal"><h2>Choose your Commander</h2><p class="dim">Your Commander is your strongest specialist. If they are captured you have ${bt(ae.rescueSecs)} to retake the node holding them, or the run ends.</p><div class="cards">${i}</div></div>`;if(t.kind==="spec")return i=t.opts.map((a,o)=>{const l=pt[a];return`<button class="card" data-a="choose:${o}">${tu(a)}<h3>${l.name}</h3><small>${l.role}</small><p>${l.passive}</p>${l.active?`<p><b>${l.active.name}</b> (${l.active.cd}s): ${l.active.desc}</p>`:""}</button>`}).join(""),`<div class="modal"><h2>${ke(t.title)}</h2><p class="dim">One of them will join you. The others stay behind.</p><div class="cards">${i}</div></div>`;if(t.kind==="relic")return i=t.opts.map((a,o)=>{const l=ci[a];return`<button class="card relic ${l.rarity}" data-a="choose:${o}"><h3>${l.name}</h3><small>${l.rarity}</small><p>${l.desc}</p></button>`}).join(""),`<div class="modal"><h2>Choose a relic</h2><p class="dim">Relics last for the whole run.</p><div class="cards">${i}</div></div>`;if(t.kind==="perk")return i=t.opts.map((a,o)=>{const l=ko(a);return`<button class="card" data-a="choose:${o}"><h3>${l.name}</h3><p>${l.desc}</p></button>`}).join(""),`<div class="modal"><h2>${ke(t.title)}</h2>${e.specs[e.cmdSpec].cmd.lvl===3?`<p class="goodp">New ability unlocked: ${ki[e.specs[e.cmdSpec].cmd.arch].b.name}</p>`:""}<div class="cards">${i}</div></div>`;const s=In[t.event],r=e.nodes[t.node];return i=s.choices.map((a,o)=>{const l=Mu(e,r,a);if(a.req&&l&&l.startsWith("Needs your"))return`<button class="card locked" disabled><h3>${a.label}</h3><small>${ke(l)}</small></button>`;const c=[a.ult?`◆ ${a.ult}`:"",a.drones?`⬢ ${a.drones}`:""].filter(Boolean).join(" · ");return`<button class="card" data-a="choose:${o}" ${l?"disabled":""}><h3>${a.label}</h3>${c?`<small>Cost ${c}</small>`:""}<p>${a.desc}</p>${l?`<small class="why">${ke(l)}</small>`:""}</button>`}).join(""),`<div class="modal"><h2>${s.name}</h2><small>${ke(r.name)} · ⬢ ${r.drones} here</small><p class="flavour">${s.text}</p><div class="cards">${i}</div>${nt("choose:-1","Decide later",{cls:"wide"})}</div>`}function dx(n){const e=n.meta,t=Array.from({length:e.unlocked+1},(i,s)=>`<button class="chip ${n.newThreat===s?"on":""}" data-a="threat:${s}">${s}</button>`).join("");return`<div class="title"><h1>SPACE<span>NODES</span></h1><p class="tag">Build an empire. Assemble your specialists. Take the Citadel before the Coalition takes you.</p>
    ${n.hasSave?nt("continue","Continue run",{cls:"wide hot"}):""}
    ${nt("newrun","New run",{cls:`wide ${n.hasSave?"":"hot"}`})}
    <div class="lv"><small>THREAT LEVEL</small><div class="chips">${t}</div><small class="dim">${n.newThreat===0?"Standard campaign.":`Tougher garrisons and faster mobilization (+${n.newThreat*8}% / +${n.newThreat*5}%).`} Win to unlock the next.</small></div>
    ${nt("help","How to play",{cls:"wide"})}
    <small class="dim">Runs ${e.runs} · Wins ${e.wins}</small></div>`}function nu(){return`<div class="modal help"><h2>How to play</h2>
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
  ${nt("helpclose","Got it",{cls:"wide hot"})}</div>`}const zs="spacenodes.save.v1",yc="spacenodes.meta.v1",Qs=n=>document.getElementById(n),jn=Qs("map"),Ta=jn.getContext("2d"),iu=Qs("hud"),fa=Qs("panel"),ha=Qs("overlay"),su=Qs("toasts"),es=Qs("tip"),ui={get:n=>{try{return localStorage.getItem(n)}catch{return null}},set:(n,e)=>{try{localStorage.setItem(n,e)}catch{}},del:n=>{try{localStorage.removeItem(n)}catch{}}},q={g:null,speed:1,paused:!1,sel:null,tab:"info",menu:null,mode:null,launch:null,screen:"title",newThreat:0,meta:{runs:0,wins:0,unlocked:0,best:0,...JSON.parse(ui.get(yc)||"{}")},hasSave:!!ui.get(zs),note:"",noteT:0},qe={x:100,y:180,z:3};let oi=null,Vi=0,Ys=0,wf=-1,Wt=!0,hr=0,Ba=!1,ru="title";const Ai=[];window.__app=q;function au(n){q.g=n,q.screen="game",q.sel=null,q.menu=null,q.mode=null,q.launch=null,q.paused=!1,q.speed=1;const e=n.nodes[n.home];qe.x=e.x+8,qe.y=e.y,qe.z=Math.max(6.5,Math.min(9,Vi/52)),hr=n.log.length,Ai.length=0,Wt=!0}function Ec(){q.g&&!q.g.result&&q.screen==="game"&&(ui.set(zs,JSON.stringify(q.g)),q.hasSave=!0)}function ux(){const n=q.g;ui.del(zs),q.hasSave=!1,q.meta.runs++,n.result==="win"&&(q.meta.wins++,q.meta.unlocked=Math.min(5,Math.max(q.meta.unlocked,n.threat+1))),ui.set(yc,JSON.stringify(q.meta))}let ka=!1;function vr(n){n&&(Ai.push({msg:n,kind:"warn",node:-1,until:performance.now()+3500}),Wt=!0)}function Zt(n){const e=vh(q.g,n);return vr(e),Wt=!0,!e}function Af(n){const e=q.g.nodes[n],t=Vi<820,i=!!q.sel||!!q.launch;oi={x:e.x+(!t&&i?190/qe.z:0),y:e.y+(t&&i?Ys*.22/(qe.z*Bi):0)}}function Tc(n,e){q.sel={type:n,id:e},q.tab="info",q.launch=null,Wt=!0,n==="node"&&Af(e)}function zl(n,e){const t=q.g,i=Jt(t,n);if(!i||i.at<0)return vr("That ship has left");if(i.at===e)return vr("The ship is already there");const s=t.nodes[e];if(s.owner!==V&&!qa(t,s))return vr("Target is not in detection range");const r={ship:n,to:e,drones:0,specs:Zn(t,i)?[]:i.specs.slice()},a=Or(t,i);if(!Zn(t,i))r.drones=i.drones;else if(s.owner===V)r.drones=Math.max(0,a-(t.nodes[i.at].specs.includes(t.cmdSpec)?6:0));else{const o=Ef(t,r);r.drones=o?Math.min(a,o+2):a}q.launch=r,q.mode=null,q.sel={type:"node",id:e},Wt=!0,Af(e)}function Gl(n,e){const[t,...i]=n.split(":"),s=q.g,r=q.sel?.type==="node"?q.sel.id:-1;switch(t){case"newrun":case"again":au(oh(Date.now()%2147483647|0,q.newThreat)),ka=!1;break;case"continue":{const a=ui.get(zs);if(a)try{const o=JSON.parse(a);o.corridors=o.corridors||[],ei(o),au(o),ka=!1}catch{ui.del(zs),q.hasSave=!1}break}case"title":q.screen="title",q.g=null;break;case"threat":q.newThreat=+i[0];break;case"help":ru=q.screen,q.screen="help",q.menu=null;break;case"helpclose":q.screen=ru;break;case"abandon":confirm("Abandon this run?")&&(ui.del(zs),q.hasSave=!1,q.meta.runs++,ui.set(yc,JSON.stringify(q.meta)),q.screen="title",q.g=null);break;case"pause":q.paused=!q.paused,q.paused&&Ec();break;case"speed":q.speed=q.speed===1?2:q.speed===2?4:1;break;case"menu":q.menu=i[0]||null;break;case"close":q.sel=null,q.launch=null;break;case"tab":q.tab=i[0];break;case"focus":q.menu=null,Tc("node",+i[0]);break;case"cancelmode":q.mode=null;break;case"build":Zt({c:"build",node:r,id:i[0]});break;case"ship":Zt({c:"ship",node:r});break;case"cancel":Zt({c:"cancel",node:r,idx:+i[0]});break;case"research":Zt({c:"research",node:r,id:i[0]||null});break;case"resfirst":Zt({c:"resFirst",node:r});break;case"event":Zt({c:"event",node:r});break;case"ransom":Zt({c:"ransom",spec:+i[0],recruit:!1});break;case"recruit":Zt({c:"ransom",spec:+i[0],recruit:!0});break;case"choose":Zt({c:"choose",idx:+i[0]});break;case"send":q.mode={k:"launch",ship:+i[0]},q.launch=null;break;case"from":zl(+i[0],r);break;case"redirect":q.mode={k:"redirect",ship:+i[0]};break;case"corridorpick":q.mode={k:"corridor",from:r};break;case"swap":Zt({c:"swap",spec:+i[0],ship:+i[1]});break;case"lane":{const a=s.nodes[r];q.launch={ship:-1,from:r,to:+i[0],drones:Math.floor(a.drones/2),specs:[],lane:!0};break}case"ability":{const a=s.specs[+i[0]],o=Lr(a).find(l=>l.id===i[1]);if(o.target==="self")Zt({c:"ability",spec:a.id,id:o.id,target:-1});else{const l=ac(s,a,{...o,target:"self"},null);l?vr(l):(q.mode={k:"ability",spec:a.id,id:o.id},q.menu=null)}break}case"lspec":{const a=q.launch,o=+i[0];a.specs=a.specs.includes(o)?a.specs.filter(l=>l!==o):a.specs.concat(o);break}case"lq":{const a=q.launch,o=a.lane?s.nodes[a.from].drones:Or(s,Jt(s,a.ship));a.drones=i[0]==="all"?o:i[0]==="half"?Math.ceil(o/2):i[0]==="none"?0:Ef(s,a)||o;break}case"lcancel":q.launch=null;break;case"lconfirm":{const a=q.launch;if(a.lane){Zt({c:"transfer",from:a.from,to:a.to,drones:a.drones,specs:a.specs})&&(q.launch=null);break}Zt({c:"launch",ship:a.ship,to:a.to,drones:a.drones,specs:a.specs})&&(q.launch=null,q.sel=null);break}}Wt=!0}document.addEventListener("click",n=>{const e=n.target.closest("[data-tip]");if(e&&!n.target.closest("button")){const i=e.getBoundingClientRect();wc(+e.dataset.tip,i.left+i.width/2,i.top);return}n.target.closest("#tip")||Ac();const t=n.target.closest("[data-a]");!t||t.disabled||t instanceof HTMLInputElement&&t.type!=="checkbox"||Gl(t.dataset.a)});document.addEventListener("input",n=>{const e=n.target;if(e.id==="lslider"&&q.launch&&q.g){q.launch.drones=+e.value;const t=document.getElementById("preview");t&&(t.innerHTML=Tf(q.g,q.launch))}});document.addEventListener("pointerdown",n=>{n.target.id==="lslider"&&(Ba=!0)});document.addEventListener("pointerup",()=>{Ba&&(Ba=!1,Wt=!0)});document.addEventListener("keyup",n=>On.delete(n.key.toLowerCase()));document.addEventListener("keydown",n=>{q.screen!=="game"||!q.g||(On.add(n.key.toLowerCase()),n.key===" "?(n.preventDefault(),Gl("pause")):n.key==="1"?(q.speed=1,Wt=!0):n.key==="2"?(q.speed=2,Wt=!0):n.key==="3"?(q.speed=4,Wt=!0):n.key==="m"||n.key==="M"?Gl(q.menu?"menu:":"menu:specs"):n.key==="h"||n.key==="H"?Tc("node",(q.g.nodes.find(e=>e.owner===V&&e.home)||q.g.nodes.find(e=>e.owner===V)||q.g.nodes[0]).id):n.key==="Escape"&&(q.mode?q.mode=null:q.launch?q.launch=null:q.menu?q.menu=null:q.sel=null,Wt=!0))});document.addEventListener("visibilitychange",()=>{document.hidden&&Ec()});const gn=new Map;let Ui=null,Gs=!1,xr=0;const ou=(n,e)=>({x:(n-Vi/2)/qe.z+qe.x,y:(e-Ys/2)/(qe.z*Bi)+qe.y}),zn={x:0,y:0},On=new Set;function Rf(n,e){const t=q.g;for(const r of t.ships){if(r.at>=0||!Wa(t,r))continue;const a=Ct(r.x,r.y,3);if(Math.hypot(a.x-n,a.y-e)<24)return{type:"ship",id:r.id}}let i=-1,s=1e9;for(const r of t.nodes){if(Ni(t,r).tier==="hidden")continue;const a=qv(r),o=Math.hypot(a.x-n,a.y-e);o<Math.max(30,yn(r)*qe.z*2.3)&&o<s&&(s=o,i=r.id)}return i>=0?{type:"node",id:i}:null}function fx(n,e){const t=q.g,i=Rf(n,e);if(q.mode){if(!i||i.type!=="node")return;const s=q.mode;s.k==="launch"?zl(s.ship,i.id):s.k==="redirect"?Zt({c:"redirect",ship:s.ship,to:i.id})&&(q.mode=null):s.k==="corridor"?Zt({c:"corridor",from:s.from,to:i.id})&&(q.mode=null,q.tab="info"):Zt({c:"ability",spec:s.spec,id:s.id,target:i.id})&&(q.mode=null),Wt=!0;return}if(!i){q.launch||(q.sel=null),Wt=!0;return}if(q.launch&&!q.launch.lane&&i.type==="node"){const s=Jt(t,q.launch.ship);if(s&&s.at!==i.id)return zl(q.launch.ship,i.id)}Tc(i.type,i.id)}let za=-1,Hl=0,Vl=!1;function Cf(n,e){let t=null,i=1e9;for(const s of Rs){const r=Math.hypot(s.x-n,s.y-e);r<s.r+6&&r<i&&(i=r,t=s)}return t}function wc(n,e,t){if(!q.g)return;za!==n&&(es.innerHTML=ex(q.g,q.g.specs[n]),za=n),es.className="open";const i=es.getBoundingClientRect();es.style.left=`${Math.max(8,Math.min(Vi-i.width-8,e-i.width/2))}px`,es.style.top=`${t-i.height-18<60?t+22:t-i.height-18}px`}function Ac(){(za>=0||es.className)&&(es.className="",za=-1)}jn.addEventListener("pointerdown",n=>{if(jn.setPointerCapture(n.pointerId),Ac(),Vl=!1,clearTimeout(Hl),n.pointerType!=="mouse"&&(Hl=window.setTimeout(()=>{if(gn.size!==1||Gs||!Ui)return;const e=Cf(Ui.x,Ui.y);e&&(Vl=!0,wc(e.spec,e.x,e.y),navigator.vibrate&&navigator.vibrate(12))},420)),gn.set(n.pointerId,{x:n.clientX,y:n.clientY}),gn.size===1&&(Ui={x:n.clientX,y:n.clientY,t:performance.now()},Gs=!1),gn.size===2){const[e,t]=[...gn.values()];xr=Math.hypot(e.x-t.x,e.y-t.y),Gs=!0}oi=null,zn.x=zn.y=0});jn.addEventListener("pointermove",n=>{const e=gn.get(n.pointerId);if(!e){if(q.g&&q.screen==="game"){const s=n.pointerType==="mouse"?Cf(n.clientX,n.clientY):null;s?wc(s.spec,s.x,s.y):Ac();const r=Rf(n.clientX,n.clientY);wf=r&&r.type==="node"?r.id:-1,jn.style.cursor=r||s?"pointer":"grab"}return}const t=n.clientX-e.x,i=n.clientY-e.y;if(e.x=n.clientX,e.y=n.clientY,gn.size===1)Ui&&Math.hypot(n.clientX-Ui.x,n.clientY-Ui.y)>8&&(Gs=!0),Gs&&(qe.x-=t/qe.z,qe.y-=i/(qe.z*Bi),zn.x=-t/qe.z,zn.y=-i/(qe.z*Bi));else if(gn.size===2){const[s,r]=[...gn.values()],a=Math.hypot(s.x-r.x,s.y-r.y);xr>0&&Lf((s.x+r.x)/2,(s.y+r.y)/2,a/xr),xr=a}});const Pf=n=>{const e=gn.delete(n.pointerId);clearTimeout(Hl),e&&gn.size===0&&!Gs&&!Vl&&Ui&&q.g&&q.screen==="game"&&fx(n.clientX,n.clientY),gn.size<2&&(xr=0)};jn.addEventListener("pointerup",Pf);jn.addEventListener("pointercancel",Pf);jn.addEventListener("wheel",n=>{n.preventDefault(),Lf(n.clientX,n.clientY,Math.exp(-n.deltaY*.0015))},{passive:!1});function Lf(n,e,t){const i=ou(n,e);qe.z=Math.max(2.4,Math.min(13,qe.z*t));const s=ou(n,e);qe.x+=i.x-s.x,qe.y+=i.y-s.y}function Df(){const n=Math.min(2,window.devicePixelRatio||1);Vi=window.innerWidth,Ys=window.innerHeight,jn.width=Math.round(Vi*n),jn.height=Math.round(Ys*n),Ta.setTransform(n,0,0,n,0,0)}window.addEventListener("resize",Df);Df();const Wl={};function Qi(n,e,t){if(Wl[e]===t)return;Wl[e]=t;const i=n.querySelector(".pbody"),s=i?i.scrollTop:0;n.innerHTML=t;const r=n.querySelector(".pbody");r&&s&&(r.scrollTop=s)}function hx(){const n=q.g,e=performance.now();if(q.screen==="title"||!n){Qi(iu,"hud",""),Qi(fa,"panel",""),fa.className="",su.innerHTML="",Wl.toasts="",ha.className="open clear",Qi(ha,"ov",q.screen==="help"?nu():dx(q));return}for(;hr<n.log.length;hr++){const i=n.log[hr];i.kind!=="info"&&Ai.push({msg:i.msg,kind:i.kind,node:i.node,until:e+(i.kind==="bad"?9e3:6e3)})}for(n.log.length>=150&&(hr=n.log.length);Ai.length&&(Ai[0].until<e||Ai.length>4);)Ai.shift();if(Qi(su,"toasts",Ai.map(i=>`<div class="toast ${i.kind}" ${i.node>=0?`data-a="focus:${i.node}"`:""}>${i.msg.replace(/</g,"&lt;")}</div>`).join("")),Qi(iu,"hud",Jv(q)),!Ba){const i=ox(q);fa.className=i?"open":"",Qi(fa,"panel",i)}const t=q.screen==="help"?nu():n.result||n.pending.length?cx(q):q.menu?lx(q):"";ha.className=t?"open":"",Qi(ha,"ov",t)}let lu=performance.now(),ws=0,cu=0,du=0;function If(n){const e=Math.min(.25,(n-lu)/1e3);lu=n;const t=q.g;if(t&&q.screen==="game"){if(!q.paused&&!q.menu&&!t.result&&!t.pending.length){ws+=e*q.speed;let a=0;for(;ws>=ae.dt&&a++<16;)if(ws-=ae.dt,!_h(t)){ws=0,Wt=!0;break}ws>1&&(ws=0)}t.result&&!ka&&(ka=!0,ux(),Wt=!0),!gn.size&&Math.abs(zn.x)+Math.abs(zn.y)>.01&&(qe.x+=zn.x,qe.y+=zn.y,zn.x*=.9,zn.y*=.9);const i=(On.has("arrowright")||On.has("d")?1:0)-(On.has("arrowleft")||On.has("a")?1:0),s=(On.has("arrowdown")||On.has("s")?1:0)-(On.has("arrowup")||On.has("w")?1:0);(i||s)&&(oi=null,qe.x+=i*420*e/qe.z,qe.y+=s*420*e/(qe.z*Bi)),oi&&(qe.x+=(oi.x-qe.x)*.16,qe.y+=(oi.y-qe.y)*.16,Math.hypot(oi.x-qe.x,oi.y-qe.y)<.4&&(oi=null)),qe.x=Math.max(-40,Math.min(t.w+40,qe.x)),qe.y=Math.max(-40,Math.min(t.h+40,qe.y));const r=q.mode?.k==="launch"?Jt(t,q.mode.ship)?.at??-1:-1;Zv(Ta,t,{cam:qe,w:Vi,h:Ys,sel:q.launch?{type:"node",id:q.launch.to}:q.sel,targeting:!!q.mode,from:r,hover:wf},n),n-du>15e3&&(du=n,Ec())}else Ta.fillStyle="#262e49",Ta.fillRect(0,0,Vi,Ys);(Wt||n-cu>250)&&(Wt=!1,cu=n,hx()),requestAnimationFrame(If)}requestAnimationFrame(If);
