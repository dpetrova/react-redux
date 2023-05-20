import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderListOfSongs() {
    console.log("SongList's props: ", this.props);
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">
            {song.title}
            <div>
              <b>{song.title === this.props.favoriteTitle && "Favorite!"}</b>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderListOfSongs()}</div>;
  }
}

// function to get data from redux store and provide it to a component
const mapStateToProps = (state) => {
  console.log("state: ", state);
  return { songs: state.songs, favoriteTitle: state.favoriteTitle };
};

// create instance of Connect component around SongList
// and provide as props piece of data and action creators that SongList needs to
export default connect(mapStateToProps, {
  selectSong: selectSong,
})(SongList); // connect function return a function and we call that function
