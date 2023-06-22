import React from "react";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import browserHistory from "../browserHistory"; //use manually created browser history object

const App = () => {
  return (
    <div className="ui container">
      {/* BrowserRouter use its own default implementation of history */}
      {/* <BrowserRouter> */}
      {/* to use manually created history you need to use plain Router */}
      <Router history={browserHistory}>
        <div>
          <Header />
          <Switch>
            {/* components inside BrowserRouter are visible depending on current URL */}
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" component={StreamCreate} />
            <Route path="/streams/edit/:id" component={StreamEdit} />
            <Route path="/streams/delete/:id" component={StreamDelete} />
            <Route path="/streams/:id" component={StreamShow} />
          </Switch>
        </div>
      </Router>
      {/* </BrowserRouter> */}
    </div>
  );
};

export default App;
