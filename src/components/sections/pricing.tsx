"use client";

import { motion } from "motion/react";
import { Check, Truck, Star, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { product } from "@/lib/product";
import { useOrder } from "@/components/order-modal";
import { cn } from "@/lib/utils";

export function Pricing() {
  const { open } = useOrder();

  return (
    <section id="precios" className="relative py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="primary" className="mb-4">
            Compra al toke
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Lleva más, paga menos.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Compra contraentrega o por Yape. Sin cuenta, sin vueltas.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-3">
          {product.plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "relative flex flex-col rounded-3xl border bg-card p-8 transition-all",
                plan.highlight
                  ? "border-primary/40 shadow-[0_20px_60px_-20px_rgba(255,87,34,0.4)] lg:scale-105"
                  : "border-border hover:border-foreground/20",
              )}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
                      plan.highlight
                        ? "bg-primary text-primary-foreground"
                        : "bg-foreground text-background",
                    )}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center">
                <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  {plan.label}
                </p>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-sm text-muted-foreground">S/</span>
                  <span className="text-5xl font-bold tracking-tight">
                    {plan.price}
                  </span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  S/ {plan.pricePerUnit.toFixed(2)} por unidad
                </p>
                {plan.savings && (
                  <p className="mt-2 text-sm font-medium text-success">
                    {plan.savings}
                  </p>
                )}
              </div>

              <ul className="mt-8 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Check size={18} className="mt-0.5 flex-shrink-0 text-success" />
                  <span>
                    {plan.units} {plan.units === 1 ? "unidad" : "unidades"} de Quitamanchas Portátil
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Truck size={18} className={cn("mt-0.5 flex-shrink-0", plan.freeShipping ? "text-success" : "text-muted-foreground")} />
                  <span>
                    {plan.freeShipping
                      ? "Envío gratis a todo Lima"
                      : "Envío estándar S/ 10 a Lima"}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck size={18} className="mt-0.5 flex-shrink-0 text-success" />
                  <span>Pago contraentrega o Yape</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star size={18} className="mt-0.5 flex-shrink-0 text-success" />
                  <span>Garantía: si no funciona, te devolvemos tu dinero</span>
                </li>
              </ul>

              <Button
                size="lg"
                variant={plan.highlight ? "primary" : "outline"}
                onClick={() => open(plan.id)}
                className="mt-8 w-full"
              >
                Comprar al toke
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
