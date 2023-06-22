import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStream, deleteStream } from "../../actions";
import browserHistory from "../../browserHistory";
import Modal from "../Modal";

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <Link to="/" className="ui button">
          Cancel
        </Link>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui button negative"
        >
          Delete
        </button>
      </React.Fragment>

      // short syntax of React.Fragment
      // <>
      //   <button className="ui button ">Cancel</button>
      //   <button className="ui button negative">Delete</button>
      // </>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure to delete that stream?";
    }

    return `Are you sure to delete stream "${this.props.stream.title}"`;
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => browserHistory.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
