"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { useI18n } from "@/lib/i18n/LocaleProvider";

export function WhyWorkWithMe() {
  const { t } = useI18n();

  return (
    <section id="why" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px titanium-line" />
      <Container>
        <SectionHeading
          eyebrow={t.why.eyebrow}
          title={t.why.title}
          description={t.why.description}
        />

        <div className="grid gap-5 md:grid-cols-3">
          {t.why.cards.map((item, index) => (
            <GlassCard key={item.title} delay={index * 0.08} className="min-h-[220px]">
              <span className="font-display text-sm tracking-[0.2em] text-foreground-subtle">
                0{index + 1}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted sm:text-[15px]">
                {item.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
