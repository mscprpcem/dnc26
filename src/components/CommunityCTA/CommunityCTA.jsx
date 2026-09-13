import React from 'react';
import { ArrowRight, Award } from 'lucide-react';
import { Container } from '../ui/Container.jsx';
import { Button } from '../ui/Button.jsx';
import { eventData } from '../../data/event.js';

export const CommunityCTA = () => {
  return (
    <section className="py-20 lg:py-24 bg-linear-to-b from-white via-[#F5F2FE]/40 to-[#EFF6FC]/30 border-b border-[#E5E7EB] relative overflow-hidden">
      {/* Subtle background tech grid */}
      <div className="absolute inset-0 tech-subtle-grid pointer-events-none opacity-40" />

      <Container className="relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DDD4FA] text-xs font-semibold text-[#512BD4] mb-6 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-[#512BD4]" />
            <span>JOIN CENTRAL INDIA'S LARGEST DEVELOPER GATHERING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171717] tracking-tight leading-tight">
            Be part of .NET Conf 2026.
          </h2>

          <div className="mt-4 space-y-1 text-base sm:text-lg text-[#5F6368] font-medium">
            <p>Learn something new.</p>
            <p>Meet fellow developers.</p>
            <p>Build something meaningful.</p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <Button
              variant="primary"
              size="lg"
              href="#cfp"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Coming Soon
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={`mailto:${eventData.contactEmail}?subject=Sponsorship%20Inquiry%20.NET%20Conf%202026`}
            >
              Become a Sponsor
            </Button>
          </div>

          <div className="mt-6 text-xs text-[#8A8F98]">
            Amravati, Maharashtra · PRPCEM Campus
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CommunityCTA;
