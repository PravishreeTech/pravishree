import React from 'react';
import { X, Calendar, User, ArrowRight } from 'lucide-react';
import './Modal.css';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card modal-project" onClick={(e) => e.stopPropagation()}>
        
        <div className="modal-header">
          <div>
            <span className="modal-tag">{project.category} Project</span>
            <h3 className="modal-title">{project.title}</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-project-img-box">
            <img src={project.image} alt={project.title} className="modal-project-img" />
          </div>

          <div className="modal-project-content">
            <div className="modal-meta-chips">
              <span><User size={14} /> Client: <strong>{project.client}</strong></span>
              <span><Calendar size={14} /> Year: <strong>{project.year}</strong></span>
            </div>

            <h4>Project Overview &amp; Impact:</h4>
            <p className="modal-project-desc">{project.summary}</p>
            <p className="modal-project-extra">
              Engineered by Pravishree Design Co. with high visual standard, performance responsiveness, and enterprise compliance.
            </p>

            <div className="modal-tags-list">
              {project.tags.map((tag, i) => (
                <span key={i} className="modal-tech-tag">{tag}</span>
              ))}
            </div>

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
