import React from 'react';
import { Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/portfolioData';

export default function WorkflowProcess({ onOpenBooking }) {
  return (
    <section id="workflow" className="py-24 bg-obsidian-900/60 relative border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs uppercase tracking-wider font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Structured & Stress-Free Workflow</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            From Vision to Masterpiece <br />
            <span className="gold-gradient-text italic font-serif">In 6 Seamless Steps</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            We respect your time and brand. Our structured production pipeline ensures pristine results, 
            zero surprises, and punctual delivery every single time.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="relative p-7 rounded-3xl bg-obsidian-850 border border-gray-800 hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1 group shadow-lg"
            >
              {/* Step Number */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-3xl font-extrabold text-gold-400/80 group-hover:text-gold-300 transition-colors">
                  {step.step}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-gold-500/40 group-hover:bg-gold-400 transition-colors"></span>
              </div>

              <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-gold-200 transition-colors">
                {step.name}
              </h3>

              <div className="text-xs text-gold-400/90 font-medium mb-3">
                {step.subtitle}
              </div>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {step.details}
              </p>
            </div>
          ))}
        </div>

        {/* Consultation Callout */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-obsidian-950 via-obsidian-850 to-obsidian-950 border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Ready to take Step 1?
            </h4>
            <p className="text-gray-400 text-xs sm:text-sm">
              Schedule a 100% free creative consultation. No obligation, no pressure.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking()}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-500 to-amber-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-gold-500/20 hover:scale-105 active:scale-95 transition-all shrink-0 flex items-center space-x-2"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
