'use client';

import React from 'react';
import { 
  BookOpen, 
  Award, 
  LineChart, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  Check,
  FileText
} from 'lucide-react';

const WA_NUMBER = "6282179746840";

export default function AcademicPage() {
  const getWaAcademicUrl = (service: string, price: string) => {
    const text = `Halo KamiDigitalin, saya ingin konsultasi mengenai layanan *${service}* (estimasi ${price}). Mohon info alur & prosedurnya. Terima kasih!`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const getWaTurnitinUrl = () => {
    const text = `Halo KamiDigitalin, saya ingin menggunakan *Layanan Fast-Track Turnitin Check (No Repository)* harga Rp 30.000. Mohon petunjuk pengiriman filenya.`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="py-16 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 font-bold text-xs uppercase tracking-wider">
            ASISTENSI TUGAS & RISET AKADEMIK
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900">
            Bantuan Tugas, Riset & Olah Data
          </h1>
          <p className="text-slate-600 text-base">
            Pendampingan edukatif & bantuan pengerjaan tugas kuliah, essay, makalah, skripsi, tesis, olah data statistik, dan Turnitin fast-track via WhatsApp.
          </p>
        </div>

        {/* 4 Academic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Asistensi Tugas Kuliah */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md card-hover-effect space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-bold text-lg text-slate-900">Tugas & Essay Kuliah</h3>
                  <span className="text-xs font-extrabold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">Mulai Rp 20rb</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Bantuan pengerjaan tugas harian kuliah, makalah, essay, resume jurnal, & presentasi powerpoint.
                </p>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Tugas Kuliah & Essay Refined</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Makalah & PPT Presentasi</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Pengerjaan Kilat & Kerahasiaan 100%</span>
                </div>
              </div>
            </div>
            <a
              href={getWaAcademicUrl("Asistensi Tugas Kuliah & Essay", "Mulai Rp 20.000~")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition"
            >
              <MessageCircle className="w-4 h-4" /> Order Tugas (Rp 20rb~)
            </a>
          </div>

          {/* Card 2: Bimbingan Skripsi S1 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md card-hover-effect space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-bold text-lg text-slate-900">Bimbingan Skripsi (S1)</h3>
                  <span className="text-xs font-extrabold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">Mulai Rp 150rb</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Mentoring penyusunan rancangan proposal riset, latar belakang, & pendampingan revisi dosen.
                </p>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Matriks Riset & Kerangka Teori</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Penelusuran Jurnal Sinta & Scopus</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Simulasi Persiapan Sidang Skripsi</span>
                </div>
              </div>
            </div>
            <a
              href={getWaAcademicUrl("Bimbingan Skripsi S1", "Mulai Rp 150.000~")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition"
            >
              <MessageCircle className="w-4 h-4" /> Konsultasi Skripsi
            </a>
          </div>

          {/* Card 3: Olah Data Statistik */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md card-hover-effect space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 border border-brand-100 flex items-center justify-center">
                <LineChart className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-bold text-lg text-slate-900">Olah Data Statistik</h3>
                  <span className="text-xs font-extrabold text-brand-600 bg-brand-50 px-2 py-0.5 rounded border border-brand-200">Mulai Rp 50rb</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Pelatihan & bantuan pengolahan data statistik penelitian (SPSS, SmartPLS, SEM AMOS, R, Python).
                </p>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                  <span>SPSS, SmartPLS, SEM AMOS</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                  <span>Python & R Studio Analytics</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                  <span>Pembahasan Uji Hipotesis Lengkap</span>
                </div>
              </div>
            </div>
            <a
              href={getWaAcademicUrl("Olah Data Statistik", "Mulai Rp 50.000~")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition"
            >
              <MessageCircle className="w-4 h-4" /> Konsultasi Olah Data
            </a>
          </div>

          {/* Card 4: Bimbingan Tesis S2 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md card-hover-effect space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-bold text-lg text-slate-900">Bimbingan Tesis (S2)</h3>
                  <span className="text-xs font-extrabold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">Mulai Rp 250rb</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Pendampingan pembentukan kebaruan penelitian (novelty), model konseptual, & publikasi ilmiah.
                </p>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span>Research Gap & Novelty Analysis</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span>Metodologi Kuantitatif / Kualitatif</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span>Draf Naskah Publikasi Jurnal</span>
                </div>
              </div>
            </div>
            <a
              href={getWaAcademicUrl("Bimbingan Tesis S2", "Mulai Rp 250.000~")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition"
            >
              <MessageCircle className="w-4 h-4" /> Konsultasi Tesis
            </a>
          </div>

        </div>

        {/* Turnitin Section */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center shadow-xl">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs border border-emerald-500/30">
              <ShieldCheck className="w-4 h-4" /> GUARANTEED NO REPOSITORY
            </span>
            <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
              Layanan Fast-Track Pengecekan Turnitin
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Dapatkan laporan tingkat kemiripan dokumen ilmiah Anda (Skripsi, Tesis, Disertasi, Makalah, Jurnal) menggunakan Turnitin akun resmi dengan jaminan <strong>100% Tidak Tersimpan di Database Repository (Aman)</strong>.
            </p>
            <a
              href={getWaTurnitinUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition"
            >
              <MessageCircle className="w-4 h-4" /> Cek Dokumen Turnitin (Rp 30.000)
            </a>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3 text-slate-200 text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Proses Hasil Kilat 10 - 20 Menit</span>
            </div>
            <div className="flex items-center gap-3 text-slate-200 text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>File Laporan PDF Lengkap Highlight Warna</span>
            </div>
            <div className="flex items-center gap-3 text-slate-200 text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Mentoring Teknik Parafrase Edukatif</span>
            </div>
            <div className="flex items-center gap-3 text-slate-200 text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Privasi & Kerahasiaan Naskah Terjamin</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
