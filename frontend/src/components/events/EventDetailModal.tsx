import React, { useState } from 'react';
import { EventItem } from '../../data/rmycContent';
import { X, Calendar, MapPin, Clock, CheckCircle, Send } from 'lucide-react';

interface EventDetailModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({ event, onClose }) => {
  const [rsvpDone, setRsvpDone] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  if (!event) return null;

  const handleRSVP = (e: React.FormEvent) => {
    e.preventDefault();
    setRsvpDone(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-white border border-slate-300 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8 text-slate-800">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-500 hover:text-rmyc-navy bg-slate-100 hover:bg-slate-200 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image */}
        <div className="relative rounded-2xl overflow-hidden aspect-[21/9] mb-6 border border-slate-200">
          <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-rmyc-navy/80 via-transparent to-transparent" />
          <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-wider text-rmyc-navy bg-rmyc-gold px-3 py-1 rounded-full">
            {event.category}
          </span>
        </div>

        {/* Event Title */}
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-rmyc-navy mb-2">
          {event.title}
        </h3>

        {/* Meta Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6 text-xs text-slate-700 font-semibold">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-rmyc-gold-dark shrink-0" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-rmyc-gold-dark shrink-0" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-rmyc-gold-dark shrink-0" />
            <span className="truncate">{event.location}</span>
          </div>
        </div>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
          {event.description}
        </p>

        {/* Event Schedule List */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-rmyc-gold-dark mb-3 flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Event Agenda & Program</span>
          </h4>
          <div className="space-y-2">
            {event.schedule.map((item, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rmyc-gold-dark shrink-0 mt-1.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RSVP Form */}
        {!rsvpDone ? (
          <form onSubmit={handleRSVP} className="p-4 rounded-2xl bg-slate-50 border border-slate-300">
            <h4 className="text-xs font-bold uppercase tracking-wider text-rmyc-navy mb-3">
              Register / Reserve Spot for this Event
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <input
                type="text"
                required
                placeholder="Your Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-rmyc-gold font-medium"
              />
              <input
                type="tel"
                required
                placeholder="Phone Number *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-rmyc-gold font-medium"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-rmyc-navy bg-gradient-to-r from-rmyc-gold-light via-rmyc-gold to-rmyc-gold-dark hover:brightness-105 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Confirm Event Registration</span>
            </button>
          </form>
        ) : (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-center">
            <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-rmyc-navy mb-1">Registration Confirmed!</h4>
            <p className="text-xs text-slate-700 font-medium">
              We look forward to seeing you at {event.title}. Confirmation sent to {phone}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
