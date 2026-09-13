import React, { useState } from 'react';
import { Sparkles, User, Mail, Phone, Building2, CheckCircle2, Send, ArrowRight } from 'lucide-react';
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
    interests: ['.NET 11 & C# 14', 'Azure Cloud'],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EEEAFB] text-[#512BD4] text-xs font-bold uppercase tracking-wider mb-3 border border-[#DCD5F6]">
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

        {/* Form Container Card */}
        <div className="bg-white rounded-3xl border-2 border-[#DCD5F6] shadow-xl p-6 sm:p-8 md:p-10 relative overflow-hidden">
          
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
                      interests: ['.NET 11 & C# 14', 'Azure Cloud'],
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
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-semibold">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                
                {/* Full Name */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="fullName" className="text-xs sm:text-sm font-bold text-[#14053A] flex items-center gap-1.5">
                    <User className="w-4 h-4 text-[#512BD4]" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DCD5F6] focus:border-[#512BD4] focus:ring-2 focus:ring-[#512BD4]/20 outline-none text-sm text-[#14053A] transition-all"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="email" className="text-xs sm:text-sm font-bold text-[#14053A] flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-[#512BD4]" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="e.g. yourname@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DCD5F6] focus:border-[#512BD4] focus:ring-2 focus:ring-[#512BD4]/20 outline-none text-sm text-[#14053A] transition-all"
                  />
                </div>

                {/* WhatsApp / Phone Number */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="phone" className="text-xs sm:text-sm font-bold text-[#14053A] flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp / Mobile Number *</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="e.g. +91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DCD5F6] focus:border-[#512BD4] focus:ring-2 focus:ring-[#512BD4]/20 outline-none text-sm text-[#14053A] transition-all"
                  />
                </div>

                {/* Current Role / Year */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="role" className="text-xs sm:text-sm font-bold text-[#14053A] flex items-center gap-1.5">
                    <span>Role / Category</span>
                  </label>
                  <select
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DCD5F6] focus:border-[#512BD4] focus:ring-2 focus:ring-[#512BD4]/20 outline-none text-sm text-[#14053A] bg-white transition-all"
                  >
                    <option value="Student (PRPCEM)">Student @ PRPCEM Amravati</option>
                    <option value="Student (Other Institution)">Student (Other College / University)</option>
                    <option value="Working Professional / Developer">Working Software Developer / Engineer</option>
                    <option value="Open Source Contributor">Open Source Contributor / Community Lead</option>
                    <option value="Faculty / Educator">Faculty / Educator</option>
                  </select>
                </div>

              </div>

              {/* College / Organization */}
              <div className="space-y-1.5 text-left">
                <div className="flex items-center justify-between">
                  <label htmlFor="college" className="text-xs sm:text-sm font-bold text-[#14053A] flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#512BD4]" />
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
                    className="text-[11px] font-bold text-[#512BD4] hover:underline cursor-pointer"
                  >
                    Set PRPCEM
                  </button>
                </div>
                <input
                  id="college"
                  type="text"
                  required
                  placeholder="e.g. P. R. Pote Patil College of Engineering & Management"
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DCD5F6] focus:border-[#512BD4] focus:ring-2 focus:ring-[#512BD4]/20 outline-none text-sm text-[#14053A] transition-all"
                />
              </div>

              {/* Topics of Interest */}
              <div className="space-y-2 text-left pt-2 border-t border-[#F0ECFC]">
                <span className="text-xs sm:text-sm font-bold text-[#14053A] block">
                  Topics You're Most Excited About (Select all that apply):
                </span>
                <div className="flex flex-wrap gap-2">
                  {techPills.map((tech) => {
                    const isSelected = formData.interests.includes(tech);
                    return (
                      <button
                        key={tech}
                        type="button"
                        onClick={() => handleToggleInterest(tech)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-[#512BD4] text-white border-[#512BD4] shadow-xs'
                            : 'bg-white text-[#14053A]/80 border-[#DCD5F6] hover:border-[#512BD4]'
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
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#512BD4] to-[#D600AA] hover:from-[#4323B5] hover:to-[#B50090] text-white font-bold text-sm sm:text-base shadow-md flex items-center justify-center gap-2 transition-all hover:scale-101 active:scale-99 disabled:opacity-60 cursor-pointer"
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
    </section>
  );
};

export default InterestForm;
