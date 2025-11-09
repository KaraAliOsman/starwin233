import { Card } from './ui/card';

interface PriceBreakdownProps {
  data: {
    subtotal: number;
    perfil: number;
    vidrio: number;
    herrajes: number;
    instalacion: number;
    traslado: number;
    descuento: number;
    iva: number;
    total: number;
    lead_time: string;
    assumptions: string[];
  } | null;
}

export function PriceBreakdown({ data }: PriceBreakdownProps) {
  if (!data) {
    return (
      <Card className="space-y-3 text-sm text-neutral">
        <p>Completa el formulario para estimar una inversión referencial. Nuestros ingenieros revisan cada solicitud antes de emitir una cotización formal.</p>
      </Card>
    );
  }

  return (
    <Card className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-foreground">Resumen estimado</h3>
        <p className="text-sm text-neutral">Incluye materiales, herrajes certificados y servicios opcionales.</p>
      </div>
      <dl className="space-y-3 text-sm text-neutral">
        <div className="flex justify-between">
          <dt>Perfilería PVC</dt>
          <dd className="text-foreground">${data.perfil.toLocaleString('es-CL')}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Vidrio termopanel</dt>
          <dd className="text-foreground">${data.vidrio.toLocaleString('es-CL')}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Herrajes certificados</dt>
          <dd className="text-foreground">${data.herrajes.toLocaleString('es-CL')}</dd>
        </div>
        {data.instalacion > 0 ? (
          <div className="flex justify-between">
            <dt>Instalación</dt>
            <dd className="text-foreground">${data.instalacion.toLocaleString('es-CL')}</dd>
          </div>
        ) : null}
        <div className="flex justify-between">
          <dt>Traslado</dt>
          <dd className="text-foreground">${data.traslado.toLocaleString('es-CL')}</dd>
        </div>
        {data.descuento > 0 ? (
          <div className="flex justify-between text-accent">
            <dt>Descuento volumen</dt>
            <dd>- ${data.descuento.toLocaleString('es-CL')}</dd>
          </div>
        ) : null}
        <div className="flex justify-between">
          <dt>IVA (19%)</dt>
          <dd className="text-foreground">${data.iva.toLocaleString('es-CL')}</dd>
        </div>
      </dl>
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 p-4">
        <span className="text-sm text-neutral">Total estimado</span>
        <span className="text-2xl font-semibold text-foreground">${data.total.toLocaleString('es-CL')}</span>
      </div>
      <div className="space-y-2 text-sm text-neutral">
        <p>{data.lead_time}</p>
        <ul className="list-disc space-y-1 pl-5">
          {data.assumptions.map((assumption) => (
            <li key={assumption}>{assumption}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
