"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { product } from "@/lib/product";
import { useOrder } from "@/components/order-modal";

export function MobileCTA() {
  const [visible, setVisible] = React.useState(false);
  const { scrollY } = useScroll();
  const { open } = useOrder();
  const featuredPlan =
    product.plans.find((p) => p.highlight) ?? product.plans[0];

  useMotionValueEvent(scrollY, "change", (y) => {
    setVisible(y > 600);
  });

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: visible ? 0 : 100 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-background/90 px-4 py-3 backdrop-blur-lg md:hidden"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-xs text-muted-foreground">{product.name}</p>
          <p className="text-sm font-semibold">
            Desde S/ {product.plans[0].price.toFixed(2)}
          </p>
        </div>
        <Button onClick={() => open(featuredPlan.id)} size="md">
          Comprar al toke
        </Button>
      </div>
    </motion.div>
  );
}
