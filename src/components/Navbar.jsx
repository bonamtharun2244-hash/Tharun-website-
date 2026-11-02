import React, { useState, useEffect } from 'react';
import { Camera, Phone, Mail, Calendar, Menu, X, Sparkles, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Showcase', href: '#gallery' },
    { name: 'Services & Pricing', href: '#services' },
    { name: 'Quote Calculator', href: '#calculator' },
    { name: 'Why Tharun', href: '#why-us' },
    { name: 'Process', href: '#workflow' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-obsidian-950/90 backdrop-blur-md border-b border-gold-500/15 py-3 shadow-2xl shadow-black/80' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gold-600 via-gold-400 to-amber-200 p-[1.5px] shadow-lg shadow-gold-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-obsidian-900 rounded-full flex items-center justify-center">
                <Camera className="w-5 h-5 text-gold-accent group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-serif tracking-widest text-lg md:text-xl font-bold text-white uppercase group-hover:text-gold-200 transition-colors">
                  Tharun Lens
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
              </div>
              <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium -mt-0.5">
                Photography & Storytelling
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-wider text-gray-300 hover:text-gold-accent font-medium transition-colors hover:scale-105 transform duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-gray-700/80 hover:border-pink-500/50 text-xs font-medium text-gray-300 hover:text-pink-400 bg-obsidian-900/60 backdrop-blur-sm transition-all"
              title={`Instagram: @${CONTACT_INFO.instagram}`}
            >
              <svg className="w-3.5 h-3.5 fill-current text-pink-400" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              <span className="hidden xl:inline">@{CONTACT_INFO.instagram}</span>
            </a>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-gray-700/80 hover:border-gold-500/50 text-xs font-medium text-gray-300 hover:text-gold-accent bg-obsidian-900/60 backdrop-blur-sm transition-all"
              title={`Email: ${CONTACT_INFO.email}`}
            >
              <Mail className="w-3.5 h-3.5 text-gold-400" />
              <span className="hidden 2xl:inline">{CONTACT_INFO.email}</span>
            </a>

            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full border border-gray-700/80 hover:border-gold-500/50 text-xs font-semibold text-gray-300 hover:text-gold-accent bg-obsidian-900/60 backdrop-blur-sm transition-all"
              title="Call Directly"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span className="hidden md:inline">{CONTACT_INFO.phoneDisplay}</span>
              <span className="md:hidden">Call</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="relative group overflow-hidden rounded-full p-[1px] font-semibold text-xs transition-all active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gold-500 via-amber-300 to-gold-600 rounded-full group-hover:opacity-90"></span>
              <span className="relative flex items-center space-x-1.5 px-4 py-2 rounded-full bg-obsidian-950 hover:bg-transparent text-white group-hover:text-obsidian-950 font-medium transition-colors duration-200">
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Consultation</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 text-xs font-semibold bg-gold-500 text-obsidian-950 rounded-full sm:hidden"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-gold-400 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-obsidian-950/98 backdrop-blur-xl border-b border-gold-500/20 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-wider text-gray-200 hover:text-gold-400 py-1 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-gray-800 flex flex-col space-y-3">
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 py-2 rounded-lg border border-gray-800 text-gray-300 hover:text-pink-400 text-xs bg-obsidian-900 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current text-pink-400" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              <span>Follow @{CONTACT_INFO.instagram}</span>
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center justify-center space-x-2 py-2 rounded-lg border border-gray-800 text-gray-300 hover:text-gold-accent text-xs bg-obsidian-900"
            >
              <Mail className="w-3.5 h-3.5 text-gold-400" />
              <span>{CONTACT_INFO.email}</span>
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center justify-center space-x-2 py-2.5 rounded-lg border border-gold-500/30 text-gold-accent font-semibold text-sm bg-obsidian-900"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us: {CONTACT_INFO.phoneDisplay}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-gold-500 to-amber-400 text-obsidian-950 font-bold text-sm tracking-wide shadow-lg shadow-gold-500/20"
            >
              Schedule Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
