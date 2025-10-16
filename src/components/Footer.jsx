import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* COLUMNA 1: Branding */}
          <div className="footer-section">
            <div className="footer-logo">
              <Logo 
                width={130}
                height={35}
                className="footer-logo-image"
              />
            </div>
            <p className="footer-tagline">Resultados reales o no pagás</p>
            <p className="footer-copyright">© 2025 Kiwi Marketing Digital</p>
          </div>
          
          {/* COLUMNA 2: Enlaces Rápidos */}
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/servicios">Servicios</Link></li>
              <li><Link href="/equipo">Equipo</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
            </ul>
          </div>
          
          {/* COLUMNA 3: Servicios */}
          <div className="footer-section">
            <h4>Servicios</h4>
            <ul>
              <li><Link href="/servicios/publicidad-paga">Publicidad Paga</Link></li>
              <li><Link href="/servicios/comunicacion-ventas">Comunicación y Ventas</Link></li>
              <li><Link href="/servicios/desarrollo-web-apps">Desarrollo Web y Apps</Link></li>
              <li><Link href="/servicios/automatizaciones">Automatizaciones</Link></li>
              <li><Link href="/servicios/analisis-estrategico">Análisis Estratégico</Link></li>
            </ul>
          </div>
          
          {/* COLUMNA 4: Contacto */}
          <div className="footer-section">
            <h4>Contacto</h4>
            <div className="footer-contact">
              <p><strong>WhatsApp:</strong> <a href="https://wa.me/543794741602" target="_blank" rel="noopener noreferrer">+54 9 379 474-1602</a></p>
              <p><strong>Email:</strong> <a href="mailto:hola@kiwidigital.agency">hola@kiwidigital.agency</a></p>
              <p><strong>Instagram:</strong> <a href="https://instagram.com/kiwidigital.agency" target="_blank" rel="noopener noreferrer">@kiwidigital.agency</a></p>
              <p><strong>Ubicación:</strong> Corrientes, Argentina</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-legal">
            <Link href="/terminos">Términos y Condiciones</Link>
            <span>|</span>
            <Link href="/privacidad">Política de Privacidad</Link>
          </div>
          <div className="footer-dev">
            <p>DevBy Pedro Garay</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
