import Link from 'next/link';
import { siteConfig } from '../lib/utils';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-black/40">
      <div className="container grid gap-10 py-16 md:grid-cols-3">
        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral">STARWIN PVC</h2>
          <p className="text-sm text-neutral">
            Ventanas y puertas de PVC, termopaneles y montaje certificado en Concepción y BioBío. Contacto directo con ingenieros de proyectos.
          </p>
          <p className="text-sm text-neutral">
            {siteConfig.address}
            <br />
            <Link href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="text-foreground">
              {siteConfig.phone}
            </Link>
          </p>
        </div>
        <div className="space-y-3 text-sm text-neutral">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral">Navegación</h3>
          <nav className="grid gap-2">
            <Link href="/catalogo">Catálogo</Link>
            <Link href="/proceso">Nuestro proceso</Link>
            <Link href="/beneficios">Beneficios</Link>
            <Link href="/cotizador">Cotizador Online</Link>
            <Link href="/faq">Preguntas frecuentes</Link>
          </nav>
        </div>
        <div className="space-y-3 text-sm text-neutral">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral">Legal</h3>
          <nav className="grid gap-2">
            <Link href="/garantia">Nuestra garantía</Link>
            <Link href="/privacidad">Política de privacidad</Link>
            <Link href="/terminos">Términos y condiciones</Link>
          </nav>
          <p className="text-xs text-neutral">&copy; {new Date().getFullYear()} STARWIN PVC. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
