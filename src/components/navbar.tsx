"use client";

import Link from "next/link";
import { Search, Menu, X, Sun, Moon, Heart, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/theme-context";
import { useWishlist } from "@/context/wishlist-context";
import { useLanguage } from "@/context/language-context";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { wishlistCount } = useWishlist();
  const { locale, setLocale, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.discover"), href: "/search" },
    { name: t("nav.brands"), href: "/search?brand=all" },
    { name: t("nav.reviews"), href: "/reviews" },
    { name: t("nav.compare"), href: "/compare" },
  ];

  const toggleLocale = () => setLocale(locale === "es" ? "en" : "es");

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm py-3 pt-[calc(0.75rem+env(safe-area-inset-top))]"
          : "bg-transparent py-5 pt-[calc(1.25rem+env(safe-area-inset-top))]"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Brand */}
        <Link href="/" className="font-serif text-2xl tracking-widest uppercase font-semibold mx-auto md:mx-0">
          Etherial
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm tracking-wide lowercase hover:text-gold transition-colors",
                pathname === link.href ? "text-gold" : "text-muted"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLocale}
            className="flex items-center space-x-1 text-foreground hover:text-gold transition-colors"
            aria-label="Toggle language"
          >
            <Globe size={16} />
            <span className="text-xs font-medium uppercase">{locale}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-foreground hover:text-gold transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Wishlist */}
          <Link href="/wishlist" className="relative text-foreground hover:text-gold transition-colors">
            <Heart size={18} />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-gold text-background text-[10px] font-bold rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Search */}
          <Link href="/search" className="text-foreground hover:text-gold transition-colors">
            <Search size={18} />
          </Link>

          {/* Download APK Desktop */}
          <a
            href="/etherial.apk"
            download
            className="hidden lg:flex items-center space-x-2 bg-gold/10 text-gold-dark hover:bg-gold hover:text-white px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors rounded-sm ml-4"
          >
            <span>APK</span>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-background z-40 p-6 flex flex-col space-y-6">
          {navLinks.map((link) => (
             <Link
             key={link.name}
             href={link.href}
             onClick={() => setMobileMenuOpen(false)}
             className="text-2xl font-serif text-foreground hover:text-gold transition-colors"
           >
             {link.name}
           </Link>
          ))}
          <Link
            href="/wishlist"
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-serif text-foreground hover:text-gold transition-colors flex items-center space-x-3"
          >
            <Heart size={20} />
            <span>{t("nav.wishlist")} {wishlistCount > 0 && `(${wishlistCount})`}</span>
          </Link>
          
          <div className="pt-8 w-full">
            <a
              href="/etherial.apk"
              download
              className="w-full flex items-center justify-center bg-foreground text-background py-4 tracking-widest uppercase text-sm font-medium hover:bg-gold hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Descargar App
            </a>
          </div>

          <div className="flex items-center space-x-4 pt-6 border-t border-border mt-auto">
            <button onClick={toggleLocale} className="flex items-center space-x-2 text-muted hover:text-foreground">
              <Globe size={18} />
              <span className="text-sm">{locale === "es" ? "English" : "Español"}</span>
            </button>
            <button onClick={toggleTheme} className="text-muted hover:text-foreground">
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
