import { FaGlobeAmericas, FaInstagram } from "react-icons/fa"

export default function Title() {
    return (
        <article className="title mt-24">
            <h1 className="text-7xl sm:text-5xl p-3">EDUCARTE</h1>
            <h2 className="w-11/12 sm:w-64 md:w-96 xl:text-base 2xl:text-lg m-auto">Revista digital realizada por alumnos de quinto año del Instituto San Carlos de Malagueño, Córdoba, Argentina.</h2>
            <div className="flex justify-around w-28 m-auto p-3">
                {SocialIcons('http://isc-mlgo.edu.ar', <FaGlobeAmericas />)}
                {SocialIcons('https://www.instagram.com/san.carlos5to_revista/', <FaInstagram />)}
            </div>
        </article>
    )
}

export function SocialIcons(href, icon) {
    return (
        <a
            className="m-auto"
            href={href}
            target="_blank"
            rel="noreferrer"
        >
            <span className="text-3xl transition duration-200 hover:text-blue-300">
                {icon}
            </span>
        </a>
    )
}