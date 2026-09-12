import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './TopHeroShowcase.css';

const bannerImages = [
  { 
    id: '01', 
    image: '/assets/slide-1.png', 
    tag: 'End-to-End Solutions',
    title: 'Your Trusted Partner For All Your Digital & Business Solutions',
    alt: 'Pravishree - End-to-End Solutions to Empower Your Business' 
  },
  { 
    id: '02', 
    image: '/assets/slide-2.jpg', 
    tag: 'Creative Design & Visuals',
    title: 'Creative Designs. Stunning Visuals. Powerful Impact.',
    alt: 'Pravishree - Creative Designs, Video Editing & Visual Identity' 
  },
  { 
    id: '03', 
    image: '/assets/slide-3.svg', 
    tag: 'Web & Application Development',
    title: 'Modern, responsive and high-performance digital experiences.',
    alt: 'Pravishree Fullscreen Banner 3 - Web & App Development' 
  },
  { 
    id: '04', 
    image: '/assets/slide-4.svg', 
    tag: 'Creative Design',
    title: 'Turning brands and ideas into memorable visual experiences.',
    alt: 'Pravishree Fullscreen Banner 4 - Creative Design' 
  },
  { 
    id: '05', 
    image: '/assets/slide-5.jpg', 
    tag: 'Web & App Development',
    title: 'Web & App Development and Custom Software Design',
    alt: 'Pravishree - Web & App Development and Custom Software Design' 
  },
  { 
    id: '06', 
    image: '/assets/slide-6.svg', 
    tag: 'Business Solutions',
    title: 'Technology and support solutions built for real-world business needs.',
    alt: 'Pravishree Fullscreen Banner 6 - Business Solutions' 
  },
];

export default function TopHeroShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Restart 8-second autoplay timer
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 8000);
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

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="fullscreen-banner-slideshow-section" id="hero">
      
      {/* Fullscreen Banner Slideshow Viewport */}
      <div 
        className="fullscreen-slideshow-viewport"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="fullscreen-slideshow-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {bannerImages.map((banner, idx) => (
            <div key={banner.id} className="fullscreen-slide-item">
              <img 
                src={banner.image} 
                alt={banner.alt} 
                className="fullscreen-banner-img"
                loading={idx === 0 ? "eager" : "lazy"}
              />
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

