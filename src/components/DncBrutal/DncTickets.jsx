import React, { useState, useEffect } from 'react';
import { WhatsAppIcon } from '../ui/SocialIcons.jsx';
import { 
  DEFAULT_KONFHUB_TIERS, 
  fetchKonfhubTickets, 
  KONFHUB_EVENT_URL 
} from '../../utils/konfhubApi.js';
import { Check, Sparkles, Ticket } from 'lucide-react';

export const DncTickets = ({ onOpenBadge, onOpenRegister, onOpenCheckout }) => {
  const [tiers, setTiers] = useState(DEFAULT_KONFHUB_TIERS);

  // Fetch live ticket details from KonfHub REST API on mount
  useEffect(() => {
    let isMounted = true;
    fetchKonfhubTickets().then((result) => {
      if (isMounted && result && result.tickets) {
        setTiers(result.tickets);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const handleBookTicket = (tier) => {
    if (onOpenCheckout) {
      onOpenCheckout(tier?.id);
    } else if (onOpenRegister) {
      onOpenRegister();
    } else {
      window.open(KONFHUB_EVENT_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="section" id="tickets" style={{ scrollMarginTop: '80px' }}>
      <div className="wrap">
        <div className="sechead sechead--center">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>
            Official Delegate Passes · Jan 2–3, 2027
          </p>
          <h2 className="h-sec">
            Delegate Passes &amp;<br />
            Registration.
          </h2>
          <p className="lede" style={{ marginInline: 'auto' }}>
            Select your pass below to attend Central India&apos;s largest Microsoft developer summit at PRPCEM Amravati.
          </p>
        </div>

        {/* 3 Passes Grid: Early Bird, Regular, VIP */}
        <div className="fares dnc-passes-grid" id="fares">
          {tiers.map((f) => {
            const isFeatured = f.isPopular;
            const isSoldOut = Boolean(f.isSoldOut || f.status === 'Sold Out' || f.urgencyText?.toLowerCase() === 'sold out');

            return (
              <div
                key={f.id || f.name}
                className={`fcard ${isFeatured ? 'is-featured relative border-[3px] border-[#512BD4] shadow-[8px_8px_0px_#512BD4]' : ''} ${isSoldOut ? 'border-2 border-stone-300 bg-stone-50/50' : ''}`}
                style={{
                  '--tc': f.color,
                  background: isSoldOut ? '#FCFAFA' : (isFeatured ? '#FAF8FF' : '#FFFFFF'),
                  zIndex: isFeatured ? 2 : 1,
                }}
              >
                {/* Popular Badge Flag */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#512BD4] text-white px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider shadow-[2px_2px_0px_#120838] flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFD13B]" />
                    <span>Most Popular</span>
                  </div>
                )}

                {/* Card Header */}
                <div className="flex items-center justify-between mb-2 pt-1">
                  <span
                    className={`fcard__badge text-[11px] font-mono font-bold px-2.5 py-1 rounded-md border ${
                      isSoldOut ? 'bg-rose-50 text-rose-700 border-rose-300' : ''
                    }`}
                    style={!isSoldOut ? { color: f.color, borderColor: f.color, background: 'rgba(255,255,255,0.85)' } : {}}
                  >
                    {isSoldOut ? `${f.tier} · Sold Out` : f.badge}
                  </span>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6B6380]">
                    {f.tier}
                  </span>
                </div>

                {/* Price Display */}
                <div className="my-2 pb-3 border-b-2 border-stone-200/80">
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-3xl sm:text-4xl font-mono font-black ${isSoldOut ? 'text-stone-400 line-through' : 'text-[#120838]'}`}>
                        {f.currencySymbol}{f.price}
                      </span>
                      <span className="text-xs font-mono text-stone-500 uppercase">
                        / Full 2-Day Pass
                      </span>
                    </div>
                    {isSoldOut && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-rose-600 text-white font-mono font-black text-[10px] uppercase tracking-wider shadow-[1px_1px_0px_#120838]">
                        Sold Out
                      </span>
                    )}
                  </div>
                  <h3 className="fcard__title mt-1.5">
                    <span className="text-lg sm:text-xl font-bold">{f.name}</span>
                  </h3>

                  {!isSoldOut && (
                    <div className="mt-1.5 flex flex-col gap-1">
                      <span className="text-[10.5px] font-mono text-stone-600 bg-stone-100 px-2 py-0.5 rounded border border-stone-200/80 w-fit">
                        {f.availableTill || 'Available Till: 30th Dec 2026, 06:00 PM'}
                      </span>
                      {f.urgencyText && (
                        <span className="text-xs font-mono font-bold text-rose-600">
                          {f.urgencyText}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* What's Included Ticket Description (from KonfHub) */}
                <div className="ticket-desc my-3.5 flex-1 text-xs text-stone-700">
                  {f.description ? (
                    <div dangerouslySetInnerHTML={{ __html: f.description }} />
                  ) : (
                    <div className="space-y-2">
                      {(f.perks || []).map((perk, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-stone-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{perk}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* CTAs */}
                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column' }}>
                  {isSoldOut ? (
                    <button
                      type="button"
                      disabled
                      className="w-full justify-center flex items-center gap-2 py-3 px-4 rounded-xl font-mono font-bold text-xs sm:text-sm uppercase tracking-wider bg-stone-200 text-stone-500 border-2 border-stone-300 cursor-not-allowed select-none shadow-none"
                    >
                      <span>Passes Sold Out</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn--primary btn--md w-full justify-center cursor-pointer"
                      onClick={() => handleBookTicket(f)}
                    >
                      <Ticket className="w-4 h-4 shrink-0" />
                      <span>Book {f.name}</span>
                      <svg className="btn__arrow shrink-0" width="14" height="14" aria-hidden="true">
                        <use href="#i-arrow" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Offer Bar */}
        <div className="offerbar">
          <div className="flex items-center gap-3">
            <span className="offerbar__tag">
              <span>Group Delegation</span>
            </span>
            <p>
              Bringing 10 or more student developers from your college or team? Contact us directly for bulk institutional discount passes and bus transit support.
            </p>
          </div>
          <a
            className="offerbar__cta"
            href="https://wa.me/919359982959?text=Hi%20MSC%20PRPCEM!%20We're%20a%20group%20of%2010%2B%20planning%20to%20attend%20.NET%20Conf%202026."
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            <span>Message on WhatsApp</span>
            <svg className="btn__arrow" width="15" height="15" aria-hidden="true">
              <use href="#i-arrow" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DncTickets;
