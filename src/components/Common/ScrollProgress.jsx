import React, { useState, useEffect } from 'react';
import './ScrollProgress.css';

export default function ScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollPercentage(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top subtle bar */}
      <div className="scroll-progress-top-bar" aria-hidden="true">
        <div 
          className="scroll-progress-top-fill" 
          style={{ width: `${scrollPercentage}%` }}
        />
      </div>

      {/* Right Edge Minimal Vertical Indicator */}
      <div className="scroll-progress-vertical-track" aria-hidden="true">
        <div 
          className="scroll-progress-vertical-thumb" 
          style={{ height: `${scrollPercentage}%` }}
        />
      </div>
    </>
  );
}
