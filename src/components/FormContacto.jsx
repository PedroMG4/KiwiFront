import React, { useState } from 'react';

export default function FormContacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    servicio: '',
    presupuesto: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí se implementaría el envío del formulario
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
  };

  return (
    <div className="contacto-container">
      <div className="contacto-info">
        <div className="info-section">
          <h3>📞 Información de Contacto</h3>
          <div className="contact-item">
            <strong>Email:</strong>
            <span>hola@kiwimarketing.com</span>
          </div>
          <div className="contact-item">
            <strong>Teléfono:</strong>
            <span>+54 11 1234-5678</span>
          </div>
          <div className="contact-item">
            <strong>WhatsApp:</strong>
            <span>+54 9 11 1234-5678</span>
          </div>
          <div className="contact-item">
            <strong>Horario:</strong>
            <span>Lun - Vie: 9:00 - 18:00</span>
          </div>
        </div>

        <div className="info-section">
          <h3>🚀 ¿Por qué elegirnos?</h3>
          <ul className="benefits-list">
            <li>✅ Consultoría gratuita inicial</li>
            <li>✅ Respuesta en menos de 24hs</li>
            <li>✅ Presupuesto sin compromiso</li>
            <li>✅ Resultados garantizados</li>
          </ul>
        </div>
      </div>

      <form className="form-contacto" onSubmit={handleSubmit}>
        <div className="form-header">
          <h3>💬 Cuéntanos sobre tu proyecto</h3>
          <p>Completa el formulario y nos pondremos en contacto contigo</p>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nombre">Nombre completo *</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre completo"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="+54 9 11 1234-5678"
            />
          </div>

          <div className="form-group">
            <label htmlFor="empresa">Empresa</label>
            <input
              type="text"
              id="empresa"
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              placeholder="Nombre de tu empresa"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="servicio">Servicio de interés</label>
            <select
              id="servicio"
              name="servicio"
              value={formData.servicio}
              onChange={handleChange}
            >
              <option value="">Selecciona un servicio</option>
              <option value="publicidad">Publicidad Paga</option>
              <option value="comunicacion">Comunicación de Ventas</option>
              <option value="desarrollo">Desarrollo Web y Apps</option>
              <option value="automatizaciones">Automatizaciones</option>
              <option value="analisis">Análisis Estratégico</option>
              <option value="multiple">Múltiples servicios</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="presupuesto">Presupuesto aproximado</label>
            <select
              id="presupuesto"
              name="presupuesto"
              value={formData.presupuesto}
              onChange={handleChange}
            >
              <option value="">Selecciona un rango</option>
              <option value="1000-3000">$1,000 - $3,000</option>
              <option value="3000-5000">$3,000 - $5,000</option>
              <option value="5000-10000">$5,000 - $10,000</option>
              <option value="10000+">$10,000+</option>
              <option value="consultar">Prefiero consultar</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Cuéntanos sobre tu proyecto *</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="5"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Describe tu proyecto, objetivos, timeline, etc..."
            required
          ></textarea>
        </div>

        <div className="form-footer">
          <button type="submit" className="btn-submit">
            <span>🚀 Enviar consulta</span>
            <span className="btn-arrow">→</span>
          </button>
          <p className="form-disclaimer">
            * Campos obligatorios. Te contactaremos en menos de 24 horas.
          </p>
        </div>
      </form>
    </div>
  );
}
