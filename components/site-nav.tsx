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
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8 sm:pt-6">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 transition duration-300 sm:px-7 ${
          scrolled
            ? "border-white/10 bg-black/70 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="text-sm uppercase tracking-[0.3em] text-white/90"
          data-cursor="hover"
        >
          {resume.name}
        </Link>

        <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-white/55 sm:gap-3">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 transition ${
                  active ? "bg-white text-black" : "hover:bg-white/10 hover:text-white"
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
