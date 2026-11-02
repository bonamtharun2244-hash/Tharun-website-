import React, { useState } from 'react';
import { Camera, MapPin, Eye, ExternalLink, Sliders, X, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS, BEFORE_AFTER_SAMPLE } from '../data/portfolioData';

export default function PortfolioShowcase({ onOpenBooking }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const filterTabs = [
    { id: 'all', label: 'All Masterpieces' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'nature', label: 'Nature & Landscape' },
    { id: 'cultural', label: 'Cultural & Events' },
    { id: 'commercial', label: 'Commercial & Product' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  return (
    <section id="gallery" className="py-24 bg-obsidian-900/60 relative border-t border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs uppercase tracking-wider font-semibold mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Curated Portfolio Showcase</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Timeless Imagery That <br className="hidden sm:inline" />
            <span className="gold-gradient-text italic font-serif">Commands Attention</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Every frame is captured with museum-grade precision, intentional lighting, and masterful storytelling. 
            Click on any image to view camera specifications and production background.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                activeFilter === tab.id
                  ? 'bg-gold-500 text-obsidian-950 shadow-lg shadow-gold-500/20 scale-105'
                  : 'bg-obsidian-850 hover:bg-obsidian-800 text-gray-300 hover:text-white border border-gray-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-obsidian-850 border border-gray-800/80 hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-gold-500/10"
            >
              {/* Image Container */}
              <div className="aspect-[4/5] w-full overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-obsidian-900/90 text-gold-accent border border-gold-500/30 backdrop-blur-md">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Inspect Overlay Trigger */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="w-8 h-8 rounded-full bg-obsidian-900/90 border border-gold-500/30 text-gold-300 flex items-center justify-center backdrop-blur-md shadow-md">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-transform duration-300">
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold-200 transition-colors line-clamp-1 mb-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center space-x-1.5 text-xs text-gray-300 mb-2">
                    <MapPin className="w-3 h-3 text-gold-400 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                  <div className="pt-2 border-t border-gray-800/80 text-[11px] text-gray-400 flex items-center justify-between">
                    <span className="truncate text-gold-300/80 font-mono text-[10px]">{item.exif}</span>
                    <span className="text-[10px] text-gray-400 underline decoration-gold-500/50 group-hover:text-gold-accent">
                      Details &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* INTERACTIVE BEFORE & AFTER RETOUCHING DEMO */}
        <div className="rounded-3xl bg-gradient-to-br from-obsidian-850 to-obsidian-900 border border-gold-500/20 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left text column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider">
                <Sliders className="w-3.5 h-3.5" />
                <span>Craftsmanship Demonstration</span>
              </div>
              
              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
                {BEFORE_AFTER_SAMPLE.title}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                Raw camera sensors capture flat, unpolished data. Tharun Lens applies proprietary tonal mapping, 
                high-precision color grading, and meticulous lens distortion correction to transform plain captures into magazine-cover masterpieces.
              </p>

              <div className="pt-2 space-y-2.5">
                {BEFORE_AFTER_SAMPLE.details.map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-xs text-gray-300">
                    <CheckCircle className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenBooking({ note: "Interested in high-end editorial retouching & color grading" })}
                  className="px-6 py-3 rounded-full bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider flex items-center space-x-2 transition-all shadow-lg shadow-gold-500/20"
                >
                  <span>Experience This Standard</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Interactive Slider */}
            <div className="lg:col-span-7">
              <div
                className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden cursor-ew-resize select-none border border-gold-500/30 shadow-2xl"
                onMouseMove={handleSliderMove}
                onTouchMove={handleTouchMove}
              >
                {/* AFTER IMAGE (Base / Background) */}
                <img
                  src={BEFORE_AFTER_SAMPLE.afterImage}
                  alt="Tharun Lens Post-Processed Signature Edit"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-gold-500 text-obsidian-950 shadow-md">
                    {BEFORE_AFTER_SAMPLE.afterLabel}
                  </span>
                </div>

                {/* BEFORE IMAGE (Clipped overlay) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={BEFORE_AFTER_SAMPLE.beforeImage}
                    alt="Raw In-Camera Capture"
                    className="absolute inset-0 w-full h-full object-cover max-w-none filter grayscale contrast-75 brightness-90"
                    style={{ width: '100%', minWidth: '100%', height: '100%' }}
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-obsidian-950/80 text-gray-300 border border-gray-700 shadow-md">
                      {BEFORE_AFTER_SAMPLE.beforeLabel}
                    </span>
                  </div>
                </div>

                {/* Divider Line & Handle */}
                <div
                  className="absolute top-0 bottom-0 z-30 w-1 bg-gradient-to-b from-gold-300 via-white to-gold-400 pointer-events-none shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-obsidian-950 border-2 border-gold-400 flex items-center justify-center shadow-xl">
                    <Sliders className="w-4 h-4 text-gold-300 transform rotate-90" />
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-gray-400 font-medium px-2">
                <span>&larr; Drag left for Signature Grade</span>
                <span className="text-gold-400 text-[11px]">Interactive Split Screen</span>
                <span>Drag right for Raw Capture &rarr;</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-obsidian-950/95 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative max-w-5xl w-full bg-obsidian-900 border border-gold-500/30 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col lg:flex-row">
            
            {/* Close button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-obsidian-950/80 text-gray-300 hover:text-white border border-gray-700 hover:border-gold-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo Preview */}
            <div className="lg:w-3/5 bg-black flex items-center justify-center p-2 relative">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[65vh] lg:max-h-[85vh] w-auto object-contain rounded-xl"
              />
            </div>

            {/* Info Panel */}
            <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-5">
                <div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gold-500/10 text-gold-400 border border-gold-500/20">
                    {selectedPhoto.categoryLabel}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mt-2">
                    {selectedPhoto.title}
                  </h3>
                  <div className="flex items-center space-x-1.5 text-xs text-gray-300 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-gold-400" />
                    <span>{selectedPhoto.location}</span>
                  </div>
                </div>

                {/* Story */}
                <div className="text-xs sm:text-sm text-gray-300 leading-relaxed bg-obsidian-850 p-4 rounded-xl border border-gray-800">
                  <p className="font-semibold text-gold-200 mb-1">Project Story:</p>
                  <p>{selectedPhoto.story}</p>
                  {selectedPhoto.client && (
                    <p className="mt-2 text-[11px] text-gray-400">
                      <strong>Client:</strong> {selectedPhoto.client}
                    </p>
                  )}
                </div>

                {/* Camera Technical Specs */}
                <div className="space-y-2 border-t border-gray-800 pt-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center space-x-1.5">
                    <Camera className="w-3.5 h-3.5 text-gold-400" />
                    <span>Technical Metadata (EXIF)</span>
                  </div>
                  <div className="bg-obsidian-950 p-3 rounded-lg border border-gray-800 space-y-1 font-mono text-xs text-gray-300">
                    <div><span className="text-gray-500">Gear:</span> {selectedPhoto.camera}</div>
                    <div><span className="text-gray-500">Exposure:</span> {selectedPhoto.exif}</div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-gray-800 mt-6">
                <button
                  onClick={() => {
                    const chosen = selectedPhoto;
                    setSelectedPhoto(null);
                    onOpenBooking({
                      service: chosen.category,
                      note: `Inquiry inspired by photo: "${chosen.title}" (${chosen.location})`
                    });
                  }}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-gold-500 to-amber-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-gold-500/20 hover:scale-102 active:scale-98 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Inquire for Similar Shoot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
