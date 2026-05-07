"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/container";

const steps = [
  {
    number: "01",
    title: "Aplica",
    description:
      "Pasa el roller con la fórmula directo sobre la mancha. No esperes a que se seque — mientras antes mejor.",
    detail: "Roller con fórmula activa",
  },
  {
    number: "02",
    title: "Frota suave",
    description:
      "Da vuelta al producto y usa el cepillo de silicona para activar la fórmula. Movimientos circulares, sin presión.",
    detail: "Cepillo de silicona dual",
  },
  {
    number: "03",
    title: "Mancha fuera",
    description:
      "Seca con un paño limpio. La mancha desaparece en segundos, sin marcas ni decoloración. Listo.",
    detail: "Resultado en 3 segundos",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative overflow-hidden py-24 sm:py-40">
      <Container size="xl">
        <div className="mb-20 grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="text-eyebrow text-primary">{"// Método"}</p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-display text-[clamp(2.5rem,8vw,7rem)]">
              Tres pasos.
              <br />
              <span className="text-foreground/30">cero manchas</span>
              <span className="text-primary">.</span>
            </h2>
          </div>
        </div>

        <div className="space-y-px border border-foreground/10">
          {steps.map((step, index) => (
            <Step key={step.number} step={step} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

type StepProps = {
  step: (typeof steps)[number];
  index: number;
};

function Step({ step, index }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
      className="group relative grid grid-cols-12 items-center gap-4 bg-background p-6 transition-colors hover:bg-muted sm:gap-8 sm:p-10 lg:p-14"
    >
      <div className="col-span-3 sm:col-span-2">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.1, ease }}
          className="text-display text-[clamp(2.5rem,8vw,7rem)] leading-none text-foreground/15 transition-colors group-hover:text-primary"
        >
          {step.number}
        </motion.div>
      </div>

      <div className="col-span-9 flex flex-col gap-3 sm:col-span-7">
        <h3 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {step.title}
          <span className="text-primary">.</span>
        </h3>
        <p className="max-w-xl text-base leading-relaxed text-foreground/60 sm:text-lg">
          {step.description}
        </p>
      </div>

      <div className="col-span-12 mt-4 sm:col-span-3 sm:mt-0">
        <div className="border-l border-foreground/15 pl-4 sm:pl-6">
          <p className="text-eyebrow text-foreground/50">Detalle</p>
          <p className="mt-2 text-sm font-medium">{step.detail}</p>
        </div>
      </div>
    </motion.div>
  );
}
