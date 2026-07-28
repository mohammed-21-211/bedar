/**
 * Central site configuration.
 * Single source of truth for brand metadata, navigation and social links.
 * The site is a single landing page — nav items point at in-page sections.
 */

export const siteConfig = {
  name: "هاكاثون واحة AI",
  nameEn: "Waha AI Hackathon",
  tagline: "منصة بدار",
  description:
    "ابتكر حلولاً ذكية لتحديات مجتمعية حقيقية باستخدام البيانات والذكاء الاصطناعي في دول الخليج — هاكاثون إقليمي افتراضي 100% وجوائز تصل إلى $13,500.",
  // Public base URL — override with NEXT_PUBLIC_SITE_URL in production.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bedar.org",
  locale: "ar",
  dir: "rtl" as const,
  email: "info@bedar.org",
  logo: "/brand/bedar-logo.svg",
  ogImage: "/opengraph-image",
} as const;

/** In-page section ids used by the header, footer and scroll-spy. */
export const sectionIds = [
  "home",
  "about",
  "goals",
  "tracks",
  "why",
  "stages",
  "panel",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];

export type NavItem = {
  title: string;
  /** Anchor href, e.g. "#about". */
  href: `#${SectionId}`;
  id: SectionId;
};

/** Header items — every one scrolls to a section on the landing page. */
export const mainNav: NavItem[] = [
  { title: "الرئيسية", href: "#home", id: "home" },
  { title: "عن الهاكاثون", href: "#about", id: "about" },
  { title: "الأهداف", href: "#goals", id: "goals" },
  { title: "المجالات", href: "#tracks", id: "tracks" },
  { title: "المراحل", href: "#stages", id: "stages" },
  { title: "المرشدون والحكام", href: "#panel", id: "panel" },
];

/** Flat list used by the footer. */
export const footerNav: { title: string; href: string }[] = [
  ...mainNav.map(({ title, href }) => ({ title, href })),
  { title: "التسجيل", href: "#contact" },
];

export type SocialLink = {
  label: string;
  href: string;
  icon: "facebook" | "instagram" | "linkedin" | "twitter";
};

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "https://www.facebook.com/bedarplatform", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/bedarplatform", icon: "instagram" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/bedar-platform", icon: "linkedin" },
  { label: "X", href: "https://x.com/bedarplatform", icon: "twitter" },
];
