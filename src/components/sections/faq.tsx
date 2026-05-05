"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "¿Cómo y cuándo llega mi pedido?",
    answer:
      "Hacemos entregas a todo Lima Metropolitana en 24 a 48 horas hábiles. Te coordinamos por WhatsApp el día y hora exactos. Para provincia, enviamos por agencia de tu preferencia.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Pago contraentrega en efectivo o por Yape al recibir el producto. Pronto sumamos pago con tarjeta vía Culqi.",
  },
  {
    question: "¿Funciona en cualquier tipo de tela?",
    answer:
      "Sí. Está probado en algodón, lino, denim, poliéster, lana, cuero sintético y tapizados. En telas muy delicadas (seda pura) recomendamos probar primero en una zona oculta.",
  },
  {
    question: "¿Sirve para manchas viejas?",
    answer:
      "Funciona mejor en manchas frescas, pero también remueve manchas con varios días en la mayoría de telas. Mientras menos esperes, mejor el resultado.",
  },
  {
    question: "¿Cuánto rinde un solo quitamanchas?",
    answer:
      "Una unidad rinde para cientos de aplicaciones puntuales. Te debería durar varios meses con uso regular.",
  },
  {
    question: "¿Qué pasa si no me funciona?",
    answer:
      "Tienes 7 días desde que recibes el producto para devolverlo si no quedaste conforme. Te devolvemos el 100% de tu dinero, sin preguntas.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <Container size="md">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="primary" className="mb-4">
            Preguntas frecuentes
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Lo que la gente nos pregunta.
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-foreground/[0.02]"
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-medium">{faq.question}</span>
                <Plus
                  size={18}
                  className={cn(
                    "flex-shrink-0 text-muted-foreground transition-transform duration-300",
                    openIndex === index && "rotate-45 text-primary",
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
