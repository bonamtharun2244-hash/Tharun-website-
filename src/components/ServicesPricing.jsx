import React, { useState } from 'react';
import { Check, Clock, RefreshCw, Sparkles, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';

export default function ServicesPricing({ onSelectPackage }) {
  const [selectedServiceId, setSelectedServiceId] = useState('architecture');

  const activeService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  return (
    <section id="services" className="py-24 bg-obsidian-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs uppercase tracking-wider font-semibold mb-3">
            <Tag className="w-3.5 h-3.5" />
            <span>Transparent Investment & Packages</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Tailored Photography Packages <br />
            <span className="gold-gradient-text italic font-serif">Engineered for Maximum Impact</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Professional quality with absolute pricing transparency. Every package includes precision editing, 
            high-resolution digital delivery, revision rounds, and our ironclad 100% satisfaction guarantee.
          </p>
        </div>

        {/* Service Category Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {SERVICES_DATA.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedServiceId(service.id)}
              className={`px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center space-x-2 ${
                selectedServiceId === service.id
                  ? 'bg-gradient-to-r from-gold-500 to-amber-400 text-obsidian-950 font-bold shadow-lg shadow-gold-500/25 scale-105'
                  : 'bg-obsidian-900 hover:bg-obsidian-850 text-gray-300 border border-gray-800'
              }`}
            >
              <span>{service.shortTitle}</span>
            </button>
          ))}
        </div>

        {/* Active Service Lead Box */}
        <div className="mb-14 rounded-2xl bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-gold-500/20 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-3xl">
            <span className="text-xs font-serif italic text-gold-accent uppercase tracking-wider font-medium">
              Category Overview
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1 mb-2">
              {activeService.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {activeService.description}
            </p>
          </div>

          <div className="shrink-0 flex items-center space-x-2 bg-obsidian-950 px-4 py-2.5 rounded-xl border border-gray-800 text-xs text-gold-300">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            <span>Commercial Rights & Guaranteed Delivery</span>
          </div>
        </div>

        {/* Tiered Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          {activeService.packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                pkg.isPopular
                  ? 'bg-gradient-to-b from-obsidian-850 to-obsidian-900 border-2 border-gold-500 shadow-2xl shadow-gold-500/15 -translate-y-2'
                  : 'bg-obsidian-900/80 border border-gray-800 hover:border-gold-500/40 shadow-xl'
              }`}
            >
              {/* Popular Flag */}
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-gold-500 to-amber-300 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-md">
                  ★ Most Popular Choice
                </div>
              )}

              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider font-semibold text-gold-400 bg-obsidian-950 px-3 py-1 rounded-full border border-gold-500/20">
                    {pkg.badge}
                  </span>
                  <div className="flex items-center space-x-1 text-xs text-gray-400">
                    <Clock className="w-3.5 h-3.5 text-gold-400" />
                    <span>{pkg.delivery}</span>
                  </div>
                </div>

                <h4 className="font-serif text-2xl font-bold text-white mb-2">
                  {pkg.name}
                </h4>

                {/* Price Display */}
                <div className="my-5 pb-5 border-b border-gray-800">
                  <div className="text-xs uppercase tracking-wider text-gray-400 mb-1">
                    Standard Investment
                  </div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-gold-200">
                    {pkg.priceRange}
                  </div>
                  <div className="text-[11px] text-gray-400 mt-1 flex items-center space-x-1">
                    <RefreshCw className="w-3 h-3 text-gold-400" />
                    <span>{pkg.revisions}</span>
                  </div>
                </div>

                {/* Ideal For */}
                <div className="mb-6 bg-obsidian-950/60 p-3 rounded-xl border border-gray-800/80 text-xs text-gray-300">
                  <span className="text-gold-300 font-semibold">Perfect For: </span>
                  {pkg.idealFor}
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    Package Inclusions:
                  </div>
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs text-gray-300 leading-snug">
                      <div className="w-4 h-4 rounded-full bg-gold-500/15 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 sm:p-8 pt-0">
                <button
                  onClick={() => onSelectPackage({
                    serviceId: activeService.id,
                    serviceName: activeService.title,
                    packageId: pkg.id,
                    packageName: pkg.name,
                    priceRange: pkg.priceRange,
                    basePrice: pkg.basePrice
                  })}
                  className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg ${
                    pkg.isPopular
                      ? 'bg-gradient-to-r from-gold-500 to-amber-400 hover:from-gold-400 hover:to-amber-300 text-obsidian-950 shadow-gold-500/25 hover:scale-102 active:scale-98'
                      : 'bg-obsidian-950 hover:bg-gold-500/20 text-white hover:text-gold-accent border border-gold-500/30'
                  }`}
                >
                  <span>Book This Package</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Scope Callout */}
        <div className="text-center p-6 rounded-2xl bg-obsidian-900/60 border border-gray-800 max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-gray-300">
            Need multi-city coverage, specialized licensing, or a custom scope?
            <span className="text-gold-300 font-semibold ml-1">
              We design custom proposals for corporate campaigns and destination shoots.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
