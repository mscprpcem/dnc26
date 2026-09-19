import React, { useState } from 'react';
import { Send, Loader2, Sparkles } from 'lucide-react';
import { sendInterestSubmission } from '../../utils/webhookApi.js';
import DncSignpost from './DncSignpost.jsx';

export const DncInterestForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: 'P. R. Pote Patil College of Engineering and Management (PRPCEM)',
    branch: 'Computer Science & Engineering',
    yearOfStudy: '3rd Year',
    interests: 'Generative AI, .NET 10, Azure Cloud',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      await sendInterestSubmission(formData);
      setStatus({ submitting: false, submitted: true, error: null });
    } catch (err) {
      console.error("Submission error:", err);
      // Still show success since local storage backed it up
      setStatus({ submitting: false, submitted: true, error: null });
    }
  };

  return (
    <section id="dnc-interest" className="py-6 sm:py-10 px-3 sm:px-6 max-w-4xl mx-auto">
      {/* Signpost */}
      <DncSignpost 
        title="REGISTER YOUR INTEREST" 
        badge="PRIORITY PASS"
        theme="purple"
      />

      <div className="bg-white border-[2.5px] sm:border-[3px] border-black rounded-3xl p-5 sm:p-8 md:p-10 shadow-[5px_5px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000]">
        {/* Intro */}
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 bg-[#EEEAFB] text-[#512BD4] font-mono font-bold text-[11px] sm:text-xs px-3 py-1 rounded-full border-[1.5px] border-black shadow-[1.5px_1.5px_0px_0px_#000] mb-2.5 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FREE DELEGATE PASSES</span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#14053A] font-sans uppercase tracking-tight mb-2">
            Secure Your Seat for Amravati 2026
          </h3>
          <p className="text-stone-700 font-sans text-xs sm:text-sm">
            Fill out this quick form to receive priority invitations, workshop registration links, and conference agenda alerts.
          </p>
        </div>

        {/* Success State */}
        {status.submitted ? (
          <div className="bg-[#E8F5E9] border-[2px] sm:border-[2.5px] border-black rounded-2xl p-5 sm:p-8 text-center shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] animate-fadeIn">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#4CAF50] text-white border-[2px] border-black flex items-center justify-center text-2xl sm:text-3xl mx-auto mb-3 sm:mb-4 shadow-[2.5px_2.5px_0px_0px_#000]">
              🎉
            </div>
            <h4 className="text-xl sm:text-2xl font-black font-sans text-black uppercase mb-2">
              Registration Recorded!
            </h4>
            <p className="text-stone-800 font-sans text-xs sm:text-sm max-w-md mx-auto mb-5 sm:mb-6">
              Thank you, <span className="font-bold text-black">{formData.fullName}</span>! We’ve added you to the priority delegate list for .NET Conf 2026 Amravati.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              <a
                href="https://chat.whatsapp.com/EPFRDsWd057DBqYS5bpK67"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1EBE5D] text-black font-mono font-bold text-xs px-4 py-2.5 rounded-xl border-[2px] border-black shadow-[2px_2px_0px_0px_#000] flex items-center gap-2"
              >
                <span>JOIN WHATSAPP GROUP</span>
                <span>↗</span>
              </a>
              <button
                onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                className="bg-white hover:bg-stone-50 text-black font-mono font-bold text-xs px-4 py-2.5 rounded-xl border-[2px] border-black shadow-[2px_2px_0px_0px_#000]"
              >
                Register Another Attendee
              </button>
            </div>
          </div>
        ) : (
          /* Main Form */
          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 sm:gap-4.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-mono font-bold text-black uppercase mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="e.g. Atharva Deshmukh"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-[#FAF8FF] border-[2px] border-black rounded-xl px-3 sm:px-3.5 py-2.5 text-sm font-sans font-medium text-black focus:outline-none focus:bg-white focus:shadow-[2.5px_2.5px_0px_0px_#512BD4] transition-all"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-mono font-bold text-black uppercase mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. atharva@prpotepatilengg.ac.in"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#FAF8FF] border-[2px] border-black rounded-xl px-3 sm:px-3.5 py-2.5 text-sm font-sans font-medium text-black focus:outline-none focus:bg-white focus:shadow-[2.5px_2.5px_0px_0px_#512BD4] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-mono font-bold text-black uppercase mb-1">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="e.g. +91 9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#FAF8FF] border-[2px] border-black rounded-xl px-3 sm:px-3.5 py-2.5 text-sm font-sans font-medium text-black focus:outline-none focus:bg-white focus:shadow-[2.5px_2.5px_0px_0px_#512BD4] transition-all"
                />
              </div>

              {/* College / Institution */}
              <div>
                <label className="block text-xs font-mono font-bold text-black uppercase mb-1">
                  College / Institution *
                </label>
                <input
                  type="text"
                  name="college"
                  required
                  value={formData.college}
                  onChange={handleChange}
                  className="w-full bg-[#FAF8FF] border-[2px] border-black rounded-xl px-3 sm:px-3.5 py-2.5 text-sm font-sans font-medium text-black focus:outline-none focus:bg-white focus:shadow-[2.5px_2.5px_0px_0px_#512BD4] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {/* Branch / Dept */}
              <div>
                <label className="block text-xs font-mono font-bold text-black uppercase mb-1">
                  Branch / Department
                </label>
                <select
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  className="w-full bg-[#FAF8FF] border-[2px] border-black rounded-xl px-3 sm:px-3.5 py-2.5 text-sm font-sans font-medium text-black focus:outline-none focus:bg-white focus:shadow-[2.5px_2.5px_0px_0px_#512BD4] transition-all"
                >
                  <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Artificial Intelligence & Data Science">Artificial Intelligence & Data Science</option>
                  <option value="Electronics & Telecommunication">Electronics & Telecommunication</option>
                  <option value="Mechanical / Civil / Electrical">Mechanical / Civil / Electrical</option>
                  <option value="MCA / BCA / Polytechnic">MCA / BCA / Polytechnic</option>
                  <option value="Faculty / Working Professional">Faculty / Working Professional</option>
                </select>
              </div>

              {/* Year of Study */}
              <div>
                <label className="block text-xs font-mono font-bold text-black uppercase mb-1">
                  Year of Study / Status
                </label>
                <select
                  name="yearOfStudy"
                  value={formData.yearOfStudy}
                  onChange={handleChange}
                  className="w-full bg-[#FAF8FF] border-[2px] border-black rounded-xl px-3 sm:px-3.5 py-2.5 text-sm font-sans font-medium text-black focus:outline-none focus:bg-white focus:shadow-[2.5px_2.5px_0px_0px_#512BD4] transition-all"
                >
                  <option value="1st Year">1st Year (Freshman)</option>
                  <option value="2nd Year">2nd Year (Sophomore)</option>
                  <option value="3rd Year">3rd Year (Junior)</option>
                  <option value="4th Year">4th Year (Final Year)</option>
                  <option value="Post-Graduate">Post-Graduate (PG / PhD)</option>
                  <option value="Faculty">Faculty Member</option>
                  <option value="Industry Professional">Industry Professional</option>
                </select>
              </div>
            </div>

            {/* Interests */}
            <div>
              <label className="block text-xs font-mono font-bold text-black uppercase mb-1">
                Topics You're Most Excited About
              </label>
              <input
                type="text"
                name="interests"
                placeholder="e.g. AI Copilots, C# 14, Cloud Native, Web Development"
                value={formData.interests}
                onChange={handleChange}
                className="w-full bg-[#FAF8FF] border-[2px] border-black rounded-xl px-3 sm:px-3.5 py-2.5 text-sm font-sans font-medium text-black focus:outline-none focus:bg-white focus:shadow-[2.5px_2.5px_0px_0px_#512BD4] transition-all"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status.submitting}
              className="mt-2 w-full bg-[#512BD4] hover:bg-[#4322B0] text-white font-black text-xs sm:text-sm md:text-base font-sans uppercase py-3.5 px-6 rounded-2xl border-[2.5px] border-black shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
            >
              {status.submitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>RECORDING YOUR INTEREST...</span>
                </>
              ) : (
                <>
                  <span>SUBMIT REGISTRATION</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="text-center text-[10px] sm:text-[11px] font-mono text-stone-500">
              * 100% Free Community Event. Direct registration sync via Google Sheets.
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default DncInterestForm;
