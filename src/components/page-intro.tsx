"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "motion/react";

const SESSION_KEY = "altokpe-intro-shown";
const HOLD_MS = 2400;
const EXIT_MS = 900;

function subscribe() {
  // sessionStorage doesn't emit change events for this tab — no-op subscription
  return () => {};
}

function getSnapshot() {
  return sessionStorage.getItem(SESSION_KEY) === "1";
}

function getServerSnapshot() {
  return false;
}

export function PageIntro() {
  const alreadyShown = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (alreadyShown) return;
    const timer = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "1");
      setDismissed(true);
    }, HOLD_MS);
    return () => clearTimeout(timer);
  }, [alreadyShown]);

  function dismiss() {
    sessionStorage.setItem(SESSION_KEY, "1");
    setDismissed(true);
  }

  const visible = !alreadyShown && !dismissed;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-intro"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: EXIT_MS / 1000, ease: [0.83, 0, 0.17, 1] }}
          onClick={dismiss}
          className="fixed inset-0 z-100 cursor-pointer overflow-hidden bg-primary text-primary-foreground"
          aria-hidden="true"
          role="presentation"
        >
          {/* subtle diagonal stripes texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-55deg, #ffffff 0, #ffffff 32px, transparent 32px, transparent 80px)",
            }}
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 0.85, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-eyebrow"
            >
              {"// Lima · Perú · 2026"}
            </motion.p>

            <RevealLine delay={0.25}>
              <h1 className="text-display mt-6 text-[clamp(4.5rem,18vw,18rem)]">
                AlTokPe
              </h1>
            </RevealLine>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="mt-10 flex flex-col items-center gap-4"
            >
              <p className="text-eyebrow opacity-80">
                Lo que necesitas, al toke
              </p>

              <div className="relative h-px w-40 bg-primary-foreground/25">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: HOLD_MS / 1000 - 0.2, ease: "easeInOut" }}
                  className="absolute inset-y-0 left-0 bg-primary-foreground"
                />
              </div>
            </motion.div>
          </div>

          {/* corner brackets */}
          <div className="pointer-events-none absolute left-6 top-6 h-10 w-10 border-l-2 border-t-2 border-primary-foreground/40" />
          <div className="pointer-events-none absolute right-6 top-6 h-10 w-10 border-r-2 border-t-2 border-primary-foreground/40" />
          <div className="pointer-events-none absolute bottom-6 left-6 h-10 w-10 border-b-2 border-l-2 border-primary-foreground/40" />
          <div className="pointer-events-none absolute bottom-6 right-6 h-10 w-10 border-b-2 border-r-2 border-primary-foreground/40" />

          {/* bottom hint */}
          <div className="absolute inset-x-0 bottom-10 text-center">
            <p className="text-eyebrow opacity-50">
              Toca para entrar
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function RevealLine({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}
