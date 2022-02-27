import { Grid } from "@mui/material";
import React from "react";
import Posts from "./Posts";
import SideBar from "./SideBar";

export default function Body() {
  return (
    <>
      <Grid container>
        <Grid item lg={10}>
          <Posts />
        </Grid>
        <Grid item lg={2}>
          <SideBar />
        </Grid>
      </Grid>
    </>
  );
}
