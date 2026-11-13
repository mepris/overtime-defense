// Career direction names are game design, not any company's official job ladder.
export const CAREERS={
 dev:{ic:{name:'架构方向',titles:['架构专家','首席架构师'],quote:'这次真的是最后一次重构。'},manager:{name:'技术带队',titles:['技术负责人','研发负责人'],quote:'你们先下班，我看一眼。'}},
 qa:{ic:{name:'自动化测试',titles:['测试开发','自动化测试专家'],quote:'回归跑完了，你再提交试试？'},manager:{name:'质量保障',titles:['质量保障','质量负责人'],quote:'这个版本，我不同意上线。'}},
 pm:{ic:{name:'用户产品',titles:['用户产品','用户产品专家'],quote:'用户真的需要这个吗？'},manager:{name:'平台产品',titles:['平台产品','平台产品负责人'],quote:'统一一下，别再各做一套。'}},
 design:{ic:{name:'视觉设计',titles:['视觉设计','视觉设计专家'],quote:'这一版，视觉冲击力拉满。'},manager:{name:'体验设计',titles:['体验设计','体验设计专家'],quote:'这里为什么还要点三次？'}},
 ops:{ic:{name:'增长运营',titles:['增长运营','增长策略专家'],quote:'这个增长可以复用。'},manager:{name:'活动运营',titles:['活动运营','活动策划负责人'],quote:'预算不多，声量要大。'}}
};
export function career(type,branch){return CAREERS[type.id][branch];}
export function careerTitle(type,t){return t.branch?career(type,t.branch).titles[t.level===4?1:0]:'专业成长';}
export function careerEffect(type,branch,level=3){if(branch==='ic')return type.skill.replace('IC：','');const high=level===4;return {dev:'附近伙伴伤害 +'+(high?28:18)+'%',qa:'标记增伤 '+(high?65:50)+'%；破盾 '+(high?8:6)+' 秒',pm:'半径 '+(high?95:70)+' 群体减速 45%，持续 '+(high?3:2.5)+' 秒',design:'范围攻击附带减速 '+(high?30:20)+'%，持续 1.5 秒',ops:'每波额外预算 +'+(high?70:40)}[type.id];}
