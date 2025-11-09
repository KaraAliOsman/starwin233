import { Metadata } from 'next';
import { processSteps } from '../../data/process';
import { ProcessStep } from '../../components/process-step';
import { siteConfig } from '../../lib/utils';

export const metadata: Metadata = {
  title: 'Nuestro proceso',
  description: 'Conoce las etapas de ingeniería, fabricación e instalación de ventanas y puertas PVC STARWIN.'
};

export default function ProcesoPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-6">
        <h1 className="text-4xl font-semibold text-foreground">Metodología STARWIN</h1>
        <p className="max-w-2xl text-neutral">
          Cada proyecto se gestiona con trazabilidad, responsables y entregables claros. Trabajamos con cartas Gantt, reportes fotográficos y documentación digital para que tengas control total.
        </p>
      </header>
      <ol className="grid gap-6">
        {processSteps.map((step, index) => (
          <li key={step.title}>
            <ProcessStep index={index + 1} {...step} />
          </li>
        ))}
      </ol>
      <section className="rounded-3xl border border-white/5 bg-card/60 p-8">
        <h2 className="text-2xl font-semibold text-foreground">Lead time referencial</h2>
        <p className="mt-4 text-neutral">
          Los plazos de fabricación varían entre 15 y 24 días hábiles según el tipo de apertura. Coordinamos instalación en terreno en horario acordado y dejamos todo limpio. Agenda una visita técnica en {siteConfig.phone}.
        </p>
      </section>
    </div>
  );
}
