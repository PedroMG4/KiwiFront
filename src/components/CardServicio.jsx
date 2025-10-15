import React from 'react';
import Link from 'next/link';
import serviciosData from '../data/servicios.json';

export default function CardServicio() {
  return (
    <div className="servicios-grid">
      {serviciosData.servicios.map((servicio) => (
        <div key={servicio.id} className="card-servicio">
          <div className="servicio-header">
            <div className="servicio-icono">{servicio.icono}</div>
            <div className="servicio-badge">Servicio Premium</div>
          </div>
          
          <div className="servicio-content">
            <h3 className="servicio-titulo">{servicio.titulo}</h3>
            <p className="servicio-descripcion">{servicio.descripcion}</p>
            
            <div className="servicio-caracteristicas">
              <h4 className="caracteristicas-titulo">¿Qué incluye?</h4>
              <ul className="caracteristicas-lista">
                {servicio.caracteristicas.slice(0, 4).map((caracteristica, index) => (
                  <li key={index} className="caracteristica-item">
                    <span className="check-icon">✓</span>
                    {caracteristica}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="servicio-beneficios">
              <h4 className="beneficios-titulo">Resultados garantizados</h4>
              <div className="beneficios-grid">
                {servicio.beneficios.slice(0, 2).map((beneficio, index) => (
                  <div key={index} className="beneficio-item">
                    <span className="beneficio-icon">🎯</span>
                    <span className="beneficio-texto">{beneficio}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="servicio-footer">
            <Link href={servicio.href} className="servicio-link">
              <span>Conocer más detalles</span>
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
