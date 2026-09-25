import React, { useEffect, useRef } from 'react';
import { Code2, ArrowRight, X } from 'lucide-react';
import './CareersPage.css';

export default function DevNoOpeningsModal({ isOpen, onClose }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Auto-focus the action button when modal opens
    const timer = setTimeout(() => {
      buttonRef.current?.focus();
    }, 50);

    // Escape key listener
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="dev-modal-backdrop" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dev-modal-heading"
      aria-describedby="dev-modal-message"
    >
      <div 
        className="dev-modal-card" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button in Top Corner */}
        <button 
          type="button"
          className="dev-modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Ambient Top Subtle Glow */}
        <div className="dev-modal-glow" aria-hidden="true" />

        {/* Development Icon */}
        <div className="dev-modal-icon-container">
          <Code2 size={24} className="dev-modal-icon" />
        </div>

        {/* Eyebrow */}
        <span className="dev-modal-eyebrow">CAREER OPPORTUNITY</span>

        {/* Main Heading */}
        <h3 id="dev-modal-heading" className="dev-modal-heading">
          No Current Openings
        </h3>

        {/* Message */}
        <p id="dev-modal-message" className="dev-modal-message">
          There are currently no open positions for the Development role. We may recruit for this role in the future. Please check back later for new opportunities.
        </p>

        {/* Action Button */}
        <button
          ref={buttonRef}
          type="button"
          className="dev-modal-action-btn"
          onClick={onClose}
        >
          <span>Got it</span>
          <ArrowRight size={16} className="dev-modal-btn-arrow" />
        </button>
      </div>
    </div>
  );
}
