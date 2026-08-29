import React, { useState } from 'react';
import { 
  Target, 
  Compass, 
  Building2, 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  Users, 
  Zap, 
  Globe2, 
  TrendingUp 
} from 'lucide-react';
import './AboutSection.css';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('about');

  const tabContents = {
    about: {
      title: 'About Pravishree Design Co.',
      subtitle: 'A Tech Solution Firm Engineered for Impact',
      icon: Building2,
      color: '#0077B6',
      content: (
        <>
          <p>
            <strong>Pravishree Design Co.</strong> is a high-growth technology solutions and digital innovation firm. 
            We bridge the gap between creative visual artistry, resilient full-stack software engineering, and 
            operational BPO execution.
          </p>
          <p>
            Founded by industry veterans, our multidisciplinary team collaborates with startups, mid-market leaders, 
            and global enterprises across North America, Europe, and Asia to engineer digital products that scale smoothly.
          </p>
          <div className="about-metrics-grid">
            <div className="about-metric-card">
              <span className="metric-val">100%</span>
              <span className="metric-lbl">On-Time Delivery</span>
            </div>
            <div className="about-metric-card">
              <span className="metric-val">500+</span>
              <span className="metric-lbl">Global Projects</span>
            </div>
            <div className="about-metric-card">
              <span className="metric-val">24/7</span>
              <span className="metric-lbl">Dedicated Support</span>
            </div>
          </div>
        </>
      )
    },
    mission: {
      title: 'Our Purpose & Mission',
      subtitle: 'Empowering Businesses with Scalable Digital Transformation',
      icon: Target,
      color: '#0096C7',
      content: (
        <>
          <p>
            Our mission is to deliver comprehensive, high-velocity technology and creative solutions that empower businesses 
            to solve complex problems, accelerate revenue growth, and create memorable customer experiences.
          </p>
          <ul className="about-bullet-list">
            <li>
              <CheckCircle2 size={18} className="text-cyan" />
              <span>Deliver reliable, bulletproof web and mobile platforms with state-of-the-art architectures.</span>
            </li>
            <li>
              <CheckCircle2 size={18} className="text-cyan" />
              <span>Set the gold standard for visual identity, video post-production, and interactive digital branding.</span>
            </li>
            <li>
              <CheckCircle2 size={18} className="text-cyan" />
              <span>Provide cost-effective, high-accuracy 24/7 BPO operations that scale dynamically with client needs.</span>
            </li>
          </ul>
        </>
      )
    },
    vision: {
      title: 'Our Global Vision',
      subtitle: 'To Be The World’s Most Trusted Integrated Tech Partner',
      icon: Compass,
      color: '#0F766E',
      content: (
        <>
          <p>
            We envision a connected digital future where modern businesses can seamlessly harness creative design, cloud software, 
            artificial intelligence, and round-the-clock operational bandwidth under a single trusted partner.
          </p>
          <p>
            By combining continuous engineering innovation with rigorous security and SLA standards, we aim to be the premier 
            catalyst for enterprise agility and digital transformation worldwide.
          </p>
          <div className="vision-pillars">
            <div className="pillar-item">
              <ShieldCheck size={20} className="text-teal" />
              <div>
                <strong>Zero-Compromise Security</strong>
                <span>HIPAA, SOC2, and ISO 27001 operational standards.</span>
              </div>
            </div>
            <div className="pillar-item">
              <Zap size={20} className="text-teal" />
              <div>
                <strong>Continuous Innovation</strong>
                <span>Embracing modern WebGL, AI pipelines, and cloud native stacks.</span>
              </div>
            </div>
          </div>
        </>
      )
    }
  };

  const current = tabContents[activeTab];

  return (
    <section className="about-section" id="about">
      <div className="container">
        
        {/*  Section Header  */}
        <div className="section-header">
          <div className="section-badge">
            <Building2 size={14} /> Who We Are
          </div>
          <h2 className="section-title">
            About <span className="text-gradient">Pravishree Design Co.</span>
          </h2>
          <p className="section-subtitle">
            A premier tech solution firm fusing creative brilliance with enterprise software and 24/7 operational delivery.
          </p>
        </div>

        {/*  Interactive Tab Navigation  */}
        <div className="about-tabs-nav" id="mission">
          <button 
            className={`about-tab-btn ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            <Building2 size={18} />
            <span>About Company</span>
          </button>

          <button 
            className={`about-tab-btn ${activeTab === 'mission' ? 'active' : ''}`}
            onClick={() => setActiveTab('mission')}
          >
            <Target size={18} />
            <span>Our Mission</span>
          </button>

          <button 
            className={`about-tab-btn ${activeTab === 'vision' ? 'active' : ''}`}
            onClick={() => setActiveTab('vision')}
            id="vision"
          >
            <Compass size={18} />
            <span>Our Vision</span>
          </button>
        </div>

        {/*  Main Tab Content Box  */}
        <div className="about-content-card glass-card">
          <div className="about-card-left">
            <div className="about-card-header">
              <div className="about-icon-box" style={{ background: `${current.color}18`, color: current.color }}>
                <current.icon size={26} />
              </div>
              <div>
                <h3 className="about-title">{current.title}</h3>
                <span className="about-subtitle">{current.subtitle}</span>
              </div>
            </div>

            <div className="about-body-text">
              {current.content}
            </div>
          </div>

          {/*  Right Visual Graphic Box  */}
          <div className="about-card-right">
            <div className="about-visual-badge">
              <Award size={18} className="text-cyan" />
              <span>Certified Tech Solution Firm</span>
            </div>
            
            <div className="about-feature-cards-stack">
              <div className="feature-stack-card">
                <div className="stack-icon blue"><Zap size={18} /></div>
                <div>
                  <h4>Full-Lifecycle Delivery</h4>
                  <p>Ideation, UX prototyping, agile code sprints to deployment &amp; scaling.</p>
                </div>
              </div>

              <div className="feature-stack-card">
                <div className="stack-icon cyan"><Globe2 size={18} /></div>
                <div>
                  <h4>Global Multi-Timezone Support</h4>
                  <p>Synchronized domestic and international coverage around the clock.</p>
                </div>
              </div>

              <div className="feature-stack-card">
                <div className="stack-icon teal"><ShieldCheck size={18} /></div>
                <div>
                  <h4>Enterprise Data Security</h4>
                  <p>Strict confidentiality, non-disclosure compliance, and encrypted systems.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
