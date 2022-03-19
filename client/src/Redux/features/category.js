import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async Functions
export const getAllCat = createAsyncThunk("cat/getAllCat", async () => {
  const res = await axios.get("/api/category/");
  return res.data;
});

export const createCat = createAsyncThunk("cat/createCat", async (data) => {
  const res = await axios.post("/api/category/", data);
  return res.data;
});

const initialState = {
  allCat: [],
  pending: false,
  error: false,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllCat.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getAllCat.fulfilled]: (state, action) => {
      state.pending = false;
      state.allCat = action.payload;
    },
    [getAllCat.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
    [createCat.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [createCat.fulfilled]: (state) => {
      state.pending = false;
    },
    [createCat.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default categorySlice.reducer;
