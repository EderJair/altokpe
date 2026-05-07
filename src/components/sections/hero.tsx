"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { product } from "@/lib/product";
import { useOrder } from "@/components/order-modal";
import { ProductShowcase } from "@/components/sections/product-showcase";

const ease = [0.22, 1, 0.36, 1] as const;

const heroStats = [
  { label: "Multi-tela", value: "100%" },
  { label: "Resultado", value: "3s" },
  { label: "Reseñas", value: "4.4" },
  { label: "Garantía", value: "7d" },
];

export function Hero() {
  const { open } = useOrder();
  const featuredPlan =
    product.plans.find((p) => p.highlight) ?? product.plans[0];
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const productY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const stickerRotate = useTransform(scrollYProgress, [0, 1], [-8, 12]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative overflow-hidden pt-32 pb-20 lg:min-h-[100svh] lg:flex lg:items-center"
    >
      {/* light grid background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-stripes-grid-light pointer-events-none"
      />

      {/* diagonal orange stripes - bottom right accent (softer for light) */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.25, x: 0 }}
        transition={{ duration: 1, ease, delay: 0.4 }}
        className="absolute -bottom-40 -right-20 h-[36rem] w-[60rem] -rotate-[18deg] bg-stripes pointer-events-none"
      />

      {/* corner brackets full screen */}
      <CornerBrackets />

      <Container size="xl" className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* LEFT: Headline + CTAs */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="text-eyebrow text-primary flex items-center gap-3"
            >
              <span className="h-px w-8 bg-primary" />
              <span>{"// Producto 01 / Quitamanchas"}</span>
            </motion.div>

            <h1 className="text-display mt-8 text-[clamp(3rem,8vw,7.5rem)]">
              <RevealLine delay={0.1}>
                <span>Manchas</span>
              </RevealLine>
              <RevealLine delay={0.2}>
                <span>
                  fuera<span className="text-primary">.</span>
                </span>
              </RevealLine>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.5 }}
              className="mt-8 max-w-md text-base leading-relaxed text-foreground/60 sm:text-lg"
            >
              {product.shortDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.6 }}
              className="mt-10 flex max-w-sm flex-col gap-3"
            >
              <button
                onClick={() => open(featuredPlan.id)}
                className="group flex items-center justify-between bg-foreground px-6 py-4 text-sm font-semibold uppercase tracking-wider text-background transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <span>Comprar al toke</span>
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
              <a
                href="#precios"
                className="group flex items-center justify-between border border-foreground/20 px-6 py-4 text-sm font-semibold uppercase tracking-wider text-foreground transition-all hover:border-primary hover:text-primary"
              >
                <span>Ver precios</span>
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </div>

          {/* RIGHT: Product + sticker price */}
          <motion.div
            style={{ y: productY }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto w-full max-w-xl">
              <ProductShowcase />
            </div>

            {/* editorial price tag */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.9 }}
              style={{ rotate: stickerRotate }}
              className="absolute -right-2 top-4 origin-top-right text-right sm:-right-4 sm:top-8"
            >
              <p className="text-eyebrow text-foreground/60">
                {"// desde"}
              </p>
              <p className="text-display mt-2 text-5xl leading-none sm:text-6xl">
                S/<span className="text-primary">
                  {product.plans[0].price}
                </span>
              </p>
              <div className="ml-auto mt-3 h-px w-14 bg-foreground/30" />
              <p className="text-eyebrow mt-2 text-foreground/70">
                Lima · 24h
              </p>
            </motion.div>

            {/* serial number */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute -left-2 bottom-2 hidden border border-foreground/20 bg-background/80 px-3 py-1.5 backdrop-blur sm:block"
            >
              <p className="text-eyebrow text-foreground/60">
                SKU · ATK-QM-001 · 2026
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* bottom strip stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease }}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden border border-foreground/10 bg-foreground/10 sm:grid-cols-4 lg:mt-24"
        >
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-2 bg-background p-5"
            >
              <span className="text-eyebrow text-foreground/50">
                {stat.label}
              </span>
              <span className="text-3xl font-black tracking-tight sm:text-4xl">
                {stat.value}
              </span>
            </div>
          ))}
        </motion.div>
      </Container>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-eyebrow text-foreground/40 lg:flex"
      >
        <span>Scroll</span>
        <ChevronDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
}

function RevealLine({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

function CornerBrackets() {
  return (
    <>
      <div className="absolute left-6 top-24 h-12 w-12 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute right-6 top-24 h-12 w-12 border-r-2 border-t-2 border-primary/30" />
      <div className="absolute bottom-12 left-6 hidden h-12 w-12 border-b-2 border-l-2 border-primary/30 lg:block" />
      <div className="absolute bottom-12 right-6 hidden h-12 w-12 border-b-2 border-r-2 border-primary/30 lg:block" />
    </>
  );
}
