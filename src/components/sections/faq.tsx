"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/container";
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
    <section id="faq" className="relative overflow-hidden py-24 sm:py-40">
      <Container size="xl">
        <div className="mb-16 grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="text-eyebrow text-primary">{"// Preguntas"}</p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-display text-[clamp(2.5rem,8vw,7rem)]">
              Lo que la gente
              <br />
              <span className="text-foreground/30">nos pregunta</span>
              <span className="text-primary">.</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="text-sm text-foreground/60">
              ¿Otra pregunta? Escríbenos por WhatsApp y te respondemos en minutos.
            </p>
            <a
              href="#contacto"
              className="mt-4 inline-block text-eyebrow text-primary underline-offset-4 hover:underline"
            >
              Hablar con el equipo →
            </a>
          </div>

          <div className="border-t border-foreground/10 lg:col-span-9">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="border-b border-foreground/10"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-center gap-6">
                    <span className="text-eyebrow text-foreground/40 transition-colors group-hover:text-primary">
                      0{index + 1}
                    </span>
                    <span className="text-base font-medium sm:text-lg">
                      {faq.question}
                    </span>
                  </div>
                  <Plus
                    size={20}
                    className={cn(
                      "shrink-0 text-foreground/40 transition-all duration-300",
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
                      <div className="ml-14 pb-6 pr-12 text-sm leading-relaxed text-foreground/70 sm:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
