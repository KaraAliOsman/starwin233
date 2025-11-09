'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Button } from './ui/button';

const COOKIE_NAME = 'sw-cookie-consent';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get(COOKIE_NAME);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const accept = () => {
    Cookies.set(COOKIE_NAME, 'true', { expires: 180 });
    setVisible(false);
  };

  return (
    <aside className="fixed bottom-6 left-1/2 z-50 w-[min(480px,90vw)] -translate-x-1/2 rounded-3xl border border-white/10 bg-black/80 p-6 backdrop-blur">
      <div className="space-y-3 text-sm text-neutral">
        <h2 className="text-lg font-semibold text-foreground">Usamos analítica responsable</h2>
        <p>
          Medimos interacciones clave para mejorar el servicio y activar recordatorios. Puedes aceptar para habilitar analítica Vercel y seguimiento de CTAs.
        </p>
        <div className="flex justify-end gap-3">
          <Button variant="ghost" onClick={() => setVisible(false)}>
            Rechazar
          </Button>
          <Button onClick={accept} className="bg-accent text-black hover:bg-accent/80">
            Aceptar
          </Button>
        </div>
      </div>
    </aside>
  );
}
