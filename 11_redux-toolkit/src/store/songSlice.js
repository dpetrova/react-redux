import { createSlice } from "@reduxjs/toolkit";

export const songSlice = createSlice({
  name: "song",
  initialState: {
    songs: [
      { title: "Senjutsu", duration: "8:20" },
      { title: "Days of Future Past", duration: "4:04" },
      { title: "The Time Machine", duration: "7:09" },
      { title: "Lost in a Lost World", duration: "9:32" },
    ],
    favoriteTitle: "Senjutsu",
    selectedSong: null,
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    selectSong: (state, action) => {
      state.selectedSong = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectSong } = songSlice.actions;

export default songSlice.reducer;
