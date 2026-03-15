"use client";

import { useCompare } from "@/context/compare-context";
import { useLanguage } from "@/context/language-context";
import { useEffect, useState } from "react";
import { getRealPerfumes } from "@/lib/api";
import { Perfume } from "@/lib/mock-data";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CompareBar() {
  const { compareList, removeFromCompare, clearCompare, compareCount } = useCompare();
  const { t } = useLanguage();
  const [perfumes, setPerfumes] = useState<Perfume[]>([]);

  useEffect(() => {
    if (compareCount === 0) {
      setPerfumes([]);
      return;
    }
    getRealPerfumes().then((all) => {
      setPerfumes(all.filter((p) => compareList.includes(p.id)));
    });
  }, [compareList, compareCount]);

  if (compareCount === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-panel/95 backdrop-blur-md border-t border-border shadow-2xl p-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-xs uppercase tracking-widest text-muted hidden sm:block">
              {t("compare.bar")} ({compareCount}/3)
            </span>
            <div className="flex items-center space-x-3">
              {perfumes.map((p) => (
                <div key={p.id} className="relative flex items-center space-x-2 bg-background border border-border px-3 py-2">
                  <div className="relative w-8 h-10 bg-[#f7f5f2] flex-shrink-0">
                    <Image src={p.image} alt={p.name} fill unoptimized className="object-contain" />
                  </div>
                  <span className="text-xs font-medium max-w-[100px] truncate hidden sm:block">{p.name}</span>
                  <button
                    onClick={() => removeFromCompare(p.id)}
                    className="text-muted hover:text-foreground transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={clearCompare}
              className="text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors"
            >
              {t("compare.barClean")}
            </button>
            {compareCount >= 2 && (
              <Link
                href="/compare"
                className="bg-foreground text-background px-6 py-3 text-xs uppercase tracking-widest hover:bg-gold transition-colors"
              >
                {t("compare.bar")}
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
