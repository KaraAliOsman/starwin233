import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { WhatsAppCTA } from './whatsapp-cta';

export function HeroPrimary() {
  return (
    <section className="relative isolate overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/10 via-card/60 to-black/40 p-16 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
      <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="space-y-8">
          <span className="inline-flex items-center rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-neutral">
            Ingeniería en PVC
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Ventanas de PVC con ingeniería precisa. Confort real, eficiencia medible.
          </h1>
          <p className="max-w-xl text-base text-neutral sm:text-lg">
            Fabricamos, instalamos y damos soporte en Concepción y todo BioBío. Medición técnica, montaje limpio y garantía documentada para proyectos residenciales y comerciales.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <WhatsAppCTA />
            <Button asChild variant="outline">
              <Link href="/cotizador">Cotizador Online</Link>
            </Button>
          </div>
          <dl className="grid grid-cols-2 gap-6 text-sm text-neutral sm:grid-cols-4">
            <div>
              <dt className="font-medium text-foreground">Años de experiencia</dt>
              <dd>12+ en soluciones térmicas</dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">Garantía</dt>
              <dd>5 años en perfilería</dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">Tiempo de respuesta</dt>
              <dd>&lt;24h hábiles</dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">Proyectos entregados</dt>
              <dd>+2.100</dd>
            </div>
          </dl>
        </div>
        <div className="relative h-[420px] w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/30">
          <Image
            src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=900&q=80"
            alt="Ventana de PVC instalada con vista a la ciudad"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-black/60 p-4 text-sm text-neutral backdrop-blur">
            Vidrios termopanel Low-E 4-16-4 · Aislamiento acústico 42 dB · Montaje certificado
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
    </section>
  );
}
