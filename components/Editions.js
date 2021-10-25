/* eslint-disable @next/next/no-img-element */

import Box from '@mui/material/Box';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem"
import Button from '@mui/material/Button';

export default function Editions() {
    return (
        <div className="m-auto">
            <h3 className="text-3xl p-5 md:text-4xl">EDICIONES</h3>
            <Box className="m-auto md:w-auto xl:w-8/12 2xl:w-8/12 overflow-hidden my-3">
                <ImageList variant="quilted" cols={2} gap={8}>
                    {magazines.map((item) => (
                        <ImageListItem className="mb-16 p-1" key={item.img}>
                            <img
                                className="rounded-sm"
                                src={item.img}
                                srcSet={item.img}
                                alt={item.title}
                                loading="lazy"
                                layout="fill"
                            />
                            <Button onClick={() => {window.location = item.link}} className="w-full m-auto mt-5" variant="outlined">Leeme!</Button>
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </div>
    )
}

const magazines = [
    {
        img: 'https://images.mywomags.com/public/smw.story/3WZ9pBKs8kODFo0JRN02qiRYuoa/Y~f5idqmqJ3K5qqXs4xh2X9e%253Asmw%3ANsLmRA7kTUBV3wfny95t3r8G8zi/xl',
        link: 'https://titoyan.reader.mywomags.com/EDUCARTE/',
        title: 'Revista Nº1 - Mayo'
    },
    {
        img: 'https://images.mywomags.com/public/smw.story/Az5krLM92YuizSHaftQtbGo0lWF/YF4kV0zM~HK-2uoeToH1Xs~w%253Asmw%3ASdZz5KquhPEZX0fNwyMAesp3jJM/xl',
        link: 'https://educarte-junio.reader.mywomags.com/EDUCARTE---Junio/',
        title: 'Revista Nº2 - Junio'
    },
    {
        img: 'https://images.mywomags.com/public/smw.story/HcXyLpb0kEWWRhY1LPsu66LhmJm/LYa79VXpc1RHhLzQxzn~fmiz%253Asmw%3AX3qxmJbgsATlMvm9JhthbwM1oxZ/xl',
        link: 'https://educarte-julio.reader.mywomags.com/EDUCARTE/',
        title: 'Revista Nº3 - Julio'
    },
    {
        img: 'https://images.mywomags.com/public/smw.story/8tNze56yBAc835akbzwMxMOhIqh/rv-NNuGzUQmqxzLredwZC-WX%253Asmw%3AHwK0aHLh4QvSfsIn3wJTvdF6Pdm/xl',
        link: 'https://educarte-agosto.reader.mywomags.com/mag',
        title: 'Revista Nº4 - Agosto'
    },
    {
        img: 'https://images.mywomags.com/public/smw.story/IXoKkaRm1kbbPMc1B1mQL4exPLn/-a255V86l3C7R404aMZFRVG2%253Asmw%3AaR6LKImavYulrOuYxs4rM0ZnuOW/xl',
        link: 'https://sancarevista5.reader.mywomags.com/EDUCARTE',
        title: 'Revista Nº5 - Septiembre'
    },
    {
        img: 'https://images.mywomags.com/public/smw.story/ZQAdSkFp8Ucm1ebCleGW3ITVm63/CiYYp0nZjODiAs9Aryq~g5KM%253Asmw%3A5RX3rjdyfZa5Q9ph3F725LSAK8J/xl',
        link: 'https://sancarevista.reader.mywomags.com/Educarte/',
        title: 'Revista Nº6 - Octubre'
    },
]