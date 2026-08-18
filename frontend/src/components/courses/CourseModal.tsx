import React, { useState } from 'react';
import { CourseItem } from '../../data/rmycContent';
import { X, CheckCircle, Award, ShieldCheck, Send } from 'lucide-react';

interface CourseModalProps {
  course: CourseItem | null;
  onClose: () => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    experience: 'Beginner',
  });

  if (!course) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello RMYC Team! I am interested in booking the "${course.title}" course. Please share upcoming dates.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-white border border-slate-300 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8 text-slate-800">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-500 hover:text-rmyc-navy bg-slate-100 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 border-b border-slate-200 pb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rmyc-gold/20 text-rmyc-navy text-xs font-bold uppercase mb-2">
            <Award className="w-3.5 h-3.5 text-rmyc-gold-dark" />
            <span>{course.certification}</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-rmyc-navy mb-1">
            {course.title}
          </h3>
          <p className="text-xs text-slate-600 font-medium">
            Level: <strong className="text-rmyc-gold-dark">{course.level}</strong> · Vessel: <strong className="text-rmyc-navy">{course.vessel}</strong> · Investment: <strong className="text-rmyc-gold-dark font-bold">{course.price}</strong>
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Admiral Nathan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-rmyc-gold font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="sailor@rmyc.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-rmyc-gold font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Phone Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-rmyc-gold font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Preferred Weekend / Month
                </label>
                <input
                  type="text"
                  placeholder="e.g. Next Weekend / March 2026"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-rmyc-gold font-medium"
                />
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-rmyc-gold-dark shrink-0" />
              <span>Includes YAI certification processing, lifejacket loaner, and harbor access pass.</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 py-3 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-rmyc-navy bg-gradient-to-r from-rmyc-gold-light via-rmyc-gold to-rmyc-gold-dark hover:brightness-105 transition-all flex items-center justify-center gap-2 shadow-lg shadow-rmyc-gold/20"
              >
                <Send className="w-4 h-4" />
                <span>Submit Course Booking Inquiry</span>
              </button>
              <a
                href={`https://wa.me/919791487051?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-wider text-emerald-800 border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 transition-all flex items-center justify-center gap-2"
              >
                <span>WhatsApp Instant</span>
              </a>
            </div>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-300">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-rmyc-navy mb-2">
              Course Booking Received!
            </h4>
            <p className="text-xs text-slate-700 font-medium max-w-md mx-auto mb-6">
              Thank you, <strong className="text-rmyc-gold-dark">{formData.name}</strong>. Our RMYC Sailing Desk master will contact you at <strong>{formData.phone}</strong> with upcoming batch dates and dock entry procedures.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-rmyc-navy bg-rmyc-gold hover:bg-rmyc-gold-light"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
