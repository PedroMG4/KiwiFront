import React from 'react';
import CTAButton from './CTAButton';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">Resultados Reales o No Pagás</span>
          </h1>
          <h2 className="hero-subtitle">
            La primera agencia de marketing digital que solo cobra cuando cumple tus objetivos
          </h2>
          <p className="hero-description">
            Trabajamos a resultados medibles. No pagás por promesas, pagás por logros reales.<br />
            Tu éxito es nuestro éxito.
          </p>
          <div className="hero-actions">
            <CTAButton href="/contacto" variant="primary">
              Hablemos de tu proyecto
            </CTAButton>
            <CTAButton href="/servicios" variant="secondary">
              Conocé nuestros servicios
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
