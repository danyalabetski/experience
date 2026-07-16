"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { useI18n } from "@/lib/i18n/LocaleProvider";

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow={t.about.eyebrow}
              title={t.about.title}
              description={t.about.summary}
            />
            <div className="space-y-4 text-base leading-relaxed text-foreground-muted sm:text-lg">
              {t.about.paragraphs.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {t.about.tags.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <Badge>{item}</Badge>
                </motion.div>
              ))}
            </div>
          </div>

          <GlassCard className="h-fit self-center">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-titanium">
              {t.about.highlightsTitle}
            </p>
            <ul className="space-y-4">
              {t.about.achievements.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-foreground-muted sm:text-base"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-titanium" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </Container>
    </section>
  );
}
