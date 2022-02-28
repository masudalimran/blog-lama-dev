import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Posts from "./Posts";
import SideBar from "./SideBar";

export default function Body() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("xl"));
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item md={12} xl={10}>
          <Posts />
        </Grid>
        <Grid item md={0} xl={2}>
          {matches && <SideBar />}
        </Grid>
      </Grid>
    </>
  );
}
