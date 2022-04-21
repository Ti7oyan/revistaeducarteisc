// Material UI
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// Editions
import * as editionsData from './editions.json';

type EditionsType = {
    image: string,
    link: string,
    title: string
};

type YearType = {
  year: string
}

const YearEditions = ({ year }: YearType) => (
  <div id={year}>
    <h4 className="text-xl p-2 underline">
      {year}
    </h4>
    <Box className="m-auto my-3 overflow-hidden lg:w-4/6">
      <ImageList variant="quilted" cols={2} gap={8}>
        {editionsData[year].map((edition: EditionsType) => (
          <ImageListItem className="mb-16 p-2" key={edition.title}>
            <img
              className="rounded-md"
              src={edition.image}
              srcSet={edition.image}
              alt={edition.title}
              loading="lazy"
            />
            <a href={edition.link} target="_blank" rel="noreferrer">
              <button
                type="button"
                className="button p-5"
              >
                ¡Leeme!
              </button>
            </a>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  </div>
);

const Editions = () => (
  <section id="editions" className="m-auto">
    <h3 className="text-3xl p-5">EDICIONES</h3>
    <YearEditions year="2022" />
    <YearEditions year="2021" />
  </section>
);

export default Editions;
