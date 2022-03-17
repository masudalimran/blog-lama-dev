import PhotoCamera from "@mui/icons-material/PhotoCamera";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  Input,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../Redux/features/user";
import Loading from "../../components/alerts/Loading";

export default function EditProfilePage() {
  const navigate = useNavigate();
  // Local Host
  const localData = JSON.parse(localStorage.getItem("loginInfo"));
  // States
  const [profilePic, setProfilePic] = useState(localData.profilePic);
  const [username, setUsername] = useState(localData.username);
  const [email, setEmail] = useState(localData.email);
  const [password, setPassword] = useState(localData.password);
  const [subscriber, setSubscriber] = useState(localData.subscriber);
  // Personal Information
  const [address, setAddress] = useState(localData.address || "");
  const [religion, setReligion] = useState(localData.religion || "");
  const [maritalStatus, setMaritalStatus] = useState(
    localData.maritalStatus || ""
  );
  const [fatherName, setFatherName] = useState(localData.fatherName || "");
  const [motherName, setMotherName] = useState(localData.motherName || "");
  const [companyName, setCompanyName] = useState(localData.companyName || "");
  const [occupation, setOccupation] = useState(localData.occupation || "");
  const [hobbies, setHobbies] = useState(localData.hobbies || "");
  // Social Media
  const [facebook, setFacebook] = useState(localData.socialMedia[0] || "");
  const [twitter, setTwitter] = useState(localData.socialMedia[1] || "");
  const [github, setGithub] = useState(localData.socialMedia[2] || "");
  const [insta, setInsta] = useState(localData.socialMedia[3] || "");
  const socialMedia = [facebook, twitter, github, insta];
  // SnackBar
  const [updateSnackBar, setUpdateSnackBar] = useState(false);

  // Store
  const { data, status, error } = useSelector((state) => state.user);
  console.log(data);
  useEffect(() => {
    if (!localStorage.getItem("loginInfo")) navigate("/");
    if (data.username) setUpdateSnackBar(true);
  }, [data]);

  // Functions
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        // _id: localData._id,
        username,
        email,
        password,
        profilePic,
        subscriber,
        address,
        religion,
        maritalStatus,
        fatherName,
        motherName,
        companyName,
        occupation,
        hobbies,
        socialMedia,
      })
    );
    // if (!data.message && !error) setUpdateSnackBar(true);
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item lg={6} xs={10}>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid
              container
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <img
                  src={profilePic}
                  alt={username + " profile picture"}
                  width="100%"
                  height="150px"
                  style={{ objectFit: "cover" }}
                />
              </Grid>
              <Grid item position="absolute">
                <label htmlFor="icon-button-file">
                  <Input
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    sx={{ display: "none" }}
                  />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
              </Grid>
            </Grid>
            <Input
              required
              fullWidth
              defaultValue={username || ""}
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              required
              fullWidth
              defaultValue={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Grid container>
              <Grid item sx={{ mr: 3 }}>
                <Input
                  required
                  defaultValue={password || ""}
                  placeholder="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item>
                <Grid item lg={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={subscriber || false}
                        onChange={(e) => setSubscriber(e.target.checked)}
                      />
                    }
                    label="Subscribe"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Typography
              variant="subtitle1"
              color="initial"
              sx={{ mt: 1, textDecoration: "underline" }}
            >
              Personal Information
            </Typography>
            <Input
              fullWidth
              defaultValue={address || ""}
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <Grid container>
              <Grid item sx={{ mr: 3 }}>
                <Input
                  defaultValue={religion || ""}
                  placeholder="Religion"
                  onChange={(e) => setReligion(e.target.value)}
                />
              </Grid>
              <Grid item>
                <Input
                  defaultValue={maritalStatus || ""}
                  placeholder="Marital Status"
                  onChange={(e) => setMaritalStatus(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item sx={{ mr: 3 }}>
                <Input
                  defaultValue={fatherName || ""}
                  placeholder="Father's Name"
                  onChange={(e) => setFatherName(e.target.value)}
                />
              </Grid>
              <Grid item>
                <Input
                  defaultValue={motherName || ""}
                  placeholder="Mother's Name"
                  onChange={(e) => setMotherName(e.target.value)}
                />
              </Grid>
            </Grid>
            <Input
              fullWidth
              defaultValue={companyName || ""}
              placeholder="Company Name"
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <Grid container>
              <Grid item sx={{ mr: 3 }}>
                <Input
                  defaultValue={occupation || ""}
                  placeholder="Occupation"
                  onChange={(e) => setOccupation(e.target.value)}
                />
              </Grid>
              <Grid item>
                <Input
                  defaultValue={hobbies || ""}
                  placeholder="Best Hobby"
                  onChange={(e) => setHobbies(e.target.value)}
                />
              </Grid>
            </Grid>
            <Typography
              variant="subtitle1"
              color="initial"
              sx={{ mt: 1, textDecoration: "underline" }}
            >
              Social Media
            </Typography>
            <Grid container justifyContent="space-between">
              <Grid item lg={3} xs={12} sm={6}>
                <IconButton>
                  <FacebookIcon size="small" sx={{ color: "navy" }} />
                </IconButton>
                <Input
                  defaultValue={facebook || ""}
                  placeholder="Facebook "
                  onChange={(e) => setFacebook(e.target.value)}
                />
              </Grid>
              <Grid item lg={3} xs={12} sm={6}>
                <IconButton>
                  <TwitterIcon size="small" color="info" />
                </IconButton>
                <Input
                  defaultValue={twitter || ""}
                  placeholder="Twitter "
                  onChange={(e) => setTwitter(e.target.value)}
                />
              </Grid>
              <Grid item lg={3} xs={12} sm={6}>
                <IconButton>
                  <GitHubIcon size="small" sx={{ color: "black" }} />
                </IconButton>
                <Input
                  defaultValue={github || ""}
                  placeholder="GitHub "
                  onChange={(e) => setGithub(e.target.value)}
                />
              </Grid>
              <Grid item lg={3} xs={12} sm={6}>
                <IconButton>
                  <InstagramIcon size="small" sx={{ color: "red" }} />
                </IconButton>
                <Input
                  defaultValue={insta || ""}
                  placeholder="Instagram"
                  onChange={(e) => setInsta(e.target.value)}
                />
              </Grid>
            </Grid>
            {status === "loading" ? (
              <Loading />
            ) : (
              !data.username && <Alert severity="error">{data}</Alert>
            )}

            <Grid item>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="warning"
                sx={{ mt: 3, mb: 2 }}
              >
                Update
              </Button>
            </Grid>
          </Box>

          <Snackbar
            open={updateSnackBar}
            autoHideDuration={5000}
            onClose={() => setUpdateSnackBar(false)}
          >
            <Alert
              variant="filled"
              onClose={() => setUpdateSnackBar(false)}
              severity="success"
              sx={{ width: "100%", mb: 3 }}
            >
              Update Successful
            </Alert>
          </Snackbar>
        </Grid>
      </Grid>
    </>
  );
}
