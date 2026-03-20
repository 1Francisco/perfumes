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
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Etherial",
  },
  formatDetection: {
    telephone: false,
  },
};

import Script from "next/script";
import PwaRegister from "@/components/pwa-register";

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
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W3SLGQJ2');
          `}
        </Script>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-W3SLGQJ2"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }} 
          />
        </noscript>
        
        <Providers>
          <PwaRegister />
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
