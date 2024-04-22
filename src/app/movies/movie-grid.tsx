import 'server-only';
import { Box } from "@mui/material";
import MovieCard from '@/components/movie-card/movie-card';
import { Movie } from '@/types';

const fetchMovies = async (searchTerm: string) => {
  if (searchTerm === '') {
    return [];
  }
  // const randomNumber = Math.random();
  // console.log('randomNumber', randomNumber);
  // if (randomNumber > 0.5) {
  //   throw new Error('Error in fetchMovies');
  // }
  const API_URL = 'https://www.omdbapi.com/?apikey=2356a083';
  // create delay to be able to se the loading
  // const delay = () => new Promise((resolve) => setTimeout(resolve, 700))
  // await delay()
  const res = await fetch(`${API_URL}&s=${searchTerm}`)
  const json = await res.json();
  return json.Search as Movie[];
}

type MovieGridProps = {
  searchTerm: string
}

export default async function MovieGrid({
  searchTerm,
}: MovieGridProps) {
  console.log('searchParams', searchTerm)
  const movies = await fetchMovies(searchTerm);
  
  return (
    <Box
      display='grid'
      gridTemplateColumns={'repeat(auto-fill, minmax(200px, 1fr))'}
      mt={2}
      gap={2}
    >
      { movies?.map((movie, index) => (
        <MovieCard movie={movie} key={movie.imdbID} />
      ))}
    </Box>
  )
}