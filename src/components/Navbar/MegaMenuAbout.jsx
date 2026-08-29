import React from 'react';
import { Target, Compass, Building2, Award, ShieldCheck, ArrowRight } from 'lucide-react';

export default function MegaMenuAbout({ onItemClick }) {
  return (
    <div className="mega-menu-dropdown mega-menu-about" role="region" aria-label="About Us Navigation">
      <div className="mega-menu-grid mega-menu-grid-about">
        {/*  Main Column 1: Core Navigation Items  */}
        <div className="mega-menu-col">
          <span className="mega-menu-section-title">Company Overview</span>
          
          <a href="#about" className="mega-menu-item" onClick={onItemClick}>
            <div className="mega-menu-icon-box cyan">
              <Building2 size={20} />
            </div>
            <div className="mega-menu-text">
              <span className="mega-menu-title">About Company</span>
              <span className="mega-menu-desc">Who we are, our technology evolution, and client trust across global markets.</span>
            </div>
          </a>

          <a href="#mission" className="mega-menu-item" onClick={onItemClick}>
            <div className="mega-menu-icon-box blue">
              <Target size={20} />
            </div>
            <div className="mega-menu-text">
              <span className="mega-menu-title">Our Mission</span>
              <span className="mega-menu-desc">Empowering forward-thinking enterprises with scalable technology and high-impact design.</span>
            </div>
          </a>

          <a href="#vision" className="mega-menu-item" onClick={onItemClick}>
            <div className="mega-menu-icon-box teal">
              <Compass size={20} />
            </div>
            <div className="mega-menu-text">
              <span className="mega-menu-title">Our Vision</span>
              <span className="mega-menu-desc">Pioneering the future of integrated digital engineering and operational excellence.</span>
            </div>
          </a>
        </div>

        {/*  Column 2: Highlights / Value Prop Card  */}
        <div className="mega-menu-featured-card">
          <div className="featured-badge">
            <Award size={14} /> Certified Excellence
          </div>
          <h4>Building Digital Experiences That Move Businesses Forward</h4>
          <p>
            From custom software architectures to 24/7 global BPO delivery, we turn complex challenges into competitive advantages.
          </p>
          <div className="featured-stats">
            <div className="stat-pill">
              <strong>99.8%</strong>
              <span>SLA Met</span>
            </div>
            <div className="stat-pill">
              <strong>500+</strong>
              <span>Projects</span>
            </div>
          </div>
          <a href="#about" className="featured-link" onClick={onItemClick}>
            Discover Our Story <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
