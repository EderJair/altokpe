"use client";

import { motion } from "motion/react";
import { Star, Truck, ShieldCheck, Zap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { product } from "@/lib/product";
import { useOrder } from "@/components/order-modal";
import { ProductShowcase } from "@/components/sections/product-showcase";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { open } = useOrder();
  const featuredPlan =
    product.plans.find((p) => p.highlight) ?? product.plans[0];

  return (
    <section id="top" className="relative overflow-hidden pt-12 pb-24 sm:pt-16 sm:pb-32">
      <BackgroundOrbs />

      <Container size="xl" className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <Badge variant="primary" className="mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Disponible en Lima · Envíos al toque
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.05 }}
              className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Manchas fuera,{" "}
              <span className="relative inline-block">
                <span className="relative z-10">en segundos.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, ease, delay: 0.6 }}
                  className="absolute bottom-1 left-0 right-0 -z-0 h-3 origin-left bg-primary/30 sm:h-4"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0 mx-auto"
            >
              {product.shortDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.18 }}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start justify-center"
            >
              <Button size="lg" onClick={() => open(featuredPlan.id)} className="w-full sm:w-auto">
                Comprar desde S/ {product.plans[0].price}
              </Button>
              <a
                href="#como-funciona"
                className="inline-flex h-14 items-center justify-center px-2 text-sm font-medium text-foreground/80 underline underline-offset-4 hover:text-foreground"
              >
                Ver cómo funciona
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground lg:justify-start justify-center"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i < Math.floor(product.rating)
                          ? "fill-accent text-accent"
                          : "fill-foreground/15 text-foreground/15"
                      }
                    />
                  ))}
                </div>
                <span className="font-medium text-foreground">
                  {product.rating}
                </span>
                <span>· {product.reviewCount.toLocaleString("es-PE")} clientes</span>
              </div>
              <div className="hidden h-4 w-px bg-border sm:block" />
              <div className="flex items-center gap-2">
                <Truck size={14} />
                <span>Envío en 24h</span>
              </div>
              <div className="hidden h-4 w-px bg-border sm:block" />
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} />
                <span>Pago contraentrega</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="relative"
          >
            <ProductShowcase />

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -left-2 top-12 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-success/10 text-success">
                  <Zap size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Limpieza</p>
                  <p className="text-sm font-semibold">3 segundos</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -right-2 bottom-12 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-primary">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Seguro en</p>
                  <p className="text-sm font-semibold">Toda tela</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function BackgroundOrbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute top-1/2 -left-40 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-3xl" />
    </div>
  );
}
