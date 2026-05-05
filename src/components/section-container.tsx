import { cn } from "@/lib/utils";

type SectionContainerProps = React.HTMLAttributes<HTMLElement> & {
  as?: "section" | "header" | "footer" | "main" | "div";
};

export function SectionContainer({
  as: Tag = "section",
  className,
  children,
  ...props
}: SectionContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
