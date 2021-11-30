import Head from 'next/head';

// Components
import Navbar from './components/Navbar';

const App = () => (
  <main className="bg-trueGray-900 font-sans text-white">
    <Head>
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow" />
      <meta
        name="description"
        content="EDUCARTE es una revista digital publicada mensualmente y producida por los estudiantes de quinto año del Instituto San Carlos de Malagueño, Córdoba, Argentina."
      />
      <meta
        name="keywords"
        content="EDUCARTE, revista,  revista digital, revista cultural, instituto san carlos, instituto san carlos malagueño, malagueño revista"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
      <title>Revista EDUCARTE I.S.C</title>
    </Head>

    <Navbar />
  </main>
);

export default App;
