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
  Snackbar,
  Typography,
  useMediaQuery,
  useTheme,
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

  const handleBack = () => {
    navigate(-1);
  };

  // State
  const [createdDistance, setCreatedDistance] = useState("");
  const [confirmPostDelete, setConfirmPostDelete] = useState(false);
  const [deletePostSnackBar, setDeletePostSnackBar] = useState(false);

  // Store
  // TODO post
  const { pending, error, singlePost, deletedPost } = useSelector(
    (state) => state.post
  );
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
            <Grid item xs={11} lg={10}>
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
                      <IconButton aria-label="edit" title="Edit Post">
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
                  <Typography variant="body2" component="div" color="primary">
                    Author: {singleUser && singleUser.username}
                  </Typography>
                  <Typography variant="body2" component="div" color="primary">
                    Category: {singleCat && singleCat.catName}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    component="div"
                    color="error"
                  >
                    {createdDistance}
                  </Typography>
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
            <Grid item xs={0} lg={2}>
              {matches && <SideBar />}
            </Grid>
          </Grid>
        </>
      )}
      <Dialog
        open={confirmPostDelete}
        onClose={() => setConfirmPostDelete(false)}
      >
        <DialogContent>
          <DialogContentText>
            Do you Really Want To Delete This Posts?
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
      <Snackbar
        open={deletePostSnackBar}
        autoHideDuration={5000}
        onClose={() => setDeletePostSnackBar(false)}
      >
        <Alert
          variant="filled"
          onClose={() => setDeletePostSnackBar(false)}
          severity="warning"
          sx={{ width: "100%", mb: 3 }}
        >
          {deletedPost.message}
        </Alert>
      </Snackbar>
    </>
  );
}
