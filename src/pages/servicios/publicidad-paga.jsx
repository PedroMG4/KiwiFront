import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CTAButton from '../../components/CTAButton';
import ScrollReveal from '../../components/ScrollReveal';

export default function PublicidadPaga() {
  const caracteristicas = [
    "Campañas en Google Ads y Meta Ads",
    "Segmentación avanzada de audiencias", 
    "Optimización automática de pujas",
    "Análisis de competencia y mercado",
    "A/B testing de creatividades",
    "Reportes de rendimiento en tiempo real"
  ];

  const beneficios = [
    "Aumento del 300% en conversiones",
    "Reducción del 40% en costo por lead", 
    "ROI promedio de 4:1",
    "Escalabilidad garantizada"
  ];

  const plataformas = [
    {
      nombre: "Google Ads",
      descripcion: "Campañas en búsqueda, display y YouTube para capturar intención de compra",
      icono: "🔍"
    },
    {
      nombre: "Meta Ads (Facebook/Instagram)",
      descripcion: "Publicidad social que conecta con tu audiencia en el momento ideal",
      icono: "📱"
    },
    {
      nombre: "TikTok Ads",
      descripcion: "Campañas en la plataforma de mayor crecimiento para audiencias jóvenes",
      icono: "🎵"
    }
  ];

  const proceso = [
    {
      paso: 1,
      titulo: "Análisis y Estrategia",
      descripcion: "Estudiamos tu mercado, competencia y audiencia objetivo para crear la estrategia perfecta"
    },
    {
      paso: 2, 
      titulo: "Configuración Técnica",
      descripcion: "Configuramos cuentas publicitarias, píxeles de seguimiento y herramientas de medición"
    },
    {
      paso: 3,
      titulo: "Creación de Campañas",
      descripcion: "Desarrollamos creatividades y campañas optimizadas para cada plataforma"
    },
    {
      paso: 4,
      titulo: "Optimización Continua",
      descripcion: "Monitoreamos y optimizamos constantemente para maximizar tu ROI"
    }
  ];

  return (
    <>
      <Head>
        <title>Publicidad Paga que Convierte - Kiwi Marketing</title>
        <meta name="description" content="Campañas de publicidad paga estratégicas en Google Ads, Meta Ads y TikTok. Solo pagás cuando cumplimos objetivos. ROI garantizado." />
        <meta name="keywords" content="publicidad paga, google ads, meta ads, tiktok ads, marketing digital, campañas publicitarias" />
      </Head>
      <Header />
      <ScrollReveal />
      
      {/* Hero Section */}
      <section className="servicio-hero publicidad-hero particles-bg">
        <div className="container">
          <div className="servicio-hero-content">
            <div className="servicio-hero-text animate-slide-up">
              <span className="servicio-icon icon-hover">📈</span>
              <h1 className="servicio-hero-title text-shadow">Publicidad Paga que Convierte</h1>
              <h2 className="servicio-hero-subtitle">Campañas estratégicas que maximizan tu ROI</h2>
              <p className="servicio-hero-description">
                Solo pagás cuando cumplimos los objetivos pactados. Setup inicial + gestión mensual 
                basada 100% en resultados medibles en Google Ads, Meta Ads y TikTok Ads.
              </p>
              <div className="servicio-hero-cta">
                <Link href="/contacto" className="btn btn-primary btn-lg btn-3d animate-pulse">
                  Agendar consulta gratuita
                </Link>
                <Link href="#como-funciona" className="btn btn-secondary btn-lg hover-scale">
                  Ver cómo funciona
                </Link>
              </div>
            </div>
            <div className="servicio-hero-image animate-slide-up">
              <div className="hero-image-placeholder hover-lift">
                <span>Dashboard de Campañas Publicitarias</span>
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
              <h3>❌ El problema con la publicidad tradicional</h3>
              <ul>
                <li>Gastás dinero sin garantía de resultados</li>
                <li>No sabés si realmente está funcionando</li>
                <li>Costos por lead muy altos</li>
                <li>Falta de optimización continua</li>
                <li>Sin seguimiento de ROI real</li>
              </ul>
            </div>
            <div className="solucion">
              <h3>✅ Nuestra solución</h3>
              <ul>
                <li><strong>Solo pagás por resultados</strong> - Si no cumplimos objetivos, no cobramos</li>
                <li><strong>ROI medible</strong> - Cada peso invertido se traduce en ganancias</li>
                <li><strong>Optimización constante</strong> - Mejoramos continuamente tus campañas</li>
                <li><strong>Reportes transparentes</strong> - Sabés exactamente qué está pasando</li>
                <li><strong>Escalabilidad garantizada</strong> - Crecés sin límites</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Plataformas */}
      <section className="plataformas-publicidad">
        <div className="container">
          <div className="section-header scroll-reveal">
            <h2 className="text-gradient">Plataformas donde publicitamos</h2>
            <p>Llegamos a tu audiencia donde realmente están</p>
          </div>
          <div className="plataformas-grid">
            {plataformas.map((plataforma, index) => (
              <div key={index} className="plataforma-card hover-lift card-glass">
                <div className="plataforma-icon icon-hover">{plataforma.icono}</div>
                <h3 className="text-gradient">{plataforma.nombre}</h3>
                <p>{plataforma.descripcion}</p>
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
                <span>Dashboard de campañas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section id="como-funciona" className="proceso-servicio">
        <div className="container">
          <div className="section-header scroll-reveal">
            <h2 className="text-gradient">Cómo funciona nuestro proceso</h2>
            <p>Un método probado que garantiza resultados</p>
          </div>
          <div className="proceso-steps">
            {proceso.map((step, index) => (
              <div key={index} className="proceso-step hover-lift scroll-reveal">
                <div className="step-number animate-pulse">{step.paso}</div>
                <div className="step-content">
                  <h3 className="text-gradient">{step.titulo}</h3>
                  <p>{step.descripcion}</p>
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
                <span>Gráficos de resultados</span>
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
              <h3>🛒 E-commerce que quiere escalar</h3>
              <p>Tenés productos que se venden bien y querés llegar a más clientes de forma rentable</p>
            </div>
            <div className="ideal-item">
              <h3>🏢 Servicios locales que buscan clientes</h3>
              <p>Ofrecés servicios profesionales y necesitás generar leads calificados constantemente</p>
            </div>
            <div className="ideal-item">
              <h3>📚 Infoproductos que necesitan leads</h3>
              <p>Tenés cursos, consultorías o productos digitales y necesitás una fuente constante de prospectos</p>
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
                "En 3 meses logramos reducir nuestro costo por lead en un 60% y aumentar las ventas en un 300%. 
                La inversión en publicidad se paga sola con los primeros clientes."
              </blockquote>
              <div className="testimonial-author">
                <strong>María González</strong>
                <span>CEO, Tienda Online de Moda</span>
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
            <h2>¿Listo para empezar a publicitar con resultados garantizados?</h2>
            <p>Agendá una consulta gratuita y analicemos juntos tu caso</p>
            <div className="cta-buttons">
              <Link href="/contacto" className="btn btn-primary btn-lg">
                Agendar consulta gratuita
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

