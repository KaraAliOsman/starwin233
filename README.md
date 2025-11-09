# STARWIN PVC — Sitio corporativo

Sitio web premium para STARWIN PVC construido con Next.js 15, Tailwind CSS y componentes shadcn/ui. Incluye cotizador en línea, catálogo avanzado, blog en MDX y documentación completa.

## Requisitos

- Node.js 18+
- pnpm, npm o yarn

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Tests y calidad

```bash
npm run lint
npm run typecheck
npm run test
npm run test:ui
```

Playwright requiere instalar los navegadores:

```bash
npx playwright install
```

## Base de datos

Prisma está configurado con SQLite para desarrollo y cuenta con un esquema alternativo para Postgres en producción. Para generar la base y sembrar datos en desarrollo:

```bash
npx prisma migrate dev
npm run seed
```

Para desplegar en Postgres utiliza `prisma/schema.postgres.prisma`:

```bash
npx prisma migrate deploy --schema prisma/schema.postgres.prisma
```

## Estructura destacada

- `app/` — Rutas App Router, incluyendo cotizador, catálogo, blog y páginas legales.
- `components/` — Componentes reutilizables (Hero, BenefitCard, QuoteForm, etc.).
- `content/` — Copys centralizados y posts MDX.
- `data/` — Productos, beneficios, testimonios y proceso.
- `lib/` — Utilidades, motor de pricing y cargador de MDX.
- `pricing.config.json` — Tabla base para el motor de cotización.
- `prisma/` — Esquema y seeds.

## Despliegue

- Configurar variables de entorno para Postgres (`DATABASE_URL`) y analítica si corresponde.
- Vercel recomendado. Incluye sitemap y robots listos, además de schema.org.

## Guía editorial

- Para agregar productos: editar `data/products.ts` y ejecutar `npm run seed` para reflejar en la base.
- Para nuevos posts: agregar un archivo `.mdx` en `content/blog` con frontmatter (title, excerpt, date, readingTime, category, cover).
- Actualizar textos globales en `content/copy.json`.
- Ajustar pricing en `pricing.config.json` (perfiles, vidrio, multiplicadores, lead time).

## Analítica y cookies

- Vercel Analytics activado por defecto.
- Banner de consentimiento minimalista (`<CookieConsent />`).

## CI/CD

- Workflow en `.github/workflows/ci.yml` ejecuta lint, typecheck y pruebas.
