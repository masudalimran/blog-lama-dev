import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import generateWord from "../hooks/GenerateRandomWord";

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
            variant="h3"
            align="center"
            sx={{ fontSize: { xs: "1.57em", lg: "2.17em" } }}
          >
            We are a team of Expert Web Developers
          </Typography>
        </Grid>
        <Grid item lg={4}>
          <Typography gutterBottom variant="subtitle2" align="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            itaque natus ab maiores incidunt veritatis, obcaecati ratione
            doloremque, repudiandae cupiditate quia asperiores culpa illo ipsum
            accusamus vel reprehenderit aliquid ea quam, pariatur expedita
            ducimus nihil minima. Quidem quod tenetur officia a dicta laboriosam
            id,
          </Typography>
        </Grid>
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
              image="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1567146736-headshot-1.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="h3" component="div">
                - {generateWord(8)}
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
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="340"
              image="https://www.patriotsoftware.com/wp-content/uploads/2019/04/examples-requirements-statutory-employees.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="h3" component="div">
                - {generateWord(8)}
              </Typography>
              <Typography
                gutterBottom
                variant="subtitle2"
                component="div"
                color="error"
              >
                Graphics Designer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="340"
              image="https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-797-1024x683.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="h3" component="div">
                - {generateWord(8)}
              </Typography>
              <Typography
                gutterBottom
                variant="subtitle2"
                component="div"
                color="error"
              >
                PhotoShop Expert
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="340"
              image="https://media.istockphoto.com/photos/positivity-produces-success-picture-id1132793417?k=20&m=1132793417&s=612x612&w=0&h=ruIMpiiHm32UXtaLGS9NHkMWvNPCjOBUN9WPYQgRK_Y="
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="h3" component="div">
                - {generateWord(8)}
              </Typography>
              <Typography
                gutterBottom
                variant="subtitle2"
                component="div"
                color="error"
              >
                PhotoShop Expert
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
