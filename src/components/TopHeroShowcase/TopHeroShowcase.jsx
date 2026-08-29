import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './TopHeroShowcase.css';

const bannerImages = [
  { id: '01', image: '/assets/slide-1.jpg', alt: 'Pravishree Fullscreen Banner 1 - Digital Transformation' },
  { id: '02', image: '/assets/slide-2.jpg', alt: 'Pravishree Fullscreen Banner 2 - Creative & Media' },
  { id: '03', image: '/assets/slide-3.svg', alt: 'Pravishree Fullscreen Banner 3 - Digital Marketing' },
  { id: '04', image: '/assets/slide-4.svg', alt: 'Pravishree Fullscreen Banner 4 - Cloud & DevOps' },
  { id: '05', image: '/assets/slide-5.jpg', alt: 'Pravishree Fullscreen Banner 5 - Web & App Development' },
  { id: '06', image: '/assets/slide-6.svg', alt: 'Pravishree Fullscreen Banner 6 - Global BPO Operations' },
];

export default function TopHeroShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  // Restart 10-second autoplay timer
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 10000); // 10 seconds (10,000 ms)
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    resetTimer();
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
    resetTimer();
  };

  const handleSelectDot = (idx) => {
    setCurrentIndex(idx);
    resetTimer();
  };

  return (
    <section className="fullscreen-banner-slideshow-section" id="hero">
      
      {/* Fullscreen Banner Slideshow Viewport */}
      <div className="fullscreen-slideshow-viewport">
        <div 
          className="fullscreen-slideshow-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {bannerImages.map((banner, idx) => (
            <div key={banner.id} className="fullscreen-slide-item">
              <div className="fullscreen-image-container">
                <img 
                  src={banner.image} 
                  alt={banner.alt} 
                  className="fullscreen-banner-img"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Left Navigation Arrow */}
      <button 
        className="fullscreen-nav-arrow arrow-left" 
        onClick={handlePrev}
        aria-label="Previous banner slide"
      >
        <ChevronLeft size={26} />
      </button>

      {/* Floating Right Navigation Arrow */}
      <button 
        className="fullscreen-nav-arrow arrow-right" 
        onClick={handleNext}
        aria-label="Next banner slide"
      >
        <ChevronRight size={26} />
      </button>

      {/* Bottom Floating Pagination Indicators & Counter */}
      <div className="fullscreen-bottom-controls">
        <div className="fullscreen-pagination-dots">
          {bannerImages.map((b, idx) => (
            <button
              key={b.id}
              className={`fullscreen-dot ${idx === currentIndex ? 'is-active' : ''}`}
              onClick={() => handleSelectDot(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        
        <div className="fullscreen-slide-counter">
          <span>0{currentIndex + 1}</span>
          <span className="counter-sep">/</span>
          <span>0{bannerImages.length}</span>
        </div>
      </div>

    </section>
  );
}
