'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './ui/button';
import { Card } from './ui/card';

export interface CompareProduct {
  id: string;
  title: string;
  uValue: string;
  rw: string;
  apertura: string;
  vidrio: string;
  color: string;
}

interface ComparePanelProps {
  products: CompareProduct[];
}

export function ComparePanel({ products }: ComparePanelProps) {
  const [selected, setSelected] = useState<CompareProduct[]>(products.slice(0, 3));

  const removeProduct = (id: string) => setSelected((items) => items.filter((item) => item.id !== id));

  if (!selected.length) return null;

  return (
    <Card className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-foreground">Comparador</h3>
        <p className="text-sm text-neutral">Selecciona hasta 3 productos para comparar especificaciones clave.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {selected.map((product) => (
          <div key={product.id} className="space-y-4 rounded-2xl border border-white/5 bg-black/30 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="text-lg font-semibold text-foreground">{product.title}</h4>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral">{product.apertura}</p>
              </div>
              <Button variant="ghost" size="sm" className="h-8 w-8 rounded-full" onClick={() => removeProduct(product.id)}>
                <X className="h-4 w-4" />
                <span className="sr-only">Quitar</span>
              </Button>
            </div>
            <dl className={cn('space-y-2 text-sm text-neutral')}>
              <div className="flex justify-between">
                <dt>U-Value</dt>
                <dd className="text-foreground">{product.uValue}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Atenuación</dt>
                <dd className="text-foreground">{product.rw}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Vidrio</dt>
                <dd className="text-foreground">{product.vidrio}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Color</dt>
                <dd className="text-foreground capitalize">{product.color}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </Card>
  );
}
