import React, { useState } from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import ServiceCard from './ui/ServiceCard';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Branding',
    'Print & Physical',
    'Digital',
    'Editorial',
  ];

  const filteredServices =
    activeCategory === 'All'
      ? business.services
      : business.services.filter((s) => {
          if (activeCategory === 'Branding') return s.category === 'Branding';
          if (activeCategory === 'Print & Physical')
            return (
              s.category === 'Print & Physical' ||
              s.category === 'Print Collateral' ||
              s.category === 'Display & Advertising'
            );
          if (activeCategory === 'Digital') return s.category === 'Digital';
          if (activeCategory === 'Editorial')
            return s.category === 'Editorial' || s.category === 'Information';
          return true;
        });

  return (
    <section id="services" className="section-wrapper bg-[#FBF9F6]">
      <div className="site-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <SectionHeading
            eyebrow={business.servicesSection.eyebrow}
            title={business.servicesSection.headline}
            description={business.servicesSection.description}
            className="mb-0"
          />

          {/* Interactive Category Segmented Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F2ECE4] rounded-lg self-start md:self-auto border border-stone-200/60">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-white text-stone-900 shadow-sm border border-stone-200/50'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-white/50'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Elevated Grid: 3 across on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Quiet Footnote about Custom Scopes */}
        <div className="mt-12 text-center pt-8 border-t border-stone-200/70">
          <p className="text-stone-500 text-sm max-w-xl mx-auto">
            Looking for a bundled brand launch package or specific print specifications?{' '}
            <a
              href={business.ctas.primary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D9531E] font-medium hover:underline"
            >
              Message Abigail directly on WhatsApp
            </a>{' '}
            for tailored advice.
          </p>
        </div>
      </div>
    </section>
  );
}
