import React, { useEffect, useRef, useState } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  CheckCircle2, 
  Globe, 
  Target, 
  Eye, 
  Zap
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AboutPage.css';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage({ onNavigateHome, onOpenContact }) {
  const [activeValue, setActiveValue] = useState(0);
  const [activeCapability, setActiveCapability] = useState(0);
  const heroRef = useRef(null);
  const introRef = useRef(null);

  const capabilities = [
    { num: '01', title: 'Custom Software Development', category: 'Engineering' },
    { num: '02', title: 'Web Development', category: 'Digital Products' },
    { num: '03', title: 'Android & iOS Applications', category: 'Mobile Apps' },
    { num: '04', title: 'Design & Creative Solutions', category: 'UI/UX & Brand' },
    { num: '05', title: 'Digital Marketing', category: 'Growth Strategy' },
    { num: '06', title: 'IT Solutions & Consultancy', category: 'Enterprise IT' },
    { num: '07', title: 'BPO & Business Operations', category: 'Operations' },
    { num: '08', title: 'Customer & Technical Support', category: 'Support SLA' }
  ];

  const valuesData = [
    { num: '01', title: 'Innovation', desc: 'New ideas. Better solutions.' },
    { num: '02', title: 'Client First', desc: 'Solutions built around real business needs.' },
    { num: '03', title: 'Quality', desc: 'Reliable and thoughtful execution.' },
    { num: '04', title: 'Integrity', desc: 'Transparent communication and trusted relationships.' },
    { num: '05', title: 'Collaboration', desc: 'Working together to create meaningful outcomes.' },
    { num: '06', title: 'Continuous Growth', desc: 'Constantly improving our skills and solutions.' }
  ];

  const whyUsPoints = [
    { title: 'End-to-End Solutions', desc: 'Technology, design, marketing and business services under one roof.' },
    { title: 'Customized Approach', desc: 'Solutions shaped around individual business requirements.' },
    { title: 'Technology + Creativity', desc: 'Technical expertise combined with creative capabilities.' },
    { title: 'Business-Focused Technology', desc: 'Technology designed to solve real business problems.' },
    { title: 'Domestic & International Support', desc: 'Business support for domestic and international operations.' },
    { title: 'Scalable Solutions', desc: 'Solutions adaptable to different business requirements.' }
  ];

  const journeyTimeline = [
    {
      badge: '2019',
      title: 'Founded',
      desc: 'Pravishree was established in Visakhapatnam with a focus on digital and technology solutions.'
    },
    {
      badge: 'Growth',
      title: 'Creative Expansion',
      desc: 'Capabilities expanded across graphics, multimedia, animation, advertising, web design, applications and digital marketing.'
    },
    {
      badge: 'Technology',
      title: 'Technology Expansion',
      desc: 'The company expanded its positioning across software, web, mobile applications, design, digital marketing and IT solutions.'
    },
    {
      badge: 'Today',
      title: 'Digital Solutions Partner',
      desc: 'Pravishree provides technology, creative, digital and BPO capabilities for domestic and international clients.'
    }
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.querySelectorAll('.gsap-hero-anim'),
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: 'power3.out' }
        );
      }

      if (introRef.current) {
        gsap.fromTo(
          introRef.current.querySelectorAll('.gsap-intro-anim'),
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: introRef.current,
              start: 'top 75%'
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-page-root">
      
      {/* =========================================================
          SECTION 1: ABOUT HERO
         ========================================================= */}
      <section className="about-hero-section" ref={heroRef}>
        <div className="about-hero-glass-bg"></div>
        <div className="about-hero-container">
          
          <nav className="about-breadcrumb gsap-hero-anim" aria-label="Breadcrumb">
            <button className="breadcrumb-link" onClick={onNavigateHome}>Home</button>
            <ChevronRight size={14} className="breadcrumb-separator" />
            <span className="breadcrumb-current">About Us</span>
          </nav>

          <div className="about-hero-grid">
            <div className="about-hero-content">
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
                    const el = document.getElementById('mission') || document.getElementById('about-mission');
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
                    const el = document.getElementById('vision') || document.getElementById('about-vision');
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

            {/* Right 3D Visual Orb Stage */}
            <div className="about-hero-stage-wrap gsap-hero-anim">
              <div className="about-glass-orb-stage">
                <div className="about-orb-core">
                  <div className="orb-ring ring-a"></div>
                  <div className="orb-ring ring-b"></div>
                  <div className="orb-ring ring-c"></div>
                  <div className="orb-glow-light"></div>
                </div>

                <div className="floating-meta-card top-right">
                  <Zap size={14} className="icon-cyan" />
                  <span>Technology. Creativity. Business.</span>
                </div>
                <div className="floating-meta-card bottom-left">
                  <Globe size={14} className="icon-turquoise" />
                  <span>Global &amp; Domestic Desks</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 2: ABOUT INTRODUCTION
         ========================================================= */}
      <section className="about-intro-section" ref={introRef}>
        <div className="about-intro-container">
          <div className="about-intro-box">
            <span className="about-section-label gsap-intro-anim">ABOUT PRAVISHREE</span>
            <h2 className="about-intro-headline gsap-intro-anim">
              A Tech Solution Firm Engineered for Impact
            </h2>
            <p className="about-intro-text gsap-intro-anim">
              Pravishree Design Co. is a high-growth technology solutions and digital innovation firm. We bridge the gap between creative visual artistry, resilient full-stack software engineering, and operational BPO execution.
            </p>
            <p className="about-intro-text gsap-intro-anim">
              Founded by industry veterans, our multidisciplinary team collaborates with startups, mid-market leaders, and global enterprises across North America, Europe, and Asia to engineer digital products that scale smoothly.
            </p>
          </div>
        </div>
      </section>


      {/* =========================================================
          SECTION 3: WHAT WE DO (END-TO-END DIGITAL SOLUTIONS)
         ========================================================= */}
      <section className="about-what-we-do-section">
        <div className="about-container">
          
          <div className="about-section-header">
            <span className="about-section-label">WHAT WE DO</span>
            <h2 className="about-section-title">End-to-End Digital Solutions</h2>
          </div>

          <div className="capabilities-editorial-grid">
            {capabilities.map((item, idx) => {
              const isActive = activeCapability === idx;

              return (
                <div 
                  key={item.num}
                  className={`capability-item-card ${isActive ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveCapability(idx)}
                >
                  <div className="cap-top-row">
                    <span className="cap-num">{item.num}</span>
                    <span className="cap-category">{item.category}</span>
                  </div>
                  <h3 className="cap-title">{item.title}</h3>
                  <div className="cap-active-line"></div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 4: MISSION & VISION
         ========================================================= */}
      <section className="about-mission-vision-section">
        <div className="about-container">
          <div className="mission-vision-grid">
            
            {/* OUR MISSION */}
            <div className="mv-card mission-card" id="mission">
              <div className="mv-badge">
                <Target size={16} />
                <span>OUR MISSION</span>
              </div>
              <h3 className="mv-title">Technology That Creates Opportunity</h3>
              <p className="mv-text">
                To empower businesses with innovative technology, creative digital solutions and reliable business services that simplify operations, enhance customer experiences and create opportunities for growth.
              </p>
              <div className="mv-art-glow cyan-glow"></div>
            </div>

            {/* OUR VISION */}
            <div className="mv-card vision-card" id="vision">
              <div className="mv-badge turquoise">
                <Eye size={16} />
                <span>OUR VISION</span>
              </div>
              <h3 className="mv-title">Building What Comes Next</h3>
              <p className="mv-text">
                To become a trusted technology and digital solutions partner, combining innovation, creativity and dependable service to help businesses build, transform and grow.
              </p>
              <div className="mv-art-glow turquoise-glow"></div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          SECTION 5: VALUES (WHAT DRIVES US)
         ========================================================= */}
      <section className="about-values-section">
        <div className="about-container">
          
          <div className="about-section-header">
            <span className="about-section-label">OUR CORE VALUES</span>
            <h2 className="about-section-title">What Drives Us</h2>
          </div>

          <div className="values-interactive-grid">
            {valuesData.map((val, idx) => {
              const isActive = activeValue === idx;

              return (
                <div 
                  key={val.num}
                  className={`value-card ${isActive ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveValue(idx)}
                >
                  <span className="val-num">{val.num}</span>
                  <h3 className="val-title">{val.title}</h3>
                  <p className="val-desc">{val.desc}</p>
                  <div className="val-accent-strip"></div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 6: WHY PRAVISHREE
         ========================================================= */}
      <section className="about-why-section">
        <div className="about-container">
          
          <div className="about-section-header text-center">
            <span className="about-section-label">KEY ADVANTAGES</span>
            <h2 className="about-section-title">Why Pravishree?</h2>
          </div>

          <div className="why-us-grid">
            {whyUsPoints.map((point, idx) => (
              <div key={idx} className="why-us-card">
                <div className="why-check-icon">
                  <CheckCircle2 size={18} />
                </div>
                <div className="why-card-content">
                  <h3 className="why-card-title">{point.title}</h3>
                  <p className="why-card-desc">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 7: COMPANY JOURNEY
         ========================================================= */}
      <section className="about-timeline-section">
        <div className="about-container">
          
          <div className="about-section-header text-center">
            <span className="about-section-label">OUR EVOLUTION</span>
            <h2 className="about-section-title">Our Journey</h2>
          </div>

          <div className="timeline-horizontal-track">
            {journeyTimeline.map((item, idx) => (
              <div key={idx} className="timeline-step-card">
                <div className="timeline-badge-pill">{item.badge}</div>
                <h3 className="timeline-step-title">{item.title}</h3>
                <p className="timeline-step-desc">{item.desc}</p>
                <div className="timeline-dot-node"></div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 8: FINAL CTA
         ========================================================= */}
      <section className="about-final-cta-section">
        <div className="about-container">
          <div className="about-final-cta-card">
            <div className="cta-badge-pill">
              <Sparkles size={14} />
              <span>LET'S TALK</span>
            </div>

            <h2 className="about-final-cta-title">
              Let's Build What's Next.
            </h2>

            <p className="about-final-cta-subtitle">
              Have an idea, business challenge or digital opportunity? Let's turn it into something meaningful.
            </p>

            <button 
              className="btn-about-cta-primary"
              onClick={() => onOpenContact && onOpenContact('General Enquiry')}
            >
              <span>Start a Conversation</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
