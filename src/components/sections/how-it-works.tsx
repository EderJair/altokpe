"use client";

import { motion } from "motion/react";
import { Droplet, Sparkles, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    icon: Droplet,
    title: "Aplica",
    description:
      "Pasa el roller con la fórmula directo sobre la mancha. No esperes a que se seque.",
  },
  {
    icon: Sparkles,
    title: "Frota suave",
    description:
      "Da vuelta al producto y usa el cepillo de silicona para activar la fórmula sin dañar la tela.",
  },
  {
    icon: CheckCircle2,
    title: "Mancha fuera",
    description:
      "Seca con un paño limpio. La mancha desaparece en segundos, sin marcas ni decoloración.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="primary" className="mb-4">
            Cómo funciona
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Tres pasos. Cero manchas.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Diseñado para resolver el problema antes de que arruine tu día.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <Step key={step.title} step={step} index={index} />
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
  const Icon = step.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-lg">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-7xl font-bold leading-none text-foreground/5">
            0{index + 1}
          </span>
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
            <Icon size={22} />
          </div>
        </div>
        <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {step.description}
        </p>
      </div>

      {index < steps.length - 1 && (
        <div className="absolute left-full top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-r from-border to-transparent md:block" />
      )}
    </motion.div>
  );
}
