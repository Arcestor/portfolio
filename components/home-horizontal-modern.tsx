"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContactPanel } from "@/components/home/contact-panel";
import { ExperiencePanel } from "@/components/home/experience-panel";
import { HeroPanel } from "@/components/home/hero-panel";
import { ProjectPanel } from "@/components/home/project-panel";
import { ScrollProgress } from "@/components/home/shared";
import { SiteNav } from "@/components/site-nav";
import { resume } from "@/data/resume";

gsap.registerPlugin(ScrollTrigger);

export function HomeHorizontalModern() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useLayoutEffect(() => {
    if (!wrapperRef.current || !trackRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      const animateReveals = (containerAnimation?: gsap.core.Tween) => {
        const items = gsap.utils.toArray<HTMLElement>("[data-reveal]");

        items.forEach((item) => {
          gsap.fromTo(
            item,
            { y: 44, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.82,
              ease: "power3.out",
              scrollTrigger: containerAnimation
                ? {
                    trigger: item,
                    containerAnimation,
                    start: "left 88%",
                    once: true,
                  }
                : {
                    trigger: item,
                    start: "top 88%",
                    once: true,
                  },
            },
          );
        });
      };

      mm.add("(min-width: 1024px)", () => {
        const getTotalScroll = () => Math.max(trackRef.current!.scrollWidth - window.innerWidth, 0);

        const horizontalTween = gsap.to(trackRef.current, {
          x: () => -getTotalScroll(),
          ease: "none",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top",
            end: () => `+=${getTotalScroll()}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => setProgress(self.progress),
          },
        });

        animateReveals(horizontalTween);

        return () => {
          setProgress(0);
        };
      });

      mm.add("(max-width: 1023px)", () => {
        const updateProgress = () => {
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          setProgress(maxScroll > 0 ? window.scrollY / maxScroll : 0);
        };

        updateProgress();
        animateReveals();
        window.addEventListener("scroll", updateProgress, { passive: true });

        return () => {
          window.removeEventListener("scroll", updateProgress);
        };
      });

      return () => mm.revert();
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SiteNav />
      <ScrollProgress progress={progress} />
      <main className="overflow-clip bg-background text-foreground">
        <div ref={wrapperRef} className="relative">
          <div
            ref={trackRef}
            className="flex min-h-screen flex-col lg:h-screen lg:min-h-0 lg:flex-row"
          >
            <HeroPanel />
            {resume.projects.map((project, index) => (
              <ProjectPanel key={project.title} project={project} index={index} />
            ))}
            <ExperiencePanel experience={resume.experience[0]} />
            <ContactPanel />
          </div>
        </div>
      </main>
    </>
  );
}
