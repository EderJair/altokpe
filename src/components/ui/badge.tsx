import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "primary" | "success" | "outline";
};

const variantClasses = {
  default: "bg-foreground/5 text-foreground",
  primary: "bg-primary/10 text-primary",
  success: "bg-success/10 text-success",
  outline: "border border-foreground/15 text-foreground",
};

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
