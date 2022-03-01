import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Box, Button, Grid, IconButton, TextField } from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function EditProfilePage() {
  const Input = styled("input")({
    display: "none",
  });

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
      <Grid container justifyContent="center">
        <Grid item lg={6} xs={10}>
          <Box component="form" noValidate onSubmit={(e) => e.preventDefault()}>
            <Grid
              container
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <img
                  src="https://picsum.photos/seed/picsum/950/150"
                  alt="Halloween party"
                  width="100%"
                  height="150px"
                  style={{ objectFit: "cover" }}
                />
              </Grid>
              <Grid item position="absolute">
                <label htmlFor="icon-button-file">
                  <Input accept="image/*" id="icon-button-file" type="file" />
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
            <Grid item>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="UserName"
                name="username"
                autoComplete="username"
                autoFocus
              />
            </Grid>
            <Grid item>
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email"
                type="email"
                id="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item>
              <TextField
                margin="normal"
                fullWidth
                name="address"
                label="Address"
                id="address"
                autoComplete="address"
              />
            </Grid>
            <Grid item>
              <TextField
                margin="normal"
                fullWidth
                name="religion"
                label="Religion"
                id="religion"
                autoComplete="religion"
              />
            </Grid>
            <Grid item>
              <TextField
                margin="normal"
                fullWidth
                name="maraital-status"
                label="Marital Status"
                id="maraital-status"
                autoComplete="maraital-status"
              />
            </Grid>
            <Grid item>
              <TextField
                margin="normal"
                fullWidth
                name="father-name"
                label="Father's Name"
                id="father-name"
                autoComplete="father-name"
              />
            </Grid>
            <Grid item>
              <TextField
                margin="normal"
                fullWidth
                name="mother-name"
                label="Mother's Name"
                id="mother-name"
                autoComplete="mother-name"
              />
            </Grid>
            <Grid item>
              <TextField
                margin="normal"
                fullWidth
                name="company-name"
                label="Company Name"
                id="company-name"
                autoComplete="company-name"
              />
            </Grid>

            <Grid item>
              <TextField
                margin="normal"
                fullWidth
                name="occupation"
                label="Occupation"
                id="occupation"
                autoComplete="occupation"
              />
            </Grid>
            <Grid item>
              <TextField
                margin="normal"
                fullWidth
                name="brother-name"
                label="Brother's Name"
                id="brother-name"
                autoComplete="brother-name"
              />
            </Grid>
            <Grid item>
              <TextField
                margin="normal"
                fullWidth
                name="sister-name"
                label="Sister's Name"
                id="sister-name"
                autoComplete="sister-name"
              />
            </Grid>
            <Grid item>
              <TextField
                margin="normal"
                fullWidth
                name="other"
                label="Other Details"
                multiline
                minRows={5}
                id="other"
                autoComplete="other"
              />
            </Grid>
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
        </Grid>
      </Grid>
    </>
  );
}
