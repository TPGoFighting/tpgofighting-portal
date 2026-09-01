(function registerTeachPlayerMotion(global) {
  "use strict";

  global.TPCardMotionConfigs = global.TPCardMotionConfigs || {};

  global.TPCardMotionConfigs.teachplayer = {
    states: [
      { id: "idle" },
      { id: "playing" },
      { id: "understood" }
    ],
    durationFrames: [24, 24],
    overlayViewBox: "0 0 1000 1000",
    overlayMarkup: `<svg class="teachplayer-motion-overlay" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true" focusable="false">
  <style>
    .teachplayer-motion-overlay * { vector-effect: non-scaling-stroke; }
    .teach-motion-line { fill: none; stroke-linecap: round; stroke-linejoin: round; }
    .teach-motion-screen { fill: rgba(132, 194, 232, 0.08); stroke: #6fa9ca; stroke-width: 3; opacity: var(--teach-screen-opacity, 0); }
    .teach-motion-note { fill: rgba(245, 203, 105, 0.16); stroke: #e4b94e; stroke-width: 3; opacity: var(--teach-note-opacity, 0); }
    .teach-motion-subtitle { fill: none; stroke: #f0c75e; stroke-width: 4; opacity: var(--teach-subtitle-opacity, 0); }
    .teach-motion-playhead { stroke: #2f80a8; stroke-width: 4; opacity: var(--teach-playhead-opacity, 0); }
    .teach-motion-playhead-knob { fill: #f0c75e; stroke: #232323; stroke-width: 3; opacity: var(--teach-playhead-opacity, 0); }
    .teach-motion-wave { stroke: #e4b94e; stroke-width: 4; opacity: var(--teach-wave-opacity, 0); }
    .teach-motion-wave-soft { stroke: #8cc8e8; stroke-width: 3; opacity: var(--teach-wave-soft-opacity, 0); }
    .teach-motion-check { fill: none; stroke: #2f80a8; stroke-width: 5; opacity: var(--teach-check-opacity, 0); }
    .teach-motion-spark { fill: #f0c75e; stroke: #232323; stroke-width: 2; opacity: var(--teach-spark-opacity, 0); }
    .teach-motion-progress { stroke: #f0c75e; stroke-width: 7; opacity: var(--teach-progress-opacity, 0); }
    .teach-motion-content { transform: translate(var(--teach-drift-x, 0px), var(--teach-drift-y, 0px)); }
  </style>
  <g class="teach-motion-content">
    <!-- video frame: follows the existing screen border without hiding the speaker -->
    <rect class="teach-motion-screen" x="230" y="384" width="405" height="291" rx="3"></rect>
    <!-- two subtitle lines: the highlight tracks the existing black caption block -->
    <rect class="teach-motion-subtitle" x="300" y="574" width="291" height="31" rx="5"></rect>
    <rect class="teach-motion-subtitle" x="300" y="608" width="291" height="31" rx="5"></rect>
    <!-- key-points panel: three quiet reading bands, aligned to the source list -->
    <rect class="teach-motion-note teach-motion-note-1" x="659" y="446" width="150" height="28" rx="8"></rect>
    <rect class="teach-motion-note teach-motion-note-2" x="659" y="499" width="126" height="28" rx="8"></rect>
    <rect class="teach-motion-note teach-motion-note-3" x="659" y="576" width="143" height="28" rx="8"></rect>
    <!-- audio route above the player, clear of the original headphone line art -->
    <path class="teach-motion-line teach-motion-wave-soft" d="M 470 320 C 489 300, 505 300, 523 320 C 541 340, 558 340, 576 320"></path>
    <path class="teach-motion-line teach-motion-wave" d="M 492 324 C 505 312, 516 312, 528 324 C 540 336, 551 336, 563 324"></path>
    <path class="teach-motion-line teach-motion-wave" d="M 516 326 C 523 320, 530 320, 537 326"></path>
    <!-- original progress bar is at y≈707; fill and playhead travel only on that rail -->
    <path class="teach-motion-line teach-motion-progress" d="M 364 707 H 518" pathLength="1"></path>
    <line class="teach-motion-playhead" x1="518" y1="690" x2="518" y2="724"></line>
    <circle class="teach-motion-playhead-knob" cx="518" cy="707" r="8"></circle>
    <!-- a calm completion signal beside KEY POINTS, away from text and controls -->
    <path class="teach-motion-check" d="M 800 409 l 8 8 l 17 -19"></path>
    <path class="teach-motion-spark" d="M 846 434 l 4 11 l 11 4 l -11 4 l -4 11 l -4 -11 l -11 -4 l 11 -4 z"></path>
  </g>
</svg>`,
    render(stage, overlay, progress, pointerX, pointerY, reducedMotion) {
      if (!overlay) return;

      const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
      const rawProgress = Number.isFinite(progress) ? progress : 0;
      const p = reducedMotion ? 0 : clamp(rawProgress, 0, 1);
      const smooth = p * p * (3 - 2 * p);
      const playing = clamp(p / 0.46, 0, 1);
      const understood = clamp((p - 0.52) / 0.48, 0, 1);
      const playheadX = 518 + smooth * 184;
      const progressEnd = 518 + smooth * 184;
      const driftX = reducedMotion ? 0 : clamp(Number(pointerX) || 0, -0.5, 0.5) * 2.2;
      const driftY = reducedMotion ? 0 : clamp(Number(pointerY) || 0, -0.5, 0.5) * 1.6;
      const setStyle = (name, value) => overlay.style.setProperty(name, value.toFixed(3));
      const setAttr = (selector, name, value) => {
        const element = overlay.querySelector(selector);
        if (element) element.setAttribute(name, typeof value === "number" ? value.toFixed(3) : value);
      };

      setStyle("--teach-screen-opacity", playing * 0.58);
      setStyle("--teach-subtitle-opacity", clamp(playing * 0.72 + understood * 0.18, 0, 1));
      setStyle("--teach-note-opacity", clamp(playing * 0.25 + understood * 0.56, 0, 0.82));
      setStyle("--teach-playhead-opacity", clamp(playing * 0.85 + understood * 0.15, 0, 1));
      setStyle("--teach-wave-opacity", clamp(playing * (1 - understood * 0.22), 0, 1));
      setStyle("--teach-wave-soft-opacity", clamp(playing * 0.62, 0, 0.62));
      setStyle("--teach-progress-opacity", clamp(playing * 0.72 + understood * 0.2, 0, 0.92));
      setStyle("--teach-check-opacity", understood * 0.95);
      setStyle("--teach-spark-opacity", understood * 0.72);
      overlay.style.setProperty("--teach-drift-x", `${driftX.toFixed(2)}px`);
      overlay.style.setProperty("--teach-drift-y", `${driftY.toFixed(2)}px`);
      if (stage) stage.style.setProperty("--teach-motion-progress", p.toFixed(3));

      setAttr(".teach-motion-playhead", "x1", playheadX);
      setAttr(".teach-motion-playhead", "x2", playheadX);
      setAttr(".teach-motion-playhead-knob", "cx", playheadX);
      setAttr(".teach-motion-progress", "d", `M 364 707 H ${progressEnd.toFixed(3)}`);
      setAttr(".teach-motion-note-1", "opacity", clamp(understood * 0.82 + playing * 0.14, 0, 0.9));
      setAttr(".teach-motion-note-2", "opacity", clamp(understood * 0.72 + playing * 0.12, 0, 0.82));
      setAttr(".teach-motion-note-3", "opacity", clamp(understood * 0.9 + playing * 0.16, 0, 0.94));
    }
  };
})(window);

// 关键锚点：字幕框 x300–591/y574–639、要点行 x659–809、播放头 y707、耳机波形 y300–340。
// 验收重点：正向播放头只沿原轨道推进；字幕/要点高亮不遮字；反向连续收回；reduced-motion 保持 idle。
