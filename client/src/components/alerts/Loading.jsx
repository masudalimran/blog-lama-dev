import { Typography, Backdrop, CircularProgress } from "@mui/material";

export default function Loading({ color }) {
  return (
    <Backdrop
      sx={{
        color: color || "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={true}
    >
      <Typography variant="subtitle1">Please Wait... </Typography>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
