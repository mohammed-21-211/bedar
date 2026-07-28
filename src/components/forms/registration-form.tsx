"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

/** Gulf countries first (hackathon audience), then nearby countries. */
const countryCodes = [
  { code: "+966", label: "السعودية", flag: "🇸🇦" },
  { code: "+971", label: "الإمارات", flag: "🇦🇪" },
  { code: "+965", label: "الكويت", flag: "🇰🇼" },
  { code: "+974", label: "قطر", flag: "🇶🇦" },
  { code: "+973", label: "البحرين", flag: "🇧🇭" },
  { code: "+968", label: "عُمان", flag: "🇴🇲" },
  { code: "+964", label: "العراق", flag: "🇮🇶" },
  { code: "+962", label: "الأردن", flag: "🇯🇴" },
  { code: "+961", label: "لبنان", flag: "🇱🇧" },
  { code: "+963", label: "سوريا", flag: "🇸🇾" },
  { code: "+970", label: "فلسطين", flag: "🇵🇸" },
  { code: "+967", label: "اليمن", flag: "🇾🇪" },
  { code: "+20", label: "مصر", flag: "🇪🇬" },
  { code: "+212", label: "المغرب", flag: "🇲🇦" },
  { code: "+213", label: "الجزائر", flag: "🇩🇿" },
  { code: "+216", label: "تونس", flag: "🇹🇳" },
  { code: "+218", label: "ليبيا", flag: "🇱🇾" },
  { code: "+249", label: "السودان", flag: "🇸🇩" },
  { code: "+222", label: "موريتانيا", flag: "🇲🇷" },
  { code: "+90", label: "تركيا", flag: "🇹🇷" },
] as const;

const schema = z.object({
  firstName: z.string().trim().min(2, { message: "الرجاء إدخال الاسم" }),
  lastName: z.string().trim().min(2, { message: "الرجاء إدخال الكنية" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "الرجاء إدخال البريد الإلكتروني" })
    .email({ message: "صيغة البريد الإلكتروني غير صحيحة" }),
  gender: z.enum(["ذكر", "أنثى"], {
    message: "الرجاء اختيار الجنس",
  }),
  countryCode: z.string().min(1, { message: "اختر رمز الدولة" }),
  whatsapp: z
    .string()
    .trim()
    .regex(/^[0-9]{7,12}$/, {
      message: "أدخل رقم واتساب صحيحًا (أرقامًا فقط، بدون رمز الدولة)",
    }),
  linkedin: z
    .string()
    .trim()
    .url({ message: "أدخل رابطًا صحيحًا يبدأ بـ https://" })
    .refine((v) => v.includes("linkedin.com"), {
      message: "يجب أن يكون الرابط من linkedin.com",
    })
    .optional()
    .or(z.literal("")),
});

type RegistrationValues = z.infer<typeof schema>;

const FORM_NAME = "hackathon-registration";

/**
 * Registration form — submits to Netlify Forms via the static
 * `public/__forms.html` declaration (no backend needed).
 */
export function RegistrationForm() {
  const form = useForm<RegistrationValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      gender: undefined,
      countryCode: "+966",
      whatsapp: "",
      linkedin: "",
    },
  });

  const onSubmit = async (values: RegistrationValues) => {
    const body = new URLSearchParams({
      "form-name": FORM_NAME,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      gender: values.gender,
      whatsapp: `${values.countryCode}${values.whatsapp}`,
      linkedin: values.linkedin ?? "",
    });

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      toast.success("تم استلام تسجيلك بنجاح!", {
        description: "سنتواصل معك عبر البريد الإلكتروني أو واتساب قريبًا.",
        icon: <CheckCircle2 className="size-5" />,
      });
      form.reset();
    } catch {
      toast.error("تعذّر إرسال التسجيل", {
        description: "الرجاء المحاولة مرة أخرى بعد قليل.",
      });
    }
  };

  const inputClass =
    "h-12 rounded-xl bg-background px-4 text-base shadow-none border-input";

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5"
        noValidate
        aria-label="فورم التسجيل"
      >
        {/* First / last name */}
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الاسم</FormLabel>
                <FormControl>
                  <Input
                    placeholder="الاسم الأول"
                    autoComplete="given-name"
                    className={inputClass}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الكنية</FormLabel>
                <FormControl>
                  <Input
                    placeholder="اسم العائلة"
                    autoComplete="family-name"
                    className={inputClass}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>البريد الإلكتروني</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  inputMode="email"
                  dir="ltr"
                  placeholder="name@example.com"
                  autoComplete="email"
                  className={cn(inputClass, "text-left placeholder:text-right sm:placeholder:text-left")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Gender */}
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>الجنس</FormLabel>
              <FormControl>
                <div className="grid grid-cols-2 gap-3" role="radiogroup" aria-label="الجنس">
                  {(["ذكر", "أنثى"] as const).map((g) => (
                    <label
                      key={g}
                      className={cn(
                        "flex h-12 cursor-pointer items-center justify-center rounded-xl border text-base font-medium transition-colors",
                        field.value === g
                          ? "border-accent bg-secondary/50 text-foreground"
                          : "border-input bg-background text-muted-foreground hover:border-accent/50",
                      )}
                    >
                      <input
                        type="radio"
                        name={field.name}
                        value={g}
                        checked={field.value === g}
                        onChange={() => field.onChange(g)}
                        className="sr-only"
                      />
                      {g}
                    </label>
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* WhatsApp with country code */}
        <div>
          <Label className="mb-2 block">رقم الواتساب</Label>
          <div className="flex gap-3" dir="ltr">
            <FormField
              control={form.control}
              name="countryCode"
              render={({ field }) => (
                <FormItem className="w-[132px] shrink-0">
                  <FormControl>
                    <select
                      aria-label="رمز الدولة"
                      className={cn(
                        inputClass,
                        "w-full cursor-pointer appearance-none border px-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                      )}
                      {...field}
                    >
                      {countryCodes.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.flag} {c.code}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="whatsapp"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      type="tel"
                      inputMode="numeric"
                      placeholder="5XXXXXXXX"
                      autoComplete="tel-national"
                      className={cn(inputClass, "text-left")}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          {(form.formState.errors.whatsapp ??
            form.formState.errors.countryCode) ? (
            <p className="mt-2 text-[0.8rem] font-medium text-destructive">
              {form.formState.errors.whatsapp?.message ??
                form.formState.errors.countryCode?.message}
            </p>
          ) : null}
        </div>

        {/* LinkedIn (optional) */}
        <FormField
          control={form.control}
          name="linkedin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                رابط ملف LinkedIn{" "}
                <span className="font-normal text-muted-foreground">
                  (اختياري)
                </span>
              </FormLabel>
              <FormControl>
                <Input
                  type="url"
                  inputMode="url"
                  dir="ltr"
                  placeholder="https://www.linkedin.com/in/username"
                  className={cn(inputClass, "text-left placeholder:text-right sm:placeholder:text-left")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="w-full rounded-full py-6 text-base shadow-glow"
        >
          {form.formState.isSubmitting ? (
            <Loader2 className="size-5 animate-spin" />
          ) : (
            <Send className="size-5" />
          )}
          نافس وسجّل الآن!
        </Button>
      </form>
    </Form>
  );
}
