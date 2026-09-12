import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, 
  ChevronLeft,
  Sparkles, 
  Eye, 
  ArrowRight, 
  ArrowUpRight, 
  Briefcase,
  Layers,
  Code2,
  CheckCircle2,
  Building2,
  MousePointerClick
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioItems } from '../../data/portfolioData';
import './PortfolioPage.css';

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioPage({ onNavigateHome, onOpenProjectModal, onOpenContact }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const detailsRef = useRef(null);

  const selectedProject = portfolioItems[selectedIndex] || portfolioItems[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // GSAP ScrollTrigger Pinning & Horizontal Track Animation
  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const ctx = gsap.context(() => {
      // Intro Elements Fade-In
      gsap.fromTo(
        '.gsap-portfolio-hero',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: 'power3.out' }
      );

      // Horizontal Scroll Animation only on desktop/large screens without reduced motion
      if (!isReducedMotion && window.innerWidth >= 1024 && trackRef.current && sectionRef.current) {
        const getScrollDistance = () => {
          if (!trackRef.current) return 0;
          return trackRef.current.scrollWidth - window.innerWidth + 180;
        };

        gsap.to(trackRef.current, {
          x: () => -getScrollDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 0.85,
            start: 'top top',
            end: () => `+=${getScrollDistance() + 350}`,
            invalidateOnRefresh: true,
            anticipatePin: 1
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Animate dynamic details panel when selection changes
  const handleSelectProject = (index) => {
    setSelectedIndex(index);
    if (detailsRef.current) {
      gsap.fromTo(
        detailsRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
  };

  const handlePrev = () => {
    const nextIdx = (selectedIndex - 1 + portfolioItems.length) % portfolioItems.length;
    handleSelectProject(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (selectedIndex + 1) % portfolioItems.length;
    handleSelectProject(nextIdx);
  };

  return (
    <div className="portfolio-page-root" ref={containerRef}>
      <div className="portfolio-page-container">
        
        {/* Page Top Context Header */}
        <div className="portfolio-top-header gsap-portfolio-hero">
          <nav className="portfolio-breadcrumb" aria-label="Breadcrumb">
            <button className="breadcrumb-link" onClick={onNavigateHome}>Home</button>
            <ChevronRight size={14} className="breadcrumb-separator" />
            <span className="breadcrumb-current">Portfolio</span>
          </nav>
          
          <div className="portfolio-header-badge">
            <Sparkles size={14} />
            <span>SELECTED WORKS &amp; CASE STUDIES</span>
          </div>

          <h1 className="portfolio-main-heading">
            <span className="showcase-title">FEATURED</span>
            <span className="showcase-title">SHOWCASE</span>
          </h1>
          
          <p className="portfolio-main-subtitle">
            Explore 10 curated digital systems, platforms, and interactive experiences crafted by Pravishree Design Co. Scroll vertically to navigate the interactive showcase row or select any project to explore detailed specifications below.
          </p>

          {/* Interactive Navigation Control Bar */}
          <div className="portfolio-nav-summary">
            <div className="portfolio-status-indicator">
              <span className="status-dot"></span>
              <span className="status-text">
                PROJECT {selectedProject.number} OF 10: <strong>{selectedProject.name}</strong>
              </span>
            </div>
            
            <div className="portfolio-quick-stepper">
              <button 
                className="stepper-btn" 
                onClick={handlePrev}
                aria-label="Previous Project"
                title="Previous Project"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="stepper-count">{selectedProject.number} / 10</span>
              <button 
                className="stepper-btn" 
                onClick={handleNext}
                aria-label="Next Project"
                title="Next Project"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Pinned Horizontal Scroll Section: ONE SINGLE ROW OF 10 SLANTED PROJECT BLOCKS */}
      <section className="portfolio-showcase-section" ref={sectionRef}>
        <div className="showcase-scroll-viewport">
          
          <div className="showcase-horizontal-track" ref={trackRef}>
            {portfolioItems.map((project, index) => {
              const isSelected = selectedIndex === index;

              return (
                <div
                  key={project.id}
                  className={`slanted-project-block ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => handleSelectProject(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelectProject(index);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                  aria-label={`Select Project ${project.number} — ${project.name}`}
                >
                  {/* Outer Slanted Card Container */}
                  <div className="slanted-card-frame glass-card">
                    
                    {/* Inner Content Unskewed for Visual Clarity */}
                    <div className="slanted-card-inner">
                      
                      {/* Top Bar: Number & Selection Indicator */}
                      <div className="card-top-bar">
                        <span className="card-number-badge">{project.number}</span>
                        <div className="card-select-pill">
                          {isSelected ? (
                            <span className="pill-active"><CheckCircle2 size={12} /> ACTIVE</span>
                          ) : (
                            <span className="pill-idle"><MousePointerClick size={12} /> SELECT</span>
                          )}
                        </div>
                      </div>

                      {/* Visual Preview Banner */}
                      <div className="card-visual-box">
                        <img 
                          src={project.image} 
                          alt={project.name} 
                          className="card-visual-img"
                          loading="lazy"
                        />
                        <div className="card-visual-overlay">
                          <span className="card-inspect-hint">
                            <Eye size={14} /> Click to Inspect
                          </span>
                        </div>
                        <div className="card-diagonal-accent"></div>
                      </div>

                      {/* Project Header & Category */}
                      <div className="card-info-box">
                        <span className="card-category-tag">{project.category}</span>
                        <h3 className="card-project-name">{project.name}</h3>
                        <p className="card-short-summary">{project.shortDescription}</p>
                      </div>

                      {/* Services Pills Row */}
                      <div className="card-mini-tags">
                        {project.services.slice(0, 2).map((srv, sIdx) => (
                          <span key={sIdx} className="mini-tag-pill">{srv}</span>
                        ))}
                        {project.services.length > 2 && (
                          <span className="mini-tag-pill">+{project.services.length - 2}</span>
                        )}
                      </div>

                      {/* Card Bottom CTA Link */}
                      <div className="card-bottom-link">
                        <span className="link-label">
                          {isSelected ? 'CURRENTLY SELECTED' : 'INSPECT DETAILS'}
                        </span>
                        <ArrowRight size={13} className="link-arrow-icon" />
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Dynamic Project Details Panel (Updates upon project selection) */}
      <div className="portfolio-page-container">
        
        <div className="portfolio-details-wrapper" ref={detailsRef}>
          <div className="portfolio-details-card glass-card">
            
            {/* Panel Top Meta Bar */}
            <div className="details-header-row">
              <div className="details-heading-group">
                <div className="details-number-badge">
                  <span>PROJECT {selectedProject.number}</span>
                </div>
                <h2 className="details-project-title">{selectedProject.name}</h2>
                <p className="details-project-category">{selectedProject.category}</p>
              </div>

              <div className="details-actions-group">
                <button 
                  className="btn-primary details-modal-btn"
                  onClick={() => {
                    if (onOpenProjectModal) onOpenProjectModal(selectedProject);
                  }}
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Comprehensive Description */}
            <div className="details-description-box">
              <p className="details-description-text">
                {selectedProject.description}
              </p>
            </div>

            {/* 3-Column Information Grid: CLIENT | SERVICES | TECHNOLOGY */}
            <div className="details-specs-grid">
              
              {/* Column 1: Client */}
              <div className="spec-column glass-spec-card">
                <div className="spec-title">
                  <Building2 size={15} className="spec-icon" />
                  <span>CLIENT</span>
                </div>
                <div className="spec-value-main">
                  <strong>{selectedProject.client}</strong>
                </div>
                <div className="spec-meta-note">
                  <span>Industry Sector</span>
                </div>
              </div>

              {/* Column 2: Services */}
              <div className="spec-column glass-spec-card">
                <div className="spec-title">
                  <Layers size={15} className="spec-icon" />
                  <span>SERVICES DELIVERED</span>
                </div>
                <div className="spec-tags-flow">
                  {selectedProject.services.map((srv, idx) => (
                    <span key={idx} className="spec-pill-tag srv-pill">{srv}</span>
                  ))}
                </div>
              </div>

              {/* Column 3: Technology */}
              <div className="spec-column glass-spec-card">
                <div className="spec-title">
                  <Code2 size={15} className="spec-icon" />
                  <span>TECHNOLOGY STACK</span>
                </div>
                <div className="spec-tags-flow">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="spec-pill-tag tech-pill">{tech}</span>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Actions Bar */}
            <div className="details-footer-row">
              <div className="details-features-preview">
                <span className="features-eyebrow">KEY CAPABILITIES:</span>
                <div className="features-inline-list">
                  {selectedProject.features.slice(0, 3).map((feat, fIdx) => (
                    <span key={fIdx} className="feature-item-inline">
                      <CheckCircle2 size={13} className="feature-check-icon" /> {feat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="details-quick-contact">
                <a 
                  href="#contact"
                  className="btn-secondary details-contact-btn"
                  onClick={(e) => {
                    if (onOpenContact) {
                      e.preventDefault();
                      onOpenContact(selectedProject.name);
                    }
                  }}
                >
                  <span>Inquire About {selectedProject.name}</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Conversion CTA Banner */}
        <div className="portfolio-cta-banner glass-card">
          <div className="cta-left-content">
            <span className="cta-eyebrow">HAVE A VISION FOR YOUR BRAND?</span>
            <h2 className="cta-heading">Ready to Build Something Extraordinary?</h2>
            <p className="cta-desc">
              Partner with Pravishree Design Co. for custom software, web development, mobile apps, digital marketing, BPO services, and video editing solutions.
            </p>
          </div>
          <div className="cta-right-action">
            <a 
              href="#contact" 
              className="btn-primary cta-btn"
              onClick={(e) => {
                if (onOpenContact) {
                  e.preventDefault();
                  onOpenContact('Software Development');
                }
              }}
            >
              <span>Start Your Project</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

