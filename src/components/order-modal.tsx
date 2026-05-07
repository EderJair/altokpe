"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X, MessageCircle, Loader2, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { product, type ProductPlan } from "@/lib/product";
import { buildOrderMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type OrderContextValue = {
  open: (planId?: string) => void;
  close: () => void;
};

const OrderContext = React.createContext<OrderContextValue | null>(null);

export function useOrder() {
  const ctx = React.useContext(OrderContext);
  if (!ctx) throw new Error("useOrder must be used within OrderProvider");
  return ctx;
}

const orderSchema = z.object({
  name: z.string().min(2, "Ingresa tu nombre completo"),
  phone: z
    .string()
    .min(9, "El número debe tener al menos 9 dígitos")
    .regex(/^[0-9+\s]+$/, "Solo números"),
  district: z.string().min(2, "Indica tu distrito"),
  address: z.string().min(5, "Ingresa una dirección válida"),
  reference: z.string().optional(),
});

type OrderFormValues = z.infer<typeof orderSchema>;

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedPlanId, setSelectedPlanId] = React.useState<string>(
    product.plans.find((p) => p.highlight)?.id ?? product.plans[0].id,
  );

  const open = React.useCallback((planId?: string) => {
    if (planId) setSelectedPlanId(planId);
    setIsOpen(true);
  }, []);
  const close = React.useCallback(() => setIsOpen(false), []);

  const value = React.useMemo(() => ({ open, close }), [open, close]);

  return (
    <OrderContext.Provider value={value}>
      {children}
      <OrderModal
        isOpen={isOpen}
        onClose={close}
        selectedPlanId={selectedPlanId}
        onChangePlan={setSelectedPlanId}
      />
    </OrderContext.Provider>
  );
}

type OrderModalProps = {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanId: string;
  onChangePlan: (planId: string) => void;
};

function OrderModal({
  isOpen,
  onClose,
  selectedPlanId,
  onChangePlan,
}: OrderModalProps) {
  const selectedPlan =
    product.plans.find((p) => p.id === selectedPlanId) ?? product.plans[0];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<OrderFormValues>({
    resolver: zodResolver(orderSchema),
  });

  React.useEffect(() => {
    if (!isOpen) reset();
  }, [isOpen, reset]);

  React.useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  async function onSubmit(values: OrderFormValues) {
    const message = buildOrderMessage({
      ...values,
      planLabel: selectedPlan.label,
      units: selectedPlan.units,
      price: selectedPlan.price,
    });
    const url = buildWhatsAppUrl(message);
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[92svh] w-full max-w-3xl overflow-y-auto rounded-t-3xl bg-card text-card-foreground shadow-2xl sm:rounded-3xl"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-card/95 px-6 py-4 backdrop-blur sm:px-8">
              <div>
                <p className="text-eyebrow text-muted-foreground">
                  {"// Confirma tu pedido"}
                </p>
                <p className="mt-1 text-lg font-semibold tracking-tight">
                  {product.name}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar"
                className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-foreground/5"
              >
                <X size={18} />
              </button>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-7 px-6 py-7 sm:px-8 sm:py-8"
            >
              <fieldset className="space-y-3">
                <legend className="text-eyebrow text-muted-foreground">
                  Elige tu plan
                </legend>
                <div className="grid gap-3 sm:grid-cols-3">
                  {product.plans.map((plan) => (
                    <PlanOption
                      key={plan.id}
                      plan={plan}
                      selected={plan.id === selectedPlan.id}
                      onSelect={() => onChangePlan(plan.id)}
                    />
                  ))}
                </div>
              </fieldset>

              <fieldset className="space-y-3">
                <legend className="text-eyebrow text-muted-foreground">
                  Tus datos
                </legend>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <Field
                      label="Nombre y apellido"
                      error={errors.name?.message}
                      {...register("name")}
                      placeholder="Juan Pérez"
                      autoComplete="name"
                    />
                  </div>
                  <Field
                    label="Celular"
                    error={errors.phone?.message}
                    {...register("phone")}
                    placeholder="999 999 999"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                  />
                  <Field
                    label="Distrito"
                    error={errors.district?.message}
                    {...register("district")}
                    placeholder="Miraflores"
                  />
                  <div className="sm:col-span-2">
                    <Field
                      label="Dirección"
                      error={errors.address?.message}
                      {...register("address")}
                      placeholder="Av. Ejemplo 123, Dpto 4"
                      autoComplete="street-address"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Field
                      label="Referencia (opcional)"
                      error={errors.reference?.message}
                      {...register("reference")}
                      placeholder="Frente al parque, edificio azul"
                    />
                  </div>
                </div>
              </fieldset>

              <div className="flex flex-wrap items-center gap-4 rounded-2xl bg-muted/60 px-5 py-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-success" />
                  <span>Pago contraentrega o Yape</span>
                </div>
                <div className="hidden h-4 w-px bg-border sm:block" />
                <div className="flex items-center gap-2">
                  <Truck size={14} className="text-primary" />
                  <span>Envío a todo Lima</span>
                </div>
                <div className="hidden h-4 w-px bg-border sm:block" />
                <div className="flex items-center gap-2">
                  <MessageCircle size={14} className="text-foreground/70" />
                  <span>Confirmamos por WhatsApp</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-baseline gap-3">
                  <span className="text-eyebrow text-muted-foreground">
                    Total
                  </span>
                  <span className="text-display text-3xl">
                    S/<span className="text-primary">
                      {selectedPlan.price.toFixed(2)}
                    </span>
                  </span>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <MessageCircle size={18} />
                  )}
                  Confirmar por WhatsApp
                </Button>
              </div>
              <p className="text-center text-xs text-muted-foreground">
                Te llevamos a WhatsApp con tu pedido listo. Confirmamos por chat.
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

type PlanOptionProps = {
  plan: ProductPlan;
  selected: boolean;
  onSelect: () => void;
};

function PlanOption({ plan, selected, onSelect }: PlanOptionProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "group relative flex h-full flex-col rounded-2xl border p-4 text-left transition-all sm:p-5",
        selected
          ? "border-primary bg-primary/5"
          : "border-border bg-transparent hover:border-foreground/30",
      )}
    >
      {plan.badge && (
        <span
          className={cn(
            "absolute -top-2 right-3 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider",
            selected
              ? "bg-primary text-primary-foreground"
              : "bg-foreground text-background",
          )}
        >
          {plan.badge}
        </span>
      )}

      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            "grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 transition-colors",
            selected ? "border-primary bg-primary" : "border-border",
          )}
        >
          {selected && (
            <span className="h-2 w-2 rounded-full bg-primary-foreground" />
          )}
        </span>
        <span className="text-sm font-semibold">{plan.label}</span>
      </div>

      <div className="mt-auto pt-4">
        <p className="text-display text-3xl leading-none">
          S/<span className={selected ? "text-primary" : "text-foreground"}>
            {plan.price}
          </span>
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          S/ {plan.pricePerUnit.toFixed(2)} por unidad
        </p>
        {plan.savings && (
          <p className="mt-1 text-xs font-medium text-success">{plan.savings}</p>
        )}
      </div>
    </button>
  );
}

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const Field = React.forwardRef<HTMLInputElement, FieldProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <label className="block">
        <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {label}
        </span>
        <input
          ref={ref}
          className={cn(
            "w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors",
            "placeholder:text-muted-foreground/60",
            "focus:border-primary focus:ring-2 focus:ring-primary/20",
            error ? "border-red-500" : "border-border",
            className,
          )}
          {...props}
        />
        {error && (
          <span className="mt-1 block text-xs text-red-500">{error}</span>
        )}
      </label>
    );
  },
);

Field.displayName = "Field";
