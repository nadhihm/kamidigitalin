'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Search, 
  Bot, 
  Cloud,
  Film, 
  Tv, 
  Video, 
  Play, 
  FileText, 
  Check, 
  MessageCircle,
  Sparkles,
  Zap
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const WA_NUMBER = "6282179746840";

interface Product {
  id: string;
  num: number;
  name: string;
  brand: string;
  desc: string;
  priceYear: string;
  priceLifetime: string;
  category: 'ai' | 'design' | 'productivity' | 'entertainment';
  logo?: string;
  icon?: any;
  features: string[];
  bestSeller?: boolean;
}

export default function ProductsPage() {
  const { t } = useLanguage();
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<string>('all');
  const [durations, setDurations] = useState<Record<string, 'year' | 'lifetime'>>({});
  const [globalDuration, setGlobalDuration] = useState<'all' | 'year' | 'lifetime'>('all');

  const products: Product[] = [
    {
      id: 'gdrive-gemini',
      num: 1,
      name: 'Google Drive 5TB + Gemini AI',
      brand: 'Google Workspace',
      desc: 'Penyimpanan super besar 5TB terintegrasi dengan Gemini AI, Docs, Sheets, & Slides.',
      priceYear: 'Rp 272.000',
      priceLifetime: 'Rp 322.000',
      category: 'productivity',
      logo: '/logos/google-drive.png',
      features: [
        'Penyimpanan super besar 5TB',
        'Integrasi dengan Gemini AI',
        'Akses Docs, Sheets, Slides, dll',
        'Aman, stabil, multi-device'
      ],
      bestSeller: true
    },
    {
      id: 'icloud-2tb',
      num: 2,
      name: 'iCloud 2TB',
      brand: 'Apple Official',
      desc: 'Sinkronisasi cloud 2TB otomatis untuk seluruh perangkat Apple Anda secara aman.',
      priceYear: 'Rp 412.000',
      priceLifetime: 'Rp 502.000',
      category: 'productivity',
      icon: Cloud,
      features: [
        'Penyimpanan iCloud 2TB',
        'Sinkron semua perangkat Apple',
        'Backup foto, video, file otomatis',
        'Privasi tinggi & aman'
      ],
      bestSeller: true
    },
    {
      id: 'canva-pro',
      num: 3,
      name: 'Canva Pro',
      brand: 'Canva Official',
      desc: 'Akses ribuan template premium, Magic Studio AI, Brand Kit, dan Magic Remover.',
      priceYear: 'Rp 52.000',
      priceLifetime: 'Rp 72.000',
      category: 'design',
      logo: '/logos/canva.png',
      features: [
        'Akses semua fitur premium',
        'Ribuan template, elemen, font',
        'Hapus background, brand kit',
        'Cocok untuk kerja, sekolah, bisnis'
      ],
      bestSeller: true
    },
    {
      id: 'netflix-1-device',
      num: 4,
      name: 'Netflix (1 Device)',
      brand: 'Netflix Official',
      desc: 'Streaming film & serial TV favorit kualitas 4K UHD khusus 1 perangkat pribadi.',
      priceYear: 'Rp 272.000',
      priceLifetime: 'Rp 355.000',
      category: 'entertainment',
      icon: Film,
      features: [
        'Nonton film & serial tanpa batas',
        'Kualitas HD / Full HD / 4K',
        'Akun stabil & bergaransi',
        'Cocok untuk penggunaan pribadi'
      ]
    },
    {
      id: 'netflix-2-devices',
      num: 5,
      name: 'Netflix (2 Devices)',
      brand: 'Netflix Official',
      desc: 'Streaming film 4K UHD di 2 perangkat bersamaan, cocok untuk keluarga atau teman.',
      priceYear: 'Rp 322.000',
      priceLifetime: 'Rp 432.000',
      category: 'entertainment',
      icon: Tv,
      features: [
        'Akses premium di 2 perangkat',
        'Kualitas HD / Full HD / 4K',
        'Akun stabil & bergaransi',
        'Cocok untuk keluarga / berbagi'
      ]
    },
    {
      id: 'disney-plus',
      num: 6,
      name: 'Disney+',
      brand: 'Disney Official',
      desc: 'Ribuan tayangan eksklusif Marvel, Star Wars, Pixar, Disney, & National Geographic 4K.',
      priceYear: 'Rp 322.000',
      priceLifetime: 'Rp 412.000',
      category: 'entertainment',
      icon: Sparkles,
      features: [
        'Ribuan film & serial Disney & Marvel',
        'Kualitas hingga 4K Ultra HD',
        'Bisa di semua jenis perangkat',
        'Tayangan eksklusif & update cepat'
      ]
    },
    {
      id: 'youtube-premium',
      num: 7,
      name: 'YouTube Premium',
      brand: 'Google YouTube',
      desc: 'Nonton video bebas iklan, fitur background play di HP, dan akses YouTube Music Pro.',
      priceYear: 'Rp 222.000',
      priceLifetime: 'Rp 362.000',
      category: 'entertainment',
      icon: Play,
      features: [
        'Tanpa iklan + YouTube Music',
        'Bisa offline & background play',
        'Kualitas video terbaik',
        'Akses di semua perangkat'
      ]
    },
    {
      id: 'office-365',
      num: 8,
      name: 'Microsoft Office 365',
      brand: 'Microsoft Official',
      desc: 'Akses resmi Word, Excel, PowerPoint, Outlook + 1TB cloud storage OneDrive.',
      priceYear: 'Rp 302.000',
      priceLifetime: 'Rp 382.000',
      category: 'productivity',
      icon: FileText,
      features: [
        'Word, Excel, PowerPoint, Outlook',
        '1TB OneDrive cloud storage',
        'Selalu update ke versi terbaru',
        'Bisa di PC, Laptop, Mac, Tablet, HP'
      ]
    },
    {
      id: 'chatgpt-pro-private',
      num: 9,
      name: 'ChatGPT Pro Private',
      brand: 'OpenAI Private Account',
      desc: 'Akses penuh kecerdasan GPT-4o private tanpa batas dengan respon paling cepat & aman.',
      priceYear: 'Rp 422.000',
      priceLifetime: 'Rp 542.000',
      category: 'ai',
      logo: '/logos/chatgpt.png',
      features: [
        'Akses GPT-4o (versi terbaru)',
        'Respons lebih cepat & prioritas',
        'Cocok untuk kerja, belajar, riset',
        'Akun private, lebih aman'
      ]
    },
    {
      id: 'chatgpt-plus-semi',
      num: 10,
      name: 'ChatGPT Plus Semi Private',
      brand: 'OpenAI Semi Private',
      desc: 'Akses stabil fitur GPT-4o Plus dengan sistem akun terkelola semi-private.',
      priceYear: 'Rp 322.000',
      priceLifetime: 'Rp 442.000',
      category: 'ai',
      logo: '/logos/chatgpt.png',
      features: [
        'Akses GPT-4o (Plus)',
        'Fitur lengkap & stabil 24/7',
        'Cocok untuk harian, kerja & belajar',
        'Akun semi private, aman'
      ]
    },
    {
      id: 'chatgpt-go-semi',
      num: 11,
      name: 'ChatGPT Go Semi Private',
      brand: 'OpenAI Semi Private',
      desc: 'Solusi paling hemat untuk menikmati keunggulan AI ChatGPT untuk harian & tugas.',
      priceYear: 'Rp 282.000',
      priceLifetime: 'Rp 422.000',
      category: 'ai',
      logo: '/logos/chatgpt.png',
      features: [
        'Solusi hemat dengan fitur AI',
        'Cocok untuk kebutuhan ringan',
        'Tetap cepat & stabil',
        'Akun semi private, aman'
      ]
    },
    {
      id: 'capcut-pro',
      num: 12,
      name: 'CapCut Pro',
      brand: 'ByteDance Creator Tools',
      desc: 'Editor video terlengkap untuk konten kreator dengan auto subtitle & efek pro.',
      priceYear: 'Rp 292.000',
      priceLifetime: 'Rp 392.000',
      category: 'design',
      logo: '/logos/capcut.png',
      features: [
        'Akses semua fitur CapCut Pro',
        'Template premium, effect lengkap',
        'Export 4K tanpa watermark',
        'Cocok untuk konten kreator'
      ]
    },
    {
      id: 'zoom-pro',
      num: 13,
      name: 'Zoom Pro',
      brand: 'Zoom Communications',
      desc: 'Rapat kerja & webinar tanpa batas durasi 40 menit hingga 100 peserta.',
      priceYear: 'Rp 245.000',
      priceLifetime: 'Rp 302.000',
      category: 'productivity',
      icon: Video,
      features: [
        'Meeting hingga 100 peserta',
        'Fitur lengkap untuk kerja & belajar',
        'Kualitas HD, lebih stabil',
        'Cocok untuk bisnis, sekolah, komunitas'
      ]
    },
    {
      id: 'vidio-platinum',
      num: 14,
      name: 'Vidio Platinum',
      brand: 'Vidio Official',
      desc: 'Streaming bola Liga 1, Premier League, Serie A, serta tayangan hiburan lengkap Full HD.',
      priceYear: 'Rp 385.000',
      priceLifetime: 'Rp 502.000',
      category: 'entertainment',
      icon: Tv,
      features: [
        'Nonton Liga 1, Premier League, Serie A',
        'Kualitas tayangan Full HD',
        'Bisa di semua jenis perangkat',
        'Cocok untuk pecinta olahraga & hiburan'
      ]
    },
    {
      id: 'vidio-ultimate',
      num: 15,
      name: 'Vidio Ultimate',
      brand: 'Vidio Official',
      desc: 'Paket hiburan & tayangan olahraga paling lengkap dan tanpa batas dari Vidio.',
      priceYear: 'Rp 502.000',
      priceLifetime: 'Rp 602.000',
      category: 'entertainment',
      icon: Tv,
      features: [
        'Paket terlengkap dari Vidio',
        'Semua tayangan olahraga & hiburan',
        'Tanpa batas, kualitas terbaik',
        'Pengalaman nonton maksimal'
      ]
    },
    {
      id: 'claude-pro',
      num: 16,
      name: 'Claude Pro',
      brand: 'Anthropic Official',
      desc: 'Asisten AI cerdas tingkat tinggi untuk analisis riset, pemrograman, & penulisan komprehensif.',
      priceYear: 'Rp 962.000',
      priceLifetime: 'Rp 1.200.000',
      category: 'ai',
      icon: Bot,
      features: [
        'Akses Claude AI Pro (versi terbaru)',
        'Cocok untuk menulis, analisis, riset',
        'Respon cepat & akurat',
        'Mendukung produktivitas kerja'
      ]
    }
  ];

  const handleGlobalDurationChange = (type: 'all' | 'year' | 'lifetime') => {
    setGlobalDuration(type);
    if (type !== 'all') {
      const newDurations: Record<string, 'year' | 'lifetime'> = {};
      products.forEach(p => {
        newDurations[p.id] = type;
      });
      setDurations(newDurations);
    }
  };

  const getWaProductUrl = (name: string, durationText: string, priceText: string) => {
    const text = `Halo KamiDigitalin, saya ingin pesan *${name}* Paket *${durationText}* (Harga *${priceText}*). Mohon info prosedur pembayaran & aktivasinya. Terima kasih!`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const filteredProducts = products.filter(p => {
    const matchesTab = activeTab === 'all' || p.category === activeTab;
    const matchesSearch = !search || 
      p.name.toLowerCase().includes(search.toLowerCase()) || 
      p.desc.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="pt-4 sm:pt-8 pb-16 space-y-6 sm:space-y-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="inline-block px-3 py-0.5 rounded-full bg-brand-100 text-brand-700 font-bold text-[11px] uppercase tracking-wider">
            {t.prod_badge}
          </span>
          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900">
            {t.prod_title}
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            {t.prod_subtitle}
          </p>
        </div>

        {/* Toolbar - Search & Non-stacking Scrollable Tabs */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {/* Search Box */}
          <div className="relative max-w-xl mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.prod_search}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white shadow-xs focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none text-slate-800 placeholder:text-slate-400 text-xs transition"
            />
          </div>

          {/* Category Tabs (Horizontally Scrollable on Mobile - Zero Stacking) */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 px-1 justify-start sm:justify-center">
            {[
              { id: 'all', label: t.prod_cat_all },
              { id: 'ai', label: t.prod_cat_ai },
              { id: 'productivity', label: t.prod_cat_prod },
              { id: 'design', label: t.prod_cat_design },
              { id: 'entertainment', label: t.prod_cat_ent },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold shrink-0 whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-brand-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Duration Filter Switcher (Sleek Compact Bar) */}
          <div className="flex items-center justify-center gap-2 text-xs pt-1">
            <span className="font-semibold text-slate-500 hidden sm:inline">{t.prod_dur_label}</span>
            <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs">
              <button
                onClick={() => handleGlobalDurationChange('all')}
                className={`px-3 py-1 rounded-lg font-bold transition whitespace-nowrap ${
                  globalDuration === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {t.prod_dur_all}
              </button>
              <button
                onClick={() => handleGlobalDurationChange('year')}
                className={`px-3 py-1 rounded-lg font-bold transition whitespace-nowrap ${
                  globalDuration === 'year' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {t.prod_dur_12m}
              </button>
              <button
                onClick={() => handleGlobalDurationChange('lifetime')}
                className={`px-3 py-1 rounded-lg font-bold transition whitespace-nowrap ${
                  globalDuration === 'lifetime' ? 'bg-amber-500 text-white shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {t.prod_dur_life}
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 pt-2">
          {filteredProducts.map(p => {
            const IconComp = p.icon;
            const activeDuration = durations[p.id] || (globalDuration === 'lifetime' ? 'lifetime' : 'year');
            const activePrice = activeDuration === 'year' ? p.priceYear : p.priceLifetime;
            const activeDurationText = activeDuration === 'year' ? '12 Bulan' : 'Lifetime';

            return (
              <div key={p.id} className="relative bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:shadow-md card-hover-effect flex flex-col justify-between space-y-3">
                
                {/* Badge Number & Best Seller */}
                <div className="flex items-center justify-between">
                  <span className="w-6 h-6 rounded-full bg-brand-50 border border-brand-200 text-brand-700 font-extrabold text-[11px] flex items-center justify-center shadow-xs">
                    {p.num}
                  </span>
                  {p.bestSeller && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-bold text-[10px] uppercase tracking-wider">
                      <Zap className="w-3 h-3 text-amber-500 fill-amber-500" /> Best Seller
                    </span>
                  )}
                </div>

                <div className="space-y-2.5">
                  {/* Logo Container */}
                  <div className="w-14 h-14 rounded-2xl bg-white p-2 border border-slate-200 shadow-xs flex items-center justify-center shrink-0">
                    {p.logo ? (
                      <Image src={p.logo} alt={`${p.name} Logo`} width={40} height={40} className="object-contain" />
                    ) : (
                      <IconComp className="w-6 h-6 text-brand-600" />
                    )}
                  </div>

                  <div>
                    <h4 className="font-heading font-bold text-sm sm:text-base text-slate-900 leading-snug">{p.name}</h4>
                    <span className="text-[11px] font-medium text-slate-400">{p.brand}</span>
                  </div>

                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{p.desc}</p>
                  
                  {/* Features */}
                  <div className="space-y-1 pt-1">
                    {p.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                        <span className="leading-tight text-[11px]">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dual Price Selector Box */}
                <div className="pt-3 border-t border-slate-100 space-y-2.5">
                  <div className="text-center">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{t.prod_select_dur}</span>
                  </div>

                  {/* Pricing Switcher Pills */}
                  <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200">
                    <button
                      type="button"
                      onClick={() => setDurations(prev => ({ ...prev, [p.id]: 'year' }))}
                      className={`py-1.5 px-1 rounded-lg text-center transition-all ${
                        activeDuration === 'year'
                          ? 'bg-blue-600 text-white font-bold shadow-xs'
                          : 'text-slate-600 hover:text-slate-900 font-medium'
                      }`}
                    >
                      <span className="block text-[9px] uppercase tracking-wider opacity-90">12 Bulan</span>
                      <span className="text-xs font-extrabold">{p.priceYear}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setDurations(prev => ({ ...prev, [p.id]: 'lifetime' }))}
                      className={`py-1.5 px-1 rounded-lg text-center transition-all ${
                        activeDuration === 'lifetime'
                          ? 'bg-amber-500 text-white font-bold shadow-xs'
                          : 'text-slate-600 hover:text-slate-900 font-medium'
                      }`}
                    >
                      <span className="block text-[9px] uppercase tracking-wider opacity-90">Lifetime</span>
                      <span className="text-xs font-extrabold">{p.priceLifetime}</span>
                    </button>
                  </div>

                  {/* Order WA Button */}
                  <a
                    href={getWaProductUrl(p.name, activeDurationText, activePrice)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> {t.prod_order_btn} ({activeDurationText}: {activePrice})
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-slate-500 text-xs font-medium">Tidak ada aplikasi yang cocok dengan pencarian Anda.</p>
          </div>
        )}

      </div>
    </div>
  );
}
