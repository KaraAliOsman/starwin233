import { Metadata } from 'next';
import { QuoteForm } from '../../components/quote-form';

export const metadata: Metadata = {
  title: 'Cotizador online',
  description: 'Calcula una inversión estimada para ventanas y puertas de PVC con termopanel y recibe el detalle por WhatsApp.'
};

export default function CotizadorPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-6">
        <h1 className="text-4xl font-semibold text-foreground">Cotizador online</h1>
        <p className="max-w-2xl text-neutral">
          Obtén un estimado inmediato según tus medidas, tipo de apertura, vidrio y comuna. Revisa el desglose de perfil, vidrio, herrajes, instalación y traslado. Luego puedes enviar el resumen por WhatsApp o generar PDF.
        </p>
      </header>
      <QuoteForm />
    </div>
  );
}
