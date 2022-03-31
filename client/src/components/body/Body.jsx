import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Posts from "./Posts";
import SideBar from "./SideBar";

export default function Body() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("xl"));
  const localData = JSON.parse(localStorage.getItem("loginInfo"));
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item md={12} xl={localData ? 10 : 12}>
          <Posts />
        </Grid>
        {localData && (
          <Grid item md={0} xl={2}>
            {matches && <SideBar />}
          </Grid>
        )}
      </Grid>
    </>
  );
}
