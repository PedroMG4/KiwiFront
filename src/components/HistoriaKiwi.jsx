import React from 'react';
import Link from 'next/link';

export default function HistoriaKiwi() {
  return (
    <section className="historia-kiwi">
      <div className="container">
        <div className="historia-content">
          <div className="historia-text">
            <h2 className="historia-title">Cómo Nace Kiwi</h2>
            <h3 className="historia-subtitle">De comerciantes a constructores de comunidad</h3>
            
            <div className="historia-paragraphs">
              <p>
                Kiwi nació de una conversación y una decisión: dejar de ser comerciantes tradicionales 
                para convertirnos en constructores de comunidad.
              </p>
              
              <p>
                Florencia y Mauro llevaban años trabajando en el mundo digital y el comercio. 
                Florencia exploraba el marketing, Mauro dominaba otras áreas digitales. Un día, 
                Florencia logró convencer a Mauro de adentrarse en el marketing digital. 
                La respuesta de Mauro fue: "Hagámoslo, pero diferente."
              </p>
              
              <p>
                No queríamos otra agencia tradicional. Toda la vida trabajamos con jefes, empleados, 
                jerarquías rígidas. Queríamos algo que nunca habíamos tenido: un equipo real.
              </p>
              
              <p>
                No buscamos empleados, construimos una comunidad. Un grupo de especialistas que comparten 
                conocimientos, que crecen juntos, donde el mérito importa más que la antigüedad y el capital 
                humano vale más que cualquier proceso.
              </p>
              
              <p>
                Somos emprendedores hablándole a emprendedores. Sabemos lo que es decidir entre invertir 
                en marketing o en la herramienta que necesitas. Conocemos esa presión. Por eso trabajamos 
                a resultados: no queremos que pagues por promesas, sino por logros reales.
              </p>
              
              <p>
                Kiwi es eso: honestidad, calidad, compromiso y resultados. Un equipo que crece contigo.
              </p>
            </div>
            
            <div className="historia-cta">
              <Link href="/equipo" className="btn btn-outline">
                Conocé al equipo completo
              </Link>
            </div>
          </div>
          
          <div className="historia-visual">
            <div className="team-photos">
              <div className="photo-placeholder">
                <span>Fotos del equipo trabajando</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

