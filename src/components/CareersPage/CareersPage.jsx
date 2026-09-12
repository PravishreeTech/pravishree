import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Sparkles, 
  Briefcase, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Mail,
  Zap,
  Coffee,
  HeartHandshake,
  ArrowRight,
  Users,
  TrendingUp,
  GraduationCap,
  Target,
  Layers
} from 'lucide-react';
import { careersData } from '../../data/careersData';
import './CareersPage.css';

// 6 Feature cards for Why Pravishree 2x3 grid
const whyFeatures = [
  {
    num: '01',
    icon: Zap,
    colorClass: 'cyan',
    title: 'Cutting-Edge Tooling',
    desc: 'Modern workstations, AI annotation platforms & enterprise tools.'
  },
  {
    num: '02',
    icon: Users,
    colorClass: 'blue',
    title: 'Empowering Culture',
    desc: 'Collaborative environment & supportive leadership for continuous growth.'
  },
  {
    num: '03',
    icon: TrendingUp,
    colorClass: 'teal',
    title: 'Fast-Track Growth',
    desc: 'Structured promotion pathways, bootcamps & global client exposure.'
  },
  {
    num: '04',
    icon: GraduationCap,
    colorClass: 'cyan',
    title: 'Learning & Development',
    desc: 'Skill workshops, certification support & dedicated mentorship.'
  },
  {
    num: '05',
    icon: Target,
    colorClass: 'blue',
    title: 'Meaningful Work',
    desc: 'Direct impact on live global products & high-visibility projects.'
  },
  {
    num: '06',
    icon: Layers,
    colorClass: 'teal',
    title: 'Career Opportunities',
    desc: 'Diverse paths across software, design, marketing & operations.'
  }
];

// 4 explicit job option cards with descriptions for Join Us panel
const joinUsOptions = [
  { 
    id: 'dev', 
    num: '01',
    label: 'Development', 
    desc: 'Build and maintain modern websites, web applications, and software solutions using current technologies and development practices.',
    jobId: 'data-annotators' 
  },
  { 
    id: 'design-ve', 
    num: '02',
    label: 'Design & Video Editing', 
    desc: 'Create engaging visual designs, user experiences, and creative content that bring ideas and digital products to life.',
    jobId: 'video-editors' 
  },
  { 
    id: 'dm', 
    num: '03',
    label: 'Digital Marketing', 
    desc: 'Plan and execute digital marketing campaigns, social media strategies, and online promotions to strengthen brand visibility.',
    jobId: 'digital-marketers' 
  },
  { 
    id: 'voice-process', 
    num: '04',
    label: 'Domestic & International Voice Process', 
    desc: 'Communicate with customers professionally, handle domestic and international voice-based processes, and provide reliable customer support while maintaining service quality.',
    jobId: 'domestic-voice' 
  }
];

export default function CareersPage({ onNavigateHome }) {
  const [selectedJobId, setSelectedJobId] = useState(careersData[0]?.id || 'data-annotators');
  const [selectedOptionId, setSelectedOptionId] = useState('dev');
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
      // Map back to matching joinUsOption if applicable
      const matchedOpt = joinUsOptions.find(o => o.jobId === id);
      if (matchedOpt) {
        setSelectedOptionId(matchedOpt.id);
      }
      setIsTransitioning(false);
    }, 150);
  };

  const handleOptionClick = (opt) => {
    setSelectedOptionId(opt.id);
    handleSelectJob(opt.jobId);
    
    // Smooth scroll down to open position interface
    const el = document.getElementById('careers-interface-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="careers-page-root">
      
      {/* =========================================================
          SECTION 1: TWO-PANEL CAREERS HERO (WHY PRAVISHREE | JOIN US)
         ========================================================= */}
      <section className="careers-hero-section">
        <div className="careers-hero-container">
          
          {/* Main Careers Section Context Header */}
          <div className="careers-top-header">
            <nav className="careers-breadcrumb" aria-label="Breadcrumb">
              <button className="breadcrumb-link" onClick={onNavigateHome}>Home</button>
              <ChevronRight size={14} className="breadcrumb-separator" />
              <span className="breadcrumb-current">Careers</span>
            </nav>
            <h1 className="careers-main-heading">CAREERS</h1>
          </div>

          {/* Two-Panel Side-by-Side Layout (50% / 50%) */}
          <div className="careers-two-panel-grid">
            
            {/* LEFT PANEL: WHY PRAVISHREE */}
            <div className="careers-panel glass-card panel-why-pravishree">
              <div className="panel-header">
                <span className="panel-eyebrow">OUR CULTURE &amp; VALUE</span>
                <h2 className="panel-title">WHY PRAVISHREE</h2>
              </div>

              <div className="panel-body">
                <p className="panel-intro-text">
                  Join a tech solution firm where innovation, creativity, and opportunity come together to build your digital future.
                </p>

                <div className="why-features-grid">
                  {whyFeatures.map((item) => {
                    const IconComp = item.icon;
                    return (
                      <div key={item.num} className="why-feature-card">
                        <div className="why-card-header-row">
                          <div className={`why-icon-box ${item.colorClass}`}>
                            <IconComp size={18} />
                          </div>
                          <span className="why-feature-num">{item.num}</span>
                        </div>
                        <h4 className="why-feature-title">{item.title}</h4>
                        <p className="why-feature-desc">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT PANEL: JOIN US */}
            <div className="careers-panel glass-card panel-join-us">
              <div className="panel-header">
                <span className="panel-eyebrow">SELECT A PATHWAY</span>
                <h2 className="panel-title">JOIN US</h2>
              </div>

              <div className="panel-body">
                <div className="join-options-list">
                  {joinUsOptions.map((opt) => {
                    const isSelected = selectedOptionId === opt.id || selectedJobId === opt.jobId;

                    return (
                      <button
                        key={opt.id}
                        type="button"
                        className={`join-option-card ${isSelected ? 'is-selected' : ''}`}
                        onClick={() => handleOptionClick(opt)}
                      >
                        <div className="join-option-content">
                          <span className="join-option-num">{opt.num}</span>
                          <h3 className="join-option-label">{opt.label}</h3>
                          <p className="join-option-desc">{opt.desc}</p>
                        </div>
                        <div className="join-option-arrow-wrap">
                          <ArrowRight size={18} className="join-arrow-icon" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          SECTION 2: MAIN CAREER INTERFACE (JOB DETAILS & MAILTO APPLY)
         ========================================================= */}
      <section className="careers-interface-section" id="careers-interface-section">
        <div className="careers-container">
          
          <div className="careers-main-card glass-card">
            
            <div className="careers-card-header">
              <span className="section-label">OPEN POSITIONS</span>
              <h2 className="section-title">Explore Opportunities &amp; Apply</h2>
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

                  {/* Action Row - Mailto Contact Button Replaces Apply Now */}
                  <div className="job-desc-actions">
                    <a
                      href={`mailto:contact@pravishree.com?subject=${encodeURIComponent(`Career Enquiry - ${selectedJob.title}`)}`}
                      className="btn-apply-primary btn-email-apply"
                      title="Send your application directly to contact@pravishree.com"
                    >
                      <Mail size={16} />
                      <span>contact@pravishree.com</span>
                    </a>
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
