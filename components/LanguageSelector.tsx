"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const languages = [
  { code: "en", label: "English", flag: "/icons/flag-us.png" },
  { code: "es", label: "Spanish", flag: "/icons/flag-es.png" },
  { code: "zh", label: "Mandarin Chinese", flag: "/icons/flag-cn.png" },
  { code: "de", label: "German", flag: "/icons/flag-de.png" },
  { code: "fr", label: "French", flag: "/icons/flag-fr.png" },
  { code: "it", label: "Italian", flag: "/icons/flag-it.png" },
  { code: "ja", label: "Japanese", flag: "/icons/flag-jp.png" },
];

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex h-[55px] w-[180px] items-center gap-3 rounded-[20px] border border-white px-6 text-white transition-all hover:font-bold hover:bg-white/10"
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
          className="absolute bottom-full right-0 mb-2 w-[180px] overflow-hidden rounded-[16px] border border-white/20 bg-goal-navy py-1 shadow-xl"
        >
          {languages.map((lang) => (
            <li key={lang.code} role="option" aria-selected={lang.code === selected.code}>
              <button
                type="button"
                onClick={() => {
                  setSelected(lang);
                  setOpen(false);
                }}
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
