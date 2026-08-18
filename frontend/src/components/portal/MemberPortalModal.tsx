import React, { useState } from 'react';
import { X, UserCheck, Anchor, Calendar, LogIn, Users } from 'lucide-react';

interface MemberPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MemberPortalModal: React.FC<MemberPortalModalProps> = ({ isOpen, onClose }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [memberId, setMemberId] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'book' | 'sails' | 'crew'>('book');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-white border border-slate-300 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8 text-slate-800">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-500 hover:text-rmyc-navy bg-slate-100 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isLoggedIn ? (
          <div>
            <div className="text-center mb-8 border-b border-slate-200 pb-6">
              <div className="w-12 h-12 rounded-full bg-rmyc-gold/20 text-rmyc-gold-dark flex items-center justify-center mx-auto mb-3 border border-rmyc-gold/40">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-rmyc-navy">
                Member Portal Entry
              </h3>
              <p className="text-xs text-slate-600 font-medium mt-1">
                Royal Madras Yacht Club · Established 1911
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 max-w-md mx-auto">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Member ID / Email *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. RMYC-1911-042"
                  value={memberId}
                  onChange={(e) => setMemberId(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-rmyc-gold font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Password *
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-rmyc-gold font-medium"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 font-medium">
                <span>Demo Access Note: Enter any credentials to preview member charter booking dashboard.</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-rmyc-navy bg-gradient-to-r from-rmyc-gold-light via-rmyc-gold to-rmyc-gold-dark hover:brightness-105 transition-all flex items-center justify-center gap-2 shadow-lg shadow-rmyc-gold/20"
              >
                <LogIn className="w-4 h-4" />
                <span>Enter Member Dashboard</span>
              </button>
            </form>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-rmyc-gold-dark uppercase">Active Session</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-rmyc-navy">
                  Welcome back, Capt. {memberId || 'RMYC Member'}
                </h3>
              </div>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="text-xs text-slate-600 hover:text-rmyc-navy underline font-bold"
              >
                Sign Out
              </button>
            </div>

            {/* Portal Tabs */}
            <div className="flex gap-2 mb-6 border-b border-slate-200 pb-3 overflow-x-auto">
              {[
                { id: 'book' as const, label: 'Book a Vessel', icon: <Anchor className="w-4 h-4" /> },
                { id: 'sails' as const, label: 'Upcoming Sails', icon: <Calendar className="w-4 h-4" /> },
                { id: 'crew' as const, label: 'Crew Roster', icon: <Users className="w-4 h-4" /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
                    activeTab === tab.id
                      ? 'bg-rmyc-navy text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            {activeTab === 'book' && (
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rmyc-gold-dark">
                  Reserve a Vessel from RMYC Dock
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-bold text-rmyc-navy block">J/80 One-Design Racing Yacht</span>
                    <span className="text-[11px] text-emerald-700 font-bold block mt-0.5">Available for Weekend Charter</span>
                    <button
                      onClick={() => alert('J/80 reservation request sent to Harbor Master!')}
                      className="mt-3 px-4 py-1.5 rounded-lg text-xs font-bold bg-rmyc-gold text-rmyc-navy hover:bg-rmyc-gold-light"
                    >
                      Reserve J/80 Slot
                    </button>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-bold text-rmyc-navy block">Topper Omega Trainer</span>
                    <span className="text-[11px] text-emerald-700 font-bold block mt-0.5">Available Daily</span>
                    <button
                      onClick={() => alert('Omega reservation request sent to Harbor Master!')}
                      className="mt-3 px-4 py-1.5 rounded-lg text-xs font-bold bg-rmyc-gold text-rmyc-navy hover:bg-rmyc-gold-light"
                    >
                      Reserve Omega Slot
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'sails' && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rmyc-gold-dark">
                  Your Confirmed Sailing Logbook
                </h4>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium flex justify-between items-center">
                  <div>
                    <strong className="block text-rmyc-navy">Full Moon Moonlight Cruise</strong>
                    <span className="text-slate-600 text-[11px]">April 4, 2026 · Spring Haven Wharf</span>
                  </div>
                  <span className="text-emerald-700 text-[11px] font-bold">Confirmed</span>
                </div>
              </div>
            )}

            {activeTab === 'crew' && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rmyc-gold-dark">
                  Active RMYC Crew Finder
                </h4>
                <p className="text-xs text-slate-700 font-medium">
                  Connect with fellow member helmsmen and foredeck crew for upcoming race series.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
