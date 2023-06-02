import React, { Component } from "react";

class GoogleOAuth extends Component {
  state = { isSignedIn: null };

  /* using Google Identity Service JavaScript library using the token model */
  componentDidMount() {
    // call initTokenClient() to initialize a new token client with your web app's client ID,
    // optionally you may include a list of one or more scopes the user needs to access
    this.auth = google.accounts.oauth2.initTokenClient({
      client_id:
        "797401886567-9cumct9mrt3v2va409rasa7fa6fq02hh.apps.googleusercontent.com",
      scope:
        "email \
        profile",
      callback: (tokenResponse) => {
        this.access_token = tokenResponse.access_token;
      },
    });
  }

  onSignIn = () => {
    // TODO
    this.auth.requestAccessToken();
    this.setState({ isSignedIn: true });
  };

  onSignOut = () => {
    // TODO
    this.auth.revoke(this.access_token);
    this.setState({ isSignedIn: false });
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOut} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignIn} className="ui green google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleOAuth;
