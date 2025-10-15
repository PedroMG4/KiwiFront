import React from 'react';

export default function Testimonios() {
  const testimonios = [
    {
      id: 1,
      nombre: 'María González',
      empresa: 'TechStart',
      testimonio: 'Kiwi Marketing transformó completamente nuestra presencia digital. Nuestras ventas aumentaron un 300% en solo 6 meses.',
      imagen: '/assets/team/maria.jpg'
    },
    {
      id: 2,
      nombre: 'Carlos Rodríguez',
      empresa: 'E-commerce Plus',
      testimonio: 'El equipo de Kiwi es excepcional. Su estrategia de marketing digital nos ayudó a expandirnos a nuevos mercados.',
      imagen: '/assets/team/carlos.jpg'
    },
    {
      id: 3,
      nombre: 'Ana Martínez',
      empresa: 'Servicios Pro',
      testimonio: 'Gracias a Kiwi Marketing, ahora tenemos una estrategia digital clara y resultados medibles cada mes.',
      imagen: '/assets/team/ana.jpg'
    }
  ];

  return (
    <section className="testimonios">
      <div className="container">
        <h2 className="testimonios-titulo">Lo que dicen nuestros clientes</h2>
        <div className="testimonios-grid">
          {testimonios.map((testimonio) => (
            <div key={testimonio.id} className="testimonio-card">
              <div className="testimonio-contenido">
                <p className="testimonio-texto">"{testimonio.testimonio}"</p>
                <div className="testimonio-autor">
                  <div className="autor-info">
                    <h4 className="autor-nombre">{testimonio.nombre}</h4>
                    <p className="autor-empresa">{testimonio.empresa}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
