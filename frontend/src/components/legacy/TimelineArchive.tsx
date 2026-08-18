import React, { useState } from 'react';
import { RMYC_TIMELINE } from '../../data/rmycContent';
import { History, Shield, BookOpen, ChevronRight } from 'lucide-react';

export const TimelineArchive: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeMilestone = RMYC_TIMELINE[activeIdx];

  return (
    <section className="py-24 bg-[#f1f5f9] border-y border-slate-200 relative overflow-hidden text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-rmyc-navy border border-rmyc-gold/50 text-xs font-bold uppercase tracking-widest mb-3 shadow-sm">
            <History className="w-4 h-4 text-rmyc-gold-dark" />
            <span>Museum Archive & Heritage</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-rmyc-navy tracking-tight leading-tight">
            Over a century on the Bay of Bengal.
          </h2>
          <p className="text-slate-700 text-sm sm:text-base font-semibold mt-4">
            Established in 1911 by Sir Francis Spring, RMYC has shaped the maritime sport, seamanship, and nautical traditions of South India.
          </p>
        </div>

        {/* Timeline Slider Track */}
        <div className="mb-12 overflow-x-auto pb-4 scrollbar-thin">
          <div className="flex items-center justify-between min-w-[700px] border-b-2 border-slate-300 relative px-4">
            {/* Progress line */}
            <div
              className="absolute top-1/2 left-0 h-1 bg-rmyc-gold transition-all duration-500 rounded-full"
              style={{
                width: `${(activeIdx / (RMYC_TIMELINE.length - 1)) * 100}%`,
              }}
            />

            {RMYC_TIMELINE.map((item, idx) => {
              const active = idx === activeIdx;
              return (
                <button
                  key={item.year}
                  onClick={() => setActiveIdx(idx)}
                  className="relative z-10 flex flex-col items-center group focus:outline-none"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-serif text-sm font-bold transition-all duration-300 ${
                      active
                        ? 'bg-rmyc-navy text-white ring-4 ring-rmyc-gold/40 scale-125 shadow-lg'
                        : 'bg-white text-slate-700 border border-slate-300 hover:border-rmyc-gold'
                    }`}
                  >
                    {item.year.slice(2)}
                  </div>
                  <span
                    className={`mt-3 text-xs font-bold tracking-wider transition-colors ${
                      active ? 'text-rmyc-navy font-bold' : 'text-slate-500 group-hover:text-slate-900'
                    }`}
                  >
                    {item.year}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Milestone Museum Card - Clean Light Theme */}
        <div className="bg-white border border-slate-300 rounded-3xl p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Milestone Image: Real Historic Sailing Boat / Maritime Dock */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[4/3] border border-slate-200 group shadow-md">
            <img
              src={activeMilestone.imageUrl}
              alt={activeMilestone.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rmyc-navy/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white bg-rmyc-navy/85 px-4 py-2 rounded-lg backdrop-blur-md border border-white/20">
              <span className="font-serif italic font-semibold">Archival Entry: {activeMilestone.year}</span>
              <Shield className="w-4 h-4 text-rmyc-gold" />
            </div>
          </div>

          {/* Milestone Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-5xl sm:text-6xl font-serif font-bold text-slate-300 mb-2">
              {activeMilestone.year}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-rmyc-navy mb-4 leading-snug">
              {activeMilestone.title}
            </h3>
            <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed mb-6">
              {activeMilestone.description}
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-300 flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-rmyc-gold-dark shrink-0 mt-0.5" />
              <div className="text-xs text-slate-800 italic leading-relaxed font-medium">
                <strong className="text-rmyc-navy font-bold not-italic block mb-1">
                  Historical Record Note:
                </strong>
                "{activeMilestone.archivalNote}"
              </div>
            </div>

            {/* Stepper Navigation Buttons */}
            <div className="flex items-center gap-3 mt-8 pt-4 border-t border-slate-200">
              <button
                disabled={activeIdx === 0}
                onClick={() => setActiveIdx((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg border border-slate-300 text-slate-700 hover:border-rmyc-gold hover:text-rmyc-navy disabled:opacity-30 transition-all bg-white shadow-sm"
              >
                Previous Era
              </button>
              <button
                disabled={activeIdx === RMYC_TIMELINE.length - 1}
                onClick={() => setActiveIdx((prev) => Math.min(RMYC_TIMELINE.length - 1, prev + 1))}
                className="px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg bg-gradient-to-r from-rmyc-gold-light via-rmyc-gold to-rmyc-gold-dark text-rmyc-navy hover:brightness-105 disabled:opacity-30 transition-all flex items-center gap-1 shadow-md"
              >
                <span>Next Era</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
