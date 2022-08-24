//import useEffect hook -> it allows to use something like lifecycle methods in functional component
import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    if (term) search();
  }, [term]);

  /* useEffect is a function that takes 2 arguments: first -> is a function; second -> control when the function is executed 

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

  */

  /* using async functions with useEffect 

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

  */

  const renderedResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target="_blank"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          {/* direct render html (it is dangerous because of XSS attack) */}
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

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
      <div className="ui celled list">{renderedResults}</div>
    </React.Fragment>
  );
};

export default Search;
