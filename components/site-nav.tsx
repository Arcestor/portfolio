"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { resume } from "@/data/resume";

const navItems = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-0 sm:px-6 sm:pt-0 lg:pt-5">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-2.5 transition duration-300 sm:px-6 ${
          scrolled
            ? "border-white/10 bg-black/70 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl"
            : "border-white/5 bg-black/18 backdrop-blur-md"
        }`}
      >
        <Link
          href="/"
          aria-label={`${resume.name} home`}
          className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-white/90 sm:text-sm"
          data-cursor="hover"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-[10px] tracking-[0.28em] sm:hidden">
            {resume.initials}
          </span>
          <span className="hidden sm:inline">{resume.name}</span>
        </Link>

        <nav className="flex items-center gap-1 text-[10px] uppercase tracking-[0.24em] text-white/55 sm:gap-2 sm:text-xs sm:tracking-[0.28em]">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-2.5 py-2 transition sm:px-3 ${
                  active
                    ? "bg-white text-black"
                    : "border border-transparent hover:border-white/12 hover:bg-white/10 hover:text-white"
                }`}
                data-cursor="hover"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
