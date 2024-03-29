import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App";
import reducers from "./reducers";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  // create instance of Provider, wrap the App component within it and pass store as a prop
  <Provider store={createStore(reducers)}>
    <App tab="home" />
  </Provider>
);
