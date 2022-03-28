import {
  Avatar,
  Grid,
  IconButton,
  Autocomplete,
  TextField,
  Dialog,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  ListSubheader,
  Snackbar,
  Alert,
} from "@mui/material";

import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { useContext, useState } from "react";
import SignInDialogue from "../../../screens/User/SignInDialogue";
import SignUpDialogue from "../../../screens/User/SignUpDialogue";
import { useNavigate } from "react-router-dom";
import DataContext from "../../../Context/DataContext";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../Redux/features/user";
import Loading from "../../alerts/Loading";
import { PF } from "../../../publicFolder";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];

export default function Profile() {
  // States
  const [open, setOpen] = useState(false);
  const {
    openLogin,
    setOpenLogin,
    openRegister,
    setOpenRegister,
    snackBarLogin,
    setSnackBarLogin,
  } = useContext(DataContext);
  const [snackBarLogout, setSnackBarLogout] = useState(false);

  const [openLogOutConfirm, setOpenLogOutConfirm] = useState(false);
  const handleClickOpen = () => {
    setOpenLogin(true);
  };

  // Store
  const dispatch = useDispatch();
  const { pending } = useSelector((state) => state.user);
  const localData = JSON.parse(localStorage.getItem("loginInfo"));

  // Functions
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("loginInfo");
    setOpenLogOutConfirm(false);
    setSnackBarLogout(true);
    navigate("/");
  };

  return (
    <>
      {pending ? (
        <Loading />
      ) : (
        <Grid container justifyContent="flex-end">
          <Grid item lg={10} sx={{ width: { xs: "60%", sm: "80%" } }}>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={top100Films.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  size="small"
                />
              )}
            />
          </Grid>
          {localStorage.getItem("loginInfo") ? (
            <Grid item lg={2}>
              <IconButton
                aria-label="profile-avatar"
                size="small"
                onClick={() => setOpen(true)}
              >
                <Avatar
                  alt={localData.username.toUpperCase()}
                  src={PF + "user/" + localData.profilePic}
                  sx={{ width: 28, height: 28 }}
                />
              </IconButton>
              <Dialog
                open={open}
                onClose={() => setOpen(false)}
                sx={{
                  "& .MuiDialog-container": {
                    justifyContent: "flex-end",
                    alignItems: "flex-start",
                  },
                }}
              >
                <List
                  sx={{ maxWidth: 360, bgcolor: "background.paper" }}
                  component="nav"
                  aria-labelledby="profile"
                  dense
                  subheader={
                    <ListSubheader align="center">{`${
                      localData.username
                        ? "Hello, " + localData.username.split(" ", 1)
                        : "Hello, Guest"
                    }`}</ListSubheader>
                  }
                >
                  <Link
                    href="/profile"
                    underline="none"
                    sx={{ color: "black" }}
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <AccountCircleIcon size="small" />
                      </ListItemIcon>
                      <ListItemText primary="View Profile" />
                    </ListItemButton>
                  </Link>
                  <Link
                    href="/edit-profile"
                    underline="none"
                    sx={{ color: "black" }}
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <ManageAccountsIcon size="small" />
                      </ListItemIcon>
                      <ListItemText primary="Edit Profile" />
                    </ListItemButton>
                  </Link>
                  <ListItemButton
                    onClick={() => {
                      setOpenLogOutConfirm(true);
                      setOpen(false);
                    }}
                  >
                    <ListItemIcon>
                      <LogoutIcon size="small" />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItemButton>
                </List>
              </Dialog>
            </Grid>
          ) : (
            <Grid item>
              <IconButton
                aria-label="login-register"
                onClick={handleClickOpen}
                title="Login/ Register"
              >
                <PersonIcon sx={{ color: "black" }} />
              </IconButton>
            </Grid>
          )}
          <Snackbar
            open={snackBarLogin}
            autoHideDuration={5000}
            onClose={() => setSnackBarLogin(false)}
          >
            <Alert
              variant="filled"
              onClose={() => setSnackBarLogin(false)}
              severity="success"
              sx={{ width: "100%", mb: 3 }}
            >
              Login Successful
            </Alert>
          </Snackbar>
          <Snackbar
            open={snackBarLogout}
            autoHideDuration={5000}
            onClose={() => setSnackBarLogout(false)}
          >
            <Alert
              variant="filled"
              onClose={() => setSnackBarLogout(false)}
              severity="warning"
              sx={{ width: "100%", mb: 3 }}
            >
              Logout Successful
            </Alert>
          </Snackbar>
        </Grid>
      )}
      <Dialog
        open={openLogOutConfirm}
        onClose={() => setOpenLogOutConfirm(false)}
      >
        <DialogContent>
          <DialogContentText>Do you Really Want To Log Out?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setOpenLogOutConfirm(false)}>
            Cancel
          </Button>
          <Button onClick={handleLogout} color="error">
            Log Out
          </Button>
        </DialogActions>
      </Dialog>

      <SignInDialogue
        openLogin={openLogin}
        setOpenLogin={setOpenLogin}
        setOpenRegister={setOpenRegister}
        setOpen={setOpen}
      />
      <SignUpDialogue
        openRegister={openRegister}
        setOpenLogin={setOpenLogin}
        setOpenRegister={setOpenRegister}
        setOpen={setOpen}
      />
    </>
  );
}
