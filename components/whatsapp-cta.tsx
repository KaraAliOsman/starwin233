import Link from 'next/link';
import { Button } from './ui/button';

export function WhatsAppCTA() {
  return (
    <Button asChild className="bg-accent text-black hover:bg-accent/80">
      <Link href="https://wa.me/56966003771" target="_blank" rel="noopener noreferrer">
        Cotizar por WhatsApp
      </Link>
    </Button>
  );
}
