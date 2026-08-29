import React from 'react';
import { CheckCircle, X } from 'lucide-react';
import './Modal.css';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="toast-notification" role="status" aria-live="polite">
      <div className="toast-content">
        <CheckCircle size={20} className="toast-icon" />
        <span className="toast-message">{message}</span>
      </div>
      <button className="toast-close" onClick={onClose} aria-label="Dismiss message">
        <X size={16} />
      </button>
    </div>
  );
}
