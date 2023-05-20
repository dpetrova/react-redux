import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
  console.log("SongDetail's props: ", props);

  if (!props.song) {
    return <div>Select a song!</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {props.song.title}
        <br />
        Duration: {props.song.duration}
      </p>
    </div>
  );
};

// function to get data from redux store and provide it to a component
const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

// create instance of Connect component around SongDetail
// and provide as props piece of data and action creators that SongDetail needs to
export default connect(mapStateToProps)(SongDetail); // connect function return a function and we call that function
