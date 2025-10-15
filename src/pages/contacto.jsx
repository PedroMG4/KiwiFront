import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import FormContacto from '../components/FormContacto';
import Footer from '../components/Footer';

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto - Kiwi Marketing</title>
        <meta name="description" content="Ponte en contacto con nosotros para impulsar tu negocio" />
      </Head>
      <Header />
      <main className="contacto-page">
        <div className="container">
          <h1>Contacto</h1>
          <FormContacto />
        </div>
      </main>
      <Footer />
    </>
  );
}

