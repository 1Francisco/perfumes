"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@/context/theme-context";
import { WishlistProvider } from "@/context/wishlist-context";
import { CompareProvider } from "@/context/compare-context";
import { LanguageProvider } from "@/context/language-context";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <WishlistProvider>
          <CompareProvider>
            {children}
          </CompareProvider>
        </WishlistProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
