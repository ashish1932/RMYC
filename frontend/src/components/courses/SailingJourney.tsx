import React, { useState } from 'react';
import { RMYC_COURSES, CourseItem } from '../../data/rmycContent';
import { CourseModal } from './CourseModal';
import { Award, Clock, Anchor, CheckCircle, ChevronDown, ChevronUp, BookOpen, MessageCircle } from 'lucide-react';

export const SailingJourney: React.FC = () => {
  const [selectedCourseModal, setSelectedCourseModal] = useState<CourseItem | null>(null);
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>('c1-beginner');

  const toggleSyllabus = (id: string) => {
    setExpandedCourseId(expandedCourseId === id ? null : id);
  };

  return (
    <section id="courses" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold tracking-[0.25em] text-rmyc-gold-dark uppercase mb-2 block">
          YAI ACCREDITED SAILING ACADEMY
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-rmyc-navy tracking-tight leading-tight">
          Every sailor starts somewhere.
        </h2>
        <p className="text-slate-700 text-sm sm:text-base font-medium mt-4">
          From your very first weekend on a J/80 keelboat to advanced night offshore passages. Structured national certifications by Yachting Association of India.
        </p>
      </div>

      {/* Stepper Journey Progression Pill */}
      <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
        {['Beginner', 'Advanced 1', 'Advanced 2', 'Racing & Regatta'].map((step, idx) => (
          <React.Fragment key={step}>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-300 text-xs font-bold text-rmyc-navy shadow-sm">
              <span className="w-5 h-5 rounded-full bg-rmyc-gold/20 flex items-center justify-center text-[10px] text-rmyc-gold-dark">
                {idx + 1}
              </span>
              <span>{step}</span>
            </div>
            {idx < 3 && <div className="hidden sm:block w-4 h-[1px] bg-slate-300" />}
          </React.Fragment>
        ))}
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {RMYC_COURSES.map((course) => {
          const isExpanded = expandedCourseId === course.id;
          return (
            <div
              key={course.id}
              className="bg-white border border-slate-200 hover:border-rmyc-gold rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between shadow-xl shadow-slate-200/50 relative"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-rmyc-navy px-3 py-1 rounded-full bg-rmyc-gold/20 border border-rmyc-gold/40">
                    {course.level}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-700 font-semibold bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                    <Award className="w-3.5 h-3.5 text-rmyc-gold-dark" />
                    <span>{course.certification}</span>
                  </div>
                </div>

                {/* Course Title & Short Desc */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-rmyc-navy mb-2 leading-snug">
                  {course.title}
                </h3>
                <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                  {course.shortDescription}
                </p>

                {/* Meta details (Duration, Vessel, Price) */}
                <div className="grid grid-cols-3 gap-2 p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-6 text-center">
                  <div>
                    <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider block">Duration</span>
                    <span className="text-xs font-bold text-rmyc-navy flex items-center justify-center gap-1 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-rmyc-gold-dark" />
                      {course.duration}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider block">Vessel</span>
                    <span className="text-xs font-bold text-rmyc-navy flex items-center justify-center gap-1 mt-0.5">
                      <Anchor className="w-3.5 h-3.5 text-rmyc-gold-dark" />
                      {course.vessel}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider block">Course Fee</span>
                    <span className="text-xs font-bold text-rmyc-gold-dark mt-0.5 block">
                      {course.price}
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-bold text-rmyc-gold-dark uppercase tracking-wider block">
                    Key Highlights
                  </span>
                  {course.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-800 font-medium">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Expandable "What You'll Learn" Syllabus */}
                <div className="mb-6">
                  <button
                    onClick={() => toggleSyllabus(course.id)}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-rmyc-navy hover:text-rmyc-gold-dark transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-rmyc-gold-dark" />
                      <span>What You'll Learn (Full Syllabus)</span>
                    </span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {isExpanded && (
                    <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-800 font-medium animate-fadeIn">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {course.syllabus.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-rmyc-gold-dark shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-2 text-[11px] text-rmyc-gold-dark font-semibold italic border-t border-slate-200 mt-3">
                        Prerequisite: {course.prerequisite}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <button
                  onClick={() => setSelectedCourseModal(course)}
                  className="flex-1 py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-wider text-rmyc-navy bg-gradient-to-r from-rmyc-gold-light via-rmyc-gold to-rmyc-gold-dark hover:brightness-105 transition-all shadow-md shadow-rmyc-gold/20"
                >
                  Book Your Course
                </button>
                <a
                  href={`https://wa.me/919791487051?text=Hi%20RMYC%2C%20I%20want%20to%20inquire%20about%20${encodeURIComponent(course.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl text-emerald-700 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 transition-colors"
                  aria-label="Contact via WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Render */}
      <CourseModal
        course={selectedCourseModal}
        onClose={() => setSelectedCourseModal(null)}
      />
    </section>
  );
};
