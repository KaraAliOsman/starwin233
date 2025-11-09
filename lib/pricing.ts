import pricingConfig from '../pricing.config.json';

type Apertura = 'abatible' | 'corredera' | 'proyectante' | 'oscilobatiente';
type Vidrio = '4-12-4' | '4-16-4' | 'lowe' | 'laminado';
type Color = 'blanco' | 'antracita' | 'winchester' | 'roble';

type PricingRequest = {
  ancho_mm: number;
  alto_mm: number;
  apertura: Apertura;
  vidrio: Vidrio;
  color: Color;
  cantidad: number;
  instalacion: boolean;
  comuna: string;
};

type PricingResponse = {
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
};

type PricingConfig = {
  perfiles: Record<Apertura, number>;
  vidrio: Record<Vidrio, number>;
  color: Record<Color, number>;
  instalacion: number;
  traslado: Record<string, number>;
  herrajes: number;
  leadTime: Record<Apertura, string>;
};

const config = pricingConfig as PricingConfig;

export function calculatePricing(input: PricingRequest): PricingResponse {
  const area = (input.ancho_mm * input.alto_mm) / 1_000_000;
  const perfilBase = config.perfiles[input.apertura] * area;
  const vidrioBase = config.vidrio[input.vidrio] * area;
  const colorMultiplier = config.color[input.color];
  const herrajes = config.herrajes * area;
  const instalacion = input.instalacion ? config.instalacion * area : 0;
  const traslado = config.traslado[input.comuna.toLowerCase()] ?? config.traslado['default'];

  const perfilCost = perfilBase * colorMultiplier;
  const vidrioCost = vidrioBase;
  const subtotalUnit = perfilCost + vidrioCost + herrajes + instalacion + traslado;
  const subtotal = subtotalUnit * input.cantidad;

  const descuento = input.cantidad >= 10 ? subtotal * 0.05 : 0;
  const neto = subtotal - descuento;
  const iva = neto * 0.19;
  const total = neto + iva;

  return {
    subtotal: Number(subtotal.toFixed(0)),
    perfil: Number((perfilCost * input.cantidad).toFixed(0)),
    vidrio: Number((vidrioCost * input.cantidad).toFixed(0)),
    herrajes: Number((herrajes * input.cantidad).toFixed(0)),
    instalacion: Number((instalacion * input.cantidad).toFixed(0)),
    traslado: Number((traslado * input.cantidad).toFixed(0)),
    descuento: Number(descuento.toFixed(0)),
    iva: Number(iva.toFixed(0)),
    total: Number(total.toFixed(0)),
    lead_time: config.leadTime[input.apertura],
    assumptions: [
      `Cálculo estimado sobre ${area.toFixed(2)} m² por unidad`,
      `Valores expresados en pesos chilenos`,
      input.instalacion ? 'Incluye instalación y sellos exteriores.' : 'No incluye instalación.',
      `Traslado considerado para ${input.comuna}.`
    ]
  };
}
