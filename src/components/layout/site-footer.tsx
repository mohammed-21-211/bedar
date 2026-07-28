import { Mail } from "lucide-react";
import { footerNav, siteConfig, socialLinks } from "@/config/site";
import { Logo } from "@/components/brand/logo";
import { SocialIcon } from "@/components/brand/social-icon";
import { NewsletterForm } from "./newsletter-form";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="brand-surface border-t border-white/10">
      <div className="container-page py-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand + social */}
          <div className="lg:col-span-5">
            <Logo variant="light" height={44} href={null} />
            <p className="mt-6 max-w-sm text-sm leading-8 text-brand-mint-soft/80">
              هاكاثون واحة AI — هاكاثون إقليمي افتراضي من منصة بدار، إحدى منصات
              مؤسسة منار للمشاركة المجتمعية، لابتكار حلول ذكية لتحديات مجتمعية
              حقيقية باستخدام البيانات والذكاء الاصطناعي.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm text-brand-mint transition-colors hover:text-white"
            >
              <Mail className="size-4" />
              <span dir="ltr">{siteConfig.email}</span>
            </a>
            <ul className="mt-7 flex items-center gap-3">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex size-10 items-center justify-center rounded-full bg-white/10 text-brand-mint-soft transition-colors hover:bg-brand-mint hover:text-brand-deep"
                  >
                    <SocialIcon name={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section links */}
          <nav className="lg:col-span-3" aria-label="أقسام الصفحة">
            <h3 className="text-sm font-semibold text-white">أقسام الصفحة</h3>
            <ul className="mt-5 space-y-3.5 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-brand-mint-soft/75 transition-colors hover:text-brand-mint"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold text-white">النشرة البريدية</h3>
            <p className="mt-5 text-sm leading-8 text-brand-mint-soft/75">
              اشترك ليصلك جديد البرامج والمبادرات أولاً بأول.
            </p>
            <div className="mt-5">
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs leading-6 text-brand-mint-soft/60 sm:flex-row sm:text-right">
          <p>
            © {year} {siteConfig.tagline}. جميع الحقوق محفوظة.
          </p>
          <p>صُمّم وطُوّر بعناية بهوية بدار.</p>
        </div>
      </div>
    </footer>
  );
}
