import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe, 
  Code2, 
  Smartphone, 
  TrendingUp, 
  Headphones, 
  Film,
  ArrowRight, 
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Zap,
  Activity,
  Layers,
  BarChart3,
  Sliders,
  Cpu
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import './ServicesSection.css';

// Custom Abstract Technology Visual Renderers for each Service
function ServiceAbstractVisual({ serviceId }) {
  switch (serviceId) {
    case 'software-development':
      return (
        <div className="svc-abstract-graphic graphic-software">
          <svg className="svc-svg-canvas" viewBox="0 0 320 180" fill="none" aria-hidden="true">
            {/* Background Grid */}
            <pattern id="softGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0, 217, 255, 0.12)" strokeWidth="1" />
            </pattern>
            <rect width="320" height="180" fill="url(#softGrid)" />

            {/* Architecture Node Connections */}
            <path d="M 60 90 L 120 45 L 200 45 L 260 90 L 200 135 L 120 135 Z" stroke="rgba(0, 217, 255, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="60" y1="90" x2="260" y2="90" stroke="rgba(0, 119, 182, 0.4)" strokeWidth="1.5" />
            <line x1="160" y1="45" x2="160" y2="135" stroke="rgba(25, 230, 208, 0.4)" strokeWidth="1.5" />

            {/* Microservice Blocks */}
            <rect x="44" y="74" width="32" height="32" rx="8" fill="#061329" stroke="#00D9FF" strokeWidth="1.5" />
            <rect x="144" y="29" width="32" height="32" rx="8" fill="#061329" stroke="#0077B6" strokeWidth="1.5" />
            <rect x="144" y="119" width="32" height="32" rx="8" fill="#061329" stroke="#19E6D0" strokeWidth="1.5" />
            <rect x="244" y="74" width="32" height="32" rx="8" fill="#061329" stroke="#00D9FF" strokeWidth="1.5" />

            {/* Pulsing Nodes */}
            <circle cx="160" cy="90" r="14" fill="rgba(0, 217, 255, 0.25)" />
            <circle cx="160" cy="90" r="6" fill="#00D9FF" />
            
            <circle cx="60" cy="90" r="4" fill="#00D9FF" />
            <circle cx="160" cy="45" r="4" fill="#0077B6" />
            <circle cx="160" cy="135" r="4" fill="#19E6D0" />
            <circle cx="260" cy="90" r="4" fill="#00D9FF" />
          </svg>
          <div className="svc-visual-pill">
            <Cpu size={13} className="pill-icon-cyan" />
            <span>API &amp; System Architecture</span>
          </div>
        </div>
      );

    case 'website-development':
      return (
        <div className="svc-abstract-graphic graphic-web">
          <div className="web-browser-frame">
            <div className="browser-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <div className="browser-url-bar">
                <span className="url-secure-icon">🔒</span>
                <span className="url-text">pravishree.com/digital</span>
              </div>
            </div>
            <div className="browser-body">
              <div className="ui-hero-placeholder">
                <div className="ui-line line-title"></div>
                <div className="ui-line line-sub"></div>
              </div>
              <div className="ui-cards-row">
                <div className="ui-card-skeleton active"></div>
                <div className="ui-card-skeleton"></div>
                <div className="ui-card-skeleton"></div>
              </div>
            </div>
          </div>
          <div className="svc-visual-pill">
            <Layers size={13} className="pill-icon-cyan" />
            <span>High-Speed Responsive UX</span>
          </div>
        </div>
      );

    case 'app-development':
      return (
        <div className="svc-abstract-graphic graphic-app">
          <div className="app-devices-stage">
            <div className="mobile-phone-device device-bg">
              <div className="phone-screen">
                <div className="phone-widget"></div>
                <div className="phone-list-item"></div>
                <div className="phone-list-item"></div>
              </div>
            </div>
            <div className="mobile-phone-device device-main">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="app-header-avatar"></div>
                <div className="app-stat-banner"></div>
                <div className="app-action-grid">
                  <span className="app-btn-icon"></span>
                  <span className="app-btn-icon"></span>
                  <span className="app-btn-icon"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="svc-visual-pill">
            <Smartphone size={13} className="pill-icon-cyan" />
            <span>iOS &amp; Android Ecosystems</span>
          </div>
        </div>
      );

    case 'digital-marketing':
      return (
        <div className="svc-abstract-graphic graphic-marketing">
          <div className="chart-stage">
            <svg className="chart-svg" viewBox="0 0 280 120" fill="none">
              <path d="M 20 100 Q 80 85 130 50 T 260 15" stroke="rgba(0, 217, 255, 0.4)" strokeWidth="3" fill="none" />
              <path d="M 20 100 Q 80 85 130 50 T 260 15 L 260 110 L 20 110 Z" fill="url(#chartGrad)" />
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(0, 217, 255, 0.35)" />
                  <stop offset="100%" stopColor="rgba(0, 119, 182, 0.0)" />
                </linearGradient>
              </defs>
              <circle cx="130" cy="50" r="5" fill="#00D9FF" />
              <circle cx="260" cy="15" r="6" fill="#19E6D0" />
            </svg>
            <div className="chart-bars-wrap">
              <span className="c-bar bar-1"></span>
              <span className="c-bar bar-2"></span>
              <span className="c-bar bar-3"></span>
              <span className="c-bar bar-4"></span>
            </div>
          </div>
          <div className="svc-visual-pill">
            <BarChart3 size={13} className="pill-icon-cyan" />
            <span>Data-Driven ROI Growth</span>
          </div>
        </div>
      );

    case 'bpo-services':
      return (
        <div className="svc-abstract-graphic graphic-bpo">
          <svg className="svc-svg-canvas" viewBox="0 0 320 180" fill="none">
            <circle cx="160" cy="90" r="55" stroke="rgba(0, 217, 255, 0.25)" strokeDasharray="4 4" />
            <circle cx="160" cy="90" r="30" fill="rgba(0, 119, 182, 0.15)" stroke="#00D9FF" strokeWidth="1.5" />
            <circle cx="160" cy="90" r="8" fill="#00D9FF" />
            
            {/* Satellite Support Nodes */}
            <g className="bpo-node n-top">
              <line x1="160" y1="35" x2="160" y2="60" stroke="#00D9FF" strokeWidth="1.5" />
              <circle cx="160" cy="30" r="12" fill="#061329" stroke="#00D9FF" strokeWidth="1.5" />
            </g>
            <g className="bpo-node n-right">
              <line x1="215" y1="90" x2="190" y2="90" stroke="#19E6D0" strokeWidth="1.5" />
              <circle cx="225" cy="90" r="12" fill="#061329" stroke="#19E6D0" strokeWidth="1.5" />
            </g>
            <g className="bpo-node n-bottom">
              <line x1="160" y1="145" x2="160" y2="120" stroke="#0077B6" strokeWidth="1.5" />
              <circle cx="160" cy="150" r="12" fill="#061329" stroke="#0077B6" strokeWidth="1.5" />
            </g>
            <g className="bpo-node n-left">
              <line x1="105" y1="90" x2="130" y2="90" stroke="#00D9FF" strokeWidth="1.5" />
              <circle cx="95" cy="90" r="12" fill="#061329" stroke="#00D9FF" strokeWidth="1.5" />
            </g>
          </svg>
          <div className="svc-visual-pill">
            <Activity size={13} className="pill-icon-cyan" />
            <span>24/7 Multi-Channel SLA Support</span>
          </div>
        </div>
      );

    case 'video-editing':
      return (
        <div className="svc-abstract-graphic graphic-video">
          <div className="timeline-editor-stage">
            <div className="editor-top-bar">
              <span className="time-code">00:04:18:12</span>
              <span className="render-tag">4K HDR</span>
            </div>
            <div className="editor-tracks-wrap">
              <div className="track track-video">
                <span className="clip clip-1"></span>
                <span className="clip clip-2"></span>
              </div>
              <div className="track track-audio">
                <span className="audio-wave"></span>
              </div>
              <div className="editor-playhead"></div>
            </div>
          </div>
          <div className="svc-visual-pill">
            <Sliders size={13} className="pill-icon-cyan" />
            <span>Motion Graphics &amp; Post-Production</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function ServicesSection({ onSelectService }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const stageRef = useRef(null);
  const totalServices = servicesData.length;

  // Reduced Motion Detection
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setIsReducedMotion(e.matches);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  // Auto Rotation Timer (4.5s) - paused when hovered, touched, or reduced motion
  useEffect(() => {
    if (isHovered || isReducedMotion) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalServices);
    }, 4500);

    return () => clearInterval(interval);
  }, [isHovered, isReducedMotion, totalServices]);

  // Navigation Handlers
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalServices) % totalServices);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalServices);
  };

  // Mouse Parallax Handler
  const handleMouseMove = (e) => {
    if (isReducedMotion || !stageRef.current || window.innerWidth < 1024) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMouseTilt({ x: x * 6, y: y * -4 });
  };

  const handleMouseLeave = () => {
    setMouseTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  // Touch Swipe Gesture Handlers
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setIsHovered(true);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  // Keyboard Navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  return (
    <section 
      className="services-section" 
      id="services"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Our Services 3D Showcase"
    >
      {/* Ambient Background Typography Watermark */}
      <div className="ambient-watermark-wrap" aria-hidden="true">
        <span className="ambient-watermark-text">SERVICES</span>
      </div>

      <div className="container relative-z">
        
        <div className="services-3d-layout-grid">
          
          {/* LEFT COLUMN: Editorial Header & Nav Controls */}
          <div className="services-header-col reveal-line">
            <div className="section-badge">
              <Sparkles size={14} /> Comprehensive Capabilities
            </div>
            
            <h2 className="section-title">
              <span className="reveal-line reveal-line-delay-1">Our Services</span>
            </h2>
            
            <p className="section-subtitle reveal-line reveal-line-delay-2">
              Technology, creativity and business solutions designed to help organizations move forward.
            </p>

            {/* MINIMALIST NAV CONTROL BAR */}
            <div className="services-nav-controls reveal-line reveal-line-delay-3">
              <div className="nav-buttons-group">
                <button 
                  className="svc-nav-btn btn-prev" 
                  onClick={handlePrev}
                  aria-label="Previous Service"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="svc-counter-display">
                  <span className="counter-current">{servicesData[activeIndex].num}</span>
                  <span className="counter-sep">/</span>
                  <span className="counter-total">0{totalServices}</span>
                </div>

                <button 
                  className="svc-nav-btn btn-next" 
                  onClick={handleNext}
                  aria-label="Next Service"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* PAGINATION DOTS */}
              <div className="svc-pagination-dots" role="tablist">
                {servicesData.map((svc, idx) => (
                  <button
                    key={svc.id}
                    className={`svc-dot ${idx === activeIndex ? 'active' : ''}`}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Go to ${svc.title}`}
                    role="tab"
                    aria-selected={idx === activeIndex}
                  />
                ))}
              </div>
            </div>

            {/* Active Service Quick Title Badge */}
            <div className="active-svc-quick-tag">
              <Zap size={14} className="icon-cyan" />
              <span>Active: <strong>{servicesData[activeIndex].title}</strong></span>
            </div>
          </div>

          {/* RIGHT COLUMN: 3D PERSPECTIVE STACKED CARDS STAGE */}
          <div 
            className="services-3d-stage-wrap"
            ref={stageRef}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className={`services-3d-card-stack ${isReducedMotion ? 'reduced-motion' : ''}`}
              style={{
                transform: isReducedMotion ? 'none' : `rotateX(${mouseTilt.y}deg) rotateY(${mouseTilt.x}deg)`
              }}
            >
              {servicesData.map((service, index) => {
                // Calculate wrapped circular index offset (-2, -1, 0, 1, 2) relative to activeIndex
                let offset = (index - activeIndex + totalServices) % totalServices;
                if (offset > totalServices / 2) {
                  offset -= totalServices;
                }

                const isActive = offset === 0;

                // Card 3D transform classes based on offset
                let transformClass = 'card-hidden';
                if (offset === 0) transformClass = 'card-active';
                else if (offset === 1) transformClass = 'card-next-1';
                else if (offset === -1) transformClass = 'card-prev-1';
                else if (offset === 2) transformClass = 'card-next-2';
                else if (offset === -2) transformClass = 'card-prev-2';

                return (
                  <div
                    key={service.id}
                    className={`service-3d-card ${transformClass} ${isActive ? 'is-active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                    role="group"
                    aria-label={`${service.num} ${service.title}`}
                  >
                    {/* Top Row Header */}
                    <div className="card-3d-top">
                      <span className="card-num-tag">{service.num} / {service.title.toUpperCase()}</span>
                      <span className="card-badge-tag">{service.badge}</span>
                    </div>

                    {/* Abstract Service Graphic */}
                    <ServiceAbstractVisual serviceId={service.id} />

                    {/* Service Title & Summary */}
                    <div className="card-3d-body">
                      <h3 className="card-3d-title">{service.title}</h3>
                      <p className="card-3d-desc">{service.shortDesc}</p>

                      {/* Compact Capability Pills */}
                      <div className="card-compact-pills">
                        {service.compactPills.map((pill, pIdx) => (
                          <span key={pIdx} className="pill-tag">{pill}</span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA Action Link */}
                    <div className="card-3d-footer">
                      <a 
                        href="#contact" 
                        className="card-explore-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onSelectService) onSelectService(service.title);
                        }}
                      >
                        <span>EXPLORE SERVICE</span>
                        <ArrowRight size={15} className="btn-arrow" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
