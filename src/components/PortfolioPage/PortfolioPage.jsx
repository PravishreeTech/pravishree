import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Sparkles, 
  Eye, 
  ArrowRight, 
  ArrowUpRight, 
  Briefcase
} from 'lucide-react';
import { portfolioCategories, portfolioItems } from '../../data/portfolioData';
import './PortfolioPage.css';

export default function PortfolioPage({ onNavigateHome, onOpenProjectModal, onOpenContact }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const filteredProjects = selectedCategory === 'ALL'
    ? portfolioItems
    : portfolioItems.filter(p => p.category.toUpperCase() === selectedCategory.toUpperCase());

  return (
    <div className="portfolio-page-root">
      
      {/* Ambient Background Typography */}
      <div className="ambient-watermark-wrap" aria-hidden="true">
        <span className="ambient-watermark-text" style={{ top: '4%', left: '2%' }}>
          Portfolio
        </span>
      </div>

      <div className="portfolio-page-container">
        
        {/* Page Top Context Header */}
        <div className="portfolio-top-header">
          <nav className="portfolio-breadcrumb" aria-label="Breadcrumb">
            <button className="breadcrumb-link" onClick={onNavigateHome}>Home</button>
            <ChevronRight size={14} className="breadcrumb-separator" />
            <span className="breadcrumb-current">Portfolio</span>
          </nav>
          <div className="portfolio-header-badge">
            <Sparkles size={14} />
            <span>SELECTED WORKS &amp; CASE STUDIES</span>
          </div>
          <h1 className="portfolio-main-heading">PORTFOLIO</h1>
          <p className="portfolio-main-subtitle">
            Selected projects, digital experiences, and solutions crafted by Pravishree Design Co.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="portfolio-categories-bar" role="tablist" aria-label="Project Categories">
          {portfolioCategories.map((cat) => {
            const count = cat === 'ALL'
              ? portfolioItems.length
              : portfolioItems.filter(p => p.category.toUpperCase() === cat.toUpperCase()).length;

            return (
              <button
                key={cat}
                className={`category-tab-btn ${selectedCategory === cat ? 'is-active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
                role="tab"
                aria-selected={selectedCategory === cat}
              >
                <span>{cat}</span>
                <span className="category-count-badge">{count}</span>
              </button>
            );
          })}
        </div>

        {/* 3-Column Project Cards Grid */}
        {filteredProjects.length > 0 ? (
          <div className="portfolio-grid-layout">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="portfolio-grid-card glass-card"
                onClick={() => {
                  if (onOpenProjectModal) onOpenProjectModal(project);
                }}
              >
                {/* Visual Image Banner with Hover Zoom */}
                <div className="card-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title || project.name} 
                    className="card-project-img"
                    loading="lazy"
                  />
                  <div className="card-image-overlay">
                    <span className="card-quick-view-btn">
                      <Eye size={15} /> View Project Details
                    </span>
                  </div>
                  <div className="card-floating-badges">
                    <span className="badge-cat">{project.category}</span>
                    {project.year && <span className="badge-year">{project.year}</span>}
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="card-content-body">
                  {project.client && (
                    <div className="card-client-meta">
                      <span>Client: <strong>{project.client}</strong></span>
                    </div>
                  )}

                  <h3 className="card-project-title">{project.title || project.name}</h3>
                  <p className="card-project-desc">
                    {project.shortDescription || project.description}
                  </p>

                  {/* Services / Tags Pills */}
                  <div className="card-tags-row">
                    {(project.services || project.tags || []).slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="card-tag-pill">{tag}</span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="card-action-bar">
                    <button 
                      className="card-view-link"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onOpenProjectModal) onOpenProjectModal(project);
                      }}
                    >
                      <span>VIEW PROJECT</span>
                      <ArrowRight size={14} className="link-arrow" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="portfolio-empty-state glass-card">
            <Briefcase size={36} className="empty-icon" />
            <h3>No projects found in this category</h3>
            <p>We are continuously updating our case studies. Try selecting another category.</p>
            <button className="btn-primary" onClick={() => setSelectedCategory('ALL')}>
              View All Projects
            </button>
          </div>
        )}

        {/* Bottom CTA Banner */}
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
