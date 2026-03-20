"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useWishlist } from "@/context/wishlist-context";
import { useLanguage } from "@/context/language-context";
import { Perfume } from "@/lib/mock-data";
import PerfumeCard from "@/components/perfume-card";

export default function WishlistPage() {
  const { getWishlistPerfumes, wishlistCount } = useWishlist();
  const { t } = useLanguage();
  const [perfumes, setPerfumes] = useState<Perfume[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWishlistPerfumes().then((data) => {
      setPerfumes(data);
      setLoading(false);
    });
  }, [wishlistCount, getWishlistPerfumes]);

  if (loading) {
    return <div className="min-h-screen pt-32 pb-24 bg-background px-6 text-center text-muted">{t("loading")}</div>;
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold-dark mb-4">{t("wishlist.subtitle")}</p>
          <h1 className="font-serif text-4xl md:text-6xl mb-6">{t("wishlist.title")}</h1>
          <p className="text-muted max-w-2xl leading-relaxed">
            {perfumes.length > 0
              ? `${perfumes.length} fragrance${perfumes.length > 1 ? "s" : ""}`
              : t("wishlist.emptyDesc")
            }
          </p>
        </motion.div>

        {perfumes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {perfumes.map((perfume, idx) => (
              <motion.div key={perfume.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.05 }}>
                <PerfumeCard perfume={perfume} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24">
            <Heart size={48} className="mx-auto text-border mb-6" />
            <h2 className="font-serif text-2xl mb-4">{t("wishlist.empty")}</h2>
            <p className="text-muted mb-8 max-w-md mx-auto">{t("wishlist.emptyDesc")}</p>
            <Link href="/search" className="inline-flex items-center space-x-2 bg-foreground text-background px-8 py-4 uppercase tracking-widest text-sm hover:bg-gold hover:text-white transition-colors">
              <ArrowLeft size={16} /><span>{t("wishlist.explore")}</span>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
