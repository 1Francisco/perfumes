import { Shield } from "lucide-react";

export const metadata = {
  title: "Política de Privacidad – Etherial",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">

        <div className="mb-16 text-center">
          <Shield size={32} className="mx-auto text-gold mb-6" />
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Política de Privacidad</h1>
          <p className="text-sm text-muted">Última actualización: Marzo 2026</p>
        </div>

        <div className="prose-container space-y-12">

          <section>
            <h2 className="font-serif text-2xl mb-4">1. Información que Recopilamos</h2>
            <p className="text-muted leading-relaxed mb-4">
              Etherial recopila la mínima información necesaria para ofrecer una experiencia personalizada:
            </p>
            <ul className="list-disc list-inside text-muted space-y-2 ml-4">
              <li>Información proporcionada voluntariamente al enviar el formulario de contacto (nombre, email, mensaje)</li>
              <li>Reseñas y calificaciones publicadas voluntariamente por los usuarios</li>
              <li>Datos de navegación anónimos (cookies técnicas necesarias para el funcionamiento del sitio)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">2. Uso de la Información</h2>
            <p className="text-muted leading-relaxed">
              La información recopilada se utiliza exclusivamente para: responder a consultas de contacto, mostrar
              reseñas de la comunidad, y mejorar la experiencia de navegación. No vendemos, compartimos ni
              transferimos tu información personal a terceros bajo ninguna circunstancia.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">3. Cookies</h2>
            <p className="text-muted leading-relaxed">
              Utilizamos cookies técnicas esenciales para el funcionamiento del sitio web. Estas cookies no
              almacenan información personal identificable. No utilizamos cookies de seguimiento publicitario
              ni cookies de terceros para fines de marketing.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">4. Seguridad de los Datos</h2>
            <p className="text-muted leading-relaxed">
              Implementamos medidas de seguridad técnicas y organizativas razonables para proteger la
              información que recopilamos. Sin embargo, ningún sistema es completamente seguro y no
              podemos garantizar la seguridad absoluta de los datos transmitidos a través de Internet.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">5. Derechos del Usuario</h2>
            <p className="text-muted leading-relaxed mb-4">
              De acuerdo con la normativa de protección de datos aplicable, tienes derecho a:
            </p>
            <ul className="list-disc list-inside text-muted space-y-2 ml-4">
              <li>Acceder a tus datos personales</li>
              <li>Solicitar la rectificación de datos inexactos</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Oponerte al tratamiento de tus datos</li>
              <li>Solicitar la portabilidad de tus datos</li>
            </ul>
            <p className="text-muted leading-relaxed mt-4">
              Para ejercer cualquiera de estos derechos, contacta con nosotros en{" "}
              <span className="text-foreground">privacidad@etherial.com</span>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">6. Menores de Edad</h2>
            <p className="text-muted leading-relaxed">
              Etherial no está dirigido a menores de 16 años. No recopilamos intencionadamente
              información de menores. Si descubrimos que hemos recopilado datos de un menor,
              los eliminaremos inmediatamente.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">7. Cambios en esta Política</h2>
            <p className="text-muted leading-relaxed">
              Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento.
              Los cambios se publicarán en esta página con la fecha de la última actualización.
              Te recomendamos revisarla periódicamente.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">8. Contacto</h2>
            <p className="text-muted leading-relaxed">
              Para cualquier consulta sobre privacidad, puedes contactarnos a través de nuestra{" "}
              <a href="/contact" className="text-gold hover:text-gold-dark underline transition-colors">página de contacto</a>{" "}
              o enviar un email a <span className="text-foreground">privacidad@etherial.com</span>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
