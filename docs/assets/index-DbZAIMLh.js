(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Q=1,ye={dt:.1,shipSpeed:1.2,loadTime:6,startUlt:35,startDrones:12,baseIncome:4,droneCap:120,batch:5,batchTime:30,shipCost:30,shipTime:100,natRegenSecs:20,natBySize:[4,7,11],capBySize:[6,9,13],mineBase:3.2,sizeMult:[1,1.5,2.2],mineDim:[1,.75,.5,.3,.3],mineSlots:[2,3,4],minesPerGen:2,fovInner:{planet:[42,46,52],station:48},fovOuter:{planet:[72,78,88],station:82},specSlots:3,rescueSecs:150,ransom:15,recruitCost:40,stageSecs:540,graceSecs:360,offInterval:[0,300,260,220,185,150],offCommit:[0,.45,.55,.65,.75,.85],gatherSecs:55,captureSetback:.15,aegisPerLayer:12,xpLevels:[0,6,16,30,48]},jt={gen:{id:"gen",name:"Generator",on:"planet",cost:10,time:40,max:2,desc:"Powers up to 2 mines."},mine:{id:"mine",name:"Mine",on:"planet",cost:8,time:30,max:4,desc:"Produces Ultanium. Needs generator power and 1 Drone to operate."},lab:{id:"lab",name:"Research Lab",on:"planet",cost:30,time:75,max:1,desc:"Enables research at this node."},shield:{id:"shield",name:"Shield Generator",on:"planet",cost:18,time:45,max:2,desc:"+4 natural defence and faster recharge."},relay:{id:"relay",name:"Relay",on:"planet",cost:15,time:40,max:1,desc:"+25% field of view."},bastion:{id:"bastion",name:"Bastion",on:"planet",cost:35,time:90,max:1,desc:"+8 defence.",tech:"fort"},dock:{id:"dock",name:"Dock",on:"station",cost:12,time:35,max:3,desc:"One more ship can load and unload here."},turret:{id:"turret",name:"Turret",on:"station",cost:18,time:45,max:3,desc:"+4 defence."},barracks:{id:"barracks",name:"Barracks",on:"station",cost:20,time:60,max:1,desc:"Drone batches 25% faster."},shipyard:{id:"shipyard",name:"Shipyard",on:"station",cost:20,time:60,max:1,desc:"Ships build 25% faster."},sensor:{id:"sensor",name:"Sensor Array",on:"station",cost:15,time:45,max:1,desc:"+30% detection radius; reveals strength of fleets heading here."},slab:{id:"slab",name:"Research Lab",on:"station",cost:30,time:75,max:1,desc:"Enables research at this node."},screen:{id:"screen",name:"Screen",on:"station",cost:22,time:60,max:1,desc:"+5 defence."}},_c={turret:4,bastion:8,screen:5},Fe=(n,e,t,i,s,r)=>({id:n,name:e,cd:t,target:i,at:s,desc:r}),dt={fleet:"#7fb2dc",eco:"#e3c565",def:"#8fc79a",intel:"#b39ad6",war:"#dd7a63",odd:"#e9a9c9"},Nt={},Qe=n=>Nt[n.id]=n;Qe({id:"admiral",name:"Admiral",tag:"Ad",color:dt.fleet,role:"Fleet mobility",starter:!0,passive:"The ship carrying the Admiral flies 15% faster.",loc:{speed:.15},active:Fe("fullburn","Full Burn",120,"self","ship","This ship gains +50% speed for 30 s.")});Qe({id:"engineer",name:"Engineer",tag:"En",color:dt.eco,role:"Construction",starter:!0,passive:"Construction here is 25% faster.",loc:{build:.25},active:Fe("repair","Emergency Repair",120,"self","node","Cut 25 s off the current build and fully restore natural defence.")});Qe({id:"quartermaster",name:"Quartermaster",tag:"Qm",color:dt.eco,role:"Economy",starter:!0,passive:"Mines here produce 20% more.",loc:{mine:.2},active:Fe("surge","Surge Mining",180,"self","planet","+50% mine output here for 60 s.")});Qe({id:"scout",name:"Scout",tag:"Sc",color:dt.intel,role:"Intelligence",starter:!0,passive:"This node sees 30% further.",loc:{fov:.3},active:Fe("deepscan","Deep Scan",90,"node","any","Fully identify one detected node for 60 s.")});Qe({id:"tactician",name:"Tactician",tag:"Ta",color:dt.war,role:"Combat",starter:!0,passive:"Attacks from this ship gain +1 strength per 8 Drones (max +4).",loc:{atkPer8:4},active:Fe("flank","Flank",180,"self","ship","This ship's next attack ignores natural defence.")});Qe({id:"sentinel",name:"Sentinel",tag:"Se",color:dt.def,role:"Defence",passive:"+3 defence at this node.",loc:{def:3},active:Fe("lockdown","Lockdown",150,"self","node","+6 defence here for 45 s.")});Qe({id:"saboteur",name:"Saboteur",tag:"Sb",color:dt.intel,role:"Disruption",passive:"Attacks from this ship face 25% weaker structures.",loc:{structHalf:.25},active:Fe("sabotage","Sabotage",180,"enemy","any","Freeze all construction and Drone production at an identified enemy node for 45 s.")});Qe({id:"diplomat",name:"Diplomat",tag:"Di",color:dt.eco,role:"Neutral expansion",passive:"Attacks on neutral nodes from this ship face 3 less defence.",loc:{vsNeutral:3},active:Fe("parley","Parley",150,"neutral","any","An identified neutral node loses 5 defence for 60 s.")});Qe({id:"scientist",name:"Scientist",tag:"Sn",color:dt.intel,role:"Research",passive:"Research here is 25% faster.",loc:{research:.25},active:Fe("breakthrough","Breakthrough",180,"self","node","Add 30 s of progress to the research running here.")});Qe({id:"medic",name:"Medic",tag:"Me",color:dt.def,role:"Specialist protection",passive:"Once per 180 s, when this location falls its specialists escape home instead of being captured.",loc:{medic:1},active:Fe("extraction","Extraction",240,"self","any","Every specialist at this location returns to your home station instantly.")});Qe({id:"pirate",name:"Pirate",tag:"Pi",color:dt.war,role:"Interception",passive:"You always see the strength of enemy fleets in detection range.",glob:{sigint:1},active:Fe("ambush","Ambush",150,"self","node","The next enemy fleet to arrive here within 90 s loses 30% of its Drones first.")});Qe({id:"inquisitor",name:"Inquisitor",tag:"In",color:dt.odd,role:"Prisoners",passive:"Each prisoner held anywhere yields +1.5 Ultanium/min.",glob:{prisonInc:1.5},active:Fe("convert","Convert",240,"self","node","Turn one prisoner held here to your side over 60 s. Lost if the node falls.")});Qe({id:"foreman",name:"Foreman",tag:"Fo",color:dt.war,role:"Drone production",passive:"Drone batches here are 2 larger.",loc:{batch:2},active:Fe("conscript","Conscript",180,"self","node","Add 6 Drones here immediately.")});Qe({id:"cartographer",name:"Cartographer",tag:"Ca",color:dt.fleet,role:"Navigation",passive:"The ship carrying the Cartographer can be redirected once per flight.",loc:{redirect:1},active:Fe("chart","Chart",180,"self","any","Identify every node within 160 units for 40 s.")});Qe({id:"reclaimer",name:"Reclaimer",tag:"Rc",color:dt.eco,role:"Salvage",passive:"Battles won by this ship yield 1 Ultanium per enemy Drone destroyed.",loc:{salvage:1},active:Fe("strip","Strip Mine",180,"self","planet","Gain 20 Ultanium; mines here go offline for 60 s.")});Qe({id:"ghost",name:"Ghost",tag:"Gh",color:dt.intel,role:"Stealth",passive:"The ship carrying the Ghost is unseen: the enemy sends no reinforcements against it.",loc:{stealth:1},active:Fe("smoke","Smoke",300,"self","node","Every enemy fleet currently flying to this node turns back.")});Qe({id:"siegebreaker",name:"Siegebreaker",tag:"Sg",color:dt.war,role:"Siege",passive:"Attacks from this ship ignore turrets, screens and bastions.",loc:{ignStruct:1},active:Fe("breach","Breach",180,"ident","any","An identified node loses all natural defence and cannot recharge for 60 s.")});Qe({id:"martyr",name:"Martyr",tag:"Ma",color:dt.def,role:"Attrition",passive:"If this node falls, half of the attacker's survivors die.",loc:{martyr:1},active:Fe("laststand","Last Stand",240,"self","node","Drones here count double on defence for 30 s, then a quarter of them are lost.")});Qe({id:"echo",name:"Echo",tag:"Ec",color:dt.odd,role:"Amplifier",passive:"Doubles the passive of the first other specialist at this location.",loc:{},active:Fe("reprise","Reprise",240,"self","any","Reset the ability cooldowns of every other specialist here.")});Qe({id:"broker",name:"Broker",tag:"Br",color:dt.eco,role:"Deals",passive:"Ships cost 25% less and ransoms pay double.",glob:{shipCost:.25,ransom:1},active:Fe("bribe","Bribe",200,"neutral","any","Buy an identified neutral node of strength 14 or less for 2 Ultanium per point. No battle.")});Qe({id:"smuggler",name:"Smuggler",tag:"Sm",color:dt.fleet,role:"Logistics",passive:"This ship launches with no loading delay, and you may fly to remembered nodes outside detection.",loc:{noLoad:1},glob:{remember:1},active:Fe("fence","Fence",240,"self","any","Gain 2 Ultanium for every node you own.")});Qe({id:"castellan",name:"Castellan",tag:"Cs",color:dt.def,role:"Fortification",passive:"Natural defence here is +3 and recharges three times as fast.",loc:{natMax:3,natRegen:2},active:Fe("rampart","Rampart",120,"self","node","Restore natural defence here to full.")});Qe({id:"recruiter",name:"Recruiter",tag:"Rt",color:dt.war,role:"Manpower",passive:"Your global Drone cap is 15 higher.",glob:{droneCap:15},active:Fe("levy","Levy",240,"self","any","Every station you own gains 3 Drones.")});Qe({id:"oracle",name:"Oracle",tag:"Or",color:dt.intel,role:"Foresight",passive:"Coalition offensives are announced with their target.",glob:{warn:1},active:Fe("foresight","Foresight",300,"self","any","Set Coalition mobilization back by 10% of a stage.")});Qe({id:"vanguard",name:"Vanguard",tag:"Va",color:dt.war,role:"Assault",passive:"Attacks won by this ship keep 20% more survivors.",loc:{surv:.2},active:Fe("charge","Charge",150,"self","ship","This ship's next attack gains +5 strength.")});Qe({id:"navigator",name:"Navigator",tag:"Na",color:dt.fleet,role:"Launch control",passive:"Ships launched from this node fly 20% faster.",loc:{launchSpeed:.2},active:Fe("slingshot","Slingshot",240,"self","node","The next ship launched from here within 30 s flies at 2.5x speed for 40 s.")});Qe({id:"prospector",name:"Prospector",tag:"Pr",color:dt.eco,role:"Extraction",passive:"This planet has +1 mine slot and +3 Ultanium/min capacity.",loc:{mineSlots:1,cap:3},active:Fe("vein","Strike Vein",240,"self","planet","Gain 25 Ultanium.")});Qe({id:"ironmonger",name:"Ironmonger",tag:"Im",color:"#c98a3c",role:"Ferrum signature",sig:"ferrum",passive:"Structures at this node give 50% more defence.",loc:{structDef:.5},active:Fe("fortify","Fortify",240,"self","node","Build a free Turret (station) or Shield Generator (planet) here instantly.")});Qe({id:"berserker",name:"Berserker",tag:"Bs",color:"#e0524d",role:"Crimson signature",sig:"crimson",passive:"Attacks from this ship are 20% stronger.",loc:{atkPct:.2},active:Fe("bloodrush","Bloodrush",200,"self","ship","This ship's next attack is +40% stronger but keeps 30% fewer survivors.")});Qe({id:"lens",name:"Lens",tag:"Ln",color:"#e8d36a",role:"Lumen signature",sig:"lumen",passive:"Lances here destroy 15% of any attacking fleet before battle.",loc:{preKill:.15},active:Fe("focus","Focus",200,"self","node","Lances here destroy a further 30% of attackers for 45 s.")});Qe({id:"phantom",name:"Phantom",tag:"Ph",color:"#9b6bd6",role:"Veil signature",sig:"veil",passive:"All of your fleets fly unseen.",glob:{stealth:1},active:Fe("raidA","Knife in the Dark",240,"ident","any","An identified node loses 25% of its Drones.")});Qe({id:"wayfinder",name:"Wayfinder",tag:"Wf",color:"#5aa9e6",role:"Drift signature",sig:"drift",passive:"All of your ships fly 15% faster.",glob:{speed:.15},active:Fe("warp","Fold",240,"self","ship","This ship instantly covers half of its remaining distance.")});Qe({id:"warlord",name:"Warlord",tag:"W",color:"#ffffff",role:"Faction leader",passive:"+5 defence at the capital.",loc:{def:5}});Qe({id:"archon",name:"Archon",tag:"A",color:"#ff5fa2",role:"Coalition Commander",passive:"+8 defence at the Citadel.",loc:{def:8}});const pf=Object.values(Nt).filter(n=>!n.sig&&n.id!=="warlord"&&n.id!=="archon").map(n=>n.id),mf=Object.values(Nt).filter(n=>n.starter).map(n=>n.id),Xi={marshal:{id:"marshal",name:"Marshal",blurb:"Leads from the front.",passive:"Attacks from the Commander's ship are 15% stronger.",loc:{atkPct:.15},a:Fe("decisive","Decisive Strike",180,"self","ship","This ship's next attack is +30% stronger."),b:Fe("rally","Rally",240,"self","any","Add 8 Drones at the Commander's location.")},pathfinder:{id:"pathfinder",name:"Pathfinder",blurb:"Controls tempo and information.",passive:"Commander's ship is 20% faster and can be redirected; their node sees 25% further.",loc:{speed:.2,redirect:1,fov:.25},a:Fe("slipstream","Slipstream",150,"self","ship","This ship flies at double speed for 40 s."),b:Fe("sweep","Survey Sweep",200,"self","any","Identify every node within 200 units for 45 s.")},warden:{id:"warden",name:"Warden",blurb:"Keeps forces alive.",passive:"+4 defence and double natural-defence recharge at the Commander's node.",loc:{def:4,natRegen:1},a:Fe("aegis","Aegis",180,"self","node","+10 defence here for 45 s."),b:Fe("recall","Recall",300,"self","any","The Commander and every specialist with them return home instantly.")},industrialist:{id:"industrialist",name:"Industrialist",blurb:"Builds a stronger empire.",passive:"Mines +20% and construction +30% at the Commander's node.",loc:{mine:.2,build:.3},a:Fe("crash","Crash Program",200,"self","node","Finish the current build here instantly."),b:Fe("windfall","Windfall",240,"self","any","Gain 3 Ultanium for every planet you own.")},corsair:{id:"corsair",name:"Corsair",blurb:"Lives off the enemy.",passive:"Commander's ship salvages 1 Ultanium per enemy Drone destroyed and keeps 15% more survivors.",loc:{salvage:1,surv:.15},a:Fe("raid","Raid",200,"ident","any","An identified node loses 30% of its Drones."),b:Fe("pressgang","Press-gang",240,"self","any","Gain 20% more Drones at the Commander's location (max 10).")},savant:{id:"savant",name:"Savant",blurb:"Wins with ideas.",passive:"Research +40% at the Commander's node; all ability cooldowns 15% shorter.",loc:{research:.4},a:Fe("insight","Insight",240,"self","any","Reset the cooldowns of every other specialist here."),b:Fe("eureka","Eureka",200,"self","node","Add 60 s of progress to the research running here.")}},gf={savant:{cd:.15}},Bd=[{id:"ironwill",name:"Iron Will",desc:"Rescue window +45 s.",glob:{rescue:45}},{id:"drill",name:"Drillmaster",desc:"Drone batches at the Commander's station are 2 larger.",loc:{batch:2}},{id:"march",name:"Forced March",desc:"Commander's ship +20% speed.",loc:{speed:.2}},{id:"logi",name:"Logistician",desc:"Global Drone cap +20.",glob:{droneCap:20}},{id:"tithe",name:"Tithe",desc:"+3 Ultanium/min.",glob:{incomeFlat:3}},{id:"hard",name:"Hardliner",desc:"+4 defence at the Commander's node.",loc:{def:4}},{id:"shock",name:"Shock Tactics",desc:"Commander's attacks +4 strength.",loc:{atk:4}},{id:"mentor",name:"Mentor",desc:"All ability cooldowns 15% shorter.",glob:{cd:.15}},{id:"scholar",name:"Scholar",desc:"All research 20% faster.",glob:{research:.2}},{id:"survivor",name:"Survivor",desc:"Commander's attacks keep 25% more survivors.",loc:{surv:.25}},{id:"farsight",name:"Far Sight",desc:"All your nodes see 15% further.",glob:{fov:.15}},{id:"requisition",name:"Requisition",desc:"Ships cost 30% less.",glob:{shipCost:.3}},{id:"entourage",name:"Entourage",desc:"Nodes and ships hold one more specialist.",glob:{slots:1}},{id:"sapper",name:"Sapper",desc:"Commander's attacks ignore natural defence.",loc:{ignNat:1}},{id:"magnate",name:"Magnate",desc:"All mines +10%.",glob:{mine:.1}}],ti={},Ye=(n,e,t,i,s)=>ti[n]={id:n,name:e,rarity:t,desc:i,mods:s};Ye("extractor","Deep-Core Extractor","common","All mines +12%.",{mine:.12});Ye("foundry","Drone Foundry Matrix","common","Drone batches are 1 larger.",{batch:1});Ye("surveyor","Quantum Surveyor","common","All nodes see 20% further.",{fov:.2});Ye("propulsion","Emergency Propulsion Core","common","All ships +12% speed.",{speed:.12});Ye("salvage","Salvage Protocol","common","Winning attacks yield 0.5 Ultanium per enemy Drone destroyed.",{salvage:.5});Ye("scaffold","Modular Scaffolds","common","Construction 25% faster.",{build:.25});Ye("reserve","Reserve Barracks","common","Global Drone cap +20.",{droneCap:20});Ye("bulkhead","Hardened Bulkheads","common","+1 defence at every node.",{def:1});Ye("archive","Field Archive","common","Research 25% faster.",{research:.25});Ye("ledger","Ration Ledger","common","+3 Ultanium/min.",{incomeFlat:3});Ye("clamps","Quick-Load Clamps","common","Ships launch with no loading delay.",{noLoad:1});Ye("mirror","Signal Mirror","common","Coalition offensives are announced with their target.",{warn:1});Ye("adaptive","Adaptive Shield Network","uncommon","Nodes you capture gain +6 defence for 60 s.",{capShield:6});Ye("matrix","Specialist Command Matrix","uncommon","Ability cooldowns 20% shorter.",{cd:.2});Ye("lantern","Ghost Lanterns","uncommon","Unmanned scouts survive and fly home.",{scoutReturn:1});Ye("warchest","War Chest","uncommon","Gain 6 Ultanium whenever you capture a node.",{capUlt:6});Ye("phalanx","Phalanx Doctrine","uncommon","All attacks 8% stronger.",{atkPct:.08});Ye("titheengine","Tithe Engine","uncommon","Ransoms pay double; each prisoner yields +1 Ultanium/min.",{ransom:1,prisonInc:1});Ye("yards","Overclocked Yards","uncommon","Ships cost 30% less and build 30% faster.",{shipCost:.3,shipSpeed:.3});Ye("lattice","Regrowth Lattice","uncommon","Natural defence +2 and recharges twice as fast.",{natRegen:1,natMax:2});Ye("charts","Cartel Charts","uncommon","You may fly to remembered nodes outside detection range.",{remember:1});Ye("cadre","Veteran Cadre","uncommon","Winning attacks keep 15% more survivors.",{surv:.15});Ye("budget","Black Budget","uncommon","Research costs 30% less.",{techCost:.3});Ye("charter","Bulwark Charter","uncommon","Structures give 25% more defence.",{structDef:.25});Ye("sigil","Tiebreaker Sigil","rare","You win tied battles when attacking.",{ties:1});Ye("phoenix","Phoenix Clause","rare","Once every 180 s, a node capture refunds the Drones it cost.",{refund:180});Ye("chair","Fourth Chair","rare","Nodes and ships hold one more specialist.",{slots:1});Ye("crown","Hollow Crown","rare","Commander rescue window +90 s.",{rescue:90});Ye("stillness","Stillness Engine","rare","Coalition mobilization is 25% slower.",{mobSlow:.25});Ye("twin","Twin Minds","rare","The Commander's passive effects count twice.",{cmdDouble:1});Ye("lance","Null Lance","rare","Your attacks ignore natural defence.",{ignNat:1});Ye("hold","Bottomless Hold","rare","Every planet has +1 mine slot and +3 capacity.",{mineSlots:1,cap:3});Ye("edict","Conscription Edict","rare","Every node you own gains 1 Drone each minute.",{levy:60});Ye("seal","Oathbreaker's Seal","rare","You may recruit prisoners for 40 Ultanium without an Inquisitor.",{recruit:1});Ye("night","Long Night","rare","All of your fleets fly unseen.",{stealth:1});Ye("choir","Siege Choir","rare","Your attacks face structures at half strength.",{structHalf:.5});const _f=[0,30,48,70],ms=[0,90,150,210],kd=[0,2,3,4],xt={},Jt=(n,e,t,i,s,r,a)=>xt[n]={id:n,name:e,branch:t,tier:i,pre:s,desc:r,mods:a};Jt("extraction","Advanced Extraction","Industry",1,void 0,"Mines +15%.",{mine:.15});Jt("automation","Industrial Automation","Industry",2,"extraction","Mines no longer need Drones to operate.",{noOps:1});Jt("deepcore","Deep-Core Drilling","Industry",3,"automation","Planet capacity +25% and +1 mine slot.",{capPct:.25,mineSlots:1});Jt("coord","Combat Coordination","Military",1,void 0,"Attacks 10% stronger.",{atkPct:.1});Jt("fort","Fortification Systems","Military",2,"coord","Unlocks the Bastion; structures give 25% more defence.",{unlockBastion:1,structDef:.25});Jt("siege","Siege Doctrine","Military",3,"fort","Attacks face structures at half strength.",{structHalf:.5});Jt("engines","Improved Engines","Navigation",1,void 0,"Ships +15% speed.",{speed:.15});Jt("sensors","Long-Range Sensors","Navigation",2,"engines","All nodes see 20% further.",{fov:.2});Jt("reroute","Slipstream Rerouting","Navigation",3,"sensors","Any ship can be redirected once per flight.",{redirect:1});Jt("sigint","Signal Analysis","Intelligence",1,void 0,"See the strength of every detected enemy fleet.",{sigint:1});Jt("recon","Recon Drones","Intelligence",2,"sigint","Unmanned scouts survive and fly home.",{scoutReturn:1});Jt("deepcover","Deep Cover","Intelligence",3,"recon","Offensives are announced with their target; mobilization 15% slower.",{warn:1,mobSlow:.15});Jt("training","Specialist Training","Command",1,void 0,"Ability cooldowns 20% shorter.",{cd:.2});Jt("protocols","Command Protocols","Command",2,"training","Commander gains 50% more experience; rescue window +30 s.",{xp:.5,rescue:30});Jt("integration","Command Integration","Command",3,"protocols","Nodes and ships hold one more specialist.",{slots:1});const zn={ferrum:{id:"ferrum",name:"Ferrum Directorate",color:"#c98a3c",warlord:"Overseer Kharn",sig:"ironmonger",desc:"Fortress industry. Slow to attack, expensive to dislodge.",tell:"+2 defence everywhere; builds turrets and shields relentlessly.",mods:{def:2,build:.3},ai:{aggr:.6,expand:150,react:.9,target:"weak",build:{turret:5,shield:5,screen:3,mine:3,gen:3,barracks:1}},techs:["fort","extraction","automation","siege"],specs:["sentinel","castellan","engineer"]},crimson:{id:"crimson",name:"Crimson Warhost",color:"#d2604a",warlord:"Warlord Ashka",sig:"berserker",desc:"Wave aggression. Thin defences, constant pressure.",tell:"Drones produced 35% faster; attacks the nearest target often.",mods:{prod:.35,atkPct:.1},ai:{aggr:1.4,expand:110,react:.4,target:"near",build:{barracks:6,shipyard:3,turret:1,mine:2,gen:2,dock:1}},techs:["coord","engines","siege","training"],specs:["foreman","vanguard","tactician"]},lumen:{id:"lumen",name:"Lumen Technocracy",color:"#e3c565",warlord:"Prime Calculator Ione",sig:"lens",desc:"Lance batteries thin every attacking fleet before it lands.",tell:"Destroys 15% of attackers before battle; gains two technologies per stage.",mods:{preKill:.15,natMax:3},ai:{aggr:.8,expand:170,react:.7,target:"weak",build:{shield:4,sensor:2,turret:2,mine:3,gen:3,screen:2}},techs:["sigint","fort","coord","engines","siege","extraction","training","sensors"],specs:["scientist","sentinel","scout"]},veil:{id:"veil",name:"Veil Syndicate",color:"#9a7cc4",warlord:"The Whisper",sig:"phantom",desc:"Unseen fleets that hunt your specialists.",tell:"Fleets are invisible until inside full-intelligence range; targets nodes holding specialists.",mods:{stealth:1,speed:.1},ai:{aggr:1,expand:160,react:.6,target:"spec",build:{sensor:3,turret:2,barracks:3,mine:2,gen:2,shield:1}},techs:["engines","coord","sigint","training"],specs:["saboteur","ghost","pirate"]},drift:{id:"drift",name:"Drift Clans",color:"#6ea6d6",warlord:"Clanmother Sura",sig:"wayfinder",desc:"Fast nomads who swallow neutral space.",tell:"Ships 40% faster; expands into neutral territory twice as often.",mods:{speed:.4},ai:{aggr:1.1,expand:70,react:.8,target:"near",build:{dock:2,shipyard:4,barracks:3,mine:3,gen:3,turret:1}},techs:["engines","sensors","coord","extraction"],specs:["admiral","navigator","cartographer"]}},qi={anvil:{id:"anvil",name:"Archon Vael",title:"the Anvil",desc:"Citadel Aegis layers are 50% stronger and its Drones are produced 40% faster.",mods:{aegisPct:.5,prod:.4},pmods:{}},tide:{id:"tide",name:"Archon Seraph",title:"the Tide",desc:"Every Coalition offensive commits 30% more Drones.",mods:{offBig:.3},pmods:{}},silence:{id:"silence",name:"Archon Null",title:"the Silence",desc:"Your specialist cooldowns are 30% longer. Coalition fleets fly unseen.",mods:{stealth:1},pmods:{cd:-.3}}},Cn={},xn=(n,e,t,i,s)=>Cn[n]={id:n,name:e,on:t,text:i,choices:s};xn("lab","Abandoned Research Facility","station","Sealed laboratories, still powered. The archive doors are marked with a hazard glyph nobody recognises.",[{label:"Restore the facility",desc:"Gain a free technology.",ult:25,fx:[["tech"]]},{label:"Salvage it",desc:"Gain 35 Ultanium.",fx:[["ult",35]]},{label:"Open the restricted archive",desc:"Choose an uncommon relic. Automata will attack this node with 14 Drones in 40 s.",fx:[["relic","uncommon"],["ambush",14]]},{label:"Let the Scientist decode it",desc:"Free technology and a common relic.",req:"scientist",fx:[["tech"],["relic","common"]]}]);xn("fortress","Ancient Fortress","any","The guns are silent but the targeting grid still tracks your ship.",[{label:"Reactivate the defences",desc:"Hold this node for 90 s with 10 Drones to gain a Turret or Shield here and an uncommon relic.",fx:[["hold",90,10,[["build","def"],["relic","uncommon"]]]]},{label:"Strip the armoury",desc:"Gain 12 Drones here.",fx:[["drones",12]]},{label:"Engineer bypass",desc:"Gain the structure and a common relic at once.",req:"engineer",fx:[["build","def"],["relic","common"]]}]);xn("stranded","Stranded Specialists","any","A crippled lifeboat hails you. Its passengers are willing to work for passage.",[{label:"Take one aboard",desc:"Choose one of three specialists.",fx:[["spec"]]},{label:"Sell them the fuel",desc:"Gain 30 Ultanium.",fx:[["ult",30]]}]);xn("energy","Unstable Energy Source","planet","The crust hums. Readings climb while you watch.",[{label:"Stabilise it",desc:"Hold for 75 s with 8 Drones to choose a rare relic.",ult:20,fx:[["hold",75,8,[["relic","rare"]]]]},{label:"Tap it now",desc:"Gain 50 Ultanium; lose 6 Drones here.",drones:6,fx:[["ult",50]]},{label:"Walk away",desc:"Nothing happens.",fx:[]}]);xn("derelict","Derelict Fleet","station","Dozens of hulls drift in formation. Some of them are warm.",[{label:"Repair a hull",desc:"Gain a ship here.",ult:15,fx:[["ship"]]},{label:"Wake the crews",desc:"Gain 16 Drones here. Automata attack with 12 Drones in 40 s.",fx:[["drones",16],["ambush",12]]},{label:"Reclaimer strips everything",desc:"Gain a ship and 30 Ultanium.",req:"reclaimer",fx:[["ship"],["ult",30]]}]);xn("settlement","Independent Settlement","planet","Farmers, mostly. They have seen the Coalition's recruiters and they do not like them.",[{label:"Trade",desc:"Gain 25 Ultanium.",fx:[["ult",25]]},{label:"Arm them",desc:"Gain 10 Drones here.",ult:10,fx:[["drones",10]]},{label:"Sign a charter",desc:"Choose a common relic.",ult:20,fx:[["relic","common"]]},{label:"Diplomat brokers an alliance",desc:"Gain 10 Drones and a common relic.",req:"diplomat",fx:[["drones",10],["relic","common"]]}]);xn("expedition","Lost Research Expedition","any","Their last transmission repeats every forty seconds. It ends mid-word.",[{label:"Rescue the team",desc:"Choose one of three specialists.",drones:5,fx:[["spec"]]},{label:"Recover the data",desc:"Commander gains 8 experience.",fx:[["xp",8]]},{label:"Follow the signal",desc:"Choose a rare relic. Automata attack with 20 Drones in 40 s.",fx:[["relic","rare"],["ambush",20]]}]);xn("platform","Automated Weapons Platform","station","It has been guarding nothing for three hundred years, and it is very good at it.",[{label:"Capture it",desc:"Gain a Turret here.",fx:[["build","def"]]},{label:"Reprogram it",desc:"+8 defence here for 5 minutes and a common relic.",ult:15,fx:[["buff","def",8,300],["relic","common"]]},{label:"Scrap it",desc:"Gain 28 Ultanium.",fx:[["ult",28]]}]);xn("beacon","Ancient Navigation Beacon","any","One pulse per minute, aimed at a point deep inside Coalition space.",[{label:"Decode it",desc:"Reveal every node within 260 units.",fx:[["reveal",260]]},{label:"Overload it",desc:"Set Coalition mobilization back by a third of a stage.",ult:20,fx:[["mobil",-.33]]},{label:"Cartographer triangulates",desc:"Reveal the whole map.",req:"cartographer",fx:[["reveal",2e3]]}]);xn("forge","The Ancient Forge","planet","A foundry the size of a continent, cold for an age. The ignition sequence is still on the console.",[{label:"Restore the Forge",desc:"Hold for 120 s with 14 Drones to choose a rare relic and gain 15 Drones.",ult:30,fx:[["hold",120,14,[["relic","rare"],["drones",15]]]]},{label:"Melt it down",desc:"Gain 45 Ultanium.",fx:[["ult",45]]}]);xn("vault","Sealed Vault","any","Three locks. Your crew can force one of them.",[{label:"The armoury",desc:"Choose an uncommon relic.",drones:6,fx:[["relic","uncommon"]]},{label:"The treasury",desc:"Gain 40 Ultanium.",fx:[["ult",40]]},{label:"The war room",desc:"Commander gains 10 experience.",fx:[["xp",10]]}]);xn("deserters","Coalition Deserters","any","A squadron in Coalition colours powers down its weapons and asks for terms.",[{label:"Enlist them",desc:"Gain 14 Drones here. Mobilization advances 15% of a stage.",fx:[["drones",14],["mobil",.15]]},{label:"Debrief them",desc:"Reveal every node within 200 units and set mobilization back 10%.",fx:[["reveal",200],["mobil",-.1]]},{label:"Inquisitor takes their officers",desc:"Choose one of three specialists.",req:"inquisitor",fx:[["spec"]]}]);function Ot(n){n.rng=n.rng+1831565813|0;let e=n.rng;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}const sa=(n,e,t)=>e+Math.floor(Ot(n)*(t-e+1)),rn=(n,e,t)=>e+Ot(n)*(t-e),gs=(n,e)=>e[Math.floor(Ot(n)*e.length)];function ra(n,e){const t=e.slice();for(let i=t.length-1;i>0;i--){const s=Math.floor(Ot(n)*(i+1));[t[i],t[s]]=[t[s],t[i]]}return t}function Hi(n,e,t){return ra(n,e).slice(0,t)}function Kt(n,e,t=1){if(e)for(const i in e)n[i]=(n[i]||0)+e[i]*t}const Ra={};for(const n of Bd)Ra[n.id]=n;const Mo=n=>Ra[n],vc=new WeakMap;function Mt(n,e){const t=n.modV;let i=vc.get(n);if((!i||i.stamp!==t)&&(i={stamp:t,m:{}},vc.set(n,i)),i.m[e])return i.m[e];const s={},r=n.sides[e];if(r){for(const a of r.relics)Kt(s,ti[a]?.mods);for(const a of r.techs)Kt(s,xt[a]?.mods);r.kind==="faction"&&(Kt(s,zn[r.fac].mods),r.broken&&(s.prod=(s.prod||0)-.6)),r.kind==="archon"&&Kt(s,qi[r.fac].mods),r.kind==="player"&&Kt(s,qi[n.sides[n.archon].fac].pmods);for(const a of n.specs)if(!(a.owner!==e||a.held)&&(Kt(s,Nt[a.def].glob),a.cmd)){Kt(s,gf[a.cmd.arch]);for(const o of a.cmd.perks)Kt(s,Ra[o]?.glob)}}return i.m[e]=s,s}function xc(n,e){const t={};if(Kt(t,Nt[e.def].loc),e.cmd){Kt(t,Xi[e.cmd.arch].loc);for(const i of e.cmd.perks)Kt(t,Ra[i]?.loc);Mt(n,e.owner).cmdDouble&&Kt(t,t)}return t}function bl(n,e,t,i){const s={};Kt(s,Mt(n,e));let r=!1,a=null;for(const o of t){const l=n.specs[o];!l||l.owner!==e||l.held||(l.def==="echo"?r=!0:!a&&!l.cmd&&(a=l),Kt(s,xc(n,l)))}r&&a&&Kt(s,xc(n,a));for(const o of i)o.until>n.t&&(s[o.k]=(s[o.k]||0)+o.v);return s}const un=(n,e)=>bl(n,e.owner,e.specs,e.buffs),Qi=(n,e)=>bl(n,e.owner,e.specs,e.buffs),Je=(n,e)=>Math.hypot(n.x-e.x,n.y-e.y),Zt=(n,e)=>n.ships.find(t=>t.id===e),Vi=1e9;function it(n,e,t="info",i=-1){n.log.push({t:n.t,msg:e,kind:t,node:i}),n.log.length>150&&n.log.shift()}function oi(n,e){const t=n.sides[e];return t?t.kind==="player"?"You":t.kind==="faction"?zn[t.fac].name:qi[t.fac].name:e===0?"Neutral":"Automata"}function Mi(n,e){const t=n.sides[e];return t?t.kind==="player"?"#6cc5a0":t.kind==="faction"?zn[t.fac].color:"#e07aa0":"#9aa3ad"}function Es(n,e,t,i){const s={id:n.specs.length,def:e,owner:t,node:i,ship:-1,held:0,cd:{},cmd:null,shield:0};return n.specs.push(s),n.nodes[i].specs.push(s.id),n.modV++,s}function _r(n,e){if(e.node>=0){const t=n.nodes[e.node];t.specs=t.specs.filter(i=>i!==e.id),t.prisoners=t.prisoners.filter(i=>i!==e.id)}if(e.ship>=0){const t=Zt(n,e.ship);t&&(t.specs=t.specs.filter(i=>i!==e.id))}e.node=-1,e.ship=-1}function Ti(n,e,t,i=0){_r(n,e),e.node=t.id,e.held=i,(i?t.prisoners:t.specs).push(e.id),n.modV++}function vf(n,e,t){_r(n,e),e.ship=t.id,t.specs.push(e.id)}const Ca=(n,e)=>ye.specSlots+(Mt(n,e).slots||0),Ri=n=>n.name||Nt[n.def].name;function Os(n,e){const t=n.nodes.filter(i=>i.owner===e);return t.length?t.find(i=>i.home||i.capital||i.citadel)||t.find(i=>i.kind==="station")||t[0]:null}function vr(n,e){let t=0;for(const i of n.nodes)i.owner===e&&(t+=i.drones);for(const i of n.ships)i.owner===e&&(t+=i.drones);return t}function Ls(n,e){const t=n.sides[e];if(!t)return Vi;const i=Mt(n,e).droneCap||0;return t.kind==="player"?ye.droneCap+i:t.capBase+14*(n.mob.stage+n.mob.surge)+i}function Pa(n,e){const i=1+(un(n,e).fov||0)+.25*(e.b.relay||0),s=e.kind==="planet"?ye.fovInner.planet[e.size]:ye.fovInner.station,r=e.kind==="planet"?ye.fovOuter.planet[e.size]:ye.fovOuter.station;return[s*i,r*i*(1+.3*(e.b.sensor||0))]}function Wn(n){const e=n.nodes.filter(t=>t.owner===Q).map(t=>({n:t,r:Pa(n,t)}));for(const t of n.nodes){let i=0;if(t.owner===Q)i=2;else{for(const r of e){const a=Je(t,r.n);if(a<=r.r[0]){i=2;break}a<=r.r[1]&&(i=1)}i<2&&t.buffs.some(r=>r.k==="scan"&&r.until>n.t)&&(i=2)}n.vis[t.id]=i;const s=n.intel[t.id];i>s.seen&&(s.seen=i),i===2&&(s.t=n.t,s.snap={owner:t.owner,drones:t.drones,nat:t.nat,b:{...t.b},specs:t.specs.slice(),prisoners:t.prisoners.slice(),buffs:t.buffs.slice()})}}function La(n,e){if(e.owner===Q)return 2;const t=(Qi(n,e).stealth||0)>0||e.owner>1&&(Mt(n,n.archon).stealth||0)>0;let i=0;for(const s of n.nodes){if(s.owner!==Q)continue;const[r,a]=Pa(n,s),o=Je(e,s);if(o<=r)return 2;o<=a&&!t&&(i=1)}return i&&((Mt(n,Q).sigint||0)>0||e.to>=0&&n.nodes[e.to].owner===Q&&n.nodes[e.to].b.sensor)?2:i}function yl(n,e){if(n.vis[e.id]===2)return{live:!0,age:0,v:e};const t=n.intel[e.id];return t.snap?{live:!1,age:n.t-t.t,v:{...e,...t.snap}}:{live:!1,age:0,v:null}}function So(n,e,t){return ye.mineSlots[e.size]+((t||un(n,e)).mineSlots||0)}function lr(n,e,t){const i=t||un(n,e);return(e.kind==="planet"?ye.natBySize[e.size]+4*(e.b.shield||0):0)+(e.kind==="planet"&&i.natMax||0)}function El(n,e,t){const i=t||un(n,e),s=n.sides[e.owner],r={mines:0,powered:0,on:0,out:0,cap:0,resNeed:0,resOn:!1,short:0};let a=e.drones;const o=(e.b.lab||0)+(e.b.slab||0)>0;if(e.research&&o&&s&&(r.resNeed=kd[xt[e.research].tier]),r.resNeed&&e.resFirst&&(r.resOn=a>=r.resNeed,r.resOn&&(a-=r.resNeed)),e.kind==="planet"){r.mines=Math.min(e.b.mine||0,So(n,e,i)),r.powered=Math.min(r.mines,(e.b.gen||0)*ye.minesPerGen),r.on=i.noOps?r.powered:Math.min(r.powered,a),i.noOps||(a-=r.on),i.offline&&(r.on=0);let c=0;for(let u=0;u<r.on;u++)c+=ye.mineBase*ye.sizeMult[e.size]*ye.mineDim[Math.min(u,4)];r.cap=(ye.capBySize[e.size]+(i.cap||0))*(1+(i.capPct||0)),r.out=Math.min(c*(1+(i.mine||0)),r.cap)}r.resNeed&&!e.resFirst&&(r.resOn=a>=r.resNeed);const l=(i.noOps?0:r.powered)+r.resNeed;return r.short=Math.max(0,l-e.drones),r}function xf(n,e){const t=n.sides[e];if(!t)return 0;const i=Mt(n,e);let s=(t.kind==="player"?ye.baseIncome:3)+(i.incomeFlat||0);for(const r of n.nodes)r.owner===e&&r.kind==="planet"&&(s+=El(n,r).out);return i.prisonInc&&(s+=i.prisonInc*n.specs.filter(r=>r.held===e).length),s}function aa(n,e){return(n.b[e]||0)+(n.lane&&n.lane.kind==="build"&&n.lane.id===e?1:0)+n.queue.filter(t=>t.kind==="build"&&t.id===e).length}function zd(n,e,t){return t==="mine"?So(n,e):t==="gen"?Math.ceil(So(n,e)/ye.minesPerGen):jt[t].max}function _s(n,e,t){const i=jt[t],s=n.sides[e.owner];return!i||!s?"Not available":i.on!==e.kind?"Wrong node type":i.tech&&!s.techs.includes(i.tech)?`Needs ${xt[i.tech].name}`:aa(e,t)>=zd(n,e,t)?"Maximum built":t==="mine"&&aa(e,"mine")>=aa(e,"gen")*ye.minesPerGen?"Needs another Generator":e.queue.length>=4?"Queue full":s.ult<i.cost?"Not enough Ultanium":null}function Gd(n,e){n.lane?n.queue.push(e):n.lane=e}function Ks(n,e,t){const i=_s(n,e,t);if(i)return i;const s=jt[t];return n.sides[e.owner].ult-=s.cost,Gd(e,{kind:"build",id:t,left:s.time,total:s.time,cost:s.cost}),null}function cr(n,e){return Math.round(ye.shipCost*(1-Math.min(.6,Mt(n,e).shipCost||0)))}function Hd(n,e){const t=n.sides[e.owner];if(!t||e.kind!=="station")return"Ships are built at stations";if(e.queue.length>=4)return"Queue full";const i=cr(n,e.owner);return t.ult<i?"Not enough Ultanium":(t.ult-=i,Gd(e,{kind:"ship",id:"ship",left:ye.shipTime,total:ye.shipTime,cost:i}),null)}function Mf(n,e,t){const i=t<0?e.lane:e.queue[t];i&&(n.sides[e.owner].ult+=i.cost,t<0?e.lane=e.queue.shift()||null:e.queue.splice(t,1))}function Qn(n,e,t){const i={id:n.nextId++,owner:e,seq:n.nextId++,at:t.id,from:t.id,to:-1,x:t.x,y:t.y,drones:0,specs:[],buffs:[],loadUntil:0,redirected:!1,back:!1,off:!1};return n.ships.push(i),i}function Ts(n){return n.kind==="planet"?99:1+(n.b.dock||0)}function li(n,e){if(e.at<0)return!1;const t=n.nodes[e.at];return t.kind==="planet"||e.owner!==Q?!0:n.ships.filter(s=>s.at===t.id&&s.owner===e.owner).sort((s,r)=>s.seq-r.seq).indexOf(e)<Ts(t)}function bo(n,e,t){return Math.round(_f[xt[t].tier]*(1-(Mt(n,e).techCost||0)))}function Tl(n,e){const t=n.sides[e];return Object.keys(xt).filter(i=>!t.techs.includes(i)&&(!xt[i].pre||t.techs.includes(xt[i].pre)))}function Sf(n,e,t){const i=n.sides[e.owner];if(!((e.b.lab||0)+(e.b.slab||0)))return"Needs a Research Lab";if(!Tl(n,e.owner).includes(t))return"Not available";if(n.nodes.some(s=>s.owner===e.owner&&s.id!==e.id&&s.research===t))return"Already being researched elsewhere";if(i.techProg[t]===void 0){const s=bo(n,e.owner,t);if(i.ult<s)return"Not enough Ultanium";i.ult-=s,i.techProg[t]=0}return e.research=t,null}function wl(n,e,t){const i=n.sides[e];if(!i.techs.includes(t)){i.techs.push(t),delete i.techProg[t],n.modV++;for(const s of n.nodes)s.owner===e&&s.research===t&&(s.research=null);e===Q?(n.stats.techs++,it(n,`Research complete: ${xt[t].name}`,"good")):it(n,`${oi(n,e)} fielded ${xt[t].name}`,"warn")}}function Al(n,e){if(!e.citadel)return 0;const t=n.factions.filter(i=>!n.sides[i].broken).length;return Math.round(t*ye.aegisPerLayer*(1+(Mt(n,n.archon).aegisPct||0)))}function Bs(n,e,t,i,s){const r=Math.min(.6,(s.preKill||0)+(s.ambush||0)),a=Math.floor(e*r),o=e-a,l=Math.floor(o*(t.atkPct||0)),c=(t.atk||0)+Math.min(t.atkPer8||0,Math.floor(o/8)),u=o+l+c,h=i.drones*(s.dbl?2:1),f=t.ignNat?0:Math.floor(i.nat);let m=0;for(const b in _c)m+=_c[b]*(i.b[b]||0);const _=t.ignStruct?0:Math.round(m*(1+(s.structDef||0))*(1-Math.min(.75,t.structHalf||0))),y=Math.round((s.def||0)-(i.owner===0&&t.vsNeutral||0)),d=Al(n,i),p=Math.max(0,h+f+_+y+d),v=u>p||u===p&&(t.ties||0)>0&&o>0;let E=0;return v&&(E=Math.max(1,Math.min(o,u-p)),E=Math.max(1,Math.min(o,Math.round(E*(1+(t.surv||0))))),s.martyr&&(E=Math.ceil(E/2))),{sent:e,preKilled:a,atk:u,def:p,win:v,surv:E,parts:{drones:o,pct:l,flat:c,garr:h,nat:f,struct:_,bonus:y,aegis:d}}}function Vd(n,e,t,i){const s=e.map(r=>n.specs[r]).find(r=>r.def==="medic"&&r.shield<=n.t&&!r.held);for(const r of e.slice()){const a=n.specs[r];if(s){const o=Os(n,a.owner);if(o&&o.id!==t.id){Ti(n,a,o);continue}}Ti(n,a,t,i||-1),a.owner===Q&&(n.stats.specsLost++,it(n,`${Ri(a)} was captured at ${t.name}`,"bad",t.id))}s&&(s.shield=n.t+180,s.owner===Q&&it(n,`The Medic got your specialists out of ${t.name}`,"good",t.id))}function Rl(n,e,t,i){if(e.specs.length)if(t)Vd(n,e.specs,t,i);else for(const s of e.specs.slice()){const r=n.specs[s],a=Os(n,r.owner);a?Ti(n,r,a):(_r(n,r),r.owner=-1)}n.ships=n.ships.filter(s=>s!==e),e.owner===Q&&n.stats.shipsLost++}function bf(n,e,t){const i=n.sides[e],s=zn[i.fac];i.broken=!0,n.modV++,n.mob.stage=Math.max(1,n.mob.stage-1),n.mob.prog=0,n.offs=n.offs.filter(a=>a.owner!==e),it(n,`${s.warlord} is your prisoner. The ${s.name} is broken and a Citadel Aegis layer falls.`,"good",t.id);const r=Es(n,s.sig,Q,t.id);it(n,`${Ri(r)} joins you from the ${s.name}.`,"good",t.id),Xd(n,"rare",t.id),Ll(n,10),n.stats.warlords++}function Wd(n,e,t,i,s){const r=e.owner,a=t.owner,o=e.drones;s.salvage&&n.sides[a]&&(n.sides[a].ult+=Math.round(s.salvage*o)),r!==0&&Vd(n,e.specs,e,a);for(const u of n.ships.filter(h=>h.at===e.id&&h.owner===r&&h!==t))Rl(n,u,e,a);for(const u of e.prisoners.slice()){const h=n.specs[u];h.owner===a?(Ti(n,h,e),a===Q&&it(n,`${Ri(h)} was rescued at ${e.name}`,"good",e.id)):h.held=a}if(r!==0&&e.kind==="station"){const u=Object.keys(e.b).filter(h=>h!=="dock"&&e.b[h]>0);if(u.length){const h=gs(n,u);e.b[h]--}}const l=e.capital&&n.sides[r]?.kind==="faction"&&!n.sides[r].broken;e.owner=a,e.drones=i.surv,e.nat=0,e.lane=null,e.queue=[],e.research=null,e.prod=0,e.hold=null,e.conv=null,e.buffs=[],t.at=e.id,t.to=-1,t.drones=0,t.x=e.x,t.y=e.y,t.buffs=[],t.seq=n.nextId++,t.off=!1;const c=n.sides[a];if(c){const u=Mt(n,a);u.refund&&n.t>=c.refundT&&(e.drones+=i.sent-i.surv,c.refundT=n.t+u.refund,a===Q&&it(n,"Phoenix Clause refunds your losses","good",e.id)),u.capShield&&e.buffs.push({k:"def",v:u.capShield,until:n.t+60}),u.capUlt&&(c.ult+=u.capUlt)}n.modV++,a===Q?(n.stats.captures++,it(n,`Captured ${e.name} with ${i.surv} Drones left`,"good",e.id),Ll(n,t.specs.includes(n.cmdSpec)?4:2),n.sides[r]&&(n.mob.prog=Math.max(0,n.mob.prog-ye.captureSetback)),l&&bf(n,r,e),e.offer&&(e.offer=!1,$d(n,e.id)),e.event&&n.pending.push({kind:"event",node:e.id,opts:[],title:Cn[e.event].name,event:e.event}),e.citadel&&(n.result="win",n.resultWhy=`${qi[n.sides[n.archon].fac].name} is your prisoner. The Coalition is finished.`)):r===Q&&(n.stats.nodesLost++,it(n,`${e.name} fell to ${oi(n,a)}`,"bad",e.id)),Wn(n)}function yf(n,e,t,i,s){let r=i.atk;if(!s.ignNat){const l=Math.min(e.nat,r);e.nat-=l,r-=l}r-=i.parts.struct+Math.max(0,i.parts.bonus+i.parts.aegis);const a=Math.max(0,Math.min(e.drones,Math.ceil(r/(i.parts.garr>e.drones?2:1))));e.drones-=a,t.owner===Q&&(it(n,`Attack on ${e.name} failed: ${i.atk} against ${i.def}`,"bad",e.id),n.stats.dronesLost+=t.drones),e.owner===Q&&it(n,`${e.name} held against ${oi(n,t.owner)} (${i.atk} against ${i.def})`,"good",e.id),t.drones=0,t.buffs=[];const o=n.nodes[t.from];if(e.owner===0&&n.sides[t.owner]){const l=o&&o.owner===t.owner?o:Os(n,t.owner);if(l){t.to=l.id,t.from=e.id,t.back=!0,t.x=e.x,t.y=e.y;return}}Rl(n,t,n.sides[e.owner]?e:null,e.owner)}function Ef(n,e){const t=n.nodes[e.to];if(e.x=t.x,e.y=t.y,t.owner===e.owner){e.at=t.id,e.to=-1,e.buffs=[],e.seq=n.nextId++,e.back=!1,e.off=!1;return}if(e.drones<=0){if(e.owner===Q&&!e.specs.length&&!e.back){t.buffs.push({k:"scan",v:1,until:n.t+20}),Wn(n);const a=n.nodes[e.from];if(Mt(n,Q).scoutReturn&&a.owner===Q){it(n,`Scout identified ${t.name} and is returning`,"info",t.id),e.to=a.id,e.from=t.id,e.back=!0;return}it(n,`Scout identified ${t.name} and was lost`,"info",t.id)}Rl(n,e,n.sides[t.owner]?t:null,t.owner);return}const i=Qi(n,e),s=un(n,t),r=Bs(n,e.drones,i,t,s);t.buffs=t.buffs.filter(a=>a.k!=="ambush"),e.owner===Q&&n.stats.battles++,r.win?(e.owner===Q&&(n.stats.dronesLost+=r.sent-r.surv),Wd(n,t,e,r,i)):yf(n,t,e,r,i)}function Da(n,e){return e.owner===Q||n.vis[e.id]>=1||(Mt(n,Q).remember||0)>0&&n.intel[e.id].seen>=1}function Cl(n,e){return ye.shipSpeed*Math.max(.3,1+(Qi(n,e).speed||0))}function Pl(n,e,t){return Je(e,t)/Cl(n,e)}function ki(n,e,t,i,s){if(e.at<0)return"Ship is in flight";if(e.loadUntil>0)return"Ship is loading";const r=n.nodes[e.at];if(t.id===r.id)return"Already here";if(r.owner!==e.owner)return"Not your node";if(e.owner===Q&&!Da(n,t))return"Target is not in detection range";const a=li(n,e);a||(i=e.drones,s=e.specs.slice());const o=r.drones+(a?e.drones:0);i=Math.max(0,Math.min(Math.floor(i),a?o:e.drones));const l=a?r.specs.concat(e.specs):e.specs.slice();s=s.filter(m=>l.includes(m));const c=Ca(n,e.owner);if(s.length>c)return`A ship carries at most ${c} specialists`;if(a){const m=l.filter(_=>!s.includes(_));if(m.length>c)return`Only ${c} specialists can stay at this node`;r.drones=o-i,e.drones=i;for(const _ of m)n.specs[_].ship===e.id&&Ti(n,n.specs[_],r);for(const _ of s)n.specs[_].ship!==e.id&&vf(n,n.specs[_],e)}const u=i>0||s.length>0;e.to=t.id,e.from=r.id,e.redirected=!1,e.back=!1,e.buffs=[];const h=un(n,r);h.launchSpeed&&e.buffs.push({k:"speed",v:h.launchSpeed,until:Vi}),h.sling&&(e.buffs.push({k:"speed",v:1.5,until:n.t+40}),r.buffs=r.buffs.filter(m=>m.k!=="sling"));const f=Qi(n,e);return e.loadUntil=n.t+(u&&!f.noLoad?ye.loadTime:.1),n.modV++,null}function Tf(n,e,t){return e.at>=0?"Ship is not in flight":e.redirected?"Already redirected this flight":Qi(n,e).redirect?e.owner===Q&&!Da(n,t)?"Target is not in detection range":(e.to=t.id,e.redirected=!0,null):"This ship cannot be redirected"}function Ll(n,e){const t=n.specs[n.cmdSpec];if(!(!t||!t.cmd))for(t.cmd.xp+=e*(1+(Mt(n,Q).xp||0));t.cmd.lvl<5&&t.cmd.xp>=ye.xpLevels[t.cmd.lvl];){t.cmd.lvl++,n.modV++;const i=Hi(n,Bd.filter(s=>!t.cmd.perks.includes(s.id)),3).map(s=>s.id);n.pending.push({kind:"perk",node:-1,opts:i,title:`Commander reached level ${t.cmd.lvl}`}),it(n,`Your Commander reached level ${t.cmd.lvl}`,"good")}}function $d(n,e){const t=new Set(n.specs.filter(s=>s.owner===Q).map(s=>s.def)),i=Hi(n,pf.filter(s=>!t.has(s)),3);if(!i.length){n.sides[Q].ult+=20;return}n.pending.push({kind:"spec",node:e,opts:i,title:`Residents of ${n.nodes[e].name}`})}function Xd(n,e,t){const i=n.sides[Q].relics,s=o=>Object.values(ti).filter(l=>l.rarity===o&&!i.includes(l.id)).map(l=>l.id),r=e==="rare"?"uncommon":"common";let a=Hi(n,s(e),e==="common"?3:2);if(a.length<3&&(a=a.concat(Hi(n,s(r).filter(o=>!a.includes(o)),3-a.length))),!a.length){n.sides[Q].ult+=30;return}n.pending.push({kind:"relic",node:t,opts:a,title:"Choose a relic"})}function qd(n,e,t){const i=n.sides[Q];for(const s of t)switch(s[0]){case"ult":i.ult+=s[1];break;case"drones":e.drones+=s[1];break;case"relic":Xd(n,s[1],e.id);break;case"tech":{const r=Tl(n,Q);r.length?wl(n,Q,gs(n,r)):i.ult+=30;break}case"ship":Qn(n,Q,e);break;case"spec":$d(n,e.id);break;case"xp":Ll(n,s[1]);break;case"buff":e.buffs.push({k:s[1],v:s[2],until:n.t+s[3]});break;case"mobil":n.mob.prog=Math.max(0,Math.min(.99,n.mob.prog+s[1]));break;case"hold":e.hold={until:n.t+s[1],total:s[1],need:s[2],fx:s[3],name:e.event?Cn[e.event].name:"Operation"};break;case"reveal":for(const r of n.nodes)Je(r,e)<=s[1]&&r.buffs.push({k:"scan",v:1,until:n.t+45});Wn(n);break;case"build":{const r=e.kind==="planet"?"shield":(e.b.turret||0)<jt.turret.max?"turret":"screen";e.b[r]=(e.b[r]||0)+1;break}case"ambush":{const r=Ot(n)*Math.PI*2,a=48,o={id:n.nextId++,owner:0,seq:n.nextId++,at:-1,from:e.id,to:e.id,x:e.x+Math.cos(r)*a,y:e.y+Math.sin(r)*a,drones:s[1],specs:[],buffs:[],loadUntil:0,redirected:!1,back:!1,off:!0};n.ships.push(o),it(n,`Automata are closing on ${e.name} with ${s[1]} Drones`,"warn",e.id);break}}}function Yd(n,e,t){return t.ult&&n.sides[Q].ult<t.ult?"Not enough Ultanium":t.drones&&e.drones<t.drones?"Not enough Drones here":t.req&&!e.specs.some(i=>n.specs[i].def===t.req&&n.specs[i].owner===Q)?`Needs your ${Nt[t.req].name} at this node`:null}function wf(n,e){const t=n.pending[0];if(!t)return"Nothing to choose";const i=n.sides[Q];if(t.kind==="event"){const r=n.nodes[t.node],a=Cn[t.event];if(e<0||r.owner!==Q||r.event!==t.event)return n.pending.shift(),null;const o=a.choices[e],l=Yd(n,r,o);return l||(o.ult&&(i.ult-=o.ult),o.drones&&(r.drones-=o.drones),n.pending.shift(),qd(n,r,o.fx),r.event=null,n.stats.events++,it(n,`${a.name}: ${o.label}`,"info",r.id),null)}const s=t.opts[e];if(s===void 0)return"Pick one";if(n.pending.shift(),t.kind==="draft"){const r=n.nodes[n.home],a=Es(n,s.base,Q,r.id);a.cmd={base:s.base,arch:s.arch,lvl:1,xp:0,perks:[]},a.name="Commander",n.cmdSpec=a.id}else if(t.kind==="spec"){const r=n.nodes[t.node].owner===Q?n.nodes[t.node]:Os(n,Q);if(r){const a=Es(n,s,Q,r.id);it(n,`${Ri(a)} joined at ${r.name}`,"good",r.id),n.stats.specs++}}else t.kind==="relic"?(i.relics.push(s),n.stats.relics++,it(n,`Relic claimed: ${ti[s].name}`,"good")):t.kind==="perk"&&n.specs[n.cmdSpec].cmd.perks.push(s);return n.modV++,null}function Af(n,e,t){if(e.held!==Q||e.node<0)return"Not your prisoner";if(e.def==="warlord"||e.def==="archon")return"Leaders cannot be ransomed or turned";const i=n.sides[Q],s=Mt(n,Q);return t?s.recruit?i.ult<ye.recruitCost?"Not enough Ultanium":(i.ult-=ye.recruitCost,Kd(n,e),null):"Needs an Inquisitor":(i.ult+=Math.round(ye.ransom*(1+(s.ransom||0))),_r(n,e),e.owner=-1,e.held=0,n.modV++,null)}function Kd(n,e){const t=n.nodes[e.node];if(n.specs.some(i=>i.owner===Q&&i.def===e.def)){n.sides[Q].ult+=25,_r(n,e),e.owner=-1,e.held=0,it(n,`A second ${Nt[e.def].name} had nothing to teach; they paid 25 Ultanium for passage`,"info");return}e.owner=Q,e.cd={},Ti(n,e,t),n.stats.specs++,it(n,`${Ri(e)} now works for you`,"good",t.id)}function Rf(n,e,t){t.kind==="build"?(e.b[t.id]=(e.b[t.id]||0)+1,e.owner===Q&&it(n,`${jt[t.id].name} finished at ${e.name}`,"info",e.id)):(Qn(n,e.owner,e),e.owner===Q&&it(n,`Ship launched from the yards at ${e.name}`,"info",e.id))}function Cf(n){const e=ye.dt;n.t+=e,n.tick++;const t={},i={};for(const r in n.sides)t[r]=vr(n,+r),i[r]=0;for(const r of n.nodes){if(r.buffs.length){const h=r.buffs.filter(f=>f.until<=n.t);h.length&&(h.some(f=>f.k==="dbl")&&(r.drones=Math.floor(r.drones*.75)),r.buffs=r.buffs.filter(f=>f.until>n.t))}const a=un(n,r),o=r.owner===0?r.kind==="planet"?ye.natBySize[r.size]:0:lr(n,r,a);r.nat<o&&!a.noRegen?r.nat=Math.min(o,r.nat+e*(1+(a.natRegen||0)+.5*(r.b.shield||0))/ye.natRegenSecs):r.nat>o&&(r.nat=o);const l=n.sides[r.owner];if(!l)continue;const c=(a.frozen||0)>0;if(r.lane&&!c){const h=r.lane;h.left-=e*(h.kind==="ship"?1+.25*(r.b.shipyard||0)+(a.shipSpeed||0):1+(a.build||0)),h.left<=0&&(r.lane=r.queue.shift()||null,Rf(n,r,h))}else if(r.kind==="station"&&!c&&(r.prod=Math.min(ye.batchTime,r.prod+e*Math.max(.2,1+(a.prod||0)+.25*(r.b.barracks||0))),r.prod>=ye.batchTime)){const h=Math.min(ye.batch+(a.batch||0),Ls(n,r.owner)-t[r.owner]);h>0&&(r.drones+=h,t[r.owner]+=h,r.prod=0,r.owner===Q&&(n.stats.dronesMade+=h))}const u=El(n,r,a);if(i[r.owner]+=u.out,r.research&&u.resOn){const h=r.research;l.techProg[h]=(l.techProg[h]||0)+e*(1+(a.research||0)),l.techProg[h]>=ms[xt[h].tier]&&wl(n,r.owner,h)}if(r.hold&&n.t>=r.hold.until){const h=r.hold;r.hold=null,r.drones>=h.need?(it(n,`${h.name} complete at ${r.name}`,"good",r.id),qd(n,r,h.fx)):it(n,`${h.name} failed at ${r.name}: fewer than ${h.need} Drones on site`,"bad",r.id)}if(r.conv&&n.t>=r.conv.until){const h=n.specs[r.conv.spec];r.conv=null,h&&h.held===Q&&h.node===r.id&&Kd(n,h)}}for(const r in n.sides){const a=n.sides[r],o=Mt(n,+r);let l=i[r]+(a.kind==="player"?ye.baseIncome:3)+(o.incomeFlat||0);if(o.prisonInc&&(l+=o.prisonInc*n.specs.filter(c=>c.held===+r).length),a.ult+=l*e/60,a.kind==="player"&&(n.stats.ultMade+=l*e/60),o.levy&&n.t>=a.levyT){a.levyT=n.t+o.levy;for(const c of n.nodes)c.owner===+r&&t[r]<Ls(n,+r)&&(c.drones++,t[r]++)}}for(const r of n.ships.slice()){if(r.buffs.length&&(r.buffs=r.buffs.filter(c=>c.until>n.t)),r.at>=0){const c=n.nodes[r.at];if(r.loadUntil>0)n.t>=r.loadUntil&&(r.loadUntil=0,r.at=-1,r.x=c.x,r.y=c.y);else if(c.owner===r.owner&&(r.drones>0||r.specs.length)&&li(n,r)){c.drones+=r.drones,r.drones=0;const u=Ca(n,r.owner);for(const h of r.specs.slice())c.specs.length<u&&Ti(n,n.specs[h],c)}continue}const a=n.nodes[r.to],o=Je(r,a),l=Cl(n,r)*e;o<=l?Ef(n,r):(r.x+=(a.x-r.x)/o*l,r.y+=(a.y-r.y)/o*l)}const s=n.specs[n.cmdSpec];s&&(s.owner!==Q?(n.result="lose",n.resultWhy="Your Commander was lost with their ship."):s.held?n.cmdLostT<0?(n.cmdLostT=n.t,it(n,`YOUR COMMANDER IS A PRISONER at ${n.nodes[s.node].name}. Retake it before the window closes.`,"bad",s.node)):n.t-n.cmdLostT>=Dl(n)&&(n.result="lose",n.resultWhy=`Your Commander was not recovered from ${n.nodes[s.node].name} in time.`):n.cmdLostT=-1,!n.result&&!n.nodes.some(r=>r.owner===Q)&&(n.result="lose",n.resultWhy="You hold no territory.")),n.tick%3===0&&Wn(n)}const Dl=n=>ye.rescueSecs+(Mt(n,Q).rescue||0),Pf=["Ka","Ve","Or","Tal","Mi","Sen","Dra","Ul","Phe","Ny","Cor","Az","Lo","Ery","Bri","Zan","Hel","Qua","Io","Xe"],Lf=["ris","dan","thos","mir","vek","lun","tar","ion","sha","bor","nea","rax","phi","dor","lys","gan","tis","mon","rae","kai"];function Ba(n,e,t,i){return{owner:n,kind:e,fac:t,ult:i,techs:[],techProg:{},relics:[],broken:!1,aiT:6+n*2,expT:60+n*15,capBase:0,refundT:0,levyT:60}}function Df(n,e=0){const s={v:1,seed:n,rng:n|0,t:0,tick:0,modV:1,threat:e,w:560,h:360,nodes:[],ships:[],specs:[],sides:{},factions:[2,3,4],archon:5,mob:{stage:1,prog:0,nextOff:ye.graceSecs,turn:0,surge:0},offs:[],pending:[],log:[],cmdSpec:-1,cmdLostT:-1,intel:[],vis:[],result:null,resultWhy:"",stats:{captures:0,nodesLost:0,battles:0,dronesLost:0,dronesMade:0,shipsLost:0,specs:0,specsLost:0,relics:0,techs:0,events:0,warlords:0,ultMade:0},nextId:1,home:0,citadel:1};for(let x=0;x<5;x++)Ot(s);const r=[{x:rn(s,42,60),y:rn(s,360*.32,360*.68),region:Q},{x:560-rn(s,42,60),y:rn(s,360*.32,360*.68),region:5}];for(let x=0;x<6e3&&r.length<58;x++){const P={x:rn(s,24,536),y:rn(s,24,336),region:0};r.every(R=>Je(P,R)>=31)&&r.push(P)}const a=r[0],o=r[1],l=()=>r.filter(x=>x.region===0),c=(x,P)=>P.slice().sort((R,C)=>Je(R,x)-Je(C,x));for(const x of c(o,l()).slice(0,4))Je(x,o)<95&&(x.region=5);const u=ra(s,[.2,.5,.8]),h=[.42,.6,.74],f=[];for(const x of[2,1,0]){const P={x:h[x]*560+rn(s,-15,15),y:u[x]*360+rn(s,-20,20)},R=c(P,l().filter(C=>Je(C,a)>125))[0];R.region=2+x,f[x]=R;for(const C of c(R,l().filter(U=>Je(U,a)>96)).slice(0,6))Je(C,R)<95&&(C.region=2+x)}const m=Hi(s,Object.keys(zn),3);s.sides[Q]=Ba(Q,"player","",ye.startUlt),m.forEach((x,P)=>s.sides[2+P]=Ba(2+P,"faction",x,20)),s.sides[5]=Ba(5,"archon",gs(s,Object.keys(qi)),30);const _=Je(a,o),y=c(a,l()),d=new Set,p=()=>{for(;;){const x=gs(s,Pf)+gs(s,Lf);if(!d.has(x))return d.add(x),x}},v={list:[]},E=x=>{v.list.length||(v.list=ra(s,Object.keys(Cn)));const P=v.list.findIndex(R=>Cn[R].on==="any"||Cn[R].on===x);return P<0?null:v.list.splice(P,1)[0]},b=1+.08*e;r.forEach((x,P)=>{const R=Math.max(0,Math.min(1,Je(x,a)/_+rn(s,-.12,.12))),C={id:P,name:p(),kind:"planet",x:x.x,y:x.y,size:0,owner:x.region,region:x.region,threat:R,drones:0,nat:0,b:{},lane:null,queue:[],prod:0,research:null,resFirst:!1,specs:[],prisoners:[],buffs:[],event:null,offer:!1,hold:null,conv:null,capital:!1,citadel:!1,home:!1},U=Ot(s);if(C.size=U<.35?0:U<.8?1:2,x===a)C.kind="station",C.home=!0,C.drones=ye.startDrones,C.name="Haven";else if(x===o)C.kind="station",C.citadel=!0,C.name="The Citadel",C.drones=Math.round(46*b),C.b={turret:3,screen:1,barracks:1,shipyard:1,dock:2};else if(x.region===0){const k=y.indexOf(x);C.owner=0,C.kind=k<2?"planet":k===2?"station":Ot(s)<.62?"planet":"station",k===0&&(C.size=0),k===1&&(C.size=1);const D=Je(x,a)<78||k<=2;C.drones=D?sa(s,0,2)+(C.kind==="station"?3:0):Math.round((R*22*rn(s,.6,1.3)+(C.kind==="station"?4:0))*b),C.kind==="planet"?(C.offer=!0,k>1&&Ot(s)<.3&&(C.event=E("planet"))):(C.event=E("station"),Ot(s)<.5&&(C.b[gs(s,["turret","barracks","shipyard","sensor","dock"])]=1))}else{const k=f.includes(x);C.capital=k,C.kind=k?"station":Ot(s)<.55?"planet":"station",C.drones=Math.round((k?22+R*14:7+R*14*rn(s,.7,1.2))*b),x.region===5&&(C.drones=Math.round(sa(s,16,24)*b)),C.kind==="planet"?(C.b={gen:1,mine:sa(s,1,2)},x.region===5&&(C.b.shield=1)):k?C.b={turret:2,barracks:1,dock:1}:Ot(s)<.5&&(C.b={turret:1})}C.kind==="planet"&&(C.nat=ye.natBySize[C.size]),s.nodes.push(C),s.intel.push({seen:0,t:0,snap:null}),s.vis.push(0)}),s.home=0,s.citadel=1,Qn(s,Q,s.nodes[0]);for(const x of s.factions){const P=zn[s.sides[x].fac],R=s.nodes.filter(D=>D.owner===x),C=R.find(D=>D.capital);C.name=P.name.split(" ")[0]+" Prime",Es(s,"warlord",x,C.id).name=P.warlord;const U=ra(s,R.filter(D=>!D.capital));P.specs.forEach((D,H)=>{U[H]&&Es(s,D,x,U[H].id)}),Qn(s,x,C),Qn(s,x,C);const k=R.find(D=>D.kind==="station"&&!D.capital);k&&Qn(s,x,k),s.sides[x].capBase=R.reduce((D,H)=>D+H.drones,0)+10}const A=qi[s.sides[5].fac];Es(s,"archon",5,1).name=`${A.name} ${A.title}`,Qn(s,5,s.nodes[1]),Qn(s,5,s.nodes[1]),s.sides[5].capBase=s.nodes.filter(x=>x.owner===5).reduce((x,P)=>x+P.drones,0)+10;const T=Hi(s,mf,3),g=Hi(s,Object.keys(Xi),3);return s.pending.push({kind:"draft",node:0,opts:T.map((x,P)=>({base:x,arch:g[P]})),title:"Choose your Commander"}),Wn(s),s}const If={aggr:1,expand:1e9,react:.9,target:"weak",build:{turret:3,screen:2,barracks:3,mine:2,gen:2,shield:2,dock:1}},Zd=(n,e)=>n.sides[e].kind==="faction"?zn[n.sides[e].fac].ai:If,Il=(n,e)=>n.ships.find(t=>t.owner===e.owner&&t.at===e.id&&t.loadUntil===0);function er(n,e){const t=Il(n,e);if(t)return t;const i=n.sides[e.owner],s=cr(n,e.owner);if(!(i.ult<s))return i.ult-=s,Qn(n,e.owner,e)}const ka=(n,e)=>!!Il(n,e)||n.sides[e.owner].ult>=cr(n,e.owner),Jd=(n,e)=>Bs(n,0,{},e,un(n,e)).def;function Mc(n,e,t){const i=Object.keys(e).filter(t);let s=i.reduce((a,o)=>a+e[o],0);if(!i.length)return null;let r=Ot(n)*s;for(const a of i)if(r-=e[a],r<=0)return a;return i[0]}function Nf(n,e){const t=n.sides[e],i=Zd(n,e),s=n.nodes.filter(l=>l.owner===e);if(!s.length||t.broken)return;for(const l of s)if(!l.lane){if(l.kind==="planet"){if(!_s(n,l,"mine"))Ks(n,l,"mine");else if(!_s(n,l,"gen")&&(l.b.mine||0)>=(l.b.gen||0)*ye.minesPerGen)Ks(n,l,"gen");else if(Ot(n)<.3){const c=Mc(n,i.build,u=>jt[u].on==="planet"&&!_s(n,l,u));c&&Ks(n,l,c)}}else if(Ot(n)<.15){const c=Mc(n,i.build,u=>jt[u].on==="station"&&!_s(n,l,u));c&&Ks(n,l,c)}}if(n.ships.filter(l=>l.owner===e).length<3+Math.floor(n.mob.stage/2)&&!s.some(l=>l.lane?.kind==="ship")){const l=s.filter(c=>c.kind==="station"&&!c.lane).sort((c,u)=>u.drones-c.drones)[0];l&&Hd(n,l)}const a=s.find(l=>n.ships.filter(c=>c.owner===e&&c.at===l.id&&c.loadUntil===0).length>=2);if(a){const l=s.filter(c=>c.drones>=10&&!n.ships.some(u=>u.owner===e&&(u.at===c.id||u.to===c.id))).sort((c,u)=>Je(c,a)-Je(u,a))[0];l&&ki(n,Il(n,a),l,0,[])}for(const l of n.ships){if(l.owner!==Q||l.at>=0||l.drones<=0||l.off)continue;const c=n.nodes[l.to];if(c.owner!==e||(l.off=!0,Qi(n,l).stealth||Ot(n)>i.react))continue;const u=Pl(n,l,c),h=s.filter(f=>f.id!==c.id&&f.drones>8&&ka(n,f)&&Je(f,c)/ye.shipSpeed+ye.loadTime+1<u).sort((f,m)=>m.drones-f.drones)[0];h&&ki(n,er(n,h),c,Math.floor((h.drones-4)*.6),[])}const o=s.filter(l=>!l.capital&&l.drones<6+Math.round(l.threat*8)).sort((l,c)=>l.drones-c.drones)[0];if(o){const l=s.filter(c=>c.id!==o.id&&c.drones>20&&ka(n,c)).sort((c,u)=>Je(c,o)-Je(u,o))[0];l&&ki(n,er(n,l),o,Math.min(10,Math.floor((l.drones-12)/2)+4),[])}if(n.t>=t.expT&&t.kind==="faction"){let l=null;for(const c of s)if(ka(n,c))for(const u of n.nodes){if(u.owner!==0)continue;const h=Je(c,u);if(h>120)continue;const f=Jd(n,u)+2;c.drones-6>=f&&(!l||h<l.d)&&(l={src:c,tgt:u,need:f,d:h})}l&&(ki(n,er(n,l.src),l.tgt,l.need+sa(n,0,3),[]),t.expT=n.t+i.expand*rn(n,.8,1.2))}}function Uf(n,e){const t=Zd(n,e),i=n.nodes.filter(m=>m.owner===e),s=n.nodes.filter(m=>m.owner===Q);if(!i.length||!s.length)return;let r=null,a=1e9;for(const m of s){const _=Math.min(...i.map(p=>Je(p,m))),y=Jd(n,m);let d=t.target==="weak"?y*4+_*.5:_+y*1.5;t.target==="spec"&&(d-=60*m.specs.length+(m.specs.includes(n.cmdSpec)?120:0)),d<a&&(a=d,r=m)}if(!r)return;const o=r,l=i.slice().sort((m,_)=>Je(m,o)-Je(_,o))[0],c=Math.min(.92,ye.offCommit[n.mob.stage]*(1+(Mt(n,n.archon).offBig||0))*(.7+.3*t.aggr)),u=i.filter(m=>m.id!==l.id&&m.drones>=9&&Je(m,l)<200).sort((m,_)=>Je(m,l)-Je(_,l)).slice(0,1+n.mob.stage+n.mob.surge);let h=ye.gatherSecs;for(const m of u){const _=er(n,m);if(!_)continue;const y=m.capital||m.citadel?Math.max(12,Math.floor(m.drones*.4)):5;ki(n,_,l,Math.floor((m.drones-y)*c),[])||(_.off=!0,h=Math.max(h,Je(m,l)/Cl(n,_)+ye.loadTime+6))}const f=(Mt(n,Q).warn||0)>0;n.offs.push({owner:e,target:o.id,staging:l.id,launchT:n.t+h,warned:f}),it(n,f?`${oi(n,e)} is massing at ${l.name} to strike ${o.name}`:`${oi(n,e)} is mobilizing for an offensive`,"warn",f?o.id:-1)}function Ff(n,e){const t=n.nodes[e.staging];if(t.owner!==e.owner||n.sides[e.owner].broken)return;let i=n.nodes[e.target];if(i.owner!==Q){const o=n.nodes.filter(l=>l.owner===Q).sort((l,c)=>Je(l,t)-Je(c,t))[0];if(!o)return;i=o}const s=t.capital||t.citadel?Math.max(12,Math.floor(t.drones*.4)):5,r=t.drones-s;if(r<6)return;const a=er(n,t);a&&(ki(n,a,i,r,[])||(a.off=!0))}function Of(n){const e=n.mob;{const t=ye.stageSecs*(1-.05*n.threat);if(e.prog+=ye.dt/t*Math.max(.3,1-(Mt(n,Q).mobSlow||0)),e.prog>=1&&e.stage>=5)e.surge++,e.prog=0,it(n,`Total war: Coalition reserves deepen (surge ${e.surge}). Every faction can field more Drones.`,"warn");else if(e.prog>=1){e.stage++,e.prog=0,it(n,`Coalition mobilization reached stage ${e.stage}. Offensives grow larger and more frequent.`,"warn");for(const i of n.factions){const s=n.sides[i];if(s.broken)continue;const r=zn[s.fac].techs.filter(a=>!s.techs.includes(a));for(const a of r.slice(0,s.fac==="lumen"?2:1))wl(n,i,a)}}}if(n.t>=e.nextOff){const t=n.factions.filter(i=>!n.sides[i].broken&&n.nodes.some(s=>s.owner===i));(e.stage>=4||!t.length)&&t.push(n.archon),Uf(n,t[e.turn%t.length]),e.turn++,e.nextOff=n.t+ye.offInterval[e.stage]*rn(n,.85,1.15)/(1+.04*n.threat)}if(n.offs.length){const t=n.offs.filter(i=>n.t>=i.launchT);if(t.length){n.offs=n.offs.filter(i=>n.t<i.launchT);for(const i of t)Ff(n,i)}}}function Bf(n){Of(n);for(const e of[...n.factions,n.archon]){const t=n.sides[e];n.t>=t.aiT&&(t.aiT=n.t+8+Ot(n)*4,Nf(n,e))}}function Nl(n){const e=[],t=Nt[n.def].active;return t&&e.push(t),n.cmd&&(e.push(Xi[n.cmd.arch].a),n.cmd.lvl>=3&&e.push(Xi[n.cmd.arch].b)),e}const Qd=(n,e,t)=>Math.max(0,(e.cd[t]||0)-n.t),za=(n,e)=>{const t=Ls(n.g,n.sp.owner)-vr(n.g,n.sp.owner),i=Math.max(0,Math.min(e,t));return i<=0?"Drone cap reached":(n.here.drones+=i,null)},Hs=(n,e,t=Vi)=>i=>(i.s.buffs.push({k:n,v:e,until:t>=Vi?Vi:i.g.t+t}),null),Di=(n,e,t)=>i=>(i.n.buffs.push({k:n,v:e,until:i.g.t+t}),null),Ga=(n,e,t)=>i=>(i.t.buffs.push({k:n,v:e,until:i.g.t+t}),Wn(i.g),null),Sc=(n,e)=>t=>{for(const i of t.g.nodes)Je(i,t.here)<=n&&i.buffs.push({k:"scan",v:1,until:t.g.t+e});return Wn(t.g),null},kf=n=>(n.n?n.n.specs:n.s.specs).map(e=>n.g.specs[e]).filter(e=>e.id!==n.sp.id&&e.owner===n.sp.owner),bc=n=>{const e=kf(n);if(!e.length)return"No other specialist here";for(const t of e)t.cd={};return null},yc=n=>e=>{const t=e.n,i=e.g.sides[t.owner];return t.research?(i.techProg[t.research]=(i.techProg[t.research]||0)+n,null):"No research running here"},Ec=n=>{const e=Os(n.g,n.sp.owner);if(!e||n.n&&e.id===n.n.id)return"Already home";const t=(n.n?n.n.specs:n.s.specs).slice();for(const i of t)Ti(n.g,n.g.specs[i],e);return null},Tc=n=>e=>(e.t.drones-=Math.floor(e.t.drones*n),Wn(e.g),null),zf={fullburn:Hs("speed",.5,30),repair:n=>{const e=n.n;return e.lane&&(e.lane.left=Math.max(.1,e.lane.left-25)),e.nat=lr(n.g,e),null},surge:Di("mine",.5,60),deepscan:Ga("scan",1,60),flank:Hs("ignNat",1),lockdown:Di("def",6,45),sabotage:Ga("frozen",1,45),parley:Ga("def",-5,60),breakthrough:yc(30),extraction:Ec,ambush:Di("ambush",.3,90),convert:n=>{const e=n.n;if(e.conv)return"A conversion is already running here";const t=e.prisoners.map(i=>n.g.specs[i]).find(i=>i.held===Q&&i.def!=="warlord"&&i.def!=="archon");return t?(e.conv={spec:t.id,until:n.g.t+60},null):"No convertible prisoner here"},conscript:n=>za(n,6),chart:Sc(160,40),strip:n=>(n.g.sides[n.sp.owner].ult+=20,n.n.buffs.push({k:"offline",v:1,until:n.g.t+60}),null),smoke:n=>{const e=n.g.ships.filter(t=>t.at<0&&t.to===n.n.id&&t.owner!==n.sp.owner);if(!e.length)return"No enemy fleet is heading here";for(const t of e){const i=n.g.nodes[t.from],s=i.owner===t.owner?i:Os(n.g,t.owner);s?(t.to=s.id,t.off=!1):t.drones=0}return n.g.offs=n.g.offs.filter(t=>t.target!==n.n.id),null},breach:n=>(n.t.nat=0,n.t.buffs.push({k:"noRegen",v:1,until:n.g.t+60}),Wn(n.g),null),laststand:Di("dbl",1,30),reprise:bc,bribe:n=>{const e=n.t,t=n.g,i=e.drones+Math.floor(e.nat);if(i>14)return"Too strong to buy (strength above 14)";const s=2*i;if(t.sides[Q].ult<s)return`Needs ${s} Ultanium`;t.ships.find(o=>o.owner===Q&&o.at>=0&&o.loadUntil===0),t.sides[Q].ult-=s;const r={owner:Q,seq:0,at:-1,from:e.id,to:e.id,x:e.x,y:e.y,drones:0,specs:[],buffs:[],off:!1},a=Bs(t,0,{},e,{});return a.win=!0,a.surv=0,a.sent=0,Wd(t,e,r,a,{}),null},fence:n=>(n.g.sides[n.sp.owner].ult+=2*n.g.nodes.filter(e=>e.owner===n.sp.owner).length,null),rampart:n=>(n.n.nat=lr(n.g,n.n),null),levy:n=>{let e=!1;for(const t of n.g.nodes)t.owner===n.sp.owner&&t.kind==="station"&&vr(n.g,n.sp.owner)+3<=Ls(n.g,n.sp.owner)&&(t.drones+=3,e=!0);return e?null:"Drone cap reached"},foresight:n=>(n.g.mob.prog=Math.max(0,n.g.mob.prog-.1),null),charge:Hs("atk",5),slingshot:Di("sling",1,30),vein:n=>(n.g.sides[n.sp.owner].ult+=25,null),fortify:n=>{const e=n.n,t=e.kind==="planet"?"shield":(e.b.turret||0)<jt.turret.max?"turret":"screen";return(e.b[t]||0)>=jt[t].max?"No room for another structure":(e.b[t]=(e.b[t]||0)+1,null)},bloodrush:n=>(n.s.buffs.push({k:"atkPct",v:.4,until:Vi},{k:"surv",v:-.3,until:Vi}),null),focus:Di("preKill",.3,45),raidA:Tc(.25),warp:n=>{const e=n.s,t=n.g.nodes[e.to];return e.x+=(t.x-e.x)/2,e.y+=(t.y-e.y)/2,null},decisive:Hs("atkPct",.3),rally:n=>za(n,8),slipstream:Hs("speed",1,40),sweep:Sc(200,45),aegis:Di("def",10,45),recall:Ec,crash:n=>n.n.lane?(n.n.lane.left=.05,null):"Nothing is being built here",windfall:n=>(n.g.sides[n.sp.owner].ult+=3*n.g.nodes.filter(e=>e.owner===n.sp.owner&&e.kind==="planet").length,null),raid:Tc(.3),pressgang:n=>za(n,Math.min(10,Math.max(1,Math.floor(n.here.drones*.2)))),insight:bc,eureka:yc(60)};function jd(n,e,t,i){if(e.held)return"Specialist is a prisoner";if(Qd(n,e,t.id)>0)return"On cooldown";const s=e.ship>=0&&Zt(n,e.ship)||null,r=!!s&&s.at<0;if(t.at==="ship"&&!r)return"Use while the ship is in flight";if((t.at==="node"||t.at==="planet")&&e.node<0)return"Use while stationed at a node";if(t.at==="planet"&&n.nodes[e.node].kind!=="planet")return"Use on a planet";if(t.target!=="self"){if(!i)return"Pick a target";const a=n.vis[i.id];if(t.target==="node"){if(a<1)return"Target must be detected";if(i.owner===Q)return"Pick a node you do not own"}else{if(a<2)return"Target must be fully identified";if(i.owner===Q)return"Pick a node you do not own";if(t.target==="neutral"&&i.owner!==0)return"Pick a neutral node";if(t.target==="enemy"&&i.owner===0)return"Pick an enemy node"}}return null}function Gf(n,e,t,i){const s=Nl(e).find(u=>u.id===t);if(!s)return"Unknown ability";const r=jd(n,e,s,i);if(r)return r;const a=e.ship>=0?Zt(n,e.ship):null,o=e.node>=0?n.nodes[e.node]:null,l=zf[t]({g:n,sp:e,n:o,s:a,here:o||a,t:i});if(l)return l;const c=Math.max(.4,Math.min(1.6,1-(Mt(n,e.owner).cd||0)));return e.cd[t]=n.t+s.cd*c,n.modV++,e.owner===Q&&it(n,`${e.name||Nt[e.def].name}: ${s.name}`,"info",o?o.id:-1),null}function Hf(n){return n.result||n.pending.length?!1:(Cf(n),n.result||Bf(n),!0)}function Vf(n,e){if(n.result)return"The run is over";const t=i=>{const s=n.nodes[i];return s&&s.owner===Q?s:null};switch(e.c){case"build":{const i=t(e.node);return i?Ks(n,i,e.id):"Not your node"}case"ship":{const i=t(e.node);return i?Hd(n,i):"Not your node"}case"cancel":{const i=t(e.node);return i?(Mf(n,i,e.idx),null):"Not your node"}case"research":{const i=t(e.node);return i?e.id===null?(i.research=null,null):Sf(n,i,e.id):"Not your node"}case"resFirst":{const i=t(e.node);return i?(i.resFirst=!i.resFirst,null):"Not your node"}case"launch":{const i=Zt(n,e.ship);return!i||i.owner!==Q?"Not your ship":ki(n,i,n.nodes[e.to],e.drones,e.specs)}case"redirect":{const i=Zt(n,e.ship);return!i||i.owner!==Q?"Not your ship":Tf(n,i,n.nodes[e.to])}case"ability":{const i=n.specs[e.spec];return!i||i.owner!==Q?"Not your specialist":Gf(n,i,e.id,e.target>=0?n.nodes[e.target]:null)}case"choose":return wf(n,e.idx);case"ransom":{const i=n.specs[e.spec];return i?Af(n,i,e.recruit):"Unknown prisoner"}case"event":{const i=t(e.node);return!i||!i.event?"No event here":(n.pending.push({kind:"event",node:i.id,opts:[],title:Cn[i.event].name,event:i.event}),null)}}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ul="187",Wf=0,wc=1,$f=2,oa=1,Xf=2,Zs=3,Yi=0,tn=1,ei=2,ws=0,tr=1,Ac=2,Rc=3,Cc=4,qf=5,ps=100,Yf=101,Kf=102,Zf=103,Jf=104,Qf=200,jf=201,eh=202,th=203,eu=204,tu=205,nh=206,ih=207,sh=208,rh=209,ah=210,oh=211,lh=212,ch=213,dh=214,yo=0,Eo=1,To=2,dr=3,wo=4,Ao=5,Ro=6,Co=7,Fl=0,uh=1,fh=2,ri=0,nu=1,iu=2,su=3,ru=4,au=5,ou=6,lu=7,cu=300,Ds=301,ur=302,Ha=303,Va=304,Po=1e3,ni=1001,Lo=1002,Bt=1003,hh=1004,Pr=1005,en=1006,Wa=1007,Si=1008,dn=1009,du=1010,uu=1011,fr=1012,Ol=1013,Gn=1014,Fn=1015,Hn=1016,Bl=1017,kl=1018,Is=1020,fu=35902,hu=35899,pu=1021,mu=1022,On=1023,wi=1026,bi=1027,gu=1028,zl=1029,Ki=1030,Gl=1031,Hl=1033,la=33776,ca=33777,da=33778,ua=33779,Do=35840,Io=35841,No=35842,Uo=35843,Fo=36196,Oo=37492,Bo=37496,ko=37488,zo=37489,ga=37490,Go=37491,Ho=37808,Vo=37809,Wo=37810,$o=37811,Xo=37812,qo=37813,Yo=37814,Ko=37815,Zo=37816,Jo=37817,Qo=37818,jo=37819,el=37820,tl=37821,nl=36492,il=36494,sl=36495,rl=36283,al=36284,_a=36285,ol=36286,ph=3200,ll=0,mh=1,xi="",ln="srgb",va="srgb-linear",xa="linear",ot="srgb",$a=7680,gh=519,_h=512,vh=513,xh=514,_u=515,Mh=516,Sh=517,vu=518,xu=519,bh=35044,Pc="300 es",Rn=2e3,hr=2001;function yh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ma(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Eh(){const n=Ma("canvas");return n.style.display="block",n}const Lc={};function Dc(...n){const e="THREE."+n.shift();console.log(e,...n)}function Mu(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Le(...n){n=Mu(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function tt(...n){n=Mu(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function fa(...n){const e=n.join(" ");e in Lc||(Lc[e]=!0,Le(...n))}function Th(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const wh={[yo]:yo,[To]:Ro,[wo]:wo,[dr]:Ao,[Eo]:Eo,[Ro]:To,[Co]:Co,[Ao]:dr};class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xa=Math.PI/180,cl=180/Math.PI;function xr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function Ah(n,e){return(n%e+e)%e}function qa(n,e,t){return(1-t)*n+t*e}function Rh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Vl(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ch(n,e){if(e.constructor===Float32Array)return n;const t=Vl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Ph(n,e){if(e.constructor===Float32Array)return n;const t=Vl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const nc=class nc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};nc.prototype.isVector2=!0;let He=nc;class ks{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[a+0],m=r[a+1],_=r[a+2],y=r[a+3];if(h!==y||l!==f||c!==m||u!==_){let d=l*f+c*m+u*_+h*y;d<0&&(f=-f,m=-m,_=-_,y=-y,d=-d);let p=1-o;if(d<.9995){const v=Math.acos(d),E=Math.sin(v);p=Math.sin(p*v)/E,o=Math.sin(o*v)/E,l=l*p+f*o,c=c*p+m*o,u=u*p+_*o,h=h*p+y*o}else{l=l*p+f*o,c=c*p+m*o,u=u*p+_*o,h=h*p+y*o;const v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],f=r[a+1],m=r[a+2],_=r[a+3];return e[t]=o*_+u*h+l*m-c*f,e[t+1]=l*_+u*f+c*h-o*m,e[t+2]=c*_+u*m+o*f-l*h,e[t+3]=u*_-o*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),f=l(i/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"YXZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"ZXY":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"ZYX":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"YZX":this._x=f*u*h+c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h-f*m*_;break;case"XZY":this._x=f*u*h-c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h+f*m*_;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ic=class ic{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ic.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ic.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ya.copy(this).projectOnVector(e),this.sub(Ya)}reflect(e){return this.sub(Ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ic.prototype.isVector3=!0;let F=ic;const Ya=new F,Ic=new ks,sc=class sc{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],_=i[8],y=s[0],d=s[3],p=s[6],v=s[1],E=s[4],b=s[7],A=s[2],T=s[5],g=s[8];return r[0]=a*y+o*v+l*A,r[3]=a*d+o*E+l*T,r[6]=a*p+o*b+l*g,r[1]=c*y+u*v+h*A,r[4]=c*d+u*E+h*T,r[7]=c*p+u*b+h*g,r[2]=f*y+m*v+_*A,r[5]=f*d+m*E+_*T,r[8]=f*p+m*b+_*g,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,m=c*r-a*l,_=t*h+i*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(s*c-u*i)*y,e[2]=(o*i-s*a)*y,e[3]=f*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=m*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return fa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ka.makeScale(e,t)),this}rotate(e){return fa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ka.makeRotation(-e)),this}translate(e,t){return fa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ka.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};sc.prototype.isMatrix3=!0;let Ie=sc;const Ka=new Ie,Nc=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uc=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lh(){const n={enabled:!0,workingColorSpace:va,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ot&&(s.r=ai(s.r),s.g=ai(s.g),s.b=ai(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(s.r=As(s.r),s.g=As(s.g),s.b=As(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xi?xa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[va]:{primaries:e,whitePoint:i,transfer:xa,toXYZ:Nc,fromXYZ:Uc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:Nc,fromXYZ:Uc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),n}const Ke=Lh();function ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function As(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ts;class Dh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ts===void 0&&(ts=Ma("canvas")),ts.width=e.width,ts.height=e.height;const s=ts.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ts}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ma("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ai(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ai(t[i]/255)*255):t[i]=ai(t[i]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ih=0;class Wl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=xr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Za(s[a].image)):r.push(Za(s[a]))}else r=Za(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Za(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Dh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let Nh=0;const Ja=new F;class Xt extends ji{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,i=ni,s=ni,r=en,a=Si,o=On,l=dn,c=Xt.DEFAULT_ANISOTROPY,u=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=xr(),this.name="",this.source=new Wl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ja).x}get height(){return this.source.getSize(Ja).y}get depth(){return this.source.getSize(Ja).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Po:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case Lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Po:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case Lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=cu;Xt.DEFAULT_ANISOTROPY=1;const rc=class rc{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],_=l[9],y=l[2],d=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(_-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(_+d)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,b=(m+1)/2,A=(p+1)/2,T=(u+f)/4,g=(h+y)/4,x=(_+d)/4;return E>b&&E>A?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=T/i,r=g/i):b>A?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=T/s,r=x/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=g/r,s=x/r),this.set(i,s,r,t),this}let v=Math.sqrt((d-_)*(d-_)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(d-_)/v,this.y=(h-y)/v,this.z=(f-u)/v,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};rc.prototype.isVector4=!0;let vt=rc;class Uh extends ji{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];const s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Xt({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Wl(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends Uh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Su extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fh extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Aa=class Aa{constructor(e,t,i,s,r,a,o,l,c,u,h,f,m,_,y,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,h,f,m,_,y,d)}set(e,t,i,s,r,a,o,l,c,u,h,f,m,_,y,d){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=m,p[7]=_,p[11]=y,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Aa().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ns.setFromMatrixColumn(e,0).length(),r=1/ns.setFromMatrixColumn(e,1).length(),a=1/ns.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,m=a*h,_=o*u,y=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=f-y*c,t[9]=-o*l,t[2]=y-f*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,_=c*u,y=c*h;t[0]=f+y*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=y+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,_=c*u,y=c*h;t[0]=f-y*o,t[4]=-a*h,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=y-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,m=a*h,_=o*u,y=o*h;t[0]=l*u,t[4]=_*c-m,t[8]=f*c+y,t[1]=l*h,t[5]=y*c+f,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,_=o*l,y=o*c;t[0]=l*u,t[4]=y-f*h,t[8]=_*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+_,t[10]=f-y*h}else if(e.order==="XZY"){const f=a*l,m=a*c,_=o*l,y=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+y,t[5]=a*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=o*u,t[10]=y*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Oh,e,Bh)}lookAt(e,t,i){const s=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ui.crossVectors(i,nn),ui.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ui.crossVectors(i,nn)),ui.normalize(),Lr.crossVectors(nn,ui),s[0]=ui.x,s[4]=Lr.x,s[8]=nn.x,s[1]=ui.y,s[5]=Lr.y,s[9]=nn.y,s[2]=ui.z,s[6]=Lr.z,s[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],_=i[2],y=i[6],d=i[10],p=i[14],v=i[3],E=i[7],b=i[11],A=i[15],T=s[0],g=s[4],x=s[8],P=s[12],R=s[1],C=s[5],U=s[9],k=s[13],D=s[2],H=s[6],Y=s[10],G=s[14],ne=s[3],$=s[7],ee=s[11],te=s[15];return r[0]=a*T+o*R+l*D+c*ne,r[4]=a*g+o*C+l*H+c*$,r[8]=a*x+o*U+l*Y+c*ee,r[12]=a*P+o*k+l*G+c*te,r[1]=u*T+h*R+f*D+m*ne,r[5]=u*g+h*C+f*H+m*$,r[9]=u*x+h*U+f*Y+m*ee,r[13]=u*P+h*k+f*G+m*te,r[2]=_*T+y*R+d*D+p*ne,r[6]=_*g+y*C+d*H+p*$,r[10]=_*x+y*U+d*Y+p*ee,r[14]=_*P+y*k+d*G+p*te,r[3]=v*T+E*R+b*D+A*ne,r[7]=v*g+E*C+b*H+A*$,r[11]=v*x+E*U+b*Y+A*ee,r[15]=v*P+E*k+b*G+A*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],_=e[3],y=e[7],d=e[11],p=e[15],v=l*m-c*f,E=o*m-c*h,b=o*f-l*h,A=a*m-c*u,T=a*f-l*u,g=a*h-o*u;return t*(y*v-d*E+p*b)-i*(_*v-d*A+p*T)+s*(_*E-y*A+p*g)-r*(_*b-y*T+d*g)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],_=e[12],y=e[13],d=e[14],p=e[15],v=t*o-i*a,E=t*l-s*a,b=t*c-r*a,A=i*l-s*o,T=i*c-r*o,g=s*c-r*l,x=u*y-h*_,P=u*d-f*_,R=u*p-m*_,C=h*d-f*y,U=h*p-m*y,k=f*p-m*d,D=v*k-E*U+b*C+A*R-T*P+g*x;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/D;return e[0]=(o*k-l*U+c*C)*H,e[1]=(s*U-i*k-r*C)*H,e[2]=(y*g-d*T+p*A)*H,e[3]=(f*T-h*g-m*A)*H,e[4]=(l*R-a*k-c*P)*H,e[5]=(t*k-s*R+r*P)*H,e[6]=(d*b-_*g-p*E)*H,e[7]=(u*g-f*b+m*E)*H,e[8]=(a*U-o*R+c*x)*H,e[9]=(i*R-t*U-r*x)*H,e[10]=(_*T-y*b+p*v)*H,e[11]=(h*b-u*T-m*v)*H,e[12]=(o*P-a*C-l*x)*H,e[13]=(t*C-i*P+s*x)*H,e[14]=(y*E-_*A-d*v)*H,e[15]=(u*A-h*E+f*v)*H,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,m=r*u,_=r*h,y=a*u,d=a*h,p=o*h,v=l*c,E=l*u,b=l*h,A=i.x,T=i.y,g=i.z;return s[0]=(1-(y+p))*A,s[1]=(m+b)*A,s[2]=(_-E)*A,s[3]=0,s[4]=(m-b)*T,s[5]=(1-(f+p))*T,s[6]=(d+v)*T,s[7]=0,s[8]=(_+E)*g,s[9]=(d-v)*g,s[10]=(1-(f+y))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=ns.set(s[0],s[1],s[2]).length();const o=ns.set(s[4],s[5],s[6]).length(),l=ns.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Sn.copy(this);const c=1/a,u=1/o,h=1/l;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=h,Sn.elements[9]*=h,Sn.elements[10]*=h,t.setFromRotationMatrix(Sn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Rn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),m=(i+s)/(i-s);let _,y;if(l)_=r/(a-r),y=a*r/(a-r);else if(o===Rn)_=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===hr)_=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Rn,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),m=-(i+s)/(i-s);let _,y;if(l)_=1/(a-r),y=a/(a-r);else if(o===Rn)_=-2/(a-r),y=-(a+r)/(a-r);else if(o===hr)_=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Aa.prototype.isMatrix4=!0;let ht=Aa;const ns=new F,Sn=new ht,Oh=new F(0,0,0),Bh=new F(1,1,1),ui=new F,Lr=new F,nn=new F,Fc=new ht,Oc=new ks;class Ai{constructor(e=0,t=0,i=0,s=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Oc.setFromEuler(this),this.setFromQuaternion(Oc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class bu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kh=0;const Bc=new F,is=new ks,Xn=new ht,Dr=new F,Vs=new F,zh=new F,Gh=new ks,kc=new F(1,0,0),zc=new F(0,1,0),Gc=new F(0,0,1),Hc={type:"added"},Hh={type:"removed"},ss={type:"childadded",child:null},Qa={type:"childremoved",child:null};class At extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new F,t=new Ai,i=new ks,s=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ie}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(kc,e)}rotateY(e){return this.rotateOnAxis(zc,e)}rotateZ(e){return this.rotateOnAxis(Gc,e)}translateOnAxis(e,t){return Bc.copy(e).applyQuaternion(this.quaternion),this.position.add(Bc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kc,e)}translateY(e){return this.translateOnAxis(zc,e)}translateZ(e){return this.translateOnAxis(Gc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Dr.copy(e):Dr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Vs,Dr,this.up):Xn.lookAt(Dr,Vs,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(Xn),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hc),ss.child=e,this.dispatchEvent(ss),ss.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hh),Qa.child=e,this.dispatchEvent(Qa),Qa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hc),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,zh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,Gh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}At.DEFAULT_UP=new F(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class yi extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vh={type:"move"};class ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const d=t.getJointPose(y,i),p=this._getHandJoint(c,y);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new yi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function eo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ke.workingColorSpace){if(e=Ah(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=eo(a,r,e+1/3),this.g=eo(a,r,e),this.b=eo(a,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=ln){function i(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){const i=yu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return Ke.workingToColorSpace($t.copy(this),e),Math.round(Ze($t.r*255,0,255))*65536+Math.round(Ze($t.g*255,0,255))*256+Math.round(Ze($t.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace($t.copy(this),t);const i=$t.r,s=$t.g,r=$t.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=ln){Ke.workingToColorSpace($t.copy(this),e);const t=$t.r,i=$t.g,s=$t.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(Ir);const i=qa(fi.h,Ir.h,t),s=qa(fi.s,Ir.s,t),r=qa(fi.l,Ir.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new ke;ke.NAMES=yu;class Wh extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const bn=new F,qn=new F,to=new F,Yn=new F,rs=new F,as=new F,Vc=new F,no=new F,io=new F,so=new F,ro=new vt,ao=new vt,oo=new vt;class An{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),bn.subVectors(e,t),s.cross(bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){bn.subVectors(s,t),qn.subVectors(i,t),to.subVectors(e,t);const a=bn.dot(bn),o=bn.dot(qn),l=bn.dot(to),c=qn.dot(qn),u=qn.dot(to),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,m=(c*l-o*u)*f,_=(a*u-o*l)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(a,Yn.y),l.addScaledVector(o,Yn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return ro.setScalar(0),ao.setScalar(0),oo.setScalar(0),ro.fromBufferAttribute(e,t),ao.fromBufferAttribute(e,i),oo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ro,r.x),a.addScaledVector(ao,r.y),a.addScaledVector(oo,r.z),a}static isFrontFacing(e,t,i,s){return bn.subVectors(i,t),qn.subVectors(e,t),bn.cross(qn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),bn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return An.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;rs.subVectors(s,i),as.subVectors(r,i),no.subVectors(e,i);const l=rs.dot(no),c=as.dot(no);if(l<=0&&c<=0)return t.copy(i);io.subVectors(e,s);const u=rs.dot(io),h=as.dot(io);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(i).addScaledVector(rs,a);so.subVectors(e,r);const m=rs.dot(so),_=as.dot(so);if(_>=0&&m<=_)return t.copy(r);const y=m*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(as,o);const d=u*_-m*h;if(d<=0&&h-u>=0&&m-_>=0)return Vc.subVectors(r,s),o=(h-u)/(h-u+(m-_)),t.copy(s).addScaledVector(Vc,o);const p=1/(d+y+f);return a=y*p,o=f*p,t.copy(i).addScaledVector(rs,a).addScaledVector(as,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Mr{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,yn):yn.fromBufferAttribute(r,a),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nr.copy(i.boundingBox)),Nr.applyMatrix4(e.matrixWorld),this.union(Nr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),Ur.subVectors(this.max,Ws),os.subVectors(e.a,Ws),ls.subVectors(e.b,Ws),cs.subVectors(e.c,Ws),hi.subVectors(ls,os),pi.subVectors(cs,ls),Ii.subVectors(os,cs);let t=[0,-hi.z,hi.y,0,-pi.z,pi.y,0,-Ii.z,Ii.y,hi.z,0,-hi.x,pi.z,0,-pi.x,Ii.z,0,-Ii.x,-hi.y,hi.x,0,-pi.y,pi.x,0,-Ii.y,Ii.x,0];return!lo(t,os,ls,cs,Ur)||(t=[1,0,0,0,1,0,0,0,1],!lo(t,os,ls,cs,Ur))?!1:(Fr.crossVectors(hi,pi),t=[Fr.x,Fr.y,Fr.z],lo(t,os,ls,cs,Ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Kn=[new F,new F,new F,new F,new F,new F,new F,new F],yn=new F,Nr=new Mr,os=new F,ls=new F,cs=new F,hi=new F,pi=new F,Ii=new F,Ws=new F,Ur=new F,Fr=new F,Ni=new F;function lo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ni.fromArray(n,r);const o=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=e.dot(Ni),c=t.dot(Ni),u=i.dot(Ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Et=new F,Or=new He;let $h=0;class Wi extends ji{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$h++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=bh,this.updateRanges=[],this.gpuType=Fn,this.version=0,this._normalizationScale=e!==void 0?Vl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ch(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ph(e,this.array)}}class Eu extends Wi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Tu extends Wi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class st extends Wi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Xh=new Mr,$s=new F,co=new F;class Sr{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Xh.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$s.subVectors(e,this.center);const t=$s.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector($s,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($s.copy(e.center).add(co)),this.expandByPoint($s.copy(e.center).sub(co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let qh=0;const gn=new ht,uo=new At,ds=new F,sn=new Mr,Xs=new Mr,It=new F;class Gt extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yh(e)?Tu:Eu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ie().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,i){return gn.makeTranslation(e,t,i),this.applyMatrix4(gn),this}scale(e,t,i){return gn.makeScale(e,t,i),this.applyMatrix4(gn),this}lookAt(e){return uo.lookAt(e),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new st(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(sn.min,Xs.min),sn.expandByPoint(It),It.addVectors(sn.max,Xs.max),sn.expandByPoint(It)):(sn.expandByPoint(Xs.min),sn.expandByPoint(Xs.max))}sn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)It.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(It));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)It.fromBufferAttribute(o,c),l&&(ds.fromBufferAttribute(e,c),It.add(ds)),s=Math.max(s,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Wi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let P=0;P<i.count;P++)o[P]=new F,l[P]=new F;const u=new F,h=new F,f=new F,m=new He,_=new He,y=new He,d=new F,p=new F;function v(P,R,C){c[P]=c[R]=c[C]=1,u.fromBufferAttribute(i,P),h.fromBufferAttribute(i,R),f.fromBufferAttribute(i,C),m.fromBufferAttribute(r,P),_.fromBufferAttribute(r,R),y.fromBufferAttribute(r,C),h.sub(u),f.sub(u),_.sub(m),y.sub(m);const U=1/(_.x*y.y-y.x*_.y);isFinite(U)&&(d.copy(h).multiplyScalar(y.y).addScaledVector(f,-_.y).multiplyScalar(U),p.copy(f).multiplyScalar(_.x).addScaledVector(h,-y.x).multiplyScalar(U),o[P].add(d),o[R].add(d),o[C].add(d),l[P].add(p),l[R].add(p),l[C].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,R=E.length;P<R;++P){const C=E[P],U=C.start,k=C.count;for(let D=U,H=U+k;D<H;D+=3)v(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const b=new F,A=new F,T=new F,g=new F;function x(P){T.fromBufferAttribute(s,P),g.copy(T);const R=o[P];b.copy(R),b.sub(T.multiplyScalar(T.dot(R))).normalize(),A.crossVectors(g,R);const U=A.dot(l[P])<0?-1:1;a.setXYZW(P,b.x,b.y,b.z,U)}for(let P=0,R=i.count;P<R;++P)c[P]&&x(P);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Wi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),y=e.getX(f+1),d=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,d),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,d),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let m=0,_=0;for(let y=0,d=l.length;y<d;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*u;for(let p=0;p<u;p++)f[_++]=c[m++]}return new Wi(f,u,h)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fo=new F,Yh=new F,Kh=new Ie;class gi{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=fo.subVectors(i,t).cross(Yh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(fo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Kh.getNormalMatrix(e),s=this.coplanarPoint(fo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Zh=0;class es extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=xr(),this.name="",this.type="Material",this.blending=tr,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eu,this.blendDst=tu,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$a,this.stencilZFail=$a,this.stencilZPass=$a,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new gi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new He().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Zn=new F,ho=new F,Br=new F,kr=new F;class $l{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ho.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),kr.copy(this.origin).sub(ho);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Br),o=kr.dot(this.direction),l=-kr.dot(Br),c=kr.lengthSq(),u=Math.abs(1-a*a);let h,f,m,_;if(u>0)if(h=a*l-o,f=a*o-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const y=1/u;h*=y,f*=y,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ho).addScaledVector(Br,f),m}intersectSphere(e,t){if(e.radius<0)return null;Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),s=Zn.dot(Zn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,i,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-a.x,f=e.y-a.y,m=e.z-a.z,_=t.x-a.x,y=t.y-a.y,d=t.z-a.z,p=i.x-a.x,v=i.y-a.y,E=i.z-a.z,b=Math.abs(l),A=Math.abs(c),T=Math.abs(u);let g,x,P,R,C,U,k,D,H,Y,G,ne;if(b>=A&&b>=T?(P=l,U=h,H=_,ne=p,l>=0?(g=c,x=u,R=f,C=m,k=y,D=d,Y=v,G=E):(g=u,x=c,R=m,C=f,k=d,D=y,Y=E,G=v)):A>=T?(P=c,U=f,H=y,ne=v,c>=0?(g=u,x=l,R=m,C=h,k=d,D=_,Y=E,G=p):(g=l,x=u,R=h,C=m,k=_,D=d,Y=p,G=E)):(P=u,U=m,H=d,ne=E,u>=0?(g=l,x=c,R=h,C=f,k=_,D=y,Y=p,G=v):(g=c,x=l,R=f,C=h,k=y,D=_,Y=v,G=p)),P===0)return null;const $=g/P,ee=x/P,te=1/P,Ee=R-$*U,Ne=C-ee*U,Z=k-$*H,ge=D-ee*H,Me=Y-$*ne,Re=G-ee*ne,_e=Me*ge-Re*Z,Oe=Ee*Re-Ne*Me,bt=Z*Ne-ge*Ee;if(s){if(_e<0||Oe<0||bt<0)return null}else if((_e<0||Oe<0||bt<0)&&(_e>0||Oe>0||bt>0))return null;const Pe=_e+Oe+bt;if(Pe===0)return null;const rt=te*(_e*U+Oe*H+bt*ne);return(Pe>0?rt<0:rt>0)?null:this.at(rt/Pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xl extends es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wc=new ht,Ui=new $l,zr=new Sr,$c=new F,Gr=new F,Hr=new F,Vr=new F,po=new F,Wr=new F,Xc=new F,$r=new F;class qe extends At{constructor(e=new Gt,t=new Xl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(po.fromBufferAttribute(h,e),a?Wr.addScaledVector(po,u):Wr.addScaledVector(po.sub(t),u))}t.add(Wr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zr.copy(i.boundingSphere),zr.applyMatrix4(r),Ui.copy(e.ray).recast(e.near),!(zr.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(zr,$c)===null||Ui.origin.distanceToSquared($c)>(e.far-e.near)**2))&&(Wc.copy(r).invert(),Ui.copy(e.ray).applyMatrix4(Wc),!(i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=f.length;_<y;_++){const d=f[_],p=a[d.materialIndex],v=Math.max(d.start,m.start),E=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let b=v,A=E;b<A;b+=3){const T=o.getX(b),g=o.getX(b+1),x=o.getX(b+2);s=Xr(this,p,e,i,c,u,h,T,g,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let d=_,p=y;d<p;d+=3){const v=o.getX(d),E=o.getX(d+1),b=o.getX(d+2);s=Xr(this,a,e,i,c,u,h,v,E,b),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=f.length;_<y;_++){const d=f[_],p=a[d.materialIndex],v=Math.max(d.start,m.start),E=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let b=v,A=E;b<A;b+=3){const T=b,g=b+1,x=b+2;s=Xr(this,p,e,i,c,u,h,T,g,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let d=_,p=y;d<p;d+=3){const v=d,E=d+1,b=d+2;s=Xr(this,a,e,i,c,u,h,v,E,b),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}}function Jh(n,e,t,i,s,r,a,o){let l;if(e.side===tn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Yi,o),l===null)return null;$r.copy(o),$r.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo($r);return c<t.near||c>t.far?null:{distance:c,point:$r.clone(),object:n}}function Xr(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Gr),n.getVertexPosition(l,Hr),n.getVertexPosition(c,Vr);const u=Jh(n,e,t,i,Gr,Hr,Vr,Xc);if(u){const h=new F;An.getBarycoord(Xc,Gr,Hr,Vr,h),s&&(u.uv=An.getInterpolatedAttribute(s,o,l,c,h,new He)),r&&(u.uv1=An.getInterpolatedAttribute(r,o,l,c,h,new He)),a&&(u.normal=An.getInterpolatedAttribute(a,o,l,c,h,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new F,materialIndex:0};An.getNormal(Gr,Hr,Vr,f.normal),u.face=f,u.barycoord=h}return u}class Qh extends Xt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Bt,u=Bt,h,f){super(null,a,o,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fi=new Sr,jh=new He(.5,.5),qr=new F;class pr{constructor(e=new gi,t=new gi,i=new gi,s=new gi,r=new gi,a=new gi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Rn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],m=r[7],_=r[8],y=r[9],d=r[10],p=r[11],v=r[12],E=r[13],b=r[14],A=r[15];if(s[0].setComponents(c-a,m-u,p-_,A-v).normalize(),s[1].setComponents(c+a,m+u,p+_,A+v).normalize(),s[2].setComponents(c+o,m+h,p+y,A+E).normalize(),s[3].setComponents(c-o,m-h,p-y,A-E).normalize(),i)s[4].setComponents(l,f,d,b).normalize(),s[5].setComponents(c-l,m-f,p-d,A-b).normalize();else if(s[4].setComponents(c-l,m-f,p-d,A-b).normalize(),t===Rn)s[5].setComponents(c+l,m+f,p+d,A+b).normalize();else if(t===hr)s[5].setComponents(l,f,d,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){Fi.center.set(0,0,0);const t=jh.distanceTo(e.center);return Fi.radius=.7071067811865476+t,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(qr.x=s.normal.x>0?e.max.x:e.min.x,qr.y=s.normal.y>0?e.max.y:e.min.y,qr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const qc=new ht;class ql{constructor(){this.coordinateSystem=Rn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];qc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new pr),i[s].setFromProjectionMatrix(qc,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new pr),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new ql().copy(this)}}class dl extends es{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sa=new F,ba=new F,Yc=new ht,qs=new $l,Yr=new Sr,mo=new F,Kc=new F;class ep extends At{constructor(e=new Gt,t=new dl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Sa.fromBufferAttribute(t,s-1),ba.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Sa.distanceTo(ba);e.setAttribute("lineDistance",new st(i,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere),Yr.applyMatrix4(s),Yr.radius+=r,e.ray.intersectsSphere(Yr)===!1)return;Yc.copy(s).invert(),qs.copy(e.ray).applyMatrix4(Yc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const m=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let y=m,d=_-1;y<d;y+=c){const p=u.getX(y),v=u.getX(y+1),E=Kr(this,e,qs,l,p,v,y);E&&t.push(E)}if(this.isLineLoop){const y=u.getX(_-1),d=u.getX(m),p=Kr(this,e,qs,l,y,d,_-1);p&&t.push(p)}}else{const m=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let y=m,d=_-1;y<d;y+=c){const p=Kr(this,e,qs,l,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){const y=Kr(this,e,qs,l,_-1,m,_-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Kr(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(Sa.fromBufferAttribute(o,s),ba.fromBufferAttribute(o,r),t.distanceSqToSegment(Sa,ba,mo,Kc)>i)return;mo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(mo);if(!(c<e.near||c>e.far))return{distance:c,point:Kc.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class Zc extends ep{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class wu extends es{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Jc=new ht,ul=new $l,Zr=new Sr,Jr=new F;class tp extends At{constructor(e=new Gt,t=new wu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere),Zr.applyMatrix4(s),Zr.radius+=r,e.ray.intersectsSphere(Zr)===!1)return;Jc.copy(s).invert(),ul.copy(e.ray).applyMatrix4(Jc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=f,y=m;_<y;_++){const d=c.getX(_);Jr.fromBufferAttribute(h,d),Qc(Jr,d,l,s,e,t,this)}}else{const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=f,y=m;_<y;_++)Jr.fromBufferAttribute(h,_),Qc(Jr,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Qc(n,e,t,i,s,r,a){const o=ul.distanceSqToPoint(n);if(o<t){const l=new F;ul.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Au extends Xt{constructor(e=[],t=Ds,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class np extends Xt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ns extends Xt{constructor(e,t,i=Gn,s,r,a,o=Bt,l=Bt,c,u=wi,h=1){if(u!==wi&&u!==bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ru extends Ns{constructor(e,t=Gn,i=Ds,s,r,a=Bt,o=Bt,l,c=wi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Cu extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class kn extends Gt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(h,2));function _(y,d,p,v,E,b,A,T,g,x,P){const R=b/g,C=A/x,U=b/2,k=A/2,D=T/2,H=g+1,Y=x+1;let G=0,ne=0;const $=new F;for(let ee=0;ee<Y;ee++){const te=ee*C-k;for(let Ee=0;Ee<H;Ee++){const Ne=Ee*R-U;$[y]=Ne*v,$[d]=te*E,$[p]=D,c.push($.x,$.y,$.z),$[y]=0,$[d]=0,$[p]=T>0?1:-1,u.push($.x,$.y,$.z),h.push(Ee/g),h.push(1-ee/x),G+=1}}for(let ee=0;ee<x;ee++)for(let te=0;te<g;te++){const Ee=f+te+H*ee,Ne=f+te+H*(ee+1),Z=f+(te+1)+H*(ee+1),ge=f+(te+1)+H*ee;l.push(Ee,Ne,ge),l.push(Ne,Z,ge),ne+=6}o.addGroup(m,ne,P),m+=ne,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class br extends Gt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new F,u=new He;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const m=i+h/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(o,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class jn extends Gt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],m=[];let _=0;const y=[],d=i/2;let p=0;v(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new st(h,3)),this.setAttribute("normal",new st(f,3)),this.setAttribute("uv",new st(m,2));function v(){const b=new F,A=new F;let T=0;const g=(t-e)/i;for(let x=0;x<=r;x++){const P=[],R=x/r,C=R*(t-e)+e;for(let U=0;U<=s;U++){const k=U/s,D=k*l+o,H=Math.sin(D),Y=Math.cos(D);A.x=C*H,A.y=-R*i+d,A.z=C*Y,h.push(A.x,A.y,A.z),b.set(H,g,Y).normalize(),f.push(b.x,b.y,b.z),m.push(k,1-R),P.push(_++)}y.push(P)}for(let x=0;x<s;x++)for(let P=0;P<r;P++){const R=y[P][x],C=y[P+1][x],U=y[P+1][x+1],k=y[P][x+1];(e>0||P!==0)&&(u.push(R,C,k),T+=3),(t>0||P!==r-1)&&(u.push(C,U,k),T+=3)}c.addGroup(p,T,0),p+=T}function E(b){const A=_,T=new He,g=new F;let x=0;const P=b===!0?e:t,R=b===!0?1:-1;for(let U=1;U<=s;U++)h.push(0,d*R,0),f.push(0,R,0),m.push(.5,.5),_++;const C=_;for(let U=0;U<=s;U++){const D=U/s*l+o,H=Math.cos(D),Y=Math.sin(D);g.x=P*Y,g.y=d*R,g.z=P*H,h.push(g.x,g.y,g.z),f.push(0,R,0),T.x=H*.5+.5,T.y=Y*.5*R+.5,m.push(T.x,T.y),_++}for(let U=0;U<s;U++){const k=A+U,D=C+U;b===!0?u.push(D,D+1,k):u.push(D+1,D,k),x+=3}c.addGroup(p,x,b===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $i extends jn{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new $i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ia extends Gt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];o(s),c(i),u(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const E=new F,b=new F,A=new F;for(let T=0;T<t.length;T+=3)m(t[T+0],E),m(t[T+1],b),m(t[T+2],A),l(E,b,A,v)}function l(v,E,b,A){const T=A+1,g=[];for(let x=0;x<=T;x++){g[x]=[];const P=v.clone().lerp(b,x/T),R=E.clone().lerp(b,x/T),C=T-x;for(let U=0;U<=C;U++)U===0&&x===T?g[x][U]=P:g[x][U]=P.clone().lerp(R,U/C)}for(let x=0;x<T;x++)for(let P=0;P<2*(T-x)-1;P++){const R=Math.floor(P/2);P%2===0?(f(g[x][R+1]),f(g[x+1][R]),f(g[x][R])):(f(g[x][R+1]),f(g[x+1][R+1]),f(g[x+1][R]))}}function c(v){const E=new F;for(let b=0;b<r.length;b+=3)E.x=r[b+0],E.y=r[b+1],E.z=r[b+2],E.normalize().multiplyScalar(v),r[b+0]=E.x,r[b+1]=E.y,r[b+2]=E.z}function u(){const v=new F;for(let E=0;E<r.length;E+=3){v.x=r[E+0],v.y=r[E+1],v.z=r[E+2];const b=d(v)/2/Math.PI+.5,A=p(v)/Math.PI+.5;a.push(b,1-A)}_(),h()}function h(){for(let v=0;v<a.length;v+=6){const E=a[v+0],b=a[v+2],A=a[v+4],T=Math.max(E,b,A),g=Math.min(E,b,A);T>.9&&g<.1&&(E<.2&&(a[v+0]+=1),b<.2&&(a[v+2]+=1),A<.2&&(a[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function m(v,E){const b=v*3;E.x=e[b+0],E.y=e[b+1],E.z=e[b+2]}function _(){const v=new F,E=new F,b=new F,A=new F,T=new He,g=new He,x=new He;for(let P=0,R=0;P<r.length;P+=9,R+=6){v.set(r[P+0],r[P+1],r[P+2]),E.set(r[P+3],r[P+4],r[P+5]),b.set(r[P+6],r[P+7],r[P+8]),T.set(a[R+0],a[R+1]),g.set(a[R+2],a[R+3]),x.set(a[R+4],a[R+5]),A.copy(v).add(E).add(b).divideScalar(3);const C=d(A);y(T,R+0,v,C),y(g,R+2,E,C),y(x,R+4,b,C)}}function y(v,E,b,A){A<0&&v.x===1&&(a[E]=v.x-1),b.x===0&&b.z===0&&(a[E]=A/2/Math.PI+.5)}function d(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.vertices,e.indices,e.radius,e.detail)}}class yr extends Ia{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new yr(e.radius,e.detail)}}class Yl extends Ia{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Yl(e.radius,e.detail)}}class Er extends Gt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=e/o,f=t/l,m=[],_=[],y=[],d=[];for(let p=0;p<u;p++){const v=p*f-a;for(let E=0;E<c;E++){const b=E*h-r;_.push(b,-v,0),y.push(0,0,1),d.push(E/o),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const E=v+c*p,b=v+c*(p+1),A=v+1+c*(p+1),T=v+1+c*p;m.push(E,b,T),m.push(b,A,T)}this.setIndex(m),this.setAttribute("position",new st(_,3)),this.setAttribute("normal",new st(y,3)),this.setAttribute("uv",new st(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.width,e.height,e.widthSegments,e.heightSegments)}}class Kl extends Gt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let h=e;const f=(t-e)/s,m=new F,_=new He;for(let y=0;y<=s;y++){for(let d=0;d<=i;d++){const p=r+d/i*a;m.x=h*Math.cos(p),m.y=h*Math.sin(p),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,u.push(_.x,_.y)}h+=f}for(let y=0;y<s;y++){const d=y*(i+1);for(let p=0;p<i;p++){const v=p+d,E=v,b=v+i+1,A=v+i+2,T=v+1;o.push(E,b,T),o.push(b,A,T)}}this.setIndex(o),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Zl extends Gt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new F,f=new F,m=[],_=[],y=[],d=[];for(let p=0;p<=i;p++){const v=[],E=p/i,b=a+E*o,A=e*Math.cos(b),T=Math.sqrt(e*e-A*A);let g=0;p===0&&a===0?g=.5/t:p===i&&l===Math.PI&&(g=-.5/t);for(let x=0;x<=t;x++){const P=x/t,R=s+P*r;h.x=-T*Math.cos(R),h.y=A,h.z=T*Math.sin(R),_.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),d.push(P+g,1-E),v.push(c++)}u.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){const E=u[p][v+1],b=u[p][v],A=u[p+1][v],T=u[p+1][v+1];(p!==0||a>0)&&m.push(E,b,T),(p!==i-1||l<Math.PI)&&m.push(b,A,T)}this.setIndex(m),this.setAttribute("position",new st(_,3)),this.setAttribute("normal",new st(y,3)),this.setAttribute("uv",new st(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nr extends Gt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],h=[],f=new F,m=new F,_=new F;for(let y=0;y<=i;y++){const d=a+y/i*o;for(let p=0;p<=s;p++){const v=p/s*r;m.x=(e+t*Math.cos(d))*Math.cos(v),m.y=(e+t*Math.cos(d))*Math.sin(v),m.z=t*Math.sin(d),c.push(m.x,m.y,m.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),_.subVectors(m,f).normalize(),u.push(_.x,_.y,_.z),h.push(p/s),h.push(y/i)}}for(let y=1;y<=i;y++)for(let d=1;d<=s;d++){const p=(s+1)*y+d-1,v=(s+1)*(y-1)+d-1,E=(s+1)*(y-1)+d,b=(s+1)*y+d;l.push(p,v,b),l.push(v,E,b)}this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Us(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(jc(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(jc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Yt(n){const e={};for(let t=0;t<n.length;t++){const i=Us(n[t]);for(const s in i)e[s]=i[s]}return e}function jc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ip(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Pu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const sp={clone:Us,merge:Yt};var rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ap=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rp,this.fragmentShader=ap,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=ip(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ke().setHex(s.value);break;case"v2":this.uniforms[i].value=new He().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new vt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ie().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ht().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class op extends Zi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Lu extends es{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ll,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Fl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lp extends es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cp extends es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Du extends At{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class dp extends Du{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const go=new ht,ed=new F,td=new F;class up{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pr,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;ed.setFromMatrixPosition(e.matrixWorld),t.position.copy(ed),td.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(td),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){go.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(go,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===hr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(go)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qr=new F,jr=new ks,Ln=new F;class Iu extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qr,jr,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qr,jr,Ln.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Qr,jr,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qr,jr,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const mi=new F,nd=new He,id=new He;class En extends Iu{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cl*2*Math.atan(Math.tan(Xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,nd,id),t.subVectors(id,nd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Nu extends Iu{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class fp extends up{constructor(){super(new Nu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hp extends Du{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new fp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const us=-90,fs=1;class fl extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new En(us,fs,e,t);s.layers=this.layers,this.add(s);const r=new En(us,fs,e,t);r.layers=this.layers,this.add(r);const a=new En(us,fs,e,t);a.layers=this.layers,this.add(a);const o=new En(us,fs,e,t);o.layers=this.layers,this.add(o);const l=new En(us,fs,e,t);l.layers=this.layers,this.add(l);const c=new En(us,fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Rn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let d=!1;e.isWebGLRenderer===!0?d=e.state.buffers.depth.getReversed():d=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=y,e.setRenderTarget(i,5,s),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class pp extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function sd(n,e,t,i){const s=mp(i);switch(t){case pu:return n*e;case gu:return n*e/s.components*s.byteLength;case zl:return n*e/s.components*s.byteLength;case Ki:return n*e*2/s.components*s.byteLength;case Gl:return n*e*2/s.components*s.byteLength;case mu:return n*e*3/s.components*s.byteLength;case On:return n*e*4/s.components*s.byteLength;case Hl:return n*e*4/s.components*s.byteLength;case la:case ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case da:case ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Io:case Uo:return Math.max(n,16)*Math.max(e,8)/4;case Do:case No:return Math.max(n,8)*Math.max(e,8)/2;case Fo:case Oo:case ko:case zo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Bo:case ga:case Go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case $o:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Xo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case qo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ko:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Zo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case jo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case el:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case tl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case nl:case il:case sl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case rl:case al:return Math.ceil(n/4)*Math.ceil(e/4)*8;case _a:case ol:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mp(n){switch(n){case dn:case du:return{byteLength:1,components:1};case fr:case uu:case Hn:return{byteLength:2,components:1};case Bl:case kl:return{byteLength:2,components:4};case Gn:case Ol:case Fn:return{byteLength:4,components:1};case fu:case hu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ul}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ul);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Uu(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function gp(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<h.length;m++){const _=h[f],y=h[m];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++f,h[f]=y)}h.length=f+1;for(let m=0,_=h.length;m<_;m++){const y=h[m];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var _p=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vp=`#ifdef USE_ALPHAHASH
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
#endif`,xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yp=`#ifdef USE_AOMAP
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
#endif`,Ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tp=`#ifdef USE_BATCHING
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
#endif`,wp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pp=`#ifdef USE_IRIDESCENCE
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
#endif`,Lp=`#ifdef USE_BUMPMAP
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
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,zp=`#define PI 3.141592653589793
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
} // validated`,Gp=`vec3 transformedNormal = objectNormal;
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
#endif`,Hp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yp=`#ifdef USE_ENVMAP
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
#endif`,Kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qp=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,im=`#ifdef USE_GRADIENTMAP
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
}`,sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,om=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hm=`PhysicalMaterial material;
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
#endif`,pm=`uniform sampler2D dfgLUT;
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
}`,mm=`
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
#endif`,gm=`#if defined( RE_IndirectDiffuse )
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
#endif`,_m=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ym=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Em=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wm=`#if defined( USE_POINTS_UV )
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
#endif`,Am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pm=`#if defined( USE_MORPHCOLORS )
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
#endif`,Lm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dm=`#ifdef USE_MORPHTARGETS
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
#endif`,Im=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Um=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,km=`#ifdef USE_NORMALMAP
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
#endif`,zm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$m=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,t0=`float getShadowMask() {
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
}`,n0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i0=`#ifdef USE_SKINNING
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
#endif`,s0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r0=`#ifdef USE_SKINNING
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
#endif`,a0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d0=`#ifdef USE_TRANSMISSION
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
#endif`,u0=`#ifdef USE_TRANSMISSION
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
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const g0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_0=`uniform sampler2D t2D;
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
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`uniform float backgroundBlurriness;
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
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`#include <common>
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
}`,y0=`#if DEPTH_PACKING == 3200
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
}`,E0=`#define DISTANCE
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
}`,T0=`#define DISTANCE
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
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`uniform float scale;
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
}`,C0=`uniform vec3 diffuse;
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
}`,P0=`#include <common>
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
}`,L0=`uniform vec3 diffuse;
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
}`,D0=`#define LAMBERT
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
}`,I0=`#define LAMBERT
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
}`,N0=`#define MATCAP
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
}`,U0=`#define MATCAP
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
}`,F0=`#define NORMAL
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
}`,O0=`#define NORMAL
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
}`,B0=`#define PHONG
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
}`,k0=`#define PHONG
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
}`,z0=`#define STANDARD
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
}`,G0=`#define STANDARD
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
}`,H0=`#define TOON
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
}`,V0=`#define TOON
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
}`,W0=`uniform float size;
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
}`,$0=`uniform vec3 diffuse;
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
}`,X0=`#include <common>
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
}`,q0=`uniform vec3 color;
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
}`,Y0=`uniform float rotation;
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
}`,K0=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:_p,alphahash_pars_fragment:vp,alphamap_fragment:xp,alphamap_pars_fragment:Mp,alphatest_fragment:Sp,alphatest_pars_fragment:bp,aomap_fragment:yp,aomap_pars_fragment:Ep,batching_pars_vertex:Tp,batching_vertex:wp,begin_vertex:Ap,beginnormal_vertex:Rp,bsdfs:Cp,iridescence_fragment:Pp,bumpmap_pars_fragment:Lp,clipping_planes_fragment:Dp,clipping_planes_pars_fragment:Ip,clipping_planes_pars_vertex:Np,clipping_planes_vertex:Up,color_fragment:Fp,color_pars_fragment:Op,color_pars_vertex:Bp,color_vertex:kp,common:zp,defaultnormal_vertex:Gp,displacementmap_pars_vertex:Hp,displacementmap_vertex:Vp,emissivemap_fragment:Wp,emissivemap_pars_fragment:$p,colorspace_fragment:Xp,colorspace_pars_fragment:qp,envmap_fragment:Yp,envmap_common_pars_fragment:Kp,envmap_pars_fragment:Zp,envmap_pars_vertex:Jp,envmap_physical_pars_fragment:lm,envmap_vertex:Qp,fog_vertex:jp,fog_pars_vertex:em,fog_fragment:tm,fog_pars_fragment:nm,gradientmap_pars_fragment:im,lightmap_pars_fragment:sm,lights_lambert_fragment:rm,lights_lambert_pars_fragment:am,lights_pars_begin:om,lights_toon_fragment:cm,lights_toon_pars_fragment:dm,lights_phong_fragment:um,lights_phong_pars_fragment:fm,lights_physical_fragment:hm,lights_physical_pars_fragment:pm,lights_fragment_begin:mm,lights_fragment_maps:gm,lights_fragment_end:_m,lightprobes_pars_fragment:vm,logdepthbuf_fragment:xm,logdepthbuf_pars_fragment:Mm,logdepthbuf_pars_vertex:Sm,logdepthbuf_vertex:bm,map_fragment:ym,map_pars_fragment:Em,map_particle_fragment:Tm,map_particle_pars_fragment:wm,metalnessmap_fragment:Am,metalnessmap_pars_fragment:Rm,morphinstance_vertex:Cm,morphcolor_vertex:Pm,morphnormal_vertex:Lm,morphtarget_pars_vertex:Dm,morphtarget_vertex:Im,normal_fragment_begin:Nm,normal_fragment_maps:Um,normal_pars_fragment:Fm,normal_pars_vertex:Om,normal_vertex:Bm,normalmap_pars_fragment:km,clearcoat_normal_fragment_begin:zm,clearcoat_normal_fragment_maps:Gm,clearcoat_pars_fragment:Hm,iridescence_pars_fragment:Vm,opaque_fragment:Wm,packing:$m,premultiplied_alpha_fragment:Xm,project_vertex:qm,dithering_fragment:Ym,dithering_pars_fragment:Km,roughnessmap_fragment:Zm,roughnessmap_pars_fragment:Jm,shadowmap_pars_fragment:Qm,shadowmap_pars_vertex:jm,shadowmap_vertex:e0,shadowmask_pars_fragment:t0,skinbase_vertex:n0,skinning_pars_vertex:i0,skinning_vertex:s0,skinnormal_vertex:r0,specularmap_fragment:a0,specularmap_pars_fragment:o0,tonemapping_fragment:l0,tonemapping_pars_fragment:c0,transmission_fragment:d0,transmission_pars_fragment:u0,uv_pars_fragment:f0,uv_pars_vertex:h0,uv_vertex:p0,worldpos_vertex:m0,background_vert:g0,background_frag:_0,backgroundCube_vert:v0,backgroundCube_frag:x0,cube_vert:M0,cube_frag:S0,depth_vert:b0,depth_frag:y0,distance_vert:E0,distance_frag:T0,equirect_vert:w0,equirect_frag:A0,linedashed_vert:R0,linedashed_frag:C0,meshbasic_vert:P0,meshbasic_frag:L0,meshlambert_vert:D0,meshlambert_frag:I0,meshmatcap_vert:N0,meshmatcap_frag:U0,meshnormal_vert:F0,meshnormal_frag:O0,meshphong_vert:B0,meshphong_frag:k0,meshphysical_vert:z0,meshphysical_frag:G0,meshtoon_vert:H0,meshtoon_frag:V0,points_vert:W0,points_frag:$0,shadow_vert:X0,shadow_frag:q0,sprite_vert:Y0,sprite_frag:K0},me={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},Nn={basic:{uniforms:Yt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Yt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Yt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Yt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Yt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Yt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Yt([me.points,me.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Yt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Yt([me.common,me.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Yt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Yt([me.sprite,me.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Yt([me.common,me.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Yt([me.lights,me.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Nn.physical={uniforms:Yt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const ea={r:0,b:0,g:0},Z0=new ht,Fu=new Ie;Fu.set(-1,0,0,0,1,0,0,0,1);function J0(n,e,t,i,s,r){const a=new ke(0);let o=s===!0?0:1,l,c,u=null,h=0,f=null;function m(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){const b=v.backgroundBlurriness>0;E=e.get(E,b)}return E}function _(v){let E=!1;const b=m(v);b===null?d(a,o):b&&b.isColor&&(d(b,1),E=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(v,E){const b=m(E);b&&b.isCubeTexture?(c===void 0&&(c=new qe(new kn(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Us(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Z0.makeRotationFromEuler(E.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Fu),c.material.toneMapped=Ke.getTransfer(b.colorSpace)!==ot,(u!==b||h!==b.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new qe(new Er(2,2),new Zi({name:"BackgroundMaterial",uniforms:Us(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(b.colorSpace)!==ot,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,h=b.version,f=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function d(v,E){v.getRGB(ea,Pu(n)),t.buffers.color.setClear(ea.r,ea.g,ea.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,E=1){a.set(v),o=E,d(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,d(a,o)},render:_,addToRenderList:y,dispose:p}}function Q0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(C,U,k,D,H){let Y=!1;const G=h(C,D,k,U);r!==G&&(r=G,c(r.object)),Y=m(C,D,k,H),Y&&_(C,D,k,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,b(C,U,k,D),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function c(C){return n.bindVertexArray(C)}function u(C){return n.deleteVertexArray(C)}function h(C,U,k,D){const H=D.wireframe===!0;let Y=i[U.id];Y===void 0&&(Y={},i[U.id]=Y);const G=C.isInstancedMesh===!0?C.id:0;let ne=Y[G];ne===void 0&&(ne={},Y[G]=ne);let $=ne[k.id];$===void 0&&($={},ne[k.id]=$);let ee=$[H];return ee===void 0&&(ee=f(l()),$[H]=ee),ee}function f(C){const U=[],k=[],D=[];for(let H=0;H<t;H++)U[H]=0,k[H]=0,D[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:D,object:C,attributes:{},index:null}}function m(C,U,k,D){const H=r.attributes,Y=U.attributes;let G=0;const ne=k.getAttributes();for(const $ in ne)if(ne[$].location>=0){const te=H[$];let Ee=Y[$];if(Ee===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(Ee=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(Ee=C.instanceColor)),te===void 0||te.attribute!==Ee||Ee&&te.data!==Ee.data)return!0;G++}return r.attributesNum!==G||r.index!==D}function _(C,U,k,D){const H={},Y=U.attributes;let G=0;const ne=k.getAttributes();for(const $ in ne)if(ne[$].location>=0){let te=Y[$];te===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(te=C.instanceColor));const Ee={};Ee.attribute=te,te&&te.data&&(Ee.data=te.data),H[$]=Ee,G++}r.attributes=H,r.attributesNum=G,r.index=D}function y(){const C=r.newAttributes;for(let U=0,k=C.length;U<k;U++)C[U]=0}function d(C){p(C,0)}function p(C,U){const k=r.newAttributes,D=r.enabledAttributes,H=r.attributeDivisors;k[C]=1,D[C]===0&&(n.enableVertexAttribArray(C),D[C]=1),H[C]!==U&&(n.vertexAttribDivisor(C,U),H[C]=U)}function v(){const C=r.newAttributes,U=r.enabledAttributes;for(let k=0,D=U.length;k<D;k++)U[k]!==C[k]&&(n.disableVertexAttribArray(k),U[k]=0)}function E(C,U,k,D,H,Y,G){G===!0?n.vertexAttribIPointer(C,U,k,H,Y):n.vertexAttribPointer(C,U,k,D,H,Y)}function b(C,U,k,D){y();const H=D.attributes,Y=k.getAttributes(),G=U.defaultAttributeValues;for(const ne in Y){const $=Y[ne];if($.location>=0){let ee=H[ne];if(ee===void 0&&(ne==="instanceMatrix"&&C.instanceMatrix&&(ee=C.instanceMatrix),ne==="instanceColor"&&C.instanceColor&&(ee=C.instanceColor)),ee!==void 0){const te=ee.normalized,Ee=ee.itemSize,Ne=e.get(ee);if(Ne===void 0)continue;const Z=Ne.buffer,ge=Ne.type,Me=Ne.bytesPerElement,Re=ge===n.INT||ge===n.UNSIGNED_INT||ee.gpuType===Ol;if(ee.isInterleavedBufferAttribute){const _e=ee.data,Oe=_e.isInterleavedBuffer===!0?_e.stride:_e.itemSize,bt=ee.offset;if(_e.isInstancedInterleavedBuffer||_e.isInstancedBufferAttribute){for(let Pe=0;Pe<$.locationSize;Pe++)p($.location+Pe,_e.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Pe=0;Pe<$.locationSize;Pe++)d($.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let Pe=0;Pe<$.locationSize;Pe++)E($.location+Pe,Ee/$.locationSize,ge,te,Oe*Me,(bt+Ee/$.locationSize*Pe)*Me,Re)}else{if(ee.isInstancedBufferAttribute){for(let _e=0;_e<$.locationSize;_e++)p($.location+_e,ee.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let _e=0;_e<$.locationSize;_e++)d($.location+_e);n.bindBuffer(n.ARRAY_BUFFER,Z);for(let _e=0;_e<$.locationSize;_e++)E($.location+_e,Ee/$.locationSize,ge,te,Ee*Me,Ee/$.locationSize*_e*Me,Re)}}else if(G!==void 0){const te=G[ne];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv($.location,te);break;case 3:n.vertexAttrib3fv($.location,te);break;case 4:n.vertexAttrib4fv($.location,te);break;default:n.vertexAttrib1fv($.location,te)}}}}v()}function A(){P();for(const C in i){const U=i[C];for(const k in U){const D=U[k];for(const H in D){const Y=D[H];for(const G in Y)u(Y[G].object),delete Y[G];delete D[H]}}delete i[C]}}function T(C){if(i[C.id]===void 0)return;const U=i[C.id];for(const k in U){const D=U[k];for(const H in D){const Y=D[H];for(const G in Y)u(Y[G].object),delete Y[G];delete D[H]}}delete i[C.id]}function g(C){for(const U in i){const k=i[U];for(const D in k){const H=k[D];if(H[C.id]===void 0)continue;const Y=H[C.id];for(const G in Y)u(Y[G].object),delete Y[G];delete H[C.id]}}}function x(C){for(const U in i){const k=i[U],D=C.isInstancedMesh===!0?C.id:0,H=k[D];if(H!==void 0){for(const Y in H){const G=H[Y];for(const ne in G)u(G[ne].object),delete G[ne];delete H[Y]}delete k[D],Object.keys(k).length===0&&delete i[U]}}}function P(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:g,initAttributes:y,enableAttribute:d,disableUnusedAttributes:v}}function j0(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let m=0;m<u;m++)f+=c[m];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function eg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==On&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const x=g===Hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==dn&&g!==Fn&&!x&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Le("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&Le("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:b,maxSamples:A,samples:T}}function tg(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new gi,o=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||s;return s=f,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,y=h.clipIntersection,d=h.clipShadows,p=n.get(h);if(!s||_===null||_.length===0||r&&!d)r?u(null):c();else{const v=r?0:i,E=v*4;let b=p.clippingState||null;l.value=b,b=u(_,f,E,m);for(let A=0;A!==E;++A)b[A]=t[A];p.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,m,_){const y=h!==null?h.length:0;let d=null;if(y!==0){if(d=l.value,_!==!0||d===null){const p=m+y*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(d===null||d.length<p)&&(d=new Float32Array(p));for(let E=0,b=m;E!==y;++E,b+=4)a.copy(h[E]).applyMatrix4(v,o),a.normal.toArray(d,b),d[b+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,d}}class Jl extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Au(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kn(5,5,5),r=new Zi({name:"CubemapFromEquirect",uniforms:Us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:ws});r.uniforms.tEquirect.value=t;const a=new qe(s,r),o=t.minFilter;return t.minFilter===Si&&(t.minFilter=en),new fl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const rd=256,ng=3,ig=20,Ou=256,Bu=16,sg=3,rg=new F,ag=new ke;class ya{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new fl(1,10,null),this._boxMesh=new qe(new kn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=rg}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const h=l.autoClear,f=l.autoClearColor,m=l.autoClearDepth,_=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(ag));const d=new fl(i,s,u);return d.position.copy(o),d.update(l,e),l.autoClear=h,l.autoClearColor=f,l.autoClearDepth=m,l.autoClearStencil=_,e.background=y,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(rd,Rh(e))}_fromTexture(e,t){e.mapping===Ds||e.mapping===ur?this._setSize(e.image.length===0?rd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=ad(e,!1,!1),i=Math.log2(e)-ng;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=ad(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ds||e.mapping===ur?(this._cubemapMaterial===null&&(this._cubemapMaterial=ld()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=od()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=og(),this._integrationMaterial=lg());const t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Bu);for(let a=0;a<=i;a++){const o=ya.lodToRoughness(a,i);if(a>i-sg)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(Ou*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=cg());const i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}}function ad(n,e,t){return new Jl(n,{minFilter:Si,generateMipmaps:e,type:Hn,colorSpace:va,depthBuffer:t})}function Tr(n,e,t){return new Zi({name:n,uniforms:e,vertexShader:Ge.cube_vert,fragmentShader:t,side:tn,blending:ws,depthTest:!1,depthWrite:!1})}function og(){return Tr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ou}u

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
	`)}function lg(){return Tr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Bu}},`

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
	`)}function cg(){return Tr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ig}
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
	`)}function od(){return Tr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function ld(){return Tr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function dg(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,m=!1){return f==null?null:m?a(f):r(f)}function r(f){if(f&&f.isTexture){const m=f.mapping;if(m===Ha||m===Va)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const y=new Jl(_.height);return y.fromEquirectangularTexture(n,f),e.set(f,y),f.addEventListener("dispose",c),o(y.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const m=f.mapping,_=m===Ha||m===Va,y=m===Ds||m===ur;if(_||y){let d=t.get(f);const p=d!==void 0?d.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new ya(n)),d=_?i.fromEquirectangular(f,d):i.fromCubemap(f,d),d.texture.pmremVersion=f.pmremVersion,t.set(f,d),d.texture;if(d!==void 0)return d.texture;{const v=f.image;return _&&v&&v.height>0||y&&v&&l(v)?(i===null&&(i=new ya(n)),d=_?i.fromEquirectangular(f):i.fromCubemap(f),d.texture.pmremVersion=f.pmremVersion,t.set(f,d),f.addEventListener("dispose",u),d.texture):null}}}return f}function o(f,m){return m===Ha?f.mapping=Ds:m===Va&&(f.mapping=ur),f}function l(f){let m=0;const _=6;for(let y=0;y<_;y++)f[y]!==void 0&&m++;return m===_}function c(f){const m=f.target;m.removeEventListener("dispose",c);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function u(f){const m=f.target;m.removeEventListener("dispose",u);const _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function ug(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&fa("WebGLRenderer: "+i+" extension not supported."),s}}}function fg(n,e,t,i){const s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(const d in _.attributes)e.remove(_.attributes[d]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);const y=r.get(_);y&&(e.remove(y),r.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(_,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function u(_){const y=_.attributes;for(const d in y)e.update(y[d],n.ARRAY_BUFFER)}function h(_){const y=_.index,d=_.attributes.position;let p=0;if(d===void 0)return;const v=y!==null?y.array.length:d.array.length/3-1,E=d.count>=65535?Tu:Eu,b=new E(Math.ceil(v/3)*6,1),A=b.array;if(y!==null){const g=y.array;p=y.version;for(let x=0,P=0;x<v;x+=3){const R=g[x+0],C=g[x+1],U=g[x+2];A[P++]=R,A[P++]=C,A[P++]=C,A[P++]=U,A[P++]=U,A[P++]=R}}else{p=d.version;for(let g=0,x=0;g<v;g+=3){const P=g+0,R=g+1,C=g+2;A[x++]=P,A[x++]=R,A[x++]=R,A[x++]=C,A[x++]=C,A[x++]=P}}b.version=p;const T=r.get(_);T&&e.remove(T),r.set(_,b)}function f(_){const y=r.get(_);if(y){const d=_.index;d!==null&&y.version<d.version&&h(_)}else h(_);return r.get(_)}function m(){for(const _ in s){const y=s[_].deref();y!==void 0&&l(y)}}return{get:c,update:u,getWireframeAttribute:f,dispose:m}}function hg(n,e,t){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,f){n.drawElements(i,f,r,h*a),t.update(f,i,1)}function c(h,f,m){m!==0&&(n.drawElementsInstanced(i,f,r,h*a,m),t.update(f,i,m))}function u(h,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,m);let y=0;for(let d=0;d<m;d++)y+=f[d];t.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function pg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:tt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function mg(n,e,t){const i=new WeakMap,s=new vt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let R=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",R)};var m=R;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let b=0;_===!0&&(b=1),y===!0&&(b=2),d===!0&&(b=3);let A=o.attributes.position.count*b,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const g=new Float32Array(A*T*4*h),x=new Su(g,A,T,h);x.type=Fn,x.needsUpdate=!0;const P=b*4;for(let C=0;C<h;C++){const U=p[C],k=v[C],D=E[C],H=A*T*4*C;for(let Y=0;Y<U.count;Y++){const G=Y*P;_===!0&&(s.fromBufferAttribute(U,Y),g[H+G+0]=s.x,g[H+G+1]=s.y,g[H+G+2]=s.z,g[H+G+3]=0),y===!0&&(s.fromBufferAttribute(k,Y),g[H+G+4]=s.x,g[H+G+5]=s.y,g[H+G+6]=s.z,g[H+G+7]=0),d===!0&&(s.fromBufferAttribute(D,Y),g[H+G+8]=s.x,g[H+G+9]=s.y,g[H+G+10]=s.z,g[H+G+11]=D.itemSize===4?s.w:1)}}f={count:h,texture:x,size:new He(A,T)},i.set(o,f),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let d=0;d<c.length;d++)_+=c[d];const y=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function gg(n,e,t,i,s){let r=new WeakMap;function a(c){const u=s.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return f}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const _g={[nu]:"LINEAR_TONE_MAPPING",[iu]:"REINHARD_TONE_MAPPING",[su]:"CINEON_TONE_MAPPING",[ru]:"ACES_FILMIC_TONE_MAPPING",[ou]:"AGX_TONE_MAPPING",[lu]:"NEUTRAL_TONE_MAPPING",[au]:"CUSTOM_TONE_MAPPING"};function vg(n,e,t,i,s,r){const a=new Bn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new Gt;u.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new st([0,2,0,0,2,0],2));const h=new op({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new qe(u,h),m=new Nu(-1,1,1,-1,0,1);let _=null,y=null,d=!1,p,v=null,E=[],b=!1;this.setSize=function(A,T){a.setSize(A,T),o!==null&&o.setSize(A,T),l!==null&&l.setSize(A,T);for(let g=0;g<E.length;g++){const x=E[g];x.setSize&&x.setSize(A,T)}},this.setEffects=function(A){E=A,b=E.length>0&&E[0].isRenderPass===!0;const T=a.width,g=a.height;E.length>0&&o===null&&(o=new Bn(T,g,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),l=new Bn(T,g,{type:Hn,depthBuffer:!1,stencilBuffer:!1}));const x=s===!0&&E.some(P=>P.needsDepthTexture===!0);x!==(a.depthTexture!==null)&&(x===!0&&c===null&&(c=new Ns(T,g),r===!0&&(c.format=bi,c.type=Is)),a.dispose(),a.depthTexture=x?c:null,a.resolveDepthBuffer=x,a.storeMultisampledDepthBuffer=x);for(let P=0;P<E.length;P++){const R=E[P];R.setSize&&R.setSize(T,g),x&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(A,T){if(d||A.toneMapping===ri&&E.length===0)return!1;if(v=T,T!==null){const g=T.width,x=T.height;(a.width!==g||a.height!==x)&&this.setSize(g,x)}return b===!1&&A.setRenderTarget(a),p=A.toneMapping,A.toneMapping=ri,!0},this.hasRenderPass=function(){return b},this.end=function(A,T){A.toneMapping=p,d=!0;let g=a,x=o;for(let P=0;P<E.length;P++){const R=E[P];R.enabled!==!1&&(R.render(A,x,g,T),R.needsSwap!==!1&&(g=x,x=x===o?l:o))}if(_!==A.outputColorSpace||y!==A.toneMapping){_=A.outputColorSpace,y=A.toneMapping,h.defines={},Ke.getTransfer(_)===ot&&(h.defines.SRGB_TRANSFER="");const P=_g[y];P&&(h.defines[P]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=g.texture,A.setRenderTarget(v),A.render(f,m),v=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}const ku=new Xt,zu=new Ns(1,1),Gu=new Ru(1),Hu=new Su,Vu=new Fh,Wu=new Au,cd=[],dd=[],ud=new Float32Array(16),fd=new Float32Array(9),hd=new Float32Array(4);function zs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=cd[s];if(r===void 0&&(r=new Float32Array(s),cd[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Na(n,e){let t=dd[e];t===void 0&&(t=new Int32Array(e),dd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function xg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function Sg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function yg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;hd.set(i),n.uniformMatrix2fv(this.addr,!1,hd),Ct(t,i)}}function Eg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;fd.set(i),n.uniformMatrix3fv(this.addr,!1,fd),Ct(t,i)}}function Tg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;ud.set(i),n.uniformMatrix4fv(this.addr,!1,ud),Ct(t,i)}}function wg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function Rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function Cg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function Pg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function Dg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function Ig(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function Ua(n){return n.version===0&&(n.compareFunction=xu,n.needsUpdate=!0),n}function Ng(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Ua(zu):r=ku,t.setTexture2D(e||r,s)}function Ug(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Vu,s)}function Fg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Ua(Gu):r=Wu,t.setTextureCube(e||r,s)}function Og(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Hu,s)}function Bg(n){switch(n){case 5126:return xg;case 35664:return Mg;case 35665:return Sg;case 35666:return bg;case 35674:return yg;case 35675:return Eg;case 35676:return Tg;case 5124:case 35670:return wg;case 35667:case 35671:return Ag;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Pg;case 36294:return Lg;case 36295:return Dg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Og}}function kg(n,e){n.uniform1fv(this.addr,e)}function zg(n,e){const t=zs(e,this.size,2);n.uniform2fv(this.addr,t)}function Gg(n,e){const t=zs(e,this.size,3);n.uniform3fv(this.addr,t)}function Hg(n,e){const t=zs(e,this.size,4);n.uniform4fv(this.addr,t)}function Vg(n,e){const t=zs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Wg(n,e){const t=zs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function $g(n,e){const t=zs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Xg(n,e){n.uniform1iv(this.addr,e)}function qg(n,e){n.uniform2iv(this.addr,e)}function Yg(n,e){n.uniform3iv(this.addr,e)}function Kg(n,e){n.uniform4iv(this.addr,e)}function Zg(n,e){n.uniform1uiv(this.addr,e)}function Jg(n,e){n.uniform2uiv(this.addr,e)}function Qg(n,e){n.uniform3uiv(this.addr,e)}function jg(n,e){n.uniform4uiv(this.addr,e)}function e_(n,e,t){const i=this.cache,s=e.length,r=Na(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Ua(zu):a=ku;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function t_(n,e,t){const i=this.cache,s=e.length,r=Na(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Vu,r[a])}function n_(n,e,t){const i=this.cache,s=e.length,r=Na(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Ua(Gu):a=Wu;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function i_(n,e,t){const i=this.cache,s=e.length,r=Na(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Hu,r[a])}function s_(n){switch(n){case 5126:return kg;case 35664:return zg;case 35665:return Gg;case 35666:return Hg;case 35674:return Vg;case 35675:return Wg;case 35676:return $g;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return Kg;case 5125:return Zg;case 36294:return Jg;case 36295:return Qg;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return t_;case 35680:case 36300:case 36308:case 36293:return n_;case 36289:case 36303:case 36311:case 36292:return i_}}class r_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Bg(t.type)}}class a_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=s_(t.type)}}class o_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const _o=/(\w+)(\])?(\[|\.)?/g;function pd(n,e){n.seq.push(e),n.map[e.id]=e}function l_(n,e,t){const i=n.name,s=i.length;for(_o.lastIndex=0;;){const r=_o.exec(i),a=_o.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){pd(t,c===void 0?new r_(o,n,e):new a_(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new o_(o),pd(t,h)),t=h}}}class ha{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);l_(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function md(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const c_=37297;let d_=0;function u_(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const gd=new Ie;function f_(n){Ke._getMatrix(gd,Ke.workingColorSpace,n);const e=`mat3( ${gd.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case xa:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function _d(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+u_(n.getShaderSource(e),o)}else return r}function h_(n,e){const t=f_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const p_={[nu]:"Linear",[iu]:"Reinhard",[su]:"Cineon",[ru]:"ACESFilmic",[ou]:"AgX",[lu]:"Neutral",[au]:"Custom"};function m_(n,e){const t=p_[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ta=new F;function g_(){Ke.getLuminanceCoefficients(ta);const n=ta.x.toFixed(4),e=ta.y.toFixed(4),t=ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function __(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function v_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function x_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Js(n){return n!==""}function vd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function xd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const M_=/^[ \t]*#include +<([\w\d./]+)>/gm;function hl(n){return n.replace(M_,S_)}function S_(n,e){const t=Ge[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return hl(t)}const b_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Md(n){return n.replace(b_,y_)}function y_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const E_={[oa]:"SHADOWMAP_TYPE_PCF",[Zs]:"SHADOWMAP_TYPE_VSM"};function T_(n){return E_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const w_={[ur]:"ENVMAP_MODE_REFRACTION"};function A_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":w_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const R_={[Fl]:"ENVMAP_BLENDING_MULTIPLY",[uh]:"ENVMAP_BLENDING_MIX",[fh]:"ENVMAP_BLENDING_ADD"};function C_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":R_[n.combine]||"ENVMAP_BLENDING_NONE"}function P_(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=T_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=A_(t),h=C_(t),f=__(t),m=v_(r),_=s.createProgram();let y,d,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Js).join(`
`),y.length>0&&(y+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Js).join(`
`),d.length>0&&(d+=`
`)):(y=[Sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),d=[Sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?Ge.tonemapping_pars_fragment:"",t.toneMapping!==ri?m_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,h_("linearToOutputTexel",t.outputColorSpace),g_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Js).join(`
`)),a=hl(a),a=vd(a,t),a=xd(a,t),o=hl(o),o=vd(o,t),o=xd(o,t),a=Md(a),o=Md(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,d=["#define varying in",t.glslVersion===Pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=p+y+a,E=p+d+o,b=md(s,s.VERTEX_SHADER,v),A=md(s,s.FRAGMENT_SHADER,E);s.attachShader(_,b),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(R){if(n.debug.checkShaderErrors){const C=s.getProgramInfoLog(_)||"",U=s.getShaderInfoLog(b)||"",k=s.getShaderInfoLog(A)||"",D=C.trim(),H=U.trim(),Y=k.trim();let G=!0,ne=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,b,A);else{const $=_d(s,b,"vertex"),ee=_d(s,A,"fragment");tt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+$+`
`+ee)}else D!==""?Le("WebGLProgram: Program Info Log:",D):(H===""||Y==="")&&(ne=!1);ne&&(R.diagnostics={runnable:G,programLog:D,vertexShader:{log:H,prefix:y},fragmentShader:{log:Y,prefix:d}})}s.deleteShader(b),s.deleteShader(A),g=new ha(s,_),x=x_(s,_)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let x;this.getAttributes=function(){return x===void 0&&T(this),x};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(_,c_)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=A,this}let L_=0;class D_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new I_(e),t.set(e,i)),i}}class I_{constructor(e){this.id=L_++,this.code=e,this.usedTimes=0}}function N_(n){return n===Ki||n===ga||n===_a}function U_(n,e,t,i,s,r){const a=new bu,o=new D_,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,x,P,R,C,U){const k=R.fog,D=C.geometry,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?R.environment:null,Y=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,G=e.get(g.envMap||H,Y),ne=f[g.type];let $=i.precision;g.precision!==null&&($=i.getMaxPrecision(g.precision),$!==g.precision&&Le("WebGLProgram.getParameters:",g.precision,"not supported, using",$,"instead."));const ee=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,te=ee!==void 0?ee.length:0;let Ee=0;D.morphAttributes.position!==void 0&&(Ee=1),D.morphAttributes.normal!==void 0&&(Ee=2),D.morphAttributes.color!==void 0&&(Ee=3);let Ne,Z,ge,Me;if(ne){const pe=Nn[ne];Ne=pe.vertexShader,Z=pe.fragmentShader}else{Ne=g.vertexShader,Z=g.fragmentShader;const pe=o.getVertexShaderStage(g),at=o.getFragmentShaderStage(g);o.update(g,pe,at),ge=pe.id,Me=at.id}const Re=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),Oe=C.isInstancedMesh===!0,bt=C.isBatchedMesh===!0,Pe=!!g.map,rt=!!g.matcap,lt=!!G,We=lt&&G.isPMREMTexture===!0,Ut=!!g.aoMap,Tt=!!g.lightMap,Qt=!!g.bumpMap&&g.wireframe===!1,gt=!!g.normalMap,Pn=!!g.displacementMap,Pt=!!g.emissiveMap,fn=!!g.metalnessMap,hn=!!g.roughnessMap,pn=g.anisotropy>0,N=g.clearcoat>0,mn=g.diffuseRoughness>0,pt=g.dispersion>0,mt=g.retroreflectivity>0,he=g.iridescence>0,wt=g.sheen>0,Ce=g.transmission>0,De=pn&&!!g.anisotropyMap,w=N&&!!g.clearcoatMap,M=N&&!!g.clearcoatNormalMap,B=N&&!!g.clearcoatRoughnessMap,ie=mn&&!!g.diffuseRoughnessMap,j=he&&!!g.iridescenceMap,ae=he&&!!g.iridescenceThicknessMap,ue=wt&&!!g.sheenColorMap,q=wt&&!!g.sheenRoughnessMap,K=!!g.specularMap,le=!!g.specularColorMap,L=!!g.specularIntensityMap,J=Ce&&!!g.transmissionMap,W=Ce&&!!g.thicknessMap,ce=!!g.gradientMap,re=!!g.alphaMap,oe=g.alphaTest>0,we=!!g.alphaHash,ze=!!g.extensions;let se=ri;g.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(se=n.toneMapping);const Ae=We?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Be={shaderID:ne,shaderType:g.type,shaderName:g.name,vertexShader:Ne,fragmentShader:Z,defines:g.defines,customVertexShaderID:ge,customFragmentShaderID:Me,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:$,batching:bt,batchingColor:bt&&C._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&C.instanceColor!==null,instancingMorph:Oe&&C.morphTexture!==null,outputColorSpace:Re===null?n.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Pe,matcap:rt,envMap:lt,envMapMode:lt&&G.mapping,envMapPMREM:We,envMapMaxLod:We?Ae.length-1:null,envMapSize:We?Ae[0].width:null,aoMap:Ut,lightMap:Tt,bumpMap:Qt,normalMap:gt,displacementMap:Pn,emissiveMap:Pt,normalMapObjectSpace:gt&&g.normalMapType===mh,normalMapTangentSpace:gt&&g.normalMapType===ll,packedNormalMap:gt&&g.normalMapType===ll&&N_(g.normalMap.format),metalnessMap:fn,roughnessMap:hn,anisotropy:pn,anisotropyMap:De,clearcoat:N,clearcoatMap:w,clearcoatNormalMap:M,clearcoatRoughnessMap:B,diffuseRoughness:mn,diffuseRoughnessMap:ie,dispersion:pt,retroreflection:mt,iridescence:he,iridescenceMap:j,iridescenceThicknessMap:ae,sheen:wt,sheenColorMap:ue,sheenRoughnessMap:q,specularMap:K,specularColorMap:le,specularIntensityMap:L,transmission:Ce,transmissionMap:J,thicknessMap:W,gradientMap:ce,opaque:g.transparent===!1&&g.blending===tr&&g.alphaToCoverage===!1,alphaMap:re,alphaTest:oe,alphaHash:we,combine:g.combine,mapUv:Pe&&m(g.map.channel),aoMapUv:Ut&&m(g.aoMap.channel),lightMapUv:Tt&&m(g.lightMap.channel),bumpMapUv:Qt&&m(g.bumpMap.channel),normalMapUv:gt&&m(g.normalMap.channel),displacementMapUv:Pn&&m(g.displacementMap.channel),emissiveMapUv:Pt&&m(g.emissiveMap.channel),metalnessMapUv:fn&&m(g.metalnessMap.channel),roughnessMapUv:hn&&m(g.roughnessMap.channel),anisotropyMapUv:De&&m(g.anisotropyMap.channel),clearcoatMapUv:w&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:M&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&m(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&m(g.diffuseRoughnessMap.channel),iridescenceMapUv:j&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:q&&m(g.sheenRoughnessMap.channel),specularMapUv:K&&m(g.specularMap.channel),specularColorMapUv:le&&m(g.specularColorMap.channel),specularIntensityMapUv:L&&m(g.specularIntensityMap.channel),transmissionMapUv:J&&m(g.transmissionMap.channel),thicknessMapUv:W&&m(g.thicknessMap.channel),alphaMapUv:re&&m(g.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(gt||pn),vertexNormals:!!D.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!D.attributes.uv&&(Pe||re),fog:!!k,useFog:g.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||D.attributes.normal===void 0&&gt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:_e,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Ee,numSunLights:x.sun.length,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numSunLightShadows:x.sunShadowMap.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numLightProbeGrids:U.filter(pe=>pe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:se,decodeVideoTexture:Pe&&g.map.isVideoTexture===!0&&Ke.getTransfer(g.map.colorSpace)===ot,decodeVideoTextureEmissive:Pt&&g.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(g.emissiveMap.colorSpace)===ot,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===ei,flipSided:g.side===tn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ze&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&g.extensions.multiDraw===!0||bt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function y(g){const x=[];if(g.shaderID?x.push(g.shaderID):(x.push(g.customVertexShaderID),x.push(g.customFragmentShaderID)),g.defines!==void 0)for(const P in g.defines)x.push(P),x.push(g.defines[P]);return g.isRawShaderMaterial===!1&&(d(x,g),p(x,g),x.push(n.outputColorSpace)),x.push(g.customProgramCacheKey),x.join()}function d(g,x){g.push(x.precision),g.push(x.outputColorSpace),g.push(x.envMapMode),g.push(x.envMapPMREM),g.push(x.envMapMaxLod),g.push(x.envMapSize),g.push(x.mapUv),g.push(x.alphaMapUv),g.push(x.lightMapUv),g.push(x.aoMapUv),g.push(x.bumpMapUv),g.push(x.normalMapUv),g.push(x.displacementMapUv),g.push(x.emissiveMapUv),g.push(x.metalnessMapUv),g.push(x.roughnessMapUv),g.push(x.anisotropyMapUv),g.push(x.clearcoatMapUv),g.push(x.clearcoatNormalMapUv),g.push(x.clearcoatRoughnessMapUv),g.push(x.diffuseRoughnessMapUv),g.push(x.iridescenceMapUv),g.push(x.iridescenceThicknessMapUv),g.push(x.sheenColorMapUv),g.push(x.sheenRoughnessMapUv),g.push(x.specularMapUv),g.push(x.specularColorMapUv),g.push(x.specularIntensityMapUv),g.push(x.transmissionMapUv),g.push(x.thicknessMapUv),g.push(x.combine),g.push(x.fogExp2),g.push(x.sizeAttenuation),g.push(x.morphTargetsCount),g.push(x.numSunLights),g.push(x.numDirLights),g.push(x.numPointLights),g.push(x.numSpotLights),g.push(x.numSpotLightMaps),g.push(x.numHemiLights),g.push(x.numRectAreaLights),g.push(x.numSunLightShadows),g.push(x.numDirLightShadows),g.push(x.numPointLightShadows),g.push(x.numSpotLightShadows),g.push(x.numSpotLightShadowsWithMaps),g.push(x.numLightProbes),g.push(x.numLightProbeGrids),g.push(x.shadowMapType),g.push(x.toneMapping),g.push(x.numClippingPlanes),g.push(x.numClipIntersection),g.push(x.depthPacking)}function p(g,x){a.disableAll(),x.instancing&&a.enable(0),x.instancingColor&&a.enable(1),x.instancingMorph&&a.enable(2),x.matcap&&a.enable(3),x.envMap&&a.enable(4),x.normalMapObjectSpace&&a.enable(5),x.normalMapTangentSpace&&a.enable(6),x.clearcoat&&a.enable(7),x.iridescence&&a.enable(8),x.alphaTest&&a.enable(9),x.vertexColors&&a.enable(10),x.vertexAlphas&&a.enable(11),x.vertexUv1s&&a.enable(12),x.vertexUv2s&&a.enable(13),x.vertexUv3s&&a.enable(14),x.vertexTangents&&a.enable(15),x.anisotropy&&a.enable(16),x.alphaHash&&a.enable(17),x.batching&&a.enable(18),x.dispersion&&a.enable(19),x.retroreflection&&a.enable(24),x.diffuseRoughness&&a.enable(25),x.batchingColor&&a.enable(20),x.gradientMap&&a.enable(21),x.packedNormalMap&&a.enable(22),x.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),x.numLightProbeGrids>0&&a.enable(22),x.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function v(g){const x=f[g.type];let P;if(x){const R=Nn[x];P=sp.clone(R.uniforms)}else P=g.uniforms;return P}function E(g,x){let P=u.get(x);return P!==void 0?++P.usedTimes:(P=new P_(n,x,g,s),c.push(P),u.set(x,P)),P}function b(g){if(--g.usedTimes===0){const x=c.indexOf(g);c[x]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:y,getUniforms:v,acquireProgram:E,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:T}}function F_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function O_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function bd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function yd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function o(f,m,_,y,d,p){let v=n[e];return v===void 0?(v={id:f.id,object:f,geometry:m,material:_,materialVariant:a(f),groupOrder:y,renderOrder:f.renderOrder,z:d,group:p},n[e]=v):(v.id=f.id,v.object=f,v.geometry=m,v.material=_,v.materialVariant=a(f),v.groupOrder=y,v.renderOrder=f.renderOrder,v.z=d,v.group=p),e++,v}function l(f,m,_,y,d,p,v){v.reversedDepth===!0&&(d=-d);const E=o(f,m,_,y,d,p);_.transmission>0?i.push(E):_.transparent===!0?s.push(E):t.push(E)}function c(f,m,_,y,d,p){const v=o(f,m,_,y,d,p);_.transmission>0?i.unshift(v):_.transparent===!0?s.unshift(v):t.unshift(v)}function u(f,m){t.length>1&&t.sort(f||O_),i.length>1&&i.sort(m||bd),s.length>1&&s.sort(m||bd)}function h(){for(let f=e,m=n.length;f<m;f++){const _=n[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function B_(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new yd,n.set(i,[a])):s>=r.length?(a=new yd,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function k_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new ke};break;case"SpotLight":t={position:new F,direction:new F,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function z_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let G_=0;function H_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function V_(n){const e=new k_,t=z_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const s=new F,r=new ht,a=new ht;function o(c){let u=0,h=0,f=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let m=0,_=0,y=0,d=0,p=0,v=0,E=0,b=0,A=0,T=0,g=0,x=0,P=0,R=0;c.sort(H_);for(let U=0,k=c.length;U<k;U++){const D=c[U],H=D.color,Y=D.intensity,G=D.distance;let ne=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ki?ne=D.shadow.map.texture:ne=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=H.r*Y,h+=H.g*Y,f+=H.b*Y;else if(D.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(D.sh.coefficients[$],Y);R++}else if(D.isSunLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ee=D.shadow,te=t.get(D);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),i.sunShadow[_]=te,i.sunShadowMap[_]=ne;const Ee=ee.getViewportCount();for(let Ne=0;Ne<Ee;Ne++)i.sunShadowMatrix[y+Ne]=ee.getMatrix(Ne),i.sunShadowCascade[y+Ne]=ee._cascadeData[Ne];y+=Ee,_++}i.sun[m]=$,m++}else if(D.isDirectionalLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ee=D.shadow,te=t.get(D);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,i.directionalShadow[d]=te,i.directionalShadowMap[d]=ne,i.directionalShadowMatrix[d]=D.shadow.matrix,A++}i.directional[d]=$,d++}else if(D.isSpotLight){const $=e.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(H).multiplyScalar(Y),$.distance=G,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,i.spot[v]=$;const ee=D.shadow;if(D.map&&(i.spotLightMap[x]=D.map,x++,ee.updateMatrices(D),D.castShadow&&P++),i.spotLightMatrix[v]=ee.matrix,D.castShadow){const te=t.get(D);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,i.spotShadow[v]=te,i.spotShadowMap[v]=ne,g++}v++}else if(D.isRectAreaLight){const $=e.get(D);$.color.copy(H).multiplyScalar(Y),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),i.rectArea[E]=$,E++}else if(D.isPointLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){const ee=D.shadow,te=t.get(D);te.shadowIntensity=ee.intensity,te.shadowBias=ee.bias,te.shadowNormalBias=ee.normalBias,te.shadowRadius=ee.radius,te.shadowMapSize=ee.mapSize,te.shadowCameraNear=ee.camera.near,te.shadowCameraFar=ee.camera.far,i.pointShadow[p]=te,i.pointShadowMap[p]=ne,i.pointShadowMatrix[p]=D.shadow.matrix,T++}i.point[p]=$,p++}else if(D.isHemisphereLight){const $=e.get(D);$.skyColor.copy(D.color).multiplyScalar(Y),$.groundColor.copy(D.groundColor).multiplyScalar(Y),i.hemi[b]=$,b++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const C=i.hash;(C.sunLength!==m||C.directionalLength!==d||C.pointLength!==p||C.spotLength!==v||C.rectAreaLength!==E||C.hemiLength!==b||C.numSunShadows!==_||C.numDirectionalShadows!==A||C.numPointShadows!==T||C.numSpotShadows!==g||C.numSpotMaps!==x||C.numLightProbes!==R)&&(i.sun.length=m,i.directional.length=d,i.spot.length=v,i.rectArea.length=E,i.point.length=p,i.hemi.length=b,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+x-P,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,C.sunLength=m,C.directionalLength=d,C.pointLength=p,C.spotLength=v,C.rectAreaLength=E,C.hemiLength=b,C.numSunShadows=_,C.numDirectionalShadows=A,C.numPointShadows=T,C.numSpotShadows=g,C.numSpotMaps=x,C.numLightProbes=R,i.version=G_++)}function l(c,u){let h=0,f=0,m=0,_=0,y=0,d=0;const p=u.matrixWorldInverse;for(let v=0,E=c.length;v<E;v++){const b=c[v];if(b.isSunLight){const A=i.sun[h];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(p),h++}else if(b.isDirectionalLight){const A=i.directional[f];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),f++}else if(b.isSpotLight){const A=i.spot[_];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),_++}else if(b.isRectAreaLight){const A=i.rectArea[y];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){const A=i.point[m];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),m++}else if(b.isHemisphereLight){const A=i.hemi[d];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(p),d++}}}return{setup:o,setupView:l,state:i}}function Ed(n){const e=new V_(n),t=[],i=[],s=[];function r(h){u.camera=h,t.length=0,i.length=0,s.length=0}function a(h){h.isLightProbeGrid?s.push(h):t.push(h)}function o(h){i.push(h)}function l(){e.setup(t),s.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function c(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function W_(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Ed(n),e.set(s,[o])):r>=a.length?(o=new Ed(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const $_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X_=`uniform sampler2D shadow_pass;
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
}`,q_=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Y_=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Td=new ht,Ys=new F,vo=new F;function K_(n,e,t){let i=new pr;const s=new He,r=new He,a=new vt,o=new lp,l=new cp,c={},u=t.maxTextureSize,h={[Yi]:tn,[tn]:Yi,[ei]:ei},f=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:$_,fragmentShader:X_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Gt;_.setAttribute("position",new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new qe(_,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oa;let p=this.type;this.render=function(T,g,x){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||T.length===0)return;this.type===Xf&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=oa);const P=n.getRenderTarget(),R=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),U=n.state;U.setBlending(ws),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=p!==this.type;k&&g.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(H=>H.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,H=T.length;D<H;D++){const Y=T[D],G=Y.shadow;if(G===void 0){Le("WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ne=G.getFrameExtents();s.multiply(ne),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,G.mapSize.y=r.y));const $=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=$,G.map===null||k===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Zs){if(Y.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Bn(s.x,s.y,{format:Ki,type:Hn,minFilter:en,magFilter:en,generateMipmaps:!1}),G.map.texture.name=Y.name+".shadowMap",G.map.depthTexture=new Ns(s.x,s.y,Fn),G.map.depthTexture.name=Y.name+".shadowMapDepth",G.map.depthTexture.format=wi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Bt,G.map.depthTexture.magFilter=Bt}else Y.isPointLight?(G.map=new Jl(s.x),G.map.depthTexture=new Ru(s.x,Gn)):(G.map=new Bn(s.x,s.y),G.map.depthTexture=new Ns(s.x,s.y,Gn)),G.map.depthTexture.name=Y.name+".shadowMap",G.map.depthTexture.format=wi,this.type===oa?(G.map.depthTexture.compareFunction=$?vu:_u,G.map.depthTexture.minFilter=en,G.map.depthTexture.magFilter=en):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Bt,G.map.depthTexture.magFilter=Bt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);const ee=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();Y.isPointLight!==!0&&G.updateMatrices(Y,x);const te=G.camera.layers.mask&4294967294?G.camera.layers:x.layers;for(let Ee=0;Ee<ee;Ee++){const Ne=G.getCamera(Ee);if(Y.isPointLight){const Z=G.camera,ge=G.matrix,Me=Y.distance||Z.far;Me!==Z.far&&(Z.far=Me,Z.updateProjectionMatrix()),Ys.setFromMatrixPosition(Y.matrixWorld),Z.position.copy(Ys),vo.copy(Z.position),vo.add(q_[Ee]),Z.up.copy(Y_[Ee]),Z.lookAt(vo),Z.updateMatrixWorld(),ge.makeTranslation(-Ys.x,-Ys.y,-Ys.z),Td.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Td,Z.coordinateSystem,Z.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,Ee),n.clear();else{Ee===0&&(n.setRenderTarget(G.map),n.clear());const Z=G.getViewport(Ee);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),U.viewport(a)}i=G.getFrustum(Ee),b(g,x,Ne,Y,te,this.type)}G.isPointLightShadow!==!0&&this.type===Zs&&v(G,x),G.needsUpdate=!1}p=this.type,d.needsUpdate=!1,n.setRenderTarget(P,R,C)};function v(T,g){const x=e.update(y);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new Bn(s.x,s.y,{format:Ki,type:Hn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(g,null,x,f,y,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(g,null,x,m,y,null)}function E(T,g,x,P){let R=null;const C=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)R=C;else if(R=x.isPointLight===!0?l:o,n.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const U=R.uuid,k=g.uuid;let D=c[U];D===void 0&&(D={},c[U]=D);let H=D[k];H===void 0&&(H=R.clone(),D[k]=H,g.addEventListener("dispose",A)),R=H}if(R.visible=g.visible,R.wireframe=g.wireframe,P===Zs?R.side=g.shadowSide!==null?g.shadowSide:g.side:R.side=g.shadowSide!==null?g.shadowSide:h[g.side],R.alphaMap=g.alphaMap,R.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,R.map=g.map,R.clipShadows=g.clipShadows,R.clippingPlanes=g.clippingPlanes,R.clipIntersection=g.clipIntersection,R.displacementMap=g.displacementMap,R.displacementScale=g.displacementScale,R.displacementBias=g.displacementBias,R.wireframeLinewidth=g.wireframeLinewidth,R.linewidth=g.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const U=n.properties.get(R);U.light=x}return R}function b(T,g,x,P,R,C){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===Zs)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const D=e.update(T),H=T.material;if(Array.isArray(H)){const Y=D.groups;for(let G=0,ne=Y.length;G<ne;G++){const $=Y[G],ee=H[$.materialIndex];if(ee&&ee.visible){const te=E(T,ee,P,C);T.onBeforeShadow(n,T,g,x,D,te,$),n.renderBufferDirect(x,null,D,te,T,$),T.onAfterShadow(n,T,g,x,D,te,$)}}}else if(H.visible){const Y=E(T,H,P,C);T.onBeforeShadow(n,T,g,x,D,Y,null),n.renderBufferDirect(x,null,D,Y,T,null),T.onAfterShadow(n,T,g,x,D,Y,null)}}const k=T.children;for(let D=0,H=k.length;D<H;D++)b(k[D],g,x,P,R,C)}function A(T){T.target.removeEventListener("dispose",A);for(const x in c){const P=c[x],R=T.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}function Z_(n,e){function t(){let L=!1;const J=new vt;let W=null;const ce=new vt(0,0,0,0);return{setMask:function(re){W!==re&&!L&&(n.colorMask(re,re,re,re),W=re)},setLocked:function(re){L=re},setClear:function(re,oe,we,ze,se){se===!0&&(re*=ze,oe*=ze,we*=ze),J.set(re,oe,we,ze),ce.equals(J)===!1&&(n.clearColor(re,oe,we,ze),ce.copy(J))},reset:function(){L=!1,W=null,ce.set(-1,0,0,0)}}}function i(){let L=!1,J=!1,W=null,ce=null,re=null;return{setReversed:function(oe){if(J!==oe){const we=e.get("EXT_clip_control");oe?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),J=oe;const ze=re;re=null,this.setClear(ze)}},getReversed:function(){return J},setTest:function(oe){oe?_e(n.DEPTH_TEST):Oe(n.DEPTH_TEST)},setMask:function(oe){W!==oe&&!L&&(n.depthMask(oe),W=oe)},setFunc:function(oe){if(J&&(oe=wh[oe]),ce!==oe){switch(oe){case yo:n.depthFunc(n.NEVER);break;case Eo:n.depthFunc(n.ALWAYS);break;case To:n.depthFunc(n.LESS);break;case dr:n.depthFunc(n.LEQUAL);break;case wo:n.depthFunc(n.EQUAL);break;case Ao:n.depthFunc(n.GEQUAL);break;case Ro:n.depthFunc(n.GREATER);break;case Co:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=oe}},setLocked:function(oe){L=oe},setClear:function(oe){re!==oe&&(re=oe,J&&(oe=1-oe),n.clearDepth(oe))},reset:function(){L=!1,W=null,ce=null,re=null,J=!1}}}function s(){let L=!1,J=null,W=null,ce=null,re=null,oe=null,we=null,ze=null,se=null;return{setTest:function(Ae){L||(Ae?_e(n.STENCIL_TEST):Oe(n.STENCIL_TEST))},setMask:function(Ae){J!==Ae&&!L&&(n.stencilMask(Ae),J=Ae)},setFunc:function(Ae,Be,pe){(W!==Ae||ce!==Be||re!==pe)&&(n.stencilFunc(Ae,Be,pe),W=Ae,ce=Be,re=pe)},setOp:function(Ae,Be,pe){(oe!==Ae||we!==Be||ze!==pe)&&(n.stencilOp(Ae,Be,pe),oe=Ae,we=Be,ze=pe)},setLocked:function(Ae){L=Ae},setClear:function(Ae){se!==Ae&&(n.clearStencil(Ae),se=Ae)},reset:function(){L=!1,J=null,W=null,ce=null,re=null,oe=null,we=null,ze=null,se=null}}}const r=new t,a=new i,o=new s;let l={};const c=new WeakMap;let u={},h={},f={},m=new WeakMap,_=[],y=null,d=!1,p=null,v=null,E=null,b=null,A=null,T=null,g=null,x=new ke(0,0,0),P=0,R=!1,C=null,U=null,k=null,D=null,H=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ne=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec($)[1]),G=ne>=1):$.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),G=ne>=2);let ee=null,te={};const Ee=n.getParameter(n.SCISSOR_BOX),Ne=n.getParameter(n.VIEWPORT),Z=new vt().fromArray(Ee),ge=new vt().fromArray(Ne);function Me(L,J,W,ce){const re=new Uint8Array(4),oe=n.createTexture();n.bindTexture(L,oe),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<W;we++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(J,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(J+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return oe}const Re={};Re[n.TEXTURE_2D]=Me(n.TEXTURE_2D,n.TEXTURE_2D,1),Re[n.TEXTURE_CUBE_MAP]=Me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[n.TEXTURE_2D_ARRAY]=Me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Re[n.TEXTURE_3D]=Me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_e(n.DEPTH_TEST),a.setFunc(dr),Qt(!1),gt(wc),_e(n.CULL_FACE),Ut(ws);function _e(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function Oe(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function bt(L,J){return f[L]!==J?(n.bindFramebuffer(L,J),f[L]=J,L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=J),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=J),!0):!1}function Pe(L,J){let W=_,ce=!1;if(L){W=m.get(J),W===void 0&&(W=[],m.set(J,W));const re=L.textures;if(W.length!==re.length||W[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,we=re.length;oe<we;oe++)W[oe]=n.COLOR_ATTACHMENT0+oe;W.length=re.length,ce=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,ce=!0);ce&&n.drawBuffers(W)}function rt(L){return y!==L?(n.useProgram(L),y=L,!0):!1}const lt={[ps]:n.FUNC_ADD,[Yf]:n.FUNC_SUBTRACT,[Kf]:n.FUNC_REVERSE_SUBTRACT};lt[Zf]=n.MIN,lt[Jf]=n.MAX;const We={[Qf]:n.ZERO,[jf]:n.ONE,[eh]:n.SRC_COLOR,[eu]:n.SRC_ALPHA,[ah]:n.SRC_ALPHA_SATURATE,[sh]:n.DST_COLOR,[nh]:n.DST_ALPHA,[th]:n.ONE_MINUS_SRC_COLOR,[tu]:n.ONE_MINUS_SRC_ALPHA,[rh]:n.ONE_MINUS_DST_COLOR,[ih]:n.ONE_MINUS_DST_ALPHA,[oh]:n.CONSTANT_COLOR,[lh]:n.ONE_MINUS_CONSTANT_COLOR,[ch]:n.CONSTANT_ALPHA,[dh]:n.ONE_MINUS_CONSTANT_ALPHA};function Ut(L,J,W,ce,re,oe,we,ze,se,Ae){if(L===ws){d===!0&&(Oe(n.BLEND),d=!1);return}if(d===!1&&(_e(n.BLEND),d=!0),L!==qf){if(L!==p||Ae!==R){if((v!==ps||A!==ps)&&(n.blendEquation(n.FUNC_ADD),v=ps,A=ps),Ae)switch(L){case tr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ac:n.blendFunc(n.ONE,n.ONE);break;case Rc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:tt("WebGLState: Invalid blending: ",L);break}else switch(L){case tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ac:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Rc:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cc:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",L);break}E=null,b=null,T=null,g=null,x.set(0,0,0),P=0,p=L,R=Ae}return}re=re||J,oe=oe||W,we=we||ce,(J!==v||re!==A)&&(n.blendEquationSeparate(lt[J],lt[re]),v=J,A=re),(W!==E||ce!==b||oe!==T||we!==g)&&(n.blendFuncSeparate(We[W],We[ce],We[oe],We[we]),E=W,b=ce,T=oe,g=we),(ze.equals(x)===!1||se!==P)&&(n.blendColor(ze.r,ze.g,ze.b,se),x.copy(ze),P=se),p=L,R=!1}function Tt(L,J){L.side===ei?Oe(n.CULL_FACE):_e(n.CULL_FACE);let W=L.side===tn;J&&(W=!W),Qt(W),L.blending===tr&&L.transparent===!1?Ut(ws):Ut(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const ce=L.stencilWrite;o.setTest(ce),ce&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Pt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):Oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(L){C!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),C=L)}function gt(L){L!==Wf?(_e(n.CULL_FACE),L!==U&&(L===wc?n.cullFace(n.BACK):L===$f?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Oe(n.CULL_FACE),U=L}function Pn(L){L!==k&&(G&&n.lineWidth(L),k=L)}function Pt(L,J,W){L?(_e(n.POLYGON_OFFSET_FILL),(D!==J||H!==W)&&(D=J,H=W,a.getReversed()&&(J=-J,W=-W),n.polygonOffset(J,W))):Oe(n.POLYGON_OFFSET_FILL)}function fn(L){L?_e(n.SCISSOR_TEST):Oe(n.SCISSOR_TEST)}function hn(L){L===void 0&&(L=n.TEXTURE0+Y-1),ee!==L&&(n.activeTexture(L),ee=L)}function pn(L,J,W){W===void 0&&(ee===null?W=n.TEXTURE0+Y-1:W=ee);let ce=te[W];ce===void 0&&(ce={type:void 0,texture:void 0},te[W]=ce),(ce.type!==L||ce.texture!==J)&&(ee!==W&&(n.activeTexture(W),ee=W),n.bindTexture(L,J||Re[L]),ce.type=L,ce.texture=J)}function N(){const L=te[ee];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function mn(){try{n.compressedTexImage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function pt(){try{n.compressedTexImage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function mt(){try{n.texSubImage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function he(){try{n.texSubImage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function wt(){try{n.compressedTexSubImage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function Ce(){try{n.compressedTexSubImage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function De(){try{n.texStorage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function w(){try{n.texStorage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function M(){try{n.texImage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function B(){try{n.texImage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function ie(L){return h[L]!==void 0?h[L]:n.getParameter(L)}function j(L,J){h[L]!==J&&(n.pixelStorei(L,J),h[L]=J)}function ae(L){Z.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Z.copy(L))}function ue(L){ge.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),ge.copy(L))}function q(L,J){let W=c.get(J);W===void 0&&(W=new WeakMap,c.set(J,W));let ce=W.get(L);ce===void 0&&(ce=n.getUniformBlockIndex(J,L.name),n.uniformBlockBinding(J,ce,ce),W.set(L,ce))}function K(L,J,W){const re=c.get(J).get(L);l[re]!==W&&(n.bindBufferBase(n.UNIFORM_BUFFER,re,W),l[re]=W)}function le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},ee=null,te={},f={},l={},m=new WeakMap,_=[],y=null,d=!1,p=null,v=null,E=null,b=null,A=null,T=null,g=null,x=new ke(0,0,0),P=0,R=!1,C=null,U=null,k=null,D=null,H=null,Z.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_e,disable:Oe,bindFramebuffer:bt,drawBuffers:Pe,useProgram:rt,setBlending:Ut,setMaterial:Tt,setFlipSided:Qt,setCullFace:gt,setLineWidth:Pn,setPolygonOffset:Pt,setScissorTest:fn,activeTexture:hn,bindTexture:pn,unbindTexture:N,compressedTexImage2D:mn,compressedTexImage3D:pt,texImage2D:M,texImage3D:B,pixelStorei:j,getParameter:ie,updateUBOMapping:q,uniformBlockBinding:K,texStorage2D:De,texStorage3D:w,texSubImage2D:mt,texSubImage3D:he,compressedTexSubImage2D:wt,compressedTexSubImage3D:Ce,scissor:ae,viewport:ue,reset:le}}function J_(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,u=new WeakMap,h=new Set;let f;const m=new WeakMap,_=new Set,y=new FinalizationRegistry(w=>_.delete(w));let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(w,M){return d?new OffscreenCanvas(w,M):Ma("canvas")}function v(w,M,B){let ie=1;const j=De(w);if((j.width>B||j.height>B)&&(ie=B/Math.max(j.width,j.height)),ie<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ae=Math.floor(ie*j.width),ue=Math.floor(ie*j.height);f===void 0&&(f=p(ae,ue));const q=M?p(ae,ue):f;return q.width=ae,q.height=ue,q.getContext("2d").drawImage(w,0,0,ae,ue),Le("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ae+"x"+ue+")."),q}else return"data"in w&&Le("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function E(w){return w.generateMipmaps}function b(w){n.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(w,M,B,ie,j,ae=!1){if(w!==null){if(n[w]!==void 0)return n[w];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ue;ie&&(ue=e.get("EXT_texture_norm16"),ue||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=M;if(M===n.RED&&(B===n.FLOAT&&(q=n.R32F),B===n.HALF_FLOAT&&(q=n.R16F),B===n.UNSIGNED_BYTE&&(q=n.R8),B===n.UNSIGNED_SHORT&&ue&&(q=ue.R16_EXT),B===n.SHORT&&ue&&(q=ue.R16_SNORM_EXT)),M===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.R8UI),B===n.UNSIGNED_SHORT&&(q=n.R16UI),B===n.UNSIGNED_INT&&(q=n.R32UI),B===n.BYTE&&(q=n.R8I),B===n.SHORT&&(q=n.R16I),B===n.INT&&(q=n.R32I)),M===n.RG&&(B===n.FLOAT&&(q=n.RG32F),B===n.HALF_FLOAT&&(q=n.RG16F),B===n.UNSIGNED_BYTE&&(q=n.RG8),B===n.UNSIGNED_SHORT&&ue&&(q=ue.RG16_EXT),B===n.SHORT&&ue&&(q=ue.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RG8UI),B===n.UNSIGNED_SHORT&&(q=n.RG16UI),B===n.UNSIGNED_INT&&(q=n.RG32UI),B===n.BYTE&&(q=n.RG8I),B===n.SHORT&&(q=n.RG16I),B===n.INT&&(q=n.RG32I)),M===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RGB8UI),B===n.UNSIGNED_SHORT&&(q=n.RGB16UI),B===n.UNSIGNED_INT&&(q=n.RGB32UI),B===n.BYTE&&(q=n.RGB8I),B===n.SHORT&&(q=n.RGB16I),B===n.INT&&(q=n.RGB32I)),M===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),B===n.UNSIGNED_INT&&(q=n.RGBA32UI),B===n.BYTE&&(q=n.RGBA8I),B===n.SHORT&&(q=n.RGBA16I),B===n.INT&&(q=n.RGBA32I)),M===n.RGB&&(B===n.UNSIGNED_SHORT&&ue&&(q=ue.RGB16_EXT),B===n.SHORT&&ue&&(q=ue.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),M===n.RGBA){const K=ae?xa:Ke.getTransfer(j);B===n.FLOAT&&(q=n.RGBA32F),B===n.HALF_FLOAT&&(q=n.RGBA16F),B===n.UNSIGNED_BYTE&&(q=K===ot?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&ue&&(q=ue.RGBA16_EXT),B===n.SHORT&&ue&&(q=ue.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function g(w,M){let B;return w?M===null||M===Gn||M===Is?B=n.DEPTH24_STENCIL8:M===Fn?B=n.DEPTH32F_STENCIL8:M===fr&&(B=n.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Gn||M===Is?B=n.DEPTH_COMPONENT24:M===Fn?B=n.DEPTH_COMPONENT32F:M===fr&&(B=n.DEPTH_COMPONENT16),B}function x(w,M){return E(w)===!0||w.isFramebufferTexture&&w.minFilter!==Bt&&w.minFilter!==en?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function P(w){const M=new WeakRef(w);i.get(w).__ref=M,_.add(M),y.register(w,M,M)}function R(w){const M=i.get(w).__ref;M!==void 0&&(_.delete(M),y.unregister(M))}function C(w){k(w.target)}function U(w){D(w.target)}function k(w){w.removeEventListener("dispose",C),R(w),Y(w),w.isVideoTexture&&u.delete(w),w.isHTMLTexture&&h.delete(w)}function D(w){w.removeEventListener("dispose",U),R(w),ne(w)}function H(){for(const w of _){const M=w.deref();M!==void 0&&(M.isRenderTarget===!0?D(M):k(M))}_.clear(),h.clear()}function Y(w){const M=i.get(w);if(M.__webglInit===void 0)return;const B=w.source,ie=m.get(B);if(ie){const j=ie[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&G(w),Object.keys(ie).length===0&&m.delete(B)}i.remove(w)}function G(w){const M=i.get(w);n.deleteTexture(M.__webglTexture);const B=w.source,ie=m.get(B);delete ie[M.__cacheKey],a.memory.textures--}function ne(w){const M=i.get(w);M.__depthDisposeCallback&&M.__depthDisposeCallback();const B=w.depthTexture;if(B&&B.renderTarget===w&&k(B),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let ae=0;ae<M.__webglFramebuffer[j].length;ae++)n.deleteFramebuffer(M.__webglFramebuffer[j][ae]);else n.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)n.deleteFramebuffer(M.__webglFramebuffer[j]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const ie=w.textures;for(let j=0,ae=ie.length;j<ae;j++){const ue=i.get(ie[j]);ue.__webglTexture&&(n.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(ie[j])}i.remove(w)}let $=0;function ee(){$=0}function te(){return $}function Ee(w){$=w}function Ne(){const w=$;return w>=s.maxTextures&&Le("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,w}function Z(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.mipmapsAutoUpdate),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function ge(w,M){const B=i.get(w);if(w.isVideoTexture&&wt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){const ie=w.image;if(ie===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(B,w,M);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+M)}function Me(w,M){const B=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){Tt(B,w,M);return}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+M)}function Re(w,M){const B=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){Tt(B,w,M);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+M)}function _e(w,M){const B=i.get(w);if(w.version>0&&B.__version!==w.version){Qt(B,w,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+M)}const Oe={[Po]:n.REPEAT,[ni]:n.CLAMP_TO_EDGE,[Lo]:n.MIRRORED_REPEAT},bt={[Bt]:n.NEAREST,[hh]:n.NEAREST_MIPMAP_NEAREST,[Pr]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[Wa]:n.LINEAR_MIPMAP_NEAREST,[Si]:n.LINEAR_MIPMAP_LINEAR},Pe={[_h]:n.NEVER,[xu]:n.ALWAYS,[vh]:n.LESS,[_u]:n.LEQUAL,[xh]:n.EQUAL,[vu]:n.GEQUAL,[Mh]:n.GREATER,[Sh]:n.NOTEQUAL};function rt(w,M){if(M.type===Fn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===en||M.magFilter===Wa||M.magFilter===Pr||M.magFilter===Si||M.minFilter===en||M.minFilter===Wa||M.minFilter===Pr||M.minFilter===Si)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,Oe[M.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,Oe[M.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,Oe[M.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,bt[M.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,bt[M.minFilter]),M.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Pe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Bt||M.minFilter!==Pr&&M.minFilter!==Si||M.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function lt(w,M){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",C),P(M));const ie=M.source;let j=m.get(ie);j===void 0&&(j={},m.set(ie,j));const ae=Z(M);if(ae!==w.__cacheKey){j[ae]===void 0&&(j[ae]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),j[ae].usedTimes++;const ue=j[w.__cacheKey];ue!==void 0&&(j[w.__cacheKey].usedTimes--,ue.usedTimes===0&&G(M)),w.__cacheKey=ae,w.__webglTexture=j[ae].texture}return B}function We(w,M,B){return Math.floor(Math.floor(w/B)/M)}function Ut(w,M,B,ie){const ae=w.updateRanges;if(ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,B,ie,M.data);else{ae.sort((L,J)=>L.start-J.start);let ue=0;for(let L=1;L<ae.length;L++){const J=ae[ue],W=ae[L],ce=J.start+J.count,re=We(W.start,M.width,4),oe=We(J.start,M.width,4);W.start<=ce+1&&re===oe&&We(W.start+W.count-1,M.width,4)===re?J.count=Math.max(J.count,W.start+W.count-J.start):(++ue,ae[ue]=W)}ae.length=ue+1;const q=t.getParameter(n.UNPACK_ROW_LENGTH),K=t.getParameter(n.UNPACK_SKIP_PIXELS),le=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let L=0,J=ae.length;L<J;L++){const W=ae[L],ce=Math.floor(W.start/4),re=Math.ceil(W.count/4),oe=ce%M.width,we=Math.floor(ce/M.width),ze=re,se=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(n.UNPACK_SKIP_ROWS,we),t.texSubImage2D(n.TEXTURE_2D,0,oe,we,ze,se,B,ie,M.data)}w.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,K),t.pixelStorei(n.UNPACK_SKIP_ROWS,le)}}function Tt(w,M,B){let ie=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ie=n.TEXTURE_3D);const j=lt(w,M),ae=M.source;t.bindTexture(ie,w.__webglTexture,n.TEXTURE0+B);const ue=i.get(ae);if(ae.version!==ue.__version||j===!0){if(t.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const se=Ke.getPrimaries(Ke.workingColorSpace),Ae=M.colorSpace===xi?null:Ke.getPrimaries(M.colorSpace),Be=M.colorSpace===xi||se===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let K=v(M.image,!1,s.maxTextureSize);K=Ce(M,K);const le=r.convert(M.format,M.colorSpace),L=r.convert(M.type);let J=T(M.internalFormat,le,L,M.normalized,M.colorSpace,M.isVideoTexture);rt(ie,M);let W;const ce=M.mipmaps,re=M.isVideoTexture!==!0,oe=ue.__version===void 0||j===!0,we=ae.dataReady,ze=x(M,K);if(M.isDepthTexture)J=g(M.format===bi,M.type),oe&&(re?t.texStorage2D(n.TEXTURE_2D,1,J,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,J,K.width,K.height,0,le,L,null));else if(M.isDataTexture)if(ce.length>0){re&&oe&&t.texStorage2D(n.TEXTURE_2D,ze,J,ce[0].width,ce[0].height);for(let se=0,Ae=ce.length;se<Ae;se++)W=ce[se],re?we&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,W.width,W.height,le,L,W.data):t.texImage2D(n.TEXTURE_2D,se,J,W.width,W.height,0,le,L,W.data);M.generateMipmaps=!1}else re?(oe&&t.texStorage2D(n.TEXTURE_2D,ze,J,K.width,K.height),we&&Ut(M,K,le,L)):t.texImage2D(n.TEXTURE_2D,0,J,K.width,K.height,0,le,L,K.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){re&&oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ze,J,ce[0].width,ce[0].height,K.depth);for(let se=0,Ae=ce.length;se<Ae;se++)if(W=ce[se],M.format!==On)if(le!==null)if(re){if(we)if(M.layerUpdates.size>0){const Be=sd(W.width,W.height,M.format,M.type);for(const pe of M.layerUpdates){const at=W.data.subarray(pe*Be/W.data.BYTES_PER_ELEMENT,(pe+1)*Be/W.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,pe,W.width,W.height,1,le,at)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,W.width,W.height,K.depth,le,W.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,J,W.width,W.height,K.depth,0,W.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?we&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,W.width,W.height,K.depth,le,L,W.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,J,W.width,W.height,K.depth,0,le,L,W.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{re&&oe&&t.texStorage2D(n.TEXTURE_2D,ze,J,ce[0].width,ce[0].height);for(let se=0,Ae=ce.length;se<Ae;se++)W=ce[se],M.format!==On?le!==null?re?we&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,W.width,W.height,le,W.data):t.compressedTexImage2D(n.TEXTURE_2D,se,J,W.width,W.height,0,W.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?we&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,W.width,W.height,le,L,W.data):t.texImage2D(n.TEXTURE_2D,se,J,W.width,W.height,0,le,L,W.data)}else if(M.isDataArrayTexture)if(re){if(oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ze,J,K.width,K.height,K.depth),we)if(M.layerUpdates.size>0){const se=sd(K.width,K.height,M.format,M.type);for(const Ae of M.layerUpdates){const Be=K.data.subarray(Ae*se/K.data.BYTES_PER_ELEMENT,(Ae+1)*se/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ae,K.width,K.height,1,le,L,Be)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,le,L,K.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,J,K.width,K.height,K.depth,0,le,L,K.data);else if(M.isData3DTexture)re?(oe&&t.texStorage3D(n.TEXTURE_3D,ze,J,K.width,K.height,K.depth),we&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,le,L,K.data)):t.texImage3D(n.TEXTURE_3D,0,J,K.width,K.height,K.depth,0,le,L,K.data);else if(M.isFramebufferTexture){if(oe)if(re)t.texStorage2D(n.TEXTURE_2D,ze,J,K.width,K.height);else{let se=K.width,Ae=K.height;for(let Be=0;Be<ze;Be++)t.texImage2D(n.TEXTURE_2D,Be,J,se,Ae,0,le,L,null),se>>=1,Ae>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){const se=n.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),K.parentNode!==se){se.appendChild(K),h.add(M),se.onpaint=Ae=>{const Be=Ae.changedElements;for(const pe of h)Be.includes(pe.image)&&(pe.needsUpdate=!0)},se.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,K);else{const Be=n.RGBA,pe=n.RGBA,at=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Be,pe,at,K)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ce.length>0){if(re&&oe){const se=De(ce[0]);t.texStorage2D(n.TEXTURE_2D,ze,J,se.width,se.height)}for(let se=0,Ae=ce.length;se<Ae;se++)W=ce[se],re?we&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,le,L,W):t.texImage2D(n.TEXTURE_2D,se,J,le,L,W);M.generateMipmaps=!1}else if(re){if(oe){const se=De(K);t.texStorage2D(n.TEXTURE_2D,ze,J,se.width,se.height)}we&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,L,K)}else t.texImage2D(n.TEXTURE_2D,0,J,le,L,K);E(M)&&M.mipmapsAutoUpdate===!0&&b(ie),ue.__version=ae.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Qt(w,M,B){if(M.image.length!==6)return;const ie=lt(w,M),j=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+B);const ae=i.get(j);if(j.version!==ae.__version||ie===!0){t.activeTexture(n.TEXTURE0+B);const ue=Ke.getPrimaries(Ke.workingColorSpace),q=M.colorSpace===xi?null:Ke.getPrimaries(M.colorSpace),K=M.colorSpace===xi||ue===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const le=M.isCompressedTexture||M.image[0].isCompressedTexture,L=M.image[0]&&M.image[0].isDataTexture,J=[];for(let pe=0;pe<6;pe++)!le&&!L?J[pe]=v(M.image[pe],!0,s.maxCubemapSize):J[pe]=L?M.image[pe].image:M.image[pe],J[pe]=Ce(M,J[pe]);const W=J[0],ce=r.convert(M.format,M.colorSpace),re=r.convert(M.type);let oe=T(M.internalFormat,ce,re,M.normalized,M.colorSpace);const we=M.isVideoTexture!==!0,ze=ae.__version===void 0||ie===!0,se=j.dataReady;let Ae=x(M,W);rt(n.TEXTURE_CUBE_MAP,M);let Be;if(M.isDepthTexture){if(oe=g(M.format===bi,M.type),ze)if(we)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,oe,W.width,W.height);else for(let pe=0;pe<6;pe++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,oe,W.width,W.height,0,ce,re,null)}else if(le){we&&ze&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,oe,W.width,W.height);for(let pe=0;pe<6;pe++){Be=J[pe].mipmaps;for(let at=0;at<Be.length;at++){const Lt=Be[at];M.format!==On?ce!==null?we?se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,at,0,0,Lt.width,Lt.height,ce,Lt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,at,oe,Lt.width,Lt.height,0,Lt.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,at,0,0,Lt.width,Lt.height,ce,re,Lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,at,oe,Lt.width,Lt.height,0,ce,re,Lt.data)}}}else{if(Be=M.mipmaps,we&&ze){Be.length>0&&Ae++;const pe=De(J[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,oe,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(L){we?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,J[pe].width,J[pe].height,ce,re,J[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,oe,J[pe].width,J[pe].height,0,ce,re,J[pe].data);for(let at=0;at<Be.length;at++){const ci=Be[at].image[pe].image;we?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,at+1,0,0,ci.width,ci.height,ce,re,ci.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,at+1,oe,ci.width,ci.height,0,ce,re,ci.data)}}else{we?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ce,re,J[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,oe,ce,re,J[pe]);for(let at=0;at<Be.length;at++){const Lt=Be[at];we?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,at+1,0,0,ce,re,Lt.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,at+1,oe,ce,re,Lt.image[pe])}}}E(M)&&M.mipmapsAutoUpdate===!0&&b(n.TEXTURE_CUBE_MAP),ae.__version=j.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function gt(w,M,B,ie,j,ae){const ue=r.convert(B.format,B.colorSpace),q=r.convert(B.type),K=T(B.internalFormat,ue,q,B.normalized,B.colorSpace),le=i.get(M),L=i.get(B);if(L.__renderTarget=M,!le.__hasExternalTextures){const J=Math.max(1,M.width>>ae),W=Math.max(1,M.height>>ae);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,ae,K,J,W,M.depth,0,ue,q,null):t.texImage2D(j,ae,K,J,W,0,ue,q,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),he(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,j,L.__webglTexture,0,mt(M)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,j,L.__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pn(w,M,B){if(n.bindRenderbuffer(n.RENDERBUFFER,w),M.depthBuffer){const ie=M.depthTexture,j=ie&&ie.isDepthTexture?ie.type:null,ae=g(M.stencilBuffer,j),ue=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;he(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,mt(M),ae,M.width,M.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,mt(M),ae,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ae,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,w)}else{const ie=M.textures;for(let j=0;j<ie.length;j++){const ae=ie[j],ue=r.convert(ae.format,ae.colorSpace),q=r.convert(ae.type),K=T(ae.internalFormat,ue,q,ae.normalized,ae.colorSpace);he(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,mt(M),K,M.width,M.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,mt(M),K,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,K,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pt(w,M,B){const ie=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=i.get(M.depthTexture);j.__renderTarget=M;const ae=ie?M.depthTexture.image[0]:M.depthTexture.image;(!j.__webglTexture||ae.width!==M.width||ae.height!==M.height)&&(ae.width=M.width,ae.height=M.height,M.depthTexture.needsUpdate=!0),ie?_e(M.depthTexture,0):ge(M.depthTexture,0);const ue=j.__webglTexture,q=mt(M),K=ie?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,le=M.depthTexture.format===bi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===wi)he(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,K,ue,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,le,K,ue,0);else if(M.depthTexture.format===bi)he(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,K,ue,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,le,K,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fn(w){const M=i.get(w),B=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const ie=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ie){const j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ie.removeEventListener("dispose",j)};ie.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=ie}if(w.depthTexture&&!M.__autoAllocateDepthBuffer)if(B)for(let ie=0;ie<6;ie++)Pt(M.__webglFramebuffer[ie],w,ie);else w.texture.mipmaps.length>0?Pt(M.__webglFramebuffer[0],w,0):Pt(M.__webglFramebuffer,w,0);else if(B){M.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[ie]),M.__webglDepthbuffer[ie]===void 0)M.__webglDepthbuffer[ie]=n.createRenderbuffer(),Pn(M.__webglDepthbuffer[ie],w,!1);else{const j=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer[ie];n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ae)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Pn(M.__webglDepthbuffer,w,!1);else{const j=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ae)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function hn(w,M,B){const ie=i.get(w);M!==void 0&&gt(ie.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&fn(w)}function pn(w){const M=w.texture,B=i.get(w),ie=i.get(M);w.addEventListener("dispose",U),P(w);const j=w.textures,ae=w.isWebGLCubeRenderTarget===!0,ue=j.length>1;if(ue||(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=M.version,a.memory.textures++),ae){B.__webglFramebuffer=[];for(let q=0;q<6;q++)if(M.mipmaps.length>0){B.__webglFramebuffer[q]=[];for(let K=0;K<M.mipmaps.length;K++)B.__webglFramebuffer[q][K]=n.createFramebuffer()}else B.__webglFramebuffer[q]=n.createFramebuffer()}else{if(M.mipmaps.length>0){B.__webglFramebuffer=[];for(let q=0;q<M.mipmaps.length;q++)B.__webglFramebuffer[q]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(ue)for(let q=0,K=j.length;q<K;q++){const le=i.get(j[q]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&he(w)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let q=0;q<j.length;q++){const K=j[q];B.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[q]);const le=r.convert(K.format,K.colorSpace),L=r.convert(K.type),J=T(K.internalFormat,le,L,K.normalized,K.colorSpace,w.isXRRenderTarget===!0),W=mt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,W,J,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,B.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Pn(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),rt(n.TEXTURE_CUBE_MAP,M);for(let q=0;q<6;q++)if(M.mipmaps.length>0)for(let K=0;K<M.mipmaps.length;K++)gt(B.__webglFramebuffer[q][K],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,K);else gt(B.__webglFramebuffer[q],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);E(M)?b(n.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(ue){for(let q=0,K=j.length;q<K;q++){const le=j[q],L=i.get(le);let J=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(J=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(J,L.__webglTexture),rt(J,le),gt(B.__webglFramebuffer,w,le,n.COLOR_ATTACHMENT0+q,J,0),E(le)&&b(J)}t.unbindTexture()}else{let q=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(q=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(q,ie.__webglTexture),rt(q,M),M.mipmaps.length>0)for(let K=0;K<M.mipmaps.length;K++)gt(B.__webglFramebuffer[K],w,M,n.COLOR_ATTACHMENT0,q,K);else gt(B.__webglFramebuffer,w,M,n.COLOR_ATTACHMENT0,q,0);E(M)?b(q):M.mipmaps.length>0&&n.texParameteri(q,n.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&fn(w)}function N(w){const M=w.textures;for(let B=0,ie=M.length;B<ie;B++){const j=M[B];if(E(j)&&j.mipmapsAutoUpdate===!0){const ae=A(w),ue=i.get(j).__webglTexture;t.bindTexture(ae,ue),b(ae),t.unbindTexture()}}}const mn=[];function pt(w){if(w.samples>0){if(he(w)===!1){const M=w.textures,B=w.width,ie=w.height;let j=n.COLOR_BUFFER_BIT;const ae=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(w),q=M.length>1;if(q)for(let le=0;le<M.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let le=0;le<M.length;le++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);const L=i.get(M[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,L,0)}n.blitFramebuffer(0,0,B,ie,0,0,B,ie,j,n.NEAREST),l===!0&&(mn.length=0,mn.push(n.COLOR_ATTACHMENT0+le),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&mn.push(ae),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,mn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let le=0;le<M.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);const L=i.get(M[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,L,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){const M=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function mt(w){return Math.min(s.maxSamples,w.samples)}function he(w){const M=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function wt(w){const M=a.render.frame;u.get(w)!==M&&(u.set(w,M),w.update())}function Ce(w,M){const B=w.colorSpace,ie=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==va&&B!==xi&&(Ke.getTransfer(B)===ot?(ie!==On||j!==dn)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",B)),M}function De(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=Ne,this.resetTextureUnits=ee,this.getTextureUnits=te,this.setTextureUnits=Ee,this.setTexture2D=ge,this.setTexture2DArray=Me,this.setTexture3D=Re,this.setTextureCube=_e,this.rebindTextures=hn,this.setupRenderTarget=pn,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=fn,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=he,this.dispose=H}function Q_(n,e){function t(i,s=xi){let r;const a=Ke.getTransfer(s);if(i===dn)return n.UNSIGNED_BYTE;if(i===Bl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===kl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===fu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===du)return n.BYTE;if(i===uu)return n.SHORT;if(i===fr)return n.UNSIGNED_SHORT;if(i===Ol)return n.INT;if(i===Gn)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===Hn)return n.HALF_FLOAT;if(i===pu)return n.ALPHA;if(i===mu)return n.RGB;if(i===On)return n.RGBA;if(i===wi)return n.DEPTH_COMPONENT;if(i===bi)return n.DEPTH_STENCIL;if(i===gu)return n.RED;if(i===zl)return n.RED_INTEGER;if(i===Ki)return n.RG;if(i===Gl)return n.RG_INTEGER;if(i===Hl)return n.RGBA_INTEGER;if(i===la||i===ca||i===da||i===ua)if(a===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===la)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===la)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Do||i===Io||i===No||i===Uo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Do)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Io)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===No)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fo||i===Oo||i===Bo||i===ko||i===zo||i===ga||i===Go)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Fo||i===Oo)return a===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Bo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ko)return r.COMPRESSED_R11_EAC;if(i===zo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ga)return r.COMPRESSED_RG11_EAC;if(i===Go)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ho||i===Vo||i===Wo||i===$o||i===Xo||i===qo||i===Yo||i===Ko||i===Zo||i===Jo||i===Qo||i===jo||i===el||i===tl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ho)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$o)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ko)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===el)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===tl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nl||i===il||i===sl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===nl)return a===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rl||i===al||i===_a||i===ol)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===rl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Is?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const j_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ev=`
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

}`;class tv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Cu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Zi({vertexShader:j_,fragmentShader:ev,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qe(new Er(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nv extends ji{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,_=null;const y=typeof XRWebGLBinding<"u",d=new tv,p={},v=t.getContextAttributes();let E=null,b=null;const A=[],T=[],g=new He;let x=null,P=null;const R=new En;R.viewport=new vt;const C=new En;C.viewport=new vt;const U=[R,C],k=new pp;let D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ge=A[Z];return ge===void 0&&(ge=new ja,A[Z]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(Z){let ge=A[Z];return ge===void 0&&(ge=new ja,A[Z]=ge),ge.getGripSpace()},this.getHand=function(Z){let ge=A[Z];return ge===void 0&&(ge=new ja,A[Z]=ge),ge.getHandSpace()};function Y(Z){const ge=T.indexOf(Z.inputSource);if(ge===-1)return;const Me=A[ge];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,c||a),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",ne);for(let Z=0;Z<A.length;Z++){const ge=T[Z];ge!==null&&(T[Z]=null,A[Z].disconnect(ge))}D=null,H=null,d.reset();for(const Z in p)delete p[Z];if(e.setRenderTarget(E),m=null,f=null,h=null,s=null,b=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(g.width,g.height,!1),P!==null){const Z=P.camera;Z.fov=P.fov,Z.zoom=P.zoom,Z.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",G),s.addEventListener("inputsourceschange",ne),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(g),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Re=null,_e=null;v.depth&&(_e=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=v.stencil?bi:wi,Re=v.stencil?Is:Gn);const Oe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Oe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Bn(f.textureWidth,f.textureHeight,{format:On,type:dn,depthTexture:new Ns(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Me={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Bn(m.framebufferWidth,m.framebufferHeight,{format:On,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ne.setContext(s),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function ne(Z){for(let ge=0;ge<Z.removed.length;ge++){const Me=Z.removed[ge],Re=T.indexOf(Me);Re>=0&&(T[Re]=null,A[Re].disconnect(Me))}for(let ge=0;ge<Z.added.length;ge++){const Me=Z.added[ge];let Re=T.indexOf(Me);if(Re===-1){for(let Oe=0;Oe<A.length;Oe++)if(Oe>=T.length){T.push(Me),Re=Oe;break}else if(T[Oe]===null){T[Oe]=Me,Re=Oe;break}if(Re===-1)break}const _e=A[Re];_e&&_e.connect(Me)}}function $(Z,ge){ge===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ge.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ge=Z.near,Me=Z.far;d.texture!==null&&(d.depthNear>0&&(ge=d.depthNear),d.depthFar>0&&(Me=d.depthFar)),k.near=C.near=R.near=ge,k.far=C.far=R.far=Me,(D!==k.near||H!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),D=k.near,H=k.far),k.layers.mask=Z.layers.mask|6,R.layers.mask=k.layers.mask&-5,C.layers.mask=k.layers.mask&-3;const Re=Z.parent,_e=k.cameras;$(k,Re);for(let Oe=0;Oe<_e.length;Oe++)$(_e[Oe],Re);k.projectionMatrix.copy(R.projectionMatrix),k.projectionMatrixInverse.copy(R.projectionMatrixInverse),P===null&&Z.isPerspectiveCamera&&(P={camera:Z,fov:Z.fov,zoom:Z.zoom}),ee(Z,k,Re)};function ee(Z,ge,Me){Me===null?Z.matrix.copy(ge.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ge.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ge.projectionMatrix),Z.projectionMatrixInverse.copy(ge.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=cl*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(k)},this.getCameraTexture=function(Z){return p[Z]};let te=null;function Ee(Z,ge){if(u=ge.getViewerPose(c||a),_=ge,u!==null){const Me=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let Re=!1;Me.length!==k.cameras.length&&(k.cameras.length=0,Re=!0);for(let Pe=0;Pe<Me.length;Pe++){const rt=Me[Pe];let lt=null;if(m!==null)lt=m.getViewport(rt);else{const Ut=h.getViewSubImage(f,rt);lt=Ut.viewport,Pe===0&&(e.setRenderTargetTextures(b,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(b))}let We=U[Pe];We===void 0&&(We=new En,We.layers.enable(Pe),We.viewport=new vt,U[Pe]=We),We.matrix.fromArray(rt.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(rt.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(lt.x,lt.y,lt.width,lt.height),Pe===0&&(k.matrix.copy(We.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Re===!0&&k.cameras.push(We)}const _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=i.getBinding();const Pe=h.getDepthInformation(Me[0]);Pe&&Pe.isValid&&Pe.texture&&d.init(Pe,s.renderState)}if(_e&&_e.includes("camera-access")&&y){e.state.unbindTexture(),h=i.getBinding();for(let Pe=0;Pe<Me.length;Pe++){const rt=Me[Pe].camera;if(rt){let lt=p[rt];lt||(lt=new Cu,p[rt]=lt);const We=h.getCameraImage(rt);lt.sourceTexture=We}}}}for(let Me=0;Me<A.length;Me++){const Re=T[Me],_e=A[Me];Re!==null&&_e!==void 0&&_e.update(Re,ge,c||a)}te&&te(Z,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),_=null}const Ne=new Uu;Ne.setAnimationLoop(Ee),this.setAnimationLoop=function(Z){te=Z},this.dispose=function(){}}}const iv=new ht,$u=new Ie;$u.set(-1,0,0,0,1,0,0,0,1);function sv(n,e){function t(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function i(d,p){p.color.getRGB(d.fogColor.value,Pu(n)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function s(d,p,v,E,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(d,p):p.isMeshLambertMaterial?(r(d,p),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(d,p),h(d,p)):p.isMeshPhongMaterial?(r(d,p),u(d,p),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(d,p),f(d,p),p.isMeshPhysicalMaterial&&m(d,p,b)):p.isMeshMatcapMaterial?(r(d,p),_(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),y(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(a(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?l(d,p,v,E):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,t(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===tn&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,t(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===tn&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,t(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,t(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const v=e.get(p),E=v.envMap,b=v.envMapRotation;E&&(d.envMap.value=E,d.envMapRotation.value.setFromMatrix4(iv.makeRotationFromEuler(b)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply($u),d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,d.aoMapTransform))}function a(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform))}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,v,E){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*v,d.scale.value=E*.5,p.map&&(d.map.value=p.map,t(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function u(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function h(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,v){d.ior.value=p.ior,p.diffuseRoughness>0&&(d.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(d.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,d.diffuseRoughnessMapTransform))),p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.retroreflectivity>0&&(d.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,d.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,p){p.matcap&&(d.matcap.value=p.matcap)}function y(d,p){const v=e.get(p).light;d.referencePosition.value.setFromMatrixPosition(v.matrixWorld),d.nearDistance.value=v.shadow.camera.near,d.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function rv(n,e,t,i){let s={},r={};function a(v,E){const b=E.program;i.uniformBlockBinding(v,b,s[v.id])}function o(v,E){let b=s[v.id];b===void 0&&(_(v),b=l(v),s[v.id]=b,v.addEventListener("dispose",d));const A=E.program;i.updateUBOMapping(v,A);const T=e.render.frame;r[v.id]!==T&&(c(v),r[v.id]=T)}function l(v){const E=n.createBuffer(),b=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,b,A),n.bindBuffer(n.UNIFORM_BUFFER,null),E}function c(v){const E=s[v.id],b=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let T=0,g=b.length;T<g;T++){const x=b[T];if(Array.isArray(x))for(let P=0,R=x.length;P<R;P++)u(x[P],T,P,A);else u(x,T,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(v,E,b,A){if(f(v,E,b,A)===!0){const T=v.__offset,g=v.value;if(Array.isArray(g)){let x=0;for(let P=0;P<g.length;P++){const R=g[P],C=y(R,!0);h(R,v.__data,x),x+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else h(g,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,v.__data)}}function h(v,E,b){typeof v=="number"||typeof v=="boolean"?E[b]=v:v.isMatrix3?(E[b]=v.elements[0],E[b+1]=v.elements[1],E[b+2]=v.elements[2],E[b+3]=0,E[b+4]=v.elements[3],E[b+5]=v.elements[4],E[b+6]=v.elements[5],E[b+7]=0,E[b+8]=v.elements[6],E[b+9]=v.elements[7],E[b+10]=v.elements[8],E[b+11]=0):ArrayBuffer.isView(v)?E.set(v.subarray(0,E.length-b),b):v.toArray(E,b)}function f(v,E,b,A){const T=v.value,g=E+"_"+b;if(Array.isArray(T)){A[g]===void 0&&(A[g]=[]);const x=A[g];let P=!1;for(let R=0;R<T.length;R++)m(T[R],x,R)===!0&&(P=!0);return P}return m(T,A,g)}function m(v,E,b){if(E[b]===void 0)return typeof v=="number"||typeof v=="boolean"?E[b]=v:ArrayBuffer.isView(v)?E[b]=v.slice():E[b]=v.clone(),!0;{const A=E[b];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return E[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function _(v){const E=v.uniforms;let b=0;const A=16;for(let g=0,x=E.length;g<x;g++){const P=Array.isArray(E[g])?E[g]:[E[g]];for(let R=0,C=P.length;R<C;R++){const U=P[R],k=Array.isArray(U.value)?U.value:[U.value],D=Array.isArray(E[g])||Array.isArray(U.value);let H=b;for(let G=0,ne=k.length;G<ne;G++){const $=k[G],ee=y($,D),te=b%A,Ee=te%ee.boundary,Ne=te+Ee;b+=Ee,Ne!==0&&A-Ne<ee.storage&&(b+=A-Ne),G===0&&(H=b),b+=ee.storage}const Y=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new Y((b-H)/Float32Array.BYTES_PER_ELEMENT),U.__offset=H}}const T=b%A;return T>0&&(b+=A-T),v.__size=b,v.__cache={},this}function y(v,E){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=16,b.storage=48):v.isMatrix4?(b.boundary=16,b.storage=64):v.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",v),E===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function d(v){const E=v.target;E.removeEventListener("dispose",d),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const v in s)n.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:p}}const av=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Dn=null;function ov(){return Dn===null&&(Dn=new Qh(av,16,16,Ki,Hn),Dn.name="DFG_LUT",Dn.minFilter=en,Dn.magFilter=en,Dn.wrapS=ni,Dn.wrapT=ni,Dn.generateMipmaps=!1,Dn.needsUpdate=!0),Dn}class lv{constructor(e={}){const{canvas:t=Eh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:m=dn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const y=m,d=new Set([Hl,Gl,zl]),p=new Set([dn,Gn,fr,Is,Bl,kl]),v=new Uint32Array(4),E=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]};let A=null,T=null;const g=[],x=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let C=!1,U=null,k=null,D=null,H=null;this._outputColorSpace=ln;let Y=0,G=0,ne=null,$=-1,ee=null;const te=new vt,Ee=new vt;let Ne=null;const Z=new ke(0);let ge=0,Me=t.width,Re=t.height,_e=1,Oe=null,bt=null;const Pe=new vt(0,0,Me,Re),rt=new vt(0,0,Me,Re);let lt=!1;const We=new pr,Ut=new ql;let Tt=!1,Qt=!1;const gt=new ht,Pn=new F,Pt=new vt,fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let hn=!1;function pn(){return ne===null?_e:1}let N=i;function mn(S,I){return t.getContext(S,I)}let pt,mt,he,wt,Ce,De,w,M,B,ie,j,ae,ue,q,K,le,L,J,W,ce,re,oe,we;try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ul}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",pe,!1),N===null){const I="webgl2";if(N=mn(I,S),N===null)throw mn(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ze()}catch(S){throw t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),tt("WebGLRenderer: "+S.message),S}function ze(){pt=new ug(N),pt.init(),re=new Q_(N,pt),mt=new eg(N,pt,e,re),he=new Z_(N,pt),mt.reversedDepthBuffer&&f&&he.buffers.depth.setReversed(!0),k=N.createFramebuffer(),D=N.createFramebuffer(),H=N.createFramebuffer(),wt=new pg(N),Ce=new F_,De=new J_(N,pt,he,Ce,mt,re,wt),w=new dg(R),M=new gp(N),oe=new Q0(N,M),B=new fg(N,M,wt,oe),ie=new gg(N,B,M,oe,wt),J=new mg(N,mt,De),K=new tg(Ce),j=new U_(R,w,pt,mt,oe,K),ae=new sv(R,Ce),ue=new B_,q=new W_(pt),L=new J0(R,w,he,ie,_,l),le=new K_(R,ie,mt),we=new rv(N,wt,mt,he),W=new j0(N,pt,wt),ce=new hg(N,pt,wt),wt.programs=j.programs,R.capabilities=mt,R.extensions=pt,R.properties=Ce,R.renderLists=ue,R.shadowMap=le,R.state=he,R.info=wt}y!==dn&&(P=new vg(y,t.width,t.height,o,s,r));const se=new nv(R,N);this.xr=se,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=pt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=pt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(S){S!==void 0&&(_e=S,this.setSize(Me,Re,!1))},this.getSize=function(S){return S.set(Me,Re)},this.setSize=function(S,I,V=!0){if(se.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=S,Re=I,t.width=Math.floor(S*_e),t.height=Math.floor(I*_e),V===!0&&(t.style.width=S+"px",t.style.height=I+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(Me*_e,Re*_e).floor()},this.setDrawingBufferSize=function(S,I,V){Me=S,Re=I,_e=V,t.width=Math.floor(S*V),t.height=Math.floor(I*V),this.setViewport(0,0,S,I)},this.setEffects=function(S){if(y===dn){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let I=0;I<S.length;I++)if(S[I].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(te)},this.getViewport=function(S){return S.copy(Pe)},this.setViewport=function(S,I,V,O){S.isVector4?Pe.set(S.x,S.y,S.z,S.w):Pe.set(S,I,V,O),he.viewport(te.copy(Pe).multiplyScalar(pn()).round())},this.getScissor=function(S){return S.copy(rt)},this.setScissor=function(S,I,V,O){S.isVector4?rt.set(S.x,S.y,S.z,S.w):rt.set(S,I,V,O),he.scissor(Ee.copy(rt).multiplyScalar(pn()).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(S){he.setScissorTest(lt=S)},this.setOpaqueSort=function(S){Oe=S},this.setTransparentSort=function(S){bt=S},this.getClearColor=function(S){return S.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(S=!0,I=!0,V=!0){let O=0;if(S){let z=!1;if(ne!==null){const fe=ne.texture.format;z=d.has(fe)}if(z){const fe=ne.texture.type,xe=p.has(fe),de=L.getClearColor(),ve=L.getClearAlpha(),Te=de.r,Ue=de.g,$e=de.b;xe?(v[0]=Te,v[1]=Ue,v[2]=$e,v[3]=ve,N.clearBufferuiv(N.COLOR,0,v)):(E[0]=Te,E[1]=Ue,E[2]=$e,E[3]=ve,N.clearBufferiv(N.COLOR,0,E))}else O|=N.COLOR_BUFFER_BIT}I&&(O|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(O|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&N.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),U=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),L.dispose(),ue.dispose(),q.dispose(),De.dispose(),Ce.dispose(),w.dispose(),ie.dispose(),B.dispose(),oe.dispose(),we.dispose(),j.dispose(),se.dispose(),se.removeEventListener("sessionstart",oc),se.removeEventListener("sessionend",lc),Ci.stop()};function Ae(S){S.preventDefault(),Dc("WebGLRenderer: Context Lost."),C=!0}function Be(){Dc("WebGLRenderer: Context Restored."),C=!1;const S=wt.autoReset,I=le.enabled,V=le.autoUpdate,O=le.needsUpdate,z=le.type;ze(),wt.autoReset=S,le.enabled=I,le.autoUpdate=V,le.needsUpdate=O,le.type=z}function pe(S){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function at(S){const I=S.target;I.removeEventListener("dispose",at),Lt(I)}function Lt(S){ci(S),Ce.remove(S)}function ci(S){const I=Ce.get(S).programs;I!==void 0&&(I.forEach(function(V){j.releaseProgram(V)}),S.isShaderMaterial&&j.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,V,O,z,fe){I===null&&(I=fn);const xe=z.isMesh&&z.matrixWorld.determinantAffine()<0,de=uf(S,I,V,O,z);he.setMaterial(O,xe);let ve=V.index,Te=1;if(O.wireframe===!0){if(ve=B.getWireframeAttribute(V),ve===void 0)return;Te=2}const Ue=V.drawRange,$e=V.attributes.position;let Se=Ue.start*Te,Xe=(Ue.start+Ue.count)*Te;fe!==null&&(Se=Math.max(Se,fe.start*Te),Xe=Math.min(Xe,(fe.start+fe.count)*Te)),ve!==null?(Se=Math.max(Se,0),Xe=Math.min(Xe,ve.count)):$e!=null&&(Se=Math.max(Se,0),Xe=Math.min(Xe,$e.count));const yt=Xe-Se;if(yt<0||yt===1/0)return;oe.setup(z,O,de,V,ve);let ut,ct=W;if(ve!==null&&(ut=M.get(ve),ct=ce,ct.setIndex(ut)),z.isMesh)O.wireframe===!0?(he.setLineWidth(O.wireframeLinewidth*pn()),ct.setMode(N.LINES)):ct.setMode(N.TRIANGLES);else if(z.isLine){let Ht=O.linewidth;Ht===void 0&&(Ht=1),he.setLineWidth(Ht*pn()),z.isLineSegments?ct.setMode(N.LINES):z.isLineLoop?ct.setMode(N.LINE_LOOP):ct.setMode(N.LINE_STRIP)}else z.isPoints?ct.setMode(N.POINTS):z.isSprite&&ct.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))ct.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ht=z._multiDrawStarts,be=z._multiDrawCounts,qt=z._multiDrawCount,et=ve?M.get(ve).bytesPerElement:1,Pi=Ce.get(O).currentProgram.getUniforms();for(let Vt=0;Vt<qt;Vt++)Pi.setValue(N,"_gl_DrawID",Vt),ct.render(Ht[Vt]/et,be[Vt])}else if(z.isInstancedMesh)ct.renderInstances(Se,yt,z.count);else if(V.isInstancedBufferGeometry){const Ht=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,be=Math.min(V.instanceCount,Ht);ct.renderInstances(Se,yt,be)}else ct.render(Se,yt)};function ac(S,I,V,O){U!==null&&S.isNodeMaterial&&U.setObject(O,S),Tt===!0&&K.setState(S,V,!1),S.transparent===!0&&S.side===ei&&S.forceSinglePass===!1?(S.side=tn,S.needsUpdate=!0,Gs(S,I,O),S.side=Yi,S.needsUpdate=!0,Gs(S,I,O),S.side=ei):Gs(S,I,O)}this.compile=function(S,I,V=null){V===null&&(V=S),U!==null&&U.renderStart(S,I,V),T=q.get(V),T.init(I),x.push(T),V.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),S!==V&&S.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights(),U!==null&&U.updateLights(T.state.lightsArray),Qt=this.localClippingEnabled,Tt=K.init(this.clippingPlanes,Qt),Tt===!0&&K.setGlobalState(this.clippingPlanes,I),U!==null&&le.render(T.state.shadowsArray,V,I);const O=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const fe=z.material;if(fe)if(Array.isArray(fe))for(let xe=0;xe<fe.length;xe++){const de=fe[xe];ac(de,V,I,z),O.add(de)}else ac(fe,V,I,z),O.add(fe)}),T=x.pop(),U!==null&&U.renderEnd(),O},this.compileAsync=function(S,I,V=null){const O=this.compile(S,I,V);return new Promise(z=>{function fe(){if(O.forEach(function(xe){const ve=Ce.get(xe).currentProgram;(ve===void 0||ve.isReady())&&O.delete(xe)}),O.size===0){z(S);return}setTimeout(fe,10)}pt.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Fa=null;function cf(S){Fa&&Fa(S)}function oc(){Ci.stop()}function lc(){Ci.start()}const Ci=new Uu;Ci.setAnimationLoop(cf),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(S){Fa=S,se.setAnimationLoop(S),S===null?Ci.stop():Ci.start()},se.addEventListener("sessionstart",oc),se.addEventListener("sessionend",lc),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;U!==null&&U.renderStart(S,I);const V=se.enabled===!0&&se.isPresenting===!0,O=P!==null&&(ne===null||V)&&P.begin(R,ne);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(I),I=se.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,I,ne),T=q.get(S,x.length),T.init(I),T.state.textureUnits=De.getTextureUnits(),x.push(T),gt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?Ut.setFromArrayCamera(I):We.setFromProjectionMatrix(gt,Rn,I.reversedDepth),Qt=this.localClippingEnabled,Tt=K.init(this.clippingPlanes,Qt),A=ue.get(S,g.length),A.init(),g.push(A),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){const xe=R.xr.getDepthSensingMesh();xe!==null&&Oa(xe,I,-1/0,R.sortObjects)}Oa(S,I,0,R.sortObjects),A.finish(),U!==null&&U.updateLights(T.state.lightsArray),R.sortObjects===!0&&A.sort(Oe,bt),hn=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,hn&&L.addToRenderList(A,S),this.info.autoReset===!0&&this.info.reset(),Tt===!0&&K.beginShadows();const z=T.state.shadowsArray;if(le.render(z,S,I),Tt===!0&&K.endShadows(),(O&&P.hasRenderPass())===!1){const xe=A.opaque,de=A.transmissive;if(T.setupLights(),I.isArrayCamera){const ve=I.cameras;if(de.length>0)for(let Te=0,Ue=ve.length;Te<Ue;Te++){const $e=ve[Te];dc(xe,de,S,$e)}hn&&L.render(S);for(let Te=0,Ue=ve.length;Te<Ue;Te++){const $e=ve[Te];cc(A,S,$e,$e.viewport)}}else de.length>0&&dc(xe,de,S,I),hn&&L.render(S),cc(A,S,I)}ne!==null&&G===0&&(De.updateMultisampleRenderTarget(ne),De.updateRenderTargetMipmap(ne)),O&&P.end(R),S.isScene===!0&&S.onAfterRender(R,S,I),oe.resetDefaultState(),$=-1,ee=null,x.pop(),x.length>0?(T=x[x.length-1],De.setTextureUnits(T.state.textureUnits),Tt===!0&&K.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,g.pop(),g.length>0?A=g[g.length-1]:A=null,U!==null&&U.renderEnd()};function Oa(S,I,V,O){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){const xe=I.isArrayCamera?Ut:We;if(!S.frustumCulled||S.intersectsFrustum(xe)){O&&Pt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(gt);const de=ie.update(S),ve=S.material;ve.visible&&A.push(S,de,ve,V,Pt.z,null,I)}}else if(S.isMesh||S.isLine||S.isPoints){const xe=I.isArrayCamera?Ut:We;if(!S.frustumCulled||S.intersectsFrustum(xe)){const de=ie.update(S),ve=S.material;if(O&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Pt.copy(S.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Pt.copy(de.boundingSphere.center)),Pt.applyMatrix4(S.matrixWorld).applyMatrix4(gt)),Array.isArray(ve)){const Te=de.groups;for(let Ue=0,$e=Te.length;Ue<$e;Ue++){const Se=Te[Ue],Xe=ve[Se.materialIndex];Xe&&Xe.visible&&A.push(S,de,Xe,V,Pt.z,Se,I)}}else ve.visible&&A.push(S,de,ve,V,Pt.z,null,I)}}}const fe=S.children;for(let xe=0,de=fe.length;xe<de;xe++)Oa(fe[xe],I,V,O)}function cc(S,I,V,O){const{opaque:z,transmissive:fe,transparent:xe}=S;T.setupLightsView(V),Tt===!0&&K.setGlobalState(R.clippingPlanes,V),O&&he.viewport(te.copy(O)),z.length>0&&Rr(z,I,V),fe.length>0&&Rr(fe,I,V),xe.length>0&&Rr(xe,I,V),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function dc(S,I,V,O){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[O.id]===void 0){const Se=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[O.id]=new Bn(1,1,{generateMipmaps:!0,type:Se?Hn:dn,minFilter:Si,samples:Math.max(4,mt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const fe=T.state.transmissionRenderTarget[O.id],xe=O.viewport||te;fe.setSize(xe.z*R.transmissionResolutionScale,xe.w*R.transmissionResolutionScale);const de=R.getRenderTarget(),ve=R.getActiveCubeFace(),Te=R.getActiveMipmapLevel();R.setRenderTarget(fe),R.getClearColor(Z),ge=R.getClearAlpha(),ge<1&&R.setClearColor(16777215,.5),R.clear(),hn&&L.render(V);const Ue=R.toneMapping;R.toneMapping=ri;const $e=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),T.setupLightsView(O),Tt===!0&&K.setGlobalState(R.clippingPlanes,O),Rr(S,V,O),De.updateMultisampleRenderTarget(fe),De.updateRenderTargetMipmap(fe),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let Xe=0,yt=I.length;Xe<yt;Xe++){const ut=I[Xe],{object:ct,geometry:Ht,material:be,group:qt}=ut;if(be.side===ei&&ct.layers.test(O.layers)){const et=be.side;be.side=tn,be.needsUpdate=!0,uc(ct,V,O,Ht,be,qt),be.side=et,be.needsUpdate=!0,Se=!0}}Se===!0&&(De.updateMultisampleRenderTarget(fe),De.updateRenderTargetMipmap(fe))}R.setRenderTarget(de,ve,Te),R.setClearColor(Z,ge),$e!==void 0&&(O.viewport=$e),R.toneMapping=Ue}function Rr(S,I,V){const O=I.isScene===!0?I.overrideMaterial:null;for(let z=0,fe=S.length;z<fe;z++){const xe=S[z],{object:de,geometry:ve,group:Te}=xe;let Ue=xe.material;Ue.allowOverride===!0&&O!==null&&(Ue=O),de.layers.test(V.layers)&&uc(de,I,V,ve,Ue,Te)}}function uc(S,I,V,O,z,fe){U!==null&&z.isNodeMaterial&&U.setObject(S,z),S.onBeforeRender(R,I,V,O,z,fe),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(R,I,V,O,S,fe),z.transparent===!0&&z.side===ei&&z.forceSinglePass===!1?(z.side=tn,z.needsUpdate=!0,R.renderBufferDirect(V,I,O,z,S,fe),z.side=Yi,z.needsUpdate=!0,R.renderBufferDirect(V,I,O,z,S,fe),z.side=ei):R.renderBufferDirect(V,I,O,z,S,fe),S.onAfterRender(R,I,V,O,z,fe)}function fc(S){let I=0;for(const V of S)V.texture!==null&&I++;return I}function Gs(S,I,V){I.isScene!==!0&&(I=fn);const O=Ce.get(S),z=T.state.lights,fe=T.state.shadowsArray,xe=z.state.version,de=j.getParameters(S,z.state,fe,I,V,T.state.lightProbeGridArray),ve=j.getProgramCacheKey(de);let Te=O.programs;O.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?I.environment:null,O.fog=I.fog;const Ue=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;O.envMap=w.get(S.envMap||O.environment,Ue),O.envMapRotation=O.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,Te===void 0&&(S.addEventListener("dispose",at),Te=new Map,O.programs=Te,O.programVariants=new Map);let $e=Te.get(ve);if($e!==void 0){if(O.currentProgram===$e&&O.lightsStateVersion===xe)return pc(S,de),$e}else de.uniforms=j.getUniforms(S),U!==null&&S.isNodeMaterial&&U.build(S,V,de),S.onBeforeCompile(de,R),$e=j.acquireProgram(de,ve),Te.set(ve,$e),O.uniforms=de.uniforms;const Se=O.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Se.clippingPlanes=K.uniform),pc(S,de),O.needsLights=hf(S),O.lightsStateVersion=xe,O.needsLights&&(Se.ambientLightColor.value=z.state.ambient,Se.lightProbe.value=z.state.probe,Se.sunLights.value=z.state.sun,Se.sunLightShadows.value=z.state.sunShadow,Se.directionalLights.value=z.state.directional,Se.directionalLightShadows.value=z.state.directionalShadow,Se.spotLights.value=z.state.spot,Se.spotLightShadows.value=z.state.spotShadow,Se.rectAreaLights.value=z.state.rectArea,Se.ltc_1.value=z.state.rectAreaLTC1,Se.ltc_2.value=z.state.rectAreaLTC2,Se.pointLights.value=z.state.point,Se.pointLightShadows.value=z.state.pointShadow,Se.hemisphereLights.value=z.state.hemi,Se.sunShadowMatrix.value=z.state.sunShadowMatrix,Se.sunShadowCascade.value=z.state.sunShadowCascade,Se.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Se.spotLightMatrix.value=z.state.spotLightMatrix,Se.spotLightMap.value=z.state.spotLightMap,Se.pointShadowMatrix.value=z.state.pointShadowMatrix),O.numLightProbeGrids=fc(T.state.lightProbeGridArray),O.currentProgram=$e,O.uniformsList=null,$e}function df(S,I,V,O,z){const fe=Ce.get(S),xe=fe.currentProgram.id+","+O+","+z;let de=fe.programVariants.get(xe);return de===void 0?(de=Gs(S,I,V),fe.programVariants.set(xe,de)):(fe.currentProgram=de,fe.uniformsList=null,fe.outputColorSpace=O,fe.toneMapping=z),de}function hc(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=ha.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function pc(S,I){const V=Ce.get(S);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function uf(S,I,V,O,z){I.isScene!==!0&&(I=fn),De.resetTextureUnits();const fe=I.fog,xe=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?I.environment:null,de=ne===null?R.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ke.workingColorSpace,ve=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Te=w.get(O.envMap||xe,ve),Ue=O.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,$e=!!V.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Se=!!V.morphAttributes.position,Xe=!!V.morphAttributes.normal,yt=!!V.morphAttributes.color;let ut=ri;O.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ut=R.toneMapping);const ct=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ht=ct!==void 0?ct.length:0,be=Ce.get(O),qt=T.state.lights;if(Tt===!0&&(Qt===!0||S!==ee)){const _t=S===ee&&O.id===$;K.setState(O,S,_t)}let et=!1,Pi=!1;O.version===be.__version?be.needsLights&&be.lightsStateVersion!==qt.state.version||z.isBatchedMesh&&be.batching===!1||!z.isBatchedMesh&&be.batching===!0||z.isBatchedMesh&&be.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&be.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&be.instancing===!1||!z.isInstancedMesh&&be.instancing===!0||z.isSkinnedMesh&&be.skinning===!1||!z.isSkinnedMesh&&be.skinning===!0||z.isInstancedMesh&&be.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&be.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&be.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&be.instancingMorph===!1&&z.morphTexture!==null||be.envMap!==Te||O.fog===!0&&be.fog!==fe||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==K.numPlanes||be.numIntersection!==K.numIntersection)||be.vertexAlphas!==Ue||be.vertexTangents!==$e||be.morphTargets!==Se||be.morphNormals!==Xe||be.morphColors!==yt||be.morphTargetsCount!==Ht||be.numLightProbeGrids!==fc(T.state.lightProbeGridArray)?et=!0:(be.outputColorSpace!==de||be.toneMapping!==ut)&&(Pi=!0):(et=!0,be.__version=O.version);let Vt=be.currentProgram;(et===!0||Pi===!0)&&(Vt=Pi===!0?df(O,I,z,de,ut):Gs(O,I,z),U&&O.isNodeMaterial&&U.onUpdateProgram(O,Vt,be));let Cr=!1,di=!1,Li=!1;const je=Vt.getUniforms(),Ft=be.uniforms;if(he.useProgram(Vt.program)&&(Cr=!0,di=!0,Li=!0),O.id!==$&&($=O.id,di=!0),Cr||ee!==S){he.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),je.setValue(N,"projectionMatrix",S.projectionMatrix),je.setValue(N,"viewMatrix",S.matrixWorldInverse);const Dt=je.map.cameraPosition;Dt!==void 0&&Dt.setValue(N,Pn.setFromMatrixPosition(S.matrixWorld)),mt.logarithmicDepthBuffer&&je.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&je.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),ee!==S&&(ee=S,di=!0,Li=!0)}if(be.needsLights&&(qt.state.sunShadowMap.length>0&&je.setValue(N,"sunShadowMap",qt.state.sunShadowMap,De),qt.state.directionalShadowMap.length>0&&je.setValue(N,"directionalShadowMap",qt.state.directionalShadowMap,De),qt.state.spotShadowMap.length>0&&je.setValue(N,"spotShadowMap",qt.state.spotShadowMap,De),qt.state.pointShadowMap.length>0&&je.setValue(N,"pointShadowMap",qt.state.pointShadowMap,De)),z.isSkinnedMesh){je.setOptional(N,z,"bindMatrix"),je.setOptional(N,z,"bindMatrixInverse");const _t=z.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),je.setValue(N,"boneTexture",_t.boneTexture,De))}z.isBatchedMesh&&(je.setOptional(N,z,"batchingTexture"),je.setValue(N,"batchingTexture",z._matricesTexture,De),je.setOptional(N,z,"batchingIdTexture"),je.setValue(N,"batchingIdTexture",z._indirectTexture,De),je.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&je.setValue(N,"batchingColorTexture",z._colorsTexture,De));const Mn=V.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&J.update(z,V,Vt),(di||be.receiveShadow!==z.receiveShadow)&&(be.receiveShadow=z.receiveShadow,je.setValue(N,"receiveShadow",z.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&I.environment!==null&&(Ft.envMapIntensity.value=I.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=ov()),di){if(je.setValue(N,"toneMappingExposure",R.toneMappingExposure),be.needsLights&&ff(Ft,Li),fe&&O.fog===!0&&ae.refreshFogUniforms(Ft,fe),ae.refreshMaterialUniforms(Ft,O,_e,Re,T.state.transmissionRenderTarget[S.id]),be.needsLights&&be.numLightProbeGrids>0){const _t=b;let Dt=0;for(const $n of T.state.lightProbeGridArray)$n.texture!==null&&(_t.textures[Dt]=$n.texture,_t.min[Dt]=$n.boundingBox.min,_t.max[Dt]=$n.boundingBox.max,_t.resolution[Dt]=$n.resolution,Dt++);for(const $n in _t)_t[$n].length=Dt;Ft.probesSH.value=_t.textures,Ft.probesMin.value=_t.min,Ft.probesMax.value=_t.max,Ft.probesResolution.value=_t.resolution}ha.upload(N,hc(be),Ft,De)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ha.upload(N,hc(be),Ft,De),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&je.setValue(N,"center",z.center),je.setValue(N,"modelViewMatrix",z.modelViewMatrix),je.setValue(N,"normalMatrix",z.normalMatrix),je.setValue(N,"modelMatrix",z.matrixWorld),O.uniformsGroups!==void 0){const _t=O.uniformsGroups;for(let Dt=0,$n=_t.length;Dt<$n;Dt++){const gc=_t[Dt];we.update(gc,Vt),we.bind(gc,Vt)}}return Vt}function ff(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.sunLights.needsUpdate=I,S.sunLightShadows.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function hf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(S,I,V){const O=Ce.get(S);O.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Ce.get(S.texture).__webglTexture=I,Ce.get(S.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:V,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,I){const V=Ce.get(S);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,V=0){ne=S,Y=I,G=V;let O=null,z=!1,fe=!1;if(S){const de=Ce.get(S);if(de.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(N.FRAMEBUFFER,de.__webglFramebuffer),te.copy(S.viewport),Ee.copy(S.scissor),Ne=S.scissorTest,he.viewport(te),he.scissor(Ee),he.setScissorTest(Ne),$=-1;return}else if(de.__webglFramebuffer===void 0)De.setupRenderTarget(S);else if(de.__hasExternalTextures)De.rebindTextures(S,Ce.get(S.texture).__webglTexture,Ce.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ue=S.depthTexture;if(de.__boundDepthTexture!==Ue){if(Ue!==null&&Ce.has(Ue)&&(S.width!==Ue.image.width||S.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(S)}}const ve=S.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(fe=!0);const Te=Ce.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Te[I])?O=Te[I][V]:O=Te[I],z=!0):S.samples>0&&De.useMultisampledRTT(S)===!1?O=Ce.get(S).__webglMultisampledFramebuffer:Array.isArray(Te)?O=Te[V]:O=Te,te.copy(S.viewport),Ee.copy(S.scissor),Ne=S.scissorTest}else te.copy(Pe).multiplyScalar(_e).floor(),Ee.copy(rt).multiplyScalar(_e).floor(),Ne=lt;if(V!==0&&(O=k),he.bindFramebuffer(N.FRAMEBUFFER,O)&&he.drawBuffers(S,O),he.viewport(te),he.scissor(Ee),he.setScissorTest(Ne),z){const de=Ce.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,de.__webglTexture,V)}else if(fe){const de=I;for(let ve=0;ve<S.textures.length;ve++){const Te=Ce.get(S.textures[ve]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+ve,Te.__webglTexture,V,de)}}else if(S!==null&&V!==0){const de=Ce.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,de.__webglTexture,V)}$=-1};function mc(S){const I=Ce.get(S);return(I.__readFormat!==S.format||I.__readType!==S.type)&&(I.__readFormat=S.format,I.__readType=S.type,I.__formatReadable=mt.textureFormatReadable(S.format),I.__typeReadable=mt.textureTypeReadable(S.type)),I}this.readRenderTargetPixels=function(S,I,V,O,z,fe,xe,de=0){if(!(S&&S.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Ce.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xe!==void 0&&(ve=ve[xe],Array.isArray(ve)&&(ve=ve[0])),ve){he.bindFramebuffer(N.FRAMEBUFFER,ve);try{const Te=S.textures[de],Ue=Te.format,$e=Te.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+de);const Se=mc(Te);if(Se.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-O&&V>=0&&V<=S.height-z&&N.readPixels(I,V,O,z,re.convert(Ue),re.convert($e),fe)}finally{const Te=ne!==null?Ce.get(ne).__webglFramebuffer:null;he.bindFramebuffer(N.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(S,I,V,O,z,fe,xe,de=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Ce.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xe!==void 0&&(ve=ve[xe],Array.isArray(ve)&&(ve=ve[0])),ve)if(I>=0&&I<=S.width-O&&V>=0&&V<=S.height-z){he.bindFramebuffer(N.FRAMEBUFFER,ve);const Te=S.textures[de],Ue=Te.format,$e=Te.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+de);const Se=mc(Te);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Xe),N.bufferData(N.PIXEL_PACK_BUFFER,fe.byteLength,N.STREAM_READ),N.readPixels(I,V,O,z,re.convert(Ue),re.convert($e),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const yt=ne!==null?Ce.get(ne).__webglFramebuffer:null;he.bindFramebuffer(N.FRAMEBUFFER,yt);const ut=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Th(N,ut,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Xe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,fe),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Xe),N.deleteSync(ut),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,I=null,V=0){const O=Math.pow(2,-V),z=Math.floor(S.image.width*O),fe=Math.floor(S.image.height*O),xe=I!==null?I.x:0,de=I!==null?I.y:0;De.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,xe,de,z,fe),he.unbindTexture()},this.copyTextureToTexture=function(S,I,V=null,O=null,z=0,fe=0){let xe,de,ve,Te,Ue,$e,Se,Xe,yt;const ut=S.isCompressedTexture?S.mipmaps[fe]:S.image;if(V!==null)xe=V.max.x-V.min.x,de=V.max.y-V.min.y,ve=V.isBox3?V.max.z-V.min.z:1,Te=V.min.x,Ue=V.min.y,$e=V.isBox3?V.min.z:0;else{const je=Math.pow(2,-z);xe=Math.floor(ut.width*je),de=Math.floor(ut.height*je),S.isDataArrayTexture?ve=ut.depth:S.isData3DTexture?ve=Math.floor(ut.depth*je):ve=1,Te=0,Ue=0,$e=0}O!==null?(Se=O.x,Xe=O.y,yt=O.z):(Se=0,Xe=0,yt=0);const ct=re.convert(I.format),Ht=re.convert(I.type);let be;I.isData3DTexture?(De.setTexture3D(I,0),be=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(De.setTexture2DArray(I,0),be=N.TEXTURE_2D_ARRAY):(De.setTexture2D(I,0),be=N.TEXTURE_2D),he.activeTexture(N.TEXTURE0),he.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),he.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),he.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const qt=he.getParameter(N.UNPACK_ROW_LENGTH),et=he.getParameter(N.UNPACK_IMAGE_HEIGHT),Pi=he.getParameter(N.UNPACK_SKIP_PIXELS),Vt=he.getParameter(N.UNPACK_SKIP_ROWS),Cr=he.getParameter(N.UNPACK_SKIP_IMAGES);he.pixelStorei(N.UNPACK_ROW_LENGTH,ut.width),he.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ut.height),he.pixelStorei(N.UNPACK_SKIP_PIXELS,Te),he.pixelStorei(N.UNPACK_SKIP_ROWS,Ue),he.pixelStorei(N.UNPACK_SKIP_IMAGES,$e);const di=S.isDataArrayTexture||S.isData3DTexture,Li=I.isDataArrayTexture||I.isData3DTexture;if(S.isDepthTexture){const je=Ce.get(S),Ft=Ce.get(I),Mn=Ce.get(je.__renderTarget),_t=Ce.get(Ft.__renderTarget);he.bindFramebuffer(N.READ_FRAMEBUFFER,Mn.__webglFramebuffer),he.bindFramebuffer(N.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Dt=0;Dt<ve;Dt++)di&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ce.get(S).__webglTexture,z,$e+Dt),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ce.get(I).__webglTexture,fe,yt+Dt)),N.blitFramebuffer(Te,Ue,Te+xe,Ue+de,Se,Xe,Se+xe,Xe+de,N.DEPTH_BUFFER_BIT,N.NEAREST);he.bindFramebuffer(N.READ_FRAMEBUFFER,null),he.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||S.isRenderTargetTexture||Ce.has(S)){const je=Ce.get(S),Ft=Ce.get(I);he.bindFramebuffer(N.READ_FRAMEBUFFER,D),he.bindFramebuffer(N.DRAW_FRAMEBUFFER,H);for(let Mn=0;Mn<ve;Mn++)di?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,je.__webglTexture,z,$e+Mn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,je.__webglTexture,z),Li?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ft.__webglTexture,fe,yt+Mn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ft.__webglTexture,fe),z!==0?N.blitFramebuffer(Te,Ue,Te+xe,Ue+de,Se,Xe,Se+xe,Xe+de,N.COLOR_BUFFER_BIT,N.NEAREST):Li?N.copyTexSubImage3D(be,fe,Se,Xe,yt+Mn,Te,Ue,xe,de):N.copyTexSubImage2D(be,fe,Se,Xe,Te,Ue,xe,de);he.bindFramebuffer(N.READ_FRAMEBUFFER,null),he.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Li?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(be,fe,Se,Xe,yt,xe,de,ve,ct,Ht,ut.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(be,fe,Se,Xe,yt,xe,de,ve,ct,ut.data):N.texSubImage3D(be,fe,Se,Xe,yt,xe,de,ve,ct,Ht,ut):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,fe,Se,Xe,xe,de,ct,Ht,ut.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,fe,Se,Xe,ut.width,ut.height,ct,ut.data):N.texSubImage2D(N.TEXTURE_2D,fe,Se,Xe,xe,de,ct,Ht,ut);he.pixelStorei(N.UNPACK_ROW_LENGTH,qt),he.pixelStorei(N.UNPACK_IMAGE_HEIGHT,et),he.pixelStorei(N.UNPACK_SKIP_PIXELS,Pi),he.pixelStorei(N.UNPACK_SKIP_ROWS,Vt),he.pixelStorei(N.UNPACK_SKIP_IMAGES,Cr),fe===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&N.generateMipmap(be),he.unbindTexture()},this.initRenderTarget=function(S){Ce.get(S).__webglFramebuffer===void 0&&De.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?De.setTextureCube(S,0):S.isData3DTexture?De.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?De.setTexture2DArray(S,0):De.setTexture2D(S,0),he.unbindTexture()},this.resetState=function(){Y=0,G=0,ne=null,he.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}const pl=52*Math.PI/180,Xu=30,ii=Math.sin(pl),qu="#8f95a6",Rs="#56617c",cn="#f1ead9",Yu="#1d2335",Ku="#e6dcc6",Tn=n=>n.citadel?5:n.kind==="station"?3.3:[2.7,3.5,4.5][n.size],cv=n=>{const e=Tn(n);return n.kind==="planet"?e*2.5:e*.5+e*(n.citadel?3.4:1.5)},vs=n=>{const e=Tn(n);return n.kind==="planet"?e*1.5:e*.5+e*.55},ml=[["#d9c7a0","#b09a74","#efe2c2"],["#93a5b3","#6c7e8e","#b9c7d0"],["#93b08c","#6d8b69","#b7ceac"],["#cc9379","#a56e58","#e3b7a2"],["#cfdcdf","#a2b5ba","#eef5f5"]];function Ei(n,e){if(e.owner===Q||n.vis[e.id]===2)return{tier:"live",owner:e.owner,drones:e.drones};const t=n.intel[e.id];return t.snap?{tier:"stale",owner:t.snap.owner,drones:t.snap.drones}:t.seen>=1?{tier:"detected",owner:-1,drones:0}:{tier:"hidden",owner:-1,drones:0}}let Qs=null,_n,_i,Bi=null,wn,pa,gl=0,wd=-1,xs,ir,sr;const Ms=new Map,Ss=new Map,bs=320;let _l=0,vl=0;const xo=new F,St=(n,e=0)=>{const t=new ke(n);return e&&t.lerp(new ke(Rs),e),new Lu({color:t,flatShading:!0})},Cs=(n,e=1)=>new Xl({color:n,transparent:e<1,opacity:e,depthWrite:e>=1});function zi(n){n.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(s=>s.dispose()):i&&i.dispose()}),n.removeFromParent()}function Ea(n,e,t,i,s=0,r=Math.PI*2,a=1){const o=new qe(new Kl(n,e,48,1,s,r),Cs(t,a));return o.rotation.x=-Math.PI/2,o.position.y=i,o}function dv(){const n=document.getElementById("gl");Qs=new lv({canvas:n,antialias:!0}),_n=new Wh,_n.background=new ke("#2a3350"),_i=new En(Xu,1,1,4e3),_n.add(new dp("#fff4e0","#3d4668",1.5));const e=new hp("#fff0d8",2.2);e.position.set(-.7,1,.45),_n.add(e);const t=[];for(let s=0;s<96;s++)t.push(new F(Math.cos(s/96*Math.PI*2),0,Math.sin(s/96*Math.PI*2)));const i=new Gt().setFromPoints(t);xs=new Zc(i,new dl({color:cn,transparent:!0,opacity:.55})),ir=new Zc(i,new dl({color:cn,transparent:!0,opacity:.22})),sr=Ea(1,1.1,cn,.12),_n.add(xs,ir,sr)}function uv(n){for(const o of Ms.values())zi(o.grp);for(const o of Ss.values())zi(o.grp);Ms.clear(),Ss.clear();for(const o of _n.children.filter(l=>l.userData.world))zi(o);let e=n.seed|0;const t=()=>{e=e+1831565813|0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296},i=[];for(let o=0;o<1400;o++)i.push(t()*(n.w+1600)-800,-150-t()*500,t()*(n.h+1600)-800);const s=new Gt;s.setAttribute("position",new st(i,3));const r=new tp(s,new wu({color:cn,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:.8}));r.userData.world=!0,_n.add(r);const a=["#5f7fa8","#8a6fa0","#b9786a","#5f9c94","#a88f6a"];for(let o=0;o<14;o++){const l=new qe(new br(120+t()*220,24),Cs(a[Math.floor(t()*a.length)],.16));l.rotation.x=-Math.PI/2,l.position.set(t()*(n.w+600)-300,-220-t()*200,t()*(n.h+600)-300),l.userData.world=!0,_n.add(l)}wn=document.createElement("canvas"),wn.width=n.w+bs*2,wn.height=n.h+bs*2,pa=new np(wn),pa.colorSpace=ln,Bi=new qe(new Er(wn.width,wn.height),new Xl({map:pa,transparent:!0,depthWrite:!1})),Bi.rotation.x=-Math.PI/2,Bi.position.set(n.w/2,-.2,n.h/2),Bi.userData.world=!0,Bi.renderOrder=-1,_n.add(Bi),gl=0}function Gi(n,e){const t=parseInt(n.slice(1),16);return`rgba(${t>>16&255},${t>>8&255},${t&255},${e})`}function fv(n,e){const t=parseInt(n.slice(1),16),i=s=>Math.max(0,Math.min(255,Math.round(s*e)));return`rgb(${i(t>>16&255)},${i(t>>8&255)},${i(t&255)})`}function hv(n){const e=wn.getContext("2d");e.globalCompositeOperation="source-over",e.clearRect(0,0,wn.width,wn.height),e.fillStyle="rgba(86,97,128,0.8)",e.fillRect(0,0,wn.width,wn.height),e.globalCompositeOperation="destination-out";for(const t of n.nodes){if(t.owner!==Q)continue;const[i,s]=Pa(n,t),r=t.x+bs,a=t.y+bs;let o=e.createRadialGradient(r,a,s*.82,r,a,s);o.addColorStop(0,"rgba(0,0,0,0.5)"),o.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=o,e.beginPath(),e.arc(r,a,s,0,7),e.fill(),o=e.createRadialGradient(r,a,i*.86,r,a,i),o.addColorStop(0,"rgba(0,0,0,1)"),o.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=o,e.beginPath(),e.arc(r,a,i,0,7),e.fill()}e.globalCompositeOperation="source-over";for(const t of n.nodes){const i=Ei(n,t);if(i.tier==="hidden"||i.tier==="detected"||i.owner===0)continue;const s=t.x+bs,r=t.y+bs,a=Mi(n,i.owner),o=e.createRadialGradient(s,r,0,s,r,30);o.addColorStop(0,Gi(a,.4)),o.addColorStop(.7,Gi(a,.18)),o.addColorStop(1,Gi(a,0)),e.fillStyle=o,e.beginPath(),e.arc(s,r,30,0,7),e.fill()}pa.needsUpdate=!0}function pv(n,e,t){const i=new yr(e,1).toNonIndexed(),[s,r,a]=ml[n.id%ml.length].map(h=>{const f=new ke(h);return t&&f.lerp(new ke(Rs),t),f}),o=i.getAttribute("position"),l=[],c=.05+n.id%3*.12;for(let h=0;h<o.count;h+=3){const f=(o.getY(h)+o.getY(h+1)+o.getY(h+2))/3/e,m=f>.62?a:Math.abs(f-c)<.14||n.size>0&&Math.abs(f+.42)<.1?r:s;for(let _=0;_<3;_++)l.push(m.r,m.g,m.b)}i.setAttribute("color",new st(l,3));const u=new qe(i,new Lu({vertexColors:!0,flatShading:!0}));return u.rotation.z=.25,u}const Zu=[150,30,210,-30].map(n=>n*Math.PI/180);function mv(n,e){const t=Tn(n);if(n.kind==="planet"){const s=Math.PI*(.8+.14*Math.ceil(e/2)*(e%2?1:-1));return{x:Math.cos(s)*t*2.3,y:.7,z:Math.sin(s)*t*2.3,a:s}}const i=Zu[e%4];return{x:Math.cos(i)*t*2.25,y:t*.5+t*.55+.55,z:Math.sin(i)*t*2.25,a:i}}function gv(n,e,t,i){const s=new yi,r=Tn(e),a=t==="detected",o=t==="stale"?.35:0,l=a?Rs:i===0?qu:Mi(n,i);let c=null;const u=new qe(new br(r*1.05,24),Cs("#0c101e",.4));if(u.rotation.x=-Math.PI/2,u.position.y=.02,s.add(u),a){const h=e.kind==="planet"?new qe(new yr(r,1),Cs(Rs,.9)):new qe(new jn(r,r,r*1.1,6),Cs(Rs,.9));return h.position.y=vs(e),s.add(h),{grp:s,spin:c}}if(i!==0&&s.add(Ea(r*1.45,r*1.62,l,.06,0,Math.PI*2,o?.5:1)),e.kind==="planet"){const h=pv(e,r,o);if(h.position.y=r*1.5,s.add(h),c=h,e.size===2){const f=new qe(new nr(r*1.55,r*.09,4,28),St(ml[e.id%5][2],o));f.rotation.x=Math.PI/2-.3,f.rotation.y=.2,f.position.y=r*1.5,s.add(f)}for(let f=0;f<(e.b.shield||0);f++){const m=new qe(new Zl(r*.3,6,3,0,Math.PI*2,0,Math.PI/2),St("#bfe3ff",o));m.position.set((f?1:-1)*r*1.15,0,r*.75),s.add(m)}for(let f=0;f<Math.min(4,e.b.mine||0);f++){const m=new qe(new $i(r*.2,r*.55,4),St("#7b6a55",o));m.position.set(r*(-.9+f*.6),r*.27,-r*1.25),s.add(m)}if(e.b.lab){const f=new qe(new Yl(r*.28),St("#9ac7e8",o));f.position.set(r*1.35,r*.4,-r*.5),s.add(f)}}else{const h=r*.5,f=r*1.1,m=e.citadel?"#57526f":Ku,_=new qe(new jn(r,r*.92,f,6),St(m,o));_.position.y=h+f/2,s.add(_);const y=new qe(new jn(r*.92,r*.35,r*.45,6),St(e.citadel?"#413d57":"#b8ad96",o));y.position.y=h-r*.22,s.add(y);const d=new qe(new jn(r*.5,r*.68,r*.4,6),St(l,o));if(d.position.y=h+f+r*.2,s.add(d),e.citadel){const v=new qe(new $i(r*.3,r*1.9,6),St(l,o));v.position.y=h+f+r*1.35,s.add(v);const E=new qe(new nr(r*1.6,r*.07,4,32),St(l,o));E.rotation.x=Math.PI/2,E.position.y=h+f*.6,s.add(E),c=E}else if(e.home||e.capital){const v=new qe(new jn(r*.07,r*.07,r*.9,4),St(cn,o));v.position.y=h+f+r*.8,s.add(v)}const p=Math.min(4,Ts(e));for(let v=0;v<p;v++){const E=Zu[v],b=r*1.25,A=new qe(new kn(b,r*.14,r*.3),St("#b8ad96",o));A.position.set(Math.cos(E)*(r*.9+b/2),h+f/2,Math.sin(E)*(r*.9+b/2)),A.rotation.y=-E,s.add(A);const T=new qe(new jn(r*.42,r*.42,r*.1,6),St(l,o));T.position.set(Math.cos(E)*r*2.25,h+f/2+r*.05,Math.sin(E)*r*2.25),s.add(T)}for(let v=0;v<Math.min(3,e.b.turret||0);v++){const E=Math.PI/2+(v-1)*1.05,b=new qe(new kn(r*.26,r*.3,r*.26),St("#6d7385",o));b.position.set(Math.cos(E)*r*.8,h+f+r*.15,Math.sin(E)*r*.8),s.add(b);const A=new qe(new kn(r*.08,r*.08,r*.5),St("#4b5063",o));A.position.set(Math.cos(E)*r*.8,h+f+r*.22,Math.sin(E)*r*.8+r*.3),s.add(A)}if(e.b.screen){const v=new qe(new nr(r*1.2,r*.06,4,24),St("#bfe3ff",o));v.rotation.x=Math.PI/2,v.position.y=h+f*.2,s.add(v)}if(e.b.sensor){const v=new qe(new $i(r*.3,r*.25,8,1,!0),St(cn,o));v.position.set(-r*.45,h+f+r*.55,-r*.3),v.rotation.x=Math.PI,s.add(v)}}return{grp:s,spin:c}}function _v(n){const e=new yi,t=new qe(new $i(.55,1.3,6),St(n));t.position.y=.65;const i=new qe(new yr(.42,0),St(n));return i.position.y=1.5,e.add(t,i),e}function vv(n){const e=new yi,t=new yi,i=new qe(new $i(.55,2.6,4),St(Ku));i.rotation.z=-Math.PI/2,i.scale.set(1,1,1.5);const s=new qe(new kn(.9,.12,2.6),St(n));s.position.x=-.6;const r=new qe(new kn(.7,.7,.12),St(n));r.position.set(-.9,.4,0),t.add(i,s,r),t.name="model";const a=new qe(new br(1.2,12),Cs("#0c101e",.35));return a.rotation.x=-Math.PI/2,a.name="shadow",t.scale.setScalar(1.35),e.add(t,a),e}function an(n,e,t=0){return xo.set(n,t,e).project(_i),{x:(xo.x*.5+.5)*_l,y:(-xo.y*.5+.5)*vl}}function xv(n){return an(n.x,n.y,vs(n))}function Ad(n,e,t,i,s,r,a,o,l){n.font=`800 ${r?13:12}px system-ui`;const c=Math.max(r?30:24,n.measureText(s).width+12),u=r?18:16,h=u+8;n.strokeStyle=cn,n.lineWidth=2,n.lineCap="round",n.beginPath(),n.moveTo(e,t),n.lineTo(e,t-h),n.stroke();const f=Math.sin(o/420+l)*1.6,m=t-h;n.globalAlpha=a?.6:1,n.fillStyle=i,n.beginPath(),n.moveTo(e+1,m),n.lineTo(e+c,m+f),n.lineTo(e+c-5,m+u/2+f),n.lineTo(e+c,m+u+f),n.lineTo(e+1,m+u),n.closePath(),n.fill(),n.fillStyle=fv(i,.78),n.fillRect(e+1,m+u-3,c-4,3),n.fillStyle=Yu,n.textAlign="center",n.textBaseline="middle",n.fillText(s,e+c/2-1,m+u/2-.5+f/2),n.globalAlpha=1}function Mv(n,e,t,i){Qs||dv();const{cam:s,w:r,h:a}=t,o=s.z;(wd!==e.seed||!Bi)&&(uv(e),wd=e.seed),(_l!==r||vl!==a)&&(_l=r,vl=a,Qs.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Qs.setSize(r,a,!1),_i.aspect=r/a,_i.updateProjectionMatrix());const l=a/(o*2*Math.tan(Xu*Math.PI/360));_i.position.set(s.x,l*Math.sin(pl),s.y+l*Math.cos(pl)),_i.lookAt(s.x,0,s.y),_i.updateMatrixWorld(),i-gl>350&&(gl=i,hv(e));for(const d of e.nodes){const p=Ei(e,d),v=Ms.get(d.id);if(p.tier==="hidden"){v&&(zi(v.grp),Ms.delete(d.id));continue}const E=p.tier==="live",b=E?d.b:e.intel[d.id].snap?.b||{},A=E&&d.kind==="planet"?Math.round(Math.min(1,d.nat/Math.max(1,d.owner===0?[4,7,11][d.size]:lr(e,d)))*16):0,T=d.owner===Q&&d.lane?Math.round((1-d.lane.left/d.lane.total)*24):-1,g=p.tier==="detected"?[]:E?d.specs:e.intel[d.id].snap?.specs||[],x=[p.tier,p.owner,JSON.stringify(b),A,T,g.join(".")].join("|");if(v&&v.sig===x)continue;v&&zi(v.grp);const P=gv(e,E?d:{...d,b},p.tier,p.owner),R=Tn(d);A>0&&P.grp.add(Ea(R*1.2,R*1.34,"#bfe3ff",.08,Math.PI/2,A/16*Math.PI*2)),T>=0&&P.grp.add(Ea(R*1.74,R*1.9,"#e8bd55",.08,Math.PI/2,Math.max(.05,T/24*Math.PI*2))),g.slice(0,4).forEach((C,U)=>{const k=_v(C===e.cmdSpec?"#e8bd55":Nt[e.specs[C].def].color);k.position.set((U-(Math.min(g.length,4)-1)/2)*1.5,0,R*1.25+.8),P.grp.add(k)}),P.grp.position.set(d.x,0,d.y),_n.add(P.grp),Ms.set(d.id,{sig:x,...P})}for(const d of Ms.values())d.spin&&(d.spin.rotation.y=i/6e3);const c=new Set,u=[],h=new Map;for(const d of e.ships)if(d.at>=0)Ei(e,e.nodes[d.at]).tier==="live"&&(h.has(d.at)||h.set(d.at,[]),h.get(d.at).push(d));else{const p=La(e,d);p&&u.push({s:d,seen:p})}const f=d=>{c.add(d.id);let p=Ss.get(d.id);return(!p||p.owner!==d.owner)&&(p&&zi(p.grp),p={owner:d.owner,grp:vv(d.owner===0?"#d9d9d9":Mi(e,d.owner))},_n.add(p.grp),Ss.set(d.id,p)),p.grp};for(const[d,p]of h){const v=e.nodes[d],E=Math.min(v.kind==="planet"?6:4,Ts(v)),b=Tn(v);p.sort((A,T)=>A.seq-T.seq).slice(0,8).forEach((A,T)=>{const g=f(A),x=g.getObjectByName("model"),P=g.getObjectByName("shadow");if(T<E){const R=mv(v,T),C=A.loadUntil>0?.5+.3*Math.sin(i/150):0;g.position.set(v.x+R.x,0,v.y+R.z),g.rotation.y=-R.a,x.position.y=R.y+C,x.rotation.x=0,P.visible=v.kind==="planet",P.position.y=.04}else{const R=i/1500+(T-E)*1.6,C=b*3.1;g.position.set(v.x+Math.cos(R)*C,0,v.y+Math.sin(R)*C),g.rotation.y=-(R+Math.PI/2),x.position.y=vs(v)+b*.9,x.rotation.x=-.45,P.visible=!1}})}for(const{s:d}of u){const p=f(d),v=e.nodes[d.to],E=p.getObjectByName("model");p.position.set(d.x,0,d.y),p.rotation.y=-Math.atan2(v.y-d.y,v.x-d.x),E.position.y=3+.25*Math.sin(i/400+d.id),E.rotation.x=0;const b=p.getObjectByName("shadow");b.visible=!0,b.position.y=.04}for(const[d,p]of Ss)c.has(d)||(zi(p.grp),Ss.delete(d));const m=t.sel?.type==="node"?e.nodes[t.sel.id]:null;if(xs.visible=ir.visible=!!m&&m.owner===Q,sr.visible=!!m,m&&(sr.position.set(m.x,.12,m.y),sr.scale.setScalar(Tn(m)*2.05),xs.visible)){const[d,p]=Pa(e,m);xs.position.set(m.x,.1,m.y),xs.scale.setScalar(d),ir.position.set(m.x,.1,m.y),ir.scale.setScalar(p)}Qs.render(_n,_i),n.clearRect(0,0,r,a),n.lineCap="round";for(const{s:d}of u){const p=e.nodes[d.to],v=an(d.x,d.y),E=an(p.x,p.y),b=d.owner===0?"#d9d9d9":Mi(e,d.owner);n.strokeStyle=Gi(b,.8),n.lineWidth=2.5,n.setLineDash([.1,9]),n.lineDashOffset=-i/50,n.beginPath(),n.moveTo(v.x,v.y),n.lineTo(E.x,E.y),n.stroke(),n.setLineDash([])}if(t.targeting&&t.from>=0&&t.hover>=0&&t.hover!==t.from){const d=an(e.nodes[t.from].x,e.nodes[t.from].y),p=an(e.nodes[t.hover].x,e.nodes[t.hover].y);n.strokeStyle=cn,n.lineWidth=3,n.setLineDash([.1,9]),n.beginPath(),n.moveTo(d.x,d.y),n.lineTo(p.x,p.y),n.stroke(),n.setLineDash([])}const _=e.specs[e.cmdSpec],y=e.nodes.filter(d=>Ei(e,d).tier!=="hidden").sort((d,p)=>d.y-p.y);for(const d of y){const p=Ei(e,d),v=an(d.x,d.y,cv(d));if(v.x<-80||v.y<-40||v.x>r+80||v.y>a+140)continue;const E=an(d.x,d.y),b=p.tier==="detected",A=p.tier==="stale",T=b?Rs:p.owner===0?qu:Mi(e,p.owner),g=Tn(d)*o;if(t.targeting&&d.id!==t.from&&(Da(e,d)||d.owner===Q)&&(n.strokeStyle=Gi(cn,.35+.3*Math.sin(i/250)),n.lineWidth=2.5,n.beginPath(),n.ellipse(E.x,E.y,g*2.3,g*2.3*ii,0,0,7),n.stroke()),b){const x=an(d.x,d.y,vs(d));n.fillStyle=cn,n.font="800 14px system-ui",n.textAlign="center",n.textBaseline="middle",n.globalAlpha=.8,n.fillText("?",x.x,x.y),n.globalAlpha=1}else{const x=d.home?"⌂ ":d.citadel?"✦ ":d.capital?"♛ ":"";Ad(n,v.x,v.y+2,T,x+(A?"~":"")+p.drones,d.home||d.capital||d.citadel,A,i,d.id);let P=E.x+g*1.7+8;const R=an(d.x,d.y,vs(d)).y,C=(U,k)=>{n.fillStyle=k,n.beginPath(),n.roundRect(P-8,R-8,16,16,4),n.fill(),n.fillStyle=Yu,n.font="800 11px system-ui",n.textAlign="center",n.textBaseline="middle",n.fillText(U,P,R+.5),P+=19};d.event&&C("!","#e8bd55"),d.offer&&d.owner!==Q&&C("☺","#e9a9c9"),d.hold&&C("◷","#a9dcec"),d.owner===Q&&d.prisoners.length&&C("⛓","#e6a183"),_&&_.held&&_.node===d.id&&C("★","#e2604e");{const U=h.get(d.id)||[],k=Math.min(d.kind==="planet"?6:4,Ts(d));if(U.length>k){const D=Tn(d)*3.1,H=vs(d)+Tn(d)*.9;n.strokeStyle=Gi(cn,.45),n.lineWidth=1.5,n.setLineDash([4,6]),n.beginPath();for(let Y=0;Y<=40;Y++){const G=Y/40*Math.PI*2,ne=an(d.x+Math.cos(G)*D,d.y+Math.sin(G)*D,H);n[Y?"lineTo":"moveTo"](ne.x,ne.y)}n.stroke(),n.setLineDash([])}}if(d.owner===Q&&d.kind==="station"){const U=(h.get(d.id)||[]).filter(D=>D.owner===Q).length,k=Ts(d);U>k&&(n.font="700 10px system-ui",n.textAlign="center",n.textBaseline="middle",n.fillStyle="#e8a85a",n.fillText(`${U-k} IN ORBIT`,E.x,E.y+g*1.9*ii+26))}}if(o>4.5){const x=E.y+g*1.9*ii+12;n.font="700 10px system-ui",n.textAlign="center",n.textBaseline="middle",n.lineJoin="round",n.strokeStyle="rgba(29,35,53,0.7)",n.lineWidth=3,n.strokeText(d.name.toUpperCase(),E.x,x),n.fillStyle=Gi(cn,b?.45:.85),n.fillText(d.name.toUpperCase(),E.x,x)}}for(const{s:d,seen:p}of u){const v=an(d.x,d.y,4.4),E=d.owner===0?"#d9d9d9":Mi(e,d.owner);if(t.sel?.type==="ship"&&t.sel.id===d.id){const b=an(d.x,d.y);n.strokeStyle=cn,n.lineWidth=2,n.beginPath(),n.ellipse(b.x,b.y,16,16*ii,0,0,7),n.stroke()}Ad(n,v.x,v.y,E,(d.specs.includes(e.cmdSpec)?"★":"")+(p===2?String(d.drones):"?"),!1,!1,i,d.id)}}const kt=n=>(n=Math.max(0,Math.floor(n)),`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`),nt=n=>n.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),ys=(n,e="")=>`<div class="bar ${e}"><i style="width:${Math.max(0,Math.min(100,n*100)).toFixed(1)}%"></i></div>`,ft=(n,e,t={})=>`<button data-a="${n}" class="btn ${t.cls||""}" ${t.off?"disabled":""}>${e}${t.sub?`<small>${t.sub}</small>`:""}${t.off?`<small class="why">${nt(t.off)}</small>`:""}</button>`;function Ql(n,e,t=!1){const i=Nt[e.def],s=e.id===n.cmdSpec;return`<span class="tok ${t?"big":""} ${s?"cmd":""}" style="--c:${s?"#e8bd55":i.color}">${s?"★":i.tag}</span>`}const Rd=n=>`<span class="tok big" style="--c:${Nt[n].color}">${Nt[n].tag}</span>`;function Sv(n){const e=n.g,t=e.sides[Q],i=xf(e,Q),s=e.mob,r=e.specs[e.cmdSpec];let a="";if(r&&r.held&&e.cmdLostT>=0){const l=Dl(e)-(e.t-e.cmdLostT);a=`<div class="banner bad" data-a="focus:${r.node}">★ COMMANDER CAPTURED at ${nt(e.nodes[r.node].name)}. Retake it in <b>${kt(l)}</b></div>`}else if(n.mode)a=`<div class="banner">${n.mode.k==="launch"?"Tap a destination":n.mode.k==="redirect"?"Tap a new destination":"Tap a target"} <button class="btn sm" data-a="cancelmode">Cancel</button></div>`;else if(e.offs.length){const l=e.offs[0];a=`<div class="banner warn" ${l.warned?`data-a="focus:${l.target}"`:""}>⚠ ${nt(oi(e,l.owner))} offensive ${l.warned?`on ${nt(e.nodes[l.target].name)} `:""}launches in ${kt(l.launchT-e.t)}</div>`}const o=[1,2,3,4,5].map(l=>`<i class="${l<=s.stage?"on":""}"></i>`).join("");return`<div class="hudrow">
    <div class="stat" title="Ultanium"><b class="ult">◆ ${Math.floor(t.ult)}</b><small>+${i.toFixed(1)}/min</small></div>
    <div class="stat" title="Drones / global cap"><b>⬢ ${vr(e,Q)}</b><small>/ ${Ls(e,Q)}</small></div>
    <div class="stat mob" data-a="menu:intel" title="Coalition mobilization"><span class="pips">${o}</span>${ys(s.prog,"red")}<small>${s.surge?`TOTAL WAR +${s.surge}`:`MOBILIZATION ${s.stage}/5`}</small></div>
    <div class="grow"></div>
    <div class="stat time"><b>${kt(e.t)}</b></div>
    <button class="btn ico ${n.paused?"hot":""}" data-a="pause" title="Pause (space)">${n.paused?"▶":"❚❚"}</button>
    <button class="btn ico" data-a="speed" title="Speed">${n.speed}×</button>
    <button class="btn ico" data-a="menu:specs" title="Menu (M)">☰</button>
  </div>${a}`}function bv(n,e,t){const i=Qd(n,e,t.id),s=t.at==="ship"?"in flight":t.at==="planet"?"on a planet":t.at==="node"?"at a node":"";return`<button class="abil" data-a="ability:${e.id}:${t.id}" ${i>0?"disabled":""}><b>${t.name}</b>${i>0?`<em>${kt(i)}</em>`:"<em>ready</em>"}<span>${t.desc}${s?` <i>Use ${s}.</i>`:""}</span></button>`}function mr(n,e,t=!1){const i=Nt[e.def];let s=Ri(e),r=i.passive;if(e.cmd){const u=Xi[e.cmd.arch];s=`Commander · ${i.name} ${u.name} · L${e.cmd.lvl}`,r=`${i.passive} ${u.passive}`}let a="";if(t)if(e.held)a=`<small class="bad">Prisoner at ${nt(n.nodes[e.node].name)}</small>`;else if(e.node>=0)a=`<small data-a="focus:${e.node}" class="link">at ${nt(n.nodes[e.node].name)}</small>`;else{const u=Zt(n,e.ship);a=`<small>aboard a ship${u&&u.to>=0?` to ${nt(n.nodes[u.to].name)}`:""}</small>`}const o=e.cmd?.perks.length?`<p class="perks">${e.cmd.perks.map(u=>`<span title="${nt(Mo(u).desc)}">${Mo(u).name}</span>`).join("")}</p>`:"",l=e.cmd&&e.cmd.lvl<5?ys((e.cmd.xp-ye.xpLevels[e.cmd.lvl-1])/(ye.xpLevels[e.cmd.lvl]-ye.xpLevels[e.cmd.lvl-1]),"gold"):"",c=e.owner===Q&&!e.held?Nl(e).map(u=>bv(n,e,u)).join(""):"";return`<div class="spec">${Ql(n,e,!0)}<div><h4>${nt(s)} <small>${i.role}</small></h4>${a}<p>${r}</p>${o}${l}<div class="abils">${c}</div></div></div>`}function Ju(n,e,t){const i=Bs(n,0,{},t,un(n,t)),s=i.parts,r=[`${s.garr} Drones`];return t.kind==="planet"&&r.push(`${s.nat} natural`),s.struct&&r.push(`${s.struct} structures`),s.bonus&&r.push(`${s.bonus>0?"+":""}${s.bonus} bonuses`),s.aegis&&r.push(`${s.aegis} Aegis`),{total:i.def,text:r.join(" + ")}}function yv(n){const e=Object.keys(n.b).filter(t=>n.b[t]>0).map(t=>`${jt[t].name}${n.b[t]>1?` ×${n.b[t]}`:""}`);return e.length?e.join(", "):"None"}function Ev(n,e){const t=n.g,i=un(t,e),s=El(t,e,i),r=t.sides[Q],a=(e.b.lab||0)+(e.b.slab||0)>0,o=["info","build"].concat(a?["research"]:[]);o.includes(n.tab)||(n.tab="info");let l="";if(n.tab==="info"){const c=Ju(t,e,e);if(l+=`<div class="kv"><div><small>GARRISON</small><b>⬢ ${e.drones}</b></div><div><small>DEFENCE</small><b>${c.total}</b></div>${e.kind==="planet"?`<div><small>OUTPUT</small><b>◆ ${s.out.toFixed(1)}</b><small>of ${s.cap.toFixed(0)}/min</small></div>`:`<div><small>DOCKS</small><b>${Ts(e)}</b></div>`}</div>`,l+=`<p class="dim">${c.text}${e.kind==="planet"?` · natural defence ${Math.floor(e.nat)}/${lr(t,e,i)}`:""}</p>`,e.kind==="planet"&&(l+=`<p class="dim">Mines ${s.on}/${e.b.mine||0} running · ${e.b.gen||0} generator${(e.b.gen||0)===1?"":"s"} power ${(e.b.gen||0)*ye.minesPerGen}</p>`),s.short>0&&(l+=`<p class="warnp">${s.short} Drone${s.short>1?"s":""} short: ${s.resNeed&&!s.resOn?"research paused":"some mines idle"}.</p>`),e.lane){const f=e.lane,m=f.kind==="ship"?"Ship":jt[f.id].name;l+=`<div class="task"><div><b>${m}</b><small>${kt(f.left)} left${e.kind==="station"?" · Drone production paused":""}</small>${ys(1-f.left/f.total,"gold")}</div><button class="btn sm" data-a="cancel:-1">✕</button></div>`,e.queue.forEach((_,y)=>l+=`<div class="task q"><div><b>${_.kind==="ship"?"Ship":jt[_.id].name}</b><small>queued</small></div><button class="btn sm" data-a="cancel:${y}">✕</button></div>`)}else if(e.kind==="station"){const f=vr(t,Q)>=Ls(t,Q);l+=`<div class="task"><div><b>Producing Drones</b><small>${f?"Global Drone cap reached":`+${ye.batch+(i.batch||0)} per batch`}</small>${ys(e.prod/ye.batchTime)}</div></div>`}e.research&&(l+=`<div class="task"><div><b>Research: ${xt[e.research].name}</b><small>${s.resOn?`${kt(ms[xt[e.research].tier]-(r.techProg[e.research]||0))} of lab time left`:"paused: not enough Drones"}</small>${ys((r.techProg[e.research]||0)/ms[xt[e.research].tier],"blue")}</div></div>`),e.hold&&(l+=`<div class="task"><div><b>${nt(e.hold.name)}</b><small>Hold with ${e.hold.need}+ Drones · ${kt(e.hold.until-t.t)} left</small>${ys(1-(e.hold.until-t.t)/e.hold.total,"blue")}</div></div>`),e.event&&(l+=ft("event",`! ${Cn[e.event].name}`,{cls:"wide gold",sub:"Investigate"}));const u=t.ships.filter(f=>f.at===e.id&&f.owner===Q);l+="<h3>Ships</h3>",u.length||(l+='<p class="dim">No ship here. Drones and specialists only move by ship.</p>');for(const f of u){const m=f.loadUntil>0?`Loading for ${nt(t.nodes[f.to].name)}`:li(t,f)?"Docked":`Orbiting, no free dock${f.drones?` · ${f.drones} Drones aboard`:""}`;l+=`<div class="task"><div><b>▲ Ship</b><small>${m}</small></div>${f.loadUntil>0?"":ft(`send:${f.id}`,"Send",{cls:"sm hot"})}</div>`}e.specs.length&&(l+=`<h3>Specialists <small>${e.specs.length}/${Ca(t,Q)}</small></h3>`+e.specs.map(f=>mr(t,t.specs[f])).join(""));const h=u.flatMap(f=>f.specs);if(h.length&&(l+="<h3>Aboard ships here</h3>"+h.map(f=>mr(t,t.specs[f])).join("")),e.prisoners.length){const f=Mt(t,Q);l+="<h3>Prisoners</h3>";for(const m of e.prisoners){const _=t.specs[m],y=_.def==="warlord"||_.def==="archon",d=e.conv&&e.conv.spec===m?`<small>Converting: ${kt(e.conv.until-t.t)}</small>`:"";l+=`<div class="task"><div>${Ql(t,_)} <b>${nt(Ri(_))}</b><small>${nt(oi(t,_.owner))}</small>${d}</div>${y?"":ft(`ransom:${m}`,`Ransom +${Math.round(ye.ransom*(1+(f.ransom||0)))}`,{cls:"sm"})+(f.recruit?ft(`recruit:${m}`,`Recruit ${ye.recruitCost}`,{cls:"sm"}):"")}</div>`}}}else if(n.tab==="build"){e.kind==="station"&&(l+=ft("ship","▲ Ship",{cls:"wide",sub:`◆ ${cr(t,Q)} · ${ye.shipTime}s · pauses Drone production`,off:r.ult<cr(t,Q)?"Not enough Ultanium":e.queue.length>=4?"Queue full":null}));for(const c in jt){const u=jt[c];u.on===e.kind&&(l+=ft(`build:${c}`,`${u.name} <i class="cnt">${aa(e,c)}/${zd(t,e,c)}</i>`,{cls:"wide",sub:`◆ ${u.cost} · ${u.time}s · ${u.desc}`,off:_s(t,e,c)}))}l+='<p class="dim">Building and production share one lane per node. Research runs separately.</p>'}else{l+=`<label class="chk"><input type="checkbox" data-a="resfirst" ${e.resFirst?"checked":""}> If Drones run short, keep research running before mines</label>`,e.research&&(l+=ft("research:",`Stop ${xt[e.research].name}`,{cls:"wide",sub:"Progress is kept"}));const c=Tl(t,Q);let u="";for(const h in xt){const f=xt[h];f.branch!==u&&(l+=`<h3>${f.branch}</h3>`,u=f.branch);const m=r.techs.includes(h),_=r.techProg[h];if(m){l+=`<div class="tech done"><b>✓ ${f.name}</b><small>${f.desc}</small></div>`;continue}const y=t.nodes.some(p=>p.owner===Q&&p.id!==e.id&&p.research===h),d=c.includes(h)?y?"In progress elsewhere":e.research===h?"Running here":_===void 0&&r.ult<bo(t,Q,h)?"Not enough Ultanium":null:`Needs ${xt[f.pre].name}`;l+=ft(`research:${h}`,f.name,{cls:"wide",sub:`${_===void 0?`◆ ${bo(t,Q,h)}`:`${Math.round(_/ms[f.tier]*100)}% done`} · ${ms[f.tier]}s · ${kd[f.tier]} Drones · ${f.desc}`,off:d})}}return`<div class="tabs">${o.map(c=>`<button data-a="tab:${c}" class="${n.tab===c?"on":""}">${c==="info"?"Overview":c==="build"?"Build":"Research"}</button>`).join("")}</div><div class="pbody">${l}</div>`}function Tv(n,e){const t=n.g,i=Ei(t,e),s=yl(t,e);let r="";if(i.tier==="detected"||!s.v)r+='<p class="warnp">Detected only. Forces, structures and residents are unknown. Scout it with an unmanned ship (the ship is lost) or bring it inside full-intelligence range.</p>';else{const l=s.v,c=Ju(t,e,l);r+=`<p class="${s.live?"goodp":"warnp"}">${s.live?"Full intelligence":`Last seen ${kt(s.age)} ago. This may be out of date.`}</p>`,r+=`<div class="kv"><div><small>GARRISON</small><b>⬢ ${l.drones}</b></div><div><small>DEFENCE</small><b>${c.total}</b></div><div><small>TO WIN</small><b>${c.total+1}+</b></div></div><p class="dim">${c.text}</p><p class="dim">Structures: ${yv(l)}</p>`,l.specs.length&&(r+="<h3>Specialists</h3>"+l.specs.map(u=>mr(t,t.specs[u])).join("")),l.prisoners.some(u=>t.specs[u].owner===Q)&&(r+=`<p class="warnp">Holding your people: ${l.prisoners.filter(u=>t.specs[u].owner===Q).map(u=>nt(Ri(t.specs[u]))).join(", ")}</p>`),e.offer&&(r+='<p class="goodp">☺ Residents: capture this planet to recruit 1 of 3 specialists.</p>'),e.event&&(r+=`<p class="goodp">! Signal: ${Cn[e.event].name}. Capture the node to investigate.</p>`),e.capital&&t.sides[l.owner]?.kind==="faction"&&(r+=`<p class="goodp">♛ Capital of the ${zn[t.sides[l.owner].fac].name}. Capture it to take their Warlord and strip a Citadel Aegis layer.</p>`),e.citadel&&(r+=`<p class="goodp">✦ The Citadel. Capture it to win. Aegis ${Al(t,e)} (falls as Warlords are captured).</p>`)}const a=t.ships.filter(l=>l.owner===Q&&l.at>=0&&l.loadUntil===0).map(l=>({s:l,n:t.nodes[l.at]})).sort((l,c)=>Je(l.n,e)-Je(c.n,e));r+="<h3>Send a fleet here</h3>",a.length||(r+='<p class="dim">No idle ship available.</p>');const o=new Set;for(const{s:l,n:c}of a){if(o.has(c.id)&&li(t,l))continue;o.add(c.id);const u=li(t,l);r+=ft(`from:${l.id}`,`${nt(c.name)}`,{cls:"wide",sub:`⬢ ${u?c.drones:l.drones} available · ${kt(Pl(t,l,e))} flight${u?"":" · orbiting"}`})}return`<div class="pbody">${r}</div>`}function wr(n,e){const t=n.nodes[e.at];return li(n,e)?t.drones+e.drones:e.drones}function Qu(n,e){const t=Zt(n,e.ship),i=n.nodes[t.at],s=bl(n,Q,e.specs,[]),r=un(n,i);return r.launchSpeed&&(s.speed=(s.speed||0)+r.launchSpeed),s}function ju(n,e){const t=Zt(n,e.ship),i=n.nodes[e.to],s=yl(n,i).v;if(!s)return 0;const r=Qu(n,e),a=un(n,s),o=wr(n,t);for(let l=1;l<=o;l++)if(Bs(n,l,r,s,a).win)return l;return 0}function ef(n,e){const t=Zt(n,e.ship);if(!t||t.at<0)return"";const i=n.nodes[t.at],s=n.nodes[e.to],r=Qu(n,e),a=Je(i,s)/(ye.shipSpeed*Math.max(.3,1+(r.speed||0)))+(r.noLoad||!e.drones&&!e.specs.length?0:ye.loadTime);let o=`<div class="kv"><div><small>SENDING</small><b>⬢ ${e.drones}</b></div><div><small>ARRIVES IN</small><b>${kt(a)}</b></div><div><small>STAYS</small><b>⬢ ${wr(n,t)-e.drones}</b></div></div>`;if(e.specs.includes(n.cmdSpec)&&(o+=`<p class="warnp">★ Commander aboard. If this fleet is destroyed at an enemy node they are captured, and you have ${kt(Dl(n))} to retake that node.</p>`),s.owner===Q)return o+`<p class="goodp">Reinforcement. Cargo unloads on arrival${s.kind==="station"?" if a dock is free":""}.</p>`;if(!e.drones&&!e.specs.length)return o+`<p class="warnp">Unmanned scout. It fully identifies the target on arrival${r.scoutReturn?" and flies home":" and is lost"}.</p>`;const l=yl(n,s);if(!l.v)return o+'<p class="badp"><b>Unknown forces. Battle outcome unavailable.</b></p>';const c=Bs(n,e.drones,r,l.v,un(n,l.v)),u=c.parts,h=[`${u.drones} Drones`].concat(u.pct?[`+${u.pct} training`]:[],u.flat?[`+${u.flat} specialists`]:[]).join(" "),f=[`${u.garr} Drones`].concat(u.nat?[`${u.nat} natural`]:[],u.struct?[`${u.struct} structures`]:[],u.bonus?[`${u.bonus>0?"+":""}${u.bonus} bonuses`]:[],u.aegis?[`${u.aegis} Aegis`]:[]).join(" + ");return o+=`<div class="versus"><div><small>ATTACK</small><b>${c.atk}</b><span>${h}</span></div><i>vs</i><div><small>DEFENCE</small><b>${c.def}</b><span>${f}</span></div></div>`,c.preKilled&&(o+=`<p class="warnp">${c.preKilled} Drones are destroyed before landing.</p>`),o+=c.win?`<p class="goodp"><b>Victory expected.</b> ${c.surv} Drones survive to hold the node.</p>`:`<p class="badp"><b>Defeat expected.</b> Short by ${c.def-c.atk+1}. ${s.owner===0?"All Drones are lost; the ship and specialists return.":"The ship is destroyed and specialists aboard are captured."}</p>`,l.live?o+='<p class="dim">Based on what is there now. Reinforcements may arrive before you do.</p>':o+=`<p class="warnp">Based on intelligence ${kt(l.age)} old. The enemy may have changed.</p>`,o}function wv(n){const e=n.g,t=n.launch,i=Zt(e,t.ship);if(!i||i.at<0)return n.launch=null,"";const s=e.nodes[i.at],r=e.nodes[t.to],a=wr(e,i),o=li(e,i),l=o?s.specs.concat(i.specs):i.specs,c=l.map(u=>{const h=e.specs[u];return`<button class="chip ${t.specs.includes(u)?"on":""}" data-a="lspec:${u}" ${o?"":"disabled"}>${Ql(e,h)} ${nt(h.cmd?"Commander":Nt[h.def].name)}</button>`}).join("");return`<div class="phead"><div><h2>${nt(s.name)} → ${nt(r.name)}</h2><small>${o?"Docked ship":"Orbiting ship: it leaves with what is aboard"}</small></div><button class="btn ico" data-a="lcancel">✕</button></div>
  <div class="pbody">
    <input type="range" id="lslider" min="0" max="${a}" value="${t.drones}" ${o?"":"disabled"}>
    <div class="quick">${ft("lq:none","0",{cls:"sm"})}${ft("lq:min","Just enough",{cls:"sm"})}${ft("lq:half","Half",{cls:"sm"})}${ft("lq:all","All",{cls:"sm"})}</div>
    ${l.length?`<div class="chips">${c}</div><p class="dim">Up to ${Ca(e,Q)} specialists per ship.</p>`:""}
    <div id="preview">${ef(e,t)}</div>
    <div class="row">${ft("lcancel","Cancel")}${ft("lconfirm","Launch",{cls:"hot grow"})}</div>
  </div>`}function Av(n,e){const t=n.g,i=La(t,e),s=t.nodes[e.to];let r=`<div class="kv"><div><small>DRONES</small><b>⬢ ${i===2?e.drones:"?"}</b></div><div><small>ARRIVES IN</small><b>${kt(Pl(t,e,s))}</b></div><div><small>HEADING</small><b data-a="focus:${s.id}" class="link">${nt(s.name)}</b></div></div>`;return e.owner===Q?(Qi(t,e).redirect&&!e.redirected&&(r+=ft(`redirect:${e.id}`,"Redirect",{cls:"wide",sub:"Once per flight"})),e.specs.length?r+="<h3>Aboard</h3>"+e.specs.map(a=>mr(t,t.specs[a])).join(""):r+=`<p class="dim">No specialists aboard.${e.drones===0?" Unmanned.":""}</p>`):i<2&&(r+='<p class="warnp">Strength unknown. It becomes readable inside full-intelligence range, at a Sensor Array, or with Signal Analysis.</p>'),`<div class="phead"><div><h2><span class="dot" style="background:${Mi(t,e.owner)}"></span>${nt(oi(t,e.owner))} fleet</h2><small>In flight</small></div><button class="btn ico" data-a="close">✕</button></div><div class="pbody">${r}</div>`}function Rv(n){const e=n.g;if(n.launch)return wv(n);if(!n.sel)return"";if(n.sel.type==="ship"){const a=Zt(e,n.sel.id);return!a||a.at>=0||!La(e,a)?(n.sel=null,""):Av(n,a)}const t=e.nodes[n.sel.id],i=Ei(e,t),s=`${t.citadel?"Citadel":t.kind==="planet"?["Small","Medium","Large"][t.size]+" planet":t.home?"Home station":"Station"} · ${i.tier==="detected"?"Unidentified":i.owner===0?"Neutral":nt(oi(e,i.owner))}`;return`<div class="phead"><div><h2><span class="dot" style="background:${i.tier==="detected"?"#56617c":i.owner===0?"#8f95a6":Mi(e,i.owner)}"></span>${nt(t.name)}</h2><small>${s}</small></div><button class="btn ico" data-a="close">✕</button></div>${t.owner===Q?Ev(n,t):Tv(n,t)}`}function Cv(n){const e=n.g,t=e.sides[Q],i=[["specs","Specialists"],["relics","Relics"],["research","Research"],["intel","Coalition"],["log","Log"],["sys","Run"]];let s="";if(n.menu==="specs")s=e.specs.filter(a=>a.owner===Q).sort((a,o)=>(a.cmd?-1:0)-(o.cmd?-1:0)).map(a=>mr(e,a,!0)).join("")||'<p class="dim">No specialists yet.</p>';else if(n.menu==="relics")s=t.relics.map(r=>`<div class="relic ${ti[r].rarity}"><b>${ti[r].name}</b><small>${ti[r].rarity}</small><p>${ti[r].desc}</p></div>`).join("")||'<p class="dim">No relics yet. Events, Warlords and ancient sites yield them.</p>';else if(n.menu==="research"){const r=e.nodes.filter(o=>o.owner===Q&&(o.b.lab||o.b.slab));s=`<p class="dim">${r.length?"Labs: "+r.map(o=>`<span class="link" data-a="focus:${o.id}">${nt(o.name)}${o.research?` (${xt[o.research].name})`:" (idle)"}</span>`).join(", "):"Build a Research Lab on a planet or station to begin."}</p>`;let a="";for(const o in xt){const l=xt[o];l.branch!==a&&(s+=`<h3>${l.branch}</h3>`,a=l.branch);const c=t.techs.includes(o),u=t.techProg[o];s+=`<div class="tech ${c?"done":""}"><b>${c?"✓ ":""}${l.name}</b><small>${l.desc}${u!==void 0?` · ${Math.round(u/ms[l.tier]*100)}%`:""}</small></div>`}}else if(n.menu==="intel"){const r=qi[e.sides[e.archon].fac],a=e.mob;s=`<div class="fac" style="--c:#e07aa0"><b>✦ ${r.name} ${r.title}</b><p>${r.desc}</p><p>Mobilization stage ${a.stage}/5${a.surge?` · total war +${a.surge}`:""} (${Math.round(a.prog*100)}% to the next). Each stage enlarges Coalition reserves and offensives and gives every faction new technology. Capturing enemy nodes sets it back; a captured Warlord removes a whole stage.</p><p>Citadel Aegis: ${Al(e,e.nodes[e.citadel])} (${e.factions.filter(o=>!e.sides[o].broken).length} layers).</p></div>`;for(const o of e.factions){const l=e.sides[o],c=zn[l.fac],u=e.nodes.filter(f=>e.intel[f.id].snap?.owner===o||e.vis[f.id]===2&&f.owner===o),h=u.length>0||l.broken;s+=h?`<div class="fac" style="--c:${c.color}"><b>${c.name}${l.broken?" · BROKEN":""}</b><p>${c.desc}</p><p>${c.tell}</p><p class="dim">Known nodes: ${u.length} · Technology fielded: ${l.techs.map(f=>xt[f].name).join(", ")||"none"}</p>${u.filter(f=>f.capital).map(f=>`<p class="link" data-a="focus:${f.id}">♛ Capital located: ${nt(f.name)}</p>`).join("")}</div>`:'<div class="fac" style="--c:#5d6875"><b>Unidentified faction</b><p class="dim">Not yet encountered.</p></div>'}}else if(n.menu==="log")s=e.log.slice().reverse().map(r=>`<div class="logl ${r.kind}" ${r.node>=0?`data-a="focus:${r.node}"`:""}><small>${kt(r.t)}</small>${nt(r.msg)}</div>`).join("");else{const r=e.stats;s=`<div class="kv"><div><small>SEED</small><b>${e.seed}</b></div><div><small>THREAT</small><b>${e.threat}</b></div><div><small>NODES</small><b>${e.nodes.filter(a=>a.owner===Q).length}</b></div></div>
      <p class="dim">Captures ${r.captures} · Nodes lost ${r.nodesLost} · Drones lost ${r.dronesLost} · Ships lost ${r.shipsLost}</p>
      <p class="dim">The run saves automatically to this device.</p>
      ${ft("help","How to play",{cls:"wide"})}${ft("abandon","Abandon run",{cls:"wide"})}`}return`<div class="sheet"><div class="phead"><div class="tabs">${i.map(([r,a])=>`<button data-a="menu:${r}" class="${n.menu===r?"on":""}">${a}</button>`).join("")}</div><button class="btn ico" data-a="menu:">✕</button></div><div class="pbody">${s}</div></div>`}function Pv(n){const e=n.g;if(e.result){const a=e.stats,o=e.result==="win";return`<div class="modal end ${o?"win":"lose"}"><h1>${o?"Victory":"Defeat"}</h1><p>${nt(e.resultWhy)}</p>
      <div class="kv"><div><small>TIME</small><b>${kt(e.t)}</b></div><div><small>CAPTURES</small><b>${a.captures}</b></div><div><small>WARLORDS</small><b>${a.warlords}</b></div></div>
      <p class="dim">Nodes lost ${a.nodesLost} · Drones built ${a.dronesMade} · Drones lost ${a.dronesLost} · Ships lost ${a.shipsLost}<br>Specialists ${a.specs} · Relics ${a.relics} · Technologies ${a.techs} · Events ${a.events} · Ultanium mined ${Math.round(a.ultMade)}</p>
      ${o&&e.threat<5?`<p class="goodp">Threat level ${e.threat+1} unlocked.</p>`:""}
      <div class="row">${ft("title","Main menu")}${ft("again","New run",{cls:"hot grow"})}</div></div>`}const t=e.pending[0];if(!t)return"";let i="";if(t.kind==="draft")return i=t.opts.map((a,o)=>{const l=Nt[a.base],c=Xi[a.arch];return`<button class="card" data-a="choose:${o}">${Rd(a.base)}<h3>${l.name} ${c.name}</h3><small>${c.blurb}</small><p>${l.passive}</p><p>${c.passive}</p><p><b>${l.active.name}:</b> ${l.active.desc}</p><p><b>${c.a.name}:</b> ${c.a.desc}</p><p class="dim"><b>Level 3, ${c.b.name}:</b> ${c.b.desc}</p></button>`}).join(""),`<div class="modal"><h2>Choose your Commander</h2><p class="dim">Your Commander is your strongest specialist. If they are captured you have ${kt(ye.rescueSecs)} to retake the node holding them, or the run ends.</p><div class="cards">${i}</div></div>`;if(t.kind==="spec")return i=t.opts.map((a,o)=>{const l=Nt[a];return`<button class="card" data-a="choose:${o}">${Rd(a)}<h3>${l.name}</h3><small>${l.role}</small><p>${l.passive}</p>${l.active?`<p><b>${l.active.name}</b> (${l.active.cd}s): ${l.active.desc}</p>`:""}</button>`}).join(""),`<div class="modal"><h2>${nt(t.title)}</h2><p class="dim">One of them will join you. The others stay behind.</p><div class="cards">${i}</div></div>`;if(t.kind==="relic")return i=t.opts.map((a,o)=>{const l=ti[a];return`<button class="card relic ${l.rarity}" data-a="choose:${o}"><h3>${l.name}</h3><small>${l.rarity}</small><p>${l.desc}</p></button>`}).join(""),`<div class="modal"><h2>Choose a relic</h2><p class="dim">Relics last for the whole run.</p><div class="cards">${i}</div></div>`;if(t.kind==="perk")return i=t.opts.map((a,o)=>{const l=Mo(a);return`<button class="card" data-a="choose:${o}"><h3>${l.name}</h3><p>${l.desc}</p></button>`}).join(""),`<div class="modal"><h2>${nt(t.title)}</h2>${e.specs[e.cmdSpec].cmd.lvl===3?`<p class="goodp">New ability unlocked: ${Xi[e.specs[e.cmdSpec].cmd.arch].b.name}</p>`:""}<div class="cards">${i}</div></div>`;const s=Cn[t.event],r=e.nodes[t.node];return i=s.choices.map((a,o)=>{const l=Yd(e,r,a);if(a.req&&l&&l.startsWith("Needs your"))return`<button class="card locked" disabled><h3>${a.label}</h3><small>${nt(l)}</small></button>`;const c=[a.ult?`◆ ${a.ult}`:"",a.drones?`⬢ ${a.drones}`:""].filter(Boolean).join(" · ");return`<button class="card" data-a="choose:${o}" ${l?"disabled":""}><h3>${a.label}</h3>${c?`<small>Cost ${c}</small>`:""}<p>${a.desc}</p>${l?`<small class="why">${nt(l)}</small>`:""}</button>`}).join(""),`<div class="modal"><h2>${s.name}</h2><small>${nt(r.name)} · ⬢ ${r.drones} here</small><p class="flavour">${s.text}</p><div class="cards">${i}</div>${ft("choose:-1","Decide later",{cls:"wide"})}</div>`}function Lv(n){const e=n.meta,t=Array.from({length:e.unlocked+1},(i,s)=>`<button class="chip ${n.newThreat===s?"on":""}" data-a="threat:${s}">${s}</button>`).join("");return`<div class="title"><h1>SPACE<span>NODES</span></h1><p class="tag">Build an empire. Assemble your specialists. Take the Citadel before the Coalition takes you.</p>
    ${n.hasSave?ft("continue","Continue run",{cls:"wide hot"}):""}
    ${ft("newrun","New run",{cls:`wide ${n.hasSave?"":"hot"}`})}
    <div class="lv"><small>THREAT LEVEL</small><div class="chips">${t}</div><small class="dim">${n.newThreat===0?"Standard campaign.":`Tougher garrisons and faster mobilization (+${n.newThreat*8}% / +${n.newThreat*5}%).`} Win to unlock the next.</small></div>
    ${ft("help","How to play",{cls:"wide"})}
    <small class="dim">Runs ${e.runs} · Wins ${e.wins}</small></div>`}function Cd(){return`<div class="modal help"><h2>How to play</h2>
  <p><b>Goal.</b> Capture <b>The Citadel</b> ✦ at the far end of the map. You lose if your <b>Commander</b> ★ is captured and not rescued within 150 seconds.</p>
  <p><b>Nodes.</b> Planets ● mine Ultanium ◆. Stations ⬡ build Drones ⬢ and ships ▲. Everything moves by ship: tap one of your nodes, press <b>Send</b> on a ship, then tap a destination. Or tap a target and pick where to send from.</p>
  <p><b>Combat is arithmetic.</b> Attack minus defence. The launch sheet shows the exact outcome for what you can currently see. Ties go to the defender.</p>
  <p><b>Vision.</b> The clear circle around your nodes is full intelligence; the dimmer ring only detects that something is there. A node marked <b>?</b> has unknown forces. An unmanned ship sent to it reveals everything and is lost.</p>
  <p><b>Economy.</b> Generators power mines (2 each). Mines need a Drone each to run. A node builds one thing at a time, and a station that is building is not making Drones. Research has its own lane.</p>
  <p><b>Specialists.</b> Every neutral planet you capture lets you recruit 1 of 3. They only work where they stand, three to a node or ship, and they are captured if their node or ship falls.</p>
  <p><b>The Coalition.</b> Three factions and an Archon. The mobilization meter fills with time; each stage brings larger offensives. Capturing enemy nodes sets it back. Capture a faction's capital ♛ to take its Warlord, gain a signature specialist and a rare relic, and strip a layer of the Citadel's Aegis.</p>
  <p><b>Controls.</b> Drag, or use the arrow keys or WASD, to scroll the map. Pinch or scroll to zoom. Space pauses, 1/2/3 set speed, M opens the menu, H returns home, Esc cancels.</p>
  ${ft("helpclose","Got it",{cls:"wide hot"})}</div>`}const Ps="spacenodes.save.v1",jl="spacenodes.meta.v1",Ar=n=>document.getElementById(n),Vn=Ar("map"),ma=Vn.getContext("2d"),Pd=Ar("hud"),na=Ar("panel"),ia=Ar("overlay"),Ld=Ar("toasts"),si={get:n=>{try{return localStorage.getItem(n)}catch{return null}},set:(n,e)=>{try{localStorage.setItem(n,e)}catch{}},del:n=>{try{localStorage.removeItem(n)}catch{}}},X={g:null,speed:1,paused:!1,sel:null,tab:"info",menu:null,mode:null,launch:null,screen:"title",newThreat:0,meta:{runs:0,wins:0,unlocked:0,best:0,...JSON.parse(si.get(jl)||"{}")},hasSave:!!si.get(Ps),note:"",noteT:0},Ve={x:100,y:180,z:3};let Jn=null,Ji=0,Fs=0,tf=-1,zt=!0,js=0,Ta=!1,Dd="title";const vi=[];window.__app=X;function Id(n){X.g=n,X.screen="game",X.sel=null,X.menu=null,X.mode=null,X.launch=null,X.paused=!1,X.speed=1;const e=n.nodes[n.home];Ve.x=e.x+8,Ve.y=e.y,Ve.z=Math.max(6.5,Math.min(9,Ji/52)),js=n.log.length,vi.length=0,zt=!0}function ec(){X.g&&!X.g.result&&X.screen==="game"&&(si.set(Ps,JSON.stringify(X.g)),X.hasSave=!0)}function Dv(){const n=X.g;si.del(Ps),X.hasSave=!1,X.meta.runs++,n.result==="win"&&(X.meta.wins++,X.meta.unlocked=Math.min(5,Math.max(X.meta.unlocked,n.threat+1))),si.set(jl,JSON.stringify(X.meta))}let wa=!1;function rr(n){n&&(vi.push({msg:n,kind:"warn",node:-1,until:performance.now()+3500}),zt=!0)}function on(n){const e=Vf(X.g,n);return rr(e),zt=!0,!e}function nf(n){const e=X.g.nodes[n],t=Ji<820,i=!!X.sel||!!X.launch;Jn={x:e.x+(!t&&i?190/Ve.z:0),y:e.y+(t&&i?Fs*.22/(Ve.z*ii):0)}}function tc(n,e){X.sel={type:n,id:e},X.tab="info",X.launch=null,zt=!0,n==="node"&&nf(e)}function xl(n,e){const t=X.g,i=Zt(t,n);if(!i||i.at<0)return rr("That ship has left");if(i.at===e)return rr("The ship is already there");const s=t.nodes[e];if(s.owner!==Q&&!Da(t,s))return rr("Target is not in detection range");const r={ship:n,to:e,drones:0,specs:li(t,i)?[]:i.specs.slice()},a=wr(t,i);if(!li(t,i))r.drones=i.drones;else if(s.owner===Q)r.drones=Math.max(0,a-(t.nodes[i.at].specs.includes(t.cmdSpec)?6:0));else{const o=ju(t,r);r.drones=o?Math.min(a,o+2):a}X.launch=r,X.mode=null,X.sel={type:"node",id:e},zt=!0,nf(e)}function Ml(n,e){const[t,...i]=n.split(":"),s=X.g,r=X.sel?.type==="node"?X.sel.id:-1;switch(t){case"newrun":case"again":Id(Df(Date.now()%2147483647|0,X.newThreat)),wa=!1;break;case"continue":{const a=si.get(Ps);if(a)try{const o=JSON.parse(a);Wn(o),Id(o),wa=!1}catch{si.del(Ps),X.hasSave=!1}break}case"title":X.screen="title",X.g=null;break;case"threat":X.newThreat=+i[0];break;case"help":Dd=X.screen,X.screen="help",X.menu=null;break;case"helpclose":X.screen=Dd;break;case"abandon":confirm("Abandon this run?")&&(si.del(Ps),X.hasSave=!1,X.meta.runs++,si.set(jl,JSON.stringify(X.meta)),X.screen="title",X.g=null);break;case"pause":X.paused=!X.paused,X.paused&&ec();break;case"speed":X.speed=X.speed===1?2:X.speed===2?4:1;break;case"menu":X.menu=i[0]||null;break;case"close":X.sel=null,X.launch=null;break;case"tab":X.tab=i[0];break;case"focus":X.menu=null,tc("node",+i[0]);break;case"cancelmode":X.mode=null;break;case"build":on({c:"build",node:r,id:i[0]});break;case"ship":on({c:"ship",node:r});break;case"cancel":on({c:"cancel",node:r,idx:+i[0]});break;case"research":on({c:"research",node:r,id:i[0]||null});break;case"resfirst":on({c:"resFirst",node:r});break;case"event":on({c:"event",node:r});break;case"ransom":on({c:"ransom",spec:+i[0],recruit:!1});break;case"recruit":on({c:"ransom",spec:+i[0],recruit:!0});break;case"choose":on({c:"choose",idx:+i[0]});break;case"send":X.mode={k:"launch",ship:+i[0]},X.launch=null;break;case"from":xl(+i[0],r);break;case"redirect":X.mode={k:"redirect",ship:+i[0]};break;case"ability":{const a=s.specs[+i[0]],o=Nl(a).find(l=>l.id===i[1]);if(o.target==="self")on({c:"ability",spec:a.id,id:o.id,target:-1});else{const l=jd(s,a,{...o,target:"self"},null);l?rr(l):(X.mode={k:"ability",spec:a.id,id:o.id},X.menu=null)}break}case"lspec":{const a=X.launch,o=+i[0];a.specs=a.specs.includes(o)?a.specs.filter(l=>l!==o):a.specs.concat(o);break}case"lq":{const a=X.launch,o=Zt(s,a.ship),l=wr(s,o);a.drones=i[0]==="all"?l:i[0]==="half"?Math.ceil(l/2):i[0]==="none"?0:ju(s,a)||l;break}case"lcancel":X.launch=null;break;case"lconfirm":{const a=X.launch;on({c:"launch",ship:a.ship,to:a.to,drones:a.drones,specs:a.specs})&&(X.launch=null,X.sel=null);break}}zt=!0}document.addEventListener("click",n=>{const e=n.target.closest("[data-a]");!e||e.disabled||e instanceof HTMLInputElement&&e.type!=="checkbox"||Ml(e.dataset.a)});document.addEventListener("input",n=>{const e=n.target;if(e.id==="lslider"&&X.launch&&X.g){X.launch.drones=+e.value;const t=document.getElementById("preview");t&&(t.innerHTML=ef(X.g,X.launch))}});document.addEventListener("pointerdown",n=>{n.target.id==="lslider"&&(Ta=!0)});document.addEventListener("pointerup",()=>{Ta&&(Ta=!1,zt=!0)});document.addEventListener("keyup",n=>In.delete(n.key.toLowerCase()));document.addEventListener("keydown",n=>{X.screen!=="game"||!X.g||(In.add(n.key.toLowerCase()),n.key===" "?(n.preventDefault(),Ml("pause")):n.key==="1"?(X.speed=1,zt=!0):n.key==="2"?(X.speed=2,zt=!0):n.key==="3"?(X.speed=4,zt=!0):n.key==="m"||n.key==="M"?Ml(X.menu?"menu:":"menu:specs"):n.key==="h"||n.key==="H"?tc("node",(X.g.nodes.find(e=>e.owner===Q&&e.home)||X.g.nodes.find(e=>e.owner===Q)||X.g.nodes[0]).id):n.key==="Escape"&&(X.mode?X.mode=null:X.launch?X.launch=null:X.menu?X.menu=null:X.sel=null,zt=!0))});document.addEventListener("visibilitychange",()=>{document.hidden&&ec()});const vn=new Map;let ar=null,gr=!1,or=0;const Nd=(n,e)=>({x:(n-Ji/2)/Ve.z+Ve.x,y:(e-Fs/2)/(Ve.z*ii)+Ve.y}),Un={x:0,y:0},In=new Set;function sf(n,e){const t=X.g;for(const r of t.ships){if(r.at>=0||!La(t,r))continue;const a=an(r.x,r.y,3);if(Math.hypot(a.x-n,a.y-e)<24)return{type:"ship",id:r.id}}let i=-1,s=1e9;for(const r of t.nodes){if(Ei(t,r).tier==="hidden")continue;const a=xv(r),o=Math.hypot(a.x-n,a.y-e);o<Math.max(30,Tn(r)*Ve.z*2.3)&&o<s&&(s=o,i=r.id)}return i>=0?{type:"node",id:i}:null}function Iv(n,e){const t=X.g,i=sf(n,e);if(X.mode){if(!i||i.type!=="node")return;const s=X.mode;s.k==="launch"?xl(s.ship,i.id):s.k==="redirect"?on({c:"redirect",ship:s.ship,to:i.id})&&(X.mode=null):on({c:"ability",spec:s.spec,id:s.id,target:i.id})&&(X.mode=null),zt=!0;return}if(!i){X.launch||(X.sel=null),zt=!0;return}if(X.launch&&i.type==="node"){const s=Zt(t,X.launch.ship);if(s&&s.at!==i.id)return xl(X.launch.ship,i.id)}tc(i.type,i.id)}Vn.addEventListener("pointerdown",n=>{if(Vn.setPointerCapture(n.pointerId),vn.set(n.pointerId,{x:n.clientX,y:n.clientY}),vn.size===1&&(ar={x:n.clientX,y:n.clientY,t:performance.now()},gr=!1),vn.size===2){const[e,t]=[...vn.values()];or=Math.hypot(e.x-t.x,e.y-t.y),gr=!0}Jn=null,Un.x=Un.y=0});Vn.addEventListener("pointermove",n=>{const e=vn.get(n.pointerId);if(!e){if(X.g&&X.screen==="game"){const s=sf(n.clientX,n.clientY);tf=s&&s.type==="node"?s.id:-1,Vn.style.cursor=s?"pointer":"grab"}return}const t=n.clientX-e.x,i=n.clientY-e.y;if(e.x=n.clientX,e.y=n.clientY,vn.size===1)ar&&Math.hypot(n.clientX-ar.x,n.clientY-ar.y)>8&&(gr=!0),gr&&(Ve.x-=t/Ve.z,Ve.y-=i/(Ve.z*ii),Un.x=-t/Ve.z,Un.y=-i/(Ve.z*ii));else if(vn.size===2){const[s,r]=[...vn.values()],a=Math.hypot(s.x-r.x,s.y-r.y);or>0&&af((s.x+r.x)/2,(s.y+r.y)/2,a/or),or=a}});const rf=n=>{vn.delete(n.pointerId)&&vn.size===0&&!gr&&ar&&X.g&&X.screen==="game"&&Iv(n.clientX,n.clientY),vn.size<2&&(or=0)};Vn.addEventListener("pointerup",rf);Vn.addEventListener("pointercancel",rf);Vn.addEventListener("wheel",n=>{n.preventDefault(),af(n.clientX,n.clientY,Math.exp(-n.deltaY*.0015))},{passive:!1});function af(n,e,t){const i=Nd(n,e);Ve.z=Math.max(2.4,Math.min(13,Ve.z*t));const s=Nd(n,e);Ve.x+=i.x-s.x,Ve.y+=i.y-s.y}function of(){const n=Math.min(2,window.devicePixelRatio||1);Ji=window.innerWidth,Fs=window.innerHeight,Vn.width=Math.round(Ji*n),Vn.height=Math.round(Fs*n),ma.setTransform(n,0,0,n,0,0)}window.addEventListener("resize",of);of();const Sl={};function Oi(n,e,t){if(Sl[e]===t)return;Sl[e]=t;const i=n.querySelector(".pbody"),s=i?i.scrollTop:0;n.innerHTML=t;const r=n.querySelector(".pbody");r&&s&&(r.scrollTop=s)}function Nv(){const n=X.g,e=performance.now();if(X.screen==="title"||!n){Oi(Pd,"hud",""),Oi(na,"panel",""),na.className="",Ld.innerHTML="",Sl.toasts="",ia.className="open clear",Oi(ia,"ov",X.screen==="help"?Cd():Lv(X));return}for(;js<n.log.length;js++){const i=n.log[js];i.kind!=="info"&&vi.push({msg:i.msg,kind:i.kind,node:i.node,until:e+(i.kind==="bad"?9e3:6e3)})}for(n.log.length>=150&&(js=n.log.length);vi.length&&(vi[0].until<e||vi.length>4);)vi.shift();if(Oi(Ld,"toasts",vi.map(i=>`<div class="toast ${i.kind}" ${i.node>=0?`data-a="focus:${i.node}"`:""}>${i.msg.replace(/</g,"&lt;")}</div>`).join("")),Oi(Pd,"hud",Sv(X)),!Ta){const i=Rv(X);na.className=i?"open":"",Oi(na,"panel",i)}const t=X.screen==="help"?Cd():n.result||n.pending.length?Pv(X):X.menu?Cv(X):"";ia.className=t?"open":"",Oi(ia,"ov",t)}let Ud=performance.now(),hs=0,Fd=0,Od=0;function lf(n){const e=Math.min(.25,(n-Ud)/1e3);Ud=n;const t=X.g;if(t&&X.screen==="game"){if(!X.paused&&!X.menu&&!t.result&&!t.pending.length){hs+=e*X.speed;let a=0;for(;hs>=ye.dt&&a++<16;)if(hs-=ye.dt,!Hf(t)){hs=0,zt=!0;break}hs>1&&(hs=0)}t.result&&!wa&&(wa=!0,Dv(),zt=!0),!vn.size&&Math.abs(Un.x)+Math.abs(Un.y)>.01&&(Ve.x+=Un.x,Ve.y+=Un.y,Un.x*=.9,Un.y*=.9);const i=(In.has("arrowright")||In.has("d")?1:0)-(In.has("arrowleft")||In.has("a")?1:0),s=(In.has("arrowdown")||In.has("s")?1:0)-(In.has("arrowup")||In.has("w")?1:0);(i||s)&&(Jn=null,Ve.x+=i*420*e/Ve.z,Ve.y+=s*420*e/(Ve.z*ii)),Jn&&(Ve.x+=(Jn.x-Ve.x)*.16,Ve.y+=(Jn.y-Ve.y)*.16,Math.hypot(Jn.x-Ve.x,Jn.y-Ve.y)<.4&&(Jn=null)),Ve.x=Math.max(-40,Math.min(t.w+40,Ve.x)),Ve.y=Math.max(-40,Math.min(t.h+40,Ve.y));const r=X.mode?.k==="launch"?Zt(t,X.mode.ship)?.at??-1:-1;Mv(ma,t,{cam:Ve,w:Ji,h:Fs,sel:X.launch?{type:"node",id:X.launch.to}:X.sel,targeting:!!X.mode,from:r,hover:tf},n),n-Od>15e3&&(Od=n,ec())}else ma.fillStyle="#262e49",ma.fillRect(0,0,Ji,Fs);(zt||n-Fd>250)&&(zt=!1,Fd=n,Nv()),requestAnimationFrame(lf)}requestAnimationFrame(lf);
