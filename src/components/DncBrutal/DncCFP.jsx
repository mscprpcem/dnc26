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
  Send
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon, XIcon } from '../ui/SocialIcons.jsx';
import DncSignpost from './DncSignpost.jsx';
import { sendCfpSubmission } from '../../utils/webhookApi.js';
import CodeOfConductModal from '../CodeOfConduct/CodeOfConductModal.jsx';

export const DncCFP = () => {
  // Form State
  const [formData, setFormData] = useState({
    // 1. Speaker Information
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

    // 2. Social Media & Links
    linkedin: '',
    github: '',
    twitter: '',
    website: '',
    pastTalks: '',

    // 3. Session Proposal
    format: 'Talk', // 'Talk' | 'Workshop' | 'Panel'
    track: '',
    level: 'Intermediate', // 'Beginner' | 'Intermediate' | 'Advanced / Deep Dive'
    talkTitle: '',
    abstract: '',
    takeaways: '',
    prerequisites: '',
    presentedBefore: 'No - Brand new talk', // 'No - Brand new talk' | 'Yes - Local meetup' | 'Yes - Major conference'
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

  // Character thresholds requested by user
  const MIN_CHARS = {
    bio: 50,
    talkTitle: 25,
    abstract: 100,
    takeaways: 50,
    phone: 10,
  };

  // Track options
  const trackOptions = [
    'Generative AI & LLMs',
    'Google Cloud Platform & Infra',
    '.NET 9 / 10 & Modern Software Architecture',
    'Kubernetes & Platform Engineering',
    'Modern Data Stack & Analytics',
    'App Modernization & Serverless',
    'DevSecOps & Cloud Security',
  ];

  // Format configurations
  const formatConfigs = {
    Talk: {
      badge: '30-45 MINS',
      title: 'Talk',
      desc: 'Technical presentation on architecture, design patterns, or case studies.',
      icon: Terminal,
      titlePlaceholder: 'e.g., Architecting Resilient Real-Time Systems with .NET 9 & Distributed Actors',
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

  // Handle Headshot upload
  const handleHeadshotChange = (e) => {
    setHeadshotError('');
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate size (Max 4MB)
    if (file.size > 4 * 1024 * 1024) {
      setHeadshotError('Image exceeds max allowed size of 4MB. Please upload a smaller photo.');
      return;
    }

    // Validate type
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

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'phone') {
      // Numerical filter for 10 digits
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData((prev) => ({ ...prev, phone: digitsOnly }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Validation
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

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    const error = validateForm();
    if (error) {
      setErrorMessage(error);
      const errEl = document.getElementById('cfp-error-banner');
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
      setErrorMessage('Something went wrong submitting your proposal. Please try again or reach out to msc@prpcem.ac.in');
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
    <section id="cfp" className="py-10 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-24">
      {/* Anchor for alternative #speakers and #call-for-speakers links */}
      <div id="speakers" className="scroll-mt-28" />
      <div id="call-for-speakers" className="scroll-mt-28" />

      {/* Reusable DNC Signpost */}
      <DncSignpost 
        title="CALL FOR PROPOSALS" 
        badge="SPEAKER SUBMISSIONS" 
        theme="purple"
        className="mb-6 sm:mb-8"
      />

      {/* Main Container Card */}
      <div className="bg-white border-[3px] border-black rounded-3xl p-5 sm:p-8 md:p-12 shadow-[6px_6px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] relative overflow-hidden">
        
        {/* Subtle Decorative Strip */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#512BD4] via-[#00BDD6] to-[#FFD13B] border-b-[2px] border-black" />

        {/* Section Header & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 pt-2">
          <div className="inline-flex items-center gap-2 bg-[#EEEAFB] text-[#512BD4] border-[1.5px] border-black rounded-full px-3.5 py-1 text-xs font-mono font-bold mb-3 shadow-[1.5px_1.5px_0px_0px_#000]">
            <Mic className="w-3.5 h-3.5" />
            <span>SUBMIT YOUR SESSION</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black font-sans uppercase tracking-tight mb-3">
            Call for Proposals
          </h3>

          <p className="text-stone-700 font-sans text-sm sm:text-base leading-relaxed">
            Present your talk, architecture case study, or hands-on workshop to the developer and cloud community at <strong className="text-black font-bold">.NET Conf 2026 Amravati</strong>.
          </p>
        </div>

        {/* SUBMITTED SUCCESS STATE */}
        {isSubmitted && submittedData ? (
          <div className="bg-[#F0FDF4] border-[2.5px] border-black rounded-2xl p-6 sm:p-10 shadow-[5px_5px_0px_0px_#16A34A] animate-in fade-in zoom-in-95 duration-200">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
              {/* Checkmark icon badge */}
              <div className="w-16 h-16 rounded-full bg-[#16A34A] border-[2.5px] border-black flex items-center justify-center text-white mb-4 shadow-[3px_3px_0px_0px_#000]">
                <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
              </div>

              <div className="inline-block bg-black text-[#00E5FF] font-mono font-black text-xs px-3 py-1 rounded-full uppercase mb-2">
                PROPOSAL ID: {submittedData.proposalId}
              </div>

              <h4 className="text-2xl sm:text-3xl font-black text-black font-sans uppercase tracking-tight mb-2">
                Proposal Submitted Successfully!
              </h4>

              <p className="text-stone-700 font-sans text-sm sm:text-base mb-6">
                Thank you, <strong className="text-black">{submittedData.fullName}</strong>! Your session proposal has been submitted to the <strong className="text-black">.NET Conf 2026 Technical Review Board</strong>.
              </p>

              {/* Proposal Summary Card */}
              <div className="w-full bg-white border-[2px] border-black rounded-xl p-5 text-left mb-6 shadow-[3px_3px_0px_0px_#000] space-y-3 font-sans">
                <div>
                  <div className="text-[11px] font-mono font-bold uppercase text-stone-500">Session Title</div>
                  <div className="text-base sm:text-lg font-black text-black">{submittedData.talkTitle}</div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-stone-200">
                  <div>
                    <div className="text-[11px] font-mono font-bold uppercase text-stone-500">Format</div>
                    <div className="text-xs sm:text-sm font-bold text-black">{submittedData.format}</div>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-bold uppercase text-stone-500">Track</div>
                    <div className="text-xs sm:text-sm font-bold text-black">{submittedData.track}</div>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-bold uppercase text-stone-500">Audience Level</div>
                    <div className="text-xs sm:text-sm font-bold text-black">{submittedData.level}</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-200">
                  <div className="text-[11px] font-mono font-bold uppercase text-stone-500">Speaker Profile</div>
                  <div className="text-xs sm:text-sm text-stone-800">
                    {submittedData.fullName} • {submittedData.jobTitle} at {submittedData.company} ({submittedData.city}, {submittedData.country})
                  </div>
                </div>
              </div>

              {/* What Happens Next Steps */}
              <div className="w-full bg-[#EEEAFB] border-[2px] border-black rounded-xl p-4 text-left mb-6 text-xs font-sans">
                <div className="font-bold text-black uppercase font-mono mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#512BD4]" />
                  <span>What happens next?</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-stone-700">
                  <li>Our technical review committee evaluates sessions on clarity, technical depth, and actionable takeaways.</li>
                  <li>Accepted speakers receive complimentary speaker delegate access, official stage slots, and speaker kits.</li>
                  <li>Official schedule announcements will be sent to <strong className="text-black">{submittedData.email}</strong>.</li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 w-full">
                <button
                  type="button"
                  onClick={copySummaryToClipboard}
                  className="bg-white hover:bg-stone-100 text-black font-mono font-bold text-xs uppercase px-4 py-2.5 rounded-xl border-[2px] border-black shadow-[2.5px_2.5px_0px_0px_#000] flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  {copiedSummary ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedSummary ? 'COPIED TO CLIPBOARD' : 'COPY SUMMARY'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-[#512BD4] hover:bg-[#4322B0] text-white font-mono font-bold text-xs uppercase px-5 py-2.5 rounded-xl border-[2px] border-black shadow-[2.5px_2.5px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer"
                >
                  SUBMIT ANOTHER SESSION
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* CFP PROPOSAL SUBMISSION FORM */
          <form onSubmit={handleSubmit} className="space-y-10 sm:space-y-12">
            
            {/* Error Banner */}
            {errorMessage && (
              <div 
                id="cfp-error-banner"
                className="bg-red-50 border-[2.5px] border-red-600 rounded-2xl p-4 shadow-[4px_4px_0px_0px_#DC2626] flex items-start gap-3 animate-in shake duration-200"
              >
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div className="flex-1 text-sm font-sans font-bold text-red-900">
                  {errorMessage}
                </div>
              </div>
            )}

            {/* ========================================================
                SECTION 1: SPEAKER INFORMATION
            ========================================================= */}
            <div className="bg-[#FAF9FF] border-[2.5px] border-black rounded-2xl p-5 sm:p-7 shadow-[4px_4px_0px_0px_#000]">
              {/* Section Header */}
              <div className="border-b-[2px] border-black pb-4 mb-6">
                <div className="inline-flex items-center gap-1.5 bg-[#512BD4] text-white text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase mb-1">
                  <span>STEP 1 OF 3</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-black font-sans uppercase tracking-tight">
                  1. Speaker Information
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 font-sans mt-0.5">
                  Your credentials and profile for the conference schedule.
                </p>
              </div>

              {/* Headshot Upload Component */}
              <div className="mb-6 p-4 sm:p-5 bg-white border-[2px] border-black rounded-2xl shadow-[2.5px_2.5px_0px_0px_#000]">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-black font-sans uppercase text-black">
                      Headshot Image *
                    </span>
                    <span className="bg-red-100 text-red-800 border border-red-300 text-[10px] font-mono font-black px-2 py-0.5 rounded-full uppercase">
                      Mandatory
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-stone-500">
                    Max 4MB (PNG, JPG, WebP)
                  </span>
                </div>

                <p className="text-xs text-stone-600 font-sans mb-4">
                  Upload a clear high-resolution portrait photo for the speaker roster.
                </p>

                {/* Upload Preview & Button Area */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  {formData.headshotUrl ? (
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <div className="relative w-20 h-20 rounded-2xl border-[2.5px] border-black overflow-hidden shadow-[2.5px_2.5px_0px_0px_#000] shrink-0 bg-stone-100">
                        <img 
                          src={formData.headshotUrl} 
                          alt="Speaker Headshot Preview" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5 flex-1 sm:flex-initial">
                        <div className="text-xs font-bold text-emerald-800 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Photo ready for roster</span>
                        </div>
                        <button
                          type="button"
                          onClick={removeHeadshot}
                          className="text-xs font-mono font-bold text-red-700 hover:text-red-900 underline flex items-center gap-1 cursor-pointer"
                        >
                          <X className="w-3.5 h-3.5" />
                          <span>Remove & replace</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full">
                      <input
                        ref={fileInputRef}
                        type="file"
                        id="headshot-upload"
                        accept="image/png,image/jpeg,image/jpg,image/webp"
                        onChange={handleHeadshotChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="headshot-upload"
                        className="w-full sm:w-auto bg-[#FFD13B] hover:bg-[#FFE066] text-black font-mono font-black text-xs uppercase px-5 py-3 rounded-xl border-[2px] border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all inline-flex items-center justify-center gap-2 cursor-pointer select-none"
                      >
                        <Upload className="w-4 h-4 stroke-[2.5]" />
                        <span>Upload Headshot Image</span>
                      </label>
                      {headshotError && (
                        <p className="text-xs font-bold text-red-600 mt-2">{headshotError}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Grid of Speaker Profile Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-black font-sans uppercase text-black mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      required
                      className="w-full pl-9 pr-3 py-2.5 bg-white border-[2px] border-black rounded-xl text-xs sm:text-sm font-sans font-bold text-black placeholder:text-stone-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#512BD4]"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-black font-sans uppercase text-black mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="speaker@company.com"
                      required
                      className="w-full pl-9 pr-3 py-2.5 bg-white border-[2px] border-black rounded-xl text-xs sm:text-sm font-sans font-bold text-black placeholder:text-stone-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#512BD4]"
                    />
                  </div>
                </div>

                {/* Mobile Number with 10 digits counter */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-black font-sans uppercase text-black">
                      Mobile Number (10 Digits) *
                    </label>
                    <span className={`text-[11px] font-mono font-bold ${
                      formData.phone.length === 10 ? 'text-emerald-700' : 'text-stone-500'
                    }`}>
                      {formData.phone.length} / {MIN_CHARS.phone} digits
                    </span>
                  </div>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="9876543210"
                      maxLength={10}
                      required
                      className="w-full pl-9 pr-3 py-2.5 bg-white border-[2px] border-black rounded-xl text-xs sm:text-sm font-sans font-bold text-black placeholder:text-stone-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#512BD4]"
                    />
                  </div>
                </div>

                {/* Job Title / Role */}
                <div>
                  <label className="block text-xs font-black font-sans uppercase text-black mb-1.5">
                    Job Title / Role *
                  </label>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      placeholder="e.g. Lead Cloud Architect / AI Engineer"
                      required
                      className="w-full pl-9 pr-3 py-2.5 bg-white border-[2px] border-black rounded-xl text-xs sm:text-sm font-sans font-bold text-black placeholder:text-stone-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#512BD4]"
                    />
                  </div>
                </div>

                {/* Company / Organization */}
                <div>
                  <label className="block text-xs font-black font-sans uppercase text-black mb-1.5">
                    Company / Organization *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Microsoft / Freelance / PRPCEM"
                      required
                      className="w-full pl-9 pr-3 py-2.5 bg-white border-[2px] border-black rounded-xl text-xs sm:text-sm font-sans font-bold text-black placeholder:text-stone-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#512BD4]"
                    />
                  </div>
                </div>

                {/* City & Country */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-black font-sans uppercase text-black mb-1.5">
                      City *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="e.g. Amravati / Pune"
                        required
                        className="w-full pl-9 pr-2 py-2.5 bg-white border-[2px] border-black rounded-xl text-xs sm:text-sm font-sans font-bold text-black placeholder:text-stone-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#512BD4]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black font-sans uppercase text-black mb-1.5">
                      Country *
                    </label>
                    <div className="relative">
                      <Globe className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="India"
                        required
                        className="w-full pl-9 pr-2 py-2.5 bg-white border-[2px] border-black rounded-xl text-xs sm:text-sm font-sans font-bold text-black placeholder:text-stone-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#512BD4]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Speaker Bio with Counter */}
              <div className="mt-4 sm:mt-5">
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-black font-sans uppercase text-black">
                    Speaker Bio *
                  </label>
                  <span className={`text-[11px] font-mono font-bold ${
                    formData.bio.trim().length >= MIN_CHARS.bio ? 'text-emerald-700' : 'text-amber-800'
                  }`}>
                    {formData.bio.trim().length} / {MIN_CHARS.bio} min chars
                  </span>
                </div>
                <textarea
                  name="bio"
                  rows={3}
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Share a short bio summarizing your background, core technical focus, and achievements for the speaker roster. (Minimum 50 characters)"
                  required
                  className="w-full p-3 bg-white border-[2px] border-black rounded-xl text-xs sm:text-sm font-sans text-black placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#512BD4]"
                />
              </div>
            </div>

            {/* ========================================================
                SECTION 2: SOCIAL MEDIA & LINKS
            ========================================================= */}
            <div className="bg-[#FAF9FF] border-[2.5px] border-black rounded-2xl p-5 sm:p-7 shadow-[4px_4px_0px_0px_#000]">
              <div className="border-b-[2px] border-black pb-4 mb-6">
                <div className="inline-flex items-center gap-1.5 bg-[#00BDD6] text-black text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase mb-1">
                  <span>STEP 2 OF 3</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-black font-sans uppercase tracking-tight">
                  2. Social Media & Links
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 font-sans mt-0.5">
                  Where attendees and organizers can review your work.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                {/* LinkedIn Profile */}
                <div>
                  <label className="block text-xs font-black font-sans uppercase text-black mb-1.5">
                    LinkedIn Profile URL *
                  </label>
                  <div className="relative">
                    <LinkedInIcon className="w-4 h-4 text-stone-500 absolute left-3 top-3 fill-current" />
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      placeholder="https://linkedin.com/in/username"
                      required
                      className="w-full pl-9 pr-3 py-2.5 bg-white border-[2px] border-black rounded-xl text-xs sm:text-sm font-sans font-bold text-black placeholder:text-stone-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#512BD4]"
                    />
                  </div>
                </div>

                {/* GitHub / Portfolio */}
                <div>
                  <label className="block text-xs font-black font-sans uppercase text-black mb-1.5">
                    GitHub / Portfolio
                  </label>
                  <div className="relative">
                    <GitHubIcon className="w-4 h-4 text-stone-500 absolute left-3 top-3 fill-current" />
                    <input
                      type="url"
                      name="github"
                      value={formData.github}
                      onChange={handleChange}
                      placeholder="https://github.com/username"
                      className="w-full pl-9 pr-3 py-2.5 bg-white border-[2px] border-black rounded-xl text-xs sm:text-sm font-sans font-bold text-black placeholder:text-stone-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#512BD4]"
                    />
                  </div>
                </div>

                {/* X / Twitter */}
                <div>
                  <label className="block text-xs font-black font-sans uppercase text-black mb-1.5">
                    X / Twitter
                  </label>
                  <div className="relative">
                    <XIcon className="w-4 h-4 text-stone-500 absolute left-3 top-3 fill-current" />
                    <input
                      type="text"
                      name="twitter"
                      value={formData.twitter}
                      onChange={handleChange}
                      placeholder="https://x.com/handle or @handle"
                      className="w-full pl-9 pr-3 py-2.5 bg-white border-[2px] border-black rounded-xl text-xs sm:text-sm font-sans font-bold text-black placeholder:text-stone-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#512BD4]"
                    />
                  </div>
                </div>

                {/* Personal Website / Blog */}
                <div>
                  <label className="block text-xs font-black font-sans uppercase text-black mb-1.5">
                    Personal Website / Blog
                  </label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://yourdomain.dev"
                      className="w-full pl-9 pr-3 py-2.5 bg-white border-[2px] border-black rounded-xl text-xs sm:text-sm font-sans font-bold text-black placeholder:text-stone-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#512BD4]"
                    />
                  </div>
                </div>
              </div>

              {/* Previous Talk Video / Slides */}
              <div className="mt-4 sm:mt-5">
                <label className="block text-xs font-black font-sans uppercase text-black mb-1.5">
                  Previous Talk Video / Slides (Optional)
                </label>
                <div className="relative">
                  <Video className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <input
                    type="url"
                    name="pastTalks"
                    value={formData.pastTalks}
                    onChange={handleChange}
                    placeholder="https://youtube.com/watch?v=... or slides link"
                    className="w-full pl-9 pr-3 py-2.5 bg-white border-[2px] border-black rounded-xl text-xs sm:text-sm font-sans font-bold text-black placeholder:text-stone-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#512BD4]"
                  />
                </div>
                <p className="text-[11px] font-mono text-stone-500 mt-1">
                  Helps our review committee gauge presentation pacing and delivery style.
                </p>
              </div>
            </div>

            {/* ========================================================
                SECTION 3: SESSION PROPOSAL
            ========================================================= */}
            <div className="bg-[#FAF9FF] border-[2.5px] border-black rounded-2xl p-5 sm:p-7 shadow-[4px_4px_0px_0px_#000]">
              <div className="border-b-[2px] border-black pb-4 mb-6">
                <div className="inline-flex items-center gap-1.5 bg-[#FFD13B] text-black text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase mb-1">
                  <span>STEP 3 OF 3</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-black font-sans uppercase tracking-tight">
                  3. Session Proposal
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 font-sans mt-0.5">
                  First choose your session format. The fields below will adapt dynamically.
                </p>
              </div>

              {/* Format Selector Cards */}
              <div className="mb-6">
                <label className="block text-xs font-black font-sans uppercase text-black mb-2.5">
                  Select Session Format *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {Object.entries(formatConfigs).map(([key, config]) => {
                    const isSelected = formData.format === key;
                    const IconComponent = config.icon;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, format: key }))}
                        className={`text-left p-4 rounded-xl border-[2px] border-black transition-all cursor-pointer relative ${
                          isSelected
                            ? 'bg-[#512BD4] text-white shadow-[3px_3px_0px_0px_#000] -translate-y-0.5'
                            : 'bg-white hover:bg-stone-50 text-black shadow-[1.5px_1.5px_0px_0px_#000]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1.5">
                            <IconComponent className={`w-4 h-4 ${isSelected ? 'text-[#00E5FF]' : 'text-[#512BD4]'}`} />
                            <span className="font-black text-sm font-sans uppercase tracking-wide">
                              {config.title}
                            </span>
                          </div>
                          <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border border-black ${
                            isSelected ? 'bg-[#00E5FF] text-black' : 'bg-stone-100 text-stone-700'
                          }`}>
                            {config.badge}
                          </span>
                        </div>
                        <p className={`text-xs font-sans leading-relaxed ${
                          isSelected ? 'text-white/90' : 'text-stone-600'
                        }`}>
                          {config.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Primary Technology Track & Audience Level */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-5">
                {/* Track Dropdown */}
                <div>
                  <label className="block text-xs font-black font-sans uppercase text-black mb-1.5">
                    Primary Technology Track *
                  </label>
                  <select
                    name="track"
                    value={formData.track}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 bg-white border-[2px] border-black rounded-xl text-xs sm:text-sm font-sans font-bold text-black focus:outline-none focus:ring-2 focus:ring-[#512BD4] cursor-pointer"
                  >
                    <option value="" disabled>Select Topic Track</option>
                    {trackOptions.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Target Audience Level (Pills) */}
                <div>
                  <label className="block text-xs font-black font-sans uppercase text-black mb-1.5">
                    Target Audience Level *
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Beginner', 'Intermediate', 'Advanced / Deep Dive'].map((lvl) => {
                      const isSelected = formData.level === lvl;
                      return (
                        <button
                          key={lvl}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, level: lvl }))}
                          className={`py-2 px-2 text-center rounded-xl border-[1.5px] border-black text-[11px] sm:text-xs font-mono font-bold transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-black text-white shadow-[2px_2px_0px_0px_#512BD4]'
                              : 'bg-white hover:bg-stone-100 text-black'
                          }`}
                        >
                          {lvl}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Talk Title with Counter */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-black font-sans uppercase text-black">
                    Talk Title *
                  </label>
                  <span className={`text-[11px] font-mono font-bold ${
                    formData.talkTitle.trim().length >= MIN_CHARS.talkTitle ? 'text-emerald-700' : 'text-amber-800'
                  }`}>
                    {formData.talkTitle.trim().length} / {MIN_CHARS.talkTitle} min chars
                  </span>
                </div>
                <input
                  type="text"
                  name="talkTitle"
                  value={formData.talkTitle}
                  onChange={handleChange}
                  placeholder={currentConfig.titlePlaceholder}
                  required
                  className="w-full px-3 py-2.5 bg-white border-[2px] border-black rounded-xl text-xs sm:text-sm font-sans font-bold text-black placeholder:text-stone-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#512BD4]"
                />
              </div>

              {/* Talk Abstract / Description with Counter */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-black font-sans uppercase text-black">
                    Talk Abstract / Description *
                  </label>
                  <span className={`text-[11px] font-mono font-bold ${
                    formData.abstract.trim().length >= MIN_CHARS.abstract ? 'text-emerald-700' : 'text-amber-800'
                  }`}>
                    {formData.abstract.trim().length} / {MIN_CHARS.abstract} min chars
                  </span>
                </div>
                <textarea
                  name="abstract"
                  rows={4}
                  value={formData.abstract}
                  onChange={handleChange}
                  placeholder={currentConfig.abstractPlaceholder}
                  required
                  className="w-full p-3 bg-white border-[2px] border-black rounded-xl text-xs sm:text-sm font-sans text-black placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#512BD4]"
                />
              </div>

              {/* Key Attendee Takeaways with Counter */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-black font-sans uppercase text-black">
                    Key Attendee Takeaways *
                  </label>
                  <span className={`text-[11px] font-mono font-bold ${
                    formData.takeaways.trim().length >= MIN_CHARS.takeaways ? 'text-emerald-700' : 'text-amber-800'
                  }`}>
                    {formData.takeaways.trim().length} / {MIN_CHARS.takeaways} min chars
                  </span>
                </div>
                <textarea
                  name="takeaways"
                  rows={3}
                  value={formData.takeaways}
                  onChange={handleChange}
                  placeholder={currentConfig.takeawaysPlaceholder}
                  required
                  className="w-full p-3 bg-white border-[2px] border-black rounded-xl text-xs sm:text-sm font-sans text-black placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#512BD4]"
                />
              </div>

              {/* Prerequisites / Tools (Optional) */}
              <div className="mb-5">
                <label className="block text-xs font-black font-sans uppercase text-black mb-1.5">
                  Prerequisites / Tools (Optional)
                </label>
                <input
                  type="text"
                  name="prerequisites"
                  value={formData.prerequisites}
                  onChange={handleChange}
                  placeholder={currentConfig.prereqsPlaceholder}
                  className="w-full px-3 py-2.5 bg-white border-[2px] border-black rounded-xl text-xs sm:text-sm font-sans font-bold text-black placeholder:text-stone-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#512BD4]"
                />
              </div>

              {/* Presented Before? */}
              <div>
                <label className="block text-xs font-black font-sans uppercase text-black mb-2">
                  Presented Before?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    'No - Brand new talk',
                    'Yes - Local meetup',
                    'Yes - Major conference',
                  ].map((option) => {
                    const isSelected = formData.presentedBefore === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, presentedBefore: option }))}
                        className={`p-2.5 rounded-xl border-[1.5px] border-black text-xs font-sans font-bold text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#512BD4] text-white shadow-[2px_2px_0px_0px_#000]'
                            : 'bg-white hover:bg-stone-50 text-black'
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ========================================================
                CONSENT & CODE OF CONDUCT
            ========================================================= */}
            <div className="bg-[#FFFDF5] border-[2px] border-black rounded-2xl p-4 sm:p-5 shadow-[3px_3px_0px_0px_#000]">
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  name="agreedToCodeOfConduct"
                  checked={formData.agreedToCodeOfConduct}
                  onChange={handleChange}
                  required
                  className="mt-1 w-4 h-4 rounded border-2 border-black text-[#512BD4] focus:ring-0 cursor-pointer"
                />
                <span className="text-xs sm:text-sm font-sans text-stone-800 leading-relaxed">
                  I agree to follow the{' '}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowCocModal(true);
                    }}
                    className="text-[#512BD4] hover:text-[#4322B0] underline font-bold cursor-pointer"
                  >
                    .NET Conf 2026 Amravati Code of Conduct
                  </button>
                  . I confirm this submission is authentic work and consent to having the presentation recorded for community purposes.
                </span>
              </label>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="text-xs font-mono text-stone-500 text-center sm:text-left">
                * All mandatory fields must meet minimum length criteria before submission.
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full sm:w-auto px-8 py-4 rounded-2xl border-[2.5px] border-black text-sm sm:text-base font-black font-sans uppercase tracking-wider flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer ${
                  isSubmitting 
                    ? 'bg-stone-300 text-stone-600 cursor-not-allowed'
                    : 'bg-[#512BD4] hover:bg-[#4322B0] text-white'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Submitting Proposal...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Proposal</span>
                    <Send className="w-4 h-4 stroke-[2.5]" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Code of Conduct Modal */}
      <CodeOfConductModal 
        isOpen={showCocModal} 
        onClose={() => setShowCocModal(false)} 
      />
    </section>
  );
};

export default DncCFP;
