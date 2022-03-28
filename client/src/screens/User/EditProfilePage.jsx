import PhotoCamera from "@mui/icons-material/PhotoCamera";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import {
  checkPass,
  profilePicUpdate,
  refreshProPicData,
  updateUser,
} from "../../Redux/features/user";
import Loading from "../../components/alerts/Loading";
import { PF } from "../../publicFolder";

export default function EditProfilePage() {
  const navigate = useNavigate();

  // Local Host
  const localData = JSON.parse(localStorage.getItem("loginInfo"));
  // States
  const [profilePic, setProfilePic] = useState("");
  const [username, setUsername] = useState(localData.username);
  const [email, setEmail] = useState(localData.email);
  const [subscriber, setSubscriber] = useState(localData.subscriber);
  // Password Management
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reNewPassword, setReNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showReNewPassword, setShowReNewPassword] = useState(false);
  const [newPassMatched, setNewPassMatched] = useState(false);

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
  // Check if profile updated
  const [isUpdated, setIsUpdated] = useState(false);

  // SnackBar
  const [updateSnackBar, setUpdateSnackBar] = useState(false);

  // Store
  const { updatedData, pending, error, passCheckData, proPicData } =
    useSelector((state) => state.user);

  // Functions
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedUser = {
      _id: localData._id,
      username,
      email,
      password: newPassword,
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
    };
    if (profilePic !== "") {
      const data = new FormData();
      const ext = profilePic.name.split(".");
      const filename =
        Date.now() +
        "-" +
        username.replace(/\s+/g, "") +
        "-profile-picture." +
        ext.slice(-1);
      data.append("name", filename);
      data.append("profilePic", profilePic);
      updatedUser.profilePic = filename;
      if (localData.profilePic) updatedUser.prevImg = localData.profilePic;
      dispatch(profilePicUpdate(data));
    } else dispatch(refreshProPicData());
    dispatch(updateUser(updatedUser));
    setProfilePic("");
  };

  // TODO Use Effects
  //  Check if logged in
  useEffect(() => {
    if (!localStorage.getItem("loginInfo")) navigate("/");
  }, []);

  // Show snackbar
  useEffect(() => {
    if (updatedData.username) setUpdateSnackBar(true);
  }, [updatedData]);

  useEffect(() => {}, [profilePic]);

  // Check Password
  useEffect(() => {
    dispatch(checkPass({ _id: localData._id, password }));
    if (password === "") {
      setNewPassword("");
      setReNewPassword("");
    }
  }, [password]);

  // Check if new passwords match
  useEffect(() => {
    if (reNewPassword.length <= newPassword.length) {
      if (!(newPassword.slice(0, reNewPassword.length) === reNewPassword))
        setNewPassMatched(false);
      else setNewPassMatched(true);
    } else setNewPassMatched(false);
  }, [reNewPassword]);

  // Check if changes are made
  useEffect(() => {
    if (
      profilePic === "" &&
      password === "" &&
      username === localData.username &&
      email === localData.email &&
      subscriber === localData.subscriber &&
      address === (localData.address || "") &&
      religion === (localData.religion || "") &&
      maritalStatus === (localData.maritalStatus || "") &&
      fatherName === (localData.fatherName || "") &&
      motherName === (localData.motherName || "") &&
      companyName === (localData.companyName || "") &&
      occupation === (localData.occupation || "") &&
      hobbies === (localData.hobbies || "") &&
      socialMedia[0] === (localData.socialMedia[0] || "") &&
      socialMedia[1] === (localData.socialMedia[1] || "") &&
      socialMedia[2] === (localData.socialMedia[2] || "") &&
      socialMedia[3] === (localData.socialMedia[3] || "")
    ) {
      setIsUpdated(false);
    } else {
      setIsUpdated(true);
    }
  }, [
    profilePic,
    password,
    username,
    email,
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
  ]);

  return (
    <>
      <Grid container alignItems="center" flexDirection="column" spacing={3}>
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
                  src={
                    profilePic !== ""
                      ? URL.createObjectURL(profilePic)
                      : localData.profilePic
                      ? PF + "user/" + localData.profilePic
                      : PF + "00000no_231_image.jpg"
                  }
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
                    onChange={(e) => setProfilePic(e.target.files[0])}
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
            <TextField
              required
              fullWidth
              defaultValue={username || ""}
              label="User Name"
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              required
              fullWidth
              defaultValue={email || ""}
              label="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Grid container>
              <Grid item sx={{ mr: 3 }}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="change-password"
                    sx={{
                      bgcolor: !newPassMatched && password && "orange",
                    }}
                  >
                    <Typography>Change Password</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Input
                      defaultValue={password}
                      placeholder="Enter Old Password"
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => setPassword(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <VisibilityIcon />
                            ) : (
                              <VisibilityOffIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </AccordionDetails>
                  {passCheckData && (
                    <>
                      <AccordionDetails>
                        <Input
                          defaultValue={newPassword}
                          placeholder="New Password"
                          type={showNewPassword ? "text" : "password"}
                          onChange={(e) => setNewPassword(e.target.value)}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() =>
                                  setShowNewPassword(!showNewPassword)
                                }
                              >
                                {showNewPassword ? (
                                  <VisibilityIcon />
                                ) : (
                                  <VisibilityOffIcon />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </AccordionDetails>
                      <AccordionDetails>
                        <Input
                          defaultValue={reNewPassword}
                          placeholder="Confirm Password"
                          type={showReNewPassword ? "text" : "password"}
                          onChange={(e) => setReNewPassword(e.target.value)}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() =>
                                  setShowReNewPassword(!showReNewPassword)
                                }
                              >
                                {showReNewPassword ? (
                                  <VisibilityIcon />
                                ) : (
                                  <VisibilityOffIcon />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                        />

                        {!newPassMatched && (
                          <Alert severity="error">Password Not Matched</Alert>
                        )}
                      </AccordionDetails>
                    </>
                  )}
                </Accordion>
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
            <TextField
              fullWidth
              defaultValue={address || ""}
              label="Address"
              onChange={(e) => setAddress(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Grid container>
              <Grid item sx={{ mr: 3 }}>
                <TextField
                  defaultValue={religion || ""}
                  placeholder="Religion"
                  label="Religion"
                  onChange={(e) => setReligion(e.target.value)}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item>
                <TextField
                  defaultValue={maritalStatus || ""}
                  label="Marital Status"
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  sx={{ mb: 2 }}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item sx={{ mr: 3 }}>
                <TextField
                  defaultValue={fatherName || ""}
                  label="Father's Name"
                  onChange={(e) => setFatherName(e.target.value)}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item>
                <TextField
                  defaultValue={motherName || ""}
                  label="Mother's Name"
                  onChange={(e) => setMotherName(e.target.value)}
                  sx={{ mb: 2 }}
                />
              </Grid>
            </Grid>
            <TextField
              fullWidth
              defaultValue={companyName || ""}
              label="Company Name"
              onChange={(e) => setCompanyName(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Grid container>
              <Grid item sx={{ mr: 3 }}>
                <TextField
                  defaultValue={occupation || ""}
                  label="Occupation"
                  onChange={(e) => setOccupation(e.target.value)}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item>
                <TextField
                  defaultValue={hobbies || ""}
                  label="Best Hobby"
                  onChange={(e) => setHobbies(e.target.value)}
                  sx={{ mb: 2 }}
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
                <IconButton disabled>
                  <FacebookIcon size="small" sx={{ color: "navy" }} />
                </IconButton>
                <Input
                  defaultValue={facebook || ""}
                  placeholder="Facebook "
                  onChange={(e) => setFacebook(e.target.value)}
                />
              </Grid>
              <Grid item lg={3} xs={12} sm={6}>
                <IconButton disabled>
                  <TwitterIcon size="small" color="info" />
                </IconButton>
                <Input
                  defaultValue={twitter || ""}
                  placeholder="Twitter "
                  onChange={(e) => setTwitter(e.target.value)}
                />
              </Grid>
              <Grid item lg={3} xs={12} sm={6}>
                <IconButton disabled>
                  <GitHubIcon size="small" sx={{ color: "black" }} />
                </IconButton>
                <Input
                  defaultValue={github || ""}
                  placeholder="GitHub "
                  onChange={(e) => setGithub(e.target.value)}
                />
              </Grid>
              <Grid item lg={3} xs={12} sm={6}>
                <IconButton disabled>
                  <InstagramIcon size="small" sx={{ color: "red" }} />
                </IconButton>
                <Input
                  defaultValue={insta || ""}
                  placeholder="Instagram"
                  onChange={(e) => setInsta(e.target.value)}
                />
              </Grid>
            </Grid>
            {pending ? (
              <Loading />
            ) : updatedData.message ? (
              <Alert severity="error">{updatedData.message}</Alert>
            ) : (
              error && <Alert severity="error">"SomeThing Went wrong"</Alert>
            )}
            <Grid item>
              <Button
                type="submit"
                disabled={(!newPassMatched && password !== "") || !isUpdated}
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
              {proPicData.message ? proPicData.message : "Update Successful"}
            </Alert>
          </Snackbar>
        </Grid>
      </Grid>
    </>
  );
}
