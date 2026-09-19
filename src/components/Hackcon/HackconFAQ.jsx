import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import HackconSignpost from './HackconSignpost.jsx';

export const HackconFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Where is Hackcon taking place and how do I get there?",
      a: "Hackcon is hosted at Camp Pontiac in Copake, New York (approx. 2 hours north of New York City in the scenic Berkshire region). MLH organizes direct roundtrip chartered coach shuttles from Midtown Manhattan straight to the camp gates. If you are driving yourself, free on-site parking is available for all attendees throughout the weekend."
    },
    {
      q: "What is included with my Hackcon ticket?",
      a: "Your Hackcon pass is 100% all-inclusive! It includes 2 nights of rustic cabin lodging at Camp Pontiac, all meals (from Friday dinner through Sunday lunch), unlimited snacks, hot coffee, midnight pizza, campfire s'mores, full access to 30+ workshops, lightning talks, un-conference sessions, lake canoeing, high-ropes adventure courses, and an exclusive Hackcon XII camper swag pack."
    },
    {
      q: "Who is eligible to attend Hackcon?",
      a: "Hackcon is tailored specifically for high school and collegiate hackathon organizers, campus developer club leads, MLH coaches, and student tech community builders. Whether you are running your first 50-hacker workshop or leading a 1,500-person flagship event, you will find immense value here."
    },
    {
      q: "Are travel stipends or diversity scholarships available?",
      a: "Yes! Major League Hacking provides needs-based travel stipends and diversity scholarships to ensure financial constraints do not prevent passionate community leaders from participating. You can request scholarship consideration directly in the attendee application form."
    },
    {
      q: "What should I pack for camp?",
      a: "Pack comfortable summer camp attire! We suggest sneakers/hiking shoes, twin-size bedding or a sleeping bag + pillow, swimwear & towel for the private lake, a warm jacket or hoodie for cool mountain nights, toiletries, bug spray, sunscreen, your laptop & charger, and of course your own hackathon's stickers to swap with fellow organizers!"
    },
    {
      q: "What safety protocols and Code of Conduct apply?",
      a: "All attendees, speakers, sponsors, and staff must adhere strictly to the Major League Hacking Code of Conduct. MLH maintains a zero-tolerance policy towards harassment or exclusionary behavior. Camp Pontiac is a secure, private campus with trained medical staff and camp counselors on duty 24/7."
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="hackcon-faqs" className="py-8 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Signpost */}
      <HackconSignpost 
        title="FREQUENTLY ASKED QUESTIONS" 
        badge="NEED HELP?"
      />

      {/* Accordion Container */}
      <div className="flex flex-col gap-3.5">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`bg-white border-[2.5px] border-black rounded-2xl overflow-hidden transition-all duration-200 ${
                isOpen 
                  ? 'shadow-[5px_5px_0px_0px_#000]' 
                  : 'shadow-[3px_3px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#000]'
              }`}
            >
              {/* Question Header */}
              <button
                onClick={() => toggle(idx)}
                className={`w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-sans font-bold text-base sm:text-lg text-black transition-colors ${
                  isOpen ? 'bg-[#FFF9D2]' : 'hover:bg-stone-50'
                }`}
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-black text-white font-mono text-xs flex items-center justify-center shrink-0">
                    Q{idx + 1}
                  </span>
                  <span>{faq.q}</span>
                </div>

                <div className={`p-1.5 rounded-lg border-[1.5px] border-black shrink-0 ${
                  isOpen ? 'bg-[#FFDB43]' : 'bg-white'
                }`}>
                  {isOpen ? <Minus className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4 stroke-[3]" />}
                </div>
              </button>

              {/* Answer Content */}
              {isOpen && (
                <div className="p-4 sm:p-5 pt-2 border-t-[2px] border-black/10 bg-white font-sans text-sm sm:text-base text-stone-800 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HackconFAQ;
