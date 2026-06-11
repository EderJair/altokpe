"use client";

import { motion } from "motion/react";
import { Check, RotateCw } from "lucide-react";
import { Container } from "@/components/ui/container";
import { product } from "@/lib/product";
import { ProductShowcase } from "@/components/sections/product-showcase";

const ease = [0.22, 1, 0.36, 1] as const;

export function ProductExplore() {
  return (
    <section id="producto" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute inset-0 bg-stripes-grid-light pointer-events-none"
      />

      <Container size="xl" className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* LEFT: copy + features */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-5"
          >
            <p className="text-eyebrow text-primary">{"// El producto"}</p>
            <h2 className="text-display mt-6 text-[clamp(2.25rem,5vw,4.25rem)]">
              Míralo por
              <br />
              <span className="text-foreground/30">todos lados</span>
              <span className="text-primary">.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/60 sm:text-lg">
              Doble cabezal: roller para aplicar y cepillo de silicona para
              frotar. Tamaño de bolsillo para llevarlo donde vayas.
            </p>

            <ul className="mt-8 space-y-3">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <Check size={18} className="mt-0.5 shrink-0 text-primary" />
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 inline-flex items-center gap-2 border border-foreground/15 px-4 py-2 text-eyebrow text-foreground/60">
              <RotateCw size={14} className="text-primary" />
              <span>Arrastra para girar el producto</span>
            </div>
          </motion.div>

          {/* RIGHT: 3D viewer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <ProductShowcase />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
