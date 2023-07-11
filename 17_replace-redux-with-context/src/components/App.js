import React from "react";
import Panel from "./Panel";
import LanguageSelector from "./LanguageSelector";
// import contexts
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="red">
            <Panel />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
