import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSong } from "../store/songSlice";

const SongList = () => {
  const songs = useSelector((state) => state.song.songs);
  const favoriteTitle = useSelector((state) => state.song.favoriteTitle);
  const dispatch = useDispatch();

  const renderListOfSongs = () => {
    return songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => dispatch(selectSong(song))}
            >
              Select
            </button>
          </div>
          <div className="content">
            {song.title}
            <div>
              <b>{song.title === favoriteTitle && "Favorite!"}</b>
            </div>
          </div>
        </div>
      );
    });
  };

  return <div className="ui divided list">{renderListOfSongs()}</div>;
};

export default SongList;
