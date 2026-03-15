import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-panel border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-serif text-3xl tracking-widest uppercase font-semibold block mb-4">
              Etherial
            </Link>
            <p className="text-muted max-w-md text-sm leading-relaxed mb-6">
              Descubre nuestra colección curada de fragancias excepcionales. 
              Elevando el arte de la perfumería a través de una experiencia digital inmersiva y elegante.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Explorar</h4>
            <ul className="space-y-4">
              <li><Link href="/search?gender=Femenino" className="text-sm text-muted hover:text-gold transition-colors">Para Ella</Link></li>
              <li><Link href="/search?gender=Masculino" className="text-sm text-muted hover:text-gold transition-colors">Para Él</Link></li>
              <li><Link href="/search?gender=Unisex" className="text-sm text-muted hover:text-gold transition-colors">Unisex</Link></li>
              <li><Link href="/search?brand=all" className="text-sm text-muted hover:text-gold transition-colors">Marcas Exclusivas</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Soporte</h4>
            <ul className="space-y-4">
              <li><Link href="/faq" className="text-sm text-muted hover:text-gold transition-colors">Preguntas Frecuentes</Link></li>
              <li><Link href="/contact" className="text-sm text-muted hover:text-gold transition-colors">Contacto</Link></li>
              <li><Link href="/terms" className="text-sm text-muted hover:text-gold transition-colors">Términos y Condiciones</Link></li>
              <li><Link href="/privacy" className="text-sm text-muted hover:text-gold transition-colors">Privacidad</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} Etherial Parfums. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-gold transition-colors">Pinterest</a>
            <a href="#" className="hover:text-gold transition-colors">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
