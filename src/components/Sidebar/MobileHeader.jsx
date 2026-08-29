import React from 'react';
import { Menu, Globe, PhoneCall } from 'lucide-react';
import './MobileHeader.css';

export default function MobileHeader({ onToggleSidebar }) {
  return (
    <header className="site-mobile-header" aria-label="Mobile Navigation Bar">
      <div className="mobile-header-inner">
        
        {/* Brand Logo */}
        <a href="#" className="mobile-header-logo-link">
          <img 
            src="/assets/logo.svg" 
            alt="Pravishree Design Co." 
            className="mobile-header-logo"
          />
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
