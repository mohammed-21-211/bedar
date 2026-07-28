"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type CounterProps = {
  /** Target value to count up to. */
  value: number;
  /** Text appended after the number (e.g. "+", "%"). */
  suffix?: string;
  /** Text prepended before the number. */
  prefix?: string;
  duration?: number;
  className?: string;
};

/**
 * Number that counts up from 0 when scrolled into view (plays once).
 * Always formats with Latin (English) digits, rAF-driven — no library.
 */
export function Counter({
  value,
  suffix = "",
  prefix = "",
  duration = 1.8,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const format = (n: number) =>
      `${prefix}${Math.round(n).toLocaleString("en-US")}${suffix}`;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = format(value);
      return;
    }

    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const total = duration * 1000;
        const tick = (now: number) => {
          const t = Math.min((now - start) / total, 1);
          // easeOutQuart
          const eased = 1 - Math.pow(1 - t, 4);
          el.textContent = format(value * eased);
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { rootMargin: "-60px 0px" },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration, prefix, suffix]);

  return (
    <span ref={ref} dir="ltr" className={cn("tabular-nums", className)}>
      {prefix}0{suffix}
    </span>
  );
}
