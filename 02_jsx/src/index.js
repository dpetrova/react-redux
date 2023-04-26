/* Import the React and createRoot form ReactDOM libriries */
import React from "react";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

/* Create a react component */
//A component is a Function or a Class that produces HTML to show (using JSX) and handles feedback from the users (using Event Handlers)
const App = () => {
  const button = { text: "Click me!" };
  const getTime = () => {
    return new Date().toLocaleTimeString();
  };

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      {/* 
      inline style is written in {{}} -> first {} indicates that we are going to reference a JS variable inside JSX, second {} is a JS object that we are referencing;
      kebap-case (e.g. background-color) is turn into a camelCase (backgroundColor)
      */}
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {button.text}
      </button>
      <h3>Current time:</h3>
      <h3>{getTime()}</h3>
    </div>
  );
};

/* Take the react component and show it on the screeen */
root.render(<App tab="home" />);
