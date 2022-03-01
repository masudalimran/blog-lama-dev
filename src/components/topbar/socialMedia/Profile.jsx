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
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import SignInDialogue from "../../../screens/User/SignInDialogue";
import SignUpDialogue from "../../../screens/User/SignUpDialogue";

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
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("xl"));
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const handleClickOpen = () => {
    setOpenLogin(true);
  };

  return (
    <>
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
              >
                <Link href="/profile" underline="none" sx={{ color: "black" }}>
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
                {/* <Link href="#" underline="none" sx={{ color: "black" }}> */}
                <ListItemButton onClick={() => setLogStatus(false)}>
                  <ListItemIcon>
                    <LogoutIcon size="small" />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItemButton>
                {/* </Link> */}
              </List>
            </Dialog>
          </Grid>
        ) : (
          <>
            {matches ? (
              <Grid item sx={{ mr: 2 }}>
                <Typography
                  variant="h6"
                  onClick={handleClickOpen}
                  sx={{
                    "&:hover": {
                      color: "red",
                    },
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Login / Register
                </Typography>
              </Grid>
            ) : (
              <Grid item>
                <IconButton
                  aria-label="login-register"
                  onClick={handleClickOpen}
                >
                  <PersonIcon sx={{ color: "black" }} />
                </IconButton>
              </Grid>
            )}
          </>
        )}
      </Grid>

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
