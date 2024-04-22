'use client';

import { Alert, Button } from "@mui/material";

export default function ErrorMovies({
  error, reset,
} : {
  error: Error,
  reset: () => void
}) {
  return (
    <Alert severity="error" sx={{ mt: 4}}>
      This is an error Alert.
      <Button onClick={() => reset()}>Try again</Button>
    </Alert>
  )
}