import React from "react";
// import context
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const language = this.context.language;
    const label = language === "US" ? "Name" : "Име";

    return (
      <div className="ui field">
        <label>{label}</label>
        <input />
      </div>
    );
  }
}

export default Field;
