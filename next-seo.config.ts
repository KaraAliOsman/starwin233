import { DefaultSeoProps } from 'next-seo';
import { siteConfig } from './lib/utils';

const config: DefaultSeoProps = {
  titleTemplate: `%s | ${siteConfig.name}`,
  defaultTitle: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: siteConfig.url,
    siteName: siteConfig.name
  }
};

export default config;
