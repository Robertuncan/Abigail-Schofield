import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Navigation, Send, CheckCircle2 } from 'lucide-react';
import { business } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    service: 'Logo Design',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    // Build pre-filled WhatsApp message for immediate dispatch
    const text = encodeURIComponent(
      `Hello Abigail,\n\nName: ${formData.name}\nContact: ${formData.contactInfo}\nService: ${formData.service}\nDetails: ${formData.message}`
    );
    const whatsappUrl = `https://wa.me/${business.contact.whatsAppRaw}?text=${text}`;

    setSubmitted(true);
    // Open WhatsApp in new tab for direct frictionless communication
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="section-wrapper bg-[#FBF9F6]">
      <div className="site-container">
        <SectionHeading
          eyebrow={business.contactSection.eyebrow}
          title={business.contactSection.headline}
          description={business.contactSection.description}
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-10">
          {/* Column 1: Direct Contact Details & Actions */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Primary Action Card: WhatsApp */}
            {business.contact.whatsAppRaw && (
              <div className="bg-[#141210] text-white p-7 rounded-2xl border border-stone-800 shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#D9531E] flex items-center justify-center text-white">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white font-display mb-0">
                      Message on WhatsApp
                    </h3>
                    <p className="text-xs text-stone-400 mb-0">Fastest response for project inquiries</p>
                  </div>
                </div>
                <p className="text-sm text-stone-300 mb-6 leading-relaxed">
                  Send project briefs, sketches, or questions directly to Abigail for prompt guidance.
                </p>
                <Button
                  href={business.contact.whatsAppUrl}
                  isExternal={true}
                  variant="primary"
                  className="w-full text-sm py-3"
                  icon={<Send className="w-4 h-4" />}
                >
                  Open WhatsApp Chat
                </Button>
              </div>
            )}

            {/* Direct Studio Call */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F3EEE7] flex items-center justify-center text-stone-800">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-stone-900 mb-0">Direct Telephone</h4>
                  <a
                    href={business.contact.phoneUrl}
                    className="text-stone-600 hover:text-[#D9531E] font-medium text-sm transition-colors"
                  >
                    {business.contact.phoneDisplay}
                  </a>
                </div>
              </div>
              <Button
                href={business.contact.phoneUrl}
                variant="secondary"
                className="text-xs px-4 py-2"
              >
                Call
              </Button>
            </div>

            {/* Physical Studio Address & Directions */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#F3EEE7] flex items-center justify-center text-stone-800 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-stone-900 mb-1">Warrington Studio</h4>
                  <p className="text-stone-600 text-sm leading-relaxed mb-0">
                    {business.location.fullAddress}
                  </p>
                </div>
              </div>

              <Button
                href={business.location.mapsUrl}
                isExternal={true}
                variant="secondary"
                className="w-full text-xs py-2.5"
                icon={<Navigation className="w-3.5 h-3.5" />}
              >
                {business.ctas.directions.label}
              </Button>
            </div>
          </div>

          {/* Column 2: Styled Usable Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl border border-stone-200 shadow-sm">
            <h3 className="font-display text-2xl font-medium text-stone-900 mb-2">
              Send a Project Inquiry
            </h3>
            <p className="text-stone-600 text-sm mb-6">
              Fill in your details below. You can submit directly to WhatsApp for immediate discussion.
            </p>

            {submitted ? (
              <div className="p-6 bg-stone-50 rounded-xl border border-stone-200 text-center">
                <CheckCircle2 className="w-10 h-10 text-[#D9531E] mx-auto mb-3" />
                <h4 className="font-display text-lg text-stone-900 mb-2">Inquiry Prepared</h4>
                <p className="text-stone-600 text-sm mb-4">
                  WhatsApp has opened with your inquiry details. If your popup was blocked, click below to send directly:
                </p>
                <Button
                  href={`https://wa.me/${business.contact.whatsAppRaw}?text=${encodeURIComponent(
                    `Hello Abigail,\n\nName: ${formData.name}\nContact: ${formData.contactInfo}\nService: ${formData.service}\nDetails: ${formData.message}`
                  )}`}
                  isExternal={true}
                  variant="primary"
                  className="text-xs"
                >
                  Continue on WhatsApp
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-4 py-3 text-stone-900 bg-stone-50 border border-stone-300 rounded-lg text-sm focus:bg-white focus:border-[#D9531E] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="contactInfo" className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1.5">
                    Phone or WhatsApp Number *
                  </label>
                  <input
                    id="contactInfo"
                    type="text"
                    required
                    value={formData.contactInfo}
                    onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                    placeholder="e.g. +44 7123 456789"
                    className="w-full px-4 py-3 text-stone-900 bg-stone-50 border border-stone-300 rounded-lg text-sm focus:bg-white focus:border-[#D9531E] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1.5">
                    Required Service
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 text-stone-900 bg-stone-50 border border-stone-300 rounded-lg text-sm focus:bg-white focus:border-[#D9531E] focus:outline-none"
                  >
                    {business.services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1.5">
                    Project Overview / Notes
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your business, target timeline, or what you would like to achieve..."
                    className="w-full px-4 py-3 text-stone-900 bg-stone-50 border border-stone-300 rounded-lg text-sm focus:bg-white focus:border-[#D9531E] focus:outline-none resize-y"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full py-3.5 text-base"
                    icon={<Send className="w-4 h-4" />}
                  >
                    Submit Project Inquiry
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
