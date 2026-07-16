"use client";

import { Mail, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { profile } from "@/data/profile";
import { useI18n } from "@/lib/i18n/LocaleProvider";

const socials = [
  {
    label: "Email",
    href: `mailto:${profile.contact.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: profile.contact.linkedin,
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    href: profile.contact.github,
    icon: GitHubIcon,
  },
  {
    label: "Telegram",
    href: profile.contact.telegram,
    icon: Send,
  },
];

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-foreground-subtle">{t.footer.credit}</p>
        <div className="flex items-center gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground-muted transition-all duration-300 hover:border-border-strong hover:text-silver"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
