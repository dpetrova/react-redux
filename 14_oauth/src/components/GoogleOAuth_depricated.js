import React, { Component } from "react";

class GoogleOAuth extends Component {
  state = { isSignedIn: null };

  /* depricated flow of using Google API Client Library for JavaScript (gapi) -> https://apis.google.com/js/api.js */
  // 1.load Google JavaScript client library
  // 2.initialize it
  // 3.get a reference to the auth object after it is initialized
  // 4.check if user is currently signed in
  // 5.dinamically show their authentication status on the screen

  componentDidMount() {
    //load the Google JavaScript client library and invokes `callback` afterwards
    //gapi.load("client", callback);

    //1. load specific auth2 portion of Google JavaScript client library
    gapi.load("client:auth2", () => {
      gapi.client
        // 2. initialize
        .init({
          clientId:
            "797401886567-9cumct9mrt3v2va409rasa7fa6fq02hh.apps.googleusercontent.com",
          scope: "email", // provide list of scopes that want to work with
        })
        .then(() => {
          // 3. get a reference to the auth
          this.auth = gapi.auth2.getAuthInstance();
          // 4. check if user is signed in
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          // 4. setup event listener for changes
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
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
