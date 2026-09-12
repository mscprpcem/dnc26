import React from 'react';
import { Handshake } from 'lucide-react';
import {
  MicrosoftLogo,
  GitHubLogo,
  PRPCEMLogo,
  MSCPRPCEMLogo,
  KonfHubLogo,
  SohamGlobalLogo,
} from '../ui/SponsorLogos.jsx';

export const Sponsors = () => {
  return (
    <section id="partners" className="w-full py-10 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#EEEAFB] text-[#512BD4] text-[11px] font-bold uppercase tracking-wider mb-2.5 border border-[#DCD5F6]">
            <Handshake className="w-3 h-3" />
            <span>Official Ecosystem Collaborators</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-[#14053A] mb-2.5">
            Partners & <span className="text-gradient-magenta">Sponsors</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#190649]/75 leading-relaxed">
            Organized in collaboration with global industry leaders, host academic institutions, and student community chapters.
          </p>
        </div>

        {/* Real Logos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          
          {/* Microsoft */}
          <div className="bg-white/90 backdrop-blur-xs rounded-xl border border-[#DCD5F6]/80 p-4 sm:p-5 flex items-center justify-between hover:border-[#9780E5] transition-all group">
            <MicrosoftLogo className="h-7" />
            <span className="text-[10px] font-semibold text-[#512BD4] bg-[#EEEAFB] px-2 py-0.5 rounded">
              Technology Partner
            </span>
          </div>

          {/* GitHub */}
          <div className="bg-white/90 backdrop-blur-xs rounded-xl border border-[#DCD5F6]/80 p-4 sm:p-5 flex items-center justify-between hover:border-[#9780E5] transition-all group">
            <GitHubLogo className="h-7" />
            <span className="text-[10px] font-semibold text-[#512BD4] bg-[#EEEAFB] px-2 py-0.5 rounded">
              Developer Platform
            </span>
          </div>

          {/* PRPCEM Amravati */}
          <div className="bg-white/90 backdrop-blur-xs rounded-xl border border-[#DCD5F6]/80 p-4 sm:p-5 flex items-center justify-between hover:border-[#9780E5] transition-all group">
            <PRPCEMLogo className="h-7" />
            <span className="text-[10px] font-semibold text-[#002B49] bg-blue-50 px-2 py-0.5 rounded">
              Campus Host
            </span>
          </div>

          {/* Microsoft Student Club PRPCEM */}
          <div className="bg-white/90 backdrop-blur-xs rounded-xl border border-[#DCD5F6]/80 p-4 sm:p-5 flex items-center justify-between hover:border-[#9780E5] transition-all group">
            <MSCPRPCEMLogo className="h-7" />
            <span className="text-[10px] font-semibold text-[#512BD4] bg-[#EEEAFB] px-2 py-0.5 rounded">
              Organizing Chapter
            </span>
          </div>

          {/* KonfHub */}
          <div className="bg-white/90 backdrop-blur-xs rounded-xl border border-[#DCD5F6]/80 p-4 sm:p-5 flex items-center justify-between hover:border-[#9780E5] transition-all group">
            <KonfHubLogo className="h-7" />
            <span className="text-[10px] font-semibold text-[#6B46C1] bg-purple-50 px-2 py-0.5 rounded">
              Ticketing Platform
            </span>
          </div>

          {/* SohamGlobal */}
          <div className="bg-white/90 backdrop-blur-xs rounded-xl border border-[#DCD5F6]/80 p-4 sm:p-5 flex items-center justify-between hover:border-[#9780E5] transition-all group">
            <SohamGlobalLogo className="h-7" />
            <span className="text-[10px] font-semibold text-[#0078D4] bg-sky-50 px-2 py-0.5 rounded">
              Community Partner
            </span>
          </div>

        </div>

        {/* Community Chapter Note */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-xs text-[#190649]/70">
            Interested in supporting .NET Conf 2026 Amravati as an enterprise sponsor or community partner? Contact <a href="mailto:contact@mscprpcem.tech" className="text-[#512BD4] font-bold underline">contact@mscprpcem.tech</a>
          </p>
        </div>

      </div>
    </section>
  );
};
