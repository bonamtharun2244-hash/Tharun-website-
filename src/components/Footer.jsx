import React from 'react';
import { Camera, Phone, Mail, Globe, MapPin, Clock, ArrowUp, Sparkles, MessageSquare, Share2 } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hashtags = [
    "#TharunLens",
    "#ProfessionalPhotography",
    "#ArchitecturePhotography",
    "#LandscapePhotography",
    "#CulturalPhotography",
    "#PhotographyServices",
    "#IndiaPhotography",
    "#CommercialPhotography"
  ];

  return (
    <footer className="bg-obsidian-950 text-gray-300 relative border-t border-gray-800">
      
      {/* FINAL HIGH-IMPACT SALES CTA BANNER */}
      <div className="border-b border-gray-800 py-20 bg-gradient-to-b from-obsidian-900 to-obsidian-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>Limited Slots Available This Month</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            Ready to Capture <br />
            <span className="gold-gradient-text italic font-serif">Something Extraordinary?</span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed">
            Whether it's an architectural marvel, wild mountain vista, sacred heritage ritual, or commercial campaign—your 
            visual legacy begins with a single conversation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-xl shadow-gold-500/25 hover:scale-105 active:scale-95 transition-all"
            >
              Book Your Photography Session Today
            </button>

            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi%20Tharun,%20I'd%20like%20to%20discuss%20a%20photography%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-obsidian-900 hover:bg-obsidian-850 text-emerald-400 border border-emerald-500/30 font-semibold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>

          <div className="pt-2 text-xs text-amber-400 font-semibold">
            ⚡ Urgency: Only 3 booking dates remaining for this calendar month.
          </div>
        </div>
      </div>

      {/* FOOTER DIRECTORY & DETAILS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gold-600 to-amber-300 p-[1.5px]">
                <div className="w-full h-full bg-obsidian-950 rounded-full flex items-center justify-center">
                  <Camera className="w-5 h-5 text-gold-accent" />
                </div>
              </div>
              <span className="font-serif text-xl font-bold tracking-widest text-white uppercase">
                Tharun Lens
              </span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Award-winning photography atelier specializing in architecture, wilderness landscapes, 
              cultural celebrations, and commercial product marketing.
            </p>

            <div className="pt-2 text-xs text-gold-300 font-medium">
              10+ Years of Excellence &bull; 1,200+ Projects
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              Studio Contact
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center space-x-2.5 hover:text-gold-300 transition-colors">
                  <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{CONTACT_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center space-x-2.5 hover:text-gold-300 transition-colors">
                  <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.hours}</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.location}</span>
              </li>
            </ul>
          </div>

          {/* Guaranteed Response */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              Response Guarantee
            </h4>
            <div className="bg-obsidian-900 p-4 rounded-2xl border border-gray-800 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Phone Calls:</span>
                <span className="text-gold-300 font-semibold">{CONTACT_INFO.responseTimes.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">WhatsApp Inquiries:</span>
                <span className="text-gold-300 font-semibold">{CONTACT_INFO.responseTimes.whatsapp}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Emails & Proposals:</span>
                <span className="text-gold-300 font-semibold">{CONTACT_INFO.responseTimes.email}</span>
              </div>
            </div>
            <p className="text-[11px] text-gray-500 italic">
              {CONTACT_INFO.emergency}
            </p>
          </div>

          {/* Discover & Follow */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              Discover & Follow
            </h4>

            {/* Instagram Card */}
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3.5 rounded-2xl bg-gradient-to-br from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-gold-500/30 hover:border-gold-400 transition-all flex items-center space-x-3 shadow-lg block"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-600 via-pink-600 to-purple-600 p-[1.5px] shrink-0 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-obsidian-950 rounded-[10px] flex items-center justify-center text-white">
                  <svg className="w-4 h-4 fill-current text-pink-400 group-hover:text-gold-300 transition-colors" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-bold text-white group-hover:text-gold-300 transition-colors">
                  @{CONTACT_INFO.instagram}
                </div>
                <div className="text-[10px] text-gray-400">
                  Follow on Instagram &rarr;
                </div>
              </div>
            </a>

            {/* Curated Hashtags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {hashtags.slice(0, 5).map((tag, i) => (
                <span key={i} className="text-[10px] bg-obsidian-900 border border-gray-800 text-gray-400 px-2 py-0.5 rounded-full hover:text-gold-300 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-12 mt-12 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Tharun Lens. All rights reserved. Professional Photography Services & Visual Storytelling.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-gray-400 hover:text-gold-accent transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </footer>
  );
}
