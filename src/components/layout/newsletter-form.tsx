"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "الرجاء إدخال البريد الإلكتروني" })
    .email({ message: "صيغة البريد الإلكتروني غير صحيحة" }),
});

type NewsletterValues = z.infer<typeof schema>;

export function NewsletterForm() {
  const form = useForm<NewsletterValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (values: NewsletterValues) => {
    // No live backend yet — simulate a subscribe request.
    await new Promise((r) => setTimeout(r, 700));
    toast.success("تم اشتراكك بنجاح — سيصلك جديد الهاكاثون أولاً بأول", {
      description: values.email,
    });
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-2 sm:flex-row"
        noValidate
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  type="email"
                  inputMode="email"
                  dir="ltr"
                  placeholder="بريدك الإلكتروني"
                  className="h-11 rounded-full bg-white/10 text-right placeholder:text-white/50 border-white/20 text-white"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-right text-red-300" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="h-11 rounded-full border border-brand-mint/50 transition-colors hover:border-brand-mint"
        >
          {form.formState.isSubmitting ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <Send className="size-4" />
          )}
          اشتراك
        </Button>
      </form>
    </Form>
  );
}
