import Link from "next/link";
import { PageFrame } from "@/components/page-frame";
import { resume } from "@/data/resume";

export default function ContactPage() {
  return (
    <PageFrame
      eyebrow="Contact"
      title="Let's Build"
      description="Reach out for internships, engineering collaboration, product work, or research-focused development."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <section className="space-y-6 border border-white/10 bg-white/[0.03] p-6">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-white/45">
              Direct
            </p>
            <div className="space-y-4 text-sm leading-7 text-white/72">
              <p>{resume.email}</p>
              <p>{resume.phone}</p>
              <p>{resume.location}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={resume.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white px-5 py-3 text-sm uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
              data-cursor="hover"
            >
              LinkedIn
            </Link>
            <Link
              href={resume.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-5 py-3 text-sm uppercase tracking-[0.2em] text-white/70 transition hover:border-white hover:text-white"
              data-cursor="hover"
            >
              GitHub
            </Link>
          </div>
        </section>

        <section className="border border-white/10 bg-white/[0.03] p-6">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-white/45">
            Focus Areas
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Machine learning prototypes and production pipelines",
              "Next.js portfolio and product interfaces",
              "Real-time applications and event-driven systems",
              "Recommendation systems and intelligent UX",
            ].map((item) => (
              <div key={item} className="border border-white/10 p-5 text-sm leading-7 text-white/72">
                {item}
              </div>
            ))}
          </div>
          <Link
            href={`mailto:${resume.email}`}
            className="mt-8 inline-flex rounded-full border border-white px-5 py-3 text-sm uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
            data-cursor="hover"
          >
            Send Email
          </Link>
        </section>
      </div>
    </PageFrame>
  );
}
