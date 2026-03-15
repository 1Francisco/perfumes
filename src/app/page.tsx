"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import HeroParticles from "@/components/hero-particles";
import PerfumeCard from "@/components/perfume-card";
import { getRealPerfumes } from "@/lib/api";
import { useEffect, useState } from "react";
import { Perfume } from "@/lib/mock-data";
import { useLanguage } from "@/context/language-context";

export default function Home() {
  const [perfumes, setPerfumes] = useState<Perfume[]>([]);
  const { t } = useLanguage();
  
  useEffect(() => {
    getRealPerfumes().then(setPerfumes);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
        <HeroParticles />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center flex flex-col items-center pointer-events-none">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-sm md:text-md uppercase tracking-[0.3em] font-medium text-gold-dark mb-6"
          >
            {t("home.subtitle")}
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8"
          >
            {t("home.title1")} <br/> <span className="italic text-muted/80">{t("home.title2")}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="pointer-events-auto"
          >
            <Link 
              href="/search" 
              className="inline-flex items-center space-x-3 border-b border-foreground pb-1 hover:text-gold hover:border-gold transition-colors duration-300 text-sm tracking-widest uppercase"
            >
              <span>{t("home.cta")}</span>
              <MoveRight size={16} />
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-xs uppercase tracking-widest text-muted mb-2">{t("home.scroll")}</span>
          <div className="w-[1px] h-12 bg-border relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 right-0 left-0 h-1/2 bg-foreground" 
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Perfumes Section */}
      <section className="py-32 bg-panel">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <h2 className="font-serif text-4xl md:text-5xl mb-4">{t("home.featured")}</h2>
              <p className="text-muted leading-relaxed">
                {t("home.featured.desc")}
              </p>
            </motion.div>
            
            <Link 
              href="/search" 
              className="hidden md:inline-flex items-center space-x-2 text-sm tracking-widest uppercase hover:text-gold transition-colors"
            >
              <span>{t("home.viewAll")}</span>
              <MoveRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {perfumes.slice(0, 8).map((perfume, idx) => (
              <motion.div
                key={perfume.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <PerfumeCard perfume={perfume} />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 md:hidden flex justify-center">
            <Link 
              href="/search" 
              className="inline-flex items-center space-x-2 text-sm tracking-widest uppercase border-b border-foreground pb-1 hover:text-gold hover:border-gold transition-colors"
            >
              <span>{t("home.viewAll")}</span>
              <MoveRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Discovery Banner Section */}
      <section className="relative py-40 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1616782298980-60b6b669ecb3?q=80&w=2000&auto=format&fit=crop" 
             alt="Luxury background" 
             className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
           />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
              {t("home.banner.title1")} <br/><span className="italic text-gold-dark">{t("home.banner.title2")}</span> {t("home.banner.title3")}
            </h2>
            <Link 
              href="/search" 
              className="inline-block bg-white text-black px-8 py-4 uppercase tracking-widest text-sm hover:bg-gold-dark hover:text-white transition-colors duration-300"
            >
              {t("home.banner.cta")}
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
