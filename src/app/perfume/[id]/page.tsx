import { notFound } from "next/navigation";
import Image from "next/image";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { getPerfumeById, getRealPerfumes } from "@/lib/api";
import VisualPyramid from "@/components/visual-pyramid";
import ReviewSection from "@/components/review-section";

// Generar rutas estáticas
export async function generateStaticParams() {
  const perfumes = await getRealPerfumes();
  return perfumes.map((perfume) => ({
    id: perfume.id,
  }));
}

export default async function PerfumeDetailPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const perfume = await getPerfumeById(id);

  if (!perfume) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Top Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-8">
        <Link 
          href="/search" 
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors"
        >
          <MoveLeft size={16} />
          <span>Volver a la colección</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-24">
          
          {/* Left Column: Image Gallery (Sticky) */}
          <div className="relative">
            <div className="md:sticky md:top-32 space-y-4">
              <div className="relative aspect-[4/5] w-full bg-[#f7f5f2]">
                 <Image 
                   src={perfume.image} 
                   alt={perfume.name} 
                   fill 
                   unoptimized
                   className="object-contain p-6"
                   priority
                 />
              </div>
              {perfume.images.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {perfume.images.slice(1).map((img, idx) => (
                    <div key={idx} className="relative aspect-square w-full bg-panel cursor-pointer hover:opacity-80 transition-opacity">
                       <Image 
                         src={img} 
                         alt={`${perfume.name} view ${idx + 2}`} 
                         fill 
                         className="object-cover"
                       />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Details & Pyramid */}
          <div className="flex flex-col">
            <div className="border-b border-border pb-12 mb-12">
              <h3 className="text-sm uppercase tracking-[0.3em] font-medium text-gold-dark mb-4">
                {perfume.brand}
              </h3>
              <h1 className="font-serif text-5xl md:text-6xl mb-6 leading-tight">
                {perfume.name}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted mb-8">
                <span className="flex items-center">
                  <span className="uppercase tracking-widest text-xs mr-2 border border-border px-3 py-1 bg-panel">{perfume.type}</span>
                </span>
                <span>Lanzamiento: {perfume.launchYear}</span>
                {perfume.perfumer && <span>Perfumista: {perfume.perfumer}</span>}
              </div>
              
              <p className="text-lg leading-relaxed text-foreground/80 mb-10 font-serif">
                {perfume.description}
              </p>
              
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-muted mb-4">Dónde Comprarlo</p>
                <a 
                  href={`https://www.sephora.com.mx/search?q=${encodeURIComponent(perfume.brand + ' ' + perfume.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between bg-foreground text-background py-4 px-6 uppercase tracking-widest text-sm hover:bg-black/80 transition-colors border border-foreground"
                >
                  <span>Ver en Sephora México</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
                <a 
                  href={`https://www.liverpool.com.mx/tienda?s=${encodeURIComponent(perfume.brand + ' ' + perfume.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between bg-transparent text-foreground py-4 px-6 uppercase tracking-widest text-sm hover:bg-panel transition-colors border border-border"
                >
                  <span>Ver en Liverpool</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
                <a 
                  href={`https://www.elpalaciodehierro.com/buscar?q=${encodeURIComponent(perfume.brand + ' ' + perfume.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between bg-transparent text-foreground py-4 px-6 uppercase tracking-widest text-sm hover:bg-panel transition-colors border border-border"
                >
                  <span>Ver en Palacio de Hierro</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="font-serif text-3xl mb-8">Estructura Olfativa</h2>
              <VisualPyramid notes={perfume.notes} />
            </div>
            
            <div className="prose prose-sm dark:prose-invert max-w-none text-muted leading-relaxed mt-12 bg-panel p-8">
              <h4 className="font-serif text-lg mb-4 text-foreground">El Arte de la Creación</h4>
              <p>
                Cada gota de {perfume.name} es el resultado de cientos de horas de meticulosa extracción y refinamiento.
                Las materias primas son seleccionadas a mano de las cosechas más prestigiosas del mundo, asegurando una
                calidad que trasciende las tendencias para convertirse en una obra atemporal.
              </p>
            </div>

          </div>
        </div>

        {/* Full width reviews section */}
        <ReviewSection initialReviews={perfume.reviews} />
        
      </div>
    </div>
  );
}
