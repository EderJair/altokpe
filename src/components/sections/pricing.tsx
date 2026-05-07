"use client";

import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { product } from "@/lib/product";
import { useOrder } from "@/components/order-modal";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const planFeatures: Record<string, string[]> = {
  single: [
    "1 unidad de Quitamanchas",
    "Envío estándar a Lima (S/10)",
    "Pago contraentrega o Yape",
    "Garantía 7 días",
  ],
  duo: [
    "2 unidades de Quitamanchas",
    "Envío estándar a Lima (S/10)",
    "Pago contraentrega o Yape",
    "Garantía 7 días extendida",
    "Ahorras S/21 vs unidades sueltas",
  ],
  trio: [
    "3 unidades de Quitamanchas",
    "Envío gratis a Lima",
    "Pago contraentrega o Yape",
    "Garantía 7 días extendida",
    "Ahorras S/46 vs unidades sueltas",
  ],
};

export function Pricing() {
  const { open } = useOrder();

  return (
    <section
      id="precios"
      className="section-dark relative overflow-hidden py-24 sm:py-40"
    >
      <div aria-hidden className="absolute inset-0 bg-stripes-grid pointer-events-none" />
      <div
        aria-hidden
        className="absolute -left-20 top-1/3 h-72 w-[40rem] -rotate-12 bg-stripes opacity-30"
      />

      <Container size="xl" className="relative z-10">
        <div className="mb-16 grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="text-eyebrow text-primary">{"// Precios"}</p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-display text-[clamp(2.5rem,8vw,7rem)]">
              Lleva más,
              <br />
              <span className="text-foreground/30">paga menos</span>
              <span className="text-primary">.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base text-foreground/60 sm:text-lg">
              Compra contraentrega o por Yape. Sin cuenta, sin vueltas.
            </p>
          </div>
        </div>

        <div className="grid gap-px overflow-hidden border border-foreground/10 bg-foreground/10 lg:grid-cols-3">
          {product.plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease }}
              className={cn(
                "relative flex flex-col gap-8 p-8 transition-all sm:p-10",
                plan.highlight
                  ? "bg-primary text-primary-foreground"
                  : "bg-background hover:bg-muted",
              )}
            >
              {plan.badge && (
                <div
                  className={cn(
                    "absolute right-6 top-6 rotate-3 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider",
                    plan.highlight
                      ? "bg-background text-primary"
                      : "bg-primary text-primary-foreground",
                  )}
                >
                  {plan.badge}
                </div>
              )}

              <div className="flex items-baseline justify-between">
                <p className={cn("text-eyebrow", plan.highlight ? "opacity-80" : "text-foreground/60")}>
                  Plan 0{index + 1}
                </p>
                <p className={cn("text-display text-2xl", plan.highlight ? "" : "text-foreground/30")}>
                  {plan.units}×
                </p>
              </div>

              <div>
                <p className={cn("text-eyebrow", plan.highlight ? "opacity-80" : "text-foreground/60")}>
                  {plan.label}
                </p>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className={cn("text-display text-7xl sm:text-8xl", plan.highlight ? "" : "")}>
                    {plan.price}
                  </span>
                  <span className={cn("text-2xl font-bold", plan.highlight ? "opacity-80" : "text-foreground/40")}>
                    soles
                  </span>
                </div>
                <p
                  className={cn(
                    "mt-2 text-sm",
                    plan.highlight ? "opacity-75" : "text-foreground/50",
                  )}
                >
                  S/ {plan.pricePerUnit.toFixed(2)} por unidad
                  {plan.savings && ` · ${plan.savings}`}
                </p>
              </div>

              <ul className="space-y-3 text-sm">
                {planFeatures[plan.id]?.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className={cn(
                        "mt-0.5 flex-shrink-0",
                        plan.highlight ? "" : "text-primary",
                      )}
                    />
                    <span
                      className={cn(
                        plan.highlight ? "opacity-90" : "text-foreground/80",
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => open(plan.id)}
                className={cn(
                  "group mt-auto flex items-center justify-between px-6 py-4 text-xs font-semibold uppercase tracking-wider transition-all",
                  plan.highlight
                    ? "bg-background text-foreground hover:bg-foreground hover:text-background"
                    : "bg-foreground text-background hover:bg-primary hover:text-primary-foreground",
                )}
              >
                <span>Comprar al toke</span>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-foreground/50">
          Garantía 7 días: si no quedaste contento, te devolvemos el 100%.
        </p>
      </Container>
    </section>
  );
}
