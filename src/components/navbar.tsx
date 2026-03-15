"use client";

import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Descubrir", href: "/search" },
    { name: "Marcas", href: "/search?brand=all" },
    { name: "Reseñas", href: "/reviews" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm py-3"
          : "bg-transparent py-5"
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

        {/* Search Icon */}
        <Link href="/search" className="text-foreground hover:text-gold transition-colors">
          <Search size={20} />
        </Link>
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
        </div>
      )}
    </header>
  );
}
