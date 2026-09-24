# TP Space / tpgofighting.top 网页风格规范

> 版本：2026-09
> 适用范围：tpgofighting.top 门户、个人作品集、独立工具介绍页、站点聚合页
> 参考实现：`style.css`、`index.html`、`app.js`

## 1. 一句话设计定位

**工程师的个人互联网空间：用方格纸组织信息，用粗黑字建立识别度，用插画角色和轻交互保留人格。**

关键词：

- Engineering Graph Paper
- Modern Illustration
- Editorial Grid
- Warm Spot Color
- Hand-drawn Line Art
- Direct Statement
- Playful but useful

设计拨盘建议：

```text
DESIGN_VARIANCE: 7/10
MOTION_INTENSITY: 5/10
VISUAL_DENSITY: 5/10
```

## 2. 视觉原则

### 2.1 画面气质

- 背景保持安静，内容承担主要视觉重量。
- 通过方格纸、粗边框、轻微错位和局部插画建立个性。
- 页面要像一个真实的人在整理自己的工作台，避免模板化 SaaS 营销页。
- 信息量可以丰富，层级必须清楚。
- 每个装饰都要承担功能：组织内容、表达状态、引导注意力或强化品牌记忆。

### 2.2 识别性来源

优先使用以下组合：

1. 暖白方格纸背景。
2. 深色粗体标题。
3. 黄色高亮条或黄色实心按钮。
4. 细边框加轻阴影。
5. 一个有动作或表情的角色、插画或局部动态场景。
6. 等宽字体展示域名、技术栈、编号和系统信息。

## 3. 设计令牌

### 3.1 基础浅色主题

```css
:root {
  --bg-canvas: #fbfaf6;
  --bg-card: #ffffff;
  --bg-subtle: #f3f0e6;
  --bg-tag: #f0ece1;

  --grid-line: rgba(20, 24, 33, 0.045);
  --border-main: #181b22;
  --border-subtle: rgba(24, 27, 34, 0.12);

  --text-title: #111318;
  --text-body: #374151;
  --text-muted: #6b7280;
  --text-faint: #9ca3af;

  --accent-yellow: #f59e0b;
  --accent-yellow-light: #fef3c7;
  --accent-blue: #2563eb;
  --accent-blue-light: #eff6ff;
  --accent-green: #10b981;

  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.04);
  --shadow-card: 0 6px 18px -4px rgba(24, 27, 34, 0.06),
                 0 2px 6px -1px rgba(24, 27, 34, 0.04);
  --shadow-hover: 0 14px 30px -6px rgba(24, 27, 34, 0.12),
                  0 4px 10px -2px rgba(24, 27, 34, 0.06);
  --shadow-pop: 4px 4px 0 #181b22;

  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-pill: 9999px;
}
```

### 3.2 深色主题

```css
[data-theme="dark"] {
  --bg-canvas: #0b0f19;
  --bg-card: #121826;
  --bg-subtle: #1a2234;
  --bg-tag: #1e293b;

  --grid-line: rgba(255, 255, 255, 0.035);
  --border-main: rgba(255, 255, 255, 0.2);
  --border-subtle: rgba(255, 255, 255, 0.08);

  --text-title: #f8fafc;
  --text-body: #cbd5e1;
  --text-muted: #94a3b8;
  --text-faint: #64748b;

  --accent-yellow: #fbbf24;
  --accent-blue: #60a5fa;
  --accent-green: #34d399;
}
```

颜色使用规则：

- 黄色负责品牌高亮、激活条、重要操作和轻量装饰。
- 蓝色负责域名、链接、流程路径和技术信号。
- 绿色负责成功、在线、完成等语义状态。
- 场景插画可以使用额外信号色，但每个场景最多保留 1 到 2 个重点色。
- 页面底色、卡片色和文字色始终通过变量引用。

## 4. 字体规范

```css
body {
  font-family: 'Plus Jakarta Sans', 'Noto Sans SC',
    -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.6;
}

.mono,
.domain,
.meta,
.system-info {
  font-family: 'JetBrains Mono', monospace;
}
```

层级建议：

| 用途 | 建议 |
|---|---|
| Hero 标题 | `font-weight: 900`，负字距，3 行以内 |
| 页面标题 | `1.75rem` 左右，`font-weight: 900` |
| 卡片标题 | `1.05rem` 到 `1.85rem`，`font-weight: 800-900` |
| 正文 | `0.85rem` 到 `0.98rem`，行高 `1.5-1.65` |
| 域名 / 技术栈 | JetBrains Mono，`0.72rem` 到 `0.78rem` |
| 标签 | `0.7rem` 到 `0.82rem`，短词优先 |

中文页面保留较强的黑体重量，英文身份标签和域名使用等宽字体形成节奏对比。

## 5. 页面骨架

推荐顺序：

```text
页面背景层
  ├─ 方格纸网格
  ├─ 环境光 / 局部色块
  └─ 低透明度插画或 Canvas

内容容器
  ├─ 右上角工具按钮
  ├─ Statement Hero
  ├─ 巨型 Tab 导航
  ├─ 核心作品精选
  ├─ 全部站点 / 服务矩阵
  ├─ 图像、海报或实验性内容
  ├─ 关于作者 / 联系方式
  └─ Footer
```

### 5.1 容器宽度

桌面端使用偏窄的编辑版心，给背景和插画留下呼吸空间：

```css
.page-container {
  width: 60vw;
  max-width: 980px;
  min-width: 320px;
  margin: 0 auto;
}

@media (max-width: 1200px) {
  .page-container { width: 72vw; }
}

@media (max-width: 1100px) {
  .page-container { width: 88vw; }
}

@media (max-width: 860px) {
  .page-container {
    width: 90vw;
    padding: 20px 0 60px;
  }
}
```

### 5.2 区块节奏

- 桌面区块间距：约 `72px`。
- 移动区块间距：约 `48px`。
- 标题行下方：约 `18px-24px`。
- 卡片之间：`14px-28px`。
- 页面底部保留安全区，移动端加 `env(safe-area-inset-bottom)`。

## 6. Hero 规范

Hero 采用 **Statement Hero**，先给一句有记忆点的陈述，再给身份和入口。

推荐结构：

```html
<section class="hero-statement-section">
  <div class="hero-main-composition">
    <h1>TP<br>makes<br>things.</h1>
    <div class="hero-character-scene"></div>
  </div>
  <div class="hero-identity-line">
    <strong>唐 潘</strong>
    <span class="mono">ENGINEER / AI BUILDER / CREATOR</span>
  </div>
</section>
```

规则：

- 标题控制在 2 到 3 行。
- 标题使用超粗字重和紧字距，形成海报感。
- 角色、插画或真实作品图承担视觉重心。
- 角色可以压住标题、依靠字母、跨越边界，但必须有明确的构图关系。
- Hero 的文案少写解释，多写身份、动作和态度。
- 移动端标题和角色上下排列，禁止为了保留桌面构图而横向挤压。

## 7. 导航与信息架构

### 7.1 巨型 Tab

- 不使用传统复杂顶栏作为首要导航。
- 用大字号横向 Tab 表达页面主分类。
- 激活项使用深色文字加黄色厚底线。
- 小屏允许横向滚动，隐藏滚动条，保留完整点击区域。

```css
.giant-tabs-bar {
  display: flex;
  gap: clamp(20px, 4vw, 48px);
  overflow-x: auto;
  border-bottom: 1.5px solid var(--border-subtle);
}

.giant-tab-highlight {
  height: 6px;
  background: var(--accent-yellow);
  border-radius: 3px;
}
```

### 7.2 多路由

当内容超过首页承载范围时，拆成清晰视图：

- `products`：作品和站点。
- `journey`：经历与时间线。
- `about`：关于作者、方法和联系方式。
- `future`：路线图、正在探索的方向。

首页负责建立身份和入口，细节放入子页面。每个视图保持同一套令牌、字体和交互反馈。

## 8. 卡片与矩阵

### 8.1 核心作品卡

用于少量重点项目，推荐左右分栏：

```text
┌──────────────────────────────┐
│  作品图 / 动态场景 │ 标题     │
│                    │ 简介     │
│                    │ 标签     │
│                    │ 操作     │
└──────────────────────────────┘
```

- 桌面端两列 `1fr 1fr`。
- 图片区域比例约 `16 / 10`。
- 卡片圆角约 `24px`。
- 重点卡可以交替左右顺序，避免整页重复。
-  hover 只上移 `2px-4px`，同时增加阴影或边框对比。
- 项目视觉内部可以拥有自己的 SVG / CSS 场景动画，卡片本身只做轻反馈。

### 8.2 站点服务矩阵

用于大量子站点、工具和作品：

```css
.services-matrix-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 18px;
}
```

单卡结构：

```text
图标 + 分类 / 状态
站点名称
域名
两行以内简介
标签
分隔线
复制 / 打开
```

规则：

- 描述最多两行，避免卡片高度失控。
- 域名用蓝色等宽字体。
- 状态色只表达真实状态，在线用绿色，错误用红色。
- 桌面端支持 Grid / List 两种视图。
- 移动端统一单列，分类筛选改成横向滚动。

### 8.3 标签

- 标签使用短词、低对比背景和小圆角。
- 常规标签使用 `4px-6px` 圆角。
- 筛选器可以使用全圆角胶囊。
- 标签服务于分类和检索，避免把每张卡片塞满标签。

## 9. 颜色与材质

### 背景

- 主背景：`#fbfaf6`。
- 卡片：`#ffffff`。
- 次级区域：`#f3f0e6`。
- 网格线：黑色透明度约 `0.045`。
- 暖色光晕可以放在固定背景层，透明度保持低。

### 边框与阴影

- 常规边框：`1px-1.5px`，使用 `--border-subtle`。
- 重点边框：`--border-main`。
- 轻浮层：柔和阴影。
- 重点互动：使用 `4px 4px 0 var(--border-main)` 的平面弹出阴影。
- 避免全页面统一大阴影，层级应由边框、间距和局部阴影共同完成。

### 方格纸背景

```css
.grid-paper-bg {
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-size: 28px 28px;
  background-image:
    linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
    linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px);
}
```

## 10. 动效规范

动效的任务是说明层级、反馈操作或讲述产品流程。页面每个区域不需要持续运动。

### 推荐动效

- Hero 角色轻微浮动、头部 pivot、眼睛跟随指针。
- 卡片 hover 上移 `2px-4px`。
- 按钮 hover 变色，移动端按下缩放到 `0.95`。
- 内容进入视口时使用一次性淡入和位移。
- 产品卡内用 CSS 变量 `--motion-progress` 驱动流程图、扫描线、窗口和结果出现。
- 弹窗使用轻微缩放、位移和旋转回弹。
- 海报、黑胶等内容允许有有限次数的旋转或错落变化。

### 动效参数

```css
:root {
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-pop: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### 约束

- 优先动画 `transform` 和 `opacity`。
- 复杂滚动计算使用 `requestAnimationFrame` 合帧，避免每帧触发大量布局。
- 内容入场使用 `IntersectionObserver`。
- `prefers-reduced-motion: reduce` 下关闭装饰动画，保留内容和操作反馈。
- 移动端减少粒子、旋转、眼睛追踪和多层背景 Canvas。

## 11. 移动端规范

断点：

```text
1200px 版心调整
1100px 平板 / 窄桌面版心调整
1024px 大型双列区域收为单列
860px 主要组件开始移动化
768px 移动端布局
600px 极窄屏细节处理
```

必须执行：

- 页面主容器改为约 `90vw`，并保留左右 `16px` 内容内边距。
- 核心作品卡从两列变成单列。
- Hero 标题和角色上下排列。
- 站点矩阵改单列。
- 分类 Tab 横向滚动，不换成多行挤压。
- 弹窗改为底部 Sheet，顶部显示拖拽条。
- 所有主要按钮最小高度约 `36px-40px`。
- 搜索输入字号至少 `16px`，避免 iOS 自动放大。
- 底部固定操作条必须避开安全区。
- 使用 `min-height: 100dvh`，不要依赖固定 `100vh`。

## 12. 可访问性与工程规范

- 页面提供跳过导航链接。
- 全局使用清晰的 `:focus-visible` 焦点环。
- 所有图片填写真实 `alt`，装饰图片使用 `aria-hidden="true"`。
- 图标按钮提供 `aria-label` 和 `title`。
- 颜色状态同时配合文字或图标，不能只依赖颜色。
- 弹窗打开时管理焦点，关闭后还原到触发按钮。
- 图片使用 WebP / PNG fallback，并对首屏关键图预加载。
- `<head>` 补齐 `title`、description、canonical、Open Graph、Twitter Card。
- 个人门户使用 JSON-LD 描述作者、站点和核心作品。
- 提供 `llms.txt`、sitemap 和清晰的站点实体关系。

## 13. 文案规范

- 语气直接、具体、有个人痕迹。
- 先说项目做什么，再说技术栈。
- 每张卡片只保留一个核心动作。
- 项目简介建议 1 到 2 句，少用抽象口号。
- 域名、端口、框架、状态等工程信息可以公开展示，使用等宽字体。
- 允许少量幽默和角色化表达，避免整页都写成广告文案。
- 不使用空泛的 AI Buzzword，例如“赋能、颠覆、无缝、下一代”。

推荐句式：

```text
把 PDF 试卷转换成可在线作答的题库。
输入视频链接，生成对齐双语字幕和结构化笔记。
记录项目、技术尝试和正在建设的小工具。
```

## 14. 复用时的最小实现顺序

新建一个同风格页面时，按这个顺序做：

1. 复制设计令牌和主题切换逻辑。
2. 建立方格纸背景与版心容器。
3. 先完成 Statement Hero，不急着堆功能卡片。
4. 选择一种主内容结构：核心作品卡、服务矩阵、时间线、海报墙。
5. 加入一种有实际意义的动态场景。
6. 补齐移动端单列、横向筛选和安全区。
7. 最后补 SEO、键盘焦点、减少动画和真实链接。

建议复用的基础文件：

```text
style.css                  # 完整设计系统与组件样式
app.js                     # 路由、筛选、主题、交互、动效
index.html                 # SEO、页面骨架、Hero 和入口结构
variants/oil-motion/       # 更偏 Oil 风格的轻量动效变体
```

不要把 5000 多行 CSS 整体复制到每个新项目。优先抽出：

```text
01 tokens
02 page container
03 background grid
04 statement hero
05 featured card
06 service matrix
07 modal / drawer
08 responsive rules
09 accessibility rules
```

## 15. 给 AI 编程 Agent 的复用提示词

```text
请为 tpgofighting.top 生态制作一个新网页。

视觉方向：TP Space 风格，Engineering Graph Paper + Modern Illustration + Editorial Grid。
基础色：#fbfaf6 暖白、#111318 墨黑、#f59e0b 品牌黄。
辅助色：#2563eb 链接和流程、#10b981 成功状态。
字体：Plus Jakarta Sans + Noto Sans SC，域名和技术信息使用 JetBrains Mono。
布局：窄版心、左对齐 Statement Hero、粗黑标题、方格纸背景、细边框、轻阴影、局部平面弹出阴影。
组件：巨型分类 Tab、重点作品双栏卡、站点服务矩阵、真实操作按钮、可关闭弹窗。
动效：只使用能解释层级或反馈的 transform / opacity 动画；支持 prefers-reduced-motion。
移动端：Hero 上下排列、卡片单列、分类横向滚动、底部 Sheet、避开 safe-area inset。
禁止：紫蓝 AI 渐变、默认三列等宽卡片、无意义粒子、整页玻璃拟态、假数据、伪装成产品截图的装饰块。
完成后检查：真实链接、键盘焦点、图片 alt、暗色主题、移动端 360px 宽度和无障碍减少动画。
```

## 16. 当前参考文件

```text
/Users/tylertang/Developer/ai-coding/tpgofighting-portal/style.css
/Users/tylertang/Developer/ai-coding/tpgofighting-portal/index.html
/Users/tylertang/Developer/ai-coding/tpgofighting-portal/app.js
/Users/tylertang/Developer/ai-coding/tpgofighting-portal/variants/oil-motion/style.css
```
