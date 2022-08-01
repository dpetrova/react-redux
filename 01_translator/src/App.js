import "./styles.css";
/* useState is a function for working with React's state system;
state is used to keep track of data that changes over time;
used to make React update the HTML on the screen
*/
import React, { useState } from "react";
import Field from "./components/field";
import Languages from "./components/languages";
import Translate from "./components/translate";

/* App function is a React component that produces JSX and handles user events */
export default function App() {
  const [language, setLanguage] = useState("ru");
  const [text, setText] = useState("");

  return (
    <div>
      <Field label="Enter English" onChange={setText} value={text} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}
