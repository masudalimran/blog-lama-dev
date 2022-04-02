import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { PF } from "../publicFolder";
export default function AboutUs() {
  return (
    <>
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography
            gutterBottom
            variant="h1"
            align="center"
            sx={{ fontSize: { xs: "1.57em", lg: "2.17em" } }}
          >
            Goal of this website
          </Typography>
        </Grid>
        <Grid item lg={4}>
          <Typography gutterBottom variant="subtitle2" align="center">
            This is a blog post website where you can express your self without
            any restriction.
          </Typography>
        </Grid>
        <Typography
          gutterBottom
          variant="h1"
          align="center"
          sx={{ fontSize: { xs: "1.57em", lg: "2.17em" } }}
        >
          Developers & Admins
        </Typography>
      </Grid>

      <Grid
        container
        justifyContent="center"
        spacing={5}
        sx={{ minHeight: "90vh" }}
      >
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="340"
              image={PF + "admin/imon.jpg"}
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="subtitle1" component="div">
                - MASUD AL IMRAN
              </Typography>
              <Typography
                gutterBottom
                variant="subtitle2"
                component="div"
                color="error"
              >
                WEB DEVELOPER
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Developed and maintain this website
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="340"
              image={PF + "admin/saif.jpg"}
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="subtitle1" component="div">
                - SAIFUL ISLAM
              </Typography>
              <Typography
                gutterBottom
                variant="subtitle2"
                component="div"
                color="error"
              >
                Content Writer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Create & manage content on this website
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="340"
              image={PF + "admin/said.jpg"}
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="subtitle1" component="div">
                - SAIDUL ISLAM
              </Typography>
              <Typography
                gutterBottom
                variant="subtitle2"
                component="div"
                color="error"
              >
                Admin & Moderator
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Maintains quality of content and website
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="340"
              image={PF + "admin/arafat.jpeg"}
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="subtitle1" component="div">
                - YASIR ARAFAT
              </Typography>
              <Typography
                gutterBottom
                variant="subtitle2"
                component="div"
                color="error"
              >
                Content Writer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Create & manage content on this website
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
