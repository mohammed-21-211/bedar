# بدار | Bedar — Community Entrepreneurship Platform

A modern, fully responsive, RTL Arabic **single-page landing site** for **Bedar (منصة بدار للريادة المجتمعية)**. Built on Next.js 15 (App Router), TypeScript (strict), Tailwind CSS, shadcn/ui (Radix), and Framer Motion. No backend required.

## Structure

The whole site is one landing page. Header items scroll (with scroll-spy highlighting) to in-page sections:

| Section | id |
| --- | --- |
| الرئيسية (Hero) | `#home` |
| من نحن (رسالتنا / رؤيتنا / قيمنا، المنهجية، الجمهور) | `#about` |
| بدار والريادة المجتمعية (المقارنة والمبادئ) | `#entrepreneurship` |
| الخدمات (8 خدمات) | `#services` |
| البرامج | `#programs` |
| تواصل معنا (بيانات التواصل + نموذج) | `#contact` |

Plus: keyword marquee, awareness-video dialog, impact counters band, footer with newsletter form. Contact/newsletter forms are client-side simulations — wire them to an API route or email provider when a backend is added.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # strict TS check
```

Optional env (`.env.local`):

```bash
NEXT_PUBLIC_SITE_URL=https://bedar.org   # used in metadata, sitemap, robots
```

## Layout of `src/`

```
src/
├── app/
│   ├── (site)/            # Landing page + site layout (header/footer)
│   ├── layout.tsx         # Root layout (Readex Pro font, metadata, RTL)
│   ├── globals.css        # Brand tokens + shared utility classes
│   ├── sitemap.ts / robots.ts / manifest.ts / opengraph-image.tsx
├── components/
│   ├── layout/            # SiteHeader (scroll-spy), SiteFooter, NewsletterForm
│   ├── sections/          # Hero, VideoSection
│   ├── forms/             # ContactForm (RHF + Zod)
│   ├── motion/            # Reveal, Marquee, Counter, WordReveal
│   ├── brand/             # Logo, BedarMark, SocialIcon
│   └── ui/                # shadcn/ui primitives (button, input, sheet, ...)
├── config/site.ts         # Brand metadata, section nav, social links
└── lib/utils.ts           # cn() helper
```
