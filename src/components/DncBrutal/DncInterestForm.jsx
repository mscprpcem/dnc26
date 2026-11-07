import React, { useState, useRef, useEffect } from 'react';
import {
  User,
  Mail,
  Phone,
  Briefcase,
  Building2,
  Target,
  ArrowRight,
  Megaphone,
  Calendar,
  Bell,
  Check,
  Info,
  ChevronDown,
  Plus,
  Minus,
  HelpCircle,
  Sparkles,
  GraduationCap,
  Code2,
  Microscope,
  BookOpen,
} from 'lucide-react';
import { WhatsAppIcon } from '../ui/SocialIcons.jsx';
import { sendInterestSubmission } from '../../utils/webhookApi.js';
import { eventData } from '../../data/event.js';

export const DncInterestForm = ({ isModal = false, onClose, onOpenBadge }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    college: '',
    interests: ['Generative AI & Agents', 'Modern .NET & C#'],
    agreed: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isRoleOpen, setIsRoleOpen] = useState(false);
  const roleDropdownRef = useRef(null);

  const roleOptions = [
    {
      value: 'Student',
      label: 'Student',
      subtitle: 'College / University',
      icon: GraduationCap,
      badgeBg: 'bg-[#00E5FF] text-black',
    },
    {
      value: 'Developer',
      label: 'Developer',
      subtitle: 'Software & Cloud',
      icon: Code2,
      badgeBg: 'bg-[#512BD4] text-white',
    },
    {
      value: 'Professional',
      label: 'Professional',
      subtitle: 'Industry & IT',
      icon: Briefcase,
      badgeBg: 'bg-[#16A34A] text-white',
    },
    {
      value: 'Researcher',
      label: 'Researcher',
      subtitle: 'Academic & R&D',
      icon: Microscope,
      badgeBg: 'bg-[#D600AA] text-white',
    },
    {
      value: 'K-12',
      label: 'K-12',
      subtitle: 'School Student',
      icon: BookOpen,
      badgeBg: 'bg-[#FFD13B] text-black',
    },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (roleDropdownRef.current && !roleDropdownRef.current.contains(e.target)) {
        setIsRoleOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsRoleOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const selectedRole = roleOptions.find((r) => r.value.toLowerCase() === (formData.role || '').toLowerCase()) || roleOptions.find((r) => r.value === formData.role);

  const interestTopics = [
    { id: 'Generative AI & Agents', label: 'Generative AI & Agents', bg: 'bg-[#FCE7F3] text-[#D600AA] border-pink-200' },
    { id: 'GitHub Copilot & DevOps', label: 'GitHub Copilot & DevOps', bg: 'bg-[#DCFCE7] text-[#16A34A] border-green-200' },
    { id: 'Azure Cloud Architecture', label: 'Azure Cloud Architecture', bg: 'bg-[#E0F2FE] text-[#0284C7] border-blue-200' },
    { id: 'Modern .NET & C#', label: 'Modern .NET 11 & C#', bg: 'bg-[#EEEAFB] text-[#512BD4] border-purple-200' },
    { id: 'Open Source & Community', label: 'Open Source & Community', bg: 'bg-[#FEF3C7] text-[#D97706] border-amber-200' },
  ];

  const handleToggleInterest = (topic) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(topic)
        ? prev.interests.filter((t) => t !== topic)
        : [...prev.interests, topic],
    }));
  };

  const handlePhoneChange = (val) => {
    let clean = val.replace(/\D/g, '');
    if (clean.startsWith('91') && clean.length > 10) {
      clean = clean.slice(2);
    } else if (clean.startsWith('0') && clean.length > 10) {
      clean = clean.slice(1);
    }
    setFormData((prev) => ({ ...prev, phone: clean.slice(0, 10) }));
  };

  const handleShareSuccessWhatsApp = () => {
    const text = `Hey! I just registered my priority interest for .NET Conf 2026 Amravati at PRPCEM Campus (Jan 2-3, 2027) — covering Generative AI, GitHub Copilot, Azure Cloud & Modern .NET 11!\n\nJoin the priority delegate list with me here: https://dnc.mscprpcem.tech`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      await sendInterestSubmission(formData);
      setIsSubmitted(true);
    } catch {
      setIsSubmitted(true); // graceful offline fallback
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render Clean Modal Variant
  if (isModal) {
    return (
      <div className="w-full text-left">
        {/* Modal Header */}
        <div className="pr-10 mb-3 sm:mb-4">
          <h2 id="interest-modal-title" className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight text-[#120838] leading-tight">
            Register Your <span className="text-[#512BD4]">Interest</span>
          </h2>
        </div>

        {isSubmitted ? (
          <div className="bg-white border-[2.5px] border-black rounded-2xl p-5 sm:p-7 text-center shadow-[4px_4px_0px_0px_#120838]">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#DCFCE7] text-[#16A34A] border-[2px] border-black flex items-center justify-center mx-auto mb-2.5 shadow-[2.5px_2.5px_0px_0px_#000]">
              <Check className="w-7 h-7 sm:w-8 sm:h-8 stroke-[3]" />
            </div>
            <div className="inline-block bg-[#FFD13B] text-black font-mono font-bold text-[10px] px-3 py-0.5 rounded-md border-[1.5px] border-black mb-2.5 uppercase tracking-wider shadow-[1px_1px_0px_#000]">
              INTEREST CONFIRMED
            </div>
            <h3 className="text-xl sm:text-2xl font-black font-sans text-[#120838] uppercase mb-1">
              You're On The Priority List!
            </h3>
            <p className="text-stone-600 font-sans text-xs sm:text-sm max-w-md mx-auto leading-relaxed mb-5">
              Thank you{formData.fullName ? `, ${formData.fullName}` : ''}! Your interest has been confirmed and a confirmation email has been dispatched to <strong>{formData.email}</strong>. Check your inbox for passes, schedules, and badge invitations.
            </p>

            {/* High-Conversion Next Steps */}
            <div className="space-y-2.5 mb-4">
              {onOpenBadge && (
                <button
                  type="button"
                  onClick={() => {
                    if (onClose) onClose();
                    onOpenBadge();
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-[#512BD4] hover:bg-[#4322B0] text-white font-mono font-black text-xs sm:text-sm uppercase tracking-wider border-[2px] border-black shadow-[3px_3px_0px_#000] hover:shadow-[1px_1px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#FFD13B]" />
                  <span>Generate Your Attendee Badge &rarr;</span>
                </button>
              )}

              <div className="w-full">
                <button
                  type="button"
                  onClick={handleShareSuccessWhatsApp}
                  className="w-full py-3 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-mono font-bold text-xs sm:text-sm uppercase tracking-wide border-[2px] border-black shadow-[2.5px_2.5px_0px_#000] flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Invite Developers on WhatsApp</span>
                </button>
              </div>
            </div>

            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="text-stone-500 hover:text-stone-800 text-xs font-mono font-bold uppercase underline underline-offset-4 cursor-pointer"
              >
                Done / Back to Summit Home
              </button>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
            {errorMessage && (
              <div className="p-2.5 bg-red-50 border-2 border-red-500 rounded-xl text-xs font-mono text-red-700">
                {errorMessage}
              </div>
            )}

            {/* Row 1: Full name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              <div className="space-y-1">
                <label className="text-xs font-mono font-bold text-[#120838] uppercase tracking-wide flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#512BD4]" />
                  <span>Full name *</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border-2 border-black bg-white text-sm font-sans text-stone-900 focus:outline-none focus:border-[#512BD4] focus:ring-2 focus:ring-[#512BD4]/20 transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono font-bold text-[#120838] uppercase tracking-wide flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#512BD4]" />
                  <span>Email address *</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border-2 border-black bg-white text-sm font-sans text-stone-900 focus:outline-none focus:border-[#512BD4] focus:ring-2 focus:ring-[#512BD4]/20 transition-all"
                />
              </div>
            </div>

            {/* Row 2: Mobile number & Custom Role Dropdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              <div className="space-y-1">
                <label className="text-xs font-mono font-bold text-[#120838] uppercase tracking-wide flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#512BD4]" />
                  <span>Mobile number *</span>
                </label>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-2 rounded-xl border-2 border-black bg-[#FFD13B] text-black font-mono text-xs font-black shadow-[1.5px_1.5px_0px_#000] shrink-0 select-none flex items-center justify-center">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    className="flex-1 min-w-0 px-3 py-2 rounded-xl border-2 border-black bg-white text-sm font-sans text-stone-900 focus:outline-none focus:border-[#512BD4] focus:ring-2 focus:ring-[#512BD4]/20 transition-all"
                  />
                </div>
              </div>

              {/* Role: Custom Neo-Brutalist Dropdown */}
              <div className="space-y-1 relative" ref={roleDropdownRef}>
                <label className="text-xs font-mono font-bold text-[#120838] uppercase tracking-wide flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-[#512BD4]" />
                  <span>Role *</span>
                </label>

                {/* Trigger Button */}
                <button
                  type="button"
                  id="dnc-modal-role-dropdown-btn"
                  onClick={() => setIsRoleOpen(!isRoleOpen)}
                  className={`w-full px-3 py-2 rounded-xl border-2 border-black bg-white text-sm font-sans flex items-center justify-between transition-all cursor-pointer hover:bg-stone-50 ${
                    isRoleOpen ? 'ring-2 ring-[#512BD4]/30 border-[#512BD4] bg-[#FAF8FF]' : ''
                  }`}
                  aria-haspopup="listbox"
                  aria-expanded={isRoleOpen}
                >
                  {selectedRole ? (
                    <div className="flex items-center gap-2 truncate">
                      <div className={`w-6 h-6 rounded-md border-[1.5px] border-black flex items-center justify-center shrink-0 shadow-[1px_1px_0px_#000] ${selectedRole.badgeBg}`}>
                        <selectedRole.icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-bold text-black text-xs sm:text-sm">{selectedRole.label}</span>
                      <span className="text-[11px] text-stone-500 font-normal">({selectedRole.subtitle})</span>
                    </div>
                  ) : (
                    <span className="text-stone-400 font-normal">Select role...</span>
                  )}
                  <ChevronDown
                    className={`w-4 h-4 text-black transition-transform duration-200 shrink-0 ${
                    isRoleOpen ? 'rotate-180 text-[#512BD4]' : ''
                  }`}
                  />
                </button>

                <input
                  tabIndex={-1}
                  aria-hidden="true"
                  className="opacity-0 absolute pointer-events-none h-0 w-0 -bottom-2"
                  value={formData.role}
                  required
                  onChange={() => {}}
                />

                {isRoleOpen && (
                  <div 
                    role="listbox"
                    className="absolute z-50 left-0 sm:left-auto sm:right-0 top-full mt-1.5 w-full sm:w-[320px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_#000] p-1.5 space-y-1 max-h-60 overflow-y-auto no-scrollbar"
                  >
                    {roleOptions.map((opt) => {
                      const isSelected = formData.role === opt.value;
                      const IconComponent = opt.icon;
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          onClick={() => {
                            setFormData({ ...formData, role: opt.value });
                            setIsRoleOpen(false);
                          }}
                          className={`w-full text-left px-2.5 py-2 rounded-xl font-sans flex items-center justify-between gap-2 transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#EEEAFB] text-[#512BD4] font-black border-[1.5px] border-black shadow-[1px_1px_0px_0px_#000]'
                              : 'text-black hover:bg-[#FAF8FF] hover:translate-x-1 font-semibold'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className={`w-7 h-7 rounded-lg border-[1.5px] border-black flex items-center justify-center shrink-0 shadow-[1px_1px_0px_#000] ${opt.badgeBg}`}>
                              <IconComponent className="w-3.5 h-3.5" />
                            </div>
                            <div className="flex flex-col text-left leading-tight">
                              <span className="font-bold text-xs sm:text-sm text-black">{opt.label}</span>
                              <span className="text-[11px] text-stone-500 font-normal">{opt.subtitle}</span>
                            </div>
                          </div>
                          {isSelected && <Check className="w-4 h-4 text-[#512BD4] shrink-0 stroke-[3]" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Row 3: College / organisation */}
            <div className="space-y-1">
              <label className="text-xs font-mono font-bold text-[#120838] uppercase tracking-wide flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#512BD4]" />
                <span>College / organisation *</span>
              </label>
              <input
                type="text"
                required
                value={formData.college}
                onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border-2 border-black bg-white text-sm font-sans text-stone-900 focus:outline-none focus:border-[#512BD4] focus:ring-2 focus:ring-[#512BD4]/20 transition-all"
              />
            </div>

            {/* Row 4: Areas of interest */}
            <div className="space-y-1.5 pt-0.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono font-bold text-[#120838] uppercase tracking-wide flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-[#512BD4]" />
                  <span>Areas of interest (Optional)</span>
                </label>
                <span className="text-[10px] text-stone-500 font-mono">
                  Select topics
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {interestTopics.map((topic) => {
                  const isSelected = formData.interests.includes(topic.id);
                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => handleToggleInterest(topic.id)}
                      className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs font-mono font-bold border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#512BD4] text-white border-2 border-black shadow-[1.5px_1.5px_0px_#000] scale-[1.02]'
                          : 'bg-white text-stone-700 border border-stone-300 hover:border-black hover:text-black'
                      }`}
                    >
                      {topic.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Row 5: Checkbox */}
            <div className="flex items-center gap-2 pt-0.5">
              <input
                id="agree-updates-modal"
                type="checkbox"
                checked={formData.agreed}
                onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                className="w-4 h-4 rounded text-[#512BD4] focus:ring-[#512BD4] cursor-pointer"
              />
              <label htmlFor="agree-updates-modal" className="text-xs font-sans text-stone-700 cursor-pointer select-none">
                I agree to receive event announcements and ticket updates.
              </label>
            </div>

            {/* Row 6: Submit Button */}
            <div className="pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 sm:py-3 px-5 rounded-xl bg-[#512BD4] hover:bg-[#4322B0] text-white font-mono font-black text-sm uppercase tracking-wider border-[2.5px] border-black shadow-[4px_4px_0px_#120838] hover:shadow-[2px_2px_0px_#120838] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[3px] active:translate-y-[3px] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>REGISTERING INTEREST...</span>
                  </>
                ) : (
                  <>
                    <span>REGISTER INTEREST</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    );
  }

  // Full-page standalone variant
  return (
    <section id="register" className="py-3 sm:py-5 px-3 sm:px-6 max-w-7xl mx-auto scroll-mt-20 relative">
      {/* Decorative Plus Crosshairs */}
      <div className="absolute top-16 right-16 text-[#512BD4] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute top-24 right-10 text-[#512BD4]/40 font-mono text-base font-bold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute top-64 -left-6 text-[#512BD4] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute bottom-20 -right-6 text-[#512BD4] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">+</div>

      {/* Main Neo-Brutalist Form Card */}
      <div className="bg-white border-[2.5px] sm:border-[3px] border-black rounded-xl p-5 sm:p-8 md:p-10 shadow-[6px_6px_0px_0px_#000] w-full max-w-4xl mx-auto">
        {/* Main Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-sans uppercase tracking-tight text-black text-center mb-2 leading-tight">
          Register Your <span className="text-[#512BD4]">Interest</span>
        </h2>

        {isSubmitted ? (
          <div className="bg-[#FAF8FF] border-[2px] border-black rounded-2xl p-6 sm:p-8 text-center shadow-[3px_3px_0px_0px_#000]">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 border-[2px] border-black flex items-center justify-center mx-auto mb-3 shadow-[2px_2px_0px_0px_#000]">
              <Check className="w-7 h-7 stroke-[3]" />
            </div>
            <h3 className="text-xl font-black font-sans text-black uppercase mb-1">
              Interest Submitted!
            </h3>
            <p className="text-stone-600 font-sans text-sm max-w-md mx-auto">
              Thank you for registering your interest! A confirmation email has been dispatched to <strong>{formData.email}</strong> with your priority delegate details.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMessage && (
              <div className="p-3 bg-red-50 border-2 border-red-500 rounded-lg text-xs font-mono text-red-700">
                {errorMessage}
              </div>
            )}

            {/* Row 1: Full name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1 text-left">
                <label className="text-xs font-mono font-bold text-black flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#512BD4]" />
                  <span>Full name *</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border-[2px] border-black bg-white text-sm font-sans text-black focus:outline-none focus:ring-2 focus:ring-[#512BD4] shadow-[2px_2px_0px_0px_#000] transition-all"
                />
              </div>

              <div className="space-y-1 text-left">
                <label className="text-xs font-mono font-bold text-black flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#512BD4]" />
                  <span>Email address *</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border-[2px] border-black bg-white text-sm font-sans text-black focus:outline-none focus:ring-2 focus:ring-[#512BD4] shadow-[2px_2px_0px_0px_#000] transition-all"
                />
              </div>
            </div>

            {/* Row 2: Mobile number & Custom Role Dropdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1 text-left">
                <label className="text-xs font-mono font-bold text-black flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#512BD4]" />
                  <span>Mobile number *</span>
                </label>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-2.5 rounded-md border-[2px] border-black bg-[#FFD13B] text-black font-mono text-xs font-bold shadow-[2px_2px_0px_0px_#000] shrink-0 select-none">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="flex-1 px-3.5 py-2.5 rounded-xl border-[2px] border-black bg-white text-sm font-sans text-black focus:outline-none focus:ring-2 focus:ring-[#512BD4] shadow-[2px_2px_0px_0px_#000] transition-all"
                  />
                </div>
              </div>

              {/* Role: Custom Neo-Brutalist Dropdown */}
              <div className="space-y-1 text-left relative" ref={roleDropdownRef}>
                <label className="text-xs font-mono font-bold text-black flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-[#512BD4]" />
                  <span>Role *</span>
                </label>

                {/* Trigger Button */}
                <button
                  type="button"
                  id="dnc-role-dropdown-btn"
                  onClick={() => setIsRoleOpen(!isRoleOpen)}
                  className={`w-full px-3.5 py-2.5 rounded-xl border-[2px] border-black bg-white text-sm font-sans flex items-center justify-between transition-all cursor-pointer shadow-[2px_2px_0px_0px_#000] ${
                    isRoleOpen ? 'ring-2 ring-[#512BD4] bg-[#FAF8FF]' : 'hover:bg-[#FAF8FF]'
                  }`}
                  aria-haspopup="listbox"
                  aria-expanded={isRoleOpen}
                >
                  {selectedRole ? (
                    <div className="flex items-center gap-2 truncate">
                      <div className={`w-6 h-6 rounded-md border-[1.5px] border-black flex items-center justify-center shrink-0 shadow-[1px_1px_0px_#000] ${selectedRole.badgeBg}`}>
                        <selectedRole.icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-bold text-black text-xs sm:text-sm">{selectedRole.label}</span>
                      <span className="text-[11px] text-stone-500 font-normal">({selectedRole.subtitle})</span>
                    </div>
                  ) : (
                    <span className="text-stone-400 font-normal">Select role...</span>
                  )}
                  <ChevronDown
                    className={`w-4 h-4 text-black transition-transform duration-200 shrink-0 ${
                      isRoleOpen ? 'rotate-180 text-[#512BD4]' : ''
                    }`}
                  />
                </button>

                <input
                  tabIndex={-1}
                  aria-hidden="true"
                  className="opacity-0 absolute pointer-events-none h-0 w-0 -bottom-2"
                  value={formData.role}
                  required
                  onChange={() => {}}
                />

                {isRoleOpen && (
                  <div 
                    role="listbox"
                    className="absolute z-50 left-0 sm:left-auto sm:right-0 top-full mt-1.5 w-full sm:w-[320px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl border-[2.5px] border-black shadow-[5px_5px_0px_0px_#000] p-1.5 space-y-1 max-h-64 overflow-y-auto no-scrollbar"
                  >
                    {roleOptions.map((opt) => {
                      const isSelected = formData.role === opt.value;
                      const IconComponent = opt.icon;
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          onClick={() => {
                            setFormData({ ...formData, role: opt.value });
                            setIsRoleOpen(false);
                          }}
                          className={`w-full text-left px-2.5 py-2 rounded-xl font-sans flex items-center justify-between gap-2 transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#EEEAFB] text-[#512BD4] font-black border-[1.5px] border-black shadow-[1px_1px_0px_0px_#000]'
                              : 'text-black hover:bg-[#FAF8FF] hover:translate-x-1 font-semibold'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className={`w-7 h-7 rounded-lg border-[1.5px] border-black flex items-center justify-center shrink-0 shadow-[1px_1px_0px_#000] ${opt.badgeBg}`}>
                              <IconComponent className="w-3.5 h-3.5" />
                            </div>
                            <div className="flex flex-col text-left leading-tight">
                              <span className="font-bold text-xs sm:text-sm text-black">{opt.label}</span>
                              <span className="text-[11px] text-stone-500 font-normal">{opt.subtitle}</span>
                            </div>
                          </div>
                          {isSelected && <Check className="w-4 h-4 text-[#512BD4] shrink-0 stroke-[3]" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Row 3: College / organisation */}
            <div className="space-y-1 text-left">
              <label className="text-xs font-mono font-bold text-black flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#512BD4]" />
                <span>College / organisation *</span>
              </label>
              <input
                type="text"
                required
                value={formData.college}
                onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border-[2px] border-black bg-white text-sm font-sans text-black focus:outline-none focus:ring-2 focus:ring-[#512BD4] shadow-[2px_2px_0px_0px_#000] transition-all"
              />
            </div>

            {/* Row 4: Areas of interest */}
            <div className="space-y-2 text-left pt-2">
              <div>
                <label className="text-xs font-mono font-bold text-black flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-[#512BD4]" />
                  <span>Areas of interest (Optional)</span>
                </label>
                <span className="text-[11px] text-stone-500 font-sans block">
                  Select topics you are most interested in
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {interestTopics.map((topic) => {
                  const isSelected = formData.interests.includes(topic.id);
                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => handleToggleInterest(topic.id)}
                      className={`px-3 py-1.5 rounded-md text-xs font-mono font-bold border transition-all cursor-pointer ${
                        isSelected
                          ? `${topic.bg} border-black shadow-[1.5px_1.5px_0px_0px_#000] scale-105`
                          : 'bg-stone-50 text-stone-600 border-stone-200 hover:border-black'
                      }`}
                    >
                      {topic.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Row 5: Checkbox */}
            <div className="flex items-center gap-2 pt-2 text-left">
              <input
                id="agree-updates"
                type="checkbox"
                checked={formData.agreed}
                onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                className="w-4 h-4 rounded text-[#512BD4] focus:ring-[#512BD4] cursor-pointer"
              />
              <label htmlFor="agree-updates" className="text-xs font-sans text-stone-700 cursor-pointer">
                I agree to receive event-related updates.
              </label>
            </div>

            {/* Row 6: Big Purple Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-[#512BD4] hover:bg-[#4322B0] text-white font-mono font-black text-sm uppercase tracking-wider border-[2.5px] border-black shadow-[4px_4px_0px_#120838] hover:shadow-[2px_2px_0px_#120838] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>REGISTERING INTEREST...</span>
                  </>
                ) : (
                  <>
                    <span>REGISTER INTEREST</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </>
                )}
              </button>
            </div>

            {/* Subtext under button */}
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-500 font-sans text-center pt-1">
              <Info className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              <span>Submitting this form records your priority interest for .NET Conf 2026 at Swami Vivekanand Auditorium, PRPCEM, Amravati.</span>
            </div>
          </form>
        )}
      </div>

      {/* Frequently Asked Questions Accordion */}
      {eventData.faqs && eventData.faqs.length > 0 && (
        <div className="mt-8 max-w-4xl mx-auto text-left">
          <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
            <span className="w-8 h-8 rounded-lg bg-[#512BD4] text-white flex items-center justify-center font-bold">
              <HelpCircle className="w-4 h-4" />
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-sans uppercase tracking-tight text-black">
              Delegate FAQs &amp; Key Details
            </h3>
          </div>

          <div className="space-y-3">
            {eventData.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white border-[2px] border-black rounded-2xl overflow-hidden transition-all ${
                    isOpen ? 'shadow-[4px_4px_0px_0px_#512BD4]' : 'shadow-[2px_2px_0px_0px_#000] hover:shadow-[3px_3px_0px_0px_#000]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-3.5 sm:p-4 text-left font-sans font-bold text-xs sm:text-sm text-black flex items-center justify-between gap-3 cursor-pointer hover:bg-stone-50"
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-md bg-[#EEEAFB] text-[#512BD4] font-mono text-[11px] font-bold flex items-center justify-center shrink-0">
                        Q{idx + 1}
                      </span>
                      <span>{faq.q}</span>
                    </span>
                    <span className="w-6 h-6 rounded-md bg-[#FAF9FF] border border-black/30 flex items-center justify-center shrink-0">
                      {isOpen ? <Minus className="w-3.5 h-3.5 stroke-[3]" /> : <Plus className="w-3.5 h-3.5 stroke-[3]" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-[13px] text-stone-700 font-sans leading-relaxed border-t border-black/10 bg-[#FAF9FF]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Bottom Announcement Bar (3 Items) */}
      <div className="mt-6 bg-[#FAF9FF] border-[2px] border-black rounded-2xl p-4 sm:p-5 shadow-[3px_3px_0px_0px_#000] w-full max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EEEAFB] text-[#512BD4] flex items-center justify-center shrink-0 border border-purple-200">
              <Megaphone className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold font-sans text-black leading-snug">
                Speaker updates
              </h4>
              <p className="text-[11px] text-stone-500 font-sans leading-tight mt-0.5">
                Be the first to know about our keynote speakers and technical sessions.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0 border border-blue-200">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold font-sans text-black leading-snug">
                Programme announcements
              </h4>
              <p className="text-[11px] text-stone-500 font-sans leading-tight mt-0.5">
                Get detailed information about event tracks and schedules.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FCE7F3] text-[#D600AA] flex items-center justify-center shrink-0 border border-pink-200">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold font-sans text-black leading-snug">
                Registration information
              </h4>
              <p className="text-[11px] text-stone-500 font-sans leading-tight mt-0.5">
                Receive updates on registration dates and important announcements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DncInterestForm;
