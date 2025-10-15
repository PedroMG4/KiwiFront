import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ComunicacionVentas() {
  const caracteristicas = [
    "Guiones y estrategia de comunicación",
    "Grabación con comunicadores profesionales", 
    "Edición y postproducción completa",
    "Videos para ads o contenido orgánico",
    "Scripts de ventas personalizados",
    "Automatización de follow-up"
  ];

  const beneficios = [
    "Mejora del 250% en tasa de cierre",
    "Reducción del 60% en tiempo de venta",
    "Aumento del 180% en retención",
    "Procesos 100% automatizados"
  ];

  const tiposContenido = [
    {
      nombre: "Videos Testimoniales",
      descripcion: "Comunicadores profesionales que actúan como clientes satisfechos de tu producto o servicio",
      icono: "🎬"
    },
    {
      nombre: "Demos de Producto", 
      descripcion: "Presentaciones dinámicas que muestran las características y beneficios de tus productos",
      icono: "📱"
    },
    {
      nombre: "Scripts de Ventas",
      descripcion: "Guiones optimizados para diferentes canales: WhatsApp, email, redes sociales",
      icono: "💬"
    }
  ];

  const proceso = [
    {
      paso: 1,
      titulo: "Briefing y Estrategia",
      descripcion: "Analizamos tu producto, audiencia y objetivos para crear la estrategia de comunicación perfecta"
    },
    {
      paso: 2,
      titulo: "Desarrollo de Guiones", 
      descripcion: "Creamos scripts personalizados que conectan emocionalmente con tu audiencia"
    },
    {
      paso: 3,
      titulo: "Producción Profesional",
      descripcion: "Nuestros comunicadores graban el contenido con la calidad y profesionalismo que tu marca merece"
    },
    {
      paso: 4,
      titulo: "Entrega y Optimización",
      descripcion: "Te entregamos el contenido listo para usar y optimizamos según los resultados obtenidos"
    }
  ];

  const casosUso = [
    {
      titulo: "E-commerce de Ropa",
      desafio: "Productos genéricos, competencia alta",
      solucion: "Videos testimoniales que muestran estilos de vida y emociones",
      resultado: "300% más conversiones"
    },
    {
      titulo: "Consultoría Financiera", 
      desafio: "Servicio intangible, difícil de explicar",
      solucion: "Demos que simplifican conceptos complejos con casos reales",
      resultado: "150% más leads calificados"
    },
    {
      titulo: "Software B2B",
      desafio: "Producto técnico, audiencia no técnica", 
      solucion: "Scripts que traducen beneficios técnicos a lenguaje cotidiano",
      resultado: "200% más demos agendadas"
    }
  ];

  return (
    <>
      <Head>
        <title>Tu Producto, Nuestra Voz - Kiwi Marketing</title>
        <meta name="description" content="Comunicadores profesionales que se convierten en la voz de tu marca. Videos testimoniales, demos y scripts de ventas." />
        <meta name="keywords" content="comunicación de ventas, videos testimoniales, scripts de ventas, marketing de contenidos, demos de producto" />
      </Head>
      <Header />
      
      {/* Hero Section */}
      <section className="servicio-hero comunicacion-hero">
        <div className="container">
          <div className="servicio-hero-content">
            <div className="servicio-hero-text">
              <span className="servicio-icon">🎬</span>
              <h1 className="servicio-hero-title">Tu Producto, Nuestra Voz</h1>
              <h2 className="servicio-hero-subtitle">Comunicadores profesionales que se convierten en la voz de tu marca</h2>
              <p className="servicio-hero-description">
                Ideales para emprendedores que no se animan a cámara o marcas que necesitan humanizar 
                su comunicación. Contenido para pautas o redes orgánicas.
              </p>
              <div className="servicio-hero-cta">
                <Link href="/contacto" className="btn btn-primary btn-lg">
                  Ver muestras de trabajo
                </Link>
                <Link href="#tipos-contenido" className="btn btn-secondary btn-lg">
                  Ver tipos de contenido
                </Link>
              </div>
            </div>
            <div className="servicio-hero-image">
              <div className="hero-image-placeholder">
                <span>Video comunicador profesional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema/Solución */}
      <section className="problema-solucion">
        <div className="container">
          <div className="problema-solucion-content">
            <div className="problema">
              <h3>❌ Problemas comunes en comunicación</h3>
              <ul>
                <li>No te animás a aparecer en cámara</li>
                <li>Tu equipo no tiene experiencia en video</li>
                <li>Contenido poco profesional que no convierte</li>
                <li>Falta de consistencia en el mensaje</li>
                <li>Scripts genéricos que no conectan</li>
              </ul>
            </div>
            <div className="solucion">
              <h3>✅ Nuestra solución</h3>
              <ul>
                <li><strong>Comunicadores profesionales</strong> - Actores y presentadores experimentados</li>
                <li><strong>Guiones personalizados</strong> - Adaptados a tu producto y audiencia</li>
                <li><strong>Producción de calidad</strong> - Equipamiento profesional y edición avanzada</li>
                <li><strong>Versatilidad total</strong> - Para ads, orgánico, email, WhatsApp</li>
                <li><strong>Resultados medibles</strong> - Cada video está optimizado para conversión</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Contenido */}
      <section id="tipos-contenido" className="tipos-contenido">
        <div className="container">
          <div className="section-header">
            <h2>Tipos de contenido que creamos</h2>
            <p>Contenido versátil para todos tus canales de comunicación</p>
          </div>
          <div className="tipos-grid">
            {tiposContenido.map((tipo, index) => (
              <div key={index} className="tipo-card">
                <div className="tipo-icon">{tipo.icono}</div>
                <h3>{tipo.nombre}</h3>
                <p>{tipo.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="caracteristicas-servicio">
        <div className="container">
          <div className="caracteristicas-content">
            <div className="caracteristicas-text">
              <h2>¿Qué incluye nuestro servicio?</h2>
              <ul className="caracteristicas-list">
                {caracteristicas.map((caracteristica, index) => (
                  <li key={index} className="caracteristica-item">
                    <span className="check-icon">✓</span>
                    {caracteristica}
                  </li>
                ))}
              </ul>
            </div>
            <div className="caracteristicas-image">
              <div className="image-placeholder">
                <span>Set de grabación profesional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="proceso-servicio">
        <div className="container">
          <div className="section-header">
            <h2>Cómo trabajamos</h2>
            <p>Un proceso creativo que garantiza resultados</p>
          </div>
          <div className="proceso-steps">
            {proceso.map((step, index) => (
              <div key={index} className="proceso-step">
                <div className="step-number">{step.paso}</div>
                <div className="step-content">
                  <h3>{step.titulo}</h3>
                  <p>{step.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="casos-uso">
        <div className="container">
          <div className="section-header">
            <h2>Casos de éxito reales</h2>
            <p>Resultados concretos que obtuvieron nuestros clientes</p>
          </div>
          <div className="casos-grid">
            {casosUso.map((caso, index) => (
              <div key={index} className="caso-card">
                <h3>{caso.titulo}</h3>
                <div className="caso-contenido">
                  <div className="desafio">
                    <h4>Desafío:</h4>
                    <p>{caso.desafio}</p>
                  </div>
                  <div className="solucion">
                    <h4>Solución:</h4>
                    <p>{caso.solucion}</p>
                  </div>
                  <div className="resultado">
                    <h4>Resultado:</h4>
                    <p className="resultado-numero">{caso.resultado}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="beneficios-servicio">
        <div className="container">
          <div className="beneficios-content">
            <div className="beneficios-text">
              <h2>Resultados que obtendrás</h2>
              <div className="beneficios-grid">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="beneficio-item">
                    <span className="beneficio-number">{beneficio.split(' ')[0]}</span>
                    <span className="beneficio-text">{beneficio.split(' ').slice(1).join(' ')}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="beneficios-image">
              <div className="image-placeholder">
                <span>Galería de videos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Para */}
      <section className="ideal-para">
        <div className="container">
          <div className="section-header">
            <h2>¿Es para vos?</h2>
            <p>Este servicio es ideal si...</p>
          </div>
          <div className="ideal-para-grid">
            <div className="ideal-item">
              <h3>😰 Emprendedores introvertidos con buenos productos</h3>
              <p>Tenés un producto excelente pero no te sentís cómodo apareciendo en cámara</p>
            </div>
            <div className="ideal-item">
              <h3>🏢 Marcas B2C que necesitan testimoniales</h3>
              <p>Necesitás credibilidad social y testimonios que generen confianza en tus clientes</p>
            </div>
            <div className="ideal-item">
              <h3>🛒 E-commerce que necesita demos de producto</h3>
              <p>Querés mostrar tus productos en acción de manera profesional y atractiva</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial-servicio">
        <div className="container">
          <div className="testimonial-content">
            <div className="testimonial-text">
              <blockquote>
                "Como introvertido, nunca me animé a hacer videos. Con Kiwi pude tener contenido profesional 
                que realmente convierte. Mis ventas aumentaron 250% en el primer mes."
              </blockquote>
              <div className="testimonial-author">
                <strong>Carlos Mendoza</strong>
                <span>Fundador, App de Productividad</span>
              </div>
            </div>
            <div className="testimonial-image">
              <div className="image-placeholder">
                <span>Video testimonial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-servicio">
        <div className="container">
          <div className="cta-content">
            <h2>¿Listo para que tu producto tenga la voz que merece?</h2>
            <p>Agendá una consulta y veamos muestras de nuestro trabajo</p>
            <div className="cta-buttons">
              <Link href="/contacto" className="btn btn-primary btn-lg">
                Ver muestras de trabajo
              </Link>
              <Link href="/servicios" className="btn btn-secondary">
                Ver otros servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

