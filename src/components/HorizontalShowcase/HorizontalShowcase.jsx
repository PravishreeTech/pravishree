import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';
import './HorizontalShowcase.css';

const slidesData = [
  {
    id: '01',
    number: '01 — Digital Transformation',
    title: 'Your Trusted Partner For All Your Digital Needs',
    subtitle: 'End-to-End Solutions • Innovation & Excellence • Quality You Can Trust',
    image: '/assets/slide-1.jpg',
    badge: 'Flagship Overview',
    accent: '#0077B6',
    tags: ['Web Development', 'Designing', 'App Dev', 'BPO Services', 'Digital Marketing'],
    link: '#services'
  },
  {
    id: '02',
    number: '02 — Creative & Media',
    title: 'Creative Designs. Stunning Visuals. Powerful Impact.',
    subtitle: 'Graphic Designing • Video Editing • Branding & Visual Identity',
    image: '/assets/slide-2.jpg',
    badge: 'Creative Production',
    accent: '#0096C7',
    tags: ['Brand Identity', 'Motion Graphics', 'UI/UX Prototyping', '4K Video Editing'],
    link: '#services-designing'
  },
  {
    id: '03',
    number: '03 — Growth & Acquisition',
    title: 'Digital Marketing, Funnel Optimization & SEO Scale',
    subtitle: 'Performance ROI • Targeted Google & Meta Ads • Global Authority',
    image: '/assets/slide-3.svg',
    badge: 'Growth Acceleration',
    accent: '#0284C7',
    tags: ['SEO Domination', 'PPC Management', 'Omnichannel Funnels', 'High ROAS'],
    link: '#services-digital-marketing'
  },
  {
    id: '04',
    number: '04 — Cloud & Architecture',
    title: 'Scalable Cloud, DevOps & High-Availability Systems',
    subtitle: 'Zero Downtime • Multi-Region Microservices • API Engineering',
    image: '/assets/slide-4.svg',
    badge: 'Infrastructure',
    accent: '#0B3B60',
    tags: ['Kubernetes', 'Cloud Security', 'Next.js 15', 'Distributed Systems'],
    link: '#services-web-development'
  },
  {
    id: '05',
    number: '05 — Engineering & Apps',
    title: 'Web & App Development and Custom Software Design',
    subtitle: 'Ideas → Designs → Digital Solutions with Scalable Performance',
    image: '/assets/slide-5.jpg',
    badge: 'Core Technology',
    accent: '#0077B6',
    tags: ['Custom Web Dev', 'Mobile iOS & Android', 'Custom Software', 'Scalable Solutions'],
    link: '#services-web-development'
  },
  {
    id: '06',
    number: '06 — Global Delivery',
    title: 'Domestic & International BPO Operational Excellence',
    subtitle: '24/7 Voice Support • HIPAA Medical Billing • AI Training Annotation',
    image: '/assets/slide-6.svg',
    badge: 'Operations Desk',
    accent: '#0F766E',
    tags: ['Domestic Voice', 'International Shifts', 'Medical Billing', 'Data Annotation'],
    link: '#services-bpo-domestic'
  }
];

export default function HorizontalShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev < slidesData.length - 1 ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : slidesData.length - 1));
  };

  // Scroll to active card in the horizontal track
  useEffect(() => {
    if (trackRef.current) {
      const cards = trackRef.current.querySelectorAll('.showcase-slide-card');
      if (cards[activeIndex]) {
        cards[activeIndex].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeIndex]);

  return (
    <section className="horizontal-showcase-section" id="showcase" ref={containerRef}>
      
      {/*  Section Header  */}
      <div className="container">
        <div className="showcase-top-header">
          <div>
            <div className="section-badge">
              <Sparkles size={14} /> Interactive Visual Showcase
            </div>
            <h2 className="section-title">
              Explore Our <span className="text-gradient">Core Capabilities</span>
            </h2>
            <p className="section-subtitle">
              Swipe or scroll horizontally through our strategic engineering and creative pillars.
            </p>
          </div>

          {/*  Slide Controls  */}
          <div className="showcase-nav-controls">
            <div className="slide-counter-badge">
              <span className="current-num">0{activeIndex + 1}</span>
              <span className="divider">/</span>
              <span className="total-num">0{slidesData.length}</span>
            </div>

            <div className="nav-buttons-group">
              <button 
                className="showcase-arrow-btn" 
                onClick={prevSlide}
                aria-label="Previous Slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                className="showcase-arrow-btn" 
                onClick={nextSlide}
                aria-label="Next Slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*  Horizontal Sliding Track  */}
      <div className="showcase-track-container" ref={trackRef}>
        <div className="showcase-track">
          {slidesData.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <div 
                key={slide.id}
                className={`showcase-slide-card ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                {/*  Visual Banner Image Container  */}
                <div className="slide-image-wrapper">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="slide-hero-img"
                    loading="lazy"
                  />
                  <div className="slide-image-overlay"></div>
                  
                  <span className="slide-badge-pill" style={{ borderColor: slide.accent }}>
                    {slide.badge}
                  </span>

                  <span className="slide-number-tag">{slide.number}</span>
                </div>

                {/*  Slide Card Info Footer  */}
                <div className="slide-card-footer">
                  <div className="slide-card-text">
                    <h3 className="slide-card-title">{slide.title}</h3>
                    <p className="slide-card-subtitle">{slide.subtitle}</p>
                    
                    {/*  Tag Pills  */}
                    <div className="slide-tags-row">
                      {slide.tags.map((tag, tIndex) => (
                        <span key={tIndex} className="slide-tag-pill">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <a href={slide.link} className="slide-action-circle" aria-label={`Learn more about ${slide.title}`}>
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/*  Progress Track Indicator  */}
      <div className="container">
        <div className="showcase-progress-bar-wrap">
          <div 
            className="showcase-progress-bar-fill" 
            style={{ width: `${((activeIndex + 1) / slidesData.length) * 100}%` }}
          ></div>
        </div>

        {/*  Dot Indicators  */}
        <div className="showcase-dots-row">
          {slidesData.map((slide, i) => (
            <button
              key={slide.id}
              className={`showcase-dot-btn ${i === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Jump to slide ${i + 1}`}
            >
              <span className="dot-index">0{i + 1}</span>
            </button>
          ))}
        </div>
      </div>

    </section>
  );
}
