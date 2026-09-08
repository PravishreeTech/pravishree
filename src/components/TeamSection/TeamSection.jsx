import React, { useState, useRef } from 'react';
import { Users, ChevronRight, UserCheck, Sparkles, ArrowRight } from 'lucide-react';
import './TeamSection.css';

export default function TeamSection({ onNavigateToTeam }) {
  const [activeMemberIndex, setActiveMemberIndex] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Raw placeholder team members for Home Page preview
  const teamMembers = [
    {
      id: 'ratnakar-chilaka',
      number: '01',
      name: 'Ratnakar Chilaka',
      role: 'Chief Executive Officer',
      company: 'Pravishree Design Co.',
      image: null,
      accentColor: '#00D9FF'
    },
    {
      id: 'priya-sharma',
      number: '02',
      name: 'Priya Sharma',
      role: 'Technology Lead',
      company: 'Pravishree Design Co.',
      image: null,
      accentColor: '#19E6D0'
    },
    {
      id: 'arjun-kumar',
      number: '03',
      name: 'Arjun Kumar',
      role: 'Software Development Lead',
      company: 'Pravishree Design Co.',
      image: null,
      accentColor: '#1677FF'
    },
    {
      id: 'sneha-reddy',
      number: '04',
      name: 'Sneha Reddy',
      role: 'Creative & Design Lead',
      company: 'Pravishree Design Co.',
      image: null,
      accentColor: '#00D9FF'
    },
    {
      id: 'rahul-varma',
      number: '05',
      name: 'Rahul Varma',
      role: 'Digital Solutions Specialist',
      company: 'Pravishree Design Co.',
      image: null,
      accentColor: '#19E6D0'
    },
    {
      id: 'ananya-rao',
      number: '06',
      name: 'Ananya Rao',
      role: 'Operations & Business Services Lead',
      company: 'Pravishree Design Co.',
      image: null,
      accentColor: '#1677FF'
    }
  ];

  const activeMember = teamMembers[activeMemberIndex];

  // Mouse parallax interpolation for active portrait card
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({
      x: relX * 16,
      y: relY * 16,
    });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const handleMemberClick = (memberId) => {
    if (onNavigateToTeam) {
      onNavigateToTeam(memberId);
    } else {
      window.location.hash = 'team';
    }
  };

  return (
    <section 
      className="team-section-home" 
      id="team" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Decorative ambient background ring */}
      <div className="team-bg-3d-ring" aria-hidden="true" />

      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Users size={14} /> MEET OUR TEAM
          </div>
          <h2 className="section-title">
            The Minds Behind <span className="text-gradient">Pravishree</span>
          </h2>
          <p className="section-subtitle">
            Meet the people building digital possibilities at Pravishree Design Co.
          </p>
        </div>

        {/* Home Team Preview Interactive Grid */}
        <div className="home-team-grid">
          
          {/* LEFT COLUMN: Interactive Team List */}
          <div className="home-team-list-left">
            {teamMembers.map((member, index) => {
              const isActive = activeMemberIndex === index;

              return (
                <div
                  key={member.id}
                  className={`home-team-row ${isActive ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveMemberIndex(index)}
                  onClick={() => handleMemberClick(member.id)}
                >
                  <span className="row-num">{member.number}</span>
                  <div className="row-info-wrap">
                    <h3 className="row-name">{member.name}</h3>
                    <span className="row-role">{member.role}</span>
                  </div>
                  <ChevronRight size={18} className="row-chevron-icon" />
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Dark Navy Preview Stage Canvas */}
          <div className="home-team-preview-right">
            <div 
              className="home-team-card-frame glass-card"
              style={{
                transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
              }}
            >
              {teamMembers.map((member, index) => {
                const isActive = activeMemberIndex === index;

                return (
                  <div 
                    key={member.id}
                    className={`home-team-card-layer ${isActive ? 'layer-active' : 'layer-inactive'}`}
                  >
                    <div className="home-card-inner">
                      
                      <div className="home-card-top-bar">
                        <span className="home-card-num">{member.number}</span>
                        <span className="home-card-brand">{member.company}</span>
                      </div>

                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="home-card-img"
                        />
                      ) : (
                        <div className="home-card-placeholder">
                          <div className="home-placeholder-orb">
                            <UserCheck size={52} style={{ color: member.accentColor }} />
                          </div>
                          <span className="home-placeholder-tag">TEAM MEMBER {member.number}</span>
                        </div>
                      )}

                      <div className="home-card-bottom-info">
                        <div className="home-card-accent-bar" style={{ background: member.accentColor }}></div>
                        <h4 className="home-card-name">{member.name}</h4>
                        <p className="home-card-role">{member.role}</p>

                        <button 
                          className="home-card-explore-btn"
                          onClick={() => handleMemberClick(member.id)}
                        >
                          <span>View Full Profile</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
