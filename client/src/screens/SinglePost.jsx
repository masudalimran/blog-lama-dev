import {
  Alert,
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Divider,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
  Link,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SideBar from "../components/body/SideBar";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSinglePost, getSinglePost } from "../Redux/features/post";
import Loading from "../components/alerts/Loading";
import { PF } from "../publicFolder";
import { getCatById } from "../Redux/features/category";
import { getUserById } from "../Redux/features/user";
import formatDistanceStrict from "date-fns/formatDistance";

export default function SinglePost() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("xl"));
  const matches2 = useMediaQuery(theme.breakpoints.up("sm"));
  const navigate = useNavigate();

  // Check Login Status
  const localData = JSON.parse(localStorage.getItem("loginInfo"));

  const handleBack = () => {
    navigate(-1);
  };

  // State
  const [createdDistance, setCreatedDistance] = useState("");
  const [modifyDistance, setModifyDistance] = useState("");
  const [confirmPostDelete, setConfirmPostDelete] = useState(false);

  // Store
  // TODO post
  const { pending, error, singlePost } = useSelector((state) => state.post);
  // TODO user
  const {
    pending: pendingUser,
    error: errorUser,
    singleUser,
  } = useSelector((state) => state.user);
  // TODO category
  const {
    pending: pendingCat,
    error: errorCat,
    singleCat,
  } = useSelector((state) => state.category);

  // Use Effect
  const dispatch = useDispatch();
  const { id: postId } = useParams();
  // Todo Get Posts
  useEffect(() => {
    dispatch(getSinglePost(postId));
  }, [dispatch, postId]);
  // TODO get user name & category name
  useEffect(() => {
    if (singlePost._id) {
      dispatch(getUserById(singlePost.userId));
      dispatch(getCatById(singlePost.categoryId));
      setCreatedDistance(
        formatDistanceStrict(
          new Date(singlePost.createdAt),
          new Date(Date.now()),
          {
            addSuffix: true,
          }
        )
      );
      setModifyDistance(
        formatDistanceStrict(
          new Date(singlePost.updatedAt),
          new Date(Date.now()),
          {
            addSuffix: true,
          }
        )
      );
    }
  }, [singlePost, dispatch]);

  // Functions
  const handlePostDelete = () => {
    dispatch(
      deleteSinglePost({ id: singlePost._id, userId: singlePost.userId })
    );
    navigate("/blog");
  };

  return (
    <>
      {pending || pendingUser || pendingCat ? (
        <Loading />
      ) : error || errorUser || errorCat ? (
        <Grid container alignItems="center" justifyContent="center">
          <Grid item>
            <Alert severity="error">Something Went Wrong...</Alert>
          </Grid>
        </Grid>
      ) : (
        <>
          <Button
            variant="text"
            size="small"
            sx={{ m: 1 }}
            onClick={handleBack}
          >
            Back
          </Button>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ minHeight: "90vh" }}
          >
            <Grid item xs={localData ? 11 : 12} lg={localData ? 10 : 12}>
              <Card sx={{ ml: 1 }} variant="outlined">
                <CardMedia
                  component="img"
                  title={singlePost.title}
                  alt={singlePost.title}
                  image={
                    singlePost.postPic
                      ? PF + "post/" + singlePost.postPic
                      : PF + "00000no_231_image.jpg"
                  }
                  style={{
                    objectFit: matches2 ? "cover" : "contain",
                    width: "100%",
                    height: "300px",
                  }}
                />
                <CardContent>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Typography gutterBottom variant="h5" component="div">
                        {singlePost.title}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <IconButton
                        aria-label="edit"
                        title="Edit Post"
                        onClick={() => navigate(`/edit-post/${singlePost._id}`)}
                      >
                        <EditIcon color="primary" />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
                        title="Delete Post"
                        onClick={() => setConfirmPostDelete(true)}
                      >
                        <DeleteIcon color="error" />
                      </IconButton>
                    </Grid>
                  </Grid>
                  <Grid container flexDirection="column" sx={{ ml: -0.5 }}>
                    <Grid item>
                      <Link
                        href={`/profile/${singleUser._id}`}
                        underline="none"
                      >
                        <Button variant="text" color="primary" size="small">
                          Author: {singleUser && singleUser.username}
                        </Button>
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link
                        href={`/blog-by-cat/${singleCat._id}`}
                        underline="none"
                      >
                        <Button variant="text" color="primary" size="small">
                          Category: {singleCat && singleCat.catName}
                        </Button>
                      </Link>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Typography
                        gutterBottom
                        variant="subtitle2"
                        component="div"
                        color="secondary"
                      >
                        Created: {createdDistance}
                      </Typography>
                    </Grid>
                    {createdDistance !== modifyDistance && (
                      <Grid item>
                        <Typography
                          gutterBottom
                          variant="subtitle2"
                          component="div"
                          color="error"
                        >
                          Last modified: {modifyDistance}
                        </Typography>
                      </Grid>
                    )}
                  </Grid>
                  <Divider />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      ":first-letter": {
                        ml: 3,
                        fontSize: "30px",
                        fontWeight: "900",
                        color: "black",
                      },
                      lineHeight: "25px",
                    }}
                  >
                    {singlePost.fullPost}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {localData && (
              <Grid item xs={0} lg={2}>
                {matches && <SideBar />}
              </Grid>
            )}
          </Grid>
        </>
      )}
      <Dialog
        open={confirmPostDelete}
        onClose={() => setConfirmPostDelete(false)}
      >
        <DialogContent>
          <DialogContentText>
            Do you really want to delete this posts?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setConfirmPostDelete(false)}>
            Cancel
          </Button>
          <Button onClick={handlePostDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
