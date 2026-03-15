import { motion } from "framer-motion";
import { Scale } from "lucide-react";

export const metadata = {
  title: "Términos y Condiciones – Etherial",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">

        <div className="mb-16 text-center">
          <Scale size={32} className="mx-auto text-gold mb-6" />
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Términos y Condiciones</h1>
          <p className="text-sm text-muted">Última actualización: Marzo 2026</p>
        </div>

        <div className="prose-container space-y-12">

          <section>
            <h2 className="font-serif text-2xl mb-4">1. Aceptación de los Términos</h2>
            <p className="text-muted leading-relaxed">
              Al acceder y utilizar el sitio web Etherial (&quot;el Sitio&quot;), aceptas cumplir con estos Términos y Condiciones.
              Si no estás de acuerdo con alguno de estos términos, te pedimos que no utilices el Sitio. Etherial se reserva
              el derecho de modificar estos términos en cualquier momento sin previo aviso.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">2. Naturaleza del Servicio</h2>
            <p className="text-muted leading-relaxed">
              Etherial es una plataforma de descubrimiento de fragancias. No somos una tienda online y no procesamos
              transacciones comerciales directamente. La información sobre precios, disponibilidad y características de los
              productos se proporciona con fines informativos y de orientación. Los precios mostrados son referenciales
              y pueden variar según el punto de venta.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">3. Propiedad Intelectual</h2>
            <p className="text-muted leading-relaxed">
              Todas las marcas, nombres comerciales y logotipos que aparecen en el Sitio son propiedad de sus respectivos
              titulares. Las imágenes de productos pertenecen a las marcas correspondientes y se utilizan con fines
              informativos y educativos. El diseño, contenido editorial y estructura del Sitio son propiedad de Etherial.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">4. Contenido Generado por Usuarios</h2>
            <p className="text-muted leading-relaxed">
              Las reseñas y calificaciones publicadas por los usuarios representan sus opiniones personales y no reflejan
              necesariamente las opiniones de Etherial. Nos reservamos el derecho de moderar, editar o eliminar cualquier
              contenido que consideremos inapropiado, ofensivo o fraudulento. Al publicar una reseña, otorgas a Etherial
              una licencia no exclusiva para utilizar ese contenido en la plataforma.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">5. Limitación de Responsabilidad</h2>
            <p className="text-muted leading-relaxed">
              Etherial proporciona información &quot;tal cual&quot; sin garantías de ningún tipo, expresas o implícitas.
              No garantizamos que la información sea completamente precisa, actualizada o libre de errores.
              No seremos responsables de ningún daño directo, indirecto, incidental o consecuente que resulte del uso
              o la imposibilidad de uso del Sitio.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">6. Enlaces Externos</h2>
            <p className="text-muted leading-relaxed">
              El Sitio puede contener enlaces a sitios web de terceros. Etherial no controla ni es responsable del
              contenido, políticas de privacidad o prácticas de dichos sitios. Te recomendamos revisar los términos
              y condiciones de cada sitio externo que visites.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-4">7. Contacto</h2>
            <p className="text-muted leading-relaxed">
              Para cualquier consulta relacionada con estos Términos y Condiciones, puedes contactarnos a través
              de nuestra <a href="/contact" className="text-gold hover:text-gold-dark underline transition-colors">página de contacto</a> o
              enviar un email a <span className="text-foreground">legal@etherial.com</span>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
