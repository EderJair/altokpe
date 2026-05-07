"use client";

import { motion } from "motion/react";
import {
  Sparkles,
  Shirt,
  Backpack,
  Recycle,
  ShieldCheck,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";

const ease = [0.22, 1, 0.36, 1] as const;

export function Benefits() {
  return (
    <section id="beneficios" className="relative overflow-hidden bg-foreground text-background py-24 sm:py-40">
      <Container size="xl">
        <div className="mb-16 grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="text-eyebrow text-primary">{"// Beneficios"}</p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-display text-[clamp(2.5rem,8vw,7rem)]">
              Pequeño,
              <br />
              <span className="text-background/40">brutal</span>
              <span className="text-primary">.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base text-background/60 sm:text-lg">
              Pensado para que dejes de cambiarte de ropa cada vez que algo sale mal.
            </p>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-4">
          {/* Hero card — large */}
          <BentoCard
            className="col-span-12 row-span-2 md:col-span-7 md:row-span-2"
            highlighted
            index={0}
            icon={Sparkles}
            title="Doble cabezal"
            description="Roller para aplicar y cepillo de silicona para frotar. Diseño dual que activa la fórmula y arrastra la mancha en una sola pasada."
            stat="2 en 1"
          />

          <BentoCard
            className="col-span-6 md:col-span-5"
            index={1}
            icon={Backpack}
            title="Tamaño bolsillo"
            description="Cabe en cartera, mochila o lonchera del cole."
          />

          <BentoCard
            className="col-span-6 md:col-span-5"
            index={2}
            icon={Shirt}
            title="Multi-superficie"
            description="Algodón, lino, denim, poliéster, calzado y tapizados."
          />

          <BentoCard
            className="col-span-12 md:col-span-4"
            index={3}
            icon={ShieldCheck}
            title="Sin decolorar"
            description="Fórmula segura para colores intensos y telas delicadas."
          />

          <BentoCard
            className="col-span-6 md:col-span-4"
            index={4}
            icon={Recycle}
            title="Rinde meses"
            description="Reutilizable. Cientos de aplicaciones por unidad."
          />

          <BentoCard
            className="col-span-6 md:col-span-4"
            index={5}
            icon={Clock}
            title="Resultados al toke"
            description="Mancha fresca o vieja, en segundos vuelves a tu prenda."
          />
        </div>
      </Container>
    </section>
  );
}

type BentoCardProps = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  className?: string;
  highlighted?: boolean;
  stat?: string;
  index: number;
};

function BentoCard({
  icon: Icon,
  title,
  description,
  className,
  highlighted,
  stat,
  index,
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease }}
      className={`group relative flex flex-col justify-between overflow-hidden border ${
        highlighted
          ? "border-primary bg-gradient-to-br from-primary to-[#e84a1f] text-primary-foreground"
          : "border-background/10 bg-background/[0.03] hover:border-background/30"
      } p-6 transition-all duration-300 sm:p-8 ${className ?? ""}`}
    >
      <div className="flex items-start justify-between">
        <div
          className={`grid h-11 w-11 place-items-center ${
            highlighted ? "bg-background/20 text-primary-foreground" : "bg-background/5 text-background"
          }`}
        >
          <Icon size={20} />
        </div>
        <ArrowUpRight
          size={20}
          className={`transition-transform group-hover:rotate-45 ${
            highlighted ? "text-primary-foreground/70" : "text-background/40"
          }`}
        />
      </div>

      <div className={highlighted ? "mt-12" : "mt-8"}>
        {stat && (
          <p
            className={`text-display text-6xl sm:text-7xl ${
              highlighted ? "text-primary-foreground" : "text-background"
            }`}
          >
            {stat}
          </p>
        )}
        <h3
          className={`mt-3 text-xl font-bold tracking-tight sm:text-2xl ${
            highlighted ? "" : ""
          }`}
        >
          {title}
          <span className={highlighted ? "" : "text-primary"}>.</span>
        </h3>
        <p
          className={`mt-2 text-sm leading-relaxed ${
            highlighted ? "text-primary-foreground/85" : "text-background/60"
          }`}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}
