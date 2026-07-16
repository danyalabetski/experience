"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Particles } from "@/components/effects/Particles";
import { GradientOrbs } from "@/components/effects/GradientOrbs";
import { profile } from "@/data/profile";
import { useI18n } from "@/lib/i18n/LocaleProvider";

export function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28"
    >
      <GradientOrbs />
      <Particles count={42} />

      <Container className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 font-display text-sm font-medium tracking-[0.18em] text-titanium sm:text-base"
        >
          {profile.name}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl font-display text-[2.35rem] font-semibold leading-[1.08] tracking-tight text-gradient sm:text-5xl md:text-6xl lg:text-[4.25rem]"
        >
          {t.hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-foreground-muted sm:text-lg md:text-xl"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Button href="#projects" variant="primary">
            {t.hero.viewProjects}
            <ArrowDownRight size={16} />
          </Button>
          <Button href="#contact" variant="secondary">
            {t.hero.contactMe}
          </Button>
          <Button href={profile.resumeUrl} variant="ghost" download external>
            <Download size={16} />
            {t.hero.downloadResume}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-8 text-sm text-foreground-subtle"
        >
          <span>{t.hero.age}</span>
          <span>{t.hero.experience}</span>
          <span>{t.hero.apps}</span>
          <span>{t.hero.stack}</span>
        </motion.div>
      </Container>

      <div className="titanium-line pointer-events-none absolute bottom-0 left-0 h-px w-full" />
    </section>
  );
}
