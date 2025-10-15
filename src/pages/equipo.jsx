import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import TeamParallax from '../components/TeamParallax';

export default function Equipo() {
  const cofundadores = [
    {
      id: 1,
      nombre: "Mauro Alcaraz",
      rol: "Co-fundador | Estrategia & Publicidad",
      foto: "/assets/team/mauro.jpg",
      especialidades: [
        "Publicidad Paga (Meta Ads, TikTok Ads)",
        "Automatizaciones con IA", 
        "Análisis Estratégico de Negocios"
      ],
      bio: "Especialista en publicidad digital y estrategia de negocios con 6+ años de experiencia. Apasionado por traducir datos en resultados medibles y diseñar estrategias que escalan negocios de forma sostenible.",
      linkedin: "https://linkedin.com/in/mauroalcaraz",
      instagram: "https://instagram.com/mauroalcaraz"
    },
    {
      id: 2,
      nombre: "Florencia Almada",
      rol: "Co-fundadora | Comunicación & Ventas",
      foto: "/assets/team/florencia.jpg",
      especialidades: [
        "Comunicación estratégica",
        "Creación de contenido",
        "Vocera profesional"
      ],
      bio: "Experta en comunicación y ventas con 5+ años de experiencia. Le apasiona humanizar marcas y convertir productos en historias que conectan. Especializada en contenido que vende sin vender.",
      linkedin: "https://linkedin.com/in/florenciaalmada",
      instagram: "https://instagram.com/florenciaalmada"
    }
  ];

  const especialistas = [
    {
      id: 3,
      nombre: "Valentín Acevedo",
      rol: "Especialista en Publicidad Paga",
      foto: "/assets/team/valentin.jpg",
      area: "Publicidad Paga (Meta Ads, TikTok Ads)",
      bio: "Especialista en Meta Ads con historial comprobado de optimización de campañas y mejora de ROI. Apasionado por los datos y la conversión.",
      linkedin: "https://linkedin.com/in/valentinacevedo",
      instagram: "https://instagram.com/valentinacevedo"
    },
    {
      id: 4,
      nombre: "Tomás Ilia Soto",
      rol: "Especialista en Publicidad & Comunicación",
      foto: "/assets/team/tomas.jpg",
      area: "Publicidad Paga | Comunicación y Contenido",
      bio: "Experto en publicidad digital y creación de contenido que conecta con audiencias objetivo. Combina creatividad con estrategia.",
      linkedin: "https://linkedin.com/in/tomasiliasoto",
      instagram: "https://instagram.com/tomasiliasoto"
    },
    {
      id: 5,
      nombre: "Agustín Ozuna",
      rol: "Especialista en Creación de Contenido",
      foto: "/assets/team/agustin.jpg",
      area: "Producción y Edición de Contenido",
      bio: "Especialista en producción y edición de contenido audiovisual de alta calidad. Transforma ideas en contenido visual impactante.",
      linkedin: "https://linkedin.com/in/agustinozuna",
      instagram: "https://instagram.com/agustinozuna"
    },
    {
      id: 6,
      nombre: "Pedro Martin Garay",
      rol: "Desarrollador Principal",
      foto: "/assets/team/pedro.jpg",
      area: "Desarrollo Web y Apps | Automatizaciones",
      bio: "Desarrollador especializado en soluciones web y automatizaciones que optimizan procesos empresariales. Convierte ideas en código funcional.",
      linkedin: "https://linkedin.com/in/pedrodev",
      instagram: "https://instagram.com/pedrodev"
    }
  ];

  const valores = [
    {
      icono: "🤝",
      titulo: "Colaboración",
      descripcion: "Trabajamos integrados"
    },
    {
      icono: "🔍",
      titulo: "Transparencia", 
      descripcion: "Sin letra chica"
    },
    {
      icono: "🏆",
      titulo: "Meritocracia",
      descripcion: "El esfuerzo se reconoce"
    },
    {
      icono: "🎯",
      titulo: "Resultados",
      descripcion: "Nos comprometemos con tu éxito"
    }
  ];

  return (
    <>
      <Head>
        <title>El Equipo Kiwi - Kiwi Marketing</title>
        <meta name="description" content="Personas reales, expertise real, resultados reales. Conoce al equipo completo de Kiwi Marketing." />
        <meta name="keywords" content="equipo kiwi marketing, profesionales marketing digital, agencia marketing, especialistas digitales" />
      </Head>
      <Header />
      <ScrollReveal />
      <TeamParallax />
      
      {/* Hero Section */}
      <section className="equipo-hero particles-bg">
        <div className="container">
          <div className="equipo-hero-content animate-slide-up">
            <h1 className="equipo-hero-title text-shadow">El Equipo Kiwi</h1>
            <h2 className="equipo-hero-subtitle">Personas reales, expertise real, resultados reales</h2>
            <p className="equipo-hero-description">
              Somos una comunidad de especialistas apasionados por lo que hacen.<br />
              No subcontratamos, no tercerizamos: este es nuestro equipo completo,<br />
              trabajando integrado para tu proyecto.
            </p>
          </div>
        </div>
        
        {/* Flecha de scroll */}
        <div className="scroll-indicator">
          <div 
            className="scroll-arrow" 
            onClick={() => document.querySelector('.cofundadores-section')?.scrollIntoView({ behavior: 'smooth' })}
            title="Hacer scroll hacia abajo"
          ></div>
        </div>
      </section>

      {/* Co-fundadores */}
      <section className="cofundadores-section">
        <div className="container">
          <div className="section-header scroll-reveal">
            <h2 className="text-gradient">Co-fundadores</h2>
          </div>
          <div className="cofundadores-grid">
            {cofundadores.map((cofundador) => (
              <div key={cofundador.id} className="cofundador-card hover-lift scroll-reveal">
                <div className="cofundador-foto">
                  <div className="foto-placeholder">
                    <span>Foto de {cofundador.nombre}</span>
                  </div>
                </div>
                <div className="cofundador-content">
                  <h3 className="text-gradient">{cofundador.nombre}</h3>
                  <p className="cofundador-rol">{cofundador.rol}</p>
                  
                  <div className="especialidades">
                    <h4>Especialidades:</h4>
                    <ul>
                      {cofundador.especialidades.map((especialidad, index) => (
                        <li key={index}>• {especialidad}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <p className="cofundador-bio">{cofundador.bio}</p>
                  
                  <div className="redes-sociales">
                    <a href={cofundador.linkedin} target="_blank" rel="noopener noreferrer" className="red-social icon-hover">
                      <span>💼</span> LinkedIn
                    </a>
                    <a href={cofundador.instagram} target="_blank" rel="noopener noreferrer" className="red-social icon-hover">
                      <span>📸</span> Instagram
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo de Especialistas */}
      <section className="especialistas-section">
        <div className="container">
          <div className="section-header scroll-reveal">
            <h2 className="text-gradient">Equipo de Especialistas</h2>
            <p>Profesionales dedicados a cada área de expertise</p>
          </div>
          <div className="especialistas-grid">
            {especialistas.map((especialista) => (
              <div key={especialista.id} className="especialista-card hover-lift scroll-reveal">
                <div className="especialista-foto">
                  <div className="foto-placeholder">
                    <span>Foto de {especialista.nombre}</span>
                  </div>
                </div>
                <div className="especialista-content">
                  <h3 className="text-gradient">{especialista.nombre}</h3>
                  <p className="especialista-rol">{especialista.rol}</p>
                  <p className="especialista-area">{especialista.area}</p>
                  <p className="especialista-bio">{especialista.bio}</p>
                  
                  <div className="redes-sociales">
                    <a href={especialista.linkedin} target="_blank" rel="noopener noreferrer" className="red-social icon-hover">
                      <span>💼</span>
                    </a>
                    <a href={especialista.instagram} target="_blank" rel="noopener noreferrer" className="red-social icon-hover">
                      <span>📸</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestra Cultura */}
      <section className="cultura-section">
        <div className="container">
          <div className="cultura-content">
            <div className="cultura-text scroll-reveal">
              <h2 className="text-gradient">Cómo Trabajamos Como Equipo</h2>
              <p className="cultura-descripcion">
                En Kiwi no tenemos "departamentos aislados". Somos una comunidad donde
                todos colaboran, comparten conocimientos y crecen juntos. Priorizamos
                el capital humano, el mérito y el aprendizaje continuo.
              </p>
              <p className="cultura-destacado">
                <strong>Cuando trabajás con Kiwi, trabajás con TODO el equipo, no con un freelancer.</strong>
              </p>
            </div>
            
            <div className="valores-grid">
              {valores.map((valor, index) => (
                <div key={index} className="valor-card hover-lift scroll-reveal">
                  <div className="valor-icon icon-hover">{valor.icono}</div>
                  <h3 className="text-gradient">{valor.titulo}</h3>
                  <p>{valor.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="equipo-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="text-shadow">¿Querés conocernos mejor?</h2>
            <p>Hablemos de tu proyecto y cómo podemos ayudarte a crecer</p>
            <Link href="/contacto" className="btn btn-primary btn-lg btn-3d animate-pulse">
              Hablemos de tu proyecto
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
