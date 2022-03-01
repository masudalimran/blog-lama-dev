import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const theme = createTheme();

export default function SignInForm({
  setOpenLogin,
  setOpenRegister,
  setLogStatus,
  setOpen,
}) {
  const [forgotOpen, setForgotOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    setOpenLogin(false);
    setLogStatus(true);
    setOpen(false);
  };

  const handleRegister = () => {
    setOpenLogin(false);
    setOpenRegister(true);
  };

  const handleForgotClose = () => {
    setForgotOpen(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Typography
                  color="primary"
                  sx={{ textDecoration: "underline", cursor: "pointer" }}
                  variant="body2"
                  onClick={() => {
                    setForgotOpen(true);
                  }}
                >
                  {"Forgot password?"}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  color="primary"
                  sx={{ textDecoration: "underline", cursor: "pointer" }}
                  variant="body2"
                  onClick={handleRegister}
                >
                  {"Don't have an account? Sign Up"}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Dialog open={forgotOpen} onClose={handleForgotClose}>
          <DialogTitle>Forgot Password?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter your email address here. We will send you a recovery
              link.
            </DialogContentText>
            <TextField
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleForgotClose}>Cancel</Button>
            <Button onClick={handleForgotClose}>Send</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </ThemeProvider>
  );
}
