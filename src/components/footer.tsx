"use client";

import Link from "next/link";
import { useLanguage } from "@/context/language-context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-panel border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-serif text-3xl tracking-widest uppercase font-semibold block mb-4">
              Etherial
            </Link>
            <p className="text-muted max-w-md text-sm leading-relaxed mb-6">
              {t("footer.desc")}
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">{t("footer.explore")}</h4>
            <ul className="space-y-4">
              <li><Link href="/search?gender=Femenino" className="text-sm text-muted hover:text-gold transition-colors">{t("footer.forHer")}</Link></li>
              <li><Link href="/search?gender=Masculino" className="text-sm text-muted hover:text-gold transition-colors">{t("footer.forHim")}</Link></li>
              <li><Link href="/search?gender=Unisex" className="text-sm text-muted hover:text-gold transition-colors">{t("footer.unisex")}</Link></li>
              <li><Link href="/search?brand=all" className="text-sm text-muted hover:text-gold transition-colors">{t("footer.exclusiveBrands")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">{t("footer.support")}</h4>
            <ul className="space-y-4">
              <li><Link href="/faq" className="text-sm text-muted hover:text-gold transition-colors">{t("footer.faq")}</Link></li>
              <li><Link href="/contact" className="text-sm text-muted hover:text-gold transition-colors">{t("footer.contact")}</Link></li>
              <li><Link href="/terms" className="text-sm text-muted hover:text-gold transition-colors">{t("footer.terms")}</Link></li>
              <li><Link href="/privacy" className="text-sm text-muted hover:text-gold transition-colors">{t("footer.privacy")}</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} Etherial Parfums. {t("footer.rights")}</p>
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
