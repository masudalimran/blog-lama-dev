import Typography from "@mui/material/Typography";
import {
  Button,
  Card,
  Grid,
  CardActions,
  CardContent,
  Divider,
  Link,
  Alert,
} from "@mui/material";
import generateWord from "../../hooks/GenerateRandomWord";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../Redux/features/post";
import { PF } from "../../publicFolder";
import Loading from "../alerts/Loading";

export default function Posts() {
  // use Effect
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  // store
  const { pendingPosts, errorPosts, allPosts } = useSelector(
    (state) => state.post
  );

  return (
    <>
      {pendingPosts ? (
        <Loading />
      ) : errorPosts ? (
        <Alert severity="error">Something Went Wrong...</Alert>
      ) : (
        <>
          <Divider variant="middle" sx={{ backgroundColor: "red" }} />
          <Typography variant="h6" align="center">
            Posts ({allPosts ? allPosts.postCount : 0})
          </Typography>
          <Divider variant="middle" sx={{ mb: 1, backgroundColor: "red" }} />
          <Grid container spacing={4} justifyContent="center" sx={{ mb: 2 }}>
            {allPosts.posts &&
              allPosts.posts.map((x, i) => (
                <Grid item key={i}>
                  <Card sx={{ maxWidth: 345 }}>
                    <Link href={`/single-post/${x._id}`} underline="none">
                      <LazyLoadImage
                        effect="blur"
                        title={x.title}
                        alt={x.title}
                        src={
                          x.postPic
                            ? PF + "post/" + x.postPic
                            : PF + "00000no_231_image.jpg"
                        }
                        style={{
                          objectFit: "contain",
                          width: "100%",
                          height: "300px",
                        }}
                      />
                    </Link>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {x.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {x.shortDesc}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link href={`/single-post/${x._id}`} underline="none">
                        <Button variant="outlined" color="error" size="small">
                          Read More
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </>
      )}
    </>
  );
}
