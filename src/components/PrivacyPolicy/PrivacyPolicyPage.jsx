import React, { useEffect } from 'react';
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
  AlertCircle,
  ExternalLink
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
      window.location.hash = '';
      window.location.pathname = '/';
    }
  };

  const handleScrollToId = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] font-sans selection:bg-[#512BD4] selection:text-white pb-24 relative">
      {/* Top Sticky Header */}
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
              className="hidden sm:flex items-center gap-1.5 bg-[#FFE89E] hover:bg-[#FFD13B] text-black font-mono font-bold text-xs px-3.5 py-2 rounded-xl border-[2px] border-black shadow-[2px_2px_0px_0px_#000] cursor-pointer transition-all"
              title="Print Privacy Policy"
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
        {/* Hero Card */}
        <div className="bg-[#512BD4] text-white border-[3px] border-black rounded-3xl p-6 sm:p-10 shadow-[6px_6px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] mb-8 relative overflow-hidden">
          <div className="inline-flex items-center gap-2 bg-[#00E5FF] text-black text-xs font-mono font-black px-3 py-1 rounded-full uppercase border-[1.5px] border-black mb-4 shadow-[2px_2px_0px_0px_#000]">
            <Lock className="w-4 h-4" />
            <span>PRIVACY &amp; DATA TRANSPARENCY</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black font-sans uppercase tracking-tight leading-tight mb-4">
            .NET Conf 2026 Amravati <br />
            <span className="text-[#FFE89E]">Privacy Policy</span>
          </h1>

          <p className="text-white/90 text-sm sm:text-base font-sans leading-relaxed max-w-2xl">
            We believe in total transparency. This policy outlines how <strong>Microsoft Student Club PRPCEM</strong> collects, handles, and protects participant information across our registration portals, attendee tools, and physical summit venues.
          </p>

          <div className="mt-6 pt-4 border-t border-white/20 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-white/80">
            <span>DATA CONTROLLER: MSC PRPCEM</span>
            <span>•</span>
            <span>VENUE: PRPCEM CAMPUS, AMRAVATI</span>
            <span>•</span>
            <span>UPDATED: OCTOBER 2026</span>
          </div>
        </div>

        {/* Quick Navigation Jump Bar */}
        <div className="bg-white border-[2.5px] border-black rounded-2xl p-3.5 mb-8 shadow-[4px_4px_0px_0px_#000] overflow-x-auto">
          <div className="flex items-center gap-2 text-xs font-mono font-bold whitespace-nowrap min-w-max">
            <span className="text-[#512BD4] uppercase flex items-center gap-1 mr-1">
              <Eye className="w-3.5 h-3.5" />
              <span>JUMP TO:</span>
            </span>
            <a href="#controller" onClick={(e) => handleScrollToId(e, 'controller')} className="px-2.5 py-1 bg-[#FAF7F2] hover:bg-[#512BD4] hover:text-white rounded-lg border border-black/40 transition-colors">1. Controller</a>
            <a href="#collection" onClick={(e) => handleScrollToId(e, 'collection')} className="px-2.5 py-1 bg-[#FAF7F2] hover:bg-[#512BD4] hover:text-white rounded-lg border border-black/40 transition-colors">2. Data We Collect</a>
            <a href="#badge-studio" onClick={(e) => handleScrollToId(e, 'badge-studio')} className="px-2.5 py-1 bg-[#FAF7F2] hover:bg-[#512BD4] hover:text-white rounded-lg border border-black/40 transition-colors">3. Badge Studio</a>
            <a href="#purpose" onClick={(e) => handleScrollToId(e, 'purpose')} className="px-2.5 py-1 bg-[#FAF7F2] hover:bg-[#512BD4] hover:text-white rounded-lg border border-black/40 transition-colors">4. How We Use It</a>
            <a href="#media" onClick={(e) => handleScrollToId(e, 'media')} className="px-2.5 py-1 bg-[#FAF7F2] hover:bg-[#512BD4] hover:text-white rounded-lg border border-black/40 transition-colors">5. Event Media</a>
            <a href="#security" onClick={(e) => handleScrollToId(e, 'security')} className="px-2.5 py-1 bg-[#FAF7F2] hover:bg-[#512BD4] hover:text-white rounded-lg border border-black/40 transition-colors">6. Security</a>
            <a href="#rights" onClick={(e) => handleScrollToId(e, 'rights')} className="px-2.5 py-1 bg-[#FAF7F2] hover:bg-[#512BD4] hover:text-white rounded-lg border border-black/40 transition-colors">7. Your Rights</a>
            <a href="#contact" onClick={(e) => handleScrollToId(e, 'contact')} className="px-2.5 py-1 bg-[#FAF7F2] hover:bg-[#512BD4] hover:text-white rounded-lg border border-black/40 transition-colors">8. Contact</a>
          </div>
        </div>

        {/* Section 1: Data Controller & Commitment */}
        <section id="controller" className="bg-white border-[2.5px] border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] mb-8">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 rounded-xl bg-[#00E5FF] border-[2px] border-black flex items-center justify-center text-black font-black text-base shadow-[2px_2px_0px_0px_#000]">
              <Building2 className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight text-black">
              1. Data Controller &amp; Core Commitment
            </h2>
          </div>

          <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed mb-4">
            The data controller for .NET Conf 2026 Amravati is the <strong>Microsoft Student Club (MSC PRPCEM)</strong>, operating at P. R. Pote Patil College of Engineering and Management, Kathora Road, Amravati, Maharashtra 444604.
          </p>

          <div className="bg-[#FAF9FF] border-[1.5px] border-[#512BD4]/30 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 mb-4">
            <CheckCircle2 className="w-5 h-5 text-[#512BD4] shrink-0 mt-0.5" />
            <div className="text-sm font-sans text-[#120838]">
              <strong>Zero Commercial Monetization Pledge:</strong> We are a non-profit developer community initiative. We do not sell, license, rent, or trade your personal information to third-party telemarketers, commercial advertisers, or brokers under any circumstance.
            </div>
          </div>
        </section>

        {/* Section 2: Data We Collect */}
        <section id="collection" className="bg-white border-[2.5px] border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] mb-8">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 rounded-xl bg-[#FFE89E] border-[2px] border-black flex items-center justify-center text-black font-black text-base shadow-[2px_2px_0px_0px_#000]">
              <FileText className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight text-black">
              2. Information We Collect
            </h2>
          </div>

          <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed mb-4">
            When you interact with .NET Conf 2026 Amravati, we may collect only the essential details necessary to facilitate conference operations:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4 font-sans text-xs sm:text-sm">
            <div className="bg-[#FAF9FF] border-[1.5px] border-black p-4 rounded-2xl shadow-[2px_2px_0px_0px_#000]">
              <div className="font-mono font-bold text-xs uppercase text-[#512BD4] mb-1">Registration Data</div>
              <p className="text-stone-700 leading-relaxed">
                Full name, email address, contact phone/WhatsApp number, designation (student/faculty/professional), institution/company, and city.
              </p>
            </div>

            <div className="bg-[#FAF9FF] border-[1.5px] border-black p-4 rounded-2xl shadow-[2px_2px_0px_0px_#000]">
              <div className="font-mono font-bold text-xs uppercase text-[#512BD4] mb-1">Pass &amp; Check-in Log</div>
              <p className="text-stone-700 leading-relaxed">
                Unique ticket confirmation ID, check-in timestamp at the auditorium, dietary preferences (veg/refreshment), and T-shirt size for delegate kits.
              </p>
            </div>

            <div className="bg-[#FAF9FF] border-[1.5px] border-black p-4 rounded-2xl shadow-[2px_2px_0px_0px_#000]">
              <div className="font-mono font-bold text-xs uppercase text-[#512BD4] mb-1">Call for Speakers (CFP)</div>
              <p className="text-stone-700 leading-relaxed">
                Speaker biographies, session abstracts, technical links, and headshots provided voluntarily through our official Sessionize CFP portal.
              </p>
            </div>

            <div className="bg-[#FAF9FF] border-[1.5px] border-black p-4 rounded-2xl shadow-[2px_2px_0px_0px_#000]">
              <div className="font-mono font-bold text-xs uppercase text-[#512BD4] mb-1">Technical Telemetry</div>
              <p className="text-stone-700 leading-relaxed">
                Anonymized browser user-agent, IP address (for DDOS defense via Azure Static Web Apps), and error logs. We do not use third-party tracking pixels.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Interactive Badge Studio Privacy Highlight */}
        <section id="badge-studio" className="bg-[#EEEAFB] border-[2.5px] border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] mb-8 relative">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 rounded-xl bg-[#512BD4] border-[2px] border-black flex items-center justify-center text-white font-black text-base shadow-[2px_2px_0px_0px_#000]">
              <UserCheck className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight text-[#120838]">
              3. Attendee Badge Studio (Client-Side Privacy)
            </h2>
          </div>

          <div className="bg-white border-[2px] border-black p-4 sm:p-5 rounded-2xl shadow-[3px_3px_0px_0px_#000] mb-3">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <div>
                <strong className="text-black text-sm sm:text-base font-sans">
                  Photos Never Leave Your Device
                </strong>
                <p className="text-stone-700 text-xs sm:text-sm font-sans leading-relaxed mt-1">
                  When you upload your photo to customize your personalized <strong>I am Attending .NET Conf Badge</strong>, all image rendering, cropping, and compositing takes place entirely within your browser using local HTML5 Canvas APIs. 
                </p>
                <p className="text-stone-700 text-xs sm:text-sm font-sans leading-relaxed mt-1 font-semibold text-[#512BD4]">
                  Your uploaded badge photo is NEVER uploaded, transmitted, or saved to our cloud servers or any database.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: How We Use Your Information */}
        <section id="purpose" className="bg-white border-[2.5px] border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] mb-8">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 rounded-xl bg-[#16A34A] border-[2px] border-black flex items-center justify-center text-white font-black text-base shadow-[2px_2px_0px_0px_#000]">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight text-black">
              4. How We Use Your Information
            </h2>
          </div>

          <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed mb-4">
            We process attendee data solely for legitimate conference execution purposes:
          </p>

          <ul className="space-y-2.5 text-stone-800 text-xs sm:text-sm font-sans">
            <li className="flex items-start gap-2">
              <span className="text-[#512BD4] font-bold">▶</span>
              <span><strong>Admit Passes &amp; QR Credentials:</strong> Generating your unique entry pass and authenticating check-in at the PRPCEM Auditorium gates.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#512BD4] font-bold">▶</span>
              <span><strong>Operational Notifications:</strong> Sending essential summit alerts, including venue directions, schedule updates, track locations, and keynote timings.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#512BD4] font-bold">▶</span>
              <span><strong>Certificate of Participation:</strong> Issuing digital certificates of attendance and credential badges following summit conclusion.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#512BD4] font-bold">▶</span>
              <span><strong>Safety &amp; Emergency Coordination:</strong> Ensuring campus security and medical incident contact if necessary during the summit.</span>
            </li>
          </ul>
        </section>

        {/* Section 5: Photography & Event Media */}
        <section id="media" className="bg-white border-[2.5px] border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] mb-8">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 rounded-xl bg-[#E0199E] border-[2px] border-black flex items-center justify-center text-white font-black text-base shadow-[2px_2px_0px_0px_#000]">
              <Camera className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight text-black">
              5. Photography, Audio &amp; Video Media
            </h2>
          </div>

          <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed mb-4">
            As a premier public developer summit, .NET Conf 2026 Amravati will feature event photography, session video recordings, and social media coverage:
          </p>

          <div className="space-y-3 text-xs sm:text-sm font-sans text-stone-700">
            <div className="p-3.5 bg-[#FAF7F2] border-[1.5px] border-black rounded-2xl">
              <strong className="text-black block mb-0.5">Auditorium &amp; Public Stage Coverage:</strong>
              Keynote addresses, technical speaker presentations, and wide-angle crowd photography in the auditorium will be recorded and may be featured in public community recap videos and official PRPCEM archives.
            </div>

            <div className="p-3.5 bg-[#FAF7F2] border-[1.5px] border-black rounded-2xl">
              <strong className="text-black block mb-0.5">Media Opt-Out Protocol:</strong>
              We respect your right to privacy. If you prefer not to appear in close-up portraits or promotional materials, please inform the registration desk on arrival. We provide special designated visual lanyard markers to signal our media crew to omit your likeness from close-up photographs.
            </div>
          </div>
        </section>

        {/* Section 6: Security & Data Retention */}
        <section id="security" className="bg-white border-[2.5px] border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] mb-8">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 rounded-xl bg-[#512BD4] border-[2px] border-black flex items-center justify-center text-white font-black text-base shadow-[2px_2px_0px_0px_#000]">
              <Server className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight text-black">
              6. Security &amp; Data Retention
            </h2>
          </div>

          <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed mb-4">
            We apply industry-standard security safeguards to preserve data integrity:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-4 text-xs sm:text-sm font-sans">
            <div className="border border-black p-3.5 rounded-xl bg-[#FAF9FF]">
              <strong className="text-black block mb-1">Encrypted Transmission</strong>
              All web traffic is enforced over HTTPS with TLS 1.3 encryption and HSTS headers.
            </div>
            <div className="border border-black p-3.5 rounded-xl bg-[#FAF9FF]">
              <strong className="text-black block mb-1">Restricted Committee Access</strong>
              Registration databases are accessible only to authorized MSC PRPCEM core leads using multi-factor authentication.
            </div>
            <div className="border border-black p-3.5 rounded-xl bg-[#FAF9FF]">
              <strong className="text-black block mb-1">Retention Period</strong>
              Delegate attendance records are archived for 12 months after the summit for certificate re-issuance, and then securely purged.
            </div>
            <div className="border border-black p-3.5 rounded-xl bg-[#FAF9FF]">
              <strong className="text-black block mb-1">Cloud Infrastructure</strong>
              Hosted on Microsoft Azure Static Web Apps with global edge caching and DDoS mitigation.
            </div>
          </div>
        </section>

        {/* Section 7: Your Rights */}
        <section id="rights" className="bg-white border-[2.5px] border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] mb-8">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 rounded-xl bg-[#00E5FF] border-[2px] border-black flex items-center justify-center text-black font-black text-base shadow-[2px_2px_0px_0px_#000]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight text-black">
              7. Your Rights Under Privacy Regulations
            </h2>
          </div>

          <p className="text-stone-800 text-sm sm:text-base font-sans leading-relaxed mb-4">
            Under India&apos;s Digital Personal Data Protection (DPDP) Act and international privacy frameworks, you have full ownership over your information:
          </p>

          <div className="space-y-2 text-xs sm:text-sm font-sans text-stone-800">
            <div className="flex items-start gap-2">
              <span className="text-[#16A34A] font-bold">✓</span>
              <span><strong>Right to Access &amp; Review:</strong> Request a full copy of your registered delegate details at any time.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#16A34A] font-bold">✓</span>
              <span><strong>Right to Rectification:</strong> Request correction of misspellings in your name or designation for badge printing and certificates.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#16A34A] font-bold">✓</span>
              <span><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Request immediate and permanent deletion of your registration record.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#16A34A] font-bold">✓</span>
              <span><strong>Right to Opt-Out:</strong> Unsubscribe from community newsletter emails with a single click.</span>
            </div>
          </div>
        </section>

        {/* Section 8: Contact & Inquiries */}
        <section id="contact" className="bg-[#FFE89E] border-[3px] border-black rounded-3xl p-6 sm:p-8 md:p-10 shadow-[6px_6px_0px_0px_#000] mb-12 relative overflow-hidden">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 rounded-xl bg-black border-[2px] border-black flex items-center justify-center text-[#FFE89E] font-black text-base shadow-[2px_2px_0px_0px_#000]">
              <Mail className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight text-black">
              8. Contact the Privacy Team
            </h2>
          </div>

          <p className="text-stone-900 text-sm sm:text-base font-sans leading-relaxed mb-6">
            If you have questions about this Privacy Policy, wish to exercise your data rights, or have security questions, reach out to our privacy coordinator:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border-[2px] border-black p-4 rounded-2xl shadow-[3px_3px_0px_0px_#000]">
              <div className="text-xs font-mono font-bold uppercase text-[#512BD4] mb-1">
                Official Summit Inquiries
              </div>
              <a href="mailto:dotnetconfamt@prpotepatilengg.ac.in" className="text-sm sm:text-base font-black text-black hover:text-[#512BD4] transition-colors break-all">
                dotnetconfamt@prpotepatilengg.ac.in
              </a>
              <p className="text-[11px] font-sans text-stone-600 mt-1">
                Direct organizing committee mailbox monitored daily.
              </p>
            </div>

            <div className="bg-white border-[2px] border-black p-4 rounded-2xl shadow-[3px_3px_0px_0px_#000]">
              <div className="text-xs font-mono font-bold uppercase text-emerald-700 mb-1">
                MSC PRPCEM Campus Chapter
              </div>
              <a href="mailto:msc@prpcem.ac.in" className="text-sm sm:text-base font-black text-black hover:text-emerald-700 transition-colors break-all">
                msc@prpcem.ac.in
              </a>
              <p className="text-[11px] font-sans text-stone-600 mt-1">
                P. R. Pote Patil College of Engineering &amp; Management, Amravati.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-black/20 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-stone-800">
            <span>Also read our <a href="/code-of-conduct" className="underline font-bold text-[#512BD4]">Code of Conduct</a></span>
            <span>PRPCEM Campus, Amravati</span>
          </div>
        </section>

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

export default PrivacyPolicyPage;
