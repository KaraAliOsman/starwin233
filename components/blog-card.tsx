import Link from 'next/link';
import Image from 'next/image';
import { Card } from './ui/card';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  readingTime: string;
  category: string;
  date: string;
}

export function BlogCard({ slug, title, excerpt, image, readingTime, category, date }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group h-full">
      <Card className="flex h-full flex-col gap-6 transition-transform duration-200 group-hover:-translate-y-1">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/5">
          <Image src={image} alt={title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width:768px) 400px, 100vw" />
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-neutral">
            <span>{category}</span>
            <span>{date}</span>
          </div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-neutral">{excerpt}</p>
          <span className="text-xs text-accent">{readingTime} de lectura</span>
        </div>
      </Card>
    </Link>
  );
}
