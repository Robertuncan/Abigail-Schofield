import React from 'react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';

/**
 * Testimonials Section:
 * Only renders when real testimonials are provided in business.js.
 * If empty, cleanly returns null without rendering filler or placeholder gaps.
 */
export default function Testimonials() {
  if (!business.testimonials || business.testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="section-wrapper bg-[#F3EEE7]">
      <div className="site-container">
        <SectionHeading
          eyebrow="Client Feedback"
          title="What Clients Say"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {business.testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between"
            >
              <blockquote className="text-stone-700 text-base leading-relaxed mb-6 italic">
                "{item.quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-stone-900 text-sm mb-0">
                  {item.author}
                </p>
                {item.company && (
                  <p className="text-stone-500 text-xs mt-1 mb-0">
                    {item.company}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
