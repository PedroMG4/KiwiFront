import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img 
                src="/assets/img/logoSOLO.png" 
                alt="Kiwi Marketing Logo" 
                className="footer-logo-image"
              />
            </div>
            <p>Especialistas en marketing digital para hacer crecer tu negocio.</p>
          </div>
          
          <div className="footer-section">
            <h4>Servicios</h4>
            <ul>
              <li><Link href="/servicios/publicidad-paga">Publicidad Paga</Link></li>
              <li><Link href="/servicios/comunicacion-ventas">Comunicación de Ventas</Link></li>
              <li><Link href="/servicios/desarrollo-web-apps">Desarrollo Web y Apps</Link></li>
              <li><Link href="/servicios/automatizaciones">Automatizaciones</Link></li>
              <li><Link href="/servicios/analisis-estrategico">Análisis Estratégico</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contacto</h4>
            <p>Email: info@kiwimarketing.com</p>
            <p>Teléfono: +1 (555) 123-4567</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Kiwi Marketing. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
