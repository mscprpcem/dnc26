import React from 'react';
import { BookOpen, Users2, Cpu, CheckCircle2 } from 'lucide-react';
import { Container } from '../ui/Container.jsx';

export const About = () => {
  const topics = [
    '.NET 9 / 10',
    'Modern C#',
    'ASP.NET Core',
    'Azure Cloud-Native',
    'Semantic Kernel & AI',
    'DevOps & CI/CD',
    'Minimal APIs',
    'Microservices',
  ];

  const highlights = [
    {
      title: 'Learn',
      description: 'Practical sessions from experienced Microsoft engineers, MVPs, and industry architects.',
      icon: <BookOpen className="w-5 h-5 text-[#512BD4]" />,
      color: 'purple',
    },
    {
      title: 'Connect',
      description: 'Meet developers, engineering students, tech founders, and Central India’s fastest-growing community.',
      icon: <Users2 className="w-5 h-5 text-[#0078D4]" />,
      color: 'blue',
    },
    {
      title: 'Build',
      description: 'Explore modern tools, open-source frameworks, intelligent cloud services, and real-world architectures.',
      icon: <Cpu className="w-5 h-5 text-[#171717]" />,
      color: 'neutral',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-[#E5E7EB]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Heading + Description */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#512BD4] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#512BD4]" />
              <span>ABOUT THE EVENT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight leading-tight">
              Where developers come together to learn, connect and build.
            </h2>

            <div className="mt-6 space-y-4 text-base text-[#5F6368] leading-relaxed">
              <p>
                <strong>.NET Conf 2026</strong> is Central India’s premier regional developer conference,
                organized by the <strong>Microsoft Student Club (MSC)</strong> at <strong>P. R. Pote Patil College of Engineering and Management (PRPCEM)</strong> in Amravati.
              </p>
              <p>
                As an official community extension of Microsoft’s global .NET Conf, this conference provides a welcoming, high-impact forum for developers, engineering students, cloud architects, and tech enthusiasts to dive into modern software engineering practices.
              </p>
            </div>

            {/* Topics Grid */}
            <div className="mt-8 pt-6 border-t border-[#E5E7EB]">
              <div className="text-xs font-semibold text-[#171717] uppercase tracking-wider mb-3">
                Key Focus Areas
              </div>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-[#F7F7F8] text-[#171717] border border-[#E5E7EB]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#512BD4]" />
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Conference Highlights */}
          <div className="lg:col-span-5 space-y-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-[#E5E7EB] bg-[#F7F7F8]/50 hover:bg-white hover:border-[#D1D5DB] transition-all shadow-2xs hover:shadow-xs"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-white border border-[#E5E7EB] shrink-0 shadow-2xs">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#171717]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#5F6368] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
