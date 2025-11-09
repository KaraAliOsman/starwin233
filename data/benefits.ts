import { ShieldCheck, Waves, Thermometer, Wind, Building2, BadgeCheck } from 'lucide-react';

export const benefits = [
  {
    icon: Thermometer,
    title: 'Aislamiento térmico medible',
    description:
      'Perfiles multicámara con refuerzo interno y termopanel 4-16-4 que reduce pérdidas energéticas hasta 35% en comparación con ventanas de aluminio convencional.',
    metric: 'Uw desde 1,4 W/m²K'
  },
  {
    icon: Waves,
    title: 'Atenuación acústica certificada',
    description: 'Termopaneles laminados y sellos EPDM que disminuyen el ruido aéreo hasta 42 dB, ideal para avenidas y zonas industriales.',
    metric: 'Rw hasta 42 dB'
  },
  {
    icon: Wind,
    title: 'Hermeticidad y estanqueidad',
    description: 'Ensayos bajo norma NCh 1357 garantizan cero infiltraciones de aire y agua en velocidad de viento hasta 120 km/h.',
    metric: 'Clase 4 EN 12207'
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad activa',
    description: 'Herrajes multipunto Siegenia y vidrios laminados con PVB de 0,76 mm para retardar intrusiones accidentales o forzadas.',
    metric: 'RC2 Ready'
  },
  {
    icon: BadgeCheck,
    title: 'Garantía documentada',
    description: 'Cobertura de 5 años en perfilería, 2 años en herrajes y 10 años en sellos de termopanel. Servicio técnico en menos de 72h hábiles.',
    metric: 'SLA 72h'
  },
  {
    icon: Building2,
    title: 'Compatibilidad arquitectónica',
    description: 'Perfil europeo Rehau Synego y Kömmerling76 en colores antracita, blanco, Winchester y Roble Dorado. Integración con BIM y especificaciones LEED.',
    metric: 'Rehau · Kömmerling'
  }
];
