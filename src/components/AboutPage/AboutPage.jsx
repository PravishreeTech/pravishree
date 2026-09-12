import React, { useEffect, useRef, useState } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  CheckCircle2, 
  Target, 
  Eye, 
  Zap,
  Layers,
  Code2,
  Smartphone,
  Palette,
  TrendingUp,
  Headphones,
  Cpu,
  Workflow
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AboutPage.css';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage({ onNavigateHome, onOpenContact }) {
  const [activeCapability, setActiveCapability] = useState(0);

  const heroRef = useRef(null);
  const introRef = useRef(null);
  const particleCanvasRef = useRef(null);
  const timelineTrackRef = useRef(null);
  const timelineLineRef = useRef(null);

  const primaryCapabilities = [
    { num: '01', title: 'Custom Software Development', category: 'Engineering', desc: 'Custom software engineered around real business requirements, workflows and scale.', icon: Code2 },
    { num: '02', title: 'Web Development', category: 'Digital Products', desc: 'High-performance web applications, portals, and digital platforms built with modern stack.', icon: Layers },
    { num: '03', title: 'Android & iOS Applications', category: 'Mobile Apps', desc: 'Native & cross-platform mobile apps focused on seamless user experience & performance.', icon: Smartphone }
  ];

  const secondaryCapabilities = [
    { num: '04', title: 'Design & Creative Solutions', category: 'UI/UX & Brand', desc: 'Design systems, branding, visual graphics, and high-impact video editing.', icon: Palette },
    { num: '05', title: 'Digital Marketing', category: 'Growth Strategy', desc: 'Data-driven SEO, performance marketing, brand campaigns and analytics.', icon: TrendingUp },
    { num: '06', title: 'IT Solutions & Consultancy', category: 'Enterprise IT', desc: 'Cloud infrastructure, architecture consulting, and enterprise IT modernization.', icon: Cpu },
    { num: '07', title: 'BPO & Business Operations', category: 'Operations', desc: 'Streamlined backend operations, workflow management, and operational execution.', icon: Workflow },
    { num: '08', title: 'Customer & Technical Support', category: 'Support SLA', desc: 'Dedicated 24/7 technical helpdesk, customer care, and multi-channel SLA support.', icon: Headphones }
  ];

  const whyUsLeft = [
    { num: '01', title: 'End-to-End Solutions', desc: 'Technology, design, marketing and business services under one roof.' },
    { num: '02', title: 'Customized Approach', desc: 'Solutions shaped around individual business requirements.' },
    { num: '03', title: 'Technology + Creativity', desc: 'Technical expertise combined with creative capabilities.' }
  ];

  const whyUsRight = [
    { num: '04', title: 'Business-Focused Technology', desc: 'Technology designed to solve real business problems.' },
    { num: '05', title: 'Domestic & International Support', desc: 'Business support for domestic and international operations.' },
    { num: '06', title: 'Scalable Solutions', desc: 'Solutions adaptable to different business requirements.' }
  ];

  const journeyTimeline = [
    {
      badge: '2019',
      year: '2019',
      title: 'Founded',
      desc: 'Pravishree was established in Visakhapatnam with a focus on Software Development and digital solutions.'
    },
    {
      badge: 'Growth',
      year: 'EXPANSION',
      title: 'Creative & Digital Expansion',
      desc: 'Capabilities expanded across Video Editing, Website Development, App Development, and Digital Marketing.'
    },
    {
      badge: 'Technology',
      year: 'INTEGRATION',
      title: 'Full Capabilities Expansion',
      desc: 'Integrated core capabilities across Software Development, Web, Apps, Digital Marketing, and BPO Services.'
    },
    {
      badge: 'Today',
      year: 'TODAY',
      title: 'Digital Solutions Partner',
      desc: 'Pravishree delivers full-lifecycle digital transformation and business operations for domestic & global clients.'
    }
  ];

  // Canvas Floating Particles Background (Hero)
  useEffect(() => {
    const canvas = particleCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight || 700);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement.clientHeight || 700;
    };
    window.addEventListener('resize', handleResize);

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const particleCount = isReducedMotion ? 0 : (width < 768 ? 16 : 35);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        isSquare: Math.random() > 0.7,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.3 - 0.2,
        opacity: Math.random() * 0.22 + 0.06
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(0, 217, 255, ${p.opacity})`;
        ctx.beginPath();

        if (p.isSquare) {
          ctx.rect(p.x, p.y, p.radius * 2, p.radius * 2);
        } else {
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        }
        ctx.fill();
      });

      if (!isReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // GSAP ScrollTrigger Sequence Choreography
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      // 1. Hero Entrance Sequence
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.querySelectorAll('.gsap-hero-anim'),
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: 'power3.out' }
        );
      }

      // 2. Intro Section Stagger
      if (introRef.current) {
        gsap.fromTo(
          introRef.current.querySelectorAll('.gsap-intro-anim'),
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: introRef.current,
              start: 'top 78%'
            }
          }
        );
      }

      // 3. What We Do - Primary & Secondary Cards Stagger
      gsap.fromTo(
        '.cap-card-primary',
        { y: 40, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.capabilities-primary-grid',
            start: 'top 82%'
          }
        }
      );

      gsap.fromTo(
        '.cap-row-secondary',
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.capabilities-secondary-list',
            start: 'top 84%'
          }
        }
      );

      // 4. Mission & Vision Split Editorial
      gsap.fromTo(
        '.mission-card-editorial',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.mission-vision-editorial-split',
            start: 'top 78%'
          }
        }
      );

      gsap.fromTo(
        '.vision-card-editorial',
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.mission-vision-editorial-split',
            start: 'top 78%'
          }
        }
      );

      // 5. Why Pravishree Asymmetric Grid
      gsap.fromTo(
        '.why-editorial-card',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.why-editorial-container',
            start: 'top 80%'
          }
        }
      );

      // 6. Journey Timeline Line Draw & Step Reveal
      if (timelineLineRef.current && timelineTrackRef.current) {
        gsap.fromTo(
          timelineLineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: timelineTrackRef.current,
              start: 'top 75%'
            }
          }
        );
      }

      gsap.fromTo(
        '.timeline-editorial-step',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.timeline-editorial-track',
            start: 'top 78%'
          }
        }
      );

      // 7. Editorial Closing Statement Reveal
      gsap.fromTo(
        '.editorial-closing-text',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-closing-statement-section',
            start: 'top 82%'
          }
        }
      );

    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-page-root">
      
      {/* =========================================================
          SECTION 1: ABOUT HERO (CLEAN TYPOGRAPHY FOCUS, GLOBE REMOVED)
         ========================================================= */}
      <section className="about-hero-section" ref={heroRef}>
        <canvas ref={particleCanvasRef} className="about-hero-particles-canvas" aria-hidden="true" />
        <div className="about-hero-glass-bg"></div>

        <div className="about-hero-container">
          
          <nav className="about-breadcrumb gsap-hero-anim" aria-label="Breadcrumb">
            <button className="breadcrumb-link" onClick={onNavigateHome}>Home</button>
            <ChevronRight size={14} className="breadcrumb-separator" />
            <span className="breadcrumb-current">About Us</span>
          </nav>

          <div className="about-hero-clean-wrap">
            <div className="about-badge-pill gsap-hero-anim">
              <Sparkles size={14} className="badge-sparkle-icon" />
              <span>WHO WE ARE</span>
            </div>

            <h1 className="about-hero-title gsap-hero-anim">
              More Than Technology. <br />
              <span className="gradient-cyan-text">We Build Possibilities.</span>
            </h1>

            <p className="about-hero-subtitle gsap-hero-anim">
              Pravishree Design Co. is a technology and digital solutions company helping businesses turn ideas into practical digital experiences and solutions.
            </p>

            {/* MISSION & VISION INTERACTIVE BUTTONS */}
            <div className="about-hero-buttons gsap-hero-anim">
              <button 
                className="btn-hero-mv btn-mission"
                onClick={() => {
                  const el = document.getElementById('mission');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                title="View Our Mission"
              >
                <Target size={16} className="mv-btn-icon cyan" />
                <span>MISSION</span>
                <ArrowRight size={14} className="mv-btn-arrow" />
              </button>

              <button 
                className="btn-hero-mv btn-vision"
                onClick={() => {
                  const el = document.getElementById('vision');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                title="View Our Vision"
              >
                <Eye size={16} className="mv-btn-icon turquoise" />
                <span>VISION</span>
                <ArrowRight size={14} className="mv-btn-arrow" />
              </button>
            </div>

            <div className="about-hero-meta gsap-hero-anim">
              <div className="meta-chip">
                <span className="meta-label">ESTABLISHED</span>
                <span className="meta-val">2019</span>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-chip">
                <span className="meta-label">LOCATION</span>
                <span className="meta-val">VISAKHAPATNAM, INDIA</span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 2: ABOUT INTRODUCTION (EDITORIAL LAYOUT)
         ========================================================= */}
      <section className="about-editorial-intro-section" ref={introRef}>
        <div className="ambient-editorial-watermark" aria-hidden="true">
          <span>PRAVISHREE</span>
        </div>

        <div className="about-editorial-container">
          <div className="intro-editorial-split">
            <div className="intro-editorial-header">
              <span className="editorial-eyebrow gsap-intro-anim">
                <Sparkles size={13} className="eyebrow-icon" /> ABOUT PRAVISHREE
              </span>
              <h2 className="editorial-main-headline gsap-intro-anim">
                Engineered for Impact. <br />
                Driven by Purpose.
              </h2>
            </div>

            <div className="intro-editorial-body">
              <p className="intro-lead-text gsap-intro-anim">
                Pravishree Design Co. is a high-growth technology solutions and digital innovation firm bridging creative visual artistry, resilient software engineering, and operational BPO execution.
              </p>
              <p className="intro-secondary-text gsap-intro-anim">
                Founded in Visakhapatnam, our multidisciplinary team collaborates with startups, mid-market leaders, and global enterprises across North America, Europe, and Asia to engineer digital products that scale smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          SECTION 3: WHAT WE DO (EDITORIAL SERVICE COMPOSITION)
         ========================================================= */}
      <section className="about-editorial-services-section" id="services">
        <div className="about-editorial-container">
          
          <div className="services-editorial-hero-grid">
            <div className="services-hero-text">
              <span className="editorial-eyebrow">WHAT WE DO</span>
              <h2 className="services-editorial-title">
                End-to-End <br />
                Digital Solutions.
              </h2>
              <p className="services-editorial-subtitle">
                We combine technical engineering, creative artistry, and business execution into a single, cohesive service delivery model.
              </p>
            </div>

            {/* ABSTRACT CSS TECHNOLOGY VISUAL PANEL */}
            <div className="abstract-tech-visual-panel">
              <div className="panel-gradient-mesh"></div>
              <div className="panel-digital-grid"></div>
              <div className="panel-glowing-nodes">
                <span className="p-node node-a"></span>
                <span className="p-node node-b"></span>
                <span className="p-node node-c"></span>
              </div>
              <div className="panel-badge-glass">
                <Zap size={14} className="panel-icon-cyan" />
                <span>Technology + Creativity + Business</span>
              </div>
            </div>
          </div>

          {/* PRIMARY ENGINEERING SERVICES (LARGE VISUAL TREATMENT) */}
          <div className="services-primary-block">
            <div className="section-subheading-bar">
              <span className="subheading-tag">PRIMARY ENGINEERING &amp; DIGITAL PRODUCTS</span>
              <div className="subheading-line"></div>
            </div>

            <div className="capabilities-primary-grid">
              {primaryCapabilities.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.num} className="cap-card-primary glass-card-hover">
                    <div className="cap-primary-top">
                      <span className="cap-num-large">{item.num}</span>
                      <span className="cap-cat-pill">{item.category}</span>
                    </div>
                    <div className="cap-icon-box">
                      <IconComponent size={22} className="cap-icon" />
                    </div>
                    <h3 className="cap-primary-title">{item.title}</h3>
                    <p className="cap-primary-desc">{item.desc}</p>
                    <div className="cap-accent-bar"></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* DIGITAL & BUSINESS SOLUTIONS (EDITORIAL LIST ROWS) */}
          <div className="services-secondary-block">
            <div className="section-subheading-bar">
              <span className="subheading-tag">DIGITAL &amp; BUSINESS SOLUTIONS</span>
              <div className="subheading-line"></div>
            </div>

            <div className="capabilities-secondary-list">
              {secondaryCapabilities.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.num} className="cap-row-secondary">
                    <span className="cap-sec-num">{item.num}</span>
                    <div className="cap-sec-icon-wrap">
                      <IconComponent size={18} />
                    </div>
                    <div className="cap-sec-content">
                      <h4 className="cap-sec-title">{item.title}</h4>
                      <p className="cap-sec-desc">{item.desc}</p>
                    </div>
                    <span className="cap-sec-tag">{item.category}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 4: MISSION & VISION (EDITORIAL SPLIT WITH OVERSIZED NUMBERS)
         ========================================================= */}
      <section className="about-editorial-mv-section">
        <div className="about-editorial-container">
          
          <div className="mission-vision-editorial-split">
            
            {/* 01 OUR MISSION */}
            <div className="mv-card-editorial mission-card-editorial" id="mission">
              <div className="mv-number-bg" aria-hidden="true">01</div>
              <div className="mv-editorial-content">
                <div className="mv-eyebrow-pill cyan-pill">
                  <Target size={15} />
                  <span>OUR MISSION</span>
                </div>
                <h3 className="mv-editorial-title">
                  Technology That Creates Opportunity
                </h3>
                <p className="mv-editorial-body">
                  To empower businesses with innovative technology, creative digital solutions and reliable business services that simplify operations, enhance customer experiences and create opportunities for growth.
                </p>
              </div>
              <div className="mv-corner-glow cyan"></div>
            </div>

            {/* 02 OUR VISION */}
            <div className="mv-card-editorial vision-card-editorial" id="vision">
              <div className="mv-number-bg" aria-hidden="true">02</div>
              <div className="mv-editorial-content">
                <div className="mv-eyebrow-pill turquoise-pill">
                  <Eye size={15} />
                  <span>OUR VISION</span>
                </div>
                <h3 className="mv-editorial-title">
                  Building What Comes Next
                </h3>
                <p className="mv-editorial-body">
                  To become a trusted technology and digital solutions partner, combining innovation, creativity and dependable service to help businesses build, transform and grow.
                </p>
              </div>
              <div className="mv-corner-glow turquoise"></div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 5: WHY PRAVISHREE? (ASYMMETRIC GRID WITH CENTRAL SPHERE VISUAL)
         ========================================================= */}
      <section className="about-editorial-why-section">
        <div className="about-editorial-container">
          
          <div className="why-editorial-header text-center">
            <span className="editorial-eyebrow">KEY ADVANTAGES</span>
            <h2 className="editorial-section-title">Why Pravishree?</h2>
            <p className="why-editorial-statement">
              "Technology should solve business problems — not create new ones."
            </p>
          </div>

          <div className="why-editorial-container">
            
            {/* Left 3 Cards */}
            <div className="why-column why-column-left">
              {whyUsLeft.map((point) => (
                <div key={point.num} className="why-editorial-card glass-card-hover">
                  <div className="why-card-top">
                    <span className="why-num-tag">{point.num}</span>
                    <div className="why-check-dot">
                      <CheckCircle2 size={16} />
                    </div>
                  </div>
                  <h3 className="why-card-title">{point.title}</h3>
                  <p className="why-card-desc">{point.desc}</p>
                </div>
              ))}
            </div>

            {/* Central Abstract Technology Sphere Visual */}
            <div className="why-central-visual-wrap">
              <div className="why-glass-sphere">
                <div className="sphere-inner-core"></div>
                <div className="sphere-ring-a"></div>
                <div className="sphere-ring-b"></div>
                <svg className="sphere-svg-grid" viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="100" r="70" stroke="rgba(0,217,255,0.3)" strokeDasharray="3 5" />
                  <line x1="100" y1="30" x2="100" y2="170" stroke="rgba(0,217,255,0.25)" strokeDasharray="4 4" />
                  <line x1="30" y1="100" x2="170" y2="100" stroke="rgba(0,217,255,0.25)" strokeDasharray="4 4" />
                  <circle cx="100" cy="30" r="3" fill="#00D9FF" />
                  <circle cx="170" cy="100" r="3" fill="#19E6D0" />
                  <circle cx="100" cy="170" r="3" fill="#0077B6" />
                </svg>
                <div className="sphere-floating-label">
                  <Sparkles size={12} className="label-icon-cyan" />
                  <span>Scalable Architecture</span>
                </div>
              </div>
            </div>

            {/* Right 3 Cards */}
            <div className="why-column why-column-right">
              {whyUsRight.map((point) => (
                <div key={point.num} className="why-editorial-card glass-card-hover">
                  <div className="why-card-top">
                    <span className="why-num-tag">{point.num}</span>
                    <div className="why-check-dot">
                      <CheckCircle2 size={16} />
                    </div>
                  </div>
                  <h3 className="why-card-title">{point.title}</h3>
                  <p className="why-card-desc">{point.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 6: OUR JOURNEY (EDITORIAL HORIZONTAL TIMELINE)
         ========================================================= */}
      <section className="about-editorial-timeline-section">
        <div className="about-editorial-container">
          
          <div className="editorial-section-header">
            <span className="editorial-eyebrow">OUR EVOLUTION</span>
            <h2 className="editorial-section-title">Our Journey</h2>
            <p className="editorial-section-subtitle">
              From founding to a multi-disciplinary technology solutions partner.
            </p>
          </div>

          <div className="timeline-editorial-track-wrap" ref={timelineTrackRef}>
            <div className="timeline-connecting-bar">
              <div className="timeline-line-fill" ref={timelineLineRef}></div>
            </div>

            <div className="timeline-editorial-track">
              {journeyTimeline.map((item, idx) => (
                <div key={idx} className="timeline-editorial-step">
                  <div className="timeline-node-circle">
                    <span className="node-inner-dot"></span>
                  </div>
                  <div className="timeline-year-tag">{item.badge}</div>
                  <div className="timeline-step-card-glass">
                    <h3 className="timeline-step-title">{item.title}</h3>
                    <p className="timeline-step-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 7: LARGE EDITORIAL CLOSING STATEMENT
         ========================================================= */}
      <section className="about-closing-statement-section">
        <div className="ambient-editorial-watermark watermark-center" aria-hidden="true">
          <span>POSSIBILITIES</span>
        </div>

        <div className="about-editorial-container text-center">
          <div className="editorial-closing-text">
            <h2 className="closing-statement-line1">Technology creates possibilities.</h2>
            <h2 className="closing-statement-line2 gradient-cyan-text">We turn them into impact.</h2>
          </div>
        </div>
      </section>

    </div>
  );
}
