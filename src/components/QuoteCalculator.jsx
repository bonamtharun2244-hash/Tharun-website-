import React, { useState, useEffect } from 'react';
import { Calculator, Check, Sparkles, MessageSquare, ArrowRight, Tag, ShieldCheck, RefreshCw } from 'lucide-react';
import { SERVICES_DATA, ADDONS_DATA, PROMOTIONS, CONTACT_INFO } from '../data/portfolioData';

export default function QuoteCalculator({ onBookWithEstimate, prefilledCoupon }) {
  const [selectedServiceId, setSelectedServiceId] = useState('architecture');
  const [selectedPackageTier, setSelectedPackageTier] = useState(1); // 0: Basic, 1: Pro, 2: Premium
  const [locationType, setLocationType] = useState('local'); // local, outstation, destination
  const [selectedAddons, setSelectedAddons] = useState(['drone-4k']);
  const [couponCode, setCouponCode] = useState(prefilledCoupon || '');
  const [appliedDiscount, setAppliedDiscount] = useState(null);
  const [couponError, setCouponError] = useState('');

  const currentService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];
  const currentPackage = currentService.packages[selectedPackageTier] || currentService.packages[0];

  const locationFees = {
    local: { name: 'Local City / Studio', fee: 0 },
    outstation: { name: 'Outstation (Domestic Travel)', fee: 8000 },
    destination: { name: 'Pan-India / International Destination', fee: 25000 },
  };

  // Synchronize prefilled coupon if passed
  useEffect(() => {
    if (prefilledCoupon) {
      applyCoupon(prefilledCoupon);
    }
  }, [prefilledCoupon]);

  const toggleAddon = (addonId) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter((id) => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const applyCoupon = (codeToTest) => {
    const code = (codeToTest || couponCode).trim().toUpperCase();
    setCouponError('');
    if (!code) {
      setAppliedDiscount(null);
      return;
    }
    const match = PROMOTIONS.find((p) => p.code.toUpperCase() === code);
    if (match) {
      setAppliedDiscount(match);
      setCouponCode(match.code);
    } else {
      setCouponError('Invalid coupon code. Try SEASON15, EARLY10, or BUNDLE25.');
      setAppliedDiscount(null);
    }
  };

  // Calculate pricing
  const basePrice = currentPackage.basePrice;
  const locationPrice = locationFees[locationType].fee;
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const item = ADDONS_DATA.find((a) => a.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const subtotal = basePrice + locationPrice + addonsTotal;
  const discountAmount = appliedDiscount ? Math.round((subtotal * appliedDiscount.percentage) / 100) : 0;
  const finalTotal = subtotal - discountAmount;

  // Format INR Currency
  const formatINR = (amt) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amt);
  };

  // Generate WhatsApp inquiry text
  const generateWhatsAppMessage = () => {
    const addonsList = selectedAddons
      .map((id) => ADDONS_DATA.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ') || 'None';

    const text = `Hello Tharun Lens! 📸
I configured an estimate on your website calculator:
• Service: ${currentService.title}
• Package: ${currentPackage.name} (${currentPackage.priceRange})
• Scope: ${locationFees[locationType].name}
• Add-ons: ${addonsList}
• Estimated Total: ${formatINR(finalTotal)} ${appliedDiscount ? `(with ${appliedDiscount.code})` : ''}

I would like to discuss booking availability.`;

    return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="calculator" className="py-24 bg-obsidian-900/90 relative border-t border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs uppercase tracking-wider font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Price Estimator</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Calculate Your Custom <br />
            <span className="gold-gradient-text italic font-serif">Photography Investment</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Select your niche, preferred tier, destination scope, and creative add-ons to see real-time 
            transparent estimates. No hidden charges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (8 Cols) */}
          <div className="lg:col-span-7 space-y-8 bg-obsidian-850 p-6 sm:p-8 rounded-3xl border border-gray-800 shadow-xl">
            
            {/* Step 1: Select Service */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                1. Select Photography Service
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {SERVICES_DATA.map((srv) => (
                  <button
                    key={srv.id}
                    onClick={() => setSelectedServiceId(srv.id)}
                    className={`p-3 rounded-xl text-left border transition-all text-xs font-semibold ${
                      selectedServiceId === srv.id
                        ? 'bg-gold-500/15 border-gold-500 text-gold-200'
                        : 'bg-obsidian-900 border-gray-800 text-gray-300 hover:border-gray-700'
                    }`}
                  >
                    <div className="truncate">{srv.shortTitle}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Package Tier */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                2. Select Package Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {currentService.packages.map((pkg, idx) => (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPackageTier(idx)}
                    className={`p-4 rounded-xl text-left border transition-all ${
                      selectedPackageTier === idx
                        ? 'bg-gold-500/15 border-gold-500 text-white shadow-md'
                        : 'bg-obsidian-900 border-gray-800 text-gray-300 hover:border-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-semibold mb-1">
                      <span className="text-gold-300">{pkg.badge}</span>
                      <span className="text-gray-400">{pkg.delivery}</span>
                    </div>
                    <div className="font-serif font-bold text-sm text-white mb-1">
                      {pkg.name}
                    </div>
                    <div className="text-xs text-gold-accent font-semibold">
                      {pkg.priceRange}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Location Scope */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                3. Shoot Location / Travel Logistics
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {Object.entries(locationFees).map(([key, item]) => (
                  <button
                    key={key}
                    onClick={() => setLocationType(key)}
                    className={`p-3.5 rounded-xl text-left border transition-all text-xs ${
                      locationType === key
                        ? 'bg-gold-500/15 border-gold-500 text-gold-200'
                        : 'bg-obsidian-900 border-gray-800 text-gray-300 hover:border-gray-700'
                    }`}
                  >
                    <div className="font-semibold text-white mb-0.5">{item.name}</div>
                    <div className="text-[11px] text-gray-400">
                      {item.fee === 0 ? 'Included in Base' : `+${formatINR(item.fee)} logistics`}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Creative Add-Ons */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                4. Creative Add-ons & Fast Delivery
              </label>
              <div className="space-y-2.5">
                {ADDONS_DATA.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-gold-500/10 border-gold-500/60'
                          : 'bg-obsidian-900 border-gray-800 hover:border-gray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                          isChecked ? 'bg-gold-500 border-gold-500 text-obsidian-950' : 'border-gray-700 bg-obsidian-950'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 font-bold" />}
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">{addon.name}</div>
                          <div className="text-[11px] text-gray-400">{addon.desc}</div>
                        </div>
                      </div>
                      <div className="text-xs font-semibold text-gold-accent shrink-0 ml-2">
                        +{formatINR(addon.price)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Real-time Summary Card (5 Cols) */}
          <div className="lg:col-span-5 sticky top-28 bg-gradient-to-b from-obsidian-850 via-obsidian-900 to-obsidian-950 p-6 sm:p-8 rounded-3xl border-2 border-gold-500/40 shadow-2xl space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-gray-800">
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">
                Estimate Breakdown
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gold-500/20 text-gold-300 border border-gold-500/30">
                Live Calculator
              </span>
            </div>

            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex justify-between">
                <span>Selected Service:</span>
                <span className="text-white font-medium">{currentService.title}</span>
              </div>
              <div className="flex justify-between">
                <span>Base Package:</span>
                <span className="text-white font-medium">{currentPackage.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Base Investment:</span>
                <span className="font-semibold text-gray-200">{formatINR(basePrice)}</span>
              </div>

              {locationPrice > 0 && (
                <div className="flex justify-between text-gray-300">
                  <span>Logistics ({locationFees[locationType].name}):</span>
                  <span className="font-semibold text-gray-200">+{formatINR(locationPrice)}</span>
                </div>
              )}

              {addonsTotal > 0 && (
                <div className="flex justify-between text-gray-300">
                  <span>Selected Add-ons ({selectedAddons.length}):</span>
                  <span className="font-semibold text-gray-200">+{formatINR(addonsTotal)}</span>
                </div>
              )}

              {appliedDiscount && (
                <div className="flex justify-between text-green-400 font-medium pt-2 border-t border-gray-800/80">
                  <span>Promo Applied ({appliedDiscount.code} - {appliedDiscount.percentage}%):</span>
                  <span>-{formatINR(discountAmount)}</span>
                </div>
              )}
            </div>

            {/* Promo Code Input */}
            <div className="pt-2">
              <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1.5 font-semibold">
                Promotional Coupon Code
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                  placeholder="e.g. SEASON15"
                  className="w-full bg-obsidian-950 border border-gray-800 rounded-xl px-3 py-2 text-xs font-mono text-white placeholder-gray-600 focus:outline-none focus:border-gold-400"
                />
                <button
                  type="button"
                  onClick={() => applyCoupon()}
                  className="px-4 py-2 rounded-xl bg-obsidian-800 hover:bg-obsidian-750 text-gold-300 hover:text-white border border-gray-700 text-xs font-bold transition-colors"
                >
                  Apply
                </button>
              </div>
              {couponError && (
                <p className="text-[11px] text-red-400 mt-1">{couponError}</p>
              )}
              {appliedDiscount && (
                <p className="text-[11px] text-green-400 mt-1 flex items-center space-x-1">
                  <Check className="w-3 h-3" />
                  <span>{appliedDiscount.title} activated!</span>
                </p>
              )}
            </div>

            {/* Total */}
            <div className="pt-4 border-t border-gray-800">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-gray-400">
                    Estimated Investment
                  </div>
                  <div className="text-[10px] text-gray-500">
                    Includes all selected inclusions & editing
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-serif text-3xl font-bold text-gold-200">
                    {formatINR(finalTotal)}
                  </div>
                  {appliedDiscount && (
                    <div className="text-[11px] text-green-400 line-through">
                      {formatINR(subtotal)}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => onBookWithEstimate({
                  service: currentService.id,
                  package: currentPackage.name,
                  estimatedPrice: finalTotal,
                  addons: selectedAddons,
                  location: locationFees[locationType].name,
                  coupon: appliedDiscount?.code
                })}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-gold-500/20 hover:scale-102 active:scale-98 transition-all flex items-center justify-center space-x-2"
              >
                <span>Book With This Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-semibold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant Inquiry on WhatsApp</span>
              </a>
            </div>

            <div className="flex items-center space-x-2 text-[11px] text-gray-400 justify-center">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>50% Advance / 50% on Delivery &bull; 7-Day Guarantee</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
