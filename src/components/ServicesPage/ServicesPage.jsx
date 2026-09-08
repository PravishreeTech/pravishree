import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, 
  PenTool, 
  Smartphone, 
  Headphones, 
  Cloud, 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  CheckCircle2, 
  Globe, 
  TrendingUp,
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
      description: 'We develop customized software solutions designed around specific business requirements, workflows and long-term growth.',
      tags: ['Custom Software', 'Business Applications', 'Application Development', 'API Integration', 'Database Solutions', 'Software Support'],
      accentColor: '#00D9FF',
      gradient: 'linear-gradient(135deg, #00D9FF 0%, #0077B6 100%)',
      visualStyle: 'art-software'
    },
    {
      id: 'web',
      number: '02',
      title: 'WEB DEVELOPMENT',
      shortTitle: 'Web Development',
      icon: Globe,
      subtitle: 'Digital experiences built for your business.',
      description: 'We create modern websites and web applications combining functionality, performance, usability and visual design.',
      tags: ['Corporate Websites', 'Business Websites', 'Web Applications', 'Responsive Development', 'UI Implementation', 'Website Maintenance'],
      accentColor: '#19E6D0',
      gradient: 'linear-gradient(135deg, #19E6D0 0%, #0077B6 100%)',
      visualStyle: 'art-web'
    },
    {
      id: 'mobile',
      number: '03',
      title: 'MOBILE APP DEVELOPMENT',
      shortTitle: 'Mobile Apps',
      icon: Smartphone,
      subtitle: 'Turn ideas into mobile experiences.',
      description: 'We develop Android and iOS applications that help businesses connect with customers and improve digital experiences.',
      tags: ['Android Applications', 'iOS Applications', 'Cross-Platform Apps', 'Mobile UI/UX', 'Application Integration', 'Maintenance & Support'],
      accentColor: '#1677FF',
      gradient: 'linear-gradient(135deg, #1677FF 0%, #00D9FF 100%)',
      visualStyle: 'art-mobile'
    },
    {
      id: 'design',
      number: '04',
      title: 'DESIGN & CREATIVE SOLUTIONS',
      shortTitle: 'Design & Creative',
      icon: PenTool,
      subtitle: 'Make your brand impossible to overlook.',
      description: 'Our creative capabilities combine visual design, multimedia, animation and digital communication to help businesses build stronger visual identities.',
      tags: ['Graphic Design', 'Brand Identity', 'Digital Creatives', 'Multimedia', '2D Animation', '3D Animation', 'Advertising Design'],
      accentColor: '#00D9FF',
      gradient: 'linear-gradient(135deg, #00D9FF 0%, #1677FF 100%)',
      visualStyle: 'art-design'
    },
    {
      id: 'marketing',
      number: '05',
      title: 'DIGITAL MARKETING',
      shortTitle: 'Digital Marketing',
      icon: TrendingUp,
      subtitle: 'Turn digital presence into business opportunity.',
      description: 'We help businesses strengthen their online presence through creative and data-driven digital marketing solutions.',
      tags: ['Digital Marketing', 'Social Media', 'Online Campaigns', 'Content Strategy', 'Brand Promotion', 'Growth Strategies'],
      accentColor: '#19E6D0',
      gradient: 'linear-gradient(135deg, #19E6D0 0%, #061329 100%)',
      visualStyle: 'art-marketing'
    },
    {
      id: 'it',
      number: '06',
      title: 'IT CONSULTING & SOLUTIONS',
      shortTitle: 'IT Consulting',
      icon: Cloud,
      subtitle: 'Technology decisions that move your business forward.',
      description: 'We help organizations identify technology opportunities, develop practical solutions and use digital tools to improve operations.',
      tags: ['IT Consulting', 'Technology Strategy', 'Digital Solutions', 'Business Applications', 'System Solutions', 'Technical Support'],
      accentColor: '#00D9FF',
      gradient: 'linear-gradient(135deg, #00D9FF 0%, #0B1F3A 100%)',
      visualStyle: 'art-cloud'
    },
    {
      id: 'bpo',
      number: '07',
      title: 'BPO & BUSINESS OPERATIONS',
      shortTitle: 'BPO Operations',
      icon: Headphones,
      subtitle: 'Reliable support behind your business.',
      description: 'Our BPO services help organizations streamline operations and improve customer experiences through domestic and international support capabilities.',
      tags: ['Domestic Support', 'International Support', 'Customer Support', 'Data Entry', 'Virtual Assistance', 'Technical Support'],
      tools: ['Zendesk', 'Salesforce', 'Slack', 'Zoom'],
      accentColor: '#1677FF',
      gradient: 'linear-gradient(135deg, #1677FF 0%, #19E6D0 100%)',
      visualStyle: 'art-bpo'
    }
  ];

  const partnerPillars = [
    { label: 'SOFTWARE', title: 'Software Development' },
    { label: 'WEB', title: 'Web Development' },
    { label: 'MOBILE', title: 'Mobile App Development' },
    { label: 'CREATIVE', title: 'Design & Creative Solutions' },
    { label: 'MARKETING', title: 'Digital Marketing' },
    { label: 'IT', title: 'IT Consulting & Solutions' },
    { label: 'BPO', title: 'BPO & Business Operations' }
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
                <span className="gradient-cyan-text">Business.</span>
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
                <div className="orb-core-sphere">
                  <div className="orb-ring ring-1"></div>
                  <div className="orb-ring ring-2"></div>
                  <div className="orb-ring ring-3"></div>
                  <div className="orb-inner-light"></div>
                </div>

                <div className="floating-capability-card pos-top-right">
                  <Code2 size={16} className="cap-icon cyan" />
                  <span>Full-Stack Software</span>
                </div>
                <div className="floating-capability-card pos-bottom-left">
                  <Cloud size={16} className="cap-icon blue" />
                  <span>IT Infrastructure</span>
                </div>
                <div className="floating-capability-card pos-bottom-right">
                  <Headphones size={16} className="cap-icon turquoise" />
                  <span>BPO Operations</span>
                </div>
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
              <span className="marquee-word-outline">WEB</span>
              <span className="marquee-star">✦</span>
              <span className="marquee-word-navy">MOBILE</span>
              <span className="marquee-star">✦</span>
              <span className="marquee-word-outline">CREATIVE</span>
              <span className="marquee-star">✦</span>
              <span className="marquee-word-navy">MARKETING</span>
              <span className="marquee-star">✦</span>
              <span className="marquee-word-outline">IT</span>
              <span className="marquee-star">✦</span>
              <span className="marquee-word-navy">BPO</span>
              <span className="marquee-star">✦</span>
            </div>

            <div className="marquee-auto-group">
              <span className="marquee-word-navy">SOFTWARE</span>
              <span className="marquee-star">✦</span>
              <span className="marquee-word-outline">WEB</span>
              <span className="marquee-star">✦</span>
              <span className="marquee-word-navy">MOBILE</span>
              <span className="marquee-star">✦</span>
              <span className="marquee-word-outline">CREATIVE</span>
              <span className="marquee-star">✦</span>
              <span className="marquee-word-navy">MARKETING</span>
              <span className="marquee-star">✦</span>
              <span className="marquee-word-outline">IT</span>
              <span className="marquee-star">✦</span>
              <span className="marquee-word-navy">BPO</span>
              <span className="marquee-star">✦</span>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          SECTION 3: SERVICE INTRO STATEMENT
         ========================================================= */}
      <section className="services-editorial-section">
        <div className="editorial-container">
          <div className="editorial-content-box">
            <span className="editorial-label">CAPABILITIES OVERVIEW</span>
            <h2 className="editorial-headline">
              Solutions Built Around Your Business.
            </h2>
            <p className="editorial-paragraph">
              From software and websites to mobile applications, creative solutions, digital marketing, IT consulting and business operations, Pravishree brings multiple capabilities together under one technology partner.
            </p>
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

                          {/* 02: Web Development */}
                          {service.id === 'web' && (
                            <div className="art-web-structure">
                              <div className="web-grid-frame"></div>
                              <div className="web-glass-layer layer-a"></div>
                              <div className="web-glass-layer layer-b"></div>
                              <div className="matrix-icon-center">
                                <Globe size={80} style={{ color: service.accentColor }} />
                              </div>
                            </div>
                          )}

                          {/* 03: Mobile App Development */}
                          {service.id === 'mobile' && (
                            <div className="art-mobile-chassis">
                              <div className="device-frame"></div>
                              <div className="device-layer layer-1"></div>
                              <div className="device-layer layer-2"></div>
                              <div className="matrix-icon-center">
                                <Smartphone size={80} style={{ color: service.accentColor }} />
                              </div>
                            </div>
                          )}

                          {/* 04: Design & Creative Solutions */}
                          {service.id === 'design' && (
                            <div className="art-design-sculpture">
                              <div className="sculpture-ring ring-a"></div>
                              <div className="sculpture-ring ring-b"></div>
                              <div className="sculpture-prism"></div>
                              <div className="matrix-icon-center">
                                <PenTool size={80} style={{ color: service.accentColor }} />
                              </div>
                            </div>
                          )}

                          {/* 05: Digital Marketing */}
                          {service.id === 'marketing' && (
                            <div className="art-marketing-growth">
                              <div className="growth-chart-ring r1"></div>
                              <div className="growth-chart-ring r2"></div>
                              <div className="matrix-icon-center">
                                <TrendingUp size={80} style={{ color: service.accentColor }} />
                              </div>
                            </div>
                          )}

                          {/* 06: IT Consulting & Solutions */}
                          {service.id === 'it' && (
                            <div className="art-cloud-structure">
                              <div className="cloud-orbit orbit-1"></div>
                              <div className="cloud-orbit orbit-2"></div>
                              <div className="cloud-core-sphere"></div>
                              <div className="matrix-icon-center">
                                <Cloud size={80} style={{ color: service.accentColor }} />
                              </div>
                            </div>
                          )}

                          {/* 07: BPO & Business Operations */}
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
