import React from 'react';
import { Anchor, Phone, Mail, MapPin, Shield } from 'lucide-react';
import { RMYC_CONTACT_INFO } from '../../data/rmycContent';

interface FooterProps {
  onOpenLogin: () => void;
  onOpenMembership: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLogin, onOpenMembership }) => {
  return (
    <footer className="bg-white border-t border-slate-300 pt-16 pb-12 text-slate-700 text-xs relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Heritage */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-rmyc-navy flex items-center justify-center shadow-md">
                <Anchor className="w-5 h-5 text-rmyc-gold" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-xl font-bold tracking-widest text-rmyc-navy">
                  RMYC
                </span>
                <span className="text-[10px] text-rmyc-gold-dark tracking-[0.18em] uppercase font-bold">
                  Royal Madras Yacht Club
                </span>
              </div>
            </div>
            <p className="text-slate-600 font-medium leading-relaxed">
              Established in 1911 by Sir Francis Spring. South India’s premier sailing club and YAI accredited maritime academy on the Bay of Bengal.
            </p>
            <div className="text-[11px] text-rmyc-gold-dark font-bold tracking-wider uppercase">
              Est. 1911 · Chennai Port · India
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-rmyc-navy uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
              Navigation & Services
            </h4>
            <ul className="space-y-2 font-semibold text-slate-700">
              <li>
                <a href="#about" className="hover:text-rmyc-gold-dark transition-colors">
                  About RMYC Heritage
                </a>
              </li>
              <li>
                <a href="#membership" className="hover:text-rmyc-gold-dark transition-colors">
                  Membership Privileges
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-rmyc-gold-dark transition-colors">
                  Learn to Sail (YAI Courses)
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-rmyc-gold-dark transition-colors">
                  J/80 & Laser Fleet Showcase
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-rmyc-gold-dark transition-colors">
                  Regattas & Moonlight Socials
                </a>
              </li>
              <li>
                <a href="#corporate" className="hover:text-rmyc-gold-dark transition-colors">
                  Corporate Sailing Outings
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Actions */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-rmyc-navy uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
              Member & Guest Portals
            </h4>
            <div className="space-y-2.5">
              <button
                onClick={onOpenLogin}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-rmyc-navy border border-slate-300 hover:border-rmyc-gold bg-slate-50 hover:bg-white transition-all flex items-center justify-between shadow-sm"
              >
                <span>Member Portal Login</span>
                <Anchor className="w-3.5 h-3.5 text-rmyc-gold-dark" />
              </button>
              <button
                onClick={onOpenMembership}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-rmyc-navy bg-gradient-to-r from-rmyc-gold-light to-rmyc-gold hover:brightness-105 transition-all flex items-center justify-between shadow-md"
              >
                <span>Apply for Membership</span>
                <Shield className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-rmyc-navy uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
              Dockside Headquarters
            </h4>
            <div className="space-y-2 text-slate-700 font-semibold">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rmyc-gold-dark shrink-0 mt-0.5" />
                <span className="leading-tight">{RMYC_CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rmyc-gold-dark shrink-0" />
                <span>{RMYC_CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rmyc-gold-dark shrink-0" />
                <span>{RMYC_CONTACT_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-bold">
          <div>
            © {new Date().getFullYear()} Royal Madras Yacht Club. Established 1911. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:underline cursor-pointer">YAI Accredited Center</span>
            <span>·</span>
            <span className="hover:underline cursor-pointer">Spring Haven Wharf</span>
            <span>·</span>
            <span className="hover:underline cursor-pointer">Privacy & Governance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
