import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Header() {
  return (
    <>
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        sx={{ position: "absolute" }}
      >
        <Grid item>
          <Typography
            variant="h4"
            sx={{
              fontStyle: "italic",
              fontFamily: "cursive",
              fontSize: { xs: 32, md: 60 },
            }}
          >
            React & Node
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h1"
            sx={{ fontFamily: "cursive", fontSize: { xs: 32, md: 60 } }}
          >
            Blog
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ mt: { xs: 0, md: "6%" } }} component="div">
        <img
          src="https://picsum.photos/1000/300"
          alt="Random Sobi"
          width="100%"
          loading="lazy"
        />
      </Box>
    </>
  );
}
