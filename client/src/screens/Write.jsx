import {
  Alert,
  Autocomplete,
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
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
  const navigate = useNavigate();

  const localData = JSON.parse(localStorage.getItem("loginInfo"));

  // Syncing form data
  let getTempPostString;
  const getLocalTempPost = JSON.parse(localStorage.getItem("tempPostString"));
  if (getLocalTempPost === null || getLocalTempPost === ":|::|::|:")
    getTempPostString = ["", "", "", ""];
  else getTempPostString = getLocalTempPost.split(":|:");

  // States
  const [blogImage, setBlogImage] = useState("");
  const [title, setTitle] = useState(getTempPostString[0] || "");
  const [shortDesc, setShortDesc] = useState(getTempPostString[1] || "");
  const [category, setCategory] = useState(getTempPostString[2] || "");
  const [blog, setBlog] = useState(getTempPostString[3] || "");
  // create Category
  const [catDialogueOpen, setCatDialogueOpen] = useState(false);
  const [allowSubmit, setAllowSubmit] = useState(false);

  // Use Effect
  useEffect(() => {
    dispatch(getAllCat());
  }, [dispatch]);

  useEffect(() => {
    if (!localData) {
      navigate("/");
    }
  }, [navigate, localData]);

  useEffect(() => {
    if (
      title !== "" &&
      shortDesc !== "" &&
      category !== "" &&
      blog !== "" &&
      blogImage !== ""
    ) {
      setAllowSubmit(true);
    } else {
      let tempPostString = title
        .concat(":|:", shortDesc)
        .concat(":|:", category)
        .concat(":|:", blog);
      localStorage.setItem("tempPostString", JSON.stringify(tempPostString));
      setAllowSubmit(false);
    }
  }, [title, shortDesc, category, blog, blogImage]);

  // Store
  const { allCat, pending, error } = useSelector((state) => state.category);
  const { pendingPost, errorPost } = useSelector((state) => state.post);

  // Data Context
  const { setOpenLogin } = useContext(DataContext);

  // Functions
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
        categoryId: category,
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
        dispatch(writePost(createdPost));
        localStorage.removeItem("tempPostString");
        navigate("/");
      }
    }
  };

  return (
    <>
      {pending || pendingPost ? (
        <Loading />
      ) : error || errorPost ? (
        <Alert severity="error">Something Went Wrong...</Alert>
      ) : (
        <>
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
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "150px",
                      }}
                    />
                    <Typography
                      variant="body2"
                      align="center"
                      color="secondary"
                    >
                      Recommended: 🖼️(1200x600)
                    </Typography>
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
                    value={title}
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
                    value={shortDesc}
                    onChange={(e) => setShortDesc(e.target.value)}
                  />
                </Grid>
                <Grid item>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={12} md={10}>
                      <FormControl fullWidth>
                        <Autocomplete
                          freeSolo
                          disableClearable
                          options={
                            allCat && allCat.map((option) => option.catName)
                          }
                          onChange={(e, value) => {
                            allCat &&
                              allCat.map((x) => {
                                if (x.catName === value) setCategory(x._id);
                                return 0;
                              });
                          }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              InputProps={{
                                ...params.InputProps,
                                type: "search",
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <SearchIcon />
                                  </InputAdornment>
                                ),
                              }}
                              variant="outlined"
                              size="small"
                            />
                          )}
                        />
                        {/* <InputLabel id="demo-simple-select-label">
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
                        </Select> */}
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
                    value={blog}
                    minRows="8"
                    multiline={true}
                    autoComplete="details"
                    error={blog.length > 1800 ? true : false}
                    inputProps={{
                      maxlength: 2000,
                    }}
                    helperText={
                      <Typography
                        align="right"
                        variant="body2"
                        color={blog.length > 1800 ? "error" : "primary"}
                      >
                        {blog.length}/2000
                      </Typography>
                    }
                    onChange={(e) => setBlog(e.target.value)}
                  />
                </Grid>
                <Grid item>
                  <Button
                    fullWidth
                    variant="contained"
                    color="warning"
                    onClick={() => {
                      window.location.reload();
                      localStorage.removeItem("tempPostString");
                    }}
                  >
                    Clear All
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={!allowSubmit}
                  >
                    Publish
                  </Button>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}
