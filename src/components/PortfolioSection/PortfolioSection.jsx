import React, { useState } from 'react';
import { 
  Sparkles, 
  Eye, 
  ArrowUpRight, 
  ArrowRight
} from 'lucide-react';
import { portfolioCategories, portfolioItems } from '../../data/portfolioData';
import './PortfolioSection.css';

export default function PortfolioSection({ onOpenProjectModal }) {
  const [activeCategory, setActiveCategory] = useState('SOFTWARE');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCategoryChange = (cat) => {
    if (cat.toUpperCase() === activeCategory.toUpperCase()) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCategory(cat);
      setIsAnimating(false);
    }, 120);
  };

  const filteredItems = portfolioItems.filter(
    item => item.category.toUpperCase() === activeCategory.toUpperCase()
  );

  return (
    <section className="portfolio-section" id="portfolio">
      
      {/* Ambient Background Typography */}
      <div className="ambient-watermark-wrap" aria-hidden="true">
        <span className="ambient-watermark-text">
          IMPACT
        </span>
      </div>

      <div className="container relative-z">
        
        {/* Section Header with Line Reveal */}
        <div className="section-header reveal-line">
          <div className="section-badge">
            <Sparkles size={14} /> Featured Portfolio
          </div>
          <h2 className="section-title">
            <span className="reveal-line reveal-line-delay-1">Ideas Into</span>
            <span className="reveal-line reveal-line-delay-2 text-gradient">Impact</span>
          </h2>
          <p className="section-subtitle reveal-line reveal-line-delay-3">
            Explore how technology, creativity and strategy come together to create meaningful digital solutions.
          </p>
        </div>

        {/* Filter Categories Pill Nav */}
        <div className="portfolio-filter-nav" role="tablist">
          {portfolioCategories.map((cat) => {
            const count = portfolioItems.filter(p => p.category.toUpperCase() === cat.toUpperCase()).length;
            const isActive = activeCategory.toUpperCase() === cat.toUpperCase();

            return (
              <button
                key={cat}
                className={`portfolio-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat)}
                role="tab"
                aria-selected={isActive}
              >
                <span>{cat}</span>
                <span className="count-tag">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Large Visual Portfolio Layout (2-Column Premium Showcase) */}
        <div className={`portfolio-large-grid ${isAnimating ? 'portfolio-grid-animating' : 'portfolio-grid-fade-in'}`}>
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="portfolio-large-card glass-card"
              onClick={() => {
                if (onOpenProjectModal) onOpenProjectModal(item);
              }}
            >
              {/* Card Visual Image with Cinematic Hover Zoom */}
              <div className="portfolio-img-container">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="portfolio-large-img"
                  loading="lazy"
                />
                <div className="portfolio-glass-overlay">
                  <span className="btn-quick-action">
                    <Eye size={16} /> View Project Details
                  </span>
                </div>
                <div className="portfolio-badge-row">
                  <span className="portfolio-cat-pill">{item.category}</span>
                  <span className="portfolio-year-pill">{item.year}</span>
                </div>
              </div>

              {/* Card Meta & Details */}
              <div className="portfolio-large-details">
                <div className="portfolio-meta-header">
                  <span className="portfolio-industry-label">Industry: <strong>{item.client}</strong></span>
                </div>

                <h3 className="portfolio-large-title">{item.title}</h3>
                <p className="portfolio-large-desc">{item.summary}</p>

                {/* Services / Tags List */}
                <div className="portfolio-services-tags">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="portfolio-tag-pill">{tag}</span>
                  ))}
                </div>

                {/* View Project Action Link */}
                <div className="portfolio-action-row">
                  <button className="portfolio-view-btn" aria-label={`View ${item.title}`}>
                    <span>View Project</span>
                    <ArrowRight size={15} className="portfolio-btn-arrow" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="portfolio-bottom-banner reveal-scale">
          <div className="portfolio-cta-text">
            <h3>Have a specific project in mind?</h3>
            <p>We build tailored solutions from scratch to match your exact business requirements.</p>
          </div>
          <a href="#contact" className="btn-primary">
            <span>Start Your Project</span>
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}

