import React from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-wrapper bg-[#FBF9F6]">
      <div className="site-container">
        <SectionHeading
          eyebrow={business.whyChooseUs.eyebrow}
          title={business.whyChooseUs.headline}
          description={business.whyChooseUs.description}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {business.whyChooseUs.points.map((point) => (
            <div
              key={point.number}
              className="bg-white p-8 rounded-2xl border border-stone-200/70 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="block font-display text-2xl font-light text-[#D9531E] mb-4">
                  {point.number}
                </span>
                <h3 className="text-xl font-medium text-stone-900 mb-3 font-display">
                  {point.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-0">
                  {point.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
