import { Metadata } from 'next';
import { FAQAccordion } from '../../components/faq-accordion';

export const metadata: Metadata = {
  title: 'Preguntas frecuentes',
  description: 'Resuelve dudas sobre compra, instalación y garantía de ventanas STARWIN PVC.'
};

const groups = [
  {
    title: 'Pre-compra',
    items: [
      {
        question: '¿Cuánto demora recibir una cotización formal?',
        answer: 'Dentro de 24 horas hábiles después de la visita técnica enviamos la propuesta con planos, especificaciones y plazos.'
      },
      {
        question: '¿Trabajan con inmobiliarias y constructoras?',
        answer: 'Sí, participamos en licitaciones y proyectos corporativos. Entregamos documentación BIM, certificados y protocolos de instalación.'
      }
    ]
  },
  {
    title: 'Instalación',
    items: [
      {
        question: '¿Cómo protegen los espacios durante la instalación?',
        answer: 'Utilizamos fundas, cintas de baja adherencia y barreras de polvo. Dejamos los recintos aspirados y listos para uso inmediato.'
      },
      {
        question: '¿Retiran las ventanas antiguas?',
        answer: 'Sí, incluimos retiro responsable y disposición de residuos según normativa local.'
      }
    ]
  },
  {
    title: 'Postventa',
    items: [
      {
        question: '¿Qué incluye el mantenimiento?',
        answer: 'Ajuste de herrajes, limpieza de drenajes, lubricación y verificación de sellos. Recomendamos realizarlo cada 12 meses.'
      },
      {
        question: '¿En cuánto tiempo atienden un requerimiento?',
        answer: 'Respondemos en menos de 24 horas y agendamos visita técnica en máximo 72 horas hábiles.'
      }
    ]
  },
  {
    title: 'Pagos y garantías',
    items: [
      {
        question: '¿Qué condiciones de pago manejan?',
        answer: '50% al confirmar fabricación, 40% previo a instalación y 10% contra entrega. Opciones de leasing para proyectos corporativos.'
      },
      {
        question: '¿Cuál es la cobertura de la garantía?',
        answer: '5 años en perfilería, 2 años en herrajes y 10 años en sellos de termopanel, siempre que la mantención anual esté vigente.'
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-6">
        <h1 className="text-4xl font-semibold text-foreground">Preguntas frecuentes</h1>
        <p className="max-w-2xl text-neutral">
          Reunimos las consultas más comunes de clientes residenciales y corporativos. Si necesitas algo específico, contáctanos en WhatsApp.
        </p>
      </header>
      <FAQAccordion groups={groups} />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: groups.flatMap((group) =>
              group.items.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.answer
                }
              }))
            )
          })
        }}
      />
    </div>
  );
}
