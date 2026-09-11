import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  disabled = false,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#512BD4] focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 cursor-pointer box-border text-center';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 min-h-[36px] gap-1.5 font-medium',
    md: 'text-sm px-5 py-2.5 min-h-[42px] gap-2 font-semibold',
    lg: 'text-sm sm:text-base px-6 py-3 min-h-[48px] gap-2.5 font-bold',
  };

  const variantStyles = {
    primary:
      'bg-[#512BD4] text-white shadow-sm hover:bg-[#4322B3] active:bg-[#391C9A] border border-transparent',
    secondary:
      'bg-white text-[#171717] border border-[#E5E7EB] hover:bg-[#F7F7F8] hover:border-[#D1D5DB] shadow-2xs active:bg-[#F0F0F2]',
    outline:
      'bg-transparent text-[#512BD4] border border-[#512BD4]/40 hover:bg-[#512BD4]/5 hover:border-[#512BD4]',
    ghost:
      'bg-transparent text-[#171717] hover:bg-[#F7F7F8] hover:text-[#512BD4]',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${fullWidth ? 'w-full' : ''} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="inline-flex shrink-0 items-center justify-center -ml-0.5">{icon}</span>
      )}
      <span className="inline-block leading-none">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="inline-flex shrink-0 items-center justify-center -mr-0.5">{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={combinedClasses}
        aria-disabled={disabled}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {content}
    </button>
  );
};

export default Button;
