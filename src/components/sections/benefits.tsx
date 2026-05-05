"use client";

import { motion } from "motion/react";
import {
  Sparkles,
  Shirt,
  Backpack,
  Recycle,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

const benefits = [
  {
    icon: Sparkles,
    title: "Doble cabezal",
    description:
      "Roller para aplicar y cepillo de silicona para frotar. Todo en un solo producto.",
  },
  {
    icon: Backpack,
    title: "Tamaño bolsillo",
    description:
      "Llévalo donde vayas. Cabe en cartera, mochila o lonchera del cole.",
  },
  {
    icon: Shirt,
    title: "Multi-superficie",
    description:
      "Funciona en algodón, lino, denim, poliéster, calzado y hasta tapizados.",
  },
  {
    icon: ShieldCheck,
    title: "Sin decolorar",
    description:
      "Fórmula segura para colores y telas delicadas. No daña ni desgasta.",
  },
  {
    icon: Recycle,
    title: "Rinde meses",
    description:
      "Reutilizable. Una unidad te dura para cientos de aplicaciones diarias.",
  },
  {
    icon: Clock,
    title: "Resultados al toke",
    description: "Mancha fresca o vieja, en segundos vuelves a tener tu prenda como nueva.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="primary" className="mb-4">
            Por qué vas a engancharte
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Pequeño, portátil, brutal.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Pensado para que dejes de cambiarte de ropa cada vez que algo sale mal.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

type BenefitCardProps = {
  benefit: (typeof benefits)[number];
  index: number;
};

function BenefitCard({ benefit, index }: BenefitCardProps) {
  const Icon = benefit.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all hover:border-foreground/20"
    >
      <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-foreground/[0.04] text-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
        <Icon size={20} />
      </div>
      <h3 className="text-base font-semibold tracking-tight">{benefit.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {benefit.description}
      </p>
    </motion.div>
  );
}
