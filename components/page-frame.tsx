import { ReactNode } from "react";
import { RedirectHomeOnReload } from "@/components/redirect-home-on-reload";
import { SiteNav } from "@/components/site-nav";

type PageFrameProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function PageFrame({
  eyebrow,
  title,
  description,
  children,
}: PageFrameProps) {
  return (
    <>
      <RedirectHomeOnReload />
      <SiteNav />
      <main className="min-h-screen bg-background px-4 pb-16 pt-28 text-foreground sm:px-8 sm:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-5 border-b border-white/10 pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/50">
                {eyebrow}
              </p>
              <h1 className="text-4xl font-semibold uppercase tracking-[0.04em] sm:text-6xl">
                {title}
              </h1>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              {description}
            </p>
          </div>
          {children}
        </div>
      </main>
    </>
  );
}
