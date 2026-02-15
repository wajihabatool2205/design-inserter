import { cn } from "@/lib/utils";

type PillVariant = "default" | "cyan" | "green" | "pink";

interface PillProps {
  children: React.ReactNode;
  variant?: PillVariant;
  href?: string;
  className?: string;
}

const variantClasses: Record<PillVariant, string> = {
  default: "bg-transparent border-foreground hover:bg-accent-yellow",
  cyan: "bg-accent-cyan border-accent-cyan",
  green: "bg-accent-green border-accent-green",
  pink: "bg-accent-pink border-accent-pink",
};

const Pill = ({ children, variant = "default", href, className }: PillProps) => {
  const classes = cn(
    "inline-flex items-center justify-center px-5 py-1.5 border rounded-full text-base font-medium text-foreground transition-all duration-200 cursor-pointer hover:-translate-y-0.5",
    variantClasses[variant],
    className
  );

  if (href) {
    return <a href={href} className={classes}>{children}</a>;
  }
  return <span className={classes}>{children}</span>;
};

export default Pill;
