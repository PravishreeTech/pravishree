import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Clock, 
  Users, 
  Lock, 
  Sparkles, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const advantages = [
    {
      icon: ShieldCheck,
      title: 'Enterprise Grade Reliability',
      desc: 'ISO 27001, SOC2, and HIPAA certified workflows with strict data confidentiality and zero-leakage policies.',
      color: '#0077B6'
    },
    {
      icon: Zap,
      title: 'High Velocity Execution',
      desc: 'Rapid sprint cycles, agile workflows, and cutting-edge WebGL & React tech stacks that accelerate time-to-market.',
      color: '#0096C7'
    },
    {
      icon: Clock,
      title: '24/7 Global Multi-Shift Delivery',
      desc: 'Round-the-clock synchronous support for North America, Europe, and Asia-Pacific timezones without interruption.',
      color: '#0F766E'
    },
    {
      icon: Users,
      title: 'Dedicated Domain Specialists',
      desc: 'Elite cross-functional teams with deep expertise across engineering, UI/UX, video post-production, and BPO operations.',
      color: '#0284C7'
    }
  ];

  const techStack = [
    'React', 'Next.js 15', 'TypeScript', 'Node.js', 'Python', 'Three.js / WebGL', 
    'Flutter', 'AWS', 'Docker', 'PostgreSQL', 'Figma', 'DaVinci Resolve', 
    'Adobe Premiere', 'After Effects', 'HIPAA RCM', 'AI Data Annotation'
  ];

  return (
    <section className="why-choose-section">
      <div className="container">
        
        {/*  Section Header  */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} /> Competitive Advantage
          </div>
          <h2 className="section-title">
            Why Forward-Thinking Leaders <br />
            <span className="text-gradient">Choose Pravishree Design Co.</span>
          </h2>
          <p className="section-subtitle">
            We deliver the agility of a specialized studio combined with the scalability and security of an enterprise tech firm.
          </p>
        </div>

        {/*  4 Key Advantages Grid  */}
        <div className="advantages-grid">
          {advantages.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="advantage-card glass-card">
                <div className="advantage-icon-box" style={{ background: `${item.color}15`, color: item.color }}>
                  <IconComponent size={26} />
                </div>
                <h3 className="advantage-title">{item.title}</h3>
                <p className="advantage-desc">{item.desc}</p>
                <div className="advantage-check">
                  <CheckCircle size={15} style={{ color: item.color }} />
                  <span>Guaranteed SLA Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/*  Technology Stack Ticker Banner  */}
        <div className="tech-stack-banner">
          <div className="tech-stack-header">
            <span className="tech-stack-title">Powering Your Business With Modern Technology:</span>
          </div>
          <div className="tech-stack-chips">
            {techStack.map((tech, i) => (
              <span key={i} className="tech-chip">{tech}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
