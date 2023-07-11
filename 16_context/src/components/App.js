import React from "react";
import Panel from "./Panel";
// import contexts
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class App extends React.Component {
  state = { language: "BG" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <h2>
          Select language:
          <i className="flag bg" onClick={() => this.onLanguageChange("BG")} />
          <i className="flag us" onClick={() => this.onLanguageChange("US")} />
        </h2>
        {/* use Provider component of context to provide the context' value (change the default one if any);
        this will be used in any (deeply) nested child components;
        here we have two contexts
        */}
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <Panel />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
