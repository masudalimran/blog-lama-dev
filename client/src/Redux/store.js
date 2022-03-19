import { configureStore } from "@reduxjs/toolkit";
import user from "./features/user";
import category from "./features/category";
import post from "./features/post";
const store = configureStore({
  reducer: {
    user,
    post,
    category,
  },
});

export default store;
