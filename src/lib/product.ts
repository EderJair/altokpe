export type ProductImage = {
  src: string;
  alt: string;
};

export type ProductPlan = {
  id: string;
  units: number;
  label: string;
  badge?: string;
  price: number;
  pricePerUnit: number;
  savings?: string;
  freeShipping?: boolean;
  highlight?: boolean;
};

export const product = {
  id: "quitamanchas-portatil",
  name: "Quitamanchas Portátil",
  tagline: "Manchas fuera, en segundos.",
  shortDescription:
    "Borra manchas al toke. Lleva tu limpiador donde vayas y olvidate de los accidentes en la ropa.",
  description:
    "Un limpiador de manchas de bolsillo con doble cabezal: roller para aplicar y cepillo de silicona para frotar. Funciona en algodón, lino, denim, poliéster, calzado y tapizados. Diseñado para que las manchas dejen de arruinarte el día — al toke.",
  rating: 4.4,
  reviewCount: 1284,
  images: [
    { src: "/products/stain-remover-hero.svg", alt: "Quitamanchas Portátil AlTokPe vista frontal" },
    { src: "/products/stain-remover-side.svg", alt: "Quitamanchas Portátil AlTokPe vista lateral" },
    { src: "/products/stain-remover-detail.svg", alt: "Detalle del cabezal del Quitamanchas Portátil" },
    { src: "/products/stain-remover-colors.svg", alt: "Quitamanchas Portátil en distintos colores" },
  ] satisfies ProductImage[],
  beforeAfter: {
    before: { src: "/products/before.svg", alt: "Camisa con mancha antes de usar el quitamanchas" },
    after: { src: "/products/after.svg", alt: "Camisa limpia después de usar el quitamanchas" },
  },
  plans: [
    {
      id: "single",
      units: 1,
      label: "1 unidad",
      price: 55,
      pricePerUnit: 55,
    },
    {
      id: "duo",
      units: 2,
      label: "Pack 2 unidades",
      badge: "Más vendido",
      price: 89,
      pricePerUnit: 44.5,
      savings: "Ahorras S/21",
      highlight: true,
    },
    {
      id: "trio",
      units: 3,
      label: "Pack 3 unidades",
      badge: "Mejor precio",
      price: 119,
      pricePerUnit: 39.67,
      savings: "Ahorras S/46",
      freeShipping: true,
    },
  ] satisfies ProductPlan[],
  features: [
    "Doble cabezal: roller + cepillo de silicona",
    "Tamaño bolsillo, llevalo donde vayas",
    "Funciona en ropa, calzado y tapizados",
    "Fórmula que no decolora",
    "Reutilizable — rinde para meses",
  ],
} as const;

export type Product = typeof product;
