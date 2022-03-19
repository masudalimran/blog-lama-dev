import {
  Alert,
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";

import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useContext, useEffect, useState } from "react";
import DataContext from "../Context/DataContext";
import { getAllCat } from "../Redux/features/category";
import CreateCategory from "../components/body/category/CreateCategory";
import Loading from "../components/alerts/Loading";
import { uploadBlogImg, writePost } from "../Redux/features/post";
import { PF } from "../publicFolder";

export default function Write() {
  const dispatch = useDispatch();
  // States
  const [blogImage, setBlogImage] = useState("");
  const [checkBlogImage, setCheckBlogImage] = useState(true);
  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [category, setCategory] = useState("");
  const [blog, setBlog] = useState("");
  // create Category
  const [catDialogueOpen, setCatDialogueOpen] = useState(false);

  // Use Effect
  useEffect(() => {
    dispatch(getAllCat());
  }, []);

  // Store
  const { allCat, pending, error } = useSelector((state) => state.category);
  const { pendingPost, errorPost } = useSelector((state) => state.post);

  const localData = JSON.parse(localStorage.getItem("loginInfo"));

  const { setOpenLogin } = useContext(DataContext);
  const handlePublishBlog = (e) => {
    e.preventDefault();
    if (!localStorage.getItem("loginInfo")) {
      setOpenLogin(true);
    } else {
      let createdPost = {
        title,
        shortDesc,
        userId: localData._id,
        fullPost: blog,
      };
      if (blogImage !== "") {
        const data = new FormData();
        const ext = blogImage.name.split(".");
        const filename =
          Date.now() +
          "-" +
          localData.username.replace(/\s+/g, "") +
          "-" +
          title.replace(/\s+/g, "") +
          "-blog-img." +
          ext.slice(-1);
        data.append("name", filename);
        data.append("blogImg", blogImage);
        createdPost.postPic = filename;
        dispatch(uploadBlogImg(data));
        setCheckBlogImage(false);
        console.log(createdPost);
        dispatch(writePost(createdPost));
      } else setCheckBlogImage(true);
    }
  };
  return (
    <>
      {/* {pending || pendingPost ? (
        <Loading />
      ) : error || errorPost ? (
        <Alert severity="error">Something Went Wrong...</Alert>
      ) : (
        <> */}
      <CreateCategory
        catDialogueOpen={catDialogueOpen}
        setCatDialogueOpen={setCatDialogueOpen}
      />
      <Grid container justifyContent="center">
        <Grid item lg={6} xs={10}>
          <Box component="form" onSubmit={handlePublishBlog}>
            <Grid
              container
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <img
                  src={
                    blogImage !== ""
                      ? URL.createObjectURL(blogImage)
                      : PF + "00000no_231_image.jpg"
                  }
                  alt="Halloween party"
                  width="100%"
                  height="150px"
                  style={{ objectFit: "cover" }}
                />
              </Grid>
              <Grid item position="absolute">
                <label htmlFor="icon-button-file">
                  <Input
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    sx={{ display: "none" }}
                    onChange={(e) => setBlogImage(e.target.files[0])}
                  />
                  <IconButton
                    color="primary"
                    aria-label="upload-picture"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
              </Grid>
            </Grid>
            <Grid item>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Title"
                autoComplete="title"
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Short Description"
                autoComplete="short-description"
                onChange={(e) => setShortDesc(e.target.value)}
              />
            </Grid>
            <Grid item>
              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={12} md={10}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      required
                      value={category}
                      label="Category"
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {allCat.map((x, i) => (
                        <MenuItem key={i} value={x._id}>
                          {x.catName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => setCatDialogueOpen(true)}
                  >
                    Add Category
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Blog Details"
                minRows="8"
                multiline={true}
                autoComplete="details"
                onChange={(e) => setBlog(e.target.value)}
              />
            </Grid>
            {!checkBlogImage && (
              <Grid item>
                <Alert severity="error">Please add an image for blog</Alert>
              </Grid>
            )}
            <Grid item>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Publish
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Grid>{" "}
    </>
    //   )}
    // </>
  );
}
