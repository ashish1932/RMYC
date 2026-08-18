import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ExperiencePanelsProps {
  onOpenMembership: () => void;
}

export const ExperiencePanels: React.FC<ExperiencePanelsProps> = ({ onOpenMembership }) => {
  const panels = [
    {
      id: 0,
      category: 'FOR MEMBERS',
      headline: 'Sail. Connect. Belong.',
      subtitle: 'For RMYC members - book boats, manage trips, bring your crew. Your berth at the Bay of Bengal awaits.',
      buttonText: 'Member Portal',
      action: onOpenMembership,
      imageUrl: '/rmyc_marina_docks_aerial.png',
    },
    {
      id: 1,
      category: 'LEARN TO SAIL',
      headline: 'Learn to sail. Properly.',
      subtitle: 'YAI-accredited sailing courses from beginner to instructor level. National certification.',
      buttonText: 'Learn More',
      action: () => {
        const el = document.getElementById('courses');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
      imageUrl: '/rmyc_sailing_lesson_deck.png',
    },
    {
      id: 2,
      category: 'EVENTS & SOCIALS',
      headline: 'Race. Gather. Explore.',
      subtitle: 'Regattas, moonlight sails, expeditions and community gatherings — everything happening on and off the water.',
      buttonText: 'View Events',
      action: () => {
        const el = document.getElementById('events');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
      imageUrl: '/rmyc_sailor_crew_cockpit.png',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-bold tracking-[0.25em] text-[#b5883d] uppercase mb-2 block">
          YOUR JOURNEY
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#0d3d4d] tracking-tight">
          Three ways to the water.
        </h2>
      </div>

      {/* 3 Cards Grid - Pixel Perfect Match to User's Target Design */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {panels.map((panel) => (
          <div
            key={panel.id}
            className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group"
          >
            {/* Top Half: Pure Image Frame */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={panel.imageUrl}
                alt={panel.headline}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Bottom Half: Pure White Content Card */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 bg-white">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#b5883d] uppercase mb-2 block">
                  {panel.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d3d4d] mb-3">
                  {panel.headline}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-6">
                  {panel.subtitle}
                </p>
              </div>

              <div>
                <button
                  onClick={panel.action}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-[#051923] bg-[#d4a55a] hover:bg-[#c59b27] transition-colors shadow-sm"
                >
                  <span>{panel.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
