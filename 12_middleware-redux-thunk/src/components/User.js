import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class User extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const { user } = this.props;
    if (!user) return null;
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  // ownProps are reference to the component's props
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, {
  fetchUser,
})(User);
