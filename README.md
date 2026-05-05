# AlTokPe

> Lo que necesitas, al toke.

Tienda online peruana de productos seleccionados, con foco en envíos rápidos y experiencia mobile-first.

---

## Stack

| Capa | Tecnología |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Lenguaje | TypeScript |
| Estilos | [Tailwind CSS v4](https://tailwindcss.com) |
| Hosting | [Vercel](https://vercel.com) |
| Pasarela de pago | [Culqi](https://culqi.com) (Yape, Visa, Mastercard, Amex) |
| Base de datos | [Supabase](https://supabase.com) (Postgres) |
| Email transaccional | [Resend](https://resend.com) + React Email |
| Tracking | Meta Pixel + TikTok Pixel + GA4 |

## Requisitos

- Node.js >= 22
- pnpm >= 10
- Git

## Setup local

```bash
# 1. Clonar
git clone https://github.com/EderJair/altokpe.git
cd altokpe

# 2. Instalar dependencias
pnpm install

# 3. Variables de entorno
cp .env.example .env.local
# Editar .env.local con las claves reales

# 4. Levantar dev server (con Turbopack)
pnpm dev
```

La app queda en [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Descripción |
|---|---|
| `pnpm dev` | Dev server con Turbopack (hot reload) |
| `pnpm build` | Build de producción |
| `pnpm start` | Servir el build |
| `pnpm lint` | Linter (ESLint) |

## Estructura del proyecto

```
altokpe/
├── docs/                    # Decisiones de negocio y research
│   ├── decisiones.md        # Bitácora de decisiones del equipo
│   └── research_productos.md # Research de productos para Perú
├── public/                  # Assets estáticos
├── src/
│   ├── app/                 # App Router (rutas y layouts)
│   │   ├── layout.tsx       # Layout raíz + metadata SEO
│   │   ├── page.tsx         # Landing principal
│   │   └── globals.css      # Estilos globales (Tailwind v4)
│   ├── components/          # Componentes React
│   │   ├── ui/              # Primitivos (shadcn)
│   │   └── sections/        # Secciones de landing
│   ├── lib/
│   │   ├── site.ts          # Config global del sitio
│   │   └── utils.ts         # Helpers (cn, formatPrice)
│   └── types/               # Tipos TypeScript compartidos
├── .env.example             # Variables de entorno template
├── .editorconfig
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## Documentación interna

- [Bitácora de decisiones](docs/decisiones.md) — todas las decisiones del proyecto con fecha y razón.
- [Research de productos](docs/research_productos.md) — análisis del mercado peruano y shortlist de productos.

## Equipo

| Rol | Responsable |
|---|---|
| Tech / Web / Ads | Eder Jair |
| Sourcing China | Facundo |
| Sourcing China | Alex |

## Despliegue

El proyecto está configurado para deploy automático en **Vercel** desde la rama `main`.

```bash
# Cada push a main triggerea deploy
git push origin main
```

## Licencia

Privado. Todos los derechos reservados.
