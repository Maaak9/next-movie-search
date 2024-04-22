import 'server-only';
import { Box } from "@mui/material";
import MoviesSearch from "../../components/search";
import MovieGrid from "./movie-grid";

type MovieGridProps = {
  searchParams?: {
    query?: string,
    search?: string
  }
}

export default function MoviesPage({
  searchParams,
}: MovieGridProps) {

  return (
    <Box mt={2}>
      <MoviesSearch />
      {/* <Suspense key={searchParams?.search} fallback={<MovieGridLoading />}> */}
        <MovieGrid searchTerm={searchParams?.search ?? ''}/>
      {/* </Suspense> */}
    </Box>
  );
}