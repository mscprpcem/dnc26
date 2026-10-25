import React, { useEffect } from 'react';
import { X, ShieldCheck, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const CodeOfConductModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[300] flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="bg-white border-[3px] border-black rounded-3xl w-full max-w-2xl max-h-[88vh] flex flex-col shadow-[8px_8px_0px_0px_#000] relative overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#512BD4] text-white border-b-[2.5px] border-black p-4 sm:p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#00E5FF]" />
            <h3 className="font-sans font-black text-base sm:text-lg uppercase tracking-tight">
              .NET Conf 2026 Code of Conduct
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-xl bg-white text-black hover:bg-stone-200 border-[2px] border-black transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto font-sans text-stone-800 text-xs sm:text-sm space-y-4">
          <div className="bg-[#FAF9FF] p-3.5 border-[1.5px] border-black rounded-2xl">
            <strong className="text-black font-bold text-sm block mb-1">Our Pledge</strong>
            <p className="text-stone-700 leading-relaxed">
              We are committed to providing a friendly, safe, welcoming, and harassment-free environment for everyone, regardless of experience level, gender identity, sexual orientation, disability, neurodiversity, physical appearance, race, ethnicity, age, religion, or tech stack preference.
            </p>
          </div>

          <div>
            <strong className="text-black font-bold text-sm block mb-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Expected Behavior</span>
            </strong>
            <ul className="list-disc list-inside space-y-1 text-stone-700 pl-1">
              <li>Demonstrate empathy and kindness toward others.</li>
              <li>Be respectful of differing technical opinions and viewpoints.</li>
              <li>Give and gracefully accept constructive feedback.</li>
              <li>Respect personal physical space and photo/video consent.</li>
            </ul>
          </div>

          <div>
            <strong className="text-black font-bold text-sm block mb-1 flex items-center gap-1.5 text-red-700">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span>Unacceptable Conduct</span>
            </strong>
            <ul className="list-disc list-inside space-y-1 text-stone-700 pl-1">
              <li>Harassment, derogatory speech, or microaggressions.</li>
              <li>Sexualized language or imagery in talks and slide decks.</li>
              <li>Deliberate intimidation, stalking, or non-consensual following.</li>
              <li>Sustained disruption of keynotes, sessions, or workshops.</li>
              <li>Sharing private contact information without explicit permission.</li>
            </ul>
          </div>

          <div className="bg-[#FFF4C2] p-3.5 border-[1.5px] border-black rounded-2xl">
            <strong className="text-black font-bold text-sm block mb-1">Incident Reporting & Safety</strong>
            <p className="text-stone-800 mb-2 leading-relaxed">
              If you experience or witness unacceptable behavior, contact the MSC PRPCEM Organizing Committee immediately:
            </p>
            <div className="font-mono text-xs font-bold text-black flex flex-wrap gap-3">
              <span>msc@prpcem.ac.in</span>
              <span>•</span>
              <span>Help Desk at Main Auditorium</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-50 border-t-[2px] border-black flex items-center justify-between gap-3 shrink-0">
          <a
            href="/code-of-conduct"
            className="text-xs font-mono font-bold text-[#512BD4] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Full Policy Page ↗
          </a>

          <button
            onClick={onClose}
            className="bg-[#512BD4] hover:bg-[#4322B0] text-white font-mono font-black text-xs uppercase px-5 py-2.5 rounded-xl border-[2px] border-black shadow-[2px_2px_0px_0px_#000] cursor-pointer"
          >
            I UNDERSTAND
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConductModal;
