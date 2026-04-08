"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRightIcon } from "@/components/home/icons";
import { MetricCard, PanelFrame, StatTile } from "@/components/home/shared";
import { resume } from "@/data/resume";

export function HeroPanel({ panelCount }: { panelCount: number }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroLines = resume.name.split(" ");

  useEffect(() => {
    if (!heroRef.current) {
      return;
    }

    const letters = heroRef.current.querySelectorAll("[data-hero-letter]");
    const blocks = heroRef.current.querySelectorAll("[data-hero-block]");
    const arrow = heroRef.current.querySelector("[data-scroll-arrow]");

    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

    timeline
      .set(letters, { yPercent: 108, opacity: 0 })
      .set(blocks, { y: 26, opacity: 0 })
      .to(letters, {
        yPercent: 0,
        opacity: 1,
        stagger: 0.035,
        duration: 0.72,
      })
      .to(blocks, { y: 0, opacity: 1, stagger: 0.1, duration: 0.58 }, "-=0.25");

    if (arrow) {
      gsap.to(arrow, {
        x: 12,
        repeat: -1,
        yoyo: true,
        duration: 0.9,
        ease: "power1.inOut",
      });
    }

    return () => {
      timeline.kill();
      if (arrow) {
        gsap.killTweensOf(arrow);
      }
    };
  }, []);

  return (
    <PanelFrame eyebrow="Portfolio">
      <div
        ref={heroRef}
        className="grid flex-1 gap-6 lg:h-[calc(100vh-11rem)] lg:min-h-0 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-center lg:gap-6"
      >
        <div className="flex min-w-0 flex-col justify-between gap-6 lg:h-full lg:pr-3">
          <div className="space-y-5 lg:space-y-6">
            {resume.heroSubtitle ? (
              <p
                className="max-w-lg text-[11px] uppercase tracking-[0.32em] text-white/58 sm:text-sm"
                data-hero-block
              >
                {resume.heroSubtitle}
              </p>
            ) : null}

            <div className="overflow-hidden">
              <h1 className="flex flex-col text-[clamp(3rem,8.8vw,6.6rem)] font-semibold uppercase leading-[0.84] tracking-[-0.07em] text-white">
                {heroLines.map((line, lineIndex) => (
                  <span key={line} className="block">
                    {line.split("").map((letter, index) => (
                      <span
                        key={`${lineIndex}-${letter}-${index}`}
                        data-hero-letter
                        className="inline-block"
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                ))}
              </h1>
            </div>

            <p
              className="max-w-lg text-sm leading-6 text-white/72 sm:text-base sm:leading-7"
              data-hero-block
            >
              {resume.summary}
            </p>

            <div className="flex flex-wrap gap-3" data-hero-block>
              <Link
                href={`mailto:${resume.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-4 py-2.5 text-[11px] uppercase tracking-[0.22em] text-black transition hover:translate-y-[-2px] hover:bg-white/90 sm:px-5 sm:py-3 sm:text-sm"
                data-cursor="hover"
              >
                Start a Conversation
                <ArrowUpRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/14 px-4 py-2.5 text-[11px] uppercase tracking-[0.22em] text-white/74 transition hover:border-white/40 hover:bg-white/[0.06] hover:text-white sm:px-5 sm:py-3 sm:text-sm"
                data-cursor="hover"
              >
                View Profile
              </Link>
            </div>
          </div>

          <div
            className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.28em] text-white/44"
            data-hero-block
          >
            <span className="inline-flex items-center gap-2">
              <span>Scroll right</span>
              <span data-scroll-arrow className="text-lg text-white/72">
                &rarr;
              </span>
            </span>
            <span className="hidden h-px w-16 bg-white/16 sm:block" />
            <span>{panelCount.toString().padStart(2, "0")} panels</span>
          </div>
        </div>

        <div className="grid min-w-0 gap-3 lg:h-full lg:min-h-0 lg:grid-rows-[minmax(0,1fr)_auto]">
          <div
            className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.04] p-4 sm:p-5 lg:p-6"
            data-reveal
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.28),transparent_30%),radial-gradient(circle_at_75%_28%,rgba(236,72,153,0.2),transparent_24%),linear-gradient(140deg,rgba(255,255,255,0.08),transparent_52%)]" />
            <div className="relative flex h-full flex-col justify-between gap-4">
              <div className="space-y-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/48">
                  Current Focus
                </p>
                <p className="max-w-md text-xl font-medium uppercase leading-[1.02] tracking-[-0.04em] text-white sm:text-2xl xl:text-[2.5rem]">
                  AI systems, real-time products, and interfaces that feel deliberate.
                </p>
              </div>
              <div className="grid gap-2.5 sm:grid-cols-2">
                <MetricCard label="Base" value={resume.location} />
                <MetricCard label="Email" value={resume.email} />
                <MetricCard label="GitHub" value="github.com/Arcestor" />
                <MetricCard label="Role" value={resume.title} />
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3" data-reveal>
            <StatTile value="4" label="featured projects" />
            <StatTile value="AI" label="privacy-first systems" />
            <StatTile value="RT" label="real-time backend craft" />
          </div>
        </div>
      </div>
    </PanelFrame>
  );
}
