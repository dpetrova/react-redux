// useState hook allows to have state variables in functional component
import React, { useState } from "react";

const Accordion = ({ items }) => {
  //useState hook to initialize state in fuction component
  //using array destructuring to get first two elements of the array and assigned them to variables activeIndex and setActiveIndex
  const [activeIndex, setActiveIndex] = useState(null); //set initial value of null

  const onItemClick = (index) => {
    //update state
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      // use React.Fragment to ensure JSX has one parent Element, and avoid to put any extra elements
      <React.Fragment key={index}>
        <div className="title" onClick={() => onItemClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        {/* conditional class */}
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
