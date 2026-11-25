import React from 'react';
import { Mail, Globe } from 'lucide-react';
import {
  LinkedInIcon,
  WhatsAppIcon,
  InstagramIcon,
  YouTubeIcon,
  GitHubIcon,
} from '../ui/SocialIcons.jsx';
import { scrollToSection } from '../../utils/sectionRouter.js';

export const DncFooter = () => {
  const handleScrollTo = (e, target) => {
    e.preventDefault();
    scrollToSection(target, true);
  };

  const handlePageNavigation = (e, path) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

          {/* Conference Links Column */}
          <div className="foot__col">
            <h4>Conference</h4>
            <div className="foot__nav">
              <a href="/about" onClick={(e) => handleScrollTo(e, '/about')}>About the Summit</a>
              <a href="/badge" onClick={(e) => handleScrollTo(e, '/badge')}>Attendee Badge Studio</a>
              <a href="/sponsors" onClick={(e) => handleScrollTo(e, '/sponsors')}>Sponsors &amp; Partners</a>
              <a href="/sponsorship" onClick={(e) => handlePageNavigation(e, '/sponsorship')}>Sponsorship Prospectus</a>
              <a href="/press-kit.pdf" target="_blank" rel="noopener noreferrer">Official Press Kit (PDF)</a>
              <a href="https://sessionize.com/dnc26/" target="_blank" rel="noopener noreferrer">Call for Speakers (Sessionize)</a>
            </div>
          </div>

          {/* Community & Safety Column */}
          <div className="foot__col">
            <h4>Community &amp; Safety</h4>
            <div className="foot__nav">
              <a href="/code-of-conduct" onClick={(e) => handlePageNavigation(e, '/code-of-conduct')}>Code of Conduct</a>
              <a href="/privacy-policy" onClick={(e) => handlePageNavigation(e, '/privacy-policy')}>Privacy Policy</a>
              <a href="https://prpotepatilengg.ac.in/" target="_blank" rel="noopener noreferrer">Host: PRPCEM Amravati</a>
              <a href="https://www.mscprpcem.tech" target="_blank" rel="noopener noreferrer">About MSC PRPCEM</a>
              <a href="https://dotnet.microsoft.com" target="_blank" rel="noopener noreferrer">Official Microsoft .NET</a>
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
            <span className="font-mono font-bold text-[#512BD4]">Be a force for good.</span>
            <span className="dot" aria-hidden="true"></span>
            <span>MSC PRPCEM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DncFooter;
