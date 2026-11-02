import React, { useState } from 'react';
import { Tag, Sparkles, Check, ArrowRight, X } from 'lucide-react';
import { PROMOTIONS } from '../data/portfolioData';

export default function OffersBanner({ onClaimOffer }) {
  const [copied, setCopied] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const activePromo = PROMOTIONS[0]; // SEASON15

  const copyCode = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(activePromo.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (dismissed) return null;

  return (
    <div className="relative z-40 bg-gradient-to-r from-amber-950 via-obsidian-900 to-amber-950/90 border-b border-gold-500/30 text-xs py-2 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        
        {/* Left: Urgency & Deal details */}
        <div className="flex items-center space-x-2 sm:space-x-3 text-gray-200">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-gold-500 text-obsidian-950 tracking-wider uppercase animate-pulse">
            {activePromo.badge}
          </span>
          <span className="font-semibold text-gold-200">
            {activePromo.title}:
          </span>
          <span className="hidden md:inline text-gray-300">
            Book by month-end and get <strong className="text-white underline decoration-gold-400 font-bold">{activePromo.discount}</strong> on any photography package.
          </span>
          <span className="inline-flex items-center text-amber-400 font-semibold text-[11px] bg-obsidian-950/70 px-2 py-0.5 rounded border border-amber-500/20">
            ⏳ {activePromo.expiresText}
          </span>
        </div>

        {/* Right: Code copy & CTA button */}
        <div className="flex items-center space-x-2">
          <button
            onClick={copyCode}
            className="flex items-center space-x-1.5 px-2.5 py-1 rounded bg-obsidian-950/80 hover:bg-obsidian-900 border border-gold-500/40 text-[11px] font-mono text-gold-accent transition-colors"
            title="Click to copy promo code"
          >
            <Tag className="w-3 h-3 text-gold-400" />
            <span>{activePromo.code}</span>
            {copied ? (
              <span className="flex items-center text-[10px] text-green-400 font-sans ml-1">
                <Check className="w-3 h-3 mr-0.5" /> Copied!
              </span>
            ) : (
              <span className="text-[10px] text-gray-400 font-sans ml-1">Copy</span>
            )}
          </button>

          <button
            onClick={() => onClaimOffer(activePromo.code)}
            className="flex items-center space-x-1 px-3 py-1 rounded-full bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-[11px] transition-all transform active:scale-95"
          >
            <span>Claim Offer</span>
            <ArrowRight className="w-3 h-3" />
          </button>

          <button
            onClick={() => setDismissed(true)}
            className="text-gray-400 hover:text-gray-200 p-1"
            title="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
