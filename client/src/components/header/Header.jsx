import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { PF } from "../../publicFolder";

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
            align="center"
            sx={{
              fontStyle: "italic",
              fontFamily: "cursive",
              fontSize: { xs: 32, md: 60 },
            }}
          >
            Express yourself
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h1"
            sx={{ fontFamily: "cursive", fontSize: { xs: 32, md: 60 } }}
          >
            With B|Log
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ mt: { xs: 0, md: "6%" } }} component="div">
        <img
          src={PF + "/home/banner.jpg"}
          alt="b-log-banner"
          title="BLog Banner"
          width="100%"
          height="300px"
          style={{ objectFit: "cover" }}
        />
      </Box>
    </>
  );
}
