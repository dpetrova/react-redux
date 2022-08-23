//import useEffect hook -> it allows to use something like lifecycle methods in functional component
import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");

  /* useEffect is a function that takes 2 arguments: first -> is a function; second -> control when the function is executed */
  //run at initial render
  useEffect(() => {
    console.log("I ONLY RUN ONCE AT INITIAL RENDER");
  }, []);
  //run at initial render; and run after every rerender
  useEffect(() => {
    console.log("I RUN WITH EVERY RENDER");
  });
  //run at initial render; and run after every rerender if term has chanded since last render
  useEffect(() => {
    console.log("I RUN WITH EVERY RENDER IF term DATA IS CHANGED");
  }, [term]);

  /* using async functions with useEffect */
  //using async helper function
  useEffect(() => {
    const search = async () => {
      const response = await axios.get("url");
    };
    search();
  }, [term]);
  //using IIFE helper function
  useEffect(() => {
    (async () => {
      const response = await axios.get("url");
    })();
  }, [term]);
  //using promises
  useEffect(() => {
    axios.get("url").then((response) => {});
  }, [term]);

  return (
    <React.Fragment>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Search;
