import type { CSSProperties } from "react";

type RevealKind = "up" | "fade" | "scale" | "left" | "right";

/**
 * Scroll-reveal props. `<RevealObserver />` (mounted once in the root layout)
 * sets `data-revealed` when the element scrolls into view, and globals.css
 * turns that into the entrance.
 *
 * The reveal owns the element's `transition`, so put it on an element with no
 * Tailwind `transition-*` class of its own — wrap one if you need both.
 */
export function reveal(kind: RevealKind = "up", delayMs = 0) {
  return {
    "data-reveal": kind,
    style: delayMs
      ? ({ "--reveal-delay": `${delayMs}ms` } as CSSProperties)
      : undefined,
  };
}

/** Start offset for a one-shot entrance (`animate-rise`, `animate-slide-in`…). */
export function delay(ms: number) {
  return { "--motion-delay": `${ms}ms` } as CSSProperties;
}
