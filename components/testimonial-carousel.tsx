'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { cn } from '../lib/utils';

interface TestimonialCarouselProps {
  testimonials: {
    author: string;
    role: string;
    quote: string;
  }[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [active, setActive] = useState(0);

  return (
    <Card className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-foreground">Clientes que confían en STARWIN</h3>
          <p className="text-sm text-neutral">Cada instalación se entrega con protocolo de recepción firmado.</p>
        </div>
        <div className="flex gap-2">
          {testimonials.map((_testimonial, index) => (
            <Button
              key={index}
              variant={index === active ? 'default' : 'outline'}
              className={cn('h-10 w-10 rounded-full p-0 text-sm', index === active ? 'bg-accent text-black' : '')}
              onClick={() => setActive(index)}
              aria-label={`Ver testimonio ${index + 1}`}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
      <blockquote className="space-y-4 text-lg leading-relaxed text-neutral">
        <p>“{testimonials[active].quote}”</p>
        <footer className="text-sm text-foreground">
          {testimonials[active].author} · {testimonials[active].role}
        </footer>
      </blockquote>
    </Card>
  );
}
