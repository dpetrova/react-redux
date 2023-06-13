import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  /* preloadedState, */
  composeEnhancers(applyMiddleware(/*...middleware*/))
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
