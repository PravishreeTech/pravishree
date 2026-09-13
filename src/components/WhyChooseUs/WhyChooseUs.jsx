import React, { useState, useEffect } from 'react';
import { 
  HeartHandshake, 
  Layers, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  Award, 
  CheckCircle2
} from 'lucide-react';
import './WhyChooseUs.css';

const whyItems = [
  {
    num: '01',
    title: 'Client First',
    desc: 'We begin by understanding your goals, challenges and vision before designing the right solution.',
    tag: 'Client-Aligned Strategy',
    icon: HeartHandshake,
    accentColor: '#00D9FF'
  },
  {
    num: '02',
    title: 'End-to-End Solutions',
    desc: 'From concept and design to development, marketing and support, we bring multiple capabilities under one roof.',
    tag: 'Full-Lifecycle Delivery',
    icon: Layers,
    accentColor: '#0077B6'
  },
  {
    num: '03',
    title: 'Innovation Driven',
    desc: 'We combine technology and creativity to build solutions that help businesses stay ahead.',
    tag: 'Creative Technology',
    icon: Sparkles,
    accentColor: '#19E6D0'
  },
  {
    num: '04',
    title: 'Scalable Solutions',
    desc: 'Our solutions are designed to grow alongside your business and evolving requirements.',
    tag: 'Elastic Architecture',
    icon: TrendingUp,
    accentColor: '#00D9FF'
  },
  {
    num: '05',
    title: 'Quality Focused',
    desc: 'We focus on reliability, usability, performance and delivering meaningful business value.',
    tag: 'Zero-Compromise QA',
    icon: ShieldCheck,
    accentColor: '#0077B6'
  },
  {
    num: '06',
    title: 'Long-Term Partnership',
    desc: 'We do not just deliver a project—we aim to become a technology partner for your continued growth.',
    tag: 'Strategic Growth Partner',
    icon: Award,
    accentColor: '#19E6D0'
  }
];

export default function WhyChooseUs() {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setIsReducedMotion(e.matches);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  // Duplicate items array to create seamless infinite loop
  const displayItems = isReducedMotion ? whyItems : [...whyItems, ...whyItems];

  return (
    <section className="why-choose-section" id="why-us" aria-label="Why Choose Pravishree Design Co.">
      
      {/* Ambient Background Typography */}
      <div className="ambient-watermark-wrap" aria-hidden="true">
        <span className="ambient-watermark-text">
          INNOVATION
        </span>
      </div>

      <div className="container relative-z">
        
        {/* Section Header with Line Reveal */}
        <div className="section-header reveal-line">
          <div className="section-badge">
            <Sparkles size={14} /> The Pravishree Difference
          </div>
          <h2 className="section-title">
            <span className="reveal-line reveal-line-delay-1">Why</span>
            <span className="reveal-line reveal-line-delay-2 text-gradient">Pravishree?</span>
          </h2>
          <p className="section-subtitle reveal-line reveal-line-delay-3">
            Engineered with deep technical discipline, client-aligned collaboration, and an unwavering commitment to quality.
          </p>
        </div>

      </div>

      {/* Full-Width Smooth Auto-Scrolling Viewport with Gradient Edge Masks */}
      <div 
        className={`why-marquee-viewport ${isReducedMotion ? 'reduced-motion' : ''}`}
        tabIndex={0}
        aria-label="Why Pravishree Highlights Carousel"
      >
        <div className="why-marquee-track">
          {displayItems.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div 
                key={`${item.num}-${index}`} 
                className="why-scrolling-box glass-card"
                tabIndex={0}
                role="article"
                aria-label={`${item.num} ${item.title}`}
              >
                {/* Top Row: Number, Pill Tag & Icon */}
                <div className="scrolling-box-top">
                  <div className="box-num-badge">
                    <span className="box-num-val">{item.num}</span>
                  </div>

                  <div 
                    className="box-icon-wrap" 
                    style={{ 
                      background: `${item.accentColor}18`, 
                      borderColor: `${item.accentColor}40` 
                    }}
                  >
                    <IconComp size={20} style={{ color: item.accentColor }} />
                  </div>
                </div>

                {/* Tagline Pill */}
                <div className="box-tag-pill">
                  <span className="box-tag-dot" style={{ background: item.accentColor }}></span>
                  <span>{item.tag}</span>
                </div>

                {/* Body: Title & Description */}
                <div className="scrolling-box-body">
                  <h3 className="box-title">{item.title}</h3>
                  <p className="box-desc">{item.desc}</p>
                </div>

                {/* Bottom Divider & Assurance Stamp */}
                <div className="scrolling-box-footer">
                  <div className="box-footer-line">
                    <span className="box-footer-dot" style={{ background: item.accentColor }}></span>
                  </div>
                  <div className="box-assurance-badge">
                    <CheckCircle2 size={14} style={{ color: item.accentColor }} />
                    <span>Pravishree Standard</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}


