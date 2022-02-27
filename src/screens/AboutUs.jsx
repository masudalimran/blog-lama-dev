import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import generateWord from "../hooks/GenerateRandomWord";

export default function AboutUs() {
  return (
    <>
      <Box sx={{ mx: 40 }}>
        <Typography gutterBottom variant="h3" align="center">
          We are a team of Expert Web Developers
        </Typography>
        <Typography gutterBottom variant="subtitle2" align="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla itaque
          natus ab maiores incidunt veritatis, obcaecati ratione doloremque,
          repudiandae cupiditate quia asperiores culpa illo ipsum accusamus vel
          reprehenderit aliquid ea quam, pariatur expedita ducimus nihil minima.
          Quidem quod tenetur officia a dicta laboriosam id,
        </Typography>
      </Box>
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
      </Grid>
    </>
  );
}
