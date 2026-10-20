import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  ArrowRight,
  ExternalLink,
  Mic,
  Share2,
  Check
} from 'lucide-react';
import { SessionizeSchedule } from './SessionizeSchedule.jsx';
import { SESSIONIZE_PUBLIC_URL } from '../../utils/sessionizeApi.js';

export const SchedulePage = ({ onBack }) => {
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Conference Schedule | .NET Conf 2026 Amravati";
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.title = originalTitle;
    };
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '.NET Conf 2026 Amravati - Conference Schedule',
        text: 'Explore the sessions, meet the speakers, and plan your conference experience at .NET Conf 2026 Amravati.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      });
    }
  };

  const handleBackToHome = () => {
    if (onBack) {
      onBack();
    } else {
      window.location.hash = '';
      window.location.pathname = '/';
    }
  };

  return (
    <div className="min-h-screen bg-[#F0EFFB] text-[#292735] font-inter selection:bg-[#7046C8]/20 selection:text-[#7046C8] relative">
      
      {/* Top Banner & Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#A99AE8]/30 px-4 sm:px-8 py-3 shadow-2xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={handleBackToHome}
            className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold font-inter text-[#7046C8] bg-[#F0EFFB] border border-[#A99AE8]/40 hover:bg-[#e7e3fa] transition-colors flex items-center gap-2 cursor-pointer shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Summit Home</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="px-3 py-2 rounded-xl text-xs font-medium font-inter text-[#292735]/80 bg-white border border-[#A99AE8]/40 hover:text-[#7046C8] hover:border-[#7046C8] transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Share conference schedule"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copiedLink ? 'Link Copied!' : 'Share'}</span>
            </button>

            <a
              href="#register"
              onClick={handleBackToHome}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold font-inter bg-[#7046C8] text-white hover:bg-[#5833A5] transition-colors flex items-center gap-1.5 shadow-2xs whitespace-nowrap"
            >
              <span>Register</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Schedule Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Breadcrumb info */}
        <div className="flex items-center gap-2 text-xs text-[#292735]/70 mb-4 font-inter">
          <button 
            type="button" 
            onClick={handleBackToHome}
            className="hover:text-[#7046C8] transition-colors cursor-pointer"
          >
            .NET Conf 2026 Amravati
          </button>
          <span>/</span>
          <span className="text-[#7046C8] font-semibold">Official Schedule</span>
        </div>

        {/* Primary Schedule Section */}
        <div className="bg-white rounded-3xl border border-[#A99AE8]/30 shadow-xs p-4 sm:p-8 md:p-10 mb-10">
          <SessionizeSchedule 
            showHeader={true}
            defaultView="gridSmart"
          />
        </div>

        {/* CFP & Venue Callout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="p-6 rounded-3xl bg-white border border-[#A99AE8]/30 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F0EFFB] text-[#7046C8] flex items-center justify-center mb-3">
                <Mic className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold font-montserrat text-[#292735] mb-1.5">
                Call for Speakers (CFP)
              </h4>
              <p className="text-xs text-[#292735]/75 leading-relaxed mb-4">
                Got a talk on .NET 11, C# 14, Semantic Kernel, Azure OpenAI, or Cloud Architecture? Submit your session proposal on Sessionize today!
              </p>
            </div>
            <a
              href={SESSIONIZE_PUBLIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#7046C8] hover:underline inline-flex items-center gap-1 self-start"
            >
              <span>Submit Talk via Sessionize</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#A99AE8]/30 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F0EFFB] text-[#7046C8] flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold font-montserrat text-[#292735] mb-1.5">
                Conference Venue &amp; Campus
              </h4>
              <p className="text-xs text-[#292735]/75 leading-relaxed mb-4">
                PRPCEM Campus, Badnera Road, Amravati, Maharashtra 444607. Dual presentation halls with high-speed internet and live stream facilities.
              </p>
            </div>
            <button
              type="button"
              onClick={handleBackToHome}
              className="text-xs font-semibold text-[#7046C8] hover:underline inline-flex items-center gap-1 self-start cursor-pointer"
            >
              <span>View Venue &amp; Directions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#A99AE8]/30 py-8 px-4 text-center text-xs text-[#292735]/70">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 .NET Conf Amravati · Organized by MSC PRPCEM</p>
          <div className="flex items-center gap-4 text-xs font-semibold text-[#7046C8]">
            <button type="button" onClick={handleBackToHome} className="hover:underline cursor-pointer">
              Home
            </button>
            <a href={SESSIONIZE_PUBLIC_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">
              Sessionize CFP
            </a>
            <a href="https://www.mscprpcem.tech" target="_blank" rel="noopener noreferrer" className="hover:underline">
              MSC PRPCEM
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default SchedulePage;
