import {
  Grid,
  Typography,
  Link,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TopBarMenuMobile from "./TopBarMenuMobile";
import { useState } from "react";

const TopMenu = {
  color: "gray",
  cursor: "pointer",
  fontFamily: "Josefin Sans",
  "&:hover": { color: "navy" },
};

export default function TopBarMenu() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  const handleDrawer = () => setOpenDrawer(true);
  return (
    <>
      {matches ? (
        <Grid
          container
          justifyContent="center"
          spacing={2}
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
      ) : (
        <>
          <IconButton onClick={handleDrawer} aria-label="menu-button">
            <MenuIcon />
          </IconButton>
          <TopBarMenuMobile
            openDrawer={openDrawer}
            setOpenDrawer={setOpenDrawer}
          />
        </>
      )}
    </>
  );
}
