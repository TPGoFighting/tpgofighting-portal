# TPrompts Pilot

状态：已挂载到首页首张核心作品卡片，等待浏览器视觉确认后再进入批量生产。

## 已实现

- `idle → linking → prompt-ready` 三个稳定状态。
- 悬停、聚焦和触屏按钮触发分段播放。
- 从当前进度反向收回，使用同一个 SVG 叠加层。
- 原始 `assets/illustrations/tprompts.jpg` 作为静态降级图。
- `prefers-reduced-motion` 下保持静态状态。

## 运行

```bash
node scripts/generate-tprompts-timeline.mjs
python3 -m http.server 4174
```

打开 `http://127.0.0.1:4174/`，滚动到“核心作品与 AI 工具”首张卡片。

## 状态边界

当前 Pilot 使用 CSS/SVG 几何层验证交互节奏，没有生成视频、Alpha 图集或正式审批文件。正式媒体生产前需要在目标浏览器完成视觉硬门。
