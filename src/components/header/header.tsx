import { Box, Button, Container } from "@mui/material";
import Link from "next/link";

export default function Header() {
  return (
    <Box component={'header'} py={4} borderBottom={'1px solid black'}>
      <Container>
        <Box component='nav' display='flex' gap={2}>
          <Link href='/'>
            <Button color="primary">
              Home
            </Button>
          </Link>
          <Link href='/movies'>
            <Button color="primary">
              Movies
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};