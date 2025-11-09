import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
import { VariantSwatches } from './variant-swatches';
import { Card } from './ui/card';

export interface ProductVariant {
  name: string;
  color: string;
  hex: string;
}

export interface ProductCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  variants: ProductVariant[];
  specs: { label: string; value: string }[];
}

export function ProductCard({ slug, title, description, image, variants, specs }: ProductCardProps) {
  return (
    <Card className="flex h-full flex-col gap-8">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/5 bg-black/30">
        <Image src={image} alt={title} fill className="object-cover" sizes="(min-width: 768px) 400px, 100vw" />
      </div>
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-neutral">{description}</p>
          </div>
          <Link
            href={`/catalogo/${slug}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral transition hover:text-accent"
            aria-label={`Ver detalles de ${title}`}
          >
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
        <VariantSwatches variants={variants} />
        <dl className="grid gap-2 text-sm text-neutral">
          {specs.map((spec) => (
            <div key={spec.label} className="flex justify-between">
              <dt>{spec.label}</dt>
              <dd className="text-foreground">{spec.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <Button asChild className="mt-auto">
        <Link href={`/cotizador?producto=${slug}`}>Solicitar cotización</Link>
      </Button>
    </Card>
  );
}
