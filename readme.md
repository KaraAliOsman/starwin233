# PROMPT MAESTRO — Sitio web STARWIN (estilo Clay/Apple, sin Bootstrap)

**Objetivo:** Genera un sitio web corporativo de alto nivel para **STARWIN PVC** (ventanas y puertas de PVC/termopanel), con estética minimalista tipo **Clay** / **agencia top-tier**, enfoque premium y desempeño sobresaliente. Entregables: **código productivo** listo para deploy, **copys** persuasivos, **componentes reutilizables**, **APIs** y **docs**.

---

## 1) Lineamientos de Marca y UX

* **Estilo:** Minimalista, premium, limpio, inspiraciones: Clay, Apple, Stripe. Sin adornos innecesarios. Ritmo visual con aire/espacios amplios, grid preciso.
* **Tono de copy:** Profesional, claro, de confianza; evita adjetivación vacía. Beneficios explícitos, pruebas sociales reales.
* **No usar:** Bootstrap ni jQuery. Prohibidos sliders genéricos y clichés visuales.
* **Tipografía:** Titulares **Inter** o **SF Pro**; textos **Inter**. Ajuste de *tracking* y *leading* para legibilidad.
* **Paleta (tokens):**

  * `--sw-bg`: #0b0c0e (fondo profundo)
  * `--sw-ink`: #e8ecef (texto principal)
  * `--sw-accent`: #7dd3fc (acento frío)
  * `--sw-neutral`: #a3a9b3
  * `--sw-card`: #121417
  * **Colores de línea:** Antracita, Winchester, Roble Dorado (para swatches del catálogo)
* **A11y:** WCAG 2.2 AA como mínimo. Focus states visibles. Soporte teclado.
* **Micro‑interacciones:** Sutiles, 150–250ms, *easings* suaves. *Motion* funcional (no decorativo).

---

## 2) Stack Técnico

* **Framework:** Next.js 15 (App Router) + **TypeScript**.
* **Estilos:** **Tailwind CSS** + variables CSS para design tokens. Sin Bootstrap.
* **UI Kit:** **shadcn/ui** (Card, Button, Dialog, Accordion, Tabs, Sheet, Tooltip) + **lucide-react**.
* **Contenido:** MDX para Blog & Noticias.
* **Datos:** Prisma ORM + SQLite en dev y Postgres en prod.
* **Validación:** Zod + React Hook Form.
* **APIs:** Rutas Next.js (`/api/...`) con caché y *rate limit*.
* **Analítica:** Vercel Analytics + consentimiento cookies (banner minimal) + eventos (CTA WhatsApp, envío de cotización, envío de contacto).
* **SEO:** metadatos por ruta, OG Images dinámicas, **schema.org** con `next-seo` o `schema-dts`.
* **i18n:** es-CL por defecto; base preparada para `tr-TR`.
* **Build:** Imágenes optimizadas (`next/image`), fuentes locales, Lighthouse ≥ 95 en Perf/SEO/Best Practices/A11y.

---

## 3) Información de la Empresa (usar en copys/footers)

* **Nombre:** STARWIN PVC
* **Dirección showroom:** Pedro de Valdivia 733, Concepción, Chile
* **WhatsApp/Contacto:** +56 9 6600 3771 (CTA principal)
* **Sitio:** starwinpvc.cl
* **Servicios:** Ventanas/puertas de PVC, termopaneles (4-12-4, 4-16-4, Low‑E, laminado), instalación profesional, mantenciones.

---

## 4) Arquitectura de Información (rutas y secciones)

Crea las siguientes páginas (App Router) con copys y componentes reales, no *lorem ipsum*:

1. **Inicio** (`/`)

   * Hero sin slider: claim potente + subcopy + CTA [Cotizar por WhatsApp] y [Cotizador Online].
   * Módulo “**Beneficios Starwin**”: aislamiento térmico/acústico, hermeticidad, durabilidad, seguridad, garantía.
   * Destacados del **Catálogo** (3–6 productos) con fotos realistas y swatches.
   * **Nuestro Proceso** resumido (4 pasos con ilustraciones lineales).
   * **Pruebas sociales:** testimonios, logos de clientes/obras.
   * **Blog & Noticias**: 3 posts recientes.

2. **Catálogo** (`/catalogo`)

   * Filtros: tipo de apertura (abatible, corredera, proyectante, oscilobatiente), color (Antracita, Blanco, Winchester, Roble Dorado), vidrio (4-12-4, 4-16-4, Low‑E, laminado), cámara (12/16), marca de perfilería.
   * Cards con galería, ficha técnica, CTA [Solicitar cotización].
   * Componente **Comparador** (hasta 3 productos).

3. **Nuestro Proceso** (`/proceso`)

   * 6 etapas: visita técnica, toma de medidas, propuesta, fabricación, instalación, postventa.
   * Ilustraciones y *timelines*.

4. **Beneficios Starwin** (`/beneficios`)

   * Sección por beneficio con micro‑infografías y datos (p. ej., reducción de ruido hasta X dB, ahorro energético estimado).

5. **Blog & Noticias** (`/blog` y `/blog/[slug]`)

   * MDX + categorías, *reading time*, *related posts*, **schema.org Article**.

6. **Cotizador Online** (`/cotizador`)

   * Form dinámico con pasos (tipo de apertura, ancho, alto, vidrio, color, cantidad, instalación sí/no, comuna).
   * Precio estimado en tiempo real con desglose (perfil, vidrio, herrajes, instalación, traslado) + tolerancias.
   * Botón **“Enviar a WhatsApp”** con resumen estructurado + opción de PDF.

7. **Contacto** (`/contacto`)

   * Form con validación, mapa estático, datos de contacto, horarios, CTA WhatsApp.

8. **Preguntas Frecuentes (FAQ)** (`/faq`)

   * Accordion accesible. Agrupa en: Pre‑compra, Instalación, Postventa, Garantía, Pagos.

9. **Nuestra Garantía** (`/garantia`)

   * Términos de cobertura, exclusiones, proceso de reclamo, tiempos de respuesta.

10. **Política de Privacidad** (`/privacidad`) y **Términos y Condiciones** (`/terminos`)

* Textos legales completos, claros y vigentes en Chile.

---

## 5) Componentes Clave (Tailwind + shadcn/ui)

* `<HeroPrimary />`, `<BenefitCard />`, `<ProcessStep />`, `<ProductCard />`, `<VariantSwatches />`, `<ComparePanel />`, `<PriceBreakdown />`, `<QuoteForm />`, `<WhatsAppCTA />`, `<TestimonialCarousel />` (sin *autoplay*), `<BlogCard />`, `<MDXContent />`, `<FAQAccordion />`, `<CookieConsent />`.
* Tema Tailwind con `@layer` y `css variables` para tokens; *dark‑first*.

---

## 6) API de Cotización (especificación)

* Endpoint: `POST /api/cotizar`
* **Request** `{ ancho_mm: number, alto_mm: number, apertura: "abatible"|"corredera"|"proyectante"|"oscilobatiente", vidrio: "4-12-4"|"4-16-4"|"lowe"|"laminado", color: "blanco"|"antracita"|"winchester"|"roble", cantidad: number, instalacion: boolean, comuna: string }`
* **Pricing engine** (ejemplo):

  * m² = (ancho_mm * alto_mm) / 1_000_000.
  * Base por perfil según apertura; *multipliers* por vidrio y color; instalación por m²; traslado por zona; descuentos por volumen (>10u).
  * Retornar `{ subtotal, perfil, vidrio, herrajes, instalacion, traslado, descuento, iva, total, lead_time }` + `assumptions`.
* **Rate limiting:** 30 req/min por IP. Validación Zod. Sanitización.

---

## 7) SEO, Contenido y Estructura

* **Keywords primarias:** “ventanas de PVC”, “ventanas termopanel”, “ventanas de pvc Concepción”, “aislamiento acústico”, “aislamiento térmico”.
* **Schema.org:** `LocalBusiness`, `Product`, `FAQPage`, `Article`.
* **Sitemap y robots** configurados.
* **URLs limpias**, títulos H1 únicos por página, meta‑descripciones artesanales.
* **Copys ejemplo** (adaptar al layout):

  * *Hero:* “Ventanas de PVC con ingeniería precisa. Confort real, eficiencia medible.”
  * *Subcopy:* “Fabricamos e instalamos en Concepción y BioBío. Medición profesional, montaje limpio, garantía real.”
  * *CTA:* “Cotizar por WhatsApp” / “Cotizador Online”.

---

## 8) Rendimiento y Calidad

* **Lighthouse ≥ 95** en todas las categorías.
* Imágenes **AVIF/WebP** con `next/image`, *lazyload*.
* **Edge caching** para páginas estáticas; revalidación ISR para Blog y Catálogo.
* **Testing:** Vitest + Playwright para rutas críticas (cotizador, contacto, catálogo).
* **CI/CD:** GitHub Actions + Vercel deploy preview + checks (lint, typecheck, tests).

---

## 9) Contenido Legal y Privacidad

* Política de privacidad conforme a normativa chilena, cookies y analítica.
* Términos claros sobre tiempos de fabricación/instalación, garantías, y responsabilidad.

---

## 10) Entrega Final

* Repositorio con README de instalación y **guía editorial** (cómo crear productos, posts MDX, actualizar precios del cotizador).
* **Seeds** de productos (10 ítems) y 5 posts MDX.
* Archivo `pricing.config.json` con tablas de base, *multipliers* y zonas.
* **Archivo de copia** (`/content/copy.json`) con textos por sección.

---

## 11) Criterios de Aceptación (Checklist)

* [ ] No hay Bootstrap/jQuery.
* [ ] Tailwind configurado con tokens.
* [ ] Rutas y secciones exactamente como se especifica.
* [ ] Cotizador Online funcional con API y exportación a WhatsApp/PDF.
* [ ] SEO técnico (sitemap/robots/OG/schema) y editorial (metas únicas).
* [ ] A11y AA.
* [ ] Pruebas básicas + CI.
* [ ] Rendimiento ≥ 95.

> **Ahora, genera todo el proyecto completo con este lineamiento, incluyendo código, copys finales, assets necesarios, seeds y documentación.**
