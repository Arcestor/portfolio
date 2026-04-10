"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { resume } from "@/data/resume";

type LoadingScreenProps = {
  onComplete: () => void;
};

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (!overlayRef.current || !counterRef.current || !nameRef.current) {
      return;
    }

    const letters = nameRef.current.querySelectorAll("[data-letter]");
    const counter = { value: 0 };
    const timeline = gsap.timeline();

    timeline
      .set(letters, { yPercent: 120, opacity: 0 })
      .to(counter, {
        value: 100,
        duration: 1.2,
        ease: "power2.out",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = String(Math.round(counter.value));
          }
        },
      })
      .to(
        letters,
        {
          yPercent: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: "power3.out",
        },
        0.16,
      )
      .to(overlayRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
        delay: 0.15,
        onComplete: () => onCompleteRef.current(),
      });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="pointer-events-none fixed inset-0 z-[120] flex flex-col justify-between overflow-hidden bg-black px-6 py-8 text-white sm:px-10 sm:py-10"
    >
      <div className="flex items-start justify-between text-xs uppercase tracking-[0.4em] text-white/50">
        <span>Loading</span>
        <span ref={counterRef}>0</span>
      </div>

      <div
        ref={nameRef}
        className="flex flex-wrap gap-x-2 overflow-hidden text-4xl font-semibold uppercase sm:text-6xl lg:text-8xl"
      >
        {resume.name.split("").map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            data-letter
            className={letter === " " ? "w-4 sm:w-6" : "inline-block"}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>
    </div>
  );
}
