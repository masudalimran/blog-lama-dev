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
} from "@mui/material";

import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);
  return (
    <>
      <Grid container justifyContent="flex-end">
        <Grid item lg={10}>
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
        <Grid item lg={2}>
          <IconButton aria-label="profile-avatar" size="small">
            <Avatar
              alt="Profile"
              src="https://mui.com//static/images/avatar/1.jpg"
              sx={{ width: 28, height: 28 }}
              onClick={() => setOpen(true)}
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
              <Link href="profile" underline="none" sx={{ color: "black" }}>
                <ListItemButton>
                  <ListItemIcon>
                    <AccountCircleIcon size="small" />
                  </ListItemIcon>
                  <ListItemText primary="View Profile" />
                </ListItemButton>
              </Link>
              <Link href="profile" underline="none" sx={{ color: "black" }}>
                <ListItemButton>
                  <ListItemIcon>
                    <ManageAccountsIcon size="small" />
                  </ListItemIcon>
                  <ListItemText primary="Edit Profile" />
                </ListItemButton>
              </Link>
              <Link href="profile" underline="none" sx={{ color: "black" }}>
                <ListItemButton>
                  <ListItemIcon>
                    <LogoutIcon size="small" />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </Link>
            </List>
          </Dialog>
        </Grid>
      </Grid>
    </>
  );
}
