import {
  ArrowUpLeft,
  BrainCircuit,
  Briefcase,
  ClipboardCheck,
  Compass,
  Flag,
  Gavel,
  HeartPulse,
  Landmark,
  Layers,
  Leaf,
  Lightbulb,
  Network,
  Presentation,
  Rocket,
  Sparkles,
  Target,
  Trophy,
  UserRound,
  Users,
  Wrench,
} from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Reveal } from "@/components/motion/reveal";
import { Counter } from "@/components/motion/counter";
import { BedarMark } from "@/components/brand/bedar-mark";
import { SectionHeading } from "@/components/ui/section-heading";
import { RegistrationForm } from "@/components/forms/registration-form";
import { Button } from "@/components/ui/button";

/* ------------------------------------------------------------------ */
/* Content — verbatim from the approved brief                          */
/* ------------------------------------------------------------------ */

const goals = [
  {
    icon: Target,
    title: "فهم المشكلات المجتمعية",
    desc: "الانتقال من ملاحظة المشكلة إلى تحليلها وفهم أسبابها الحقيقية بالاعتماد على البيانات والمؤشرات القابلة للقياس.",
  },
  {
    icon: Wrench,
    title: "تطوير حلول تقنية قابلة للتطبيق",
    desc: "تصميم نماذج أولية (Prototype) تستخدم الذكاء الاصطناعي لمعالجة تحديات مجتمعية واقعية.",
  },
  {
    icon: Rocket,
    title: "تحويل الأفكار إلى مبادرات",
    desc: "بناء حلول يمكن تطويرها لاحقًا إلى مبادرات مجتمعية مستقلة وقابلة للتنفيذ على أرض الواقع.",
  },
  {
    icon: Layers,
    title: "تعزيز مهارات المشاركين",
    desc: "تزويد الفرق بخبرة عملية في تحليل المشكلات، واستخدام البيانات، والعمل الجماعي، وتصميم حلول قائمة على الأثر.",
  },
  {
    icon: Compass,
    title: "الاستفادة من الإرشاد المتخصص",
    desc: "الحصول على دعم وإرشاد مباشر من خبراء ومختصين لمساعدة الفرق على تطوير أفكارها وتحسين نماذجها.",
  },
];

const tracks = [
  {
    icon: Leaf,
    title: "البيئة والسلوك البيئي",
    desc: "حلول تساعد على فهم السلوكيات البيئية وتعزيز الممارسات المستدامة، مثل إدارة النفايات، والاستهلاك المسؤول، والوعي البيئي، أو التحديات المرتبطة بالمناخ والموارد.",
  },
  {
    icon: HeartPulse,
    title: "الصحة العامة والنفسية",
    desc: "أفكار وتقنيات تساهم في دعم جودة الحياة والصحة النفسية والجسدية، وتحسين الوصول إلى المعلومات أو الخدمات ذات الصلة.",
  },
  {
    icon: Briefcase,
    title: "التوجيه المهني للشباب",
    desc: "حلول تساعد الشباب على فهم مساراتهم المهنية، وتطوير مهاراتهم، واتخاذ قرارات أكثر وعيًا بشأن التعليم والعمل وفرص المستقبل.",
  },
];

const whyJoin = [
  {
    icon: Lightbulb,
    title: "طوّر فكرة ذات أثر",
    desc: "اعمل على مشكلة حقيقية تهم مجتمعك، وشارك في بناء حل يمكن أن يتحول إلى مبادرة قابلة للتطبيق.",
  },
  {
    icon: Users,
    title: "تعلّم من خبراء ومتخصصين",
    desc: "احصل على إرشاد مباشر من خبراء ومرشدين يساعدونك خلال جميع مراحل الهاكاثون.",
  },
  {
    icon: BrainCircuit,
    title: "طوّر مهارات عملية مطلوبة",
    desc: "اكتسب خبرة عملية في التفكير التحليلي، والعمل الجماعي، واستخدام البيانات والذكاء الاصطناعي في سياقات واقعية.",
  },
  {
    icon: Network,
    title: "كوّن شبكة علاقات جديدة",
    desc: "تعاون مع مشاركين من مختلف دول الخليج، وتعرّف على أشخاص يشاركونك الاهتمام بصناعة أثر مجتمعي.",
  },
  {
    icon: Trophy,
    title: "نافس على جوائز بقيمة 13,500 دولار",
    desc: "قدّم فكرتك أمام لجنة تحكيم متخصصة، ونافس على جوائز تدعم تطوير الحلول الواعدة.",
  },
];

const stages = [
  {
    icon: ClipboardCheck,
    title: "التسجيل والقبول",
    desc: "تعبئة طلب المشاركة ومراجعة الطلبات لاختيار المشاركين والفرق المؤهلة من دول الخليج العربي (للمواطنين والمقيمين).",
  },
  {
    icon: Flag,
    title: "الانطلاق وتحديد المشكلة",
    desc: "يبدأ المشاركون بفهم المشكلة المجتمعية التي يعملون عليها، وتوثيقها بالبيانات والمؤشرات القابلة للقياس.",
  },
  {
    icon: Compass,
    title: "الإرشاد والتطوير",
    desc: "تتلقى الفرق جلسات إرشاد ودعم فني ومنهجي لمساعدتها على تحليل المشكلة وتطوير نموذج أولي للحل.",
  },
  {
    icon: Wrench,
    title: "تطوير النموذج الأولي",
    desc: "تعمل الفرق على بناء نموذج أو تدخل قائم على البيانات والذكاء الاصطناعي يعالج المشكلة بصورة عملية وقابلة للتطبيق.",
  },
  {
    icon: Presentation,
    title: "العروض النهائية والتحكيم",
    desc: "تقدّم الفرق مشاريعها أمام لجنة تحكيم متخصصة، وتتنافس على الجوائز وفرص تطوير الحلول الواعدة.",
  },
];

/** Mentors & judges — names to be announced. */
const mentorSlots = [1, 2, 3];
const judgeSlots = [1, 2, 3];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      {/* ============ الرئيسية ============ */}
      <Hero />

      {/* ============ عن الهاكاثون ============ */}
      <section id="about" className="scroll-mt-20 md:scroll-mt-24">
        <div className="container-page py-20 sm:py-24 md:py-32">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="عن الهاكاثون"
              title="عن هاكاثون واحة AI"
            />
          </Reveal>

          <div className="mx-auto mt-10 max-w-3xl md:mt-14">
            <Reveal>
              <p className="text-pretty text-center text-base !leading-[2.3] text-foreground/90 sm:text-lg">
                هو هاكاثون إقليمي افتراضي يهدف إلى تمكين شباب الخليج (المواطنين
                والمقيمين) من ابتكار حلول تقنية لمشكلات مجتمعية حقيقية باستخدام
                البيانات والذكاء الاصطناعي. ينطلق المشاركون من تحديات يلاحظونها
                أو يعيشونها في مجتمعاتهم، ليعملوا على فهمها وتحليلها وبناء نماذج
                أولية لحلول قابلة للتطبيق.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 text-pretty text-center text-base !leading-[2.3] text-muted-foreground sm:text-lg">
                يركّز الهاكاثون على تطوير أفكار عملية قابلة للقياس والتنفيذ، بما
                يسهم في تحويل البيانات والذكاء الاصطناعي إلى أدوات لصناعة أثر
                مجتمعي ملموس.
              </p>
            </Reveal>

            {/* Key facts */}
            <Reveal delay={0.15}>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-12">
                <div className="flex items-center justify-center gap-3 rounded-3xl border border-border bg-card p-6 text-lg font-bold shadow-soft">
                  <Sparkles className="size-6 shrink-0 text-accent" />
                  <span>
                    ✨ عن بُعد <span dir="ltr">100%</span>
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3 rounded-3xl border border-brand-mint/40 bg-secondary/30 p-6 text-lg font-bold shadow-soft">
                  <Trophy className="size-6 shrink-0 text-accent" />
                  <span>
                    🏆 جوائز تصل إلى <span dir="ltr">$13,500</span>
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Quick numbers */}
            <Reveal delay={0.2}>
              <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8 text-center md:mt-12">
                {[
                  { value: 13500, prefix: "$", label: "إجمالي الجوائز" },
                  { value: 3, label: "مجالات رئيسية" },
                  { value: 5, label: "مراحل عملية" },
                ].map((s, i) => (
                  <div key={s.label}>
                    <dt className="text-2xl font-black text-accent sm:text-4xl">
                      <Counter
                        value={s.value}
                        prefix={s.prefix ?? ""}
                        duration={1.6 + i * 0.2}
                      />
                    </dt>
                    <dd className="mt-2 text-xs text-muted-foreground sm:text-sm">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ أهداف الهاكاثون ============ */}
      <section
        id="goals"
        className="brand-surface grain relative scroll-mt-20 overflow-hidden md:scroll-mt-24"
      >
        <div className="dot-grid absolute inset-0 opacity-20" aria-hidden />
        <div className="container-page relative py-20 sm:py-24 md:py-32">
          <Reveal>
            <SectionHeading
              tone="light"
              align="center"
              eyebrow="الأهداف"
              title="أهداف الهاكاثون"
              description="خلال الهاكاثون، يعمل المشاركون على:"
            />
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6 md:mt-16 lg:grid-cols-3">
            {goals.map((g, i) => (
              <Reveal
                key={g.title}
                delay={(i % 3) * 0.07}
                className={i === 4 ? "sm:col-span-2 lg:col-span-1" : undefined}
              >
                <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-7 transition-colors hover:bg-white/10 sm:p-8">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-mint/15 text-brand-mint">
                    <g.icon className="size-6" />
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-white">{g.title}</h3>
                  <p className="mt-3 text-sm leading-8 text-brand-mint-soft/80">
                    {g.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ مجالات الهاكاثون ============ */}
      <section id="tracks" className="scroll-mt-20 md:scroll-mt-24">
        <div className="container-page py-20 sm:py-24 md:py-32">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="المجالات"
              title="مجالات الهاكاثون"
              description="يركّز الهاكاثون على تطوير حلول قائمة على البيانات والذكاء الاصطناعي لمعالجة تحديات مجتمعية حقيقية ضمن ثلاثة مجالات رئيسية:"
            />
          </Reveal>

          <div className="mt-12 grid gap-5 sm:gap-6 md:mt-16 lg:grid-cols-3">
            {tracks.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.08}>
                <div className="group h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft-lg sm:p-9">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-secondary/60 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                    <t.icon className="size-7" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{t.title}</h3>
                  <p className="mt-4 text-sm leading-8 text-muted-foreground">
                    {t.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ لماذا عليك الانضمام؟ ============ */}
      <section id="why" className="scroll-mt-20 bg-muted/40 md:scroll-mt-24">
        <div className="container-page py-20 sm:py-24 md:py-32">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="لماذا الانضمام؟"
              title="لماذا عليك الانضمام؟"
              description="لأن هاكاثون واحة AI ليس مجرد منافسة تقنية، بل مساحة عملية لتحويل التحديات المجتمعية إلى حلول قابلة للتطبيق باستخدام البيانات والذكاء الاصطناعي."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6 md:mt-16 lg:grid-cols-3">
            {whyJoin.map((w, i) => (
              <Reveal
                key={w.title}
                delay={(i % 3) * 0.07}
                className={i === 4 ? "sm:col-span-2 lg:col-span-1" : undefined}
              >
                <div className="flex h-full items-start gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft transition-colors duration-300 hover:border-accent/40 sm:gap-5 sm:p-7">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary/60 text-accent">
                    <w.icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">{w.title}</h3>
                    <p className="mt-2 text-sm leading-8 text-muted-foreground">
                      {w.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ دعوة للتسجيل (1) ============ */}
      <section className="brand-gradient grain relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-20" aria-hidden />
        <div className="container-page relative py-16 text-center sm:py-20 md:py-24">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-balance text-3xl font-black !leading-[1.5] text-white sm:text-4xl">
              انضم إلى هاكاثون واحة AI
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-base !leading-[2.2] text-brand-mint-soft/85 sm:text-lg">
              وحوّل فهمك للتحديات المجتمعية إلى حلول ذكية قابلة للتطبيق.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="rounded-full px-10 text-base shadow-glow"
              >
                <a href="#contact">
                  نافس وسجّل الآن!
                  <ArrowUpLeft className="size-5" />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ مراحل الهاكاثون ============ */}
      <section id="stages" className="scroll-mt-20 md:scroll-mt-24">
        <div className="container-page py-20 sm:py-24 md:py-32">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="المراحل"
              title="مراحل الهاكاثون"
              description="يمرّ المشاركون بمراحل عدّة عملية تبدأ من فهم المشكلة وتنتهي بعرض الحلول أمام لجنة التحكيم."
            />
          </Reveal>

          <ol className="relative mx-auto mt-12 max-w-3xl space-y-6 md:mt-16">
            {stages.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <li className="relative flex items-start gap-5 rounded-3xl border border-border bg-card p-6 shadow-soft sm:gap-6 sm:p-8">
                  <div className="flex flex-col items-center">
                    <span
                      dir="ltr"
                      className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-lg font-black text-accent-foreground"
                    >
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <s.icon className="size-5 text-accent" />
                      <h3 className="text-lg font-bold">{s.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-8 text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ لوحة المرشدون والحكام ============ */}
      <section
        id="panel"
        className="brand-surface grain relative scroll-mt-20 overflow-hidden md:scroll-mt-24"
      >
        <div className="dot-grid absolute inset-0 opacity-20" aria-hidden />
        <BedarMark className="absolute -left-10 -top-14 hidden h-64 w-auto rotate-12 text-brand-mint/[0.06] md:block" />
        <div className="container-page relative py-20 sm:py-24 md:py-32">
          <Reveal>
            <SectionHeading
              tone="light"
              align="center"
              eyebrow="اللوحة"
              title="لوحة المرشدون والحكام"
              description="نخبة من الخبراء والمختصين يرافقون الفرق بالإرشاد ويقيّمون الحلول النهائية."
            />
          </Reveal>

          {/* المرشدون */}
          <div className="mt-12 md:mt-16">
            <Reveal>
              <h3 className="flex items-center justify-center gap-2 text-xl font-bold text-white">
                <Users className="size-5 text-brand-mint" />
                المرشدون
              </h3>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {mentorSlots.map((n, i) => (
                <Reveal key={`mentor-${n}`} delay={i * 0.07}>
                  <div className="flex h-full flex-col items-center rounded-3xl border border-white/10 bg-white/5 p-7 text-center">
                    <span className="flex size-20 items-center justify-center rounded-full border border-dashed border-brand-mint/30 bg-brand-mint/10 text-brand-mint">
                      <UserRound className="size-9" />
                    </span>
                    <h4 className="mt-5 font-bold text-white">مرشد الهاكاثون</h4>
                    <p className="mt-2 text-sm text-brand-mint-soft/70">
                      يُعلن عن الاسم قريبًا
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* لجنة التحكيم */}
          <div className="mt-14 md:mt-20">
            <Reveal>
              <h3 className="flex items-center justify-center gap-2 text-xl font-bold text-white">
                <Gavel className="size-5 text-brand-mint" />
                لجنة التحكيم
              </h3>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {judgeSlots.map((n, i) => (
                <Reveal key={`judge-${n}`} delay={i * 0.07}>
                  <div className="flex h-full flex-col items-center rounded-3xl border border-white/10 bg-white/5 p-7 text-center">
                    <span className="flex size-20 items-center justify-center rounded-full border border-dashed border-brand-mint/30 bg-brand-mint/10 text-brand-mint">
                      <Landmark className="size-8" />
                    </span>
                    <h4 className="mt-5 font-bold text-white">عضو لجنة التحكيم</h4>
                    <p className="mt-2 text-sm text-brand-mint-soft/70">
                      يُعلن عن الاسم قريبًا
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ دعوة للتسجيل (2) ============ */}
      <section className="relative overflow-hidden">
        <div className="container-page py-16 text-center sm:py-20 md:py-24">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-balance text-3xl font-black !leading-[1.5] sm:text-4xl">
              انضم إلى هاكاثون واحة AI
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-base !leading-[2.2] text-muted-foreground sm:text-lg">
              وكن جزءًا من تجربة تجمع بين الأثر المجتمعي والذكاء الاصطناعي
              لتطوير حلول قابلة للتطبيق في الواقع.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="rounded-full px-10 text-base">
                <a href="#contact">
                  نافس وسجّل الآن!
                  <ArrowUpLeft className="size-5" />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ التسجيل / تواصل معنا ============ */}
      <section id="contact" className="scroll-mt-20 bg-muted/40 md:scroll-mt-24">
        <div className="container-page py-20 sm:py-24 md:py-32">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="التسجيل"
              title="فورم التسجيل"
              description="عبّئ بياناتك أدناه وسنتواصل معك بخصوص المشاركة في هاكاثون واحة AI."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mx-auto mt-10 max-w-xl md:mt-14">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8 md:p-10">
                <RegistrationForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
