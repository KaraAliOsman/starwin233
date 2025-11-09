'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './ui/button';

const schema = z.object({
  nombre: z.string().min(2),
  email: z.string().email(),
  telefono: z.string().min(8),
  mensaje: z.string().min(10)
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (values: FormValues) => {
    console.log('Contacto', values);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-white/5 bg-card/60 p-8 text-sm text-neutral">
        Gracias por escribirnos. Un especialista de STARWIN te contactará en menos de 24 horas hábiles.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm text-neutral" htmlFor="nombre">
            Nombre
          </label>
          <input
            id="nombre"
            className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3"
            {...register('nombre')}
          />
          {errors.nombre && <p className="text-xs text-red-400">{errors.nombre.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm text-neutral" htmlFor="email">
            Email
          </label>
          <input id="email" type="email" className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3" {...register('email')} />
          {errors.email && <p className="text-xs text-red-400">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm text-neutral" htmlFor="telefono">
            Teléfono
          </label>
          <input id="telefono" className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3" {...register('telefono')} />
          {errors.telefono && <p className="text-xs text-red-400">{errors.telefono.message}</p>}
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm text-neutral" htmlFor="mensaje">
            Cuéntanos del proyecto
          </label>
          <textarea id="mensaje" rows={5} className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3" {...register('mensaje')} />
          {errors.mensaje && <p className="text-xs text-red-400">{errors.mensaje.message}</p>}
        </div>
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando…' : 'Enviar mensaje'}
      </Button>
    </form>
  );
}
