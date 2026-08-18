import React, { useState } from 'react';
import { RMYC_TESTIMONIALS } from '../../data/rmycContent';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const MemberStoriesCarousel: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const currentStory = RMYC_TESTIMONIALS[currentIdx];

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % RMYC_TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + RMYC_TESTIMONIALS.length) % RMYC_TESTIMONIALS.length);
  };

  return (
    <section id="community" className="py-24 bg-white border-y border-slate-200 relative overflow-hidden text-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-rmyc-gold-dark uppercase mb-2 block">
            VOICES OF THE CLUB
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-rmyc-navy tracking-tight">
            Life on the water, as our members describe it.
          </h2>
        </div>

        {/* Carousel Card - Clean Light Theme */}
        <div className="bg-[#f8fafc] border border-slate-300 rounded-3xl p-8 sm:p-12 shadow-xl relative text-center flex flex-col items-center">
          <Quote className="w-12 h-12 text-rmyc-gold-dark/40 mb-6" />

          <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-rmyc-navy italic font-semibold leading-relaxed mb-8 max-w-3xl">
            "{currentStory.quote}"
          </p>

          <div className="flex flex-col items-center gap-2 mb-8">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-rmyc-gold p-0.5 shadow-md">
              <img
                src={currentStory.avatarUrl}
                alt={currentStory.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h4 className="font-serif text-xl font-bold text-rmyc-navy">
              {currentStory.name}
            </h4>
            <div className="flex items-center gap-2 text-xs text-rmyc-gold-dark font-bold uppercase tracking-wider">
              <span>{currentStory.membershipYears}</span>
              <span>·</span>
              <span>{currentStory.role}</span>
            </div>
            <p className="text-xs text-slate-600 font-semibold italic max-w-md">
              "{currentStory.story}"
            </p>
          </div>

          {/* Stepper Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white border border-slate-300 text-slate-700 hover:text-rmyc-navy hover:border-rmyc-gold transition-colors shadow-sm"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {RMYC_TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === currentIdx ? 'bg-rmyc-gold-dark w-6' : 'bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white border border-slate-300 text-slate-700 hover:text-rmyc-navy hover:border-rmyc-gold transition-colors shadow-sm"
              aria-label="Next story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
