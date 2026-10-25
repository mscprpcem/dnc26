import React from 'react';

export const DncFooter = ({ onSwitchToClassic }) => {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="foot">
      {/* Top Skyline Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#512BD4]/20 to-transparent"></div>

      <div className="wrap">
        <div className="foot__grid">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#512BD4] text-white flex items-center justify-center font-mono font-black text-xs shadow-md border border-white/20 select-none">
                .NET
              </div>
              <span className="text-xl font-bold font-display text-[#120838]">
                .NET Conf 2026 Amravati
              </span>
            </div>
            <p style={{ marginTop: '.85rem', maxWidth: '38ch', color: '#362F4B', fontSize: '.95rem', lineHeight: 1.6 }}>
              Central India&apos;s premier Microsoft developer conference. Organized with passion by Microsoft Student Club at P. R. Pote Patil College of Engineering and Management (PRPCEM).
            </p>

            {/* Social Links */}
            <div className="foot__socials">
              <a href="https://www.linkedin.com/company/mscprpcem" target="_blank" rel="noopener noreferrer" className="foot__soc-btn" aria-label="LinkedIn">
                <svg width="18" height="18"><use href="#s-linkedin" /></svg>
              </a>
              <a href="https://github.com/mscprpcem" target="_blank" rel="noopener noreferrer" className="foot__soc-btn" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://chat.whatsapp.com/EPFRDsWd057DBqYS5bpK67" target="_blank" rel="noopener noreferrer" className="foot__soc-btn" aria-label="WhatsApp">
                <svg width="18" height="18"><use href="#s-whatsapp" /></svg>
              </a>
              <a href="https://www.instagram.com/mscprpcem" target="_blank" rel="noopener noreferrer" className="foot__soc-btn" aria-label="Instagram">
                <svg width="18" height="18"><use href="#s-instagram" /></svg>
              </a>
              <a href="mailto:dotnetconfamt@prpotepatilengg.ac.in" className="foot__soc-btn" aria-label="Email">
                <svg width="18" height="18"><use href="#s-mail" /></svg>
              </a>
              <a href="https://www.mscprpcem.tech" target="_blank" rel="noopener noreferrer" className="foot__soc-btn" aria-label="Website">
                <svg width="18" height="18"><use href="#s-globe" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4>Quick Navigation</h4>
            <div className="foot__nav">
              <a href="#about" onClick={(e) => handleScrollTo(e, 'about')}>About the Summit</a>
              <a href="#tracks" onClick={(e) => handleScrollTo(e, 'tracks')}>Tracks &amp; Themes</a>
              <a href="#speakers" onClick={(e) => handleScrollTo(e, 'speakers')}>Call for Speakers</a>
              <a href="#tickets" onClick={(e) => handleScrollTo(e, 'tickets')}>Delegate Passes (Soon)</a>
              <a href="#schedule" onClick={(e) => handleScrollTo(e, 'schedule')}>Schedule</a>
              <a href="#faq" onClick={(e) => handleScrollTo(e, 'faq')}>FAQ</a>
            </div>
          </div>

          {/* Guidelines & Community Column */}
          <div>
            <h4>Community &amp; Safety</h4>
            <div className="foot__nav">
              <a href="/code-of-conduct">Code of Conduct</a>
              <a href="https://www.mscprpcem.tech" target="_blank" rel="noopener noreferrer">About MSC PRPCEM</a>
              <a href="https://dotnet.microsoft.com" target="_blank" rel="noopener noreferrer">Official .NET Portal</a>
              <a href="https://dotnetfoundation.org" target="_blank" rel="noopener noreferrer">.NET Foundation</a>
            </div>
          </div>
        </div>

        {/* Base Copyright */}
        <div className="foot__base">
          <div>
            &copy; 2026 Microsoft Student Club PRPCEM &amp; .NET Conf. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Powered by .NET 11 &amp; C# 14</span>
            <span className="dot" aria-hidden="true"></span>
            <span>PRPCEM Campus, Amravati</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DncFooter;
