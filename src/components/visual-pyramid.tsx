"use client";

import { motion } from "framer-motion";
import { type Note } from "@/lib/mock-data";

export default function VisualPyramid({ notes }: { notes: { top: Note[], heart: Note[], base: Note[] } }) {
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const Level = ({ title, levelNotes, delay }: { title: string, levelNotes: Note[], delay: number }) => (
    <motion.div variants={item} className="flex flex-col items-center">
      <h4 className="text-xs uppercase tracking-[0.2em] text-gold-dark mb-4">{title}</h4>
      <div className="flex flex-wrap justify-center gap-3">
        {levelNotes.map((note, idx) => (
          <span 
            key={idx} 
            className="px-4 py-2 border border-border bg-panel text-sm transition-colors hover:border-gold hover:text-gold"
          >
            {note.name}
          </span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="relative py-16 px-6 bg-panel/50 rounded-sm border border-border mt-16">
      
      {/* Background elegant faint triangle */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-[80%] h-auto preserve-3d" stroke="currentColor" strokeWidth="0.5" fill="none">
          <polygon points="50,10 90,90 10,90" />
          <line x1="30" y1="50" x2="70" y2="50" />
          <line x1="20" y1="70" x2="80" y2="70" />
        </svg>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 flex flex-col space-y-12"
      >
        <Level title="Notas de Salida (Los primeros 15 mins)" levelNotes={notes.top} delay={0} />
        
        <div className="w-px h-8 bg-border mx-auto" />
        
        <Level title="Notas de Corazón (El alma del perfume)" levelNotes={notes.heart} delay={0.2} />
        
        <div className="w-px h-8 bg-border mx-auto" />
        
        <Level title="Notas de Fondo (La memoria prolongada)" levelNotes={notes.base} delay={0.4} />
      </motion.div>
    </div>
  );
}
