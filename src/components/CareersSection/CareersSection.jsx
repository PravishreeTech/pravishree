import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Send,
  Mail,
  Zap,
  Coffee,
  HeartHandshake
} from 'lucide-react';
import { careerCategories, careersData } from '../../data/careersData';
import './CareersSection.css';

export default function CareersSection({ onOpenApplyModal }) {
  const [activeDept, setActiveDept] = useState('All Roles');
  const [expandedJobId, setExpandedJobId] = useState('data-annotators');

  const filteredJobs = activeDept === 'All Roles'
    ? careersData
    : careersData.filter(job => job.department === activeDept);

  const toggleExpand = (jobId) => {
    setExpandedJobId(expandedJobId === jobId ? null : jobId);
  };

  return (
    <section className="careers-section" id="careers">
      <div className="ambient-watermark-wrap" aria-hidden="true">
        <span className="ambient-watermark-text">
          CAREERS
        </span>
      </div>

      <div className="container relative-z">
        
        {/*  Section Header  */}
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={14} /> Join Our Team
          </div>
          <h2 className="section-title">
            Build Your Career at <span className="text-gradient">Pravishree</span>
          </h2>
          <p className="section-subtitle">
            We are looking for exceptional minds in technology, creative media, and global BPO operations.
          </p>
        </div>

        {/*  Culture Perks Grid  */}
        <div className="careers-perks-grid">
          <div className="career-perk-box glass-card">
            <div className="perk-icon-wrap cyan"><Zap size={22} /></div>
            <h4>Cutting-Edge Tooling</h4>
            <p>Work with state-of-the-art workstations, AI annotation platforms, and modern development software.</p>
          </div>

          <div className="career-perk-box glass-card">
            <div className="perk-icon-wrap blue"><Coffee size={22} /></div>
            <h4>Empowering Culture</h4>
            <p>Collaborative environment, flexible shift options, performance rewards, and supportive leadership.</p>
          </div>

          <div className="career-perk-box glass-card">
            <div className="perk-icon-wrap teal"><HeartHandshake size={22} /></div>
            <h4>Fast-Track Growth</h4>
            <p>Structured promotion pathways, continuous training bootcamps, and global enterprise exposure.</p>
          </div>
        </div>

        {/*  Filter Navigation  */}
        <div className="careers-filter-row">
          <span className="careers-filter-label">Filter Openings:</span>
          <div className="careers-dept-chips">
            {careerCategories.map((dept) => (
              <button
                key={dept}
                className={`dept-chip-btn ${activeDept === dept ? 'active' : ''}`}
                onClick={() => setActiveDept(dept)}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/*  Jobs Openings List  */}
        <div className="careers-jobs-list">
          {filteredJobs.map((job) => {
            const isExpanded = expandedJobId === job.id;

            return (
              <div key={job.id} className={`career-job-card ${isExpanded ? 'is-expanded' : ''}`}>
                
                {/*  Job Header (Click to Expand)  */}
                <div className="job-card-summary" onClick={() => toggleExpand(job.id)}>
                  <div className="job-summary-left">
                    <span className="job-department-tag">{job.department}</span>
                    <h3 className="job-title-text">{job.title}</h3>
                    
                    <div className="job-meta-row">
                      <span className="job-meta-item">
                        <MapPin size={14} /> {job.location}
                      </span>
                      <span className="job-meta-item">
                        <Clock size={14} /> {job.type}
                      </span>
                      <span className="job-meta-item">
                        <Briefcase size={14} /> Exp: {job.experience}
                      </span>
                    </div>
                  </div>

                  <div className="job-summary-right">
                    <a 
                      href={`mailto:contact@pravishree.com?subject=${encodeURIComponent(`Career Enquiry - ${job.title}`)}`}
                      className="btn-primary job-apply-direct-btn"
                      onClick={(e) => e.stopPropagation()}
                      title="Email us your CV & Inquiry"
                    >
                      <Mail size={15} />
                      <span>contact@pravishree.com</span>
                    </a>
                  </div>
                </div>

                {/*  Expanded Details Area  */}
                {isExpanded && (
                  <div className="job-card-expanded-body">
                    <p className="job-overview-para">{job.overview}</p>

                    <div className="job-two-col-specs">
                      <div className="job-spec-col">
                        <h4>Key Responsibilities:</h4>
                        <ul>
                          {job.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx}>
                              <CheckCircle size={15} className="text-cyan flex-shrink-0" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="job-spec-col">
                        <h4>Qualifications &amp; Requirements:</h4>
                        <ul>
                          {job.requirements.map((req, qIdx) => (
                            <li key={qIdx}>
                              <CheckCircle size={15} className="text-teal flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="job-expanded-footer">
                      <a 
                        href={`mailto:contact@pravishree.com?subject=${encodeURIComponent(`Career Enquiry - ${job.title}`)}`}
                        className="btn-primary"
                        title="Email us your CV & Inquiry"
                      >
                        <Mail size={16} />
                        <span>contact@pravishree.com</span>
                      </a>
                    </div>

                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
