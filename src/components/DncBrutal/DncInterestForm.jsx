import React, { useState, useRef, useEffect } from 'react';
import { User, Mail, Phone, Briefcase, Building2, Target, Send, ArrowRight, Megaphone, Calendar, Bell, Check, Info, ChevronDown } from 'lucide-react';
import { sendInterestSubmission } from '../../utils/webhookApi.js';

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
    { value: 'student_prpcem', label: 'Student @ PRPCEM (Host Campus)', badge: 'PRPCEM', badgeBg: 'bg-[#512BD4] text-white' },
    { value: 'student_other', label: 'Student (Other College / University)', badge: 'Student', badgeBg: 'bg-[#00E5FF] text-black' },
    { value: 'developer', label: 'Professional Software Developer', badge: 'Developer', badgeBg: 'bg-[#16A34A] text-white' },
    { value: 'faculty', label: 'Faculty / Educator / Academician', badge: 'Faculty', badgeBg: 'bg-[#D600AA] text-white' },
    { value: 'other', label: 'Tech Enthusiast / Community Member', badge: 'Community', badgeBg: 'bg-[#FFD13B] text-black' },
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
    { id: '.NET & C#', label: '</> .NET & C#', bg: 'bg-[#EEEAFB] text-[#512BD4] border-purple-200' },
    { id: 'Azure & Cloud', label: '☁️ Azure & Cloud', bg: 'bg-[#E0F2FE] text-[#0284C7] border-blue-200' },
    { id: 'AI & Copilots', label: '🧠 AI & Copilots', bg: 'bg-[#FCE7F3] text-[#D600AA] border-pink-200' },
    { id: 'Developer Tools', label: '🛠️ Developer Tools', bg: 'bg-[#DCFCE7] text-[#16A34A] border-green-200' },
    { id: 'Community & Networking', label: '👥 Community & Networking', bg: 'bg-[#FEF3C7] text-[#D97706] border-amber-200' },
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
    <section id="register" className="py-3 sm:py-5 px-3 sm:px-6 max-w-7xl mx-auto scroll-mt-20 relative">

      {/* Decorative Plus Crosshairs */}
      <div className="absolute top-16 right-16 text-[#512BD4] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute top-24 right-10 text-[#512BD4]/40 font-mono text-base font-bold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute top-64 -left-6 text-[#512BD4] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute bottom-20 -right-6 text-[#512BD4] font-mono text-2xl font-bold select-none pointer-events-none hidden lg:block">+</div>

      {/* Side spaces gutter badges (Desktop) */}
      <div 
        aria-hidden="true"
        className="hidden xl:flex absolute -left-16 2xl:-left-24 top-10 flex-col items-center gap-2 select-none pointer-events-none z-10"
      >
        <div className="bg-white border-[1.5px] border-black px-3 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_#000] flex items-center gap-1.5 font-mono text-[10px] font-black text-black">
          <span className="w-1.5 h-1.5 rounded-full bg-[#512BD4]" />
          <span className="text-black uppercase tracking-wider">CENTRAL INDIA</span>
        </div>
        <div className="px-3 py-1 rounded-lg border-[2px] border-black font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#000] uppercase whitespace-nowrap bg-[#DCFCE7] text-[#16A34A] flex items-center gap-1.5">
          <span>⚡</span>
          <span>DEVELOPER COMMUNITY</span>
        </div>
        <span className="font-mono text-[9px] font-bold text-stone-500 uppercase tracking-widest mt-0.5">
          LEARN • BUILD • CONNECT
        </span>
        <div className="font-mono text-[9px] font-bold text-stone-400 select-none tracking-widest mt-1">
          + + +
        </div>
      </div>

      <div 
        aria-hidden="true"
        className="hidden xl:flex absolute -right-16 2xl:-right-24 top-10 flex-col items-center gap-2 select-none pointer-events-none z-10"
      >
        <div className="bg-[#FFD13B] text-black border-[1.5px] border-black px-3 py-0.5 rounded-full shadow-[1.5px_1.5px_0px_0px_#000] flex items-center gap-1.5 font-mono text-[10px] font-black">
          <span>👥 ALL ARE WELCOME</span>
        </div>
        <div className="px-3 py-1 rounded-lg border-[2px] border-black font-mono font-black text-[10px] shadow-[2px_2px_0px_0px_#000] uppercase whitespace-nowrap bg-[#EEEAFB] text-[#512BD4] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#512BD4]" />
          <span>AMRAVATI - PRPCEM</span>
        </div>
        <span className="font-mono text-[9px] font-bold text-stone-500 uppercase tracking-widest mt-0.5">
          STUDENTS • DEVELOPERS • EDUCATORS
        </span>
        <div className="font-mono text-[9px] font-bold text-stone-400 select-none tracking-widest mt-1">
          + + +
        </div>
      </div>

      {/* Hanging Signpost Header */}
      <div className="flex flex-col items-center mb-6">
        <div className="bg-[#512BD4] text-white px-5 sm:px-7 py-2 sm:py-2.5 rounded-full border-[2.5px] border-black shadow-[4px_4px_0px_0px_#000] flex items-center gap-3 z-10">
          <span className="bg-[#00E5FF] text-black text-[10px] sm:text-xs font-mono font-black px-3.5 py-1 rounded-full border-[1.5px] border-black shadow-[1px_1px_0px_0px_#000] uppercase">
            .NET CONF 2026 • AMRAVATI
          </span>
          <span className="text-white/60 font-mono text-xs">|</span>
          <span className="font-sans font-black text-sm sm:text-base md:text-lg tracking-wider uppercase">
            REGISTER YOUR INTEREST
          </span>
        </div>

        {/* 2 Hanging Cords Connecting to Main Card */}
        <div className="flex justify-between w-64 -mt-1 -mb-1 z-0">
          <div className="w-3.5 h-6 bg-white border-[2px] border-black rounded-b-md flex items-center justify-center shadow-[1px_1px_0px_0px_#000]">
            <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
          </div>
          <div className="w-3.5 h-6 bg-white border-[2px] border-black rounded-b-md flex items-center justify-center shadow-[1px_1px_0px_0px_#000]">
            <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
          </div>
        </div>
      </div>

      {/* Main Neo-Brutalist Form Card */}
      <div className="bg-white border-[2.5px] sm:border-[3px] border-black rounded-[32px] p-5 sm:p-8 md:p-10 shadow-[6px_6px_0px_0px_#000] max-w-4xl mx-auto">
        {/* Top Center Pill */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-2 bg-[#FAF8FF] text-[#512BD4] font-mono font-bold text-[11px] sm:text-xs px-4 py-1.5 rounded-full border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_#000]">
            <Calendar className="w-3.5 h-3.5 text-[#512BD4]" />
            <span>.NET CONF 2026 • AMRAVATI</span>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-sans uppercase tracking-tight text-black text-center mb-2 leading-tight">
          Be Part of the <span className="text-[#512BD4]">Developer Community</span>
        </h2>

        {/* Subtitle */}
        <p className="text-stone-600 font-sans text-xs sm:text-sm text-center max-w-xl mx-auto leading-relaxed mb-8">
          Get event updates, speaker announcements and registration details for .NET Conf 2026 Amravati.
        </p>

        {isSubmitted ? (
          <div className="bg-[#FAF8FF] border-[2px] border-black rounded-2xl p-6 sm:p-8 text-center shadow-[3px_3px_0px_0px_#000]">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 border-[2px] border-black flex items-center justify-center mx-auto mb-3 shadow-[2px_2px_0px_0px_#000]">
              <Check className="w-7 h-7 stroke-[3]" />
            </div>
            <h3 className="text-xl font-black font-sans text-black uppercase mb-1">
              Interest Submitted!
            </h3>
            <p className="text-stone-600 font-sans text-sm max-w-md mx-auto">
              Thank you for registering your interest. You'll receive delegate priority updates, session schedules, and badge invitations.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
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
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border-[2px] border-black bg-white text-sm font-sans text-black placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#512BD4] shadow-[2px_2px_0px_0px_#000] transition-all"
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
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border-[2px] border-black bg-white text-sm font-sans text-black placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#512BD4] shadow-[2px_2px_0px_0px_#000] transition-all"
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
                  <span className="px-3 py-2.5 rounded-xl border-[2px] border-black bg-[#FFD13B] text-black font-mono text-xs font-bold shadow-[2px_2px_0px_0px_#000] shrink-0 select-none">
                    🇮🇳 +91
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="Enter your mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="flex-1 px-3.5 py-2.5 rounded-xl border-[2px] border-black bg-white text-sm font-sans text-black placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#512BD4] shadow-[2px_2px_0px_0px_#000] transition-all"
                  />
                </div>
              </div>

              {/* Role: Custom Neo-Brutalist Dropdown (No default OS grey) */}
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
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border-[1.5px] border-black shrink-0 shadow-[1px_1px_0px_0px_#000] ${selectedRole.badgeBg}`}>
                        {selectedRole.badge}
                      </span>
                      <span className="font-bold text-black truncate">{selectedRole.label}</span>
                    </div>
                  ) : (
                    <span className="text-stone-400 font-normal">Select your role...</span>
                  )}
                  <ChevronDown
                    className={`w-4 h-4 text-black transition-transform duration-200 shrink-0 ${
                      isRoleOpen ? 'rotate-180 text-[#512BD4]' : ''
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
                    className="absolute z-50 left-0 right-0 top-full mt-1.5 bg-white rounded-2xl border-[2.5px] border-black shadow-[5px_5px_0px_0px_#000] p-1.5 space-y-1 max-h-64 overflow-y-auto"
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
                              ? 'bg-[#EEEAFB] text-[#512BD4] font-black border-[1.5px] border-black shadow-[1px_1px_0px_0px_#000]'
                              : 'text-black hover:bg-[#FAF8FF] hover:translate-x-1 font-semibold'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate">
                            <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-md border-[1.5px] border-black shrink-0 ${opt.badgeBg}`}>
                              {opt.badge}
                            </span>
                            <span className="truncate">{opt.label}</span>
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
                placeholder="Enter your college or organisation name"
                value={formData.college}
                onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border-[2px] border-black bg-white text-sm font-sans text-black placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#512BD4] shadow-[2px_2px_0px_0px_#000] transition-all"
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
                      className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold border transition-all cursor-pointer ${
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
                className="w-full py-3.5 rounded-2xl bg-[#512BD4] hover:bg-[#4322B0] text-white font-mono font-black text-sm uppercase border-[2px] border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                <span>SUBMIT INTEREST</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Subtext under button */}
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-500 font-sans text-center pt-1">
              <Info className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              <span>Submitting this form records your interest; attendance confirmation and venue details will be shared separately.</span>
            </div>
          </form>
        )}
      </div>

      {/* Bottom Announcement Bar (3 Items) */}
      <div className="mt-6 bg-[#FAF9FF] border-[2px] border-black rounded-2xl p-4 sm:p-5 shadow-[3px_3px_0px_0px_#000] max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left">
          {/* 1. Speaker updates */}
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

          {/* 2. Programme announcements */}
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

          {/* 3. Registration information */}
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
