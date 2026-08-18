import React, { useState } from 'react';
import { RMYC_CONTACT_INFO } from '../../data/rmycContent';
import { BayOfBengalMap } from '../location/BayOfBengalMap';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle } from 'lucide-react';

interface ContactSectionProps {
  onOpenMembership: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenMembership }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/919791487051?text=${encodeURIComponent(
    'Hello RMYC! I am interested in visiting the club / learning to sail.'
  )}`;

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Title Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold tracking-[0.25em] text-rmyc-gold-dark uppercase mb-2 block">
          PORT OF CHENNAI · SPRING HAVEN WHARF
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-rmyc-navy tracking-tight">
          Ready to experience the Bay?
        </h2>
        <p className="text-slate-700 text-sm sm:text-base font-medium mt-4">
          Visit South India’s oldest sailing club. Schedule a dock visit, inquire about courses, or talk to our membership commodore.
        </p>
      </div>

      {/* Map Interactive Visualization */}
      <div className="mb-12">
        <BayOfBengalMap />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Authoritative Contact Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl text-slate-800">
            <h3 className="font-serif text-2xl font-bold text-rmyc-navy mb-6">
              Clubhouse Coordinates & Info
            </h3>

            <div className="space-y-5 text-xs">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-rmyc-gold/15 text-rmyc-gold-dark shrink-0 border border-rmyc-gold/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-rmyc-navy block text-sm mb-0.5 font-bold">Wharf Location</strong>
                  <span className="leading-relaxed block text-slate-700 font-medium">
                    {RMYC_CONTACT_INFO.address}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-rmyc-gold/15 text-rmyc-gold-dark shrink-0 border border-rmyc-gold/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-rmyc-navy block text-sm mb-0.5 font-bold">Telephone Desk</strong>
                  <a href={`tel:${RMYC_CONTACT_INFO.phone}`} className="text-rmyc-gold-dark hover:underline font-bold text-xs">
                    {RMYC_CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-rmyc-gold/15 text-rmyc-gold-dark shrink-0 border border-rmyc-gold/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-rmyc-navy block text-sm mb-0.5 font-bold">Email Correspondence</strong>
                  <a href={`mailto:${RMYC_CONTACT_INFO.email}`} className="text-rmyc-gold-dark hover:underline font-bold text-xs">
                    {RMYC_CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-200">
                <div className="p-2.5 rounded-xl bg-rmyc-gold/15 text-rmyc-gold-dark shrink-0 border border-rmyc-gold/30">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <strong className="text-rmyc-navy block text-sm font-bold">Dock & Office Hours</strong>
                  {RMYC_CONTACT_INFO.hours.map((h, i) => (
                    <div key={i} className="text-[11px] text-slate-700 font-medium">
                      <span className="font-bold text-slate-900">{h.days}:</span> {h.time}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 flex gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Direct</span>
              </a>
              <button
                onClick={onOpenMembership}
                className="py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-rmyc-navy bg-rmyc-gold hover:bg-rmyc-gold-light transition-all shadow-md"
              >
                Start Sailing
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Inquiry Form */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl text-slate-800">
          <h3 className="font-serif text-2xl font-bold text-rmyc-navy mb-2">
            Send an Inquiry to the Commodore Desk
          </h3>
          <p className="text-xs text-slate-600 font-medium mb-6">
            Whether you want to visit the wharf, inquire about courses, or apply for membership, send us a message below.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Admiral Nathan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-rmyc-gold font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sailor@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-rmyc-gold font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 97914 87051"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-rmyc-gold font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Inquiry Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-rmyc-gold font-medium"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Sailing Course Booking">Sailing Course Booking</option>
                    <option value="Membership Application">Membership Application</option>
                    <option value="Corporate Sailing Outing">Corporate Sailing Outing</option>
                    <option value="Media & Regattas">Media & Regattas</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Message Details *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can we assist you on the water?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-rmyc-gold font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-rmyc-navy bg-gradient-to-r from-rmyc-gold-light via-rmyc-gold to-rmyc-gold-dark hover:brightness-105 transition-all flex items-center justify-center gap-2 shadow-lg shadow-rmyc-gold/20"
              >
                <Send className="w-4 h-4" />
                <span>Get in Touch with RMYC</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-12">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <h4 className="font-serif text-2xl font-bold text-rmyc-navy mb-2">Message Delivered</h4>
              <p className="text-xs text-slate-700 font-medium max-w-md mx-auto">
                Thank you, <strong className="text-rmyc-gold-dark">{formData.name}</strong>. Our wharf secretary will respond to your inquiry shortly.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
