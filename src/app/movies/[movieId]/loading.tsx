import { Box, Grid, Skeleton } from "@mui/material";


export default function MoviesLoading() {
  return (
<Box mt={4}>
      <Grid container>
        <Grid xs={12} sm={4}>
          <Skeleton
            variant="rectangular"
            width={'100%'}
            height={400}
          />
        </Grid>
        <Grid xs={12} sm={8} pl={[0,4]}>
          <Skeleton width={"50%"} />
          <Skeleton height={60} width={"100%"} />
          <Skeleton width={"70%"} />
        </Grid>

      </Grid>
    </Box>
  );
}