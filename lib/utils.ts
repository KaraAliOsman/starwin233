import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: 'STARWIN PVC',
  description:
    'Ventanas y puertas de PVC con ingeniería precisa, instaladas por especialistas en Concepción y BioBío.',
  phone: '+56 9 6600 3771',
  address: 'Pedro de Valdivia 733, Concepción, Chile',
  email: 'contacto@starwinpvc.cl',
  locale: 'es-CL',
  url: 'https://starwinpvc.cl'
};

export const aperturaOptions = [
  { value: 'abatible', label: 'Abatible' },
  { value: 'corredera', label: 'Corredera' },
  { value: 'proyectante', label: 'Proyectante' },
  { value: 'oscilobatiente', label: 'Oscilobatiente' }
] as const;

export const vidrioOptions = [
  { value: '4-12-4', label: '4-12-4' },
  { value: '4-16-4', label: '4-16-4' },
  { value: 'lowe', label: 'Low-E' },
  { value: 'laminado', label: 'Laminado' }
] as const;

export const colorOptions = [
  { value: 'blanco', label: 'Blanco' },
  { value: 'antracita', label: 'Antracita' },
  { value: 'winchester', label: 'Winchester' },
  { value: 'roble', label: 'Roble Dorado' }
] as const;

export const cameraOptions = [12, 16] as const;

export const colorLabelMap = Object.fromEntries(colorOptions.map((option) => [option.value, option.label])) as Record<
  (typeof colorOptions)[number]['value'],
  string
>;
