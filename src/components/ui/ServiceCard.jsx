import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { business } from '../../config/business';

export default function ServiceCard({ service }) {
  const [imageError, setImageError] = useState(false);

  // WhatsApp inquiry URL pre-filled for this specific service
  const serviceWhatsAppUrl = `https://wa.me/${business.contact.whatsAppRaw}?text=${encodeURIComponent(
    `Hello Abigail, I am interested in discussing a project for ${service.title}.`
  )}`;

  return (
    <article className="service-card group">
      <div className="aspect-card relative overflow-hidden bg-stone-200">
        {!imageError ? (
          <img
            src={service.imageUrl}
            alt={service.imageAlt || service.title}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-stone-100 p-6 text-center text-stone-500">
            <span className="font-display text-lg text-stone-800">{service.title}</span>
            <span className="text-xs uppercase tracking-wider mt-1 text-stone-400">Warrington Studio</span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Zero-Pill Discipline: clean unboxed text metadata with typographic separator */}
          <div className="flex items-center gap-2 text-xs text-stone-500 uppercase tracking-wider mb-2 font-medium">
            <span>{service.category}</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Bespoke Delivery</span>
          </div>

          <h3 className="text-xl font-medium text-stone-900 mb-2 font-display">
            {service.title}
          </h3>

          <p className="text-stone-600 text-sm leading-relaxed mb-6">
            {service.description}
          </p>
        </div>

        <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
          <a
            href={serviceWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-900 group-hover:text-[#D9531E] transition-colors"
          >
            <span>Discuss on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
