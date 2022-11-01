import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../SliceRedux/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
