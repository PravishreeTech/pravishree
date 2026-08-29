import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare,
  Building,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import './ContactSection.css';

export default function ContactSection({ selectedService, onFormSuccess }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    serviceInterest: selectedService || 'Web & App Development',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Please enter your full name';
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errors.message = 'Please provide details about your project or inquiry';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable API post
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti effect
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // fallback silently
      }

      if (onFormSuccess) {
        onFormSuccess('Thank you! Your inquiry has been received. Our team will contact you within 24 hours.');
      }
    }, 1000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        
        {/*  Section Header  */}
        <div className="section-header">
          <div className="section-badge">
            <MessageSquare size={14} /> Get in Touch
          </div>
          <h2 className="section-title">
            Let’s Build Something <span className="text-gradient">Great Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, need operational BPO bandwidth, or looking to scale your engineering? We’re ready to help.
          </p>
        </div>

        {/*  Split Layout Grid  */}
        <div className="contact-split-grid">
          
          {/*  LEFT: Contact Information & Global Desks  */}
          <div className="contact-info-col glass-card">
            
            <div className="contact-info-header">
              <span className="contact-accent-tag">Direct Communication</span>
              <h3>Speak Directly With Our Solutions Specialists</h3>
              <p>
                Whether you need a quick quote, a technical consultation, or long-term operational partnership, we respond within 1 business day.
              </p>
            </div>

            {/*  Channels  */}
            <div className="contact-channels-list">
              
              <div className="contact-channel-item">
                <div className="channel-icon-box cyan">
                  <Mail size={20} />
                </div>
                <div className="channel-text">
                  <span className="channel-label">Email Us Directly</span>
                  <a href="mailto:info@pravishreedesign.com" className="channel-value">
                    info@pravishreedesign.com
                  </a>
                  <a href="mailto:business@pravishreedesign.com" className="channel-sub-value">
                    business@pravishreedesign.com
                  </a>
                </div>
              </div>

              <div className="contact-channel-item">
                <div className="channel-icon-box blue">
                  <Phone size={20} />
                </div>
                <div className="channel-text">
                  <span className="channel-label">Call &amp; WhatsApp Support</span>
                  <a href="tel:+919876543210" className="channel-value">
                    +91 (0) 98765 43210
                  </a>
                  <span className="channel-sub-value">Mon – Fri (9:00 AM – 7:00 PM IST)</span>
                </div>
              </div>

              <div className="contact-channel-item">
                <div className="channel-icon-box teal">
                  <Building size={20} />
                </div>
                <div className="channel-text">
                  <span className="channel-label">Corporate Headquarters</span>
                  <address className="channel-value address">
                    Pravishree Tech Solutions Hub, Technology Corridor,<br />
                    Bangalore / Chennai Hub, India
                  </address>
                </div>
              </div>

              <div className="contact-channel-item">
                <div className="channel-icon-box sky">
                  <Clock size={20} />
                </div>
                <div className="channel-text">
                  <span className="channel-label">24/7 Global BPO Operations Desk</span>
                  <span className="channel-value highlight">Always Active (US / UK / APAC Shifts)</span>
                </div>
              </div>

            </div>

            {/*  Trust / NDA Note  */}
            <div className="contact-nda-note">
              <ShieldCheck size={18} className="text-cyan" />
              <span>All consultations are backed by a Mutual Non-Disclosure Agreement (NDA).</span>
            </div>

          </div>

          {/*  RIGHT: Modern Contact Form  */}
          <div className="contact-form-col glass-card">
            
            {isSubmitted ? (
              <div className="form-success-card">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={48} className="text-cyan" />
                </div>
                <h3>Message Received!</h3>
                <p>
                  Thank you for reaching out to <strong>Pravishree Design Co.</strong> Our solutions team has received your inquiry and will respond within 24 hours.
                </p>
                <button 
                  className="btn-secondary" 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      subject: '',
                      serviceInterest: 'Web & App Development',
                      message: ''
                    });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-actual-form" onSubmit={handleSubmit} noValidate>
                <h3 className="form-heading">Send Us an Inquiry</h3>
                <p className="form-subheading">Fill in your requirements and we’ll get right back to you.</p>

                {/*  Full Name  */}
                <div className="form-group">
                  <label htmlFor="fullName">Full Name <span className="req">*</span></label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="e.g. Rahul Sharma / Sarah Jenkins"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={formErrors.fullName ? 'has-error' : ''}
                  />
                  {formErrors.fullName && <span className="field-error">{formErrors.fullName}</span>}
                </div>

                {/*  Email & Phone Row  */}
                <div className="form-two-grid">
                  <div className="form-group">
                    <label htmlFor="email">Work Email <span className="req">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={formErrors.email ? 'has-error' : ''}
                    />
                    {formErrors.email && <span className="field-error">{formErrors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number (Optional)</label>
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

                {/*  Service Interest  */}
                <div className="form-group">
                  <label htmlFor="serviceInterest">Service of Interest</label>
                  <select
                    id="serviceInterest"
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                  >
                    <option value="Web & App Development">Web &amp; App Development</option>
                    <option value="Graphic Designing & Visual Identity">Graphic Designing &amp; Visual Identity</option>
                    <option value="Video Editing & Motion Graphics">Video Editing &amp; Motion Graphics</option>
                    <option value="Digital Marketing & SEO">Digital Marketing &amp; SEO</option>
                    <option value="Domestic BPO Services">Domestic BPO Services</option>
                    <option value="International BPO Services (24/7)">International BPO Services (24/7)</option>
                    <option value="Custom Software Engineering">Custom Software Engineering</option>
                    <option value="General Corporate Inquiry">General Corporate Inquiry</option>
                  </select>
                </div>

                {/*  Message  */}
                <div className="form-group">
                  <label htmlFor="message">Project Scope &amp; Details <span className="req">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell us about your project timeline, requirements, or operational needs..."
                    value={formData.message}
                    onChange={handleChange}
                    className={formErrors.message ? 'has-error' : ''}
                  ></textarea>
                  {formErrors.message && <span className="field-error">{formErrors.message}</span>}
                </div>

                {/*  Submit Button  */}
                <button 
                  type="submit" 
                  className="btn-primary w-full form-submit-btn" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Send Message &amp; Get Proposal</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
