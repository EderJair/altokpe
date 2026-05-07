"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/container";

const testimonials = [
  {
    name: "Andrea M.",
    location: "Surco · Lima",
    initials: "AM",
    rating: 5,
    quote:
      "Se me cayó café en la blusa antes de una reunión. Saqué el quitamanchas, frotita y listo. Llegué impecable.",
    highlight: "Llegué impecable.",
  },
  {
    name: "Luis R.",
    location: "San Miguel · Lima",
    initials: "LR",
    rating: 5,
    quote:
      "Lo tengo en la mochila siempre. Lo uso para zapatillas blancas y queda como nuevas. Mejor compra del año.",
    highlight: "Mejor compra del año.",
  },
  {
    name: "Carla P.",
    location: "Miraflores · Lima",
    initials: "CP",
    rating: 4,
    quote:
      "Mis hijos manchan todo. Probé mil productos y este es el primero que de verdad funciona en una pasada.",
    highlight: "Funciona en una pasada.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Testimonials() {
  return (
    <section id="testimonios" className="relative overflow-hidden py-24 sm:py-40">
      <Container size="xl">
        <div className="mb-16 grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="text-eyebrow text-primary">{"// Reviews"}</p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-display text-[clamp(2.5rem,8vw,7rem)]">
              +1,000
              <br />
              <span className="text-foreground/30">clientes felices</span>
              <span className="text-primary">.</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-px overflow-hidden border border-foreground/10 bg-foreground/10 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease }}
              className="group relative flex flex-col bg-background p-8 transition-colors hover:bg-muted sm:p-10"
            >
              <div className="flex items-center justify-between">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i < t.rating
                          ? "fill-primary text-primary"
                          : "fill-foreground/15 text-foreground/15"
                      }
                    />
                  ))}
                </div>
                <p className="text-eyebrow text-foreground/40">0{index + 1}</p>
              </div>

              <blockquote className="mt-8 flex-1">
                <p className="text-display text-2xl leading-tight text-primary sm:text-3xl">
                  {t.highlight}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                  {t.quote}
                </p>
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-3 border-t border-foreground/10 pt-5">
                <div className="grid h-10 w-10 place-items-center bg-foreground text-background">
                  <span className="text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-foreground/50">{t.location}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
