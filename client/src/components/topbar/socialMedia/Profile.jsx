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
import { useContext, useEffect, useState } from "react";
import SignInDialogue from "../../../screens/User/SignInDialogue";
import SignUpDialogue from "../../../screens/User/SignUpDialogue";
import { useNavigate } from "react-router-dom";
import DataContext from "../../../Context/DataContext";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../Redux/features/user";
import Loading from "../../alerts/Loading";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];

export default function Profile({ logStatus, setLogStatus }) {
  // States
  const [open, setOpen] = useState(false);
  const { openLogin, setOpenLogin, openRegister, setOpenRegister } =
    useContext(DataContext);
  const [errorOpen, setErrorOpen] = useState(true);

  const [openLogOutConfirm, setOpenLogOutConfirm] = useState(false);
  const handleClickOpen = () => {
    setOpenLogin(true);
  };

  // Store
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.user);

  // Functions
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    setLogStatus(false);
    localStorage.removeItem("loginInfo");
    setOpenLogOutConfirm(false);
    navigate("/");
  };

  useEffect(() => {
    if (data.message) {
      setErrorOpen(true);
    }
  }, [data.message]);

  return (
    <>
      {status === "loading" ? (
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
          {logStatus === true ? (
            <Grid item lg={2}>
              <IconButton
                aria-label="profile-avatar"
                size="small"
                onClick={() => setOpen(true)}
              >
                <Avatar
                  alt="Profile"
                  src="https://mui.com//static/images/avatar/1.jpg"
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
                      data && data.username
                        ? data.username.split(" ", 1)
                        : "Guest"
                    } - ${
                      (data && data.email) || "Guest@example.com"
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
          {data.message && (
            <Snackbar
              open={errorOpen}
              autoHideDuration={5000}
              onClose={() => setErrorOpen(false)}
            >
              <Alert
                onClose={() => setErrorOpen(false)}
                severity="error"
                sx={{ width: "100%", mb: 3 }}
              >
                {data.message}
              </Alert>
            </Snackbar>
          )}
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
        setLogStatus={setLogStatus}
        setOpen={setOpen}
      />
      <SignUpDialogue
        openRegister={openRegister}
        setOpenLogin={setOpenLogin}
        setOpenRegister={setOpenRegister}
        setLogStatus={setLogStatus}
        setOpen={setOpen}
      />
    </>
  );
}
