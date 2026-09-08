'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

const WA_NUMBER = "6282179746840";

export default function WhatsAppWidget() {
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo KamiDigitalin, saya ingin bertanya seputar pemesanan produk digital / pembuatan website / bimbingan akademik.")}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp (+62 821-7974-6840)"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:scale-110 hover:rotate-6 transition-all duration-300 group"
    >
      <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-30 animate-ping group-hover:opacity-0" />
      <MessageCircle className="w-7 h-7 stroke-[2.2]" />
    </a>
  );
}
