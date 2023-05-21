import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store";
import { Provider } from "react-redux";

import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // create instance of Provider, wrap the App component within it and pass store as a prop
  <Provider store={store}>
    <App />
  </Provider>
);
