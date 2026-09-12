import React from 'react';
import { ExternalLink, Heart, MapPin } from 'lucide-react';
import { eventData } from '../../data/event.js';

export const Footer = () => {
  return (
    <footer className="w-full mt-auto border-t border-[#DCD5F6]/80 bg-white/70 backdrop-blur-md">
      {/* Upper Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="text-xl font-bold font-display text-gradient-magenta">
              {eventData.name}
            </span>
            <span className="hidden sm:inline text-xs text-[#190649]/60">·</span>
            <span className="text-xs text-[#190649]/75 font-medium flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#512BD4]" />
              {eventData.organizer.institution}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[#190649]/80">
            <a
              href="https://mscprpcem.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#512BD4] transition-colors"
            >
              MSC PRPCEM Website
            </a>
            <a
              href="#keynote"
              className="hover:text-[#512BD4] transition-colors"
            >
              Keynote Speaker
            </a>
            <a
              href="https://prpcem.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#512BD4] transition-colors"
            >
              PRPCEM Campus
            </a>
            <a
              href="https://dotnetfoundation.org/about/code-of-conduct"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#512BD4] transition-colors"
            >
              Code of Conduct
            </a>
            <a
              href="#cfp"
              className="hover:text-[#512BD4] transition-colors"
            >
              Call for Speakers (Coming Soon)
            </a>
            <a
              href={`mailto:${eventData.contactEmail}`}
              className="hover:text-[#512BD4] transition-colors font-medium"
            >
              {eventData.contactEmail}
            </a>
          </div>
        </div>
      </div>

      {/* Official DotNetConf Full-Bleed Bar */}
      <div className="border-t border-[#DCD5F6]/50 bg-white/90 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#190649]/70">
          <a
            href="https://get.dot.net"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#512BD4] font-medium transition-colors flex items-center gap-1"
          >
            <span>Powered by {eventData.poweredByVersion} · Microsoft Student Club PRPCEM</span>
            <ExternalLink className="w-3 h-3 text-gray-400" />
          </a>
          <span>&copy; {eventData.year} .NET Conf Amravati · PRPCEM. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};
