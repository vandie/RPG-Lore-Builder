webpackJsonp([1],{H30m:function(a,e){a.exports={Home:"The home of the RPG GM Toolkit","NPC Generator":"Generate an NPC"}},NHnr:function(a,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("7+uW"),l=r("H30m"),i=r.n(l),o={name:"App",data:function(){return{}},computed:{pageName:function(){return this.$route.name},pageDesc:function(){return i.a[this.$route.name]}}},t={render:function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",[r("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[r("div",{staticClass:"navbar-brand"},[r("router-link",{staticClass:"navbar-item",attrs:{to:"/",id:"PageTitle"}},[a._v(" The Modern GM Toolkit ")])],1),a._v(" "),r("div",{staticClass:"navbar-menu"},[r("div",{staticClass:"navbar-end"},a._l(this.$router.options.routes,function(e){return r("router-link",{key:e.path,class:{"navbar-item":!0,"is-active":e.name==a.pageName},attrs:{to:e.path}},[a._v(a._s(e.name))])}))])]),a._v(" "),r("section",{staticClass:"hero is-primary is-bold",class:{"is-medium":"Home"==a.pageName,"is-info":"Home"!=a.pageName}},[r("div",{staticClass:"hero-body"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[a._v("\n          "+a._s(a.pageName)+"\n        ")]),a._v(" "),r("h2",{staticClass:"subtitle"},[a._v("\n          "+a._s(a.pageDesc)+"\n        ")])])])]),a._v(" "),r("router-view")],1)},staticRenderFns:[]};var s=r("VU/8")(o,t,!1,function(a){r("Ty4J")},null,null).exports,h=r("/ocq"),d={render:function(){var a=this.$createElement;return(this._self._c||a)("div")},staticRenderFns:[]};var u=r("VU/8")({data:function(){return{}}},d,!1,function(a){r("lohG")},null,null).exports,m=r("Ow1r"),c=r.n(m),g={name:"NPC",data:function(){return{races:c.a.races,selRace:0,sex:"male"}},computed:{currentRace:function(){return this.races[this.selRace]},stature:function(){var a=this.currentRace.stature.heightWeightRoll[this.sex],e=Math.floor(Math.random()*(a-2))+2,r=this.currentRace.stature.baseHeightInches[this.sex]+e,n=this.currentRace.stature.baseWeight[this.sex]+e*this.currentRace.stature.weightMultiplyer[this.sex],l=r%12;return{heightInches:r,writtenHeight:(r-l)/12+" ft "+l+'"',weight:n,writtenWeight:n+" lbs"}},name:function(){return this.currentRace.firstNames?this.currentRace.firstNames[this.sex][Math.floor(Math.random()*this.currentRace.firstNames[this.sex].length-1)]+" "+this.currentRace.surnames[Math.floor(Math.random()*this.currentRace.surnames.length-1)]:"N/A"}}},b={render:function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("div",{staticClass:"section"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-content"},[r("b-field",{attrs:{label:"Race"}},[r("b-select",{attrs:{placeholder:"No race selected"},model:{value:a.selRace,callback:function(e){a.selRace=e},expression:"selRace"}},a._l(a.races,function(e,n){return r("option",{key:n,domProps:{value:n}},[a._v(a._s(e.name))])}))],1),a._v(" "),r("b-field",{attrs:{label:"Sex"}},[r("b-select",{attrs:{placeholder:"No sex selected"},model:{value:a.sex,callback:function(e){a.sex=e},expression:"sex"}},[r("option",{attrs:{value:"male"}},[a._v("Male")]),a._v(" "),r("option",{attrs:{value:"female"}},[a._v("Female")])])],1)],1)])])]),a._v(" "),r("div",{staticClass:"column"},[r("div",{staticClass:"section"},[r("div",{staticClass:"card"},[r("header",{staticClass:"card-header"},[r("p",{staticClass:"card-header-title"},[a._v("Name : "+a._s(a.name))])]),a._v(" "),r("div",{staticClass:"card-content"},[r("h4",[a._v(" Race : "+a._s(a.currentRace.name)+" ")]),a._v(" "),r("h4",[a._v(" Sex : "+a._s(a.sex)+" ")]),a._v(" "),r("h4",[a._v(" Height : "+a._s(a.stature.writtenHeight)+" ")]),a._v(" "),r("h4",[a._v(" Weight : "+a._s(a.stature.writtenWeight)+" ")])])])])])])},staticRenderFns:[]};var f=r("VU/8")(g,b,!1,function(a){r("U35s")},null,null).exports;n.a.use(h.a);var k=new h.a({routes:[{path:"/",name:"Home",component:u},{path:"/npc",name:"NPC Generator",component:f}]}),w=(r("QxPg"),r("h17U"),r("1P+R"),r("MMSg")),v=r.n(w);n.a.config.productionTip=!1,n.a.use(v.a),new n.a({el:"#app",router:k,components:{App:s},template:"<App/>"})},Ow1r:function(a,e){a.exports={races:[{name:"Dwarf",stature:{baseHeightInches:{male:45,female:43},baseWeight:{male:150,female:120},heightWeightRoll:{male:8,female:8},weightMultiplyer:{male:7,female:7}},firstNames:{male:["Gehlak","Delthic","Thoradru","Barnar","Gruir","Yedar","Kilide","Zundrvo","Grart","Burrin","Thirulf","Vonric","Rak","Jorn","Toal","Gimok","Vongrim","Bul","Nirlak","Margar","Goggi","Baz","Raru","Boor","Dorn","Glorar","Agamm","Maar","Thir","Azak","Toror","Anli","Birin","Balur","Sandthal","Maic","Thifain","Ira","Nor","Ronor","Rinar","Askin","Keldan","Drogan","Kilgar","Moguk","Nabar","Ril","Garag","Vek","Dantar","Rivar","Torgnar","Yedtur","Vaad","Bakag","Norin","Vek","Iolgus","Rasar","Dongar","Boif","Dunster","Matrimm","Gomvak","Thorthic","Hathar","Torgel","Thorir","Vathic","Belthic","Gnok","Balthal","Bazgug","Glorkas","Relgar","Thifir","Garlar","Taak","Torus","Vonmar","Durin","Anar","Bazin","Immli","Yimdas","Dwaltur","Kaggan","Dorn","Gamurt","Yeram","Havdas","Ulur","Baz","Bofgin","Durur","Immlar","Biris","Bakyr","Barungruk"],female:["Steorim","Yurgret","Gwarani","Embla","Elta","Nolouki","Lada","Gima","Huakret","Belbabryn","Marlra","Barula","Glorna","Sada","Teluki","Ionu","Regrul","Yuriz","Isdlaka","Valal","Tah","Yari","Dormi","Orna","Tarna","Tagli","Liha","Cliaoh","Marlah","Vonra","Ginna","Dormi","Niba","Jarna","Glorida","Ulata","Talrim","Tagna","Velm","Dorna","Vonka","Zinttu","Vomta","Tali","Fragh","Wervae","Badda","Thonu","Yutte","Yili","Dela","Rega","Ramilka","Tudda","Taggret","Rari","Delil","Glokda","Tefna","Zuthma","Nolouda","Embna","Amli","Yada","Ambrsa","Gwaradi","Balariff","Duri","Almali","Vada","Tefit","Riduki","Aoti","Delna","Delra","Doril","Yurthra","Rega","Arak","Rubekthra","Velm","Marlka","Krideth","Yada","Halotu","Olosya","Vonrul","Unba","Nili","Gani","Birren","Rari","Ginra","Belmaera","Yili","Sibha","Arbela","Rona","Tudri","Olosalsia"]},surnames:["Burdar","Gardul","Bulbadan","Karkdun","Kiksten","Murdinad","Faddugan","Lazakak","Bazadun","Mognof","Khurrak","Garkavond","Gurkal","Turaest","Theidun","Karkban","Kazaarr","Gimrum","Garkapel","Gorogban","Gimdugan","Thranakak","Ovduum","Burtek","Darast","Davakak","Reidul","Kolmud","Kulddugan","Thamud","Garansten","Heirtul","Gurfal","Moramak","Medamak","Khazarak","Gimkak","Agaddal","Berthbal","Kaldkver","Ogradrak","Thranamalk","Thorum","Gamalek","Farvond","Fogduum","Fardrad","Nordan","Lazasten","Jareif","Vonrak","Gamalduum","Bazal","Grazgdrum","Aethduum","Maal","Faddar","Jarbek","Garkaest","Agadban","Bazdul","Morkrak","Tokakrak","Garvond","Jarkak","Zuldagbor","Urzak","Thakak","Bulrak","Kulddul","Nuraron","Murdinpel","Stunzak","Agakal","Jarast","Norlode","Garaast","Yurdamak","Bazdal","Lazalode","Torduum","Garkadur","Duervok","Farkadum","Zekrum","Aznof","Garast","Mormud","Fartek","Yurtek","Farmek","Paladuum","Berthnof","Gimlode","Torbek","Garkavok","Yurdamak","Gamalmek","Farmek","Arganof"]},{name:"Halfling",stature:{baseHeightInches:{male:32,female:30},baseWeight:{male:30,female:25},heightWeightRoll:{male:8,female:8},weightMultiplyer:{male:1,female:1}},firstNames:{male:["Nepos","Yentran","Newan","Kasamin","Barret","Bellan","Idotran","Marbin","Idoace","Merder","Horfer","Joser","Korvias","Ulfer","Tarhorn","Zalfire","Arver","Horton","Artran","Kormin","Sanos","Janyas","Flynric","Finvias","Horace","Jovias","Wilnad","Oritran","Horvon","Goder","Pergin","Laver","Belyas","Finzor","Sharver","Perzor","Falmo","Wilbin","Wenace","Iraret","Gonan","Nenad","Danorin","Gareon","Kasbul","Linster","Rigin","Yarras","Iraumo","Perlos","Janhace","Annan","Yendal","Anzor","Idohorn","Never","Elric","Falfire","Yenzor","Quozu","Garwan","Merbul","Corver","Quintran","Ulzor","Garlos","Garlos","Arkin","Ricfer","Barton","Maremin","Ulfire","Dander","Conbul","Zalvon","Idomin","Quopher","Idoric","Laemin","Zalwan","Ardak","Negin","Pimbin","Eryver","Halace","Merbul","Zalpos","Valfire","Perwrick","Quotran","Horrin","Teamin","Yenyver","Yarmo","Irarich","Nefer","Zalser","Pernad","Horemin","Barkas"],female:["Darcaryn","Vervyre","Risica","Grayra","Yescaryn","Qutina","Xiola","Gelalyn","Nemita","Fennys","Uvifira","Rosne","Belna","Uviwyse","Nedrana","Welsica","Erane","Odinys","Jayris","Nedfira","Kithris","Odiola","Kelelle","Nedlienne","Rosla","Gelbrix","Therri","Lesys","Qiara","Yeskis","Nesira","Sylgwen","Lezira","Fenprys","Sasys","Qudrey","Isabyn","Halie","Kelni","Marola","Diala","Gelola","Vabyn","Marri","Unala","Xikath","Eokath","Pruyola","Eolile","Quleigh","Wicaryn","Nedlile","Sane","Fentina","Havira","Zeneni","Gelprys","Kithtrix","Marula","Elizira","Xanleigh","Chenkath","Qiree","Thamgrace","Malyola","Xisica","Sylmita","Maezana","Gelcaryn","Yesree","Sacey","Ariris","Oracaryn","Xifira","Zenrana","Lelienne","Hilbyn","Jaysys","Unakath","Maeyola","Darara","Verlienne","Chenne","Qileigh","Paeola","Rosne","Eini","Xanla","Halyse","Thammia","Darphina","Idane","Qine","Kithlile","Erasica","Versica","Hilvyre","Grafira","Nene","Zefcey"]},surnames:["Conrett","Farnmann","Goldstrong","Stoneham","Gentlewater","Hawkrich","ceabsarn","baiggap","neerna","aiwdo","Underler","Kenver","Shurville","Cunningriddle","Foxmere","Goodmaker","airnsu","badgea","estip","hunchoom","Parger","Maccaster","Hopdrey","Northmore","Freemond","Ravenhead","cembee","ouwlags","daydaill","aiglaws","Otine","Steham","Paumour","Freehead","Holloburn","Eaglemore","ecceak","embip","treatchem","ootma","Stonenell","Gardibarry","Kendwin","Covingbeard","Nightmann","Covingstein","blastooph","bammiwl","daimbiggs","ainsuld","Dawmour","Thovan","Winton","Winterguard","Eaglemour","Webway","vumbook","eeytish","nirleatt","jairkuy","Marshgan","Beresning","Rutherdwell","Huntingland","Goldend","Augusttree","zaiggal","lonse","zulmou","urvougs","Freeclair","Nelrice","Boatdows","Augustcolt","Fishcolt","Southwood","harveng","neancawl","gaitchuph","freenchen","Remwens","Maumond","Conmers","Silverster","Bronzelow","Millmere","brarnsoungs","oobbiy","loukkuld","peebse","Kenvine","Caulrow","Holmont","Chapborne","Grimborne","Canborne","cearnuch","beensech","zeanco","grearvay"]},{name:"Elf",stature:{baseHeightInches:{male:64,female:64},baseWeight:{male:100,female:90},heightWeightRoll:{male:16,female:12},weightMultiplyer:{male:3,female:3}},firstNames:{male:["Tharaerion","Rochenion","Aranron","Bellfindad","Daerthuion","Laermaeon","Belmelien","Aearien","Caranion","Megildhon","Rilhil","Arandur","Laerlaereus","Suiyaon","Dorw","Indecion","Raeggos","Tëlthanële","Nostvantion","Gilphenond","Arfinil","Arangalad","Sidhnaethor","Risswe","Authcion","Laireastion","Melciniien","Cereyonil","Rinenfarasien","Taniien","Tanidil","Ovorien","Saelis","Kamaeas","Calpantdad","Sidholdur","Vercaunion","Narais","Tëriadien","Aeardur","Sadron","Bellfindon","Thandhiion","Elfindion","Faebaraddraug","Velemelion","Galasnenon","Daraphadien","Marsirn�n","Garion","Alyalathien","Habrisien","Meltulcon","Moreneus","Belleurdur","Laercaunthor","Laiquaadhamion","Orgolion","Aranion","Lythal","Aelanon","Athmelil","Siraththor","Mandur","Lithdaugthor","Algoldil","Locien","Rimeir","Aranthil","Berlathion","Talaluanil","Morimion","Melimdur","Kathonede","Nimwarthion","Revron","Taohdien","Mcinion","Ordhuddur","Aranar","�t�rdaedon","M�tayanin","Ridasnen","Bellmaeion","Tanfinion","Barbeliion","Bregiadir","Nithwe","Lanwaithien","Gonmumeluion","Cofvanton","Tanminaiion","Merimaeion","Melcarond","Urëvcon","Iauron","Calaion","Arranon","Malion","Metameluond"],female:["Cornennwen","Bronliniel","Silivaithiel","Inladiel","Rainardaaiel","Faehilima","Glanlarasse","Rosarainiel","Laidothiel","Althea","Erdirelde","Sidhmelmiriel","Glanpantiel","Caaithwen","Bronlathwen","Laurthaadiel","Morfainiel","Medronsta","Melsathiel","Geliriel","Eruira","Earvanna","Gwilladwen","Earwethwen","ethminaiel","Melidreninya","Halaialiel","Esadhiel","Quanladhthea","Enayavrae","Minutelwen","Melwen","Crateriel","Losglermamiwen","Araeleiel","Marwen","Lothnaeea","Eccaiel","Raina","Calrendaaiel","Sereniel","Aranlandeth","Iltithenniel","Raina","Geliranna","Daerathiel","Marana","Arasidhiel","Paneleiel","Aerdilea","Ahensinwen","Erudwen","Agdrannwen","Minueniniel","Sabariel","Halamariwen","Rainidrentithwen","Gelirda","Mintheriel","Sabarilla","Beriwen","Lostcistiel","Cireduriel","Eruanna","Eslairwen","Timeladiel","Vanipantaxa","Nionmana","Agdrannrae","Enasathaxa","Araniel","Serlatheth","Arasathwen","Galedethauiel","Ancassiel","Iotheriel","Selirrae","Sidhmelthiriel","Cuilnel","Aracistelde","Medasswen","Yathialwen","Broneththea","Daeralwen","Calenesima","Melelwen","Mendethiel","Adien","Gwilethiel","Earmorthea","Peddeththae","Melgaraya","Araethima","Minthernyl","Erdoththa","Builoteth","Invaiel","Amarien","Rhalinnwen","Niraniel"]},surnames:["Ealoos","Aeralinde","Isilitadar","Dlardilinil","Gwalond","Kevatholian","Cromlithe","Wermirdren","Tanelenta","Cuelenthar","Larlothion","Faelandalan","Lithvir","Kevatadar","Nelyaion","Aeralynnmyr","Taltaur","Tallinde","Haeval","Galathalthar","Undolinde","Isiliereeil","Landilinellyn","Celevanseer","Celeglinarin","Elertaur","Tantholseer","Galonmiel","Lassansel","Landilinlhen","Galanarseer","Galadhen","Ondoos","Orlinde","Tinulond","Eleros","Aldaren","Nelbrinthir","Aeradhen","Yrauvathar","Talthalas","Aldadel","Laeglinathar","Elennae","Sharondaerl","Kevatanrin","Gadilinonel","Aeradhen","Cutathdar","Mithyatinu","Undoloth","Aldaelon","Faelandalan","Celetanas","Marailal","Narthalina","Orvaul","Larendragthar","Mithestinu","Nallren","Felendil","Nartanseer","Nelmirtinu","Celelithsyr","Elenelon","Gwadel","Ordhen","Aeravathar","Naranial","Tathtaure","Elendel","Birron","Cualryl","Mithnardal","Vanelon","Elennae","Elensume","Lithlithe","Undoelon","Laranta","Tathvathar","Rhuieme","Oreth","Taldhen","Maldilinmyr","Dlarthandal","Faerondaerl","Curaidal","Taltaur","Toradragdal","Nalleme","Marairin","Naressel","Kitaththir","Kevaliththar","Elermin","Falalinde","Nallvathar","Nhadilinmae","Nalldel"]},{name:"Human",stature:{baseHeightInches:{male:58,female:53},baseWeight:{male:120,female:85},heightWeightRoll:{male:20,female:20},weightMultiplyer:{male:5,female:5}},firstNames:{male:["Noah","Liam","Mason","Jacob","William","Ethan","James","Alexander","Michael","Benjamin","Elijah","Daniel","Aiden","Logan","Matthew","Lucas","Jackson","David","Oliver","Jayden","Joseph","Gabriel","Samuel","Carter","Anthony","John","Dylan","Luke","Henry","Andrew","Isaac","Christopher","Joshua","Wyatt","Sebastian","Owen","Caleb","Nathan","Ryan","Jack","Hunter","Levi","Christian","Jaxon","Julian","Landon","Grayson","Jonathan","Isaiah","Charles","Thomas","Aaron","Eli","Connor","Jeremiah","Cameron","Josiah","Adrian","Colton","Jordan","Brayden","Nicholas","Robert","Angel","Hudson","Lincoln","Evan","Dominic","Austin","Gavin","Nolan","Parker","Adam","Chase","Jace","Ian","Cooper","Easton","Kevin","Jose","Tyler","Brandon","Asher","Jaxson","Mateo","Jason","Ayden","Zachary","Carson","Xavier","Leo","Ezra","Bentley","Sawyer","Kayden","Blake","Nathaniel","Ryder","Theodore","Elias"],female:["Emma","Olivia","Sophia","Ava","Isabella","Mia","Abigail","Emily","Charlotte","Harper","Madison","Amelia","Elizabeth","Sofia","Evelyn","Avery","Chloe","Ella","Grace","Victoria","Aubrey","Scarlett","Zoey","Addison","Lily","Lillian","Natalie","Hannah","Aria","Layla","Brooklyn","Alexa","Zoe","Penelope","Riley","Leah","Audrey","Savannah","Allison","Samantha","Nora","Skylar","Camila","Anna","Paisley","Ariana","Ellie","Aaliyah","Claire","Violet","Stella","Sadie","Mila","Gabriella","Lucy","Arianna","Kennedy","Sarah","Madelyn","Eleanor","Kaylee","Caroline","Hazel","Hailey","Genesis","Kylie","Autumn","Piper","Maya","Nevaeh","Serenity","Peyton","Mackenzie","Bella","Eva","Taylor","Naomi","Aubree","Aurora","Melanie","Lydia","Brianna","Ruby","Katherine","Ashley","Alexis","Alice","Cora","Julia","Madeline","Faith","Annabelle","Alyssa","Isabelle","Vivian","Gianna","Quinn","Clara","Reagan","Khloe"]},surnames:["shadowmaw","softflayer","fistsinger","embercaller","featherglade","nosevalor","deadsky","whitbash","crestbrow","lowrock","youngvale","rosebeard","boulderstrike","masterore","saurstone","farbough","cragshot","clouddancer","peacedown","hellforest","fireleaf","nicklegrain","snakeshade","lonesnow","stouttail","honorgleam","clanvigor","fuseflayer","grassgrove","shadecrest","cliffdream","nicklejumper","hallowhunter","hawkbender","willowtrap","regalshine","bloodclaw","freestrength","stillsteel","phoenixrun","windtail","fistflow","rumblewind","humblecrusher","regalore","fireglide","cinderfall","oatsong","mildpeak","whitroot","marshwood","heartvigor","fogbender","youngthorne","barleydraft","lightweaver","nightsword","cloudgrove","wheattrack","strongbreeze","sharpgloom","dawnmane","summermoon","lunasnout","hallowmight","amberbrace","coventrack","whitblade","brighttrapper","farbrooke","pinemight","eaglebender","steeltail","spiritstalker","plainjumper","mossoak","heartsnow","wolfmaul","frozenmark","fallenmoon","boneglory","clanwoods","shadowchewer","steeloak","bearoak","rosebeam","earthriver","lunasword","seadream","marbletail","shieldsorrow","havenreaver","titancloud","hazeore","duskflayer","titantide","mildwatcher","embergrip","havenbrew","dreamheart"]},{name:"Gnome",stature:{baseHeightInches:{male:36,female:34},baseWeight:{male:35,female:30},heightWeightRoll:{male:8,female:8},weightMultiplyer:{male:1,female:1}},firstNames:{male:["Aelfmaerfalca","Aluuarwin","Billfrid","Cadwealdwyn","Cranheardric","Cynegislaus","Cynesigelred","Derefert","Ecgbeorht","Feolheard","Fritheobat","Frithweard","Godfrith","Hereward","Humberth","Leodward","Leofgieson","Leuthhere","Odalldine","Osgoodwin","Saebeorht","Swidhere","Thancred","Tondbert","Trumheardred","Tunfranwill","Winstofferic","Aelweald","Aethelnoth","Asulfram","Baegenbel","Beorhtric","Beornfrid","Bothsige","Cenbehrt","Cranwine","Cristopher","Demetric","Dunsigelred","Eadwgawn","Eorkonwine","Forwartlin","Godfrith","Grimannoth","Irminric","Kromaite","Leodhorn","Piermundin","Sexhelwold","Thornhere","Tunbehrt","Ufegenwyl","Winnegils","Wynferthher","Aelfmaer","Aethelffert","Byrtfertur","Cenhelmheard","Ceolward","Coelfnothman","Cynebastus","Cynferth","DeAndelac","Eardbehrt","Ermidydd","Ermidyddin","Leofgiester","Leofingfrid","Ordbehrt","Raedherefrid","Sentweald","Torphing","Twrgadawg","Waerheahmund","Wiermund","Willinghear","Willivere","Wynfrith","Xavierct","Zachardlac","Aelfhelward","Alexzandaf","Arthachar","Beorhtsig","Beornmor","Beornwulf","Blachelhelm","Burgwulf","Ceafordecai","Cuthbert","Cuthfrith","Dafyddin","Drythbeorht","Ealgmund","Godfridfrith","Hirocwulf","Hunterfyn","Idheadulf","Jeriburghern","Kristoffert"],female:["Sadget","Vecky","Tinanora","Aby","Ava","Bena","Bre","Desha","Else","Emma","Eni","Erna","Gan","Gina","Ivie","Jan","Jodi","Joye","Kai","Kaia","Kita","Lina","Loie","Mami","Mya","Nady","Nel","Nira","Nora","Ora","Quie","Veda","Vee","Abi","Aby","Ami","Ann","Arra","Birah","Bre","Dei","Edena","Gen","Gwen","Gwena","Ija","Ilma","Joni","Kae","Kemi","Kerna","Kym","Lalia","Luli","Luna","Marah","Mia","Nala","Opal","Syd","Taryn","Zin","Zon","Alle","Amya","Ari","Arl","Avie","Bebi","Bia","Dova","Dwant","Eli","Eni","Hala","Ira","Jera","Kat","Kemya","Lal","Lala","Liz","Lola","Lona","Lula","Macie","Mail","Maja","Mami","Mara","Ren","Tru","Zin","Kacy","Kami","Leta","Loria","Lota","Maye","Mene","Mim"]},surnames:["glubkuc","fompill","zinkkiet","fednol","heddlys","slenkkymick","zodwienaa","wagamjeg","slibykwig","hubankly","lulmu","scaimzeen","wopni","daddlim","thadwu","phybblyveck","foddewet","afellnert","rigodnal","snahunglo","rebblag","zaibkar","theddnis","moproc","flamzo","sherooniep","nielbilall","shaimenkkap","defimbo","shucellbas","shedbi","gnallmig","snilbet","gladdnos","kneenkkest","bemdoogug","gummyrert","fluheebkess","fneenapwag","ienapwug","shidwull","knenka","makul","thunzu","laddlyg","snokmimal","gnaamwodoo","loonabbre","gibynsnot","shikikmy","gullmo","thipnor","blaingnu","taambal","flilbin","klanjuvess","wullmahell","zuginkkast","abobblist","gnabeddaip","middart","knobbreec","fevurt","lykwec","scopness","clorwekeg","thollmalass","afunsme","gnugemjir","fucanzuss","makel","smempeen","dolkoss","libblaa","manbel","gnullmisut","slavyni","fnimelnyl","cahapri","nuburwa","glabbnon","nurbuc","folbe","jinsnen","slyrwirt","clunsnekart","snaiddwaba","wefapra","glenaaprort","afommic","bladla","pibnill","gnimwon","lulvy","shunsna","knipwici","dallbyduc","fadoorba","dulyklyn","kliniddny"]},{name:"Half-Orc",stature:{baseHeightInches:{male:58,female:43},baseWeight:{male:150,female:110},heightWeightRoll:{male:24,female:24},weightMultiplyer:{male:7,female:7}},firstNames:{male:["crot","tuzvran","udizvrash","lor","cibordrug","grirgot","griltrark","lazvre","dokis","craazvoth","doll","sokdorm","daltru","brezvrers","hil","khoktel","tun","argaaka","tram","hogdoch","tiltril","groasdazel","dulrars","grakhan","traardri","zarilror","holreth","buzirvaad","hestrat","hregho","haubaurgil","brevolrul","bradheg","treghoden","gosh","indrull","sistuu","cit","braungulem","undigel","drekdork","driktekorg","thubrak","orvo","kudhekach","gruustrach","crasded","tokhigak","biardril","thakiavar","troll","thingir","saash","aizriar","loboach","hukal","magdirk","hrork","troll","brur","crokingraurs","bokra","tedzai","zonvenull","gekaizvroll","kitro","brisdirk","unguk","niaderers","cozzo","hervaars","akhe","okhar","gnialri","lur","gazakren","doch","krit","kris","hek","thega","drogirg","bon","noakhonan","mogrukerk","dilredos","ervo","nezadrairm","cerukaad","eboanvill","hurs","noth","hik","silraull","luvevos","merg","thobroch","trakhim","trengoch","kraazrers"],female:["osable","brulto","ovevro","zobro","thesh","bimirgo","use","cax","pahrou","cox","feh","sheli","taybugo","nagla","fith","tutacre","bromlu","bamlo","zaynlax","buttu","sel","nadru","mago","pex","hoth","egodru","fabullith","odourli","doljku","shunabath","ciru","thecosh","bordi","brux","rhulreco","fih","zangoth","dadli","simri","sul","wuti","gozu","win","demix","velnol","dux","pedelri","visuhro","mesujkoul","dublu","hubin","nelo","feth","zosruo","sheljki","vosoba","kalrai","shigi","dun","vux","eghazrin","ruhge","feroltu","voth","fabi","have","dargou","irlo","shiglabi","hemo","sabouzayl","nalnox","vebuno","kighash","kainlu","shugido","anlon","wuth","rhusro","uglo","ilti","ponilra","pobruoth","corluode","rhelta","shonith","nodosh","rhuseclu","vorloux","deghu","kailta","suovesh","rese","tomgigath","brajkalel","dash","fumru","van","cozinco","etoth"]},surnames:["shadowmaw","softflayer","fistsinger","embercaller","featherglade","nosevalor","deadsky","whitbash","crestbrow","lowrock","youngvale","rosebeard","boulderstrike","masterore","saurstone","farbough","cragshot","clouddancer","peacedown","hellforest","fireleaf","nicklegrain","snakeshade","lonesnow","stouttail","honorgleam","clanvigor","fuseflayer","grassgrove","shadecrest","cliffdream","nicklejumper","hallowhunter","hawkbender","willowtrap","regalshine","bloodclaw","freestrength","stillsteel","phoenixrun","windtail","fistflow","rumblewind","humblecrusher","regalore","fireglide","cinderfall","oatsong","mildpeak","whitroot","marshwood","heartvigor","fogbender","youngthorne","barleydraft","lightweaver","nightsword","cloudgrove","wheattrack","strongbreeze","sharpgloom","dawnmane","summermoon","lunasnout","hallowmight","amberbrace","coventrack","whitblade","brighttrapper","farbrooke","pinemight","eaglebender","steeltail","spiritstalker","plainjumper","mossoak","heartsnow","wolfmaul","frozenmark","fallenmoon","boneglory","clanwoods","shadowchewer","steeloak","bearoak","rosebeam","earthriver","lunasword","seadream","marbletail","shieldsorrow","havenreaver","titancloud","hazeore","duskflayer","titantide","mildwatcher","embergrip","havenbrew","dreamheart"]},{name:"Half-Elf",stature:{baseHeightInches:{male:62,female:60},baseWeight:{male:110,female:90},heightWeightRoll:{male:16,female:16},weightMultiplyer:{male:5,female:5}},firstNames:{male:["Noah","Liam","Mason","Jacob","William","Ethan","James","Alexander","Michael","Benjamin","Elijah","Daniel","Aiden","Logan","Matthew","Lucas","Jackson","David","Oliver","Jayden","Joseph","Gabriel","Samuel","Carter","Anthony","John","Dylan","Luke","Henry","Andrew","Isaac","Christopher","Joshua","Wyatt","Sebastian","Owen","Caleb","Nathan","Ryan","Jack","Hunter","Levi","Christian","Jaxon","Julian","Landon","Grayson","Jonathan","Isaiah","Charles","Thomas","Aaron","Eli","Belleurdur","Laercaunthor","Laiquaadhamion","Orgolion","Aranion","Lythal","Aelanon","Athmelil","Siraththor","Mandur","Lithdaugthor","Algoldil","Locien","Rimeir","Aranthil","Berlathion","Talaluanil","Morimion","Melimdur","Kathonede","Nimwarthion","Revron","Taohdien","Mcinion","Ordhuddur","Aranar","�t�rdaedon","M�tayanin","Ridasnen","Bellmaeion","Tanfinion","Barbeliion","Bregiadir","Nithwe","Lanwaithien","Gonmumeluion","Cofvanton","Tanminaiion","Merimaeion","Melcarond","Urëvcon","Iauron","Calaion","Arranon","Malion","Metameluond"],female:["Cornennwen","Bronliniel","Silivaithiel","Inladiel","Rainardaaiel","Faehilima","Glanlarasse","Rosarainiel","Laidothiel","Althea","Erdirelde","Sidhmelmiriel","Glanpantiel","Caaithwen","Bronlathwen","Laurthaadiel","Morfainiel","Medronsta","Melsathiel","Geliriel","Eruira","Earvanna","Gwilladwen","Earwethwen","ethminaiel","Melidreninya","Halaialiel","Esadhiel","Quanladhthea","Enayavrae","Minutelwen","Melwen","Crateriel","Losglermamiwen","Araeleiel","Marwen","Lothnaeea","Eccaiel","Raina","Calrendaaiel","Sereniel","Aranlandeth","Iltithenniel","Raina","Geliranna","Daerathiel","Marana","Arasidhiel","Paneleiel","Aerdilea","Ahensinwen","Erudwen","Agdrannwen","Minueniniel","Sabariel","Halamariwen","Rainidrentithwen","Gelirda","Mintheriel","Arianna","Kennedy","Sarah","Madelyn","Eleanor","Kaylee","Caroline","Hazel","Hailey","Genesis","Kylie","Autumn","Piper","Maya","Nevaeh","Serenity","Peyton","Mackenzie","Bella","Eva","Taylor","Naomi","Aubree","Aurora","Melanie","Lydia","Brianna","Ruby","Katherine","Ashley","Alexis","Alice","Cora","Julia","Madeline","Faith","Annabelle","Alyssa","Isabelle","Vivian","Gianna","Quinn","Clara","Reagan","Khloe"]},surnames:["shadowmaw","softflayer","fistsinger","embercaller","featherglade","nosevalor","deadsky","whitbash","crestbrow","lowrock","youngvale","rosebeard","boulderstrike","masterore","saurstone","farbough","cragshot","clouddancer","peacedown","hellforest","fireleaf","nicklegrain","snakeshade","lonesnow","stouttail","honorgleam","clanvigor","fuseflayer","grassgrove","shadecrest","cliffdream","nicklejumper","hallowhunter","hawkbender","willowtrap","regalshine","bloodclaw","freestrength","stillsteel","phoenixrun","windtail","fistflow","rumblewind","humblecrusher","regalore","fireglide","cinderfall","oatsong","mildpeak","whitroot","marshwood","heartvigor","fogbender","Celetanas","Marailal","Narthalina","Orvaul","Larendragthar","Mithestinu","Nallren","Felendil","Nartanseer","Nelmirtinu","Celelithsyr","Elenelon","Gwadel","Ordhen","Aeravathar","Naranial","Tathtaure","Elendel","Birron","Cualryl","Mithnardal","Vanelon","Elennae","Elensume","Lithlithe","Undoelon","Laranta","Tathvathar","Rhuieme","Oreth","Taldhen","Maldilinmyr","Dlarthandal","Faerondaerl","Curaidal","Taltaur","Toradragdal","Nalleme","Marairin","Naressel","Kitaththir","Kevaliththar","Elermin","Falalinde","Nallvathar","Nhadilinmae","Nalldel"]}]}},Ty4J:function(a,e){},U35s:function(a,e){},lohG:function(a,e){}},["NHnr"]);
//# sourceMappingURL=app.bd7ba2b36c87daf9b2f7.js.map