import React from 'react';
import { business } from '../config/business';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#141210] text-stone-400 py-16 border-t border-white/10">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Col 1: Wordmark & Statement */}
          <div className="md:col-span-5">
            <a
              href="#"
              className="text-2xl font-display font-medium text-white tracking-tight hover:text-[#D9531E] transition-colors inline-block mb-3"
            >
              {business.name}
            </a>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm mb-4">
              {business.profession} specializing in brand identities, print collateral, packaging, and digital media for ambitious businesses.
            </p>
            <p className="text-xs uppercase tracking-wider text-[#D9531E] font-medium mb-0">
              {business.footer.craftedNote}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-stone-200 font-semibold mb-4">
              Navigation
            </h4>
            <ul className="list-none p-0 m-0 space-y-2.5 text-sm">
              {business.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-stone-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Studio & Direct Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-widest text-stone-200 font-semibold mb-4">
              Studio Location
            </h4>
            <p className="text-stone-400 text-sm leading-relaxed mb-4">
              {business.location.fullAddress}
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={business.contact.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-300 hover:text-[#D9531E] transition-colors inline-flex items-center gap-1.5"
              >
                <span>WhatsApp: {business.contact.whatsAppDisplay}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={business.contact.phoneUrl}
                className="text-stone-300 hover:text-[#D9531E] transition-colors"
              >
                Phone: {business.contact.phoneDisplay}
              </a>
              <a
                href={business.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors text-xs mt-1"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p className="mb-0">
            © {currentYear} {business.name}. {business.footer.rightsNote}
          </p>
          <p className="mb-0">
            {business.location.city}, {business.location.region}
          </p>
        </div>
      </div>
    </footer>
  );
}
