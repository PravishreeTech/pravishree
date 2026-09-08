import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Phone, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  Globe,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ContactPage.css';

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage({ onNavigateHome, onFormSuccess }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const heroRef = useRef(null);
  const introRef = useRef(null);
  const formRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeTextRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const ctx = gsap.context(() => {
      // 1. Hero Entry Animations
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.querySelectorAll('.gsap-hero-anim'),
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out' }
        );
      }

      // 2. Editorial Intro Line-by-Line Reveal
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

      // 3. Oversized Typography Horizontal Scrub Motion
      if (marqueeRef.current && marqueeTextRef.current) {
        gsap.to(marqueeTextRef.current, {
          xPercent: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: marqueeRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your work email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please describe your project or inquiry';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.5 }
        });
      } catch (err) {}

      if (onFormSuccess) {
        onFormSuccess('Thank you! Your message has been received. Our team will get back to you shortly.');
      }
    }, 1000);
  };

  const scrollToForm = () => {
    const el = document.getElementById('contact-form-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="contact-page-root">
      
      {/* =========================================================
          SECTION 1: 100VH CINEMATIC HERO
         ========================================================= */}
      <section className="contact-hero-section" ref={heroRef}>
        <div className="contact-hero-container">
          
          {/* Breadcrumb */}
          <nav className="contact-breadcrumb gsap-hero-anim" aria-label="Breadcrumb">
            <button className="breadcrumb-link" onClick={onNavigateHome}>Home</button>
            <ChevronRight size={14} className="breadcrumb-separator" />
            <span className="breadcrumb-current">Contact Us</span>
          </nav>

          <div className="contact-hero-grid">
            
            {/* Left Hero Title & Composition */}
            <div className="contact-hero-content">
              <div className="contact-badge-pill gsap-hero-anim">
                <Sparkles size={14} className="badge-icon" />
                <span>01 / GET IN TOUCH</span>
              </div>

              <h1 className="contact-hero-title gsap-hero-anim">
                CONTACT <br />
                <span className="gradient-cyan-text">US.</span>
              </h1>

              <p className="contact-hero-subtitle gsap-hero-anim">
                Connect with Pravishree Design Co. to engineer practical digital solutions and scale your technology operations.
              </p>

              <div className="contact-hero-actions gsap-hero-anim">
                <button className="btn-hero-contact" onClick={scrollToForm}>
                  <span>Start a Conversation</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right 3D Focal Glass Sphere Stage */}
            <div className="contact-hero-stage gsap-hero-anim">
              <div className="contact-glass-orb-stage">
                <div className="orb-glass-sphere">
                  <div className="sphere-inner-ring ring-1"></div>
                  <div className="sphere-inner-ring ring-2"></div>
                  <div className="sphere-inner-ring ring-3"></div>
                  <div className="sphere-ambient-glow"></div>
                </div>

                <div className="orb-meta-chip top-left">
                  <Globe size={14} className="icon-cyan" />
                  <span>Global Technology Hub</span>
                </div>
                <div className="orb-meta-chip bottom-right">
                  <ShieldCheck size={14} className="icon-teal" />
                  <span>24/7 Operational SLA</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 2: EDITORIAL INTRODUCTION (LIGHT BACKGROUND)
         ========================================================= */}
      <section className="contact-intro-section" ref={introRef}>
        <div className="contact-intro-container">
          <span className="intro-eyebrow gsap-intro-anim">01 / LET'S CONNECT</span>
          <h2 className="intro-headline gsap-intro-anim">
            Let's build something <span className="text-gradient-dark">meaningful together.</span>
          </h2>
          <p className="intro-para gsap-intro-anim">
            Have an idea, project, or business challenge in mind? Let's connect and explore how technology, creativity, and practical digital solutions can move your business forward.
          </p>
        </div>
      </section>


      {/* =========================================================
          SECTION 3: CINEMATIC CONTACT FORM (DARK NAVY ENVIRONMENT)
         ========================================================= */}
      <section className="contact-form-section" id="contact-form-section" ref={formRef}>
        <div className="contact-form-container">
          
          <div className="contact-form-grid">
            
            {/* LEFT SIDE: Heading & 3D Visual */}
            <div className="form-left-col">
              <span className="form-eyebrow">02 / START A CONVERSATION</span>
              <h2 className="form-headline">Tell us what you're building.</h2>
              <p className="form-para">
                Whether you're launching a new digital product, modernizing an existing system, or looking for a technology partner, we'd love to hear from you.
              </p>

              <div className="form-left-visual-box">
                <div className="visual-network-card glass-card">
                  <div className="v-card-badge">
                    <Sparkles size={14} className="icon-cyan" />
                    <span>Direct Solutions Desk</span>
                  </div>
                  <p className="v-card-text">
                    Every inquiry is reviewed by our engineering and business leads. We respond within 24 hours.
                  </p>
                  <div className="v-card-nda">
                    <ShieldCheck size={16} className="icon-teal" />
                    <span>Mutual Non-Disclosure Agreement (NDA) Protected</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Translucent Glass Contact Form */}
            <div className="form-right-col">
              <div className="contact-glass-form-card glass-card">
                
                {isSubmitted ? (
                  <div className="form-success-state">
                    <CheckCircle2 size={54} className="text-cyan" />
                    <h3>Message Received!</h3>
                    <p>
                      Thank you, <strong>{formData.fullName}</strong>. Our team at Pravishree Design Co. has received your inquiry and will contact you within 24 hours.
                    </p>
                    <button 
                      className="btn-form-reset"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ fullName: '', email: '', phone: '', message: '' });
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    
                    <div className="form-field">
                      <label htmlFor="fullName">Your Name <span className="req">*</span></label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="e.g. Alexander Wright"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={errors.fullName ? 'has-error' : ''}
                      />
                      {errors.fullName && <span className="field-error">{errors.fullName}</span>}
                    </div>

                    <div className="form-two-grid">
                      <div className="form-field">
                        <label htmlFor="email">Email Address <span className="req">*</span></label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="alex@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={errors.email ? 'has-error' : ''}
                        />
                        {errors.email && <span className="field-error">{errors.email}</span>}
                      </div>

                      <div className="form-field">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="+91 / +1 (555) 000-0000"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="message">Your Message <span className="req">*</span></label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Tell us about your project scope, goals, or operational needs..."
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? 'has-error' : ''}
                      ></textarea>
                      {errors.message && <span className="field-error">{errors.message}</span>}
                    </div>

                    <button type="submit" className="btn-send-message" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={16} className="btn-arrow" />
                        </>
                      )}
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 4: CONTACT INFORMATION GRID (LIGHT BACKGROUND)
         ========================================================= */}
      <section className="contact-info-grid-section">
        <div className="contact-info-container">
          
          <div className="info-grid-header">
            <span className="section-eyebrow">03 / DIRECT REACH</span>
            <h2 className="section-title">Corporate Information</h2>
          </div>

          <div className="contact-editorial-grid">
            
            {/* 01: LOCATION */}
            <div className="info-editorial-card">
              <span className="info-num">01</span>
              <span className="info-label">LOCATION</span>
              <h3 className="info-val">Visakhapatnam, India</h3>
              <p className="info-sub-val">Andhra Pradesh · Technology Corridor</p>
            </div>

            {/* 02: EMAIL */}
            <div className="info-editorial-card">
              <span className="info-num">02</span>
              <span className="info-label">EMAIL</span>
              <a href="mailto:info@pravishreedesign.com" className="info-val link">
                info@pravishreedesign.com
              </a>
              <p className="info-sub-val">business@pravishreedesign.com</p>
            </div>

            {/* 03: PHONE */}
            <div className="info-editorial-card">
              <span className="info-num">03</span>
              <span className="info-label">PHONE</span>
              <a href="tel:+919876543210" className="info-val link">
                +91 (0) 98765 43210
              </a>
              <p className="info-sub-val">Mon – Fri (9:00 AM – 7:00 PM IST)</p>
            </div>

            {/* 04: SERVICES */}
            <div className="info-editorial-card">
              <span className="info-num">04</span>
              <span className="info-label">SERVICES</span>
              <h3 className="info-val">Technology · Design</h3>
              <p className="info-sub-val">Digital Solutions · Global BPO Desks</p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 5: OVERSIZED TYPOGRAPHY SECTION
         ========================================================= */}
      <section className="contact-marquee-section" ref={marqueeRef}>
        <div className="marquee-track-wrap">
          <div className="marquee-text-content" ref={marqueeTextRef}>
            <span>TECHNOLOGY.</span>
            <span className="outline">CREATIVITY.</span>
            <span>POSSIBILITY.</span>
            <span className="outline">PRAVISHREE.</span>
          </div>
        </div>
      </section>


      {/* =========================================================
          SECTION 6: REAL GOOGLE MAPS LOCATION SECTION
         ========================================================= */}
      <section className="contact-map-section">
        <div className="map-section-container">
          
          <div className="map-header">
            <span className="section-eyebrow">04 / HEADQUARTERS</span>
            <h2 className="section-title">Find us in Visakhapatnam.</h2>
            <p className="map-subtitle">
              <MapPin size={17} className="inline-location-icon" />
              <span>Visakhapatnam, Andhra Pradesh, India</span>
            </p>
          </div>

          <div className="map-graphic-box">
            <div className="map-iframe-container">
              <iframe
                title="Pravishree Design Co. Office Location"
                src="https://maps.google.com/maps?q=Visakhapatnam%2C%20Andhra%20Pradesh%2C%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="map-overlay-chip">
                <MapPin size={15} className="icon-cyan" />
                <span>Pravishree Design Co. · Visakhapatnam</span>
              </div>

              <a 
                href="https://www.google.com/maps/search/?api=1&query=Visakhapatnam%2C+Andhra+Pradesh%2C+India" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-open-google-maps"
                aria-label="Open location in Google Maps"
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 7: FINAL CTA (DARK NAVY ENVIRONMENT)
         ========================================================= */}
      <section className="contact-final-cta-section">
        <div className="cta-section-container">
          <div className="cta-content-card glass-card">
            <div className="cta-badge">
              <Sparkles size={14} className="icon-cyan" />
              <span>LET'S TALK</span>
            </div>

            <h2 className="cta-title">Let's build what's next.</h2>

            <p className="cta-para">
              Have a project in mind? Let's turn your idea into a practical digital solution.
            </p>

            <button className="btn-cta-action" onClick={scrollToForm}>
              <span>Start a Conversation</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
