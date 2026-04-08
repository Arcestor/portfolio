"use client";

import { ReactNode, useEffect, useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { CustomCursor } from "@/components/custom-cursor";
import { LoadingScreen } from "@/components/loading-screen";

type SiteExperienceProps = {
  children: ReactNode;
};

export function SiteExperience({ children }: SiteExperienceProps) {
  const pathname = usePathname();
  const [showLoader, setShowLoader] = useState(true);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowLoader(false), 1900);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    setDisplayChildren(children);
  }, [children, pathname]);

  useEffect(() => {
    if (!("scrollRestoration" in window.history)) {
      return;
    }

    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <>
      <CustomCursor />
      <LoadingScreen visible={showLoader} />
      <div className="relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {displayChildren}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence initial={false}>
          <RouteWipe key={pathname} />
        </AnimatePresence>
      </div>
    </>
  );
}

function RouteWipe() {
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[90] bg-white"
      initial={{ y: "100%" }}
      animate={{ y: ["100%", "0%", "-100%"] }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, times: [0, 0.45, 1], ease: [0.83, 0, 0.17, 1] }}
    />
  );
}
