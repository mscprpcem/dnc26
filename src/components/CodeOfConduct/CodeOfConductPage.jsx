import React, { useEffect } from 'react';
import { 
  ShieldCheck, 
  ArrowLeft, 
  Heart, 
  AlertTriangle, 
  Users, 
  Mail, 
  Phone, 
  Building2, 
  Sparkles, 
  CheckCircle2, 
  Lock, 
  FileText,
  Printer
} from 'lucide-react';

export const CodeOfConductPage = ({ onBack }) => {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Code of Conduct | .NET Conf 2026 Amravati";
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.title = originalTitle;
    };
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleGoBack = () => {
    if (onBack) {
      onBack();
    } else {
      window.location.hash = '';
      window.location.pathname = '/';
    }
  };

  return (
    <div className="dnc-brutal-canvas min-h-screen font-sans selection:bg-[#512BD4] selection:text-white pb-20 relative">
      {/* Top Banner & Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-[2.5px] border-black px-4 sm:px-8 py-3 shadow-[0px_4px_0px_0px_#000]">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={handleGoBack}
            className="bg-[#512BD4] hover:bg-[#4322B0] text-white font-mono font-black text-xs sm:text-sm px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl border-[2px] border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
            <span>BACK TO .NET CONF 2026</span>
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 bg-[#FFD13B] hover:bg-[#FFE066] text-black font-mono font-bold text-xs px-3.5 py-2 rounded-xl border-[2px] border-black shadow-[2px_2px_0px_0px_#000] cursor-pointer"
              title="Print Code of Conduct"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT POLICY</span>
            </button>

            <div className="bg-[#EEEAFB] text-[#512BD4] border-[2px] border-black px-3 py-1.5 rounded-xl text-xs font-mono font-black shadow-[2px_2px_0px_0px_#000]">
              v2026.1 OFFICIAL
            </div>
          </div>
        </div>
      </header>

      {/* Main Document Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        
        {/* Title Hero Card */}
        <div className="bg-[#512BD4] text-white border-[3px] border-black rounded-3xl p-6 sm:p-10 shadow-[6px_6px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] mb-8 sm:mb-12 relative overflow-hidden">
          <div className="inline-flex items-center gap-2 bg-[#00E5FF] text-black text-xs font-mono font-black px-3 py-1 rounded-full uppercase border-[1.5px] border-black mb-4 shadow-[2px_2px_0px_0px_#000]">
            <ShieldCheck className="w-4 h-4" />
            <span>COMMUNITY SAFETY & ETHICS</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black font-sans uppercase tracking-tight leading-tight mb-4">
            .NET Conf 2026 Amravati <br />
            <span className="text-[#FFD13B]">Code of Conduct</span>
          </h1>

          <p className="text-white/90 text-sm sm:text-base font-sans leading-relaxed max-w-2xl">
            We are dedicated to providing a respectful, welcoming, inclusive, and harassment-free conference experience for everyone at the PRPCEM Campus, Amravati and across all our official digital spaces.
          </p>

          <div className="mt-6 pt-4 border-t border-white/20 flex flex-wrap items-center gap-4 text-xs font-mono text-white/80">
            <span>HOST: MSC PRPCEM</span>
            <span>•</span>
            <span>VENUE: PRPCEM CAMPUS, AMRAVATI</span>
            <span>•</span>
            <span>APPLIES TO ALL PARTICIPANTS</span>
          </div>
        </div>

        {/* Section 1: Our Pledge */}
        <div className="bg-white border-[2.5px] border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] mb-8">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 rounded-xl bg-[#00E5FF] border-[2px] border-black flex items-center justify-center text-black font-black text-base shadow-[2px_2px_0px_0px_#000]">
              <Heart className="w-5 h-5 fill-black" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight text-black">
              1. Our Pledge
            </h2>
          </div>

          <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed mb-4">
            In the interest of fostering an open and welcoming environment, we as organizers, speakers, delegates, sponsors, and volunteers of <strong>.NET Conf 2026 Amravati</strong> pledge to make participation in our conference and its community a harassment-free experience for everyone, regardless of:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-4 font-mono text-xs font-bold">
            <div className="bg-[#FAF9FF] border border-black p-2.5 rounded-xl">🌟 Experience Level</div>
            <div className="bg-[#FAF9FF] border border-black p-2.5 rounded-xl">🌈 Gender Identity</div>
            <div className="bg-[#FAF9FF] border border-black p-2.5 rounded-xl">♿ Disability & Accessibility</div>
            <div className="bg-[#FAF9FF] border border-black p-2.5 rounded-xl">🧠 Neurodiversity</div>
            <div className="bg-[#FAF9FF] border border-black p-2.5 rounded-xl">🌍 Ethnicity & Nationality</div>
            <div className="bg-[#FAF9FF] border border-black p-2.5 rounded-xl">💻 Tech Stack & Background</div>
          </div>

          <p className="text-stone-700 text-sm font-sans leading-relaxed">
            We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy developer ecosystem in Central India.
          </p>
        </div>

        {/* Section 2: Expected Positive Standards */}
        <div className="bg-white border-[2.5px] border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] mb-8">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-xl bg-[#16A34A] border-[2px] border-black flex items-center justify-center text-white font-black text-base shadow-[2px_2px_0px_0px_#000]">
              <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight text-black">
              2. Expected Positive Standards
            </h2>
          </div>

          <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed mb-5">
            Examples of behavior that contributes to a positive, collaborative environment for all:
          </p>

          <div className="space-y-3.5">
            <div className="flex items-start gap-3 p-3.5 bg-[#F0FDF4] border-[1.5px] border-black rounded-2xl">
              <span className="w-5 h-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <div>
                <strong className="text-black font-sans text-sm">Demonstrating Empathy & Kindness:</strong>
                <p className="text-stone-700 text-xs sm:text-sm mt-0.5">
                  Treat every person with courtesy and respect, whether discussing high-level architecture decisions or welcoming a first-time student programmer.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 bg-[#F0FDF4] border-[1.5px] border-black rounded-2xl">
              <span className="w-5 h-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <div>
                <strong className="text-black font-sans text-sm">Being Respectful of Differing Viewpoints:</strong>
                <p className="text-stone-700 text-xs sm:text-sm mt-0.5">
                  Differences in opinion regarding programming languages, frameworks, or cloud architectures should be debated constructively and professionally without arrogance or insults.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 bg-[#F0FDF4] border-[1.5px] border-black rounded-2xl">
              <span className="w-5 h-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <div>
                <strong className="text-black font-sans text-sm">Giving and Gracefully Accepting Constructive Feedback:</strong>
                <p className="text-stone-700 text-xs sm:text-sm mt-0.5">
                  Praise peer accomplishments, offer helpful suggestions politely during Q&A and workshops, and accept feedback with humility.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 bg-[#F0FDF4] border-[1.5px] border-black rounded-2xl">
              <span className="w-5 h-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <div>
                <strong className="text-black font-sans text-sm">Respecting Physical & Digital Consent:</strong>
                <p className="text-stone-700 text-xs sm:text-sm mt-0.5">
                  Respect personal boundaries, ask before taking close-up portrait photos, and honor requests to not be included in video recordings or social postings.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Unacceptable Behavior */}
        <div className="bg-white border-[2.5px] border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] mb-8">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-xl bg-[#DC2626] border-[2px] border-black flex items-center justify-center text-white font-black text-base shadow-[2px_2px_0px_0px_#000]">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight text-black">
              3. Unacceptable Behavior
            </h2>
          </div>

          <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed mb-4">
            The following behaviors are strictly prohibited at .NET Conf 2026 Amravati and in any related online spaces:
          </p>

          <ul className="space-y-2.5 text-stone-800 text-xs sm:text-sm font-sans">
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✕</span>
              <span><strong>Harassment & Discrimination:</strong> Offensive comments, verbal abuse, or derogatory remarks related to gender, sexual orientation, disability, appearance, caste, race, or religion.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✕</span>
              <span><strong>Sexualized Imagery & Material:</strong> Inappropriate use of sexualized language or imagery in presentation slide decks, workshop materials, or sponsor exhibition booths.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✕</span>
              <span><strong>Deliberate Intimidation & Stalking:</strong> Unwelcome physical contact, following participants around campus, or repeated uninvited advances.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✕</span>
              <span><strong>Sustained Disruption:</strong> Persistent interruption of sessions, keynote speakers, workshops, or official announcements.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✕</span>
              <span><strong>Privacy Invasions & Doxxing:</strong> Publishing others' private information, such as physical or email addresses, without their explicit permission.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">✕</span>
              <span><strong>Advocating or Encouraging Any Prohibited Conduct:</strong> Encouraging or coaching others to harass participants or compromise event safety.</span>
            </li>
          </ul>
        </div>

        {/* Section 4: Scope & Applicability */}
        <div className="bg-[#FAF9FF] border-[2.5px] border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] mb-8">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 rounded-xl bg-[#FFD13B] border-[2px] border-black flex items-center justify-center text-black font-black text-base shadow-[2px_2px_0px_0px_#000]">
              <Building2 className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight text-black">
              4. Scope & Where This Applies
            </h2>
          </div>

          <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed mb-4">
            This Code of Conduct applies within all conference physical venues and virtual spaces:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-sans">
            <div className="bg-white border-[1.5px] border-black p-3.5 rounded-2xl shadow-[2px_2px_0px_0px_#000]">
              <strong className="block text-black font-bold mb-1">🏛️ Physical Campus Spaces:</strong>
              <p className="text-stone-600">
                Main Auditorium, Keynote stage, Technical lab classrooms, Breakout tracks, Cafeteria lunch zones, and PRPCEM campus grounds.
              </p>
            </div>

            <div className="bg-white border-[1.5px] border-black p-3.5 rounded-2xl shadow-[2px_2px_0px_0px_#000]">
              <strong className="block text-black font-bold mb-1">💬 Digital & Online Channels:</strong>
              <p className="text-stone-600">
                Official WhatsApp delegate community, Discord channels, GitHub repositories, Speaker submission portal, and social media interactions.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Incident Reporting & Emergency Contacts */}
        <div className="bg-[#FFF4C2] border-[3px] border-black rounded-3xl p-6 sm:p-8 md:p-10 shadow-[6px_6px_0px_0px_#000] mb-8 relative overflow-hidden">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 rounded-xl bg-black border-[2px] border-black flex items-center justify-center text-[#FFD13B] font-black text-base shadow-[2px_2px_0px_0px_#000]">
              <Phone className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight text-black">
              5. Reporting an Incident
            </h2>
          </div>

          <p className="text-stone-900 text-sm sm:text-base font-sans leading-relaxed mb-6">
            If you are being harassed, notice that someone else is being harassed, or have any other safety concerns, please contact the organizing team immediately. All reports are kept <strong>strictly confidential</strong>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border-[2px] border-black p-4 rounded-2xl shadow-[3px_3px_0px_0px_#000]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#512BD4] mb-1">
                <Mail className="w-4 h-4" />
                <span>CONFIDENTIAL EMAIL</span>
              </div>
              <div className="text-base font-black text-black">
                msc@prpcem.ac.in
              </div>
              <p className="text-[11px] font-sans text-stone-600 mt-1">
                Monitored in real time during the conference by the Incident Response Committee.
              </p>
            </div>

            <div className="bg-white border-[2px] border-black p-4 rounded-2xl shadow-[3px_3px_0px_0px_#000]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-emerald-700 mb-1">
                <Users className="w-4 h-4" />
                <span>ON-SITE ORGANIZERS</span>
              </div>
              <div className="text-base font-black text-black">
                PRPCEM Help Desk & Crew
              </div>
              <p className="text-[11px] font-sans text-stone-600 mt-1">
                Look for team members wearing the official purple MSC PRPCEM Organizer badges and lanyards.
              </p>
            </div>
          </div>

          <div className="bg-black text-white p-4 rounded-2xl border-[2px] border-black flex items-start gap-3 text-xs sm:text-sm font-sans">
            <Lock className="w-5 h-5 text-[#00E5FF] shrink-0 mt-0.5" />
            <div>
              <strong>Strict Confidentiality Guarantee:</strong>
              <p className="text-white/80 mt-0.5">
                We will never disclose the identity of a reporting party without their explicit consent, and our staff will assist participants in contacting campus security or local law enforcement if requested.
              </p>
            </div>
          </div>
        </div>

        {/* Section 6: Enforcement & Consequences */}
        <div className="bg-white border-[2.5px] border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] mb-12">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 rounded-xl bg-[#512BD4] border-[2px] border-black flex items-center justify-center text-white font-black text-base shadow-[2px_2px_0px_0px_#000]">
              <FileText className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight text-black">
              6. Enforcement & Consequences
            </h2>
          </div>

          <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed mb-4">
            Participants asked to stop any harassing behavior are expected to comply immediately. If a participant engages in harassing or unacceptable behavior, the event organizers may take any action they deem appropriate, including:
          </p>

          <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm font-sans text-stone-800 mb-6">
            <li><strong>Immediate Verbal Warning:</strong> Formal instruction to cease the unacceptable behavior immediately.</li>
            <li><strong>Expulsion from Specific Sessions:</strong> Removal from the current talk, lab, workshop, or panel.</li>
            <li><strong>Permanent Conference Expulsion:</strong> Revocation of delegate pass and removal from the campus without refund or compensation.</li>
            <li><strong>Speaker or Sponsor Revocation:</strong> Immediate removal of talk slot or sponsor exhibition booth.</li>
            <li><strong>Future Ban:</strong> Permanent prohibition from attending or speaking at future events organized by MSC PRPCEM.</li>
          </ol>

          <div className="pt-4 border-t border-stone-200 text-xs font-mono text-stone-500">
            Adopted by Microsoft Student Chapter (MSC), P. R. Pote Patil College of Engineering and Management (PRPCEM), Amravati. Based upon the .NET Foundation Code of Conduct and Contributor Covenant v2.1.
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="text-center">
          <button
            onClick={handleGoBack}
            className="bg-[#512BD4] hover:bg-[#4322B0] text-white font-mono font-black text-sm uppercase px-8 py-3.5 rounded-2xl border-[2.5px] border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
            <span>RETURN TO .NET CONF 2026 HOMEPAGE</span>
          </button>
        </div>

      </main>
    </div>
  );
};

export default CodeOfConductPage;
