import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Spanish",
    value: "es",
  },
  {
    label: "German",
    value: "de",
  },
  {
    label: "Bulgarian",
    value: "bg",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <React.Fragment>
      {/* text input */}
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      {/* language select */}
      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      {/* convert */}
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </React.Fragment>
  );
};

export default Translate;
