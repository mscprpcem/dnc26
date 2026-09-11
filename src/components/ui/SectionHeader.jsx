import React from 'react';

export const SectionHeader = ({
  label,
  title,
  description,
  align = 'left',
  className = '',
}) => {
  const isCentered = align === 'center';

  return (
    <div
      className={`mb-12 sm:mb-16 ${
        isCentered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'
      } ${className}`}
    >
      {label && (
        <div
          className={`inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#512BD4] uppercase mb-3 ${
            isCentered ? 'justify-center' : ''
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#512BD4]" />
          <span>{label}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#171717] leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#5F6368] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
