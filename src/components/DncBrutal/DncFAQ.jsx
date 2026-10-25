import React, { useState } from 'react';

export const DncFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is .NET Conf 2026 Amravati?',
      a: ".NET Conf 2026 Amravati is Central India's premier Microsoft developer conference hosted at PRPCEM Campus. It brings together over 500+ developers, students, and Microsoft MVPs to celebrate the launch of .NET 11, C# 14, Semantic Kernel, and Azure Cloud Native technologies.",
    },
    {
      q: 'Do I need prior experience in .NET or C# to attend?',
      a: 'Not at all! The conference caters to beginners, students, and seasoned enterprise architects alike. We feature foundational workshops, architecture deep dives, and hands-on coding sessions so everyone walks away with valuable new skills.',
    },
    {
      q: 'What are the conference tracks and themes?',
      a: 'The official session tracks and agenda themes are revealing soon based on our open Call for Speakers on Sessionize. Focus themes include .NET 11 Runtime, Semantic Kernel & Azure OpenAI, .NET Aspire & Cloud-Native, and Full-Stack Blazor & Web APIs.',
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
