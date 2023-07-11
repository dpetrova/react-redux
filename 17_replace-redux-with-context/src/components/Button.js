import React from "react";
// import contexts
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  renderLabel(language) {
    return language === "US" ? "Submit" : "Изпрати";
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderLabel(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(value) => this.renderButton(value)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
