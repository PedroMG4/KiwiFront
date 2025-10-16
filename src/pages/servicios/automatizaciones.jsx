import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Automatizaciones() {
  const niveles = [
    {
      titulo: "NIVEL 1: AUTOMATIZACIONES SIMPLES",
      descripcion: "Integraciones entre aplicaciones y flujos de trabajo automatizados",
      icono: "⚙️",
      items: [
        "Integraciones entre aplicaciones (Make, ManyChat)",
        "Flujos de trabajo automatizados",
        "Respuestas automáticas",
        "Pago único por implementación"
      ],
      beneficios: [
        "Ahorro del 50% en tiempo operativo",
        "Reducción del 80% en errores humanos",
        "Procesos más eficientes",
        "Menos trabajo manual"
      ]
    },
    {
      titulo: "NIVEL 2: AGENTES DE IA (EMPLEADOS VIRTUALES)",
      descripcion: "Asistentes inteligentes que trabajan 24/7 como empleados virtuales",
      icono: "🤖",
      items: [
        "Atención al cliente 24/7 en WhatsApp, Telegram o web",
        "Calificación de leads automática",
        "Ventas y cierre de consultas",
        "Setup inicial + membresía mensual"
      ],
      beneficios: [
        "Nunca se enferma, no pide vacaciones",
        "Trabaja 24/7/365",
        "Productividad constante",
        "Sin conflictos laborales",
        "Escalable al instante"
      ]
    }
  ];

  const casosUso = [
    {
      titulo: "E-commerce de Productos",
      nivel: "Nivel 1",
      desafio: "Procesamiento manual de pedidos y atención al cliente",
      solucion: "Automatización de emails de confirmación y seguimiento",
      resultado: "70% menos tiempo en gestión de pedidos"
    },
    {
      titulo: "Consultoría de Servicios",
      nivel: "Nivel 2", 
      desafio: "Perdían clientes por no responder consultas a tiempo",
      solucion: "Agente IA que atiende WhatsApp 24/7 y agenda citas",
      resultado: "300% más leads calificados, 0 clientes perdidos"
    },
    {
      titulo: "Agencia de Marketing",
      nivel: "Nivel 1",
      desafio: "Reportes manuales cada mes para cada cliente",
      solucion: "Automatización de reportes con datos en tiempo real",
      resultado: "90% menos tiempo en reportes, clientes más satisfechos"
    }
  ];

  const herramientas = [
    { nombre: "Make (Integromat)", categoria: "Automatización" },
    { nombre: "Zapier", categoria: "Integración" },
    { nombre: "ManyChat", categoria: "Chatbots" },
    { nombre: "OpenAI GPT", categoria: "IA" },
    { nombre: "WhatsApp Business API", categoria: "Comunicación" },
    { nombre: "HubSpot", categoria: "CRM" }
  ];

  const proceso = [
    {
      paso: 1,
      titulo: "Análisis de Procesos",
      descripcion: "Identificamos qué tareas repetitivas podés automatizar para maximizar el impacto"
    },
    {
      paso: 2,
      titulo: "Diseño de Solución",
      descripcion: "Creamos el flujo de automatización perfecto para tu caso específico"
    },
    {
      paso: 3,
      titulo: "Implementación",
      descripcion: "Configuramos todas las herramientas y probamos exhaustivamente"
    },
    {
      paso: 4,
      titulo: "Capacitación y Soporte",
      descripcion: "Te enseñamos a usar el sistema y te damos soporte continuo"
    }
  ];

  return (
    <>
      <Head>
        <title>Automatización: De Simple a Inteligente - Kiwi Marketing</title>
        <meta name="description" content="Automatizaciones simples entre apps o empleados virtuales con IA. Tu equipo más confiable que nunca se enferma." />
        <meta name="keywords" content="automatización, chatbots, IA, empleados virtuales, integraciones, workflow" />
      </Head>
      <Header />
      
      {/* Hero Section */}
      <section className="servicio-hero automatizaciones-hero particles-bg">
        <div className="container">
          <div className="servicio-hero-content">
            <div className="servicio-hero-text animate-slide-up">
              <span className="servicio-icon icon-hover">🤖</span>
              <h1 className="servicio-hero-title text-shadow">Automatización: De Simple a Inteligente</h1>
              <h2 className="servicio-hero-subtitle">Tu equipo más confiable que nunca se enferma</h2>
              <p className="servicio-hero-description">
                Dos niveles de servicio: automatizaciones simples entre apps o empleados virtuales con IA 
                que trabajan 24/7. Eficiencia máxima, esfuerzo mínimo.
              </p>
              <div className="servicio-hero-cta">
                <Link href="/contacto" className="btn btn-primary btn-lg btn-3d hover-glow">
                  Automatizar mis procesos
                </Link>
                <Link href="#niveles-servicio" className="btn btn-secondary btn-lg hover-scale">
                  Ver niveles de servicio
                </Link>
              </div>
            </div>
            <div className="servicio-hero-image animate-slide-up">
              <div className="hero-image-placeholder hover-lift">
                <span>🤖 Empleados Virtuales con IA</span>
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
              <h3>❌ Problemas que resolvemos</h3>
              <ul>
                <li>Tareas repetitivas que te consumen horas</li>
                <li>Errores humanos por procesos manuales</li>
                <li>No podés atender consultas 24/7</li>
                <li>Perdés leads por no responder a tiempo</li>
                <li>Tu equipo se satura con trabajo operativo</li>
              </ul>
            </div>
            <div className="solucion">
              <h3>✅ Nuestra solución</h3>
              <ul>
                <li><strong>Automatizaciones inteligentes</strong> - Eliminamos tareas repetitivas</li>
                <li><strong>Empleados virtuales</strong> - IA que trabaja como tu mejor empleado</li>
                <li><strong>Atención 24/7</strong> - Nunca perdés un cliente por horarios</li>
                <li><strong>Escalabilidad instantánea</strong> - Crecés sin contratar más personal</li>
                <li><strong>ROI inmediato</strong> - Ahorrás tiempo y dinero desde el día 1</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Niveles de Servicio */}
      <section id="niveles-servicio" className="niveles-servicio">
        <div className="container">
          <div className="section-header scroll-reveal">
            <h2 className="text-gradient">Dos niveles, infinitas posibilidades</h2>
            <p>Elegí el nivel que mejor se adapte a tus necesidades</p>
          </div>
          <div className="niveles-grid">
            {niveles.map((nivel, index) => (
              <div key={index} className={`nivel-card hover-lift ${index === 1 ? 'nivel-premium animate-pulse' : ''}`}>
                <div className="nivel-header">
                  <div className="nivel-icon icon-hover">{nivel.icono}</div>
                  <h3 className="text-gradient">{nivel.titulo}</h3>
                  <p>{nivel.descripcion}</p>
                </div>
                <div className="nivel-content">
                  <h4>¿Qué incluye?</h4>
                  <ul className="nivel-items">
                    {nivel.items.map((item, idx) => (
                      <li key={idx}>✓ {item}</li>
                    ))}
                  </ul>
                  <h4>Beneficios:</h4>
                  <ul className="nivel-beneficios">
                    {nivel.beneficios.map((beneficio, idx) => (
                      <li key={idx}>{beneficio}</li>
                    ))}
                  </ul>
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
                <div className="caso-nivel">{caso.nivel}</div>
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
            <h2>Herramientas que utilizamos</h2>
            <p>Stack tecnológico probado para automatizaciones confiables</p>
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

      {/* Beneficios del Empleado Virtual */}
      <section className="beneficios-empleado">
        <div className="container">
          <div className="beneficios-content">
            <div className="beneficios-text">
              <h2>¿Por qué un empleado virtual con IA?</h2>
              <div className="beneficios-comparacion">
                <div className="empleado-tradicional">
                  <h3>❌ Empleado tradicional</h3>
                  <ul>
                    <li>Se enferma y falta al trabajo</li>
                    <li>Trabaja 8 horas, 5 días por semana</li>
                    <li>Pide vacaciones y días libres</li>
                    <li>Puede tener conflictos personales</li>
                    <li>Cuesta más contratar y entrenar</li>
                  </ul>
                </div>
                <div className="empleado-virtual">
                  <h3>✅ Empleado virtual con IA</h3>
                  <ul>
                    <li>Nunca se enferma ni falta</li>
                    <li>Trabaja 24/7/365 sin parar</li>
                    <li>No pide vacaciones ni días libres</li>
                    <li>Sin conflictos ni problemas personales</li>
                    <li>Escalable al instante</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="beneficios-image">
              <div className="image-placeholder">
                <span>Comparación empleados</span>
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
            <p>La automatización es ideal si...</p>
          </div>
          <div className="ideal-para-grid">
            <div className="ideal-item">
              <h3>⏰ Perdés tiempo en tareas repetitivas</h3>
              <p>Tenés procesos que se repiten todos los días y querés automatizarlos</p>
            </div>
            <div className="ideal-item">
              <h3>📞 No podés atender consultas 24/7</h3>
              <p>Perdés clientes porque no respondés fuera de horario laboral</p>
            </div>
            <div className="ideal-item">
              <h3>📈 Querés escalar sin contratar más personal</h3>
              <p>Necesitás crecer pero no querés o no podés contratar más empleados</p>
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
                "El agente de IA que nos configuró Kiwi atiende WhatsApp las 24 horas. 
                En el primer mes procesó 300 consultas y cerró 15 ventas sin que nosotros hagamos nada."
              </blockquote>
              <div className="testimonial-author">
                <strong>Roberto Silva</strong>
                <span>Dueño, Consultora de Negocios</span>
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
            <h2>¿Listo para automatizar tu negocio?</h2>
            <p>Agendá una consulta y analicemos qué procesos podés automatizar</p>
            <div className="cta-buttons">
              <Link href="/contacto" className="btn btn-primary btn-lg">
                Automatizar mis procesos
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

