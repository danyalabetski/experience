import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "div" | "section" | "footer" | "nav";
};

export function Container({
  children,
  className,
  id,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag id={id} className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
      {children}
    </Tag>
  );
}
