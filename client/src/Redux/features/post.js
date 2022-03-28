import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const writePost = createAsyncThunk("post/writePost", async (data) => {
  const res = axios.post("/api/post", data);
  return res.data;
});

export const uploadBlogImg = createAsyncThunk(
  "post/uploadBlogImg",
  async (data) => {
    const res = await axios.post("/api/uploads/blogImg", data);
    return res.data;
  }
);

export const getAllPosts = createAsyncThunk("post/getAllPosts", async () => {
  const res = await axios.get("/api/post");
  return res.data;
});
const initialState = {
  pending: false,
  error: false,
  imgUploadResponse: {},
  allPosts: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [writePost.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [writePost.fulfilled]: (state) => {
      state.pending = false;
    },
    [writePost.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
    [uploadBlogImg.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [uploadBlogImg.fulfilled]: (state, action) => {
      state.pending = false;
      state.imgUploadResponse = action.payload;
    },
    [uploadBlogImg.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
    [getAllPosts.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getAllPosts.fulfilled]: (state, action) => {
      state.pending = false;
      state.allPosts = action.payload;
    },
    [getAllPosts.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
