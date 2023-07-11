import React from "react";

const Context = React.createContext("US");

export class LanguageStore extends React.Component {
  state = { language: "BG" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    // value of context here is a combination of state and callbacks
    // with this.props.children -> all components inside LanguageStore will have access to the context data
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
