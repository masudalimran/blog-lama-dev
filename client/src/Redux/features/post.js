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

export const updatePost = createAsyncThunk("post/updatePost", async (data) => {
  const { id, data: postData } = data;
  const res = await axios.put(`/api/post/${id}`, postData);
  return res.data;
});

export const getAllPosts = createAsyncThunk("post/getAllPosts", async () => {
  const res = await axios.get("/api/post");
  return res.data;
});

export const getSinglePost = createAsyncThunk(
  "post/getSinglePost",
  async (data) => {
    const res = await axios.get(`/api/post/${data}`);
    return res.data;
  }
);

export const deleteSinglePost = createAsyncThunk(
  "post/deleteSinglePost",
  async (data) => {
    const res = await axios.delete(`/api/post/${data.id}/${data.userId}`);
    return res.data;
  }
);

const initialState = {
  pending: false,
  error: false,
  imgUploadResponse: {},
  allPosts: [],
  singlePost: {},
  deletedPost: {},
  updatedPost: {},
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
    [updatePost.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updatePost.fulfilled]: (state, action) => {
      state.pending = false;
      state.updatedPost = action.payload;
    },
    [updatePost.rejected]: (state) => {
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
    [getSinglePost.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getSinglePost.fulfilled]: (state, action) => {
      state.pending = false;
      state.singlePost = action.payload;
    },
    [getSinglePost.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
    [deleteSinglePost.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [deleteSinglePost.fulfilled]: (state, action) => {
      state.pending = false;
      state.deletedPost = action.payload;
    },
    [deleteSinglePost.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
