export const siteConfig = {
  name: "AlTokPe",
  domain: "altokpe.com",
  description:
    "Lo que necesitas, al toke. Tienda online peruana con productos seleccionados que llegan rápido a tu puerta.",
  shortDescription: "Tu tienda al toke en Perú.",
  url: "https://altokpe.com",
  ogImage: "https://altokpe.com/og.png",
  locale: "es-PE",
  currency: "PEN",
  country: "PE",
  contact: {
    email: "hola@altokpe.com",
    whatsapp: "",
  },
  social: {
    instagram: "https://instagram.com/altokpe",
    tiktok: "https://tiktok.com/@altokpe",
    facebook: "https://facebook.com/altokpe",
  },
} as const;

export type SiteConfig = typeof siteConfig;
