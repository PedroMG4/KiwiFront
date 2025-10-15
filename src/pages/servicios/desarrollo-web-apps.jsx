import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function DesarrolloWebApps() {
  const caracteristicas = [
    "Diseño UI/UX profesional (o usamos el tuyo)",
    "Desarrollo a medida según necesidad",
    "Código fuente en tu propiedad", 
    "Capacitación de uso",
    "Soporte y mantenimiento (membresía opcional)",
    "SEO técnico implementado"
  ];

  const beneficios = [
    "Aumento del 200% en velocidad de carga",
    "Mejora del 150% en conversiones",
    "Reducción del 80% en tasa de rebote", 
    "Experiencia de usuario premium"
  ];

  const tiposProyectos = [
    {
      nombre: "Páginas Institucionales",
      descripcion: "Sitios web corporativos que transmiten profesionalismo y credibilidad",
      icono: "🏢",
      caracteristicas: ["Responsive design", "SEO optimizado", "CMS fácil de usar"]
    },
    {
      nombre: "E-commerce Completos", 
      descripcion: "Tiendas online con todas las funcionalidades que necesitás para vender",
      icono: "🛒",
      caracteristicas: ["Carrito de compras", "Pagos integrados", "Gestión de inventario"]
    },
    {
      nombre: "Landing Pages",
      descripcion: "Páginas de conversión optimizadas para generar leads y ventas",
      icono: "🎯",
      caracteristicas: ["A/B testing", "Formularios optimizados", "Analytics integrado"]
    },
    {
      nombre: "Aplicaciones Web",
      descripcion: "CRM, SaaS, marketplaces y plataformas personalizadas",
      icono: "⚡",
      caracteristicas: ["Base de datos", "API REST", "Autenticación segura"]
    }
  ];

  const proceso = [
    {
      paso: 1,
      titulo: "Discovery y Planificación",
      descripcion: "Analizamos tus necesidades, objetivos y audiencia para definir la estrategia técnica"
    },
    {
      paso: 2,
      titulo: "Diseño y Prototipado",
      descripcion: "Creamos wireframes y diseños que reflejan tu marca y optimizan la conversión"
    },
    {
      paso: 3,
      titulo: "Desarrollo y Programación", 
      descripcion: "Construimos tu plataforma con las mejores tecnologías y prácticas de desarrollo"
    },
    {
      paso: 4,
      titulo: "Testing y Lanzamiento",
      descripcion: "Probamos exhaustivamente y lanzamos tu plataforma con capacitación incluida"
    }
  ];

  const tecnologias = [
    { nombre: "React/Next.js", categoria: "Frontend" },
    { nombre: "Node.js", categoria: "Backend" },
    { nombre: "MongoDB/PostgreSQL", categoria: "Base de Datos" },
    { nombre: "AWS/Vercel", categoria: "Hosting" },
    { nombre: "Stripe/PayPal", categoria: "Pagos" },
    { nombre: "SendGrid", categoria: "Email" }
  ];

  const casosExito = [
    {
      titulo: "E-commerce de Moda",
      desafio: "Tienda online lenta, pocas conversiones",
      solucion: "Rediseño completo + optimización de velocidad",
      resultado: "300% más ventas, 70% menos rebote"
    },
    {
      titulo: "SaaS de Gestión",
      desafio: "Necesitaban una plataforma personalizada",
      solucion: "Desarrollo de aplicación web completa",
      resultado: "1000+ usuarios activos, 95% satisfacción"
    },
    {
      titulo: "Landing Page de Cursos",
      desafio: "Página que no convertía leads",
      solucion: "Landing optimizada para conversión",
      resultado: "400% más leads calificados"
    }
  ];

  return (
    <>
      <Head>
        <title>Plataformas que Convierten - Kiwi Marketing</title>
        <meta name="description" content="Desarrollo de sitios web y aplicaciones a medida. Diseño incluido, código en propiedad, soporte opcional." />
        <meta name="keywords" content="desarrollo web, aplicaciones web, e-commerce, landing pages, diseño UI/UX" />
      </Head>
      <Header />
      
      {/* Hero Section */}
      <section className="servicio-hero desarrollo-hero">
        <div className="container">
          <div className="servicio-hero-content">
            <div className="servicio-hero-text">
              <span className="servicio-icon">💻</span>
              <h1 className="servicio-hero-title">Plataformas que Convierten</h1>
              <h2 className="servicio-hero-subtitle">Desarrollo de sitios web y aplicaciones a medida</h2>
              <p className="servicio-hero-description">
                Desde landing pages hasta e-commerce completos y plataformas personalizadas. 
                Diseño incluido, código en propiedad, soporte opcional.
              </p>
              <div className="servicio-hero-cta">
                <Link href="/contacto" className="btn btn-primary btn-lg">
                  Consultar mi proyecto
                </Link>
                <Link href="#tipos-proyectos" className="btn btn-secondary btn-lg">
                  Ver tipos de proyectos
                </Link>
              </div>
            </div>
            <div className="servicio-hero-image">
              <div className="hero-image-placeholder">
                <span>Mockup de aplicación web</span>
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
              <h3>❌ Problemas comunes en desarrollo web</h3>
              <ul>
                <li>Páginas lentas que espantan a tus visitantes</li>
                <li>Diseño desactualizado que no genera confianza</li>
                <li>No funciona bien en móviles</li>
                <li>No aparece en Google</li>
                <li>Código que no es tuyo y dependés del desarrollador</li>
              </ul>
            </div>
            <div className="solucion">
              <h3>✅ Nuestra solución</h3>
              <ul>
                <li><strong>Velocidad optimizada</strong> - Páginas que cargan en menos de 3 segundos</li>
                <li><strong>Diseño moderno</strong> - UI/UX que convierte visitantes en clientes</li>
                <li><strong>100% responsive</strong> - Perfecto en todos los dispositivos</li>
                <li><strong>SEO integrado</strong> - Aparecés en Google desde el día 1</li>
                <li><strong>Código en tu propiedad</strong> - Sos independiente, no dependés de nadie</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Proyectos */}
      <section id="tipos-proyectos" className="tipos-proyectos">
        <div className="container">
          <div className="section-header">
            <h2>Tipos de proyectos que desarrollamos</h2>
            <p>Desde sitios simples hasta plataformas complejas</p>
          </div>
          <div className="proyectos-grid">
            {tiposProyectos.map((proyecto, index) => (
              <div key={index} className="proyecto-card">
                <div className="proyecto-icon">{proyecto.icono}</div>
                <h3>{proyecto.nombre}</h3>
                <p>{proyecto.descripcion}</p>
                <ul className="proyecto-caracteristicas">
                  {proyecto.caracteristicas.map((caracteristica, idx) => (
                    <li key={idx}>✓ {caracteristica}</li>
                  ))}
                </ul>
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
                <span>Proceso de desarrollo</span>
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
            <p>Un proceso estructurado que garantiza resultados</p>
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

      {/* Tecnologías */}
      <section className="tecnologias">
        <div className="container">
          <div className="section-header">
            <h2>Tecnologías que utilizamos</h2>
            <p>Stack moderno y confiable para proyectos escalables</p>
          </div>
          <div className="tecnologias-grid">
            {tecnologias.map((tech, index) => (
              <div key={index} className="tech-card">
                <h3>{tech.nombre}</h3>
                <span className="tech-categoria">{tech.categoria}</span>
              </div>
            ))}
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
                <span>Dashboard de métricas</span>
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
              <h3>🏢 Necesitás una página institucional</h3>
              <p>Querés transmitir profesionalismo y generar confianza en tu marca</p>
            </div>
            <div className="ideal-item">
              <h3>🛒 Querés vender online</h3>
              <p>Necesitás una tienda virtual completa y funcional para tus productos</p>
            </div>
            <div className="ideal-item">
              <h3>⚡ Tenés una idea de app</h3>
              <p>Querés desarrollar una plataforma personalizada para tu negocio</p>
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
                "Kiwi no solo desarrolló nuestra plataforma, sino que nos ayudó a pensar en la experiencia del usuario. 
                El resultado superó todas nuestras expectativas y las ventas se triplicaron."
              </blockquote>
              <div className="testimonial-author">
                <strong>Ana Rodríguez</strong>
                <span>CEO, Plataforma de Servicios</span>
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
            <h2>¿Tenés una idea de plataforma digital?</h2>
            <p>Agendá una consulta y analicemos juntos tu proyecto</p>
            <div className="cta-buttons">
              <Link href="/contacto" className="btn btn-primary btn-lg">
                Consultar mi proyecto
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

