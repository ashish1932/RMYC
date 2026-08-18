import React from 'react';
import { Calendar, Anchor, MapPin, Award } from 'lucide-react';
import { RMYC_STATS } from '../../data/rmycContent';

export const StatisticsCounter: React.FC = () => {
  const icons = [
    <Calendar className="w-6 h-6 text-rmyc-gold-dark" />,
    <Anchor className="w-6 h-6 text-rmyc-gold-dark" />,
    <MapPin className="w-6 h-6 text-rmyc-gold-dark" />,
    <Award className="w-6 h-6 text-rmyc-gold-dark" />,
  ];

  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xl shadow-slate-200/80 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute -top-24 -left-24 w-60 h-60 bg-rmyc-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          {RMYC_STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center p-4 transition-transform duration-500 hover:scale-105 ${
                idx > 0 ? 'pt-6 lg:pt-4' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-rmyc-gold/15 border border-rmyc-gold/40 flex items-center justify-center mb-4 shadow-sm">
                {icons[idx]}
              </div>
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-rmyc-navy tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold tracking-wider text-slate-800 uppercase mb-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-rmyc-gold-dark font-medium">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
