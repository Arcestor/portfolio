"use client";

import Link from "next/link";
import { ReactNode } from "react";

export function PanelFrame({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <section
      data-panel
      className="relative flex min-h-screen w-full shrink-0 flex-col overflow-hidden border-b border-white/10 px-4 pb-6 pt-20 sm:px-6 sm:pb-8 sm:pt-24 lg:w-screen lg:border-b-0 lg:border-r lg:px-8 lg:pb-8 lg:pt-24 xl:px-10"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(14,165,233,0.14),transparent_26%),linear-gradient(160deg,rgba(255,255,255,0.04),transparent_48%),linear-gradient(180deg,#06080d,#040507)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:88px_88px] opacity-20" />
      <div
        className="pointer-events-none mb-6 inline-flex w-fit rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.36em] text-white/48 sm:mb-8"
        data-reveal
      >
        {eyebrow}
      </div>
      <div className="flex flex-1 flex-col">{children}</div>
    </section>
  );
}

export function ScrollProgress({ progress }: { progress: number }) {
  const clamped = Math.max(0, Math.min(progress, 1));

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[70]">
      <div className="h-[2px] bg-white/10">
        <div
          className="h-full origin-left bg-white transition-[transform] duration-150"
          style={{ transform: `scaleX(${clamped})` }}
        />
      </div>
    </div>
  );
}

export function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.25rem] border border-white/10 bg-black/18 p-3.5 sm:p-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/42">{label}</p>
      <p className="mt-3 text-sm leading-6 text-white/78">{value}</p>
    </div>
  );
}

export function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-4 sm:p-5">
      <p className="text-3xl font-semibold uppercase tracking-[-0.06em] text-white sm:text-4xl">
        {value}
      </p>
      <p className="mt-3 text-[11px] uppercase tracking-[0.24em] text-white/48 sm:text-xs sm:tracking-[0.28em]">
        {label}
      </p>
    </div>
  );
}

export function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="inline-flex items-center gap-3 rounded-full border border-white/14 px-4 py-3 text-sm uppercase tracking-[0.22em] text-white/74 transition hover:translate-y-[-2px] hover:border-white/32 hover:bg-white hover:text-black"
      data-cursor="hover"
    >
      {children}
      {label}
    </Link>
  );
}
