import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  User,
  Mail,
  Phone,
  Building2,
  Briefcase,
  CheckCircle2,
  Check,
  Send,
  ChevronDown,
} from 'lucide-react';
import { WhatsAppIcon } from '../ui/SocialIcons.jsx';
import { sendInterestSubmission } from '../../utils/webhookApi.js';
import { eventData } from '../../data/event.js';
import DncSignpost from './DncSignpost.jsx';
import DncSectionFlanks from './DncSectionFlanks.jsx';

export const DncInterestForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: 'P. R. Pote Patil College of Engineering and Management (PRPCEM)',
    role: 'Student (PRPCEM)',
    interests: ['.NET 11 & C# 14', 'Azure Cloud & Serverless'],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const roleDropdownRef = useRef(null);

  const roleOptions = [
    {
      value: 'Student (PRPCEM)',
      label: 'Student @ PRPCEM Amravati',
    },
    {
      value: 'Student (Other Institution)',
      label: 'Student (Other College / University)',
    },
    {
      value: 'Working Professional / Developer',
      label: 'Working Software Developer / Engineer',
    },
    {
      value: 'Open Source Contributor',
      label: 'Open Source Contributor / Community Lead',
    },
    {
      value: 'Faculty / Educator',
      label: 'Faculty / Educator',
    },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (roleDropdownRef.current && !roleDropdownRef.current.contains(e.target)) {
        setIsRoleDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const techPills = [
    '.NET 11 & C# 14',
    'Azure Cloud & Serverless',
    'Generative AI & Copilot',
    'Full-Stack Web & Blazor',
    'Hands-on Code Labs',
    'Community Swag & Certificates',
  ];

  const handleToggleInterest = (tech) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(tech);
      return {
        ...prev,
        interests: exists
          ? prev.interests.filter((item) => item !== tech)
          : [...prev.interests, tech],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please fill in your name, email, and WhatsApp contact number.');
      return;
    }

    setIsSubmitting(true);
    try {
      await sendInterestSubmission({
        ...formData,
        interests: formData.interests.join(', '),
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission failed:', err);
      // Even if network glitches, confirm to user since local cache saved it
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register-interest" className="py-6 sm:py-10 px-3 sm:px-6 max-w-4xl mx-auto scroll-mt-20 relative">
      <DncSectionFlanks
        leftIndex="08"
        leftTag="ACCESS"
        leftBadgeText="🟢 PRIORITY ENTRY"
        leftBadgeColor="bg-[#25D366] text-black"
        leftSub="LIMITED DELEGATES"
        rightIndex="FREE"
        rightTag="DELEGATE"
        rightBadgeText="✦ 100% COMMUNITY"
        rightBadgeColor="bg-[#FFE600] text-black"
        rightSub="PASS REGISTRATION"
      />
      {/* Signpost */}
      <DncSignpost 
        title="REGISTER YOUR INTEREST" 
        badge="PRIORITY PASS"
        theme="purple"
      />

      <div className="bg-white border-[2.5px] sm:border-[3px] border-black rounded-3xl p-5 sm:p-8 md:p-10 shadow-[5px_5px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000]">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 bg-[#EEEAFB] text-[#512BD4] font-mono font-bold text-[11px] sm:text-xs px-3.5 py-1 rounded-full border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_#000] mb-2.5 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#512BD4]" />
            <span>Priority Delegate Access</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#14053A] font-sans uppercase tracking-tight mb-2 sm:mb-3 leading-tight">
            Register Your Interest
          </h3>

          <p className="text-stone-700 font-sans text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            Be the first to receive seat confirmations, speaker announcements, and official entry passes for .NET Conf 2026 Amravati.
          </p>
        </div>

        {isSubmitted ? (
          /* Success State */
          <div className="bg-[#E8F5E9] border-[2px] sm:border-[2.5px] border-black rounded-2xl p-6 sm:p-10 text-center shadow-[4px_4px_0px_0px_#000] space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="w-16 h-16 rounded-full bg-[#4CAF50] text-white border-[2px] border-black flex items-center justify-center text-3xl mx-auto shadow-[2px_2px_0px_0px_#000]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h4 className="text-2xl sm:text-3xl font-black font-sans text-[#14053A] uppercase">
              Interest Recorded Successfully!
            </h4>

            <p className="text-sm sm:text-base text-stone-800 font-sans max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-[#512BD4]">{formData.fullName}</strong>! Your expression of interest has been registered. Priority delegate updates will be sent to your registered email and WhatsApp.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={eventData.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-black font-mono font-bold text-xs sm:text-sm border-[2px] border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center gap-2 transition-all hover:translate-x-[1px] hover:translate-y-[1px] cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-black" />
                <span>Join Official WhatsApp Community ↗</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    college: 'P. R. Pote Patil College of Engineering and Management (PRPCEM)',
                    role: 'Student (PRPCEM)',
                    interests: ['.NET 11 & C# 14', 'Azure Cloud & Serverless'],
                  });
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white hover:bg-stone-100 text-black font-mono font-bold text-xs sm:text-sm border-[2px] border-black shadow-[2px_2px_0px_0px_#000] transition-all cursor-pointer"
              >
                Submit Another Response
              </button>
            </div>
          </div>
        ) : (
          /* Active Form */
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 text-left">
            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-50 border-[2px] border-red-600 text-red-800 text-xs sm:text-sm font-mono font-bold">
                {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {/* Full Name */}
              <div className="space-y-1">
                <label htmlFor="dnc-fullName" className="text-xs font-mono font-bold text-black uppercase flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#512BD4]" />
                  <span>Full Name *</span>
                </label>
                <input
                  id="dnc-fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border-[2px] border-black text-sm font-sans font-medium text-black bg-[#FAF8FF] focus:bg-white focus:shadow-[2.5px_2.5px_0px_0px_#512BD4] focus:outline-none transition-all"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-1">
                <label htmlFor="dnc-email" className="text-xs font-mono font-bold text-black uppercase flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#0078D4]" />
                  <span>Email Address *</span>
                </label>
                <input
                  id="dnc-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border-[2px] border-black text-sm font-sans font-medium text-black bg-[#FAF8FF] focus:bg-white focus:shadow-[2.5px_2.5px_0px_0px_#512BD4] focus:outline-none transition-all"
                />
              </div>

              {/* WhatsApp / Phone Number */}
              <div className="space-y-1">
                <label htmlFor="dnc-phone" className="text-xs font-mono font-bold text-black uppercase flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp / Mobile Number *</span>
                </label>
                <input
                  id="dnc-phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border-[2px] border-black text-sm font-sans font-medium text-black bg-[#FAF8FF] focus:bg-white focus:shadow-[2.5px_2.5px_0px_0px_#512BD4] focus:outline-none transition-all"
                />
              </div>

              {/* Role / Category Custom Dropdown */}
              <div className="space-y-1" ref={roleDropdownRef}>
                <label htmlFor="dnc-role-btn" className="text-xs font-mono font-bold text-black uppercase flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-[#D600AA]" />
                  <span>Role / Category *</span>
                </label>
                <div className="relative w-full">
                  <button
                    type="button"
                    id="dnc-role-btn"
                    onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                    className="w-full px-3.5 py-2.5 rounded-xl border-[2px] border-black text-left text-sm font-sans font-medium text-black bg-[#FAF8FF] flex items-center justify-between cursor-pointer focus:shadow-[2.5px_2.5px_0px_0px_#512BD4] focus:outline-none"
                  >
                    <span className="truncate">
                      {roleOptions.find((r) => r.value === formData.role)?.label || 'Select your role'}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#512BD4] shrink-0 transition-transform ${
                        isRoleDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isRoleDropdownOpen && (
                    <div className="absolute z-40 left-0 right-0 top-full mt-1 bg-white rounded-xl border-[2px] border-black shadow-[4px_4px_0px_0px_#000] overflow-hidden py-1 animate-in fade-in duration-150">
                      {roleOptions.map((opt) => {
                        const isSelected = formData.role === opt.value;
                        return (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, role: opt.value });
                              setIsRoleDropdownOpen(false);
                            }}
                            className={`w-full text-left px-3.5 py-2 text-xs sm:text-sm font-sans font-medium flex items-center justify-between transition-colors cursor-pointer ${
                              isSelected
                                ? 'bg-[#EEEAFB] text-[#512BD4] font-bold'
                                : 'text-black hover:bg-stone-50'
                            }`}
                          >
                            <span className="truncate">{opt.label}</span>
                            {isSelected && <Check className="w-4 h-4 text-[#512BD4] shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* College / Organization */}
            <div className="space-y-1">
              <label htmlFor="dnc-college" className="text-xs font-mono font-bold text-black uppercase flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#512BD4]" />
                <span>College / Institution / Organization *</span>
              </label>
              <input
                id="dnc-college"
                type="text"
                required
                value={formData.college}
                onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border-[2px] border-black text-sm font-sans font-medium text-black bg-[#FAF8FF] focus:bg-white focus:shadow-[2.5px_2.5px_0px_0px_#512BD4] focus:outline-none transition-all"
              />
            </div>

            {/* Topics You're Most Excited About */}
            <div className="space-y-2 pt-2 border-t-[1.5px] border-black/15">
              <span className="text-xs font-mono font-bold text-black uppercase block">
                Topics You're Most Excited About:
              </span>
              <div className="flex flex-wrap gap-2">
                {techPills.map((tech) => {
                  const isSelected = formData.interests.includes(tech);
                  return (
                    <button
                      key={tech}
                      type="button"
                      onClick={() => handleToggleInterest(tech)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border-[2px] border-black transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#512BD4] text-white shadow-[2px_2px_0px_0px_#000] -translate-y-0.5'
                          : 'bg-white text-black hover:bg-stone-50 shadow-[1px_1px_0px_0px_#000]'
                      }`}
                    >
                      {isSelected ? '✓ ' : '+ '}
                      {tech}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#512BD4] hover:bg-[#4322B0] text-white font-mono font-black text-sm sm:text-base uppercase border-[2.5px] border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[1.5px_1.5px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>SUBMITTING RESPONSE...</span>
                ) : (
                  <>
                    <span>SUBMIT EXPRESSION OF INTEREST</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

      </div>
    </section>
  );
};

export default DncInterestForm;
