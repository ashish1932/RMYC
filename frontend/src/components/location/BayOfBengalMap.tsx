import React, { useState } from 'react';
import { ExternalLink, Anchor } from 'lucide-react';
import { RMYC_CONTACT_INFO } from '../../data/rmycContent';

export const BayOfBengalMap: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(
    RMYC_CONTACT_INFO.address
  )}`;

  return (
    <div className="w-full bg-white border border-slate-300 rounded-3xl overflow-hidden shadow-xl relative">
      {/* Interactive Map Graphical Frame */}
      <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-slate-100 overflow-hidden flex items-center justify-center">
        {/* Animated Map Texture */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 opacity-80"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80')`,
            transform: `scale(${zoomLevel})`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent" />

        {/* Location Marker Radar Pulse */}
        <div className="relative z-10 text-center flex flex-col items-center">
          <div className="relative flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-16 w-16 rounded-full bg-rmyc-gold opacity-40" />
            <div className="w-12 h-12 rounded-full bg-rmyc-navy text-white flex items-center justify-center shadow-2xl border-2 border-rmyc-gold">
              <Anchor className="w-6 h-6 animate-pulse text-rmyc-gold" />
            </div>
          </div>
          <div className="mt-3 bg-white border border-slate-300 px-4 py-2 rounded-xl backdrop-blur-md shadow-xl text-center">
            <span className="font-serif text-base font-bold text-rmyc-navy block">
              Royal Madras Yacht Club
            </span>
            <span className="text-[11px] text-rmyc-gold-dark uppercase tracking-wider font-bold block">
              1, Spring Haven Wharf · Chennai Port
            </span>
          </div>
        </div>

        {/* Zoom & Navigation Controls */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 z-10">
          <button
            onClick={() => setZoomLevel((z) => Math.min(1.5, z + 0.2))}
            className="px-3 py-1.5 rounded-lg bg-white text-rmyc-navy border border-slate-300 text-xs font-bold hover:border-rmyc-gold shadow-sm"
          >
            + Zoom
          </button>
          <button
            onClick={() => setZoomLevel((z) => Math.max(0.9, z - 0.2))}
            className="px-3 py-1.5 rounded-lg bg-white text-rmyc-navy border border-slate-300 text-xs font-bold hover:border-rmyc-gold shadow-sm"
          >
            - Zoom
          </button>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-rmyc-gold-light via-rmyc-gold to-rmyc-gold-dark text-rmyc-navy text-xs font-bold uppercase tracking-wider shadow-md hover:brightness-105"
          >
            <span>Open Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
