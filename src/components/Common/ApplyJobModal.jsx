import React, { useState } from 'react';
import { X, Briefcase, MapPin, Clock, CheckCircle2, UploadCloud } from 'lucide-react';
import confetti from 'canvas-confetti';
import './Modal.css';

export default function ApplyJobModal({ job, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    candidateName: '',
    email: '',
    phone: '',
    experience: '',
    portfolioUrl: '',
    coverNote: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  if (!job) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.candidateName.trim()) errs.candidateName = 'Please enter your full name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) errs.phone = 'Please enter your contact phone number';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);
      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.5 }
        });
      } catch (err) {}

      if (onSuccess) {
        onSuccess(`Application submitted successfully for ${job.title}!`);
      }
    }, 1000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card modal-apply" onClick={(e) => e.stopPropagation()}>
        
        {/*  Header  */}
        <div className="modal-header">
          <div>
            <span className="modal-tag">Career Application</span>
            <h3 className="modal-title">{job.title}</h3>
            <div className="modal-job-meta">
              <span><Briefcase size={14} /> {job.department}</span>
              <span><MapPin size={14} /> {job.location}</span>
              <span><Clock size={14} /> {job.type}</span>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
            <X size={20} />
          </button>
        </div>

        {/*  Body  */}
        <div className="modal-body">
          {isDone ? (
            <div className="modal-success-box">
              <CheckCircle2 size={54} className="text-cyan" />
              <h3>Application Submitted!</h3>
              <p>
                Thank you, <strong>{formData.candidateName}</strong>! Our recruitment team at Pravishree Design Co. has received your application for <strong>{job.title}</strong> and will contact you shortly.
              </p>
              <button className="btn-primary" onClick={onClose}>
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              
              <div className="form-group">
                <label>Full Name <span className="req">*</span></label>
                <input
                  type="text"
                  name="candidateName"
                  placeholder="e.g. John Doe"
                  value={formData.candidateName}
                  onChange={handleChange}
                  className={errors.candidateName ? 'has-error' : ''}
                />
                {errors.candidateName && <span className="field-error">{errors.candidateName}</span>}
              </div>

              <div className="form-two-grid">
                <div className="form-group">
                  <label>Email Address <span className="req">*</span></label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'has-error' : ''}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label>Phone Number <span className="req">*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'has-error' : ''}
                  />
                  {errors.phone && <span className="field-error">{errors.phone}</span>}
                </div>
              </div>

              <div className="form-two-grid">
                <div className="form-group">
                  <label>Total Experience</label>
                  <input
                    type="text"
                    name="experience"
                    placeholder="e.g. 2 Years / Fresher"
                    value={formData.experience}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Portfolio / LinkedIn Link</label>
                  <input
                    type="url"
                    name="portfolioUrl"
                    placeholder="https://linkedin.com/in/..."
                    value={formData.portfolioUrl}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Cover Note / Relevant Skills</label>
                <textarea
                  name="coverNote"
                  rows="3"
                  placeholder="Briefly tell us why you are a great fit for this position..."
                  value={formData.coverNote}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="modal-resume-notice">
                <UploadCloud size={18} className="text-cyan" />
                <span>You will also be asked to share your detailed resume / portfolio during the HR discovery call.</span>
              </div>

              <div className="modal-footer-actions">
                <button type="button" className="btn-secondary" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting Application...' : 'Send Application'}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
