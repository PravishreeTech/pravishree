import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight,
  Eye,
  Target,
  Layers,
  Globe2,
  ShieldCheck,
  Zap,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';
import './AboutSection.css';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tab) => {
    setActiveTab(prev => prev === tab ? null : tab);
  };

  return (
    <section className="about-section" id="about" aria-label="About Pravishree Design Co.">
      
      {/* 1. Ambient Background Typography & Grid */}
      <div className="ambient-watermark-wrap" aria-hidden="true">
        <span className="ambient-watermark-text">
          POSSIBILITIES
        </span>
      </div>
      <div className="about-bg-grid-ambient" aria-hidden="true"></div>

      <div className="container relative-z">
        
        {/* ===================================================================
           2. HERO / INTRODUCTION PART OF ABOUT SECTION (Editorial Style)
           =================================================================== */}
        <div className="about-editorial-hero reveal-line">
          
          {/* Top Kicker Row */}
          <div className="about-hero-meta-row">
            <div className="about-section-badge">
              <span className="badge-pulse-dot"></span>
              <span className="badge-num">01</span>
              <span className="badge-sep">/</span>
              <span className="badge-label">ABOUT PRAVISHREE</span>
            </div>
            <div className="about-meta-tag">
              <Sparkles size={13} className="text-cyan" />
              <span>A TECH SOLUTION FIRM ENGINEERED FOR IMPACT</span>
            </div>
          </div>

          {/* Large Editorial Headline */}
          <div className="about-headline-container">
            <h2 className="about-editorial-title">
              <span className="headline-line reveal-line-delay-1">MORE THAN TECHNOLOGY.</span>
              <span className="headline-line reveal-line-delay-2 text-gradient">WE BUILD POSSIBILITIES.</span>
            </h2>
          </div>

          {/* Lead Introduction & Action Pills */}
          <div className="about-lead-wrapper">
            <p className="about-lead-paragraph reveal-line-delay-3">
              Pravishree is a technology solution firm focused on helping businesses turn ambitious ideas into innovative, scalable, and meaningful digital solutions.
            </p>

            {/* Vision + Mission Interactive Pills */}
            <div className="about-vision-mission-triggers">
              <button
                type="button"
                className={`vm-pill-btn ${activeTab === 'vision' ? 'is-active' : ''}`}
                onClick={() => toggleTab('vision')}
                aria-expanded={activeTab === 'vision'}
              >
                <Eye size={15} className="vm-pill-icon" />
                <span>OUR VISION</span>
                <ArrowRight size={14} className="vm-pill-arrow" />
              </button>

              <button
                type="button"
                className={`vm-pill-btn ${activeTab === 'mission' ? 'is-active' : ''}`}
                onClick={() => toggleTab('mission')}
                aria-expanded={activeTab === 'mission'}
              >
                <Target size={15} className="vm-pill-icon" />
                <span>OUR MISSION</span>
                <ArrowRight size={14} className="vm-pill-arrow" />
              </button>
            </div>
          </div>

          {/* Expandable Vision / Mission Drawer */}
          {activeTab && (
            <div className="about-vm-expand-card" role="region" aria-live="polite">
              <div className="about-vm-expand-inner">
                <div className="vm-badge-indicator">
                  {activeTab === 'vision' ? <Eye size={15} /> : <Target size={15} />}
                  <span>{activeTab === 'vision' ? 'STRATEGIC VISION' : 'CORE MISSION'}</span>
                </div>
                <p className="vm-expand-text">
                  {activeTab === 'vision' 
                    ? "Our vision is to create meaningful digital solutions that combine technology, creativity, and business understanding to help organizations grow with confidence."
                    : "Our mission is to deliver practical, scalable, and reliable technology solutions that solve real business challenges and create lasting value for our clients."
                  }
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Thin Structural Editorial Divider */}
        <div className="about-editorial-divider reveal-line" aria-hidden="true">
          <span className="editorial-divider-node left"></span>
          <span className="editorial-divider-line"></span>
          <span className="editorial-divider-node right"></span>
        </div>

        {/* ===================================================================
           3. EDITORIAL ASYMMETRICAL STORYTELLING & VISUAL ARCHITECTURE
           =================================================================== */}
        <div className="about-story-layout">
          
          {/* Left Column: Numbered Editorial Story Stream */}
          <div className="about-story-stream reveal-slide-left">
            
            {/* Story Block 01: WHO WE ARE */}
            <article className="story-block story-block-01">
              <div className="story-meta-header">
                <span className="story-step-num">01</span>
                <div className="story-step-info">
                  <span className="story-category-tag">IDENTITY &amp; FOUNDATION</span>
                  <h3 className="story-block-title">Who We Are</h3>
                </div>
              </div>
              <p className="story-block-text">
                Pravishree Design Co. is a high-growth technology solutions and digital innovation firm. We bridge the gap between creative visual artistry, resilient full-stack software engineering, and operational BPO execution.
              </p>
              <div className="story-micro-tags">
                <span className="story-tag-pill"><CheckCircle2 size={13} className="text-cyan" /> Visual Artistry</span>
                <span className="story-tag-pill"><CheckCircle2 size={13} className="text-cyan" /> Full-Stack Engineering</span>
                <span className="story-tag-pill"><CheckCircle2 size={13} className="text-cyan" /> Operational BPO</span>
              </div>
            </article>

            {/* Connecting Vertical Track Line */}
            <div className="story-track-connector" aria-hidden="true">
              <div className="track-pulse-beacon"></div>
            </div>

            {/* Story Block 02: HOW WE WORK */}
            <article className="story-block story-block-02">
              <div className="story-meta-header">
                <span className="story-step-num">02</span>
                <div className="story-step-info">
                  <span className="story-category-tag">DELIVERY &amp; COLLABORATION</span>
                  <h3 className="story-block-title">How We Work</h3>
                </div>
              </div>
              <p className="story-block-text">
                Founded by industry veterans, our multidisciplinary team collaborates with startups, mid-market leaders, and global enterprises across North America, Europe, and Asia to engineer digital products that scale smoothly.
              </p>
              <div className="story-micro-tags">
                <span className="story-tag-pill"><Globe2 size={13} className="text-cyan" /> Global Delivery</span>
                <span className="story-tag-pill"><Zap size={13} className="text-cyan" /> Agile Code Sprints</span>
                <span className="story-tag-pill"><ShieldCheck size={13} className="text-cyan" /> Enterprise Security</span>
              </div>
            </article>

            {/* Connecting Vertical Track Line */}
            <div className="story-track-connector" aria-hidden="true">
              <div className="track-pulse-beacon"></div>
            </div>

            {/* Story Block 03: OUR IMPACT & METRICS */}
            <article className="story-block story-block-03">
              <div className="story-meta-header">
                <span className="story-step-num">03</span>
                <div className="story-step-info">
                  <span className="story-category-tag">PROVEN TRACK RECORD</span>
                  <h3 className="story-block-title">Our Impact</h3>
                </div>
              </div>

              {/* Verified Metrics Cards */}
              <div className="about-stats-editorial-grid">
                
                {/* Metric 1 */}
                <div className="editorial-stat-card">
                  <div className="stat-card-top">
                    <span 
                      className="stat-card-number stat-counter" 
                      data-target="100" 
                      data-suffix="%"
                    >
                      100%
                    </span>
                    <TrendingUp size={18} className="stat-icon-glow" />
                  </div>
                  <span className="stat-card-label">ON-TIME DELIVERY</span>
                  <span className="stat-card-sub">Strict agile milestone commitments</span>
                </div>

                {/* Metric 2 */}
                <div className="editorial-stat-card">
                  <div className="stat-card-top">
                    <span 
                      className="stat-card-number stat-counter" 
                      data-target="500" 
                      data-suffix="+"
                    >
                      500+
                    </span>
                    <Layers size={18} className="stat-icon-glow" />
                  </div>
                  <span className="stat-card-label">GLOBAL PROJECTS</span>
                  <span className="stat-card-sub">Successfully deployed worldwide</span>
                </div>

                {/* Metric 3 */}
                <div className="editorial-stat-card">
                  <div className="stat-card-top">
                    <span className="stat-card-number">
                      24/7
                    </span>
                    <Globe2 size={18} className="stat-icon-glow" />
                  </div>
                  <span className="stat-card-label">DEDICATED SUPPORT</span>
                  <span className="stat-card-sub">Continuous multi-timezone coverage</span>
                </div>

              </div>
            </article>

          </div>

          {/* Right Column: Editorial Visual Technology Panel with Provided High-Resolution Ecosystem Visual */}
          <div className="about-visual-stage reveal-slide-right">
            <div className="visual-stage-container glass-card">
              <div className="visual-image-wrapper">
                <img 
                  src="/assets/about-digital-ecosystem.jpg" 
                  alt="Pravishree Digital Ecosystem — Technology, Creativity, and Business Architecture" 
                  className="about-ecosystem-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

