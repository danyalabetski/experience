"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { experience } from "@/data/experience";
import { useI18n } from "@/lib/i18n/LocaleProvider";
import { pick } from "@/lib/i18n/config";

export function Experience() {
  const { t, locale } = useI18n();

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px titanium-line" />
      <Container>
        <SectionHeading
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          description={t.experience.description}
        />

        <div className="relative space-y-5 before:absolute before:bottom-4 before:left-[11px] before:top-4 before:w-px before:bg-gradient-to-b before:from-border-strong before:via-border before:to-transparent md:before:left-[15px]">
          {experience.map((item, index) => (
            <GlassCard
              key={item.id}
              delay={index * 0.06}
              className="relative ml-8 md:ml-10"
            >
              <span className="absolute -left-[2.15rem] top-8 h-3 w-3 rounded-full border border-titanium/50 bg-background-graphite shadow-[0_0_12px_rgba(200,200,210,0.35)] md:-left-[2.65rem] md:h-3.5 md:w-3.5" />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                    {pick(locale, item.role)}
                  </h3>
                  <p className="mt-1 text-sm text-titanium">{item.company}</p>
                </div>
                <p className="shrink-0 text-xs uppercase tracking-[0.14em] text-foreground-subtle">
                  {pick(locale, item.period)}
                </p>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-foreground-muted sm:text-[15px]">
                {pick(locale, item.summary)}
              </p>

              <ul className="mt-5 space-y-2.5">
                {pick(locale, item.responsibilities).map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-foreground-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-titanium/80" />
                    {point}
                  </li>
                ))}
              </ul>

              {item.stack ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              ) : null}
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
