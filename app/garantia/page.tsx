import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nuestra garantía',
  description: 'Términos de garantía STARWIN PVC para perfilería, vidrios, herrajes e instalación.'
};

export default function GarantiaPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Nuestra garantía</h1>
      <p>
        En STARWIN PVC respaldamos nuestros sistemas con garantías claras, adaptadas a la normativa chilena y a los estándares de nuestros proveedores europeos.
      </p>
      <h2>Cobertura</h2>
      <ul>
        <li>Perfilería PVC: 5 años contra decoloración, deformaciones y fallas estructurales.</li>
        <li>Vidrios termopanel: 10 años contra empañamiento interno y pérdida de hermeticidad.</li>
        <li>Herrajes multipunto: 2 años contra fallas de fabricación.</li>
        <li>Instalación: 2 años contra filtraciones de aire o agua asociadas al montaje.</li>
      </ul>
      <h2>Condiciones</h2>
      <p>
        La garantía aplica a proyectos ubicados en la Región del BioBío y regiones aledañas donde ejecutamos instalación directa. Requiere mantención anual documentada y uso conforme a las recomendaciones entregadas.
      </p>
      <h2>Exclusiones</h2>
      <ul>
        <li>Golpes, mal uso o modificaciones posteriores.</li>
        <li>Daños causados por terceros ajenos a STARWIN.</li>
        <li>Falta de mantención o limpieza con productos abrasivos.</li>
      </ul>
      <h2>Proceso de reclamo</h2>
      <ol>
        <li>Envía tu solicitud a garantia@starwinpvc.cl con fotos y número de orden.</li>
        <li>Coordinamos visita técnica en máximo 72 horas hábiles.</li>
        <li>Emitimos informe y plan de acción dentro de 48 horas posteriores a la visita.</li>
      </ol>
      <h2>Tiempos de respuesta</h2>
      <p>
        Las reparaciones se ejecutan entre 5 y 10 días hábiles según disponibilidad de repuestos. En casos críticos (hospitales, clínicas) priorizamos atención en 48 horas.
      </p>
    </article>
  );
}
