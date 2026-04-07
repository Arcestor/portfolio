import { ReactNode } from "react";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_45%)]" />
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:72px_72px] opacity-40" />
      <div className="mx-auto flex min-h-screen w-full max-w-7xl px-6 py-10 sm:px-10 lg:px-16">
        {children}
      </div>
    </main>
  );
}
