import 'server-only';
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Typography variant="h6" mt={2}>
        Movie search Next js 14 Application
      </Typography>
      <Typography variant="body1" mt={2}>
        This is a playbook for learning Next.js 14 and its concepts! <br />
        The application has 2 routes one for searching for movies and one for viewing additional details about a specific movie. <br />
        The api used to fetch the movies data is <a href='https://www.omdbapi.com'>omdbapi</a>
      </Typography>
    </main>
  );
}
