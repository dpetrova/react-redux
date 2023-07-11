import React from "react";
// import context
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  // add context as property to the class Field (not to the instance)
  static contextType = LanguageContext;

  render() {
    // access the data in the context (the value provided by the Provider, or if not such - the default value)
    // here we using this.context because access a single context
    const defaultLanguage = this.context;
    const label = defaultLanguage === "US" ? "Name" : "Име";

    return (
      <div className="ui field">
        <label>{label}</label>
        <input />
      </div>
    );
  }
}

export default Field;
