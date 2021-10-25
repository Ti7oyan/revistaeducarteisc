import { Button } from "@mui/material";
import { FaBlogger } from "react-icons/fa";

export default function Blogger() {
    return (
        <article className="flex flex-col m-auto mb-10">
            <div className="flex flex-row m-auto my-5">
                <FaBlogger className="self-center text-3xl mx-2" />
                <h3 className="text-2xl md:text-3xl 2xl:text-4xl">Blogger</h3>
            </div>
            <div className="m-auto bg-gray-100 text-black rounded-md md:w-5/6 xl:w-9/12 2xl:w-9/12">
                <p className="p-3 md:text-lg xl:text-xl 2xl:text-xl">¡Accedé a nuestro blog para que podamos recibir tus comentarios de una manera directa!<br /><br />Desde Blogger, vamos a poder recibir todos tus comentarios y así, entre todos, mejorar cada nueva edición de la revista.</p>
                <Button onClick={() => {window.location = '#'}} className="m-4 bg-gray-900" variant="contained">Nuestro blog</Button>
            </div>
        </article>
    )
}