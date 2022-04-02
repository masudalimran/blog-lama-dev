import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Snackbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "../components/body/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, getPostByCat } from "../Redux/features/post";
import Loading from "../components/alerts/Loading";
import { PF } from "../publicFolder";
import { getAllCat } from "../Redux/features/category";
import { getAllUser } from "../Redux/features/user";
import { useParams, useSearchParams } from "react-router-dom";

export default function BlogByCat() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("xl"));
  const matches2 = useMediaQuery(theme.breakpoints.up("sm"));

  // Check Login Status
  const localData = JSON.parse(localStorage.getItem("loginInfo"));

  // state
  const [deletePostSnackBar, setDeletePostSnackBar] = useState(false);
  // Store
  // Todo post
  const { postByCat, pendingPosts, errorPosts, deletedPost } = useSelector(
    (state) => state.post
  );
  // TODO Category
  const { allCat, pending, error } = useSelector((state) => state.category);
  // TODO User
  const {
    pending: pendingUser,
    error: errorUser,
    allUser,
  } = useSelector((state) => state.user);

  // Use Effect
  const [searchParams, setSearchParams] = useSearchParams();
  // const id = searchParams.get("category");
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    id && dispatch(getPostByCat(id));
    dispatch(getAllCat());
    dispatch(getAllUser());
  }, [dispatch, id]);
  useEffect(() => {
    if (deletedPost.message) setDeletePostSnackBar(true);
  }, [deletedPost]);

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
      ) : postByCat.posts && postByCat.posts.length > 0 ? (
        <>
          <Typography gutterBottom variant="h3" align="center">
            Category:{" "}
            {allCat.map((y) => {
              if (y._id === id) return y.catName;
              else return null;
            })}
            ({postByCat.postCount || ""})
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={localData ? 10 : 12} xl={localData ? 9 : 11}>
              <Grid container spacing={2} flexDirection="column">
                {postByCat.posts.map((x, i) => (
                  <Grid item key={i}>
                    <Card>
                      {/* Blog Image */}
                      <CardMedia
                        component="img"
                        image={
                          x.postPic
                            ? PF + "post/" + x.postPic
                            : PF + "00000no_231_image.jpg"
                        }
                        alt={x.title + "blogImage"}
                        title={x.title}
                        style={{
                          objectFit: matches2 ? "cover" : "contain",
                          objectPosition: "left",
                          width: "100%",
                          height: "300px",
                        }}
                      />
                      <CardContent>
                        {/* Title */}
                        <Typography variant="h5" component="div">
                          {x.title}
                        </Typography>
                        <Grid container sx={{ ml: -0.5 }}>
                          {/* Author */}
                          <Grid item xs={12} md={2}>
                            <Link
                              href={`/profile/${x.userId}`}
                              underline="none"
                            >
                              <Button
                                variant="text"
                                color="secondary"
                                size="small"
                              >
                                Author:{" "}
                                {allUser.map((y) => {
                                  if (y._id === x.userId) return y.username;
                                  else return null;
                                })}
                              </Button>
                            </Link>
                          </Grid>
                          {/* Category */}
                          <Grid item xs={12} md={2}>
                            <Button variant="text" color="primary" size="small">
                              Category:{" "}
                              {allCat.map((y) => {
                                if (y._id === x.categoryId) return y.catName;
                                else return null;
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
                        <Link href={`/single-post/${x._id}`} underline="none">
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
            {localData && (
              <Grid item md={0} xl={2}>
                {matches && <SideBar />}
              </Grid>
            )}
          </Grid>
        </>
      ) : (
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <Alert severity="warning" variant="outlined">
              No post to show
            </Alert>
          </Grid>
        </Grid>
      )}
      {/* Post message snackbar */}
      <Snackbar
        open={deletePostSnackBar}
        autoHideDuration={5000}
        onClose={() => setDeletePostSnackBar(false)}
      >
        <Alert
          variant="filled"
          onClose={() => setDeletePostSnackBar(false)}
          severity="error"
          sx={{ width: "100%", mb: 3 }}
        >
          {deletedPost.message}
        </Alert>
      </Snackbar>
    </>
  );
}
