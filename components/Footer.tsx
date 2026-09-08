'use client';

import React from 'react';
import Link from 'next/link';
import { Box, MessageCircle, Instagram, Clock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const WA_NUMBER = "6282179746840";

export default function Footer() {
  const { t } = useLanguage();
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo KamiDigitalin, saya ingin menanyakan info produk & layanan digital.")}`;

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white">
                <Box className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="font-heading font-extrabold text-2xl text-white tracking-tight">
                Kami<span className="text-brand-400">Digitalin</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {t.announcement_msg}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4">{t.nav_home}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-brand-400 transition">{t.nav_home}</Link></li>
              <li><Link href="/produk" className="hover:text-brand-400 transition">{t.nav_products}</Link></li>
              <li><Link href="/website" className="hover:text-brand-400 transition">{t.nav_web}</Link></li>
              <li><Link href="/akademik" className="hover:text-brand-400 transition">{t.nav_academic}</Link></li>
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4">{t.popular_badge}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/produk" className="hover:text-brand-400 transition">ChatGPT Plus (GPT-5.6)</Link></li>
              <li><Link href="/produk" className="hover:text-brand-400 transition">Google Drive 5TB</Link></li>
              <li><Link href="/produk" className="hover:text-brand-400 transition">Canva Pro & CapCut Pro</Link></li>
              <li><Link href="/website" className="hover:text-brand-400 transition">Website Domain .COM</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4">{t.nav_contact}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-emerald-400 hover:underline font-semibold">
                  <MessageCircle className="w-4 h-4" /> {t.btn_consult_wa}
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/kamidigitalin/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-400 transition">
                  <Instagram className="w-4 h-4" /> @kamidigitalin
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-brand-400" /> {t.stat_speed}
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} KamiDigitalin. {t.footer_rights}</p>
          <p className="flex items-center gap-1 text-slate-400 font-medium">
            {t.footer_tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
