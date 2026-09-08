'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, ChevronDown, Menu, X, Box, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/lib/translations';

const WA_NUMBER = "6282179746840";

export default function Navbar() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const handleScrollAndHash = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      if (typeof window !== 'undefined') {
        setActiveHash(window.location.hash);
      }
    };
    handleScrollAndHash();
    window.addEventListener('scroll', handleScrollAndHash);
    window.addEventListener('hashchange', handleScrollAndHash);
    return () => {
      window.removeEventListener('scroll', handleScrollAndHash);
      window.removeEventListener('hashchange', handleScrollAndHash);
    };
  }, [pathname]);

  const changeLanguage = (newLang: Language) => {
    setLang(newLang);
    setLangOpen(false);
  };

  const navLinks = [
    { href: '/', label: t.nav_home },
    { href: '/produk', label: t.nav_products },
    { href: '/website', label: t.nav_web },
    { href: '/akademik', label: t.nav_academic },
    { href: '/#testimoni', label: t.nav_testimonials },
    { href: '/#faq', label: t.nav_faq },
    { href: '/#kontak', label: t.nav_contact },
  ];

  const waConsultUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo KamiDigitalin, saya ingin konsultasi mengenai layanan digital & aplikasi premium.")}`;

  return (
    <>
      {/* Top Announcement Bar */}
      <aside className="bg-brand-900 text-white text-xs py-2 px-4 border-b border-brand-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-brand-500 text-white font-extrabold px-2 py-0.5 rounded text-[10px] tracking-wider uppercase">
              RESMI
            </span>
            <span className="text-brand-100 font-medium">{t.announcement_msg}</span>
          </div>
          <div className="flex items-center gap-4 text-brand-200">
            <a href="https://www.instagram.com/kamidigitalin/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              @kamidigitalin
            </a>
            <a href={waConsultUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-1 font-semibold">
              Customer Support WA <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </aside>

      {/* Main Sticky Navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-200 bg-white/95 backdrop-blur-md ${scrolled ? 'shadow-md border-b border-slate-200' : 'border-b border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <Link href="/" onClick={() => setActiveHash('')} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 to-brand-500 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
                <Box className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl text-slate-900 tracking-tight leading-none">
                  Kami<span className="text-brand-600">Digitalin</span>
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-1">
                  Partner Transformasi Digital
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isHashLink = link.href.includes('#');
                const targetHash = isHashLink ? link.href.substring(link.href.indexOf('#')) : '';
                
                let isActive = false;
                if (isHashLink) {
                  isActive = pathname === '/' && activeHash === targetHash;
                } else {
                  isActive = pathname === link.href && (!activeHash || pathname !== '/');
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      if (isHashLink) {
                        setActiveHash(targetHash);
                      } else {
                        setActiveHash('');
                      }
                    }}
                    className={`font-semibold text-sm transition-colors relative py-1 ${
                      isActive ? 'text-brand-600 font-bold' : 'text-slate-600 hover:text-brand-600'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-600 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Actions & Switchers */}
            <div className="flex items-center gap-3">
              {/* Language Selector */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition"
                >
                  <Globe className="w-4 h-4 text-brand-600" />
                  <span className="uppercase">{lang}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {langOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-white border border-slate-200 rounded-xl shadow-xl py-1.5 z-50">
                    <button
                      onClick={() => changeLanguage('id')}
                      className={`w-full text-left px-4 py-2 text-xs font-medium flex items-center justify-between ${lang === 'id' ? 'bg-brand-50 text-brand-700 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
                    >
                      🇮🇩 Bahasa Indonesia
                    </button>
                    <button
                      onClick={() => changeLanguage('en')}
                      className={`w-full text-left px-4 py-2 text-xs font-medium flex items-center justify-between ${lang === 'en' ? 'bg-brand-50 text-brand-700 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
                    >
                      🇬🇧 English
                    </button>
                    <button
                      onClick={() => changeLanguage('zh')}
                      className={`w-full text-left px-4 py-2 text-xs font-medium flex items-center justify-between ${lang === 'zh' ? 'bg-brand-50 text-brand-700 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
                    >
                      🇨🇳 中文 (Mandarin)
                    </button>
                  </div>
                )}
              </div>

              {/* Consultation WA Button */}
              <a
                href={waConsultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md shadow-brand-600/20 hover:shadow-lg transition-all"
              >
                {t.btn_consult}
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-semibold text-slate-700 hover:text-brand-600 py-2 border-b border-slate-50 text-sm"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={waConsultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-sm shadow-md"
            >
              {t.btn_consult}
            </a>
          </div>
        )}
      </header>
    </>
  );
}
