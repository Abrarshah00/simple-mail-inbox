import { createSlice } from "@reduxjs/toolkit";

export const selectedTagSlice = createSlice({
  name: "selectedTag",
  initialState: "Inbox",
  reducers: {
    updateSelectedTag: (state, action) => {
      return action.payload.title;
    },
  },
});

export const { updateSelectedTag } = selectedTagSlice.actions;

export default selectedTagSlice.reducer;
