import { Metadata } from 'next';
import { Suspense } from 'react';
import { products } from '../../data/products';
import { ProductCard } from '../../components/product-card';
import { ComparePanel } from '../../components/compare-panel';
import { aperturaOptions, colorOptions, vidrioOptions, cameraOptions } from '../../lib/utils';
import { siteConfig } from '../../lib/utils';

export const metadata: Metadata = {
  title: 'Catálogo de ventanas y puertas PVC',
  description: 'Explora ventanas y puertas de PVC con termopanel, diferentes aperturas, colores y configuraciones de vidrio.'
};

const filtroApertura = aperturaOptions.map((item) => item.value);
const filtroColor = colorOptions.map((item) => item.value);
const filtroVidrio = vidrioOptions.map((item) => item.value);

export default function CatalogoPage({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const apertura = typeof searchParams.apertura === 'string' ? searchParams.apertura : undefined;
  const color = typeof searchParams.color === 'string' ? searchParams.color : undefined;
  const vidrio = typeof searchParams.vidrio === 'string' ? searchParams.vidrio : undefined;
  const camara = typeof searchParams.camara === 'string' ? Number(searchParams.camara) : undefined;

  const filtered = products.filter((product) => {
    const matchesApertura = apertura ? product.apertura === apertura : true;
    const matchesColor = color
      ? (() => {
          const normalized = product.color.map((item) => item.toLowerCase());
          const label = colorOptions.find((option) => option.value === color)?.label.toLowerCase();
          return normalized.includes(color) || (label ? normalized.includes(label) : false);
        })()
      : true;
    const matchesVidrio = vidrio
      ? (() => {
          const label = vidrioOptions.find((option) => option.value === vidrio)?.label.toLowerCase();
          const normalized = product.vidrio.toLowerCase();
          return normalized.includes(vidrio) || (label ? normalized.includes(label) : false);
        })()
      : true;
    const matchesCamara = camara ? product.camara === camara : true;
    return matchesApertura && matchesColor && matchesVidrio && matchesCamara;
  });

  return (
    <div className="space-y-16">
      <header className="space-y-6">
        <h1 className="text-4xl font-semibold text-foreground">Catálogo STARWIN PVC</h1>
        <p className="max-w-2xl text-neutral">
          Selecciona el sistema que mejor se adapta a tu proyecto. Todas las soluciones incluyen cálculo térmico, fabricación certificada y servicio postventa en BioBío. Para especificaciones BIM o licitaciones, contáctanos en {siteConfig.phone}.
        </p>
        <form className="grid gap-4 rounded-3xl border border-white/5 bg-card/60 p-6 md:grid-cols-4">
          <div>
            <label htmlFor="apertura" className="text-xs uppercase tracking-[0.3em] text-neutral">
              Apertura
            </label>
            <select id="apertura" name="apertura" defaultValue={apertura ?? ''} className="mt-2 w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm">
              <option value="">Todas</option>
              {filtroApertura.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="color" className="text-xs uppercase tracking-[0.3em] text-neutral">
              Color
            </label>
            <select id="color" name="color" defaultValue={color ?? ''} className="mt-2 w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm">
              <option value="">Todos</option>
              {filtroColor.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="vidrio" className="text-xs uppercase tracking-[0.3em] text-neutral">
              Vidrio
            </label>
            <select id="vidrio" name="vidrio" defaultValue={vidrio ?? ''} className="mt-2 w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm">
              <option value="">Todos</option>
              {filtroVidrio.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="camara" className="text-xs uppercase tracking-[0.3em] text-neutral">
              Cámara
            </label>
            <select id="camara" name="camara" defaultValue={camara?.toString() ?? ''} className="mt-2 w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm">
              <option value="">Todas</option>
              {cameraOptions.map((value) => (
                <option key={value} value={value}>
                  {value} mm
                </option>
              ))}
            </select>
          </div>
          <div className="md:col-span-4">
            <button type="submit" className="w-full rounded-2xl bg-foreground px-4 py-3 text-sm font-semibold text-background transition hover:bg-accent hover:text-black">
              Filtrar catálogo
            </button>
          </div>
        </form>
      </header>
      <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.slug} {...product} />
        ))}
      </section>
      <Suspense fallback={null}>
        <ComparePanel
          products={filtered.slice(0, 3).map((product) => ({
            id: product.slug,
            title: product.title,
            apertura: product.apertura,
            uValue: product.uValue,
            rw: product.rw,
            vidrio: product.vidrio,
            color: product.color[0] ?? 'blanco'
          }))}
        />
      </Suspense>
    </div>
  );
}
