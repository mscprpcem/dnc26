import React, { useState, useEffect } from 'react';

export const CookieConsent = () => {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('dotnetconf_consent');
    if (consent === 'true') {
      setDismissed(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('dotnetconf_consent', 'true');
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <div
      role="alert"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-white/95 backdrop-blur-md rounded-2xl border border-[#DCD5F6] shadow-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in slide-in-from-bottom-5 duration-300"
    >
      <p className="text-xs text-[#190649]/85 leading-relaxed">
        This site uses cookies for analytics and personalized content. By continuing to browse this site, you agree to this use.
      </p>
      <button
        type="button"
        onClick={handleAccept}
        className="dotnet-solid-btn-accent text-xs py-2 px-5 shrink-0"
      >
        Accept
      </button>
    </div>
  );
};
