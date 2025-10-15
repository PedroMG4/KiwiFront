import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamCard from '../components/TeamCard';
import equipoData from '../data/equipo.json';

export default function Equipo() {
  return (
    <>
      <Head>
        <title>Nuestro Equipo - Kiwi Marketing</title>
        <meta name="description" content="Conoce al equipo de expertos de Kiwi Marketing" />
      </Head>
      <Header />
      <main className="equipo-page">
        <div className="container">
          <div className="equipo-header">
            <h1>Nuestro Equipo</h1>
            <p>Conoce a los profesionales que hacen posible tu crecimiento.</p>
          </div>
          
          <div className="team-structure">
            {/* Co-fundadores */}
            <div className="cofounders-section">
              <h2 className="section-title">Co-Fundadores</h2>
              <div className="cofounders-grid">
                {equipoData.equipo.filter(miembro => 
                  miembro.cargo.includes('Co-Fundador') || miembro.cargo.includes('Co-Fundadora')
                ).map((miembro) => (
                  <TeamCard key={miembro.id} miembro={miembro} />
                ))}
              </div>
            </div>

            {/* Resto del equipo */}
            <div className="team-section">
              <h2 className="section-title">Nuestro Equipo</h2>
              <div className="team-grid">
                {equipoData.equipo.filter(miembro => 
                  !miembro.cargo.includes('Co-Fundador') && !miembro.cargo.includes('Co-Fundadora')
                ).map((miembro) => (
                  <TeamCard key={miembro.id} miembro={miembro} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
