import React, { useState } from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { business } from '../config/business';
import Button from './ui/Button';

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="section-wrapper bg-[#F3EEE7]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Studio Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-300/40 bg-stone-200">
              {!imageError ? (
                <img
                  src={business.about.image}
                  alt={business.about.imageAlt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-auto aspect-[4/5] object-cover"
                />
              ) : (
                <div className="w-full aspect-[4/5] bg-stone-300 flex items-center justify-center p-8 text-center text-stone-600">
                  <span className="font-display text-xl">{business.name} Studio</span>
                </div>
              )}

              {/* Quiet Location Tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#141210]/85 backdrop-blur-md rounded-lg p-3 text-white text-xs flex items-center gap-2 border border-white/10">
                <MapPin className="w-4 h-4 text-[#D9531E] shrink-0" />
                <span className="truncate">{business.about.locationBadge}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Editorial Craft Statement */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="section-eyebrow">{business.about.eyebrow}</span>
            <h2 className="text-stone-900 font-display mb-6">
              {business.about.headline}
            </h2>

            <p className="text-stone-700 text-lg leading-relaxed mb-6">
              {business.about.body1}
            </p>

            <p className="text-stone-600 text-base leading-relaxed mb-8">
              {business.about.body2}
            </p>

            {/* Direct Studio Contact Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-stone-300/60">
              <Button
                href={business.ctas.primary.href}
                isExternal={business.ctas.primary.isExternal}
                variant="primary"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Discuss a Project
              </Button>

              <Button
                href={business.ctas.call.href}
                variant="secondary"
              >
                Call: {business.contact.phoneDisplay}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
