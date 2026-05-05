"use client";

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Andrea M.",
    location: "Surco, Lima",
    initials: "AM",
    rating: 5,
    quote:
      "Se me cayó café en la blusa antes de una reunión. Saqué el quitamanchas, frotita y listo. Llegué impecable.",
  },
  {
    name: "Luis R.",
    location: "San Miguel, Lima",
    initials: "LR",
    rating: 5,
    quote:
      "Lo tengo en la mochila siempre. Lo uso para zapatillas blancas y queda como nuevas. Mejor compra del año.",
  },
  {
    name: "Carla P.",
    location: "Miraflores, Lima",
    initials: "CP",
    rating: 4,
    quote:
      "Mis hijos manchan todo. Probé mil productos y este es el primero que de verdad funciona en una pasada.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="relative py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="primary" className="mb-4">
            Lo que dicen
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Más de mil clientes felices.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Reviews reales de gente que ya lo está usando todos los días.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col rounded-3xl border border-border bg-card p-8"
            >
              <Quote size={28} className="text-primary/40" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground/90">
                {testimonial.quote}
              </blockquote>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-foreground/[0.04] text-sm font-semibold">
                    {testimonial.initials}
                  </div>
                  <figcaption>
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </figcaption>
                </div>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={
                        i < testimonial.rating
                          ? "fill-accent text-accent"
                          : "fill-foreground/15 text-foreground/15"
                      }
                    />
                  ))}
                </div>
              </div>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
