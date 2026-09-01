(function registerTPaperCardMotion() {
  window.TPCardMotionConfigs = window.TPCardMotionConfigs || {};

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const mix = (from, to, amount) => from + (to - from) * amount;
  const smoothstep = (value) => {
    const t = clamp(value, 0, 1);
    return t * t * (3 - 2 * t);
  };

  const setAttr = (element, name, value) => {
    if (element) element.setAttribute(name, String(value));
  };

  const setVar = (element, name, value) => {
    if (element && element.style) element.style.setProperty(name, String(value));
  };

  window.TPCardMotionConfigs.tpaper = {
    states: [
      { id: "idle" },
      { id: "scanning" },
      { id: "quiz-ready" }
    ],
    durationFrames: [24, 24],
    overlayViewBox: "0 0 1000 1000",
    overlayMarkup: '<svg class="tpaper-motion-overlay" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true" focusable="false">'
      + '<g fill="none" stroke-linecap="round" stroke-linejoin="round">'
      + '<path data-motion="paper-rail" d="M 82 348 L 345 302 L 404 604 L 135 660" stroke="#2f80ed" stroke-width="3" stroke-dasharray="5 13" opacity="0.16" vector-effect="non-scaling-stroke"></path>'
      + '<line data-motion="scan-line" x1="82" y1="348" x2="345" y2="302" stroke="#f2b544" stroke-width="5" opacity="0" vector-effect="non-scaling-stroke"></line>'
      + '<line data-motion="scan-glint" x1="82" y1="348" x2="345" y2="302" stroke="#ffffff" stroke-width="2" opacity="0" vector-effect="non-scaling-stroke"></line>'
      + '<path data-motion="extract-line-a" d="M 138 395 L 286 370" stroke="#f2b544" stroke-width="5" opacity="0" vector-effect="non-scaling-stroke"></path>'
      + '<path data-motion="extract-line-b" d="M 150 428 L 302 401" stroke="#7bb9e8" stroke-width="5" opacity="0" vector-effect="non-scaling-stroke"></path>'
      + '<path data-motion="extract-line-c" d="M 168 566 L 311 540" stroke="#f2b544" stroke-width="5" opacity="0" vector-effect="non-scaling-stroke"></path>'
      + '<path data-motion="pen-trail" d="M 300 528 C 332 499 366 456 421 378" stroke="#2f80ed" stroke-width="7" stroke-dasharray="1 1" pathLength="1" opacity="0" vector-effect="non-scaling-stroke"></path>'
      + '<path data-motion="transfer-path" d="M 365 504 C 438 470 509 433 608 405" stroke="#2f80ed" stroke-width="4" stroke-dasharray="8 12" pathLength="1" opacity="0" vector-effect="non-scaling-stroke"></path>'
      + '<path data-motion="transfer-arrow" d="M 590 390 L 608 405 L 587 414" stroke="#2f80ed" stroke-width="4" opacity="0" vector-effect="non-scaling-stroke"></path>'
      + '<circle data-motion="extract-dot" cx="365" cy="504" r="8" fill="#f2b544" stroke="#ffffff" stroke-width="3" opacity="0" vector-effect="non-scaling-stroke"></circle>'
      + '<circle data-motion="pen-tip" cx="300" cy="528" r="9" fill="#f2b544" stroke="#202020" stroke-width="3" opacity="0" vector-effect="non-scaling-stroke"></circle>'
      + '<rect data-motion="phone-frame" x="625" y="319" width="293" height="359" rx="18" stroke="#2f80ed" stroke-width="4" stroke-dasharray="9 9" opacity="0" vector-effect="non-scaling-stroke"></rect>'
      + '<rect data-motion="submit-focus" x="680" y="635" width="126" height="43" rx="10" stroke="#f2b544" stroke-width="4" opacity="0" vector-effect="non-scaling-stroke"></rect>'
      + '<circle data-motion="answer-ring-a" cx="665" cy="450" r="21" stroke="#42a66a" stroke-width="4" opacity="0" vector-effect="non-scaling-stroke"></circle>'
      + '<circle data-motion="answer-ring-c" cx="673" cy="540" r="21" stroke="#42a66a" stroke-width="4" opacity="0" vector-effect="non-scaling-stroke"></circle>'
      + '<path data-motion="answer-check-a" d="M 655 450 L 662 457 L 676 442" stroke="#42a66a" stroke-width="5" stroke-dasharray="1 1" pathLength="1" opacity="0" vector-effect="non-scaling-stroke"></path>'
      + '<path data-motion="answer-check-c" d="M 663 540 L 670 547 L 684 532" stroke="#42a66a" stroke-width="5" stroke-dasharray="1 1" pathLength="1" opacity="0" vector-effect="non-scaling-stroke"></path>'
      + '<path data-motion="ready-spark" d="M 866 690 l 0 -18 M 857 681 l 18 0 M 860 675 l 12 12 M 872 675 l -12 12" stroke="#f2b544" stroke-width="4" opacity="0" vector-effect="non-scaling-stroke"></path>'
      + '</g></svg>',
    render(stage, overlay, progress, pointerX, pointerY, reducedMotion) {
      const p = reducedMotion ? 0 : clamp(Number(progress) || 0, 0, 1);
      const scan = smoothstep(p / 0.5);
      const ready = smoothstep((p - 0.5) / 0.5);
      const lineA = smoothstep((scan - 0.12) / 0.32);
      const lineB = smoothstep((scan - 0.28) / 0.32);
      const lineC = smoothstep((scan - 0.54) / 0.32);
      const handoff = smoothstep((scan - 0.68) / 0.32);
      const checkA = smoothstep((ready - 0.12) / 0.34);
      const checkC = smoothstep((ready - 0.32) / 0.34);
      const phoneOpacity = smoothstep((ready - 0.04) / 0.38);
      const state = p <= 0.001 ? "idle" : p < 0.5 ? "scanning" : "quiz-ready";

      // pointerX/pointerY are intentionally ignored: the source illustration is a fixed square composition.
      void pointerX;
      void pointerY;

      setVar(stage, "--tpaper-progress", p.toFixed(4));
      setVar(stage, "--tpaper-scan-progress", scan.toFixed(4));
      setVar(stage, "--tpaper-ready-progress", ready.toFixed(4));
      setAttr(overlay, "data-motion-state", state);

      const scanLeftX = mix(82, 135, scan);
      const scanRightX = mix(345, 404, scan);
      const scanLeftY = mix(348, 660, scan);
      const scanRightY = mix(302, 604, scan);
      setAttr(overlay.querySelector('[data-motion="scan-line"]'), "x1", scanLeftX);
      setAttr(overlay.querySelector('[data-motion="scan-line"]'), "y1", scanLeftY);
      setAttr(overlay.querySelector('[data-motion="scan-line"]'), "x2", scanRightX);
      setAttr(overlay.querySelector('[data-motion="scan-line"]'), "y2", scanRightY);
      setAttr(overlay.querySelector('[data-motion="scan-glint"]'), "x1", scanLeftX);
      setAttr(overlay.querySelector('[data-motion="scan-glint"]'), "y1", scanLeftY);
      setAttr(overlay.querySelector('[data-motion="scan-glint"]'), "x2", scanRightX);
      setAttr(overlay.querySelector('[data-motion="scan-glint"]'), "y2", scanRightY);
      setAttr(overlay.querySelector('[data-motion="scan-line"]'), "opacity", scan > 0 && scan < 1 ? 0.9 : 0);
      setAttr(overlay.querySelector('[data-motion="scan-glint"]'), "opacity", scan > 0 && scan < 1 ? 0.75 : 0);

      setAttr(overlay.querySelector('[data-motion="extract-line-a"]'), "opacity", lineA * 0.8);
      setAttr(overlay.querySelector('[data-motion="extract-line-b"]'), "opacity", lineB * 0.8);
      setAttr(overlay.querySelector('[data-motion="extract-line-c"]'), "opacity", lineC * 0.8);
      setAttr(overlay.querySelector('[data-motion="pen-trail"]'), "opacity", handoff * 0.72);
      setAttr(overlay.querySelector('[data-motion="pen-trail"]'), "stroke-dashoffset", 1 - handoff);
      setAttr(overlay.querySelector('[data-motion="transfer-path"]'), "opacity", handoff * 0.86);
      setAttr(overlay.querySelector('[data-motion="transfer-path"]'), "stroke-dashoffset", 1 - handoff);
      setAttr(overlay.querySelector('[data-motion="transfer-arrow"]'), "opacity", handoff * 0.9);

      const dotProgress = smoothstep((handoff - 0.08) / 0.92);
      setAttr(overlay.querySelector('[data-motion="extract-dot"]'), "cx", mix(365, 608, dotProgress));
      setAttr(overlay.querySelector('[data-motion="extract-dot"]'), "cy", mix(504, 405, dotProgress));
      setAttr(overlay.querySelector('[data-motion="extract-dot"]'), "opacity", handoff * 0.95);
      const penProgress = smoothstep((scan - 0.12) / 0.7);
      setAttr(overlay.querySelector('[data-motion="pen-tip"]'), "cx", mix(300, 421, penProgress));
      setAttr(overlay.querySelector('[data-motion="pen-tip"]'), "cy", mix(528, 378, penProgress));
      setAttr(overlay.querySelector('[data-motion="pen-tip"]'), "opacity", lineA * (1 - handoff) * 0.95);

      setAttr(overlay.querySelector('[data-motion="phone-frame"]'), "opacity", phoneOpacity * 0.72);
      setAttr(overlay.querySelector('[data-motion="submit-focus"]'), "opacity", ready * 0.64);
      setAttr(overlay.querySelector('[data-motion="answer-ring-a"]'), "opacity", checkA * 0.76);
      setAttr(overlay.querySelector('[data-motion="answer-ring-c"]'), "opacity", checkC * 0.76);
      setAttr(overlay.querySelector('[data-motion="answer-check-a"]'), "opacity", checkA);
      setAttr(overlay.querySelector('[data-motion="answer-check-a"]'), "stroke-dashoffset", 1 - checkA);
      setAttr(overlay.querySelector('[data-motion="answer-check-c"]'), "opacity", checkC);
      setAttr(overlay.querySelector('[data-motion="answer-check-c"]'), "stroke-dashoffset", 1 - checkC);
      setAttr(overlay.querySelector('[data-motion="ready-spark"]'), "opacity", smoothstep((ready - 0.7) / 0.3) * 0.9);
      setAttr(overlay.querySelector('[data-motion="ready-spark"]'), "transform", `scale(${0.75 + ready * 0.25})`);
      setAttr(overlay.querySelector('[data-motion="ready-spark"]'), "transform-origin", "866px 681px");
    }
  };
})();

// 关键锚点：扫描线沿试卷四边形，笔尖沿原图斜线，反馈圈对齐手机已有勾选项。
// 验收重点：0→1 依次完成扫描、提取交接、手机勾选；反向连续回退，reduced-motion 始终保持 idle。
