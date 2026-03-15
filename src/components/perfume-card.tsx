"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Perfume } from "@/lib/mock-data";
import { Star } from "lucide-react";

export default function PerfumeCard({ perfume }: { perfume: Perfume }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group flex flex-col cursor-pointer"
    >
      <Link href={`/perfume/${perfume.id}`} className="block relative overflow-hidden aspect-[4/5] bg-[#f7f5f2] rounded-sm">
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
