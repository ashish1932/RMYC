import React, { useState } from 'react';
import { RMYC_FLEET } from '../../data/rmycContent';
import { Anchor, Users, Ruler, Compass, ShieldAlert, ArrowUpRight } from 'lucide-react';

interface FleetViewerProps {
  onSelectCourse: () => void;
}

export const FleetViewer: React.FC<FleetViewerProps> = ({ onSelectCourse }) => {
  const [selectedBoatId, setSelectedBoatId] = useState<string>('j80');
  const activeBoat = RMYC_FLEET.find((b) => b.id === selectedBoatId) || RMYC_FLEET[0];

  return (
    <section id="fleet" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold tracking-[0.25em] text-rmyc-gold-dark uppercase mb-2 block">
          THE RMYC FLEET
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-rmyc-navy tracking-tight leading-tight">
          Choose your vessel.
        </h2>
        <p className="text-slate-700 text-sm sm:text-base font-medium mt-4">
          From single-handed Olympic class dinghies to high-performance one-design offshore yachts.
        </p>
      </div>

      {/* Fleet Selection Tabs */}
      <div className="flex justify-center gap-3 mb-10 overflow-x-auto pb-2">
        {RMYC_FLEET.map((boat) => {
          const active = boat.id === selectedBoatId;
          return (
            <button
              key={boat.id}
              onClick={() => setSelectedBoatId(boat.id)}
              className={`flex items-center gap-3 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                active
                  ? 'bg-gradient-to-r from-rmyc-gold-light via-rmyc-gold to-rmyc-gold-dark text-rmyc-navy border-rmyc-gold shadow-lg shadow-rmyc-gold/30 scale-105'
                  : 'bg-white text-slate-700 border-slate-300 hover:border-rmyc-gold hover:text-rmyc-navy shadow-sm'
              }`}
            >
              <Anchor className="w-4 h-4" />
              <span>{boat.name}</span>
              <span className="text-[10px] opacity-80 font-semibold">({boat.category})</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Vessel Display Card */}
      <div className="bg-white border border-slate-300 rounded-3xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
        {/* Vessel Visual Showcase */}
        <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[16/10] border border-slate-200 group shadow-xl">
          <img
            src={activeBoat.imageUrl}
            alt={activeBoat.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rmyc-navy/85 via-rmyc-navy/20 to-transparent" />
          
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200 text-xs font-bold text-rmyc-navy shadow-md">
            {activeBoat.category}
          </div>

          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-white">
            <div>
              <h3 className="font-serif text-3xl font-bold drop-shadow-md">{activeBoat.name}</h3>
              <p className="text-xs text-rmyc-gold-light font-bold drop-shadow">{activeBoat.subtitle}</p>
            </div>
            <div className="flex items-center gap-2 bg-black/70 px-4 py-2 rounded-xl backdrop-blur-md border border-white/20 text-xs font-semibold">
              <Users className="w-4 h-4 text-rmyc-gold" />
              <span>{activeBoat.capacity}</span>
            </div>
          </div>
        </div>

        {/* Vessel Specs & Details */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-rmyc-gold-dark uppercase mb-1 block">
              SPECIFICATION & PERFORMANCE
            </span>
            <h4 className="font-serif text-2xl font-bold text-rmyc-navy mb-3">
              {activeBoat.name} — {activeBoat.type}
            </h4>
            <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed mb-6">
              {activeBoat.description}
            </p>

            {/* Ideal For Box */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-rmyc-gold-dark block mb-1">
                Primary Use Case
              </span>
              <span className="text-xs font-semibold text-slate-800">{activeBoat.idealFor}</span>
            </div>

            {/* Spec Matrix Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">Length</span>
                <span className="text-xs font-bold text-rmyc-navy flex items-center gap-1.5 mt-0.5">
                  <Ruler className="w-3.5 h-3.5 text-rmyc-gold-dark" />
                  {activeBoat.length}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">Capacity</span>
                <span className="text-xs font-bold text-rmyc-navy flex items-center gap-1.5 mt-0.5">
                  <Users className="w-3.5 h-3.5 text-rmyc-gold-dark" />
                  {activeBoat.capacity}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">Sail Area</span>
                <span className="text-xs font-bold text-rmyc-navy flex items-center gap-1.5 mt-0.5">
                  <Compass className="w-3.5 h-3.5 text-rmyc-gold-dark" />
                  {activeBoat.specifications.sailArea}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">Hull Rig</span>
                <span className="text-xs font-bold text-rmyc-navy flex items-center gap-1.5 mt-0.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-rmyc-gold-dark" />
                  {activeBoat.specifications.hullMaterial}
                </span>
              </div>
            </div>
          </div>

          {/* Booking / Course Action */}
          <button
            onClick={onSelectCourse}
            className="w-full py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-rmyc-navy bg-gradient-to-r from-rmyc-gold-light via-rmyc-gold to-rmyc-gold-dark hover:brightness-105 transition-all flex items-center justify-center gap-2 shadow-lg shadow-rmyc-gold/20"
          >
            <span>Train on the {activeBoat.name}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
