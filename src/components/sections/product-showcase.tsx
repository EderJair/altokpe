"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function ProductShowcase() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-xl lg:max-w-2xl">
      {/* Soft gradient halo behind product */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-linear-to-br from-foreground/3 via-transparent to-primary/10" />

      <div className="absolute inset-0 grid place-items-center">
        <motion.div
          initial={{ rotate: -10, scale: 0.95, opacity: 0 }}
          animate={{ rotate: -10, scale: 1, opacity: 1, y: [0, -12, 0] }}
          transition={{
            rotate: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            opacity: { duration: 0.6 },
            y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative h-[110%] w-[110%]"
        >
          <Image
            src="/products/quitamanchas.png"
            alt="Quitamanchas Portátil AlTokPe"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 640px"
            className="object-contain drop-shadow-[0_40px_50px_rgba(0,0,0,0.25)]"
          />
        </motion.div>
      </div>
    </div>
  );
}
