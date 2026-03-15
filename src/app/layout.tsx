import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";
import CompareBar from "@/components/compare-bar";
import { Providers } from "@/components/providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Etherial | Fragancias de Lujo",
    template: "%s | Etherial",
  },
  description: "Descubre las fragancias más exclusivas del mundo. Catálogo curado de perfumes icónicos de Dior, Chanel, Tom Ford, Creed y más.",
  keywords: ["perfumes", "fragancias", "lujo", "Dior", "Chanel", "Tom Ford", "Creed", "reseñas perfumes"],
  openGraph: {
    title: "Etherial | Fragancias de Lujo",
    description: "Descubre las fragancias más exclusivas del mundo.",
    type: "website",
    locale: "es_MX",
    siteName: "Etherial",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <Providers>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
          <CompareBar />
        </Providers>
      </body>
    </html>
  );
}
