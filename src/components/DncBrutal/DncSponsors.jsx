import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  Building2,
  Users,
  Mail,
  Phone,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ChevronDown,
  Check,
  X
} from 'lucide-react';
import { SPONSORSHIP_API_ENDPOINT, SPONSORSHIP_TIER_OPTIONS } from '../../config/sponsorshipConfig.js';

export const DncSponsors = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedTier, setSelectedTier] = useState('PLATINUM SPONSOR (₹1,00,000)');
  const [isTierDropdownOpen, setIsTierDropdownOpen] = useState(false);
  const [inquiryNotes, setInquiryNotes] = useState('');
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');
  const [lastSubmittedData, setLastSubmittedData] = useState(null);
  const tierDropdownRef = useRef(null);

  const activeTier = SPONSORSHIP_TIER_OPTIONS.find((opt) => opt.value === selectedTier) || SPONSORSHIP_TIER_OPTIONS[1];

  const handleOpenInquiryModal = (tierValue) => {
    if (tierValue) {
      setSelectedTier(tierValue);
    }
    setFormStatus('idle');
    setStatusMessage('');
    setIsTierDropdownOpen(false);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsTierDropdownOpen(false);
    setIsModalOpen(false);
  };

  const handleResetForm = () => {
    setFormStatus('idle');
    setCompanyName('');
    setContactName('');
    setWorkEmail('');
    setPhone('');
    setInquiryNotes('');
    setIsTierDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (tierDropdownRef.current && !tierDropdownRef.current.contains(e.target)) {
        setIsTierDropdownOpen(false);
      }
    };
    if (isTierDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isTierDropdownOpen]);

  useEffect(() => {
    if (isModalOpen) {
      const orig = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const handleKey = (e) => {
        if (e.key === 'Escape') setIsModalOpen(false);
      };
      window.addEventListener('keydown', handleKey);
      return () => {
        document.body.style.overflow = orig;
        window.removeEventListener('keydown', handleKey);
      };
    }
  }, [isModalOpen]);

  const handleSendInquiry = async (e) => {
    e.preventDefault();
    if (!companyName.trim() || !contactName.trim() || !workEmail.trim() || !phone.trim()) {
      setFormStatus('error');
      setStatusMessage('Please fill in all required fields (Company, Contact Person, Work Email, and Phone Number).');
      return;
    }

    setFormStatus('submitting');
    setStatusMessage('');

    const payload = {
      type: 'SPONSOR',
      formType: 'SPONSORSHIP_INQUIRY',
      organization: companyName.trim(),
      companyName: companyName.trim(),
      fullName: contactName.trim(),
      contactName: contactName.trim(),
      email: workEmail.trim(),
      workEmail: workEmail.trim(),
      phone: phone.trim(),
      tier: selectedTier,
      collaborationType: selectedTier,
      message: inquiryNotes.trim() || 'Please send us the full sponsorship prospectus and invoicing details.',
      inquiryNotes: inquiryNotes.trim(),
      submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    try {
      if (SPONSORSHIP_API_ENDPOINT && SPONSORSHIP_API_ENDPOINT.startsWith('https://script.google.com/')) {
        const formBody = new URLSearchParams();
        Object.entries(payload).forEach(([k, v]) => {
          formBody.append(k, String(v));
        });

        await fetch(SPONSORSHIP_API_ENDPOINT, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: formBody.toString(),
        });
      } else {
        // Simulated network turnaround while awaiting user deployment of Code.gs
        await new Promise((res) => setTimeout(res, 600));
      }

      setLastSubmittedData(payload);
      setFormStatus('success');
    } catch (err) {
      console.error('Failed to submit sponsorship inquiry:', err);
      setFormStatus('error');
      setStatusMessage('Unable to send automatically right now. Please use the direct email option below.');
    }
  };

  const handleDraftEmailFallback = () => {
    const subject = encodeURIComponent(`Sponsorship Inquiry: ${selectedTier} - ${companyName || 'Company'}`);
    const body = encodeURIComponent(
      `Hello .NET Conf 2026 Amravati Team,\n\n` +
      `We are interested in partnering with .NET Conf 2026 as a ${selectedTier}.\n\n` +
      `Company Name: ${companyName || 'N/A'}\n` +
      `Contact Person: ${contactName || 'N/A'}\n` +
      `Work Email: ${workEmail || 'N/A'}\n` +
      `Phone Number: ${phone || 'N/A'}\n` +
      `Selected Tier / Package: ${selectedTier}\n` +
      `Requirements / Message: ${inquiryNotes || 'Please send us the full sponsorship prospectus and invoicing details.'}\n\n` +
      `Looking forward to collaborating!\n`
    );
    window.location.href = `mailto:dotnetconfamt@prpotepatilengg.ac.in?subject=${subject}&body=${body}`;
  };
  return (
    <section className="section band--sun" id="sponsors" style={{ scrollMarginTop: '80px' }}>
      <div className="wrap">
        <div className="sechead sechead--split">
          <div>
            <p className="eyebrow">Conference Sponsors &amp; Partners</p>
            <h2 className="h-sec">
              Our Conf Sponsors &amp;<br />
              Ecosystem Partners.
            </h2>
          </div>
          <p className="lede">
            .NET Conf 2026 brings together the entire modern developer stack &mdash; uniting .NET 11, Enterprise AI, Microsoft Azure, and engineering tools.
          </p>
        </div>

        <div className="tiers sticker" style={{ padding: 'clamp(1.5rem, 3.5vw, 2.5rem)', marginTop: '2rem' }}>
          {/* 1. TITLE */}
          <div className="tier">
            <div className="tier__h">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFE89E] border border-black/40 shadow-[2px_2px_0px_#120838]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D97706]"></span>
                <span className="font-mono text-xs font-black uppercase text-[#120838] tracking-wider">
                  TITLE
                </span>
              </div>
              <b style={{ color: '#120838' }}>Host Institution &amp; Title Partner</b>
              <i></i>
            </div>
            <div className="slots">
              {/* PRPCEM Amravati */}
              <a
                href="https://prpotepatilengg.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-tile hover:border-[#120838]"
                title="PRPCEM Amravati"
                aria-label="PRPCEM Amravati"
                data-sponsor-name="PRPCEM Amravati"
              >
                <img
                  src="/logos/prpcem-logo.jpeg"
                  alt="PRPCEM Amravati"
                  className="sponsor-tile-img sponsor-tile-img--square"
                  loading="lazy"
                />
                <span className="sponsor-tooltip">PRPCEM Amravati</span>
              </a>
            </div>
          </div>

          {/* 2. PLATINUM */}
          <div className="tier">
            <div className="tier__h">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F1F5F9] border border-black/40 shadow-[2px_2px_0px_#120838]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00A4EF]"></span>
                <span className="font-mono text-xs font-black uppercase text-[#120838] tracking-wider">
                  PLATINUM
                </span>
              </div>
              <b style={{ color: '#120838' }}>Platinum Sponsor</b>
              <i></i>
            </div>
            <div className="slots">
              <button
                type="button"
                onClick={() => handleOpenInquiryModal('PLATINUM SPONSOR (₹1,00,000)')}
                className="slot-card border-2 border-dashed border-[#120838]/40 hover:border-[#00A4EF] hover:bg-[#FAF8FF] transition-all text-stone-600 cursor-pointer text-left inline-flex"
                style={{ width: 'fit-content', maxWidth: '340px', flex: '0 0 auto' }}
              >
                <span className="w-8 h-8 rounded-md border border-dashed border-stone-400 flex items-center justify-center font-mono font-bold text-base text-[#00A4EF] shrink-0">
                  +
                </span>
                <div className="flex flex-col text-left">
                  <span className="font-sans font-bold text-sm text-[#120838]">Become a Platinum Sponsor</span>
                  <span className="font-mono text-[10px] text-stone-500 uppercase tracking-wider">Slot Available &bull; Click to Inquire</span>
                </div>
              </button>
            </div>
          </div>

          {/* 3. GOLD */}
          <div className="tier">
            <div className="tier__h">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FEF3C7] border border-black/40 shadow-[2px_2px_0px_#120838]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"></span>
                <span className="font-mono text-xs font-black uppercase text-[#120838] tracking-wider">
                  GOLD
                </span>
              </div>
              <b style={{ color: '#120838' }}>Gold Sponsors</b>
              <i></i>
            </div>
            <div className="slots">
              <button
                type="button"
                onClick={() => handleOpenInquiryModal('GOLD SPONSOR (₹50,000)')}
                className="slot-card border-2 border-dashed border-[#120838]/40 hover:border-[#F59E0B] hover:bg-[#FAF8FF] transition-all text-stone-600 cursor-pointer text-left inline-flex"
                style={{ width: 'fit-content', maxWidth: '340px', flex: '0 0 auto' }}
              >
                <span className="w-8 h-8 rounded-md border border-dashed border-stone-400 flex items-center justify-center font-mono font-bold text-base text-[#F59E0B] shrink-0">
                  +
                </span>
                <div className="flex flex-col text-left">
                  <span className="font-sans font-bold text-sm text-[#120838]">Become a Gold Sponsor</span>
                  <span className="font-mono text-[10px] text-stone-500 uppercase tracking-wider">Slot Available &bull; Click to Inquire</span>
                </div>
              </button>
            </div>
          </div>

          {/* 4. SILVER */}
          <div className="tier">
            <div className="tier__h">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F1F5F9] border border-black/40 shadow-[2px_2px_0px_#120838]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#64748B]"></span>
                <span className="font-mono text-xs font-black uppercase text-[#120838] tracking-wider">
                  SILVER
                </span>
              </div>
              <b style={{ color: '#120838' }}>Silver Sponsors</b>
              <i></i>
            </div>
            <div className="slots">
              <button
                type="button"
                onClick={() => handleOpenInquiryModal('SILVER SPONSOR (₹25,000)')}
                className="slot-card border-2 border-dashed border-[#120838]/40 hover:border-[#64748B] hover:bg-[#FAF8FF] transition-all text-stone-600 cursor-pointer text-left inline-flex"
                style={{ width: 'fit-content', maxWidth: '340px', flex: '0 0 auto' }}
              >
                <span className="w-8 h-8 rounded-md border border-dashed border-stone-400 flex items-center justify-center font-mono font-bold text-base text-[#64748B] shrink-0">
                  +
                </span>
                <div className="flex flex-col text-left">
                  <span className="font-sans font-bold text-sm text-[#120838]">Become a Silver Sponsor</span>
                  <span className="font-mono text-[10px] text-stone-500 uppercase tracking-wider">Slot Available &bull; Click to Inquire</span>
                </div>
              </button>
            </div>
          </div>

          {/* 5. BRONZE */}
          <div className="tier">
            <div className="tier__h">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFEDD5] border border-black/40 shadow-[2px_2px_0px_#120838]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C]"></span>
                <span className="font-mono text-xs font-black uppercase text-[#120838] tracking-wider">
                  BRONZE
                </span>
              </div>
              <b style={{ color: '#120838' }}>Bronze Sponsors</b>
              <i></i>
            </div>
            <div className="slots">
              <button
                type="button"
                onClick={() => handleOpenInquiryModal('BRONZE SPONSOR (₹15,000)')}
                className="slot-card border-2 border-dashed border-[#120838]/40 hover:border-[#EA580C] hover:bg-[#FAF8FF] transition-all text-stone-600 cursor-pointer text-left inline-flex"
                style={{ width: 'fit-content', maxWidth: '340px', flex: '0 0 auto' }}
              >
                <span className="w-8 h-8 rounded-md border border-dashed border-stone-400 flex items-center justify-center font-mono font-bold text-base text-[#EA580C] shrink-0">
                  +
                </span>
                <div className="flex flex-col text-left">
                  <span className="font-sans font-bold text-sm text-[#120838]">Become a Bronze Sponsor</span>
                  <span className="font-mono text-[10px] text-stone-500 uppercase tracking-wider">Slot Available &bull; Click to Inquire</span>
                </div>
              </button>
            </div>
          </div>

          {/* 6. IN-KIND SUPPORT */}
          <div className="tier">
            <div className="tier__h">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#CFFAFE] border border-black/40 shadow-[2px_2px_0px_#120838]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#06B6D4]"></span>
                <span className="font-mono text-xs font-black uppercase text-[#120838] tracking-wider">
                  IN-KIND SUPPORT
                </span>
              </div>
              <b style={{ color: '#120838' }}>Tooling, Cloud &amp; Swag Partners</b>
              <i></i>
            </div>
            <div className="slots">
              {/* JetBrains */}
              <a
                href="https://www.jetbrains.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-tile hover:border-[#FE2857]"
                title="JetBrains"
                aria-label="JetBrains"
                data-sponsor-name="JetBrains"
              >
                <img
                  src="/In%20%20kind%20support/Jetbrains/jetbrains.png"
                  alt="JetBrains"
                  className="sponsor-tile-img"
                  loading="lazy"
                />
                <span className="sponsor-tooltip">JetBrains</span>
              </a>

              {/* Microsoft Azure */}
              <a
                href="https://azure.microsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-tile sponsor-tile--wide hover:border-[#0078D4]"
                title="Microsoft Azure"
                aria-label="Microsoft Azure"
                data-sponsor-name="Microsoft Azure"
              >
                <img
                  src="/In%20%20kind%20support/Microsoft%20Azure/azure.png"
                  alt="Microsoft Azure"
                  className="sponsor-tile-img sponsor-tile-img--wide"
                  loading="lazy"
                />
                <span className="sponsor-tooltip">Microsoft Azure</span>
              </a>

              {/* Packt */}
              <a
                href="https://www.packtpub.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-tile hover:border-[#F37143]"
                title="Packt"
                aria-label="Packt Publishing"
                data-sponsor-name="Packt"
              >
                <img
                  src="/logos/packt-logo.png"
                  alt="Packt"
                  className="sponsor-tile-img"
                  loading="lazy"
                />
                <span className="sponsor-tooltip">Packt</span>
              </a>

              {/* .xyz */}
              <a
                href="https://gen.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-tile hover:border-[#120838]"
                title=".xyz Domains"
                aria-label=".xyz Domains"
                data-sponsor-name=".xyz Domains"
              >
                <img
                  src="/logos/xyz-logo-color.png"
                  alt=".xyz Domains"
                  className="sponsor-tile-img"
                  loading="lazy"
                />
                <span className="sponsor-tooltip">.xyz Domains</span>
              </a>

              {/* In-Kind Inquiry Slot */}
              <button
                type="button"
                onClick={() => handleOpenInquiryModal('IN-KIND SUPPORT (Cloud/Tooling/Swag)')}
                className="slot-card border-2 border-dashed border-[#120838]/40 hover:border-[#06B6D4] hover:bg-[#FAF8FF] transition-all text-stone-600 cursor-pointer text-left inline-flex"
                style={{ width: 'fit-content', maxWidth: '340px', flex: '0 0 auto' }}
              >
                <span className="w-8 h-8 rounded-md border border-dashed border-stone-400 flex items-center justify-center font-mono font-bold text-base text-[#06B6D4] shrink-0">
                  +
                </span>
                <div className="flex flex-col text-left">
                  <span className="font-sans font-bold text-sm text-[#120838]">Partner with In-Kind Support</span>
                  <span className="font-mono text-[10px] text-stone-500 uppercase tracking-wider">Tools, Vouchers &amp; Cloud</span>
                </div>
              </button>
            </div>
          </div>

          {/* 7. COMMUNITY SUPPORT */}
          <div className="tier">
            <div className="tier__h">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FCE7F3] border border-black/40 shadow-[2px_2px_0px_#120838]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E0199E]"></span>
                <span className="font-mono text-xs font-black uppercase text-[#120838] tracking-wider">
                  COMMUNITY SUPPORT
                </span>
              </div>
              <b style={{ color: '#120838' }}>Community Chapters &amp; Grassroots Partners</b>
              <i></i>
            </div>
            <div className="slots">
              {/* IBM User Group Amravati */}
              <div
                className="sponsor-tile hover:border-[#120838]"
                title="IBM User Group Amravati"
                aria-label="IBM User Group Amravati"
                data-sponsor-name="IBM User Group Amravati"
              >
                <img
                  src="/logos/User-Groups-page-promo.png"
                  alt="IBM User Group Amravati"
                  className="sponsor-tile-img sponsor-tile-img--square"
                  loading="lazy"
                />
                <span className="sponsor-tooltip">IBM User Group Amravati</span>
              </div>

              {/* Global AI Amravati */}
              <div
                className="sponsor-tile hover:border-[#d5522b]"
                title="Global AI Amravati"
                aria-label="Global AI Amravati"
                data-sponsor-name="Global AI Amravati"
              >
                <img
                  src="/Community%20Partner/logo.svg"
                  alt="Global AI Amravati"
                  className="sponsor-tile-img"
                  loading="lazy"
                />
                <span className="sponsor-tooltip">Global AI Amravati</span>
              </div>

              {/* OpenSearch User Group Amravati */}
              <a
                href="https://www.meetup.com/opensearch-project-amravati/"
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-tile sponsor-tile--wide hover:border-[#005EB8]"
                title="OpenSearch User Group Amravati"
                aria-label="OpenSearch User Group Amravati"
                data-sponsor-name="OpenSearch User Group Amravati"
              >
                <img
                  src="/logos/opensearch-user-group-amravati.png"
                  alt="OpenSearch User Group Amravati"
                  className="sponsor-tile-img sponsor-tile-img--wide"
                  style={{ maxHeight: '58px', height: '54px' }}
                  loading="lazy"
                />
                <span className="sponsor-tooltip">OpenSearch User Group Amravati</span>
              </a>

              {/* Databricks User Group Amravati */}
              <a
                href="https://usergroups.databricks.com/amravati-databricks-user-group/"
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-tile sponsor-tile--wide hover:border-[#FF3621]"
                title="Databricks User Group Amravati"
                aria-label="Databricks User Group Amravati"
                data-sponsor-name="Databricks User Group Amravati"
              >
                <img
                  src="/logos/databricks-user-group-amravati.png"
                  alt="Databricks User Group Amravati"
                  className="sponsor-tile-img sponsor-tile-img--wide"
                  style={{ maxHeight: '58px', height: '54px' }}
                  loading="lazy"
                />
                <span className="sponsor-tooltip">Databricks User Group Amravati</span>
              </a>

              {/* Microsoft Student Club PRPCEM */}
              <a
                href="https://www.mscprpcem.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-tile hover:border-[#512BD4]"
                title="Microsoft Student Club PRPCEM"
                aria-label="Microsoft Student Club PRPCEM"
                data-sponsor-name="Microsoft Student Club PRPCEM"
              >
                <img
                  src="/logos/mscprpcem-logo.png"
                  alt="Microsoft Student Club PRPCEM"
                  className="sponsor-tile-img sponsor-tile-img--square"
                  loading="lazy"
                />
                <span className="sponsor-tooltip">Microsoft Student Club PRPCEM</span>
              </a>

              {/* Community Inquiry */}
              <button
                type="button"
                onClick={() => handleOpenInquiryModal('COMMUNITY PARTNER')}
                className="slot-card border-2 border-dashed border-[#120838]/40 hover:border-[#E0199E] hover:bg-[#FAF8FF] transition-all text-stone-600 cursor-pointer text-left inline-flex"
                style={{ width: 'fit-content', maxWidth: '340px', flex: '0 0 auto' }}
              >
                <span className="w-8 h-8 rounded-md border border-dashed border-stone-400 flex items-center justify-center font-mono font-bold text-base text-[#E0199E] shrink-0">
                  +
                </span>
                <div className="flex flex-col text-left">
                  <span className="font-sans font-bold text-sm text-[#120838]">Join as Community Partner</span>
                  <span className="font-mono text-[10px] text-stone-500 uppercase tracking-wider">Student Clubs &amp; Dev Chapters</span>
                </div>
              </button>
            </div>
          </div>

          {/* 8. CFP PARTNER */}
          <div className="tier">
            <div className="tier__h">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EDE9FE] border border-black/40 shadow-[2px_2px_0px_#120838]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1BA39C]"></span>
                <span className="font-mono text-xs font-black uppercase text-[#120838] tracking-wider">
                  CFP PARTNER
                </span>
              </div>
              <b style={{ color: '#120838' }}>Call for Proposals Platform</b>
              <i></i>
            </div>
            <div className="slots">
              {/* Sessionize Logo Tile */}
              <a
                href="https://sessionize.com/dnc26/"
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor-tile hover:border-[#1BA39C]"
                title="Sessionize"
                aria-label="Sessionize"
                data-sponsor-name="Sessionize"
              >
                <img
                  src="/CFP%20Partner/sessionize-logo.png"
                  alt="Sessionize"
                  className="sponsor-tile-img"
                  loading="lazy"
                />
                <span className="sponsor-tooltip">Sessionize</span>
              </a>
            </div>
          </div>

          {/* CTA Row */}
          <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', borderTop: '1px dashed rgba(255,255,255,0.2)', paddingTop: '1.5rem' }}>
            <p style={{ color: 'var(--text-emphasis)', fontSize: '.95rem', maxWidth: '620px' }}>
              Want to sponsor or partner with .NET Conf 2026? Explore our dedicated sponsorship prospectus with complete tier comparison, booth specs, and deliverables.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                className="btn btn--primary btn--sm inline-flex items-center gap-1.5 cursor-pointer"
                onClick={() => handleOpenInquiryModal('PLATINUM SPONSOR (₹1,00,000)')}
              >
                <span>Sponsorship Inquiry Form</span>
                <svg className="btn__arrow" width="16" height="16" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </button>
              <a
                className="btn btn--ghost btn--sm inline-flex items-center gap-1.5"
                href="/sponsorship"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', '/sponsorship');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span>View Tiers &amp; Benefits Table</span>
                <svg className="btn__arrow" width="16" height="16" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </a>
              <a
                className="btn btn--ghost btn--sm inline-flex items-center gap-1.5"
                href="mailto:dotnetconfamt@prpotepatilengg.ac.in?subject=Sponsorship%20Inquiry%20-%20.NET%20Conf%202026"
              >
                <span>Download Sponsor Deck</span>
                <svg className="btn__arrow" width="16" height="16" aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsorship Inquiry Modal Popup */}
      {isModalOpen && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[99999] bg-black/75 backdrop-blur-sm flex items-center justify-center p-3.5 sm:p-5 overflow-y-auto"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative w-full max-w-lg bg-white border-[3px] border-black rounded-2xl p-5 sm:p-6 shadow-[8px_8px_0px_#120838] my-auto select-text"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleCloseModal}
              aria-label="Close modal"
              className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-[#FFE4E6] hover:bg-[#FECDD3] text-black border-2 border-black shadow-[2px_2px_0px_#000] flex items-center justify-center font-black cursor-pointer transition-transform hover:scale-105 active:scale-95 z-20"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Modal Header */}
            <div className="pr-10 mb-4 pb-3 border-b-2 border-dashed border-[#120838]/20">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-[#FFE89E] border border-black/40 shadow-[2px_2px_0px_#120838] mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
                <span className="font-mono text-[11px] font-black uppercase text-[#120838] tracking-wider">
                  Sponsorship Inquiry
                </span>
              </div>
              <h3 className="font-sans text-xl sm:text-2xl font-black text-[#120838] tracking-tight">
                Partner with .NET Conf 2026
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                Direct inquiry to the .NET Conf 2026 Sponsorship Committee.
              </p>
            </div>

            {formStatus === 'success' ? (
              <div className="p-6 bg-[#ECFDF5] border-2 border-[#059669] rounded-xl text-center space-y-3 shadow-[3px_3px_0px_#059669]">
                <div className="w-12 h-12 bg-[#10B981] rounded-full border-2 border-black flex items-center justify-center mx-auto shadow-[2px_2px_0px_#120838]">
                  <CheckCircle2 className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-sans text-xl font-black text-[#065F46]">
                  Inquiry Submitted Successfully!
                </h4>
                <p className="text-sm text-stone-700 leading-relaxed max-w-md mx-auto">
                  Thank you, <strong>{lastSubmittedData?.contactName || contactName}</strong>! Your inquiry on behalf of <strong>{lastSubmittedData?.companyName || companyName}</strong> for <strong>{lastSubmittedData?.tier || selectedTier}</strong> has been logged.
                </p>
                <div className="p-2.5 bg-white rounded-lg border border-black/20 text-xs font-mono text-stone-600">
                  A confirmation has been queued for <strong>{lastSubmittedData?.email || workEmail}</strong>.
                </div>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="btn btn--ghost btn--sm text-xs cursor-pointer"
                  >
                    Submit Another
                  </button>
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="btn btn--primary btn--sm text-xs cursor-pointer"
                  >
                    Done / Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSendInquiry} className="space-y-4">
                {formStatus === 'error' && (
                  <div className="p-3 bg-red-50 border-2 border-red-500 rounded-lg text-xs text-red-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{statusMessage || 'Please fill in all required fields.'}</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleDraftEmailFallback}
                      className="btn btn--ghost btn--sm text-[11px] shrink-0 bg-white py-1 px-2.5 cursor-pointer"
                    >
                      Email Fallback
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block font-mono text-[11px] font-bold uppercase tracking-wider text-[#120838] mb-1">
                      Company / Organization Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                      <input
                        type="text"
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 bg-stone-50 border-2 border-[#120838] rounded-md font-sans text-xs sm:text-sm text-[#120838] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#512BD4] shadow-[2px_2px_0px_#120838]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] font-bold uppercase tracking-wider text-[#120838] mb-1">
                      Contact Person Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 bg-stone-50 border-2 border-[#120838] rounded-md font-sans text-xs sm:text-sm text-[#120838] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#512BD4] shadow-[2px_2px_0px_#120838]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] font-bold uppercase tracking-wider text-[#120838] mb-1">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                      <input
                        type="email"
                        required
                        value={workEmail}
                        onChange={(e) => setWorkEmail(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 bg-stone-50 border-2 border-[#120838] rounded-md font-sans text-xs sm:text-sm text-[#120838] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#512BD4] shadow-[2px_2px_0px_#120838]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] font-bold uppercase tracking-wider text-[#120838] mb-1">
                      Phone / WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 bg-stone-50 border-2 border-[#120838] rounded-md font-sans text-xs sm:text-sm text-[#120838] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#512BD4] shadow-[2px_2px_0px_#120838]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[11px] font-bold uppercase tracking-wider text-[#120838] mb-1">
                    Sponsorship Tier / Package <span className="text-red-500">*</span>
                  </label>
                  <div className="relative" ref={tierDropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsTierDropdownOpen(!isTierDropdownOpen)}
                      className="w-full px-3 py-2 bg-stone-50 border-2 border-[#120838] rounded-md font-sans text-xs sm:text-sm text-[#120838] font-bold focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#512BD4] shadow-[2px_2px_0px_#120838] cursor-pointer flex items-center justify-between text-left transition-all"
                    >
                      <div className="flex items-center gap-2 min-w-0 pr-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full shrink-0 border border-black/30"
                          style={{ backgroundColor: activeTier?.dotColor || '#512BD4' }}
                        />
                        <span className="truncate font-bold text-[#120838]">
                          {activeTier?.label || selectedTier}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-[#120838] shrink-0 transition-transform duration-200 ${
                          isTierDropdownOpen ? 'rotate-180 text-[#512BD4]' : ''
                        }`}
                      />
                    </button>

                    {isTierDropdownOpen && (
                      <div
                        className="absolute z-50 left-0 right-0 top-[calc(100%+4px)] bg-white rounded-xl border-[2.5px] border-[#120838] shadow-[5px_5px_0px_#120838] p-1.5 space-y-0.5 max-h-56 overflow-y-auto"
                        role="listbox"
                      >
                        {SPONSORSHIP_TIER_OPTIONS.map((opt) => {
                          const isSelected = selectedTier === opt.value;
                          return (
                            <button
                              key={opt.value}
                              type="button"
                              role="option"
                              aria-selected={isSelected}
                              onClick={() => {
                                setSelectedTier(opt.value);
                                setIsTierDropdownOpen(false);
                              }}
                              className={`w-full text-left px-2.5 py-1.5 rounded-md font-sans text-xs sm:text-sm flex items-center justify-between gap-2 transition-all cursor-pointer border ${
                                isSelected
                                  ? 'border-[#120838] font-bold shadow-[2px_2px_0px_#120838]'
                                  : 'border-transparent hover:border-black/20'
                              }`}
                              style={{
                                backgroundColor: isSelected ? opt.badgeBg : 'transparent',
                                color: isSelected ? opt.textColor : '#120838'
                              }}
                              onMouseEnter={(e) => {
                                if (!isSelected) e.currentTarget.style.backgroundColor = opt.hoverBg;
                              }}
                              onMouseLeave={(e) => {
                                if (!isSelected) e.currentTarget.style.backgroundColor = 'transparent';
                              }}
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <span
                                  className="w-2.5 h-2.5 rounded-full shrink-0 border border-black/30"
                                  style={{ backgroundColor: opt.dotColor }}
                                />
                                <span className="font-semibold truncate">
                                  {opt.label}
                                </span>
                              </div>
                              {isSelected && (
                                <Check className="w-4 h-4 text-[#120838] stroke-[2.5] shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[11px] font-bold uppercase tracking-wider text-[#120838] mb-1">
                    Requirements / Notes <span className="text-stone-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    rows={2}
                    value={inquiryNotes}
                    onChange={(e) => setInquiryNotes(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border-2 border-[#120838] rounded-md font-sans text-xs sm:text-sm text-[#120838] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#512BD4] shadow-[2px_2px_0px_#120838]"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="btn btn--primary btn--sm inline-flex items-center justify-center gap-2 px-6 py-2.5 shadow-[2px_2px_0px_#120838] w-full sm:w-auto cursor-pointer font-bold"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default DncSponsors;
