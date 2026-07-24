"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const COVER_MS = 600;
const REVEAL_HOLD_MS = 120;
const FAILSAFE_MS = 4000;

type Phase = "idle" | "cover" | "reveal";

/**
 * Curtain wipe between pages. A capture-phase click listener intercepts
 * same-origin link clicks before Next's <Link> handler runs, sweeps two
 * brand-colored panels down over the viewport, navigates, then sweeps them
 * out once the new route has rendered.
 */
export default function CurtainTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");
  const phaseRef = useRef<Phase>("idle");
  const prevPathname = useRef(pathname);
  const failsafe = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (!document.documentElement.classList.contains("fx")) return;
      const anchor = (e.target as Element | null)?.closest?.("a");
      if (!anchor) return;
      if (anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (url.protocol !== window.location.protocol) return;
      // Same-page (or hash-only) links: let the browser/Next handle them.
      if (url.pathname === window.location.pathname && url.search === window.location.search) return;
      if (phaseRef.current !== "idle") {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      const target = url.pathname + url.search + url.hash;
      setPhase("cover");
      setTimeout(() => router.push(target), COVER_MS);
      failsafe.current = setTimeout(() => {
        // Navigation never landed (error page, aborted fetch): uncover.
        if (phaseRef.current === "cover") setPhase("reveal");
      }, FAILSAFE_MS);
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  // New route committed: lift the curtain.
  useEffect(() => {
    if (pathname === prevPathname.current) return;
    prevPathname.current = pathname;
    if (phaseRef.current !== "cover") return;
    if (failsafe.current) clearTimeout(failsafe.current);
    const t = setTimeout(() => setPhase("reveal"), REVEAL_HOLD_MS);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <div
      className={`curtain ${phase === "cover" ? "curtain--cover" : ""} ${
        phase === "reveal" ? "curtain--reveal" : ""
      }`}
      aria-hidden
      onTransitionEnd={(e) => {
        // The red panel trails on reveal; reset once it is off-screen.
        if (phase === "reveal" && e.target === e.currentTarget.firstElementChild) {
          setPhase("idle");
        }
      }}
    >
      <div className="curtain-panel curtain-panel--red" />
      <div className="curtain-panel curtain-panel--navy">
        <Image
          src="/icons/anchor-white.png"
          alt=""
          width={37}
          height={44}
          className="curtain-mark"
        />
      </div>
    </div>
  );
}
