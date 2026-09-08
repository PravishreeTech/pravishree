import React from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  Sparkles 
} from 'lucide-react';
import './FinalCTASection.css';

export default function FinalCTASection() {
  return (
    <section className="final-cta-section" id="cta">
      
      {/* Ambient Radial Mesh Glow */}
      <div className="cta-radial-glow glow-1" aria-hidden="true"></div>
      <div className="cta-radial-glow glow-2" aria-hidden="true"></div>

      <div className="container relative-z">
        <div className="final-cta-card glass-card reveal-scale">
          
          <div className="cta-badge reveal-line">
            <Sparkles size={14} className="text-cyan" />
            <span>Ready To Scale?</span>
          </div>

          <h2 className="cta-headline reveal-line reveal-line-delay-1">
            Let's Build Something <br />
            <span className="text-gradient">Extraordinary Together.</span>
          </h2>

          <p className="cta-lead-desc reveal-line reveal-line-delay-2">
            Have an idea, a challenge or a business goal? Let's turn it into a powerful digital solution.
          </p>

          <div className="cta-button-group reveal-line reveal-line-delay-3">
            <a href="#contact" className="btn-primary cta-btn-glow">
              <span>Start a Project</span>
              <ArrowRight size={18} className="btn-arrow-icon" />
            </a>

            <a href="#contact" className="btn-secondary cta-btn-outline">
              <MessageSquare size={17} />
              <span>Talk to Our Team</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
