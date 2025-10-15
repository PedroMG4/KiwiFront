import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ComunicacionVentas() {
  return (
    <>
      <Head>
        <title>Comunicación de Ventas - Kiwi Marketing</title>
        <meta name="description" content="Estrategias de comunicación para aumentar tus ventas" />
      </Head>
      <Header />
      <main className="servicio-page">
        <div className="container">
          <h1>Comunicación de Ventas</h1>
          <p>Optimizamos tu comunicación para convertir más leads en clientes.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

