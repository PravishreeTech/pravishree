import React from 'react';
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
    icon: HeartHandshake,
    color: '#0077B6',
    align: 'left'
  },
  {
    num: '02',
    title: 'End-to-End Solutions',
    desc: 'From concept and design to development, marketing and support, we bring multiple capabilities under one roof.',
    icon: Layers,
    color: '#0B3B60',
    align: 'right'
  },
  {
    num: '03',
    title: 'Innovation Driven',
    desc: 'We combine technology and creativity to build solutions that help businesses stay ahead.',
    icon: Sparkles,
    color: '#0096C7',
    align: 'left'
  },
  {
    num: '04',
    title: 'Scalable Solutions',
    desc: 'Our solutions are designed to grow alongside your business and evolving requirements.',
    icon: TrendingUp,
    color: '#0F766E',
    align: 'right'
  },
  {
    num: '05',
    title: 'Quality Focused',
    desc: 'We focus on reliability, usability, performance and delivering meaningful business value.',
    icon: ShieldCheck,
    color: '#0284C7',
    align: 'left'
  },
  {
    num: '06',
    title: 'Long-Term Partnership',
    desc: "We don't just deliver a project—we aim to become a technology partner for your continued growth.",
    icon: Award,
    color: '#07263F',
    align: 'right'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-section" id="why-us">
      
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

        {/* 6 Alternating Editorial Cards Grid */}
        <div className="why-editorial-grid">
          {whyItems.map((item, index) => {
            const IconComp = item.icon;
            const revealClass = item.align === 'left' ? 'reveal-slide-left' : 'reveal-slide-right';
            const delay = `${(index % 2) * 100}ms`;

            return (
              <div 
                key={item.num} 
                className={`why-item-card glass-card ${revealClass}`}
                style={{ transitionDelay: delay }}
              >
                <div className="why-card-top-row">
                  <span className="why-item-num" style={{ color: item.color }}>
                    {item.num}
                  </span>
                  <div className="why-icon-bubble" style={{ background: `${item.color}15`, color: item.color }}>
                    <IconComp size={22} />
                  </div>
                </div>

                <h3 className="why-item-title">{item.title}</h3>
                <p className="why-item-desc">{item.desc}</p>

                <div className="why-item-footer">
                  <CheckCircle2 size={15} style={{ color: item.color }} />
                  <span>Engineered for Reliability</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

