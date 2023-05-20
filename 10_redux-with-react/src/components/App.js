import React, { useState, useEffect } from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";
// import selectSong from "../actions"; // import default export
// import { selectSong } from "../actions"; // import named export

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
