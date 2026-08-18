import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle, Send } from 'lucide-react';

interface MembershipFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MembershipFormModal: React.FC<MembershipFormModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    membershipType: 'Lifetime Membership',
    experience: 'Beginner / Intermediate',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-white border border-slate-300 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative my-8 text-slate-800">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-500 hover:text-rmyc-navy bg-slate-100 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 border-b border-slate-200 pb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rmyc-gold/20 text-rmyc-navy text-xs font-bold uppercase mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-rmyc-gold-dark" />
            <span>Official RMYC Membership Application</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-rmyc-navy mb-1">
            Apply for Membership
          </h3>
          <p className="text-xs text-slate-600 font-medium">
            Join South India's oldest sailing institution. Established 1911 on the Bay of Bengal.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Captain Ramesh Sundaram"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-rmyc-gold font-medium"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="ramesh@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-rmyc-gold font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 97914 87051"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-rmyc-gold font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Membership Category
                </label>
                <select
                  value={formData.membershipType}
                  onChange={(e) => setFormData({ ...formData, membershipType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-rmyc-gold font-medium"
                >
                  <option value="Lifetime Membership">Lifetime Membership</option>
                  <option value="Associate / Annual Member">Associate / Annual Member</option>
                  <option value="Student / Youth Sailing Member">Student / Youth Sailing Member</option>
                  <option value="Corporate Membership">Corporate Membership</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Sailing Background
                </label>
                <select
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-rmyc-gold font-medium"
                >
                  <option value="Beginner / Looking to Learn">Beginner / Looking to Learn</option>
                  <option value="Intermediate Helmsman">Intermediate Helmsman</option>
                  <option value="Experienced Yachtmaster">Experienced Yachtmaster</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Statement of Interest / Message
              </label>
              <textarea
                rows={3}
                placeholder="Share your interest in sailing, yachting goals, or any reciprocal club affiliations..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-rmyc-gold font-medium resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-rmyc-navy bg-gradient-to-r from-rmyc-gold-light via-rmyc-gold to-rmyc-gold-dark hover:brightness-105 transition-all flex items-center justify-center gap-2 shadow-lg shadow-rmyc-gold/20"
            >
              <Send className="w-4 h-4" />
              <span>Submit Formal Membership Application</span>
            </button>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-rmyc-gold/20 text-rmyc-gold-dark flex items-center justify-center mx-auto mb-4 border border-rmyc-gold/40">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-rmyc-navy mb-2">
              Application Submitted to Membership Committee
            </h4>
            <p className="text-xs text-slate-700 font-medium max-w-md mx-auto mb-6 leading-relaxed">
              Thank you, <strong className="text-rmyc-gold-dark">{formData.name}</strong>. Your membership dossier has been logged. Our Membership Liaison Desk will contact you at <strong>{formData.phone}</strong> for an informal interview & wharf visit.
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-rmyc-navy bg-rmyc-gold hover:bg-rmyc-gold-light"
              >
                Return to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
