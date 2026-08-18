import React, { useState } from 'react';
import { RMYC_INSTRUCTORS, InstructorItem } from '../../data/rmycContent';
import { Award, X, ChevronRight } from 'lucide-react';

export const InstructorShowcase: React.FC = () => {
  const [selectedInstructor, setSelectedInstructor] = useState<InstructorItem | null>(null);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold tracking-[0.25em] text-rmyc-gold-dark uppercase mb-2 block">
          YAI CERTIFIED MASTERS
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-rmyc-navy tracking-tight">
          Instructors & Sailing Experts
        </h2>
        <p className="text-slate-700 text-sm sm:text-base font-medium mt-4">
          Learn under veteran Naval officers, championship skippers, and YAI-certified assessors with decades of ocean experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {RMYC_INSTRUCTORS.map((inst) => (
          <div
            key={inst.id}
            onClick={() => setSelectedInstructor(inst)}
            className="bg-white border border-slate-200 hover:border-rmyc-gold rounded-3xl overflow-hidden transition-all duration-300 group cursor-pointer shadow-xl shadow-slate-200/50 flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={inst.imageUrl}
                  alt={inst.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rmyc-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[10px] font-bold text-rmyc-gold uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>{inst.certification}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold">{inst.name}</h3>
                  <p className="text-xs text-rmyc-gold-light font-medium">{inst.role}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-2 text-center p-3 rounded-xl bg-slate-50 border border-slate-200 mb-4 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-500 font-semibold block uppercase">Experience</span>
                    <span className="font-bold text-rmyc-navy">{inst.experienceYears} Years</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-semibold block uppercase">Sea Miles</span>
                    <span className="font-bold text-rmyc-gold-dark">{inst.seaMiles}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-700 font-medium leading-relaxed line-clamp-3">
                  {inst.bio}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-bold text-rmyc-navy uppercase tracking-wider">
              <span>View Full Credentials</span>
              <ChevronRight className="w-4 h-4 text-rmyc-gold-dark transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </div>

      {/* Instructor Credentials Modal */}
      {selectedInstructor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
          <div className="bg-white border border-slate-300 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative text-slate-800">
            <button
              onClick={() => setSelectedInstructor(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-500 hover:text-rmyc-navy bg-slate-100 hover:bg-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <img
                src={selectedInstructor.imageUrl}
                alt={selectedInstructor.name}
                className="w-20 h-20 rounded-2xl object-cover border-2 border-rmyc-gold"
              />
              <div>
                <span className="text-xs font-bold text-rmyc-gold-dark uppercase tracking-wider block">
                  {selectedInstructor.certification}
                </span>
                <h3 className="font-serif text-2xl font-bold text-rmyc-navy">
                  {selectedInstructor.name}
                </h3>
                <p className="text-xs text-slate-600 font-medium">{selectedInstructor.role}</p>
              </div>
            </div>

            <div className="space-y-4 text-xs text-slate-700 font-medium">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-rmyc-navy uppercase tracking-wider block mb-1 font-bold">Specialization</strong>
                <span>{selectedInstructor.specialty}</span>
              </div>
              <p className="leading-relaxed">{selectedInstructor.bio}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
