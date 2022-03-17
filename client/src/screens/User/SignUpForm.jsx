import React, { useContext, useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
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
import { Alert, IconButton, Input, InputAdornment } from "@mui/material";
import Loading from "../../components/alerts/Loading";
import DataContext from "../../Context/DataContext";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const theme = createTheme();

export default function SignUpForm({ setOpenRegister, setOpenLogin, setOpen }) {
  // States
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [matchedPass, setMatchedPass] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [showRePass, setShowRePass] = useState(false);
  const [subscriber, setSubscriber] = useState(false);

  // Data context
  const { setSnackBarLogin } = useContext(DataContext);

  // Store
  const { data, pending, error } = useSelector((state) => state.user);
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
    if (data.username) {
      setOpenRegister(false);
      setOpen(false);
      setSnackBarLogin(true);
    }
  }, [data]);

  useEffect(() => {
    if (rePassword.length <= password.length) {
      if (!(password.slice(0, rePassword.length) === rePassword))
        setMatchedPass(false);
      else setMatchedPass(true);
    } else setMatchedPass(false);
  }, [rePassword]);

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
                <Input
                  required
                  fullWidth
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Input
                  required
                  fullWidth
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  required
                  fullWidth
                  placeholder="Email Address"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  required
                  fullWidth
                  placeholder="Password"
                  type={showPass ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPass(!showPass)}>
                        {showPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  required
                  fullWidth
                  placeholder="Re-Enter Password"
                  type={showRePass ? "text" : "password"}
                  error={matchedPass ? false : true}
                  onChange={(e) => setRePassword(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowRePass(!showRePass)}>
                        {showRePass ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Grid>
              <Grid item xs={12}>
                {!matchedPass && (
                  <Alert severity="error">Password Not Matched</Alert>
                )}
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
                  label="I want to receive updates via email."
                />
              </Grid>
            </Grid>
            {pending ? (
              <Loading />
            ) : data.message ? (
              <Alert severity="error">{data.message}</Alert>
            ) : (
              error && <Alert severity="error">Something Went Wrong...</Alert>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={matchedPass ? false : true}
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
