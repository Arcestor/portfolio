"use client";

import Link from "next/link";
import { ReactNode, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteNav } from "@/components/site-nav";
import { resume } from "@/data/resume";

gsap.registerPlugin(ScrollTrigger);

export function HomeHorizontal() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!wrapperRef.current || !trackRef.current || window.innerWidth < 1024) {
      return;
    }

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>("[data-panel]");
      const totalScroll = trackRef.current!.scrollWidth - window.innerWidth;

      gsap.to(sections, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: () => `+=${totalScroll}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SiteNav />
      <main ref={wrapperRef} className="min-h-screen overflow-clip bg-background text-foreground">
        <div
          ref={trackRef}
          className="flex min-h-screen flex-col lg:h-screen lg:min-h-0 lg:w-[400vw] lg:flex-row"
        >
          <LandingPanel />
          <ProjectsPanel />
          <AboutPanel />
          <ContactPanel />
        </div>
      </main>
    </>
  );
}

function Panel({
  kicker,
  title,
  description,
  children,
}: {
  kicker: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section
      data-panel
      className="relative flex min-h-screen w-full shrink-0 flex-col justify-between border-b border-white/10 px-4 pb-10 pt-28 sm:px-8 lg:w-screen lg:border-b-0 lg:border-r lg:px-10 lg:pb-12 lg:pt-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.09),transparent_35%),linear-gradient(160deg,rgba(255,255,255,0.02),transparent_45%)]" />
      <div className="space-y-6">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/45">{kicker}</p>
        {(title || description) && (
          <div className="max-w-3xl space-y-4">
            {title ? (
              <h2 className="text-4xl font-semibold uppercase leading-none tracking-[0.03em] sm:text-6xl lg:text-7xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        )}
      </div>
      {children}
    </section>
  );
}

function LandingPanel() {
  return (
    <Panel kicker="Hero" title="" description="">
      <HeroIntro />
    </Panel>
  );
}

function HeroIntro() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) {
      return;
    }

    const letters = heroRef.current.querySelectorAll("[data-hero-letter]");
    const subtitle = heroRef.current.querySelector("[data-hero-subtitle]");
    const actions = heroRef.current.querySelector("[data-hero-actions]");
    const indicator = heroRef.current.querySelector("[data-hero-indicator]");
    const arrow = heroRef.current.querySelector("[data-scroll-arrow]");

    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

    timeline
      .set(letters, { yPercent: 110, opacity: 0 })
      .set([subtitle, actions, indicator], { y: 28, opacity: 0 })
      .to(letters, {
        yPercent: 0,
        opacity: 1,
        stagger: 0.04,
        duration: 0.7,
      })
      .to(subtitle, { y: 0, opacity: 1, duration: 0.55 }, "-=0.32")
      .to(actions, { y: 0, opacity: 1, duration: 0.55 }, "-=0.28")
      .to(indicator, { y: 0, opacity: 1, duration: 0.5 }, "-=0.2");

    if (arrow) {
      gsap.to(arrow, {
        x: 10,
        repeat: -1,
        yoyo: true,
        duration: 0.85,
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
    <div
      ref={heroRef}
      className="flex h-full flex-col justify-between gap-12 lg:min-h-[calc(100vh-11rem)]"
    >
      <div className="space-y-10">
        <div className="overflow-hidden">
          <h1 className="max-w-5xl text-[clamp(4.5rem,13vw,11rem)] font-semibold uppercase leading-[0.88] tracking-[-0.04em] text-white">
            {resume.name.split("").map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                data-hero-letter
                className={letter === " " ? "inline-block w-[0.3em]" : "inline-block"}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>
        </div>

        <div className="space-y-6">
          {resume.heroSubtitle ? (
            <p
              data-hero-subtitle
              className="max-w-2xl text-sm uppercase tracking-[0.34em] text-white/62 sm:text-base"
            >
              {resume.heroSubtitle}
            </p>
          ) : null}
          <div data-hero-actions className="flex flex-wrap gap-3">
            <Link
              href="/about"
              className="rounded-full border border-white px-5 py-3 text-sm uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
              data-cursor="hover"
            >
              View About
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/15 px-5 py-3 text-sm uppercase tracking-[0.2em] text-white/70 transition hover:border-white hover:text-white"
              data-cursor="hover"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-between gap-6">
        <div
          data-hero-indicator
          className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/46"
        >
          <span>Scroll right</span>
          <span data-scroll-arrow className="text-lg leading-none text-white/70">
            →
          </span>
        </div>

        <div className="hidden max-w-sm border border-white/10 bg-white/[0.03] p-5 lg:block">
          <div className="space-y-4">
            <InfoRow label="Location" value={resume.location} />
            <InfoRow label="Email" value={resume.email} />
            <InfoRow label="LinkedIn" value="rohan-kumar-595415276" />
            <InfoRow label="GitHub" value="Arcestor" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsPanel() {
  return (
    <Panel
      kicker="Selected Work"
      title="Projects"
      description="Machine learning systems, real-time interfaces, and product-minded engineering."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {resume.projects.map((project) => (
          <article
            key={project.title}
            className="group flex h-full flex-col justify-between border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/30 hover:bg-white/[0.06]"
            data-cursor="hover"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="max-w-md text-xl font-medium uppercase tracking-[0.04em] text-white">
                  {project.title}
                </h3>
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
                  {project.period}
                </span>
              </div>
              <p className="text-sm leading-7 text-white/70">{project.summary}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/48"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-6 text-sm leading-7 text-white/55">{project.highlights[0]}</p>
          </article>
        ))}
      </div>
    </Panel>
  );
}

function AboutPanel() {
  return (
    <Panel
      kicker="Capabilities"
      title="About"
      description="A portfolio built around applied AI, full-stack craft, and motion-led presentation."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border border-white/10 bg-white/[0.03] p-5">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-white/45">
            Education
          </p>
          <div className="space-y-4">
            {resume.education.map((item) => (
              <div
                key={item.label}
                className="flex items-start justify-between gap-4 border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
              >
                <div>
                  <p className="text-base font-medium text-white">{item.label}</p>
                  <p className="text-sm leading-6 text-white/60">{item.institution}</p>
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/45">
                  {item.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <SkillGroup title="Languages" items={resume.skills.languages} />
          <SkillGroup title="ML & AI" items={resume.skills.mlAi} />
          <SkillGroup title="Web" items={resume.skills.web} />
          <SkillGroup title="Infra" items={resume.skills.infra} />
        </div>
      </div>
    </Panel>
  );
}

function ContactPanel() {
  return (
    <Panel
      kicker="Get In Touch"
      title="Contact"
      description="Available for internships, research collaboration, and product development opportunities."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="border border-white/10 bg-white/[0.03] p-6">
          <div className="space-y-4">
            <InfoRow label="Email" value={resume.email} />
            <InfoRow label="Phone" value={resume.phone} />
            <InfoRow label="LinkedIn" value={resume.linkedin.replace("https://", "")} />
            <InfoRow label="GitHub" value={resume.github.replace("https://", "")} />
          </div>
        </div>

        <div className="flex flex-col justify-between border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm uppercase tracking-[0.22em] text-white/50">Contact</p>
          <p className="max-w-md text-lg leading-8 text-white/75">
            The hero and about structures are now aligned with the portfolio direction, with the
            homepage leading into the profile and contact flow.
          </p>
          <Link
            href={`mailto:${resume.email}`}
            className="mt-8 inline-flex w-fit rounded-full border border-white px-5 py-3 text-sm uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
            data-cursor="hover"
          >
            Email Rohan
          </Link>
        </div>
      </div>
    </Panel>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
      <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
        {label}
      </span>
      <span className="text-right text-sm text-white/80">{value}</span>
    </div>
  );
}

function SkillGroup({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="border border-white/10 bg-white/[0.03] p-5">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-white/45">
        {title}
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/55 transition duration-300 hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
            data-cursor="hover"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
