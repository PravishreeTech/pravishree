import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, 
  Globe, 
  Smartphone, 
  TrendingUp, 
  Headphones, 
  Film,
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ServicesPage.css';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage({ onNavigateHome, onOpenContact }) {
  const [activeServiceIndex, setActiveServiceIndex] = useState(null);
  const [hoverPartnerIndex, setHoverPartnerIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const stickyArtRef = useRef(null);

  const servicesData = [
    {
      id: 'software',
      number: '01',
      title: 'SOFTWARE DEVELOPMENT',
      shortTitle: 'Software Development',
      icon: Code2,
      subtitle: 'Build technology around your business.',
      description: 'We develop customized software solutions designed around specific business requirements, workflows, enterprise applications, and long-term cloud growth.',
      tags: ['Custom Software', 'Enterprise Applications', 'API Integration', 'Cloud Architecture', 'Database Systems', 'Software Support'],
      accentColor: '#00D9FF',
      gradient: 'linear-gradient(135deg, #00D9FF 0%, #0077B6 100%)',
      visualStyle: 'art-software'
    },
    {
      id: 'website',
      number: '02',
      title: 'WEBSITE DEVELOPMENT',
      shortTitle: 'Website Development',
      icon: Globe,
      subtitle: 'Digital experiences built for your business.',
      description: 'We create modern, responsive websites and web portals combining high performance, mobile usability, SEO optimization, and premium UI design.',
      tags: ['Corporate Websites', 'Business Websites', 'Web Portals', 'Responsive Layouts', 'UI/UX Implementation', 'Website Maintenance'],
      accentColor: '#19E6D0',
      gradient: 'linear-gradient(135deg, #19E6D0 0%, #0077B6 100%)',
      visualStyle: 'art-web'
    },
    {
      id: 'app',
      number: '03',
      title: 'APP DEVELOPMENT',
      shortTitle: 'App Development',
      icon: Smartphone,
      subtitle: 'Turn ideas into seamless mobile experiences.',
      description: 'We develop feature-rich Android and iOS applications that help businesses engage customers, streamline workflows, and power digital products.',
      tags: ['Android Applications', 'iOS Applications', 'Cross-Platform Apps', 'Mobile UI/UX', 'Real-Time Sync', 'App Store Maintenance'],
      accentColor: '#1677FF',
      gradient: 'linear-gradient(135deg, #1677FF 0%, #00D9FF 100%)',
      visualStyle: 'art-mobile'
    },
    {
      id: 'marketing',
      number: '04',
      title: 'DIGITAL MARKETING',
      shortTitle: 'Digital Marketing',
      icon: TrendingUp,
      subtitle: 'Turn digital presence into measurable ROI.',
      description: 'We help organizations accelerate growth through organic SEO, paid media performance campaigns, social media strategy, and conversion optimization.',
      tags: ['Organic & Technical SEO', 'Performance Ad Campaigns', 'Social Media Marketing', 'Content Strategy', 'Brand Promotion', 'Conversion Optimization'],
      accentColor: '#19E6D0',
      gradient: 'linear-gradient(135deg, #19E6D0 0%, #061329 100%)',
      visualStyle: 'art-marketing'
    },
    {
      id: 'bpo',
      number: '05',
      title: 'BPO SERVICES',
      shortTitle: 'BPO Services',
      icon: Headphones,
      subtitle: '24/7 reliable support behind your business.',
      description: 'Our business process outsourcing desks streamline operations, data management, and customer experiences through domestic and international voice capabilities.',
      tags: ['Domestic Voice Support', 'International Voice Desks', '24/7 Customer Care', 'Data Entry & Management', 'Virtual Assistance', 'Tier 1/2 Technical Support'],
      tools: ['Zendesk', 'Salesforce', 'Slack', 'Zoom'],
      accentColor: '#1677FF',
      gradient: 'linear-gradient(135deg, #1677FF 0%, #19E6D0 100%)',
      visualStyle: 'art-bpo'
    },
    {
      id: 'video',
      number: '06',
      title: 'VIDEO EDITING',
      shortTitle: 'Video Editing',
      icon: Film,
      subtitle: 'Captivating media post-production & motion graphics.',
      description: 'Our creative post-production studio delivers high-fidelity video editing, 2D/3D motion graphics, color grading, visual effects, and promo films.',
      tags: ['High-Fidelity Editing', '2D & 3D Motion Graphics', 'Visual Effects (VFX)', 'Color Grading', 'Social Reels & Shorts', 'Corporate Promos'],
      accentColor: '#10B981',
      gradient: 'linear-gradient(135deg, #10B981 0%, #00D9FF 100%)',
      visualStyle: 'art-video'
    }
  ];

  const partnerPillars = [
    { label: 'SOFTWARE', title: 'Software Development' },
    { label: 'WEBSITE', title: 'Website Development' },
    { label: 'APP', title: 'App Development' },
    { label: 'MARKETING', title: 'Digital Marketing' },
    { label: 'BPO', title: 'BPO Services' },
    { label: 'VIDEO', title: 'Video Editing' }
  ];

  // Mouse move handler for 3D art parallax
  const handleMouseMove = (e) => {
    if (!stickyArtRef.current) return;
    const rect = stickyArtRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMousePos({ x: x * 14, y: y * 14 });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.querySelectorAll('.gsap-hero-anim'),
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out' }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const handleScrollToCore = () => {
    const el = document.getElementById('services-core-list');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="services-page-root">
      
      {/* =========================================================
          SECTION 1: SERVICES HERO
         ========================================================= */}
      <section className="services-hero-section" ref={heroRef}>
        <div className="services-hero-glass-bg"></div>
        <div className="services-hero-container">
          
          <nav className="services-breadcrumb gsap-hero-anim" aria-label="Breadcrumb">
            <button className="breadcrumb-link" onClick={onNavigateHome}>Home</button>
            <ChevronRight size={14} className="breadcrumb-separator" />
            <span className="breadcrumb-current">Services &amp; Capabilities</span>
          </nav>

          <div className="services-hero-grid">
            <div className="services-hero-content">
              <div className="services-badge-pill gsap-hero-anim">
                <Sparkles size={14} className="badge-sparkle-icon" />
                <span>OUR SERVICES</span>
              </div>

              <h1 className="services-hero-title gsap-hero-anim">
                Technology. Creativity. <br />
                <span className="gradient-cyan-text">Business. Solutions</span>
              </h1>

              <p className="services-hero-subtitle gsap-hero-anim">
                We bring technology, creative thinking and business expertise together to build solutions that help organizations operate smarter, connect better and grow.
              </p>

              <div className="services-hero-actions gsap-hero-anim">
                <button className="btn-services-primary" onClick={handleScrollToCore}>
                  <span>Explore Capabilities</span>
                  <ArrowRight size={18} />
                </button>
                <button className="btn-services-secondary" onClick={() => onOpenContact && onOpenContact('Software Development')}>
                  <span>Schedule Consultation</span>
                  <ExternalLink size={16} />
                </button>
              </div>

              <div className="hero-mini-stats gsap-hero-anim">
                <div className="mini-stat-item">
                  <span className="stat-number">99.9%</span>
                  <span className="stat-label">Uptime SLA</span>
                </div>
                <div className="stat-divider"></div>
                <div className="mini-stat-item">
                  <span className="stat-number">150+</span>
                  <span className="stat-label">Digital Assets</span>
                </div>
                <div className="stat-divider"></div>
                <div className="mini-stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Global Desks</span>
                </div>
              </div>
            </div>

            {/* Right 3D Orb Stage */}
            <div className="services-hero-stage-wrap gsap-hero-anim">
              <div className="glass-orb-stage">
                
                {/* SVG Connection Lines connecting Pills to Sphere Center */}
                <svg className="orb-connection-svg" viewBox="0 0 460 460" fill="none" aria-hidden="true">
                  <line x1="230" y1="230" x2="230" y2="35" className="conn-line conn-1" />
                  <line x1="230" y1="230" x2="45" y2="120" className="conn-line conn-2" />
                  <line x1="230" y1="230" x2="415" y2="120" className="conn-line conn-3" />
                  <line x1="230" y1="230" x2="45" y2="340" className="conn-line conn-4" />
                  <line x1="230" y1="230" x2="415" y2="340" className="conn-line conn-5" />
                  <line x1="230" y1="230" x2="230" y2="425" className="conn-line conn-6" />
                </svg>

                {/* Central Multi-Layer Glowing Sphere */}
                <div className="orb-core-sphere">
                  <div className="orb-ring ring-1"></div>
                  <div className="orb-ring ring-2"></div>
                  <div className="orb-ring ring-3"></div>
                  <div className="orb-orbital-ring ring-4"></div>
                  <div className="orb-inner-light"></div>
                  <div className="orb-center-pulse"></div>
                </div>

                {/* 1. Software Development (Top Center) */}
                <button
                  type="button"
                  className={`floating-service-pill pos-top-center float-phase-1 ${activeServiceIndex === 0 ? 'is-active' : ''}`}
                  onClick={() => {
                    setActiveServiceIndex(0);
                    handleScrollToCore();
                  }}
                  title="Software Development"
                >
                  <Code2 size={16} className="cap-icon cyan" />
                  <span>Software Development</span>
                </button>

                {/* 2. Website Development (Top Left) */}
                <button
                  type="button"
                  className={`floating-service-pill pos-top-left float-phase-2 ${activeServiceIndex === 1 ? 'is-active' : ''}`}
                  onClick={() => {
                    setActiveServiceIndex(1);
                    handleScrollToCore();
                  }}
                  title="Website Development"
                >
                  <Globe size={16} className="cap-icon teal" />
                  <span>Website Development</span>
                </button>

                {/* 3. App Development (Top Right) */}
                <button
                  type="button"
                  className={`floating-service-pill pos-top-right float-phase-3 ${activeServiceIndex === 2 ? 'is-active' : ''}`}
                  onClick={() => {
                    setActiveServiceIndex(2);
                    handleScrollToCore();
                  }}
                  title="App Development"
                >
                  <Smartphone size={16} className="cap-icon blue" />
                  <span>App Development</span>
                </button>

                {/* 4. Digital Marketing (Bottom Left) */}
                <button
                  type="button"
                  className={`floating-service-pill pos-bottom-left float-phase-4 ${activeServiceIndex === 3 ? 'is-active' : ''}`}
                  onClick={() => {
                    setActiveServiceIndex(3);
                    handleScrollToCore();
                  }}
                  title="Digital Marketing"
                >
                  <TrendingUp size={16} className="cap-icon teal" />
                  <span>Digital Marketing</span>
                </button>

                {/* 5. BPO Services (Bottom Right) */}
                <button
                  type="button"
                  className={`floating-service-pill pos-bottom-right float-phase-5 ${activeServiceIndex === 4 ? 'is-active' : ''}`}
                  onClick={() => {
                    setActiveServiceIndex(4);
                    handleScrollToCore();
                  }}
                  title="BPO Services"
                >
                  <Headphones size={16} className="cap-icon blue" />
                  <span>BPO Services</span>
                </button>

                {/* 6. Video Editing (Bottom Center) */}
                <button
                  type="button"
                  className={`floating-service-pill pos-bottom-center float-phase-6 ${activeServiceIndex === 5 ? 'is-active' : ''}`}
                  onClick={() => {
                    setActiveServiceIndex(5);
                    handleScrollToCore();
                  }}
                  title="Video Editing"
                >
                  <Film size={16} className="cap-icon emerald" />
                  <span>Video Editing</span>
                </button>

              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 2: INFINITE AUTOMATIC MARQUEE BANNER
         ========================================================= */}
      <section className="services-infinite-marquee-section" aria-hidden="true">
        <div className="marquee-auto-viewport">
          <div className="marquee-auto-track">
            
            <div className="marquee-auto-group">
              <span className="marquee-word-navy">SOFTWARE</span>
              <span className="marquee-star">✦</span>
              <span className="marquee-word-outline">WEBSITE</span>
              <span className="marquee-star">✦</span>
              <span className="marquee-word-navy">APP</span>
              <span className="marquee-star">✦</span>
              <span className="marquee-word-outline">MARKETING</span>
              <span className="marquee-star">✦</span>
              <span className="marquee-word-navy">BPO</span>
              <span className="marquee-star">✦</span>
              <span className="marquee-word-outline">VIDEO EDITING</span>
              <span className="marquee-star">✦</span>
            </div>

            <div className="marquee-auto-group">
              <span className="marquee-word-navy">SOFTWARE</span>
              <span className="marquee-star">✦</span>
              <span className="marquee-word-outline">WEBSITE</span>
              <span className="marquee-star">✦</span>
              <span className="marquee-word-navy">APP</span>
              <span className="marquee-star">✦</span>
              <span className="marquee-word-outline">MARKETING</span>
              <span className="marquee-star">✦</span>
              <span className="marquee-word-navy">BPO</span>
              <span className="marquee-star">✦</span>
              <span className="marquee-word-outline">VIDEO EDITING</span>
              <span className="marquee-star">✦</span>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          SECTION 4: CORE CINEMATIC 7 SERVICES CHOREOGRAPHY
         ========================================================= */}
      <section className="services-cinematic-editorial-section" id="services-core-list">
        <div className="cinematic-editorial-container">
          
          <div className="cinematic-editorial-grid">
            
            {/* LEFT COLUMN: 7 Core Services */}
            <div className="editorial-services-left">
              {servicesData.map((service, index) => {
                const isActive = activeServiceIndex === index;

                return (
                  <article 
                    key={service.id}
                    className={`editorial-service-item ${isActive ? 'is-active' : 'is-inactive'}`}
                    onClick={() => setActiveServiceIndex(activeServiceIndex === index ? null : index)}
                  >
                    <div className="editorial-service-header">
                      <span className="editorial-service-top-num">{service.number}</span>
                      <h2 className="editorial-service-title">
                        {service.title}
                      </h2>
                    </div>

                    {isActive && (
                      <div className="editorial-active-bar"></div>
                    )}

                    {isActive && (
                      <div className="editorial-service-details">
                        <p className="editorial-service-subtitle">
                          "{service.subtitle}"
                        </p>

                        <p className="editorial-service-desc">
                          {service.description}
                        </p>

                        <div className="editorial-tags-row">
                          {service.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="editorial-tag-chip">
                              <CheckCircle2 size={12} className="tag-icon" />
                              {tag}
                            </span>
                          ))}
                        </div>

                        {service.tools && (
                          <div className="editorial-tools-strip">
                            <span className="tools-label">Supported Platforms:</span>
                            {service.tools.map((tool, toolIdx) => (
                              <span key={toolIdx} className="tool-pill">{tool}</span>
                            ))}
                          </div>
                        )}

                        <button 
                          className="editorial-service-cta"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onOpenContact) onOpenContact(service.title);
                          }}
                        >
                          <span>Explore Service</span>
                          <ArrowRight size={15} className="cta-arrow" />
                        </button>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>

            {/* RIGHT COLUMN: 3D Visual Art Canvas */}
            <div className="editorial-services-right">
              <div 
                className="sticky-art-canvas-container" 
                ref={stickyArtRef}
                onMouseMove={handleMouseMove}
              >
                <div className="art-glass-panel">
                  
                  {/* DEFAULT NEUTRAL 3D VISUAL (WHEN NO SERVICE IS ACTIVE) */}
                  <div className={`art-visual-item art-default-neutral ${activeServiceIndex === null ? 'is-active' : ''}`}>
                    <div 
                      className="art-ambient-glow" 
                      style={{ background: 'linear-gradient(135deg, #00D9FF 0%, #0077B6 60%, #061329 100%)' }}
                    ></div>

                    <div 
                      className="art-3d-geometry-wrap"
                      style={{
                        transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`
                      }}
                    >
                      <div className="art-neutral-structure">
                        <div className="neutral-sphere-ring ring-n1"></div>
                        <div className="neutral-sphere-ring ring-n2"></div>
                        <div className="neutral-sphere-ring ring-n3"></div>
                        <div className="matrix-icon-center">
                          <Sparkles size={84} style={{ color: '#00D9FF' }} />
                        </div>
                      </div>
                    </div>

                    <div className="art-caption-overlay">
                      <span className="art-num-tag">00</span>
                      <span className="art-title-tag">EXPLORE CAPABILITIES</span>
                    </div>
                  </div>
                  
                  {servicesData.map((service, index) => {
                    const isActive = activeServiceIndex === index;

                    return (
                      <div 
                        key={service.id}
                        className={`art-visual-item ${service.visualStyle} ${isActive ? 'is-active' : ''}`}
                      >
                        <div 
                          className="art-ambient-glow" 
                          style={{ background: service.gradient }}
                        ></div>

                        <div 
                          className="art-3d-geometry-wrap"
                          style={{
                            transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`
                          }}
                        >
                          {/* 01: Software Development */}
                          {service.id === 'software' && (
                            <div className="art-software-matrix">
                              <div className="matrix-cube cube-outer"></div>
                              <div className="matrix-cube cube-middle"></div>
                              <div className="matrix-cube cube-inner"></div>
                              <div className="matrix-icon-center">
                                <Code2 size={80} style={{ color: service.accentColor }} />
                              </div>
                            </div>
                          )}

                          {/* 02: Website Development */}
                          {service.id === 'website' && (
                            <div className="art-web-structure">
                              <div className="web-grid-frame"></div>
                              <div className="web-glass-layer layer-a"></div>
                              <div className="web-glass-layer layer-b"></div>
                              <div className="matrix-icon-center">
                                <Globe size={80} style={{ color: service.accentColor }} />
                              </div>
                            </div>
                          )}

                          {/* 03: App Development */}
                          {service.id === 'app' && (
                            <div className="art-mobile-chassis">
                              <div className="device-frame"></div>
                              <div className="device-layer layer-1"></div>
                              <div className="device-layer layer-2"></div>
                              <div className="matrix-icon-center">
                                <Smartphone size={80} style={{ color: service.accentColor }} />
                              </div>
                            </div>
                          )}

                          {/* 04: Digital Marketing */}
                          {service.id === 'marketing' && (
                            <div className="art-marketing-growth">
                              <div className="growth-chart-ring r1"></div>
                              <div className="growth-chart-ring r2"></div>
                              <div className="matrix-icon-center">
                                <TrendingUp size={80} style={{ color: service.accentColor }} />
                              </div>
                            </div>
                          )}

                          {/* 05: BPO Services */}
                          {service.id === 'bpo' && (
                            <div className="art-bpo-network">
                              <div className="network-node n1"></div>
                              <div className="network-node n2"></div>
                              <div className="network-node n3"></div>
                              <div className="network-line l1"></div>
                              <div className="network-line l2"></div>
                              <div className="matrix-icon-center">
                                <Headphones size={80} style={{ color: service.accentColor }} />
                              </div>
                            </div>
                          )}

                          {/* 06: Video Editing */}
                          {service.id === 'video' && (
                            <div className="art-bpo-network">
                              <div className="network-node n1"></div>
                              <div className="network-node n2"></div>
                              <div className="matrix-icon-center">
                                <Film size={80} style={{ color: service.accentColor }} />
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="art-caption-overlay">
                          <span className="art-num-tag">{service.number}</span>
                          <span className="art-title-tag">{service.shortTitle}</span>
                        </div>
                      </div>
                    );
                  })}

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 5: INTERACTIVE 3D PARTNER SECTION
         ========================================================= */}
      <section className="services-partner-3d-section">
        <div className="services-partner-container">
          <div className="partner-section-header">
            <span className="about-section-label">INTEGRATED EXCELLENCE</span>
            <h2 className="partner-section-title">
              One Technology Partner. <br />
              <span className="gradient-cyan-text">Multiple Capabilities.</span>
            </h2>
          </div>

          <div className="partner-orbital-wrapper">
            {/* Central 3D Glass Sphere */}
            <div className="partner-center-sphere-stage">
              <div className="center-glass-orb">
                <div className="inner-network-nodes">
                  <span className="node-dot p1"></span>
                  <span className="node-dot p2"></span>
                  <span className="node-dot p3"></span>
                </div>
              </div>
            </div>

            {/* Orbital Service Pills */}
            <div className="partner-pillars-grid">
              {partnerPillars.map((pillar, pIdx) => {
                const isHovered = hoverPartnerIndex === pIdx;

                return (
                  <div 
                    key={pillar.label}
                    className={`partner-pillar-chip ${isHovered ? 'is-hovered' : ''}`}
                    onMouseEnter={() => setHoverPartnerIndex(pIdx)}
                    onMouseLeave={() => setHoverPartnerIndex(null)}
                    onClick={() => {
                      setActiveServiceIndex(pIdx);
                      handleScrollToCore();
                    }}
                  >
                    <span className="pillar-chip-label">{pillar.label}</span>
                    <span className="pillar-chip-full">{pillar.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          SECTION 6: FINAL CTA
         ========================================================= */}
      <section className="services-final-cta">
        <div className="final-cta-container">
          <div className="final-cta-card">
            <div className="final-cta-badge">
              <Globe size={16} />
              <span>LET'S COLLABORATE</span>
            </div>

            <h2 className="final-cta-title">
              Have a Challenge? Let's Build the Solution.
            </h2>

            <p className="final-cta-desc">
              Tell us what you're trying to achieve. We'll help turn the requirement into a practical digital solution.
            </p>

            <div className="final-cta-actions">
              <button 
                className="btn-cta-primary"
                onClick={handleScrollToCore}
              >
                <span>Explore Solutions</span>
                <ArrowRight size={18} />
              </button>
              
              <button 
                className="btn-cta-secondary"
                onClick={() => onOpenContact && onOpenContact('General Services Enquiry')}
              >
                <span>Start a Conversation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
