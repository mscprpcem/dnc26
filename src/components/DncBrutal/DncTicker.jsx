import React from 'react';

export const DncTicker = () => {
  const tickerItems = [
    { label: 'Welcome to .NET Conf', color: 'var(--magenta)' },
    { label: 'Announcing .NET 11', color: 'var(--purple)' },
    { label: 'Semantic Kernel & AI Agents', color: 'var(--blue)' },
    { label: 'Azure OpenAI & .NET Aspire', color: 'var(--teal)' },
    { label: 'Modern C# 14 & Native AOT', color: 'var(--purple)' },
    { label: 'Full-Stack Blazor & Web API', color: 'var(--coral)' },
    { label: 'MSC PRPCEM Amravati', color: 'var(--purple)' },
    { label: 'Delegate Passes Live Now', color: 'var(--magenta)' },
  ];

  return (
    <div className="ticker" aria-hidden="true">
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
  );
};

export default DncTicker;
