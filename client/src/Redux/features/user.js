import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (data) => {
    const res = await axios.post("/api/auth/register", data);
    if (res.data.username) {
      localStorage.setItem("loginInfo", JSON.stringify(res.data));
    }
    return res.data;
  }
);

export const updateUser = createAsyncThunk("user/updateUser", async (data) => {
  const { _id } = JSON.parse(localStorage.getItem("loginInfo"));
  const res = await axios.put(`/api/user/${_id}`, data);
  if (res.data.username) {
    localStorage.removeItem("loginInfo");
    localStorage.setItem("loginInfo", JSON.stringify(res.data));
  }
  return res.data;
});
export const loginUser = createAsyncThunk("user/login", async (data) => {
  const res = await axios.post("/api/auth/login", data);
  if (res.data.username) {
    localStorage.setItem("loginInfo", JSON.stringify(res.data));
  }
  return res.data;
});

const initialState = {
  data: {},
  pending: false,
  error: false,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = initialState.data;
      state.status = initialState.status;
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.pending = false;
    },
    [registerUser.rejected]: (state) => {
      state.error = true;
      state.pending = false;
    },
    [loginUser.pending]: (state) => {
      state.pending = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.pending = false;
    },
    [loginUser.rejected]: (state) => {
      state.error = true;
      state.pending = false;
    },
    [updateUser.pending]: (state) => {
      state.status = "loading";
    },
    [updateUser.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "success";
      state.error = null;
    },
    [updateUser.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = "error";
    },
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
