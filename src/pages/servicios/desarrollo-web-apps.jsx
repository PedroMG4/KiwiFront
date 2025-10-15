import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function DesarrolloWebApps() {
  return (
    <>
      <Head>
        <title>Desarrollo Web y Apps - Kiwi Marketing</title>
        <meta name="description" content="Desarrollo de sitios web y aplicaciones personalizadas" />
      </Head>
      <Header />
      <main className="servicio-page">
        <div className="container">
          <h1>Desarrollo Web y Apps</h1>
          <p>Creamos sitios web y aplicaciones que impulsan tu negocio digital.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

