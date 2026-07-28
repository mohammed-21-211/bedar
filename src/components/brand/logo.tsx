import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

type LogoProps = {
  /** "light" whitens the mark for dark surfaces (footer/hero). */
  variant?: "default" | "light";
  className?: string;
  /** Rendered height in px; width scales to the 341×104 aspect ratio. */
  height?: number;
  href?: string | null;
  priority?: boolean;
};

const ASPECT = 341 / 104;

export function Logo({
  variant = "default",
  className,
  height = 40,
  href = "/",
  priority = false,
}: LogoProps) {
  const width = Math.round(height * ASPECT);

  const img = (
    // Static local SVG brand mark — plain <img> avoids SVG optimization config.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={siteConfig.logo}
      alt={`${siteConfig.name} — ${siteConfig.tagline}`}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      className={cn(
        "h-auto w-auto select-none",
        variant === "light" && "brightness-0 invert",
        className,
      )}
      style={{ height, width }}
    />
  );

  if (href === null) return img;

  return (
    <Link
      href={href}
      aria-label={siteConfig.name}
      className="inline-flex items-center transition-opacity hover:opacity-80"
    >
      {img}
    </Link>
  );
}
