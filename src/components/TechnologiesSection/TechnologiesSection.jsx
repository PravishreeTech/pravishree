import React from 'react';
import { 
  Code2, 
  Server, 
  Smartphone, 
  Database, 
  Palette, 
  Briefcase, 
  Cpu 
} from 'lucide-react';
import './TechnologiesSection.css';

const techCategories = [
  {
    id: 'frontend',
    category: 'Web & Frontend',
    icon: Code2,
    color: '#0077B6',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Web Design']
  },
  {
    id: 'backend',
    category: 'Backend & Software',
    icon: Server,
    color: '#0B3B60',
    items: ['Node.js', 'Python', 'PHP', 'REST APIs']
  },
  {
    id: 'mobile',
    category: 'Mobile',
    icon: Smartphone,
    color: '#0096C7',
    items: ['Android', 'iOS', 'Cross-Platform Development']
  },
  {
    id: 'database',
    category: 'Database',
    icon: Database,
    color: '#0F766E',
    items: ['MySQL', 'MongoDB', 'Database Management']
  },
  {
    id: 'design',
    category: 'Design & Creative',
    icon: Palette,
    color: '#0284C7',
    items: ['UI/UX', 'Graphic Design', '2D Animation', '3D Animation', 'Multimedia']
  },
  {
    id: 'business',
    category: 'Business & Collaboration',
    icon: Briefcase,
    color: '#07263F',
    items: ['Salesforce', 'Zendesk', 'Slack', 'Zoom']
  }
];

export default function TechnologiesSection() {
  return (
    <section className="technologies-section" id="technologies">
      
      {/* Ambient Background Typography */}
      <div className="ambient-watermark-wrap" aria-hidden="true">
        <span className="ambient-watermark-text" style={{ top: '2.5%', right: '3%' }}>
          Technology
        </span>
      </div>

      <div className="container relative-z">
        
        {/* Section Header with Line Reveal */}
        <div className="section-header reveal-line">
          <div className="section-badge">
            <Cpu size={14} /> Modern Tech Stack
          </div>
          <h2 className="section-title">
            <span className="reveal-line reveal-line-delay-1">Technologies That Power</span>
            <span className="reveal-line reveal-line-delay-2 text-gradient">Our Solutions</span>
          </h2>
          <p className="section-subtitle reveal-line reveal-line-delay-3">
            Engineered with battle-tested frameworks, modern architectures, and enterprise creative tools.
          </p>
        </div>

        {/* 6 Categorized Tech Cards Grid */}
        <div className="tech-categories-grid">
          {techCategories.map((cat, idx) => {
            const IconComp = cat.icon;
            const staggerDelay = `${idx * 100}ms`;

            return (
              <div 
                key={cat.id} 
                className="tech-category-card glass-card reveal-stagger-card"
                style={{ transitionDelay: staggerDelay }}
              >
                {/* Category Header */}
                <div className="tech-cat-header">
                  <div className="tech-icon-wrap" style={{ background: `${cat.color}15`, color: cat.color }}>
                    <IconComp size={22} />
                  </div>
                  <h3 className="tech-cat-title">{cat.category}</h3>
                </div>

                {/* Staggered Chips */}
                <div className="tech-chips-list">
                  {cat.items.map((item, itemIdx) => (
                    <span 
                      key={itemIdx} 
                      className="tech-item-pill"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
