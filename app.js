/**
 * TP Space · Application Engine
 * Vector SVGs, Humanized Microcopy, Matrix Rendering & Magnetic Effects
 */

// SVG 矢量图标库
const ICONS = {
  personal: `<svg class="svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
  ai: `<svg class="svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line></svg>`,
  analytics: `<svg class="svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
  network: `<svg class="svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
  life: `<svg class="svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,

  brain: `<svg class="svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z"></path></svg>`,
  code: `<svg class="svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
  timeline: `<svg class="svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
  academic: `<svg class="svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`,
  pixel: `<svg class="svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="6" height="6"></rect><rect x="16" y="2" width="6" height="6"></rect><rect x="9" y="9" width="6" height="6"></rect><rect x="2" y="16" width="6" height="6"></rect><rect x="16" y="16" width="6" height="6"></rect></svg>`,
  video: `<svg class="svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`,
  paper: `<svg class="svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
  message: `<svg class="svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`,
  spark: `<svg class="svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  gear: `<svg class="svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
  tv: `<svg class="svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="15" rx="3"></rect><polyline points="7 2 10 6"></polyline><polyline points="17 2 14 6"></polyline></svg>`,
  chart: `<svg class="svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>`,
  globe: `<svg class="svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
  newspaper: `<svg class="svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path><path d="M18 14h-8"></path><path d="M15 18h-5"></path><path d="M10 6h8v4h-8V6Z"></path></svg>`,
  survey: `<svg class="svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="m9 14 2 2 4-4"></path></svg>`,
  table: `<svg class="svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>`,
  school: `<svg class="svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path><path d="M6 6h10"></path><path d="M6 10h10"></path></svg>`,
  box3d: `<svg class="svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="m21 16-9 5-9-5V8l9-5 9 5v8Z"></path><path d="m3.27 6.96 8.73 4.84 8.73-4.84"></path><path d="M12 22.08V12"></path></svg>`,
  flag: `<svg class="svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>`,
  doc: `<svg class="svg-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>`
};

// 29 个站点数据 (遵循 humanizer-zh 朴实真实的叙事风格)
const SERVICES = [
  // 1. 个人与学术 (6)
  {
    id: "tprompts",
    name: "TPrompts · 提示词模板库",
    subdomain: "prompts.tpgofighting.top",
    url: "https://prompts.tpgofighting.top/",
    category: "ai-tools",
    categoryName: "AI 工具与平台",
    iconKey: "spark",
    desc: "精选 AI 提示词与 Prompt 模板库，涵盖角色设定、工作流自动化、代码生成与创意写作。",
    tags: ["提示词", "Prompt工程", "模板库", "AI工具"],
    tech: "HTML5 / CSS3 / JavaScript",
    port: "80 / 443",
    path: "/var/www/tprompts"
  },
  {
    id: "tpself",
    name: "唐潘 · 个人主页",
    subdomain: "tpself.tpgofighting.top",
    url: "https://tpself.tpgofighting.top",
    category: "personal",
    categoryName: "个人与学术",
    iconKey: "code",
    desc: "记录了平时的项目作品、精神地图、技术栈和生活随笔。",
    tags: ["个人主页", "React", "作品集"],
    tech: "Vite + React / 响应式布局",
    port: "8082",
    path: "/var/www/tpself"
  },
  {
    id: "tangpan",
    name: "唐潘 · 经历叙事",
    subdomain: "tangpan.tpgofighting.top",
    url: "https://tangpan.tpgofighting.top",
    category: "personal",
    categoryName: "个人与学术",
    iconKey: "timeline",
    desc: "按时间线整理的个人经历与阶段性记录，包含从大学至今做过的项目与轨迹。",
    tags: ["个人履历", "经历记录", "时间线"],
    tech: "HTML5 / Tailwind CSS",
    port: "8081",
    path: "/var/www/tangpan"
  },
  {
    id: "ai",
    name: "Tyler Tang · 学术主页",
    subdomain: "ai.tpgofighting.top",
    url: "https://ai.tpgofighting.top",
    category: "personal",
    categoryName: "个人与学术",
    iconKey: "academic",
    desc: "学术与研究主页，放了我的研究方向、发表过的论文、精选作品与开源仓库。",
    tags: ["学术主页", "论文", "研究方向"],
    tech: "Clean Academic Layout",
    port: "8083",
    path: "/var/www/ai"
  },
  // 2. AI 工具与学习 (10)
  {
    id: "teachplayer",
    name: "Teach Player · 视频双语精读",
    subdomain: "teachplayer.tpgofighting.top",
    url: "https://teachplayer.tpgofighting.top",
    category: "ai-tools",
    categoryName: "AI 工具与平台",
    iconKey: "video",
    desc: "输入视频链接，自动提取并对其双语字幕，生成分段结构化笔记。",
    tags: ["视频学习", "双语字幕", "Next.js"],
    tech: "Next.js / Whisper API",
    port: "3000 / PM2",
    path: "/var/www/videomind"
  },
  {
    id: "tphub",
    name: "TP-Hub · TaskSkillPilot 聚合中心",
    subdomain: "tphub.tpgofighting.top",
    url: "https://tphub.tpgofighting.top",
    category: "ai-tools",
    categoryName: "AI 工具与平台",
    iconKey: "gear",
    desc: "AI 技能与智能体代理聚合中心，汇集 OpenHands、Graphify、ECC 等开源 AI 工具深度解读与实战教程。",
    tags: ["AI技能", "Agent编排", "开源工具", "自动化"],
    tech: "HTML5 / CSS3 / Nginx",
    port: "8085",
    path: "/var/www/tphub"
  },
  {
    id: "tpvibe",
    name: "TPvibe · 沉浸式编程实操指南",
    subdomain: "tphub.tpgofighting.top/tpvibe/",
    url: "https://tphub.tpgofighting.top/tpvibe/",
    category: "ai-tools",
    categoryName: "AI 工具与平台",
    iconKey: "spark",
    desc: "专为沉浸式编程（Vibe Coding）打造的实战教程库与工具箱，涵盖 AI 提示词工程与实操演练。",
    tags: ["Vibe Coding", "开发教程", "工具箱", "沉浸编程"],
    tech: "Static Docs / Markdown",
    port: "8085 / Nginx",
    path: "/var/www/tphub/tpvibe"
  },
  {
    id: "tpaper",
    name: "TPaper · AI 试卷转换",
    subdomain: "tpaper.tpgofighting.top",
    url: "https://tpaper.tpgofighting.top",
    category: "ai-tools",
    categoryName: "AI 工具与平台",
    iconKey: "paper",
    desc: "上传 PDF 或 Word 试卷，自动提取题目并转换成可在网页上直接练习的交互题库。",
    tags: ["试卷解析", "FastAPI", "React"],
    tech: "FastAPI / React / OCR",
    port: "8084",
    path: "/var/www/tpaper"
  },
  {
    id: "chat",
    name: "好好说话 · 沟通练习馆",
    subdomain: "chat.tpgofighting.top",
    url: "https://chat.tpgofighting.top",
    category: "ai-tools",
    categoryName: "AI 工具与平台",
    iconKey: "message",
    desc: "一个练习沟通表达的小工具，带有沟通风格测评和场景练习计划。",
    tags: ["沟通练习", "测评工具", "场景训练"],
    tech: "Vue.js / Tailwind CSS",
    port: "8085",
    path: "/var/www/chat"
  },
  {
    id: "notes",
    name: "AI 开发风向标",
    subdomain: "notes.tpgofighting.top",
    url: "https://notes.tpgofighting.top",
    category: "ai-tools",
    categoryName: "AI 工具与平台",
    iconKey: "spark",
    desc: "孟菲斯风格的 AI 动态速记，追踪业内新模型、论文和开发笔记。",
    tags: ["开发笔记", "孟菲斯风", "技术追踪"],
    tech: "Memphis Style / React",
    port: "8086",
    path: "/var/www/notes"
  },
  {
    id: "skillver",
    name: "SkillVer · 技能版本管理",
    subdomain: "skillver.tpgofighting.top",
    url: "https://skillver.tpgofighting.top",
    category: "ai-tools",
    categoryName: "AI 工具与平台",
    iconKey: "gear",
    desc: "管理和分发 Agent Skills 的版本控制工具，支持能力注册与版本切换。",
    tags: ["Agent Skills", "版本管理", "Node.js"],
    tech: "Node.js / Express / Git Sync",
    port: "8087",
    path: "/var/www/skillver"
  },

  // 3. 数据洞察与大屏 (4)
  {
    id: "tpbili",
    name: "TPbili · B站画像与分析",
    subdomain: "bili.tpgofighting.top",
    url: "https://bili.tpgofighting.top",
    category: "analytics",
    categoryName: "数据洞察与大屏",
    iconKey: "tv",
    desc: "输入 B 站 UID 生成像素风画像，或输入视频 BV 号分析评论区的高频讨论点。",
    tags: ["B站分析", "像素风", "评论分析"],
    tech: "Python / Flask / Bilibili API",
    port: "8000 / PM2 (tpbili)",
    path: "/home/ubuntu/tpbili"
  },
  {
    id: "shiyou",
    name: "B站评论区洞察大屏",
    subdomain: "shiyou.tpgofighting.top",
    url: "https://shiyou.tpgofighting.top",
    category: "analytics",
    categoryName: "数据洞察与大屏",
    iconKey: "chart",
    desc: "抓取 B 站热门视频评论区数据做成的大屏，分析专升本、考公和跨考等话题的讨论倾向。",
    tags: ["数据看板", "ECharts", "舆论分析"],
    tech: "ECharts / Data Dashboard",
    port: "8089",
    path: "/var/www/shiyou"
  },
  {
    id: "wx",
    name: "CyberPulse · 微信记录星图",
    subdomain: "wx.tpgofighting.top",
    url: "https://wx.tpgofighting.top",
    category: "analytics",
    categoryName: "数据洞察与大屏",
    iconKey: "globe",
    desc: "把 22 万条微信记录做成了 3D 引力星图，可以在空间里查看互动轨迹。",
    tags: ["3D可视化", "Three.js", "微信星图"],
    tech: "Three.js / WebGL / Graph",
    port: "8090",
    path: "/var/www/wx"
  },
  {
    id: "wearticle",
    name: "WeArticle · 每日长文精读",
    subdomain: "wearticle.tpgofighting.top",
    url: "https://wearticle.tpgofighting.top",
    category: "analytics",
    categoryName: "数据洞察与大屏",
    iconKey: "newspaper",
    desc: "自动抓取微信公众号文章并由 AI 总结成每日长文杂志，方便快速阅读。",
    tags: ["文章抓取", "每日精选", "自动总结"],
    tech: "Crawler / Markdown Reader",
    port: "8091",
    path: "/var/www/wearticle"
  },

  // 4. 人才网络与申请 (2)
  {
    id: "yatn",
    name: "YATN · 青年 AI 人才网络申请",
    subdomain: "yatn.tpgofighting.top",
    url: "https://yatn.tpgofighting.top",
    category: "network",
    categoryName: "人才网络与申请",
    iconKey: "survey",
    desc: "青年 AI 人才网络成员申请入口，包含通用申请表与东南大学专版。",
    tags: ["问卷表单", "社区申请", "Express"],
    tech: "Express / Survey.js",
    port: "3002 / PM2 (survey)",
    path: "/var/www/survey"
  },
  {
    id: "caipu",
    name: "才谱 (caipu) · 成员管理后台",
    subdomain: "caipu.tpgofighting.top",
    url: "https://caipu.tpgofighting.top",
    category: "network",
    categoryName: "人才网络与申请",
    iconKey: "table",
    desc: "YATN 成员评估数据与申请表的管理后台。",
    tags: ["管理后台", "数据审批", "Node.js"],
    tech: "Node.js / Vue Admin",
    port: "3001 / PM2 (caipu)",
    path: "/var/www/caipu"
  },

  // 5. 校园特辑与生活 (7)
  {
    id: "njupt",
    name: "南邮入学指南 · T小P版",
    subdomain: "njupt.tpgofighting.top",
    url: "https://njupt.tpgofighting.top",
    category: "life",
    categoryName: "校园特辑与生活",
    iconKey: "school",
    desc: "给南邮新生写的一份入学指南，包括军训、晨跑、食堂避坑和选课建议。",
    tags: ["南邮指南", "新生攻略", "手绘插画"],
    tech: "Interactive Guide / Mobile First",
    port: "8092",
    path: "/var/www/njupt"
  },
  {
    id: "redwood",
    name: "雨山红木 · 3D 数字展厅",
    subdomain: "redwood.tpgofighting.top",
    url: "https://redwood.tpgofighting.top",
    category: "life",
    categoryName: "校园特辑与生活",
    iconKey: "box3d",
    desc: "为雨山红木底座搭建的 3D 数字展厅，支持 360 度旋转和材质细节查看。",
    tags: ["3D展厅", "WebGL", "红木底座"],
    tech: "Three.js / OrbitControls",
    port: "8093",
    path: "/var/www/redwood"
  },
  {
    id: "wtjneslzdj",
    name: "猪肚鸡事件 · 像素复盘",
    subdomain: "wtjneslzdj.tpgofighting.top",
    url: "https://wtjneslzdj.tpgofighting.top",
    category: "life",
    categoryName: "校园特辑与生活",
    iconKey: "flag",
    desc: "用 8-Bit 像素风做的日常事件复盘，记录了一次吃猪肚鸡过程中的小插曲。",
    tags: ["事件复盘", "像素故事", "生活趣味"],
    tech: "Pixel Narrative / HTML5",
    port: "8094",
    path: "/var/www/wtjneslzdj"
  },
  {
    id: "lanbo",
    name: "聊天记录事实梳理",
    subdomain: "lanbo.tpgofighting.top",
    url: "https://lanbo.tpgofighting.top",
    category: "life",
    categoryName: "校园特辑与生活",
    iconKey: "doc",
    desc: "按时间顺序整理的沟通记录与客观事实归档页面。",
    tags: ["时间线", "事实归档", "文档整理"],
    tech: "Timeline Document",
    port: "8095",
    path: "/var/www/lanbo"
  },
  {
    id: "claudesafety",
    name: "TP 安全课堂 · Web 权限攻防",
    subdomain: "claudesafety.tpgofighting.top",
    url: "https://claudesafety.tpgofighting.top",
    category: "ai-tools",
    categoryName: "AI 工具与平台",
    iconKey: "gear",
    desc: "基于真实案例拆解现代 Web 架构中的权限错位、攻击面与防御方法。",
    tags: ["Web安全", "权限攻防", "实战复盘"],
    tech: "HTML5 / JavaScript / Security Notes",
    port: "80",
    path: "/var/www/claudesafety"
  },
  {
    id: "kebiao",
    name: "唐潘课表 · 学期时间表",
    subdomain: "kebiao.tpgofighting.top",
    url: "https://kebiao.tpgofighting.top",
    category: "life",
    categoryName: "校园特辑与生活",
    iconKey: "school",
    desc: "将学期课程、教室与时间整理为一张轻量、易查看的个人课表。",
    tags: ["课程表", "校园生活", "时间管理"],
    tech: "HTML5 / CSS3 / JavaScript",
    port: "80",
    path: "/var/www/kebiao"
  },
  {
    id: "mails",
    name: "T小P的邮件档案",
    subdomain: "mails.tpgofighting.top",
    url: "https://mails.tpgofighting.top",
    category: "personal",
    categoryName: "个人与学术",
    iconKey: "doc",
    desc: "将阅读邮件与长期资料沉淀为一套可回顾的个人档案。",
    tags: ["邮件档案", "阅读记录", "个人知识"],
    tech: "HTML5 / CSS3 / JavaScript",
    port: "8097",
    path: "/var/www/mails"
  },
  {
    id: "rednote",
    name: "TP的小红书 · AI 好帖",
    subdomain: "rednote.tpgofighting.top",
    url: "https://rednote.tpgofighting.top",
    category: "life",
    categoryName: "校园特辑与生活",
    iconKey: "spark",
    desc: "精选 AI 好帖与视觉灵感，整理成一份可轻松浏览的个人探索手札。",
    tags: ["小红书", "AI阅读", "视觉灵感"],
    tech: "HTML5 / CSS3 / JavaScript",
    port: "80",
    path: "/var/www/rednote"
  },
  {
    id: "tokenpool",
    name: "TokenPool · AI API Gateway",
    subdomain: "token.tpgofighting.top",
    url: "https://token.tpgofighting.top",
    category: "ai-tools",
    categoryName: "AI 工具与平台",
    iconKey: "gear",
    desc: "统一管理 AI API 通道、令牌池与工作台入口，为多个智能体工具提供调用基础。",
    tags: ["API Gateway", "Token池", "Agent基础设施"],
    tech: "Node.js / OmniCrawler / Redis",
    port: "80 / 8095 / 8098",
    path: "/var/www/tokenpool"
  },
  {
    id: "tpos",
    name: "TP OS · 个人操作系统",
    subdomain: "tpos.tpgofighting.top",
    url: "https://tpos.tpgofighting.top",
    category: "personal",
    categoryName: "个人与学术",
    iconKey: "code",
    desc: "面向个人上下文、任务与工具的操作系统式入口，连接日常工作与长期记忆。",
    tags: ["个人OS", "上下文系统", "AI Agent"],
    tech: "HTML5 / JavaScript / Node.js API",
    port: "80 / 8092",
    path: "/var/www/tpos"
  },
  {
    id: "xuezhang",
    name: "学长我有一个问题",
    subdomain: "xuezhang.tpgofighting.top",
    url: "https://xuezhang.tpgofighting.top",
    category: "life",
    categoryName: "校园特辑与生活",
    iconKey: "academic",
    desc: "用问答式叙事整理校园经验与成长问题，给后来者一份可读的参考。",
    tags: ["校园问答", "经验分享", "成长记录"],
    tech: "Tailwind CSS / HTML5",
    port: "80",
    path: "/var/www/xuezhang"
  }
];

// 24 张海报与唱片元数据（电影 / 音乐专辑）
const POSTERS_DATA = [
  { file: "poster-0.png", title: "霸王别姬", type: "经典电影", desc: "陈凯歌导演，张国荣主演。不疯魔不成活的中国影史巅峰。" },
  { file: "poster-4.png", title: "平原上的摩西", type: "剧集 / 电影", desc: "双雪涛同名小说改编，凛冽冷峻的东北下岗时代叙事。" },
  { file: "poster-5.png", title: "Call Me by Your Name", type: "电影原声", desc: "Luca Guadagnino 导演，Sufjan Stevens 纯澈盛夏之音。" },
  { file: "poster-6.png", title: "蜘蛛侠：英雄无归", type: "漫威电影", desc: "三代同框的终极情怀时刻，英雄成长与代价的史诗注解。" },
  { file: "poster-7.png", title: "哆啦A梦：伴我同行 2", type: "动画电影", desc: "大雄与静香的婚礼约定，献给长大后依然相信温柔的成年人。" },
  { file: "poster-8.png", title: "花样年华", type: "王家卫电影", desc: "梁朝伟与张曼玉，昏黄街灯下的旗袍摇曳与欲言又止。" },
  { file: "poster-9.png", title: "小丑 (Joker)", type: "电影原声", desc: "Joaquin Phoenix 炸裂演技与幽暗大提琴交响。" },
  { file: "poster-10.png", title: "嘉年华", type: "现实主义电影", desc: "文晏执导，关注未成年女性成长困境的沉静之作。" },
  { file: "poster-11.png", title: "爱乐之城 (La La Land)", type: "音乐电影", desc: "星空洛杉矶与爵士乐梦想，致敬所有执着的追梦人。" },
  { file: "poster-12.png", title: "千与千寻", type: "吉卜力动画", desc: "宫崎骏与久石让，关于生命成长与不要回头的寓言。" },
  { file: "poster-13.png", title: "海上钢琴师", type: "经典电影", desc: "1900 与一生未曾踏上陆地的传奇琴音。" },
  { file: "poster-14.png", title: "星际穿越 (Interstellar)", type: "科幻巨制", desc: "爱是唯一可以超越时间与空间维度的引力。" },
  { file: "poster-15.png", title: "楚门的世界", type: "哲学电影", desc: "倘若再也见不到你，祝你早安、午安、晚安。" },
  { file: "poster-16.png", title: "低俗小说 (Pulp Fiction)", type: "黑色幽默", desc: "Quentin 环形叙事与后现代波普视听教科书。" },
  { file: "poster-17.png", title: "布达佩斯大饭店", type: "美学电影", desc: "Wes Anderson 对称构图与马卡龙复古欧洲旧梦。" },
  { file: "poster-18.png", title: "海边的小说家", type: "文艺光影", desc: "海风微咸、文字与时光沉淀的独立小众光影。" },
  { file: "poster-19.png", title: "少年派的奇幻漂流", type: "奇幻史诗", desc: "李安导演，那只孟加拉虎与太平洋星空下的终极冥想。" },
  { file: "poster-20.png", title: "爱在黎明破晓前", type: "浪漫三部曲", desc: "维也纳列车上的偶然相遇与整夜无休的长谈。" },
  { file: "poster-21.png", title: "重庆森林", type: "王家卫电影", desc: "金城武、林青霞与罐头凤梨过期的保质期哲思。" },
  { file: "poster-22.png", title: "教父 (The Godfather)", type: "影史丰碑", desc: "不可拒绝的条件与家族责任命运的沉重交锋。" },
  { file: "poster-23.png", title: "盗梦空间 (Inception)", type: "科幻悬疑", desc: "梦境多层筑构与旋转未停的陀螺潜意识奇观。" },
  { file: "poster-24.png", title: "深海大饭店", type: "视觉动画", desc: "粒子水墨奇观与心灵救赎的梦幻沉浸体验。" },
  { file: "poster-25.png", title: "瞬息全宇宙", type: "前沿奇幻", desc: "多元宇宙贝果黑洞与母女和解的荒诞浪漫。" },
  { file: "poster-26.png", title: "银翼杀手 2049", type: "赛博朋克", desc: "Denis Villeneuve 执导，霓虹雨幕与仿生人眼中的泪水微光。" }
];

const POSTERS = POSTERS_DATA.map(p => p.file);
let activePosters = [...POSTERS_DATA];
let currentSpotlightIndex = 0;

// 全局应用状态
const state = {
  activeCategory: "all",
  searchQuery: "",
  viewMode: localStorage.getItem("tpspace_view") || "grid",
  theme: localStorage.getItem("tpspace_theme") || "light"
};

// 这些核心入口已上移到 Section 01，矩阵只展示其余站点与服务。
const FEATURED_SERVICE_IDS = new Set([
  "tprompts", "teachplayer", "tpaper", "tpvibe", "notes", "tphub",
  "claudesafety", "kebiao", "mails", "rednote", "tokenpool", "tpos",
  "xuezhang", "tpbili", "wx"
]);

// DOM 元素缓存
let elements = {};

function init() {
  elements = {
    servicesGrid: document.getElementById("services-grid"),
    postersRail: document.getElementById("posters-rail"),
    postersScatterWall: document.getElementById("posters-scatter-wall"),
    postersStreamWrapper: document.getElementById("posters-stream-wrapper"),
    postersStreamRail: document.getElementById("posters-stream-rail"),
    postersShuffleBtn: document.getElementById("posters-shuffle-btn"),
    postersViewToggle: document.getElementById("posters-view-toggle"),
    
    // Poster Spotlight Modal
    posterSpotlightModal: document.getElementById("poster-spotlight-modal"),
    posterSpotlightClose: document.getElementById("poster-spotlight-close"),
    spotlightImg: document.getElementById("spotlight-img"),
    spotlightTitle: document.getElementById("spotlight-title"),
    spotlightSerial: document.getElementById("spotlight-serial"),
    spotlightKicker: document.getElementById("spotlight-kicker"),
    spotlightDesc: document.getElementById("spotlight-desc"),
    spotlightPrevBtn: document.getElementById("spotlight-prev-btn"),
    spotlightNextBtn: document.getElementById("spotlight-next-btn"),

    searchInput: document.getElementById("global-search-input"),
    searchClearBtn: document.getElementById("search-clear-btn"),
    emptyState: document.getElementById("empty-search-state"),
    resetSearchBtn: document.getElementById("reset-search-btn"),
    themeSwitchBtn: document.getElementById("theme-switch-btn"),
    viewGridBtn: document.getElementById("view-mode-grid"),
    viewListBtn: document.getElementById("view-mode-list"),
    toast: document.getElementById("global-toast"),
    
    // Modal
    detailModal: document.getElementById("detail-modal"),
    modalCloseBtn: document.getElementById("modal-close-btn"),
    modalIconBadge: document.getElementById("modal-icon-badge"),
    modalSiteTitle: document.getElementById("modal-site-title"),
    modalSubdomainLink: document.getElementById("modal-subdomain-link"),
    modalDescTxt: document.getElementById("modal-desc-txt"),
    modalCategoryVal: document.getElementById("modal-category-val"),
    modalTechVal: document.getElementById("modal-tech-val"),
    modalTagsBox: document.getElementById("modal-tags-box"),
    modalCopyLinkBtn: document.getElementById("modal-copy-link-btn"),
    modalOpenSiteBtn: document.getElementById("modal-open-site-btn"),

    // Contact Elsewhere Modal
    contactModal: document.getElementById("contact-modal"),
    contactModalClose: document.getElementById("contact-modal-close"),
    contactModalCancel: document.getElementById("contact-modal-cancel"),
    contactModalIcon: document.getElementById("contact-modal-icon"),
    contactModalTitle: document.getElementById("contact-modal-title"),
    contactModalDetail: document.getElementById("contact-modal-detail"),
    contactModalAction: document.getElementById("contact-modal-action"),

    // Mobile Navigation & Floating Button
    siteHeader: document.getElementById("site-header"),
    mobileFloatingBtn: document.getElementById("mobile-floating-menu-btn"),
    mobileMenuTriggerBtn: document.getElementById("mobile-menu-trigger-btn"),
    mobileDrawer: document.getElementById("mobile-nav-drawer"),
    drawerCloseBtn: document.getElementById("drawer-close-btn"),
    drawerThemeBtn: document.getElementById("drawer-theme-toggle-btn"),
    drawerThemeLabel: document.getElementById("drawer-theme-label")
  };

  // 应用存储的主题与视图
  applyTheme(state.theme);
  applyViewMode(state.viewMode);

  // 渲染矩阵与海报画廊
  renderMatrixServices();
  initPostersGallery();
  initFeaturedProductInteractions();

  // 事件绑定
  bindEvents();
  initMagneticButtons();
  initMobileScrollNavigation();
}

function bindEvents() {
  // 分类 Tab 切换
  document.querySelectorAll("#category-filter-tabs .cat-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setCategory(btn.dataset.cat);
    });
  });

  // 搜索输入（如果存在）
  if (elements.searchInput) {
    elements.searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      if (elements.searchClearBtn) elements.searchClearBtn.style.display = state.searchQuery ? "block" : "none";
      renderMatrixServices();
    });
  }

  if (elements.searchClearBtn) {
    elements.searchClearBtn.addEventListener("click", () => {
      if (elements.searchInput) elements.searchInput.value = "";
      state.searchQuery = "";
      elements.searchClearBtn.style.display = "none";
      renderMatrixServices();
    });
  }

  if (elements.resetSearchBtn) {
    elements.resetSearchBtn.addEventListener("click", () => {
      if (elements.searchInput) elements.searchInput.value = "";
      state.searchQuery = "";
      state.activeCategory = "all";
      if (elements.searchClearBtn) elements.searchClearBtn.style.display = "none";
      document.querySelectorAll(".cat-tab-btn").forEach(b => b.classList.toggle("active", b.dataset.cat === "all"));
      renderMatrixServices();
    });
  }

  // 快捷键 / 聚焦搜索
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && elements.searchInput && document.activeElement !== elements.searchInput) {
      e.preventDefault();
      elements.searchInput.focus();
      elements.searchInput.select();
    }
    if (e.key === "Escape") {
      closeDetailModal();
      closeContactModal();
      closeMobileDrawer();
    }
  });

  // 路由链接点击监听
  document.querySelectorAll(".nav-links .nav-item, .drawer-links-list .drawer-nav-item").forEach(link => {
    link.addEventListener("click", (e) => {
      const route = link.dataset.route;
      if (route) {
        e.preventDefault();
        switchRoute(route);
        if (typeof closeMobileDrawer === "function") closeMobileDrawer();
      }
    });
  });

  window.addEventListener("hashchange", handleHashRoute);

  // 主题切换
  elements.themeSwitchBtn.addEventListener("click", () => {
    applyTheme(state.theme === "light" ? "dark" : "light");
  });

  if (elements.drawerThemeBtn) {
    elements.drawerThemeBtn.addEventListener("click", () => {
      applyTheme(state.theme === "light" ? "dark" : "light");
      updateDrawerThemeLabel();
    });
  }

  // 移动端菜单与悬浮按钮
  if (elements.mobileMenuTriggerBtn) {
    elements.mobileMenuTriggerBtn.addEventListener("click", openMobileDrawer);
  }
  if (elements.mobileFloatingBtn) {
    elements.mobileFloatingBtn.addEventListener("click", openMobileDrawer);
  }
  if (elements.drawerCloseBtn) {
    elements.drawerCloseBtn.addEventListener("click", closeMobileDrawer);
  }
  if (elements.mobileDrawer) {
    elements.mobileDrawer.addEventListener("click", (e) => {
      if (e.target === elements.mobileDrawer) closeMobileDrawer();
    });
  }

  // 视图切换
  elements.viewGridBtn.addEventListener("click", () => applyViewMode("grid"));
  elements.viewListBtn.addEventListener("click", () => applyViewMode("list"));

  // 弹窗关闭
  elements.modalCloseBtn.addEventListener("click", closeDetailModal);
  elements.detailModal.addEventListener("click", (e) => {
    if (e.target === elements.detailModal) closeDetailModal();
  });

  // 联系方式行：鼠标跟随荧光聚光 + 点击打开联系方式弹窗
  document.querySelectorAll(".tp-contact-row").forEach(row => {
    row.addEventListener("pointermove", (e) => {
      const rect = row.getBoundingClientRect();
      row.style.setProperty("--contact-spot-x", `${e.clientX - rect.left}px`);
      row.style.setProperty("--contact-spot-y", `${e.clientY - rect.top}px`);
    }, { passive: true });
    row.addEventListener("click", () => openContactModal(row));
  });

  elements.contactModalClose?.addEventListener("click", closeContactModal);
  elements.contactModalCancel?.addEventListener("click", closeContactModal);
  elements.contactModalAction?.addEventListener("click", closeContactModal);
  elements.contactModal?.addEventListener("click", (e) => {
    if (e.target === elements.contactModal) closeContactModal();
  });
}

function initMobileScrollNavigation() {
  window.addEventListener("scroll", () => {
    if (window.innerWidth > 768) {
      if (elements.mobileFloatingBtn) elements.mobileFloatingBtn.classList.remove("visible");
      if (elements.siteHeader) elements.siteHeader.classList.remove("mobile-hidden");
      return;
    }

    const currentScroll = window.scrollY;
    if (currentScroll > 60) {
      // 下滑时隐藏顶部大导航栏，在右上角显示微型悬浮按钮
      if (elements.siteHeader) elements.siteHeader.classList.add("mobile-hidden");
      if (elements.mobileFloatingBtn) elements.mobileFloatingBtn.classList.add("visible");
    } else {
      // 滚回顶部时恢复
      if (elements.siteHeader) elements.siteHeader.classList.remove("mobile-hidden");
      if (elements.mobileFloatingBtn) elements.mobileFloatingBtn.classList.remove("visible");
    }
  }, { passive: true });
}

function openMobileDrawer() {
  if (!elements.mobileDrawer) return;
  updateDrawerThemeLabel();
  elements.mobileDrawer.style.display = "flex";
}
window.openMobileDrawer = openMobileDrawer;

function closeMobileDrawer() {
  if (elements.mobileDrawer) {
    elements.mobileDrawer.style.display = "none";
  }
}
window.closeMobileDrawer = closeMobileDrawer;

function updateDrawerThemeLabel() {
  if (elements.drawerThemeLabel) {
    elements.drawerThemeLabel.textContent = state.theme === "light" ? "切换深色模式" : "切换浅色模式";
  }
}

function getFilteredServices() {
  return SERVICES.filter(svc => {
    if (FEATURED_SERVICE_IDS.has(svc.id)) return false;
    const matchCat = state.activeCategory === "all" || svc.category === state.activeCategory;
    if (!matchCat) return false;

    if (!state.searchQuery) return true;
    const q = state.searchQuery;
    return (
      svc.name.toLowerCase().includes(q) ||
      svc.subdomain.toLowerCase().includes(q) ||
      svc.desc.toLowerCase().includes(q) ||
      svc.tags.some(t => t.toLowerCase().includes(q)) ||
      svc.tech.toLowerCase().includes(q)
    );
  });
}

function renderMatrixServices() {
  const list = getFilteredServices();

  // 迷你 motion 场景：每个产品一个专属矢量小剧场（复用 --motion-progress 滚动 runtime）
  const MATRIX_MOTION_SCENES = {
    tpself: {
      cls: "matrix-motion--home",
      html: '<div class="mm-grid"></div><span class="mm-kicker">HOME / 01</span><div class="mm-window"><div class="mm-win-bar"><i></i><i></i><i></i><b>tp://self</b></div><div class="mm-body"><span class="mm-line"></span><span class="mm-line"></span><span class="mm-line mm-line--short"></span></div><div class="mm-badge">TP</div></div><span class="mm-spark">✦</span>'
    },
    tangpan: {
      cls: "matrix-motion--timeline",
      html: '<div class="mm-grid"></div><span class="mm-kicker">PATH / 02</span><div class="mm-rail"><i class="mm-rail-line"></i><span class="mm-node"></span><span class="mm-node"></span><span class="mm-node"></span><span class="mm-node"></span></div><div class="mm-card-stack"><i></i><i></i><i></i></div><span class="mm-spark">+</span>'
    },
    ai: {
      cls: "matrix-motion--academic",
      html: '<div class="mm-grid"></div><span class="mm-kicker">PAPER / 03</span><div class="mm-paper"><b>ABSTRACT</b><i></i><i></i><i></i><em>[1]</em><em>[2]</em></div><div class="mm-quote-mark">"</div><span class="mm-spark">✦</span>'
    },
    chat: {
      cls: "matrix-motion--chat",
      html: '<div class="mm-grid"></div><span class="mm-kicker">TALK / 04</span><div class="mm-chat"><span class="mm-bubble mm-bubble--l">你好呀</span><span class="mm-bubble mm-bubble--r">先倾听，再表达</span><span class="mm-bubble mm-bubble--l mm-bubble--accent">场景练习 →</span></div><span class="mm-spark">💬</span>'
    },
    skillver: {
      cls: "matrix-motion--skillver",
      html: '<div class="mm-grid"></div><span class="mm-kicker">SKILL / 05</span><div class="mm-version"><b>v2.4</b><span class="mm-tag-row"><i class="mm-tag mm-tag--a">agent</i><i class="mm-tag mm-tag--b">v1.9</i><i class="mm-tag mm-tag--c">v2.1</i></span></div><div class="mm-graph"><i></i><i></i><i></i><i></i></div><span class="mm-spark">✦</span>'
    },
    shiyou: {
      cls: "matrix-motion--dash",
      html: '<div class="mm-grid"></div><span class="mm-kicker">PULSE / 06</span><div class="mm-panel"><div class="mm-panel-val">94<span>%</span></div><div class="mm-bars"><i></i><i></i><i></i><i></i><i></i></div><div class="mm-trend-line"><svg viewBox="0 0 120 24" preserveAspectRatio="none"><path d="M0,18 C12,18 14,7 26,10 S44,16 56,5 S76,15 90,8 S110,4 120,3"/></svg></div></div><span class="mm-node mm-node--a"></span><span class="mm-node mm-node--b"></span>'
    },
    wearticle: {
      cls: "matrix-motion--reader",
      html: '<div class="mm-grid"></div><span class="mm-kicker">READ / 07</span><div class="mm-reader"><div class="mm-reader-bar"><i></i><i></i><i></i><b>daily://digest</b></div><div class="mm-article"><b></b><i></i><i></i><i></i><strong class="mm-ai-dot">AI</strong></div><div class="mm-article mm-article--next"><b></b><i></i><i></i></div></div><span class="mm-spark">✦</span>'
    },
    yatn: {
      cls: "matrix-motion--apply",
      html: '<div class="mm-grid"></div><span class="mm-kicker">APPLY / 08</span><div class="mm-form"><b class="mm-form-title">YATN 申请</b><span class="mm-field"><i></i></span><span class="mm-field"><i></i></span><span class="mm-field mm-field--half"></span><em class="mm-check">✓</em></div><span class="mm-spark">+</span>'
    },
    caipu: {
      cls: "matrix-motion--admin",
      html: '<div class="mm-grid"></div><span class="mm-kicker">ADMIN / 09</span><div class="mm-admin-table"><div class="mm-th"><i></i><i></i><i></i></div><div class="mm-tr"><i></i><i></i><em class="mm-status mm-status--ok">●</em></div><div class="mm-tr"><i></i><i></i><em class="mm-status mm-status--ok">●</em></div><div class="mm-tr"><i></i><i></i><em class="mm-status mm-status--wait">●</em></div></div>'
    },
    njupt: {
      cls: "matrix-motion--campus",
      html: '<div class="mm-grid"></div><span class="mm-kicker">CAMPUS / 10</span><div class="mm-campus"><div class="mm-teacher-desk"><i></i><i></i></div><div class="mm-blackboard"><b>南邮指南</b><i></i><i></i></div><span class="mm-flag-pole"></span></div><span class="mm-spark">✿</span>'
    },
    redwood: {
      cls: "matrix-motion--redwood",
      html: '<div class="mm-grid"></div><span class="mm-kicker">3D / 11</span><div class="mm-3d-cube"><i class="mm-face mm-face--top"></i><i class="mm-face mm-face--left"></i><i class="mm-face mm-face--right"></i><span class="mm-3d-glow"></span></div><div class="mm-plinth"><i></i><i></i></div><span class="mm-spark">✦</span>'
    },
    wtjneslzdj: {
      cls: "matrix-motion--pixel",
      html: '<div class="mm-grid"></div><span class="mm-kicker">8BIT / 12</span><div class="mm-pixel-scene"><div class="mm-pixel-hero"></div><div class="mm-pixel-ground"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="mm-pixel-flag"><i></i><i></i></div></div><span class="mm-spark">♥</span>'
    },
    lanbo: {
      cls: "matrix-motion--archive",
      html: '<div class="mm-grid"></div><span class="mm-kicker">LOG / 13</span><div class="mm-archive"><div class="mm-log-row"><b>08:14</b><i></i></div><div class="mm-log-row"><b>08:15</b><i></i></div><div class="mm-log-row"><b>08:17</b><i></i></div><em class="mm-stamp">FACT-CHECKED</em></div>'
    }
  };

  // 动态同步分类计数（数据驱动，防止硬编码漂移）
  const matrixServices = SERVICES.filter(svc => !FEATURED_SERVICE_IDS.has(svc.id));
  const counts = { all: matrixServices.length };
  matrixServices.forEach(svc => { counts[svc.category] = (counts[svc.category] || 0) + 1; });
  document.querySelectorAll("#category-filter-tabs .cat-tab-btn").forEach(btn => {
    const cntEl = btn.querySelector(".tab-cnt");
    if (cntEl && counts[btn.dataset.cat] !== undefined) {
      cntEl.textContent = `(${counts[btn.dataset.cat]})`;
    }
  });

  if (list.length === 0) {
    elements.servicesGrid.innerHTML = "";
    elements.emptyState.style.display = "block";
    return;
  }

  elements.emptyState.style.display = "none";

  elements.servicesGrid.innerHTML = list.map((svc, index) => {
    const iconSvg = ICONS[svc.iconKey] || ICONS.code;
    const idxFormatted = String(index + 1).padStart(2, "0");

    return `
      <article class="service-matrix-card" data-id="${svc.id}" onclick="openDetailModal('${svc.id}')">
        ${(MATRIX_MOTION_SCENES[svc.id]) ? `<div class="product-motion matrix-motion-stage ${MATRIX_MOTION_SCENES[svc.id].cls}" data-motion-scene="${svc.id}" role="img" aria-label="${svc.name} 产品示意动画">${MATRIX_MOTION_SCENES[svc.id].html}</div>` : ""}
        <div class="service-card-top">
          <div class="service-icon-box">
            ${iconSvg}
          </div>
          <div class="service-card-meta">
            <span class="service-cat-badge">${svc.categoryName}</span>
            <span class="service-status-pill"><span class="status-dot"></span> 在线</span>
          </div>
        </div>

        <div class="service-card-main">
          <h4 class="service-title">${idxFormatted}. ${svc.name}</h4>
          <span class="service-domain-url">${svc.subdomain}</span>
          <p class="service-desc-text">${svc.desc}</p>
          <div class="service-tags-row">
            ${svc.tags.map(t => `<span class="tag-chip">#${t}</span>`).join("")}
          </div>
        </div>

        <div class="service-card-bottom">
          <div class="service-btn-group">
            <button class="service-btn-mini" onclick="event.stopPropagation(); copyUrl('${svc.url}')" title="复制链接">
              <svg class="svg-icon" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              <span>复制</span>
            </button>
            <button class="service-btn-mini" onclick="event.stopPropagation(); openDetailModal('${svc.id}')" title="查看详情">
              <svg class="svg-icon" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              <span>详情</span>
            </button>
          </div>
          <a href="${svc.url}" class="service-launch-link magnetic-btn" target="_blank" rel="noopener" onclick="event.stopPropagation()">
            <span>直达</span>
            <svg class="svg-icon" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M7 7h10v10"></path></svg>
          </a>
        </div>
      </article>
    `;
  }).join("");

  elements.servicesGrid.querySelectorAll(".service-matrix-card").forEach(card => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--matrix-spot-x", `${event.clientX - rect.left}px`);
      card.style.setProperty("--matrix-spot-y", `${event.clientY - rect.top}px`);
    }, { passive: true });
  });

  initMagneticButtons();
}

/* ==========================================================================
   Section 03 · 电影海报与音乐专辑 (03 Posters & Vinyl · 随机错落画廊与黑胶交互)
   ========================================================================== */

const TAPE_PALETTE = ["#d9ef7f", "#ff6b57", "#a8ddff", "#f59e0b", "#d8cbff", "#a5f3fc"];
const VINYL_LABEL_PALETTE = ["#ff6b57", "#f59e0b", "#10b981", "#2563eb", "#d9ef7f", "#d8cbff"];

function renderPostersScatter() {
  if (!elements.postersScatterWall) return;

  elements.postersScatterWall.innerHTML = activePosters.map((item, idx) => {
    // 随机计算轻度倾斜度 (-4.5deg 到 +4.5deg) 与垂直错落 (-6px 到 +10px)
    const rot = (Math.sin(idx * 3.7 + 1) * 4.2).toFixed(1);
    const yOff = (Math.cos(idx * 2.3) * 8).toFixed(1);
    const tapeRot = (Math.sin(idx * 5.1) * 7).toFixed(1);
    const tapeColor = TAPE_PALETTE[idx % TAPE_PALETTE.length];
    const vinylColor = VINYL_LABEL_PALETTE[(idx * 2) % VINYL_LABEL_PALETTE.length];
    const webpSrc = `assets/posters/${item.file.replace(/\.(png|jpe?g)$/i, ".webp")}`;
    const pngSrc = `assets/posters/${item.file}`;

    return `
      <div class="poster-record-card" data-idx="${idx}" style="--rot:${rot}deg; --y-off:${yOff}px; --tape-rot:${tapeRot}deg; --tape-color:${tapeColor};" title="${item.title} · 点击查看放映大图">
        <div class="poster-tape"></div>
        <div class="poster-jacket">
          <picture>
            <source srcset="${webpSrc}" type="image/webp">
            <img src="${pngSrc}" alt="${item.title}" class="poster-jacket-img" loading="lazy" decoding="async">
          </picture>
          <div class="poster-caption-tag">${item.title}</div>
        </div>
        <div class="vinyl-disc">
          <div class="vinyl-disc-label" style="--label-color:${vinylColor}">
            <span>TP</span>
          </div>
        </div>
      </div>
    `;
  }).join("");

  bindPostersCardInteractions();
}

function renderPostersStream() {
  if (!elements.postersStreamRail) return;
  const doubled = [...activePosters, ...activePosters];
  elements.postersStreamRail.innerHTML = doubled.map((item, idx) => {
    const webpSrc = `assets/posters/${item.file.replace(/\.(png|jpe?g)$/i, ".webp")}`;
    const pngSrc = `assets/posters/${item.file}`;
    const origIdx = idx % activePosters.length;
    return `
      <div class="posters-stream-item poster-record-card" data-idx="${origIdx}" style="--rot:0deg; --y-off:0px;" title="${item.title} · 点击查看放映大图">
        <div class="poster-jacket">
          <picture>
            <source srcset="${webpSrc}" type="image/webp">
            <img src="${pngSrc}" alt="${item.title}" class="poster-jacket-img" loading="lazy" decoding="async">
          </picture>
          <div class="poster-caption-tag">${item.title}</div>
        </div>
      </div>
    `;
  }).join("");

  bindPostersCardInteractions();
}

function bindPostersCardInteractions() {
  // 3D 物理倾角 (Oil Motion) 与 点击进入放映室
  const cards = document.querySelectorAll(".poster-record-card");
  cards.forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `translateY(-8px) scale(1.08) perspective(800px) rotateX(${-y * 12}deg) rotateY(${x * 12}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });

    card.addEventListener("click", () => {
      const idx = parseInt(card.dataset.idx, 10);
      if (!isNaN(idx)) openSpotlightModal(idx);
    });
  });
}

function shufflePosters() {
  const dice = document.querySelector(".shuffle-dice-icon");
  if (dice) {
    dice.style.transform = "rotate(360deg) scale(1.2)";
    setTimeout(() => dice.style.transform = "", 400);
  }

  // Fisher-Yates 洗牌
  for (let i = activePosters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [activePosters[i], activePosters[j]] = [activePosters[j], activePosters[i]];
  }

  // 触发翻转微动效
  const cards = document.querySelectorAll(".poster-record-card");
  cards.forEach(c => c.classList.add("shuffling"));

  setTimeout(() => {
    renderPostersScatter();
    renderPostersStream();
    showToast("🎲 已随心打乱 24 部海报与黑胶唱片排版");
  }, 180);
}

function openSpotlightModal(idx) {
  currentSpotlightIndex = idx;
  const item = activePosters[idx];
  if (!item || !elements.posterSpotlightModal) return;

  const webpSrc = `assets/posters/${item.file.replace(/\.(png|jpe?g)$/i, ".webp")}`;
  elements.spotlightImg.src = webpSrc;
  elements.spotlightImg.onerror = () => { elements.spotlightImg.src = `assets/posters/${item.file}`; };
  elements.spotlightTitle.textContent = item.title;
  elements.spotlightKicker.textContent = item.type || "CINEMA // VINYL";
  elements.spotlightSerial.textContent = `NO. ${String(idx + 1).padStart(2, "0")} / 24`;
  elements.spotlightDesc.textContent = item.desc;

  elements.posterSpotlightModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeSpotlightModal() {
  if (!elements.posterSpotlightModal) return;
  elements.posterSpotlightModal.classList.remove("active");
  document.body.style.overflow = "";
}

function nextSpotlight() {
  currentSpotlightIndex = (currentSpotlightIndex + 1) % activePosters.length;
  openSpotlightModal(currentSpotlightIndex);
}

function prevSpotlight() {
  currentSpotlightIndex = (currentSpotlightIndex - 1 + activePosters.length) % activePosters.length;
  openSpotlightModal(currentSpotlightIndex);
}

function initPostersGallery() {
  renderPostersScatter();
  renderPostersStream();

  // 绑定洗牌按钮
  if (elements.postersShuffleBtn) {
    elements.postersShuffleBtn.addEventListener("click", shufflePosters);
  }

  // 绑定视图切换
  if (elements.postersViewToggle) {
    elements.postersViewToggle.querySelectorAll(".posters-toggle-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        const mode = pill.dataset.mode;
        elements.postersViewToggle.querySelectorAll(".posters-toggle-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");

        if (mode === "scatter") {
          elements.postersScatterWall.style.display = "grid";
          elements.postersStreamWrapper.style.display = "none";
        } else {
          elements.postersScatterWall.style.display = "none";
          elements.postersStreamWrapper.style.display = "block";
        }
      });
    });
  }

  // 绑定放映室关闭与前后导航
  if (elements.posterSpotlightClose) {
    elements.posterSpotlightClose.addEventListener("click", closeSpotlightModal);
  }
  if (elements.posterSpotlightModal) {
    elements.posterSpotlightModal.addEventListener("click", e => {
      if (e.target === elements.posterSpotlightModal) closeSpotlightModal();
    });
  }
  if (elements.spotlightPrevBtn) {
    elements.spotlightPrevBtn.addEventListener("click", prevSpotlight);
  }
  if (elements.spotlightNextBtn) {
    elements.spotlightNextBtn.addEventListener("click", nextSpotlight);
  }

  // 全局键盘导航
  document.addEventListener("keydown", e => {
    if (!elements.posterSpotlightModal || !elements.posterSpotlightModal.classList.contains("active")) return;
    if (e.key === "Escape") closeSpotlightModal();
    if (e.key === "ArrowLeft") prevSpotlight();
    if (e.key === "ArrowRight") nextSpotlight();
  });
}

function setCategory(cat) {
  state.activeCategory = cat;
  document.querySelectorAll("#category-filter-tabs .cat-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.cat === cat);
  });
  renderMatrixServices();
}

function applyViewMode(mode) {
  state.viewMode = mode;
  localStorage.setItem("tpspace_view", mode);
  elements.servicesGrid.className = `services-matrix-grid ${mode}-mode`;
  elements.viewGridBtn.classList.toggle("active", mode === "grid");
  elements.viewListBtn.classList.toggle("active", mode === "list");
}

function applyTheme(theme) {
  state.theme = theme;
  localStorage.setItem("tpspace_theme", theme);
  document.body.dataset.theme = theme;
  const metaTheme = document.getElementById("theme-color-meta");
  if (metaTheme) {
    metaTheme.content = theme === "dark" ? "#0b0f19" : "#fbfaf6";
  }
}

function copyUrl(url) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => showToast(`已复制: ${url}`));
  } else {
    const input = document.createElement("input");
    input.value = url;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    showToast(`已复制: ${url}`);
  }
}
window.copyUrl = copyUrl;

let toastTimer = null;
function showToast(msg) {
  elements.toast.textContent = msg;
  elements.toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 2200);
}

function openDetailModal(id) {
  const svc = SERVICES.find(s => s.id === id);
  if (!svc) return;

  elements.modalIconBadge.innerHTML = ICONS[svc.iconKey] || ICONS.code;
  elements.modalSiteTitle.textContent = svc.name;
  elements.modalSubdomainLink.querySelector("span").textContent = svc.subdomain;
  elements.modalSubdomainLink.href = svc.url;
  elements.modalDescTxt.textContent = svc.desc;
  elements.modalCategoryVal.textContent = svc.categoryName;
  elements.modalTechVal.textContent = svc.tech;

  elements.modalTagsBox.innerHTML = svc.tags.map(t => `<span class="tag-chip">#${t}</span>`).join("");
  elements.modalOpenSiteBtn.href = svc.url;
  elements.modalCopyLinkBtn.onclick = () => copyUrl(svc.url);

  elements.detailModal.style.display = "flex";

  if (window.gsap && window.innerWidth > 768) {
    gsap.fromTo(".tpspace-modal-box", 
      { scale: 0.85, opacity: 0, y: 20 }, 
      { scale: 1, opacity: 1, y: 0, duration: 0.35, ease: "back.out(1.7)" }
    );
  }
}
window.openDetailModal = openDetailModal;

function closeDetailModal() {
  elements.detailModal.style.display = "none";
}
window.closeDetailModal = closeDetailModal;

function initFeaturedProductInteractions() {
  document.querySelectorAll(".featured-ref-card").forEach(card => {
    const titleEl = card.querySelector(".ref-title-text");
    if (!titleEl) return;

    const title = titleEl.textContent.trim();
    const normalizedTitle = title.replace(/\s+/g, "").toLowerCase();
    const svc = SERVICES.find(item => {
      const normalizedName = item.name.replace(/\s+/g, "").toLowerCase();
      return normalizedName === normalizedTitle || normalizedName.startsWith(normalizedTitle) || normalizedTitle.startsWith(normalizedName);
    });
    if (!svc) return;

    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--product-spot-x", `${event.clientX - rect.left}px`);
      card.style.setProperty("--product-spot-y", `${event.clientY - rect.top}px`);
    }, { passive: true });

    titleEl.setAttribute("role", "button");
    titleEl.setAttribute("tabindex", "0");
    titleEl.setAttribute("aria-label", `查看${title}详情`);
    titleEl.addEventListener("pointermove", (event) => {
      const rect = titleEl.getBoundingClientRect();
      card.style.setProperty("--product-spot-x", `${event.clientX - card.getBoundingClientRect().left}px`);
      card.style.setProperty("--product-spot-y", `${event.clientY - card.getBoundingClientRect().top}px`);
      titleEl.style.setProperty("--title-spot-x", `${event.clientX - rect.left}px`);
    }, { passive: true });
    titleEl.addEventListener("click", () => openDetailModal(svc.id));
    titleEl.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openDetailModal(svc.id);
      }
    });
  });
}

function openContactModal(row) {
  if (!elements.contactModal || !row) return;

  const icon = row.querySelector(".tp-contact-icon img");
  if (elements.contactModalIcon) {
    elements.contactModalIcon.innerHTML = icon ? `<img src="${icon.getAttribute("src")}" alt="">` : "";
    elements.contactModalIcon.classList.toggle("is-xiaohongshu", row.dataset.contactBrand === "xiaohongshu");
  }
  if (elements.contactModalTitle) elements.contactModalTitle.textContent = row.dataset.contactTitle || "联系方式";
  if (elements.contactModalDetail) elements.contactModalDetail.textContent = row.dataset.contactDetail || "";
  if (elements.contactModalAction) elements.contactModalAction.href = row.dataset.contactUrl || "#";

  elements.contactModal.style.display = "flex";
  elements.contactModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("contact-modal-is-open");

  if (window.gsap) {
    gsap.fromTo(".tp-contact-modal-box",
      { scale: 0.86, opacity: 0, y: 22, rotate: -1.5 },
      { scale: 1, opacity: 1, y: 0, rotate: 0, duration: 0.48, ease: "back.out(1.6)" }
    );
  }
  elements.contactModalClose?.focus();
}

function closeContactModal() {
  if (!elements.contactModal) return;
  elements.contactModal.style.display = "none";
  elements.contactModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("contact-modal-is-open");
}

// ==========================================================================
// 1. 手绘几何涂鸦与交互粒子 Canvas 动画 (Ink Doodle & Particle Canvas)
// ==========================================================================
function initInkDoodleCanvas() {
  const canvas = document.getElementById("ink-doodle-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let animationFrame = null;
  let running = false;

  const mouse = { x: -1000, y: -1000, active: false };

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener("pointermove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  }, { passive: true });

  document.addEventListener("mouseleave", () => {
    mouse.active = false;
  });

  // 14 大主流 AI 厂商与旗舰模型矢量路径定义 (viewBox: 0 0 24 24)
  const AI_ICONS_RAW = {
    "openai": { name: "OpenAI", color: "#10a37f", paths: ["M9.205 8.658v-2.26c0-.19.072-.333.238-.428l4.543-2.616c.619-.357 1.356-.523 2.117-.523 2.854 0 4.662 2.212 4.662 4.566 0 .167 0 .357-.024.547l-4.71-2.759a.797.797 0 00-.856 0l-5.97 3.473zm10.609 8.8V12.06c0-.333-.143-.57-.429-.737l-5.97-3.473 1.95-1.118a.433.433 0 01.476 0l4.543 2.617c1.309.76 2.189 2.378 2.189 3.948 0 1.808-1.07 3.473-2.76 4.163zM7.802 12.703l-1.95-1.142c-.167-.095-.239-.238-.239-.428V5.899c0-2.545 1.95-4.472 4.591-4.472 1 0 1.927.333 2.712.928L8.23 5.067c-.285.166-.428.404-.428.737v6.898zM12 15.128l-2.795-1.57v-3.33L12 8.658l2.795 1.57v3.33L12 15.128zm1.796 7.23c-1 0-1.927-.332-2.712-.927l4.686-2.712c.285-.166.428-.404.428-.737v-6.898l1.974 1.142c.167.095.238.238.238.428v5.233c0 2.545-1.974 4.472-4.614 4.472zm-5.637-5.303l-4.544-2.617c-1.308-.761-2.188-2.378-2.188-3.948A4.482 4.482 0 014.21 6.327v5.423c0 .333.143.571.428.738l5.947 3.449-1.95 1.118a.432.432 0 01-.476 0zm-.262 3.9c-2.688 0-4.662-2.021-4.662-4.519 0-.19.024-.38.047-.57l4.686 2.71c.286.167.571.167.856 0l5.97-3.448v2.26c0 .19-.07.333-.237.428l-4.543 2.616c-.619.357-1.356.523-2.117.523zm5.899 2.83a5.947 5.947 0 005.827-4.756C22.287 18.339 24 15.84 24 13.296c0-1.665-.713-3.282-1.998-4.448.119-.5.19-.999.19-1.498 0-3.401-2.759-5.947-5.946-5.947-.642 0-1.26.095-1.88.31A5.962 5.962 0 0010.205 0a5.947 5.947 0 00-5.827 4.757C1.713 5.447 0 7.945 0 10.49c0 1.666.713 3.283 1.998 4.448-.119.5-.19 1-.19 1.499 0 3.401 2.759 5.946 5.946 5.946.642 0 1.26-.095 1.88-.309a5.96 5.96 0 004.162 1.713z"] },
    "claude": { name: "Claude", color: "#d97757", paths: ["M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z"] },
    "gemini": { name: "Gemini", color: "#1a73e8", paths: ["M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z"] },
    "deepseek": { name: "DeepSeek", color: "#4d6bfe", paths: ["M23.748 4.482c-.254-.124-.364.113-.512.234-.051.039-.094.09-.137.136-.372.397-.806.657-1.373.626-.829-.046-1.537.214-2.163.848-.133-.782-.575-1.248-1.247-1.548-.352-.156-.708-.311-.955-.65-.172-.241-.219-.51-.305-.774-.055-.16-.11-.323-.293-.35-.2-.031-.278.136-.356.276-.313.572-.434 1.202-.422 1.84.027 1.436.633 2.58 1.838 3.393.137.093.172.187.129.323-.082.28-.18.552-.266.833-.055.179-.137.217-.329.14a5.526 5.526 0 01-1.736-1.18c-.857-.828-1.631-1.742-2.597-2.458a11.365 11.365 0 00-.689-.471c-.985-.957.13-1.743.388-1.836.27-.098.093-.432-.779-.428-.872.004-1.67.295-2.687.684a3.055 3.055 0 01-.465.137 9.597 9.597 0 00-2.883-.102c-1.885.21-3.39 1.102-4.497 2.623C.082 8.606-.231 10.684.152 12.85c.403 2.284 1.569 4.175 3.36 5.653 1.858 1.533 3.997 2.284 6.438 2.14 1.482-.085 3.133-.284 4.994-1.86.47.234.962.327 1.78.397.63.059 1.236-.03 1.705-.128.735-.156.684-.837.419-.961-2.155-1.004-1.682-.595-2.113-.926 1.096-1.296 2.746-2.642 3.392-7.003.05-.347.007-.565 0-.845-.004-.17.035-.237.23-.256a4.173 4.173 0 001.545-.475c1.396-.763 1.96-2.015 2.093-3.517.02-.23-.004-.467-.247-.588zM11.581 18c-2.089-1.642-3.102-2.183-3.52-2.16-.392.024-.321.471-.235.763.09.288.207.486.371.739.114.167.192.416-.113.603-.673.416-1.842-.14-1.897-.167-1.361-.802-2.5-1.86-3.301-3.307-.774-1.393-1.224-2.887-1.298-4.482-.02-.386.093-.522.477-.592a4.696 4.696 0 011.529-.039c2.132.312 3.946 1.265 5.468 2.774.868.86 1.525 1.887 2.202 2.891.72 1.066 1.494 2.082 2.48 2.914.348.292.625.514.891.677-.802.09-2.14.11-3.054-.614zm1-6.44a.306.306 0 01.415-.287.302.302 0 01.2.288.306.306 0 01-.31.307.303.303 0 01-.304-.308zm3.11 1.596c-.2.081-.399.151-.59.16a1.245 1.245 0 01-.798-.254c-.274-.23-.47-.358-.552-.758a1.73 1.73 0 01.016-.588c.07-.327-.008-.537-.239-.727-.187-.156-.426-.199-.688-.199a.559.559 0 01-.254-.078c-.11-.054-.2-.19-.114-.358.028-.054.16-.186.192-.21.356-.202.767-.136 1.146.016.352.144.618.408 1.001.782.391.451.462.576.685.914.176.265.336.537.445.848.067.195-.019.354-.25.452z"] },
    "meta": { name: "Meta", color: "#0668e1", paths: ["M6.897 4c1.915 0 3.516.932 5.43 3.376l.282-.373c.19-.246.383-.484.58-.71l.313-.35C14.588 4.788 15.792 4 17.225 4c1.273 0 2.469.557 3.491 1.516l.218.213c1.73 1.765 2.917 4.71 3.053 8.026l.011.392.002.25c0 1.501-.28 2.759-.818 3.7l-.14.23-.108.153c-.301.42-.664.758-1.086 1.009l-.265.142-.087.04a3.493 3.493 0 01-.302.118 4.117 4.117 0 01-1.33.208c-.524 0-.996-.067-1.438-.215-.614-.204-1.163-.56-1.726-1.116l-.227-.235c-.753-.812-1.534-1.976-2.493-3.586l-1.43-2.41-.544-.895-1.766 3.13-.343.592C7.597 19.156 6.227 20 4.356 20c-1.21 0-2.205-.42-2.936-1.182l-.168-.184c-.484-.573-.837-1.311-1.043-2.189l-.067-.32a8.69 8.69 0 01-.136-1.288L0 14.468c.002-.745.06-1.49.174-2.23l.1-.573c.298-1.53.828-2.958 1.536-4.157l.209-.34c1.177-1.83 2.789-3.053 4.615-3.16L6.897 4zm-.033 2.615l-.201.01c-.83.083-1.606.673-2.252 1.577l-.138.199-.01.018c-.67 1.017-1.185 2.378-1.456 3.845l-.004.022a12.591 12.591 0 00-.207 2.254l.002.188c.004.18.017.36.04.54l.043.291c.092.503.257.908.486 1.208l.117.137c.303.323.698.492 1.17.492 1.1 0 1.796-.676 3.696-3.641l2.175-3.4.454-.701-.139-.198C9.11 7.3 8.084 6.616 6.864 6.616zm10.196-.552l-.176.007c-.635.048-1.223.359-1.82.933l-.196.198c-.439.462-.887 1.064-1.367 1.807l.266.398c.18.274.362.56.55.858l.293.475 1.396 2.335.695 1.114c.583.926 1.03 1.6 1.408 2.082l.213.262c.282.326.529.54.777.673l.102.05c.227.1.457.138.718.138.176.002.35-.023.518-.073.338-.104.61-.32.813-.637l.095-.163.077-.162c.194-.459.29-1.06.29-1.785l-.006-.449c-.08-2.871-.938-5.372-2.2-6.798l-.176-.189c-.67-.683-1.444-1.074-2.27-1.074z"] },
    "mistral": { name: "Mistral", color: "#fa520f", paths: ["M3.428 3.4h3.429v3.428h3.429v3.429h-.002 3.431V6.828h3.427V3.4h3.43v13.714H24v3.429H13.714v-3.428h-3.428v-3.429h-3.43v3.428h3.43v3.429H0v-3.429h3.428V3.4zm10.286 13.715h3.428v-3.429h-3.427v3.429z"] },
    "grok": { name: "Grok", color: "#101010", paths: ["M9.27 15.29l7.978-5.897c.391-.29.95-.177 1.137.272.98 2.369.542 5.215-1.41 7.169-1.951 1.954-4.667 2.382-7.149 1.406l-2.711 1.257c3.889 2.661 8.611 2.003 11.562-.953 2.341-2.344 3.066-5.539 2.388-8.42l.006.007c-.983-4.232.242-5.924 2.75-9.383.06-.082.12-.164.179-.248l-3.301 3.305v-.01L9.267 15.292M7.623 16.723c-2.792-2.67-2.31-6.801.071-9.184 1.761-1.763 4.647-2.483 7.166-1.425l2.705-1.25a7.808 7.808 0 00-1.829-1A8.975 8.975 0 005.984 5.83c-2.533 2.536-3.33 6.436-1.962 9.764 1.022 2.487-.653 4.246-2.34 6.022-.599.63-1.199 1.259-1.682 1.925l7.62-6.815"] },
    "qwen": { name: "Qwen", color: "#615ced", paths: ["M12.604 1.34c.393.69.784 1.382 1.174 2.075a.18.18 0 00.157.091h5.552c.174 0 .322.11.446.327l1.454 2.57c.19.337.24.478.024.837-.26.43-.513.864-.76 1.3l-.367.658c-.106.196-.223.28-.04.512l2.652 4.637c.172.301.111.494-.043.77-.437.785-.882 1.564-1.335 2.34-.159.272-.352.375-.68.37-.777-.016-1.552-.01-2.327.016a.099.099 0 00-.081.05 575.097 575.097 0 01-2.705 4.74c-.169.293-.38.363-.725.364-.997.003-2.002.004-3.017.002a.537.537 0 01-.465-.271l-1.335-2.323a.09.09 0 00-.083-.049H4.982c-.285.03-.553-.001-.805-.092l-1.603-2.77a.543.543 0 01-.002-.54l1.207-2.12a.198.198 0 000-.197 550.951 550.951 0 01-1.875-3.272l-.79-1.395c-.16-.31-.173-.496.095-.965.465-.813.927-1.625 1.387-2.436.132-.234.304-.334.584-.335a338.3 338.3 0 012.589-.001.124.124 0 00.107-.063l2.806-4.895a.488.488 0 01.422-.246c.524-.001 1.053 0 1.583-.006L11.704 1c.341-.003.724.032.9.34zm-3.432.403a.06.06 0 00-.052.03L6.254 6.788a.157.157 0 01-.135.078H3.253c-.056 0-.07.025-.041.074l5.81 10.156c.025.042.013.062-.034.063l-2.795.015a.218.218 0 00-.2.116l-1.32 2.31c-.044.078-.021.118.068.118l5.716.008c.046 0 .08.02.104.061l1.403 2.454c.046.081.092.082.139 0l5.006-8.76.783-1.382a.055.055 0 01.096 0l1.424 2.53a.122.122 0 00.107.062l2.763-.02a.04.04 0 00.035-.02.041.041 0 000-.04l-2.9-5.086a.108.108 0 010-.113l.293-.507 1.12-1.977c.024-.041.012-.062-.035-.062H9.2c-.059 0-.073-.026-.043-.077l1.434-2.505a.107.107 0 000-.114L9.225 1.774a.06.06 0 00-.053-.031zm6.29 8.02c.046 0 .058.02.034.06l-.832 1.465-2.613 4.585a.056.056 0 01-.05.029.058.058 0 01-.05-.029L8.498 9.841c-.02-.034-.01-.052.028-.054l.216-.012 6.722-.012z"] },
    "kimi": { name: "Kimi", color: "#007aff", paths: ["M21.846 0a1.923 1.923 0 110 3.846H20.15a.226.226 0 01-.227-.226V1.923C19.923.861 20.784 0 21.846 0z", "M11.065 11.199l7.257-7.2c.137-.136.06-.41-.116-.41H14.3a.164.164 0 00-.117.051l-7.82 7.756c-.122.12-.302.013-.302-.179V3.82c0-.127-.083-.23-.185-.23H3.186c-.103 0-.186.103-.186.23V19.77c0 .128.083.23.186.23h2.69c.103 0 .186-.102.186-.23v-3.25c0-.069.025-.135.069-.178l2.424-2.406a.158.158 0 01.205-.023l6.484 4.772a7.677 7.677 0 003.453 1.283c.108.012.2-.095.2-.23v-3.06c0-.117-.07-.212-.164-.227a5.028 5.028 0 01-2.027-.807l-5.613-4.064c-.117-.078-.132-.279-.028-.381z"] },
    "zhipu": { name: "Zhipu", color: "#3859ff", paths: ["M11.991 23.503a.24.24 0 00-.244.248.24.24 0 00.244.249.24.24 0 00.245-.249.24.24 0 00-.22-.247l-.025-.001zM9.671 5.365a1.697 1.697 0 011.099 2.132l-.071.172-.016.04-.018.054c-.07.16-.104.32-.104.498-.035.71.47 1.279 1.186 1.314h.366c1.309.053 2.338 1.173 2.286 2.523-.052 1.332-1.152 2.38-2.478 2.327h-.174c-.715.018-1.274.64-1.239 1.368 0 .124.018.23.053.337.209.373.54.658.96.8.75.23 1.517-.125 1.9-.782l.018-.035c.402-.64 1.17-.96 1.92-.711.854.284 1.378 1.226 1.099 2.167a1.661 1.661 0 01-2.077 1.102 1.711 1.711 0 01-.907-.711l-.017-.035c-.2-.323-.463-.58-.851-.711l-.056-.018a1.646 1.646 0 00-1.954.746 1.66 1.66 0 01-1.065.764 1.677 1.677 0 01-1.989-1.279c-.209-.906.332-1.83 1.257-2.043a1.51 1.51 0 01.296-.035h.018c.68-.071 1.151-.622 1.116-1.333a1.307 1.307 0 00-.227-.693 2.515 2.515 0 01-.366-1.403 2.39 2.39 0 01.366-1.208c.14-.195.21-.444.227-.693.018-.71-.506-1.261-1.186-1.332l-.07-.018a1.43 1.43 0 01-.299-.07l-.05-.019a1.7 1.7 0 01-1.047-2.114 1.68 1.68 0 012.094-1.101zm-5.575 10.11c.26-.264.639-.367.994-.27.355.096.633.379.728.74.095.362-.007.748-.267 1.013-.402.41-1.053.41-1.455 0a1.062 1.062 0 010-1.482zm14.845-.294c.359-.09.738.024.992.297.254.274.344.665.237 1.025-.107.36-.396.634-.756.718-.551.128-1.1-.22-1.23-.781a1.05 1.05 0 01.757-1.26zm-.064-4.39c.314.32.49.753.49 1.206 0 .452-.176.886-.49 1.206-.315.32-.74.5-1.185.5-.444 0-.87-.18-1.184-.5a1.727 1.727 0 010-2.412 1.654 1.654 0 012.369 0zm-11.243.163c.364.484.447 1.128.218 1.691a1.665 1.665 0 01-2.188.923c-.855-.36-1.26-1.358-.907-2.228a1.68 1.68 0 011.33-1.038c.593-.08 1.183.169 1.547.652zm11.545-4.221c.368 0 .708.2.892.524.184.324.184.724 0 1.048a1.026 1.026 0 01-.892.524c-.568 0-1.03-.47-1.03-1.048 0-.579.462-1.048 1.03-1.048zm-14.358 0c.368 0 .707.2.891.524.184.324.184.724 0 1.048a1.026 1.026 0 01-.891.524c-.569 0-1.03-.47-1.03-1.048 0-.579.461-1.048 1.03-1.048zm10.031-1.475c.925 0 1.675.764 1.675 1.706s-.75 1.705-1.675 1.705-1.674-.763-1.674-1.705c0-.942.75-1.706 1.674-1.706zm-2.626-.684c.362-.082.653-.356.761-.718a1.062 1.062 0 00-.238-1.028 1.017 1.017 0 00-.996-.294c-.547.14-.881.7-.752 1.257.13.558.675.907 1.225.783zm0 16.876c.359-.087.644-.36.75-.72a1.062 1.062 0 00-.237-1.019 1.018 1.018 0 00-.985-.301 1.037 1.037 0 00-.762.717c-.108.361-.017.754.239 1.028.245.263.606.377.953.305l.043-.01zM17.19 3.5a.631.631 0 00.628-.64c0-.355-.279-.64-.628-.64a.631.631 0 00-.628.64c0 .355.28.64.628.64zm-10.38 0a.631.631 0 00.628-.64c0-.355-.28-.64-.628-.64a.631.631 0 00-.628.64c0 .355.279.64.628.64zm-5.182 7.852a.631.631 0 00-.628.64c0 .354.28.639.628.639a.63.63 0 00.627-.606l.001-.034a.62.62 0 00-.628-.64zm5.182 9.13a.631.631 0 00-.628.64c0 .355.279.64.628.64a.631.631 0 00.628-.64c0-.355-.28-.64-.628-.64zm10.38.018a.631.631 0 00-.628.64c0 .355.28.64.628.64a.631.631 0 00.628-.64c0-.355-.279-.64-.628-.64zm5.182-9.148a.631.631 0 00-.628.64c0 .354.279.639.628.639a.631.631 0 00.628-.64c0-.355-.28-.64-.628-.64zm-.384-4.992a.24.24 0 00.244-.249.24.24 0 00-.244-.249.24.24 0 00-.244.249c0 .142.122.249.244.249zM11.991.497a.24.24 0 00.245-.248A.24.24 0 0011.99 0a.24.24 0 00-.244.249c0 .133.108.236.223.247l.021.001zM2.011 6.36a.24.24 0 00.245-.249.24.24 0 00-.244-.249.24.24 0 00-.244.249.24.24 0 00.244.249zm0 11.263a.24.24 0 00-.243.248.24.24 0 00.244.249.24.24 0 00.244-.249.252.252 0 00-.244-.248zm19.995-.018a.24.24 0 00-.245.248.24.24 0 00.245.25.24.24 0 00.244-.25.252.252 0 00-.244-.248z"] },
    "doubao": { name: "Doubao", color: "#0055ff", paths: ["M5.31 15.756c.172-3.75 1.883-5.999 2.549-6.739-3.26 2.058-5.425 5.658-6.358 8.308v1.12C1.501 21.513 4.226 24 7.59 24a6.59 6.59 0 002.2-.375c.353-.12.7-.248 1.039-.378.913-.899 1.65-1.91 2.243-2.992-4.877 2.431-7.974.072-7.763-4.5l.002.001z", "M22.57 10.283c-1.212-.901-4.109-2.404-7.397-2.8.295 3.792.093 8.766-2.1 12.773a12.782 12.782 0 01-2.244 2.992c3.764-1.448 6.746-3.457 8.596-5.219 2.82-2.683 3.353-5.178 3.361-6.66a2.737 2.737 0 00-.216-1.084v-.002zM14.303 1.867C12.955.7 11.248 0 9.39 0 7.532 0 5.883.677 4.545 1.807 2.791 3.29 1.627 5.557 1.5 8.125v9.201c.932-2.65 3.097-6.25 6.357-8.307.5-.318 1.025-.595 1.569-.829 1.883-.801 3.878-.932 5.746-.706-.222-2.83-.718-5.002-.87-5.617h.001z", "M17.305 4.961a199.47 199.47 0 01-1.08-1.094c-.202-.213-.398-.419-.586-.622l-1.333-1.378c.151.615.648 2.786.869 5.617 3.288.395 6.185 1.898 7.396 2.8-1.306-1.275-3.475-3.487-5.266-5.323z"] },
    "hunyuan": { name: "Hunyuan", color: "#0053e0", paths: ["M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm1.652 1.123l-.01-.001c.533.097 1.023.233 1.41.404 6.084 2.683 7.396 9.214 1.601 14.338a3.781 3.781 0 01-5.337-.328 3.654 3.654 0 01-.884-3.044c-1.934.6-3.295 2.305-3.524 4.45-.204 1.912.324 4.044 2.056 5.634l.245.067C10.1 22.876 11.036 23 12 23c6.075 0 11-4.925 11-11 0-5.513-4.056-10.08-9.348-10.877zM2.748 6.21c-.178.269-.348.536-.51.803l-.235.394.078-.167A10.957 10.957 0 001 12c0 4.919 3.228 9.083 7.682 10.49l.214.065C3.523 18.528 2.84 14.149 6.47 8.68A2.234 2.234 0 102.748 6.21zm10.157-5.172c4.408 1.33 3.61 5.41 2.447 6.924-.86 1.117-2.922 1.46-3.708 2.238-.666.657-1.077 1.462-1.212 2.291A5.303 5.303 0 0112 12.258a5.672 5.672 0 001.404-11.169 10.51 10.51 0 00-.5-.052z"] },
    "wenxin": { name: "Wenxin", color: "#167adf", paths: ["M11.32 1.176a1.4 1.4 0 011.36 0l8.64 4.843c.421.234.68.67.68 1.141v9.68c0 .472-.259.908-.68 1.143l-8.64 4.84a1.4 1.4 0 01-1.36 0l-8.64-4.84A1.31 1.31 0 012 16.84V7.159c0-.471.259-.907.68-1.142l8.64-4.84zm7.42 13.839V8.227L12.002 12 12 19.551l6.059-3.394a1.31 1.31 0 00.68-1.142zM12.68 4.833a1.393 1.393 0 00-1.36 0L5.944 7.846c-.421.235-.68.67-.68 1.142v6.027c0 .47.259.905.68 1.142l2.795 1.566V11.09a1.546 1.546 0 00.221.79 1.527 1.527 0 01-.216-.834l.004-.094.02-.15.018-.084.017-.062.039-.117.062-.142.035-.065.081-.13.094-.122.084-.091.08-.075.125-.1.071-.048.134-.076 5.87-3.29-2.796-1.566z"] },
    "minimax": { name: "Minimax", color: "#f23f5d", paths: ["M16.278 2c1.156 0 2.093.927 2.093 2.07v12.501a.74.74 0 00.744.709.74.74 0 00.743-.709V9.099a2.06 2.06 0 012.071-2.049A2.06 2.06 0 0124 9.1v6.561a.649.649 0 01-.652.645.649.649 0 01-.653-.645V9.1a.762.762 0 00-.766-.758.762.762 0 00-.766.758v7.472a2.037 2.037 0 01-2.048 2.026 2.037 2.037 0 01-2.048-2.026v-12.5a.785.785 0 00-.788-.753.785.785 0 00-.789.752l-.001 15.904A2.037 2.037 0 0113.441 22a2.037 2.037 0 01-2.048-2.026V18.04c0-.356.292-.645.652-.645.36 0 .652.289.652.645v1.934c0 .263.142.506.372.638.23.131.514.131.744 0a.734.734 0 00.372-.638V4.07c0-1.143.937-2.07 2.093-2.07zm-5.674 0c1.156 0 2.093.927 2.093 2.07v11.523a.648.648 0 01-.652.645.648.648 0 01-.652-.645V4.07a.785.785 0 00-.789-.78.785.785 0 00-.789.78v14.013a2.06 2.06 0 01-2.07 2.048 2.06 2.06 0 01-2.071-2.048V9.1a.762.762 0 00-.766-.758.762.762 0 00-.766.758v3.8a2.06 2.06 0 01-2.071 2.049A2.06 2.06 0 010 12.9v-1.378c0-.357.292-.646.652-.646.36 0 .653.29.653.646V12.9c0 .418.343.757.766.757s.766-.339.766-.757V9.099a2.06 2.06 0 012.07-2.048 2.06 2.06 0 012.071 2.048v8.984c0 .419.343.758.767.758.423 0 .766-.339.766-.758V4.07c0-1.143.937-2.07 2.093-2.07z"] }
  };

  const AI_ICONS = {};
  if (typeof Path2D !== "undefined") {
    try {
      Object.keys(AI_ICONS_RAW).forEach((k) => {
        AI_ICONS[k] = {
          name: AI_ICONS_RAW[k].name,
          color: AI_ICONS_RAW[k].color,
          paths: AI_ICONS_RAW[k].paths.map((p) => new Path2D(p))
        };
      });
    } catch (e) {
      console.warn("AI Icons Path2D init error:", e);
    }
  }
  const AI_KEYS = Object.keys(AI_ICONS);

  function hexToRgba(hex, alpha) {
    if (!hex || hex.startsWith("rgb")) return hex;
    let c = hex.replace("#", "");
    if (c.length === 3) c = c.split("").map((x) => x + x).join("");
    const num = parseInt(c, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(3)})`;
  }

  // 生成粒子组：传统手绘几何涂鸦 + AI 厂商旗舰模型图标
  const DOODLE_TYPES = ["cross", "circle", "box", "triangle", "star", "dot", "bracket"];
  const totalCount = 42;
  const aiCount = AI_KEYS.length > 0 ? 24 : 0;
  const geomCount = totalCount - aiCount;

  const doodles = [];

  // 添加手绘几何粒子
  for (let i = 0; i < geomCount; i++) {
    doodles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: 8 + Math.random() * 12,
      type: DOODLE_TYPES[Math.floor(Math.random() * DOODLE_TYPES.length)],
      angle: Math.random() * Math.PI * 2,
      vAngle: (Math.random() - 0.5) * 0.015,
      opacity: 0.15 + Math.random() * 0.22,
      hover: 0
    });
  }

  // 添加 AI 图标粒子 (均匀轮询覆盖全部 14 种模型)
  for (let i = 0; i < aiCount; i++) {
    const aiKey = AI_KEYS[i % AI_KEYS.length];
    doodles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: 18 + Math.random() * 8, // 18px ~ 26px 适中优雅
      type: "ai",
      aiKey: aiKey,
      angle: Math.random() * Math.PI * 2,
      vAngle: (Math.random() - 0.5) * 0.01,
      opacity: 0.16 + Math.random() * 0.18,
      hover: 0
    });
  }

  function drawDoodle(d) {
    ctx.save();
    ctx.translate(d.x, d.y);
    ctx.rotate(d.angle);

    const isDark = document.body.dataset.theme === "dark";
    const strokeColor = isDark ? `rgba(226, 232, 240, ${d.opacity})` : `rgba(20, 22, 27, ${d.opacity})`;
    const yellowColor = isDark ? `rgba(251, 191, 36, ${d.opacity * 1.5})` : `rgba(245, 158, 11, ${d.opacity * 1.5})`;

    if (d.type === "ai" && AI_ICONS[d.aiKey]) {
      const icon = AI_ICONS[d.aiKey];
      const hover = d.hover || 0;
      const s = d.size * (1 + hover * 0.28);
      const scale = s / 24;
      ctx.scale(scale, scale);
      ctx.translate(-12, -12);

      const baseAlpha = Math.min(0.85, d.opacity + hover * 0.55);
      let fillColor;
      if (hover > 0.05) {
        if (isDark && (icon.color === "#000" || icon.color === "#000000" || icon.color === "#101010")) {
          fillColor = `rgba(240, 240, 240, ${baseAlpha.toFixed(3)})`;
        } else {
          fillColor = hexToRgba(icon.color, baseAlpha);
        }
      } else {
        fillColor = strokeColor;
      }

      ctx.fillStyle = fillColor;
      for (let i = 0; i < icon.paths.length; i++) {
        ctx.fill(icon.paths[i]);
      }
      ctx.restore();
      return;
    }

    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 1.2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    const s = d.size / 2;

    switch (d.type) {
      case "cross":
        ctx.beginPath();
        ctx.moveTo(-s, 0); ctx.lineTo(s, 0);
        ctx.moveTo(0, -s); ctx.lineTo(0, s);
        ctx.stroke();
        break;
      case "circle":
        ctx.beginPath();
        ctx.arc(0, 0, s, 0, Math.PI * 2);
        ctx.stroke();
        break;
      case "box":
        ctx.strokeRect(-s, -s, d.size, d.size);
        break;
      case "triangle":
        ctx.beginPath();
        ctx.moveTo(0, -s);
        ctx.lineTo(s, s);
        ctx.lineTo(-s, s);
        ctx.closePath();
        ctx.stroke();
        break;
      case "star":
        ctx.strokeStyle = yellowColor;
        ctx.beginPath();
        ctx.moveTo(-s * 1.2, 0); ctx.lineTo(s * 1.2, 0);
        ctx.moveTo(0, -s * 1.2); ctx.lineTo(0, s * 1.2);
        ctx.moveTo(-s * 0.7, -s * 0.7); ctx.lineTo(s * 0.7, s * 0.7);
        ctx.moveTo(-s * 0.7, s * 0.7); ctx.lineTo(s * 0.7, -s * 0.7);
        ctx.stroke();
        break;
      case "bracket":
        ctx.font = `${Math.round(d.size * 1.3)}px monospace`;
        ctx.fillStyle = strokeColor;
        ctx.fillText("{ }", -s, s / 2);
        break;
      case "dot":
        ctx.fillStyle = yellowColor;
        ctx.beginPath();
        ctx.arc(0, 0, 2.5, 0, Math.PI * 2);
        ctx.fill();
        break;
    }
    ctx.restore();
  }

  function renderFrame() {
    if (!running) return;
    ctx.clearRect(0, 0, width, height);

    doodles.forEach((d) => {
      // 物理鼠标斥力与交互悬浮高亮效果
      let targetHover = 0;
      if (mouse.active) {
        const dx = d.x - mouse.x;
        const dy = d.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const radius = d.type === "ai" ? 140 : 120;
        if (dist < radius && dist > 0) {
          const force = ((radius - dist) / radius) * 1.8;
          d.x += (dx / dist) * force;
          d.y += (dy / dist) * force;
          targetHover = (radius - dist) / radius;
        }
      }
      d.hover = (d.hover || 0) + (targetHover - (d.hover || 0)) * 0.12;

      d.x += d.vx;
      d.y += d.vy;
      d.angle += d.vAngle;

      // 边界环绕
      const bound = (d.size || 20) + 15;
      if (d.x < -bound) d.x = width + bound;
      if (d.x > width + bound) d.x = -bound;
      if (d.y < -bound) d.y = height + bound;
      if (d.y > height + bound) d.y = -bound;

      drawDoodle(d);
    });

    animationFrame = requestAnimationFrame(renderFrame);
  }

  function stopLoop() {
    running = false;
    if (animationFrame !== null) cancelAnimationFrame(animationFrame);
    animationFrame = null;
  }

  function startLoop() {
    if (running || document.hidden || reducedMotion.matches) return;
    running = true;
    renderFrame();
  }

  function updateMotionState() {
    if (document.hidden || reducedMotion.matches) stopLoop();
    else startLoop();
  }

  document.addEventListener("visibilitychange", updateMotionState);
  reducedMotion.addEventListener("change", updateMotionState);
  updateMotionState();
}

// ==========================================================================
// 2. 页面进入与微动效 (Entrance & Micro Animations)
// ==========================================================================
function initScrollTriggerAnimations() {
  if (!window.gsap) return;
  // 拖动调试模式跳过进场动画，避免 transform 干扰拖拽
  if (new URLSearchParams(window.location.search).get("dragHero") === "true") return;

  // Hero 进场动画（首屏即时播放）
  const heroTL = gsap.timeline({ defaults: { ease: "power3.out" } });
  heroTL
    .fromTo(".hero-statement-title .hero-title-line",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.12 }, 0)
    .fromTo(".hero-character-scene",
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.9, ease: "back.out(1.2)" }, 0.25)
    .fromTo(".hero-identity-line",
      { y: 14, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }, 0.6)
    .fromTo(".giant-tabs-bar",
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }, 0.7);
}

// ==========================================================================
// 3. 产品插图滚动展开 (Product Scroll Motion)
// ==========================================================================
// 产品插图滚动展开：一次 rAF 写入，观察器负责离屏停算。
function initProductScrollMotion() {
  if (document.body.dataset.productMotionBound === "1") return;

  const scenes = Array.from(document.querySelectorAll(".product-motion"));
  if (!scenes.length) return;

  document.body.dataset.productMotionBound = "1";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const activeScenes = new Set();
  const observedScenes = new Set(scenes);
  let rafId = 0;

  const renderStatic = () => {
    scenes.forEach((scene) => scene.style.setProperty("--motion-progress", "1"));
  };

  const render = () => {
    rafId = 0;
    if (reducedMotion.matches || document.hidden) return;

    const viewportHeight = window.innerHeight || 1;
    activeScenes.forEach((scene) => {
      const rect = scene.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (viewportHeight + rect.height * 0.15)));
      scene.style.setProperty("--motion-progress", progress.toFixed(3));
    });
  };

  const schedule = () => {
    if (!rafId && !reducedMotion.matches && !document.hidden) rafId = requestAnimationFrame(render);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) activeScenes.add(entry.target);
      else activeScenes.delete(entry.target);
    });
    schedule();
  }, { rootMargin: "22% 0px 22% 0px" });

  scenes.forEach((scene) => observer.observe(scene));
  const servicesGrid = document.getElementById("services-grid");
  if (servicesGrid) {
    const dynamicSceneObserver = new MutationObserver(() => {
      servicesGrid.querySelectorAll(".product-motion").forEach((scene) => {
        if (observedScenes.has(scene)) return;
        observedScenes.add(scene);
        observer.observe(scene);
      });
      schedule();
    });
    dynamicSceneObserver.observe(servicesGrid, { childList: true, subtree: true });
  }
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) schedule();
  });
  reducedMotion.addEventListener("change", (event) => {
    if (event.matches) renderStatic();
    else schedule();
  });

  if (reducedMotion.matches) renderStatic();
  else schedule();
}

// ==========================================================================
// 3.5 板块级滚动动画（journey / about / future / 共享联系板块）
// 与产品 motion 同一模式：rAF 写入 --xx-p 进度变量，CSS 负责呈现。
// ==========================================================================
function initSectionReveals() {
  if (document.body.dataset.sectionRevealBound === "1") return;
  document.body.dataset.sectionRevealBound = "1";

  // 子元素序号变量（chips / li / rows），只写一次
  document.querySelectorAll(".capability-card-box").forEach(box => {
    box.querySelectorAll(".cap-tag-chip").forEach((chip, i) => chip.style.setProperty("--chip-i", i));
  });
  document.querySelectorAll(".roadmap-quarter-card").forEach(card => {
    card.querySelectorAll(".roadmap-feature-list li").forEach((li, i) => li.style.setProperty("--li-i", i));
  });
  document.querySelectorAll(".tp-contact-row").forEach((row, i) => row.style.setProperty("--row-i", i));

  // 容器 → 进度变量名 映射
  const TRACKED = [
    ["#view-journey .subpage-hero, #view-about .subpage-hero, #view-future .subpage-hero", "--sp-reveal", "self"],
    ["#view-journey .metric-stat-card", "--metric-p", "self"],
    ["#view-journey .journey-story-banner", "--story-p", "self"],
    ["#view-journey .timeline-stream-wrap", "--tl-p", "wrap"],
    ["#view-journey .timeline-node-item", "--node-p", "self"],
    ["#view-about .identity-card-box", "--id-p", "self"],
    ["#view-about .philosophy-quote-section", "--philo-p", "self"],
    ["#view-about .philo-point-item", "--pp-p", "self"],
    ["#view-about .capability-card-box", "--cap-p", "self"],
    ["#view-about .gallery-photo-frame", "--gal-p", "self"],
    ["#view-about .seo-summary", "--seo-p", "self"],
    ["#view-future .roadmap-quarter-card", "--rd-p", "self"],
    ["#view-future .inquiry-card-item", "--inq-p", "self"],
    ["#view-future .future-callout-box", "--fc-p", "self"],
    [".tp-contact-section", "--contact-p", "self"]
  ];

  const bindings = []; // { el, prop, mode }
  TRACKED.forEach(([sel, prop, mode]) => {
    document.querySelectorAll(sel).forEach(el => bindings.push({ el, prop, mode }));
  });
  const bindingByElement = new Map(bindings.map(binding => [binding.el, binding]));
  const activeBindings = new Set();

  // in-view 类（CSS keyframe 入场用）：section-heading-row / hero 插图 / callout
  const inViewTargets = document.querySelectorAll(
    "#view-journey .section-heading-row, #view-about .section-heading-row, #view-future .section-heading-row, .subpage-hero-illustration, .future-callout-box"
  );
  const inViewObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        inViewObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  inViewTargets.forEach(el => inViewObserver.observe(el));
  // 联系板块动态 rows 已在静态 HTML，无需 MutationObserver

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let rafId = 0;

  const renderAll = () => {
    rafId = 0;
    if (document.hidden) return;
    const vh = window.innerHeight || 1;
    activeBindings.forEach(({ el, prop, mode }) => {
      // 隐藏的路由视图跳过（display:none 时 rect 为 0）
      const rect = el.getBoundingClientRect();
      if (rect.height === 0 && rect.width === 0) return;
      let p;
      if (mode === "wrap") {
        // 时间线容器：0 → 1 对应「容器顶进入视口底」到「容器底到达视口中下」
        const total = rect.height + vh;
        p = Math.max(0, Math.min(1, (vh - rect.top) / total));
      } else {
        p = Math.max(0, Math.min(1, (vh - rect.top) / (vh * 0.72)));
      }
      el.style.setProperty(prop, p.toFixed(3));
    });
  };

  const schedule = () => {
    if (!rafId && !reducedMotion.matches && !document.hidden) rafId = requestAnimationFrame(renderAll);
  };

  // 只让视口附近的元素进入每帧测量集合，避免四个隐藏路由的节点一起触发回流。
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const binding = bindingByElement.get(entry.target);
      if (!binding) return;
      if (entry.isIntersecting) activeBindings.add(binding);
      else activeBindings.delete(binding);
    });
    schedule();
  }, { rootMargin: "22% 0px 22% 0px" });
  bindings.forEach(({ el }) => progressObserver.observe(el));
  window.__tpScheduleSectionReveal = schedule;

  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });
  document.addEventListener("visibilitychange", () => { if (!document.hidden) schedule(); });

  if (reducedMotion.matches) {
    // 无障碍：所有进度直接置 1
    bindings.forEach(({ el, prop }) => el.style.setProperty(prop, "1"));
  } else {
    schedule();
  }
}

function init3DCardTiltPhysics() {
  if (window.innerWidth <= 768) return; // 移动端避免陀螺仪冲突
  // 防重复绑定：只允许初始化一次，避免路由切换等场景重复 addEventListener
  if (document.body.dataset.tiltBound === "1") return;
  document.body.dataset.tiltBound = "1";
  // 拖动调试模式跳过 3D tilt，避免干扰拖拽
  if (new URLSearchParams(window.location.search).get("dragHero") === "true") return;

  // 核心作品卡片 3D 视差
  document.querySelectorAll(".featured-ref-card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      if (window.gsap) {
        gsap.to(card, {
          rotateY: x * 5,
          rotateX: -y * 5,
          y: -5,
          transformPerspective: 1000,
          boxShadow: `${-x * 10 + 6}px ${-y * 10 + 6}px 0px var(--border-main)`,
          duration: 0.25,
          ease: "power1.out"
        });
      }
    });

    card.addEventListener("mouseleave", () => {
      if (window.gsap) {
        gsap.to(card, {
          rotateY: 0,
          rotateX: 0,
          y: 0,
          boxShadow: "var(--shadow-card)",
          duration: 0.5,
          ease: "elastic.out(1, 0.5)"
        });
      }
    });
  });
}

// 磁性按钮微交互 (Magnetic Button Interaction)
function initMagneticButtons() {
  document.querySelectorAll(".magnetic-btn").forEach(btn => {
    btn.onmousemove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      if (window.gsap) {
        gsap.to(btn, { x: x * 0.35, y: y * 0.35, duration: 0.2, ease: "power1.out" });
      } else {
        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
      }
    };
    btn.onmouseleave = () => {
      if (window.gsap) {
        gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
      } else {
        btn.style.transform = "translate(0px, 0px)";
      }
    };
  });
}

// ==========================================================================
// 4. 多路由 SPA 切换引擎 (Multi-Route SPA Routing Engine)
// ==========================================================================
const VALID_ROUTES = ["products", "journey", "about", "future"];

function switchRoute(routeId) {
  if (!VALID_ROUTES.includes(routeId)) {
    routeId = "products";
  }

  state.currentRoute = routeId;

  // 1. 切换视图容器显示
  document.querySelectorAll(".route-view").forEach(view => {
    view.classList.remove("active");
  });

  const activeView = document.getElementById(`view-${routeId}`);
  if (activeView) {
    activeView.classList.add("active");
  }

  // 2. 更新 Header、Giant Tabs 和 Mobile Drawer 高亮状态
  document.querySelectorAll(".nav-links .nav-item").forEach(item => {
    item.classList.toggle("active", item.dataset.route === routeId);
  });

  document.querySelectorAll(".giant-tabs-bar .giant-tab-item").forEach(item => {
    item.classList.toggle("active", item.dataset.route === routeId);
  });

  document.querySelectorAll(".drawer-links-list .drawer-nav-item").forEach(item => {
    item.classList.toggle("active", item.dataset.route === routeId);
  });

  // 3. 更新 Hash 路由（replaceState 避免历史记录堆积，后退不会逐条回退 Tab）
  const targetHash = `#/${routeId}`;
  if (location.hash !== targetHash) {
    history.replaceState(null, "", targetHash);
  }

  // 4. 滚动到页面顶部
  window.scrollTo({ top: 0, behavior: "instant" });
  if (window.__tpScheduleSectionReveal) window.__tpScheduleSectionReveal();
  if (window._heroInteractiveScene) window._heroInteractiveScene.updateLoopState();
}
window.switchRoute = switchRoute;

function handleHashRoute() {
  const hash = location.hash.replace(/^#\/?/, "");
  if (VALID_ROUTES.includes(hash)) {
    switchRoute(hash);
  } else {
    switchRoute("products");
  }
}
window.handleHashRoute = handleHashRoute;

// ==========================================================================
// 5. 日式创意分层角色交互系统 (Interactive Hero Characters & Eye Tracking System)
// ==========================================================================

class TrackingEye {
  constructor(pupilEl, svgEl, eyeCenterSvg, maxRadiusSvg, svgViewBoxWidth, svgViewBoxHeight, depth = 1) {
    this.pupilEl = pupilEl;
    this.svgEl = svgEl;
    this.eyeCenterSvg = eyeCenterSvg; // { x, y }
    this.maxRadiusSvg = maxRadiusSvg;
    this.svgW = svgViewBoxWidth;
    this.svgH = svgViewBoxHeight;
    this.depth = depth;
    this.currentOffsetX = 0;
    this.currentOffsetY = 0;
    this.velocityX = 0;
    this.velocityY = 0;
  }

  update(pointerX, pointerY, easing = 0.15) {
    if (!this.pupilEl || !this.svgEl) return;
    const rect = this.svgEl.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    // 计算眼珠中心在屏幕上的真实像素坐标
    const screenEyeX = rect.left + (this.eyeCenterSvg.x / this.svgW) * rect.width;
    const screenEyeY = rect.top + (this.eyeCenterSvg.y / this.svgH) * rect.height;

    const dx = pointerX - screenEyeX;
    const dy = pointerY - screenEyeY;
    const angle = Math.atan2(dy, dx);
    const distancePx = Math.hypot(dx, dy);

    // 非线性映射让近距离移动更细腻、远距离仍保持明确的视线方向。
    const normalizedDistance = Math.min(distancePx / 220, 1);
    const targetDistSvg = Math.min(
      Math.pow(normalizedDistance, 0.82) * this.maxRadiusSvg * this.depth,
      this.maxRadiusSvg
    );

    const targetOffsetX = Math.cos(angle) * targetDistSvg;
    const targetOffsetY = Math.sin(angle) * targetDistSvg;

    const spring = Math.min(0.28, easing * 1.55);
    this.velocityX += (targetOffsetX - this.currentOffsetX) * spring;
    this.velocityY += (targetOffsetY - this.currentOffsetY) * spring;
    this.velocityX *= 0.72;
    this.velocityY *= 0.72;
    this.currentOffsetX += this.velocityX;
    this.currentOffsetY += this.velocityY;

    const tx = this.currentOffsetX.toFixed(2);
    const ty = this.currentOffsetY.toFixed(2);
    this.pupilEl.setAttribute("transform", `translate(${tx}, ${ty})`);
    this.pupilEl.style.transform = `translate(${tx}px, ${ty}px)`;
  }

  reset(easing = 0.08) {
    if (!this.pupilEl) return;
    this.velocityX += (0 - this.currentOffsetX) * easing;
    this.velocityY += (0 - this.currentOffsetY) * easing;
    this.velocityX *= 0.68;
    this.velocityY *= 0.68;
    this.currentOffsetX += this.velocityX;
    this.currentOffsetY += this.velocityY;

    const tx = this.currentOffsetX.toFixed(2);
    const ty = this.currentOffsetY.toFixed(2);
    this.pupilEl.setAttribute("transform", `translate(${tx}, ${ty})`);
    this.pupilEl.style.transform = `translate(${tx}px, ${ty}px)`;
  }
}

class HumanCharacter {
  constructor() {
    this.headEl = document.getElementById("human-head-wrapper");
    this.svgEl = document.querySelector(".human-eyes-svg");
    const pupilLeft = document.getElementById("human-pupil-left");
    const pupilRight = document.getElementById("human-pupil-right");

    // 人物眼睛 SVG 坐标 (1024x1536 画布)
    this.leftEye = pupilLeft ? new TrackingEye(pupilLeft, this.svgEl, { x: 433, y: 180 }, 12.5, 1024, 1536, 0.92) : null;
    this.rightEye = pupilRight ? new TrackingEye(pupilRight, this.svgEl, { x: 504, y: 160 }, 13.5, 1024, 1536, 1.0) : null;

    this.currentRotX = 0;
    this.currentRotY = 0;
    this.currentRotZ = 0;
    this.currentTransX = 0;
    this.currentTransY = 0;
  }

  update(pointerX, pointerY, normX, normY, easing = 0.14) {
    // 1. 眼睛视线跟随
    if (this.leftEye) this.leftEye.update(pointerX, pointerY, easing);
    if (this.rightEye) this.rightEye.update(pointerX, pointerY, easing);

    // 2. 头部 3D 视角跟随：眼睛先响应，头部带轻微回弹与待机呼吸。
    if (this.headEl) {
      const idleMix = 1 - Math.min(1, Math.hypot(normX, normY));
      const idleWave = performance.now() * 0.00135;
      const targetRotX = -normY * 3.6 + Math.sin(idleWave) * 0.22 * idleMix;
      const targetRotY = normX * 5.2;
      const targetRotZ = normX * 0.8 + Math.sin(idleWave * 0.76) * 0.28 * idleMix;
      const targetTransX = normX * 3.4;
      const targetTransY = normY * 2.6 + Math.sin(idleWave * 0.9) * 0.65 * idleMix;

      this.currentRotX += (targetRotX - this.currentRotX) * easing;
      this.currentRotY += (targetRotY - this.currentRotY) * easing;
      this.currentRotZ += (targetRotZ - this.currentRotZ) * easing;
      this.currentTransX += (targetTransX - this.currentTransX) * easing;
      this.currentTransY += (targetTransY - this.currentTransY) * easing;

      this.headEl.style.transform = `translate3d(${this.currentTransX.toFixed(2)}px, ${this.currentTransY.toFixed(2)}px, 0) rotateX(${this.currentRotX.toFixed(2)}deg) rotateY(${this.currentRotY.toFixed(2)}deg) rotateZ(${this.currentRotZ.toFixed(2)}deg)`;
    }
  }

  reset(easing = 0.08) {
    if (this.leftEye) this.leftEye.reset(easing);
    if (this.rightEye) this.rightEye.reset(easing);

    if (this.headEl) {
      this.currentRotX += (0 - this.currentRotX) * easing;
      this.currentRotY += (0 - this.currentRotY) * easing;
      this.currentRotZ += (0 - this.currentRotZ) * easing;
      this.currentTransX += (0 - this.currentTransX) * easing;
      this.currentTransY += (0 - this.currentTransY) * easing;

      this.headEl.style.transform = `translate3d(${this.currentTransX.toFixed(2)}px, ${this.currentTransY.toFixed(2)}px, 0) rotateX(${this.currentRotX.toFixed(2)}deg) rotateY(${this.currentRotY.toFixed(2)}deg) rotateZ(${this.currentRotZ.toFixed(2)}deg)`;
    }
  }
}

class MonsterCharacter {
  constructor() {
    this.headEl = document.getElementById("monster-head-wrapper");
    this.svgEl = document.querySelector(".monster-eyes-svg");
    const pupilLeft = document.getElementById("monster-pupil-left");
    const pupilRight = document.getElementById("monster-pupil-right");

    // 绿色怪物大眼睛 SVG 坐标 (1254x1254 画布)
    this.leftEye = pupilLeft ? new TrackingEye(pupilLeft, this.svgEl, { x: 470, y: 702 }, 58.0, 1254, 1254, 0.94) : null;
    this.rightEye = pupilRight ? new TrackingEye(pupilRight, this.svgEl, { x: 845, y: 686 }, 62.0, 1254, 1254, 1.0) : null;

    this.currentRot = 0;
    this.currentTransX = 0;
    this.currentTransY = 0;
    this.currentScaleX = 1;
    this.currentScaleY = 1;
  }

  update(pointerX, pointerY, normX, normY, easing = 0.14) {
    // 1. 眼睛大行程跟随
    if (this.leftEye) this.leftEye.update(pointerX, pointerY, easing);
    if (this.rightEye) this.rightEye.update(pointerX, pointerY, easing);

    // 2. 怪物头部软体/果冻感跟随：转头、位移和 squash/stretch 分层响应。
    if (this.headEl) {
      const idleMix = 1 - Math.min(1, Math.hypot(normX, normY));
      const idleWave = performance.now() * 0.0011 + 0.8;
      const targetRot = normX * 6.4 + Math.sin(idleWave) * 0.5 * idleMix;
      const targetTransX = normX * 5.2;
      const targetTransY = normY * 3.6 + Math.sin(idleWave * 0.9) * 1.15 * idleMix;
      const squash = Math.sin(idleWave * 1.7) * 0.012 * idleMix;
      const targetScaleX = 1 + normY * 0.045 + squash;
      const targetScaleY = 1 - normY * 0.045 - squash;

      this.currentRot += (targetRot - this.currentRot) * easing;
      this.currentTransX += (targetTransX - this.currentTransX) * easing;
      this.currentTransY += (targetTransY - this.currentTransY) * easing;
      this.currentScaleX += (targetScaleX - this.currentScaleX) * easing;
      this.currentScaleY += (targetScaleY - this.currentScaleY) * easing;

      this.headEl.style.transform = `translate3d(${this.currentTransX.toFixed(2)}px, ${this.currentTransY.toFixed(2)}px, 0) rotate(${this.currentRot.toFixed(2)}deg) scale(${this.currentScaleX.toFixed(3)}, ${this.currentScaleY.toFixed(3)})`;
    }
  }

  reset(easing = 0.08) {
    if (this.leftEye) this.leftEye.reset(easing);
    if (this.rightEye) this.rightEye.reset(easing);

    if (this.headEl) {
      this.currentRot += (0 - this.currentRot) * easing;
      this.currentTransX += (0 - this.currentTransX) * easing;
      this.currentTransY += (0 - this.currentTransY) * easing;
      this.currentScaleX += (1 - this.currentScaleX) * easing;
      this.currentScaleY += (1 - this.currentScaleY) * easing;

      this.headEl.style.transform = `translate3d(${this.currentTransX.toFixed(2)}px, ${this.currentTransY.toFixed(2)}px, 0) rotate(${this.currentRot.toFixed(2)}deg) scale(${this.currentScaleX.toFixed(3)}, ${this.currentScaleY.toFixed(3)})`;
    }
  }
}

class InteractiveHeroScene {
  constructor() {
    this.human = new HumanCharacter();
    this.monster = new MonsterCharacter();
    this.sceneEl = document.querySelector(".hero-character-scene");
    this.sceneInView = false;

    this.pointerX = window.innerWidth * 0.5;
    this.pointerY = window.innerHeight * 0.4;
    this.targetPointerX = this.pointerX;
    this.targetPointerY = this.pointerY;
    this.isPointerInside = true;

    this.rafId = null;
    this.loopRunning = false;
    this.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 调试模式判断: URL 带有 ?characterDebug=true
    this.debugMode = new URLSearchParams(window.location.search).get("characterDebug") === "true";
    this.debugHudEl = null;

    this.initEvents();
    this.initVisibility();
    if (this.debugMode) {
      this.initDebugMode();
    }
    this.startLoop();
  }

  initEvents() {
    const onMove = (x, y) => {
      this.targetPointerX = x;
      this.targetPointerY = y;
      this.isPointerInside = true;
    };

    // Pointer Events 已覆盖鼠标、触控笔和触摸，避免同一输入重复触发三条链路。
    window.addEventListener("pointermove", (e) => onMove(e.clientX, e.clientY), { passive: true });

    document.addEventListener("mouseleave", () => {
      this.isPointerInside = false;
      this.targetPointerX = window.innerWidth * 0.5;
      this.targetPointerY = window.innerHeight * 0.4;
    });

    window.addEventListener("blur", () => {
      this.isPointerInside = false;
      this.targetPointerX = window.innerWidth * 0.5;
      this.targetPointerY = window.innerHeight * 0.4;
    });

    window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change", (e) => {
      this.reducedMotion = e.matches;
      if (e.matches) {
        this.human.reset(1);
        this.monster.reset(1);
      }
      this.updateLoopState();
    });
  }

  initVisibility() {
    if (!this.sceneEl || !("IntersectionObserver" in window)) {
      this.sceneInView = true;
      this.updateLoopState();
      return;
    }

    this.visibilityObserver = new IntersectionObserver((entries) => {
      this.sceneInView = Boolean(entries[0]?.isIntersecting);
      this.updateLoopState();
    }, { rootMargin: "100px 0px" });
    this.visibilityObserver.observe(this.sceneEl);

    document.addEventListener("visibilitychange", () => this.updateLoopState());
    window.addEventListener("resize", () => this.updateLoopState(), { passive: true });
  }

  shouldRun() {
    return Boolean(
      this.sceneEl &&
      this.sceneInView &&
      !document.hidden &&
      !this.reducedMotion &&
      state.currentRoute === "products"
    );
  }

  updateLoopState() {
    if (this.shouldRun()) this.startLoop();
    else this.stopLoop();
  }

  stopLoop() {
    this.loopRunning = false;
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
    this.rafId = null;
  }

  initDebugMode() {
    console.log("[Hero Scene] Character Debug Mode Activated 🎯");
    this.debugHudEl = document.createElement("div");
    this.debugHudEl.className = "character-debug-hud";
    document.body.appendChild(this.debugHudEl);
  }

  updateDebugHud(normX, normY) {
    if (!this.debugHudEl) return;
    this.debugHudEl.innerHTML = `
      <div><strong>🎯 HERO CHARACTER DEBUG</strong></div>
      <div>Normalized: [${normX.toFixed(3)}, ${normY.toFixed(3)}]</div>
      <div>Pointer: (${Math.round(this.pointerX)}, ${Math.round(this.pointerY)})</div>
      <div>Human Head: Neck Pivot (46.8%, 17%)</div>
      <div>Monster Head: Base Pivot (50%, 80%)</div>
      <div>Active State: ${this.isPointerInside ? 'Tracking' : 'Resting'}</div>
    `;
  }

  startLoop() {
    if (this.loopRunning || !this.shouldRun()) return;
    this.loopRunning = true;
    const loop = () => {
      this.rafId = null;
      if (!this.shouldRun()) {
        this.loopRunning = false;
        return;
      }

      // Pointer 平滑插值 (Inertia & Smooth Tracking)
      const easing = 0.14;
      this.pointerX += (this.targetPointerX - this.pointerX) * easing;
      this.pointerY += (this.targetPointerY - this.pointerY) * easing;

      // 归一化指针坐标 (-1 ~ 1)
      const normX = Math.max(-1, Math.min(1, ((this.pointerX / window.innerWidth) - 0.5) * 2));
      const normY = Math.max(-1, Math.min(1, ((this.pointerY / window.innerHeight) - 0.5) * 2));

      if (this.isPointerInside) {
        this.human.update(this.pointerX, this.pointerY, normX, normY, easing);
        this.monster.update(this.pointerX, this.pointerY, normX, normY, easing);
      } else {
        this.human.reset(0.06);
        this.monster.reset(0.06);
      }

      if (this.debugMode) {
        this.updateDebugHud(normX, normY);
      }

      this.rafId = requestAnimationFrame(loop);
    };

    this.rafId = requestAnimationFrame(loop);
  }
}

function initHeroEyeTracking() {
  const scene = new InteractiveHeroScene();
  window._heroInteractiveScene = scene;
}

// ==========================================================================
// 6. Hero 拖动调试模式 (?dragHero=true)：人/怪物各自拖拽定位
// ==========================================================================
function initHeroDragMode() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("dragHero") !== "true") return;

  const human = document.getElementById("char-human");
  const monster = document.getElementById("char-monster");
  const shadow = document.getElementById("hero-ground-shadow");
  if (!human || !monster) return;

  // 显示拖拽提示 HUD
  const hud = document.createElement("div");
  hud.className = "character-debug-hud";
  hud.style.left = "16px";
  hud.style.right = "auto";
  hud.style.bottom = "16px";
  hud.style.zIndex = "10000";
  hud.style.width = "340px";
  hud.style.whiteSpace = "pre-line";
  hud.style.pointerEvents = "none";
  document.body.appendChild(hud);

  // 拖拽状态管理（每个角色独立）
  function makeDraggable(el, label) {
    let dragging = false;
    let startX = 0, startY = 0;
    let origLeft = 0, origBottom = 0;

    el.style.cursor = "grab";
    el.style.userSelect = "none";
    el.style.touchAction = "none";
    el.style.zIndex = "20"; // 拖拽时置顶
    el.style.pointerEvents = "auto"; // 阴影默认 pointer-events:none，拖拽模式下可点

    // 阴影元素拖拽模式临时高亮，方便看到和抓取
    if (el.id === "hero-ground-shadow") {
      el.style.outline = "2px dashed rgba(255, 100, 100, 0.7)";
      el.style.outlineOffset = "2px";
      el.style.height = "18px";
    }

    el.addEventListener("pointerdown", (e) => {
      dragging = true;
      startX = e.clientX;
      startY = e.clientY;
      const cs = getComputedStyle(el);
      origLeft = parseFloat(cs.left) || 0;
      origBottom = parseFloat(cs.bottom) || 0;
      el.style.cursor = "grabbing";
      el.setPointerCapture(e.pointerId);
      e.preventDefault();
      e.stopPropagation();
    });

    el.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      // 方向与鼠标一致：右移 → left 增大；下移 → bottom 减小
      el.style.left = `${Math.round(origLeft + dx)}px`;
      el.style.bottom = `${Math.round(origBottom - dy)}px`;
      updateHud();
    });

    const stop = (e) => {
      if (!dragging) return;
      dragging = false;
      el.style.cursor = "grab";
    };
    el.addEventListener("pointerup", stop);
    el.addEventListener("pointercancel", stop);
  }

  function updateHud() {
    const humanLeft = Math.round(parseFloat(getComputedStyle(human).left) || 0);
    const humanBottom = Math.round(parseFloat(getComputedStyle(human).bottom) || 0);
    const monsterLeft = Math.round(parseFloat(getComputedStyle(monster).left) || 0);
    const monsterBottom = Math.round(parseFloat(getComputedStyle(monster).bottom) || 0);
    const shadowLeft = shadow ? Math.round(parseFloat(getComputedStyle(shadow).left) || 0) : null;
    const shadowBottom = shadow ? Math.round(parseFloat(getComputedStyle(shadow).bottom) || 0) : null;
    let text = `🎯 拖拽调试模式\n\n人物 / 小怪物 / 地面阴影可分开拖动\n拖拽方向 = 鼠标方向\n\n👤 人物：\nleft: ${humanLeft}px\nbottom: ${humanBottom}px\n\n👾 小怪物：\nleft: ${monsterLeft}px\nbottom: ${monsterBottom}px`;
    if (shadow) {
      text += `\n\n🌑 地面阴影：\nleft: ${shadowLeft}px\nbottom: ${shadowBottom}px`;
    }
    text += `\n\n拖好后把这 6 个数字告诉小鱼`;
    hud.textContent = text;
  }

  makeDraggable(human, "人物");
  makeDraggable(monster, "小怪物");
  if (shadow) makeDraggable(shadow, "地面阴影");

  updateHud();
  console.log("[Hero Drag Mode] 激活：人物/怪物可单独拖拽，拖好后把 left/bottom 数值告诉小鱼");
}

function initAnimations() {
  initInkDoodleCanvas();
  initScrollTriggerAnimations();
  initProductScrollMotion();
  initSectionReveals();
  init3DCardTiltPhysics();
  initMagneticButtons();
  initHeroEyeTracking();
  initHeroDragMode();
}

// 可靠启动应用
function startApp() {
  init();
  handleHashRoute();
  initAnimations();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startApp);
} else {
  startApp();
}
