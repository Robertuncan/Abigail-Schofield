/**
 * ALL BUSINESS CONTENT & CONFIGURATION
 * Edit this single file to update all copy, images, colors, services, and contact details.
 */

export const business = {
  // Identity & Core Profile
  name: "Abigail Schofield",
  profession: "Graphic Designer",
  tagline: "Creative Designs, Powerful Impact",
  brandStyle: "Luxury",
  
  // Location & Physical Studio
  location: {
    city: "Warrington",
    region: "England",
    postalCode: "WA1 1DN",
    street: "Trimble House, 9 Bold Street",
    fullAddress: "Trimble House, 9 Bold Street, Warrington, England, WA1 1DN",
    // Direct Google Maps search fallback
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Trimble+House,+9+Bold+Street,+Warrington,+England,+WA1+1DN",
  },

  // Contact Actions
  contact: {
    phoneRaw: "447868203155",
    phoneDisplay: "+44 7868 203155",
    phoneUrl: "tel:+447868203155",
    whatsAppRaw: "447868203155",
    whatsAppDisplay: "+44 7868 203155",
    whatsAppUrl: "https://wa.me/447868203155",
    // Email is omitted if no real email address provided
    email: null,
  },

  // Brand Palette
  colors: {
    primary: "#D9531E",
    primaryHover: "#BF4414",
    primarySubtle: "rgba(217, 83, 30, 0.08)",
    secondary: "#FFFFFF",
    background: "#FBF9F6",
    surface: "#F3EEE7",
    surfaceElevated: "#FFFFFF",
    ink: "#141210",
    inkMuted: "#5C5651",
    border: "rgba(20, 18, 16, 0.08)",
  },

  // Navigation Links
  navigation: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  // Call-to-Actions
  ctas: {
    primary: {
      label: "Message on WhatsApp",
      href: "https://wa.me/447868203155",
      isExternal: true,
    },
    secondary: {
      label: "View Services",
      href: "#services",
      isExternal: false,
    },
    call: {
      label: "Call Studio",
      href: "tel:+447868203155",
      isExternal: false,
    },
    directions: {
      label: "Get Directions",
      href: "https://www.google.com/maps/search/?api=1&query=Trimble+House,+9+Bold+Street,+Warrington,+England,+WA1+1DN",
      isExternal: true,
    },
  },

  // Hero Section
  hero: {
    eyebrow: "Warrington, England · Graphic Design Studio",
    headline: "Creative Designs, Powerful Impact",
    subheadline: "Bespoke visual identity, print collateral, packaging, and digital graphics crafted for businesses that value distinction.",
    trustLine: "Trimble House, 9 Bold Street, Warrington · Direct designer collaboration",
    bgImage: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Graphic design studio workspace in Warrington with brand collateral layouts",
  },

  // About Section
  about: {
    eyebrow: "The Studio",
    headline: "Design crafted with intention, clarity, and precision.",
    body1: "Based at Trimble House on Bold Street in Warrington, I work closely with businesses to transform ideas into memorable visual identities. Every project is approached with deliberate thought, balancing refined aesthetics with real-world effectiveness.",
    body2: "From enduring logos and tactile stationery to complete print packaging and digital campaigns, you work directly with me from initial concept through to final artwork delivery.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Abigail Schofield reviewing print layouts and typography specifications",
    locationBadge: "Trimble House, 9 Bold Street, Warrington",
  },

  // Main Services (All 12 requested services)
  servicesSection: {
    eyebrow: "Capabilities",
    headline: "Bespoke Graphic Design Services",
    description: "Every deliverable is crafted to exacting standards, tailored to your market, and supplied in print-ready and digital formats.",
  },
  services: [
    {
      id: "logo-design",
      title: "Logo Design",
      category: "Branding",
      description: "Distinctive, vector-crafted logomarks engineered for immediate recognition and timeless presence across all media.",
      imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Bespoke minimalist logo design process and geometric vector drafting",
    },
    {
      id: "brand-identity",
      title: "Brand Identity",
      category: "Branding",
      description: "Cohesive visual systems including typography palettes, color suites, imagery rules, and brand application guidelines.",
      imageUrl: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Comprehensive brand identity guidelines, stationery, and corporate collateral",
    },
    {
      id: "packaging-design",
      title: "Packaging Design",
      category: "Print & Physical",
      description: "Custom box structures, bottle labels, retail sleeves, and unboxing details that stand out on physical and digital shelves.",
      imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Luxury tactile product packaging box and printed retail label design",
    },
    {
      id: "business-card-design",
      title: "Business Card Design",
      category: "Print & Physical",
      description: "Sophisticated print layouts with guidance on cotton paper stocks, embossing, debossing, and foil finishes.",
      imageUrl: "https://images.unsplash.com/photo-1589330694653-dad6bc01cf0e?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Embossed premium business cards on natural textured paper stock",
    },
    {
      id: "brochure-design",
      title: "Brochure Design",
      category: "Editorial",
      description: "Multi-page booklets, corporate reports, and company profiles with clear typographic hierarchy and editorial pace.",
      imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Open editorial brochure booklet with refined typographic grid",
    },
    {
      id: "flyer-design",
      title: "Flyer Design",
      category: "Print Collateral",
      description: "Compelling promotional leaflets that communicate key messages with visual impact and immediate reader action.",
      imageUrl: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Clean, modern printed promotional flyer on studio display",
    },
    {
      id: "poster-design",
      title: "Poster Design",
      category: "Print Collateral",
      description: "Large-format exhibition, event, and display posters that command visual attention from across the room.",
      imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Typographic art poster in modern gallery frame",
    },
    {
      id: "banner-design",
      title: "Banner Design",
      category: "Display & Advertising",
      description: "Retractable roll-up banners, outdoor PVC signage, and trade event graphics prepared with exact print bleed specifications.",
      imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Large format promotional banner and visual display graphics",
    },
    {
      id: "social-media-design",
      title: "Social Media Design",
      category: "Digital",
      description: "Curated Instagram grids, carousel layouts, story templates, and LinkedIn banners tailored to your brand identity.",
      imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Curated social media visual templates and branded digital post graphics",
    },
    {
      id: "youtube-thumbnail-design",
      title: "YouTube Thumbnail Design",
      category: "Digital",
      description: "High-contrast visual compositions and bold typographic layouts engineered for high click-through rates.",
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Vibrant, high-contrast digital visual thumbnail composition",
    },
    {
      id: "website-graphics",
      title: "Website Graphics",
      category: "Digital",
      description: "Custom web banners, hero section assets, SVG icons, and interface graphics optimized for crisp screen rendering.",
      imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Modern web graphics and digital visual layout on screen",
    },
    {
      id: "infographic-design",
      title: "Infographic Design",
      category: "Information",
      description: "Structured visual representations of complex processes, survey data, and industry insights that inform and persuade.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Clean, structured data visualization and infographic presentation",
    },
  ],

  // Why Choose Us Section
  whyChooseUs: {
    eyebrow: "Our Approach",
    headline: "Direct Craft, Local Focus",
    description: "Built on transparent communication, meticulous attention to detail, and a focus on long-term value.",
    points: [
      {
        number: "01",
        title: "Warrington Studio Presence",
        text: "Based at Trimble House on Bold Street, offering accessible local collaboration and direct accountability.",
      },
      {
        number: "02",
        title: "Complete Visual Cohesion",
        text: "From your primary logo mark to packaging, brochures, and digital assets, every touchpoint reinforces one consistent brand standard.",
      },
      {
        number: "03",
        title: "Direct Designer Collaboration",
        text: "You communicate directly with Abigail via WhatsApp or phone. No intermediary account managers or communication delays.",
      },
    ],
  },

  // Testimonials (Omitted cleanly if none provided in prompt)
  testimonials: [],

  // FAQ Section (Genuine questions that help prospective clients)
  faq: {
    eyebrow: "Questions",
    headline: "Frequently Asked Questions",
    description: "Clear answers to common questions about starting a graphic design project.",
    items: [
      {
        question: "How do we get started on a project?",
        answer: "The quickest way is to send a message on WhatsApp or call the studio. We will discuss your goals, deliverables, and timeline, then prepare a clear scope before starting work.",
      },
      {
        question: "What file formats will I receive?",
        answer: "You receive industry-standard files for every use case: print-ready vector PDFs with bleed, EPS and SVG vector assets, plus high-resolution PNGs and JPEGs formatted for web and social media.",
      },
      {
        question: "Can I request changes during the design process?",
        answer: "Yes. Every project includes structured review stages where we refine concepts together to ensure the final artwork aligns perfectly with your vision.",
      },
      {
        question: "Where are you located in Warrington?",
        answer: "The studio is located at Trimble House, 9 Bold Street in Warrington town centre (WA1 1DN). Consultations can be handled in person or directly via phone and WhatsApp.",
      },
    ],
  },

  // Contact Section
  contactSection: {
    eyebrow: "Get In Touch",
    headline: "Start Your Design Project",
    description: "Share your project requirements, request a quote, or reach out directly on WhatsApp to discuss your timeline.",
  },

  // Footer Information
  footer: {
    rightsNote: "All rights reserved.",
    craftedNote: "Bespoke Graphic Design · Warrington, England",
  },
};
