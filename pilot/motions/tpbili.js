(function registerTPbiliMotion() {
  window.TPCardMotionConfigs = window.TPCardMotionConfigs || {};

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const easeOut = (value) => 1 - Math.pow(1 - clamp(value, 0, 1), 3);
  const easeInOut = (value) => {
    const t = clamp(value, 0, 1);
    return t * t * (3 - 2 * t);
  };

  window.TPCardMotionConfigs.tpbili = {
    states: [
      { id: "idle" },
      { id: "pixel-scan" },
      { id: "live-profile" }
    ],
    durationFrames: [24, 24],
    overlayViewBox: "0 0 1000 1000",
    overlayMarkup: `<svg class="tpbili-motion-overlay" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="tpbili-screen-clip">
          <path d="M338 486 Q500 465 656 484 L668 702 Q500 728 332 702 Z"></path>
        </clipPath>
      </defs>
      <g id="tpbili-motion-art">
        <g id="tpbili-scan-layer" clip-path="url(#tpbili-screen-clip)">
          <rect id="tpbili-scan-wash" x="326" y="468" width="350" height="18" rx="8" fill="#cfe5f5" opacity="0"></rect>
          <path id="tpbili-scan-line" d="M326 478 H676" fill="none" stroke="#f4b942" stroke-width="4" stroke-linecap="round" opacity="0"></path>
        </g>
        <g id="tpbili-pixel-cluster" clip-path="url(#tpbili-screen-clip)" opacity="0">
          <rect class="tpbili-pixel" data-target-x="468" data-target-y="550" x="468" y="550" width="15" height="15" rx="2" fill="#f4b942"></rect>
          <rect class="tpbili-pixel" data-target-x="505" data-target-y="546" x="505" y="546" width="13" height="13" rx="2" fill="#8cc7ed"></rect>
          <rect class="tpbili-pixel" data-target-x="446" data-target-y="580" x="446" y="580" width="16" height="16" rx="2" fill="#f4b942"></rect>
          <rect class="tpbili-pixel" data-target-x="481" data-target-y="580" x="481" y="580" width="12" height="12" rx="2" fill="#f7a6b8"></rect>
          <rect class="tpbili-pixel" data-target-x="520" data-target-y="582" x="520" y="582" width="16" height="16" rx="2" fill="#8cc7ed"></rect>
          <rect class="tpbili-pixel" data-target-x="550" data-target-y="586" x="550" y="586" width="14" height="14" rx="2" fill="#f4b942"></rect>
          <rect class="tpbili-pixel" data-target-x="458" data-target-y="622" x="458" y="622" width="13" height="13" rx="2" fill="#8cc7ed"></rect>
          <rect class="tpbili-pixel" data-target-x="493" data-target-y="620" x="493" y="620" width="15" height="15" rx="2" fill="#f4b942"></rect>
          <rect class="tpbili-pixel" data-target-x="526" data-target-y="625" x="526" y="625" width="13" height="13" rx="2" fill="#f7a6b8"></rect>
          <rect class="tpbili-pixel" data-target-x="450" data-target-y="660" x="450" y="660" width="15" height="15" rx="2" fill="#f4b942"></rect>
          <rect class="tpbili-pixel" data-target-x="487" data-target-y="660" x="487" y="660" width="12" height="12" rx="2" fill="#8cc7ed"></rect>
          <rect class="tpbili-pixel" data-target-x="520" data-target-y="660" x="520" y="660" width="15" height="15" rx="2" fill="#f4b942"></rect>
          <rect class="tpbili-pixel" data-target-x="552" data-target-y="651" x="552" y="651" width="14" height="14" rx="2" fill="#f7a6b8"></rect>
        </g>
        <g id="tpbili-profile-frame" fill="none" stroke="#f4b942" stroke-width="4" stroke-linecap="round" opacity="0">
          <path d="M423 549 H447 M423 549 V573 M570 549 H546 M570 549 V573"></path>
          <path d="M423 691 H447 M423 691 V667 M570 691 H546 M570 691 V667"></path>
        </g>
        <circle id="tpbili-live-beacon" cx="558" cy="508" r="11" fill="none" stroke="#f7a6b8" stroke-width="4" opacity="0"></circle>
        <g id="tpbili-comment-highlights" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="5">
          <path class="tpbili-comment" data-comment-index="0" pathLength="1" stroke="#8cc7ed" opacity="0" d="M222 162 H486 Q510 162 510 187 V240 Q510 264 487 264 H450 L474 289 L443 265 H222 Q198 265 198 240 V187 Q198 162 222 162 Z"></path>
          <path class="tpbili-comment" data-comment-index="1" pathLength="1" stroke="#f4b942" opacity="0" d="M579 104 H769 Q791 104 791 127 V185 Q791 208 769 208 H612 L586 237 V208 H579 Q556 208 556 185 V127 Q556 104 579 104 Z"></path>
          <path class="tpbili-comment" data-comment-index="2" pathLength="1" stroke="#8cc7ed" opacity="0" d="M699 211 H854 Q877 211 877 234 V264 Q877 286 854 286 H746 L709 319 V286 H699 Q677 286 677 264 V234 Q677 211 699 211 Z"></path>
          <path class="tpbili-comment" data-comment-index="3" stroke="#f7a6b8" pathLength="1" opacity="0" d="M147 294 H370 Q394 294 394 318 V374 Q394 397 370 397 H337 L363 422 V397 H147 Q123 397 123 374 V318 Q123 294 147 294 Z"></path>
        </g>
      </g>
    </svg>`,
    render(stage, overlay, progress, pointerX, pointerY, reducedMotion) {
      if (!overlay || typeof overlay.querySelector !== "function") return;

      const p = reducedMotion ? 0 : clamp(Number(progress) || 0, 0, 1);
      const scanProgress = easeInOut(p / 0.5);
      const profileProgress = easeOut((p - 0.42) / 0.58);
      const scanActive = clamp(p / 0.12, 0, 1) * (1 - clamp((p - 0.48) / 0.12, 0, 1));
      const pixelProgress = easeOut((p - 0.08) / 0.65);
      const pixelOpacity = reducedMotion ? 0 : 0.34 * pixelProgress * (1 - clamp((p - 0.68) / 0.2, 0, 1));
      const safePointerX = clamp(Number(pointerX) || 0, -0.5, 0.5);
      const safePointerY = clamp(Number(pointerY) || 0, -0.5, 0.5);
      const art = overlay.querySelector("#tpbili-motion-art");
      const scanWash = overlay.querySelector("#tpbili-scan-wash");
      const scanLine = overlay.querySelector("#tpbili-scan-line");
      const pixelCluster = overlay.querySelector("#tpbili-pixel-cluster");
      const profileFrame = overlay.querySelector("#tpbili-profile-frame");
      const liveBeacon = overlay.querySelector("#tpbili-live-beacon");
      const comments = overlay.querySelectorAll(".tpbili-comment");

      overlay.style.setProperty("--tpbili-progress", p.toFixed(4));
      overlay.style.setProperty("--tpbili-pointer-x", safePointerX.toFixed(3));
      overlay.style.setProperty("--tpbili-pointer-y", safePointerY.toFixed(3));

      if (art) art.setAttribute("transform", `translate(${(safePointerX * 1.4).toFixed(2)} ${(safePointerY * 1.1).toFixed(2)})`);
      if (scanWash) {
        scanWash.setAttribute("y", (474 + scanProgress * 220).toFixed(2));
        scanWash.setAttribute("opacity", (scanActive * 0.22).toFixed(3));
      }
      if (scanLine) {
        scanLine.setAttribute("transform", `translate(0 ${(scanProgress * 220).toFixed(2)})`);
        scanLine.setAttribute("opacity", (scanActive * 0.95).toFixed(3));
      }
      if (pixelCluster) pixelCluster.setAttribute("opacity", pixelOpacity.toFixed(3));

      const pixelOffsets = [
        [-52, -34], [48, -42], [-70, -8], [-44, 35], [65, 18], [88, -20],
        [-58, 47], [42, 56], [72, 45], [-82, 23], [-50, 76], [63, 72], [96, 40]
      ];
      overlay.querySelectorAll(".tpbili-pixel").forEach((pixel, index) => {
        const targetX = Number(pixel.getAttribute("data-target-x"));
        const targetY = Number(pixel.getAttribute("data-target-y"));
        const [offsetX, offsetY] = pixelOffsets[index];
        pixel.setAttribute("x", (targetX + offsetX * (1 - pixelProgress)).toFixed(2));
        pixel.setAttribute("y", (targetY + offsetY * (1 - pixelProgress)).toFixed(2));
      });

      if (profileFrame) profileFrame.setAttribute("opacity", (profileProgress * 0.78).toFixed(3));
      if (liveBeacon) {
        const beaconPulse = profileProgress * (0.7 + 0.3 * Math.sin(profileProgress * Math.PI * 4));
        liveBeacon.setAttribute("opacity", (beaconPulse * 0.8).toFixed(3));
        liveBeacon.setAttribute("r", (8 + beaconPulse * 5).toFixed(2));
      }

      const commentStarts = [0.50, 0.62, 0.74, 0.84];
      comments.forEach((comment, index) => {
        const drawProgress = easeOut((p - commentStarts[index]) / 0.1);
        const holdOpacity = clamp((p - (commentStarts[index] + 0.1)) / 0.08, 0, 1);
        const opacity = Math.max(drawProgress * 0.82, holdOpacity * 0.38);
        comment.setAttribute("stroke-dasharray", "1");
        comment.setAttribute("stroke-dashoffset", (1 - drawProgress).toFixed(3));
        comment.setAttribute("opacity", reducedMotion ? "0" : opacity.toFixed(3));
      });

      // 关键锚点：扫描线锁定电视屏幕，像素块锁定屏幕内人物，气泡按真实四个坐标依次描边。
      // 验收重点：idle 无覆盖；pixel-scan 不越过电视边框；live-profile 的高亮不压住文字与人物轮廓。
      void stage;
    }
  };
})();
