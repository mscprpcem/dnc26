import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  ArrowRight,
  ExternalLink,
  Mic,
  Share2,
  Check,
  Calendar
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
    <div className="min-h-screen bg-[#FAF8F5] text-black font-sans selection:bg-[#512BD4] selection:text-white pb-16 relative">
      
      {/* Top Banner & Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-[2.5px] border-black px-4 sm:px-8 py-3 shadow-[0px_4px_0px_0px_#000]">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={handleBackToHome}
            className="bg-[#512BD4] hover:bg-[#4322B0] text-white font-mono font-black text-xs sm:text-sm px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl border-[2px] border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
            <span>BACK TO SUMMIT</span>
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={handleShare}
              className="px-3.5 py-2 rounded-xl text-xs font-mono font-bold bg-[#FFD13B] hover:bg-[#FFE066] text-black border-[2px] border-black shadow-[2px_2px_0px_0px_#000] transition-all flex items-center gap-1.5 cursor-pointer"
              title="Share conference schedule"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-700 stroke-[3]" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copiedLink ? 'COPIED!' : 'SHARE'}</span>
            </button>

            <a
              href="#register"
              onClick={handleBackToHome}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-black uppercase bg-[#00E5FF] hover:bg-[#33EAFF] text-black border-[2px] border-black shadow-[2.5px_2.5px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <span>REGISTER</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Schedule Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Title Hero Card */}
        <div className="bg-[#512BD4] text-white border-[3px] border-black rounded-3xl p-6 sm:p-10 shadow-[6px_6px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] mb-8 relative overflow-hidden">
          <div className="inline-flex items-center gap-2 bg-[#00E5FF] text-black text-xs font-mono font-black px-3 py-1 rounded-full uppercase border-[1.5px] border-black mb-4 shadow-[2px_2px_0px_0px_#000]">
            <Calendar className="w-4 h-4" />
            <span>OFFICIAL CONFERENCE AGENDA</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black font-sans uppercase tracking-tight leading-tight mb-3">
            .NET Conf 2026 Amravati <br />
            <span className="text-[#FFD13B]">Conference Schedule</span>
          </h1>

          <p className="text-white/90 text-sm sm:text-base font-sans leading-relaxed max-w-2xl">
            Keynotes, architecture deep dives, live hands-on labs, and community lightning talks hosted at PRPCEM Campus, Amravati.
          </p>

          <div className="mt-6 pt-4 border-t border-white/20 flex flex-wrap items-center gap-4 text-xs font-mono text-white/80">
            <span>DATE: SATURDAY, DECEMBER 26, 2026</span>
            <span>•</span>
            <span>VENUE: PRPCEM CAMPUS, AMRAVATI</span>
            <span>•</span>
            <span>SESSIONIZE INTEGRATED</span>
          </div>
        </div>

        {/* Primary Schedule Section */}
        <div className="bg-white rounded-3xl border-[2.5px] sm:border-[3px] border-black shadow-[6px_6px_0px_0px_#000] p-4 sm:p-8 md:p-10 mb-10">
          <SessionizeSchedule 
            showHeader={false}
            defaultView="gridSmart"
          />
        </div>

        {/* CFP & Venue Callout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="p-6 rounded-2xl bg-white border-[2px] sm:border-[2.5px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EEEAFB] text-[#512BD4] border-[1.5px] border-black flex items-center justify-center mb-3 shadow-[1.5px_1.5px_0px_0px_#000]">
                <Mic className="w-5 h-5" />
              </div>
              <h4 className="text-base font-black font-sans uppercase text-black mb-1.5">
                Call for Speakers (CFP)
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed mb-4">
                Got a talk on Generative AI &amp; Autonomous Agents, GitHub Copilot &amp; DevOps, Azure Cloud Architecture, or Modern .NET 11? Submit your session proposal on Sessionize today!
              </p>
            </div>
            <a
              href={SESSIONIZE_PUBLIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-bold text-[#512BD4] hover:underline inline-flex items-center gap-1 self-start"
            >
              <span>Submit Talk via Sessionize</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-white border-[2px] sm:border-[2.5px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#DCFCE7] text-[#16A34A] border-[1.5px] border-black flex items-center justify-center mb-3 shadow-[1.5px_1.5px_0px_0px_#000]">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-base font-black font-sans uppercase text-black mb-1.5">
                Conference Venue &amp; Campus
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed mb-4">
                PRPCEM Campus, Badnera Road, Amravati, Maharashtra 444607. Dual presentation halls with high-speed internet and live stream facilities.
              </p>
            </div>
            <button
              type="button"
              onClick={handleBackToHome}
              className="text-xs font-mono font-bold text-[#512BD4] hover:underline inline-flex items-center gap-1 self-start cursor-pointer"
            >
              <span>View Venue &amp; Directions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t-[2.5px] border-black py-8 px-4 text-center text-xs font-mono font-bold text-black shadow-[0px_-2px_0px_0px_#000]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 .NET Conf Amravati · Organized by MSC PRPCEM</p>
          <div className="flex items-center gap-4 text-xs font-mono font-bold text-[#512BD4]">
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
