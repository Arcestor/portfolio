import { PanelFrame } from "@/components/home/shared";
import { ExperienceItem } from "@/data/resume";

export function ExperiencePanel({ experience }: { experience: ExperienceItem }) {
  return (
    <PanelFrame eyebrow="Experience / Timeline">
      <div className="grid flex-1 gap-8 lg:h-[calc(100vh-12rem)] lg:min-h-0 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-8">
        <div className="space-y-6" data-reveal>
          <p className="font-mono text-xs uppercase tracking-[0.34em] text-white/48">
            Internship Experience
          </p>
          <h2 className="max-w-[10ch] text-[clamp(3rem,7vw,6.6rem)] font-semibold uppercase leading-[0.9] tracking-[-0.06em] text-white">
            {experience.company}
          </h2>
          <p className="max-w-xl text-lg leading-8 text-white/72">
            Applied machine learning work focused on structured pipelines, model evaluation, and
            turning raw data into dependable experimentation.
          </p>
        </div>

        <div
          className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.04] p-5 sm:p-6 lg:h-full lg:p-7"
          data-reveal
        >
          <div className="pointer-events-none absolute bottom-7 left-7 top-7 w-px bg-white/10" />
          <div className="relative space-y-6 pl-6 sm:pl-8">
            <div className="grid gap-4 border-b border-white/10 pb-6 sm:grid-cols-[1fr_auto] sm:items-end">
              <div className="space-y-2">
                <p className="text-2xl font-medium uppercase tracking-[0.02em] text-white">
                  {experience.role}
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/46">
                  {experience.location}
                </p>
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/46">
                {experience.period}
              </p>
            </div>

            <div className="grid gap-3">
              {experience.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="relative rounded-[1.25rem] border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/68"
                >
                  <span className="absolute -left-[2.3rem] top-5 h-2.5 w-2.5 rounded-full bg-white" />
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PanelFrame>
  );
}
