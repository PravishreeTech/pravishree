import React, { useState } from 'react';
import { 
  Sparkles, 
  Award, 
  ShieldCheck, 
  Zap, 
  Globe2, 
  ArrowRight,
  Eye,
  Target,
  Building2
} from 'lucide-react';
import './AboutSection.css';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tab) => {
    setActiveTab(prev => prev === tab ? null : tab);
  };

  const cardStats = [
    { value: '100%', label: 'ON-TIME DELIVERY' },
    { value: '500+', label: 'GLOBAL PROJECTS' },
    { value: '24/7', label: 'DEDICATED SUPPORT' },
  ];

  return (
    <section className="about-section" id="about">
      
      {/* Ambient Background Typography */}
      <div className="ambient-watermark-wrap" aria-hidden="true">
        <span className="ambient-watermark-text">
          POSSIBILITIES
        </span>
      </div>

      <div className="container relative-z">
        
        {/* ===================================================================
           1. CENTERED HERO COMPOSITION
           =================================================================== */}
        <div className="about-hero-centered reveal-line">
          
          {/* Top Label Pill */}
          <div className="section-badge hero-pill">
            <Sparkles size={14} className="text-cyan" />
            <span>WHO WE ARE</span>
          </div>

          {/* Main Two-Line Centered Heading */}
          <h2 className="about-hero-title">
            <span className="reveal-line-delay-1">More Than Technology.</span>
            <span className="reveal-line-delay-2 text-gradient">We Build Possibilities.</span>
          </h2>

          {/* Short Description */}
          <p className="about-hero-desc reveal-line-delay-3">
            Pravishree is a technology solution firm focused on helping businesses turn ideas into innovative, scalable and meaningful digital solutions.
          </p>

          {/* Vision + Mission Buttons */}
          <div className="about-hero-buttons">
            <button
              type="button"
              className={`hero-vm-btn btn-vision ${activeTab === 'vision' ? 'is-active' : ''}`}
              onClick={() => toggleTab('vision')}
              aria-expanded={activeTab === 'vision'}
            >
              <Eye size={16} className="vm-icon" />
              <span>OUR VISION</span>
              <ArrowRight size={15} className="vm-arrow" />
            </button>

            <button
              type="button"
              className={`hero-vm-btn btn-mission ${activeTab === 'mission' ? 'is-active' : ''}`}
              onClick={() => toggleTab('mission')}
              aria-expanded={activeTab === 'mission'}
            >
              <Target size={16} className="vm-icon" />
              <span>OUR MISSION</span>
              <ArrowRight size={15} className="vm-arrow" />
            </button>
          </div>

          {/* Inline Vision / Mission Content Drawer */}
          {activeTab && (
            <div className="hero-vm-panel">
              <div className="hero-vm-panel-inner">
                <div className="hero-vm-badge">
                  {activeTab === 'vision' ? <Eye size={15} /> : <Target size={15} />}
                  <span>{activeTab === 'vision' ? 'OUR VISION' : 'OUR MISSION'}</span>
                </div>
                <p className="hero-vm-text">
                  {activeTab === 'vision' 
                    ? "Our vision is to create meaningful digital solutions that combine technology, creativity and business understanding to help organizations grow with confidence."
                    : "Our mission is to deliver practical, scalable and reliable technology solutions that solve real business challenges and create lasting value for our clients."
                  }
                </p>
              </div>
            </div>
          )}

        </div>

        {/* ===================================================================
           2. MAIN ABOUT PRAVISHREE DESIGN CO. WHITE CARD SECTION BELOW HERO
           =================================================================== */}
        <div className="about-detailed-layout">
          
          {/* Left Column: Simplified Narrative Card */}
          <div className="about-narrative-col reveal-slide-left">
            <div className="about-paragraph-card glass-card">
              
              {/* Card Header & Subtitle */}
              <div className="about-card-header">
                <div className="about-card-title-row">
                  <Building2 size={20} className="title-building-icon" />
                  <h3 className="about-card-title">About Pravishree Design Co.</h3>
                </div>
                <p className="about-card-subtitle">
                  A Tech Solution Firm Engineered for Impact
                </p>
                <div className="about-card-divider"></div>
              </div>

              {/* Two Concise Paragraphs Only */}
              <p className="about-concise-text">
                Pravishree Design Co. is a high-growth technology solutions and digital innovation firm. We bridge the gap between creative visual artistry, resilient full-stack software engineering, and operational BPO execution.
              </p>
              <p className="about-concise-text">
                Founded by industry veterans, our multidisciplinary team collaborates with startups, mid-market leaders, and global enterprises across North America, Europe, and Asia to engineer digital products that scale smoothly.
              </p>

              {/* Three Statistics Grid inside Left Card */}
              <div className="about-card-stats-row">
                {cardStats.map((stat, idx) => (
                  <div key={idx} className="card-stat-pill">
                    <span className="card-stat-val">{stat.value}</span>
                    <span className="card-stat-lbl">{stat.label}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Right Column: Certified Tech Solution Firm Panel */}
          <div className="about-visual-col reveal-slide-right">
            
            {/* Supporting Visual Card */}
            <div className="about-visual-preview-card glass-card reveal-clip">
              <div className="about-visual-header">
                <div className="about-visual-badge-pill">
                  <Award size={15} className="text-cyan" />
                  <span>CERTIFIED TECH SOLUTION FIRM</span>
                </div>
                <span className="about-visual-tag">Visakhapatnam, India</span>
              </div>

              {/* Capability Stack */}
              <div className="about-feature-stack">
                <div className="feature-stack-item">
                  <div className="feature-item-icon"><Zap size={18} /></div>
                  <div className="feature-item-info">
                    <h4>Full-Lifecycle Delivery</h4>
                    <p>Ideation, UX prototyping, agile code sprints to deployment &amp; scaling.</p>
                  </div>
                </div>

                <div className="feature-stack-item">
                  <div className="feature-item-icon"><Globe2 size={18} /></div>
                  <div className="feature-item-info">
                    <h4>Global Multi-Timezone Support</h4>
                    <p>Synchronized domestic and international coverage around the clock.</p>
                  </div>
                </div>

                <div className="feature-stack-item">
                  <div className="feature-item-icon"><ShieldCheck size={18} /></div>
                  <div className="feature-item-info">
                    <h4>Enterprise Data Security</h4>
                    <p>Strict confidentiality, non-disclosure compliance, and encrypted systems.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

