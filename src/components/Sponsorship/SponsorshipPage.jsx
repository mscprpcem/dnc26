import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Printer,
  Share2,
  Check,
  Building2,
  Users,
  Mic,
  Award,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Download,
  Copy,
  Briefcase,
  Star,
  Layers,
  Monitor,
  Megaphone,
  Coffee,
  Ticket,
  Send,
  HelpCircle
} from 'lucide-react';

export const SponsorshipPage = ({ onBack }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaq, setOpenFaq] = useState(null);

  // Form state for inquiry
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [selectedTier, setSelectedTier] = useState('Platinum Sponsor');
  const [inquiryNotes, setInquiryNotes] = useState('');

  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Sponsorship Tiers & Benefits | .NET Conf 2026 Amravati";
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.title = originalTitle;
    };
  }, []);

  const handleGoBack = () => {
    if (onBack) {
      onBack();
    } else {
      window.history.pushState({}, '', '/');
      window.location.pathname = '/';
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Sponsorship Packages & Tiers - .NET Conf 2026 Amravati',
        text: 'Explore the sponsorship tiers and benefits matrix for .NET Conf 2026 at PRPCEM Amravati.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('dotnetconfamt@prpotepatilengg.ac.in').then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    });
  };

  const handleSendInquiry = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Sponsorship Inquiry: ${selectedTier} - ${companyName || 'Company'}`);
    const body = encodeURIComponent(
      `Hello .NET Conf 2026 Amravati Team,\n\n` +
      `We are interested in partnering with .NET Conf 2026 as a ${selectedTier}.\n\n` +
      `Company Name: ${companyName || 'N/A'}\n` +
      `Contact Person: ${contactName || 'N/A'}\n` +
      `Work Email: ${workEmail || 'N/A'}\n` +
      `Selected Tier / Package: ${selectedTier}\n` +
      `Requirements / Message: ${inquiryNotes || 'Please send us the full sponsorship prospectus and invoice details.'}\n\n` +
      `Looking forward to collaborating!\n`
    );
    window.location.href = `mailto:dotnetconfamt@prpotepatilengg.ac.in?subject=${subject}&body=${body}`;
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Tier Card Data
  const TIERS = [
    {
      id: 'title',
      name: 'TITLE SPONSOR',
      investment: '₹2,00,000',
      usd: '~$2,400 USD',
      slots: '1-2 Exclusive Slots',
      bgHeader: 'bg-[#FFE89E]',
      badgeColor: 'bg-[#D97706] text-white',
      accentColor: '#D97706',
      borderStyle: 'border-black',
      tagline: 'Supreme Brand Eminence & Co-Host Privileges',
      topPerks: [
        '30-min Headline Keynote speaking slot',
        'Mega 20×10 ft Exhibition Stall (Center Foyer)',
        'Full Attendee Resume & Talent Database',
        '10 VIP All-Access Delegate Passes',
        'Prominent Logo on All Badges, Lanyards & Stage'
      ],
      recommended: true,
    },
    {
      id: 'platinum',
      name: 'PLATINUM',
      investment: '₹1,25,000',
      usd: '~$1,500 USD',
      slots: 'Max 3 Slots',
      bgHeader: 'bg-[#EDE9FE]',
      badgeColor: 'bg-[#512BD4] text-white',
      accentColor: '#512BD4',
      borderStyle: 'border-black',
      tagline: 'High-Impact Technology & Recruiting Leader',
      topPerks: [
        '15-min Main Stage Tech Keynote / Demo',
        'Prime 10×10 ft Exhibition Booth',
        'Full Attendee Resume Database Access',
        '6 VIP All-Access Delegate Passes',
        '4 Dedicated Multi-Channel Social Spotlights'
      ],
      recommended: false,
    },
    {
      id: 'gold',
      name: 'GOLD',
      investment: '₹75,000',
      usd: '~$900 USD',
      slots: 'Max 5 Slots',
      bgHeader: 'bg-[#FEF3C7]',
      badgeColor: 'bg-[#B45309] text-white',
      accentColor: '#B45309',
      borderStyle: 'border-black',
      tagline: 'Prime Developer Brand & Campus Visibility',
      topPerks: [
        '5-min Lightning Tech Pitch / Introduction',
        '8×8 ft Product Showcase Demo Stall',
        'Filtered Talent Directory Access',
        '4 VIP All-Access Passes',
        'Logo on Attendee Badges & Backdrop loop'
      ],
      recommended: false,
    },
    {
      id: 'silver',
      name: 'SILVER',
      investment: '₹40,000',
      usd: '~$480 USD',
      slots: 'Open Registration',
      bgHeader: 'bg-[#F1F5F9]',
      badgeColor: 'bg-[#475569] text-white',
      accentColor: '#475569',
      borderStyle: 'border-black',
      tagline: 'Startup Innovation & Ecosystem Presence',
      topPerks: [
        'High-Top Kiosk / Demo Table Space',
        'Promotional Collateral in Attendee Kits',
        '2 VIP Delegate Passes',
        'Logo on Website & Event Guide',
        'Joint Social Media Announcement'
      ],
      recommended: false,
    },
    {
      id: 'community',
      name: 'COMMUNITY / CFP',
      investment: 'In-Kind / Collab',
      usd: 'Partnership',
      slots: 'By Invitation',
      bgHeader: 'bg-[#E0F2FE]',
      badgeColor: 'bg-[#0284C7] text-white',
      accentColor: '#0284C7',
      borderStyle: 'border-black',
      tagline: 'Open Source, Student Clubs & Tech Chapters',
      topPerks: [
        'Shared Community Booth in Tech Zone',
        'Logo on Website & Community Slides',
        '2 Community Passes for Leadership Team',
        'Ecosystem Cross-Promotion Access',
        'Stage Mentions during Valedictory'
      ],
      recommended: false,
    }
  ];

  // Benefits Comparison Table Data
  const BENEFITS_DATA = [
    // 1. Stage & Speaking
    {
      category: 'stage',
      categoryName: 'Keynote & Speaking Engagements',
      items: [
        {
          name: 'Main Stage Keynote Speaking Time',
          desc: 'Deliver a high-profile keynote session to the entire conference delegation in the Main Auditorium.',
          title: '30 Mins (Headline Keynote)',
          platinum: '15 Mins (Tech Keynote)',
          gold: '5 Mins (Lightning Pitch)',
          silver: '—',
          community: '—',
        },
        {
          name: 'Technical Workshop / Breakout Track',
          desc: 'Host a dedicated hands-on code laboratory or specialized session track.',
          title: '60 Mins (Exclusive Track)',
          platinum: '45 Mins (Dedicated Lab)',
          gold: '30 Mins (Co-hosted Lab)',
          silver: '—',
          community: '—',
        },
        {
          name: 'Panel Discussion / Fireside Chat Seat',
          desc: 'Guaranteed seat for your executive or tech lead in headline panel discussions.',
          title: 'Guaranteed (Priority Chair)',
          platinum: 'Guaranteed Panelist',
          gold: 'Subject to Topic Fit',
          silver: '—',
          community: '—',
        },
        {
          name: 'Verbal Emcee Mentions & Slide Announcements',
          desc: 'Audible thank-you mentions by host emcees at key conference transitions.',
          title: 'Every Transition & Keynote',
          platinum: 'Opening & Closing Ceremonies',
          gold: 'Opening Ceremony',
          silver: 'Closing Slides',
          community: 'Community Slides',
        },
      ]
    },
    // 2. Booth & Exhibition
    {
      category: 'booth',
      categoryName: 'Venue Presence & Exhibition Space',
      items: [
        {
          name: 'Exhibition Stall & Floor Space',
          desc: 'Dedicated physical footprint in the PRPCEM Engineering Exhibition Pavilion.',
          title: 'Mega 20×10 ft (Center Foyer)',
          platinum: 'Prime 10×10 ft Booth',
          gold: 'Standard 8×8 ft Demo Stall',
          silver: 'High-Top Demo Table',
          community: 'Shared Community Desk',
        },
        {
          name: 'Dedicated Interview / Hiring Lounge',
          desc: 'Private quiet room on campus for 1-on-1 developer interviews and candidate screening.',
          title: 'Exclusive Private Room',
          platinum: 'Shared Hiring Lounge Access',
          gold: 'On-Demand Queue Access',
          silver: '—',
          community: '—',
        },
        {
          name: 'Product Tech Playground / Sandbox',
          desc: 'Interactive kiosk area for developers to test your SDKs, APIs, and cloud tools.',
          title: 'Custom Branded Area',
          platinum: 'Dedicated Sandbox Station',
          gold: 'Booth-only Demo Station',
          silver: 'Booth-only Demo Station',
          community: '—',
        },
        {
          name: 'Roll-up Standee Banners at Venue',
          desc: 'Full-height branded standees positioned across high-traffic conference zones.',
          title: 'Up to 6 Standees (Stage + Foyer)',
          platinum: 'Up to 4 Standees',
          gold: '2 Standees',
          silver: '1 Standee',
          community: 'Shared Banner',
        },
        {
          name: 'Wi-Fi, High-Power Sockets & AV Support',
          desc: 'Dedicated power circuits, high-speed campus LAN/Wi-Fi, and monitor mounts.',
          title: 'Dedicated Dual Line + AV',
          platinum: 'Dedicated Line + Power',
          gold: 'Standard Power Strip',
          silver: 'Standard Power Strip',
          community: 'Shared Power',
        },
      ]
    },
    // 3. Talent & Recruiting
    {
      category: 'talent',
      categoryName: 'Engineering Talent & Recruitment',
      items: [
        {
          name: 'Attendee Resume & Candidate Database',
          desc: 'Curated opt-in resume book of pre-screened engineering students, AI developers, and coders.',
          title: 'Full Database + Live Access',
          platinum: 'Full Resume Database',
          gold: 'Filtered Candidate Pool',
          silver: 'Basic Candidate Directory',
          community: '—',
        },
        {
          name: 'Job Openings & Career Portal Listings',
          desc: 'Feature your internships, junior, and senior tech roles in the official conference career bulletin.',
          title: 'Unlimited Featured Postings',
          platinum: 'Up to 6 Job Listings',
          gold: 'Up to 3 Job Listings',
          silver: '1 Job Listing',
          community: '—',
        },
        {
          name: 'Hackathon / Code Challenge Track Sponsor',
          desc: 'Opportunity to set a proprietary problem statement and reward hackathon winners.',
          title: 'Exclusive Challenge Track',
          platinum: 'Category Challenge Sponsor',
          gold: 'Challenge Co-Sponsor',
          silver: '—',
          community: '—',
        },
        {
          name: 'Swag Bag Inserts & Promotional Collateral',
          desc: 'Include physical flyers, company stickers, branded pens, or hardware in delegate kits.',
          title: 'Dedicated Item + Bag Insert',
          platinum: 'Dedicated Swag Bag Insert',
          gold: 'Swag Bag Insert',
          silver: 'Shared Registration Table',
          community: 'Sticker Swap Table',
        },
      ]
    },
    // 4. Digital & Branding
    {
      category: 'branding',
      categoryName: 'Branding, Digital Reach & Media',
      items: [
        {
          name: 'Logo on Official Conference Website',
          desc: 'Featured logo on dnc.mscprpcem.tech with backlink to your website or careers portal.',
          title: 'Headline "Presented By" Hero',
          platinum: 'Large Platinum Tier Tier',
          gold: 'Medium Gold Tier',
          silver: 'Silver Partners Grid',
          community: 'Community Grid',
        },
        {
          name: 'Social Media Dedicated Spotlights',
          desc: 'Custom-crafted announcement graphics and write-ups across LinkedIn, WhatsApp & YouTube.',
          title: '6+ Dedicated Posts + Video',
          platinum: '4 Dedicated Posts',
          gold: '2 Dedicated Posts',
          silver: '1 Group Announcement',
          community: '1 Partner Shoutout',
        },
        {
          name: 'Logo on Attendee Badges & Lanyards',
          desc: 'Prominent branding on physical ID badges and neck lanyards worn by all 600+ delegates.',
          title: 'Front & Center on Every Pass',
          platinum: 'Prominent on Pass Reverse',
          gold: 'Logo on Badge Reverse',
          silver: '—',
          community: '—',
        },
        {
          name: 'Main Stage Backdrop & Screen Loops',
          desc: 'Logo projected on the grand stage LED screen and between session transition slides.',
          title: 'Permanent Bug + Large Loop',
          platinum: 'High-Rotation Slide Loop',
          gold: 'Intermission Loop',
          silver: 'Intermission Loop',
          community: 'Community Slide Loop',
        },
        {
          name: 'Live Stream Overlays & Recording Mentions',
          desc: 'Lower-third graphic overlays and video description links on recorded technical talks.',
          title: 'Permanent Lower-Third Bug',
          platinum: 'Session Intro/Outro Cards',
          gold: 'Description Link & Credits',
          silver: 'Video Credits',
          community: 'Video Credits',
        },
        {
          name: 'Post-Conference Retrospective Highlights Film',
          desc: 'Inclusion in the official cinematic recap film distributed across social channels.',
          title: 'Opening Slate + Soundbite',
          platinum: 'Featured Booth Coverage',
          gold: 'Logo in Film Credits',
          silver: 'Logo in Film Credits',
          community: 'Logo in Film Credits',
        },
      ]
    },
    // 5. Passes & VIP Perks
    {
      category: 'passes',
      categoryName: 'Passes, Hospitality & ROI Deliverables',
      items: [
        {
          name: 'VIP Delegate & All-Access Passes',
          desc: 'Full-day access to all keynote sessions, workshops, networking feasts, and conference kits.',
          title: '10 VIP All-Access Passes',
          platinum: '6 VIP All-Access Passes',
          gold: '4 VIP All-Access Passes',
          silver: '2 VIP Delegate Passes',
          community: '2 Community Passes',
        },
        {
          name: 'Speakers & Leadership Dinner Invitations',
          desc: 'Exclusive private evening dinner with keynote speakers, Microsoft MVPs, and college leaders.',
          title: '4 Dinner Invitations',
          platinum: '2 Dinner Invitations',
          gold: '1 Dinner Invitation',
          silver: '—',
          community: '—',
        },
        {
          name: 'Dedicated VIP Seating Reserve',
          desc: 'Reserved front-row seating for your corporate delegation in the Main Auditorium.',
          title: 'Front-Row Reserved Block',
          platinum: 'Reserved VIP Rows',
          gold: 'Priority Seating',
          silver: 'Open Delegate Seating',
          community: 'Open Delegate Seating',
        },
        {
          name: 'Post-Conference Analytics & Engagement Report',
          desc: 'Comprehensive post-event report including attendee demographics, booth footfall, and media reach.',
          title: 'Comprehensive Data Report',
          platinum: 'Standard Analytics Report',
          gold: 'Executive Summary Report',
          silver: 'Attendance Overview',
          community: '—',
        },
      ]
    }
  ];

  // Custom add-ons
  const ADD_ONS = [
    {
      title: 'Official Badges & Lanyards Partner',
      price: '₹35,000',
      desc: 'Exclusive logo print on all 600+ physical satin lanyards and laminated attendee passes.',
      icon: Ticket,
      color: '#512BD4'
    },
    {
      title: 'Developer Lunch & Feast Sponsor',
      price: '₹50,000',
      desc: 'Branded dining hall banners, custom table standees, and meal token co-branding during the grand lunch.',
      icon: Coffee,
      color: '#D97706'
    },
    {
      title: 'Hackathon & Code Sprint Challenge',
      price: '₹30,000',
      desc: 'Exclusive naming rights for the 24-hr campus hackathon with proprietary API / SDK judging rights.',
      icon: Award,
      color: '#059669'
    },
    {
      title: 'Community Coffee & Barista Lounge',
      price: '₹25,000',
      desc: 'High-footfall branded coffee bar with custom cup sleeves and networking lounge signage.',
      icon: Sparkles,
      color: '#E0199E'
    },
    {
      title: 'Official T-Shirt & Swag Partner',
      price: '₹45,000',
      desc: 'Prominent sleeve or back logo on high-quality conference t-shirts given to speakers and volunteers.',
      icon: Briefcase,
      color: '#2563EB'
    }
  ];

  // FAQs
  const FAQS = [
    {
      q: 'Can packages be customized to meet our specific company objectives?',
      a: 'Absolutely! We understand every organization has unique goals — whether it is hiring top final-year campus engineers, developer advocacy for an API/SDK, or corporate brand building. We are happy to tailor custom deliverables and combine add-on packages to fit your vision.'
    },
    {
      q: 'What is the attendee demographic profile for .NET Conf 2026 Amravati?',
      a: 'We anticipate 600+ verified in-person delegates comprising 65% senior engineering and computer science students from 15+ colleges across Maharashtra, 25% professional software developers and cloud architects, and 10% faculty members, founders, and Microsoft Student Ambassadors.'
    },
    {
      q: 'How are payments processed, and can we receive a GST-compliant invoice?',
      a: 'Yes! All sponsorship contributions are received through P. R. Pote Patil College of Engineering and Management (PRPCEM) official institutional accounts with formal receipts, GST tax invoicing, and trust compliance documentation.'
    },
    {
      q: 'When is the deadline to confirm our sponsorship commitment?',
      a: 'To guarantee inclusion on printed conference collaterals (such as physical lanyards, stage backdrops, attendee kits, and t-shirts), sponsorship agreements should be confirmed at least 4 weeks prior to the event date (November 28, 2026). Digital-only packages can be onboarded up to 10 days before the conference.'
    },
    {
      q: 'What facilities are provided in the exhibition booth space?',
      a: 'Each exhibition booth includes standard electrical power connections (5A/15A), high-speed campus Wi-Fi access, display tables with tablecloths, chairs, and space for company standees. Dedicated AV monitors, custom backdrops, or high-draw power can be coordinated with our logistics committee.'
    },
    {
      q: 'How does candidate resume access work under privacy regulations?',
      a: 'During attendee registration, delegates have the transparent option to opt-in to share their technical profiles, GitHub handles, and resumes with official conference hiring partners. Sponsors receive curated, categorized databases adhering to privacy and consent standards.'
    }
  ];

  // Filtered benefits based on active tab
  const filteredCategories = activeCategory === 'all'
    ? BENEFITS_DATA
    : BENEFITS_DATA.filter((cat) => cat.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FAF7F2] font-sans selection:bg-[#512BD4] selection:text-white pb-24 relative text-[#120838]">
      
      {/* 1. STICKY TOP NAVIGATION BAR */}
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
              title="Print Sponsorship Prospectus"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT DECK</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 bg-white hover:bg-stone-50 text-black font-mono font-bold text-xs px-3 py-2 rounded-xl border-[2px] border-black shadow-[2px_2px_0px_0px_#000] cursor-pointer transition-all"
              title="Share Page"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'COPIED!' : 'SHARE'}</span>
            </button>

            <div className="hidden md:flex bg-[#EEEAFB] text-[#512BD4] border-[2px] border-black px-3 py-1.5 rounded-xl text-xs font-mono font-black shadow-[2px_2px_0px_0px_#000]">
              v2026 OFFICIAL PROSPECTUS
            </div>
          </div>
        </div>
      </header>

      {/* 2. MAIN PROSPECTUS CONTAINER */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        
        {/* HERO CARD */}
        <div className="bg-[#512BD4] text-white border-[3px] border-black rounded-3xl p-6 sm:p-10 shadow-[6px_6px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] mb-10 relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#FFE89E] rounded-full opacity-10 pointer-events-none blur-xl" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#00E5FF] rounded-full opacity-10 pointer-events-none blur-xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#FFE89E] text-black text-xs font-mono font-black px-3 py-1 rounded-full uppercase border-[1.5px] border-black mb-4 shadow-[2px_2px_0px_0px_#000]">
              <Sparkles className="w-3.5 h-3.5 fill-black" />
              <span>PARTNERSHIP PROSPECTUS · DEC 26, 2026</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black font-sans uppercase tracking-tight leading-tight mb-4 text-white">
              Sponsor .NET Conf 2026 <br />
              <span className="text-[#FFE89E]">Amravati Edition</span>
            </h1>

            <p className="text-white/95 text-sm sm:text-base md:text-lg font-sans leading-relaxed max-w-3xl mb-6">
              Connect your company with <strong>600+ passionate engineers, AI builders, cloud architects, and top campus developers</strong> across Central India. Build brand eminence, accelerate tech recruiting, and launch real-world developer tools at PRPCEM Amravati.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#tiers-table"
                className="inline-flex items-center gap-2 bg-[#FFE89E] hover:bg-[#FFD13B] text-black font-mono font-black text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl border-[2.5px] border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer"
              >
                <span>COMPARE ALL TIERS &amp; BENEFITS</span>
                <span className="font-bold">↓</span>
              </a>

              <a
                href="#inquire-form"
                className="inline-flex items-center gap-2 bg-white hover:bg-stone-100 text-[#120838] font-mono font-black text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border-[2.5px] border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#512BD4]" />
                <span>INQUIRE FOR SPONSORSHIP</span>
              </a>

              <a
                href="mailto:dotnetconfamt@prpotepatilengg.ac.in?subject=Request%20Full%20Sponsorship%20Deck%20-%20.NET%20Conf%202026"
                className="inline-flex items-center gap-2 bg-[#120838] hover:bg-black text-white font-mono font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border-[2.5px] border-white/50 shadow-[3px_3px_0px_0px_#000] transition-all"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD PDF DECK</span>
              </a>
            </div>

            <div className="mt-8 pt-4 border-t border-white/20 flex flex-wrap items-center gap-3 sm:gap-6 text-xs font-mono text-white/90">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#FFE89E]" />
                PRPCEM Campus, Amravati, Maharashtra
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#FFE89E]" />
                Organized by Microsoft Student Club PRPCEM
              </span>
            </div>
          </div>
        </div>

        {/* 3. KEY METRICS & AUDIENCE IMPACT */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight flex items-center gap-2">
              <Users className="w-6 h-6 text-[#512BD4]" />
              <span>Why Partner with .NET Conf 2026?</span>
            </h2>
            <span className="font-mono text-xs text-stone-500 font-bold uppercase hidden sm:inline">
              Audience Demographics &amp; Reach
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border-[2.5px] border-black rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_0px_#000]">
              <div className="font-mono text-2xl sm:text-4xl font-black text-[#512BD4] mb-1">
                600+
              </div>
              <div className="font-sans font-bold text-sm text-[#120838] mb-0.5">
                In-Person Delegates
              </div>
              <p className="text-xs text-stone-600 font-sans">
                Full-stack engineers, AI developers, cloud architects, and final-year coders.
              </p>
            </div>

            <div className="bg-white border-[2.5px] border-black rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_0px_#000]">
              <div className="font-mono text-2xl sm:text-4xl font-black text-[#D97706] mb-1">
                15+
              </div>
              <div className="font-sans font-bold text-sm text-[#120838] mb-0.5">
                Colleges Represented
              </div>
              <p className="text-xs text-stone-600 font-sans">
                Delegations from engineering institutions across Amravati, Nagpur, and Vidarbha.
              </p>
            </div>

            <div className="bg-white border-[2.5px] border-black rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_0px_#000]">
              <div className="font-mono text-2xl sm:text-4xl font-black text-[#059669] mb-1">
                50,000+
              </div>
              <div className="font-sans font-bold text-sm text-[#120838] mb-0.5">
                Digital Impressions
              </div>
              <p className="text-xs text-stone-600 font-sans">
                Multi-channel reach via LinkedIn, WhatsApp groups, YouTube, and campus ambassadors.
              </p>
            </div>

            <div className="bg-white border-[2.5px] border-black rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_0px_#000]">
              <div className="font-mono text-2xl sm:text-4xl font-black text-[#E0199E] mb-1">
                100%
              </div>
              <div className="font-sans font-bold text-sm text-[#120838] mb-0.5">
                Direct Talent Access
              </div>
              <p className="text-xs text-stone-600 font-sans">
                Opt-in resume repository, live coding hackathons, and on-ground interview lounge.
              </p>
            </div>
          </div>
        </section>

        {/* 4. TIER OVERVIEW CARDS */}
        <section className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#512BD4]">
                Investment Packages
              </p>
              <h2 className="text-xl sm:text-3xl font-black font-sans uppercase tracking-tight">
                Sponsorship Tiers Overview
              </h2>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-[#EEEAFB] text-[#512BD4] px-3 py-1 rounded-xl text-xs font-mono font-bold border border-[#512BD4]/30">
              <span>Prices in INR (GST Extra where applicable)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TIERS.slice(0, 3).map((tier) => (
              <div
                key={tier.id}
                className={`bg-white border-[3px] ${tier.borderStyle} rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_#000] flex flex-col relative transition-all hover:translate-y-[-2px]`}
              >
                {tier.recommended && (
                  <div className="bg-[#D97706] text-white text-center font-mono font-black text-[11px] tracking-widest uppercase py-1 border-b-2 border-black">
                    ★ MOST PRESTIGIOUS PARTNERSHIP ★
                  </div>
                )}
                
                <div className={`${tier.bgHeader} p-5 border-b-2 border-black`}>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`px-2.5 py-0.5 rounded font-mono font-black text-xs uppercase tracking-wider border border-black ${tier.badgeColor}`}>
                      {tier.name}
                    </span>
                    <span className="font-mono text-xs text-stone-700 font-bold bg-white/70 px-2 py-0.5 rounded border border-black/30">
                      {tier.slots}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-mono text-3xl font-black text-[#120838]">
                      {tier.investment}
                    </span>
                    <span className="font-mono text-xs text-stone-600 font-bold">
                      {tier.usd}
                    </span>
                  </div>

                  <p className="font-sans text-xs text-stone-700 font-medium">
                    {tier.tagline}
                  </p>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-2.5 mb-6">
                      {tier.topPerks.map((perk, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-sans text-stone-800">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#inquire-form"
                    onClick={() => setSelectedTier(tier.name)}
                    className="w-full text-center py-2.5 rounded-xl font-mono font-black text-xs uppercase border-[2px] border-black bg-[#FAF7F2] hover:bg-[#512BD4] hover:text-white transition-all shadow-[2px_2px_0px_0px_#000] cursor-pointer"
                  >
                    Select {tier.name} Tier →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Silver & Community Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {TIERS.slice(3).map((tier) => (
              <div
                key={tier.id}
                className="bg-white border-[3px] border-black rounded-2xl overflow-hidden shadow-[5px_5px_0px_0px_#000] flex flex-col justify-between p-5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`px-2.5 py-0.5 rounded font-mono font-black text-xs uppercase tracking-wider border border-black ${tier.badgeColor}`}>
                      {tier.name}
                    </span>
                    <div className="font-mono text-xl font-black text-[#120838]">
                      {tier.investment} <span className="text-xs font-normal text-stone-500">{tier.usd}</span>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-stone-600 mb-4">
                    {tier.tagline} &bull; <strong className="text-stone-800">{tier.slots}</strong>
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                    {tier.topPerks.map((perk, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-sans text-stone-800">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#inquire-form"
                  onClick={() => setSelectedTier(tier.name)}
                  className="w-full text-center py-2 rounded-xl font-mono font-black text-xs uppercase border-[2px] border-black bg-white hover:bg-[#512BD4] hover:text-white transition-all shadow-[2px_2px_0px_0px_#000] cursor-pointer"
                >
                  Inquire for {tier.name} →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* 5. THE COMPREHENSIVE TIER VS BENEFITS COMPARISON TABLE */}
        <section id="tiers-table" className="mb-14 scroll-mt-24">
          <div className="bg-white border-[3px] border-black rounded-3xl p-5 sm:p-8 shadow-[8px_8px_0px_0px_#000]">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b-2 border-black/15">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE89E] border border-black text-black font-mono font-black text-xs uppercase shadow-[2px_2px_0px_#000] mb-2">
                  <Star className="w-3.5 h-3.5 fill-black" />
                  <span>OFFICIAL DELIVERABLES MATRIX</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black font-sans uppercase tracking-tight text-[#120838]">
                  Tier vs. Benefits Comparison
                </h2>
                <p className="text-stone-600 text-xs sm:text-sm font-sans mt-1">
                  Side-by-side breakdown of all deliverables, stage privileges, booth sizes, and recruiting assets.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center gap-1.5 bg-[#FAF7F2] p-1.5 rounded-2xl border-2 border-black">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-3 py-1.5 rounded-xl font-mono text-xs font-black transition-all cursor-pointer ${
                    activeCategory === 'all'
                      ? 'bg-[#512BD4] text-white shadow-[2px_2px_0px_#000]'
                      : 'text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  ALL PERKS
                </button>
                <button
                  onClick={() => setActiveCategory('stage')}
                  className={`px-3 py-1.5 rounded-xl font-mono text-xs font-black transition-all cursor-pointer ${
                    activeCategory === 'stage'
                      ? 'bg-[#512BD4] text-white shadow-[2px_2px_0px_#000]'
                      : 'text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  STAGE &amp; TALKS
                </button>
                <button
                  onClick={() => setActiveCategory('booth')}
                  className={`px-3 py-1.5 rounded-xl font-mono text-xs font-black transition-all cursor-pointer ${
                    activeCategory === 'booth'
                      ? 'bg-[#512BD4] text-white shadow-[2px_2px_0px_#000]'
                      : 'text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  EXHIBITION
                </button>
                <button
                  onClick={() => setActiveCategory('talent')}
                  className={`px-3 py-1.5 rounded-xl font-mono text-xs font-black transition-all cursor-pointer ${
                    activeCategory === 'talent'
                      ? 'bg-[#512BD4] text-white shadow-[2px_2px_0px_#000]'
                      : 'text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  TALENT &amp; HIRING
                </button>
                <button
                  onClick={() => setActiveCategory('branding')}
                  className={`px-3 py-1.5 rounded-xl font-mono text-xs font-black transition-all cursor-pointer ${
                    activeCategory === 'branding'
                      ? 'bg-[#512BD4] text-white shadow-[2px_2px_0px_#000]'
                      : 'text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  BRANDING
                </button>
                <button
                  onClick={() => setActiveCategory('passes')}
                  className={`px-3 py-1.5 rounded-xl font-mono text-xs font-black transition-all cursor-pointer ${
                    activeCategory === 'passes'
                      ? 'bg-[#512BD4] text-white shadow-[2px_2px_0px_#000]'
                      : 'text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  PASSES &amp; VIP
                </button>
              </div>
            </div>

            {/* Scrollable Matrix Table */}
            <div className="overflow-x-auto rounded-2xl border-[2.5px] border-black shadow-[4px_4px_0px_0px_#000]">
              <table className="w-full text-left border-collapse min-w-[760px]">
                <thead>
                  <tr className="bg-[#120838] text-white border-b-2 border-black font-mono text-xs">
                    <th className="p-3.5 sm:p-4 w-[28%] font-black uppercase tracking-wider border-r border-white/20">
                      Deliverables &amp; Benefits
                    </th>
                    <th className="p-3 sm:p-4 w-[16%] text-center font-black uppercase tracking-wider bg-[#221054] text-[#FFE89E] border-r border-white/20">
                      <div className="text-[10px] text-white/70">Headline</div>
                      TITLE
                      <div className="text-[11px] font-normal text-white/90">₹2,00,000</div>
                    </th>
                    <th className="p-3 sm:p-4 w-[14%] text-center font-black uppercase tracking-wider border-r border-white/20">
                      <div className="text-[10px] text-white/70">Premium</div>
                      PLATINUM
                      <div className="text-[11px] font-normal text-white/90">₹1,25,000</div>
                    </th>
                    <th className="p-3 sm:p-4 w-[14%] text-center font-black uppercase tracking-wider border-r border-white/20">
                      <div className="text-[10px] text-white/70">Popular</div>
                      GOLD
                      <div className="text-[11px] font-normal text-white/90">₹75,000</div>
                    </th>
                    <th className="p-3 sm:p-4 w-[14%] text-center font-black uppercase tracking-wider border-r border-white/20">
                      <div className="text-[10px] text-white/70">Startup</div>
                      SILVER
                      <div className="text-[11px] font-normal text-white/90">₹40,000</div>
                    </th>
                    <th className="p-3 sm:p-4 w-[14%] text-center font-black uppercase tracking-wider">
                      <div className="text-[10px] text-white/70">Ecosystem</div>
                      COMMUNITY
                      <div className="text-[11px] font-normal text-white/90">In-Kind</div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredCategories.map((group, groupIdx) => (
                    <React.Fragment key={groupIdx}>
                      {/* Section Header Row */}
                      <tr className="bg-[#EEEAFB] border-y-2 border-black">
                        <td
                          colSpan={6}
                          className="px-4 py-2.5 font-mono font-black text-xs uppercase text-[#512BD4] tracking-wider"
                        >
                          {group.categoryName}
                        </td>
                      </tr>

                      {/* Items */}
                      {group.items.map((item, itemIdx) => (
                        <tr
                          key={itemIdx}
                          className={`border-b border-stone-200 transition-colors ${
                            itemIdx % 2 === 0 ? 'bg-white' : 'bg-stone-50/70'
                          } hover:bg-[#FAF8FF]`}
                        >
                          {/* Feature Name & Desc */}
                          <td className="p-3 sm:p-3.5 border-r border-stone-200">
                            <div className="font-sans font-bold text-xs sm:text-sm text-[#120838]">
                              {item.name}
                            </div>
                            <div className="font-sans text-[11px] text-stone-500 leading-tight mt-0.5">
                              {item.desc}
                            </div>
                          </td>

                          {/* Title Column */}
                          <td className="p-3 sm:p-3.5 text-center border-r border-stone-200 bg-[#FFFBEB]/60">
                            {item.title === '—' ? (
                              <span className="text-stone-300 font-mono font-bold">—</span>
                            ) : (
                              <span className="inline-block bg-[#FFE89E] text-black font-mono font-bold text-[11px] px-2 py-1 rounded border border-black/40 shadow-[1px_1px_0px_#000]">
                                {item.title}
                              </span>
                            )}
                          </td>

                          {/* Platinum Column */}
                          <td className="p-3 sm:p-3.5 text-center border-r border-stone-200">
                            {item.platinum === '—' ? (
                              <span className="text-stone-300 font-mono font-bold">—</span>
                            ) : (
                              <span className="inline-block bg-[#EDE9FE] text-[#512BD4] font-mono font-bold text-[11px] px-2 py-0.5 rounded border border-[#512BD4]/40">
                                {item.platinum}
                              </span>
                            )}
                          </td>

                          {/* Gold Column */}
                          <td className="p-3 sm:p-3.5 text-center border-r border-stone-200">
                            {item.gold === '—' ? (
                              <span className="text-stone-300 font-mono font-bold">—</span>
                            ) : (
                              <span className="inline-block bg-[#FEF3C7] text-[#92400E] font-mono font-bold text-[11px] px-2 py-0.5 rounded border border-[#92400E]/30">
                                {item.gold}
                              </span>
                            )}
                          </td>

                          {/* Silver Column */}
                          <td className="p-3 sm:p-3.5 text-center border-r border-stone-200">
                            {item.silver === '—' ? (
                              <span className="text-stone-300 font-mono font-bold">—</span>
                            ) : (
                              <span className="inline-block bg-stone-100 text-stone-700 font-mono font-bold text-[11px] px-2 py-0.5 rounded border border-stone-300">
                                {item.silver}
                              </span>
                            )}
                          </td>

                          {/* Community Column */}
                          <td className="p-3 sm:p-3.5 text-center">
                            {item.community === '—' ? (
                              <span className="text-stone-300 font-mono font-bold">—</span>
                            ) : (
                              <span className="inline-block bg-sky-50 text-sky-800 font-mono font-bold text-[11px] px-2 py-0.5 rounded border border-sky-300">
                                {item.community}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footnote */}
            <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-stone-500">
              <div>
                * Custom multi-track configurations and equipment rentals are available upon request.
              </div>
              <a
                href="#inquire-form"
                className="font-bold text-[#512BD4] hover:underline flex items-center gap-1"
              >
                <span>Need a customized tier package? Let&apos;s talk</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* 6. SPECIALTY ADD-ON SPONSORSHIP OPPORTUNITIES */}
        <section className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#512BD4]">
                High-Visibility Activations
              </p>
              <h2 className="text-xl sm:text-3xl font-black font-sans uppercase tracking-tight">
                Add-On &amp; Specialty Packages
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-stone-600 max-w-md">
              Standalone branding options or power-ups to combine with any existing tier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ADD_ONS.map((addon, idx) => {
              const IconComp = addon.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border-[2.5px] border-black rounded-2xl p-5 shadow-[4px_4px_0px_0px_#000] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className="w-10 h-10 rounded-xl border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_#000]"
                        style={{ backgroundColor: `${addon.color}20`, color: addon.color }}
                      >
                        <IconComp className="w-5 h-5 stroke-[2.5]" />
                      </div>
                      <span className="font-mono font-black text-lg text-[#120838] bg-[#FAF7F2] px-2.5 py-0.5 rounded-lg border border-black/40">
                        {addon.price}
                      </span>
                    </div>

                    <h3 className="font-sans font-black text-base text-[#120838] mb-1.5">
                      {addon.title}
                    </h3>
                    <p className="font-sans text-xs text-stone-600 leading-relaxed mb-4">
                      {addon.desc}
                    </p>
                  </div>

                  <a
                    href="#inquire-form"
                    onClick={() => {
                      setSelectedTier(`Add-On: ${addon.title}`);
                      setInquiryNotes(`Interested in the "${addon.title}" specialty package (${addon.price}).`);
                    }}
                    className="w-full text-center py-2 rounded-xl font-mono font-black text-xs uppercase border border-black bg-stone-50 hover:bg-[#512BD4] hover:text-white transition-all shadow-[1px_1px_0px_0px_#000] cursor-pointer"
                  >
                    Inquire for this Add-On →
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* 7. HOW IT WORKS / ONBOARDING STEPS */}
        <section className="mb-14">
          <div className="bg-[#120838] text-white border-[3px] border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000]">
            <h2 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight text-[#FFE89E] mb-2">
              Simple 4-Step Partnership Onboarding
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm font-sans mb-6">
              Our dedicated Microsoft Student Club PRPCEM partnership team guarantees smooth, professional execution from signing to show day.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white/10 border border-white/20 rounded-2xl p-4">
                <span className="font-mono text-2xl font-black text-[#FFE89E] block mb-1">01</span>
                <h4 className="font-sans font-bold text-sm text-white mb-1">Select Tier or Add-On</h4>
                <p className="text-stone-300 text-xs font-sans">
                  Choose the tier or contact us to build a tailored plan for your hiring and tech initiatives.
                </p>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-2xl p-4">
                <span className="font-mono text-2xl font-black text-[#FFE89E] block mb-1">02</span>
                <h4 className="font-sans font-bold text-sm text-white mb-1">15-Min Alignment Call</h4>
                <p className="text-stone-300 text-xs font-sans">
                  Brief consultation with our student conveners and college faculty to confirm slot deliverables.
                </p>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-2xl p-4">
                <span className="font-mono text-2xl font-black text-[#FFE89E] block mb-1">03</span>
                <h4 className="font-sans font-bold text-sm text-white mb-1">MoU &amp; Invoicing</h4>
                <p className="text-stone-300 text-xs font-sans">
                  Formal agreement with official PRPCEM Trust accounts, bank transfer and GST compliance.
                </p>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-2xl p-4">
                <span className="font-mono text-2xl font-black text-[#FFE89E] block mb-1">04</span>
                <h4 className="font-sans font-bold text-sm text-white mb-1">Execution &amp; Rollout</h4>
                <p className="text-stone-300 text-xs font-sans">
                  Immediate website logo rollout, social campaigns, speaker coordination, and booth logistics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. SPONSORSHIP INQUIRY FORM & DIRECT CONTACT */}
        <section id="inquire-form" className="mb-14 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white border-[3px] border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000]">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDE9FE] border border-black text-[#512BD4] font-mono font-black text-xs uppercase shadow-[2px_2px_0px_#000] mb-3">
                <Send className="w-3.5 h-3.5" />
                <span>DIRECT INQUIRY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-sans uppercase tracking-tight text-[#120838] mb-2">
                Let&apos;s Partner Together
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm font-sans mb-6">
                Fill out the quick inquiry details below to generate a pre-formatted email to our Sponsorship Committee, or reach us directly.
              </p>

              <form onSubmit={handleSendInquiry} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs font-bold uppercase text-stone-700 mb-1.5">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Acme Cloud Corp"
                      className="w-full bg-[#FAF7F2] border-2 border-black rounded-xl px-3.5 py-2.5 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#512BD4]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-bold uppercase text-stone-700 mb-1.5">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-[#FAF7F2] border-2 border-black rounded-xl px-3.5 py-2.5 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#512BD4]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs font-bold uppercase text-stone-700 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={workEmail}
                      onChange={(e) => setWorkEmail(e.target.value)}
                      placeholder="rahul@acme.com"
                      className="w-full bg-[#FAF7F2] border-2 border-black rounded-xl px-3.5 py-2.5 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#512BD4]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-bold uppercase text-stone-700 mb-1.5">
                      Target Sponsorship Tier
                    </label>
                    <select
                      value={selectedTier}
                      onChange={(e) => setSelectedTier(e.target.value)}
                      className="w-full bg-[#FAF7F2] border-2 border-black rounded-xl px-3.5 py-2.5 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#512BD4]"
                    >
                      <option value="TITLE SPONSOR (₹2,00,000)">TITLE SPONSOR (₹2,00,000)</option>
                      <option value="PLATINUM SPONSOR (₹1,25,000)">PLATINUM SPONSOR (₹1,25,000)</option>
                      <option value="GOLD SPONSOR (₹75,000)">GOLD SPONSOR (₹75,000)</option>
                      <option value="SILVER SPONSOR (₹40,000)">SILVER SPONSOR (₹40,000)</option>
                      <option value="Specialty Add-On / Custom Package">Specialty Add-On / Custom Package</option>
                      <option value="Community & Ecosystem Partner">Community &amp; Ecosystem Partner</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold uppercase text-stone-700 mb-1.5">
                    Hiring, Booth, or Presentation Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={inquiryNotes}
                    onChange={(e) => setInquiryNotes(e.target.value)}
                    placeholder="Tell us about your developer goals, expected booth setup, or if you need resume database access..."
                    className="w-full bg-[#FAF7F2] border-2 border-black rounded-xl p-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#512BD4]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#512BD4] hover:bg-[#4322B0] text-white font-mono font-black text-sm py-3.5 rounded-xl border-[2.5px] border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>DRAFT INQUIRY EMAIL NOW</span>
                </button>
              </form>
            </div>

            {/* Direct Contact Info Column */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* Contact Card */}
              <div className="bg-[#FFE89E] border-[3px] border-black rounded-3xl p-6 shadow-[6px_6px_0px_0px_#000]">
                <h3 className="font-sans font-black text-lg uppercase text-[#120838] mb-1">
                  Sponsorship Committee Desk
                </h3>
                <p className="font-sans text-xs text-stone-800 mb-4">
                  Direct contact channel with faculty advisors and student leads at PRPCEM Amravati:
                </p>

                <div className="space-y-3 font-sans text-xs">
                  <div className="flex items-start gap-2.5 bg-white/80 p-2.5 rounded-xl border border-black">
                    <Mail className="w-4 h-4 text-[#512BD4] shrink-0 mt-0.5" />
                    <div className="flex-1 overflow-hidden">
                      <div className="font-bold text-[#120838]">Official Sponsorship Email</div>
                      <div className="font-mono text-[11px] text-stone-700 truncate select-all">
                        dotnetconfamt@prpotepatilengg.ac.in
                      </div>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1.5 hover:bg-stone-200 rounded border border-black/30 transition-all cursor-pointer"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5 text-stone-700" />}
                    </button>
                  </div>

                  <div className="flex items-start gap-2.5 bg-white/80 p-2.5 rounded-xl border border-black">
                    <Building2 className="w-4 h-4 text-[#512BD4] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#120838]">Host Campus &amp; Trust</div>
                      <div className="text-stone-700">
                        P. R. Pote Patil College of Engineering and Management, Kathora Road, Amravati 444602
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 bg-white/80 p-2.5 rounded-xl border border-black">
                    <Users className="w-4 h-4 text-[#512BD4] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#120838]">Student Leadership Chapter</div>
                      <div className="text-stone-700">
                        Microsoft Student Club (MSC) PRPCEM
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-black/20 flex items-center justify-between">
                  <a
                    href="https://chat.whatsapp.com/EPFRDsWd057DBqYS5bpK67"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-black text-[#120838] hover:underline"
                  >
                    <span>Connect on WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://www.mscprpcem.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-black text-[#512BD4] hover:underline"
                  >
                    <span>mscprpcem.tech</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Download Prospectus Quick Box */}
              <div className="bg-white border-[2.5px] border-black rounded-2xl p-5 shadow-[4px_4px_0px_0px_#000] flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#120838]">
                    Looking for the complete PDF Deck?
                  </h4>
                  <p className="font-sans text-xs text-stone-600">
                    Includes floor plans, stage specifications, and past edition analytics.
                  </p>
                </div>
                <a
                  href="mailto:dotnetconfamt@prpotepatilengg.ac.in?subject=Request%20PDF%20Sponsorship%20Deck%20-%20.NET%20Conf%202026"
                  className="bg-[#512BD4] text-white p-3 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#4322B0] shrink-0 transition-all"
                  title="Request PDF Deck"
                >
                  <Download className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 9. SPONSORSHIP FAQ ACCORDION */}
        <section className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-6 h-6 text-[#512BD4]" />
            <h2 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight text-[#120838]">
              Frequently Asked Questions by Sponsors
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border-[2.5px] border-black rounded-2xl overflow-hidden shadow-[3px_3px_0px_0px_#000] transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-sans font-bold text-sm sm:text-base text-[#120838] hover:bg-stone-50 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="ml-4 shrink-0 p-1 rounded-lg border border-black/30 bg-[#FAF7F2]">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm font-sans text-stone-700 leading-relaxed border-t border-stone-200 bg-[#FAF8FF]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 10. CLOSING BANNER */}
        <div className="bg-[#FAF7F2] border-[3px] border-dashed border-black rounded-3xl p-6 sm:p-8 text-center shadow-[4px_4px_0px_0px_#000]">
          <h3 className="font-sans font-black text-xl sm:text-2xl uppercase tracking-tight text-[#120838] mb-2">
            Ready to Shape the Future of Developer Tech in Central India?
          </h3>
          <p className="font-sans text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto mb-6">
            Join Microsoft, PRPCEM, and our global ecosystem partners at .NET Conf 2026 Amravati on December 26, 2026.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleGoBack}
              className="bg-[#120838] hover:bg-black text-white font-mono font-black text-xs sm:text-sm px-6 py-3 rounded-xl border-[2.5px] border-black shadow-[3px_3px_0px_0px_#000] cursor-pointer"
            >
              ← RETURN TO MAIN CONFERENCE PAGE
            </button>
            <a
              href="mailto:dotnetconfamt@prpotepatilengg.ac.in?subject=Sponsorship%20Inquiry%20-%20.NET%20Conf%202026"
              className="bg-[#FFE89E] hover:bg-[#FFD13B] text-black font-mono font-black text-xs sm:text-sm px-6 py-3 rounded-xl border-[2.5px] border-black shadow-[3px_3px_0px_0px_#000] cursor-pointer"
            >
              CONTACT SPONSORSHIP DESK
            </a>
          </div>
        </div>

      </main>
    </div>
  );
};

export default SponsorshipPage;

