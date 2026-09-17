"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";

// Codes match Google Translate's own language codes, since this list drives
// the Google Translate widget mounted in app/layout.tsx (see TRANSLATION.md).
// "en" is the page's own language — selecting it clears the translation
// rather than "translating to English".
const languages = [
  { code: "en", label: "English", flag: "/icons/flag-us.png" },
  { code: "es", label: "Spanish", flag: "/icons/flag-es.png" },
  { code: "zh-CN", label: "Mandarin Chinese", flag: "/icons/flag-cn.png" },
  { code: "de", label: "German", flag: "/icons/flag-de.png" },
  { code: "fr", label: "French", flag: "/icons/flag-fr.png" },
  { code: "it", label: "Italian", flag: "/icons/flag-it.png" },
  { code: "ja", label: "Japanese", flag: "/icons/flag-jp.png" },
];

const COOKIE_FAR_FUTURE = "expires=Fri, 31 Dec 9999 23:59:59 GMT";

/** Reads Google Translate's own `googtrans` cookie (format "/en/<code>") so
 * the button reflects whichever language is already active on load. */
function readActiveLanguageCode(): string {
  const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
  return match ? decodeURIComponent(match[1]).split("/")[2] ?? "en" : "en";
}

// The cookie only ever changes via a full reload triggered by this same
// component (see selectLanguage below), so there's nothing to subscribe to —
// this getSnapshot is read once per mount. useSyncExternalStore is used
// anyway (rather than useState+useEffect) because it has an SSR-safe
// server snapshot built in, avoiding both a hydration mismatch and an
// effect that calls setState on mount.
function subscribe() {
  return () => {};
}
function getServerSnapshot() {
  return "en";
}

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [pendingCode, setPendingCode] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const activeCode = useSyncExternalStore(subscribe, readActiveLanguageCode, getServerSnapshot);
  const selected = languages.find((l) => l.code === activeCode) ?? languages[0];

  // Writing the cookie + reloading happens in an effect (rather than directly
  // in the click handler) so the DOM/browser-global mutation isn't performed
  // during an event handler's render-adjacent code path.
  useEffect(() => {
    if (pendingCode === null) return;
    if (pendingCode === "en") {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    } else {
      document.cookie = `googtrans=/en/${pendingCode}; ${COOKIE_FAR_FUTURE}; path=/`;
    }
    window.location.reload();
  }, [pendingCode]);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function selectLanguage(lang: (typeof languages)[number]) {
    setOpen(false);
    if (lang.code === selected.code) return;
    // Google's widget reads the googtrans cookie once on page load, so a
    // full reload (triggered from the effect above) is the reliable way to
    // apply it — a live DOM-swap via its hidden <select> works initially but
    // doesn't reliably survive this site's client-side route changes.
    setPendingCode(lang.code);
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="notranslate flex h-[55px] w-[180px] items-center gap-3 rounded-[20px] border border-white px-6 text-white transition-all hover:font-bold hover:bg-white/10"
      >
        <Image src={selected.flag} alt="" width={34} height={22} className="h-[22px] w-[34px] object-cover" />
        <span className="text-[18px] font-light">{selected.label}</span>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          className={`ml-auto shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="notranslate absolute bottom-full right-0 mb-2 w-[180px] overflow-hidden rounded-[16px] border border-white/20 bg-goal-navy py-1 shadow-xl"
        >
          {languages.map((lang) => (
            <li key={lang.code} role="option" aria-selected={lang.code === selected.code}>
              <button
                type="button"
                onClick={() => selectLanguage(lang)}
                className="flex w-full items-center gap-3 px-5 py-2.5 text-left text-white transition-colors hover:bg-white/10"
              >
                <Image src={lang.flag} alt="" width={28} height={18} className="h-[18px] w-[28px] object-cover" />
                <span className="text-[16px] font-light">{lang.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
