import React from 'react';
import { ArrowRight, Calendar, MapPin, Sparkles, Award } from 'lucide-react';
import { eventData } from '../../data/event.js';

export const Hero = () => {
  return (
    <section className="hero-section overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="md:col-span-7 flex flex-col items-start z-10 text-left">

            {/* Main Headline: .NET Conf and 2026 Amravati perfectly block-aligned */}
            <h1 className="hero-title font-black font-display tracking-tight text-[#14053A] mb-3 sm:mb-4 w-fit flex flex-col">
              <span className="block text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-black text-[#14053A] tracking-tight leading-[0.98]">
                <span className="inline-block -ml-[0.16em]">.</span>NET Conf
              </span>
              <span className="block text-2xl xs:text-3xl sm:text-4xl md:text-[2.85rem] lg:text-[3.55rem] font-black tracking-tight leading-[1.05] mt-1 sm:mt-1.5">
                <span className="community-event-gradient-text">2026 Amravati</span>
              </span>
            </h1>

            {/* Description: Flagship Dev Event for Amravati focusing on the Microsoft Ecosystem */}
            <p className="hero-description text-[#190649]/85 font-medium leading-relaxed max-w-xl mb-4 text-sm sm:text-base">
              Central India's premier developer event for Amravati, celebrating the broader Microsoft ecosystem — from modern .NET and Azure cloud to Generative AI and developer tooling.
            </p>

            {/* College Name & Location */}
            <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#512BD4] mb-6">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#512BD4] shrink-0" />
              <span>{eventData.organizer.institution}, Amravati</span>
            </div>

            {/* Action Buttons */}
            <div className="hero-action-buttons flex items-stretch sm:items-center gap-3 w-full sm:w-auto mb-6 sm:mb-7">
              <a
                href="/interest"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('register-interest')?.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', '/interest');
                }}
                className="relative group inline-flex items-center justify-center gap-2.5 py-3 px-6 sm:px-7 rounded-xl font-bold font-display text-sm sm:text-base text-white bg-gradient-to-r from-[#512BD4] via-[#7B2BF9] to-[#D600AA] hover:from-[#4323B0] hover:via-[#681FD8] hover:to-[#B50090] shadow-lg shadow-[#512BD4]/30 hover:shadow-xl hover:shadow-[#512BD4]/45 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 cursor-pointer border border-white/25 overflow-hidden"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>Register Interest</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
              </a>

              <a
                href="/badge"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('attendee-badge')?.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', '/badge');
                }}
                className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm py-2.5 sm:py-3 px-4 sm:px-5 font-bold rounded-xl bg-white/90 hover:bg-[#EEEAFB] text-[#512BD4] border-2 border-[#D8CEF7] shadow-xs transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <Award className="w-4 h-4 text-[#512BD4]" />
                <span>Get Attendee Badge</span>
              </a>
            </div>

            {/* Announcement Notice Card */}
            <div className="w-full max-w-md bg-gradient-to-r from-white via-[#FCFAFF] to-[#F7F2FE] backdrop-blur-md rounded-xl sm:rounded-2xl border-2 border-[#D8CEF7] p-3.5 sm:p-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#512BD4] mb-1">
                <Calendar className="w-4 h-4 text-[#512BD4] shrink-0" />
                <span>.NET Conf 2026 · Coming Soon</span>
              </div>
              <p className="text-xs text-[#190649]/80 leading-relaxed font-medium">
                Official dates, session tracks, and speaker lineups will be announced soon. Register your interest below for priority delegate updates!
              </p>
            </div>

          </div>

          {/* Right Column: Hero Mascot */}
          <div className="md:col-span-5 flex items-center justify-center relative hero-mascot-container">
            {/* Mascot Image Frame (Steady, crisp, natural sizing across all breakpoints) */}
            <div className="relative w-full max-w-[220px] xs:max-w-[270px] sm:max-w-[330px] md:max-w-[400px] lg:max-w-[480px] xl:max-w-[520px] select-none">
              <img
                role="presentation"
                src="/conf-hero.svg"
                alt=".NET Launch Mascot — .NET Conf Amravati"
                className="w-full h-auto drop-shadow-xl select-none"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
