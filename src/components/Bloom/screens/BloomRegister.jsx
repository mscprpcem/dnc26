import React, { useState } from 'react';
import { Sprout, ArrowLeft, AlertCircle, ShieldCheck } from 'lucide-react';

export const BloomRegister = ({ onSubmit, onBack, isSubmitting, errorMessage }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [clientError, setClientError] = useState('');

  const validateEmail = (val) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setClientError('');

    const cleanName = fullName.trim();
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanName || cleanName.length < 2) {
      setClientError('Please enter your full name (at least 2 characters).');
      return;
    }

    if (!cleanEmail || !validateEmail(cleanEmail)) {
      setClientError('Please enter a valid email address to receive your creation.');
      return;
    }

    onSubmit({ name: cleanName, email: cleanEmail });
  };

  return (
    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4 sm:p-8">
      {/* Back Button */}
      <div className="absolute top-6 left-6 sm:top-10 sm:left-10">
        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          className="bloom-btn-ghost text-xs sm:text-sm py-2 px-4 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
      </div>

      {/* Registration Card */}
      <div className="bloom-glass-card w-full max-w-md p-6 sm:p-10 space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex p-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-2">
            <Sprout className="w-6 h-6 animate-pulse" />
          </div>
          <h2 className="bloom-title-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
            Plant Your Seed
          </h2>
          <p className="font-sans text-xs sm:text-sm text-stone-300">
            Enter your details to generate your unique procedural flower and receive your personalized video.
          </p>
        </div>

        {(clientError || errorMessage) && (
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-red-950/60 border border-red-500/30 text-red-200 text-xs">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <span>{clientError || errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-mono text-[11px] uppercase tracking-wider text-emerald-400/90 font-bold mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              required
              autoFocus
              disabled={isSubmitting}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Satya Nadella"
              className="bloom-input"
            />
          </div>

          <div>
            <label className="block font-mono text-[11px] uppercase tracking-wider text-emerald-400/90 font-bold mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              required
              disabled={isSubmitting}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. developer@dotnetconf.in"
              className="bloom-input"
            />
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-stone-400 font-sans pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Your creation video will be delivered securely to this inbox.</span>
          </div>

          <div className="pt-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bloom-btn-primary w-full cursor-pointer py-3.5 text-sm uppercase tracking-wider"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-emerald-950 border-t-transparent rounded-full animate-spin" />
                  <span>Preparing Soil...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <Sprout className="w-4 h-4" />
                  <span>Plant Your Seed</span>
                </div>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BloomRegister;

