"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeftRight, X, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useCompare } from "@/context/compare-context";
import { useLanguage } from "@/context/language-context";
import { getRealPerfumes } from "@/lib/api";
import { Perfume } from "@/lib/mock-data";

export default function ComparePage() {
  const { compareList, removeFromCompare, clearCompare } = useCompare();
  const { t } = useLanguage();
  const [perfumes, setPerfumes] = useState<Perfume[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRealPerfumes().then((all) => {
      setPerfumes(all.filter((p) => compareList.includes(p.id)));
      setLoading(false);
    });
  }, [compareList]);

  if (loading) return <div className="min-h-screen pt-32 pb-24 bg-background px-6 text-center text-muted">{t("loading")}</div>;

  const NoteList = ({ notes }: { notes: { name: string }[] }) => (
    <div className="flex flex-wrap gap-1">
      {notes.map((n) => (<span key={n.name} className="text-xs bg-gold/10 text-gold-dark px-2 py-0.5 rounded-sm">{n.name}</span>))}
    </div>
  );

  const rows = [
    { label: t("compare.brand"), render: (p: Perfume) => <span className="font-medium">{p.brand}</span> },
    { label: t("compare.type"), render: (p: Perfume) => <span>{p.type}</span> },
    { label: t("compare.season"), render: (p: Perfume) => <span>{p.season}</span> },
    { label: t("compare.year"), render: (p: Perfume) => <span>{p.launchYear}</span> },
    { label: t("compare.perfumer"), render: (p: Perfume) => <span className="text-sm">{p.perfumer}</span> },
    { label: t("compare.rating"), render: (p: Perfume) => (<div className="flex items-center space-x-1"><Star className="w-4 h-4 fill-gold text-gold" /><span className="font-medium">{p.averageRating}</span></div>) },
    { label: t("compare.topNotes"), render: (p: Perfume) => <NoteList notes={p.notes.top} /> },
    { label: t("compare.heartNotes"), render: (p: Perfume) => <NoteList notes={p.notes.heart} /> },
    { label: t("compare.baseNotes"), render: (p: Perfume) => <NoteList notes={p.notes.base} /> },
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-gold-dark mb-4">{t("compare.subtitle")}</p>
          <h1 className="font-serif text-4xl md:text-5xl mb-4">{t("compare.title")}</h1>
          <p className="text-muted">{perfumes.length >= 2 ? t("compare.desc") : t("compare.selectDesc")}</p>
        </motion.div>

        {perfumes.length < 2 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24">
            <ArrowLeftRight size={48} className="mx-auto text-border mb-6" />
            <h2 className="font-serif text-2xl mb-4">{t("compare.select")}</h2>
            <p className="text-muted mb-8 max-w-md mx-auto">{t("compare.selectInstructions")}</p>
            <Link href="/search" className="inline-block bg-foreground text-background px-8 py-4 uppercase tracking-widest text-sm hover:bg-gold hover:text-white transition-colors">
              {t("home.cta")}
            </Link>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div className={`grid gap-6 mb-12 ${perfumes.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
              {perfumes.map((p) => (
                <div key={p.id} className="relative bg-panel border border-border p-6">
                  <button onClick={() => removeFromCompare(p.id)} className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-background border border-border rounded-full text-muted hover:text-foreground transition-colors z-10"><X size={14} /></button>
                  <Link href={`/perfume/${p.id}`} className="block">
                    <div className="relative aspect-[4/5] bg-neutral-100 dark:bg-neutral-800/80 mb-4 rounded-sm"><Image src={p.image} alt={p.name} fill unoptimized className="object-contain p-4" /></div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted mb-1">{p.brand}</p>
                    <h3 className="font-serif text-lg">{p.name}</h3>
                  </Link>
                </div>
              ))}
            </div>

            <div className="border border-border">
              {rows.map((row, idx) => (
                <div key={row.label} className={`grid ${perfumes.length === 2 ? "grid-cols-[180px_1fr_1fr]" : "grid-cols-[180px_1fr_1fr_1fr]"} ${idx % 2 === 0 ? "bg-panel" : "bg-background"}`}>
                  <div className="px-6 py-4 flex items-center border-r border-border"><span className="text-xs uppercase tracking-widest text-muted font-medium">{row.label}</span></div>
                  {perfumes.map((p) => (<div key={p.id} className="px-6 py-4 flex items-center border-r border-border last:border-r-0 text-sm">{row.render(p)}</div>))}
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <button onClick={clearCompare} className="text-xs uppercase tracking-widest text-muted hover:text-foreground border-b border-transparent hover:border-foreground transition-all">{t("compare.clear")}</button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
