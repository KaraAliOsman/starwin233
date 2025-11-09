import { Metadata } from 'next';
import { getBlogPosts } from '../../lib/mdx';
import { BlogCard } from '../../components/blog-card';

export const metadata: Metadata = {
  title: 'Blog & Noticias',
  description: 'Actualizaciones técnicas, casos de éxito y normativa sobre ventanas y puertas de PVC en Chile.'
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getBlogPosts();
  return (
    <div className="space-y-12">
      <header className="space-y-6">
        <h1 className="text-4xl font-semibold text-foreground">Blog & Noticias</h1>
        <p className="max-w-2xl text-neutral">
          Contenido creado por nuestro equipo de ingeniería y operaciones. Compartimos aprendizajes de obra, normativas vigentes y recomendaciones de mantenimiento.
        </p>
      </header>
      <div className="grid gap-8 md:grid-cols-3">
        {posts.map((post) => (
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
    </div>
  );
}
