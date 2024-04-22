/* eslint-disable @next/next/no-img-element */
import { Movie } from "@/types"
import { Box, Link, Skeleton, Typography } from "@mui/material"
import React, { ReactNode, Suspense } from "react";
import { MovieCardImdbRating } from "./imdb-rating";
import { ErrorBoundary } from "react-error-boundary";

const ErrorBoundaryWrapper = ({ children }: { children: ReactNode}) => {
  return (
    <ErrorBoundary fallback={<div>Error in MovieCard details</div>}>
      {children}
    </ErrorBoundary>
  )
}

export default async function MovieCard({
  movie,
}: Readonly<{
  movie: Movie
}>) {

  return (
    <Link
      href={`/movies/${movie.imdbID}`}
      display={'flex'}
      flexDirection={'column'}
      border={'1px solid black'}
      p={2}
      borderRadius={'8px'}
      sx={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Typography variant="h6" flexGrow={2}>
        {movie.Title}
      </Typography>
      <Box position={'relative'} width={'100%'} sx={{ aspectRatio: 2/3 }}>
        <img
          style={{
            width: "100%",
            aspectRatio: 2/3,
            objectFit: 'cover',
          }}
          src={movie.Poster !== 'N/A' ? movie.Poster : '/no-image.jpg'}
          alt='movie poster'
        />
        {/* <Image
          fill
          style={{
            aspectRatio: 2/3,
          }}
          src={movie.Poster !== 'N/A' ? movie.Poster : '/no-image.jpg'}
          alt='movie poster'
          objectFit="cover"
        /> */}
      </Box>
      <ErrorBoundaryWrapper>
        <Suspense fallback={<Skeleton width={"50%"} height={20} variant="rectangular"/>}>
          <MovieCardImdbRating movieId={movie.imdbID} />
        </Suspense>
      </ErrorBoundaryWrapper>
    </Link>
  )
}