import React, { useState } from 'react';
import { 
  PenTool, 
  Video, 
  Code2, 
  Smartphone, 
  TrendingUp, 
  Headphones, 
  ArrowRight, 
  CheckCircle, 
  MapPin, 
  Globe2, 
  Sparkles,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import './ServicesSection.css';

export default function ServicesSection({ onSelectService }) {
  const [selectedService, setSelectedService] = useState(null);

  const iconMap = {
    PenTool,
    Video,
    Code2,
    Smartphone,
    TrendingUp,
    Headphones
  };

  return (
    <section className="services-section" id="services">
      <div className="container">
        
        {/*  Section Header  */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} /> Full-Spectrum Solutions
          </div>
          <h2 className="section-title">
            Enterprise Services &amp; <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="section-subtitle">
            From creative brand systems and high-speed software development to round-the-clock global BPO operations.
          </p>
        </div>

        {/*  Services Grid  */}
        <div className="services-main-grid">
          {servicesData.map((service) => {
            const IconComp = iconMap[service.iconName] || Code2;
            const isBpo = service.isBpo;

            return (
              <div 
                key={service.id}
                id={`services-${service.id}`}
                className={`service-card ${isBpo ? 'bpo-featured-card' : ''}`}
              >
                {/*  Card Header  */}
                <div className="service-card-top">
                  <div className="service-icon-wrap" style={{ background: `${service.accentColor}18`, color: service.accentColor }}>
                    <IconComp size={26} />
                  </div>
                  <span className="service-badge-pill" style={{ color: service.accentColor, borderColor: `${service.accentColor}40` }}>
                    {service.badge}
                  </span>
                </div>

                {/*  Title & Summary  */}
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.shortDesc}</p>

                {/*  If BPO: Sub-Tabs for Domestic & International  */}
                {isBpo && service.subServices ? (
                  <div className="bpo-subservices-grid">
                    {service.subServices.map((sub) => (
                      <div key={sub.id} id={`services-${sub.id}`} className="bpo-sub-box">
                        <div className="bpo-sub-title-row">
                          {sub.id === 'domestic-bpo' ? <MapPin size={16} className="text-teal" /> : <Globe2 size={16} className="text-cyan" />}
                          <h4>{sub.name}</h4>
                        </div>
                        <p className="bpo-sub-desc">{sub.desc}</p>
                        <div className="bpo-tag-list">
                          {sub.tags.map((tag, idx) => (
                            <span key={idx} className="bpo-mini-tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="service-feature-list">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex}>
                        <CheckCircle size={15} style={{ color: service.accentColor, flexShrink: 0 }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/*  Card Footer CTA  */}
                <div className="service-card-footer">
                  <a 
                    href="#contact" 
                    className="service-cta-link"
                    onClick={() => {
                      if (onSelectService) onSelectService(service.title);
                    }}
                  >
                    <span>Request Proposal</span>
                    <ArrowRight size={15} />
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
