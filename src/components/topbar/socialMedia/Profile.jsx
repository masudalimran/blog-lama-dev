import {
  Avatar,
  Grid,
  IconButton,
  Autocomplete,
  TextField,
} from "@mui/material";

import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

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
            />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}
