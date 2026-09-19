import React from 'react';
import { Users, BookOpen, Compass, Flame, Sparkles, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import HackconSignpost from './HackconSignpost.jsx';

export const HackconWhyAttend = () => {
  return (
    <section id="hackcon-why-attend" className="py-8 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Signpost */}
      <HackconSignpost 
        title="WHY ATTEND HACKCON?" 
        badge="THE EXPERIENCE"
      />

      <div className="flex flex-col gap-8 sm:gap-10">
        {/* Row 1: Meet Community Leaders */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Mint Card */}
          <div className="md:col-span-7 bg-[#82C8C2] border-[3px] border-black rounded-3xl p-6 sm:p-8 md:p-10 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-white border-[2px] border-black rounded-full px-3 py-1 text-xs font-mono font-bold uppercase shadow-[2px_2px_0px_0px_#000] mb-4">
                <Users className="w-3.5 h-3.5 text-black" />
                <span>COMMUNITY & MENTORSHIP</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-black font-sans uppercase tracking-tight mb-3">
                Connect with Fellow Organizers
              </h3>
              <p className="text-black/90 font-sans text-base leading-relaxed mb-4">
                Organizing a hackathon can often feel lonely and overwhelming. At Hackcon, you are surrounded by 300+ leaders who understand the sleepless crunch times, the midnight pizza deliveries, and the thrill of seeing hackers ship their first projects.
              </p>
              <p className="text-black/80 font-sans text-sm leading-relaxed">
                Form collaborations, swap sponsor contacts, and forge friendships with organizers from across North America, Europe, and Asia.
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t-[2px] border-black/20 flex items-center justify-between text-xs font-mono font-bold text-black">
              <span>CAMP ROUNDTABLES</span>
              <span>PEER SESSIONS</span>
            </div>
          </div>

          {/* Photo / Graphic Card */}
          <div className="md:col-span-5 bg-[#F9F9F7] border-[3px] border-black rounded-3xl p-6 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-center items-center text-center relative overflow-hidden group">
            <div className="w-20 h-20 rounded-full bg-[#FFDB43] border-[2.5px] border-black flex items-center justify-center text-4xl shadow-[4px_4px_0px_0px_#000] mb-4 group-hover:scale-110 transition-transform">
              🤝
            </div>
            <h4 className="text-xl font-black font-sans text-black uppercase mb-1">
              Never Hack Alone
            </h4>
            <p className="text-stone-600 text-xs font-sans max-w-xs mb-4">
              "I met my co-director and three of our key corporate sponsors while sitting at a Hackcon picnic table."
            </p>
            <div className="bg-white border-[2px] border-black rounded-xl px-3 py-1 text-xs font-mono font-bold text-black shadow-[2px_2px_0px_0px_#000]">
              — Sarah T., Hack The North Lead
            </div>
          </div>
        </div>

        {/* Row 2: Learn from the Best (Inverted layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Photo / Graphic Card */}
          <div className="order-2 md:order-1 md:col-span-5 bg-[#FFF4C2] border-[3px] border-black rounded-3xl p-6 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-center items-center text-center relative overflow-hidden group">
            <div className="w-20 h-20 rounded-full bg-[#70D6C7] border-[2.5px] border-black flex items-center justify-center text-4xl shadow-[4px_4px_0px_0px_#000] mb-4 group-hover:scale-110 transition-transform">
              📚
            </div>
            <h4 className="text-xl font-black font-sans text-black uppercase mb-1">
              Field-Tested Playbooks
            </h4>
            <div className="flex flex-col gap-2 w-full max-w-xs mt-2 text-left">
              <div className="bg-white border-[1.5px] border-black rounded-lg p-2 text-xs font-mono flex items-center justify-between">
                <span>🎯 Pitching $10K+ Sponsors</span>
                <span className="text-emerald-700 font-bold">100%</span>
              </div>
              <div className="bg-white border-[1.5px] border-black rounded-lg p-2 text-xs font-mono flex items-center justify-between">
                <span>⚡ Crisis Comms in 15 Min</span>
                <span className="text-emerald-700 font-bold">LIVE</span>
              </div>
              <div className="bg-white border-[1.5px] border-black rounded-lg p-2 text-xs font-mono flex items-center justify-between">
                <span>🎨 Inclusivity & Diversity</span>
                <span className="text-emerald-700 font-bold">GUIDE</span>
              </div>
            </div>
          </div>

          {/* Mint Card */}
          <div className="order-1 md:order-2 md:col-span-7 bg-[#82C8C2] border-[3px] border-black rounded-3xl p-6 sm:p-8 md:p-10 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-white border-[2px] border-black rounded-full px-3 py-1 text-xs font-mono font-bold uppercase shadow-[2px_2px_0px_0px_#000] mb-4">
                <BookOpen className="w-3.5 h-3.5 text-black" />
                <span>PRACTICAL MASTERCLASSES</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-black font-sans uppercase tracking-tight mb-3">
                Learn from Seasoned Organizers
              </h3>
              <p className="text-black/90 font-sans text-base leading-relaxed mb-4">
                Skip the trial-and-error mistakes that sink first-time events. Hackcon sessions are packed with practical tactical knowledge: budgeting blueprints, volunteer management, Wi-Fi load balancing, hacker mental health, and judging logistics.
              </p>
              <p className="text-black/80 font-sans text-sm leading-relaxed">
                Take home actual spreadsheet templates, email templates, and vendor contacts used by veteran teams.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t-[2px] border-black/20 flex items-center justify-between text-xs font-mono font-bold text-black">
              <span>UNCONFERENCE TRACKS</span>
              <span>LIGHTNING TALKS</span>
            </div>
          </div>
        </div>

        {/* Row 3: Enjoy the Great Outdoors */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Mint Card */}
          <div className="md:col-span-7 bg-[#82C8C2] border-[3px] border-black rounded-3xl p-6 sm:p-8 md:p-10 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-white border-[2px] border-black rounded-full px-3 py-1 text-xs font-mono font-bold uppercase shadow-[2px_2px_0px_0px_#000] mb-4">
                <Flame className="w-3.5 h-3.5 text-black" />
                <span>SUMMER RETREAT</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-black font-sans uppercase tracking-tight mb-3">
                Disconnect from Screens, Reconnect at Camp
              </h3>
              <p className="text-black/90 font-sans text-base leading-relaxed mb-4">
                Hackcon is not held in a sterile convention hall or carpeted hotel conference center. We rent out a real classic upstate New York summer camp with wooden bunks, lake docks, pine trails, campfire rings, and fresh mountain breeze.
              </p>
              <p className="text-black/80 font-sans text-sm leading-relaxed">
                Recharge your batteries with canoeing, ropes courses, open-air stargazing, camp games, and warm s’mores under the stars.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t-[2px] border-black/20 flex items-center justify-between text-xs font-mono font-bold text-black">
              <span>LAKE CANOEING</span>
              <span>CAMPFIRE S’MORES</span>
            </div>
          </div>

          {/* Photo / Graphic Card */}
          <div className="md:col-span-5 bg-[#E8F5E9] border-[3px] border-black rounded-3xl p-6 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-center items-center text-center relative overflow-hidden group">
            <div className="w-20 h-20 rounded-full bg-[#FF9E79] border-[2.5px] border-black flex items-center justify-center text-4xl shadow-[4px_4px_0px_0px_#000] mb-4 group-hover:scale-110 transition-transform">
              🏕️
            </div>
            <h4 className="text-xl font-black font-sans text-black uppercase mb-1">
              Camp Pontiac Magic
            </h4>
            <p className="text-stone-700 text-xs font-sans max-w-xs mb-4">
              Copake, New York • Scenic Berkshire foothills, private lake, cabins, and starry night skies.
            </p>
            <div className="bg-white border-[2px] border-black rounded-xl px-3 py-1 text-xs font-mono font-bold text-black shadow-[2px_2px_0px_0px_#000]">
              100% Outdoor Adventure
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackconWhyAttend;
