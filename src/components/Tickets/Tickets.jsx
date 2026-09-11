import React from 'react';
import { Check, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { Container } from '../ui/Container.jsx';
import { SectionHeader } from '../ui/SectionHeader.jsx';
import { Button } from '../ui/Button.jsx';
import { ticketsData } from '../../data/tickets.js';

export const Tickets = () => {
  return (
    <section id="tickets" className="py-20 lg:py-28 bg-[#F7F7F8] border-b border-[#E5E7EB]">
      <Container>
        <SectionHeader
          label="TICKETS & PASSES"
          title="Choose your conference pass."
          description="Secure your seat for Central India's premier Microsoft developer gathering. Direct online issuance via KonfHub with instant QR confirmation."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto">
          {ticketsData.map((tier) => (
            <div
              key={tier.id}
              className={`conf-card p-6 sm:p-8 flex flex-col justify-between relative bg-white transition-all duration-200 h-full ${
                tier.isRecommended
                  ? 'border-2 border-[#512BD4] shadow-xl ring-4 ring-[#512BD4]/10 md:-translate-y-2'
                  : 'border border-[#E5E7EB] hover:shadow-md'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#512BD4] text-white text-[11px] font-bold font-mono tracking-wider uppercase shadow-md flex items-center gap-1.5 whitespace-nowrap">
                  <Sparkles className="w-3.5 h-3.5" />
                  {tier.badge}
                </div>
              )}

              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold tracking-wider text-[#5F6368] uppercase font-mono">
                    {tier.name}
                  </h3>
                  {tier.isRecommended && (
                    <span className="text-[10px] font-bold text-[#512BD4] bg-[#F5F2FE] px-2 py-0.5 rounded border border-[#DDD4FA]">
                      BEST VALUE
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#171717] tracking-tight font-mono">
                    {tier.price}
                  </span>
                  {tier.price !== 'Free' && (
                    <span className="text-xs text-[#8A8F98] font-medium">/ person</span>
                  )}
                </div>
                <p className="text-xs text-[#5F6368] mt-1 font-medium">
                  {tier.priceNote}
                </p>

                <p className="text-xs text-[#5F6368] mt-4 pb-4 border-b border-[#E5E7EB] leading-relaxed">
                  {tier.description}
                </p>

                {/* Features List */}
                <div className="mt-5 flex-1">
                  <div className="text-[11px] font-mono font-bold text-[#171717] uppercase mb-3 tracking-wide">
                    What's Included:
                  </div>
                  <ul className="space-y-2.5 text-xs text-[#171717]">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#F5F2FE] text-[#512BD4] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#512BD4]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button - strictly aligned at the bottom */}
              <div className="mt-8 pt-5 border-t border-[#E5E7EB]/60">
                <Button
                  variant={tier.isRecommended ? 'primary' : 'secondary'}
                  size="md"
                  fullWidth
                  href={tier.ctaUrl}
                  target="_blank"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className={tier.isRecommended ? 'font-bold shadow-sm' : 'font-semibold'}
                >
                  {tier.ctaText}
                </Button>
                <div className="text-center text-[11px] text-[#8A8F98] mt-2 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#059669]" />
                  <span>Instant KonfHub issuance</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center max-w-xl mx-auto text-xs text-[#5F6368]">
          Need bulk passes for your university department or company engineering team?{' '}
          <a
            href="mailto:contact@mscprpcem.tech?subject=Group%20Passes%20.NET%20Conf%202026"
            className="text-[#512BD4] font-semibold hover:underline"
          >
            Contact the organizing team at MSC PRPCEM
          </a>.
        </div>
      </Container>
    </section>
  );
};

export default Tickets;
