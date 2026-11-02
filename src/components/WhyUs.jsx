import React from 'react';
import { Award, Camera, Sparkles, Clock, ShieldCheck, Tag, Check, X, Star } from 'lucide-react';
import { WHY_CHOOSE_US, PRICING_COMPARISON } from '../data/portfolioData';

const iconMap = {
  Award,
  Camera,
  Sparkles,
  Clock,
  ShieldCheck,
  Tag
};

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-obsidian-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs uppercase tracking-wider font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Unmatched Value & Distinction</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Why Discerning Clients <br />
            <span className="gold-gradient-text italic font-serif">Trust Tharun Lens</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Not a generalist shooter. A specialized photographic atelier dedicated to architectural nuance, 
            landscape wonders, sacred cultural moments, and high-converting commercial assets.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Award;
            return (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-obsidian-900/80 border border-gray-800/80 hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-gold-500/5 relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-accent mb-6 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-obsidian-950 transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                
                <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-gold-200 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 rounded-bl-full pointer-events-none group-hover:bg-gold-500/10 transition-colors"></div>
              </div>
            );
          })}
        </div>

        {/* MARKET PRICING COMPARISON TABLE */}
        <div className="rounded-3xl bg-obsidian-900 border border-gold-500/30 p-6 sm:p-10 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold-400">
              Honest Market Context
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1 mb-2">
              Competitive Pricing & Quality Comparison
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              Discover why Tharun Lens represents the ideal balance of world-class craftsmanship and fair pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {PRICING_COMPARISON.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
                  tier.isHighlight
                    ? 'bg-gradient-to-b from-obsidian-850 to-obsidian-950 border-2 border-gold-500 shadow-2xl shadow-gold-500/15 -translate-y-2'
                    : 'bg-obsidian-950/70 border border-gray-800'
                }`}
              >
                <div>
                  {tier.isHighlight && (
                    <div className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gold-500 text-obsidian-950 mb-3 shadow">
                      ★ Best Market Value & ROI
                    </div>
                  )}

                  <h4 className="font-serif text-xl font-bold text-white mb-1">
                    {tier.tier}
                  </h4>

                  <div className="font-serif text-2xl font-bold text-gold-200 my-3">
                    {tier.priceRange}
                  </div>

                  <div className="space-y-3 pt-3 border-t border-gray-800/80 text-xs">
                    <div>
                      <span className="text-gray-500 block">Equipment Level:</span>
                      <span className="text-gray-300 font-medium">{tier.equipment}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Turnaround Time:</span>
                      <span className="text-gray-300 font-medium">{tier.turnaround}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Revisions & Calibration:</span>
                      <span className="text-gray-300 font-medium">{tier.revisions}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Contract & Guarantee:</span>
                      <span className="text-gray-300 font-medium">{tier.reliability}</span>
                    </div>
                  </div>
                </div>

                <div className={`mt-6 pt-4 border-t text-xs leading-relaxed ${
                  tier.isHighlight ? 'text-gold-200 border-gold-500/30' : 'text-gray-400 border-gray-800'
                }`}>
                  <strong className="block text-white mb-1">Bottom Line Result:</strong>
                  {tier.result}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-gray-400">
            Value Proposition: <strong className="text-white">"Professional quality at competitive rates — Best value in the market."</strong>
          </div>
        </div>

      </div>
    </section>
  );
}
