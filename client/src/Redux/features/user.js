import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (data) => {
    try {
      const res = await axios.post("/api/auth/register", data);
      if (res.data.username) {
        localStorage.setItem("loginInfo", JSON.stringify(res.data));
      }
      // console.log(res.data);
      return res.data;
    } catch (error) {
      return { message: error.message };
    }
  }
);

export const updateUser = createAsyncThunk("user/updateUser", async (data) => {
  const { _id } = JSON.parse(localStorage.getItem("loginInfo"));
  try {
    const res = await axios.put(`/api/user/${_id}`, data);
    if (res.data.username) {
      localStorage.removeItem("loginInfo");
      localStorage.setItem("loginInfo", JSON.stringify(res.data));
    }
    return res.data;
  } catch (error) {
    return error.message;
  }
});
export const loginUser = createAsyncThunk("user/login", async (data) => {
  try {
    const res = await axios.post("/api/auth/login", data);
    if (res.data.username) {
      localStorage.setItem("loginInfo", JSON.stringify(res.data));
    }
    return res.data;
  } catch (error) {
    return { message: error.message };
  }
});

const initialState = {
  data: {},
  status: null,
  error: null,
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
      state.status = "loading";
    },
    [registerUser.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "success";
      state.error = null;
    },
    [registerUser.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = "error";
    },
    [loginUser.pending]: (state) => {
      state.status = "loading";
    },
    [loginUser.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "success";
      state.error = null;
    },
    [loginUser.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = "error";
    },
    [updateUser.pending]: (state) => {
      state.status = "loading";
    },
    [updateUser.fulfilled]: (state, action) => {
      console.log("fullfilled");
      state.data = action.payload;
      state.status = "success";
      state.error = null;
    },
    [updateUser.rejected]: (state, action) => {
      console.log("rejected");
      state.error = action.payload;
      state.status = "error";
    },
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
