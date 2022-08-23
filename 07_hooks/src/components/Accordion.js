// import useState hook -> it allows to have state variables in functional component
import React, { useState } from "react";

const Accordion = ({ items }) => {
  //useState hook to initialize state in fuction component
  //using array destructuring of useState returned array to assign first two elements to variables: activeIndex, setActiveIndex
  const [activeIndex, setActiveIndex] = useState(null); //set initial value of null

  const onItemClick = (index) => {
    //update state
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
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
