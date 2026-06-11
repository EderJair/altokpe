"use client";

import Image from "next/image";
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
            <BeforeAfter />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function BeforeAfter() {
  const { before, after } = product.beforeAfter;

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="grid grid-cols-2 gap-px overflow-hidden border border-foreground/15 bg-foreground/10 shadow-2xl shadow-foreground/5">
        <Panel
          tag="Antes"
          image={before}
          tagClassName="bg-foreground/80 text-background"
        />
        <Panel
          tag="Después"
          image={after}
          tagClassName="bg-primary text-primary-foreground"
        />
      </div>

      {/* flecha central */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-background shadow-lg ring-1 ring-foreground/10">
          <ArrowRight size={20} className="text-primary" />
        </div>
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

function Panel({
  tag,
  image,
  tagClassName,
}: {
  tag: string;
  image: { src: string; alt: string };
  tagClassName: string;
}) {
  return (
    <figure className="relative aspect-square bg-background">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="(max-width: 768px) 45vw, 280px"
        className="object-contain p-6"
      />
      <figcaption
        className={`absolute left-3 top-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${tagClassName}`}
      >
        {tag}
      </figcaption>
    </figure>
  );
}
