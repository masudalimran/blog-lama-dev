import {
  Alert,
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
import React, { useEffect } from "react";
import SideBar from "../components/body/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../Redux/features/post";
import Loading from "../components/alerts/Loading";
import { PF } from "../publicFolder";
import { getAllCat, getCatById } from "../Redux/features/category";
import { getAllUser } from "../Redux/features/user";

export default function Blog() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("xl"));

  // Store
  // post
  const { allPosts, pendingPosts, errorPosts } = useSelector(
    (state) => state.post
  );
  // Category
  const { allCat, pending, error } = useSelector((state) => state.category);
  // User
  const {
    pending: pendingUser,
    error: errorUser,
    allUser,
  } = useSelector((state) => state.user);

  // Use Effect
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(getAllCat());
    dispatch(getAllUser());
  }, []);

  return (
    <>
      {pendingPosts || pending || pendingUser ? (
        <Loading />
      ) : errorPosts || error || errorUser ? (
        <Grid container alignItems="center" justifyContent="center">
          <Grid item>
            <Alert severity="error">Something Went Wrong...</Alert>
          </Grid>
        </Grid>
      ) : (
        allPosts.posts && (
          <>
            <Typography gutterBottom variant="h3" align="center">
              Blog Posts ({allPosts.postCount || ""})
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={10} xl={9}>
                <Grid container spacing={2} flexDirection="column">
                  {allPosts.posts.map((x, i) => (
                    <Grid item key={i}>
                      <Card>
                        {/* Blog Image */}
                        <CardMedia
                          component="img"
                          height="200"
                          image={
                            x.postPic
                              ? PF + "post/" + x.postPic
                              : PF + "00000no_231_image.jpg"
                          }
                          alt={x.title + "blogImage"}
                          title={x.title}
                          sx={{ maxHeight: "200px", maxWidth: "300px" }}
                        />
                        <CardContent>
                          {/* Title */}
                          <Typography variant="h5" component="div">
                            {x.title}
                          </Typography>
                          <Grid container>
                            {/* Author */}
                            <Grid item xs={12} md={2}>
                              <Button
                                variant="text"
                                color="secondary"
                                size="small"
                              >
                                Author:{" "}
                                {allUser.map((y) => {
                                  if (y._id === x.userId) return y.username;
                                })}
                              </Button>
                            </Grid>
                            {/* Category */}
                            <Grid item xs={12} md={2}>
                              <Button
                                variant="text"
                                color="primary"
                                size="small"
                              >
                                Category:{" "}
                                {allCat.map((y) => {
                                  if (y._id === x.categoryId) return y.catName;
                                })}
                              </Button>
                            </Grid>
                          </Grid>
                          {/* Short Description */}
                          <Typography
                            gutterBottom
                            variant="subtitle2"
                            component="div"
                            color="error"
                          >
                            {x.shortDesc}
                          </Typography>
                          {/* Long Description */}
                          <Typography variant="body2" color="text.secondary">
                            {x.fullPost}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Link href={`/single-post/1`} underline="none">
                            <Button
                              variant="outlined"
                              color="secondary"
                              size="small"
                            >
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
        )
      )}
    </>
  );
}
