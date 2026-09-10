'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  ArrowRight, 
  Code, 
  GraduationCap, 
  Layers, 
  CheckCircle2, 
  Star, 
  MessageCircle, 
  ChevronDown, 
  Zap,
  BookOpenCheck,
  Sparkles
} from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';

const WA_NUMBER = "6282179746840";

export default function Home() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const getWaProductUrl = (name: string, price: string) => {
    const text = `Halo KamiDigitalin, saya ingin pesan *${name}* dengan harga *${price}*. Mohon info prosedur pembayaran & aktivasinya.`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const getWaAssignmentUrl = () => {
    const text = `Halo KamiDigitalin, saya ingin konsultasi *Asistensi Tugas & Riset Akademik* (Bantuan Tugas Kuliah / Essay / Olah Data / Turnitin mulai Rp 15.000~). Mohon info prosedur & alurnya. Terima kasih!`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const getWaWebUrl = () => {
    const text = `Halo KamiDigitalin, saya ingin konsultasi mengenai *Pembuatan Website & Landing Page Bisnis*. Mohon info paket & ketentuannya.`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const popularProducts = [
    {
      name: "Google Drive 5TB + Gemini AI",
      brand: "Google Workspace",
      desc: "Penyimpanan super besar 5TB terintegrasi langsung dengan asisten kecerdasan buatan Google Gemini AI.",
      priceYear: "Rp 272.000",
      priceLifetime: "Rp 322.000",
      logo: "/logos/google-drive.png",
      features: ["Storage Raksasa 5TB", "Integrasi Gemini AI"]
    },
    {
      name: "Canva Pro",
      brand: "Canva Official",
      desc: "Akses 600.000+ template premium, Magic Studio AI, Brand Kit, dan pemotong background otomatis.",
      priceYear: "Rp 52.000",
      priceLifetime: "Rp 72.000",
      logo: "/logos/canva.png",
      features: ["Brand Kit & Magic Resize", "Akses Fitur Premium"]
    },
    {
      name: "CapCut Pro",
      brand: "ByteDance Creator Tools",
      desc: "Aplikasi video editor andalan kreator dengan Auto Subtitle Indonesia presisi tinggi & efek Pro.",
      priceYear: "Rp 292.000",
      priceLifetime: "Rp 392.000",
      logo: "/logos/capcut.png",
      features: ["Export 4K tanpa watermark", "Multi-Device Sync"]
    },
    {
      name: "ChatGPT Pro Private",
      brand: "OpenAI Official",
      desc: "Akses penuh kecerdasan buatan GPT-4o private tanpa batas dengan respon cepat & prioritas.",
      priceYear: "Rp 422.000",
      priceLifetime: "Rp 542.000",
      logo: "/logos/chatgpt.png",
      features: ["Akses GPT-4o Tercepat", "Akun Private Aman"]
    }
  ];

  const faqs = [
    {
      q: "Bagaimana alur transaksi dan pemesanan di KamiDigitalin?",
      a: "Pilihlah lisensi produk atau paket layanan yang Anda inginkan, klik tombol 'Pesan Instan WA', dan Anda akan otomatis terhubung ke admin WhatsApp (+62 821-7974-6840) dengan draf pesanan terformat."
    },
    {
      q: "Bagaimana sistem layanan Asistensi Tugas & Riset Akademik di sini?",
      a: "Kami menyediakan pendampingan dan asistensi pengerjaan tugas kuliah, essay, makalah, skripsi/tesis, analisis data statistik (SPSS/PLS), serta pengecekan Turnitin secara edukatif, rahasia, & diproses kilat dengan harga mulai Rp 20.000~."
    },
    {
      q: "Berapa lama waktu yang dibutuhkan untuk aktivasi lisensi produk?",
      a: "Proses verifikasi dan pemprosesan lisensi sangat cepat, rata-rata hanya memakan waktu 5 hingga 10 menit setelah konfirmasi pembayaran diterima."
    },
    {
      q: "Apakah seluruh lisensi akun & layanan di KamiDigitalin bergaransi?",
      a: "Ya, 100% Bergaransi Resmi selama masa langganan aktif. Tim customer care kami siap memberikan bantuan atau penggantian akun jika ada kendala teknis."
    },
    {
      q: "Berapa lama estimasi pengerjaan pembuatan website bisnis?",
      a: "Pengerjaan website Landing Page maupun Company Profile profesional berkisar antara 2 hingga 5 hari kerja setelah materi konten dan referensi awal disepakati."
    }
  ];

  const waConsultUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo KamiDigitalin, saya ingin konsultasi mengenai pemesanan layanan digital & aplikasi premium.")}`;

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/80 via-sky-50/40 to-white pt-6 sm:pt-12 pb-12 sm:pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100/80 border border-brand-200 text-brand-700 font-bold text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                {t.badge_official}
              </div>

              <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-slate-900 leading-[1.15] tracking-tight">
                {t.hero_title_1}<span className="bg-gradient-text">{t.hero_title_2}</span>{t.hero_title_3}
              </h1>

              <p className="text-slate-600 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t.hero_subtitle}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
                <Link
                  href="/produk"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md shadow-brand-600/20 transition-all"
                >
                  <Layers className="w-4 h-4" /> {t.btn_catalog}
                </Link>
                <a
                  href={waConsultUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs border border-slate-200 shadow-xs transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" /> {t.btn_consult_wa}
                </a>
              </div>

              {/* Stats Bar */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
                <div>
                  <div className="font-heading font-extrabold text-xl sm:text-2xl text-brand-600">100+</div>
                  <div className="text-[11px] font-semibold text-slate-500 mt-0.5">{t.stat_clients}</div>
                </div>
                <div>
                  <div className="font-heading font-extrabold text-xl sm:text-2xl text-brand-600">100%</div>
                  <div className="text-[11px] font-semibold text-slate-500 mt-0.5">{t.stat_guarantee}</div>
                </div>
                <div>
                  <div className="font-heading font-extrabold text-xl sm:text-2xl text-brand-600">5-10 mnt</div>
                  <div className="text-[11px] font-semibold text-slate-500 mt-0.5">{t.stat_speed}</div>
                </div>
              </div>
            </div>

            {/* Right Card Stack - 3 Main Service Categories Ordered by Gen-Z Interest */}
            <div className="lg:col-span-5 relative">
              <div className="relative bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 pb-10 shadow-xl shadow-brand-600/10 space-y-3">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-extrabold">
                    <Zap className="w-3 h-3" /> {t.card_header_genz}
                  </span>
                </div>

                {/* Urutan 1: Aplikasi Premium & Tools AI */}
                <Link 
                  href="/produk"
                  className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-2 hover:border-brand-300 hover:bg-brand-50/40 transition group cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-600 border border-brand-200 shadow-xs flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1 flex-wrap">
                        <h4 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-brand-600 transition truncate">{t.row1_title}</h4>
                        <span className="bg-brand-100 text-brand-700 text-[9px] font-extrabold px-1.5 py-0.2 rounded shrink-0">Top 1</span>
                      </div>
                      <p className="text-[11px] text-slate-500 truncate">{t.row1_desc}</p>
                    </div>
                  </div>
                  <span className="font-extrabold text-xs sm:text-sm text-brand-600 shrink-0 ml-1">Rp 52.000~</span>
                </Link>

                {/* Urutan 2: Asistensi Tugas & Riset Akademik */}
                <Link 
                  href="/akademik"
                  className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-2 hover:border-amber-300 hover:bg-amber-50/40 transition group cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 border border-amber-200 shadow-xs flex items-center justify-center shrink-0">
                      <BookOpenCheck className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1 flex-wrap">
                        <h4 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-amber-600 transition truncate">{t.row2_title}</h4>
                        <span className="bg-amber-100 text-amber-800 text-[9px] font-extrabold px-1.5 py-0.2 rounded shrink-0">Proses Kilat</span>
                      </div>
                      <p className="text-[11px] text-slate-500 truncate">{t.row2_desc}</p>
                    </div>
                  </div>
                  <span className="font-extrabold text-xs sm:text-sm text-amber-600 shrink-0 ml-1">Rp 20.000~</span>
                </Link>

                {/* Urutan 3: Jasa Website & Landing Page */}
                <Link 
                  href="/website"
                  className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-2 hover:border-indigo-300 hover:bg-indigo-50/40 transition group cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 border border-indigo-200 shadow-xs flex items-center justify-center shrink-0">
                      <Code className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-indigo-600 transition truncate">{t.row3_title}</h4>
                      <p className="text-[11px] text-slate-500 truncate">{t.row3_desc}</p>
                    </div>
                  </div>
                  <span className="font-extrabold text-xs sm:text-sm text-indigo-600 shrink-0 ml-1">Rp 550.000~</span>
                </Link>

                {/* Floating Rating Badge */}
                <div className="absolute -bottom-4 left-3 sm:-left-3 bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-lg flex items-center gap-2.5 z-20">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-500 flex items-center justify-center font-bold shrink-0">
                    <Star className="w-4 h-4 fill-amber-400" />
                  </div>
                  <div>
                    <div className="font-extrabold text-xs text-slate-900">5.0 / 5.0 Rating</div>
                    <div className="text-[10px] text-slate-500 leading-tight">{t.rating_label}</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3 Pillar Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 font-bold text-xs uppercase tracking-wider">
            {t.pillars_badge}
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
            {t.pillars_title}
          </h2>
          <p className="text-slate-600 text-base">
            {t.pillars_desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 card-hover-effect space-y-6 flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 border border-brand-100 flex items-center justify-center">
              <Layers className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <h3 className="font-heading font-bold text-xl text-slate-900">{t.pillar1_title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t.pillar1_desc}
              </p>
            </div>
            <ul className="space-y-2 text-xs text-slate-600 pt-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" /> ChatGPT Plus, Google Drive 5TB, Canva Pro</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" /> Zoom Pro, CapCut Pro, Perplexity AI</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" /> {t.stat_speed}</li>
            </ul>
            <Link
              href="/produk"
              className="mt-auto inline-flex items-center gap-2 text-brand-600 font-bold text-sm hover:gap-3 transition-all pt-4"
            >
              {t.popular_link} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 card-hover-effect space-y-6 flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center">
              <BookOpenCheck className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <h3 className="font-heading font-bold text-xl text-slate-900">{t.pillar2_title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t.pillar2_desc}
              </p>
            </div>
            <ul className="space-y-2 text-xs text-slate-600 pt-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" /> Asistensi Tugas Kuliah, Essay & Makalah</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" /> Olah Data SPSS, SmartPLS, SEM, Python</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" /> Pengecekan Turnitin No Repository & Parafrase</li>
            </ul>
            <Link
              href="/akademik"
              className="mt-auto inline-flex items-center gap-2 text-amber-600 font-bold text-sm hover:gap-3 transition-all pt-4"
            >
              {t.nav_academic} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 card-hover-effect space-y-6 flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center">
              <Code className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <h3 className="font-heading font-bold text-xl text-slate-900">{t.pillar3_title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t.pillar3_desc}
              </p>
            </div>
            <ul className="space-y-2 text-xs text-slate-600 pt-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" /> Free Domain .COM / .EDGE & Hosting Cloud</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" /> Pengerjaan Terukur 2 - 5 Hari Kerja</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" /> Integrasi WhatsApp Direct Order & Meta SEO</li>
            </ul>
            <Link
              href="/website"
              className="mt-auto inline-flex items-center gap-2 text-indigo-600 font-bold text-sm hover:gap-3 transition-all pt-4"
            >
              {t.nav_web} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Popular Products with Enlarged Real Logos */}
      <section className="bg-slate-50 border-y border-slate-200/80 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 font-bold text-xs uppercase">
                {t.popular_badge}
              </span>
              <h2 className="font-heading font-extrabold text-3xl text-slate-900">
                {t.popular_title}
              </h2>
            </div>
            <Link
              href="/produk"
              className="inline-flex items-center gap-2 text-brand-600 font-bold text-sm hover:underline"
            >
              {t.popular_link} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((p, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-white p-2.5 border border-slate-200 shadow-sm flex items-center justify-center">
                    <Image src={p.logo} alt={`${p.name} Logo`} width={48} height={48} className="object-contain" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-slate-900">{p.name}</h4>
                    <span className="text-xs font-medium text-slate-400">{p.brand}</span>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{p.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                    <div className="py-1 px-1">
                      <span className="block text-[9px] uppercase font-bold text-slate-400">12 Bulan</span>
                      <span className="text-xs font-extrabold text-blue-600">{p.priceYear}</span>
                    </div>
                    <div className="py-1 px-1 border-l border-slate-200">
                      <span className="block text-[9px] uppercase font-bold text-slate-400">Lifetime</span>
                      <span className="text-xs font-extrabold text-amber-600">{p.priceLifetime}</span>
                    </div>
                  </div>

                  <Link
                    href="/produk"
                    className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> Pilih Paket & Order
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials - Diverse Authentic Voices & Tones */}
      <section id="testimoni" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-mt-24">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 font-bold text-xs uppercase">
            {t.testimonials_badge}
          </span>
          <h2 className="font-heading font-extrabold text-3xl text-slate-900">
            {t.testimonials_title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Review 1: Gen-Z Excited / Gaul */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm hover:shadow-md transition">
            <div className="flex gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              "anjirrr riel kilat bgt!! ganyangka jam 1 pagi kmrn pesen chatgpt plus 10mnt lsg aktif dongg wkwk mantap min thank u!! 🔥🔥"
            </p>
            <div className="pt-2 flex items-center gap-3 border-t border-slate-100">
              <div className="w-9 h-9 rounded-full bg-brand-100 text-brand-700 font-bold flex items-center justify-center text-xs">
                R
              </div>
              <div>
                <div className="font-bold text-xs text-slate-900">Rian</div>
                <div className="text-[11px] text-slate-400">Gen-Z Content Creator</div>
              </div>
            </div>
          </div>

          {/* Review 2: Bahasa Sunda Casual */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm hover:shadow-md transition">
            <div className="flex gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              "Nuhun pisan kang admin! Asistensi olah data SPSS & Turnitin-nya rapih bener, dapet penjelasan komplit pas bimbingan dosen hhe 🙏"
            </p>
            <div className="pt-2 flex items-center gap-3 border-t border-slate-100">
              <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center text-xs">
                F
              </div>
              <div>
                <div className="font-bold text-xs text-slate-900">Fajar</div>
                <div className="text-[11px] text-slate-400">Mahasiswa S1 Bandung</div>
              </div>
            </div>
          </div>

          {/* Review 3: Bahasa Jawa Satset */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm hover:shadow-md transition">
            <div className="flex gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              "Mantep tenan mas e. Pengerjaan website toko ku satset 3 dina wis dadi, tampilane kece parah. Rekomen lah pokok e 👍"
            </p>
            <div className="pt-2 flex items-center gap-3 border-t border-slate-100">
              <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">
                D
              </div>
              <div>
                <div className="font-bold text-xs text-slate-900">Dwi P.</div>
                <div className="text-[11px] text-slate-400">Owner Brand Local</div>
              </div>
            </div>
          </div>

          {/* Review 4: Mahasiswa Lega (Turnitin) */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm hover:shadow-md transition">
            <div className="flex gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              "Sempet degdegan plagiasi Turnitin 35%, dibantu asistensi bentar langsung turun jadi 12%. Berkah selalu min 🙏✨"
            </p>
            <div className="pt-2 flex items-center gap-3 border-t border-slate-100">
              <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-xs">
                A
              </div>
              <div>
                <div className="font-bold text-xs text-slate-900">Anisa</div>
                <div className="text-[11px] text-slate-400">Mahasiswi Akhir</div>
              </div>
            </div>
          </div>

          {/* Review 5: Singkat & Kaku / Formal */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm hover:shadow-md transition">
            <div className="flex gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              "Layanan cepat dan komunikatif. Akun garansi resmi aktif sesuai deskripsi. Terima kasih."
            </p>
            <div className="pt-2 flex items-center gap-3 border-t border-slate-100">
              <div className="w-9 h-9 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center text-xs">
                B
              </div>
              <div>
                <div className="font-bold text-xs text-slate-900">Bambang H.</div>
                <div className="text-[11px] text-slate-400">Pengguna Terverifikasi</div>
              </div>
            </div>
          </div>

          {/* Review 6: Bahasa Melayu / Medan Casual */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm hover:shadow-md transition">
            <div className="flex gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              "Wak, mantap kali fast respon adminnya. Tengah malam dibantu aktivasi CapCut Pro, lancar jaya buat ngedit video."
            </p>
            <div className="pt-2 flex items-center gap-3 border-t border-slate-100">
              <div className="w-9 h-9 rounded-full bg-rose-100 text-rose-700 font-bold flex items-center justify-center text-xs">
                Z
              </div>
              <div>
                <div className="font-bold text-xs text-slate-900">Zufri</div>
                <div className="text-[11px] text-slate-400">Kreator Video</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="faq">
        <div className="text-center space-y-2">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-800 font-bold text-xs uppercase">
            {t.faq_badge}
          </span>
          <h2 className="font-heading font-extrabold text-3xl text-slate-900">
            {t.faq_title}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left font-heading font-bold text-base text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50 transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-brand-600 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section id="kontak" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-gradient-to-r from-brand-700 via-brand-600 to-indigo-700 rounded-3xl p-10 sm:p-14 text-center text-white space-y-6 shadow-2xl shadow-brand-600/20">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl">
            {t.cta_title}
          </h2>
          <p className="text-brand-100 text-base max-w-2xl mx-auto">
            {t.cta_desc}
          </p>
          <div className="pt-2">
            <a
              href={waConsultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-brand-700 font-extrabold text-base shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5 text-emerald-600" /> {t.cta_btn}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
