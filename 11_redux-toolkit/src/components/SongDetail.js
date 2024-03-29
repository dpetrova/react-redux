import React from "react";
import { useSelector } from "react-redux";

const SongDetail = () => {
  const selectedSong = useSelector((state) => state.song.selectedSong);

  if (!selectedSong) {
    return <div>Select a song!</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {selectedSong.title}
        <br />
        Duration: {selectedSong.duration}
      </p>
    </div>
  );
};

export default SongDetail;
