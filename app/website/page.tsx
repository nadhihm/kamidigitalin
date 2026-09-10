'use client';

import React from 'react';
import { 
  Check, 
  MessageCircle, 
  Sparkles,
  Zap,
  Globe
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const WA_NUMBER = "6282179746840";

export default function WebsitePage() {
  const { lang, t } = useLanguage();

  const packages = [
    {
      name: lang === 'en' ? 'Domain .Edge Package' : lang === 'zh' ? '.Edge 域名套餐' : 'Paket Domain .Edge',
      badge: 'STARTER',
      price: 'Rp 550.000',
      desc: lang === 'en' ? 'Perfect for new businesses, SMEs, portfolios, and instant promotion landing pages.' : lang === 'zh' ? '非常适合新企业、中小企业、个人作品集与极速推广落地页。' : 'Sangat cocok untuk bisnis baru, UMKM, portofolio, dan landing page promosi instan.',
      popular: false,
      features: lang === 'en' ? [
        'Free Official .EDGE Domain (1 Year)',
        'Free High-Speed Cloud Hosting',
        'Landing Page / Company Profile (1-3 Pages)',
        'Ultra-Responsive Design (Mobile & PC)',
        'Direct WhatsApp Order Button Integration',
        'Free 5x Content Revision',
        'Fast Turnaround 2 - 4 Work Days'
      ] : lang === 'zh' ? [
        '免费官方 .EDGE 域名（1 年）',
        '免费高速云托管',
        '落地页 / 企业官网（1-3 页）',
        '全平台超响应式设计 (手机与电脑)',
        '集成 WhatsApp 一键沟通按钮',
        '免费 5 次内容修改',
        '2 - 4 个工作日极速交付'
      ] : [
        'Gratis Domain .EDGE Resmi (1 Tahun)',
        'Gratis High-Speed Cloud Hosting',
        'Landing Page / Company Profile (1-3 Page)',
        'Desain Ultra-Responsif (Mobile & PC)',
        'Integrasi Tombol WhatsApp Direct',
        'Gratis Revisi Content 5x',
        'Pengerjaan Cepat 2 - 4 Hari Kerja'
      ]
    },
    {
      name: lang === 'en' ? 'Domain .Com Package' : lang === 'zh' ? '.Com 域名高级套餐' : 'Paket Domain .Com',
      badge: 'PRO BUSINESS',
      price: 'Rp 750.000',
      desc: lang === 'en' ? 'Best choice for Corporate Companies, Brands, Online Stores, and Professional Profiles.' : lang === 'zh' ? '企业公司、知名品牌、在线商城与专业形象的绝佳选择。' : 'Pilihan terbaik untuk Perusahaan, Brand, Toko Online, dan Company Profile Profesional.',
      popular: true,
      features: lang === 'en' ? [
        'Free International .COM Domain (1 Year)',
        'Premium Super Fast Cloud Hosting',
        'Multi-Page Structure (Up to 5 Pages)',
        'Exclusive Corporate Custom Design',
        'Google SEO & Meta Indexing Integration',
        'Contact Form & Google Maps Integration',
        'Free 5x Revision & System Guarantee',
        'Turnaround 2 - 5 Work Days'
      ] : lang === 'zh' ? [
        '免费国际 .COM 域名（1 年）',
        '高级超高速云托管',
        '多页面结构（多达 5 页）',
        '专属企业定制设计',
        'Google SEO 与 Meta 索引集成',
        '联系表单与 Google 地图集成',
        '免费 5 次修改及系统保修',
        '2 - 5 个工作日交付'
      ] : [
        'Gratis Domain .COM Internasional (1 Thn)',
        'Premium Cloud Hosting Super Fast',
        'Multi-Page Structure (Hingga 5 Halaman)',
        'Desain Eksklusif Corporate Custom',
        'Integrasi SEO Google & Meta Indexing',
        'Integrasi Form Kontak & Google Maps',
        'Gratis Revisi 5x & Garansi Sistem',
        'Pengerjaan 2 - 5 Hari Kerja'
      ]
    },
    {
      name: lang === 'en' ? 'Custom Web Application' : lang === 'zh' ? '定制 Web 应用程序' : 'Custom Web Application',
      badge: 'ENTERPRISE',
      price: 'Rp 1.500.000+',
      desc: lang === 'en' ? 'Specialized solution for web apps, complex e-commerce, news portals, or SaaS platforms.' : lang === 'zh' ? '专为 Web 应用、复杂电商、新闻门户与 SaaS 平台打造的定制方案。' : 'Solusi khusus untuk aplikasi berbasis web, e-commerce kompleks, portal berita, atau SaaS.',
      popular: false,
      features: lang === 'en' ? [
        'Full Custom Frontend & Modern Logic',
        'Admin Dashboard Management',
        'API & Payment Gateway Integration',
        'SSL Security Certificate Grade A',
        'High Performance Database Setup',
        '1 Month Maintenance Support'
      ] : lang === 'zh' ? [
        '全定制前端与现代业务逻辑',
        '后台管理控制面板',
        'API 与支付网关集成',
        'A 级 SSL 安全证书',
        '高性能数据库架构 setup',
        '1 个月技术维护支持'
      ] : [
        'Full Custom Frontend & Modern Logic',
        'Dashboard Admin Management',
        'Integrasi API / Payment Gateway',
        'SSL Security Certificate Grade A',
        'High Performance Database Setup',
        'Maintenance Support 1 Bulan'
      ]
    }
  ];

  const getWaPackageUrl = (packageName: string, packagePrice: string) => {
    const text = lang === 'en'
      ? `Hello KamiDigitalin, I want to consult about *${packageName}* (Estimated price *${packagePrice}*). Please provide procedure info.`
      : lang === 'zh'
      ? `您好 KamiDigitalin，我想咨询 *${packageName}* 套餐 (预估价格 *${packagePrice}*)。请提供办理流程。`
      : `Halo KamiDigitalin, saya tertarik memesan paket website *${packageName}* dengan estimasi harga *${packagePrice}*. Mohon info kelanjutan brief & prosedurnya. Terima kasih!`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="pt-4 sm:pt-8 pb-16 space-y-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="inline-block px-3 py-0.5 rounded-full bg-indigo-100 text-indigo-700 font-bold text-[11px] uppercase tracking-wider">
            WEBSITE DEVELOPMENT
          </span>
          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900">
            {t.web_hero_title}
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            {t.web_hero_subtitle}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`bg-white border rounded-2xl p-6 flex flex-col justify-between space-y-5 relative transition-all duration-200 ${
                pkg.popular
                  ? 'border-brand-500 shadow-lg shadow-brand-500/10 ring-2 ring-brand-500/20'
                  : 'border-slate-200 shadow-xs hover:shadow-md'
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-brand-600 text-white font-extrabold text-[10px] uppercase tracking-wider shadow-xs">
                  RECOMMENDED
                </span>
              )}

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 uppercase">
                    {pkg.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900">{pkg.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{pkg.desc}</p>
                </div>

                <div>
                  <span className="text-[10px] text-slate-400 font-semibold block uppercase">Estimasi Biaya</span>
                  <span className="font-heading font-extrabold text-2xl text-brand-600">{pkg.price}</span>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={getWaPackageUrl(pkg.name, pkg.price)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition ${
                  pkg.popular
                    ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-xs'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                }`}
              >
                <MessageCircle className="w-4 h-4" /> {t.order_wa}
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
