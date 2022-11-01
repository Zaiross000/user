import { createSlice } from "@reduxjs/toolkit";

const getUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : "";

const user = createSlice({
  name: "user",
  initialState: getUser,
  reducers: {
    changeUser: (state, action) => {
      state = action.payload;
    },
    clear: (state, action) => {
      state = action.payload;
    },
  },
});

export const { changeUser, clear } = user.actions;
export default user.reducer;
