import Link from "next/link";
import { GitHubIcon } from "@/components/home/icons";
import { PanelFrame } from "@/components/home/shared";
import { ProjectItem } from "@/data/resume";

export function ProjectPanel({
  project,
  index,
}: {
  project: ProjectItem;
  index: number;
}) {
  return (
    <PanelFrame eyebrow={`Project / ${String(index + 1).padStart(2, "0")}`}>
      <div className="grid flex-1 gap-6 lg:h-[calc(100vh-11rem)] lg:min-h-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:items-stretch lg:gap-6">
        <article
          className="group relative flex min-w-0 min-h-0 flex-col overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.04] p-4 transition duration-500 hover:translate-y-[-4px] hover:border-white/28 hover:bg-white/[0.06] sm:p-5 lg:h-full lg:p-6"
          data-cursor="hover"
          data-reveal
        >
          <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
            <div
              className="absolute -right-20 top-10 h-56 w-56 rounded-full blur-[96px]"
              style={{ background: project.accentTo }}
            />
            <div
              className="absolute -left-10 bottom-0 h-52 w-52 rounded-full blur-[90px]"
              style={{ background: project.accentFrom }}
            />
          </div>

          <div className="relative flex h-full min-h-0 flex-col justify-between gap-5">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div className="space-y-3">
                <span className="inline-flex rounded-full border border-white/14 bg-black/20 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.28em] text-white/62 sm:text-[10px] sm:tracking-[0.32em]">
                  {project.tag}
                </span>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/42 sm:text-[11px] sm:tracking-[0.3em]">
                  {project.period}
                </p>
              </div>

              <Link
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title} on GitHub`}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-black/25 text-white/74 transition hover:border-white/28 hover:bg-white hover:text-black"
                data-cursor="hover"
              >
                <GitHubIcon className="h-5 w-5" />
              </Link>
            </div>

            <div className="space-y-4">
              <div className="space-y-3">
                <h2 className="max-w-[8.4ch] text-[clamp(1.8rem,3.6vw,3.2rem)] font-semibold uppercase leading-[0.94] tracking-[-0.05em] text-white">
                  {project.title}
                </h2>
                <p className="max-w-xl text-sm leading-6 text-white/72 sm:text-[15px] sm:leading-7">
                  {project.summary}
                </p>
                <p className="max-w-xl text-[10px] uppercase leading-5 tracking-[0.16em] text-white/52 sm:text-[11px] sm:tracking-[0.18em]">
                  {project.outcome}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] text-white/56 sm:px-3 sm:text-[10px] sm:tracking-[0.24em]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="rounded-[1.4rem] border border-white/10 bg-black/18 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/46">
                  Build Notes
                </p>
                <ul className="mt-3 grid gap-2 text-[13px] leading-5 text-white/66 sm:text-sm sm:leading-6">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>

        <ProjectPreview project={project} index={index} />
      </div>
    </PanelFrame>
  );
}

function ProjectPreview({
  project,
  index,
}: {
  project: ProjectItem;
  index: number;
}) {
  return (
    <div
      className="group relative min-h-[320px] overflow-hidden rounded-[2rem] border border-white/12 bg-black/35 p-4 sm:p-5 lg:h-full lg:min-h-0 lg:p-6"
      data-cursor="hover"
      data-reveal
    >
      <div
        className="absolute inset-0 opacity-90 transition duration-500 group-hover:scale-[1.04]"
        style={{
          background: `radial-gradient(circle at 18% 18%, ${project.accentFrom}55, transparent 22%), radial-gradient(circle at 78% 24%, ${project.accentTo}50, transparent 24%), linear-gradient(145deg, rgba(255,255,255,0.08), transparent 40%), linear-gradient(180deg, rgba(7,10,15,0.92), rgba(5,6,10,0.98))`,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:42px_42px] opacity-30" />

      <div className="relative flex h-full min-h-0 flex-col justify-between gap-5">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45 sm:text-[11px] sm:tracking-[0.32em]">
              Hover Preview
            </p>
            <p className="text-lg font-medium uppercase leading-none tracking-[-0.03em] text-white sm:text-xl lg:text-[1.65rem]">
              {project.previewLabel}
            </p>
          </div>
          <div className="text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/38 sm:text-[11px] sm:tracking-[0.32em]">
              Project
            </p>
            <p className="text-4xl font-semibold leading-none tracking-[-0.08em] text-white/22 sm:text-5xl">
              {String(index + 1).padStart(2, "0")}
            </p>
          </div>
        </div>

        <div className="relative min-h-[210px] flex-1">
          <div className="relative h-full min-h-[280px]">
          <div
            className="absolute left-[10%] top-[10%] h-20 w-20 rounded-[1.5rem] border border-white/12 bg-white/6 backdrop-blur-md transition duration-500 group-hover:left-[12%] group-hover:top-[8%] group-hover:rotate-[-8deg] sm:h-24 sm:w-24 lg:h-28 lg:w-28"
            style={{ boxShadow: `0 0 60px ${project.accentFrom}22` }}
          />
          <div
            className="absolute right-[12%] top-[24%] h-24 w-24 rounded-full border border-white/12 bg-white/8 transition duration-500 group-hover:right-[10%] group-hover:scale-110 sm:h-32 sm:w-32 lg:h-36 lg:w-36"
            style={{ boxShadow: `0 0 70px ${project.accentTo}26` }}
          />
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-black/35 p-4 backdrop-blur-xl transition duration-500 group-hover:bg-black/45">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/46">
              Project Snapshot
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/72 sm:text-base sm:leading-7">
            {project.previewCaption}
          </p>
        </div>
      </div>
    </div>
  );
}
