import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import SideBar from "../components/body/SideBar";
import generateWord from "../hooks/GenerateRandomWord";

export default function Blog() {
  return (
    <>
      <Typography gutterBottom variant="h3" align="center">
        Blog Posts
      </Typography>
      <Grid container spacing={2}>
        <Grid item lg={10}>
          <Grid container spacing={2} flexDirection="column">
            {[...Array(12)].map((x, i) => (
              <Grid item sx={{ ml: 2 }}>
                <Card>
                  <CardMedia
                    component="img"
                    height="300"
                    image={`https://picsum.photos/1500/600?random=${i}`}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="h3" component="div">
                      {generateWord(8)}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      component="div"
                      color="error"
                    >
                      {generateWord(8)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link href="single-post" underline="none">
                      <Button variant="outlined" color="secondary" size="small">
                        Learn More
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item lg={2}>
          <SideBar />
        </Grid>
      </Grid>
    </>
  );
}
