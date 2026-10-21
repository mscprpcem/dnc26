import React from 'react';
import { ArrowRight, Calendar, MapPin, Award } from 'lucide-react';
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

            {/* Description: Annual Dev Event for Amravati focusing on the Microsoft Ecosystem */}
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

          {/* Right Column: Sleek Developer Console */}
          <div className="md:col-span-5 flex items-center justify-center relative w-full">
            <div className="w-full max-w-[420px] rounded-2xl bg-[#14053A] border-2 border-[#512BD4]/40 shadow-2xl shadow-[#512BD4]/20 overflow-hidden text-left">
              <div className="bg-[#1E0B4E] px-4 py-2.5 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
                </div>
                <div className="text-xs font-mono font-bold text-stone-300">
                  Program.cs · <span className="text-[#00BDD6]">.NET 11</span>
                </div>
                <div className="text-[10px] font-mono font-bold bg-[#512BD4] text-white px-2 py-0.5 rounded">
                  C# 14
                </div>
              </div>
              <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed text-stone-200">
                <p className="text-stone-500">// Central India · Annual Conference</p>
                <p><span className="text-[#D600AA] font-bold">var</span> builder = WebApplication.<span className="text-[#00BDD6]">CreateBuilder</span>(args);</p>
                <p className="mt-2 text-stone-400">builder.Services.<span className="text-[#00BDD6]">AddDotNetConf</span>(cfg =&gt; &#123;</p>
                <p className="pl-4 text-stone-300">cfg.Campus = <span className="text-[#FFD13B]">"PRPCEM Amravati"</span>;</p>
                <p className="pl-4 text-stone-300">cfg.Tracks = [<span className="text-[#00BDD6]">"Cloud"</span>, <span className="text-[#00BDD6]">"Azure AI"</span>];</p>
                <p className="text-stone-400">&#125;);</p>
                <p className="mt-2"><span className="text-[#D600AA] font-bold">var</span> app = builder.<span className="text-[#00BDD6]">Build</span>();</p>
                <p><span className="text-[#D600AA] font-bold">await</span> app.<span className="text-[#00BDD6]">RunAsync</span>();</p>
              </div>
              <div className="bg-[#0B0220] p-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-emerald-400">
                <span>$ dotnet run --project dnc26</span>
                <span className="text-stone-400">Ready</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
