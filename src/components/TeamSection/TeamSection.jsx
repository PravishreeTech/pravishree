import React from 'react';
import { Users, Mail, Globe, ExternalLink, Sparkles } from 'lucide-react';
import { teamData } from '../../data/teamData';
import './TeamSection.css';

export default function TeamSection() {
  return (
    <section className="team-section" id="team">
      <div className="container">
        
        {/*  Section Header  */}
        <div className="section-header">
          <div className="section-badge">
            <Users size={14} /> Leadership &amp; Experts
          </div>
          <h2 className="section-title">
            Meet Our <span className="text-gradient">Core Team</span>
          </h2>
          <p className="section-subtitle">
            A passionate group of software architects, creative directors, and operational leaders driving digital excellence.
          </p>
        </div>

        {/*  Team Grid  */}
        <div className="team-grid">
          {teamData.map((member) => (
            <div key={member.id} className="team-card">
              {/*  Avatar Area  */}
              <div className="team-avatar-box">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="team-avatar-img"
                  loading="lazy"
                />
                <span className="team-dept-tag">{member.department}</span>
              </div>

              {/*  Content Info  */}
              <div className="team-card-content">
                <h3 className="team-member-name">{member.name}</h3>
                <span className="team-member-role">{member.role}</span>
                <p className="team-member-bio">{member.bio}</p>

                {/*  Skill Tags  */}
                <div className="team-skill-tags">
                  {member.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="team-skill-pill">{skill}</span>
                  ))}
                </div>

                {/*  Socials & Email  */}
                <div className="team-social-bar">
                  <a href={`mailto:${member.socials.email}`} className="team-social-link" title={`Email ${member.name}`}>
                    <Mail size={16} />
                  </a>
                  <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="team-social-link" title="LinkedIn Profile">
                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
