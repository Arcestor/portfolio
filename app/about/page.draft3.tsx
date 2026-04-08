import { PageFrame } from "@/components/page-frame";
import { resume } from "@/data/resume";

export default function AboutPage() {
  return (
    <PageFrame
      eyebrow="Profile"
      title="About"
      description="A tighter profile page focused on biography, technical range, education, and certifications."
    >
      <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
        <section className="space-y-8 border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-white/45">
              Bio
            </p>
            <p className="text-lg leading-8 text-white/78">{resume.summary}</p>
          </div>

          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-white/45">
              Education
            </p>
            <div className="space-y-6">
              {resume.education.map((item) => (
                <div key={item.label} className="relative border-l border-white/15 pl-6">
                  <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-white" />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-medium uppercase tracking-[0.04em] text-white">
                        {item.label}
                      </h2>
                      <p className="mt-1 text-sm leading-6 text-white/60">{item.institution}</p>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/45">
                      {item.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6">
          <div className="border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-white/45">
              Skills
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              <SkillBlock title="Languages" items={resume.skills.languages} />
              <SkillBlock title="ML / AI" items={resume.skills.mlAi} />
              <SkillBlock title="Web" items={resume.skills.web} />
              <SkillBlock title="Infra" items={resume.skills.infra} />
            </div>
          </div>

          <div className="border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-white/45">
              Certifications
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {resume.certifications.map((item) => (
                <article
                  key={item.title}
                  className="border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:border-white/25 hover:bg-white/[0.05]"
                >
                  <h3 className="text-lg font-medium text-white">{item.title}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/48">
                    {item.issuer}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/68">{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageFrame>
  );
}

function SkillBlock({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <section className="border border-white/10 bg-black/20 p-5">
      <p className="mb-4 text-sm uppercase tracking-[0.24em] text-white/52">{title}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/62 transition duration-300 hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
