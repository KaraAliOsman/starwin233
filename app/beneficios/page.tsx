import { Metadata } from 'next';
import { benefits } from '../../data/benefits';
import { BenefitCard } from '../../components/benefit-card';

export const metadata: Metadata = {
  title: 'Beneficios Starwin PVC',
  description: 'Descubre el impacto térmico, acústico y de seguridad de las ventanas y puertas STARWIN PVC.'
};

export default function BeneficiosPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-6">
        <h1 className="text-4xl font-semibold text-foreground">Beneficios medibles</h1>
        <p className="max-w-2xl text-neutral">
          Cada beneficio está respaldado por ensayos y documentación. No hablamos de “confort” en abstracto: entregamos cifras y protocolos auditables.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {benefits.map((benefit) => (
          <BenefitCard key={benefit.title} {...benefit} />
        ))}
      </div>
    </div>
  );
}
