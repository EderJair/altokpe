"use client";

import { motion } from "motion/react";
import { Users, Star, Truck, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";

const stats = [
  { icon: Users, value: "+1,000", label: "clientes felices" },
  { icon: Star, value: "4.4 / 5", label: "calificación promedio" },
  { icon: Truck, value: "24h", label: "envío en Lima" },
  { icon: ShieldCheck, value: "7 días", label: "garantía total" },
];

export function StatBar() {
  return (
    <section className="border-y border-border bg-card/40 py-8">
      <Container size="xl">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3"
              >
                <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-foreground/[0.04] text-foreground">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-base font-bold leading-tight tracking-tight sm:text-lg">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
