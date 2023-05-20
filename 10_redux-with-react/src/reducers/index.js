/* Reducers */
//take some existing data and some action, and modify and return that data based upon the context of the action

import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Senjutsu", duration: "8:20" },
    { title: "Days of Future Past", duration: "4:04" },
    { title: "The Time Machine", duration: "7:09" },
    { title: "Lost in a Lost World", duration: "9:32" },
  ];
};

const favouriteSongReducer = () => {
  return "Senjutsu";
};

const selectedSongReducer = (selectedSong = null, action) => {
  // Reducer cares about the action -> return passed song as payload
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  // Reducer doesn't care about the action -> return currently selected song
  return selectedSong;
};

// export set of combined reducers
export default combineReducers({
  songs: songsReducer,
  favoriteTitle: favouriteSongReducer,
  selectedSong: selectedSongReducer,
});
