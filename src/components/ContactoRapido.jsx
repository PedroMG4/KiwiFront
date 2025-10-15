import React, { useState } from 'react';

export default function ContactoRapido() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu consulta! Te contactaremos pronto.');
  };

  return (
    <section className="contacto-rapido">
      <div className="container">
        <div className="contacto-content">
          <div className="contacto-form">
            <h2 className="contacto-title">Empecemos a trabajar juntos</h2>
            <form onSubmit={handleSubmit} className="form-rapido">
              <div className="form-row">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <input
                type="tel"
                name="telefono"
                placeholder="Tu teléfono"
                value={formData.telefono}
                onChange={handleChange}
              />
              
              <textarea
                name="mensaje"
                placeholder="Cuéntanos sobre tu proyecto..."
                rows="4"
                value={formData.mensaje}
                onChange={handleChange}
                required
              ></textarea>
              
              <button type="submit" className="btn btn-primary">
                Enviar consulta
              </button>
            </form>
          </div>
          
          <div className="contacto-info">
            <h3>Contacto directo</h3>
            <div className="contacto-item">
              <span className="contacto-icon">📱</span>
              <span>WhatsApp: +54 9 11 1234-5678</span>
            </div>
            <div className="contacto-item">
              <span className="contacto-icon">✉️</span>
              <span>Email: hola@kiwimarketing.com</span>
            </div>
            <div className="contacto-item">
              <span className="contacto-icon">📸</span>
              <span>Instagram: @kiwimarketing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


