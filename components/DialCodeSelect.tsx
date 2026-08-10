"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Country dialling codes. Kept as a plain list rather than pulling in a
 * dependency — this is the only place on the site that needs it, and the flag
 * is a Unicode regional-indicator pair so no image assets are involved.
 */
export const dialCodes = [
  { iso: "US", name: "United States", code: "+1", flag: "🇺🇸" },
  { iso: "CA", name: "Canada", code: "+1", flag: "🇨🇦" },
  { iso: "MX", name: "Mexico", code: "+52", flag: "🇲🇽" },
  { iso: "BR", name: "Brazil", code: "+55", flag: "🇧🇷" },
  { iso: "GB", name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { iso: "IE", name: "Ireland", code: "+353", flag: "🇮🇪" },
  { iso: "NL", name: "Netherlands", code: "+31", flag: "🇳🇱" },
  { iso: "DE", name: "Germany", code: "+49", flag: "🇩🇪" },
  { iso: "FR", name: "France", code: "+33", flag: "🇫🇷" },
  { iso: "ES", name: "Spain", code: "+34", flag: "🇪🇸" },
  { iso: "IT", name: "Italy", code: "+39", flag: "🇮🇹" },
  { iso: "NO", name: "Norway", code: "+47", flag: "🇳🇴" },
  { iso: "DK", name: "Denmark", code: "+45", flag: "🇩🇰" },
  { iso: "ZA", name: "South Africa", code: "+27", flag: "🇿🇦" },
  { iso: "NG", name: "Nigeria", code: "+234", flag: "🇳🇬" },
  { iso: "AO", name: "Angola", code: "+244", flag: "🇦🇴" },
  { iso: "AE", name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
  { iso: "SA", name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
  { iso: "QA", name: "Qatar", code: "+974", flag: "🇶🇦" },
  { iso: "IN", name: "India", code: "+91", flag: "🇮🇳" },
  { iso: "SG", name: "Singapore", code: "+65", flag: "🇸🇬" },
  { iso: "CN", name: "China", code: "+86", flag: "🇨🇳" },
  { iso: "JP", name: "Japan", code: "+81", flag: "🇯🇵" },
  { iso: "KR", name: "South Korea", code: "+82", flag: "🇰🇷" },
  { iso: "AU", name: "Australia", code: "+61", flag: "🇦🇺" },
];

/** Max height of the open list, in px — kept in sync with `max-h-[260px]` below */
const LIST_HEIGHT = 260;

export default function DialCodeSelect({
  value,
  onChange,
}: {
  value: (typeof dialCodes)[number];
  onChange: (c: (typeof dialCodes)[number]) => void;
}) {
  const [open, setOpen] = useState(false);
  // The phone field sits low in the contact form, so a list that always opened
  // downward would land below the fold. Flip it above the field when the space
  // underneath isn't enough.
  const [dropUp, setDropUp] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggle = () => {
    setOpen((wasOpen) => {
      if (!wasOpen && ref.current) {
        const { bottom } = ref.current.getBoundingClientRect();
        setDropUp(window.innerHeight - bottom < LIST_HEIGHT + 24);
      }
      return !wasOpen;
    });
  };

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
    <div ref={ref} className="absolute left-0 top-0 h-full">
      <button
        type="button"
        onClick={toggle}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Country dialling code, currently ${value.name} ${value.code}`}
        className="flex h-full items-center gap-2 rounded-l-[20px] px-5 text-white outline-none transition-colors hover:bg-white/10 focus-visible:bg-white/10"
      >
        <span className="text-[18px] leading-none">{value.flag}</span>
        <span className="text-[16px] font-light">{value.code}</span>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className={`absolute left-0 z-20 max-h-[260px] w-[280px] overflow-y-auto rounded-[16px] border border-white/25 bg-goal-navy py-1 shadow-xl ${
            dropUp ? "bottom-full mb-2" : "top-full mt-2"
          }`}
        >
          {dialCodes.map((c) => (
            <li key={c.iso} role="option" aria-selected={c.iso === value.iso}>
              <button
                type="button"
                onClick={() => {
                  onChange(c);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-white transition-colors hover:bg-white/10 ${
                  c.iso === value.iso ? "bg-white/5" : ""
                }`}
              >
                <span className="text-[18px] leading-none">{c.flag}</span>
                <span className="flex-1 text-[15px] font-light">{c.name}</span>
                <span className="text-[15px] font-light text-white/70">{c.code}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
