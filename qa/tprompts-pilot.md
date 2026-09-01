# TPrompts Pilot QA

## Automated checks

- `node --check app.js`：pass
- `node --check scripts/generate-tprompts-timeline.mjs`：pass
- `build/timeline.json` state/segment ordering and boundary validation：pass
- `motion_budget.py --strict`：pass for one 24-frame independent transition at 420x260 CSS px, DPR 2
- HTTP loading of `index.html` and `build/timeline.json`：pass on local port 4174
- `git diff --check`：pass

## Manual checks still required

- Desktop hover: linking path, focus boxes, output confirmation, and reverse return.
- Keyboard: visible focus, Space/Enter trigger, and no interference with the external link.
- Touch: button trigger, stable card height, and no accidental page navigation.
- `prefers-reduced-motion`: static K0 with no continuous animation.
- 320/375/414/768px and desktop: no clipping, overlap, or horizontal overflow.
