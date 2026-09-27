import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  if (!business.faq || !business.faq.items || business.faq.items.length === 0) {
    return null;
  }

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section-wrapper bg-[#F3EEE7]">
      <div className="site-container max-w-3xl">
        <SectionHeading
          eyebrow={business.faq.eyebrow}
          title={business.faq.headline}
          description={business.faq.description}
          align="center"
        />

        <div className="mt-10 divide-y divide-stone-300/70 border-t border-b border-stone-300/70">
          {business.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5">
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9531E] rounded-md py-1"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-medium text-stone-900">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-[#D9531E]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pt-3 pb-2 text-stone-600 text-base leading-relaxed">
                    <p className="mb-0">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
