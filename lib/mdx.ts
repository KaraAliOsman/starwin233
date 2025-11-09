import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const BLOG_PATH = path.join(process.cwd(), 'content', 'blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  cover: string;
  content: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const entries = fs.readdirSync(BLOG_PATH);
  return entries
    .map((file) => {
      const fullPath = path.join(BLOG_PATH, file);
      const source = fs.readFileSync(fullPath, 'utf-8');
      const { content, data } = matter(source);
      return {
        slug: file.replace(/\.mdx$/, ''),
        title: data.title as string,
        excerpt: data.excerpt as string,
        date: data.date as string,
        readingTime: data.readingTime as string,
        category: data.category as string,
        cover: data.cover as string,
        content
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getBlogPost(slug: string) {
  const filePath = path.join(BLOG_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(source);
  const mdxSource = await serialize(content);
  return {
    slug,
    title: data.title as string,
    excerpt: data.excerpt as string,
    date: data.date as string,
    readingTime: data.readingTime as string,
    category: data.category as string,
    cover: data.cover as string,
    mdxSource
  };
}
