import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async Functions
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

export const loginUser = createAsyncThunk("user/login", async (data) => {
  const res = await axios.post("/api/auth/login", data);
  if (res.data.username) {
    localStorage.setItem("loginInfo", JSON.stringify(res.data));
  }
  return res.data;
});

export const updateUser = createAsyncThunk("user/updateUser", async (data) => {
  const { _id } = JSON.parse(localStorage.getItem("loginInfo"));
  const res = await axios.put(`/api/user/${_id}`, data);
  if (res.data.username) {
    localStorage.removeItem("loginInfo");
    localStorage.setItem("loginInfo", JSON.stringify(res.data));
  }
  return res.data;
});

export const checkPass = createAsyncThunk("user/checkPass", async (data) => {
  const { _id } = JSON.parse(localStorage.getItem("loginInfo"));
  const res = await axios.post(`/api/auth/check-pass/${_id}`, data);
  return res.data.passwordMatched;
});

export const profilePicUpdate = createAsyncThunk(
  "user/proPicUpdate",
  async (data) => {
    const res = await axios.post("/api/uploads/userPP", data);
    return res.data;
  }
);

export const getAllUser = createAsyncThunk("user/GetAllUser", async () => {
  const res = await axios.get("/api/user/");
  return res.data;
});

export const getUserById = createAsyncThunk(
  "user/GetUserByID",
  async (data) => {
    const res = await axios.get(`/api/user/${data}`);
    return res.data;
  }
);
const initialState = {
  regData: {},
  loginData: {},
  pending: false,
  error: false,
  updatedData: {},
  passCheckData: {},
  proPicData: {},
  allUser: [],
  singleUser: {},
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.loginData = initialState.loginData;
      state.regData = initialState.regData;
      state.status = initialState.status;
    },
    refreshProPicData: (state) => {
      state.proPicData = initialState.proPicData;
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.regData = action.payload;
      state.pending = false;
    },
    [registerUser.rejected]: (state) => {
      state.error = true;
      state.pending = false;
    },
    [loginUser.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loginData = action.payload;
      state.pending = false;
    },
    [loginUser.rejected]: (state) => {
      state.error = true;
      state.pending = false;
    },
    [updateUser.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.updatedData = action.payload;
      state.pending = false;
    },
    [updateUser.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
    [checkPass.pending]: (state) => {
      state.pending = false;
      state.error = false;
    },
    [checkPass.fulfilled]: (state, action) => {
      state.passCheckData = action.payload;
      state.pending = false;
    },
    [checkPass.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
    [profilePicUpdate.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [profilePicUpdate.fulfilled]: (state, action) => {
      state.proPicData = action.payload;
      state.pending = false;
    },
    [profilePicUpdate.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
    [getAllUser.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getAllUser.fulfilled]: (state, action) => {
      state.allUser = action.payload;
      state.pending = false;
    },
    [getAllUser.rejected]: (state) => {
      state.error = true;
      state.pending = false;
    },
    [getUserById.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getUserById.fulfilled]: (state, action) => {
      state.singleUser = action.payload;
      state.pending = false;
    },
    [getUserById.rejected]: (state) => {
      state.error = true;
      state.pending = false;
    },
  },
});

export const { logout, refreshProPicData } = userSlice.actions;
export default userSlice.reducer;
