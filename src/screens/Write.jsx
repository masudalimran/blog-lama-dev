import { Button, Grid, IconButton, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";

import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useContext } from "react";
import DataContext from "../Context/DataContext";

export default function Write() {
  const Input = styled("input")({
    display: "none",
  });

  const { setOpenLogin } = useContext(DataContext);
  const handlePublishBlog = (e) => {
    e.preventDefault();
    const x = localStorage.getItem("loginInfo");
    if (x !== "true") {
      setOpenLogin(true);
    } else {
    }
  };
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item lg={6} xs={10}>
          <Box component="form" noValidate onSubmit={handlePublishBlog}>
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
                id="title"
                label="Title"
                name="title"
                autoComplete="title"
                autoFocus
              />
            </Grid>
            <Grid item>
              <TextField
                margin="normal"
                required
                fullWidth
                name="category"
                label="Category"
                id="category"
                autoComplete="category"
              />
            </Grid>
            <Grid item>
              <TextField
                margin="normal"
                fullWidth
                name="details"
                label="Blog Details"
                id="details"
                minRows="8"
                multiline="true"
                autoComplete="details"
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Publish
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
