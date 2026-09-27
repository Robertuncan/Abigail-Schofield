import React from 'react';

/**
 * Reusable Button component adhering to design tokens.
 * Variants: 'primary' | 'secondary' | 'light' | 'ghost-light'
 */
export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  isExternal = false,
  className = '',
  type = 'button',
  icon,
  ...props
}) {
  const variantClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    light: 'btn-light',
    'ghost-light': 'btn-ghost-light',
  }[variant] || 'btn-primary';

  const fullClassName = `btn ${variantClass} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={fullClassName}
        onClick={onClick}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
        {icon && <span className="inline-flex items-center ml-1">{icon}</span>}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={fullClassName}
      onClick={onClick}
      {...props}
    >
      {children}
      {icon && <span className="inline-flex items-center ml-1">{icon}</span>}
    </button>
  );
}
