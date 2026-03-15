"use client";

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";
import { Perfume } from "@/lib/mock-data";
import { getRealPerfumes } from "@/lib/api";

interface WishlistContextType {
  wishlist: Set<string>;
  addToWishlist: (id: string) => void;
  removeFromWishlist: (id: string) => void;
  toggleWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  wishlistCount: number;
  getWishlistPerfumes: () => Promise<Perfume[]>;
}

const WishlistContext = createContext<WishlistContextType>({
  wishlist: new Set(),
  addToWishlist: () => {},
  removeFromWishlist: () => {},
  toggleWishlist: () => {},
  isInWishlist: () => false,
  wishlistCount: 0,
  getWishlistPerfumes: async () => [],
});

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("etherial-wishlist");
      if (stored) {
        setWishlist(new Set(JSON.parse(stored)));
      }
    } catch {}
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("etherial-wishlist", JSON.stringify([...wishlist]));
  }, [wishlist, mounted]);

  const addToWishlist = useCallback((id: string) => {
    setWishlist((prev) => new Set([...prev, id]));
  }, []);

  const removeFromWishlist = useCallback((id: string) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }, []);

  const toggleWishlist = useCallback((id: string) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const isInWishlist = useCallback((id: string) => wishlist.has(id), [wishlist]);

  const getWishlistPerfumes = useCallback(async () => {
    const all = await getRealPerfumes();
    return all.filter((p) => wishlist.has(p.id));
  }, [wishlist]);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isInWishlist,
        wishlistCount: wishlist.size,
        getWishlistPerfumes,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
