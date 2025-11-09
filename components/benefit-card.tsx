import { type LucideIcon } from 'lucide-react';
import { Card, CardDescription, CardTitle } from './ui/card';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  metric?: string;
}

export function BenefitCard({ icon: Icon, title, description, metric }: BenefitCardProps) {
  return (
    <Card className="h-full space-y-6 transition-transform duration-200 hover:-translate-y-1">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10">
          <Icon className="h-6 w-6 text-accent" />
        </div>
        <div>
          <CardTitle>{title}</CardTitle>
          {metric ? <p className="text-xs uppercase tracking-[0.3em] text-neutral">{metric}</p> : null}
        </div>
      </div>
      <CardDescription className="text-base leading-relaxed text-neutral">{description}</CardDescription>
    </Card>
  );
}
