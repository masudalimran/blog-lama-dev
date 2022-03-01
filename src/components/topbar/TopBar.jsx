import { Grid } from "@mui/material";
import { useState } from "react";
import Profile from "./socialMedia/Profile";
import SocialMedia from "./socialMedia/SocialMedia";
import TopBarMenu from "./socialMedia/TopBarMenu";

export default function TopBar() {
  const [logStatus, setLogStatus] = useState(false);

  return (
    <>
      <Grid
        container
        position="sticky"
        sx={{ top: 0, zIndex: 2, backgroundColor: "white" }}
        justifyContent="space-around"
      >
        <Grid item lg={3} xs={5}>
          <SocialMedia />
        </Grid>
        <Grid item lg={6} xs={1}>
          <TopBarMenu />
        </Grid>
        <Grid item lg={3} xs={6}>
          <Profile logStatus={logStatus} setLogStatus={setLogStatus} />
        </Grid>
      </Grid>
    </>
  );
}
