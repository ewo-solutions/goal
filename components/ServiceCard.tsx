"use client";

import { useState } from "react";
import Image from "next/image";

export default function ServiceCard({
  title,
  image,
  bullets,
}: {
  title: string;
  image: string;
  bullets: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      aria-expanded={open}
      aria-label={`${title} — ${open ? "hide" : "show"} details`}
      onClick={() => setOpen((v) => !v)}
      className="fx-lift group relative block aspect-[346/442] w-full overflow-hidden rounded-[20px] bg-goal-navy text-left"
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-[rgba(163,12,12,0)] to-goal-red mix-blend-multiply" />
      <p
        className={`absolute bottom-[8.6%] left-[9.8%] right-[9.5%] text-[26px] font-bold leading-[1.2] text-white transition-opacity duration-300 ${
          open ? "opacity-0" : "opacity-100 group-hover:opacity-0"
        }`}
      >
        {title}
      </p>

      {/* Hover (desktop) / tap (mobile) info overlay */}
      <div
        className={`absolute inset-0 flex flex-col justify-center gap-3 rounded-[20px] bg-gradient-to-br from-goal-red to-goal-navy p-6 transition-all duration-300 ${
          open
            ? "translate-y-0 opacity-100"
            : "translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
        }`}
      >
        <h3 className="text-[20px] font-bold leading-[1.2] text-white">{title}</h3>
        <ul className="space-y-1.5">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2 text-[13px] leading-[1.4] text-white/90">
              <span className="mt-[7px] h-[3px] w-[3px] shrink-0 rounded-full bg-white" aria-hidden />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </button>
  );
}
