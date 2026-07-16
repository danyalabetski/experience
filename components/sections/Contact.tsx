"use client";

import { Mail, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { profile } from "@/data/profile";
import { useI18n } from "@/lib/i18n/LocaleProvider";

export function Contact() {
  const { t } = useI18n();

  const channels = [
    {
      label: "Email",
      value: profile.contact.email,
      href: `mailto:${profile.contact.email}`,
      icon: Mail,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/labetskydaniel",
      href: profile.contact.linkedin,
      icon: LinkedInIcon,
    },
    {
      label: "GitHub",
      value: "github.com/danyalabetski",
      href: profile.contact.github,
      icon: GitHubIcon,
    },
    {
      label: "Telegram",
      value: profile.contact.telegramHandle,
      href: profile.contact.telegram,
      icon: Send,
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow={t.contact.eyebrow}
              title={t.contact.title}
              description={t.contact.description}
              className="mb-8"
            />
            <Button href={`mailto:${profile.contact.email}`} variant="primary">
              <Mail size={16} />
              {t.contact.writeEmail}
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {channels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <GlassCard key={channel.label} delay={index * 0.06} className="!p-5">
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      channel.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group block"
                  >
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-titanium transition-colors group-hover:border-border-strong group-hover:text-silver">
                      <Icon size={16} />
                    </div>
                    <p className="text-xs uppercase tracking-[0.16em] text-foreground-subtle">
                      {channel.label}
                    </p>
                    <p className="mt-1.5 break-all text-sm text-foreground transition-colors group-hover:text-silver">
                      {channel.value}
                    </p>
                  </a>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
