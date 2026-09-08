import React, { useState, useEffect, useRef } from 'react';
import { 
  MapPin, 
  ChevronRight, 
  Sparkles, 
  Quote, 
  ArrowRight,
  UserCheck,
  Building2,
  Users,
  Layers,
  ExternalLink
} from 'lucide-react';
import gsap from 'gsap';
import './TeamPage.css';

// Custom SVG Brand & Contact Icons
const LinkedInIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const MailIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default function TeamPage({ onNavigateHome, onOpenContact, initialMemberId }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeCardHover, setActiveCardHover] = useState(false);
  const [activeShowcaseIndex, setActiveShowcaseIndex] = useState(0);
  const [isChangingMember, setIsChangingMember] = useState(false);
  
  const heroRef = useRef(null);
  const portraitCardRef = useRef(null);

  // Extensible Team Data Array (Raw Placeholders)
  const teamMembers = [
    {
      id: 'ratnakar-chilaka',
      number: '01',
      name: 'Ratnakar Chilaka',
      position: 'Chief Executive Officer',
      shortRole: 'CEO',
      company: 'Pravishree Design Co.',
      location: 'Visakhapatnam, Andhra Pradesh',
      shortIntro: "At the heart of Pravishree's journey is a commitment to building practical technology and digital solutions that create meaningful value for businesses.",
      leadershipDesc: "Leading Pravishree with a focus on innovation, technology, client success and sustainable growth.",
      quote: "Technology is most valuable when it solves a real problem. At Pravishree, our goal is to combine innovation, creativity, and business understanding to build solutions that help our clients move forward with confidence.",
      image: null, // Placeholder ready for real photograph
      accentColor: '#00D9FF',
      socials: {
        linkedin: 'https://www.linkedin.com',
        instagram: 'https://www.instagram.com',
        twitter: 'https://x.com',
        facebook: 'https://www.facebook.com',
        email: 'mailto:contact@pravishree.com'
      }
    },
    {
      id: 'priya-sharma',
      number: '02',
      name: 'Priya Sharma',
      position: 'Technology Lead',
      shortRole: 'Tech Lead',
      company: 'Pravishree Design Co.',
      location: 'Visakhapatnam, India',
      shortIntro: 'Architecting scalable cloud solutions, robust backend systems, and high-performance software engineering.',
      image: null,
      accentColor: '#19E6D0',
      socials: {
        linkedin: 'https://www.linkedin.com',
        twitter: 'https://x.com',
        email: 'mailto:contact@pravishree.com'
      }
    },
    {
      id: 'arjun-kumar',
      number: '03',
      name: 'Arjun Kumar',
      position: 'Software Development Lead',
      shortRole: 'Software Lead',
      company: 'Pravishree Design Co.',
      location: 'Visakhapatnam, India',
      shortIntro: 'Specializing in enterprise application development, database architecture, and cross-platform integrations.',
      image: null,
      accentColor: '#1677FF',
      socials: {
        linkedin: 'https://www.linkedin.com',
        instagram: 'https://www.instagram.com',
        email: 'mailto:contact@pravishree.com'
      }
    },
    {
      id: 'sneha-reddy',
      number: '04',
      name: 'Sneha Reddy',
      position: 'Creative & Design Lead',
      shortRole: 'Design Lead',
      company: 'Pravishree Design Co.',
      location: 'Visakhapatnam, India',
      shortIntro: 'Crafting brand identities, digital design systems, 3D motion graphics, and modern digital interfaces.',
      image: null,
      accentColor: '#00D9FF',
      socials: {
        linkedin: 'https://www.linkedin.com',
        instagram: 'https://www.instagram.com',
        twitter: 'https://x.com',
        email: 'mailto:contact@pravishree.com'
      }
    },
    {
      id: 'rahul-varma',
      number: '05',
      name: 'Rahul Varma',
      position: 'Digital Solutions Specialist',
      shortRole: 'Digital Solutions',
      company: 'Pravishree Design Co.',
      location: 'Visakhapatnam, India',
      shortIntro: 'Driving data-driven digital campaigns, growth strategies, and enterprise transformation solutions.',
      image: null,
      accentColor: '#19E6D0',
      socials: {
        linkedin: 'https://www.linkedin.com',
        facebook: 'https://www.facebook.com',
        email: 'mailto:contact@pravishree.com'
      }
    },
    {
      id: 'ananya-rao',
      number: '06',
      name: 'Ananya Rao',
      position: 'Operations & Business Services Lead',
      shortRole: 'Operations Lead',
      company: 'Pravishree Design Co.',
      location: 'Visakhapatnam, India',
      shortIntro: 'Orchestrating domestic and international BPO operations, support desks, and operational efficiency.',
      image: null,
      accentColor: '#1677FF',
      socials: {
        linkedin: 'https://www.linkedin.com',
        email: 'mailto:contact@pravishree.com'
      }
    }
  ];

  const ceo = teamMembers[0];
  const activeShowcaseMember = teamMembers[activeShowcaseIndex];

  // Handle switching active member in interactive showcase
  const handleSelectShowcaseMember = (index) => {
    if (index === activeShowcaseIndex) return;
    setIsChangingMember(true);
    setTimeout(() => {
      setActiveShowcaseIndex(index);
      setIsChangingMember(false);
    }, 250);
  };

  // Mouse tilt / parallax movement on the CEO portrait card
  const handleMouseMove = (e) => {
    if (!portraitCardRef.current) return;
    const rect = portraitCardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMousePos({ x: x * 12, y: y * 12 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setActiveCardHover(false);
  };

  useEffect(() => {
    if (initialMemberId) {
      const idx = teamMembers.findIndex(m => m.id === initialMemberId);
      if (idx !== -1) {
        setActiveShowcaseIndex(idx);
      }
    }
  }, [initialMemberId]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.querySelectorAll('.gsap-team-anim'),
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: 'power3.out' }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="team-page-root">
      
      {/* =========================================================
          SECTION 1: HERO / INTRODUCTION
         ========================================================= */}
      <section className="team-hero-section" ref={heroRef}>
        <div className="team-hero-glass-bg"></div>
        <div className="team-hero-container">
          
          <nav className="team-breadcrumb gsap-team-anim" aria-label="Breadcrumb">
            <button className="breadcrumb-link" onClick={onNavigateHome}>Home</button>
            <ChevronRight size={14} className="breadcrumb-separator" />
            <span className="breadcrumb-current">Leadership &amp; Team</span>
          </nav>

          <div className="team-badge-pill gsap-team-anim">
            <Sparkles size={14} className="badge-sparkle-icon" />
            <span>LEADERSHIP</span>
          </div>

          <h1 className="team-hero-title gsap-team-anim">
            Meet Our <span className="gradient-cyan-text">Leadership.</span>
          </h1>

          <p className="team-hero-subtitle gsap-team-anim">
            Building practical technology, creative solutions and lasting business value.
          </p>

        </div>
      </section>


      {/* =========================================================
          SECTION 2: MAIN CEO EXECUTIVE PORTRAIT PRESENTATION
         ========================================================= */}
      <section className="team-main-presentation-section">
        <div className="team-presentation-container">
          
          <div className="ceo-asymmetric-grid">
            
            {/* LEFT COLUMN: Minimal CEO Info */}
            <div className="ceo-info-left">
              <div className="ceo-position-tag">CHIEF EXECUTIVE OFFICER</div>
              
              <h2 className="ceo-name-heading">{ceo.name}</h2>

              <div className="ceo-title-meta">
                <span className="meta-position">{ceo.position}</span>
                <span className="meta-bullet">•</span>
                <span className="meta-company">{ceo.company}</span>
              </div>

              <div className="ceo-location-badge">
                <MapPin size={15} className="location-pin-icon" />
                <span>{ceo.location}</span>
              </div>

              <p className="ceo-lead-statement">
                "{ceo.shortIntro}"
              </p>

              <div className="ceo-socials-block">
                <span className="socials-label">CONNECT WITH LEADERSHIP</span>
                <div className="social-buttons-row">
                  {ceo.socials.linkedin && (
                    <a href={ceo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                      <LinkedInIcon size={18} />
                    </a>
                  )}
                  {ceo.socials.instagram && (
                    <a href={ceo.socials.instagram} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
                      <InstagramIcon size={18} />
                    </a>
                  )}
                  {ceo.socials.twitter && (
                    <a href={ceo.socials.twitter} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="X (Twitter)">
                      <TwitterIcon size={18} />
                    </a>
                  )}
                  {ceo.socials.facebook && (
                    <a href={ceo.socials.facebook} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook">
                      <FacebookIcon size={18} />
                    </a>
                  )}
                  {ceo.socials.email && (
                    <a href={ceo.socials.email} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Email">
                      <MailIcon size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Large 4:5 Portrait Card + 3D Visual Object */}
            <div className="ceo-portrait-right">
              
              {/* Signature 3D Glass Sculpture Element */}
              <div className="signature-3d-sculpture" aria-hidden="true">
                <div className="sculpture-orb-core">
                  <div className="sculpture-ring ring-1"></div>
                  <div className="sculpture-ring ring-2"></div>
                  <div className="sculpture-ring ring-3"></div>
                </div>
              </div>

              {/* CEO Portrait Container */}
              <div 
                className={`ceo-portrait-card-wrap ${activeCardHover ? 'is-hovered' : ''}`}
                ref={portraitCardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setActiveCardHover(true)}
                onMouseLeave={handleMouseLeave}
              >
                <div 
                  className="ceo-portrait-inner-frame"
                  style={{
                    transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`
                  }}
                >
                  <div className="portrait-glass-backdrop"></div>
                  <div className="portrait-cyan-glow-edge"></div>

                  {ceo.image ? (
                    <img 
                      src={ceo.image} 
                      alt={ceo.name} 
                      className="ceo-portrait-img"
                    />
                  ) : (
                    /* Editorial Placeholder Frame for CEO Photo */
                    <div className="ceo-portrait-placeholder">
                      <div className="placeholder-pattern-grid"></div>
                      <div className="placeholder-center-emblem">
                        <div className="emblem-orb">
                          <UserCheck size={56} className="emblem-icon" />
                        </div>
                        <span className="placeholder-name-tag">{ceo.name}</span>
                        <span className="placeholder-title-tag">CHIEF EXECUTIVE OFFICER</span>
                        <span className="placeholder-status-badge">PORTRAIT PLACEHOLDER</span>
                      </div>
                    </div>
                  )}

                  <div className="portrait-card-overlay">
                    <div className="overlay-content">
                      <span className="overlay-location">
                        <MapPin size={13} /> Visakhapatnam
                      </span>
                      <h3 className="overlay-name">{ceo.name}</h3>
                      <p className="overlay-title">{ceo.position}</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 3: OVERSIZED SCROLLING BACKGROUND TYPOGRAPHY
         ========================================================= */}
      <div className="team-marquee-scroller" aria-hidden="true">
        <div className="marquee-scroller-track">
          <span>PEOPLE BEHIND THE TECHNOLOGY</span>
          <span className="marquee-star">✦</span>
          <span>CREATIVITY &amp; STRATEGY</span>
          <span className="marquee-star">✦</span>
          <span>PRAVISHREE DESIGN CO.</span>
          <span className="marquee-star">✦</span>
        </div>
      </div>


      {/* =========================================================
          SECTION 4: "02 / OUR TEAM" INTRO SECTION
         ========================================================= */}
      <section className="our-team-intro-section">
        <div className="our-team-intro-container">
          <span className="team-section-num-tag">02 / OUR TEAM</span>
          <h2 className="our-team-editorial-heading">
            The people behind <br className="desktop-only-br" />
            <span className="gradient-cyan-text">the possibilities.</span>
          </h2>
          <p className="our-team-editorial-desc">
            A multidisciplinary team combining technology, creativity, strategy and operational expertise to build solutions that move businesses forward.
          </p>
        </div>
      </section>


      {/* =========================================================
          SECTION 5: REFERENCE-STYLE TEAM PHOTO CARDS GRID
         ========================================================= */}
      <section className="team-cards-grid-section">
        <div className="team-cards-container">
          <div className="team-cards-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-member-card">
                <div className="card-image-wrapper">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="member-card-img" />
                  ) : (
                    <div className="member-card-placeholder">
                      <div className="placeholder-orb-mini">
                        <UserCheck size={36} style={{ color: member.accentColor }} />
                      </div>
                      <span className="card-placeholder-num">{member.number}</span>
                      <span className="card-placeholder-role">{member.shortRole}</span>
                    </div>
                  )}
                  <div className="card-gradient-overlay"></div>
                  
                  <div className="card-bottom-info">
                    <div className="card-accent-line" style={{ background: member.accentColor }}></div>
                    <span className="member-card-number">{member.number}</span>
                    <h3 className="member-card-name">{member.name}</h3>
                    <p className="member-card-position">{member.position}</p>

                    {/* Social / Contact Icons Revealed Smoothly on Hover */}
                    <div className="card-hover-socials">
                      {member.socials.linkedin && member.socials.linkedin.trim() !== '' && (
                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="card-social-icon-btn" aria-label="LinkedIn">
                          <LinkedInIcon size={16} />
                        </a>
                      )}
                      {member.socials.instagram && member.socials.instagram.trim() !== '' && (
                        <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="card-social-icon-btn" aria-label="Instagram">
                          <InstagramIcon size={16} />
                        </a>
                      )}
                      {member.socials.twitter && member.socials.twitter.trim() !== '' && (
                        <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="card-social-icon-btn" aria-label="X (Twitter)">
                          <TwitterIcon size={16} />
                        </a>
                      )}
                      {member.socials.facebook && member.socials.facebook.trim() !== '' && (
                        <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="card-social-icon-btn" aria-label="Facebook">
                          <FacebookIcon size={16} />
                        </a>
                      )}
                      {member.socials.email && member.socials.email.trim() !== '' && (
                        <a href={member.socials.email} target="_blank" rel="noopener noreferrer" className="card-social-icon-btn" aria-label="Email">
                          <MailIcon size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================
          SECTION 7: A MESSAGE FROM OUR CEO
         ========================================================= */}
      <section className="team-quote-section">
        <div className="quote-container">
          <div className="quote-glass-card">
            
            <div className="quote-header-strip">
              <Quote size={24} className="quote-mark-icon" />
              <span className="quote-label">A MESSAGE FROM OUR CEO</span>
            </div>

            <blockquote className="quote-headline">
              "{ceo.quote}"
            </blockquote>

            <div className="quote-author-meta">
              <div className="author-avatar-dot">RC</div>
              <div className="author-details">
                <span className="author-name">{ceo.name}</span>
                <span className="author-role">Chief Executive Officer, Pravishree Design Co.</span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          SECTION 8: FINAL TEAM CTA
         ========================================================= */}
      <section className="team-final-cta-section">
        <div className="team-cta-container">
          <div className="team-cta-card">
            <div className="cta-badge">
              <Building2 size={16} />
              <span>LET'S BUILD WHAT COMES NEXT</span>
            </div>

            <h2 className="cta-title">
              Technology, Creativity &amp; Strategy Working Together.
            </h2>

            <p className="cta-desc">
              Connect with Pravishree Design Co. to explore custom software, web, mobile, creative, and operational solutions for your business.
            </p>

            <div className="cta-actions">
              <button 
                className="btn-team-primary" 
                onClick={() => onOpenContact && onOpenContact('Executive Consultation')}
              >
                <span>Start a Conversation</span>
                <ArrowRight size={18} />
              </button>
              
              <button 
                className="btn-team-secondary"
                onClick={onNavigateHome}
              >
                <span>Explore Home</span>
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
