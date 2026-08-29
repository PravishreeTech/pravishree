import React, { useState } from 'react';
import { 
  X, 
  ChevronDown, 
  ChevronRight, 
  PhoneCall, 
  Mail, 
  Building2, 
  Target, 
  Compass, 
  PenTool, 
  Video, 
  Code2, 
  Smartphone, 
  TrendingUp, 
  Headphones, 
  MapPin, 
  Globe2, 
  Palette, 
  Sparkles, 
  Monitor, 
  Film, 
  Layers, 
  Users,
  Briefcase
} from 'lucide-react';
import { careersData } from '../../data/careersData';

export default function MobileNav({ isOpen, onClose, onSelectJob }) {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleLinkClick = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="mobile-nav-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="mobile-nav-drawer" onClick={(e) => e.stopPropagation()}>
        
        {/*  Header  */}
        <div className="mobile-nav-header">
          <div className="mobile-logo-area">
            <img src="/assets/logo.svg" alt="Pravishree Design Co." className="mobile-logo-img" />
          </div>
          <button className="mobile-close-btn" onClick={onClose} aria-label="Close Menu">
            <X size={24} />
          </button>
        </div>

        {/*  Navigation Accordion List  */}
        <div className="mobile-nav-body">
          <nav className="mobile-nav-links">
            
            {/*  Home  */}
            <a href="#" className="mobile-nav-item" onClick={handleLinkClick}>
              <span>Home</span>
            </a>

            {/*  About Us Accordion  */}
            <div className="mobile-accordion">
              <button 
                className={`mobile-accordion-btn ${openSection === 'about' ? 'active' : ''}`}
                onClick={() => toggleSection('about')}
              >
                <span>About Us</span>
                <ChevronDown size={18} className={`chevron-icon ${openSection === 'about' ? 'rotated' : ''}`} />
              </button>
              {openSection === 'about' && (
                <div className="mobile-accordion-content">
                  <a href="#about" className="mobile-sub-link" onClick={handleLinkClick}>
                    <Building2 size={16} /> About Company
                  </a>
                  <a href="#mission" className="mobile-sub-link" onClick={handleLinkClick}>
                    <Target size={16} /> Mission
                  </a>
                  <a href="#vision" className="mobile-sub-link" onClick={handleLinkClick}>
                    <Compass size={16} /> Vision
                  </a>
                </div>
              )}
            </div>

            {/*  Services Accordion  */}
            <div className="mobile-accordion">
              <button 
                className={`mobile-accordion-btn ${openSection === 'services' ? 'active' : ''}`}
                onClick={() => toggleSection('services')}
              >
                <span>Services</span>
                <ChevronDown size={18} className={`chevron-icon ${openSection === 'services' ? 'rotated' : ''}`} />
              </button>
              {openSection === 'services' && (
                <div className="mobile-accordion-content">
                  <a href="#services-designing" className="mobile-sub-link" onClick={handleLinkClick}>
                    <PenTool size={16} /> Designing
                  </a>
                  <a href="#services-video-editing" className="mobile-sub-link" onClick={handleLinkClick}>
                    <Video size={16} /> Video Editing
                  </a>
                  <a href="#services-web-development" className="mobile-sub-link" onClick={handleLinkClick}>
                    <Code2 size={16} /> Web Development
                  </a>
                  <a href="#services-mobile-apps" className="mobile-sub-link" onClick={handleLinkClick}>
                    <Smartphone size={16} /> Mobile Apps
                  </a>
                  <a href="#services-digital-marketing" className="mobile-sub-link" onClick={handleLinkClick}>
                    <TrendingUp size={16} /> Digital Marketing
                  </a>
                  
                  {/*  BPO Nested  */}
                  <div className="mobile-nested-group">
                    <span className="mobile-nested-title">
                      <Headphones size={15} /> BPO Services
                    </span>
                    <a href="#services-bpo-domestic" className="mobile-sub-link nested" onClick={handleLinkClick}>
                      <MapPin size={15} /> Domestic BPO
                    </a>
                    <a href="#services-bpo-international" className="mobile-sub-link nested" onClick={handleLinkClick}>
                      <Globe2 size={15} /> International BPO (24/7)
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/*  Portfolio Accordion  */}
            <div className="mobile-accordion">
              <button 
                className={`mobile-accordion-btn ${openSection === 'portfolio' ? 'active' : ''}`}
                onClick={() => toggleSection('portfolio')}
              >
                <span>Portfolio</span>
                <ChevronDown size={18} className={`chevron-icon ${openSection === 'portfolio' ? 'rotated' : ''}`} />
              </button>
              {openSection === 'portfolio' && (
                <div className="mobile-accordion-content">
                  <a href="#portfolio" className="mobile-sub-link" onClick={handleLinkClick}>
                    <Palette size={16} /> Posters
                  </a>
                  <a href="#portfolio" className="mobile-sub-link" onClick={handleLinkClick}>
                    <Sparkles size={16} /> Logo
                  </a>
                  <a href="#portfolio" className="mobile-sub-link" onClick={handleLinkClick}>
                    <Monitor size={16} /> Websites
                  </a>
                  <a href="#portfolio" className="mobile-sub-link" onClick={handleLinkClick}>
                    <Film size={16} /> VE Works
                  </a>
                  <a href="#portfolio" className="mobile-sub-link" onClick={handleLinkClick}>
                    <Layers size={16} /> Softwares (Custom)
                  </a>
                </div>
              )}
            </div>

            {/*  Team  */}
            <a href="#team" className="mobile-nav-item" onClick={handleLinkClick}>
              <span>Team</span>
            </a>

            {/*  Hiring / Careers Accordion  */}
            <div className="mobile-accordion">
              <button 
                className={`mobile-accordion-btn ${openSection === 'careers' ? 'active' : ''}`}
                onClick={() => toggleSection('careers')}
              >
                <span>Hiring / Careers</span>
                <ChevronDown size={18} className={`chevron-icon ${openSection === 'careers' ? 'rotated' : ''}`} />
              </button>
              {openSection === 'careers' && (
                <div className="mobile-accordion-content">
                  {careersData.map((job) => (
                    <a 
                      key={job.id}
                      href="#careers" 
                      className="mobile-sub-link"
                      onClick={() => {
                        if (onSelectJob) onSelectJob(job);
                        handleLinkClick();
                      }}
                    >
                      <Briefcase size={15} /> {job.title.split('/')[0]}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/*  Contact Us  */}
            <a href="#contact" className="mobile-nav-item" onClick={handleLinkClick}>
              <span>Contact Us</span>
            </a>

          </nav>

          {/*  Socials & CTAs  */}
          <div className="mobile-nav-footer">
            <a href="#contact" className="btn-primary w-full" onClick={handleLinkClick}>
              Get Started / Contact Us <ChevronRight size={16} />
            </a>

            <div className="mobile-socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
