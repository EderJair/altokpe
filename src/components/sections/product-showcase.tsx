"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const stains = [
  { x: -120, y: -60, size: 24, color: "#FF5722", delay: 0 },
  { x: 110, y: -90, size: 18, color: "#FFD60A", delay: 0.4 },
  { x: 140, y: 60, size: 28, color: "#1EB980", delay: 0.8 },
  { x: -130, y: 80, size: 20, color: "#3B82F6", delay: 1.2 },
  { x: 60, y: 130, size: 14, color: "#A855F7", delay: 1.6 },
  { x: -80, y: -120, size: 16, color: "#EC4899", delay: 2.0 },
];

export function ProductShowcase() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-foreground/5 via-foreground/[0.02] to-primary/10" />
      <div className="absolute inset-4 rounded-[2rem] border border-foreground/5" />

      <div className="absolute inset-0 grid place-items-center">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          {stains.map((stain, i) => (
            <Stain key={i} {...stain} />
          ))}

          <ProductSvg />
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 rounded-b-[2.5rem] bg-gradient-to-t from-background to-transparent" />
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
        opacity: [0, 0.7, 0.7, 0],
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
        left: "50%",
        top: "50%",
        marginLeft: -size / 2,
        marginTop: -size / 2,
      }}
      className="absolute rounded-full blur-sm"
    />
  );
}

function ProductSvg() {
  return (
    <svg
      width="220"
      height="320"
      viewBox="0 0 220 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-2xl"
      aria-label="Quitamanchas Portátil AlTokPe"
    >
      <defs>
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF6B3A" />
          <stop offset="100%" stopColor="#E84A1F" />
        </linearGradient>
        <linearGradient id="bodyShine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="capGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1eb980" />
          <stop offset="100%" stopColor="#16a34a" />
        </linearGradient>
        <radialGradient id="rollerGrad" cx="0.4" cy="0.4">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1eb980" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="55" y="60" width="110" height="240" rx="18" fill="url(#bodyGrad)" />
      <rect x="55" y="60" width="110" height="240" rx="18" fill="url(#bodyShine)" />

      <rect x="55" y="60" width="110" height="22" rx="10" fill="rgba(255,255,255,0.18)" />
      <rect x="55" y="278" width="110" height="22" rx="10" fill="rgba(0,0,0,0.18)" />

      <g transform="translate(75, 130)">
        <rect width="70" height="2.5" rx="1.25" fill="rgba(255,255,255,0.85)" />
        <rect y="10" width="44" height="2" rx="1" fill="rgba(255,255,255,0.7)" />
        <rect y="20" width="58" height="2" rx="1" fill="rgba(255,255,255,0.55)" />
      </g>

      <g transform="translate(110, 200)">
        <text
          x="0"
          y="0"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill="rgba(255,255,255,0.95)"
          fontFamily="system-ui, sans-serif"
          letterSpacing="2"
        >
          AlTokPe
        </text>
      </g>

      <ellipse cx="110" cy="50" rx="40" ry="14" fill="url(#capGrad)" />
      <ellipse cx="110" cy="44" rx="40" ry="14" fill="url(#capGrad)" />
      <ellipse cx="110" cy="44" rx="40" ry="14" fill="url(#rollerGrad)" />
      <ellipse cx="100" cy="38" rx="6" ry="3" fill="rgba(255,255,255,0.5)" />

      <rect x="50" y="298" width="120" height="14" rx="6" fill="#0a0a0a" />
      <g transform="translate(60, 308)">
        {Array.from({ length: 12 }).map((_, i) => (
          <rect
            key={i}
            x={i * 8}
            y={0}
            width="3"
            height="14"
            rx="1.5"
            fill="#1eb980"
          />
        ))}
      </g>
    </svg>
  );
}
