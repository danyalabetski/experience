"use client";

import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { showcaseApps } from "@/data/projects";
import { useI18n } from "@/lib/i18n/LocaleProvider";
import { pick } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

export function AppStoreShowcase() {
  const { t, locale } = useI18n();
  const leadApps = showcaseApps.filter((app) => app.role === "lead");
  const contributedApps = showcaseApps.filter(
    (app) => app.role === "contributor",
  );

  return (
    <section id="apps" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(180,180,195,0.06),transparent_60%)]" />
      <Container className="relative">
        <SectionHeading
          eyebrow={t.apps.eyebrow}
          title={t.apps.title}
          description={t.apps.description}
          align="center"
          className="mx-auto"
        />

        <div className="mb-14">
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-titanium">
            {t.apps.leadGroup}
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {leadApps.map((app, index) => (
              <AppTile
                key={app.id}
                app={app}
                delay={index * 0.05}
                locale={locale}
                labels={{
                  appStore: t.apps.appStore,
                  shipped: t.apps.shipped,
                }}
                highlight
              />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-foreground-subtle">
            {t.apps.contributorGroup}
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contributedApps.map((app, index) => (
              <AppTile
                key={app.id}
                app={app}
                delay={index * 0.05}
                locale={locale}
                labels={{
                  appStore: t.apps.appStore,
                  shipped: t.apps.shipped,
                }}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function AppTile({
  app,
  delay,
  locale,
  labels,
  highlight = false,
}: {
  app: (typeof showcaseApps)[number];
  delay: number;
  locale: "en" | "ru";
  labels: { appStore: string; shipped: string };
  highlight?: boolean;
}) {
  const category = pick(locale, app.category);

  return (
    <GlassCard delay={delay} className={cn("!p-5", highlight && "min-h-[200px]")}>
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-border bg-background-graphite">
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br opacity-80",
              app.accent,
            )}
          />
          <span className="relative font-display text-xs font-semibold text-silver">
            {app.name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </span>
        </div>
        <Badge className="text-[10px]">{category.split("·")[0].trim()}</Badge>
      </div>

      <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
        {app.name}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">
        {pick(locale, app.tagline)}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {app.technologies.slice(0, 3).map((tech) => (
          <Badge key={tech} className="text-[10px]">
            {tech}
          </Badge>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-foreground-subtle">
        <span>{labels.appStore}</span>
        {app.rating ? (
          <span className="inline-flex items-center gap-1 text-titanium">
            <Star size={11} fill="currentColor" />
            {app.rating.toFixed(1)}
          </span>
        ) : (
          <span>{labels.shipped}</span>
        )}
      </div>
    </GlassCard>
  );
}
