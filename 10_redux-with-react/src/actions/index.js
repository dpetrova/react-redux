/* Action Creators */
//functions that create and return actions (plain JS objects that have type and payload properties)

//named export -> allows to export many different functions from a single file
export const selectSong = (song) => {
  // return an Action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};

//default export
export default selectSong;
