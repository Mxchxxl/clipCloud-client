import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = initialState;
    },
    test: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { updateUser, logOut, test } = userSlice.actions;

export default userSlice.reducer;
