import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Automatizaciones() {
  return (
    <>
      <Head>
        <title>Automatizaciones - Kiwi Marketing</title>
        <meta name="description" content="Automatiza procesos para optimizar tu negocio" />
      </Head>
      <Header />
      <main className="servicio-page">
        <div className="container">
          <h1>Automatizaciones</h1>
          <p>Automatizamos procesos para que puedas enfocarte en lo que más importa.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

