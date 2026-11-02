import React from 'react';
import { CreditCard, ShieldCheck, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { PAYMENT_POLICIES } from '../data/portfolioData';

export default function PaymentGuarantee() {
  return (
    <section className="py-20 bg-obsidian-950 relative border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs uppercase tracking-wider font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Guaranteed Peace of Mind</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
            Payment Terms & Policies
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm">
            Zero ambiguity. Transparent milestone schedules and protected client bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Milestone Schedule */}
          <div className="p-7 rounded-3xl bg-obsidian-900 border border-gray-800 space-y-4">
            <h3 className="font-serif text-lg font-bold text-white flex items-center space-x-2">
              <RefreshCw className="w-4 h-4 text-gold-400" />
              <span>Milestone Schedule</span>
            </h3>
            <div className="space-y-4 text-xs">
              {PAYMENT_POLICIES.schedule.map((sch, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-obsidian-950 border border-gray-800/80">
                  <div className="font-bold text-gold-200 mb-1">{sch.title}</div>
                  <div className="text-gray-400 leading-relaxed">{sch.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Accepted Methods */}
          <div className="p-7 rounded-3xl bg-obsidian-900 border border-gray-800 space-y-4">
            <h3 className="font-serif text-lg font-bold text-white flex items-center space-x-2">
              <CreditCard className="w-4 h-4 text-gold-400" />
              <span>Accepted Payment Methods</span>
            </h3>
            <div className="space-y-2.5 text-xs text-gray-300">
              {PAYMENT_POLICIES.methods.map((method, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 p-2 rounded-lg bg-obsidian-950/70 border border-gray-800/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>{method}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Satisfaction Guarantee */}
          <div className="p-7 rounded-3xl bg-gradient-to-br from-obsidian-900 to-obsidian-850 border border-gold-500/40 space-y-4 shadow-xl">
            <div className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gold-500 text-obsidian-950">
              Ironclad Promise
            </div>
            <h3 className="font-serif text-lg font-bold text-white">
              7-Day Satisfaction Guarantee
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              {PAYMENT_POLICIES.guarantee}
            </p>
            <div className="pt-2 text-[11px] text-gold-300 font-semibold border-t border-gray-800">
              ✓ Written Service Agreement with every shoot.
            </div>
          </div>

        </div>

        {/* Cancellation Policy Table */}
        <div className="rounded-2xl bg-obsidian-900 border border-gray-800 p-6 overflow-x-auto">
          <h4 className="font-serif text-sm font-bold text-white mb-4">
            Cancellation & Rescheduling Terms
          </h4>
          <table className="w-full text-left text-xs text-gray-300">
            <thead>
              <tr className="border-b border-gray-800 text-gray-400 uppercase tracking-wider text-[10px]">
                <th className="pb-3 font-semibold">Notice Timeline</th>
                <th className="pb-3 font-semibold">Policy / Terms</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60">
              {PAYMENT_POLICIES.cancellation.map((row, idx) => (
                <tr key={idx} className="hover:bg-obsidian-850/50 transition-colors">
                  <td className="py-2.5 font-medium text-white">{row.timeline}</td>
                  <td className="py-2.5 text-gray-300">{row.refund}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
