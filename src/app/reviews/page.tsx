"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Quote, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getRealPerfumes } from "@/lib/api";
import { Perfume, Review } from "@/lib/mock-data";
import { useLanguage } from "@/context/language-context";

type ReviewWithPerfume = Review & { perfume: Perfume };

// Static curated reviews for a richer experience
const CURATED_REVIEWS: { perfumeId: string; review: Omit<Review, "id"> }[] = [
  { perfumeId: "dior-sauvage-edp", review: { userName: "Andrés G.", rating: 5, season: "Invierno" as Review["season"], longevity: 5, projection: 5, versatility: 5, comment: "El perfume que más cumplidos me ha dado en mi vida. Cada vez que lo uso, alguien me pregunta qué llevo puesto. Duración de 10+ horas.", date: "2024-08-15" } },
  { perfumeId: "bleu-de-chanel-parfum", review: { userName: "Martín L.", rating: 5, season: "Invierno" as Review["season"], longevity: 5, projection: 4, versatility: 5, comment: "La versión Parfum es simplemente perfecta. Más profundo y elegante que el EDT. El cedro en el fondo es sublime.", date: "2024-07-22" } },
  { perfumeId: "chanel-no5-edp", review: { userName: "Isabella C.", rating: 5, season: "Invierno", longevity: 5, projection: 5, versatility: 4, comment: "Mi abuela lo usaba, yo lo uso, y un día se lo daré a mi hija. El N°5 es eterno, inmortal, incomparable.", date: "2024-06-10" } },
  { perfumeId: "mfk-baccarat-rouge-540", review: { userName: "Daniela R.", rating: 5, season: "Invierno", longevity: 5, projection: 5, versatility: 4, comment: "Cada vez que entro a una habitación con BR540, la gente voltea. Es adictivo, magnético, y completamente irresistible.", date: "2024-09-03" } },
  { perfumeId: "tf-tobacco-vanille", review: { userName: "Ricardo M.", rating: 5, season: "Invierno", longevity: 5, projection: 5, versatility: 3, comment: "Es como estar sentado junto a una chimenea en un club privado londinense con un whisky en la mano. Opulento, cálido, adictivo.", date: "2024-05-18" } },
  { perfumeId: "creed-aventus", review: { userName: "Felipe A.", rating: 5, season: "Primavera", longevity: 4, projection: 5, versatility: 5, comment: "El rey indiscutible de los perfumes masculinos. Cada lote huele ligeramente diferente, lo cual lo hace especial.", date: "2024-04-01" } },
  { perfumeId: "ysl-black-opium", review: { userName: "Valentina S.", rating: 5, season: "Invierno", longevity: 5, projection: 4, versatility: 4, comment: "Oscuro, sensual y completamente adictivo. El café negro con vainilla es la combinación más brillante de la perfumería moderna.", date: "2024-10-12" } },
  { perfumeId: "ch-good-girl", review: { userName: "Camila P.", rating: 4, season: "Otoño", longevity: 5, projection: 4, versatility: 4, comment: "El frasco en forma de stiletto ya dice todo. Es un perfume para la mujer que sabe lo que quiere. Muy duradero.", date: "2024-03-28" } },
  { perfumeId: "dior-jadore", review: { userName: "María F.", rating: 5, season: "Primavera", longevity: 4, projection: 4, versatility: 5, comment: "Elegante, femenino, intemporal. Es el perfume que me pongo para las ocasiones especiales y nunca falla.", date: "2024-01-20" } },
  { perfumeId: "le-labo-santal-33", review: { userName: "Santiago V.", rating: 5, season: "Otoño", longevity: 5, projection: 4, versatility: 5, comment: "El sándalo ahumado con iris es simplemente genial. Diferente a todo lo demás. Un perfume que te define.", date: "2024-11-05" } },
  { perfumeId: "tf-black-orchid", review: { userName: "Lucía H.", rating: 4, season: "Invierno", longevity: 5, projection: 5, versatility: 3, comment: "Oscuro, misterioso y completamente hipnótico. No es para todos los días, pero cuando lo usas, es memorable.", date: "2024-02-14" } },
  { perfumeId: "lancome-la-vie-est-belle", review: { userName: "Ana M.", rating: 4, season: "Primavera", longevity: 4, projection: 4, versatility: 5, comment: "Dulce sin ser empalagoso. El iris con praliné es genial. Perfecto para el día a día.", date: "2024-06-25" } },
  { perfumeId: "paco-1-million", review: { userName: "Diego T.", rating: 4, season: "Otoño", longevity: 4, projection: 5, versatility: 4, comment: "El perfume más divertido que tengo. La mandarina con canela es una fiesta. Ideal para salir de noche.", date: "2024-08-30" } },
  { perfumeId: "versace-eros", review: { userName: "Roberto N.", rating: 4, season: "Verano", longevity: 4, projection: 5, versatility: 4, comment: "Fresco, potente y con mucha personalidad. Un clásico moderno que nunca falla en verano.", date: "2024-07-04" } },
  { perfumeId: "jpg-le-male", review: { userName: "Javier O.", rating: 4, season: "Verano", longevity: 4, projection: 4, versatility: 4, comment: "Un clásico intemporal. 30 años después sigue oliendo moderno. La lavanda con vainilla es una combinación perfecta.", date: "2024-09-18" } },
  { perfumeId: "ysl-libre-edp", review: { userName: "Paula B.", rating: 5, season: "Otoño", longevity: 5, projection: 4, versatility: 5, comment: "La lavanda con flor de azahar es una combinación que no debería funcionar pero es absoluta genialidad.", date: "2024-12-01" } },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center space-x-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={14}
          className={star <= rating ? "fill-gold text-gold" : "text-border"}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<ReviewWithPerfume[]>([]);
  const [loading, setLoading] = useState(true);
  const { t, locale } = useLanguage();

  useEffect(() => {
    getRealPerfumes().then((perfumes) => {
      const allReviews: ReviewWithPerfume[] = [];

      // Collect reviews already in perfume data
      perfumes.forEach((perfume) => {
        perfume.reviews.forEach((review) => {
          allReviews.push({ ...review, perfume });
        });
      });

      // Add curated reviews
      CURATED_REVIEWS.forEach(({ perfumeId, review }, idx) => {
        const perfume = perfumes.find((p) => p.id === perfumeId);
        if (perfume) {
          // Skip if already exists by userName match
          const exists = allReviews.some(
            (r) => r.userName === review.userName && r.perfume.id === perfumeId
          );
          if (!exists) {
            allReviews.push({
              id: `curated-${idx}`,
              ...review,
              perfume,
            });
          }
        }
      });

      // Sort by date descending
      allReviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setReviews(allReviews);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-24 bg-background px-6 text-center text-muted">
        {t("loading")}
      </div>
    );
  }

  const avgRating = reviews.length > 0
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : "0";

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gold-dark mb-4">{t("reviews.community")}</p>
          <h1 className="font-serif text-4xl md:text-6xl mb-6">{t("reviews.title")}</h1>
          <p className="text-muted max-w-2xl leading-relaxed">
            {t("reviews.desc")}
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-8 mb-16 bg-panel border border-border p-8"
        >
          <div className="text-center">
            <p className="font-serif text-3xl md:text-4xl text-gold-dark">{reviews.length}</p>
            <p className="text-xs uppercase tracking-widest text-muted mt-2">{t("reviews.total")}</p>
          </div>
          <div className="text-center border-x border-border">
            <p className="font-serif text-3xl md:text-4xl text-gold-dark">{avgRating}</p>
            <p className="text-xs uppercase tracking-widest text-muted mt-2">{t("reviews.avgRating")}</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-3xl md:text-4xl text-gold-dark">
              {new Set(reviews.map((r) => r.perfume.brand)).size}
            </p>
            <p className="text-xs uppercase tracking-widest text-muted mt-2">{t("reviews.brandsReviewed")}</p>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-panel border border-border p-8 flex flex-col"
            >
              {/* Perfume Info */}
              <Link href={`/perfume/${review.perfume.id}`} className="flex items-center space-x-4 mb-6 group">
                <div className="relative w-16 h-20 bg-[#f7f5f2] flex-shrink-0">
                  <Image
                    src={review.perfume.image}
                    alt={review.perfume.name}
                    fill
                    unoptimized
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">{review.perfume.brand}</p>
                  <p className="font-serif text-lg group-hover:text-gold transition-colors">{review.perfume.name}</p>
                </div>
              </Link>

              {/* Rating */}
              <div className="flex items-center space-x-3 mb-4">
                <StarRating rating={review.rating} />
                <span className="text-sm font-medium">{review.rating}.0</span>
              </div>

              {/* Comment */}
              <div className="flex-1 mb-6">
                <Quote size={16} className="text-gold/40 mb-2" />
                <p className="text-foreground/80 leading-relaxed italic">
                  {review.comment}
                </p>
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                    <span className="text-xs font-medium text-gold-dark">
                      {review.userName.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <span className="text-sm font-medium">{review.userName}</span>
                </div>
                <span className="text-xs text-muted">{new Date(review.date).toLocaleDateString(locale === "en" ? "en-US" : "es-ES", { year: "numeric", month: "long" })}</span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-border">
                <div className="text-center">
                  <p className="text-xs text-muted uppercase tracking-wider">{t("reviews.longevity")}</p>
                  <p className="text-sm font-medium mt-1">{review.longevity}/5</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted uppercase tracking-wider">{t("reviews.projection")}</p>
                  <p className="text-sm font-medium mt-1">{review.projection}/5</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted uppercase tracking-wider">{t("reviews.versatility")}</p>
                  <p className="text-sm font-medium mt-1">{review.versatility}/5</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-24 py-16 border-t border-border"
        >
          <MessageCircle size={32} className="mx-auto text-gold mb-6" />
          <h2 className="font-serif text-3xl mb-4">{t("reviews.tried")}</h2>
          <p className="text-muted mb-8 max-w-md mx-auto">
            {t("reviews.triedDesc")}
          </p>
          <Link
            href="/search"
            className="inline-block bg-foreground text-background px-8 py-4 uppercase tracking-widest text-sm hover:bg-black/80 transition-colors"
          >
            {t("home.cta")}
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
