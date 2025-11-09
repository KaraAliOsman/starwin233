import { Metadata } from 'next';
import { ContactForm } from '../../components/contact-form';
import { siteConfig } from '../../lib/utils';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Agenda visitas técnicas, cotizaciones y soporte postventa con el equipo STARWIN PVC.'
};

export default function ContactoPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold text-foreground">Conversemos sobre tu proyecto</h1>
        <p className="max-w-2xl text-neutral">
          Resolvemos consultas técnicas, presupuestos y logística de instalación en menos de 24 horas hábiles. También puedes escribirnos directo a WhatsApp.
        </p>
      </header>
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <ContactForm />
        <aside className="space-y-6 rounded-3xl border border-white/5 bg-card/60 p-8 text-sm text-neutral">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Showroom y taller</h2>
            <p>{siteConfig.address}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Contacto directo</h2>
            <p>
              Teléfono / WhatsApp:{' '}
              <a className="text-foreground" href="https://wa.me/56966003771" target="_blank" rel="noopener noreferrer">
                {siteConfig.phone}
              </a>
            </p>
            <p>Email: contacto@starwinpvc.cl</p>
            <p>Horario: Lunes a viernes, 09:00 a 18:30</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral">Cobertura</p>
            <p>Concepción · San Pedro de la Paz · Talcahuano · Chiguayante · Hualpén · Los Ángeles (proyectos especiales)</p>
          </div>
        </aside>
      </div>
      <div className="rounded-3xl border border-white/5 bg-card/50 p-4">
        <iframe
          title="Mapa STARWIN PVC"
          className="h-72 w-full rounded-2xl"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.71093948483!2d-73.052!3d-36.828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9669c96fa7e8d2d7%3A0x123!2sPedro%20de%20Valdivia%20733!5e0!3m2!1ses-419!2scl!4v1717200000000"
          allowFullScreen
        />
      </div>
    </div>
  );
}
