export interface Product {
  slug: string;
  title: string;
  description: string;
  image: string;
  apertura: 'abatible' | 'corredera' | 'proyectante' | 'oscilobatiente';
  vidrio: string;
  color: string[];
  camara: number;
  perfileria: string;
  uValue: string;
  rw: string;
  variants: { name: string; color: string; hex: string }[];
  specs: { label: string; value: string }[];
  priceGuide: string;
}

export const products: Product[] = [
  {
    slug: 'abatible-synego',
    title: 'Ventana Abatible Synego 80',
    description: 'Apertura interior/exterior con triple sello y herraje multipunto Siegenia.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80',
    apertura: 'abatible',
    vidrio: '4-16-4 Low-E',
    color: ['blanco', 'antracita'],
    camara: 16,
    perfileria: 'Rehau Synego 80',
    uValue: '1,3 W/m²K',
    rw: '39 dB',
    variants: [
      { name: 'blanco', color: 'blanco', hex: '#f6f7f8' },
      { name: 'antracita', color: 'antracita', hex: '#2f343a' }
    ],
    specs: [
      { label: 'Marco', value: '80 mm multicámara' },
      { label: 'Refuerzo', value: 'Acero galvanizado 1,5 mm' },
      { label: 'Herraje', value: 'Siegenia Titan AF' }
    ],
    priceGuide: 'Desde $380.000 + IVA por m²'
  },
  {
    slug: 'corredera-elevadora',
    title: 'Corredera Elevadora HS Portal',
    description: 'Hoja de hasta 3 metros con accionamiento suave y umbral bajo accesible.',
    image: 'https://images.unsplash.com/photo-1617099390840-9cfd0c6f0efa?auto=format&fit=crop&w=900&q=80',
    apertura: 'corredera',
    vidrio: '4-16-4 Low-E',
    color: ['blanco', 'roble'],
    camara: 16,
    perfileria: 'Kömmerling 76',
    uValue: '1,4 W/m²K',
    rw: '36 dB',
    variants: [
      { name: 'blanco', color: 'blanco', hex: '#f8f9fa' },
      { name: 'roble', color: 'roble', hex: '#b98855' }
    ],
    specs: [
      { label: 'Umbral', value: 'Aluminio reforzado 20 mm' },
      { label: 'Peso máx.', value: '300 kg por hoja' },
      { label: 'Accesorios', value: 'Giesse Levante' }
    ],
    priceGuide: 'Desde $450.000 + IVA por m²'
  },
  {
    slug: 'oscilobatiente-premium',
    title: 'Oscilobatiente Premium 76',
    description: 'Doble apertura con control de ventilación y cierre perimetral.',
    image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=900&q=80',
    apertura: 'oscilobatiente',
    vidrio: 'Laminado 4+4 / 16 / 4',
    color: ['blanco', 'antracita', 'winchester'],
    camara: 16,
    perfileria: 'Rehau EuroDesign 76',
    uValue: '1,2 W/m²K',
    rw: '41 dB',
    variants: [
      { name: 'blanco', color: 'blanco', hex: '#fafafa' },
      { name: 'antracita', color: 'antracita', hex: '#30353a' },
      { name: 'winchester', color: 'winchester', hex: '#c7a571' }
    ],
    specs: [
      { label: 'Apertura', value: 'Bateo + microventilación' },
      { label: 'Junta', value: 'Triple EPDM' },
      { label: 'Manilla', value: 'Hoppe Secustik' }
    ],
    priceGuide: 'Desde $420.000 + IVA por m²'
  },
  {
    slug: 'proyectante-fachada',
    title: 'Proyectante Fachada Ventilada',
    description: 'Solución para módulos de fachada ventilada con apertura hacia exterior.',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
    apertura: 'proyectante',
    vidrio: '4-12-4',
    color: ['blanco', 'antracita'],
    camara: 12,
    perfileria: 'Kömmerling 70',
    uValue: '1,6 W/m²K',
    rw: '35 dB',
    variants: [
      { name: 'blanco', color: 'blanco', hex: '#f9f9f9' },
      { name: 'antracita', color: 'antracita', hex: '#2e3339' }
    ],
    specs: [
      { label: 'Bisagras', value: 'Proyectante 40 kg' },
      { label: 'Restrictor', value: 'Limitador de apertura' },
      { label: 'Aplicación', value: 'Fachadas unitizadas' }
    ],
    priceGuide: 'Desde $350.000 + IVA por m²'
  },
  {
    slug: 'puerta-acceso',
    title: 'Puerta de Acceso Premium',
    description: 'Panel reforzado con cerradura multipunto y cilindro europeo.',
    image: 'https://images.unsplash.com/photo-1616594039964-769f1f035098?auto=format&fit=crop&w=900&q=80',
    apertura: 'abatible',
    vidrio: 'Laminado 4+4',
    color: ['blanco', 'roble'],
    camara: 12,
    perfileria: 'Rehau Geneo',
    uValue: '1,0 W/m²K',
    rw: '37 dB',
    variants: [
      { name: 'blanco', color: 'blanco', hex: '#f2f4f5' },
      { name: 'roble', color: 'roble', hex: '#b58350' }
    ],
    specs: [
      { label: 'Panel', value: 'Sandwich PVC reforzado' },
      { label: 'Cerradura', value: 'Multipunto 5 pestillos' },
      { label: 'Bisagra', value: 'Heavy Duty 3D' }
    ],
    priceGuide: 'Desde $520.000 + IVA por unidad'
  },
  {
    slug: 'ventanal-panorama',
    title: 'Ventanal Panorama 3 Rieles',
    description: 'Sistema corredera 3 rieles para aperturas libres hasta 5.4 m.',
    image: 'https://images.unsplash.com/photo-1475856034135-8c0a5f1c3c86?auto=format&fit=crop&w=900&q=80',
    apertura: 'corredera',
    vidrio: '4-12-4',
    color: ['blanco', 'antracita'],
    camara: 12,
    perfileria: 'Rehau S730',
    uValue: '1,7 W/m²K',
    rw: '34 dB',
    variants: [
      { name: 'blanco', color: 'blanco', hex: '#f6f7f9' },
      { name: 'antracita', color: 'antracita', hex: '#30353a' }
    ],
    specs: [
      { label: 'Riel', value: 'Aluminio reforzado' },
      { label: 'Rodamientos', value: 'Acero inoxidable' },
      { label: 'Peso máx.', value: '160 kg por hoja' }
    ],
    priceGuide: 'Desde $410.000 + IVA por m²'
  },
  {
    slug: 'ventana-pivotante',
    title: 'Ventana Pivotante Técnica',
    description: 'Para recintos técnicos con ventilación constante y controlable.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    apertura: 'proyectante',
    vidrio: '4-12-4',
    color: ['blanco'],
    camara: 12,
    perfileria: 'Kömmerling EuroFutur',
    uValue: '1,8 W/m²K',
    rw: '32 dB',
    variants: [{ name: 'blanco', color: 'blanco', hex: '#f6f6f7' }],
    specs: [
      { label: 'Sistema', value: 'Pivotante horizontal' },
      { label: 'Restricción', value: 'Limitador 45°' },
      { label: 'Aplicación', value: 'Salas de máquinas' }
    ],
    priceGuide: 'Desde $320.000 + IVA por m²'
  },
  {
    slug: 'ventana-batiente-modular',
    title: 'Batiente Modular Serie 60',
    description: 'Ideal para proyectos de renovación en departamentos y oficinas.',
    image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=900&q=80',
    apertura: 'abatible',
    vidrio: '4-12-4',
    color: ['blanco'],
    camara: 12,
    perfileria: 'Rehau 60',
    uValue: '1,9 W/m²K',
    rw: '33 dB',
    variants: [{ name: 'blanco', color: 'blanco', hex: '#fbfbfc' }],
    specs: [
      { label: 'Marco', value: '60 mm 3 cámaras' },
      { label: 'Refuerzo', value: 'Acero 1.2 mm' },
      { label: 'Aplicación', value: 'Renovaciones' }
    ],
    priceGuide: 'Desde $260.000 + IVA por m²'
  },
  {
    slug: 'ventana-proyectante-aireacion',
    title: 'Proyectante Aireación Controlada',
    description: 'Incorpora herraje restrictor y microventilación para clínicas y laboratorios.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
    apertura: 'proyectante',
    vidrio: 'Laminado 4+4',
    color: ['blanco', 'antracita'],
    camara: 12,
    perfileria: 'Kömmerling 76',
    uValue: '1,5 W/m²K',
    rw: '36 dB',
    variants: [
      { name: 'blanco', color: 'blanco', hex: '#fdfdfd' },
      { name: 'antracita', color: 'antracita', hex: '#2c3136' }
    ],
    specs: [
      { label: 'Herraje', value: 'Restrictor sanitario' },
      { label: 'Ventilación', value: 'Microventilación 6 mm' },
      { label: 'Aplicación', value: 'Salas limpias' }
    ],
    priceGuide: 'Desde $380.000 + IVA por m²'
  },
  {
    slug: 'ventana-oscilobatiente-smart',
    title: 'Oscilobatiente Smart Sensor',
    description: 'Incluye sensor de apertura y predisposición para domótica KNX.',
    image: 'https://images.unsplash.com/photo-1580584128400-7aa3b2e95b45?auto=format&fit=crop&w=900&q=80',
    apertura: 'oscilobatiente',
    vidrio: 'Low-E 4-16-4',
    color: ['antracita', 'winchester'],
    camara: 16,
    perfileria: 'Rehau Synego 80',
    uValue: '1,2 W/m²K',
    rw: '40 dB',
    variants: [
      { name: 'antracita', color: 'antracita', hex: '#2a2f34' },
      { name: 'winchester', color: 'winchester', hex: '#caa874' }
    ],
    specs: [
      { label: 'Sensores', value: 'Contactos Reed ocultos' },
      { label: 'Integración', value: 'KNX / Loxone' },
      { label: 'Garantía', value: '5 años' }
    ],
    priceGuide: 'Desde $460.000 + IVA por m²'
  }
];
