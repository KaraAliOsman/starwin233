import { Metadata } from 'next';
import Link from 'next/link';
import { HeroPrimary } from '../components/hero-primary';
import { BenefitCard } from '../components/benefit-card';
import { benefits } from '../data/benefits';
import { products } from '../data/products';
import { ProductCard } from '../components/product-card';
import { processSteps } from '../data/process';
import { ProcessStep } from '../components/process-step';
import { testimonials } from '../data/testimonials';
import { TestimonialCarousel } from '../components/testimonial-carousel';
import { getBlogPosts } from '../lib/mdx';
import { BlogCard } from '../components/blog-card';

export const revalidate = 60;

export const metadata: Metadata = {
  description: 'Ventanas y puertas de PVC con termopanel certificadas en Concepción y BioBío. Ingeniería, instalación y garantía documentada.'
};

export default async function Page() {
  const blogPosts = await getBlogPosts();
  return (
    <div className="space-y-24">
      <HeroPrimary />
      <section className="space-y-10">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold text-foreground">Beneficios STARWIN</h2>
          <Link href="/beneficios" className="text-sm text-accent">
            Ver todos
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.slice(0, 6).map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </section>
      <section className="space-y-10">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold text-foreground">Catálogo destacado</h2>
          <Link href="/catalogo" className="text-sm text-accent">
            Explorar catálogo
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
      </section>
      <section className="space-y-10">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold text-foreground">Nuestro proceso</h2>
          <Link href="/proceso" className="text-sm text-accent">
            Ver detalle
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {processSteps.slice(0, 4).map((step, index) => (
            <ProcessStep key={step.title} index={index + 1} {...step} />
          ))}
        </div>
      </section>
      <section className="space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-foreground">Pruebas sociales</h2>
            <p className="text-sm text-neutral">Trabajamos con desarrolladores inmobiliarios, clínicas y oficinas premium en BioBío.</p>
          </div>
          <div className="flex gap-6 text-sm uppercase tracking-[0.3em] text-neutral">
            <span>Inmobiliaria Aitué</span>
            <span>Clínica Sanatorio Alemán</span>
            <span>Universidad de Concepción</span>
          </div>
        </div>
        <TestimonialCarousel testimonials={testimonials} />
      </section>
      <section className="space-y-10">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold text-foreground">Blog & Noticias</h2>
          <Link href="/blog" className="text-sm text-accent">
            Ver blog
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              image={post.cover}
              readingTime={post.readingTime}
              category={post.category}
              date={new Date(post.date).toLocaleDateString('es-CL', {
                day: '2-digit',
                month: 'short'
              })}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
