import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  tone?: "default" | "light";
  className?: string;
};

/** Consistent section header: small eyebrow label, title, optional lead text. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
  tone = "default",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
            tone === "light"
              ? "bg-white/10 text-brand-mint"
              : "bg-secondary/50 text-accent",
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "text-balance text-3xl font-bold leading-tight sm:text-4xl",
          tone === "light" ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-pretty text-base leading-8",
            tone === "light" ? "text-brand-mint-soft/80" : "text-muted-foreground",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
