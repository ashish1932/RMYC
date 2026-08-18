import React, { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';

export const CorporateSailing: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    participants: '10 - 25 Participants',
    preferredDate: '',
    requirements: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="corporate" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Value Prop */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold tracking-[0.25em] text-rmyc-gold-dark uppercase mb-2 block">
              EXECUTIVE & CORPORATE OUTINGS
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-rmyc-navy tracking-tight leading-tight mb-4">
              Corporate Sailing Experiences on the Bay of Bengal
            </h2>
            <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed mb-6">
              Transform team dynamics with high-stakes, ocean-going regattas and executive leadership challenges. Under the guidance of RMYC sea captains, your team will helm J/80 racing yachts together.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Match-Race Regattas for Corporate Teams',
                'Executive Leadership & Communication Under Sail',
                'Private Dockside Sunset Cocktail Reception',
                'Fully Customized Catering & Commemorative Awards'
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-slate-800">
                  <CheckCircle className="w-4 h-4 text-rmyc-gold-dark shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-6 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md text-slate-800">
            <h3 className="font-serif text-2xl font-bold text-rmyc-navy mb-2">
              Plan a Corporate Outing
            </h3>
            <p className="text-xs text-slate-600 font-medium mb-6">
              Request a tailored proposal for your executive team or company regatta.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Global Tech"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-rmyc-gold font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma (HR Director)"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-rmyc-gold font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="priya@apex.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-rmyc-gold font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-rmyc-gold font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Expected Participants
                    </label>
                    <select
                      value={formData.participants}
                      onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-rmyc-gold font-medium"
                    >
                      <option value="5 - 10 Participants">5 - 10 Participants</option>
                      <option value="10 - 25 Participants">10 - 25 Participants</option>
                      <option value="25 - 50 Participants">25 - 50 Participants</option>
                      <option value="50+ Full Corporate Fleet">50+ Full Corporate Fleet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Preferred Date / Month
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mid March 2026"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-rmyc-gold font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Special Event Requirements
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us about catering needs, trophy presentation, or custom regatta branding..."
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-rmyc-gold font-medium resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-rmyc-navy bg-gradient-to-r from-rmyc-gold-light via-rmyc-gold to-rmyc-gold-dark hover:brightness-105 transition-all flex items-center justify-center gap-2 shadow-lg shadow-rmyc-gold/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Corporate Proposal</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h4 className="font-serif text-2xl font-bold text-rmyc-navy mb-2">Proposal Requested</h4>
                <p className="text-xs text-slate-700 font-medium">
                  Thank you, <strong className="text-rmyc-gold-dark">{formData.contactPerson}</strong> from {formData.companyName}. Our Corporate Events Commodore will send a customized proposal to <strong>{formData.email}</strong>.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
