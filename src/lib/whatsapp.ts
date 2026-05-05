import { siteConfig } from "@/lib/site";

export type OrderPayload = {
  name: string;
  phone: string;
  district: string;
  address: string;
  reference?: string;
  planLabel: string;
  units: number;
  price: number;
};

export function buildOrderMessage(order: OrderPayload): string {
  const lines = [
    `Hola ${siteConfig.name}, quiero hacer un pedido.`,
    "",
    "Producto: Quitamanchas Portátil",
    `Plan: ${order.planLabel} (${order.units} ${order.units === 1 ? "unidad" : "unidades"})`,
    `Total: S/ ${order.price.toFixed(2)}`,
    "",
    "Mis datos:",
    `Nombre: ${order.name}`,
    `Celular: ${order.phone}`,
    `Distrito: ${order.district}`,
    `Dirección: ${order.address}`,
    order.reference ? `Referencia: ${order.reference}` : null,
    "",
    "Confirmamos por aquí. Gracias.",
  ].filter(Boolean);

  return lines.join("\n");
}

export function buildWhatsAppUrl(message: string): string {
  const phone = siteConfig.contact.whatsapp.replace(/[^\d]/g, "");
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}
