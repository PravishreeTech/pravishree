import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2
} from 'lucide-react';
import './Hero.css';

export default function Hero({ onOpenContact }) {
  return (
    <section className="hero-section" id="hero">
      
      {/* Subtle Floating Ambient Background Light Orbs */}
      <div className="hero-ambient-orb orb-1" aria-hidden="true"></div>
      <div className="hero-ambient-orb orb-2" aria-hidden="true"></div>

      <div className="container hero-container">
        
        {/* Left Hero Content with Staggered Entrance Animations */}
        <div className="hero-content-left">
          
          {/* 1. Top Badge */}
          <div className="hero-badge hero-reveal-1">
            <span className="badge-pulse-indicator"></span>
            <Sparkles size={15} className="text-cyan" />
            <span>Pravishree Design Co. • A Tech Solution Firm</span>
          </div>

          {/* 2. Main Headline (Staggered line by line) */}
          <h1 className="hero-headline">
            <span className="hero-headline-line hero-reveal-2">Building Digital Experiences</span>
            <span className="hero-headline-line text-gradient hero-reveal-3">That Move Businesses Forward</span>
          </h1>

          {/* 3. Description */}
          <p className="hero-description hero-reveal-4">
            Your trusted end-to-end partner for high-performance <strong>Web &amp; App Development</strong>, 
            award-winning <strong>Graphic Design &amp; Video Editing</strong>, data-backed <strong>Digital Marketing</strong>, 
            and 24/7 <strong>Domestic &amp; International BPO Solutions</strong>.
          </p>

          {/* 4. Action Buttons (Micro-interactions) */}
          <div className="hero-cta-group hero-reveal-5">
            <a href="#contact" className="btn-primary hero-btn-main">
              <span>Get Started Today</span>
              <ArrowRight size={18} className="btn-arrow-icon" />
            </a>

            <a href="#services" className="btn-secondary hero-btn-sub">
              <span>Explore Services</span>
            </a>
          </div>

          {/* 5. Trust Badges & Checkmarks */}
          <div className="hero-trust-row hero-reveal-6">
            <div className="trust-item">
              <CheckCircle2 size={16} className="text-cyan" />
              <span>End-to-End Solutions</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} className="text-cyan" />
              <span>99.8% SLA Accuracy</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} className="text-cyan" />
              <span>24/7 Global Delivery</span>
            </div>
          </div>

        </div>

        {/* Right side has ample space for the 3D Interactive Canvas */}
        <div className="hero-visual-space" aria-hidden="true"></div>

      </div>

      {/* Live Stats Ticker Strip */}
      <div className="hero-stats-strip hero-reveal-7">
        <div className="container">
          <div className="stats-strip-grid">
            
            <div className="stat-strip-item">
              <span className="stat-strip-number">500+</span>
              <span className="stat-strip-label">Projects Completed</span>
            </div>

            <div className="stat-strip-item">
              <span className="stat-strip-number">99.8%</span>
              <span className="stat-strip-label">Client Satisfaction &amp; SLA</span>
            </div>

            <div className="stat-strip-item">
              <span className="stat-strip-number">24/7</span>
              <span className="stat-strip-label">Global &amp; Domestic Support</span>
            </div>

            <div className="stat-strip-item">
              <span className="stat-strip-number">14+</span>
              <span className="stat-strip-label">Years Team Experience</span>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
