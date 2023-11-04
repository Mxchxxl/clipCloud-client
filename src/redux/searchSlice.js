import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  results: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      state.text = action.payload;
    },
    updateResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { updateResults, updateSearch } = searchSlice.actions;

export default searchSlice.reducer;
