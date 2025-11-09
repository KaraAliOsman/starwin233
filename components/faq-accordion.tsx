'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  groups: {
    title: string;
    items: FAQItem[];
  }[];
}

export function FAQAccordion({ groups }: FAQAccordionProps) {
  return (
    <div className="space-y-10">
      {groups.map((group) => (
        <section key={group.title} className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">{group.title}</h2>
          <AccordionPrimitive.Root type="multiple" className="space-y-4">
            {group.items.map((item, index) => (
              <AccordionPrimitive.Item
                key={item.question}
                value={`${group.title}-${index}`}
                className="overflow-hidden rounded-3xl border border-white/5 bg-card/60"
              >
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-lg font-medium text-foreground transition hover:bg-card/80">
                    {item.question}
                    <ChevronDown className="h-5 w-5 shrink-0 transition duration-200 data-[state=open]:rotate-180" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content className={cn('px-6 pb-6 text-base text-neutral data-[state=open]:animate-fadeIn')}>
                  {item.answer}
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </section>
      ))}
    </div>
  );
}
