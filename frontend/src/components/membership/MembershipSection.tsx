import React, { useState } from 'react';
import { ShieldCheck, Ship, Globe, Users, Award, ChevronRight } from 'lucide-react';

interface MembershipSectionProps {
  onOpenMembershipModal: () => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onOpenMembershipModal }) => {
  const [activeTier, setActiveTier] = useState<string>('ordinary');

  const tiers = [
    {
      id: 'ordinary',
      title: 'Ordinary Membership',
      badge: 'Most Popular for Local Sailors',
      tagline: 'Full voting & boat charter rights for active sailors in Chennai.',
      benefits: [
        'Unrestricted J/80 & Laser boat reservations at member rates',
        'Full voting rights at Annual General Meetings (AGM)',
        'Clubhouse terrace & bar access for member & up to 4 guests',
        'Entry into all RMYC intra-club regattas & trophy series',
        'Reciprocal privileges at partner yacht clubs globally'
      ]
    },
    {
      id: 'life',
      title: 'Life Membership',
      badge: 'Lifetime Legacy',
      tagline: 'Lifetime privileges with single non-recurring induction.',
      benefits: [
        'Lifetime exemption from annual subscription fees',
        'Priority vessel booking during peak regatta weekends',
        'Permanent harbor lounge & private locker privileges',
        'Invites to Exclusive Commodores Dinner & VIP events',
        'Legacy nomination rights for immediate family members'
      ]
    },
    {
      id: 'corporate',
      title: 'Corporate Membership',
      badge: 'Executive Fleet Access',
      tagline: 'Nominate up to 4 corporate executives for full club access.',
      benefits: [
        'Nomination of 4 senior corporate executives',
        'Annual complimentary executive team-building regatta day',
        'Private dockside venue access for corporate receptions',
        'Branded team entry in the Annual Bay Regatta',
        'Dedicated concierges for corporate harbor events'
      ]
    }
  ];

  const currentTier = tiers.find((t) => t.id === activeTier) || tiers[0];

  return (
    <section id="membership" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold tracking-[0.25em] text-rmyc-gold-dark uppercase mb-2 block">
          JOIN SOUTH INDIA'S PREMIER YACHT CLUB
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-rmyc-navy tracking-tight leading-tight">
          A legacy of maritime privilege.
        </h2>
        <p className="text-slate-700 text-sm sm:text-base font-semibold mt-4">
          Membership at RMYC offers unprecedented access to open ocean sailing, professional fleet charters, and a prestigious community of sea lovers.
        </p>
      </div>

      {/* Privileges Highlights Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div className="p-6 rounded-2xl bg-white border border-slate-300 shadow-md">
          <Ship className="w-8 h-8 text-rmyc-gold-dark mb-4" />
          <h4 className="font-serif text-xl font-bold text-rmyc-navy mb-2">Fleet Access</h4>
          <p className="text-xs text-slate-700 font-medium leading-relaxed">
            Reserve J/80, Laser, and Omega vessels directly from Spring Haven Wharf.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-300 shadow-md">
          <Globe className="w-8 h-8 text-rmyc-gold-dark mb-4" />
          <h4 className="font-serif text-xl font-bold text-rmyc-navy mb-2">Reciprocal Rights</h4>
          <p className="text-xs text-slate-700 font-medium leading-relaxed">
            Enjoy guest privileges at premier yacht clubs across India and worldwide.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-300 shadow-md">
          <Users className="w-8 h-8 text-rmyc-gold-dark mb-4" />
          <h4 className="font-serif text-xl font-bold text-rmyc-navy mb-2">Social Community</h4>
          <p className="text-xs text-slate-700 font-medium leading-relaxed">
            Moonlight sails, sunset cocktail socials, and commodore dinners.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-300 shadow-md">
          <Award className="w-8 h-8 text-rmyc-gold-dark mb-4" />
          <h4 className="font-serif text-xl font-bold text-rmyc-navy mb-2">Regatta Entry</h4>
          <p className="text-xs text-slate-700 font-medium leading-relaxed">
            Compete in national YAI regattas and coastal offshore trophy races.
          </p>
        </div>
      </div>

      {/* Membership Tiers Selector & Banner */}
      <div className="bg-white border border-slate-300 rounded-3xl p-6 sm:p-12 shadow-2xl">
        <div className="flex justify-center gap-3 mb-10 overflow-x-auto pb-2">
          {tiers.map((tier) => {
            const active = tier.id === activeTier;
            return (
              <button
                key={tier.id}
                onClick={() => setActiveTier(tier.id)}
                className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  active
                    ? 'bg-rmyc-navy text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tier.title}
              </button>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3.5 py-1 rounded-full bg-rmyc-gold/20 text-rmyc-gold-dark border border-rmyc-gold/40 text-xs font-bold uppercase tracking-wider mb-3">
            {currentTier.badge}
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-rmyc-navy mb-3">
            {currentTier.title}
          </h3>
          <p className="text-slate-700 text-sm font-semibold mb-8">
            {currentTier.tagline}
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8 text-left space-y-3">
            {currentTier.benefits.map((b, idx) => (
              <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-800">
                <ShieldCheck className="w-4 h-4 text-rmyc-gold-dark shrink-0" />
                <span>{b}</span>
              </div>
            ))}
          </div>

          <button
            onClick={onOpenMembershipModal}
            className="w-full sm:w-auto px-10 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-rmyc-navy bg-gradient-to-r from-rmyc-gold-light via-rmyc-gold to-rmyc-gold-dark hover:brightness-105 rounded-full transition-all shadow-xl shadow-rmyc-gold/20 inline-flex items-center justify-center gap-2"
          >
            <span>Apply for {currentTier.title}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
