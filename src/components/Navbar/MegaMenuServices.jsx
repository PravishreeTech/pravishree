import React, { useState } from 'react';
import { 
  PenTool, 
  Video, 
  Code2, 
  Smartphone, 
  TrendingUp, 
  Headphones, 
  Globe2, 
  MapPin, 
  ChevronRight, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function MegaMenuServices({ onItemClick }) {
  const [activeBpoTab, setActiveBpoTab] = useState('all');

  return (
    <div className="mega-menu-dropdown mega-menu-services" role="region" aria-label="Services Navigation">
      <div className="mega-menu-grid mega-menu-grid-services">
        
        {/*  Main Services Column (5 Core Services)  */}
        <div className="mega-menu-col">
          <span className="mega-menu-section-title">Design & Technology Solutions</span>

          <div className="services-grid-sub">
            <a href="#services-designing" className="mega-menu-item" onClick={onItemClick}>
              <div className="mega-menu-icon-box cyan">
                <PenTool size={18} />
              </div>
              <div className="mega-menu-text">
                <span className="mega-menu-title">Designing</span>
                <span className="mega-menu-desc">Brand identity, UI/UX systems, visual graphics & posters.</span>
              </div>
            </a>

            <a href="#services-video-editing" className="mega-menu-item" onClick={onItemClick}>
              <div className="mega-menu-icon-box blue">
                <Video size={18} />
              </div>
              <div className="mega-menu-text">
                <span className="mega-menu-title">Video Editing</span>
                <span className="mega-menu-desc">Commercials, 3D motion VFX, social reels & brand films.</span>
              </div>
            </a>

            <a href="#services-web-development" className="mega-menu-item" onClick={onItemClick}>
              <div className="mega-menu-icon-box navy">
                <Code2 size={18} />
              </div>
              <div className="mega-menu-text">
                <span className="mega-menu-title">Web Development</span>
                <span className="mega-menu-desc">High-speed React/Next.js portals, custom CMS & enterprise web.</span>
              </div>
            </a>

            <a href="#services-mobile-apps" className="mega-menu-item" onClick={onItemClick}>
              <div className="mega-menu-icon-box purple">
                <Smartphone size={18} />
              </div>
              <div className="mega-menu-text">
                <span className="mega-menu-title">Mobile Apps</span>
                <span className="mega-menu-desc">Native iOS & Android apps with modern offline-first sync.</span>
              </div>
            </a>

            <a href="#services-digital-marketing" className="mega-menu-item" onClick={onItemClick}>
              <div className="mega-menu-icon-box amber">
                <TrendingUp size={18} />
              </div>
              <div className="mega-menu-text">
                <span className="mega-menu-title">Digital Marketing</span>
                <span className="mega-menu-desc">Performance SEO, targeted ads, funnel optimization & ROI growth.</span>
              </div>
            </a>
          </div>
        </div>

        {/*  BPO Services Submenu Column (Domestic & International)  */}
        <div className="mega-menu-col bpo-special-col">
          <span className="mega-menu-section-title">
            <Headphones size={15} className="mr-1 inline-icon" /> BPO & Operations Delivery
          </span>

          <div className="bpo-submenus-wrapper">
            {/*  Domestic Submenu  */}
            <a href="#services-bpo-domestic" className="bpo-sub-card" onClick={onItemClick}>
              <div className="bpo-card-header">
                <div className="mega-menu-icon-box teal">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="bpo-card-title">Domestic BPO</h4>
                  <span className="bpo-tag">Multi-Lingual Inbound & Outbound</span>
                </div>
              </div>
              <p className="bpo-card-text">
                Day-shift customer support, regional tele-sales, chat desks, and order processing across domestic territories.
              </p>
              <span className="bpo-action-link">
                Explore Domestic BPO <ChevronRight size={14} />
              </span>
            </a>

            {/*  International Submenu  */}
            <a href="#services-bpo-international" className="bpo-sub-card highlight" onClick={onItemClick}>
              <div className="bpo-card-header">
                <div className="mega-menu-icon-box sky">
                  <Globe2 size={18} />
                </div>
                <div>
                  <h4 className="bpo-card-title">International BPO</h4>
                  <span className="bpo-tag global">24/7 Global US/UK Delivery</span>
                </div>
              </div>
              <p className="bpo-card-text">
                Round-the-clock voice support, HIPAA-compliant medical billing, and high-accuracy AI data annotation.
              </p>
              <span className="bpo-action-link">
                Explore International BPO <ChevronRight size={14} />
              </span>
            </a>
          </div>

          <div className="bpo-footer-note">
            <ShieldCheck size={14} /> ISO 27001 & SOC2 Compliant Global Delivery Centers
          </div>
        </div>

      </div>
    </div>
  );
}
