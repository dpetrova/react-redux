import React from "react";
// import contexts
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  // renderLabel(text) {
  //   return text === "US" ? "Submit" : "Изпрати";
  // }

  // renderButton(color) {
  //   return (
  //     <button className={`ui button ${color}`}>
  //       <LanguageContext.Consumer>
  //         {(value) => this.renderLabel(value)}
  //       </LanguageContext.Consumer>
  //     </button>
  //   );
  // }

  // render() {
  //   return (
  //     <ColorContext.Consumer>
  //       {(value) => this.renderButton(value)}
  //     </ColorContext.Consumer>
  //   );
  // }

  render() {
    // access the data in the context (the value provided by the Provider, or if not such - the default value)
    // here we using Consumer component because we access two contexts
    return (
      <ColorContext.Consumer>
        {(color) => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {(value) => (value === "US" ? "Submit" : "Изпрати")}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
