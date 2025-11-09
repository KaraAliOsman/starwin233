import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getBlogPost, getBlogPosts } from '../../../lib/mdx';
import { MDXContent } from '../../../components/mdx-content';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug).catch(() => null);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.cover]
    }
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug).catch(() => null);
  if (!post) return notFound();

  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <Link href="/blog" className="text-sm text-accent">
          ← Volver al blog
        </Link>
        <p className="text-xs uppercase tracking-[0.3em] text-neutral">{post.category}</p>
        <h1 className="text-4xl font-semibold text-foreground">{post.title}</h1>
        <p className="text-sm text-neutral">
          {new Date(post.date).toLocaleDateString('es-CL', { day: '2-digit', month: 'long', year: 'numeric' })} · {post.readingTime} de lectura
        </p>
      </header>
      <div className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-white/5">
        <Image src={post.cover} alt={post.title} fill className="object-cover" />
      </div>
      <MDXContent source={post.mdxSource} />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            author: {
              '@type': 'Organization',
              name: 'STARWIN PVC'
            },
            datePublished: post.date,
            image: post.cover
          })
        }}
      />
    </article>
  );
}
