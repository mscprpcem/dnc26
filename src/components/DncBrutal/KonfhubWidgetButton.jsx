import React, { useEffect, useRef, useState } from 'react';
import { Ticket } from 'lucide-react';

/**
 * Official KonfHub Widget Button Embed
 * Renders:
 * <div><script src="https://widget.konfhub.com/widget.js" button_id="..."></script></div>
 * 
 * Safety design:
 * - Uses an isolated leaf DOM node for script injection to prevent React DOM reconciliation conflicts.
 * - Watches local host mutations to toggle fallback button and automatically lock/unlock body scroll
 *   when the KonfHub checkout modal opens/closes.
 */
export const KonfhubWidgetButton = ({
  buttonId,
  ticketName = 'Pass',
  onClickFallback,
}) => {
  const scriptHostRef = useRef(null);
  const [isWidgetMounted, setIsWidgetMounted] = useState(false);

  useEffect(() => {
    if (!buttonId || !scriptHostRef.current) return;

    const host = scriptHostRef.current;

    // Check if KonfHub widget button is already mounted
    if (host.querySelector('.reg-button')) {
      setIsWidgetMounted(true);
    }

    // Clear any previous raw DOM inside this isolated host only
    host.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://widget.konfhub.com/widget.js';
    script.setAttribute('button_id', buttonId);
    script.async = true;

    // Watch local host for button mounting and modal opening/closing
    const observer = new MutationObserver(() => {
      if (host.querySelector('.reg-button')) {
        setIsWidgetMounted(true);
      }

      // Check if modal is currently open inside this host
      const isModalOpen = Boolean(host.querySelector('.modal-container-wrapper'));
      if (isModalOpen) {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';
      } else {
        // Only release scroll if no other modal is active
        if (!document.querySelector('.modal-container-wrapper')) {
          document.body.style.overflow = '';
          document.documentElement.style.overflow = '';
          document.body.style.touchAction = '';
        }
      }
    });

    observer.observe(host, { childList: true, subtree: true });
    host.appendChild(script);

    return () => {
      observer.disconnect();
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [buttonId]);

  return (
    <div className="konfhub-btn-slot w-full relative">
      {/* 1. Isolated host for KonfHub third-party script - untouched by React reconciliation */}
      <div ref={scriptHostRef} className="konfhub-embed-host" />

      {/* 2. Fallback button - sibling element toggled via style to avoid DOM removeChild conflicts */}
      <button
        type="button"
        style={{ display: isWidgetMounted ? 'none' : 'flex' }}
        className="btn btn--primary btn--md w-full justify-center cursor-pointer konfhub-fallback-btn"
        onClick={onClickFallback}
      >
        <Ticket className="w-4 h-4 shrink-0" />
        <span>Book {ticketName}</span>
        <svg className="btn__arrow shrink-0" width="14" height="14" aria-hidden="true">
          <use href="#i-arrow" />
        </svg>
      </button>
    </div>
  );
};

export default KonfhubWidgetButton;
