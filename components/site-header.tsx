import Link from 'next/link';
import { Button } from './ui/button';
import { WhatsAppCTA } from './whatsapp-cta';

const navigation = [
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/proceso', label: 'Nuestro proceso' },
  { href: '/beneficios', label: 'Beneficios' },
  { href: '/blog', label: 'Blog & Noticias' },
  { href: '/cotizador', label: 'Cotizador Online' }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[rgba(11,12,14,0.85)] backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em]">
          <span className="h-10 w-10 rounded-2xl border border-white/10 bg-black/40" />
          STARWIN PVC
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-neutral lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <WhatsAppCTA />
        </div>
        <Button asChild variant="ghost" className="lg:hidden">
          <Link href="/cotizador">Cotizar</Link>
        </Button>
      </div>
    </header>
  );
}
