import React, { useState } from 'react';
import { RMYC_GALLERY } from '../../data/rmycContent';
import { X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

export const VisualGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Sailing', 'Racing', 'Heritage', 'Fleet', 'Events', 'Members'];

  const filteredImages = RMYC_GALLERY.filter(
    (img) => selectedCategory === 'All' || img.category === selectedCategory
  );

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold tracking-[0.25em] text-rmyc-gold-dark uppercase mb-2 block">
          DIGITAL ARCHIVE & PHOTOGRAPHY
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold text-rmyc-navy tracking-tight">
          Visual Gallery of the Bay
        </h2>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10">
        {categories.map((cat) => {
          const active = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                active
                  ? 'bg-rmyc-navy text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-300 hover:border-rmyc-gold shadow-sm'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredImages.map((img, idx) => (
          <div
            key={img.id}
            onClick={() => setLightboxIndex(idx)}
            className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer border border-slate-200 shadow-md"
          >
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rmyc-navy via-rmyc-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <span className="text-[10px] font-bold text-rmyc-gold uppercase tracking-wider">
                {img.category}
              </span>
              <h4 className="font-serif text-base font-bold text-white leading-tight">
                {img.title}
              </h4>
            </div>
            <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full text-white bg-white/10 hover:bg-white/20"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={() =>
              setLightboxIndex((prev) =>
                prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null
              )
            }
            className="absolute left-6 p-3 rounded-full text-white bg-white/10 hover:bg-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full text-center">
            <img
              src={filteredImages[lightboxIndex].url}
              alt={filteredImages[lightboxIndex].title}
              className="max-h-[75vh] w-auto mx-auto rounded-2xl object-contain shadow-2xl border border-white/20"
            />
            <div className="mt-4">
              <span className="text-xs font-bold text-rmyc-gold uppercase tracking-wider">
                {filteredImages[lightboxIndex].category}
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">
                {filteredImages[lightboxIndex].title}
              </h3>
            </div>
          </div>

          <button
            onClick={() =>
              setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredImages.length : null))
            }
            className="absolute right-6 p-3 rounded-full text-white bg-white/10 hover:bg-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
