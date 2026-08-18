import React, { useState } from 'react';
import { RMYC_EVENTS, EventItem } from '../../data/rmycContent';
import { EventDetailModal } from './EventDetailModal';
import { Calendar, Search, MapPin, Clock, ArrowUpRight, Filter } from 'lucide-react';

export const EventDiscovery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalEvent, setActiveModalEvent] = useState<EventItem | null>(null);

  const categories = ['All', 'Sailing', 'Racing', 'Expeditions', 'Club Socials'];

  const filteredEvents = RMYC_EVENTS.filter((ev) => {
    const matchCat = selectedCategory === 'All' || ev.category === selectedCategory;
    const matchSearch =
      ev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section id="events" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold tracking-[0.25em] text-rmyc-gold-dark uppercase mb-2 block">
          REGATTAS & MARITIME CALENDAR
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-rmyc-navy tracking-tight leading-tight">
          Race. Gather. Explore.
        </h2>
        <p className="text-slate-700 text-sm sm:text-base font-medium mt-4">
          Browse upcoming regattas, full moon cruises, junior sailing camps, and private club socials on the Bay of Bengal.
        </p>
      </div>

      {/* Controls Bar: Category Filters & Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-white p-4 rounded-2xl border border-slate-200 shadow-md">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          <Filter className="w-4 h-4 text-rmyc-gold-dark shrink-0 ml-2" />
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  active
                    ? 'bg-rmyc-navy text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-rmyc-navy'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search regattas, dates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-rmyc-gold font-medium placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            onClick={() => setActiveModalEvent(event)}
            className="bg-white border border-slate-200 hover:border-rmyc-gold rounded-3xl overflow-hidden transition-all duration-400 group cursor-pointer shadow-xl shadow-slate-200/50 flex flex-col justify-between"
          >
            <div>
              {/* Event Image Banner with Date Badge */}
              <div className="relative aspect-[16/9] overflow-hidden border-b border-slate-100">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rmyc-navy/80 via-transparent to-transparent" />

                {/* Date Pill */}
                <div className="absolute top-4 left-4 bg-white/95 border border-slate-200 rounded-xl px-3 py-2 text-center backdrop-blur-md shadow-lg">
                  <span className="text-[10px] font-bold text-rmyc-gold-dark uppercase block leading-none">
                    {event.month}
                  </span>
                  <span className="font-serif text-xl font-bold text-rmyc-navy leading-none">
                    {event.day}
                  </span>
                </div>

                <div className="absolute top-4 right-4 bg-rmyc-navy/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] font-bold text-white uppercase">
                  {event.category}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-rmyc-navy mb-2 group-hover:text-rmyc-gold-dark transition-colors leading-snug">
                  {event.title}
                </h3>
                <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed mb-4 line-clamp-2">
                  {event.description}
                </p>

                <div className="flex flex-col gap-2 text-xs text-slate-600 font-semibold pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-rmyc-gold-dark shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-rmyc-gold-dark shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Footer CTA */}
            <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-bold text-rmyc-navy uppercase tracking-wider group-hover:gap-2 transition-all">
              <span>View Details & Schedule</span>
              <ArrowUpRight className="w-4 h-4 text-rmyc-gold-dark transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 shadow-md">
          <Calendar className="w-12 h-12 text-rmyc-gold-dark mx-auto mb-3 opacity-60" />
          <p className="text-slate-700 text-sm font-medium">No events found matching your search.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="mt-3 text-xs text-rmyc-navy underline font-bold"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Render Event Detail Modal */}
      <EventDetailModal
        event={activeModalEvent}
        onClose={() => setActiveModalEvent(null)}
      />
    </section>
  );
};
