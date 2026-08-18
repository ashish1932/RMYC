import React, { useState } from 'react';
import {
  X,
  Smartphone,
  Anchor,
  Wind,
  Waves,
  Calendar,
  QrCode,
  Compass,
  Utensils,
  ChevronRight,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';

interface MobileSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileSimulatorModal: React.FC<MobileSimulatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'home' | 'pass' | 'sails' | 'weather' | 'dining'>('home');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [selectedVessel, setSelectedVessel] = useState('J80 Class Keelboat');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div className="relative flex flex-col items-center max-w-4xl w-full max-h-[92vh]">
        {/* Top Control Bar */}
        <div className="w-full flex items-center justify-between bg-slate-900/90 text-white px-6 py-3 rounded-2xl border border-slate-800 mb-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-rmyc-gold/20 text-rmyc-gold">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-100 flex items-center gap-2">
                RMYC iOS & Android App Simulator
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono uppercase">
                  Live Preview
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Interactive mobile test environment for Royal Madras Yacht Club members
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setActiveTab('home');
                setBookingSuccess(false);
              }}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors text-xs font-semibold flex items-center gap-1.5"
              title="Reset Simulator"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Smartphone Hardware Mockup Frame */}
        <div className="relative w-[370px] h-[720px] bg-slate-950 rounded-[48px] p-3 shadow-[0_0_60px_rgba(0,0,0,0.8)] border-4 border-slate-800 ring-1 ring-slate-700/50 flex flex-col overflow-hidden">
          {/* Side Hardware Buttons */}
          <div className="absolute -left-[7px] top-28 w-[3px] h-10 bg-slate-700 rounded-l-md" />
          <div className="absolute -left-[7px] top-42 w-[3px] h-12 bg-slate-700 rounded-l-md" />
          <div className="absolute -right-[7px] top-32 w-[3px] h-16 bg-slate-700 rounded-r-md" />

          {/* Inner Phone Screen */}
          <div className="relative flex-1 bg-[#070F1E] rounded-[38px] overflow-hidden flex flex-col text-slate-100 select-none">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-50 w-24 h-5 bg-black rounded-full flex items-center justify-between px-2.5 shadow-md">
              <div className="w-2 h-2 rounded-full bg-slate-800" />
              <div className="w-3 h-3 rounded-full bg-[#0d1424] border border-slate-800" />
            </div>

            {/* Mobile Status Bar */}
            <div className="pt-3 px-6 pb-2 flex justify-between items-center text-[10px] font-semibold text-slate-400 z-40 bg-[#070F1E]">
              <span>9:41</span>
              <div className="flex items-center gap-1.5">
                <Wind className="w-3 h-3 text-rmyc-gold" />
                <span>5G</span>
                <div className="w-4 h-2 border border-slate-400 rounded-sm p-0.5 flex items-center">
                  <div className="w-full h-full bg-emerald-400 rounded-xs" />
                </div>
              </div>
            </div>

            {/* App Header Bar */}
            <div className="px-5 py-2.5 bg-[#0A192F] border-b border-slate-800 flex justify-between items-center z-30 shadow-md">
              <div>
                <span className="text-[10px] font-bold text-rmyc-gold tracking-widest block uppercase">
                  ROYAL MADRAS YACHT CLUB
                </span>
                <span className="text-[9px] text-slate-400 font-medium">Est. 1911 · Chennai Harbour</span>
              </div>
              <button 
                onClick={() => setActiveTab('pass')}
                className="bg-rmyc-gold/20 border border-rmyc-gold/40 text-rmyc-gold px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider flex items-center gap-1 hover:bg-rmyc-gold/30 transition-colors"
              >
                <ShieldCheck className="w-3 h-3" />
                <span>PASS</span>
              </button>
            </div>

            {/* Scrollable Screen Content */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 text-slate-200 text-xs custom-scrollbar">
              {activeTab === 'home' && (
                <div className="space-y-4 animate-fadeIn">
                  {/* Digital Member Card */}
                  <div 
                    onClick={() => setActiveTab('pass')}
                    className="cursor-pointer bg-gradient-to-br from-[#0F2342] via-[#0E1E38] to-[#0A162B] border border-slate-700/80 rounded-2xl p-4 shadow-lg hover:border-rmyc-gold/50 transition-all relative overflow-hidden group"
                  >
                    <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-rmyc-gold/10 rounded-full blur-xl group-hover:bg-rmyc-gold/20 transition-all" />
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className="text-[9px] font-bold text-rmyc-gold uppercase tracking-wider block">DIGITAL PASS</span>
                        <h4 className="font-serif font-bold text-base text-white">Captain Ashish Kumar</h4>
                        <p className="text-[10px] text-slate-400 font-mono mt-0.5">RMYC-1911-0842</p>
                      </div>
                      <div className="p-2 bg-white/10 rounded-xl backdrop-blur-md border border-white/10">
                        <QrCode className="w-5 h-5 text-rmyc-gold" />
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-800 flex justify-between text-[10px]">
                      <div>
                        <span className="text-slate-500 font-medium block">TIER</span>
                        <span className="text-slate-200 font-bold">Life Member</span>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-500 font-medium block">SKIPPER RATING</span>
                        <span className="text-emerald-400 font-bold">J80 Keelboat Master</span>
                      </div>
                    </div>
                  </div>

                  {/* Weather Snapshot Grid */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">Live Marine Weather</span>
                      <span className="text-[9px] text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live updates
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-2.5 text-center">
                        <Wind className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                        <span className="font-bold text-sm text-white block">14 Knots</span>
                        <span className="text-[9px] text-slate-400">Wind (ENE)</span>
                      </div>
                      <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-2.5 text-center">
                        <Waves className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                        <span className="font-bold text-sm text-white block">1.2 m</span>
                        <span className="text-[9px] text-slate-400">Swell Height</span>
                      </div>
                      <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-2.5 text-center">
                        <Anchor className="w-4 h-4 text-rmyc-gold mx-auto mb-1" />
                        <span className="font-bold text-sm text-white block">14:30 IST</span>
                        <span className="text-[9px] text-slate-400">High Tide</span>
                      </div>
                      <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-2.5 text-center">
                        <Compass className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                        <span className="font-bold text-sm text-white block">31°C</span>
                        <span className="text-[9px] text-slate-400">Sea Temp</span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Quick Actions */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-1">Quick Reservations</span>
                    <button
                      onClick={() => setActiveTab('sails')}
                      className="w-full bg-[#0F172A] hover:bg-[#1E293B] border border-slate-800 rounded-xl p-3 flex items-center justify-between text-left transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                          <Anchor className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-bold text-xs text-white block">Book Sailing Slot</span>
                          <span className="text-[10px] text-slate-400">Reserve J80, Seabird, or Enterprise</span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-rmyc-gold" />
                    </button>

                    <button
                      onClick={() => setActiveTab('dining')}
                      className="w-full bg-[#0F172A] hover:bg-[#1E293B] border border-slate-800 rounded-xl p-3 flex items-center justify-between text-left transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                          <Utensils className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-bold text-xs text-white block">Harbour Lounge Dining</span>
                          <span className="text-[10px] text-slate-400">Table reservation & pre-orders</span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-rmyc-gold" />
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'pass' && (
                <div className="space-y-4 animate-fadeIn text-center">
                  <div className="bg-gradient-to-b from-[#0F2342] to-[#0A162B] border border-rmyc-gold/40 rounded-3xl p-5 shadow-2xl relative overflow-hidden">
                    <div className="w-12 h-12 rounded-full bg-rmyc-gold/20 text-rmyc-gold border border-rmyc-gold/50 flex items-center justify-center mx-auto mb-2">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif font-bold text-lg text-white">MEMBER ACCESS PASS</h3>
                    <p className="text-[10px] text-rmyc-gold uppercase tracking-widest font-semibold">Royal Madras Yacht Club</p>

                    {/* QR Code Demo */}
                    <div className="bg-white p-3 rounded-2xl w-36 h-36 mx-auto my-4 shadow-inner flex flex-col items-center justify-center border-4 border-slate-900">
                      <QrCode className="w-28 h-28 text-slate-900" />
                    </div>

                    <p className="text-[10px] text-slate-400 font-mono">SCAN AT DOCK GATE OR LOUNGE</p>
                    <p className="text-[11px] font-bold text-white mt-1">Captain Ashish Kumar</p>
                    <p className="text-[9px] text-emerald-400 font-medium">Valid until Dec 2026</p>
                  </div>

                  <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-3 text-left space-y-1.5 text-[11px]">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Member Status:</span>
                      <span className="text-emerald-400 font-bold">ACTIVE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Berth Access:</span>
                      <span className="text-white font-bold">Harbour Dock A-12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">YAI Certification:</span>
                      <span className="text-rmyc-gold font-bold">Level 3 Master</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'sails' && (
                <div className="space-y-3 animate-fadeIn">
                  <h4 className="font-bold text-sm text-white">Book a Sailing Vessel</h4>
                  <p className="text-[10px] text-slate-400">Select vessel class and preferred sailing window</p>

                  {bookingSuccess ? (
                    <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-2xl p-4 text-center space-y-2">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                        <Anchor className="w-5 h-5" />
                      </div>
                      <h5 className="font-bold text-sm text-emerald-300">Reservation Confirmed!</h5>
                      <p className="text-[11px] text-slate-300">Booked: <span className="font-semibold text-white">{selectedVessel}</span></p>
                      <p className="text-[10px] text-slate-400 font-mono">Confirmation Code: #RMYC-SLOT-993</p>
                      <button
                        onClick={() => setBookingSuccess(false)}
                        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 rounded-xl text-xs mt-2 transition-colors"
                      >
                        Book Another Slot
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2.5">
                      {[
                        { title: 'J80 Class Keelboat', sub: 'Racing Keelboat · Capacity 5 Crew', price: 'Included with Life Membership' },
                        { title: 'Seabird Class Dinghy', sub: 'Classic Vintage Sailboat · Capacity 3', price: 'Free Slot Reservation' },
                        { title: 'Enterprise Class', sub: 'Tactical Racing Dinghy · Capacity 2', price: 'Available Today' },
                      ].map((item) => (
                        <div
                          key={item.title}
                          onClick={() => setSelectedVessel(item.title)}
                          className={`p-3 rounded-xl border transition-all cursor-pointer ${
                            selectedVessel === item.title
                              ? 'bg-[#0F2342] border-rmyc-gold'
                              : 'bg-[#0F172A] border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <span className="font-bold text-xs text-white">{item.title}</span>
                            {selectedVessel === item.title && (
                              <span className="w-2 h-2 rounded-full bg-rmyc-gold" />
                            )}
                          </div>
                          <p className="text-[10px] text-slate-400 mt-0.5">{item.sub}</p>
                          <span className="text-[9px] text-emerald-400 font-semibold block mt-1.5">{item.price}</span>
                        </div>
                      ))}

                      <button
                        onClick={() => setBookingSuccess(true)}
                        className="w-full bg-gradient-to-r from-rmyc-gold to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-2.5 rounded-xl text-xs shadow-lg mt-3 transition-all"
                      >
                        Confirm Slot Reservation
                      </button>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'weather' && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-3">
                    <h4 className="font-bold text-xs text-white flex items-center gap-1.5 mb-2">
                      <Compass className="w-4 h-4 text-cyan-400" />
                      Bay of Bengal Wind & Weather Telemetry
                    </h4>
                    <p className="text-[10px] text-slate-400 leading-relaxed">
                      Optimal sailing conditions detected for afternoon offshore runs. Moderate ENE breeze expected to sustain through 18:00 IST.
                    </p>
                  </div>

                  <div className="bg-[#0F2342] border border-slate-800 rounded-xl p-3 space-y-2">
                    <span className="text-[10px] font-bold text-rmyc-gold uppercase tracking-wider block">TODAY'S TIDE CHART</span>
                    <div className="flex justify-between items-center text-xs pt-1 border-t border-slate-800">
                      <span className="text-slate-400">Low Tide</span>
                      <span className="text-white font-mono">08:15 IST (0.3m)</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pt-1 border-t border-slate-800">
                      <span className="text-slate-400">High Tide</span>
                      <span className="text-emerald-400 font-mono font-bold">14:30 IST (1.2m)</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pt-1 border-t border-slate-800">
                      <span className="text-slate-400">Next Low Tide</span>
                      <span className="text-white font-mono">20:45 IST (0.4m)</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'dining' && (
                <div className="space-y-3 animate-fadeIn">
                  <h4 className="font-bold text-sm text-white">Harbour Lounge & Deck Dining</h4>
                  <p className="text-[10px] text-slate-400">Reserve harbour-side tables & order club specials</p>

                  <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-3 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-xs text-white">Harbour-Front Deck Table</span>
                      <span className="text-[9px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">Available</span>
                    </div>
                    <p className="text-[10px] text-slate-400">Sunset seating overlooking the marina & sailboats</p>
                    <button className="w-full bg-rmyc-navy border border-rmyc-gold/40 text-rmyc-gold font-bold py-2 rounded-xl text-xs hover:bg-rmyc-gold hover:text-slate-950 transition-colors mt-1">
                      Reserve Table for Tonight (19:30)
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Smartphone Bottom Navigation Bar */}
            <div className="bg-[#0A192F] border-t border-slate-800 px-3 py-2 flex justify-around items-center z-40">
              {[
                { id: 'home', label: 'Home', icon: <Anchor className="w-4 h-4" /> },
                { id: 'pass', label: 'Pass', icon: <ShieldCheck className="w-4 h-4" /> },
                { id: 'sails', label: 'Book', icon: <Calendar className="w-4 h-4" /> },
                { id: 'weather', label: 'Marine', icon: <Waves className="w-4 h-4" /> },
                { id: 'dining', label: 'Dining', icon: <Utensils className="w-4 h-4" /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex flex-col items-center gap-0.5 transition-colors ${
                    activeTab === tab.id
                      ? 'text-rmyc-gold font-bold'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {tab.icon}
                  <span className="text-[9px] tracking-tight">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Smartphone Home Indicator Bar */}
            <div className="py-1 bg-[#0A192F] flex justify-center">
              <div className="w-28 h-1 bg-slate-700 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
