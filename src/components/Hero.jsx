import React, { useState } from 'react';
import { ArrowUpRight, ArrowDown, MapPin } from 'lucide-react';
import { business } from '../config/business';
import Button from './ui/Button';

export default function Hero() {
  const [bgLoaded, setBgLoaded] = useState(false);

  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-20 overflow-hidden bg-[#141210]">
      {/* Background Image Container with Single Tonal Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={business.hero.bgImage}
          alt={business.hero.imageAlt}
          onLoad={() => setBgLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            bgLoaded ? 'opacity-40' : 'opacity-20'
          }`}
          referrerPolicy="no-referrer"
        />
        {/* Subtle Luxury Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(20, 18, 16, 0.94) 0%, rgba(20, 18, 16, 0.82) 55%, rgba(20, 18, 16, 0.65) 100%)',
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="site-container relative z-10 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-[1.5px] bg-[#D9531E]" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#D9531E]">
              {business.hero.eyebrow}
            </span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-white font-display mb-6 tracking-tight">
            {business.hero.headline}
          </h1>

          {/* Subheadline Paragraph */}
          <p
            className="text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-2xl text-white !text-white"
            style={{ color: '#FFFFFF' }}
          >
            {business.hero.subheadline}
          </p>

          {/* CTAs: Primary + Secondary */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Button
              href={business.ctas.primary.href}
              isExternal={business.ctas.primary.isExternal}
              variant="primary"
              className="text-base py-3.5 px-7"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              {business.ctas.primary.label}
            </Button>

            <Button
              href={business.ctas.secondary.href}
              variant="ghost-light"
              className="text-base py-3.5 px-7"
              icon={<ArrowDown className="w-4 h-4" />}
            >
              {business.ctas.secondary.label}
            </Button>
          </div>

          {/* Quiet Trust Line */}
          {business.hero.trustLine && (
            <div className="pt-6 border-t border-white/10 flex items-center gap-2.5 text-xs text-stone-400">
              <MapPin className="w-4 h-4 text-[#D9531E] shrink-0" />
              <span>{business.hero.trustLine}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
