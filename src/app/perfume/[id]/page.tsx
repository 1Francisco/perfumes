import { notFound } from "next/navigation";
import { getPerfumeById, getRealPerfumes } from "@/lib/api";
import PerfumeDetailClient from "@/components/perfume-detail-client";
import type { Metadata } from "next";

// SEO: Dynamic metadata per perfume
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = await params;
  const perfume = await getPerfumeById(id);
  if (!perfume) return { title: "Perfume no encontrado" };
  
  const topNotes = perfume.notes.top.map(n => n.name).join(", ");
  return {
    title: `${perfume.name} de ${perfume.brand}`,
    description: `${perfume.description} Notas de salida: ${topNotes}. Rating: ${perfume.averageRating}/5.`,
    openGraph: {
      title: `${perfume.name} – ${perfume.brand} | Etherial`,
      description: perfume.description,
      images: [{ url: perfume.image, width: 375, height: 500, alt: perfume.name }],
    },
  };
}

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

  return <PerfumeDetailClient perfume={perfume} />;
}
