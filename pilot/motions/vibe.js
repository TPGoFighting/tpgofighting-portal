(function registerTPVibeMotion() {
  window.TPCardMotionConfigs = window.TPCardMotionConfigs || {};

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const easeOut = (value) => 1 - Math.pow(1 - clamp(value, 0, 1), 3);
  const setVar = (target, name, value) => {
    if (target?.style) target.style.setProperty(name, String(value));
  };

  window.TPCardMotionConfigs.vibe = {
    states: [
      { id: "idle" },
      { id: "ideation" },
      { id: "build-ready" }
    ],
    durationFrames: [24, 24],
    overlayViewBox: "0 0 1000 1000",
    overlayMarkup: '<svg class="tpvibe-motion-overlay" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">'
      + '<style>'
      + '.tpvibe-motion-overlay{overflow:visible;pointer-events:none;--vibe-progress:0;--vibe-idea-opacity:0;--vibe-build-opacity:0;--vibe-ready-opacity:0;--vibe-confirm-opacity:0;--vibe-trace-opacity:0;--vibe-trace-offset:150;--vibe-idea-scale:.88;--vibe-build-scale:.88;--vibe-ready-scale:.88;--vibe-tick-offset:1;--vibe-pointer-x:0px;--vibe-pointer-y:0px}'
      + '.tpvibe-motion-overlay path,.tpvibe-motion-overlay rect,.tpvibe-motion-overlay circle,.tpvibe-motion-overlay line{vector-effect:non-scaling-stroke}'
      + '.vibe-trace{fill:none;stroke:#3aa8df;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:10 18;stroke-dashoffset:var(--vibe-trace-offset);opacity:var(--vibe-trace-opacity)}'
      + '.vibe-node-ring{fill:none;stroke:#191919;stroke-width:4;opacity:0;transform-box:fill-box;transform-origin:center}'
      + '.vibe-node-ring.idea{opacity:var(--vibe-idea-opacity);transform:scale(var(--vibe-idea-scale))}'
      + '.vibe-node-ring.build{opacity:var(--vibe-build-opacity);transform:scale(var(--vibe-build-scale))}'
      + '.vibe-node-ring.ready{opacity:var(--vibe-ready-opacity);transform:scale(var(--vibe-ready-scale))}'
      + '.vibe-node-core{fill:#f4c654;stroke:#191919;stroke-width:4;opacity:0}'
      + '.vibe-node-core.idea{opacity:var(--vibe-idea-opacity)}'
      + '.vibe-node-core.build{fill:#9ed6f3;opacity:var(--vibe-build-opacity)}'
      + '.vibe-node-core.ready{fill:#f49aa3;opacity:var(--vibe-ready-opacity)}'
      + '.vibe-confirm-halo{fill:none;stroke:#f4c654;stroke-width:6;stroke-dasharray:7 12;stroke-linecap:round;opacity:var(--vibe-confirm-opacity)}'
      + '.vibe-confirm-tick{fill:none;stroke:#191919;stroke-width:7;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1;stroke-dashoffset:var(--vibe-tick-offset);opacity:var(--vibe-confirm-opacity)}'
      + '.vibe-gesture-glint{transform:translate(var(--vibe-pointer-x),var(--vibe-pointer-y));opacity:var(--vibe-idea-opacity)}'
      + '.vibe-rocket-trail{fill:none;stroke:#f4c654;stroke-width:5;stroke-linecap:round;stroke-dasharray:4 15;opacity:var(--vibe-build-opacity)}'
      + '.vibe-rocket-marker{opacity:var(--vibe-build-opacity)}'
      + '</style>'
      + '<g class="vibe-traces">'
      + '<path class="vibe-trace" d="M 536 286 C 574 260, 615 226, 661 205"></path>'
      + '<path class="vibe-trace" d="M 794 354 C 821 378, 837 405, 846 433"></path>'
      + '<path class="vibe-trace" d="M 786 620 C 761 649, 742 678, 726 704"></path>'
      + '</g>'
      + '<g class="vibe-gesture-glint">'
      + '<path d="M 519 286 h 28 M 533 272 v 28" fill="none" stroke="#191919" stroke-width="4" stroke-linecap="round"></path>'
      + '<circle cx="533" cy="286" r="7" fill="#f4c654" stroke="#191919" stroke-width="3"></circle>'
      + '</g>'
      + '<g class="vibe-idea-node">'
      + '<circle class="vibe-node-ring idea" cx="535" cy="270" r="28"></circle>'
      + '<circle class="vibe-node-core idea" cx="535" cy="270" r="8"></circle>'
      + '</g>'
      + '<g class="vibe-build-node">'
      + '<circle class="vibe-node-ring build" cx="722" cy="145" r="29"></circle>'
      + '<circle class="vibe-node-core build" cx="722" cy="145" r="9"></circle>'
      + '</g>'
      + '<g class="vibe-ready-node">'
      + '<circle class="vibe-node-ring ready" cx="692" cy="552" r="28"></circle>'
      + '<circle class="vibe-node-core ready" cx="692" cy="552" r="8"></circle>'
      + '</g>'
      + '<path class="vibe-rocket-trail" d="M 841 360 C 852 334, 864 310, 873 292"></path>'
      + '<g class="vibe-rocket-marker" transform="translate(841 360) rotate(-66)">'
      + '<path d="M -8 0 L 8 -7 L 16 0 L 8 7 Z" fill="#f4c654" stroke="#191919" stroke-width="3" stroke-linejoin="round"></path>'
      + '<path d="M -10 -4 L -17 -9 M -10 4 L -17 9" fill="none" stroke="#191919" stroke-width="3" stroke-linecap="round"></path>'
      + '</g>'
      + '<rect class="vibe-confirm-halo" x="596" y="571" width="188" height="258" rx="18"></rect>'
      + '<path class="vibe-confirm-tick" d="M 666 552 l 14 14 l 29 -35"></path>'
      + '</svg>',
    render(stage, overlay, progress, pointerX, pointerY, reducedMotion) {
      if (!overlay) return;

      const p = reducedMotion ? 0 : clamp(Number(progress) || 0, 0, 1);
      const pointerXValue = reducedMotion ? 0 : clamp(Number(pointerX) || 0, -0.5, 0.5) * 2;
      const pointerYValue = reducedMotion ? 0 : clamp(Number(pointerY) || 0, -0.5, 0.5) * 2;
      const idea = easeOut(p / 0.34);
      const build = easeOut((p - 0.25) / 0.43);
      const ready = easeOut((p - 0.55) / 0.35);
      const confirm = easeOut((p - 0.78) / 0.22);
      const trace = easeOut(p / 0.78);
      const rocket = easeOut((p - 0.29) / 0.5);
      const rocketX = 841 + (873 - 841) * rocket;
      const rocketY = 360 + (292 - 360) * rocket;
      const rocketAngle = -66 + rocket * 8;
      const rocketMarker = overlay.querySelector(".vibe-rocket-marker");

      setVar(stage, "--vibe-progress", p.toFixed(4));
      setVar(stage, "--vibe-pointer-x", `${pointerXValue.toFixed(2)}px`);
      setVar(stage, "--vibe-pointer-y", `${pointerYValue.toFixed(2)}px`);
      setVar(overlay, "--vibe-progress", p.toFixed(4));
      setVar(overlay, "--vibe-idea-opacity", idea.toFixed(3));
      setVar(overlay, "--vibe-build-opacity", build.toFixed(3));
      setVar(overlay, "--vibe-ready-opacity", ready.toFixed(3));
      setVar(overlay, "--vibe-confirm-opacity", confirm.toFixed(3));
      setVar(overlay, "--vibe-trace-opacity", trace.toFixed(3));
      setVar(overlay, "--vibe-trace-offset", ((1 - p) * 150).toFixed(2));
      setVar(overlay, "--vibe-idea-scale", (0.88 + idea * 0.12).toFixed(3));
      setVar(overlay, "--vibe-build-scale", (0.88 + build * 0.12).toFixed(3));
      setVar(overlay, "--vibe-ready-scale", (0.88 + ready * 0.12).toFixed(3));
      setVar(overlay, "--vibe-tick-offset", (1 - confirm).toFixed(3));
      setVar(overlay, "--vibe-pointer-x", `${pointerXValue.toFixed(2)}px`);
      setVar(overlay, "--vibe-pointer-y", `${pointerYValue.toFixed(2)}px`);

      if (rocketMarker) {
        rocketMarker.setAttribute("transform", `translate(${rocketX.toFixed(2)} ${rocketY.toFixed(2)}) rotate(${rocketAngle.toFixed(2)})`);
      }
    }
  };
})();

// 关键锚点：灯泡上方(535,270)、项目卡上方(722,145)、Creative Flow 卡外围(596,571,188,258)。
// 验收重点：保持人物与卡片文字清晰，节点按序点亮，火箭只沿右上虚线路径轻推，反向可回到 idle。
