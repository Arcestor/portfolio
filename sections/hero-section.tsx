import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { resume } from "@/data/resume";

export function HeroSection() {
  const coreSkills = [
    ...resume.skills.languages,
    ...resume.skills.mlAi,
    ...resume.skills.web,
    ...resume.skills.infra,
  ].slice(0, 6);

  return (
    <SiteShell>
      <section className="flex w-full flex-col justify-between gap-16 border border-border bg-surface/70 p-8 backdrop-blur sm:p-12 lg:min-h-[calc(100vh-5rem)] lg:flex-row lg:gap-12">
        <div className="flex max-w-3xl flex-col justify-between gap-12">
          <div className="space-y-6">
            <p className="font-mono text-sm uppercase tracking-[0.32em] text-muted">
              Portfolio
            </p>
            <div className="space-y-4">
              <h1 className="max-w-2xl text-5xl font-semibold leading-tight text-balance sm:text-6xl lg:text-7xl">
                {resume.name}
              </h1>
              {resume.heroSubtitle ? (
                <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                  {resume.heroSubtitle}
                </p>
              ) : null}
            </div>
            <p className="max-w-2xl text-base leading-8 text-foreground/80">
              {resume.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              className="rounded-full border border-white px-5 py-3 text-sm font-medium transition hover:bg-white hover:text-black"
              href={resume.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
            <Link
              className="rounded-full border border-border px-5 py-3 text-sm font-medium text-muted transition hover:border-white hover:text-white"
              href={resume.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Link>
          </div>
        </div>

        <div className="flex w-full max-w-md flex-col justify-between gap-8 border border-border bg-background/80 p-6">
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-muted">
                Contact
              </p>
              <div className="mt-4 space-y-3 text-sm text-foreground/80">
                <p>{resume.email}</p>
                <p>{resume.phone}</p>
                <p>{resume.location}</p>
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-muted">
                Core stack
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
            Hero content, profile structure, and the revised portfolio data model are ready.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
