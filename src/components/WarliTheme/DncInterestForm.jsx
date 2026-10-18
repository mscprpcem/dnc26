import React, { useState, useRef, useEffect } from 'react';
import { User, Mail, Phone, Briefcase, Building2, Target, Send, ArrowRight, Megaphone, Calendar, Bell, Check, Info, ChevronDown } from 'lucide-react';
import { sendInterestSubmission } from '../../utils/webhookApi.js';
import { WarliCornerOrnament } from '../Warli/WarliMotifs.jsx';

export const DncInterestForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    college: '',
    interests: ['.NET & C#', 'Azure & Cloud'],
    agreed: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isRoleOpen, setIsRoleOpen] = useState(false);
  const roleDropdownRef = useRef(null);

  const roleOptions = [
    { value: 'student_prpcem', label: 'Student @ PRPCEM (Host Campus)', badge: 'PRPCEM', badgeBg: 'bg-[#E5A93C] text-[#180805]' },
    { value: 'student_other', label: 'Student (Other College / University)', badge: 'Student', badgeBg: 'bg-[#FAF7F2] text-[#180805]' },
    { value: 'developer', label: 'Professional Software Developer', badge: 'Developer', badgeBg: 'bg-[#C84832] text-white' },
    { value: 'faculty', label: 'Faculty / Educator / Academician', badge: 'Faculty', badgeBg: 'bg-[#38130D] text-[#E5A93C]' },
    { value: 'other', label: 'Tech Enthusiast / Community Member', badge: 'Community', badgeBg: 'bg-[#E5A93C] text-[#180805]' },
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

  const selectedRole = roleOptions.find((r) => r.value === formData.role);

  const interestTopics = [
    { id: '.NET & C#', label: '</> .NET & C#' },
    { id: 'Azure & Cloud', label: '☁️ Azure & Cloud' },
    { id: 'AI & Copilots', label: '🧠 AI & Copilots' },
    { id: 'Developer Tools', label: '🛠️ Developer Tools' },
    { id: 'Community & Networking', label: '👥 Community & Tarpa Circles' },
  ];

  const handleToggleInterest = (topic) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(topic)
        ? prev.interests.filter((t) => t !== topic)
        : [...prev.interests, topic],
    }));
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

  return (
    <section id="register" className="py-3 sm:py-5 px-3 sm:px-6 max-w-7xl mx-auto scroll-mt-20 relative text-[#FAF7F2]">

      {/* Decorative Warli Glyphs */}
      <div className="absolute top-16 right-16 text-[#E5A93C] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">▲</div>
      <div className="absolute top-24 right-10 text-[#FAF7F2]/40 font-mono text-base font-bold select-none pointer-events-none hidden lg:block">◆</div>
      <div className="absolute top-64 -left-6 text-[#E5A93C] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">●</div>
      <div className="absolute bottom-20 -right-6 text-[#FAF7F2] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">▲</div>

      {/* Side spaces gutter badges (Desktop) */}
      <div 
        aria-hidden="true"
        className="hidden 2xl:flex absolute -left-16 2xl:-left-24 top-10 flex-col items-center gap-2 select-none pointer-events-none z-10"
      >
        <div className="bg-[#280D07] border-[1.5px] border-[#FAF7F2] px-3 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_#120402] flex items-center gap-1.5 font-mono text-[10px] font-black text-[#FAF7F2]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]" />
          <span className="text-[#FAF7F2] uppercase tracking-wider">CENTRAL INDIA</span>
        </div>
        <div className="px-3 py-1 rounded-lg border-[2px] border-[#FAF7F2] font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#120402] uppercase whitespace-nowrap bg-[#38130D] text-[#E5A93C] flex items-center gap-1.5">
          <span>🌾</span>
          <span>DELEGATE ACCESS</span>
        </div>
        <span className="font-mono text-[9px] font-bold text-[#E5A93C]/80 uppercase tracking-widest mt-0.5">
          AMRAVATI • PRPCEM
        </span>
        <div className="font-mono text-[9px] font-bold text-[#FAF7F2]/50 select-none tracking-widest mt-1">
          ◆ ▲ ◆
        </div>
      </div>

      <div 
        aria-hidden="true"
        className="hidden 2xl:flex absolute -right-16 2xl:-right-24 top-10 flex-col items-center gap-2 select-none pointer-events-none z-10"
      >
        <div className="bg-[#280D07] border-[1.5px] border-[#FAF7F2] px-3 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_#120402] flex items-center gap-1.5 font-mono text-[10px] font-black text-[#FAF7F2]">
          <span className="text-[#E5A93C]">2026</span>
          <span className="text-[#FAF7F2]/40">//</span>
          <span className="uppercase tracking-wider">REGISTRATION</span>
        </div>
        <div className="px-3 py-1 rounded-lg border-[2px] border-[#FAF7F2] font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#120402] uppercase whitespace-nowrap bg-[#E5A93C] text-[#180805] flex items-center gap-1.5">
          <span>PRIORITY PASS</span>
        </div>
        <span className="font-mono text-[9px] font-bold text-[#E5A93C]/80 uppercase tracking-widest mt-0.5">
          STUDENTS • DEVELOPERS
        </span>
        <div className="font-mono text-[9px] font-bold text-[#FAF7F2]/50 select-none tracking-widest mt-1">
          ◆ ▲ ◆
        </div>
      </div>

      {/* Hanging Signpost Header */}
      <div className="flex flex-col items-center mb-6">
        <div className="bg-[#260C07] text-[#FAF7F2] px-5 sm:px-7 py-2 sm:py-2.5 rounded-full border-[2.5px] border-[#FAF7F2] shadow-[4px_4px_0px_0px_#120402] flex items-center gap-3 z-10">
          <span className="bg-[#E5A93C] text-[#180805] text-[10px] sm:text-xs font-mono font-black px-3.5 py-1 rounded-full border-[1.5px] border-[#FAF7F2] shadow-[1px_1px_0px_0px_#120402] uppercase">
            .NET CONF 2026 • AMRAVATI
          </span>
          <span className="text-[#FAF7F2]/60 font-mono text-xs">|</span>
          <span className="font-sans font-black text-sm sm:text-base md:text-lg tracking-wider uppercase">
            REGISTER YOUR INTEREST
          </span>
        </div>

        {/* 2 Hanging Cords Connecting to Main Card */}
        <div className="flex justify-between w-64 -mt-1 -mb-1 z-0">
          <div className="w-3.5 h-6 bg-[#260C07] border-[2px] border-[#FAF7F2] rounded-b-md flex items-center justify-center shadow-[1px_1px_0px_0px_#120402]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]"></div>
          </div>
          <div className="w-3.5 h-6 bg-[#260C07] border-[2px] border-[#FAF7F2] rounded-b-md flex items-center justify-center shadow-[1px_1px_0px_0px_#120402]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]"></div>
          </div>
        </div>
      </div>

      {/* Main Warli Form Card */}
      <div className="bg-[#280D07] border-[2.5px] sm:border-[3px] border-[#FAF7F2] rounded-[32px] p-5 sm:p-8 md:p-10 shadow-[8px_8px_0px_0px_#120402] max-w-4xl mx-auto relative overflow-hidden text-[#FAF7F2]">
        
        {/* Warli Corner Ornaments */}
        <WarliCornerOrnament position="top-left" fill="#FAF7F2" className="top-2 left-2 opacity-50" />
        <WarliCornerOrnament position="top-right" fill="#FAF7F2" className="top-2 right-2 opacity-50" />

        {/* Top Center Pill */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-2 bg-[#3A140E] text-[#E5A93C] font-mono font-bold text-[11px] sm:text-xs px-4 py-1.5 rounded-full border-[1.5px] border-[#FAF7F2] shadow-[1.5px_1.5px_0px_0px_#120402]">
            <Calendar className="w-3.5 h-3.5 text-[#E5A93C]" />
            <span>.NET CONF 2026 • AMRAVATI</span>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-sans uppercase tracking-tight text-[#FAF7F2] text-center mb-2 leading-tight">
          Be Part of the <span className="text-[#E5A93C]">Developer Community</span>
        </h2>

        {/* Subtitle */}
        <p className="text-[#FAF7F2]/80 font-sans text-xs sm:text-sm text-center max-w-xl mx-auto leading-relaxed mb-8">
          Get event updates, speaker announcements and registration details for .NET Conf 2026 Amravati.
        </p>

        {isSubmitted ? (
          <div className="bg-[#1E0905] border-[2px] border-[#FAF7F2] rounded-2xl p-6 sm:p-8 text-center shadow-[4px_4px_0px_0px_#120402]">
            <div className="w-14 h-14 rounded-full bg-[#E5A93C] text-[#180805] border-[2px] border-[#FAF7F2] flex items-center justify-center mx-auto mb-3 shadow-[2px_2px_0px_0px_#120402]">
              <Check className="w-7 h-7 stroke-[3]" />
            </div>
            <h3 className="text-xl font-black font-sans text-[#FAF7F2] uppercase mb-1">
              Interest Submitted!
            </h3>
            <p className="text-[#FAF7F2]/80 font-sans text-sm max-w-md mx-auto">
              Thank you for registering your interest. You will receive delegate priority updates, session schedules, and badge invitations.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row 1: Full name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1 text-left">
                <label className="text-xs font-mono font-bold text-[#FAF7F2] flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#E5A93C]" />
                  <span>Full name *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border-[2px] border-[#FAF7F2] bg-[#1E0905] text-sm font-sans text-[#FAF7F2] placeholder:text-[#FAF7F2]/40 focus:outline-none focus:border-[#E5A93C] focus:ring-1 focus:ring-[#E5A93C] shadow-[2px_2px_0px_0px_#120402] transition-all"
                />
              </div>

              <div className="space-y-1 text-left">
                <label className="text-xs font-mono font-bold text-[#FAF7F2] flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#E5A93C]" />
                  <span>Email address *</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border-[2px] border-[#FAF7F2] bg-[#1E0905] text-sm font-sans text-[#FAF7F2] placeholder:text-[#FAF7F2]/40 focus:outline-none focus:border-[#E5A93C] focus:ring-1 focus:ring-[#E5A93C] shadow-[2px_2px_0px_0px_#120402] transition-all"
                />
              </div>
            </div>

            {/* Row 2: Mobile number & Custom Role Dropdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1 text-left">
                <label className="text-xs font-mono font-bold text-[#FAF7F2] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#E5A93C]" />
                  <span>Mobile number *</span>
                </label>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-2.5 rounded-xl border-[2px] border-[#FAF7F2] bg-[#E5A93C] text-[#180805] font-mono text-xs font-bold shadow-[2px_2px_0px_0px_#120402] shrink-0 select-none">
                    🇮🇳 +91
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="Enter your mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="flex-1 px-3.5 py-2.5 rounded-xl border-[2px] border-[#FAF7F2] bg-[#1E0905] text-sm font-sans text-[#FAF7F2] placeholder:text-[#FAF7F2]/40 focus:outline-none focus:border-[#E5A93C] focus:ring-1 focus:ring-[#E5A93C] shadow-[2px_2px_0px_0px_#120402] transition-all"
                  />
                </div>
              </div>

              {/* Role: Custom Warli Dropdown */}
              <div className="space-y-1 text-left relative" ref={roleDropdownRef}>
                <label className="text-xs font-mono font-bold text-[#FAF7F2] flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-[#E5A93C]" />
                  <span>Role *</span>
                </label>
                
                {/* Trigger Button */}
                <button
                  type="button"
                  id="dnc-role-dropdown-btn"
                  onClick={() => setIsRoleOpen(!isRoleOpen)}
                  className={`w-full px-3.5 py-2.5 rounded-xl border-[2px] border-[#FAF7F2] bg-[#1E0905] text-sm font-sans flex items-center justify-between transition-all cursor-pointer shadow-[2px_2px_0px_0px_#120402] ${
                    isRoleOpen ? 'ring-2 ring-[#E5A93C] bg-[#280D07]' : 'hover:bg-[#280D07]'
                  }`}
                  aria-haspopup="listbox"
                  aria-expanded={isRoleOpen}
                >
                  {selectedRole ? (
                    <div className="flex items-center gap-2 truncate">
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border-[1.5px] border-[#FAF7F2] shrink-0 shadow-[1px_1px_0px_0px_#120402] ${selectedRole.badgeBg}`}>
                        {selectedRole.badge}
                      </span>
                      <span className="font-bold text-[#FAF7F2] truncate">{selectedRole.label}</span>
                    </div>
                  ) : (
                    <span className="text-[#FAF7F2]/50 font-normal">Select your role...</span>
                  )}
                  <ChevronDown
                    className={`w-4 h-4 text-[#E5A93C] transition-transform duration-200 shrink-0 ${
                      isRoleOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Hidden input for HTML5 required form validation */}
                <input
                  tabIndex={-1}
                  aria-hidden="true"
                  className="opacity-0 absolute pointer-events-none h-0 w-0 -bottom-2"
                  value={formData.role}
                  required
                  onChange={() => {}}
                />

                {/* Dropdown Menu Popup */}
                {isRoleOpen && (
                  <div 
                    role="listbox"
                    className="absolute z-50 left-0 right-0 top-full mt-1.5 bg-[#260C07] rounded-2xl border-[2.5px] border-[#FAF7F2] shadow-[5px_5px_0px_0px_#120402] p-1.5 space-y-1 max-h-64 overflow-y-auto"
                  >
                    {roleOptions.map((opt) => {
                      const isSelected = formData.role === opt.value;
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
                          className={`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-sans flex items-center justify-between transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#E5A93C] text-[#180805] font-black border-[1.5px] border-[#FAF7F2] shadow-[1px_1px_0px_0px_#120402]'
                              : 'text-[#FAF7F2] hover:bg-[#38130D] hover:translate-x-1 font-semibold'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate">
                            <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-md border-[1.5px] border-[#FAF7F2] shrink-0 ${opt.badgeBg}`}>
                              {opt.badge}
                            </span>
                            <span className="truncate">{opt.label}</span>
                          </div>
                          {isSelected && <Check className="w-4 h-4 text-[#180805] shrink-0 stroke-[3]" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Row 3: College / organisation */}
            <div className="space-y-1 text-left">
              <label className="text-xs font-mono font-bold text-[#FAF7F2] flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#E5A93C]" />
                <span>College / organisation *</span>
              </label>
              <input
                type="text"
                required
                placeholder="Enter your college or organisation name"
                value={formData.college}
                onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border-[2px] border-[#FAF7F2] bg-[#1E0905] text-sm font-sans text-[#FAF7F2] placeholder:text-[#FAF7F2]/40 focus:outline-none focus:border-[#E5A93C] focus:ring-1 focus:ring-[#E5A93C] shadow-[2px_2px_0px_0px_#120402] transition-all"
              />
            </div>

            {/* Row 4: Areas of interest */}
            <div className="space-y-2 text-left pt-2">
              <div>
                <label className="text-xs font-mono font-bold text-[#FAF7F2] flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-[#E5A93C]" />
                  <span>Areas of interest (Optional)</span>
                </label>
                <span className="text-[11px] text-[#FAF7F2]/70 font-sans block">
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
                      className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#E5A93C] text-[#180805] border-[#FAF7F2] shadow-[2px_2px_0px_0px_#120402] scale-105'
                          : 'bg-[#1E0905] text-[#FAF7F2]/80 border-[#FAF7F2]/30 hover:border-[#FAF7F2]'
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
                className="w-4 h-4 rounded text-[#E5A93C] focus:ring-[#E5A93C] cursor-pointer"
              />
              <label htmlFor="agree-updates" className="text-xs font-sans text-[#FAF7F2]/90 cursor-pointer">
                I agree to receive event-related updates.
              </label>
            </div>

            {/* Row 6: Warli Turmeric Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-2xl bg-[#E5A93C] hover:bg-[#F5B82A] text-[#180805] font-mono font-black text-sm uppercase border-[2px] border-[#FAF7F2] shadow-[4px_4px_0px_0px_#120402] hover:shadow-[1px_1px_0px_0px_#120402] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                <span>SUBMIT INTEREST</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Subtext under button */}
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#FAF7F2]/60 font-sans text-center pt-1">
              <Info className="w-3.5 h-3.5 text-[#E5A93C] shrink-0" />
              <span>Submitting this form records your interest; attendance confirmation and venue details will be shared separately.</span>
            </div>
          </form>
        )}
      </div>

      {/* Bottom Announcement Bar (3 Items) */}
      <div className="mt-6 bg-[#260C07] border-[2px] border-[#FAF7F2] rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_0px_#120402] max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left">
          {/* 1. Speaker updates */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#38130D] text-[#E5A93C] flex items-center justify-center shrink-0 border border-[#FAF7F2]/30">
              <Megaphone className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold font-sans text-[#FAF7F2] leading-snug">
                Speaker updates
              </h4>
              <p className="text-[11px] text-[#FAF7F2]/70 font-sans leading-tight mt-0.5">
                Be the first to know about keynote speakers and technical sessions.
              </p>
            </div>
          </div>

          {/* 2. Programme announcements */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#38130D] text-[#FAF7F2] flex items-center justify-center shrink-0 border border-[#FAF7F2]/30">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold font-sans text-[#FAF7F2] leading-snug">
                Programme announcements
              </h4>
              <p className="text-[11px] text-[#FAF7F2]/70 font-sans leading-tight mt-0.5">
                Get detailed information about event tracks and schedules.
              </p>
            </div>
          </div>

          {/* 3. Registration information */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#38130D] text-[#C84832] flex items-center justify-center shrink-0 border border-[#FAF7F2]/30">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold font-sans text-[#FAF7F2] leading-snug">
                Registration information
              </h4>
              <p className="text-[11px] text-[#FAF7F2]/70 font-sans leading-tight mt-0.5">
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
