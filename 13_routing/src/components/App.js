import React from "react";
import {
  BrowserRouter,
  HashRouter,
  MemoryRouter,
  Route,
  Link,
} from "react-router-dom";

const PageOne = () => {
  return <div>Page One</div>;
};
const PageTwo = () => {
  return <div>Page Two</div>;
};

const App = () => {
  return (
    <div className="ui container">
      {/* BrowserRouter uses everything after TLD (.com, .net) or port as path  */}
      <BrowserRouter>
        <div>
          {/* menu */}
          <div className="ui secondary pointing menu">
            <Link to="/" className="item">
              Page One
            </Link>
            <Link to="/pagetwo" className="item">
              Page Two
            </Link>
          </div>
          {/* components inside BrowserRouter are visible depending on current URL */}
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>

      {/* HashRouter uses everything after # as path  */}
      {/* <HashRouter>
        <div>
          <div className="ui secondary pointing menu">
            <Link to="/" className="item">
              Page One
            </Link>
            <Link to="/pagetwo" className="item">
              Page Two
            </Link>
          </div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </HashRouter> */}

      {/* MemoryRouter does not use the URL to track navigation  */}
      {/* <MemoryRouter>
        <div>
          <div className="ui secondary pointing menu">
            <Link to="/" className="item">
              Page One
            </Link>
            <Link to="/pagetwo" className="item">
              Page Two
            </Link>
          </div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </MemoryRouter> */}
    </div>
  );
};

export default App;
