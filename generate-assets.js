import fs from 'fs';
import path from 'path';

const team = [
  { name: 'Praveen Kumar', role: 'Founder & Managing Director', color: '#0077B6', initials: 'PK', gender: 'm' },
  { name: 'Shree Vardhini', role: 'Co-Founder & Chief Creative Officer', color: '#0096C7', initials: 'SV', gender: 'f' },
  { name: 'Aravind Swamy', role: 'VP of Technology & Cloud Architecture', color: '#0B3B60', initials: 'AS', gender: 'm' },
  { name: 'Meera Nambiar', role: 'Head of BPO & Global Delivery', color: '#0F766E', initials: 'MN', gender: 'f' },
  { name: 'Rohan Deshmukh', role: 'Lead UI/UX & Motion Designer', color: '#7C3AED', initials: 'RD', gender: 'm' },
  { name: 'Kavita Menon', role: 'Director of Talent & Operations', color: '#EA580C', initials: 'KM', gender: 'f' },
];

const teamDir = 'public/assets/team';
if (!fs.existsSync(teamDir)) {
  fs.mkdirSync(teamDir, { recursive: true });
}

team.forEach((member, i) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 450" width="400" height="450">
    <defs>
      <linearGradient id="g${i}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${member.color}15"/>
        <stop offset="100%" stop-color="${member.color}35"/>
      </linearGradient>
      <linearGradient id="headGrad${i}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${member.color}"/>
        <stop offset="100%" stop-color="#0B3B60"/>
      </linearGradient>
    </defs>
    <rect width="400" height="450" fill="url(#g${i})" rx="20"/>
    <circle cx="200" cy="160" r="80" fill="url(#headGrad${i})"/>
    <path d="M 90,380 C 90,280 140,260 200,260 C 260,260 310,280 310,380 Z" fill="url(#headGrad${i})" opacity="0.9"/>
    <!-- Suit Lapels / Tech Accent -->
    <path d="M 170,260 L 200,340 L 230,260 Z" fill="#FFFFFF" opacity="0.95"/>
    <path d="M 195,290 L 200,370 L 205,290 Z" fill="${member.color}"/>
    <text x="200" y="175" font-family="'Plus Jakarta Sans', sans-serif" font-size="46" font-weight="700" fill="#FFFFFF" text-anchor="middle">${member.initials}</text>
    <!-- Badge -->
    <rect x="50" y="380" width="300" height="46" rx="23" fill="#FFFFFF" filter="drop-shadow(0px 4px 10px rgba(0,0,0,0.06))"/>
    <text x="200" y="408" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" fill="#0B3B60" text-anchor="middle">${member.name}</text>
  </svg>`;
  fs.writeFileSync(path.join(teamDir, `team-${i + 1}.svg`), svg);
});

// Portfolio Items
const portfolioDir = 'public/assets/portfolio';
if (!fs.existsSync(portfolioDir)) {
  fs.mkdirSync(portfolioDir, { recursive: true });
}

const portfolio = [
  { id: 'posters-1', title: 'Fintech Summit 2026 Keynote Posters', cat: 'Posters', color: '#0284C7' },
  { id: 'posters-2', title: 'Global Tech Expo Brand Campaigns', cat: 'Posters', color: '#0F766E' },
  { id: 'logo-1', title: 'AeroCloud Identity & Brand Guidelines', cat: 'Logo', color: '#7C3AED' },
  { id: 'logo-2', title: 'Nexus Biotech Geometric Crest & Stylebook', cat: 'Logo', color: '#2563EB' },
  { id: 'websites-1', title: 'OmniVanguard Enterprise SaaS Portal', cat: 'Websites', color: '#0077B6' },
  { id: 'websites-2', title: 'Apex Capital Global Investment Platform', cat: 'Websites', color: '#0B3B60' },
  { id: 've-1', title: '3D Product Reveal & Motion Reel 4K', cat: 'VE Works', color: '#DC2626' },
  { id: 've-2', title: 'Corporate Brand Anthem & VFX Showcase', cat: 'VE Works', color: '#D97706' },
  { id: 'software-1', title: 'HealthSync HIPAA Telemedicine Suite', cat: 'Softwares (Custom)', color: '#0D9488' },
  { id: 'software-2', title: 'LogiTrack AI Fleet Logistics ERP', cat: 'Softwares (Custom)', color: '#4338CA' },
];

portfolio.forEach((item, i) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 420" width="600" height="420">
    <defs>
      <linearGradient id="pGrad${i}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${item.color}15"/>
        <stop offset="100%" stop-color="${item.color}35"/>
      </linearGradient>
      <linearGradient id="iconGrad${i}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${item.color}"/>
        <stop offset="100%" stop-color="#0B3B60"/>
      </linearGradient>
    </defs>
    <rect width="600" height="420" fill="url(#pGrad${i})" rx="16"/>
    <!-- Mock UI Elements -->
    <rect x="40" y="40" width="520" height="240" rx="12" fill="#FFFFFF" opacity="0.95" filter="drop-shadow(0 8px 24px rgba(0,0,0,0.06))"/>
    <circle cx="70" cy="65" r="6" fill="#EF4444"/>
    <circle cx="90" cy="65" r="6" fill="#F59E0B"/>
    <circle cx="110" cy="65" r="6" fill="#10B981"/>
    <rect x="140" y="57" width="220" height="16" rx="8" fill="#F1F5F9"/>
    
    <!-- Graphic Symbol -->
    <circle cx="300" cy="160" r="50" fill="url(#iconGrad${i})"/>
    <text x="300" y="172" font-family="'Plus Jakarta Sans', sans-serif" font-size="28" font-weight="800" fill="#FFFFFF" text-anchor="middle">★</text>
    
    <!-- Footer Details -->
    <rect x="40" y="305" width="100" height="24" rx="12" fill="${item.color}20"/>
    <text x="52" y="321" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="${item.color}">${item.cat}</text>
    <text x="40" y="360" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="700" fill="#0B3B60">${item.title}</text>
    <text x="40" y="385" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="500" fill="#64748B">Delivered for Global Enterprise Clients • High Impact</text>
  </svg>`;
  fs.writeFileSync(path.join(portfolioDir, `${item.id}.svg`), svg);
});
console.log('Asset generation complete.');
