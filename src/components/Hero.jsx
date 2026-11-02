import React from 'react';
import { Award, Star, ShieldCheck, ArrowRight, Camera, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

export default function Hero({ onOpenBooking, onScrollToSection }) {
  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background with cinematic lighting & texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=80"
          alt="Tharun Lens Luxury Photography Atmosphere"
          className="w-full h-full object-cover object-center brightness-[0.22] contrast-[1.1] scale-105 transform animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950 via-obsidian-950/70 to-transparent"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Eyebrow Pill */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-obsidian-900/90 border border-gold-500/30 backdrop-blur-md shadow-xl mb-6 animate-in fade-in duration-700">
          <Award className="w-4 h-4 text-gold-accent" />
          <span className="text-xs uppercase tracking-widest font-semibold text-gold-200">
            Award-Winning Visual Storyteller &bull; 10+ Years of Excellence
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
        </div>

        {/* Primary Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.15]">
          Professional Photography <br />
          <span className="gold-gradient-text drop-shadow-sm font-serif italic font-normal">
            for Every Moment.
          </span>
        </h1>

        {/* Subheading */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base font-medium text-gold-300/90 mb-6 tracking-wide uppercase">
          <span>Architecture</span>
          <span className="text-gold-500/50">&bull;</span>
          <span>Nature & Landscapes</span>
          <span className="text-gold-500/50">&bull;</span>
          <span>Cultural Stories</span>
          <span className="text-gold-500/50">&bull;</span>
          <span>Commercial Products</span>
        </div>

        {/* Value Proposition Body */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-10">
          <strong className="text-white font-medium">Capture Your Story with Stunning Photography.</strong> From breathtaking 
          landscapes to intimate cultural moments, Tharun Lens delivers professional photography that tells your story. With 
          10+ years of experience and thousands of satisfied clients, we specialize in creating timeless images that inspire and connect.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 text-obsidian-950 font-bold text-sm tracking-wider uppercase shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Schedule Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onScrollToSection('services')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-obsidian-900/90 hover:bg-obsidian-850 text-white font-semibold text-sm tracking-wider uppercase border border-gold-500/30 hover:border-gold-500/60 shadow-lg backdrop-blur-md transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>View Packages & Pricing</span>
            <ChevronRight className="w-4 h-4 text-gold-400" />
          </button>

          <button
            onClick={() => onScrollToSection('calculator')}
            className="w-full sm:w-auto px-6 py-4 rounded-full bg-transparent hover:bg-white/5 text-gold-accent font-medium text-sm tracking-wider flex items-center justify-center space-x-1.5 transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            <span>Instant Quote Calculator</span>
          </button>
        </div>

        {/* Credibility Metric Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-gray-800/80">
          <div className="p-4 rounded-xl bg-obsidian-900/60 border border-gray-800/70 backdrop-blur-sm">
            <div className="font-serif text-3xl font-bold text-white mb-1">
              10<span className="text-gold-400">+</span>
            </div>
            <div className="text-xs uppercase tracking-wider text-gray-400 font-medium">
              Years of Excellence
            </div>
          </div>

          <div className="p-4 rounded-xl bg-obsidian-900/60 border border-gray-800/70 backdrop-blur-sm">
            <div className="font-serif text-3xl font-bold text-white mb-1">
              1,200<span className="text-gold-400">+</span>
            </div>
            <div className="text-xs uppercase tracking-wider text-gray-400 font-medium">
              Satisfied Clients
            </div>
          </div>

          <div className="p-4 rounded-xl bg-obsidian-900/60 border border-gray-800/70 backdrop-blur-sm">
            <div className="font-serif text-3xl font-bold text-white mb-1 flex items-center justify-center space-x-1">
              <span>4.97</span>
              <Star className="w-4 h-4 text-gold-400 fill-gold-400 inline" />
            </div>
            <div className="text-xs uppercase tracking-wider text-gray-400 font-medium">
              Client Satisfaction
            </div>
          </div>

          <div className="p-4 rounded-xl bg-obsidian-900/60 border border-gray-800/70 backdrop-blur-sm">
            <div className="font-serif text-3xl font-bold text-white mb-1">
              5–14 <span className="text-xs text-gold-300 font-sans font-normal">Days</span>
            </div>
            <div className="text-xs uppercase tracking-wider text-gray-400 font-medium">
              Guaranteed Delivery
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
