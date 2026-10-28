import React, { useEffect } from 'react';
import '../DncBrutal/DncBrutalStyles.css';
import DncWarliSprites from '../DncBrutal/DncWarliSprites.jsx';
import DncFooter from '../DncBrutal/DncFooter.jsx';
import {
  ShieldCheck,
  ArrowLeft,
  Lock,
  Eye,
  FileText,
  Printer,
  Camera,
  Server,
  UserCheck,
  Mail,
  Building2,
  CheckCircle2,
  MapPin,
  ArrowRight
} from 'lucide-react';

export const PrivacyPolicyPage = ({ onBack }) => {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Privacy Policy | .NET Conf 2026 Amravati";
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
              title="Print Privacy Policy"
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
                <p className="eyebrow">Privacy &amp; Data Transparency · Official Policy</p>
                <h1 className="h-sec">
                  Privacy Policy<br />
                  <span style={{ color: 'var(--purple)' }}>.NET Conf 2026 Amravati</span>
                </h1>
              </div>
              <p className="lede">
                We believe in total transparency. This policy outlines how <strong>Microsoft Student Club PRPCEM</strong> collects, handles, and protects participant information across our registration portals, attendee tools, and physical summit venues.
              </p>
            </div>

            {/* Quick Metadata Strip */}
            <div className="flex flex-wrap items-center gap-3 mt-4 pt-2 font-mono text-xs text-stone-700">
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded border border-black/30 shadow-[1px_1px_0px_#120838]">
                <Building2 className="w-3.5 h-3.5 text-[#512BD4]" />
                Data Controller: MSC PRPCEM
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded border border-black/30 shadow-[1px_1px_0px_#120838]">
                <MapPin className="w-3.5 h-3.5 text-[#512BD4]" />
                PRPCEM Campus, Kathora Road, Amravati
              </span>
              <span className="flex items-center gap-1.5 bg-[#DCFCE7] px-3 py-1.5 rounded border border-black/40 text-emerald-900 font-bold shadow-[1px_1px_0px_#120838]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                Zero Commercial Monetization Guarantee
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
                  <p className="eyebrow" style={{ fontSize: '.72rem', marginBottom: '.65rem' }}>Policy Contents</p>
                  <nav className="space-y-1.5 font-sans text-xs font-bold">
                    <a
                      href="#controller"
                      onClick={(e) => handleScrollToId(e, 'controller')}
                      className="block p-2 rounded hover:bg-[#FAF8FF] text-stone-700 hover:text-[#512BD4] transition-colors border border-transparent hover:border-black/20"
                    >
                      1. Controller &amp; Pledge
                    </a>
                    <a
                      href="#collection"
                      onClick={(e) => handleScrollToId(e, 'collection')}
                      className="block p-2 rounded hover:bg-[#FAF8FF] text-stone-700 hover:text-[#512BD4] transition-colors border border-transparent hover:border-black/20"
                    >
                      2. Information We Collect
                    </a>
                    <a
                      href="#badge-studio"
                      onClick={(e) => handleScrollToId(e, 'badge-studio')}
                      className="block p-2 rounded hover:bg-[#FAF8FF] text-stone-700 hover:text-[#512BD4] transition-colors border border-transparent hover:border-black/20"
                    >
                      3. Attendee Badge Studio Privacy
                    </a>
                    <a
                      href="#purpose"
                      onClick={(e) => handleScrollToId(e, 'purpose')}
                      className="block p-2 rounded hover:bg-[#FAF8FF] text-stone-700 hover:text-[#512BD4] transition-colors border border-transparent hover:border-black/20"
                    >
                      4. How We Use Information
                    </a>
                    <a
                      href="#media"
                      onClick={(e) => handleScrollToId(e, 'media')}
                      className="block p-2 rounded hover:bg-[#FAF8FF] text-stone-700 hover:text-[#512BD4] transition-colors border border-transparent hover:border-black/20"
                    >
                      5. Event Media &amp; Photos
                    </a>
                    <a
                      href="#security"
                      onClick={(e) => handleScrollToId(e, 'security')}
                      className="block p-2 rounded hover:bg-[#FAF8FF] text-stone-700 hover:text-[#512BD4] transition-colors border border-transparent hover:border-black/20"
                    >
                      6. Security Safeguards
                    </a>
                    <a
                      href="#rights"
                      onClick={(e) => handleScrollToId(e, 'rights')}
                      className="block p-2 rounded hover:bg-[#FAF8FF] text-stone-700 hover:text-[#512BD4] transition-colors border border-transparent hover:border-black/20"
                    >
                      7. Your Legal Privacy Rights
                    </a>
                    <a
                      href="#contact"
                      onClick={(e) => handleScrollToId(e, 'contact')}
                      className="block p-2 rounded hover:bg-[#FFE89E] text-stone-900 transition-colors border border-transparent hover:border-black/20"
                    >
                      8. Contact the Privacy Team
                    </a>
                  </nav>
                </div>

                {/* Quick Privacy Guarantee Box */}
                <div className="sticker" style={{ background: '#EDE9FE', padding: '1.25rem', borderColor: '#512BD4' }}>
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs font-black uppercase text-[#512BD4]">
                    <Lock className="w-4 h-4 text-[#512BD4]" />
                    <span>Client-Side Security</span>
                  </div>
                  <p className="font-sans text-xs text-stone-800 leading-relaxed">
                    Attendee Badge Studio processes your photos 100% locally in your browser. We never transmit or store uploaded portraits on servers.
                  </p>
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
                    <a href="#controller" onClick={(e) => handleScrollToId(e, 'controller')} className="px-2 py-1 bg-stone-100 hover:bg-[#512BD4] hover:text-white rounded border border-black/30">1. Controller</a>
                    <a href="#collection" onClick={(e) => handleScrollToId(e, 'collection')} className="px-2 py-1 bg-stone-100 hover:bg-[#512BD4] hover:text-white rounded border border-black/30">2. Collect</a>
                    <a href="#badge-studio" onClick={(e) => handleScrollToId(e, 'badge-studio')} className="px-2 py-1 bg-stone-100 hover:bg-[#512BD4] hover:text-white rounded border border-black/30">3. Badge</a>
                    <a href="#purpose" onClick={(e) => handleScrollToId(e, 'purpose')} className="px-2 py-1 bg-stone-100 hover:bg-[#512BD4] hover:text-white rounded border border-black/30">4. Use</a>
                    <a href="#media" onClick={(e) => handleScrollToId(e, 'media')} className="px-2 py-1 bg-stone-100 hover:bg-[#512BD4] hover:text-white rounded border border-black/30">5. Media</a>
                    <a href="#security" onClick={(e) => handleScrollToId(e, 'security')} className="px-2 py-1 bg-stone-100 hover:bg-[#512BD4] hover:text-white rounded border border-black/30">6. Security</a>
                    <a href="#rights" onClick={(e) => handleScrollToId(e, 'rights')} className="px-2 py-1 bg-stone-100 hover:bg-[#512BD4] hover:text-white rounded border border-black/30">7. Rights</a>
                    <a href="#contact" onClick={(e) => handleScrollToId(e, 'contact')} className="px-2 py-1 bg-[#FFE89E] rounded border border-black/40">8. Contact</a>
                  </div>
                </div>

                {/* Section 1: Data Controller & Commitment */}
                <section id="controller" className="sticker" style={{ background: '#FFFFFF', padding: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded bg-[#EDE9FE] border border-black flex items-center justify-center text-[#512BD4] font-black shadow-[2px_2px_0px_#120838]">
                      <Building2 className="w-5 h-5 text-[#512BD4]" />
                    </div>
                    <h2 className="h-sub" style={{ fontSize: '1.4rem' }}>
                      1. Data Controller &amp; Core Commitment
                    </h2>
                  </div>

                  <p className="font-sans text-stone-800 text-sm leading-relaxed mb-4">
                    The data controller for .NET Conf 2026 Amravati is the <strong>Microsoft Student Club (MSC PRPCEM)</strong>, operating at P. R. Pote Patil College of Engineering and Management, Kathora Road, Amravati, Maharashtra 444604.
                  </p>

                  <div className="bg-[#FAF8FF] border border-black/30 rounded-lg p-4 flex items-start gap-3 shadow-[1px_1px_0px_#120838]">
                    <CheckCircle2 className="w-5 h-5 text-[#512BD4] shrink-0 mt-0.5 stroke-[2.5]" />
                    <div className="text-xs sm:text-sm font-sans text-[#120838]">
                      <strong>Zero Commercial Monetization Pledge:</strong> We are a non-profit developer community initiative. We do not sell, license, rent, or trade your personal information to third-party telemarketers, commercial advertisers, or brokers under any circumstance.
                    </div>
                  </div>
                </section>

                {/* Section 2: Information We Collect */}
                <section id="collection" className="sticker" style={{ background: '#FFFFFF', padding: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded bg-[#FFE89E] border border-black flex items-center justify-center text-black font-black shadow-[2px_2px_0px_#120838]">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h2 className="h-sub" style={{ fontSize: '1.4rem' }}>
                      2. Information We Collect
                    </h2>
                  </div>

                  <p className="font-sans text-stone-800 text-sm leading-relaxed mb-4">
                    When you interact with .NET Conf 2026 Amravati, we collect only the essential details necessary to facilitate conference operations:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-2 font-sans text-xs sm:text-sm">
                    <div className="bg-[#FAF8FF] border border-black/30 p-4 rounded-lg shadow-[1px_1px_0px_#120838]">
                      <div className="font-mono font-bold text-xs uppercase text-[#512BD4] mb-1">Registration Data</div>
                      <p className="text-stone-700 leading-relaxed text-xs">
                        Full name, email address, contact phone/WhatsApp number, designation (student/faculty/professional), institution/company, and city.
                      </p>
                    </div>

                    <div className="bg-[#FAF8FF] border border-black/30 p-4 rounded-lg shadow-[1px_1px_0px_#120838]">
                      <div className="font-mono font-bold text-xs uppercase text-[#512BD4] mb-1">Pass &amp; Check-in Log</div>
                      <p className="text-stone-700 leading-relaxed text-xs">
                        Unique ticket confirmation ID, check-in timestamp at the auditorium, dietary preferences (veg/refreshment), and T-shirt size for delegate kits.
                      </p>
                    </div>

                    <div className="bg-[#FAF8FF] border border-black/30 p-4 rounded-lg shadow-[1px_1px_0px_#120838]">
                      <div className="font-mono font-bold text-xs uppercase text-[#512BD4] mb-1">Call for Speakers (CFP)</div>
                      <p className="text-stone-700 leading-relaxed text-xs">
                        Speaker biographies, session abstracts, technical links, and headshots provided voluntarily through our official Sessionize CFP portal.
                      </p>
                    </div>

                    <div className="bg-[#FAF8FF] border border-black/30 p-4 rounded-lg shadow-[1px_1px_0px_#120838]">
                      <div className="font-mono font-bold text-xs uppercase text-[#512BD4] mb-1">Technical Telemetry</div>
                      <p className="text-stone-700 leading-relaxed text-xs">
                        Anonymized browser user-agent, IP address (for DDOS defense via Azure Static Web Apps), and error logs. We do not use third-party tracking pixels.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 3: Attendee Badge Studio Privacy */}
                <section id="badge-studio" className="sticker" style={{ background: '#EDE9FE', padding: 'clamp(1.5rem, 3vw, 2.25rem)', borderColor: '#512BD4' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded bg-[#512BD4] text-white border border-black flex items-center justify-center font-black shadow-[2px_2px_0px_#120838]">
                      <UserCheck className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="h-sub" style={{ fontSize: '1.4rem', color: '#120838' }}>
                      3. Attendee Badge Studio (Client-Side Privacy)
                    </h2>
                  </div>

                  <div className="bg-white border-2 border-black p-4 rounded-lg shadow-[3px_3px_0px_#120838]">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                      <div>
                        <strong className="text-black text-sm block">
                          Photos Never Leave Your Device
                        </strong>
                        <p className="text-stone-700 text-xs sm:text-sm font-sans leading-relaxed mt-1">
                          When you upload your photo to customize your personalized <strong>I am Attending .NET Conf Badge</strong>, all image rendering, cropping, and compositing takes place entirely within your browser using local HTML5 Canvas APIs.
                        </p>
                        <p className="text-[#512BD4] text-xs sm:text-sm font-sans leading-relaxed mt-1 font-bold">
                          Your uploaded badge photo is NEVER uploaded, transmitted, or saved to our cloud servers or any database.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 4: How We Use Your Information */}
                <section id="purpose" className="sticker" style={{ background: '#FFFFFF', padding: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded bg-[#DCFCE7] border border-black flex items-center justify-center text-emerald-700 font-black shadow-[2px_2px_0px_#120838]">
                      <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <h2 className="h-sub" style={{ fontSize: '1.4rem' }}>
                      4. How We Use Your Information
                    </h2>
                  </div>

                  <p className="font-sans text-stone-800 text-sm leading-relaxed mb-4">
                    We process attendee data solely for legitimate conference execution purposes:
                  </p>

                  <div className="space-y-2.5 text-stone-800 text-xs sm:text-sm font-sans">
                    <div className="flex items-start gap-2 p-2.5 bg-stone-50 rounded border border-stone-200">
                      <span className="text-[#512BD4] font-black">▶</span>
                      <span><strong>Admit Passes &amp; QR Credentials:</strong> Generating your unique entry pass and authenticating check-in at the PRPCEM Auditorium gates.</span>
                    </div>
                    <div className="flex items-start gap-2 p-2.5 bg-stone-50 rounded border border-stone-200">
                      <span className="text-[#512BD4] font-black">▶</span>
                      <span><strong>Operational Notifications:</strong> Sending essential summit alerts, including venue directions, schedule updates, track locations, and keynote timings.</span>
                    </div>
                    <div className="flex items-start gap-2 p-2.5 bg-stone-50 rounded border border-stone-200">
                      <span className="text-[#512BD4] font-black">▶</span>
                      <span><strong>Certificate of Participation:</strong> Issuing digital certificates of attendance and credential badges following summit conclusion.</span>
                    </div>
                    <div className="flex items-start gap-2 p-2.5 bg-stone-50 rounded border border-stone-200">
                      <span className="text-[#512BD4] font-black">▶</span>
                      <span><strong>Safety &amp; Emergency Coordination:</strong> Ensuring campus security and medical incident contact if necessary during the summit.</span>
                    </div>
                  </div>
                </section>

                {/* Section 5: Photography & Event Media */}
                <section id="media" className="sticker" style={{ background: '#FFFFFF', padding: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded bg-[#FCE7F3] border border-black flex items-center justify-center text-pink-700 font-black shadow-[2px_2px_0px_#120838]">
                      <Camera className="w-5 h-5 text-pink-700" />
                    </div>
                    <h2 className="h-sub" style={{ fontSize: '1.4rem' }}>
                      5. Photography, Audio &amp; Video Media
                    </h2>
                  </div>

                  <p className="font-sans text-stone-800 text-sm leading-relaxed mb-4">
                    As a premier public developer summit, .NET Conf 2026 Amravati will feature event photography, session video recordings, and social media coverage:
                  </p>

                  <div className="space-y-3 text-xs sm:text-sm font-sans text-stone-700">
                    <div className="p-3.5 bg-[#FAF8FF] border border-black/30 rounded-lg shadow-[1px_1px_0px_#120838]">
                      <strong className="text-black block mb-1">Auditorium &amp; Public Stage Coverage:</strong>
                      Keynote addresses, technical speaker presentations, and wide-angle crowd photography in the auditorium will be recorded and may be featured in public community recap videos and official PRPCEM archives.
                    </div>

                    <div className="p-3.5 bg-[#FAF8FF] border border-black/30 rounded-lg shadow-[1px_1px_0px_#120838]">
                      <strong className="text-black block mb-1">Media Opt-Out Protocol:</strong>
                      We respect your right to privacy. If you prefer not to appear in close-up portraits or promotional materials, please inform the registration desk on arrival. We provide special designated visual lanyard markers to signal our media crew to omit your likeness from close-up photographs.
                    </div>
                  </div>
                </section>

                {/* Section 6: Security & Data Retention */}
                <section id="security" className="sticker" style={{ background: '#FFFFFF', padding: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded bg-[#EDE9FE] border border-black flex items-center justify-center text-[#512BD4] font-black shadow-[2px_2px_0px_#120838]">
                      <Server className="w-5 h-5 text-[#512BD4]" />
                    </div>
                    <h2 className="h-sub" style={{ fontSize: '1.4rem' }}>
                      6. Security &amp; Data Retention
                    </h2>
                  </div>

                  <p className="font-sans text-stone-800 text-sm leading-relaxed mb-4">
                    We apply industry-standard security safeguards to preserve data integrity:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-2 text-xs sm:text-sm font-sans">
                    <div className="border border-black/30 p-3.5 rounded-lg bg-[#FAF8FF] shadow-[1px_1px_0px_#120838]">
                      <strong className="text-black block mb-1">Encrypted Transmission</strong>
                      All web traffic is enforced over HTTPS with TLS 1.3 encryption and HSTS headers.
                    </div>
                    <div className="border border-black/30 p-3.5 rounded-lg bg-[#FAF8FF] shadow-[1px_1px_0px_#120838]">
                      <strong className="text-black block mb-1">Restricted Committee Access</strong>
                      Registration databases are accessible only to authorized MSC PRPCEM core leads using multi-factor authentication.
                    </div>
                    <div className="border border-black/30 p-3.5 rounded-lg bg-[#FAF8FF] shadow-[1px_1px_0px_#120838]">
                      <strong className="text-black block mb-1">Retention Period</strong>
                      Delegate attendance records are archived for 12 months after the summit for certificate re-issuance, and then securely purged.
                    </div>
                    <div className="border border-black/30 p-3.5 rounded-lg bg-[#FAF8FF] shadow-[1px_1px_0px_#120838]">
                      <strong className="text-black block mb-1">Cloud Infrastructure</strong>
                      Hosted on Microsoft Azure Static Web Apps with global edge caching and DDoS mitigation.
                    </div>
                  </div>
                </section>

                {/* Section 7: Your Rights */}
                <section id="rights" className="sticker" style={{ background: '#FFFFFF', padding: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded bg-[#DCFCE7] border border-black flex items-center justify-center text-emerald-700 font-black shadow-[2px_2px_0px_#120838]">
                      <ShieldCheck className="w-5 h-5 text-emerald-700" />
                    </div>
                    <h2 className="h-sub" style={{ fontSize: '1.4rem' }}>
                      7. Your Rights Under Privacy Regulations
                    </h2>
                  </div>

                  <p className="font-sans text-stone-800 text-sm leading-relaxed mb-4">
                    Under India&apos;s Digital Personal Data Protection (DPDP) Act and international privacy frameworks, you have full ownership over your information:
                  </p>

                  <div className="space-y-2 text-xs sm:text-sm font-sans text-stone-800">
                    <div className="flex items-start gap-2 p-2.5 bg-stone-50 rounded border border-stone-200">
                      <span className="text-emerald-700 font-bold">✓</span>
                      <span><strong>Right to Access &amp; Review:</strong> Request a full copy of your registered delegate details at any time.</span>
                    </div>
                    <div className="flex items-start gap-2 p-2.5 bg-stone-50 rounded border border-stone-200">
                      <span className="text-emerald-700 font-bold">✓</span>
                      <span><strong>Right to Rectification:</strong> Request correction of misspellings in your name or designation for badge printing and certificates.</span>
                    </div>
                    <div className="flex items-start gap-2 p-2.5 bg-stone-50 rounded border border-stone-200">
                      <span className="text-emerald-700 font-bold">✓</span>
                      <span><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Request immediate and permanent deletion of your registration record.</span>
                    </div>
                    <div className="flex items-start gap-2 p-2.5 bg-stone-50 rounded border border-stone-200">
                      <span className="text-emerald-700 font-bold">✓</span>
                      <span><strong>Right to Opt-Out:</strong> Unsubscribe from community newsletter emails with a single click.</span>
                    </div>
                  </div>
                </section>

                {/* Section 8: Contact the Privacy Team */}
                <section id="contact" className="sticker" style={{ background: '#FFE89E', padding: 'clamp(1.5rem, 3vw, 2.5rem)', borderColor: '#120838' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded bg-black text-[#FFE89E] border border-black flex items-center justify-center font-black shadow-[2px_2px_0px_#120838]">
                      <Mail className="w-5 h-5 text-[#FFE89E]" />
                    </div>
                    <h2 className="h-sub" style={{ fontSize: '1.4rem' }}>
                      8. Contact the Privacy Team
                    </h2>
                  </div>

                  <p className="font-sans text-stone-900 text-sm sm:text-base leading-relaxed mb-6">
                    If you have questions about this Privacy Policy, wish to exercise your data rights, or have security questions, reach out to our privacy coordinators:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                    <div className="bg-white border-2 border-black p-4 rounded-lg shadow-[3px_3px_0px_#120838]">
                      <div className="text-xs font-mono font-bold uppercase text-[#512BD4] mb-1">
                        Official Summit Inquiries
                      </div>
                      <a href="mailto:dotnetconfamt@prpotepatilengg.ac.in" className="text-sm font-bold text-black hover:text-[#512BD4] transition-colors break-all">
                        dotnetconfamt@prpotepatilengg.ac.in
                      </a>
                      <p className="text-[11px] font-sans text-stone-600 mt-1">
                        Direct organizing committee mailbox monitored daily.
                      </p>
                    </div>

                    <div className="bg-white border-2 border-black p-4 rounded-lg shadow-[3px_3px_0px_#120838]">
                      <div className="text-xs font-mono font-bold uppercase text-emerald-700 mb-1">
                        MSC PRPCEM Campus Chapter
                      </div>
                      <a href="mailto:msc@prpcem.ac.in" className="text-sm font-bold text-black hover:text-emerald-700 transition-colors break-all">
                        msc@prpcem.ac.in
                      </a>
                      <p className="text-[11px] font-sans text-stone-600 mt-1">
                        P. R. Pote Patil College of Engineering &amp; Management, Amravati.
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-black/20 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-stone-800">
                    <span>Also read our <a href="/code-of-conduct" className="underline font-bold text-[#512BD4]">Code of Conduct</a></span>
                    <span>PRPCEM Campus, Amravati</span>
                  </div>
                </section>

                {/* Read Code of Conduct Banner */}
                <div className="slot-card w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3" style={{ minHeight: 'auto', padding: '1.25rem' }}>
                  <div>
                    <strong className="text-sm font-bold text-[#120838] block">Looking for our community standards and anti-harassment rules?</strong>
                    <span className="text-xs text-stone-600 font-sans">Read our full pledge, zero-tolerance policy, and reporting channels.</span>
                  </div>
                  <a
                    href="/code-of-conduct"
                    className="btn btn--primary btn--sm cursor-pointer shrink-0"
                  >
                    <span>Read Code of Conduct</span>
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

export default PrivacyPolicyPage;
