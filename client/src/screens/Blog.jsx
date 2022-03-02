import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import SideBar from "../components/body/SideBar";
import generateWord from "../hooks/GenerateRandomWord";

export default function Blog() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("xl"));
  return (
    <>
      <Typography gutterBottom variant="h3" align="center">
        Blog Posts
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={10} xl={9}>
          <Grid container spacing={2} flexDirection="column">
            {[...Array(4)].map((x, i) => (
              <Grid item>
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
                    <Link href={`/single-post/${i}`} underline="none">
                      <Button variant="outlined" color="secondary" size="small">
                        Read More
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item md={0} xl={2}>
          {matches && <SideBar />}
        </Grid>
      </Grid>
    </>
  );
}
