import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      {/* <div className="ui big text loader">{props.message || "Loading..."}</div> */}
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

//setup deault props if such are not passed
Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
