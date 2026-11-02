import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle } from 'lucide-react';
import { FAQS, CONTACT_INFO } from '../data/portfolioData';

export default function ObjectionFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 bg-obsidian-900/60 relative border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs uppercase tracking-wider font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clear Answers & Honesty</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Frequently Asked Questions <br />
            <span className="gold-gradient-text italic font-serif">& Common Inquiries</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            We believe in complete transparency. Here is everything you need to know about our rates, 
            turnaround times, revision guarantees, and shooting policies.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-obsidian-850 border-gold-500/40 shadow-xl shadow-black/40'
                    : 'bg-obsidian-900/80 border-gray-800/80 hover:border-gray-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-gold-500 text-obsidian-950 rotate-180' : 'bg-obsidian-950 text-gray-400 border border-gray-800'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-gray-800/60 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-obsidian-950 border border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif text-sm font-bold text-white">Have a specific question not covered here?</h4>
            <p className="text-xs text-gray-400">Our studio team answers directly on WhatsApp within 30 minutes.</p>
          </div>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi%20Tharun,%20I%20have%20a%20question%20regarding%20photography%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider flex items-center space-x-2 transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
