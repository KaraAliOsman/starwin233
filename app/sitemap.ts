import { MetadataRoute } from 'next';
import { siteConfig } from '../lib/utils';
import { products } from '../data/products';
import { getBlogPosts } from '../lib/mdx';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url;
  const blogPosts = await getBlogPosts();
  const productUrls = products.map((product) => ({
    url: `${base}/catalogo/${product.slug}`,
    lastModified: new Date().toISOString()
  }));
  const blogUrls = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.date
  }));
  const staticUrls: MetadataRoute.Sitemap = [
    '',
    '/catalogo',
    '/proceso',
    '/beneficios',
    '/blog',
    '/cotizador',
    '/contacto',
    '/faq',
    '/garantia',
    '/privacidad',
    '/terminos'
  ].map((path) => ({ url: `${base}${path}`, lastModified: new Date().toISOString() }));

  return [...staticUrls, ...productUrls, ...blogUrls];
}
