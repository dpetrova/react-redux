import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import flvjs from "flv.js";

class StreamShow extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    // fetch stream
    this.props.fetchStream(id);

    // create flash video (FLV) player when initially create a component
    this.buildPlayer();
  }

  componentDidUpdate() {
    // eventually create video player when component updates (after fetching a stream)
    this.buildPlayer();
  }

  componentWillUnmount() {
    // destroy the player
    this.flvPlayer.destroy();
  }

  buildPlayer() {
    if (this.flvPlayer || !this.props.stream) {
      return;
    }

    const { id } = this.props.match.params;

    this.flvPlayer = flvjs.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    this.flvPlayer.attachMediaElement(this.videoRef.current);
    this.flvPlayer.load();
  }

  render() {
    if (!this.props.stream) {
      return <h3>Loading...</h3>;
    }

    const { title, description } = this.props.stream;
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  return {
    // get stream by provided id in the url
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
