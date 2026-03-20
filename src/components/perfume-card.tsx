"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Perfume } from "@/lib/mock-data";
import { Star, Heart, ArrowLeftRight } from "lucide-react";
import { useWishlist } from "@/context/wishlist-context";
import { useCompare } from "@/context/compare-context";

export default function PerfumeCard({ perfume }: { perfume: Perfume }) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { toggleCompare, isInCompare, compareCount } = useCompare();
  const wishlisted = isInWishlist(perfume.id);
  const comparing = isInCompare(perfume.id);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group flex flex-col cursor-pointer relative"
    >
      <Link href={`/perfume/${perfume.id}`} className="block relative overflow-hidden aspect-[4/5] rounded-sm">
        <Image 
          src={perfume.image} 
          alt={perfume.name} 
          fill 
          unoptimized
          className="object-contain p-4 transition-transform duration-700 ease-in-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Link>

      {/* Action Buttons Overlay */}
      <div className="absolute top-3 right-3 flex flex-col space-y-2 z-10">
        <button
          onClick={(e) => { e.preventDefault(); toggleWishlist(perfume.id); }}
          className={`w-9 h-9 flex items-center justify-center rounded-full backdrop-blur-md transition-all duration-200 ${
            wishlisted
              ? "bg-gold/90 text-white"
              : "bg-background/80 text-muted hover:text-gold hover:bg-background"
          }`}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart size={15} className={wishlisted ? "fill-current" : ""} />
        </button>
        <button
          onClick={(e) => { e.preventDefault(); toggleCompare(perfume.id); }}
          className={`w-9 h-9 flex items-center justify-center rounded-full backdrop-blur-md transition-all duration-200 opacity-0 group-hover:opacity-100 ${
            comparing
              ? "bg-foreground text-background"
              : "bg-background/80 text-muted hover:text-foreground hover:bg-background"
          } ${compareCount >= 3 && !comparing ? "pointer-events-none opacity-30" : ""}`}
          aria-label={comparing ? "Remove from compare" : "Add to compare"}
        >
          <ArrowLeftRight size={14} />
        </button>
      </div>
      
      <div className="mt-6 flex flex-col items-center text-center px-2">
        <p className="text-xs tracking-[0.2em] text-muted uppercase mb-2">{perfume.brand}</p>
        <h3 className="font-serif text-xl font-medium mb-2">{perfume.name}</h3>
        
        <div className="flex items-center space-x-1 mb-3">
          <Star className="w-3 h-3 fill-gold text-gold" />
          <span className="text-sm font-medium">{perfume.averageRating.toFixed(1)}</span>
        </div>
        
        <p className="text-xs text-muted tracking-wider uppercase">{perfume.type}</p>
      </div>
    </motion.div>
  );
}
