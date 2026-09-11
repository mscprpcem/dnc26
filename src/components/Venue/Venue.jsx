import React from 'react';
import { MapPin, Calendar, Navigation, Building2, CheckCircle2 } from 'lucide-react';
import { Container } from '../ui/Container.jsx';
import { SectionHeader } from '../ui/SectionHeader.jsx';
import { Button } from '../ui/Button.jsx';
import { eventData } from '../../data/event.js';

export const Venue = () => {
  return (
    <section id="venue" className="py-20 lg:py-28 bg-white border-b border-[#E5E7EB]">
      <Container>
        <SectionHeader
          label="VENUE"
          title="Meet us in Amravati."
          description="Join us at the flagship campus of P. R. Pote Patil College of Engineering and Management for Central India’s premier Microsoft developer gathering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* LEFT: Venue Details */}
          <div className="lg:col-span-6 conf-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FC] border border-[#C7E0F4] text-xs font-semibold text-[#0078D4] mb-4">
                <Building2 className="w-3.5 h-3.5" />
                <span>OFFICIAL VENUE</span>
              </div>

              <h3 className="text-2xl font-bold text-[#171717] tracking-tight">
                {eventData.location.venueName}
              </h3>

              <div className="mt-4 space-y-3 text-sm text-[#5F6368]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#512BD4] shrink-0 mt-0.5" />
                  <span>{eventData.location.address}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-[#0078D4] shrink-0" />
                  <span>{eventData.date.formattedDate} · {eventData.date.duration}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#E5E7EB]">
                <div className="text-xs font-semibold text-[#171717] uppercase tracking-wider mb-3">
                  Campus Facilities & Info
                </div>
                <ul className="space-y-2 text-xs text-[#5F6368]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Air-conditioned auditorium with dual high-resolution displays</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>High-speed dedicated Wi-Fi network for attendees</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Ample on-campus parking and easy transit from Amravati Railway Station</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Lunch, snacks & networking lounges included with eligible passes</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <Button
                variant="primary"
                size="md"
                href={eventData.location.mapUrl}
                target="_blank"
                icon={<Navigation className="w-4 h-4" />}
              >
                Get Directions on Google Maps
              </Button>
            </div>
          </div>

          {/* RIGHT: Map Container */}
          <div className="lg:col-span-6 conf-card overflow-hidden bg-[#F7F7F8] min-h-[350px] relative flex flex-col">
            <iframe
              title="PRPCEM Amravati Campus Map"
              src={eventData.location.embedMapUrl}
              className="w-full h-full min-h-[380px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-3 bg-white border-t border-[#E5E7EB] text-center text-xs text-[#5F6368]">
              Swami Vivekananda Auditorium, PRPCEM Campus · Amravati, Maharashtra 444604
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Venue;
