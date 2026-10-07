"use client";

import { useEffect } from "react";

const PENDING = "[data-reveal]:not([data-revealed])";

/**
 * Drives every `data-reveal` element on the site (see src/lib/motion.ts). One
 * IntersectionObserver for the whole document, plus a MutationObserver so
 * content that arrives with a client-side navigation is picked up too. Each
 * element reveals once and is then left alone.
 */
export function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "");
          io.unobserve(entry.target);
        }
      },
      // No negative bottom margin: the last rows of a page (a footer's legal
      // line) can never scroll above one, so they would never reveal.
      { threshold: 0.12 },
    );

    const watch = (root: ParentNode) =>
      root.querySelectorAll(PENDING).forEach((el) => io.observe(el));

    watch(document);

    const mo = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches(PENDING)) io.observe(node);
          watch(node);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
