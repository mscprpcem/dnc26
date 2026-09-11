import React from 'react';
import { ExternalLink, Mail, ShieldCheck } from 'lucide-react';
import { Container } from '../ui/Container.jsx';
import { SectionHeader } from '../ui/SectionHeader.jsx';
import { Button } from '../ui/Button.jsx';
import {
  MicrosoftLogo,
  GitHubLogo,
  PRPCEMLogo,
  MSCPRPCEMLogo,
  KonfHubLogo,
  SohamGlobalLogo,
} from '../ui/SponsorLogos.jsx';

export const Sponsors = () => {
  const partners = [
    {
      id: 'sp-msft',
      name: 'Microsoft',
      tier: 'Gold Technology Partner',
      tierBadge: 'bg-[#EFF6FC] text-[#0078D4] border-[#C7E0F4]',
      logo: <MicrosoftLogo />,
      description: 'Powering global .NET development, Azure cloud, AI tooling, and student developer ecosystems.',
      url: 'https://microsoft.com',
    },
    {
      id: 'sp-github',
      name: 'GitHub',
      tier: 'Gold Developer Partner',
      tierBadge: 'bg-[#F7F7F8] text-[#171717] border-[#E5E7EB]',
      logo: <GitHubLogo />,
      description: 'The world’s home for open source, developer collaboration, GitHub Copilot, and Actions CI/CD.',
      url: 'https://github.com',
    },
    {
      id: 'sp-prpcem',
      name: 'PRPCEM Amravati',
      tier: 'Academic & Venue Host',
      tierBadge: 'bg-[#FFFBEB] text-[#B45309] border-[#FDE68A]',
      logo: <PRPCEMLogo />,
      description: 'Flagship engineering institution hosting Central India’s premier Microsoft developer event.',
      url: 'https://prpcem.ac.in',
    },
    {
      id: 'sp-msc',
      name: 'Microsoft Student Club PRPCEM',
      tier: 'Organizing Chapter',
      tierBadge: 'bg-[#F5F2FE] text-[#512BD4] border-[#DDD4FA]',
      logo: <MSCPRPCEMLogo />,
      description: 'First Microsoft Student Club in Vidarbha, empowering over 500+ aspiring tech engineers.',
      url: 'https://mscprpcem.tech',
    },
    {
      id: 'sp-konfhub',
      name: 'KonfHub',
      tier: 'Platform & Ticketing Partner',
      tierBadge: 'bg-[#FAF5FF] text-[#6B46C1] border-[#E9D8FD]',
      logo: <KonfHubLogo />,
      description: 'Leading developer conference ticketing, check-in, and attendee management platform.',
      url: 'https://konfhub.com',
    },
    {
      id: 'sp-soham',
      name: 'SohamGlobal',
      tier: 'Industry Partner',
      tierBadge: 'bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0]',
      logo: <SohamGlobalLogo />,
      description: 'Regional software development & enterprise IT consultancy fostering developer talent.',
      url: 'https://sohamglobal.com',
    },
  ];

  return (
    <section id="sponsors" className="py-20 lg:py-28 bg-white border-b border-[#E5E7EB]">
      <Container>
        <SectionHeader
          label="SPONSORS & PARTNERS"
          title="Built with the support of the community."
          description="We are proud to collaborate with industry-defining tech enterprises, academic pioneers, and community partners powering .NET Conf 2026."
          align="center"
        />

        {/* Sponsor Grid with Uniform Height & Perfectly Aligned Rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="conf-card p-6 flex flex-col justify-between group hover:border-[#512BD4]/40 transition-all bg-white hover:shadow-md h-full"
            >
              <div className="flex-1 flex flex-col">
                {/* Header: Logo & External link icon */}
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#E5E7EB]/80 min-h-[44px]">
                  <div className="transform group-hover:scale-[1.02] transition-transform flex items-center">
                    {partner.logo}
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#8A8F98] group-hover:text-[#512BD4] transition-colors shrink-0" />
                </div>

                {/* Tier Badge */}
                <div className="mt-4">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold border ${partner.tierBadge}`}
                  >
                    <ShieldCheck className="w-3 h-3" />
                    {partner.tier}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-3 text-xs text-[#5F6368] leading-relaxed flex-1">
                  {partner.description}
                </p>
              </div>

              {/* Bottom aligned footer line */}
              <div className="mt-5 pt-3.5 border-t border-[#E5E7EB]/60 flex items-center justify-between text-xs">
                <span className="font-semibold text-[#512BD4] group-hover:underline">
                  Visit Official Website
                </span>
                <span className="text-[11px] text-[#8A8F98] font-mono">Partner</span>
              </div>
            </a>
          ))}
        </div>

        {/* Become a Sponsor Callout */}
        <div className="mt-14 max-w-2xl mx-auto">
          <div className="p-5 sm:p-6 rounded-2xl bg-[#F7F7F8] border border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="text-sm font-bold text-[#171717]">
                Want to sponsor or partner with .NET Conf 2026?
              </div>
              <p className="text-xs text-[#5F6368] mt-0.5">
                Reach over 500+ passionate developers, engineers, and tech students in Central India.
              </p>
            </div>
            <Button
              variant="primary"
              size="sm"
              href="mailto:contact@mscprpcem.tech?subject=Sponsorship%20Inquiry%20.NET%20Conf%202026"
              icon={<Mail className="w-3.5 h-3.5" />}
              className="shrink-0 w-full sm:w-auto"
            >
              Become a Sponsor
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Sponsors;
