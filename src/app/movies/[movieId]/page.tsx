/* eslint-disable @next/next/no-img-element */
import 'server-only';
import { Box, Grid, Typography } from "@mui/material";
import { MovieDetails } from '@/types';

async function getMovie(movieId: string) {
  const API_URL = 'https://www.omdbapi.com/?apikey=2356a083';
  // create delay to be able to se the loading
  const delay = () => new Promise((resolve) => setTimeout(resolve, 2000))
  await delay()
  const res = await fetch(`${API_URL}&i=${movieId}`);
  const json = await res.json();
  return json as MovieDetails;
}

type MoviePageProps = {
  params: {
    movieId: string,
  }
}

export default async function MoviePage({
  params: { movieId },
}: MoviePageProps) {
  const movie = await getMovie(movieId);

  return (
    <Box mt={4}>
      <Grid container>
        <Grid xs={12} sm={4}>
          <img
            style={{
              width: "100%",
              aspectRatio: 2/3,
              objectFit: 'cover',
            }}
            src={movie.Poster !== 'N/A' ? movie.Poster : '/no-image.jpg'}
            alt='movie poster'
          />
        </Grid>
        <Grid xs={12} sm={8} pl={[0, 4]} mt={2}>
          <Typography><b>Title:</b> {movie.Title}</Typography>
          <Typography><b>Plot:</b> {movie.Plot}</Typography>
          <Typography><b>Actores:</b> {movie.Actors}</Typography>
        </Grid>

      </Grid>
    </Box>
  );
}