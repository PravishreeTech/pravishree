import React from 'react';
import { 
  Palette, 
  Sparkles, 
  Monitor, 
  Film, 
  Layers, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export default function MegaMenuPortfolio({ onItemClick }) {
  const categories = [
    {
      id: 'Posters',
      title: 'Posters & Print Media',
      icon: Palette,
      color: 'cyan',
      count: '150+ Works',
      desc: 'High-impact keynote graphics, digital ads, and typographic collateral.'
    },
    {
      id: 'Logo',
      title: 'Logo & Visual Identity',
      icon: Sparkles,
      color: 'purple',
      count: '90+ Brands',
      desc: 'Minimalist brand marks, complete style guides, and vector systems.'
    },
    {
      id: 'Websites',
      title: 'Websites & Portals',
      icon: Monitor,
      color: 'blue',
      count: '120+ Launched',
      desc: 'High-speed React, Next.js web applications, and corporate platforms.'
    },
    {
      id: 'VE Works',
      title: 'VE Works (Video Editing)',
      icon: Film,
      color: 'red',
      count: '350+ Edits',
      desc: 'Cinematic commercials, 3D motion reels, color grading, and shorts.'
    },
    {
      id: 'Softwares (Custom)',
      title: 'Software (Custom)',
      icon: Layers,
      color: 'teal',
      count: '45+ Systems',
      desc: 'Custom ERPs, healthcare suites, telemetry tracking, and enterprise software.'
    }
  ];

  return (
    <div className="mega-menu-dropdown mega-menu-portfolio" role="region" aria-label="Portfolio Navigation">
      <div className="mega-menu-header-bar">
        <div>
          <span className="mega-menu-section-title">Our Creative & Engineering Showcase</span>
          <p className="mega-menu-subtitle">Explore real-world results delivered for high-growth enterprises.</p>
        </div>
        <a href="#portfolio" className="btn-view-all-portfolio" onClick={onItemClick}>
          View Full Portfolio Gallery <ArrowRight size={14} />
        </a>
      </div>

      <div className="portfolio-cards-grid">
        {categories.map((cat) => {
          const IconComponent = cat.icon;
          return (
            <a 
              key={cat.id}
              href={`#portfolio?category=${encodeURIComponent(cat.id)}`} 
              className="portfolio-menu-card"
              onClick={onItemClick}
            >
              <div className={`portfolio-icon-wrapper ${cat.color}`}>
                <IconComponent size={20} />
              </div>
              <div className="portfolio-card-info">
                <div className="portfolio-card-top">
                  <h4 className="portfolio-title">{cat.title}</h4>
                  <span className="portfolio-count-badge">{cat.count}</span>
                </div>
                <p className="portfolio-desc">{cat.desc}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
