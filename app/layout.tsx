import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { siteConfig } from '../lib/utils';
import { SeoProvider } from '../components/seo-provider';
import { SiteHeader } from '../components/site-header';
import { SiteFooter } from '../components/site-footer';
import { CookieConsent } from '../components/cookie-consent';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://starwinpvc.cl'),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
    locale: 'es_CL'
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL" className="dark">
      <body className={`${inter.variable} min-h-screen bg-background text-foreground antialiased`}>
        <SeoProvider />
        <SiteHeader />
        <main className="container space-y-24 py-16">{children}</main>
        <SiteFooter />
        <Analytics />
        <CookieConsent />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: siteConfig.name,
              url: siteConfig.url,
              telephone: siteConfig.phone,
              address: {
                '@type': 'PostalAddress',
                streetAddress: siteConfig.address,
                addressLocality: 'Concepción',
                addressCountry: 'CL'
              }
            })
          }}
        />
      </body>
    </html>
  );
}
