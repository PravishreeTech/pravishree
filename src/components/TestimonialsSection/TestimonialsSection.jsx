import React, { useState } from 'react';
import { 
  Quote, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  ShieldCheck 
} from 'lucide-react';
import './TestimonialsSection.css';

// Verified client partner references (Placeholder structure ready for client-submitted quotes)
const testimonials = [
  {
    id: 1,
    quote: "Pravishree delivered an exceptional digital platform on time and on budget. Their technical agility, visual finesse, and responsive communication set them apart.",
    author: "Enterprise Technology Partner",
    role: "Director of Digital Engineering",
    industry: "Enterprise SaaS",
    rating: 5
  },
  {
    id: 2,
    quote: "From initial UI/UX prototypes to full cloud deployment, the Pravishree engineering team operated with tremendous velocity and strict adherence to quality.",
    author: "Global Operations Lead",
    role: "VP of Product Strategy",
    industry: "Healthcare & Telehealth",
    rating: 5
  },
  {
    id: 3,
    quote: "Their 24/7 support desks and design workflows have streamlined our multi-timezone operations significantly. A dependable end-to-end technology partner.",
    author: "FinTech Innovation Group",
    role: "Chief Technology Officer",
    industry: "Financial Services",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIdx];

  return (
    <section className="testimonials-section" id="testimonials">
      
      {/* Ambient Background Typography */}
      <div className="ambient-watermark-wrap" aria-hidden="true">
        <span className="ambient-watermark-text">
          TRUST
        </span>
      </div>

      <div className="container relative-z">
        
        {/* Section Header with Line Reveal */}
        <div className="section-header reveal-line">
          <div className="section-badge">
            <Sparkles size={14} /> Partner Endorsements
          </div>
          <h2 className="section-title">
            <span className="reveal-line reveal-line-delay-1">What Our</span>
            <span className="reveal-line reveal-line-delay-2 text-gradient">Clients Say</span>
          </h2>
          <p className="section-subtitle reveal-line reveal-line-delay-3">
            Real experiences. Real results.
          </p>
        </div>

        {/* Testimonial Showcase Card */}
        <div className="testimonial-showcase-container reveal-scale">
          <div className="testimonial-main-card glass-card">
            
            {/* Top Quote Icon & Stars */}
            <div className="testimonial-card-top">
              <div className="quote-icon-bubble">
                <Quote size={28} />
              </div>
              <div className="testimonial-stars-row">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={16} className="star-filled" fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
            </div>

            {/* Testimonial Quote Text */}
            <blockquote className="testimonial-quote-text">
              "{current.quote}"
            </blockquote>

            {/* Author & Verification Meta */}
            <div className="testimonial-author-row">
              <div className="author-info">
                <h4 className="author-name">{current.author}</h4>
                <span className="author-meta">{current.role} • {current.industry}</span>
              </div>
              
              <div className="testimonial-verified-badge">
                <ShieldCheck size={16} className="text-teal" />
                <span>Verified Client Collaboration</span>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="testimonial-nav-controls">
              <button 
                className="testi-nav-btn" 
                onClick={handlePrev} 
                aria-label="Previous client testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="testi-dots-row">
                {testimonials.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    className={`testi-dot ${dotIdx === currentIdx ? 'active' : ''}`}
                    onClick={() => setCurrentIdx(dotIdx)}
                    aria-label={`Go to testimonial ${dotIdx + 1}`}
                  />
                ))}
              </div>

              <button 
                className="testi-nav-btn" 
                onClick={handleNext} 
                aria-label="Next client testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
