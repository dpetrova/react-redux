import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  /* the order of events: 
  - first are called the native events element.addEventListener(...)
  - second are called those events setup in React onClick={}
  - each with event bubbling child->parent
  */

  // close the dropdown when click outside it
  useEffect(() => {
    const onBodyClick = (event) => {
      // do nothing if click on element inside the dropdown
      if (dropdownRef.current.contains(event.target)) {
        return;
      }
      // otherwise close the dropdown
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    // cleanup -> remove event listener when component unmount (remove from the DOM)
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) return null;
    return (
      <div
        key={option.value}
        onClick={() => onSelectedChange(option)}
        className="item"
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={dropdownRef} className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
