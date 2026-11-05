import React, { useState, useEffect } from 'react';
import '../DncBrutal/DncBrutalStyles.css';
import DncWarliSprites from '../DncBrutal/DncWarliSprites.jsx';
import DncFooter from '../DncBrutal/DncFooter.jsx';
import {
  ArrowLeft,
  Share2,
  Check,
  Building2,
  Users,
  Mic,
  Award,
  Sparkles,
  Mail,
  MapPin,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Download,
  Copy,
  Briefcase,
  Star,
  Layers,
  Megaphone,
  Coffee,
  Ticket,
  Send,
  HelpCircle,
  Eye,
  CheckCircle2,
  Zap,
  Target
} from 'lucide-react';

export const SponsorshipPage = ({ onBack }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [highlightedTier, setHighlightedTier] = useState('platinum'); // 'title' | 'platinum' | 'gold' | 'silver' | 'community' | null
  const [openFaq, setOpenFaq] = useState(null);

  // Form state for inquiry
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [selectedTier, setSelectedTier] = useState('PLATINUM SPONSOR (₹1,25,000)');
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

  const scrollToInquiry = (tierName) => {
    if (tierName) {
      setSelectedTier(tierName);
    }
    const el = document.getElementById('inquire-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
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
      `Requirements / Message: ${inquiryNotes || 'Please send us the full sponsorship prospectus and invoicing details.'}\n\n` +
      `Looking forward to collaborating!\n`
    );
    window.location.href = `mailto:dotnetconfamt@prpotepatilengg.ac.in?subject=${subject}&body=${body}`;
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // 5 Sponsorship Tiers
  const TIERS = [
    {
      id: 'title',
      name: 'TITLE SPONSOR',
      fullName: 'TITLE SPONSOR (₹2,00,000)',
      investment: '₹2,00,000',
      usd: '~$2,400 USD',
      slots: '1-2 Exclusive Slots',
      theme: {
        dotBg: 'bg-[#D97706]',
        badgeBg: 'bg-[#FFE89E]',
        badgeText: 'text-[#120838]',
        border: 'border-[#D97706]',
        highlightBg: 'bg-[#FFFBEB]',
        headerAccent: 'border-t-4 border-t-[#D97706]',
      },
      targetAudience: 'Global Cloud & AI Leaders, Headline Tech Brands',
      tagline: 'Supreme Brand Eminence & Co-Host Privileges',
      perksSummary: [
        '30-min Headline Keynote speaking slot',
        'Mega 20×10 ft Exhibition Stall (Center Foyer)',
        'Direct Tech Developer & Community Reach',
        '10 VIP All-Access Delegate Passes',
        'Prominent Logo on Badges, Lanyards & Stage Backdrop',
      ],
      isPopular: false,
      isExclusive: true,
    },
    {
      id: 'platinum',
      name: 'PLATINUM',
      fullName: 'PLATINUM SPONSOR (₹1,25,000)',
      investment: '₹1,25,000',
      usd: '~$1,500 USD',
      slots: 'Max 3 Slots',
      theme: {
        dotBg: 'bg-[#512BD4]',
        badgeBg: 'bg-[#EDE9FE]',
        badgeText: 'text-[#512BD4]',
        border: 'border-[#512BD4]',
        highlightBg: 'bg-[#FAF5FF]',
        headerAccent: 'border-t-4 border-t-[#512BD4]',
      },
      targetAudience: 'Enterprise Software & High-Growth Tech Companies',
      tagline: 'High-Impact Technology Showcase & Developer Reach',
      perksSummary: [
        '15-min Main Stage Tech Keynote / Demo',
        'Prime 10×10 ft Exhibition Booth',
        'Direct Tech Developer Networking Access',
        '6 VIP All-Access Delegate Passes',
        '4 Dedicated Multi-Channel Social Spotlights',
      ],
      isPopular: true,
      isExclusive: false,
    },
    {
      id: 'gold',
      name: 'GOLD',
      fullName: 'GOLD SPONSOR (₹75,000)',
      investment: '₹75,000',
      usd: '~$900 USD',
      slots: 'Max 5 Slots',
      theme: {
        dotBg: 'bg-[#D97706]',
        badgeBg: 'bg-[#FEF3C7]',
        badgeText: 'text-[#92400E]',
        border: 'border-[#F59E0B]',
        highlightBg: 'bg-[#FEFCE8]',
        headerAccent: 'border-t-4 border-t-[#F59E0B]',
      },
      targetAudience: 'Developer Toolmakers, SaaS & Engineering Teams',
      tagline: 'Prime Developer Brand & Campus Visibility',
      perksSummary: [
        '5-min Lightning Tech Pitch / Introduction',
        '8×8 ft Product Showcase Demo Stall',
        'Developer Community Networking Channel',
        '4 VIP All-Access Passes',
        'Logo on Attendee Badges & Screen Loops',
      ],
      isPopular: false,
      isExclusive: false,
    },
    {
      id: 'silver',
      name: 'SILVER',
      fullName: 'SILVER SPONSOR (₹40,000)',
      investment: '₹40,000',
      usd: '~$480 USD',
      slots: 'Open Slots',
      theme: {
        dotBg: 'bg-[#475569]',
        badgeBg: 'bg-[#F1F5F9]',
        badgeText: 'text-[#334155]',
        border: 'border-[#64748B]',
        highlightBg: 'bg-[#F8FAFC]',
        headerAccent: 'border-t-4 border-t-[#64748B]',
      },
      targetAudience: 'Startups, Consultancies & Tech Agencies',
      tagline: 'Startup Innovation & On-Ground Presence',
      perksSummary: [
        'High-Top Kiosk / Demo Table Space',
        'Promotional Collateral in Attendee Kits',
        '2 VIP Delegate Passes',
        'Logo on Website & Event Guide',
        'Social Media Group Feature',
      ],
      isPopular: false,
      isExclusive: false,
    },
    {
      id: 'community',
      name: 'COMMUNITY',
      fullName: 'Community & Ecosystem Partner',
      investment: 'In-Kind / Free',
      usd: 'Barter Collab',
      slots: 'By Invitation',
      theme: {
        dotBg: 'bg-[#0284C7]',
        badgeBg: 'bg-[#E0F2FE]',
        badgeText: 'text-[#0369A1]',
        border: 'border-[#0284C7]',
        highlightBg: 'bg-[#F0F9FF]',
        headerAccent: 'border-t-4 border-t-[#0284C7]',
      },
      targetAudience: 'Student Clubs, Developer Chapters & Dev Communities',
      tagline: 'Community Cross-Promotion & Outreach',
      perksSummary: [
        'Shared Community Booth in Tech Zone',
        'Logo on Website & Community Slides',
        '2 Community Passes for Leadership',
        'Cross-Promotion to Tech Developers',
        'Stage Mentions during Valedictory',
      ],
      isPopular: false,
      isExclusive: false,
    },
  ];

  // Benefits Comparison Table Data (5 Categories, 24 Deliverables)
  const BENEFITS_DATA = [
    // 1. Stage & Speaking
    {
      category: 'stage',
      categoryName: 'Keynote & Speaking Engagements',
      icon: Mic,
      items: [
        {
          name: 'Main Stage Keynote Address',
          desc: 'Deliver a high-profile keynote talk to the full delegation in the Main Auditorium.',
          title: { type: 'highlight', text: '30 Mins (Headline)' },
          platinum: { type: 'highlight', text: '15 Mins (Tech Keynote)' },
          gold: { type: 'highlight', text: '5 Mins (Pitch)' },
          silver: { type: 'none' },
          community: { type: 'none' },
        },
        {
          name: 'Technical Workshop / Breakout Track',
          desc: 'Host a dedicated hands-on code laboratory or technical breakout track.',
          title: { type: 'highlight', text: '60 Mins (Exclusive)' },
          platinum: { type: 'highlight', text: '45 Mins (Dedicated)' },
          gold: { type: 'highlight', text: '30 Mins (Co-host)' },
          silver: { type: 'none' },
          community: { type: 'none' },
        },
        {
          name: 'Panel Discussion / Fireside Chat Seat',
          desc: 'Guaranteed seat for your executive or tech lead in headline panel discussions.',
          title: { type: 'check', text: 'Guaranteed Chair' },
          platinum: { type: 'check', text: 'Guaranteed Panelist' },
          gold: { type: 'text', text: 'Topic-dependent' },
          silver: { type: 'none' },
          community: { type: 'none' },
        },
        {
          name: 'Emcee Verbal Announcements',
          desc: 'Audible thank-you mentions by host emcees at major conference transitions.',
          title: { type: 'check', text: 'Every Transition' },
          platinum: { type: 'check', text: 'Opening & Closing' },
          gold: { type: 'check', text: 'Opening Ceremony' },
          silver: { type: 'text', text: 'Closing Slides' },
          community: { type: 'text', text: 'Community Slides' },
        },
      ],
    },
    // 2. Booth & Exhibition
    {
      category: 'booth',
      categoryName: 'Exhibition Stall & Venue Presence',
      icon: Layers,
      items: [
        {
          name: 'Physical Exhibition Space & Stall',
          desc: 'Dedicated physical footprint in the PRPCEM Engineering Exhibition Pavilion.',
          title: { type: 'highlight', text: 'Mega 20×10 ft (Foyer)' },
          platinum: { type: 'highlight', text: 'Prime 10×10 ft Booth' },
          gold: { type: 'highlight', text: 'Standard 8×8 ft Stall' },
          silver: { type: 'text', text: 'High-Top Demo Table' },
          community: { type: 'text', text: 'Shared Desk' },
        },
        {
          name: 'Dedicated Private Interview & Discussion Room',
          desc: 'Private quiet room on campus for 1-on-1 developer discussions and screening.',
          title: { type: 'check', text: 'Exclusive Room' },
          platinum: { type: 'check', text: 'Shared Lounge Access' },
          gold: { type: 'text', text: 'On-Demand Access' },
          silver: { type: 'none' },
          community: { type: 'none' },
        },
        {
          name: 'Product Tech Demo / Sandbox Station',
          desc: 'Interactive kiosk area for developers to test your APIs, SDKs, or cloud services.',
          title: { type: 'check', text: 'Custom Playground' },
          platinum: { type: 'check', text: 'Dedicated Station' },
          gold: { type: 'text', text: 'Booth-only Demo' },
          silver: { type: 'text', text: 'Booth-only Demo' },
          community: { type: 'none' },
        },
        {
          name: 'Roll-up Standee Banners on Campus',
          desc: 'Full-height branded standees positioned across high-traffic conference zones.',
          title: { type: 'highlight', text: 'Up to 6 Standees' },
          platinum: { type: 'highlight', text: 'Up to 4 Standees' },
          gold: { type: 'text', text: '2 Standees' },
          silver: { type: 'text', text: '1 Standee' },
          community: { type: 'text', text: 'Shared Banner' },
        },
        {
          name: 'High-Power Electrical & Wi-Fi LAN',
          desc: 'Dedicated electrical circuit, high-speed campus LAN/Wi-Fi, and monitor mounts.',
          title: { type: 'check', text: 'Dedicated Dual Line' },
          platinum: { type: 'check', text: 'Dedicated Line' },
          gold: { type: 'check', text: 'Standard Strip' },
          silver: { type: 'check', text: 'Standard Strip' },
          community: { type: 'text', text: 'Shared Power' },
        },
      ],
    },
    // 3. Tech Developers & Community
    {
      category: 'talent',
      categoryName: 'Tech Developers & Community Access',
      icon: Briefcase,
      items: [
        {
          name: 'Tech Developer Community Connect',
          desc: 'Direct networking channel with tech developers, engineers, and open-source coders.',
          title: { type: 'highlight', text: 'Full Network Connect' },
          platinum: { type: 'highlight', text: 'Developer Directory' },
          gold: { type: 'text', text: 'Community Channel' },
          silver: { type: 'text', text: 'Open Networking' },
          community: { type: 'none' },
        },
        {
          name: 'Developer Announcements & Career Listings',
          desc: 'Feature your developer opportunities and community announcements in the official conference bulletin.',
          title: { type: 'highlight', text: 'Unlimited Postings' },
          platinum: { type: 'highlight', text: 'Up to 6 Postings' },
          gold: { type: 'text', text: 'Up to 3 Postings' },
          silver: { type: 'text', text: '1 Posting' },
          community: { type: 'none' },
        },
        {
          name: 'Hackathon / Code Challenge Track Sponsor',
          desc: 'Opportunity to set a proprietary problem statement and reward hackathon winners.',
          title: { type: 'check', text: 'Exclusive Track' },
          platinum: { type: 'check', text: 'Category Sponsor' },
          gold: { type: 'text', text: 'Co-Sponsor' },
          silver: { type: 'none' },
          community: { type: 'none' },
        },
        {
          name: 'Swag Bag Inserts & Promotional Collateral',
          desc: 'Include physical flyers, company stickers, branded pens, or hardware in delegate kits.',
          title: { type: 'check', text: 'Custom Bag Item' },
          platinum: { type: 'check', text: 'Swag Bag Insert' },
          gold: { type: 'check', text: 'Swag Bag Insert' },
          silver: { type: 'text', text: 'Registration Table' },
          community: { type: 'text', text: 'Sticker Swap' },
        },
      ],
    },
    // 4. Digital & Branding
    {
      category: 'branding',
      categoryName: 'Branding, Digital Reach & Media',
      icon: Megaphone,
      items: [
        {
          name: 'Official Conference Website Logo',
          desc: 'Featured logo on dnc.mscprpcem.tech with backlink to your website or tech portal.',
          title: { type: 'highlight', text: 'Headline Hero' },
          platinum: { type: 'highlight', text: 'Large Platinum Tier' },
          gold: { type: 'text', text: 'Medium Gold Tier' },
          silver: { type: 'text', text: 'Silver Grid' },
          community: { type: 'text', text: 'Community Grid' },
        },
        {
          name: 'Social Media Dedicated Spotlights',
          desc: 'Custom-crafted announcement graphics and write-ups across LinkedIn, WhatsApp & YouTube.',
          title: { type: 'highlight', text: '6+ Posts + Video' },
          platinum: { type: 'highlight', text: '4 Dedicated Posts' },
          gold: { type: 'text', text: '2 Dedicated Posts' },
          silver: { type: 'text', text: '1 Group Post' },
          community: { type: 'text', text: '1 Shoutout' },
        },
        {
          name: 'Attendee ID Badges & Lanyards Branding',
          desc: 'Prominent branding on physical ID badges and neck lanyards worn by all 600+ delegates.',
          title: { type: 'highlight', text: 'Front & Center on All' },
          platinum: { type: 'highlight', text: 'Prominent on Back' },
          gold: { type: 'text', text: 'Logo on Badge Back' },
          silver: { type: 'none' },
          community: { type: 'none' },
        },
        {
          name: 'Main Stage Backdrop & LED Loops',
          desc: 'Logo projected on the grand stage LED screen and between session transition slides.',
          title: { type: 'check', text: 'Permanent Bug + Loop' },
          platinum: { type: 'check', text: 'High-Rotation Loop' },
          gold: { type: 'text', text: 'Intermission Loop' },
          silver: { type: 'text', text: 'Intermission Loop' },
          community: { type: 'text', text: 'Community Loop' },
        },
        {
          name: 'Live Stream Overlays & Recorded Talks',
          desc: 'Lower-third graphic overlays and video description links on recorded technical talks.',
          title: { type: 'check', text: 'Permanent Lower-Third' },
          platinum: { type: 'check', text: 'Intro/Outro Cards' },
          gold: { type: 'text', text: 'Description Link' },
          silver: { type: 'text', text: 'Credits Mention' },
          community: { type: 'text', text: 'Credits Mention' },
        },
        {
          name: 'Post-Conference Cinematic Recap Film',
          desc: 'Inclusion in the official cinematic recap film distributed across social channels.',
          title: { type: 'check', text: 'Opening Slate + Quote' },
          platinum: { type: 'check', text: 'Booth Spotlight' },
          gold: { type: 'text', text: 'Listed in Credits' },
          silver: { type: 'text', text: 'Listed in Credits' },
          community: { type: 'text', text: 'Listed in Credits' },
        },
      ],
    },
    // 5. Passes & VIP Perks
    {
      category: 'passes',
      categoryName: 'Passes, Hospitality & ROI Deliverables',
      icon: Ticket,
      items: [
        {
          name: 'VIP Delegate & All-Access Passes',
          desc: 'Full-day access to all keynote sessions, workshops, networking feasts, and conference kits.',
          title: { type: 'highlight', text: '10 VIP Passes' },
          platinum: { type: 'highlight', text: '6 VIP Passes' },
          gold: { type: 'highlight', text: '4 VIP Passes' },
          silver: { type: 'text', text: '2 VIP Passes' },
          community: { type: 'text', text: '2 Community Passes' },
        },
        {
          name: 'Speakers & Leadership Dinner Seats',
          desc: 'Exclusive private evening dinner with keynote speakers, Microsoft MVPs, and college leaders.',
          title: { type: 'highlight', text: '4 Dinner Invites' },
          platinum: { type: 'highlight', text: '2 Dinner Invites' },
          gold: { type: 'text', text: '1 Dinner Invite' },
          silver: { type: 'none' },
          community: { type: 'none' },
        },
        {
          name: 'Reserved Front-Row Seating',
          desc: 'Reserved front-row seating for your corporate delegation in the Main Auditorium.',
          title: { type: 'check', text: 'Front-Row Block' },
          platinum: { type: 'check', text: 'Reserved VIP Rows' },
          gold: { type: 'text', text: 'Priority Seating' },
          silver: { type: 'text', text: 'Open Seating' },
          community: { type: 'text', text: 'Open Seating' },
        },
        {
          name: 'Post-Conference ROI & Analytics Report',
          desc: 'Comprehensive post-event report including attendee demographics, booth footfall, and media reach.',
          title: { type: 'check', text: 'Full Analytics Report' },
          platinum: { type: 'check', text: 'Standard Report' },
          gold: { type: 'text', text: 'Executive Summary' },
          silver: { type: 'text', text: 'Attendance Summary' },
          community: { type: 'none' },
        },
      ],
    },
  ];

  // Specialty Add-ons
  const ADD_ONS = [
    {
      title: 'Official Badges & Lanyards Partner',
      price: '₹35,000',
      desc: 'Exclusive logo print on all 600+ physical satin lanyards and laminated attendee passes.',
      icon: Ticket,
      badge: 'High Visibility',
      badgeClass: 'bg-[#EDE9FE] text-[#512BD4]',
    },
    {
      title: 'Developer Lunch & Feast Sponsor',
      price: '₹50,000',
      desc: 'Branded dining hall banners, custom table standees, and meal token co-branding during lunch.',
      icon: Coffee,
      badge: 'High Engagement',
      badgeClass: 'bg-[#FEF3C7] text-[#92400E]',
    },
    {
      title: 'Hackathon & Code Sprint Challenge',
      price: '₹30,000',
      desc: 'Exclusive naming rights for the campus hackathon with proprietary API / SDK judging rights.',
      icon: Award,
      badge: 'Tech Developers',
      badgeClass: 'bg-emerald-50 text-emerald-800',
    },
    {
      title: 'Community Coffee & Barista Lounge',
      price: '₹25,000',
      desc: 'High-footfall branded coffee bar with custom cup sleeves and networking lounge signage.',
      icon: Sparkles,
      badge: 'Great Footfall',
      badgeClass: 'bg-pink-50 text-pink-800',
    },
    {
      title: 'Official T-Shirt & Swag Partner',
      price: '₹45,000',
      desc: 'Prominent sleeve or back logo on high-quality conference t-shirts given to attendees and staff.',
      icon: Briefcase,
      badge: 'Lasting Brand',
      badgeClass: 'bg-blue-50 text-blue-800',
    },
  ];

  // FAQs
  const FAQS = [
    {
      q: 'Can packages be customized to meet our specific company objectives?',
      a: 'Yes, absolutely! We understand every organization has unique goals — whether it is engaging tech developers, developer advocacy for an API/SDK, or corporate brand building. We are happy to tailor custom deliverables and combine add-on packages to fit your vision.',
    },
    {
      q: 'Who attends .NET Conf 2026 Amravati?',
      a: 'The summit brings together 600+ tech developers, engineers, AI practitioners, cloud architects, student coders from 15+ engineering campuses, and Microsoft community leaders.',
    },
    {
      q: 'How are payments processed, and can we receive a GST-compliant invoice?',
      a: 'Yes! All sponsorship contributions are received through P. R. Pote Patil College of Engineering and Management (PRPCEM) official institutional accounts with formal receipts, GST tax invoicing, and trust compliance documentation.',
    },
    {
      q: 'When is the deadline to confirm our sponsorship commitment?',
      a: 'To guarantee inclusion on printed conference collaterals (such as physical lanyards, stage backdrops, attendee kits, and t-shirts), sponsorship agreements should be confirmed at least 4 weeks prior to the event date (November 28, 2026). Digital-only packages can be onboarded up to 10 days before the conference.',
    },
    {
      q: 'What facilities are provided in the exhibition booth space?',
      a: 'Each exhibition booth includes standard electrical power connections (5A/15A), high-speed campus Wi-Fi access, display tables with tablecloths, chairs, and space for company standees. Dedicated AV monitors, custom backdrops, or high-draw power can be coordinated with our logistics committee.',
    },
    {
      q: 'How can our team connect with tech developers at the summit?',
      a: 'Sponsors have direct access to conference networking zones, booth tech demo spaces, hands-on workshop tracks, and community interaction channels to engage with tech developers and builders throughout the day.',
    },
  ];

  // Filtered benefits based on active tab
  const filteredCategories =
    activeCategory === 'all'
      ? BENEFITS_DATA
      : BENEFITS_DATA.filter((cat) => cat.category === activeCategory);

  // Helper to render table cell badges cleanly
  const renderCellContent = (data) => {
    if (!data || data.type === 'none') {
      return <span className="text-stone-300 font-mono font-bold select-none text-base">—</span>;
    }

    if (data.type === 'highlight') {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#120838] text-[#FFE89E] font-mono text-[11px] font-bold shadow-[1px_1px_0px_#000]">
          <Check className="w-3 h-3 text-[#FFE89E] stroke-[3]" />
          {data.text}
        </span>
      );
    }

    if (data.type === 'check') {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300 font-mono text-[11px] font-bold">
          <Check className="w-3 h-3 text-emerald-700 stroke-[3]" />
          {data.text}
        </span>
      );
    }

    // Default text badge
    return (
      <span className="inline-block px-1.5 py-0.5 rounded bg-stone-100 text-stone-700 font-mono text-[10.5px] font-medium border border-stone-300">
        {data.text}
      </span>
    );
  };

  return (
    <div className="dnc-fest-canvas min-h-screen text-[#120838] font-sans selection:bg-[#512BD4] selection:text-white">
      {/* 0. Paper Grain Overlay & Sprites */}
      <div className="grain-overlay" aria-hidden="true"></div>
      <DncWarliSprites />

      {/* 1. TOP BAR — Clean Back-to-Page Button (Navbar Removed as Requested) */}
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
              onClick={handleShare}
              className="btn btn--ghost btn--sm cursor-pointer"
              title="Share"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copiedLink ? 'Copied!' : 'Share'}</span>
            </button>

            <button
              type="button"
              onClick={() => scrollToInquiry()}
              className="btn btn--primary btn--sm cursor-pointer"
            >
              <span>Inquire for Sponsorship</span>
              <svg className="btn__arrow" width="14" height="14" aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN PROSPECTUS FLOW */}
      <main id="main">

        {/* HERO SECTION — Full Space & Proper Theme */}
        <section className="section band--gradient-space" id="overview" style={{ paddingTop: 'clamp(2.5rem, 5vw, 4rem)', paddingBottom: '3rem' }}>
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
            
            <div className="sechead sechead--split" style={{ alignItems: 'flex-start' }}>
              <div>
                <p className="eyebrow">Partnership Prospectus · Dec 26, 2026</p>
                <h1 className="h-sec">
                  Sponsor .NET Conf 2026<br />
                  <span style={{ color: 'var(--purple)' }}>Amravati Edition</span>
                </h1>
              </div>
              <p className="lede">
                Unite with Central India&apos;s largest Microsoft developer summit. Connect directly with <strong>600+ tech developers, engineers, AI builders, and cloud practitioners</strong> at PRPCEM Amravati on Saturday, December 26, 2026.
              </p>
            </div>

            {/* Quick CTAs Row */}
            <div className="flex flex-wrap items-center gap-3 mt-4 pt-2">
              <a href="#tiers" className="btn btn--primary btn--sm">
                <span>Explore 5 Sponsor Tiers</span>
                <svg className="btn__arrow" width="16" height="16" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </a>

              <a href="#matrix" className="btn btn--gold btn--sm">
                <span>View Full Deliverables Matrix</span>
                <svg className="btn__arrow" width="16" height="16" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </a>

              <button
                type="button"
                onClick={() => scrollToInquiry()}
                className="btn btn--ghost btn--sm cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#512BD4]" />
                <span>Contact Sponsorship Committee</span>
              </button>

              <div className="ml-auto hidden xl:flex items-center gap-4 text-xs font-mono text-stone-600">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#512BD4]" />
                  PRPCEM Kathora Road, Amravati
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#512BD4]" />
                  Microsoft Student Club PRPCEM
                </span>
              </div>
            </div>

            {/* Conference Key Impact Metrics Strip — Tech Developers & Ecosystem */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <div className="slot-card" style={{ minHeight: 'auto', padding: '1rem 1.25rem', width: '100%', justifyContent: 'flex-start' }}>
                <span className="font-mono text-3xl font-black text-[#512BD4]">600+</span>
                <div className="flex flex-col text-left">
                  <span className="font-sans font-bold text-xs uppercase tracking-wider text-[#120838]">Tech Developers</span>
                  <span className="font-mono text-[10px] text-stone-500">AI, Cloud &amp; Full-Stack Coders</span>
                </div>
              </div>

              <div className="slot-card" style={{ minHeight: 'auto', padding: '1rem 1.25rem', width: '100%', justifyContent: 'flex-start' }}>
                <span className="font-mono text-3xl font-black text-[#D97706]">15+</span>
                <div className="flex flex-col text-left">
                  <span className="font-sans font-bold text-xs uppercase tracking-wider text-[#120838]">Campuses &amp; Chapters</span>
                  <span className="font-mono text-[10px] text-stone-500">Vidarbha &amp; Central India</span>
                </div>
              </div>

              <div className="slot-card" style={{ minHeight: 'auto', padding: '1rem 1.25rem', width: '100%', justifyContent: 'flex-start' }}>
                <span className="font-mono text-3xl font-black text-[#059669]">50K+</span>
                <div className="flex flex-col text-left">
                  <span className="font-sans font-bold text-xs uppercase tracking-wider text-[#120838]">Community Reach</span>
                  <span className="font-mono text-[10px] text-stone-500">LinkedIn, WhatsApp &amp; YouTube</span>
                </div>
              </div>

              <div className="slot-card" style={{ minHeight: 'auto', padding: '1rem 1.25rem', width: '100%', justifyContent: 'flex-start' }}>
                <span className="font-mono text-3xl font-black text-[#E0199E]">4 Pillars</span>
                <div className="flex flex-col text-left">
                  <span className="font-sans font-bold text-xs uppercase tracking-wider text-[#120838]">Tech Ecosystem</span>
                  <span className="font-mono text-[10px] text-stone-500">AI, Cloud, DevOps &amp; .NET</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 3. TIER PACKAGES GRID — Full Space 5-Column Display */}
        <section className="section band--sun" id="tiers">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
            
            <div className="sechead sechead--split" style={{ alignItems: 'flex-start' }}>
              <div>
                <p className="eyebrow">Investment Packages · 2026 Edition</p>
                <h2 className="h-sec">5 Structured Sponsor Tiers</h2>
              </div>
              <p className="lede">
                Tailored for every tech leader: from headline naming rights for tech giants to high-impact booths for tooling companies and community desks.
              </p>
            </div>

            {/* 5-Column Grid utilizing full space */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-6">
              {TIERS.map((tier) => {
                const isSelected = highlightedTier === tier.id;
                return (
                  <div
                    key={tier.id}
                    className={`sticker sticker--hover flex flex-col justify-between overflow-hidden transition-all ${
                      isSelected ? 'ring-3 ring-[#512BD4]' : ''
                    } ${tier.theme.headerAccent}`}
                    style={{
                      background: '#FFFFFF',
                      padding: '1.25rem',
                      borderRadius: 'var(--r-md)',
                      borderColor: isSelected ? 'var(--purple)' : 'var(--border-light)',
                    }}
                  >
                    <div>
                      {/* Tier Badge & Slots */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded ${tier.theme.badgeBg} border border-black/30 shadow-[1px_1px_0px_#120838]`}>
                          <span className={`w-2 h-2 rounded-full ${tier.theme.dotBg}`}></span>
                          <span className={`font-mono text-[11px] font-black uppercase tracking-wider ${tier.theme.badgeText}`}>
                            {tier.name}
                          </span>
                        </div>
                        <span className="font-mono text-[10px] text-stone-500 font-bold">
                          {tier.slots}
                        </span>
                      </div>

                      {/* Pricing */}
                      <div className="mb-2">
                        <div className="font-mono text-2xl font-black text-[#120838] leading-tight">
                          {tier.investment}
                        </div>
                        <div className="font-mono text-xs text-stone-500 font-medium">
                          {tier.usd}
                        </div>
                      </div>

                      {/* Target Persona */}
                      <p className="font-sans text-xs text-stone-600 mb-3 pb-3 border-b border-stone-200 min-h-[38px] leading-snug">
                        <strong>For:</strong> {tier.targetAudience}
                      </p>

                      {/* Perk Bullet Points */}
                      <div className="space-y-2 mb-4">
                        {tier.perksSummary.map((perk, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-stone-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                            <span className="leading-tight">{perk}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card CTAs */}
                    <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setHighlightedTier(tier.id);
                          const el = document.getElementById('matrix');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full text-center py-1.5 rounded font-mono text-[11px] font-bold border border-black/30 bg-[#FAF8FF] hover:bg-[#EEEAFB] text-[#512BD4] transition-all cursor-pointer flex items-center justify-center gap-1"
                      >
                        <Eye className="w-3 h-3 text-[#512BD4]" />
                        <span>Compare in Matrix ↓</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => scrollToInquiry(tier.fullName)}
                        className={`w-full py-2 rounded font-mono text-xs font-black uppercase border border-black transition-all cursor-pointer shadow-[2px_2px_0px_#120838] hover:translate-x-[1px] hover:translate-y-[1px] ${
                          tier.isPopular
                            ? 'bg-[#512BD4] text-white hover:bg-[#4322B0]'
                            : 'bg-[#FFE89E] hover:bg-[#FFD13B] text-black'
                        }`}
                      >
                        Select {tier.name}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 4. THE COMPREHENSIVE DELIVERABLES MATRIX */}
        <section className="section band--paper2" id="matrix">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
            
            <div className="sechead sechead--split" style={{ alignItems: 'flex-start' }}>
              <div>
                <p className="eyebrow">Deliverables Matrix · 24 Benefits</p>
                <h2 className="h-sec">Tier vs. Benefits Comparison</h2>
              </div>
              <p className="lede">
                Full side-by-side verification: keynote time, workshop stages, physical booth sizes, developer reach, and delegate passes.
              </p>
            </div>

            {/* Filter Tabs & Column Highlighters */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mt-4 mb-4">
              
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-lg border border-black/30 shadow-[2px_2px_0px_#120838]">
                <button
                  type="button"
                  onClick={() => setActiveCategory('all')}
                  className={`px-3 py-1.5 rounded font-mono text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === 'all'
                      ? 'bg-[#512BD4] text-white shadow-[1px_1px_0px_#000]'
                      : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  ALL PERKS (24)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory('stage')}
                  className={`px-3 py-1.5 rounded font-mono text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === 'stage'
                      ? 'bg-[#512BD4] text-white shadow-[1px_1px_0px_#000]'
                      : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  STAGE (4)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory('booth')}
                  className={`px-3 py-1.5 rounded font-mono text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === 'booth'
                      ? 'bg-[#512BD4] text-white shadow-[1px_1px_0px_#000]'
                      : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  BOOTH (5)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory('talent')}
                  className={`px-3 py-1.5 rounded font-mono text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === 'talent'
                      ? 'bg-[#512BD4] text-white shadow-[1px_1px_0px_#000]'
                      : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  TECH DEVELOPERS (4)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory('branding')}
                  className={`px-3 py-1.5 rounded font-mono text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === 'branding'
                      ? 'bg-[#512BD4] text-white shadow-[1px_1px_0px_#000]'
                      : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  BRANDING (6)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory('passes')}
                  className={`px-3 py-1.5 rounded font-mono text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === 'passes'
                      ? 'bg-[#512BD4] text-white shadow-[1px_1px_0px_#000]'
                      : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  PASSES &amp; VIP (5)
                </button>
              </div>

              {/* Column Highlight Pills */}
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="font-mono text-xs text-stone-500 font-bold uppercase">
                  Trace Tier:
                </span>
                {TIERS.map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setHighlightedTier(highlightedTier === tier.id ? null : tier.id)}
                    className={`px-2.5 py-1 rounded font-mono text-xs font-bold border transition-all cursor-pointer ${
                      highlightedTier === tier.id
                        ? `${tier.theme.badgeBg} ${tier.theme.badgeText} border-black shadow-[2px_2px_0px_#120838]`
                        : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
                    }`}
                  >
                    {tier.name}
                  </button>
                ))}
                {highlightedTier && (
                  <button
                    type="button"
                    onClick={() => setHighlightedTier(null)}
                    className="font-mono text-xs text-stone-500 hover:text-black underline ml-2 cursor-pointer"
                  >
                    Reset
                  </button>
                )}
              </div>

            </div>

            {/* Matrix Table with Wide Layout & High Contrast */}
            <div className="sticker overflow-hidden" style={{ background: '#FFFFFF', padding: 0 }}>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[840px]">
                  <thead>
                    <tr className="bg-[#120838] text-white font-mono text-xs border-b-2 border-black">
                      <th className="p-4 w-[28%] font-black uppercase tracking-wider border-r border-white/20">
                        Deliverable &amp; Benefit Item
                      </th>

                      {/* Title Header */}
                      <th
                        onClick={() => setHighlightedTier('title')}
                        className={`p-3 text-center font-black uppercase tracking-wider border-r border-white/20 cursor-pointer transition-colors w-[14.4%] ${
                          highlightedTier === 'title' ? 'bg-[#D97706] text-white' : 'hover:bg-[#200E58]'
                        }`}
                      >
                        <div className="text-[10px] text-white/70">Headline</div>
                        TITLE
                        <div className="text-[11px] font-bold text-[#FFE89E]">₹2,00,000</div>
                      </th>

                      {/* Platinum Header */}
                      <th
                        onClick={() => setHighlightedTier('platinum')}
                        className={`p-3 text-center font-black uppercase tracking-wider border-r border-white/20 cursor-pointer transition-colors w-[14.4%] ${
                          highlightedTier === 'platinum' ? 'bg-[#512BD4] text-white' : 'hover:bg-[#200E58]'
                        }`}
                      >
                        <div className="text-[10px] text-white/70">★ Popular</div>
                        PLATINUM
                        <div className="text-[11px] font-bold text-white">₹1,25,000</div>
                      </th>

                      {/* Gold Header */}
                      <th
                        onClick={() => setHighlightedTier('gold')}
                        className={`p-3 text-center font-black uppercase tracking-wider border-r border-white/20 cursor-pointer transition-colors w-[14.4%] ${
                          highlightedTier === 'gold' ? 'bg-[#D97706] text-white' : 'hover:bg-[#200E58]'
                        }`}
                      >
                        <div className="text-[10px] text-white/70">Mid-Sized</div>
                        GOLD
                        <div className="text-[11px] font-bold text-white">₹75,000</div>
                      </th>

                      {/* Silver Header */}
                      <th
                        onClick={() => setHighlightedTier('silver')}
                        className={`p-3 text-center font-black uppercase tracking-wider border-r border-white/20 cursor-pointer transition-colors w-[14.4%] ${
                          highlightedTier === 'silver' ? 'bg-[#475569] text-white' : 'hover:bg-[#200E58]'
                        }`}
                      >
                        <div className="text-[10px] text-white/70">Startup</div>
                        SILVER
                        <div className="text-[11px] font-bold text-white">₹40,000</div>
                      </th>

                      {/* Community Header */}
                      <th
                        onClick={() => setHighlightedTier('community')}
                        className={`p-3 text-center font-black uppercase tracking-wider cursor-pointer transition-colors w-[14.4%] ${
                          highlightedTier === 'community' ? 'bg-[#0284C7] text-white' : 'hover:bg-[#200E58]'
                        }`}
                      >
                        <div className="text-[10px] text-white/70">Ecosystem</div>
                        COMMUNITY
                        <div className="text-[11px] font-bold text-white">In-Kind</div>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredCategories.map((group, groupIdx) => {
                      const CategoryIcon = group.icon;
                      return (
                        <React.Fragment key={groupIdx}>
                          {/* Category Header Row */}
                          <tr className="bg-[#120838] text-white border-y border-black">
                            <td colSpan={6} className="px-4 py-2 font-mono font-black text-xs uppercase tracking-wider">
                              <div className="flex items-center gap-2">
                                <CategoryIcon className="w-4 h-4 text-[#FFE89E]" />
                                <span>{group.categoryName}</span>
                                <span className="ml-auto text-[10px] text-white/60 font-normal">
                                  {group.items.length} deliverables
                                </span>
                              </div>
                            </td>
                          </tr>

                          {/* Items Rows */}
                          {group.items.map((item, itemIdx) => (
                            <tr
                              key={itemIdx}
                              className={`border-b border-stone-200 transition-colors ${
                                itemIdx % 2 === 0 ? 'bg-white' : 'bg-stone-50/60'
                              } hover:bg-[#FAF8FF]`}
                            >
                              {/* Benefit Title & Description */}
                              <td className="p-3 sm:p-3.5 border-r border-stone-200">
                                <div className="font-sans font-bold text-xs sm:text-sm text-[#120838]">
                                  {item.name}
                                </div>
                                <div className="font-sans text-[11px] text-stone-500 leading-tight mt-0.5">
                                  {item.desc}
                                </div>
                              </td>

                              {/* Title Column */}
                              <td className={`p-2.5 text-center border-r border-stone-200 transition-colors ${
                                highlightedTier === 'title' ? 'bg-amber-50/80 font-bold' : ''
                              }`}>
                                {renderCellContent(item.title)}
                              </td>

                              {/* Platinum Column */}
                              <td className={`p-2.5 text-center border-r border-stone-200 transition-colors ${
                                highlightedTier === 'platinum' ? 'bg-purple-50/80 font-bold' : ''
                              }`}>
                                {renderCellContent(item.platinum)}
                              </td>

                              {/* Gold Column */}
                              <td className={`p-2.5 text-center border-r border-stone-200 transition-colors ${
                                highlightedTier === 'gold' ? 'bg-amber-50/60 font-bold' : ''
                              }`}>
                                {renderCellContent(item.gold)}
                              </td>

                              {/* Silver Column */}
                              <td className={`p-2.5 text-center border-r border-stone-200 transition-colors ${
                                highlightedTier === 'silver' ? 'bg-slate-100/70 font-bold' : ''
                              }`}>
                                {renderCellContent(item.silver)}
                              </td>

                              {/* Community Column */}
                              <td className={`p-2.5 text-center transition-colors ${
                                highlightedTier === 'community' ? 'bg-sky-50/80 font-bold' : ''
                              }`}>
                                {renderCellContent(item.community)}
                              </td>
                            </tr>
                          ))}
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Matrix Table Footer */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-stone-600">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span>All packages include PRPCEM campus logistics, power, Wi-Fi &amp; volunteer check-in support.</span>
              </span>
              <button
                type="button"
                onClick={() => scrollToInquiry()}
                className="font-bold text-[#512BD4] hover:underline cursor-pointer"
              >
                Need custom multi-track allocations? Contact us →
              </button>
            </div>

          </div>
        </section>

        {/* 5. SPECIALTY ADD-ON PACKAGES */}
        <section className="section band--sun" id="addons">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
            
            <div className="sechead sechead--split" style={{ alignItems: 'flex-start' }}>
              <div>
                <p className="eyebrow">High Visibility Add-Ons</p>
                <h2 className="h-sec">Specialty Brand Activations</h2>
              </div>
              <p className="lede">
                Standalone high-impact branding assets or power-ups to combine with any existing sponsorship tier.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-6">
              {ADD_ONS.map((addon, idx) => {
                const IconComp = addon.icon;
                return (
                  <div
                    key={idx}
                    className="sticker sticker--hover flex flex-col justify-between"
                    style={{ background: '#FFFFFF', padding: '1.25rem' }}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded border border-black flex items-center justify-center bg-[#FAF8FF] shadow-[2px_2px_0px_#120838]">
                          <IconComp className="w-4 h-4 text-[#512BD4] stroke-[2.5]" />
                        </div>
                        <span className="font-mono font-black text-base text-[#120838] bg-[#FFE89E] px-2 py-0.5 rounded border border-black/40">
                          {addon.price}
                        </span>
                      </div>

                      <span className={`inline-block px-2 py-0.5 rounded font-mono text-[10px] font-bold uppercase tracking-wider mb-2 border border-black/20 ${addon.badgeClass}`}>
                        {addon.badge}
                      </span>

                      <h3 className="font-sans font-black text-sm text-[#120838] mb-1 leading-snug">
                        {addon.title}
                      </h3>
                      <p className="font-sans text-xs text-stone-600 leading-relaxed mb-4">
                        {addon.desc}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedTier(`Add-On: ${addon.title} (${addon.price})`);
                        setInquiryNotes(`Interested in the "${addon.title}" specialty package (${addon.price}).`);
                        scrollToInquiry();
                      }}
                      className="w-full text-center py-1.5 rounded font-mono font-black text-[11px] uppercase border border-black bg-[#FAF8FF] hover:bg-[#512BD4] hover:text-white transition-all shadow-[1px_1px_0px_#120838] cursor-pointer"
                    >
                      Inquire for this Add-On →
                    </button>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 6. SPONSORSHIP INQUIRY FORM & CONTACT DESK */}
        <section className="section band--paper2" id="inquire-form">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Form Card (7 Cols) */}
              <div className="lg:col-span-7 sticker" style={{ background: '#FFFFFF', padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                <p className="eyebrow" style={{ marginBottom: '.5rem' }}>Direct Sponsorship Inquiry</p>
                <h2 className="h-sub" style={{ fontSize: '1.6rem', marginBottom: '.5rem' }}>
                  Connect with the Sponsorship Desk
                </h2>
                <p className="font-sans text-xs sm:text-sm text-stone-600 mb-6">
                  Fill in your details below to draft a direct inquiry email with our college conveners and Microsoft Student Club PRPCEM team.
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
                        className="w-full bg-[#FAF8F5] border-2 border-black rounded-lg px-3.5 py-2.5 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#512BD4]"
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
                        className="w-full bg-[#FAF8F5] border-2 border-black rounded-lg px-3.5 py-2.5 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#512BD4]"
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
                        placeholder="rahul@company.com"
                        className="w-full bg-[#FAF8F5] border-2 border-black rounded-lg px-3.5 py-2.5 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#512BD4]"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs font-bold uppercase text-stone-700 mb-1.5">
                        Selected Package / Tier
                      </label>
                      <select
                        value={selectedTier}
                        onChange={(e) => setSelectedTier(e.target.value)}
                        className="w-full bg-[#FAF8F5] border-2 border-black rounded-lg px-3.5 py-2.5 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#512BD4]"
                      >
                        <option value="TITLE SPONSOR (₹2,00,000)">TITLE SPONSOR (₹2,00,000)</option>
                        <option value="PLATINUM SPONSOR (₹1,25,000)">PLATINUM SPONSOR (₹1,25,000)</option>
                        <option value="GOLD SPONSOR (₹75,000)">GOLD SPONSOR (₹75,000)</option>
                        <option value="SILVER SPONSOR (₹40,000)">SILVER SPONSOR (₹40,000)</option>
                        <option value="Specialty Add-on / Custom Package">Specialty Add-on / Custom Package</option>
                        <option value="Community & Ecosystem Partner">Community &amp; Ecosystem Partner</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-bold uppercase text-stone-700 mb-1.5">
                      Requirements, Developer Goals, or Tech Booth Needs
                    </label>
                    <textarea
                      rows={3}
                      value={inquiryNotes}
                      onChange={(e) => setInquiryNotes(e.target.value)}
                      placeholder="Tell us about your developer goals, expected booth footprint, or presentation topics..."
                      className="w-full bg-[#FAF8F5] border-2 border-black rounded-lg p-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#512BD4]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn--primary cursor-pointer w-full"
                    style={{ justifyContent: 'center' }}
                  >
                    <span>Draft Inquiry Email Now</span>
                    <svg className="btn__arrow" width="16" height="16" aria-hidden="true">
                      <use href="#i-arrow" />
                    </svg>
                  </button>
                </form>
              </div>

              {/* Committee Contact Desk (5 Cols) */}
              <div className="lg:col-span-5 space-y-4">
                
                <div className="sticker" style={{ background: '#FFE89E', padding: '1.75rem', borderColor: '#120838' }}>
                  <p className="eyebrow" style={{ color: '#120838', marginBottom: '.35rem' }}>
                    Institutional Host
                  </p>
                  <h3 className="font-sans font-black text-xl uppercase text-[#120838] mb-1">
                    Sponsorship Committee
                  </h3>
                  <p className="font-sans text-xs text-stone-800 mb-4">
                    Direct channel with faculty coordinators and student leads at PRPCEM Amravati:
                  </p>

                  <div className="space-y-3 font-sans text-xs">
                    <div className="flex items-start gap-2.5 bg-white/85 p-3 rounded-lg border border-black/40">
                      <Mail className="w-4 h-4 text-[#512BD4] shrink-0 mt-0.5" />
                      <div className="flex-1 overflow-hidden">
                        <div className="font-bold text-[#120838]">Official Email</div>
                        <div className="font-mono text-[11px] text-stone-700 truncate select-all">
                          dotnetconfamt@prpotepatilengg.ac.in
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="p-1 hover:bg-stone-200 rounded border border-black/30 transition-all cursor-pointer"
                        title="Copy email to clipboard"
                      >
                        {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5 text-stone-700" />}
                      </button>
                    </div>

                    <div className="flex items-start gap-2.5 bg-white/85 p-3 rounded-lg border border-black/40">
                      <Building2 className="w-4 h-4 text-[#512BD4] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#120838]">Campus Venue</div>
                        <div className="text-stone-700">
                          P. R. Pote Patil College of Engineering and Management, Kathora Road, Amravati 444602
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 bg-white/85 p-3 rounded-lg border border-black/40">
                      <Users className="w-4 h-4 text-[#512BD4] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#120838]">Student Leadership Chapter</div>
                        <div className="text-stone-700">
                          Microsoft Student Club (MSC) PRPCEM
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-black/20 flex items-center justify-between">
                    <a
                      href="https://chat.whatsapp.com/EPFRDsWd057DBqYS5bpK67"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-black text-[#120838] hover:underline"
                    >
                      <span>Connect on WhatsApp</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <a
                      href="https://www.mscprpcem.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-black text-[#512BD4] hover:underline"
                    >
                      <span>mscprpcem.tech</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* PDF Deck Request Card */}
                <div className="sticker flex items-center justify-between gap-4" style={{ background: '#FFFFFF', padding: '1.25rem' }}>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-[#120838]">
                      Need the Printable PDF Deck?
                    </h4>
                    <p className="font-sans text-xs text-stone-600">
                      Includes campus floor map, past edition stats, and MoU forms.
                    </p>
                  </div>
                  <a
                    href="mailto:dotnetconfamt@prpotepatilengg.ac.in?subject=Request%20PDF%20Sponsorship%20Deck%20-%20.NET%20Conf%202026"
                    className="btn btn--primary btn--sm cursor-pointer shrink-0"
                    title="Request PDF Deck"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </a>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* 7. SPONSORSHIP FAQ ACCORDION */}
        <section className="section band--sun" id="faq">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
            
            <div className="sechead sechead--split" style={{ alignItems: 'flex-start' }}>
              <div>
                <p className="eyebrow">Frequently Asked Questions</p>
                <h2 className="h-sec">Sponsorship FAQ</h2>
              </div>
              <p className="lede">
                Essential details regarding institutional invoicing, GST compliance, logistics, and tech booth setup.
              </p>
            </div>

            <div className="space-y-3 mt-6">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="sticker overflow-hidden transition-all"
                    style={{ background: '#FFFFFF', padding: 0 }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-sans font-bold text-sm sm:text-base text-[#120838] hover:bg-stone-50 cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <span className="ml-4 shrink-0 p-1 rounded border border-black/30 bg-[#FAF8F5]">
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

          </div>
        </section>

      </main>

      {/* 8. OFFICIAL CONFERENCE FOOTER */}
      <DncFooter />
    </div>
  );
};

export default SponsorshipPage;
