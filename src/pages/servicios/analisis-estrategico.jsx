import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AnalisisEstrategico() {
  const caracteristicas = [
    "Diagnóstico profundo de tu situación actual",
    "Definición y priorización de objetivos",
    "Estrategia personalizada",
    "Roadmap de implementación por fases",
    "Seguimiento opcional (aparte)"
  ];

  const beneficios = [
    "Mejora del 400% en toma de decisiones",
    "Reducción del 50% en costos operativos",
    "Aumento del 250% en eficiencia",
    "Ventaja competitiva sostenible"
  ];

  const metodologia = [
    {
      fase: 1,
      titulo: "Auditoría Completa",
      descripcion: "Analizamos todos los aspectos de tu negocio: mercado, competencia, procesos internos y oportunidades",
      duracion: "1-2 semanas"
    },
    {
      fase: 2,
      titulo: "Definición de Objetivos",
      descripcion: "Establecemos objetivos SMART claros y medibles basados en tu situación actual y visión de futuro",
      duracion: "1 semana"
    },
    {
      fase: 3,
      titulo: "Estrategia Personalizada",
      descripcion: "Creamos un plan estratégico detallado con acciones específicas para alcanzar tus objetivos",
      duracion: "1-2 semanas"
    },
    {
      fase: 4,
      titulo: "Roadmap de Implementación",
      descripcion: "Definimos un cronograma realista con prioridades, recursos necesarios y métricas de éxito",
      duracion: "1 semana"
    }
  ];

  const entregables = [
    {
      nombre: "Informe de Diagnóstico",
      descripcion: "Análisis completo de tu situación actual con fortalezas, debilidades y oportunidades",
      icono: "📊"
    },
    {
      nombre: "Plan Estratégico",
      descripcion: "Estrategia personalizada con objetivos claros y acciones específicas",
      icono: "🎯"
    },
    {
      nombre: "Roadmap de Implementación",
      descripcion: "Cronograma detallado con fases, prioridades y métricas de seguimiento",
      icono: "🗺️"
    },
    {
      nombre: "Seguimiento Opcional",
      descripcion: "Acompañamiento en la implementación con revisiones mensuales y ajustes",
      icono: "📈"
    }
  ];

  const casosExito = [
    {
      titulo: "Startup de Tecnología",
      desafio: "Producto innovador pero sin claridad de mercado y modelo de negocio",
      solucion: "Análisis de mercado + definición de buyer persona + estrategia de go-to-market",
      resultado: "200% más leads calificados, 150% más conversiones"
    },
    {
      titulo: "E-commerce Estancado",
      desafio: "Ventas planas por 6 meses, no sabían cómo escalar",
      solucion: "Auditoría completa + optimización de funnel + estrategia de retención",
      resultado: "300% más ventas, 80% más clientes recurrentes"
    },
    {
      titulo: "Servicios Profesionales",
      desafio: "Precios muy bajos, clientes poco rentables, burnout del equipo",
      solucion: "Reposicionamiento + nuevo modelo de precios + automatización",
      resultado: "400% más rentabilidad, 60% menos horas de trabajo"
    }
  ];

  const herramientas = [
    { nombre: "Google Analytics", categoria: "Web Analytics" },
    { nombre: "SEMrush", categoria: "SEO/Competencia" },
    { nombre: "Hotjar", categoria: "UX Analytics" },
    { nombre: "HubSpot", categoria: "CRM/Marketing" },
    { nombre: "Tableau", categoria: "Visualización" },
    { nombre: "SurveyMonkey", categoria: "Investigación" }
  ];

  return (
    <>
      <Head>
        <title>Tu Roadmap Estratégico - Kiwi Marketing</title>
        <meta name="description" content="Consultoría para trazar el camino de dónde estás a dónde quieres llegar. Diagnóstico + estrategia + plan de implementación." />
        <meta name="keywords" content="consultoría estratégica, análisis de negocio, roadmap, planificación estratégica, diagnóstico empresarial" />
      </Head>
      <Header />
      
      {/* Hero Section */}
      <section className="servicio-hero analisis-hero">
        <div className="container">
          <div className="servicio-hero-content">
            <div className="servicio-hero-text">
              <span className="servicio-icon">🎯</span>
              <h1 className="servicio-hero-title">Tu Roadmap Estratégico</h1>
              <h2 className="servicio-hero-subtitle">De dónde estás a dónde querés llegar</h2>
              <p className="servicio-hero-description">
                Consultoría para trazar el camino estratégico de tu negocio. Diagnóstico profundo + estrategia personalizada + 
                plan de implementación accionable. Con o sin seguimiento según necesites.
              </p>
              <div className="servicio-hero-cta">
                <Link href="/contacto" className="btn btn-primary btn-lg">
                  Agendar diagnóstico gratuito
                </Link>
                <Link href="#metodologia" className="btn btn-secondary btn-lg">
                  Ver metodología
                </Link>
              </div>
            </div>
            <div className="servicio-hero-image">
              <div className="hero-image-placeholder">
                <span>Dashboard estratégico</span>
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
              <h3>❌ Problemas comunes en la estrategia</h3>
              <ul>
                <li>No sabés por dónde empezar con tu negocio</li>
                <li>Tenés una idea pero no sabés cómo ejecutarla</li>
                <li>Tu negocio está estancado y no crece</li>
                <li>Tomás decisiones sin datos concretos</li>
                <li>Falta de claridad en objetivos y prioridades</li>
              </ul>
            </div>
            <div className="solucion">
              <h3>✅ Nuestra solución</h3>
              <ul>
                <li><strong>Diagnóstico completo</strong> - Entendemos tu situación actual</li>
                <li><strong>Estrategia clara</strong> - Definimos el camino hacia tus objetivos</li>
                <li><strong>Plan accionable</strong> - Te damos pasos concretos para ejecutar</li>
                <li><strong>Datos reales</strong> - Decisiones basadas en información, no en suposiciones</li>
                <li><strong>Segumiento opcional</strong> - Te acompañamos en la implementación</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section id="metodologia" className="metodologia">
        <div className="container">
          <div className="section-header">
            <h2>Nuestra metodología probada</h2>
            <p>Un proceso estructurado que garantiza resultados claros</p>
          </div>
          <div className="metodologia-steps">
            {metodologia.map((fase, index) => (
              <div key={index} className="metodologia-step">
                <div className="fase-header">
                  <div className="fase-number">{fase.fase}</div>
                  <div className="fase-info">
                    <h3>{fase.titulo}</h3>
                    <span className="fase-duracion">{fase.duracion}</span>
                  </div>
                </div>
                <p>{fase.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entregables */}
      <section className="entregables">
        <div className="container">
          <div className="section-header">
            <h2>¿Qué recibirás?</h2>
            <p>Entregables concretos que podés implementar inmediatamente</p>
          </div>
          <div className="entregables-grid">
            {entregables.map((entregable, index) => (
              <div key={index} className="entregable-card">
                <div className="entregable-icon">{entregable.icono}</div>
                <h3>{entregable.nombre}</h3>
                <p>{entregable.descripcion}</p>
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
                <span>Proceso de análisis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="casos-exito">
        <div className="container">
          <div className="section-header">
            <h2>Casos de éxito reales</h2>
            <p>Resultados concretos que obtuvieron nuestros clientes</p>
          </div>
          <div className="casos-grid">
            {casosExito.map((caso, index) => (
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

      {/* Herramientas */}
      <section className="herramientas">
        <div className="container">
          <div className="section-header">
            <h2>Herramientas de análisis</h2>
            <p>Stack tecnológico para análisis profundo y preciso</p>
          </div>
          <div className="herramientas-grid">
            {herramientas.map((herramienta, index) => (
              <div key={index} className="herramienta-card">
                <h3>{herramienta.nombre}</h3>
                <span className="herramienta-categoria">{herramienta.categoria}</span>
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
                <span>Dashboard de resultados</span>
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
              <h3>💡 Tenés una idea pero no sabés cómo ejecutarla</h3>
              <p>Tenés una buena idea de negocio pero necesitás claridad en la estrategia de implementación</p>
            </div>
            <div className="ideal-item">
              <h3>📊 Tu negocio está estancado</h3>
              <p>Llevás tiempo sin crecer y necesitás identificar qué está frenando tu desarrollo</p>
            </div>
            <div className="ideal-item">
              <h3>🎯 Necesitás un nuevo rumbo</h3>
              <p>Querés cambiar la dirección de tu negocio pero no sabés por dónde empezar</p>
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
                "El análisis estratégico de Kiwi me dio la claridad que necesitaba para mi startup. 
                En 3 meses logré validar mi modelo de negocio y conseguir mi primera ronda de inversión."
              </blockquote>
              <div className="testimonial-author">
                <strong>Laura Fernández</strong>
                <span>Fundadora, Tech Startup</span>
              </div>
            </div>
            <div className="testimonial-image">
              <div className="image-placeholder">
                <span>Foto testimonial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-servicio">
        <div className="container">
          <div className="cta-content">
            <h2>¿Necesitás claridad estratégica en tu negocio?</h2>
            <p>Agendá un diagnóstico gratuito y descubrí las oportunidades ocultas</p>
            <div className="cta-buttons">
              <Link href="/contacto" className="btn btn-primary btn-lg">
                Agendar diagnóstico gratuito
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

