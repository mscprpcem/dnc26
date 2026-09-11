import React from 'react';

export const Badge = ({
  children,
  variant = 'purple',
  size = 'md',
  className = '',
  ...props
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 font-medium tracking-wide',
    md: 'text-xs px-2.5 py-1 font-semibold tracking-wide',
  };

  const variantStyles = {
    purple: 'bg-[#F5F2FE] text-[#512BD4] border border-[#DDD4FA]',
    blue: 'bg-[#EFF6FC] text-[#0078D4] border border-[#C7E0F4]',
    neutral: 'bg-[#F7F7F8] text-[#5F6368] border border-[#E5E7EB]',
    outline: 'bg-transparent text-[#171717] border border-[#E5E7EB]',
  };

  return (
    <span
      className={`inline-flex items-center rounded-md font-mono uppercase ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.purple} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
