"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/container";

const specs = [
  { value: "100%", label: "multi-tela", description: "Algodón, lino, denim, poliéster, calzado" },
  { value: "3s", label: "velocidad", description: "Tiempo promedio para remover una mancha fresca" },
  { value: "0%", label: "decolora", description: "Fórmula segura para colores y telas delicadas" },
  { value: "200+", label: "usos", description: "Una unidad rinde para cientos de aplicaciones" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function SpecStrip() {
  return (
    <section className="section-dark relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 bg-stripes-grid pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="mb-16 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="text-eyebrow text-primary">{"// Specs"}</p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-display text-[clamp(2.5rem,7vw,5.5rem)]">
              Formulado para
              <br />
              <span className="text-foreground/40">consistencia</span>
              <span className="text-primary">.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base text-foreground/60 sm:text-lg">
              Cada componente está pensado para limpiar sin dañar.
              Sin ingredientes raros, sin gimmicks, sin trucos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden border border-foreground/10 bg-foreground/10 lg:grid-cols-4">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease }}
              className="group flex flex-col gap-4 bg-background p-8 transition-colors hover:bg-foreground/[0.04]"
            >
              <div className="flex items-baseline gap-2 border-b border-foreground/10 pb-4">
                <span className="text-display text-5xl text-primary sm:text-6xl">
                  {spec.value}
                </span>
                <span className="text-eyebrow text-foreground/60">
                  {spec.label}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-foreground/60">
                {spec.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
