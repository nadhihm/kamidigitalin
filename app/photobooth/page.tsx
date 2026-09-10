'use client';

import React from 'react';
import { 
  Check, 
  X, 
  MessageCircle, 
  Camera, 
  Sparkles, 
  Zap, 
  Instagram, 
  Clock, 
  Printer, 
  Image as ImageIcon 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const WA_NUMBER = "6282179746840";
const IG_HANDLE = "@kamiphotoin";

export default function PhotoboothPage() {
  const { lang, t } = useLanguage();

  const packages = [
    {
      name: "BASIC",
      badge: "HEMAT",
      originalPrice: "Rp 1.000.000",
      promoPrice: "Rp 500.000",
      priceTag: "500K",
      desc: "Solusi ekonomis dokumentasi digital softfile untuk event, ulang tahun & gathering.",
      bestSeller: false,
      features: [
        { text: "Unlimited Soft File", included: true },
        { text: "Unlimited Hard File (Cetak)", included: false },
        { text: "Standby 3 Jam Operator", included: true },
        { text: "3 Template Layout Custom", included: true },
        { text: "Backdrop & Studio Lighting Pro", included: true },
        { text: "Fun Props & Aksesoris Foto", included: true },
        { text: "Kamera Sony ZVE 10 High Quality", included: true },
        { text: "iPad Gen 11 A16 Live Preview", included: true },
        { text: "Printer L8050 6 Color Photo", included: false }
      ]
    },
    {
      name: "STANDAR",
      badge: "RECOMMENDED",
      originalPrice: "Rp 1.500.000",
      promoPrice: "Rp 1.000.000",
      priceTag: "1 JT",
      desc: "Paket paling diminati! Lengkap dengan cetak fisik foto langsung jadi (Unlimited Hard File).",
      bestSeller: true,
      features: [
        { text: "Unlimited Soft File", included: true },
        { text: "Unlimited Hard File (Cetak)", included: true },
        { text: "Standby 2 Jam Operator", included: true },
        { text: "3 Template Layout Custom", included: true },
        { text: "Backdrop & Studio Lighting Pro", included: true },
        { text: "Fun Props & Aksesoris Foto", included: true },
        { text: "Kamera Sony ZVE 10 High Quality", included: true },
        { text: "iPad Gen 11 A16 Live Preview", included: true },
        { text: "Printer L8050 6 Color Photo", included: true }
      ]
    },
    {
      name: "PREMIUM",
      badge: "ULTIMATE",
      originalPrice: "Rp 2.000.000",
      promoPrice: "Rp 1.500.000",
      priceTag: "1,5 JT",
      desc: "Paket durasi ekstra 4 Jam + 5 Template Custom untuk pernikahan, wisuda & pesta besar.",
      bestSeller: false,
      features: [
        { text: "Unlimited Soft File", included: true },
        { text: "Unlimited Hard File (Cetak)", included: true },
        { text: "Standby 4 Jam Operator", included: true },
        { text: "5 Template Layout Custom", included: true },
        { text: "Backdrop & Studio Lighting Pro", included: true },
        { text: "Fun Props & Aksesoris Foto", included: true },
        { text: "Kamera Sony ZVE 10 High Quality", included: true },
        { text: "iPad Gen 11 A16 Live Preview", included: true },
        { text: "Printer L8050 6 Color Photo", included: true }
      ]
    }
  ];

  const getWaPhotoboothUrl = (packageName: string, packagePrice: string) => {
    const text = lang === 'en'
      ? `Hello KamiDigitalin / KamiPhotoin, I want to inquire about renting *Photobooth Package ${packageName}* (${packagePrice}). Please check date availability & procedure.`
      : lang === 'zh'
      ? `您好 KamiDigitalin / KamiPhotoin，我想咨询租赁 *Photobooth ${packageName} 套餐* (${packagePrice})。请查询档期安排与流程。`
      : `Halo KamiDigitalin / KamiPhotoin, saya ingin tanya & pesan Sewa Photobooth Paket *${packageName}* (Harga promo *${packagePrice}*). Mohon info ketersediaan tanggal & prosedurnya. Terima kasih!`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="pt-4 sm:pt-8 pb-16 space-y-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-purple-100 text-purple-700 font-bold text-[11px] uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" /> PHOTOBOOTH RENTAL BY @KAMIPHOTOIN
          </div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900">
            {t.photo_hero_title}
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            {t.photo_hero_subtitle}
          </p>

          <div className="flex items-center justify-center gap-4 pt-2 text-xs">
            <a 
              href="https://www.instagram.com/kamiphotoin/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 font-bold text-rose-600 hover:text-rose-700 transition"
            >
              <Instagram className="w-4 h-4 text-rose-500" /> {IG_HANDLE}
            </a>
            <span className="text-slate-300">•</span>
            <span className="font-bold text-slate-700 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-500" /> Cetak Instant L8050
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`bg-white border rounded-2xl p-6 flex flex-col justify-between space-y-5 relative transition-all duration-200 ${
                pkg.bestSeller
                  ? 'border-indigo-600 shadow-xl shadow-indigo-600/10 ring-2 ring-indigo-600/20 scale-[1.02]'
                  : 'border-slate-200 shadow-xs hover:shadow-md'
              }`}
            >
              {pkg.bestSeller && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-indigo-600 text-white font-extrabold text-[10px] uppercase tracking-wider shadow-xs flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> BEST SELLER
                </span>
              )}

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 uppercase">
                    {pkg.badge}
                  </span>
                  <span className="line-through text-xs text-slate-400 font-semibold">{pkg.originalPrice}</span>
                </div>

                <div>
                  <h3 className="font-heading font-extrabold text-xl text-slate-900">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-heading font-extrabold text-3xl text-indigo-600">{pkg.promoPrice}</span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">PROMO</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">{pkg.desc}</p>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-100">
                  {pkg.features.map((feat, i) => (
                    <div key={i} className={`flex items-start gap-2 text-xs ${feat.included ? 'text-slate-700 font-medium' : 'text-slate-400 line-through opacity-70'}`}>
                      {feat.included ? (
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      )}
                      <span className="leading-snug">{feat.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={getWaPhotoboothUrl(pkg.name, pkg.promoPrice)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition ${
                  pkg.bestSeller
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                }`}
              >
                <MessageCircle className="w-4 h-4" /> Pesan Photobooth ({pkg.name})
              </a>
            </div>
          ))}
        </div>

        {/* Feature Highlights Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-lg">
          <div className="space-y-1">
            <Camera className="w-6 h-6 text-indigo-400 mx-auto" />
            <div className="font-bold text-sm">Sony ZVE-10</div>
            <div className="text-[11px] text-slate-400">Kamera Mirrorless Pro 4K</div>
          </div>
          <div className="space-y-1">
            <Printer className="w-6 h-6 text-emerald-400 mx-auto" />
            <div className="font-bold text-sm">L8050 6 Color</div>
            <div className="text-[11px] text-slate-400">Cetak Foto Kilat & Jernih</div>
          </div>
          <div className="space-y-1">
            <ImageIcon className="w-6 h-6 text-amber-400 mx-auto" />
            <div className="font-bold text-sm">Template Custom</div>
            <div className="text-[11px] text-slate-400">Desain Frame Foto Sesuai Tema</div>
          </div>
          <div className="space-y-1">
            <Clock className="w-6 h-6 text-rose-400 mx-auto" />
            <div className="font-bold text-sm">Operator Standby</div>
            <div className="text-[11px] text-slate-400">Tim Siap Mendampingi Event</div>
          </div>
        </div>

      </div>
    </div>
  );
}
