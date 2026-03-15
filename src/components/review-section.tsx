"use client";

import { useState } from "react";
import { Star, Droplets, Wind, SunSnow } from "lucide-react";
import { Review } from "@/lib/mock-data";

export default function ReviewSection({ initialReviews }: { initialReviews: Review[] }) {
  const [reviews, setReviews] = useState(initialReviews);
  const [showForm, setShowForm] = useState(false);
  
  // Form State
  const [rating, setRating] = useState(5);
  const [season, setSeason] = useState<string>('Cualquiera');
  const [longevity, setLongevity] = useState(3);
  const [projection, setProjection] = useState(3);
  const [versatility, setVersatility] = useState(3);
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const newReview: Review = {
      id: Math.random().toString(),
      userName: "Usuario(a)", // Mocked logged-in user
      rating,
      season: season === 'Cualquiera' ? 'Primavera' : (season as Review['season']), // fallback
      longevity,
      projection,
      versatility,
      comment,
      date: new Date().toISOString().split('T')[0]
    };

    setReviews([newReview, ...reviews]);
    setShowForm(false);
    setComment("");
  };

  const averageRating = reviews.length ? (reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length).toFixed(1) : 0;
  
  const seasonCount = reviews.reduce((acc, curr) => {
    acc[curr.season] = (acc[curr.season] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const bestSeason = Object.keys(seasonCount).length 
    ? Object.keys(seasonCount).reduce((a, b) => seasonCount[a] > seasonCount[b] ? a : b) 
    : "Sin datos";

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={14} className={i < count ? "fill-gold text-gold" : "fill-transparent text-border"} />
    ));
  };

  const RatingBar = ({ label, value, icon: Icon }: { label: string, value: number, icon: any }) => (
    <div className="flex items-center space-x-4 mb-3 text-sm">
      <div className="flex items-center space-x-2 w-32 text-muted">
        <Icon size={14} />
        <span>{label}</span>
      </div>
      <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
        <div className="h-full bg-foreground transition-all duration-1000" style={{ width: `${(value / 5) * 100}%` }} />
      </div>
      <span className="w-8 text-right font-medium">{value}/5</span>
    </div>
  );

  return (
    <div className="py-24 border-t border-border mt-24">
      <h2 className="font-serif text-3xl md:text-4xl mb-12">Reseñas de la Comunidad</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        
        {/* Rating Overview */}
        <div className="col-span-1">
          <div className="bg-panel p-8 sticky top-32">
            <div className="text-center mb-8">
              <span className="text-6xl font-serif text-gold-dark">{averageRating}</span>
              <div className="flex justify-center space-x-1 my-3">
                {renderStars(Math.round(Number(averageRating)))}
              </div>
              <p className="text-sm text-muted">{reviews.length} valoraciones</p>
            </div>

            <div className="space-y-6 pt-6 border-t border-border">
              <div>
                 <h4 className="text-xs uppercase tracking-widest text-muted mb-4">Mejor Estación</h4>
                 <div className="inline-flex items-center space-x-2 px-4 py-2 border border-gold text-gold rounded-full text-sm">
                   <SunSnow size={16} />
                   <span>{bestSeason}</span>
                 </div>
              </div>
            </div>

            <button 
              onClick={() => setShowForm(!showForm)}
              className="w-full mt-12 bg-foreground text-background py-4 uppercase tracking-widest text-sm hover:bg-black/80 transition-colors"
            >
              {showForm ? "Cancelar Reseña" : "Escribir Reseña"}
            </button>
          </div>
        </div>

        {/* Reviews List & Form */}
        <div className="col-span-1 md:col-span-2 space-y-12">
          
          {showForm && (
            <div className="bg-panel p-8 border border-border animate-in fade-in slide-in-from-top-4 duration-500">
              <h3 className="font-serif text-2xl mb-6">Tu Experiencia</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                     <label className="block text-xs uppercase tracking-widest text-muted mb-3">Calificación General</label>
                     <div className="flex space-x-2">
                       {[1,2,3,4,5].map(num => (
                         <button type="button" key={num} onClick={() => setRating(num)}>
                           <Star size={24} className={num <= rating ? "fill-gold text-gold transition-colors" : "fill-transparent text-border transition-colors hover:text-gold"} />
                         </button>
                       ))}
                     </div>
                  </div>

                  <div>
                     <label className="block text-xs uppercase tracking-widest text-muted mb-3">Estación Ideal</label>
                     <select 
                       value={season} 
                       onChange={(e) => setSeason(e.target.value as any)}
                       className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-gold text-sm"
                     >
                       <option value="Primavera">Primavera</option>
                       <option value="Verano">Verano</option>
                       <option value="Otoño">Otoño</option>
                       <option value="Invierno">Invierno</option>
                       <option value="Cualquiera">Cualquiera</option>
                     </select>
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <div className="flex items-center space-x-4">
                    <span className="w-32 text-xs uppercase tracking-widest text-muted">Duración</span>
                    <input type="range" min="1" max="5" value={longevity} onChange={(e) => setLongevity(Number(e.target.value))} className="flex-1 accent-gold" />
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="w-32 text-xs uppercase tracking-widest text-muted">Proyección</span>
                    <input type="range" min="1" max="5" value={projection} onChange={(e) => setProjection(Number(e.target.value))} className="flex-1 accent-gold" />
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="w-32 text-xs uppercase tracking-widest text-muted">Versatilidad</span>
                    <input type="range" min="1" max="5" value={versatility} onChange={(e) => setVersatility(Number(e.target.value))} className="flex-1 accent-gold" />
                  </div>
                </div>

                <div className="pt-6">
                  <label className="block text-xs uppercase tracking-widest text-muted mb-3">Tus Comentarios</label>
                  <textarea 
                    rows={4} 
                    required
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Describe las notas que percibes, cómo se desarrolla en tu piel..."
                    className="w-full bg-background border border-border p-4 focus:outline-none focus:border-gold text-sm resize-none"
                  />
                </div>

                <button type="submit" className="bg-gold text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-gold-dark transition-colors">
                  Publicar Reseña
                </button>
              </form>
            </div>
          )}

          <div className="space-y-12">
            {reviews.length === 0 ? (
              <p className="text-muted tracking-wide text-center py-12">Esta fragancia aún no tiene reseñas. Sé el primero en compartir tu experiencia.</p>
            ) : (
              reviews.map((review) => (
                <div key={review.id} className="pb-12 border-b border-border last:border-0 last:pb-0">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="font-medium text-lg mb-1">{review.userName}</h4>
                      <div className="flex items-center space-x-4">
                        <div className="flex space-x-1">{renderStars(review.rating)}</div>
                        <span className="text-xs text-muted">{review.date}</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center space-x-2 px-3 py-1 bg-panel text-xs rounded-full border border-border">
                      <SunSnow size={12} />
                      <span>{review.season}</span>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-foreground/80 mb-6">{review.comment}</p>

                  <div className="bg-panel p-4 rounded-sm">
                    <RatingBar label="Duración" value={review.longevity} icon={Droplets} />
                    <RatingBar label="Proyección" value={review.projection} icon={Wind} />
                    <RatingBar label="Versatilidad" value={review.versatility} icon={Star} />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
