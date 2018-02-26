webpackJsonp([1],{H30m:function(a,e){a.exports={Home:"The home of the RPG GM Toolkit","NPC Generator":"Generate an NPC"}},HC1r:function(a,e){},NHnr:function(a,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("7+uW"),l=r("H30m"),i=r.n(l),t={name:"App",data:function(){return{}},computed:{pageName:function(){return this.$route.name},pageDesc:function(){return i.a[this.$route.name]}}},o={render:function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",[r("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[r("div",{staticClass:"navbar-brand"},[r("router-link",{staticClass:"navbar-item",attrs:{to:"/",id:"PageTitle"}},[a._v(" The Modern GM Toolkit ")])],1),a._v(" "),r("div",{staticClass:"navbar-menu"},[r("div",{staticClass:"navbar-end"},a._l(this.$router.options.routes,function(e){return r("router-link",{key:e.path,class:{"navbar-item":!0,"is-active":e.name==a.pageName},attrs:{to:e.path}},[a._v(a._s(e.name))])}))])]),a._v(" "),r("section",{staticClass:"hero is-primary is-bold",class:{"is-medium":"Home"==a.pageName,"is-info":"Home"!=a.pageName}},[r("div",{staticClass:"hero-body"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[a._v("\n          "+a._s(a.pageName)+"\n        ")]),a._v(" "),r("h2",{staticClass:"subtitle"},[a._v("\n          "+a._s(a.pageDesc)+"\n        ")])])])]),a._v(" "),r("router-view")],1)},staticRenderFns:[]};var s=r("VU/8")(t,o,!1,function(a){r("HC1r")},null,null).exports,h=r("/ocq"),d={render:function(){var a=this.$createElement;return(this._self._c||a)("div")},staticRenderFns:[]};var u=r("VU/8")({data:function(){return{}}},d,!1,function(a){r("lohG")},null,null).exports,m=r("Ow1r"),c=r.n(m),g=r("mr0L"),b=r.n(g),f={name:"NPC",data:function(){return{races:c.a.races,classes:b.a.classes,selRace:c.a.races.length,selClass:b.a.classes.length,sex:"random",level:null}},methods:{regenerate:function(){var a=this.selAlignment,e=this.sex;this.sex=this.sex,this.sex=e;var r=this.selClass;this.selClass=0==this.selClass?1:0,this.selClass=r;var n=this.level;this.level=0==this.level?1:0,this.level=n;var l=this.selRace;this.selRace=0==this.selRace?1:0,this.selRace=l,this.selAlignment=a},toNameCase:function(a){return a.replace(/\w\S*/g,function(a){return a.charAt(0).toUpperCase()+a.substr(1).toLowerCase()})},capitalizeFirstLetter:function(a){return a.charAt(0).toUpperCase()+a.slice(1)}},computed:{currentRace:function(){return this.selRace!=this.races.length?this.races[this.selRace]:this.races[Math.floor(Math.random()*this.races.length)]},currentClass:function(){return this.selClass!=this.classes.length?this.classes[this.selClass]:this.classes[Math.floor(Math.random()*this.classes.length)]},currentAlignment:function(){return this.selClass==this.classes.length||this.selAlignment==this.currentClass.alignments.length||null==this.selAlignment?this.currentClass.alignments[Math.floor(Math.random()*this.currentClass.alignments.length)]:this.currentClass.alignments[this.selAlignment]},displayAlignment:function(){switch(this.currentAlignment){case"CN":return"Chaotic Neutral";case"CG":return"Chaotic Good";case"CE":return"Chaotic Evil";case"N":return"True Neutral";case"NG":return"Neutral Good";case"NE":return"Neutral Evil";case"LN":return"Lawful Neutral";case"LG":return"Lawful Good";case"LE":return"Lawful Evil"}},fSex:function(){return"random"==this.sex?100*Math.random()>49?"male":"female":this.sex},stature:function(){var a=this.fSex,e=this.currentRace.stature.heightWeightRoll[a],r=Math.floor(Math.random()*(e-2))+2,n=this.currentRace.stature.baseHeightInches[a]+r,l=this.currentRace.stature.baseWeight[a]+r*this.currentRace.stature.weightMultiplyer[a],i=n%12;return{heightInches:n,writtenHeight:(n-i)/12+" ft "+i+" in",weight:l,writtenWeight:l+" lbs"}},name:function(){if(this.currentRace.firstNames){var a=this.currentRace.firstNames[this.fSex][Math.floor(Math.random()*this.currentRace.firstNames[this.fSex].length-1)]+" "+this.currentRace.surnames[Math.floor(Math.random()*this.currentRace.surnames.length-1)];return this.toNameCase(a)}return"N/A"},curLevel:function(){return null!=this.level&&""!=this.level?this.level:Math.floor(5*Math.random())+2},pronoun:function(){return"male"==this.fSex?"his":"her"},hair:function(){var a=this.currentRace.hair,e=a.colors[Math.floor(Math.random()*a.colors.length)],r=a.styles[Math.floor(Math.random()*a.styles.length)],n=a.notes[Math.floor(Math.random()*a.notes.length)];return this.capitalizeFirstLetter(this.pronoun)+" "+n+" "+e+" hair is "+r+"."}}},v={render:function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("div",{staticClass:"section"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-content"},[r("b-field",[r("b-select",{attrs:{placeholder:"No race selected",expanded:""},model:{value:a.selRace,callback:function(e){a.selRace=e},expression:"selRace"}},[a._l(a.races,function(e,n){return r("option",{key:n,domProps:{value:n}},[a._v(a._s(e.name))])}),a._v(" "),r("option",{domProps:{value:a.races.length}},[a._v("Random Race")])],2),a._v(" "),r("b-select",{attrs:{placeholder:"No sex selected",expanded:""},model:{value:a.sex,callback:function(e){a.sex=e},expression:"sex"}},[r("option",{attrs:{value:"male"}},[a._v("Male")]),a._v(" "),r("option",{attrs:{value:"female"}},[a._v("Female")]),a._v(" "),r("option",{attrs:{value:"random"}},[a._v("Randomize Sex")])])],1),a._v(" "),r("b-field",[r("b-select",{attrs:{placeholder:"No class selected"},model:{value:a.selClass,callback:function(e){a.selClass=e},expression:"selClass"}},[a._l(a.classes,function(e,n){return r("option",{key:n,domProps:{value:n}},[a._v(a._s(e.name))])}),a._v(" "),r("option",{domProps:{value:a.classes.length}},[a._v("Random Class")])],2),a._v(" "),r("b-input",{attrs:{type:"Number",placeholder:"Level",max:"20",expanded:""},model:{value:a.level,callback:function(e){a.level=e},expression:"level"}})],1),a._v(" "),r("b-field",[a.selClass!=a.classes.length?r("b-select",{attrs:{placeholder:"No Alignment selected",expanded:""},model:{value:a.selAlignment,callback:function(e){a.selAlignment=e},expression:"selAlignment"}},[a._l(a.currentClass.alignments,function(e,n){return r("option",{key:n,domProps:{value:n}},[a._v(a._s(e))])}),a._v(" "),r("option",{domProps:{value:a.races.length}},[a._v("Random alignment")])],2):a._e()],1),a._v(" "),r("a",{staticClass:"button is-primary is-outlined",attrs:{id:"regen"},on:{click:function(e){a.regenerate()}}},[a._v("Regenerate")])],1)])])]),a._v(" "),r("div",{staticClass:"column"},[r("div",{staticClass:"section"},[r("div",{staticClass:"card"},[r("header",{staticClass:"card-header"},[r("p",{staticClass:"card-header-title"},[a._v("Name : "+a._s(a.name))])]),a._v(" "),r("div",{staticClass:"card-content"},[r("h4",[a._v(" Race : "+a._s(a.currentRace.name)+" ")]),a._v(" "),r("h4",[a._v(" Class : "+a._s(a.currentClass.name)+" ( "+a._s(a.curLevel)+" )")]),a._v(" "),r("h4",[a._v(" Sex : "+a._s(a.capitalizeFirstLetter(a.fSex))+" ")]),a._v(" "),r("h4",[a._v(" Height : "+a._s(a.stature.writtenHeight)+" ")]),a._v(" "),r("h4",[a._v(" Weight : "+a._s(a.stature.writtenWeight)+" ")]),a._v(" "),r("h4",[a._v(" Alignment : "+a._s(a.displayAlignment)+" ")]),a._v(" "),r("br"),a._v(" "),r("h4",[a._v(" Hair : "+a._s(a.hair)+" ")])])])])])])},staticRenderFns:[]};var k=r("VU/8")(f,v,!1,function(a){r("SMbH")},null,null).exports;n.a.use(h.a);var w=new h.a({routes:[{path:"/",name:"Home",component:u},{path:"/npc",name:"NPC Generator",component:k}]}),y=(r("QxPg"),r("h17U"),r("1P+R"),r("MMSg")),p=r.n(y);n.a.config.productionTip=!1,n.a.use(p.a),new n.a({el:"#app",router:w,components:{App:s},template:"<App/>"})},Ow1r:function(a,e){a.exports={races:[{name:"Dwarf",hair:{colors:["black","brown"],styles:["long","wirey","full and heavy","luciously curling"],notes:["carefully braided","coal dust coated","coal stained","well kept","beaded","tied up"]},eyeColors:[],stature:{baseHeightInches:{male:45,female:43},baseWeight:{male:150,female:120},heightWeightRoll:{male:8,female:8},weightMultiplyer:{male:7,female:7}},firstNames:{male:["Gehlak","Delthic","Thoradru","Barnar","Gruir","Yedar","Kilide","Zundrvo","Grart","Burrin","Thirulf","Vonric","Rak","Jorn","Toal","Gimok","Vongrim","Bul","Nirlak","Margar","Goggi","Baz","Raru","Boor","Dorn","Glorar","Agamm","Maar","Thir","Azak","Toror","Anli","Birin","Balur","Sandthal","Maic","Thifain","Ira","Nor","Ronor","Rinar","Askin","Keldan","Drogan","Kilgar","Moguk","Nabar","Ril","Garag","Vek","Dantar","Rivar","Torgnar","Yedtur","Vaad","Bakag","Norin","Vek","Iolgus","Rasar","Dongar","Boif","Dunster","Matrimm","Gomvak","Thorthic","Hathar","Torgel","Thorir","Vathic","Belthic","Gnok","Balthal","Bazgug","Glorkas","Relgar","Thifir","Garlar","Taak","Torus","Vonmar","Durin","Anar","Bazin","Immli","Yimdas","Dwaltur","Kaggan","Dorn","Gamurt","Yeram","Havdas","Ulur","Baz","Bofgin","Durur","Immlar","Biris","Bakyr","Barungruk"],female:["Steorim","Yurgret","Gwarani","Embla","Elta","Nolouki","Lada","Gima","Huakret","Belbabryn","Marlra","Barula","Glorna","Sada","Teluki","Ionu","Regrul","Yuriz","Isdlaka","Valal","Tah","Yari","Dormi","Orna","Tarna","Tagli","Liha","Cliaoh","Marlah","Vonra","Ginna","Dormi","Niba","Jarna","Glorida","Ulata","Talrim","Tagna","Velm","Dorna","Vonka","Zinttu","Vomta","Tali","Fragh","Wervae","Badda","Thonu","Yutte","Yili","Dela","Rega","Ramilka","Tudda","Taggret","Rari","Delil","Glokda","Tefna","Zuthma","Nolouda","Embna","Amli","Yada","Ambrsa","Gwaradi","Balariff","Duri","Almali","Vada","Tefit","Riduki","Aoti","Delna","Delra","Doril","Yurthra","Rega","Arak","Rubekthra","Velm","Marlka","Krideth","Yada","Halotu","Olosya","Vonrul","Unba","Nili","Gani","Birren","Rari","Ginra","Belmaera","Yili","Sibha","Arbela","Rona","Tudri","Olosalsia"]},surnames:["Burdar","Gardul","Bulbadan","Karkdun","Kiksten","Murdinad","Faddugan","Lazakak","Bazadun","Mognof","Khurrak","Garkavond","Gurkal","Turaest","Theidun","Karkban","Kazaarr","Gimrum","Garkapel","Gorogban","Gimdugan","Thranakak","Ovduum","Burtek","Darast","Davakak","Reidul","Kolmud","Kulddugan","Thamud","Garansten","Heirtul","Gurfal","Moramak","Medamak","Khazarak","Gimkak","Agaddal","Berthbal","Kaldkver","Ogradrak","Thranamalk","Thorum","Gamalek","Farvond","Fogduum","Fardrad","Nordan","Lazasten","Jareif","Vonrak","Gamalduum","Bazal","Grazgdrum","Aethduum","Maal","Faddar","Jarbek","Garkaest","Agadban","Bazdul","Morkrak","Tokakrak","Garvond","Jarkak","Zuldagbor","Urzak","Thakak","Bulrak","Kulddul","Nuraron","Murdinpel","Stunzak","Agakal","Jarast","Norlode","Garaast","Yurdamak","Bazdal","Lazalode","Torduum","Garkadur","Duervok","Farkadum","Zekrum","Aznof","Garast","Mormud","Fartek","Yurtek","Farmek","Paladuum","Berthnof","Gimlode","Torbek","Garkavok","Yurdamak","Gamalmek","Farmek","Arganof"]},{name:"Halfling",hair:{colors:["auburn","black","brown","gray","white"],styles:["short","spiked","shoulder length","bobbed"],notes:["greasy looking","messy","dry looking","dirt caked"]},stature:{baseHeightInches:{male:32,female:30},baseWeight:{male:30,female:25},heightWeightRoll:{male:8,female:8},weightMultiplyer:{male:1,female:1}},firstNames:{male:["Nepos","Yentran","Newan","Kasamin","Barret","Bellan","Idotran","Marbin","Idoace","Merder","Horfer","Joser","Korvias","Ulfer","Tarhorn","Zalfire","Arver","Horton","Artran","Kormin","Sanos","Janyas","Flynric","Finvias","Horace","Jovias","Wilnad","Oritran","Horvon","Goder","Pergin","Laver","Belyas","Finzor","Sharver","Perzor","Falmo","Wilbin","Wenace","Iraret","Gonan","Nenad","Danorin","Gareon","Kasbul","Linster","Rigin","Yarras","Iraumo","Perlos","Janhace","Annan","Yendal","Anzor","Idohorn","Never","Elric","Falfire","Yenzor","Quozu","Garwan","Merbul","Corver","Quintran","Ulzor","Garlos","Garlos","Arkin","Ricfer","Barton","Maremin","Ulfire","Dander","Conbul","Zalvon","Idomin","Quopher","Idoric","Laemin","Zalwan","Ardak","Negin","Pimbin","Eryver","Halace","Merbul","Zalpos","Valfire","Perwrick","Quotran","Horrin","Teamin","Yenyver","Yarmo","Irarich","Nefer","Zalser","Pernad","Horemin","Barkas"],female:["Darcaryn","Vervyre","Risica","Grayra","Yescaryn","Qutina","Xiola","Gelalyn","Nemita","Fennys","Uvifira","Rosne","Belna","Uviwyse","Nedrana","Welsica","Erane","Odinys","Jayris","Nedfira","Kithris","Odiola","Kelelle","Nedlienne","Rosla","Gelbrix","Therri","Lesys","Qiara","Yeskis","Nesira","Sylgwen","Lezira","Fenprys","Sasys","Qudrey","Isabyn","Halie","Kelni","Marola","Diala","Gelola","Vabyn","Marri","Unala","Xikath","Eokath","Pruyola","Eolile","Quleigh","Wicaryn","Nedlile","Sane","Fentina","Havira","Zeneni","Gelprys","Kithtrix","Marula","Elizira","Xanleigh","Chenkath","Qiree","Thamgrace","Malyola","Xisica","Sylmita","Maezana","Gelcaryn","Yesree","Sacey","Ariris","Oracaryn","Xifira","Zenrana","Lelienne","Hilbyn","Jaysys","Unakath","Maeyola","Darara","Verlienne","Chenne","Qileigh","Paeola","Rosne","Eini","Xanla","Halyse","Thammia","Darphina","Idane","Qine","Kithlile","Erasica","Versica","Hilvyre","Grafira","Nene","Zefcey"]},surnames:["Conrett","Farnmann","Goldstrong","Stoneham","Gentlewater","Hawkrich","ceabsarn","baiggap","neerna","aiwdo","Underler","Kenver","Shurville","Cunningriddle","Foxmere","Goodmaker","airnsu","badgea","estip","hunchoom","Parger","Maccaster","Hopdrey","Northmore","Freemond","Ravenhead","cembee","ouwlags","daydaill","aiglaws","Otine","Steham","Paumour","Freehead","Holloburn","Eaglemore","ecceak","embip","treatchem","ootma","Stonenell","Gardibarry","Kendwin","Covingbeard","Nightmann","Covingstein","blastooph","bammiwl","daimbiggs","ainsuld","Dawmour","Thovan","Winton","Winterguard","Eaglemour","Webway","vumbook","eeytish","nirleatt","jairkuy","Marshgan","Beresning","Rutherdwell","Huntingland","Goldend","Augusttree","zaiggal","lonse","zulmou","urvougs","Freeclair","Nelrice","Boatdows","Augustcolt","Fishcolt","Southwood","harveng","neancawl","gaitchuph","freenchen","Remwens","Maumond","Conmers","Silverster","Bronzelow","Millmere","brarnsoungs","oobbiy","loukkuld","peebse","Kenvine","Caulrow","Holmont","Chapborne","Grimborne","Canborne","cearnuch","beensech","zeanco","grearvay"]},{name:"Elf",hair:{colors:["dark brown","ginger","green, moss like,","golden","blonde"],styles:["long","thick and full","thin","lucious","shoulder length"],notes:["flowing","perfect","beautiful","silky","smooth","soft looking","wispy"]},stature:{baseHeightInches:{male:64,female:64},baseWeight:{male:100,female:90},heightWeightRoll:{male:16,female:12},weightMultiplyer:{male:3,female:3}},firstNames:{male:["Tharaerion","Rochenion","Aranron","Bellfindad","Daerthuion","Laermaeon","Belmelien","Aearien","Caranion","Megildhon","Rilhil","Arandur","Laerlaereus","Suiyaon","Dorw","Indecion","Raeggos","Tëlthanële","Nostvantion","Gilphenond","Arfinil","Arangalad","Sidhnaethor","Risswe","Authcion","Laireastion","Melciniien","Cereyonil","Rinenfarasien","Taniien","Tanidil","Ovorien","Saelis","Kamaeas","Calpantdad","Sidholdur","Vercaunion","Narais","Tëriadien","Aeardur","Sadron","Bellfindon","Thandhiion","Elfindion","Faebaraddraug","Velemelion","Galasnenon","Daraphadien","Marsirn�n","Garion","Alyalathien","Habrisien","Meltulcon","Moreneus","Belleurdur","Laercaunthor","Laiquaadhamion","Orgolion","Aranion","Lythal","Aelanon","Athmelil","Siraththor","Mandur","Lithdaugthor","Algoldil","Locien","Rimeir","Aranthil","Berlathion","Talaluanil","Morimion","Melimdur","Kathonede","Nimwarthion","Revron","Taohdien","Mcinion","Ordhuddur","Aranar","�t�rdaedon","M�tayanin","Ridasnen","Bellmaeion","Tanfinion","Barbeliion","Bregiadir","Nithwe","Lanwaithien","Gonmumeluion","Cofvanton","Tanminaiion","Merimaeion","Melcarond","Urëvcon","Iauron","Calaion","Arranon","Malion","Metameluond"],female:["Cornennwen","Bronliniel","Silivaithiel","Inladiel","Rainardaaiel","Faehilima","Glanlarasse","Rosarainiel","Laidothiel","Althea","Erdirelde","Sidhmelmiriel","Glanpantiel","Caaithwen","Bronlathwen","Laurthaadiel","Morfainiel","Medronsta","Melsathiel","Geliriel","Eruira","Earvanna","Gwilladwen","Earwethwen","ethminaiel","Melidreninya","Halaialiel","Esadhiel","Quanladhthea","Enayavrae","Minutelwen","Melwen","Crateriel","Losglermamiwen","Araeleiel","Marwen","Lothnaeea","Eccaiel","Raina","Calrendaaiel","Sereniel","Aranlandeth","Iltithenniel","Raina","Geliranna","Daerathiel","Marana","Arasidhiel","Paneleiel","Aerdilea","Ahensinwen","Erudwen","Agdrannwen","Minueniniel","Sabariel","Halamariwen","Rainidrentithwen","Gelirda","Mintheriel","Sabarilla","Beriwen","Lostcistiel","Cireduriel","Eruanna","Eslairwen","Timeladiel","Vanipantaxa","Nionmana","Agdrannrae","Enasathaxa","Araniel","Serlatheth","Arasathwen","Galedethauiel","Ancassiel","Iotheriel","Selirrae","Sidhmelthiriel","Cuilnel","Aracistelde","Medasswen","Yathialwen","Broneththea","Daeralwen","Calenesima","Melelwen","Mendethiel","Adien","Gwilethiel","Earmorthea","Peddeththae","Melgaraya","Araethima","Minthernyl","Erdoththa","Builoteth","Invaiel","Amarien","Rhalinnwen","Niraniel"]},surnames:["Ealoos","Aeralinde","Isilitadar","Dlardilinil","Gwalond","Kevatholian","Cromlithe","Wermirdren","Tanelenta","Cuelenthar","Larlothion","Faelandalan","Lithvir","Kevatadar","Nelyaion","Aeralynnmyr","Taltaur","Tallinde","Haeval","Galathalthar","Undolinde","Isiliereeil","Landilinellyn","Celevanseer","Celeglinarin","Elertaur","Tantholseer","Galonmiel","Lassansel","Landilinlhen","Galanarseer","Galadhen","Ondoos","Orlinde","Tinulond","Eleros","Aldaren","Nelbrinthir","Aeradhen","Yrauvathar","Talthalas","Aldadel","Laeglinathar","Elennae","Sharondaerl","Kevatanrin","Gadilinonel","Aeradhen","Cutathdar","Mithyatinu","Undoloth","Aldaelon","Faelandalan","Celetanas","Marailal","Narthalina","Orvaul","Larendragthar","Mithestinu","Nallren","Felendil","Nartanseer","Nelmirtinu","Celelithsyr","Elenelon","Gwadel","Ordhen","Aeravathar","Naranial","Tathtaure","Elendel","Birron","Cualryl","Mithnardal","Vanelon","Elennae","Elensume","Lithlithe","Undoelon","Laranta","Tathvathar","Rhuieme","Oreth","Taldhen","Maldilinmyr","Dlarthandal","Faerondaerl","Curaidal","Taltaur","Toradragdal","Nalleme","Marairin","Naressel","Kitaththir","Kevaliththar","Elermin","Falalinde","Nallvathar","Nhadilinmae","Nalldel"]},{name:"Human",hair:{colors:["red","blonde","brown","black","auburn","ginger"],styles:["long","short","spiked","bobbed","shoulder length","mid length"],notes:["dry","unwashed","clean","messy","well kept","neat looking","thick","thin"]},stature:{baseHeightInches:{male:58,female:53},baseWeight:{male:120,female:85},heightWeightRoll:{male:20,female:20},weightMultiplyer:{male:5,female:5}},firstNames:{male:["Noah","Liam","Mason","Jacob","William","Ethan","James","Alexander","Michael","Benjamin","Elijah","Daniel","Aiden","Logan","Matthew","Lucas","Jackson","David","Oliver","Jayden","Joseph","Gabriel","Samuel","Carter","Anthony","John","Dylan","Luke","Henry","Andrew","Isaac","Christopher","Joshua","Wyatt","Sebastian","Owen","Caleb","Nathan","Ryan","Jack","Hunter","Levi","Christian","Jaxon","Julian","Landon","Grayson","Jonathan","Isaiah","Charles","Thomas","Aaron","Eli","Connor","Jeremiah","Cameron","Josiah","Adrian","Colton","Jordan","Brayden","Nicholas","Robert","Angel","Hudson","Lincoln","Evan","Dominic","Austin","Gavin","Nolan","Parker","Adam","Chase","Jace","Ian","Cooper","Easton","Kevin","Jose","Tyler","Brandon","Asher","Jaxson","Mateo","Jason","Ayden","Zachary","Carson","Xavier","Leo","Ezra","Bentley","Sawyer","Kayden","Blake","Nathaniel","Ryder","Theodore","Elias"],female:["Emma","Olivia","Sophia","Ava","Isabella","Mia","Abigail","Emily","Charlotte","Harper","Madison","Amelia","Elizabeth","Sofia","Evelyn","Avery","Chloe","Ella","Grace","Victoria","Aubrey","Scarlett","Zoey","Addison","Lily","Lillian","Natalie","Hannah","Aria","Layla","Brooklyn","Alexa","Zoe","Penelope","Riley","Leah","Audrey","Savannah","Allison","Samantha","Nora","Skylar","Camila","Anna","Paisley","Ariana","Ellie","Aaliyah","Claire","Violet","Stella","Sadie","Mila","Gabriella","Lucy","Arianna","Kennedy","Sarah","Madelyn","Eleanor","Kaylee","Caroline","Hazel","Hailey","Genesis","Kylie","Autumn","Piper","Maya","Nevaeh","Serenity","Peyton","Mackenzie","Bella","Eva","Taylor","Naomi","Aubree","Aurora","Melanie","Lydia","Brianna","Ruby","Katherine","Ashley","Alexis","Alice","Cora","Julia","Madeline","Faith","Annabelle","Alyssa","Isabelle","Vivian","Gianna","Quinn","Clara","Reagan","Khloe"]},surnames:["shadowmaw","softflayer","fistsinger","embercaller","featherglade","nosevalor","deadsky","whitbash","crestbrow","lowrock","youngvale","rosebeard","boulderstrike","masterore","saurstone","farbough","cragshot","clouddancer","peacedown","hellforest","fireleaf","nicklegrain","snakeshade","lonesnow","stouttail","honorgleam","clanvigor","fuseflayer","grassgrove","shadecrest","cliffdream","nicklejumper","hallowhunter","hawkbender","willowtrap","regalshine","bloodclaw","freestrength","stillsteel","phoenixrun","windtail","fistflow","rumblewind","humblecrusher","regalore","fireglide","mercer","cinderfall","oatsong","mildpeak","whitroot","marshwood","heartvigor","fogbender","youngthorne","barleydraft","lightweaver","nightsword","cloudgrove","wheattrack","strongbreeze","sharpgloom","dawnmane","summermoon","lunasnout","hallowmight","amberbrace","coventrack","whitblade","brighttrapper","farbrooke","pinemight","eaglebender","steeltail","spiritstalker","plainjumper","mossoak","heartsnow","wolfmaul","frozenmark","fallenmoon","boneglory","clanwoods","shadowchewer","steeloak","bearoak","rosebeam","earthriver","lunasword","seadream","marbletail","shieldsorrow","havenreaver","titancloud","hazeore","duskflayer","titantide","mildwatcher","embergrip","havenbrew","dreamheart"]},{name:"Gnome",hair:{colors:["red","blonde","brown","black","auburn","green","blue","pinkish","pink","ginger"],styles:["short","spiked","shoulder length","bobbed"],notes:["greasy","messy","dry looking","dirt caked"]},stature:{baseHeightInches:{male:36,female:34},baseWeight:{male:35,female:30},heightWeightRoll:{male:8,female:8},weightMultiplyer:{male:1,female:1}},firstNames:{male:["Aelfmaerfalca","Aluuarwin","Billfrid","Cadwealdwyn","Cranheardric","Cynegislaus","Cynesigelred","Derefert","Ecgbeorht","Feolheard","Fritheobat","Frithweard","Godfrith","Hereward","Humberth","Leodward","Leofgieson","Leuthhere","Odalldine","Osgoodwin","Saebeorht","Swidhere","Thancred","Tondbert","Trumheardred","Tunfranwill","Winstofferic","Aelweald","Aethelnoth","Asulfram","Baegenbel","Beorhtric","Beornfrid","Bothsige","Cenbehrt","Cranwine","Cristopher","Demetric","Dunsigelred","Eadwgawn","Eorkonwine","Forwartlin","Godfrith","Grimannoth","Irminric","Kromaite","Leodhorn","Piermundin","Sexhelwold","Thornhere","Tunbehrt","Ufegenwyl","Winnegils","Wynferthher","Aelfmaer","Aethelffert","Byrtfertur","Cenhelmheard","Ceolward","Coelfnothman","Cynebastus","Cynferth","DeAndelac","Eardbehrt","Ermidydd","Ermidyddin","Leofgiester","Leofingfrid","Ordbehrt","Raedherefrid","Sentweald","Torphing","Twrgadawg","Waerheahmund","Wiermund","Willinghear","Willivere","Wynfrith","Xavierct","Zachardlac","Aelfhelward","Alexzandaf","Arthachar","Beorhtsig","Beornmor","Beornwulf","Blachelhelm","Burgwulf","Ceafordecai","Cuthbert","Cuthfrith","Dafyddin","Drythbeorht","Ealgmund","Godfridfrith","Hirocwulf","Hunterfyn","Idheadulf","Jeriburghern","Kristoffert"],female:["Sadget","Vecky","Tinanora","Aby","Ava","Bena","Bre","Desha","Else","Emma","Eni","Erna","Gan","Gina","Ivie","Jan","Jodi","Joye","Kai","Kaia","Kita","Lina","Loie","Mami","Mya","Nady","Nel","Nira","Nora","Ora","Quie","Veda","Vee","Abi","Aby","Ami","Ann","Arra","Birah","Bre","Dei","Edena","Gen","Gwen","Gwena","Ija","Ilma","Joni","Kae","Kemi","Kerna","Kym","Lalia","Luli","Luna","Marah","Mia","Nala","Opal","Syd","Taryn","Zin","Zon","Alle","Amya","Ari","Arl","Avie","Bebi","Bia","Dova","Dwant","Eli","Eni","Hala","Ira","Jera","Kat","Kemya","Lal","Lala","Liz","Lola","Lona","Lula","Macie","Mail","Maja","Mami","Mara","Ren","Tru","Zin","Kacy","Kami","Leta","Loria","Lota","Maye","Mene","Mim"]},surnames:["glubkuc","fompill","zinkkiet","fednol","heddlys","slenkkymick","zodwienaa","wagamjeg","slibykwig","hubankly","lulmu","scaimzeen","wopni","daddlim","thadwu","phybblyveck","foddewet","afellnert","rigodnal","snahunglo","rebblag","zaibkar","theddnis","moproc","flamzo","sherooniep","nielbilall","shaimenkkap","defimbo","shucellbas","shedbi","gnallmig","snilbet","gladdnos","kneenkkest","bemdoogug","gummyrert","fluheebkess","fneenapwag","ienapwug","shidwull","knenka","makul","thunzu","laddlyg","snokmimal","gnaamwodoo","loonabbre","gibynsnot","shikikmy","gullmo","thipnor","blaingnu","taambal","flilbin","klanjuvess","wullmahell","zuginkkast","abobblist","gnabeddaip","middart","knobbreec","fevurt","lykwec","scopness","clorwekeg","thollmalass","afunsme","gnugemjir","fucanzuss","makel","smempeen","dolkoss","libblaa","manbel","gnullmisut","slavyni","fnimelnyl","cahapri","nuburwa","glabbnon","nurbuc","folbe","jinsnen","slyrwirt","clunsnekart","snaiddwaba","wefapra","glenaaprort","afommic","bladla","pibnill","gnimwon","lulvy","shunsna","knipwici","dallbyduc","fadoorba","dulyklyn","kliniddny"]},{name:"Half-Orc",hair:{colors:["black","brown"],styles:["long","lengthy","full and heavy","shaggy","patchy"],notes:["beaded","filthy","blood caked","mud stained"]},stature:{baseHeightInches:{male:58,female:43},baseWeight:{male:150,female:110},heightWeightRoll:{male:24,female:24},weightMultiplyer:{male:7,female:7}},firstNames:{male:["crot","tuzvran","udizvrash","lor","cibordrug","grirgot","griltrark","lazvre","dokis","craazvoth","doll","sokdorm","daltru","brezvrers","hil","khoktel","tun","argaaka","tram","hogdoch","tiltril","groasdazel","dulrars","grakhan","traardri","zarilror","holreth","buzirvaad","hestrat","hregho","haubaurgil","brevolrul","bradheg","treghoden","gosh","indrull","sistuu","cit","braungulem","undigel","drekdork","driktekorg","thubrak","orvo","kudhekach","gruustrach","crasded","tokhigak","biardril","thakiavar","troll","thingir","saash","aizriar","loboach","hukal","magdirk","hrork","troll","brur","crokingraurs","bokra","tedzai","zonvenull","gekaizvroll","kitro","brisdirk","unguk","niaderers","cozzo","hervaars","akhe","okhar","gnialri","lur","gazakren","doch","krit","kris","hek","thega","drogirg","bon","noakhonan","mogrukerk","dilredos","ervo","nezadrairm","cerukaad","eboanvill","hurs","noth","hik","silraull","luvevos","merg","thobroch","trakhim","trengoch","kraazrers"],female:["osable","brulto","ovevro","zobro","thesh","bimirgo","use","cax","pahrou","cox","feh","sheli","taybugo","nagla","fith","tutacre","bromlu","bamlo","zaynlax","buttu","sel","nadru","mago","pex","hoth","egodru","fabullith","odourli","doljku","shunabath","ciru","thecosh","bordi","brux","rhulreco","fih","zangoth","dadli","simri","sul","wuti","gozu","win","demix","velnol","dux","pedelri","visuhro","mesujkoul","dublu","hubin","nelo","feth","zosruo","sheljki","vosoba","kalrai","shigi","dun","vux","eghazrin","ruhge","feroltu","voth","fabi","have","dargou","irlo","shiglabi","hemo","sabouzayl","nalnox","vebuno","kighash","kainlu","shugido","anlon","wuth","rhusro","uglo","ilti","ponilra","pobruoth","corluode","rhelta","shonith","nodosh","rhuseclu","vorloux","deghu","kailta","suovesh","rese","tomgigath","brajkalel","dash","fumru","van","cozinco","etoth"]},surnames:["shadowmaw","softflayer","fistsinger","embercaller","featherglade","nosevalor","deadsky","whitbash","crestbrow","lowrock","youngvale","rosebeard","boulderstrike","masterore","saurstone","farbough","cragshot","clouddancer","peacedown","hellforest","fireleaf","nicklegrain","snakeshade","lonesnow","stouttail","honorgleam","clanvigor","fuseflayer","grassgrove","shadecrest","cliffdream","nicklejumper","hallowhunter","hawkbender","willowtrap","regalshine","bloodclaw","freestrength","stillsteel","phoenixrun","windtail","fistflow","rumblewind","humblecrusher","regalore","fireglide","cinderfall","oatsong","mildpeak","whitroot","marshwood","heartvigor","fogbender","youngthorne","barleydraft","lightweaver","nightsword","cloudgrove","wheattrack","strongbreeze","sharpgloom","dawnmane","summermoon","lunasnout","hallowmight","amberbrace","coventrack","whitblade","brighttrapper","farbrooke","pinemight","eaglebender","steeltail","spiritstalker","plainjumper","mossoak","heartsnow","wolfmaul","frozenmark","fallenmoon","boneglory","clanwoods","shadowchewer","steeloak","bearoak","rosebeam","earthriver","lunasword","seadream","marbletail","shieldsorrow","havenreaver","titancloud","hazeore","duskflayer","titantide","mildwatcher","embergrip","havenbrew","dreamheart"]},{name:"Half-Elf",hair:{colors:["dark brown","ginger","mossy green","deep gold","blonde"],styles:["long","thick and full","thin"],notes:["flowing","almost perfect","silky","smooth","soft looking","wispy","dry looking"]},stature:{baseHeightInches:{male:62,female:60},baseWeight:{male:110,female:90},heightWeightRoll:{male:16,female:16},weightMultiplyer:{male:5,female:5}},firstNames:{male:["Noah","Liam","Mason","Jacob","William","Ethan","James","Alexander","Michael","Benjamin","Elijah","Daniel","Aiden","Logan","Matthew","Lucas","Jackson","David","Oliver","Jayden","Joseph","Gabriel","Samuel","Carter","Anthony","John","Dylan","Luke","Henry","Andrew","Isaac","Christopher","Joshua","Wyatt","Sebastian","Owen","Caleb","Nathan","Ryan","Jack","Hunter","Levi","Christian","Jaxon","Julian","Landon","Grayson","Jonathan","Isaiah","Charles","Thomas","Aaron","Eli","Belleurdur","Laercaunthor","Laiquaadhamion","Orgolion","Aranion","Lythal","Aelanon","Athmelil","Siraththor","Mandur","Lithdaugthor","Algoldil","Locien","Rimeir","Aranthil","Berlathion","Talaluanil","Morimion","Melimdur","Kathonede","Nimwarthion","Revron","Taohdien","Mcinion","Ordhuddur","Aranar","�t�rdaedon","M�tayanin","Ridasnen","Bellmaeion","Tanfinion","Barbeliion","Bregiadir","Nithwe","Lanwaithien","Gonmumeluion","Cofvanton","Tanminaiion","Merimaeion","Melcarond","Urëvcon","Iauron","Calaion","Arranon","Malion","Metameluond"],female:["Cornennwen","Bronliniel","Silivaithiel","Inladiel","Rainardaaiel","Faehilima","Glanlarasse","Rosarainiel","Laidothiel","Althea","Erdirelde","Sidhmelmiriel","Glanpantiel","Caaithwen","Bronlathwen","Laurthaadiel","Morfainiel","Medronsta","Melsathiel","Geliriel","Eruira","Earvanna","Gwilladwen","Earwethwen","ethminaiel","Melidreninya","Halaialiel","Esadhiel","Quanladhthea","Enayavrae","Minutelwen","Melwen","Crateriel","Losglermamiwen","Araeleiel","Marwen","Lothnaeea","Eccaiel","Raina","Calrendaaiel","Sereniel","Aranlandeth","Iltithenniel","Raina","Geliranna","Daerathiel","Marana","Arasidhiel","Paneleiel","Aerdilea","Ahensinwen","Erudwen","Agdrannwen","Minueniniel","Sabariel","Halamariwen","Rainidrentithwen","Gelirda","Mintheriel","Arianna","Kennedy","Sarah","Madelyn","Eleanor","Kaylee","Caroline","Hazel","Hailey","Genesis","Kylie","Autumn","Piper","Maya","Nevaeh","Serenity","Peyton","Mackenzie","Bella","Eva","Taylor","Naomi","Aubree","Aurora","Melanie","Lydia","Brianna","Ruby","Katherine","Ashley","Alexis","Alice","Cora","Julia","Madeline","Faith","Annabelle","Alyssa","Isabelle","Vivian","Gianna","Quinn","Clara","Reagan","Khloe"]},surnames:["shadowmaw","softflayer","fistsinger","embercaller","featherglade","nosevalor","deadsky","whitbash","crestbrow","lowrock","youngvale","rosebeard","boulderstrike","masterore","saurstone","farbough","cragshot","clouddancer","peacedown","hellforest","fireleaf","nicklegrain","snakeshade","lonesnow","stouttail","honorgleam","clanvigor","fuseflayer","grassgrove","shadecrest","cliffdream","nicklejumper","hallowhunter","hawkbender","willowtrap","regalshine","bloodclaw","freestrength","stillsteel","phoenixrun","windtail","fistflow","rumblewind","humblecrusher","regalore","fireglide","cinderfall","oatsong","mildpeak","whitroot","marshwood","heartvigor","fogbender","Celetanas","Marailal","Narthalina","Orvaul","Larendragthar","Mithestinu","Nallren","Felendil","Nartanseer","Nelmirtinu","Celelithsyr","Elenelon","Gwadel","Ordhen","Aeravathar","Naranial","Tathtaure","Elendel","Birron","Cualryl","Mithnardal","Vanelon","Elennae","Elensume","Lithlithe","Undoelon","Laranta","Tathvathar","Rhuieme","Oreth","Taldhen","Maldilinmyr","Dlarthandal","Faerondaerl","Curaidal","Taltaur","Toradragdal","Nalleme","Marairin","Naressel","Kitaththir","Kevaliththar","Elermin","Falalinde","Nallvathar","Nhadilinmae","Nalldel"]}]}},SMbH:function(a,e){},lohG:function(a,e){},mr0L:function(a,e){a.exports={classes:[{name:"Barbarian",alignments:["NG","N","NE","CG","CN","CE"]},{name:"Bard",alignments:["LE","LN","LG","NG","N","NE","CG","CN","CE"]},{name:"Cleric",alignments:["LE","LN","LG","NG","N","NE","CG","CN","CE"]},{name:"Druid",alignments:["LN","NG","N","NE","CN"]},{name:"Fighter",alignments:["LE","LN","LG","NG","N","NE","CG","CN","CE"]},{name:"Monk",alignments:["LE","LN","LG"]},{name:"Paladin",alignments:["LG"]},{name:"Ranger",alignments:["LE","LN","LG","NG","N","NE","CG","CN","CE"]},{name:"Rogue",alignments:["LE","LN","LG","NG","N","NE","CG","CN","CE"]},{name:"Sorcerer",alignments:["LE","LN","LG","NG","N","NE","CG","CN","CE"]},{name:"Wizard",alignments:["LE","LN","LG","NG","N","NE","CG","CN","CE"]}]}}},["NHnr"]);
//# sourceMappingURL=app.ec0e0b2099df07911d4b.js.map