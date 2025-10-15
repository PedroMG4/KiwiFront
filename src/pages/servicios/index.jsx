import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Servicios() {
  const verticales = [
    {
      id: 1,
      titulo: "Publicidad Paga que Convierte",
      descripcion: "Campañas en Meta Ads (Facebook/Instagram) y TikTok Ads con un modelo único: solo pagás cuando cumplimos los objetivos pactados. Setup inicial + gestión mensual basada 100% en resultados medibles.",
      incluye: [
        "Estrategia y portafolio comercial",
        "Configuración de cuentas publicitarias",
        "Optimización continua de campañas",
        "Reportes mensuales detallados",
        "Creación de contenido publicitario (opcional)"
      ],
      idealPara: [
        "E-commerce que quiere escalar",
        "Servicios locales que buscan clientes",
        "Infoproductos que necesitan leads calificados"
      ],
      href: "/servicios/publicidad-paga",
      icono: "📈",
      imagen: "publicidad"
    },
    {
      id: 2,
      titulo: "Tu Producto, Nuestra Voz",
      descripcion: "Comunicadores profesionales que se convierten en la voz de tu marca. Ideales para emprendedores que no se animan a cámara o marcas que necesitan humanizar su comunicación. Contenido para pautas o redes orgánicas.",
      incluye: [
        "Guiones y estrategia de comunicación",
        "Grabación con comunicadores profesionales",
        "Edición y postproducción completa",
        "Videos para ads o contenido orgánico"
      ],
      idealPara: [
        "Emprendedores introvertidos con buenos productos",
        "Marcas B2C que necesitan testimoniales",
        "E-commerce que necesita demos de producto"
      ],
      href: "/servicios/comunicacion-ventas",
      icono: "🎬",
      imagen: "comunicacion"
    },
    {
      id: 3,
      titulo: "Plataformas que Convierten",
      descripcion: "Desarrollo de sitios web y aplicaciones a medida. Desde landing pages hasta e-commerce completos y plataformas personalizadas. Diseño incluido, código en propiedad, soporte opcional.",
      incluye: [
        "Diseño UI/UX profesional (o usamos el tuyo)",
        "Desarrollo a medida según necesidad",
        "Código fuente en tu propiedad",
        "Capacitación de uso",
        "Soporte y mantenimiento (membresía opcional)"
      ],
      tiposProyectos: [
        "Páginas institucionales/corporativas",
        "E-commerce completos",
        "Landing pages de conversión",
        "Aplicaciones web (CRM, SaaS, marketplaces, etc.)"
      ],
      href: "/servicios/desarrollo-web-apps",
      icono: "💻",
      imagen: "desarrollo"
    },
    {
      id: 4,
      titulo: "Automatización: De Simple a Inteligente",
      descripcion: "Dos niveles de servicio: automatizaciones simples entre apps o empleados virtuales con IA que trabajan 24/7. Tu equipo más confiable que nunca se enferma.",
      niveles: [
        {
          titulo: "NIVEL 1: AUTOMATIZACIONES SIMPLES",
          items: [
            "Integraciones entre aplicaciones (Make, ManyChat)",
            "Flujos de trabajo automatizados",
            "Respuestas automáticas",
            "Pago único por implementación"
          ]
        },
        {
          titulo: "NIVEL 2: AGENTES DE IA (EMPLEADOS VIRTUALES)",
          items: [
            "Atención al cliente 24/7 en WhatsApp, Telegram o web",
            "Calificación de leads automática",
            "Ventas y cierre de consultas",
            "Setup inicial + membresía mensual"
          ]
        }
      ],
      beneficios: [
        "Nunca se enferma, no pide vacaciones",
        "Trabaja 24/7/365",
        "Productividad constante",
        "Sin conflictos laborales",
        "Escalable al instante"
      ],
      href: "/servicios/automatizaciones",
      icono: "🤖",
      imagen: "automatizacion"
    },
    {
      id: 5,
      titulo: "Tu Roadmap Estratégico",
      descripcion: "Consultoría para trazar el camino de dónde estás a dónde quieres llegar. Diagnóstico + estrategia + plan de implementación accionable. Con o sin seguimiento según necesites.",
      incluye: [
        "Diagnóstico profundo de tu situación actual",
        "Definición y priorización de objetivos",
        "Estrategia personalizada",
        "Roadmap de implementación por fases",
        "Seguimiento opcional (aparte)"
      ],
      idealPara: [
        "Emprendedores con idea pero sin claridad de ejecución",
        "Empresas que quieren escalar pero no saben cómo",
        "Negocios estancados que necesitan nuevo rumbo",
        "Startups que necesitan validar su modelo"
      ],
      href: "/servicios/analisis-estrategico",
      icono: "🎯",
      imagen: "analisis"
    }
  ];

  return (
    <>
      <Head>
        <title>Nuestros Servicios - Kiwi Marketing</title>
        <meta name="description" content="5 verticales especializadas de marketing digital. Cada servicio está diseñado para generar resultados medibles." />
      </Head>
      <Header />
      
      {/* Hero Section */}
      <section className="servicios-hero">
        <div className="container">
          <div className="servicios-hero-content">
            <h1 className="servicios-hero-title">Nuestros Servicios</h1>
            <h2 className="servicios-hero-subtitle">5 verticales especializadas, infinitas posibilidades</h2>
            <p className="servicios-hero-description">
              Cada servicio está diseñado para generar resultados medibles.<br />
              Podés contratarlos por separado o combinarlos para una estrategia integral.
            </p>
          </div>
        </div>
      </section>

      {/* Las 5 Verticales */}
      <section className="verticales-detalladas">
        <div className="container">
          {verticales.map((vertical, index) => (
            <div key={vertical.id} className={`vertical-item ${index % 2 === 0 ? 'imagen-izquierda' : 'imagen-derecha'}`}>
              <div className="vertical-content">
                <div className="vertical-texto">
                  <div className="vertical-header">
                    <span className="vertical-icon">{vertical.icono}</span>
                    <h3 className="vertical-titulo">{vertical.titulo}</h3>
                  </div>
                  
                  <p className="vertical-descripcion">{vertical.descripcion}</p>
                  
                  {vertical.incluye && (
                    <div className="vertical-incluye">
                      <h4>¿Qué incluye?</h4>
                      <ul>
                        {vertical.incluye.map((item, idx) => (
                          <li key={idx}>✓ {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {vertical.idealPara && (
                    <div className="vertical-ideal">
                      <h4>Ideal para:</h4>
                      <ul>
                        {vertical.idealPara.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {vertical.tiposProyectos && (
                    <div className="vertical-tipos">
                      <h4>Tipos de proyectos:</h4>
                      <ul>
                        {vertical.tiposProyectos.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {vertical.niveles && (
                    <div className="vertical-niveles">
                      {vertical.niveles.map((nivel, idx) => (
                        <div key={idx} className="nivel-item">
                          <h4>{nivel.titulo}</h4>
                          <ul>
                            {nivel.items.map((item, itemIdx) => (
                              <li key={itemIdx}>✓ {item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {vertical.beneficios && (
                    <div className="vertical-beneficios">
                      <h4>Beneficios del empleado virtual:</h4>
                      <ul>
                        {vertical.beneficios.map((item, idx) => (
                          <li key={idx}>✓ {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="vertical-cta">
                    <Link href={vertical.href} className="btn btn-primary">
                      Ver más sobre {vertical.titulo.split(' ')[0]}
                    </Link>
                  </div>
                </div>
                
                <div className="vertical-imagen">
                  <div className="imagen-placeholder">
                    <span>Imagen de {vertical.imagen}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Servicios Integrados */}
      <section className="servicios-integrados">
        <div className="container">
          <div className="integrados-content">
            <h2 className="integrados-title">Mejor juntos: Servicios Integrados</h2>
            <p className="integrados-description">
              Lo más potente de Kiwi es combinar servicios. Por ejemplo:
            </p>
            
            <div className="integrados-ejemplos">
              <div className="ejemplo-item">
                <span className="ejemplo-arrow">→</span>
                <span className="ejemplo-texto">
                  Análisis Estratégico + Desarrollo Web + Publicidad Paga = Lanzamiento completo
                </span>
              </div>
              <div className="ejemplo-item">
                <span className="ejemplo-arrow">→</span>
                <span className="ejemplo-texto">
                  Comunicación y Ventas + Publicidad Paga = Campañas con contenido profesional
                </span>
              </div>
              <div className="ejemplo-item">
                <span className="ejemplo-arrow">→</span>
                <span className="ejemplo-texto">
                  Desarrollo Web + Automatizaciones = Plataforma inteligente 24/7
                </span>
              </div>
            </div>
            
            <div className="integrados-cta">
              <Link href="/contacto" className="btn btn-primary">
                Hablemos de tu proyecto integral
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="servicios-cta-final">
        <div className="container">
          <div className="cta-final-content">
            <h2 className="cta-final-title">¿No sabés por dónde empezar?</h2>
            <p className="cta-final-texto">Empecemos con un diagnóstico gratuito de tu negocio</p>
            <Link href="/contacto" className="btn btn-cta-grande">
              Agendar diagnóstico
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
