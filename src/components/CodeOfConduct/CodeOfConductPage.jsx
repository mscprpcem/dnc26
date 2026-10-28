import React, { useEffect } from 'react';
import '../DncBrutal/DncBrutalStyles.css';
import DncWarliSprites from '../DncBrutal/DncWarliSprites.jsx';
import DncFooter from '../DncBrutal/DncFooter.jsx';
import { 
  ShieldCheck, 
  ArrowLeft, 
  Heart, 
  AlertTriangle, 
  Users, 
  Mail, 
  Phone, 
  Building2, 
  CheckCircle2, 
  Lock, 
  FileText, 
  Printer, 
  Eye, 
  ShieldAlert,
  MapPin,
  ArrowRight
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
      window.history.pushState({}, '', '/');
      window.location.pathname = '/';
    }
  };

  const handleScrollToId = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 90;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: Math.max(0, elementPosition - navOffset),
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="dnc-fest-canvas min-h-screen text-[#120838] font-sans selection:bg-[#512BD4] selection:text-white">
      {/* 0. Paper Grain Overlay & Sprites */}
      <div className="grain-overlay" aria-hidden="true"></div>
      <DncWarliSprites />

      {/* 1. TOP STICKY BAR */}
      <div className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b-2 border-black/10 px-4 sm:px-6 lg:px-10 py-3">
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={handleGoBack}
            className="btn btn--gold btn--sm cursor-pointer inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to .NET Conf 2026</span>
          </button>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handlePrint}
              className="btn btn--ghost btn--sm cursor-pointer hidden sm:inline-flex"
              title="Print Code of Conduct"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Policy</span>
            </button>

            <div className="bg-[#EEEAFB] text-[#512BD4] border border-black/30 px-3 py-1 rounded font-mono font-bold text-xs shadow-[1px_1px_0px_#120838]">
              v2026.1 OFFICIAL
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN DOCUMENT FLOW */}
      <main id="main">

        {/* HERO SECTION — Full Space & Theme Alignment */}
        <section className="section band--gradient-space" style={{ paddingTop: 'clamp(2.5rem, 5vw, 4rem)', paddingBottom: '2.5rem' }}>
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
            
            <div className="sechead sechead--split" style={{ alignItems: 'flex-start' }}>
              <div>
                <p className="eyebrow">Community Safety &amp; Ethics · Official Policy</p>
                <h1 className="h-sec">
                  Code of Conduct<br />
                  <span style={{ color: 'var(--purple)' }}>.NET Conf 2026 Amravati</span>
                </h1>
              </div>
              <p className="lede">
                We are dedicated to providing a respectful, welcoming, inclusive, and harassment-free conference experience for everyone at the <strong>PRPCEM Campus, Amravati</strong> and across all our official digital community spaces.
              </p>
            </div>

            {/* Quick Metadata Strip */}
            <div className="flex flex-wrap items-center gap-3 mt-4 pt-2 font-mono text-xs text-stone-700">
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded border border-black/30 shadow-[1px_1px_0px_#120838]">
                <Building2 className="w-3.5 h-3.5 text-[#512BD4]" />
                Host: Microsoft Student Club PRPCEM
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded border border-black/30 shadow-[1px_1px_0px_#120838]">
                <MapPin className="w-3.5 h-3.5 text-[#512BD4]" />
                Venue: PRPCEM Campus, Kathora Road, Amravati
              </span>
              <span className="flex items-center gap-1.5 bg-[#FFE89E] px-3 py-1.5 rounded border border-black/40 text-black font-bold shadow-[1px_1px_0px_#120838]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#512BD4]" />
                Applies to All Attendees, Speakers, Sponsors &amp; Volunteers
              </span>
            </div>

          </div>
        </section>

        {/* DOCUMENT BODY WITH FULL-SPACE SIDEBAR LAYOUT */}
        <section className="section band--sun" style={{ paddingTop: '2.5rem', paddingBottom: '4rem' }}>
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Sticky Table of Contents Sidebar (3 Cols) */}
              <aside className="lg:col-span-3 sticky top-20 hidden lg:block space-y-4">
                <div className="sticker" style={{ background: '#FFFFFF', padding: '1.25rem' }}>
                  <p className="eyebrow" style={{ fontSize: '.72rem', marginBottom: '.65rem' }}>Quick Navigation</p>
                  <nav className="space-y-1.5 font-sans text-xs font-bold">
                    <a
                      href="#pledge"
                      onClick={(e) => handleScrollToId(e, 'pledge')}
                      className="block p-2 rounded hover:bg-[#FAF8FF] text-stone-700 hover:text-[#512BD4] transition-colors border border-transparent hover:border-black/20"
                    >
                      1. Our Community Pledge
                    </a>
                    <a
                      href="#expected"
                      onClick={(e) => handleScrollToId(e, 'expected')}
                      className="block p-2 rounded hover:bg-[#FAF8FF] text-stone-700 hover:text-[#512BD4] transition-colors border border-transparent hover:border-black/20"
                    >
                      2. Expected Positive Standards
                    </a>
                    <a
                      href="#unacceptable"
                      onClick={(e) => handleScrollToId(e, 'unacceptable')}
                      className="block p-2 rounded hover:bg-[#FAF8FF] text-stone-700 hover:text-[#512BD4] transition-colors border border-transparent hover:border-black/20"
                    >
                      3. Unacceptable Conduct (Zero Tolerance)
                    </a>
                    <a
                      href="#scope"
                      onClick={(e) => handleScrollToId(e, 'scope')}
                      className="block p-2 rounded hover:bg-[#FAF8FF] text-stone-700 hover:text-[#512BD4] transition-colors border border-transparent hover:border-black/20"
                    >
                      4. Scope &amp; Where This Applies
                    </a>
                    <a
                      href="#reporting"
                      onClick={(e) => handleScrollToId(e, 'reporting')}
                      className="block p-2 rounded hover:bg-[#FFE89E] text-stone-900 transition-colors border border-transparent hover:border-black/20"
                    >
                      5. Incident Reporting
                    </a>
                    <a
                      href="#enforcement"
                      onClick={(e) => handleScrollToId(e, 'enforcement')}
                      className="block p-2 rounded hover:bg-[#FAF8FF] text-stone-700 hover:text-[#512BD4] transition-colors border border-transparent hover:border-black/20"
                    >
                      6. Enforcement &amp; Consequences
                    </a>
                  </nav>
                </div>

                {/* Emergency Contact Card */}
                <div className="sticker" style={{ background: '#FFE89E', padding: '1.25rem', borderColor: '#120838' }}>
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs font-black uppercase text-[#120838]">
                    <ShieldAlert className="w-4 h-4 text-[#512BD4]" />
                    <span>Immediate Assistance</span>
                  </div>
                  <p className="font-sans text-xs text-stone-800 mb-3">
                    Need to report a code of conduct violation? Contact our Safety Committee:
                  </p>
                  <a
                    href="mailto:dotnetconfamt@prpotepatilengg.ac.in?subject=Code%20of%20Conduct%20Report%20-%20.NET%20Conf%202026"
                    className="btn btn--primary btn--sm w-full text-center"
                    style={{ justifyContent: 'center' }}
                  >
                    <span>Report Privately</span>
                  </a>
                </div>
              </aside>

              {/* Main Content Sections (9 Cols) */}
              <div className="lg:col-span-9 space-y-6">

                {/* Mobile Quick Jump Bar */}
                <div className="lg:hidden sticker overflow-x-auto" style={{ background: '#FFFFFF', padding: '.75rem' }}>
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold whitespace-nowrap min-w-max">
                    <span className="text-[#512BD4] uppercase flex items-center gap-1 mr-1">
                      <Eye className="w-3.5 h-3.5" />
                      <span>JUMP:</span>
                    </span>
                    <a href="#pledge" onClick={(e) => handleScrollToId(e, 'pledge')} className="px-2 py-1 bg-stone-100 hover:bg-[#512BD4] hover:text-white rounded border border-black/30">1. Pledge</a>
                    <a href="#expected" onClick={(e) => handleScrollToId(e, 'expected')} className="px-2 py-1 bg-stone-100 hover:bg-[#512BD4] hover:text-white rounded border border-black/30">2. Standards</a>
                    <a href="#unacceptable" onClick={(e) => handleScrollToId(e, 'unacceptable')} className="px-2 py-1 bg-stone-100 hover:bg-[#512BD4] hover:text-white rounded border border-black/30">3. Prohibited</a>
                    <a href="#scope" onClick={(e) => handleScrollToId(e, 'scope')} className="px-2 py-1 bg-stone-100 hover:bg-[#512BD4] hover:text-white rounded border border-black/30">4. Scope</a>
                    <a href="#reporting" onClick={(e) => handleScrollToId(e, 'reporting')} className="px-2 py-1 bg-[#FFE89E] rounded border border-black/40">5. Report</a>
                    <a href="#enforcement" onClick={(e) => handleScrollToId(e, 'enforcement')} className="px-2 py-1 bg-stone-100 hover:bg-[#512BD4] hover:text-white rounded border border-black/30">6. Enforcement</a>
                  </div>
                </div>

                {/* Section 1: Our Pledge */}
                <section id="pledge" className="sticker" style={{ background: '#FFFFFF', padding: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded bg-[#EDE9FE] border border-black flex items-center justify-center text-[#512BD4] font-black shadow-[2px_2px_0px_#120838]">
                      <Heart className="w-5 h-5 fill-[#512BD4]" />
                    </div>
                    <h2 className="h-sub" style={{ fontSize: '1.4rem' }}>
                      1. Our Community Pledge
                    </h2>
                  </div>

                  <p className="font-sans text-stone-800 text-sm leading-relaxed mb-4">
                    In the interest of fostering an open and welcoming environment, we as organizers, speakers, delegates, sponsors, and volunteers of <strong>.NET Conf 2026 Amravati</strong> pledge to make participation in our conference and its community a harassment-free experience for everyone, regardless of:
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-4 font-mono text-xs font-bold">
                    <div className="bg-[#FAF8FF] border border-black/40 p-2.5 rounded shadow-[1px_1px_0px_#120838]">Experience Level</div>
                    <div className="bg-[#FAF8FF] border border-black/40 p-2.5 rounded shadow-[1px_1px_0px_#120838]">Gender Identity</div>
                    <div className="bg-[#FAF8FF] border border-black/40 p-2.5 rounded shadow-[1px_1px_0px_#120838]">Disability &amp; Accessibility</div>
                    <div className="bg-[#FAF8FF] border border-black/40 p-2.5 rounded shadow-[1px_1px_0px_#120838]">Neurodiversity</div>
                    <div className="bg-[#FAF8FF] border border-black/40 p-2.5 rounded shadow-[1px_1px_0px_#120838]">Ethnicity &amp; Nationality</div>
                    <div className="bg-[#FAF8FF] border border-black/40 p-2.5 rounded shadow-[1px_1px_0px_#120838]">Tech Stack &amp; Background</div>
                  </div>

                  <p className="font-sans text-stone-700 text-xs sm:text-sm leading-relaxed">
                    We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy developer ecosystem across Central India.
                  </p>
                </section>

                {/* Section 2: Expected Positive Standards */}
                <section id="expected" className="sticker" style={{ background: '#FFFFFF', padding: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded bg-[#DCFCE7] border border-black flex items-center justify-center text-emerald-700 font-black shadow-[2px_2px_0px_#120838]">
                      <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <h2 className="h-sub" style={{ fontSize: '1.4rem' }}>
                      2. Expected Positive Standards
                    </h2>
                  </div>

                  <p className="font-sans text-stone-800 text-sm leading-relaxed mb-4">
                    Examples of behavior that contributes to a positive, collaborative environment for all delegates:
                  </p>

                  <div className="space-y-3 font-sans">
                    <div className="flex items-start gap-3 p-3.5 bg-[#F0FDF4] border border-black/30 rounded-lg shadow-[1px_1px_0px_#120838]">
                      <span className="w-5 h-5 rounded bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                      <div>
                        <strong className="text-black text-sm block">Demonstrating Empathy &amp; Kindness:</strong>
                        <p className="text-stone-700 text-xs sm:text-sm mt-0.5">
                          Treat every person with courtesy and respect, whether discussing high-level architecture decisions or welcoming a first-time student programmer.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 bg-[#F0FDF4] border border-black/30 rounded-lg shadow-[1px_1px_0px_#120838]">
                      <span className="w-5 h-5 rounded bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                      <div>
                        <strong className="text-black text-sm block">Being Respectful of Differing Viewpoints:</strong>
                        <p className="text-stone-700 text-xs sm:text-sm mt-0.5">
                          Differences in opinion regarding programming languages, frameworks, or cloud architectures should be debated constructively and professionally without arrogance or insults.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 bg-[#F0FDF4] border border-black/30 rounded-lg shadow-[1px_1px_0px_#120838]">
                      <span className="w-5 h-5 rounded bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                      <div>
                        <strong className="text-black text-sm block">Giving and Gracefully Accepting Constructive Feedback:</strong>
                        <p className="text-stone-700 text-xs sm:text-sm mt-0.5">
                          Praise peer accomplishments, offer helpful suggestions politely during Q&amp;A and workshops, and accept feedback with humility.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 bg-[#F0FDF4] border border-black/30 rounded-lg shadow-[1px_1px_0px_#120838]">
                      <span className="w-5 h-5 rounded bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                      <div>
                        <strong className="text-black text-sm block">Respecting Physical &amp; Digital Consent:</strong>
                        <p className="text-stone-700 text-xs sm:text-sm mt-0.5">
                          Respect personal boundaries, ask before taking close-up portrait photos, and honor requests to not be included in video recordings or social postings.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 3: Unacceptable Behavior */}
                <section id="unacceptable" className="sticker" style={{ background: '#FFFFFF', padding: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded bg-[#FEE2E2] border border-black flex items-center justify-center text-red-700 font-black shadow-[2px_2px_0px_#120838]">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <h2 className="h-sub" style={{ fontSize: '1.4rem' }}>
                      3. Unacceptable Behavior (Zero Tolerance)
                    </h2>
                  </div>

                  <p className="font-sans text-stone-800 text-sm leading-relaxed mb-4">
                    The following behaviors are strictly prohibited across all .NET Conf 2026 spaces:
                  </p>

                  <div className="space-y-2.5 font-sans text-xs sm:text-sm">
                    <div className="flex items-start gap-2.5 p-3 bg-red-50/60 border border-red-200 rounded">
                      <span className="text-red-600 font-black text-base shrink-0">✕</span>
                      <span><strong>Harassment &amp; Discrimination:</strong> Offensive comments, verbal abuse, or derogatory remarks related to gender, sexual orientation, disability, appearance, caste, race, or religion.</span>
                    </div>

                    <div className="flex items-start gap-2.5 p-3 bg-red-50/60 border border-red-200 rounded">
                      <span className="text-red-600 font-black text-base shrink-0">✕</span>
                      <span><strong>Sexualized Imagery &amp; Material:</strong> Inappropriate use of sexualized language or imagery in presentation slide decks, workshop materials, or sponsor exhibition booths.</span>
                    </div>

                    <div className="flex items-start gap-2.5 p-3 bg-red-50/60 border border-red-200 rounded">
                      <span className="text-red-600 font-black text-base shrink-0">✕</span>
                      <span><strong>Deliberate Intimidation &amp; Stalking:</strong> Unwelcome physical contact, following participants around campus, or repeated uninvited advances.</span>
                    </div>

                    <div className="flex items-start gap-2.5 p-3 bg-red-50/60 border border-red-200 rounded">
                      <span className="text-red-600 font-black text-base shrink-0">✕</span>
                      <span><strong>Sustained Disruption:</strong> Persistent interruption of sessions, keynote speakers, workshops, or official announcements.</span>
                    </div>

                    <div className="flex items-start gap-2.5 p-3 bg-red-50/60 border border-red-200 rounded">
                      <span className="text-red-600 font-black text-base shrink-0">✕</span>
                      <span><strong>Privacy Invasions &amp; Doxxing:</strong> Publishing others&apos; private information, such as phone numbers, physical addresses, or personal emails, without their explicit permission.</span>
                    </div>

                    <div className="flex items-start gap-2.5 p-3 bg-red-50/60 border border-red-200 rounded">
                      <span className="text-red-600 font-black text-base shrink-0">✕</span>
                      <span><strong>Advocating or Encouraging Any Prohibited Conduct:</strong> Encouraging or coaching others to harass participants or compromise event safety.</span>
                    </div>
                  </div>
                </section>

                {/* Section 4: Scope & Where This Applies */}
                <section id="scope" className="sticker" style={{ background: '#FFFFFF', padding: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded bg-[#FFE89E] border border-black flex items-center justify-center text-black font-black shadow-[2px_2px_0px_#120838]">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h2 className="h-sub" style={{ fontSize: '1.4rem' }}>
                      4. Scope &amp; Where This Applies
                    </h2>
                  </div>

                  <p className="font-sans text-stone-800 text-sm leading-relaxed mb-4">
                    This Code of Conduct applies within all physical conference venues and virtual delegate channels:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-sans">
                    <div className="p-3.5 bg-[#FAF8FF] border border-black/30 rounded-lg shadow-[1px_1px_0px_#120838]">
                      <strong className="block text-[#120838] font-bold mb-1">Physical Campus Spaces:</strong>
                      <p className="text-stone-600 leading-relaxed">
                        Swami Vivekananda Auditorium, Keynote stage, Technical lab classrooms, Breakout tracks, Cafeteria lunch zones, and PRPCEM campus grounds.
                      </p>
                    </div>

                    <div className="p-3.5 bg-[#FAF8FF] border border-black/30 rounded-lg shadow-[1px_1px_0px_#120838]">
                      <strong className="block text-[#120838] font-bold mb-1">Digital &amp; Online Channels:</strong>
                      <p className="text-stone-600 leading-relaxed">
                        Official WhatsApp delegate community, Discord channels, GitHub repositories, Speaker submission portal, and social media interactions.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 5: Incident Reporting & Emergency Contacts */}
                <section id="reporting" className="sticker" style={{ background: '#FFF4C2', padding: 'clamp(1.5rem, 3vw, 2.5rem)', borderColor: '#120838' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded bg-black text-[#FFE89E] border border-black flex items-center justify-center font-black shadow-[2px_2px_0px_#120838]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <h2 className="h-sub" style={{ fontSize: '1.4rem' }}>
                      5. Reporting an Incident
                    </h2>
                  </div>

                  <p className="font-sans text-stone-900 text-sm sm:text-base leading-relaxed mb-6">
                    If you are being harassed, notice that someone else is being harassed, or have any other safety concerns, please contact the organizing team immediately. All reports are kept <strong>strictly confidential</strong>.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                    <div className="bg-white border-2 border-black p-4 rounded-lg shadow-[3px_3px_0px_#120838]">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#512BD4] mb-1">
                        <Mail className="w-4 h-4" />
                        <span>Confidential Safety Mailbox</span>
                      </div>
                      <a href="mailto:dotnetconfamt@prpotepatilengg.ac.in" className="text-sm font-bold text-black hover:text-[#512BD4] transition-colors break-all">
                        dotnetconfamt@prpotepatilengg.ac.in
                      </a>
                      <p className="text-[11px] font-sans text-stone-600 mt-1">
                        Monitored in real time during the conference by the Safety &amp; Ethics Committee.
                      </p>
                    </div>

                    <div className="bg-white border-2 border-black p-4 rounded-lg shadow-[3px_3px_0px_#120838]">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-emerald-700 mb-1">
                        <Users className="w-4 h-4" />
                        <span>On-Site Help Desk</span>
                      </div>
                      <div className="text-sm font-bold text-black">
                        PRPCEM Central Help Desk
                      </div>
                      <p className="text-[11px] font-sans text-stone-600 mt-1">
                        Look for volunteers wearing the official purple MSC PRPCEM Organizer lanyards and badges.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#120838] text-white p-4 rounded-lg border border-black flex items-start gap-3 text-xs sm:text-sm font-sans">
                    <Lock className="w-5 h-5 text-[#FFE89E] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#FFE89E]">Strict Confidentiality &amp; Non-Retaliation Guarantee:</strong>
                      <p className="text-white/80 mt-0.5">
                        We will never disclose the identity of a reporting party without their explicit consent, and our staff will assist participants in contacting campus security or local law enforcement if requested.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 6: Enforcement & Consequences */}
                <section id="enforcement" className="sticker" style={{ background: '#FFFFFF', padding: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded bg-[#EDE9FE] border border-black flex items-center justify-center text-[#512BD4] font-black shadow-[2px_2px_0px_#120838]">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h2 className="h-sub" style={{ fontSize: '1.4rem' }}>
                      6. Enforcement &amp; Consequences
                    </h2>
                  </div>

                  <p className="font-sans text-stone-800 text-sm leading-relaxed mb-4">
                    Participants asked to stop any harassing behavior are expected to comply immediately. If a participant engages in harassing or unacceptable behavior, event organizers may take any action deemed appropriate, including:
                  </p>

                  <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm font-sans text-stone-800 mb-6">
                    <li><strong>Immediate Verbal Warning:</strong> Formal instruction to cease the unacceptable behavior immediately.</li>
                    <li><strong>Expulsion from Specific Sessions:</strong> Removal from the current talk, lab, workshop, or panel.</li>
                    <li><strong>Permanent Conference Expulsion:</strong> Revocation of delegate pass and removal from the campus without compensation.</li>
                    <li><strong>Speaker or Sponsor Revocation:</strong> Immediate removal of talk slot or sponsor exhibition booth.</li>
                    <li><strong>Future Ban:</strong> Permanent prohibition from attending or speaking at future summits organized by MSC PRPCEM.</li>
                  </ol>

                  <div className="pt-4 border-t border-stone-200 text-xs font-mono text-stone-500">
                    Adopted by Microsoft Student Club (MSC), P. R. Pote Patil College of Engineering and Management (PRPCEM), Amravati. Modeled after the .NET Foundation Code of Conduct and Contributor Covenant v2.1.
                  </div>
                </section>

                {/* Read Privacy Policy Banner */}
                <div className="slot-card w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3" style={{ minHeight: 'auto', padding: '1.25rem' }}>
                  <div>
                    <strong className="text-sm font-bold text-[#120838] block">Looking for our data handling practices?</strong>
                    <span className="text-xs text-stone-600 font-sans">Learn how your delegate data, badge studio photos, and pass records are protected.</span>
                  </div>
                  <a
                    href="/privacy-policy"
                    className="btn btn--primary btn--sm cursor-pointer shrink-0"
                  >
                    <span>Read Privacy Policy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>

          </div>
        </section>

      </main>

      {/* 3. OFFICIAL CONFERENCE FOOTER */}
      <DncFooter />
    </div>
  );
};

export default CodeOfConductPage;
