# TP Space

TP Space 是唐潘（Tyler Tang）的个人站点门户，线上首页为 [https://tpgofighting.top/](https://tpgofighting.top/)。本仓库是这扇门的静态前端：一张页面集中列出并跳转到 `*.tpgofighting.top` 下的个人主页、AI 工具、数据看板和校园生活等子站。站点清单写在 `app.js` 的 `SERVICES` 里，目前有 29 条，每条带有子域名和完整 URL。各子站的应用代码不在这个仓库中。

## 功能

门户页面是 `index.html`，交互在 `app.js`，样式在 `style.css`。

- **子站目录。** `SERVICES` 记录名称、子域名、URL、分类、简介、标签，以及该子站在数据里填写的技术说明、端口和服务器路径。首页「核心作品与 AI 工具」是手写卡片；「全部站点与服务矩阵」由脚本渲染未列入 `FEATURED_SERVICE_IDS` 的条目。分类为：个人与学术、AI 工具与平台、数据洞察与大屏、人才网络与申请、校园特辑与生活。矩阵支持网格 / 列表切换，选择写入 `localStorage` 键 `tpspace_view`。点击卡片打开详情弹窗，可以复制链接或打开对应站点。`getFilteredServices()` 还包含按名称、子域名、简介、标签和技术说明做关键词过滤的逻辑；`index.html` 里没有 `#global-search-input`，页面上目前没有搜索框。
- **页内路由。** 顶栏四个视图通过 hash 切换，合法值为 `products`、`journey`、`about`、`future`，对应 `#/products`、`#/journey`、`#/about`、`#/future`。经历、关于我和未来是页面内的静态文案。四个视图底部共用联系区，条目包括 GitHub、X、邮箱、哔哩哔哩、小红书和抖音。
- **首页交互。** 方格纸背景、手绘涂鸦 canvas、首屏角色瞳孔跟随与拖拽、GSAP 磁性按钮、滚动入场，以及核心作品卡片上的滚动动效。右上角可切换浅色 / 深色，选择写入 `tpspace_theme`。样式表包含 `prefers-reduced-motion` 规则。
- **海报墙。** `POSTERS_DATA` 有 24 张电影与唱片封面，可在错落拼贴和胶片循环之间切换、随机打乱，并打开放映室弹窗前后翻看。
- **机器可读入口。** 首页包含 canonical、Open Graph、Twitter Card 和 JSON-LD。同级还有 `robots.txt`、`sitemap.xml`（只收录首页）、`llms.txt` 和 `ai.txt`。`scripts/check-seo.mjs` 会检查这些文件是否存在且可解析。
- **独立页面。** `weekly-review.html` 是一份 2026 年 9 月上旬的个人工作复盘，自带 `weekly-review.css` / `weekly-review.js`，不从主门户导航链入。`variants/oil-motion/` 是单独打开的动效样片。

## 技术栈

- 静态 HTML、CSS 和原生 JavaScript，没有 `package.json`、打包器或框架。
- 字体来自 Google Fonts：Plus Jakarta Sans、JetBrains Mono。
- 动画库为页面底部引入的 GSAP 3.12.5（cdnjs）。
- 两个 Node 脚本只使用内置模块：`scripts/check-seo.mjs`、`scripts/generate-tprompts-timeline.mjs`。跑门户页面本身不需要 Node。

子站详情里出现的 React、Next.js、FastAPI、Flask 等，是 `SERVICES` 为那些子站填写的说明，不是本仓库的依赖。

## 项目结构

```text
index.html                 门户页面
style.css                  门户样式
app.js                     站点数据、矩阵、路由与动效
weekly-review.html         独立周报页
weekly-review.css
weekly-review.js
ai.txt                     AI 引用说明
llms.txt                   给模型阅读的站点摘要
robots.txt
sitemap.xml
assets/                    插画、海报、图标、二维码、OG 图等
scripts/check-seo.mjs      检查 SEO 相关文件
scripts/generate-tprompts-timeline.mjs
build/                     动效试点用的时间线与 motion budget JSON
source/                    动效 brief 与 concept YAML
pilot/                     核心卡片动效试点
final/                     正式媒体资源的占位说明
qa/                        试点验收记录
variants/oil-motion/       独立动效样片
TP_SPACE_STYLE_GUIDE.md    视觉规范
todo.md                    重构待办
```

`assets/product-motion/` 里还有一套与 `source/`、`pilot/`、`build/`、`final/` 并列的动效材料副本。

## 本地运行

不需要安装依赖。在仓库根目录起一个静态文件服务即可。仓库里已有的预览方式是：

```bash
python3 -m http.server 4174
```

浏览器打开：

- 门户：[http://127.0.0.1:4174/](http://127.0.0.1:4174/)
- 周报：[http://127.0.0.1:4174/weekly-review.html](http://127.0.0.1:4174/weekly-review.html)
- 动效样片：[http://127.0.0.1:4174/variants/oil-motion/](http://127.0.0.1:4174/variants/oil-motion/)

深浅色和视图模式依赖 `localStorage`。GSAP 与网页字体需要能访问对应的 CDN。

可选检查与时间线生成（需要 Node，无第三方包）：

```bash
node scripts/check-seo.mjs
node scripts/generate-tprompts-timeline.mjs
```

第二条会覆盖 `build/timeline.json`。首页脚本不会请求这个文件；`qa/tprompts-pilot.md` 把它当作动效试点的检查产物。

## 构建与部署

没有编译或打包步骤。浏览器直接加载 `index.html`、`style.css` 和 `app.js`。

仓库里没有 CI、Dockerfile、Nginx 配置、托管配置或部署脚本。把静态文件放到能够提供 `index.html` 的 Web 服务器即可。发布前可以运行 `node scripts/check-seo.mjs`。

页面元数据中的规范地址是 [https://tpgofighting.top/](https://tpgofighting.top/)，同时写在 canonical、Open Graph、`robots.txt`、`sitemap.xml`、`llms.txt` 和 `ai.txt` 里。页脚文案写着 “Cloudflare Tunnels · Nginx”。`todo.md` 有一条未勾选的同步项，目标路径是 `/var/www/portal/`。这些都不是可执行的部署配置。`SERVICES` 里的 `port` 和 `path` 只出现在站点详情说明中。

## 线上地址

- 门户首页：[https://tpgofighting.top/](https://tpgofighting.top/)
- 站点摘要：[https://tpgofighting.top/llms.txt](https://tpgofighting.top/llms.txt)
- 站点地图：[https://tpgofighting.top/sitemap.xml](https://tpgofighting.top/sitemap.xml)
- GitHub（页面与 `ai.txt` 中的作者主页）：[https://github.com/TPGoFighting](https://github.com/TPGoFighting)

`llms.txt` 与首页 JSON-LD 中列出的部分子站：

| 名称 | 地址 |
| --- | --- |
| TPrompts | https://prompts.tpgofighting.top/ |
| Teach Player | https://teachplayer.tpgofighting.top |
| TPaper | https://tpaper.tpgofighting.top |
| TPVibe | https://tphub.tpgofighting.top/tpvibe/ |
| TP-Hub | https://tphub.tpgofighting.top |
| TPbili | https://bili.tpgofighting.top |
| CyberPulse | https://wx.tpgofighting.top |
| TP Life | https://life.tpgofighting.top |
| 个人主页 | https://tpself.tpgofighting.top |
| 经历叙事 | https://tangpan.tpgofighting.top |
| 学术主页 | https://ai.tpgofighting.top |
| 南邮入学指南 | https://njupt.tpgofighting.top |

完整 29 条以 `app.js` 的 `SERVICES` 为准。
