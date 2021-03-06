import { Grid, IconButton, Link } from "@mui/material";
// Icons =====================================================================================================================================================================
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function SocialMedia({ user }) {
  const localData = JSON.parse(localStorage.getItem("loginInfo"));

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item sm={1} xs={2}>
          <Link
            href={
              user
                ? localData.socialMedia[0]
                : "https://www.facebook.com/masudalimran93/"
            }
            target="_blank"
          >
            <IconButton aria-label="facebook" size="small">
              <FacebookIcon fontSize="small" sx={{ color: "navy" }} />
            </IconButton>
          </Link>
        </Grid>
        <Grid item sm={1} xs={2}>
          <Link
            href={
              user
                ? localData.socialMedia[1]
                : "https://twitter.com/masudalimran1"
            }
            target="_blank"
          >
            <IconButton aria-label="facebook" size="small">
              <TwitterIcon fontSize="small" color="info" />
            </IconButton>
          </Link>
        </Grid>
        <Grid item sm={1} xs={2}>
          <Link
            href={
              user
                ? localData.socialMedia[2]
                : "https://github.com/masudalimran"
            }
            target="_blank"
          >
            <IconButton aria-label="facebook" size="small">
              <GitHubIcon fontSize="small" sx={{ color: "black" }} />
            </IconButton>
          </Link>
        </Grid>
        <Grid item sm={1} xs={2}>
          <Link
            href={
              user
                ? localData.socialMedia[3]
                : "https://www.instagram.com/elonmusk/?hl=en"
            }
            target="_blank"
          >
            <IconButton aria-label="facebook" size="small">
              <InstagramIcon fontSize="small" sx={{ color: "red" }} />
            </IconButton>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
