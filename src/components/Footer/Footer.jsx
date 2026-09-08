import React, { useState } from 'react';
import { 
  ArrowUp, 
  Send, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';
import './Footer.css';

export default function Footer({ onOpenContact, onNavigate }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim() && /\S+@\S+\.\S+/.test(newsletterEmail)) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, page, targetId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page, targetId);
    } else {
      if (page === 'about') {
        window.location.hash = 'about';
      } else if (targetId) {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        
        {/* Top Footer Row: Brand Info & Navigation */}
        <div className="footer-top-grid">
          
          {/* Column 1: Brand */}
          <div className="footer-brand-col">
            <a href="#home" className="footer-logo-link" onClick={(e) => handleLinkClick(e, 'home', 'hero')}>
              <img 
                src="/assets/logo.svg" 
                alt="Pravishree - A Tech Solution Firm" 
                className="footer-logo-img"
              />
            </a>
            <div className="footer-brand-tagline">
              <strong>PRAVISHREE</strong>
              <span>A Tech Solution Firm</span>
            </div>
            <p className="footer-brand-desc">
              Building digital experiences that shape the future through technology, creativity and innovation.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home', 'hero')}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about', null)}>About Us</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services', null)}>Services</a></li>
              <li><a href="#portfolio" onClick={(e) => handleLinkClick(e, 'portfolio', null)}>Portfolio</a></li>
              <li><a href="#why-us" onClick={(e) => handleLinkClick(e, 'home', 'why-us')}>Why Choose Us</a></li>
              <li><a href="#careers" onClick={(e) => handleLinkClick(e, 'careers', null)}>Careers</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact', null)}>Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Official 6 Services */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-nav-list">
              <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services', 'services-core-list')}>Software Development</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services', 'services-core-list')}>Website Development</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services', 'services-core-list')}>App Development</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services', 'services-core-list')}>Digital Marketing</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services', 'services-core-list')}>BPO Services</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services', 'services-core-list')}>Video Editing</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="footer-newsletter-col">
            <h4 className="footer-col-title">Contact</h4>
            <div className="footer-contact-details">
              <div className="footer-contact-item">
                <Mail size={16} className="text-cyan" />
                <a href="mailto:info@pravishree.com">info@pravishree.com</a>
              </div>
              <div className="footer-contact-item">
                <Phone size={16} className="text-cyan" />
                <a href="tel:+918331962896">+91 83319 62896</a>
              </div>
              <div className="footer-contact-item">
                <MapPin size={16} className="text-cyan" />
                <span>Visakhapatnam, Andhra Pradesh, India</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="footer-newsletter-wrap">
              <span className="newsletter-label">Subscribe to our newsletter:</span>
              {subscribed ? (
                <div className="newsletter-success">
                  <span>✓ Thank you for subscribing!</span>
                </div>
              ) : (
                <form className="footer-newsletter-form" onSubmit={handleNewsletter}>
                  <input
                    type="email"
                    placeholder="Enter your work email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright-text">
            © {new Date().getFullYear()} <strong>PRAVISHREE</strong>. All Rights Reserved. A Tech Solution Firm.
          </p>

          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <span>•</span>
            <a href="#terms">Terms of Service</a>
          </div>

          <button className="footer-scroll-top-btn" onClick={scrollToTop} aria-label="Scroll back to top">
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
