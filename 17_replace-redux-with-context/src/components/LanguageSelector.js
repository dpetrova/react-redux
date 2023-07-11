import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return (
      <h2>
        Select language:
        <i
          className="flag bg"
          onClick={() => this.context.onLanguageChange("BG")}
        />
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("US")}
        />
      </h2>
    );
  }
}

export default LanguageSelector;
