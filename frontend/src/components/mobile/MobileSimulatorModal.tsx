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
        <div className="w-full flex items-center justify-between bg-white text-slate-900 px-6 py-3 rounded-2xl border border-slate-200 mb-4 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-rmyc-gold/20 text-rmyc-navy">
              <Smartphone className="w-5 h-5 text-rmyc-gold-dark" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-rmyc-navy flex items-center gap-2">
                RMYC iOS & Android App Preview
                <span className="text-[10px] bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded-full font-mono uppercase font-bold">
                  Interactive Mobile App
                </span>
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                Live interactive view of the Royal Madras Yacht Club mobile app
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setActiveTab('home');
                setBookingSuccess(false);
              }}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors text-xs font-semibold flex items-center gap-1.5 border border-slate-300"
              title="Reset View"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 hover:bg-rose-600 text-slate-700 hover:text-white transition-colors border border-slate-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Smartphone Hardware Mockup Frame */}
        <div className="relative w-[370px] h-[720px] bg-slate-900 rounded-[48px] p-3 shadow-[0_0_60px_rgba(0,0,0,0.5)] border-4 border-slate-700 ring-1 ring-slate-400/40 flex flex-col overflow-hidden">
          {/* Side Hardware Buttons */}
          <div className="absolute -left-[7px] top-28 w-[3px] h-10 bg-slate-600 rounded-l-md" />
          <div className="absolute -left-[7px] top-42 w-[3px] h-12 bg-slate-600 rounded-l-md" />
          <div className="absolute -right-[7px] top-32 w-[3px] h-16 bg-slate-600 rounded-r-md" />

          {/* Inner Phone Screen (Light Theme) */}
          <div className="relative flex-1 bg-[#F8FAFC] rounded-[38px] overflow-hidden flex flex-col text-slate-800 select-none">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-50 w-24 h-5 bg-slate-950 rounded-full flex items-center justify-between px-2.5 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-slate-800" />
              <div className="w-3 h-3 rounded-full bg-[#0d1424] border border-slate-800" />
            </div>

            {/* Mobile Status Bar */}
            <div className="pt-3 px-6 pb-2 flex justify-between items-center text-[10px] font-bold text-slate-700 z-40 bg-white border-b border-slate-100">
              <span>9:41</span>
              <div className="flex items-center gap-1.5">
                <Wind className="w-3 h-3 text-rmyc-navy" />
                <span>5G</span>
                <div className="w-4 h-2 border border-slate-700 rounded-sm p-0.5 flex items-center">
                  <div className="w-full h-full bg-emerald-600 rounded-xs" />
                </div>
              </div>
            </div>

            {/* App Header Bar */}
            <div className="px-5 py-2.5 bg-white border-b border-slate-200 flex justify-between items-center z-30 shadow-xs">
              <div>
                <span className="text-[10px] font-extrabold text-rmyc-navy tracking-widest block uppercase">
                  ROYAL MADRAS YACHT CLUB
                </span>
                <span className="text-[9px] text-slate-500 font-semibold">Est. 1911 · Chennai Harbour</span>
              </div>
              <button 
                onClick={() => setActiveTab('pass')}
                className="bg-amber-50 border border-rmyc-gold text-amber-900 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider flex items-center gap-1 hover:bg-amber-100 transition-colors"
              >
                <ShieldCheck className="w-3 h-3 text-rmyc-gold-dark" />
                <span>PASS</span>
              </button>
            </div>

            {/* Scrollable Screen Content */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 text-slate-800 text-xs custom-scrollbar">
              {activeTab === 'home' && (
                <div className="space-y-4 animate-fadeIn">
                  {/* Digital Member Card */}
                  <div 
                    onClick={() => setActiveTab('pass')}
                    className="cursor-pointer bg-gradient-to-br from-[#0F2342] via-[#0A192F] to-[#071325] border border-rmyc-gold/50 rounded-2xl p-4 shadow-md hover:shadow-lg transition-all relative overflow-hidden group text-white"
                  >
                    <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-rmyc-gold/15 rounded-full blur-xl group-hover:bg-rmyc-gold/25 transition-all" />
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className="text-[9px] font-bold text-rmyc-gold uppercase tracking-wider block">DIGITAL PASS</span>
                        <h4 className="font-serif font-bold text-base text-white">Captain Ashish Kumar</h4>
                        <p className="text-[10px] text-slate-300 font-mono mt-0.5">RMYC-1911-0842</p>
                      </div>
                      <div className="p-2 bg-white/10 rounded-xl backdrop-blur-md border border-white/20">
                        <QrCode className="w-5 h-5 text-rmyc-gold" />
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-700/80 flex justify-between text-[10px]">
                      <div>
                        <span className="text-slate-400 font-medium block">TIER</span>
                        <span className="text-white font-bold">Life Member</span>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-400 font-medium block">SKIPPER RATING</span>
                        <span className="text-emerald-400 font-bold">J80 Keelboat Master</span>
                      </div>
                    </div>
                  </div>

                  {/* Weather Snapshot Grid */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-rmyc-navy">Live Marine Weather</span>
                      <span className="text-[9px] text-emerald-700 font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live updates
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white border border-slate-200 rounded-xl p-2.5 text-center shadow-xs">
                        <Wind className="w-4 h-4 text-cyan-600 mx-auto mb-1" />
                        <span className="font-bold text-sm text-slate-900 block">14 Knots</span>
                        <span className="text-[9px] text-slate-500 font-medium">Wind (ENE)</span>
                      </div>
                      <div className="bg-white border border-slate-200 rounded-xl p-2.5 text-center shadow-xs">
                        <Waves className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                        <span className="font-bold text-sm text-slate-900 block">1.2 m</span>
                        <span className="text-[9px] text-slate-500 font-medium">Swell Height</span>
                      </div>
                      <div className="bg-white border border-slate-200 rounded-xl p-2.5 text-center shadow-xs">
                        <Anchor className="w-4 h-4 text-rmyc-navy mx-auto mb-1" />
                        <span className="font-bold text-sm text-slate-900 block">14:30 IST</span>
                        <span className="text-[9px] text-slate-500 font-medium">High Tide</span>
                      </div>
                      <div className="bg-white border border-slate-200 rounded-xl p-2.5 text-center shadow-xs">
                        <Compass className="w-4 h-4 text-amber-600 mx-auto mb-1" />
                        <span className="font-bold text-sm text-slate-900 block">31°C</span>
                        <span className="text-[9px] text-slate-500 font-medium">Sea Temp</span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Quick Actions */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-rmyc-navy block mb-1">Quick Reservations</span>
                    <button
                      onClick={() => setActiveTab('sails')}
                      className="w-full bg-white hover:bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between text-left transition-all shadow-xs"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-100">
                          <Anchor className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-bold text-xs text-slate-900 block">Book Sailing Slot</span>
                          <span className="text-[10px] text-slate-500">Reserve J80, Seabird, or Enterprise</span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-rmyc-navy" />
                    </button>

                    <button
                      onClick={() => setActiveTab('dining')}
                      className="w-full bg-white hover:bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between text-left transition-all shadow-xs"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-amber-50 text-amber-700 border border-amber-100">
                          <Utensils className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-bold text-xs text-slate-900 block">Harbour Lounge Dining</span>
                          <span className="text-[10px] text-slate-500">Table reservation & pre-orders</span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-rmyc-navy" />
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'pass' && (
                <div className="space-y-4 animate-fadeIn text-center">
                  <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm relative overflow-hidden">
                    <div className="w-12 h-12 rounded-full bg-amber-50 text-rmyc-navy border border-rmyc-gold flex items-center justify-center mx-auto mb-2 shadow-xs">
                      <ShieldCheck className="w-6 h-6 text-rmyc-gold-dark" />
                    </div>
                    <h3 className="font-serif font-bold text-lg text-rmyc-navy">MEMBER ACCESS PASS</h3>
                    <p className="text-[10px] text-rmyc-gold-dark uppercase tracking-widest font-extrabold">Royal Madras Yacht Club</p>

                    <div className="bg-slate-900 p-3 rounded-2xl w-36 h-36 mx-auto my-4 shadow-md flex flex-col items-center justify-center border-4 border-slate-800">
                      <QrCode className="w-28 h-28 text-white" />
                    </div>

                    <p className="text-[10px] text-slate-500 font-mono font-semibold">SCAN AT DOCK GATE OR LOUNGE</p>
                    <p className="text-[12px] font-bold text-slate-900 mt-1">Captain Ashish Kumar</p>
                    <p className="text-[10px] text-emerald-700 font-extrabold">Valid until Dec 2026</p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-3 text-left space-y-2 text-[11px] shadow-xs">
                    <div className="flex justify-between border-b border-slate-100 pb-1.5">
                      <span className="text-slate-500">Member Status:</span>
                      <span className="text-emerald-700 font-bold">ACTIVE</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1.5">
                      <span className="text-slate-500">Berth Access:</span>
                      <span className="text-slate-900 font-bold">Harbour Dock A-12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">YAI Certification:</span>
                      <span className="text-rmyc-navy font-bold">Level 3 Master</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'sails' && (
                <div className="space-y-3 animate-fadeIn">
                  <h4 className="font-bold text-sm text-rmyc-navy">Book a Sailing Vessel</h4>
                  <p className="text-[10px] text-slate-500">Select vessel class and preferred sailing window</p>

                  {bookingSuccess ? (
                    <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-4 text-center space-y-2 shadow-xs">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200">
                        <Anchor className="w-5 h-5" />
                      </div>
                      <h5 className="font-bold text-sm text-emerald-900">Reservation Confirmed!</h5>
                      <p className="text-[11px] text-slate-700">Booked: <span className="font-bold text-slate-900">{selectedVessel}</span></p>
                      <p className="text-[10px] text-slate-500 font-mono font-bold">Confirmation Code: #RMYC-SLOT-993</p>
                      <button
                        onClick={() => setBookingSuccess(false)}
                        className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2 rounded-xl text-xs mt-2 transition-colors shadow-xs"
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
                          className={`p-3 rounded-xl border transition-all cursor-pointer shadow-xs ${
                            selectedVessel === item.title
                              ? 'bg-amber-50/80 border-rmyc-gold text-slate-900'
                              : 'bg-white border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <span className="font-bold text-xs text-slate-900">{item.title}</span>
                            {selectedVessel === item.title && (
                              <span className="w-2.5 h-2.5 rounded-full bg-rmyc-gold" />
                            )}
                          </div>
                          <p className="text-[10px] text-slate-500 mt-0.5">{item.sub}</p>
                          <span className="text-[9px] text-emerald-700 font-extrabold block mt-1.5">{item.price}</span>
                        </div>
                      ))}

                      <button
                        onClick={() => setBookingSuccess(true)}
                        className="w-full bg-gradient-to-r from-rmyc-gold-light via-rmyc-gold to-rmyc-gold-dark hover:brightness-105 text-rmyc-navy font-extrabold py-2.5 rounded-xl text-xs shadow-md mt-3 transition-all"
                      >
                        Confirm Slot Reservation
                      </button>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'weather' && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-xs">
                    <h4 className="font-bold text-xs text-rmyc-navy flex items-center gap-1.5 mb-2">
                      <Compass className="w-4 h-4 text-cyan-600" />
                      Bay of Bengal Wind & Weather Telemetry
                    </h4>
                    <p className="text-[10px] text-slate-600 leading-relaxed font-medium">
                      Optimal sailing conditions detected for afternoon offshore runs. Moderate ENE breeze expected to sustain through 18:00 IST.
                    </p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-3 space-y-2 shadow-xs">
                    <span className="text-[10px] font-extrabold text-rmyc-navy uppercase tracking-wider block">TODAY'S TIDE CHART</span>
                    <div className="flex justify-between items-center text-xs pt-1 border-t border-slate-100">
                      <span className="text-slate-500 font-medium">Low Tide</span>
                      <span className="text-slate-800 font-mono font-bold">08:15 IST (0.3m)</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pt-1 border-t border-slate-100">
                      <span className="text-slate-500 font-medium">High Tide</span>
                      <span className="text-emerald-700 font-mono font-extrabold">14:30 IST (1.2m)</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pt-1 border-t border-slate-100">
                      <span className="text-slate-500 font-medium">Next Low Tide</span>
                      <span className="text-slate-800 font-mono font-bold">20:45 IST (0.4m)</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'dining' && (
                <div className="space-y-3 animate-fadeIn">
                  <h4 className="font-bold text-sm text-rmyc-navy">Harbour Lounge & Deck Dining</h4>
                  <p className="text-[10px] text-slate-500">Reserve harbour-side tables & order club specials</p>

                  <div className="bg-white border border-slate-200 rounded-xl p-3 space-y-2 shadow-xs">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-xs text-slate-900">Harbour-Front Deck Table</span>
                      <span className="text-[9px] bg-emerald-100 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">Available</span>
                    </div>
                    <p className="text-[10px] text-slate-500">Sunset seating overlooking the marina & sailboats</p>
                    <button className="w-full bg-rmyc-navy text-white font-bold py-2 rounded-xl text-xs hover:bg-slate-800 transition-colors mt-1 shadow-xs">
                      Reserve Table for Tonight (19:30)
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Smartphone Bottom Navigation Bar */}
            <div className="bg-white border-t border-slate-200 px-3 py-2 flex justify-around items-center z-40 shadow-xs">
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
                      ? 'text-rmyc-navy font-extrabold'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {tab.icon}
                  <span className="text-[9px] tracking-tight">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Smartphone Home Indicator Bar */}
            <div className="py-1 bg-white flex justify-center">
              <div className="w-28 h-1 bg-slate-300 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
