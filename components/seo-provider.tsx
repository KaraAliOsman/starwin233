'use client';

import { DefaultSeo } from 'next-seo';
import defaultSeo from '../next-seo.config';

export function SeoProvider() {
  return <DefaultSeo {...defaultSeo} />;
}
