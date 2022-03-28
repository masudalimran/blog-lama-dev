import {
  Typography,
  Grid,
  Divider,
  useTheme,
  useMediaQuery,
  IconButton,
  Link,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link as routerLink, useNavigate } from "react-router-dom";
import SideBar from "../../components/body/SideBar";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EditIcon from "@mui/icons-material/Edit";
import { PF } from "../../publicFolder";

export default function ProfilePage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("xl"));

  const navigate = useNavigate();
  const localData = JSON.parse(localStorage.getItem("loginInfo"));

  useEffect(() => {
    if (!localData) {
      navigate("/");
    } else {
    }
  }, [navigate]);
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
          {localData.username.toUpperCase()}
        </Typography>
        <Link component={routerLink} to="/edit-profile">
          <IconButton title="Edit Profile">
            <EditIcon sx={{ color: "green" }} />
          </IconButton>
        </Link>
      </Typography>
      <Divider variant="middle" sx={{ mb: 2, background: "navy" }} />

      <Grid container justifyContent="space-around">
        <Grid item xs={11} md={4} xl={2}>
          <img
            src={
              localData.profilePic
                ? PF +"user/"+ localData.profilePic
                : PF + "00000no_231_image.jpg"
            }
            alt={localData.username + " Profile Picture"}
            title={localData.username + " Profile Picture"}
            width="100%"
            height="500px"
            style={{ objectFit: "cover" }}
          />
        </Grid>

        <Grid item xs={10} md={6} xl={6}>
          <Typography variant="body1">Name: {localData.username}</Typography>
          <Divider />
          <Typography variant="body1">Email: {localData.email}</Typography>
          <Divider />
          <Typography
            variant="h5"
            color="initial"
            sx={{ mt: 1, textDecoration: "underline" }}
          >
            Personal Information
          </Typography>
          <Typography variant="body1">Address: {localData.address}</Typography>
          <Divider />
          <Typography variant="body1">
            Religion: {localData.religion}
          </Typography>
          <Divider />
          <Typography variant="body1">
            Marital Status: {localData.maritalStatus}
          </Typography>
          <Divider />
          <Typography variant="body1">
            Father's Name: {localData.fatherName}
          </Typography>
          <Divider />
          <Typography variant="body1">
            Mother's Name: {localData.motherName}
          </Typography>
          <Divider />
          <Typography variant="body1">
            Company Name: {localData.companyName}
          </Typography>
          <Divider />
          <Typography variant="body1">
            Occupation: {localData.occupation}
          </Typography>
          <Divider />
          <Typography variant="body1">Hobby: {localData.hobbies}</Typography>
          <Divider />
          <Typography
            variant="h5"
            color="initial"
            sx={{ mt: 1, textDecoration: "underline" }}
          >
            Social Media
          </Typography>

          {/* Facebook */}
          <Grid container alignItems="center">
            <Grid item>
              <IconButton disabled>
                <FacebookIcon size="small" sx={{ color: "navy" }} />
              </IconButton>
            </Grid>
            <Grid item>
              <Link href={localData.socialMedia[0] || "#"} target="_blank">
                <Typography component="span" variant="subtitle2">
                  {localData.socialMedia[0] || ""}
                </Typography>
              </Link>
            </Grid>
          </Grid>

          {/* Twitter */}
          <Grid container alignItems="center">
            <Grid item>
              <IconButton disabled>
                <TwitterIcon fontSize="small" color="info" />
              </IconButton>
            </Grid>
            <Grid item>
              <Link href={localData.socialMedia[1] || "#"} target="_blank">
                <Typography component="span" variant="subtitle2">
                  {localData.socialMedia[1] || ""}
                </Typography>
              </Link>
            </Grid>
          </Grid>

          {/* GitHub */}
          <Grid container alignItems="center">
            <Grid item>
              <IconButton disabled>
                <GitHubIcon fontSize="small" sx={{ color: "black" }} />
              </IconButton>
            </Grid>
            <Grid item>
              <Link href={localData.socialMedia[2] || "#"} target="_blank">
                <Typography component="span" variant="subtitle2">
                  {localData.socialMedia[2] || ""}
                </Typography>
              </Link>
            </Grid>
          </Grid>

          {/* Instagram */}
          <Grid container alignItems="center">
            <Grid item>
              <IconButton disabled>
                <InstagramIcon fontSize="small" sx={{ color: "red" }} />
              </IconButton>
            </Grid>
            <Grid item>
              <Link href={localData.socialMedia[3] || "#"} target="_blank">
                <Typography component="span" variant="subtitle2">
                  {localData.socialMedia[3] || ""}
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={0} md={0} xl={3}>
          {matches && <SideBar />}
        </Grid>
      </Grid>
    </>
  );
}
