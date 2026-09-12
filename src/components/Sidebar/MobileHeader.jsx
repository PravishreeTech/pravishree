import React from 'react';
import { Menu } from 'lucide-react';
import './MobileHeader.css';

export default function MobileHeader({ onToggleSidebar, onNavigate }) {
  return (
    <header className="site-mobile-header" aria-label="Mobile Navigation Bar">
      <div className="mobile-header-inner">
        
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="mobile-header-logo-link"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigate) onNavigate('home');
          }}
          aria-label="Pravishree Design Co. Home"
        >
          <img 
            src="/assets/logo-emblem-clean.png" 
            alt="Pravishree Design Co." 
            className="mobile-header-logo-img"
          />
          <div className="mobile-header-brand-info">
            <span className="mobile-header-brand-title">PRAVISHREE</span>
            <span className="mobile-header-brand-tagline">DESIGN CO.</span>
          </div>
        </a>

        {/* Right Hamburger Toggle */}
        <div className="mobile-header-actions">
          <a href="#contact" className="mobile-header-talk-btn">
            <span>Talk</span>
          </a>
          <button 
            className="mobile-hamburger-btn" 
            onClick={onToggleSidebar}
            aria-label="Open Navigation Menu"
          >
            <Menu size={24} />
          </button>
        </div>

      </div>
    </header>
  );
}
