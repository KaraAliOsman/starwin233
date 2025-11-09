import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description: 'Tratamiento de datos personales y cookies del sitio STARWIN PVC.'
};

export default function PrivacidadPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Política de privacidad</h1>
      <p>Última actualización: mayo 2024.</p>
      <h2>Responsable del tratamiento</h2>
      <p>STARWIN PVC, Pedro de Valdivia 733, Concepción, Chile. Contacto: privacidad@starwinpvc.cl.</p>
      <h2>Datos que recopilamos</h2>
      <ul>
        <li>Información de contacto enviada a través de formularios.</li>
        <li>Métricas de uso anónimas mediante Vercel Analytics y eventos de interacción.</li>
        <li>Preferencias de cookies almacenadas en tu navegador.</li>
      </ul>
      <h2>Finalidades</h2>
      <p>
        Responder solicitudes comerciales, preparar cotizaciones, coordinar visitas técnicas y mejorar la experiencia digital mediante análisis agregado.
      </p>
      <h2>Base legal</h2>
      <p>
        Consentimiento explícito del titular y ejecución de medidas precontractuales, conforme a la Ley 19.628 sobre Protección de la Vida Privada.
      </p>
      <h2>Derechos</h2>
      <p>
        Puedes ejercer tus derechos de acceso, rectificación y cancelación enviando un correo a privacidad@starwinpvc.cl. Responderemos dentro de 5 días hábiles.
      </p>
      <h2>Retención</h2>
      <p>Conservamos la información mientras exista relación comercial y hasta 24 meses después para fines de respaldo.</p>
      <h2>Cookies</h2>
      <p>
        Utilizamos cookies esenciales para recordar preferencias y cookies analíticas opcionales. Puedes modificarlas desde el banner de consentimiento o borrarlas en tu navegador.
      </p>
    </article>
  );
}
