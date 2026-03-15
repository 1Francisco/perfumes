"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search as SearchIcon, Filter, X } from "lucide-react";
import { Perfume } from "@/lib/mock-data";
import { getRealPerfumes } from "@/lib/api";
import PerfumeCard from "@/components/perfume-card";

function SearchContent({ perfumes }: { perfumes: Perfume[] }) {
  const searchParams = useSearchParams();
  const initialBrand = searchParams.get("brand");
  const initialGender = searchParams.get("gender");

  const [query, setQuery] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>(initialBrand && initialBrand !== 'all' ? [initialBrand] : []);
  const [selectedSeasons, setSelectedSeasons] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>(initialGender ? [initialGender] : []);
  
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const brands = Array.from(new Set(perfumes.map(p => p.brand)));
  const seasons = ['Primavera', 'Verano', 'Otoño', 'Invierno', 'Cualquiera'];
  const types = ['Masculino', 'Femenino', 'Unisex'];

  const filteredPerfumes = useMemo(() => {
    return perfumes.filter(perfume => {
      const matchQuery = perfume.name.toLowerCase().includes(query.toLowerCase()) || 
                         perfume.brand.toLowerCase().includes(query.toLowerCase());
      
      const matchBrand = selectedBrands.length === 0 || selectedBrands.includes(perfume.brand);
      const matchSeason = selectedSeasons.length === 0 || selectedSeasons.includes(perfume.season);
      const matchType = selectedTypes.length === 0 || selectedTypes.includes(perfume.type);

      return matchQuery && matchBrand && matchSeason && matchType;
    });
  }, [query, selectedBrands, selectedSeasons, selectedTypes]);

  const toggleFilter = (state: string[], setState: (val: string[]) => void, value: string) => {
    if (state.includes(value)) {
      setState(state.filter(item => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  const clearFilters = () => {
    setQuery("");
    setSelectedBrands([]);
    setSelectedSeasons([]);
    setSelectedTypes([]);
  };

  const FilterSidebar = () => (
    <div className="flex flex-col space-y-8">
      <div>
        <h3 className="font-serif text-lg mb-4">Marcas</h3>
        <div className="space-y-3">
          {brands.map(brand => (
             <label key={brand} className="flex items-center space-x-3 cursor-pointer group">
               <input 
                 type="checkbox" 
                 className="hidden" 
                 checked={selectedBrands.includes(brand)}
                 onChange={() => toggleFilter(selectedBrands, setSelectedBrands, brand)}
               />
               <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${selectedBrands.includes(brand) ? 'bg-gold border-gold' : 'border-muted group-hover:border-foreground'}`}>
                 {selectedBrands.includes(brand) && <div className="w-2 h-2 bg-white rounded-sm" />}
               </div>
               <span className="text-sm tracking-wide">{brand}</span>
             </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-serif text-lg mb-4">Estación</h3>
        <div className="space-y-3">
          {seasons.map(season => (
             <label key={season} className="flex items-center space-x-3 cursor-pointer group">
               <input 
                 type="checkbox" 
                 className="hidden" 
                 checked={selectedSeasons.includes(season)}
                 onChange={() => toggleFilter(selectedSeasons, setSelectedSeasons, season)}
               />
               <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${selectedSeasons.includes(season) ? 'bg-gold border-gold' : 'border-muted group-hover:border-foreground'}`}>
                 {selectedSeasons.includes(season) && <div className="w-2 h-2 bg-white rounded-sm" />}
               </div>
               <span className="text-sm tracking-wide">{season}</span>
             </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-serif text-lg mb-4">Tipo</h3>
        <div className="space-y-3">
          {types.map(type => (
             <label key={type} className="flex items-center space-x-3 cursor-pointer group">
               <input 
                 type="checkbox" 
                 className="hidden" 
                 checked={selectedTypes.includes(type)}
                 onChange={() => toggleFilter(selectedTypes, setSelectedTypes, type)}
               />
               <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${selectedTypes.includes(type) ? 'bg-gold border-gold' : 'border-muted group-hover:border-foreground'}`}>
                 {selectedTypes.includes(type) && <div className="w-2 h-2 bg-white rounded-sm" />}
               </div>
               <span className="text-sm tracking-wide">{type}</span>
             </label>
          ))}
        </div>
      </div>
      
      {(selectedBrands.length > 0 || selectedSeasons.length > 0 || selectedTypes.length > 0) && (
        <button 
          onClick={clearFilters}
          className="text-xs uppercase tracking-widest text-muted hover:text-foreground border-b border-transparent hover:border-foreground self-start transition-all"
        >
          Limpiar Filtros
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h1 className="font-serif text-4xl md:text-5xl mb-8">Nuestra Colección</h1>
          
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:max-w-md">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
              <input 
                type="text" 
                placeholder="Buscar perfumes, marcas, o notas..." 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-panel border border-border px-12 py-3 rounded-none focus:outline-none focus:border-gold transition-colors font-sans text-sm"
              />
            </div>
            
            <button 
              className="md:hidden flex items-center space-x-2 border border-border px-4 py-3 w-full justify-center"
              onClick={() => setShowMobileFilters(true)}
            >
              <Filter size={18} />
              <span className="text-sm tracking-widest uppercase">Filtros</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <aside className="hidden md:block w-64 flex-shrink-0">
            <FilterSidebar />
          </aside>

          <main className="flex-1">
            <div className="mb-6 flex justify-between items-end border-b border-border pb-4">
              <span className="text-sm tracking-widest uppercase text-muted">
                {filteredPerfumes.length} Resultados
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              <AnimatePresence>
                {filteredPerfumes.map((perfume) => (
                  <motion.div
                    key={perfume.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <PerfumeCard perfume={perfume} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
              
            {filteredPerfumes.length === 0 && (
              <div className="w-full py-24 text-center">
                <p className="text-muted tracking-wide text-lg font-serif">
                  No se encontraron fragancias con estos criterios.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>

      <AnimatePresence>
        {showMobileFilters && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
          >
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-background p-6 shadow-xl overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-serif text-xl">Filtros</h2>
                <button onClick={() => setShowMobileFilters(false)}>
                  <X size={24} className="text-muted hover:text-foreground" />
                </button>
              </div>
              <FilterSidebar />
              
              <div className="mt-12 sticky bottom-0 bg-background pt-4 pb-2">
                 <button 
                   onClick={() => setShowMobileFilters(false)}
                   className="w-full bg-foreground text-background py-4 tracking-widest uppercase text-sm"
                 >
                   Aplicar ({filteredPerfumes.length})
                 </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import { useEffect } from "react";
export default function SearchPage() {
  const [perfumes, setPerfumes] = useState<Perfume[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRealPerfumes().then(data => {
      setPerfumes(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="min-h-screen pt-32 pb-24 bg-background px-6 text-center text-muted">Cargando colección de joyas olfativas...</div>;
  }

  return (
    <Suspense fallback={<div className="min-h-screen pt-32 pb-24 bg-background px-6 text-center text-muted">Cargando filtros...</div>}>
      <SearchContent perfumes={perfumes} />
    </Suspense>
  );
}
