import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Phone, 
  ArrowRight,
  ShieldCheck,
  ExternalLink,
  Clock
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
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const heroRef = useRef(null);
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
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out' }
        );
      }

      // 2. Oversized Typography Horizontal Scrub Motion
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
          SECTION 1: HERO HEADER & SOCIAL MEDIA ICONS AT TOP
         ========================================================= */}
      <section className="contact-hero-section" ref={heroRef}>
        <div className="contact-hero-container">
          
          {/* Breadcrumb */}
          <nav className="contact-breadcrumb gsap-hero-anim" aria-label="Breadcrumb">
            <button className="breadcrumb-link" onClick={onNavigateHome}>Home</button>
            <ChevronRight size={14} className="breadcrumb-separator" />
            <span className="breadcrumb-current">Contact Us</span>
          </nav>

          {/* Main Page Title Header Block */}
          <div className="contact-page-header">
            <div className="contact-badge-pill gsap-hero-anim">
              <Sparkles size={14} className="badge-icon" />
              <span>01 / GET IN TOUCH</span>
            </div>

            <h1 className="contact-page-title gsap-hero-anim">
              CONTACT <span className="gradient-cyan-text">US.</span>
            </h1>

            <p className="contact-page-subtitle gsap-hero-anim">
              Connect with Pravishree Design Co. to engineer practical digital solutions and scale your technology operations.
            </p>

            {/* Top Social Media Icons Row */}
            <div className="contact-social-row gsap-hero-anim">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-social-btn" title="LinkedIn" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                <span className="social-lbl">LinkedIn</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact-social-btn" title="Twitter / X" aria-label="Twitter / X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                <span className="social-lbl">Twitter / X</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-social-btn" title="Instagram" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                <span className="social-lbl">Instagram</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="contact-social-btn" title="Facebook" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                <span className="social-lbl">Facebook</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-social-btn" title="GitHub" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                <span className="social-lbl">GitHub</span>
              </a>
              <a href="mailto:info@pravishree.com" className="contact-social-btn" title="Email Us Direct" aria-label="Email Us Direct">
                <Mail size={18} />
                <span className="social-lbl">Direct Email</span>
              </a>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 2: SEAMLESS AUTO-SCROLLING TYPOGRAPHY MARQUEE
         ========================================================= */}
      <section className="contact-marquee-section" aria-label="Brand Philosophy Marquee">
        <div className="contact-marquee-viewport">
          <div className="contact-marquee-track">
            <div className="contact-marquee-group">
              <span className="marquee-word-filled">TECHNOLOGY.</span>
              <span className="marquee-word-outline">CREATIVITY.</span>
              <span className="marquee-word-filled">BUSINESS.</span>
            </div>
            <div className="contact-marquee-group">
              <span className="marquee-word-filled">TECHNOLOGY.</span>
              <span className="marquee-word-outline">CREATIVITY.</span>
              <span className="marquee-word-filled">BUSINESS.</span>
            </div>
            <div className="contact-marquee-group">
              <span className="marquee-word-filled">TECHNOLOGY.</span>
              <span className="marquee-word-outline">CREATIVITY.</span>
              <span className="marquee-word-filled">BUSINESS.</span>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          SECTION 3: MAIN 2-COLUMN CONTACT GRID (LEFT: INFO + MAP, RIGHT: FORM)
         ========================================================= */}
      <section className="contact-main-grid-section" id="contact-form-section" ref={formRef}>
        <div className="contact-main-container">
          
          <div className="contact-two-col-grid">
            
            {/* LEFT COLUMN: Contact Details & Google Map */}
            <div className="contact-left-col">
              
              {/* Info Card */}
              <div className="contact-info-card glass-card">
                <div className="c-card-badge">
                  <Sparkles size={14} className="icon-cyan" />
                  <span>Direct Solutions Desk</span>
                </div>
                <h3 className="c-card-title">Speak Directly With Our Engineering &amp; Business Leads</h3>
                <p className="c-card-para">
                  Whether you're launching a new digital product, modernizing an existing system, or looking for a technology partner, we're here to help.
                </p>

                <div className="c-card-highlights">
                  <div className="c-highlight-item">
                    <Clock size={16} className="icon-cyan" />
                    <span>Response Time: Within 24 hours</span>
                  </div>
                  <div className="c-highlight-item">
                    <ShieldCheck size={16} className="icon-teal" />
                    <span>Mutual Non-Disclosure Agreement (NDA) Protected</span>
                  </div>
                </div>
              </div>

              {/* Map Card */}
              <div className="contact-map-card glass-card">
                <div className="map-card-header">
                  <MapPin size={16} className="icon-cyan" />
                  <span>Corporate Headquarters · Asilmetta, Visakhapatnam</span>
                </div>

                <div className="map-iframe-wrapper">
                  <iframe
                    title="Pravishree Design Co. Office Location"
                    src="https://maps.google.com/maps?q=Amma%20Apartments%2C%20Flat%20No%20-%20302%2C%209-14-7%2C%20CBM%20Compound%2C%20Asilmetta%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530003&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>

                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Amma+Apartments%2C+Flat+No+-+302%2C+9-14-7%2C+CBM+Compound%2C+Asilmetta%2C+Visakhapatnam%2C+Andhra+Pradesh+530003" 
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

            {/* RIGHT COLUMN: PRIMARY LARGE CONTACT FORM */}
            <div className="contact-right-col">
              <div className="contact-form-glass-card glass-card">
                
                <div className="form-card-header">
                  <h2 className="form-card-title">Tell us what you're building.</h2>
                  <p className="form-card-subtitle">Fill in your requirements below and our team will get right back to you.</p>
                </div>

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
                        setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="contact-form-element">
                    
                    {/* Full Name */}
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

                    {/* Email & Phone Two-Grid */}
                    <div className="form-two-grid">
                      <div className="form-field">
                        <label htmlFor="email">Work Email <span className="req">*</span></label>
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
                          placeholder="+91 83319 62896"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* Subject / Service Interest */}
                    <div className="form-field">
                      <label htmlFor="subject">Subject / Service of Interest</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="e.g. Software Development / Website Development / BPO Services"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Message */}
                    <div className="form-field">
                      <label htmlFor="message">Your Message <span className="req">*</span></label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Tell us about your project scope, goals, or operational needs..."
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? 'has-error' : ''}
                      ></textarea>
                      {errors.message && <span className="field-error">{errors.message}</span>}
                    </div>

                    {/* Submit Button */}
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
          SECTION 4: BOTTOM ROW CARDS (PHONE / EMAIL / ADDRESS)
         ========================================================= */}
      <section className="contact-bottom-cards-section">
        <div className="contact-bottom-container">
          
          <div className="contact-three-cards-grid">
            
            {/* CARD 1: PHONE */}
            <div className="bottom-info-card glass-card">
              <div className="info-card-icon-wrap blue">
                <Phone size={22} />
              </div>
              <span className="info-card-label">PHONE</span>
              <a href="tel:+918331962896" className="info-card-value link">
                +91 83319 62896
              </a>
              <span className="info-card-subval">Mon – Fri (9:00 AM – 7:00 PM IST)</span>
            </div>

            {/* CARD 2: EMAIL */}
            <div className="bottom-info-card glass-card">
              <div className="info-card-icon-wrap cyan">
                <Mail size={22} />
              </div>
              <span className="info-card-label">EMAIL</span>
              <a href="mailto:info@pravishree.com" className="info-card-value link">
                info@pravishree.com
              </a>
              <span className="info-card-subval">business@pravishreedesign.com</span>
            </div>

            {/* CARD 3: ADDRESS */}
            <div className="bottom-info-card glass-card card-address-card">
              <div className="info-card-icon-wrap teal">
                <MapPin size={22} />
              </div>
              <span className="info-card-label">ADDRESS</span>
              <address className="info-card-full-address">
                Amma Apartments, Flat No - 302<br />
                9-14-7, CBM Compound<br />
                Asilmetta<br />
                Visakhapatnam<br />
                Andhra Pradesh - 530003
              </address>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

