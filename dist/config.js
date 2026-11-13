export const TYPES=[
 {id:'dev',name:'研发',subtitle:'代码炮台',cost:120,color:'#398d80',damage:24,range:155,rate:.78,desc:'精准单点输出，厚血需求伤害 ×1.4。',ic:'首席架构师',manager:'研发负责人',skill:'IC：高阶代码炮，五阶双目标攻击'},
 {id:'pm',name:'产品',subtitle:'需求广播',cost:100,color:'#c59b36',damage:6,range:145,rate:1.05,desc:'使命中敌人减速 45%，持续 2 秒。',ic:'产品策略专家',manager:'产品负责人',skill:'IC：深度控场，减速强化至 65%'},
 {id:'design',name:'设计',subtitle:'灵感涂鸦',cost:150,color:'#d47767',damage:19,range:142,rate:1.3,desc:'范围溅射，成群会议与缺陷集群伤害 ×1.7。',ic:'首席设计师',manager:'设计负责人',skill:'IC：巨型灵感爆破，范围提升至 110'},
 {id:'qa',name:'测试',subtitle:'缺陷扫描',cost:130,color:'#9272b1',damage:13,range:165,rate:.95,desc:'装甲缺陷伤害 ×1.8；模型破盾 4 秒，标记增伤 35%。',ic:'质量架构师',manager:'质量负责人',skill:'IC：深度诊断，标记增伤提升至 65%'},
 {id:'ops',name:'运营',subtitle:'增长工坊',cost:100,color:'#cf903b',damage:0,range:0,rate:8,desc:'战斗中每 8 秒产出预算，晋升提升产量。',ic:'增长策略专家',manager:'运营负责人',skill:'IC：自动化增长，产出提高 65%'}
];
export const FACTIONS={byte:{name:'敏捷先锋',english:'MOVE FAST, GO HOME',desc:'全员攻击速度 +12%',ranks:['1-1','1-2','2-1','2-2','3-1'],icon:'↗'},tencent:{name:'协作联盟',english:'BETTER TOGETHER',desc:'攻击与控制范围 +18%',ranks:['T1','T2','T3','T4','T5'],icon:'✳'},ali:{name:'经营大师',english:'MAKE EVERY COIN COUNT',desc:'击败敌人预算奖励 +25%',ranks:['P5','P6','P7','P8','P9'],icon:'◈'}};
export const LEVELS=[
 {theme:'office',name:'周五园区',subtitle:'最后一公里',waves:10,budget:480,tint:'#70934b',description:'傍晚的办公园区，穿过需求走廊，守住门禁出口。',route:[[-30,126],[220,126],[220,287],[440,287],[440,142],[665,142],[665,410],[860,410],[860,286],[1035,286]],slots:[[120,223],[318,191],[326,387],[525,234],[555,65],[757,224],[562,410],[750,493],[923,390],[922,187],[125,335],[485,375]]},
 {theme:'office',name:'发布之夜',subtitle:'灯火不必通明',waves:12,budget:540,tint:'#6b8579',description:'蜿蜒长路与两处回弯，适合范围攻击。',route:[[-30,105],[350,105],[350,235],[140,235],[140,430],[540,430],[540,185],[790,185],[790,410],[1035,410]],slots:[[100,160],[240,170],[430,80],[240,330],[60,345],[415,350],[445,510],[635,340],[640,105],[882,270],[885,490],[710,480]]},
 {theme:'office',name:'模型实验室',subtitle:'与随机性共处',waves:14,budget:600,tint:'#77836d',description:'高频混合需求，优先破解加急与模型限流。',route:[[-30,290],[180,290],[180,120],[470,120],[470,430],[720,430],[720,160],[1035,160]],slots:[[90,200],[285,205],[360,65],[380,350],[275,340],[570,215],[590,350],[610,510],[815,290],[815,70],[914,260],[95,380]]},
 {theme:'forest',name:'团建日',subtitle:'团建也要准点结束',waves:16,budget:680,tint:'#9b8a58',description:'最密集的需求浪潮，考验高级分支与事件应对。',route:[[-30,105],[190,105],[190,410],[390,410],[390,210],[610,210],[610,430],[850,430],[850,120],[1035,120]],slots:[[85,210],[285,150],[285,320],[110,480],[475,315],[470,110],[505,490],[720,320],[735,510],[745,120],[930,230],[930,470]]}
];
LEVELS.push(...[{"theme": "office", "name": "需求走廊", "subtitle": "长直道 · 分段拦截", "description": "先减速再集火，避免预算分散在整条长廊。", "waves": 12, "budget": 560, "tint": "#77836d", "route": [[-30, 290], [360, 290], [360, 120], [820, 120], [820, 430], [1035, 430]], "slots": [[450, 200], [730, 200], [270, 200], [90, 380], [910, 260], [90, 200], [270, 380], [590, 200], [730, 380], [910, 120]], "waveCycle": ["fast", "paper", "bug", "mix", "meeting", "model", "mix"], "pressure": 0.95}, {"theme": "office", "name": "跨组联调", "subtitle": "十字交汇 · 二次接敌", "description": "中央交汇会再次经过；中场控速，出口补足单点火力。", "waves": 14, "budget": 620, "tint": "#77836d", "route": [[-30, 270], [700, 270], [700, 90], [300, 90], [300, 470], [850, 470], [850, 270], [1035, 270]], "slots": [[610, 180], [390, 380], [930, 360], [390, 180], [210, 360], [210, 180], [750, 380], [570, 360], [790, 220]], "waveCycle": ["bug", "fast", "mix", "meeting", "model", "paper", "mix"], "pressure": 1.3}, {"theme": "office", "name": "灰度发布", "subtitle": "回字环廊 · 内外联防", "description": "内圈工位可照顾两段路线，测试破盾后由研发持续输出。", "waves": 16, "budget": 660, "tint": "#77836d", "route": [[-30, 110], [840, 110], [840, 470], [160, 470], [160, 290], [650, 290], [650, 390], [1035, 390]], "slots": [[250, 380], [750, 300], [570, 380], [410, 200], [930, 480], [230, 200], [590, 200], [410, 380], [930, 180], [90, 200]], "waveCycle": ["model", "paper", "mix", "bug", "fast", "meeting", "mix"], "pressure": 1.7}, {"theme": "office", "name": "终极上线", "subtitle": "折返夹击 · 双侧火力", "description": "同一火力区两次接敌，产品控速与设计清群需要配合。", "waves": 18, "budget": 700, "tint": "#77836d", "route": [[-30, 150], [760, 150], [760, 350], [240, 350], [240, 490], [900, 490], [900, 250], [1035, 250]], "slots": [[670, 260], [290, 240], [490, 240], [150, 440], [90, 240], [830, 120]], "waveCycle": ["mix", "bug", "fast", "model", "meeting", "paper", "mix"], "pressure": 1.65}, {"theme": "office", "name": "架构迷宫", "subtitle": "交织迷宫 · 三次接敌", "description": "交织路线多次经过核心区，优先投资覆盖交点的工位，出口预留单点火力。", "waves": 18, "budget": 720, "tint": "#77836d", "route": [[-30, 100], [320, 100], [320, 450], [600, 450], [600, 100], [850, 100], [850, 300], [120, 300], [120, 490], [1035, 490]], "slots": [[210, 400], [770, 200], [690, 400], [230, 200], [510, 220], [830, 380], [90, 200], [930, 180], [410, 140]], "waveCycle": ["bug", "model", "mix", "fast", "meeting", "mix", "paper"], "pressure": 1.65}, {"theme": "office", "name": "最后一班地铁", "subtitle": "短线突围 · 极限控场", "description": "路线短、容错低，提前准备测试与产品，别只堆单点伤害。", "waves": 20, "budget": 800, "tint": "#77836d", "route": [[-30, 320], [300, 320], [300, 170], [640, 170], [640, 350], [1035, 350]], "slots": [[210, 240], [730, 260], [550, 260], [390, 260], [930, 440], [90, 400], [730, 440], [250, 400], [670, 100], [270, 100]], "waveCycle": ["fast", "bug", "mix", "model", "meeting", "mix", "fast"], "pressure": 1.4}]);

export const EVENTS=[
 {id:'copilot',name:'AI 结对时刻',kind:'buff',icon:'✦',desc:'全员攻速 +20%，持续 2 波',rate:1.2},
 {id:'migration',name:'工具白名单切换',kind:'debuff',icon:'↻',desc:'迁移适配期：攻速 −15%；补助 +60',rate:.85,grant:60},
 {id:'limit',name:'模型服务限流',kind:'debuff',icon:'⌛',desc:'请求等待：全员攻速 −18%，持续 2 波',rate:.82},
 {id:'review',name:'自动化代码审查',kind:'buff',icon:'⌘',desc:'研发伤害 +30%，持续 2 波',devDamage:1.3},
 {id:'budget',name:'推理预算紧缩',kind:'debuff',icon:'◈',desc:'运营产出 −25%，持续 2 波',income:.75},
 {id:'bounty',name:'缺陷悬赏计划',kind:'buff',icon:'⚑',desc:'击败需求奖励 +30%，持续 2 波',reward:1.3},
 {id:'meeting',name:'临时全员同步',kind:'debuff',icon:'◷',desc:'沟通占用：全员攻击范围 −12%',range:.88},
 {id:'creative',name:'灵感模型升级',kind:'buff',icon:'✧',desc:'设计伤害 +35%，持续 2 波',designDamage:1.35},
 {id:'rush',name:'需求预测偏差',kind:'debuff',icon:'!',desc:'加急蔓延：敌人移动速度 +15%',enemySpeed:1.15},
 {id:'quiet',name:'无会的星期五',kind:'buff',icon:'☀',desc:'专注时段：全员伤害 +15%',damage:1.15}
];
// Damage order: dev, product, design, QA. All counters are soft, never immune.
export const ENEMY_TRAITS={
 paper:{name:'普通',hint:'研发精准处理',damage:[1.15,1,1,1]},
 bug:{name:'装甲缺陷',hint:'测试伤害 ×1.8；研发 ×0.45',damage:[.45,.7,.8,1.8]},
 fast:{name:'高速插单',hint:'产品减速；研发伤害 ×0.7',damage:[.7,2,.8,.7]},
 meeting:{name:'成群会议',hint:'设计范围伤害 ×1.7；研发 ×0.5',damage:[.5,.7,1.7,.8]},
 model:{name:'模型护盾',hint:'测试破盾 4 秒；护盾减伤 80%',damage:[.2,.2,.2,1.5]},
 boss:{name:'厚血需求',hint:'研发伤害 ×1.4；设计 ×0.7',damage:[1.4,1,.7,1]},
 queen:{name:'缺陷集群',hint:'设计伤害 ×1.7；研发 ×0.5',damage:[.5,1,1.7,.8]},
 deadline:{name:'最终截止',hint:'研发持续输出、测试标记增伤',damage:[1.2,1,.8,1.2]}
};
export function matchup(kind,type,broken=false){return kind==='model'&&broken&&type!==3?1:(ENEMY_TRAITS[kind]?.damage[type]??1);}
export const enemyNames={paper:'临时需求',bug:'线上 Bug',fast:'紧急插单',boss:'大型需求',meeting:'会前同步',model:'模型限流',queen:'缺陷女王',deadline:'最终截止日'};
export const PRESSURE=LEVELS.map((l,i)=>l.pressure??[1,1.3,1.5,1.4][i]);
export function waveSpec(level,wave){const final=LEVELS[level].waves;if(wave===final)return {name:'最后的截止日',count:level+2,kind:'deadline'};if(level>=4&&(wave===3||wave===9))return {name:'护盾需求',count:Math.ceil((7+wave*2+level*2)*.6),kind:'model'};if(wave%7===0)return {name:'缺陷女王',count:level+1,kind:'queen'};if(wave%5===0)return {name:'大版本发布',count:1+Math.floor(level/2),kind:'boss'};const cycle=LEVELS[level].waveCycle||['paper','bug','fast','mix','meeting','model','mix'];const kind=cycle[(wave-1+(LEVELS[level].waveCycle?0:level))%cycle.length];return {name:kind==='mix'?'混合需求':enemyNames[kind],count:Math.ceil((7+wave*2+level*2)*(kind==='model'?.65:1)),kind};}
export function spriteCell(t){if(t.level<3)return t.level;return t.branch==='manager'?t.level+2:t.level;}
