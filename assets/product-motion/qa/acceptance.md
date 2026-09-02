# Product scroll-motion acceptance

- Desktop: each scene has a 460x288 CSS px maximum target and remains vector-sharp at DPR 2.
- Mobile: decorative spark, pixel, and node layers are removed below 860px; the primary scene stays visible at 320x200 CSS px.
- Runtime: one passive scroll listener schedules one requestAnimationFrame; an IntersectionObserver excludes offscreen scenes.
- Accessibility: each scene has a product-specific accessible label; `prefers-reduced-motion` renders its completed state without scroll animation.
- Fallback: the UI is fully usable if the runtime does not initialize because all fifteen featured vector scenes remain meaningful and links remain outside the illustrations.
