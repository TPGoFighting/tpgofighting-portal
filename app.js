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

// 21 个站点数据 (遵循 humanizer-zh 朴实真实的叙事风格)
const SERVICES = [
  // 1. 个人与学术 (5)
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
  {
    id: "knowledge",
    name: "唐潘 · 像素档案",
    subdomain: "knowledge.tpgofighting.top",
    url: "https://knowledge.tpgofighting.top",
    category: "personal",
    categoryName: "个人与学术",
    iconKey: "pixel",
    desc: "复古 8-Bit 像素风的技能面板，记录平时点亮的技能和做过的项目。",
    tags: ["像素风", "8-Bit", "技能树"],
    tech: "Pixel Art / Retro Canvas",
    port: "8088",
    path: "/var/www/knowledge"
  },

  // 2. AI 工具与学习 (6)
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
    subdomain: "tpbili.tpgofighting.top",
    url: "https://tpbili.tpgofighting.top",
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

  // 5. 校园特辑与生活 (4)
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
  }
];

// 24 张海报与唱片列表
const POSTERS = [
  "poster-0.png", "poster-4.png", "poster-5.png", "poster-6.png", "poster-7.png",
  "poster-8.png", "poster-9.png", "poster-10.png", "poster-11.png", "poster-12.png",
  "poster-13.png", "poster-14.png", "poster-15.png", "poster-16.png", "poster-17.png",
  "poster-18.png", "poster-19.png", "poster-20.png", "poster-21.png", "poster-22.png",
  "poster-23.png", "poster-24.png", "poster-25.png", "poster-26.png"
];

// 全局应用状态
const state = {
  activeCategory: "all",
  searchQuery: "",
  viewMode: localStorage.getItem("tpspace_view") || "grid",
  theme: localStorage.getItem("tpspace_theme") || "light"
};

// DOM 元素缓存
let elements = {};

function init() {
  elements = {
    servicesGrid: document.getElementById("services-grid"),
    postersRail: document.getElementById("posters-rail"),
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

  // 渲染矩阵与海报
  renderMatrixServices();
  renderPostersMarquee();

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

  // 动态同步分类计数（数据驱动，防止硬编码漂移）
  const counts = { all: SERVICES.length };
  SERVICES.forEach(svc => { counts[svc.category] = (counts[svc.category] || 0) + 1; });
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

  initMagneticButtons();
}

function renderPostersMarquee() {
  // 复制双份实现无限无缝滚动
  const doubled = [...POSTERS, ...POSTERS];
  elements.postersRail.innerHTML = doubled.map((img, i) => `
    <div class="poster-cover-frame" title="电影 / 音乐海报">
      <img src="assets/posters/${img}" alt="收藏的电影海报或音乐专辑封面 ${(i % POSTERS.length) + 1}" class="poster-cover-img" loading="lazy">
    </div>
  `).join("");
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

  const mouse = { x: -1000, y: -1000, active: false };

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  });

  document.addEventListener("mouseleave", () => {
    mouse.active = false;
  });

  // 生成 32 个轻量几何手绘粒子
  const DOODLE_TYPES = ["cross", "circle", "box", "triangle", "star", "dot", "bracket"];
  const doodles = Array.from({ length: 32 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    size: 8 + Math.random() * 12,
    type: DOODLE_TYPES[Math.floor(Math.random() * DOODLE_TYPES.length)],
    angle: Math.random() * Math.PI * 2,
    vAngle: (Math.random() - 0.5) * 0.015,
    opacity: 0.15 + Math.random() * 0.25
  }));

  function drawDoodle(d) {
    ctx.save();
    ctx.translate(d.x, d.y);
    ctx.rotate(d.angle);

    const isDark = document.body.dataset.theme === "dark";
    const strokeColor = isDark ? `rgba(226, 232, 240, ${d.opacity})` : `rgba(20, 22, 27, ${d.opacity})`;
    const yellowColor = isDark ? `rgba(251, 191, 36, ${d.opacity * 1.5})` : `rgba(245, 158, 11, ${d.opacity * 1.5})`;

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

  function loop() {
    ctx.clearRect(0, 0, width, height);

    doodles.forEach(d => {
      // 物理鼠标斥力效果
      if (mouse.active) {
        const dx = d.x - mouse.x;
        const dy = d.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120 && dist > 0) {
          const force = (120 - dist) / 120 * 1.8;
          d.x += (dx / dist) * force;
          d.y += (dy / dist) * force;
        }
      }

      d.x += d.vx;
      d.y += d.vy;
      d.angle += d.vAngle;

      // 边界环绕
      if (d.x < -20) d.x = width + 20;
      if (d.x > width + 20) d.x = -20;
      if (d.y < -20) d.y = height + 20;
      if (d.y > height + 20) d.y = -20;

      drawDoodle(d);
    });

    requestAnimationFrame(loop);
  }

  loop();
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
// 3. 卡片与插画 3D 鼠标悬停视差倾斜 (3D Cursor Tilt Parallax)
// ==========================================================================
// ============================================================================
// TPrompts Pilot：分段播放的输入关系演示
// 时间和状态只来自 build/timeline.json；这里负责输入、反向和 SVG 层渲染
// ============================================================================
function initTpromptsMotionPilot() {
  const stage = document.querySelector('[data-motion-stage="tprompts"]');
  if (!stage) return;
  stage.tabIndex = 0;
  stage.setAttribute("role", "button");
  stage.setAttribute("aria-label", "播放 TPrompts 模块连接动画");
  stage.setAttribute("aria-pressed", "false");

  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  let timeline = null;
  let progress = 0;
  let targetProgress = 0;
  let pointerX = 0;
  let pointerY = 0;
  let rafId = 0;
  let lastTime = 0;
  let dirty = true;
  let pinned = false;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  const validateTimeline = (candidate) => {
    if (!candidate || !Array.isArray(candidate.states) || !Array.isArray(candidate.segments)) {
      throw new Error("TPrompts timeline 缺少 states 或 segments");
    }
    if (candidate.states.length !== candidate.segments.length + 1) {
      throw new Error("TPrompts timeline states 与 segments 数量不匹配");
    }
    const ids = candidate.states.map((state) => state.id);
    if (!ids.length || new Set(ids).size !== ids.length || ids.some((id) => !id)) {
      throw new Error("TPrompts timeline state id 必须唯一且非空");
    }
    candidate.segments.forEach((segment, index) => {
      if (!(segment.start <= segment.hold && segment.hold < segment.endExclusive)) {
        throw new Error(`TPrompts timeline segment ${index} 时间边界无效`);
      }
      if (segment.from !== ids[index] || segment.to !== ids[index + 1]) {
        throw new Error(`TPrompts timeline segment ${index} 状态顺序无效`);
      }
    });
    return candidate;
  };

  const setProgressStyles = () => {
    if (!timeline) return;
    const p = clamp(progress, 0, 1);
    const flowOpacity = clamp((p - 0.04) / 0.28, 0, 1);
    const systemOpacity = clamp((p - 0.02) / 0.18, 0, 1) * (1 - clamp((p - 0.58) / 0.28, 0, 1));
    const userOpacity = clamp((p - 0.18) / 0.26, 0, 1) * (1 - clamp((p - 0.78) / 0.18, 0, 1));
    const outputOpacity = clamp((p - 0.56) / 0.3, 0, 1);
    const cursorOpacity = clamp((p - 0.67) / 0.18, 0, 1);
    const sparkOpacity = clamp((p - 0.84) / 0.1, 0, 1) * (1 - clamp((p - 0.96) / 0.04, 0, 1));
    const totalHold = timeline.states[timeline.states.length - 1].hold;
    let stateIndex = 0;
    timeline.states.forEach((state, index) => {
      if (p + 0.0001 >= state.hold / Math.max(0.001, totalHold)) stateIndex = index;
    });
    const activeState = timeline.states[stateIndex].id;
    const driftScale = reducedMotionQuery.matches ? 0 : 1;

    stage.dataset.motionState = activeState;
    stage.style.setProperty("--pilot-progress", p.toFixed(4));
    stage.style.setProperty("--pilot-flow-opacity", flowOpacity.toFixed(3));
    stage.style.setProperty("--pilot-focus-system-opacity", systemOpacity.toFixed(3));
    stage.style.setProperty("--pilot-focus-user-opacity", userOpacity.toFixed(3));
    stage.style.setProperty("--pilot-focus-output-opacity", outputOpacity.toFixed(3));
    stage.style.setProperty("--pilot-cursor-opacity", cursorOpacity.toFixed(3));
    stage.style.setProperty("--pilot-spark-opacity", sparkOpacity.toFixed(3));
    stage.style.setProperty("--pilot-flow-offset", (1 - p).toFixed(4));
    stage.style.setProperty("--pilot-drift-x", `${(pointerX * 4 * driftScale).toFixed(2)}px`);
    stage.style.setProperty("--pilot-drift-y", `${(pointerY * 3 * driftScale).toFixed(2)}px`);
    stage.style.setProperty("--pilot-scale", (1 + p * 0.008 * driftScale).toFixed(4));
    stage.setAttribute("aria-pressed", p > 0.5 ? "true" : "false");
  };

  const renderLoop = (now) => {
    rafId = 0;
    if (!timeline) return;
    const delta = lastTime ? Math.min((now - lastTime) / 1000, 1 / 30) : 1 / 60;
    lastTime = now;
    const totalDuration = timeline.states[timeline.states.length - 1].hold;
    if (!reducedMotionQuery.matches && Math.abs(targetProgress - progress) > 0.0001) {
      const direction = targetProgress > progress ? 1 : -1;
      progress = clamp(progress + direction * delta / Math.max(0.001, totalDuration), 0, 1);
      if ((direction > 0 && progress >= targetProgress) || (direction < 0 && progress <= targetProgress)) {
        progress = targetProgress;
      }
      dirty = true;
    }
    if (dirty || reducedMotionQuery.matches) {
      setProgressStyles();
      dirty = false;
    }
    if (Math.abs(targetProgress - progress) > 0.0001 || dirty) {
      rafId = requestAnimationFrame(renderLoop);
    }
  };

  const schedule = () => {
    if (!rafId) rafId = requestAnimationFrame(renderLoop);
  };

  const setActive = (active) => {
    targetProgress = active && !reducedMotionQuery.matches ? 1 : 0;
    if (reducedMotionQuery.matches) progress = 0;
    dirty = true;
    schedule();
  };

  const syncHoverState = () => {
    if (!pinned && !stage.matches(":hover") && document.activeElement !== stage) setActive(false);
  };

  stage.addEventListener("pointerenter", () => setActive(true));
  stage.addEventListener("pointerleave", syncHoverState);
  stage.addEventListener("pointermove", (event) => {
    const rect = stage.getBoundingClientRect();
    pointerX = clamp((event.clientX - rect.left) / rect.width - 0.5, -0.5, 0.5);
    pointerY = clamp((event.clientY - rect.top) / rect.height - 0.5, -0.5, 0.5);
    dirty = true;
    schedule();
  });
  stage.addEventListener("focusin", () => setActive(true));
  stage.addEventListener("focusout", (event) => {
    if (!stage.contains(event.relatedTarget)) syncHoverState();
  });
  stage.addEventListener("click", () => {
    pinned = !pinned;
    setActive(pinned);
  });
  stage.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    pinned = !pinned;
    setActive(pinned);
  });
  reducedMotionQuery.addEventListener("change", () => {
    progress = 0;
    targetProgress = 0;
    dirty = true;
    schedule();
  });

  fetch("build/timeline.json", { credentials: "same-origin" })
    .then((response) => {
      if (!response.ok) throw new Error(`timeline HTTP ${response.status}`);
      return response.json();
    })
    .then((loadedTimeline) => {
      timeline = validateTimeline(loadedTimeline);
      stage.dataset.motionReady = "true";
      setProgressStyles();
      schedule();
    })
    .catch((error) => {
      stage.dataset.motionReady = "false";
      console.warn("[TPrompts Pilot] timeline 加载失败，保持静态降级：", error);
    });
}

// 其他核心作品卡：统一采用同一套分段播放、反向收回和 reduced-motion 运行时。
function initConfiguredMotionCards() {
  const cards = [...document.querySelectorAll(".featured-ref-card[data-motion-card]")]
    .filter((card) => card.dataset.motionCard !== "tprompts");
  const configs = window.TPCardMotionConfigs || {};
  if (!cards.length) return;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const validateTimeline = (candidate, id, config) => {
    if (!candidate || !Array.isArray(candidate.states) || !Array.isArray(candidate.segments)) {
      throw new Error(`${id} timeline 缺少 states 或 segments`);
    }
    if (candidate.states.length !== candidate.segments.length + 1) {
      throw new Error(`${id} timeline states 与 segments 数量不匹配`);
    }
    const ids = candidate.states.map((state) => state.id);
    const configIds = (config.states || []).map((state) => state.id);
    if (ids.join("|") !== configIds.join("|")) {
      throw new Error(`${id} timeline 与 motion config 状态不一致`);
    }
    candidate.segments.forEach((segment, index) => {
      if (!(segment.start <= segment.hold && segment.hold < segment.endExclusive)) {
        throw new Error(`${id} timeline segment ${index} 时间边界无效`);
      }
      if (segment.from !== ids[index] || segment.to !== ids[index + 1]) {
        throw new Error(`${id} timeline segment ${index} 状态顺序无效`);
      }
    });
    return candidate;
  };

  const mountCard = (card, timeline) => {
    const id = card.dataset.motionCard;
    const config = configs[id];
    const stage = card.querySelector(".ref-visual-col");
    if (!config || !stage || stage.dataset.motionMounted === "true") return;

    const template = document.createElement("template");
    template.innerHTML = String(config.overlayMarkup || "").trim();
    const overlay = template.content.firstElementChild;
    if (!overlay) throw new Error(`${id} motion config 缺少 SVG overlay`);

    stage.classList.add("motion-pilot-card", "motion-pilot-stage");
    stage.dataset.motionStage = id;
    overlay.classList.add("motion-card-overlay");
    overlay.setAttribute("preserveAspectRatio", config.overlayViewBox === "0 0 1000 1000" ? "xMidYMid meet" : "none");
    stage.appendChild(overlay);

    stage.tabIndex = 0;
    stage.setAttribute("role", "button");
    stage.setAttribute("aria-label", `播放 ${id} 动画`);
    stage.setAttribute("aria-pressed", "false");

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let progress = 0;
    let targetProgress = 0;
    let pointerX = 0;
    let pointerY = 0;
    let rafId = 0;
    let lastTime = 0;
    let dirty = true;
    let pinned = false;

    const setActive = (active) => {
      targetProgress = active && !reducedMotionQuery.matches ? 1 : 0;
      if (reducedMotionQuery.matches) progress = 0;
      dirty = true;
      schedule();
    };

    const renderCurrent = () => {
      const p = clamp(progress, 0, 1);
      const totalHold = timeline.states[timeline.states.length - 1].hold;
      let stateIndex = 0;
      timeline.states.forEach((state, index) => {
        if (p + 0.0001 >= state.hold / Math.max(0.001, totalHold)) stateIndex = index;
      });
      stage.dataset.motionState = timeline.states[stateIndex].id;
      stage.style.setProperty("--pilot-progress", p.toFixed(4));
      stage.setAttribute("aria-pressed", p > 0.5 ? "true" : "false");
      config.render(stage, overlay, p, pointerX, pointerY, reducedMotionQuery.matches);
    };

    const renderLoop = (now) => {
      rafId = 0;
      const delta = lastTime ? Math.min((now - lastTime) / 1000, 1 / 30) : 1 / 60;
      lastTime = now;
      const totalDuration = timeline.states[timeline.states.length - 1].hold;
      if (!reducedMotionQuery.matches && Math.abs(targetProgress - progress) > 0.0001) {
        const direction = targetProgress > progress ? 1 : -1;
        progress = clamp(progress + direction * delta / Math.max(0.001, totalDuration), 0, 1);
        if ((direction > 0 && progress >= targetProgress) || (direction < 0 && progress <= targetProgress)) {
          progress = targetProgress;
        }
        dirty = true;
      }
      if (dirty || reducedMotionQuery.matches) {
        renderCurrent();
        dirty = false;
      }
      if (Math.abs(targetProgress - progress) > 0.0001) rafId = requestAnimationFrame(renderLoop);
    };

    function schedule() {
      if (!rafId) rafId = requestAnimationFrame(renderLoop);
    }

    const syncHoverState = () => {
      if (!pinned && !stage.matches(":hover") && document.activeElement !== trigger) setActive(false);
    };

    stage.addEventListener("pointerenter", () => setActive(true));
    stage.addEventListener("pointerleave", syncHoverState);
    stage.addEventListener("pointermove", (event) => {
      const rect = stage.getBoundingClientRect();
      pointerX = clamp((event.clientX - rect.left) / rect.width - 0.5, -0.5, 0.5);
      pointerY = clamp((event.clientY - rect.top) / rect.height - 0.5, -0.5, 0.5);
      dirty = true;
      schedule();
    });
    stage.addEventListener("focusin", () => setActive(true));
    stage.addEventListener("focusout", (event) => {
      if (!stage.contains(event.relatedTarget)) syncHoverState();
    });
    stage.addEventListener("click", () => {
      pinned = !pinned;
      setActive(pinned);
    });
    stage.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      pinned = !pinned;
      setActive(pinned);
    });
    reducedMotionQuery.addEventListener("change", () => {
      progress = 0;
      targetProgress = 0;
      dirty = true;
      schedule();
    });

    stage.dataset.motionMounted = "true";
    stage.dataset.motionReady = "true";
    renderCurrent();
    schedule();
  };

  fetch("build/timeline.json", { credentials: "same-origin" })
    .then((response) => {
      if (!response.ok) throw new Error(`timeline HTTP ${response.status}`);
      return response.json();
    })
    .then((timeline) => {
      cards.forEach((card) => {
        const id = card.dataset.motionCard;
        const config = configs[id];
        if (!config || typeof config.render !== "function") throw new Error(`${id} motion config 缺失`);
        const cardTimeline = timeline.cards?.[id];
        if (!cardTimeline) throw new Error(`${id} timeline 缺失 cards.${id}`);
        mountCard(card, validateTimeline(cardTimeline, id, config));
      });
    })
    .catch((error) => {
      cards.forEach((card) => {
        card.querySelector(".ref-visual-col")?.setAttribute("data-motion-ready", "false");
      });
      console.warn("[Featured Motion] timeline 加载失败，保持静态降级：", error);
    });
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
    const isMotionPilot = card.classList.contains("motion-pilot-card");
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      if (window.gsap) {
        gsap.to(card, {
          rotateY: x * (isMotionPilot ? 3 : 5),
          rotateX: -y * (isMotionPilot ? 3 : 5),
          y: isMotionPilot ? -2 : -5,
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
  constructor(pupilEl, svgEl, eyeCenterSvg, maxRadiusSvg, svgViewBoxWidth, svgViewBoxHeight) {
    this.pupilEl = pupilEl;
    this.svgEl = svgEl;
    this.eyeCenterSvg = eyeCenterSvg; // { x, y }
    this.maxRadiusSvg = maxRadiusSvg;
    this.svgW = svgViewBoxWidth;
    this.svgH = svgViewBoxHeight;
    this.currentOffsetX = 0;
    this.currentOffsetY = 0;
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

    // 屏幕距离映射到 SVG 用户坐标位移
    const scaleFactor = (this.svgW / rect.width);
    const targetDistSvg = Math.min(distancePx * 0.035 * scaleFactor, this.maxRadiusSvg);

    const targetOffsetX = Math.cos(angle) * targetDistSvg;
    const targetOffsetY = Math.sin(angle) * targetDistSvg;

    this.currentOffsetX += (targetOffsetX - this.currentOffsetX) * easing;
    this.currentOffsetY += (targetOffsetY - this.currentOffsetY) * easing;

    const tx = this.currentOffsetX.toFixed(2);
    const ty = this.currentOffsetY.toFixed(2);
    this.pupilEl.setAttribute("transform", `translate(${tx}, ${ty})`);
    this.pupilEl.style.transform = `translate(${tx}px, ${ty}px)`;
  }

  reset(easing = 0.08) {
    if (!this.pupilEl) return;
    this.currentOffsetX += (0 - this.currentOffsetX) * easing;
    this.currentOffsetY += (0 - this.currentOffsetY) * easing;

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
    this.leftEye = pupilLeft ? new TrackingEye(pupilLeft, this.svgEl, { x: 433, y: 180 }, 8.0, 1024, 1536) : null;
    this.rightEye = pupilRight ? new TrackingEye(pupilRight, this.svgEl, { x: 504, y: 160 }, 8.0, 1024, 1536) : null;

    this.currentRotX = 0;
    this.currentRotY = 0;
    this.currentTransX = 0;
    this.currentTransY = 0;
  }

  update(pointerX, pointerY, normX, normY, easing = 0.14) {
    // 1. 眼睛视线跟随
    if (this.leftEye) this.leftEye.update(pointerX, pointerY, easing);
    if (this.rightEye) this.rightEye.update(pointerX, pointerY, easing);

    // 2. 头部轻微 3D 视角跟随 (Human: rotateX ±2.2°, rotateY ±3.0°, translate ±2px)
    if (this.headEl) {
      const targetRotX = -normY * 2.2;
      const targetRotY = normX * 3.0;
      const targetTransX = normX * 2.2;
      const targetTransY = normY * 1.8;

      this.currentRotX += (targetRotX - this.currentRotX) * easing;
      this.currentRotY += (targetRotY - this.currentRotY) * easing;
      this.currentTransX += (targetTransX - this.currentTransX) * easing;
      this.currentTransY += (targetTransY - this.currentTransY) * easing;

      this.headEl.style.transform = `translate3d(${this.currentTransX.toFixed(2)}px, ${this.currentTransY.toFixed(2)}px, 0) rotateX(${this.currentRotX.toFixed(2)}deg) rotateY(${this.currentRotY.toFixed(2)}deg)`;
    }
  }

  reset(easing = 0.08) {
    if (this.leftEye) this.leftEye.reset(easing);
    if (this.rightEye) this.rightEye.reset(easing);

    if (this.headEl) {
      this.currentRotX += (0 - this.currentRotX) * easing;
      this.currentRotY += (0 - this.currentRotY) * easing;
      this.currentTransX += (0 - this.currentTransX) * easing;
      this.currentTransY += (0 - this.currentTransY) * easing;

      this.headEl.style.transform = `translate3d(${this.currentTransX.toFixed(2)}px, ${this.currentTransY.toFixed(2)}px, 0) rotateX(${this.currentRotX.toFixed(2)}deg) rotateY(${this.currentRotY.toFixed(2)}deg)`;
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
    this.leftEye = pupilLeft ? new TrackingEye(pupilLeft, this.svgEl, { x: 470, y: 702 }, 45.0, 1254, 1254) : null;
    this.rightEye = pupilRight ? new TrackingEye(pupilRight, this.svgEl, { x: 845, y: 686 }, 45.0, 1254, 1254) : null;

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

    // 2. 怪物头部软体/果冻感跟随 (Monster: rotate ±5.0°, translate ±4px, squash/stretch)
    if (this.headEl) {
      const targetRot = normX * 4.8;
      const targetTransX = normX * 3.8;
      const targetTransY = normY * 2.8;
      const targetScaleX = 1 + normY * 0.025;
      const targetScaleY = 1 - normY * 0.025;

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

    this.pointerX = window.innerWidth * 0.5;
    this.pointerY = window.innerHeight * 0.4;
    this.targetPointerX = this.pointerX;
    this.targetPointerY = this.pointerY;
    this.isPointerInside = true;

    this.rafId = null;
    this.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 调试模式判断: URL 带有 ?characterDebug=true
    this.debugMode = new URLSearchParams(window.location.search).get("characterDebug") === "true";
    this.debugHudEl = null;

    this.initEvents();
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

    window.addEventListener("pointermove", (e) => onMove(e.clientX, e.clientY), { passive: true });
    window.addEventListener("mousemove", (e) => onMove(e.clientX, e.clientY), { passive: true });
    window.addEventListener("touchmove", (e) => {
      if (e.touches && e.touches[0]) {
        onMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

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
    });
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
    const loop = () => {
      if (this.reducedMotion) {
        this.human.reset(0.2);
        this.monster.reset(0.2);
        this.rafId = requestAnimationFrame(loop);
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
  initTpromptsMotionPilot();
  initConfiguredMotionCards();
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
