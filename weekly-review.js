const timeline = [
  {date:'09/03',type:'职业',title:'腾讯游戏产品经理实习成为本周主线',detail:'收到面试与材料推进反馈，开始围绕实习机会安排后续。'},
  {date:'09/03',type:'开发',title:'收集表单网站进入协作阶段',detail:'提供源码并提出硬编码文本修复需求，后续缺少验收记录。'},
  {date:'09/04',type:'生活',title:'学校请假成为入职前依赖',detail:'确认需要逐一联系任课老师与辅导员，手续尚未形成确认闭环。'},
  {date:'09/05',type:'生活',title:'新生服务与校园网络问题占用精力',detail:'处理校园卡、网络与新生相关事项，属于必要但低杠杆事务。'},
  {date:'09/06',type:'学习',title:'紧急完成新生展示 PPT',detail:'《加油T小P.pptx》已制作并发送，学习事项完成一次交付。'},
  {date:'09/06',type:'品牌',title:'Alan 站完成一次更新',detail:'页面有推进，但缺少公开访问、移动端与功能验收结论。'},
  {date:'09/07',type:'职业',title:'确认腾讯游戏产品经理实习 offer',detail:'6 个月，7500 元 / 月；由 AI 辅助投递推进到真实结果。'},
  {date:'09/08',type:'生活',title:'购买前往深圳的机票，搬迁正式启动',detail:'开始比较坪洲 / 西乡房源，并重新评估是否携带 MacBook M2 Air。'}
];

const projects = [
  {id:'internship',title:'腾讯游戏产品经理实习',status:'进行中',progress:68,tag:'职业',summary:'offer 已确认，下一步是把入职信息、学校手续和抵达安排逐项确认。',done:'完成 AI 辅助投递、材料发送、面试推进与 offer 确认。',todo:'入职时间 / 地点 / 材料清单；与学校完成请假沟通。',issue:'关键确认依赖外部回复，当前没有保存下来的确认凭证。',next:'发 HR 确认消息，并建立入职信息清单。'},
  {id:'shenzhen',title:'深圳搬迁与租房',status:'进行中',progress:52,tag:'生活',summary:'机票已定，房源比较刚开始，首晚安排与落地交通仍为空。',done:'购买机票；开始比较坪洲 / 西乡区域。',todo:'锁定首晚住处；核验房源、合同、费用与交通。',issue:'房源信息存在“串串房”风险，线上比较不能替代现场核验。',next:'今天先订首晚安全方案，再约 2 个房源实地看。'},
  {id:'ai-digest',title:'每日 AI 新闻摘要',status:'进行中',progress:42,tag:'AI',summary:'已建立飞书表格与每日 9:00 更新意图，连续执行证据不足。',done:'分享飞书表格；明确每日更新节奏。',todo:'验证是否持续 3 天；若影响 P0 则暂停。',issue:'它容易变成稳定的“准备感”，却没有明确产出价值回顾。',next:'P0 收口后再维持三天，并复盘是否值得继续。'},
  {id:'leave',title:'学校请假手续',status:'未收口',progress:24,tag:'生活',summary:'已识别为入职前阻塞项，尚未看到老师与辅导员确认。',done:'确认需要逐一请假。',todo:'列出老师名单，逐一发送消息，收集回复。',issue:'行政动作简单却高影响，拖延会直接影响入职安排。',next:'今天发出第一轮请假消息。'},
  {id:'alan',title:'Alan 站更新',status:'待验证',progress:74,tag:'品牌',summary:'有一次更新动作，但缺少最终体验验收与发布结论。',done:'完成页面更新。',todo:'检查公开 URL、移动端、核心交互与控制台错误。',issue:'开发完成被误当成项目完成。',next:'做一次 20 分钟验收，留下通过 / 待修复记录。'},
  {id:'form',title:'收集表单网站协作',status:'未收口',progress:28,tag:'开发',summary:'已进入源码协作，但没有后续交付或验收证据。',done:'提供源码；明确硬编码文本修复方向。',todo:'确认修复是否合并，提交一次真实表单测试。',issue:'协作边界和最终负责人不清晰。',next:'发一条状态确认消息，24 小时无回复则暂停。'},
  {id:'mac',title:'MacBook M2 Air 去留',status:'待决策',progress:36,tag:'生活',summary:'原计划出售，后改为先带去深圳，设备决策暂时悬置。',done:'识别公司可能提供设备，调整为先带走。',todo:'确认公司设备政策，再决定保留或出售。',issue:'决策依据还没拿到，提前处理会造成返工。',next:'等入职设备确认后一次性决策。'},
  {id:'ppt',title:'新生展示 PPT',status:'已完成',progress:100,tag:'学习',summary:'已完成并发送《加油T小P.pptx》，属于本周少数真正收口的事项。',done:'完成制作并发送文件。',todo:'无。',issue:'无。',next:'归档文件，避免重复修改。'}
];

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];

function renderTimeline(){
  $('#timeline-list').innerHTML = timeline.map(item => `<article class="timeline-item"><time class="timeline-date">${item.date} / 26</time><span class="timeline-type">${item.type}</span><strong class="timeline-content">${item.title}</strong><span class="timeline-detail">${item.detail}</span></article>`).join('');
}

function openDialog(kicker, title, facts){
  $('#dialog-kicker').textContent = kicker;
  $('#dialog-title').textContent = title;
  $('#dialog-body').innerHTML = `<div class="dialog-grid">${facts.map(([label,value]) => `<div class="dialog-fact"><b>${label}</b><span>${value}</span></div>`).join('')}</div>`;
  $('#detail-dialog').showModal();
}

function renderProjects(filter='all'){
  const visible = projects.filter(project => filter === 'all' || (filter === 'pending' ? ['未收口','待验证','待决策'].includes(project.status) : project.status === filter));
  $('#project-grid').innerHTML = visible.map(project => `<article class="project-card" data-status="${project.status}" data-project="${project.id}" tabindex="0" role="button" aria-label="查看${project.title}详情"><div class="project-top"><span class="project-index">${String(projects.indexOf(project)+1).padStart(2,'0')}</span><span class="project-status">${project.status}</span></div><h3>${project.title}</h3><p>${project.summary}</p><div class="project-bottom"><div class="progress-line" aria-label="进度 ${project.progress}%"><i style="width:${project.progress}%"></i></div><div class="project-meta"><span>${project.tag}</span><span>${project.progress}%</span></div></div></article>`).join('');
  $$('.project-card').forEach(card => { const show = () => { const p = projects.find(item => item.id === card.dataset.project); openDialog(`${p.tag} / ${p.status}`, p.title, [['本周已完成',p.done],['尚未完成',p.todo],['当前问题',p.issue],['下一步',p.next]]); }; card.addEventListener('click',show); card.addEventListener('keydown',event => {if(event.key === 'Enter' || event.key === ' '){event.preventDefault();show();}}); });
}

renderTimeline();
renderProjects();
$$('.filter-button').forEach(button => button.addEventListener('click', () => { $$('.filter-button').forEach(item => item.classList.remove('active')); button.classList.add('active'); renderProjects(button.dataset.filter); }));
const loopDetails = {
  leave: ['生活 / 未收口','学校请假手续','先列老师与辅导员名单，再发送第一轮消息并保存回复。'],
  housing: ['生活 / 进行中','深圳首晚住宿与租房','先锁定首晚安全方案，再推进 2 个可现场核验的房源。'],
  onboarding: ['职业 / 进行中','入职前信息确认','向 HR 确认入职时间、地点、材料清单，形成文字凭证。'],
  web: ['开发 / 待验证','网站与表单项目','分别做一次 Alan 站与表单提交验收，写下通过 / 待修复结论。'],
  mac: ['生活 / 待决策','MacBook M2 Air 去留','等公司设备政策确认后一次性决定，暂不重复比较。']
};
$$('[data-open]').forEach(button => button.addEventListener('click', () => {
  const copy = loopDetails[button.dataset.open];
  openDialog(copy[0], copy[1], [['最小下一步', copy[2]], ['状态证据', '当前聊天记录未显示最终完成凭证。']]);
}));
$('.dialog-close').addEventListener('click', () => $('#detail-dialog').close());
$('#detail-dialog').addEventListener('click', event => { if(event.target === $('#detail-dialog')) $('#detail-dialog').close(); });
$('#theme-toggle').addEventListener('click', () => { const next = document.documentElement.dataset.theme === 'dark' ? '' : 'dark'; document.documentElement.dataset.theme = next; localStorage.setItem('weekly-theme', next); });
const savedTheme = localStorage.getItem('weekly-theme'); if(savedTheme) document.documentElement.dataset.theme = savedTheme;
