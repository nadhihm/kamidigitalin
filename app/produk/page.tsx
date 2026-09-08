'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Search, 
  Bot, 
  HardDrive, 
  Palette, 
  Video, 
  VideoOff, 
  SearchCheck, 
  Sparkles, 
  Film, 
  Music, 
  FileCheck, 
  Check, 
  MessageCircle 
} from 'lucide-react';

const WA_NUMBER = "6282179746840";

interface Product {
  id: string;
  name: string;
  brand: string;
  desc: string;
  price: string;
  category: 'ai' | 'design' | 'productivity' | 'entertainment';
  logo?: string;
  icon?: any;
  features: string[];
}

export default function ProductsPage() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<string>('all');

  const products: Product[] = [
    {
      id: 'chatgpt-plus',
      name: 'ChatGPT Plus (GPT-5.6)',
      brand: 'OpenAI Official',
      desc: 'Akses resmi OpenAI model kecerdasan buatan GPT-5.6, analisis data cerdas & visual DALL-E 3.',
      price: 'Rp 75.000',
      category: 'ai',
      logo: '/logos/chatgpt.png',
      features: ['Private Custom GPTs', 'Garansi Penuh Masa Langganan']
    },
    {
      id: 'canva-pro',
      name: 'Canva Pro Lifetime / Yearly',
      brand: 'Canva Official',
      desc: 'Akses 600.000+ template premium, Magic Studio AI, Brand Kit, dan Magic Remover.',
      price: 'Rp 5.000',
      category: 'design',
      logo: '/logos/canva.png',
      features: ['Brand Kit & Magic Resize', 'Akun Email Pribadi']
    },
    {
      id: 'capcut-pro',
      name: 'CapCut Pro Official',
      brand: 'ByteDance',
      desc: 'Aplikasi video editor andalan kreator dengan Auto Subtitle Indonesia akurat & fitur Pro.',
      price: 'Rp 45.000',
      category: 'design',
      logo: '/logos/capcut.png',
      features: ['Export 4K 60FPS Tanpa Watermark', 'Multi-Device Sync']
    },
    {
      id: 'google-drive',
      name: 'Google Drive 5TB + Gemini',
      brand: 'Google Cloud',
      desc: 'Penyimpanan awan raksasa 5.000 GB dan asisten kecerdasan buatan Google Gemini Pro.',
      price: 'Rp 50.000',
      category: 'productivity',
      logo: '/logos/google-drive.png',
      features: ['Storage Raksasa 5,000 GB', 'Termasuk Fitur Gemini AI']
    },
    {
      id: 'chatgpt-go',
      name: 'ChatGPT Go (Sharing GPT-5.6)',
      brand: 'OpenAI Shared',
      desc: 'Pilihan paling hemat untuk menikmati kecerdasan GPT-5.6 secara sharing terkelola.',
      price: 'Rp 40.000',
      category: 'ai',
      logo: '/logos/chatgpt.png',
      features: ['Akses Hemat GPT-5.6 Turbo', 'Terkelola Stabil 24/7']
    },
    {
      id: 'perplexity-pro',
      name: 'Perplexity Pro AI',
      brand: 'Perplexity Inc',
      desc: 'Mesin pencari kecerdasan buatan berbasis sitasi ilmiah lengkap dengan model Claude 3.5 & GPT-5.',
      price: 'Rp 60.000',
      category: 'ai',
      icon: SearchCheck,
      features: ['Unlimited Pro Queries & File Uploads', 'Sitasi Jurnal Ilmiah Akurat']
    },
    {
      id: 'midjourney-pro',
      name: 'Midjourney v6 Pro',
      brand: 'Midjourney Inc',
      desc: 'Generator gambar kecerdasan buatan kualitas photorealistic kelas dunia terbaik di Discord.',
      price: 'Rp 80.000',
      category: 'design',
      icon: Sparkles,
      features: ['Unlimited Fast Generations', 'Commercial Usage License']
    },
    {
      id: 'netflix-4k',
      name: 'Netflix 4K Ultra HD',
      brand: 'Netflix Official',
      desc: 'Streaming film dan serial TV favorit kualitas 4K UHD dengan PIN Profile pribadi anti-bentrok.',
      price: 'Rp 35.000',
      category: 'entertainment',
      icon: Film,
      features: ['Private Profile & Personal PIN', 'Garansi Penuh Anti On-Hold']
    },
    {
      id: 'spotify-premium',
      name: 'Spotify Premium',
      brand: 'Spotify AB',
      desc: 'Dengarkan jutaan musik & podcast tanpa iklan dengan kualitas audio Very High & offline download.',
      price: 'Rp 25.000',
      category: 'entertainment',
      icon: Music,
      features: ['Bebas Iklan & Unlimited Skip', 'Akun Pribadi Email Sendiri']
    },
    {
      id: 'youtube-premium',
      name: 'YouTube Premium + Music',
      brand: 'Google YouTube',
      desc: 'Tonton video YouTube tanpa iklan, background play di HP, dan akses penuh ke YouTube Music Pro.',
      price: 'Rp 20.000',
      category: 'entertainment',
      icon: Film,
      features: ['No Ads & Background Play', 'Free YouTube Music App']
    },
    {
      id: 'zoom-pro',
      name: 'Zoom Pro Meeting',
      brand: 'Zoom Communications',
      desc: 'Layanan video conference untuk rapat kerja dan webinar tanpa batas durasi 40 menit.',
      price: 'Rp 35.000',
      category: 'productivity',
      icon: VideoOff,
      features: ['Unlimited Meeting Duration', 'Up to 300 Participants']
    },
    {
      id: 'turnitin-account',
      name: 'Turnitin Student Account',
      brand: 'Turnitin LLC',
      desc: 'Pengecekan kemiripan dokumen & skor plagiarisme resmi dengan garansi No Repository.',
      price: 'Rp 30.000',
      category: 'productivity',
      icon: FileCheck,
      features: ['Guaranteed No-Repository (Aman)', 'Laporan Asli PDF Format']
    }
  ];

  const getWaProductUrl = (name: string, price: string) => {
    const text = `Halo KamiDigitalin, saya ingin pesan *${name}* dengan harga *${price}*. Mohon info prosedur pembayaran & aktivasinya. Terima kasih!`;
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
    <div className="py-16 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-brand-100 text-brand-700 font-bold text-xs uppercase tracking-wider">
            KATALOG RESMI
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900">
            Katalog Produk Aplikasi Digital
          </h1>
          <p className="text-slate-600 text-base">
            Daftar 19+ paket langganan aplikasi digital legal bergaransi dengan aktivasi instan 5 - 10 menit via WhatsApp (+62 821-7974-6840).
          </p>
        </div>

        {/* Search & Tabs Toolbar */}
        <div className="space-y-6 max-w-3xl mx-auto">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari aplikasi (ChatGPT, Google Drive, Canva, Netflix...)"
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 bg-white shadow-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none text-slate-800 placeholder:text-slate-400 text-sm transition"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'Semua Category' },
              { id: 'ai', label: 'AI & Analisis' },
              { id: 'design', label: 'Desain & Media' },
              { id: 'productivity', label: 'Produktivitas & Cloud' },
              { id: 'entertainment', label: 'Hiburan & Streaming' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
          {filteredProducts.map(p => {
            const IconComp = p.icon;
            return (
              <div key={p.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md card-hover-effect flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Enlarged Logo Container */}
                  <div className="w-16 h-16 rounded-2xl bg-white p-2.5 border border-slate-200 shadow-sm flex items-center justify-center shrink-0">
                    {p.logo ? (
                      <Image src={p.logo} alt={`${p.name} Logo`} width={48} height={48} className="object-contain" />
                    ) : (
                      <IconComp className="w-7 h-7 text-brand-600" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-slate-900 leading-snug">{p.name}</h4>
                    <span className="text-xs font-medium text-slate-400">{p.brand}</span>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{p.desc}</p>
                  
                  <div className="space-y-1.5 pt-2">
                    {p.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] text-slate-400 font-semibold uppercase">Harga Resmi</span>
                    <span className="font-heading font-bold text-lg text-brand-600">{p.price}</span>
                  </div>
                  <a
                    href={getWaProductUrl(p.name, p.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> Pesan
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200">
            <p className="text-slate-500 text-sm font-medium">Tidak ada aplikasi yang cocok dengan pencarian Anda.</p>
          </div>
        )}

      </div>
    </div>
  );
}
