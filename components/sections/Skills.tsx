"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { useI18n } from "@/lib/i18n/LocaleProvider";

export function Skills() {
  const { t } = useI18n();

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px titanium-line" />
      <Container>
        <SectionHeading
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          description={t.skills.description}
        />

        <div className="grid gap-5 md:grid-cols-3">
          {t.skills.categories.map((category, index) => (
            <GlassCard key={category.title} delay={index * 0.08} className="min-h-[280px]">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                  {category.title}
                </h3>
                <span className="text-xs text-foreground-subtle">
                  0{index + 1}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    className="border-border-strong/60 bg-background/40 text-foreground-muted"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2.5">
          <span className="mr-2 text-xs uppercase tracking-[0.18em] text-foreground-subtle">
            {t.skills.also}
          </span>
          {t.skills.extended.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </Container>
    </section>
  );
}
