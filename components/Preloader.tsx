"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const MIN_VISIBLE_MS = 1000;
const MAX_VISIBLE_MS = 2600;
const EXIT_MS = 750;

/**
 * Full-screen loading overlay shown on hard page loads. Server-rendered so it
 * covers the page from the first paint (visible only when the `fx` class is on
 * <html>, i.e. JS enabled and no reduced-motion preference), then sweeps up
 * once the window has loaded.
 */
export default function Preloader() {
  const [phase, setPhase] = useState<"loading" | "exit" | "done">("loading");

  useEffect(() => {
    // Without the fx gate the overlay is display:none; retire it right away.
    const fxOn = document.documentElement.classList.contains("fx");
    const started = performance.now();
    let exited = false;
    let minTimer: ReturnType<typeof setTimeout> | undefined;

    const exit = () => {
      if (exited) return;
      exited = true;
      setPhase("exit");
      setTimeout(() => setPhase("done"), EXIT_MS + 60);
    };
    const onLoad = () => {
      const remaining = Math.max(0, MIN_VISIBLE_MS - (performance.now() - started));
      minTimer = setTimeout(exit, remaining);
    };

    if (fxOn) {
      if (document.readyState === "complete") onLoad();
      else window.addEventListener("load", onLoad);
    }
    const cap = setTimeout(exit, fxOn ? MAX_VISIBLE_MS : 0);

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(cap);
      if (minTimer) clearTimeout(minTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`preloader ${phase === "exit" ? "preloader--exit" : ""}`} aria-hidden>
      <div className="preloader-inner">
        <Image
          src="/images/goal-logo.png"
          alt=""
          width={237}
          height={80}
          priority
          className="preloader-logo h-[64px] w-auto lg:h-[84px]"
        />
        <div className="preloader-bar">
          <span />
        </div>
      </div>
    </div>
  );
}
