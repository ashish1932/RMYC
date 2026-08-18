import React from 'react';
import { ChevronDown, Compass, Award } from 'lucide-react';
import { JourneySelector } from './JourneySelector';

interface HeroProps {
  onOpenLogin: () => void;
  onOpenMembership: () => void;
  onOpenCorporate: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenLogin,
  onOpenMembership,
  onOpenCorporate,
}) => {
  const scrollToExplore = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCourses = () => {
    const el = document.getElementById('courses');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-screen pt-20 pb-10 px-4 sm:px-6 lg:px-8 flex flex-col justify-between items-center overflow-hidden bg-[#f4f8fa]">
      {/* Background Image: High-Resolution Authentic RMYC Ocean Sailing Yacht */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-85 scale-105 transition-transform duration-1000 animate-wave-pulse"
          style={{
            backgroundImage: `url('/rmyc_hero_ocean_sailing.png')`,
          }}
        />
        {/* Soft Sunlit Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-[#f4f8fa]" />
      </div>

      {/* Hero Central Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center pt-2 sm:pt-4">
        {/* Heritage Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-rmyc-gold/60 text-[#051923] text-[11px] sm:text-xs tracking-[0.2em] uppercase font-bold mb-3 shadow-md">
          <Compass className="w-3.5 h-3.5 text-rmyc-gold-dark" />
          <span>EST. 1911 · CHENNAI · BAY OF BENGAL</span>
        </div>

        {/* Small supporting title */}
        <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-rmyc-gold-dark mb-1">
          ROYAL MADRAS YACHT CLUB
        </span>

        {/* Main Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#051923] tracking-tight leading-[1.1] mb-4">
          The ocean has been <br />
          <span className="text-[#b5883d] italic font-serif">waiting for you.</span>
        </h1>

        {/* Supporting Statement Box */}
        <div className="max-w-2xl bg-white/95 border border-slate-300 shadow-sm p-3 sm:p-4 rounded-2xl mb-4 backdrop-blur-md">
          <p className="text-xs sm:text-sm md:text-base text-[#051923] font-bold leading-relaxed">
            South India’s first and oldest sailing club. Experience over 115 years of maritime heritage, professional YAI-accredited training, and an extraordinary life on the water.
          </p>
        </div>

        {/* Primary & Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-3">
          <button
            onClick={scrollToExplore}
            className="w-full sm:w-auto px-7 py-3 text-xs font-bold uppercase tracking-widest text-[#051923] bg-gradient-to-r from-rmyc-gold-light via-rmyc-gold to-rmyc-gold-dark hover:brightness-105 rounded-full transition-all duration-300 shadow-lg shadow-rmyc-gold/30 hover:shadow-rmyc-gold/50 hover:-translate-y-0.5 active:translate-y-0"
          >
            Explore RMYC
          </button>
          <button
            onClick={scrollToCourses}
            className="w-full sm:w-auto px-7 py-3 text-xs font-bold uppercase tracking-widest text-[#051923] border-2 border-[#051923] hover:border-rmyc-gold rounded-full transition-all duration-300 bg-white hover:bg-slate-50 shadow-md"
          >
            Learn to Sail
          </button>
        </div>

        {/* Accreditation Pill */}
        <div className="flex items-center gap-2 text-[11px] text-[#051923] font-bold bg-white px-3.5 py-1 rounded-full border border-slate-300 shadow-sm mb-4">
          <Award className="w-3.5 h-3.5 text-rmyc-gold-dark" />
          <span>YAI Accredited Training Center · Yachting Association of India</span>
        </div>

        {/* Requirement #23: Interactive Journey Selector */}
        <JourneySelector
          onOpenLogin={onOpenLogin}
          onOpenMembership={onOpenMembership}
          onOpenCorporate={onOpenCorporate}
        />
      </div>

      {/* Prominent & Always Visible Scroll to Discover Indicator */}
      <div className="relative z-20 pt-4 pb-2 text-center flex flex-col items-center">
        <button
          onClick={scrollToExplore}
          className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/95 border border-rmyc-gold/60 text-[#051923] hover:text-rmyc-gold-dark transition-all text-xs font-bold uppercase tracking-[0.18em] shadow-md hover:bg-white hover:shadow-lg focus:outline-none"
        >
          <span>Scroll to discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-rmyc-gold-dark" />
        </button>
      </div>
    </section>
  );
};
