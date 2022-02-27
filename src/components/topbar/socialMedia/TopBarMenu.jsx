import { Grid, Typography, Link } from "@mui/material";

const TopMenu = {
  color: "gray",
  cursor: "pointer",
  fontFamily: "Josefin Sans",
  "&:hover": { color: "navy" },
};

export default function TopBarMenu() {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        spacing={6}
        component="div"
        sx={{
          textTransform: "uppercase",
        }}
      >
        <Grid item>
          <Link href="/" underline="none">
            <Typography variant="h6" sx={TopMenu}>
              Home
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/about-us" underline="none">
            <Typography variant="h6" sx={TopMenu}>
              About
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/contact" underline="none">
            <Typography variant="h6" sx={TopMenu}>
              Contact
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/blog" underline="none">
            <Typography variant="h6" sx={TopMenu}>
              Blog
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/write-post" underline="none">
            <Typography variant="h6" sx={TopMenu}>
              Write Blog
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
