import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../Redux/features/user";
import { Alert } from "@mui/material";
import Loading from "../../components/alerts/Loading";

const theme = createTheme();

export default function SignUpForm({
  setOpenRegister,
  setOpenLogin,
  setLogStatus,
  setOpen,
}) {
  // States
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [subscriber, setSubscriber] = useState(false);

  // Store
  const { data, status, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Functions
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      registerUser({
        username: firstName.concat(" ", lastName),
        email,
        password,
        subscriber,
      })
    );
  };

  useEffect(() => {
    if (!data.message && data.username && !error) {
      setOpenRegister(false);
      setLogStatus(true);
      localStorage.setItem(
        "loginInfo",
        JSON.stringify({ username: data.username, email: data.email })
      );
      setOpen(false);
    }
  }, [data]);

  const handleLogin = () => {
    setOpenRegister(false);
    setOpenLogin(true);
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email Address"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value={subscriber}
                      color="primary"
                      onChange={(e) => setSubscriber(e.target.checked)}
                    />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            {status === "loading" ? (
              <Loading />
            ) : (
              data.message && <Alert severity="error">{data.message}</Alert>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Typography
                  color="primary"
                  sx={{ textDecoration: "underline", cursor: "pointer" }}
                  variant="body2"
                  onClick={handleLogin}
                >
                  Already have an account? Sign in
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
