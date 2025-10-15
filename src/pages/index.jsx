import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PropuestaValor from '../components/PropuestaValor';
import HistoriaKiwi from '../components/HistoriaKiwi';
import ComoTrabajamos from '../components/ComoTrabajamos';
import CardServicio from '../components/CardServicio';
import CTAFuerte from '../components/CTAFuerte';
import ContactoRapido from '../components/ContactoRapido';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kiwi Marketing - Resultados Reales o No Pagás</title>
        <meta name="description" content="La primera agencia de marketing digital que solo cobra cuando cumple tus objetivos. Trabajamos a resultados medibles." />
      </Head>
      <Header />
      <HeroSection />
      <PropuestaValor />
      <HistoriaKiwi />
      <ComoTrabajamos />
      <section className="servicios-preview">
        <div className="container">
          <div className="servicios-header">
            <h2>¿Qué Hacemos?</h2>
            <p>5 servicios especializados, un solo equipo</p>
          </div>
          <CardServicio />
        </div>
      </section>
      <CTAFuerte />
      <ContactoRapido />
      <Footer />
    </>
  );
}
