import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";

const App = () => {
  return (
    <div className="ui container">
      {/* components inside BrowserRouter are visible depending on current URL */}
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/show" component={StreamShow} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit" component={StreamEdit} />
          <Route path="/streams/delete" component={StreamDelete} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
