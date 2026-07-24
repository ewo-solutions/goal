"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Reveal-on-scroll driver. Elements opt in with `data-reveal` (optionally
 * "left" | "right" | "zoom" for direction and `data-reveal-delay` in ms);
 * containers with `data-reveal-group` get their direct children staggered
 * automatically. Elements stay hidden only when the `fx` class is on <html>,
 * so content is fully visible without JS or with reduced motion.
 */
export default function ScrollFx() {
  const pathname = usePathname();

  useEffect(() => {
    if (!document.documentElement.classList.contains("fx")) return;

    const items = new Set<HTMLElement>();
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      const delay = el.dataset.revealDelay;
      if (delay) el.style.setProperty("--rv-delay", `${delay}ms`);
      items.add(el);
    });
    document.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((group) => {
      Array.from(group.children).forEach((child, i) => {
        const el = child as HTMLElement;
        el.style.setProperty("--rv-delay", `${Math.min(i, 7) * 90}ms`);
        items.add(el);
      });
    });

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add("rv-in");
          io.unobserve(el);
          const delay = parseFloat(getComputedStyle(el).getPropertyValue("--rv-delay")) || 0;
          setTimeout(() => el.classList.add("rv-done"), delay + 750);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    items.forEach((el) => {
      if (el.classList.contains("rv-in")) return;
      io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
