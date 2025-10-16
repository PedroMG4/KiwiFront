import React from 'react';

export default function ComoTrabajamos() {
  const pasos = [
    {
      icono: "🔍",
      titulo: "Entendemos tu negocio",
      descripcion: "Analizamos tu situación actual, objetivos y recursos. Sin costo, sin compromiso."
    },
    {
      icono: "📋",
      titulo: "Diseñamos tu plan",
      descripcion: "Creamos una estrategia personalizada con objetivos claros y métricas medibles."
    },
    {
      icono: "⚙️",
      titulo: "Nuestro equipo trabaja",
      descripcion: "Especialistas en cada área ejecutan con transparencia total. Ves el progreso en tiempo real."
    },
    {
      icono: "📈",
      titulo: "Pagás solo si cumplimos",
      descripcion: "Al finalizar el periodo, pagás en proporción a los objetivos cumplidos. Simple y justo."
    }
  ];

  return (
    <section className="como-trabajamos">
      <div className="container">
        <div className="como-trabajamos-header">
          <h2 className="como-trabajamos-title">Cómo Trabajamos en Kiwi</h2>
        </div>
        
        <div className="pasos-container">
          {pasos.map((paso, index) => (
            <div key={index} className="paso-item">
              <div className="paso-icon">{paso.icono}</div>
              <div className="paso-content">
                <h3 className="paso-titulo">{paso.titulo}</h3>
                <p className="paso-descripcion">{paso.descripcion}</p>
              </div>
              {index < pasos.length - 1 && <div className="paso-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



