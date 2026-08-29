import React from 'react';
import { 
  Users, 
  Tag, 
  PhoneCall, 
  Globe2, 
  Video, 
  TrendingUp, 
  Activity, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { careersData } from '../../data/careersData';

export default function MegaMenuCareers({ onItemClick, onSelectJob }) {
  const iconMap = {
    'data-annotators': Tag,
    'domestic-voice': PhoneCall,
    'international-voice': Globe2,
    'video-editors': Video,
    'digital-marketers': TrendingUp,
    'medical-billers': Activity
  };

  return (
    <div className="mega-menu-dropdown mega-menu-careers" role="region" aria-label="Careers Navigation">
      <div className="careers-menu-layout">
        {/*  Left Openings List  */}
        <div className="careers-openings-col">
          <div className="mega-menu-header-bar-compact">
            <span className="mega-menu-section-title">
              <Sparkles size={14} className="inline-icon text-cyan" /> Current Open Roles ({careersData.length})
            </span>
            <span className="hiring-live-badge">● We are actively hiring</span>
          </div>

          <div className="careers-menu-grid">
            {careersData.map((job) => {
              const IconComp = iconMap[job.id] || Users;
              return (
                <a 
                  key={job.id}
                  href={`#careers`} 
                  className="career-menu-card"
                  onClick={() => {
                    if (onSelectJob) onSelectJob(job);
                    if (onItemClick) onItemClick();
                  }}
                >
                  <div className="career-icon-box">
                    <IconComp size={17} />
                  </div>
                  <div className="career-meta">
                    <h5 className="career-job-title">{job.title}</h5>
                    <div className="career-sub-tags">
                      <span className="career-dept">{job.department}</span>
                      <span className="career-exp">{job.experience}</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/*  Right Culture / Why Join Card  */}
        <div className="careers-promo-card">
          <div className="promo-badge">Growth & Innovation</div>
          <h4>Shape The Future With Us</h4>
          <p>
            Work on industry-defining projects with mentorship, global exposure, competitive compensation, and modern workspace perks.
          </p>
          <div className="perks-list">
            <div className="perk-item">✓ Hybrid & Global Shift Options</div>
            <div className="perk-item">✓ Continuous Upskilling & Tools</div>
            <div className="perk-item">✓ Clear Career Progression</div>
          </div>
          <a href="#careers" className="btn-careers-portal" onClick={onItemClick}>
            View All Openings <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
