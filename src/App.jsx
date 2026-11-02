import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioShowcase from './components/PortfolioShowcase';
import ServicesPricing from './components/ServicesPricing';
import QuoteCalculator from './components/QuoteCalculator';
import WhyUs from './components/WhyUs';
import WorkflowProcess from './components/WorkflowProcess';
import Testimonials from './components/Testimonials';
import ObjectionFAQ from './components/ObjectionFAQ';
import PaymentGuarantee from './components/PaymentGuarantee';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';
import { MessageSquare, Phone } from 'lucide-react';
import { CONTACT_INFO } from './data/portfolioData';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState(null);
  const [activeCoupon, setActiveCoupon] = useState('');

  const openBookingModal = (data = null) => {
    setBookingInitialData(data);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  const handleClaimOffer = (code) => {
    setActiveCoupon(code);
    // Smooth scroll to calculator or open modal
    const calc = document.getElementById('calculator');
    if (calc) {
      calc.scrollIntoView({ behavior: 'smooth' });
    } else {
      openBookingModal({ coupon: code });
    }
  };

  const handleSelectPackage = (pkg) => {
    openBookingModal({
      service: pkg.serviceId,
      package: pkg.packageName,
      note: `Inquiry for ${pkg.packageName} (${pkg.priceRange})`
    });
  };

  const handleBookWithEstimate = (estimate) => {
    openBookingModal({
      service: estimate.service,
      package: estimate.package,
      coupon: estimate.coupon,
      note: `Calculator Estimate: ₹${estimate.estimatedPrice.toLocaleString('en-IN')} (Location: ${estimate.location})`
    });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-obsidian-950 text-gray-100 flex flex-col font-sans selection:bg-gold-500 selection:text-black">
      
      {/* Sticky Main Navigation */}
      <Navbar onOpenBooking={() => openBookingModal()} />

      <main className="flex-grow">
        {/* Cinematic Hero */}
        <Hero
          onOpenBooking={() => openBookingModal()}
          onScrollToSection={scrollToSection}
        />

        {/* Portfolio Showcase with Lightbox & Before/After Slider */}
        <PortfolioShowcase
          onOpenBooking={openBookingModal}
        />

        {/* Services & Detailed Tiered Packages */}
        <ServicesPricing
          onSelectPackage={handleSelectPackage}
        />

        {/* Real-time Interactive Quote & Discount Calculator */}
        <QuoteCalculator
          onBookWithEstimate={handleBookWithEstimate}
          prefilledCoupon={activeCoupon}
        />

        {/* Why Choose Tharun Lens & Market Price Comparison */}
        <WhyUs />

        {/* 6-Step Production Workflow */}
        <WorkflowProcess
          onOpenBooking={() => openBookingModal()}
        />

        {/* Verified Client Testimonials & Social Proof */}
        <Testimonials />

        {/* Objection Handling & FAQs */}
        <ObjectionFAQ />

        {/* Payment Terms, Policies & 7-Day Guarantee */}
        <PaymentGuarantee />
      </main>

      {/* Footer with Directory & Final CTA */}
      <Footer onOpenBooking={() => openBookingModal()} />

      {/* Floating Action Button for Quick WhatsApp / Call */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
        <a
          href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi%20Tharun%20Lens,%20I'd%20like%20to%20inquire%20about%20your%20photography%20services.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center space-x-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl hover:shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95 border border-emerald-400/40"
          title="Instant WhatsApp Chat"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="hidden sm:inline text-xs font-bold tracking-wide">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Interactive Booking & Consultation Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={closeBookingModal}
        initialData={bookingInitialData}
      />

    </div>
  );
}
