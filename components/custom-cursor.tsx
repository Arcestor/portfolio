"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dotRef.current || !ringRef.current || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const dotX = gsap.quickTo(dotRef.current, "x", { duration: 0.18, ease: "power3" });
    const dotY = gsap.quickTo(dotRef.current, "y", { duration: 0.18, ease: "power3" });
    const ringX = gsap.quickTo(ringRef.current, "x", { duration: 0.35, ease: "power3" });
    const ringY = gsap.quickTo(ringRef.current, "y", { duration: 0.35, ease: "power3" });

    const move = (event: MouseEvent) => {
      dotX(event.clientX);
      dotY(event.clientY);
      ringX(event.clientX);
      ringY(event.clientY);
    };

    const activate = () => {
      gsap.to(ringRef.current, { scale: 2.2, opacity: 0.9, duration: 0.2 });
    };

    const deactivate = () => {
      gsap.to(ringRef.current, { scale: 1, opacity: 0.45, duration: 0.2 });
    };

    const handleOver = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest('a, button, [data-cursor="hover"]')) {
        activate();
      }
    };

    const handleOut = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest('a, button, [data-cursor="hover"]')) {
        deactivate();
      }
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[110] hidden md:block">
      <div
        ref={ringRef}
        className="absolute left-0 top-0 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40"
      />
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
      />
    </div>
  );
}
