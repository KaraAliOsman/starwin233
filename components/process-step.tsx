import { type LucideIcon } from 'lucide-react';
import { cn } from '../lib/utils';

interface ProcessStepProps {
  index: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ProcessStep({ index, title, description, icon: Icon }: ProcessStepProps) {
  return (
    <div className={cn('grid gap-6 rounded-3xl border border-white/5 bg-card/50 p-8 backdrop-blur-lg transition hover:bg-card/80 md:grid-cols-[auto_1fr]')}>
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-2xl font-semibold">
        {String(index).padStart(2, '0')}
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Icon className="h-6 w-6 text-accent" />
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        </div>
        <p className="text-neutral">{description}</p>
      </div>
    </div>
  );
}
