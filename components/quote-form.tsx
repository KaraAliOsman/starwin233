'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './ui/button';
import { PriceBreakdown } from './price-breakdown';
import { aperturaOptions, colorOptions, vidrioOptions } from '../lib/utils';

const formSchema = z.object({
  apertura: z.enum(['abatible', 'corredera', 'proyectante', 'oscilobatiente']),
  ancho_mm: z.number().min(400).max(3200),
  alto_mm: z.number().min(400).max(3000),
  vidrio: z.enum(['4-12-4', '4-16-4', 'lowe', 'laminado']),
  color: z.enum(['blanco', 'antracita', 'winchester', 'roble']),
  cantidad: z.number().min(1).max(100),
  instalacion: z.boolean(),
  comuna: z.string().min(2)
});

type FormValues = z.infer<typeof formSchema>;

export function QuoteForm() {
  const [quote, setQuote] = useState<any>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      apertura: 'abatible',
      ancho_mm: 1200,
      alto_mm: 1100,
      vidrio: '4-12-4',
      color: 'blanco',
      cantidad: 1,
      instalacion: true,
      comuna: 'Concepción'
    }
  });

  const onSubmit = async (values: FormValues) => {
    const response = await fetch('/api/cotizar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    });
    if (!response.ok) {
      return;
    }
    const data = await response.json();
    setQuote(data);
  };

  const currentValues = watch();
  const instalacionSelectValue = currentValues.instalacion ? 'true' : 'false';

  const whatsappUrl = quote
    ? `https://wa.me/56966003771?text=${encodeURIComponent(
        `Hola STARWIN PVC, quisiera avanzar con la siguiente estimación:%0A` +
          `Apertura: ${currentValues.apertura}%0A` +
          `Medidas: ${currentValues.ancho_mm}mm x ${currentValues.alto_mm}mm%0A` +
          `Vidrio: ${currentValues.vidrio}%0A` +
          `Color: ${currentValues.color}%0A` +
          `Cantidad: ${currentValues.cantidad}%0A` +
          `Instalación: ${currentValues.instalacion ? 'Sí' : 'No'}%0A` +
          `Comuna: ${currentValues.comuna}%0A` +
          `Total estimado: $${quote.total.toLocaleString('es-CL')}`
      )}`
    : undefined;

  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-3xl border border-white/5 bg-card/60 p-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="apertura" className="text-sm text-neutral">
              Tipo de apertura
            </label>
            <select id="apertura" className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3" {...register('apertura')}>
              {aperturaOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.apertura && <p className="text-xs text-red-400">{errors.apertura.message}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="vidrio" className="text-sm text-neutral">
              Tipo de vidrio
            </label>
            <select id="vidrio" className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3" {...register('vidrio')}>
              {vidrioOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="ancho" className="text-sm text-neutral">
              Ancho (mm)
            </label>
            <input
              id="ancho"
              type="number"
              min={400}
              max={3200}
              className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3"
              {...register('ancho_mm', { valueAsNumber: true })}
            />
            {errors.ancho_mm && <p className="text-xs text-red-400">{errors.ancho_mm.message}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="alto" className="text-sm text-neutral">
              Alto (mm)
            </label>
            <input
              id="alto"
              type="number"
              min={400}
              max={3000}
              className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3"
              {...register('alto_mm', { valueAsNumber: true })}
            />
            {errors.alto_mm && <p className="text-xs text-red-400">{errors.alto_mm.message}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="color" className="text-sm text-neutral">
              Color perfilería
            </label>
            <select id="color" className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3" {...register('color')}>
              {colorOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="cantidad" className="text-sm text-neutral">
              Cantidad
            </label>
            <input
              id="cantidad"
              type="number"
              min={1}
              className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3"
              {...register('cantidad', { valueAsNumber: true })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-neutral">Instalación</label>
            <select
              className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3"
              defaultValue={instalacionSelectValue}
              {...register('instalacion', { setValueAs: (value) => value === 'true' })}
            >
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="comuna" className="text-sm text-neutral">
              Comuna
            </label>
            <input
              id="comuna"
              className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3"
              {...register('comuna')}
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <Button type="submit" disabled={isSubmitting} className="min-w-[180px]">
            {isSubmitting ? 'Calculando…' : 'Calcular inversión'}
          </Button>
          {whatsappUrl ? (
            <Button asChild variant="outline">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Enviar a WhatsApp
              </a>
            </Button>
          ) : null}
        </div>
      </form>
      <PriceBreakdown data={quote} />
    </div>
  );
}
