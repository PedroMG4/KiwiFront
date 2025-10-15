import React from 'react';
import Link from 'next/link';

export default function CTAFuerte() {
  return (
    <section className="cta-fuerte">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">¿Listo para trabajar a resultados?</h2>
          <p className="cta-subtitle">Hablemos de tu proyecto. Sin costo, sin compromiso.</p>
          
          <div className="cta-button-container">
            <Link href="/contacto" className="btn btn-cta-grande">
              Agendar diagnóstico gratuito
            </Link>
          </div>
          
          <div className="cta-confianza">
            <div className="confianza-item">
              <span className="confianza-icon">✓</span>
              <span className="confianza-text">Respuesta en menos de 24hs</span>
            </div>
            <div className="confianza-item">
              <span className="confianza-icon">✓</span>
              <span className="confianza-text">Diagnóstico sin cargo</span>
            </div>
            <div className="confianza-item">
              <span className="confianza-icon">✓</span>
              <span className="confianza-text">Sin letra chica</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

