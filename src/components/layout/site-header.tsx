"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNav, sectionIds, type SectionId } from "@/config/site";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<SectionId>("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the nav item of the section in view.
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the visible section closest to the top of the viewport.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id as SectionId);
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "border-b border-border/60 bg-background/80 shadow-soft backdrop-blur-xl supports-[backdrop-filter]:bg-background/65"
          : "bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        <a href="#home" aria-label="العودة إلى الأعلى">
          <Logo height={38} priority href={null} variant={scrolled ? "default" : "light"} />
        </a>

        {/* Desktop nav — anchors into the landing page sections */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="التنقل الرئيسي">
          {mainNav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active === item.id
                  ? scrolled
                    ? "bg-secondary/60 text-secondary-foreground"
                    : "bg-white/15 text-white"
                  : scrolled
                    ? "text-foreground/70 hover:bg-muted hover:text-foreground"
                    : "text-brand-mint-soft/85 hover:bg-white/10 hover:text-white",
              )}
            >
              {item.title}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className={cn(
              "hidden rounded-full px-6 sm:inline-flex",
              !scrolled &&
                "bg-brand-mint text-brand-deep hover:bg-white hover:text-brand-deep",
            )}
          >
            <a href="#contact">سجّل الآن</a>
          </Button>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "rounded-full lg:hidden",
                  !scrolled && "text-white hover:bg-white/10 hover:text-white",
                )}
                aria-label="فتح القائمة"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%] max-w-sm overflow-y-auto">
              <SheetHeader className="text-right">
                <SheetTitle>
                  <Logo height={34} href={null} />
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-1.5 px-2 pb-8">
                {mainNav.map((item) => (
                  <SheetClose asChild key={item.id}>
                    <a
                      href={item.href}
                      className={cn(
                        "rounded-xl px-4 py-3.5 text-base font-medium transition-colors",
                        active === item.id
                          ? "bg-secondary/60 text-secondary-foreground"
                          : "hover:bg-muted",
                      )}
                    >
                      {item.title}
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild size="lg" className="mt-5 rounded-full">
                    <a href="#contact">سجّل الآن</a>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
