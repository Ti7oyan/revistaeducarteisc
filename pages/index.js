/* eslint-disable @next/next/no-page-custom-font */

import Head from 'next/head';

// Page components
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import About from '../components/About';
import Editions from '../components/Editions';
import Blogger from '../components/Blogger';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="EDUCARTE es una revista digital publicada mensualmente y producida por los estudiantes de quinto año del Instituto San Carlos de Malagueño, Córdoba, Argentina." />
        <meta name="keywords" content="EDUCARTE, revista,  revista digital, revista cultural, instituto san carlos, instituto san carlos malagueño, malagueño revista" />
        <title>Revista EDUCARTE I.S.C</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet" />
      </Head>

      <main className="bg-gray-900 font-sans text-white">
        <Navbar />
        <section id="content" className="grid grid-cols-1 gap-12 grid-row text-center p-5">
          <Title />
          <About />
          <span className="h-10" id="editions" />
          <Editions />
          <span className="h-0" id="blogger" />
          <Blogger />
        </section>
        <Footer />
      </main>
    </div>
  )
}
