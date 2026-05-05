"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import * as React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { useOrder } from "@/components/order-modal";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollY } = useScroll();
  const { open } = useOrder();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 16);
  });

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/80 backdrop-blur-lg"
          : "border-transparent bg-transparent",
      )}
    >
      <Container size="xl" className="flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-foreground text-background">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 13l4 4L19 7"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-lg font-bold tracking-tight">{siteConfig.name}</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#producto" className="text-muted-foreground transition-colors hover:text-foreground">
            Producto
          </a>
          <a href="#como-funciona" className="text-muted-foreground transition-colors hover:text-foreground">
            Cómo funciona
          </a>
          <a href="#precios" className="text-muted-foreground transition-colors hover:text-foreground">
            Precios
          </a>
          <a href="#faq" className="text-muted-foreground transition-colors hover:text-foreground">
            Preguntas
          </a>
        </nav>

        <Button size="sm" onClick={() => open()}>
          Comprar al toke
        </Button>
      </Container>
    </motion.header>
  );
}
