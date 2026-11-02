export const CONTACT_INFO = {
  name: "Tharun Lens",
  tagline: "Professional Photography for Every Moment",
  phone: "+91-9121497402",
  phoneDisplay: "+91 91214 97402",
  email: "bonamtharun2244@gmail.com",
  instagram: "tharun.lens",
  instagramUrl: "https://instagram.com/tharun.lens",
  website: "tharunlens.com",
  hours: "Monday – Sunday: 9:00 AM – 8:00 PM (IST)",
  emergency: "Emergency & express shoots available upon request",
  location: "Pan-India Studio & On-Location (Available for Worldwide Destination Shoots)",
  whatsappNumber: "919121497402",
  experienceYears: "10+",
  satisfiedClients: "1,200+",
  avgRating: "4.97",
  reviewCount: "280+",
  responseTimes: {
    phone: "Within 1 hour",
    email: "Within 2 hours",
    whatsapp: "Within 30 minutes",
  }
};

export const PROMOTIONS = [
  {
    code: "SEASON15",
    title: "Seasonal Month-End Offer",
    discount: "15% OFF",
    percentage: 15,
    description: "Book before the month ends to secure an instant 15% discount on all packages.",
    badge: "Limited Time",
    expiresText: "Only 3 shoot slots remaining this month"
  },
  {
    code: "EARLY10",
    title: "Early Bird Advantage",
    discount: "Extra 10% OFF",
    percentage: 10,
    description: "Reserve your shoot date at least 30 days in advance to enjoy an additional 10% saving.",
    badge: "Advance Booking"
  },
  {
    code: "BUNDLE25",
    title: "Multi-Service Bundle",
    discount: "Save 25%",
    percentage: 25,
    description: "Combine 2 or more photography categories (e.g., Architecture + Commercial Video) and save 25%.",
    badge: "Best Value"
  }
];

export const SERVICES_DATA = [
  {
    id: "architecture",
    title: "Architectural Photography",
    shortTitle: "Architecture",
    tagline: "Precision lines, dramatic lighting, and spatial mastery.",
    description: "Showcase your architectural projects with stunning professional photography. Perfect for real estate developers, interior designers, construction companies, historical preservation organizations, and luxury tourism boards.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    packages: [
      {
        id: "arch-basic",
        name: "Basic Architecture",
        priceRange: "₹15,000 – ₹25,000",
        basePrice: 20000,
        badge: "Standard",
        delivery: "Within 5 days",
        revisions: "1 round of revisions",
        features: [
          "4–6 hours on-location shooting",
          "50–75 hand-edited high-resolution photos",
          "Full digital high-resolution files",
          "Perspective & distortion correction",
          "1 round of client revisions",
          "Standard web & print licensing",
          "Delivery within 5 business days"
        ],
        idealFor: "Apartments, retail stores, boutique cafes & small builds."
      },
      {
        id: "arch-pro",
        name: "Professional Architecture",
        priceRange: "₹40,000 – ₹60,000",
        basePrice: 50000,
        badge: "Most Popular",
        isPopular: true,
        delivery: "Within 7 days",
        revisions: "2 rounds of revisions",
        features: [
          "Full-day shoot (8 hours on-location)",
          "100–150 masterfully edited photos",
          "Drone aerial photography (where permissible)",
          "Dawn / Dusk Golden Hour lighting capture",
          "2 rounds of detailed revisions",
          "Print-ready ultra-high-resolution files",
          "Portfolio and commercial promotional license",
          "Delivery within 7 business days"
        ],
        idealFor: "Luxury villas, corporate offices, hotels & commercial complexes."
      },
      {
        id: "arch-premium",
        name: "Premium Architecture",
        priceRange: "₹75,000 – ₹1,50,000",
        basePrice: 110000,
        badge: "Flagship Project",
        delivery: "Within 10 days",
        revisions: "Unlimited revisions",
        features: [
          "Multi-day comprehensive project coverage",
          "200+ signature edited photographs",
          "Drone 4K aerial + ground level micro-details",
          "Optional 4K video walkthrough teaser clips",
          "Professional high-end architectural retouching",
          "Unlimited revision rounds until 100% satisfied",
          "Premium exhibition-grade prints (12x18 inches)",
          "Exhibition & international publication license",
          "Delivery within 10 business days"
        ],
        idealFor: "Heritage resorts, monumental structures, master-planned developments."
      }
    ]
  },
  {
    id: "nature",
    title: "Nature & Landscape Photography",
    shortTitle: "Nature & Landscape",
    tagline: "Untamed beauty, ethereal light, and cinematic vistas.",
    description: "Experience nature through stunning landscape photography. Perfect for state tourism boards, travel guides, luxury eco-resorts, environmental organizations, and bespoke fine art collections.",
    heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    packages: [
      {
        id: "nature-explorer",
        name: "Landscape Explorer",
        priceRange: "₹10,000 – ₹20,000",
        basePrice: 15000,
        badge: "Essential",
        delivery: "Within 5 days",
        revisions: "1 revision round",
        features: [
          "Half-day shoot (4 hours on-field)",
          "30–50 hand-edited high-res photos",
          "Digital archival files (RAW converted TIFF + JPG)",
          "Color enhancement & HDR balance",
          "1 round of revisions",
          "Delivery within 5 business days"
        ],
        idealFor: "Editorial features, travel blogs & boutique landscape sets."
      },
      {
        id: "nature-collector",
        name: "Nature Collector",
        priceRange: "₹30,000 – ₹50,000",
        basePrice: 40000,
        badge: "Recommended",
        isPopular: true,
        delivery: "Within 7 days",
        revisions: "2 revision rounds",
        features: [
          "Full-day expedition (8–10 hours)",
          "80–120 curated & edited photos",
          "Pre-shoot location scouting included",
          "Dawn & dusk lighting coverage",
          "2 revision rounds",
          "Professional printing consultation included",
          "Delivery within 7 business days"
        ],
        idealFor: "Resorts, adventure tourism, nature reserves & campaigns."
      },
      {
        id: "nature-series",
        name: "Professional Series",
        priceRange: "₹60,000 – ₹1,20,000",
        basePrice: 85000,
        badge: "Fine Art & Expedition",
        delivery: "Within 10 days",
        revisions: "Unlimited revisions",
        features: [
          "Multi-day wilderness / landscape expedition",
          "150+ signature edited photographs",
          "Sunrise, sunset, golden hour & astrophotography night shots",
          "Seasonal transition coverage",
          "Cinematic 4K drone video option",
          "Unlimited revision rounds",
          "Premium archival museum-grade prints",
          "Full commercial & advertising usage license",
          "Delivery within 10 business days"
        ],
        idealFor: "Tourism boards, documentary foundations & high-end art decor."
      }
    ]
  },
  {
    id: "cultural",
    title: "Cultural & Event Photography",
    shortTitle: "Cultural & Events",
    tagline: "Emotional resonance, sacred rituals, and unforgettable celebrations.",
    description: "Preserve precious cultural moments and events. Perfect for weddings, grand festivals, religious ceremonies, community documentation, and high-profile corporate galas.",
    heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    packages: [
      {
        id: "event-basic",
        name: "Event Coverage",
        priceRange: "₹15,000 – ₹30,000",
        basePrice: 22000,
        badge: "Single Session",
        delivery: "Within 7 days",
        revisions: "1 revision round",
        features: [
          "4–6 hours event coverage",
          "50–100 color-graded edited photos",
          "Curated private digital online album",
          "Candid expressions + key ceremony highlights",
          "1 round of revisions",
          "Delivery within 7 business days"
        ],
        idealFor: "Intimate family gatherings, birthdays, engagements, symposiums."
      },
      {
        id: "event-complete",
        name: "Complete Documentation",
        priceRange: "₹40,000 – ₹75,000",
        basePrice: 55000,
        badge: "Client Favorite",
        isPopular: true,
        delivery: "Within 10 days",
        revisions: "2 revision rounds",
        features: [
          "Full-day coverage (8–12 hours)",
          "150–250 hand-crafted edited photos",
          "Cinematic video highlight reel (3–5 minutes)",
          "Custom designed hardcover photo album",
          "2 rounds of album layout revisions",
          "High-quality physical prints set",
          "Delivery within 10 business days"
        ],
        idealFor: "Weddings, multi-session rituals, cultural festivals, gala summits."
      },
      {
        id: "event-premium",
        name: "Premium Event Coverage",
        priceRange: "₹75,000 – ₹1,50,000+",
        basePrice: 120000,
        badge: "Royal Experience",
        delivery: "Within 14 days",
        revisions: "Unlimited revisions",
        features: [
          "Multiple day comprehensive coverage",
          "300+ editorial edited photos",
          "Full-length professional 4K documentary video (30 mins)",
          "Drone aerial coverage for grand procession/venue",
          "Luxury handcrafted heirloom photo books (12x18)",
          "Engraved wooden USB keepsake album",
          "Same-day preview highlights (15-20 social media photos)",
          "Unlimited revisions until perfection",
          "Delivery within 14 business days"
        ],
        idealFor: "Destination weddings, national cultural galas, temple consecrations."
      }
    ]
  },
  {
    id: "commercial",
    title: "Commercial & Product Photography",
    shortTitle: "Commercial & Product",
    tagline: "Crisp textures, flawless lighting, and visual persuasion that sells.",
    description: "Professional product and commercial photography tailored for brands, e-commerce storefronts, catalogs, and high-converting marketing campaigns that turn browsers into buyers.",
    heroImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    packages: [
      {
        id: "prod-basic",
        name: "Basic Product Shoot",
        priceRange: "₹8,000 – ₹15,000",
        basePrice: 12000,
        badge: "Starter",
        delivery: "Within 5 days",
        revisions: "1 revision round",
        features: [
          "2–3 hours dedicated studio / on-site shoot",
          "20–30 clean, color-calibrated product photos",
          "Pure white background (Amazon/Shopify compliant)",
          "Basic shadow and reflection control",
          "Full digital high-resolution files",
          "Delivery within 5 business days"
        ],
        idealFor: "New product launches, small Amazon/Flipkart catalogs."
      },
      {
        id: "prod-pro",
        name: "Professional Product",
        priceRange: "₹25,000 – ₹50,000",
        basePrice: 38000,
        badge: "Best Seller",
        isPopular: true,
        delivery: "Within 7 days",
        revisions: "2 revision rounds",
        features: [
          "Half-day shoot (4–6 hours studio/location)",
          "50–80 high-impact product photos",
          "Multiple contextual & creative styled backgrounds",
          "Lifestyle in-context product usage shots included",
          "Advanced dust/scratch retouching & color accuracy",
          "2 rounds of creative revisions",
          "Web-optimized + print-ready asset folders",
          "Delivery within 7 business days"
        ],
        idealFor: "D2C brands, luxury merchandise, cosmetics, gourmet food & drink."
      },
      {
        id: "prod-business",
        name: "Complete Business Package",
        priceRange: "₹60,000 – ₹1,50,000",
        basePrice: 95000,
        badge: "Full Campaign",
        delivery: "Within 14 days",
        revisions: "Unlimited revisions",
        features: [
          "Full commercial production services",
          "100+ masterfully edited advertising images",
          "Multi-location shoot (studio + live environment)",
          "Lifestyle shots with professional models/talent",
          "Micro-video content (15–30 sec reels/TikTok/ads)",
          "Web, mobile, outdoor billboard print-ready formats",
          "Commercial perpetual advertising rights",
          "Unlimited revision rounds",
          "Delivery within 14 business days"
        ],
        idealFor: "Omnichannel brand campaigns, billboard advertising, flagship catalogs."
      }
    ]
  }
];

export const GALLERY_ITEMS = [
  // Architectural
  {
    id: "g-arch-1",
    category: "architecture",
    categoryLabel: "Architecture",
    title: "Brihadeeswara Heritage Temple Monolith",
    location: "Thanjavur, Tamil Nadu",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=85",
    camera: "Sony Alpha A7R V • FE 24-70mm f/2.8 GM II",
    exif: "24mm • f/8.0 • 1/320s • ISO 100",
    client: "Heritage Tourism Board",
    story: "Documenting the thousand-year-old Chola architectural wonder at sunrise, preserving granite stonework nuances without shadows."
  },
  {
    id: "g-arch-2",
    category: "architecture",
    categoryLabel: "Architecture",
    title: "Minimalist Concrete & Glass Villa",
    location: "Hyderabad, Telangana",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    camera: "Hasselblad X2D 100C • XCD 38mm f/2.5",
    exif: "38mm • f/11 • 1/60s • ISO 64",
    client: "Aura Living Architecture",
    story: "Twilight elevation showcasing the seamless blend of interior warm cove lighting against cool dusk blue tones."
  },
  {
    id: "g-arch-3",
    category: "architecture",
    categoryLabel: "Architecture",
    title: "Regal Marble Palace Corridor",
    location: "Udaipur, Rajasthan",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=85",
    camera: "Canon EOS R5 • RF 15-35mm f/2.8L IS",
    exif: "18mm • f/7.1 • 1/125s • ISO 200",
    client: "Royal Rajputana Hotels",
    story: "Capturing symmetric arches and natural morning light spill across hand-carved Makrana marble corridors."
  },
  {
    id: "g-arch-4",
    category: "architecture",
    categoryLabel: "Architecture",
    title: "Contemporary Parametric Facade",
    location: "Bengaluru, Karnataka",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    camera: "Sony Alpha A7R V • FE 16-35mm f/2.8 GM",
    exif: "20mm • f/9.0 • 1/400s • ISO 100",
    client: "Nexus Tech Parks",
    story: "Dynamic geometry framed against crisp skies, highlighting solar-shading louver precision."
  },

  // Nature & Landscape
  {
    id: "g-nature-1",
    category: "nature",
    categoryLabel: "Nature & Landscape",
    title: "Misty Sunrise Over Himalayan Crests",
    location: "Ladakh, India",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
    camera: "Nikon Z8 • NIKKOR Z 70-200mm f/2.8 VR S",
    exif: "135mm • f/8.0 • 1/500s • ISO 64",
    client: "High Altitude Expeditions",
    story: "First rays catching sub-zero glacial peaks at 14,000 feet, highlighting layered mountain ridge depth."
  },
  {
    id: "g-nature-2",
    category: "nature",
    categoryLabel: "Nature & Landscape",
    title: "Emerald Backwaters at Dawn",
    location: "Alleppey, Kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85",
    camera: "DJI Mavic 3 Pro Cine • Hasselblad Camera",
    exif: "24mm • f/2.8 • 1/640s • ISO 100",
    client: "Kerala Tourism Development",
    story: "Aerial perspective of calm waterways veiled in morning fog, reflecting traditional wooden houseboats."
  },
  {
    id: "g-nature-3",
    category: "nature",
    categoryLabel: "Nature & Landscape",
    title: "Golden Hour Wave Crest",
    location: "Gokarna Coastline",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
    camera: "Sony Alpha A7R V • FE 100-400mm f/4.5-5.6 GM",
    exif: "250mm • f/5.6 • 1/2000s • ISO 200",
    client: "Coastal Conservation Trust",
    story: "Macro sea-spray frozen in suspended animation during golden hour low tide."
  },
  {
    id: "g-nature-4",
    category: "nature",
    categoryLabel: "Nature & Landscape",
    title: "Thar Desert Dune Shadows",
    location: "Jaisalmer, Rajasthan",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=85",
    camera: "Canon EOS R5 • RF 24-70mm f/2.8L",
    exif: "50mm • f/11 • 1/320s • ISO 100",
    client: "Desert Nomads Travel",
    story: "Graphic wind-sculpted sand patterns highlighted by low raking sunset angles."
  },

  // Cultural & Events
  {
    id: "g-cult-1",
    category: "cultural",
    categoryLabel: "Cultural & Events",
    title: "Kathakali Expression & Mudra",
    location: "Kochi, Kerala",
    image: "https://images.unsplash.com/photo-1609137144820-22c7104b281f?auto=format&fit=crop&w=1200&q=85",
    camera: "Sony Alpha A1 • FE 85mm f/1.4 GM",
    exif: "85mm • f/1.8 • 1/400s • ISO 400",
    client: "Kerala Kalamandalam",
    story: "Intense emotive eye movement and intricate herbal face makeup captured during a midnight temple ritual."
  },
  {
    id: "g-cult-2",
    category: "cultural",
    categoryLabel: "Cultural & Events",
    title: "Royal Hindu Wedding Pheras",
    location: "Jaipur Palace, Rajasthan",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85",
    camera: "Sony Alpha A7R V • FE 50mm f/1.2 GM",
    exif: "50mm • f/1.4 • 1/500s • ISO 320",
    client: "Arjun & Anjali",
    story: "Candid emotional moment as the bride and groom exchange sacred vows around the holy agni."
  },
  {
    id: "g-cult-3",
    category: "cultural",
    categoryLabel: "Cultural & Events",
    title: "Varanasi Ganga Aarti Flame Devotion",
    location: "Dashashwamedh Ghat, Varanasi",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=85",
    camera: "Canon EOS R5 • RF 28-70mm f/2L USM",
    exif: "35mm • f/2.0 • 1/250s • ISO 800",
    client: "Ganga Heritage Archive",
    story: "Synchronized brass lamps casting a divine golden haze over thousands of riverbank devotees."
  },
  {
    id: "g-cult-4",
    category: "cultural",
    categoryLabel: "Cultural & Events",
    title: "Joyous Colors of Braj Holi",
    location: "Vrindavan, Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=85",
    camera: "Nikon Z8 (Weather Sealed) • 24-70mm f/2.8",
    exif: "28mm • f/4.0 • 1/1600s • ISO 400",
    client: "National Geographic Traveler (Story Feature)",
    story: "Explosion of organic gulal pigments frozen mid-air amidst ecstatic temple celebration."
  },

  // Commercial & Product
  {
    id: "g-comm-1",
    category: "commercial",
    categoryLabel: "Commercial & Product",
    title: "Luxury Horology Timepiece",
    location: "Tharun Lens Studio",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=85",
    camera: "Phase One IQ4 150MP • Schneider 120mm Macro",
    exif: "120mm • f/16 (Focus Stacked) • 1/125s • ISO 50",
    client: "Chronos Haute Horlogerie",
    story: "28-frame focus stack revealing micro-beveled gear teeth, sapphire glass reflection control, and rose gold luster."
  },
  {
    id: "g-comm-2",
    category: "commercial",
    categoryLabel: "Commercial & Product",
    title: "Artisan Single-Origin Roast Coffee",
    location: "Coorg Estate Roastery",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85",
    camera: "Sony Alpha A7R V • FE 90mm f/2.8 Macro G OSS",
    exif: "90mm • f/3.5 • 1/200s • ISO 160",
    client: "Araku Valley Coffee Co.",
    story: "Warm organic morning light highlighting roasted bean sheen and rising aromatic steam."
  },
  {
    id: "g-comm-3",
    category: "commercial",
    categoryLabel: "Commercial & Product",
    title: "Botanical Skincare Essence Bottle",
    location: "Tharun Lens Studio",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1200&q=85",
    camera: "Canon EOS R5 • RF 100mm f/2.8L Macro IS",
    exif: "100mm • f/11 • 1/160s • ISO 100",
    client: "PureVeda Organics",
    story: "Water droplet surface tension on frosted frosted glass bottle, engineered for high-converting e-commerce ads."
  },
  {
    id: "g-comm-4",
    category: "commercial",
    categoryLabel: "Commercial & Product",
    title: "Handcrafted Heritage Leather Satchel",
    location: "Lifestyle Studio Suite",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=85",
    camera: "Sony Alpha A7R V • FE 50mm f/1.2 GM",
    exif: "50mm • f/2.0 • 1/250s • ISO 125",
    client: "Tan & Hide Goods",
    story: "Rich saddle leather grain and brass buckle patina styled with traveler notebook and vintage compass."
  }
];

export const BEFORE_AFTER_SAMPLE = {
  title: "The Signature Tharun Lens Difference",
  subtitle: "Drag the slider to inspect Raw Sensor Capture vs. Tharun Lens Signature Editorial Color Grade & Retouching",
  beforeImage: "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&q=70", // desaturated / flat look simulated
  afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90",  // vibrant polished editorial
  beforeLabel: "RAW Flat In-Camera Exposure",
  afterLabel: "Tharun Lens Signature Color Grade",
  details: [
    "Precision dynamic range recovery in deep shadows and sky highlights",
    "Color calibration accurate to client pantone branding",
    "Micro-contrast enhancement without artificial digital noise",
    "Architectural perspective correction & lens distortion removal"
  ]
};

export const WHY_CHOOSE_US = [
  {
    icon: "Award",
    title: "10+ Years of Professional Excellence",
    description: "Decade of award-winning mastery. Featured in leading design and tourism publications with thousands of delighted clients across India and globally."
  },
  {
    icon: "Camera",
    title: "Cutting-Edge Flagship Gear",
    description: "Commercial high-megapixel bodies (100MP Hasselblad, 61MP Sony A7R V), prime G-Master glass, 4K aerial drone systems, and Profoto calibrated lighting."
  },
  {
    icon: "Sparkles",
    title: "Artistic Vision Meets Technical Precision",
    description: "We don't just take pictures—we craft visual stories. Bespoke color science, meticulous composition, and a timeless aesthetic that outlives trends."
  },
  {
    icon: "Clock",
    title: "Guaranteed 5–14 Day Turnaround",
    description: "No endless waiting. Strict turnaround timelines with real-time project updates and express rush delivery options for urgent commercial deadlines."
  },
  {
    icon: "ShieldCheck",
    title: "100% Satisfaction Guarantee",
    description: "Your trust is everything. We back every project with revision rounds, free pre-shoot consultations, and an ironclad 7-day satisfaction promise."
  },
  {
    icon: "Tag",
    title: "Transparent & Competitive Pricing",
    description: "Clear tiered pricing starting at ₹8,000. Absolutely zero hidden fees, milestone payment schedules, and bundled savings for maximum ROI."
  }
];

export const PRICING_COMPARISON = [
  {
    tier: "Budget Freelancers",
    priceRange: "₹2,000 – ₹5,000",
    equipment: "Entry-level kit lens, consumer flash",
    turnaround: "Unpredictable (Weeks to Months)",
    revisions: "Rarely included / uncalibrated",
    reliability: "High cancellation risk, no contract",
    result: "Flat, grainy, amateur snapshots that hurt your brand reputation.",
    isHighlight: false
  },
  {
    tier: "Tharun Lens (The Gold Standard)",
    priceRange: "₹10,000 – ₹1,50,000",
    equipment: "Flagship 61MP/100MP, Drone 4K, Profoto Lighting",
    turnaround: "Guaranteed 5–14 Days (Express 48hr available)",
    revisions: "1 to Unlimited rounds included",
    reliability: "Formal contract, 100% money-back guarantee",
    result: "Award-winning, timeless visual storytelling that directly drives bookings, sales & emotional connection.",
    isHighlight: true
  },
  {
    tier: "Luxury Corporate Agencies",
    priceRange: "₹1,00,000 – ₹5,00,000+",
    equipment: "Commercial standard",
    turnaround: "14–30 Days",
    revisions: "Strictly metered per billing hour",
    reliability: "High overhead pass-through cost",
    result: "High-quality output, but 3x–5x inflated agency overhead fees.",
    isHighlight: false
  }
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    name: "Consultation (100% Free)",
    subtitle: "Understanding your unique vision",
    details: "We discuss your creative vision, brand identity, project scope, preferred locations, and schedule. Zero obligation, just pure creative alignment."
  },
  {
    step: "02",
    name: "Tailored Quotation",
    subtitle: "Transparent packages & contract",
    details: "You receive a clear, itemized proposal based on your exact requirements, deliverable count, timelines, and flexible milestone payment options."
  },
  {
    step: "03",
    name: "Pre-Production & Scouting",
    subtitle: "Detailed prep for visual perfection",
    details: "We scout locations, track sun angles / golden hour timing, create mood boards, prepare equipment, and establish a minute-by-minute shot list."
  },
  {
    step: "04",
    name: "The Shoot Day",
    subtitle: "Mastery in motion",
    details: "Punctual, professional execution with tethered live previews, drone flights, artistic direction, and real-time adjustments for ultimate peace of mind."
  },
  {
    step: "05",
    name: "Masterful Post-Production",
    subtitle: "Signature color science & retouching",
    details: "Each selected image undergoes precision hand-editing, perspective correction, tone curve calibration, high-end skin/texture retouching, and quality checks."
  },
  {
    step: "06",
    name: "Delivery & Archival Care",
    subtitle: "Pristine files & lifetime backup",
    details: "High-resolution web & print folders delivered via private cloud gallery + physical keepsake albums. Revisions completed swiftly until 100% satisfied."
  }
];

export const TESTIMONIALS = [
  {
    quote: "Tharun captured the essence of our heritage temple beautifully. The architectural details were perfect, and the editing was deeply professional. We used his photos for our official tourism brochure and received phenomenal acclaim. Highly recommended!",
    author: "Ramesh Reddy",
    role: "Director of Tourism & Heritage",
    company: "Heritage Tourism Board",
    rating: 5,
    tag: "Architecture & Heritage"
  },
  {
    quote: "Best investment for our new luxury resort! Tharun's landscape and architectural photography made our property look absolutely breathtaking. The visual assets directly increased our direct guest bookings by over 45%. Punctual, visionary, and remarkably reliable!",
    author: "Priya Sharma",
    role: "General Manager",
    company: "Serena Valley Luxury Resorts",
    rating: 5,
    tag: "Resort & Landscape"
  },
  {
    quote: "Our family wanted to preserve our sacred cultural festival. Tharun didn't just document it—he told our story with immense soul and reverence. The photos are emotional, vibrant, and timeless. Every single person in our community was moved to tears!",
    author: "Arjun & Anjali",
    role: "Community Leaders & Patrons",
    company: "Braj Cultural Heritage Initiative",
    rating: 5,
    tag: "Cultural & Events"
  },
  {
    quote: "We needed crisp product photography for our e-commerce catalog. Tharun delivered 100+ pristine, catalog-compliant images in record turnaround time. Our web conversion rates spiked by 35% within the first month. An absolute game-changer!",
    author: "Vikram Patel",
    role: "Founder & CEO",
    company: "LuxeVibe Direct-To-Consumer",
    rating: 5,
    tag: "Commercial & Product"
  },
  {
    quote: "Professional, punctual, and fiercely passionate about his craft. Tharun's architectural photography brought our multi-crore real estate towers to life on international investor brochures. Worth every single rupee!",
    author: "Deepak Malhotra",
    role: "Managing Director",
    company: "Malhotra Skyrise Realty Developers",
    rating: 5,
    tag: "Real Estate & Architecture"
  }
];

export const FAQS = [
  {
    question: "Your prices seem higher than standard local photographers. Why should I invest?",
    answer: "Our rates directly reflect 10+ years of proven award-winning expertise, commercial-grade flagship gear (100MP Hasselblad & 61MP Sony bodies, calibrated lighting, drones), and meticulous post-production color science. A budget photographer delivers budget results that can dilute your brand or ruin once-in-a-lifetime moments that cannot be re-shot. When you partner with Tharun Lens, you receive magazine-grade imagery engineered to drive real business ROI and lasting emotional value."
  },
  {
    question: "Can't I just hire a cheaper freelance photographer?",
    answer: "You certainly can, but photography is an investment where cutting corners frequently leads to expensive regrets: blurry lighting, uncalibrated colors, missed moments, and ghosting during post-production. With Tharun Lens, you are protected by formal contracts, guaranteed delivery timelines, 100% satisfaction promise, and equipment backups so nothing is left to chance."
  },
  {
    question: "How long does editing and file delivery take?",
    answer: "Standard package turnaround ranges between 5 to 14 business days, depending on project complexity. We prioritize artisanal hand-crafting over rushed automated filters. For urgent corporate campaigns or wedding press releases, we also provide same-day social previews and an optional 48-Hour Express Rush delivery service."
  },
  {
    question: "Do you offer revision rounds if I need adjustments?",
    answer: "Yes, absolutely! All our standard packages include 1 to 2 revision rounds for color tuning, framing, or specific crops. Premium and flagship packages feature unlimited revision rounds because we do not stop until you are 100% thrilled with every frame."
  },
  {
    question: "Can you customize a package to work with my specific budget?",
    answer: "Definitely. Our individual packages start from as accessible as ₹8,000 for boutique product shoots and ₹10,000 for landscape expeditions. We are always happy to tailor deliverable counts, shooting hours, and add-ons during your free initial consultation to perfectly align with your financial goals."
  },
  {
    question: "Do you travel for outstation or international destination shoots?",
    answer: "Yes! Tharun Lens covers projects across India (including remote Himalayan terrains, coastal Kerala, royal Rajasthan) and travels internationally for destination weddings, luxury architectural developments, and global brand campaigns. Travel & logistics are transparently itemized with zero markup."
  }
];

export const PAYMENT_POLICIES = {
  schedule: [
    { title: "50% Advance Booking Fee", desc: "Locks in your shoot date, initiates location scouting, and begins pre-production." },
    { title: "50% Final Milestone Balance", desc: "Payable upon final watermarked proof approval, right before high-res file delivery." }
  ],
  methods: [
    "UPI (Google Pay, PhonePe, Paytm, BHIM)",
    "Direct Net Banking / NEFT / IMPS",
    "Credit & Debit Cards (Visa, Mastercard, Amex, RuPay)",
    "PayPal (For International Clients)",
    "Corporate Cheque (For Verified Businesses)"
  ],
  guarantee: "7-Day Satisfaction Guarantee: If you are not thoroughly satisfied with the initial proof gallery, we will re-shoot or refund your balance according to our clear satisfaction agreement.",
  cancellation: [
    { timeline: "30+ Days Prior", refund: "Full refund minus ₹5,000 reservation fee" },
    { timeline: "15 to 30 Days Prior", refund: "50% deposit refund" },
    { timeline: "Less than 15 Days", refund: "Non-refundable (Date rescheduling permitted under genuine emergencies)" },
    { timeline: "Force Majeure / Weather", refund: "Free reschedule at zero additional cost" }
  ]
};

export const ADDONS_DATA = [
  { id: "drone-4k", name: "Drone 4K Aerial Videography & Stills", price: 12000, desc: "FAA/DGCA compliant aerial coverage with cinematic moves" },
  { id: "express-48", name: "48-Hour Priority Express Delivery", price: 8000, desc: "Jump to the front of the editing queue for urgent campaigns" },
  { id: "hardcover-album", name: "Luxury 12x18 Fine-Art Hardcover Book", price: 7500, desc: "Museum-grade luster paper with custom linen cover embossing" },
  { id: "video-reel", name: "Cinematic 60-Sec Vertical Video Reel", price: 15000, desc: "Color-graded 4K reel optimized for Instagram & TikTok reach" },
  { id: "commercial-license", name: "Full Perpetual Commercial Rights", price: 10000, desc: "Unrestricted global advertising, billboard & TV broadcast license" }
];
