import React, { useEffect } from 'react';
import { X, Calendar, User, ArrowRight, CheckCircle, Code, Layers, Sparkles } from 'lucide-react';
import './Modal.css';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const descriptionText = project.description || project.summary || project.shortDescription;
  const servicesList = project.services || project.tags || [];
  const techList = project.technologies || [];
  const featuresList = project.features || [];

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card modal-project" onClick={(e) => e.stopPropagation()}>
        
        <div className="modal-header">
          <div>
            <span className="modal-tag">
              <Sparkles size={13} style={{ marginRight: '6px' }} />
              {project.category} Project
            </span>
            <h3 className="modal-title">{project.title || project.name}</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-project-img-box">
            <img 
              src={project.image} 
              alt={project.title || project.name} 
              className="modal-project-img" 
            />
          </div>

          <div className="modal-project-content">
            <div className="modal-meta-chips">
              {project.client && (
                <span><User size={14} /> Client: <strong>{project.client}</strong></span>
              )}
              {project.year && (
                <span><Calendar size={14} /> Year: <strong>{project.year}</strong></span>
              )}
            </div>

            <h4>About Project</h4>
            <p className="modal-project-desc">{descriptionText}</p>

            {/* Services Delivered */}
            {servicesList.length > 0 && (
              <div className="modal-section-group">
                <h5 className="modal-subheading"><Layers size={14} /> Services Delivered</h5>
                <div className="modal-tags-list">
                  {servicesList.map((srv, i) => (
                    <span key={i} className="modal-tech-tag srv-tag">{srv}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Key Technologies */}
            {techList.length > 0 && (
              <div className="modal-section-group">
                <h5 className="modal-subheading"><Code size={14} /> Technologies Used</h5>
                <div className="modal-tags-list">
                  {techList.map((tech, i) => (
                    <span key={i} className="modal-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            {featuresList.length > 0 && (
              <div className="modal-section-group">
                <h5 className="modal-subheading"><CheckCircle size={14} /> Key Features</h5>
                <ul className="modal-features-list">
                  {featuresList.map((feat, i) => (
                    <li key={i}><CheckCircle size={13} className="feat-check" /> {feat}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="modal-project-action-row">
              <a href="#contact" className="btn-primary" onClick={onClose}>
                <span>Request Similar Project</span>
                <ArrowRight size={16} />
              </a>
              <button className="btn-secondary" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
