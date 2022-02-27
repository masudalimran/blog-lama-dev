import { Typography, Grid, Divider } from "@mui/material";
import React from "react";
import SideBar from "../components/body/SideBar";
import generateword from "../hooks/GenerateRandomWord";

export default function ProfilePage() {
  return (
    <>
      <Typography variant="h3" align="center">
        Profile
      </Typography>
      <Divider variant="middle" sx={{ mb: 2, background: "navy" }} />
      <Grid container spacing={2} sx={{ ml: 1 }} justifyContent="space-between">
        <Grid item>
          <img src="https://picsum.photos/300/500" alt="ProfilePicture" />
        </Grid>
        <Grid item>
          <Typography variant="h5">User Name: {generateword(22)}</Typography>
          <Divider />
          <Typography variant="h5">
            Email: {generateword(5)}@gmail.com
          </Typography>
          <Divider />
          <Typography variant="h5">
            Address: H# DCC1, Momin Shoroni Road, North Ibrahimpur, Mirpur-14,
            Dhaka - 1206, Bangladesh
          </Typography>
          <Divider />
          <Typography variant="h5">Religion:{generateword(5)}</Typography>
          <Divider />
          <Typography variant="h5">Marital Status: Unmarried</Typography>
          <Divider />
          <Typography variant="h5">
            Father's Name: {generateword(22)}
          </Typography>
          <Divider />
          <Typography variant="h5">
            Mother's Name: {generateword(22)}
          </Typography>
          <Divider />
          <Typography variant="h5">Company Name: {generateword(22)}</Typography>
          <Divider />
          <Typography variant="h5">
            Other Details: {generateword(22)}
          </Typography>
          <Divider />
          <Typography variant="h5">Occupation: {generateword(22)}</Typography>
          <Divider />
          <Typography variant="h5">
            Brother's Name: {generateword(22)}
          </Typography>
          <Divider />
          <Typography variant="h5">
            Sister's Name: {generateword(22)}
          </Typography>
          <Divider />
        </Grid>
        <Grid item>
          <SideBar />
        </Grid>
      </Grid>
    </>
  );
}
