import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-glass px-3 py-1 text-xs font-medium tracking-wide text-titanium",
        className,
      )}
    >
      {children}
    </span>
  );
}
