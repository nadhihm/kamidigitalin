'use client';

import React from 'react';
import { 
  Check, 
  MessageCircle, 
} from 'lucide-react';

const WA_NUMBER = "6282179746840";

export default function WebsitePage() {
  const packages = [
    {
      name: "Paket Domain .Edge",
      badge: "STARTER",
      price: "Rp 550.000",
      desc: "Sangat cocok untuk bisnis baru, UMKM, portofolio, dan landing page promosi instan.",
      popular: false,
      features: [
        "Gratis Domain .EDGE Resmi (1 Tahun)",
        "Gratis High-Speed Cloud Hosting",
        "Landing Page / Company Profile (1-3 Page)",
        "Desain Ultra-Responsif (Mobile & PC)",
        "Integrasi Tombol WhatsApp Direct",
        "Gratis Revisi Content 5x",
        "Pengerjaan Cepat 2 - 4 Hari Kerja"
      ]
    },
    {
      name: "Paket Domain .Com",
      badge: "PRO BUSINESS",
      price: "Rp 750.000",
      desc: "Pilihan terbaik untuk Perusahaan, Brand, Toko Online, dan Company Profile Profesional.",
      popular: true,
      features: [
        "Gratis Domain .COM Internasional (1 Thn)",
        "Premium Cloud Hosting Super Fast",
        "Multi-Page Structure (Hingga 5 Halaman)",
        "Desain Eksklusif Corporate Custom",
        "Integrasi SEO Google & Meta Indexing",
        "Integrasi Form Kontak & Google Maps",
        "Gratis Revisi 5x & Garansi Sistem",
        "Pengerjaan 2 - 5 Hari Kerja"
      ]
    },
    {
      name: "Custom Web Application",
      badge: "ENTERPRISE",
      price: "Rp 1.500.000+",
      desc: "Solusi khusus untuk aplikasi berbasis web, e-commerce kompleks, portal berita, atau SaaS.",
      popular: false,
      features: [
        "Full Custom Frontend & Modern Logic",
        "Dashboard Admin Management",
        "Integrasi API / Payment Gateway",
        "SSL Security Certificate Grade A",
        "High Performance Database Setup",
        "Maintenance Support 1 Bulan"
      ]
    }
  ];

  const getWaPackageUrl = (name: string, price: string) => {
    const text = `Halo KamiDigitalin, saya tertarik memesan paket website *${name}* dengan estimasi harga *${price}*. Mohon info kelanjutan brief & prosedurnya. Terima kasih!`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="py-16 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs uppercase tracking-wider">
            WEBSITE DEVELOPMENT
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900">
            Jasa Pembuatan Website Bisnis
          </h1>
          <p className="text-slate-600 text-base">
            Tingkatkan kredibilitas dan omset bisnis Anda dengan website berdesain futuristik, super cepat, dan siap pakai dalam 2 - 5 hari via WA (+62 821-7974-6840).
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`bg-white border rounded-3xl p-8 flex flex-col justify-between space-y-6 relative transition-all duration-200 ${
                pkg.popular
                  ? 'border-brand-500 shadow-xl shadow-brand-500/10 ring-2 ring-brand-500/20'
                  : 'border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-600 text-white font-extrabold text-[11px] uppercase tracking-wider shadow-md">
                  PALING POPULER
                </span>
              )}

              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-bold text-xs">
                    {pkg.badge}
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-slate-900">{pkg.name}</h3>
                  <div className="font-heading font-extrabold text-3xl text-brand-600">
                    {pkg.price} <span className="text-xs font-normal text-slate-400">/ paket</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">{pkg.desc}</p>

                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-brand-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={getWaPackageUrl(pkg.name, pkg.price)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition ${
                  pkg.popular
                    ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-brand-600/20'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                }`}
              >
                <MessageCircle className="w-4 h-4" /> Pesan {pkg.name}
              </a>
            </div>
          ))}
        </div>

        {/* Workflow Section */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10 space-y-8">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 font-bold text-xs uppercase">
              ALUR KERJA
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
              4 Langkah Pembuatan Website Mudahnya
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-700 font-extrabold text-sm flex items-center justify-center mx-auto">
                1
              </div>
              <h4 className="font-heading font-bold text-base text-slate-900">Konsultasi & Brief</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Diskusikan ide, materi teks, foto, dan referensi desain website yang diinginkan via WA (+62 821-7974-6840).</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-extrabold text-sm flex items-center justify-center mx-auto">
                2
              </div>
              <h4 className="font-heading font-bold text-base text-slate-900">Proses Desain</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Tim developer KamiDigitalin akan menyusun tata letak visual, konten, & fungsionalitas website.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 font-extrabold text-sm flex items-center justify-center mx-auto">
                3
              </div>
              <h4 className="font-heading font-bold text-base text-slate-900">Review & Revisi</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Website diuji dan Anda diberikan kesempatan 5x revisi untuk memastikan hasil sempurna.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-extrabold text-sm flex items-center justify-center mx-auto">
                4
              </div>
              <h4 className="font-heading font-bold text-base text-slate-900">Peluncuran (Launch)</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Website resmi dipublish dengan domain pilihan Anda dan siap dipromosikan ke pelanggan!</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
