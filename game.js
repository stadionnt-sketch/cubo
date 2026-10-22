const BASE_ITEMS = [
  {id:'coal',name:'Уголь',icon:'⬢',rarity:'common',label:'Обычный',value:25,desc:'Топливо для первых шагов'},
  {id:'copper',name:'Медь',icon:'⬢',rarity:'common',label:'Обычный',value:45,desc:'Тёплый металл строителя'},
  {id:'iron',name:'Железо',icon:'⬢',rarity:'common',label:'Обычный',value:100,desc:'Надёжная основа крафта'},
  {id:'lapis',name:'Лазурит',icon:'◆',rarity:'uncommon',label:'Необычный',value:160,desc:'Синий камень зачарований'},
  {id:'quartz',name:'Кварц',icon:'◆',rarity:'uncommon',label:'Необычный',value:190,desc:'Светлый камень Нижнего мира'},
  {id:'amethyst',name:'Аметист',icon:'◆',rarity:'uncommon',label:'Необычный',value:230,desc:'Кристалл глубоких пещер'},
  {id:'redstone',name:'Редстоун',icon:'✦',rarity:'rare',label:'Редкий',value:300,desc:'Энергия для механизмов'},
  {id:'gold',name:'Золото',icon:'◆',rarity:'rare',label:'Редкий',value:420,desc:'Мягкий металл для обмена'},
  {id:'obsidian',name:'Обсидиан',icon:'⬢',rarity:'rare',label:'Редкий',value:600,desc:'Тёмный камень порталов'},
  {id:'enderpearl',name:'Жемчуг Края',icon:'●',rarity:'epic',label:'Эпический',value:900,desc:'След странника между мирами'},
  {id:'blaze',name:'Стержень ифрита',icon:'✹',rarity:'epic',label:'Эпический',value:1300,desc:'Искра огненной крепости'},
  {id:'shulker',name:'Панцирь шалкера',icon:'⬡',rarity:'epic',label:'Эпический',value:1600,desc:'Редкая защита из Края'},
  {id:'diamond',name:'Алмаз',icon:'◆',rarity:'legendary',label:'Легендарный',value:2400,desc:'Ценная руда глубинных шахт'},
  {id:'netherite',name:'Незерит',icon:'⬢',rarity:'legendary',label:'Легендарный',value:4500,desc:'Редкий материал из древних обломков'},
  {id:'totem',name:'Тотем бессмертия',icon:'♙',rarity:'legendary',label:'Легендарный',value:6200,desc:'Трофей опасного рейда'},
  {id:'elytra',name:'Элитры',icon:'⌁',rarity:'legendary',label:'Легендарный',value:9000,desc:'Редкий трофей города Края'},
  {id:'dragon',name:'Дыхание дракона',icon:'◉',rarity:'legendary',label:'Легендарный',value:7000,desc:'Сила последнего босса'},
  {id:'beacon',name:'Маяк',icon:'✦',rarity:'legendary',label:'Легендарный',value:12500,desc:'Сложный в изготовлении источник силы'}
];
const ITEMS = [...BASE_ITEMS, ...(window.CUBE_ITEMS_EXTRA || [])];
const SPRITE_IDS = {coal:896,copper:906,iron:904,lapis:900,quartz:901,amethyst:902,redstone:717,gold:908,obsidian:321,enderpearl:1115,blaze:1116,shulker:1292,diamond:898,netherite:909,totem:1291,elytra:862,dragon:1285,beacon:455,stone:1,deepslate:8,tuff:12,pale_oak_log:140,copper_ore:68,resin_clump:412,amethyst_block:88,sculk:429,copper_block:91,redstone_block:719,prismarine:562,quartz_block:482,trial_key:1484,copper_bulb:1459,echo_shard:1407,wind_charge:1215,shulker_box:581,heart_of_sea:1321,sniffer_egg:647,ominous_bottle:1487,ancient_debris:82,breeze_rod:1218,heavy_core:87,conduit:680,vault:1486,mace:1219,nether_star:1236,dragon_egg:437,enchanted_golden_apple:987,end_crystal:1277};
const SPRITE_POSITIONS = {1:'-0 -0',2:'-48px -0',4:'-144px -0',6:'-240px -0',8:'-336px -0',11:'-480px -0',12:'-528px -0',26:'-1200px -0',32:'-48px -48px',59:'-1344px -48px',62:'-48px -96px',63:'-96px -96px',68:'-336px -96px',74:'-624px -96px',78:'-816px -96px',81:'-960px -96px',82:'-1008px -96px',87:'-1248px -96px',88:'-1296px -96px',90:'-1392px -96px',91:'-0 -144px',92:'-48px -144px',93:'-96px -144px',134:'-624px -192px',135:'-672px -192px',136:'-720px -192px',137:'-768px -192px',138:'-816px -192px',139:'-864px -192px',140:'-912px -192px',141:'-960px -192px',142:'-1008px -192px',145:'-1152px -192px',146:'-1200px -192px',147:'-1248px -192px',193:'-576px -288px',194:'-624px -288px',195:'-672px -288px',213:'-96px -336px',321:'-912px -480px',326:'-1152px -480px',329:'-1296px -480px',342:'-480px -528px',343:'-528px -528px',367:'-240px -576px',412:'-960px -624px',424:'-96px -672px',429:'-336px -672px',434:'-576px -672px',435:'-624px -672px',437:'-720px -672px',440:'-864px -672px',433:'-528px -672px',455:'-144px -720px',482:'-0 -768px',521:'-432px -816px',562:'-960px -864px',568:'-1248px -864px',581:'-432px -912px',647:'-720px -1008px',680:'-864px -1056px',717:'-1200px -1104px',719:'-1296px -1104px',722:'-0 -1152px',724:'-96px -1152px',725:'-144px -1152px',726:'-192px -1152px',727:'-240px -1152px',728:'-288px -1152px',729:'-336px -1152px',730:'-384px -1152px',731:'-432px -1152px',748:'-1248px -1152px',862:'-960px -1344px',861:'-912px -1344px',866:'-1152px -1344px',883:'-528px -1392px',888:'-768px -1392px',896:'-1152px -1392px',898:'-1248px -1392px',899:'-1296px -1392px',900:'-1344px -1392px',901:'-1392px -1392px',902:'-0 -1440px',903:'-48px -1440px',904:'-96px -1440px',905:'-144px -1440px',906:'-192px -1440px',907:'-240px -1440px',908:'-288px -1440px',909:'-336px -1440px',986:'-1152px -1536px',987:'-1200px -1536px',1115:'-96px -1776px',1116:'-144px -1776px',1126:'-1344px -1824px',1128:'-0 -1872px',1213:'-1104px -1968px',1215:'-1200px -1968px',1218:'-1296px -1968px',1219:'-1344px -1968px',1229:'-384px -2016px',1230:'-432px -2016px',1235:'-672px -2016px',1236:'-720px -2016px',1248:'-1296px -2016px',1277:'-1248px -2064px',1278:'-1296px -2064px',1285:'-192px -2112px',1291:'-1200px -2304px',1292:'-1248px -2304px',1320:'-1104px -2352px',1321:'-1152px -2352px',1312:'-720px -2352px',1335:'-384px -2400px',1338:'-528px -2400px',1339:'-576px -2400px',1340:'-624px -2400px',1341:'-672px -2400px',1343:'-768px -2400px',1345:'-864px -2400px',1347:'-960px -2400px',1357:'-0 -2448px',1358:'-48px -2448px',1359:'-96px -2448px',1361:'-192px -2448px',1363:'-288px -2448px',1366:'-432px -2448px',1367:'-480px -2448px',1380:'-1104px -2448px',1407:'-960px -2496px',1459:'-576px -2592px',1484:'-336px -2640px',1486:'-432px -2640px',1487:'-480px -2640px'};
ITEMS.forEach(item=>{item.sprite=SPRITE_IDS[item.id]??item.sprite;item.spritePosition=SPRITE_POSITIONS[item.sprite]||'-0 -0';});
const ITEM_PRICE_SCALE={common:1.5,uncommon:3,rare:4,epic:5,legendary:8};
ITEMS.forEach(item=>{const scaled=item.value*ITEM_PRICE_SCALE[item.rarity];const step=scaled<1000?10:100;item.value=Math.round(scaled/step)*step;});
const uniqueItems=ITEMS.filter((item,index)=>ITEMS.findIndex(entry=>entry.id===item.id)===index);
ITEMS.splice(0,ITEMS.length,...uniqueItems);
const CASES = [
  {id:'free',name:'Зелёный луг',price:0,desc:'Бесплатный блок удачи для каждого',weights:{common:35,uncommon:30,rare:20,epic:12,legendary:3}},
  {id:'starter',name:'Сундук новичка',price:100,desc:'Первые ресурсы и шанс на редкую находку',weights:{common:35,uncommon:30,rare:20,epic:12,legendary:3},featured:true},
  {id:'builder',name:'Ящик строителя',price:200,desc:'Блоки, материалы и ценные трофеи',weights:{common:30,uncommon:29,rare:24,epic:12,legendary:5}},
  {id:'miner',name:'Кейс шахтёра',price:300,desc:'Руды и сокровища из глубин',weights:{common:25,uncommon:28,rare:26,epic:15,legendary:6}},
  {id:'forest',name:'Лесной сундук',price:550,desc:'Дерево, руда и находки леса',weights:{common:28,uncommon:29,rare:24,epic:14,legendary:5}},
  {id:'stone',name:'Каменоломня',price:1100,desc:'Больше редких блоков и руды',weights:{common:22,uncommon:28,rare:26,epic:17,legendary:7}},
  {id:'copper',name:'Медная камера',price:2000,desc:'Медь, механизмы и ключи испытаний',weights:{common:17,uncommon:25,rare:28,epic:21,legendary:9}},
  {id:'cave',name:'Глубокие пещеры',price:3200,desc:'Кристаллы, скалк и редкая руда',weights:{common:12,uncommon:21,rare:29,epic:26,legendary:12}},
  {id:'ocean',name:'Затонувший храм',price:4700,desc:'Морские блоки и сокровища глубин',weights:{common:10,uncommon:18,rare:29,epic:29,legendary:14}},
  {id:'trial',name:'Испытательная камера',price:6200,desc:'Награды за встречу с бризом',weights:{common:8,uncommon:16,rare:27,epic:32,legendary:17}},
  {id:'nether',name:'Крепость Незера',price:8200,desc:'Древние обломки и огненные трофеи',weights:{common:7,uncommon:14,rare:24,epic:34,legendary:21}},
  {id:'ancient',name:'Древний город',price:10500,desc:'Эхо, скалк и забытые артефакты',weights:{common:5,uncommon:12,rare:23,epic:35,legendary:25}},
  {id:'bastion',name:'Сокровищница бастиона',price:13000,desc:'Золото и трофеи пиглинов',weights:{common:4,uncommon:10,rare:21,epic:36,legendary:29}},
  {id:'mansion',name:'Лесной особняк',price:16000,desc:'Редкие трофеи опасного рейда',weights:{common:3,uncommon:9,rare:19,epic:37,legendary:32}},
  {id:'end',name:'Город Края',price:19500,desc:'Шалкеры, элитры и диковины Края',weights:{common:2,uncommon:7,rare:17,epic:38,legendary:36}},
  {id:'deepdark',name:'Бездна древнего города',price:23500,desc:'Самые редкие находки глубоких пещер',weights:{common:2,uncommon:5,rare:15,epic:38,legendary:40}},
  {id:'dragon',name:'Драконье святилище',price:28000,desc:'Трофеи последнего измерения',weights:{common:1,uncommon:4,rare:13,epic:37,legendary:45}},
  {id:'vault',name:'Древнее хранилище',price:34000,desc:'Лучшие шансы на легендарные блоки',weights:{common:1,uncommon:3,rare:11,epic:35,legendary:50}},
  {id:'mythic',name:'Архив миров',price:42000,desc:'Собрание ценностей из всех измерений',weights:{common:1,uncommon:2,rare:9,epic:33,legendary:55}}
];
const CASE_SHOWCASE_ITEMS = {free:'oak_log',starter:'coal',builder:'iron_block',miner:'diamond_ore',forest:'spruce_log',stone:'deepslate',copper:'copper_ore',cave:'amethyst_block',ocean:'prismarine',trial:'trial_key',nether:'ancient_debris',ancient:'echo_shard',bastion:'gold_block',mansion:'totem',end:'elytra',deepdark:'sculk',dragon:'dragon_egg',vault:'vault',mythic:'end_crystal'};
const COLLECTION_SETS = [
  {id:'starter-resources',name:'Первые ресурсы',desc:'Собери базовый набор шахтёра',items:['coal','copper','iron','stone','deepslate','oak_log'],reward:180},
  {id:'redstone-lab',name:'Лаборатория редстоуна',desc:'Механизмы и энергия для автоматизации',items:['redstone','redstone_block','copper_bulb','trial_key','wind_charge','echo_shard'],reward:420},
  {id:'edge-treasures',name:'Сокровища Края',desc:'Трофеи последнего измерения',items:['enderpearl','shulker','shulker_box','elytra','dragon','dragon_egg'],reward:900},
  {id:'legendary-vault',name:'Легендарное хранилище',desc:'Самые ценные находки коллекции',items:['diamond','netherite','totem','beacon','nether_star','enchanted_golden_apple'],reward:1500}
];
const DAILY_TASKS = [
  {id:'open-cases',type:'open',title:'Открой 3 кейса',target:3,reward:180},
  {id:'discover-items',type:'discover',title:'Найди 2 новых предмета',target:2,reward:220},
  {id:'sell-items',type:'sell',title:'Продай 2 находки',target:2,reward:160},
  {id:'upgrade-items',type:'upgrade',title:'Сделай 1 апгрейд',target:1,reward:260}
];
const ACHIEVEMENTS = [
  {id:'first-case',title:'Первый шаг',desc:'Открой первый кейс',metric:'opened',target:1,reward:100},
  {id:'case-run',title:'Серия исследователя',desc:'Открой 25 кейсов',metric:'opened',target:25,reward:350},
  {id:'collector',title:'Коллекционер',desc:'Собери 20 разных предметов',metric:'discovered',target:20,reward:500},
  {id:'upgrade-win',title:'Мастер улучшений',desc:'Выиграй 5 апгрейдов',metric:'upgradeWins',target:5,reward:650},
  {id:'craft-first',title:'Кузнец дубликатов',desc:'Создай усиленный предмет',metric:'crafted',target:1,reward:280},
  {id:'daily-streak',title:'Ритм шахтёра',desc:'Дойди до серии входов 7 дней',metric:'streak',target:7,reward:700}
];
const SEASON_MILESTONES = [
  {id:'season-open',title:'Разведка сезона',metric:'opened',target:10,reward:450},
  {id:'season-discover',title:'Новая глава коллекции',metric:'discovered',target:12,reward:600},
  {id:'season-upgrade',title:'Мастерская сезона',metric:'upgrades',target:4,reward:800}
];
const DEFAULT_PROFILE = {nickname:'Игрок',spent:0,opened:0,upgrades:0,upgradeWins:0,upgradeLosses:0,bestItemId:null,bestItemValue:0};
const DEFAULT_ENGAGEMENT = {daily:{day:null,progress:{},claimed:[]},login:{lastDate:null,streak:0,claimedDate:null},pity:0,setsClaimed:[],achievementsUnlocked:[],achievementsClaimed:[],season:{id:'wild-world-01',startedAt:0,stats:{opened:0,discovered:0,upgrades:0},claimed:[]},weekly:{week:null,score:0},crafted:0,dailyClaims:0,history:[]};
const DEFAULT_STATE = {balance:1000, inventory:[], discovered:[], pendingDrops:[], pendingCaseId:null,freeCaseReadyAt:0,profile:{...DEFAULT_PROFILE},engagement:{...DEFAULT_ENGAGEMENT}};
let state = loadState(); let selectedCase = CASES[0]; let opening = false;
let selectedSourceDropIds = []; let selectedTargetId = null; let selectedTargetMultiplier = null; let upgradeSpinning = false;
let upgradeBalanceStake=0;
let targetSearch = '';
let achievementNoticeQueue=[];let achievementNoticeActive=false;let pendingAchievementNavigation=false;
let pendingDrops = Array.isArray(state.pendingDrops) ? state.pendingDrops : [];
state.inventory=state.inventory.map(item=>{const definition=ITEMS.find(entry=>entry.id===item.id);if(!definition)return item;const {minimumSaleValue,...savedItem}=item;return {...savedItem,...definition,...(item.crafted?{name:item.name,value:item.value,desc:item.desc,crafted:true}:{}),dropId:item.dropId||`${item.id}-${Date.now()}-${Math.random().toString(36).slice(2)}`};});
let ysdk = null; let platformPaused = false; let gameReady = false; let readySignaled = false;
let audioContext = null;
let soundEnabled = localStorage.getItem('cubic-case-sound') !== 'off';
let musicEnabled = localStorage.getItem('cubic-case-music') !== 'off';
let musicGain = null; let musicTimer = null; let musicPlaying = false; let musicPhraseIndex = 0;
let activeTab = 'case';
let freeCaseTimer = null;
const $ = (selector) => document.querySelector(selector);
function freshDefaultState(){return {...DEFAULT_STATE,inventory:[],discovered:[],pendingDrops:[],profile:{...DEFAULT_PROFILE},engagement:normalizeEngagement(DEFAULT_ENGAGEMENT)};}
function normalizeProfile(profile){const source=profile&&typeof profile==='object'&&!Array.isArray(profile)?profile:{};const count=value=>Math.max(0,Math.floor(Number.isFinite(Number(value))?Number(value):0));const nickname=typeof source.nickname==='string'?source.nickname.trim().replace(/\s+/g,' ').slice(0,20):'';const upgradeWins=count(source.upgradeWins);const upgradeLosses=count(source.upgradeLosses);const bestItemId=ITEMS.some(item=>item.id===source.bestItemId)?source.bestItemId:null;const bestDefinition=ITEMS.find(item=>item.id===bestItemId);return {nickname:nickname||DEFAULT_PROFILE.nickname,spent:count(source.spent),opened:count(source.opened),upgrades:Math.max(count(source.upgrades),upgradeWins+upgradeLosses),upgradeWins,upgradeLosses,bestItemId,bestItemValue:Math.max(bestDefinition?.value||0,count(source.bestItemValue))};}
function dateKey(timestamp=Date.now()){const date=new Date(timestamp);return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;}
function weekKey(timestamp=Date.now()){const date=new Date(timestamp);const first=new Date(date.getFullYear(),0,1);return `${date.getFullYear()}-W${String(Math.ceil((((date-first)/86400000)+first.getDay()+1)/7)).padStart(2,'0')}`;}
function normalizeEngagement(value){
  const source=value&&typeof value==='object'&&!Array.isArray(value)?value:{};
  const day=dateKey();
  const savedDaily=source.daily&&typeof source.daily==='object'?source.daily:{};
  const daily=savedDaily.day===day?{day,progress:{...(savedDaily.progress||{})},claimed:Array.isArray(savedDaily.claimed)?savedDaily.claimed.filter(id=>DAILY_TASKS.some(task=>task.id===id)):[]}:{day,progress:{},claimed:[]};
  const savedSeason=source.season&&typeof source.season==='object'?source.season:{};
  const savedWeekly=source.weekly&&typeof source.weekly==='object'?source.weekly:{};
  const safeNumber=value=>Math.max(0,Math.floor(Number.isFinite(Number(value))?Number(value):0));
  const seasonId=/^wild-world-\d+$/.test(savedSeason.id||'')?savedSeason.id:'wild-world-01';
  return {daily,login:{lastDate:typeof source.login?.lastDate==='string'?source.login.lastDate:null,streak:safeNumber(source.login?.streak),claimedDate:typeof source.login?.claimedDate==='string'?source.login.claimedDate:null},pity:Math.min(7,safeNumber(source.pity)),setsClaimed:Array.isArray(source.setsClaimed)?source.setsClaimed.filter(id=>COLLECTION_SETS.some(set=>set.id===id)):[],achievementsUnlocked:Array.isArray(source.achievementsUnlocked)?source.achievementsUnlocked.filter(id=>ACHIEVEMENTS.some(item=>item.id===id)):[],achievementsClaimed:Array.isArray(source.achievementsClaimed)?source.achievementsClaimed.filter(id=>ACHIEVEMENTS.some(item=>item.id===id)):[],season:{id:seasonId,startedAt:Number(savedSeason.startedAt)||Date.now(),stats:{opened:safeNumber(savedSeason.stats?.opened),discovered:safeNumber(savedSeason.stats?.discovered),upgrades:safeNumber(savedSeason.stats?.upgrades)},claimed:Array.isArray(savedSeason.claimed)?savedSeason.claimed.filter(id=>SEASON_MILESTONES.some(item=>item.id===id)):[]},weekly:{week:typeof savedWeekly.week==='string'&&savedWeekly.week===weekKey()?savedWeekly.week:weekKey(),score:savedWeekly.week===weekKey()?safeNumber(savedWeekly.score):0},crafted:safeNumber(source.crafted),dailyClaims:safeNumber(source.dailyClaims),history:Array.isArray(source.history)?source.history.slice(0,30).map(entry=>({label:String(entry.label||'').slice(0,80),icon:String(entry.icon||'✦').slice(0,2),time:Number(entry.time)||Date.now(),value:safeNumber(entry.value)})):[]};
}
function loadState(){
  try{
    const stored=JSON.parse(localStorage.getItem('cubic-case-state')||'{}');
    const saved=stored&&typeof stored==='object'&&!Array.isArray(stored)?stored:{};
    const validItem=item=>item&&typeof item==='object'&&!Array.isArray(item)&&ITEMS.some(definition=>definition.id===item.id);
    const inventory=Array.isArray(saved.inventory)?saved.inventory.filter(validItem):[];
    const pendingDrops=Array.isArray(saved.pendingDrops)?saved.pendingDrops.filter(validItem):[];
    const discovered=Array.isArray(saved.discovered)?[...new Set(saved.discovered.filter(id=>ITEMS.some(item=>item.id===id)))]:[];
    const rawBalance=Number(saved.balance);
    const balance=saved.balance!==null&&Number.isFinite(rawBalance)&&rawBalance>=0?Math.floor(rawBalance):DEFAULT_STATE.balance;
    const rawFreeCaseReadyAt=Number(saved.freeCaseReadyAt);
    const freeCaseReadyAt=Number.isFinite(rawFreeCaseReadyAt)&&rawFreeCaseReadyAt>0?rawFreeCaseReadyAt:0;
    const pendingCaseId=CASES.some(item=>item.id===saved.pendingCaseId)?saved.pendingCaseId:null;
    const profile=normalizeProfile(saved.profile);
    const engagement=normalizeEngagement(saved.engagement);
    if(!profile.bestItemId){
      const receivedIds=[...discovered,...inventory.map(item=>item.id),...pendingDrops.map(item=>item.id)];
      const best=ITEMS.filter(item=>receivedIds.includes(item.id)).sort((a,b)=>b.value-a.value)[0];
      if(best)profile.bestItemId=best.id;
    }
    return {...freshDefaultState(),...saved,balance,inventory,discovered,pendingDrops,freeCaseReadyAt,pendingCaseId,profile,engagement};
  }catch{return freshDefaultState();}
}
function saveState(){ state.profile=normalizeProfile(state.profile);state.engagement=normalizeEngagement(state.engagement);state.pendingDrops=pendingDrops; state.pendingCaseId=pendingDrops.length?selectedCase?.id||state.pendingCaseId:null; localStorage.setItem('cubic-case-state',JSON.stringify(state)); }
function fmt(n){ return new Intl.NumberFormat('ru-RU').format(n); }
function syncEngagement(){
  const today=dateKey();
  const engagement=state.engagement=normalizeEngagement(state.engagement);
  const login=engagement.login;
  if(login.lastDate!==today){
    const yesterday=dateKey(Date.now()-86400000);
    login.streak=login.lastDate===yesterday?Math.min(30,login.streak+1):1;
    login.lastDate=today;
    login.claimedDate=null;
  }
  if(engagement.weekly.week!==weekKey()){engagement.weekly={week:weekKey(),score:0};}
  if(Date.now()-engagement.season.startedAt>=30*86400000){const nextSeason=Number(engagement.season.id.split('-').at(-1))+1;engagement.season={id:`wild-world-${String(nextSeason).padStart(2,'0')}`,startedAt:Date.now(),stats:{opened:0,discovered:0,upgrades:0},claimed:[]};}
  return engagement;
}
function addHistory(label,icon='✦',value=0){state.engagement.history.unshift({label,icon,time:Date.now(),value:Math.max(0,Math.floor(Number(value)||0))});state.engagement.history=state.engagement.history.slice(0,30);}
function addScore(amount){state.engagement.weekly.score=Math.max(0,state.engagement.weekly.score+Math.max(0,Math.floor(amount||0)));}
function advanceDaily(type,amount=1){const tasks=DAILY_TASKS.filter(task=>task.type===type);tasks.forEach(task=>{const current=Number(state.engagement.daily.progress[task.id])||0;state.engagement.daily.progress[task.id]=Math.min(task.target,current+amount);});}
function advanceSeason(type,amount=1){const metric=type==='open'?'opened':type==='discover'?'discovered':type==='upgrade'?'upgrades':null;if(metric)state.engagement.season.stats[metric]+=Math.max(0,amount);}
function dailyTaskProgress(task){return Math.min(task.target,Number(state.engagement.daily.progress[task.id])||0);}
function claimDailyTask(id){syncEngagement();const task=DAILY_TASKS.find(item=>item.id===id);if(!task||state.engagement.daily.claimed.includes(id)||dailyTaskProgress(task)<task.target)return;state.engagement.daily.claimed.push(id);state.engagement.dailyClaims++;state.balance+=task.reward;addScore(25);addHistory(`Ежедневная цель: ${task.title}`,'✓',task.reward);saveState();render();playSound('win');toast(`Цель выполнена: +${fmt(task.reward)} кристаллов`);}
function claimLoginReward(){syncEngagement();const today=dateKey();const login=state.engagement.login;if(login.claimedDate===today)return;const reward=100+Math.min(6,Math.max(0,login.streak-1))*50;login.claimedDate=today;state.balance+=reward;addScore(15);addHistory(`Награда за серию входов · день ${login.streak}`,'☀',reward);saveState();render();playSound('win');toast(`Серия ${login.streak} дней: +${fmt(reward)} кристаллов`);}
function collectionSetProgress(set){return set.items.filter(id=>state.discovered.includes(id)).length;}
function claimCollectionSet(id){const set=COLLECTION_SETS.find(item=>item.id===id);if(!set||state.engagement.setsClaimed.includes(id)||collectionSetProgress(set)<set.items.length)return;state.engagement.setsClaimed.push(id);state.balance+=set.reward;addScore(60);addHistory(`Набор собран: ${set.name}`,'◆',set.reward);saveState();render();playSound('win');toast(`Набор собран: +${fmt(set.reward)} кристаллов`);}
function metricValue(metric){switch(metric){case'opened':return state.profile.opened;case'discovered':return state.discovered.length;case'upgradeWins':return state.profile.upgradeWins;case'crafted':return state.engagement.crafted;case'streak':return state.engagement.login.streak;default:return 0;}}
function achievementProgress(achievement){return Math.min(achievement.target,metricValue(achievement.metric));}
function availableRewardCount(){
  const daily=DAILY_TASKS.filter(task=>dailyTaskProgress(task)>=task.target&&!state.engagement.daily.claimed.includes(task.id)).length;
  const login=state.engagement.login.claimedDate===dateKey()?0:1;
  const sets=COLLECTION_SETS.filter(set=>collectionSetProgress(set)>=set.items.length&&!state.engagement.setsClaimed.includes(set.id)).length;
  const achievements=ACHIEVEMENTS.filter(item=>achievementProgress(item)>=item.target&&!state.engagement.achievementsClaimed.includes(item.id)).length;
  const season=SEASON_MILESTONES.filter(item=>seasonProgress(item)>=item.target&&!state.engagement.season.claimed.includes(item.id)).length;
  return daily+login+sets+achievements+season;
}
function checkAchievementUnlocks(){
  const unlocked=state.engagement.achievementsUnlocked;
  const newlyUnlocked=ACHIEVEMENTS.filter(item=>achievementProgress(item)>=item.target&&!unlocked.includes(item.id)&&!state.engagement.achievementsClaimed.includes(item.id));
  newlyUnlocked.forEach(item=>{unlocked.push(item.id);achievementNoticeQueue.push(item);addHistory(`Достижение открыто: ${item.title}`,'★');});
  if(newlyUnlocked.length)saveState();
  if(newlyUnlocked.length&&!achievementNoticeActive)setTimeout(showNextAchievementNotice,0);
}
function showNextAchievementNotice(){
  if(achievementNoticeActive||!achievementNoticeQueue.length)return;
  const achievement=achievementNoticeQueue.shift();
  const notice=$('#achievementNotice');
  $('#achievementNoticeTitle').textContent=achievement.title;
  notice.classList.remove('hidden');
  requestAnimationFrame(()=>notice.classList.add('show'));
  achievementNoticeActive=true;
  playSound('achievement');
  window.achievementNoticeTimer=setTimeout(hideAchievementNotice,6500);
}
function hideAchievementNotice(){
  clearTimeout(window.achievementNoticeTimer);
  const notice=$('#achievementNotice');
  notice.classList.remove('show');
  setTimeout(()=>{notice.classList.add('hidden');achievementNoticeActive=false;showNextAchievementNotice();},220);
}
function openAchievementSection(){
  hideAchievementNotice();
  if(!$('#modalBackdrop').classList.contains('hidden')){pendingAchievementNavigation=true;toast('Распредели выпавшие предметы, затем открою достижения');return;}
  navigateToAchievementPanel();
}
function navigateToAchievementPanel(){
  switchTab('profile');
  requestAnimationFrame(()=>{const panel=$('#achievementPanel');panel.scrollIntoView({behavior:'smooth',block:'center'});panel.classList.add('achievement-destination');setTimeout(()=>panel.classList.remove('achievement-destination'),1800);});
}
function claimAchievement(id){const achievement=ACHIEVEMENTS.find(item=>item.id===id);if(!achievement||state.engagement.achievementsClaimed.includes(id)||achievementProgress(achievement)<achievement.target)return;if(!state.engagement.achievementsUnlocked.includes(id))state.engagement.achievementsUnlocked.push(id);state.engagement.achievementsClaimed.push(id);state.balance+=achievement.reward;addScore(50);addHistory(`Достижение: ${achievement.title}`,'★',achievement.reward);saveState();render();playSound('win');toast(`Достижение получено: +${fmt(achievement.reward)} кристаллов`);}
function seasonProgress(milestone){return Math.min(milestone.target,Number(state.engagement.season.stats[milestone.metric])||0);}
function claimSeasonMilestone(id){const milestone=SEASON_MILESTONES.find(item=>item.id===id);if(!milestone||state.engagement.season.claimed.includes(id)||seasonProgress(milestone)<milestone.target)return;state.engagement.season.claimed.push(id);state.balance+=milestone.reward;addScore(75);addHistory(`Сезонная награда: ${milestone.title}`,'✦',milestone.reward);saveState();render();playSound('win');toast(`Сезонная награда: +${fmt(milestone.reward)} кристаллов`);}
function nextGoal(){
  const daily=DAILY_TASKS.find(task=>!state.engagement.daily.claimed.includes(task.id)&&dailyTaskProgress(task)<task.target);
  if(daily)return `${daily.title} · ${dailyTaskProgress(daily)}/${daily.target}`;
  const set=COLLECTION_SETS.find(item=>!state.engagement.setsClaimed.includes(item.id)&&collectionSetProgress(item)<item.items.length);
  if(set)return `${set.name} · ${collectionSetProgress(set)}/${set.items.length}`;
  const milestone=SEASON_MILESTONES.find(item=>!state.engagement.season.claimed.includes(item.id)&&seasonProgress(item)<item.target);
  if(milestone)return `${milestone.title} · ${seasonProgress(milestone)}/${milestone.target}`;
  const achievement=ACHIEVEMENTS.find(item=>!state.engagement.achievementsClaimed.includes(item.id)&&achievementProgress(item)<item.target);
  return achievement?`${achievement.title} · ${achievementProgress(achievement)}/${achievement.target}`:'Все цели выполнены — продолжай собирать редкости';
}
function getAudioContext(){ const AudioContextClass=window.AudioContext||window.webkitAudioContext;if(!AudioContextClass)return null;audioContext ||= new AudioContextClass();if(audioContext.state==='suspended')audioContext.resume().catch(()=>{});return audioContext; }
function ensureAudio(){ return soundEnabled?getAudioContext():null; }
function playTone(ctx,frequency,delay,duration,wave='sine',volume=.04,endingFrequency=frequency,output=ctx.destination){ const oscillator=ctx.createOscillator();const gain=ctx.createGain();const start=ctx.currentTime+delay;oscillator.type=wave;oscillator.frequency.setValueAtTime(frequency,start);if(endingFrequency!==frequency)oscillator.frequency.exponentialRampToValueAtTime(endingFrequency,start+duration);gain.gain.setValueAtTime(.0001,start);gain.gain.exponentialRampToValueAtTime(volume,start+.012);gain.gain.exponentialRampToValueAtTime(.0001,start+duration);oscillator.connect(gain);gain.connect(output);oscillator.start(start);oscillator.stop(start+duration+.01); }
function playSound(kind){ const ctx=ensureAudio();if(!ctx)return;const note=(frequency,delay,duration,wave='sine',volume=.04,end=frequency)=>playTone(ctx,frequency,delay,duration,wave,volume,end);switch(kind){case'case':note(330,0,.14,'triangle',.035,520);note(520,.12,.2,'triangle',.045,780);break;case'upgrade':note(440,0,.11,'triangle',.035,620);note(620,.08,.14,'triangle',.035,880);break;case'win':[523,659,784,1047].forEach((frequency,index)=>note(frequency,index*.09,.24,'triangle',.05));break;case'achievement':[659,784,988,1318].forEach((frequency,index)=>note(frequency,index*.085,.32,'triangle',.055));break;case'loss':note(440,0,.18,'sawtooth',.025,370);note(370,.16,.3,'triangle',.03,220);break;case'sell':note(880,0,.1,'sine',.04,1175);note(1175,.08,.14,'sine',.035,1568);break;case'tab':note(660,0,.07,'sine',.025);break;case'quantity':note(740,0,.055,'square',.018);break;}}
function updateSoundButton(){ const button=$('#soundButton');button.textContent=soundEnabled?'♫':'♪';button.title=soundEnabled?'Выключить звуки':'Включить звуки';button.setAttribute('aria-label',button.title);button.setAttribute('aria-pressed',String(soundEnabled)); }
function toggleSound(){soundEnabled=!soundEnabled;localStorage.setItem('cubic-case-sound',soundEnabled?'on':'off');updateSoundButton();if(soundEnabled)playSound('tab');}
const MUSIC_PHRASES=[
  {chord:[130.81,164.81,196],melody:[523.25,392,440,659.25,587.33,440,392,329.63,392,523.25,587.33,392,329.63,293.66,392,440]},
  {chord:[110,146.83,174.61],melody:[440,523.25,587.33,392,440,329.63,392,523.25,587.33,659.25,523.25,440,392,329.63,293.66,392]},
  {chord:[116.54,146.83,174.61],melody:[466.16,392,349.23,523.25,466.16,392,329.63,349.23,392,466.16,523.25,392,349.23,329.63,293.66,349.23]},
  {chord:[98,130.81,164.81],melody:[392,493.88,587.33,440,392,329.63,349.23,392,440,523.25,493.88,392,349.23,293.66,329.63,392]}
];
function scheduleMusicPhrase(){
  if(!musicEnabled||!musicPlaying||!audioContext||!musicGain)return;
  const ctx=audioContext;const phrase=MUSIC_PHRASES[musicPhraseIndex%MUSIC_PHRASES.length];const beat=.48;
  phrase.chord.forEach((frequency,index)=>playTone(ctx,frequency,index*.035,7.7,'sine',.0028,frequency,musicGain));
  phrase.melody.forEach((frequency,index)=>{if(frequency)playTone(ctx,frequency,index*beat,.38,'triangle',.0105,frequency,musicGain);});
  musicPhraseIndex++;
  musicTimer=setTimeout(scheduleMusicPhrase,phrase.melody.length*beat*1000+500);
}
function startBackgroundMusic(){
  const ctx=getAudioContext();if(!musicEnabled||!ctx||musicPlaying)return;
  musicGain=ctx.createGain();musicGain.gain.setValueAtTime(.0001,ctx.currentTime);musicGain.gain.exponentialRampToValueAtTime(.8,ctx.currentTime+.65);musicGain.connect(ctx.destination);
  musicPlaying=true;scheduleMusicPhrase();
}
function stopBackgroundMusic(){
  clearTimeout(musicTimer);musicTimer=null;musicPlaying=false;
  if(musicGain&&audioContext){musicGain.gain.cancelScheduledValues(audioContext.currentTime);musicGain.gain.setTargetAtTime(.0001,audioContext.currentTime,.12);musicGain=null;}
}
function updateMusicButton(){const button=$('#musicButton');button.textContent=musicEnabled?'♫':'♪';button.title=musicEnabled?'Выключить музыку':'Включить музыку';button.setAttribute('aria-label',button.title);button.setAttribute('aria-pressed',String(musicEnabled));}
function toggleMusic(){musicEnabled=!musicEnabled;localStorage.setItem('cubic-case-music',musicEnabled?'on':'off');if(musicEnabled)startBackgroundMusic();else stopBackgroundMusic();updateMusicButton();}
function recordBestItem(item){const best=ITEMS.find(entry=>entry.id===state.profile.bestItemId);const currentValue=Math.max(best?.value||0,state.profile.bestItemValue||0);if(!best||item.value>currentValue){state.profile.bestItemId=item.id;state.profile.bestItemValue=item.value;}}
function renderDailyPanel(){
  const engagement=state.engagement;
  const login=engagement.login;
  const today=dateKey();
  const tasks=DAILY_TASKS.map(task=>{const progress=dailyTaskProgress(task);const claimed=engagement.daily.claimed.includes(task.id);const ready=!claimed&&progress>=task.target;return `<div class="goal-row ${claimed?'done':''} ${ready?'reward-ready':''}"><div><b>${task.title}</b><small>${progress}/${task.target} · награда ${fmt(task.reward)} ✦</small></div><button class="compact-action" data-claim-daily="${task.id}" ${claimed||progress<task.target?'disabled':''}>${claimed?'Получено':'Забрать'}</button></div>`;}).join('');
  const loginReady=login.claimedDate!==today;
  $('#dailyPanel').innerHTML=`<p class="eyebrow">РИТМ ИГРЫ</p><div class="engagement-title"><h3>Ежедневные цели</h3><span class="streak-badge">Серия ${login.streak} дн.</span></div><div class="login-reward ${loginReady?'reward-ready':''}"><span>Награда за вход сегодня</span><b>${loginReady?fmt(100+Math.min(6,Math.max(0,login.streak-1))*50)+' ✦':'Получено'}</b><button class="compact-action" data-claim-login ${loginReady?'':'disabled'}>${loginReady?'Забрать':'Готово'}</button></div><div class="goal-list">${tasks}</div><div class="next-goal"><span>Ближайшая цель</span><b>${nextGoal()}</b></div>`;
}
function renderSeasonPanel(){
  const milestones=SEASON_MILESTONES.map(item=>{const progress=seasonProgress(item);const claimed=state.engagement.season.claimed.includes(item.id);const ready=!claimed&&progress>=item.target;return `<div class="goal-row ${claimed?'done':''} ${ready?'reward-ready':''}"><div><b>${item.title}</b><small>${progress}/${item.target} · +${fmt(item.reward)} ✦</small></div><button class="compact-action" data-claim-season="${item.id}" ${claimed||progress<item.target?'disabled':''}>${claimed?'Получено':'Забрать'}</button></div>`;}).join('');
  const season=state.engagement.season;
  const seasonNumber=String(Number(season.id.split('-').at(-1))||1).padStart(2,'0');
  const daysLeft=Math.max(1,Math.ceil((season.startedAt+30*86400000-Date.now())/86400000));
  $('#seasonPanel').innerHTML=`<p class="eyebrow">СЕЗОН ${seasonNumber} · ДИКИЙ МИР</p><div class="engagement-title"><h3>Сезонная экспедиция</h3><span class="season-score">${daysLeft} дн. осталось</span></div><p class="panel-note">Выполняй вехи сезона и собирай кристаллы. Экспедиция длится 30 дней.</p><div class="goal-list">${milestones}</div>`;
}
function renderAchievementPanel(){
  const achievements=ACHIEVEMENTS.map(item=>{const progress=achievementProgress(item);const claimed=state.engagement.achievementsClaimed.includes(item.id);const ready=!claimed&&progress>=item.target;return `<div class="achievement-row ${claimed?'done':''} ${ready?'reward-ready':''}"><span class="achievement-mark">${claimed?'✓':'★'}</span><div><b>${item.title}</b><small>${item.desc} · ${progress}/${item.target}</small></div><button class="compact-action" data-claim-achievement="${item.id}" ${claimed||progress<item.target?'disabled':''}>${claimed?'Получено':'Забрать'}</button></div>`;}).join('');
  $('#achievementPanel').innerHTML=`<p class="eyebrow">ДОЛГИЕ ЦЕЛИ</p><div class="engagement-title"><h3>Достижения</h3><span class="season-score">${state.engagement.achievementsClaimed.length}/${ACHIEVEMENTS.length}</span></div><div class="achievement-list">${achievements}</div>`;
}
function renderLeaguePanel(){
  const score=state.engagement.weekly.score;
  const ranks=[{name:'Наблюдатель',min:0,color:'Обычный'},{name:'Шахтёр',min:250,color:'Необычный'},{name:'Инженер',min:700,color:'Редкий'},{name:'Искатель Края',min:1400,color:'Эпический'},{name:'Хранитель миров',min:2600,color:'Легендарный'}];
  const rank=ranks.slice().reverse().find(item=>score>=item.min)||ranks[0];
  const next=ranks.find(item=>item.min>score);
  $('#leaguePanel').innerHTML=`<p class="eyebrow">НЕДЕЛЬНАЯ ЛИГА</p><div class="engagement-title"><h3>Лига шахтёров</h3><span class="season-score">${fmt(score)} очк.</span></div><p class="panel-note">Твой результат сохраняется на устройстве и обновляется в начале новой недели.</p><div class="league-rank"><span>Текущий ранг</span><b>${rank.name}</b><small>${next?`До следующего ранга ${fmt(next.min-score)} очков`:'Максимальный ранг сезона'}</small></div><div class="league-thresholds">${ranks.map(item=>`<span class="${score>=item.min?'active':''}">${item.name} · ${fmt(item.min)}</span>`).join('')}</div>`;
}
function renderHistoryPanel(){
  const entries=state.engagement.history.slice(0,8).map(entry=>`<div class="history-row"><span>${entry.icon}</span><div><b>${entry.label}</b><small>${new Date(entry.time).toLocaleString('ru-RU',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'})}${entry.value?` · ${fmt(entry.value)} ✦`:''}</small></div></div>`).join('');
  $('#historyPanel').innerHTML=`<p class="eyebrow">ЛЕНТА ДЕЙСТВИЙ</p><div class="engagement-title"><h3>История</h3><span class="season-score">${state.engagement.history.length}</span></div><div class="history-list">${entries||'<p class="profile-empty">Здесь появятся открытия, продажи и награды.</p>'}</div>`;
}
function renderProfile(){const profile=state.profile;$('#profileGreeting').textContent=profile.nickname||'Игрок';const input=$('#nicknameInput');if(document.activeElement!==input)input.value=profile.nickname||'Игрок';$('#statSpent').textContent=`${fmt(profile.spent||0)} ✦`;$('#statOpened').textContent=fmt(profile.opened||0);$('#statUpgrades').textContent=fmt(profile.upgrades||0);$('#statUpgradeWins').textContent=fmt(profile.upgradeWins||0);$('#statUpgradeLosses').textContent=fmt(profile.upgradeLosses||0);const best=ITEMS.find(item=>item.id===profile.bestItemId);$('#profileBestItem').innerHTML=best?`<span class="profile-best-icon has-sprite" style="--sprite-position:${best.spritePosition};color:${color(best.rarity)}"></span><div class="profile-best-info"><b>${profile.bestItemValue>best.value?`${best.name} · усиленный`:best.name}</b><span>${fmt(Math.max(profile.bestItemValue,best.value))} ✦</span></div>`:'<span class="profile-empty">Открой кейс, чтобы получить первую находку.</span>';renderDailyPanel();renderSeasonPanel();renderAchievementPanel();renderLeaguePanel();renderHistoryPanel();const rewardCount=availableRewardCount();const badge=$('#profileRewardCount');badge.textContent=rewardCount?String(rewardCount):'◉';badge.classList.toggle('has-reward',rewardCount>0);badge.setAttribute('aria-label',rewardCount?`${rewardCount} наград доступно`:'Профиль');}
function render(){ syncEngagement(); $('#balance').textContent=fmt(state.balance); $('#inventoryCount').textContent=state.inventory.length; $('#collectionCount').textContent=`${state.discovered.length}/${ITEMS.length}`; $('#collectionProgress').textContent=`${state.discovered.length} из ${ITEMS.length}`; $('#inventoryTotal').textContent=`${fmt(state.inventory.reduce((sum,item)=>sum+item.value,0))} ✦`; $('#caseCount').textContent=String(CASES.length).padStart(2,'0'); $('#openHeroButton').innerHTML=`<span>Открыть кейс</span><b>${fmt(CASES[1].price)} ✦</b>`; renderCases(); renderInventory(); renderCollection(); renderUpgrade(); checkAchievementUnlocks();renderProfile(); saveState(); }
function caseItemPool(c){ return c.price?ITEMS.filter(item=>item.value>=c.price*.3&&item.value<=c.price*2):ITEMS; }
function effectiveCaseWeights(c){
  const available=Object.entries(c.weights).filter(([rarity])=>caseItemPool(c).some(item=>item.rarity===rarity));
  const total=available.reduce((sum,[,weight])=>sum+weight,0);
  const normalized=available.map(([rarity,weight])=>({rarity,exact:weight/total*100,weight:Math.floor(weight/total*100)}));
  let remainder=100-normalized.reduce((sum,item)=>sum+item.weight,0);
  for(const item of normalized.slice().sort((a,b)=>(b.exact-b.weight)-(a.exact-a.weight)).slice(0,remainder))item.weight++;
  return normalized;
}
function oddsMarkup(c){ const labels={common:'Обычный',uncommon:'Необычный',rare:'Редкий',epic:'Эпический',legendary:'Легендарный'}; return effectiveCaseWeights(c).map(({rarity,weight})=>`<span class="odds-${rarity}">${labels[rarity]} ${weight}%</span>`).join(' · '); }
function caseDropChances(c){
  const eligible=caseItemPool(c);
  const pityPool=c.price>0&&state.engagement.pity>=7?eligible.filter(item=>item.value>=c.price):[];
  if(pityPool.length){
    const scores=pityPool.map(item=>1/Math.sqrt(item.value));
    const total=scores.reduce((sum,score)=>sum+score,0);
    return pityPool.map((item,index)=>({item,probability:scores[index]/total}));
  }
  const rarityPools=new Map();
  for(const item of eligible){if(!rarityPools.has(item.rarity))rarityPools.set(item.rarity,[]);rarityPools.get(item.rarity).push(item);}
  const rarityWeights=Object.entries(c.weights).filter(([rarity])=>rarityPools.has(rarity));
  const totalRarityWeight=rarityWeights.reduce((sum,[,weight])=>sum+weight,0);
  const rarityWeightById=new Map(rarityWeights);
  return eligible.map(item=>{
    const pool=rarityPools.get(item.rarity);
    const itemScore=1/Math.sqrt(item.value);
    const totalItemScore=pool.reduce((sum,candidate)=>sum+1/Math.sqrt(candidate.value),0);
    return {item,probability:(rarityWeightById.get(item.rarity)/totalRarityWeight)*(itemScore/totalItemScore)};
  });
}
function formatDropChance(probability){return `${(probability*100).toLocaleString('ru-RU',{minimumFractionDigits:2,maximumFractionDigits:4})}%`;}
function renderCaseContents(c){
  const entries=caseDropChances(c).sort((a,b)=>b.probability-a.probability||b.item.value-a.item.value);
  const pityActive=c.price>0&&state.engagement.pity>=7&&entries.some(entry=>entry.item.value>=c.price);
  const note=pityActive?'Защита удачи активна: следующий предмет будет стоить не меньше цены кейса.':c.price?'Шанс указан для одного открытия. После 7 находок дешевле цены кейса включится защита удачи.':'Шанс указан для одного открытия. Для бесплатного кейса защита удачи не применяется.';
  $('#casePreviewTitle').textContent=c.name;
  const count=entries.length;const countWord=count%100>=11&&count%100<=14?'предметов':count%10===1?'предмет':count%10>=2&&count%10<=4?'предмета':'предметов';
  $('#casePreviewCount').textContent=`${count} ${countWord}`;
  $('#casePreviewNote').textContent=note;
  $('#caseContentsList').innerHTML=entries.map(({item,probability})=>`<div class="case-content-item ${item.rarity}" role="listitem"><span class="case-content-icon mini-sprite" style="--sprite-position:${item.spritePosition}" aria-hidden="true"></span><span class="case-content-name"><b>${item.name}</b><small>${item.label}</small></span><span class="case-content-value">${fmt(item.value)} ✦</span><strong class="case-content-chance">${formatDropChance(probability)}</strong></div>`).join('');
  const openButton=$('#previewOpenButton');
  const freeWait=!c.price&&freeCaseSecondsLeft()>0;
  openButton.dataset.case=c.id;
  openButton.disabled=freeWait;
  openButton.querySelector('span').textContent=freeWait?`Доступно через ${formatCountdown(freeCaseSecondsLeft())}`:'Открыть этот кейс';
  openButton.querySelector('b').textContent=c.price?`${fmt(c.price)} ✦`:'';
}
function openCasePreview(c){
  if(opening)return;
  if(pendingDrops.some(drop=>!drop.resolved)){toast('Сначала распредели предыдущие находки');return;}
  renderCaseContents(c);
  setGameplay(false);
  $('#caseOpeningContent').classList.add('hidden');
  $('#casePreview').classList.remove('hidden');
  $('.modal').classList.add('contents-mode');
  $('.modal').setAttribute('aria-labelledby','casePreviewTitle');
  $('#modalBackdrop').classList.remove('hidden');
  $('#modalBackdrop').setAttribute('aria-hidden','false');
}
function renderCases(){ $('#caseGrid').innerHTML=CASES.map((c,i)=>{const pool=caseItemPool(c);const min=pool.length?Math.min(...pool.map(item=>item.value)):0;const max=pool.length?Math.max(...pool.map(item=>item.value)):0;const showcase=ITEMS.find(item=>item.id===CASE_SHOWCASE_ITEMS[c.id])||pool[0];const freeWait=!c.price&&freeCaseSecondsLeft()>0;return `<article class="case-card ${c.featured?'featured':''}" data-scene="${c.id}"><div class="case-top"><span>КЕЙС ${String(i+1).padStart(2,'0')}</span><span class="case-price">${c.price?fmt(c.price)+' ✦':'БЕСПЛАТНО'}</span></div><div class="case-visual" aria-hidden="true"><span class="case-scene-feature"></span><span class="case-glyph has-sprite" style="--sprite-position:${showcase?.spritePosition||'-0 -0'}"></span></div><div class="case-name">${c.name}</div><div class="case-desc">${c.desc}</div><div class="case-value-range">Предметы ${fmt(min)}–${fmt(max)} ✦</div><div class="case-odds">${oddsMarkup(c)}</div><div class="case-actions"><button class="case-preview-button" data-preview-case="${c.id}">Содержимое</button><button class="case-open" data-case="${c.id}" ${freeWait?'disabled':''}>${freeWait?'Доступно через '+formatCountdown(freeCaseSecondsLeft()):'Открыть ↗'}</button></div></article>`;}).join(''); document.querySelectorAll('.case-open:not(:disabled)').forEach(btn=>btn.addEventListener('click',()=>openModal(CASES.find(c=>c.id===btn.dataset.case))));document.querySelectorAll('[data-preview-case]').forEach(btn=>btn.addEventListener('click',()=>openCasePreview(CASES.find(c=>c.id===btn.dataset.previewCase))));updateFreeCaseControls(); }
function itemMarkup(item,locked=false){ return `<article class="item-card ${item.rarity} ${locked?'locked':''}"><span class="item-value">${locked?'???':fmt(item.value)+' ✦'}</span><span class="item-icon ${locked?'':'has-sprite'}" ${locked?'':'style="--sprite-position:'+item.spritePosition+';color:'+color(item.rarity)+'"'}>${locked?'?':''}</span><h3>${locked?'Неизвестный предмет':item.name}</h3><p>${locked?'Открой кейс, чтобы узнать':' '+item.label+' · '+item.desc}</p></article>`; }
function color(r){ return {common:'#9aa6a1',uncommon:'#61e0c0',rare:'#74a7ff',epic:'#c0a7ff',legendary:'#ffd468'}[r]; }
function sellPrice(item){ return Math.max(1,Number(item.value)||0); }
function sellItem(dropId){ if(upgradeSpinning)return;const index=state.inventory.findIndex(item=>item.dropId===dropId); if(index<0)return; const [item]=state.inventory.splice(index,1); const amount=sellPrice(item); state.balance+=amount; advanceDaily('sell'); addScore(3); addHistory(`Продан предмет: ${item.name}`,'↗',amount); selectedSourceDropIds=selectedSourceDropIds.filter(id=>id!==dropId); saveState(); render(); playSound('sell'); toast(`${item.name} продан за ${fmt(amount)} кристаллов`); }
function sellAllInventory(){
  if(upgradeSpinning||!state.inventory.length)return;
  const items=state.inventory.splice(0);
  const total=items.reduce((sum,item)=>sum+sellPrice(item),0);
  state.balance+=total;
  advanceDaily('sell',items.length);
  addScore(items.length*3);
  addHistory(`Продан весь инвентарь · ${items.length} предметов`,'↗',total);
  selectedSourceDropIds=[];
  saveState();render();playSound('sell');toast(`${items.length} предметов продано за ${fmt(total)} кристаллов`);
}
function craftDuplicate(itemId){
  if(upgradeSpinning)return;
  const copies=state.inventory.filter(item=>item.id===itemId);
  if(copies.length<3)return;
  const base=ITEMS.find(item=>item.id===itemId)||copies[0];
  const consumed=new Set(copies.slice(0,3).map(item=>item.dropId));
  state.inventory=state.inventory.filter(item=>!consumed.has(item.dropId));
  selectedSourceDropIds=selectedSourceDropIds.filter(id=>!consumed.has(id));
  const crafted={...base,name:`${base.name} · усиленный`,value:Math.round(copies.slice(0,3).reduce((sum,item)=>sum+item.value,0)/3*1.75/10)*10,desc:'Создан из трёх одинаковых находок',crafted:true,dropId:globalThis.crypto?.randomUUID?.()||`craft-${Date.now()}-${Math.random()}`};
  state.inventory.push(crafted);state.engagement.crafted++;addScore(20);addHistory(`Скрафчен предмет: ${crafted.name}`,'⚒',crafted.value);recordBestItem(crafted);saveState();render();playSound('win');toast(`Готово: ${crafted.name}`);
}
function renderCraftPanel(){
  const groups=Array.from(new Set(state.inventory.map(item=>item.id))).map(id=>{const copies=state.inventory.filter(item=>item.id===id);return {id,copies,base:ITEMS.find(item=>item.id===id)||copies[0],resultValue:Math.round(copies.slice(0,3).reduce((sum,item)=>sum+item.value,0)/3*1.75/10)*10};}).filter(group=>group.copies.length>=3);
  $('#craftPanel').classList.toggle('reward-ready',groups.length>0);
  $('#craftPanel').innerHTML=groups.length?`<div class="craft-heading"><div><p class="eyebrow">МАСТЕРСКАЯ ДУБЛИКАТОВ</p><h3>Собери усиленный предмет</h3><small>Три одинаковые находки превращаются в одну с ценностью ×1,75.</small></div><span class="craft-count">${groups.length} рецепта</span></div><div class="craft-list">${groups.map(group=>`<div class="craft-row"><span class="mini-sprite" style="--sprite-position:${group.base.spritePosition}"></span><div><b>${group.base.name}</b><small>${group.copies.length} шт. · результат ${fmt(group.resultValue)} ✦</small></div><button class="compact-action" data-craft="${group.id}">Скрафтить</button></div>`).join('')}</div>`:'<div class="craft-empty"><span>⚒</span><div><b>Дубликаты можно усилить</b><small>Собери три одинаковых предмета, чтобы открыть рецепт.</small></div></div>';
}
function renderInventory(){ $('#inventoryGrid').innerHTML=state.inventory.length?state.inventory.slice().reverse().map(item=>itemMarkup(item).replace('</article>',`<button class="sell-item" data-sell="${item.dropId}" aria-label="Продать ${item.name} за ${fmt(sellPrice(item))} кристаллов">Продать · ${fmt(sellPrice(item))} ✦</button></article>`)).join(''):''; document.querySelectorAll('[data-sell]').forEach(button=>button.addEventListener('click',()=>sellItem(button.dataset.sell)));const sellAll=$('#sellAllInventory');const value=state.inventory.reduce((sum,item)=>sum+sellPrice(item),0);sellAll.disabled=!state.inventory.length||upgradeSpinning;sellAll.classList.toggle('reward-ready',state.inventory.length>0);sellAll.textContent=state.inventory.length?`Продать всё · ${fmt(value)} ✦`:'Продать всё';renderCraftPanel(); }
function renderCollectionSets(){
  $('#collectionSets').innerHTML=`<div class="set-grid">${COLLECTION_SETS.map(set=>{const progress=collectionSetProgress(set);const claimed=state.engagement.setsClaimed.includes(set.id);const ready=!claimed&&progress>=set.items.length;return `<article class="set-card ${claimed?'claimed':''} ${ready?'reward-ready':''}"><div class="set-card-top"><div><p class="eyebrow">НАБОР</p><h3>${set.name}</h3></div><strong>${progress}/${set.items.length}</strong></div><p>${set.desc}</p><div class="set-progress"><span style="width:${progress/set.items.length*100}%"></span></div><div class="set-reward">${claimed?'Награда получена':`Награда ${fmt(set.reward)} ✦`}<button class="compact-action" data-claim-set="${set.id}" ${claimed||progress<set.items.length?'disabled':''}>${claimed?'Готово':'Забрать'}</button></div></article>`;}).join('')}</div>`;
}
function renderCollection(){ renderCollectionSets(); $('#collectionGrid').innerHTML=ITEMS.map(item=>itemMarkup(item,!state.discovered.includes(item.id))).join(''); }
function upgradeChance(source,target){ return Math.min(97,Math.max(1,Math.floor(source.value/target.value*100))); }
function upgradeDisplayItem(item){const definition=ITEMS.find(entry=>entry.id===item.id);if(!definition)return item;const crafted=item.crafted?{name:item.name,value:item.value,desc:item.desc,crafted:true}:{};return {...item,...definition,...crafted,dropId:item.dropId};}
function getSelectedSources(){return selectedSourceDropIds.map(dropId=>state.inventory.find(item=>item.dropId===dropId)).filter(Boolean).map(upgradeDisplayItem);}
function selectedSourceValue(sources=getSelectedSources()){return sources.reduce((sum,item)=>sum+item.value,0);}
const TARGET_MULTIPLIERS={2:{min:2,max:2.5},5:{min:5,max:6},10:{min:10,max:12}};
function targetValueRange(stake,multiplier){const rule=TARGET_MULTIPLIERS[multiplier];return rule?{min:Math.ceil(stake*rule.min),max:Math.floor(stake*rule.max)}:null;}
function syncUpgradeBalanceStake(){
  const input=$('#upgradeBalanceStake');
  if(!input||upgradeSpinning)return upgradeBalanceStake;
  const entered=input.value===''?0:Number.parseInt(input.value,10);
  if(Number.isFinite(entered))upgradeBalanceStake=entered;
  upgradeBalanceStake=selectedSourceDropIds.length?Math.max(0,Math.min(state.balance,Math.floor(upgradeBalanceStake)||0)):0;
  return upgradeBalanceStake;
}
function updateUpgradePreview(){
  const sources=getSelectedSources();
  const sourceValue=selectedSourceValue(sources);
  syncUpgradeBalanceStake();
  const target=ITEMS.find(item=>item.id===selectedTargetId&&!sources.some(source=>source.id===item.id));
  const input=$('#upgradeBalanceStake');
  $('#upgradeBalanceAvailable').textContent=`Доступно: ${fmt(state.balance)} ✦`;
  input.disabled=upgradeSpinning||!sources.length;
  input.max=String(upgradeSpinning?upgradeBalanceStake:state.balance);
  input.value=String(upgradeBalanceStake);
  const range=$('#upgradeBalanceRange');
  range.disabled=upgradeSpinning||!sources.length;
  range.max=String(upgradeSpinning?upgradeBalanceStake:state.balance);
  range.value=String(upgradeBalanceStake);
  const totalStake=sourceValue+upgradeBalanceStake;
  const chance=sources.length&&target?upgradeChance({value:totalStake},target):0;
  $('#upgradeStakeTotal').textContent=`Ставка: ${fmt(totalStake)} ✦`;
  $('#upgradeChance').textContent=sources.length&&target?`Шанс успеха: ${chance}%`:'Шанс успеха: —';
  $('#upgradeWheel').style.setProperty('--win-angle',`${chance*3.6}deg`);
  $('#upgradeWheelChance').textContent=sources.length&&target?`${chance}%`:'—';
  $('#upgradeOdds').textContent=sources.length&&target?`Предметы ${fmt(sourceValue)} ✦ + ${fmt(upgradeBalanceStake)} ✦ из баланса · шанс неудачи ${100-chance}%. Сумма влияет на шанс; внесённые кристаллы списываются при запуске.`:'Выбери предметы, сумму из баланса и цель, чтобы увидеть шансы.';
  $('#upgradeButton').disabled=!(sources.length&&target)||upgradeSpinning;
  $('#upgradeButton').innerHTML=`<span>${upgradeSpinning?'Проверяем шанс…':'Улучшить предмет'}</span><b>${sources.length&&target?chance+'%':'↗'}</b>`;
  return {sources,target,sourceValue,balanceStake:upgradeBalanceStake,totalStake,chance};
}
function syncUpgradeSourceScroll(){
  const rail=$('#upgradeSourceList');
  const slider=$('#upgradeSourceScroll');
  const controls=$('#upgradeSourceScrollbar');
  if(!rail||!slider||!controls)return;
  const maxScroll=Math.max(0,rail.scrollWidth-rail.clientWidth);
  const scrollLeft=Math.min(maxScroll,rail.scrollLeft);
  const hasOverflow=maxScroll>1;
  slider.max=String(Math.ceil(maxScroll));
  slider.value=String(Math.round(scrollLeft));
  slider.disabled=!hasOverflow||upgradeSpinning;
  controls.hidden=!hasOverflow;
  const previous=$('#upgradeSourcePrev');
  const next=$('#upgradeSourceNext');
  previous.disabled=!hasOverflow||scrollLeft<=1||upgradeSpinning;
  next.disabled=!hasOverflow||scrollLeft>=maxScroll-1||upgradeSpinning;
  const cards=[...rail.querySelectorAll('.upgrade-source-choice')];
  const railBounds=rail.getBoundingClientRect();
  const visible=cards.map((card,index)=>({index,bounds:card.getBoundingClientRect()})).filter(card=>card.bounds.right>railBounds.left+1&&card.bounds.left<railBounds.right-1);
  const first=visible[0]?.index;
  const last=visible[visible.length-1]?.index;
  const position=first===undefined?'0 / 0':`${first+1}–${last+1} / ${cards.length}`;
  $('#upgradeSourcePosition').textContent=position;
  slider.setAttribute('aria-valuetext',first===undefined?'Нет предметов для прокрутки':`Показаны предметы ${first+1}–${last+1} из ${cards.length}`);
  slider.style.setProperty('--scroll-progress',`${maxScroll?scrollLeft/maxScroll*100:0}%`);
}
function renderUpgrade(){
  syncUpgradeBalanceStake();
  const sourceRail=$('#upgradeSourceList');
  const sourceScrollLeft=sourceRail.scrollLeft;
  const sources=getSelectedSources();
  const sourceValue=selectedSourceValue(sources);
  const totalStake=sourceValue+upgradeBalanceStake;
  const range=targetValueRange(totalStake,selectedTargetMultiplier);
  const query=targetSearch.trim().toLocaleLowerCase('ru-RU');
  const targets=ITEMS.filter(item=>!sources.some(source=>source.id===item.id)&&(!query||`${item.name} ${item.id}`.toLocaleLowerCase('ru-RU').includes(query))&&(!range||(item.value>=range.min&&item.value<=range.max))).sort((a,b)=>a.value-b.value);
  if(selectedTargetId&&!targets.some(item=>item.id===selectedTargetId))selectedTargetId=null;
  const selectedTarget=ITEMS.find(item=>item.id===selectedTargetId&&!sources.some(source=>source.id===item.id));
  const targetHint=selectedTargetMultiplier?`${selectedTargetMultiplier}X · ${range?`${fmt(range.min)}–${fmt(range.max)} ✦`:'цели по ставке'}`:'Любой предмет коллекции';
  const stakeWord=sources.length%10===1&&sources.length%100!==11?'предмет':sources.length%10>=2&&sources.length%10<=4&&!(sources.length%100>=12&&sources.length%100<=14)?'предмета':'предметов';
  $('#upgradeSourceSlot').innerHTML=sources.length?`<div class="upgrade-source-items">${sources.slice(0,5).map(item=>`<span class="upgrade-source-slot-icon mini-sprite" data-item-id="${item.id}" style="--sprite-position:${item.spritePosition||'-0 -0'}" title="${item.name}" aria-hidden="true"></span>`).join('')}${sources.length>5?`<span class="source-overflow">+${sources.length-5}</span>`:''}</div><b class="upgrade-source-slot-name" title="${sources.length===1?sources[0].name:''}">${sources.length===1?sources[0].name:`Ставка: ${sources.length} ${stakeWord}`}</b><small>Сумма ставки: ${fmt(sourceValue)} ✦</small>`:'<span class="slot-placeholder">?</span><b>Выбери ставку</b><small>Можно выбрать несколько предметов</small>';
  $('#upgradeSourceSlot').classList.toggle('filled',sources.length>0);
  $('#upgradeTargetSlot').innerHTML=selectedTarget?`<span class="mini-sprite upgrade-target-slot-icon" data-item-id="${selectedTarget.id}" style="--sprite-position:${selectedTarget.spritePosition||'-0 -0'}" aria-hidden="true"></span><b class="upgrade-target-slot-name">${selectedTarget.name}</b><small>${fmt(selectedTarget.value)} ✦</small>`:`<span class="slot-placeholder">?</span><b>Выбери цель</b><small>${targetHint}</small>`;
  $('#upgradeTargetSlot').classList.toggle('filled',!!selectedTarget);
  $('#upgradeSourceCount').textContent=sources.length?`${sources.length} выбрано · ${fmt(sourceValue)} ✦`:`${state.inventory.length} предметов в инвентаре`;
  sourceRail.innerHTML=state.inventory.map(upgradeDisplayItem).map(item=>`<button class="upgrade-choice upgrade-source-choice ${selectedSourceDropIds.includes(item.dropId)?'selected':''}" data-source="${item.dropId}" data-rarity="${item.rarity}" aria-label="${item.name}, ${item.label}, ${fmt(item.value)} кристаллов" aria-pressed="${selectedSourceDropIds.includes(item.dropId)}" ${upgradeSpinning?'disabled':''}><span class="upgrade-source-icon mini-sprite" style="--sprite-position:${item.spritePosition||'-0 -0'}" aria-hidden="true"></span><span class="upgrade-source-name" title="${item.name}">${item.name}</span><b class="upgrade-source-value">${fmt(item.value)} ✦</b></button>`).join('')||'<p class="upgrade-empty">Сначала открой кейс и получи предмет.</p>';
  sourceRail.scrollLeft=sourceScrollLeft;
  syncUpgradeSourceScroll();
  $('#upgradeTargetRange').textContent=selectedTargetMultiplier?(range?`Цели: ${fmt(range.min)}–${fmt(range.max)} ✦`:'Добавь ставку для выбора цели'):'Любая стоимость · выбери предмет вручную';
  document.querySelectorAll('[data-target-multiplier]').forEach(button=>{const active=Number(button.dataset.targetMultiplier)===selectedTargetMultiplier;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));button.disabled=upgradeSpinning||!sources.length;});
  const emptyTargetMessage=!sources.length?'Сначала выбери предметы для ставки.':selectedTargetMultiplier?`Нет находок в диапазоне ${fmt(range?.min||0)}–${fmt(range?.max||0)} ✦.`:'Подходящие предметы не найдены.';
  $('#upgradeTargetList').innerHTML=targets.map(item=>`<button class="upgrade-choice ${item.id===selectedTargetId?'selected':''}" data-target="${item.id}" data-item-id="${item.id}" data-rarity="${item.rarity}" ${upgradeSpinning||!sources.length?'disabled':''}><span class="mini-sprite" style="--sprite-position:${item.spritePosition||'-0 -0'}" aria-hidden="true"></span><span class="upgrade-target-name">${item.name}</span><b>${fmt(item.value)} ✦</b></button>`).join('')||`<p class="upgrade-empty">${emptyTargetMessage}</p>`;
  document.querySelectorAll('[data-source]').forEach(button=>button.addEventListener('click',()=>{if(upgradeSpinning)return;const dropId=button.dataset.source;selectedSourceDropIds=selectedSourceDropIds.includes(dropId)?selectedSourceDropIds.filter(id=>id!==dropId):[...selectedSourceDropIds,dropId];renderUpgrade();}));
  document.querySelectorAll('[data-target]').forEach(button=>button.addEventListener('click',()=>{if(upgradeSpinning)return;selectedTargetId=button.dataset.target;renderUpgrade();}));
  document.querySelectorAll('[data-stake-add],[data-stake-max]').forEach(button=>{button.disabled=upgradeSpinning||!sources.length;});
  $('#upgradeTargetSearch').value=targetSearch;
  updateUpgradePreview();
}
function weightedKey(weights){ const keys=Object.keys(weights); const total=keys.reduce((sum,key)=>sum+weights[key],0); let roll=Math.random()*total; for(const key of keys){ roll-=weights[key]; if(roll<=0) return key; } return keys[keys.length-1]; }
function weightedItem(c){
  const eligible=caseItemPool(c);
  const rarityWeights=Object.fromEntries(Object.entries(c.weights).filter(([rarity])=>eligible.some(item=>item.rarity===rarity)));
  const rarity=weightedKey(rarityWeights);
  const pool=eligible.filter(item=>item.rarity===rarity);
  const chances=pool.map(item=>1/Math.sqrt(item.value));
  let roll=Math.random()*chances.reduce((sum,value)=>sum+value,0);
  for(let index=0;index<pool.length;index++){roll-=chances[index];if(roll<=0)return pool[index];}
  return pool[pool.length-1];
}
function weightedItemFromPool(pool){
  const chances=pool.map(item=>1/Math.sqrt(item.value));
  let roll=Math.random()*chances.reduce((sum,value)=>sum+value,0);
  for(let index=0;index<pool.length;index++){roll-=chances[index];if(roll<=0)return pool[index];}
  return pool[pool.length-1];
}
function rollCaseDrop(c){
  const eligible=caseItemPool(c);
  const pityReady=c.price>0&&state.engagement.pity>=7;
  const pityPool=eligible.filter(item=>item.value>=c.price);
  const found=pityReady&&pityPool.length?weightedItemFromPool(pityPool):weightedItem(c);
  if(c.price>0)state.engagement.pity=found.value>=c.price?0:Math.min(7,state.engagement.pity+1);
  return found;
}
function setGameplay(active, force=false){ if(!ysdk?.features?.GameplayAPI || (platformPaused&&!force))return; try { active ? ysdk.features.GameplayAPI.start() : ysdk.features.GameplayAPI.stop(); } catch {} }
function freeCaseSecondsLeft(){return Math.max(0,Math.ceil(((Number(state.freeCaseReadyAt)||0)-Date.now())/1000));}
function formatCountdown(seconds){return `${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`;}
function updateFreeCaseControls(){
  if(freeCaseTimer)clearTimeout(freeCaseTimer);
  if(freeCaseSecondsLeft()<=0){freeCaseTimer=null;return;}
  freeCaseTimer=setTimeout(()=>{
    freeCaseTimer=null;
    const seconds=freeCaseSecondsLeft();
    const button=$('.case-open[data-case="free"]');
    if(button){button.disabled=seconds>0;button.textContent=seconds?`Доступно через ${formatCountdown(seconds)}`:'Открыть ↗';if(seconds===0)button.addEventListener('click',()=>openModal(CASES[0]),{once:true});}
    const previewButton=$('#previewOpenButton');
    if(previewButton?.dataset.case==='free'){previewButton.disabled=seconds>0;previewButton.querySelector('span').textContent=seconds?`Доступно через ${formatCountdown(seconds)}`:'Открыть этот кейс';}
    if(!$('#modalBackdrop').classList.contains('hidden')&&!selectedCase.price)renderCaseQuantity();
    updateFreeCaseControls();
  },1000);
}
function maxOpenQuantity(){ return selectedCase.price?Math.max(0,Math.min(10,Math.floor(state.balance/selectedCase.price))):(freeCaseSecondsLeft()===0?1:0); }
function caseWord(quantity){ const n=quantity%100; if(n>=11&&n<=14)return 'кейсов'; switch(quantity%10){case 1:return 'кейс';case 2:case 3:case 4:return 'кейса';default:return 'кейсов';} }
function renderCaseQuantity(){
  const countDisplay=$('#caseQuantity');
  const max=maxOpenQuantity();
  const quantity=Math.max(1,Math.min(max||1,Number.parseInt(countDisplay.textContent,10)||1));
  countDisplay.textContent=String(quantity);
  $('#quantityMinus').disabled=quantity<=1;
  $('#quantityPlus').disabled=quantity>=max;
  $('#caseMaxHint').textContent=selectedCase.price?`Доступно: ${max} · по балансу`:(state.engagement.pity?`Защита удачи: ${state.engagement.pity}/7 неудач`:'Один бесплатный кейс');
  $('#caseTotalPrice').textContent=selectedCase.price?`Итого: ${fmt(quantity*selectedCase.price)} ✦`:'Бесплатно';
  $('#caseRefundNote').classList.toggle('hidden',!selectedCase.price);
  $('#casePityNote').textContent=selectedCase.price?`Защита удачи: ${state.engagement.pity}/7 неудач. После 7 подряд следующий предмет будет стоить не меньше кейса.`:'Бесплатный кейс не влияет на защиту удачи.';
  const blocked=max===0;
  $('#modalAction').disabled=blocked||opening;
  if(!pendingDrops.length)$('#modalAction').innerHTML=blocked?(selectedCase.price?'<span>Недостаточно кристаллов</span><b>✦</b>':`<span>Бесплатный кейс через ${formatCountdown(freeCaseSecondsLeft())}</span><b>⌛</b>`):`<span>Открыть ${quantity} ${caseWord(quantity)}</span><b>${selectedCase.price?fmt(quantity*selectedCase.price)+' ✦':'БЕСПЛАТНО'}</b>`;
}
function adjustCaseQuantity(delta){const current=Number.parseInt($('#caseQuantity').textContent,10)||1;const next=Math.max(1,Math.min(maxOpenQuantity()||1,current+delta));$('#caseQuantity').textContent=String(next);renderCaseQuantity();playSound('quantity');}
function renderPendingDrops(){
  const unresolved=pendingDrops.filter(drop=>!drop.resolved).length;
  $('#caseQuantityPanel').classList.add('hidden');
  $('#caseTotalPrice').classList.add('hidden');
  $('#caseRefundNote').classList.add('hidden');
  $('#revealStage').classList.toggle('batch-stage',pendingDrops.length>1);
  $('#revealStage').innerHTML=pendingDrops.map(drop=>`<article class="drop-result ${drop.resolved?'resolved':''}">
    <span class="item-icon has-sprite" style="--sprite-position:${drop.spritePosition};color:${color(drop.rarity)}"></span>
    <div class="drop-result-info"><b>${drop.name}</b><small>${drop.label} · ${fmt(drop.value)} ✦</small></div>
    ${drop.resolved?`<span class="drop-choice-status">${drop.choice==='sell'?'Продан':'В инвентаре'}</span>`:`<div class="drop-result-actions"><button class="drop-sell" data-drop-choice="sell" data-drop-id="${drop.dropId}">Продать · ${fmt(sellPrice(drop))} ✦</button><button class="drop-store" data-drop-choice="store" data-drop-id="${drop.dropId}">В инвентарь</button></div>`}
  </article>`).join('');
  $('#revealCaption').textContent=unresolved?`Распредели находки: ${unresolved} осталось`:'Все находки распределены';
  $('#dropBatchActions').classList.toggle('hidden',unresolved===0);
  $('#dropSellAll').textContent=`Продать все · ${fmt(pendingDrops.filter(drop=>!drop.resolved).reduce((sum,drop)=>sum+sellPrice(drop),0))} ✦`;
  $('#modalAction').disabled=opening||unresolved>0;
  $('#modalAction').innerHTML=unresolved?'<span>Выбери для каждого предмета</span><b>…</b>':'<span>Закрыть</span><b>✓</b>';
}
function rouletteTile(item){return `<div class="roulette-tile"><span class="item-icon has-sprite" style="--sprite-position:${item.spritePosition};color:${color(item.rarity)}"></span><b>${item.name}</b><small>${fmt(item.value)} ✦</small></div>`;}
async function spinCaseContents(drops){
  const duration=Math.max(650,2600/drops.length);
  const reducedMotion=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  for(let index=0;index<drops.length;index++){
    const winner=drops[index];
    const decoys=Array.from({length:35},()=>weightedItem(selectedCase));
    const items=[...decoys,winner,...Array.from({length:4},()=>weightedItem(selectedCase))];
    $('#revealStage').classList.remove('batch-stage');
    $('#revealStage').classList.add('roulette-stage');
    $('#revealStage').innerHTML=`<div class="roulette-counter">НАХОДКА ${index+1} ИЗ ${drops.length}</div><div class="roulette-window"><div class="roulette-marker" aria-hidden="true"></div><div class="roulette-track">${items.map(rouletteTile).join('')}</div></div>`;
    $('#revealCaption').textContent=`Прокручиваем содержимое кейса ${index+1} из ${drops.length}…`;
    const viewport=$('.roulette-window');
    const track=$('.roulette-track');
    const winningTile=track.children[decoys.length];
    const offset=winningTile.offsetLeft+winningTile.offsetWidth/2-viewport.clientWidth/2;
    track.style.transition='none';
    track.style.transform='translateX(0)';
    void track.offsetWidth;
    await new Promise(resolve=>requestAnimationFrame(resolve));
    const spinDuration=reducedMotion?100:duration;
    track.style.transition=`transform ${spinDuration}ms cubic-bezier(.08,.72,.12,1)`;
    track.style.transform=`translateX(${-Math.max(0,offset)}px)`;
    await new Promise(resolve=>setTimeout(resolve,spinDuration+100));
    winningTile.classList.add('winner-tile');
    $('#revealCaption').innerHTML=`Выпал предмет: <strong style="color:${color(winner.rarity)}">${winner.name}</strong> · ${fmt(winner.value)} ✦`;
    winningTile.classList.add('winner-drop');
    await new Promise(resolve=>setTimeout(resolve,reducedMotion?80:540));
  }
  $('#revealStage').classList.remove('roulette-stage');
  renderPendingDrops();
}
function openModal(c,restore=false){
  if(opening)return;
  if(pendingDrops.some(drop=>!drop.resolved)&&!restore){toast('Сначала распредели предыдущие находки');return;}
  selectedCase=c; setGameplay(false); $('.modal').classList.remove('contents-mode');$('.modal').setAttribute('aria-labelledby','modalTitle');$('#casePreview').classList.add('hidden');$('#caseOpeningContent').classList.remove('hidden');$('#modalTitle').textContent=c.name; $('#revealStage').classList.remove('batch-stage'); $('#dropBatchActions').classList.add('hidden');
  $('#caseQuantityPanel').classList.remove('hidden'); $('#caseTotalPrice').classList.remove('hidden');
  $('#revealStage').innerHTML='<div class="reveal-box">?</div>'; $('#revealCaption').textContent='Выбери количество и проверь удачу';
  $('#modalBackdrop').classList.remove('hidden'); $('#modalBackdrop').setAttribute('aria-hidden','false'); $('#caseQuantity').textContent='1';
  if(restore&&pendingDrops.length)renderPendingDrops();else renderCaseQuantity();
}
function closeModal(){
  if(opening)return;
  if(pendingDrops.some(drop=>!drop.resolved)){toast('Распредели все выпавшие предметы перед закрытием');return;}
  if(pendingDrops.length){pendingDrops=[];state.pendingDrops=[];state.pendingCaseId=null;saveState();}
  $('#modalBackdrop').classList.add('hidden'); $('#modalBackdrop').setAttribute('aria-hidden','true'); setGameplay(true);
  if(pendingAchievementNavigation){pendingAchievementNavigation=false;setTimeout(navigateToAchievementPanel,0);}
}
function reveal(){
  if(opening||pendingDrops.length)return;
  renderCaseQuantity();
  const quantity=Number.parseInt($('#caseQuantity').textContent,10)||1;
  const total=quantity*selectedCase.price;
  if(quantity<1||quantity>maxOpenQuantity()||state.balance<total){toast(selectedCase.price?'Недостаточно кристаллов для такого количества':`Бесплатный кейс будет доступен через ${formatCountdown(freeCaseSecondsLeft())}`);return;}
  opening=true; $('#modalAction').disabled=true; $('#caseQuantityPanel').classList.add('hidden'); $('#caseTotalPrice').classList.add('hidden'); $('#caseRefundNote').classList.add('hidden');
  state.balance-=total;state.profile.spent+=total;state.profile.opened+=quantity;state.engagement.daily.progress['open-cases']=Math.min(DAILY_TASKS.find(task=>task.id==='open-cases').target,(Number(state.engagement.daily.progress['open-cases'])||0)+quantity);advanceSeason('open',quantity);addScore(quantity*4);if(!selectedCase.price)state.freeCaseReadyAt=Date.now()+180000;
  pendingDrops=Array.from({length:quantity},()=>{const found=rollCaseDrop(selectedCase);recordBestItem(found);if(!state.discovered.includes(found.id)){state.discovered.push(found.id);state.engagement.daily.progress['discover-items']=Math.min(DAILY_TASKS.find(task=>task.id==='discover-items').target,(Number(state.engagement.daily.progress['discover-items'])||0)+1);advanceSeason('discover');addScore(8);}return {...found,dropId:globalThis.crypto?.randomUUID?.()||`${Date.now()}-${Math.random()}`,resolved:false,choice:null};});
  addHistory(`Открыт кейс: ${selectedCase.name} ×${quantity}`,'▣',total);
  playSound('case');
  saveState(); render();
  spinCaseContents(pendingDrops).catch(()=>{}).finally(()=>{opening=false;render();if(pendingDrops.length)renderPendingDrops();});
}
function resolvePendingDrop(dropId,choice){
  const drop=pendingDrops.find(item=>item.dropId===dropId&&!item.resolved);
  if(!drop)return;
  if(choice==='sell'){const amount=sellPrice(drop);state.balance+=amount;advanceDaily('sell');addHistory(`Продана находка: ${drop.name}`,'↗',amount);addScore(3);playSound('sell');}
  else if(choice==='store'){const {resolved,saleValue,choice:dropChoice,...item}=drop;state.inventory.push(item);addHistory(`В инвентарь: ${drop.name}`,'＋',drop.value);}
  else return;
  drop.resolved=true;drop.choice=choice;saveState();render();renderPendingDrops();
}
function resolveAllPendingDrops(choice){const unresolved=pendingDrops.filter(drop=>!drop.resolved);if(!unresolved.length)return;unresolved.forEach(drop=>{if(choice==='sell'){const amount=sellPrice(drop);state.balance+=amount;advanceDaily('sell');addScore(3);addHistory(`Продана находка: ${drop.name}`,'↗',amount);}else{const {resolved,saleValue,choice:dropChoice,...item}=drop;state.inventory.push(item);addHistory(`В инвентарь: ${drop.name}`,'＋',drop.value);}drop.resolved=true;drop.choice=choice;});saveState();render();renderPendingDrops();playSound(choice==='sell'?'sell':'tab');toast(choice==='sell'?'Все предметы проданы':'Все предметы добавлены в инвентарь');}
function performUpgrade(){
  if(upgradeSpinning)return;
  const preview=updateUpgradePreview();
  const {sources,target,sourceValue,balanceStake,totalStake,chance}=preview;
  if(!sources.length||!target||state.balance<balanceStake)return;
  if(balanceStake){state.balance-=balanceStake;state.profile.spent+=balanceStake;}
  upgradeSpinning=true;
  advanceDaily('upgrade');advanceSeason('upgrade');addScore(18);addHistory(`Апгрейд: предметы ${fmt(sourceValue)} + баланс ${fmt(balanceStake)} ✦`,'↗',totalStake);
  render();
  playSound('upgrade');
  const won=Math.random()*100<chance;
  const pointer=$('#upgradeWheelPointer');
  const winAngle=chance*3.6;
  const landingAngle=won?Math.random()*Math.max(1,winAngle-5)+2:winAngle+5+Math.random()*Math.max(1,355-winAngle);
  pointer.classList.remove('spinning');
  pointer.style.setProperty('--pointer-turn',`${1800+landingAngle}deg`);
  void pointer.offsetWidth;
  pointer.classList.add('spinning');
  setTimeout(()=>{
    const sourceIds=new Set(sources.map(item=>item.dropId));
    state.profile.upgrades++;
    if(won){
      state.inventory=state.inventory.filter(item=>!sourceIds.has(item.dropId));
      state.inventory.push({...target,dropId:globalThis.crypto?.randomUUID?.()||`upgrade-${Date.now()}-${Math.random()}`});
      const isNewTarget=!state.discovered.includes(target.id);
      if(isNewTarget)state.discovered.push(target.id);
      state.profile.upgradeWins++;
      if(isNewTarget){advanceDaily('discover');advanceSeason('discover');addScore(8);}
      recordBestItem(target);
      state.engagement.pity=0;
      state.engagement.history[0].label=`Удачный апгрейд: ${target.name}`;
      playSound('win');
      toast(`Улучшение удалось: ${target.name}`);
    }else{
      state.inventory=state.inventory.filter(item=>!sourceIds.has(item.dropId));
      state.profile.upgradeLosses++;
      state.engagement.history[0].label=`Неудачный апгрейд: потеряно ${sources.length} предметов`;
      playSound('loss');
      toast(`Неудача: пропали предметы и ${fmt(balanceStake)} кристаллов`);
    }
    selectedSourceDropIds=[];
    selectedTargetId=null;
    selectedTargetMultiplier=null;
    upgradeSpinning=false;
    upgradeBalanceStake=0;
    saveState();
    render();
  },1800);
}
function toast(message){ const node=$('#toast'); node.textContent=message; node.classList.add('show'); clearTimeout(window.toastTimer); window.toastTimer=setTimeout(()=>node.classList.remove('show'),2600); }
function switchTab(tab){ if(upgradeSpinning||($('#modalBackdrop')&&!$('#modalBackdrop').classList.contains('hidden')))return;if(tab!==activeTab)playSound('tab');activeTab=tab;document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab)); ['case','inventory','upgrade','collection','profile'].forEach(name=>$('#'+name+'View').classList.toggle('hidden',name!==tab)); if(tab==='upgrade'){selectedSourceDropIds=[];selectedTargetId=null;selectedTargetMultiplier=null;upgradeBalanceStake=0;targetSearch='';renderUpgrade();}if(tab==='profile')renderProfile(); }
function saveNickname(){const nickname=Array.from($('#nicknameInput').value.trim().replace(/\s+/g,' ')).slice(0,20).join('');const value=normalizeProfile({...state.profile,nickname}).nickname;state.profile.nickname=value;saveState();renderProfile();playSound('tab');toast('Никнейм сохранён');}
function handlePlatformPause(){ platformPaused=true; setGameplay(false,true); }
function handlePlatformResume(){ platformPaused=false; if(!$('#modalBackdrop').classList.contains('hidden') || !$('#helpPanel').classList.contains('hidden'))return; setGameplay(true); }
function markGameReady(){ gameReady=true; if(ysdk&&!readySignaled){ try { ysdk.features?.LoadingAPI?.ready(); readySignaled=true; } catch {} } if(!platformPaused&&$('#modalBackdrop').classList.contains('hidden')&&$('#helpPanel').classList.contains('hidden'))setGameplay(true); }
async function initializePlatformSdk(){ if(!window.YaGames || ysdk)return; try { ysdk=await window.YaGames.init(); const lang=ysdk?.environment?.i18n?.lang; if(lang)document.documentElement.lang=lang; ysdk.on?.('game_api_pause',handlePlatformPause); ysdk.on?.('game_api_resume',handlePlatformResume); markGameReady(); } catch { markGameReady(); } }
function requestRewardedBonus(){ const button=$('#bonusButton'); if(!ysdk?.adv?.showRewardedVideo){ toast('Реклама доступна после запуска игры на Яндекс Играх'); return; } button.disabled=true; setGameplay(false); let rewarded=false; ysdk.adv.showRewardedVideo({onRewarded:()=>{ rewarded=true; state.balance+=1000; saveState(); render(); toast('Бонус получен: +1000 кристаллов'); },onClose:()=>{ button.disabled=false; if(!platformPaused)setGameplay(true); if(!rewarded)toast('Просмотр не завершён — бонус не начислен'); },onError:()=>{ button.disabled=false; if(!platformPaused)setGameplay(true); toast('Реклама сейчас недоступна'); }}); }
document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>switchTab(btn.dataset.tab)));
$('#soundButton').addEventListener('click',toggleSound);
$('#musicButton').addEventListener('click',toggleMusic);
$('#upgradeSourceList').addEventListener('scroll',syncUpgradeSourceScroll,{passive:true});
$('#upgradeSourceScroll').addEventListener('input',event=>{
  $('#upgradeSourceList').scrollLeft=Number(event.target.value);
  syncUpgradeSourceScroll();
});
window.addEventListener('resize',syncUpgradeSourceScroll,{passive:true});
$('#upgradeSourcePrev').addEventListener('click',()=>$('#upgradeSourceList').scrollBy({left:-Math.max(180,$('#upgradeSourceList').clientWidth*.72),behavior:'smooth'}));
$('#upgradeSourceNext').addEventListener('click',()=>$('#upgradeSourceList').scrollBy({left:Math.max(180,$('#upgradeSourceList').clientWidth*.72),behavior:'smooth'}));
$('#saveNicknameButton').addEventListener('click',saveNickname);
$('#dropSellAll').addEventListener('click',()=>resolveAllPendingDrops('sell'));
$('#dropStoreAll').addEventListener('click',()=>resolveAllPendingDrops('store'));
$('#sellAllInventory').addEventListener('click',sellAllInventory);
$('#achievementNotice').addEventListener('click',openAchievementSection);
document.addEventListener('input',event=>{
  if(event.target.id==='upgradeTargetSearch'){
    targetSearch=event.target.value;renderUpgrade();const input=$('#upgradeTargetSearch');input.focus();input.setSelectionRange(targetSearch.length,targetSearch.length);return;
  }
  if(event.target.id==='upgradeBalanceStake'){renderUpgrade();return;}
  if(event.target.id==='upgradeBalanceRange'){$('#upgradeBalanceStake').value=event.target.value;renderUpgrade();}
});
document.addEventListener('click',event=>{
  const multiplier=event.target.closest('[data-target-multiplier]');
  if(multiplier){if(upgradeSpinning||!getSelectedSources().length)return;const value=Number(multiplier.dataset.targetMultiplier);selectedTargetMultiplier=selectedTargetMultiplier===value?null:value;selectedTargetId=null;targetSearch='';renderUpgrade();return;}
  const stakeAdd=event.target.closest('[data-stake-add]');
  if(stakeAdd){if(upgradeSpinning||!getSelectedSources().length)return;upgradeBalanceStake=Math.min(state.balance,upgradeBalanceStake+Number(stakeAdd.dataset.stakeAdd));$('#upgradeBalanceStake').value=String(upgradeBalanceStake);renderUpgrade();return;}
  const stakeMax=event.target.closest('[data-stake-max]');
  if(stakeMax){if(upgradeSpinning||!getSelectedSources().length)return;upgradeBalanceStake=state.balance;$('#upgradeBalanceStake').value=String(upgradeBalanceStake);renderUpgrade();return;}
  const choice=event.target.closest('[data-drop-choice]');
  if(choice){resolvePendingDrop(choice.dataset.dropId,choice.dataset.dropChoice);return;}
  const daily=event.target.closest('[data-claim-daily]');
  if(daily){claimDailyTask(daily.dataset.claimDaily);return;}
  if(event.target.closest('[data-claim-login]')){claimLoginReward();return;}
  const set=event.target.closest('[data-claim-set]');
  if(set){claimCollectionSet(set.dataset.claimSet);return;}
  const achievement=event.target.closest('[data-claim-achievement]');
  if(achievement){claimAchievement(achievement.dataset.claimAchievement);return;}
  const season=event.target.closest('[data-claim-season]');
  if(season){claimSeasonMilestone(season.dataset.claimSeason);return;}
  const craft=event.target.closest('[data-craft]');
  if(craft){craftDuplicate(craft.dataset.craft);return;}
});
$('#quantityMinus').addEventListener('click',()=>adjustCaseQuantity(-1));
$('#quantityPlus').addEventListener('click',()=>adjustCaseQuantity(1));
$('#openHeroButton').addEventListener('click',()=>openModal(CASES[1]));
$('#modalAction').addEventListener('click',()=>{if(pendingDrops.length){if(pendingDrops.every(drop=>drop.resolved))closeModal();return;}reveal();});
$('#previewOpenButton').addEventListener('click',()=>openModal(CASES.find(c=>c.id===$('#previewOpenButton').dataset.case)));
$('#closeModal').addEventListener('click',closeModal); $('#modalBackdrop').addEventListener('click',e=>{if(e.target.id==='modalBackdrop')closeModal();}); $('#howButton').addEventListener('click',()=>{setGameplay(false);$('#helpPanel').classList.remove('hidden');}); $('#closeHelp').addEventListener('click',()=>{ $('#helpPanel').classList.add('hidden'); setGameplay(true); }); $('#bonusButton').addEventListener('click',requestRewardedBonus); $('#upgradeButton').addEventListener('click',performUpgrade); $('#resetButton').addEventListener('click',()=>{ if(opening||upgradeSpinning){toast('Дождись завершения текущего действия');return;}if(confirm('Сбросить весь прогресс?')){pendingDrops=[];state=freshDefaultState();saveState();render();toast('Прогресс сброшен');} }); $('#helpPanel').addEventListener('click',e=>{if(e.target.id==='helpPanel')$('#closeHelp').click();}); document.addEventListener('keydown',e=>{if(e.key==='Enter'&&document.activeElement?.id==='nicknameInput')saveNickname();if(e.key==='Escape'){if(!$('#modalBackdrop').classList.contains('hidden'))closeModal();if(!$('#helpPanel').classList.contains('hidden'))$('#closeHelp').click();}}); document.addEventListener('contextmenu',e=>e.preventDefault()); document.addEventListener('dragstart',e=>e.preventDefault()); window.addEventListener('yandex-sdk-loaded',initializePlatformSdk);
if(pendingDrops.length){const savedCase=CASES.find(item=>item.id===state.pendingCaseId)||CASES[0];openModal(savedCase,true);}
window.CUBE_WORLD_ITEMS=['diamond','emerald_block','nether_star','amethyst_block','totem','heart_of_sea'].map(id=>ITEMS.find(item=>item.id===id)).filter(Boolean);
render(); updateSoundButton(); updateMusicButton(); initializePlatformSdk(); markGameReady();
window.addEventListener('pointerdown',()=>{if(musicEnabled)startBackgroundMusic();},{once:true});
window.addEventListener('keydown',()=>{if(musicEnabled)startBackgroundMusic();},{once:true});
