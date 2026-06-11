"use client";

import { motion } from "motion/react";
import { ArrowRight, Star, Truck, ShieldCheck, Wallet } from "lucide-react";
import { Container } from "@/components/ui/container";
import { product } from "@/lib/product";
import { useOrder } from "@/components/order-modal";

const ease = [0.22, 1, 0.36, 1] as const;

const trust = [
  { icon: Truck, label: "Envío 24h en Lima" },
  { icon: Wallet, label: "Contraentrega o Yape" },
  { icon: ShieldCheck, label: "Garantía 7 días" },
];

export function Hero() {
  const { open } = useOrder();
  const featuredPlan =
    product.plans.find((p) => p.highlight) ?? product.plans[0];
  const fromPrice = product.plans[0].price;

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:flex lg:min-h-svh lg:items-center"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-stripes-grid-light pointer-events-none"
      />

      <Container size="xl" className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* LEFT: qué es, qué hace, cuánto cuesta */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="flex items-center gap-3 text-sm font-medium text-foreground/70"
            >
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.round(product.rating)
                        ? "fill-primary text-primary"
                        : "fill-foreground/15 text-foreground/15"
                    }
                  />
                ))}
              </span>
              <span>
                {product.rating} · +{product.reviewCount.toLocaleString("es-PE")}{" "}
                clientes
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              className="text-display mt-6 text-[clamp(2.25rem,5vw,4.25rem)]"
            >
              Quitamanchas
              <br />
              portátil<span className="text-primary">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.2 }}
              className="mt-5 max-w-md text-lg font-semibold leading-snug text-foreground sm:text-xl"
            >
              Borra manchas en 3 segundos, donde estés.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.3 }}
              className="mt-3 max-w-md text-sm leading-relaxed text-foreground/60 sm:text-base"
            >
              {product.shortDescription}
            </motion.p>

            {/* precio + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.4 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <div className="shrink-0">
                <p className="text-eyebrow text-foreground/50">Desde</p>
                <p className="text-display text-5xl leading-none sm:text-6xl">
                  S/<span className="text-primary">{fromPrice}</span>
                </p>
              </div>
              <button
                onClick={() => open(featuredPlan.id)}
                className="group flex items-center justify-center gap-2 bg-foreground px-7 py-4 text-sm font-semibold uppercase tracking-wider text-background transition-all hover:bg-primary hover:text-primary-foreground sm:justify-between"
              >
                <span>Comprar al toke</span>
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </motion.div>

            {/* trust badges */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
            >
              {trust.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm text-foreground/70"
                >
                  <Icon size={16} className="text-primary" />
                  <span>{label}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* RIGHT: antes / después */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            className="lg:col-span-6"
          >
            <ProductVideo />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function ProductVideo() {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <div className="relative aspect-9/16 overflow-hidden border border-foreground/15 bg-foreground/10 shadow-2xl shadow-foreground/10">
        <video
          src="/quitamanchas-demo.mp4"
          poster="/products/quitamanchas.png"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="absolute left-3 top-3 bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
          Demo real
        </span>
      </div>

      {/* etiqueta resultado */}
      <div className="mt-4 flex items-center justify-center gap-2 text-eyebrow text-foreground/60">
        <span className="h-px w-6 bg-primary" />
        <span>Resultado real en 3 segundos</span>
        <span className="h-px w-6 bg-primary" />
      </div>
    </div>
  );
}
