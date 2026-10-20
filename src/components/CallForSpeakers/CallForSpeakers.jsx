import React, { useState, useRef } from 'react';
import { 
  Mic, 
  Upload, 
  Image as ImageIcon, 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  Building, 
  MapPin, 
  Globe, 
  Video, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Terminal, 
  BookOpen, 
  Check, 
  Copy, 
  X,
  Clock,
  ShieldCheck,
  Send,
  HelpCircle
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon, XIcon } from '../ui/SocialIcons.jsx';
import { sendCfpSubmission } from '../../utils/webhookApi.js';
import CodeOfConductModal from '../CodeOfConduct/CodeOfConductModal.jsx';

export const CallForSpeakers = () => {
  // Form State
  const [formData, setFormData] = useState({
    headshotFile: null,
    headshotUrl: '',
    fullName: '',
    email: '',
    phone: '',
    jobTitle: '',
    company: '',
    city: '',
    country: 'India',
    bio: '',
    linkedin: '',
    github: '',
    twitter: '',
    website: '',
    pastTalks: '',
    format: 'Talk',
    track: '',
    level: 'Intermediate',
    talkTitle: '',
    abstract: '',
    takeaways: '',
    prerequisites: '',
    presentedBefore: 'No - Brand new talk',
    agreedToCodeOfConduct: false,
  });

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [headshotError, setHeadshotError] = useState('');
  const [showCocModal, setShowCocModal] = useState(false);
  
  const fileInputRef = useRef(null);

  const MIN_CHARS = {
    bio: 50,
    talkTitle: 25,
    abstract: 100,
    takeaways: 50,
    phone: 10,
  };

  const trackOptions = [
    '.NET 11 & Modern C# 14 Architecture',
    'Generative AI, Copilots & Semantic Kernel',
    'Azure Cloud-Native & Distributed Microservices',
    '.NET Aspire, Docker & Kubernetes (AKS)',
    'Full-Stack Blazor WebAssembly & Minimal APIs',
    'DevOps, GitHub Actions & High-Performance Computing',
  ];

  const formatConfigs = {
    Talk: {
      badge: '30-45 MINS',
      title: 'Talk',
      desc: 'Technical presentation on architecture, design patterns, or case studies.',
      icon: Terminal,
      titlePlaceholder: 'e.g., Architecting Resilient Real-Time Systems with .NET 11 & Distributed Actors',
      abstractPlaceholder: 'Describe your core thesis, technical architecture, performance benchmarks, and real-world production findings. (Min 100 characters)',
      takeawaysPlaceholder: '1) Key architectural trade-offs 2) Production telemetry recipes 3) Avoided failover pitfalls (Min 50 characters)',
      prereqsPlaceholder: 'e.g., General familiarity with cloud systems and C# fundamentals (Optional)',
    },
    Workshop: {
      badge: '60-90 MINS',
      title: 'Workshop',
      desc: 'Interactive guided coding session where attendees build live.',
      icon: Layers,
      titlePlaceholder: 'e.g., Hands-on Masterclass: Building End-to-End GenAI Agents with Semantic Kernel',
      abstractPlaceholder: 'Provide the workshop curriculum: what attendees will build step-by-step from zero to deployment. (Min 100 characters)',
      takeawaysPlaceholder: '1) Ready-to-fork GitHub starter template 2) Hands-on test suite 3) Deployed working cloud workload (Min 50 characters)',
      prereqsPlaceholder: 'e.g., Laptop with VS Code / Visual Studio, Docker Desktop, GitHub account (Optional)',
    },
    Panel: {
      badge: '45 MINS',
      title: 'Panel',
      desc: 'Participate as an industry practitioner or domain expert in a panel.',
      icon: Mic,
      titlePlaceholder: 'e.g., Panelist: The Engineering Realities of Enterprise Cloud & AI Migration',
      abstractPlaceholder: 'Outline the perspectives, controversial debate points, and lessons from the trenches you will contribute. (Min 100 characters)',
      takeawaysPlaceholder: '1) Pragmatic enterprise migration metrics 2) Cost vs reliability trade-offs 3) Team upskilling models (Min 50 characters)',
      prereqsPlaceholder: 'e.g., Open mind and relevant engineering leadership context (Optional)',
    },
  };

  const handleHeadshotChange = (e) => {
    setHeadshotError('');
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 4 * 1024 * 1024) {
      setHeadshotError('Image exceeds max allowed size of 4MB. Please upload a smaller photo.');
      return;
    }

    const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setHeadshotError('Supported formats: PNG, JPG, JPEG, WebP.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setFormData((prev) => ({
        ...prev,
        headshotFile: file,
        headshotUrl: event.target?.result || '',
      }));
    };
    reader.readAsDataURL(file);
  };

  const removeHeadshot = () => {
    setFormData((prev) => ({
      ...prev,
      headshotFile: null,
      headshotUrl: '',
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData((prev) => ({ ...prev, phone: digitsOnly }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    if (!formData.headshotUrl) {
      return 'Headshot Image is mandatory. Please upload a clear portrait photo.';
    }
    if (!formData.fullName.trim()) return 'Full Name is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) return 'A valid Email Address is required.';
    if (formData.phone.length !== 10) return 'Mobile Number must be exactly 10 digits.';
    if (!formData.jobTitle.trim()) return 'Job Title / Role is required.';
    if (!formData.company.trim()) return 'Company / Organization is required.';
    if (!formData.city.trim()) return 'City is required.';
    if (!formData.country.trim()) return 'Country is required.';
    if (formData.bio.trim().length < MIN_CHARS.bio) {
      return `Speaker Bio must have at least ${MIN_CHARS.bio} characters (${formData.bio.trim().length}/${MIN_CHARS.bio}).`;
    }
    if (!formData.linkedin.trim()) return 'LinkedIn Profile URL is required.';
    if (!formData.track) return 'Please select a Primary Technology Track.';
    if (formData.talkTitle.trim().length < MIN_CHARS.talkTitle) {
      return `Talk Title must have at least ${MIN_CHARS.talkTitle} characters (${formData.talkTitle.trim().length}/${MIN_CHARS.talkTitle}).`;
    }
    if (formData.abstract.trim().length < MIN_CHARS.abstract) {
      return `Talk Abstract must have at least ${MIN_CHARS.abstract} characters (${formData.abstract.trim().length}/${MIN_CHARS.abstract}).`;
    }
    if (formData.takeaways.trim().length < MIN_CHARS.takeaways) {
      return `Key Attendee Takeaways must have at least ${MIN_CHARS.takeaways} characters (${formData.takeaways.trim().length}/${MIN_CHARS.takeaways}).`;
    }
    if (!formData.agreedToCodeOfConduct) {
      return 'You must agree to the Code of Conduct and submission authenticity.';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    const error = validateForm();
    if (error) {
      setErrorMessage(error);
      const errEl = document.getElementById('cfp-normal-error-banner');
      if (errEl) errEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await sendCfpSubmission(formData);
      setSubmittedData({
        ...formData,
        proposalId: res.proposalId || `DNC26-CFP-${Math.floor(1000 + Math.random() * 9000)}`,
        submittedAt: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }),
      });
      setIsSubmitted(true);
      window.scrollTo({
        top: (document.getElementById('cfp')?.offsetTop || 200) - 80,
        behavior: 'smooth',
      });
    } catch (err) {
      setErrorMessage('Something went wrong submitting your proposal. Please try again or reach out to dotnetconfamt@prpotepatilengg.ac.in');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      headshotFile: null,
      headshotUrl: '',
      fullName: '',
      email: '',
      phone: '',
      jobTitle: '',
      company: '',
      city: '',
      country: 'India',
      bio: '',
      linkedin: '',
      github: '',
      twitter: '',
      website: '',
      pastTalks: '',
      format: 'Talk',
      track: '',
      level: 'Intermediate',
      talkTitle: '',
      abstract: '',
      takeaways: '',
      prerequisites: '',
      presentedBefore: 'No - Brand new talk',
      agreedToCodeOfConduct: false,
    });
    setErrorMessage('');
  };

  const copySummaryToClipboard = () => {
    if (!submittedData) return;
    const summary = `
.NET Conf 2026 Amravati - CFP Submission
Proposal ID: ${submittedData.proposalId}
Speaker: ${submittedData.fullName} (${submittedData.jobTitle} @ ${submittedData.company})
Session Title: ${submittedData.talkTitle}
Format: ${submittedData.format}
Track: ${submittedData.track}
Audience: ${submittedData.level}
    `.trim();

    navigator.clipboard.writeText(summary).then(() => {
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 3000);
    });
  };

  const currentConfig = formatConfigs[formData.format] || formatConfigs.Talk;

  return (
    <section id="cfp" className="w-full py-12 sm:py-16 md:py-20 scroll-mt-20">
      {/* Anchor for alternative #speakers and #call-for-speakers links */}
      <div id="speakers" className="scroll-mt-28" />
      <div id="call-for-speakers" className="scroll-mt-28" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EEEAFB] text-[#512BD4] text-xs font-bold uppercase tracking-wider mb-3 border border-[#DCD5F6]">
            <Mic className="w-3.5 h-3.5" />
            <span>Speaker Submissions · 2026 Edition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-[#14053A] mb-3 leading-tight">
            Call for Proposals &amp; <span className="community-event-gradient-text">Speaker Lineup</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#190649]/75 leading-relaxed">
            Present your talk, architecture case study, or hands-on workshop at Central India’s premier Microsoft developer conference. All submissions are reviewed by our Technical Advisory Board.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="relative bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border-2 border-[#DCD5F6] shadow-xl overflow-hidden p-6 sm:p-8 md:p-10 lg:p-12 transition-all">
          
          {/* Top Multi-Color Accent Bar */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#512BD4] via-[#D600AA] to-[#28C2D1]" />

          {/* SUBMITTED SUCCESS STATE */}
          {isSubmitted && submittedData ? (
            <div className="bg-[#F0FDF4] border border-[#86EFAC] rounded-2xl p-6 sm:p-10 shadow-sm animate-in fade-in zoom-in-95 duration-200">
              <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                <div className="w-16 h-16 rounded-full bg-[#16A34A] flex items-center justify-center text-white mb-4 shadow-md shadow-green-500/20">
                  <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
                </div>

                <div className="inline-block bg-[#16A34A] text-white font-mono font-bold text-xs px-3.5 py-1 rounded-full uppercase mb-2">
                  Proposal ID: {submittedData.proposalId}
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#14053A] font-display mb-2">
                  Proposal Submitted Successfully!
                </h3>

                <p className="text-xs sm:text-sm text-[#190649]/80 mb-6 leading-relaxed">
                  Thank you, <strong className="text-[#14053A]">{submittedData.fullName}</strong>! Your session proposal has been received by the <strong className="text-[#14053A]">.NET Conf 2026 Technical Review Board</strong>.
                </p>

                {/* Proposal Summary Card */}
                <div className="w-full bg-white border border-[#DCD5F6] rounded-xl p-5 text-left mb-6 shadow-xs space-y-3 font-sans">
                  <div>
                    <div className="text-[11px] font-mono font-bold uppercase text-[#512BD4]">Session Title</div>
                    <div className="text-base sm:text-lg font-bold text-[#14053A]">{submittedData.talkTitle}</div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-[#DCD5F6]/60">
                    <div>
                      <div className="text-[11px] font-mono font-bold uppercase text-[#512BD4]">Format</div>
                      <div className="text-xs sm:text-sm font-semibold text-[#14053A]">{submittedData.format}</div>
                    </div>
                    <div>
                      <div className="text-[11px] font-mono font-bold uppercase text-[#512BD4]">Track</div>
                      <div className="text-xs sm:text-sm font-semibold text-[#14053A]">{submittedData.track}</div>
                    </div>
                    <div>
                      <div className="text-[11px] font-mono font-bold uppercase text-[#512BD4]">Audience Level</div>
                      <div className="text-xs sm:text-sm font-semibold text-[#14053A]">{submittedData.level}</div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#DCD5F6]/60">
                    <div className="text-[11px] font-mono font-bold uppercase text-[#512BD4]">Speaker Profile</div>
                    <div className="text-xs sm:text-sm text-[#190649]/80">
                      {submittedData.fullName} • {submittedData.jobTitle} at {submittedData.company} ({submittedData.city}, {submittedData.country})
                    </div>
                  </div>
                </div>

                {/* What Happens Next Steps */}
                <div className="w-full bg-[#FAF8FF] border border-[#DCD5F6] rounded-xl p-4 text-left mb-6 text-xs font-sans">
                  <div className="font-bold text-[#512BD4] uppercase font-mono mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#512BD4]" />
                    <span>What happens next?</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 text-[#190649]/75">
                    <li>Our technical review committee evaluates sessions on clarity, technical depth, and actionable takeaways.</li>
                    <li>Accepted speakers receive complimentary speaker delegate access, official stage slots, and speaker kits.</li>
                    <li>Official schedule updates and notifications will be sent to <strong className="text-[#14053A]">{submittedData.email}</strong>.</li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3 w-full">
                  <button
                    type="button"
                    onClick={copySummaryToClipboard}
                    className="bg-white hover:bg-stone-50 text-[#14053A] font-bold text-xs uppercase px-4 py-2.5 rounded-xl border border-[#DCD5F6] shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    {copiedSummary ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedSummary ? 'Copied to Clipboard' : 'Copy Summary'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="dotnet-solid-btn-accent text-xs py-2.5 px-5 shadow-xs cursor-pointer"
                  >
                    Submit Another Proposal
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* CFP PROPOSAL SUBMISSION FORM */
            <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
              
              {/* Error Banner */}
              {errorMessage && (
                <div 
                  id="cfp-normal-error-banner"
                  className="bg-red-50 border border-red-300 rounded-xl p-4 flex items-start gap-3 animate-in shake duration-200"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div className="flex-1 text-xs sm:text-sm font-semibold text-red-800">
                    {errorMessage}
                  </div>
                </div>
              )}

              {/* ========================================================
                  SECTION 1: SPEAKER INFORMATION
              ======================================================== */}
              <div>
                <div className="flex items-center gap-2.5 pb-3 mb-6 border-b border-[#DCD5F6]/70">
                  <div className="w-8 h-8 rounded-xl bg-[#512BD4] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                    1
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-display text-[#14053A]">
                      Speaker Profile &amp; Contact Details
                    </h3>
                    <p className="text-xs text-[#190649]/65">Introduce yourself to attendees and the review committee</p>
                  </div>
                </div>

                {/* Headshot Upload Row */}
                <div className="mb-6 bg-[#FAF8FF] border border-[#DCD5F6] rounded-2xl p-4 sm:p-6">
                  <label className="block text-xs font-bold text-[#14053A] mb-1">
                    Speaker Headshot Portrait <span className="text-red-500">*</span>
                  </label>
                  <p className="text-xs text-[#190649]/70 mb-3">
                    A clear, professional photo used on speaker announcements, web badges, and schedule slides (Max 4MB, JPG/PNG/WebP).
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                    {/* Preview box */}
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl border-2 border-[#DCD5F6] bg-white overflow-hidden flex items-center justify-center shrink-0 shadow-xs">
                      {formData.headshotUrl ? (
                        <>
                          <img
                            src={formData.headshotUrl}
                            alt="Speaker Headshot Preview"
                            className="w-full h-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={removeHeadshot}
                            className="absolute top-1 right-1 p-1 bg-red-600 text-white rounded-full hover:bg-red-700 shadow-md cursor-pointer"
                            title="Remove Photo"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </>
                      ) : (
                        <div className="flex flex-col items-center justify-center text-center p-2 text-stone-400">
                          <ImageIcon className="w-8 h-8 text-[#512BD4]/40 mb-1" />
                          <span className="text-[10px] font-bold text-[#512BD4]">No Photo</span>
                        </div>
                      )}
                    </div>

                    {/* Upload actions */}
                    <div className="flex-1 w-full text-center sm:text-left">
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/png,image/jpeg,image/jpg,image/webp"
                        onChange={handleHeadshotChange}
                        className="hidden"
                        id="cfp-headshot-input-normal"
                      />
                      <label
                        htmlFor="cfp-headshot-input-normal"
                        className="dotnet-solid-btn-accent text-xs py-2.5 px-4 rounded-xl inline-flex items-center gap-2 cursor-pointer shadow-xs"
                      >
                        <Upload className="w-3.5 h-3.5" />
                        <span>{formData.headshotUrl ? 'Change Portrait Photo' : 'Upload Speaker Photo'}</span>
                      </label>
                      {headshotError && (
                        <p className="text-xs text-red-600 font-bold mt-2">{headshotError}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Name, Email, Phone 3-Col Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-bold text-[#14053A] mb-1">
                      Full Legal Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g., Alex Johnson"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD5F6] bg-[#FBFBFE] text-xs sm:text-sm text-[#14053A] focus:outline-none focus:border-[#512BD4] focus:ring-2 focus:ring-[#512BD4]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#14053A] mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="speaker@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD5F6] bg-[#FBFBFE] text-xs sm:text-sm text-[#14053A] focus:outline-none focus:border-[#512BD4] focus:ring-2 focus:ring-[#512BD4]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#14053A] mb-1">
                      Mobile Number (10 Digits) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#512BD4] pointer-events-none">
                        +91
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={10}
                        placeholder="9876543210"
                        className="w-full pl-11 pr-3.5 py-2.5 rounded-xl border border-[#DCD5F6] bg-[#FBFBFE] text-xs sm:text-sm text-[#14053A] focus:outline-none focus:border-[#512BD4] focus:ring-2 focus:ring-[#512BD4]/20 transition-all font-mono"
                      />
                    </div>
                  </div>
                </div>

                {/* Job Title, Company, City, Country */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-bold text-[#14053A] mb-1">
                      Job Title / Role <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      placeholder="e.g., Senior Cloud Architect"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD5F6] bg-[#FBFBFE] text-xs sm:text-sm text-[#14053A] focus:outline-none focus:border-[#512BD4] focus:ring-2 focus:ring-[#512BD4]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#14053A] mb-1">
                      Company / Organization <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g., Microsoft / Independent"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD5F6] bg-[#FBFBFE] text-xs sm:text-sm text-[#14053A] focus:outline-none focus:border-[#512BD4] focus:ring-2 focus:ring-[#512BD4]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#14053A] mb-1">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g., Amravati / Pune / Mumbai"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD5F6] bg-[#FBFBFE] text-xs sm:text-sm text-[#14053A] focus:outline-none focus:border-[#512BD4] focus:ring-2 focus:ring-[#512BD4]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#14053A] mb-1">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="India"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD5F6] bg-[#FBFBFE] text-xs sm:text-sm text-[#14053A] focus:outline-none focus:border-[#512BD4] focus:ring-2 focus:ring-[#512BD4]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Bio with counter */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold text-[#14053A]">
                      Speaker Biography (3rd Person) <span className="text-red-500">*</span>
                    </label>
                    <span className={`text-[11px] font-mono ${formData.bio.trim().length >= MIN_CHARS.bio ? 'text-green-600 font-bold' : 'text-stone-400'}`}>
                      {formData.bio.trim().length}/{MIN_CHARS.bio} min chars
                    </span>
                  </div>
                  <textarea
                    name="bio"
                    rows={3}
                    value={formData.bio}
                    onChange={handleChange}
                    placeholder="Short 2-3 sentence overview of your background, experience with .NET/Azure/AI, and community accomplishments..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD5F6] bg-[#FBFBFE] text-xs sm:text-sm text-[#14053A] focus:outline-none focus:border-[#512BD4] focus:ring-2 focus:ring-[#512BD4]/20 transition-all leading-relaxed"
                  />
                </div>
              </div>

              {/* ========================================================
                  SECTION 2: SOCIAL PROFILES
              ======================================================== */}
              <div>
                <div className="flex items-center gap-2.5 pb-3 mb-6 border-b border-[#DCD5F6]/70">
                  <div className="w-8 h-8 rounded-xl bg-[#512BD4] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                    2
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-display text-[#14053A]">
                      Social Links &amp; Speaker Presence
                    </h3>
                    <p className="text-xs text-[#190649]/65">Help delegates and reviewers discover your public portfolio</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-[#14053A] mb-1">
                      <LinkedInIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                      <span>LinkedIn Profile <span className="text-red-500">*</span></span>
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      placeholder="https://linkedin.com/in/username"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD5F6] bg-[#FBFBFE] text-xs sm:text-sm text-[#14053A] focus:outline-none focus:border-[#512BD4] focus:ring-2 focus:ring-[#512BD4]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-[#14053A] mb-1">
                      <GitHubIcon className="w-3.5 h-3.5 text-[#24292F]" />
                      <span>GitHub Profile</span>
                    </label>
                    <input
                      type="url"
                      name="github"
                      value={formData.github}
                      onChange={handleChange}
                      placeholder="https://github.com/username"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD5F6] bg-[#FBFBFE] text-xs sm:text-sm text-[#14053A] focus:outline-none focus:border-[#512BD4] focus:ring-2 focus:ring-[#512BD4]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-[#14053A] mb-1">
                      <XIcon className="w-3.5 h-3.5 text-black" />
                      <span>X (Twitter)</span>
                    </label>
                    <input
                      type="text"
                      name="twitter"
                      value={formData.twitter}
                      onChange={handleChange}
                      placeholder="@handle"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD5F6] bg-[#FBFBFE] text-xs sm:text-sm text-[#14053A] focus:outline-none focus:border-[#512BD4] focus:ring-2 focus:ring-[#512BD4]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-bold text-[#14053A] mb-1">
                      <Globe className="w-3.5 h-3.5 text-[#512BD4]" />
                      <span>Personal Website / Blog</span>
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://yourdomain.dev"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD5F6] bg-[#FBFBFE] text-xs sm:text-sm text-[#14053A] focus:outline-none focus:border-[#512BD4] focus:ring-2 focus:ring-[#512BD4]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-xs font-bold text-[#14053A] mb-1">
                    <Video className="w-3.5 h-3.5 text-[#512BD4]" />
                    <span>Prior Speaking Video / Slide Deck (Optional)</span>
                  </label>
                  <input
                    type="url"
                    name="pastTalks"
                    value={formData.pastTalks}
                    onChange={handleChange}
                    placeholder="YouTube recording, SlideShare, Sessionize link, or past event talk link..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD5F6] bg-[#FBFBFE] text-xs sm:text-sm text-[#14053A] focus:outline-none focus:border-[#512BD4] focus:ring-2 focus:ring-[#512BD4]/20 transition-all"
                  />
                </div>
              </div>

              {/* ========================================================
                  SECTION 3: SESSION PROPOSAL
              ======================================================== */}
              <div>
                <div className="flex items-center gap-2.5 pb-3 mb-6 border-b border-[#DCD5F6]/70">
                  <div className="w-8 h-8 rounded-xl bg-[#512BD4] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                    3
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-display text-[#14053A]">
                      Session Proposal Details
                    </h3>
                    <p className="text-xs text-[#190649]/65">Provide the technical architecture, abstract, and learning outcomes</p>
                  </div>
                </div>

                {/* Session Format Tabs */}
                <div className="mb-6">
                  <label className="block text-xs font-bold text-[#14053A] mb-2">
                    Session Format <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {Object.keys(formatConfigs).map((fmtKey) => {
                      const cfg = formatConfigs[fmtKey];
                      const IconComp = cfg.icon;
                      const isSelected = formData.format === fmtKey;

                      return (
                        <button
                          key={fmtKey}
                          type="button"
                          onClick={() => setFormData((p) => ({ ...p, format: fmtKey }))}
                          className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? 'bg-gradient-to-br from-[#512BD4]/10 via-white to-[#D600AA]/10 border-2 border-[#512BD4] shadow-md shadow-[#512BD4]/15'
                              : 'bg-[#FBFBFE] border-[#DCD5F6] hover:border-[#9780E5] hover:bg-white'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="inline-flex items-center gap-1.5 font-bold text-xs text-[#14053A]">
                                <IconComp className="w-4 h-4 text-[#512BD4]" />
                                <span>{cfg.title}</span>
                              </span>
                              <span className="text-[10px] font-bold text-[#512BD4] bg-[#EEEAFB] px-2 py-0.5 rounded-full">
                                {cfg.badge}
                              </span>
                            </div>
                            <p className="text-xs text-[#190649]/70 leading-relaxed">
                              {cfg.desc}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Track & Target Level */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-bold text-[#14053A] mb-1">
                      Primary Technology Track <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="track"
                      value={formData.track}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD5F6] bg-[#FBFBFE] text-xs sm:text-sm text-[#14053A] focus:outline-none focus:border-[#512BD4] focus:ring-2 focus:ring-[#512BD4]/20 transition-all cursor-pointer"
                    >
                      <option value="">-- Select Conference Track --</option>
                      {trackOptions.map((trk, i) => (
                        <option key={i} value={trk}>{trk}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#14053A] mb-1">
                      Target Audience Technical Depth <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Beginner', 'Intermediate', 'Advanced / Deep Dive'].map((lvl) => (
                        <button
                          key={lvl}
                          type="button"
                          onClick={() => setFormData((p) => ({ ...p, level: lvl }))}
                          className={`py-2 px-2 rounded-xl text-center text-xs font-bold border transition-all cursor-pointer truncate ${
                            formData.level === lvl
                              ? 'bg-[#512BD4] text-white border-[#512BD4] shadow-xs'
                              : 'bg-[#FBFBFE] text-[#190649]/75 border-[#DCD5F6] hover:border-[#512BD4]'
                          }`}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Talk Title */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold text-[#14053A]">
                      Session Title <span className="text-red-500">*</span>
                    </label>
                    <span className={`text-[11px] font-mono ${formData.talkTitle.trim().length >= MIN_CHARS.talkTitle ? 'text-green-600 font-bold' : 'text-stone-400'}`}>
                      {formData.talkTitle.trim().length}/{MIN_CHARS.talkTitle} min chars
                    </span>
                  </div>
                  <input
                    type="text"
                    name="talkTitle"
                    value={formData.talkTitle}
                    onChange={handleChange}
                    placeholder={currentConfig.titlePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD5F6] bg-[#FBFBFE] text-xs sm:text-sm text-[#14053A] focus:outline-none focus:border-[#512BD4] focus:ring-2 focus:ring-[#512BD4]/20 transition-all font-semibold"
                  />
                </div>

                {/* Abstract */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold text-[#14053A]">
                      Session Abstract &amp; Narrative <span className="text-red-500">*</span>
                    </label>
                    <span className={`text-[11px] font-mono ${formData.abstract.trim().length >= MIN_CHARS.abstract ? 'text-green-600 font-bold' : 'text-stone-400'}`}>
                      {formData.abstract.trim().length}/{MIN_CHARS.abstract} min chars
                    </span>
                  </div>
                  <textarea
                    name="abstract"
                    rows={4}
                    value={formData.abstract}
                    onChange={handleChange}
                    placeholder={currentConfig.abstractPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD5F6] bg-[#FBFBFE] text-xs sm:text-sm text-[#14053A] focus:outline-none focus:border-[#512BD4] focus:ring-2 focus:ring-[#512BD4]/20 transition-all leading-relaxed"
                  />
                </div>

                {/* Key Takeaways */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold text-[#14053A]">
                      Key Actionable Takeaways for Attendees <span className="text-red-500">*</span>
                    </label>
                    <span className={`text-[11px] font-mono ${formData.takeaways.trim().length >= MIN_CHARS.takeaways ? 'text-green-600 font-bold' : 'text-stone-400'}`}>
                      {formData.takeaways.trim().length}/{MIN_CHARS.takeaways} min chars
                    </span>
                  </div>
                  <textarea
                    name="takeaways"
                    rows={3}
                    value={formData.takeaways}
                    onChange={handleChange}
                    placeholder={currentConfig.takeawaysPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD5F6] bg-[#FBFBFE] text-xs sm:text-sm text-[#14053A] focus:outline-none focus:border-[#512BD4] focus:ring-2 focus:ring-[#512BD4]/20 transition-all leading-relaxed"
                  />
                </div>

                {/* Prerequisites & Prior Delivery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#14053A] mb-1">
                      Attendee Prerequisites (Optional)
                    </label>
                    <input
                      type="text"
                      name="prerequisites"
                      value={formData.prerequisites}
                      onChange={handleChange}
                      placeholder={currentConfig.prereqsPlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD5F6] bg-[#FBFBFE] text-xs sm:text-sm text-[#14053A] focus:outline-none focus:border-[#512BD4] focus:ring-2 focus:ring-[#512BD4]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#14053A] mb-1">
                      Has this session been delivered before?
                    </label>
                    <select
                      name="presentedBefore"
                      value={formData.presentedBefore}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCD5F6] bg-[#FBFBFE] text-xs sm:text-sm text-[#14053A] focus:outline-none focus:border-[#512BD4] focus:ring-2 focus:ring-[#512BD4]/20 transition-all cursor-pointer"
                    >
                      <option value="No - Brand new talk">No — Brand new session premiere</option>
                      <option value="Yes - Local meetup">Yes — Delivered at a user group / meetup</option>
                      <option value="Yes - Major conference">Yes — Presented at a regional/national conference</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Code of Conduct & Affirmation */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8FF] border border-[#DCD5F6] space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreedToCodeOfConduct"
                    checked={formData.agreedToCodeOfConduct}
                    onChange={handleChange}
                    className="mt-0.5 w-4 h-4 rounded text-[#512BD4] focus:ring-[#512BD4] cursor-pointer"
                  />
                  <span className="text-xs text-[#190649]/80 leading-relaxed">
                    I agree to the{' '}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowCocModal(true);
                      }}
                      className="text-[#512BD4] underline font-bold hover:text-[#4323B0] cursor-pointer"
                    >
                      Conference Code of Conduct
                    </button>{' '}
                    and confirm this proposal represents my original technical work and accurate personal details.
                  </span>
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#190649]/65">
                  <ShieldCheck className="w-4 h-4 text-[#0E7A66]" />
                  <span>Submissions are encrypted and reviewed confidentially by MSC PRPCEM</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto dotnet-solid-btn-accent text-sm py-3 px-8 rounded-xl font-bold shadow-md inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Proposal...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Session Proposal</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

        {/* Code of Conduct Modal */}
        {showCocModal && (
          <CodeOfConductModal onClose={() => setShowCocModal(false)} />
        )}

      </div>
    </section>
  );
};

export default CallForSpeakers;
