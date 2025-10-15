import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PublicidadPaga() {
  return (
    <>
      <Head>
        <title>Publicidad Paga - Kiwi Marketing</title>
        <meta name="description" content="Campañas de publicidad paga efectivas para tu negocio" />
      </Head>
      <Header />
      <main className="servicio-page">
        <div className="container">
          <h1>Publicidad Paga</h1>
          <p>Desarrollamos campañas de publicidad paga que generan resultados medibles y ROI positivo.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

