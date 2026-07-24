"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-goal-navy">
      <div className="mx-auto flex h-[90px] max-w-[1580px] items-center justify-between px-6 lg:h-[163px] lg:px-10">
        <Link href="/" onClick={() => setMobileOpen(false)} className="relative block">
          <Image
            src="/images/goal-logo.png"
            alt="Gulf of America Logistics"
            width={237}
            height={80}
            priority
            className="h-[56px] w-auto lg:h-[80px]"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`nav-underline flex items-center gap-2 p-[10px] text-[18px] capitalize text-white ${
                    pathname.startsWith(link.href) ? "font-bold" : "font-normal"
                  }`}
                >
                  {link.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden>
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </Link>
                <div className="invisible absolute left-0 top-full min-w-[320px] rounded-b-[20px] bg-goal-navy py-2 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-6 py-2.5 text-[16px] text-white transition-colors hover:bg-goal-red"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-underline p-[10px] text-[18px] capitalize text-white ${
                  pathname === link.href ? "font-bold" : "font-normal"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/talk-to-us"
            className="ml-4 rounded-full bg-goal-red px-[25px] py-[16px] text-[18px] leading-[1.2] text-white transition-opacity hover:opacity-90"
          >
            Talk To Us
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-[6px] lg:hidden"
        >
          <span
            className={`h-[2px] w-7 bg-white transition-transform ${
              mobileOpen ? "translate-y-[8px] rotate-45" : ""
            }`}
          />
          <span className={`h-[2px] w-7 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span
            className={`h-[2px] w-7 bg-white transition-transform ${
              mobileOpen ? "-translate-y-[8px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-white/10 bg-goal-navy px-6 pb-8 pt-4 lg:hidden">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-3 text-[18px] capitalize text-white ${
                  pathname === link.href ? "font-bold" : "font-normal"
                }`}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="ml-4 border-l border-white/20 pl-4">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-[16px] font-light text-white/90"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/talk-to-us"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-block rounded-full bg-goal-red px-[25px] py-[14px] text-[18px] text-white"
          >
            Talk To Us
          </Link>
        </nav>
      )}
    </header>
  );
}
