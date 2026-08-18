import React, { useState } from 'react';
import { Compass, BookOpen, ShieldCheck, User, Calendar, Briefcase, ArrowRight } from 'lucide-react';

interface JourneyOption {
  id: string;
  label: string;
  targetId: string;
  icon: React.ReactNode;
  description: string;
  actionText: string;
}

interface JourneySelectorProps {
  onOpenLogin: () => void;
  onOpenMembership: () => void;
  onOpenCorporate: () => void;
}

export const JourneySelector: React.FC<JourneySelectorProps> = ({
  onOpenLogin,
  onOpenMembership,
  onOpenCorporate,
}) => {
  const [selectedJourney, setSelectedJourney] = useState<string>('learn');

  const journeys: JourneyOption[] = [
    {
      id: 'learn',
      label: 'I want to learn sailing',
      targetId: 'courses',
      icon: <BookOpen className="w-3.5 h-3.5 text-rmyc-gold-dark" />,
      description: 'Start your journey with our YAI-accredited J/80 2-Day Essential Sailing Experience or dinghy courses.',
      actionText: 'Explore Sailing Courses',
    },
    {
      id: 'membership',
      label: 'I want to become a member',
      targetId: 'membership',
      icon: <ShieldCheck className="w-3.5 h-3.5 text-rmyc-gold-dark" />,
      description: 'Unlock lifetime maritime privileges, boat charter access, reciprocal club rights & regattas.',
      actionText: 'View Membership Benefits',
    },
    {
      id: 'member-login',
      label: "I'm already a member",
      targetId: 'login-modal',
      icon: <User className="w-3.5 h-3.5 text-rmyc-gold-dark" />,
      description: 'Access the RMYC Member Portal to reserve J/80 boats, view sailing schedules, and contact crew.',
      actionText: 'Open Member Portal',
    },
    {
      id: 'events',
      label: 'I want to attend an event',
      targetId: 'events',
      icon: <Calendar className="w-3.5 h-3.5 text-rmyc-gold-dark" />,
      description: 'Discover upcoming regattas, full moon moonlight sails, coastal expeditions to Puducherry & club sundowners.',
      actionText: 'View Event Calendar',
    },
    {
      id: 'corporate',
      label: 'I want a corporate experience',
      targetId: 'corporate',
      icon: <Briefcase className="w-3.5 h-3.5 text-rmyc-gold-dark" />,
      description: 'Host team-building regattas, executive offshore sailing days, and leadership workshops on the Bay.',
      actionText: 'Plan Corporate Outing',
    },
  ];

  const currentJourney = journeys.find((j) => j.id === selectedJourney) || journeys[0];

  const handleAction = (journey: JourneyOption) => {
    if (journey.id === 'member-login') {
      onOpenLogin();
    } else if (journey.id === 'membership') {
      const el = document.getElementById('membership');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else onOpenMembership();
    } else if (journey.id === 'corporate') {
      const el = document.getElementById('corporate');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else onOpenCorporate();
    } else {
      const el = document.getElementById(journey.targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-4 bg-white border-2 border-slate-300 rounded-2xl p-3 sm:p-4 shadow-xl relative z-20 text-[#051923]">
      <div className="flex items-center gap-2 mb-2 text-[11px] tracking-[0.18em] font-bold text-rmyc-gold-dark uppercase">
        <Compass className="w-3.5 h-3.5 text-rmyc-gold-dark" />
        <span>What Brings You to RMYC Today?</span>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1.5 mb-3">
        {journeys.map((j) => {
          const active = j.id === selectedJourney;
          return (
            <button
              key={j.id}
              onClick={() => setSelectedJourney(j.id)}
              className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-[11px] font-bold transition-all duration-300 text-left border ${
                active
                  ? 'bg-[#051923] text-white border-[#051923] shadow-md'
                  : 'bg-slate-100 text-[#051923] border-slate-200 hover:bg-slate-200'
              }`}
            >
              <div className="shrink-0">{j.icon}</div>
              <span className="truncate leading-tight">{j.label}</span>
            </button>
          );
        })}
      </div>

      {/* Action Card Preview */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-slate-50 rounded-xl p-3 border border-slate-200">
        <div>
          <h4 className="text-xs sm:text-sm font-bold text-[#051923] mb-0.5 flex items-center gap-2">
            {currentJourney.icon}
            <span>{currentJourney.label}</span>
          </h4>
          <p className="text-[11px] text-slate-700 font-semibold leading-normal max-w-2xl">
            {currentJourney.description}
          </p>
        </div>
        <button
          onClick={() => handleAction(currentJourney)}
          className="shrink-0 flex items-center gap-1.5 px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider text-[#051923] bg-gradient-to-r from-rmyc-gold-light via-rmyc-gold to-rmyc-gold-dark hover:brightness-105 rounded-lg transition-all shadow-md shadow-rmyc-gold/20 hover:scale-102"
        >
          <span>{currentJourney.actionText}</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
