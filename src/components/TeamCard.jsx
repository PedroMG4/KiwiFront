import React from 'react';
import Link from 'next/link';

export default function TeamCard({ miembro }) {
  return (
    <div className="team-card">
      <div className="team-card-image">
        <div className="team-avatar">
          <span className="team-initials">
            {miembro.nombre.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div className="team-card-overlay">
          <div className="team-social">
            <a href={miembro.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
              💼
            </a>
            <a href={`mailto:${miembro.email}`} className="social-link">
              ✉️
            </a>
          </div>
        </div>
      </div>
      
      <div className="team-card-content">
        <div className="team-role-badge">
          {miembro.cargo}
        </div>
        
        <h3 className="team-name">{miembro.nombre}</h3>
        
        <div className="team-area">
          <span className="area-label">Área:</span>
          <span className="area-value">{miembro.area}</span>
        </div>
        
        <p className="team-specialty">{miembro.especialidad}</p>
        
        <div className="team-experience">
          <span className="experience-icon">⏱️</span>
          <span className="experience-text">{miembro.experiencia}</span>
        </div>
        
        <p className="team-description">{miembro.descripcion}</p>
      </div>
    </div>
  );
}

