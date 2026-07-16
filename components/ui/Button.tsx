"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  download?: boolean;
  external?: boolean;
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  download,
  external,
}: ButtonProps) {
  const styles = {
    primary:
      "bg-silver text-background hover:bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_32px_-8px_rgba(232,232,237,0.35)]",
    secondary:
      "glass glass-hover text-foreground hover:text-white",
    ghost:
      "border border-border text-foreground-muted hover:border-border-strong hover:text-foreground bg-transparent",
  } as const;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300",
    styles[variant],
    className,
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        download={download || undefined}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={classes}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
