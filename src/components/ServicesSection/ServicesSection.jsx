import React from 'react';
import { 
  Globe, 
  Code2, 
  Smartphone, 
  TrendingUp, 
  Headphones, 
  Film,
  ArrowRight, 
  CheckCircle, 
  Sparkles 
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import './ServicesSection.css';

const iconMap = {
  Globe,
  Code2,
  Smartphone,
  TrendingUp,
  Headphones,
  Film
};

export default function ServicesSection({ onSelectService }) {
  return (
    <section className="services-section" id="services">
      
      {/* Ambient Background Typography */}
      <div className="ambient-watermark-wrap" aria-hidden="true">
        <span className="ambient-watermark-text" style={{ top: '2.5%', left: '3%' }}>
          Services
        </span>
      </div>

      <div className="container relative-z">
        
        {/* Section Header with Line Reveal */}
        <div className="section-header reveal-line">
          <div className="section-badge">
            <Sparkles size={14} /> Comprehensive Capabilities
          </div>
          <h2 className="section-title">
            <span className="reveal-line reveal-line-delay-1">Our Services</span>
          </h2>
          <p className="section-subtitle reveal-line reveal-line-delay-2">
            Technology, creativity and business solutions designed to help organizations move forward.
          </p>
        </div>

        {/* 8 Premium Services Grid with Staggered Entrance */}
        <div className="services-main-grid">
          {servicesData.map((service, index) => {
            const IconComp = iconMap[service.iconName] || Code2;
            const staggerDelay = `${index * 90}ms`;

            return (
              <div 
                key={service.id}
                id={`services-${service.id}`}
                className="service-card reveal-stagger-card"
                style={{ transitionDelay: staggerDelay }}
              >
                {/* Top Badge & Number */}
                <div className="service-card-top">
                  <div className="service-icon-wrap" style={{ background: `${service.accentColor}15`, color: service.accentColor }}>
                    <IconComp size={24} />
                  </div>
                  <div className="service-top-meta">
                    <span className="service-number-tag">{service.num}</span>
                    <span className="service-badge-pill" style={{ color: service.accentColor, borderColor: `${service.accentColor}35` }}>
                      {service.badge}
                    </span>
                  </div>
                </div>

                {/* Title & Summary */}
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.shortDesc}</p>

                {/* Features Bullet List */}
                <ul className="service-feature-list">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <CheckCircle size={14} style={{ color: service.accentColor, flexShrink: 0 }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Footer CTA */}
                <div className="service-card-footer">
                  <a 
                    href="#contact" 
                    className="service-cta-link"
                    onClick={() => {
                      if (onSelectService) onSelectService(service.title);
                    }}
                  >
                    <span>Request Proposal</span>
                    <ArrowRight size={15} className="service-arrow-icon" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

