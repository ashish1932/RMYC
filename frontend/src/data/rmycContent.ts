export interface FleetItem {
  id: string;
  name: string;
  category: string;
  subtitle: string;
  length: string;
  capacity: string;
  type: string;
  description: string;
  idealFor: string;
  specifications: {
    beam: string;
    draft: string;
    sailArea: string;
    rigType: string;
    hullMaterial: string;
  };
  imageUrl: string;
}

export interface CourseItem {
  id: string;
  title: string;
  level: string;
  duration: string;
  vessel: string;
  certification: string;
  price: string;
  shortDescription: string;
  highlights: string[];
  syllabus: string[];
  prerequisite: string;
}

export interface EventItem {
  id: string;
  title: string;
  category: 'Sailing' | 'Racing' | 'Expeditions' | 'Club Socials';
  date: string;
  month: string;
  day: string;
  time: string;
  location: string;
  description: string;
  schedule: string[];
  imageUrl: string;
  featured?: boolean;
}

export interface InstructorItem {
  id: string;
  name: string;
  role: string;
  certification: string;
  experienceYears: number;
  seaMiles: string;
  bio: string;
  specialty: string;
  imageUrl: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  membershipYears: string;
  role: string;
  quote: string;
  story: string;
  avatarUrl: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  archivalNote: string;
  imageUrl: string;
}

export const RMYC_STATS = [
  { value: '1911', label: 'Founded by Francis Spring', subtext: 'Over a century of heritage' },
  { value: '115+', label: 'Years of Excellence', subtext: 'Pioneering Indian sailing' },
  { value: 'South India', label: 'First & Oldest Yacht Club', subtext: 'Historic coastal institution' },
  { value: 'YAI', label: 'Accredited Training Center', subtext: 'National certification standard' },
];

export const RMYC_FLEET: FleetItem[] = [
  {
    id: 'j80',
    name: 'J/80',
    category: 'Racing Yacht',
    subtitle: 'High-Performance International One-Design Yacht',
    length: '26.2 ft / 8.0 m',
    capacity: '4 – 5 Crew',
    type: 'Keelboat / Racing Yacht',
    description: 'The J/80 is globally recognized as the premier offshore & coastal racing keelboat. At RMYC, our fleet of J/80s serves both as our competitive regatta platform and our advanced training vessel for helmsmen navigating the open Bay of Bengal.',
    idealFor: 'Regatta Racing, Advanced Offshore Maneuvers, Corporate Team Building',
    specifications: {
      beam: '8.2 ft / 2.5 m',
      draft: '4.9 ft / 1.5 m',
      sailArea: '33.8 sq.m (Main + Jib)',
      rigType: 'Fractional Sloop with Asymmetric Spinnaker',
      hullMaterial: 'Fiberglass / Composite Keel'
    },
    imageUrl: '/rmyc_hero_ocean_sailing.png'
  },
  {
    id: 'laser',
    name: 'Laser (ILCA)',
    category: 'Single-Handed Dinghy',
    subtitle: 'Olympic Class Tactical Sailing Craft',
    length: '13.8 ft / 4.23 m',
    capacity: '1 Solo Skipper',
    type: 'Single-Handed Dinghy',
    description: 'Pure, responsive, and exhilarating. The Laser tests speed, tactical awareness, and physical agility. It is the perfect vessel for skippers wanting direct feedback from sail trim and body positioning against coastal swells.',
    idealFor: 'Solo Tactical Training, Physical Conditioning, Match Racing',
    specifications: {
      beam: '4.5 ft / 1.37 m',
      draft: '2.6 ft / 0.8 m',
      sailArea: '7.06 sq.m (Standard Rig)',
      rigType: 'Unrigged Cat Rig',
      hullMaterial: 'Fiberglass Composite'
    },
    imageUrl: '/rmyc_laser_dinghy_ocean.png'
  },
  {
    id: 'omega',
    name: 'Topper Omega',
    category: 'Keelboat / Trainer',
    subtitle: 'Stable Multi-Purpose Training & Leisure Vessel',
    length: '15.4 ft / 4.7 m',
    capacity: '3 – 4 Crew / Family',
    type: 'Stable Training Keelboat',
    description: 'Designed for safety, roominess, and stability. The Omega is RMYC’s primary vessel for novice sailors, family cruises, and hands-on fundamental sailing instructions inside the protected harbor before venturing offshore.',
    idealFor: 'Beginner Sailing, Family Day Cruising, Seamanship Basics',
    specifications: {
      beam: '6.2 ft / 1.88 m',
      draft: '3.2 ft / 0.98 m',
      sailArea: '14.5 sq.m',
      rigType: 'Standard Sloop with Trapeze Option',
      hullMaterial: 'Triple-Layer Polyethylene'
    },
    imageUrl: '/rmyc_omega_keelboat_ocean.png'
  }
];

export const RMYC_COURSES: CourseItem[] = [
  {
    id: 'c1-beginner',
    title: 'J/80 Essential Sailing Experience',
    level: 'Beginner',
    duration: '2 Days (Weekend / Intensive)',
    vessel: 'J/80 Racing Keelboat',
    certification: 'YAI Basic Sailing Certificate',
    price: '₹14,500 per sailor',
    shortDescription: 'The definitive introduction to ocean sailing. Master fundamental helmsmanship, sail trim, and sea safety under YAI instructor guidance.',
    highlights: [
      'Hands-on helm control from Day 1',
      'Understanding Bay of Bengal wind patterns',
      'Safety, winch handling & nautical knots',
      'Certificate recognized by Yachting Association of India'
    ],
    syllabus: [
      'Nautical Terms & Parts of the Vessel',
      'Rigging & De-rigging the J/80',
      'Points of Sail (Close Hauled, Reach, Run)',
      'Tacking & Gybing Techniques',
      'Winch Operation & Sheet Trimming',
      'Basic Knots: Bowline, Clove Hitch, Cleat Hitch',
      'Man Overboard (MOB) Recovery Protocols',
      'Harbor Navigation & Right of Way Rules'
    ],
    prerequisite: 'No prior sailing experience required. Basic swimming confidence recommended.'
  },
  {
    id: 'c2-advanced-1',
    title: 'Coastal Seamanship & Helming (Adv 1)',
    level: 'Advanced 1',
    duration: '4 Days (2 consecutive weekends)',
    vessel: 'J/80 Yacht',
    certification: 'YAI Coastal Helmsman Level 1',
    price: '₹24,000 per sailor',
    shortDescription: 'Elevate your skill to command a vessel independently. Learn coastal tide assessment, sail shape tuning, and offshore communication.',
    highlights: [
      'Precision helming in choppy swell',
      'Spinnaker rigging & asymmetric hoist',
      'Tidal flow calculation for Chennai Port channel',
      'VHF Radio operation basics'
    ],
    syllabus: [
      'Advanced Mainsail & Jib Shape Controls (Cunningham, Outhaul, Vang)',
      'Asymmetric Spinnaker Hoisting, Gybing & Dousing',
      'Using Nautical Charts & Plotting Courses',
      'Understanding Windward / Leeward Dynamics',
      'VHF Radio Emergency Procedures',
      'Anchor Operations & Mooring Line Handling'
    ],
    prerequisite: 'Completion of Beginner Course or equivalent 15 sea hours.'
  },
  {
    id: 'c3-advanced-2',
    title: 'Night Sailing & Offshore Navigation (Adv 2)',
    level: 'Advanced 2',
    duration: '5 Days including 1 Night Passage',
    vessel: 'J/80 Offshore Equipped',
    certification: 'YAI Offshore Skipper Level 2',
    price: '₹32,000 per sailor',
    shortDescription: 'Experience the magic and discipline of night sailing on the Bay of Bengal. Master light recognition, radar interpretation, and watchkeeping.',
    highlights: [
      'Overnight coastal watch keeping',
      'Lighthouse & buoy beacon identification',
      'GPS & emergency electronic plotters',
      'Storm preparation & heavy weather seamanship'
    ],
    syllabus: [
      'Night Vision Preservation & Cockpit Setup',
      'Identifying Ship Navigation Lights (COLREGS)',
      'Coastal Passage Planning & Waypoint Plotting',
      'Celestial & Compass Navigation',
      'Heavy Weather Reefing Techniques',
      'Emergency Tiller & Steering System Failure Drills'
    ],
    prerequisite: 'Completion of Advanced 1 Course & 30 logged sea hours.'
  },
  {
    id: 'c4-racing',
    title: 'Regatta Tactical Racing Masterclass',
    level: 'Racing & Competitive',
    duration: '3 Days Intensive Workshop',
    vessel: 'J/80 / Laser Performance',
    certification: 'RMYC Regatta Race Crew Endorsement',
    price: '₹28,000 per sailor',
    shortDescription: 'Train alongside national championship sailors. Master start-line positioning, windward mark tactics, speed hoisting, and match racing rules.',
    highlights: [
      'Countdown start-line strategy',
      'Match racing rules & protest procedures',
      'High-speed spinnaker gybing',
      'Video analysis & crew breakdown'
    ],
    syllabus: [
      'Start Line Time-Distance Judgment',
      'Pin-End vs. Boat-End Advantage Analysis',
      'Mark Rounding Rights & Overlap Tactics',
      'Crew Weight Placement & Heel Dynamics',
      'Spinnaker Peel & Quick Douse',
      'Race Strategy based on Local Current'
    ],
    prerequisite: 'Advanced 1 certification or competitive racing background.'
  }
];

export const RMYC_TIMELINE: TimelineMilestone[] = [
  {
    year: '1911',
    title: 'Founded by Sir Francis Spring',
    description: 'Sir Francis Spring, KCI, then Chairman of the Madras Port Trust, established the Royal Madras Yacht Club to encourage maritime sport and seamanship on the Bay of Bengal.',
    archivalNote: 'First official club commodore appointed; initial fleet comprised timber luggers.',
    imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80'
  },
  {
    year: '1935',
    title: 'Spring Haven Wharf Headquarters',
    description: 'The club secured its permanent dockage at Spring Haven Wharf inside Chennai Port, providing safe anchorage and direct access to open ocean sailing.',
    archivalNote: 'Permanent clubhouse pavilion constructed with wood timber & brass fittings.',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
  },
  {
    year: '1978',
    title: 'Inaugural Bay Regatta',
    description: 'RMYC established the annual Bay of Bengal Offshore Regatta, attracting competitive crews from across Asia and cementing South India as a sailing hub.',
    archivalNote: 'Over 30 vessels competed across dinghy and open keelboat classes.',
    imageUrl: '/rmyc_regatta_ocean_sailing.png'
  },
  {
    year: '2004',
    title: 'YAI Official Training Center Accreditation',
    description: 'Recognized by the Yachting Association of India (YAI) as a national training school, setting gold-standard certification for beginner and advanced sailors.',
    archivalNote: 'Standardized curriculum introduced for youth and adult sailors.',
    imageUrl: '/rmyc_laser_dinghy_ocean.png'
  },
  {
    year: '2015',
    title: 'Acquisition of the J/80 One-Design Fleet',
    description: 'RMYC introduced a modern fleet of J/80 international racing yachts, enabling high-performance one-design racing and offshore expedition training.',
    archivalNote: 'Positioned RMYC sailors for international one-design regatta circuits.',
    imageUrl: '/rmyc_hero_ocean_sailing.png'
  },
  {
    year: '2026',
    title: '115+ Years of Maritime Legacy',
    description: 'Today, RMYC stands as South India’s oldest sailing institution—a vibrant community preserving heritage while training the next generation of ocean explorers.',
    archivalNote: 'Modernizing digital fleet management, youth development & ocean sustainability.',
    imageUrl: '/rmyc_omega_keelboat_ocean.png'
  }
];

export const RMYC_EVENTS: EventItem[] = [
  {
    id: 'ev-1',
    title: 'RMYC Annual Bay of Bengal Regatta 2026',
    category: 'Racing',
    date: 'March 14 – 16, 2026',
    month: 'MAR',
    day: '14',
    time: '08:00 AM – 06:00 PM',
    location: 'Chennai Port Outer Anchorage to Covelong Point',
    description: 'The marquee competitive racing event of South India. Three days of intense J/80 and Laser class racing across coastal courses on the Bay of Bengal.',
    schedule: [
      'Day 1: Skipper briefing, boat inspection & Practice Race',
      'Day 2: 4 Course Races (Windward / Leeward)',
      'Day 3: Long Distance Offshore Race & Gala Prize Distribution Dinner'
    ],
    imageUrl: '/rmyc_regatta_ocean_sailing.png',
    featured: true
  },
  {
    id: 'ev-2',
    title: 'Full Moon Moonlight Sail & Harbor Sundowner',
    category: 'Club Socials',
    date: 'April 4, 2026',
    month: 'APR',
    day: '04',
    time: '05:30 PM – 09:30 PM',
    location: 'RMYC Deck & Spring Haven Wharf',
    description: 'Set sail under the silvery glow of the full moon over calm ocean waters, followed by an elegant maritime dinner on the wharf terrace.',
    schedule: [
      '05:30 PM: Sunset departure on J/80 & Omega fleet',
      '07:30 PM: Moonlight harbor cruise with live classical maritime acoustics',
      '08:30 PM: Commodores Dinner & social gathering at Clubhouse'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85',
    featured: true
  },
  {
    id: 'ev-3',
    title: 'Chennai to Puducherry Coastal Sailing Expedition',
    category: 'Expeditions',
    date: 'May 1 – 3, 2026',
    month: 'MAY',
    day: '01',
    time: '06:00 AM Departure',
    location: 'RMYC Wharf to Puducherry Port',
    description: 'An exhilarating 85-nautical-mile passage along the Coromandel Coast. Test watch-keeping skills, coastal navigation, and open-ocean endurance.',
    schedule: [
      'May 1: Early dawn departure from Chennai Port; offshore watch rotation',
      'May 2: Arrival at Puducherry Harbor & French Quarter exploration',
      'May 3: Return passage or crew handover'
    ],
    imageUrl: '/rmyc_hero_ocean_sailing.png'
  },
  {
    id: 'ev-4',
    title: 'Youth & Junior Cadet Summer Sailing Clinic',
    category: 'Sailing',
    date: 'May 18 – 22, 2026',
    month: 'MAY',
    day: '18',
    time: '08:30 AM – 01:00 PM Daily',
    location: 'RMYC Training Basin',
    description: 'A 5-day hands-on summer clinic introducing young sailors (ages 10–18) to water confidence, Optimist dinghy sailing, wind direction, and sea safety.',
    schedule: [
      'Daily 08:30 AM: Theory & Knots Workshop',
      'Daily 09:30 AM: Water session on Optimist & Laser craft',
      'May 22: Junior Cadet Graduation & Regatta'
    ],
    imageUrl: '/rmyc_laser_dinghy_ocean.png'
  }
];

export const RMYC_INSTRUCTORS: InstructorItem[] = [
  {
    id: 'inst-1',
    name: 'Capt. Vikramaditya Rao',
    role: 'Chief Sailing Master & YAI Assessor',
    certification: 'YAI Senior Instructor / Offshore Yachtmaster',
    experienceYears: 24,
    seaMiles: '45,000+ NM',
    bio: 'Former Naval Officer and veteran regatta winning skipper. Capt. Rao has trained over 1,200 sailors and leads RMYC’s advanced seamanship and navigation programs.',
    specialty: 'Offshore Navigation & J/80 Tactics',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'inst-2',
    name: 'Ananya Sundaram',
    role: 'Senior Fleet Instructor',
    certification: 'YAI Certified Dinghy & Keelboat Instructor',
    experienceYears: 12,
    seaMiles: '18,000+ NM',
    bio: 'National Laser Championship medalist with a passion for introducing beginners to ocean sailing. Ananya specializes in sail trim mechanics and weather reading.',
    specialty: 'Beginner J/80 & Laser Performance',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'inst-3',
    name: 'Rohan Mehra',
    role: 'Racing Tactics Specialist',
    certification: 'World Sailing Certified Race Officer',
    experienceYears: 15,
    seaMiles: '28,000+ NM',
    bio: 'International match race skipper. Rohan coaches RMYC’s competitive racing team and conducts high-performance asymmetric spinnaker workshops.',
    specialty: 'Match Racing & Spinnaker Control',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
  }
];

export const RMYC_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Dr. Siddharth Nambiar',
    membershipYears: '12 Years Member',
    role: 'Regatta Sailor & Life Member',
    quote: 'RMYC is not just a yacht club; it is my sanctuary on the Bay of Bengal. The moment you leave Spring Haven Wharf and feel the breeze take the J/80 mainsail, the stress of city life vanishes.',
    story: 'Joined as a beginner in 2014, now skipper of his own racing crew in the annual Bay Regatta.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-2',
    name: 'Meera & Rajesh Kothari',
    membershipYears: '5 Years Family Members',
    role: 'Weekend Family Cruisers',
    quote: 'Teaching our children to handle the tiller and respect the ocean at RMYC has been the best family decision we ever made. The instructors are world-class.',
    story: 'Regular weekend sailors who completed the YAI Basic & Coastal Seamanship courses together.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-3',
    name: 'Karan Viswanathan',
    membershipYears: '3 Years Member',
    role: 'Corporate Executive & J/80 Skipper',
    quote: 'The community here is extraordinary. From sunset sails to late-night navigation discussions on the deck, RMYC offers a maritime lifestyle unmatched anywhere in India.',
    story: 'Participated in the Chennai-Puducherry coastal expedition as watch captain.',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
  }
];

export const RMYC_GALLERY = [
  { id: 'g1', category: 'Sailing', title: 'J/80 Tacking into Bay of Bengal', url: '/rmyc_hero_ocean_sailing.png' },
  { id: 'g2', category: 'Racing', title: 'Start Line Action - Annual Bay Regatta', url: '/rmyc_regatta_ocean_sailing.png' },
  { id: 'g3', category: 'Heritage', title: 'Archival Photograph of Spring Haven Dock 1935', url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=80' },
  { id: 'g4', category: 'Fleet', title: 'RMYC Fleet Docked at Spring Haven Wharf', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80' },
  { id: 'g5', category: 'Training', title: 'YAI Student Practicing Helm Controls', url: '/rmyc_laser_dinghy_ocean.png' },
  { id: 'g6', category: 'Events', title: 'Moonlight Social Gathering on Deck', url: '/rmyc_omega_keelboat_ocean.png' },
  { id: 'g7', category: 'Members', title: 'Members Crewing during Sunset Passage', url: 'https://images.unsplash.com/photo-1500514966906-fe245eea9344?auto=format&fit=crop&w=900&q=80' },
  { id: 'g8', category: 'Sailing', title: 'Single-Handed Laser Precision Sail', url: 'https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?auto=format&fit=crop&w=900&q=80' },
];

export const RMYC_CONTACT_INFO = {
  address: '1, Spring Haven Wharf, Chennai Port, Chennai 600001, Tamil Nadu, India',
  phone: '+91 97914 87051',
  email: 'info@royalmadrasyachtclub.com',
  coordinates: { lat: 13.0878, lng: 80.2933 },
  hours: [
    { days: 'Monday, Wednesday to Friday', time: '9:00 AM – 6:00 PM' },
    { days: 'Saturday & Sunday', time: '8:00 AM – 7:00 PM' },
    { days: 'Tuesday', time: 'Closed for Dock Maintenance' }
  ]
};
