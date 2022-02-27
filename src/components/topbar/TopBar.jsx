import { Grid } from "@mui/material";
import Profile from "./socialMedia/Profile";
import SocialMedia from "./socialMedia/SocialMedia";
import TopBarMenu from "./socialMedia/TopBarMenu";

export default function TopBar() {
  return (
    <>
      <Grid
        container
        position="sticky"
        sx={{ top: 0, zIndex: 2, backgroundColor: "white" }}
      >
        <Grid item lg={3}>
          <SocialMedia />
        </Grid>
        <Grid item lg={6}>
          <TopBarMenu />
        </Grid>
        <Grid item lg={3}>
          <Profile />
        </Grid>
      </Grid>
    </>
  );
}
