import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Sparkles, 
  Briefcase, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Send,
  Zap,
  Coffee,
  HeartHandshake,
  ArrowRight
} from 'lucide-react';
import { careersData } from '../../data/careersData';
import './CareersPage.css';

export default function CareersPage({ onNavigateHome, onOpenApplyModal }) {
  const [selectedJobId, setSelectedJobId] = useState(careersData[0]?.id || 'data-annotators');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const selectedJob = careersData.find(j => j.id === selectedJobId) || careersData[0];

  const handleSelectJob = (id) => {
    if (id === selectedJobId) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedJobId(id);
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <div className="careers-page-root">
      
      {/* =========================================================
          SECTION 1: CAREER HERO
         ========================================================= */}
      <section className="careers-hero-section">
        <div className="careers-hero-container">
          
          {/* Breadcrumb */}
          <nav className="careers-breadcrumb" aria-label="Breadcrumb">
            <button className="breadcrumb-link" onClick={onNavigateHome}>Home</button>
            <ChevronRight size={14} className="breadcrumb-separator" />
            <span className="breadcrumb-current">Career</span>
          </nav>

          {/* Hero Badge & Typography */}
          <div className="careers-hero-header">
            <div className="careers-badge-pill">
              <Sparkles size={14} className="badge-icon" />
              <span>CAREER</span>
            </div>

            <h1 className="careers-hero-title">
              Build Your Future With <span className="gradient-cyan-text">Pravishree</span>
            </h1>

            <p className="careers-hero-subtitle">
              Join a team where technology, creativity, and opportunity come together.
            </p>
          </div>

          {/* Culture Perks Row */}
          <div className="careers-perks-row">
            <div className="perk-card glass-card">
              <div className="perk-icon cyan"><Zap size={20} /></div>
              <div className="perk-info">
                <h4>Cutting-Edge Tooling</h4>
                <p>Modern workstations &amp; enterprise platforms.</p>
              </div>
            </div>

            <div className="perk-card glass-card">
              <div className="perk-icon blue"><Coffee size={20} /></div>
              <div className="perk-info">
                <h4>Empowering Culture</h4>
                <p>Collaborative environment &amp; supportive leadership.</p>
              </div>
            </div>

            <div className="perk-card glass-card">
              <div className="perk-icon teal"><HeartHandshake size={20} /></div>
              <div className="perk-info">
                <h4>Fast-Track Growth</h4>
                <p>Structured promotions &amp; global exposure.</p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 2: MAIN CAREER INTERFACE (2-COLUMN)
         ========================================================= */}
      <section className="careers-interface-section">
        <div className="careers-container">
          
          <div className="careers-main-card glass-card">
            
            <div className="careers-card-header">
              <span className="section-label">OPEN POSITIONS</span>
              <h2 className="section-title">Explore Career Opportunities</h2>
            </div>

            <div className="careers-interface-grid">
              
              {/* LEFT SIDE: Vertical Job Category List */}
              <div className="careers-category-col">
                <span className="col-header-tag">AVAILABLE ROLES ({careersData.length})</span>
                <div className="careers-category-list">
                  {careersData.map((job) => {
                    const isSelected = job.id === selectedJobId;

                    return (
                      <button
                        key={job.id}
                        type="button"
                        className={`category-item-btn ${isSelected ? 'is-selected' : ''}`}
                        onClick={() => handleSelectJob(job.id)}
                      >
                        <div className="cat-item-left">
                          <span className="cat-dept-chip">{job.department}</span>
                          <span className="cat-title-text">{job.title}</span>
                        </div>
                        <ChevronRight size={16} className="cat-arrow-icon" />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* RIGHT SIDE: Job Description Panel */}
              <div className="careers-description-col">
                <div className="description-header-strip">
                  <span className="desc-tag">JOB DESCRIPTION</span>
                  <span className="desc-location-badge">
                    <MapPin size={13} /> {selectedJob.location}
                  </span>
                </div>

                <div className={`description-content-wrap ${isTransitioning ? 'is-masking' : ''}`}>
                  
                  {/* Job Title & Meta */}
                  <h3 className="job-desc-title">{selectedJob.title}</h3>

                  <div className="job-desc-meta-chips">
                    <div className="meta-badge">
                      <Briefcase size={14} className="icon-cyan" />
                      <span>{selectedJob.department}</span>
                    </div>
                    <div className="meta-badge">
                      <Clock size={14} className="icon-blue" />
                      <span>{selectedJob.type}</span>
                    </div>
                    <div className="meta-badge">
                      <Sparkles size={14} className="icon-teal" />
                      <span>Experience: {selectedJob.experience}</span>
                    </div>
                  </div>

                  {/* Overview */}
                  <div className="job-desc-block">
                    <h4 className="block-label">Job Overview</h4>
                    <p className="block-para">{selectedJob.overview}</p>
                  </div>

                  {/* Responsibilities */}
                  <div className="job-desc-block">
                    <h4 className="block-label">Key Responsibilities</h4>
                    <ul className="desc-bullet-list">
                      {selectedJob.responsibilities.map((resp, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={16} className="bullet-check cyan" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements / Skills */}
                  <div className="job-desc-block">
                    <h4 className="block-label">Required Skills &amp; Qualifications</h4>
                    <ul className="desc-bullet-list">
                      {selectedJob.requirements.map((req, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={16} className="bullet-check teal" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Row */}
                  <div className="job-desc-actions">
                    <button
                      className="btn-apply-primary"
                      onClick={() => onOpenApplyModal && onOpenApplyModal(selectedJob)}
                    >
                      <span>APPLY NOW</span>
                      <Send size={16} />
                    </button>
                    <span className="package-hint">
                      <strong>Compensation:</strong> {selectedJob.salary}
                    </span>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
