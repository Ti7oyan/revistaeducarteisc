import { ReactElement } from 'react';
import { IconType } from 'react-icons';
import { FaGlobeAmericas, FaInstagram } from 'react-icons/fa';

type SocialType = {
  href: string,
  icon: ReactElement<IconType>
}

const SocialIcon = ({ href, icon }: SocialType) => (
  <a className="m-auto" href={href} target="_blank" rel="noreferrer">
    <div className="text-3xl border-b rounded-sm p-1 transition duration-150 hover:text-blue-300 hover:border-blue-300">
      {icon}
    </div>
  </a>
);

const Title = () => (
  <article className="mt-20">
    <h1 className="text-5xl 2xl:text-7xl my-10">
      EDUCARTE
    </h1>
    <h2 className="mb-5">
      Revista digital realizada por alumnos de quinto año del Instituto San
      Carlos de Malagueño, Córdoba, Argentina.
    </h2>
    <p className="my-2">
      ¡Seguinos en nuestras redes!
    </p>
    <div className="flex m-auto w-4/12 md:w-1/5 lg:w-24">
      <SocialIcon href="http://isc-mlgo.edu.ar" icon={<FaGlobeAmericas />} />
      <SocialIcon href="https://www.instagram.com/san.carlos5to_revista/" icon={<FaInstagram />} />
    </div>
  </article>
);

export default Title;
