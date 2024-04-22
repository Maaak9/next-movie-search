import { Box, Skeleton } from "@mui/material"


export default function MovieGridLoading() {
  return (
    <Box
      display='grid'
      gridTemplateColumns={'repeat(auto-fill, minmax(200px, 1fr))'}
      mt={2}
      gap={2}
    >
      { new Array(1,2,3,4,5,6,7,8,9,10)?.map((id) => (
        <Skeleton key={id} variant="rectangular" width={'100%'} height={400} />
      ))}
    </Box>
  )
}