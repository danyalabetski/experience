"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";
import { useI18n } from "@/lib/i18n/LocaleProvider";
import { pick } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

function ProjectIcon({ name, accent }: { name: string; accent: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-border bg-background-graphite">
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-80", accent)} />
      <span className="relative font-display text-sm font-semibold tracking-wide text-silver">
        {initials}
      </span>
    </div>
  );
}

export function Projects() {
  const { t, locale } = useI18n();

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <GlassCard
              key={project.id}
              delay={index * 0.06}
              className="group flex h-full flex-col"
            >
              <div className="mb-6 flex items-start justify-between gap-3">
                <ProjectIcon name={project.name} accent={project.accent} />
                <div className="flex flex-col items-end gap-2">
                  <Badge className="text-[11px]">
                    {pick(locale, project.category)}
                  </Badge>
                  {project.role === "lead" ? (
                    <Badge className="border-titanium/30 bg-titanium/10 text-[11px] text-silver">
                      {t.projects.leadBadge}
                    </Badge>
                  ) : null}
                </div>
              </div>

              <h3 className="font-display text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-silver">
                {project.name}
              </h3>
              <p className="mt-1 text-sm text-titanium">
                {pick(locale, project.tagline)}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-muted sm:text-[15px]">
                {pick(locale, project.description)}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              <div className="mt-7 flex items-center justify-between border-t border-border pt-5 text-sm text-foreground-subtle">
                <span>{t.projects.published}</span>
                {project.rating ? (
                  <span className="text-titanium">
                    {project.rating.toFixed(1)} ★
                    {project.reviewCount ? ` · ${project.reviewCount}` : ""}
                  </span>
                ) : null}
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
