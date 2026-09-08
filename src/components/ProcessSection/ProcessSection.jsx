import React, { useState } from 'react';
import { 
  Compass, 
  Lightbulb, 
  PenTool, 
  Code2, 
  Rocket, 
  TrendingUp, 
  Sparkles 
} from 'lucide-react';
import './ProcessSection.css';

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We understand your business, goals, audience and challenges.',
    icon: Compass,
    color: '#0077B6',
    detail: 'Comprehensive stakeholder workshops, objective alignment, and technical discovery.'
  },
  {
    num: '02',
    title: 'Strategize',
    desc: 'We define the right technology, creative direction and execution strategy.',
    icon: Lightbulb,
    color: '#0096C7',
    detail: 'Solution architecture roadmap, sprint cadence planning, and design language blueprints.'
  },
  {
    num: '03',
    title: 'Design',
    desc: 'We transform ideas into intuitive interfaces and engaging experiences.',
    icon: PenTool,
    color: '#0F766E',
    detail: 'High-fidelity Figma prototypes, interactive motion systems, and brand asset creation.'
  },
  {
    num: '04',
    title: 'Develop',
    desc: 'Our team builds, integrates and tests the solution with a focus on quality and performance.',
    icon: Code2,
    color: '#0B3B60',
    detail: 'Full-stack agile coding, continuous integration, security checks, and QA benchmark tests.'
  },
  {
    num: '05',
    title: 'Launch',
    desc: 'We deploy the final solution and make it ready for real-world users.',
    icon: Rocket,
    color: '#0284C7',
    detail: 'Seamless production deployment, DNS configuration, stress testing, and go-live launch.'
  },
  {
    num: '06',
    title: 'Grow',
    desc: 'We provide ongoing improvements, support and digital strategies as your business evolves.',
    icon: TrendingUp,
    color: '#10B981',
    detail: '24/7 SLA operational support, performance analytics, and continuous feature expansion.'
  }
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="process-section" id="how-we-work">
      
      {/* Ambient Background Typography */}
      <div className="ambient-watermark-wrap" aria-hidden="true">
        <span className="ambient-watermark-text" style={{ top: '2.5%', left: '3%' }}>
          Workflow
        </span>
      </div>

      <div className="container relative-z">
        
        {/* Section Header with Line Reveal */}
        <div className="section-header reveal-line">
          <div className="section-badge">
            <Sparkles size={14} /> Agile Lifecycle
          </div>
          <h2 className="section-title">
            <span className="reveal-line reveal-line-delay-1">How We</span>
            <span className="reveal-line reveal-line-delay-2 text-gradient">Work</span>
          </h2>
          <p className="section-subtitle reveal-line reveal-line-delay-3">
            A disciplined, transparent journey from initial ideation to production launch and sustained digital growth.
          </p>
        </div>

        {/* Desktop Horizontal Cinematic Timeline & Step Cards */}
        <div className="process-timeline-wrapper">
          
          {/* Progress Connecting Line */}
          <div className="timeline-progress-track" aria-hidden="true">
            <div 
              className="timeline-progress-fill" 
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          {/* Step Indicators Row */}
          <div className="timeline-steps-nav">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isActive = activeStep === idx;
              const isPassed = activeStep >= idx;

              return (
                <button
                  key={step.num}
                  className={`timeline-step-node ${isActive ? 'is-active' : ''} ${isPassed ? 'is-passed' : ''}`}
                  onClick={() => setActiveStep(idx)}
                  aria-label={`Step ${step.num}: ${step.title}`}
                >
                  <div className="step-node-bubble" style={{ borderColor: step.color }}>
                    <span className="step-node-number">{step.num}</span>
                    <IconComp size={16} className="step-node-icon" />
                  </div>
                  <span className="step-node-title">{step.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Highlight Card Detail (Desktop) */}
          <div className="process-active-card glass-card reveal-scale">
            <div className="process-active-header">
              <div className="active-num-badge" style={{ background: `${steps[activeStep].color}15`, color: steps[activeStep].color }}>
                Step {steps[activeStep].num}
              </div>
              <h3 className="active-step-title">{steps[activeStep].title}</h3>
            </div>
            <p className="active-step-lead">{steps[activeStep].desc}</p>
            <p className="active-step-detail">{steps[activeStep].detail}</p>
          </div>

        </div>

        {/* Full 6-Step Grid for Scannability / Mobile Vertical Stack */}
        <div className="process-cards-grid">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            const staggerDelay = `${idx * 80}ms`;

            return (
              <div 
                key={step.num} 
                className={`process-step-card glass-card reveal-stagger-card ${activeStep === idx ? 'highlighted' : ''}`}
                style={{ transitionDelay: staggerDelay }}
                onClick={() => setActiveStep(idx)}
              >
                <div className="process-card-top">
                  <span className="process-step-num" style={{ color: step.color }}>{step.num}</span>
                  <div className="process-icon-box" style={{ background: `${step.color}15`, color: step.color }}>
                    <IconComp size={20} />
                  </div>
                </div>
                <h4 className="process-step-title">{step.title}</h4>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
