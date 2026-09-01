(() => {
  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const smoothstep = (value) => {
    const t = clamp(value);
    return t * t * (3 - 2 * t);
  };
  const easeOut = (value) => 1 - Math.pow(1 - clamp(value), 3);
  const finite = (value, fallback = 0) => (Number.isFinite(value) ? value : fallback);
  const cache = new WeakMap();

  const overlayMarkup = `<svg class="cyberpulse-motion-overlay" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true" focusable="false" pointer-events="none">
    <g data-motion="chart-group" opacity="0">
      <path data-motion="chart-frame" d="M 812 184 H 950 M 812 184 V 112" fill="none" stroke="#1f252b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"></path>
      <path data-motion="chart-grid" d="M 812 160 H 950 M 812 136 H 950" fill="none" stroke="#1f252b" stroke-width="1.5" stroke-dasharray="3 8" opacity="0.24" vector-effect="non-scaling-stroke"></path>
      <rect data-motion="chart-bar-a" x="828" y="155" width="13" height="29" rx="4" fill="#f6c453" stroke="#1f252b" stroke-width="2.5" vector-effect="non-scaling-stroke"></rect>
      <rect data-motion="chart-bar-b" x="852" y="143" width="13" height="41" rx="4" fill="#8ed0ef" stroke="#1f252b" stroke-width="2.5" vector-effect="non-scaling-stroke"></rect>
      <rect data-motion="chart-bar-c" x="876" y="149" width="13" height="35" rx="4" fill="#ef9ab1" stroke="#1f252b" stroke-width="2.5" vector-effect="non-scaling-stroke"></rect>
      <rect data-motion="chart-bar-d" x="900" y="128" width="13" height="56" rx="4" fill="#f6c453" stroke="#1f252b" stroke-width="2.5" vector-effect="non-scaling-stroke"></rect>
      <path data-motion="chart-line" d="M 819 172 L 841 160 L 865 164 L 889 145 L 906 151 L 941 121" pathLength="1" fill="none" stroke="#278dc1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1" stroke-dashoffset="1" vector-effect="non-scaling-stroke"></path>
      <circle data-motion="chart-peak" cx="941" cy="121" r="6" fill="#ef9ab1" stroke="#1f252b" stroke-width="2.5" vector-effect="non-scaling-stroke"></circle>
    </g>
    <g data-motion="routes" fill="none" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke">
      <path data-motion="route-left" d="M 111 421 L 180 382 L 212 359" pathLength="1" stroke="#278dc1" stroke-width="4" stroke-dasharray="1" stroke-dashoffset="1"></path>
      <path data-motion="route-top" d="M 410 294 L 460 301 L 493 255 L 528 209" pathLength="1" stroke="#f6c453" stroke-width="4" stroke-dasharray="1" stroke-dashoffset="1"></path>
      <path data-motion="route-dialogue" d="M 632 679 L 677 647 L 724 616 L 782 641" pathLength="1" stroke="#ef9ab1" stroke-width="3.5" stroke-dasharray="1" stroke-dashoffset="1"></path>
    </g>
    <g data-motion="travelers">
      <circle data-motion="traveler-left" cx="111" cy="421" r="8" fill="#8ed0ef" stroke="#1f252b" stroke-width="3" opacity="0" vector-effect="non-scaling-stroke"></circle>
      <circle data-motion="traveler-top" cx="410" cy="294" r="8" fill="#f6c453" stroke="#1f252b" stroke-width="3" opacity="0" vector-effect="non-scaling-stroke"></circle>
      <circle data-motion="traveler-dialogue" cx="632" cy="679" r="7" fill="#ef9ab1" stroke="#1f252b" stroke-width="3" opacity="0" vector-effect="non-scaling-stroke"></circle>
    </g>
    <g data-motion="nodes">
      <circle data-motion="node-connect" cx="212" cy="359" r="11" fill="none" stroke="#f6c453" stroke-width="3" opacity="0" vector-effect="non-scaling-stroke"></circle>
      <circle data-motion="node-explore" cx="528" cy="209" r="11" fill="none" stroke="#8ed0ef" stroke-width="3" opacity="0" vector-effect="non-scaling-stroke"></circle>
      <circle data-motion="node-dialogue" cx="782" cy="641" r="11" fill="none" stroke="#ef9ab1" stroke-width="3" opacity="0" vector-effect="non-scaling-stroke"></circle>
    </g>
    <g data-motion="pulse" opacity="0">
      <circle data-motion="pulse-ring" cx="941" cy="121" r="13" fill="none" stroke="#ef9ab1" stroke-width="4" vector-effect="non-scaling-stroke"></circle>
      <path data-motion="pulse-wave" d="M 930 121 H 922 M 952 121 H 960 M 941 110 V 102 M 941 132 V 140" fill="none" stroke="#f6c453" stroke-width="3" stroke-linecap="round" vector-effect="non-scaling-stroke"></path>
    </g>
  </svg>`;

  const getParts = (overlay) => {
    if (!overlay) return null;
    let parts = cache.get(overlay);
    if (parts) return parts;
    const find = (name) => overlay.querySelector(`[data-motion="${name}"]`);
    parts = {
      chartGroup: find("chart-group"),
      chartLine: find("chart-line"),
      chartPeak: find("chart-peak"),
      bars: ["chart-bar-a", "chart-bar-b", "chart-bar-c", "chart-bar-d"].map(find),
      routes: ["route-left", "route-top", "route-dialogue"].map(find),
      travelers: ["traveler-left", "traveler-top", "traveler-dialogue"].map(find),
      nodes: ["node-connect", "node-explore", "node-dialogue"].map(find),
      pulse: find("pulse"),
      pulseRing: find("pulse-ring"),
      pulseWave: find("pulse-wave")
    };
    cache.set(overlay, parts);
    return parts;
  };

  const set = (element, attribute, value) => {
    if (element) element.setAttribute(attribute, String(value));
  };

  const setOpacity = (element, value) => set(element, "opacity", clamp(value).toFixed(3));

  const moveTraveler = (path, traveler, progress, opacity) => {
    if (!path || !traveler) return;
    const pathLength = path.getTotalLength();
    const point = path.getPointAtLength(pathLength * clamp(progress));
    set(traveler, "cx", point.x.toFixed(2));
    set(traveler, "cy", point.y.toFixed(2));
    setOpacity(traveler, opacity);
  };

  const render = (stage, overlay, progress, pointerX, pointerY, reducedMotion) => {
    void stage;
    if (!overlay) return;
    const parts = getParts(overlay);
    const p = reducedMotion ? 0 : clamp(finite(progress));
    const px = reducedMotion ? 0 : clamp(finite(pointerX), -0.5, 0.5);
    const py = reducedMotion ? 0 : clamp(finite(pointerY), -0.5, 0.5);

    set(overlay, "data-motion-state", p >= 0.76 ? "pulse-ready" : p > 0 ? "routing" : "idle");
    set(parts.chartGroup, "opacity", smoothstep((p - 0.24) / 0.35).toFixed(3));
    set(parts.chartGroup, "transform", `translate(${(px * 2).toFixed(2)} ${(py * 1.5).toFixed(2)})`);

    const leftProgress = smoothstep(p / 0.34);
    const topProgress = smoothstep((p - 0.18) / 0.38);
    const dialogueProgress = smoothstep((p - 0.38) / 0.3);
    const routeProgresses = [leftProgress, topProgress, dialogueProgress];
    parts.routes.forEach((route, index) => {
      set(route, "stroke-dashoffset", (1 - routeProgresses[index]).toFixed(4));
      setOpacity(route, Math.min(1, routeProgresses[index] * 1.4));
    });
    moveTraveler(parts.routes[0], parts.travelers[0], leftProgress, leftProgress > 0 && leftProgress < 1 ? 1 : 0);
    moveTraveler(parts.routes[1], parts.travelers[1], topProgress, topProgress > 0 && topProgress < 1 ? 1 : 0);
    moveTraveler(parts.routes[2], parts.travelers[2], dialogueProgress, dialogueProgress > 0 && dialogueProgress < 1 ? 1 : 0);

    const chartProgress = smoothstep((p - 0.3) / 0.42);
    set(parts.chartLine, "stroke-dashoffset", (1 - chartProgress).toFixed(4));
    parts.bars.forEach((bar, index) => setOpacity(bar, clamp((chartProgress - index * 0.08) / 0.34)));
    setOpacity(parts.chartPeak, chartProgress);

    const stableProgress = smoothstep((p - 0.76) / 0.24);
    parts.nodes.forEach((node, index) => {
      const nodeProgress = routeProgresses[index];
      setOpacity(node, Math.max(0, nodeProgress * 0.8) * (0.35 + stableProgress * 0.65));
      set(node, "r", (9 + stableProgress * 4).toFixed(2));
    });

    const pulsePhase = clamp((p - 0.58) / 0.25);
    const pulseEnvelope = pulsePhase <= 0.5 ? pulsePhase * 2 : (1 - pulsePhase) * 2;
    setOpacity(parts.pulse, pulseEnvelope);
    set(parts.pulseRing, "r", (13 + easeOut(pulsePhase) * 24).toFixed(2));
    set(parts.pulseRing, "stroke-width", (3 + pulseEnvelope * 2).toFixed(2));
    set(parts.pulseWave, "transform", `scale(${(0.8 + pulseEnvelope * 0.35).toFixed(3)})`);
    set(parts.pulseWave, "transform-origin", "941px 121px");
  };

  window.TPCardMotionConfigs = window.TPCardMotionConfigs || {};
  window.TPCardMotionConfigs.cyberpulse = {
    states: [{ id: "idle" }, { id: "routing" }, { id: "pulse-ready" }],
    durationFrames: [24, 24],
    overlayViewBox: "0 0 1000 1000",
    overlayMarkup,
    render
  };
})();

// 关键锚点：左侧 CONNECT、顶部 EXPLORE、右下 DIALOGUE 与右上空白遥测区。
// 验收重点：黑线稿无遮挡；数据点单向经过连线；折线只脉冲一次并稳定高亮；反向沿原路径撤回。
