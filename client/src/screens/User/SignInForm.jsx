import React, { useContext, useEffect, useState } from "react";
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
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Redux/features/user";
import Loading from "../../components/alerts/Loading";
import DataContext from "../../Context/DataContext";

const theme = createTheme();

export default function SignInForm({ setOpenLogin, setOpenRegister, setOpen }) {
  // State
  const [forgotOpen, setForgotOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  // Data context
  const { setSnackBarLogin } = useContext(DataContext);

  // Store
  const dispatch = useDispatch();
  const { data, pending, error } = useSelector((state) => state.user);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser({ email, password: pass }));
  };

  useEffect(() => {
    if (data.username) {
      setOpenLogin(false);
      setOpen(false);
      setSnackBarLogin(true);
    }
  }, [data]);

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
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              onChange={(e) => setPass(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
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
