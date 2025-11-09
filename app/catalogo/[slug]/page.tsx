import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';
import { products } from '../../../data/products';
import { VariantSwatches } from '../../../components/variant-swatches';
import { Button } from '../../../components/ui/button';
import Link from 'next/link';
import { colorLabelMap } from '../../../lib/utils';

interface ProductPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) return {};
  return {
    title: `${product.title} · Catálogo STARWIN`,
    description: product.description
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) return notFound();

  return (
    <article className="space-y-10">
      <header className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral">{product.apertura}</p>
          <h1 className="text-4xl font-semibold text-foreground">{product.title}</h1>
          <p className="text-neutral">{product.description}</p>
          <VariantSwatches variants={product.variants} />
          <dl className="grid gap-2 text-sm text-neutral">
            {product.specs.map((spec) => (
              <div key={spec.label} className="flex justify-between">
                <dt>{spec.label}</dt>
                <dd className="text-foreground">{spec.value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href={`/cotizador?producto=${product.slug}`}>Cotizar este modelo</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="https://wa.me/56966003771" target="_blank" rel="noopener noreferrer">
                Hablar con ingeniería
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-white/10">
          <Image src={product.image} alt={product.title} fill className="object-cover" />
        </div>
      </header>
      <section className="rounded-3xl border border-white/5 bg-card/60 p-8">
        <h2 className="text-2xl font-semibold text-foreground">Ficha técnica</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="space-y-2 text-sm text-neutral">
            <p>Vidrio: {product.vidrio}</p>
            <p>Perfilería: {product.perfileria}</p>
            <p>Cámara: {product.camara} mm</p>
            <p>Transmisión térmica: {product.uValue}</p>
          </div>
          <div className="space-y-2 text-sm text-neutral">
            <p>Atenuación acústica: {product.rw}</p>
            <p>
              Colores disponibles:{' '}
              {product.color
                .map((item) => colorLabelMap[item as keyof typeof colorLabelMap] ?? item)
                .join(', ')}
            </p>
            <p>Referencia de inversión: {product.priceGuide}</p>
            <p>Garantía STARWIN: 5 años perfilería / 2 años herrajes</p>
          </div>
        </div>
      </section>
    </article>
  );
}
