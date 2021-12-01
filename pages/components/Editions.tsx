// Material UI
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';

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
    <Box className="m-auto my-3 overflow-hidden">
      <ImageList variant="quilted" cols={2} gap={8}>
        {editionsData[year].map((edition: EditionsType) => (
          <ImageListItem className="mb-16 p-1" key={edition.title}>
            <img
              className="rounded-md"
              src={edition.image}
              srcSet={edition.image}
              alt={edition.title}
              loading="lazy"
            />
            <Button
              onClick={() => {
                window.location.assign(edition.link);
              }}
              style={{
                margin: 'auto',
                marginTop: '1.25rem',
              }}
            >
              Leeme!
            </Button>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  </div>
);

const Editions = () => (
  <section id="editions" className="m-auto">
    <h3 className="text-3xl p-5">EDICIONES</h3>
    <YearEditions year="2021" />
  </section>
);

export default Editions;
