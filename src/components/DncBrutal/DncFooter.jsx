import React from 'react';
import { Mail, Globe } from 'lucide-react';
import {
  LinkedInIcon,
  WhatsAppIcon,
  InstagramIcon,
  YouTubeIcon,
  GitHubIcon,
} from '../ui/SocialIcons.jsx';

export const DncFooter = () => {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="foot" id="footer">
      {/* Top Skyline Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#512BD4]/20 to-transparent" aria-hidden="true" />

      <div className="wrap">
        <div className="foot__grid">
          {/* Brand Column */}
          <div className="foot__brand">
            <div className="flex items-center gap-2.5">
              <img
                src="/logos/dotnet-logo.jpg"
                alt=".NET Logo"
                className="w-9 h-9 rounded-xl object-contain border border-black/20 shadow-md select-none shrink-0"
              />
              <span className="text-xl font-bold font-display text-[#120838]">
                .NET Conf 2026 Amravati
              </span>
            </div>
            <p className="foot__desc">
              Central India&apos;s premier summit uniting Generative AI, GitHub Copilot, DevOps, Microsoft Azure Cloud, and Modern .NET. Organized with passion by Microsoft Student Club PRPCEM.
            </p>

            {/* Social Links */}
            <div className="foot__socials">
              <a href="https://www.linkedin.com/company/mscprpcem" target="_blank" rel="noopener noreferrer" className="foot__soc-btn" aria-label="LinkedIn" title="LinkedIn">
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a href="https://chat.whatsapp.com/EPFRDsWd057DBqYS5bpK67" target="_blank" rel="noopener noreferrer" className="foot__soc-btn" aria-label="WhatsApp" title="WhatsApp Community">
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/mscprpcem" target="_blank" rel="noopener noreferrer" className="foot__soc-btn" aria-label="Instagram" title="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@mscprpcem" target="_blank" rel="noopener noreferrer" className="foot__soc-btn" aria-label="YouTube" title="YouTube Channel">
                <YouTubeIcon className="w-4 h-4" />
              </a>
              <a href="https://github.com/mscprpcem/dnc26" target="_blank" rel="noopener noreferrer" className="foot__soc-btn" aria-label="GitHub" title="GitHub">
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a href="mailto:dotnetconfamt@prpotepatilengg.ac.in" className="foot__soc-btn" aria-label="Email" title="Email Us">
                <Mail className="w-4 h-4" />
              </a>
              <a href="https://www.mscprpcem.tech" target="_blank" rel="noopener noreferrer" className="foot__soc-btn" aria-label="Website" title="MSC PRPCEM Website">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="foot__col">
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
          <div className="foot__col">
            <h4>Community &amp; Safety</h4>
            <div className="foot__nav">
              <a href="/code-of-conduct">Code of Conduct</a>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/sponsorship">Sponsorship &amp; Tiers</a>
              <a href="https://www.mscprpcem.tech" target="_blank" rel="noopener noreferrer">About MSC PRPCEM</a>
              <a href="https://dotnet.microsoft.com" target="_blank" rel="noopener noreferrer">Official .NET Portal</a>
              <a href="https://dotnetfoundation.org" target="_blank" rel="noopener noreferrer">.NET Foundation</a>
              <a href="/funding.json" target="_blank" rel="noopener noreferrer">Funding Manifest</a>
            </div>
          </div>
        </div>

        {/* Base Copyright */}
        <div className="foot__base">
          <div>
            &copy; 2026 Microsoft Student Club PRPCEM &amp; .NET Conf. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono font-bold text-[#512BD4]">Be a force for good.</span>
            <span className="dot" aria-hidden="true"></span>
            <span>PRPCEM Campus, Amravati</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DncFooter;
