import {
  ArrowUpLeft,
  BrainCircuit,
  ChevronDown,
  Lightbulb,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BedarMark } from "@/components/brand/bedar-mark";

/** Floating glass chips that orbit the brand mark in the visual column. */
const chips = [
  {
    icon: Lightbulb,
    title: "فكرة",
    desc: "من تحدٍ مجتمعي حقيقي",
    className: "right-0 top-4 sm:right-2 sm:top-6",
    delay: "0.9s",
    floatDelay: "0s",
  },
  {
    icon: BrainCircuit,
    title: "بيانات + AI",
    desc: "نموذج أولي قابل للتطبيق",
    className: "left-0 top-24 sm:top-28",
    delay: "1.05s",
    floatDelay: "1.4s",
  },
  {
    icon: Users,
    title: "إرشاد",
    desc: "خبراء ومختصون",
    className: "right-2 bottom-24 sm:right-6 sm:bottom-28",
    delay: "1.2s",
    floatDelay: "2.8s",
  },
  {
    icon: TrendingUp,
    title: "أثر مجتمعي",
    desc: "حلول قابلة للتطبيق",
    className: "left-2 bottom-2 sm:left-4 sm:bottom-4",
    delay: "1.35s",
    floatDelay: "2s",
  },
];

/**
 * Hackathon hero. Entrances are pure CSS (`animate-fade-up` + delays) so no
 * animation library ships to the client; heavy blur layers render on
 * desktop only to keep mobile paint cheap.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="brand-gradient grain relative -mt-16 flex min-h-dvh items-center overflow-hidden md:-mt-20"
    >
      {/* Atmosphere */}
      <div className="dot-grid absolute inset-0 opacity-30" aria-hidden />
      <div
        className="aurora-blob right-[-140px] top-[-120px] hidden size-[520px] md:block"
        aria-hidden
      />
      <div
        className="aurora-blob bottom-[-180px] left-[-100px] hidden size-[460px] md:block"
        aria-hidden
      />

      <div className="container-page relative w-full pb-20 pt-28 md:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Copy column */}
          <div className="max-w-2xl">
            <h1
              className="animate-fade-up text-balance text-[2.6rem] font-black !leading-[1.25] text-white sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "0.1s" }}
            >
              هاكاثون <span className="text-gradient">واحة AI</span>
            </h1>

            <p
              className="mt-6 max-w-xl animate-fade-up text-pretty text-base !leading-[2.2] text-brand-mint-soft/85 sm:mt-8 sm:text-lg md:text-xl"
              style={{ animationDelay: "0.25s" }}
            >
              ابتكر حلولاً ذكية لتحديات مجتمعية حقيقية باستخدام البيانات والذكاء
              الاصطناعي في دول الخليج
            </p>

            {/* Quick facts from the brief */}
            <div
              className="mt-8 flex animate-fade-up flex-wrap items-center gap-3"
              style={{ animationDelay: "0.4s" }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                ✨ عن بُعد 100%
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-mint/15 px-4 py-2 text-sm font-semibold text-brand-mint">
                <Trophy className="size-4" />
                جوائز تصل إلى <span dir="ltr">$13,500</span>
              </span>
            </div>

            <div
              className="mt-9 flex animate-fade-up flex-col gap-3 sm:mt-11 sm:flex-row sm:flex-wrap sm:gap-4"
              style={{ animationDelay: "0.55s" }}
            >
              <Button
                asChild
                size="lg"
                className="group w-full rounded-full px-8 text-base shadow-glow transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                <a href="#contact">
                  نافس وسجّل الآن!
                  <ArrowUpLeft className="size-5 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-0.5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full rounded-full border-brand-mint/30 bg-transparent px-8 text-base text-white hover:bg-white/10 hover:text-white sm:w-auto"
              >
                <a href="#about">عن الهاكاثون</a>
              </Button>
            </div>
          </div>

          {/* Visual column — brand mark with orbiting journey chips.
              Visible on all screens; scaled down on mobile. */}
          <div
            className="relative mx-auto aspect-square w-full max-w-[340px] animate-fade-up sm:max-w-[440px] lg:max-w-[520px]"
            style={{ animationDelay: "0.45s" }}
            aria-hidden
          >
            {/* Halo + dashed orbit (halo blur desktop-only) */}
            <div className="absolute inset-8 hidden rounded-full bg-brand-teal/20 blur-3xl md:block" />
            <div className="absolute inset-4 animate-spin-slow rounded-full border border-dashed border-brand-mint/20" />
            <div className="absolute inset-16 rounded-full border border-brand-mint/10" />

            {/* Central mark */}
            <div className="absolute inset-0 flex items-center justify-center">
              <BedarMark className="h-[58%] w-auto animate-float text-brand-mint/25 sm:h-[62%] md:drop-shadow-[0_0_60px_hsl(165_48%_77%/0.25)]" />
            </div>

            {/* Floating chips */}
            {chips.map((chip) => (
              <div
                key={chip.title}
                className={`absolute animate-fade-up ${chip.className}`}
                style={{ animationDelay: chip.delay }}
              >
                <div
                  className="flex animate-float items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.07] px-3 py-2.5 shadow-soft-lg sm:gap-3 sm:px-4 sm:py-3 md:backdrop-blur-md"
                  style={{ animationDelay: chip.floatDelay }}
                >
                  <span className="flex size-8 items-center justify-center rounded-xl bg-brand-mint/15 text-brand-mint sm:size-10">
                    <chip.icon className="size-4 sm:size-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold text-white sm:text-sm">
                      {chip.title}
                    </span>
                    <span className="block text-[10px] text-brand-mint-soft/70 sm:text-xs">
                      {chip.desc}
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-fade-up"
        style={{ animationDelay: "1.4s" }}
        aria-hidden
      >
        <a
          href="#about"
          className="flex animate-float flex-col items-center gap-1 text-brand-mint/60"
        >
          <span className="text-[11px] tracking-widest">اكتشف المزيد</span>
          <ChevronDown className="size-4" />
        </a>
      </div>
    </section>
  );
}
