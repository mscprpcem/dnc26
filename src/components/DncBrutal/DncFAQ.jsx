import React, { useState } from 'react';

export const DncFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'What is .NET Conf 2026 Amravati?',
      a: ".NET Conf 2026 Amravati is Central India's flagship Microsoft developer summit. While rooted in modern .NET 11, the conference covers the entire modern engineering stack: Generative AI & Autonomous Agents (Semantic Kernel, Azure OpenAI), GitHub Copilot, DevOps & CI/CD pipelines, and Microsoft Azure Cloud-Native architecture alongside Microsoft MVPs and industry leaders.",
    },
    {
      q: 'Is the event only about .NET, or does it cover AI, GitHub & DevOps?',
      a: 'It covers the entire Microsoft developer ecosystem! We feature dedicated stages and code labs on Generative AI & LLMs, GitHub Copilot productivity, CI/CD automation with GitHub Actions, and scalable Azure cloud systems alongside modern C# 14 and .NET 11.',
    },
    {
      q: 'What are the main conference tracks and themes?',
      a: 'The summit is built upon four interconnected pillars: (1) Generative AI & Autonomous Agents, (2) GitHub Copilot, DevOps & Automation, (3) Microsoft Azure Cloud Architecture, and (4) Modern .NET 11 & High-Performance C#.',
    },
    {
      q: "What is included with my delegate pass?",
      a: 'Every delegate pass includes access to all technical sessions, keynotes, interactive code labs, catered lunch with morning/evening high tea, the official .NET Bot swag kit, and a verified certificate of participation.',
    },
    {
      q: 'Is there a student discount for delegate passes?',
      a: 'Yes! We offer a dedicated Super Early Bird Student Pass at an exclusive 50% discount (₹299). Make sure to carry your college student ID card on the day of the event for check-in verification.',
    },
    {
      q: 'Can our college group or dev team book passes together?',
      a: 'Yes, we offer bulk squad rates for groups of 10 or more delegates. Reach out to our community team directly via WhatsApp to receive special group rates and travel guidance.',
    },
    {
      q: 'Where and when is the event taking place?',
      a: 'The summit takes place on Saturday, 26 December 2026 in Amravati, Maharashtra. The exact campus auditorium and hall details will be announced soon.',
    },
    {
      q: 'How can I submit a talk proposal or become a sponsor?',
      a: 'Our Call for Speakers is open on Sessionize for 40-minute deep dives and 20-minute lightning sessions. For sponsorship opportunities, download our deck from the Partners section or email us at dotnetconfamt@prpotepatilengg.ac.in.',
    },
  ];

  return (
    <section className="section band--mint" id="faq">
      <div className="wrap">
        <div className="sechead sechead--center">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>
            Frequently asked questions
          </p>
          <h2 className="h-sec">
            Everything you need to know.
          </h2>
        </div>

        <div className="faq">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq__item ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  className="faq__q"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="faq__sign" aria-hidden="true">
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="faq__a">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DncFAQ;
