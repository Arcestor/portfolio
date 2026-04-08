"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function RedirectHomeOnReload() {
  const router = useRouter();

  useEffect(() => {
    const navigationEntry = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;

    const isReload =
      navigationEntry?.type === "reload" ||
      ("navigation" in performance &&
        typeof performance.navigation?.type === "number" &&
        performance.navigation.type === 1);

    if (isReload) {
      router.replace("/");
    }
  }, [router]);

  return null;
}
