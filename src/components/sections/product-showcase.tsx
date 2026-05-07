"use client";

import Image from "next/image";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const stains = [
  { x: -130, y: -70, size: 22, color: "#FF5722", delay: 0 },
  { x: 120, y: -100, size: 18, color: "#FFD60A", delay: 0.4 },
  { x: 150, y: 70, size: 26, color: "#10b981", delay: 0.8 },
  { x: -140, y: 90, size: 20, color: "#3B82F6", delay: 1.2 },
  { x: 70, y: 140, size: 14, color: "#A855F7", delay: 1.6 },
  { x: -90, y: -130, size: 16, color: "#EC4899", delay: 2.0 },
];

export function ProductShowcase() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
      {/* Soft gradient halo behind product */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-foreground/[0.03] via-transparent to-primary/10" />

      <div className="absolute inset-0 grid place-items-center">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-full w-full"
        >
          {/* Floating stain particles that get "absorbed" toward the product */}
          <div className="absolute inset-0 grid place-items-center">
            {stains.map((stain, i) => (
              <Stain key={i} {...stain} />
            ))}
          </div>

          {/* The product image — replace /products/quitamanchas.svg with a real PNG when available */}
          <Image
            src="/products/quitamanchas.svg"
            alt="Quitamanchas Portátil AlTokPe"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 480px"
            className="object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.18)]"
          />
        </motion.div>
      </div>
    </div>
  );
}

function Stain({
  x,
  y,
  size,
  color,
  delay,
}: {
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.6, 0.6, 0],
        scale: [0, 1, 1, 0.4],
        x: [x, x, x * 0.3, 0],
        y: [y, y, y * 0.3, 0],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        repeatDelay: 1.5,
        ease,
        times: [0, 0.2, 0.6, 1],
      }}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
      }}
      className="pointer-events-none absolute rounded-full blur-sm"
    />
  );
}
