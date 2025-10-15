import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    servicio: '',
    mensaje: '',
    aceptaComunicaciones: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const errors = {};
    
    // Validación de nombre (solo letras y espacios)
    if (!formData.nombre.trim()) {
      errors.nombre = 'El nombre es obligatorio';
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(formData.nombre.trim())) {
      errors.nombre = 'El nombre solo puede contener letras y espacios';
    }
    
    // Validación de email
    if (!formData.email.trim()) {
      errors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Ingresá un email válido';
    }
    
    // Validación de teléfono (formato argentino)
    if (!formData.telefono.trim()) {
      errors.telefono = 'El teléfono es obligatorio';
    } else if (!/^(\+54\s?)?9?\d{2}\s?\d{4}\s?\d{4}$/.test(formData.telefono.replace(/[\s-]/g, ''))) {
      errors.telefono = 'Ingresá un teléfono argentino válido (ej: +54 9 11 1234-5678)';
    }
    
    // Validación de servicio
    if (!formData.servicio) {
      errors.servicio = 'Seleccioná un servicio';
    }
    
    // Validación de mensaje
    if (!formData.mensaje.trim()) {
      errors.mensaje = 'El mensaje es obligatorio';
    } else if (formData.mensaje.trim().length < 10) {
      errors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }
    
    // Validación de checkbox
    if (!formData.aceptaComunicaciones) {
      errors.aceptaComunicaciones = 'Debés aceptar recibir comunicaciones';
    }
    
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      // Aquí podrías mostrar los errores en la UI
      console.log('Errores de validación:', errors);
      alert('Por favor, corregí los errores en el formulario');
      return;
    }
    
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    setIsSubmitted(true);
  };

  const servicios = [
    'Publicidad Paga',
    'Comunicación y Ventas',
    'Desarrollo Web y Apps',
    'Automatizaciones',
    'Análisis Estratégico',
    'Múltiples servicios / No estoy seguro'
  ];

  const faqs = [
    {
      pregunta: "¿Cuánto cuesta trabajar con Kiwi?",
      respuesta: "Depende del servicio y alcance de tu proyecto. Algunos servicios tienen modelo de pago por resultados, otros por proyecto. En el diagnóstico gratuito te damos un presupuesto personalizado."
    },
    {
      pregunta: "¿Realmente solo pago si cumplen objetivos?",
      respuesta: "En servicios con modelo de resultados (como Publicidad Paga), exacto: pagás en proporción a los objetivos cumplidos. Hay un setup inicial, y luego la gestión mensual es 100% basada en resultados."
    },
    {
      pregunta: "¿Trabajan con empresas fuera de Argentina?",
      respuesta: "Sí, trabajamos de forma remota con clientes de toda Latinoamérica y el mundo. La mayoría de nuestros servicios no requieren presencialidad."
    },
    {
      pregunta: "¿Cuánto demora empezar a trabajar?",
      respuesta: "Después del diagnóstico y aprobación del presupuesto, podemos empezar en 48-72hs según el servicio."
    },
    {
      pregunta: "¿Puedo combinar varios servicios?",
      respuesta: "¡Absolutamente! De hecho, los mejores resultados se logran combinando servicios (ej: Desarrollo Web + Publicidad Paga + Automatizaciones)."
    }
  ];

  return (
    <>
      <Head>
        <title>Hablemos de Tu Proyecto - Kiwi Marketing</title>
        <meta name="description" content="Contactanos para impulsar tu negocio. Múltiples formas de contacto, respuesta en menos de 24hs." />
        <meta name="keywords" content="contacto kiwi marketing, consulta marketing digital, agencia marketing argentina" />
      </Head>
      <Header />
      <ScrollReveal />
      
      {/* Hero Section */}
      <section className="contacto-hero particles-bg">
        <div className="container">
          <div className="contacto-hero-content animate-slide-up">
            <h1 className="contacto-hero-title text-shadow">Hablemos de Tu Proyecto</h1>
            <h2 className="contacto-hero-subtitle">Estamos listos para escucharte. Elegí la forma que más te guste para contactarnos.</h2>
          </div>
        </div>
      </section>

      {/* Formulario y Info de Contacto */}
      <section className="contacto-main">
        <div className="container">
          <div className="contacto-grid">
            {/* Formulario (60%) */}
            <div className="formulario-container">
              {!isSubmitted ? (
                <form className="formulario-contacto" onSubmit={handleSubmit}>
                  <h3>Envíanos tu consulta</h3>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="nombre">Nombre completo *</label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre completo"
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
                        required
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="telefono">Teléfono / WhatsApp *</label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        placeholder="+54 9 11 1234-5678"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="empresa">Empresa / Proyecto (opcional)</label>
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

                  <div className="form-group">
                    <label htmlFor="servicio">¿En qué servicio estás interesado? *</label>
                    <select
                      id="servicio"
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccioná un servicio</option>
                      {servicios.map((servicio, index) => (
                        <option key={index} value={servicio}>{servicio}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="mensaje">Mensaje / Contanos de tu proyecto *</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      placeholder="Contanos sobre tu proyecto, objetivos, presupuesto aproximado..."
                      rows="5"
                    />
                  </div>

                  <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="aceptaComunicaciones"
                        checked={formData.aceptaComunicaciones}
                        onChange={handleChange}
                        required
                        className="checkbox-input"
                      />
                      <span className="checkbox-text">Acepto recibir comunicaciones de Kiwi *</span>
                    </label>
                  </div>

                  <button type="submit" className="btn-enviar">
                    Enviar consulta
                  </button>
                </form>
              ) : (
                <div className="mensaje-exito">
                  <div className="success-icon">✓</div>
                  <h3>¡Gracias!</h3>
                  <p>Recibimos tu consulta. Te respondemos en menos de 24hs.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="btn-nueva-consulta"
                  >
                    Enviar nueva consulta
                  </button>
                </div>
              )}
            </div>

            {/* Info de Contacto (40%) */}
            <div className="info-contacto">
              <h3>Otras Formas de Contactarnos</h3>
              
              {/* WhatsApp */}
              <div className="contacto-item whatsapp">
                <div className="contacto-header">
                  <span className="contacto-icon">📱</span>
                  <h4>WhatsApp Kiwi Oficial</h4>
                </div>
                <p className="contacto-dato">+54 9 379 474-1602</p>
                <a 
                  href="https://wa.me/543794741602" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  Iniciar chat
                </a>
              </div>

              {/* Email */}
              <div className="contacto-item">
                <div className="contacto-header">
                  <span className="contacto-icon">✉️</span>
                  <h4>Email</h4>
                </div>
                <p className="contacto-dato">hola@kiwidigital.agency</p>
                <a href="mailto:hola@kiwidigital.agency" className="btn-email">
                  Enviar email
                </a>
              </div>

              {/* Instagram */}
              <div className="contacto-item">
                <div className="contacto-header">
                  <span className="contacto-icon">📸</span>
                  <h4>Instagram</h4>
                </div>
                <p className="contacto-dato">@kiwidigital.agency</p>
                <a 
                  href="https://instagram.com/kiwidigital.agency" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-instagram"
                >
                  Seguir en Instagram
                </a>
              </div>

              {/* Ubicación */}
              <div className="contacto-item">
                <div className="contacto-header">
                  <span className="contacto-icon">📍</span>
                  <h4>Oficina</h4>
                </div>
                <p className="contacto-dato">Santa Cruz 2002, Corrientes, Argentina</p>
              </div>

              {/* Horarios */}
              <div className="contacto-item">
                <div className="contacto-header">
                  <span className="contacto-icon">🕒</span>
                  <h4>Horarios</h4>
                </div>
                <p className="contacto-dato">Lunes a Viernes: 9:00 - 18:00 hs (horario Argentina)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promesa de Contacto */}
      <section className="promesa-contacto">
        <div className="container">
          <div className="promesa-grid">
            <div className="promesa-item">
              <div className="promesa-icon">✓</div>
              <h4>Respuesta en menos de 24hs</h4>
            </div>
            <div className="promesa-item">
              <div className="promesa-icon">✓</div>
              <h4>Diagnóstico gratuito sin compromiso</h4>
            </div>
            <div className="promesa-item">
              <div className="promesa-icon">✓</div>
              <h4>Transparencia total desde el primer contacto</h4>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header scroll-reveal">
            <h2 className="text-gradient">Preguntas Frecuentes Antes de Contactarnos</h2>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item scroll-reveal">
                <h4 className="faq-pregunta">{faq.pregunta}</h4>
                <p className="faq-respuesta">{faq.respuesta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="contacto-cta-final">
        <div className="container">
          <div className="cta-content">
            <h2 className="text-shadow">¿Todavía con dudas?</h2>
            <p>Escribinos por WhatsApp y charlamos sin compromiso</p>
            <a 
              href="https://wa.me/543794741602" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-whatsapp-final"
            >
              📱 Chateá con nosotros
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

