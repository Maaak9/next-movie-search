import { MovieDetails } from "@/types";
import { Box } from "@mui/material"


async function getMovieDetails (movieId: string) {
  const API_URL = 'https://www.omdbapi.com/?apikey=2356a083';

  const number = Math.round(Math.random() * 1000);
  // Fake delay to test loading of details
  const delay = () => new Promise((resolve) => setTimeout(resolve, number))
  await delay()
  // // Fake error to simulate error in details
  // if (number > 3000) throw new Error('blablabla')

  const res = await fetch(`${API_URL}&i=${movieId}`)
  const json = await res.json();
  return json as MovieDetails;
}

export const MovieCardImdbRating = async ({
  movieId
}: { movieId?: string}) => {
  if (!movieId) return null;

  const movieDetails = await getMovieDetails(movieId);
  movieDetails.imdbRating

  return (
    <Box>
      { `Imdb rating: ${movieDetails.imdbRating} / 10` }
    </Box>
  )
}

export default MovieCardImdbRating;