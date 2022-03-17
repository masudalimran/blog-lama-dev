import {
  Typography,
  Grid,
  Divider,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../../components/body/SideBar";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EditIcon from "@mui/icons-material/Edit";
// import generateword from "../../hooks/GenerateRandomWord";

export default function ProfilePage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("xl"));

  const navigate = useNavigate();
  const localData = JSON.parse(localStorage.getItem("loginInfo"));
  let socialMedia = [];
  if (localData.socialMedia) {
    socialMedia = localData.socialMedia.split("::||::");
  }

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
          {localData.username}
        </Typography>
        <Link to="/edit-profile">
          <IconButton title="Edit Profile">
            <EditIcon sx={{ color: "green" }} />
          </IconButton>
        </Link>
      </Typography>
      <Divider variant="middle" sx={{ mb: 2, background: "navy" }} />

      <Grid container justifyContent="space-around">
        <Grid item xs={11} md={4} xl={2}>
          <img
            src={localData.profilePic}
            alt={localData.username + " Profile Picture"}
            title={localData.username + " Profile Picture"}
            width="100%"
            height="500px"
            style={{ objectFit: "cover" }}
          />
        </Grid>

        <Grid item xs={10} md={6} xl={6}>
          <Typography variant="body1">
            User Name: {localData.username}
          </Typography>
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
          <Typography variant="body1">Religion:{localData.religion}</Typography>
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
              <FacebookIcon size="small" sx={{ color: "navy" }} />
            </Grid>
            <Grid item>
              <Link to={socialMedia[0] || "#"}>
                <Typography component="span" variant="subtitle2">
                  {socialMedia[0] || ""}
                </Typography>
              </Link>
            </Grid>
          </Grid>

          {/* Twitter */}

          <Grid container alignItems="center">
            <Grid item>
              <TwitterIcon fontSize="small" color="info" />
            </Grid>
            <Grid item>
              <Link to={socialMedia[1] || "#"}>
                <Typography component="span" variant="subtitle2">
                  {socialMedia[1] || ""}
                </Typography>
              </Link>
            </Grid>
          </Grid>

          {/* GitHub */}
          <Grid container alignItems="center">
            <Grid item>
              <GitHubIcon fontSize="small" sx={{ color: "black" }} />
            </Grid>
            <Grid item>
              <Link to={socialMedia[2] || "#"}>
                <Typography component="span" variant="subtitle2">
                  {socialMedia[2] || ""}
                </Typography>
              </Link>
            </Grid>
          </Grid>

          {/* Instagram */}
          <Grid container alignItems="center">
            <Grid item>
              <InstagramIcon fontSize="small" sx={{ color: "red" }} />
            </Grid>
            <Grid item>
              <Link to={socialMedia[3] || "#"}>
                <Typography component="span" variant="subtitle2">
                  {socialMedia[3] || ""}
                </Typography>
              </Link>
            </Grid>
          </Grid>
          {/* </Grid> */}
          {/* </Grid> */}
          {/* </IconButton> */}
          {/* </Link> */}
          {/* </Grid> */}
          {/* <Grid item sm={1} xs={2}> */}
          {/* <Link href="https://twitter.com/masudalimran1" target="_blank"> */}
          {/* <IconButton aria-label="facebook" size="small"> */}
          {/* {socialMedia[1] || "123123123"} */}
          {/* </IconButton> */}
          {/* </Link> */}
          {/* </Grid> */}
          {/* <Grid item sm={1} xs={2}> */}
          {/* <Link href="https://github.com/masudalimran" target="_blank"> */}
          {/* <IconButton aria-label="facebook" size="small"> */}
          {/* {socialMedia[2] || "123123123123"} */}
          {/* </IconButton> */}
          {/* </Link> */}
          {/* </Grid> */}
          {/* <Grid item sm={1} xs={2}> */}
          {/* <Link
            href="https://www.instagram.com/elonmusk/?hl=en"
            target="_blank"
          // > */}
          {/* <IconButton aria-label="facebook" size="small"> */}
          {/* {socialMedia[3] || "123123123132"} */}
          {/* </IconButton> */}
          {/* </Link> */}
          {/* </Grid> */}
        </Grid>

        <Grid item xs={0} md={0} xl={3}>
          {matches && <SideBar />}
        </Grid>
      </Grid>
    </>
  );
}
