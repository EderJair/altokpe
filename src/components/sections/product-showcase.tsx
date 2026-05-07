"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          poster?: string;
          alt?: string;
          "auto-rotate"?: boolean | "";
          "auto-rotate-delay"?: string | number;
          "rotation-per-second"?: string;
          "camera-controls"?: boolean | "";
          "disable-zoom"?: boolean | "";
          "shadow-intensity"?: string | number;
          "shadow-softness"?: string | number;
          exposure?: string | number;
          "tone-mapping"?: string;
          "interaction-prompt"?: string;
          ar?: boolean | "";
          "ar-modes"?: string;
          "ar-scale"?: string;
          "camera-orbit"?: string;
          "field-of-view"?: string;
          "min-camera-orbit"?: string;
          "max-camera-orbit"?: string;
          "environment-image"?: string;
          loading?: string;
          reveal?: string;
        },
        HTMLElement
      >;
    }
  }
}

export function ProductShowcase() {
  const [viewerReady, setViewerReady] = useState(false);

  useEffect(() => {
    let active = true;
    import("@google/model-viewer").then(() => {
      if (active) setViewerReady(true);
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-xl lg:max-w-2xl">
      {/* Soft gradient halo behind product */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-linear-to-br from-foreground/3 via-transparent to-primary/10" />

      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 0.95, opacity: 0, rotate: -8 }}
          animate={{ scale: 1, opacity: 1, rotate: -8 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full"
        >
          {/* While model-viewer JS is loading, render the PNG. After hydration,
              model-viewer takes over (and uses the same PNG as its poster). */}
          {viewerReady ? (
            <model-viewer
              src="/products/quitamanchas.glb"
              poster="/products/quitamanchas.png"
              alt="Quitamanchas Portátil AlTokPe"
              auto-rotate
              auto-rotate-delay="500"
              rotation-per-second="22deg"
              camera-controls
              disable-zoom
              interaction-prompt="none"
              shadow-intensity="0.7"
              shadow-softness="0.9"
              exposure="1.05"
              tone-mapping="aces"
              ar
              ar-modes="webxr scene-viewer quick-look"
              ar-scale="auto"
              camera-orbit="0deg 80deg 130%"
              field-of-view="30deg"
              loading="eager"
              reveal="auto"
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
                "--poster-color": "transparent",
              } as React.CSSProperties}
            />
          ) : (
            <PosterFallback />
          )}
        </motion.div>
      </div>
    </div>
  );
}

function PosterFallback() {
  return (
    <div className="relative h-full w-full">
      <Image
        src="/products/quitamanchas.png"
        alt="Quitamanchas Portátil AlTokPe"
        fill
        priority
        sizes="(max-width: 768px) 90vw, 640px"
        className="object-contain drop-shadow-[0_40px_50px_rgba(0,0,0,0.25)]"
      />
    </div>
  );
}
