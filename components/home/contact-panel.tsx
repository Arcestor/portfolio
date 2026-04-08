import Link from "next/link";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/home/icons";
import { MetricCard, PanelFrame, SocialLink } from "@/components/home/shared";
import { resume } from "@/data/resume";

export function ContactPanel() {
  return (
    <PanelFrame eyebrow="Contact">
      <div className="grid flex-1 gap-8 lg:h-[calc(100vh-12rem)] lg:min-h-0 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-8">
        <div className="space-y-8" data-reveal>
          <p className="font-mono text-xs uppercase tracking-[0.34em] text-white/48">
            Available for internships, AI product work, and engineering collaborations.
          </p>
          <h2 className="max-w-[9ch] text-[clamp(3.2rem,8vw,7.4rem)] font-semibold uppercase leading-[0.9] tracking-[-0.06em] text-white">
            Let&apos;s work together
          </h2>
          <Link
            href={`mailto:${resume.email}`}
            className="inline-block break-all text-[clamp(1.75rem,4.5vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.05em] text-white transition hover:text-white/78"
            data-cursor="hover"
          >
            {resume.email}
          </Link>
          <div className="flex flex-wrap gap-3">
            <SocialLink href={resume.github} label="GitHub">
              <GitHubIcon className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={resume.linkedin} label="LinkedIn">
              <LinkedInIcon className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={`mailto:${resume.email}`} label="Mail">
              <MailIcon className="h-5 w-5" />
            </SocialLink>
          </div>
        </div>

        <div className="grid gap-4 lg:h-full lg:min-h-0" data-reveal>
          <div className="rounded-[2rem] border border-white/12 bg-white/[0.04] p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/44">
              Reach out for
            </p>
            <div className="mt-5 grid gap-3">
              {[
                "AI / ML internships and privacy-focused research work",
                "Full-stack product development with modern UI motion",
                "Real-time platforms, recommendation engines, and prototyping",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] border border-white/10 bg-black/22 p-4 text-sm leading-7 text-white/70"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <MetricCard label="Based In" value={resume.location} />
            <MetricCard label="Open To" value="Remote / Hybrid" />
          </div>
        </div>
      </div>
    </PanelFrame>
  );
}
