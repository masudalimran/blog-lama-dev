import {
  Typography,
  Grid,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../../components/body/SideBar";
import generateword from "../../hooks/GenerateRandomWord";

export default function ProfilePage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("xl"));

  const navigate = useNavigate();

  useEffect(() => {
    const x = localStorage.getItem("loginInfo");
    if (x !== "true") {
      navigate("/");
    } else {
    }
  }, []);
  return (
    <>
      <Typography
        variant="h3"
        align="center"
        sx={{ fontSize: { xs: "18px", lg: "32px" } }}
      >
        Profile:{" "}
        <Typography
          variant="h3"
          component="span"
          sx={{ fontSize: { xs: "18px", lg: "32px" } }}
        >
          Masud Al Imran
        </Typography>
      </Typography>
      <Divider variant="middle" sx={{ mb: 2, background: "navy" }} />

      <Grid container justifyContent="space-around">
        <Grid item xs={11} md={4} xl={2}>
          <img
            src="https://picsum.photos/300/500"
            alt="ProfilePicture"
            width="100%"
            height="500px"
            style={{ objectFit: "cover" }}
          />
        </Grid>

        <Grid item xs={10} md={6} xl={6}>
          <Typography variant="body1">User Name: {generateword(22)}</Typography>
          <Divider />
          <Typography variant="body1">
            Email: {generateword(5)}@gmail.com
          </Typography>
          <Divider />
          <Typography variant="body1">
            Address: H# DCC1, Momin Shoroni Road, North Ibrahimpur, Mirpur-14,
            Dhaka - 1206, Bangladesh
          </Typography>
          <Divider />
          <Typography variant="body1">Religion:{generateword(5)}</Typography>
          <Divider />
          <Typography variant="body1">Marital Status: Unmarried</Typography>
          <Divider />
          <Typography variant="body1">
            Father's Name: {generateword(22)}
          </Typography>
          <Divider />
          <Typography variant="body1">
            Mother's Name: {generateword(22)}
          </Typography>
          <Divider />
          <Typography variant="body1">
            Company Name: {generateword(22)}
          </Typography>
          <Divider />
          <Typography variant="body1">
            Other Details: {generateword(22)}
          </Typography>
          <Divider />
          <Typography variant="body1">
            Occupation: {generateword(22)}
          </Typography>
          <Divider />
          <Typography variant="body1">
            Brother's Name: {generateword(22)}
          </Typography>
          <Divider />
          <Typography variant="body1">
            Sister's Name: {generateword(22)}
          </Typography>
          <Divider />
        </Grid>

        <Grid item xs={0} md={0} xl={3}>
          {matches && <SideBar />}
        </Grid>
      </Grid>
    </>
  );
}
