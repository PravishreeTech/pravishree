import React, { useEffect, useRef } from 'react';
import {
  MapPin,
  ChevronRight,
  Sparkles,
  Users,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TeamSection from '../TeamSection/TeamSection';
import './TeamPage.css';

gsap.registerPlugin(ScrollTrigger);

// Custom Brand & Contact Icons (Consistent Pravishree Styling)
const LinkedInIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
  const aboutTeamRef = useRef(null);

  // Founder Data (Ratnakar Chilaka)
  const founder = {
    name: 'Ratnakar Chilaka',
    position: 'Founder & CEO',
    company: 'Pravishree Design Co.',
    location: 'Visakhapatnam, Andhra Pradesh',
    bioP1: "Ratnakar Chilaka is the Founder and CEO of Pravishree Design Co., bringing technology, creativity, and business solutions together. With a background in technology and graphic design, he founded Pravishree in 2019 to help businesses turn ideas into impactful digital solutions.",
    bioP2: "Under his leadership, Pravishree has grown into a multi-service technology and digital solutions company offering software, web & app development, graphic design, digital marketing, video editing, consultancy, and BPO services. His philosophy is simple: understand the client, create with purpose, deliver with quality, and build for long-term growth.",
    image: '/assets/team/ratnakar-chilaka.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/chilaka-ratnakar-34128b12a/',
      whatsapp: 'https://wa.me/918331962896',
      email: 'mailto:pravishreedesignco@gmail.com'
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const ctx = gsap.context(() => {
      // 1. Hero Entry Animations
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.querySelectorAll('.gsap-team-anim'),
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, stagger: 0.1, ease: 'power3.out' }
        );
      }

      // 2. About Team Scroll-Reveal Animation
      if (aboutTeamRef.current) {
        gsap.fromTo(
          aboutTeamRef.current.querySelectorAll('.gsap-about-team-anim'),
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: aboutTeamRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="team-page-root">

      {/* =========================================================
          SECTION 1: LEADERSHIP PROFILE — RATNAKAR CHILAKA
          - Left: Breadcrumb, Badge, Heading, Role, Location, Bio, 3 Socials
          - Right: Actual Portrait Photo with Name & Role Overlay Card
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
                <span className="meta-bullet">–</span>
                <span className="meta-company">{founder.company}</span>
              </div>

              <div className="ceo-location-badge">
                <MapPin size={15} className="location-pin-icon" />
                <span>{founder.location}</span>
              </div>

              {/* Compact & Beautifully Formatted Biography */}
              <div className="ceo-bio-block">
                <p className="ceo-bio-paragraph">
                  {founder.bioP1}
                </p>
                <p className="ceo-bio-paragraph">
                  {founder.bioP2}
                </p>
              </div>

              {/* Exactly 3 Leadership Contact Icons */}
              <div className="ceo-socials-block">
                <span className="socials-label">CONNECT WITH LEADERSHIP</span>
                <div className="social-buttons-row">
                  <a
                    href={founder.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    title="LinkedIn"
                    aria-label="Open Ratnakar Chilaka LinkedIn profile"
                  >
                    <LinkedInIcon size={18} />
                  </a>

                  <a
                    href={founder.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    title="WhatsApp"
                    aria-label="Contact Pravishree on WhatsApp"
                  >
                    <WhatsAppIcon size={18} />
                  </a>

                  <a
                    href={founder.socials.email}
                    className="social-btn"
                    title="Email"
                    aria-label="Email Pravishree Design Co."
                  >
                    <MailIcon size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Founder Photo Card with Natural Face Framing */}
            <div className="ceo-portrait-right gsap-team-anim">
              <div className="founder-photo-card-frame">
                <img
                  src={founder.image}
                  alt="Ratnakar Chilaka – Founder & CEO, Pravishree Design Co."
                  className="founder-photo-img"
                  style={{ objectPosition: 'center 3%' }}
                />
                <div className="founder-card-footer">
                  <span className="founder-footer-name">{founder.name}</span>
                  <span className="founder-footer-role">Founder &amp; CEO • Pravishree Design Co.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 2: ABOUT TEAM SECTION (TWO-COLUMN EDITORIAL)
          - Left: Eyebrow, Heading, Subheading, Body Paragraphs, Closing Statement
          - Right: Prominent Team Group Photo / Showcase Card
         ========================================================= */}
      <section className="about-team-editorial-section" id="about-team" ref={aboutTeamRef}>
        <div className="about-team-editorial-container">

          <div className="about-team-editorial-card glass-card">
            <div className="about-team-two-col-grid">

              {/* LEFT COLUMN: Editorial Content */}
              <div className="about-team-text-col">
                <div className="about-team-badge gsap-about-team-anim">
                  <Sparkles size={14} className="badge-sparkle-icon" />
                  <span>ABOUT TEAM</span>
                </div>

                <h2 className="about-team-main-heading gsap-about-team-anim">
                  People Behind the <span className="gradient-cyan-text">Ideas</span>
                </h2>

                <p className="about-team-subheading gsap-about-team-anim">
                  A Team Driven by Creativity, Technology &amp; Excellence
                </p>

                <div className="about-team-body-paragraphs">
                  <p className="about-team-para gsap-about-team-anim">
                    At Pravishree Design Co., our greatest strength is our people. We bring together creative minds, technology professionals, digital specialists, and BPO experts who share a common vision—to transform ideas into meaningful business solutions.
                  </p>

                  <p className="about-team-para gsap-about-team-anim">
                    Our team combines strategic thinking, technical expertise, creativity, and industry knowledge to deliver solutions that are not only visually impressive but also purposeful, scalable, and results-driven.
                  </p>

                  <p className="about-team-para gsap-about-team-anim">
                    We believe great work happens when talent meets collaboration. By working closely with our clients and with each other, we turn challenges into opportunities, ideas into experiences, and business goals into measurable outcomes.
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN: Team Visual / Group Photo Frame */}
              <div className="about-team-visual-col gsap-about-team-anim">
                <div className="about-team-photo-frame">
                  <img
                    src="/assets/team/pravishree-team-group.jpg"
                    alt="Pravishree Design Co. - Our Team - People Behind the Ideas"
                    className="about-team-group-img"
                  />
                </div>
              </div>

            </div>

            {/* FULL-WIDTH CLOSING STATEMENT */}
            <div className="about-team-closing-statement gsap-about-team-anim">
              <p className="closing-statement-text">
                Together,    we <span className="highlight-cyan">create</span>. Together,   we <span className="highlight-cyan">innovate</span>. Together, we <span className="highlight-cyan">grow</span>.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 3: MAIN INTERACTIVE TEAM SHOWCASE
          - Left: Numbered Member List (01 to 05)
          - Right: Dynamic Selected Member Profile / Image Panel
         ========================================================= */}
      <section className="team-bottom-animation-section" id="team-members">
        <TeamSection />
      </section>

    </div>
  );
}
