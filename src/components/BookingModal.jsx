import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, Mail, MapPin, CheckCircle, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import { CONTACT_INFO, SERVICES_DATA } from '../data/portfolioData';

export default function BookingModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'architecture',
    package: 'Standard / Recommended',
    date: '',
    location: '',
    notes: '',
    coupon: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        service: initialData.service || initialData.serviceId || prev.service,
        package: initialData.package || initialData.packageName || prev.package,
        notes: initialData.note || prev.notes,
        coupon: initialData.coupon || prev.coupon,
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateWhatsAppURL = () => {
    const text = `*New Photography Inquiry - Tharun Lens* 📸
• Name: ${formData.name || 'Prospective Client'}
• Phone: ${formData.phone || 'Not provided'}
• Email: ${formData.email || 'Not provided'}
• Service: ${formData.service}
• Package: ${formData.package}
• Preferred Date: ${formData.date || 'To be discussed'}
• Location: ${formData.location || 'To be discussed'}
• Special Notes: ${formData.notes || 'None'}
• Promo Code: ${formData.coupon || 'None'}`;

    return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomRef = 'TL-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-obsidian-950/90 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative max-w-xl w-full bg-obsidian-900 border border-gold-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-obsidian-950 text-gray-400 hover:text-white border border-gray-800 hover:border-gold-400 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gold-500/15 text-gold-400 border border-gold-500/20">
                100% Free Consultation
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-2">
                Book Your Photography Session
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                Tell us about your project. We respond via phone/WhatsApp within 60 minutes.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Reddy"
                    className="w-full bg-obsidian-950 border border-gray-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-obsidian-950 border border-gray-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full bg-obsidian-950 border border-gray-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Photography Category *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-obsidian-950 border border-gray-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-gold-400"
                  >
                    <option value="architecture">Architectural Photography</option>
                    <option value="nature">Nature & Landscape</option>
                    <option value="cultural">Cultural & Event Photography</option>
                    <option value="commercial">Commercial & Product</option>
                    <option value="custom">Custom / Multi-Day Project</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-obsidian-950 border border-gray-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Shoot City / Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Hyderabad, Kerala, Udaipur"
                    className="w-full bg-obsidian-950 border border-gray-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Project Scope & Creative Vision
                </label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Describe your property, product catalog, event schedule or specific shot list requirements..."
                  className="w-full bg-obsidian-950 border border-gray-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-400"
                ></textarea>
              </div>

              {formData.coupon && (
                <div className="text-xs bg-gold-500/10 border border-gold-500/30 p-2.5 rounded-xl text-gold-300 flex items-center justify-between">
                  <span>Applied Promo Coupon: <strong>{formData.coupon}</strong></span>
                  <span className="text-green-400 font-semibold">Active</span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={generateWhatsAppURL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center space-x-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Instantly via WhatsApp (Fastest)</span>
                </a>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-gold-500 to-amber-400 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-gold-500/20 hover:scale-101 active:scale-99 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Submit Booking Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="py-8 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/40 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider font-mono text-gold-400 font-semibold">
                Reference ID: {bookingRef}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Consultation Request Received!
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm max-w-md mx-auto">
                Thank you, <strong className="text-white">{formData.name}</strong>. Tharun Lens has received your request for{' '}
                <strong className="text-gold-300">{formData.service}</strong> photography.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-obsidian-950 border border-gray-800 text-xs text-gray-300 max-w-md mx-auto space-y-1 text-left">
              <div>• <strong>Direct Phone Contact:</strong> We will call your number within 1 hour.</div>
              <div>• <strong>Need immediate response?</strong> Tap below to connect right away.</div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={generateWhatsAppURL()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-obsidian-950 border border-gold-500/40 text-gold-accent hover:text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call {CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="text-xs text-gray-500 hover:text-gray-300 pt-2 block mx-auto underline"
            >
              Close this window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
