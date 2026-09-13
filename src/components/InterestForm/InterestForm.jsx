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
  ArrowRight,
  ChevronDown,
} from 'lucide-react';
import { WhatsAppIcon } from '../ui/SocialIcons.jsx';
import { sendInterestSubmission } from '../../utils/webhookApi.js';
import { eventData } from '../../data/event.js';

export const InterestForm = () => {
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
      color: 'bg-[#512BD4]',
    },
    {
      value: 'Student (Other Institution)',
      label: 'Student (Other College / University)',
      color: 'bg-[#0284C7]',
    },
    {
      value: 'Working Professional / Developer',
      label: 'Working Software Developer / Engineer',
      color: 'bg-[#059669]',
    },
    {
      value: 'Open Source Contributor',
      label: 'Open Source Contributor / Community Lead',
      color: 'bg-[#DB2777]',
    },
    {
      value: 'Faculty / Educator',
      label: 'Faculty / Educator',
      color: 'bg-[#D97706]',
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
      setErrorMessage('Something went wrong. Please try again or reach out on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register-interest" className="w-full py-12 sm:py-16 md:py-20 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#EEEAFB] to-[#FCE7F8] text-[#512BD4] text-xs font-bold uppercase tracking-wider mb-3 border border-[#CBBBF6] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#512BD4]" />
            <span>Priority Delegate Access</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-[#14053A] mb-3 leading-tight">
            Register Your <span className="community-event-gradient-text">Interest</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#190649]/80 leading-relaxed font-medium">
            Be the first to receive seat confirmations, speaker announcements, and official entry passes for .NET Conf 2026 Amravati.
          </p>
        </div>

        {/* Form Container Card - Rich Colorful Styling & Clean Proportions */}
        <div className="bg-gradient-to-br from-white via-[#FCFAFF] to-[#F5F0FD] rounded-2xl sm:rounded-3xl border-2 border-[#D8CEF7] shadow-xl shadow-[#512BD4]/10 relative overflow-hidden">
          
          {/* Top Signature .NET Conf Gradient Stripe */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#512BD4] via-[#7B2BF9] to-[#D600AA]" />

          <div className="p-5 sm:p-8 md:p-10">
            {isSubmitted ? (
              /* Success State */
              <div className="text-center py-8 sm:py-12 space-y-5 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-black font-display text-[#14053A]">
                    Interest Recorded Successfully!
                  </h3>
                  <p className="text-sm sm:text-base text-[#190649]/80 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#512BD4]">{formData.fullName}</strong>! Your expression of interest has been registered. Priority delegate updates will be sent to your registered email and WhatsApp.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={eventData.socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all hover:scale-102 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-white" />
                    <span>Join Official WhatsApp Community</span>
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
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#EEEAFB] hover:bg-[#DCD5F6] text-[#512BD4] font-bold text-sm transition-all cursor-pointer"
                  >
                    Submit Another Response
                  </button>
                </div>
              </div>
            ) : (
              /* Active Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {errorMessage && (
                  <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-semibold">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 min-w-0">
                  
                  {/* Full Name */}
                  <div className="space-y-1.5 text-left min-w-0">
                    <label htmlFor="fullName" className="text-xs sm:text-sm font-bold text-[#14053A] flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-[#EEEAFB] text-[#512BD4] flex items-center justify-center shrink-0">
                        <User className="w-3 h-3" />
                      </span>
                      <span>Full Name *</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border-2 border-[#D8CEF7] hover:border-[#9C7DF5] focus:border-[#512BD4] focus:outline-none text-sm font-medium text-[#14053A] bg-white transition-colors shadow-2xs"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5 text-left min-w-0">
                    <label htmlFor="email" className="text-xs sm:text-sm font-bold text-[#14053A] flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-[#E6F2FF] text-[#0078D4] flex items-center justify-center shrink-0">
                        <Mail className="w-3 h-3" />
                      </span>
                      <span>Email Address *</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border-2 border-[#D8CEF7] hover:border-[#9C7DF5] focus:border-[#512BD4] focus:outline-none text-sm font-medium text-[#14053A] bg-white transition-colors shadow-2xs"
                    />
                  </div>

                  {/* WhatsApp / Phone Number */}
                  <div className="space-y-1.5 text-left min-w-0">
                    <label htmlFor="phone" className="text-xs sm:text-sm font-bold text-[#14053A] flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-[#E8F8EE] text-[#128C7E] flex items-center justify-center shrink-0">
                        <Phone className="w-3 h-3" />
                      </span>
                      <span>WhatsApp / Mobile Number *</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border-2 border-[#D8CEF7] hover:border-[#9C7DF5] focus:border-[#512BD4] focus:outline-none text-sm font-medium text-[#14053A] bg-white transition-colors shadow-2xs"
                    />
                  </div>

                  {/* Current Role / Category - Custom Styled Dropdown (No OS Grey, No Oversized Oval) */}
                  <div className="space-y-1.5 text-left min-w-0" ref={roleDropdownRef}>
                    <label htmlFor="role-btn" className="text-xs sm:text-sm font-bold text-[#14053A] flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-[#FCE7F8] text-[#D600AA] flex items-center justify-center shrink-0">
                        <Briefcase className="w-3 h-3" />
                      </span>
                      <span>Role / Category *</span>
                    </label>
                    <div className="relative w-full">
                      <button
                        type="button"
                        id="role-btn"
                        onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                        className={`w-full pl-3.5 pr-10 py-2.5 rounded-lg border-2 text-left text-sm font-medium transition-all cursor-pointer flex items-center justify-between shadow-2xs ${
                          isRoleDropdownOpen
                            ? 'border-[#512BD4] bg-white ring-2 ring-[#512BD4]/15'
                            : 'border-[#D8CEF7] hover:border-[#9C7DF5] bg-white'
                        }`}
                      >
                        <span className="truncate text-[#14053A]">
                          {roleOptions.find((r) => r.value === formData.role)?.label || 'Select your role'}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#512BD4] shrink-0 transition-transform duration-200 ${
                            isRoleDropdownOpen ? 'rotate-180 text-[#D600AA]' : ''
                          }`}
                        />
                      </button>

                      {/* Custom Dropdown Menu with Rich Colors & Clean Highlights */}
                      {isRoleDropdownOpen && (
                        <div className="absolute z-40 left-0 right-0 top-full mt-1.5 bg-white rounded-xl border-2 border-[#D8CEF7] shadow-xl overflow-hidden py-1 animate-in fade-in slide-in-from-top-2 duration-150">
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
                                className={`w-full text-left px-3.5 py-2.5 text-xs sm:text-sm font-medium flex items-center justify-between transition-colors cursor-pointer ${
                                  isSelected
                                    ? 'bg-[#EEEAFB] text-[#512BD4] font-bold'
                                    : 'text-[#14053A] hover:bg-[#F6F3FE] hover:text-[#512BD4]'
                                }`}
                              >
                                <div className="flex items-center gap-2 min-w-0">
                                  <span
                                    className={`w-2 h-2 rounded-full shrink-0 ${
                                      isSelected ? 'bg-[#512BD4]' : 'bg-[#DCD5F6]'
                                    }`}
                                  />
                                  <span className="truncate">{opt.label}</span>
                                </div>
                                {isSelected && <Check className="w-4 h-4 text-[#512BD4] shrink-0 ml-2" />}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                </div>

                {/* College / Organization */}
                <div className="space-y-1.5 text-left min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-1.5">
                    <label htmlFor="college" className="text-xs sm:text-sm font-bold text-[#14053A] flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-[#EEEAFB] text-[#512BD4] flex items-center justify-center shrink-0">
                        <Building2 className="w-3 h-3" />
                      </span>
                      <span>College / Institution / Organization *</span>
                    </label>
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          college: 'P. R. Pote Patil College of Engineering and Management (PRPCEM)',
                        })
                      }
                      className="text-xs font-bold text-[#512BD4] hover:text-[#D600AA] bg-[#EEEAFB] hover:bg-[#E2DAFB] px-2.5 py-0.5 rounded-md transition-colors cursor-pointer"
                    >
                      Set PRPCEM
                    </button>
                  </div>
                  <input
                    id="college"
                    type="text"
                    required
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border-2 border-[#D8CEF7] hover:border-[#9C7DF5] focus:border-[#512BD4] focus:outline-none text-sm font-medium text-[#14053A] bg-white transition-colors shadow-2xs"
                  />
                </div>

                {/* Topics of Interest */}
                <div className="space-y-2.5 text-left pt-3 border-t border-[#E8E1FB] min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-[#14053A] block">
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
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer border-2 ${
                            isSelected
                              ? 'bg-gradient-to-r from-[#512BD4] to-[#8C2BF9] text-white border-transparent shadow-sm shadow-[#512BD4]/30 scale-[1.02]'
                              : 'bg-[#F4F0FD] text-[#4220A8] border-[#DCD5F6] hover:bg-[#EAE2FB] hover:border-[#512BD4]'
                          }`}
                        >
                          {isSelected ? '✓ ' : '+ '}
                          {tech}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit Button - Vibrant Gradient & Hover */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#512BD4] via-[#7B2BF9] to-[#D600AA] hover:from-[#4323B0] hover:via-[#681FD8] hover:to-[#B50090] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#512BD4]/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Expression of Interest</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default InterestForm;
