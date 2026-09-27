import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) {
  const isCentered = align === 'center';

  return (
    <div
      className={`mb-12 ${isCentered ? 'text-center flex flex-col items-center' : ''} ${className}`}
    >
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      {title && <h2 className="text-stone-900">{title}</h2>}
      {description && (
        <p
          className={`mt-4 text-stone-600 text-lg leading-relaxed ${
            isCentered ? 'mx-auto' : ''
          }`}
          style={{ maxWidth: '65ch' }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
