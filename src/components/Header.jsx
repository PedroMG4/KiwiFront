import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link href="/" className="logo">
            <Logo 
              className="logo-image"
              priority={true}
            />
            </Link>
            
            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
              <Link href="/">Inicio</Link>
              <Link href="/servicios">Servicios</Link>
              <Link href="/equipo">Equipo</Link>
              <Link href="/contacto">Contacto</Link>
            </nav>

          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
          </div>
        </div>
      </header>
      
      {/* Botón CTA Sticky */}
      <div className="cta-sticky">
        <Link href="/contacto" className="btn-cta-sticky">
          Hablemos
        </Link>
      </div>
    </>
  );
}
