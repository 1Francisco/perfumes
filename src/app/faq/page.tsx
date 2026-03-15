"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQ_ITEMS = [
  {
    category: "Sobre las Fragancias",
    questions: [
      {
        q: "¿Son originales todos los perfumes que muestran?",
        a: "Sí. Todas las fragancias que presentamos en Etherial son perfumes originales de las casas de lujo más reconocidas del mundo. Mostramos información verificada directamente de las marcas oficiales, incluyendo notas olfativas, perfumistas y años de lanzamiento.",
      },
      {
        q: "¿Cuál es la diferencia entre Eau de Parfum, Eau de Toilette y Parfum?",
        a: "La diferencia principal es la concentración de aceites esenciales. Parfum (20-30%) es la más concentrada y duradera. Eau de Parfum (15-20%) ofrece excelente duración con buena proyección. Eau de Toilette (5-15%) es más ligera y fresca, ideal para el día a día. Generalmente, mayor concentración significa mayor duración y un aroma más intenso.",
      },
      {
        q: "¿Qué son las notas de salida, corazón y fondo?",
        a: "Las notas de salida (top) son lo primero que hueles y duran 15-30 minutos. Las notas de corazón (heart) forman el carácter principal del perfume y duran entre 2-4 horas. Las notas de fondo (base) son la estela final, las más persistentes, y pueden durar hasta 24 horas en la piel.",
      },
      {
        q: "¿Cuánto dura un perfume en la piel?",
        a: "Depende de la concentración, tu tipo de piel y el clima. Los Parfum y Eau de Parfum pueden durar 8-12 horas. Los Eau de Toilette generalmente duran de 4-6 horas. La piel hidratada retiene mejor el aroma. Tips: aplica sobre piel limpia, en puntos de pulso, y no frotes la fragancia.",
      },
    ],
  },
  {
    category: "Sobre Etherial",
    questions: [
      {
        q: "¿Etherial es una tienda online?",
        a: "Etherial es una plataforma de descubrimiento de fragancias. Nuestro objetivo es ayudarte a encontrar tu próximo perfume favorito a través de información detallada, reseñas de la comunidad y una experiencia visual premium. No procesamos compras directamente, pero te conectamos con las tiendas oficiales de cada marca.",
      },
      {
        q: "¿Cómo seleccionan los perfumes que aparecen?",
        a: "Nuestro catálogo está curado por expertos en perfumería. Seleccionamos las fragancias más icónicas, reconocidas y mejor valoradas de las casas de lujo más prestigiosas del mundo. Cada perfume ha sido elegido por su calidad, influencia cultural y reconocimiento global.",
      },
      {
        q: "¿Puedo dejar una reseña?",
        a: "¡Por supuesto! Visita la página de cualquier perfume y encontrarás la sección de reseñas donde puedes compartir tu experiencia con la comunidad. Tu opinión ayuda a otros a tomar mejores decisiones.",
      },
    ],
  },
  {
    category: "Recomendaciones",
    questions: [
      {
        q: "¿Cuál es el mejor perfume para regalar?",
        a: "Para regalos seguros, recomendamos fragancias universalmente apreciadas: Dior Sauvage EDP (masculino), Chanel N°5 EDP (femenino), o Baccarat Rouge 540 (unisex). Son opciones que rara vez fallan porque combinan elegancia con versatilidad.",
      },
      {
        q: "¿Cómo elijo un perfume según la temporada?",
        a: "En verano, opta por fragancias frescas y cítricas (Acqua di Giò, Light Blue). En otoño e invierno, los orientales y amaderados funcionan mejor (Tobacco Vanille, Black Orchid). En primavera, los florales ligeros son ideales (J'adore, La Vie Est Belle). Puedes filtrar por temporada en nuestra sección de búsqueda.",
      },
      {
        q: "¿Qué perfume dura más horas?",
        a: "Los perfumes con concentraciones Parfum o Eau de Parfum con notas base potentes (oud, ámbar, vainilla, pachulí) son los más duraderos. Baccarat Rouge 540, Tobacco Vanille de Tom Ford y Dior Sauvage EDP son conocidos por durar más de 10 horas.",
      },
    ],
  },
];

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="font-serif text-lg pr-8 group-hover:text-gold transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={20} className="text-muted" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-muted leading-relaxed pb-6 pr-12">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <HelpCircle size={32} className="mx-auto text-gold mb-6" />
          <h1 className="font-serif text-4xl md:text-6xl mb-6">Preguntas Frecuentes</h1>
          <p className="text-muted max-w-lg mx-auto leading-relaxed">
            Todo lo que necesitas saber sobre fragancias, nuestra plataforma y cómo encontrar tu perfume ideal.
          </p>
        </motion.div>

        {/* FAQ Sections */}
        {FAQ_ITEMS.map((section, sectionIdx) => (
          <motion.div
            key={section.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: sectionIdx * 0.1 }}
            className="mb-16"
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-gold-dark mb-6 font-medium">
              {section.category}
            </h2>
            <div>
              {section.questions.map((item) => (
                <AccordionItem key={item.q} question={item.q} answer={item.a} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
