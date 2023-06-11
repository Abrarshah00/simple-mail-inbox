import { createSlice } from "@reduxjs/toolkit";

export const filterBySlice = createSlice({
  name: "filterBy",
  initialState: "",
  reducers: {
    updateFilterBy: (state, action) => {
      return action.payload.title;
    },
  },
});

export const { updateFilterBy } = filterBySlice.actions;

export default filterBySlice.reducer;
