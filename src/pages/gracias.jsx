import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Gracias() {
  return (
    <>
      <Head>
        <title>Gracias - Kiwi Marketing</title>
        <meta name="description" content="Gracias por contactarnos" />
      </Head>
      <Header />
      <main className="gracias-page">
        <div className="container">
          <h1>¡Gracias por contactarnos!</h1>
          <p>Nos pondremos en contacto contigo pronto.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

