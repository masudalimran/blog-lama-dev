import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (data) => {
    try {
      const response = await axios.post("/api/auth/register", data);
      return response.data;
    } catch (error) {
      return { message: error.message };
    }
  }
);
export const loginUser = createAsyncThunk("user/login", async (data) => {
  try {
    const res = await axios.post("/api/auth/login", data);
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
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
