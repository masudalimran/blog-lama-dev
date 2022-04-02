import {
  Typography,
  Grid,
  Divider,
  useTheme,
  useMediaQuery,
  IconButton,
  Link,
  Alert,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link as routerLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../../components/body/SideBar";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EditIcon from "@mui/icons-material/Edit";
import { PF } from "../../publicFolder";
import { getUserById } from "../../Redux/features/user";
import Loading from "../../components/alerts/Loading";

export default function PreviewProfilePage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("xl"));

  // Store
  const { pending, error, singleUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);

  return (
    <>
      {pending ? (
        <Loading />
      ) : error ? (
        <Alert severity="error">Something Went Wrong...</Alert>
      ) : (
        singleUser.username && (
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
                {singleUser.username}
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
                    singleUser.profilePic
                      ? PF + "user/" + singleUser.profilePic
                      : PF + "00000no_231_image.jpg"
                  }
                  alt={singleUser.username + " Profile Picture"}
                  title={singleUser.username + " Profile Picture"}
                  width="100%"
                  height="500px"
                  style={{ objectFit: "cover" }}
                />
              </Grid>

              <Grid item xs={10} md={6} xl={6}>
                <Typography variant="body1">
                  Name: {singleUser.username}
                </Typography>
                <Divider />
                <Typography variant="body1">
                  Email: {singleUser.email}
                </Typography>
                <Divider />
                <Typography
                  variant="h5"
                  color="initial"
                  sx={{ mt: 1, textDecoration: "underline" }}
                >
                  Personal Information
                </Typography>
                <Typography variant="body1">
                  Address: {singleUser.address}
                </Typography>
                <Divider />
                <Typography variant="body1">
                  Religion: {singleUser.religion}
                </Typography>
                <Divider />
                <Typography variant="body1">
                  Marital Status: {singleUser.maritalStatus}
                </Typography>
                <Divider />
                <Typography variant="body1">
                  Father's Name: {singleUser.fatherName}
                </Typography>
                <Divider />
                <Typography variant="body1">
                  Mother's Name: {singleUser.motherName}
                </Typography>
                <Divider />
                <Typography variant="body1">
                  Company Name: {singleUser.companyName}
                </Typography>
                <Divider />
                <Typography variant="body1">
                  Occupation: {singleUser.occupation}
                </Typography>
                <Divider />
                <Typography variant="body1">
                  Hobby: {singleUser.hobbies}
                </Typography>
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
                    <Link
                      href={singleUser.socialMedia[0] || "#"}
                      target="_blank"
                    >
                      <Typography component="span" variant="subtitle2">
                        {singleUser.socialMedia[0] || ""}
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
                    <Link
                      href={singleUser.socialMedia[1] || "#"}
                      target="_blank"
                    >
                      <Typography component="span" variant="subtitle2">
                        {singleUser.socialMedia[1] || ""}
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
                    <Link
                      href={singleUser.socialMedia[2] || "#"}
                      target="_blank"
                    >
                      <Typography component="span" variant="subtitle2">
                        {singleUser.socialMedia[2] || ""}
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
                    <Link
                      href={singleUser.socialMedia[3] || "#"}
                      target="_blank"
                    >
                      <Typography component="span" variant="subtitle2">
                        {singleUser.socialMedia[3] || ""}
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
        )
      )}
    </>
  );
}
