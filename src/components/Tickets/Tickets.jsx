import React from 'react';
import { Check, Ticket, ArrowRight, ShieldCheck } from 'lucide-react';
import { eventData } from '../../data/event.js';

export const Tickets = () => {
  return (
    <section id="passes" className="w-full py-10 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#EEEAFB] text-[#512BD4] text-[11px] font-bold uppercase tracking-wider mb-2.5 border border-[#DCD5F6]">
            <Ticket className="w-3 h-3" />
            <span>Registration & Passes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-[#14053A] mb-3">
            Choose Your <span className="community-event-gradient-text">Conference Pass</span>
          </h2>
          <p className="text-sm sm:text-base text-[#190649]/75 leading-relaxed">
            Secure your seat at Central India’s biggest tech conference. All registrations are verified and processed securely via KonfHub.
          </p>
        </div>

        {/* 3-Column Pass Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {eventData.tickets.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl p-5 sm:p-6 md:p-7 flex flex-col justify-between transition-all duration-200 relative ${
                tier.highlighted
                  ? 'bg-white border-2 border-[#512BD4] shadow-lg shadow-[#512BD4]/15 -translate-y-1'
                  : 'bg-white/85 backdrop-blur-md border border-[#DCD5F6]/80 hover:border-[#9780E5]'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#512BD4] to-[#D600AA] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full shadow-xs">
                  {tier.badge}
                </div>
              )}

              <div>
                {!tier.highlighted && (
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#512BD4] block mb-1">
                    {tier.badge}
                  </span>
                )}
                <h3 className="text-lg sm:text-xl font-bold font-display text-[#14053A] mb-1">
                  {tier.name}
                </h3>
                <div className="text-2xl sm:text-3xl font-black font-display text-[#512BD4] mb-3">
                  {tier.price}
                </div>
                <p className="text-xs sm:text-sm text-[#190649]/75 mb-5 leading-relaxed">
                  {tier.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 pt-4 border-t border-[#DCD5F6]/60 mb-6">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#190649]/85">
                      <Check className="w-3.5 h-3.5 text-[#512BD4] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={eventData.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-2.5 px-4 rounded-lg font-bold text-xs sm:text-sm text-center transition-all flex items-center justify-center gap-1.5 ${
                  tier.highlighted
                    ? 'dotnet-solid-btn-accent shadow-xs'
                    : 'dotnet-outline-btn-accent'
                }`}
              >
                <span>{tier.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Security & Partner reassurance */}
        <div className="mt-8 sm:mt-10 text-center flex items-center justify-center gap-1.5 text-xs text-[#190649]/70">
           </div>

      </div>
    </section>
  );
};
