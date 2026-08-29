import React, { useState, useEffect } from 'react';
import './InitialLoader.css';

export default function InitialLoader({ onComplete }) {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Short, professional loading experience (650ms total)
    const timer1 = setTimeout(() => {
      setIsFadingOut(true);
    }, 650);

    const timer2 = setTimeout(() => {
      setIsRemoved(true);
      if (onComplete) onComplete();
    }, 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  if (isRemoved) return null;

  return (
    <div className={`initial-preloader ${isFadingOut ? 'fade-out' : ''}`} aria-hidden="true">
      <div className="preloader-content">
        <div className="preloader-logo-wrap">
          <img 
            src="/assets/logo-icon.svg" 
            alt="Pravishree Design Co." 
            className="preloader-logo"
          />
        </div>
        <div className="preloader-brand-title">Pravishree Design Co.</div>
        <div className="preloader-progress-bar">
          <div className="preloader-progress-fill"></div>
        </div>
      </div>
    </div>
  );
}
