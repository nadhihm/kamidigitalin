import type { Metadata } from "next";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

export const metadata: Metadata = {
  title: "KamiDigitalin - Solusi Digital Terpadu untuk Kebutuhan Anda",
  description: "KamiDigitalin adalah platform digital terpercaya di Indonesia: penyedia bantuan aktivasi produk digital legal, bimbingan riset & metodologi akademik, serta pembuatan website modern.",
  keywords: ["KamiDigitalin", "produk digital", "chatgpt plus", "jasa pembuatan website", "bimbingan skripsi", "olah data spss", "smartpls"],
  authors: [{ name: "KamiDigitalin" }],
  openGraph: {
    title: "KamiDigitalin - Solusi Digital Terpadu",
    description: "Platform terpadu produk digital legal, bimbingan akademik & olah data, serta jasa website profesional.",
    url: "https://kamidigitalin.com/",
    siteName: "KamiDigitalin",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-white text-slate-900 antialiased font-sans selection:bg-brand-500 selection:text-white">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
