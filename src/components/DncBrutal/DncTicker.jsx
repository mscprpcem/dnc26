import React from 'react';

export const DncTicker = () => {
  const tickerItems = [
    { label: 'Generative AI & Autonomous Agents', color: 'var(--magenta)' },
    { label: 'GitHub Copilot & AI Tooling', color: 'var(--blue)' },
    { label: 'Microsoft Azure Cloud-Native', color: 'var(--teal)' },
    { label: 'DevOps & CI/CD with GitHub Actions', color: 'var(--purple)' },
    { label: 'Semantic Kernel & Azure OpenAI', color: 'var(--magenta)' },
    { label: 'Modern .NET 11 & C# 14', color: 'var(--purple)' },
    { label: 'Cloud Microservices & .NET Aspire', color: 'var(--teal)' },
    { label: '500+ Engineers at PRPCEM Amravati', color: 'var(--gold)' },
  ];

  return (
    <div className="ticker-wrap" aria-hidden="true">
      <div className="ticker">
        <div className="ticker__track">
          {/* Render twice for continuous infinite marquee looping */}
          <div className="ticker__group">
            {tickerItems.map((item, idx) => (
              <span
                key={`ticker-1-${idx}`}
                className="ticker__item"
                style={{ '--c': item.color }}
              >
                {item.label}
              </span>
            ))}
          </div>
          <div className="ticker__group">
            {tickerItems.map((item, idx) => (
              <span
                key={`ticker-2-${idx}`}
                className="ticker__item"
                style={{ '--c': item.color }}
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DncTicker;
