import { Ruler, PenTool, Hammer, Truck, ClipboardCheck, BadgeCheck } from 'lucide-react';

export const processSteps = [
  {
    title: 'Visita técnica',
    description: 'Coordinamos visita en terreno para levantar condiciones, exposición solar y puntos de instalación.',
    icon: Ruler
  },
  {
    title: 'Toma de medidas laser',
    description: 'Registro milimétrico con escáner láser y verificación de plomos para definir ajustes y remates.',
    icon: PenTool
  },
  {
    title: 'Propuesta técnica',
    description: 'Informe con soluciones por ambiente, cálculo térmico y presupuesto detallado con tolerancias.',
    icon: ClipboardCheck
  },
  {
    title: 'Fabricación',
    description: 'Producción en planta certificada ISO 9001 con perfilería europea y control de calidad por lote.',
    icon: Hammer
  },
  {
    title: 'Instalación y sellos',
    description: 'Equipo propio con certificación Rehau monta, nivela y sella con espuma de baja expansión y silicona neutra.',
    icon: Truck
  },
  {
    title: 'Postventa y mantenimiento',
    description: 'Chequeo funcional a los 30 días y plan de mantención anual opcional con limpieza y ajustes.',
    icon: BadgeCheck
  }
];
