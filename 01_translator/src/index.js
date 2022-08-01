/* index.js is a file that initially boots up the React application */

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

/* call the App function, get back JSX, and turn it into HTML,
than take that HTML and put it into the DOM inside div with id="root"
*/
ReactDOM.render(<App />, document.getElementById("root"));
