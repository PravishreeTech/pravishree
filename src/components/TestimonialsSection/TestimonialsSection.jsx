import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Quote, 
  Sparkles, 
  Star, 
  ShieldCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import './TestimonialsSection.css';

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
  },
  {
    id: 4,
    quote: "The web and mobile platforms engineered by Pravishree handled our peak seasonal traffic effortlessly with zero downtime. Exceptional architecture and execution.",
    author: "Omnichannel Retail Network",
    role: "Head of Product Engineering",
    industry: "E-Commerce & Retail",
    rating: 5
  },
  {
    id: 5,
    quote: "Their team seamlessly merged cutting-edge UI/UX design with high-performance video workflows. Delivering creative mastery with engineering rigor.",
    author: "Digital Media & Streaming",
    role: "Creative Technology Director",
    industry: "Streaming & Creative Media",
    rating: 5
  },
  {
    id: 6,
    quote: "Pravishree’s agile delivery sprints and round-the-clock technical collaboration have accelerated our enterprise release cycles by months.",
    author: "Cloud Logistics Group",
    role: "VP of Global Operations",
    industry: "Logistics & Supply Chain",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(4); // Default to Digital Media & Streaming (like reference)
  const [isPaused, setIsPaused] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const touchStartX = useRef(null);

  const totalCards = testimonials.length;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setIsReducedMotion(e.matches);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalCards);
  }, [totalCards]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
  }, [totalCards]);

  // Smooth Auto-Rotation every 5.5 seconds (paused on hover / focus)
  useEffect(() => {
    if (isPaused || isReducedMotion) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused, isReducedMotion, handleNext]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    setIsPaused(false);
  };

  // Compute signed position relative to activeIndex (-2, -1, 0, 1, 2)
  const getCardPositionClass = (index) => {
    let diff = index - activeIndex;
    // Wrap around
    if (diff > totalCards / 2) diff -= totalCards;
    if (diff < -totalCards / 2) diff += totalCards;

    if (diff === 0) return 'card-center';
    if (diff === 1) return 'card-right-1';
    if (diff === 2) return 'card-right-2';
    if (diff === -1) return 'card-left-1';
    if (diff === -2) return 'card-left-2';
    return 'card-hidden';
  };

  return (
    <section className="testimonials-section" id="testimonials" aria-label="What Our Clients Say">
      
      {/* Ambient Background Typography */}
      <div className="ambient-watermark-wrap" aria-hidden="true">
        <span className="ambient-watermark-text">
          TRUST
        </span>
      </div>

      <div className="container relative-z">
        
        {/* Centered Section Header */}
        <div className="section-header reveal-line">
          <div className="section-badge">
            <Sparkles size={14} className="text-cyan" /> PARTNER ENDORSEMENTS
          </div>
          <h2 className="section-title">
            <span className="reveal-line reveal-line-delay-1">What Our</span>
            <span className="reveal-line reveal-line-delay-2 text-gradient">Clients Say</span>
          </h2>
          <p className="section-subtitle reveal-line reveal-line-delay-3">
            Real experiences. Real results.
          </p>
        </div>

        {/* 3D Focus Stage Carousel Container */}
        <div 
          className="testimonials-focus-carousel-wrap"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Arrows */}
          <button 
            type="button"
            className="carousel-nav-arrow arrow-prev"
            onClick={handlePrev}
            aria-label="Previous client review"
          >
            <ChevronLeft size={22} />
          </button>

          <button 
            type="button"
            className="carousel-nav-arrow arrow-next"
            onClick={handleNext}
            aria-label="Next client review"
          >
            <ChevronRight size={22} />
          </button>

          {/* Cards Stage Track */}
          <div className="testimonials-focus-stage">
            {testimonials.map((item, index) => {
              const posClass = getCardPositionClass(index);
              const isCenter = posClass === 'card-center';

              return (
                <article 
                  key={item.id}
                  className={`testimonial-focus-card glass-card ${posClass}`}
                  onClick={() => !isCenter && setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => {
                    setActiveIndex(index);
                    setIsPaused(true);
                  }}
                  onBlur={() => setIsPaused(false)}
                  tabIndex={0}
                  role="article"
                  aria-label={`Testimonial from ${item.author} ${isCenter ? '(Active Focus)' : ''}`}
                >
                  {/* Card Header: Quote Icon Badge & 5 Star Rating */}
                  <div className="focus-card-header">
                    <div className={`focus-quote-badge ${isCenter ? 'badge-active' : ''}`}>
                      <Quote size={22} />
                    </div>
                    <div className="focus-stars-rating" aria-label={`${item.rating} out of 5 stars`}>
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={15} className="star-gold" fill="#F59E0B" color="#F59E0B" />
                      ))}
                    </div>
                  </div>

                  {/* Quote Body */}
                  <blockquote className="focus-quote-body">
                    "{item.quote}"
                  </blockquote>

                  {/* Card Footer: Divider, Author & Verification Badge */}
                  <div className="focus-card-footer">
                    <div className="focus-divider-line">
                      <span className="focus-divider-dot"></span>
                    </div>

                    <div className="focus-author-block">
                      <h4 className="focus-author-name">{item.author}</h4>
                      <span className="focus-author-role">{item.role}</span>
                    </div>

                    <div className="focus-badges-row">
                      <div className="focus-industry-pill">
                        <ShieldCheck size={13} className="text-teal" />
                        <span>{item.industry}</span>
                      </div>
                      <div className="focus-verified-stamp">
                        <CheckCircle2 size={13} className="text-cyan" />
                        <span>Verified Client Collaboration</span>
                      </div>
                    </div>
                  </div>

                </article>
              );
            })}
          </div>

          {/* Pagination Indicator Dots */}
          <div className="carousel-pagination-dots" role="tablist" aria-label="Review pagination">
            {testimonials.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                className={`pagination-dot ${dotIdx === activeIndex ? 'is-active' : ''}`}
                onClick={() => setActiveIndex(dotIdx)}
                aria-label={`Go to review ${dotIdx + 1}`}
                role="tab"
                aria-selected={dotIdx === activeIndex}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}


