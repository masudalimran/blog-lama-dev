import { Button, Grid, IconButton, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";

import PhotoCamera from "@mui/icons-material/PhotoCamera";

export default function Write() {
  const Input = styled("input")({
    display: "none",
  });
  return (
    <>
      <Grid container justifyContent="center" sx={{ minHeight: "80vh" }}>
        <Grid item>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Grid container flexDirection="column" sx={{ mb: 2 }}>
              <Grid item position="relative">
                <img
                  src="https://picsum.photos/seed/picsum/600/150"
                  alt="Halloween party"
                  width="100%"
                />
              </Grid>
              <Grid item position="absolute" sx={{ mt: "75px", ml: "320px" }}>
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
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Title"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Category"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Blog Details"
              type="password"
              id="password"
              minRows="8"
              multiline="true"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Publish
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
