import React, { useEffect, useRef } from 'react';
import { 
  MapPin, 
  ChevronRight, 
  Sparkles, 
  Quote, 
  Users
} from 'lucide-react';
import gsap from 'gsap';
import TeamSection from '../TeamSection/TeamSection';
import './TeamPage.css';

// Custom SVG Brand Icons
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

const MailIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default function TeamPage({ onNavigateHome }) {
  const heroRef = useRef(null);

  // Founder Data (Ratnakar Chilaka)
  const founder = {
    name: 'Ratnakar Chilaka',
    position: 'Founder & Chief Executive Officer',
    company: 'Pravishree Design Co.',
    location: 'Visakhapatnam, Andhra Pradesh',
    description: "At the heart of Pravishree's journey is a commitment to building practical technology and digital solutions that create meaningful value for businesses. Leading Pravishree with a focus on innovation, technology, client success and sustainable growth.",
    quote: "Technology is most valuable when it solves a real problem. At Pravishree, our goal is to combine innovation, creativity, and business understanding to build solutions that help our clients move forward with confidence.",
    image: '/assets/team/team-1.svg',
    socials: {
      linkedin: 'https://www.linkedin.com',
      instagram: 'https://www.instagram.com',
      twitter: 'https://x.com',
      email: 'mailto:contact@pravishree.com'
    }
  };

  // EXACTLY 3 Clean Team Photo Containers (Photo Only - No Text/Role/Data)
  const teamPhotos = [
    { id: 'teamPhoto1', image: '/assets/team/team-2.svg' },
    { id: 'teamPhoto2', image: '/assets/team/team-3.svg' },
    { id: 'teamPhoto3', image: '/assets/team/team-4.svg' }
  ];

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
          1. ABOUT RATNAKAR.CH SECTION
          - Ratnakar description on LEFT
          - Founder photo ONLY on RIGHT (no text overlay)
         ========================================================= */}
      <section className="ratnakar-hero-section" ref={heroRef}>
        <div className="team-hero-container">
          
          <nav className="team-breadcrumb gsap-team-anim" aria-label="Breadcrumb">
            <button className="breadcrumb-link" onClick={onNavigateHome}>Home</button>
            <ChevronRight size={14} className="breadcrumb-separator" />
            <span className="breadcrumb-current">Leadership &amp; Team</span>
          </nav>

          <div className="ceo-asymmetric-grid">
            
            {/* LEFT COLUMN: Founder Description & Info */}
            <div className="ceo-info-left gsap-team-anim">
              <div className="team-badge-pill">
                <Sparkles size={14} className="badge-sparkle-icon" />
                <span>ABOUT RATNAKAR.CH</span>
              </div>
              
              <h1 className="ceo-name-heading">
                {founder.name}
              </h1>

              <div className="ceo-title-meta">
                <span className="meta-position">{founder.position}</span>
                <span className="meta-bullet">•</span>
                <span className="meta-company">{founder.company}</span>
              </div>

              <div className="ceo-location-badge">
                <MapPin size={15} className="location-pin-icon" />
                <span>{founder.location}</span>
              </div>

              <p className="ceo-lead-statement">
                "{founder.description}"
              </p>

              <div className="ceo-quote-block">
                <Quote size={20} className="quote-icon-inline" />
                <p className="ceo-quote-text">
                  "{founder.quote}"
                </p>
              </div>

              <div className="ceo-socials-block">
                <span className="socials-label">CONNECT WITH LEADERSHIP</span>
                <div className="social-buttons-row">
                  {founder.socials.linkedin && (
                    <a href={founder.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                      <LinkedInIcon size={18} />
                    </a>
                  )}
                  {founder.socials.instagram && (
                    <a href={founder.socials.instagram} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
                      <InstagramIcon size={18} />
                    </a>
                  )}
                  {founder.socials.twitter && (
                    <a href={founder.socials.twitter} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="X (Twitter)">
                      <TwitterIcon size={18} />
                    </a>
                  )}
                  {founder.socials.email && (
                    <a href={founder.socials.email} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Email">
                      <MailIcon size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Founder Photo ONLY (No text overlay) */}
            <div className="ceo-portrait-right gsap-team-anim">
              <div className="founder-photo-card-frame">
                {founder.image ? (
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="founder-photo-img"
                  />
                ) : (
                  <div className="founder-photo-empty-slot"></div>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          2. ABOUT TEAM SECTION
          - Heading: "ABOUT TEAM"
          - Team description underneath
         ========================================================= */}
      <section className="about-team-section" id="about-team">
        <div className="about-team-container">
          
          <div className="about-team-header-panel">
            <div className="team-section-badge">
              <Users size={15} />
              <span>OUR MULTIDISCIPLINARY TEAM</span>
            </div>
            <h2 className="about-team-heading">
              ABOUT <span className="gradient-cyan-text">TEAM</span>
            </h2>
            <p className="about-team-description">
              A multidisciplinary team combining technology, creativity, strategy and operational expertise to build solutions that move businesses forward.
            </p>
          </div>

          {/* =========================================================
              3. EXACTLY 3 CLEAN TEAM PHOTO SLOTS ONLY
              - PHOTO CONTAINERS ONLY
              - NO NAME
              - NO ROLE
              - NO INITIALS
              - NO ICON / AVATAR
              - NO TEXT (INSIDE OR BELOW)
             ========================================================= */}
          <div className="team-photos-grid-section">
            <div className="team-photos-grid">
              {teamPhotos.map((photo) => (
                <div key={photo.id} className="team-photo-card">
                  <div className="team-photo-wrapper">
                    {photo.image ? (
                      <img 
                        src={photo.image} 
                        alt="Team Photo" 
                        className="team-photo-img" 
                      />
                    ) : (
                      <div className="team-photo-empty-slot"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          4. HOME PAGE INTERACTIVE TEAM ANIMATION / SECTION
          - Reused exact Home page TeamSection component at the end of Team page
         ========================================================= */}
      <section className="team-bottom-animation-section">
        <TeamSection />
      </section>

    </div>
  );
}
