import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y condiciones',
  description: 'Condiciones comerciales y de uso de STARWIN PVC.'
};

export default function TerminosPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>Términos y condiciones</h1>
      <p>Última actualización: mayo 2024.</p>
      <h2>Uso del sitio</h2>
      <p>El contenido publicado en starwinpvc.cl es informativo. Nos reservamos el derecho a modificar textos y precios referenciales sin aviso previo.</p>
      <h2>Proceso de compra</h2>
      <ol>
        <li>Visita técnica para levantamiento de información.</li>
        <li>Envío de propuesta y aceptación del cliente.</li>
        <li>Pago del anticipo para iniciar fabricación.</li>
        <li>Instalación y entrega con acta firmada.</li>
      </ol>
      <h2>Pagos</h2>
      <p>Se aceptan transferencias electrónicas y pagos con factura. Para proyectos corporativos se puede suscribir contrato marco.</p>
      <h2>Limitación de responsabilidad</h2>
      <p>No respondemos por daños indirectos ocasionados por mal uso, intervención de terceros o eventos de fuerza mayor.</p>
      <h2>Propiedad intelectual</h2>
      <p>Las marcas, fotografías y textos son propiedad de STARWIN PVC o se usan con licencias. Está prohibida su reproducción sin autorización.</p>
      <h2>Jurisdicción</h2>
      <p>Los contratos se rigen por las leyes de la República de Chile y cualquier controversia se someterá a los tribunales de Concepción.</p>
    </article>
  );
}
