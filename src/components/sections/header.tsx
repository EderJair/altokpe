"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";
import { useOrder } from "@/components/order-modal";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Producto", href: "#producto" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Precios", href: "#precios" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollY } = useScroll();
  const { open } = useOrder();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 32);
  });

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "pt-3" : "pt-6",
      )}
    >
      <Container size="xl">
        <div
          className={cn(
            "mx-auto flex h-14 items-center justify-between gap-4 transition-all duration-300",
            scrolled
              ? "max-w-3xl rounded-full border border-foreground/10 bg-background/80 px-4 shadow-sm backdrop-blur-xl"
              : "max-w-full px-2",
          )}
        >
          <a href="#top" className="flex items-center gap-2 group">
            <div className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
              <Logo />
            </div>
            <span className="text-sm font-bold tracking-tight">
              {siteConfig.name}
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-eyebrow text-foreground/60 transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => open()}
            className="group flex items-center gap-2 rounded-full bg-foreground px-5 py-2 text-xs font-semibold uppercase tracking-wider text-background transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <span>Comprar</span>
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </button>
        </div>
      </Container>
    </motion.header>
  );
}

function Logo() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}
