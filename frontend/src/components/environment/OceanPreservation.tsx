import React from 'react';
import { Waves, Heart, Shield, Droplets } from 'lucide-react';

export const OceanPreservation: React.FC = () => {
  return (
    <section className="py-24 bg-emerald-50/60 border-y border-emerald-100 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
          <Waves className="w-4 h-4 text-emerald-600" />
          <span>Ocean Stewardship & Sustainability</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-rmyc-navy tracking-tight leading-tight mb-6">
          The sea is not just where we sail. <br />
          <span className="gold-gradient-text-light italic font-serif">It is what we protect.</span>
        </h2>

        <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto mb-10">
          For over 115 years, Royal Madras Yacht Club has championed marine conservation across the Coromandel Coast. We adhere strictly to zero-plastic harbor protocols, ocean cleanup regattas, and marine habitat awareness.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md">
            <Droplets className="w-6 h-6 text-rmyc-gold-dark mb-3" />
            <h4 className="font-serif text-xl font-bold text-rmyc-navy mb-1">Zero-Single-Use Plastic</h4>
            <p className="text-xs text-slate-700 font-medium leading-relaxed">
              All RMYC fleet operations and wharf socials enforce strict zero-plastic hydration & re-usable sea canteens.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md">
            <Heart className="w-6 h-6 text-rmyc-gold-dark mb-3" />
            <h4 className="font-serif text-xl font-bold text-rmyc-navy mb-1">Coromandel Coast Cleanups</h4>
            <p className="text-xs text-slate-700 font-medium leading-relaxed">
              Quarterly sailing cleanup sweeps organized by member skippers to collect floating debris off Chennai Port.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md">
            <Shield className="w-6 h-6 text-rmyc-gold-dark mb-3" />
            <h4 className="font-serif text-xl font-bold text-rmyc-navy mb-1">Marine Eco-Sailing</h4>
            <p className="text-xs text-slate-700 font-medium leading-relaxed">
              Minimizing engine usage, preserving harbor marine ecology, and respecting coastal wildlife habitats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
