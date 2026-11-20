import React, { useState } from 'react';
import { X, ExternalLink, ShieldCheck, RefreshCw, Ticket } from 'lucide-react';
import { KONFHUB_EVENT_URL, KONFHUB_WIDGET_URL } from '../../utils/konfhubApi.js';

export const KonfhubCheckoutModal = ({ isOpen, onClose, selectedTicketId = null }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);

  if (!isOpen) return null;

  // If a specific ticket ID is selected, we can pass query params if supported
  const widgetSrc = selectedTicketId
    ? `${KONFHUB_WIDGET_URL}?ticketId=${selectedTicketId}`
    : KONFHUB_WIDGET_URL;

  return (
    <div
      className="fixed inset-0 z-[350] bg-black/80 backdrop-blur-md flex items-center justify-center p-2.5 sm:p-5 overflow-hidden overscroll-contain"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label=".NET Conf 2026 Ticket Checkout"
    >
      <div
        className="relative w-full max-w-4xl bg-[#FAF8F5] border-[3px] border-black rounded-2xl sm:rounded-3xl shadow-[8px_8px_0px_#120838] flex flex-col max-h-[94vh] overflow-hidden"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-3.5 border-b-[3px] border-black bg-[#FFE89E] shrink-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="w-8 h-8 rounded-lg bg-[#512BD4] text-white border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000]">
              <Ticket className="w-4 h-4" />
            </span>
            <div>
              <h3 className="font-sans font-black text-sm sm:text-base text-[#120838] leading-tight">
                .NET Conf 2026 · Ticket Booking
              </h3>
              <p className="font-mono text-[10.5px] sm:text-xs text-stone-700 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 inline" />
                <span>Instant Registration &amp; UPI / Card Payment via KonfHub</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={KONFHUB_EVENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold bg-white hover:bg-stone-100 text-[#120838] border-2 border-black rounded-lg shadow-[2px_2px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
              title="Open direct checkout in new tab"
            >
              <span>Open on KonfHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl border-2 border-black bg-white hover:bg-[#FF6B6B] text-black hover:text-white shadow-[2px_2px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-center cursor-pointer"
              aria-label="Close checkout modal"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Modal Notice Ribbon */}
        <div className="bg-[#FAF5FF] border-b-2 border-black/15 px-3.5 py-2 sm:px-5 flex flex-wrap items-center justify-between text-[11px] sm:text-xs font-mono text-[#512BD4] shrink-0 gap-2">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Regular &amp; VIP passes live on KonfHub · Early Bird Sold Out</span>
          </span>
          <a
            href={KONFHUB_EVENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline text-[#512BD4] hover:text-[#120838] flex items-center gap-1 ml-auto"
          >
            <span>Pay on official KonfHub tab ↗</span>
          </a>
        </div>

        {/* Embedded Widget / Iframe Container */}
        <div className="relative flex-1 w-full bg-white overflow-hidden min-h-[520px] sm:min-h-[580px]">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#FAF8F5]/90 gap-3">
              <RefreshCw className="w-7 h-7 text-[#512BD4] animate-spin" />
              <p className="font-mono text-xs sm:text-sm font-bold text-[#120838]">
                Loading KonfHub Checkout...
              </p>
              <p className="font-sans text-[11px] sm:text-xs text-stone-500 text-center max-w-xs">
                Connecting securely to KonfHub ticketing servers for live pass inventory.
              </p>
            </div>
          )}

          {iframeError ? (
            <div className="flex flex-col items-center justify-center p-8 text-center h-full gap-4">
              <p className="font-sans font-bold text-base text-[#120838]">
                Browser security prevented loading checkout inside the page.
              </p>
              <p className="text-xs text-stone-600 max-w-md">
                No problem! You can complete your registration directly on our official KonfHub event page in a new secure tab.
              </p>
              <a
                href={KONFHUB_EVENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--md inline-flex items-center gap-2"
              >
                <span>Continue on KonfHub.com</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ) : (
            <iframe
              src={widgetSrc}
              title="KonfHub .NET Conf 2026 Ticket Checkout"
              className="w-full h-full min-h-[520px] sm:min-h-[580px] border-0"
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setIframeError(true);
              }}
              allow="payment *; payment; publickey-credentials-get *; clipboard-write *; fullscreen *"
              allowPaymentRequest={true}
              loading="eager"
            />
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-4 py-2.5 sm:px-6 bg-[#FAF8F5] border-t-2 border-black flex flex-wrap items-center justify-between text-[11px] font-mono text-stone-600 shrink-0">
          <span>Tickets powered by KonfHub &bull; PRPCEM Amravati</span>
          <a
            href={KONFHUB_EVENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#512BD4] underline flex items-center gap-1 font-bold"
          >
            <span>konfhub.com/dnc26</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default KonfhubCheckoutModal;

