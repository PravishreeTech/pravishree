import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  Menu, 
  Globe, 
  ArrowRight,
  PhoneCall
} from 'lucide-react';
import MegaMenuAbout from './MegaMenuAbout';
import MegaMenuServices from './MegaMenuServices';
import MegaMenuPortfolio from './MegaMenuPortfolio';
import MegaMenuCareers from './MegaMenuCareers';
import MobileNav from './MobileNav';
import './Navbar.css';

export default function Navbar({ onSelectJob }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="container header-container">
          
          {/*  LEFT: Company Logo  */}
          <div className="header-left">
            <a href="#" className="header-brand-link" aria-label="Pravishree Design Co. Homepage">
              <img 
                src="/assets/logo.svg" 
                alt="Pravishree Design Co. - A Tech Solution Firm" 
                className="header-logo-img"
              />
            </a>
          </div>

          {/*  CENTER: Main Desktop Navigation  */}
          <nav className="header-nav-center" aria-label="Main Navigation">
            <ul className="nav-menu-list">
              
              {/*  Home  */}
              <li className="nav-item">
                <a href="#" className="nav-link" onClick={closeMenu}>
                  Home
                </a>
              </li>

              {/*  About Us with Mega Menu  */}
              <li 
                className={`nav-item has-dropdown ${activeMenu === 'about' ? 'active' : ''}`}
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <a 
                  href="#about" 
                  className="nav-link"
                  aria-expanded={activeMenu === 'about'}
                  onClick={(e) => {
                    // allow direct click to scroll, or toggle
                  }}
                >
                  <span>About Us</span>
                  <ChevronDown size={14} className="nav-chevron" />
                </a>

                {activeMenu === 'about' && (
                  <div className="dropdown-container">
                    <MegaMenuAbout onItemClick={closeMenu} />
                  </div>
                )}
              </li>

              {/*  Services with Mega Menu  */}
              <li 
                className={`nav-item has-dropdown ${activeMenu === 'services' ? 'active' : ''}`}
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <a 
                  href="#services" 
                  className="nav-link"
                  aria-expanded={activeMenu === 'services'}
                >
                  <span>Services</span>
                  <ChevronDown size={14} className="nav-chevron" />
                </a>

                {activeMenu === 'services' && (
                  <div className="dropdown-container">
                    <MegaMenuServices onItemClick={closeMenu} />
                  </div>
                )}
              </li>

              {/*  Portfolio with Mega Menu  */}
              <li 
                className={`nav-item has-dropdown ${activeMenu === 'portfolio' ? 'active' : ''}`}
                onMouseEnter={() => handleMouseEnter('portfolio')}
                onMouseLeave={handleMouseLeave}
              >
                <a 
                  href="#portfolio" 
                  className="nav-link"
                  aria-expanded={activeMenu === 'portfolio'}
                >
                  <span>Portfolio</span>
                  <ChevronDown size={14} className="nav-chevron" />
                </a>

                {activeMenu === 'portfolio' && (
                  <div className="dropdown-container">
                    <MegaMenuPortfolio onItemClick={closeMenu} />
                  </div>
                )}
              </li>

              {/*  Team  */}
              <li className="nav-item">
                <a href="#team" className="nav-link" onClick={closeMenu}>
                  Team
                </a>
              </li>

              {/*  Hiring / Careers with Mega Menu  */}
              <li 
                className={`nav-item has-dropdown ${activeMenu === 'careers' ? 'active' : ''}`}
                onMouseEnter={() => handleMouseEnter('careers')}
                onMouseLeave={handleMouseLeave}
              >
                <a 
                  href="#careers" 
                  className="nav-link"
                  aria-expanded={activeMenu === 'careers'}
                >
                  <span>Hiring / Careers</span>
                  <span className="nav-badge-dot" title="We are hiring!"></span>
                  <ChevronDown size={14} className="nav-chevron" />
                </a>

                {activeMenu === 'careers' && (
                  <div className="dropdown-container">
                    <MegaMenuCareers onItemClick={closeMenu} onSelectJob={onSelectJob} />
                  </div>
                )}
              </li>

              {/*  Contact Us  */}
              <li className="nav-item">
                <a href="#contact" className="nav-link" onClick={closeMenu}>
                  Contact Us
                </a>
              </li>

            </ul>
          </nav>

          {/*  RIGHT: Social Media, Global Option & CTA  */}
          <div className="header-right">
            
            {/*  Social Media Icons  */}
            <div className="header-socials">
              {/*  Facebook  */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn" 
                aria-label="Facebook"
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/*  Instagram  */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn" 
                aria-label="Instagram"
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/*  LinkedIn  */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn" 
                aria-label="LinkedIn"
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>

            {/*  Global / Region Badge  */}
            <div className="header-global-tag" title="Operating globally with 24/7 delivery">
              <Globe size={13} className="globe-pulse" />
              <span>Global 24/7</span>
            </div>

            {/*  Call / Consultation CTA Button  */}
            <a href="#contact" className="header-cta-btn">
              <span>Let's Talk</span>
              <ArrowRight size={14} />
            </a>

            {/*  Mobile Hamburger Toggle  */}
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMobileNavOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={24} />
            </button>

          </div>

        </div>
      </header>

      {/*  Slide-in Mobile Drawer  */}
      <MobileNav 
        isOpen={isMobileNavOpen} 
        onClose={() => setIsMobileNavOpen(false)}
        onSelectJob={onSelectJob}
      />
    </>
  );
}
