//import useEffect hook -> it allows to use something like lifecycle methods in functional component
import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term); //time lagged search term used to throttle api requests
  const [results, setResults] = useState([]);

  /* --- USEEFFECT ----
  useEffect is a function that takes 2 arguments: first -> is a function; second -> control when the function is executed 

  //run at initial render
  useEffect(() => {
    console.log("I ONLY RUN ONCE AT INITIAL RENDER");
  }, []);

  //run at initial render; and run after every rerender
  useEffect(() => {
    console.log("I RUN WITH EVERY RENDER");
  });

  //run at initial render; and run after every rerender if "term" has chanded since last render
  useEffect(() => {
    console.log("I RUN WITH EVERY RENDER IF term DATA IS CHANGED");
  }, [term]);

  */

  /* --- USING ASYNC FUNCTIONS WITH USEEFFECT ---

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

  /*  throttling (debouncing) */
  //flow: 1. invoke cleanup function returned from last time of useEffect invoking; 2. invoke overall useEffect function again
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500);

    // cleanup function (the only one thing that can be returned in useEffect)
    // it is called when component unmount (remove from the DOM) or updated and rerender!!!
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };

    if (debouncedTerm) search();
  }, [debouncedTerm]);

  //   useEffect(() => {
  //     const search = async () => {
  //       const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
  //         params: {
  //           action: "query",
  //           list: "search",
  //           origin: "*",
  //           format: "json",
  //           srsearch: term,
  //         },
  //       });

  //       setResults(data.query.search);
  //     };

  //     /*  throttling the call */
  //     if (term && !results.length) {
  //       //initial search without throttling
  //       search();
  //     } else {
  //       // delay the call
  //       const timerId = setTimeout(() => {
  //         if (term) search();
  //       }, 500);

  //       // cleanup function (the only one thing that can be returned in useEffect)
  //       return () => {
  //         clearTimeout(timerId);
  //       };
  //     }
  //   }, [term]);

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
