import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AnalisisEstrategico() {
  return (
    <>
      <Head>
        <title>Análisis Estratégico - Kiwi Marketing</title>
        <meta name="description" content="Análisis estratégico para optimizar tu marketing" />
      </Head>
      <Header />
      <main className="servicio-page">
        <div className="container">
          <h1>Análisis Estratégico</h1>
          <p>Analizamos datos para tomar decisiones estratégicas que impulsen tu crecimiento.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

