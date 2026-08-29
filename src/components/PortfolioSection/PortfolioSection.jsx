import React, { useState } from 'react';
import { 
  Palette, 
  Sparkles, 
  ExternalLink, 
  Eye, 
  ArrowUpRight,
  Filter
} from 'lucide-react';
import { portfolioCategories, portfolioItems } from '../../data/portfolioData';
import './PortfolioSection.css';

export default function PortfolioSection({ onOpenProjectModal }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        
        {/*  Section Header  */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} /> Proven Track Record
          </div>
          <h2 className="section-title">
            Featured Works &amp; <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="section-subtitle">
            Explore our curated portfolio across posters, brand marks, modern web portals, video edits, and bespoke software.
          </p>
        </div>

        {/*  Filter Categories Pill Nav  */}
        <div className="portfolio-filter-nav" role="tablist">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              className={`portfolio-tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
            >
              <span>{cat}</span>
              {cat === 'All' ? (
                <span className="count-tag">{portfolioItems.length}</span>
              ) : (
                <span className="count-tag">
                  {portfolioItems.filter(p => p.category.toLowerCase() === cat.toLowerCase()).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/*  Portfolio Items Grid  */}
        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="portfolio-card"
              onClick={() => {
                setSelectedItem(item);
                if (onOpenProjectModal) onOpenProjectModal(item);
              }}
            >
              {/*  Card Image Container  */}
              <div className="portfolio-img-wrap">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="portfolio-img"
                  loading="lazy"
                />
                <div className="portfolio-hover-overlay">
                  <span className="btn-quick-view">
                    <Eye size={16} /> View Project Details
                  </span>
                </div>
                <span className="portfolio-cat-badge">{item.category}</span>
                <span className="portfolio-year-badge">{item.year}</span>
              </div>

              {/*  Card Content Details  */}
              <div className="portfolio-card-details">
                <div className="portfolio-client-row">
                  <span className="portfolio-client-name">Client: {item.client}</span>
                </div>
                <h3 className="portfolio-item-title">{item.title}</h3>
                <p className="portfolio-item-summary">{item.summary}</p>
                
                <div className="portfolio-tags-flex">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="portfolio-mini-pill">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*  Bottom CTA  */}
        <div className="portfolio-bottom-banner">
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
