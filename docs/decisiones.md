# Bitácora de decisiones — AlTokPe

> Documento vivo. Cada decisión grande del proyecto se anota acá con fecha y razón.
> Cuando algo cambie, se tacha pero NO se borra — para tener trazabilidad de por qué se decidió cada cosa.

---

## ✅ Decisión #1 — Nombre de la marca

**Fecha:** 2026-05-04
**Decidido:** **AlTokPe** — dominio `altokpe.com`

**Razón:**
- "Al toke" = slang peruano para "rápido / al instante / al toque". Conecta directo con el público local.
- "Pe" = Perú. Refuerza identidad local sin sonar regional-cerrado.
- Junta ambos en una sola palabra registrable como `.com` (mejor que `.pe` para credibilidad y SEO global a futuro).
- Comunica el atributo más importante para un ecommerce: **velocidad**.
- Brandable: funciona para logo, hashtag, handle de IG/TikTok.
- No encasilla en un nicho — sirve igual para mascotas, hogar, beauty, tech.

**Tagline tentativo (a validar):**
- *"AlTokPe. Lo que necesitas, al toke."*
- *"Al toke en tu puerta."*

**Pendientes inmediatos:**
- [ ] Verificar que `altokpe.com` esté disponible en [Namecheap](https://www.namecheap.com) o [GoDaddy](https://www.godaddy.com)
- [ ] Reservar handles: `@altokpe` en Instagram, TikTok, Facebook
- [ ] Búsqueda en [INDECOPI](https://www.indecopi.gob.pe) para confirmar que no haya marca registrada con conflicto
- [ ] Reservar `altokpe.pe` también (defensivo, ~$30/año) para que nadie se lo agarre

---

## ✅ Decisión #2 — Modelo de tienda: One-product store

**Fecha:** 2026-05-05
**Decidido:** arrancar con **un solo producto** (no catálogo).
**Producto elegido:** **Quitamanchas portátil** (rodillo limpiador de manchas tipo Gieleph / Elephant Kiss / Zhizhixiang).

**Razón:**
- Strategy de testing focalizado: una landing dedicada a un producto convierte mejor que catálogo disperso.
- Producto validado en Perú: stainpop.com lo vende a S/55 con 4.4★ y +1000 clientes.
- Margen razonable (no espectacular): costo ~$5.50-6 con envío, venta S/55 (~$14.5) → margen bruto ~$8-9.
- Wow factor visual claro para video/ad (limpia mancha al instante).

**Sourcing en 1688:** ~$1.79 USD/unidad ([búsqueda](https://s.1688.com/selloffer/offer_search.htm?keywords=%E5%8E%BB%E6%B8%8D%E7%AC%94)).

**Optimización de margen pendiente:** considerar **bundle** (2 quitamanchas + paño/bolsita) → vender a S/89-99 = margen ~$15.

---

## ✅ Decisión #3 — Stack técnico de la web

**Fecha:** 2026-05-05
**Decidido:** **web propia** (NO Shopify) en **Next.js 15 + App Router + Turbopack**, hosting en **Vercel**.

**Razón de NO Shopify:**
- Shopify cobra 2% extra por venta cuando no usas Shopify Payments (que no existe en Perú) → con Culqi se paga 4.2% + 2% Shopify = 6.2% por transacción. En margen ajustado, duele.
- One-product store gana más con landing dedicada y custom que con tema Shopify.
- El usuario es desarrollador → tiene la ventaja de ir custom.
- Branding 100% propio, sin look "tienda Shopify".
- Costo mensual: $0-5 vs $29 Shopify.

**Razón de Next.js (sobre Vite + React):**
- Server actions / route handlers para webhook de Culqi sin necesidad de backend separado.
- Metadata API nativa para SEO + Open Graph (clave para compartir en redes / Meta Ads).
- `next/image` para optimización automática de fotos de producto.
- Turbopack (`next dev --turbo`) ya iguala la velocidad de dev de Vite en 2026.
- **Plan B si Turbopack sigue lento tras 1 día de uso:** migrar a Vite + React + Hono backend en mismo repo en Vercel.

**Stack confirmado:**

| Capa | Herramienta |
|---|---|
| Framework | Next.js 15 (App Router) + TypeScript |
| Dev server | Turbopack (`next dev --turbo`) |
| UI | Tailwind + shadcn/ui |
| Hosting | Vercel |
| Pasarela | Culqi Checkout (widget hosted, sin compliance PCI) |
| Pagos alternos | Yape (Culqi lo integra) + Mercado Pago Perú backup |
| Database | Supabase (Postgres free tier) |
| Email transaccional | Resend + React Email |
| Tracking | Meta Pixel + TikTok Pixel + GA4 vía GTM |
| Imágenes | Vercel Blob |
| Analytics | Vercel Analytics + PostHog free |

---

## ⏳ Decisiones pendientes

### Pendiente #1 — Optimización de margen vía bundle
Decidir si vender producto solo (S/55) o bundle 2x + accesorio (S/89-99).
**Acción:** discutir con Facundo/Alex después de validar costo real con proveedor.

### Pendiente #2 — Presupuesto inicial confirmado
**Rango propuesto:** $200-350 USD primer mes ($100 c/u entre los 3).
**Estado:** sin confirmar.

### Pendiente #3 — RUC + Culqi
**Estado:** Usuario va a tramitar esta semana (2026-05-05 a 2026-05-11).
**Documentos necesarios:** DNI, RUC peruano, cuenta bancaria peruana, web operativa.
**Tiempo estimado de aprobación Culqi:** 3-7 días hábiles.

### Pendiente #4 — Compra de muestra física
Comprar 1-2 unidades del quitamanchas en AliExpress (envío express ~5-7 días) para fotos/videos propios. Sin material propio el ad es genérico.

---

## 📜 Historial de cambios

| Fecha | Decisión | Estado |
|---|---|---|
| 2026-05-04 | Nombre de marca: AlTokPe / altokpe.com | ✅ Confirmada |
| 2026-05-04 | Mercado: solo Perú (al inicio) | ✅ Confirmada |
| 2026-05-04 | Modelo: dropshipping puro | ✅ Confirmada |
| 2026-05-04 | Sin nicho fijo — estrategia de productos estrella | ✅ Confirmada |
| 2026-05-05 | Dominio confirmado: altokpe.com (.pe estaba tomado) | ✅ Confirmada |
| 2026-05-05 | Modelo de tienda: one-product store | ✅ Confirmada |
| 2026-05-05 | Producto inicial: quitamanchas portátil | ✅ Confirmada |
| 2026-05-05 | Stack: Next.js 15 + Turbopack + Vercel (no Shopify) | ✅ Confirmada |
