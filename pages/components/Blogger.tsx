import { FaBlogger } from 'react-icons/fa';

const Blogger = () => (
  <article id="blogger">
    <span className="flex justify-center m-5">
      <FaBlogger className="self-center text-3xl mx-2" />
      <h4 className="text-2xl font-bold">Blogger</h4>
    </span>
    <div className="m-auto bg-white rounded-md text-trueGray-900 p-3 xl:w-2/4 2xl:w-3/5">
      <p className="m-auto xl:w-11/12">
        Desde Blogger, vamos a poder recibir todos tus comentarios y así, entre todos,
        mejorar cada nueva edición de la revista.
      </p>
      <a
        href="https://educarte5to.blogspot.com/"
        target="_blank"
        rel="noreferrer"
      >
        <button
          type="button"
          className="button p-2 text-white"
        >
          ¡Nuestro blog!
        </button>
      </a>
    </div>
  </article>
);

export default Blogger;
