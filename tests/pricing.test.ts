import { describe, expect, it } from 'vitest';
import { calculatePricing } from '../lib/pricing';

describe('calculatePricing', () => {
  it('calcula totales con instalación', () => {
    const result = calculatePricing({
      ancho_mm: 1200,
      alto_mm: 1100,
      apertura: 'abatible',
      vidrio: '4-16-4',
      color: 'blanco',
      cantidad: 2,
      instalacion: true,
      comuna: 'Concepción'
    });

    expect(result.total).toBeGreaterThan(0);
    expect(result.assumptions.length).toBeGreaterThan(0);
  });
});
