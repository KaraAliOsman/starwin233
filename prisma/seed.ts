import { PrismaClient } from '@prisma/client';
import { products } from '../data/products';
import { getBlogPosts } from '../lib/mdx';
import { colorLabelMap } from '../lib/utils';

const prisma = new PrismaClient();

async function main() {
  const posts = await getBlogPosts();

  await prisma.product.deleteMany();
  await prisma.post.deleteMany();

  await prisma.product.createMany({
    data: products.map((product) => ({
      slug: product.slug,
      title: product.title,
      description: product.description,
      apertura: product.apertura,
      vidrio: product.vidrio,
      color: product.color
        .map((item) => colorLabelMap[item as keyof typeof colorLabelMap] ?? item)
        .join(', '),
      camara: product.camara,
      perfileria: product.perfileria,
      uValue: product.uValue,
      rw: product.rw,
      priceGuide: product.priceGuide
    }))
  });

  await prisma.post.createMany({
    data: posts.map((post) => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      date: new Date(post.date),
      category: post.category,
      readingTime: post.readingTime,
      cover: post.cover
    }))
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
