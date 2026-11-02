import React from 'react';
import { Star, Quote, CheckCircle, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-obsidian-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs uppercase tracking-wider font-semibold mb-3">
            <Star className="w-3.5 h-3.5 fill-gold-400" />
            <span>Client Words & Social Proof</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Loved by Brands, Families, <br />
            <span className="gold-gradient-text italic font-serif">& Cultural Curators</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Real experiences from real clients across tourism authorities, luxury resorts, 
            e-commerce founders, and community leaders.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-obsidian-900/80 border border-gray-800 hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-xl relative"
            >
              <div>
                {/* Top Quote & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-gold-500/10 text-gold-300 border border-gold-500/20">
                    {test.tag}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed italic mb-6">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-gray-800 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gold-600 to-amber-300 p-[1px] shrink-0">
                  <div className="w-full h-full bg-obsidian-950 rounded-full flex items-center justify-center font-serif text-xs font-bold text-gold-200">
                    {test.author.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-white flex items-center space-x-1">
                    <span>{test.author}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-gold-400 fill-gold-500/20" title="Verified Client" />
                  </h4>
                  <p className="text-[11px] text-gray-400">
                    {test.role}, <span className="text-gray-300">{test.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-16 text-center text-xs text-gray-400 flex items-center justify-center space-x-2">
          <CheckCircle className="w-4 h-4 text-gold-400" />
          <span>Over 1,200+ clients served across India with an average 4.97-star satisfaction score.</span>
        </div>

      </div>
    </section>
  );
}
