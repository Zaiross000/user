import { createSlice } from "@reduxjs/toolkit";

const show = createSlice({
  name: "button",
  initialState: false,
  reducers: {
    showButton: (state, action) => {
      state = action.payload;
    },
  },
});

export const { showButton } = show.actions;
export default show.reducer;
