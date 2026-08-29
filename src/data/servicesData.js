export const servicesData = [
  {
    id: 'designing',
    title: 'Graphic Designing & Visual Identity',
    shortDesc: 'Creative & impactful designs that bring your brand ideas to life with distinct visual authority.',
    iconName: 'PenTool',
    badge: 'Creative Suite',
    featuredImage: '/assets/slide-2.jpg',
    accentColor: '#0096C7',
    features: [
      'Brand Identity Systems & Style Guidelines',
      'High-Impact Marketing Collateral & Posters',
      'UI/UX Prototyping & Design Systems (Figma)',
      'Vector Illustrations, Iconography & Packaging Design'
    ],
    fullDesc: 'We craft iconic brand identities, bespoke graphic artwork, marketing collateral, and intuitive UI/UX systems that captivate your audience and position your business at the forefront of your industry.',
    stats: { projects: '450+', satisfaction: '99.4%' }
  },
  {
    id: 'video-editing',
    title: 'Professional Video Editing & Motion VFX',
    shortDesc: 'Stunning visual storytelling, cinematic motion graphics, 4K reel cuts, and corporate anthems.',
    iconName: 'Video',
    badge: 'Studio Production',
    featuredImage: '/assets/slide-2.jpg',
    accentColor: '#0284C7',
    features: [
      'Commercials, Promos & Corporate Brand Videos',
      'Social Media Reels, Shorts & Viral Content Production',
      'Color Grading (DaVinci Resolve) & Sound Design',
      '3D Motion Graphics & Visual Effects (After Effects)'
    ],
    fullDesc: 'From short-form viral reels to full-scale corporate brand films, our video production specialists transform raw footage into captivating visual narratives that elevate audience engagement and drive conversions.',
    stats: { minutesEdited: '120k+', viewsGenerated: '85M+' }
  },
  {
    id: 'web-development',
    title: 'Web & Full-Stack Development',
    shortDesc: 'Responsive, secure, and ultra-fast web platforms built with modern scalable tech stacks.',
    iconName: 'Code2',
    badge: 'Enterprise Engineering',
    featuredImage: '/assets/slide-5.jpg',
    accentColor: '#0077B6',
    features: [
      'Custom React, Next.js & Modern Web Applications',
      'High-Converting Corporate Portals & Landing Pages',
      'E-Commerce Ecosystems (Shopify, WooCommerce, Custom)',
      'API Architecture, CMS Integrations & Microservices'
    ],
    fullDesc: 'We build high-performance web applications tailored to your business goals. Engineered for speed, responsive on all devices, secure, and optimized for search engine domination.',
    stats: { speedScore: '98/100', uptime: '99.99%' }
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development (iOS & Android)',
    shortDesc: 'Native and cross-platform mobile apps engineered for fluid performance and delight.',
    iconName: 'Smartphone',
    badge: 'Mobile First',
    featuredImage: '/assets/slide-5.jpg',
    accentColor: '#0B3B60',
    features: [
      'Cross-Platform Apps (Flutter & React Native)',
      'Native iOS (Swift) & Android (Kotlin) Development',
      'Real-Time Cloud Sync, Push Notifications & Offline Mode',
      'App Store Optimization (ASO) & Play Store Publishing'
    ],
    fullDesc: 'Turn your product vision into an intuitive mobile experience. We build reliable, feature-rich iOS and Android apps with frictionless onboarding, biometric authentication, and lightning-fast responsiveness.',
    stats: { downloads: '2.5M+', appStoreRating: '4.8★' }
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & SEO Growth',
    shortDesc: 'Result-driven performance marketing strategies to boost your brand reach, leads, and revenue.',
    iconName: 'TrendingUp',
    badge: 'ROI Acceleration',
    featuredImage: '/assets/slide-3.svg',
    accentColor: '#0284C7',
    features: [
      'Technical, On-Page & Off-Page SEO Optimization',
      'Targeted Performance Advertising (Google Ads, Meta Ads)',
      'Social Media Growth & Influencer Campaign Management',
      'Conversion Rate Optimization (CRO) & Funnel Analytics'
    ],
    fullDesc: 'Scale your customer acquisition with our data-backed digital marketing strategies. We optimize your entire customer journey from organic search discoverability to hyper-targeted paid acquisition.',
    stats: { roasAverage: '4.8x', trafficGrowth: '+320%' }
  },
  {
    id: 'bpo-services',
    title: 'BPO & Operational Solutions',
    shortDesc: 'Reliable 24/7 domestic & international process support to streamline operations and reduce overhead.',
    iconName: 'Headphones',
    badge: '24/7 Global Delivery',
    featuredImage: '/assets/slide-6.svg',
    accentColor: '#0F766E',
    isBpo: true,
    subServices: [
      {
        id: 'domestic-bpo',
        name: 'Domestic BPO Services',
        desc: 'Dedicated multi-lingual voice & non-voice inbound/outbound support across regional territories with high resolution rates.',
        tags: ['Inbound Support', 'Tele-Sales', 'Customer Care', 'Chat Support']
      },
      {
        id: 'international-bpo',
        name: 'International BPO Services',
        desc: 'Round-the-clock US/UK/EU shift operational desks, HIPAA-compliant medical billing, and high-accuracy AI data annotation.',
        tags: ['24/7 Global Voice', 'Medical Billing', 'Data Annotation', 'Back-Office Processing']
      }
    ],
    features: [
      'Inbound & Outbound Customer Support Desks',
      'HIPAA-Compliant Medical Billing & Revenue Cycle',
      'AI/ML Data Labeling & Image/Video Annotation',
      'Omnichannel Live Chat, Email & Ticket Resolution'
    ],
    fullDesc: 'Scale your operations seamlessly with our enterprise-grade BPO division. We operate ISO 27001-certified infrastructure with dedicated teams for voice, medical billing, and machine learning data labeling.',
    stats: { slaAccuracy: '99.8%', costSavings: '40%+' }
  }
];
